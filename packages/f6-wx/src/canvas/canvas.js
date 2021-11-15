Component({
  data: {
    finalPixelRatio: 1,
  },
  properties: {
    style: {
      type: String,
      value: '',
    },
    width: {
      type: Number,
      value: 100,
    },
    height: {
      type: Number,
      value: 100,
    },
    onInit: {
      type: Function,
      value: function value() {},
    },
    onTouchEvent: {
      type: Function,
      value: function value() {},
    },
    onError: {
      type: Function,
      value: function value() {},
    },
    pixelRatio: {
      type: Number,
      value: 1,
    },
  },
  observers: {
    pixelRatio: function (pixelRatio) {
      this.setData({
        finalPixelRatio: pixelRatio >= 1 ? Math.ceil(pixelRatio) : 1,
      });
    },
  },
  ready: function ready() {
    const query = wx.createSelectorQuery().in(this);
    query
      .select('#f6-canvas')
      .fields({
        node: true,
        size: true,
      })
      .exec((ret) => {
        console.log('ret', ret);
        var canvas = ret[0].node;
        const finalPixelRatio = this.data.finalPixelRatio;
        canvas.width = this.data.width * finalPixelRatio;
        canvas.height = this.data.height * finalPixelRatio;
        this.rect = {
          width: this.data.width * finalPixelRatio,
          height: this.data.height * finalPixelRatio,
          left: canvas._left,
          top: canvas._top,
        };
        console.log('rect', this.rect);
        this.ctx = canvas.getContext('2d');

        this.triggerEvent('onInit', {
          ctx: this.ctx,
          rect: this.rect,
          canvas: canvas,
          renderer: 'mini-native',
        });
      });
  },
  methods: {
    error: function error(e) {
      this.data.onError(e);
    },
    ontouch: function ontouch(e) {
      var i = 0;

      for (i = 0; i < e.touches.length; i++) {
        modifyEvent(e.touches[i]);
      }

      for (i = 0; i < e.changedTouches.length; i++) {
        modifyEvent(e.changedTouches[i]);
      }

      this.triggerEvent('onTouchEvent', e);
    },
  },
});

function modifyEvent(touchEvent) {
  touchEvent.clientX = touchEvent.x;
  touchEvent.clientY = touchEvent.y;
  touchEvent.pageX = touchEvent.x;
  touchEvent.pageY = touchEvent.y;
}
