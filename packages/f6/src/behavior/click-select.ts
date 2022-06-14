import { each } from '@antv/util';
import { BaseBehavior } from './base';

export class ClickSelect extends BaseBehavior {
  getDefaultCfg(): object {
    return {
      multiple: true,
      selectedState: 'selected',
    };
  }
  getEvents() {
    const self = this as any;

    return {
      'node:tap': 'onClick',
      'combo:tap': 'onClick',
      'canvas:tap': 'onCanvasClick',
    };
  }
  onClick(evt) {
    const self = this;
    const { item } = evt;
    if (!item || item.destroyed) {
      return;
    }

    const type = item.getType();
    const { multiple, selectedState } = this.cfg;
    const { graph, shouldUpdate, shouldBegin } = self;
    if (!shouldBegin.call(self, evt)) {
      return;
    }

    // allow to select multiple nodes but did not press a key || do not allow the select multiple nodes
    if (!multiple) {
      const selected = graph.findAllByState(type, selectedState);
      each(selected, (combo) => {
        if (combo !== item) {
          graph.setItemState(combo, selectedState, false);
        }
      });
    }

    if (item.hasState(selectedState)) {
      if (shouldUpdate.call(self, evt)) {
        graph.setItemState(item, selectedState, false);
      }
      const selectedNodes = graph.findAllByState('node', selectedState);
      const selectedCombos = graph.findAllByState('combo', selectedState);
      graph.emit('nodeselectchange', {
        target: item,
        selectedItems: {
          nodes: selectedNodes,
          combos: selectedCombos,
        },
        select: false,
      });
    } else {
      if (shouldUpdate.call(self, evt)) {
        graph.setItemState(item, selectedState, true);
      }
      const selectedNodes = graph.findAllByState('node', selectedState);
      const selectedCombos = graph.findAllByState('combo', selectedState);
      graph.emit('nodeselectchange', {
        target: item,
        selectedItems: {
          nodes: selectedNodes,
          combos: selectedCombos,
        },
        select: true,
      });
    }
  }
  onCanvasClick() {
    const { graph } = this;
    const { selectedState } = this.cfg;
    const selected = graph.findAllByState('node', selectedState);
    each(selected, (node) => {
      graph.setItemState(node, selectedState, false);
    });

    const selectedCombos = graph.findAllByState('combo', selectedState);
    each(selectedCombos, (combo) => {
      graph.setItemState(combo, selectedState, false);
    });
    graph.emit('nodeselectchange', {
      selectedItems: { nodes: [], edges: [], combos: [] },
      select: false,
    });
  }
}
