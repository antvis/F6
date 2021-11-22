const { version, homepage, repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        GATrackingId: 'UA-148148901-4',
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'F6',
    description: 'graph visualization engine for mobile devices',
    siteUrl: homepage,
    githubUrl: repository.url,
    showAPIDoc: true,
    isAntVSite: false,
    showChinaMirror: true, // 是否展示国内镜像链接
    showLanguageSwitcher: false, // 用于定义是否展示语言切换
    versions: {
      [version]: 'https://f6.antv.vision',
    },
    navs: [
      {
        slug: 'docs/manual/introduction',
        title: {
          zh: '教程',
          en: 'Manual',
        },
      },
      {
        slug: 'docs/api/Graph',
        title: {
          zh: 'API',
          en: 'API',
        },
      },
      {
        slug: 'docs/examples/tree/compactBox',
        title: {
          zh: '图表示例',
          en: 'Examples',
        },
      },
      {
        slug: 'https://www.yuque.com/antv/g6-blog',
        title: {
          zh: '博客',
          en: 'blog',
        },
      },
    ],
    docs: [
      // ===========Design===================

      {
        slug: 'manual/FAQ',
        title: {
          zh: 'FAQ',
          en: 'FAQ',
        },
        order: 2,
      },
      {
        slug: 'manual/tutorial',
        title: {
          zh: '入门教程',
          en: 'Tutorial',
        },
        order: 3,
      },
      {
        slug: 'manual/tutorial/mini',
        title: {
          zh: '小程序',
          en: 'Miniapp',
        },
        order: 2,
      },
      {
        slug: 'manual/tutorial/h5',
        title: {
          zh: '移动端H5',
          en: 'Mobile H5',
        },
        order: 3,
      },

      {
        slug: 'manual/tutorial/native',
        title: {
          zh: 'Native',
          en: 'Native',
        },
        order: 4,
      },
      // ===========Concepts===================
      {
        slug: 'manual/middle',
        title: {
          zh: '核心概念',
          en: 'Middle',
        },
        order: 4,
      },

      {
        slug: 'manual/middle/elements',
        title: {
          zh: '图元素：节点/边/Combo',
          en: 'Graph Elements',
        },
        order: 2,
      },

      {
        slug: 'manual/middle/elements/shape',
        title: {
          zh: '图形 Shape（选读）',
          en: 'Shape',
        },
        order: 1,
      },
      {
        slug: 'manual/middle/elements/nodes',
        title: {
          zh: '节点',
          en: 'Node',
        },
        order: 2,
      },
      {
        slug: 'manual/middle/elements/edges',
        title: {
          zh: '边',
          en: 'Edge',
        },
        order: 3,
      },
      {
        slug: 'manual/middle/elements/combos',
        title: {
          zh: 'Combo',
          en: 'Combo',
        },
        order: 4,
      },

      {
        slug: 'manual/middle/elements/nodes/built-in',
        title: {
          zh: '内置节点类型',
          en: 'Built-in Nodes',
        },
        order: 1,
      },
      {
        slug: 'manual/middle/elements/edges/built-in',
        title: {
          zh: '内置边类型',
          en: 'Built-in Edges',
        },
        order: 1,
      },
      {
        slug: 'manual/middle/elements/combos/built-in',
        title: {
          zh: '内置 Combo',
          en: 'Built-in Combos',
        },
        order: 1,
      },

      {
        slug: 'manual/middle/elements/advanced-style',
        title: {
          zh: '高级样式',
          en: 'Advanced Style',
        },
        order: 5,
      },
      {
        slug: 'manual/middle/elements/methods',
        title: {
          zh: '高级操作',
          en: 'Advanced operation',
        },
        order: 6,
      },

      {
        slug: 'manual/middle/layout',
        title: {
          zh: '图布局',
          en: 'Graph Layouts',
        },
        order: 3,
      },
      {
        slug: 'manual/middle/states',
        title: {
          zh: '交互与事件',
          en: 'Behavior & Event',
        },
        order: 4,
      },
      {
        slug: 'manual/middle/plugins',
        title: {
          zh: '分析组件',
          en: 'Component',
        },
        order: 6,
      },
      // ==============================
      {
        slug: 'manual/advanced',
        title: {
          zh: '拓展阅读',
          en: 'Further Reading',
        },
        order: 5,
      },
      // ==========API====================
      {
        slug: 'api/graphLayout',
        title: {
          zh: '图布局 Graph Layout',
          en: 'Graph Layout',
        },
        order: 2,
      },
      {
        slug: 'api/graphFunc',
        title: {
          zh: 'Graph 实例方法',
          en: 'Graph Functions',
        },
        order: 1,
      },
      {
        slug: 'api/treeGraphLayout',
        title: {
          zh: '树图布局 TreeGraph Layout',
          en: 'TreeGraph Layout',
        },
        order: 5,
      },
      {
        slug: 'api/Items',
        title: {
          zh: '元素方法和配置',
          en: 'Item Functions & Options',
        },
        order: 6,
      },
      {
        slug: 'examples/case',
        title: {
          zh: '场景案例',
          en: 'Case',
        },
      },
      {
        slug: 'examples/case/customTree',
        title: {
          zh: '自定义树',
          en: 'customTree',
        },
      },
      {
        slug: 'examples/case/newsDemo',
        title: {
          zh: '新闻图可视化',
          en: 'newsDemo',
        },
      },
      {
        slug: 'examples/case/simpleCase',
        title: {
          zh: '经典案例',
          en: 'simpleCase',
        },
      },
      // 暂时隐藏起来
      //{
      //  slug: 'examples/gallery',
      //  icon: 'gallery',
      //  title: {
      //    zh: '所有图表',
      //    en: 'All Demos',
      //  },
      //},
      {
        slug: 'examples/tree',
        icon: 'tree', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '树图',
          en: 'Tree Graph',
        },
      },
      {
        slug: 'examples/net',
        icon: 'net',
        title: {
          zh: '一般图',
          en: 'General Graph',
        },
      },
      {
        slug: 'examples/graphql',
        icon: 'graphql',
        title: {
          zh: '其他表达形式',
          en: 'Net Charts',
        },
      },
      {
        slug: 'examples/item',
        icon: 'shape',
        title: {
          zh: '元素',
          en: 'Item',
        },
      },
      {
        slug: 'examples/interaction',
        icon: 'interaction',
        title: {
          zh: '交互',
          en: 'Interaction',
        },
      },
      {
        slug: 'examples/scatter',
        icon: 'scatter',
        title: {
          zh: '动画',
          en: 'Animation',
        },
      },
      {
        slug: 'examples/tool',
        icon: 'tool',
        title: {
          zh: '组件',
          en: 'Component',
        },
      },
      {
        slug: 'examples/algorithm',
        icon: 'gallery',
        title: {
          zh: '算法',
          en: 'Algorithm',
        },
      },
      {
        slug: 'examples/performance',
        icon: 'net',
        title: {
          zh: '性能测试',
          en: 'Performance',
        },
      },
    ],
    docsearchOptions: {
      apiKey: '9d1cd586972bb492b7b41b13a949ef30',
      indexName: 'antv_g6',
    },
  },
};
