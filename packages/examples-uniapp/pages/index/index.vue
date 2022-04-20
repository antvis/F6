<template>
  <view class="content">
    <f6-canvas
      :width="width"
      :height="height"
      @onInit="onCanvasInit"
      @onTouchEvent="onTouchEvent"
    ></f6-canvas>
  </view>
</template>

<script>
import F6Canvas from '../../components/canvas/canvas.vue';
import F6 from 'f6';
import TreeGraph from 'f6/extends/graph/treeGraph';

const data = {
  id: 'Modeling Methods',
  children: [
    {
      id: 'Classification',
      children: [
        {
          id: 'Logistic regression',
        },
        {
          id: 'Linear discriminant analysis',
        },
        {
          id: 'Rules',
        },
        {
          id: 'Decision trees',
        },
        {
          id: 'Naive Bayes',
        },
        {
          id: 'K nearest neighbor',
        },
        {
          id: 'Probabilistic neural network',
        },
        {
          id: 'Support vector machine',
        },
      ],
    },
    {
      id: 'Consensus',
      children: [
        {
          id: 'Models diversity',
          children: [
            {
              id: 'Different initializations',
            },
            {
              id: 'Different parameter choices',
            },
            {
              id: 'Different architectures',
            },
            {
              id: 'Different modeling methods',
            },
            {
              id: 'Different training sets',
            },
            {
              id: 'Different feature sets',
            },
          ],
        },
        {
          id: 'Methods',
          children: [
            {
              id: 'Classifier selection',
            },
            {
              id: 'Classifier fusion',
            },
          ],
        },
        {
          id: 'Common',
          children: [
            {
              id: 'Bagging',
            },
            {
              id: 'Boosting',
            },
            {
              id: 'AdaBoost',
            },
          ],
        },
      ],
    },
    {
      id: 'Regression',
      children: [
        {
          id: 'Multiple linear regression',
        },
        {
          id: 'Partial least squares',
        },
        {
          id: 'Multi-layer feedforward neural network',
        },
        {
          id: 'General regression neural network',
        },
        {
          id: 'Support vector regression',
        },
      ],
    },
  ],
};

export default {
  components: {
    'f6-canvas': F6Canvas,
  },
  data() {
    return {
      width: 500,
      height: 700,
      pixelRatio: 2,
    };
  },
  onLoad() {},
  methods: {
    onTouchEvent(e) {
      this.graph && this.graph.emitEvent(e);
    },
    onCanvasInit({ ctx, rect, container, renderer }) {
      console.log('canvas init ready', ctx, rect, container, renderer);
      const { width, height, pixelRatio } = this;
      F6.registerGraph('TreeGraph', TreeGraph);
      this.graph = new F6.TreeGraph({
        container,
        context: this.ctx,
        renderer: this.renderer,
        width,
        height,
        pixelRatio,
        fitView: true,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                console.log(111);
                const model = item.getModel();
                model.collapsed = collapsed;
                return true;
              },
            },
          ],
        },
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
        },
        layout: {
          type: 'compactBox',
          direction: 'LR',
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
          },
          getVGap: function getVGap() {
            return 10;
          },
          getHGap: function getHGap() {
            return 100;
          },
        },
      });

      this.graph.node(function (node) {
        return {
          label: node.id,
          labelCfg: {
            offset: 10,
            position: node.children && node.children.length > 0 ? 'left' : 'right',
          },
        };
      });
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
  width: 200rpx;
  height: 200rpx;
  margin-top: 200rpx;
  margin-right: auto;
  margin-bottom: 50rpx;
  margin-left: auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  color: #8f8f94;
  font-size: 36rpx;
}
</style>
