import {createUI} from '../../../f6-ui/lib';

export default {
  
  draw(cfg, group) {
    const styles = this.getShapeStyle(cfg);
    const w = styles.width;
    const h = styles.height;
    const bg = '#E6F7FF';

    const html = `
      <root class="f6_ui_node">
        <div class= "title">
          上海黄金交易所
        </div>
        <div class="tip">
          测试
        </div>
        <div class="tag">循环持股</div>
        <div class="marker"> 
          <shape type="path" path='[["M",7,14],["L",21,14],["M",14,7],["L",14,21]]'> </shape>
        </div>
      </root>
    `

    const css = `
      text{
        font-family: sans-serif;
      }
      .f6_ui_node{
        display: flex;
        width: ${w};
        height: ${h};
        color: #333333;
        text-align: center;
        border: 1 solid #91D5FF;
      }
      .title{
        padding: 20;
        font-size: 20;
        height: 70;
        background: ${bg};
        pointer-events: none;
      }
      .tip {
        font-size: 16;
        padding: 10;
        color: #999;
      }

      .tag{
        position: absolute;
        top: -15;
        right: 15;
        width: 98;
        height: 28;
        border: 1 solid #FFA39E;
        background: #FFF1F0;
        padding: 2;
        border-radius: 2;
        font-size: 20;
        color: #FF4D4F;
      }

      .marker{
        position: absolute;
        bottom: -30;
        left: ${w/2-28/2};
        background: #1890FF;
        width: 28;
        height: 28;
        border-radius: 14;
        
      }
      shape{
        background: black;
        border: 1 solid #fff;
      }
    `

    const ui = createUI(html, css, group)
    return ui.backgroudNode.get('children')[0]
  }   
};
