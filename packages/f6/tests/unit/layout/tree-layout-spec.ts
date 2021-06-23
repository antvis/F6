import F6 from '../../../src';
import TreeGraph from '../../../src/extends/graph/treeGraph';

F6.registerLayout('dendrogram', radialLayout);

const div = document.createElement('div');
div.id = 'graph-spec';
document.body.appendChild(div);

const data = {
  isRoot: true,
  id: 'Root',
  children: [
    {
      id: 'SubTreeNode1',
      children: [
        {
          id: 'SubTreeNode1.1',
        },
        {
          id: 'SubTreeNode1.2',
        },
      ],
    },
    {
      id: 'SubTreeNode2',
    },
  ],
};

describe('random', () => {
  it('new graph without layout, random by default', () => {
    const layout = new F6.TreeGraph({
      type: 'dendrogram',
      radial: true,
    });
    const layoutData = layout.layout(data);
    const tree = new F6.TreeGraph({
      container: div,
      width: 500,
      height: 500,
      fitView: true,
    });
    tree.data(layoutData);
    tree.render();
    expect(!isNaN(layoutData.x)).toBe(true);
    expect(!isNaN(layoutData.y)).toBe(true);
    expect(!isNaN(layoutData.children[0].x)).toBe(true);
    expect(!isNaN(layoutData.children[0].y)).toBe(true);
  });
});
