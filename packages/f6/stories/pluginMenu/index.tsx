import React, { useEffect } from 'react';
import F6 from '../../src';
import data from './data';
import { Menu } from '@antv/f6-plugin'


export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  let graph = null;
  useEffect(() => {
    const contextMenu = new Menu({
      getContent(evt) {
        let header;
        if (evt.target && evt.target.isCanvas && evt.target.isCanvas()) {
          header = 'Canvas ContextMenu';
        } else if (evt.item) {
          const itemType = evt.item.getType();
          header = `${itemType.toUpperCase()} ContextMenu`;
        }
        return `
        <div class="container">
          <div class="header">${header}</div>
          <div>
            <div class="li">div 1</div>
            <div class="li">div 2</div>
          </div>
        </div>
        `;
      },
      getCss: () => {
        return `
          .container {
            opacity: 0.9;
            width: 150;
            padding: 10 8;
            border: 1 solid #e2e2e2;
          }
          .header {
            padding-bottom: 10;
            font-weight: bold;
          }
          .li {
            padding-bottom: 10;
          }
        `;
      },
      handleMenuClick: (target, item) => {
        console.log(target, item);
      },
      // offsetX and offsetY include the padding of the parent container
      // 需要加上父级容器的 padding-left 16 与自身偏移量 10
      offsetX: 0,
      // 需要加上父级容器的 padding-top 24 、画布兄弟元素高度、与自身偏移量 10
      offsetY: 0,
      // the types of items that allow the menu show up
      // 在哪些类型的元素上响应
      itemTypes: ['node', 'edge', 'canvas'],
    });
    
    if (!graph) {
      graph = new F6.Graph({
        container: ref.current,
        width,
        height,
        linkCenter: true,
        fitView: true,
        plugins: [contextMenu],
        defaultNode: {
          size: [80, 40],
          type: 'rect',
          style: {
            fill: '#DEE9FF',
            stroke: '#5B8FF9',
          },
        },
        defaultEdge: {
          style: {
            stroke: '#b5b5b5',
            lineAppendWidth: 3, // Enlarge the range the edge to be hitted
          },
          labelCfg: {
            autoRotate: true,
            style: {
              // A white stroke with width 5 helps show the label more clearly avoiding the interference of the overlapped edge
              stroke: 'white',
              lineWidth: 5,
            },
          },
        },
        modes: {
          default: ['drag-node'],
        },
      });
      graph.data(data);
      graph.render();
    }
  }, []);

  return <div ref={ref}></div>;
}
