import { IAbstractGraph as IGraph, GraphData, ShapeStyle } from '@antv/f6-core';
import Base from '../base';
import { isArray, isNumber, uniqueId } from '@antv/util';
import { createUI } from '@antv/f6-ui';
import { createItem } from './item';

const ALLOW_EVENTS = ['click', 'mouseenter'];

interface LegendConfig {
  data: GraphData;
  position?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right';
  padding?: number | number[];
  margin?: number | number[];
  offsetX?: number;
  offsetY?: number;
  containerStyle?: ShapeStyle;
  layout?: 'vertical' | 'horizontal';
  width?: number;
  height?: number;
  align?: 'center' | 'right' | 'left';
  title?: string;
  titleConfig?: {
    position?: 'center' | 'right' | 'left';
    offsetX?: number;
    offsetY?: number;
    [key: string]: unknown;
  };
  itemConfig?: {
    width?: number;
    height?: number;
    fontSize?: number;
    margin?: 'string';
  };
  filter?: {
    enable?: boolean;
    multiple?: boolean;
    trigger?: 'click';
    legendStateStyles?: {
      active?: ShapeStyle;
      inactive?: ShapeStyle;
    };
    graphActiveState?: string;
    graphInactiveState?: string;
    filterFunctions?: {
      [key: string]: (d) => boolean;
    };
  };
}

/**
 * 不支持mouseenter
 */
export default class Legend extends Base {
  active = [];

  inActive = [];
  constructor(config?: LegendConfig) {
    super(config);
  }
  public getDefaultCfgs(): LegendConfig {
    return {
      data: {},
      position: 'top',
      padding: 0,
      margin: 0,
      offsetX: -10,
      offsetY: 0,
      layout: 'horizontal',
      containerStyle: {},
      align: undefined,
      filter: {
        enable: false,
        trigger: 'click',
      },
      itemConfig: {
        width: 100,
        height: 50,
        fontSize: 12,
      },
    };
  }

  public init() {
    this.formatArray('padding');
    this.formatArray('margin');
    const filter = this.get('filter') || {};
    const multiple = filter.multiple;
    if (multiple) this.set('multiple', false);
    let align = this.get('align');
    if (!align) {
      const positions = this.get('position').split('-');
      if (positions.includes('left')) align = 'left';
      if (positions.includes('right')) align = 'right';
      else align = 'center';
      this.set('align', align);
    }
    setTimeout(() => {
      const size = this.render();

      const pos = this.getContainerPos(size);

      this.get('graph').get('uiGroup').translate(pos.left, pos.top);

      this.bindEvents();
    });
  }

  protected getContainerPos(size: number[] = [0, 0]) {
    const self = this;
    const graph: IGraph = self.get('graph');
    const offsetX = this.get('offsetX');
    const offsetY = this.get('offsetY');
    const margin = this.get('margin');
    const positions = this.get('position').split('-');
    const posIdxMap = { top: 0, right: 1, bottom: 2, left: 3 };

    const x = 0,
      y = 0;
    const containerCSS: any = {
      left: (graph.getWidth() - size[0]) / 2 + x,
      top: (graph.getHeight() - size[1]) / 2 + y,
    };
    positions.forEach((pos) => {
      let marginValue = margin[posIdxMap[pos]];
      let key = pos;
      switch (pos) {
        case 'top':
          marginValue += y;
          break;
        case 'left':
          marginValue += x;
          break;
        case 'bottom':
          marginValue = graph.getHeight() - size[1] - marginValue + y;
          key = 'top';
          break;
        default:
          marginValue = graph.getWidth() - size[0] - marginValue + x;
          key = 'left';
          break;
      }
      containerCSS[key] = marginValue;
    });
    containerCSS.top += offsetY;
    containerCSS.left += offsetX;

    Object.keys(containerCSS).forEach((key) => {
      containerCSS[key] = `${containerCSS[key]}`;
    });

    return containerCSS;
  }

  // class-methods-use-this
  public bindEvents() {
    const self = this;
    const filter = self.get('filter');
    if (!filter || !filter.enable) return;
    let trigger = filter.trigger || 'click';
    if (!ALLOW_EVENTS.includes(trigger)) {
      console.warn(
        "Trigger for legend filterling must be 'click' or 'mouseenter', 'click' will take effect by default.",
      );
      trigger = 'click';
    }
    const ui = this.get('legendUI');
    ui.on('tap', (e) => {
      if (e?.uiNode?.getAttribute('class') === 'node-container') {
        self.filterData(e.uiNode);
      } else {
        self.clearFilter();
        self.clearActiveLegend();
      }
    });
  }

  /**
   * 更新 legend 数据，开放给用户控制
   * @param param
   */
  public changeData(data: GraphData) {
    this.set('data', data);
    const size = this.render();
    const pos = this.getContainerPos(size);
    this.get('graph').get('uiGroup').translate(pos.left, pos.top);
  }

  goActive(node) {
    this.goDefault(node);
    const filter = this.get('filter');
    const stateStyles = filter?.lengedStateStyles || {};
    const legendActive = stateStyles?.active || {
      stroke: '#000',
      lineWidth: 2,
      'text-shape': {
        fontWeight: 'bold',
        opacity: 1,
      },
    };
    node.query('shape').setStyle('borderColor', legendActive.stroke);
    node.query('shape').setStyle('borderWidth', legendActive.lineWidth);
    node.query('text').setStyle('fontWeight', legendActive['text-shape'].fontWeight);
    node.query('text').setStyle('opacity', legendActive['text-shape'].opacity);
    this.active.push(node);
    this.inActive.includes(node) && this.inActive.splice(this.inActive.indexOf(node), 1);
  }

  goDefault(node) {
    const originStyle = node.getAttribute('orignStyle');
    node.query('shape').setStyle('borderColor', originStyle.stroke);
    node.query('shape').setStyle('opacity', 1);
    node.query('shape').setStyle('borderWidth', originStyle.lineWidth || 1);
    node.query('text').setStyle('fontWeight', 'normal');
    node.query('text').setStyle('opacity', 1);
  }

  goInActive(node) {
    this.goDefault(node);
    const filter = this.get('filter');
    const stateStyles = filter?.lengedStateStyles || {};
    const legendInactive = stateStyles?.inactive || {
      opacity: 0.5,
      'text-shape': {
        opacity: 0.5,
      },
    };
    node.query('shape').setStyle('opacity', legendInactive.opacity);
    node.query('text').setStyle('opacity', legendInactive['text-shape'].opacity);
    this.inActive.push(node);
    this.active.includes(node) && this.active.splice(this.active.indexOf(node), 1);
  }

  public activateLegend(node) {
    const filter = this.get('filter');
    const multiple = filter?.multiple;
    if (!multiple) this.clearActiveLegend();
    if (this.active.includes(node)) return;
    const ui = this.get('legendUI');
    const nodes = ui.queryAll('.node-container');
    this.goActive(node);
    nodes.forEach((node) => {
      if (this.active.includes(node)) return;
      this.goInActive(node);
    });
  }

  public clearActiveLegend() {
    const ui = this.get('legendUI');
    const nodes = ui.queryAll('.node-container');
    nodes.forEach((node) => {
      this.goDefault(node);
    });
    this.active = [];
    this.inActive = [];
  }

  /**
   * 高亮和置灰图例，并过滤主图元素
   * @param param
   */
  public filterData(activeNode) {
    const filter = this.get('filter');
    const filterFunctions = filter?.filterFunctions;
    if (!filter || !filterFunctions) return;
    const graph = this.get('graph');
    const activeState = filter.graphActiveState || 'active';
    const inactiveState = filter.graphInactiveState || 'inactive';
    const multiple = filter.multiple;
    this.clearFilter();
    if (!multiple) this.clearActiveLegend();

    if (this.active.includes(activeNode)) {
      this.goInActive(activeNode);
    } else {
      // 设置 legend 的高亮状态
      this.activateLegend(activeNode);
    }
    if (this.active.length === 0) {
      const ui = this.get('legendUI');
      ui.queryAll('.node-container').forEach((child) => this.goDefault(child));
    }
    let activeCount = 0;
    const typeFuncs = ['getNodes', 'getEdges'];
    typeFuncs.forEach((typeFunc) => {
      graph[typeFunc]().forEach((graphItem) => {
        let active = false;
        this.active.forEach((node) => {
          const func = filterFunctions[node.getAttribute('legendId')];
          active = active || func(graphItem.getModel());
        });
        if (active) {
          graph.setItemState(graphItem, inactiveState, false);
          graph.setItemState(graphItem, activeState, true);
          activeCount++;
        } else {
          graph.setItemState(graphItem, activeState, false);
          graph.setItemState(graphItem, inactiveState, true);
        }
      });
    });
    if (!activeCount)
      typeFuncs.forEach((typeFunc) => {
        graph[typeFunc]().forEach((graphItem) => {
          graph.clearItemStates(graphItem, [inactiveState]);
        });
      });
  }

  /**
   * 清除主图相关状态
   * @param param
   */
  public clearFilter() {
    // 清除 legend 的高亮状态
    const graph = this.get('graph');
    const filter = this.get('filter');
    if (!filter) return;
    const activeState = filter.graphActiveState || 'active';
    const inactiveState = filter.graphInactiveState || 'inactive';
    graph.getNodes().forEach((node) => {
      graph.clearItemStates(node, [activeState, inactiveState]);
    });
    graph.getEdges().forEach((edge) => {
      graph.clearItemStates(edge, [activeState, inactiveState]);
    });
  }

  /**
   * 渲染 legend 图
   * @param param
   */
  protected render(): number[] {
    this.processData();

    const itemsData = this.get('itemsData');
    const itemTypes = ['nodes', 'edges'];

    // 创建单个节点
    let nodes = [[], []];
    itemTypes.forEach((itemType, i) => {
      itemsData[itemType].forEach((data) => {
        const style = this.getStyle(itemType.substr(0, 4), data);
        nodes[i].push(createItem(data, style, this.get('itemConfig')));
      });
    });

    // 创建title
    const title = this.get('title');
    const html = ` 
    <div class='g6-legend-container'>
      ${title && `<div class='text-container'>${title}</div>`}
      <div class='node-wrap'>
        <div class='node-row'> </div>
        <div class='edge-row'> </div>
      </div>  
    </div>`;

    const defaultTitleStyle = {
      fontSize: 20,
      fontFamily: 'Arial',
      fontWeight: 300,
      textBaseline: 'top',
      textAlign: 'center',
      fill: '#000',
    };
    const titleConfig = this.get('titleConfig') || {};
    const titleStyle = Object.assign(defaultTitleStyle, titleConfig.style || {});
    const containerStyle = this.get('containerStyle');
    const padding = this.get('padding');
    const margin = this.get('margin');
    // flex-direction: ${this.get('layout') === 'vertical' ? 'column' : 'row'};

    const css = `
      .g6-legend-container{
        width: ${this.get('width')};
        height: ${this.get('height')};
        padding: ${padding.join(' ')};
        margin: ${margin.join(' ')};
        background: ${containerStyle.fill || '#f00'};
        border: ${containerStyle.lineWidth || '1'} solid ${containerStyle.stroke || '#000'};
        opacity: ${containerStyle.opacity || '0.5'}
      }
      .text-container {
        font-size: ${titleStyle.fontSize};
        font-family: ${titleStyle.fontFamily};
        font-weight: ${titleStyle.fontWeight};
        text-align: ${titleStyle.textAlign};
        color: ${titleStyle.fill};
        height: ${titleStyle.fontSize};
        background-opacity: 0;
        top:  ${titleConfig.offsetY};
        left: ${titleConfig.offsetX};
      }
      .edge-row, .node-row {
        display: flex;
        flex-direction: ${this.get('layout') === 'vertical' ? 'column' : 'row'};
        flex-wrap: nowrap;
        justify-content: space-between;
        background-opacity: 0;
      }
      .node-wrap {
        flex: 1;
        flex-direction: ${this.get('layout') === 'vertical' ? 'row' : 'column'};
        justify-content: space-between;
        background-opacity: 0;
      }
    `;
    const ui = createUI(html, css, this.get('graph').get('uiGroup'));
    ui.query('.node-row').appendChild(...nodes[0]);
    ui.query('.edge-row').appendChild(...nodes[1]);
    this.set('legendUI', ui);

    return [ui.width, ui.height];
  }

  protected processData() {
    const data = this.get('data');
    const itemsData = { nodes: [], edges: [] };
    if (data.nodes) {
      data.nodes.sort((a, b) => a.order - b.order);
      data.nodes.forEach((node) => {
        const size = node.size || [
          node.style?.width || node.style?.r || 8,
          node.style?.height || node.style?.r || 8,
        ];
        const labelStyle = node.labelCfg?.style || {};
        itemsData.nodes.push({
          id: node.id || uniqueId(),
          type: node.type || 'circle',
          style: {
            ...node.style,
          },
          order: node.order,
          label: node.label,
          itemType: 'node',
          size,
          labelCfg: {
            position: 'right',
            style: {
              fontFamily: 'Arial',
              ...labelStyle,
            },
          },
        });
      });
    }
    if (data.edges) {
      data.edges.sort((a, b) => a.order - b.order);
      data.edges.forEach((edge) => {
        let type = edge.type || 'line';
        if (edge.type === 'cubic-horizontal') type = 'cubic';
        const labelStyle = edge.labelCfg?.style || {};
        const size = edge.size || [edge.style?.width || 8, 1];

        itemsData.edges.push({
          id: edge.id || uniqueId(),
          type,
          size,
          style: {
            lineWidth: isArray(size) ? size[1] : 1,
            ...edge.style,
          },
          order: edge.order,
          label: edge.label,
          itemType: 'edge',
          labelCfg: {
            position: 'right',
            style: {
              fontFamily: 'Arial',
              ...labelStyle,
            },
          },
        });
      });
    }

    this.set('itemsData', itemsData);
  }

  protected formatArray(key: string) {
    const value = this.get(key);
    if (isNumber(value)) this.set(key, [value, value, value, value]);
    else if (isArray(value)) {
      switch (value.length) {
        case 0:
          this.set(key, [0, 0, 0, 0]);
          break;
        case 1:
          this.set(key, [value[0], value[0], value[0], value[0]]);
          break;
        case 2:
          this.set(key, [value[0], value[1], value[0], value[1]]);
          break;
        case 3:
          this.set(key, [value[0], value[1], value[2], value[1]]);
          break;
        default:
          break;
      }
    }
    return this.get(key);
  }

  private getStyle(type, data) {
    const defaultStyle =
      type === 'node'
        ? {
            fill: '#ccc',
            lineWidth: 0,
          }
        : {
            stroke: '#000',
            lineWidth: 1,
          };
    return {
      ...defaultStyle,
      ...(data.style || {}),
    };
  }

  public destroy() {
    const graph: IGraph = this.get('graph');
    const graphContainer = graph.get<HTMLDivElement>('container');
    const container: HTMLDivElement = this.get('container');
    graphContainer.removeChild(container);
  }
}
