import F6 from '../../../src';
import randomLayout from '../../../src/extends/layout/randomLayout';

import { NodeConfig, EdgeConfig } from '@antv/g6-core';

const div = document.createElement('div');
div.id = 'graph-spec';
document.body.appendChild(div);

const data: { nodes: NodeConfig[]; edges: EdgeConfig[] } = {
  nodes: [
    {
      id: '0',
    },
    {
      id: '1',
    },
  ],
  edges: [],
};

describe('random', () => {
  it('new graph without layout, random by default', () => {
    const graph = new F6.Graph({
      container: div,
      width: 500,
      height: 500,
    });
    graph.data(data);
    graph.render();

    graph.on('afterlayout', () => {
      expect(graph.getNodes()[0].getModel().x).not.toEqual(undefined);
      expect(graph.getNodes()[0].getModel().y).not.toEqual(undefined);
      expect(graph.getNodes()[1].getModel().x).not.toEqual(undefined);
      expect(graph.getNodes()[1].getModel().y).not.toEqual(undefined);
      graph.destroy();
    });
  });
  it('new graph with random layout', () => {
    const graph = new F6.Graph({
      container: div,
      layout: { type: 'random' },
      width: 500,
      height: 500,
    });
    graph.data(data);
    graph.render();
    expect(graph.getNodes()[0].getModel().x).not.toEqual(undefined);
    expect(graph.getNodes()[0].getModel().y).not.toEqual(undefined);
    expect(graph.getNodes()[1].getModel().x).not.toEqual(undefined);
    expect(graph.getNodes()[1].getModel().y).not.toEqual(undefined);
    graph.destroy();
  });
  it('instantialize a random layout', () => {
    const random = new randomLayout({
      width: null,
      height: null,
    });
    random.init(data);
    random.execute();
    expect(data.nodes[0].x).not.toEqual(undefined);
    expect(data.nodes[0].y).not.toEqual(undefined);
    expect(data.nodes[1].x).not.toEqual(undefined);
    expect(data.nodes[1].y).not.toEqual(undefined);
    expect(random.width).not.toEqual(null);
    expect(random.height).not.toEqual(null);
  });
});
