### F6-UI

基于 G 的简易 UI 系统，可以结合 F6 快速实现 UI 布局。适合小范围的在 canvas 上的布局。

- 支持 html+css
- 支持 flex 布局
- 支持事件
- 支持重排
- 支持重绘

### 标签支持

| Tag                      | 描述         |
| ------------------------ | ------------ |
| root                     | 根节点       |
| div                      | 容器节点     |
| image                    | 图片节点     |
| text（文本自动隐式创建） | 文本节点     |
| shape                    | G 中的 shape |

### css 支持

| 属性 | 值/示例 |
| --- | --- |
| width/height/min/max-width/heihgt | number |
| top,left,right,bottom | number |
| pading, padding-left/top/right/bottom | number |
| margin, margin-left/top/right/bottom | number |
| overflow | hidden |
| display | 'flex' , 'none' |
| position | 'absolute' |
| flex-direction | 'column', 'row' |
| flex-wrap | 'wrap', 'nowrap' |
| justify-content | 'flex-start', 'center', 'flex-end', 'space-between', 'space-around' |
| align-items/ align-self | 'flex-start', 'center', 'flex-end', 'stretch' |
| align-content | 'flex-start', 'center', 'flex-end', 'stretch' |
| border | <borderWidth> <borderStyle> <borderColor> |
| border-width | number |
| border-style | 'solid', 'dashed' |
| border-radius | number |
| color | 颜色名称 / #xxx / rgb() / rgba() |
| font-family |  |
| backgroud-color | 颜色名称 / #xxx / rgb() / rgba() |
| pointer-events | none |

- 目前文本和 shape 标记不能计算出宽高，不参与布局，文本需要使用 div 将文本包起来，定义该 div 的宽高。shape 可以直接在 css 中定义 shape 的宽高

### example

相对比较复杂的案例可以参考 F6-plugin package 下的 timebar 控件。下面是一个简单的示例：

```ts
import F6 from '@antv/f6';
import { createUI } from '../../../f6-ui';

function runTestUI(group) {
  const html = `
    <root id="lll">
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
    </root>
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
  createUI(html, css, group);
}
```
