Component({
  data: {},
  properties: {
    style: {
      type: String,
      value: ''
    },
    width: {
      type: Number,
      value: 100
    },
    height: {
      type: Number,
      value: 100
    },
    onInit: {
      type: Function,
      value: function value() {}
    },
    onTouchEvent: {
      type: Function,
      value: function value() {}
    },
    onError: {
      type: Function,
      value: function value() {}
    },
    pixelRatio: {
      type: Number,
      value: 1
    }
  },
  ready: function ready() {
    var _this = this;

    var query = wx.createSelectorQuery().in(this);
    query.select('#g6-canvas').fields({
      node: true,
      size: true
    }).exec(function (ret) {
      console.log('ret', ret);
      var canvas = ret[0].node;
      canvas.width = _this.data.width * _this.data.pixelRatio;
      canvas.height = _this.data.height * _this.data.pixelRatio;
      _this.rect = {
        width: _this.data.width * _this.data.pixelRatio,
        height: _this.data.height * _this.data.pixelRatio,
        left: canvas._left,
        top: canvas._top
      };
      console.log('rect', _this.rect);
      _this.ctx = canvas.getContext('2d');

      _this.data.onInit(_this.ctx, _this.rect, canvas, 'mini-native');
    });
  },
  methods: {
    error: function error(e) {
      this.data.onError(e);
    },
    ontouch: function ontouch(e) {
      var i = 0;

      for (i = 0; i < e.touches.length; i++) {
        modifyEvent(e.touches[i], this.data.pixelRatio);
      }

      for (i = 0; i < e.changedTouches.length; i++) {
        modifyEvent(e.changedTouches[i], this.data.pixelRatio);
      }

      this.data.onTouchEvent(e);
    }
  }
});

function modifyEvent(touchEvent, pixelRatio) {
  touchEvent.clientX = touchEvent.x * pixelRatio;
  touchEvent.clientY = touchEvent.y * pixelRatio;
  touchEvent.pageX = touchEvent.x * pixelRatio;
  touchEvent.pageY = touchEvent.y * pixelRatio;
}