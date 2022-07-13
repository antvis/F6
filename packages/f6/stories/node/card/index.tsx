import React, { useEffect } from 'react';
import { BaseNode, Canvas, jsx, registerNode, TreeGraph, Util } from '../../../src';

const data = {
  type: 'rect',
  label: 'F6UI演示',
  children: [
    {
      id: '19',
      type: 'EQUITY_GRAPH_NODE_TYPE_COMPANY_F6UI',
      tip: '测试',
      circleIcon: '',
      formattedName: '上海黄金交易所',
      x: 0,
      y: 0,
      children: [],
      originChildren: [],
      side: 'down',
      path: {
        招商银行股份有限公司: 1,
      },
      relationType: null,
      tyshxydm: '91310000736228569K',
      investRatio: 0.0071,
      hasExpand: true,
      ratio: 0.0071,
      nodeType: 'ENTERPRISE_ORGANIZATION',
      name: '上海黄金交易所',
      formattedRatio: '0.71%',
      isCircle: true,
    },
  ],
};

class Card extends BaseNode {
  ref = { current: null };
  constructor(props) {
    super(props);
    this.state = {
      bg: '#fff',
    };
  }
  getKeyShape() {
    return this.ref.current;
  }
  onDrag = () => {
    this.setState({
      bg: 'red',
    });
  };
  onDragEnd = () => {
    this.setState({
      bg: '#fff',
    });
  };
  render() {
    const w = 208;
    const h = 100;
    const { bg } = this.state;
    const style = {
      container: {
        textBaseline: 'middle',
        fontSize: 12,
        textAlign: 'center',
      },
      constainerBg: {
        x: 0,
        y: 0,
        width: w,
        height: h,
        fill: bg,
        color: '#333333',
        stroke: '#91D5FF',
        draggable: true,
      },
      titleBg: {
        width: w,
        height: h / 2,
        fill: '#E6F7FF',
      },
      titleText: {
        x: w / 2,
        y: h / 4,
        text: '上海黄金交易所',
      },
      descBg: {
        x: 0,
        y: h / 2,
      },
      descText: {
        x: w / 2,
        y: h / 4,
        text: '测试',
      },
      subBg: {
        x: w - 98,
        y: -15,
        width: 98,
        height: 28,
        stroke: '#FFA39E',
        fill: '#FFF1F0',
        radius: 10,
      },
      subText: {
        x: 98 / 2,
        y: 28 / 2,
        text: '循环持股',
      },
    };
    return (
      <group style={style.container}>
        <rect
          onDrag={this.onDrag}
          onDragEnd={this.onDragEnd}
          ref={this.ref}
          style={style.constainerBg}
        />
        <rect style={style.titleBg}>
          <text style={style.titleText}></text>
        </rect>
        <rect style={style.descBg}>
          <text style={style.descText}></text>
        </rect>
        <rect style={style.subBg}>
          <text style={style.subText}></text>
        </rect>
      </group>
    );
  }
}

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);

    registerNode('EQUITY_GRAPH_NODE_TYPE_COMPANY_F6UI', Card);

    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <TreeGraph
          fitCenter={true}
          data={data}
          modes={{
            default: ['collapse-expand', 'drag-node'],
          }}
          layout={{
            type: 'dendrogram',
          }}
        ></TreeGraph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);
  // }

  return <div ref={ref}></div>;
};
