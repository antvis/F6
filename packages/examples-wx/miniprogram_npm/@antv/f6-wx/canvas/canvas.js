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
    pixelRatio(pixelRatio) {
      this.setData({
        finalPixelRatio: pixelRatio >= 1 ? Math.ceil(pixelRatio) : 1,
      });
    },
  },
  ready: function ready() {
    const _this = this;

    const query = wx.createSelectorQuery().in(this);
    query
      .select('#f6-canvas')
      .fields({
        node: true,
        size: true,
      })
      .exec((ret) => {
        console.log('ret', ret);
        const canvas = ret[0].node;
        const { finalPixelRatio } = _this.data;
        canvas.width = _this.data.width * finalPixelRatio;
        canvas.height = _this.data.height * finalPixelRatio;
        _this.rect = {
          width: _this.data.width * finalPixelRatio,
          height: _this.data.height * finalPixelRatio,
          left: canvas._left,
          top: canvas._top,
        };
        console.log('rect', _this.rect);
        _this.ctx = canvas.getContext('2d');

        _this.triggerEvent('onInit', {
          ctx: _this.ctx,
          rect: _this.rect,
          canvas,
          renderer: 'mini-native',
        });
        // _this.data.onInit(_this.ctx, _this.rect, canvas, 'mini-native');
      });
  },
  methods: {
    error: function error(e) {
      this.data.onError(e);
    },
    ontouch: function ontouch(e) {
      let i = 0;

      for (i = 0; i < e.touches.length; i++) {
        modifyEvent(e.touches[i]);
      }

      for (i = 0; i < e.changedTouches.length; i++) {
        modifyEvent(e.changedTouches[i]);
      }

      this.triggerEvent('onTouchEvent', e);

      // this.data.onTouchEvent(e);
    },
  },
});

function modifyEvent(touchEvent) {
  touchEvent.clientX = touchEvent.x;
  touchEvent.clientY = touchEvent.y;
  touchEvent.pageX = touchEvent.x;
  touchEvent.pageY = touchEvent.y;
}
