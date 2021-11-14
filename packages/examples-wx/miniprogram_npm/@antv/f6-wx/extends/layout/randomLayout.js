!(function (t, e) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define([], e)
    : typeof exports === 'object'
    ? (exports.f6 = e())
    : (t.f6 = e());
})(this, () => {
  return (function (t) {
    const e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      const r = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (n.r = function (t) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && typeof t === 'object' && t && t.__esModule) return t;
        const o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
          2 & e && typeof t !== 'string')
        )
          for (const r in t)
            n.d(
              o,
              r,
              ((e) => {
                return t[e];
              }).bind(null, r),
            );
        return o;
      }),
      (n.n = function (t) {
        const e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 492))
    );
  })({
    492(t, e, n) {
      'use strict';
      n.r(e);
      const o = n(66);
      e.default = o.RandomLayout;
    },
    66(t, e, n) {
      'use strict';
      let o;
      const r =
        (this && this.__extends) ||
        ((o = function (t, e) {
          return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if (typeof e !== 'function' && e !== null)
            throw new TypeError(`Class extends value ${String(e)} is not a constructor or null`);
          function n() {
            this.constructor = t;
          }
          o(t, e),
            (t.prototype = e === null ? Object.create(e) : ((n.prototype = e.prototype), new n()));
        });
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.RandomLayout = void 0);
      const i = (function (t) {
        function e(e) {
          const n = t.call(this) || this;
          return (
            (n.center = [0, 0]),
            (n.width = 300),
            (n.height = 300),
            (n.nodes = []),
            (n.edges = []),
            (n.onLayoutEnd = function () {}),
            n.updateCfg(e),
            n
          );
        }
        return (
          r(e, t),
          (e.prototype.getDefaultCfg = function () {
            return { center: [0, 0], width: 300, height: 300 };
          }),
          (e.prototype.execute = function () {
            const t = this;
            const e = t.nodes;
            const n = t.center;
            return (
              t.width || typeof window === 'undefined' || (t.width = window.innerWidth),
              t.height || typeof window === 'undefined' || (t.height = window.innerHeight),
              e &&
                e.forEach((e) => {
                  (e.x = 0.9 * (Math.random() - 0.5) * t.width + n[0]),
                    (e.y = 0.9 * (Math.random() - 0.5) * t.height + n[1]);
                }),
              t.onLayoutEnd && t.onLayoutEnd(),
              { nodes: e, edges: this.edges }
            );
          }),
          (e.prototype.getType = function () {
            return 'random';
          }),
          e
        );
      })(n(7).Base);
      e.RandomLayout = i;
    },
    7(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Base = void 0);
      const o = (function () {
        function t() {
          (this.nodes = []),
            (this.edges = []),
            (this.combos = []),
            (this.positions = []),
            (this.destroyed = !1),
            (this.onLayoutEnd = function () {});
        }
        return (
          (t.prototype.layout = function (t) {
            return this.init(t), this.execute(!0);
          }),
          (t.prototype.init = function (t) {
            (this.nodes = t.nodes || []),
              (this.edges = t.edges || []),
              (this.combos = t.combos || []);
          }),
          (t.prototype.execute = function (t) {}),
          (t.prototype.executeWithWorker = function () {}),
          (t.prototype.getDefaultCfg = function () {
            return {};
          }),
          (t.prototype.updateCfg = function (t) {
            t && Object.assign(this, t);
          }),
          (t.prototype.getType = function () {
            return 'base';
          }),
          (t.prototype.destroy = function () {
            (this.nodes = null),
              (this.edges = null),
              (this.combos = null),
              (this.positions = null),
              (this.destroyed = !0);
          }),
          t
        );
      })();
      e.Base = o;
    },
  }).default;
});
// # sourceMappingURL=randomLayout.js.map
