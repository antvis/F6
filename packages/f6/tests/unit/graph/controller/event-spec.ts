import Simulate from 'event-simulate';
import F6 from '../../../../src';

const div = document.createElement('div');
div.id = 'event-spec';
document.body.appendChild(div);

describe('event', () => {
  const graph = new F6.Graph({
    container: div,
    width: 500,
    height: 500,
  });
  it('init event', () => {
    const canvas = graph.get('canvas');
    expect(graph.get('eventController')).not.toBe(undefined);

    let a = 0;
    graph.on('canvas:tap', (e) => {
      a = e.a;
    });

    graph.emit('canvas:tap', { a: 1 });
    canvas.emit('tap', { a: 1, target: canvas, type: 'tap' });
    expect(a).toBe(1);
  });
  it('g event on canvas', () => {
    let triggered = false;
    const canvas = graph.get('canvas');
    graph.on('canvas:tap', () => {
      triggered = true;

      expect(triggered).toBe(true);
      graph.off('canvas:tap');
    });

    const evt = { type: 'tap', target: canvas };
    expect(triggered).toBe(false);

    canvas.emit('tap', evt);
  });

  it('g event on shape', () => {
    let target = null;
    const canvas = graph.get('canvas');

    const node = graph.addItem('node', {
      type: 'circle',
      color: '#ccc',
      style: { x: 50, y: 50, r: 20, lineWidth: 2 },
    });

    const shape = node.get('group').get('children')[0];

    graph.on('node:tap', (e) => {
      target = e.item;
      expect(target === node).toBe(true);
    });

    canvas.emit('tap', { type: 'tap', target: shape });

    target = null;
    graph.off('node:tap');

    canvas.emit('tap', { type: 'tap', target: shape });

    expect(target).toBe(null);
  });

  it('destory', () => {
    expect(graph).not.toBe(undefined);
    expect(graph.destroyed).toBe(false);
    graph.destroy();
    expect(graph.destroyed).toBe(true);
  });
});

describe('event with name', () => {
  it('default node', () => {
    F6.registerNode(
      'custom-node',
      {
        drawShape(cfg, group) {
          const keyShape = group.addShape('rect', {
            attrs: {
              width: 120,
              height: 50,
              stroke: 'red',
              fill: '#ccc',
            },
            name: 'custom-node-rect',
          });

          group.addShape('rect', {
            attrs: {
              width: 70,
              height: 30,
              stroke: 'green',
              fill: 'green',
              x: 20,
              y: 10,
            },
            name: 'custom-node-subrect',
          });
          return keyShape;
        },
      },
      'single-node',
    );

    const graph = new F6.Graph({
      container: 'event-spec',
      width: 500,
      height: 400,
      nodeStateStyles: {
        selected: {
          fill: 'red',
        },
      },
      defaultNode: {
        type: 'custom-node',
        linkPoint: {
          show: true,
        },
      },
    });

    const data = {
      nodes: [
        {
          id: 'node',
          label: 'node',
          x: 100,
          y: 200,
        },
        {
          id: 'node1',
          label: 'node1',
          x: 300,
          y: 200,
        },
      ],
    };

    graph.data(data);
    graph.render();

    graph.on('custom-node-rect:tap', (evt) => {
      graph.setItemState(evt.item, 'selected', true);
      const name = evt.target.get('name');
      expect(name).toEqual('custom-node-rect');
    });

    graph.on('custom-node-subrect:tap', (evt) => {
      const name = evt.target.get('name');
      expect(name).toEqual('custom-node-subrect');
    });

    graph.destroy();
  });
});
