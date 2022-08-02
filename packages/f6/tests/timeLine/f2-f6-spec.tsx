import { Axis, Canvas, Chart, Interval, jsx, Timeline } from '@antv/f2';
import { Graph, registerLayout, TreeGraph } from '@antv/f6/src';
import ForceLayout from '@antv/f6/src/layout/forceLayout';
import { createContext } from '../util';
import forceData from './data/force.json';

const data = [
  { key: 'Sports', type: 'a', genre: 'Sports', sold: 5 },
  { key: 'Strategy', type: 'a', genre: 'Strategy', sold: 10 },
  { key: 'Action', type: 'a', genre: 'Action', sold: 20 },
  { key: 'Shooter', type: 'a', genre: 'Shooter', sold: 20 },
  { key: 'Other', type: 'a', genre: 'Other', sold: 40 },
];

const data2 = [
  { key: 'Sports', type: 'a', genre: 'Sports', sold: 5 },
  { key: 'Strategy', type: 'a', genre: 'Strategy', sold: 10 },
  { key: 'Action', type: 'a', genre: 'Action', sold: 20 },
  { key: 'Shooter', type: 'a', genre: 'Shooter', sold: 20 },
  { key: 'Sports', type: 'b', genre: 'Sports', sold: 5 },
  { key: 'Strategy', type: 'b', genre: 'Strategy', sold: 10 },
  { key: 'Action', type: 'b', genre: 'Action', sold: 20 },
  { key: 'Shooter', type: 'b', genre: 'Shooter', sold: 20 },
  { key: 'Other', type: 'b', genre: 'Other', sold: 40 },
];
const treeData = {
  isRoot: true,
  id: 'Root',
  cluster: 'c0',
  type: 'circle',
  children: [
    {
      type: 'circle',
      id: 'SubTreeNode1',
      cluster: 'c0',
      raw: {},
      // collapsed: true,

      children: [
        {
          type: 'circle',
          id: 'SubTreeNode1.1',
          cluster: 'c1',
        },
        {
          type: 'circle',
          id: 'SubTreeNode1.2',
          cluster: 'c1',
          children: [
            {
              type: 'circle',
              id: 'SubTreeNode1.2.1',
              cluster: 'c0',
            },
            {
              type: 'circle',
              id: 'SubTreeNode1.2.2',
              cluster: 'c0',
            },
            {
              type: 'circle',
              id: 'SubTreeNode1.2.3',
              cluster: 'c1',
            },
          ],
        },
      ],
    },
    {
      type: 'circle',
      id: 'SubTreeNode2',
      cluster: 'c0',

      children: [
        {
          type: 'circle',
          id: 'SubTreeNode2.1',
          cluster: 'c2',
        },
      ],
    },
    {
      type: 'circle',
      id: 'SubTreeNode3',
      cluster: 'c0',
      children: [
        {
          type: 'circle',
          id: 'SubTreeNode3.1',
          cluster: 'c2',
        },
        {
          type: 'circle',
          id: 'SubTreeNode3.2',
          cluster: 'c2',
        },
        {
          type: 'circle',
          id: 'SubTreeNode3.3',
          cluster: 'c2',
        },
      ],
    },
    {
      type: 'circle',
      id: 'SubTreeNode4',
      cluster: 'c1',
    },
    {
      type: 'circle',
      id: 'SubTreeNode5',
      cluster: 'c1',
    },
    {
      type: 'circle',
      id: 'SubTreeNode6',
      cluster: 'c1',
    },
  ],
};

describe('Chart', () => {
  it('f2转f6', () => {
    const context = createContext('柱图-treemap 转换');
    const intervalRef = { current: null };
    const treemapRef = {};
    const pointRef = {};
    const lineRef = {};
    const pieRef = { name: 'pieRef' };
    const roseRef = {};
    const forceRef1 = { current: null };
    const forceRef2 = { current: null };
    const treeRef = { current: null };

    registerLayout('force', ForceLayout);
    const { type, props } = (
      <Canvas context={context} pixelRatio={1} width={500} height={500}>
        <Timeline delay={5000} loop>
          <Graph
            data={forceData}
            layout={{
              type: 'force',
              preventOverlap: true,
              alphaDecay: 0,
            }}
            modes={{
              default: ['drag-node', 'drag-combo', 'click-select'],
            }}
          ></Graph>
          <TreeGraph
            ref={treeRef}
            data={treeData}
            layout={{
              type: 'compactBox',
              direction: 'LR',
              defalutPosition: [],
              getId: function getId(d) {
                return d.id;
              },
              getHeight: function getHeight() {
                return 16;
              },
              getWidth: function getWidth() {
                return 16;
              },
              getVGap: function getVGap() {
                return 10;
              },
              getHGap: function getHGap() {
                return 50;
              },
            }}
            modes={{
              default: ['collapse-expand', 'drag-canvas'],
            }}
          ></TreeGraph>

          <Chart data={data}>
            <Axis field="genre" />
            <Axis field="sold" />
            <Interval
              ref={intervalRef}
              transformFrom={forceRef2}
              x="genre"
              y="sold"
              color="genre"
              style={{
                radius: 10,
                lineWidth: '4px',
                stroke: '#fff',
              }}
            />
          </Chart>
          {/* <Chart data={data}>
            <Axis field="genre" />
            <Axis field="sold" />
            <Point
              ref={pointRef}
              transformFrom={intervalRef}
              x="genre"
              y="sold"
              color="genre"
              size="sold"
            />
          </Chart>
          <Treemap
            transformFrom={pointRef}
            ref={treemapRef}
            data={data}
            color={{
              field: 'genre',
            }}
            value="sold"
            space={4}
          /> */}
          {/* <Chart data={data2}>
            <Axis field="genre" />
            <Axis field="sold" />
            <Line
              ref={lineRef}
              transformFrom={treemapRef}
              x="genre"
              y="sold"
              color="genre"
              size="sold"
            />
          </Chart> */}
          {/* <Chart
            data={data}
            coord={{
              type: 'polar',
              transposed: true,
            }}
          >
            <Interval
              ref={pieRef}
              transformFrom={treemapRef}
              x="type"
              y="sold"
              adjust="stack"
              color="genre"
              style={{
                radius: 10,
                lineWidth: '4px',
                stroke: '#fff',
              }}
            />
          </Chart>
          <Chart
            data={data}
            coord={{
              type: 'polar',
            }}
          >
            <Interval
              ref={roseRef}
              transformFrom={pieRef}
              x="genre"
              y="sold"
              color="genre"
              style={{
                radius: 10,
                lineWidth: '4px',
                stroke: '#fff',
              }}
            />
          </Chart> */}
        </Timeline>
      </Canvas>
    );

    const canvas = new Canvas(props);
    canvas.render();
  });
});
