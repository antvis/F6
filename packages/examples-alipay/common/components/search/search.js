import { debounce } from '../../../common/utils/common';
import { componentList } from '../../../utils/process';
// 搜索推荐
const apiList = [];

Page({
  data: {
    value: '',
    history: my.getStorageSync({ key: 'searchHistory' }).data || [],
    hot: [
      { name: '知识图谱树', url: '../../SceneCase/knowledgeTreeGraph/index' },
      { name: '基本弧线图', url: '../../GeneralGraph/basicArcDiagram/index' },
      { name: 'FA气泡图', url: '../../GeneralGraph/forceBubbles/index' },
      { name: '无到有的边', url: '../../Animation/edge_lineGrowth/index' },
      { name: '自定义流向图', url: '../../SceneCase/customFlow/index' },
      { name: '生态树', url: '../../TreeGraph/BasicDendrogram/index' },
      { name: '自定义树中的边', url: '../../TreeGraph/customEdgeTree/index' },
      { name: '基本同心圆布局', url: '../../GeneralGraph/basicConcentric/index' },
      { name: '布局切换', url: '../../GeneralGraph/layoutTranslate/index' },
    ],
    componentSuggestions: [],
    apiSuggestions: [],
  },
  onLoad() {
    this.setData({
      history: my.getStorageSync({ key: 'searchHistory' }).data,
    });
    console.log(my.getStorageSync({ key: 'searchHistory' }).data);
    this.onInput = debounce(this.onInput.bind(this), 400);
    my.setNavigationBar({
      borderBottomColor: '#fff',
    });
  },
  clear() {
    my.confirm({
      content: '确定删除相关历史？',
      success: (res) => {
        if (res.confirm) {
          my.clearStorage();
          this.setData({
            history: [],
          });
        }
      },
    });
  },
  onInput(keyword) {
    this.setData({
      value: keyword,
    });
    const regExp = /[A-Za-z]/;
    if (keyword === '' || (regExp.test(keyword) && keyword.length === 1)) {
      this.setData({
        componentSuggestions: [],
        apiSuggestions: [],
      });
      return;
    }
    const componentSuggestions = [];
    const apiSuggestions = [];
    for (let i = 0; i < componentList.length; i++) {
      if (
        componentList[i].suggestion.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1
      ) {
        componentSuggestions.push(componentList[i]);
      }
    }

    for (let i = 0; i < apiList.length; i++) {
      if (apiList[i].suggestion.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1) {
        apiSuggestions.push(apiList[i]);
      }
    }
    this.setData({ componentSuggestions, apiSuggestions });
  },
  onClear() {
    this.setData({
      value: '',
    });
  },
  onCancel() {
    this.setData({
      componentSuggestions: [],
      apiSuggestions: [],
      value: '',
    });
    my.navigateBack();
  },
  onItemTap({ name }) {
    this.setData({
      value: name,
    });

    this.onInput(name);
  },
  onListItemTap(e) {
    const { name, url } = e.target.dataset;
    this.addToHistory(name);
    console.log(url);
    my.navigateTo({ url });
  },
  addToHistory(keyword) {
    const searchHistory = my.getStorageSync({ key: 'searchHistory' }).data || [];
    let index = -1;

    for (let i = 0; i < searchHistory.length; i++) {
      if (searchHistory[i].name === keyword) {
        index = i;
        break;
      }
    }

    let history = [];

    if (searchHistory.length >= 8) {
      if (index === -1) {
        history = [{ name: keyword }, ...searchHistory.slice(0, 7)];
      } else {
        searchHistory.splice(index, 1).slice(0, 7);
        history = [{ name: keyword }, ...searchHistory];
      }
    } else if (index === -1) {
      history = [{ name: keyword }, ...searchHistory];
    } else {
      searchHistory.splice(index, 1);
      history = [{ name: keyword }, ...searchHistory];
    }

    my.setStorageSync({
      key: 'searchHistory',
      data: history,
    });

    this.setData({
      history,
    });
  },
});
