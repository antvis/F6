// 下面是第一个tab中的内容
export const treeGraphContainer = [
  {
    name: '紧凑树',
    thumb: '/common/images/icon/compactbox.png',
    nameEn: 'CompactTree',
    detailList: [
      {
        name: '紧凑树',
        path: '../tree-graph/compact-box/index',
      },
      {
        name: '至上而下的紧凑树',
        path: '../tree-graph/tb-compact-box/index',
      },
      {
        name: '节点左对齐的紧凑树',
        path: '../tree-graph/compact-box-left-align/index',
      },
    ],
  },
  {
    name: '生态树',
    thumb: '/common/images/icon/dendrogram.png',
    nameEn: 'Dendrogram',
    detailList: [
      {
        name: '生态树',
        path: '../tree-graph/basic-dendrogram/index',
      },
      {
        name: '至上而下的生态树',
        path: '../tree-graph/tb-dendrogram/index',
      },
    ],
  },
  {
    name: '脑图树',
    thumb: '/common/images/icon/mind.png',
    nameEn: 'MindMap',
    detailList: [
      {
        name: '子节点自动两侧分布',
        path: '../tree-graph/mind-map/index',
      },
      {
        name: '子节点右侧分布',
        path: '../tree-graph/right-mind-map/index',
      },
      {
        name: '子节点左侧分布',
        path: '../tree-graph/left-mind-map/index',
      },
      {
        name: '自定义子节点分布',
        path: '../tree-graph/custom-side-mind-map/index',
      },
    ],
  },
  {
    name: '缩进树',
    thumb: '/common/images/icon/indent.png',
    nameEn: 'Intend',
    path: '/page/component/movable-view/movable-view',
    detailList: [
      {
        name: '文件系统',
        path: '../tree-graph/file-system/index',
      },
      {
        name: '顶部对齐',
        path: '../tree-graph/intend-align-top/index',
      },
      {
        name: '子节点两侧分布',
        path: '../tree-graph/intended/index',
      },
    ],
  },
  {
    name: '辐射树',
    thumb: '/common/images/icon/radial.png',
    nameEn: 'Radial',
    detailList: [
      {
        name: '生态辐射树',
        path: '../tree-graph/radial-dendrogram/index',
      },
      {
        name: '紧凑辐射树',
        path: '../tree-graph/radial-compact-box/index',
      },
    ],
  },
  {
    name: '定制样式树',
    thumb: '/common/images/icon/dingzhi.png',
    nameEn: 'Custom',
    detailList: [
      {
        name: '自定义树中的边',
        path: '../tree-graph/custom-edge-tree/index',
      },
      {
        name: '树边上的标签',
        path: '../tree-graph/tree-edge-label/index',
      },
      {
        name: '复杂树样式',
        path: '../tree-graph/custom-tree/index',
      },
    ],
  },
];

export const generalGraphContainer = [
  {
    name: '力导向图',
    thumb: '/common/images/icon/fa.png',
    nameEn: 'ForceAtalas',
    detailList: [
      {
        name: 'FA布局及节点拖拽',
        path: '../general-graph/basic-force-directed/index',
      },
      {
        name: 'FA2布局',
        path: '../general-graph/basic-FA2/index',
      },
      {
        name: 'FA布局防止节点重叠',
        path: '../general-graph/force-directed-prevent-overlap/index',
      },
      {
        name: 'FA布局聚类',
        path: '../general-graph/force-directed-force-clustering/index',
      },
      {
        name: '定制不同节点的参数',
        path: '../general-graph/force-directed-functional-params/index',
      },
      {
        name: '固定被拖拽节点',
        path: '../general-graph/basic-force-directed-drag-fix/index',
      },
      {
        name: 'FA布局参数动态变化',
        path: '../general-graph/force-directed-configuration-translate/index',
      },
      {
        name: 'FA气泡图',
        path: '../general-graph/force-bubbles/index',
      },
      {
        name: '约束在范围内布局',
        path: '../general-graph/force-constrained-in-rect/index',
      },
      {
        name: 'Combo FA布局',
        path: '../general-graph/basic-combo-force/index',
      },
    ],
  },
  {
    name: '流程图',
    thumb: '/common/images/icon/dagre.png',
    nameEn: 'Dagre',
    detailList: [
      {
        name: '流程图',
        path: '../general-graph/basic-dagre/index',
      },
      {
        name: '带有Combo的流程图',
        path: '../general-graph/dagre-combo/index',
      },
      {
        name: '自左向右的流程图',
        path: '../general-graph/dagre/index',
      },
      {
        name: '自左向右的流程图对齐',
        path: '../general-graph/dagre-UL/index',
      },
      {
        name: '布局参数动态变化',
        path: '../general-graph/dagre-configuration-translate/index',
      },
    ],
  },
  {
    name: 'Fruchterman图',
    thumb: '/common/images/icon/terms.png',
    nameEn: 'Fruchterman',
    detailList: [
      {
        name: '基本Fruchterman',
        path: '../general-graph/fruchterman/index',
      },
      {
        name: 'Fruchterman聚类',
        path: '../general-graph/fruchterman-clustering/index',
      },
      {
        name: '参数动态变化',
        path: '../general-graph/fruchterman-configuration-translate/index',
      },
    ],
  },
  {
    name: '辐射图',
    thumb: '/common/images/icon/radial.png',
    nameEn: 'Radial',
    detailList: [
      {
        name: '基本辐射布局',
        path: '../general-graph/basic-radial/index',
      },
      {
        name: '防止节点重叠的严格辐射布局',
        path: '../general-graph/prevent-overlap-radial/index',
      },
      {
        name: '防止节点重叠的非严格辐射布局',
        path: '../general-graph/prevent-overlap-unstrict-radial/index',
      },
      {
        name: '交互扩展节点的辐射布局',
        path: '../general-graph/interact-radial/index',
      },
      {
        name: '布局参数动态变化',
        path: '../general-graph/radial-configuration-translate/index',
      },
      {
        name: '同层节点按照指定字段聚类',
        path: '../general-graph/sort-radial/index',
      },
    ],
  },
  {
    name: '环形图',
    thumb: '/common/images/icon/circle.png',
    nameEn: 'Circle',
    detailList: [
      {
        name: '基本环形布局',
        path: '../general-graph/basic-circular/index',
      },
      {
        name: '按节点度数排序',
        path: '../general-graph/degree-circular/index',
      },
      {
        name: '螺旋线布局',
        path: '../general-graph/spiral-circular/index',
      },
      {
        name: '分割环形布局',
        path: '../general-graph/division-circular/index',
      },
      {
        name: '参数动态变化',
        path: '../general-graph/circular-configuration-translate/index',
      },
    ],
  },
  {
    name: '网格图',
    thumb: '/common/images/icon/grid.png',
    nameEn: 'Grid',
    detailList: [
      {
        name: '基本网格布局',
        path: '../general-graph/basic-grid/index',
      },
      {
        name: '指定排序方式的网格布局',
        path: '../general-graph/cluster-grid/index',
      },
    ],
  },
  {
    name: '同心圆',
    thumb: '/common/images/icon/concentric.png',
    nameEn: 'Concentric',
    detailList: [
      {
        name: '基本同心圆布局',
        path: '../general-graph/basic-concentric/index',
      },
    ],
  },
  {
    name: '降维图',
    thumb: '/common/images/icon/degree.png',
    nameEn: 'MDS',
    detailList: [
      {
        name: '基本降维布局图',
        path: '../general-graph/basic-MDS/index',
      },
    ],
  },
  {
    name: '弧线图',
    thumb: '/common/images/icon/arc.png',
    nameEn: 'Arc Diagram ',
    detailList: [
      {
        name: '基本弧线图',
        path: '../general-graph/basic-arc-diagram/index',
      },
      {
        name: '环形弧线图',
        path: '../general-graph/circular-arc-diagram/index',
      },
    ],
  },
  {
    name: '布局机制',
    thumb: '/common/images/icon/buju.png',
    nameEn: 'Layout',
    detailList: [
      {
        name: '布局切换',
        path: '../general-graph/layout-translate/index',
      },
      {
        name: '子图布局',
        path: '../general-graph/subgraph-layout/index',
      },
      // {
      //   name: '流水线子图布局',
      //   path: '../general-graph/sublayoutPipes/index',
      // },
      {
        name: '数据动态切换',
        path: '../general-graph/data-change/index',
      },
      {
        name: '自定义二分图布局',
        path: '../general-graph/custom-bi-graph/index',
      },
      {
        name: '布局时机监听',
        path: '../general-graph/layout-timing/index',
      },
    ],
  },
];

export const basicElementContainer = [
  {
    name: '内置节点',
    thumb: '/common/images/icon/node.png',
    nameEn: 'Node',
    detailList: [
      {
        name: '圆形',
        path: '../elements/circle/index',
      },
      {
        name: '甜甜圈',
        path: '../elements/donut/index',
      },
      {
        name: '椭圆',
        path: '../elements/ellipse/index',
      },
      {
        name: '矩形',
        path: '../elements/rect/index',
      },
      {
        name: '模态矩形',
        path: '../elements/mode-rect/index',
      },
      {
        name: '模态菱形',
        path: '../elements/diamond/index',
      },
      {
        name: '五角星',
        path: '../elements/star/index',
      },
      {
        name: '三角形',
        path: '../elements/triangle/index',
      },
      {
        name: '图片',
        path: '../elements/image/index',
      },
    ],
  },
  {
    name: '内置边',
    thumb: '/common/images/icon/defaultEdge.png',
    nameEn: 'Edge',
    detailList: [
      {
        name: '折线1',
        path: '../elements/polyline1/index',
      },
      {
        name: '折线2',
        path: '../elements/polyline2/index',
      },
      {
        name: '折线3',
        path: '../elements/polyline3/index',
      },
      {
        name: '三次贝塞尔曲线-垂直',
        path: '../elements/cubic1/index',
      },
      {
        name: '三次贝塞尔曲线-水平',
        path: '../elements/cubic2/index',
      },
      {
        name: '弧线',
        path: '../elements/arc/index',
      },
      {
        name: '自环边',
        path: '../elements/loop/index',
      },
    ],
  },
  {
    name: '内置组合',
    thumb: '/common/images/icon/combo.png',
    nameEn: 'Combo',
    detailList: [
      {
        name: '圆形',
        path: '../elements/circle-with-combo/index',
      },
      {
        name: '矩形',
        path: '../elements/rect-with-combo/index',
      },
    ],
  },
  {
    name: '边的箭头',
    thumb: '/common/images/icon/arrow.png',
    nameEn: 'Arrow',
    detailList: [
      {
        name: '默认内置箭头',
        path: '../elements/built-in-arrows/index',
      },
      {
        name: '自定义箭头',
        path: '../elements/custom-arrows/index',
      },
    ],
  },
  {
    name: '自定义节点',
    thumb: '/common/images/icon/customNode.png',
    nameEn: 'CustomNode',
    detailList: [
      {
        name: '卡片',
        path: '../elements/card/index',
      },
      {
        name: '卡片2',
        path: '../elements/card-node/index',
      },
      {
        name: '面积图节点',
        path: '../elements/area-chart/index',
      },
      {
        name: '堆叠图节点',
        path: '../elements/stack-chart/index',
      },
      {
        name: '折线图节点',
        path: '../elements/line-chart/index',
      },
      {
        name: '南丁格尔图节点',
        path: '../elements/bar-chart/index',
      },
      {
        name: '点线图节点',
        path: '../elements/point-chart/index',
      },
      {
        name: '饼图节点',
        path: '../elements/pie-chart/index',
      },
      {
        name: '列表',
        path: '../elements/list/index',
      },
    ],
  },
  {
    name: '自定义边',
    thumb: '/common/images/icon/customEdge.png',
    nameEn: 'CustomEdge',
    detailList: [
      {
        name: '添加额外图形',
        path: '../elements/extra-shape/index',
      },
      {
        name: '自定义折线',
        path: '../elements/custom-polyline/index',
      },
      {
        name: '自定义折线2',
        path: '../elements/custom-polyline2/index',
      },
      {
        name: '多标签边',
        path: '../elements/edge-mul-label/index',
      },
    ],
  },
  {
    name: '自定义组合',
    thumb: '/common/images/icon/customCombo.png',
    nameEn: 'CustomCombo',
    detailList: [
      {
        name: '带有Marker的圆',
        path: '../elements/c-circle/index',
      },
      {
        name: '带有Marker的矩形',
        path: '../elements/c-rect/index',
      },
    ],
  },
  {
    name: '超长文本',
    thumb: '/common/images/icon/article.png',
    nameEn: 'Long',
    detailList: [
      {
        name: '文本超长',
        path: '../elements/label-len/index',
      },
      {
        name: '使用换行符处理',
        path: '../elements/label-len1/index',
      },
    ],
  },
  {
    name: '文本背景',
    thumb: '/common/images/icon/background.png',
    nameEn: 'Background',
    detailList: [
      {
        name: '节点文本背景',
        path: '../elements/node-bg/index',
      },
      {
        name: '边上文本背景',
        path: '../elements/edge-bg/index',
      },
    ],
  },
  {
    name: '多边定点',
    thumb: '/common/images/icon/multiedges.png',
    nameEn: 'Multiple',
    detailList: [
      {
        name: '两节点间存在多条边',
        path: '../elements/multi-edges/index',
      },
    ],
  },
];

export const basicInteractiveContainer = [
  // {
  //   name: '高亮',
  //   thumb: '/common/images/icon/button.png',
  //   nameEn: 'HighLight',
  //   detailList: [
  //     {
  //       name: '内置的高亮节点',
  //       path: '../interactive/activateRelations/index',
  //     },
  //     {
  //       name: '自定义高亮',
  //       path: '../interactive/highlightDark/index',
  //     },
  //   ],
  // },
  {
    name: '自定义树图交互',
    thumb: '/common/images/icon/interact.png',
    nameEn: 'Tree-Graph',
    detailList: [
      {
        name: '拖拽子树改变结构',
        path: '../interactive/drag-subtree/index',
      },
      {
        name: '合并同类兄弟节点',
        path: '../interactive/collapse-slibing/index',
      },
      {
        name: '使用changeData',
        path: '../interactive/change-data/index',
      },
      {
        name: '使用addChild',
        path: '../interactive/add-child/index',
      },
    ],
  },
  {
    name: '节点分组',
    thumb: '/common/images/icon/label.png',
    nameEn: 'Combo',
    detailList: [
      {
        name: '圆形组合',
        path: '../interactive/combo-circle/index',
      },
      {
        name: '矩形组合',
        path: '../interactive/combo-rect/index',
      },
    ],
  },
  {
    name: '节点集轮廓包裹',
    thumb: '/common/images/icon/textarea.png',
    nameEn: 'Hull',
    detailList: [
      {
        name: '用轮廓包裹节点集合',
        path: '../interactive/hull/index',
      },
      {
        name: '修改包裹内部成员',
        path: '../interactive/change-members/index',
      },
    ],
  },
  {
    name: '聚集一个节点',
    thumb: '/common/images/icon/radio.png',
    nameEn: 'Move',
    detailList: [
      {
        name: '点击节点移动',
        path: '../interactive/move/index',
      },
      {
        name: '点击节点动画',
        path: '../interactive/move-animate/index',
      },
    ],
  },
  {
    name: '响应区域事件',
    thumb: '/common/images/icon/checkbox.png',
    nameEn: 'Response',
    detailList: [
      {
        name: '响应节点中部分区域',
        path: '../interactive/partial-node/index',
      },
    ],
  },
  {
    name: '切换模式增加点和边',
    thumb: '/common/images/icon/switch.png',
    nameEn: 'Switch',
    detailList: [
      {
        name: '设置交互模式',
        path: '../interactive/set-mode/index',
      },
    ],
  },
  {
    name: '自定义交互',
    thumb: '/common/images/icon/slider.png',
    nameEn: 'CustomInteraction',
    detailList: [
      {
        name: '两指平移画布',
        path: '../interactive/canvas-two-fingers/index',
      },
    ],
  },
  {
    name: '画布交互',
    thumb: '/common/images/icon/picker-view.png',
    nameEn: 'Canvas',
    detailList: [
      {
        name: '缩放画布时固定元素',
        path: '../interactive/fix-item/index',
      },
      {
        name: '拖拽画布时候隐藏',
        path: '../interactive/hide-item/index',
      },
    ],
  },
];

export const aminationContainer = [
  {
    name: '节点动画',
    thumb: '/common/images/icon/nodeAminate.png',
    nameEn: 'NodeAnimate',
    detailList: [
      {
        name: '节点动画',
        path: '../animation/node-node/index',
      },
    ],
  },
  {
    name: '边动画',
    thumb: '/common/images/icon/edgeMove.png',
    nameEn: 'EdgeAnimate',
    detailList: [
      {
        name: '圆点沿边运动',
        path: '../animation/point-in-line/index',
      },
      {
        name: '虚线运动',
        path: '../animation/edge-edge/index',
      },
      {
        name: '无到有的边',
        path: '../animation/edge-line-growth/index',
      },
    ],
  },
  {
    name: '状态切换',
    thumb: '/common/images/icon/change.png',
    nameEn: 'Change',
    detailList: [
      {
        name: '状态与动画',
        path: '../animation/state-change-hover/index',
      },
    ],
  },
  {
    name: '节点移动动画',
    thumb: '/common/images/icon/nodeMove.png',
    nameEn: 'NodeMove',
    detailList: [
      {
        name: '节点移动动画',
        path: '../animation/change-position-default/index',
      },
    ],
  },
  {
    name: '自定义动画',
    thumb: '/common/images/icon/navigator.png',
    nameEn: 'CustomAminate',
    detailList: [
      {
        name: '自定义动画',
        path: '../animation/custom-animate-position/index',
      },
    ],
  },
];

// 下面是第二个tab内容
export const customizeTree = [
  {
    name: '自定义树图',
    thumb: '/common/images/icon/radial.png',
    nameEn: 'Custom',
    detailList: [
      // {
      //   name: '决策树',
      //   path: '../scene-case/decision-tree/index',
      // },
      {
        name: '知识图谱树',
        path: '../scene-case/knowledge-tree-graph/index',
      },
    ],
  },
];

export const classicCace = [
  {
    name: '经典案例',
    thumb: '/common/images/icon/classic.png',
    nameEn: 'Classic',
    detailList: [
      {
        name: '自定义流向图',
        path: '../scene-case/custom-flow/index',
      },
      // {
      //   name: '桑基图',
      //   path: '../scene-case/sankey/index',
      // },
      // {
      //   name: '思维导图',
      //   path: '../scene-case/mind-map/index',
      // },
      // {
      //   name: '甜甜圈转账图',
      //   path: '../scene-case/donut-transfer/index',
      // },
    ],
  },
];

export const newsMapVisualize = [
  {
    name: '新闻图可视化',
    thumb: '/common/images/icon/news.png',
    nameEn: 'News',
    detailList: [
      {
        name: '地铁路线图',
        path: '../scene-case/metro-lines/index',
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
        path: '../plugins/tool-tip/index',
      },
    ],
  },
  {
    name: '图例',
    nameEn: 'Legend',
    detailList: [
      {
        name: 'Legend',
        path: '../plugins/donut-transfer/index',
      },
    ],
  },
  {
    name: '边过滤',
    nameEn: 'EdgeFilter',
    detailList: [
      {
        name: 'EdgeFilter',
        path: '../plugins/edge-filter/index',
      },
    ],
  },
  {
    name: '鱼眼',
    nameEn: 'Fisheye',
    detailList: [
      {
        name: 'Fisheye',
        path: '../plugins/fisheye/index',
      },
    ],
  },
  {
    name: '时间轴',
    nameEn: 'Timebar',
    detailList: [
      {
        name: 'Timebar',
        path: '../plugins/timebar/index',
      },
    ],
  },
  {
    name: '缩放轴',
    nameEn: 'ZoomSlider',
    detailList: [
      {
        name: 'ZoomSlider',
        path: '../plugins/zoom-slider/index',
      },
    ],
  },
  {
    name: '边绑定',
    nameEn: 'Bundling',
    detailList: [
      {
        name: 'Bundling',
        path: '../plugins/bundling/index',
      },
    ],
  },
  {
    name: '上下文菜单',
    nameEn: 'Menu',
    detailList: [
      {
        name: 'Menu',
        path: '../plugins/menu/index',
      },
    ],
  },
  {
    name: '对齐线',
    nameEn: 'SnapLine',
    detailList: [
      {
        name: 'SnapLine',
        path: '../plugins/snap-line/index',
      },
    ],
  },
  {
    name: 'minimap',
    nameEn: 'minimap',
    detailList: [
      {
        name: 'minimap',
        path: '../plugins/mini-map/index',
      },
    ],
  }
];

// 控制搜索框下面的热搜词
export const hot = [
  { name: '知识图谱树', url: '../scene-case/knowledge-tree-graph/index' },
  { name: '基本弧线图', url: '../general-graph/basic-arc-diagram/index' },
  { name: 'FA气泡图', url: '../general-graph/force-bubbles/index' },
  { name: '无到有的边', url: '../animation/edge_line-growth/index' },
  { name: '自定义流向图', url: '../scene-case/custom-flow/index' },
  { name: '生态树', url: '../tree-graph/basic-dendrogram/index' },
  { name: '自定义树中的边', url: '../tree-graph/custom-edge-tree/index' },
  { name: '基本同心圆布局', url: '../general-graph/basic-concentric/index' },
  { name: '布局切换', url: '../general-graph/layout-translate/index' },
];

export const tabs = ['基础能力', '拓展能力'];
