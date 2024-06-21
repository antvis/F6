!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.RandomLayout = e())
    : (t.RandomLayout = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function o(n) {
      if (e[n]) return e[n].exports;
      var r = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    return (
      (o.m = t),
      (o.c = e),
      (o.d = function (t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (o.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (t, e) {
        if ((1 & e && (t = o(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (o.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            o.d(
              n,
              r,
              function (e) {
                return t[e];
              }.bind(null, r),
            );
        return n;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, "a", e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = ""),
      o((o.s = 394))
    );
  })({
    394: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(52);
      e.default = n.RandomLayout;
    },
    52: function (t, e, o) {
      "use strict";
      var n,
        r =
          ((n = function (t, e) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              })(t, e);
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function o() {
              this.constructor = t;
            }
            n(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((o.prototype = e.prototype), new o()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RandomLayout = void 0);
      var i = (function (t) {
        function e(e) {
          var o = t.call(this) || this;
          return (
            (o.center = [0, 0]),
            (o.width = 300),
            (o.height = 300),
            (o.nodes = []),
            (o.edges = []),
            (o.onLayoutEnd = function () {}),
            o.updateCfg(e),
            o
          );
        }
        return (
          r(e, t),
          (e.prototype.getDefaultCfg = function () {
            return { center: [0, 0], width: 300, height: 300 };
          }),
          (e.prototype.execute = function () {
            var t = this,
              e = t.nodes,
              o = t.center;
            return (
              t.width ||
                "undefined" == typeof window ||
                (t.width = window.innerWidth),
              t.height ||
                "undefined" == typeof window ||
                (t.height = window.innerHeight),
              e &&
                e.forEach(function (e) {
                  (e.x = 0.9 * (Math.random() - 0.5) * t.width + o[0]),
                    (e.y = 0.9 * (Math.random() - 0.5) * t.height + o[1]);
                }),
              t.onLayoutEnd && t.onLayoutEnd(),
              { nodes: e, edges: this.edges }
            );
          }),
          (e.prototype.getType = function () {
            return "random";
          }),
          e
        );
      })(o(53).Base);
      e.RandomLayout = i;
    },
    53: function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Base = void 0);
      var n = (function () {
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
          (t.prototype.execute = function () {}),
          (t.prototype.executeWithWorker = function () {}),
          (t.prototype.getDefaultCfg = function () {
            return {};
          }),
          (t.prototype.updateCfg = function (t) {
            t && Object.assign(this, t);
          }),
          (t.prototype.getType = function () {
            return "base";
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
      e.Base = n;
    },
  }).default;
});
//# sourceMappingURL=randomLayout.js.map
