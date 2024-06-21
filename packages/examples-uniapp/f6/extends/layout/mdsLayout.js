!(function (t, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define([], r)
    : "object" == typeof exports
    ? (exports.MdsLayout = r())
    : (t.MdsLayout = r());
})(this, function () {
  return (function (t) {
    var r = {};
    function e(o) {
      if (r[o]) return r[o].exports;
      var n = (r[o] = { i: o, l: !1, exports: {} });
      return t[o].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
    }
    return (
      (e.m = t),
      (e.c = r),
      (e.d = function (t, r, o) {
        e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: o });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, r) {
        if ((1 & r && (t = e(t)), 8 & r)) return t;
        if (4 & r && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (e.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: t }),
          2 & r && "string" != typeof t)
        )
          for (var n in t)
            e.d(
              o,
              n,
              function (r) {
                return t[r];
              }.bind(null, n),
            );
        return o;
      }),
      (e.n = function (t) {
        var r =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(r, "a", r), r;
      }),
      (e.o = function (t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
      }),
      (e.p = ""),
      e((e.s = 389))
    );
  })({
    10: function (t, r, e) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, r, e, o) {
                void 0 === o && (o = e),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return r[e];
                    },
                  });
              }
            : function (t, r, e, o) {
                void 0 === o && (o = e), (t[o] = r[e]);
              }),
        n =
          (this && this.__exportStar) ||
          function (t, r) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(r, e) ||
                o(r, t, e);
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        n(e(11), r),
        n(e(12), r),
        n(e(13), r),
        n(e(14), r),
        n(e(15), r),
        n(e(16), r);
    },
    11: function (t, r, e) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.camelize = r.isString = void 0);
      r.isString = function (t) {
        return "string" == typeof t;
      };
      var o,
        n,
        i = /-(\w)/g;
      r.camelize =
        ((o = function (t) {
          return t.replace(i, function (t, r) {
            return r ? r.toUpperCase() : "";
          });
        }),
        (n = Object.create(null)),
        function (t) {
          return n[t] || (n[t] = o(t));
        });
    },
    12: function (t, r, e) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isArray = void 0),
        (r.isArray = Array.isArray);
    },
    13: function (t, r, e) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.toNumber = r.isNaN = r.isNumber = void 0);
      r.isNumber = function (t) {
        return "number" == typeof t;
      };
      r.isNaN = function (t) {
        return Number.isNaN(Number(t));
      };
      r.toNumber = function (t) {
        var e = parseFloat(t);
        return r.isNaN(e) ? t : e;
      };
    },
    14: function (t, r, e) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.traverseTreeUp =
          r.scaleMatrix =
          r.getAdjMatrix =
          r.floydWarshall =
          r.getDegree =
            void 0);
      r.getDegree = function (t, r, e) {
        for (var o = [], n = 0; n < t; n++) o[n] = 0;
        return e
          ? (e.forEach(function (t) {
              t.source && (o[r[t.source]] += 1),
                t.target && (o[r[t.target]] += 1);
            }),
            o)
          : o;
      };
      r.floydWarshall = function (t) {
        for (var r = [], e = t.length, o = 0; o < e; o += 1) {
          r[o] = [];
          for (var n = 0; n < e; n += 1)
            o === n
              ? (r[o][n] = 0)
              : 0 !== t[o][n] && t[o][n]
              ? (r[o][n] = t[o][n])
              : (r[o][n] = 1 / 0);
        }
        for (var i = 0; i < e; i += 1)
          for (o = 0; o < e; o += 1)
            for (n = 0; n < e; n += 1)
              r[o][n] > r[o][i] + r[i][n] && (r[o][n] = r[o][i] + r[i][n]);
        return r;
      };
      r.getAdjMatrix = function (t, r) {
        var e = t.nodes,
          o = t.edges,
          n = [],
          i = {};
        if (!e) throw new Error("invalid nodes data!");
        return (
          e &&
            e.forEach(function (t, r) {
              i[t.id] = r;
              n.push([]);
            }),
          o &&
            o.forEach(function (t) {
              var e = t.source,
                o = t.target,
                s = i[e],
                u = i[o];
              (n[s][u] = 1), r || (n[u][s] = 1);
            }),
          n
        );
      };
      r.scaleMatrix = function (t, r) {
        var e = [];
        return (
          t.forEach(function (t) {
            var o = [];
            t.forEach(function (t) {
              o.push(t * r);
            }),
              e.push(o);
          }),
          e
        );
      };
      r.traverseTreeUp = function (t, r) {
        "function" == typeof r &&
          (function t(r, e) {
            if (r && r.children)
              for (var o = r.children.length - 1; o >= 0; o--)
                if (!t(r.children[o], e)) return;
            return !!e(r);
          })(t, r);
      };
    },
    15: function (t, r, e) {
      "use strict";
      function o(t) {
        return (o =
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
              for (var r, e = 1, o = arguments.length; e < o; e++)
                for (var n in (r = arguments[e]))
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.clone = r.isObject = void 0);
      r.isObject = function (t) {
        return null !== t && "object" === o(t);
      };
      r.clone = function (t) {
        if (null === t) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof Array) {
          var e = [];
          return (
            t.forEach(function (t) {
              e.push(t);
            }),
            e.map(function (t) {
              return r.clone(t);
            })
          );
        }
        if ("object" === o(t) && t !== {}) {
          var i = n({}, t);
          return (
            Object.keys(i).forEach(function (t) {
              i[t] = r.clone(i[t]);
            }),
            i
          );
        }
        return t;
      };
    },
    16: function (t, r, e) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isFunction = void 0);
      r.isFunction = function (t) {
        return "function" == typeof t;
      };
    },
    167: function (t, r, e) {
      "use strict";
      var o,
        n =
          (this && this.__extends) ||
          ((o = function (t, r) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, r) {
                  t.__proto__ = r;
                }) ||
              function (t, r) {
                for (var e in r)
                  Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
              })(t, r);
          }),
          function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null",
              );
            function e() {
              this.constructor = t;
            }
            o(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((e.prototype = r.prototype), new e()));
          });
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.MDSLayout = void 0);
      var i = e(96),
        s = e(10),
        u = (function (t) {
          function r(r) {
            var e = t.call(this) || this;
            return (
              (e.center = [0, 0]),
              (e.linkDistance = 50),
              (e.nodes = []),
              (e.edges = []),
              (e.onLayoutEnd = function () {}),
              e.updateCfg(r),
              e
            );
          }
          return (
            n(r, t),
            (r.prototype.getDefaultCfg = function () {
              return { center: [0, 0], linkDistance: 50 };
            }),
            (r.prototype.execute = function () {
              var t = this.nodes,
                r = this.edges,
                e = void 0 === r ? [] : r,
                o = this.center;
              if (t && 0 !== t.length) {
                if (1 === t.length)
                  return (
                    (t[0].x = o[0]),
                    (t[0].y = o[1]),
                    void (this.onLayoutEnd && this.onLayoutEnd())
                  );
                var n = this.linkDistance,
                  i = s.getAdjMatrix({ nodes: t, edges: e }, !1),
                  u = s.floydWarshall(i);
                this.handleInfinity(u);
                var a = s.scaleMatrix(u, n);
                this.scaledDistances = a;
                var f = this.runMDS();
                return (
                  (this.positions = f),
                  f.forEach(function (r, e) {
                    (t[e].x = r[0] + o[0]), (t[e].y = r[1] + o[1]);
                  }),
                  this.onLayoutEnd && this.onLayoutEnd(),
                  { nodes: t, edges: e }
                );
              }
              this.onLayoutEnd && this.onLayoutEnd();
            }),
            (r.prototype.runMDS = function () {
              var t = this.scaledDistances,
                r = i.Matrix.mul(i.Matrix.pow(t, 2), -0.5),
                e = r.mean("row"),
                o = r.mean("column"),
                n = r.mean();
              r.add(n).subRowVector(e).subColumnVector(o);
              var s = new i.SingularValueDecomposition(r),
                u = i.Matrix.sqrt(s.diagonalMatrix).diagonal();
              return s.leftSingularVectors.toJSON().map(function (t) {
                return i.Matrix.mul([t], [u]).toJSON()[0].splice(0, 2);
              });
            }),
            (r.prototype.handleInfinity = function (t) {
              var r = -999999;
              t.forEach(function (t) {
                t.forEach(function (t) {
                  t !== 1 / 0 && r < t && (r = t);
                });
              }),
                t.forEach(function (e, o) {
                  e.forEach(function (e, n) {
                    e === 1 / 0 && (t[o][n] = r);
                  });
                });
            }),
            (r.prototype.getType = function () {
              return "mds";
            }),
            r
          );
        })(e(9).Base);
      r.MDSLayout = u;
    },
    389: function (t, r, e) {
      "use strict";
      e.r(r);
      var o = e(167);
      r.default = o.MDSLayout;
    },
    9: function (t, r, e) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.Base = void 0);
      var o = (function () {
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
      r.Base = o;
    },
    96: function (t, r, e) {
      "use strict";
      e.r(r),
        e.d(r, "AbstractMatrix", function () {
          return U;
        }),
        e.d(r, "default", function () {
          return Y;
        }),
        e.d(r, "Matrix", function () {
          return Y;
        }),
        e.d(r, "MatrixColumnView", function () {
          return ut;
        }),
        e.d(r, "MatrixColumnSelectionView", function () {
          return yt;
        }),
        e.d(r, "MatrixFlipColumnView", function () {
          return Mt;
        }),
        e.d(r, "MatrixFlipRowView", function () {
          return Rt;
        }),
        e.d(r, "MatrixRowView", function () {
          return It;
        }),
        e.d(r, "MatrixRowSelectionView", function () {
          return zt;
        }),
        e.d(r, "MatrixSelectionView", function () {
          return Kt;
        }),
        e.d(r, "MatrixSubView", function () {
          return er;
        }),
        e.d(r, "MatrixTransposeView", function () {
          return fr;
        }),
        e.d(r, "wrap", function () {
          return Or;
        }),
        e.d(r, "WrapperMatrix1D", function () {
          return gr;
        }),
        e.d(r, "WrapperMatrix2D", function () {
          return Sr;
        }),
        e.d(r, "solve", function () {
          return Ir;
        }),
        e.d(r, "inverse", function () {
          return Dr;
        }),
        e.d(r, "determinant", function () {
          return Vr;
        }),
        e.d(r, "linearDependencies", function () {
          return Fr;
        }),
        e.d(r, "pseudoInverse", function () {
          return Lr;
        }),
        e.d(r, "covariance", function () {
          return zr;
        }),
        e.d(r, "correlation", function () {
          return Wr;
        }),
        e.d(r, "SingularValueDecomposition", function () {
          return Nr;
        }),
        e.d(r, "SVD", function () {
          return Nr;
        }),
        e.d(r, "EigenvalueDecomposition", function () {
          return Yr;
        }),
        e.d(r, "EVD", function () {
          return Yr;
        }),
        e.d(r, "CholeskyDecomposition", function () {
          return te;
        }),
        e.d(r, "CHO", function () {
          return te;
        }),
        e.d(r, "LuDecomposition", function () {
          return jr;
        }),
        e.d(r, "LU", function () {
          return jr;
        }),
        e.d(r, "QrDecomposition", function () {
          return _r;
        }),
        e.d(r, "QR", function () {
          return _r;
        }),
        e.d(r, "Nipals", function () {
          return ne;
        }),
        e.d(r, "NIPALS", function () {
          return ne;
        });
      var o = Object.prototype.toString;
      function n(t) {
        return o.call(t).endsWith("Array]");
      }
      function i(t) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n(t)) throw new TypeError("input must be an array");
        if (0 === t.length) throw new TypeError("input must not be empty");
        var e = r.fromIndex,
          o = void 0 === e ? 0 : e,
          i = r.toIndex,
          s = void 0 === i ? t.length : i;
        if (o < 0 || o >= t.length || !Number.isInteger(o))
          throw new Error(
            "fromIndex must be a positive integer smaller than length",
          );
        if (s <= o || s > t.length || !Number.isInteger(s))
          throw new Error(
            "toIndex must be an integer greater than fromIndex and at most equal to length",
          );
        for (var u = t[o], a = o + 1; a < s; a++) t[a] > u && (u = t[a]);
        return u;
      }
      function s(t) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n(t)) throw new TypeError("input must be an array");
        if (0 === t.length) throw new TypeError("input must not be empty");
        var e = r.fromIndex,
          o = void 0 === e ? 0 : e,
          i = r.toIndex,
          s = void 0 === i ? t.length : i;
        if (o < 0 || o >= t.length || !Number.isInteger(o))
          throw new Error(
            "fromIndex must be a positive integer smaller than length",
          );
        if (s <= o || s > t.length || !Number.isInteger(s))
          throw new Error(
            "toIndex must be an integer greater than fromIndex and at most equal to length",
          );
        for (var u = t[o], a = o + 1; a < s; a++) t[a] < u && (u = t[a]);
        return u;
      }
      function u(t) {
        var r,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n(t)) throw new TypeError("input must be an array");
        if (0 === t.length) throw new TypeError("input must not be empty");
        if (void 0 !== e.output) {
          if (!n(e.output))
            throw new TypeError("output option must be an array if specified");
          r = e.output;
        } else r = new Array(t.length);
        var o = s(t),
          u = i(t);
        if (o === u)
          throw new RangeError(
            "minimum and maximum input values are equal. Cannot rescale a constant array",
          );
        var a = e.min,
          f = void 0 === a ? (e.autoMinMax ? o : 0) : a,
          c = e.max,
          h = void 0 === c ? (e.autoMinMax ? u : 1) : c;
        if (f >= h)
          throw new RangeError("min option must be smaller than max option");
        for (var l = (h - f) / (u - o), p = 0; p < t.length; p++)
          r[p] = (t[p] - o) * l + f;
        return r;
      }
      var a = " ".repeat(2),
        f = " ".repeat(4);
      function c(t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = r.maxRows,
          o = void 0 === e ? 15 : e,
          n = r.maxColumns,
          i = void 0 === n ? 10 : n,
          s = r.maxNumSize,
          u = void 0 === s ? 8 : s;
        return ""
          .concat(t.constructor.name, " {\n")
          .concat(a, "[\n")
          .concat(f)
          .concat(h(t, o, i, u), "\n")
          .concat(a, "]\n")
          .concat(a, "rows: ")
          .concat(t.rows, "\n")
          .concat(a, "columns: ")
          .concat(t.columns, "\n}");
      }
      function h(t, r, e, o) {
        for (
          var n = t.rows,
            i = t.columns,
            s = Math.min(n, r),
            u = Math.min(i, e),
            a = [],
            c = 0;
          c < s;
          c++
        ) {
          for (var h = [], p = 0; p < u; p++) h.push(l(t.get(c, p), o));
          a.push("".concat(h.join(" ")));
        }
        return (
          u !== i &&
            (a[a.length - 1] += " ... ".concat(i - e, " more columns")),
          s !== n && a.push("... ".concat(n - r, " more rows")),
          a.join("\n".concat(f))
        );
      }
      function l(t, r) {
        var e = String(t);
        if (e.length <= r) return e.padEnd(r, " ");
        var o = t.toPrecision(r - 2);
        if (o.length <= r) return o;
        var n = t.toExponential(r - 2),
          i = n.indexOf("e"),
          s = n.slice(i);
        return n.slice(0, r - s.length) + s;
      }
      function p(t, r, e) {
        var o = e ? t.rows : t.rows - 1;
        if (r < 0 || r > o) throw new RangeError("Row index out of range");
      }
      function y(t, r, e) {
        var o = e ? t.columns : t.columns - 1;
        if (r < 0 || r > o) throw new RangeError("Column index out of range");
      }
      function v(t, r) {
        if ((r.to1DArray && (r = r.to1DArray()), r.length !== t.columns))
          throw new RangeError(
            "vector size must be the same as the number of columns",
          );
        return r;
      }
      function m(t, r) {
        if ((r.to1DArray && (r = r.to1DArray()), r.length !== t.rows))
          throw new RangeError(
            "vector size must be the same as the number of rows",
          );
        return r;
      }
      function g(t, r) {
        if (!n(r)) throw new TypeError("row indices must be an array");
        for (var e = 0; e < r.length; e++)
          if (r[e] < 0 || r[e] >= t.rows)
            throw new RangeError("row indices are out of range");
      }
      function w(t, r) {
        if (!n(r)) throw new TypeError("column indices must be an array");
        for (var e = 0; e < r.length; e++)
          if (r[e] < 0 || r[e] >= t.columns)
            throw new RangeError("column indices are out of range");
      }
      function b(t, r, e, o, n) {
        if (5 !== arguments.length)
          throw new RangeError("expected 4 arguments");
        if (
          (M("startRow", r),
          M("endRow", e),
          M("startColumn", o),
          M("endColumn", n),
          r > e ||
            o > n ||
            r < 0 ||
            r >= t.rows ||
            e < 0 ||
            e >= t.rows ||
            o < 0 ||
            o >= t.columns ||
            n < 0 ||
            n >= t.columns)
        )
          throw new RangeError("Submatrix indices are out of range");
      }
      function d(t) {
        for (
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            e = [],
            o = 0;
          o < t;
          o++
        )
          e.push(r);
        return e;
      }
      function M(t, r) {
        if ("number" != typeof r)
          throw new TypeError("".concat(t, " must be a number"));
      }
      function x(t) {
        if (t.isEmpty())
          throw new Error("Empty matrix has no elements to index");
      }
      function k(t, r, e) {
        for (var o = t.rows, n = t.columns, i = [], s = 0; s < o; s++) {
          for (var u = 0, a = 0, f = 0, c = 0; c < n; c++)
            (u += f = t.get(s, c) - e[s]), (a += f * f);
          r
            ? i.push((a - (u * u) / n) / (n - 1))
            : i.push((a - (u * u) / n) / n);
        }
        return i;
      }
      function S(t, r, e) {
        for (var o = t.rows, n = t.columns, i = [], s = 0; s < n; s++) {
          for (var u = 0, a = 0, f = 0, c = 0; c < o; c++)
            (u += f = t.get(c, s) - e[s]), (a += f * f);
          r
            ? i.push((a - (u * u) / o) / (o - 1))
            : i.push((a - (u * u) / o) / o);
        }
        return i;
      }
      function O(t, r, e) {
        for (
          var o = t.rows, n = t.columns, i = o * n, s = 0, u = 0, a = 0, f = 0;
          f < o;
          f++
        )
          for (var c = 0; c < n; c++) (s += a = t.get(f, c) - e), (u += a * a);
        return r ? (u - (s * s) / i) / (i - 1) : (u - (s * s) / i) / i;
      }
      function E(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r[e]);
      }
      function j(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r[o]);
      }
      function R(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r);
      }
      function P(t) {
        for (var r = [], e = 0; e < t.rows; e++) {
          for (var o = 0, n = 0; n < t.columns; n++)
            o += Math.pow(t.get(e, n), 2) / (t.columns - 1);
          r.push(Math.sqrt(o));
        }
        return r;
      }
      function _(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r[e]);
      }
      function T(t) {
        for (var r = [], e = 0; e < t.columns; e++) {
          for (var o = 0, n = 0; n < t.rows; n++)
            o += Math.pow(t.get(n, e), 2) / (t.rows - 1);
          r.push(Math.sqrt(o));
        }
        return r;
      }
      function C(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r[o]);
      }
      function N(t) {
        for (var r = t.size - 1, e = 0, o = 0; o < t.columns; o++)
          for (var n = 0; n < t.rows; n++) e += Math.pow(t.get(n, o), 2) / r;
        return Math.sqrt(e);
      }
      function D(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r);
      }
      function I(t, r) {
        return (I =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function V(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = A(t);
          if (r) {
            var n = A(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return q(this, e);
        };
      }
      function q(t, r) {
        if (r && ("object" === F(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function A(t) {
        return (A = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function F(t) {
        return (F =
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
      function L(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function B(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function z(t, r, e) {
        return (
          r && B(t.prototype, r),
          e && B(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      var U = (function () {
        function t() {
          L(this, t);
        }
        return (
          z(
            t,
            [
              {
                key: "size",
                get: function () {
                  return this.rows * this.columns;
                },
              },
              {
                key: "apply",
                value: function (t) {
                  if ("function" != typeof t)
                    throw new TypeError("callback must be a function");
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++) t.call(this, r, e);
                  return this;
                },
              },
              {
                key: "to1DArray",
                value: function () {
                  for (var t = [], r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      t.push(this.get(r, e));
                  return t;
                },
              },
              {
                key: "to2DArray",
                value: function () {
                  for (var t = [], r = 0; r < this.rows; r++) {
                    t.push([]);
                    for (var e = 0; e < this.columns; e++)
                      t[r].push(this.get(r, e));
                  }
                  return t;
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this.to2DArray();
                },
              },
              {
                key: "isRowVector",
                value: function () {
                  return 1 === this.rows;
                },
              },
              {
                key: "isColumnVector",
                value: function () {
                  return 1 === this.columns;
                },
              },
              {
                key: "isVector",
                value: function () {
                  return 1 === this.rows || 1 === this.columns;
                },
              },
              {
                key: "isSquare",
                value: function () {
                  return this.rows === this.columns;
                },
              },
              {
                key: "isEmpty",
                value: function () {
                  return 0 === this.rows || 0 === this.columns;
                },
              },
              {
                key: "isSymmetric",
                value: function () {
                  if (this.isSquare()) {
                    for (var t = 0; t < this.rows; t++)
                      for (var r = 0; r <= t; r++)
                        if (this.get(t, r) !== this.get(r, t)) return !1;
                    return !0;
                  }
                  return !1;
                },
              },
              {
                key: "isEchelonForm",
                value: function () {
                  for (
                    var t = 0, r = 0, e = -1, o = !0, n = !1;
                    t < this.rows && o;

                  ) {
                    for (r = 0, n = !1; r < this.columns && !1 === n; )
                      0 === this.get(t, r)
                        ? r++
                        : 1 === this.get(t, r) && r > e
                        ? ((n = !0), (e = r))
                        : ((o = !1), (n = !0));
                    t++;
                  }
                  return o;
                },
              },
              {
                key: "isReducedEchelonForm",
                value: function () {
                  for (
                    var t = 0, r = 0, e = -1, o = !0, n = !1;
                    t < this.rows && o;

                  ) {
                    for (r = 0, n = !1; r < this.columns && !1 === n; )
                      0 === this.get(t, r)
                        ? r++
                        : 1 === this.get(t, r) && r > e
                        ? ((n = !0), (e = r))
                        : ((o = !1), (n = !0));
                    for (var i = r + 1; i < this.rows; i++)
                      0 !== this.get(t, i) && (o = !1);
                    t++;
                  }
                  return o;
                },
              },
              {
                key: "echelonForm",
                value: function () {
                  for (
                    var t = this.clone(), r = 0, e = 0;
                    r < t.rows && e < t.columns;

                  ) {
                    for (var o = r, n = r; n < t.rows; n++)
                      t.get(n, e) > t.get(o, e) && (o = n);
                    if (0 === t.get(o, e)) e++;
                    else {
                      t.swapRows(r, o);
                      for (var i = t.get(r, e), s = e; s < t.columns; s++)
                        t.set(r, s, t.get(r, s) / i);
                      for (var u = r + 1; u < t.rows; u++) {
                        var a = t.get(u, e) / t.get(r, e);
                        t.set(u, e, 0);
                        for (var f = e + 1; f < t.columns; f++)
                          t.set(u, f, t.get(u, f) - t.get(r, f) * a);
                      }
                      r++, e++;
                    }
                  }
                  return t;
                },
              },
              {
                key: "reducedEchelonForm",
                value: function () {
                  for (
                    var t = this.echelonForm(),
                      r = t.columns,
                      e = t.rows,
                      o = e - 1;
                    o >= 0;

                  )
                    if (0 === t.maxRow(o)) o--;
                    else {
                      for (var n = 0, i = !1; n < e && !1 === i; )
                        1 === t.get(o, n) ? (i = !0) : n++;
                      for (var s = 0; s < o; s++)
                        for (var u = t.get(s, n), a = n; a < r; a++) {
                          var f = t.get(s, a) - u * t.get(o, a);
                          t.set(s, a, f);
                        }
                      o--;
                    }
                  return t;
                },
              },
              {
                key: "set",
                value: function () {
                  throw new Error("set method is unimplemented");
                },
              },
              {
                key: "get",
                value: function () {
                  throw new Error("get method is unimplemented");
                },
              },
              {
                key: "repeat",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if ("object" !== F(t))
                    throw new TypeError("options must be an object");
                  var r = t.rows,
                    e = void 0 === r ? 1 : r,
                    o = t.columns,
                    n = void 0 === o ? 1 : o;
                  if (!Number.isInteger(e) || e <= 0)
                    throw new TypeError("rows must be a positive integer");
                  if (!Number.isInteger(n) || n <= 0)
                    throw new TypeError("columns must be a positive integer");
                  for (
                    var i = new Y(this.rows * e, this.columns * n), s = 0;
                    s < e;
                    s++
                  )
                    for (var u = 0; u < n; u++)
                      i.setSubMatrix(this, this.rows * s, this.columns * u);
                  return i;
                },
              },
              {
                key: "fill",
                value: function (t) {
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++) this.set(r, e, t);
                  return this;
                },
              },
              {
                key: "neg",
                value: function () {
                  return this.mulS(-1);
                },
              },
              {
                key: "getRow",
                value: function (t) {
                  p(this, t);
                  for (var r = [], e = 0; e < this.columns; e++)
                    r.push(this.get(t, e));
                  return r;
                },
              },
              {
                key: "getRowVector",
                value: function (t) {
                  return Y.rowVector(this.getRow(t));
                },
              },
              {
                key: "setRow",
                value: function (t, r) {
                  p(this, t), (r = v(this, r));
                  for (var e = 0; e < this.columns; e++) this.set(t, e, r[e]);
                  return this;
                },
              },
              {
                key: "swapRows",
                value: function (t, r) {
                  p(this, t), p(this, r);
                  for (var e = 0; e < this.columns; e++) {
                    var o = this.get(t, e);
                    this.set(t, e, this.get(r, e)), this.set(r, e, o);
                  }
                  return this;
                },
              },
              {
                key: "getColumn",
                value: function (t) {
                  y(this, t);
                  for (var r = [], e = 0; e < this.rows; e++)
                    r.push(this.get(e, t));
                  return r;
                },
              },
              {
                key: "getColumnVector",
                value: function (t) {
                  return Y.columnVector(this.getColumn(t));
                },
              },
              {
                key: "setColumn",
                value: function (t, r) {
                  y(this, t), (r = m(this, r));
                  for (var e = 0; e < this.rows; e++) this.set(e, t, r[e]);
                  return this;
                },
              },
              {
                key: "swapColumns",
                value: function (t, r) {
                  y(this, t), y(this, r);
                  for (var e = 0; e < this.rows; e++) {
                    var o = this.get(e, t);
                    this.set(e, t, this.get(e, r)), this.set(e, r, o);
                  }
                  return this;
                },
              },
              {
                key: "addRowVector",
                value: function (t) {
                  t = v(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) + t[e]);
                  return this;
                },
              },
              {
                key: "subRowVector",
                value: function (t) {
                  t = v(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) - t[e]);
                  return this;
                },
              },
              {
                key: "mulRowVector",
                value: function (t) {
                  t = v(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) * t[e]);
                  return this;
                },
              },
              {
                key: "divRowVector",
                value: function (t) {
                  t = v(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) / t[e]);
                  return this;
                },
              },
              {
                key: "addColumnVector",
                value: function (t) {
                  t = m(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) + t[r]);
                  return this;
                },
              },
              {
                key: "subColumnVector",
                value: function (t) {
                  t = m(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) - t[r]);
                  return this;
                },
              },
              {
                key: "mulColumnVector",
                value: function (t) {
                  t = m(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) * t[r]);
                  return this;
                },
              },
              {
                key: "divColumnVector",
                value: function (t) {
                  t = m(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) / t[r]);
                  return this;
                },
              },
              {
                key: "mulRow",
                value: function (t, r) {
                  p(this, t);
                  for (var e = 0; e < this.columns; e++)
                    this.set(t, e, this.get(t, e) * r);
                  return this;
                },
              },
              {
                key: "mulColumn",
                value: function (t, r) {
                  y(this, t);
                  for (var e = 0; e < this.rows; e++)
                    this.set(e, t, this.get(e, t) * r);
                  return this;
                },
              },
              {
                key: "max",
                value: function () {
                  if (this.isEmpty()) return NaN;
                  for (var t = this.get(0, 0), r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.get(r, e) > t && (t = this.get(r, e));
                  return t;
                },
              },
              {
                key: "maxIndex",
                value: function () {
                  x(this);
                  for (
                    var t = this.get(0, 0), r = [0, 0], e = 0;
                    e < this.rows;
                    e++
                  )
                    for (var o = 0; o < this.columns; o++)
                      this.get(e, o) > t &&
                        ((t = this.get(e, o)), (r[0] = e), (r[1] = o));
                  return r;
                },
              },
              {
                key: "min",
                value: function () {
                  if (this.isEmpty()) return NaN;
                  for (var t = this.get(0, 0), r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.get(r, e) < t && (t = this.get(r, e));
                  return t;
                },
              },
              {
                key: "minIndex",
                value: function () {
                  x(this);
                  for (
                    var t = this.get(0, 0), r = [0, 0], e = 0;
                    e < this.rows;
                    e++
                  )
                    for (var o = 0; o < this.columns; o++)
                      this.get(e, o) < t &&
                        ((t = this.get(e, o)), (r[0] = e), (r[1] = o));
                  return r;
                },
              },
              {
                key: "maxRow",
                value: function (t) {
                  if ((p(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(t, 0), e = 1; e < this.columns; e++)
                    this.get(t, e) > r && (r = this.get(t, e));
                  return r;
                },
              },
              {
                key: "maxRowIndex",
                value: function (t) {
                  p(this, t), x(this);
                  for (
                    var r = this.get(t, 0), e = [t, 0], o = 1;
                    o < this.columns;
                    o++
                  )
                    this.get(t, o) > r && ((r = this.get(t, o)), (e[1] = o));
                  return e;
                },
              },
              {
                key: "minRow",
                value: function (t) {
                  if ((p(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(t, 0), e = 1; e < this.columns; e++)
                    this.get(t, e) < r && (r = this.get(t, e));
                  return r;
                },
              },
              {
                key: "minRowIndex",
                value: function (t) {
                  p(this, t), x(this);
                  for (
                    var r = this.get(t, 0), e = [t, 0], o = 1;
                    o < this.columns;
                    o++
                  )
                    this.get(t, o) < r && ((r = this.get(t, o)), (e[1] = o));
                  return e;
                },
              },
              {
                key: "maxColumn",
                value: function (t) {
                  if ((y(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(0, t), e = 1; e < this.rows; e++)
                    this.get(e, t) > r && (r = this.get(e, t));
                  return r;
                },
              },
              {
                key: "maxColumnIndex",
                value: function (t) {
                  y(this, t), x(this);
                  for (
                    var r = this.get(0, t), e = [0, t], o = 1;
                    o < this.rows;
                    o++
                  )
                    this.get(o, t) > r && ((r = this.get(o, t)), (e[0] = o));
                  return e;
                },
              },
              {
                key: "minColumn",
                value: function (t) {
                  if ((y(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(0, t), e = 1; e < this.rows; e++)
                    this.get(e, t) < r && (r = this.get(e, t));
                  return r;
                },
              },
              {
                key: "minColumnIndex",
                value: function (t) {
                  y(this, t), x(this);
                  for (
                    var r = this.get(0, t), e = [0, t], o = 1;
                    o < this.rows;
                    o++
                  )
                    this.get(o, t) < r && ((r = this.get(o, t)), (e[0] = o));
                  return e;
                },
              },
              {
                key: "diag",
                value: function () {
                  for (
                    var t = Math.min(this.rows, this.columns), r = [], e = 0;
                    e < t;
                    e++
                  )
                    r.push(this.get(e, e));
                  return r;
                },
              },
              {
                key: "norm",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "frobenius",
                    r = 0;
                  if ("max" === t) return this.max();
                  if ("frobenius" === t) {
                    for (var e = 0; e < this.rows; e++)
                      for (var o = 0; o < this.columns; o++)
                        r += this.get(e, o) * this.get(e, o);
                    return Math.sqrt(r);
                  }
                  throw new RangeError("unknown norm type: ".concat(t));
                },
              },
              {
                key: "cumulativeSum",
                value: function () {
                  for (var t = 0, r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      (t += this.get(r, e)), this.set(r, e, t);
                  return this;
                },
              },
              {
                key: "dot",
                value: function (r) {
                  t.isMatrix(r) && (r = r.to1DArray());
                  var e = this.to1DArray();
                  if (e.length !== r.length)
                    throw new RangeError("vectors do not have the same size");
                  for (var o = 0, n = 0; n < e.length; n++) o += e[n] * r[n];
                  return o;
                },
              },
              {
                key: "mmul",
                value: function (t) {
                  t = Y.checkMatrix(t);
                  for (
                    var r = this.rows,
                      e = this.columns,
                      o = t.columns,
                      n = new Y(r, o),
                      i = new Float64Array(e),
                      s = 0;
                    s < o;
                    s++
                  ) {
                    for (var u = 0; u < e; u++) i[u] = t.get(u, s);
                    for (var a = 0; a < r; a++) {
                      for (var f = 0, c = 0; c < e; c++)
                        f += this.get(a, c) * i[c];
                      n.set(a, s, f);
                    }
                  }
                  return n;
                },
              },
              {
                key: "strassen2x2",
                value: function (t) {
                  t = Y.checkMatrix(t);
                  var r = new Y(2, 2),
                    e = this.get(0, 0),
                    o = t.get(0, 0),
                    n = this.get(0, 1),
                    i = t.get(0, 1),
                    s = this.get(1, 0),
                    u = t.get(1, 0),
                    a = this.get(1, 1),
                    f = t.get(1, 1),
                    c = (e + a) * (o + f),
                    h = (s + a) * o,
                    l = e * (i - f),
                    p = a * (u - o),
                    y = (e + n) * f,
                    v = c + p - y + (n - a) * (u + f),
                    m = l + y,
                    g = h + p,
                    w = c - h + l + (s - e) * (o + i);
                  return (
                    r.set(0, 0, v),
                    r.set(0, 1, m),
                    r.set(1, 0, g),
                    r.set(1, 1, w),
                    r
                  );
                },
              },
              {
                key: "strassen3x3",
                value: function (t) {
                  t = Y.checkMatrix(t);
                  var r = new Y(3, 3),
                    e = this.get(0, 0),
                    o = this.get(0, 1),
                    n = this.get(0, 2),
                    i = this.get(1, 0),
                    s = this.get(1, 1),
                    u = this.get(1, 2),
                    a = this.get(2, 0),
                    f = this.get(2, 1),
                    c = this.get(2, 2),
                    h = t.get(0, 0),
                    l = t.get(0, 1),
                    p = t.get(0, 2),
                    y = t.get(1, 0),
                    v = t.get(1, 1),
                    m = t.get(1, 2),
                    g = t.get(2, 0),
                    w = t.get(2, 1),
                    b = t.get(2, 2),
                    d = (e - i) * (-l + v),
                    M = (-e + i + s) * (h - l + v),
                    x = (i + s) * (-h + l),
                    k = e * h,
                    S = (-e + a + f) * (h - p + m),
                    O = (-e + a) * (p - m),
                    E = (a + f) * (-h + p),
                    j = (-n + f + c) * (v + g - w),
                    R = (n - c) * (v - w),
                    P = n * g,
                    _ = (f + c) * (-g + w),
                    T = (-n + s + u) * (m + g - b),
                    C = (n - u) * (m - b),
                    N = (s + u) * (-g + b),
                    D = k + P + o * y,
                    I = (e + o + n - i - s - f - c) * v + M + x + k + j + P + _,
                    V = k + S + E + (e + o + n - s - u - a - f) * m + P + T + N,
                    q =
                      d + s * (-h + l + y - v - m - g + b) + M + k + P + T + C,
                    A = d + M + x + k + u * w,
                    F = P + T + C + N + i * p,
                    L =
                      k + S + O + f * (-h + p + y - v - m - g + w) + j + R + P,
                    B = j + R + P + _ + a * l,
                    z = k + S + O + E + c * b;
                  return (
                    r.set(0, 0, D),
                    r.set(0, 1, I),
                    r.set(0, 2, V),
                    r.set(1, 0, q),
                    r.set(1, 1, A),
                    r.set(1, 2, F),
                    r.set(2, 0, L),
                    r.set(2, 1, B),
                    r.set(2, 2, z),
                    r
                  );
                },
              },
              {
                key: "mmulStrassen",
                value: function (r) {
                  r = Y.checkMatrix(r);
                  var e = this.clone(),
                    o = e.rows,
                    n = e.columns,
                    i = r.rows,
                    s = r.columns;
                  function u(r, e, o) {
                    var n = r.rows,
                      i = r.columns;
                    if (n === e && i === o) return r;
                    var s = t.zeros(e, o);
                    return (s = s.setSubMatrix(r, 0, 0));
                  }
                  n !== i &&
                    console.warn(
                      "Multiplying "
                        .concat(o, " x ")
                        .concat(n, " and ")
                        .concat(i, " x ")
                        .concat(s, " matrix: dimensions do not match."),
                    );
                  var a = Math.max(o, i),
                    f = Math.max(n, s);
                  return (function r(e, o, n, i) {
                    if (n <= 512 || i <= 512) return e.mmul(o);
                    n % 2 == 1 && i % 2 == 1
                      ? ((e = u(e, n + 1, i + 1)), (o = u(o, n + 1, i + 1)))
                      : n % 2 == 1
                      ? ((e = u(e, n + 1, i)), (o = u(o, n + 1, i)))
                      : i % 2 == 1 &&
                        ((e = u(e, n, i + 1)), (o = u(o, n, i + 1)));
                    var s = parseInt(e.rows / 2, 10),
                      a = parseInt(e.columns / 2, 10),
                      f = e.subMatrix(0, s - 1, 0, a - 1),
                      c = o.subMatrix(0, s - 1, 0, a - 1),
                      h = e.subMatrix(0, s - 1, a, e.columns - 1),
                      l = o.subMatrix(0, s - 1, a, o.columns - 1),
                      p = e.subMatrix(s, e.rows - 1, 0, a - 1),
                      y = o.subMatrix(s, o.rows - 1, 0, a - 1),
                      v = e.subMatrix(s, e.rows - 1, a, e.columns - 1),
                      m = o.subMatrix(s, o.rows - 1, a, o.columns - 1),
                      g = r(t.add(f, v), t.add(c, m), s, a),
                      w = r(t.add(p, v), c, s, a),
                      b = r(f, t.sub(l, m), s, a),
                      d = r(v, t.sub(y, c), s, a),
                      M = r(t.add(f, h), m, s, a),
                      x = r(t.sub(p, f), t.add(c, l), s, a),
                      k = r(t.sub(h, v), t.add(y, m), s, a),
                      S = t.add(g, d);
                    S.sub(M), S.add(k);
                    var O = t.add(b, M),
                      E = t.add(w, d),
                      j = t.sub(g, w);
                    j.add(b), j.add(x);
                    var R = t.zeros(2 * S.rows, 2 * S.columns);
                    return (R = (R = (R = (R = R.setSubMatrix(
                      S,
                      0,
                      0,
                    )).setSubMatrix(O, S.rows, 0)).setSubMatrix(
                      E,
                      0,
                      S.columns,
                    )).setSubMatrix(j, S.rows, S.columns)).subMatrix(
                      0,
                      n - 1,
                      0,
                      i - 1,
                    );
                  })((e = u(e, a, f)), (r = u(r, a, f)), a, f);
                },
              },
              {
                key: "scaleRows",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if ("object" !== F(t))
                    throw new TypeError("options must be an object");
                  var r = t.min,
                    e = void 0 === r ? 0 : r,
                    o = t.max,
                    n = void 0 === o ? 1 : o;
                  if (!Number.isFinite(e))
                    throw new TypeError("min must be a number");
                  if (!Number.isFinite(n))
                    throw new TypeError("max must be a number");
                  if (e >= n)
                    throw new RangeError("min must be smaller than max");
                  for (
                    var i = new Y(this.rows, this.columns), s = 0;
                    s < this.rows;
                    s++
                  ) {
                    var a = this.getRow(s);
                    a.length > 0 && u(a, { min: e, max: n, output: a }),
                      i.setRow(s, a);
                  }
                  return i;
                },
              },
              {
                key: "scaleColumns",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if ("object" !== F(t))
                    throw new TypeError("options must be an object");
                  var r = t.min,
                    e = void 0 === r ? 0 : r,
                    o = t.max,
                    n = void 0 === o ? 1 : o;
                  if (!Number.isFinite(e))
                    throw new TypeError("min must be a number");
                  if (!Number.isFinite(n))
                    throw new TypeError("max must be a number");
                  if (e >= n)
                    throw new RangeError("min must be smaller than max");
                  for (
                    var i = new Y(this.rows, this.columns), s = 0;
                    s < this.columns;
                    s++
                  ) {
                    var a = this.getColumn(s);
                    a.length && u(a, { min: e, max: n, output: a }),
                      i.setColumn(s, a);
                  }
                  return i;
                },
              },
              {
                key: "flipRows",
                value: function () {
                  for (
                    var t = Math.ceil(this.columns / 2), r = 0;
                    r < this.rows;
                    r++
                  )
                    for (var e = 0; e < t; e++) {
                      var o = this.get(r, e),
                        n = this.get(r, this.columns - 1 - e);
                      this.set(r, e, n), this.set(r, this.columns - 1 - e, o);
                    }
                  return this;
                },
              },
              {
                key: "flipColumns",
                value: function () {
                  for (
                    var t = Math.ceil(this.rows / 2), r = 0;
                    r < this.columns;
                    r++
                  )
                    for (var e = 0; e < t; e++) {
                      var o = this.get(e, r),
                        n = this.get(this.rows - 1 - e, r);
                      this.set(e, r, n), this.set(this.rows - 1 - e, r, o);
                    }
                  return this;
                },
              },
              {
                key: "kroneckerProduct",
                value: function (t) {
                  t = Y.checkMatrix(t);
                  for (
                    var r = this.rows,
                      e = this.columns,
                      o = t.rows,
                      n = t.columns,
                      i = new Y(r * o, e * n),
                      s = 0;
                    s < r;
                    s++
                  )
                    for (var u = 0; u < e; u++)
                      for (var a = 0; a < o; a++)
                        for (var f = 0; f < n; f++)
                          i.set(
                            o * s + a,
                            n * u + f,
                            this.get(s, u) * t.get(a, f),
                          );
                  return i;
                },
              },
              {
                key: "kroneckerSum",
                value: function (t) {
                  if (
                    ((t = Y.checkMatrix(t)), !this.isSquare() || !t.isSquare())
                  )
                    throw new Error("Kronecker Sum needs two Square Matrices");
                  var r = this.rows,
                    e = t.rows,
                    o = this.kroneckerProduct(Y.eye(e, e)),
                    n = Y.eye(r, r).kroneckerProduct(t);
                  return o.add(n);
                },
              },
              {
                key: "transpose",
                value: function () {
                  for (
                    var t = new Y(this.columns, this.rows), r = 0;
                    r < this.rows;
                    r++
                  )
                    for (var e = 0; e < this.columns; e++)
                      t.set(e, r, this.get(r, e));
                  return t;
                },
              },
              {
                key: "sortRows",
                value: function () {
                  for (
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : W,
                      r = 0;
                    r < this.rows;
                    r++
                  )
                    this.setRow(r, this.getRow(r).sort(t));
                  return this;
                },
              },
              {
                key: "sortColumns",
                value: function () {
                  for (
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : W,
                      r = 0;
                    r < this.columns;
                    r++
                  )
                    this.setColumn(r, this.getColumn(r).sort(t));
                  return this;
                },
              },
              {
                key: "subMatrix",
                value: function (t, r, e, o) {
                  b(this, t, r, e, o);
                  for (var n = new Y(r - t + 1, o - e + 1), i = t; i <= r; i++)
                    for (var s = e; s <= o; s++)
                      n.set(i - t, s - e, this.get(i, s));
                  return n;
                },
              },
              {
                key: "subMatrixRow",
                value: function (t, r, e) {
                  if (
                    (void 0 === r && (r = 0),
                    void 0 === e && (e = this.columns - 1),
                    r > e ||
                      r < 0 ||
                      r >= this.columns ||
                      e < 0 ||
                      e >= this.columns)
                  )
                    throw new RangeError("Argument out of range");
                  for (
                    var o = new Y(t.length, e - r + 1), n = 0;
                    n < t.length;
                    n++
                  )
                    for (var i = r; i <= e; i++) {
                      if (t[n] < 0 || t[n] >= this.rows)
                        throw new RangeError(
                          "Row index out of range: ".concat(t[n]),
                        );
                      o.set(n, i - r, this.get(t[n], i));
                    }
                  return o;
                },
              },
              {
                key: "subMatrixColumn",
                value: function (t, r, e) {
                  if (
                    (void 0 === r && (r = 0),
                    void 0 === e && (e = this.rows - 1),
                    r > e || r < 0 || r >= this.rows || e < 0 || e >= this.rows)
                  )
                    throw new RangeError("Argument out of range");
                  for (
                    var o = new Y(e - r + 1, t.length), n = 0;
                    n < t.length;
                    n++
                  )
                    for (var i = r; i <= e; i++) {
                      if (t[n] < 0 || t[n] >= this.columns)
                        throw new RangeError(
                          "Column index out of range: ".concat(t[n]),
                        );
                      o.set(i - r, n, this.get(i, t[n]));
                    }
                  return o;
                },
              },
              {
                key: "setSubMatrix",
                value: function (t, r, e) {
                  if ((t = Y.checkMatrix(t)).isEmpty()) return this;
                  b(this, r, r + t.rows - 1, e, e + t.columns - 1);
                  for (var o = 0; o < t.rows; o++)
                    for (var n = 0; n < t.columns; n++)
                      this.set(r + o, e + n, t.get(o, n));
                  return this;
                },
              },
              {
                key: "selection",
                value: function (t, r) {
                  g(this, t), w(this, r);
                  for (
                    var e = new Y(t.length, r.length), o = 0;
                    o < t.length;
                    o++
                  )
                    for (var n = t[o], i = 0; i < r.length; i++) {
                      var s = r[i];
                      e.set(o, i, this.get(n, s));
                    }
                  return e;
                },
              },
              {
                key: "trace",
                value: function () {
                  for (
                    var t = Math.min(this.rows, this.columns), r = 0, e = 0;
                    e < t;
                    e++
                  )
                    r += this.get(e, e);
                  return r;
                },
              },
              {
                key: "clone",
                value: function () {
                  for (
                    var t = new Y(this.rows, this.columns), r = 0;
                    r < this.rows;
                    r++
                  )
                    for (var e = 0; e < this.columns; e++)
                      t.set(r, e, this.get(r, e));
                  return t;
                },
              },
              {
                key: "sum",
                value: function (t) {
                  switch (t) {
                    case "row":
                      return (function (t) {
                        for (var r = d(t.rows), e = 0; e < t.rows; ++e)
                          for (var o = 0; o < t.columns; ++o)
                            r[e] += t.get(e, o);
                        return r;
                      })(this);
                    case "column":
                      return (function (t) {
                        for (var r = d(t.columns), e = 0; e < t.rows; ++e)
                          for (var o = 0; o < t.columns; ++o)
                            r[o] += t.get(e, o);
                        return r;
                      })(this);
                    case void 0:
                      return (function (t) {
                        for (var r = 0, e = 0; e < t.rows; e++)
                          for (var o = 0; o < t.columns; o++) r += t.get(e, o);
                        return r;
                      })(this);
                    default:
                      throw new Error("invalid option: ".concat(t));
                  }
                },
              },
              {
                key: "product",
                value: function (t) {
                  switch (t) {
                    case "row":
                      return (function (t) {
                        for (var r = d(t.rows, 1), e = 0; e < t.rows; ++e)
                          for (var o = 0; o < t.columns; ++o)
                            r[e] *= t.get(e, o);
                        return r;
                      })(this);
                    case "column":
                      return (function (t) {
                        for (var r = d(t.columns, 1), e = 0; e < t.rows; ++e)
                          for (var o = 0; o < t.columns; ++o)
                            r[o] *= t.get(e, o);
                        return r;
                      })(this);
                    case void 0:
                      return (function (t) {
                        for (var r = 1, e = 0; e < t.rows; e++)
                          for (var o = 0; o < t.columns; o++) r *= t.get(e, o);
                        return r;
                      })(this);
                    default:
                      throw new Error("invalid option: ".concat(t));
                  }
                },
              },
              {
                key: "mean",
                value: function (t) {
                  var r = this.sum(t);
                  switch (t) {
                    case "row":
                      for (var e = 0; e < this.rows; e++) r[e] /= this.columns;
                      return r;
                    case "column":
                      for (var o = 0; o < this.columns; o++) r[o] /= this.rows;
                      return r;
                    case void 0:
                      return r / this.size;
                    default:
                      throw new Error("invalid option: ".concat(t));
                  }
                },
              },
              {
                key: "variance",
                value: function (t) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    ("object" === F(t) && ((r = t), (t = void 0)),
                    "object" !== F(r))
                  )
                    throw new TypeError("options must be an object");
                  var e = r,
                    o = e.unbiased,
                    i = void 0 === o || o,
                    s = e.mean,
                    u = void 0 === s ? this.mean(t) : s;
                  if ("boolean" != typeof i)
                    throw new TypeError("unbiased must be a boolean");
                  switch (t) {
                    case "row":
                      if (!n(u)) throw new TypeError("mean must be an array");
                      return k(this, i, u);
                    case "column":
                      if (!n(u)) throw new TypeError("mean must be an array");
                      return S(this, i, u);
                    case void 0:
                      if ("number" != typeof u)
                        throw new TypeError("mean must be a number");
                      return O(this, i, u);
                    default:
                      throw new Error("invalid option: ".concat(t));
                  }
                },
              },
              {
                key: "standardDeviation",
                value: function (t, r) {
                  "object" === F(t) && ((r = t), (t = void 0));
                  var e = this.variance(t, r);
                  if (void 0 === t) return Math.sqrt(e);
                  for (var o = 0; o < e.length; o++) e[o] = Math.sqrt(e[o]);
                  return e;
                },
              },
              {
                key: "center",
                value: function (t) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    ("object" === F(t) && ((r = t), (t = void 0)),
                    "object" !== F(r))
                  )
                    throw new TypeError("options must be an object");
                  var e = r,
                    o = e.center,
                    i = void 0 === o ? this.mean(t) : o;
                  switch (t) {
                    case "row":
                      if (!n(i)) throw new TypeError("center must be an array");
                      return E(this, i), this;
                    case "column":
                      if (!n(i)) throw new TypeError("center must be an array");
                      return j(this, i), this;
                    case void 0:
                      if ("number" != typeof i)
                        throw new TypeError("center must be a number");
                      return R(this, i), this;
                    default:
                      throw new Error("invalid option: ".concat(t));
                  }
                },
              },
              {
                key: "scale",
                value: function (t) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    ("object" === F(t) && ((r = t), (t = void 0)),
                    "object" !== F(r))
                  )
                    throw new TypeError("options must be an object");
                  var e = r.scale;
                  switch (t) {
                    case "row":
                      if (void 0 === e) e = P(this);
                      else if (!n(e))
                        throw new TypeError("scale must be an array");
                      return _(this, e), this;
                    case "column":
                      if (void 0 === e) e = T(this);
                      else if (!n(e))
                        throw new TypeError("scale must be an array");
                      return C(this, e), this;
                    case void 0:
                      if (void 0 === e) e = N(this);
                      else if ("number" != typeof e)
                        throw new TypeError("scale must be a number");
                      return D(this, e), this;
                    default:
                      throw new Error("invalid option: ".concat(t));
                  }
                },
              },
              {
                key: "toString",
                value: function (t) {
                  return c(this, t);
                },
              },
            ],
            [
              {
                key: "from1DArray",
                value: function (t, r, e) {
                  if (t * r !== e.length)
                    throw new RangeError(
                      "data length does not match given dimensions",
                    );
                  for (var o = new Y(t, r), n = 0; n < t; n++)
                    for (var i = 0; i < r; i++) o.set(n, i, e[n * r + i]);
                  return o;
                },
              },
              {
                key: "rowVector",
                value: function (t) {
                  for (var r = new Y(1, t.length), e = 0; e < t.length; e++)
                    r.set(0, e, t[e]);
                  return r;
                },
              },
              {
                key: "columnVector",
                value: function (t) {
                  for (var r = new Y(t.length, 1), e = 0; e < t.length; e++)
                    r.set(e, 0, t[e]);
                  return r;
                },
              },
              {
                key: "zeros",
                value: function (t, r) {
                  return new Y(t, r);
                },
              },
              {
                key: "ones",
                value: function (t, r) {
                  return new Y(t, r).fill(1);
                },
              },
              {
                key: "rand",
                value: function (t, r) {
                  var e =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if ("object" !== F(e))
                    throw new TypeError("options must be an object");
                  for (
                    var o = e.random,
                      n = void 0 === o ? Math.random : o,
                      i = new Y(t, r),
                      s = 0;
                    s < t;
                    s++
                  )
                    for (var u = 0; u < r; u++) i.set(s, u, n());
                  return i;
                },
              },
              {
                key: "randInt",
                value: function (t, r) {
                  var e =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if ("object" !== F(e))
                    throw new TypeError("options must be an object");
                  var o = e.min,
                    n = void 0 === o ? 0 : o,
                    i = e.max,
                    s = void 0 === i ? 1e3 : i,
                    u = e.random,
                    a = void 0 === u ? Math.random : u;
                  if (!Number.isInteger(n))
                    throw new TypeError("min must be an integer");
                  if (!Number.isInteger(s))
                    throw new TypeError("max must be an integer");
                  if (n >= s)
                    throw new RangeError("min must be smaller than max");
                  for (var f = s - n, c = new Y(t, r), h = 0; h < t; h++)
                    for (var l = 0; l < r; l++) {
                      var p = n + Math.round(a() * f);
                      c.set(h, l, p);
                    }
                  return c;
                },
              },
              {
                key: "eye",
                value: function (t, r, e) {
                  void 0 === r && (r = t), void 0 === e && (e = 1);
                  for (
                    var o = Math.min(t, r), n = this.zeros(t, r), i = 0;
                    i < o;
                    i++
                  )
                    n.set(i, i, e);
                  return n;
                },
              },
              {
                key: "diag",
                value: function (t, r, e) {
                  var o = t.length;
                  void 0 === r && (r = o), void 0 === e && (e = r);
                  for (
                    var n = Math.min(o, r, e), i = this.zeros(r, e), s = 0;
                    s < n;
                    s++
                  )
                    i.set(s, s, t[s]);
                  return i;
                },
              },
              {
                key: "min",
                value: function (t, r) {
                  (t = this.checkMatrix(t)), (r = this.checkMatrix(r));
                  for (
                    var e = t.rows, o = t.columns, n = new Y(e, o), i = 0;
                    i < e;
                    i++
                  )
                    for (var s = 0; s < o; s++)
                      n.set(i, s, Math.min(t.get(i, s), r.get(i, s)));
                  return n;
                },
              },
              {
                key: "max",
                value: function (t, r) {
                  (t = this.checkMatrix(t)), (r = this.checkMatrix(r));
                  for (
                    var e = t.rows, o = t.columns, n = new this(e, o), i = 0;
                    i < e;
                    i++
                  )
                    for (var s = 0; s < o; s++)
                      n.set(i, s, Math.max(t.get(i, s), r.get(i, s)));
                  return n;
                },
              },
              {
                key: "checkMatrix",
                value: function (r) {
                  return t.isMatrix(r) ? r : new Y(r);
                },
              },
              {
                key: "isMatrix",
                value: function (t) {
                  return null != t && "Matrix" === t.klass;
                },
              },
            ],
          ),
          t
        );
      })();
      function W(t, r) {
        return t - r;
      }
      (U.prototype.klass = "Matrix"),
        "undefined" != typeof Symbol &&
          (U.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return c(this);
          }),
        (U.random = U.rand),
        (U.randomInt = U.randInt),
        (U.diagonal = U.diag),
        (U.prototype.diagonal = U.prototype.diag),
        (U.identity = U.eye),
        (U.prototype.negate = U.prototype.neg),
        (U.prototype.tensorProduct = U.prototype.kroneckerProduct);
      var Q,
        J,
        Y = (function (t) {
          !(function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(r && r.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              r && I(t, r);
          })(e, t);
          var r = V(e);
          function e(t, o) {
            var i;
            if ((L(this, e), (i = r.call(this)), e.isMatrix(t)))
              return q(i, t.clone());
            if (Number.isInteger(t) && t >= 0) {
              if (((i.data = []), !(Number.isInteger(o) && o >= 0)))
                throw new TypeError("nColumns must be a positive integer");
              for (var s = 0; s < t; s++) i.data.push(new Float64Array(o));
            } else {
              if (!n(t))
                throw new TypeError(
                  "First argument must be a positive number or an array",
                );
              var u = t;
              if ("number" != typeof (o = (t = u.length) ? u[0].length : 0))
                throw new TypeError(
                  "Data must be a 2D array with at least one element",
                );
              i.data = [];
              for (var a = 0; a < t; a++) {
                if (u[a].length !== o)
                  throw new RangeError("Inconsistent array dimensions");
                i.data.push(Float64Array.from(u[a]));
              }
            }
            return (i.rows = t), (i.columns = o), i;
          }
          return (
            z(e, [
              {
                key: "set",
                value: function (t, r, e) {
                  return (this.data[t][r] = e), this;
                },
              },
              {
                key: "get",
                value: function (t, r) {
                  return this.data[t][r];
                },
              },
              {
                key: "removeRow",
                value: function (t) {
                  return (
                    p(this, t), this.data.splice(t, 1), (this.rows -= 1), this
                  );
                },
              },
              {
                key: "addRow",
                value: function (t, r) {
                  return (
                    void 0 === r && ((r = t), (t = this.rows)),
                    p(this, t, !0),
                    (r = Float64Array.from(v(this, r))),
                    this.data.splice(t, 0, r),
                    (this.rows += 1),
                    this
                  );
                },
              },
              {
                key: "removeColumn",
                value: function (t) {
                  y(this, t);
                  for (var r = 0; r < this.rows; r++) {
                    for (
                      var e = new Float64Array(this.columns - 1), o = 0;
                      o < t;
                      o++
                    )
                      e[o] = this.data[r][o];
                    for (var n = t + 1; n < this.columns; n++)
                      e[n - 1] = this.data[r][n];
                    this.data[r] = e;
                  }
                  return (this.columns -= 1), this;
                },
              },
              {
                key: "addColumn",
                value: function (t, r) {
                  void 0 === r && ((r = t), (t = this.columns)),
                    y(this, t, !0),
                    (r = m(this, r));
                  for (var e = 0; e < this.rows; e++) {
                    for (
                      var o = new Float64Array(this.columns + 1), n = 0;
                      n < t;
                      n++
                    )
                      o[n] = this.data[e][n];
                    for (o[n++] = r[e]; n < this.columns + 1; n++)
                      o[n] = this.data[e][n - 1];
                    this.data[e] = o;
                  }
                  return (this.columns += 1), this;
                },
              },
            ]),
            e
          );
        })(U);
      function H(t) {
        return (H =
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
      function K(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function X(t, r) {
        return (X =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function G(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = $(t);
          if (r) {
            var n = $(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Z(this, e);
        };
      }
      function Z(t, r) {
        if (r && ("object" === H(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function $(t) {
        return ($ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      (J = Y),
        ((Q = U).prototype.add = function (t) {
          return "number" == typeof t ? this.addS(t) : this.addM(t);
        }),
        (Q.prototype.addS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) + t);
          return this;
        }),
        (Q.prototype.addM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) + t.get(r, e));
          return this;
        }),
        (Q.add = function (t, r) {
          return new J(t).add(r);
        }),
        (Q.prototype.sub = function (t) {
          return "number" == typeof t ? this.subS(t) : this.subM(t);
        }),
        (Q.prototype.subS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) - t);
          return this;
        }),
        (Q.prototype.subM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) - t.get(r, e));
          return this;
        }),
        (Q.sub = function (t, r) {
          return new J(t).sub(r);
        }),
        (Q.prototype.subtract = Q.prototype.sub),
        (Q.prototype.subtractS = Q.prototype.subS),
        (Q.prototype.subtractM = Q.prototype.subM),
        (Q.subtract = Q.sub),
        (Q.prototype.mul = function (t) {
          return "number" == typeof t ? this.mulS(t) : this.mulM(t);
        }),
        (Q.prototype.mulS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) * t);
          return this;
        }),
        (Q.prototype.mulM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) * t.get(r, e));
          return this;
        }),
        (Q.mul = function (t, r) {
          return new J(t).mul(r);
        }),
        (Q.prototype.multiply = Q.prototype.mul),
        (Q.prototype.multiplyS = Q.prototype.mulS),
        (Q.prototype.multiplyM = Q.prototype.mulM),
        (Q.multiply = Q.mul),
        (Q.prototype.div = function (t) {
          return "number" == typeof t ? this.divS(t) : this.divM(t);
        }),
        (Q.prototype.divS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) / t);
          return this;
        }),
        (Q.prototype.divM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) / t.get(r, e));
          return this;
        }),
        (Q.div = function (t, r) {
          return new J(t).div(r);
        }),
        (Q.prototype.divide = Q.prototype.div),
        (Q.prototype.divideS = Q.prototype.divS),
        (Q.prototype.divideM = Q.prototype.divM),
        (Q.divide = Q.div),
        (Q.prototype.mod = function (t) {
          return "number" == typeof t ? this.modS(t) : this.modM(t);
        }),
        (Q.prototype.modS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) % t);
          return this;
        }),
        (Q.prototype.modM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) % t.get(r, e));
          return this;
        }),
        (Q.mod = function (t, r) {
          return new J(t).mod(r);
        }),
        (Q.prototype.modulus = Q.prototype.mod),
        (Q.prototype.modulusS = Q.prototype.modS),
        (Q.prototype.modulusM = Q.prototype.modM),
        (Q.modulus = Q.mod),
        (Q.prototype.and = function (t) {
          return "number" == typeof t ? this.andS(t) : this.andM(t);
        }),
        (Q.prototype.andS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) & t);
          return this;
        }),
        (Q.prototype.andM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) & t.get(r, e));
          return this;
        }),
        (Q.and = function (t, r) {
          return new J(t).and(r);
        }),
        (Q.prototype.or = function (t) {
          return "number" == typeof t ? this.orS(t) : this.orM(t);
        }),
        (Q.prototype.orS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) | t);
          return this;
        }),
        (Q.prototype.orM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) | t.get(r, e));
          return this;
        }),
        (Q.or = function (t, r) {
          return new J(t).or(r);
        }),
        (Q.prototype.xor = function (t) {
          return "number" == typeof t ? this.xorS(t) : this.xorM(t);
        }),
        (Q.prototype.xorS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) ^ t);
          return this;
        }),
        (Q.prototype.xorM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) ^ t.get(r, e));
          return this;
        }),
        (Q.xor = function (t, r) {
          return new J(t).xor(r);
        }),
        (Q.prototype.leftShift = function (t) {
          return "number" == typeof t ? this.leftShiftS(t) : this.leftShiftM(t);
        }),
        (Q.prototype.leftShiftS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) << t);
          return this;
        }),
        (Q.prototype.leftShiftM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) << t.get(r, e));
          return this;
        }),
        (Q.leftShift = function (t, r) {
          return new J(t).leftShift(r);
        }),
        (Q.prototype.signPropagatingRightShift = function (t) {
          return "number" == typeof t
            ? this.signPropagatingRightShiftS(t)
            : this.signPropagatingRightShiftM(t);
        }),
        (Q.prototype.signPropagatingRightShiftS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) >> t);
          return this;
        }),
        (Q.prototype.signPropagatingRightShiftM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) >> t.get(r, e));
          return this;
        }),
        (Q.signPropagatingRightShift = function (t, r) {
          return new J(t).signPropagatingRightShift(r);
        }),
        (Q.prototype.rightShift = function (t) {
          return "number" == typeof t
            ? this.rightShiftS(t)
            : this.rightShiftM(t);
        }),
        (Q.prototype.rightShiftS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) >>> t);
          return this;
        }),
        (Q.prototype.rightShiftM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) >>> t.get(r, e));
          return this;
        }),
        (Q.rightShift = function (t, r) {
          return new J(t).rightShift(r);
        }),
        (Q.prototype.zeroFillRightShift = Q.prototype.rightShift),
        (Q.prototype.zeroFillRightShiftS = Q.prototype.rightShiftS),
        (Q.prototype.zeroFillRightShiftM = Q.prototype.rightShiftM),
        (Q.zeroFillRightShift = Q.rightShift),
        (Q.prototype.not = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, ~this.get(t, r));
          return this;
        }),
        (Q.not = function (t) {
          return new J(t).not();
        }),
        (Q.prototype.abs = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.abs(this.get(t, r)));
          return this;
        }),
        (Q.abs = function (t) {
          return new J(t).abs();
        }),
        (Q.prototype.acos = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.acos(this.get(t, r)));
          return this;
        }),
        (Q.acos = function (t) {
          return new J(t).acos();
        }),
        (Q.prototype.acosh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.acosh(this.get(t, r)));
          return this;
        }),
        (Q.acosh = function (t) {
          return new J(t).acosh();
        }),
        (Q.prototype.asin = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.asin(this.get(t, r)));
          return this;
        }),
        (Q.asin = function (t) {
          return new J(t).asin();
        }),
        (Q.prototype.asinh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.asinh(this.get(t, r)));
          return this;
        }),
        (Q.asinh = function (t) {
          return new J(t).asinh();
        }),
        (Q.prototype.atan = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.atan(this.get(t, r)));
          return this;
        }),
        (Q.atan = function (t) {
          return new J(t).atan();
        }),
        (Q.prototype.atanh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.atanh(this.get(t, r)));
          return this;
        }),
        (Q.atanh = function (t) {
          return new J(t).atanh();
        }),
        (Q.prototype.cbrt = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.cbrt(this.get(t, r)));
          return this;
        }),
        (Q.cbrt = function (t) {
          return new J(t).cbrt();
        }),
        (Q.prototype.ceil = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.ceil(this.get(t, r)));
          return this;
        }),
        (Q.ceil = function (t) {
          return new J(t).ceil();
        }),
        (Q.prototype.clz32 = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.clz32(this.get(t, r)));
          return this;
        }),
        (Q.clz32 = function (t) {
          return new J(t).clz32();
        }),
        (Q.prototype.cos = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.cos(this.get(t, r)));
          return this;
        }),
        (Q.cos = function (t) {
          return new J(t).cos();
        }),
        (Q.prototype.cosh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.cosh(this.get(t, r)));
          return this;
        }),
        (Q.cosh = function (t) {
          return new J(t).cosh();
        }),
        (Q.prototype.exp = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.exp(this.get(t, r)));
          return this;
        }),
        (Q.exp = function (t) {
          return new J(t).exp();
        }),
        (Q.prototype.expm1 = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.expm1(this.get(t, r)));
          return this;
        }),
        (Q.expm1 = function (t) {
          return new J(t).expm1();
        }),
        (Q.prototype.floor = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.floor(this.get(t, r)));
          return this;
        }),
        (Q.floor = function (t) {
          return new J(t).floor();
        }),
        (Q.prototype.fround = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.fround(this.get(t, r)));
          return this;
        }),
        (Q.fround = function (t) {
          return new J(t).fround();
        }),
        (Q.prototype.log = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.log(this.get(t, r)));
          return this;
        }),
        (Q.log = function (t) {
          return new J(t).log();
        }),
        (Q.prototype.log1p = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.log1p(this.get(t, r)));
          return this;
        }),
        (Q.log1p = function (t) {
          return new J(t).log1p();
        }),
        (Q.prototype.log10 = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.log10(this.get(t, r)));
          return this;
        }),
        (Q.log10 = function (t) {
          return new J(t).log10();
        }),
        (Q.prototype.log2 = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.log2(this.get(t, r)));
          return this;
        }),
        (Q.log2 = function (t) {
          return new J(t).log2();
        }),
        (Q.prototype.round = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.round(this.get(t, r)));
          return this;
        }),
        (Q.round = function (t) {
          return new J(t).round();
        }),
        (Q.prototype.sign = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.sign(this.get(t, r)));
          return this;
        }),
        (Q.sign = function (t) {
          return new J(t).sign();
        }),
        (Q.prototype.sin = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.sin(this.get(t, r)));
          return this;
        }),
        (Q.sin = function (t) {
          return new J(t).sin();
        }),
        (Q.prototype.sinh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.sinh(this.get(t, r)));
          return this;
        }),
        (Q.sinh = function (t) {
          return new J(t).sinh();
        }),
        (Q.prototype.sqrt = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.sqrt(this.get(t, r)));
          return this;
        }),
        (Q.sqrt = function (t) {
          return new J(t).sqrt();
        }),
        (Q.prototype.tan = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.tan(this.get(t, r)));
          return this;
        }),
        (Q.tan = function (t) {
          return new J(t).tan();
        }),
        (Q.prototype.tanh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.tanh(this.get(t, r)));
          return this;
        }),
        (Q.tanh = function (t) {
          return new J(t).tanh();
        }),
        (Q.prototype.trunc = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.trunc(this.get(t, r)));
          return this;
        }),
        (Q.trunc = function (t) {
          return new J(t).trunc();
        }),
        (Q.pow = function (t, r) {
          return new J(t).pow(r);
        }),
        (Q.prototype.pow = function (t) {
          return "number" == typeof t ? this.powS(t) : this.powM(t);
        }),
        (Q.prototype.powS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, Math.pow(this.get(r, e), t));
          return this;
        }),
        (Q.prototype.powM = function (t) {
          if (
            ((t = J.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, Math.pow(this.get(r, e), t.get(r, e)));
          return this;
        });
      var tt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && X(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = G(i);
        function i(t, r, e) {
          var o;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            ((o = n.call(this)).matrix = t),
            (o.rows = r),
            (o.columns = e),
            o
          );
        }
        return (
          (r = i),
          e && K(r.prototype, e),
          o && K(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(U);
      function rt(t) {
        return (rt =
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
      function et(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function ot(t, r) {
        return (ot =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function nt(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = st(t);
          if (r) {
            var n = st(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return it(this, e);
        };
      }
      function it(t, r) {
        if (r && ("object" === rt(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function st(t) {
        return (st = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var ut = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && ot(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = nt(i);
        function i(t, r) {
          var e;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            y(t, r),
            ((e = n.call(this, t, t.rows, 1)).column = r),
            e
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return this.matrix.set(t, this.column, e), this;
              },
            },
            {
              key: "get",
              value: function (t) {
                return this.matrix.get(t, this.column);
              },
            },
          ]) && et(r.prototype, e),
          o && et(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function at(t) {
        return (at =
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
      function ft(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function ct(t, r) {
        return (ct =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function ht(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = pt(t);
          if (r) {
            var n = pt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return lt(this, e);
        };
      }
      function lt(t, r) {
        if (r && ("object" === at(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function pt(t) {
        return (pt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var yt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && ct(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = ht(i);
        function i(t, r) {
          var e;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            w(t, r),
            ((e = n.call(this, t, t.rows, r.length)).columnIndices = r),
            e
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return this.matrix.set(t, this.columnIndices[r], e), this;
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.matrix.get(t, this.columnIndices[r]);
              },
            },
          ]) && ft(r.prototype, e),
          o && ft(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function vt(t) {
        return (vt =
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
      function mt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function gt(t, r) {
        return (gt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function wt(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = dt(t);
          if (r) {
            var n = dt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return bt(this, e);
        };
      }
      function bt(t, r) {
        if (r && ("object" === vt(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function dt(t) {
        return (dt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Mt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && gt(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = wt(i);
        function i(t) {
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            n.call(this, t, t.rows, t.columns)
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return this.matrix.set(t, this.columns - r - 1, e), this;
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.matrix.get(t, this.columns - r - 1);
              },
            },
          ]) && mt(r.prototype, e),
          o && mt(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function xt(t) {
        return (xt =
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
      function kt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function St(t, r) {
        return (St =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Ot(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = jt(t);
          if (r) {
            var n = jt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Et(this, e);
        };
      }
      function Et(t, r) {
        if (r && ("object" === xt(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function jt(t) {
        return (jt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Rt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && St(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = Ot(i);
        function i(t) {
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            n.call(this, t, t.rows, t.columns)
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return this.matrix.set(this.rows - t - 1, r, e), this;
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.matrix.get(this.rows - t - 1, r);
              },
            },
          ]) && kt(r.prototype, e),
          o && kt(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function Pt(t) {
        return (Pt =
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
      function _t(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Tt(t, r) {
        return (Tt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Ct(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = Dt(t);
          if (r) {
            var n = Dt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Nt(this, e);
        };
      }
      function Nt(t, r) {
        if (r && ("object" === Pt(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function Dt(t) {
        return (Dt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var It = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && Tt(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = Ct(i);
        function i(t, r) {
          var e;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            p(t, r),
            ((e = n.call(this, t, 1, t.columns)).row = r),
            e
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return this.matrix.set(this.row, r, e), this;
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.matrix.get(this.row, r);
              },
            },
          ]) && _t(r.prototype, e),
          o && _t(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function Vt(t) {
        return (Vt =
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
      function qt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function At(t, r) {
        return (At =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Ft(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = Bt(t);
          if (r) {
            var n = Bt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Lt(this, e);
        };
      }
      function Lt(t, r) {
        if (r && ("object" === Vt(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function Bt(t) {
        return (Bt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var zt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && At(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = Ft(i);
        function i(t, r) {
          var e;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            g(t, r),
            ((e = n.call(this, t, r.length, t.columns)).rowIndices = r),
            e
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return this.matrix.set(this.rowIndices[t], r, e), this;
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.matrix.get(this.rowIndices[t], r);
              },
            },
          ]) && qt(r.prototype, e),
          o && qt(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function Ut(t) {
        return (Ut =
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
      function Wt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Qt(t, r) {
        return (Qt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Jt(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = Ht(t);
          if (r) {
            var n = Ht(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Yt(this, e);
        };
      }
      function Yt(t, r) {
        if (r && ("object" === Ut(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function Ht(t) {
        return (Ht = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Kt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && Qt(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = Jt(i);
        function i(t, r, e) {
          var o;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            g(t, r),
            w(t, e),
            ((o = n.call(this, t, r.length, e.length)).rowIndices = r),
            (o.columnIndices = e),
            o
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return (
                  this.matrix.set(this.rowIndices[t], this.columnIndices[r], e),
                  this
                );
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.matrix.get(
                  this.rowIndices[t],
                  this.columnIndices[r],
                );
              },
            },
          ]) && Wt(r.prototype, e),
          o && Wt(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function Xt(t) {
        return (Xt =
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
      function Gt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Zt(t, r) {
        return (Zt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function $t(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = rr(t);
          if (r) {
            var n = rr(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return tr(this, e);
        };
      }
      function tr(t, r) {
        if (r && ("object" === Xt(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function rr(t) {
        return (rr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var er = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && Zt(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = $t(i);
        function i(t, r, e, o, s) {
          var u;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            b(t, r, e, o, s),
            ((u = n.call(this, t, e - r + 1, s - o + 1)).startRow = r),
            (u.startColumn = o),
            u
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return (
                  this.matrix.set(this.startRow + t, this.startColumn + r, e),
                  this
                );
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.matrix.get(this.startRow + t, this.startColumn + r);
              },
            },
          ]) && Gt(r.prototype, e),
          o && Gt(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function or(t) {
        return (or =
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
      function nr(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function ir(t, r) {
        return (ir =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function sr(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = ar(t);
          if (r) {
            var n = ar(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return ur(this, e);
        };
      }
      function ur(t, r) {
        if (r && ("object" === or(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function ar(t) {
        return (ar = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var fr = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && ir(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = sr(i);
        function i(t) {
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            n.call(this, t, t.columns, t.rows)
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return this.matrix.set(r, t, e), this;
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.matrix.get(r, t);
              },
            },
          ]) && nr(r.prototype, e),
          o && nr(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(tt);
      function cr(t) {
        return (cr =
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
      function hr(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function lr(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function pr(t, r) {
        return (pr =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function yr(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = mr(t);
          if (r) {
            var n = mr(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return vr(this, e);
        };
      }
      function vr(t, r) {
        if (r && ("object" === cr(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function mr(t) {
        return (mr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var gr = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && pr(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = yr(i);
        function i(t) {
          var r,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          hr(this, i);
          var o = e.rows,
            s = void 0 === o ? 1 : o;
          if (t.length % s != 0)
            throw new Error(
              "the data length is not divisible by the number of rows",
            );
          return (
            ((r = n.call(this)).rows = s),
            (r.columns = t.length / s),
            (r.data = t),
            r
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                var o = this._calculateIndex(t, r);
                return (this.data[o] = e), this;
              },
            },
            {
              key: "get",
              value: function (t, r) {
                var e = this._calculateIndex(t, r);
                return this.data[e];
              },
            },
            {
              key: "_calculateIndex",
              value: function (t, r) {
                return t * this.columns + r;
              },
            },
          ]) && lr(r.prototype, e),
          o && lr(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(U);
      function wr(t) {
        return (wr =
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
      function br(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function dr(t, r) {
        return (dr =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Mr(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = kr(t);
          if (r) {
            var n = kr(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return xr(this, e);
        };
      }
      function xr(t, r) {
        if (r && ("object" === wr(r) || "function" == typeof r)) return r;
        if (void 0 !== r)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function kr(t) {
        return (kr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Sr = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            r && dr(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = Mr(i);
        function i(t) {
          var r;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            ((r = n.call(this)).data = t),
            (r.rows = t.length),
            (r.columns = t[0].length),
            r
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: "set",
              value: function (t, r, e) {
                return (this.data[t][r] = e), this;
              },
            },
            {
              key: "get",
              value: function (t, r) {
                return this.data[t][r];
              },
            },
          ]) && br(r.prototype, e),
          o && br(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          i
        );
      })(U);
      function Or(t, r) {
        if (n(t)) return t[0] && n(t[0]) ? new Sr(t) : new gr(t, r);
        throw new Error("the argument is not an array");
      }
      function Er(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var jr = (function () {
        function t(r) {
          !(function (t, r) {
            if (!(t instanceof r))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var e,
            o,
            n,
            i,
            s,
            u,
            a,
            f,
            c,
            h = (r = Sr.checkMatrix(r)).clone(),
            l = h.rows,
            p = h.columns,
            y = new Float64Array(l),
            v = 1;
          for (e = 0; e < l; e++) y[e] = e;
          for (f = new Float64Array(l), o = 0; o < p; o++) {
            for (e = 0; e < l; e++) f[e] = h.get(e, o);
            for (e = 0; e < l; e++) {
              for (c = Math.min(e, o), s = 0, n = 0; n < c; n++)
                s += h.get(e, n) * f[n];
              (f[e] -= s), h.set(e, o, f[e]);
            }
            for (i = o, e = o + 1; e < l; e++)
              Math.abs(f[e]) > Math.abs(f[i]) && (i = e);
            if (i !== o) {
              for (n = 0; n < p; n++)
                (u = h.get(i, n)), h.set(i, n, h.get(o, n)), h.set(o, n, u);
              (a = y[i]), (y[i] = y[o]), (y[o] = a), (v = -v);
            }
            if (o < l && 0 !== h.get(o, o))
              for (e = o + 1; e < l; e++)
                h.set(e, o, h.get(e, o) / h.get(o, o));
          }
          (this.LU = h), (this.pivotVector = y), (this.pivotSign = v);
        }
        var r, e, o;
        return (
          (r = t),
          (e = [
            {
              key: "isSingular",
              value: function () {
                for (var t = this.LU, r = t.columns, e = 0; e < r; e++)
                  if (0 === t.get(e, e)) return !0;
                return !1;
              },
            },
            {
              key: "solve",
              value: function (t) {
                t = Y.checkMatrix(t);
                var r = this.LU;
                if (r.rows !== t.rows)
                  throw new Error("Invalid matrix dimensions");
                if (this.isSingular()) throw new Error("LU matrix is singular");
                var e,
                  o,
                  n,
                  i = t.columns,
                  s = t.subMatrixRow(this.pivotVector, 0, i - 1),
                  u = r.columns;
                for (n = 0; n < u; n++)
                  for (e = n + 1; e < u; e++)
                    for (o = 0; o < i; o++)
                      s.set(e, o, s.get(e, o) - s.get(n, o) * r.get(e, n));
                for (n = u - 1; n >= 0; n--) {
                  for (o = 0; o < i; o++)
                    s.set(n, o, s.get(n, o) / r.get(n, n));
                  for (e = 0; e < n; e++)
                    for (o = 0; o < i; o++)
                      s.set(e, o, s.get(e, o) - s.get(n, o) * r.get(e, n));
                }
                return s;
              },
            },
            {
              key: "determinant",
              get: function () {
                var t = this.LU;
                if (!t.isSquare()) throw new Error("Matrix must be square");
                for (var r = this.pivotSign, e = t.columns, o = 0; o < e; o++)
                  r *= t.get(o, o);
                return r;
              },
            },
            {
              key: "lowerTriangularMatrix",
              get: function () {
                for (
                  var t = this.LU,
                    r = t.rows,
                    e = t.columns,
                    o = new Y(r, e),
                    n = 0;
                  n < r;
                  n++
                )
                  for (var i = 0; i < e; i++)
                    n > i
                      ? o.set(n, i, t.get(n, i))
                      : n === i
                      ? o.set(n, i, 1)
                      : o.set(n, i, 0);
                return o;
              },
            },
            {
              key: "upperTriangularMatrix",
              get: function () {
                for (
                  var t = this.LU,
                    r = t.rows,
                    e = t.columns,
                    o = new Y(r, e),
                    n = 0;
                  n < r;
                  n++
                )
                  for (var i = 0; i < e; i++)
                    n <= i ? o.set(n, i, t.get(n, i)) : o.set(n, i, 0);
                return o;
              },
            },
            {
              key: "pivotPermutationVector",
              get: function () {
                return Array.from(this.pivotVector);
              },
            },
          ]) && Er(r.prototype, e),
          o && Er(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t
        );
      })();
      function Rr(t, r) {
        var e = 0;
        return Math.abs(t) > Math.abs(r)
          ? ((e = r / t), Math.abs(t) * Math.sqrt(1 + e * e))
          : 0 !== r
          ? ((e = t / r), Math.abs(r) * Math.sqrt(1 + e * e))
          : 0;
      }
      function Pr(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var _r = (function () {
        function t(r) {
          !(function (t, r) {
            if (!(t instanceof r))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var e,
            o,
            n,
            i,
            s = (r = Sr.checkMatrix(r)).clone(),
            u = r.rows,
            a = r.columns,
            f = new Float64Array(a);
          for (n = 0; n < a; n++) {
            var c = 0;
            for (e = n; e < u; e++) c = Rr(c, s.get(e, n));
            if (0 !== c) {
              for (s.get(n, n) < 0 && (c = -c), e = n; e < u; e++)
                s.set(e, n, s.get(e, n) / c);
              for (s.set(n, n, s.get(n, n) + 1), o = n + 1; o < a; o++) {
                for (i = 0, e = n; e < u; e++) i += s.get(e, n) * s.get(e, o);
                for (i = -i / s.get(n, n), e = n; e < u; e++)
                  s.set(e, o, s.get(e, o) + i * s.get(e, n));
              }
            }
            f[n] = -c;
          }
          (this.QR = s), (this.Rdiag = f);
        }
        var r, e, o;
        return (
          (r = t),
          (e = [
            {
              key: "solve",
              value: function (t) {
                t = Y.checkMatrix(t);
                var r = this.QR,
                  e = r.rows;
                if (t.rows !== e)
                  throw new Error("Matrix row dimensions must agree");
                if (!this.isFullRank())
                  throw new Error("Matrix is rank deficient");
                var o,
                  n,
                  i,
                  s,
                  u = t.columns,
                  a = t.clone(),
                  f = r.columns;
                for (i = 0; i < f; i++)
                  for (n = 0; n < u; n++) {
                    for (s = 0, o = i; o < e; o++)
                      s += r.get(o, i) * a.get(o, n);
                    for (s = -s / r.get(i, i), o = i; o < e; o++)
                      a.set(o, n, a.get(o, n) + s * r.get(o, i));
                  }
                for (i = f - 1; i >= 0; i--) {
                  for (n = 0; n < u; n++)
                    a.set(i, n, a.get(i, n) / this.Rdiag[i]);
                  for (o = 0; o < i; o++)
                    for (n = 0; n < u; n++)
                      a.set(o, n, a.get(o, n) - a.get(i, n) * r.get(o, i));
                }
                return a.subMatrix(0, f - 1, 0, u - 1);
              },
            },
            {
              key: "isFullRank",
              value: function () {
                for (var t = this.QR.columns, r = 0; r < t; r++)
                  if (0 === this.Rdiag[r]) return !1;
                return !0;
              },
            },
            {
              key: "upperTriangularMatrix",
              get: function () {
                var t,
                  r,
                  e = this.QR,
                  o = e.columns,
                  n = new Y(o, o);
                for (t = 0; t < o; t++)
                  for (r = 0; r < o; r++)
                    t < r
                      ? n.set(t, r, e.get(t, r))
                      : t === r
                      ? n.set(t, r, this.Rdiag[t])
                      : n.set(t, r, 0);
                return n;
              },
            },
            {
              key: "orthogonalMatrix",
              get: function () {
                var t,
                  r,
                  e,
                  o,
                  n = this.QR,
                  i = n.rows,
                  s = n.columns,
                  u = new Y(i, s);
                for (e = s - 1; e >= 0; e--) {
                  for (t = 0; t < i; t++) u.set(t, e, 0);
                  for (u.set(e, e, 1), r = e; r < s; r++)
                    if (0 !== n.get(e, e)) {
                      for (o = 0, t = e; t < i; t++)
                        o += n.get(t, e) * u.get(t, r);
                      for (o = -o / n.get(e, e), t = e; t < i; t++)
                        u.set(t, r, u.get(t, r) + o * n.get(t, e));
                    }
                }
                return u;
              },
            },
          ]) && Pr(r.prototype, e),
          o && Pr(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t
        );
      })();
      function Tr(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function Cr(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Nr = (function () {
        function t(r) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ((Tr(this, t), (r = Sr.checkMatrix(r)).isEmpty()))
            throw new Error("Matrix must be non-empty");
          var o,
            n = r.rows,
            i = r.columns,
            s = e.computeLeftSingularVectors,
            u = void 0 === s || s,
            a = e.computeRightSingularVectors,
            f = void 0 === a || a,
            c = e.autoTranspose,
            h = void 0 !== c && c,
            l = Boolean(u),
            p = Boolean(f),
            y = !1;
          if (n < i)
            if (h) {
              (n = (o = r.transpose()).rows), (i = o.columns), (y = !0);
              var v = l;
              (l = p), (p = v);
            } else
              (o = r.clone()),
                console.warn(
                  "Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose",
                );
          else o = r.clone();
          for (
            var m = Math.min(n, i),
              g = Math.min(n + 1, i),
              w = new Float64Array(g),
              b = new Y(n, m),
              d = new Y(i, i),
              M = new Float64Array(i),
              x = new Float64Array(n),
              k = new Float64Array(g),
              S = 0;
            S < g;
            S++
          )
            k[S] = S;
          for (
            var O = Math.min(n - 1, i),
              E = Math.max(0, Math.min(i - 2, n)),
              j = Math.max(O, E),
              R = 0;
            R < j;
            R++
          ) {
            if (R < O) {
              w[R] = 0;
              for (var P = R; P < n; P++) w[R] = Rr(w[R], o.get(P, R));
              if (0 !== w[R]) {
                o.get(R, R) < 0 && (w[R] = -w[R]);
                for (var _ = R; _ < n; _++) o.set(_, R, o.get(_, R) / w[R]);
                o.set(R, R, o.get(R, R) + 1);
              }
              w[R] = -w[R];
            }
            for (var T = R + 1; T < i; T++) {
              if (R < O && 0 !== w[R]) {
                for (var C = 0, N = R; N < n; N++)
                  C += o.get(N, R) * o.get(N, T);
                C = -C / o.get(R, R);
                for (var D = R; D < n; D++)
                  o.set(D, T, o.get(D, T) + C * o.get(D, R));
              }
              M[T] = o.get(R, T);
            }
            if (l && R < O)
              for (var I = R; I < n; I++) b.set(I, R, o.get(I, R));
            if (R < E) {
              M[R] = 0;
              for (var V = R + 1; V < i; V++) M[R] = Rr(M[R], M[V]);
              if (0 !== M[R]) {
                M[R + 1] < 0 && (M[R] = 0 - M[R]);
                for (var q = R + 1; q < i; q++) M[q] /= M[R];
                M[R + 1] += 1;
              }
              if (((M[R] = -M[R]), R + 1 < n && 0 !== M[R])) {
                for (var A = R + 1; A < n; A++) x[A] = 0;
                for (var F = R + 1; F < n; F++)
                  for (var L = R + 1; L < i; L++) x[F] += M[L] * o.get(F, L);
                for (var B = R + 1; B < i; B++)
                  for (var z = -M[B] / M[R + 1], U = R + 1; U < n; U++)
                    o.set(U, B, o.get(U, B) + z * x[U]);
              }
              if (p) for (var W = R + 1; W < i; W++) d.set(W, R, M[W]);
            }
          }
          var Q = Math.min(i, n + 1);
          if (
            (O < i && (w[O] = o.get(O, O)),
            n < Q && (w[Q - 1] = 0),
            E + 1 < Q && (M[E] = o.get(E, Q - 1)),
            (M[Q - 1] = 0),
            l)
          ) {
            for (var J = O; J < m; J++) {
              for (var H = 0; H < n; H++) b.set(H, J, 0);
              b.set(J, J, 1);
            }
            for (var K = O - 1; K >= 0; K--)
              if (0 !== w[K]) {
                for (var X = K + 1; X < m; X++) {
                  for (var G = 0, Z = K; Z < n; Z++)
                    G += b.get(Z, K) * b.get(Z, X);
                  G = -G / b.get(K, K);
                  for (var $ = K; $ < n; $++)
                    b.set($, X, b.get($, X) + G * b.get($, K));
                }
                for (var tt = K; tt < n; tt++) b.set(tt, K, -b.get(tt, K));
                b.set(K, K, 1 + b.get(K, K));
                for (var rt = 0; rt < K - 1; rt++) b.set(rt, K, 0);
              } else {
                for (var et = 0; et < n; et++) b.set(et, K, 0);
                b.set(K, K, 1);
              }
          }
          if (p)
            for (var ot = i - 1; ot >= 0; ot--) {
              if (ot < E && 0 !== M[ot])
                for (var nt = ot + 1; nt < i; nt++) {
                  for (var it = 0, st = ot + 1; st < i; st++)
                    it += d.get(st, ot) * d.get(st, nt);
                  it = -it / d.get(ot + 1, ot);
                  for (var ut = ot + 1; ut < i; ut++)
                    d.set(ut, nt, d.get(ut, nt) + it * d.get(ut, ot));
                }
              for (var at = 0; at < i; at++) d.set(at, ot, 0);
              d.set(ot, ot, 1);
            }
          for (var ft = Q - 1, ct = Number.EPSILON; Q > 0; ) {
            var ht = void 0,
              lt = void 0;
            for (ht = Q - 2; ht >= -1 && -1 !== ht; ht--) {
              var pt =
                Number.MIN_VALUE + ct * Math.abs(w[ht] + Math.abs(w[ht + 1]));
              if (Math.abs(M[ht]) <= pt || Number.isNaN(M[ht])) {
                M[ht] = 0;
                break;
              }
            }
            if (ht === Q - 2) lt = 4;
            else {
              var yt = void 0;
              for (yt = Q - 1; yt >= ht && yt !== ht; yt--) {
                var vt =
                  (yt !== Q ? Math.abs(M[yt]) : 0) +
                  (yt !== ht + 1 ? Math.abs(M[yt - 1]) : 0);
                if (Math.abs(w[yt]) <= ct * vt) {
                  w[yt] = 0;
                  break;
                }
              }
              yt === ht
                ? (lt = 3)
                : yt === Q - 1
                ? (lt = 1)
                : ((lt = 2), (ht = yt));
            }
            switch ((ht++, lt)) {
              case 1:
                var mt = M[Q - 2];
                M[Q - 2] = 0;
                for (var gt = Q - 2; gt >= ht; gt--) {
                  var wt = Rr(w[gt], mt),
                    bt = w[gt] / wt,
                    dt = mt / wt;
                  if (
                    ((w[gt] = wt),
                    gt !== ht &&
                      ((mt = -dt * M[gt - 1]), (M[gt - 1] = bt * M[gt - 1])),
                    p)
                  )
                    for (var Mt = 0; Mt < i; Mt++)
                      (wt = bt * d.get(Mt, gt) + dt * d.get(Mt, Q - 1)),
                        d.set(
                          Mt,
                          Q - 1,
                          -dt * d.get(Mt, gt) + bt * d.get(Mt, Q - 1),
                        ),
                        d.set(Mt, gt, wt);
                }
                break;
              case 2:
                var xt = M[ht - 1];
                M[ht - 1] = 0;
                for (var kt = ht; kt < Q; kt++) {
                  var St = Rr(w[kt], xt),
                    Ot = w[kt] / St,
                    Et = xt / St;
                  if (
                    ((w[kt] = St), (xt = -Et * M[kt]), (M[kt] = Ot * M[kt]), l)
                  )
                    for (var jt = 0; jt < n; jt++)
                      (St = Ot * b.get(jt, kt) + Et * b.get(jt, ht - 1)),
                        b.set(
                          jt,
                          ht - 1,
                          -Et * b.get(jt, kt) + Ot * b.get(jt, ht - 1),
                        ),
                        b.set(jt, kt, St);
                }
                break;
              case 3:
                var Rt = Math.max(
                    Math.abs(w[Q - 1]),
                    Math.abs(w[Q - 2]),
                    Math.abs(M[Q - 2]),
                    Math.abs(w[ht]),
                    Math.abs(M[ht]),
                  ),
                  Pt = w[Q - 1] / Rt,
                  _t = w[Q - 2] / Rt,
                  Tt = M[Q - 2] / Rt,
                  Ct = w[ht] / Rt,
                  Nt = M[ht] / Rt,
                  Dt = ((_t + Pt) * (_t - Pt) + Tt * Tt) / 2,
                  It = Pt * Tt * (Pt * Tt),
                  Vt = 0;
                (0 === Dt && 0 === It) ||
                  (Vt =
                    It /
                    (Dt +
                      (Vt =
                        Dt < 0
                          ? 0 - Math.sqrt(Dt * Dt + It)
                          : Math.sqrt(Dt * Dt + It))));
                for (
                  var qt = (Ct + Pt) * (Ct - Pt) + Vt, At = Ct * Nt, Ft = ht;
                  Ft < Q - 1;
                  Ft++
                ) {
                  var Lt = Rr(qt, At);
                  0 === Lt && (Lt = Number.MIN_VALUE);
                  var Bt = qt / Lt,
                    zt = At / Lt;
                  if (
                    (Ft !== ht && (M[Ft - 1] = Lt),
                    (qt = Bt * w[Ft] + zt * M[Ft]),
                    (M[Ft] = Bt * M[Ft] - zt * w[Ft]),
                    (At = zt * w[Ft + 1]),
                    (w[Ft + 1] = Bt * w[Ft + 1]),
                    p)
                  )
                    for (var Ut = 0; Ut < i; Ut++)
                      (Lt = Bt * d.get(Ut, Ft) + zt * d.get(Ut, Ft + 1)),
                        d.set(
                          Ut,
                          Ft + 1,
                          -zt * d.get(Ut, Ft) + Bt * d.get(Ut, Ft + 1),
                        ),
                        d.set(Ut, Ft, Lt);
                  if (
                    (0 === (Lt = Rr(qt, At)) && (Lt = Number.MIN_VALUE),
                    (Bt = qt / Lt),
                    (zt = At / Lt),
                    (w[Ft] = Lt),
                    (qt = Bt * M[Ft] + zt * w[Ft + 1]),
                    (w[Ft + 1] = -zt * M[Ft] + Bt * w[Ft + 1]),
                    (At = zt * M[Ft + 1]),
                    (M[Ft + 1] = Bt * M[Ft + 1]),
                    l && Ft < n - 1)
                  )
                    for (var Wt = 0; Wt < n; Wt++)
                      (Lt = Bt * b.get(Wt, Ft) + zt * b.get(Wt, Ft + 1)),
                        b.set(
                          Wt,
                          Ft + 1,
                          -zt * b.get(Wt, Ft) + Bt * b.get(Wt, Ft + 1),
                        ),
                        b.set(Wt, Ft, Lt);
                }
                (M[Q - 2] = qt), 1;
                break;
              case 4:
                if (w[ht] <= 0 && ((w[ht] = w[ht] < 0 ? -w[ht] : 0), p))
                  for (var Qt = 0; Qt <= ft; Qt++)
                    d.set(Qt, ht, -d.get(Qt, ht));
                for (; ht < ft && !(w[ht] >= w[ht + 1]); ) {
                  var Jt = w[ht];
                  if (((w[ht] = w[ht + 1]), (w[ht + 1] = Jt), p && ht < i - 1))
                    for (var Yt = 0; Yt < i; Yt++)
                      (Jt = d.get(Yt, ht + 1)),
                        d.set(Yt, ht + 1, d.get(Yt, ht)),
                        d.set(Yt, ht, Jt);
                  if (l && ht < n - 1)
                    for (var Ht = 0; Ht < n; Ht++)
                      (Jt = b.get(Ht, ht + 1)),
                        b.set(Ht, ht + 1, b.get(Ht, ht)),
                        b.set(Ht, ht, Jt);
                  ht++;
                }
                0, Q--;
            }
          }
          if (y) {
            var Kt = d;
            (d = b), (b = Kt);
          }
          (this.m = n), (this.n = i), (this.s = w), (this.U = b), (this.V = d);
        }
        var r, e, o;
        return (
          (r = t),
          (e = [
            {
              key: "solve",
              value: function (t) {
                for (
                  var r = t,
                    e = this.threshold,
                    o = this.s.length,
                    n = Y.zeros(o, o),
                    i = 0;
                  i < o;
                  i++
                )
                  Math.abs(this.s[i]) <= e
                    ? n.set(i, i, 0)
                    : n.set(i, i, 1 / this.s[i]);
                for (
                  var s = this.U,
                    u = this.rightSingularVectors,
                    a = u.mmul(n),
                    f = u.rows,
                    c = s.rows,
                    h = Y.zeros(f, c),
                    l = 0;
                  l < f;
                  l++
                )
                  for (var p = 0; p < c; p++) {
                    for (var y = 0, v = 0; v < o; v++)
                      y += a.get(l, v) * s.get(p, v);
                    h.set(l, p, y);
                  }
                return h.mmul(r);
              },
            },
            {
              key: "solveForDiagonal",
              value: function (t) {
                return this.solve(Y.diag(t));
              },
            },
            {
              key: "inverse",
              value: function () {
                for (
                  var t = this.V,
                    r = this.threshold,
                    e = t.rows,
                    o = t.columns,
                    n = new Y(e, this.s.length),
                    i = 0;
                  i < e;
                  i++
                )
                  for (var s = 0; s < o; s++)
                    Math.abs(this.s[s]) > r &&
                      n.set(i, s, t.get(i, s) / this.s[s]);
                for (
                  var u = this.U,
                    a = u.rows,
                    f = u.columns,
                    c = new Y(e, a),
                    h = 0;
                  h < e;
                  h++
                )
                  for (var l = 0; l < a; l++) {
                    for (var p = 0, y = 0; y < f; y++)
                      p += n.get(h, y) * u.get(l, y);
                    c.set(h, l, p);
                  }
                return c;
              },
            },
            {
              key: "condition",
              get: function () {
                return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
              },
            },
            {
              key: "norm2",
              get: function () {
                return this.s[0];
              },
            },
            {
              key: "rank",
              get: function () {
                for (
                  var t = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON,
                    r = 0,
                    e = this.s,
                    o = 0,
                    n = e.length;
                  o < n;
                  o++
                )
                  e[o] > t && r++;
                return r;
              },
            },
            {
              key: "diagonal",
              get: function () {
                return Array.from(this.s);
              },
            },
            {
              key: "threshold",
              get: function () {
                return (
                  (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0]
                );
              },
            },
            {
              key: "leftSingularVectors",
              get: function () {
                return this.U;
              },
            },
            {
              key: "rightSingularVectors",
              get: function () {
                return this.V;
              },
            },
            {
              key: "diagonalMatrix",
              get: function () {
                return Y.diag(this.s);
              },
            },
          ]) && Cr(r.prototype, e),
          o && Cr(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t
        );
      })();
      function Dr(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (t = Sr.checkMatrix(t)),
          r ? new Nr(t).inverse() : Ir(t, Y.eye(t.rows))
        );
      }
      function Ir(t, r) {
        var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          (t = Sr.checkMatrix(t)),
          (r = Sr.checkMatrix(r)),
          e
            ? new Nr(t).solve(r)
            : t.isSquare()
            ? new jr(t).solve(r)
            : new _r(t).solve(r)
        );
      }
      function Vr(t) {
        var r, e, o, n, i, s;
        if ((t = Y.checkMatrix(t)).isSquare())
          return 0 === t.columns
            ? 1
            : 2 === t.columns
            ? ((r = t.get(0, 0)),
              (e = t.get(0, 1)),
              (o = t.get(1, 0)),
              r * t.get(1, 1) - e * o)
            : 3 === t.columns
            ? ((n = new Kt(t, [1, 2], [1, 2])),
              (i = new Kt(t, [1, 2], [0, 2])),
              (s = new Kt(t, [1, 2], [0, 1])),
              (r = t.get(0, 0)),
              (e = t.get(0, 1)),
              (o = t.get(0, 2)),
              r * Vr(n) - e * Vr(i) + o * Vr(s))
            : new jr(t).determinant;
        throw Error("determinant can only be calculated for a square matrix");
      }
      function qr(t, r) {
        for (var e = [], o = 0; o < t; o++) o !== r && e.push(o);
        return e;
      }
      function Ar(t, r, e) {
        var o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 1e-9,
          n =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 1e-9;
        if (t > n) return new Array(r.rows + 1).fill(0);
        for (var i = r.addRow(e, [0]), s = 0; s < i.rows; s++)
          Math.abs(i.get(s, 0)) < o && i.set(s, 0, 0);
        return i.to1DArray();
      }
      function Fr(t) {
        for (
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            e = r.thresholdValue,
            o = void 0 === e ? 1e-9 : e,
            n = r.thresholdError,
            i = void 0 === n ? 1e-9 : n,
            s = (t = Y.checkMatrix(t)).rows,
            u = new Y(s, s),
            a = 0;
          a < s;
          a++
        ) {
          var f = Y.columnVector(t.getRow(a)),
            c = t.subMatrixRow(qr(s, a)).transpose(),
            h = new Nr(c),
            l = h.solve(f),
            p = Y.sub(f, c.mmul(l)).abs().max();
          u.setRow(a, Ar(p, l, a, o, i));
        }
        return u;
      }
      function Lr(t) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Number.EPSILON;
        if ((t = Y.checkMatrix(t)).isEmpty()) return t.transpose();
        for (
          var e = new Nr(t, { autoTranspose: !0 }),
            o = e.leftSingularVectors,
            n = e.rightSingularVectors,
            i = e.diagonal,
            s = 0;
          s < i.length;
          s++
        )
          Math.abs(i[s]) > r ? (i[s] = 1 / i[s]) : (i[s] = 0);
        return n.mmul(Y.diag(i).mmul(o.transpose()));
      }
      function Br(t) {
        return (Br =
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
      function zr(t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
          e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t = new Y(t);
        var o = !1;
        if (
          ("object" !== Br(r) || Y.isMatrix(r) || n(r)
            ? (r = new Y(r))
            : ((e = r), (r = t), (o = !0)),
          t.rows !== r.rows)
        )
          throw new TypeError(
            "Both matrices must have the same number of rows",
          );
        var i = e,
          s = i.center,
          u = void 0 === s || s;
        u && ((t = t.center("column")), o || (r = r.center("column")));
        for (var a = t.transpose().mmul(r), f = 0; f < a.rows; f++)
          for (var c = 0; c < a.columns; c++)
            a.set(f, c, a.get(f, c) * (1 / (t.rows - 1)));
        return a;
      }
      function Ur(t) {
        return (Ur =
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
      function Wr(t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
          e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t = new Y(t);
        var o = !1;
        if (
          ("object" !== Ur(r) || Y.isMatrix(r) || n(r)
            ? (r = new Y(r))
            : ((e = r), (r = t), (o = !0)),
          t.rows !== r.rows)
        )
          throw new TypeError(
            "Both matrices must have the same number of rows",
          );
        var i = e,
          s = i.center,
          u = void 0 === s || s,
          a = i.scale,
          f = void 0 === a || a;
        u && (t.center("column"), o || r.center("column")),
          f && (t.scale("column"), o || r.scale("column"));
        for (
          var c = t.standardDeviation("column", { unbiased: !0 }),
            h = o ? c : r.standardDeviation("column", { unbiased: !0 }),
            l = t.transpose().mmul(r),
            p = 0;
          p < l.rows;
          p++
        )
          for (var y = 0; y < l.columns; y++)
            l.set(p, y, l.get(p, y) * (1 / (c[p] * h[y])) * (1 / (t.rows - 1)));
        return l;
      }
      function Qr(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function Jr(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Yr = (function () {
        function t(r) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Qr(this, t);
          var o = e.assumeSymmetric,
            n = void 0 !== o && o;
          if (!(r = Sr.checkMatrix(r)).isSquare())
            throw new Error("Matrix is not a square matrix");
          if (r.isEmpty()) throw new Error("Matrix must be non-empty");
          var i,
            s,
            u = r.columns,
            a = new Y(u, u),
            f = new Float64Array(u),
            c = new Float64Array(u),
            h = r;
          if (!!n || r.isSymmetric()) {
            for (i = 0; i < u; i++)
              for (s = 0; s < u; s++) a.set(i, s, h.get(i, s));
            Hr(u, c, f, a), Kr(u, c, f, a);
          } else {
            var l = new Y(u, u),
              p = new Float64Array(u);
            for (s = 0; s < u; s++)
              for (i = 0; i < u; i++) l.set(i, s, h.get(i, s));
            Xr(u, l, p, a), Gr(u, c, f, a, l);
          }
          (this.n = u), (this.e = c), (this.d = f), (this.V = a);
        }
        var r, e, o;
        return (
          (r = t),
          (e = [
            {
              key: "realEigenvalues",
              get: function () {
                return Array.from(this.d);
              },
            },
            {
              key: "imaginaryEigenvalues",
              get: function () {
                return Array.from(this.e);
              },
            },
            {
              key: "eigenvectorMatrix",
              get: function () {
                return this.V;
              },
            },
            {
              key: "diagonalMatrix",
              get: function () {
                var t,
                  r,
                  e = this.n,
                  o = this.e,
                  n = this.d,
                  i = new Y(e, e);
                for (t = 0; t < e; t++) {
                  for (r = 0; r < e; r++) i.set(t, r, 0);
                  i.set(t, t, n[t]),
                    o[t] > 0
                      ? i.set(t, t + 1, o[t])
                      : o[t] < 0 && i.set(t, t - 1, o[t]);
                }
                return i;
              },
            },
          ]) && Jr(r.prototype, e),
          o && Jr(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t
        );
      })();
      function Hr(t, r, e, o) {
        var n, i, s, u, a, f, c, h;
        for (a = 0; a < t; a++) e[a] = o.get(t - 1, a);
        for (u = t - 1; u > 0; u--) {
          for (h = 0, s = 0, f = 0; f < u; f++) h += Math.abs(e[f]);
          if (0 === h)
            for (r[u] = e[u - 1], a = 0; a < u; a++)
              (e[a] = o.get(u - 1, a)), o.set(u, a, 0), o.set(a, u, 0);
          else {
            for (f = 0; f < u; f++) (e[f] /= h), (s += e[f] * e[f]);
            for (
              n = e[u - 1],
                i = Math.sqrt(s),
                n > 0 && (i = -i),
                r[u] = h * i,
                s -= n * i,
                e[u - 1] = n - i,
                a = 0;
              a < u;
              a++
            )
              r[a] = 0;
            for (a = 0; a < u; a++) {
              for (
                n = e[a], o.set(a, u, n), i = r[a] + o.get(a, a) * n, f = a + 1;
                f <= u - 1;
                f++
              )
                (i += o.get(f, a) * e[f]), (r[f] += o.get(f, a) * n);
              r[a] = i;
            }
            for (n = 0, a = 0; a < u; a++) (r[a] /= s), (n += r[a] * e[a]);
            for (c = n / (s + s), a = 0; a < u; a++) r[a] -= c * e[a];
            for (a = 0; a < u; a++) {
              for (n = e[a], i = r[a], f = a; f <= u - 1; f++)
                o.set(f, a, o.get(f, a) - (n * r[f] + i * e[f]));
              (e[a] = o.get(u - 1, a)), o.set(u, a, 0);
            }
          }
          e[u] = s;
        }
        for (u = 0; u < t - 1; u++) {
          if (
            (o.set(t - 1, u, o.get(u, u)), o.set(u, u, 1), 0 !== (s = e[u + 1]))
          ) {
            for (f = 0; f <= u; f++) e[f] = o.get(f, u + 1) / s;
            for (a = 0; a <= u; a++) {
              for (i = 0, f = 0; f <= u; f++)
                i += o.get(f, u + 1) * o.get(f, a);
              for (f = 0; f <= u; f++) o.set(f, a, o.get(f, a) - i * e[f]);
            }
          }
          for (f = 0; f <= u; f++) o.set(f, u + 1, 0);
        }
        for (a = 0; a < t; a++) (e[a] = o.get(t - 1, a)), o.set(t - 1, a, 0);
        o.set(t - 1, t - 1, 1), (r[0] = 0);
      }
      function Kr(t, r, e, o) {
        var n, i, s, u, a, f, c, h, l, p, y, v, m, g, w, b;
        for (s = 1; s < t; s++) r[s - 1] = r[s];
        r[t - 1] = 0;
        var d = 0,
          M = 0,
          x = Number.EPSILON;
        for (f = 0; f < t; f++) {
          for (
            M = Math.max(M, Math.abs(e[f]) + Math.abs(r[f])), c = f;
            c < t && !(Math.abs(r[c]) <= x * M);

          )
            c++;
          if (c > f) {
            0;
            do {
              for (
                1,
                  n = e[f],
                  l = Rr((h = (e[f + 1] - n) / (2 * r[f])), 1),
                  h < 0 && (l = -l),
                  e[f] = r[f] / (h + l),
                  e[f + 1] = r[f] * (h + l),
                  p = e[f + 1],
                  i = n - e[f],
                  s = f + 2;
                s < t;
                s++
              )
                e[s] -= i;
              for (
                d += i,
                  h = e[c],
                  v = y = 1,
                  m = y,
                  g = r[f + 1],
                  w = 0,
                  b = 0,
                  s = c - 1;
                s >= f;
                s--
              )
                for (
                  m = v,
                    v = y,
                    b = w,
                    n = y * r[s],
                    i = y * h,
                    l = Rr(h, r[s]),
                    r[s + 1] = w * l,
                    w = r[s] / l,
                    h = (y = h / l) * e[s] - w * n,
                    e[s + 1] = i + w * (y * n + w * e[s]),
                    a = 0;
                  a < t;
                  a++
                )
                  (i = o.get(a, s + 1)),
                    o.set(a, s + 1, w * o.get(a, s) + y * i),
                    o.set(a, s, y * o.get(a, s) - w * i);
              (h = (-w * b * m * g * r[f]) / p), (r[f] = w * h), (e[f] = y * h);
            } while (Math.abs(r[f]) > x * M);
          }
          (e[f] = e[f] + d), (r[f] = 0);
        }
        for (s = 0; s < t - 1; s++) {
          for (a = s, h = e[s], u = s + 1; u < t; u++)
            e[u] < h && ((a = u), (h = e[u]));
          if (a !== s)
            for (e[a] = e[s], e[s] = h, u = 0; u < t; u++)
              (h = o.get(u, s)), o.set(u, s, o.get(u, a)), o.set(u, a, h);
        }
      }
      function Xr(t, r, e, o) {
        var n,
          i,
          s,
          u,
          a,
          f,
          c,
          h = t - 1;
        for (f = 1; f <= h - 1; f++) {
          for (c = 0, u = f; u <= h; u++) c += Math.abs(r.get(u, f - 1));
          if (0 !== c) {
            for (s = 0, u = h; u >= f; u--)
              (e[u] = r.get(u, f - 1) / c), (s += e[u] * e[u]);
            for (
              i = Math.sqrt(s),
                e[f] > 0 && (i = -i),
                s -= e[f] * i,
                e[f] = e[f] - i,
                a = f;
              a < t;
              a++
            ) {
              for (n = 0, u = h; u >= f; u--) n += e[u] * r.get(u, a);
              for (n /= s, u = f; u <= h; u++)
                r.set(u, a, r.get(u, a) - n * e[u]);
            }
            for (u = 0; u <= h; u++) {
              for (n = 0, a = h; a >= f; a--) n += e[a] * r.get(u, a);
              for (n /= s, a = f; a <= h; a++)
                r.set(u, a, r.get(u, a) - n * e[a]);
            }
            (e[f] = c * e[f]), r.set(f, f - 1, c * i);
          }
        }
        for (u = 0; u < t; u++)
          for (a = 0; a < t; a++) o.set(u, a, u === a ? 1 : 0);
        for (f = h - 1; f >= 1; f--)
          if (0 !== r.get(f, f - 1)) {
            for (u = f + 1; u <= h; u++) e[u] = r.get(u, f - 1);
            for (a = f; a <= h; a++) {
              for (i = 0, u = f; u <= h; u++) i += e[u] * o.get(u, a);
              for (i = i / e[f] / r.get(f, f - 1), u = f; u <= h; u++)
                o.set(u, a, o.get(u, a) + i * e[u]);
            }
          }
      }
      function Gr(t, r, e, o, n) {
        var i,
          s,
          u,
          a,
          f,
          c,
          h,
          l,
          p,
          y,
          v,
          m,
          g,
          w,
          b,
          d = t - 1,
          M = t - 1,
          x = Number.EPSILON,
          k = 0,
          S = 0,
          O = 0,
          E = 0,
          j = 0,
          R = 0,
          P = 0,
          _ = 0;
        for (i = 0; i < t; i++)
          for (
            (i < 0 || i > M) && ((e[i] = n.get(i, i)), (r[i] = 0)),
              s = Math.max(i - 1, 0);
            s < t;
            s++
          )
            S += Math.abs(n.get(i, s));
        for (; d >= 0; ) {
          for (
            a = d;
            a > 0 &&
            (0 ===
              (R = Math.abs(n.get(a - 1, a - 1)) + Math.abs(n.get(a, a))) &&
              (R = S),
            !(Math.abs(n.get(a, a - 1)) < x * R));

          )
            a--;
          if (a === d)
            n.set(d, d, n.get(d, d) + k),
              (e[d] = n.get(d, d)),
              (r[d] = 0),
              d--,
              (_ = 0);
          else if (a === d - 1) {
            if (
              ((h = n.get(d, d - 1) * n.get(d - 1, d)),
              (E = (O = (n.get(d - 1, d - 1) - n.get(d, d)) / 2) * O + h),
              (P = Math.sqrt(Math.abs(E))),
              n.set(d, d, n.get(d, d) + k),
              n.set(d - 1, d - 1, n.get(d - 1, d - 1) + k),
              (l = n.get(d, d)),
              E >= 0)
            ) {
              for (
                P = O >= 0 ? O + P : O - P,
                  e[d - 1] = l + P,
                  e[d] = e[d - 1],
                  0 !== P && (e[d] = l - h / P),
                  r[d - 1] = 0,
                  r[d] = 0,
                  O = (l = n.get(d, d - 1)) / (R = Math.abs(l) + Math.abs(P)),
                  E = P / R,
                  O /= j = Math.sqrt(O * O + E * E),
                  E /= j,
                  s = d - 1;
                s < t;
                s++
              )
                (P = n.get(d - 1, s)),
                  n.set(d - 1, s, E * P + O * n.get(d, s)),
                  n.set(d, s, E * n.get(d, s) - O * P);
              for (i = 0; i <= d; i++)
                (P = n.get(i, d - 1)),
                  n.set(i, d - 1, E * P + O * n.get(i, d)),
                  n.set(i, d, E * n.get(i, d) - O * P);
              for (i = 0; i <= M; i++)
                (P = o.get(i, d - 1)),
                  o.set(i, d - 1, E * P + O * o.get(i, d)),
                  o.set(i, d, E * o.get(i, d) - O * P);
            } else
              (e[d - 1] = l + O), (e[d] = l + O), (r[d - 1] = P), (r[d] = -P);
            (d -= 2), (_ = 0);
          } else {
            if (
              ((l = n.get(d, d)),
              (p = 0),
              (h = 0),
              a < d &&
                ((p = n.get(d - 1, d - 1)),
                (h = n.get(d, d - 1) * n.get(d - 1, d))),
              10 === _)
            ) {
              for (k += l, i = 0; i <= d; i++) n.set(i, i, n.get(i, i) - l);
              (l = p =
                0.75 *
                (R =
                  Math.abs(n.get(d, d - 1)) + Math.abs(n.get(d - 1, d - 2)))),
                (h = -0.4375 * R * R);
            }
            if (30 === _ && (R = (R = (p - l) / 2) * R + h) > 0) {
              for (
                R = Math.sqrt(R),
                  p < l && (R = -R),
                  R = l - h / ((p - l) / 2 + R),
                  i = 0;
                i <= d;
                i++
              )
                n.set(i, i, n.get(i, i) - R);
              (k += R), (l = p = h = 0.964);
            }
            for (
              _ += 1, f = d - 2;
              f >= a &&
              ((O =
                ((j = l - (P = n.get(f, f))) * (R = p - P) - h) /
                  n.get(f + 1, f) +
                n.get(f, f + 1)),
              (E = n.get(f + 1, f + 1) - P - j - R),
              (j = n.get(f + 2, f + 1)),
              (O /= R = Math.abs(O) + Math.abs(E) + Math.abs(j)),
              (E /= R),
              (j /= R),
              f !== a) &&
              !(
                Math.abs(n.get(f, f - 1)) * (Math.abs(E) + Math.abs(j)) <
                x *
                  (Math.abs(O) *
                    (Math.abs(n.get(f - 1, f - 1)) +
                      Math.abs(P) +
                      Math.abs(n.get(f + 1, f + 1))))
              );

            )
              f--;
            for (i = f + 2; i <= d; i++)
              n.set(i, i - 2, 0), i > f + 2 && n.set(i, i - 3, 0);
            for (
              u = f;
              u <= d - 1 &&
              ((w = u !== d - 1),
              u !== f &&
                ((O = n.get(u, u - 1)),
                (E = n.get(u + 1, u - 1)),
                (j = w ? n.get(u + 2, u - 1) : 0),
                0 !== (l = Math.abs(O) + Math.abs(E) + Math.abs(j)) &&
                  ((O /= l), (E /= l), (j /= l))),
              0 !== l);
              u++
            )
              if (
                ((R = Math.sqrt(O * O + E * E + j * j)),
                O < 0 && (R = -R),
                0 !== R)
              ) {
                for (
                  u !== f
                    ? n.set(u, u - 1, -R * l)
                    : a !== f && n.set(u, u - 1, -n.get(u, u - 1)),
                    l = (O += R) / R,
                    p = E / R,
                    P = j / R,
                    E /= O,
                    j /= O,
                    s = u;
                  s < t;
                  s++
                )
                  (O = n.get(u, s) + E * n.get(u + 1, s)),
                    w &&
                      ((O += j * n.get(u + 2, s)),
                      n.set(u + 2, s, n.get(u + 2, s) - O * P)),
                    n.set(u, s, n.get(u, s) - O * l),
                    n.set(u + 1, s, n.get(u + 1, s) - O * p);
                for (i = 0; i <= Math.min(d, u + 3); i++)
                  (O = l * n.get(i, u) + p * n.get(i, u + 1)),
                    w &&
                      ((O += P * n.get(i, u + 2)),
                      n.set(i, u + 2, n.get(i, u + 2) - O * j)),
                    n.set(i, u, n.get(i, u) - O),
                    n.set(i, u + 1, n.get(i, u + 1) - O * E);
                for (i = 0; i <= M; i++)
                  (O = l * o.get(i, u) + p * o.get(i, u + 1)),
                    w &&
                      ((O += P * o.get(i, u + 2)),
                      o.set(i, u + 2, o.get(i, u + 2) - O * j)),
                    o.set(i, u, o.get(i, u) - O),
                    o.set(i, u + 1, o.get(i, u + 1) - O * E);
              }
          }
        }
        if (0 !== S) {
          for (d = t - 1; d >= 0; d--)
            if (((O = e[d]), 0 === (E = r[d])))
              for (a = d, n.set(d, d, 1), i = d - 1; i >= 0; i--) {
                for (h = n.get(i, i) - O, j = 0, s = a; s <= d; s++)
                  j += n.get(i, s) * n.get(s, d);
                if (r[i] < 0) (P = h), (R = j);
                else if (
                  ((a = i),
                  0 === r[i]
                    ? n.set(i, d, 0 !== h ? -j / h : -j / (x * S))
                    : ((l = n.get(i, i + 1)),
                      (p = n.get(i + 1, i)),
                      (c =
                        (l * R - P * j) /
                        (E = (e[i] - O) * (e[i] - O) + r[i] * r[i])),
                      n.set(i, d, c),
                      n.set(
                        i + 1,
                        d,
                        Math.abs(l) > Math.abs(P)
                          ? (-j - h * c) / l
                          : (-R - p * c) / P,
                      )),
                  x * (c = Math.abs(n.get(i, d))) * c > 1)
                )
                  for (s = i; s <= d; s++) n.set(s, d, n.get(s, d) / c);
              }
            else if (E < 0)
              for (
                a = d - 1,
                  Math.abs(n.get(d, d - 1)) > Math.abs(n.get(d - 1, d))
                    ? (n.set(d - 1, d - 1, E / n.get(d, d - 1)),
                      n.set(d - 1, d, -(n.get(d, d) - O) / n.get(d, d - 1)))
                    : ((b = Zr(
                        0,
                        -n.get(d - 1, d),
                        n.get(d - 1, d - 1) - O,
                        E,
                      )),
                      n.set(d - 1, d - 1, b[0]),
                      n.set(d - 1, d, b[1])),
                  n.set(d, d - 1, 0),
                  n.set(d, d, 1),
                  i = d - 2;
                i >= 0;
                i--
              ) {
                for (y = 0, v = 0, s = a; s <= d; s++)
                  (y += n.get(i, s) * n.get(s, d - 1)),
                    (v += n.get(i, s) * n.get(s, d));
                if (((h = n.get(i, i) - O), r[i] < 0))
                  (P = h), (j = y), (R = v);
                else if (
                  ((a = i),
                  0 === r[i]
                    ? ((b = Zr(-y, -v, h, E)),
                      n.set(i, d - 1, b[0]),
                      n.set(i, d, b[1]))
                    : ((l = n.get(i, i + 1)),
                      (p = n.get(i + 1, i)),
                      (m = (e[i] - O) * (e[i] - O) + r[i] * r[i] - E * E),
                      (g = 2 * (e[i] - O) * E),
                      0 === m &&
                        0 === g &&
                        (m =
                          x *
                          S *
                          (Math.abs(h) +
                            Math.abs(E) +
                            Math.abs(l) +
                            Math.abs(p) +
                            Math.abs(P))),
                      (b = Zr(
                        l * j - P * y + E * v,
                        l * R - P * v - E * y,
                        m,
                        g,
                      )),
                      n.set(i, d - 1, b[0]),
                      n.set(i, d, b[1]),
                      Math.abs(l) > Math.abs(P) + Math.abs(E)
                        ? (n.set(
                            i + 1,
                            d - 1,
                            (-y - h * n.get(i, d - 1) + E * n.get(i, d)) / l,
                          ),
                          n.set(
                            i + 1,
                            d,
                            (-v - h * n.get(i, d) - E * n.get(i, d - 1)) / l,
                          ))
                        : ((b = Zr(
                            -j - p * n.get(i, d - 1),
                            -R - p * n.get(i, d),
                            P,
                            E,
                          )),
                          n.set(i + 1, d - 1, b[0]),
                          n.set(i + 1, d, b[1]))),
                  x *
                    (c = Math.max(
                      Math.abs(n.get(i, d - 1)),
                      Math.abs(n.get(i, d)),
                    )) *
                    c >
                    1)
                )
                  for (s = i; s <= d; s++)
                    n.set(s, d - 1, n.get(s, d - 1) / c),
                      n.set(s, d, n.get(s, d) / c);
              }
          for (i = 0; i < t; i++)
            if (i < 0 || i > M)
              for (s = i; s < t; s++) o.set(i, s, n.get(i, s));
          for (s = t - 1; s >= 0; s--)
            for (i = 0; i <= M; i++) {
              for (P = 0, u = 0; u <= Math.min(s, M); u++)
                P += o.get(i, u) * n.get(u, s);
              o.set(i, s, P);
            }
        }
      }
      function Zr(t, r, e, o) {
        var n, i;
        return Math.abs(e) > Math.abs(o)
          ? [(t + (n = o / e) * r) / (i = e + n * o), (r - n * t) / i]
          : [((n = e / o) * t + r) / (i = o + n * e), (n * r - t) / i];
      }
      function $r(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var te = (function () {
        function t(r) {
          if (
            ((function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            !(r = Sr.checkMatrix(r)).isSymmetric())
          )
            throw new Error("Matrix is not symmetric");
          var e,
            o,
            n,
            i = r,
            s = i.rows,
            u = new Y(s, s),
            a = !0;
          for (o = 0; o < s; o++) {
            var f = 0;
            for (n = 0; n < o; n++) {
              var c = 0;
              for (e = 0; e < n; e++) c += u.get(n, e) * u.get(o, e);
              (c = (i.get(o, n) - c) / u.get(n, n)),
                u.set(o, n, c),
                (f += c * c);
            }
            for (
              a &= (f = i.get(o, o) - f) > 0,
                u.set(o, o, Math.sqrt(Math.max(f, 0))),
                n = o + 1;
              n < s;
              n++
            )
              u.set(o, n, 0);
          }
          (this.L = u), (this.positiveDefinite = Boolean(a));
        }
        var r, e, o;
        return (
          (r = t),
          (e = [
            {
              key: "isPositiveDefinite",
              value: function () {
                return this.positiveDefinite;
              },
            },
            {
              key: "solve",
              value: function (t) {
                t = Sr.checkMatrix(t);
                var r = this.L,
                  e = r.rows;
                if (t.rows !== e)
                  throw new Error("Matrix dimensions do not match");
                if (!1 === this.isPositiveDefinite())
                  throw new Error("Matrix is not positive definite");
                var o,
                  n,
                  i,
                  s = t.columns,
                  u = t.clone();
                for (i = 0; i < e; i++)
                  for (n = 0; n < s; n++) {
                    for (o = 0; o < i; o++)
                      u.set(i, n, u.get(i, n) - u.get(o, n) * r.get(i, o));
                    u.set(i, n, u.get(i, n) / r.get(i, i));
                  }
                for (i = e - 1; i >= 0; i--)
                  for (n = 0; n < s; n++) {
                    for (o = i + 1; o < e; o++)
                      u.set(i, n, u.get(i, n) - u.get(o, n) * r.get(o, i));
                    u.set(i, n, u.get(i, n) / r.get(i, i));
                  }
                return u;
              },
            },
            {
              key: "lowerTriangularMatrix",
              get: function () {
                return this.L;
              },
            },
          ]) && $r(r.prototype, e),
          o && $r(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t
        );
      })();
      function re(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function ee(t, r, e) {
        return (
          r && re(t.prototype, r),
          e && re(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function oe(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      var ne = ee(function t(r) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        oe(this, t), (r = Sr.checkMatrix(r));
        var o,
          i = e.Y,
          s = e.scaleScores,
          u = void 0 !== s && s,
          a = e.maxIterations,
          f = void 0 === a ? 1e3 : a,
          c = e.terminationCriteria,
          h = void 0 === c ? 1e-10 : c;
        if (i) {
          if (
            (i =
              n(i) && "number" == typeof i[0]
                ? Y.columnVector(i)
                : Sr.checkMatrix(i)).rows !== r.rows
          )
            throw new Error("Y should have the same number of rows as X");
          o = i.getColumnVector(0);
        } else o = r.getColumnVector(0);
        for (var l, p, y, v, m = 1, g = 0; g < f && m > h; g++)
          (y = (y = r
            .transpose()
            .mmul(o)
            .div(o.transpose().mmul(o).get(0, 0))).div(y.norm())),
            (l = r.mmul(y).div(y.transpose().mmul(y).get(0, 0))),
            g > 0 && (m = l.clone().sub(v).pow(2).sum()),
            (v = l.clone()),
            i
              ? ((p = (p = i
                  .transpose()
                  .mmul(l)
                  .div(l.transpose().mmul(l).get(0, 0))).div(p.norm())),
                (o = i.mmul(p).div(p.transpose().mmul(p).get(0, 0))))
              : (o = l);
        if (i) {
          var w = r.transpose().mmul(l).div(l.transpose().mmul(l).get(0, 0));
          w = w.div(w.norm());
          var b = r.clone().sub(l.clone().mmul(w.transpose())),
            d = o.transpose().mmul(l).div(l.transpose().mmul(l).get(0, 0)),
            M = i.clone().sub(l.clone().mulS(d.get(0, 0)).mmul(p.transpose()));
          (this.t = l),
            (this.p = w.transpose()),
            (this.w = y.transpose()),
            (this.q = p),
            (this.u = o),
            (this.s = l.transpose().mmul(l)),
            (this.xResidual = b),
            (this.yResidual = M),
            (this.betas = d);
        } else
          (this.w = y.transpose()),
            (this.s = l.transpose().mmul(l).sqrt()),
            (this.t = u ? l.clone().div(this.s.get(0, 0)) : l),
            (this.xResidual = r.sub(l.mmul(y.transpose())));
      });
    },
  }).default;
});
//# sourceMappingURL=mdsLayout.js.map
