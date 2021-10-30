// 下面是第一个tab中的内容
export const treeGraphContainer = [
  {
    name: '紧凑树',
    thumb: '/common/images/icon/compactbox.png',
    nameEn: 'CompactTree',
    detailList: [
      {
        name: '紧凑树',
        path: '../TreeGraph/compactBox/index',
      },
      {
        name: '至上而下的紧凑树',
        path: '../TreeGraph/tbCompactBox/index',
      },
      {
        name: '节点左对齐的紧凑树',
        path: '../TreeGraph/compactBoxLeftAlign/index',
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
        path: '../TreeGraph/BasicDendrogram/index',
      },
      {
        name: '至上而下的生态树',
        path: '../TreeGraph/tbDendrogram/index',
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
        path: '../TreeGraph/mindMap/index',
      },
      {
        name: '子节点右侧分布',
        path: '../TreeGraph/RightMindMap/index',
      },
      {
        name: '子节点左侧分布',
        path: '../TreeGraph/LeftMindMap/index',
      },
      {
        name: '自定义子节点分布',
        path: '../TreeGraph/CustomSideMindMap/index',
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
        path: '../TreeGraph/fileSystem/index',
      },
      {
        name: '顶部对齐',
        path: '../TreeGraph/intendAlignTop/index',
      },
      {
        name: '子节点两侧分布',
        path: '../TreeGraph/hIntended/index',
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
        path: '../TreeGraph/radialDendrogram/index',
      },
      {
        name: '紧凑辐射树',
        path: '../TreeGraph/radialCompactBox/index',
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
        path: '../TreeGraph/customEdgeTree/index',
      },
      {
        name: '树边上的标签',
        path: '../TreeGraph/treeEdgeLabel/index',
      },
      {
        name: '复杂树样式',
        path: '../TreeGraph/customTree/index',
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
        path: '../GeneralGraph/basicForceDirected/index',
      },
      {
        name: 'FA2布局',
        path: '../GeneralGraph/basicFA2/index',
      },
      {
        name: 'FA布局防止节点重叠',
        path: '../GeneralGraph/forceDirectedPreventOverlap/index',
      },
      {
        name: 'FA布局聚类',
        path: '../GeneralGraph/forceDirected_forceClustering/index',
      },
      {
        name: '定制不同节点的参数',
        path: '../GeneralGraph/forceDirectedFunctionalParams/index',
      },
      {
        name: '固定被拖拽节点',
        path: '../GeneralGraph/basicForceDirectedDragFix/index',
      },
      {
        name: 'FA布局参数动态变化',
        path: '../GeneralGraph/forceDirectedConfigurationTranslate/index',
      },
      {
        name: 'FA气泡图',
        path: '../GeneralGraph/forceBubbles/index',
      },
      {
        name: '约束在范围内布局',
        path: '../GeneralGraph/forceConstrainedInRect/index',
      },
      {
        name: 'Combo FA布局',
        path: '../GeneralGraph/basicComboForce/index',
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
        path: '../GeneralGraph/basicDagre/index',
      },
      {
        name: '带有Combo的流程图',
        path: '../GeneralGraph/dagreCombo/index',
      },
      {
        name: '自左向右的流程图',
        path: '../GeneralGraph/Dagre/index',
      },
      {
        name: '自左向右的流程图对齐',
        path: '../GeneralGraph/DagreUL/index',
      },
      {
        name: '布局参数动态变化',
        path: '../GeneralGraph/dagreConfigurationTranslate/index',
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
        path: '../GeneralGraph/fruchterman/index',
      },
      {
        name: 'Fruchterman聚类',
        path: '../GeneralGraph/fruchtermanClustering/index',
      },
      {
        name: '参数动态变化',
        path: '../GeneralGraph/fruchtermanConfigurationTranslate/index',
      },
      {
        name: '使用Web-worker',
        path: '../GeneralGraph/fruchtermanWebWorker/index',
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
        path: '../GeneralGraph/basicRadial/index',
      },
      {
        name: '防止节点重叠的严格辐射布局',
        path: '../GeneralGraph/preventOverlapRadial/index',
      },
      {
        name: '防止节点重叠的非严格辐射布局',
        path: '../GeneralGraph/preventOverlapUnstrictRadial/index',
      },
      {
        name: '交互扩展节点的辐射布局',
        path: '../GeneralGraph/interactRadial/index',
      },
      {
        name: '布局参数动态变化',
        path: '../GeneralGraph/radialConfigurationTranslate/index',
      },
      {
        name: '同层节点按照指定字段聚类',
        path: '../GeneralGraph/sortRadial/index',
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
        path: '../GeneralGraph/basicCircular/index',
      },
      {
        name: '按节点度数排序',
        path: '../GeneralGraph/degreeCircular/index',
      },
      {
        name: '螺旋线布局',
        path: '../GeneralGraph/spiralCircular/index',
      },
      {
        name: '分割环形布局',
        path: '../GeneralGraph/divisionCircular/index',
      },
      {
        name: '参数动态变化',
        path: '../GeneralGraph/circularConfigurationTranslate/index',
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
        path: '../GeneralGraph/basicGrid/index',
      },
      {
        name: '指定排序方式的网格布局',
        path: '../GeneralGraph/clusterGrid/index',
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
        path: '../GeneralGraph/basicConcentric/index',
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
        path: '../GeneralGraph/basicMDS/index',
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
        path: '../GeneralGraph/basicArcDiagram/index',
      },
      {
        name: '环形弧线图',
        path: '../GeneralGraph/circularArcDiagram/index',
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
        path: '../GeneralGraph/layoutTranslate/index',
      },
      {
        name: '子图布局',
        path: '../GeneralGraph/subgraphLayout/index',
      },
      // {
      //   name: '流水线子图布局',
      //   path: '../GeneralGraph/sublayoutPipes/index',
      // },
      {
        name: '数据动态切换',
        path: '../GeneralGraph/dataChange/index',
      },
      {
        name: '自定义二分图布局',
        path: '../GeneralGraph/customBiGraph/index',
      },
      {
        name: '布局时机监听',
        path: '../GeneralGraph/layoutTiming/index',
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
        path: '../Elements/circle/index',
      },
      {
        name: '甜甜圈',
        path: '../Elements/donut/index',
      },
      {
        name: '椭圆',
        path: '../Elements/ellipse/index',
      },
      {
        name: '矩形',
        path: '../Elements/rect/index',
      },
      {
        name: '模态矩形',
        path: '../Elements/modeRect/index',
      },
      {
        name: '模态菱形',
        path: '../Elements/diamond/index',
      },
      {
        name: '五角星',
        path: '../Elements/star/index',
      },
      {
        name: '三角形',
        path: '../Elements/triangle/index',
      },
      {
        name: '图片',
        path: '../Elements/image/index',
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
        path: '../Elements/polyline1/index',
      },
      {
        name: '折线2',
        path: '../Elements/polyline2/index',
      },
      {
        name: '折线3',
        path: '../Elements/polyline3/index',
      },
      {
        name: '三次贝塞尔曲线-垂直',
        path: '../Elements/cubic1/index',
      },
      {
        name: '三次贝塞尔曲线-水平',
        path: '../Elements/cubic2/index',
      },
      {
        name: '弧线',
        path: '../Elements/arc/index',
      },
      {
        name: '自环边',
        path: '../Elements/loop/index',
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
        path: '../Elements/circleWithCombo/index',
      },
      {
        name: '矩形',
        path: '../Elements/rectWithCombo/index',
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
        path: '../Elements/built_in_arrows/index',
      },
      {
        name: '自定义箭头',
        path: '../Elements/customArrows/index',
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
        path: '../Elements/card/index',
      },
      {
        name: '卡片2',
        path: '../Elements/cardNode/index',
      },
      {
        name: '面积图节点',
        path: '../Elements/areaChart/index',
      },
      {
        name: '堆叠图节点',
        path: '../Elements/stackChart/index',
      },
      {
        name: '折线图节点',
        path: '../Elements/lineChart/index',
      },
      {
        name: '南丁格尔图节点',
        path: '../Elements/barChart/index',
      },
      {
        name: '点线图节点',
        path: '../Elements/pointChart/index',
      },
      {
        name: '饼图节点',
        path: '../Elements/pieChart/index',
      },
      {
        name: '列表',
        path: '../Elements/list/index',
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
        path: '../Elements/extraShape/index',
      },
      {
        name: '自定义折线',
        path: '../Elements/customPolyline/index',
      },
      {
        name: '自定义折线2',
        path: '../Elements/customPolyline2/index',
      },
      {
        name: '多标签边',
        path: '../Elements/edgeMulLabel/index',
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
        path: '../Elements/cCircle/index',
      },
      {
        name: '带有Marker的矩形',
        path: '../Elements/cRect/index',
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
        path: '../Elements/labelLen/index',
      },
      {
        name: '使用换行符处理',
        path: '../Elements/labelLen1/index',
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
        path: '../Elements/nodeBg/index',
      },
      {
        name: '边上文本背景',
        path: '../Elements/edgeBg/index',
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
        path: '../Elements/multiEdges/index',
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
  //       path: '../Interactive/activateRelations/index',
  //     },
  //     {
  //       name: '自定义高亮',
  //       path: '../Interactive/highlightDark/index',
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
        path: '../Interactive/dragSubtree/index',
      },
      {
        name: '合并同类兄弟节点',
        path: '../Interactive/collapseSlibing/index',
      },
      {
        name: '使用changeData',
        path: '../Interactive/changeData/index',
      },
      {
        name: '使用addChild',
        path: '../Interactive/addChild/index',
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
        path: '../Interactive/combo_circle/index',
      },
      {
        name: '矩形组合',
        path: '../Interactive/combo_rect/index',
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
        path: '../Interactive/hull/index',
      },
      {
        name: '修改包裹内部成员',
        path: '../Interactive/changeMembers/index',
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
        path: '../Interactive/move/index',
      },
      {
        name: '点击节点动画',
        path: '../Interactive/moveAnimate/index',
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
        path: '../Interactive/partialNode/index',
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
        path: '../Interactive/setMode/index',
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
        path: '../Interactive/canvasTwoFingers/index',
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
        path: '../Interactive/fixItem/index',
      },
      {
        name: '拖拽画布时候隐藏',
        path: '../Interactive/hideItem/index',
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
        path: '../Animation/node_node/index',
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
        path: '../Animation/pointInLine/index',
      },
      {
        name: '虚线运动',
        path: '../Animation/edge_edge/index',
      },
      {
        name: '无到有的边',
        path: '../Animation/edge_lineGrowth/index',
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
        path: '../Animation/stateChange_hover/index',
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
        path: '../Animation/changePosition_default/index',
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
        path: '../Animation/customAnimate_position/index',
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
      //   path: '../SceneCase/decisionTree/index',
      // },
      {
        name: '知识图谱树',
        path: '../SceneCase/knowledgeTreeGraph/index',
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
        path: '../SceneCase/customFlow/index',
      },
      // {
      //   name: '桑基图',
      //   path: '../SceneCase/sankey/index',
      // },
      // {
      //   name: '思维导图',
      //   path: '../SceneCase/mindMap/index',
      // },
      // {
      //   name: '甜甜圈转账图',
      //   path: '../SceneCase/donutTransfer/index',
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
        path: '../SceneCase/metroLines/index',
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
        path: '../Plugins/ToolTip/index',
      },
    ],
  },
  {
    name: '图例',
    nameEn: 'Legend',
    detailList: [
      {
        name: 'Legend',
        path: '../Plugins/DonutTransfer/index',
      },
    ],
  },
  {
    name: '边过滤',
    nameEn: 'EdgeFilter',
    detailList: [
      {
        name: 'EdgeFilter',
        path: '../Plugins/EdgeFilter/index',
      },
    ],
  },
  {
    name: '鱼眼',
    nameEn: 'Fisheye',
    detailList: [
      {
        name: 'Fisheye',
        path: '../Plugins/Fisheye/index',
      },
    ],
  },
  {
    name: '时间轴',
    nameEn: 'Timebar',
    detailList: [
      {
        name: 'Timebar',
        path: '../Plugins/Timebar/index',
      },
    ],
  },
  {
    name: '缩放轴',
    nameEn: 'ZoomSlider',
    detailList: [
      {
        name: 'ZoomSlider',
        path: '../Plugins/ZoomSlider/index',
      },
    ],
  },
  {
    name: '边绑定',
    nameEn: 'Bundling',
    detailList: [
      {
        name: 'Bundling',
        path: '../Plugins/Bundling/index',
      },
    ],
  },
  {
    name: '上下文菜单',
    nameEn: 'Menu',
    detailList: [
      {
        name: 'Menu',
        path: '../Plugins/Menu/index',
      },
    ],
  },
  {
    name: '对齐线',
    nameEn: 'SnapLine',
    detailList: [
      {
        name: 'SnapLine',
        path: '../Plugins/SnapLine/index',
      },
    ],
  },
];

// 控制搜索框下面的热搜词
export const hot = [
  { name: '知识图谱树', url: '../SceneCase/knowledgeTreeGraph/index' },
  { name: '基本弧线图', url: '../GeneralGraph/basicArcDiagram/index' },
  { name: 'FA气泡图', url: '../GeneralGraph/forceBubbles/index' },
  { name: '无到有的边', url: '../Animation/edge_lineGrowth/index' },
  { name: '自定义流向图', url: '../SceneCase/customFlow/index' },
  { name: '生态树', url: '../TreeGraph/BasicDendrogram/index' },
  { name: '自定义树中的边', url: '../TreeGraph/customEdgeTree/index' },
  { name: '基本同心圆布局', url: '../GeneralGraph/basicConcentric/index' },
  { name: '布局切换', url: '../GeneralGraph/layoutTranslate/index' },
];

export const tabs = ['基础能力', '拓展能力'];
