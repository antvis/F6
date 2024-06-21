!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.f6 = e())
    : (t.f6 = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function i(r) {
      if (e[r]) return e[r].exports;
      var n = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (i.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            i.d(
              r,
              n,
              function (e) {
                return t[e];
              }.bind(null, n),
            );
        return r;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 397))
    );
  })({
    10: function (t, e, i) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, r) {
                void 0 === r && (r = i),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, r) {
                void 0 === r && (r = i), (t[r] = e[i]);
              }),
        n =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                r(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        n(i(11), e),
        n(i(12), e),
        n(i(13), e),
        n(i(14), e),
        n(i(15), e),
        n(i(16), e);
    },
    11: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.camelize = e.isString = void 0);
      e.isString = function (t) {
        return "string" == typeof t;
      };
      var r,
        n,
        o = /-(\w)/g;
      e.camelize =
        ((r = function (t) {
          return t.replace(o, function (t, e) {
            return e ? e.toUpperCase() : "";
          });
        }),
        (n = Object.create(null)),
        function (t) {
          return n[t] || (n[t] = r(t));
        });
    },
    12: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isArray = void 0),
        (e.isArray = Array.isArray);
    },
    13: function (t, e, i) {
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
        var i = parseFloat(t);
        return e.isNaN(i) ? t : i;
      };
    },
    14: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.traverseTreeUp =
          e.scaleMatrix =
          e.getAdjMatrix =
          e.floydWarshall =
          e.getDegree =
            void 0);
      e.getDegree = function (t, e, i) {
        for (var r = [], n = 0; n < t; n++) r[n] = 0;
        return i
          ? (i.forEach(function (t) {
              t.source && (r[e[t.source]] += 1),
                t.target && (r[e[t.target]] += 1);
            }),
            r)
          : r;
      };
      e.floydWarshall = function (t) {
        for (var e = [], i = t.length, r = 0; r < i; r += 1) {
          e[r] = [];
          for (var n = 0; n < i; n += 1)
            r === n
              ? (e[r][n] = 0)
              : 0 !== t[r][n] && t[r][n]
              ? (e[r][n] = t[r][n])
              : (e[r][n] = 1 / 0);
        }
        for (var o = 0; o < i; o += 1)
          for (r = 0; r < i; r += 1)
            for (n = 0; n < i; n += 1)
              e[r][n] > e[r][o] + e[o][n] && (e[r][n] = e[r][o] + e[o][n]);
        return e;
      };
      e.getAdjMatrix = function (t, e) {
        var i = t.nodes,
          r = t.edges,
          n = [],
          o = {};
        if (!i) throw new Error("invalid nodes data!");
        return (
          i &&
            i.forEach(function (t, e) {
              o[t.id] = e;
              n.push([]);
            }),
          r &&
            r.forEach(function (t) {
              var i = t.source,
                r = t.target,
                s = o[i],
                u = o[r];
              (n[s][u] = 1), e || (n[u][s] = 1);
            }),
          n
        );
      };
      e.scaleMatrix = function (t, e) {
        var i = [];
        return (
          t.forEach(function (t) {
            var r = [];
            t.forEach(function (t) {
              r.push(t * e);
            }),
              i.push(r);
          }),
          i
        );
      };
      e.traverseTreeUp = function (t, e) {
        "function" == typeof e &&
          (function t(e, i) {
            if (e && e.children)
              for (var r = e.children.length - 1; r >= 0; r--)
                if (!t(e.children[r], i)) return;
            return !!i(e);
          })(t, e);
      };
    },
    15: function (t, e, i) {
      "use strict";
      function r(t) {
        return (r =
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
              for (var e, i = 1, r = arguments.length; i < r; i++)
                for (var n in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.clone = e.isObject = void 0);
      e.isObject = function (t) {
        return null !== t && "object" === r(t);
      };
      e.clone = function (t) {
        if (null === t) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof Array) {
          var i = [];
          return (
            t.forEach(function (t) {
              i.push(t);
            }),
            i.map(function (t) {
              return e.clone(t);
            })
          );
        }
        if ("object" === r(t) && t !== {}) {
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
    16: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isFunction = void 0);
      e.isFunction = function (t) {
        return "function" == typeof t;
      };
    },
    175: function (t, e, i) {
      "use strict";
      var r,
        n =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              })(t, e);
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function i() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((i.prototype = e.prototype), new i()));
          }),
        o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ForceAtlas2Layout = void 0);
      var s = i(7),
        u = i(10),
        h = o(i(398)),
        a = o(i(399)),
        c = o(i(400)),
        d = (function (t) {
          function e(e) {
            var i = t.call(this) || this;
            return (
              (i.center = [0, 0]),
              (i.width = 300),
              (i.height = 300),
              (i.nodes = []),
              (i.edges = []),
              (i.kr = 5),
              (i.kg = 1),
              (i.mode = "normal"),
              (i.preventOverlap = !1),
              (i.dissuadeHubs = !1),
              (i.barnesHut = !1),
              (i.maxIteration = 0),
              (i.ks = 0.1),
              (i.ksmax = 10),
              (i.tao = 0.1),
              (i.onLayoutEnd = function () {}),
              (i.prune = !1),
              i.updateCfg(e),
              i
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
                i = this.onLayoutEnd,
                r = this.prune;
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
                    r &&
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
                i();
            }),
            (e.prototype.updateNodesByForces = function (t) {
              for (
                var e = this.nodes,
                  i = this.edges,
                  r = this.maxIteration,
                  n = i.filter(function (t) {
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
              var v = r;
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
            (e.prototype.iterate = function (t, e, i, r, n, o) {
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
                (l = this.getAttrForces(p, 50, r, e, i, n, o, l)),
                  (l =
                    c && ((a && p > 50) || !a)
                      ? this.getOptRepGraForces(l, g, n)
                      : this.getRepGraForces(p, 50, l, 100, o, n));
                var m = this.updatePos(l, y, f, n);
                (s = m.nodes), (f = m.sg), p--, this.tick && this.tick();
              }
              return s;
            }),
            (e.prototype.getAttrForces = function (t, e, i, r, n, o, s, u) {
              for (
                var h = this.nodes,
                  a = this.preventOverlap,
                  c = this.dissuadeHubs,
                  d = this.mode,
                  f = this.prune,
                  p = 0;
                p < i;
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
                    (u[2 * r[l.id]] += b * x[0]),
                    (u[2 * r[g.id]] -= _ * x[0]),
                    (u[2 * r[l.id] + 1] += b * x[1]),
                    (u[2 * r[g.id] + 1] -= _ * x[1]);
                }
              }
              return u;
            }),
            (e.prototype.getRepGraForces = function (t, e, i, r, n, o) {
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
                      ? (v = r * (o[p] + 1) * (o[l] + 1))
                      : u && t < e && 0 === g
                      ? (v = 0)
                      : u &&
                        t < e &&
                        g > 0 &&
                        (v = (h * (o[p] + 1) * (o[l] + 1)) / g),
                      (i[2 * p] -= v * y[0]),
                      (i[2 * l] += v * y[0]),
                      (i[2 * p + 1] -= v * y[1]),
                      (i[2 * l + 1] += v * y[1]);
                  }
                var x = [s[p].x - c[0], s[p].y - c[1]],
                  m = Math.hypot(x[0], x[1]);
                (x[0] = x[0] / m), (x[1] = x[1] / m);
                var b = a * (o[p] + 1);
                (i[2 * p] -= b * x[0]), (i[2 * p + 1] -= b * x[1]);
              }
              return i;
            }),
            (e.prototype.getOptRepGraForces = function (t, e, i) {
              for (
                var r = this.nodes,
                  n = this.kg,
                  o = this.center,
                  s = this.prune,
                  u = r.length,
                  h = 9e10,
                  d = -9e10,
                  f = 9e10,
                  p = -9e10,
                  l = 0;
                l < u;
                l += 1
              )
                (s && i[l] <= 1) ||
                  (e[l].setPos(r[l].x, r[l].y),
                  r[l].x >= d && (d = r[l].x),
                  r[l].x <= h && (h = r[l].x),
                  r[l].y >= p && (p = r[l].y),
                  r[l].y <= f && (f = r[l].y));
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
                (s && i[l] <= 1) || (e[l].in(g) && v.insert(e[l]));
              for (l = 0; l < u; l += 1)
                if (!(s && i[l] <= 1)) {
                  e[l].resetForce(),
                    v.updateForce(e[l]),
                    (t[2 * l] -= e[l].fx),
                    (t[2 * l + 1] -= e[l].fy);
                  var x = [r[l].x - o[0], r[l].y - o[1]],
                    m = Math.hypot(x[0], x[1]);
                  (m = m < 1e-4 ? 1e-4 : m),
                    (x[0] = x[0] / m),
                    (x[1] = x[1] / m);
                  var b = n * (i[l] + 1);
                  (t[2 * l] -= b * x[0]), (t[2 * l + 1] -= b * x[1]);
                }
              return t;
            }),
            (e.prototype.updatePos = function (t, e, i, r) {
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
                if (!(u && r[l] <= 1)) {
                  var y = [t[2 * l] - e[2 * l], t[2 * l + 1] - e[2 * l + 1]],
                    g = Math.hypot(y[0], y[1]),
                    v = [t[2 * l] + e[2 * l], t[2 * l + 1] + e[2 * l + 1]],
                    x = Math.hypot(v[0], v[1]);
                  (c[l] = g),
                    (d[l] = x / 2),
                    (f += (r[l] + 1) * c[l]),
                    (p += (r[l] + 1) * d[l]);
                }
              var m = i;
              (i = (s * p) / f), 0 !== m && (i = i > 1.5 * m ? 1.5 * m : i);
              for (l = 0; l < a; l += 1)
                if (!(u && r[l] <= 1)) {
                  var b = (o * i) / (1 + i * Math.sqrt(c[l])),
                    _ = Math.hypot(t[2 * l], t[2 * l + 1]),
                    N = h / (_ = _ < 1e-4 ? 1e-4 : _),
                    O = (b = b > N ? N : b) * t[2 * l],
                    j = b * t[2 * l + 1];
                  (n[l].x += O), (n[l].y += j);
                }
              return { nodes: n, sg: i };
            }),
            e
          );
        })(s.Base);
      e.ForceAtlas2Layout = d;
    },
    397: function (t, e, i) {
      "use strict";
      i.r(e);
      var r = i(175);
      e.default = r.ForceAtlas2Layout;
    },
    398: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
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
              i = this.ry - t.ry;
            return Math.hypot(e, i);
          }),
          (t.prototype.setPos = function (t, e) {
            (this.rx = t), (this.ry = e);
          }),
          (t.prototype.resetForce = function () {
            (this.fx = 0), (this.fy = 0);
          }),
          (t.prototype.addForce = function (t) {
            var e = t.rx - this.rx,
              i = t.ry - this.ry,
              r = Math.hypot(e, i);
            r = r < 1e-4 ? 1e-4 : r;
            var n = (this.g * (this.degree + 1) * (t.degree + 1)) / r;
            (this.fx += (n * e) / r), (this.fy += (n * i) / r);
          }),
          (t.prototype.in = function (t) {
            return t.contains(this.rx, this.ry);
          }),
          (t.prototype.add = function (e) {
            var i = this.mass + e.mass;
            return new t({
              rx: (this.rx * this.mass + e.rx * e.mass) / i,
              ry: (this.ry * this.mass + e.ry * e.mass) / i,
              mass: i,
              degree: this.degree + e.degree,
            });
          }),
          t
        );
      })();
      e.default = r;
    },
    399: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
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
            var i = this.length / 2;
            return (
              t <= this.xmid + i &&
              t >= this.xmid - i &&
              e <= this.ymid + i &&
              e >= this.ymid - i
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
      e.default = r;
    },
    400: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
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
      e.default = r;
    },
    7: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Base = void 0);
      var r = (function () {
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
      e.Base = r;
    },
  }).default;
});
//# sourceMappingURL=forceAtlas2Layout.js.map
