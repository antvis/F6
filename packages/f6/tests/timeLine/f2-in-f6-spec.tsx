import { Canvas, Chart, Interval, jsx } from '@antv/f2/src';
import { Graph, registerLayout, registerNode } from '@antv/f6/src';
import ForceLayout from '@antv/f6/src/layout/forceLayout';
import { createContext } from '../util';

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

const GraphData = {
  nodes: [
    {
      type: 'circle',
      size: [30, 30],
      label: '0',
      id: '0',
      cluster: 'a',
    },
    {
      type: 'circle',
      size: [30, 30],
      label: '0',
      id: '0',
      cluster: 'a',
    },
    {
      type: 'f2',
      size: [30, 30],
      label: '0',
      id: '0',
      cluster: 'a',
    },
  ],
};

describe('Chart', () => {
  it('chart in f6', () => {
    const context = createContext('柱图-treemap 转换');
    registerLayout('force', ForceLayout);

    function F2Chart(props) {
      return (
        <Chart
          data={data}
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

    registerNode('f2', F2Chart);

    const { type, props } = (
      <Canvas context={context} pixelRatio={1} width={500} height={500}>
        <Graph
          data={GraphData}
          layout={{
            type: 'force',
            preventOverlap: true,
            alphaDecay: 0,
          }}
          modes={{
            default: ['drag-node', 'drag-combo', 'click-select'],
          }}
        ></Graph>
      </Canvas>
    );
    const canvas = new Canvas(props);
    canvas.render();
  });
});
