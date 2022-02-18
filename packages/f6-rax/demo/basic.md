---
title: Baisc
order: 1
---

basic usage

```jsx
import { createElement } from 'rax';
import MyComponent from 'rax-example';

function App(){
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
    }],
    edges: [   {
      source: '0',
      target: '1',
    },
    {
      source: '0',
      target: '2',
    },]
  }
  return <MyComponent data={data}/>;
}

export default App;
```