import { Canvas, Circle, Group, Path, Text } from '@antv/g';
// import { CanvasRenderer } from '@antv/f-engine';
import { Renderer as CanvasRenderer } from '@antv/g-mobile-canvas';
import { Plugin } from '@antv/g-plugin-dragndrop';
import { useEffect } from 'react';
import { ForceLayout, Util } from '../../../src';
import data from '../../layout/force/data';
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
  const group1 = new Group();
  const group2 = new Group();
  const group3 = new Group();
  const group4 = new Group();

  const rect1 = new Circle({
    style: {
      r: 50,
      cx: 0,
      cy: 0,
      fill: 'blue',
    },
  });

  const text1 = new Text({
    width: 0,
    height: 0,
    fill: '#000',
    fontSize: 12,
    textAlign: 'center',
    textBaseline: 'middle',
    x: 0,
    y: 0,
    text: 1,
    pointerEvents: 'none',
  });

  const rect2 = new Circle({
    style: {
      cx: 50,
      cy: 50,
      r: 50,
      fill: 'red',
    },
  });

  const text2 = new Text({
    width: 0,
    height: 0,
    fill: '#000',
    fontSize: 12,
    textAlign: 'center',
    textBaseline: 'middle',
    x: 0,
    y: 0,
    text: 1,
    pointerEvents: 'none',
  });

  group1.appendChild(group2);
  group2.appendChild(rect1);
  group2.appendChild(text1);
  group3.appendChild(group4);
  group4.appendChild(rect2);
  group4.appendChild(text2);

  group.appendChild(group1);
  group.appendChild(group3);

  canvas.appendChild(group);
  group1.style.zIndex = 4;

  canvas.on('drag', (e) => {
    console.log('drag');
    const matrix = group.getMatrix();
    matrix[7] += 2;
    matrix[8] += 2;
    group.setMatrix(matrix);
  });

  // setInterval(() => {
  //   group1.style.zIndex = 2;
  //   Object.assign(rect1.style, {
  //     y: 0,
  //     x: 0,
  //     r: 50,
  //     stroke: 'rgb(95, 149, 255)',
  //     fill: 'rgb(239, 244, 255)',
  //     lineWidth: 1,
  //     draggable: true,
  //     droppable: true,
  //   });
  //   Object.assign(text1.style, {
  //     width: 0,
  //     height: 0,
  //     fill: '#000',
  //     fontSize: 12,
  //     textAlign: 'center',
  //     textBaseline: 'middle',
  //     x: 0,
  //     y: 0,
  //     text: '1',
  //     pointerEvents: 'none',
  //   });
  //   Object.assign(rect2.style, {
  //     y: 0,
  //     x: 0,
  //     r: 50,
  //     stroke: 'rgb(95, 149, 255)',
  //     fill: 'rgb(239, 244, 255)',
  //     lineWidth: 1,
  //     draggable: true,
  //     droppable: true,
  //   });
  //   Object.assign(text2.style, {
  //     width: 0,
  //     height: 0,
  //     fill: '#000',
  //     fontSize: 12,
  //     textAlign: 'center',
  //     textBaseline: 'middle',
  //     x: 0,
  //     y: 0,
  //     text: '1',
  //     pointerEvents: 'none',
  //   });
  // }, 100);
}

function testLayout(canvas) {
  let uid = 0;
  const width = canvas.getConfig().width;
  const height = canvas.getConfig().height;

  const initPositions = (center, nodes, _width, _height) => {
    if (!nodes) {
      return false;
    }
    const nodeLength = nodes ? nodes.length : 0;
    if (!nodeLength) return;

    const width = _width * 0.85;
    const height = _height * 0.85;
    const horiNum = Math.ceil(Math.sqrt(nodeLength) * (width / height));
    const vertiNum = Math.ceil(nodeLength / horiNum);
    let horiGap = width / (horiNum - 1);
    let vertiGap = height / (vertiNum - 1);
    if (!isFinite(horiGap) || !horiGap) horiGap = 0;
    if (!isFinite(vertiGap) || !horiGap) vertiGap = 0;
    const beginX = center[0] - width / 2;
    const beginY = center[1] - height / 2;

    let allHavePos = true;
    for (let i = 0; i < nodeLength; i++) {
      const node = nodes[i];
      if (isNaN(node.x)) {
        allHavePos = false;
        node.x = (i % horiNum) * horiGap + beginX;
      }
      if (isNaN(node.y)) {
        allHavePos = false;
        node.y = Math.floor(i / horiNum) * vertiGap + beginY;
      }
    }

    return allHavePos;
  };

  initPositions([width / 2, height / 2], data.nodes, width, height);

  const nodeGroup = new Group();
  const edgeGroup = new Group();
  canvas.appendChild(nodeGroup);
  canvas.appendChild(edgeGroup);
  const shapeMap = {};
  function renderNode(nodedata) {
    let node = shapeMap[nodedata.id];
    if (!node) {
      nodedata.id = nodedata.id || 'node_' + ++uid;
      const group = new Group();
      node = new Circle({
        style: {
          r: 15,
          stroke: 'red',
        },
      });
      nodeGroup.appendChild(group);
      group.appendChild(node);
      shapeMap[nodedata.id] = node;
    }
    node.setLocalPosition(nodedata.x, nodedata.y);
  }
  function renderEdge(edgeData) {
    let node = shapeMap[edgeData.id];
    if (!node) {
      const group = new Group();
      edgeData.id = edgeData.id || 'edge_' + ++uid;
      edgeGroup.appendChild(group);
      shapeMap[edgeData.id] = group;
    }
  }
  const force = new ForceLayout({
    type: 'force',
    center: [width / 2, height / 2],
    tick: () => {
      data.nodes.forEach((node) => {
        renderNode(node);
      });
      data.edges.forEach((edge) => {
        renderEdge(edge);
      });
    },
  });
  force.init(data);
  force.execute();
}

function testPointUp(canvas) {
  const plugin = new Plugin({
    // we can drag the whole document from empty space now!
    isDocumentDraggable: true,
    isDocumentDroppable: true,
    dragstartDistanceThreshold: 10,
    dragstartTimeThreshold: 100,
  });
  canvasRenderer.registerPlugin(plugin);
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

    const plugin = new Plugin({
      // we can drag the whole document from empty space now!
      isDocumentDraggable: true,
      isDocumentDroppable: true,
      dragstartDistanceThreshold: 10,
      dragstartTimeThreshold: 100,
    });
    canvasRenderer.registerPlugin(plugin);

    const context = Util.createContext('container', width, height);
    // create a canvas
    const canvas = new Canvas({
      canvas: context.canvas,
      width: 600,
      height: 500,
      renderer: canvasRenderer,
    });

    // testMassG5(canvas, 250);
    // testZIndex(canvas);
    testLayout(canvas);
  });

  return <div id="container" style={{ width, height, display: 'flex' }}></div>;
};
