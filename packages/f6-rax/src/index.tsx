import { createElement, useEffect, useRef } from "rax";
import View from "rax-view";
import F6 from "@antv/f6";
import force from "@antv/f6/dist/extends/layout/forceLayout";
import { getInfoSync } from "@uni/system-info";
import { isWeb } from "@uni/env";
import "./index.css";

const F6Chart = (props) => {
  const { data, config, handleClick = () => {}, width, height } = props;

  const f6Chart = useRef(null);
  const { pixelRatio } = getInfoSync();

  const renderChart = (config) => {
    if (window) {
      // 目前F6内部使用了getComputedStyle处理判断逻辑，rax注入了该函数，导致绘制错误，屏蔽掉
      window.getComputedStyle = undefined;
    }

    F6.registerLayout("force", force);
    const chart = new F6.Graph({
      fitView: true,
      pixelRatio: pixelRatio,
      layout: {
        type: "force",
      },
      modes: {
        default: ["drag-canvas", "zoom-canvas", "drag-node"],
      },
      ...config,
    });
    chart.data(data);
    chart.get("canvas").set("localRefresh", false);
    chart.render();
    chart.on("node:tap", handleClick);
    f6Chart.current = chart;
  };

  useEffect(() => {
    let query = { offsetWidth: 0, offsetHeight: 0 };
    // bug： 不加判断会影响小程序代码
    if (isWeb) {
      query = document.getElementById("f6-rax-container");
    }
    renderChart({
      container: "f6-rax-container",
      width: width || query.offsetWidth,
      height: height || query.offsetHeight,
      ...config,
    });
  }, []);

  useEffect(() => {
    if (data.nodes.length && f6Chart.current) {
      f6Chart.current.changeData(data);
    }
  }, [data]);

  return <View id="f6-rax-container"></View>;
};

export default F6Chart;
