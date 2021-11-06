import { isArray } from '@antv/util';
import { IG6GraphEvent, Item, IAbstractGraph as IGraph } from '@antv/f6-core';
import Base, { IPluginBaseConfig } from '../base';
import { createUI } from '@antv/f6-ui';
import getHtml from './html';
import { appendCss } from './css';

interface TooltipConfig extends IPluginBaseConfig {
  getContent?: (evt?: IG6GraphEvent) => HTMLDivElement | string;
  offsetX?: number;
  offsetY?: number;
  shouldBegin?: (evt?: IG6GraphEvent) => boolean;
  // 允许出现 tooltip 的 item 类型
  itemTypes?: string[];
  trigger?: 'mouseenter' | 'click';
  fixToNode?: [number, number] | undefined;
}

export default class Tooltip extends Base {
  private currentTarget: Item;

  public getDefaultCfgs(): TooltipConfig {
    return {
      offsetX: 6,
      offsetY: 6,
      // 指定菜单内容，function(e) {...}
      getContent: (e) => {
        return `
          <div class="f6-tooltip-container">
            <div class='tooltip-type'>类型：${e.item?.getType()}</div>
            <div class='tooltip-id'>ID：${e.item?.getID()}</div>
          </div>
        `;
      },
      getCss: () => `
        .f6-tooltip-container {
          position: absolute;
          width: 200;
          border: 1 solid #e2e2e2;
          border-radius: 4;
          font-size: 12;
          color: #545454;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 10 8;
        }
    
        .f6-tooltip-container div{
          height: 20;
        }
        
        .tooltip-type {
          padding: 0;
          margin: 0;
        }
        .tooltip-id {
          color: #531dab;
        }
      `,
      shouldBegin: (e) => {
        return true;
      },
      itemTypes: ['node', 'edge', 'combo'],
      trigger: 'mouseenter',
      fixToNode: undefined,
    };
  }

  // class-methods-use-this
  public getEvents() {
    if (this.get('trigger') === 'click') {
      return {
        'node:tap': 'onClick',
        'edge:tap': 'onClick',
        'combo:tap': 'onClick',
        'canvas:tap': 'onMouseLeave',
        afterremoveitem: 'onMouseLeave',
        contextmenu: 'onMouseLeave',
        drag: 'onMouseLeave',
      };
    }
    return {
      'node:press': 'onClick',
      'edge:press': 'onClick',
      'combo:press': 'onClick',
      'canvas:press': 'onMouseLeave',
      'node:tap': 'onMouseLeave',
      'edge:tap': 'onMouseLeave',
      'combo:tap': 'onMouseLeave',
      'canvas:tap': 'onMouseLeave',
      afterremoveitem: 'onMouseLeave',
      contextmenu: 'onMouseLeave',
      drag: 'onMouseLeave',
    };
  }

  onClick(e: IG6GraphEvent) {
    const itemTypes = this.get('itemTypes');
    if (e.item && e.item.getType && itemTypes.indexOf(e.item.getType()) === -1) return;

    const { item } = e;
    const graph: IGraph = this.get('graph');
    // 若与上一次同一 item，隐藏该 tooltip
    if (this.currentTarget === item) {
      this.currentTarget = null;
      this.hideTooltip();
      graph.emit('tooltipchange', { item: e.item, action: 'hide' });
    } else {
      this.currentTarget = item;
      this.showTooltip(e);
      graph.emit('tooltipchange', { item: e.item, action: 'show' });
    }
  }

  onMouseEnter(e: IG6GraphEvent) {
    const itemTypes = this.get('itemTypes');

    if (e.item && e.item.getType && itemTypes.indexOf(e.item.getType()) === -1) return;
    const { item } = e;
    const graph: IGraph = this.get('graph');
    this.currentTarget = item;
    this.showTooltip(e);
    graph.emit('tooltipchange', { item: e.item, action: 'show' });
  }

  onMouseMove(e: IG6GraphEvent) {
    const itemTypes = this.get('itemTypes');
    if (e.item && e.item.getType && itemTypes.indexOf(e.item.getType()) === -1) return;
    if (!this.currentTarget || e.item !== this.currentTarget) {
      return;
    }
    this.showTooltip(e);
  }

  onMouseLeave() {
    this.hideTooltip();
    const graph: IGraph = this.get('graph');
    graph.emit('tooltipchange', { item: this.currentTarget, action: 'hide' });
    this.currentTarget = null;
  }

  showTooltip(e: IG6GraphEvent) {
    if (!e.item) {
      return;
    }
    const itemTypes = this.get('itemTypes');

    if (e.item.getType && itemTypes.indexOf(e.item.getType()) === -1) return;

    const uiGroup = this.get('graph').get('uiGroup');

    const html = getHtml(this.get('getContent')?.(e));
    const css = appendCss(this.get('getCss')?.());
    const tooltipUI = createUI(html, css, uiGroup);
    this.get('tooltip')?.remove();
    this.set('tooltip', tooltipUI);

    this.updatePosition(e);
  }

  hideTooltip() {
    const tooltip = this.get('tooltip');
    if (tooltip) {
      tooltip.setStyle('display', 'none');
    }
  }

  updatePosition(e: IG6GraphEvent) {
    const shouldBegin = this.get('shouldBegin');
    const tooltip = this.get('tooltip');
    if (!shouldBegin(e)) {
      this.hideTooltip();
      return;
    }
    const graph: IGraph = this.get('graph');
    const width: number = graph.get('width');
    const height: number = graph.get('height');

    const offsetX = this.get('offsetX') || 0;
    const offsetY = this.get('offsetY') || 0;

    // const mousePos = graph.getPointByClient(e.clientX, e.clientY);
    let point = graph.getPointByClient(e.clientX, e.clientY);

    const fixToNode = this.get('fixToNode');
    const { item } = e;
    if (
      item.getType &&
      item.getType() === 'node' &&
      fixToNode &&
      isArray(fixToNode) &&
      fixToNode.length >= 2
    ) {
      const itemBBox = item.getBBox();
      point = {
        x: itemBBox.minX + itemBBox.width * fixToNode[0],
        y: itemBBox.minY + itemBBox.height * fixToNode[1],
      };
    }

    const { x, y } = graph.getCanvasByPoint(point.x, point.y);

    const res = {
      x: x + offsetX,
      y: y + offsetY,
    };

    // 先修改为 visible 方可正确计算 bbox
    tooltip.setStyle('display', 'flex');

    if (x + tooltip.width + offsetX > width) {
      res.x -= tooltip.width + offsetX;
    }

    if (y + tooltip.height + offsetY > height) {
      res.y -= tooltip.height + offsetY;
    }
    tooltip.setStyle('left', res.x);
    tooltip.setStyle('top', res.y);
  }

  public hide() {
    this.onMouseLeave();
  }

  public destroy() {
    const tooltip = this.get('tooltip');

    if (tooltip) {
      tooltip.remove();
    }
  }
}
