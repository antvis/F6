import { parseAttr } from '../parser/attr-parser';
import { isSelectorMatchDom, selectorToArr, walkDomSelector } from '../utils/index';

export class StyleNode {
  dom = null;
  style = null;
  children = [];
  originChildren = [];
}

const defaultStyle = {
  'font-family': 'serif',
};

const inheritAttr = [
  'font',
  'fontFamily',
  'fontWeight',
  'fontSize',
  'fontVariant',
  'fontStretch',
  'textIndent',
  'textAlign',
  'textShadow',
  'lineHeight',
  'color',
  'direction',
  'wordSpacing',
  'letterSpacing',
  'textTransform',
  'captionSide',
  'borderCollapse',
  'emptyCells',
  'listStyleType',
  'listStyleImage',
  'listStylePosition',
  'listStyle',
  'visibility',
  'cursor',
];

class StyleParser {
  domTree = null;
  cssTree = null;

  rulesHash = {
    ids: {},
    classes: {},
    tagNames: {},
  };

  constructor(domTree, cssTree) {
    this.domTree = domTree;
    this.cssTree = cssTree;
  }

  parse() {
    this.parseRulesHash(this.cssTree);
    return this.genStyleTree(this.domTree);
  }

  parseRulesHash(rules) {
    const rulesHash = this.rulesHash;
    for (let rule of rules.stylesheet.rules) {
      // 处理keyframe等
      if (rule.type !== 'rule') continue;
      for (let selector of rule.selectors) {
        const keySeletor = this.genKeySelector(selector);
        switch (keySeletor[0]) {
          case '#':
            const key = keySeletor.slice(1);
            rulesHash.ids[key] = [
              ...(rulesHash.ids[key] || []),
              {
                selector,
                specificity: this.genSpecificity(selector),
                style: this.genStyleFromRule(rule),
              },
            ];
            break;
          case '.':
            const classKey = keySeletor.slice(1);
            rulesHash.classes[classKey] = [
              ...(rulesHash.classes[classKey] || []),
              {
                selector,
                specificity: this.genSpecificity(selector),
                style: this.genStyleFromRule(rule),
              },
            ];
            break;
          default:
            rulesHash.tagNames[keySeletor] = [
              ...(rulesHash.tagNames[keySeletor] || []),
              {
                selector,
                specificity: this.genSpecificity(selector),
                style: this.genStyleFromRule(rule),
              },
            ];
            break;
        }
      }
    }
  }

  genStyleTree(root) {
    const rootStyleNode = new StyleNode();
    // 遍历doms
    const stack = [[root, [], rootStyleNode]];

    while (stack.length) {
      const [node, path, rootStyleNode, parentStyleNode] = stack.pop();
      rootStyleNode.dom = node;
      rootStyleNode.style = this.computeCSS(node, path, parentStyleNode?.style);
      // dom 查找样式并合并
      for (let child of node.children) {
        let styleNode = new StyleNode();
        rootStyleNode.originChildren.push(styleNode);
        stack.push([child, [...path, node], styleNode, rootStyleNode]);
      }
    }
    return rootStyleNode;
  }

  genSpecificity(selector) {
    const idCount = selector.match(/#\w+/g)?.length || 0;
    const classCount = selector.match(/\.\w+/g)?.length || 0;
    const arr = selector.split(/\s+|#|\./).filter((s) => s !== '');
    const tagCount = arr.length - idCount - classCount;
    return idCount * 100 + classCount * 10 + tagCount;
  }

  genKeySelector(ruleSel) {
    const selector = selectorToArr(ruleSel, /\s/).pop();

    let matchs = selector.match(/(#[^\.#]+)/);
    if (matchs?.length > 0) return matchs[0];

    matchs = selector.match(/\.[^\.#]+/);
    if (matchs?.length > 0) return matchs[0];

    return selector;
  }

  genStyleFromRule(rule) {
    return this.genStyleFromDeclaration(rule.declarations);
  }

  genStyleFromDeclaration(declarations) {
    const style = {};
    declarations.forEach((dn) => {
      let value = dn.value;
      style[dn.property] = value;
    });
    return style;
  }

  computeCSS(dom, path, parentStyle) {
    // 从hash表中拿到匹配的rules
    const filteredRules = [];
    walkDomSelector(dom, (keyName, selector) => {
      switch (keyName) {
        case 'id':
          filteredRules.push(...(this.rulesHash.ids[selector] || []));
          break;
        case 'class':
          filteredRules.push(...(this.rulesHash.classes[selector] || []));
          break;
        case 'tagName':
          filteredRules.push(...(this.rulesHash.tagNames[selector] || []));
        default:
          break;
      }
    });

    // 再根据路径筛选一次, 每条rule和dom的path去对比
    const finaleRules = filteredRules.filter((rule) => {
      // 判断selector是否和路径匹配，
      const ruleSelectors = selectorToArr(rule.selector, /\s+/g);
      // 逆序判断每个子选择器
      let lastSelMatch = ruleSelectors.length - 2;
      let lastDomMatch = path.length - 1;

      let result = true;
      for (; lastSelMatch > -1; lastSelMatch--) {
        let isMatch = false;
        for (; lastDomMatch > -1; lastDomMatch--) {
          // 不断取节点去匹配选择器
          const dom = path[lastDomMatch];
          // 路径中该节点匹配命中，准备匹配下个
          if (isSelectorMatchDom(dom, ruleSelectors[lastSelMatch])) {
            isMatch = true;
            break;
          }
        }
        if (!isMatch) {
          result = false;
          break;
        }
      }
      return result;
    });

    // 根据优先级排序
    finaleRules.sort((a, b) => a.specificity - b.specificity);

    // 按顺序合并style，高优先级覆盖
    const finalStyle = finaleRules.reduce((prev, cur) => Object.assign(prev, cur.style), {
      ...defaultStyle,
    });

    // 解析属性值/属性转驼峰
    let jsStyle = {};
    for (let [key, value] of Object.entries(finalStyle)) {
      const camel = key
        .split('-')
        .map((s, index) => {
          if (index > 0) {
            return `${s[0].toUpperCase()}${s.slice(1)}`;
          }
          return s;
        })
        .join('');

      const parsedValue = parseAttr(key, value);
      if (typeof parsedValue === 'object') {
        jsStyle = { ...jsStyle, ...parsedValue };
      } else {
        jsStyle[camel] = parsedValue;
      }
    }

    if (parentStyle) {
      // 处理继承属性
      for (let [key, value] of Object.entries(jsStyle)) {
        if (value === 'inherit' && inheritAttr.includes(key)) {
          delete jsStyle[key];
          if (parentStyle[key] !== undefined) {
            jsStyle[key] = parentStyle[key];
          }
        }
      }
      for (let [key, value] of Object.entries(parentStyle)) {
        if (inheritAttr.includes(key) && !jsStyle[key]) {
          jsStyle[key] = value;
        }
      }
    }

    return jsStyle;
  }
}

export default function (dom, css) {
  return new StyleParser(dom, css).parse();
}
