import {
  treeGraphContainer,
  generalGraphContainer,
  basicElementContainer,
  basicInteractiveContainer,
  aminationContainer,
  customizeTree,
  classicCace,
  newsMapVisualize,
  plugins,
  hot,
  tabs,
} from '../../common/utils/data';

// 这个是基础组件tab的标题
const basicComponentList = [
  {
    type: '树图',
    list: treeGraphContainer,
  },
  {
    type: '一般图',
    list: generalGraphContainer,
  },
  {
    type: '元素',
    list: basicElementContainer,
  },
  {
    type: '交互',
    list: basicInteractiveContainer,
  },
  {
    type: '动画',
    list: aminationContainer,
  },
];

// 这里控制拓展组件的盒子个数
const extComponentList = [
  {
    type: '自定义树',
    list: customizeTree,
  },
  {
    type: '经典案例',
    list: classicCace,
  },
  {
    type: '新闻图可视化',
    list: newsMapVisualize,
  },
  {
    type: '分析组件',
    list: plugins,
  },
];

Page({
  data: {
    showInfoObj: {}, // 控制各个框框的气泡显示
    nut: '/images/icon/nut.png', // 下拉框的项目符号
    top: 0,
    hot, // 控制搜索框下面的热词
    tabs, // 控制tab栏的文字显示
    activeTab: 0, // 默认的tab激活
    basicComponentList, // 基础组件tab
    extComponentList, // 拓展组件tab
    titleOpacity: 1,
    shadow: false,
  },
  onPageScroll(e) {
    const { scrollTop } = e;
    let titleOpacity = 1 - scrollTop * 0.02;
    let shadow = false;

    if (titleOpacity < 0) {
      titleOpacity = 0;
    }

    if (titleOpacity > 1) {
      titleOpacity = 1;
    }

    if (scrollTop > 80) {
      my.setNavigationBar({
        title: 'F6官方示例',
      });
    } else {
      my.setNavigationBar({
        title: ' ',
      });
    }

    if (scrollTop > 320) {
      shadow = true;
    } else {
      shadow = false;
    }

    this.setData({
      shadow,
      titleOpacity,
    });
  },
  onSearchBarTap() {
    // 点击搜索框的回调
    console.log('点击了搜索框');
    my.navigateTo({
      url: '../search/search',
    });
  },
  onTabBarTap(e) {
    const { index } = e.target.dataset;
    this.setData({
      activeTab: index,
    });
    console.log('activeTab', this.data.activeTab);
  },
  onLoad() {
    my.getSystemInfo({
      // 获取系统信息
      success: (res) => {
        if (res.statusBarHeight && res.titleBarHeight) {
          this.setData({
            top: res.statusBarHeight + res.titleBarHeight,
          });
        }
      },
    });
  },
  goDevCenter() {
    // 开发者中心的按钮，后续可以去掉
    my.navigateToMiniProgram({
      appId: '2018082061148052',
      path: 'pages/discover/discover',
      extraData: {
        from: 'miniDemo',
      },
    });
  },
  openPage(e) {
    // 点开页面的回调
    my.navigateTo({
      url: e.target.dataset.url,
    });
  },

  // 检查点击是否成功
  onChange(e) {
    console.log('collapse change', e);
  },
});
