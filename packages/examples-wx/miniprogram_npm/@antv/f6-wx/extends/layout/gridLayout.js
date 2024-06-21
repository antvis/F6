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
    function o(r) {
      if (t[r]) return t[r].exports;
      var n = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
    }
    return (
      (o.m = e),
      (o.c = t),
      (o.d = function (e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (o.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (o.t = function (e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (o.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            o.d(
              r,
              n,
              function (t) {
                return e[t];
              }.bind(null, n),
            );
        return r;
      }),
      (o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return o.d(t, "a", t), t;
      }),
      (o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (o.p = ""),
      o((o.s = 407))
    );
  })({
    10: function (e, t, o) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n(o(11), t),
        n(o(12), t),
        n(o(13), t),
        n(o(14), t),
        n(o(15), t),
        n(o(16), t);
    },
    11: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.camelize = t.isString = void 0);
      t.isString = function (e) {
        return "string" == typeof e;
      };
      var r,
        n,
        i = /-(\w)/g;
      t.camelize =
        ((r = function (e) {
          return e.replace(i, function (e, t) {
            return t ? t.toUpperCase() : "";
          });
        }),
        (n = Object.create(null)),
        function (e) {
          return n[e] || (n[e] = r(e));
        });
    },
    12: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isArray = void 0),
        (t.isArray = Array.isArray);
    },
    13: function (e, t, o) {
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
        var o = parseFloat(e);
        return t.isNaN(o) ? e : o;
      };
    },
    14: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.traverseTreeUp =
          t.scaleMatrix =
          t.getAdjMatrix =
          t.floydWarshall =
          t.getDegree =
            void 0);
      t.getDegree = function (e, t, o) {
        for (var r = [], n = 0; n < e; n++) r[n] = 0;
        return o
          ? (o.forEach(function (e) {
              e.source && (r[t[e.source]] += 1),
                e.target && (r[t[e.target]] += 1);
            }),
            r)
          : r;
      };
      t.floydWarshall = function (e) {
        for (var t = [], o = e.length, r = 0; r < o; r += 1) {
          t[r] = [];
          for (var n = 0; n < o; n += 1)
            r === n
              ? (t[r][n] = 0)
              : 0 !== e[r][n] && e[r][n]
              ? (t[r][n] = e[r][n])
              : (t[r][n] = 1 / 0);
        }
        for (var i = 0; i < o; i += 1)
          for (r = 0; r < o; r += 1)
            for (n = 0; n < o; n += 1)
              t[r][n] > t[r][i] + t[i][n] && (t[r][n] = t[r][i] + t[i][n]);
        return t;
      };
      t.getAdjMatrix = function (e, t) {
        var o = e.nodes,
          r = e.edges,
          n = [],
          i = {};
        if (!o) throw new Error("invalid nodes data!");
        return (
          o &&
            o.forEach(function (e, t) {
              i[e.id] = t;
              n.push([]);
            }),
          r &&
            r.forEach(function (e) {
              var o = e.source,
                r = e.target,
                s = i[o],
                u = i[r];
              (n[s][u] = 1), t || (n[u][s] = 1);
            }),
          n
        );
      };
      t.scaleMatrix = function (e, t) {
        var o = [];
        return (
          e.forEach(function (e) {
            var r = [];
            e.forEach(function (e) {
              r.push(e * t);
            }),
              o.push(r);
          }),
          o
        );
      };
      t.traverseTreeUp = function (e, t) {
        "function" == typeof t &&
          (function e(t, o) {
            if (t && t.children)
              for (var r = t.children.length - 1; r >= 0; r--)
                if (!e(t.children[r], o)) return;
            return !!o(t);
          })(e, t);
      };
    },
    15: function (e, t, o) {
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
      var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, o = 1, r = arguments.length; o < r; o++)
                for (var n in (t = arguments[o]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
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
          var o = [];
          return (
            e.forEach(function (e) {
              o.push(e);
            }),
            o.map(function (e) {
              return t.clone(e);
            })
          );
        }
        if ("object" === r(e) && e !== {}) {
          var i = n({}, e);
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
    16: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isFunction = void 0);
      t.isFunction = function (e) {
        return "function" == typeof e;
      };
    },
    179: function (e, t, o) {
      "use strict";
      var r,
        n =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function o() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((o.prototype = t.prototype), new o()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GridLayout = void 0);
      var i = o(10),
        s = (function (e) {
          function t(t) {
            var o = e.call(this) || this;
            return (
              (o.begin = [0, 0]),
              (o.preventOverlap = !0),
              (o.preventOverlapPadding = 10),
              (o.condense = !1),
              (o.sortBy = "degree"),
              (o.nodeSize = 30),
              (o.nodes = []),
              (o.edges = []),
              (o.width = 300),
              (o.height = 300),
              (o.row = 0),
              (o.col = 0),
              (o.cellWidth = 0),
              (o.cellHeight = 0),
              (o.cellUsed = {}),
              (o.id2manPos = {}),
              (o.onLayoutEnd = function () {}),
              o.updateCfg(t),
              o
            );
          }
          return (
            n(t, e),
            (t.prototype.getDefaultCfg = function () {
              return {
                begin: [0, 0],
                preventOverlap: !0,
                preventOverlapPadding: 10,
                condense: !1,
                rows: void 0,
                cols: void 0,
                position: void 0,
                sortBy: "degree",
                nodeSize: 30,
              };
            }),
            (t.prototype.execute = function () {
              var e = this,
                t = e.nodes,
                o = t.length,
                r = e.begin;
              if (0 !== o) {
                if (1 === o)
                  return (
                    (t[0].x = r[0]),
                    (t[0].y = r[1]),
                    void (e.onLayoutEnd && e.onLayoutEnd())
                  );
                var n = e.edges,
                  s = [];
                t.forEach(function (e) {
                  s.push(e);
                });
                var u = {};
                if (
                  (s.forEach(function (e, t) {
                    u[e.id] = t;
                  }),
                  ("degree" === e.sortBy ||
                    !i.isString(e.sortBy) ||
                    void 0 === s[0][e.sortBy]) &&
                    ((e.sortBy = "degree"), i.isNaN(t[0].degree)))
                ) {
                  var c = i.getDegree(s.length, u, n);
                  s.forEach(function (e, t) {
                    e.degree = c[t];
                  });
                }
                s.sort(function (t, o) {
                  return o[e.sortBy] - t[e.sortBy];
                }),
                  e.width ||
                    "undefined" == typeof window ||
                    (e.width = window.innerWidth),
                  e.height ||
                    "undefined" == typeof window ||
                    (e.height = window.innerHeight);
                var l = e.rows,
                  a = null != e.cols ? e.cols : e.columns;
                if (
                  ((e.cells = o),
                  null != l && null != a
                    ? ((e.rows = l), (e.cols = a))
                    : null != l && null == a
                    ? ((e.rows = l), (e.cols = Math.ceil(e.cells / e.rows)))
                    : null == l && null != a
                    ? ((e.cols = a), (e.rows = Math.ceil(e.cells / e.cols)))
                    : ((e.splits = Math.sqrt((e.cells * e.height) / e.width)),
                      (e.rows = Math.round(e.splits)),
                      (e.cols = Math.round((e.width / e.height) * e.splits))),
                  e.cols * e.rows > e.cells)
                )
                  ((d = e.small()) - 1) * (f = e.large()) >= e.cells
                    ? e.small(d - 1)
                    : (f - 1) * d >= e.cells && e.large(f - 1);
                else
                  for (; e.cols * e.rows < e.cells; ) {
                    var f,
                      d = e.small();
                    ((f = e.large()) + 1) * d >= e.cells
                      ? e.large(f + 1)
                      : e.small(d + 1);
                  }
                (e.cellWidth = e.width / e.cols),
                  (e.cellHeight = e.height / e.rows),
                  e.condense && ((e.cellWidth = 0), (e.cellHeight = 0)),
                  e.preventOverlap &&
                    s.forEach(function (t) {
                      var o, r;
                      (t.x && t.y) || ((t.x = 0), (t.y = 0)),
                        i.isArray(t.size)
                          ? ((o = t.size[0]), (r = t.size[1]))
                          : i.isNumber(t.size) && ((o = t.size), (r = t.size)),
                        (void 0 !== o && void 0 !== r) ||
                          (i.isArray(e.nodeSize)
                            ? ((o = e.nodeSize[0]), (r = e.nodeSize[1]))
                            : i.isNumber(e.nodeSize)
                            ? ((o = e.nodeSize), (r = e.nodeSize))
                            : ((o = 30), (r = 30)));
                      var n = e.preventOverlapPadding,
                        s = o + n,
                        u = r + n;
                      (e.cellWidth = Math.max(e.cellWidth, s)),
                        (e.cellHeight = Math.max(e.cellHeight, u));
                    }),
                  (e.cellUsed = {}),
                  (e.row = 0),
                  (e.col = 0),
                  (e.id2manPos = {});
                for (var p = 0; p < s.length; p++) {
                  var h = s[p],
                    y = void 0;
                  if (
                    (e.position && (y = e.position(h)),
                    y && (void 0 !== y.row || void 0 !== y.col))
                  ) {
                    var v = { row: y.row, col: y.col };
                    if (void 0 === v.col)
                      for (v.col = 0; e.used(v.row, v.col); ) v.col++;
                    else if (void 0 === v.row)
                      for (v.row = 0; e.used(v.row, v.col); ) v.row++;
                    (e.id2manPos[h.id] = v), e.use(v.row, v.col);
                  }
                  e.getPos(h);
                }
                return e.onLayoutEnd && e.onLayoutEnd(), { edges: n, nodes: s };
              }
              e.onLayoutEnd && e.onLayoutEnd();
            }),
            (t.prototype.small = function (e) {
              var t,
                o = this.rows || 5,
                r = this.cols || 5;
              null == e
                ? (t = Math.min(o, r))
                : Math.min(o, r) === this.rows
                ? (this.rows = e)
                : (this.cols = e);
              return t;
            }),
            (t.prototype.large = function (e) {
              var t,
                o = this.rows || 5,
                r = this.cols || 5;
              null == e
                ? (t = Math.max(o, r))
                : Math.max(o, r) === this.rows
                ? (this.rows = e)
                : (this.cols = e);
              return t;
            }),
            (t.prototype.used = function (e, t) {
              return this.cellUsed["c-" + e + "-" + t] || !1;
            }),
            (t.prototype.use = function (e, t) {
              this.cellUsed["c-" + e + "-" + t] = !0;
            }),
            (t.prototype.moveToNextCell = function () {
              var e = this.cols || 5;
              this.col++, this.col >= e && ((this.col = 0), this.row++);
            }),
            (t.prototype.getPos = function (e) {
              var t,
                o,
                r = this.begin,
                n = this.cellWidth,
                i = this.cellHeight,
                s = this.id2manPos[e.id];
              if (s)
                (t = s.col * n + n / 2 + r[0]), (o = s.row * i + i / 2 + r[1]);
              else {
                for (; this.used(this.row, this.col); ) this.moveToNextCell();
                (t = this.col * n + n / 2 + r[0]),
                  (o = this.row * i + i / 2 + r[1]),
                  this.use(this.row, this.col),
                  this.moveToNextCell();
              }
              (e.x = t), (e.y = o);
            }),
            (t.prototype.getType = function () {
              return "grid";
            }),
            t
          );
        })(o(7).Base);
      t.GridLayout = s;
    },
    407: function (e, t, o) {
      "use strict";
      o.r(t);
      var r = o(179);
      t.default = r.GridLayout;
    },
    7: function (e, t, o) {
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
//# sourceMappingURL=gridLayout.js.map
