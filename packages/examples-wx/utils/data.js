export const list = [
    {
      id: 'view',
      name: '视图容器',
      open: false,
      pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
    }, {
      id: 'content',
      name: '基础内容',
      open: false,
      pages: ['text', 'icon', 'progress', 'rich-text']
    }, {
      id: 'form',
      name: '表单组件',
      open: false,
      pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea', 'editor']
    }, {
      id: 'nav',
      name: '导航',
      open: false,
      pages: ['navigator']
    }, {
      id: 'media',
      name: '媒体组件',
      open: false,
      pages: ['image', 'video', 'camera', 'live-pusher', 'live-player']
    }, {
      id: 'map',
      name: '地图',
      open: false,
      pages: ['map']
    }, {
      id: 'canvas',
      name: '画布',
      open: false,
      pages: ['canvas', 'canvas-2d', 'webgl']
    }, {
      id: 'open',
      name: '开放能力',
      open: false,
      pages: ['ad', 'open-data', 'web-view']
    }, {
      id: 'obstacle-free',
      name: '无障碍访问',
      open: false,
      pages: ['aria-component']
    }
  ]

// 下面是第一个tab中的内容
export const treeGraphContainer = [
  {
    name: '紧凑树',
    thumb: '/images/icon/compactbox.png',
    nameEn: 'CompactTree',
    detailList: [
      {
        name: '紧凑树',
        path: '/pages/TreeGraph/compactBox/index',
      },
      {
        name: '至上而下的紧凑树',
        path: '/pages/TreeGraph/tbCompactBox/index',
      },
      {
        name: '节点左对齐的紧凑树',
        path: '/pages/TreeGraph/compactBoxLeftAlign/index',
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
        path: '/pages/TreeGraph/BasicDendrogram/index',
      },
      {
        name: '至上而下的生态树',
        path: '/pages/TreeGraph/tbDendrogram/index',
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
        path: '/pages/TreeGraph/mindMap/index',
      },
      {
        name: '子节点右侧分布',
        path: '/pages/TreeGraph/RightMindMap/index',
      },
      {
        name: '子节点左侧分布',
        path: '/pages/TreeGraph/LeftMindMap/index',
      },
      {
        name: '自定义子节点分布',
        path: '/pages/TreeGraph/CustomSideMindMap/index',
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
        path: '/pages/TreeGraph/fileSystem/index',
      },
      {
        name: '顶部对齐',
        path: '/pages/TreeGraph/intendAlignTop/index',
      },
      {
        name: '子节点两侧分布',
        path: '/pages/TreeGraph/hIntended/index',
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
        path: '/pages/TreeGraph/radialDendrogram/index',
      },
      {
        name: '紧凑辐射树',
        path: '/pages/TreeGraph/radialCompactBox/index',
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
        path: '/pages/TreeGraph/customEdgeTree/index',
      },
      {
        name: '树边上的标签',
        path: '/pages/TreeGraph/treeEdgeLabel/index',
      },
      {
        name: '复杂树样式',
        path: '/pages/TreeGraph/customTree/index',
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
        path: '/pages/GeneralGraph/basicForceDirected/index',
      },
      {
        name: 'FA2布局',
        path: '/pages/GeneralGraph/basicFA2/index',
      },
      {
        name: 'FA布局防止节点重叠',
        path: '/pages/GeneralGraph/forceDirectedPreventOverlap/index',
      },
      {
        name: 'FA布局聚类',
        path: '/pages/GeneralGraph/forceDirected_forceClustering/index',
      },
      {
        name: '定制不同节点的参数',
        path: '/pages/GeneralGraph/forceDirectedFunctionalParams/index',
      },
      {
        name: '固定被拖拽节点',
        path: '/pages/GeneralGraph/basicForceDirectedDragFix/index',
      },
      {
        name: 'FA布局参数动态变化',
        path: '/pages/GeneralGraph/forceDirectedConfigurationTranslate/index',
      },
      {
        name: 'FA气泡图',
        path: '/pages/GeneralGraph/forceBubbles/index',
      },
      {
        name: '约束在范围内布局',
        path: '/pages/GeneralGraph/forceConstrainedInRect/index',
      },
      {
        name: 'Combo FA布局',
        path: '/pages/GeneralGraph/basicComboForce/index',
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
        path: '/pages/GeneralGraph/basicDagre/index',
      },
      {
        name: '带有Combo的流程图',
        path: '/pages/GeneralGraph/dagreCombo/index',
      },
      {
        name: '自左向右的流程图',
        path: '/pages/GeneralGraph/Dagre/index',
      },
      {
        name: '自左向右的流程图对齐',
        path: '/pages/GeneralGraph/DagreUL/index',
      },
      {
        name: '布局参数动态变化',
        path: '/pages/GeneralGraph/dagreConfigurationTranslate/index',
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
        path: '/pages/GeneralGraph/fruchterman/index',
      },
      {
        name: 'Fruchterman聚类',
        path: '/pages/GeneralGraph/fruchtermanClustering/index',
      },
      {
        name: '参数动态变化',
        path: '/pages/GeneralGraph/fruchtermanConfigurationTranslate/index',
      },
      {
        name: '使用Web-worker',
        path: '/pages/GeneralGraph/fruchtermanWebWorker/index',
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
        path: '/pages/GeneralGraph/basicRadial/index',
      },
      {
        name: '防止节点重叠的严格辐射布局',
        path: '/pages/GeneralGraph/preventOverlapRadial/index',
      },
      {
        name: '防止节点重叠的非严格辐射布局',
        path: '/pages/GeneralGraph/preventOverlapUnstrictRadial/index',
      },
      {
        name: '交互扩展节点的辐射布局',
        path: '/pages/GeneralGraph/interactRadial/index',
      },
      {
        name: '布局参数动态变化',
        path: '/pages/GeneralGraph/radialConfigurationTranslate/index',
      },
      {
        name: '同层节点按照指定字段聚类',
        path: '/pages/GeneralGraph/sortRadial/index',
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
        path: '/pages/GeneralGraph/basicCircular/index',
      },
      {
        name: '按节点度数排序',
        path: '/pages/GeneralGraph/degreeCircular/index',
      },
      {
        name: '螺旋线布局',
        path: '/pages/GeneralGraph/spiralCircular/index',
      },
      {
        name: '分割环形布局',
        path: '/pages/GeneralGraph/divisionCircular/index',
      },
      {
        name: '参数动态变化',
        path: '/pages/GeneralGraph/circularConfigurationTranslate/index',
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
        path: '/pages/GeneralGraph/basicGrid/index',
      },
      {
        name: '指定排序方式的网格布局',
        path: '/pages/GeneralGraph/clusterGrid/index',
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
        path: '/pages/GeneralGraph/basicConcentric/index',
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
        path: '/pages/GeneralGraph/basicMDS/index',
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
        path: '/pages/GeneralGraph/basicArcDiagram/index',
      },
      {
        name: '环形弧线图',
        path: '/pages/GeneralGraph/circularArcDiagram/index',
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
        path: '/pages/GeneralGraph/layoutTranslate/index',
      },
      {
        name: '子图布局',
        path: '/pages/GeneralGraph/subgraphLayout/index',
      },
      {
        name: '流水线子图布局',
        path: '/pages/GeneralGraph/sublayoutPipes/index',
      },
      {
        name: '数据动态切换',
        path: '/pages/GeneralGraph/dataChange/index',
      },
      {
        name: '自定义二分图布局',
        path: '/pages/GeneralGraph/customBiGraph/index',
      },
      {
        name: '布局时机监听',
        path: '/pages/GeneralGraph/layoutTiming/index',
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
        path: '/pages/Elements/circle/index',
      },
      {
        name: '甜甜圈',
        path: '/pages/Elements/donut/index',
      },
      {
        name: '椭圆',
        path: '/pages/Elements/ellipse/index',
      },
      {
        name: '矩形',
        path: '/pages/Elements/rect/index',
      },
      {
        name: '模态矩形',
        path: '/pages/Elements/modeRect/index',
      },
      {
        name: '模态菱形',
        path: '/pages/Elements/diamond/index',
      },
      {
        name: '五角星',
        path: '/pages/Elements/star/index',
      },
      {
        name: '三角形',
        path: '/pages/Elements/triangle/index',
      },
      {
        name: '图片',
        path: '/pages/Elements/image/index',
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
        path: '/pages/Elements/polyline1/index',
      },
      {
        name: '折线2',
        path: '/pages/Elements/polyline2/index',
      },
      {
        name: '折线3',
        path: '/pages/Elements/polyline3/index',
      },
      {
        name: '三次贝塞尔曲线-垂直',
        path: '/pages/Elements/cubic1/index',
      },
      {
        name: '三次贝塞尔曲线-水平',
        path: '/pages/Elements/cubic2/index',
      },
      {
        name: '弧线',
        path: '/pages/Elements/arc/index',
      },
      {
        name: '自环边',
        path: '/pages/Elements/loop/index',
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
        path: '/pages/Elements/circleWithCombo/index',
      },
      {
        name: '矩形',
        path: '/pages/Elements/rectWithCombo/index',
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
        path: '/pages/Elements/built_in_arrows/index',
      },
      {
        name: '自定义箭头',
        path: '/pages/Elements/customArrows/index',
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
        path: '/pages/Elements/card/index',
      },
      {
        name: '卡片2',
        path: '/pages/Elements/cardNode/index',
      },
      {
        name: '面积图节点',
        path: '/pages/Elements/areaChart/index',
      },
      {
        name: '堆叠图节点',
        path: '/pages/Elements/stackChart/index',
      },
      {
        name: '折线图节点',
        path: '/pages/Elements/lineChart/index',
      },
      {
        name: '南丁格尔图节点',
        path: '/pages/Elements/barChart/index',
      },
      {
        name: '点线图节点',
        path: '/pages/Elements/pointChart/index',
      },
      {
        name: '饼图节点',
        path: '/pages/Elements/pieChart/index',
      },
      {
        name: '列表',
        path: '/pages/Elements/list/index',
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
        path: '/pages/Elements/extraShape/index',
      },
      {
        name: '自定义折线',
        path: '/pages/Elements/customPolyline/index',
      },
      {
        name: '自定义折线2',
        path: '/pages/Elements/customPolyline2/index',
      },
      {
        name: '多标签边',
        path: '/pages/Elements/edgeMulLabel/index',
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
        path: '/pages/Elements/cCircle/index',
      },
      {
        name: '带有Marker的矩形',
        path: '/pages/Elements/cRect/index',
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
        path: '/pages/Elements/labelLen/index',
      },
      {
        name: '使用换行符处理',
        path: '/pages/Elements/labelLen1/index',
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
        path: '/pages/Elements/nodeBg/index',
      },
      {
        name: '边上文本背景',
        path: '/pages/Elements/edgeBg/index',
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
        path: '/pages/Elements/multiEdges/index',
      },
    ],
  },
];

export const basicInteractiveContainer = [
  {
    name: '高亮',
    thumb: '/images/icon/button.png',
    nameEn: 'HighLight',
    detailList: [
      {
        name: '内置的高亮节点',
        path: '/pages/Interactive/activateRelations/index',
      },
      {
        name: '自定义高亮',
        path: '/pages/Interactive/highlightDark/index',
      },
    ],
  },
  {
    name: '自定义树图交互',
    thumb: '/images/icon/interact.png',
    nameEn: 'Tree-Graph',
    detailList: [
      {
        name: '拖拽子树改变结构',
        path: '/pages/Interactive/dragSubtree/index',
      },
      {
        name: '合并同类兄弟节点',
        path: '/pages/Interactive/collapseSlibing/index',
      },
      {
        name: '使用changeData',
        path: '/pages/Interactive/changeData/index',
      },
      {
        name: '使用addChild',
        path: '/pages/Interactive/addChild/index',
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
        path: '/pages/Interactive/combo_circle/index',
      },
      {
        name: '矩形组合',
        path: '/pages/Interactive/combo_rect/index',
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
        path: '/pages/Interactive/hull/index',
      },
      {
        name: '修改包裹内部成员',
        path: '/pages/Interactive/changeMembers/index',
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
        path: '/pages/Interactive/move/index',
      },
      {
        name: '点击节点动画',
        path: '/pages/Interactive/moveAnimate/index',
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
        path: '/pages/Interactive/partialNode/index',
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
        path: '/pages/Interactive/setMode/index',
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
        path: '/pages/Interactive/canvasTwoFingers/index',
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
        path: '/pages/Interactive/fixItem/index',
      },
      {
        name: '拖拽画布时候隐藏',
        path: '/pages/Interactive/hideItem/index',
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
        path: '/pages/Animation/node_node/index',
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
        path: '/pages/Animation/pointInLine/index',
      },
      {
        name: '虚线运动',
        path: '/pages/Animation/edge_edge/index',
      },
      {
        name: '无到有的边',
        path: '/pages/Animation/edge_lineGrowth/index',
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
        path: '/pages/Animation/stateChange_hover/index',
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
        path: '/pages/Animation/changePosition_default/index',
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
        path: '/pages/Animation/customAnimate_position/index',
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
        path: '/pages/SceneCase/decisionTree/index',
      },
      {
        name: '知识图谱树',
        path: '/pages/SceneCase/knowledgeTreeGraph/index',
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
        path: '/pages/SceneCase/customFlow/index',
      },
      {
        name: '桑基图',
        path: '/pages/SceneCase/sankey/index',
      },
      // {
      //   name: '思维导图',
      //   path: '/pages/SceneCase/mindMap/index',
      // },
      {
        name: '甜甜圈转账图',
        path: '/pages/SceneCase/donutTransfer/index',
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
        path: '/pages/SceneCase/metroLines/index',
      },
    ],
  },
];