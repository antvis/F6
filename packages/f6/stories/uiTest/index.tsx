import React, { useEffect } from 'react';
import F6 from '../../src';
import { createUI }  from '../../../f6-ui'
import data from './data'

function test(group) {
  const html = `
    <ui id="lll">
      <div class="test">
        <shape type="polygon" points = "[
          [0, 0],
          [0, 80],
          [80, 80],
          [80, 0]
        ]" />
        <shape class="circle" type="circle" r="30" />
        666
      </div>
      <div class="real">       
       <image src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ"></image>
      </div>
      <div class="test">test</div>
      <div class="real">test</div>
    </ui>
  `;
  const css = `
    #lll {
      /** 盒模型 **/
      width: 500;
      height: 400;
      padding: 0 0;
      margin: 100 100;
      border: 10 solid rgba(0,0,0,1);

      /** flex **/
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;

      /** 基础绘制 **/
      background: blue;
      border-radius: 5;

      /** 继承 **/
      color: red;
      font-size: 24;
      text-align: center;
    }

    /** 优先级 **/
    #lll div.real{
      background: yellow;
    }
    
    /** 选择器组合 **/
    #lll div{
      background: red;
      margin-left: 10;
      width: 100;
      height: 100;
    }
    
    shape {
      position: absolute;
      background: #ff00ff;
      top: 10;
      left: 10;
      width: 80;
      height: 80;
    }

    .test {
      padding-top: 35;
      color: white;
    }
    shape.circle {
      top: 50;
      left: 50;
      background: black;
    }
    image {
      width: 50;
      height: 50;
    }
  `;
  // 样式解析计算，简写样式展开。
  const uiTree  = createUI (html, css, group);
  const nodes = uiTree.query('#lll div');
  console.log(nodes)
  nodes[0].addEventListener('tap', (e) => {
    console.log('click!')
  })
  uiTree.ui.attr('justifyContent', 'flex-start')
  nodes[0].attr('marginRight', 20);

  setTimeout(() => {
    nodes[0].attr('display', 'none');
  })

  setTimeout(() => {
    nodes[0].attr('display', 'flex');
  }, 1000)

  // nodes[0].attr('marginRight', 0);
  console.log(uiTree)
}
export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  let graph = null;
  useEffect(() => {
    if (!graph) {
      graph = new F6.Graph({
        container: ref.current,
        width,
        height,
        pixelRatio: 2,
        fitView: true,
        localRefresh: false,
        modes: {
          default: ['drag-canvas', 'drag-node'],
        },
        animate: true,
        defaultNode: {
          size: 30,
        },
      } as any);

      graph.get('canvas').set('localRefresh', false);
      graph.data(data);
      graph.render();
      graph.fitView();
      test(graph.get('uiGroup'))
    }
  }, []);

  return <div ref={ref}></div>;
};
