import { Canvas, Circle, Group, Path, Text } from '@antv/g';
// import { CanvasRenderer } from '@antv/f-engine';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { useEffect } from 'react';

function testMassG5(canvas, count) {
  const group = canvas.getRoot();
  const groups = Array(count)
    .fill(1)
    .map(() => {
      const text = new Text({
        attrs: {
          x: 100,
          y: 100,
          fontFamily: 'PingFang SC',
          text: '这是测试文本This is text',
          fontSize: 15,
          fill: '#1890FF',
          stroke: '#F04864',
          lineWidth: 5,
        },
      });
      const circle = new Circle({
        attrs: {
          r: 20,
          fill: '#000',
        },
      });
      const path = new Path({
        attrs: {
          path: [
            ['M', 0, 0],
            ['L', 500, 500],
          ],
          lineWidth: 2,
          stroke: 'black',
        },
      });
      const gg = new Group();
      gg.appendChild(text);
      gg.appendChild(circle);
      gg.appendChild(path);
      group.appendChild(gg);
      return gg;
    });

  const loop = () => {
    groups.forEach((group) =>
      group.attr({
        x: Math.random() * 600,
        y: Math.random() * 500,
      }),
    );
    setTimeout(loop);
  };
  loop();
}

export default () => {
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  useEffect(() => {
    // create a renderer
    const canvasRenderer = new CanvasRenderer();

    // create a canvas
    const canvas = new Canvas({
      container: 'container',
      width: 600,
      height: 500,
      renderer: canvasRenderer,
    });
    testMassG5(canvas, 500);
  });

  return <div id="container" style={{ width, height, display: 'flex' }}></div>;
};
