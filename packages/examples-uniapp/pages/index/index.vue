<template>
  <view class="content">
    <f6-canvas
      :width="width"
      :height="height"
      @onInit="onCanvasInit"
      @onTouchEvent="onTouchEvent"
    ></f6-canvas>
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
import F6Canvas from '../../components/canvas/canvas.vue';
import F6 from 'f6';

export default {
  components: {
    'f6-canvas': F6Canvas,
  },
  data() {
    return {
      width: 300,
      height: 400,
      pixelRatio: 1,
    };
  },
  onLoad() {},
  methods: {
    onTouchEvent(e) {
      this.graph && this.graph.emitEvent(e);
    },
    onCanvasInit({ ctx, rect, container, renderer }) {
      console.log('canvas init ready', ctx, rect, container, renderer);
      this.graph = new F6.Graph({
        container: container,
        context: ctx,
        renderer,
        width: 300,
        height: 300,
        modes: {
          default: ['drag-canvas', 'zoom-canvas'],
        },
      });
      const data = {
        // 点集
        nodes: [
          {
            id: 'node1', // String，该节点存在则必须，节点的唯一标识
            x: 100, // Number，可选，节点位置的 x 值
            y: 200, // Number，可选，节点位置的 y 值
          },
          {
            id: 'node2', // String，该节点存在则必须，节点的唯一标识
            x: 300, // Number，可选，节点位置的 x 值
            y: 200, // Number，可选，节点位置的 y 值
          },
        ],
        // 边集
        edges: [
          {
            source: 'node1', // String，必须，起始点 id
            target: 'node2', // String，必须，目标点 id
          },
        ],
      };
      this.graph.data(data);
      this.graph.render();
      this.graph.fitView();
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
