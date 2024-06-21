!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.f6 = t())
    : (e.f6 = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 217))
    );
  })({
    10: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        o(n(11), t),
        o(n(12), t),
        o(n(13), t),
        o(n(14), t),
        o(n(15), t),
        o(n(16), t);
    },
    11: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.camelize = t.isString = void 0);
      t.isString = function (e) {
        return "string" == typeof e;
      };
      var r,
        o,
        i = /-(\w)/g;
      t.camelize =
        ((r = function (e) {
          return e.replace(i, function (e, t) {
            return t ? t.toUpperCase() : "";
          });
        }),
        (o = Object.create(null)),
        function (e) {
          return o[e] || (o[e] = r(e));
        });
    },
    12: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isArray = void 0),
        (t.isArray = Array.isArray);
    },
    13: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toNumber = t.isNaN = t.isNumber = void 0);
      t.isNumber = function (e) {
        return "number" == typeof e;
      };
      t.isNaN = function (e) {
        return Number.isNaN(Number(e));
      };
      t.toNumber = function (e) {
        var n = parseFloat(e);
        return t.isNaN(n) ? e : n;
      };
    },
    14: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.traverseTreeUp =
          t.scaleMatrix =
          t.getAdjMatrix =
          t.floydWarshall =
          t.getDegree =
            void 0);
      t.getDegree = function (e, t, n) {
        for (var r = [], o = 0; o < e; o++) r[o] = 0;
        return n
          ? (n.forEach(function (e) {
              e.source && (r[t[e.source]] += 1),
                e.target && (r[t[e.target]] += 1);
            }),
            r)
          : r;
      };
      t.floydWarshall = function (e) {
        for (var t = [], n = e.length, r = 0; r < n; r += 1) {
          t[r] = [];
          for (var o = 0; o < n; o += 1)
            r === o
              ? (t[r][o] = 0)
              : 0 !== e[r][o] && e[r][o]
              ? (t[r][o] = e[r][o])
              : (t[r][o] = 1 / 0);
        }
        for (var i = 0; i < n; i += 1)
          for (r = 0; r < n; r += 1)
            for (o = 0; o < n; o += 1)
              t[r][o] > t[r][i] + t[i][o] && (t[r][o] = t[r][i] + t[i][o]);
        return t;
      };
      t.getAdjMatrix = function (e, t) {
        var n = e.nodes,
          r = e.edges,
          o = [],
          i = {};
        if (!n) throw new Error("invalid nodes data!");
        return (
          n &&
            n.forEach(function (e, t) {
              i[e.id] = t;
              o.push([]);
            }),
          r &&
            r.forEach(function (e) {
              var n = e.source,
                r = e.target,
                u = i[n],
                c = i[r];
              (o[u][c] = 1), t || (o[c][u] = 1);
            }),
          o
        );
      };
      t.scaleMatrix = function (e, t) {
        var n = [];
        return (
          e.forEach(function (e) {
            var r = [];
            e.forEach(function (e) {
              r.push(e * t);
            }),
              n.push(r);
          }),
          n
        );
      };
      t.traverseTreeUp = function (e, t) {
        "function" == typeof t &&
          (function e(t, n) {
            if (t && t.children)
              for (var r = t.children.length - 1; r >= 0; r--)
                if (!e(t.children[r], n)) return;
            return !!n(t);
          })(e, t);
      };
    },
    15: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.clone = t.isObject = void 0);
      t.isObject = function (e) {
        return null !== e && "object" === r(e);
      };
      t.clone = function (e) {
        if (null === e) return e;
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof Array) {
          var n = [];
          return (
            e.forEach(function (e) {
              n.push(e);
            }),
            n.map(function (e) {
              return t.clone(e);
            })
          );
        }
        if ("object" === r(e) && e !== {}) {
          var i = o({}, e);
          return (
            Object.keys(i).forEach(function (e) {
              i[e] = t.clone(i[e]);
            }),
            i
          );
        }
        return e;
      };
    },
    16: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isFunction = void 0);
      t.isFunction = function (e) {
        return "function" == typeof e;
      };
    },
    173: function (e, t, n) {
      "use strict";
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ConcentricLayout = void 0);
      var i = n(10),
        u = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.nodeSize = 30),
              (n.minNodeSpacing = 10),
              (n.preventOverlap = !1),
              (n.equidistant = !1),
              (n.startAngle = 1.5 * Math.PI),
              (n.clockwise = !0),
              (n.sortBy = "degree"),
              (n.nodes = []),
              (n.edges = []),
              (n.width = 300),
              (n.height = 300),
              (n.onLayoutEnd = function () {}),
              n.updateCfg(t),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.getDefaultCfg = function () {
              return {
                nodeSize: 30,
                minNodeSpacing: 10,
                preventOverlap: !1,
                sweep: void 0,
                equidistant: !1,
                startAngle: 1.5 * Math.PI,
                clockwise: !0,
                maxLevelDiff: void 0,
                sortBy: "degree",
              };
            }),
            (t.prototype.execute = function () {
              var e = this,
                t = e.nodes,
                n = e.edges,
                r = t.length;
              if (0 !== r) {
                e.width ||
                  "undefined" == typeof window ||
                  (e.width = window.innerWidth),
                  e.height ||
                    "undefined" == typeof window ||
                    (e.height = window.innerHeight),
                  e.center || (e.center = [e.width / 2, e.height / 2]);
                var o = e.center;
                if (1 === r)
                  return (
                    (t[0].x = o[0]),
                    (t[0].y = o[1]),
                    void (e.onLayoutEnd && e.onLayoutEnd())
                  );
                var u,
                  c = [];
                (u = i.isArray(e.nodeSize)
                  ? Math.max(e.nodeSize[0], e.nodeSize[1])
                  : e.nodeSize),
                  t.forEach(function (e) {
                    c.push(e);
                    var t = u;
                    i.isArray(e.size)
                      ? (t = Math.max(e.size[0], e.size[1]))
                      : i.isNumber(e.size) && (t = e.size),
                      (u = Math.max(u, t));
                  }),
                  (e.clockwise =
                    void 0 !== e.counterclockwise
                      ? !e.counterclockwise
                      : e.clockwise);
                var a = {},
                  s = {};
                if (
                  (c.forEach(function (e, t) {
                    (a[e.id] = e), (s[e.id] = t);
                  }),
                  !(
                    ("degree" !== e.sortBy &&
                      i.isString(e.sortBy) &&
                      void 0 !== c[0][e.sortBy]) ||
                    ((e.sortBy = "degree"), i.isNumber(t[0].degree))
                  ))
                ) {
                  var f = i.getDegree(t.length, s, n);
                  c.forEach(function (e, t) {
                    e.degree = f[t];
                  });
                }
                c.sort(function (t, n) {
                  return n[e.sortBy] - t[e.sortBy];
                }),
                  (e.maxValueNode = c[0]),
                  (e.maxLevelDiff =
                    e.maxLevelDiff || e.maxValueNode[e.sortBy] / 4);
                var d = [[]],
                  l = d[0];
                c.forEach(function (t) {
                  if (l.length > 0) {
                    var n = Math.abs(l[0][e.sortBy] - t[e.sortBy]);
                    e.maxLevelDiff &&
                      n >= e.maxLevelDiff &&
                      ((l = []), d.push(l));
                  }
                  l.push(t);
                });
                var p = u + e.minNodeSpacing;
                if (!e.preventOverlap) {
                  var h = d.length > 0 && d[0].length > 1,
                    y =
                      (Math.min(e.width, e.height) / 2 - p) /
                      (d.length + (h ? 1 : 0));
                  p = Math.min(p, y);
                }
                var v = 0;
                if (
                  (d.forEach(function (t) {
                    var n = e.sweep;
                    void 0 === n &&
                      (n = 2 * Math.PI - (2 * Math.PI) / t.length);
                    var r = (t.dTheta = n / Math.max(1, t.length - 1));
                    if (t.length > 1 && e.preventOverlap) {
                      var o = Math.cos(r) - Math.cos(0),
                        i = Math.sin(r) - Math.sin(0),
                        u = Math.sqrt((p * p) / (o * o + i * i));
                      v = Math.max(u, v);
                    }
                    (t.r = v), (v += p);
                  }),
                  e.equidistant)
                ) {
                  for (var g = 0, b = 0, m = 0; m < d.length; m++) {
                    var _ = d[m].r - b;
                    g = Math.max(g, _);
                  }
                  (b = 0),
                    d.forEach(function (e, t) {
                      0 === t && (b = e.r), (e.r = b), (b += g);
                    });
                }
                return (
                  d.forEach(function (t) {
                    var n = t.dTheta,
                      r = t.r;
                    t.forEach(function (t, i) {
                      var u = e.startAngle + (e.clockwise ? 1 : -1) * n * i;
                      (t.x = o[0] + r * Math.cos(u)),
                        (t.y = o[1] + r * Math.sin(u));
                    });
                  }),
                  e.onLayoutEnd && e.onLayoutEnd(),
                  { nodes: t, edges: n }
                );
              }
              e.onLayoutEnd && e.onLayoutEnd();
            }),
            (t.prototype.getType = function () {
              return "concentric";
            }),
            t
          );
        })(n(7).Base);
      t.ConcentricLayout = u;
    },
    217: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(173);
      t.default = r.ConcentricLayout;
    },
    7: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Base = void 0);
      var r = (function () {
        function e() {
          (this.nodes = []),
            (this.edges = []),
            (this.combos = []),
            (this.positions = []),
            (this.destroyed = !1),
            (this.onLayoutEnd = function () {});
        }
        return (
          (e.prototype.layout = function (e) {
            return this.init(e), this.execute(!0);
          }),
          (e.prototype.init = function (e) {
            (this.nodes = e.nodes || []),
              (this.edges = e.edges || []),
              (this.combos = e.combos || []);
          }),
          (e.prototype.execute = function (e) {}),
          (e.prototype.executeWithWorker = function () {}),
          (e.prototype.getDefaultCfg = function () {
            return {};
          }),
          (e.prototype.updateCfg = function (e) {
            e && Object.assign(this, e);
          }),
          (e.prototype.getType = function () {
            return "base";
          }),
          (e.prototype.destroy = function () {
            (this.nodes = null),
              (this.edges = null),
              (this.combos = null),
              (this.positions = null),
              (this.destroyed = !0);
          }),
          e
        );
      })();
      t.Base = r;
    },
  }).default;
});
//# sourceMappingURL=concentricLayout.js.map
