# f6 for rax

rax中快速使用 F6 的小工具，帮助用户封装了一些基础的操作，用户也可以参考这里的封装自行处理

## 基础参数

| 属性名 | 默认值 | 类型 | 是否必传 | 描述 |
| --- | --- | --- | --- | --- |
| width | 100 | Number | 否 | canvas 的宽度，这个值是页面中组件的宽度 |
| height | 100 | Number | 否 | canvas 的高度，这个值是页面中组件的高度 |
| pixelRatio | 1 | Number | 否 | 设备像素比，这个字段很关键！！！不传递绘制的图非高清！！！字段来自 getSystemInfo/getSystemInfoSync |
| onInit | 空 | Function | 否 | canvas 初始化完成后返回，会携带相关的信息回来，具体看下方表格 |
| onTouchEvent | 空 | Function | 否 | 所有的 touch 事件都来源这里，如果需要 f6 处理事件，都需自行传递，未统一处理的原因为，业务方可能需自行定制 |
| onError | 空 | Function | 否 | canvas 创建失败的回调 |
| style | 空 | String | 否 | 就是简单的 css 样式 |

# demo

