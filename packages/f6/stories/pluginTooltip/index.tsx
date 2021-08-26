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
   return `
      <div>Custom Content</div>
      <div>Type: ${e.item.getType()}</div>
      <div>Label: ${e.item.getModel().label || e.item.getModel().id}</div>
    `
  },
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
