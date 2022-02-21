import { createElement, useEffect, useRef, useState } from 'rax';
import View from 'rax-view';
import F6 from '@antv/f6';
import NativeCanvas from '@antv/f6-alipay/es/container/container';
import force from '@antv/f6/dist/extends/layout/forceLayout';
import { getInfoSync } from '@uni/system-info';
import { getBoundingClientRect } from '@uni/element';
import './index.css';

const miniF6 = (props) => {
  const { data, config, handleClick = () => {}, updateEventOffsetFlag = false } = props;

  const f6Chart = useRef(null);
  const { pixelRatio } = getInfoSync();
  // 屏幕大小
  const [bound, setBound] = useState([340, 410]);

  const renderChart = (config) => {
    console.log(111, data, props);
    if (window) {
      // 目前F6内部使用了getComputedStyle处理判断逻辑，rax注入了该函数，导致绘制错误，屏蔽掉
      window.getComputedStyle = undefined;
    }

    F6.registerLayout('force', force);

    const chart = new F6.Graph({
      fitView: true,
      pixelRatio: pixelRatio,
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      },
      ...config,
    });
    chart.data(data);
    chart.get('canvas').set('localRefresh', false);
    chart.render();
    chart.on('node:tap', handleClick);
    f6Chart.current = chart;
  };

  const getBound = () => {
    getBoundingClientRect('#f6-rax-mini-container').then((res) => {
      const { width = 340, height = 410 } = res && res[0] ? res[0] : props;
      setBound([width, height]);
    });
  };

  useEffect(() => {
    window.addEventListener('setDataFinished', getBound);
    return () => {
      window.removeEventListener('setDataFinished', getBound); // 注意添加卸载监听逻辑
      if (config && config.layout && f6Chart.current) {
        f6Chart.current.destroy();
      }
    };
  }, []);

  const handleInit = (_ctx, ret, _canvas, _renderer) => {
    if (!_ctx || !_renderer) return;
    renderChart({
      ctx: _ctx,
      canvas: _canvas,
      renderer: _renderer,
    });
  };

  useEffect(() => {
    console.log(data, 'test');
    if (data.nodes.length && f6Chart.current) {
      f6Chart.current.changeData(data);
    }
  }, [data]);

  return (
    <View id="f6-rax-mini-container">
      <NativeCanvas
        width={bound[0]}
        height={bound[1]}
        forceMini={false}
        pixelRatio={pixelRatio}
        onTouchEvent={(e) => {
          f6Chart.current && f6Chart.current.emitEvent(e);
        }}
        onInit={handleInit}
        updateEventOffsetFlag={updateEventOffsetFlag}
      />
    </View>
  );
};

export default miniF6;
