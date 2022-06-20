import React, { useEffect } from 'react';
import { Canvas, Graph, Util } from '../../../src';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  const data = {
    nodes: [
      {
        id: 'circle',
        label: 'Circle',
        x: 250,
        y: 150,
      },
    ],
  };
  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);

    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <Graph
          fitCenter={true}
          data={data}
          modes={{
            default: ['collapse-expand', 'drag-node'],
          }}
          defaultNode={{
            /* node type */
            type: 'circle',
            /* node size */
            size: [60],
            /* style for the keyShape */
            // style: {
            //   fill: '#9EC9FF',
            //   stroke: '#5B8FF9',
            //   lineWidth: 3,
            // },
            labelCfg: {
              /* label's position, options: center, top, bottom, left, right */
              position: 'bottom',
              /* label's offset to the keyShape, 4 by default */
              //   offset: 12,
              /* label's style */
              // style: {
              //   fontSize: 20,
              //   fill: '#ccc',
              //   fontWeight: 500,
              // },
            },
            /* configurations for four linkpoints */
            linkPoints: {
              top: true,
              right: true,
              bottom: true,
              left: true,
              /* linkPoints' size, 8 by default */
              //   size: 5,
              /* linkPoints' style */
              //   fill: '#ccc',
              //   stroke: '#333',
              //   lineWidth: 2,
            },
            /* icon configuration */
            icon: {
              /* whether show the icon, false by default */
              show: true,
              /* icon's img address, string type */
              // img: 'https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg',
              /* icon's size, 20 * 20 by default: */
              // width: 40,
              // height: 40,
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
