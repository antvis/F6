!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.ForceAtlas2Layout = e())
    : (t.ForceAtlas2Layout = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function r(i) {
      if (e[i]) return e[i].exports;
      var n = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (r.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            r.d(
              i,
              n,
              function (e) {
                return t[e];
              }.bind(null, n),
            );
        return i;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 378))
    );
  })({
    10: function (t, e, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, i) {
                void 0 === i && (i = r),
                  Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  });
              }
            : function (t, e, r, i) {
                void 0 === i && (i = r), (t[i] = e[r]);
              }),
        n =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var r in t)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(e, r) ||
                i(e, t, r);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        n(r(11), e),
        n(r(12), e),
        n(r(13), e),
        n(r(14), e),
        n(r(15), e),
        n(r(16), e);
    },
    11: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.camelize = e.isString = void 0);
      e.isString = function (t) {
        return "string" == typeof t;
      };
      var i,
        n,
        o = /-(\w)/g;
      e.camelize =
        ((i = function (t) {
          return t.replace(o, function (t, e) {
            return e ? e.toUpperCase() : "";
          });
        }),
        (n = Object.create(null)),
        function (t) {
          return n[t] || (n[t] = i(t));
        });
    },
    12: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isArray = void 0),
        (e.isArray = Array.isArray);
    },
    13: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.toNumber = e.isNaN = e.isNumber = void 0);
      e.isNumber = function (t) {
        return "number" == typeof t;
      };
      e.isNaN = function (t) {
        return Number.isNaN(Number(t));
      };
      e.toNumber = function (t) {
        var r = parseFloat(t);
        return e.isNaN(r) ? t : r;
      };
    },
    14: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.traverseTreeUp =
          e.scaleMatrix =
          e.getAdjMatrix =
          e.floydWarshall =
          e.getDegree =
            void 0);
      e.getDegree = function (t, e, r) {
        for (var i = [], n = 0; n < t; n++) i[n] = 0;
        return r
          ? (r.forEach(function (t) {
              t.source && (i[e[t.source]] += 1),
                t.target && (i[e[t.target]] += 1);
            }),
            i)
          : i;
      };
      e.floydWarshall = function (t) {
        for (var e = [], r = t.length, i = 0; i < r; i += 1) {
          e[i] = [];
          for (var n = 0; n < r; n += 1)
            i === n
              ? (e[i][n] = 0)
              : 0 !== t[i][n] && t[i][n]
              ? (e[i][n] = t[i][n])
              : (e[i][n] = 1 / 0);
        }
        for (var o = 0; o < r; o += 1)
          for (i = 0; i < r; i += 1)
            for (n = 0; n < r; n += 1)
              e[i][n] > e[i][o] + e[o][n] && (e[i][n] = e[i][o] + e[o][n]);
        return e;
      };
      e.getAdjMatrix = function (t, e) {
        var r = t.nodes,
          i = t.edges,
          n = [],
          o = {};
        if (!r) throw new Error("invalid nodes data!");
        return (
          r &&
            r.forEach(function (t, e) {
              o[t.id] = e;
              n.push([]);
            }),
          i &&
            i.forEach(function (t) {
              var r = t.source,
                i = t.target,
                s = o[r],
                u = o[i];
              (n[s][u] = 1), e || (n[u][s] = 1);
            }),
          n
        );
      };
      e.scaleMatrix = function (t, e) {
        var r = [];
        return (
          t.forEach(function (t) {
            var i = [];
            t.forEach(function (t) {
              i.push(t * e);
            }),
              r.push(i);
          }),
          r
        );
      };
      e.traverseTreeUp = function (t, e) {
        "function" == typeof e &&
          (function t(e, r) {
            if (e && e.children)
              for (var i = e.children.length - 1; i >= 0; i--)
                if (!t(e.children[i], r)) return;
            return !!r(e);
          })(t, e);
      };
    },
    15: function (t, e, r) {
      "use strict";
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++)
                for (var n in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.clone = e.isObject = void 0);
      e.isObject = function (t) {
        return null !== t && "object" === i(t);
      };
      e.clone = function (t) {
        if (null === t) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof Array) {
          var r = [];
          return (
            t.forEach(function (t) {
              r.push(t);
            }),
            r.map(function (t) {
              return e.clone(t);
            })
          );
        }
        if ("object" === i(t) && t !== {}) {
          var o = n({}, t);
          return (
            Object.keys(o).forEach(function (t) {
              o[t] = e.clone(o[t]);
            }),
            o
          );
        }
        return t;
      };
    },
    16: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isFunction = void 0);
      e.isFunction = function (t) {
        return "function" == typeof t;
      };
    },
    162: function (t, e, r) {
      "use strict";
      var i,
        n =
          (this && this.__extends) ||
          ((i = function (t, e) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(t, e);
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            i(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ForceAtlas2Layout = void 0);
      var s = r(9),
        u = r(10),
        h = o(r(379)),
        a = o(r(380)),
        c = o(r(381)),
        d = (function (t) {
          function e(e) {
            var r = t.call(this) || this;
            return (
              (r.center = [0, 0]),
              (r.width = 300),
              (r.height = 300),
              (r.nodes = []),
              (r.edges = []),
              (r.kr = 5),
              (r.kg = 1),
              (r.mode = "normal"),
              (r.preventOverlap = !1),
              (r.dissuadeHubs = !1),
              (r.barnesHut = !1),
              (r.maxIteration = 0),
              (r.ks = 0.1),
              (r.ksmax = 10),
              (r.tao = 0.1),
              (r.onLayoutEnd = function () {}),
              (r.prune = !1),
              r.updateCfg(e),
              r
            );
          }
          return (
            n(e, t),
            (e.prototype.getDefaultCfg = function () {
              return {};
            }),
            (e.prototype.execute = function () {
              var t = this.nodes,
                e = this.maxIteration,
                r = this.onLayoutEnd,
                i = this.prune;
              this.width ||
                "undefined" == typeof window ||
                (this.width = window.innerWidth),
                this.height ||
                  "undefined" == typeof window ||
                  (this.height = window.innerHeight);
              for (var n = [], o = t.length, s = 0; s < o; s += 1) {
                var h = t[s],
                  a = 10,
                  c = 10;
                u.isNumber(h.size) && ((a = h.size), (c = h.size)),
                  u.isArray(h.size) &&
                    (isNaN(h.size[0]) || (a = h.size[0]),
                    isNaN(h.size[1]) || (c = h.size[1])),
                  this.getWidth &&
                    !isNaN(this.getWidth(h)) &&
                    (c = this.getWidth(h)),
                  this.getHeight &&
                    !isNaN(this.getHeight(h)) &&
                    (a = this.getHeight(h));
                var d = Math.max(a, c);
                n.push(d);
              }
              !this.barnesHut && o > 250 && (this.barnesHut = !0),
                !this.prune && o > 100 && (this.prune = !0),
                0 !== this.maxIteration || this.prune
                  ? 0 === this.maxIteration &&
                    i &&
                    ((e = 100),
                    o <= 200 && o > 100 ? (e = 500) : o > 200 && (e = 950),
                    (this.maxIteration = e))
                  : ((e = 250),
                    o <= 200 && o > 100 ? (e = 1e3) : o > 200 && (e = 1200),
                    (this.maxIteration = e)),
                this.kr ||
                  ((this.kr = 50),
                  o > 100 && o <= 500
                    ? (this.kr = 20)
                    : o > 500 && (this.kr = 1)),
                this.kg ||
                  ((this.kg = 20),
                  o > 100 && o <= 500
                    ? (this.kg = 10)
                    : o > 500 && (this.kg = 1)),
                (this.nodes = this.updateNodesByForces(n)),
                r();
            }),
            (e.prototype.updateNodesByForces = function (t) {
              for (
                var e = this.nodes,
                  r = this.edges,
                  i = this.maxIteration,
                  n = r.filter(function (t) {
                    return t.source !== t.target;
                  }),
                  o = e.length,
                  s = n.length,
                  u = [],
                  h = {},
                  a = {},
                  c = [],
                  d = 0;
                d < o;
                d += 1
              )
                (h[e[d].id] = d),
                  (u[d] = 0),
                  (void 0 === e[d].x || isNaN(e[d].x)) &&
                    (e[d].x = 1e3 * Math.random()),
                  (void 0 === e[d].y || isNaN(e[d].y)) &&
                    (e[d].y = 1e3 * Math.random()),
                  c.push({ x: e[d].x, y: e[d].y });
              for (d = 0; d < s; d += 1) {
                for (
                  var f = void 0, p = void 0, l = 0, y = 0, g = 0;
                  g < o;
                  g += 1
                )
                  e[g].id === n[d].source
                    ? ((f = e[g]), (l = g))
                    : e[g].id === n[d].target && ((p = e[g]), (y = g)),
                    (a[d] = { sourceIdx: l, targetIdx: y });
                f && (u[h[f.id]] += 1), p && (u[h[p.id]] += 1);
              }
              var v = i;
              if (((e = this.iterate(v, h, a, s, u, t)), this.prune)) {
                for (g = 0; g < s; g += 1)
                  u[a[g].sourceIdx] <= 1
                    ? ((e[a[g].sourceIdx].x = e[a[g].targetIdx].x),
                      (e[a[g].sourceIdx].y = e[a[g].targetIdx].y))
                    : u[a[g].targetIdx] <= 1 &&
                      ((e[a[g].targetIdx].x = e[a[g].sourceIdx].x),
                      (e[a[g].targetIdx].y = e[a[g].sourceIdx].y));
                (this.prune = !1),
                  (this.barnesHut = !1),
                  (v = 100),
                  (e = this.iterate(v, h, a, s, u, t));
              }
              return e;
            }),
            (e.prototype.iterate = function (t, e, r, i, n, o) {
              for (
                var s = this.nodes,
                  u = this.kr,
                  a = this.preventOverlap,
                  c = this.barnesHut,
                  d = s.length,
                  f = 0,
                  p = t,
                  l = [],
                  y = [],
                  g = [],
                  v = 0;
                v < d;
                v += 1
              )
                if (((l[2 * v] = 0), (l[2 * v + 1] = 0), c)) {
                  var x = {
                    id: v,
                    rx: s[v].x,
                    ry: s[v].y,
                    mass: 1,
                    g: u,
                    degree: n[v],
                  };
                  g[v] = new h.default(x);
                }
              for (; p > 0; ) {
                for (v = 0; v < d; v += 1)
                  (y[2 * v] = l[2 * v]),
                    (y[2 * v + 1] = l[2 * v + 1]),
                    (l[2 * v] = 0),
                    (l[2 * v + 1] = 0);
                (l = this.getAttrForces(p, 50, i, e, r, n, o, l)),
                  (l =
                    c && ((a && p > 50) || !a)
                      ? this.getOptRepGraForces(l, g, n)
                      : this.getRepGraForces(p, 50, l, 100, o, n));
                var m = this.updatePos(l, y, f, n);
                (s = m.nodes), (f = m.sg), p--, this.tick && this.tick();
              }
              return s;
            }),
            (e.prototype.getAttrForces = function (t, e, r, i, n, o, s, u) {
              for (
                var h = this.nodes,
                  a = this.preventOverlap,
                  c = this.dissuadeHubs,
                  d = this.mode,
                  f = this.prune,
                  p = 0;
                p < r;
                p += 1
              ) {
                var l = h[n[p].sourceIdx],
                  y = n[p].sourceIdx,
                  g = h[n[p].targetIdx],
                  v = n[p].targetIdx;
                if (!f || !(o[y] <= 1 || o[v] <= 1)) {
                  var x = [g.x - l.x, g.y - l.y],
                    m = Math.hypot(x[0], x[1]);
                  (m = m < 1e-4 ? 1e-4 : m),
                    (x[0] = x[0] / m),
                    (x[1] = x[1] / m),
                    a && t < e && (m = m - s[y] - s[v]);
                  var b = m,
                    _ = b;
                  "linlog" === d && (_ = b = Math.log(1 + m)),
                    c && ((b = m / o[y]), (_ = m / o[v])),
                    a && t < e && m <= 0
                      ? ((b = 0), (_ = 0))
                      : a && t < e && m > 0 && ((b = m), (_ = m)),
                    (u[2 * i[l.id]] += b * x[0]),
                    (u[2 * i[g.id]] -= _ * x[0]),
                    (u[2 * i[l.id] + 1] += b * x[1]),
                    (u[2 * i[g.id] + 1] -= _ * x[1]);
                }
              }
              return u;
            }),
            (e.prototype.getRepGraForces = function (t, e, r, i, n, o) {
              for (
                var s = this.nodes,
                  u = this.preventOverlap,
                  h = this.kr,
                  a = this.kg,
                  c = this.center,
                  d = this.prune,
                  f = s.length,
                  p = 0;
                p < f;
                p += 1
              ) {
                for (var l = p + 1; l < f; l += 1)
                  if (!d || !(o[p] <= 1 || o[l] <= 1)) {
                    var y = [s[l].x - s[p].x, s[l].y - s[p].y],
                      g = Math.hypot(y[0], y[1]);
                    (g = g < 1e-4 ? 1e-4 : g),
                      (y[0] = y[0] / g),
                      (y[1] = y[1] / g),
                      u && t < e && (g = g - n[p] - n[l]);
                    var v = (h * (o[p] + 1) * (o[l] + 1)) / g;
                    u && t < e && g < 0
                      ? (v = i * (o[p] + 1) * (o[l] + 1))
                      : u && t < e && 0 === g
                      ? (v = 0)
                      : u &&
                        t < e &&
                        g > 0 &&
                        (v = (h * (o[p] + 1) * (o[l] + 1)) / g),
                      (r[2 * p] -= v * y[0]),
                      (r[2 * l] += v * y[0]),
                      (r[2 * p + 1] -= v * y[1]),
                      (r[2 * l + 1] += v * y[1]);
                  }
                var x = [s[p].x - c[0], s[p].y - c[1]],
                  m = Math.hypot(x[0], x[1]);
                (x[0] = x[0] / m), (x[1] = x[1] / m);
                var b = a * (o[p] + 1);
                (r[2 * p] -= b * x[0]), (r[2 * p + 1] -= b * x[1]);
              }
              return r;
            }),
            (e.prototype.getOptRepGraForces = function (t, e, r) {
              for (
                var i = this.nodes,
                  n = this.kg,
                  o = this.center,
                  s = this.prune,
                  u = i.length,
                  h = 9e10,
                  d = -9e10,
                  f = 9e10,
                  p = -9e10,
                  l = 0;
                l < u;
                l += 1
              )
                (s && r[l] <= 1) ||
                  (e[l].setPos(i[l].x, i[l].y),
                  i[l].x >= d && (d = i[l].x),
                  i[l].x <= h && (h = i[l].x),
                  i[l].y >= p && (p = i[l].y),
                  i[l].y <= f && (f = i[l].y));
              var y = {
                  xmid: (d + h) / 2,
                  ymid: (p + f) / 2,
                  length: Math.max(d - h, p - f),
                  massCenter: o,
                  mass: u,
                },
                g = new a.default(y),
                v = new c.default(g);
              for (l = 0; l < u; l += 1)
                (s && r[l] <= 1) || (e[l].in(g) && v.insert(e[l]));
              for (l = 0; l < u; l += 1)
                if (!(s && r[l] <= 1)) {
                  e[l].resetForce(),
                    v.updateForce(e[l]),
                    (t[2 * l] -= e[l].fx),
                    (t[2 * l + 1] -= e[l].fy);
                  var x = [i[l].x - o[0], i[l].y - o[1]],
                    m = Math.hypot(x[0], x[1]);
                  (m = m < 1e-4 ? 1e-4 : m),
                    (x[0] = x[0] / m),
                    (x[1] = x[1] / m);
                  var b = n * (r[l] + 1);
                  (t[2 * l] -= b * x[0]), (t[2 * l + 1] -= b * x[1]);
                }
              return t;
            }),
            (e.prototype.updatePos = function (t, e, r, i) {
              for (
                var n = this.nodes,
                  o = this.ks,
                  s = this.tao,
                  u = this.prune,
                  h = this.ksmax,
                  a = n.length,
                  c = [],
                  d = [],
                  f = 0,
                  p = 0,
                  l = 0;
                l < a;
                l += 1
              )
                if (!(u && i[l] <= 1)) {
                  var y = [t[2 * l] - e[2 * l], t[2 * l + 1] - e[2 * l + 1]],
                    g = Math.hypot(y[0], y[1]),
                    v = [t[2 * l] + e[2 * l], t[2 * l + 1] + e[2 * l + 1]],
                    x = Math.hypot(v[0], v[1]);
                  (c[l] = g),
                    (d[l] = x / 2),
                    (f += (i[l] + 1) * c[l]),
                    (p += (i[l] + 1) * d[l]);
                }
              var m = r;
              (r = (s * p) / f), 0 !== m && (r = r > 1.5 * m ? 1.5 * m : r);
              for (l = 0; l < a; l += 1)
                if (!(u && i[l] <= 1)) {
                  var b = (o * r) / (1 + r * Math.sqrt(c[l])),
                    _ = Math.hypot(t[2 * l], t[2 * l + 1]),
                    N = h / (_ = _ < 1e-4 ? 1e-4 : _),
                    O = (b = b > N ? N : b) * t[2 * l],
                    j = b * t[2 * l + 1];
                  (n[l].x += O), (n[l].y += j);
                }
              return { nodes: n, sg: r };
            }),
            e
          );
        })(s.Base);
      e.ForceAtlas2Layout = d;
    },
    378: function (t, e, r) {
      "use strict";
      r.r(e);
      var i = r(162);
      e.default = i.ForceAtlas2Layout;
    },
    379: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
        function t(t) {
          (this.id = t.id || 0),
            (this.rx = t.rx),
            (this.ry = t.ry),
            (this.fx = 0),
            (this.fy = 0),
            (this.mass = t.mass),
            (this.degree = t.degree),
            (this.g = t.g || 0);
        }
        return (
          (t.prototype.distanceTo = function (t) {
            var e = this.rx - t.rx,
              r = this.ry - t.ry;
            return Math.hypot(e, r);
          }),
          (t.prototype.setPos = function (t, e) {
            (this.rx = t), (this.ry = e);
          }),
          (t.prototype.resetForce = function () {
            (this.fx = 0), (this.fy = 0);
          }),
          (t.prototype.addForce = function (t) {
            var e = t.rx - this.rx,
              r = t.ry - this.ry,
              i = Math.hypot(e, r);
            i = i < 1e-4 ? 1e-4 : i;
            var n = (this.g * (this.degree + 1) * (t.degree + 1)) / i;
            (this.fx += (n * e) / i), (this.fy += (n * r) / i);
          }),
          (t.prototype.in = function (t) {
            return t.contains(this.rx, this.ry);
          }),
          (t.prototype.add = function (e) {
            var r = this.mass + e.mass;
            return new t({
              rx: (this.rx * this.mass + e.rx * e.mass) / r,
              ry: (this.ry * this.mass + e.ry * e.mass) / r,
              mass: r,
              degree: this.degree + e.degree,
            });
          }),
          t
        );
      })();
      e.default = i;
    },
    380: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
        function t(t) {
          (this.xmid = t.xmid),
            (this.ymid = t.ymid),
            (this.length = t.length),
            (this.massCenter = t.massCenter || [0, 0]),
            (this.mass = t.mass || 1);
        }
        return (
          (t.prototype.getLength = function () {
            return this.length;
          }),
          (t.prototype.contains = function (t, e) {
            var r = this.length / 2;
            return (
              t <= this.xmid + r &&
              t >= this.xmid - r &&
              e <= this.ymid + r &&
              e >= this.ymid - r
            );
          }),
          (t.prototype.NW = function () {
            return new t({
              xmid: this.xmid - this.length / 4,
              ymid: this.ymid + this.length / 4,
              length: this.length / 2,
            });
          }),
          (t.prototype.NE = function () {
            return new t({
              xmid: this.xmid + this.length / 4,
              ymid: this.ymid + this.length / 4,
              length: this.length / 2,
            });
          }),
          (t.prototype.SW = function () {
            return new t({
              xmid: this.xmid - this.length / 4,
              ymid: this.ymid - this.length / 4,
              length: this.length / 2,
            });
          }),
          (t.prototype.SE = function () {
            return new t({
              xmid: this.xmid + this.length / 4,
              ymid: this.ymid - this.length / 4,
              length: this.length / 2,
            });
          }),
          t
        );
      })();
      e.default = i;
    },
    381: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
        function t(t) {
          (this.body = null),
            (this.quad = null),
            (this.NW = null),
            (this.NE = null),
            (this.SW = null),
            (this.SE = null),
            (this.theta = 0.5),
            null != t && (this.quad = t);
        }
        return (
          (t.prototype.insert = function (e) {
            null != this.body
              ? this._isExternal()
                ? (this.quad &&
                    ((this.NW = new t(this.quad.NW())),
                    (this.NE = new t(this.quad.NE())),
                    (this.SW = new t(this.quad.SW())),
                    (this.SE = new t(this.quad.SE()))),
                  this._putBody(this.body),
                  this._putBody(e),
                  (this.body = this.body.add(e)))
                : ((this.body = this.body.add(e)), this._putBody(e))
              : (this.body = e);
          }),
          (t.prototype._putBody = function (t) {
            this.quad &&
              (t.in(this.quad.NW()) && this.NW
                ? this.NW.insert(t)
                : t.in(this.quad.NE()) && this.NE
                ? this.NE.insert(t)
                : t.in(this.quad.SW()) && this.SW
                ? this.SW.insert(t)
                : t.in(this.quad.SE()) && this.SE && this.SE.insert(t));
          }),
          (t.prototype._isExternal = function () {
            return (
              null == this.NW &&
              null == this.NE &&
              null == this.SW &&
              null == this.SE
            );
          }),
          (t.prototype.updateForce = function (t) {
            null != this.body &&
              t !== this.body &&
              (this._isExternal() ||
              (this.quad ? this.quad.getLength() : 0) /
                this.body.distanceTo(t) <
                this.theta
                ? t.addForce(this.body)
                : (this.NW && this.NW.updateForce(t),
                  this.NE && this.NE.updateForce(t),
                  this.SW && this.SW.updateForce(t),
                  this.SE && this.SE.updateForce(t)));
          }),
          t
        );
      })();
      e.default = i;
    },
    9: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Base = void 0);
      var i = (function () {
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
      e.Base = i;
    },
  }).default;
});
//# sourceMappingURL=forceAtlas2Layout.js.map
