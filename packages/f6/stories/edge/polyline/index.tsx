import React, { useEffect } from 'react';
import { Canvas, Graph, Util } from '../../../src';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  const data = {
    nodes: [
      {
        id: '0',
        x: 150,
        y: 100,
      },
      {
        id: '1',
        x: 350,
        y: 300,
      },
    ],
    edges: [
      // Built-in polyline
      {
        source: '0',
        target: '1',
        label: 'fjaksdf',
        labelCfg: {
          autoRotate: true,
        },
      },
    ],
  };
  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);

    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <Graph
          data={data}
          modes={{
            default: ['drag-node'],
          }}
          defaultEdge={{
            type: 'line',
            /* you can configure the global edge style as following lines */
            style: {
              stroke: '#F6BD16',
              lineWidth: 1,
              startArrow: {
                // 自定义箭头指向(0, 0)，尾部朝向 x 轴正方向的 path
                path: 'M 0,0 L 20,10 L 20,-10 Z',
                // 箭头的偏移量，负值代表向 x 轴正方向移动
                offset: 0,
              },
            },
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);
  // }

  return <div ref={ref}></div>;
};
