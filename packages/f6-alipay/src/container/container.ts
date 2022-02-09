Component({
  data: {
    supportNative: !!my._createCanvas,
    waterStyle: '',
    finalPixelRatio: 1,
  },
  props: {
    style: '',
    width: 100,
    height: 100,
    forceMini: false,
    pixelRatio: 1,
    onTouchEvent: () => {},
    onInit: () => {},
    onError: () => {},
    waterMarker: null,
    updateEventOffsetFlag: null,
  },
  didMount() {
    // pixel 向上取整，保持和g同样的规则
    const pixelRatio = this.props.pixelRatio;
    const finalPixelRatio = pixelRatio >= 1 ? Math.ceil(pixelRatio) : 1;
    this.setData({
      finalPixelRatio,
    });
    if (!this.data.supportNative || this.props.forceMini) {
      this.onCanvasReady();
    }
  },

  didUpdate(prev) {
    if (prev.updateEventOffsetFlag !== this.props.updateEventOffsetFlag) {
      this.refreshOffset();
    }
  },

  methods: {
    onCanvasReady() {
      const canvasId = `f6-canvas-${this.$id}`;

      my.createSelectorQuery()
        .select(`#${canvasId}`)
        .boundingClientRect()
        .exec((ret) => {
          if (ret && ret[0]) {
            this.rect = ret[0];
          } else {
            this.rect = {
              bottom: 0,
              height: 0,
              left: 0,
              right: 0,
              top: 0,
              width: 0,
            };
            this.props.onError && this.props.onError(ret);
          }
          if (this.data.supportNative && !this.props.forceMini) {
            console.log('native support');
            my._createCanvas({
              id: canvasId,
              success: (canvas) => {
                this.ctx = canvas.getContext('2d');
                this.props.onInit(this.ctx, ret[0], canvas, 'mini-native');
              },
            });
          } else {
            console.log('web support');
            this.ctx = my.createCanvasContext(canvasId);
            this.props.onInit(this.ctx, ret[0], null, 'mini');
          }
        });
      if (this.props.waterMarker && this.props.forceMini) {
        this.setData({
          waterStyle: `background: url("${this.props.waterMarker}") repeat; background-size: 156px 34px;`, //这里面的url需不需要双引号？
        });
      }
    },
    ontouch(e) {
      const { target } = e;

      const ev: any = {
        ...e,
        changedTouches: [],
        touches: [],
      };

      e.touches.forEach((touchEvent) => {
        ev.touches.push(modifyEvent(touchEvent, target, this.rect));
      });

      e.changedTouches.forEach((touchEvent) => {
        // 真实的x的位置为client的位置 + rect的位置 +
        ev.changedTouches.push(modifyEvent(touchEvent, target, this.rect));
      });
      this.props.onTouchEvent(ev);
    },
    refreshOffset() {
      const canvasId = `f6-canvas-${this.$id}`;
      my.createSelectorQuery()
        .select(`#${canvasId}`)
        .boundingClientRect()
        .exec((ret) => {
          if (ret && ret[0]) {
            this.rect = ret[0];
          } else {
            this.rect = {
              bottom: 0,
              height: 0,
              left: 0,
              right: 0,
              top: 0,
              width: 0,
            };
            this.props.onError && this.props.onError(ret);
          }
        });
    },
  },
});

function modifyEvent(touchEvent, target, rect) {
  var x = touchEvent.pageX - rect.left; // target.offsetLeft;
  var y = touchEvent.pageY - rect.top; // target.offsetTop;
  return {
    x,
    y,
    identifier: touchEvent.identifier,
    clientX: x,
    clientY: y,
    pageX: x,
    pageY: y,
  };
}
