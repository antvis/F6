import { parseAttr } from '../parser/attr-parser';

class Node {
  type = '';
  tagName = '';
  attrs = {};
  children = [];
  text = '';
}

class Helper {
  input = '';
  index = 0;
  constructor(input) {
    this.input = input;
  }
  stepNext() {
    this.index++;
  }
  cur() {
    return this.input[this.index];
  }
  twoChar() {
    return this.input[this.index] + this.input[this.index + 1];
  }
  stepWhile(test) {
    let s = '';

    while (this.index < this.input.length && test && test(this.input[this.index])) {
      s += this.input[this.index++];
    }

    return s;
  }

  skipWhiteSpace() {
    this.stepWhile((letter) => /\s/.test(letter));
  }

  getText() {
    return this.stepWhile((letter) => /[a-zA-Z0-9_]/.test(letter));
  }

  eof() {
    return this.index >= this.input.length;
  }
}

class HtmlParser {
  helper: Helper;

  constructor(input) {
    this.helper = new Helper(input);
  }

  parse() {
    return this.parseNodes();
  }

  parseNodes() {
    const nodes = [];
    while (true) {
      nodes.push(this.parseNode());
      this.helper.skipWhiteSpace();
      if (this.helper.eof() || this.helper.twoChar() === '</') {
        break;
      }
    }
    return nodes;
  }

  parseNode() {
    this.helper.skipWhiteSpace();
    if (this.helper.cur() === '<') {
      return this.parseElement();
    } else {
      return this.parseTextNode();
    }
  }

  parseElement() {
    const node = new Node();
    node.type = 'element';
    this.helper.stepNext();
    const startTag = this.helper.getText();
    node.tagName = startTag;
    node.attrs = this.parseAttributes();

    // 自闭
    if (this.helper.twoChar() === '/>') {
      this.helper.stepNext();
      this.helper.stepNext();
      return node;
    }
    // 非自闭
    if (this.helper.cur() !== '>') throw new Error('解析标签开始失败');

    this.helper.stepNext();
    this.helper.skipWhiteSpace();

    // 排除空标签
    if (this.helper.twoChar() !== '</') {
      node.children.push(...this.parseNodes());
      this.helper.skipWhiteSpace();
    }

    if (this.helper.twoChar() !== '</') throw new Error('解析标签结束失败');
    this.helper.stepNext();
    this.helper.stepNext();

    const endTag = this.helper.getText();
    if (endTag !== startTag) throw new Error('解析标签结束失败');
    if (this.helper.cur() !== '>') throw new Error('解析标签结束失败');
    this.helper.stepNext();
    return node;
  }

  parseTextNode() {
    const node = new Node();
    const text = this.helper.stepWhile((s) => /[^<]/.test(s));
    node.type = 'text';
    node.tagName = 'text';
    node.text = text;
    return node;
  }

  parseAttributes() {
    let attrs = {};
    this.helper.skipWhiteSpace();
    while (!this.helper.eof() && this.helper.cur() !== '>' && this.helper.twoChar() !== '/>') {
      const name = this.helper.stepWhile((letter) => /[^\s=]/.test(letter));
      this.helper.skipWhiteSpace();
      this.helper.stepNext();
      this.helper.skipWhiteSpace();
      let value = '';
      if (this.helper.cur() === '"') {
        this.helper.stepNext();
        value = this.helper.stepWhile((letter) => /[^"]/.test(letter));
        this.helper.stepNext();
      } else if (this.helper.cur() === "'") {
        this.helper.stepNext();
        value = this.helper.stepWhile((letter) => /[^']/.test(letter));
        this.helper.stepNext();
      } else {
        value = this.helper.stepWhile((letter) => /[^\s</>/]/.test(letter));
      }
      attrs[name] = parseAttr(name, value);
      this.helper.skipWhiteSpace();
    }
    return attrs;
  }

  removeQuote(value) {
    let result = value;
    if (/^["']/.test(result[0])) {
      result = result.slice(1);
    }
    if (/["']$/.test(result[result.length - 1])) {
      result = result.slice(0, -1);
    }
    return result;
  }
}

export default function parser(html, isNeedRoot = true) {
  const nodes = new HtmlParser(html).parse();
  let rootNode = nodes[0];
  if (nodes[0]?.tagName !== 'root' && isNeedRoot) {
    rootNode = new Node();
    rootNode.tagName = 'root';
    rootNode.children = nodes;
  }
  return rootNode;
}
