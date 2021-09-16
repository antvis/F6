<template>
  <canvas
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
  onReady: function (e) {
    var query = uni.createSelectorQuery().in(this);
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

        this.$props.onInit({
          ctx: this.ctx,
          rect: this.rect,
          canvas: canvas,
          renderer: 'mini-native',
        });
      });
  },
  methods: {
    onTouch(e) {
      const origin = e.mp;
      var i = 0;

      for (i = 0; i < origin.touches.length; i++) {
        modifyEvent(origin.touches[i], this.$props.pixelRatio);
      }

      for (i = 0; i < origin.changedTouches.length; i++) {
        modifyEvent(origin.changedTouches[i], this.$props.pixelRatio);
      }

      this.$props.onTouchEvent(origin);
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
