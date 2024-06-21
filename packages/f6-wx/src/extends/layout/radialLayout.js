!(function (t, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define([], r)
    : "object" == typeof exports
    ? (exports.f6 = r())
    : (t.f6 = r());
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
      e((e.s = 409))
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
    102: function (t, r, e) {
      "use strict";
      e.r(r),
        e.d(r, "AbstractMatrix", function () {
          return Q;
        }),
        e.d(r, "default", function () {
          return K;
        }),
        e.d(r, "Matrix", function () {
          return K;
        }),
        e.d(r, "MatrixColumnView", function () {
          return at;
        }),
        e.d(r, "MatrixColumnSelectionView", function () {
          return yt;
        }),
        e.d(r, "MatrixFlipColumnView", function () {
          return xt;
        }),
        e.d(r, "MatrixFlipRowView", function () {
          return _t;
        }),
        e.d(r, "MatrixRowView", function () {
          return Dt;
        }),
        e.d(r, "MatrixRowSelectionView", function () {
          return Ut;
        }),
        e.d(r, "MatrixSelectionView", function () {
          return Xt;
        }),
        e.d(r, "MatrixSubView", function () {
          return or;
        }),
        e.d(r, "MatrixTransposeView", function () {
          return cr;
        }),
        e.d(r, "wrap", function () {
          return Or;
        }),
        e.d(r, "WrapperMatrix1D", function () {
          return wr;
        }),
        e.d(r, "WrapperMatrix2D", function () {
          return Er;
        }),
        e.d(r, "solve", function () {
          return Dr;
        }),
        e.d(r, "inverse", function () {
          return Cr;
        }),
        e.d(r, "determinant", function () {
          return Vr;
        }),
        e.d(r, "linearDependencies", function () {
          return Br;
        }),
        e.d(r, "pseudoInverse", function () {
          return zr;
        }),
        e.d(r, "covariance", function () {
          return Ur;
        }),
        e.d(r, "correlation", function () {
          return Qr;
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
          return re;
        }),
        e.d(r, "CHO", function () {
          return re;
        }),
        e.d(r, "LuDecomposition", function () {
          return jr;
        }),
        e.d(r, "LU", function () {
          return jr;
        }),
        e.d(r, "QrDecomposition", function () {
          return Tr;
        }),
        e.d(r, "QR", function () {
          return Tr;
        }),
        e.d(r, "Nipals", function () {
          return oe;
        }),
        e.d(r, "NIPALS", function () {
          return oe;
        });
      var o = Object.prototype.toString;
      function n(t) {
        return o.call(t).endsWith("Array]");
      }
      var i = function (t) {
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
      };
      var s = function (t) {
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
      };
      var u = function (t) {
          var r,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (!n(t)) throw new TypeError("input must be an array");
          if (0 === t.length) throw new TypeError("input must not be empty");
          if (void 0 !== e.output) {
            if (!n(e.output))
              throw new TypeError(
                "output option must be an array if specified",
              );
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
        },
        a = " ".repeat(2),
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
      function p(t) {
        return (p =
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
      function v(t, r, e) {
        var o = e ? t.rows : t.rows - 1;
        if (r < 0 || r > o) throw new RangeError("Row index out of range");
      }
      function y(t, r, e) {
        var o = e ? t.columns : t.columns - 1;
        if (r < 0 || r > o) throw new RangeError("Column index out of range");
      }
      function m(t, r) {
        if ((r.to1DArray && (r = r.to1DArray()), r.length !== t.columns))
          throw new RangeError(
            "vector size must be the same as the number of columns",
          );
        return r;
      }
      function g(t, r) {
        if ((r.to1DArray && (r = r.to1DArray()), r.length !== t.rows))
          throw new RangeError(
            "vector size must be the same as the number of rows",
          );
        return r;
      }
      function w(t, r, e) {
        return { row: d(t, r), column: b(t, e) };
      }
      function d(t, r) {
        if ("object" !== p(r))
          throw new TypeError("unexpected type for row indices");
        if (
          r.some(function (r) {
            return r < 0 || r >= t.rows;
          })
        )
          throw new RangeError("row indices are out of range");
        return Array.isArray(r) || (r = Array.from(r)), r;
      }
      function b(t, r) {
        if ("object" !== p(r))
          throw new TypeError("unexpected type for column indices");
        if (
          r.some(function (r) {
            return r < 0 || r >= t.columns;
          })
        )
          throw new RangeError("column indices are out of range");
        return Array.isArray(r) || (r = Array.from(r)), r;
      }
      function M(t, r, e, o, n) {
        if (5 !== arguments.length)
          throw new RangeError("expected 4 arguments");
        if (
          (S("startRow", r),
          S("endRow", e),
          S("startColumn", o),
          S("endColumn", n),
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
      function x(t) {
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
      function S(t, r) {
        if ("number" != typeof r)
          throw new TypeError("".concat(t, " must be a number"));
      }
      function k(t) {
        if (t.isEmpty())
          throw new Error("Empty matrix has no elements to index");
      }
      function E(t, r, e) {
        for (var o = t.rows, n = t.columns, i = [], s = 0; s < o; s++) {
          for (var u = 0, a = 0, f = 0, c = 0; c < n; c++)
            (u += f = t.get(s, c) - e[s]), (a += f * f);
          r
            ? i.push((a - (u * u) / n) / (n - 1))
            : i.push((a - (u * u) / n) / n);
        }
        return i;
      }
      function O(t, r, e) {
        for (var o = t.rows, n = t.columns, i = [], s = 0; s < n; s++) {
          for (var u = 0, a = 0, f = 0, c = 0; c < o; c++)
            (u += f = t.get(c, s) - e[s]), (a += f * f);
          r
            ? i.push((a - (u * u) / o) / (o - 1))
            : i.push((a - (u * u) / o) / o);
        }
        return i;
      }
      function R(t, r, e) {
        for (
          var o = t.rows, n = t.columns, i = o * n, s = 0, u = 0, a = 0, f = 0;
          f < o;
          f++
        )
          for (var c = 0; c < n; c++) (s += a = t.get(f, c) - e), (u += a * a);
        return r ? (u - (s * s) / i) / (i - 1) : (u - (s * s) / i) / i;
      }
      function j(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r[e]);
      }
      function _(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r[o]);
      }
      function P(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r);
      }
      function T(t) {
        for (var r = [], e = 0; e < t.rows; e++) {
          for (var o = 0, n = 0; n < t.columns; n++)
            o += Math.pow(t.get(e, n), 2) / (t.columns - 1);
          r.push(Math.sqrt(o));
        }
        return r;
      }
      function A(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r[e]);
      }
      function I(t) {
        for (var r = [], e = 0; e < t.columns; e++) {
          for (var o = 0, n = 0; n < t.rows; n++)
            o += Math.pow(t.get(n, e), 2) / (t.rows - 1);
          r.push(Math.sqrt(o));
        }
        return r;
      }
      function N(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r[o]);
      }
      function C(t) {
        for (var r = t.size - 1, e = 0, o = 0; o < t.columns; o++)
          for (var n = 0; n < t.rows; n++) e += Math.pow(t.get(n, o), 2) / r;
        return Math.sqrt(e);
      }
      function D(t, r) {
        for (var e = 0; e < t.rows; e++)
          for (var o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r);
      }
      function V(t, r) {
        return (V =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function q(t) {
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
            o = B(t);
          if (r) {
            var n = B(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return F(this, e);
        };
      }
      function F(t, r) {
        return !r || ("object" !== z(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function B(t) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function z(t) {
        return (z =
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
      function U(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function W(t, r, e) {
        return r && U(t.prototype, r), e && U(t, e), t;
      }
      var Q = (function () {
        function t() {
          L(this, t);
        }
        return (
          W(
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
                  if ("object" !== z(t))
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
                    var i = new K(this.rows * e, this.columns * n), s = 0;
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
                  v(this, t);
                  for (var r = [], e = 0; e < this.columns; e++)
                    r.push(this.get(t, e));
                  return r;
                },
              },
              {
                key: "getRowVector",
                value: function (t) {
                  return K.rowVector(this.getRow(t));
                },
              },
              {
                key: "setRow",
                value: function (t, r) {
                  v(this, t), (r = m(this, r));
                  for (var e = 0; e < this.columns; e++) this.set(t, e, r[e]);
                  return this;
                },
              },
              {
                key: "swapRows",
                value: function (t, r) {
                  v(this, t), v(this, r);
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
                  return K.columnVector(this.getColumn(t));
                },
              },
              {
                key: "setColumn",
                value: function (t, r) {
                  y(this, t), (r = g(this, r));
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
                  t = m(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) + t[e]);
                  return this;
                },
              },
              {
                key: "subRowVector",
                value: function (t) {
                  t = m(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) - t[e]);
                  return this;
                },
              },
              {
                key: "mulRowVector",
                value: function (t) {
                  t = m(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) * t[e]);
                  return this;
                },
              },
              {
                key: "divRowVector",
                value: function (t) {
                  t = m(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) / t[e]);
                  return this;
                },
              },
              {
                key: "addColumnVector",
                value: function (t) {
                  t = g(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) + t[r]);
                  return this;
                },
              },
              {
                key: "subColumnVector",
                value: function (t) {
                  t = g(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) - t[r]);
                  return this;
                },
              },
              {
                key: "mulColumnVector",
                value: function (t) {
                  t = g(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) * t[r]);
                  return this;
                },
              },
              {
                key: "divColumnVector",
                value: function (t) {
                  t = g(this, t);
                  for (var r = 0; r < this.rows; r++)
                    for (var e = 0; e < this.columns; e++)
                      this.set(r, e, this.get(r, e) / t[r]);
                  return this;
                },
              },
              {
                key: "mulRow",
                value: function (t, r) {
                  v(this, t);
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
                  k(this);
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
                  k(this);
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
                  if ((v(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(t, 0), e = 1; e < this.columns; e++)
                    this.get(t, e) > r && (r = this.get(t, e));
                  return r;
                },
              },
              {
                key: "maxRowIndex",
                value: function (t) {
                  v(this, t), k(this);
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
                  if ((v(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(t, 0), e = 1; e < this.columns; e++)
                    this.get(t, e) < r && (r = this.get(t, e));
                  return r;
                },
              },
              {
                key: "minRowIndex",
                value: function (t) {
                  v(this, t), k(this);
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
                  y(this, t), k(this);
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
                  y(this, t), k(this);
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
                  t = K.checkMatrix(t);
                  for (
                    var r = this.rows,
                      e = this.columns,
                      o = t.columns,
                      n = new K(r, o),
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
                  t = K.checkMatrix(t);
                  var r = new K(2, 2),
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
                    v = (e + n) * f,
                    y = c + p - v + (n - a) * (u + f),
                    m = l + v,
                    g = h + p,
                    w = c - h + l + (s - e) * (o + i);
                  return (
                    r.set(0, 0, y),
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
                  t = K.checkMatrix(t);
                  var r = new K(3, 3),
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
                    v = t.get(1, 0),
                    y = t.get(1, 1),
                    m = t.get(1, 2),
                    g = t.get(2, 0),
                    w = t.get(2, 1),
                    d = t.get(2, 2),
                    b = (e - i) * (-l + y),
                    M = (-e + i + s) * (h - l + y),
                    x = (i + s) * (-h + l),
                    S = e * h,
                    k = (-e + a + f) * (h - p + m),
                    E = (-e + a) * (p - m),
                    O = (a + f) * (-h + p),
                    R = (-n + f + c) * (y + g - w),
                    j = (n - c) * (y - w),
                    _ = n * g,
                    P = (f + c) * (-g + w),
                    T = (-n + s + u) * (m + g - d),
                    A = (n - u) * (m - d),
                    I = (s + u) * (-g + d),
                    N = S + _ + o * v,
                    C = (e + o + n - i - s - f - c) * y + M + x + S + R + _ + P,
                    D = S + k + O + (e + o + n - s - u - a - f) * m + _ + T + I,
                    V =
                      b + s * (-h + l + v - y - m - g + d) + M + S + _ + T + A,
                    q = b + M + x + S + u * w,
                    F = _ + T + A + I + i * p,
                    B =
                      S + k + E + f * (-h + p + v - y - m - g + w) + R + j + _,
                    z = R + j + _ + P + a * l,
                    L = S + k + E + O + c * d;
                  return (
                    r.set(0, 0, N),
                    r.set(0, 1, C),
                    r.set(0, 2, D),
                    r.set(1, 0, V),
                    r.set(1, 1, q),
                    r.set(1, 2, F),
                    r.set(2, 0, B),
                    r.set(2, 1, z),
                    r.set(2, 2, L),
                    r
                  );
                },
              },
              {
                key: "mmulStrassen",
                value: function (r) {
                  r = K.checkMatrix(r);
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
                      v = o.subMatrix(s, o.rows - 1, 0, a - 1),
                      y = e.subMatrix(s, e.rows - 1, a, e.columns - 1),
                      m = o.subMatrix(s, o.rows - 1, a, o.columns - 1),
                      g = r(t.add(f, y), t.add(c, m), s, a),
                      w = r(t.add(p, y), c, s, a),
                      d = r(f, t.sub(l, m), s, a),
                      b = r(y, t.sub(v, c), s, a),
                      M = r(t.add(f, h), m, s, a),
                      x = r(t.sub(p, f), t.add(c, l), s, a),
                      S = r(t.sub(h, y), t.add(v, m), s, a),
                      k = t.add(g, b);
                    k.sub(M), k.add(S);
                    var E = t.add(d, M),
                      O = t.add(w, b),
                      R = t.sub(g, w);
                    R.add(d), R.add(x);
                    var j = t.zeros(2 * k.rows, 2 * k.columns);
                    return (j = (j = (j = (j = j.setSubMatrix(
                      k,
                      0,
                      0,
                    )).setSubMatrix(E, k.rows, 0)).setSubMatrix(
                      O,
                      0,
                      k.columns,
                    )).setSubMatrix(R, k.rows, k.columns)).subMatrix(
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
                  if ("object" !== z(t))
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
                    var i = new K(this.rows, this.columns), s = 0;
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
                  if ("object" !== z(t))
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
                    var i = new K(this.rows, this.columns), s = 0;
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
                  t = K.checkMatrix(t);
                  for (
                    var r = this.rows,
                      e = this.columns,
                      o = t.rows,
                      n = t.columns,
                      i = new K(r * o, e * n),
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
                    ((t = K.checkMatrix(t)), !this.isSquare() || !t.isSquare())
                  )
                    throw new Error("Kronecker Sum needs two Square Matrices");
                  var r = this.rows,
                    e = t.rows,
                    o = this.kroneckerProduct(K.eye(e, e)),
                    n = K.eye(r, r).kroneckerProduct(t);
                  return o.add(n);
                },
              },
              {
                key: "transpose",
                value: function () {
                  for (
                    var t = new K(this.columns, this.rows), r = 0;
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
                          : J,
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
                          : J,
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
                  M(this, t, r, e, o);
                  for (var n = new K(r - t + 1, o - e + 1), i = t; i <= r; i++)
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
                    var o = new K(t.length, e - r + 1), n = 0;
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
                    var o = new K(e - r + 1, t.length), n = 0;
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
                  if ((t = K.checkMatrix(t)).isEmpty()) return this;
                  M(this, r, r + t.rows - 1, e, e + t.columns - 1);
                  for (var o = 0; o < t.rows; o++)
                    for (var n = 0; n < t.columns; n++)
                      this.set(r + o, e + n, t.get(o, n));
                  return this;
                },
              },
              {
                key: "selection",
                value: function (t, r) {
                  for (
                    var e = w(this, t, r), o = new K(t.length, r.length), n = 0;
                    n < e.row.length;
                    n++
                  )
                    for (var i = e.row[n], s = 0; s < e.column.length; s++) {
                      var u = e.column[s];
                      o.set(n, s, this.get(i, u));
                    }
                  return o;
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
                    var t = new K(this.rows, this.columns), r = 0;
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
                        for (var r = x(t.rows), e = 0; e < t.rows; ++e)
                          for (var o = 0; o < t.columns; ++o)
                            r[e] += t.get(e, o);
                        return r;
                      })(this);
                    case "column":
                      return (function (t) {
                        for (var r = x(t.columns), e = 0; e < t.rows; ++e)
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
                        for (var r = x(t.rows, 1), e = 0; e < t.rows; ++e)
                          for (var o = 0; o < t.columns; ++o)
                            r[e] *= t.get(e, o);
                        return r;
                      })(this);
                    case "column":
                      return (function (t) {
                        for (var r = x(t.columns, 1), e = 0; e < t.rows; ++e)
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
                    ("object" === z(t) && ((r = t), (t = void 0)),
                    "object" !== z(r))
                  )
                    throw new TypeError("options must be an object");
                  var e = r,
                    o = e.unbiased,
                    n = void 0 === o || o,
                    i = e.mean,
                    s = void 0 === i ? this.mean(t) : i;
                  if ("boolean" != typeof n)
                    throw new TypeError("unbiased must be a boolean");
                  switch (t) {
                    case "row":
                      if (!Array.isArray(s))
                        throw new TypeError("mean must be an array");
                      return E(this, n, s);
                    case "column":
                      if (!Array.isArray(s))
                        throw new TypeError("mean must be an array");
                      return O(this, n, s);
                    case void 0:
                      if ("number" != typeof s)
                        throw new TypeError("mean must be a number");
                      return R(this, n, s);
                    default:
                      throw new Error("invalid option: ".concat(t));
                  }
                },
              },
              {
                key: "standardDeviation",
                value: function (t, r) {
                  "object" === z(t) && ((r = t), (t = void 0));
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
                    ("object" === z(t) && ((r = t), (t = void 0)),
                    "object" !== z(r))
                  )
                    throw new TypeError("options must be an object");
                  var e = r,
                    o = e.center,
                    n = void 0 === o ? this.mean(t) : o;
                  switch (t) {
                    case "row":
                      if (!Array.isArray(n))
                        throw new TypeError("center must be an array");
                      return j(this, n), this;
                    case "column":
                      if (!Array.isArray(n))
                        throw new TypeError("center must be an array");
                      return _(this, n), this;
                    case void 0:
                      if ("number" != typeof n)
                        throw new TypeError("center must be a number");
                      return P(this, n), this;
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
                    ("object" === z(t) && ((r = t), (t = void 0)),
                    "object" !== z(r))
                  )
                    throw new TypeError("options must be an object");
                  var e = r.scale;
                  switch (t) {
                    case "row":
                      if (void 0 === e) e = T(this);
                      else if (!Array.isArray(e))
                        throw new TypeError("scale must be an array");
                      return A(this, e), this;
                    case "column":
                      if (void 0 === e) e = I(this);
                      else if (!Array.isArray(e))
                        throw new TypeError("scale must be an array");
                      return N(this, e), this;
                    case void 0:
                      if (void 0 === e) e = C(this);
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
                  for (var o = new K(t, r), n = 0; n < t; n++)
                    for (var i = 0; i < r; i++) o.set(n, i, e[n * r + i]);
                  return o;
                },
              },
              {
                key: "rowVector",
                value: function (t) {
                  for (var r = new K(1, t.length), e = 0; e < t.length; e++)
                    r.set(0, e, t[e]);
                  return r;
                },
              },
              {
                key: "columnVector",
                value: function (t) {
                  for (var r = new K(t.length, 1), e = 0; e < t.length; e++)
                    r.set(e, 0, t[e]);
                  return r;
                },
              },
              {
                key: "zeros",
                value: function (t, r) {
                  return new K(t, r);
                },
              },
              {
                key: "ones",
                value: function (t, r) {
                  return new K(t, r).fill(1);
                },
              },
              {
                key: "rand",
                value: function (t, r) {
                  var e =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if ("object" !== z(e))
                    throw new TypeError("options must be an object");
                  for (
                    var o = e.random,
                      n = void 0 === o ? Math.random : o,
                      i = new K(t, r),
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
                  if ("object" !== z(e))
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
                  for (var f = s - n, c = new K(t, r), h = 0; h < t; h++)
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
                    var e = t.rows, o = t.columns, n = new K(e, o), i = 0;
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
                  return t.isMatrix(r) ? r : new K(r);
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
      function J(t, r) {
        return t - r;
      }
      (Q.prototype.klass = "Matrix"),
        "undefined" != typeof Symbol &&
          (Q.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return c(this);
          }),
        (Q.random = Q.rand),
        (Q.randomInt = Q.randInt),
        (Q.diagonal = Q.diag),
        (Q.prototype.diagonal = Q.prototype.diag),
        (Q.identity = Q.eye),
        (Q.prototype.negate = Q.prototype.neg),
        (Q.prototype.tensorProduct = Q.prototype.kroneckerProduct);
      var H,
        Y,
        K = (function (t) {
          !(function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(r && r.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              r && V(t, r);
          })(e, t);
          var r = q(e);
          function e(t, o) {
            var n;
            if ((L(this, e), (n = r.call(this)), e.isMatrix(t)))
              return F(n, t.clone());
            if (Number.isInteger(t) && t >= 0) {
              if (((n.data = []), !(Number.isInteger(o) && o >= 0)))
                throw new TypeError("nColumns must be a positive integer");
              for (var i = 0; i < t; i++) n.data.push(new Float64Array(o));
            } else {
              if (!Array.isArray(t))
                throw new TypeError(
                  "First argument must be a positive number or an array",
                );
              var s = t;
              if ("number" != typeof (o = (t = s.length) ? s[0].length : 0))
                throw new TypeError(
                  "Data must be a 2D array with at least one element",
                );
              n.data = [];
              for (var u = 0; u < t; u++) {
                if (s[u].length !== o)
                  throw new RangeError("Inconsistent array dimensions");
                n.data.push(Float64Array.from(s[u]));
              }
            }
            return (n.rows = t), (n.columns = o), n;
          }
          return (
            W(e, [
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
                    v(this, t), this.data.splice(t, 1), (this.rows -= 1), this
                  );
                },
              },
              {
                key: "addRow",
                value: function (t, r) {
                  return (
                    void 0 === r && ((r = t), (t = this.rows)),
                    v(this, t, !0),
                    (r = Float64Array.from(m(this, r))),
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
                    (r = g(this, r));
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
        })(Q);
      function X(t) {
        return (X =
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
      function G(t, r) {
        return (G =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Z(t) {
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
            o = tt(t);
          if (r) {
            var n = tt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return $(this, e);
        };
      }
      function $(t, r) {
        return !r || ("object" !== X(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function tt(t) {
        return (tt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      (Y = K),
        ((H = Q).prototype.add = function (t) {
          return "number" == typeof t ? this.addS(t) : this.addM(t);
        }),
        (H.prototype.addS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) + t);
          return this;
        }),
        (H.prototype.addM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) + t.get(r, e));
          return this;
        }),
        (H.add = function (t, r) {
          return new Y(t).add(r);
        }),
        (H.prototype.sub = function (t) {
          return "number" == typeof t ? this.subS(t) : this.subM(t);
        }),
        (H.prototype.subS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) - t);
          return this;
        }),
        (H.prototype.subM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) - t.get(r, e));
          return this;
        }),
        (H.sub = function (t, r) {
          return new Y(t).sub(r);
        }),
        (H.prototype.subtract = H.prototype.sub),
        (H.prototype.subtractS = H.prototype.subS),
        (H.prototype.subtractM = H.prototype.subM),
        (H.subtract = H.sub),
        (H.prototype.mul = function (t) {
          return "number" == typeof t ? this.mulS(t) : this.mulM(t);
        }),
        (H.prototype.mulS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) * t);
          return this;
        }),
        (H.prototype.mulM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) * t.get(r, e));
          return this;
        }),
        (H.mul = function (t, r) {
          return new Y(t).mul(r);
        }),
        (H.prototype.multiply = H.prototype.mul),
        (H.prototype.multiplyS = H.prototype.mulS),
        (H.prototype.multiplyM = H.prototype.mulM),
        (H.multiply = H.mul),
        (H.prototype.div = function (t) {
          return "number" == typeof t ? this.divS(t) : this.divM(t);
        }),
        (H.prototype.divS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) / t);
          return this;
        }),
        (H.prototype.divM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) / t.get(r, e));
          return this;
        }),
        (H.div = function (t, r) {
          return new Y(t).div(r);
        }),
        (H.prototype.divide = H.prototype.div),
        (H.prototype.divideS = H.prototype.divS),
        (H.prototype.divideM = H.prototype.divM),
        (H.divide = H.div),
        (H.prototype.mod = function (t) {
          return "number" == typeof t ? this.modS(t) : this.modM(t);
        }),
        (H.prototype.modS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) % t);
          return this;
        }),
        (H.prototype.modM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) % t.get(r, e));
          return this;
        }),
        (H.mod = function (t, r) {
          return new Y(t).mod(r);
        }),
        (H.prototype.modulus = H.prototype.mod),
        (H.prototype.modulusS = H.prototype.modS),
        (H.prototype.modulusM = H.prototype.modM),
        (H.modulus = H.mod),
        (H.prototype.and = function (t) {
          return "number" == typeof t ? this.andS(t) : this.andM(t);
        }),
        (H.prototype.andS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) & t);
          return this;
        }),
        (H.prototype.andM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) & t.get(r, e));
          return this;
        }),
        (H.and = function (t, r) {
          return new Y(t).and(r);
        }),
        (H.prototype.or = function (t) {
          return "number" == typeof t ? this.orS(t) : this.orM(t);
        }),
        (H.prototype.orS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) | t);
          return this;
        }),
        (H.prototype.orM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) | t.get(r, e));
          return this;
        }),
        (H.or = function (t, r) {
          return new Y(t).or(r);
        }),
        (H.prototype.xor = function (t) {
          return "number" == typeof t ? this.xorS(t) : this.xorM(t);
        }),
        (H.prototype.xorS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) ^ t);
          return this;
        }),
        (H.prototype.xorM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) ^ t.get(r, e));
          return this;
        }),
        (H.xor = function (t, r) {
          return new Y(t).xor(r);
        }),
        (H.prototype.leftShift = function (t) {
          return "number" == typeof t ? this.leftShiftS(t) : this.leftShiftM(t);
        }),
        (H.prototype.leftShiftS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) << t);
          return this;
        }),
        (H.prototype.leftShiftM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) << t.get(r, e));
          return this;
        }),
        (H.leftShift = function (t, r) {
          return new Y(t).leftShift(r);
        }),
        (H.prototype.signPropagatingRightShift = function (t) {
          return "number" == typeof t
            ? this.signPropagatingRightShiftS(t)
            : this.signPropagatingRightShiftM(t);
        }),
        (H.prototype.signPropagatingRightShiftS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) >> t);
          return this;
        }),
        (H.prototype.signPropagatingRightShiftM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) >> t.get(r, e));
          return this;
        }),
        (H.signPropagatingRightShift = function (t, r) {
          return new Y(t).signPropagatingRightShift(r);
        }),
        (H.prototype.rightShift = function (t) {
          return "number" == typeof t
            ? this.rightShiftS(t)
            : this.rightShiftM(t);
        }),
        (H.prototype.rightShiftS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) >>> t);
          return this;
        }),
        (H.prototype.rightShiftM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, this.get(r, e) >>> t.get(r, e));
          return this;
        }),
        (H.rightShift = function (t, r) {
          return new Y(t).rightShift(r);
        }),
        (H.prototype.zeroFillRightShift = H.prototype.rightShift),
        (H.prototype.zeroFillRightShiftS = H.prototype.rightShiftS),
        (H.prototype.zeroFillRightShiftM = H.prototype.rightShiftM),
        (H.zeroFillRightShift = H.rightShift),
        (H.prototype.not = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, ~this.get(t, r));
          return this;
        }),
        (H.not = function (t) {
          return new Y(t).not();
        }),
        (H.prototype.abs = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.abs(this.get(t, r)));
          return this;
        }),
        (H.abs = function (t) {
          return new Y(t).abs();
        }),
        (H.prototype.acos = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.acos(this.get(t, r)));
          return this;
        }),
        (H.acos = function (t) {
          return new Y(t).acos();
        }),
        (H.prototype.acosh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.acosh(this.get(t, r)));
          return this;
        }),
        (H.acosh = function (t) {
          return new Y(t).acosh();
        }),
        (H.prototype.asin = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.asin(this.get(t, r)));
          return this;
        }),
        (H.asin = function (t) {
          return new Y(t).asin();
        }),
        (H.prototype.asinh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.asinh(this.get(t, r)));
          return this;
        }),
        (H.asinh = function (t) {
          return new Y(t).asinh();
        }),
        (H.prototype.atan = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.atan(this.get(t, r)));
          return this;
        }),
        (H.atan = function (t) {
          return new Y(t).atan();
        }),
        (H.prototype.atanh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.atanh(this.get(t, r)));
          return this;
        }),
        (H.atanh = function (t) {
          return new Y(t).atanh();
        }),
        (H.prototype.cbrt = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.cbrt(this.get(t, r)));
          return this;
        }),
        (H.cbrt = function (t) {
          return new Y(t).cbrt();
        }),
        (H.prototype.ceil = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.ceil(this.get(t, r)));
          return this;
        }),
        (H.ceil = function (t) {
          return new Y(t).ceil();
        }),
        (H.prototype.clz32 = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.clz32(this.get(t, r)));
          return this;
        }),
        (H.clz32 = function (t) {
          return new Y(t).clz32();
        }),
        (H.prototype.cos = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.cos(this.get(t, r)));
          return this;
        }),
        (H.cos = function (t) {
          return new Y(t).cos();
        }),
        (H.prototype.cosh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.cosh(this.get(t, r)));
          return this;
        }),
        (H.cosh = function (t) {
          return new Y(t).cosh();
        }),
        (H.prototype.exp = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.exp(this.get(t, r)));
          return this;
        }),
        (H.exp = function (t) {
          return new Y(t).exp();
        }),
        (H.prototype.expm1 = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.expm1(this.get(t, r)));
          return this;
        }),
        (H.expm1 = function (t) {
          return new Y(t).expm1();
        }),
        (H.prototype.floor = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.floor(this.get(t, r)));
          return this;
        }),
        (H.floor = function (t) {
          return new Y(t).floor();
        }),
        (H.prototype.fround = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.fround(this.get(t, r)));
          return this;
        }),
        (H.fround = function (t) {
          return new Y(t).fround();
        }),
        (H.prototype.log = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.log(this.get(t, r)));
          return this;
        }),
        (H.log = function (t) {
          return new Y(t).log();
        }),
        (H.prototype.log1p = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.log1p(this.get(t, r)));
          return this;
        }),
        (H.log1p = function (t) {
          return new Y(t).log1p();
        }),
        (H.prototype.log10 = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.log10(this.get(t, r)));
          return this;
        }),
        (H.log10 = function (t) {
          return new Y(t).log10();
        }),
        (H.prototype.log2 = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.log2(this.get(t, r)));
          return this;
        }),
        (H.log2 = function (t) {
          return new Y(t).log2();
        }),
        (H.prototype.round = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.round(this.get(t, r)));
          return this;
        }),
        (H.round = function (t) {
          return new Y(t).round();
        }),
        (H.prototype.sign = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.sign(this.get(t, r)));
          return this;
        }),
        (H.sign = function (t) {
          return new Y(t).sign();
        }),
        (H.prototype.sin = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.sin(this.get(t, r)));
          return this;
        }),
        (H.sin = function (t) {
          return new Y(t).sin();
        }),
        (H.prototype.sinh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.sinh(this.get(t, r)));
          return this;
        }),
        (H.sinh = function (t) {
          return new Y(t).sinh();
        }),
        (H.prototype.sqrt = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.sqrt(this.get(t, r)));
          return this;
        }),
        (H.sqrt = function (t) {
          return new Y(t).sqrt();
        }),
        (H.prototype.tan = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.tan(this.get(t, r)));
          return this;
        }),
        (H.tan = function (t) {
          return new Y(t).tan();
        }),
        (H.prototype.tanh = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.tanh(this.get(t, r)));
          return this;
        }),
        (H.tanh = function (t) {
          return new Y(t).tanh();
        }),
        (H.prototype.trunc = function () {
          for (var t = 0; t < this.rows; t++)
            for (var r = 0; r < this.columns; r++)
              this.set(t, r, Math.trunc(this.get(t, r)));
          return this;
        }),
        (H.trunc = function (t) {
          return new Y(t).trunc();
        }),
        (H.pow = function (t, r) {
          return new Y(t).pow(r);
        }),
        (H.prototype.pow = function (t) {
          return "number" == typeof t ? this.powS(t) : this.powM(t);
        }),
        (H.prototype.powS = function (t) {
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, Math.pow(this.get(r, e), t));
          return this;
        }),
        (H.prototype.powM = function (t) {
          if (
            ((t = Y.checkMatrix(t)),
            this.rows !== t.rows || this.columns !== t.columns)
          )
            throw new RangeError("Matrices dimensions must be equal");
          for (var r = 0; r < this.rows; r++)
            for (var e = 0; e < this.columns; e++)
              this.set(r, e, Math.pow(this.get(r, e), t.get(r, e)));
          return this;
        });
      var rt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && G(t, r);
        })(e, t);
        var r = Z(e);
        function e(t, o, n) {
          var i;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((i = r.call(this)).matrix = t),
            (i.rows = o),
            (i.columns = n),
            i
          );
        }
        return e;
      })(Q);
      function et(t) {
        return (et =
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
      function ot(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function nt(t, r) {
        return (nt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function it(t) {
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
            o = ut(t);
          if (r) {
            var n = ut(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return st(this, e);
        };
      }
      function st(t, r) {
        return !r || ("object" !== et(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function ut(t) {
        return (ut = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var at = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && nt(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = it(i);
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
          ]) && ot(r.prototype, e),
          o && ot(r, o),
          i
        );
      })(rt);
      function ft(t) {
        return (ft =
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
      function ct(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function ht(t, r) {
        return (ht =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function lt(t) {
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
            o = vt(t);
          if (r) {
            var n = vt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return pt(this, e);
        };
      }
      function pt(t, r) {
        return !r || ("object" !== ft(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function vt(t) {
        return (vt = Object.setPrototypeOf
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
            r && ht(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = lt(i);
        function i(t, r) {
          var e;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            (r = b(t, r)),
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
          ]) && ct(r.prototype, e),
          o && ct(r, o),
          i
        );
      })(rt);
      function mt(t) {
        return (mt =
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
      function gt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function wt(t, r) {
        return (wt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function dt(t) {
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
            o = Mt(t);
          if (r) {
            var n = Mt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return bt(this, e);
        };
      }
      function bt(t, r) {
        return !r || ("object" !== mt(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function Mt(t) {
        return (Mt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var xt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && wt(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = dt(i);
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
          ]) && gt(r.prototype, e),
          o && gt(r, o),
          i
        );
      })(rt);
      function St(t) {
        return (St =
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
      function Et(t, r) {
        return (Et =
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
          return Rt(this, e);
        };
      }
      function Rt(t, r) {
        return !r || ("object" !== St(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function jt(t) {
        return (jt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var _t = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && Et(t, r);
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
          i
        );
      })(rt);
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
      function Tt(t, r) {
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
      function It(t) {
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
            o = Ct(t);
          if (r) {
            var n = Ct(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Nt(this, e);
        };
      }
      function Nt(t, r) {
        return !r || ("object" !== Pt(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function Ct(t) {
        return (Ct = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Dt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && At(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = It(i);
        function i(t, r) {
          var e;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            v(t, r),
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
          ]) && Tt(r.prototype, e),
          o && Tt(r, o),
          i
        );
      })(rt);
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
      function Ft(t, r) {
        return (Ft =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Bt(t) {
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
            o = Lt(t);
          if (r) {
            var n = Lt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return zt(this, e);
        };
      }
      function zt(t, r) {
        return !r || ("object" !== Vt(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function Lt(t) {
        return (Lt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Ut = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && Ft(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = Bt(i);
        function i(t, r) {
          var e;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            (r = d(t, r)),
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
          i
        );
      })(rt);
      function Wt(t) {
        return (Wt =
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
      function Qt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Jt(t, r) {
        return (Jt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Ht(t) {
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
            o = Kt(t);
          if (r) {
            var n = Kt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Yt(this, e);
        };
      }
      function Yt(t, r) {
        return !r || ("object" !== Wt(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function Kt(t) {
        return (Kt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Xt = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && Jt(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = Ht(i);
        function i(t, r, e) {
          var o;
          !(function (t, r) {
            if (!(t instanceof r))
              throw new TypeError("Cannot call a class as a function");
          })(this, i);
          var s = w(t, r, e);
          return (
            ((o = n.call(this, t, s.row.length, s.column.length)).rowIndices =
              s.row),
            (o.columnIndices = s.column),
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
          ]) && Qt(r.prototype, e),
          o && Qt(r, o),
          i
        );
      })(rt);
      function Gt(t) {
        return (Gt =
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
      function Zt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function $t(t, r) {
        return ($t =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function tr(t) {
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
            o = er(t);
          if (r) {
            var n = er(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return rr(this, e);
        };
      }
      function rr(t, r) {
        return !r || ("object" !== Gt(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function er(t) {
        return (er = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var or = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && $t(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = tr(i);
        function i(t, r, e, o, s) {
          var u;
          return (
            (function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            M(t, r, e, o, s),
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
          ]) && Zt(r.prototype, e),
          o && Zt(r, o),
          i
        );
      })(rt);
      function nr(t) {
        return (nr =
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
      function ir(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function sr(t, r) {
        return (sr =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function ur(t) {
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
            o = fr(t);
          if (r) {
            var n = fr(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return ar(this, e);
        };
      }
      function ar(t, r) {
        return !r || ("object" !== nr(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function fr(t) {
        return (fr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var cr = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && sr(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = ur(i);
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
          ]) && ir(r.prototype, e),
          o && ir(r, o),
          i
        );
      })(rt);
      function hr(t) {
        return (hr =
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
      function lr(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function pr(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function vr(t, r) {
        return (vr =
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
            o = gr(t);
          if (r) {
            var n = gr(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return mr(this, e);
        };
      }
      function mr(t, r) {
        return !r || ("object" !== hr(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function gr(t) {
        return (gr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var wr = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && vr(t, r);
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
          lr(this, i);
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
          ]) && pr(r.prototype, e),
          o && pr(r, o),
          i
        );
      })(Q);
      function dr(t) {
        return (dr =
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
      function Mr(t, r) {
        return (Mr =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function xr(t) {
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
          return Sr(this, e);
        };
      }
      function Sr(t, r) {
        return !r || ("object" !== dr(r) && "function" != typeof r)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function kr(t) {
        return (kr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Er = (function (t) {
        !(function (t, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && Mr(t, r);
        })(i, t);
        var r,
          e,
          o,
          n = xr(i);
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
          i
        );
      })(Q);
      function Or(t, r) {
        if (Array.isArray(t))
          return t[0] && Array.isArray(t[0]) ? new Er(t) : new wr(t, r);
        throw new Error("the argument is not an array");
      }
      function Rr(t, r) {
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
            h = (r = Er.checkMatrix(r)).clone(),
            l = h.rows,
            p = h.columns,
            v = new Float64Array(l),
            y = 1;
          for (e = 0; e < l; e++) v[e] = e;
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
              (a = v[i]), (v[i] = v[o]), (v[o] = a), (y = -y);
            }
            if (o < l && 0 !== h.get(o, o))
              for (e = o + 1; e < l; e++)
                h.set(e, o, h.get(e, o) / h.get(o, o));
          }
          (this.LU = h), (this.pivotVector = v), (this.pivotSign = y);
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
                t = K.checkMatrix(t);
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
                    o = new K(r, e),
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
                    o = new K(r, e),
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
          ]) && Rr(r.prototype, e),
          o && Rr(r, o),
          t
        );
      })();
      function _r(t, r) {
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
      var Tr = (function () {
        function t(r) {
          !(function (t, r) {
            if (!(t instanceof r))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var e,
            o,
            n,
            i,
            s = (r = Er.checkMatrix(r)).clone(),
            u = r.rows,
            a = r.columns,
            f = new Float64Array(a);
          for (n = 0; n < a; n++) {
            var c = 0;
            for (e = n; e < u; e++) c = _r(c, s.get(e, n));
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
                t = K.checkMatrix(t);
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
                  n = new K(o, o);
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
                  u = new K(i, s);
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
          t
        );
      })();
      function Ar(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ir(t, r) {
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
          if ((Ar(this, t), (r = Er.checkMatrix(r)).isEmpty()))
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
            v = !1;
          if (n < i)
            if (h) {
              (n = (o = r.transpose()).rows), (i = o.columns), (v = !0);
              var y = l;
              (l = p), (p = y);
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
              d = new K(n, m),
              b = new K(i, i),
              M = new Float64Array(i),
              x = new Float64Array(n),
              S = new Float64Array(g),
              k = 0;
            k < g;
            k++
          )
            S[k] = k;
          for (
            var E = Math.min(n - 1, i),
              O = Math.max(0, Math.min(i - 2, n)),
              R = Math.max(E, O),
              j = 0;
            j < R;
            j++
          ) {
            if (j < E) {
              w[j] = 0;
              for (var _ = j; _ < n; _++) w[j] = _r(w[j], o.get(_, j));
              if (0 !== w[j]) {
                o.get(j, j) < 0 && (w[j] = -w[j]);
                for (var P = j; P < n; P++) o.set(P, j, o.get(P, j) / w[j]);
                o.set(j, j, o.get(j, j) + 1);
              }
              w[j] = -w[j];
            }
            for (var T = j + 1; T < i; T++) {
              if (j < E && 0 !== w[j]) {
                for (var A = 0, I = j; I < n; I++)
                  A += o.get(I, j) * o.get(I, T);
                A = -A / o.get(j, j);
                for (var N = j; N < n; N++)
                  o.set(N, T, o.get(N, T) + A * o.get(N, j));
              }
              M[T] = o.get(j, T);
            }
            if (l && j < E)
              for (var C = j; C < n; C++) d.set(C, j, o.get(C, j));
            if (j < O) {
              M[j] = 0;
              for (var D = j + 1; D < i; D++) M[j] = _r(M[j], M[D]);
              if (0 !== M[j]) {
                M[j + 1] < 0 && (M[j] = 0 - M[j]);
                for (var V = j + 1; V < i; V++) M[V] /= M[j];
                M[j + 1] += 1;
              }
              if (((M[j] = -M[j]), j + 1 < n && 0 !== M[j])) {
                for (var q = j + 1; q < n; q++) x[q] = 0;
                for (var F = j + 1; F < n; F++)
                  for (var B = j + 1; B < i; B++) x[F] += M[B] * o.get(F, B);
                for (var z = j + 1; z < i; z++)
                  for (var L = -M[z] / M[j + 1], U = j + 1; U < n; U++)
                    o.set(U, z, o.get(U, z) + L * x[U]);
              }
              if (p) for (var W = j + 1; W < i; W++) b.set(W, j, M[W]);
            }
          }
          var Q = Math.min(i, n + 1);
          if (
            (E < i && (w[E] = o.get(E, E)),
            n < Q && (w[Q - 1] = 0),
            O + 1 < Q && (M[O] = o.get(O, Q - 1)),
            (M[Q - 1] = 0),
            l)
          ) {
            for (var J = E; J < m; J++) {
              for (var H = 0; H < n; H++) d.set(H, J, 0);
              d.set(J, J, 1);
            }
            for (var Y = E - 1; Y >= 0; Y--)
              if (0 !== w[Y]) {
                for (var X = Y + 1; X < m; X++) {
                  for (var G = 0, Z = Y; Z < n; Z++)
                    G += d.get(Z, Y) * d.get(Z, X);
                  G = -G / d.get(Y, Y);
                  for (var $ = Y; $ < n; $++)
                    d.set($, X, d.get($, X) + G * d.get($, Y));
                }
                for (var tt = Y; tt < n; tt++) d.set(tt, Y, -d.get(tt, Y));
                d.set(Y, Y, 1 + d.get(Y, Y));
                for (var rt = 0; rt < Y - 1; rt++) d.set(rt, Y, 0);
              } else {
                for (var et = 0; et < n; et++) d.set(et, Y, 0);
                d.set(Y, Y, 1);
              }
          }
          if (p)
            for (var ot = i - 1; ot >= 0; ot--) {
              if (ot < O && 0 !== M[ot])
                for (var nt = ot + 1; nt < i; nt++) {
                  for (var it = 0, st = ot + 1; st < i; st++)
                    it += b.get(st, ot) * b.get(st, nt);
                  it = -it / b.get(ot + 1, ot);
                  for (var ut = ot + 1; ut < i; ut++)
                    b.set(ut, nt, b.get(ut, nt) + it * b.get(ut, ot));
                }
              for (var at = 0; at < i; at++) b.set(at, ot, 0);
              b.set(ot, ot, 1);
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
              var vt = void 0;
              for (vt = Q - 1; vt >= ht && vt !== ht; vt--) {
                var yt =
                  (vt !== Q ? Math.abs(M[vt]) : 0) +
                  (vt !== ht + 1 ? Math.abs(M[vt - 1]) : 0);
                if (Math.abs(w[vt]) <= ct * yt) {
                  w[vt] = 0;
                  break;
                }
              }
              vt === ht
                ? (lt = 3)
                : vt === Q - 1
                ? (lt = 1)
                : ((lt = 2), (ht = vt));
            }
            switch ((ht++, lt)) {
              case 1:
                var mt = M[Q - 2];
                M[Q - 2] = 0;
                for (var gt = Q - 2; gt >= ht; gt--) {
                  var wt = _r(w[gt], mt),
                    dt = w[gt] / wt,
                    bt = mt / wt;
                  if (
                    ((w[gt] = wt),
                    gt !== ht &&
                      ((mt = -bt * M[gt - 1]), (M[gt - 1] = dt * M[gt - 1])),
                    p)
                  )
                    for (var Mt = 0; Mt < i; Mt++)
                      (wt = dt * b.get(Mt, gt) + bt * b.get(Mt, Q - 1)),
                        b.set(
                          Mt,
                          Q - 1,
                          -bt * b.get(Mt, gt) + dt * b.get(Mt, Q - 1),
                        ),
                        b.set(Mt, gt, wt);
                }
                break;
              case 2:
                var xt = M[ht - 1];
                M[ht - 1] = 0;
                for (var St = ht; St < Q; St++) {
                  var kt = _r(w[St], xt),
                    Et = w[St] / kt,
                    Ot = xt / kt;
                  if (
                    ((w[St] = kt), (xt = -Ot * M[St]), (M[St] = Et * M[St]), l)
                  )
                    for (var Rt = 0; Rt < n; Rt++)
                      (kt = Et * d.get(Rt, St) + Ot * d.get(Rt, ht - 1)),
                        d.set(
                          Rt,
                          ht - 1,
                          -Ot * d.get(Rt, St) + Et * d.get(Rt, ht - 1),
                        ),
                        d.set(Rt, St, kt);
                }
                break;
              case 3:
                var jt = Math.max(
                    Math.abs(w[Q - 1]),
                    Math.abs(w[Q - 2]),
                    Math.abs(M[Q - 2]),
                    Math.abs(w[ht]),
                    Math.abs(M[ht]),
                  ),
                  _t = w[Q - 1] / jt,
                  Pt = w[Q - 2] / jt,
                  Tt = M[Q - 2] / jt,
                  At = w[ht] / jt,
                  It = M[ht] / jt,
                  Nt = ((Pt + _t) * (Pt - _t) + Tt * Tt) / 2,
                  Ct = _t * Tt * (_t * Tt),
                  Dt = 0;
                (0 === Nt && 0 === Ct) ||
                  (Dt =
                    Ct /
                    (Nt +
                      (Dt =
                        Nt < 0
                          ? 0 - Math.sqrt(Nt * Nt + Ct)
                          : Math.sqrt(Nt * Nt + Ct))));
                for (
                  var Vt = (At + _t) * (At - _t) + Dt, qt = At * It, Ft = ht;
                  Ft < Q - 1;
                  Ft++
                ) {
                  var Bt = _r(Vt, qt);
                  0 === Bt && (Bt = Number.MIN_VALUE);
                  var zt = Vt / Bt,
                    Lt = qt / Bt;
                  if (
                    (Ft !== ht && (M[Ft - 1] = Bt),
                    (Vt = zt * w[Ft] + Lt * M[Ft]),
                    (M[Ft] = zt * M[Ft] - Lt * w[Ft]),
                    (qt = Lt * w[Ft + 1]),
                    (w[Ft + 1] = zt * w[Ft + 1]),
                    p)
                  )
                    for (var Ut = 0; Ut < i; Ut++)
                      (Bt = zt * b.get(Ut, Ft) + Lt * b.get(Ut, Ft + 1)),
                        b.set(
                          Ut,
                          Ft + 1,
                          -Lt * b.get(Ut, Ft) + zt * b.get(Ut, Ft + 1),
                        ),
                        b.set(Ut, Ft, Bt);
                  if (
                    (0 === (Bt = _r(Vt, qt)) && (Bt = Number.MIN_VALUE),
                    (zt = Vt / Bt),
                    (Lt = qt / Bt),
                    (w[Ft] = Bt),
                    (Vt = zt * M[Ft] + Lt * w[Ft + 1]),
                    (w[Ft + 1] = -Lt * M[Ft] + zt * w[Ft + 1]),
                    (qt = Lt * M[Ft + 1]),
                    (M[Ft + 1] = zt * M[Ft + 1]),
                    l && Ft < n - 1)
                  )
                    for (var Wt = 0; Wt < n; Wt++)
                      (Bt = zt * d.get(Wt, Ft) + Lt * d.get(Wt, Ft + 1)),
                        d.set(
                          Wt,
                          Ft + 1,
                          -Lt * d.get(Wt, Ft) + zt * d.get(Wt, Ft + 1),
                        ),
                        d.set(Wt, Ft, Bt);
                }
                (M[Q - 2] = Vt), 1;
                break;
              case 4:
                if (w[ht] <= 0 && ((w[ht] = w[ht] < 0 ? -w[ht] : 0), p))
                  for (var Qt = 0; Qt <= ft; Qt++)
                    b.set(Qt, ht, -b.get(Qt, ht));
                for (; ht < ft && !(w[ht] >= w[ht + 1]); ) {
                  var Jt = w[ht];
                  if (((w[ht] = w[ht + 1]), (w[ht + 1] = Jt), p && ht < i - 1))
                    for (var Ht = 0; Ht < i; Ht++)
                      (Jt = b.get(Ht, ht + 1)),
                        b.set(Ht, ht + 1, b.get(Ht, ht)),
                        b.set(Ht, ht, Jt);
                  if (l && ht < n - 1)
                    for (var Yt = 0; Yt < n; Yt++)
                      (Jt = d.get(Yt, ht + 1)),
                        d.set(Yt, ht + 1, d.get(Yt, ht)),
                        d.set(Yt, ht, Jt);
                  ht++;
                }
                0, Q--;
            }
          }
          if (v) {
            var Kt = b;
            (b = d), (d = Kt);
          }
          (this.m = n), (this.n = i), (this.s = w), (this.U = d), (this.V = b);
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
                    n = K.zeros(o, o),
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
                    h = K.zeros(f, c),
                    l = 0;
                  l < f;
                  l++
                )
                  for (var p = 0; p < c; p++) {
                    for (var v = 0, y = 0; y < o; y++)
                      v += a.get(l, y) * s.get(p, y);
                    h.set(l, p, v);
                  }
                return h.mmul(r);
              },
            },
            {
              key: "solveForDiagonal",
              value: function (t) {
                return this.solve(K.diag(t));
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
                    n = new K(e, this.s.length),
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
                    c = new K(e, a),
                    h = 0;
                  h < e;
                  h++
                )
                  for (var l = 0; l < a; l++) {
                    for (var p = 0, v = 0; v < f; v++)
                      p += n.get(h, v) * u.get(l, v);
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
                return K.diag(this.s);
              },
            },
          ]) && Ir(r.prototype, e),
          o && Ir(r, o),
          t
        );
      })();
      function Cr(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (t = Er.checkMatrix(t)),
          r ? new Nr(t).inverse() : Dr(t, K.eye(t.rows))
        );
      }
      function Dr(t, r) {
        var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          (t = Er.checkMatrix(t)),
          (r = Er.checkMatrix(r)),
          e
            ? new Nr(t).solve(r)
            : t.isSquare()
            ? new jr(t).solve(r)
            : new Tr(t).solve(r)
        );
      }
      function Vr(t) {
        var r, e, o, n, i, s;
        if ((t = K.checkMatrix(t)).isSquare())
          return 0 === t.columns
            ? 1
            : 2 === t.columns
            ? ((r = t.get(0, 0)),
              (e = t.get(0, 1)),
              (o = t.get(1, 0)),
              r * t.get(1, 1) - e * o)
            : 3 === t.columns
            ? ((n = new Xt(t, [1, 2], [1, 2])),
              (i = new Xt(t, [1, 2], [0, 2])),
              (s = new Xt(t, [1, 2], [0, 1])),
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
      function Fr(t, r, e) {
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
      function Br(t) {
        for (
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            e = r.thresholdValue,
            o = void 0 === e ? 1e-9 : e,
            n = r.thresholdError,
            i = void 0 === n ? 1e-9 : n,
            s = (t = K.checkMatrix(t)).rows,
            u = new K(s, s),
            a = 0;
          a < s;
          a++
        ) {
          var f = K.columnVector(t.getRow(a)),
            c = t.subMatrixRow(qr(s, a)).transpose(),
            h = new Nr(c),
            l = h.solve(f),
            p = K.sub(f, c.mmul(l)).abs().max();
          u.setRow(a, Fr(p, l, a, o, i));
        }
        return u;
      }
      function zr(t) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Number.EPSILON;
        if ((t = K.checkMatrix(t)).isEmpty()) return t.transpose();
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
        return n.mmul(K.diag(i).mmul(o.transpose()));
      }
      function Lr(t) {
        return (Lr =
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
      function Ur(t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
          e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t = new K(t);
        var o = !1;
        if (
          ("object" !== Lr(r) || K.isMatrix(r) || Array.isArray(r)
            ? (r = new K(r))
            : ((e = r), (r = t), (o = !0)),
          t.rows !== r.rows)
        )
          throw new TypeError(
            "Both matrices must have the same number of rows",
          );
        var n = e,
          i = n.center,
          s = void 0 === i || i;
        s && ((t = t.center("column")), o || (r = r.center("column")));
        for (var u = t.transpose().mmul(r), a = 0; a < u.rows; a++)
          for (var f = 0; f < u.columns; f++)
            u.set(a, f, u.get(a, f) * (1 / (t.rows - 1)));
        return u;
      }
      function Wr(t) {
        return (Wr =
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
      function Qr(t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
          e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t = new K(t);
        var o = !1;
        if (
          ("object" !== Wr(r) || K.isMatrix(r) || Array.isArray(r)
            ? (r = new K(r))
            : ((e = r), (r = t), (o = !0)),
          t.rows !== r.rows)
        )
          throw new TypeError(
            "Both matrices must have the same number of rows",
          );
        var n = e,
          i = n.center,
          s = void 0 === i || i,
          u = n.scale,
          a = void 0 === u || u;
        s && (t.center("column"), o || r.center("column")),
          a && (t.scale("column"), o || r.scale("column"));
        for (
          var f = t.standardDeviation("column", { unbiased: !0 }),
            c = o ? f : r.standardDeviation("column", { unbiased: !0 }),
            h = t.transpose().mmul(r),
            l = 0;
          l < h.rows;
          l++
        )
          for (var p = 0; p < h.columns; p++)
            h.set(l, p, h.get(l, p) * (1 / (f[l] * c[p])) * (1 / (t.rows - 1)));
        return h;
      }
      function Jr(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function Hr(t, r) {
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
          Jr(this, t);
          var o = e.assumeSymmetric,
            n = void 0 !== o && o;
          if (!(r = Er.checkMatrix(r)).isSquare())
            throw new Error("Matrix is not a square matrix");
          if (r.isEmpty()) throw new Error("Matrix must be non-empty");
          var i,
            s,
            u = r.columns,
            a = new K(u, u),
            f = new Float64Array(u),
            c = new Float64Array(u),
            h = r;
          if (!!n || r.isSymmetric()) {
            for (i = 0; i < u; i++)
              for (s = 0; s < u; s++) a.set(i, s, h.get(i, s));
            Kr(u, c, f, a), Xr(u, c, f, a);
          } else {
            var l = new K(u, u),
              p = new Float64Array(u);
            for (s = 0; s < u; s++)
              for (i = 0; i < u; i++) l.set(i, s, h.get(i, s));
            Gr(u, l, p, a), Zr(u, c, f, a, l);
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
                  i = new K(e, e);
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
          ]) && Hr(r.prototype, e),
          o && Hr(r, o),
          t
        );
      })();
      function Kr(t, r, e, o) {
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
      function Xr(t, r, e, o) {
        var n, i, s, u, a, f, c, h, l, p, v, y, m, g, w, d;
        for (s = 1; s < t; s++) r[s - 1] = r[s];
        r[t - 1] = 0;
        var b = 0,
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
                  l = _r((h = (e[f + 1] - n) / (2 * r[f])), 1),
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
                b += i,
                  h = e[c],
                  y = v = 1,
                  m = v,
                  g = r[f + 1],
                  w = 0,
                  d = 0,
                  s = c - 1;
                s >= f;
                s--
              )
                for (
                  m = y,
                    y = v,
                    d = w,
                    n = v * r[s],
                    i = v * h,
                    l = _r(h, r[s]),
                    r[s + 1] = w * l,
                    w = r[s] / l,
                    h = (v = h / l) * e[s] - w * n,
                    e[s + 1] = i + w * (v * n + w * e[s]),
                    a = 0;
                  a < t;
                  a++
                )
                  (i = o.get(a, s + 1)),
                    o.set(a, s + 1, w * o.get(a, s) + v * i),
                    o.set(a, s, v * o.get(a, s) - w * i);
              (h = (-w * d * m * g * r[f]) / p), (r[f] = w * h), (e[f] = v * h);
            } while (Math.abs(r[f]) > x * M);
          }
          (e[f] = e[f] + b), (r[f] = 0);
        }
        for (s = 0; s < t - 1; s++) {
          for (a = s, h = e[s], u = s + 1; u < t; u++)
            e[u] < h && ((a = u), (h = e[u]));
          if (a !== s)
            for (e[a] = e[s], e[s] = h, u = 0; u < t; u++)
              (h = o.get(u, s)), o.set(u, s, o.get(u, a)), o.set(u, a, h);
        }
      }
      function Gr(t, r, e, o) {
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
      function Zr(t, r, e, o, n) {
        var i,
          s,
          u,
          a,
          f,
          c,
          h,
          l,
          p,
          v,
          y,
          m,
          g,
          w,
          d,
          b = t - 1,
          M = t - 1,
          x = Number.EPSILON,
          S = 0,
          k = 0,
          E = 0,
          O = 0,
          R = 0,
          j = 0,
          _ = 0,
          P = 0;
        for (i = 0; i < t; i++)
          for (
            (i < 0 || i > M) && ((e[i] = n.get(i, i)), (r[i] = 0)),
              s = Math.max(i - 1, 0);
            s < t;
            s++
          )
            k += Math.abs(n.get(i, s));
        for (; b >= 0; ) {
          for (
            a = b;
            a > 0 &&
            (0 ===
              (j = Math.abs(n.get(a - 1, a - 1)) + Math.abs(n.get(a, a))) &&
              (j = k),
            !(Math.abs(n.get(a, a - 1)) < x * j));

          )
            a--;
          if (a === b)
            n.set(b, b, n.get(b, b) + S),
              (e[b] = n.get(b, b)),
              (r[b] = 0),
              b--,
              (P = 0);
          else if (a === b - 1) {
            if (
              ((h = n.get(b, b - 1) * n.get(b - 1, b)),
              (O = (E = (n.get(b - 1, b - 1) - n.get(b, b)) / 2) * E + h),
              (_ = Math.sqrt(Math.abs(O))),
              n.set(b, b, n.get(b, b) + S),
              n.set(b - 1, b - 1, n.get(b - 1, b - 1) + S),
              (l = n.get(b, b)),
              O >= 0)
            ) {
              for (
                _ = E >= 0 ? E + _ : E - _,
                  e[b - 1] = l + _,
                  e[b] = e[b - 1],
                  0 !== _ && (e[b] = l - h / _),
                  r[b - 1] = 0,
                  r[b] = 0,
                  E = (l = n.get(b, b - 1)) / (j = Math.abs(l) + Math.abs(_)),
                  O = _ / j,
                  E /= R = Math.sqrt(E * E + O * O),
                  O /= R,
                  s = b - 1;
                s < t;
                s++
              )
                (_ = n.get(b - 1, s)),
                  n.set(b - 1, s, O * _ + E * n.get(b, s)),
                  n.set(b, s, O * n.get(b, s) - E * _);
              for (i = 0; i <= b; i++)
                (_ = n.get(i, b - 1)),
                  n.set(i, b - 1, O * _ + E * n.get(i, b)),
                  n.set(i, b, O * n.get(i, b) - E * _);
              for (i = 0; i <= M; i++)
                (_ = o.get(i, b - 1)),
                  o.set(i, b - 1, O * _ + E * o.get(i, b)),
                  o.set(i, b, O * o.get(i, b) - E * _);
            } else
              (e[b - 1] = l + E), (e[b] = l + E), (r[b - 1] = _), (r[b] = -_);
            (b -= 2), (P = 0);
          } else {
            if (
              ((l = n.get(b, b)),
              (p = 0),
              (h = 0),
              a < b &&
                ((p = n.get(b - 1, b - 1)),
                (h = n.get(b, b - 1) * n.get(b - 1, b))),
              10 === P)
            ) {
              for (S += l, i = 0; i <= b; i++) n.set(i, i, n.get(i, i) - l);
              (l = p =
                0.75 *
                (j =
                  Math.abs(n.get(b, b - 1)) + Math.abs(n.get(b - 1, b - 2)))),
                (h = -0.4375 * j * j);
            }
            if (30 === P && (j = (j = (p - l) / 2) * j + h) > 0) {
              for (
                j = Math.sqrt(j),
                  p < l && (j = -j),
                  j = l - h / ((p - l) / 2 + j),
                  i = 0;
                i <= b;
                i++
              )
                n.set(i, i, n.get(i, i) - j);
              (S += j), (l = p = h = 0.964);
            }
            for (
              P += 1, f = b - 2;
              f >= a &&
              ((E =
                ((R = l - (_ = n.get(f, f))) * (j = p - _) - h) /
                  n.get(f + 1, f) +
                n.get(f, f + 1)),
              (O = n.get(f + 1, f + 1) - _ - R - j),
              (R = n.get(f + 2, f + 1)),
              (E /= j = Math.abs(E) + Math.abs(O) + Math.abs(R)),
              (O /= j),
              (R /= j),
              f !== a) &&
              !(
                Math.abs(n.get(f, f - 1)) * (Math.abs(O) + Math.abs(R)) <
                x *
                  (Math.abs(E) *
                    (Math.abs(n.get(f - 1, f - 1)) +
                      Math.abs(_) +
                      Math.abs(n.get(f + 1, f + 1))))
              );

            )
              f--;
            for (i = f + 2; i <= b; i++)
              n.set(i, i - 2, 0), i > f + 2 && n.set(i, i - 3, 0);
            for (
              u = f;
              u <= b - 1 &&
              ((w = u !== b - 1),
              u !== f &&
                ((E = n.get(u, u - 1)),
                (O = n.get(u + 1, u - 1)),
                (R = w ? n.get(u + 2, u - 1) : 0),
                0 !== (l = Math.abs(E) + Math.abs(O) + Math.abs(R)) &&
                  ((E /= l), (O /= l), (R /= l))),
              0 !== l);
              u++
            )
              if (
                ((j = Math.sqrt(E * E + O * O + R * R)),
                E < 0 && (j = -j),
                0 !== j)
              ) {
                for (
                  u !== f
                    ? n.set(u, u - 1, -j * l)
                    : a !== f && n.set(u, u - 1, -n.get(u, u - 1)),
                    l = (E += j) / j,
                    p = O / j,
                    _ = R / j,
                    O /= E,
                    R /= E,
                    s = u;
                  s < t;
                  s++
                )
                  (E = n.get(u, s) + O * n.get(u + 1, s)),
                    w &&
                      ((E += R * n.get(u + 2, s)),
                      n.set(u + 2, s, n.get(u + 2, s) - E * _)),
                    n.set(u, s, n.get(u, s) - E * l),
                    n.set(u + 1, s, n.get(u + 1, s) - E * p);
                for (i = 0; i <= Math.min(b, u + 3); i++)
                  (E = l * n.get(i, u) + p * n.get(i, u + 1)),
                    w &&
                      ((E += _ * n.get(i, u + 2)),
                      n.set(i, u + 2, n.get(i, u + 2) - E * R)),
                    n.set(i, u, n.get(i, u) - E),
                    n.set(i, u + 1, n.get(i, u + 1) - E * O);
                for (i = 0; i <= M; i++)
                  (E = l * o.get(i, u) + p * o.get(i, u + 1)),
                    w &&
                      ((E += _ * o.get(i, u + 2)),
                      o.set(i, u + 2, o.get(i, u + 2) - E * R)),
                    o.set(i, u, o.get(i, u) - E),
                    o.set(i, u + 1, o.get(i, u + 1) - E * O);
              }
          }
        }
        if (0 !== k) {
          for (b = t - 1; b >= 0; b--)
            if (((E = e[b]), 0 === (O = r[b])))
              for (a = b, n.set(b, b, 1), i = b - 1; i >= 0; i--) {
                for (h = n.get(i, i) - E, R = 0, s = a; s <= b; s++)
                  R += n.get(i, s) * n.get(s, b);
                if (r[i] < 0) (_ = h), (j = R);
                else if (
                  ((a = i),
                  0 === r[i]
                    ? n.set(i, b, 0 !== h ? -R / h : -R / (x * k))
                    : ((l = n.get(i, i + 1)),
                      (p = n.get(i + 1, i)),
                      (c =
                        (l * j - _ * R) /
                        (O = (e[i] - E) * (e[i] - E) + r[i] * r[i])),
                      n.set(i, b, c),
                      n.set(
                        i + 1,
                        b,
                        Math.abs(l) > Math.abs(_)
                          ? (-R - h * c) / l
                          : (-j - p * c) / _,
                      )),
                  x * (c = Math.abs(n.get(i, b))) * c > 1)
                )
                  for (s = i; s <= b; s++) n.set(s, b, n.get(s, b) / c);
              }
            else if (O < 0)
              for (
                a = b - 1,
                  Math.abs(n.get(b, b - 1)) > Math.abs(n.get(b - 1, b))
                    ? (n.set(b - 1, b - 1, O / n.get(b, b - 1)),
                      n.set(b - 1, b, -(n.get(b, b) - E) / n.get(b, b - 1)))
                    : ((d = $r(
                        0,
                        -n.get(b - 1, b),
                        n.get(b - 1, b - 1) - E,
                        O,
                      )),
                      n.set(b - 1, b - 1, d[0]),
                      n.set(b - 1, b, d[1])),
                  n.set(b, b - 1, 0),
                  n.set(b, b, 1),
                  i = b - 2;
                i >= 0;
                i--
              ) {
                for (v = 0, y = 0, s = a; s <= b; s++)
                  (v += n.get(i, s) * n.get(s, b - 1)),
                    (y += n.get(i, s) * n.get(s, b));
                if (((h = n.get(i, i) - E), r[i] < 0))
                  (_ = h), (R = v), (j = y);
                else if (
                  ((a = i),
                  0 === r[i]
                    ? ((d = $r(-v, -y, h, O)),
                      n.set(i, b - 1, d[0]),
                      n.set(i, b, d[1]))
                    : ((l = n.get(i, i + 1)),
                      (p = n.get(i + 1, i)),
                      (m = (e[i] - E) * (e[i] - E) + r[i] * r[i] - O * O),
                      (g = 2 * (e[i] - E) * O),
                      0 === m &&
                        0 === g &&
                        (m =
                          x *
                          k *
                          (Math.abs(h) +
                            Math.abs(O) +
                            Math.abs(l) +
                            Math.abs(p) +
                            Math.abs(_))),
                      (d = $r(
                        l * R - _ * v + O * y,
                        l * j - _ * y - O * v,
                        m,
                        g,
                      )),
                      n.set(i, b - 1, d[0]),
                      n.set(i, b, d[1]),
                      Math.abs(l) > Math.abs(_) + Math.abs(O)
                        ? (n.set(
                            i + 1,
                            b - 1,
                            (-v - h * n.get(i, b - 1) + O * n.get(i, b)) / l,
                          ),
                          n.set(
                            i + 1,
                            b,
                            (-y - h * n.get(i, b) - O * n.get(i, b - 1)) / l,
                          ))
                        : ((d = $r(
                            -R - p * n.get(i, b - 1),
                            -j - p * n.get(i, b),
                            _,
                            O,
                          )),
                          n.set(i + 1, b - 1, d[0]),
                          n.set(i + 1, b, d[1]))),
                  x *
                    (c = Math.max(
                      Math.abs(n.get(i, b - 1)),
                      Math.abs(n.get(i, b)),
                    )) *
                    c >
                    1)
                )
                  for (s = i; s <= b; s++)
                    n.set(s, b - 1, n.get(s, b - 1) / c),
                      n.set(s, b, n.get(s, b) / c);
              }
          for (i = 0; i < t; i++)
            if (i < 0 || i > M)
              for (s = i; s < t; s++) o.set(i, s, n.get(i, s));
          for (s = t - 1; s >= 0; s--)
            for (i = 0; i <= M; i++) {
              for (_ = 0, u = 0; u <= Math.min(s, M); u++)
                _ += o.get(i, u) * n.get(u, s);
              o.set(i, s, _);
            }
        }
      }
      function $r(t, r, e, o) {
        var n, i;
        return Math.abs(e) > Math.abs(o)
          ? [(t + (n = o / e) * r) / (i = e + n * o), (r - n * t) / i]
          : [((n = e / o) * t + r) / (i = o + n * e), (n * r - t) / i];
      }
      function te(t, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var re = (function () {
        function t(r) {
          if (
            ((function (t, r) {
              if (!(t instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            !(r = Er.checkMatrix(r)).isSymmetric())
          )
            throw new Error("Matrix is not symmetric");
          var e,
            o,
            n,
            i = r,
            s = i.rows,
            u = new K(s, s),
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
                t = Er.checkMatrix(t);
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
          ]) && te(r.prototype, e),
          o && te(r, o),
          t
        );
      })();
      function ee(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      var oe = function t(r) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ee(this, t), (r = Er.checkMatrix(r));
        var o,
          n = e.Y,
          i = e.scaleScores,
          s = void 0 !== i && i,
          u = e.maxIterations,
          a = void 0 === u ? 1e3 : u,
          f = e.terminationCriteria,
          c = void 0 === f ? 1e-10 : f;
        if (n) {
          if (
            (n =
              Array.isArray(n) && "number" == typeof n[0]
                ? K.columnVector(n)
                : Er.checkMatrix(n)).rows !== r.rows
          )
            throw new Error("Y should have the same number of rows as X");
          o = n.getColumnVector(0);
        } else o = r.getColumnVector(0);
        for (var h, l, p, v, y = 1, m = 0; m < a && y > c; m++)
          (p = (p = r
            .transpose()
            .mmul(o)
            .div(o.transpose().mmul(o).get(0, 0))).div(p.norm())),
            (h = r.mmul(p).div(p.transpose().mmul(p).get(0, 0))),
            m > 0 && (y = h.clone().sub(v).pow(2).sum()),
            (v = h.clone()),
            n
              ? ((l = (l = n
                  .transpose()
                  .mmul(h)
                  .div(h.transpose().mmul(h).get(0, 0))).div(l.norm())),
                (o = n.mmul(l).div(l.transpose().mmul(l).get(0, 0))))
              : (o = h);
        if (n) {
          var g = r.transpose().mmul(h).div(h.transpose().mmul(h).get(0, 0));
          g = g.div(g.norm());
          var w = r.clone().sub(h.clone().mmul(g.transpose())),
            d = o.transpose().mmul(h).div(h.transpose().mmul(h).get(0, 0)),
            b = n.clone().sub(h.clone().mulS(d.get(0, 0)).mmul(l.transpose()));
          (this.t = h),
            (this.p = g.transpose()),
            (this.w = p.transpose()),
            (this.q = l),
            (this.u = o),
            (this.s = h.transpose().mmul(h)),
            (this.xResidual = w),
            (this.yResidual = b),
            (this.betas = d);
        } else
          (this.w = p.transpose()),
            (this.s = h.transpose().mmul(h).sqrt()),
            (this.t = s ? h.clone().div(this.s.get(0, 0)) : h),
            (this.xResidual = r.sub(h.mmul(p.transpose())));
      };
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
    181: function (t, r, e) {
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
      Object.defineProperty(r, "__esModule", { value: !0 }), n(e(410), r);
    },
    409: function (t, r, e) {
      "use strict";
      e.r(r);
      var o = e(181);
      r.default = o.RadialLayout;
    },
    410: function (t, r, e) {
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
          }),
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.RadialLayout = void 0);
      var s = e(10),
        u = e(7),
        a = i(e(411)),
        f = i(e(412));
      function c(t, r) {
        return Math.sqrt(
          (t[0] - r[0]) * (t[0] - r[0]) + (t[1] - r[1]) * (t[1] - r[1]),
        );
      }
      var h = (function (t) {
        function r(r) {
          var e = t.call(this) || this;
          return (
            (e.maxIteration = 1e3),
            (e.focusNode = null),
            (e.unitRadius = null),
            (e.linkDistance = 50),
            (e.preventOverlap = !1),
            (e.strictRadial = !0),
            (e.maxPreventOverlapIteration = 200),
            (e.sortStrength = 10),
            (e.nodes = []),
            (e.edges = []),
            e.updateCfg(r),
            e
          );
        }
        return (
          n(r, t),
          (r.prototype.getDefaultCfg = function () {
            return {
              maxIteration: 1e3,
              focusNode: null,
              unitRadius: null,
              linkDistance: 50,
              preventOverlap: !1,
              nodeSize: void 0,
              nodeSpacing: void 0,
              strictRadial: !0,
              maxPreventOverlapIteration: 200,
              sortBy: void 0,
              sortStrength: 10,
            };
          }),
          (r.prototype.execute = function () {
            var t = this,
              r = t.nodes,
              e = t.edges || [];
            if (r && 0 !== r.length) {
              t.width ||
                "undefined" == typeof window ||
                (t.width = window.innerWidth),
                t.height ||
                  "undefined" == typeof window ||
                  (t.height = window.innerHeight),
                t.center || (t.center = [t.width / 2, t.height / 2]);
              var o = t.center;
              if (1 === r.length)
                return (
                  (r[0].x = o[0]),
                  (r[0].y = o[1]),
                  void (t.onLayoutEnd && t.onLayoutEnd())
                );
              var n = t.linkDistance,
                i = null;
              if (s.isString(t.focusNode)) {
                for (var u = !1, c = 0; c < r.length; c++)
                  r[c].id === t.focusNode &&
                    ((i = r[c]), (t.focusNode = i), (u = !0), (c = r.length));
                u || (i = null);
              } else i = t.focusNode;
              i || ((i = r[0]), (t.focusNode = i));
              var h,
                l,
                p,
                v =
                  ((h = r),
                  (l = i.id),
                  (p = -1),
                  h.forEach(function (t, r) {
                    t.id === l && (p = r);
                  }),
                  p);
              t.focusIndex = v;
              var y = s.getAdjMatrix({ nodes: r, edges: e }, !1),
                m = s.floydWarshall(y),
                g = t.maxToFocus(m, v);
              t.handleInfinity(m, v, g + 1), (t.distances = m);
              var w = m[v],
                d = t.width || 500,
                b = t.height || 500,
                M = d - o[0] > o[0] ? o[0] : d - o[0],
                x = b - o[1] > o[1] ? o[1] : b - o[1];
              0 === M && (M = d / 2), 0 === x && (x = b / 2);
              var S = x > M ? M : x,
                k = Math.max.apply(Math, w),
                E = [];
              w.forEach(function (r, e) {
                t.unitRadius || (t.unitRadius = S / k),
                  (E[e] = r * t.unitRadius);
              }),
                (t.radii = E);
              var O = t.eIdealDisMatrix();
              t.eIdealDistances = O;
              var R = (function (t) {
                for (
                  var r = t.length, e = t[0].length, o = [], n = 0;
                  n < r;
                  n++
                ) {
                  for (var i = [], s = 0; s < e; s++)
                    0 !== t[n][s] ? i.push(1 / (t[n][s] * t[n][s])) : i.push(0);
                  o.push(i);
                }
                return o;
              })(O);
              t.weights = R;
              var j = new a.default({ linkDistance: n, distances: O }).layout();
              j.forEach(function (t) {
                s.isNaN(t[0]) && (t[0] = Math.random() * n),
                  s.isNaN(t[1]) && (t[1] = Math.random() * n);
              }),
                (t.positions = j),
                j.forEach(function (t, e) {
                  (r[e].x = t[0] + o[0]), (r[e].y = t[1] + o[1]);
                }),
                j.forEach(function (t) {
                  (t[0] -= j[v][0]), (t[1] -= j[v][1]);
                }),
                t.run();
              var _,
                P = t.preventOverlap,
                T = t.nodeSize,
                A = t.strictRadial;
              if (P) {
                var I,
                  N = t.nodeSpacing;
                (I = s.isNumber(N)
                  ? function () {
                      return N;
                    }
                  : s.isFunction(N)
                  ? N
                  : function () {
                      return 0;
                    }),
                  (_ = T
                    ? s.isArray(T)
                      ? function (t) {
                          return (T[0] > T[1] ? T[0] : T[1]) + I(t);
                        }
                      : function (t) {
                          return T + I(t);
                        }
                    : function (t) {
                        return t.size
                          ? s.isArray(t.size)
                            ? (t.size[0] > t.size[1] ? t.size[0] : t.size[1]) +
                              I(t)
                            : t.size + I(t)
                          : 10 + I(t);
                      });
                var C = {
                    nodes: r,
                    nodeSizeFunc: _,
                    adjMatrix: y,
                    positions: j,
                    radii: E,
                    height: b,
                    width: d,
                    strictRadial: A,
                    focusID: v,
                    iterations: t.maxPreventOverlapIteration || 200,
                    k: j.length / 4.5,
                  },
                  D = new f.default(C);
                j = D.layout();
              }
              return (
                j.forEach(function (t, e) {
                  (r[e].x = t[0] + o[0]), (r[e].y = t[1] + o[1]);
                }),
                t.onLayoutEnd && t.onLayoutEnd(),
                { nodes: r, edges: e }
              );
            }
            t.onLayoutEnd && t.onLayoutEnd();
          }),
          (r.prototype.run = function () {
            for (
              var t = this.maxIteration,
                r = this.positions || [],
                e = this.weights || [],
                o = this.eIdealDistances || [],
                n = this.radii || [],
                i = 0;
              i <= t;
              i++
            ) {
              var s = i / t;
              this.oneIteration(s, r, n, o, e);
            }
          }),
          (r.prototype.oneIteration = function (t, r, e, o, n) {
            var i = 1 - t,
              s = this.focusIndex;
            r.forEach(function (u, a) {
              var f = c(u, [0, 0]),
                h = 0 === f ? 0 : 1 / f;
              if (a !== s) {
                var l = 0,
                  p = 0,
                  v = 0;
                r.forEach(function (t, r) {
                  if (a !== r) {
                    var e = c(u, t),
                      i = 0 === e ? 0 : 1 / e,
                      s = o[r][a];
                    (v += n[a][r]),
                      (l += n[a][r] * (t[0] + s * (u[0] - t[0]) * i)),
                      (p += n[a][r] * (t[1] + s * (u[1] - t[1]) * i));
                  }
                });
                var y = 0 === e[a] ? 0 : 1 / e[a];
                (v *= i),
                  (v += t * y * y),
                  (l *= i),
                  (l += t * y * u[0] * h),
                  (u[0] = l / v),
                  (p *= i),
                  (p += t * y * u[1] * h),
                  (u[1] = p / v);
              }
            });
          }),
          (r.prototype.eIdealDisMatrix = function () {
            var t = this,
              r = t.nodes;
            if (!r) return [];
            var e = t.distances,
              o = t.linkDistance,
              n = t.radii || [],
              i = t.unitRadius || 50,
              u = [];
            return (
              e &&
                e.forEach(function (e, a) {
                  var f = [];
                  e.forEach(function (e, u) {
                    if (a === u) f.push(0);
                    else if (n[a] === n[u])
                      if ("data" === t.sortBy)
                        f.push(
                          (e * (Math.abs(a - u) * t.sortStrength)) / (n[a] / i),
                        );
                      else if (t.sortBy) {
                        var c = r[a][t.sortBy] || 0,
                          h = r[u][t.sortBy] || 0;
                        s.isString(c) && (c = c.charCodeAt(0)),
                          s.isString(h) && (h = h.charCodeAt(0)),
                          f.push(
                            (e * (Math.abs(c - h) * t.sortStrength)) /
                              (n[a] / i),
                          );
                      } else f.push((e * o) / (n[a] / i));
                    else {
                      var l = (o + i) / 2;
                      f.push(e * l);
                    }
                  }),
                    u.push(f);
                }),
              u
            );
          }),
          (r.prototype.handleInfinity = function (t, r, e) {
            for (var o = t.length, n = 0; n < o; n++)
              if (t[r][n] === 1 / 0) {
                (t[r][n] = e), (t[n][r] = e);
                for (var i = 0; i < o; i++)
                  t[n][i] !== 1 / 0 &&
                    t[r][i] === 1 / 0 &&
                    ((t[r][i] = e + t[n][i]), (t[i][r] = e + t[n][i]));
              }
            for (n = 0; n < o; n++)
              if (n !== r)
                for (i = 0; i < o; i++)
                  if (t[n][i] === 1 / 0) {
                    var s = Math.abs(t[r][n] - t[r][i]);
                    (s = 0 === s ? 1 : s), (t[n][i] = s);
                  }
          }),
          (r.prototype.maxToFocus = function (t, r) {
            for (var e = 0, o = 0; o < t[r].length; o++)
              t[r][o] !== 1 / 0 && (e = t[r][o] > e ? t[r][o] : e);
            return e;
          }),
          (r.prototype.getType = function () {
            return "radial";
          }),
          r
        );
      })(u.Base);
      r.RadialLayout = h;
    },
    411: function (t, r, e) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var o = e(102),
        n = (function () {
          function t(t) {
            (this.distances = t.distances),
              (this.dimension = t.dimension || 2),
              (this.linkDistance = t.linkDistance);
          }
          return (
            (t.prototype.layout = function () {
              var t = this.dimension,
                r = this.distances,
                e = this.linkDistance;
              try {
                var n = o.Matrix.mul(o.Matrix.pow(r, 2), -0.5),
                  i = n.mean("row"),
                  s = n.mean("column"),
                  u = n.mean();
                n.add(u).subRowVector(i).subColumnVector(s);
                var a = new o.SingularValueDecomposition(n),
                  f = o.Matrix.sqrt(a.diagonalMatrix).diagonal();
                return a.leftSingularVectors.toJSON().map(function (r) {
                  return o.Matrix.mul([r], [f]).toJSON()[0].splice(0, t);
                });
              } catch (t) {
                for (var c = [], h = 0; h < r.length; h++) {
                  var l = Math.random() * e,
                    p = Math.random() * e;
                  c.push([l, p]);
                }
                return c;
              }
            }),
            t
          );
        })();
      r.default = n;
    },
    412: function (t, r, e) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var o = (function () {
        function t(t) {
          (this.disp = []),
            (this.positions = t.positions),
            (this.adjMatrix = t.adjMatrix),
            (this.focusID = t.focusID),
            (this.radii = t.radii),
            (this.iterations = t.iterations || 10),
            (this.height = t.height || 10),
            (this.width = t.width || 10),
            (this.speed = t.speed || 100),
            (this.gravity = t.gravity || 10),
            (this.nodeSizeFunc = t.nodeSizeFunc),
            (this.k = t.k || 5),
            (this.strictRadial = t.strictRadial),
            (this.nodes = t.nodes);
        }
        return (
          (t.prototype.layout = function () {
            var t = this.positions,
              r = [],
              e = this.iterations,
              o = this.width / 10;
            (this.maxDisplace = o), (this.disp = r);
            for (var n = 0; n < e; n++)
              t.forEach(function (t, e) {
                r[e] = { x: 0, y: 0 };
              }),
                this.getRepulsion(),
                this.updatePositions();
            return t;
          }),
          (t.prototype.getRepulsion = function () {
            var t = this,
              r = t.positions,
              e = t.nodes,
              o = t.disp,
              n = t.k,
              i = t.radii || [];
            r.forEach(function (s, u) {
              (o[u] = { x: 0, y: 0 }),
                r.forEach(function (r, a) {
                  if (u !== a && i[u] === i[a]) {
                    var f = s[0] - r[0],
                      c = s[1] - r[1],
                      h = Math.sqrt(f * f + c * c);
                    if (0 === h) {
                      h = 1;
                      var l = u > a ? 1 : -1;
                      (f = 0.01 * l), (c = 0.01 * l);
                    }
                    if (
                      h <
                      t.nodeSizeFunc(e[u]) / 2 + t.nodeSizeFunc(e[a]) / 2
                    ) {
                      var p = (n * n) / h;
                      (o[u].x += (f / h) * p), (o[u].y += (c / h) * p);
                    }
                  }
                });
            });
          }),
          (t.prototype.updatePositions = function () {
            var t = this.positions,
              r = this.disp,
              e = this.speed,
              o = this.strictRadial,
              n = this.focusID,
              i = this.maxDisplace || this.width / 10;
            o &&
              r.forEach(function (r, e) {
                var o = t[e][0] - t[n][0],
                  i = t[e][1] - t[n][1],
                  s = Math.sqrt(o * o + i * i),
                  u = i / s,
                  a = -o / s,
                  f = Math.sqrt(r.x * r.x + r.y * r.y),
                  c = Math.acos((u * r.x + a * r.y) / f);
                c > Math.PI / 2 && ((c -= Math.PI / 2), (u *= -1), (a *= -1));
                var h = Math.cos(c) * f;
                (r.x = u * h), (r.y = a * h);
              });
            var s = this.radii;
            t.forEach(function (u, a) {
              if (a !== n) {
                var f = Math.sqrt(r[a].x * r[a].x + r[a].y * r[a].y);
                if (f > 0 && a !== n) {
                  var c = Math.min(i * (e / 800), f);
                  if (
                    ((u[0] += (r[a].x / f) * c), (u[1] += (r[a].y / f) * c), o)
                  ) {
                    var h = u[0] - t[n][0],
                      l = u[1] - t[n][1],
                      p = Math.sqrt(h * h + l * l);
                    (h = (h / p) * s[a]),
                      (l = (l / p) * s[a]),
                      (u[0] = t[n][0] + h),
                      (u[1] = t[n][1] + l);
                  }
                }
              }
            });
          }),
          t
        );
      })();
      r.default = o;
    },
    7: function (t, r, e) {
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
  }).default;
});
//# sourceMappingURL=radialLayout.js.map
