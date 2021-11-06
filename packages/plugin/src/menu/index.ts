import { IAbstractGraph as IGraph, IG6GraphEvent, Item } from '@antv/f6-core';
import Base, { IPluginBaseConfig } from '../base';
import { createUI } from '@antv/f6-ui';

interface MenuConfig extends IPluginBaseConfig {
  handleMenuClick?: (target: HTMLElement, item: Item) => void;
  getContent?: (evt?: IG6GraphEvent) => HTMLDivElement | string;
  // offsetX 与 offsetY 需要加上父容器的 padding
  offsetX?: number;
  offsetY?: number;
  shouldBegin?: (evt?: IG6GraphEvent) => boolean;
  // 允许出现 tooltip 的 item 类型
  itemTypes?: string[];
}

export default class Menu extends Base {
  constructor(config?: MenuConfig) {
    super(config);
  }

  public getDefaultCfgs(): MenuConfig {
    return {
      offsetX: 6,
      offsetY: 6,
      handleMenuClick: undefined,
      // 指定菜单内容，function(e) {...}
      getContent: (e) => {
        return `
          <div class='f6-contextmenu-ul'>
            <div class='f6-contextmenu-li'>菜单项1</div>
            <div class='f6-contextmenu-li'>菜单项2</div>
          </div>
        `;
      },
      getCss() {
        return `
        .f6-contextmenu-ul {
          display: flex;
          width: 100;
          border: 1 solid #e2e2e2;
          border-radius: 4;
          font-size: 12;
          color: #545454;
          padding: 10 8;
          background-color: rgba(255, 255, 255, 0.9);
        }
        .f6-contextmenu-li {
            opacity: 0;
            justify-content: center;
            text-align: center;
            height: 50;
          }
        `;
      },
      shouldBegin: (e) => {
        return true;
      },
      // 菜单隐藏事件
      onHide() {
        return true;
      },
      itemTypes: ['node', 'edge', 'combo'],
    };
  }

  // class-methods-use-this
  public getEvents() {
    return {
      press: 'onMenuShow',
    };
  }

  public init() {
    const graph: IGraph = this.get('graph');

    graph.on('tap', () => {
      this.onMenuHide();
    });
  }

  protected onMenuShow(e: IG6GraphEvent) {
    const self = this;
    e.preventDefault();

    const itemTypes = this.get('itemTypes');
    if (!e.item) {
      if (itemTypes.indexOf('canvas') === -1) {
        self.onMenuHide();
        return;
      }
    } else {
      if (e.item && e.item.getType && itemTypes.indexOf(e.item.getType()) === -1) {
        self.onMenuHide();
        return;
      }
    }

    const shouldBegin = this.get('shouldBegin');
    if (!shouldBegin(e)) return;

    const className = this.get('className');
    const graph: IGraph = this.get('graph');
    const uiGroup = graph.get('uiGroup');

    const getContent = this.get('getContent');
    const getCss = this.get('getCss');
    const css = `
    root {
      display: flex;
      font-size: 12;
      color: #545454;
    }
    text {
      height: 12;
      opacity: 1;
    }
    ${getCss?.() ?? ''}
  `;
    const menuLiHtml = getContent(e, graph);
    const menu = createUI(
      `<root class=${className || 'g6-component-contextmenu'}>${menuLiHtml}</root>`,
      css,
      uiGroup,
    );
    this.get('menu')?.remove();
    this.set('menu', menu);

    const handleMenuClick = this.get('handleMenuClick');
    if (handleMenuClick) {
      const handleMenuClickWrapper = (evt) => {
        evt.stopPropagation();
        handleMenuClick(evt.uiNode?.attributes, e.item, graph);
      };
      this.set('handleMenuClickWrapper', handleMenuClickWrapper);
      menu.on('tap', handleMenuClickWrapper);
    }

    const width: number = graph.get('width');
    const height: number = graph.get('height');

    const bbox = {
      width: menu.width,
      height: menu.height,
      left: menu.left,
      right: menu.right,
    };

    const offsetX = this.get('offsetX') || 0;
    const offsetY = this.get('offsetY') || 0;

    let x = e.canvasX + offsetX;
    let y = e.canvasY + offsetY;

    // when the menu is (part of) out of the canvas
    if (x + bbox.width > width) {
      x = e.canvasX - bbox.width - offsetX;
    }
    if (y + bbox.height > height) {
      y = e.canvasY - bbox.height - offsetY;
    }

    menu.setStyle('left', x);
    menu.setStyle('top', y);
  }

  private onMenuHide() {
    const menuDom = this.get('menu');
    menuDom?.remove();
  }

  public destroy() {
    const menu = this.get('menu');
    menu?.remove();
  }
}
