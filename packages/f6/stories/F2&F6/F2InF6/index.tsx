import { Canvas, Chart, Component, Interval } from '@antv/f2';
import { ForceLayout, Graph, jsx, registerLayout, registerNode, Util } from '@antv/f6/src';
import React, { useEffect } from 'react';

const data = [
  {
    name: '长津湖',
    percent: 0.4,
    a: '1',
  },
  {
    name: '我和我的父辈',
    percent: 0.2,
    a: '1',
  },
  {
    name: '失控玩家',
    percent: 0.18,
    a: '1',
  },
  {
    name: '宝可梦',
    percent: 0.15,
    a: '1',
  },
  {
    name: '峰爆',
    percent: 0.05,
    a: '1',
  },
  {
    name: '其他',
    percent: 0.02,
    a: '1',
  },
];

const graphData = {
  nodes: [
    {
      type: 'circle',
      size: [30, 30],
      label: '0',
      id: '0',
      cluster: 'a',
      comboId: 'combo1',
    },
    {
      id: '1',
      label: '1',
      cluster: 'a',
      comboId: 'combo1',
      type: 'circle',
      size: [30, 30],
    },
    {
      id: '2',
      type: 'f2',
      size: [30, 30],
      label: '0',
      cluster: 'a',
    },
  ],
  edges: [
    {
      source: '0',
      target: '1',
    },
    {
      source: '0',
      target: '2',
    },
  ],
};

class F2Chart extends Component {
  getKeyShape() {
    return this.container;
  }
  getAnchorPoints() {}

  render() {
    const { node } = this.props;
    // console.log(node);
    return (
      <Chart
        data={data}
        style={{
          // left: node.x,
          // top: node.y,
          width: 100,
          height: 100,
        }}
        coord={{
          transposed: true,
          type: 'polar',
        }}
      >
        <Interval
          x="a"
          y="percent"
          adjust="stack"
          color={{
            field: 'name',
            range: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'],
          }}
        />
      </Chart>
    );
  }
}
registerNode('f2', F2Chart);
registerLayout('force', ForceLayout);

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <Graph
          data={graphData}
          layout={{
            type: 'force',
            // preventOverlap: true,
            // alphaDecay: 0,
          }}
          modes={{
            default: ['drag-node', 'drag-combo', 'click-select'],
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};
