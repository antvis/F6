export const list = [
  {
    id: 'view',
    name: '视图容器',
    open: false,
    pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view'],
  },
  {
    id: 'content',
    name: '基础内容',
    open: false,
    pages: ['text', 'icon', 'progress', 'rich-text'],
  },
  {
    id: 'form',
    name: '表单组件',
    open: false,
    pages: [
      'button',
      'checkbox',
      'form',
      'input',
      'label',
      'picker',
      'picker-view',
      'radio',
      'slider',
      'switch',
      'textarea',
      'editor',
    ],
  },
  {
    id: 'nav',
    name: '导航',
    open: false,
    pages: ['navigator'],
  },
  {
    id: 'media',
    name: '媒体组件',
    open: false,
    pages: ['image', 'video', 'camera', 'live-pusher', 'live-player'],
  },
  {
    id: 'map',
    name: '地图',
    open: false,
    pages: ['map'],
  },
  {
    id: 'canvas',
    name: '画布',
    open: false,
    pages: ['canvas', 'canvas-2d', 'webgl'],
  },
  {
    id: 'open',
    name: '开放能力',
    open: false,
    pages: ['ad', 'open-data', 'web-view'],
  },
  {
    id: 'obstacle-free',
    name: '无障碍访问',
    open: false,
    pages: ['aria-component'],
  },
];

// 下面是第一个tab中的内容
export const treeGraphContainer = [
  {
    name: '紧凑树',
    thumb: '/images/icon/compactbox.png',
    nameEn: 'CompactTree',
    detailList: [
      {
        name: '紧凑树',
        path: '/package-tree-graph/pages/tree-graph/compact-box/index',
      },
      {
        name: '至上而下的紧凑树',
        path: '/package-tree-graph/pages/tree-graph/tb-compact-box/index',
      },
      {
        name: '节点左对齐的紧凑树',
        path: '/package-tree-graph/pages/tree-graph/compact-box-left-align/index',
      },
    ],
  },
  {
    name: '生态树',
    thumb: '/images/icon/dendrogram.png',
    nameEn: 'Dendrogram',
    detailList: [
      {
        name: '生态树',
        path: '/package-tree-graph/pages/tree-graph/basic-dendrogram/index',
      },
      {
        name: '至上而下的生态树',
        path: '/package-tree-graph/pages/tree-graph/tb-dendrogram/index',
      },
    ],
  },
  {
    name: '脑图树',
    thumb: '/images/icon/mind.png',
    nameEn: 'MindMap',
    detailList: [
      {
        name: '子节点自动两侧分布',
        path: '/package-tree-graph/pages/tree-graph/mind-map/index',
      },
      {
        name: '子节点右侧分布',
        path: '/package-tree-graph/pages/tree-graph/right-mind-map/index',
      },
      {
        name: '子节点左侧分布',
        path: '/package-tree-graph/pages/tree-graph/left-mind-map/index',
      },
      {
        name: '自定义子节点分布',
        path: '/package-tree-graph/pages/tree-graph/custom-side-mind-map/index',
      },
    ],
  },
  {
    name: '缩进树',
    thumb: '/images/icon/indent.png',
    nameEn: 'Intend',
    path: '/page/component/movable-view/movable-view',
    detailList: [
      {
        name: '文件系统',
        path: '/package-tree-graph/pages/tree-graph/file-system/index',
      },
      {
        name: '顶部对齐',
        path: '/package-tree-graph/pages/tree-graph/intend-align-top/index',
      },
      {
        name: '子节点两侧分布',
        path: '/package-tree-graph/pages/tree-graph/h-intended/index',
      },
    ],
  },
  {
    name: '辐射树',
    thumb: '/images/icon/radial.png',
    nameEn: 'Radial',
    detailList: [
      {
        name: '生态辐射树',
        path: '/package-tree-graph/pages/tree-graph/radial-dendrogram/index',
      },
      {
        name: '紧凑辐射树',
        path: '/package-tree-graph/pages/tree-graph/radial-compact-box/index',
      },
    ],
  },
  {
    name: '定制样式树',
    thumb: '/images/icon/dingzhi.png',
    nameEn: 'Custom',
    detailList: [
      {
        name: '自定义树中的边',
        path: '/package-tree-graph/pages/tree-graph/custom-edge-tree/index',
      },
      {
        name: '树边上的标签',
        path: '/package-tree-graph/pages/tree-graph/tree-edge-label/index',
      },
      {
        name: '复杂树样式',
        path: '/package-tree-graph/pages/tree-graph/custom-tree/index',
      },
    ],
  },
];

export const generalGraphContainer = [
  {
    name: '力导向图',
    thumb: '/images/icon/fa.png',
    nameEn: 'ForceAtalas',
    detailList: [
      {
        name: 'FA布局及节点拖拽',
        path: '/package-general-graph/pages/general-graph/basic-force-directed/index',
      },
      {
        name: 'FA2布局',
        path: '/package-general-graph/pages/general-graph/basic-FA2/index',
      },
      {
        name: 'FA布局防止节点重叠',
        path: '/package-general-graph/pages/general-graph/force-directed-prevent-overlap/index',
      },
      {
        name: 'FA布局聚类',
        path: '/package-general-graph/pages/general-graph/force-directed-force-clustering/index',
      },
      {
        name: '定制不同节点的参数',
        path: '/package-general-graph/pages/general-graph/force-directed-functional-params/index',
      },
      {
        name: '固定被拖拽节点',
        path: '/package-general-graph/pages/general-graph/basic-force-directed-drag-fix/index',
      },
      {
        name: 'FA布局参数动态变化',
        path: '/package-general-graph/pages/general-graph/force-directed-configuration-translate/index',
      },
      {
        name: 'FA气泡图',
        path: '/package-general-graph/pages/general-graph/force-bubbles/index',
      },
      {
        name: '约束在范围内布局',
        path: '/package-general-graph/pages/general-graph/force-constrained-in-rect/index',
      },
      {
        name: 'Combo FA布局',
        path: '/package-general-graph/pages/general-graph/basic-combo-force/index',
      },
    ],
  },
  {
    name: '流程图',
    thumb: '/images/icon/dagre.png',
    nameEn: 'Dagre',
    detailList: [
      {
        name: '流程图',
        path: '/package-general-graph/pages/general-graph/basic-dagre/index',
      },
      {
        name: '带有Combo的流程图',
        path: '/package-general-graph/pages/general-graph/dagre-combo/index',
      },
      {
        name: '自左向右的流程图',
        path: '/package-general-graph/pages/general-graph/dagre/index',
      },
      {
        name: '自左向右的流程图对齐',
        path: '/package-general-graph/pages/general-graph/dagre-UL/index',
      },
      {
        name: '布局参数动态变化',
        path: '/package-general-graph/pages/general-graph/dagre-configuration-translate/index',
      },
    ],
  },
  {
    name: 'Fruchterman图',
    thumb: '/images/icon/terms.png',
    nameEn: 'Fruchterman',
    detailList: [
      {
        name: '基本Fruchterman',
        path: '/package-general-graph/pages/general-graph/fruchterman/index',
      },
      {
        name: 'Fruchterman聚类',
        path: '/package-general-graph/pages/general-graph/fruchterman-clustering/index',
      },
      {
        name: '参数动态变化',
        path: '/package-general-graph/pages/general-graph/fruchterman-configuration-translate/index',
      },
    ],
  },
  {
    name: '辐射图',
    thumb: '/images/icon/radial.png',
    nameEn: 'Radial',
    detailList: [
      {
        name: '基本辐射布局',
        path: '/package-general-graph/pages/general-graph/basic-radial/index',
      },
      {
        name: '防止节点重叠的严格辐射布局',
        path: '/package-general-graph/pages/general-graph/prevent-overlap-radial/index',
      },
      {
        name: '防止节点重叠的非严格辐射布局',
        path: '/package-general-graph/pages/general-graph/prevent-overlap-unstrict-radial/index',
      },
      {
        name: '交互扩展节点的辐射布局',
        path: '/package-general-graph/pages/general-graph/interact-radial/index',
      },
      {
        name: '布局参数动态变化',
        path: '/package-general-graph/pages/general-graph/radial-configuration-translate/index',
      },
      {
        name: '同层节点按照指定字段聚类',
        path: '/package-general-graph/pages/general-graph/sort-radial/index',
      },
    ],
  },
  {
    name: '环形图',
    thumb: '/images/icon/circle.png',
    nameEn: 'Circle',
    detailList: [
      {
        name: '基本环形布局',
        path: '/package-general-graph/pages/general-graph/basic-circular/index',
      },
      {
        name: '按节点度数排序',
        path: '/package-general-graph/pages/general-graph/degree-circular/index',
      },
      {
        name: '螺旋线布局',
        path: '/package-general-graph/pages/general-graph/spiral-circular/index',
      },
      {
        name: '分割环形布局',
        path: '/package-general-graph/pages/general-graph/division-circular/index',
      },
      {
        name: '参数动态变化',
        path: '/package-general-graph/pages/general-graph/circular-configuration-translate/index',
      },
    ],
  },
  {
    name: '网格图',
    thumb: '/images/icon/grid.png',
    nameEn: 'Grid',
    detailList: [
      {
        name: '基本网格布局',
        path: '/package-general-graph/pages/general-graph/basic-grid/index',
      },
      {
        name: '指定排序方式的网格布局',
        path: '/package-general-graph/pages/general-graph/cluster-grid/index',
      },
    ],
  },
  {
    name: '同心圆',
    thumb: '/images/icon/concentric.png',
    nameEn: 'Concentric',
    detailList: [
      {
        name: '基本同心圆布局',
        path: '/package-general-graph/pages/general-graph/basic-concentric/index',
      },
    ],
  },
  {
    name: '降维图',
    thumb: '/images/icon/degree.png',
    nameEn: 'MDS',
    detailList: [
      {
        name: '基本降维布局图',
        path: '/package-general-graph/pages/general-graph/basic-MDS/index',
      },
    ],
  },
  {
    name: '弧线图',
    thumb: '/images/icon/arc.png',
    nameEn: 'Arc Diagram ',
    detailList: [
      {
        name: '基本弧线图',
        path: '/package-general-graph/pages/general-graph/basic-arc-diagram/index',
      },
      {
        name: '环形弧线图',
        path: '/package-general-graph/pages/general-graph/circular-arc-diagram/index',
      },
    ],
  },
  {
    name: '布局机制',
    thumb: '/images/icon/buju.png',
    nameEn: 'Layout',
    detailList: [
      {
        name: '布局切换',
        path: '/package-general-graph/pages/general-graph/layoutTranslate/index',
      },
      {
        name: '子图布局',
        path: '/package-general-graph/pages/general-graph/subgraph-layout/index',
      },
      {
        name: '流水线子图布局',
        path: '/package-general-graph/pages/general-graph/sublayout-pipes/index',
      },
      {
        name: '数据动态切换',
        path: '/package-general-graph/pages/general-graph/data-change/index',
      },
      {
        name: '自定义二分图布局',
        path: '/package-general-graph/pages/general-graph/custom-bi-graph/index',
      },
      {
        name: '布局时机监听',
        path: '/package-general-graph/pages/general-graph/layout-timing/index',
      },
    ],
  },
];

export const basicElementContainer = [
  {
    name: '内置节点',
    thumb: '/images/icon/node.png',
    nameEn: 'Node',
    detailList: [
      {
        name: '圆形',
        path: '/package-elements/pages/elements/circle/index',
      },
      {
        name: '甜甜圈',
        path: '/package-elements/pages/elements/donut/index',
      },
      {
        name: '椭圆',
        path: '/package-elements/pages/elements/ellipse/index',
      },
      {
        name: '矩形',
        path: '/package-elements/pages/elements/rect/index',
      },
      {
        name: '模态矩形',
        path: '/package-elements/pages/elements/mode-rect/index',
      },
      {
        name: '模态菱形',
        path: '/package-elements/pages/elements/diamond/index',
      },
      {
        name: '五角星',
        path: '/package-elements/pages/elements/star/index',
      },
      {
        name: '三角形',
        path: '/package-elements/pages/elements/triangle/index',
      },
      {
        name: '图片',
        path: '/package-elements/pages/elements/image/index',
      },
    ],
  },
  {
    name: '内置边',
    thumb: '/images/icon/defaultEdge.png',
    nameEn: 'Edge',
    detailList: [
      {
        name: '折线1',
        path: '/package-elements/pages/elements/polyline1/index',
      },
      {
        name: '折线2',
        path: '/package-elements/pages/elements/polyline2/index',
      },
      {
        name: '折线3',
        path: '/package-elements/pages/elements/polyline3/index',
      },
      {
        name: '三次贝塞尔曲线-垂直',
        path: '/package-elements/pages/elements/cubic1/index',
      },
      {
        name: '三次贝塞尔曲线-水平',
        path: '/package-elements/pages/elements/cubic2/index',
      },
      {
        name: '弧线',
        path: '/package-elements/pages/elements/arc/index',
      },
      {
        name: '自环边',
        path: '/package-elements/pages/elements/loop/index',
      },
    ],
  },
  {
    name: '内置组合',
    thumb: '/images/icon/combo.png',
    nameEn: 'Combo',
    detailList: [
      {
        name: '圆形',
        path: '/package-elements/pages/elements/circle-with-combo/index',
      },
      {
        name: '矩形',
        path: '/package-elements/pages/elements/rect-with-combo/index',
      },
    ],
  },
  {
    name: '边的箭头',
    thumb: '/images/icon/arrow.png',
    nameEn: 'Arrow',
    detailList: [
      {
        name: '默认内置箭头',
        path: '/package-elements/pages/elements/built-in-arrows/index',
      },
      {
        name: '自定义箭头',
        path: '/package-elements/pages/elements/custom-arrows/index',
      },
    ],
  },
  {
    name: '自定义节点',
    thumb: '/images/icon/customNode.png',
    nameEn: 'CustomNode',
    detailList: [
      {
        name: '卡片',
        path: '/package-elements/pages/elements/card/index',
      },
      {
        name: '卡片2',
        path: '/package-elements/pages/elements/card-node/index',
      },
      {
        name: '面积图节点',
        path: '/package-elements/pages/elements/area-chart/index',
      },
      {
        name: '堆叠图节点',
        path: '/package-elements/pages/elements/stack-chart/index',
      },
      {
        name: '折线图节点',
        path: '/package-elements/pages/elements/line-chart/index',
      },
      {
        name: '南丁格尔图节点',
        path: '/package-elements/pages/elements/bar-chart/index',
      },
      {
        name: '点线图节点',
        path: '/package-elements/pages/elements/point-chart/index',
      },
      {
        name: '饼图节点',
        path: '/package-elements/pages/elements/pie-chart/index',
      },
      {
        name: '列表',
        path: '/package-elements/pages/elements/list/index',
      },
    ],
  },
  {
    name: '自定义边',
    thumb: '/images/icon/customEdge.png',
    nameEn: 'CustomEdge',
    detailList: [
      {
        name: '添加额外图形',
        path: '/package-elements/pages/elements/extra-shape/index',
      },
      {
        name: '自定义折线',
        path: '/package-elements/pages/elements/custom-polyline/index',
      },
      {
        name: '自定义折线2',
        path: '/package-elements/pages/elements/custom-polyline2/index',
      },
      {
        name: '多标签边',
        path: '/package-elements/pages/elements/edge-mul-label/index',
      },
    ],
  },
  {
    name: '自定义组合',
    thumb: '/images/icon/customCombo.png',
    nameEn: 'CustomCombo',
    detailList: [
      {
        name: '带有Marker的圆',
        path: '/package-elements/pages/elements/c-circle/index',
      },
      {
        name: '带有Marker的矩形',
        path: '/package-elements/pages/elements/c-rect/index',
      },
    ],
  },
  {
    name: '超长文本',
    thumb: '/images/icon/article.png',
    nameEn: 'Long',
    detailList: [
      {
        name: '文本超长',
        path: '/package-elements/pages/elements/label-len/index',
      },
      {
        name: '使用换行符处理',
        path: '/package-elements/pages/elements/label-len1/index',
      },
    ],
  },
  {
    name: '文本背景',
    thumb: '/images/icon/background.png',
    nameEn: 'Background',
    detailList: [
      {
        name: '节点文本背景',
        path: '/package-elements/pages/elements/node-bg/index',
      },
      {
        name: '边上文本背景',
        path: '/package-elements/pages/elements/edge-bg/index',
      },
    ],
  },
  {
    name: '多边定点',
    thumb: '/images/icon/multiedges.png',
    nameEn: 'Multiple',
    detailList: [
      {
        name: '两节点间存在多条边',
        path: '/package-elements/pages/elements/multi-edges/index',
      },
    ],
  },
];

export const basicInteractiveContainer = [
  // {
  //   name: '高亮',
  //   thumb: '/images/icon/button.png',
  //   nameEn: 'HighLight',
  //   detailList: [
  //     {
  //       name: '内置的高亮节点',
  //       path: '/package-interactive/pages/interactive/activate-relations/index',
  //     },
  //     {
  //       name: '自定义高亮',
  //       path: '/package-interactive/pages/interactive/highlight-dark/index',
  //     },
  //   ],
  // },
  {
    name: '自定义树图交互',
    thumb: '/images/icon/interact.png',
    nameEn: 'Tree-Graph',
    detailList: [
      {
        name: '拖拽子树改变结构',
        path: '/package-interactive/pages/interactive/drag-subtree/index',
      },
      {
        name: '合并同类兄弟节点',
        path: '/package-interactive/pages/interactive/collapse-slibing/index',
      },
      {
        name: '使用changeData',
        path: '/package-interactive/pages/interactive/change-data/index',
      },
      {
        name: '使用addChild',
        path: '/package-interactive/pages/interactive/add-child/index',
      },
    ],
  },
  {
    name: '节点分组',
    thumb: '/images/icon/label.png',
    nameEn: 'Combo',
    detailList: [
      {
        name: '圆形组合',
        path: '/package-interactive/pages/interactive/combo-circle/index',
      },
      {
        name: '矩形组合',
        path: '/package-interactive/pages/interactive/combo-rect/index',
      },
    ],
  },
  {
    name: '节点集轮廓包裹',
    thumb: '/images/icon/textarea.png',
    nameEn: 'Hull',
    detailList: [
      {
        name: '用轮廓包裹节点集合',
        path: '/package-interactive/pages/interactive/hull/index',
      },
      {
        name: '修改包裹内部成员',
        path: '/package-interactive/pages/interactive/change-members/index',
      },
    ],
  },
  {
    name: '聚集一个节点',
    thumb: '/images/icon/radio.png',
    nameEn: 'Move',
    detailList: [
      {
        name: '点击节点移动',
        path: '/package-interactive/pages/interactive/move/index',
      },
      {
        name: '点击节点动画',
        path: '/package-interactive/pages/interactive/move-animate/index',
      },
    ],
  },
  {
    name: '响应区域事件',
    thumb: '/images/icon/checkbox.png',
    nameEn: 'Response',
    detailList: [
      {
        name: '响应节点中部分区域',
        path: '/package-interactive/pages/interactive/partial-node/index',
      },
    ],
  },
  {
    name: '切换模式增加点和边',
    thumb: '/images/icon/switch.png',
    nameEn: 'Switch',
    detailList: [
      {
        name: '设置交互模式',
        path: '/package-interactive/pages/interactive/set-mode/index',
      },
    ],
  },
  {
    name: '自定义交互',
    thumb: '/images/icon/slider.png',
    nameEn: 'CustomInteraction',
    detailList: [
      {
        name: '两指平移画布',
        path: '/package-interactive/pages/interactive/canvas-two-fingers/index',
      },
    ],
  },
  {
    name: '画布交互',
    thumb: '/images/icon/picker-view.png',
    nameEn: 'Canvas',
    detailList: [
      {
        name: '缩放画布时固定元素',
        path: '/package-interactive/pages/interactive/fix-item/index',
      },
      {
        name: '拖拽画布时候隐藏',
        path: '/package-interactive/pages/interactive/hide-item/index',
      },
    ],
  },
];

export const aminationContainer = [
  {
    name: '节点动画',
    thumb: '/images/icon/nodeAminate.png',
    nameEn: 'NodeAnimate',
    detailList: [
      {
        name: '节点动画',
        path: '/package-animation/pages/animation/node-node/index',
      },
    ],
  },
  {
    name: '边动画',
    thumb: '/images/icon/edgeMove.png',
    nameEn: 'EdgeAnimate',
    detailList: [
      {
        name: '圆点沿边运动',
        path: '/package-animation/pages/animation/point-in-line/index',
      },
      {
        name: '虚线运动',
        path: '/package-animation/pages/animation/edge-edge/index',
      },
      {
        name: '无到有的边',
        path: '/package-animation/pages/animation/edge-line-growth/index',
      },
    ],
  },
  {
    name: '状态切换',
    thumb: '/images/icon/change.png',
    nameEn: 'Change',
    detailList: [
      {
        name: '状态与动画',
        path: '/package-animation/pages/animation/state-change-hover/index',
      },
    ],
  },
  {
    name: '节点移动动画',
    thumb: '/images/icon/nodeMove.png',
    nameEn: 'NodeMove',
    detailList: [
      {
        name: '节点移动动画',
        path: '/package-animation/pages/animation/change-position-default/index',
      },
    ],
  },
  {
    name: '自定义动画',
    thumb: '/images/icon/navigator.png',
    nameEn: 'CustomAminate',
    detailList: [
      {
        name: '自定义动画',
        path: '/package-animation/pages/animation/custom-animate-position/index',
      },
    ],
  },
];

// 下面是第二个tab内容
export const customizeTree = [
  {
    name: '自定义树图',
    thumb: '/images/icon/radial.png',
    nameEn: 'Custom',
    detailList: [
      {
        name: '决策树',
        path: '/package-scene-case/pages/scene-case/decision-tree/index',
      },
      {
        name: '知识图谱树',
        path: '/package-scene-case/pages/scene-case/knowledge-tree-graph/index',
      },
    ],
  },
];

export const classicCace = [
  {
    name: '经典案例',
    thumb: '/images/icon/classic.png',
    nameEn: 'Classic',
    detailList: [
      {
        name: '自定义流向图',
        path: '/package-scene-case/pages/scene-case/custom-flow/index',
      },
      // {
      //   name: '桑基图',
      //   path: '/package-scene-case/pages/scene-case/sankey/index',
      // },
      // {
      //   name: '思维导图',
      //   path: '/package-scene-case/pages/scene-case/mind-map/index',
      // },
      {
        name: '甜甜圈转账图',
        path: '/package-scene-case/pages/scene-case/donut-transfer/index',
      },
    ],
  },
];

export const newsMapVisualize = [
  {
    name: '新闻图可视化',
    thumb: '/images/icon/news.png',
    nameEn: 'News',
    detailList: [
      {
        name: '地铁路线图',
        path: '/package-scene-case/pages/scene-case/metro-lines/index',
      },
    ],
  },
];

export const plugins = [
  {
    name: '提示框',
    nameEn: 'Tooltip',
    detailList: [
      {
        name: 'Tooltip',
        path: '/package-plugin/pages/plugin/tool-tip/index',
      },
    ],
  },
  {
    name: '图例',
    nameEn: 'Legend',
    detailList: [
      {
        name: 'Legend',
        path: '/package-plugin/pages/plugin/legend/index',
      },
    ],
  },
  {
    name: '边过滤',
    nameEn: 'EdgeFilter',
    detailList: [
      {
        name: 'EdgeFilter',
        path: '/package-plugin/pages/plugin/edge-filter/index',
      },
    ],
  },
  {
    name: '鱼眼',
    nameEn: 'Fisheye',
    detailList: [
      {
        name: 'Fisheye',
        path: '/package-plugin/pages/plugin/fish-eye/index',
      },
    ],
  },
  {
    name: '时间轴',
    nameEn: 'Timebar',
    detailList: [
      {
        name: 'Timebar',
        path: '/package-plugin/pages/plugin/time-bar/index',
      },
    ],
  },
  {
    name: '缩放轴',
    nameEn: 'ZoomSlider',
    detailList: [
      {
        name: 'ZoomSlider',
        path: '/package-plugin/pages/plugin/zoom-slider/index',
      },
    ],
  },
  {
    name: '边绑定',
    nameEn: 'Bundling',
    detailList: [
      {
        name: 'Bundling',
        path: '/package-plugin/pages/plugin/bundling/index',
      },
    ],
  },
  {
    name: '上下文菜单',
    nameEn: 'Menu',
    detailList: [
      {
        name: 'Menu',
        path: '/package-plugin/pages/plugin/menu/index',
      },
    ],
  },
  {
    name: '对齐线',
    nameEn: 'SnapLine',
    detailList: [
      {
        name: 'SnapLine',
        path: '/package-plugin/pages/plugin/snap-line/index',
      },
    ],
  },
  {
    name: 'miniMap',
    nameEn: 'miniMap',
    detailList: [
      {
        name: 'miniMap',
        path: '/package-plugin/pages/plugin/mini-map/index',
      },
    ],
  }
];
