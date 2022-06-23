import { Axis, Canvas, Chart, Interval, Point, Timeline } from '@antv/f2';
import { ForceLayout, Graph, jsx, registerLayout, TreeGraph, Util } from '@antv/f6/src';
import React, { useEffect } from 'react';
import graphData from '../../data/graphData';
import treeData from '../../data/treeData';

const data = [
  { key: 'Sports', type: 'a', genre: 'Sports', sold: 5 },
  { key: 'Strategy', type: 'a', genre: 'Strategy', sold: 10 },
  { key: 'Action', type: 'a', genre: 'Action', sold: 20 },
  { key: 'Shooter', type: 'a', genre: 'Shooter', sold: 20 },
  { key: 'Other', type: 'a', genre: 'Other', sold: 40 },
];

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
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

  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <Timeline delay={2000}>
          <Graph
            data={graphData}
            layout={{
              type: 'force',
              preventOverlap: true,
              alphaDecay: 0,
            }}
            modes={{
              default: ['drag-node', 'drag-combo', 'click-select'],
            }}
            fitView={true}
          ></Graph>

          <TreeGraph
            ref={treeRef}
            data={treeData}
            fitView={true}
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
          <Chart data={data}>
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
          {/* <Treemap
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
    const graph = new Canvas(props);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};
