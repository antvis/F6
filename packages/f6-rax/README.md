## f6-rax

## Install

```
$ npm install @antv/f6-rax --save
```

## Usage

```
import F6Rax from '@antv/f6-rax';
```

## API

### Props

| 属性名                | 默认值 | 类型                 | 是否必传 | 描述                                         |
| --------------------- | ------ | -------------------- | -------- | -------------------------------------------- |
| data                  | --     | {nodes:[],edges: []} | 是       | 图数据                                       |
| width                 | ---    | Number               | 否       | canvas 的宽度，这个值是页面中组件的宽度      |
| height                | ---    | Number               | 否       | canvas 的高度，这个值是页面中组件的高度      |
| handleClick           | ---    | （）=> {}            | 否       | 点击事件回调函数                             |
| updateEventOffsetFlag | ---    | false                | 否       | 小程序中生效，当容器改变时，需手动更新该标志 |
| config                | ---    | object               | 否       | 参考f6的config参数                           |

## Example

```
import { createElement } from 'rax';
import View from 'rax-view';
import F6Rax from '@antv/f6-rax';

export default function Home() {
  const data = {
    nodes: [
      {
        id: '0',
        label: '0',
      },
      {
        id: '1',
        label: '1',
      },
      {
        id: '2',
        label: '2',
      },
    ],
    edges: [
      {
        source: '0',
        target: '1',
      },
      {
        source: '0',
        target: '2',
      },
    ],
  };
  return (
    <View>
      <F6Rax data={data} width={300} height={500} config={{ fitView: false }}></F6Rax>
    </View>
  );
}

```
