import { Canvas, Chart, Component, Interval, jsx } from '@antv/f2';
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

describe('Chart', () => {
  it('chart in f6', () => {
    const context = createContext('柱图-treemap 转换');
    registerLayout('force', ForceLayout);

    class F2Chart extends Component {
      getKeyShape() {
        // @ts-ignore
        return this.container;
      }
      getAnchorPoints() {}
      render() {
        // const { node } = this.props;
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

    const { type, props } = (
      <Canvas context={context} pixelRatio={1} width={500} height={500}>
        <Graph
          data={GraphData}
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
    const canvas = new Canvas(props);
    canvas.render();
  });
});
