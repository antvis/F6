import { createElement, useEffect, useRef } from 'rax';
import View from 'rax-view';
import F6 from '@antv/f6';
import NativeCanvas from '@antv/f6-alipay/es/container/container';
import force from '@antv/f6/dist/extends/layout/forceLayout';
import { getInfoSync } from '@uni/system-info';
import './index.css';

const miniF6 = (props) => {
  const {
    data,
    config,
    handleClick = () => {},
    updateEventOffsetFlag = false,
    width,
    height,
  } = props;

  const f6Chart = useRef(null);
  const { pixelRatio } = getInfoSync();

  const renderChart = (config) => {
    if (window) {
      // 目前F6内部使用了getComputedStyle处理判断逻辑，rax注入了该函数，导致绘制错误，屏蔽掉
      window.getComputedStyle = undefined;
    }

    F6.registerLayout('force', force);

    const chart = new F6.Graph({
      fitView: true,
      pixelRatio: pixelRatio,
      layout: {
        type: 'force',
      },
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

  const handleInit = (_ctx, ret, _canvas, _renderer) => {
    if (!_ctx || !_renderer) return;
    renderChart({
      context: _ctx,
      container: _canvas,
      renderer: _renderer,
      width: width,
      height: height,
      ...config,
    });
  };

  useEffect(() => {
    if (data.nodes.length && f6Chart.current) {
      f6Chart.current.changeData(data);
    }
  }, [data]);

  return (
    <View id="f6-rax-mini-container">
      <NativeCanvas
        width={width}
        height={height}
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
