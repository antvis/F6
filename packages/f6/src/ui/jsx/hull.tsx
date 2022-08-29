import { Component, jsx } from '@antv/f-engine';
import { connect } from './connector';

@connect((graph, props) => {
  const id = props.id;
  const item = graph.hullManager.items[id];
  if (!item) return;
  return {
    path: item.path,
    model: item.model,
  };
})
export class Hull extends Component {
  defaultCfg = {
    style: {
      fill: 'lightblue',
      stroke: 'blue',
      opacity: 0.2,
    },
  };

  render() {
    const {
      model: { style },
      path,
    } = this.props;
    return (
      <path
        style={{
          ...this.defaultCfg.style,
          ...style,
          path,
        }}
      ></path>
    );
  }
}
