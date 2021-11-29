<template>
  <canvas
    ref="f6-canvess"
    name="f6-canvas"
    type="2d"
    canvas-id="f6-canvas"
    id="f6-canvas"
    :width="width * pixelRatio"
    :height="height * pixelRatio"
    :style="styleCanvas"
    @touchstart="onTouch"
    @touchmove="onTouch"
    @touchend="onTouch"
  ></canvas>
</template>

<script>
export default {
  name: 'f6-canvas',
  computed: {
    styleCanvas() {
      return `width: ${this.$props.width}px; height: ${this.$props.height}px; ${this.$props.styles}`;
    },
  },
  props: {
    styles: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
    onInit: {
      type: Function,
      default: function () {
        return () => {};
      },
    },
    onTouchEvent: {
      type: Function,
      default: function () {
        return () => {};
      },
    },
    onError: {
      type: Function,
      default: function () {
        return () => {};
      },
    },
    pixelRatio: {
      type: Number,
      default: 1,
    },
  },
  mounted: function (e) {
    // #ifdef H5
    const container = this.$el;
    const rect = container.getBoundingClientRect();
    container.width = this.$props.width * this.$props.pixelRatio;
    container.height = this.$props.height * this.$props.pixelRatio;
    this.rect = {
      width: this.$props.width * this.$props.pixelRatio,
      height: this.$props.height * this.$props.pixelRatio,
      left: rect.left,
      top: rect.top,
    };
    this.ctx = uni.createCanvasContext('#f6-canvas');

    this.$emit('onInit', {
      ctx: this.ctx,
      rect: this.rect,
      container: container,
      renderer: 'h5',
    });
    // #endif

    // #ifdef MP-ALIPAY
    my.createSelectorQuery()
      .select('#f6-canvas')
      .boundingClientRect()
      .exec((ret) => {
        my._createCanvas({
          id: 'f6-canvas',
          success: (canvas) => {
            this.$emit('onInit', {
              ctx: canvas.getContext('2d'),
              rect: {
                width: ret[0].width * this.$props.pixelRatio,
                height: ret[0].height * this.$props.pixelRatio,
                left: ret[0].left,
                top: ret[0].top,
              },
              container: null,
              renderer: 'mini-native',
            });
          },
        });
      });
    // #endif

    // #ifdef MP-WEIXIN
    const query = uni.createSelectorQuery().in(this);
    query
      .select('#f6-canvas')
      .fields({
        node: true,
        size: true,
      })
      .exec((ret) => {
        console.log('ret', ret);
        var canvas = ret[0].node;
        canvas.width = this.$props.width * this.$props.pixelRatio;
        canvas.height = this.$props.height * this.$props.pixelRatio;
        this.rect = {
          width: this.$props.width * this.$props.pixelRatio,
          height: this.$props.height * this.$props.pixelRatio,
          left: canvas._left,
          top: canvas._top,
        };
        this.ctx = canvas.getContext('2d');
        this.$emit('onInit', {
          ctx: this.ctx,
          rect: this.rect,
          container: canvas,
          renderer: 'mini-native',
        });
      });

    // #endif
  },
  methods: {
    onTouch(e) {
      const origin = e.mp;
      let i = 0;
      for (i = 0; i < origin.touches.length; i++) {
        modifyEvent(origin.touches[i], this.$props.pixelRatio);
      }

      for (i = 0; i < origin.changedTouches.length; i++) {
        modifyEvent(origin.changedTouches[i], this.$props.pixelRatio);
      }
      this.$emit('onTouchEvent', origin);
    },
  },
};

function modifyEvent(touchEvent, pixelRatio) {
  touchEvent.clientX = touchEvent.x * pixelRatio;
  touchEvent.clientY = touchEvent.y * pixelRatio;
  touchEvent.pageX = touchEvent.x * pixelRatio;
  touchEvent.pageY = touchEvent.y * pixelRatio;
}
</script>

<style></style>
