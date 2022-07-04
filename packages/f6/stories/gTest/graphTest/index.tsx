import { Canvas, Circle, Group, Path, Rect, Text } from '@antv/g';
// import { CanvasRenderer } from '@antv/f-engine';
import { Renderer as CanvasRenderer } from '@antv/g-mobile-canvas';
import { useEffect } from 'react';
import { Util } from '../../../src';
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

function testZIndex(canvas) {
  const group = new Group();
  const group2 = new Group();
  const rect1 = new Rect({
    style: {
      width: 100,
      height: 100,
      fill: 'blue',
    },
  });
  const rect2 = new Rect({
    style: {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: 'red',
    },
  });
  group.appendChild(rect1);
  group2.appendChild(rect2);
  canvas.getRoot().appendChild(group);
  canvas.getRoot().appendChild(group2);

  setTimeout(() => {
    group.style.zIndex = 2;
  }, 100);
}

function testPointUp(canvas) {
  // const plugin = new Plugin({
  //   // we can drag the whole document from empty space now!
  //   isDocumentDraggable: true,
  //   isDocumentDroppable: true,
  //   dragstartDistanceThreshold: 10,
  //   dragstartTimeThreshold: 100,
  // });
  // canvasRenderer.registerPlugin(plugin);
  canvas.addEventListener('pointerup', () => {
    console.log('canvas up');
  });
}
export default () => {
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  useEffect(() => {
    // create a renderer
    const canvasRenderer = new CanvasRenderer();

    const context = Util.createContext('container', width, height);
    // create a canvas
    const canvas = new Canvas({
      canvas: context.canvas,
      width: 600,
      height: 500,
      renderer: canvasRenderer,
    });

    // testMassG5(canvas, 550);
    testZIndex(canvas);
  });

  return <div id="container" style={{ width, height, display: 'flex' }}></div>;
};
