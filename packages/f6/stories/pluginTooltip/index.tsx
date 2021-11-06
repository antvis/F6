import React, { useEffect } from 'react';
import F6 from '../../src';
import data from './data';
import {Tooltip} from '@antv/f6-plugin'

const tooltip = new Tooltip({
  trigger:'press',
  offsetX: 0,
  offsetY: 0,
  // the types of items that allow the tooltip show up
  // 允许出现 tooltip 的 item 类型
  itemTypes: ['node', 'edge'],
  // custom the tooltip's content
  // 自定义 tooltip 内容
  getContent: (e) => {
    // outDiv.style.padding = '0px 0px 20px 0px';
    return `
      <div class="f6-tooltip-container">
        <div>Custom Content</div>
        <div class='tooltip-type'>Type: ${e.item.getType()}</div>
        <div class='tooltip-id'>Label: ${e.item.getModel().label || e.item.getModel().id}</div>
      </div>
  `;
  },
  getCss: () => `
    .f6-tooltip-container {
      position: absolute;
      width: 150;
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
});


export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  let graph = null;
  useEffect(() => {
    if (!graph) {
      graph = new F6.Graph({
        container: ref.current,
        width,
        height,
        linkCenter: true,
        defaultNode: {
          size: [80, 40],
          type: 'rect',
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
        plugins: [tooltip],
      });
      graph.data(data);
      graph.render();
    }
  }, []);

  return <div ref={ref}></div>;
}
