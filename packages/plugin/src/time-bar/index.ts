import { createSimpleTimeBarUI, createTickUI, createTrendUI } from './ui';
import PluginBase, { IPluginBaseConfig } from '../base';
import { throttle } from '@antv/util';
import { IAbstractGraph, TimeBarType } from '@antv/f6-core';
import { subscribe, unsubscribeAll } from './dispatcher';
import { SLIDER_END, SLIDER_START } from './utils/const';
import { SliderOption, SliderTick, TrendConfig } from './type/slider';
import { TimeBarTickOption } from './type/tick';
import { ControllerCfg } from './type/control-bar';

interface TimeBarConfig extends IPluginBaseConfig {
  // position size
  readonly width?: number;
  readonly padding?: number;

  readonly type?: TimeBarType;
  // 趋势图配置项
  readonly trend?: TrendConfig;
  // 滑块、及前后背景的配置
  readonly slider?: SliderOption;

  // tick 类型配置项，或 trend 和 simple 类型的时间刻度配置项
  readonly tick?: TimeBarTickOption;

  // 控制按钮
  readonly controllerCfg?: ControllerCfg;

  readonly sliderTick?: SliderTick;

  // 是否过滤边，若为 true，则需要配合边数据上有 date 字段，过滤节点同时将不满足 date 在选中范围内的边也过滤出去
  // 若为 false，则仅过滤节点以及两端节点都被过滤出去的边
  readonly filterEdge?: boolean;

  rangeChange?: (graph: IAbstractGraph, minValue: string, maxValue: string) => void;
}
export default class TimeBar extends PluginBase {
  private cacheGraphData;

  constructor(cfg: TimeBarConfig) {
    super(cfg);
  }

  public getDefaultCfgs(): TimeBarConfig {
    return {
      className: 'f6-component-timebar',
      padding: 10,
      type: 'trend',
      data: [],
      trend: {
        smooth: true,
      },
      controllerCfg: {
        speed: 1,
      },
      slider: {
        start: SLIDER_START,
        end: SLIDER_END,
      },
      tick: {
        start: SLIDER_START,
        end: SLIDER_END,
      },
      filterEdge: false,
    };
  }

  init() {
    setTimeout(() => {
      this.render();
      this.initEvent();
    });
  }

  filterData(evt) {
    const { value } = evt;
    let trendData = this.get('data');
    if (!trendData || trendData.length === 0) {
      console.warn('请配置 TimeBar 组件的数据');
      return;
    }
    const rangeChange = this.get('rangeChange');
    const graph = this.get('graph');

    let min = Math.round(trendData.length * value[0]);
    let max = Math.round(trendData.length * value[1]);
    max = max >= trendData.length ? trendData.length - 1 : max;
    min = min >= trendData.length ? trendData.length - 1 : min;

    const tickLabelFormatter = this._cfgs.tick?.tickLabelFormatter;
    const minText = tickLabelFormatter ? tickLabelFormatter(trendData[min]) : trendData[min].date;
    const maxText = tickLabelFormatter ? tickLabelFormatter(trendData[max]) : trendData[max].date;

    if (rangeChange) {
      rangeChange(graph, minText, maxText);
    } else {
      // 自动过滤数据，并渲染 graph
      if (
        !this.cacheGraphData ||
        (this.cacheGraphData.nodes && this.cacheGraphData.nodes.length === 0)
      ) {
        this.cacheGraphData = graph.get('data'); // graph.save() as GraphData;
      }

      // 过滤不在 min 和 max 范围内的节点
      const filterData = this.cacheGraphData.nodes.filter(
        (d: any) => d.date >= trendData[min].date && d.date <= trendData[max].date,
      );

      const nodeIds = filterData.map((node) => node.id);

      let fileterEdges = [];
      if (this.cacheGraphData.edges) {
        // 过滤 source 或 target 不在 min 和 max 范围内的边
        fileterEdges = this.cacheGraphData.edges.filter(
          (edge) => nodeIds.includes(edge.source) && nodeIds.includes(edge.target),
        );

        if (this.get('filterEdge')) {
          fileterEdges = fileterEdges.filter(
            (edge) => edge.date >= trendData[min].date && edge.date <= trendData[max].date,
          );
        }
      }

      graph.changeData({
        nodes: filterData,
        edges: fileterEdges,
      });
    }
  }

  private render() {
    const { data, width, padding, type, trend, slider, controllerCfg, tick, sliderTick } =
      this._cfgs;
    const graph = this.get('graph');
    const group = graph.get('uiGroup');
    let timebar = null;
    switch (type) {
      case 'trend':
        timebar = createTrendUI({
          group,
          width,
          padding,
          data,
          trend,
          slider,
          controllerCfg,
          sliderTick,
        });
        break;

      case 'tick':
        timebar = createTickUI({
          group,
          width,
          padding,
          tick,
          data,
          controllerCfg,
        });
        break;
      case 'simple':
        timebar = createSimpleTimeBarUI({
          group,
          width,
          padding,
          slider,
          data,
          controllerCfg,
          sliderTick,
        });
        break;
    }
    // 移动到左下角
    const graphHeight = graph.get('height');
    group.translate(0, graphHeight - timebar.height);
  }

  private initEvent() {
    subscribe(
      'RANGE_CHANGE',
      throttle(this.filterData.bind(this), 200, {
        trailing: true,
        leading: true,
      }),
    );
  }

  destroy() {
    unsubscribeAll();
  }
}
