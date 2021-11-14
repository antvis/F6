!(function (t, e) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define([], e)
    : typeof exports === 'object'
    ? (exports.f6ui = e())
    : (t.f6ui = e());
})(this, () => {
  return (function (t) {
    const e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      const i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
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
        const r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && typeof t !== 'string')
        )
          for (const i in t)
            n.d(
              r,
              i,
              ((e) => {
                return t[e];
              }).bind(null, i),
            );
        return r;
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
      n((n.s = 52))
    );
  })([
    function (t, e, n) {
      'use strict';
      n.d(e, 'j', () => {
        return m;
      }),
        n.d(e, 'l', () => {
          return w;
        }),
        n.d(e, 'z', () => {
          return O;
        }),
        n.d(e, 'g', () => {
          return i;
        }),
        n.d(e, 'k', () => {
          return S;
        }),
        n.d(e, 'N', () => {
          return C;
        }),
        n.d(e, 'h', () => {
          return j;
        }),
        n.d(e, 'v', () => {
          return A;
        }),
        n.d(e, 'B', () => {
          return y;
        }),
        n.d(e, 'C', () => {
          return v;
        }),
        n.d(e, 'E', () => {
          return E;
        }),
        n.d(e, 'K', () => {
          return N;
        }),
        n.d(e, 'M', () => {
          return I;
        }),
        n.d(e, 'n', () => {
          return c;
        }),
        n.d(e, 'o', () => {
          return D;
        }),
        n.d(e, 'p', () => {
          return _;
        }),
        n.d(e, 's', () => {
          return s;
        }),
        n.d(e, 't', () => {
          return u;
        }),
        n.d(e, 'u', () => {
          return k;
        }),
        n.d(e, 'w', () => {
          return l;
        }),
        n.d(e, 'x', () => {
          return g;
        }),
        n.d(e, 'y', () => {
          return x;
        }),
        n.d(e, 'G', () => {
          return F;
        }),
        n.d(e, 'b', () => {
          return X;
        }),
        n.d(e, 'c', () => {
          return q;
        }),
        n.d(e, 'd', () => {
          return H;
        }),
        n.d(e, 'e', () => {
          return U;
        }),
        n.d(e, 'f', () => {
          return d;
        }),
        n.d(e, 'm', () => {
          return Z;
        }),
        n.d(e, 'q', () => {
          return Q;
        }),
        n.d(e, 'r', () => {
          return $;
        }),
        n.d(e, 'A', () => {
          return J;
        }),
        n.d(e, 'D', () => {
          return W;
        }),
        n.d(e, 'a', () => {
          return W;
        }),
        n.d(e, 'i', () => {
          return tt;
        }),
        n.d(e, 'I', () => {
          return et;
        }),
        n.d(e, 'J', () => {
          return nt;
        }),
        n.d(e, 'L', () => {
          return it;
        }),
        n.d(e, 'F', () => {
          return ot;
        }),
        n.d(e, 'H', () => {
          return at;
        });
      const r = function (t) {
        return t !== null && typeof t !== 'function' && isFinite(t.length);
      };
      var i = function (t, e) {
        if (!r(t)) return t;
        for (var n = [], i = 0; i < t.length; i++) {
          const o = t[i];
          e(o, i) && n.push(o);
        }
        return n;
      };
      const o = {}.toString;
      const a = function (t, e) {
        return o.call(t) === `[object ${e}]`;
      };
      var s = function (t) {
        return a(t, 'Function');
      };
      var u = function (t) {
        return t == null;
      };
      var c = function (t) {
        return Array.isArray ? Array.isArray(t) : a(t, 'Array');
      };
      function h(t) {
        return (h =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var l = function (t) {
        const e = h(t);
        return (t !== null && e === 'object') || e === 'function';
      };
      var d = function (t, e) {
        if (t)
          if (c(t)) for (let n = 0, r = t.length; n < r && !1 !== e(t[n], n); n++);
          else if (l(t)) for (const i in t) if (t.hasOwnProperty(i) && !1 === e(t[i], i)) break;
      };
      Object.keys;
      function f(t) {
        return (f =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      const p = function (t) {
        return f(t) === 'object' && t !== null;
      };
      var g = function (t) {
        if (!p(t) || !a(t, 'Object')) return !1;
        if (Object.getPrototypeOf(t) === null) return !0;
        for (var e = t; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
        return Object.getPrototypeOf(t) === e;
      };
      var y = function (t) {
        if (c(t))
          return t.reduce((t, e) => {
            return Math.max(t, e);
          }, t[0]);
      };
      var v = function (t) {
        if (c(t))
          return t.reduce((t, e) => {
            return Math.min(t, e);
          }, t[0]);
      };
      var m = function (t) {
        let e = t.filter((t) => {
          return !isNaN(t);
        });
        if (!e.length) return { min: 0, max: 0 };
        if (c(t[0])) {
          for (var n = [], r = 0; r < t.length; r++) n = n.concat(t[r]);
          e = n;
        }
        const i = y(e);
        return { min: v(e), max: i };
      };
      const b = Array.prototype;
      var x =
        (b.splice,
        b.indexOf,
        Array.prototype.splice,
        function (t) {
          return a(t, 'String');
        });
      function w(t) {
        if (r(t)) return t[0];
      }
      function O(t) {
        if (r(t)) {
          return t[t.length - 1];
        }
      }
      const M = Object.prototype.hasOwnProperty;
      var S = function (t, e) {
        if (!e || !c(t)) return {};
        for (
          var n,
            r = {},
            i = s(e)
              ? e
              : function (t) {
                  return t[e];
                },
            o = 0;
          o < t.length;
          o++
        ) {
          const a = t[o];
          (n = i(a)), M.call(r, n) ? r[n].push(a) : (r[n] = [a]);
        }
        return r;
      };
      var C = function (t, e) {
        if (t[`_wrap_${e}`]) return t[`_wrap_${e}`];
        const n = function (n) {
          t[e](n);
        };
        return (t[`_wrap_${e}`] = n), n;
      };
      var j = function (t, e) {
        const n = e.toString();
        const r = n.indexOf('.');
        if (r === -1) return Math.round(t);
        let i = n.substr(r + 1).length;
        return i > 20 && (i = 20), parseFloat(t.toFixed(i));
      };
      var k = function (t) {
        return a(t, 'Number');
      };
      Number.isInteger && Number.isInteger;
      function A(t, e, n) {
        return void 0 === n && (n = 1e-5), Math.abs(t - e) < n;
      }
      var E = function (t, e) {
        return ((t % e) + e) % e;
      };
      const P = (Math.PI, parseInt, Math.PI / 180);
      var N = function (t) {
        return P * t;
      };
      const T =
        (Object.values,
        function (t) {
          return u(t) ? '' : t.toString();
        });
      var I = function (t) {
        const e = T(t);
        return e.charAt(0).toUpperCase() + e.substring(1);
      };
      const B = {}.toString;
      const L = function (t) {
        return B.call(t)
          .replace(/^\[object /, '')
          .replace(/]$/, '');
      };
      var D = function (t) {
        return a(t, 'Boolean');
      };
      var _ = function (t) {
        return a(t, 'Date');
      };
      const Y = Object.prototype;
      const R = function (t) {
        const e = t && t.constructor;
        return t === ((typeof e === 'function' && e.prototype) || Y);
      };
      function F(t) {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (t) {
            return setTimeout(t, 16);
          }
        )(t);
      }
      function X(t) {
        (
          window.cancelAnimationFrame ||
          window.webkitCancelAnimationFrame ||
          window.mozCancelAnimationFrame ||
          window.msCancelAnimationFrame ||
          clearTimeout
        )(t);
      }
      function z(t, e) {
        for (const n in e)
          e.hasOwnProperty(n) && n !== 'constructor' && void 0 !== e[n] && (t[n] = e[n]);
      }
      function W(t, e, n, r) {
        return e && z(t, e), n && z(t, n), r && z(t, r), t;
      }
      function G(t) {
        return (G =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var q = function t(e) {
        if (G(e) !== 'object' || e === null) return e;
        let n;
        if (c(e)) {
          n = [];
          for (let r = 0, i = e.length; r < i; r++)
            G(e[r]) === 'object' && e[r] != null ? (n[r] = t(e[r])) : (n[r] = e[r]);
        } else
          for (const o in ((n = {}), e))
            G(e[o]) === 'object' && e[o] != null ? (n[o] = t(e[o])) : (n[o] = e[o]);
        return n;
      };
      var H = function (t, e, n) {
        let r;
        return function () {
          const i = this;
          const o = arguments;
          const a = function () {
            (r = null), n || t.apply(i, o);
          };
          const s = n && !r;
          clearTimeout(r), (r = setTimeout(a, e)), s && t.apply(i, o);
        };
      };
      function V(t, e, n, r) {
        for (const i in ((n = n || 0), (r = r || 5), e))
          if (e.hasOwnProperty(i)) {
            const o = e[i];
            o !== null && g(o)
              ? (g(t[i]) || (t[i] = {}), n < r ? V(t[i], o, n + 1, r) : (t[i] = e[i]))
              : c(o)
              ? ((t[i] = []), (t[i] = t[i].concat(o)))
              : void 0 !== o && (t[i] = o);
          }
      }
      var U = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        for (let r = 0; r < e.length; r += 1) V(t, e[r]);
        return t;
      };
      var Z = function (t, e) {
        if (!r(t)) return -1;
        const n = Array.prototype.indexOf;
        if (n) return n.call(t, e);
        for (var i = -1, o = 0; o < t.length; o++)
          if (t[o] === e) {
            i = o;
            break;
          }
        return i;
      };
      const K = Object.prototype.hasOwnProperty;
      var Q = function (t) {
        if (u(t)) return !0;
        if (r(t)) return !t.length;
        const e = L(t);
        if (e === 'Map' || e === 'Set') return !t.size;
        if (R(t)) return !Object.keys(t).length;
        for (const n in t) if (K.call(t, n)) return !1;
        return !0;
      };
      var $ = function t(e, n) {
        if (e === n) return !0;
        if (!e || !n) return !1;
        if (x(e) || x(n)) return !1;
        if (r(e) || r(n)) {
          if (e.length !== n.length) return !1;
          for (var i = !0, o = 0; o < e.length && (i = t(e[o], n[o])); o++);
          return i;
        }
        if (p(e) || p(n)) {
          const a = Object.keys(e);
          const s = Object.keys(n);
          if (a.length !== s.length) return !1;
          for (i = !0, o = 0; o < a.length && (i = t(e[a[o]], n[a[o]])); o++);
          return i;
        }
        return !1;
      };
      var J = function (t, e) {
        if (!r(t)) return t;
        for (var n = [], i = 0; i < t.length; i++) {
          const o = t[i];
          n.push(e(o, i));
        }
        return n;
      };
      var tt = function (t, e, n) {
        for (var r = 0, i = x(e) ? e.split('.') : e; t && r < i.length; ) t = t[i[r++]];
        return void 0 === t || r < i.length ? n : t;
      };
      var et =
        (Object.prototype.hasOwnProperty,
        function (t, e, n) {
          let r;
          let i;
          let o;
          let a;
          let s = 0;
          n || (n = {});
          const u = function () {
            (s = !1 === n.leading ? 0 : Date.now()),
              (r = null),
              (a = t.apply(i, o)),
              r || (i = o = null);
          };
          const c = function () {
            const c = Date.now();
            s || !1 !== n.leading || (s = c);
            const h = e - (c - s);
            return (
              (i = this),
              (o = arguments),
              h <= 0 || h > e
                ? (r && (clearTimeout(r), (r = null)),
                  (s = c),
                  (a = t.apply(i, o)),
                  r || (i = o = null))
                : r || !1 === n.trailing || (r = setTimeout(u, h)),
              a
            );
          };
          return (
            (c.cancel = function () {
              clearTimeout(r), (s = 0), (r = i = o = null);
            }),
            c
          );
        });
      var nt = function (t) {
        return r(t) ? Array.prototype.slice.call(t) : [];
      };
      const rt = {};
      var it = function (t) {
        return rt[(t = t || 'g')] ? (rt[t] += 1) : (rt[t] = 1), t + rt[t];
      };
      var ot = function () {};
      function at(t) {
        return u(t) ? 0 : r(t) ? t.length : Object.keys(t).length;
      }
      !(function () {
        function t() {
          this.map = {};
        }
        (t.prototype.has = function (t) {
          return void 0 !== this.map[t];
        }),
          (t.prototype.get = function (t, e) {
            const n = this.map[t];
            return void 0 === n ? e : n;
          }),
          (t.prototype.set = function (t, e) {
            this.map[t] = e;
          }),
          (t.prototype.clear = function () {
            this.map = {};
          }),
          (t.prototype.delete = function (t) {
            delete this.map[t];
          }),
          (t.prototype.size = function () {
            return Object.keys(this.map).length;
          });
      })();
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'c', () => {
        return i;
      }),
        n.d(e, 'a', () => {
          return o;
        }),
        n.d(e, 'e', () => {
          return a;
        }),
        n.d(e, 'b', () => {
          return s;
        }),
        n.d(e, 'd', () => {
          return u;
        }),
        n.d(e, 'g', () => {
          return c;
        }),
        n.d(e, 'f', () => {
          return h;
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function i(t, e) {
        if (typeof e !== 'function' && e !== null)
          throw new TypeError(`Class extends value ${String(e)} is not a constructor or null`);
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype = e === null ? Object.create(e) : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (const i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function a(t, e) {
        const n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (t != null && typeof Object.getOwnPropertySymbols === 'function') {
          let i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function s(t, e, n, r) {
        return new (n || (n = Promise))((i, o) => {
          function a(t) {
            try {
              u(r.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              u(r.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            let e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n((t) => {
                      t(e);
                    })).then(a, s);
          }
          u((r = r.apply(t, e || [])).next());
        });
      }
      function u(t, e) {
        let n;
        let r;
        let i;
        let o;
        let a = {
          label: 0,
          sent() {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          typeof Symbol === 'function' &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((i = a.trys),
                        (i = i.length > 0 && i[i.length - 1]) || (o[0] !== 6 && o[0] !== 2))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (o[0] === 3 && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (o[0] === 6 && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = e.call(t, a);
                } catch (t) {
                  (o = [6, t]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      }
      Object.create;
      function c() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        const r = Array(t);
        let i = 0;
        for (e = 0; e < n; e++)
          for (let o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
        return r;
      }
      function h(t, e, n) {
        if (n || arguments.length === 2)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) || (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || e);
      }
      Object.create;
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'd', () => {
        return i;
      }),
        n.d(e, 'b', () => {
          return o;
        }),
        n.d(e, 'e', () => {
          return a;
        }),
        n.d(e, 'f', () => {
          return s;
        }),
        n.d(e, 'l', () => {
          return u;
        }),
        n.d(e, 'j', () => {
          return c;
        });
      const r = n(0);
      function i() {
        return window ? window.devicePixelRatio : 1;
      }
      function o(t, e, n, r) {
        const i = t - n;
        const o = e - r;
        return Math.sqrt(i * i + o * o);
      }
      function a(t, e, n, r, i, o) {
        return i >= t && i <= t + n && o >= e && o <= e + r;
      }
      function s(t, e) {
        return !(e.minX > t.maxX || e.maxX < t.minX || e.minY > t.maxY || e.maxY < t.minY);
      }
      function u(t, e) {
        return t && e
          ? {
              minX: Math.min(t.minX, e.minX),
              minY: Math.min(t.minY, e.minY),
              maxX: Math.max(t.maxX, e.maxX),
              maxY: Math.max(t.maxY, e.maxY),
            }
          : t || e;
      }
      function c(t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }
      n.d(e, 'i', () => {
        return r.t;
      }),
        n.d(e, 'k', () => {
          return r.y;
        }),
        n.d(e, 'h', () => {
          return r.s;
        }),
        n.d(e, 'g', () => {
          return r.n;
        }),
        n.d(e, 'c', () => {
          return r.f;
        }),
        n.d(e, 'o', () => {
          return r.K;
        }),
        n.d(e, 'm', () => {
          return r.E;
        }),
        n.d(e, 'n', () => {
          return r.G;
        }),
        n.d(e, 'a', () => {
          return r.b;
        });
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', () => {
        return r;
      }),
        n.d(e, 'b', () => {
          return i;
        });
      var r = {
        rect: 'path',
        circle: 'circle',
        line: 'line',
        path: 'path',
        marker: 'path',
        text: 'text',
        polyline: 'polyline',
        polygon: 'polygon',
        image: 'image',
        ellipse: 'ellipse',
        dom: 'foreignObject',
      };
      var i = {
        opacity: 'opacity',
        fillStyle: 'fill',
        fill: 'fill',
        fillOpacity: 'fill-opacity',
        strokeStyle: 'stroke',
        strokeOpacity: 'stroke-opacity',
        stroke: 'stroke',
        x: 'x',
        y: 'y',
        r: 'r',
        rx: 'rx',
        ry: 'ry',
        width: 'width',
        height: 'height',
        x1: 'x1',
        x2: 'x2',
        y1: 'y1',
        y2: 'y2',
        lineCap: 'stroke-linecap',
        lineJoin: 'stroke-linejoin',
        lineWidth: 'stroke-width',
        lineDash: 'stroke-dasharray',
        lineDashOffset: 'stroke-dashoffset',
        miterLimit: 'stroke-miterlimit',
        font: 'font',
        fontSize: 'font-size',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        fontFamily: 'font-family',
        startArrow: 'marker-start',
        endArrow: 'marker-end',
        path: 'd',
        class: 'class',
        id: 'id',
        style: 'style',
        preserveAspectRatio: 'preserveAspectRatio',
      };
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'b', () => {
        return r;
      }),
        n.d(e, 'c', () => {
          return Y;
        }),
        n.d(e, 'd', () => {
          return R;
        }),
        n.d(e, 'a', () => {
          return i;
        });
      var r = {};
      n.r(r),
        n.d(r, 'create', () => {
          return a;
        }),
        n.d(r, 'fromMat4', () => {
          return s;
        }),
        n.d(r, 'clone', () => {
          return u;
        }),
        n.d(r, 'copy', () => {
          return c;
        }),
        n.d(r, 'fromValues', () => {
          return h;
        }),
        n.d(r, 'set', () => {
          return l;
        }),
        n.d(r, 'identity', () => {
          return d;
        }),
        n.d(r, 'transpose', () => {
          return f;
        }),
        n.d(r, 'invert', () => {
          return p;
        }),
        n.d(r, 'adjoint', () => {
          return g;
        }),
        n.d(r, 'determinant', () => {
          return y;
        }),
        n.d(r, 'multiply', () => {
          return v;
        }),
        n.d(r, 'translate', () => {
          return m;
        }),
        n.d(r, 'rotate', () => {
          return b;
        }),
        n.d(r, 'scale', () => {
          return x;
        }),
        n.d(r, 'fromTranslation', () => {
          return w;
        }),
        n.d(r, 'fromRotation', () => {
          return O;
        }),
        n.d(r, 'fromScaling', () => {
          return M;
        }),
        n.d(r, 'fromMat2d', () => {
          return S;
        }),
        n.d(r, 'fromQuat', () => {
          return C;
        }),
        n.d(r, 'normalFromMat4', () => {
          return j;
        }),
        n.d(r, 'projection', () => {
          return k;
        }),
        n.d(r, 'str', () => {
          return A;
        }),
        n.d(r, 'frob', () => {
          return E;
        }),
        n.d(r, 'add', () => {
          return P;
        }),
        n.d(r, 'subtract', () => {
          return N;
        }),
        n.d(r, 'multiplyScalar', () => {
          return T;
        }),
        n.d(r, 'multiplyScalarAndAdd', () => {
          return I;
        }),
        n.d(r, 'exactEquals', () => {
          return B;
        }),
        n.d(r, 'equals', () => {
          return L;
        }),
        n.d(r, 'mul', () => {
          return D;
        }),
        n.d(r, 'sub', () => {
          return _;
        });
      var i = {};
      n.r(i),
        n.d(i, 'leftTranslate', () => {
          return F;
        }),
        n.d(i, 'leftRotate', () => {
          return X;
        }),
        n.d(i, 'leftScale', () => {
          return z;
        }),
        n.d(i, 'transform', () => {
          return W;
        }),
        n.d(i, 'direction', () => {
          return G;
        }),
        n.d(i, 'angleTo', () => {
          return q;
        }),
        n.d(i, 'vertical', () => {
          return H;
        });
      const o = n(8);
      function a() {
        const t = new o.a(9);
        return (
          o.a != Float32Array &&
            ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
          (t[0] = 1),
          (t[4] = 1),
          (t[8] = 1),
          t
        );
      }
      function s(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[4]),
          (t[4] = e[5]),
          (t[5] = e[6]),
          (t[6] = e[8]),
          (t[7] = e[9]),
          (t[8] = e[10]),
          t
        );
      }
      function u(t) {
        const e = new o.a(9);
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          e
        );
      }
      function c(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          t
        );
      }
      function h(t, e, n, r, i, a, s, u, c) {
        const h = new o.a(9);
        return (
          (h[0] = t),
          (h[1] = e),
          (h[2] = n),
          (h[3] = r),
          (h[4] = i),
          (h[5] = a),
          (h[6] = s),
          (h[7] = u),
          (h[8] = c),
          h
        );
      }
      function l(t, e, n, r, i, o, a, s, u, c) {
        return (
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = i),
          (t[4] = o),
          (t[5] = a),
          (t[6] = s),
          (t[7] = u),
          (t[8] = c),
          t
        );
      }
      function d(t) {
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 1),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 1),
          t
        );
      }
      function f(t, e) {
        if (t === e) {
          const n = e[1];
          const r = e[2];
          const i = e[5];
          (t[1] = e[3]), (t[2] = e[6]), (t[3] = n), (t[5] = e[7]), (t[6] = r), (t[7] = i);
        } else
          (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]);
        return t;
      }
      function p(t, e) {
        const n = e[0];
        const r = e[1];
        const i = e[2];
        const o = e[3];
        const a = e[4];
        const s = e[5];
        const u = e[6];
        const c = e[7];
        const h = e[8];
        const l = h * a - s * c;
        const d = -h * o + s * u;
        const f = c * o - a * u;
        let p = n * l + r * d + i * f;
        return p
          ? ((p = 1 / p),
            (t[0] = l * p),
            (t[1] = (-h * r + i * c) * p),
            (t[2] = (s * r - i * a) * p),
            (t[3] = d * p),
            (t[4] = (h * n - i * u) * p),
            (t[5] = (-s * n + i * o) * p),
            (t[6] = f * p),
            (t[7] = (-c * n + r * u) * p),
            (t[8] = (a * n - r * o) * p),
            t)
          : null;
      }
      function g(t, e) {
        const n = e[0];
        const r = e[1];
        const i = e[2];
        const o = e[3];
        const a = e[4];
        const s = e[5];
        const u = e[6];
        const c = e[7];
        const h = e[8];
        return (
          (t[0] = a * h - s * c),
          (t[1] = i * c - r * h),
          (t[2] = r * s - i * a),
          (t[3] = s * u - o * h),
          (t[4] = n * h - i * u),
          (t[5] = i * o - n * s),
          (t[6] = o * c - a * u),
          (t[7] = r * u - n * c),
          (t[8] = n * a - r * o),
          t
        );
      }
      function y(t) {
        const e = t[0];
        const n = t[1];
        const r = t[2];
        const i = t[3];
        const o = t[4];
        const a = t[5];
        const s = t[6];
        const u = t[7];
        const c = t[8];
        return e * (c * o - a * u) + n * (-c * i + a * s) + r * (u * i - o * s);
      }
      function v(t, e, n) {
        const r = e[0];
        const i = e[1];
        const o = e[2];
        const a = e[3];
        const s = e[4];
        const u = e[5];
        const c = e[6];
        const h = e[7];
        const l = e[8];
        const d = n[0];
        const f = n[1];
        const p = n[2];
        const g = n[3];
        const y = n[4];
        const v = n[5];
        const m = n[6];
        const b = n[7];
        const x = n[8];
        return (
          (t[0] = d * r + f * a + p * c),
          (t[1] = d * i + f * s + p * h),
          (t[2] = d * o + f * u + p * l),
          (t[3] = g * r + y * a + v * c),
          (t[4] = g * i + y * s + v * h),
          (t[5] = g * o + y * u + v * l),
          (t[6] = m * r + b * a + x * c),
          (t[7] = m * i + b * s + x * h),
          (t[8] = m * o + b * u + x * l),
          t
        );
      }
      function m(t, e, n) {
        const r = e[0];
        const i = e[1];
        const o = e[2];
        const a = e[3];
        const s = e[4];
        const u = e[5];
        const c = e[6];
        const h = e[7];
        const l = e[8];
        const d = n[0];
        const f = n[1];
        return (
          (t[0] = r),
          (t[1] = i),
          (t[2] = o),
          (t[3] = a),
          (t[4] = s),
          (t[5] = u),
          (t[6] = d * r + f * a + c),
          (t[7] = d * i + f * s + h),
          (t[8] = d * o + f * u + l),
          t
        );
      }
      function b(t, e, n) {
        const r = e[0];
        const i = e[1];
        const o = e[2];
        const a = e[3];
        const s = e[4];
        const u = e[5];
        const c = e[6];
        const h = e[7];
        const l = e[8];
        const d = Math.sin(n);
        const f = Math.cos(n);
        return (
          (t[0] = f * r + d * a),
          (t[1] = f * i + d * s),
          (t[2] = f * o + d * u),
          (t[3] = f * a - d * r),
          (t[4] = f * s - d * i),
          (t[5] = f * u - d * o),
          (t[6] = c),
          (t[7] = h),
          (t[8] = l),
          t
        );
      }
      function x(t, e, n) {
        const r = n[0];
        const i = n[1];
        return (
          (t[0] = r * e[0]),
          (t[1] = r * e[1]),
          (t[2] = r * e[2]),
          (t[3] = i * e[3]),
          (t[4] = i * e[4]),
          (t[5] = i * e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          t
        );
      }
      function w(t, e) {
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 1),
          (t[5] = 0),
          (t[6] = e[0]),
          (t[7] = e[1]),
          (t[8] = 1),
          t
        );
      }
      function O(t, e) {
        const n = Math.sin(e);
        const r = Math.cos(e);
        return (
          (t[0] = r),
          (t[1] = n),
          (t[2] = 0),
          (t[3] = -n),
          (t[4] = r),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 1),
          t
        );
      }
      function M(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = e[1]),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 1),
          t
        );
      }
      function S(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = 0),
          (t[3] = e[2]),
          (t[4] = e[3]),
          (t[5] = 0),
          (t[6] = e[4]),
          (t[7] = e[5]),
          (t[8] = 1),
          t
        );
      }
      function C(t, e) {
        const n = e[0];
        const r = e[1];
        const i = e[2];
        const o = e[3];
        const a = n + n;
        const s = r + r;
        const u = i + i;
        const c = n * a;
        const h = r * a;
        const l = r * s;
        const d = i * a;
        const f = i * s;
        const p = i * u;
        const g = o * a;
        const y = o * s;
        const v = o * u;
        return (
          (t[0] = 1 - l - p),
          (t[3] = h - v),
          (t[6] = d + y),
          (t[1] = h + v),
          (t[4] = 1 - c - p),
          (t[7] = f - g),
          (t[2] = d - y),
          (t[5] = f + g),
          (t[8] = 1 - c - l),
          t
        );
      }
      function j(t, e) {
        const n = e[0];
        const r = e[1];
        const i = e[2];
        const o = e[3];
        const a = e[4];
        const s = e[5];
        const u = e[6];
        const c = e[7];
        const h = e[8];
        const l = e[9];
        const d = e[10];
        const f = e[11];
        const p = e[12];
        const g = e[13];
        const y = e[14];
        const v = e[15];
        const m = n * s - r * a;
        const b = n * u - i * a;
        const x = n * c - o * a;
        const w = r * u - i * s;
        const O = r * c - o * s;
        const M = i * c - o * u;
        const S = h * g - l * p;
        const C = h * y - d * p;
        const j = h * v - f * p;
        const k = l * y - d * g;
        const A = l * v - f * g;
        const E = d * v - f * y;
        let P = m * E - b * A + x * k + w * j - O * C + M * S;
        return P
          ? ((P = 1 / P),
            (t[0] = (s * E - u * A + c * k) * P),
            (t[1] = (u * j - a * E - c * C) * P),
            (t[2] = (a * A - s * j + c * S) * P),
            (t[3] = (i * A - r * E - o * k) * P),
            (t[4] = (n * E - i * j + o * C) * P),
            (t[5] = (r * j - n * A - o * S) * P),
            (t[6] = (g * M - y * O + v * w) * P),
            (t[7] = (y * x - p * M - v * b) * P),
            (t[8] = (p * O - g * x + v * m) * P),
            t)
          : null;
      }
      function k(t, e, n) {
        return (
          (t[0] = 2 / e),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = -2 / n),
          (t[5] = 0),
          (t[6] = -1),
          (t[7] = 1),
          (t[8] = 1),
          t
        );
      }
      function A(t) {
        return `mat3(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]}, ${t[4]}, ${t[5]}, ${t[6]}, ${t[7]}, ${t[8]})`;
      }
      function E(t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
      }
      function P(t, e, n) {
        return (
          (t[0] = e[0] + n[0]),
          (t[1] = e[1] + n[1]),
          (t[2] = e[2] + n[2]),
          (t[3] = e[3] + n[3]),
          (t[4] = e[4] + n[4]),
          (t[5] = e[5] + n[5]),
          (t[6] = e[6] + n[6]),
          (t[7] = e[7] + n[7]),
          (t[8] = e[8] + n[8]),
          t
        );
      }
      function N(t, e, n) {
        return (
          (t[0] = e[0] - n[0]),
          (t[1] = e[1] - n[1]),
          (t[2] = e[2] - n[2]),
          (t[3] = e[3] - n[3]),
          (t[4] = e[4] - n[4]),
          (t[5] = e[5] - n[5]),
          (t[6] = e[6] - n[6]),
          (t[7] = e[7] - n[7]),
          (t[8] = e[8] - n[8]),
          t
        );
      }
      function T(t, e, n) {
        return (
          (t[0] = e[0] * n),
          (t[1] = e[1] * n),
          (t[2] = e[2] * n),
          (t[3] = e[3] * n),
          (t[4] = e[4] * n),
          (t[5] = e[5] * n),
          (t[6] = e[6] * n),
          (t[7] = e[7] * n),
          (t[8] = e[8] * n),
          t
        );
      }
      function I(t, e, n, r) {
        return (
          (t[0] = e[0] + n[0] * r),
          (t[1] = e[1] + n[1] * r),
          (t[2] = e[2] + n[2] * r),
          (t[3] = e[3] + n[3] * r),
          (t[4] = e[4] + n[4] * r),
          (t[5] = e[5] + n[5] * r),
          (t[6] = e[6] + n[6] * r),
          (t[7] = e[7] + n[7] * r),
          (t[8] = e[8] + n[8] * r),
          t
        );
      }
      function B(t, e) {
        return (
          t[0] === e[0] &&
          t[1] === e[1] &&
          t[2] === e[2] &&
          t[3] === e[3] &&
          t[4] === e[4] &&
          t[5] === e[5] &&
          t[6] === e[6] &&
          t[7] === e[7] &&
          t[8] === e[8]
        );
      }
      function L(t, e) {
        const n = t[0];
        const r = t[1];
        const i = t[2];
        const a = t[3];
        const s = t[4];
        const u = t[5];
        const c = t[6];
        const h = t[7];
        const l = t[8];
        const d = e[0];
        const f = e[1];
        const p = e[2];
        const g = e[3];
        const y = e[4];
        const v = e[5];
        const m = e[6];
        const b = e[7];
        const x = e[8];
        return (
          Math.abs(n - d) <= o.b * Math.max(1, Math.abs(n), Math.abs(d)) &&
          Math.abs(r - f) <= o.b * Math.max(1, Math.abs(r), Math.abs(f)) &&
          Math.abs(i - p) <= o.b * Math.max(1, Math.abs(i), Math.abs(p)) &&
          Math.abs(a - g) <= o.b * Math.max(1, Math.abs(a), Math.abs(g)) &&
          Math.abs(s - y) <= o.b * Math.max(1, Math.abs(s), Math.abs(y)) &&
          Math.abs(u - v) <= o.b * Math.max(1, Math.abs(u), Math.abs(v)) &&
          Math.abs(c - m) <= o.b * Math.max(1, Math.abs(c), Math.abs(m)) &&
          Math.abs(h - b) <= o.b * Math.max(1, Math.abs(h), Math.abs(b)) &&
          Math.abs(l - x) <= o.b * Math.max(1, Math.abs(l), Math.abs(x))
        );
      }
      var D = v;
      var _ = N;
      var Y = n(22);
      var R = n(26);
      function F(t, e, n) {
        const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        return r.fromTranslation(i, n), r.multiply(t, i, e);
      }
      function X(t, e, n) {
        const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        return r.fromRotation(i, n), r.multiply(t, i, e);
      }
      function z(t, e, n) {
        const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        return r.fromScaling(i, n), r.multiply(t, i, e);
      }
      function W(t, e) {
        for (
          var n, i, o, a = t ? [].concat(t) : [1, 0, 0, 0, 1, 0, 0, 0, 1], s = 0, u = e.length;
          s < u;
          s++
        ) {
          const c = e[s];
          switch (c[0]) {
            case 't':
              F(a, a, [c[1], c[2]]);
              break;
            case 's':
              z(a, a, [c[1], c[2]]);
              break;
            case 'r':
              X(a, a, c[1]);
              break;
            case 'm':
              (n = a), (i = a), (o = c[1]), r.multiply(n, o, i);
          }
        }
        return a;
      }
      function G(t, e) {
        return t[0] * e[1] - e[0] * t[1];
      }
      function q(t, e, n) {
        const r = Y.angle(t, e);
        const i = G(t, e) >= 0;
        return n ? (i ? 2 * Math.PI - r : r) : i ? r : 2 * Math.PI - r;
      }
      function H(t, e, n) {
        return n ? ((t[0] = e[1]), (t[1] = -1 * e[0])) : ((t[0] = -1 * e[1]), (t[1] = e[0])), t;
      }
    },
    function (t, e, n) {
      'use strict';
      const r = n(15);
      n.d(e, 'PathUtil', () => {
        return r;
      });
      n(33), n(34);
      const i = n(24);
      n.d(e, 'Event', () => {
        return i.a;
      });
      n(25);
      const o = n(37);
      n.d(e, 'AbstractCanvas', () => {
        return o.a;
      });
      const a = n(35);
      n.d(e, 'AbstractGroup', () => {
        return a.a;
      });
      const s = n(36);
      n.d(e, 'AbstractShape', () => {
        return s.a;
      });
      const u = n(38);
      n.d(e, 'getBBoxMethod', () => {
        return u.a;
      });
      const c = n(17);
      n.d(e, 'getTextHeight', () => {
        return c.b;
      }),
        n.d(e, 'assembleFont', () => {
          return c.a;
        });
      const h = n(6);
      n.d(e, 'isAllowCapture', () => {
        return h.b;
      });
      const l = n(14);
      n.d(e, 'multiplyVec2', () => {
        return l.c;
      }),
        n.d(e, 'invert', () => {
          return l.a;
        });
      const d = n(27);
      n.d(e, 'getOffScreenContext', () => {
        return d.a;
      });
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'j', () => {
        return i;
      }),
        n.d(e, 'c', () => {
          return o;
        }),
        n.d(e, 'g', () => {
          return a;
        }),
        n.d(e, 'b', () => {
          return s;
        });
      const r = n(0);
      function i(t, e) {
        const n = t.indexOf(e);
        n !== -1 && t.splice(n, 1);
      }
      n.d(e, 'e', () => {
        return r.t;
      }),
        n.d(e, 'd', () => {
          return r.s;
        }),
        n.d(e, 'h', () => {
          return r.y;
        }),
        n.d(e, 'f', () => {
          return r.w;
        }),
        n.d(e, 'i', () => {
          return r.D;
        }),
        n.d(e, 'a', () => {
          return r.f;
        }),
        n.d(e, 'k', () => {
          return r.M;
        });
      var o = typeof window !== 'undefined' && void 0 !== window.document;
      function a(t, e) {
        if (t.isCanvas()) return !0;
        for (var n = e.getParent(), r = !1; n; ) {
          if (n === t) {
            r = !0;
            break;
          }
          n = n.getParent();
        }
        return r;
      }
      function s(t) {
        return t.cfg.visible && t.cfg.capture;
      }
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'e', () => {
        return m;
      }),
        n.d(e, 'b', () => {
          return S;
        }),
        n.d(e, 'a', () => {
          return N;
        }),
        n.d(e, 'c', () => {
          return d;
        }),
        n.d(e, 'd', () => {
          return _;
        }),
        n.d(e, 'f', () => {
          return r;
        });
      var r = {};
      function i(t) {
        return Math.min.apply(null, t);
      }
      function o(t) {
        return Math.max.apply(null, t);
      }
      function a(t, e, n, r) {
        const i = t - n;
        const o = e - r;
        return Math.sqrt(i * i + o * o);
      }
      function s(t, e) {
        return Math.abs(t - e) < 0.001;
      }
      function u(t, e) {
        const n = i(t);
        const r = i(e);
        return { x: n, y: r, width: o(t) - n, height: o(e) - r };
      }
      function c(t, e, n, r) {
        return { minX: i([t, n]), maxX: o([t, n]), minY: i([e, r]), maxY: o([e, r]) };
      }
      function h(t) {
        return (t + 2 * Math.PI) % (2 * Math.PI);
      }
      n.r(r),
        n.d(r, 'distance', () => {
          return a;
        }),
        n.d(r, 'isNumberEqual', () => {
          return s;
        }),
        n.d(r, 'getBBoxByArray', () => {
          return u;
        }),
        n.d(r, 'getBBoxRange', () => {
          return c;
        }),
        n.d(r, 'piMod', () => {
          return h;
        });
      const l = n(22);
      var d = {
        box(t, e, n, r) {
          return u([t, n], [e, r]);
        },
        length(t, e, n, r) {
          return a(t, e, n, r);
        },
        pointAt(t, e, n, r, i) {
          return { x: (1 - i) * t + i * n, y: (1 - i) * e + i * r };
        },
        pointDistance(t, e, n, r, i, o) {
          const s = (n - t) * (i - t) + (r - e) * (o - e);
          return s < 0
            ? a(t, e, i, o)
            : s > (n - t) * (n - t) + (r - e) * (r - e)
            ? a(n, r, i, o)
            : this.pointToLine(t, e, n, r, i, o);
        },
        pointToLine(t, e, n, r, i, o) {
          const a = [n - t, r - e];
          if (l.exactEquals(a, [0, 0])) return Math.sqrt((i - t) * (i - t) + (o - e) * (o - e));
          const s = [-a[1], a[0]];
          l.normalize(s, s);
          const u = [i - t, o - e];
          return Math.abs(l.dot(u, s));
        },
        tangentAngle(t, e, n, r) {
          return Math.atan2(r - e, n - t);
        },
      };
      function f(t, e, n, r, i, o) {
        let s;
        let u = 1 / 0;
        const c = [n, r];
        let h = 20;
        o && o > 200 && (h = o / 10);
        for (var l = 1 / h, d = l / 10, f = 0; f <= h; f++) {
          const p = f * l;
          var g = [i.apply(null, t.concat([p])), i.apply(null, e.concat([p]))];
          (b = a(c[0], c[1], g[0], g[1])) < u && ((s = p), (u = b));
        }
        if (s === 0) return { x: t[0], y: e[0] };
        if (s === 1) {
          const y = t.length;
          return { x: t[y - 1], y: e[y - 1] };
        }
        u = 1 / 0;
        for (f = 0; f < 32 && !(d < 1e-4); f++) {
          const v = s - d;
          const m = s + d;
          var b =
            ((g = [i.apply(null, t.concat([v])), i.apply(null, e.concat([v]))]),
            a(c[0], c[1], g[0], g[1]));
          if (v >= 0 && b < u) (s = v), (u = b);
          else {
            const x = [i.apply(null, t.concat([m])), i.apply(null, e.concat([m]))];
            const w = a(c[0], c[1], x[0], x[1]);
            m <= 1 && w < u ? ((s = m), (u = w)) : (d *= 0.5);
          }
        }
        return { x: i.apply(null, t.concat([s])), y: i.apply(null, e.concat([s])) };
      }
      function p(t, e, n, r) {
        const i = 1 - r;
        return i * i * t + 2 * r * i * e + r * r * n;
      }
      function g(t, e, n) {
        const r = t + n - 2 * e;
        if (s(r, 0)) return [0.5];
        const i = (t - e) / r;
        return i <= 1 && i >= 0 ? [i] : [];
      }
      function y(t, e, n, r) {
        return 2 * (1 - r) * (e - t) + 2 * r * (n - e);
      }
      function v(t, e, n, r, i, o, a) {
        const s = p(t, n, i, a);
        const u = p(e, r, o, a);
        const c = d.pointAt(t, e, n, r, a);
        const h = d.pointAt(n, r, i, o, a);
        return [
          [t, e, c.x, c.y, s, u],
          [s, u, h.x, h.y, i, o],
        ];
      }
      var m = {
        box(t, e, n, r, i, o) {
          const a = g(t, n, i)[0];
          const s = g(e, r, o)[0];
          const c = [t, i];
          const h = [e, o];
          return (
            void 0 !== a && c.push(p(t, n, i, a)), void 0 !== s && h.push(p(e, r, o, s)), u(c, h)
          );
        },
        length(t, e, n, r, i, o) {
          return (function t(e, n, r, i, o, s, u) {
            if (u === 0) return (a(e, n, r, i) + a(r, i, o, s) + a(e, n, o, s)) / 2;
            const c = v(e, n, r, i, o, s, 0.5);
            const h = c[0];
            const l = c[1];
            return h.push(u - 1), l.push(u - 1), t.apply(null, h) + t.apply(null, l);
          })(t, e, n, r, i, o, 3);
        },
        nearestPoint(t, e, n, r, i, o, a, s) {
          return f([t, n, i], [e, r, o], a, s, p);
        },
        pointDistance(t, e, n, r, i, o, s, u) {
          const c = this.nearestPoint(t, e, n, r, i, o, s, u);
          return a(c.x, c.y, s, u);
        },
        interpolationAt: p,
        pointAt(t, e, n, r, i, o, a) {
          return { x: p(t, n, i, a), y: p(e, r, o, a) };
        },
        divide(t, e, n, r, i, o, a) {
          return v(t, e, n, r, i, o, a);
        },
        tangentAngle(t, e, n, r, i, o, a) {
          const s = y(t, n, i, a);
          const u = y(e, r, o, a);
          return h(Math.atan2(u, s));
        },
      };
      function b(t, e, n, r, i) {
        const o = 1 - i;
        return o * o * o * t + 3 * e * i * o * o + 3 * n * i * i * o + r * i * i * i;
      }
      function x(t, e, n, r, i) {
        const o = 1 - i;
        return 3 * (o * o * (e - t) + 2 * o * i * (n - e) + i * i * (r - n));
      }
      function w(t, e, n, r) {
        let i;
        let o;
        let a;
        const u = -3 * t + 9 * e - 9 * n + 3 * r;
        const c = 6 * t - 12 * e + 6 * n;
        const h = 3 * e - 3 * t;
        const l = [];
        if (s(u, 0)) s(c, 0) || ((i = -h / c) >= 0 && i <= 1 && l.push(i));
        else {
          const d = c * c - 4 * u * h;
          s(d, 0)
            ? l.push(-c / (2 * u))
            : d > 0 &&
              ((o = (-c - (a = Math.sqrt(d))) / (2 * u)),
              (i = (-c + a) / (2 * u)) >= 0 && i <= 1 && l.push(i),
              o >= 0 && o <= 1 && l.push(o));
        }
        return l;
      }
      function O(t, e, n, r, i, o, a, s, u) {
        const c = b(t, n, i, a, u);
        const h = b(e, r, o, s, u);
        const l = d.pointAt(t, e, n, r, u);
        const f = d.pointAt(n, r, i, o, u);
        const p = d.pointAt(i, o, a, s, u);
        const g = d.pointAt(l.x, l.y, f.x, f.y, u);
        const y = d.pointAt(f.x, f.y, p.x, p.y, u);
        return [
          [t, e, l.x, l.y, g.x, g.y, c, h],
          [c, h, y.x, y.y, p.x, p.y, a, s],
        ];
      }
      function M(t, e, n, r, i, o, s, u, c) {
        if (c === 0)
          return (function (t, e) {
            for (var n = 0, r = t.length, i = 0; i < r; i++) {
              n += a(t[i], e[i], t[(i + 1) % r], e[(i + 1) % r]);
            }
            return n / 2;
          })([t, n, i, s], [e, r, o, u]);
        const h = O(t, e, n, r, i, o, s, u, 0.5);
        const l = h[0];
        const d = h[1];
        return l.push(c - 1), d.push(c - 1), M.apply(null, l) + M.apply(null, d);
      }
      var S = {
        extrema: w,
        box(t, e, n, r, i, o, a, s) {
          for (
            var c = [t, a], h = [e, s], l = w(t, n, i, a), d = w(e, r, o, s), f = 0;
            f < l.length;
            f++
          )
            c.push(b(t, n, i, a, l[f]));
          for (f = 0; f < d.length; f++) h.push(b(e, r, o, s, d[f]));
          return u(c, h);
        },
        length(t, e, n, r, i, o, a, s) {
          return M(t, e, n, r, i, o, a, s, 3);
        },
        nearestPoint(t, e, n, r, i, o, a, s, u, c, h) {
          return f([t, n, i, a], [e, r, o, s], u, c, b, h);
        },
        pointDistance(t, e, n, r, i, o, s, u, c, h, l) {
          const d = this.nearestPoint(t, e, n, r, i, o, s, u, c, h, l);
          return a(d.x, d.y, c, h);
        },
        interpolationAt: b,
        pointAt(t, e, n, r, i, o, a, s, u) {
          return { x: b(t, n, i, a, u), y: b(e, r, o, s, u) };
        },
        divide(t, e, n, r, i, o, a, s, u) {
          return O(t, e, n, r, i, o, a, s, u);
        },
        tangentAngle(t, e, n, r, i, o, a, s, u) {
          const c = x(t, n, i, a, u);
          const l = x(e, r, o, s, u);
          return h(Math.atan2(l, c));
        },
      };
      function C(t, e) {
        const n = Math.abs(t);
        return e > 0 ? n : -1 * n;
      }
      const j = function (t, e, n, r, i, o) {
        const a = n;
        const s = r;
        if (a === 0 || s === 0) return { x: t, y: e };
        for (
          var u,
            c,
            h = i - t,
            l = o - e,
            d = Math.abs(h),
            f = Math.abs(l),
            p = a * a,
            g = s * s,
            y = Math.PI / 4,
            v = 0;
          v < 4;
          v++
        ) {
          (u = a * Math.cos(y)), (c = s * Math.sin(y));
          const m = ((p - g) * Math.pow(Math.cos(y), 3)) / a;
          const b = ((g - p) * Math.pow(Math.sin(y), 3)) / s;
          const x = u - m;
          const w = c - b;
          const O = d - m;
          const M = f - b;
          const S = Math.hypot(w, x);
          const j = Math.hypot(M, O);
          (y += (S * Math.asin((x * M - w * O) / (S * j))) / Math.sqrt(p + g - u * u - c * c)),
            (y = Math.min(Math.PI / 2, Math.max(0, y)));
        }
        return { x: t + C(u, h), y: e + C(c, l) };
      };
      function k(t, e, n, r, i, o) {
        return n * Math.cos(i) * Math.cos(o) - r * Math.sin(i) * Math.sin(o) + t;
      }
      function A(t, e, n, r, i, o) {
        return n * Math.sin(i) * Math.cos(o) + r * Math.cos(i) * Math.sin(o) + e;
      }
      function E(t, e, n) {
        return { x: t * Math.cos(n), y: e * Math.sin(n) };
      }
      function P(t, e, n) {
        const r = Math.cos(n);
        const i = Math.sin(n);
        return [t * r - e * i, t * i + e * r];
      }
      var N = {
        box(t, e, n, r, i, o, a) {
          for (
            var s = (function (t, e, n) {
                return Math.atan((-e / t) * Math.tan(n));
              })(n, r, i),
              u = 1 / 0,
              c = -1 / 0,
              h = [o, a],
              l = 2 * -Math.PI;
            l <= 2 * Math.PI;
            l += Math.PI
          ) {
            const d = s + l;
            o < a ? o < d && d < a && h.push(d) : a < d && d < o && h.push(d);
          }
          for (l = 0; l < h.length; l++) {
            const f = k(t, 0, n, r, i, h[l]);
            f < u && (u = f), f > c && (c = f);
          }
          const p = (function (t, e, n) {
            return Math.atan(e / (t * Math.tan(n)));
          })(n, r, i);
          let g = 1 / 0;
          let y = -1 / 0;
          const v = [o, a];
          for (l = 2 * -Math.PI; l <= 2 * Math.PI; l += Math.PI) {
            const m = p + l;
            o < a ? o < m && m < a && v.push(m) : a < m && m < o && v.push(m);
          }
          for (l = 0; l < v.length; l++) {
            const b = A(0, e, n, r, i, v[l]);
            b < g && (g = b), b > y && (y = b);
          }
          return { x: u, y: g, width: c - u, height: y - g };
        },
        length(t, e, n, r, i, o, a) {},
        nearestPoint(t, e, n, r, i, o, a, s, u) {
          const c = P(s - t, u - e, -i);
          const h = c[0];
          const l = c[1];
          let d = j(0, 0, n, r, h, l);
          const f = (function (t, e, n, r) {
            return (Math.atan2(r * t, n * e) + 2 * Math.PI) % (2 * Math.PI);
          })(n, r, d.x, d.y);
          f < o ? (d = E(n, r, o)) : f > a && (d = E(n, r, a));
          const p = P(d.x, d.y, i);
          return { x: p[0] + t, y: p[1] + e };
        },
        pointDistance(t, e, n, r, i, o, s, u, c) {
          const h = this.nearestPoint(t, e, n, r, u, c);
          return a(h.x, h.y, u, c);
        },
        pointAt(t, e, n, r, i, o, a, s) {
          const u = (a - o) * s + o;
          return { x: k(t, 0, n, r, i, u), y: A(0, e, n, r, i, u) };
        },
        tangentAngle(t, e, n, r, i, o, a, s) {
          const u = (a - o) * s + o;
          const c = (function (t, e, n, r, i, o, a, s) {
            return -1 * n * Math.cos(i) * Math.sin(s) - r * Math.sin(i) * Math.cos(s);
          })(0, 0, n, r, i, 0, 0, u);
          const l = (function (t, e, n, r, i, o, a, s) {
            return -1 * n * Math.sin(i) * Math.sin(s) + r * Math.cos(i) * Math.cos(s);
          })(0, 0, n, r, i, 0, 0, u);
          return h(Math.atan2(l, c));
        },
      };
      function T(t) {
        for (var e = 0, n = [], r = 0; r < t.length - 1; r++) {
          const i = t[r];
          const o = t[r + 1];
          const s = a(i[0], i[1], o[0], o[1]);
          const u = { from: i, to: o, length: s };
          n.push(u), (e += s);
        }
        return { segments: n, totalLength: e };
      }
      function I(t) {
        if (t.length < 2) return 0;
        for (var e = 0, n = 0; n < t.length - 1; n++) {
          const r = t[n];
          const i = t[n + 1];
          e += a(r[0], r[1], i[0], i[1]);
        }
        return e;
      }
      function B(t, e) {
        if (e > 1 || e < 0 || t.length < 2) return null;
        const n = T(t);
        const r = n.segments;
        const i = n.totalLength;
        if (i === 0) return { x: t[0][0], y: t[0][1] };
        for (var o = 0, a = null, s = 0; s < r.length; s++) {
          const u = r[s];
          const c = u.from;
          const h = u.to;
          const l = u.length / i;
          if (e >= o && e <= o + l) {
            const f = (e - o) / l;
            a = d.pointAt(c[0], c[1], h[0], h[1], f);
            break;
          }
          o += l;
        }
        return a;
      }
      function L(t, e) {
        if (e > 1 || e < 0 || t.length < 2) return 0;
        for (
          var n = T(t), r = n.segments, i = n.totalLength, o = 0, a = 0, s = 0;
          s < r.length;
          s++
        ) {
          const u = r[s];
          const c = u.from;
          const h = u.to;
          const l = u.length / i;
          if (e >= o && e <= o + l) {
            a = Math.atan2(h[1] - c[1], h[0] - c[0]);
            break;
          }
          o += l;
        }
        return a;
      }
      function D(t, e, n) {
        for (var r = 1 / 0, i = 0; i < t.length - 1; i++) {
          const o = t[i];
          const a = t[i + 1];
          const s = d.pointDistance(o[0], o[1], a[0], a[1], e, n);
          s < r && (r = s);
        }
        return r;
      }
      var _ = {
        box(t) {
          for (var e = [], n = [], r = 0; r < t.length; r++) {
            const i = t[r];
            e.push(i[0]), n.push(i[1]);
          }
          return u(e, n);
        },
        length(t) {
          return I(t);
        },
        pointAt(t, e) {
          return B(t, e);
        },
        pointDistance(t, e, n) {
          return D(t, e, n);
        },
        tangentAngle(t, e) {
          return L(t, e);
        },
      };
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'b', () => {
        return r;
      }),
        n.d(e, 'a', () => {
          return i;
        }),
        n.d(e, 'c', () => {
          return o;
        });
      var r = 1e-6;
      var i = typeof Float32Array !== 'undefined' ? Float32Array : Array;
      var o = Math.random;
      Math.PI;
      Math.hypot ||
        (Math.hypot = function () {
          for (var t = 0, e = arguments.length; e--; ) t += arguments[e] * arguments[e];
          return Math.sqrt(t);
        });
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'b', () => {
        return o;
      }),
        n.d(e, 'a', () => {
          return a;
        }),
        n.d(e, 'd', () => {
          return s;
        }),
        n.d(e, 'c', () => {
          return u;
        });
      const r = n(0);
      const i = n(3);
      function o(t) {
        return document.createElementNS('http://www.w3.org/2000/svg', t);
      }
      function a(t) {
        const e = i.a[t.type];
        const n = t.getParent();
        if (!e) throw new Error(`the type ${t.type} is not supported by svg`);
        const r = o(e);
        if ((t.get('id') && (r.id = t.get('id')), t.set('el', r), t.set('attrs', {}), n)) {
          let a = n.get('el');
          a || ((a = n.createDom()), n.set('el', a)), a.appendChild(r);
        }
        return r;
      }
      function s(t, e) {
        const n = t.get('el');
        const i = Object(r.J)(n.children).sort(e);
        const o = document.createDocumentFragment();
        i.forEach((t) => {
          o.appendChild(t);
        }),
          n.appendChild(o);
      }
      function u(t, e) {
        const n = t.parentNode;
        const r = Array.from(n.childNodes).filter((t) => {
          return t.nodeType === 1 && t.nodeName.toLowerCase() !== 'defs';
        });
        const i = r[e];
        const o = r.indexOf(t);
        if (i) {
          if (o > e) n.insertBefore(t, i);
          else if (o < e) {
            const a = r[e + 1];
            a ? n.insertBefore(t, a) : n.appendChild(t);
          }
        } else n.appendChild(t);
      }
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', () => {
        return c;
      }),
        n.d(e, 'd', () => {
          return h;
        }),
        n.d(e, 'b', () => {
          return l;
        }),
        n.d(e, 'c', () => {
          return d;
        }),
        n.d(e, 'e', () => {
          return g;
        }),
        n.d(e, 'h', () => {
          return y;
        }),
        n.d(e, 'f', () => {
          return v;
        }),
        n.d(e, 'g', () => {
          return m;
        });
      const r = n(0);
      const i = n(32);
      const o = n(23);
      const a = n(2);
      const s = n(11);
      const u = { fill: 'fillStyle', stroke: 'strokeStyle', opacity: 'globalAlpha' };
      function c(t, e) {
        const n = e.attr();
        for (const o in n) {
          let a = n[o];
          const s = u[o] ? u[o] : o;
          s === 'matrix' && a
            ? t.transform(a[0], a[1], a[3], a[4], a[6], a[7])
            : s === 'lineDash' && t.setLineDash
            ? Object(r.n)(a) && t.setLineDash(a)
            : (s === 'strokeStyle' || s === 'fillStyle'
                ? (a = Object(i.b)(t, e, a))
                : s === 'globalAlpha' && (a *= t.globalAlpha),
              (t[s] = a));
        }
      }
      function h(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          const i = e[r];
          i.cfg.visible ? i.draw(t, n) : i.skipDraw();
        }
      }
      function l(t, e, n) {
        const i = t.get('refreshElements');
        Object(r.f)(i, (e) => {
          if (e !== t)
            for (let n = e.cfg.parent; n && n !== t && !n.cfg.refresh; )
              (n.cfg.refresh = !0), (n = n.cfg.parent);
        }),
          i[0] === t
            ? f(e, n)
            : (function t(e, n) {
                for (let r = 0; r < e.length; r++) {
                  const i = e[r];
                  if (i.cfg.visible)
                    if (i.cfg.hasChanged) (i.cfg.refresh = !0), i.isGroup() && f(i.cfg.children, n);
                    else if (i.cfg.refresh) i.isGroup() && t(i.cfg.children, n);
                    else {
                      const o = p(i, n);
                      (i.cfg.refresh = o), o && i.isGroup() && t(i.cfg.children, n);
                    }
                }
              })(e, n);
      }
      function d(t) {
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          (n.cfg.hasChanged = !1), n.isGroup() && !n.destroyed && d(n.cfg.children);
        }
      }
      function f(t, e) {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          (r.cfg.refresh = !0), r.isGroup() && f(r.get('children'), e);
        }
      }
      function p(t, e) {
        const n = t.cfg.cacheCanvasBBox;
        return t.cfg.isInView && n && Object(a.f)(n, e);
      }
      function g(t, e, n, r) {
        const i = n.path;
        const a = n.startArrow;
        const u = n.endArrow;
        if (i) {
          let c = [0, 0];
          let h = [0, 0];
          let l = { dx: 0, dy: 0 };
          e.beginPath();
          for (let d = 0; d < i.length; d++) {
            const f = i[d];
            const p = f[0];
            if (d === 0 && a && a.d) {
              var g = t.getStartTangent();
              l = s.c(g[0][0], g[0][1], g[1][0], g[1][1], a.d);
            } else if (d === i.length - 2 && i[d + 1][0] === 'Z' && u && u.d) {
              if (i[d + 1][0] === 'Z') {
                g = t.getEndTangent();
                l = s.c(g[0][0], g[0][1], g[1][0], g[1][1], u.d);
              }
            } else if (d === i.length - 1 && u && u.d && i[0] !== 'Z') {
              g = t.getEndTangent();
              l = s.c(g[0][0], g[0][1], g[1][0], g[1][1], u.d);
            }
            const y = l.dx;
            const v = l.dy;
            switch (p) {
              case 'M':
                e.moveTo(f[1] - y, f[2] - v), (h = [f[1], f[2]]);
                break;
              case 'L':
                e.lineTo(f[1] - y, f[2] - v);
                break;
              case 'Q':
                e.quadraticCurveTo(f[1], f[2], f[3] - y, f[4] - v);
                break;
              case 'C':
                e.bezierCurveTo(f[1], f[2], f[3], f[4], f[5] - y, f[6] - v);
                break;
              case 'A':
                var m = void 0;
                r ? (m = r[d]) || ((m = Object(o.a)(c, f)), (r[d] = m)) : (m = Object(o.a)(c, f));
                var b = m.cx;
                var x = m.cy;
                var w = m.rx;
                var O = m.ry;
                var M = m.startAngle;
                var S = m.endAngle;
                var C = m.xRotation;
                var j = m.sweepFlag;
                if (e.ellipse) e.ellipse(b, x, w, O, C, M, S, 1 - j);
                else {
                  const k = w > O ? w : O;
                  const A = w > O ? 1 : w / O;
                  const E = w > O ? O / w : 1;
                  e.translate(b, x),
                    e.rotate(C),
                    e.scale(A, E),
                    e.arc(0, 0, k, M, S, 1 - j),
                    e.scale(1 / A, 1 / E),
                    e.rotate(-C),
                    e.translate(-b, -x);
                }
                break;
              case 'Z':
                e.closePath();
            }
            if (p === 'Z') c = h;
            else {
              const P = f.length;
              c = [f[P - 2], f[P - 1]];
            }
          }
        }
      }
      function y(t, e) {
        const n = t.get('canvas');
        n &&
          (e === 'remove' && (t._cacheCanvasBBox = t.get('cacheCanvasBBox')),
          t.get('hasChanged') ||
            (t.set('hasChanged', !0),
            (t.cfg.parent && t.cfg.parent.get('hasChanged')) ||
              (n.refreshElement(t, e, n), n.get('autoDraw') && n.draw())));
      }
      function v(t) {
        if (!t.length) return null;
        const e = [];
        const n = [];
        const i = [];
        const o = [];
        return (
          Object(r.f)(t, (t) => {
            const r = (function (t) {
              let e;
              if (t.destroyed) e = t._cacheCanvasBBox;
              else {
                const n = t.get('cacheCanvasBBox');
                const r = n && !(!n.width || !n.height);
                const i = t.getCanvasBBox();
                const o = i && !(!i.width || !i.height);
                r && o ? (e = Object(a.l)(n, i)) : r ? (e = n) : o && (e = i);
              }
              return e;
            })(t);
            r && (e.push(r.minX), n.push(r.minY), i.push(r.maxX), o.push(r.maxY));
          }),
          { minX: Object(r.C)(e), minY: Object(r.C)(n), maxX: Object(r.B)(i), maxY: Object(r.B)(o) }
        );
      }
      function m(t, e) {
        return t && e && Object(a.f)(t, e)
          ? {
              minX: Math.max(t.minX, e.minX),
              minY: Math.max(t.minY, e.minY),
              maxX: Math.min(t.maxX, e.maxX),
              maxY: Math.min(t.maxY, e.maxY),
            }
          : null;
      }
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'c', () => {
        return d;
      }),
        n.d(e, 'b', () => {
          return f;
        }),
        n.d(e, 'a', () => {
          return p;
        });
      const r = n(1);
      const i = n(16);
      function o(t) {
        return (o =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      const a = Math.sin;
      const s = Math.cos;
      const u = Math.atan2;
      const c = Math.PI;
      function h(t, e, n, r, o, h, l) {
        const d = e.stroke;
        const f = e.lineWidth;
        const p = u(r - h, n - o);
        const g = new i.Path({
          type: 'path',
          canvas: t.get('canvas'),
          isArrowShape: !0,
          attrs: {
            path: `M${10 * s(c / 6)},${10 * a(c / 6)} L0,0 L${10 * s(c / 6)},-${10 * a(c / 6)}`,
            stroke: d,
            lineWidth: f,
          },
        });
        g.translate(o, h),
          g.rotateAtPoint(o, h, p),
          t.set(l ? 'startArrowShape' : 'endArrowShape', g);
      }
      function l(t, e, n, o, c, h, l) {
        const d = e.startArrow;
        const f = e.endArrow;
        const p = e.stroke;
        const g = e.lineWidth;
        const y = l ? d : f;
        const v = y.d;
        const m = y.fill;
        const b = y.stroke;
        const x = y.lineWidth;
        const w = Object(r.e)(y, ['d', 'fill', 'stroke', 'lineWidth']);
        const O = u(o - h, n - c);
        v && ((c -= s(O) * v), (h -= a(O) * v));
        const M = new i.Path({
          type: 'path',
          canvas: t.get('canvas'),
          isArrowShape: !0,
          attrs: Object(r.a)(Object(r.a)({}, w), { stroke: b || p, lineWidth: x || g, fill: m }),
        });
        M.translate(c, h),
          M.rotateAtPoint(c, h, O),
          t.set(l ? 'startArrowShape' : 'endArrowShape', M);
      }
      function d(t, e, n, r, i) {
        const o = u(r - e, n - t);
        return { dx: s(o) * i, dy: a(o) * i };
      }
      function f(t, e, n, r, i, a) {
        o(e.startArrow) === 'object'
          ? l(t, e, n, r, i, a, !0)
          : e.startArrow
          ? h(t, e, n, r, i, a, !0)
          : t.set('startArrowShape', null);
      }
      function p(t, e, n, r, i, a) {
        o(e.endArrow) === 'object'
          ? l(t, e, n, r, i, a, !1)
          : e.endArrow
          ? h(t, e, n, r, i, a, !1)
          : t.set('startArrowShape', null);
      }
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'b', () => {
        return i;
      }),
        n.d(e, 'c', () => {
          return o;
        }),
        n.d(e, 'a', () => {
          return a;
        });
      const r = n(9);
      function i(t, e) {
        const n = t.cfg.el;
        const r = t.attr();
        const i = {
          dx: r.shadowOffsetX,
          dy: r.shadowOffsetY,
          blur: r.shadowBlur,
          color: r.shadowColor,
        };
        if (i.dx || i.dy || i.blur || i.color) {
          let o = e.find('filter', i);
          o || (o = e.addShadow(i)), n.setAttribute('filter', `url(#${o})`);
        } else n.removeAttribute('filter');
      }
      function o(t) {
        const e = t.attr().matrix;
        if (e) {
          for (var n = t.cfg.el, r = [], i = 0; i < 9; i += 3) r.push(`${e[i]},${e[i + 1]}`);
          (r = r.join(',')).indexOf('NaN') === -1
            ? n.setAttribute('transform', `matrix(${r})`)
            : console.warn('invalid matrix:', e);
        }
      }
      function a(t, e) {
        const n = t.getClip();
        const i = t.get('el');
        if (n) {
          if (n && !i.hasAttribute('clip-path')) {
            Object(r.a)(n), n.createPath(e);
            const o = e.addClip(n);
            i.setAttribute('clip-path', `url(#${o})`);
          }
        } else i.removeAttribute('clip-path');
      }
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', () => {
        return s;
      }),
        n.d(e, 'b', () => {
          return l;
        }),
        n.d(e, 'c', () => {
          return p;
        }),
        n.d(e, 'd', () => {
          return w;
        });
      const r = n(0);
      const i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi;
      const o = /[^\s\,]+/gi;
      const a = function (t) {
        let e = t || [];
        return Object(r.n)(e)
          ? e
          : Object(r.y)(e)
          ? ((e = e.match(i)),
            Object(r.f)(e, (t, n) => {
              if ((t = t.match(o))[0].length > 1) {
                const i = t[0].charAt(0);
                t.splice(1, 0, t[0].substr(1)), (t[0] = i);
              }
              Object(r.f)(t, (e, n) => {
                isNaN(e) || (t[n] = +e);
              }),
                (e[n] = t);
            }),
            e)
          : void 0;
      };
      function s(t, e) {
        for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
          const o = [
            { x: +t[r - 2], y: +t[r - 1] },
            { x: +t[r], y: +t[r + 1] },
            { x: +t[r + 2], y: +t[r + 3] },
            { x: +t[r + 4], y: +t[r + 5] },
          ];
          e
            ? r
              ? i - 4 === r
                ? (o[3] = { x: +t[0], y: +t[1] })
                : i - 2 === r && ((o[2] = { x: +t[0], y: +t[1] }), (o[3] = { x: +t[2], y: +t[3] }))
              : (o[0] = { x: +t[i - 2], y: +t[i - 1] })
            : i - 4 === r
            ? (o[3] = o[2])
            : r || (o[0] = { x: +t[r], y: +t[r + 1] }),
            n.push([
              'C',
              (-o[0].x + 6 * o[1].x + o[2].x) / 6,
              (-o[0].y + 6 * o[1].y + o[2].y) / 6,
              (o[1].x + 6 * o[2].x - o[3].x) / 6,
              (o[1].y + 6 * o[2].y - o[3].y) / 6,
              o[2].x,
              o[2].y,
            ]);
        }
        return n;
      }
      const u = '\t\n\v\f\r   ᠎             　\u2028\u2029';
      const c = new RegExp(
        `([a-z])[${u},]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[${u}]*,?[${u}]*)+)`,
        'ig',
      );
      const h = new RegExp(`(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[${u}]*,?[${u}]*`, 'ig');
      function l(t) {
        if (!t) return null;
        if (Object(r.n)(t)) return t;
        const e = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 };
        const n = [];
        return (
          String(t).replace(c, (t, r, i) => {
            const o = [];
            let a = r.toLowerCase();
            if (
              (i.replace(h, (t, e) => {
                e && o.push(+e);
              }),
              a === 'm' &&
                o.length > 2 &&
                (n.push([r].concat(o.splice(0, 2))), (a = 'l'), (r = r === 'm' ? 'l' : 'L')),
              a === 'o' && o.length === 1 && n.push([r, o[0]]),
              a === 'r')
            )
              n.push([r].concat(o));
            else for (; o.length >= e[a] && (n.push([r].concat(o.splice(0, e[a]))), e[a]); );
            return '';
          }),
          n
        );
      }
      const d = /[a-z]/;
      function f(t, e) {
        return [e[0] + (e[0] - t[0]), e[1] + (e[1] - t[1])];
      }
      function p(t) {
        const e = l(t);
        if (!e || !e.length) return [['M', 0, 0]];
        for (var n = !1, r = 0; r < e.length; r++) {
          var i = e[r][0];
          if (d.test(i) || ['V', 'H', 'T', 'S'].indexOf(i) >= 0) {
            n = !0;
            break;
          }
        }
        if (!n) return e;
        const o = [];
        let a = 0;
        let s = 0;
        let u = 0;
        let c = 0;
        let h = 0;
        const p = e[0];
        (p[0] !== 'M' && p[0] !== 'm') ||
          ((u = a = +p[1]), (c = s = +p[2]), h++, (o[0] = ['M', a, s]));
        r = h;
        for (let g = e.length; r < g; r++) {
          const y = e[r];
          const v = o[r - 1];
          let m = [];
          const b = (i = y[0]).toUpperCase();
          if (i !== b)
            switch (((m[0] = b), b)) {
              case 'A':
                (m[1] = y[1]),
                  (m[2] = y[2]),
                  (m[3] = y[3]),
                  (m[4] = y[4]),
                  (m[5] = y[5]),
                  (m[6] = +y[6] + a),
                  (m[7] = +y[7] + s);
                break;
              case 'V':
                m[1] = +y[1] + s;
                break;
              case 'H':
                m[1] = +y[1] + a;
                break;
              case 'M':
                (u = +y[1] + a), (c = +y[2] + s);
                break;
              default:
                for (let x = 1, w = y.length; x < w; x++) m[x] = +y[x] + (x % 2 ? a : s);
            }
          else m = e[r];
          switch (b) {
            case 'Z':
              (a = +u), (s = +c);
              break;
            case 'H':
              m = ['L', (a = m[1]), s];
              break;
            case 'V':
              m = ['L', a, (s = m[1])];
              break;
            case 'T':
              (a = m[1]), (s = m[2]);
              var O = f([v[1], v[2]], [v[3], v[4]]);
              m = ['Q', O[0], O[1], a, s];
              break;
            case 'S':
              (a = m[m.length - 2]), (s = m[m.length - 1]);
              var M = v.length;
              var S = f([v[M - 4], v[M - 3]], [v[M - 2], v[M - 1]]);
              m = ['C', S[0], S[1], m[1], m[2], a, s];
              break;
            case 'M':
              (u = m[m.length - 2]), (c = m[m.length - 1]);
              break;
            default:
              (a = m[m.length - 2]), (s = m[m.length - 1]);
          }
          o.push(m);
        }
        return o;
      }
      function g(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      }
      function y(t, e) {
        return g(t) * g(e) ? (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e)) : 1;
      }
      function v(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(y(t, e));
      }
      function m(t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }
      function b(t, e) {
        let n = e[1];
        let i = e[2];
        const o = Object(r.E)(Object(r.K)(e[3]), 2 * Math.PI);
        const a = e[4];
        const s = e[5];
        const u = t[0];
        const c = t[1];
        const h = e[6];
        const l = e[7];
        const d = (Math.cos(o) * (u - h)) / 2 + (Math.sin(o) * (c - l)) / 2;
        const f = (-1 * Math.sin(o) * (u - h)) / 2 + (Math.cos(o) * (c - l)) / 2;
        const p = (d * d) / (n * n) + (f * f) / (i * i);
        p > 1 && ((n *= Math.sqrt(p)), (i *= Math.sqrt(p)));
        const g = n * n * (f * f) + i * i * (d * d);
        let b = g ? Math.sqrt((n * n * (i * i) - g) / g) : 1;
        a === s && (b *= -1), isNaN(b) && (b = 0);
        const x = i ? (b * n * f) / i : 0;
        const w = n ? (b * -i * d) / n : 0;
        const O = (u + h) / 2 + Math.cos(o) * x - Math.sin(o) * w;
        const M = (c + l) / 2 + Math.sin(o) * x + Math.cos(o) * w;
        const S = [(d - x) / n, (f - w) / i];
        const C = [(-1 * d - x) / n, (-1 * f - w) / i];
        const j = v([1, 0], S);
        let k = v(S, C);
        return (
          y(S, C) <= -1 && (k = Math.PI),
          y(S, C) >= 1 && (k = 0),
          s === 0 && k > 0 && (k -= 2 * Math.PI),
          s === 1 && k < 0 && (k += 2 * Math.PI),
          {
            cx: O,
            cy: M,
            rx: m(t, [h, l]) ? 0 : n,
            ry: m(t, [h, l]) ? 0 : i,
            startAngle: j,
            endAngle: j + k,
            xRotation: o,
            arcFlag: a,
            sweepFlag: s,
          }
        );
      }
      function x(t, e) {
        return [e[0] + (e[0] - t[0]), e[1] + (e[1] - t[1])];
      }
      function w(t) {
        for (
          var e = [], n = null, r = null, i = null, o = 0, s = (t = a(t)).length, u = 0;
          u < s;
          u++
        ) {
          const c = t[u];
          r = t[u + 1];
          const h = c[0];
          const l = { command: h, prePoint: n, params: c, startTangent: null, endTangent: null };
          switch (h) {
            case 'M':
              (i = [c[1], c[2]]), (o = u);
              break;
            case 'A':
              var d = b(n, c);
              l.arcParams = d;
          }
          if (h === 'Z') (n = i), (r = t[o + 1]);
          else {
            const f = c.length;
            n = [c[f - 2], c[f - 1]];
          }
          r && r[0] === 'Z' && ((r = t[o]), e[o] && (e[o].prePoint = n)),
            (l.currentPoint = n),
            e[o] && m(n, e[o].currentPoint) && (e[o].prePoint = l.prePoint);
          const p = r ? [r[r.length - 2], r[r.length - 1]] : null;
          l.nextPoint = p;
          const g = l.prePoint;
          if (['L', 'H', 'V'].includes(h))
            (l.startTangent = [g[0] - n[0], g[1] - n[1]]),
              (l.endTangent = [n[0] - g[0], n[1] - g[1]]);
          else if (h === 'Q') {
            var y = [c[1], c[2]];
            (l.startTangent = [g[0] - y[0], g[1] - y[1]]),
              (l.endTangent = [n[0] - y[0], n[1] - y[1]]);
          } else if (h === 'T') {
            y = x((O = e[u - 1]).currentPoint, g);
            O.command === 'Q'
              ? ((l.command = 'Q'),
                (l.startTangent = [g[0] - y[0], g[1] - y[1]]),
                (l.endTangent = [n[0] - y[0], n[1] - y[1]]))
              : ((l.command = 'TL'),
                (l.startTangent = [g[0] - n[0], g[1] - n[1]]),
                (l.endTangent = [n[0] - g[0], n[1] - g[1]]));
          } else if (h === 'C') {
            var v = [c[1], c[2]];
            var w = [c[3], c[4]];
            (l.startTangent = [g[0] - v[0], g[1] - v[1]]),
              (l.endTangent = [n[0] - w[0], n[1] - w[1]]);
          } else if (h === 'S') {
            var O;
            (v = x((O = e[u - 1]).currentPoint, g)), (w = [c[1], c[2]]);
            O.command === 'C'
              ? ((l.command = 'C'),
                (l.startTangent = [g[0] - v[0], g[1] - v[1]]),
                (l.endTangent = [n[0] - w[0], n[1] - w[1]]))
              : ((l.command = 'SQ'),
                (l.startTangent = [g[0] - w[0], g[1] - w[1]]),
                (l.endTangent = [n[0] - w[0], n[1] - w[1]]));
          } else if (h === 'A') {
            let M = 0.001;
            const S = l.arcParams || {};
            const C = S.cx;
            const j = void 0 === C ? 0 : C;
            const k = S.cy;
            const A = void 0 === k ? 0 : k;
            const E = S.rx;
            const P = void 0 === E ? 0 : E;
            const N = S.ry;
            const T = void 0 === N ? 0 : N;
            const I = S.sweepFlag;
            const B = void 0 === I ? 0 : I;
            const L = S.startAngle;
            const D = void 0 === L ? 0 : L;
            const _ = S.endAngle;
            const Y = void 0 === _ ? 0 : _;
            B === 0 && (M *= -1);
            const R = P * Math.cos(D - M) + j;
            const F = T * Math.sin(D - M) + A;
            l.startTangent = [R - i[0], F - i[1]];
            const X = P * Math.cos(D + Y + M) + j;
            const z = T * Math.sin(D + Y - M) + A;
            l.endTangent = [g[0] - X, g[1] - z];
          }
          e.push(l);
        }
        return e;
      }
    },
    function (t, e, n) {
      'use strict';
      function r(t, e) {
        const n = [];
        const r = t[0];
        const i = t[1];
        const o = t[2];
        const a = t[3];
        const s = t[4];
        const u = t[5];
        const c = t[6];
        const h = t[7];
        const l = t[8];
        const d = e[0];
        const f = e[1];
        const p = e[2];
        const g = e[3];
        const y = e[4];
        const v = e[5];
        const m = e[6];
        const b = e[7];
        const x = e[8];
        return (
          (n[0] = d * r + f * a + p * c),
          (n[1] = d * i + f * s + p * h),
          (n[2] = d * o + f * u + p * l),
          (n[3] = g * r + y * a + v * c),
          (n[4] = g * i + y * s + v * h),
          (n[5] = g * o + y * u + v * l),
          (n[6] = m * r + b * a + x * c),
          (n[7] = m * i + b * s + x * h),
          (n[8] = m * o + b * u + x * l),
          n
        );
      }
      function i(t, e) {
        const n = [];
        const r = e[0];
        const i = e[1];
        return (n[0] = t[0] * r + t[3] * i + t[6]), (n[1] = t[1] * r + t[4] * i + t[7]), n;
      }
      function o(t) {
        const e = [];
        const n = t[0];
        const r = t[1];
        const i = t[2];
        const o = t[3];
        const a = t[4];
        const s = t[5];
        const u = t[6];
        const c = t[7];
        const h = t[8];
        const l = h * a - s * c;
        const d = -h * o + s * u;
        const f = c * o - a * u;
        let p = n * l + r * d + i * f;
        return p
          ? ((p = 1 / p),
            (e[0] = l * p),
            (e[1] = (-h * r + i * c) * p),
            (e[2] = (s * r - i * a) * p),
            (e[3] = d * p),
            (e[4] = (h * n - i * u) * p),
            (e[5] = (-s * n + i * o) * p),
            (e[6] = f * p),
            (e[7] = (-c * n + r * u) * p),
            (e[8] = (a * n - r * o) * p),
            e)
          : null;
      }
      n.d(e, 'b', () => {
        return r;
      }),
        n.d(e, 'c', () => {
          return i;
        }),
        n.d(e, 'a', () => {
          return o;
        });
    },
    function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'catmullRomToBezier', () => {
          return u;
        }),
        n.d(e, 'fillPath', () => {
          return P;
        }),
        n.d(e, 'fillPathByDiff', () => {
          return I;
        }),
        n.d(e, 'formatPath', () => {
          return D;
        }),
        n.d(e, 'intersection', () => {
          return k;
        }),
        n.d(e, 'parsePathArray', () => {
          return y;
        }),
        n.d(e, 'parsePathString', () => {
          return s;
        }),
        n.d(e, 'pathToAbsolute', () => {
          return h;
        }),
        n.d(e, 'pathToCurve', () => {
          return p;
        }),
        n.d(e, 'rectPath', () => {
          return O;
        });
      const r = n(0);
      const i = '\t\n\v\f\r   ᠎             　\u2028\u2029';
      const o = new RegExp(
        `([a-z])[${i},]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[${i}]*,?[${i}]*)+)`,
        'ig',
      );
      const a = new RegExp(`(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[${i}]*,?[${i}]*`, 'ig');
      var s = function (t) {
        if (!t) return null;
        if (Object(r.n)(t)) return t;
        const e = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 };
        const n = [];
        return (
          String(t).replace(o, (r, i, o) => {
            const s = [];
            let u = i.toLowerCase();
            if (
              (o.replace(a, (t, e) => {
                e && s.push(+e);
              }),
              u === 'm' &&
                s.length > 2 &&
                (n.push([i].concat(s.splice(0, 2))), (u = 'l'), (i = i === 'm' ? 'l' : 'L')),
              u === 'o' && s.length === 1 && n.push([i, s[0]]),
              u === 'r')
            )
              n.push([i].concat(s));
            else for (; s.length >= e[u] && (n.push([i].concat(s.splice(0, e[u]))), e[u]); );
            return t;
          }),
          n
        );
      };
      var u = function (t, e) {
        for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
          const o = [
            { x: +t[r - 2], y: +t[r - 1] },
            { x: +t[r], y: +t[r + 1] },
            { x: +t[r + 2], y: +t[r + 3] },
            { x: +t[r + 4], y: +t[r + 5] },
          ];
          e
            ? r
              ? i - 4 === r
                ? (o[3] = { x: +t[0], y: +t[1] })
                : i - 2 === r && ((o[2] = { x: +t[0], y: +t[1] }), (o[3] = { x: +t[2], y: +t[3] }))
              : (o[0] = { x: +t[i - 2], y: +t[i - 1] })
            : i - 4 === r
            ? (o[3] = o[2])
            : r || (o[0] = { x: +t[r], y: +t[r + 1] }),
            n.push([
              'C',
              (-o[0].x + 6 * o[1].x + o[2].x) / 6,
              (-o[0].y + 6 * o[1].y + o[2].y) / 6,
              (o[1].x + 6 * o[2].x - o[3].x) / 6,
              (o[1].y + 6 * o[2].y - o[3].y) / 6,
              o[2].x,
              o[2].y,
            ]);
        }
        return n;
      };
      const c = function (t, e, n, r, i) {
        let o = [];
        if (
          (i === null && r === null && (r = n), (t = +t), (e = +e), (n = +n), (r = +r), i !== null)
        ) {
          const a = Math.PI / 180;
          const s = t + n * Math.cos(-r * a);
          const u = t + n * Math.cos(-i * a);
          o = [
            ['M', s, e + n * Math.sin(-r * a)],
            ['A', n, n, 0, +(i - r > 180), 0, u, e + n * Math.sin(-i * a)],
          ];
        } else
          o = [
            ['M', t, e],
            ['m', 0, -r],
            ['a', n, r, 0, 1, 1, 0, 2 * r],
            ['a', n, r, 0, 1, 1, 0, -2 * r],
            ['z'],
          ];
        return o;
      };
      var h = function (t) {
        if (!(t = s(t)) || !t.length) return [['M', 0, 0]];
        let e;
        let n;
        let r = [];
        let i = 0;
        let o = 0;
        let a = 0;
        let h = 0;
        let l = 0;
        t[0][0] === 'M' && ((a = i = +t[0][1]), (h = o = +t[0][2]), l++, (r[0] = ['M', i, o]));
        for (
          let d =
              t.length === 3 &&
              t[0][0] === 'M' &&
              t[1][0].toUpperCase() === 'R' &&
              t[2][0].toUpperCase() === 'Z',
            f = void 0,
            p = void 0,
            g = l,
            y = t.length;
          g < y;
          g++
        ) {
          if ((r.push((f = [])), (e = (p = t[g])[0]) !== e.toUpperCase()))
            switch (((f[0] = e.toUpperCase()), f[0])) {
              case 'A':
                (f[1] = p[1]),
                  (f[2] = p[2]),
                  (f[3] = p[3]),
                  (f[4] = p[4]),
                  (f[5] = p[5]),
                  (f[6] = +p[6] + i),
                  (f[7] = +p[7] + o);
                break;
              case 'V':
                f[1] = +p[1] + o;
                break;
              case 'H':
                f[1] = +p[1] + i;
                break;
              case 'R':
                for (var v = 2, m = (n = [i, o].concat(p.slice(1))).length; v < m; v++)
                  (n[v] = +n[v] + i), (n[++v] = +n[v] + o);
                r.pop(), (r = r.concat(u(n, d)));
                break;
              case 'O':
                r.pop(), (n = c(i, o, p[1], p[2])).push(n[0]), (r = r.concat(n));
                break;
              case 'U':
                r.pop(),
                  (r = r.concat(c(i, o, p[1], p[2], p[3]))),
                  (f = ['U'].concat(r[r.length - 1].slice(-2)));
                break;
              case 'M':
                (a = +p[1] + i), (h = +p[2] + o);
                break;
              default:
                for (v = 1, m = p.length; v < m; v++) f[v] = +p[v] + (v % 2 ? i : o);
            }
          else if (e === 'R')
            (n = [i, o].concat(p.slice(1))),
              r.pop(),
              (r = r.concat(u(n, d))),
              (f = ['R'].concat(p.slice(-2)));
          else if (e === 'O') r.pop(), (n = c(i, o, p[1], p[2])).push(n[0]), (r = r.concat(n));
          else if (e === 'U')
            r.pop(),
              (r = r.concat(c(i, o, p[1], p[2], p[3]))),
              (f = ['U'].concat(r[r.length - 1].slice(-2)));
          else for (let b = 0, x = p.length; b < x; b++) f[b] = p[b];
          if ((e = e.toUpperCase()) !== 'O')
            switch (f[0]) {
              case 'Z':
                (i = +a), (o = +h);
                break;
              case 'H':
                i = f[1];
                break;
              case 'V':
                o = f[1];
                break;
              case 'M':
                (a = f[f.length - 2]), (h = f[f.length - 1]);
                break;
              default:
                (i = f[f.length - 2]), (o = f[f.length - 1]);
            }
        }
        return r;
      };
      const l = function (t, e, n, r) {
        return [t, e, n, r, n, r];
      };
      const d = function (t, e, n, r, i, o) {
        return [
          (1 / 3) * t + (2 / 3) * n,
          (1 / 3) * e + (2 / 3) * r,
          (1 / 3) * i + (2 / 3) * n,
          (1 / 3) * o + (2 / 3) * r,
          i,
          o,
        ];
      };
      const f = function t(e, n, r, i, o, a, s, u, c, h) {
        r === i && (r += 1);
        let l;
        let d;
        let f;
        let p;
        let g;
        const y = (120 * Math.PI) / 180;
        const v = (Math.PI / 180) * (+o || 0);
        let m = [];
        const b = function (t, e, n) {
          return { x: t * Math.cos(n) - e * Math.sin(n), y: t * Math.sin(n) + e * Math.cos(n) };
        };
        if (h) (d = h[0]), (f = h[1]), (p = h[2]), (g = h[3]);
        else {
          (e = (l = b(e, n, -v)).x),
            (n = l.y),
            (u = (l = b(u, c, -v)).x),
            (c = l.y),
            e === u && n === c && ((u += 1), (c += 1));
          const x = (e - u) / 2;
          const w = (n - c) / 2;
          let O = (x * x) / (r * r) + (w * w) / (i * i);
          O > 1 && ((r *= O = Math.sqrt(O)), (i *= O));
          const M = r * r;
          const S = i * i;
          const C =
            (a === s ? -1 : 1) *
            Math.sqrt(Math.abs((M * S - M * w * w - S * x * x) / (M * w * w + S * x * x)));
          (p = (C * r * w) / i + (e + u) / 2),
            (g = (C * -i * x) / r + (n + c) / 2),
            (d = Math.asin(((n - g) / i).toFixed(9))),
            (f = Math.asin(((c - g) / i).toFixed(9))),
            (d = e < p ? Math.PI - d : d),
            (f = u < p ? Math.PI - f : f),
            d < 0 && (d = 2 * Math.PI + d),
            f < 0 && (f = 2 * Math.PI + f),
            s && d > f && (d -= 2 * Math.PI),
            !s && f > d && (f -= 2 * Math.PI);
        }
        let j = f - d;
        if (Math.abs(j) > y) {
          const k = f;
          const A = u;
          const E = c;
          (f = d + y * (s && f > d ? 1 : -1)),
            (m = t((u = p + r * Math.cos(f)), (c = g + i * Math.sin(f)), r, i, o, 0, s, A, E, [
              f,
              k,
              p,
              g,
            ]));
        }
        j = f - d;
        const P = Math.cos(d);
        const N = Math.sin(d);
        const T = Math.cos(f);
        const I = Math.sin(f);
        const B = Math.tan(j / 4);
        const L = (4 / 3) * r * B;
        const D = (4 / 3) * i * B;
        const _ = [e, n];
        const Y = [e + L * N, n - D * P];
        const R = [u + L * I, c - D * T];
        const F = [u, c];
        if (((Y[0] = 2 * _[0] - Y[0]), (Y[1] = 2 * _[1] - Y[1]), h)) return [Y, R, F].concat(m);
        for (var X = [], z = 0, W = (m = [Y, R, F].concat(m).join().split(',')).length; z < W; z++)
          X[z] = z % 2 ? b(m[z - 1], m[z], v).y : b(m[z], m[z + 1], v).x;
        return X;
      };
      var p = function (t, e) {
        let n;
        const r = h(t);
        const i = e && h(e);
        const o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null };
        const a = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null };
        const s = [];
        const u = [];
        let c = '';
        let p = '';
        const g = function (t, e, n) {
          let r;
          let i;
          if (!t) return ['C', e.x, e.y, e.x, e.y, e.x, e.y];
          switch ((!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0])) {
            case 'M':
              (e.X = t[1]), (e.Y = t[2]);
              break;
            case 'A':
              t = ['C'].concat(f.apply(0, [e.x, e.y].concat(t.slice(1))));
              break;
            case 'S':
              n === 'C' || n === 'S'
                ? ((r = 2 * e.x - e.bx), (i = 2 * e.y - e.by))
                : ((r = e.x), (i = e.y)),
                (t = ['C', r, i].concat(t.slice(1)));
              break;
            case 'T':
              n === 'Q' || n === 'T'
                ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                : ((e.qx = e.x), (e.qy = e.y)),
                (t = ['C'].concat(d(e.x, e.y, e.qx, e.qy, t[1], t[2])));
              break;
            case 'Q':
              (e.qx = t[1]), (e.qy = t[2]), (t = ['C'].concat(d(e.x, e.y, t[1], t[2], t[3], t[4])));
              break;
            case 'L':
              t = ['C'].concat(l(e.x, e.y, t[1], t[2]));
              break;
            case 'H':
              t = ['C'].concat(l(e.x, e.y, t[1], e.y));
              break;
            case 'V':
              t = ['C'].concat(l(e.x, e.y, e.x, t[1]));
              break;
            case 'Z':
              t = ['C'].concat(l(e.x, e.y, e.X, e.Y));
          }
          return t;
        };
        const y = function (t, e) {
          if (t[e].length > 7) {
            t[e].shift();
            for (let o = t[e]; o.length; )
              (s[e] = 'A'), i && (u[e] = 'A'), t.splice(e++, 0, ['C'].concat(o.splice(0, 6)));
            t.splice(e, 1), (n = Math.max(r.length, (i && i.length) || 0));
          }
        };
        const v = function (t, e, o, a, s) {
          t &&
            e &&
            t[s][0] === 'M' &&
            e[s][0] !== 'M' &&
            (e.splice(s, 0, ['M', a.x, a.y]),
            (o.bx = 0),
            (o.by = 0),
            (o.x = t[s][1]),
            (o.y = t[s][2]),
            (n = Math.max(r.length, (i && i.length) || 0)));
        };
        n = Math.max(r.length, (i && i.length) || 0);
        for (let m = 0; m < n; m++) {
          r[m] && (c = r[m][0]),
            c !== 'C' && ((s[m] = c), m && (p = s[m - 1])),
            (r[m] = g(r[m], o, p)),
            s[m] !== 'A' && c === 'C' && (s[m] = 'C'),
            y(r, m),
            i &&
              (i[m] && (c = i[m][0]),
              c !== 'C' && ((u[m] = c), m && (p = u[m - 1])),
              (i[m] = g(i[m], a, p)),
              u[m] !== 'A' && c === 'C' && (u[m] = 'C'),
              y(i, m)),
            v(r, i, o, a, m),
            v(i, r, a, o, m);
          const b = r[m];
          const x = i && i[m];
          const w = b.length;
          const O = i && x.length;
          (o.x = b[w - 2]),
            (o.y = b[w - 1]),
            (o.bx = parseFloat(b[w - 4]) || o.x),
            (o.by = parseFloat(b[w - 3]) || o.y),
            (a.bx = i && (parseFloat(x[O - 4]) || a.x)),
            (a.by = i && (parseFloat(x[O - 3]) || a.y)),
            (a.x = i && x[O - 2]),
            (a.y = i && x[O - 1]);
        }
        return i ? [r, i] : r;
      };
      const g = /,?([a-z]),?/gi;
      var y = function (t) {
        return t.join(',').replace(g, '$1');
      };
      const v = function (t, e, n, r, i) {
        return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n;
      };
      const m = function (t, e, n, r, i, o, a, s, u) {
        u === null && (u = 1);
        for (
          var c = (u = u > 1 ? 1 : u < 0 ? 0 : u) / 2,
            h = [
              -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041,
              -0.9816, 0.9816,
            ],
            l = [
              0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069,
              0.0472, 0.0472,
            ],
            d = 0,
            f = 0;
          f < 12;
          f++
        ) {
          const p = c * h[f] + c;
          const g = v(p, t, n, i, a);
          const y = v(p, e, r, o, s);
          const m = g * g + y * y;
          d += l[f] * Math.sqrt(m);
        }
        return c * d;
      };
      const b = function (t, e, n, r, i, o, a, s) {
        for (var u, c, h, l, d = [], f = [[], []], p = 0; p < 2; ++p)
          if (
            (p === 0
              ? ((c = 6 * t - 12 * n + 6 * i),
                (u = -3 * t + 9 * n - 9 * i + 3 * a),
                (h = 3 * n - 3 * t))
              : ((c = 6 * e - 12 * r + 6 * o),
                (u = -3 * e + 9 * r - 9 * o + 3 * s),
                (h = 3 * r - 3 * e)),
            Math.abs(u) < 1e-12)
          ) {
            if (Math.abs(c) < 1e-12) continue;
            (l = -h / c) > 0 && l < 1 && d.push(l);
          } else {
            const g = c * c - 4 * h * u;
            const y = Math.sqrt(g);
            if (!(g < 0)) {
              const v = (-c + y) / (2 * u);
              v > 0 && v < 1 && d.push(v);
              const m = (-c - y) / (2 * u);
              m > 0 && m < 1 && d.push(m);
            }
          }
        for (var b, x = d.length, w = x; x--; )
          (b = 1 - (l = d[x])),
            (f[0][x] = b * b * b * t + 3 * b * b * l * n + 3 * b * l * l * i + l * l * l * a),
            (f[1][x] = b * b * b * e + 3 * b * b * l * r + 3 * b * l * l * o + l * l * l * s);
        return (
          (f[0][w] = t),
          (f[1][w] = e),
          (f[0][w + 1] = a),
          (f[1][w + 1] = s),
          (f[0].length = f[1].length = w + 2),
          {
            min: { x: Math.min.apply(0, f[0]), y: Math.min.apply(0, f[1]) },
            max: { x: Math.max.apply(0, f[0]), y: Math.max.apply(0, f[1]) },
          }
        );
      };
      const x = function (t, e, n, r, i, o, a, s) {
        if (
          !(
            Math.max(t, n) < Math.min(i, a) ||
            Math.min(t, n) > Math.max(i, a) ||
            Math.max(e, r) < Math.min(o, s) ||
            Math.min(e, r) > Math.max(o, s)
          )
        ) {
          const u = (t - n) * (o - s) - (e - r) * (i - a);
          if (u) {
            const c = ((t * r - e * n) * (i - a) - (t - n) * (i * s - o * a)) / u;
            const h = ((t * r - e * n) * (o - s) - (e - r) * (i * s - o * a)) / u;
            const l = +c.toFixed(2);
            const d = +h.toFixed(2);
            if (
              !(
                l < +Math.min(t, n).toFixed(2) ||
                l > +Math.max(t, n).toFixed(2) ||
                l < +Math.min(i, a).toFixed(2) ||
                l > +Math.max(i, a).toFixed(2) ||
                d < +Math.min(e, r).toFixed(2) ||
                d > +Math.max(e, r).toFixed(2) ||
                d < +Math.min(o, s).toFixed(2) ||
                d > +Math.max(o, s).toFixed(2)
              )
            )
              return { x: c, y: h };
          }
        }
      };
      const w = function (t, e, n) {
        return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height;
      };
      var O = function (t, e, n, r, i) {
        if (i)
          return [
            ['M', +t + +i, e],
            ['l', n - 2 * i, 0],
            ['a', i, i, 0, 0, 1, i, i],
            ['l', 0, r - 2 * i],
            ['a', i, i, 0, 0, 1, -i, i],
            ['l', 2 * i - n, 0],
            ['a', i, i, 0, 0, 1, -i, -i],
            ['l', 0, 2 * i - r],
            ['a', i, i, 0, 0, 1, i, -i],
            ['z'],
          ];
        const o = [['M', t, e], ['l', n, 0], ['l', 0, r], ['l', -n, 0], ['z']];
        return (o.parsePathArray = y), o;
      };
      const M = function (t, e, n, r) {
        return (
          t === null && (t = e = n = r = 0),
          e === null && ((e = t.y), (n = t.width), (r = t.height), (t = t.x)),
          {
            x: t,
            y: e,
            width: n,
            w: n,
            height: r,
            h: r,
            x2: t + n,
            y2: e + r,
            cx: t + n / 2,
            cy: e + r / 2,
            r1: Math.min(n, r) / 2,
            r2: Math.max(n, r) / 2,
            r0: Math.sqrt(n * n + r * r) / 2,
            path: O(t, e, n, r),
            vb: [t, e, n, r].join(' '),
          }
        );
      };
      const S = function (t, e, n, i, o, a, s, u) {
        Object(r.n)(t) || (t = [t, e, n, i, o, a, s, u]);
        const c = b.apply(null, t);
        return M(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y);
      };
      const C = function (t, e, n, r, i, o, a, s, u) {
        const c = 1 - u;
        const h = Math.pow(c, 3);
        const l = Math.pow(c, 2);
        const d = u * u;
        const f = d * u;
        const p = t + 2 * u * (n - t) + d * (i - 2 * n + t);
        const g = e + 2 * u * (r - e) + d * (o - 2 * r + e);
        const y = n + 2 * u * (i - n) + d * (a - 2 * i + n);
        const v = r + 2 * u * (o - r) + d * (s - 2 * o + r);
        return {
          x: h * t + 3 * l * u * n + 3 * c * u * u * i + f * a,
          y: h * e + 3 * l * u * r + 3 * c * u * u * o + f * s,
          m: { x: p, y: g },
          n: { x: y, y: v },
          start: { x: c * t + u * n, y: c * e + u * r },
          end: { x: c * i + u * a, y: c * o + u * s },
          alpha: 90 - (180 * Math.atan2(p - y, g - v)) / Math.PI,
        };
      };
      const j = function (t, e, n) {
        if (
          !(function (t, e) {
            return (
              (t = M(t)),
              (e = M(e)),
              w(e, t.x, t.y) ||
                w(e, t.x2, t.y) ||
                w(e, t.x, t.y2) ||
                w(e, t.x2, t.y2) ||
                w(t, e.x, e.y) ||
                w(t, e.x2, e.y) ||
                w(t, e.x, e.y2) ||
                w(t, e.x2, e.y2) ||
                (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
                  ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
            );
          })(S(t), S(e))
        )
          return n ? 0 : [];
        for (
          var r = ~~(m.apply(0, t) / 8),
            i = ~~(m.apply(0, e) / 8),
            o = [],
            a = [],
            s = {},
            u = n ? 0 : [],
            c = 0;
          c < r + 1;
          c++
        ) {
          var h = C.apply(0, t.concat(c / r));
          o.push({ x: h.x, y: h.y, t: c / r });
        }
        for (c = 0; c < i + 1; c++) {
          h = C.apply(0, e.concat(c / i));
          a.push({ x: h.x, y: h.y, t: c / i });
        }
        for (c = 0; c < r; c++)
          for (let l = 0; l < i; l++) {
            const d = o[c];
            const f = o[c + 1];
            const p = a[l];
            const g = a[l + 1];
            const y = Math.abs(f.x - d.x) < 0.001 ? 'y' : 'x';
            const v = Math.abs(g.x - p.x) < 0.001 ? 'y' : 'x';
            const b = x(d.x, d.y, f.x, f.y, p.x, p.y, g.x, g.y);
            if (b) {
              if (s[b.x.toFixed(4)] === b.y.toFixed(4)) continue;
              s[b.x.toFixed(4)] = b.y.toFixed(4);
              const O = d.t + Math.abs((b[y] - d[y]) / (f[y] - d[y])) * (f.t - d.t);
              const j = p.t + Math.abs((b[v] - p[v]) / (g[v] - p[v])) * (g.t - p.t);
              O >= 0 &&
                O <= 1 &&
                j >= 0 &&
                j <= 1 &&
                (n ? (u += 1) : u.push({ x: b.x, y: b.y, t1: O, t2: j }));
            }
          }
        return u;
      };
      var k = function (t, e) {
        return (function (t, e, n) {
          let r;
          let i;
          let o;
          let a;
          let s;
          let u;
          let c;
          let h;
          let l;
          let d;
          (t = p(t)), (e = p(e));
          for (var f = n ? 0 : [], g = 0, y = t.length; g < y; g++) {
            const v = t[g];
            if (v[0] === 'M') (r = s = v[1]), (i = u = v[2]);
            else {
              v[0] === 'C'
                ? ((l = [r, i].concat(v.slice(1))), (r = l[6]), (i = l[7]))
                : ((l = [r, i, r, i, s, u, s, u]), (r = s), (i = u));
              for (let m = 0, b = e.length; m < b; m++) {
                const x = e[m];
                if (x[0] === 'M') (o = c = x[1]), (a = h = x[2]);
                else {
                  x[0] === 'C'
                    ? ((d = [o, a].concat(x.slice(1))), (o = d[6]), (a = d[7]))
                    : ((d = [o, a, o, a, c, h, c, h]), (o = c), (a = h));
                  const w = j(l, d, n);
                  if (n) f += w;
                  else {
                    for (let O = 0, M = w.length; O < M; O++)
                      (w[O].segment1 = g), (w[O].segment2 = m), (w[O].bez1 = l), (w[O].bez2 = d);
                    f = f.concat(w);
                  }
                }
              }
            }
          }
          return f;
        })(t, e);
      };
      function A(t, e) {
        const n = [];
        const r = [];
        return (
          t.length &&
            (function t(e, i) {
              if (e.length === 1) n.push(e[0]), r.push(e[0]);
              else {
                for (var o = [], a = 0; a < e.length - 1; a++)
                  a === 0 && n.push(e[0]),
                    a === e.length - 2 && r.push(e[a + 1]),
                    (o[a] = [
                      (1 - i) * e[a][0] + i * e[a + 1][0],
                      (1 - i) * e[a][1] + i * e[a + 1][1],
                    ]);
                t(o, i);
              }
            })(t, e),
          { left: n, right: r.reverse() }
        );
      }
      const E = function (t, e, n) {
        if (n === 1) return [[].concat(t)];
        let r = [];
        if (e[0] === 'L' || e[0] === 'C' || e[0] === 'Q')
          r = r.concat(
            (function (t, e, n) {
              const r = [[t[1], t[2]]];
              n = n || 2;
              const i = [];
              e[0] === 'A'
                ? (r.push(e[6]), r.push(e[7]))
                : e[0] === 'C'
                ? (r.push([e[1], e[2]]), r.push([e[3], e[4]]), r.push([e[5], e[6]]))
                : e[0] === 'S' || e[0] === 'Q'
                ? (r.push([e[1], e[2]]), r.push([e[3], e[4]]))
                : r.push([e[1], e[2]]);
              for (var o = r, a = 1 / n, s = 0; s < n - 1; s++) {
                const u = A(o, a / (1 - a * s));
                i.push(u.left), (o = u.right);
              }
              return (
                i.push(o),
                i.map((t) => {
                  let e = [];
                  return (
                    t.length === 4 && (e.push('C'), (e = e.concat(t[2]))),
                    t.length >= 3 && (t.length === 3 && e.push('Q'), (e = e.concat(t[1]))),
                    t.length === 2 && e.push('L'),
                    (e = e.concat(t[t.length - 1]))
                  );
                })
              );
            })(t, e, n),
          );
        else {
          const i = [].concat(t);
          i[0] === 'M' && (i[0] = 'L');
          for (let o = 0; o <= n - 1; o++) r.push(i);
        }
        return r;
      };
      var P = function (t, e) {
        if (t.length === 1) return t;
        const n = t.length - 1;
        const r = e.length - 1;
        const i = n / r;
        const o = [];
        if (t.length === 1 && t[0][0] === 'M') {
          for (var a = 0; a < r - n; a++) t.push(t[0]);
          return t;
        }
        for (a = 0; a < r; a++) {
          const s = Math.floor(i * a);
          o[s] = (o[s] || 0) + 1;
        }
        const u = o.reduce((e, r, i) => {
          return i === n ? e.concat(t[n]) : e.concat(E(t[i], t[i + 1], r));
        }, []);
        return u.unshift(t[0]), (e[r] !== 'Z' && e[r] !== 'z') || u.push('Z'), u;
      };
      const N = function (t, e) {
        if (t.length !== e.length) return !1;
        let n = !0;
        return (
          Object(r.f)(t, (t, r) => {
            if (t !== e[r]) return (n = !1), !1;
          }),
          n
        );
      };
      function T(t, e, n) {
        let r = null;
        let i = n;
        return (
          e < i && ((i = e), (r = 'add')), t < i && ((i = t), (r = 'del')), { type: r, min: i }
        );
      }
      var I = function (t, e) {
        const n = (function (t, e) {
          let n;
          let r;
          const i = t.length;
          const o = e.length;
          let a = 0;
          if (i === 0 || o === 0) return null;
          for (var s = [], u = 0; u <= i; u++) (s[u] = []), (s[u][0] = { min: u });
          for (var c = 0; c <= o; c++) s[0][c] = { min: c };
          for (u = 1; u <= i; u++) {
            n = t[u - 1];
            for (c = 1; c <= o; c++) {
              (r = e[c - 1]), (a = N(n, r) ? 0 : 1);
              const h = s[u - 1][c].min + 1;
              const l = s[u][c - 1].min + 1;
              const d = s[u - 1][c - 1].min + a;
              s[u][c] = T(h, l, d);
            }
          }
          return s;
        })(t, e);
        let r = t.length;
        const i = e.length;
        const o = [];
        let a = 1;
        let s = 1;
        if (n[r][i].min !== r) {
          for (var u = 1; u <= r; u++) {
            let c = n[u][u].min;
            s = u;
            for (let h = a; h <= i; h++) n[u][h].min < c && ((c = n[u][h].min), (s = h));
            (a = s), n[u][a].type && o.push({ index: u - 1, type: n[u][a].type });
          }
          for (u = o.length - 1; u >= 0; u--)
            (a = o[u].index),
              o[u].type === 'add' ? t.splice(a, 0, [].concat(t[a])) : t.splice(a, 1);
        }
        const l = i - (r = t.length);
        if (r < i)
          for (u = 0; u < l; u++)
            t[r - 1][0] === 'z' || t[r - 1][0] === 'Z'
              ? t.splice(r - 2, 0, t[r - 2])
              : t.push(t[r - 1]),
              (r += 1);
        return t;
      };
      function B(t, e, n) {
        for (var r, i = [].concat(t), o = 1 / (n + 1), a = L(e)[0], s = 1; s <= n; s++)
          (o *= s),
            (r = Math.floor(t.length * o)) === 0
              ? i.unshift([a[0] * o + t[r][0] * (1 - o), a[1] * o + t[r][1] * (1 - o)])
              : i.splice(r, 0, [a[0] * o + t[r][0] * (1 - o), a[1] * o + t[r][1] * (1 - o)]);
        return i;
      }
      function L(t) {
        const e = [];
        switch (t[0]) {
          case 'M':
          case 'L':
            e.push([t[1], t[2]]);
            break;
          case 'A':
            e.push([t[6], t[7]]);
            break;
          case 'Q':
            e.push([t[3], t[4]]), e.push([t[1], t[2]]);
            break;
          case 'T':
            e.push([t[1], t[2]]);
            break;
          case 'C':
            e.push([t[5], t[6]]), e.push([t[1], t[2]]), e.push([t[3], t[4]]);
            break;
          case 'S':
            e.push([t[3], t[4]]), e.push([t[1], t[2]]);
            break;
          case 'H':
          case 'V':
            e.push([t[1], t[1]]);
        }
        return e;
      }
      var D = function (t, e) {
        if (t.length <= 1) return t;
        for (var n, r = 0; r < e.length; r++)
          if (t[r][0] !== e[r][0])
            switch (((n = L(t[r])), e[r][0])) {
              case 'M':
                t[r] = ['M'].concat(n[0]);
                break;
              case 'L':
                t[r] = ['L'].concat(n[0]);
                break;
              case 'A':
                (t[r] = [].concat(e[r])), (t[r][6] = n[0][0]), (t[r][7] = n[0][1]);
                break;
              case 'Q':
                if (n.length < 2) {
                  if (!(r > 0)) {
                    t[r] = e[r];
                    break;
                  }
                  n = B(n, t[r - 1], 1);
                }
                t[r] = ['Q'].concat(
                  n.reduce((t, e) => {
                    return t.concat(e);
                  }, []),
                );
                break;
              case 'T':
                t[r] = ['T'].concat(n[0]);
                break;
              case 'C':
                if (n.length < 3) {
                  if (!(r > 0)) {
                    t[r] = e[r];
                    break;
                  }
                  n = B(n, t[r - 1], 2);
                }
                t[r] = ['C'].concat(
                  n.reduce((t, e) => {
                    return t.concat(e);
                  }, []),
                );
                break;
              case 'S':
                if (n.length < 2) {
                  if (!(r > 0)) {
                    t[r] = e[r];
                    break;
                  }
                  n = B(n, t[r - 1], 1);
                }
                t[r] = ['S'].concat(
                  n.reduce((t, e) => {
                    return t.concat(e);
                  }, []),
                );
                break;
              default:
                t[r] = e[r];
            }
        return t;
      };
    },
    function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'Base', () => {
          return c;
        }),
        n.d(e, 'Circle', () => {
          return h;
        }),
        n.d(e, 'Ellipse', () => {
          return d;
        }),
        n.d(e, 'Image', () => {
          return p;
        }),
        n.d(e, 'Line', () => {
          return m;
        }),
        n.d(e, 'Marker', () => {
          return O;
        }),
        n.d(e, 'Path', () => {
          return I;
        }),
        n.d(e, 'Polygon', () => {
          return L;
        }),
        n.d(e, 'Polyline', () => {
          return D;
        }),
        n.d(e, 'Rect', () => {
          return Y;
        }),
        n.d(e, 'Text', () => {
          return R;
        });
      const r = {};
      n.r(r),
        n.d(r, 'Base', () => {
          return c;
        }),
        n.d(r, 'Circle', () => {
          return h;
        }),
        n.d(r, 'Ellipse', () => {
          return d;
        }),
        n.d(r, 'Image', () => {
          return p;
        }),
        n.d(r, 'Line', () => {
          return m;
        }),
        n.d(r, 'Marker', () => {
          return O;
        }),
        n.d(r, 'Path', () => {
          return I;
        }),
        n.d(r, 'Polygon', () => {
          return L;
        }),
        n.d(r, 'Polyline', () => {
          return D;
        }),
        n.d(r, 'Rect', () => {
          return Y;
        }),
        n.d(r, 'Text', () => {
          return R;
        });
      const i = n(1);
      const o = n(5);
      const a = n(2);
      const s = n(10);
      const u = n(19);
      var c = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), {
              lineWidth: 1,
              lineAppendWidth: 0,
              strokeOpacity: 1,
              fillOpacity: 1,
            });
          }),
          (e.prototype.getShapeBase = function () {
            return r;
          }),
          (e.prototype.getGroupBase = function () {
            return u.a;
          }),
          (e.prototype.onCanvasChange = function (t) {
            Object(s.h)(this, t);
          }),
          (e.prototype.calculateBBox = function () {
            const t = this.get('type');
            const e = this.getHitLineWidth();
            const n = Object(o.getBBoxMethod)(t)(this);
            const r = e / 2;
            const i = n.x - r;
            const a = n.y - r;
            const s = n.x + n.width + r;
            const u = n.y + n.height + r;
            return {
              x: i,
              minX: i,
              y: a,
              minY: a,
              width: n.width + e,
              height: n.height + e,
              maxX: s,
              maxY: u,
            };
          }),
          (e.prototype.isFill = function () {
            return !!this.attrs.fill || this.isClipShape();
          }),
          (e.prototype.isStroke = function () {
            return !!this.attrs.stroke;
          }),
          (e.prototype._applyClip = function (t, e) {
            e &&
              (t.save(), Object(s.a)(t, e), e.createPath(t), t.restore(), t.clip(), e._afterDraw());
          }),
          (e.prototype.draw = function (t, e) {
            const n = this.cfg.clipShape;
            if (e) {
              if (!1 === this.cfg.refresh) return void this.set('hasChanged', !1);
              const r = this.getCanvasBBox();
              if (!Object(a.f)(e, r))
                return this.set('hasChanged', !1), void (this.cfg.isInView && this._afterDraw());
            }
            t.save(),
              Object(s.a)(t, this),
              this._applyClip(t, n),
              this.drawPath(t),
              t.restore(),
              this._afterDraw();
          }),
          (e.prototype.getCanvasViewBox = function () {
            const t = this.cfg.canvas;
            return t ? t.getViewRange() : null;
          }),
          (e.prototype.cacheCanvasBBox = function () {
            const t = this.getCanvasViewBox();
            if (t) {
              const e = this.getCanvasBBox();
              const n = Object(a.f)(e, t);
              this.set('isInView', n),
                n ? this.set('cacheCanvasBBox', e) : this.set('cacheCanvasBBox', null);
            }
          }),
          (e.prototype._afterDraw = function () {
            this.cacheCanvasBBox(), this.set('hasChanged', !1), this.set('refresh', null);
          }),
          (e.prototype.skipDraw = function () {
            this.set('cacheCanvasBBox', null),
              this.set('isInView', null),
              this.set('hasChanged', !1);
          }),
          (e.prototype.drawPath = function (t) {
            this.createPath(t), this.strokeAndFill(t), this.afterDrawPath(t);
          }),
          (e.prototype.fill = function (t) {
            t.fill();
          }),
          (e.prototype.stroke = function (t) {
            t.stroke();
          }),
          (e.prototype.strokeAndFill = function (t) {
            const e = this.attrs;
            const n = e.lineWidth;
            const r = e.opacity;
            const i = e.strokeOpacity;
            const o = e.fillOpacity;
            this.isFill() &&
              (Object(a.i)(o) || o === 1
                ? this.fill(t)
                : ((t.globalAlpha = o), this.fill(t), (t.globalAlpha = r))),
              this.isStroke() &&
                n > 0 &&
                (Object(a.i)(i) || i === 1 || (t.globalAlpha = i), this.stroke(t)),
              this.afterDrawPath(t);
          }),
          (e.prototype.createPath = function (t) {}),
          (e.prototype.afterDrawPath = function (t) {}),
          (e.prototype.isInShape = function (t, e) {
            const n = this.isStroke();
            const r = this.isFill();
            const i = this.getHitLineWidth();
            return this.isInStrokeOrPath(t, e, n, r, i);
          }),
          (e.prototype.isInStrokeOrPath = function (t, e, n, r, i) {
            return !1;
          }),
          (e.prototype.getHitLineWidth = function () {
            if (!this.isStroke()) return 0;
            const t = this.attrs;
            return t.lineWidth + t.lineAppendWidth;
          }),
          e
        );
      })(o.AbstractShape);
      var h = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { x: 0, y: 0, r: 0 });
          }),
          (e.prototype.isInStrokeOrPath = function (t, e, n, r, i) {
            const o = this.attr();
            const s = o.x;
            const u = o.y;
            const c = o.r;
            const h = i / 2;
            const l = Object(a.b)(s, u, t, e);
            return r && n ? l <= c + h : r ? l <= c : !!n && l >= c - h && l <= c + h;
          }),
          (e.prototype.createPath = function (t) {
            const e = this.attr();
            const n = e.x;
            const r = e.y;
            const i = e.r;
            t.beginPath(), t.arc(n, r, i, 0, 2 * Math.PI, !1), t.closePath();
          }),
          e
        );
      })(c);
      function l(t, e, n, r) {
        return t / (n * n) + e / (r * r);
      }
      var d = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { x: 0, y: 0, rx: 0, ry: 0 });
          }),
          (e.prototype.isInStrokeOrPath = function (t, e, n, r, i) {
            const o = this.attr();
            const a = i / 2;
            const s = o.x;
            const u = o.y;
            const c = o.rx;
            const h = o.ry;
            const d = (t - s) * (t - s);
            const f = (e - u) * (e - u);
            return r && n
              ? l(d, f, c + a, h + a) <= 1
              : r
              ? l(d, f, c, h) <= 1
              : !!n && l(d, f, c - a, h - a) >= 1 && l(d, f, c + a, h + a) <= 1;
          }),
          (e.prototype.createPath = function (t) {
            const e = this.attr();
            const n = e.x;
            const r = e.y;
            const i = e.rx;
            const o = e.ry;
            if ((t.beginPath(), t.ellipse)) t.ellipse(n, r, i, o, 0, 0, 2 * Math.PI, !1);
            else {
              const a = i > o ? i : o;
              const s = i > o ? 1 : i / o;
              const u = i > o ? o / i : 1;
              t.save(),
                t.translate(n, r),
                t.scale(s, u),
                t.arc(0, 0, a, 0, 2 * Math.PI),
                t.restore(),
                t.closePath();
            }
          }),
          e
        );
      })(c);
      function f(t) {
        return (
          t instanceof HTMLElement &&
          Object(a.k)(t.nodeName) &&
          t.nodeName.toUpperCase() === 'CANVAS'
        );
      }
      var p = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { x: 0, y: 0, width: 0, height: 0 });
          }),
          (e.prototype.initAttrs = function (t) {
            this._setImage(t.img);
          }),
          (e.prototype.isStroke = function () {
            return !1;
          }),
          (e.prototype.isOnlyHitBox = function () {
            return !0;
          }),
          (e.prototype._afterLoading = function () {
            if (!0 === this.get('toDraw')) {
              const t = this.get('canvas');
              t ? t.draw() : this.createPath(this.get('context'));
            }
          }),
          (e.prototype._setImage = function (t) {
            const e = this;
            const n = this.attrs;
            if (Object(a.k)(t)) {
              const r = new Image();
              (r.onload = function () {
                if (e.destroyed) return !1;
                e.attr('img', r), e.set('loading', !1), e._afterLoading();
                const t = e.get('callback');
                t && t.call(e);
              }),
                (r.crossOrigin = 'Anonymous'),
                (r.src = t),
                this.set('loading', !0);
            } else
              t instanceof Image
                ? (n.width || (n.width = t.width), n.height || (n.height = t.height))
                : f(t) &&
                  (n.width || (n.width = Number(t.getAttribute('width'))),
                  n.height || (n.height, Number(t.getAttribute('height'))));
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            t.prototype.onAttrChange.call(this, e, n, r), e === 'img' && this._setImage(n);
          }),
          (e.prototype.createPath = function (t) {
            if (this.get('loading')) return this.set('toDraw', !0), void this.set('context', t);
            const e = this.attr();
            const n = e.x;
            const r = e.y;
            const i = e.width;
            const o = e.height;
            const s = e.sx;
            const u = e.sy;
            const c = e.swidth;
            const h = e.sheight;
            const l = e.img;
            (l instanceof Image || f(l)) &&
              (Object(a.i)(s) || Object(a.i)(u) || Object(a.i)(c) || Object(a.i)(h)
                ? t.drawImage(l, n, r, i, o)
                : t.drawImage(l, s, u, c, h, n, r, i, o));
          }),
          e
        );
      })(c);
      const g = n(7);
      function y(t, e, n, r, i, o, a) {
        const s = Math.min(t, n);
        const u = Math.max(t, n);
        const c = Math.min(e, r);
        const h = Math.max(e, r);
        const l = i / 2;
        return (
          o >= s - l &&
          o <= u + l &&
          a >= c - l &&
          a <= h + l &&
          g.c.pointToLine(t, e, n, r, o, a) <= i / 2
        );
      }
      const v = n(11);
      var m = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0,
              startArrow: !1,
              endArrow: !1,
            });
          }),
          (e.prototype.initAttrs = function (t) {
            this.setArrow();
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            t.prototype.onAttrChange.call(this, e, n, r), this.setArrow();
          }),
          (e.prototype.setArrow = function () {
            const t = this.attr();
            const e = t.x1;
            const n = t.y1;
            const r = t.x2;
            const i = t.y2;
            const o = t.startArrow;
            const a = t.endArrow;
            o && v.b(this, t, r, i, e, n), a && v.a(this, t, e, n, r, i);
          }),
          (e.prototype.isInStrokeOrPath = function (t, e, n, r, i) {
            if (!n || !i) return !1;
            const o = this.attr();
            return y(o.x1, o.y1, o.x2, o.y2, i, t, e);
          }),
          (e.prototype.createPath = function (t) {
            const e = this.attr();
            const n = e.x1;
            const r = e.y1;
            const i = e.x2;
            const o = e.y2;
            const a = e.startArrow;
            const s = e.endArrow;
            let u = { dx: 0, dy: 0 };
            let c = { dx: 0, dy: 0 };
            a && a.d && (u = v.c(n, r, i, o, e.startArrow.d)),
              s && s.d && (c = v.c(n, r, i, o, e.endArrow.d)),
              t.beginPath(),
              t.moveTo(n + u.dx, r + u.dy),
              t.lineTo(i - c.dx, o - c.dy);
          }),
          (e.prototype.afterDrawPath = function (t) {
            const e = this.get('startArrowShape');
            const n = this.get('endArrowShape');
            e && e.draw(t), n && n.draw(t);
          }),
          (e.prototype.getTotalLength = function () {
            const t = this.attr();
            const e = t.x1;
            const n = t.y1;
            const r = t.x2;
            const i = t.y2;
            return g.c.length(e, n, r, i);
          }),
          (e.prototype.getPoint = function (t) {
            const e = this.attr();
            const n = e.x1;
            const r = e.y1;
            const i = e.x2;
            const o = e.y2;
            return g.c.pointAt(n, r, i, o, t);
          }),
          e
        );
      })(c);
      const b = n(0);
      const x = n(13);
      const w = {
        circle(t, e, n) {
          return [
            ['M', t - n, e],
            ['A', n, n, 0, 1, 0, t + n, e],
            ['A', n, n, 0, 1, 0, t - n, e],
          ];
        },
        square(t, e, n) {
          return [
            ['M', t - n, e - n],
            ['L', t + n, e - n],
            ['L', t + n, e + n],
            ['L', t - n, e + n],
            ['Z'],
          ];
        },
        diamond(t, e, n) {
          return [['M', t - n, e], ['L', t, e - n], ['L', t + n, e], ['L', t, e + n], ['Z']];
        },
        triangle(t, e, n) {
          const r = n * Math.sin((1 / 3) * Math.PI);
          return [['M', t - n, e + r], ['L', t, e - r], ['L', t + n, e + r], ['Z']];
        },
        'triangle-down': function (t, e, n) {
          const r = n * Math.sin((1 / 3) * Math.PI);
          return [['M', t - n, e - r], ['L', t + n, e - r], ['L', t, e + r], ['Z']];
        },
      };
      var O = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.initAttrs = function (t) {
            this._resetParamsCache();
          }),
          (e.prototype._resetParamsCache = function () {
            this.set('paramsCache', {});
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            t.prototype.onAttrChange.call(this, e, n, r),
              ['symbol', 'x', 'y', 'r', 'radius'].indexOf(e) !== -1 && this._resetParamsCache();
          }),
          (e.prototype.isOnlyHitBox = function () {
            return !0;
          }),
          (e.prototype._getR = function (t) {
            return Object(b.t)(t.r) ? t.radius : t.r;
          }),
          (e.prototype._getPath = function () {
            let t;
            let n;
            const r = this.attr();
            const i = r.x;
            const o = r.y;
            const s = r.symbol || 'circle';
            const u = this._getR(r);
            if (Object(a.h)(s)) (n = (t = s)(i, o, u)), (n = Object(x.c)(n));
            else {
              if (!(t = e.Symbols[s])) return console.warn(`${s} marker is not supported.`), null;
              n = t(i, o, u);
            }
            return n;
          }),
          (e.prototype.createPath = function (t) {
            const e = this._getPath();
            const n = this.get('paramsCache');
            Object(s.e)(this, t, { path: e }, n);
          }),
          (e.Symbols = w),
          e
        );
      })(c);
      function M(t, e, n) {
        const r = Object(o.getOffScreenContext)();
        return t.createPath(r), r.isPointInPath(e, n);
      }
      function S(t) {
        return Math.abs(t) < 1e-6 ? 0 : t < 0 ? -1 : 1;
      }
      function C(t, e, n) {
        return (
          (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]) &&
          Math.min(t[0], e[0]) <= n[0] &&
          n[0] <= Math.max(t[0], e[0]) &&
          Math.min(t[1], e[1]) <= n[1] &&
          n[1] <= Math.max(t[1], e[1])
        );
      }
      function j(t, e, n) {
        let r = !1;
        const i = t.length;
        if (i <= 2) return !1;
        for (let o = 0; o < i; o++) {
          const a = t[o];
          const s = t[(o + 1) % i];
          if (C(a, s, [e, n])) return !0;
          S(a[1] - n) > 0 != S(s[1] - n) > 0 &&
            S(e - ((n - a[1]) * (a[0] - s[0])) / (a[1] - s[1]) - a[0]) < 0 &&
            (r = !r);
        }
        return r;
      }
      const k = n(4);
      const A = n(26);
      function E(t, e, n, r, i, o, s, u) {
        const c = (Math.atan2(u - e, s - t) + 2 * Math.PI) % (2 * Math.PI);
        if (c < r || c > i) return !1;
        const h = { x: t + n * Math.cos(c), y: e + n * Math.sin(c) };
        return Object(a.b)(h.x, h.y, s, u) <= o / 2;
      }
      const P = k.a.transform;
      const N = Object(i.a)(
        {
          hasArc(t) {
            for (var e = !1, n = t.length, r = 0; r < n; r++) {
              const i = t[r][0];
              if (i === 'C' || i === 'A' || i === 'Q') {
                e = !0;
                break;
              }
            }
            return e;
          },
          extractPolygons(t) {
            for (var e = t.length, n = [], r = [], i = [], o = 0; o < e; o++) {
              const a = t[o];
              const s = a[0];
              s === 'M'
                ? (i.length && (r.push(i), (i = [])), i.push([a[1], a[2]]))
                : s === 'Z'
                ? i.length && (n.push(i), (i = []))
                : i.push([a[1], a[2]]);
            }
            return i.length > 0 && r.push(i), { polygons: n, polylines: r };
          },
          isPointInStroke(t, e, n, r, i) {
            for (var o = !1, s = e / 2, u = 0; u < t.length; u++) {
              const c = t[u];
              const h = c.currentPoint;
              const l = c.params;
              const d = c.prePoint;
              const f = c.box;
              if (!f || Object(a.e)(f.x - s, f.y - s, f.width + e, f.height + e, n, r)) {
                switch (c.command) {
                  case 'L':
                  case 'Z':
                    o = y(d[0], d[1], h[0], h[1], e, n, r);
                    break;
                  case 'Q':
                    o = g.e.pointDistance(d[0], d[1], l[1], l[2], l[3], l[4], n, r) <= e / 2;
                    break;
                  case 'C':
                    o =
                      g.b.pointDistance(d[0], d[1], l[1], l[2], l[3], l[4], l[5], l[6], n, r, i) <=
                      e / 2;
                    break;
                  case 'A':
                    var p = c.arcParams;
                    var v = p.cx;
                    var m = p.cy;
                    var b = p.rx;
                    var x = p.ry;
                    var w = p.startAngle;
                    var O = p.endAngle;
                    var M = p.xRotation;
                    var S = [n, r, 1];
                    var C = b > x ? b : x;
                    var j = P(null, [
                      ['t', -v, -m],
                      ['r', -M],
                      ['s', 1 / (b > x ? 1 : b / x), 1 / (b > x ? x / b : 1)],
                    ]);
                    A.transformMat3(S, S, j), (o = E(0, 0, C, w, O, e, S[0], S[1]));
                }
                if (o) break;
              }
            }
            return o;
          },
        },
        o.PathUtil,
      );
      function T(t, e, n) {
        for (var r = !1, i = 0; i < t.length; i++) {
          if ((r = j(t[i], e, n))) break;
        }
        return r;
      }
      var I = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { startArrow: !1, endArrow: !1 });
          }),
          (e.prototype.initAttrs = function (t) {
            this._setPathArr(t.path), this.setArrow();
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            t.prototype.onAttrChange.call(this, e, n, r),
              e === 'path' && this._setPathArr(n),
              this.setArrow();
          }),
          (e.prototype._setPathArr = function (t) {
            this.attrs.path = Object(x.c)(t);
            const e = N.hasArc(t);
            this.set('hasArc', e),
              this.set('paramsCache', {}),
              this.set('segments', null),
              this.set('curve', null),
              this.set('tCache', null),
              this.set('totalLength', null);
          }),
          (e.prototype.getSegments = function () {
            let t = this.get('segements');
            return t || ((t = Object(x.d)(this.attr('path'))), this.set('segments', t)), t;
          }),
          (e.prototype.setArrow = function () {
            const t = this.attr();
            const e = t.startArrow;
            const n = t.endArrow;
            if (e) {
              var r = this.getStartTangent();
              v.b(this, t, r[0][0], r[0][1], r[1][0], r[1][1]);
            }
            if (n) {
              r = this.getEndTangent();
              v.a(this, t, r[0][0], r[0][1], r[1][0], r[1][1]);
            }
          }),
          (e.prototype.isInStrokeOrPath = function (t, e, n, r, i) {
            const o = this.getSegments();
            const a = this.get('hasArc');
            let s = !1;
            if (n) {
              const u = this.getTotalLength();
              s = N.isPointInStroke(o, i, t, e, u);
            }
            if (!s && r)
              if (a) s = M(this, t, e);
              else {
                const c = this.attr('path');
                const h = N.extractPolygons(c);
                s = T(h.polygons, t, e) || T(h.polylines, t, e);
              }
            return s;
          }),
          (e.prototype.createPath = function (t) {
            const e = this.attr();
            const n = this.get('paramsCache');
            Object(s.e)(this, t, e, n);
          }),
          (e.prototype.afterDrawPath = function (t) {
            const e = this.get('startArrowShape');
            const n = this.get('endArrowShape');
            e && e.draw(t), n && n.draw(t);
          }),
          (e.prototype.getTotalLength = function () {
            const t = this.get('totalLength');
            return Object(b.t)(t)
              ? (this._calculateCurve(), this._setTcache(), this.get('totalLength'))
              : t;
          }),
          (e.prototype.getPoint = function (t) {
            let e;
            let n;
            let r = this.get('tCache');
            r || (this._calculateCurve(), this._setTcache(), (r = this.get('tCache')));
            const i = this.get('curve');
            if (!r || r.length === 0) return i ? { x: i[0][1], y: i[0][2] } : null;
            Object(b.f)(r, (r, i) => {
              t >= r[0] && t <= r[1] && ((e = (t - r[0]) / (r[1] - r[0])), (n = i));
            });
            const o = i[n];
            if (Object(b.t)(o) || Object(b.t)(n)) return null;
            const a = o.length;
            const s = i[n + 1];
            return g.b.pointAt(o[a - 2], o[a - 1], s[1], s[2], s[3], s[4], s[5], s[6], e);
          }),
          (e.prototype._calculateCurve = function () {
            const t = this.attr().path;
            this.set('curve', N.pathToCurve(t));
          }),
          (e.prototype._setTcache = function () {
            let t;
            let e;
            let n;
            let r;
            let i = 0;
            let o = 0;
            const a = [];
            const s = this.get('curve');
            s &&
              (Object(b.f)(s, (t, e) => {
                (n = s[e + 1]),
                  (r = t.length),
                  n &&
                    (i += g.b.length(t[r - 2], t[r - 1], n[1], n[2], n[3], n[4], n[5], n[6]) || 0);
              }),
              this.set('totalLength', i),
              i !== 0
                ? (Object(b.f)(s, (u, c) => {
                    (n = s[c + 1]),
                      (r = u.length),
                      n &&
                        (((t = [])[0] = o / i),
                        (e = g.b.length(u[r - 2], u[r - 1], n[1], n[2], n[3], n[4], n[5], n[6])),
                        (o += e || 0),
                        (t[1] = o / i),
                        a.push(t));
                  }),
                  this.set('tCache', a))
                : this.set('tCache', []));
          }),
          (e.prototype.getStartTangent = function () {
            let t;
            const e = this.getSegments();
            if (e.length > 1) {
              const n = e[0].currentPoint;
              const r = e[1].currentPoint;
              const i = e[1].startTangent;
              (t = []),
                i
                  ? (t.push([n[0] - i[0], n[1] - i[1]]), t.push([n[0], n[1]]))
                  : (t.push([r[0], r[1]]), t.push([n[0], n[1]]));
            }
            return t;
          }),
          (e.prototype.getEndTangent = function () {
            let t;
            const e = this.getSegments();
            const n = e.length;
            if (n > 1) {
              const r = e[n - 2].currentPoint;
              const i = e[n - 1].currentPoint;
              const o = e[n - 1].endTangent;
              (t = []),
                o
                  ? (t.push([i[0] - o[0], i[1] - o[1]]), t.push([i[0], i[1]]))
                  : (t.push([r[0], r[1]]), t.push([i[0], i[1]]));
            }
            return t;
          }),
          e
        );
      })(c);
      function B(t, e, n, r, i) {
        const o = t.length;
        if (o < 2) return !1;
        for (let a = 0; a < o - 1; a++) {
          if (y(t[a][0], t[a][1], t[a + 1][0], t[a + 1][1], e, n, r)) return !0;
        }
        if (i) {
          const s = t[0];
          const u = t[o - 1];
          if (y(s[0], s[1], u[0], u[1], e, n, r)) return !0;
        }
        return !1;
      }
      var L = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.isInStrokeOrPath = function (t, e, n, r, i) {
            const o = this.attr().points;
            let a = !1;
            return n && (a = B(o, i, t, e, !0)), !a && r && (a = j(o, t, e)), a;
          }),
          (e.prototype.createPath = function (t) {
            const e = this.attr().points;
            if (!(e.length < 2)) {
              t.beginPath();
              for (let n = 0; n < e.length; n++) {
                const r = e[n];
                n === 0 ? t.moveTo(r[0], r[1]) : t.lineTo(r[0], r[1]);
              }
              t.closePath();
            }
          }),
          e
        );
      })(c);
      var D = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { startArrow: !1, endArrow: !1 });
          }),
          (e.prototype.initAttrs = function (t) {
            this.setArrow();
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            t.prototype.onAttrChange.call(this, e, n, r),
              this.setArrow(),
              ['points'].indexOf(e) !== -1 && this._resetCache();
          }),
          (e.prototype._resetCache = function () {
            this.set('totalLength', null), this.set('tCache', null);
          }),
          (e.prototype.setArrow = function () {
            const t = this.attr();
            const e = this.attrs;
            const n = e.points;
            const r = e.startArrow;
            const i = e.endArrow;
            const o = n.length;
            const a = n[0][0];
            const s = n[0][1];
            const u = n[o - 1][0];
            const c = n[o - 1][1];
            r && v.b(this, t, n[1][0], n[1][1], a, s),
              i && v.a(this, t, n[o - 2][0], n[o - 2][1], u, c);
          }),
          (e.prototype.isFill = function () {
            return !1;
          }),
          (e.prototype.isInStrokeOrPath = function (t, e, n, r, i) {
            return !(!n || !i) && B(this.attr().points, i, t, e, !1);
          }),
          (e.prototype.isStroke = function () {
            return !0;
          }),
          (e.prototype.createPath = function (t) {
            const e = this.attr();
            const n = e.points;
            const r = e.startArrow;
            const i = e.endArrow;
            const o = n.length;
            if (!(n.length < 2)) {
              let a;
              let s = n[0][0];
              let u = n[0][1];
              let c = n[o - 1][0];
              let h = n[o - 1][1];
              if (r && r.d) (s += (a = v.c(s, u, n[1][0], n[1][1], r.d)).dx), (u += a.dy);
              if (i && i.d) (c -= (a = v.c(n[o - 2][0], n[o - 2][1], c, h, i.d)).dx), (h -= a.dy);
              t.beginPath(), t.moveTo(s, u);
              for (let l = 0; l < o - 1; l++) {
                const d = n[l];
                t.lineTo(d[0], d[1]);
              }
              t.lineTo(c, h);
            }
          }),
          (e.prototype.afterDrawPath = function (t) {
            const e = this.get('startArrowShape');
            const n = this.get('endArrowShape');
            e && e.draw(t), n && n.draw(t);
          }),
          (e.prototype.getTotalLength = function () {
            const t = this.attr().points;
            const e = this.get('totalLength');
            return Object(b.t)(e)
              ? (this.set('totalLength', g.d.length(t)), this.get('totalLength'))
              : e;
          }),
          (e.prototype.getPoint = function (t) {
            let e;
            let n;
            const r = this.attr().points;
            let i = this.get('tCache');
            return (
              i || (this._setTcache(), (i = this.get('tCache'))),
              Object(b.f)(i, (r, i) => {
                t >= r[0] && t <= r[1] && ((e = (t - r[0]) / (r[1] - r[0])), (n = i));
              }),
              g.c.pointAt(r[n][0], r[n][1], r[n + 1][0], r[n + 1][1], e)
            );
          }),
          (e.prototype._setTcache = function () {
            const t = this.attr().points;
            if (t && t.length !== 0) {
              const e = this.getTotalLength();
              if (!(e <= 0)) {
                let n;
                let r;
                let i = 0;
                const o = [];
                Object(b.f)(t, (a, s) => {
                  t[s + 1] &&
                    (((n = [])[0] = i / e),
                    (r = g.c.length(a[0], a[1], t[s + 1][0], t[s + 1][1])),
                    (i += r),
                    (n[1] = i / e),
                    o.push(n));
                }),
                  this.set('tCache', o);
              }
            }
          }),
          (e.prototype.getStartTangent = function () {
            const t = this.attr().points;
            const e = [];
            return e.push([t[1][0], t[1][1]]), e.push([t[0][0], t[0][1]]), e;
          }),
          (e.prototype.getEndTangent = function () {
            const t = this.attr().points;
            const e = t.length - 1;
            const n = [];
            return n.push([t[e - 1][0], t[e - 1][1]]), n.push([t[e][0], t[e][1]]), n;
          }),
          e
        );
      })(c);
      const _ = n(32);
      var Y = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { x: 0, y: 0, width: 0, height: 0, radius: 0 });
          }),
          (e.prototype.isInStrokeOrPath = function (t, e, n, r, i) {
            const o = this.attr();
            const s = o.x;
            const u = o.y;
            const c = o.width;
            const h = o.height;
            const l = o.radius;
            if (l) {
              let d = !1;
              return (
                n &&
                  (d = (function (t, e, n, r, i, o, a, s) {
                    return (
                      y(t + i, e, t + n - i, e, o, a, s) ||
                      y(t + n, e + i, t + n, e + r - i, o, a, s) ||
                      y(t + n - i, e + r, t + i, e + r, o, a, s) ||
                      y(t, e + r - i, t, e + i, o, a, s) ||
                      E(t + n - i, e + i, i, 1.5 * Math.PI, 2 * Math.PI, o, a, s) ||
                      E(t + n - i, e + r - i, i, 0, 0.5 * Math.PI, o, a, s) ||
                      E(t + i, e + r - i, i, 0.5 * Math.PI, Math.PI, o, a, s) ||
                      E(t + i, e + i, i, Math.PI, 1.5 * Math.PI, o, a, s)
                    );
                  })(s, u, c, h, l, i, t, e)),
                !d && r && (d = M(this, t, e)),
                d
              );
            }
            const f = i / 2;
            return r && n
              ? Object(a.e)(s - f, u - f, c + f, h + f, t, e)
              : r
              ? Object(a.e)(s, u, c, h, t, e)
              : n
              ? (function (t, e, n, r, i, o, s) {
                  const u = i / 2;
                  return (
                    Object(a.e)(t - u, e - u, n, i, o, s) ||
                    Object(a.e)(t + n - u, e - u, i, r, o, s) ||
                    Object(a.e)(t + u, e + r - u, n, i, o, s) ||
                    Object(a.e)(t - u, e + u, i, r, o, s)
                  );
                })(s, u, c, h, i, t, e)
              : void 0;
          }),
          (e.prototype.createPath = function (t) {
            const e = this.attr();
            const n = e.x;
            const r = e.y;
            const i = e.width;
            const o = e.height;
            const a = e.radius;
            if ((t.beginPath(), a === 0)) t.rect(n, r, i, o);
            else {
              const s = Object(_.a)(a);
              const u = s[0];
              const c = s[1];
              const h = s[2];
              const l = s[3];
              t.moveTo(n + u, r),
                t.lineTo(n + i - c, r),
                c !== 0 && t.arc(n + i - c, r + c, c, -Math.PI / 2, 0),
                t.lineTo(n + i, r + o - h),
                h !== 0 && t.arc(n + i - h, r + o - h, h, 0, Math.PI / 2),
                t.lineTo(n + l, r + o),
                l !== 0 && t.arc(n + l, r + o - l, l, Math.PI / 2, Math.PI),
                t.lineTo(n, r + u),
                u !== 0 && t.arc(n + u, r + u, u, Math.PI, 1.5 * Math.PI),
                t.closePath();
            }
          }),
          e
        );
      })(c);
      var R = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), {
              x: 0,
              y: 0,
              text: null,
              fontSize: 12,
              fontFamily: 'sans-serif',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontVariant: 'normal',
              textAlign: 'start',
              textBaseline: 'bottom',
            });
          }),
          (e.prototype.isOnlyHitBox = function () {
            return !0;
          }),
          (e.prototype.initAttrs = function (t) {
            this._assembleFont(), t.text && this._setText(t.text);
          }),
          (e.prototype._assembleFont = function () {
            const t = this.attrs;
            t.font = Object(o.assembleFont)(t);
          }),
          (e.prototype._setText = function (t) {
            let e = null;
            Object(a.k)(t) && t.indexOf('\n') !== -1 && (e = t.split('\n')), this.set('textArr', e);
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            t.prototype.onAttrChange.call(this, e, n, r),
              e.startsWith('font') && this._assembleFont(),
              e === 'text' && this._setText(n);
          }),
          (e.prototype._getSpaceingY = function () {
            const t = this.attrs;
            const e = t.lineHeight;
            const n = 1 * t.fontSize;
            return e ? e - n : 0.14 * n;
          }),
          (e.prototype._drawTextArr = function (t, e, n) {
            let r;
            const i = this.attrs;
            const s = i.textBaseline;
            const u = i.x;
            const c = i.y;
            const h = 1 * i.fontSize;
            const l = this._getSpaceingY();
            const d = Object(o.getTextHeight)(i.text, i.fontSize, i.lineHeight);
            Object(a.c)(e, (e, i) => {
              (r = c + i * (l + h) - d + h),
                s === 'middle' && (r += d - h - (d - h) / 2),
                s === 'top' && (r += d - h),
                Object(a.i)(e) || (n ? t.fillText(e, u, r) : t.strokeText(e, u, r));
            });
          }),
          (e.prototype._drawText = function (t, e) {
            const n = this.attr();
            const r = n.x;
            const i = n.y;
            const o = this.get('textArr');
            if (o) this._drawTextArr(t, o, e);
            else {
              const s = n.text;
              Object(a.i)(s) || (e ? t.fillText(s, r, i) : t.strokeText(s, r, i));
            }
          }),
          (e.prototype.strokeAndFill = function (t) {
            const e = this.attrs;
            const n = e.lineWidth;
            const r = e.opacity;
            const i = e.strokeOpacity;
            const o = e.fillOpacity;
            this.isStroke() &&
              n > 0 &&
              (Object(a.i)(i) || i === 1 || (t.globalAlpha = r), this.stroke(t)),
              this.isFill() &&
                (Object(a.i)(o) || o === 1
                  ? this.fill(t)
                  : ((t.globalAlpha = o), this.fill(t), (t.globalAlpha = r))),
              this.afterDrawPath(t);
          }),
          (e.prototype.fill = function (t) {
            this._drawText(t, !0);
          }),
          (e.prototype.stroke = function (t) {
            this._drawText(t, !1);
          }),
          e
        );
      })(c);
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'b', () => {
        return o;
      }),
        n.d(e, 'c', () => {
          return a;
        }),
        n.d(e, 'a', () => {
          return s;
        });
      const r = n(6);
      const i = n(27);
      function o(t, e, n) {
        let i = 1;
        return (
          Object(r.h)(t) && (i = t.split('\n').length),
          i > 1
            ? e * i +
              (function (t, e) {
                return e ? e - t : 0.14 * t;
              })(e, n) *
                (i - 1)
            : e
        );
      }
      function a(t, e) {
        const n = Object(i.a)();
        let o = 0;
        if (Object(r.e)(t) || t === '') return o;
        if ((n.save(), (n.font = e), Object(r.h)(t) && t.includes('\n'))) {
          const a = t.split('\n');
          Object(r.a)(a, (t) => {
            const e = n.measureText(t).width;
            o < e && (o = e);
          });
        } else o = n.measureText(t).width;
        return n.restore(), o;
      }
      function s(t) {
        const e = t.fontSize;
        const n = t.fontFamily;
        const r = t.fontWeight;
        return [t.fontStyle, t.fontVariant, r, `${e}px`, n].join(' ').trim();
      }
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', () => {
        return o;
      }),
        n.d(e, 'b', () => {
          return a;
        });
      const r = n(12);
      const i = n(9);
      function o(t, e) {
        e.forEach((e) => {
          e.draw(t);
        });
      }
      function a(t, e) {
        const n = t.get('canvas');
        if (n && n.get('autoDraw')) {
          const o = n.get('context');
          const a = t.getParent();
          const s = a ? a.getChildren() : [n];
          const u = t.get('el');
          if (e === 'remove')
            if (t.get('isClipShape')) {
              const c = u && u.parentNode;
              const h = c && c.parentNode;
              c && h && h.removeChild(c);
            } else u && u.parentNode && u.parentNode.removeChild(u);
          else if (e === 'show') u.setAttribute('visibility', 'visible');
          else if (e === 'hide') u.setAttribute('visibility', 'hidden');
          else if (e === 'zIndex') Object(i.c)(u, s.indexOf(t));
          else if (e === 'sort') {
            const l = t.get('children');
            l &&
              l.length &&
              Object(i.d)(t, (t, e) => {
                return l.indexOf(t) - l.indexOf(e) ? 1 : 0;
              });
          } else
            e === 'clear'
              ? u && (u.innerHTML = '')
              : e === 'matrix'
              ? Object(r.c)(t)
              : e === 'clip'
              ? Object(r.a)(t, o)
              : e === 'attr' || (e === 'add' && t.draw(o));
        }
      }
    },
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = n(5);
      const o = n(16);
      const a = n(10);
      const s = n(0);
      const u = n(2);
      const c = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.onCanvasChange = function (t) {
            Object(a.h)(this, t);
          }),
          (e.prototype.getShapeBase = function () {
            return o;
          }),
          (e.prototype.getGroupBase = function () {
            return e;
          }),
          (e.prototype._applyClip = function (t, e) {
            e &&
              (t.save(), Object(a.a)(t, e), e.createPath(t), t.restore(), t.clip(), e._afterDraw());
          }),
          (e.prototype.cacheCanvasBBox = function () {
            const t = this.cfg.children;
            const e = [];
            const n = [];
            Object(s.f)(t, (t) => {
              const r = t.cfg.cacheCanvasBBox;
              r && t.cfg.isInView && (e.push(r.minX, r.maxX), n.push(r.minY, r.maxY));
            });
            let r = null;
            if (e.length) {
              const i = Object(s.C)(e);
              const o = Object(s.B)(e);
              const a = Object(s.C)(n);
              const c = Object(s.B)(n);
              r = { minX: i, minY: a, x: i, y: a, maxX: o, maxY: c, width: o - i, height: c - a };
              const h = this.cfg.canvas;
              if (h) {
                const l = h.getViewRange();
                this.set('isInView', Object(u.f)(r, l));
              }
            } else this.set('isInView', !1);
            this.set('cacheCanvasBBox', r);
          }),
          (e.prototype.draw = function (t, e) {
            const n = this.cfg.children;
            const r = !e || this.cfg.refresh;
            n.length &&
              r &&
              (t.save(),
              Object(a.a)(t, this),
              this._applyClip(t, this.getClip()),
              Object(a.d)(t, n, e),
              t.restore(),
              this.cacheCanvasBBox()),
              (this.cfg.refresh = null),
              this.set('hasChanged', !1);
          }),
          (e.prototype.skipDraw = function () {
            this.set('cacheCanvasBBox', null), this.set('hasChanged', !1);
          }),
          e
        );
      })(i.AbstractGroup);
      e.a = c;
    },
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = n(5);
      const o = n(0);
      const a = n(21);
      const s = n(18);
      const u = n(12);
      const c = n(3);
      const h = n(9);
      const l = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.isEntityGroup = function () {
            return !0;
          }),
          (e.prototype.createDom = function () {
            const t = Object(h.b)('g');
            this.set('el', t);
            const e = this.getParent();
            if (e) {
              let n = e.get('el');
              n || ((n = e.createDom()), e.set('el', n)), n.appendChild(t);
            }
            return t;
          }),
          (e.prototype.afterAttrsChange = function (e) {
            t.prototype.afterAttrsChange.call(this, e);
            const n = this.get('canvas');
            if (n && n.get('autoDraw')) {
              const r = n.get('context');
              this.createPath(r, e);
            }
          }),
          (e.prototype.onCanvasChange = function (t) {
            Object(s.b)(this, t);
          }),
          (e.prototype.getShapeBase = function () {
            return a;
          }),
          (e.prototype.getGroupBase = function () {
            return e;
          }),
          (e.prototype.draw = function (t) {
            const e = this.getChildren();
            const n = this.get('el');
            this.get('destroyed')
              ? n && n.parentNode.removeChild(n)
              : (n || this.createDom(),
                Object(u.a)(this, t),
                this.createPath(t),
                e.length && Object(s.a)(t, e));
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this.attr();
            const r = this.get('el');
            Object(o.f)(e || n, (t, e) => {
              c.b[e] && r.setAttribute(c.b[e], t);
            }),
              Object(u.c)(this);
          }),
          e
        );
      })(i.AbstractGroup);
      e.a = l;
    },
    function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'Base', () => {
          return l;
        }),
        n.d(e, 'Circle', () => {
          return f;
        }),
        n.d(e, 'Dom', () => {
          return p;
        }),
        n.d(e, 'Ellipse', () => {
          return g;
        }),
        n.d(e, 'Image', () => {
          return y;
        }),
        n.d(e, 'Line', () => {
          return m;
        }),
        n.d(e, 'Marker', () => {
          return w;
        }),
        n.d(e, 'Path', () => {
          return O;
        }),
        n.d(e, 'Polygon', () => {
          return M;
        }),
        n.d(e, 'Polyline', () => {
          return S;
        }),
        n.d(e, 'Rect', () => {
          return C;
        }),
        n.d(e, 'Text', () => {
          return P;
        });
      const r = {};
      n.r(r),
        n.d(r, 'Base', () => {
          return l;
        }),
        n.d(r, 'Circle', () => {
          return f;
        }),
        n.d(r, 'Dom', () => {
          return p;
        }),
        n.d(r, 'Ellipse', () => {
          return g;
        }),
        n.d(r, 'Image', () => {
          return y;
        }),
        n.d(r, 'Line', () => {
          return m;
        }),
        n.d(r, 'Marker', () => {
          return w;
        }),
        n.d(r, 'Path', () => {
          return O;
        }),
        n.d(r, 'Polygon', () => {
          return M;
        }),
        n.d(r, 'Polyline', () => {
          return S;
        }),
        n.d(r, 'Rect', () => {
          return C;
        }),
        n.d(r, 'Text', () => {
          return P;
        });
      const i = n(1);
      const o = n(5);
      const a = n(12);
      const s = n(9);
      const u = n(18);
      const c = n(3);
      const h = n(20);
      var l = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'svg'), (e.canFill = !1), (e.canStroke = !1), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), {
              lineWidth: 1,
              lineAppendWidth: 0,
              strokeOpacity: 1,
              fillOpacity: 1,
            });
          }),
          (e.prototype.afterAttrsChange = function (e) {
            t.prototype.afterAttrsChange.call(this, e);
            const n = this.get('canvas');
            if (n && n.get('autoDraw')) {
              const r = n.get('context');
              this.draw(r, e);
            }
          }),
          (e.prototype.getShapeBase = function () {
            return r;
          }),
          (e.prototype.getGroupBase = function () {
            return h.a;
          }),
          (e.prototype.onCanvasChange = function (t) {
            Object(u.b)(this, t);
          }),
          (e.prototype.calculateBBox = function () {
            const t = this.get('el');
            let e = null;
            if (t) e = t.getBBox();
            else {
              const n = Object(o.getBBoxMethod)(this.get('type'));
              n && (e = n(this));
            }
            if (e) {
              const r = e.x;
              const i = e.y;
              const a = e.width;
              const s = e.height;
              const u = this.getHitLineWidth();
              const c = u / 2;
              const h = r - c;
              const l = i - c;
              return {
                x: h,
                y: l,
                minX: h,
                minY: l,
                maxX: r + a + c,
                maxY: i + s + c,
                width: a + u,
                height: s + u,
              };
            }
            return { x: 0, y: 0, minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 };
          }),
          (e.prototype.isFill = function () {
            const t = this.attr();
            const e = t.fill;
            const n = t.fillStyle;
            return (e || n || this.isClipShape()) && this.canFill;
          }),
          (e.prototype.isStroke = function () {
            const t = this.attr();
            const e = t.stroke;
            const n = t.strokeStyle;
            return (e || n) && this.canStroke;
          }),
          (e.prototype.draw = function (t, e) {
            const n = this.get('el');
            this.get('destroyed')
              ? n && n.parentNode.removeChild(n)
              : (n || Object(s.a)(this),
                Object(a.a)(this, t),
                this.createPath(t, e),
                this.shadow(t, e),
                this.strokeAndFill(t, e),
                this.transform(e));
          }),
          (e.prototype.createPath = function (t, e) {}),
          (e.prototype.strokeAndFill = function (t, e) {
            const n = e || this.attr();
            const r = n.fill;
            const i = n.fillStyle;
            const o = n.stroke;
            const a = n.strokeStyle;
            const s = n.fillOpacity;
            const u = n.strokeOpacity;
            const h = n.lineWidth;
            const l = this.get('el');
            this.canFill &&
              (e
                ? 'fill' in n
                  ? this._setColor(t, 'fill', r)
                  : 'fillStyle' in n && this._setColor(t, 'fill', i)
                : this._setColor(t, 'fill', r || i),
              s && l.setAttribute(c.b.fillOpacity, s)),
              this.canStroke &&
                h > 0 &&
                (e
                  ? 'stroke' in n
                    ? this._setColor(t, 'stroke', o)
                    : 'strokeStyle' in n && this._setColor(t, 'stroke', a)
                  : this._setColor(t, 'stroke', o || a),
                u && l.setAttribute(c.b.strokeOpacity, u),
                h && l.setAttribute(c.b.lineWidth, h));
          }),
          (e.prototype._setColor = function (t, e, n) {
            const r = this.get('el');
            if (n)
              if (((n = n.trim()), /^[r,R,L,l]{1}[\s]*\(/.test(n)))
                (i = t.find('gradient', n)) || (i = t.addGradient(n)),
                  r.setAttribute(c.b[e], `url(#${i})`);
              else if (/^[p,P]{1}[\s]*\(/.test(n)) {
                var i;
                (i = t.find('pattern', n)) || (i = t.addPattern(n)),
                  r.setAttribute(c.b[e], `url(#${i})`);
              } else r.setAttribute(c.b[e], n);
            else r.setAttribute(c.b[e], 'none');
          }),
          (e.prototype.shadow = function (t, e) {
            const n = this.attr();
            const r = e || n;
            const i = r.shadowOffsetX;
            const o = r.shadowOffsetY;
            const s = r.shadowBlur;
            const u = r.shadowColor;
            (i || o || s || u) && Object(a.b)(this, t);
          }),
          (e.prototype.transform = function (t) {
            const e = this.attr();
            (t || e).matrix && Object(a.c)(this);
          }),
          (e.prototype.isInShape = function (t, e) {
            return this.isPointInPath(t, e);
          }),
          (e.prototype.isPointInPath = function (t, e) {
            const n = this.get('el');
            const r = this.get('canvas').get('el').getBoundingClientRect();
            const i = t + r.left;
            const o = e + r.top;
            const a = document.elementFromPoint(i, o);
            return !(!a || !a.isEqualNode(n));
          }),
          (e.prototype.getHitLineWidth = function () {
            const t = this.attrs;
            const e = t.lineWidth;
            const n = t.lineAppendWidth;
            return this.isStroke() ? e + n : 0;
          }),
          e
        );
      })(o.AbstractShape);
      const d = n(0);
      var f = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'circle'), (e.canFill = !0), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { x: 0, y: 0, r: 0 });
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this.attr();
            const r = this.get('el');
            Object(d.f)(e || n, (t, e) => {
              e === 'x' || e === 'y'
                ? r.setAttribute(`c${e}`, t)
                : c.b[e] && r.setAttribute(c.b[e], t);
            });
          }),
          e
        );
      })(l);
      var p = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'dom'), (e.canFill = !1), (e.canStroke = !1), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.createPath = function (t, e) {
            const n = this.attr();
            const r = this.get('el');
            if (
              (Object(d.f)(e || n, (t, e) => {
                c.b[e] && r.setAttribute(c.b[e], t);
              }),
              typeof n.html === 'function')
            ) {
              const i = n.html.call(this, n);
              if (i instanceof Element || i instanceof HTMLDocument) {
                for (let o = r.childNodes, a = o.length - 1; a >= 0; a--) r.removeChild(o[a]);
                r.appendChild(i);
              } else r.innerHTML = i;
            } else r.innerHTML = n.html;
          }),
          e
        );
      })(l);
      var g = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'ellipse'), (e.canFill = !0), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { x: 0, y: 0, rx: 0, ry: 0 });
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this.attr();
            const r = this.get('el');
            Object(d.f)(e || n, (t, e) => {
              e === 'x' || e === 'y'
                ? r.setAttribute(`c${e}`, t)
                : c.b[e] && r.setAttribute(c.b[e], t);
            });
          }),
          e
        );
      })(l);
      var y = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'image'), (e.canFill = !1), (e.canStroke = !1), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { x: 0, y: 0, width: 0, height: 0 });
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this;
            const r = this.attr();
            const i = this.get('el');
            Object(d.f)(e || r, (t, e) => {
              e === 'img' ? n._setImage(r.img) : c.b[e] && i.setAttribute(c.b[e], t);
            });
          }),
          (e.prototype.setAttr = function (t, e) {
            (this.attrs[t] = e), t === 'img' && this._setImage(e);
          }),
          (e.prototype._setImage = function (t) {
            const e = this.attr();
            const n = this.get('el');
            if (Object(d.y)(t)) n.setAttribute('href', t);
            else if (t instanceof window.Image)
              e.width || (n.setAttribute('width', t.width), this.attr('width', t.width)),
                e.height || (n.setAttribute('height', t.height), this.attr('height', t.height)),
                n.setAttribute('href', t.src);
            else if (
              t instanceof HTMLElement &&
              Object(d.y)(t.nodeName) &&
              t.nodeName.toUpperCase() === 'CANVAS'
            )
              n.setAttribute('href', t.toDataURL());
            else if (t instanceof ImageData) {
              const r = document.createElement('canvas');
              r.setAttribute('width', `${t.width}`),
                r.setAttribute('height', `${t.height}`),
                r.getContext('2d').putImageData(t, 0, 0),
                e.width || (n.setAttribute('width', `${t.width}`), this.attr('width', t.width)),
                e.height ||
                  (n.setAttribute('height', `${t.height}`), this.attr('height', t.height)),
                n.setAttribute('href', r.toDataURL());
            }
          }),
          e
        );
      })(l);
      const v = n(7);
      var m = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'line'), (e.canFill = !1), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0,
              startArrow: !1,
              endArrow: !1,
            });
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this.attr();
            const r = this.get('el');
            Object(d.f)(e || n, (e, i) => {
              if (i === 'startArrow' || i === 'endArrow')
                if (e) {
                  const o = Object(d.w)(e) ? t.addArrow(n, c.b[i]) : t.getDefaultArrow(n, c.b[i]);
                  r.setAttribute(c.b[i], `url(#${o})`);
                } else r.removeAttribute(c.b[i]);
              else c.b[i] && r.setAttribute(c.b[i], e);
            });
          }),
          (e.prototype.getTotalLength = function () {
            const t = this.attr();
            const e = t.x1;
            const n = t.y1;
            const r = t.x2;
            const i = t.y2;
            return v.c.length(e, n, r, i);
          }),
          (e.prototype.getPoint = function (t) {
            const e = this.attr();
            const n = e.x1;
            const r = e.y1;
            const i = e.x2;
            const o = e.y2;
            return v.c.pointAt(n, r, i, o, t);
          }),
          e
        );
      })(l);
      const b = {
        circle(t, e, n) {
          return [
            ['M', t, e],
            ['m', -n, 0],
            ['a', n, n, 0, 1, 0, 2 * n, 0],
            ['a', n, n, 0, 1, 0, 2 * -n, 0],
          ];
        },
        square(t, e, n) {
          return [
            ['M', t - n, e - n],
            ['L', t + n, e - n],
            ['L', t + n, e + n],
            ['L', t - n, e + n],
            ['Z'],
          ];
        },
        diamond(t, e, n) {
          return [['M', t - n, e], ['L', t, e - n], ['L', t + n, e], ['L', t, e + n], ['Z']];
        },
        triangle(t, e, n) {
          const r = n * Math.sin((1 / 3) * Math.PI);
          return [['M', t - n, e + r], ['L', t, e - r], ['L', t + n, e + r], ['z']];
        },
        triangleDown(t, e, n) {
          const r = n * Math.sin((1 / 3) * Math.PI);
          return [['M', t - n, e - r], ['L', t + n, e - r], ['L', t, e + r], ['Z']];
        },
      };
      const x = {
        get(t) {
          return b[t];
        },
        register(t, e) {
          b[t] = e;
        },
        remove(t) {
          delete b[t];
        },
        getAll() {
          return b;
        },
      };
      var w = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'marker'), (e.canFill = !0), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.createPath = function (t) {
            this.get('el').setAttribute('d', this._assembleMarker());
          }),
          (e.prototype._assembleMarker = function () {
            const t = this._getPath();
            return Object(d.n)(t)
              ? t
                  .map((t) => {
                    return t.join(' ');
                  })
                  .join('')
              : t;
          }),
          (e.prototype._getPath = function () {
            let t;
            const e = this.attr();
            const n = e.x;
            const r = e.y;
            const i = e.r || e.radius;
            const o = e.symbol || 'circle';
            return (t = Object(d.s)(o) ? o : x.get(o))
              ? t(n, r, i)
              : (console.warn(`${t} symbol is not exist.`), null);
          }),
          (e.symbolsFactory = x),
          e
        );
      })(l);
      var O = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'path'), (e.canFill = !0), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { startArrow: !1, endArrow: !1 });
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this;
            const r = this.attr();
            const i = this.get('el');
            Object(d.f)(e || r, (e, o) => {
              if (o === 'path' && Object(d.n)(e)) i.setAttribute('d', n._formatPath(e));
              else if (o === 'startArrow' || o === 'endArrow')
                if (e) {
                  const a = Object(d.w)(e) ? t.addArrow(r, c.b[o]) : t.getDefaultArrow(r, c.b[o]);
                  i.setAttribute(c.b[o], `url(#${a})`);
                } else i.removeAttribute(c.b[o]);
              else c.b[o] && i.setAttribute(c.b[o], e);
            });
          }),
          (e.prototype._formatPath = function (t) {
            const e = t
              .map((t) => {
                return t.join(' ');
              })
              .join('');
            return ~e.indexOf('NaN') ? '' : e;
          }),
          (e.prototype.getTotalLength = function () {
            const t = this.get('el');
            return t ? t.getTotalLength() : null;
          }),
          (e.prototype.getPoint = function (t) {
            const e = this.get('el');
            const n = this.getTotalLength();
            if (n === 0) return null;
            const r = e ? e.getPointAtLength(t * n) : null;
            return r ? { x: r.x, y: r.y } : null;
          }),
          e
        );
      })(l);
      var M = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'polygon'), (e.canFill = !0), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.createPath = function (t, e) {
            const n = this.attr();
            const r = this.get('el');
            Object(d.f)(e || n, (t, e) => {
              e === 'points' && Object(d.n)(t) && t.length >= 2
                ? r.setAttribute(
                    'points',
                    t
                      .map((t) => {
                        return `${t[0]},${t[1]}`;
                      })
                      .join(' '),
                  )
                : c.b[e] && r.setAttribute(c.b[e], t);
            });
          }),
          e
        );
      })(l);
      var S = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'polyline'), (e.canFill = !0), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { startArrow: !1, endArrow: !1 });
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            t.prototype.onAttrChange.call(this, e, n, r),
              ['points'].indexOf(e) !== -1 && this._resetCache();
          }),
          (e.prototype._resetCache = function () {
            this.set('totalLength', null), this.set('tCache', null);
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this.attr();
            const r = this.get('el');
            Object(d.f)(e || n, (t, e) => {
              e === 'points' && Object(d.n)(t) && t.length >= 2
                ? r.setAttribute(
                    'points',
                    t
                      .map((t) => {
                        return `${t[0]},${t[1]}`;
                      })
                      .join(' '),
                  )
                : c.b[e] && r.setAttribute(c.b[e], t);
            });
          }),
          (e.prototype.getTotalLength = function () {
            const t = this.attr().points;
            const e = this.get('totalLength');
            return Object(d.t)(e)
              ? (this.set('totalLength', v.d.length(t)), this.get('totalLength'))
              : e;
          }),
          (e.prototype.getPoint = function (t) {
            let e;
            let n;
            const r = this.attr().points;
            let i = this.get('tCache');
            return (
              i || (this._setTcache(), (i = this.get('tCache'))),
              Object(d.f)(i, (r, i) => {
                t >= r[0] && t <= r[1] && ((e = (t - r[0]) / (r[1] - r[0])), (n = i));
              }),
              v.c.pointAt(r[n][0], r[n][1], r[n + 1][0], r[n + 1][1], e)
            );
          }),
          (e.prototype._setTcache = function () {
            const t = this.attr().points;
            if (t && t.length !== 0) {
              const e = this.getTotalLength();
              if (!(e <= 0)) {
                let n;
                let r;
                let i = 0;
                const o = [];
                Object(d.f)(t, (a, s) => {
                  t[s + 1] &&
                    (((n = [])[0] = i / e),
                    (r = v.c.length(a[0], a[1], t[s + 1][0], t[s + 1][1])),
                    (i += r),
                    (n[1] = i / e),
                    o.push(n));
                }),
                  this.set('tCache', o);
              }
            }
          }),
          (e.prototype.getStartTangent = function () {
            const t = this.attr().points;
            const e = [];
            return e.push([t[1][0], t[1][1]]), e.push([t[0][0], t[0][1]]), e;
          }),
          (e.prototype.getEndTangent = function () {
            const t = this.attr().points;
            const e = t.length - 1;
            const n = [];
            return n.push([t[e - 1][0], t[e - 1][1]]), n.push([t[e][0], t[e][1]]), n;
          }),
          e
        );
      })(l);
      var C = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'rect'), (e.canFill = !0), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), { x: 0, y: 0, width: 0, height: 0, radius: 0 });
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this;
            const r = this.attr();
            const i = this.get('el');
            let o = !1;
            const a = ['x', 'y', 'width', 'height', 'radius'];
            Object(d.f)(e || r, (t, e) => {
              a.indexOf(e) === -1 || o
                ? a.indexOf(e) === -1 && c.b[e] && i.setAttribute(c.b[e], t)
                : (i.setAttribute('d', n._assembleRect(r)), (o = !0));
            });
          }),
          (e.prototype._assembleRect = function (t) {
            const e = t.x;
            const n = t.y;
            const r = t.width;
            const i = t.height;
            const o = t.radius;
            if (!o) return `M ${e},${n} l ${r},0 l 0,${i} l${-r} 0 z`;
            const a = (function (t) {
              let e = 0;
              let n = 0;
              let r = 0;
              let i = 0;
              return (
                Object(d.n)(t)
                  ? t.length === 1
                    ? (e = n = r = i = t[0])
                    : t.length === 2
                    ? ((e = r = t[0]), (n = i = t[1]))
                    : t.length === 3
                    ? ((e = t[0]), (n = i = t[1]), (r = t[2]))
                    : ((e = t[0]), (n = t[1]), (r = t[2]), (i = t[3]))
                  : (e = n = r = i = t),
                { r1: e, r2: n, r3: r, r4: i }
              );
            })(o);
            return (
              Object(d.n)(o)
                ? o.length === 1
                  ? (a.r1 = a.r2 = a.r3 = a.r4 = o[0])
                  : o.length === 2
                  ? ((a.r1 = a.r3 = o[0]), (a.r2 = a.r4 = o[1]))
                  : o.length === 3
                  ? ((a.r1 = o[0]), (a.r2 = a.r4 = o[1]), (a.r3 = o[2]))
                  : ((a.r1 = o[0]), (a.r2 = o[1]), (a.r3 = o[2]), (a.r4 = o[3]))
                : (a.r1 = a.r2 = a.r3 = a.r4 = o),
              [
                [`M ${e + a.r1},${n}`],
                [`l ${r - a.r1 - a.r2},0`],
                [`a ${a.r2},${a.r2},0,0,1,${a.r2},${a.r2}`],
                [`l 0,${i - a.r2 - a.r3}`],
                [`a ${a.r3},${a.r3},0,0,1,${-a.r3},${a.r3}`],
                [`l ${a.r3 + a.r4 - r},0`],
                [`a ${a.r4},${a.r4},0,0,1,${-a.r4},${-a.r4}`],
                [`l 0,${a.r4 + a.r1 - i}`],
                [`a ${a.r1},${a.r1},0,0,1,${a.r1},${-a.r1}`],
                ['z'],
              ].join(' ')
            );
          }),
          e
        );
      })(l);
      const j = n(31);
      const k = {
        top: 'before-edge',
        middle: 'central',
        bottom: 'after-edge',
        alphabetic: 'baseline',
        hanging: 'hanging',
      };
      const A = {
        top: 'text-before-edge',
        middle: 'central',
        bottom: 'text-after-edge',
        alphabetic: 'alphabetic',
        hanging: 'hanging',
      };
      const E = { left: 'left', start: 'left', center: 'middle', right: 'end', end: 'end' };
      var P = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'text'), (e.canFill = !0), (e.canStroke = !0), e;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultAttrs = function () {
            const e = t.prototype.getDefaultAttrs.call(this);
            return Object(i.a)(Object(i.a)({}, e), {
              x: 0,
              y: 0,
              text: null,
              fontSize: 12,
              fontFamily: 'sans-serif',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontVariant: 'normal',
              textAlign: 'start',
              textBaseline: 'bottom',
            });
          }),
          (e.prototype.createPath = function (t, e) {
            const n = this;
            const r = this.attr();
            const i = this.get('el');
            this._setFont(),
              Object(d.f)(e || r, (t, e) => {
                e === 'text'
                  ? n._setText(`${t}`)
                  : e === 'matrix' && t
                  ? Object(a.c)(n)
                  : c.b[e] && i.setAttribute(c.b[e], t);
              }),
              i.setAttribute('paint-order', 'stroke'),
              i.setAttribute('style', 'stroke-linecap:butt; stroke-linejoin:miter;');
          }),
          (e.prototype._setFont = function () {
            const t = this.get('el');
            const e = this.attr();
            const n = e.textBaseline;
            const r = e.textAlign;
            const i = Object(j.a)();
            i && i.name === 'firefox'
              ? t.setAttribute('dominant-baseline', A[n] || 'alphabetic')
              : t.setAttribute('alignment-baseline', k[n] || 'baseline'),
              t.setAttribute('text-anchor', E[r] || 'left');
          }),
          (e.prototype._setText = function (t) {
            const e = this.get('el');
            const n = this.attr();
            const r = n.x;
            const i = n.textBaseline;
            const o = void 0 === i ? 'bottom' : i;
            if (t)
              if (~t.indexOf('\n')) {
                const a = t.split('\n');
                const s = a.length - 1;
                let u = '';
                Object(d.f)(a, (t, e) => {
                  e === 0
                    ? o === 'alphabetic'
                      ? (u += `<tspan x="${r}" dy="${-s}em">${t}</tspan>`)
                      : o === 'top'
                      ? (u += `<tspan x="${r}" dy="0.9em">${t}</tspan>`)
                      : o === 'middle'
                      ? (u += `<tspan x="${r}" dy="${-(s - 1) / 2}em">${t}</tspan>`)
                      : o === 'bottom'
                      ? (u += `<tspan x="${r}" dy="-${s + 0.3}em">${t}</tspan>`)
                      : o === 'hanging' &&
                        (u += `<tspan x="${r}" dy="${-(s - 1) - 0.3}em">${t}</tspan>`)
                    : (u += `<tspan x="${r}" dy="1em">${t}</tspan>`);
                }),
                  (e.innerHTML = u);
              } else e.innerHTML = t;
            else e.innerHTML = '';
          }),
          e
        );
      })(l);
    },
    function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'create', () => {
          return i;
        }),
        n.d(e, 'clone', () => {
          return o;
        }),
        n.d(e, 'fromValues', () => {
          return a;
        }),
        n.d(e, 'copy', () => {
          return s;
        }),
        n.d(e, 'set', () => {
          return u;
        }),
        n.d(e, 'add', () => {
          return c;
        }),
        n.d(e, 'subtract', () => {
          return h;
        }),
        n.d(e, 'multiply', () => {
          return l;
        }),
        n.d(e, 'divide', () => {
          return d;
        }),
        n.d(e, 'ceil', () => {
          return f;
        }),
        n.d(e, 'floor', () => {
          return p;
        }),
        n.d(e, 'min', () => {
          return g;
        }),
        n.d(e, 'max', () => {
          return y;
        }),
        n.d(e, 'round', () => {
          return v;
        }),
        n.d(e, 'scale', () => {
          return m;
        }),
        n.d(e, 'scaleAndAdd', () => {
          return b;
        }),
        n.d(e, 'distance', () => {
          return x;
        }),
        n.d(e, 'squaredDistance', () => {
          return w;
        }),
        n.d(e, 'length', () => {
          return O;
        }),
        n.d(e, 'squaredLength', () => {
          return M;
        }),
        n.d(e, 'negate', () => {
          return S;
        }),
        n.d(e, 'inverse', () => {
          return C;
        }),
        n.d(e, 'normalize', () => {
          return j;
        }),
        n.d(e, 'dot', () => {
          return k;
        }),
        n.d(e, 'cross', () => {
          return A;
        }),
        n.d(e, 'lerp', () => {
          return E;
        }),
        n.d(e, 'random', () => {
          return P;
        }),
        n.d(e, 'transformMat2', () => {
          return N;
        }),
        n.d(e, 'transformMat2d', () => {
          return T;
        }),
        n.d(e, 'transformMat3', () => {
          return I;
        }),
        n.d(e, 'transformMat4', () => {
          return B;
        }),
        n.d(e, 'rotate', () => {
          return L;
        }),
        n.d(e, 'angle', () => {
          return D;
        }),
        n.d(e, 'zero', () => {
          return _;
        }),
        n.d(e, 'str', () => {
          return Y;
        }),
        n.d(e, 'exactEquals', () => {
          return R;
        }),
        n.d(e, 'equals', () => {
          return F;
        }),
        n.d(e, 'len', () => {
          return z;
        }),
        n.d(e, 'sub', () => {
          return W;
        }),
        n.d(e, 'mul', () => {
          return G;
        }),
        n.d(e, 'div', () => {
          return q;
        }),
        n.d(e, 'dist', () => {
          return H;
        }),
        n.d(e, 'sqrDist', () => {
          return V;
        }),
        n.d(e, 'sqrLen', () => {
          return U;
        }),
        n.d(e, 'forEach', () => {
          return Z;
        });
      const r = n(8);
      function i() {
        const t = new r.a(2);
        return r.a != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
      }
      function o(t) {
        const e = new r.a(2);
        return (e[0] = t[0]), (e[1] = t[1]), e;
      }
      function a(t, e) {
        const n = new r.a(2);
        return (n[0] = t), (n[1] = e), n;
      }
      function s(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t;
      }
      function u(t, e, n) {
        return (t[0] = e), (t[1] = n), t;
      }
      function c(t, e, n) {
        return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
      }
      function h(t, e, n) {
        return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
      }
      function l(t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
      }
      function d(t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
      }
      function f(t, e) {
        return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
      }
      function p(t, e) {
        return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
      }
      function g(t, e, n) {
        return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
      }
      function y(t, e, n) {
        return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
      }
      function v(t, e) {
        return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
      }
      function m(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
      }
      function b(t, e, n, r) {
        return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), t;
      }
      function x(t, e) {
        const n = e[0] - t[0];
        const r = e[1] - t[1];
        return Math.hypot(n, r);
      }
      function w(t, e) {
        const n = e[0] - t[0];
        const r = e[1] - t[1];
        return n * n + r * r;
      }
      function O(t) {
        const e = t[0];
        const n = t[1];
        return Math.hypot(e, n);
      }
      function M(t) {
        const e = t[0];
        const n = t[1];
        return e * e + n * n;
      }
      function S(t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t;
      }
      function C(t, e) {
        return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
      }
      function j(t, e) {
        const n = e[0];
        const r = e[1];
        let i = n * n + r * r;
        return i > 0 && (i = 1 / Math.sqrt(i)), (t[0] = e[0] * i), (t[1] = e[1] * i), t;
      }
      function k(t, e) {
        return t[0] * e[0] + t[1] * e[1];
      }
      function A(t, e, n) {
        const r = e[0] * n[1] - e[1] * n[0];
        return (t[0] = t[1] = 0), (t[2] = r), t;
      }
      function E(t, e, n, r) {
        const i = e[0];
        const o = e[1];
        return (t[0] = i + r * (n[0] - i)), (t[1] = o + r * (n[1] - o)), t;
      }
      function P(t, e) {
        e = e || 1;
        const n = 2 * r.c() * Math.PI;
        return (t[0] = Math.cos(n) * e), (t[1] = Math.sin(n) * e), t;
      }
      function N(t, e, n) {
        const r = e[0];
        const i = e[1];
        return (t[0] = n[0] * r + n[2] * i), (t[1] = n[1] * r + n[3] * i), t;
      }
      function T(t, e, n) {
        const r = e[0];
        const i = e[1];
        return (t[0] = n[0] * r + n[2] * i + n[4]), (t[1] = n[1] * r + n[3] * i + n[5]), t;
      }
      function I(t, e, n) {
        const r = e[0];
        const i = e[1];
        return (t[0] = n[0] * r + n[3] * i + n[6]), (t[1] = n[1] * r + n[4] * i + n[7]), t;
      }
      function B(t, e, n) {
        const r = e[0];
        const i = e[1];
        return (t[0] = n[0] * r + n[4] * i + n[12]), (t[1] = n[1] * r + n[5] * i + n[13]), t;
      }
      function L(t, e, n, r) {
        const i = e[0] - n[0];
        const o = e[1] - n[1];
        const a = Math.sin(r);
        const s = Math.cos(r);
        return (t[0] = i * s - o * a + n[0]), (t[1] = i * a + o * s + n[1]), t;
      }
      function D(t, e) {
        const n = t[0];
        const r = t[1];
        const i = e[0];
        const o = e[1];
        const a = Math.sqrt(n * n + r * r) * Math.sqrt(i * i + o * o);
        const s = a && (n * i + r * o) / a;
        return Math.acos(Math.min(Math.max(s, -1), 1));
      }
      function _(t) {
        return (t[0] = 0), (t[1] = 0), t;
      }
      function Y(t) {
        return `vec2(${t[0]}, ${t[1]})`;
      }
      function R(t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }
      function F(t, e) {
        const n = t[0];
        const i = t[1];
        const o = e[0];
        const a = e[1];
        return (
          Math.abs(n - o) <= r.b * Math.max(1, Math.abs(n), Math.abs(o)) &&
          Math.abs(i - a) <= r.b * Math.max(1, Math.abs(i), Math.abs(a))
        );
      }
      let X;
      var z = O;
      var W = h;
      var G = l;
      var q = d;
      var H = x;
      var V = w;
      var U = M;
      var Z =
        ((X = i()),
        function (t, e, n, r, i, o) {
          let a;
          let s;
          for (
            e || (e = 2), n || (n = 0), s = r ? Math.min(r * e + n, t.length) : t.length, a = n;
            a < s;
            a += e
          )
            (X[0] = t[a]), (X[1] = t[a + 1]), i(X, X, o), (t[a] = X[0]), (t[a + 1] = X[1]);
          return t;
        });
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', () => {
        return s;
      });
      const r = n(2);
      function i(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      }
      function o(t, e) {
        return i(t) * i(e) ? (t[0] * e[0] + t[1] * e[1]) / (i(t) * i(e)) : 1;
      }
      function a(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(o(t, e));
      }
      function s(t, e) {
        let n = e[1];
        let i = e[2];
        const s = Object(r.m)(Object(r.o)(e[3]), 2 * Math.PI);
        const u = e[4];
        const c = e[5];
        const h = t[0];
        const l = t[1];
        const d = e[6];
        const f = e[7];
        const p = (Math.cos(s) * (h - d)) / 2 + (Math.sin(s) * (l - f)) / 2;
        const g = (-1 * Math.sin(s) * (h - d)) / 2 + (Math.cos(s) * (l - f)) / 2;
        const y = (p * p) / (n * n) + (g * g) / (i * i);
        y > 1 && ((n *= Math.sqrt(y)), (i *= Math.sqrt(y)));
        const v = n * n * (g * g) + i * i * (p * p);
        let m = v ? Math.sqrt((n * n * (i * i) - v) / v) : 1;
        u === c && (m *= -1), isNaN(m) && (m = 0);
        const b = i ? (m * n * g) / i : 0;
        const x = n ? (m * -i * p) / n : 0;
        const w = (h + d) / 2 + Math.cos(s) * b - Math.sin(s) * x;
        const O = (l + f) / 2 + Math.sin(s) * b + Math.cos(s) * x;
        const M = [(p - b) / n, (g - x) / i];
        const S = [(-1 * p - b) / n, (-1 * g - x) / i];
        const C = a([1, 0], M);
        let j = a(M, S);
        return (
          o(M, S) <= -1 && (j = Math.PI),
          o(M, S) >= 1 && (j = 0),
          c === 0 && j > 0 && (j -= 2 * Math.PI),
          c === 1 && j < 0 && (j += 2 * Math.PI),
          {
            cx: w,
            cy: O,
            rx: Object(r.j)(t, [d, f]) ? 0 : n,
            ry: Object(r.j)(t, [d, f]) ? 0 : i,
            startAngle: C,
            endAngle: C + j,
            xRotation: s,
            arcFlag: u,
            sweepFlag: c,
          }
        );
      }
    },
    function (t, e, n) {
      'use strict';
      const r = (function () {
        function t(t, e) {
          (this.bubbles = !0),
            (this.target = null),
            (this.currentTarget = null),
            (this.delegateTarget = null),
            (this.delegateObject = null),
            (this.defaultPrevented = !1),
            (this.propagationStopped = !1),
            (this.shape = null),
            (this.fromShape = null),
            (this.toShape = null),
            (this.propagationPath = []),
            (this.type = t),
            (this.name = t),
            (this.originalEvent = e),
            (this.timeStamp = e.timeStamp);
        }
        return (
          (t.prototype.preventDefault = function () {
            (this.defaultPrevented = !0),
              this.originalEvent.preventDefault && this.originalEvent.preventDefault();
          }),
          (t.prototype.stopPropagation = function () {
            this.propagationStopped = !0;
          }),
          (t.prototype.toString = function () {
            return `[Event (type=${this.type})]`;
          }),
          (t.prototype.save = function () {}),
          (t.prototype.restore = function () {}),
          t
        );
      })();
      e.a = r;
    },
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = n(28);
      const o = n(6);
      const a = (function (t) {
        function e(e) {
          const n = t.call(this) || this;
          n.destroyed = !1;
          const r = n.getDefaultCfg();
          return (n.cfg = Object(o.i)(r, e)), n;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.getDefaultCfg = function () {
            return {};
          }),
          (e.prototype.get = function (t) {
            return this.cfg[t];
          }),
          (e.prototype.set = function (t, e) {
            this.cfg[t] = e;
          }),
          (e.prototype.destroy = function () {
            (this.cfg = { destroyed: !0 }), this.off(), (this.destroyed = !0);
          }),
          e
        );
      })(i.a);
      e.a = a;
    },
    function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'create', () => {
          return i;
        }),
        n.d(e, 'clone', () => {
          return o;
        }),
        n.d(e, 'length', () => {
          return a;
        }),
        n.d(e, 'fromValues', () => {
          return s;
        }),
        n.d(e, 'copy', () => {
          return u;
        }),
        n.d(e, 'set', () => {
          return c;
        }),
        n.d(e, 'add', () => {
          return h;
        }),
        n.d(e, 'subtract', () => {
          return l;
        }),
        n.d(e, 'multiply', () => {
          return d;
        }),
        n.d(e, 'divide', () => {
          return f;
        }),
        n.d(e, 'ceil', () => {
          return p;
        }),
        n.d(e, 'floor', () => {
          return g;
        }),
        n.d(e, 'min', () => {
          return y;
        }),
        n.d(e, 'max', () => {
          return v;
        }),
        n.d(e, 'round', () => {
          return m;
        }),
        n.d(e, 'scale', () => {
          return b;
        }),
        n.d(e, 'scaleAndAdd', () => {
          return x;
        }),
        n.d(e, 'distance', () => {
          return w;
        }),
        n.d(e, 'squaredDistance', () => {
          return O;
        }),
        n.d(e, 'squaredLength', () => {
          return M;
        }),
        n.d(e, 'negate', () => {
          return S;
        }),
        n.d(e, 'inverse', () => {
          return C;
        }),
        n.d(e, 'normalize', () => {
          return j;
        }),
        n.d(e, 'dot', () => {
          return k;
        }),
        n.d(e, 'cross', () => {
          return A;
        }),
        n.d(e, 'lerp', () => {
          return E;
        }),
        n.d(e, 'hermite', () => {
          return P;
        }),
        n.d(e, 'bezier', () => {
          return N;
        }),
        n.d(e, 'random', () => {
          return T;
        }),
        n.d(e, 'transformMat4', () => {
          return I;
        }),
        n.d(e, 'transformMat3', () => {
          return B;
        }),
        n.d(e, 'transformQuat', () => {
          return L;
        }),
        n.d(e, 'rotateX', () => {
          return D;
        }),
        n.d(e, 'rotateY', () => {
          return _;
        }),
        n.d(e, 'rotateZ', () => {
          return Y;
        }),
        n.d(e, 'angle', () => {
          return R;
        }),
        n.d(e, 'zero', () => {
          return F;
        }),
        n.d(e, 'str', () => {
          return X;
        }),
        n.d(e, 'exactEquals', () => {
          return z;
        }),
        n.d(e, 'equals', () => {
          return W;
        }),
        n.d(e, 'sub', () => {
          return q;
        }),
        n.d(e, 'mul', () => {
          return H;
        }),
        n.d(e, 'div', () => {
          return V;
        }),
        n.d(e, 'dist', () => {
          return U;
        }),
        n.d(e, 'sqrDist', () => {
          return Z;
        }),
        n.d(e, 'len', () => {
          return K;
        }),
        n.d(e, 'sqrLen', () => {
          return Q;
        }),
        n.d(e, 'forEach', () => {
          return $;
        });
      const r = n(8);
      function i() {
        const t = new r.a(3);
        return r.a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
      }
      function o(t) {
        const e = new r.a(3);
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
      }
      function a(t) {
        const e = t[0];
        const n = t[1];
        const r = t[2];
        return Math.hypot(e, n, r);
      }
      function s(t, e, n) {
        const i = new r.a(3);
        return (i[0] = t), (i[1] = e), (i[2] = n), i;
      }
      function u(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function c(t, e, n, r) {
        return (t[0] = e), (t[1] = n), (t[2] = r), t;
      }
      function h(t, e, n) {
        return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t;
      }
      function l(t, e, n) {
        return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t;
      }
      function d(t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), (t[2] = e[2] * n[2]), t;
      }
      function f(t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), (t[2] = e[2] / n[2]), t;
      }
      function p(t, e) {
        return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), (t[2] = Math.ceil(e[2])), t;
      }
      function g(t, e) {
        return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), (t[2] = Math.floor(e[2])), t;
      }
      function y(t, e, n) {
        return (
          (t[0] = Math.min(e[0], n[0])),
          (t[1] = Math.min(e[1], n[1])),
          (t[2] = Math.min(e[2], n[2])),
          t
        );
      }
      function v(t, e, n) {
        return (
          (t[0] = Math.max(e[0], n[0])),
          (t[1] = Math.max(e[1], n[1])),
          (t[2] = Math.max(e[2], n[2])),
          t
        );
      }
      function m(t, e) {
        return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), (t[2] = Math.round(e[2])), t;
      }
      function b(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
      }
      function x(t, e, n, r) {
        return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), (t[2] = e[2] + n[2] * r), t;
      }
      function w(t, e) {
        const n = e[0] - t[0];
        const r = e[1] - t[1];
        const i = e[2] - t[2];
        return Math.hypot(n, r, i);
      }
      function O(t, e) {
        const n = e[0] - t[0];
        const r = e[1] - t[1];
        const i = e[2] - t[2];
        return n * n + r * r + i * i;
      }
      function M(t) {
        const e = t[0];
        const n = t[1];
        const r = t[2];
        return e * e + n * n + r * r;
      }
      function S(t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
      }
      function C(t, e) {
        return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
      }
      function j(t, e) {
        const n = e[0];
        const r = e[1];
        const i = e[2];
        let o = n * n + r * r + i * i;
        return (
          o > 0 && (o = 1 / Math.sqrt(o)),
          (t[0] = e[0] * o),
          (t[1] = e[1] * o),
          (t[2] = e[2] * o),
          t
        );
      }
      function k(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function A(t, e, n) {
        const r = e[0];
        const i = e[1];
        const o = e[2];
        const a = n[0];
        const s = n[1];
        const u = n[2];
        return (t[0] = i * u - o * s), (t[1] = o * a - r * u), (t[2] = r * s - i * a), t;
      }
      function E(t, e, n, r) {
        const i = e[0];
        const o = e[1];
        const a = e[2];
        return (
          (t[0] = i + r * (n[0] - i)), (t[1] = o + r * (n[1] - o)), (t[2] = a + r * (n[2] - a)), t
        );
      }
      function P(t, e, n, r, i, o) {
        const a = o * o;
        const s = a * (2 * o - 3) + 1;
        const u = a * (o - 2) + o;
        const c = a * (o - 1);
        const h = a * (3 - 2 * o);
        return (
          (t[0] = e[0] * s + n[0] * u + r[0] * c + i[0] * h),
          (t[1] = e[1] * s + n[1] * u + r[1] * c + i[1] * h),
          (t[2] = e[2] * s + n[2] * u + r[2] * c + i[2] * h),
          t
        );
      }
      function N(t, e, n, r, i, o) {
        const a = 1 - o;
        const s = a * a;
        const u = o * o;
        const c = s * a;
        const h = 3 * o * s;
        const l = 3 * u * a;
        const d = u * o;
        return (
          (t[0] = e[0] * c + n[0] * h + r[0] * l + i[0] * d),
          (t[1] = e[1] * c + n[1] * h + r[1] * l + i[1] * d),
          (t[2] = e[2] * c + n[2] * h + r[2] * l + i[2] * d),
          t
        );
      }
      function T(t, e) {
        e = e || 1;
        const n = 2 * r.c() * Math.PI;
        const i = 2 * r.c() - 1;
        const o = Math.sqrt(1 - i * i) * e;
        return (t[0] = Math.cos(n) * o), (t[1] = Math.sin(n) * o), (t[2] = i * e), t;
      }
      function I(t, e, n) {
        const r = e[0];
        const i = e[1];
        const o = e[2];
        let a = n[3] * r + n[7] * i + n[11] * o + n[15];
        return (
          (a = a || 1),
          (t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a),
          (t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a),
          (t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a),
          t
        );
      }
      function B(t, e, n) {
        const r = e[0];
        const i = e[1];
        const o = e[2];
        return (
          (t[0] = r * n[0] + i * n[3] + o * n[6]),
          (t[1] = r * n[1] + i * n[4] + o * n[7]),
          (t[2] = r * n[2] + i * n[5] + o * n[8]),
          t
        );
      }
      function L(t, e, n) {
        const r = n[0];
        const i = n[1];
        const o = n[2];
        const a = n[3];
        const s = e[0];
        const u = e[1];
        const c = e[2];
        let h = i * c - o * u;
        let l = o * s - r * c;
        let d = r * u - i * s;
        let f = i * d - o * l;
        let p = o * h - r * d;
        let g = r * l - i * h;
        const y = 2 * a;
        return (
          (h *= y),
          (l *= y),
          (d *= y),
          (f *= 2),
          (p *= 2),
          (g *= 2),
          (t[0] = s + h + f),
          (t[1] = u + l + p),
          (t[2] = c + d + g),
          t
        );
      }
      function D(t, e, n, r) {
        const i = [];
        const o = [];
        return (
          (i[0] = e[0] - n[0]),
          (i[1] = e[1] - n[1]),
          (i[2] = e[2] - n[2]),
          (o[0] = i[0]),
          (o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r)),
          (o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r)),
          (t[0] = o[0] + n[0]),
          (t[1] = o[1] + n[1]),
          (t[2] = o[2] + n[2]),
          t
        );
      }
      function _(t, e, n, r) {
        const i = [];
        const o = [];
        return (
          (i[0] = e[0] - n[0]),
          (i[1] = e[1] - n[1]),
          (i[2] = e[2] - n[2]),
          (o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r)),
          (o[1] = i[1]),
          (o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r)),
          (t[0] = o[0] + n[0]),
          (t[1] = o[1] + n[1]),
          (t[2] = o[2] + n[2]),
          t
        );
      }
      function Y(t, e, n, r) {
        const i = [];
        const o = [];
        return (
          (i[0] = e[0] - n[0]),
          (i[1] = e[1] - n[1]),
          (i[2] = e[2] - n[2]),
          (o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r)),
          (o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r)),
          (o[2] = i[2]),
          (t[0] = o[0] + n[0]),
          (t[1] = o[1] + n[1]),
          (t[2] = o[2] + n[2]),
          t
        );
      }
      function R(t, e) {
        const n = t[0];
        const r = t[1];
        const i = t[2];
        const o = e[0];
        const a = e[1];
        const s = e[2];
        const u = Math.sqrt(n * n + r * r + i * i) * Math.sqrt(o * o + a * a + s * s);
        const c = u && k(t, e) / u;
        return Math.acos(Math.min(Math.max(c, -1), 1));
      }
      function F(t) {
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
      }
      function X(t) {
        return `vec3(${t[0]}, ${t[1]}, ${t[2]})`;
      }
      function z(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
      }
      function W(t, e) {
        const n = t[0];
        const i = t[1];
        const o = t[2];
        const a = e[0];
        const s = e[1];
        const u = e[2];
        return (
          Math.abs(n - a) <= r.b * Math.max(1, Math.abs(n), Math.abs(a)) &&
          Math.abs(i - s) <= r.b * Math.max(1, Math.abs(i), Math.abs(s)) &&
          Math.abs(o - u) <= r.b * Math.max(1, Math.abs(o), Math.abs(u))
        );
      }
      let G;
      var q = l;
      var H = d;
      var V = f;
      var U = w;
      var Z = O;
      var K = a;
      var Q = M;
      var $ =
        ((G = i()),
        function (t, e, n, r, i, o) {
          let a;
          let s;
          for (
            e || (e = 3), n || (n = 0), s = r ? Math.min(r * e + n, t.length) : t.length, a = n;
            a < s;
            a += e
          )
            (G[0] = t[a]),
              (G[1] = t[a + 1]),
              (G[2] = t[a + 2]),
              i(G, G, o),
              (t[a] = G[0]),
              (t[a + 1] = G[1]),
              (t[a + 2] = G[2]);
          return t;
        });
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', () => {
        return i;
      });
      let r = null;
      function i() {
        if (!r) {
          const t = document.createElement('canvas');
          (t.width = 1), (t.height = 1), (r = t.getContext('2d'));
        }
        return r;
      }
    },
    function (t, e, n) {
      'use strict';
      const r = (function () {
        function t() {
          this._events = {};
        }
        return (
          (t.prototype.on = function (t, e, n) {
            return (
              this._events[t] || (this._events[t] = []),
              this._events[t].push({ callback: e, once: !!n }),
              this
            );
          }),
          (t.prototype.once = function (t, e) {
            return this.on(t, e, !0), this;
          }),
          (t.prototype.emit = function (t) {
            for (var e = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            const i = this._events[t] || [];
            const o = this._events['*'] || [];
            const a = function (r) {
              for (let i = r.length, o = 0; o < i; o++)
                if (r[o]) {
                  const a = r[o];
                  const s = a.callback;
                  a.once && (r.splice(o, 1), r.length === 0 && delete e._events[t], i--, o--),
                    s.apply(e, n);
                }
            };
            a(i), a(o);
          }),
          (t.prototype.off = function (t, e) {
            if (t)
              if (e) {
                for (var n = this._events[t] || [], r = n.length, i = 0; i < r; i++)
                  n[i].callback === e && (n.splice(i, 1), r--, i--);
                n.length === 0 && delete this._events[t];
              } else delete this._events[t];
            else this._events = {};
            return this;
          }),
          (t.prototype.getEvents = function () {
            return this._events;
          }),
          t
        );
      })();
      e.a = r;
    },
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = n(0);
      const o = n(30);
      const a = n(6);
      const s = {};
      const u = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.isCanvas = function () {
            return !1;
          }),
          (e.prototype.getBBox = function () {
            let t = 1 / 0;
            let e = -1 / 0;
            let n = 1 / 0;
            let r = -1 / 0;
            const o = [];
            const s = [];
            const u = this.getChildren().filter((t) => {
              return (
                t.get('visible') && (!t.isGroup() || (t.isGroup() && t.getChildren().length > 0))
              );
            });
            return (
              u.length > 0
                ? (Object(a.a)(u, (t) => {
                    const e = t.getBBox();
                    o.push(e.minX, e.maxX), s.push(e.minY, e.maxY);
                  }),
                  (t = Object(i.C)(o)),
                  (e = Object(i.B)(o)),
                  (n = Object(i.C)(s)),
                  (r = Object(i.B)(s)))
                : ((t = 0), (e = 0), (n = 0), (r = 0)),
              { x: t, y: n, minX: t, minY: n, maxX: e, maxY: r, width: e - t, height: r - n }
            );
          }),
          (e.prototype.getCanvasBBox = function () {
            let t = 1 / 0;
            let e = -1 / 0;
            let n = 1 / 0;
            let r = -1 / 0;
            const o = [];
            const s = [];
            const u = this.getChildren().filter((t) => {
              return (
                t.get('visible') && (!t.isGroup() || (t.isGroup() && t.getChildren().length > 0))
              );
            });
            return (
              u.length > 0
                ? (Object(a.a)(u, (t) => {
                    const e = t.getCanvasBBox();
                    o.push(e.minX, e.maxX), s.push(e.minY, e.maxY);
                  }),
                  (t = Object(i.C)(o)),
                  (e = Object(i.B)(o)),
                  (n = Object(i.C)(s)),
                  (r = Object(i.B)(s)))
                : ((t = 0), (e = 0), (n = 0), (r = 0)),
              { x: t, y: n, minX: t, minY: n, maxX: e, maxY: r, width: e - t, height: r - n }
            );
          }),
          (e.prototype.getDefaultCfg = function () {
            const e = t.prototype.getDefaultCfg.call(this);
            return (e.children = []), e;
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            if ((t.prototype.onAttrChange.call(this, e, n, r), e === 'matrix')) {
              const i = this.getTotalMatrix();
              this._applyChildrenMarix(i);
            }
          }),
          (e.prototype.applyMatrix = function (e) {
            const n = this.getTotalMatrix();
            t.prototype.applyMatrix.call(this, e);
            const r = this.getTotalMatrix();
            r !== n && this._applyChildrenMarix(r);
          }),
          (e.prototype._applyChildrenMarix = function (t) {
            const e = this.getChildren();
            Object(a.a)(e, (e) => {
              e.applyMatrix(t);
            });
          }),
          (e.prototype.addShape = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            const n = t[0];
            let r = t[1];
            Object(a.f)(n) ? (r = n) : (r.type = n);
            let i = s[r.type];
            i || ((i = Object(a.k)(r.type)), (s[r.type] = i));
            const o = this.getShapeBase();
            const u = new o[i](r);
            return this.add(u), u;
          }),
          (e.prototype.addGroup = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            let n;
            const r = t[0];
            const i = t[1];
            if (Object(a.d)(r)) n = new r(i || { parent: this });
            else {
              const o = r || {};
              const s = this.getGroupBase();
              n = new s(o);
            }
            return this.add(n), n;
          }),
          (e.prototype.getCanvas = function () {
            return this.isCanvas() ? this : this.get('canvas');
          }),
          (e.prototype.getShape = function (t, e, n) {
            if (!Object(a.b)(this)) return null;
            let r;
            const i = this.getChildren();
            if (this.isCanvas()) r = this._findShape(i, t, e, n);
            else {
              let o = [t, e, 1];
              (o = this.invertFromMatrix(o)),
                this.isClipped(o[0], o[1]) || (r = this._findShape(i, o[0], o[1], n));
            }
            return r;
          }),
          (e.prototype._findShape = function (t, e, n, r) {
            for (var i = null, o = t.length - 1; o >= 0; o--) {
              const s = t[o];
              if (
                (Object(a.b)(s) &&
                  (s.isGroup() ? (i = s.getShape(e, n, r)) : s.isHit(e, n) && (i = s)),
                i)
              )
                break;
            }
            return i;
          }),
          (e.prototype.add = function (t) {
            const e = this.getCanvas();
            const n = this.getChildren();
            const r = this.get('timeline');
            const i = t.getParent();
            i &&
              (function (t, e, n) {
                void 0 === n && (n = !0),
                  n ? e.destroy() : (e.set('parent', null), e.set('canvas', null)),
                  Object(a.j)(t.getChildren(), e);
              })(i, t, !1),
              t.set('parent', this),
              e &&
                (function t(e, n) {
                  if ((e.set('canvas', n), e.isGroup())) {
                    const r = e.get('children');
                    r.length &&
                      r.forEach((e) => {
                        t(e, n);
                      });
                  }
                })(t, e),
              r &&
                (function t(e, n) {
                  if ((e.set('timeline', n), e.isGroup())) {
                    const r = e.get('children');
                    r.length &&
                      r.forEach((e) => {
                        t(e, n);
                      });
                  }
                })(t, r),
              n.push(t),
              t.onCanvasChange('add'),
              this._applyElementMatrix(t);
          }),
          (e.prototype._applyElementMatrix = function (t) {
            const e = this.getTotalMatrix();
            e && t.applyMatrix(e);
          }),
          (e.prototype.getChildren = function () {
            return this.get('children');
          }),
          (e.prototype.sort = function () {
            let t;
            const e = this.getChildren();
            Object(a.a)(e, (t, e) => {
              return (t._INDEX = e), t;
            }),
              e.sort(
                ((t = function (t, e) {
                  return t.get('zIndex') - e.get('zIndex');
                }),
                function (e, n) {
                  const r = t(e, n);
                  return r === 0 ? e._INDEX - n._INDEX : r;
                }),
              ),
              this.onCanvasChange('sort');
          }),
          (e.prototype.clear = function () {
            if ((this.set('clearing', !0), !this.destroyed)) {
              for (let t = this.getChildren(), e = t.length - 1; e >= 0; e--) t[e].destroy();
              this.set('children', []), this.onCanvasChange('clear'), this.set('clearing', !1);
            }
          }),
          (e.prototype.destroy = function () {
            this.get('destroyed') || (this.clear(), t.prototype.destroy.call(this));
          }),
          (e.prototype.getFirst = function () {
            return this.getChildByIndex(0);
          }),
          (e.prototype.getLast = function () {
            const t = this.getChildren();
            return this.getChildByIndex(t.length - 1);
          }),
          (e.prototype.getChildByIndex = function (t) {
            return this.getChildren()[t];
          }),
          (e.prototype.getCount = function () {
            return this.getChildren().length;
          }),
          (e.prototype.contain = function (t) {
            return this.getChildren().indexOf(t) > -1;
          }),
          (e.prototype.removeChild = function (t, e) {
            void 0 === e && (e = !0), this.contain(t) && t.remove(e);
          }),
          (e.prototype.findAll = function (t) {
            let e = [];
            const n = this.getChildren();
            return (
              Object(a.a)(n, (n) => {
                t(n) && e.push(n), n.isGroup() && (e = e.concat(n.findAll(t)));
              }),
              e
            );
          }),
          (e.prototype.find = function (t) {
            let e = null;
            const n = this.getChildren();
            return (
              Object(a.a)(n, (n) => {
                if ((t(n) ? (e = n) : n.isGroup() && (e = n.find(t)), e)) return !1;
              }),
              e
            );
          }),
          (e.prototype.findById = function (t) {
            return this.find((e) => {
              return e.get('id') === t;
            });
          }),
          (e.prototype.findByClassName = function (t) {
            return this.find((e) => {
              return e.get('className') === t;
            });
          }),
          (e.prototype.findAllByName = function (t) {
            return this.findAll((e) => {
              return e.get('name') === t;
            });
          }),
          e
        );
      })(o.a);
      e.a = u;
    },
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = n(0);
      const o = n(4);
      const a = n(6);
      const s = n(14);
      const u = n(25);
      const c = o.a.transform;
      const h = ['zIndex', 'capture', 'visible', 'type'];
      const l = ['repeat'];
      function d(t, e) {
        const n = {};
        const r = e.attrs;
        for (const i in t) n[i] = r[i];
        return n;
      }
      function f(t, e) {
        const n = {};
        const r = e.attr();
        return (
          Object(i.f)(t, (t, e) => {
            l.indexOf(e) !== -1 || Object(i.r)(r[e], t) || (n[e] = t);
          }),
          n
        );
      }
      function p(t, e) {
        if (e.onFrame) return t;
        const n = e.startTime;
        const r = e.delay;
        const o = e.duration;
        const a = Object.prototype.hasOwnProperty;
        return (
          Object(i.f)(t, (t) => {
            n + r < t.startTime + t.delay + t.duration &&
              o > t.delay &&
              Object(i.f)(e.toAttrs, (e, n) => {
                a.call(t.toAttrs, n) && (delete t.toAttrs[n], delete t.fromAttrs[n]);
              });
          }),
          t
        );
      }
      const g = (function (t) {
        function e(e) {
          const n = t.call(this, e) || this;
          n.attrs = {};
          const r = n.getDefaultAttrs();
          return Object(i.D)(r, e.attrs), (n.attrs = r), n.initAttrs(r), n.initAnimate(), n;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.getDefaultCfg = function () {
            return { visible: !0, capture: !0, zIndex: 0 };
          }),
          (e.prototype.getDefaultAttrs = function () {
            return { matrix: this.getDefaultMatrix(), opacity: 1 };
          }),
          (e.prototype.onCanvasChange = function (t) {}),
          (e.prototype.initAttrs = function (t) {}),
          (e.prototype.initAnimate = function () {
            this.set('animable', !0), this.set('animating', !1);
          }),
          (e.prototype.isGroup = function () {
            return !1;
          }),
          (e.prototype.getParent = function () {
            return this.get('parent');
          }),
          (e.prototype.getCanvas = function () {
            return this.get('canvas');
          }),
          (e.prototype.attr = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            const r = e[0];
            const o = e[1];
            if (!r) return this.attrs;
            if (Object(i.w)(r)) {
              for (const a in r) this.setAttr(a, r[a]);
              return this.afterAttrsChange(r), this;
            }
            return e.length === 2
              ? (this.setAttr(r, o), this.afterAttrsChange((((t = {})[r] = o), t)), this)
              : this.attrs[r];
          }),
          (e.prototype.isClipped = function (t, e) {
            const n = this.getClip();
            return n && !n.isHit(t, e);
          }),
          (e.prototype.setAttr = function (t, e) {
            const n = this.attrs[t];
            n !== e && ((this.attrs[t] = e), this.onAttrChange(t, e, n));
          }),
          (e.prototype.onAttrChange = function (t, e, n) {
            t === 'matrix' && this.set('totalMatrix', null);
          }),
          (e.prototype.afterAttrsChange = function (t) {
            if (this.cfg.isClipShape) {
              const e = this.cfg.applyTo;
              e && e.onCanvasChange('clip');
            } else this.onCanvasChange('attr');
          }),
          (e.prototype.show = function () {
            return this.set('visible', !0), this.onCanvasChange('show'), this;
          }),
          (e.prototype.hide = function () {
            return this.set('visible', !1), this.onCanvasChange('hide'), this;
          }),
          (e.prototype.setZIndex = function (t) {
            this.set('zIndex', t);
            const e = this.getParent();
            return e && e.sort(), this;
          }),
          (e.prototype.toFront = function () {
            const t = this.getParent();
            if (t) {
              const e = t.getChildren();
              const n = (this.get('el'), e.indexOf(this));
              e.splice(n, 1), e.push(this), this.onCanvasChange('zIndex');
            }
          }),
          (e.prototype.toBack = function () {
            const t = this.getParent();
            if (t) {
              const e = t.getChildren();
              const n = (this.get('el'), e.indexOf(this));
              e.splice(n, 1), e.unshift(this), this.onCanvasChange('zIndex');
            }
          }),
          (e.prototype.remove = function (t) {
            void 0 === t && (t = !0);
            const e = this.getParent();
            e
              ? (Object(a.j)(e.getChildren(), this),
                e.get('clearing') || this.onCanvasChange('remove'))
              : this.onCanvasChange('remove'),
              t && this.destroy();
          }),
          (e.prototype.resetMatrix = function () {
            this.attr('matrix', this.getDefaultMatrix()), this.onCanvasChange('matrix');
          }),
          (e.prototype.getMatrix = function () {
            return this.attr('matrix');
          }),
          (e.prototype.setMatrix = function (t) {
            this.attr('matrix', t), this.onCanvasChange('matrix');
          }),
          (e.prototype.getTotalMatrix = function () {
            let t = this.cfg.totalMatrix;
            if (!t) {
              const e = this.attr('matrix');
              const n = this.cfg.parentMatrix;
              (t = n && e ? Object(s.b)(n, e) : e || n), this.set('totalMatrix', t);
            }
            return t;
          }),
          (e.prototype.applyMatrix = function (t) {
            const e = this.attr('matrix');
            let n = null;
            (n = t && e ? Object(s.b)(t, e) : e || t),
              this.set('totalMatrix', n),
              this.set('parentMatrix', t);
          }),
          (e.prototype.getDefaultMatrix = function () {
            return null;
          }),
          (e.prototype.applyToMatrix = function (t) {
            const e = this.attr('matrix');
            return e ? Object(s.c)(e, t) : t;
          }),
          (e.prototype.invertFromMatrix = function (t) {
            const e = this.attr('matrix');
            if (e) {
              const n = Object(s.a)(e);
              if (n) return Object(s.c)(n, t);
            }
            return t;
          }),
          (e.prototype.setClip = function (t) {
            const e = this.getCanvas();
            let n = null;
            if (t) {
              const r = this.getShapeBase()[Object(i.M)(t.type)];
              r &&
                (n = new r({
                  type: t.type,
                  isClipShape: !0,
                  applyTo: this,
                  attrs: t.attrs,
                  canvas: e,
                }));
            }
            return this.set('clipShape', n), this.onCanvasChange('clip'), n;
          }),
          (e.prototype.getClip = function () {
            const t = this.cfg.clipShape;
            return t || null;
          }),
          (e.prototype.clone = function () {
            const t = this;
            const e = this.attrs;
            const n = {};
            Object(i.f)(e, (t, r) => {
              Object(i.n)(e[r])
                ? (n[r] = (function (t) {
                    for (var e = [], n = 0; n < t.length; n++)
                      Object(i.n)(t[n]) ? e.push([].concat(t[n])) : e.push(t[n]);
                    return e;
                  })(e[r]))
                : (n[r] = e[r]);
            });
            const r = new (0, this.constructor)({ attrs: n });
            return (
              Object(i.f)(h, (e) => {
                r.set(e, t.get(e));
              }),
              r
            );
          }),
          (e.prototype.destroy = function () {
            this.destroyed || ((this.attrs = {}), t.prototype.destroy.call(this));
          }),
          (e.prototype.isAnimatePaused = function () {
            return this.get('_pause').isPaused;
          }),
          (e.prototype.animate = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (this.get('timeline') || this.get('canvas')) {
              this.set('animating', !0);
              let n = this.get('timeline');
              n || ((n = this.get('canvas').get('timeline')), this.set('timeline', n));
              let r = this.get('animations') || [];
              n.timer || n.initTimer();
              let o;
              let a;
              let s;
              let u;
              let c;
              let h = t[0];
              let l = t[1];
              const g = t[2];
              let y = void 0 === g ? 'easeLinear' : g;
              const v = t[3];
              let m = void 0 === v ? i.F : v;
              const b = t[4];
              let x = void 0 === b ? 0 : b;
              Object(i.s)(h)
                ? ((o = h), (h = {}))
                : Object(i.w)(h) && h.onFrame && ((o = h.onFrame), (a = h.repeat)),
                Object(i.w)(l)
                  ? ((l = (c = l).duration),
                    (y = c.easing || 'easeLinear'),
                    (x = c.delay || 0),
                    (a = c.repeat || a || !1),
                    (m = c.callback || i.F),
                    (s = c.pauseCallback || i.F),
                    (u = c.resumeCallback || i.F))
                  : (Object(i.u)(m) && ((x = m), (m = null)),
                    Object(i.s)(y) ? ((m = y), (y = 'easeLinear')) : (y = y || 'easeLinear'));
              const w = f(h, this);
              const O = {
                fromAttrs: d(w, this),
                toAttrs: w,
                duration: l,
                easing: y,
                repeat: a,
                callback: m,
                pauseCallback: s,
                resumeCallback: u,
                delay: x,
                startTime: n.getTime(),
                id: Object(i.L)(),
                onFrame: o,
                pathFormatted: !1,
              };
              r.length > 0 ? (r = p(r, O)) : n.addAnimator(this),
                r.push(O),
                this.set('animations', r),
                this.set('_pause', { isPaused: !1 });
            }
          }),
          (e.prototype.stopAnimate = function (t) {
            const e = this;
            void 0 === t && (t = !0);
            const n = this.get('animations');
            Object(i.f)(n, (n) => {
              t && (n.onFrame ? e.attr(n.onFrame(1)) : e.attr(n.toAttrs)),
                n.callback && n.callback();
            }),
              this.set('animating', !1),
              this.set('animations', []);
          }),
          (e.prototype.pauseAnimate = function () {
            const t = this.get('timeline');
            const e = this.get('animations');
            const n = t.getTime();
            return (
              Object(i.f)(e, (t) => {
                (t._paused = !0), (t._pauseTime = n), t.pauseCallback && t.pauseCallback();
              }),
              this.set('_pause', { isPaused: !0, pauseTime: n }),
              this
            );
          }),
          (e.prototype.resumeAnimate = function () {
            const t = this.get('timeline').getTime();
            const e = this.get('animations');
            const n = this.get('_pause').pauseTime;
            return (
              Object(i.f)(e, (e) => {
                (e.startTime += t - n),
                  (e._paused = !1),
                  (e._pauseTime = null),
                  e.resumeCallback && e.resumeCallback();
              }),
              this.set('_pause', { isPaused: !1 }),
              this.set('animations', e),
              this
            );
          }),
          (e.prototype.emitDelegation = function (t, e) {
            let n;
            const r = this;
            const o = e.propagationPath;
            this.getEvents();
            t === 'mouseenter' ? (n = e.fromShape) : t === 'mouseleave' && (n = e.toShape);
            for (
              var s = function (t) {
                  const s = o[t];
                  const c = s.get('name');
                  if (c) {
                    if ((s.isGroup() || (s.isCanvas && s.isCanvas())) && n && Object(a.g)(s, n))
                      return 'break';
                    Object(i.n)(c)
                      ? Object(i.f)(c, (t) => {
                          r.emitDelegateEvent(s, t, e);
                        })
                      : u.emitDelegateEvent(s, c, e);
                  }
                },
                u = this,
                c = 0;
              c < o.length;
              c++
            ) {
              if (s(c) === 'break') break;
            }
          }),
          (e.prototype.emitDelegateEvent = function (t, e, n) {
            const r = this.getEvents();
            const i = `${e}:${n.type}`;
            (r[i] || r['*']) &&
              ((n.name = i),
              (n.currentTarget = t),
              (n.delegateTarget = this),
              (n.delegateObject = t.get('delegateObject')),
              this.emit(i, n));
          }),
          (e.prototype.translate = function (t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0);
            const n = this.getMatrix();
            const r = c(n, [['t', t, e]]);
            return this.setMatrix(r), this;
          }),
          (e.prototype.move = function (t, e) {
            const n = this.attr('x') || 0;
            const r = this.attr('y') || 0;
            return this.translate(t - n, e - r), this;
          }),
          (e.prototype.moveTo = function (t, e) {
            return this.move(t, e);
          }),
          (e.prototype.scale = function (t, e) {
            const n = this.getMatrix();
            const r = c(n, [['s', t, e || t]]);
            return this.setMatrix(r), this;
          }),
          (e.prototype.rotate = function (t) {
            const e = this.getMatrix();
            const n = c(e, [['r', t]]);
            return this.setMatrix(n), this;
          }),
          (e.prototype.rotateAtStart = function (t) {
            const e = this.attr();
            const n = e.x;
            const r = e.y;
            const i = this.getMatrix();
            const o = c(i, [
              ['t', -n, -r],
              ['r', t],
              ['t', n, r],
            ]);
            return this.setMatrix(o), this;
          }),
          (e.prototype.rotateAtPoint = function (t, e, n) {
            const r = this.getMatrix();
            const i = c(r, [
              ['t', -t, -e],
              ['r', n],
              ['t', t, e],
            ]);
            return this.setMatrix(i), this;
          }),
          e
        );
      })(u.a);
      e.a = g;
    },
    function (t, e, n) {
      'use strict';
      (function (t) {
        n.d(e, 'a', () => {
          return d;
        });
        const r = function () {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
          const r = Array(t);
          let i = 0;
          for (e = 0; e < n; e++)
            for (let o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
          return r;
        };
        const i = function (t, e, n) {
          (this.name = t), (this.version = e), (this.os = n), (this.type = 'browser');
        };
        const o = function (e) {
          (this.version = e), (this.type = 'node'), (this.name = 'node'), (this.os = t.platform);
        };
        const a = function (t, e, n, r) {
          (this.name = t),
            (this.version = e),
            (this.os = n),
            (this.bot = r),
            (this.type = 'bot-device');
        };
        const s = function () {
          (this.type = 'bot'),
            (this.bot = !0),
            (this.name = 'bot'),
            (this.version = null),
            (this.os = null);
        };
        const u = function () {
          (this.type = 'react-native'),
            (this.name = 'react-native'),
            (this.version = null),
            (this.os = null);
        };
        const c = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
        const h = [
          ['aol', /AOLShield\/([0-9\._]+)/],
          ['edge', /Edge\/([0-9\._]+)/],
          ['edge-ios', /EdgiOS\/([0-9\._]+)/],
          ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
          ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
          ['samsung', /SamsungBrowser\/([0-9\.]+)/],
          ['silk', /\bSilk\/([0-9._-]+)\b/],
          ['miui', /MiuiBrowser\/([0-9\.]+)$/],
          ['beaker', /BeakerBrowser\/([0-9\.]+)/],
          ['edge-chromium', /EdgA?\/([0-9\.]+)/],
          ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
          ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
          ['fxios', /FxiOS\/([0-9\.]+)/],
          ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
          ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
          ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
          ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ['ie', /MSIE\s(7\.0)/],
          ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ['android', /Android\s([0-9\.]+)/],
          ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ['safari', /Version\/([0-9\._]+).*Safari/],
          ['facebook', /FBAV\/([0-9\.]+)/],
          ['instagram', /Instagram\s([0-9\.]+)/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          [
            'searchbot',
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ];
        const l = [
          ['iOS', /iP(hone|od|ad)/],
          ['Android OS', /Android/],
          ['BlackBerry OS', /BlackBerry|BB10/],
          ['Windows Mobile', /IEMobile/],
          ['Amazon OS', /Kindle/],
          ['Windows 3.11', /Win16/],
          ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
          ['Windows 98', /(Windows 98)|(Win98)/],
          ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
          ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
          ['Windows Server 2003', /(Windows NT 5.2)/],
          ['Windows Vista', /(Windows NT 6.0)/],
          ['Windows 7', /(Windows NT 6.1)/],
          ['Windows 8', /(Windows NT 6.2)/],
          ['Windows 8.1', /(Windows NT 6.3)/],
          ['Windows 10', /(Windows NT 10.0)/],
          ['Windows ME', /Windows ME/],
          ['Open BSD', /OpenBSD/],
          ['Sun OS', /SunOS/],
          ['Chrome OS', /CrOS/],
          ['Linux', /(Linux)|(X11)/],
          ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
          ['QNX', /QNX/],
          ['BeOS', /BeOS/],
          ['OS/2', /OS\/2/],
        ];
        function d(e) {
          return e
            ? p(e)
            : typeof document === 'undefined' &&
              typeof navigator !== 'undefined' &&
              navigator.product === 'ReactNative'
            ? new u()
            : typeof navigator !== 'undefined'
            ? p(navigator.userAgent)
            : void 0 !== t && t.version
            ? new o(t.version.slice(1))
            : null;
        }
        function f(t) {
          return (
            t !== '' &&
            h.reduce((e, n) => {
              const r = n[0];
              const i = n[1];
              if (e) return e;
              const o = i.exec(t);
              return !!o && [r, o];
            }, !1)
          );
        }
        function p(t) {
          const e = f(t);
          if (!e) return null;
          const n = e[0];
          const o = e[1];
          if (n === 'searchbot') return new s();
          let u = o[1] && o[1].split(/[._]/).slice(0, 3);
          u
            ? u.length < 3 &&
              (u = r(
                u,
                (function (t) {
                  for (var e = [], n = 0; n < t; n++) e.push('0');
                  return e;
                })(3 - u.length),
              ))
            : (u = []);
          const h = u.join('.');
          const d = (function (t) {
            for (let e = 0, n = l.length; e < n; e++) {
              const r = l[e];
              const i = r[0];
              if (r[1].exec(t)) return i;
            }
            return null;
          })(t);
          const p = c.exec(t);
          return p && p[1] ? new a(n, h, d, p[1]) : new i(n, h, d);
        }
      }.call(this, n(51)));
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'b', () => {
        return c;
      }),
        n.d(e, 'a', () => {
          return h;
        });
      const r = n(2);
      const i = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
      const o = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
      const a = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i;
      const s = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
      function u(t, e) {
        const n = t.match(s);
        Object(r.c)(n, (t) => {
          const n = t.split(':');
          e.addColorStop(n[0], n[1]);
        });
      }
      function c(t, e, n) {
        if (Object(r.k)(n)) {
          if (n[1] === '(' || n[2] === '(') {
            if (n[0] === 'l')
              return (function (t, e, n) {
                let r;
                let o;
                const a = i.exec(n);
                const s = (parseFloat(a[1]) % 360) * (Math.PI / 180);
                const c = a[2];
                const h = e.getBBox();
                s >= 0 && s < 0.5 * Math.PI
                  ? ((r = { x: h.minX, y: h.minY }), (o = { x: h.maxX, y: h.maxY }))
                  : 0.5 * Math.PI <= s && s < Math.PI
                  ? ((r = { x: h.maxX, y: h.minY }), (o = { x: h.minX, y: h.maxY }))
                  : Math.PI <= s && s < 1.5 * Math.PI
                  ? ((r = { x: h.maxX, y: h.maxY }), (o = { x: h.minX, y: h.minY }))
                  : ((r = { x: h.minX, y: h.maxY }), (o = { x: h.maxX, y: h.minY }));
                const l = Math.tan(s);
                const d = l * l;
                const f = (o.x - r.x + l * (o.y - r.y)) / (d + 1) + r.x;
                const p = (l * (o.x - r.x + l * (o.y - r.y))) / (d + 1) + r.y;
                const g = t.createLinearGradient(r.x, r.y, f, p);
                return u(c, g), g;
              })(t, e, n);
            if (n[0] === 'r')
              return (function (t, e, n) {
                const r = o.exec(n);
                const i = parseFloat(r[1]);
                const a = parseFloat(r[2]);
                const c = parseFloat(r[3]);
                const h = r[4];
                if (c === 0) {
                  const l = h.match(s);
                  return l[l.length - 1].split(':')[1];
                }
                const d = e.getBBox();
                const f = d.maxX - d.minX;
                const p = d.maxY - d.minY;
                const g = Math.sqrt(f * f + p * p) / 2;
                const y = t.createRadialGradient(
                  d.minX + f * i,
                  d.minY + p * a,
                  0,
                  d.minX + f / 2,
                  d.minY + p / 2,
                  c * g,
                );
                return u(h, y), y;
              })(t, e, n);
            if (n[0] === 'p')
              return (function (t, e, n) {
                if (e.get('patternSource') && e.get('patternSource') === n) return e.get('pattern');
                let r;
                let i;
                const o = a.exec(n);
                let s = o[1];
                const u = o[2];
                function c() {
                  (r = t.createPattern(i, s)), e.set('pattern', r), e.set('patternSource', n);
                }
                switch (s) {
                  case 'a':
                    s = 'repeat';
                    break;
                  case 'x':
                    s = 'repeat-x';
                    break;
                  case 'y':
                    s = 'repeat-y';
                    break;
                  case 'n':
                    s = 'no-repeat';
                    break;
                  default:
                    s = 'no-repeat';
                }
                return (
                  (i = new Image()),
                  u.match(/^data:/i) || (i.crossOrigin = 'Anonymous'),
                  (i.src = u),
                  i.complete ? c() : ((i.onload = c), (i.src = i.src)),
                  r
                );
              })(t, e, n);
          }
          return n;
        }
      }
      function h(t) {
        let e = 0;
        let n = 0;
        let i = 0;
        let o = 0;
        return (
          Object(r.g)(t)
            ? t.length === 1
              ? (e = n = i = o = t[0])
              : t.length === 2
              ? ((e = i = t[0]), (n = o = t[1]))
              : t.length === 3
              ? ((e = t[0]), (n = o = t[1]), (i = t[2]))
              : ((e = t[0]), (n = t[1]), (i = t[2]), (o = t[3]))
            : (e = n = i = o = t),
          [e, n, i, o]
        );
      }
    },
    function (t, e) {},
    function (t, e) {},
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.isGroup = function () {
            return !0;
          }),
          (e.prototype.isEntityGroup = function () {
            return !1;
          }),
          (e.prototype.clone = function () {
            for (
              var e = t.prototype.clone.call(this), n = this.getChildren(), r = 0;
              r < n.length;
              r++
            ) {
              const i = n[r];
              e.add(i.clone());
            }
            return e;
          }),
          e
        );
      })(n(29).a);
      e.a = i;
    },
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = n(30);
      const o = n(14);
      const a = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype._isInBBox = function (t, e) {
            const n = this.getBBox();
            return n.minX <= t && n.maxX >= t && n.minY <= e && n.maxY >= e;
          }),
          (e.prototype.afterAttrsChange = function (e) {
            t.prototype.afterAttrsChange.call(this, e), this.clearCacheBBox();
          }),
          (e.prototype.getBBox = function () {
            let t = this.cfg.bbox;
            return t || ((t = this.calculateBBox()), this.set('bbox', t)), t;
          }),
          (e.prototype.getCanvasBBox = function () {
            let t = this.cfg.canvasBBox;
            return t || ((t = this.calculateCanvasBBox()), this.set('canvasBBox', t)), t;
          }),
          (e.prototype.applyMatrix = function (e) {
            t.prototype.applyMatrix.call(this, e), this.set('canvasBBox', null);
          }),
          (e.prototype.calculateCanvasBBox = function () {
            const t = this.getBBox();
            const e = this.getTotalMatrix();
            let n = t.minX;
            let r = t.minY;
            let i = t.maxX;
            let a = t.maxY;
            if (e) {
              const s = Object(o.c)(e, [t.minX, t.minY]);
              const u = Object(o.c)(e, [t.maxX, t.minY]);
              const c = Object(o.c)(e, [t.minX, t.maxY]);
              const h = Object(o.c)(e, [t.maxX, t.maxY]);
              (n = Math.min(s[0], u[0], c[0], h[0])),
                (i = Math.max(s[0], u[0], c[0], h[0])),
                (r = Math.min(s[1], u[1], c[1], h[1])),
                (a = Math.max(s[1], u[1], c[1], h[1]));
            }
            const l = this.attrs;
            if (l.shadowColor) {
              const d = l.shadowBlur;
              const f = void 0 === d ? 0 : d;
              const p = l.shadowOffsetX;
              const g = void 0 === p ? 0 : p;
              const y = l.shadowOffsetY;
              const v = void 0 === y ? 0 : y;
              const m = n - f + g;
              const b = i + f + g;
              const x = r - f + v;
              const w = a + f + v;
              (n = Math.min(n, m)),
                (i = Math.max(i, b)),
                (r = Math.min(r, x)),
                (a = Math.max(a, w));
            }
            return { x: n, y: r, minX: n, minY: r, maxX: i, maxY: a, width: i - n, height: a - r };
          }),
          (e.prototype.clearCacheBBox = function () {
            this.set('bbox', null), this.set('canvasBBox', null);
          }),
          (e.prototype.isClipShape = function () {
            return this.get('isClipShape');
          }),
          (e.prototype.isInShape = function (t, e) {
            return !1;
          }),
          (e.prototype.isOnlyHitBox = function () {
            return !1;
          }),
          (e.prototype.isHit = function (t, e) {
            const n = this.get('startArrowShape');
            const r = this.get('endArrowShape');
            let i = [t, e, 1];
            const o = (i = this.invertFromMatrix(i))[0];
            const a = i[1];
            const s = this._isInBBox(o, a);
            if (this.isOnlyHitBox()) return s;
            if (s && !this.isClipped(o, a)) {
              if (this.isInShape(o, a)) return !0;
              if (n && n.isHit(o, a)) return !0;
              if (r && r.isHit(o, a)) return !0;
            }
            return !1;
          }),
          e
        );
      })(i.a);
      e.a = a;
    },
    function (t, e, n) {
      'use strict';
      const r = {};
      n.r(r),
        n.d(r, 'easeLinear', () => {
          return k;
        }),
        n.d(r, 'easeQuad', () => {
          return P;
        }),
        n.d(r, 'easeQuadIn', () => {
          return A;
        }),
        n.d(r, 'easeQuadOut', () => {
          return E;
        }),
        n.d(r, 'easeQuadInOut', () => {
          return P;
        }),
        n.d(r, 'easeCubic', () => {
          return I;
        }),
        n.d(r, 'easeCubicIn', () => {
          return N;
        }),
        n.d(r, 'easeCubicOut', () => {
          return T;
        }),
        n.d(r, 'easeCubicInOut', () => {
          return I;
        }),
        n.d(r, 'easePoly', () => {
          return D;
        }),
        n.d(r, 'easePolyIn', () => {
          return B;
        }),
        n.d(r, 'easePolyOut', () => {
          return L;
        }),
        n.d(r, 'easePolyInOut', () => {
          return D;
        }),
        n.d(r, 'easeSin', () => {
          return X;
        }),
        n.d(r, 'easeSinIn', () => {
          return R;
        }),
        n.d(r, 'easeSinOut', () => {
          return F;
        }),
        n.d(r, 'easeSinInOut', () => {
          return X;
        }),
        n.d(r, 'easeExp', () => {
          return q;
        }),
        n.d(r, 'easeExpIn', () => {
          return W;
        }),
        n.d(r, 'easeExpOut', () => {
          return G;
        }),
        n.d(r, 'easeExpInOut', () => {
          return q;
        }),
        n.d(r, 'easeCircle', () => {
          return U;
        }),
        n.d(r, 'easeCircleIn', () => {
          return H;
        }),
        n.d(r, 'easeCircleOut', () => {
          return V;
        }),
        n.d(r, 'easeCircleInOut', () => {
          return U;
        }),
        n.d(r, 'easeBounce', () => {
          return Q;
        }),
        n.d(r, 'easeBounceIn', () => {
          return K;
        }),
        n.d(r, 'easeBounceOut', () => {
          return Q;
        }),
        n.d(r, 'easeBounceInOut', () => {
          return $;
        }),
        n.d(r, 'easeBack', () => {
          return et;
        }),
        n.d(r, 'easeBackIn', () => {
          return J;
        }),
        n.d(r, 'easeBackOut', () => {
          return tt;
        }),
        n.d(r, 'easeBackInOut', () => {
          return et;
        }),
        n.d(r, 'easeElastic', () => {
          return it;
        }),
        n.d(r, 'easeElasticIn', () => {
          return rt;
        }),
        n.d(r, 'easeElasticOut', () => {
          return it;
        }),
        n.d(r, 'easeElasticInOut', () => {
          return ot;
        });
      const i = n(1);
      const o = n(31);
      const a = n(29);
      const s = n(6);
      const u = n(0);
      function c(t) {
        return (c =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      let h;
      let l;
      let d = 0;
      let f = 0;
      let p = 0;
      let g = 0;
      let y = 0;
      let v = 0;
      const m =
        (typeof performance === 'undefined' ? 'undefined' : c(performance)) === 'object' &&
        performance.now
          ? performance
          : Date;
      const b =
        (typeof window === 'undefined' ? 'undefined' : c(window)) === 'object' &&
        window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17);
            };
      function x() {
        return y || (b(w), (y = m.now() + v));
      }
      function w() {
        y = 0;
      }
      function O() {
        this._call = this._time = this._next = null;
      }
      function M(t, e, n) {
        const r = new O();
        return r.restart(t, e, n), r;
      }
      function S() {
        (y = (g = m.now()) + v), (d = f = 0);
        try {
          !(function () {
            x(), ++d;
            for (var t, e = h; e; ) (t = y - e._time) >= 0 && e._call.call(null, t), (e = e._next);
            --d;
          })();
        } finally {
          (d = 0),
            (function () {
              let t;
              let e;
              let n = h;
              let r = 1 / 0;
              for (; n; )
                n._call
                  ? (r > n._time && (r = n._time), (t = n), (n = n._next))
                  : ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (h = e)));
              (l = t), j(r);
            })(),
            (y = 0);
        }
      }
      function C() {
        const t = m.now();
        const e = t - g;
        e > 1e3 && ((v -= e), (g = t));
      }
      function j(t) {
        d ||
          (f && (f = clearTimeout(f)),
          t - y > 24
            ? (t < 1 / 0 && (f = setTimeout(S, t - m.now() - v)), p && (p = clearInterval(p)))
            : (p || ((g = m.now()), (p = setInterval(C, 1e3))), (d = 1), b(S)));
      }
      function k(t) {
        return +t;
      }
      function A(t) {
        return t * t;
      }
      function E(t) {
        return t * (2 - t);
      }
      function P(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }
      function N(t) {
        return t * t * t;
      }
      function T(t) {
        return --t * t * t + 1;
      }
      function I(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      O.prototype = M.prototype = {
        constructor: O,
        restart(t, e, n) {
          if (typeof t !== 'function') throw new TypeError('callback is not a function');
          (n = (n == null ? x() : +n) + (e == null ? 0 : +e)),
            this._next || l === this || (l ? (l._next = this) : (h = this), (l = this)),
            (this._call = t),
            (this._time = n),
            j();
        },
        stop() {
          this._call && ((this._call = null), (this._time = 1 / 0), j());
        },
      };
      var B = (function t(e) {
        function n(t) {
          return Math.pow(t, e);
        }
        return (e = +e), (n.exponent = t), n;
      })(3);
      var L = (function t(e) {
        function n(t) {
          return 1 - Math.pow(1 - t, e);
        }
        return (e = +e), (n.exponent = t), n;
      })(3);
      var D = (function t(e) {
        function n(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
        }
        return (e = +e), (n.exponent = t), n;
      })(3);
      const _ = Math.PI;
      const Y = _ / 2;
      function R(t) {
        return +t == 1 ? 1 : 1 - Math.cos(t * Y);
      }
      function F(t) {
        return Math.sin(t * Y);
      }
      function X(t) {
        return (1 - Math.cos(_ * t)) / 2;
      }
      function z(t) {
        return 1.0009775171065494 * (Math.pow(2, -10 * t) - 0.0009765625);
      }
      function W(t) {
        return z(1 - +t);
      }
      function G(t) {
        return 1 - z(t);
      }
      function q(t) {
        return ((t *= 2) <= 1 ? z(1 - t) : 2 - z(t - 1)) / 2;
      }
      function H(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function V(t) {
        return Math.sqrt(1 - --t * t);
      }
      function U(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
      }
      const Z = 7.5625;
      function K(t) {
        return 1 - Q(1 - t);
      }
      function Q(t) {
        return (t = +t) < 4 / 11
          ? Z * t * t
          : t < 8 / 11
          ? Z * (t -= 6 / 11) * t + 3 / 4
          : t < 10 / 11
          ? Z * (t -= 9 / 11) * t + 15 / 16
          : Z * (t -= 21 / 22) * t + 63 / 64;
      }
      function $(t) {
        return ((t *= 2) <= 1 ? 1 - Q(1 - t) : Q(t - 1) + 1) / 2;
      }
      var J = (function t(e) {
        function n(t) {
          return (t = +t) * t * (e * (t - 1) + t);
        }
        return (e = +e), (n.overshoot = t), n;
      })(1.70158);
      var tt = (function t(e) {
        function n(t) {
          return --t * t * ((t + 1) * e + t) + 1;
        }
        return (e = +e), (n.overshoot = t), n;
      })(1.70158);
      var et = (function t(e) {
        function n(t) {
          return (
            ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
          );
        }
        return (e = +e), (n.overshoot = t), n;
      })(1.70158);
      const nt = 2 * Math.PI;
      var rt = (function t(e, n) {
        const r = Math.asin(1 / (e = Math.max(1, e))) * (n /= nt);
        function i(t) {
          return e * z(-(--t)) * Math.sin((r - t) / n);
        }
        return (
          (i.amplitude = function (e) {
            return t(e, n * nt);
          }),
          (i.period = function (n) {
            return t(e, n);
          }),
          i
        );
      })(1, 0.3);
      var it = (function t(e, n) {
        const r = Math.asin(1 / (e = Math.max(1, e))) * (n /= nt);
        function i(t) {
          return 1 - e * z((t = +t)) * Math.sin((t + r) / n);
        }
        return (
          (i.amplitude = function (e) {
            return t(e, n * nt);
          }),
          (i.period = function (n) {
            return t(e, n);
          }),
          i
        );
      })(1, 0.3);
      var ot = (function t(e, n) {
        const r = Math.asin(1 / (e = Math.max(1, e))) * (n /= nt);
        function i(t) {
          return (
            ((t = 2 * t - 1) < 0
              ? e * z(-t) * Math.sin((r - t) / n)
              : 2 - e * z(t) * Math.sin((r + t) / n)) / 2
          );
        }
        return (
          (i.amplitude = function (e) {
            return t(e, n * nt);
          }),
          (i.period = function (n) {
            return t(e, n);
          }),
          i
        );
      })(1, 0.3);
      const at = function (t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      };
      function st(t, e) {
        const n = Object.create(t.prototype);
        for (const r in e) n[r] = e[r];
        return n;
      }
      function ut() {}
      const ct = '\\s*([+-]?\\d+)\\s*';
      const ht = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*';
      const lt = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*';
      const dt = /^#([0-9a-f]{3,8})$/;
      const ft = new RegExp(`^rgb\\(${[ct, ct, ct]}\\)$`);
      const pt = new RegExp(`^rgb\\(${[lt, lt, lt]}\\)$`);
      const gt = new RegExp(`^rgba\\(${[ct, ct, ct, ht]}\\)$`);
      const yt = new RegExp(`^rgba\\(${[lt, lt, lt, ht]}\\)$`);
      const vt = new RegExp(`^hsl\\(${[ht, lt, lt]}\\)$`);
      const mt = new RegExp(`^hsla\\(${[ht, lt, lt, ht]}\\)$`);
      const bt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
      function xt() {
        return this.rgb().formatHex();
      }
      function wt() {
        return this.rgb().formatRgb();
      }
      function Ot(t) {
        let e;
        let n;
        return (
          (t = `${t}`.trim().toLowerCase()),
          (e = dt.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              n === 6
                ? Mt(e)
                : n === 3
                ? new kt(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1,
                  )
                : n === 8
                ? St((e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, (255 & e) / 255)
                : n === 4
                ? St(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255,
                  )
                : null)
            : (e = ft.exec(t))
            ? new kt(e[1], e[2], e[3], 1)
            : (e = pt.exec(t))
            ? new kt((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
            : (e = gt.exec(t))
            ? St(e[1], e[2], e[3], e[4])
            : (e = yt.exec(t))
            ? St((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
            : (e = vt.exec(t))
            ? Nt(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = mt.exec(t))
            ? Nt(e[1], e[2] / 100, e[3] / 100, e[4])
            : bt.hasOwnProperty(t)
            ? Mt(bt[t])
            : t === 'transparent'
            ? new kt(NaN, NaN, NaN, 0)
            : null
        );
      }
      function Mt(t) {
        return new kt((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function St(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new kt(t, e, n, r);
      }
      function Ct(t) {
        return (
          t instanceof ut || (t = Ot(t)),
          t ? new kt((t = t.rgb()).r, t.g, t.b, t.opacity) : new kt()
        );
      }
      function jt(t, e, n, r) {
        return arguments.length === 1 ? Ct(t) : new kt(t, e, n, r == null ? 1 : r);
      }
      function kt(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function At() {
        return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}`;
      }
      function Et() {
        let t = this.opacity;
        return `${
          ((t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) === 1 ? 'rgb(' : 'rgba(') +
          Math.max(0, Math.min(255, Math.round(this.r) || 0))
        }, ${Math.max(0, Math.min(255, Math.round(this.g) || 0))}, ${Math.max(
          0,
          Math.min(255, Math.round(this.b) || 0),
        )}${t === 1 ? ')' : `, ${t})`}`;
      }
      function Pt(t) {
        return (
          ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? '0' : '') + t.toString(16)
        );
      }
      function Nt(t, e, n, r) {
        return (
          r <= 0 ? (t = e = n = NaN) : n <= 0 || n >= 1 ? (t = e = NaN) : e <= 0 && (t = NaN),
          new It(t, e, n, r)
        );
      }
      function Tt(t) {
        if (t instanceof It) return new It(t.h, t.s, t.l, t.opacity);
        if ((t instanceof ut || (t = Ot(t)), !t)) return new It();
        if (t instanceof It) return t;
        const e = (t = t.rgb()).r / 255;
        const n = t.g / 255;
        const r = t.b / 255;
        const i = Math.min(e, n, r);
        const o = Math.max(e, n, r);
        let a = NaN;
        let s = o - i;
        const u = (o + i) / 2;
        return (
          s
            ? ((a =
                e === o ? (n - r) / s + 6 * (n < r) : n === o ? (r - e) / s + 2 : (e - n) / s + 4),
              (s /= u < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (s = u > 0 && u < 1 ? 0 : a),
          new It(a, s, u, t.opacity)
        );
      }
      function It(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function Bt(t, e, n) {
        return (
          255 *
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
            ? n
            : t < 240
            ? e + ((n - e) * (240 - t)) / 60
            : e)
        );
      }
      function Lt(t, e, n, r, i) {
        const o = t * t;
        const a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      at(ut, Ot, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: xt,
        formatHex: xt,
        formatHsl() {
          return Tt(this).formatHsl();
        },
        formatRgb: wt,
        toString: wt,
      }),
        at(
          kt,
          jt,
          st(ut, {
            brighter(t) {
              return (
                (t = t == null ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new kt(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = t == null ? 0.7 : Math.pow(0.7, t)),
                new kt(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            displayable() {
              return (
                this.r >= -0.5 &&
                this.r < 255.5 &&
                this.g >= -0.5 &&
                this.g < 255.5 &&
                this.b >= -0.5 &&
                this.b < 255.5 &&
                this.opacity >= 0 &&
                this.opacity <= 1
              );
            },
            hex: At,
            formatHex: At,
            formatRgb: Et,
            toString: Et,
          }),
        ),
        at(
          It,
          function (t, e, n, r) {
            return arguments.length === 1 ? Tt(t) : new It(t, e, n, r == null ? 1 : r);
          },
          st(ut, {
            brighter(t) {
              return (
                (t = t == null ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new It(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = t == null ? 0.7 : Math.pow(0.7, t)),
                new It(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              const t = (this.h % 360) + 360 * (this.h < 0);
              const e = isNaN(t) || isNaN(this.s) ? 0 : this.s;
              const n = this.l;
              const r = n + (n < 0.5 ? n : 1 - n) * e;
              const i = 2 * n - r;
              return new kt(
                Bt(t >= 240 ? t - 240 : t + 120, i, r),
                Bt(t, i, r),
                Bt(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity,
              );
            },
            displayable() {
              return (
                ((this.s >= 0 && this.s <= 1) || isNaN(this.s)) &&
                this.l >= 0 &&
                this.l <= 1 &&
                this.opacity >= 0 &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              let t = this.opacity;
              return `${
                ((t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) === 1 ? 'hsl(' : 'hsla(') +
                (this.h || 0)
              }, ${100 * (this.s || 0)}%, ${100 * (this.l || 0)}%${t === 1 ? ')' : `, ${t})`}`;
            },
          }),
        );
      const Dt = function (t) {
        return function () {
          return t;
        };
      };
      function _t(t, e) {
        return function (n) {
          return t + n * e;
        };
      }
      function Yt(t) {
        return (t = +t) == 1
          ? Rt
          : function (e, n) {
              return n - e
                ? (function (t, e, n) {
                    return (
                      (t = Math.pow(t, n)),
                      (e = Math.pow(e, n) - t),
                      (n = 1 / n),
                      function (r) {
                        return Math.pow(t + r * e, n);
                      }
                    );
                  })(e, n, t)
                : Dt(isNaN(e) ? n : e);
            };
      }
      function Rt(t, e) {
        const n = e - t;
        return n ? _t(t, n) : Dt(isNaN(t) ? e : t);
      }
      const Ft = (function t(e) {
        const n = Yt(e);
        function r(t, e) {
          const r = n((t = jt(t)).r, (e = jt(e)).r);
          const i = n(t.g, e.g);
          const o = n(t.b, e.b);
          const a = Rt(t.opacity, e.opacity);
          return function (e) {
            return (t.r = r(e)), (t.g = i(e)), (t.b = o(e)), (t.opacity = a(e)), `${t}`;
          };
        }
        return (r.gamma = t), r;
      })(1);
      function Xt(t) {
        return function (e) {
          let n;
          let r;
          const i = e.length;
          let o = new Array(i);
          let a = new Array(i);
          let s = new Array(i);
          for (n = 0; n < i; ++n)
            (r = jt(e[n])), (o[n] = r.r || 0), (a[n] = r.g || 0), (s[n] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (s = t(s)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = s(t)), `${r}`;
            }
          );
        };
      }
      Xt((t) => {
        const e = t.length - 1;
        return function (n) {
          const r = n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e);
          const i = t[r];
          const o = t[r + 1];
          const a = r > 0 ? t[r - 1] : 2 * i - o;
          const s = r < e - 1 ? t[r + 2] : 2 * o - i;
          return Lt((n - r / e) * e, a, i, o, s);
        };
      }),
        Xt((t) => {
          const e = t.length;
          return function (n) {
            const r = Math.floor(((n %= 1) < 0 ? ++n : n) * e);
            const i = t[(r + e - 1) % e];
            const o = t[r % e];
            const a = t[(r + 1) % e];
            const s = t[(r + 2) % e];
            return Lt((n - r / e) * e, i, o, a, s);
          };
        });
      const zt = function (t, e) {
        e || (e = []);
        let n;
        const r = t ? Math.min(e.length, t.length) : 0;
        const i = e.slice();
        return function (o) {
          for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o;
          return i;
        };
      };
      function Wt(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      function Gt(t, e) {
        let n;
        const r = e ? e.length : 0;
        const i = t ? Math.min(r, t.length) : 0;
        const o = new Array(i);
        const a = new Array(r);
        for (n = 0; n < i; ++n) o[n] = Jt(t[n], e[n]);
        for (; n < r; ++n) a[n] = e[n];
        return function (t) {
          for (n = 0; n < i; ++n) a[n] = o[n](t);
          return a;
        };
      }
      const qt = function (t, e) {
        const n = new Date();
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return n.setTime(t * (1 - r) + e * r), n;
          }
        );
      };
      const Ht = function (t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      };
      function Vt(t) {
        return (Vt =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      const Ut = function (t, e) {
        let n;
        const r = {};
        const i = {};
        for (n in ((t !== null && Vt(t) === 'object') || (t = {}),
        (e !== null && Vt(e) === 'object') || (e = {}),
        e))
          n in t ? (r[n] = Jt(t[n], e[n])) : (i[n] = e[n]);
        return function (t) {
          for (n in r) i[n] = r[n](t);
          return i;
        };
      };
      const Zt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
      const Kt = new RegExp(Zt.source, 'g');
      const Qt = function (t, e) {
        let n;
        let r;
        let i;
        let o = (Zt.lastIndex = Kt.lastIndex = 0);
        let a = -1;
        const s = [];
        const u = [];
        for (t += '', e += ''; (n = Zt.exec(t)) && (r = Kt.exec(e)); )
          (i = r.index) > o && ((i = e.slice(o, i)), s[a] ? (s[a] += i) : (s[++a] = i)),
            (n = n[0]) === (r = r[0])
              ? s[a]
                ? (s[a] += r)
                : (s[++a] = r)
              : ((s[++a] = null), u.push({ i: a, x: Ht(n, r) })),
            (o = Kt.lastIndex);
        return (
          o < e.length && ((i = e.slice(o)), s[a] ? (s[a] += i) : (s[++a] = i)),
          s.length < 2
            ? u[0]
              ? (function (t) {
                  return function (e) {
                    return `${t(e)}`;
                  };
                })(u[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = u.length),
              function (t) {
                for (var n, r = 0; r < e; ++r) s[(n = u[r]).i] = n.x(t);
                return s.join('');
              })
        );
      };
      function $t(t) {
        return ($t =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var Jt = function (t, e) {
        let n;
        const r = $t(e);
        return e == null || r === 'boolean'
          ? Dt(e)
          : (r === 'number'
              ? Ht
              : r === 'string'
              ? (n = Ot(e))
                ? ((e = n), Ft)
                : Qt
              : e instanceof Ot
              ? Ft
              : e instanceof Date
              ? qt
              : Wt(e)
              ? zt
              : Array.isArray(e)
              ? Gt
              : (typeof e.valueOf !== 'function' && typeof e.toString !== 'function') || isNaN(e)
              ? Ut
              : Ht)(t, e);
      };
      const te = n(15);
      const ee = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      function ne(t, e, n) {
        let i;
        const o = e.startTime;
        if (n < o + e.delay || e._paused) return !1;
        const a = e.duration;
        const s = e.easing;
        if (((n = n - o - e.delay), e.repeat)) (i = (n % a) / a), (i = r[s](i));
        else {
          if (!((i = n / a) < 1)) return e.onFrame ? t.attr(e.onFrame(1)) : t.attr(e.toAttrs), !0;
          i = r[s](i);
        }
        if (e.onFrame) {
          const c = e.onFrame(i);
          t.attr(c);
        } else
          !(function (t, e, n) {
            const r = {};
            const i = e.fromAttrs;
            const o = e.toAttrs;
            if (!t.destroyed) {
              let a;
              let s;
              let c;
              let h;
              for (const l in o)
                if (!Object(u.r)(i[l], o[l]))
                  if (l === 'path') {
                    let d = o[l];
                    let f = i[l];
                    d.length > f.length
                      ? ((d = te.parsePathString(o[l])),
                        (f = te.parsePathString(i[l])),
                        (f = te.fillPathByDiff(f, d)),
                        (f = te.formatPath(f, d)),
                        (e.fromAttrs.path = f),
                        (e.toAttrs.path = d))
                      : e.pathFormatted ||
                        ((d = te.parsePathString(o[l])),
                        (f = te.parsePathString(i[l])),
                        (f = te.formatPath(f, d)),
                        (e.fromAttrs.path = f),
                        (e.toAttrs.path = d),
                        (e.pathFormatted = !0)),
                      (r[l] = []);
                    for (let p = 0; p < d.length; p++) {
                      for (var g = d[p], y = f[p], v = [], m = 0; m < g.length; m++)
                        Object(u.u)(g[m]) && y && Object(u.u)(y[m])
                          ? ((a = Jt(y[m], g[m])), v.push(a(n)))
                          : v.push(g[m]);
                      r[l].push(v);
                    }
                  } else if (l === 'matrix') {
                    const b = ((c = i[l] || ee), (Wt((h = o[l] || ee)) ? zt : Gt)(c, h))(n);
                    r[l] = b;
                  } else
                    ['fill', 'stroke', 'fillStyle', 'strokeStyle'].includes(l) &&
                    ((s = o[l]), /^[r,R,L,l]{1}[\s]*\(/.test(s))
                      ? (r[l] = o[l])
                      : Object(u.s)(o[l]) || ((a = Jt(i[l], o[l])), (r[l] = a(n)));
              t.attr(r);
            }
          })(t, e, i);
        return !1;
      }
      const re = (function () {
        function t(t) {
          (this.animators = []), (this.current = 0), (this.timer = null), (this.canvas = t);
        }
        return (
          (t.prototype.initTimer = function () {
            let t;
            let e;
            let n;
            const r = this;
            this.timer = M((i) => {
              if (((r.current = i), r.animators.length > 0)) {
                for (let o = r.animators.length - 1; o >= 0; o--)
                  if ((t = r.animators[o]).destroyed) r.removeAnimator(o);
                  else {
                    if (!t.isAnimatePaused())
                      for (let a = (e = t.get('animations')).length - 1; a >= 0; a--)
                        (n = e[a]), ne(t, n, i) && (e.splice(a, 1), !1, n.callback && n.callback());
                    e.length === 0 && r.removeAnimator(o);
                  }
                r.canvas.get('autoDraw') || r.canvas.draw();
              }
            });
          }),
          (t.prototype.addAnimator = function (t) {
            this.animators.push(t);
          }),
          (t.prototype.removeAnimator = function (t) {
            this.animators.splice(t, 1);
          }),
          (t.prototype.isAnimating = function () {
            return !!this.animators.length;
          }),
          (t.prototype.stop = function () {
            this.timer && this.timer.stop();
          }),
          (t.prototype.stopAllAnimations = function (t) {
            void 0 === t && (t = !0),
              this.animators.forEach((e) => {
                e.stopAnimate(t);
              }),
              (this.animators = []),
              this.canvas.draw();
          }),
          (t.prototype.getTime = function () {
            return this.current;
          }),
          t
        );
      })();
      const ie = n(24);
      const oe = [
        'mousedown',
        'mouseup',
        'dblclick',
        'mouseout',
        'mouseover',
        'mousemove',
        'mouseleave',
        'mouseenter',
        'touchstart',
        'touchmove',
        'touchend',
        'dragenter',
        'dragover',
        'dragleave',
        'drop',
        'contextmenu',
        'mousewheel',
      ];
      function ae(t, e, n) {
        (n.name = e), (n.target = t), (n.currentTarget = t), (n.delegateTarget = t), t.emit(e, n);
      }
      function se(t, e, n) {
        if (n.bubbles) {
          let r = void 0;
          let i = !1;
          if (
            (e === 'mouseenter'
              ? ((r = n.fromShape), (i = !0))
              : e === 'mouseleave' && ((i = !0), (r = n.toShape)),
            t.isCanvas() && i)
          )
            return;
          if (r && Object(s.g)(t, r)) return void (n.bubbles = !1);
          (n.name = e), (n.currentTarget = t), (n.delegateTarget = t), t.emit(e, n);
        }
      }
      const ue = (function () {
        function t(t) {
          const e = this;
          (this.draggingShape = null),
            (this.dragging = !1),
            (this.currentShape = null),
            (this.mousedownShape = null),
            (this.mousedownPoint = null),
            (this._eventCallback = function (t) {
              const n = t.type;
              e._triggerEvent(n, t);
            }),
            (this._onDocumentMove = function (t) {
              if (e.canvas.get('el') !== t.target && (e.dragging || e.currentShape)) {
                const n = e._getPointInfo(t);
                e.dragging && e._emitEvent('drag', t, n, e.draggingShape);
              }
            }),
            (this._onDocumentMouseUp = function (t) {
              if (e.canvas.get('el') !== t.target && e.dragging) {
                const n = e._getPointInfo(t);
                e.draggingShape && e._emitEvent('drop', t, n, null),
                  e._emitEvent('dragend', t, n, e.draggingShape),
                  e._afterDrag(e.draggingShape, n, t);
              }
            }),
            (this.canvas = t.canvas);
        }
        return (
          (t.prototype.init = function () {
            this._bindEvents();
          }),
          (t.prototype._bindEvents = function () {
            const t = this;
            const e = this.canvas.get('el');
            Object(s.a)(oe, (n) => {
              e.addEventListener(n, t._eventCallback);
            }),
              document &&
                (document.addEventListener('mousemove', this._onDocumentMove),
                document.addEventListener('mouseup', this._onDocumentMouseUp));
          }),
          (t.prototype._clearEvents = function () {
            const t = this;
            const e = this.canvas.get('el');
            Object(s.a)(oe, (n) => {
              e.removeEventListener(n, t._eventCallback);
            }),
              document &&
                (document.removeEventListener('mousemove', this._onDocumentMove),
                document.removeEventListener('mouseup', this._onDocumentMouseUp));
          }),
          (t.prototype._getEventObj = function (t, e, n, r, i, o) {
            const a = new ie.a(t, e);
            return (
              (a.fromShape = i),
              (a.toShape = o),
              (a.x = n.x),
              (a.y = n.y),
              (a.clientX = n.clientX),
              (a.clientY = n.clientY),
              a.propagationPath.push(r),
              a
            );
          }),
          (t.prototype._getShape = function (t, e) {
            return this.canvas.getShape(t.x, t.y, e);
          }),
          (t.prototype._getPointInfo = function (t) {
            const e = this.canvas;
            const n = e.getClientByEvent(t);
            const r = e.getPointByEvent(t);
            return { x: r.x, y: r.y, clientX: n.x, clientY: n.y };
          }),
          (t.prototype._triggerEvent = function (t, e) {
            const n = this._getPointInfo(e);
            const r = this._getShape(n, e);
            const i = this[`_on${t}`];
            let o = !1;
            if (i) i.call(this, n, r, e);
            else {
              const a = this.currentShape;
              t === 'mouseenter' || t === 'dragenter' || t === 'mouseover'
                ? (this._emitEvent(t, e, n, null, null, r),
                  r && this._emitEvent(t, e, n, r, null, r),
                  t === 'mouseenter' &&
                    this.draggingShape &&
                    this._emitEvent('dragenter', e, n, null))
                : t === 'mouseleave' || t === 'dragleave' || t === 'mouseout'
                ? ((o = !0),
                  a && this._emitEvent(t, e, n, a, a, null),
                  this._emitEvent(t, e, n, null, a, null),
                  t === 'mouseleave' &&
                    this.draggingShape &&
                    this._emitEvent('dragleave', e, n, null))
                : this._emitEvent(t, e, n, r, null, null);
            }
            if ((o || (this.currentShape = r), r && !r.get('destroyed'))) {
              const s = this.canvas;
              s.get('el').style.cursor = r.attr('cursor') || s.get('cursor');
            }
          }),
          (t.prototype._onmousedown = function (t, e, n) {
            n.button === 0 &&
              ((this.mousedownShape = e),
              (this.mousedownPoint = t),
              (this.mousedownTimeStamp = n.timeStamp)),
              this._emitEvent('mousedown', n, t, e, null, null);
          }),
          (t.prototype._emitMouseoverEvents = function (t, e, n, r) {
            const i = this.canvas.get('el');
            n !== r &&
              (n &&
                (this._emitEvent('mouseout', t, e, n, n, r),
                this._emitEvent('mouseleave', t, e, n, n, r),
                (r && !r.get('destroyed')) || (i.style.cursor = this.canvas.get('cursor'))),
              r &&
                (this._emitEvent('mouseover', t, e, r, n, r),
                this._emitEvent('mouseenter', t, e, r, n, r)));
          }),
          (t.prototype._emitDragoverEvents = function (t, e, n, r, i) {
            r
              ? (r !== n &&
                  (n && this._emitEvent('dragleave', t, e, n, n, r),
                  this._emitEvent('dragenter', t, e, r, n, r)),
                i || this._emitEvent('dragover', t, e, r))
              : n && this._emitEvent('dragleave', t, e, n, n, r),
              i && this._emitEvent('dragover', t, e, r);
          }),
          (t.prototype._afterDrag = function (t, e, n) {
            t && (t.set('capture', !0), (this.draggingShape = null)), (this.dragging = !1);
            const r = this._getShape(e, n);
            r !== t && this._emitMouseoverEvents(n, e, t, r), (this.currentShape = r);
          }),
          (t.prototype._onmouseup = function (t, e, n) {
            if (n.button === 0) {
              const r = this.draggingShape;
              this.dragging
                ? (r && this._emitEvent('drop', n, t, e),
                  this._emitEvent('dragend', n, t, r),
                  this._afterDrag(r, t, n))
                : (this._emitEvent('mouseup', n, t, e),
                  e === this.mousedownShape && this._emitEvent('click', n, t, e),
                  (this.mousedownShape = null),
                  (this.mousedownPoint = null));
            }
          }),
          (t.prototype._ondragover = function (t, e, n) {
            n.preventDefault();
            const r = this.currentShape;
            this._emitDragoverEvents(n, t, r, e, !0);
          }),
          (t.prototype._onmousemove = function (t, e, n) {
            const r = this.canvas;
            const i = this.currentShape;
            let o = this.draggingShape;
            if (this.dragging)
              o && this._emitDragoverEvents(n, t, i, e, !1), this._emitEvent('drag', n, t, o);
            else {
              const a = this.mousedownPoint;
              if (a) {
                const s = this.mousedownShape;
                const u = n.timeStamp - this.mousedownTimeStamp;
                const c = a.clientX - t.clientX;
                const h = a.clientY - t.clientY;
                u > 120 || c * c + h * h > 40
                  ? s && s.get('draggable')
                    ? ((o = this.mousedownShape).set('capture', !1),
                      (this.draggingShape = o),
                      (this.dragging = !0),
                      this._emitEvent('dragstart', n, t, o),
                      (this.mousedownShape = null),
                      (this.mousedownPoint = null))
                    : !s && r.get('draggable')
                    ? ((this.dragging = !0),
                      this._emitEvent('dragstart', n, t, null),
                      (this.mousedownShape = null),
                      (this.mousedownPoint = null))
                    : (this._emitMouseoverEvents(n, t, i, e), this._emitEvent('mousemove', n, t, e))
                  : (this._emitMouseoverEvents(n, t, i, e), this._emitEvent('mousemove', n, t, e));
              } else this._emitMouseoverEvents(n, t, i, e), this._emitEvent('mousemove', n, t, e);
            }
          }),
          (t.prototype._emitEvent = function (t, e, n, r, i, o) {
            const a = this._getEventObj(t, e, n, r, i, o);
            if (r) {
              (a.shape = r), ae(r, t, a);
              for (let s = r.getParent(); s; )
                s.emitDelegation(t, a),
                  a.propagationStopped || se(s, t, a),
                  a.propagationPath.push(s),
                  (s = s.getParent());
            } else {
              ae(this.canvas, t, a);
            }
          }),
          (t.prototype.destroy = function () {
            this._clearEvents(),
              (this.canvas = null),
              (this.currentShape = null),
              (this.draggingShape = null),
              (this.mousedownPoint = null),
              (this.mousedownShape = null),
              (this.mousedownTimeStamp = null);
          }),
          t
        );
      })();
      const ce = Object(o.a)();
      const he = ce && ce.name === 'firefox';
      const le = (function (t) {
        function e(e) {
          const n = t.call(this, e) || this;
          return n.initContainer(), n.initDom(), n.initEvents(), n.initTimeline(), n;
        }
        return (
          Object(i.c)(e, t),
          (e.prototype.getDefaultCfg = function () {
            const e = t.prototype.getDefaultCfg.call(this);
            return (e.cursor = 'default'), (e.supportCSSTransform = !1), e;
          }),
          (e.prototype.initContainer = function () {
            let t = this.get('container');
            Object(s.h)(t) && ((t = document.getElementById(t)), this.set('container', t));
          }),
          (e.prototype.initDom = function () {
            const t = this.createDom();
            this.set('el', t),
              this.get('container').appendChild(t),
              this.setDOMSize(this.get('width'), this.get('height'));
          }),
          (e.prototype.initEvents = function () {
            const t = new ue({ canvas: this });
            t.init(), this.set('eventController', t);
          }),
          (e.prototype.initTimeline = function () {
            const t = new re(this);
            this.set('timeline', t);
          }),
          (e.prototype.setDOMSize = function (t, e) {
            const n = this.get('el');
            s.c && ((n.style.width = `${t}px`), (n.style.height = `${e}px`));
          }),
          (e.prototype.changeSize = function (t, e) {
            this.setDOMSize(t, e),
              this.set('width', t),
              this.set('height', e),
              this.onCanvasChange('changeSize');
          }),
          (e.prototype.getRenderer = function () {
            return this.get('renderer');
          }),
          (e.prototype.getCursor = function () {
            return this.get('cursor');
          }),
          (e.prototype.setCursor = function (t) {
            this.set('cursor', t);
            const e = this.get('el');
            s.c && e && (e.style.cursor = t);
          }),
          (e.prototype.getPointByEvent = function (t) {
            if (this.get('supportCSSTransform')) {
              if (he && !Object(s.e)(t.layerX) && t.layerX !== t.offsetX)
                return { x: t.layerX, y: t.layerY };
              if (!Object(s.e)(t.offsetX)) return { x: t.offsetX, y: t.offsetY };
            }
            const e = this.getClientByEvent(t);
            const n = e.x;
            const r = e.y;
            return this.getPointByClient(n, r);
          }),
          (e.prototype.getClientByEvent = function (t) {
            let e = t;
            return (
              t.touches && (e = t.type === 'touchend' ? t.changedTouches[0] : t.touches[0]),
              { x: e.clientX, y: e.clientY }
            );
          }),
          (e.prototype.getPointByClient = function (t, e) {
            const n = this.get('el').getBoundingClientRect();
            return { x: t - n.left, y: e - n.top };
          }),
          (e.prototype.getClientByPoint = function (t, e) {
            const n = this.get('el').getBoundingClientRect();
            return { x: t + n.left, y: e + n.top };
          }),
          (e.prototype.draw = function () {}),
          (e.prototype.removeDom = function () {
            const t = this.get('el');
            t.parentNode.removeChild(t);
          }),
          (e.prototype.clearEvents = function () {
            this.get('eventController').destroy();
          }),
          (e.prototype.isCanvas = function () {
            return !0;
          }),
          (e.prototype.getParent = function () {
            return null;
          }),
          (e.prototype.destroy = function () {
            const e = this.get('timeline');
            this.get('destroyed') ||
              (this.clear(),
              e && e.stop(),
              this.clearEvents(),
              this.removeDom(),
              t.prototype.destroy.call(this));
          }),
          e
        );
      })(a.a);
      e.a = le;
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', () => {
        return o;
      });
      const r = new Map();
      function i(t, e) {
        r.set(t, e);
      }
      function o(t) {
        return r.get(t);
      }
      const a = function (t) {
        const e = t.attr();
        return { x: e.x, y: e.y, width: e.width, height: e.height };
      };
      const s = function (t) {
        const e = t.attr();
        const n = e.x;
        const r = e.y;
        const i = e.r;
        return { x: n - i, y: r - i, width: 2 * i, height: 2 * i };
      };
      const u = n(7);
      function c(t, e) {
        return t && e
          ? {
              minX: Math.min(t.minX, e.minX),
              minY: Math.min(t.minY, e.minY),
              maxX: Math.max(t.maxX, e.maxX),
              maxY: Math.max(t.maxY, e.maxY),
            }
          : t || e;
      }
      function h(t, e) {
        const n = t.get('startArrowShape');
        const r = t.get('endArrowShape');
        return n && (e = c(e, n.getCanvasBBox())), r && (e = c(e, r.getCanvasBBox())), e;
      }
      const l = n(17);
      const d = n(13);
      const f = n(0);
      function p(t, e) {
        const n = t.prePoint;
        const r = t.currentPoint;
        const i = t.nextPoint;
        const o = Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2);
        const a = Math.pow(r[0] - i[0], 2) + Math.pow(r[1] - i[1], 2);
        const s = Math.pow(n[0] - i[0], 2) + Math.pow(n[1] - i[1], 2);
        const u = Math.acos((o + a - s) / (2 * Math.sqrt(o) * Math.sqrt(a)));
        if (!u || Math.sin(u) === 0 || Object(f.v)(u, 0)) return { xExtra: 0, yExtra: 0 };
        let c = Math.abs(Math.atan2(i[1] - r[1], i[0] - r[0]));
        let h = Math.abs(Math.atan2(i[0] - r[0], i[1] - r[1]));
        return (
          (c = c > Math.PI / 2 ? Math.PI - c : c),
          (h = h > Math.PI / 2 ? Math.PI - h : h),
          {
            xExtra: Math.cos(u / 2 - c) * ((e / 2) * (1 / Math.sin(u / 2))) - e / 2 || 0,
            yExtra: Math.cos(h - u / 2) * ((e / 2) * (1 / Math.sin(u / 2))) - e / 2 || 0,
          }
        );
      }
      i('rect', a),
        i('image', a),
        i('circle', s),
        i('marker', s),
        i('polyline', (t) => {
          for (var e = t.attr().points, n = [], r = [], i = 0; i < e.length; i++) {
            const o = e[i];
            n.push(o[0]), r.push(o[1]);
          }
          const a = u.f.getBBoxByArray(n, r);
          const s = a.x;
          const c = a.y;
          let l = { minX: s, minY: c, maxX: s + a.width, maxY: c + a.height };
          return {
            x: (l = h(t, l)).minX,
            y: l.minY,
            width: l.maxX - l.minX,
            height: l.maxY - l.minY,
          };
        }),
        i('polygon', (t) => {
          for (var e = t.attr().points, n = [], r = [], i = 0; i < e.length; i++) {
            const o = e[i];
            n.push(o[0]), r.push(o[1]);
          }
          return u.f.getBBoxByArray(n, r);
        }),
        i('text', (t) => {
          const e = t.attr();
          const n = e.x;
          const r = e.y;
          const i = e.text;
          const o = e.fontSize;
          const a = e.lineHeight;
          let s = e.font;
          s || (s = Object(l.a)(e));
          let u;
          const c = Object(l.c)(i, s);
          if (c) {
            const h = e.textAlign;
            const d = e.textBaseline;
            const f = Object(l.b)(i, o, a);
            const p = { x: n, y: r - f };
            h && (h === 'end' || h === 'right' ? (p.x -= c) : h === 'center' && (p.x -= c / 2)),
              d && (d === 'top' ? (p.y += f) : d === 'middle' && (p.y += f / 2)),
              (u = { x: p.x, y: p.y, width: c, height: f });
          } else u = { x: n, y: r, width: 0, height: 0 };
          return u;
        }),
        i('path', (t) => {
          const e = t.attr();
          const n = e.path;
          const r = e.stroke ? e.lineWidth : 0;
          const i = (function (t, e) {
            for (var n = [], r = [], i = [], o = 0; o < t.length; o++) {
              var a = (m = t[o]).currentPoint;
              const s = m.params;
              const c = m.prePoint;
              let h = void 0;
              switch (m.command) {
                case 'Q':
                  h = u.e.box(c[0], c[1], s[1], s[2], s[3], s[4]);
                  break;
                case 'C':
                  h = u.b.box(c[0], c[1], s[1], s[2], s[3], s[4], s[5], s[6]);
                  break;
                case 'A':
                  var l = m.arcParams;
                  h = u.a.box(l.cx, l.cy, l.rx, l.ry, l.xRotation, l.startAngle, l.endAngle);
                  break;
                default:
                  n.push(a[0]), r.push(a[1]);
              }
              h && ((m.box = h), n.push(h.x, h.x + h.width), r.push(h.y, h.y + h.height)),
                e &&
                  (m.command === 'L' || m.command === 'M') &&
                  m.prePoint &&
                  m.nextPoint &&
                  i.push(m);
            }
            (n = n.filter((t) => {
              return !Number.isNaN(t);
            })),
              (r = r.filter((t) => {
                return !Number.isNaN(t);
              }));
            let d = Object(f.C)(n);
            let g = Object(f.C)(r);
            let y = Object(f.B)(n);
            let v = Object(f.B)(r);
            if (i.length === 0) return { x: d, y: g, width: y - d, height: v - g };
            for (o = 0; o < i.length; o++) {
              var m;
              (a = (m = i[o]).currentPoint)[0] === d
                ? (d -= p(m, e).xExtra)
                : a[0] === y && (y += p(m, e).xExtra),
                a[1] === g ? (g -= p(m, e).yExtra) : a[1] === v && (v += p(m, e).yExtra);
            }
            return { x: d, y: g, width: y - d, height: v - g };
          })(t.get('segments') || Object(d.d)(n), r);
          const o = i.x;
          const a = i.y;
          let s = { minX: o, minY: a, maxX: o + i.width, maxY: a + i.height };
          return {
            x: (s = h(t, s)).minX,
            y: s.minY,
            width: s.maxX - s.minX,
            height: s.maxY - s.minY,
          };
        }),
        i('line', (t) => {
          const e = t.attr();
          const n = e.x1;
          const r = e.y1;
          const i = e.x2;
          const o = e.y2;
          let a = {
            minX: Math.min(n, i),
            maxX: Math.max(n, i),
            minY: Math.min(r, o),
            maxY: Math.max(r, o),
          };
          return {
            x: (a = h(t, a)).minX,
            y: a.minY,
            width: a.maxX - a.minX,
            height: a.maxY - a.minY,
          };
        }),
        i('ellipse', (t) => {
          const e = t.attr();
          const n = e.x;
          const r = e.y;
          const i = e.rx;
          const o = e.ry;
          return { x: n - i, y: r - o, width: 2 * i, height: 2 * o };
        });
    },
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = n(5);
      const o = n(3);
      const a = n(18);
      const s = n(12);
      const u = n(9);
      const c = n(21);
      const h = n(20);
      const l = n(0);
      const d = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
      const f = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
      const p = /[\d.]+:(#[^\s]+|[^)]+\))/gi;
      function g(t) {
        const e = t.match(p);
        if (!e) return '';
        let n = '';
        return (
          e.sort((t, e) => {
            return (t = t.split(':')), (e = e.split(':')), Number(t[0]) - Number(e[0]);
          }),
          Object(l.f)(e, (t) => {
            (t = t.split(':')), (n += `<stop offset="${t[0]}" stop-color="${t[1]}"></stop>`);
          }),
          n
        );
      }
      const y = (function () {
        function t(t) {
          this.cfg = {};
          let e;
          let n;
          let r;
          let i;
          let o;
          let a;
          let s;
          let c = null;
          const h = Object(l.L)('gradient_');
          return (
            t.toLowerCase()[0] === 'l'
              ? (function (t, e) {
                  let n;
                  let r;
                  const i = d.exec(t);
                  const o = Object(l.E)(Object(l.K)(parseFloat(i[1])), 2 * Math.PI);
                  const a = i[2];
                  o >= 0 && o < 0.5 * Math.PI
                    ? ((n = { x: 0, y: 0 }), (r = { x: 1, y: 1 }))
                    : 0.5 * Math.PI <= o && o < Math.PI
                    ? ((n = { x: 1, y: 0 }), (r = { x: 0, y: 1 }))
                    : Math.PI <= o && o < 1.5 * Math.PI
                    ? ((n = { x: 1, y: 1 }), (r = { x: 0, y: 0 }))
                    : ((n = { x: 0, y: 1 }), (r = { x: 1, y: 0 }));
                  const s = Math.tan(o);
                  const u = s * s;
                  const c = (r.x - n.x + s * (r.y - n.y)) / (u + 1) + n.x;
                  const h = (s * (r.x - n.x + s * (r.y - n.y))) / (u + 1) + n.y;
                  e.setAttribute('x1', n.x),
                    e.setAttribute('y1', n.y),
                    e.setAttribute('x2', c),
                    e.setAttribute('y2', h),
                    (e.innerHTML = g(a));
                })(t, (c = Object(u.b)('linearGradient')))
              : ((c = Object(u.b)('radialGradient')),
                (e = t),
                (n = c),
                (r = f.exec(e)),
                (i = parseFloat(r[1])),
                (o = parseFloat(r[2])),
                (a = parseFloat(r[3])),
                (s = r[4]),
                n.setAttribute('cx', i),
                n.setAttribute('cy', o),
                n.setAttribute('r', a),
                (n.innerHTML = g(s))),
            c.setAttribute('id', h),
            (this.el = c),
            (this.id = h),
            (this.cfg = t),
            this
          );
        }
        return (
          (t.prototype.match = function (t, e) {
            return this.cfg === e;
          }),
          t
        );
      })();
      const v = {
        shadowColor: 'color',
        shadowOpacity: 'opacity',
        shadowBlur: 'blur',
        shadowOffsetX: 'dx',
        shadowOffsetY: 'dy',
      };
      const m = { x: '-40%', y: '-40%', width: '200%', height: '200%' };
      const b = (function () {
        function t(t) {
          (this.type = 'filter'), (this.cfg = {}), (this.type = 'filter');
          const e = Object(u.b)('filter');
          return (
            Object(l.f)(m, (t, n) => {
              e.setAttribute(n, t);
            }),
            (this.el = e),
            (this.id = Object(l.L)('filter_')),
            (this.el.id = this.id),
            (this.cfg = t),
            this._parseShadow(t, e),
            this
          );
        }
        return (
          (t.prototype.match = function (t, e) {
            if (this.type !== t) return !1;
            let n = !0;
            const r = this.cfg;
            return (
              Object(l.f)(Object.keys(r), (t) => {
                if (r[t] !== e[t]) return (n = !1), !1;
              }),
              n
            );
          }),
          (t.prototype.update = function (t, e) {
            const n = this.cfg;
            return (n[v[t]] = e), this._parseShadow(n, this.el), this;
          }),
          (t.prototype._parseShadow = function (t, e) {
            const n = `<feDropShadow\n      dx="${t.dx || 0}"\n      dy="${
              t.dy || 0
            }"\n      stdDeviation="${t.blur ? t.blur / 10 : 0}"\n      flood-color="${
              t.color ? t.color : '#000'
            }"\n      flood-opacity="${t.opacity ? t.opacity : 1}"\n      />`;
            e.innerHTML = n;
          }),
          t
        );
      })();
      const x = (function () {
        function t(t, e) {
          this.cfg = {};
          const n = Object(u.b)('marker');
          const r = Object(l.L)('marker_');
          n.setAttribute('id', r);
          const i = Object(u.b)('path');
          i.setAttribute('stroke', t.stroke || 'none'),
            i.setAttribute('fill', t.fill || 'none'),
            n.appendChild(i),
            n.setAttribute('overflow', 'visible'),
            n.setAttribute('orient', 'auto-start-reverse'),
            (this.el = n),
            (this.child = i),
            (this.id = r);
          const o = t[e === 'marker-start' ? 'startArrow' : 'endArrow'];
          return (
            (this.stroke = t.stroke || '#000'),
            !0 === o
              ? this._setDefaultPath(e, i)
              : ((this.cfg = o), this._setMarker(t.lineWidth, i)),
            this
          );
        }
        return (
          (t.prototype.match = function () {
            return !1;
          }),
          (t.prototype._setDefaultPath = function (t, e) {
            const n = this.el;
            e.setAttribute('d', `M0,0 L${10 * Math.cos(Math.PI / 6)},5 L0,10`),
              n.setAttribute('refX', `${10 * Math.cos(Math.PI / 6)}`),
              n.setAttribute('refY', '5');
          }),
          (t.prototype._setMarker = function (t, e) {
            const n = this.el;
            let r = this.cfg.path;
            const i = this.cfg.d;
            Object(l.n)(r) &&
              (r = r
                .map((t) => {
                  return t.join(' ');
                })
                .join('')),
              e.setAttribute('d', r),
              n.appendChild(e),
              i && n.setAttribute('refX', `${i / t}`);
          }),
          (t.prototype.update = function (t) {
            const e = this.child;
            e.attr ? e.attr('fill', t) : e.setAttribute('fill', t);
          }),
          t
        );
      })();
      const w = (function () {
        function t(t) {
          (this.type = 'clip'), (this.cfg = {});
          const e = Object(u.b)('clipPath');
          (this.el = e), (this.id = Object(l.L)('clip_')), (e.id = this.id);
          const n = t.cfg.el;
          return e.appendChild(n), (this.cfg = t), this;
        }
        return (
          (t.prototype.match = function () {
            return !1;
          }),
          (t.prototype.remove = function () {
            const t = this.el;
            t.parentNode.removeChild(t);
          }),
          t
        );
      })();
      const O = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i;
      const M = (function () {
        function t(t) {
          this.cfg = {};
          const e = Object(u.b)('pattern');
          e.setAttribute('patternUnits', 'userSpaceOnUse');
          const n = Object(u.b)('image');
          e.appendChild(n);
          const r = Object(l.L)('pattern_');
          (e.id = r), (this.el = e), (this.id = r), (this.cfg = t);
          const i = O.exec(t)[2];
          n.setAttribute('href', i);
          const o = new Image();
          function a() {
            e.setAttribute('width', `${o.width}`), e.setAttribute('height', `${o.height}`);
          }
          return (
            i.match(/^data:/i) || (o.crossOrigin = 'Anonymous'),
            (o.src = i),
            o.complete ? a() : ((o.onload = a), (o.src = o.src)),
            this
          );
        }
        return (
          (t.prototype.match = function (t, e) {
            return this.cfg === e;
          }),
          t
        );
      })();
      const S = (function () {
        function t(t) {
          const e = Object(u.b)('defs');
          const n = Object(l.L)('defs_');
          (e.id = n),
            t.appendChild(e),
            (this.children = []),
            (this.defaultArrow = {}),
            (this.el = e),
            (this.canvas = t);
        }
        return (
          (t.prototype.find = function (t, e) {
            for (var n = this.children, r = null, i = 0; i < n.length; i++)
              if (n[i].match(t, e)) {
                r = n[i].id;
                break;
              }
            return r;
          }),
          (t.prototype.findById = function (t) {
            for (var e = this.children, n = null, r = 0; r < e.length; r++)
              if (e[r].id === t) {
                n = e[r];
                break;
              }
            return n;
          }),
          (t.prototype.add = function (t) {
            this.children.push(t), (t.canvas = this.canvas), (t.parent = this);
          }),
          (t.prototype.getDefaultArrow = function (t, e) {
            const n = t.stroke || t.strokeStyle;
            if (this.defaultArrow[n]) return this.defaultArrow[n].id;
            const r = new x(t, e);
            return (this.defaultArrow[n] = r), this.el.appendChild(r.el), this.add(r), r.id;
          }),
          (t.prototype.addGradient = function (t) {
            const e = new y(t);
            return this.el.appendChild(e.el), this.add(e), e.id;
          }),
          (t.prototype.addArrow = function (t, e) {
            const n = new x(t, e);
            return this.el.appendChild(n.el), this.add(n), n.id;
          }),
          (t.prototype.addShadow = function (t) {
            const e = new b(t);
            return this.el.appendChild(e.el), this.add(e), e.id;
          }),
          (t.prototype.addPattern = function (t) {
            const e = new M(t);
            return this.el.appendChild(e.el), this.add(e), e.id;
          }),
          (t.prototype.addClip = function (t) {
            const e = new w(t);
            return this.el.appendChild(e.el), this.add(e), e.id;
          }),
          t
        );
      })();
      const C = (function (t) {
        function e(e) {
          return (
            t.call(this, Object(r.a)(Object(r.a)({}, e), { autoDraw: !0, renderer: 'svg' })) || this
          );
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.getShapeBase = function () {
            return c;
          }),
          (e.prototype.getGroupBase = function () {
            return h.a;
          }),
          (e.prototype.getShape = function (t, e, n) {
            let r = n.target || n.srcElement;
            if (!o.a[r.tagName]) {
              for (var i = r.parentNode; i && !o.a[i.tagName]; ) i = i.parentNode;
              r = i;
            }
            return this.find((t) => {
              return t.get('el') === r;
            });
          }),
          (e.prototype.createDom = function () {
            const t = Object(u.b)('svg');
            const e = new S(t);
            return (
              t.setAttribute('width', `${this.get('width')}`),
              t.setAttribute('height', `${this.get('height')}`),
              this.set('context', e),
              t
            );
          }),
          (e.prototype.onCanvasChange = function (t) {
            const e = this.get('context');
            const n = this.get('el');
            if (t === 'sort') {
              const r = this.get('children');
              r &&
                r.length &&
                Object(u.d)(this, (t, e) => {
                  return r.indexOf(t) - r.indexOf(e) ? 1 : 0;
                });
            } else if (t === 'clear') {
              if (n) {
                n.innerHTML = '';
                const i = e.el;
                (i.innerHTML = ''), n.appendChild(i);
              }
            } else
              t === 'matrix'
                ? Object(s.c)(this)
                : t === 'clip'
                ? Object(s.a)(this, e)
                : t === 'changeSize' &&
                  (n.setAttribute('width', `${this.get('width')}`),
                  n.setAttribute('height', `${this.get('height')}`));
          }),
          (e.prototype.draw = function () {
            const t = this.get('context');
            const e = this.getChildren();
            Object(s.a)(this, t), e.length && Object(a.a)(t, e);
          }),
          e
        );
      })(i.AbstractCanvas);
      e.a = C;
    },
    function (t, e, n) {
      'use strict';
      const r = n(1);
      const i = n(5);
      function o(t, e, n) {
        const r = t.getTotalMatrix();
        if (r) {
          const o = (function (t, e) {
            if (e) {
              const n = Object(i.invert)(e);
              return Object(i.multiplyVec2)(n, t);
            }
            return t;
          })([e, n, 1], r);
          return [o[0], o[1]];
        }
        return [e, n];
      }
      function a(t, e, n) {
        if (t.isCanvas && t.isCanvas()) return !0;
        if (!Object(i.isAllowCapture)(t) || !1 === t.cfg.isInView) return !1;
        if (t.cfg.clipShape) {
          const r = o(t, e, n);
          const a = r[0];
          const s = r[1];
          if (t.isClipped(a, s)) return !1;
        }
        const u = t.cfg.cacheCanvasBBox || t.getCanvasBBox();
        return e >= u.minX && e <= u.maxX && n >= u.minY && n <= u.maxY;
      }
      const s = n(16);
      const u = n(19);
      const c = n(2);
      const h = n(10);
      const l = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.getDefaultCfg = function () {
            const e = t.prototype.getDefaultCfg.call(this);
            return (
              (e.renderer = 'canvas'),
              (e.autoDraw = !0),
              (e.localRefresh = !0),
              (e.refreshElements = []),
              (e.clipView = !0),
              (e.quickHit = !1),
              e
            );
          }),
          (e.prototype.onCanvasChange = function (t) {
            (t !== 'attr' && t !== 'sort' && t !== 'changeSize') ||
              (this.set('refreshElements', [this]), this.draw());
          }),
          (e.prototype.getShapeBase = function () {
            return s;
          }),
          (e.prototype.getGroupBase = function () {
            return u.a;
          }),
          (e.prototype.getPixelRatio = function () {
            const t = this.get('pixelRatio') || Object(c.d)();
            return t >= 1 ? Math.ceil(t) : 1;
          }),
          (e.prototype.getViewRange = function () {
            return { minX: 0, minY: 0, maxX: this.cfg.width, maxY: this.cfg.height };
          }),
          (e.prototype.createDom = function () {
            const t = document.createElement('canvas');
            const e = t.getContext('2d');
            return this.set('context', e), t;
          }),
          (e.prototype.setDOMSize = function (e, n) {
            t.prototype.setDOMSize.call(this, e, n);
            const r = this.get('context');
            const i = this.get('el');
            const o = this.getPixelRatio();
            (i.width = o * e), (i.height = o * n), o > 1 && r.scale(o, o);
          }),
          (e.prototype.clear = function () {
            t.prototype.clear.call(this), this._clearFrame();
            const e = this.get('context');
            const n = this.get('el');
            e.clearRect(0, 0, n.width, n.height);
          }),
          (e.prototype.getShape = function (e, n) {
            return this.get('quickHit')
              ? (function t(e, n, r) {
                  if (!a(e, n, r)) return null;
                  for (var i = null, s = e.getChildren(), u = s.length - 1; u >= 0; u--) {
                    const c = s[u];
                    if (c.isGroup()) i = t(c, n, r);
                    else if (a(c, n, r)) {
                      const h = c;
                      const l = o(c, n, r);
                      const d = l[0];
                      const f = l[1];
                      h.isInShape(d, f) && (i = c);
                    }
                    if (i) break;
                  }
                  return i;
                })(this, e, n)
              : t.prototype.getShape.call(this, e, n, null);
          }),
          (e.prototype._getRefreshRegion = function () {
            let t;
            const e = this.get('refreshElements');
            const n = this.getViewRange();
            e.length && e[0] === this
              ? (t = n)
              : (t = Object(h.f)(e)) &&
                ((t.minX = Math.floor(t.minX)),
                (t.minY = Math.floor(t.minY)),
                (t.maxX = Math.ceil(t.maxX)),
                (t.maxY = Math.ceil(t.maxY)),
                (t.maxY += 1),
                this.get('clipView') && (t = Object(h.g)(t, n)));
            return t;
          }),
          (e.prototype.refreshElement = function (t) {
            this.get('refreshElements').push(t);
          }),
          (e.prototype._clearFrame = function () {
            const t = this.get('drawFrame');
            t && (Object(c.a)(t), this.set('drawFrame', null), this.set('refreshElements', []));
          }),
          (e.prototype.draw = function () {
            const t = this.get('drawFrame');
            (this.get('autoDraw') && t) || this._startDraw();
          }),
          (e.prototype._drawAll = function () {
            const t = this.get('context');
            const e = this.get('el');
            const n = this.getChildren();
            t.clearRect(0, 0, e.width, e.height),
              Object(h.a)(t, this),
              Object(h.d)(t, n),
              this.set('refreshElements', []);
          }),
          (e.prototype._drawRegion = function () {
            const t = this.get('context');
            const e = this.get('refreshElements');
            const n = this.getChildren();
            const r = this._getRefreshRegion();
            r
              ? (t.clearRect(r.minX, r.minY, r.maxX - r.minX, r.maxY - r.minY),
                t.save(),
                t.beginPath(),
                t.rect(r.minX, r.minY, r.maxX - r.minX, r.maxY - r.minY),
                t.clip(),
                Object(h.a)(t, this),
                Object(h.b)(this, n, r),
                Object(h.d)(t, n, r),
                t.restore())
              : e.length && Object(h.c)(e),
              Object(c.c)(e, (t) => {
                t.get('hasChanged') && t.set('hasChanged', !1);
              }),
              this.set('refreshElements', []);
          }),
          (e.prototype._startDraw = function () {
            const t = this;
            let e = this.get('drawFrame');
            e ||
              ((e = Object(c.n)(() => {
                t.get('localRefresh') ? t._drawRegion() : t._drawAll(), t.set('drawFrame', null);
              })),
              this.set('drawFrame', e));
          }),
          (e.prototype.skipDraw = function () {}),
          (e.prototype.removeDom = function () {
            const t = this.get('el');
            (t.width = 0), (t.height = 0), t.parentNode.removeChild(t);
          }),
          e
        );
      })(i.AbstractCanvas);
      e.a = l;
    },
    function (t, e, n) {
      let r;
      let i;
      let o;
      function a(t) {
        return (a =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      (i = []),
        void 0 ===
          (o =
            typeof (r = function () {
              const n = (function () {
                const t = {
                  row: 'left',
                  'row-reverse': 'right',
                  column: 'top',
                  'column-reverse': 'bottom',
                };
                const e = {
                  row: 'right',
                  'row-reverse': 'left',
                  column: 'bottom',
                  'column-reverse': 'top',
                };
                const n = {
                  row: 'left',
                  'row-reverse': 'right',
                  column: 'top',
                  'column-reverse': 'bottom',
                };
                const r = {
                  row: 'width',
                  'row-reverse': 'width',
                  column: 'height',
                  'column-reverse': 'height',
                };
                function i(t) {
                  return void 0 === t;
                }
                function o(t) {
                  return t === 'row' || t === 'row-reverse';
                }
                function a(t, e) {
                  if (void 0 !== t.style.marginStart && o(e)) return t.style.marginStart;
                  let n = null;
                  switch (e) {
                    case 'row':
                      n = t.style.marginLeft;
                      break;
                    case 'row-reverse':
                      n = t.style.marginRight;
                      break;
                    case 'column':
                      n = t.style.marginTop;
                      break;
                    case 'column-reverse':
                      n = t.style.marginBottom;
                  }
                  return void 0 !== n ? n : void 0 !== t.style.margin ? t.style.margin : 0;
                }
                function s(t, e) {
                  if (void 0 !== t.style.marginEnd && o(e)) return t.style.marginEnd;
                  let n = null;
                  switch (e) {
                    case 'row':
                      n = t.style.marginRight;
                      break;
                    case 'row-reverse':
                      n = t.style.marginLeft;
                      break;
                    case 'column':
                      n = t.style.marginBottom;
                      break;
                    case 'column-reverse':
                      n = t.style.marginTop;
                  }
                  return n != null ? n : void 0 !== t.style.margin ? t.style.margin : 0;
                }
                function u(t, e) {
                  if (void 0 !== t.style.borderStartWidth && t.style.borderStartWidth >= 0 && o(e))
                    return t.style.borderStartWidth;
                  let n = null;
                  switch (e) {
                    case 'row':
                      n = t.style.borderLeftWidth;
                      break;
                    case 'row-reverse':
                      n = t.style.borderRightWidth;
                      break;
                    case 'column':
                      n = t.style.borderTopWidth;
                      break;
                    case 'column-reverse':
                      n = t.style.borderBottomWidth;
                  }
                  return n != null && n >= 0
                    ? n
                    : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0
                    ? t.style.borderWidth
                    : 0;
                }
                function c(t, e) {
                  if (void 0 !== t.style.borderEndWidth && t.style.borderEndWidth >= 0 && o(e))
                    return t.style.borderEndWidth;
                  let n = null;
                  switch (e) {
                    case 'row':
                      n = t.style.borderRightWidth;
                      break;
                    case 'row-reverse':
                      n = t.style.borderLeftWidth;
                      break;
                    case 'column':
                      n = t.style.borderBottomWidth;
                      break;
                    case 'column-reverse':
                      n = t.style.borderTopWidth;
                  }
                  return n != null && n >= 0
                    ? n
                    : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0
                    ? t.style.borderWidth
                    : 0;
                }
                function h(t, e) {
                  return (
                    (function (t, e) {
                      if (void 0 !== t.style.paddingStart && t.style.paddingStart >= 0 && o(e))
                        return t.style.paddingStart;
                      let n = null;
                      switch (e) {
                        case 'row':
                          n = t.style.paddingLeft;
                          break;
                        case 'row-reverse':
                          n = t.style.paddingRight;
                          break;
                        case 'column':
                          n = t.style.paddingTop;
                          break;
                        case 'column-reverse':
                          n = t.style.paddingBottom;
                      }
                      return n != null && n >= 0
                        ? n
                        : void 0 !== t.style.padding && t.style.padding >= 0
                        ? t.style.padding
                        : 0;
                    })(t, e) + u(t, e)
                  );
                }
                function l(t, e) {
                  return (
                    (function (t, e) {
                      if (void 0 !== t.style.paddingEnd && t.style.paddingEnd >= 0 && o(e))
                        return t.style.paddingEnd;
                      let n = null;
                      switch (e) {
                        case 'row':
                          n = t.style.paddingRight;
                          break;
                        case 'row-reverse':
                          n = t.style.paddingLeft;
                          break;
                        case 'column':
                          n = t.style.paddingBottom;
                          break;
                        case 'column-reverse':
                          n = t.style.paddingTop;
                      }
                      return n != null && n >= 0
                        ? n
                        : void 0 !== t.style.padding && t.style.padding >= 0
                        ? t.style.padding
                        : 0;
                    })(t, e) + c(t, e)
                  );
                }
                function d(t, e) {
                  return u(t, e) + c(t, e);
                }
                function f(t, e) {
                  return a(t, e) + s(t, e);
                }
                function p(t, e) {
                  return h(t, e) + l(t, e);
                }
                function g(t, e) {
                  return e.style.alignSelf
                    ? e.style.alignSelf
                    : t.style.alignItems
                    ? t.style.alignItems
                    : 'stretch';
                }
                function y(t, e) {
                  if (e === 'rtl') {
                    if (t === 'row') return 'row-reverse';
                    if (t === 'row-reverse') return 'row';
                  }
                  return t;
                }
                function v(t) {
                  return t.style.position ? t.style.position : 'relative';
                }
                function m(t) {
                  return v(t) === 'relative' && t.style.flex > 0;
                }
                function b(t, e) {
                  return t.layout[r[e]] + f(t, e);
                }
                function x(t, e) {
                  return void 0 !== t.style[r[e]] && t.style[r[e]] >= 0;
                }
                function w(t, e) {
                  return void 0 !== t.style[e];
                }
                function O(t, e) {
                  return void 0 !== t.style[e] ? t.style[e] : 0;
                }
                function M(t, e, n) {
                  const r = {
                    row: t.style.minWidth,
                    'row-reverse': t.style.minWidth,
                    column: t.style.minHeight,
                    'column-reverse': t.style.minHeight,
                  }[e];
                  const i = {
                    row: t.style.maxWidth,
                    'row-reverse': t.style.maxWidth,
                    column: t.style.maxHeight,
                    'column-reverse': t.style.maxHeight,
                  }[e];
                  let o = n;
                  return (
                    void 0 !== i && i >= 0 && o > i && (o = i),
                    void 0 !== r && r >= 0 && o < r && (o = r),
                    o
                  );
                }
                function S(t, e) {
                  return t > e ? t : e;
                }
                function C(t, e) {
                  void 0 === t.layout[r[e]] &&
                    x(t, e) &&
                    (t.layout[r[e]] = S(M(t, e, t.style[r[e]]), p(t, e)));
                }
                function j(t, i, o) {
                  i.layout[e[o]] = t.layout[r[o]] - i.layout[r[o]] - i.layout[n[o]];
                }
                function k(n, r) {
                  return void 0 !== n.style[t[r]] ? O(n, t[r]) : -O(n, e[r]);
                }
                function A(c, A, P) {
                  const N = (function (t, e) {
                    let n;
                    return (
                      (n = t.style.direction ? t.style.direction : 'inherit') === 'inherit' &&
                        (n = void 0 === e ? 'ltr' : e),
                      n
                    );
                  })(c, P);
                  const T = y(
                    (function (t) {
                      return t.style.flexDirection ? t.style.flexDirection : 'column';
                    })(c),
                    N,
                  );
                  const I = (function (t, e) {
                    return (function (t) {
                      return t === 'column' || t === 'column-reverse';
                    })(t)
                      ? y('row', e)
                      : 'column';
                  })(T, N);
                  const B = y('row', N);
                  C(c, T),
                    C(c, I),
                    (c.layout.direction = N),
                    (c.layout[t[T]] += a(c, T) + k(c, T)),
                    (c.layout[e[T]] += s(c, T) + k(c, T)),
                    (c.layout[t[I]] += a(c, I) + k(c, I)),
                    (c.layout[e[I]] += s(c, I) + k(c, I));
                  const L = c.children.length;
                  const D = p(c, B);
                  if (
                    (function (t) {
                      return void 0 !== t.style.measure;
                    })(c)
                  ) {
                    const _ = !i(c.layout[r[B]]);
                    let Y = void 0;
                    (Y = x(c, B) ? c.style.width : _ ? c.layout[r[B]] : A - f(c, B)), (Y -= D);
                    const R = !x(c, B) && !_;
                    const F = !x(c, 'column') && i(c.layout[r.column]);
                    if (R || F) {
                      const X = c.style.measure(Y);
                      R && (c.layout.width = X.width + D),
                        F && (c.layout.height = X.height + p(c, 'column'));
                    }
                    if (L === 0) return;
                  }
                  let z;
                  let W;
                  let G;
                  let q;
                  const H = (function (t) {
                    return t.style.flexWrap === 'wrap';
                  })(c);
                  const V = (function (t) {
                    return t.style.justifyContent ? t.style.justifyContent : 'flex-start';
                  })(c);
                  const U = h(c, T);
                  const Z = h(c, I);
                  const K = p(c, T);
                  const Q = p(c, I);
                  const $ = !i(c.layout[r[T]]);
                  const J = !i(c.layout[r[I]]);
                  const tt = o(T);
                  let et = null;
                  let nt = null;
                  let rt = void 0;
                  $ && (rt = c.layout[r[T]] - K);
                  for (var it = 0, ot = 0, at = 0, st = 0, ut = 0, ct = 0; ot < L; ) {
                    var ht;
                    let lt = 0;
                    let dt = 0;
                    let ft = 0;
                    let pt = 0;
                    let gt = ($ && V === 'flex-start') || (!$ && V !== 'center');
                    let yt = gt ? L : it;
                    let vt = !0;
                    let mt = L;
                    let bt = null;
                    let xt = null;
                    let wt = U;
                    let Ot = 0;
                    for (z = it; z < L; ++z) {
                      if (
                        (((G = c.children[z]).lineIndex = ct),
                        (G.nextAbsoluteChild = null),
                        (G.nextFlexChild = null),
                        (Nt = g(c, G)) === 'stretch' && v(G) === 'relative' && J && !x(G, I))
                      )
                        G.layout[r[I]] = S(M(G, I, c.layout[r[I]] - Q - f(G, I)), p(G, I));
                      else if (v(G) === 'absolute')
                        for (
                          et === null && (et = G),
                            nt !== null && (nt.nextAbsoluteChild = G),
                            nt = G,
                            W = 0;
                          W < 2;
                          W++
                        )
                          (q = W !== 0 ? 'row' : 'column'),
                            !i(c.layout[r[q]]) &&
                              !x(G, q) &&
                              w(G, t[q]) &&
                              w(G, e[q]) &&
                              (G.layout[r[q]] = S(
                                M(
                                  G,
                                  q,
                                  c.layout[r[q]] - p(c, q) - f(G, q) - O(G, t[q]) - O(G, e[q]),
                                ),
                                p(G, q),
                              ));
                      let Mt = 0;
                      if (
                        ($ && m(G)
                          ? (dt++,
                            (ft += G.style.flex),
                            bt === null && (bt = G),
                            xt !== null && (xt.nextFlexChild = G),
                            (xt = G),
                            (Mt = p(G, T) + f(G, T)))
                          : ((ht = void 0),
                            tt || (ht = x(c, B) ? c.layout[r[B]] - D : A - f(c, B) - D),
                            at === 0 && E(G, ht, N),
                            v(G) === 'relative' && (pt++, (Mt = b(G, T)))),
                        H && $ && lt + Mt > rt && z !== it)
                      ) {
                        pt--, (at = 1);
                        break;
                      }
                      gt && (v(G) !== 'relative' || m(G)) && ((gt = !1), (yt = z)),
                        vt &&
                          (v(G) !== 'relative' ||
                            (Nt !== 'stretch' && Nt !== 'flex-start') ||
                            i(G.layout[r[I]])) &&
                          ((vt = !1), (mt = z)),
                        gt &&
                          ((G.layout[n[T]] += wt),
                          $ && j(c, G, T),
                          (wt += b(G, T)),
                          (Ot = S(Ot, M(G, I, b(G, I))))),
                        vt && ((G.layout[n[I]] += st + Z), J && j(c, G, I)),
                        (at = 0),
                        (lt += Mt),
                        (ot = z + 1);
                    }
                    let St = 0;
                    let Ct = 0;
                    let jt = 0;
                    if (((jt = $ ? rt - lt : S(lt, 0) - lt), dt !== 0)) {
                      var kt;
                      var At;
                      let Et = jt / ft;
                      for (xt = bt; xt !== null; )
                        (kt = Et * xt.style.flex + p(xt, T)) !== (At = M(xt, T, kt)) &&
                          ((jt -= At), (ft -= xt.style.flex)),
                          (xt = xt.nextFlexChild);
                      for ((Et = jt / ft) < 0 && (Et = 0), xt = bt; xt !== null; )
                        (xt.layout[r[T]] = M(xt, T, Et * xt.style.flex + p(xt, T))),
                          (ht = void 0),
                          x(c, B) ? (ht = c.layout[r[B]] - D) : tt || (ht = A - f(c, B) - D),
                          E(xt, ht, N),
                          (G = xt),
                          (xt = xt.nextFlexChild),
                          (G.nextFlexChild = null);
                    } else
                      V !== 'flex-start' &&
                        (V === 'center'
                          ? (St = jt / 2)
                          : V === 'flex-end'
                          ? (St = jt)
                          : V === 'space-between'
                          ? ((jt = S(jt, 0)), (Ct = dt + pt - 1 != 0 ? jt / (dt + pt - 1) : 0))
                          : V === 'space-around' && (St = (Ct = jt / (dt + pt)) / 2));
                    for (wt += St, z = yt; z < ot; ++z)
                      v((G = c.children[z])) === 'absolute' && w(G, t[T])
                        ? (G.layout[n[T]] = O(G, t[T]) + u(c, T) + a(G, T))
                        : ((G.layout[n[T]] += wt),
                          $ && j(c, G, T),
                          v(G) === 'relative' &&
                            ((wt += Ct + b(G, T)), (Ot = S(Ot, M(G, I, b(G, I))))));
                    let Pt = c.layout[r[I]];
                    for (J || (Pt = S(M(c, I, Ot + Q), Q)), z = mt; z < ot; ++z)
                      if (v((G = c.children[z])) === 'absolute' && w(G, t[I]))
                        G.layout[n[I]] = O(G, t[I]) + u(c, I) + a(G, I);
                      else {
                        var Nt;
                        let Tt = Z;
                        if (v(G) === 'relative')
                          if ((Nt = g(c, G)) === 'stretch')
                            i(G.layout[r[I]]) &&
                              (G.layout[r[I]] = S(M(G, I, Pt - Q - f(G, I)), p(G, I)));
                          else if (Nt !== 'flex-start') {
                            const It = Pt - Q - b(G, I);
                            Tt += Nt === 'center' ? It / 2 : It;
                          }
                        (G.layout[n[I]] += st + Tt), J && j(c, G, I);
                      }
                    (st += Ot), (ut = S(ut, wt)), (ct += 1), (it = ot);
                  }
                  if (ct > 1 && J) {
                    const Bt = c.layout[r[I]] - Q;
                    const Lt = Bt - st;
                    let Dt = 0;
                    let _t = Z;
                    const Yt = (function (t) {
                      return t.style.alignContent ? t.style.alignContent : 'flex-start';
                    })(c);
                    Yt === 'flex-end'
                      ? (_t += Lt)
                      : Yt === 'center'
                      ? (_t += Lt / 2)
                      : Yt === 'stretch' && Bt > st && (Dt = Lt / ct);
                    let Rt = 0;
                    for (z = 0; z < ct; ++z) {
                      const Ft = Rt;
                      let Xt = 0;
                      for (W = Ft; W < L; ++W)
                        if (v((G = c.children[W])) === 'relative') {
                          if (G.lineIndex !== z) break;
                          i(G.layout[r[I]]) || (Xt = S(Xt, G.layout[r[I]] + f(G, I)));
                        }
                      for (Rt = W, Xt += Dt, W = Ft; W < Rt; ++W)
                        if (v((G = c.children[W])) === 'relative') {
                          const zt = g(c, G);
                          if (zt === 'flex-start') G.layout[n[I]] = _t + a(G, I);
                          else if (zt === 'flex-end')
                            G.layout[n[I]] = _t + Xt - s(G, I) - G.layout[r[I]];
                          else if (zt === 'center') {
                            const Wt = G.layout[r[I]];
                            G.layout[n[I]] = _t + (Xt - Wt) / 2;
                          } else zt === 'stretch' && (G.layout[n[I]] = _t + a(G, I));
                        }
                      _t += Xt;
                    }
                  }
                  let Gt = !1;
                  let qt = !1;
                  if (
                    ($ ||
                      ((c.layout[r[T]] = S(M(c, T, ut + l(c, T)), K)),
                      (T !== 'row-reverse' && T !== 'column-reverse') || (Gt = !0)),
                    J ||
                      ((c.layout[r[I]] = S(M(c, I, st + Q), Q)),
                      (I !== 'row-reverse' && I !== 'column-reverse') || (qt = !0)),
                    Gt || qt)
                  )
                    for (z = 0; z < L; ++z) (G = c.children[z]), Gt && j(c, G, T), qt && j(c, G, I);
                  for (nt = et; nt !== null; ) {
                    for (W = 0; W < 2; W++)
                      (q = W !== 0 ? 'row' : 'column'),
                        !i(c.layout[r[q]]) &&
                          !x(nt, q) &&
                          w(nt, t[q]) &&
                          w(nt, e[q]) &&
                          (nt.layout[r[q]] = S(
                            M(
                              nt,
                              q,
                              c.layout[r[q]] - d(c, q) - f(nt, q) - O(nt, t[q]) - O(nt, e[q]),
                            ),
                            p(nt, q),
                          )),
                        w(nt, e[q]) &&
                          !w(nt, t[q]) &&
                          (nt.layout[t[q]] = c.layout[r[q]] - nt.layout[r[q]] - O(nt, e[q]));
                    (G = nt), (nt = nt.nextAbsoluteChild), (G.nextAbsoluteChild = null);
                  }
                }
                function E(t, e, n) {
                  t.shouldUpdate = !0;
                  const r = t.style.direction || 'ltr';
                  !t.isDirty &&
                  t.lastLayout &&
                  t.lastLayout.requestedHeight === t.layout.height &&
                  t.lastLayout.requestedWidth === t.layout.width &&
                  t.lastLayout.parentMaxWidth === e &&
                  t.lastLayout.direction === r
                    ? ((t.layout.width = t.lastLayout.width),
                      (t.layout.height = t.lastLayout.height),
                      (t.layout.top = t.lastLayout.top),
                      (t.layout.left = t.lastLayout.left))
                    : (t.lastLayout || (t.lastLayout = {}),
                      (t.lastLayout.requestedWidth = t.layout.width),
                      (t.lastLayout.requestedHeight = t.layout.height),
                      (t.lastLayout.parentMaxWidth = e),
                      (t.lastLayout.direction = r),
                      t.children.forEach((t) => {
                        (t.layout.width = void 0),
                          (t.layout.height = void 0),
                          (t.layout.top = 0),
                          (t.layout.left = 0);
                      }),
                      A(t, e, n),
                      (t.lastLayout.width = t.layout.width),
                      (t.lastLayout.height = t.layout.height),
                      (t.lastLayout.top = t.layout.top),
                      (t.lastLayout.left = t.layout.left));
                }
                return {
                  layoutNodeImpl: A,
                  computeLayout: E,
                  fillNodes: function t(e) {
                    return (
                      (e.layout && !e.isDirty) ||
                        (e.layout = {
                          width: void 0,
                          height: void 0,
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                        }),
                      e.style || (e.style = {}),
                      e.children || (e.children = []),
                      e.children.forEach(t),
                      e
                    );
                  },
                };
              })();
              return (
                a(e) === 'object' && (t.exports = n),
                function (t) {
                  n.fillNodes(t), n.computeLayout(t);
                }
              );
            }) === 'function'
              ? r.apply(e, i)
              : r) || (t.exports = o);
    },
    function (t, e, n) {
      'use strict';
      n(16), n(5);
      const r = n(40);
      n.d(e, 'Canvas', () => {
        return r.a;
      });
      n(19), n(23);
    },
    function (t, e, n) {
      'use strict';
      n(21), n(5);
      const r = n(39);
      n.d(e, 'Canvas', () => {
        return r.a;
      });
      n(20);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e) {
      let n;
      let r;
      const i = (t.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function a() {
        throw new Error('clearTimeout has not been defined');
      }
      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = typeof setTimeout === 'function' ? setTimeout : o;
        } catch (t) {
          n = o;
        }
        try {
          r = typeof clearTimeout === 'function' ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      })();
      let u;
      let c = [];
      let h = !1;
      let l = -1;
      function d() {
        h && u && ((h = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && f());
      }
      function f() {
        if (!h) {
          const t = s(d);
          h = !0;
          for (let e = c.length; e; ) {
            for (u = c, c = []; ++l < e; ) u && u[l].run();
            (l = -1), (e = c.length);
          }
          (u = null),
            (h = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (i.nextTick = function (t) {
        const e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (let n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new p(t, e)), c.length !== 1 || h || s(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function () {
          return '/';
        }),
        (i.chdir = function (t) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'TimeBar', () => {
          return $e;
        }),
        n.d(e, 'SnapLine', () => {
          return Ki;
        }),
        n.d(e, 'Tooltip', () => {
          return Qi;
        }),
        n.d(e, 'Legend', () => {
          return to;
        }),
        n.d(e, 'ZoomSlider', () => {
          return eo;
        }),
        n.d(e, 'EdgeFilterLens', () => {
          return io;
        }),
        n.d(e, 'Fisheye', () => {
          return ao;
        }),
        n.d(e, 'MiniMap', () => {
          return lo;
        }),
        n.d(e, 'Bundling', () => {
          return go;
        }),
        n.d(e, 'Menu', () => {
          return yo;
        });
      const r = {};
      n.r(r),
        n.d(r, 'default', () => {
          return Ut;
        }),
        n.d(r, 'assign', () => {
          return At;
        }),
        n.d(r, 'format', () => {
          return Ht;
        }),
        n.d(r, 'parse', () => {
          return Vt;
        }),
        n.d(r, 'defaultI18n', () => {
          return Tt;
        }),
        n.d(r, 'setGlobalDateI18n', () => {
          return Bt;
        }),
        n.d(r, 'setGlobalDateMasks', () => {
          return qt;
        });
      const i = {};
      n.r(i),
        n.d(i, 'compare', () => {
          return Sn;
        }),
        n.d(i, 'getLineIntersect', () => {
          return jn;
        }),
        n.d(i, 'getRectIntersectByPoint', () => {
          return kn;
        }),
        n.d(i, 'getCircleIntersectByPoint', () => {
          return An;
        }),
        n.d(i, 'getEllipseIntersectByPoint', () => {
          return En;
        }),
        n.d(i, 'applyMatrix', () => {
          return Pn;
        }),
        n.d(i, 'invertMatrix', () => {
          return Nn;
        }),
        n.d(i, 'getCircleCenterByPoints', () => {
          return Tn;
        }),
        n.d(i, 'distance', () => {
          return In;
        }),
        n.d(i, 'scaleMatrix', () => {
          return Bn;
        }),
        n.d(i, 'floydWarshall', () => {
          return Ln;
        }),
        n.d(i, 'getAdjMatrix', () => {
          return Dn;
        }),
        n.d(i, 'translate', () => {
          return _n;
        }),
        n.d(i, 'move', () => {
          return Yn;
        }),
        n.d(i, 'scale', () => {
          return Rn;
        }),
        n.d(i, 'rotate', () => {
          return Fn;
        }),
        n.d(i, 'getDegree', () => {
          return Xn;
        }),
        n.d(i, 'isPointInPolygon', () => {
          return Vn;
        }),
        n.d(i, 'intersectBBox', () => {
          return Un;
        }),
        n.d(i, 'isPolygonsIntersect', () => {
          return Zn;
        }),
        n.d(i, 'Line', () => {
          return Kn;
        }),
        n.d(i, 'getBBoxBoundLine', () => {
          return Qn;
        }),
        n.d(i, 'itemIntersectByLine', () => {
          return Jn;
        }),
        n.d(i, 'fractionToLine', () => {
          return tr;
        }),
        n.d(i, 'getPointsCenter', () => {
          return er;
        }),
        n.d(i, 'squareDist', () => {
          return nr;
        }),
        n.d(i, 'pointLineSquareDist', () => {
          return rr;
        }),
        n.d(i, 'isPointsOverlap', () => {
          return ir;
        }),
        n.d(i, 'pointRectSquareDist', () => {
          return or;
        }),
        n.d(i, 'pointLineDistance', () => {
          return ar;
        });
      const o = {};
      n.r(o),
        n.d(o, 'getBBox', () => {
          return br;
        }),
        n.d(o, 'getLoopCfgs', () => {
          return xr;
        }),
        n.d(o, 'getLabelPosition', () => {
          return wr;
        }),
        n.d(o, 'traverseTree', () => {
          return Mr;
        }),
        n.d(o, 'traverseTreeUp', () => {
          return Sr;
        }),
        n.d(o, 'getLetterWidth', () => {
          return Cr;
        }),
        n.d(o, 'getTextSize', () => {
          return jr;
        }),
        n.d(o, 'plainCombosToTrees', () => {
          return kr;
        }),
        n.d(o, 'reconstructTree', () => {
          return Ar;
        }),
        n.d(o, 'getComboBBox', () => {
          return Er;
        }),
        n.d(o, 'shouldRefreshEdge', () => {
          return Pr;
        }),
        n.d(o, 'cloneBesidesImg', () => {
          return Nr;
        });
      const a = {};
      n.r(a),
        n.d(a, 'uniqueId', () => {
          return _r;
        }),
        n.d(a, 'formatPadding', () => {
          return Yr;
        }),
        n.d(a, 'cloneEvent', () => {
          return Rr;
        }),
        n.d(a, 'isViewportChanged', () => {
          return Fr;
        }),
        n.d(a, 'isNaN', () => {
          return Xr;
        }),
        n.d(a, 'calculationItemsBBox', () => {
          return zr;
        }),
        n.d(a, 'processParallelEdges', () => {
          return Wr;
        });
      const s = {};
      n.r(s),
        n.d(s, 'getSpline', () => {
          return hi;
        }),
        n.d(s, 'getControlPoint', () => {
          return li;
        }),
        n.d(s, 'pointsToPolygon', () => {
          return di;
        }),
        n.d(s, 'pathToPoints', () => {
          return fi;
        }),
        n.d(s, 'getClosedSpline', () => {
          return pi;
        }),
        n.d(s, 'roundedHull', () => {
          return mi;
        }),
        n.d(s, 'paddedHull', () => {
          return bi;
        });
      const u = {};
      n.r(u),
        n.d(u, 'defaultSubjectColors', () => {
          return qi;
        });
      let c;
      const h = n(1);
      function l(t) {
        if (/^[-\+\.\d]+$/.test(t)) return Number(t);
        if (/true|false/.test(t)) return Boolean(t);
        if (/^\s*\[/.test(t))
          try {
            return JSON.parse(t);
          } catch (e) {
            throw new Error(`解析数组${t}失败`);
          }
        if (/^\s*\{/.test(t))
          try {
            return JSON.parse(t);
          } catch (e) {
            throw new Error(`解析对象${t}失败`);
          }
        return t;
      }
      function d(t) {
        return (
          c[t] ||
          t.startsWith('rgb(') ||
          t.startsWith('rgba(') ||
          (t.startsWith('#') && !isNaN(Number(`0x${t.slice(1)}`)))
        );
      }
      function f(t, e) {
        t &&
          e &&
          (t.attrs.id && e('id', t.attrs.id),
          t.attrs.class &&
            p(t.attrs.class, /\s+/g).forEach((t) => {
              return e('class', t);
            }),
          e('tagName', t.tagName));
      }
      function p(t, e) {
        return e
          ? t.split(e).filter((t) => {
              return t != '';
            })
          : [t];
      }
      function g(t, e) {
        if (!t || !e) return !1;
        const n = e.match(/(^[^\.#]+)/g);
        const r = e.match(/#[^\.#]+/g);
        const i = e.match(/\.[^\.#]+/g);
        const o = Object(h.f)(Object(h.f)(Object(h.f)([], n || []), r || []), i || []);
        const a = {};
        f(t, (t, e) => {
          switch (t) {
            case 'id':
              a[`#${e}`] = 1;
              break;
            case 'class':
              a[`.${e}`] = 1;
              break;
            case 'tagName':
              a[`${e}`] = 1;
          }
        });
        for (let s = 0, u = o; s < u.length; s++) {
          const c = u[s];
          if (!a[c]) return !1;
        }
        return !0;
      }
      !(function (t) {
        (t[(t.aliceblue = 0)] = 'aliceblue'),
          (t[(t.antiquewhite = 1)] = 'antiquewhite'),
          (t[(t.aqua = 2)] = 'aqua'),
          (t[(t.aquamarine = 3)] = 'aquamarine'),
          (t[(t.azure = 4)] = 'azure'),
          (t[(t.beige = 5)] = 'beige'),
          (t[(t.bisque = 6)] = 'bisque'),
          (t[(t.black = 7)] = 'black'),
          (t[(t.blanchedalmond = 8)] = 'blanchedalmond'),
          (t[(t.blue = 9)] = 'blue'),
          (t[(t.blueviolet = 10)] = 'blueviolet'),
          (t[(t.brown = 11)] = 'brown'),
          (t[(t.burlywood = 12)] = 'burlywood'),
          (t[(t.cadetblue = 13)] = 'cadetblue'),
          (t[(t.chartreuse = 14)] = 'chartreuse'),
          (t[(t.chocolate = 15)] = 'chocolate'),
          (t[(t.coral = 16)] = 'coral'),
          (t[(t.cornflowerblue = 17)] = 'cornflowerblue'),
          (t[(t.cornsilk = 18)] = 'cornsilk'),
          (t[(t.crimson = 19)] = 'crimson'),
          (t[(t.cyan = 20)] = 'cyan'),
          (t[(t.darkblue = 21)] = 'darkblue'),
          (t[(t.darkcyan = 22)] = 'darkcyan'),
          (t[(t.darkgoldenrod = 23)] = 'darkgoldenrod'),
          (t[(t.darkgray = 24)] = 'darkgray'),
          (t[(t.darkgreen = 25)] = 'darkgreen'),
          (t[(t.darkgrey = 26)] = 'darkgrey'),
          (t[(t.darkkhaki = 27)] = 'darkkhaki'),
          (t[(t.darkmagenta = 28)] = 'darkmagenta'),
          (t[(t.darkolivegreen = 29)] = 'darkolivegreen'),
          (t[(t.darkorange = 30)] = 'darkorange'),
          (t[(t.darkorchid = 31)] = 'darkorchid'),
          (t[(t.darkred = 32)] = 'darkred'),
          (t[(t.darksalmon = 33)] = 'darksalmon'),
          (t[(t.darkseagreen = 34)] = 'darkseagreen'),
          (t[(t.darkslateblue = 35)] = 'darkslateblue'),
          (t[(t.darkslategray = 36)] = 'darkslategray'),
          (t[(t.darkslategrey = 37)] = 'darkslategrey'),
          (t[(t.darkturquoise = 38)] = 'darkturquoise'),
          (t[(t.darkviolet = 39)] = 'darkviolet'),
          (t[(t.deeppink = 40)] = 'deeppink'),
          (t[(t.deepskyblue = 41)] = 'deepskyblue'),
          (t[(t.dimgray = 42)] = 'dimgray'),
          (t[(t.dimgrey = 43)] = 'dimgrey'),
          (t[(t.dodgerblue = 44)] = 'dodgerblue'),
          (t[(t.firebrick = 45)] = 'firebrick'),
          (t[(t.floralwhite = 46)] = 'floralwhite'),
          (t[(t.forestgreen = 47)] = 'forestgreen'),
          (t[(t.fuchsia = 48)] = 'fuchsia'),
          (t[(t.gainsboro = 49)] = 'gainsboro'),
          (t[(t.ghostwhite = 50)] = 'ghostwhite'),
          (t[(t.gold = 51)] = 'gold'),
          (t[(t.goldenrod = 52)] = 'goldenrod'),
          (t[(t.gray = 53)] = 'gray'),
          (t[(t.green = 54)] = 'green'),
          (t[(t.greenyellow = 55)] = 'greenyellow'),
          (t[(t.grey = 56)] = 'grey'),
          (t[(t.honeydew = 57)] = 'honeydew'),
          (t[(t.hotpink = 58)] = 'hotpink'),
          (t[(t.indianred = 59)] = 'indianred'),
          (t[(t.indigo = 60)] = 'indigo'),
          (t[(t.ivory = 61)] = 'ivory'),
          (t[(t.khaki = 62)] = 'khaki'),
          (t[(t.lavender = 63)] = 'lavender'),
          (t[(t.lavenderblush = 64)] = 'lavenderblush'),
          (t[(t.lawngreen = 65)] = 'lawngreen'),
          (t[(t.lemonchiffon = 66)] = 'lemonchiffon'),
          (t[(t.lightblue = 67)] = 'lightblue'),
          (t[(t.lightcoral = 68)] = 'lightcoral'),
          (t[(t.lightcyan = 69)] = 'lightcyan'),
          (t[(t.lightgoldenrodyellow = 70)] = 'lightgoldenrodyellow'),
          (t[(t.lightgray = 71)] = 'lightgray'),
          (t[(t.lightgreen = 72)] = 'lightgreen'),
          (t[(t.lightgrey = 73)] = 'lightgrey'),
          (t[(t.lightpink = 74)] = 'lightpink'),
          (t[(t.lightsalmon = 75)] = 'lightsalmon'),
          (t[(t.lightseagreen = 76)] = 'lightseagreen'),
          (t[(t.lightskyblue = 77)] = 'lightskyblue'),
          (t[(t.lightslategray = 78)] = 'lightslategray'),
          (t[(t.lightslategrey = 79)] = 'lightslategrey'),
          (t[(t.lightsteelblue = 80)] = 'lightsteelblue'),
          (t[(t.lightyellow = 81)] = 'lightyellow'),
          (t[(t.lime = 82)] = 'lime'),
          (t[(t.limegreen = 83)] = 'limegreen'),
          (t[(t.linen = 84)] = 'linen'),
          (t[(t.magenta = 85)] = 'magenta'),
          (t[(t.maroon = 86)] = 'maroon'),
          (t[(t.mediumaquamarine = 87)] = 'mediumaquamarine'),
          (t[(t.mediumblue = 88)] = 'mediumblue'),
          (t[(t.mediumorchid = 89)] = 'mediumorchid'),
          (t[(t.mediumpurple = 90)] = 'mediumpurple'),
          (t[(t.mediumseagreen = 91)] = 'mediumseagreen'),
          (t[(t.mediumslateblue = 92)] = 'mediumslateblue'),
          (t[(t.mediumspringgreen = 93)] = 'mediumspringgreen'),
          (t[(t.mediumturquoise = 94)] = 'mediumturquoise'),
          (t[(t.mediumvioletred = 95)] = 'mediumvioletred'),
          (t[(t.midnightblue = 96)] = 'midnightblue'),
          (t[(t.mintcream = 97)] = 'mintcream'),
          (t[(t.mistyrose = 98)] = 'mistyrose'),
          (t[(t.moccasin = 99)] = 'moccasin'),
          (t[(t.navajowhite = 100)] = 'navajowhite'),
          (t[(t.navy = 101)] = 'navy'),
          (t[(t.oldlace = 102)] = 'oldlace'),
          (t[(t.olive = 103)] = 'olive'),
          (t[(t.olivedrab = 104)] = 'olivedrab'),
          (t[(t.orange = 105)] = 'orange'),
          (t[(t.orangered = 106)] = 'orangered'),
          (t[(t.orchid = 107)] = 'orchid'),
          (t[(t.palegoldenrod = 108)] = 'palegoldenrod'),
          (t[(t.palegreen = 109)] = 'palegreen'),
          (t[(t.paleturquoise = 110)] = 'paleturquoise'),
          (t[(t.palevioletred = 111)] = 'palevioletred'),
          (t[(t.papayawhip = 112)] = 'papayawhip'),
          (t[(t.peachpuff = 113)] = 'peachpuff'),
          (t[(t.peru = 114)] = 'peru'),
          (t[(t.pink = 115)] = 'pink'),
          (t[(t.plum = 116)] = 'plum'),
          (t[(t.powderblue = 117)] = 'powderblue'),
          (t[(t.purple = 118)] = 'purple'),
          (t[(t.red = 119)] = 'red'),
          (t[(t.rosybrown = 120)] = 'rosybrown'),
          (t[(t.royalblue = 121)] = 'royalblue'),
          (t[(t.saddlebrown = 122)] = 'saddlebrown'),
          (t[(t.salmon = 123)] = 'salmon'),
          (t[(t.sandybrown = 124)] = 'sandybrown'),
          (t[(t.seagreen = 125)] = 'seagreen'),
          (t[(t.seashell = 126)] = 'seashell'),
          (t[(t.sienna = 127)] = 'sienna'),
          (t[(t.silver = 128)] = 'silver'),
          (t[(t.skyblue = 129)] = 'skyblue'),
          (t[(t.slateblue = 130)] = 'slateblue'),
          (t[(t.slategray = 131)] = 'slategray'),
          (t[(t.slategrey = 132)] = 'slategrey'),
          (t[(t.snow = 133)] = 'snow'),
          (t[(t.springgreen = 134)] = 'springgreen'),
          (t[(t.steelblue = 135)] = 'steelblue'),
          (t[(t.tan = 136)] = 'tan'),
          (t[(t.teal = 137)] = 'teal'),
          (t[(t.thistle = 138)] = 'thistle'),
          (t[(t.tomato = 139)] = 'tomato'),
          (t[(t.turquoise = 140)] = 'turquoise'),
          (t[(t.violet = 141)] = 'violet'),
          (t[(t.wheat = 142)] = 'wheat'),
          (t[(t.white = 143)] = 'white'),
          (t[(t.whitesmoke = 144)] = 'whitesmoke'),
          (t[(t.yellow = 145)] = 'yellow'),
          (t[(t.yellowgreen = 146)] = 'yellowgreen');
      })(c || (c = {}));
      const y = {
        position: 1,
        display: 1,
        width: 1,
        height: 1,
        minWidth: 1,
        minHeight: 1,
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        flex: 1,
        margin: 1,
        marginLeft: 1,
        marginRight: 1,
        marginTop: 1,
        marginBottom: 1,
        padding: 1,
        paddingLeft: 1,
        paddingRight: 1,
        paddingTop: 1,
        paddingBottom: 1,
        borderWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 1,
        justifyContent: 1,
        alignItems: 1,
        alignSelf: 1,
        flexWrap: 1,
      };
      const v = {};
      function m(t, e) {
        if (t) {
          let n = t;
          Array.isArray(n) || (n = [n]),
            n.forEach((t) => {
              v[t] = typeof e === 'function' ? e : l;
            });
        }
      }
      const b = function (t, e) {
        const n = {};
        const r = e.split(/\s/g).filter((t) => {
          return t !== '';
        });
        return (
          r.length !== 1 || isNaN(r[0]) || (n[`${t}`] = Number(r[0])),
          r.length === 2 &&
            (!isNaN(Number(r[0])) && (n[`${t}Bottom`] = n[`${t}Top`] = Number(r[0])),
            !isNaN(Number(r[1])) && (n[`${t}Left`] = n[`${t}Right`] = Number(r[1]))),
          r.length === 3 &&
            (!isNaN(Number(r[0])) && (n[`${t}Top`] = Number(r[0])),
            !isNaN(Number(r[1])) && (n[`${t}Left`] = n[`${t}Right`] = Number(r[1])),
            !isNaN(Number(r[2])) && (n[`${t}Bottom`] = Number(r[2]))),
          r.length === 4 &&
            (!isNaN(Number(r[0])) && (n[`${t}Top`] = Number(r[0])),
            !isNaN(Number(r[1])) && (n[`${t}Right`] = Number(r[1])),
            !isNaN(Number(r[2])) && (n[`${t}Bottom`] = Number(r[2])),
            !isNaN(Number(r[3])) && (n[`${t}Left`] = Number(r[3]))),
          n
        );
      };
      const x = ['solid', 'dashed'];
      function w(t, e) {
        if (v[t]) return v[t](e);
        try {
          return l(e);
        } catch (t) {
          return console.error(t), e;
        }
      }
      m('padding', b.bind(null, 'padding')),
        m('margin', b.bind(null, 'margin')),
        m('border-radius', (t) => {
          const e = {};
          const n = t.split(/\s/g).filter((t) => {
            return t !== '';
          });
          return (
            n.length !== 1 ||
              isNaN(n[0]) ||
              ((e.borderTopLeftRadius = Number(n[0])),
              (e.borderTopRightRadius = Number(n[0])),
              (e.borderBottomRightRadius = Number(n[0])),
              (e.borderBottomLeftRadius = Number(n[0]))),
            n.length === 2 &&
              (!isNaN(Number(n[0])) &&
                (e.borderTopLeftRadius = e.borderBottomRightRadius = Number(n[0])),
              !isNaN(Number(n[2])) &&
                (e.borderBottomLeftRadius = e.borderTopRightRadius = Number(n[1]))),
            n.length === 3 &&
              (!isNaN(Number(n[0])) && (e.borderTopLeftRadius = Number(n[0])),
              !isNaN(Number(n[1])) &&
                (e.borderBottomLeftRadius = e.borderTopRightRadius = Number(n[1])),
              !isNaN(Number(n[2])) && (e.borderBottomRightRadius = Number(n[2]))),
            n.length === 4 &&
              (!isNaN(Number(n[0])) && (e.borderTopLeftRadius = Number(n[0])),
              !isNaN(Number(n[1])) && (e.borderTopRightRadius = Number(n[1])),
              !isNaN(Number(n[2])) && (e.borderBottomRightRadius = Number(n[2])),
              !isNaN(Number(n[3])) && (e.borderBottomLeftRadius = Number(n[3]))),
            e
          );
        }),
        m('border', (t) => {
          for (
            var e = {},
              n = 0,
              r = t.split(/\s/g).filter((t) => {
                return t !== '';
              });
            n < r.length;
            n++
          ) {
            const i = r[n];
            isNaN(Number(i))
              ? d(i)
                ? (e.borderColor = i)
                : x.includes(i) && (e.borderStyle = i)
              : (e.borderWidth = Number(i));
          }
          return e;
        }),
        m('background', (t) => {
          for (
            var e = {},
              n = 0,
              r = t.split(/\s/g).filter((t) => {
                return t !== '';
              });
            n < r.length;
            n++
          )
            if (d((t = r[n]))) e.backgroundColor = t;
            else if (t == null ? void 0 : t.startsWith('url')) {
              const i = t.match(/url\((.+?)\)/);
              i && (e.backgroundImage = i[1]);
            }
          return e;
        }),
        m(['box-shadow', 'text-shadow'], (t) => {
          for (
            var e = {},
              n = t.split(/\s/g).filter((t) => {
                return t !== '';
              }),
              r = ['shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor'];
            n.length;

          ) {
            const i = n.shift();
            if (isNaN(Number(i))) d(i) && (e.shadowColor = i);
            else e[r.shift()] = Number(i);
          }
          return e;
        });
      const O = function () {
        (this.type = ''),
          (this.tagName = ''),
          (this.attrs = {}),
          (this.children = []),
          (this.text = '');
      };
      const M = (function () {
        function t(t) {
          (this.input = ''), (this.index = 0), (this.input = t);
        }
        return (
          (t.prototype.stepNext = function () {
            this.index++;
          }),
          (t.prototype.cur = function () {
            return this.input[this.index];
          }),
          (t.prototype.twoChar = function () {
            return this.input[this.index] + this.input[this.index + 1];
          }),
          (t.prototype.stepWhile = function (t) {
            for (var e = ''; this.index < this.input.length && t && t(this.input[this.index]); )
              e += this.input[this.index++];
            return e;
          }),
          (t.prototype.skipWhiteSpace = function () {
            this.stepWhile((t) => {
              return /\s/.test(t);
            });
          }),
          (t.prototype.getText = function () {
            return this.stepWhile((t) => {
              return /[a-zA-Z0-9_]/.test(t);
            });
          }),
          (t.prototype.eof = function () {
            return this.index >= this.input.length;
          }),
          t
        );
      })();
      const S = (function () {
        function t(t) {
          this.helper = new M(t);
        }
        return (
          (t.prototype.parse = function () {
            return this.parseNodes();
          }),
          (t.prototype.parseNodes = function () {
            for (
              var t = [];
              t.push(this.parseNode()),
                this.helper.skipWhiteSpace(),
                !this.helper.eof() && this.helper.twoChar() !== '</';

            );
            return t;
          }),
          (t.prototype.parseNode = function () {
            return (
              this.helper.skipWhiteSpace(),
              this.helper.cur() === '<' ? this.parseElement() : this.parseTextNode()
            );
          }),
          (t.prototype.parseElement = function () {
            let t;
            const e = new O();
            (e.type = 'element'), this.helper.stepNext();
            const n = this.helper.getText();
            if (
              ((e.tagName = n), (e.attrs = this.parseAttributes()), this.helper.twoChar() === '/>')
            )
              return this.helper.stepNext(), this.helper.stepNext(), e;
            if (this.helper.cur() !== '>') throw new Error('解析标签开始失败');
            if (
              (this.helper.stepNext(),
              this.helper.skipWhiteSpace(),
              this.helper.twoChar() !== '</' &&
                ((t = e.children).push.apply(t, this.parseNodes()), this.helper.skipWhiteSpace()),
              this.helper.twoChar() !== '</')
            )
              throw new Error('解析标签结束失败');
            if ((this.helper.stepNext(), this.helper.stepNext(), this.helper.getText() !== n))
              throw new Error('解析标签结束失败');
            if (this.helper.cur() !== '>') throw new Error('解析标签结束失败');
            return this.helper.stepNext(), e;
          }),
          (t.prototype.parseTextNode = function () {
            const t = new O();
            const e = this.helper.stepWhile((t) => {
              return /[^<]/.test(t);
            });
            return (t.type = 'text'), (t.tagName = 'text'), (t.text = e), t;
          }),
          (t.prototype.parseAttributes = function () {
            const t = {};
            for (
              this.helper.skipWhiteSpace();
              !this.helper.eof() && this.helper.cur() !== '>' && this.helper.twoChar() !== '/>';

            ) {
              const e = this.helper.stepWhile((t) => {
                return /[^\s=]/.test(t);
              });
              this.helper.skipWhiteSpace(), this.helper.stepNext(), this.helper.skipWhiteSpace();
              let n = '';
              this.helper.cur() === '"'
                ? (this.helper.stepNext(),
                  (n = this.helper.stepWhile((t) => {
                    return /[^"]/.test(t);
                  })),
                  this.helper.stepNext())
                : this.helper.cur() === "'"
                ? (this.helper.stepNext(),
                  (n = this.helper.stepWhile((t) => {
                    return /[^']/.test(t);
                  })),
                  this.helper.stepNext())
                : (n = this.helper.stepWhile((t) => {
                    return /[^\s</>/]/.test(t);
                  })),
                (t[e] = w(e, n)),
                this.helper.skipWhiteSpace();
            }
            return t;
          }),
          (t.prototype.removeQuote = function (t) {
            let e = t;
            return (
              /^["']/.test(e[0]) && (e = e.slice(1)),
              /["']$/.test(e[e.length - 1]) && (e = e.slice(0, -1)),
              e
            );
          }),
          t
        );
      })();
      function C(t) {
        return (C =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      const j = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
      function k(t) {
        return t ? t.replace(/^\s+|\s+$/g, '') : '';
      }
      const A = function (t, e) {
        e = e || {};
        let n = 1;
        let r = 1;
        function i(t) {
          const e = t.match(/\n/g);
          e && (n += e.length);
          const i = t.lastIndexOf('\n');
          r = ~i ? t.length - i : r + t.length;
        }
        function o() {
          const t = { line: n, column: r };
          return function (e) {
            return (e.position = new a(t)), f(), e;
          };
        }
        function a(t) {
          (this.start = t), (this.end = { line: n, column: r }), (this.source = e.source);
        }
        a.prototype.content = t;
        const s = [];
        function u(i) {
          const o = new Error(`${e.source}:${n}:${r}: ${i}`);
          if (
            ((o.reason = i),
            (o.filename = e.source),
            (o.line = n),
            (o.column = r),
            (o.source = t),
            !e.silent)
          )
            throw o;
          s.push(o);
        }
        function c() {
          return d(/^{\s*/);
        }
        function h() {
          return d(/^}/);
        }
        function l() {
          let e;
          const n = [];
          for (f(), p(n); t.length && t.charAt(0) != '}' && (e = A() || E()); )
            !1 !== e && (n.push(e), p(n));
          return n;
        }
        function d(e) {
          const n = e.exec(t);
          if (n) {
            const r = n[0];
            return i(r), (t = t.slice(r.length)), n;
          }
        }
        function f() {
          d(/^\s*/);
        }
        function p(t) {
          let e;
          for (t = t || []; (e = g()); ) !1 !== e && t.push(e);
          return t;
        }
        function g() {
          const e = o();
          if (t.charAt(0) == '/' && t.charAt(1) == '*') {
            for (var n = 2; t.charAt(n) != '' && (t.charAt(n) != '*' || t.charAt(n + 1) != '/'); )
              ++n;
            if (((n += 2), t.charAt(n - 1) === '')) return u('End of comment missing');
            const a = t.slice(2, n - 2);
            return (r += 2), i(a), (t = t.slice(n)), (r += 2), e({ type: 'comment', comment: a });
          }
        }
        function y() {
          const t = d(/^([^{]+)/);
          if (t)
            return k(t[0])
              .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
              .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (t) => {
                return t.replace(/,/g, '‌');
              })
              .split(/\s*(?![^(]*\)),\s*/)
              .map((t) => {
                return t.replace(/\u200C/g, ',');
              });
        }
        function v() {
          const t = o();
          let e = d(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
          if (e) {
            if (((e = k(e[0])), !d(/^:\s*/))) return u("property missing ':'");
            const n = d(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
            const r = t({
              type: 'declaration',
              property: e.replace(j, ''),
              value: n ? k(n[0]).replace(j, '') : '',
            });
            return d(/^[;\s]*/), r;
          }
        }
        function m() {
          let t;
          const e = [];
          if (!c()) return u("missing '{'");
          for (p(e); (t = v()); ) !1 !== t && (e.push(t), p(e));
          return h() ? e : u("missing '}'");
        }
        function b() {
          for (var t, e = [], n = o(); (t = d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)); )
            e.push(t[1]), d(/^,\s*/);
          if (e.length) return n({ type: 'keyframe', values: e, declarations: m() });
        }
        let x;
        const w = S('import');
        const O = S('charset');
        const M = S('namespace');
        function S(t) {
          const e = new RegExp(`^@${t}\\s*([^;]+);`);
          return function () {
            const n = o();
            const r = d(e);
            if (r) {
              const i = { type: t };
              return (i[t] = r[1].trim()), n(i);
            }
          };
        }
        function A() {
          if (t[0] == '@')
            return (
              (function () {
                const t = o();
                if ((e = d(/^@([-\w]+)?keyframes\s*/))) {
                  var e;
                  const n = e[1];
                  if (!(e = d(/^([-\w]+)\s*/))) return u('@keyframes missing name');
                  let r;
                  const i = e[1];
                  if (!c()) return u("@keyframes missing '{'");
                  for (var a = p(); (r = b()); ) a.push(r), (a = a.concat(p()));
                  return h()
                    ? t({ type: 'keyframes', name: i, vendor: n, keyframes: a })
                    : u("@keyframes missing '}'");
                }
              })() ||
              (function () {
                const t = o();
                const e = d(/^@media *([^{]+)/);
                if (e) {
                  const n = k(e[1]);
                  if (!c()) return u("@media missing '{'");
                  const r = p().concat(l());
                  return h() ? t({ type: 'media', media: n, rules: r }) : u("@media missing '}'");
                }
              })() ||
              (function () {
                const t = o();
                const e = d(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                if (e) return t({ type: 'custom-media', name: k(e[1]), media: k(e[2]) });
              })() ||
              (function () {
                const t = o();
                const e = d(/^@supports *([^{]+)/);
                if (e) {
                  const n = k(e[1]);
                  if (!c()) return u("@supports missing '{'");
                  const r = p().concat(l());
                  return h()
                    ? t({ type: 'supports', supports: n, rules: r })
                    : u("@supports missing '}'");
                }
              })() ||
              w() ||
              O() ||
              M() ||
              (function () {
                const t = o();
                const e = d(/^@([-\w]+)?document *([^{]+)/);
                if (e) {
                  const n = k(e[1]);
                  const r = k(e[2]);
                  if (!c()) return u("@document missing '{'");
                  const i = p().concat(l());
                  return h()
                    ? t({ type: 'document', document: r, vendor: n, rules: i })
                    : u("@document missing '}'");
                }
              })() ||
              (function () {
                const t = o();
                if (d(/^@page */)) {
                  const e = y() || [];
                  if (!c()) return u("@page missing '{'");
                  for (var n, r = p(); (n = v()); ) r.push(n), (r = r.concat(p()));
                  return h()
                    ? t({ type: 'page', selectors: e, declarations: r })
                    : u("@page missing '}'");
                }
              })() ||
              (function () {
                const t = o();
                if (d(/^@host\s*/)) {
                  if (!c()) return u("@host missing '{'");
                  const e = p().concat(l());
                  return h() ? t({ type: 'host', rules: e }) : u("@host missing '}'");
                }
              })() ||
              (function () {
                const t = o();
                if (d(/^@font-face\s*/)) {
                  if (!c()) return u("@font-face missing '{'");
                  for (var e, n = p(); (e = v()); ) n.push(e), (n = n.concat(p()));
                  return h()
                    ? t({ type: 'font-face', declarations: n })
                    : u("@font-face missing '}'");
                }
              })()
            );
        }
        function E() {
          const t = o();
          const e = y();
          return e
            ? (p(), t({ type: 'rule', selectors: e, declarations: m() }))
            : u('selector missing');
        }
        return (function t(e, n) {
          const r = e && typeof e.type === 'string';
          const i = r ? e : n;
          for (const o in e) {
            const a = e[o];
            Array.isArray(a)
              ? a.forEach((e) => {
                  t(e, i);
                })
              : a && C(a) === 'object' && t(a, i);
          }
          r &&
            Object.defineProperty(e, 'parent', {
              configurable: !0,
              writable: !0,
              enumerable: !1,
              value: n || null,
            });
          return e;
        })(
          ((x = l()),
          { type: 'stylesheet', stylesheet: { source: e.source, rules: x, parsingErrors: s } }),
        );
      };
      const E = n(41);
      const P = n.n(E);
      function N(t) {
        return (N =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      const T = function () {
        (this.dom = null), (this.style = null), (this.children = []), (this.originChildren = []);
      };
      const I = { 'font-family': 'serif' };
      const B = [
        'font',
        'fontFamily',
        'fontWeight',
        'fontSize',
        'fontVariant',
        'fontStretch',
        'textIndent',
        'textAlign',
        'textShadow',
        'lineHeight',
        'color',
        'direction',
        'wordSpacing',
        'letterSpacing',
        'textTransform',
        'captionSide',
        'borderCollapse',
        'emptyCells',
        'listStyleType',
        'listStyleImage',
        'listStylePosition',
        'listStyle',
        'visibility',
        'cursor',
      ];
      const L = (function () {
        function t(t, e) {
          (this.domTree = null),
            (this.cssTree = null),
            (this.rulesHash = { ids: {}, classes: {}, tagNames: {} }),
            (this.domTree = t),
            (this.cssTree = e);
        }
        return (
          (t.prototype.parse = function () {
            return this.parseRulesHash(this.cssTree), this.genStyleTree(this.domTree);
          }),
          (t.prototype.parseRulesHash = function (t) {
            for (let e = this.rulesHash, n = 0, r = t.stylesheet.rules; n < r.length; n++) {
              const i = r[n];
              if (i.type === 'rule')
                for (let o = 0, a = i.selectors; o < a.length; o++) {
                  const s = a[o];
                  const u = this.genKeySelector(s);
                  switch (u[0]) {
                    case '#':
                      var c = u.slice(1);
                      e.ids[c] = Object(h.f)(Object(h.f)([], e.ids[c] || []), [
                        {
                          selector: s,
                          specificity: this.genSpecificity(s),
                          style: this.genStyleFromRule(i),
                        },
                      ]);
                      break;
                    case '.':
                      var l = u.slice(1);
                      e.classes[l] = Object(h.f)(Object(h.f)([], e.classes[l] || []), [
                        {
                          selector: s,
                          specificity: this.genSpecificity(s),
                          style: this.genStyleFromRule(i),
                        },
                      ]);
                      break;
                    default:
                      e.tagNames[u] = Object(h.f)(Object(h.f)([], e.tagNames[u] || []), [
                        {
                          selector: s,
                          specificity: this.genSpecificity(s),
                          style: this.genStyleFromRule(i),
                        },
                      ]);
                  }
                }
            }
          }),
          (t.prototype.genStyleTree = function (t) {
            for (var e = new T(), n = [[t, [], e]]; n.length; ) {
              const r = n.pop();
              const i = r[0];
              const o = r[1];
              const a = r[2];
              const s = r[3];
              (a.dom = i), (a.style = this.computeCSS(i, o, s == null ? void 0 : s.style));
              for (let u = 0, c = i.children; u < c.length; u++) {
                const l = c[u];
                const d = new T();
                a.originChildren.push(d), n.push([l, Object(h.f)(Object(h.f)([], o), [i]), d, a]);
              }
            }
            return e;
          }),
          (t.prototype.genSpecificity = function (t) {
            let e;
            let n;
            const r = ((e = t.match(/#\w+/g)) === null || void 0 === e ? void 0 : e.length) || 0;
            const i = ((n = t.match(/\.\w+/g)) === null || void 0 === n ? void 0 : n.length) || 0;
            return (
              100 * r +
              10 * i +
              (t.split(/\s+|#|\./).filter((t) => {
                return t !== '';
              }).length -
                r -
                i)
            );
          }),
          (t.prototype.genKeySelector = function (t) {
            const e = p(t, /\s/).pop();
            let n = e.match(/(#[^\.#]+)/);
            return (n == null ? void 0 : n.length) > 0 ||
              ((n = e.match(/\.[^\.#]+/)) == null ? void 0 : n.length) > 0
              ? n[0]
              : e;
          }),
          (t.prototype.genStyleFromRule = function (t) {
            return this.genStyleFromDeclaration(t.declarations);
          }),
          (t.prototype.genStyleFromDeclaration = function (t) {
            const e = {};
            return (
              t.forEach((t) => {
                const n = t.value;
                e[t.property] = n;
              }),
              e
            );
          }),
          (t.prototype.computeCSS = function (t, e, n) {
            const r = this;
            const i = [];
            f(t, (t, e) => {
              switch (t) {
                case 'id':
                  i.push.apply(i, r.rulesHash.ids[e] || []);
                  break;
                case 'class':
                  i.push.apply(i, r.rulesHash.classes[e] || []);
                  break;
                case 'tagName':
                  i.push.apply(i, r.rulesHash.tagNames[e] || []);
              }
            });
            const o = i.filter((t) => {
              for (
                var n = p(t.selector, /\s+/g), r = n.length - 2, i = e.length - 1, o = !0;
                r > -1;
                r--
              ) {
                for (var a = !1; i > -1; i--) {
                  if (g(e[i], n[r])) {
                    a = !0;
                    break;
                  }
                }
                if (!a) {
                  o = !1;
                  break;
                }
              }
              return o;
            });
            o.sort((t, e) => {
              return t.specificity - e.specificity;
            });
            for (
              var a = o.reduce((t, e) => {
                  return Object.assign(t, e.style);
                }, Object(h.a)({}, I)),
                s = {},
                u = 0,
                c = Object.entries(a);
              u < c.length;
              u++
            ) {
              const l = c[u];
              var d = l[0];
              var y = l[1];
              const v = d
                .split('-')
                .map((t, e) => {
                  return e > 0 ? `${t[0].toUpperCase()}${t.slice(1)}` : t;
                })
                .join('');
              const m = w(d, y);
              N(m) === 'object' ? (s = Object(h.a)(Object(h.a)({}, s), m)) : (s[v] = m);
            }
            if (n) {
              for (let b = 0, x = Object.entries(s); b < x.length; b++) {
                const O = x[b];
                d = O[0];
                (y = O[1]) === 'inherit' &&
                  B.includes(d) &&
                  (delete s[d], void 0 !== n[d] && (s[d] = n[d]));
              }
              for (let M = 0, S = Object.entries(n); M < S.length; M++) {
                const C = S[M];
                (d = C[0]), (y = C[1]);
                B.includes(d) && !s[d] && (s[d] = y);
              }
            }
            return s;
          }),
          t
        );
      })();
      const D = {};
      function _(t, e) {
        D[t] = e;
      }
      function Y(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        const r = D[t];
        if (!r) throw new Error(`找不到标签${t}的构造函数`);
        const i = new (r.bind.apply(r, Object(h.f)([void 0], e)))();
        return i;
      }
      const R = (function () {
        function t(t) {
          const e = this;
          (this.styleNode = null),
            (this.gNode = null),
            (this.parent = null),
            (this.children = []),
            (this.isMounted = !1),
            (this.isDisplay = !0),
            (this._parentGNode = null),
            (this._prevAttrs = null),
            (this._prevStyle = null),
            (this._prevLayout = null),
            (this.events = {}),
            (this.trigger = function (t) {
              for (var n, r, i = t.target; i && !i.get('uiNode'); ) i = i.get('parent');
              (t.targetGNode = i || null),
                (t.uiNode =
                  (n = i == null ? void 0 : i.get('uiNode')) !== null && void 0 !== n ? n : null),
                (r = e.events[t.type]) === null ||
                  void 0 === r ||
                  r.forEach((n) => {
                    return n(t, e);
                  });
            }),
            (this.styleNode = t);
        }
        return (
          Object.defineProperty(t.prototype, 'top', {
            get() {
              let t;
              let e;
              return (e = (t = this.styleNode) === null || void 0 === t ? void 0 : t.layout) ===
                null || void 0 === e
                ? void 0
                : e.top;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'left', {
            get() {
              let t;
              let e;
              return (e = (t = this.styleNode) === null || void 0 === t ? void 0 : t.layout) ===
                null || void 0 === e
                ? void 0
                : e.left;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'width', {
            get() {
              let t;
              let e;
              return (e = (t = this.styleNode) === null || void 0 === t ? void 0 : t.layout) ===
                null || void 0 === e
                ? void 0
                : e.width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'height', {
            get() {
              let t;
              let e;
              return (e = (t = this.styleNode) === null || void 0 === t ? void 0 : t.layout) ===
                null || void 0 === e
                ? void 0
                : e.height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'tagName', {
            get() {
              let t;
              let e;
              return (e = (t = this.styleNode) === null || void 0 === t ? void 0 : t.dom) ===
                null || void 0 === e
                ? void 0
                : e.tagName;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'style', {
            get() {
              let t;
              return (t = this.styleNode) === null || void 0 === t ? void 0 : t.style;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'attributes', {
            get() {
              let t;
              let e;
              return (e = (t = this.styleNode) === null || void 0 === t ? void 0 : t.dom) ===
                null || void 0 === e
                ? void 0
                : e.attrs;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, '_layout', {
            get() {
              let t;
              return (t = this.styleNode) === null || void 0 === t ? void 0 : t._layout;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'parentGNode', {
            get() {
              let t;
              return (
                ((t = this.parent) === null || void 0 === t ? void 0 : t.gNode) || this._parentGNode
              );
            },
            set(t) {
              this._parentGNode = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.setParent = function (t) {
            this.parent = t;
          }),
          (t.prototype.appendChild = function () {
            for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            e.forEach((e) => {
              e.setParent(t),
                t.children.push(e),
                e.styleNode &&
                  t.styleNode &&
                  !t.styleNode.originChildren.includes(e.styleNode) &&
                  t.styleNode.originChildren.push(e.styleNode);
            }),
              this.reflow();
          }),
          (t.prototype.removeChild = function (t) {
            t && t.remove();
          }),
          (t.prototype.remove = function () {
            let t;
            let e;
            const n = this.parent;
            (t = this.gNode) === null || void 0 === t || t.remove(),
              n &&
                (n.children.splice(1, n.children.indexOf(this)),
                (e = n.styleNode) === null ||
                  void 0 === e ||
                  e.children.splice(1, n.children.indexOf(this.styleNode)),
                this.isMounted && n.reflow()),
              this.isMounted && this.unmount();
          }),
          (t.prototype.query = function (t) {
            if (typeof t === 'string')
              for (
                let e = [
                  [
                    this,
                    t.split(/\s+/g).filter((t) => {
                      return t !== '';
                    }),
                  ],
                ];
                e.length;

              )
                for (
                  let n = e.shift(), r = n[0], i = n[1], o = 0, a = r.children;
                  o < a.length;
                  o++
                ) {
                  const s = a[o];
                  let u = [];
                  if (s.styleNode && g(s.styleNode.dom, i[0])) {
                    if (i.slice(1).length === 0) return s;
                    u = i.slice(1);
                  } else u = i;
                  e.push([s, u]);
                }
          }),
          (t.prototype.queryAll = function (t) {
            if (typeof t === 'string') {
              for (
                var e = [],
                  n = [
                    [
                      this,
                      t.split(/\s+/g).filter((t) => {
                        return t !== '';
                      }),
                      e,
                    ],
                  ];
                n.length;

              )
                for (
                  let r = n.shift(), i = r[0], o = r[1], a = r[2], s = 0, u = i.children;
                  s < u.length;
                  s++
                ) {
                  const c = u[s];
                  let h = [];
                  c.styleNode && g(c.styleNode.dom, o[0])
                    ? o.slice(1).length === 0
                      ? (a.push(c), (h = [o[0]]))
                      : (h = o.slice(1))
                    : (h = o),
                    n.push([c, h, a]);
                }
              return e;
            }
          }),
          (t.prototype.manualMount = function (t) {
            (this.parentGNode = t), this.layout(), this.mount();
          }),
          (t.prototype.reflow = function () {
            let t;
            this.parentGNode &&
              (((t = this.style) === null || void 0 === t ? void 0 : t.position) !== 'absolute' &&
              this.parent
                ? this.parent.reflow()
                : (this.layout(), this.render()));
          }),
          (t.prototype.layout = function () {
            (this._prevLayout = Object(h.a)({}, this._layout || {})),
              this.clearLayout(),
              (function (t) {
                for (var e = [t]; e.length; ) {
                  const n = e.pop();
                  n.children = n.originChildren.filter((t) => {
                    return t.style.display !== 'none' && (e.push(t), !0);
                  });
                }
                P()(t);
              })(this.styleNode);
          }),
          (t.prototype.mount = function () {
            let t;
            this.isMounted ||
              (((t = this.style) === null || void 0 === t ? void 0 : t.display) !== 'none'
                ? ((this._prevAttrs = this.attributes),
                  (this._prevStyle = this.style),
                  this.draw(this.parentGNode),
                  (this.isMounted = !0),
                  this.gNode.set('uiNode', this),
                  this.gNode.on('*', this.trigger),
                  this.children.forEach((t) => {
                    return t.mount();
                  }),
                  this.didMount())
                : (this.isDisplay = !1));
          }),
          (t.prototype.didMount = function () {}),
          (t.prototype.unmount = function () {
            this.isMounted &&
              ((this.isMounted = !1),
              this.children.forEach((t) => {
                return t.unmount();
              }),
              this.didUnmount());
          }),
          (t.prototype.didUnmount = function () {}),
          (t.prototype.render = function () {
            let t;
            let e;
            let n;
            if (this.isMounted) {
              if (((t = this.style) === null || void 0 === t ? void 0 : t.display) === 'none')
                return (
                  (this.isDisplay = !1),
                  (e = this.gNode) === null || void 0 === e || e.remove(!1),
                  !1
                );
              !1 === this.isDisplay &&
                ((this.isDisplay = !0),
                (n = this.parentGNode) === null || void 0 === n || n.add(this.gNode));
              const r = this.shouldUpdate(this._prevAttrs, this._prevStyle, this._prevLayout);
              r && this.draw(),
                this.children.forEach((t) => {
                  return t.render();
                }),
                r && this.didUpdate();
            } else this.mount();
          }),
          (t.prototype.didUpdate = function () {}),
          (t.prototype.shouldUpdate = function (t, e, n) {
            return !0;
          }),
          (t.prototype.draw = function (t) {}),
          (t.prototype.animate = function () {}),
          (t.prototype.clearLayout = function () {
            (this.styleNode.isDirty = !0),
              this.children.forEach((t) => {
                t.clearLayout();
              });
          }),
          (t.prototype.setAttribute = function (t, e) {
            let n;
            if (this.styleNode && this.styleNode.dom) {
              if (
                ((this._prevAttrs = Object(h.a)({}, this.styleNode.dom.attrs)),
                (this.styleNode.dom.attrs[t] = e),
                !((n = this.parent) === null || void 0 === n ? void 0 : n.isMounted))
              )
                return;
              this.render();
            }
          }),
          (t.prototype.setStyle = function (t, e) {
            if (this.styleNode && this.styleNode.style) {
              if (
                ((this._prevStyle = Object(h.a)({}, this.styleNode.dom.style)),
                (this.styleNode.style[t] = e),
                this.parent && !this.parent.isMounted)
              )
                return;
              y[t] ? this.reflow() : this.render();
            }
          }),
          (t.prototype.getAttribute = function (t) {
            let e;
            let n;
            return (n = (e = this.styleNode) === null || void 0 === e ? void 0 : e.dom) === null ||
              void 0 === n
              ? void 0
              : n.attrs[t];
          }),
          (t.prototype.getStyle = function (t) {
            let e;
            let n;
            let r;
            return (n = (e = this.styleNode) === null || void 0 === e ? void 0 : e.layout[t]) !==
              null && void 0 !== n
              ? n
              : (r = this.styleNode) === null || void 0 === r
              ? void 0
              : r.style[t];
          }),
          (t.prototype.setText = function (t) {
            const e = this.query('text');
            e && e.styleNode && e.styleNode.dom && ((e.styleNode.dom.text = t), e.render());
          }),
          (t.prototype.on = function (t, e) {
            this.events[t] = Object(h.f)(Object(h.f)([], this.events[t] || []), [e]);
          }),
          (t.prototype.off = function (t, e) {
            if (e) {
              const n = this.events[t];
              const r = n == null ? void 0 : n.indexOf(e);
              r && r !== -1 && (n == null || n.splice(r, 1));
            } else delete this.events[t];
          }),
          t
        );
      })();
      const F = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.backgroudNode = null), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.draw = function (t) {
            let e;
            let n;
            this.gNode ||
              (this.gNode = t.addGroup({
                id: (e = this.attributes) === null || void 0 === e ? void 0 : e.id,
                className: this.styleNode.dom.attrs.class,
              }));
            const r = this.gNode;
            const i = this.styleNode;
            r.resetMatrix(), (n = this.backgroudNode) === null || void 0 === n || n.remove();
            const o = (this.backgroudNode = r.addGroup());
            r.translate(this.left, this.top);
            const a = i.style;
            typeof a.zIndex === 'number' && r.setZIndex(a.zIndex),
              o.addShape('rect', {
                attrs: {
                  x: 0,
                  y: 0,
                  fill: a.backgroundColor || '#fff',
                  fillOpacity: a.backgroundOpacity,
                  opacity: a.opacity,
                  width: this.width,
                  height: this.height,
                  radius: [
                    a.borderTopLeftRadius || 0,
                    a.borderTopRightRadius || 0,
                    a.borderBottomLeftRadius || 0,
                    a.borderBottomLeftRadius || 0,
                  ],
                  shadowBlur: a.shadowBlur || 0,
                  shadowColor: a.shadowColor || null,
                  shadowOffsetX: a.shadowOffsetX || 0,
                  shadowOffsetY: a.shadowOffsetY || 0,
                },
                capture: a.pointerEvents !== 'none',
              }),
              a.backgroundImage &&
                o.addShape('image', {
                  attrs: { x: 0, y: 0, img: a.url, width: this.width, height: this.height },
                  capture: !1,
                });
            const s = {
              attrs: {
                x: (a.borderWidth || 0) / 2,
                y: (a.borderWidth || 0) / 2,
                lineWidth: a.borderWidth,
                stroke: a.borderColor,
                width: this.width - (a.borderWidth || 0),
                height: this.height - (a.borderWidth || 0),
                radius: [
                  (a.borderTopLeftRadius || 0) * ((this.width - (a.borderWidth || 0)) / this.width),
                  (a.borderTopRightRadius || 0) *
                    ((this.width - (a.borderWidth || 0)) / this.width),
                  (a.borderBottomLeftRadius || 0) *
                    ((this.width - (a.borderWidth || 0)) / this.width),
                  (a.borderBottomLeftRadius || 0) *
                    ((this.width - (a.borderWidth || 0)) / this.width),
                ],
              },
              capture: !1,
            };
            a.borderStyle === 'dashed' && (s.attrs.lineDash = a.lineDash || [2, 2]),
              o.addShape('rect', s),
              a.overflow === 'hidden' &&
                r.setClip({
                  type: 'rect',
                  attrs: {
                    width: this.width,
                    height: this.height,
                    radius: [
                      a.borderTopLeftRadius || 0,
                      a.borderTopRightRadius || 0,
                      a.borderBottomLeftRadius || 0,
                      a.borderBottomLeftRadius || 0,
                    ],
                  },
                }),
              o.toBack();
          }),
          e
        );
      })(R);
      const X = n(5);
      const z = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getAttrs = function () {
            const t = this.styleNode.style;
            const e = {
              x: this.styleNode.layout.left,
              y: this.styleNode.layout.top,
              textAlign: t.textAlign,
              fill: t.color,
              fontSize: t.fontSize || 12,
              fontStyle: t.fontStyle,
              fontFamily: t.fontFamily,
              lineHeight: t.lineHeight || 0,
              fontVariant: t.fontVariant,
              fontWeight: t.fontWeight,
              textBaseline: 'top',
              opacity: t.opacity,
              fillOpacity: t.backgroundOpacity,
            };
            return console.log('attrs: ', e), e;
          }),
          (e.prototype.draw = function (t) {
            const e = this.getAttrs();
            this.gNode ||
              (this.gNode = t.addShape('text', { type: 'text', attrs: e, capture: !1 })),
              this.update();
          }),
          (e.prototype.getMultiLineText = function (t, e, n) {
            let r;
            const i =
              (r = this.parent.gNode.get('canvas')) === null || void 0 === r
                ? void 0
                : r.get('context');
            if (!i) return t;
            i.save();
            const o = Object(X.assembleFont)(e);
            if (((i.font = o), i.measureText(t).width < n)) return t;
            for (var a = '', s = 0, u = 0, c = t; u < c.length; u++) {
              const h = c[u];
              const l = i.measureText(h).width;
              (s += l) >= n ? ((s = l), (a += `\n${h}`)) : (a += h);
            }
            return i.restore(), a;
          }),
          (e.prototype.update = function () {
            const t = this.styleNode.style;
            const e = this.getAttrs();
            const n = this.gNode;
            switch ((n.attr(e), n.resetMatrix(), t.textAlign)) {
              case 'center':
                n.translate(this.styleNode.layout.width / 2);
                break;
              case 'right':
                n.translate(this.styleNode.layout.width);
            }
            t.whiteSpace === 'nowrap'
              ? n.attr('text', String(this.styleNode.dom.text))
              : n.attr(
                  'text',
                  this.getMultiLineText(
                    String(this.styleNode.dom.text),
                    e,
                    this.styleNode.layout.width,
                  ),
                );
          }),
          e
        );
      })(R);
      const W = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getAttrs = function () {
            const t = this.styleNode;
            const e = t.style;
            const n = t.layout;
            const r = t.dom;
            return Object(h.a)(
              {
                fill: e.backgroundColor,
                lineWidth: e.borderWidth,
                fillOpacity: e.backgroundOpacity,
                stroke: e.borderColor,
                width: n.width - (e.borderWidth || 0),
                height: n.height - (e.borderWidth || 0),
              },
              r.attrs,
            );
          }),
          (e.prototype.draw = function (t) {
            const e = this.styleNode;
            const n = this.getAttrs();
            const r = e.dom;
            this.gNode || (this.gNode = t.addShape(r.attrs.type, { attrs: n })), this.update();
          }),
          (e.prototype.update = function () {
            let t;
            const e = this.getAttrs();
            const n = this.gNode;
            const r = this.styleNode.style.pointerEvents !== 'none';
            n.attr(e),
              n.set('capture', r),
              n.resetMatrix(),
              n.translate(this.left, this.top),
              typeof ((t = this.style) === null || void 0 === t ? void 0 : t.zIndex) === 'number' &&
                n.setZIndex(this.style.zIndex);
          }),
          e
        );
      })(R);
      const G = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.draw = function (t) {
            const e = {
              x: this.styleNode.layout.left,
              y: this.styleNode.layout.top,
              img: this.styleNode.dom.attrs.src,
              width: this.styleNode.layout.width || 0,
              height: this.styleNode.layout.height || 0,
            };
            const n = this.styleNode.style.pointerEvents !== 'none';
            this.gNode ||
              (this.gNode = t.addShape('image', { type: 'image', attrs: e, capture: n }));
            const r = this.gNode;
            switch (
              (r.resetMatrix(),
              r.set('capture', n),
              r.attr(e),
              typeof this.styleNode.style.zIndex === 'number' &&
                r.setZIndex(this.styleNode.style.zIndex),
              this.styleNode.style.textAlign)
            ) {
              case 'center':
                r.translate(this.styleNode.layout.width / 2);
                break;
              case 'right':
                r.translate(this.styleNode.layout.width);
            }
          }),
          e
        );
      })(R);
      const q = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return Object(h.c)(e, t), e;
      })(F);
      function H(t, e, n) {
        const r = U(t, e, !0);
        return r.manualMount(n), r;
      }
      function V(t, e, n) {
        const r = U(t, e, !1);
        return n && r.manualMount(n), r;
      }
      function U(t, e, n) {
        void 0 === n && (n = !1);
        for (
          var r = (function (t, e) {
              return new L(t, e).parse();
            })(
              (function (t, e) {
                let n;
                void 0 === e && (e = !0);
                const r = new S(t).parse();
                let i = r[0];
                return (
                  ((n = r[0]) === null || void 0 === n ? void 0 : n.tagName) !== 'root' &&
                    e &&
                    (((i = new O()).tagName = 'root'), (i.children = r)),
                  i
                );
              })(t, n),
              A(e),
            ),
            i = Y(r.dom.tagName, r),
            o = [[r, i]];
          o.length;

        )
          for (
            let a = o.pop(), s = a[0], u = a[1], c = 0, h = s.originChildren;
            c < h.length;
            c++
          ) {
            const l = h[c];
            const d = Y(l.dom.tagName, l);
            u.children.push(d), d.setParent(u), o.push([l, d]);
          }
        return i;
      }
      _('div', F), _('text', z), _('shape', W), _('image', G), _('root', q);
      let Z = {};
      function K(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        const r = Z[t];
        r == null ||
          r.forEach((t) => {
            t.apply(null, e);
          });
      }
      function Q(t, e) {
        Z[t] = Object(h.g)(Z[t] || [], [e]);
      }
      const $ = { fill: '#416180', opacity: 0.05 };
      const J = { fill: '#416180', opacity: 0.15, radius: 5 };
      const tt = { fill: '#5B8FF9', opacity: 0.3, cursor: 'grab' };
      const et = {
        width: 2,
        height: 26,
        fill: '#1890ff',
        stroke: '#1890ff',
        opacity: 1,
        cursor: 'ew-resize',
        highLightFill: '#0050b3',
      };
      const nt = {
        fill: '#fff',
        stroke: '#1890ff',
        radius: 15,
        opacity: 1,
        lineWidth: 2,
        cursor: 'ew-resize',
      };
      const rt = { textBaseline: 'middle', fill: '#000', opacity: 0.45, fontSize: 12 };
      const it = { fill: '#607889', opacity: 0.35, fontSize: 12, width: 50 };
      const ot = { width: 1, height: 4, fill: '#ccc' };
      const at = 2;
      const st = 18;
      const ut = { height: 4, width: 1, fill: '#BFBFBF' };
      const ct = { fill: '#8c8c8c', fontSize: 10, width: 50 };
      const ht = { fill: '#5B8FF9' };
      const lt = { fill: '#e6e8e9' };
      const dt = {
        speed: 1,
        contentWidth: 200,
        height: 60,
        fill: '#fff',
        stroke: '#fff',
        hideTimeTypeController: !1,
        preBtnStyle: { fill: '#aaa' },
        nextBtnStyle: { fill: '#aaa' },
        playBtnStyle: { fill: '#aaa' },
      };
      const ft = function (t, e) {
        const n = e.height;
        const r = (void 0 === n ? 16 : n) / 2;
        let i = '';
        return (
          t === 'next' &&
            (i = `\n      <shape  type='path' path='[\n        ["M", 0, ${
              0 - r
            }],\n        ["L", ${r}, 0],\n        ["L", 0, ${r}],\n        ["Z", 0, ${
              0 - r
            }],\n        ["M", 0, 0],\n        ["L", ${0 - r}, ${0 - r}],\n        ["L", ${
              0 - r
            }, ${r}],\n        ["Z"]\n      ]'/>  \n    `),
          t === 'prev' &&
            (i = `\n      <shape  type='path' path='[\n        ["M", 0, ${0 - r}],\n        ["L", ${
              0 - r
            }, 0],\n        ["L", 0, ${0 + r}],\n        ["L", 0, ${
              0 - r
            }],\n        ["M", 0, 0],\n        ["L", ${0 + r}, ${0 - r}],\n        ["L", ${
              0 + r
            }, ${0 + r}],\n        ["Z"]\n      ]'/>  \n    `),
          V(
            i,
            `\n    shape {\n      margin-left: ${r};\n      width: ${r};\n      background: ${e.fill};\n    }\n  `,
          )
        );
      };
      const pt = function (t) {
        const e = t || {};
        const n = e.radius;
        const r = void 0 === n ? 15 : n;
        const i = e.fill;
        const o = (r * Math.sqrt(3)) / 2;
        const a = V(
          `\n  <div id='play_Btn'>\n    <shape class="start" type='path' path='[\n      ["M", 0 , 0],\n      ["L", ${o} , ${
            r / 2
          }],\n      ["L", 0 , ${r}]\n    ]'/>\n    <div class="pause">\n      <shape class='pause_0' type='rect' />\n      <shape class='pause_1' type='rect' />\n    </div>\n  </div>`,
          `\n    #play_Btn {\n      width: ${2 * r};\n      height: ${
            2 * r
          };\n      background: #fff;\n      border: 1 solid ${i};\n      border-radius: ${r};\n    }\n    .start{\n      position: absolute;\n      top: ${
            r / 2
          };\n      left: ${
            r - o / 2 + 1
          } ;\n      background: ${i};\n      width: ${r};\n      height: ${r};\n    }\n    .pause {\n      display: none;\n    }\n    .pause shape {\n      position: absolute;\n      background: ${i};\n      width: ${
            r / 4
          };\n      height: ${r};\n    }\n    .pause_1 {\n      left: ${
            (4 * r) / 8
          };\n    }\n    .pause {\n      position: absolute;\n      top: ${r / 2};\n      left: ${
            (5 * r) / 8
          };\n    }\n  `,
        );
        const s = a.query('.start');
        const u = a.query('.pause');
        let c = !0;
        function h() {
          s.setStyle('display', c ? 'flex' : 'none'), u.setStyle('display', c ? 'none' : 'flex');
        }
        return (
          h(),
          a.on('tap', () => {
            K(c ? 'SLIDER_PLAY' : 'SLIDER_PAUSE'), (c = !c), h();
          }),
          a
        );
      };
      const gt = n(0);
      const yt = function (t) {
        const e = Object(gt.e)({}, dt, t);
        const n = e.wrapperWidth;
        const r = e.contentWidth;
        const i = e.height;
        const o = e.fill;
        const a = e.stroke;
        const s = e.nextBtnStyle;
        const u = e.preBtnStyle;
        const c = e.playBtnStyle;
        const h = e.speed;
        const l = V(
          "\n    <div class='wrapper'>\n      <div class='content'> \n\n      </div>\n    </div>\n  ",
          `\n    .wrapper {\n      display: flex;\n      width: ${n};\n      height: ${i};\n      flex-wrap: nowrap;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      background: ${o};\n      ${
            a ? `border: 1 solid ${a};` : ''
          }\n    }\n    .content{\n      display: flex;\n      width: ${r};\n      flex-wrap: nowrap;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      background-opacity: 0;\n    }\n`,
        );
        const d = ft('next', s);
        const f = ft('prev', u);
        const p = pt(c);
        return (
          K('SPEED_CHANGE', h),
          d.on('tap', () => {
            K('CONTROL_NEXT');
          }),
          f.on('tap', () => {
            K('CONTROL_PREV');
          }),
          l.query('.content').appendChild(f, p, d),
          l
        );
      };
      function vt(t, e) {
        void 0 === e && (e = 20);
        let n = !0;
        let r = null;
        var i = function () {
          n
            ? clearTimeout(r)
            : (t == null || t(),
              (r = setTimeout(() => {
                i();
              }, e)));
        };
        return {
          play() {
            (n = !1), i();
          },
          stop() {
            n = !0;
          },
          setSpeed(t) {
            t > 10 && (t = 10), t < 1 && (t = 1), (e = 800 - (500 * t) / 9);
          },
        };
      }
      const mt = n(13);
      const bt = {};
      function xt(t, e) {
        bt[t] = e;
      }
      const wt = (function () {
        function t(t) {
          (this.type = 'base'),
            (this.isCategory = !1),
            (this.isLinear = !1),
            (this.isContinuous = !1),
            (this.isIdentity = !1),
            (this.values = []),
            (this.range = [0, 1]),
            (this.ticks = []),
            (this.__cfg__ = t),
            this.initCfg(),
            this.init();
        }
        return (
          (t.prototype.translate = function (t) {
            return t;
          }),
          (t.prototype.change = function (t) {
            Object(gt.a)(this.__cfg__, t), this.init();
          }),
          (t.prototype.clone = function () {
            return this.constructor(this.__cfg__);
          }),
          (t.prototype.getTicks = function () {
            const t = this;
            return Object(gt.A)(this.ticks, (e, n) => {
              return Object(gt.w)(e)
                ? e
                : { text: t.getText(e, n), tickValue: e, value: t.scale(e) };
            });
          }),
          (t.prototype.getText = function (t, e) {
            const n = this.formatter;
            const r = n ? n(t, e) : t;
            return Object(gt.t)(r) || !Object(gt.s)(r.toString) ? '' : r.toString();
          }),
          (t.prototype.getConfig = function (t) {
            return this.__cfg__[t];
          }),
          (t.prototype.init = function () {
            Object(gt.a)(this, this.__cfg__),
              this.setDomain(),
              Object(gt.q)(this.getConfig('ticks')) && (this.ticks = this.calculateTicks());
          }),
          (t.prototype.initCfg = function () {}),
          (t.prototype.setDomain = function () {}),
          (t.prototype.calculateTicks = function () {
            const t = this.tickMethod;
            let e = [];
            if (Object(gt.y)(t)) {
              const n = bt[t];
              if (!n) throw new Error('There is no method to to calculate ticks!');
              e = n(this);
            } else Object(gt.s)(t) && (e = t(this));
            return e;
          }),
          (t.prototype.rangeMin = function () {
            return this.range[0];
          }),
          (t.prototype.rangeMax = function () {
            return this.range[1];
          }),
          (t.prototype.calcPercent = function (t, e, n) {
            return Object(gt.u)(t) ? (t - e) / (n - e) : NaN;
          }),
          (t.prototype.calcValue = function (t, e, n) {
            return e + t * (n - e);
          }),
          t
        );
      })();
      const Ot = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'cat'), (e.isCategory = !0), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.buildIndexMap = function () {
            if (!this.translateIndexMap) {
              this.translateIndexMap = new Map();
              for (let t = 0; t < this.values.length; t++)
                this.translateIndexMap.set(this.values[t], t);
            }
          }),
          (e.prototype.translate = function (t) {
            this.buildIndexMap();
            let e = this.translateIndexMap.get(t);
            return void 0 === e && (e = Object(gt.u)(t) ? t : NaN), e;
          }),
          (e.prototype.scale = function (t) {
            const e = this.translate(t);
            const n = this.calcPercent(e, this.min, this.max);
            return this.calcValue(n, this.rangeMin(), this.rangeMax());
          }),
          (e.prototype.invert = function (t) {
            const e = this.max - this.min;
            const n = this.calcPercent(t, this.rangeMin(), this.rangeMax());
            const r = Math.round(e * n) + this.min;
            return r < this.min || r > this.max ? NaN : this.values[r];
          }),
          (e.prototype.getText = function (e) {
            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            let i = e;
            return (
              Object(gt.u)(e) && !this.values.includes(e) && (i = this.values[i]),
              t.prototype.getText.apply(this, Object(h.g)([i], n))
            );
          }),
          (e.prototype.initCfg = function () {
            this.tickMethod = 'cat';
          }),
          (e.prototype.setDomain = function () {
            if (
              (Object(gt.t)(this.getConfig('min')) && (this.min = 0),
              Object(gt.t)(this.getConfig('max')))
            ) {
              const t = this.values.length;
              this.max = t > 1 ? t - 1 : t;
            }
            this.translateIndexMap && (this.translateIndexMap = void 0);
          }),
          e
        );
      })(wt);
      const Mt = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
      const St = '[^\\s]+';
      const Ct = /\[([^]*?)\]/gm;
      function jt(t, e) {
        for (var n = [], r = 0, i = t.length; r < i; r++) n.push(t[r].substr(0, e));
        return n;
      }
      const kt = function (t) {
        return function (e, n) {
          const r = n[t]
            .map((t) => {
              return t.toLowerCase();
            })
            .indexOf(e.toLowerCase());
          return r > -1 ? r : null;
        };
      };
      function At(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        for (let r = 0, i = e; r < i.length; r++) {
          const o = i[r];
          for (const a in o) t[a] = o[a];
        }
        return t;
      }
      const Et = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const Pt = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const Nt = jt(Pt, 3);
      var Tt = {
        dayNamesShort: jt(Et, 3),
        dayNames: Et,
        monthNamesShort: Nt,
        monthNames: Pt,
        amPm: ['am', 'pm'],
        DoFn(t) {
          return (
            t + ['th', 'st', 'nd', 'rd'][t % 10 > 3 ? 0 : ((t - (t % 10) != 10 ? 1 : 0) * t) % 10]
          );
        },
      };
      let It = At({}, Tt);
      var Bt = function (t) {
        return (It = At(It, t));
      };
      const Lt = function (t) {
        return t.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
      };
      const Dt = function (t, e) {
        for (void 0 === e && (e = 2), t = String(t); t.length < e; ) t = `0${t}`;
        return t;
      };
      const _t = {
        D(t) {
          return String(t.getDate());
        },
        DD(t) {
          return Dt(t.getDate());
        },
        Do(t, e) {
          return e.DoFn(t.getDate());
        },
        d(t) {
          return String(t.getDay());
        },
        dd(t) {
          return Dt(t.getDay());
        },
        ddd(t, e) {
          return e.dayNamesShort[t.getDay()];
        },
        dddd(t, e) {
          return e.dayNames[t.getDay()];
        },
        M(t) {
          return String(t.getMonth() + 1);
        },
        MM(t) {
          return Dt(t.getMonth() + 1);
        },
        MMM(t, e) {
          return e.monthNamesShort[t.getMonth()];
        },
        MMMM(t, e) {
          return e.monthNames[t.getMonth()];
        },
        YY(t) {
          return Dt(String(t.getFullYear()), 4).substr(2);
        },
        YYYY(t) {
          return Dt(t.getFullYear(), 4);
        },
        h(t) {
          return String(t.getHours() % 12 || 12);
        },
        hh(t) {
          return Dt(t.getHours() % 12 || 12);
        },
        H(t) {
          return String(t.getHours());
        },
        HH(t) {
          return Dt(t.getHours());
        },
        m(t) {
          return String(t.getMinutes());
        },
        mm(t) {
          return Dt(t.getMinutes());
        },
        s(t) {
          return String(t.getSeconds());
        },
        ss(t) {
          return Dt(t.getSeconds());
        },
        S(t) {
          return String(Math.round(t.getMilliseconds() / 100));
        },
        SS(t) {
          return Dt(Math.round(t.getMilliseconds() / 10), 2);
        },
        SSS(t) {
          return Dt(t.getMilliseconds(), 3);
        },
        a(t, e) {
          return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
        },
        A(t, e) {
          return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase();
        },
        ZZ(t) {
          const e = t.getTimezoneOffset();
          return (
            (e > 0 ? '-' : '+') + Dt(100 * Math.floor(Math.abs(e) / 60) + (Math.abs(e) % 60), 4)
          );
        },
        Z(t) {
          const e = t.getTimezoneOffset();
          return `${(e > 0 ? '-' : '+') + Dt(Math.floor(Math.abs(e) / 60), 2)}:${Dt(
            Math.abs(e) % 60,
            2,
          )}`;
        },
      };
      const Yt = function (t) {
        return +t - 1;
      };
      const Rt = [null, '[1-9]\\d?'];
      const Ft = [null, St];
      const Xt = [
        'isPm',
        St,
        function (t, e) {
          const n = t.toLowerCase();
          return n === e.amPm[0] ? 0 : n === e.amPm[1] ? 1 : null;
        },
      ];
      const zt = [
        'timezoneOffset',
        '[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?',
        function (t) {
          const e = `${t}`.match(/([+-]|\d\d)/gi);
          if (e) {
            const n = 60 * +e[1] + parseInt(e[2], 10);
            return e[0] === '+' ? n : -n;
          }
          return 0;
        },
      ];
      const Wt = {
        D: ['day', '[1-9]\\d?'],
        DD: ['day', '\\d\\d'],
        Do: [
          'day',
          `[1-9]\\d?${St}`,
          function (t) {
            return parseInt(t, 10);
          },
        ],
        M: ['month', '[1-9]\\d?', Yt],
        MM: ['month', '\\d\\d', Yt],
        YY: [
          'year',
          '\\d\\d',
          function (t) {
            const e = +`${new Date().getFullYear()}`.substr(0, 2);
            return +`${+t > 68 ? e - 1 : e}${t}`;
          },
        ],
        h: ['hour', '[1-9]\\d?', void 0, 'isPm'],
        hh: ['hour', '\\d\\d', void 0, 'isPm'],
        H: ['hour', '[1-9]\\d?'],
        HH: ['hour', '\\d\\d'],
        m: ['minute', '[1-9]\\d?'],
        mm: ['minute', '\\d\\d'],
        s: ['second', '[1-9]\\d?'],
        ss: ['second', '\\d\\d'],
        YYYY: ['year', '\\d{4}'],
        S: [
          'millisecond',
          '\\d',
          function (t) {
            return 100 * +t;
          },
        ],
        SS: [
          'millisecond',
          '\\d\\d',
          function (t) {
            return 10 * +t;
          },
        ],
        SSS: ['millisecond', '\\d{3}'],
        d: Rt,
        dd: Rt,
        ddd: Ft,
        dddd: Ft,
        MMM: ['month', St, kt('monthNamesShort')],
        MMMM: ['month', St, kt('monthNames')],
        a: Xt,
        A: Xt,
        ZZ: zt,
        Z: zt,
      };
      const Gt = {
        default: 'ddd MMM DD YYYY HH:mm:ss',
        shortDate: 'M/D/YY',
        mediumDate: 'MMM D, YYYY',
        longDate: 'MMMM D, YYYY',
        fullDate: 'dddd, MMMM D, YYYY',
        isoDate: 'YYYY-MM-DD',
        isoDateTime: 'YYYY-MM-DDTHH:mm:ssZ',
        shortTime: 'HH:mm',
        mediumTime: 'HH:mm:ss',
        longTime: 'HH:mm:ss.SSS',
      };
      var qt = function (t) {
        return At(Gt, t);
      };
      var Ht = function (t, e, n) {
        if (
          (void 0 === e && (e = Gt.default),
          void 0 === n && (n = {}),
          typeof t === 'number' && (t = new Date(t)),
          Object.prototype.toString.call(t) !== '[object Date]' || isNaN(t.getTime()))
        )
          throw new Error('Invalid Date pass to format');
        const r = [];
        e = (e = Gt[e] || e).replace(Ct, (t, e) => {
          return r.push(e), '@@@';
        });
        const i = At(At({}, It), n);
        return (e = e.replace(Mt, (e) => {
          return _t[e](t, i);
        })).replace(/@@@/g, () => {
          return r.shift();
        });
      };
      function Vt(t, e, n) {
        if ((void 0 === n && (n = {}), typeof e !== 'string'))
          throw new Error('Invalid format in fecha parse');
        if (((e = Gt[e] || e), t.length > 1e3)) return null;
        const r = {
          year: new Date().getFullYear(),
          month: 0,
          day: 1,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
          isPm: null,
          timezoneOffset: null,
        };
        const i = [];
        const o = [];
        let a = e.replace(Ct, (t, e) => {
          return o.push(Lt(e)), '@@@';
        });
        const s = {};
        const u = {};
        (a = Lt(a).replace(Mt, (t) => {
          const e = Wt[t];
          const n = e[0];
          const r = e[1];
          const o = e[3];
          if (s[n]) throw new Error(`Invalid format. ${n} specified twice in format`);
          return (s[n] = !0), o && (u[o] = !0), i.push(e), `(${r})`;
        })),
          Object.keys(u).forEach((t) => {
            if (!s[t]) throw new Error(`Invalid format. ${t} is required in specified format`);
          }),
          (a = a.replace(/@@@/g, () => {
            return o.shift();
          }));
        const c = t.match(new RegExp(a, 'i'));
        if (!c) return null;
        for (var h = At(At({}, It), n), l = 1; l < c.length; l++) {
          const d = i[l - 1];
          const f = d[0];
          const p = d[2];
          const g = p ? p(c[l], h) : +c[l];
          if (g == null) return null;
          r[f] = g;
        }
        r.isPm === 1 && r.hour != null && +r.hour != 12
          ? (r.hour = +r.hour + 12)
          : r.isPm === 0 && +r.hour == 12 && (r.hour = 0);
        for (
          var y = new Date(r.year, r.month, r.day, r.hour, r.minute, r.second, r.millisecond),
            v = [
              ['month', 'getMonth'],
              ['day', 'getDate'],
              ['hour', 'getHours'],
              ['minute', 'getMinutes'],
              ['second', 'getSeconds'],
            ],
            m = ((l = 0), v.length);
          l < m;
          l++
        )
          if (s[v[l][0]] && r[v[l][0]] !== y[v[l][1]]()) return null;
        return r.timezoneOffset == null
          ? y
          : new Date(
              Date.UTC(
                r.year,
                r.month,
                r.day,
                r.hour,
                r.minute - r.timezoneOffset,
                r.second,
                r.millisecond,
              ),
            );
      }
      var Ut = {
        format: Ht,
        parse: Vt,
        defaultI18n: Tt,
        setGlobalDateI18n: Bt,
        setGlobalDateMasks: qt,
      };
      function Zt(t, e) {
        return (r.format || Ut.format)(t, e);
      }
      function Kt(t) {
        return (
          Object(gt.y)(t) &&
            (t =
              t.indexOf('T') > 0
                ? new Date(t).getTime()
                : new Date(t.replace(/-/gi, '/')).getTime()),
          Object(gt.p)(t) && (t = t.getTime()),
          t
        );
      }
      const Qt = 36e5;
      const $t = 24 * Qt;
      const Jt = 31 * $t;
      const te = [
        ['HH:mm:ss', 1e3],
        ['HH:mm:ss', 1e4],
        ['HH:mm:ss', 3e4],
        ['HH:mm', 6e4],
        ['HH:mm', 6e5],
        ['HH:mm', 18e5],
        ['HH', Qt],
        ['HH', 6 * Qt],
        ['HH', 12 * Qt],
        ['YYYY-MM-DD', $t],
        ['YYYY-MM-DD', 4 * $t],
        ['YYYY-WW', 7 * $t],
        ['YYYY-MM', Jt],
        ['YYYY-MM', 4 * Jt],
        ['YYYY-MM', 6 * Jt],
        ['YYYY', 380 * $t],
      ];
      function ee(t, e, n) {
        let r;
        const i =
          ((r = function (t) {
            return t[1];
          }),
          function (t, e, n, i) {
            for (var o = Object(gt.t)(n) ? 0 : n, a = Object(gt.t)(i) ? t.length : i; o < a; ) {
              const s = (o + a) >>> 1;
              r(t[s]) > e ? (a = s) : (o = s + 1);
            }
            return o;
          })(te, (e - t) / n) - 1;
        let o = te[i];
        return i < 0 ? (o = te[0]) : i >= te.length && (o = Object(gt.z)(te)), o;
      }
      const ne = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'timeCat'), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.translate = function (t) {
            t = Kt(t);
            let e = this.values.indexOf(t);
            return e === -1 && (e = Object(gt.u)(t) && t < this.values.length ? t : NaN), e;
          }),
          (e.prototype.getText = function (t, e) {
            const n = this.translate(t);
            if (n > -1) {
              let r = this.values[n];
              const i = this.formatter;
              return (r = i ? i(r, e) : Zt(r, this.mask));
            }
            return t;
          }),
          (e.prototype.initCfg = function () {
            (this.tickMethod = 'time-cat'), (this.mask = 'YYYY-MM-DD'), (this.tickCount = 7);
          }),
          (e.prototype.setDomain = function () {
            const e = this.values;
            Object(gt.f)(e, (t, n) => {
              e[n] = Kt(t);
            }),
              e.sort((t, e) => {
                return t - e;
              }),
              t.prototype.setDomain.call(this);
          }),
          e
        );
      })(Ot);
      const re = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.isContinuous = !0), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.scale = function (t) {
            if (Object(gt.t)(t)) return NaN;
            const e = this.rangeMin();
            const n = this.rangeMax();
            return this.max === this.min ? e : e + this.getScalePercent(t) * (n - e);
          }),
          (e.prototype.init = function () {
            t.prototype.init.call(this);
            const e = this.ticks;
            const n = Object(gt.l)(e);
            const r = Object(gt.z)(e);
            n < this.min && (this.min = n),
              r > this.max && (this.max = r),
              Object(gt.t)(this.minLimit) || (this.min = n),
              Object(gt.t)(this.maxLimit) || (this.max = r);
          }),
          (e.prototype.setDomain = function () {
            const t = Object(gt.j)(this.values);
            const e = t.min;
            const n = t.max;
            Object(gt.t)(this.min) && (this.min = e),
              Object(gt.t)(this.max) && (this.max = n),
              this.min > this.max && ((this.min = e), (this.max = n));
          }),
          (e.prototype.calculateTicks = function () {
            const e = this;
            let n = t.prototype.calculateTicks.call(this);
            return (
              this.nice ||
                (n = Object(gt.g)(n, (t) => {
                  return t >= e.min && t <= e.max;
                })),
              n
            );
          }),
          (e.prototype.getScalePercent = function (t) {
            const e = this.max;
            const n = this.min;
            return (t - n) / (e - n);
          }),
          (e.prototype.getInvertPercent = function (t) {
            return (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
          }),
          e
        );
      })(wt);
      const ie = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'linear'), (e.isLinear = !0), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.invert = function (t) {
            const e = this.getInvertPercent(t);
            return this.min + e * (this.max - this.min);
          }),
          (e.prototype.initCfg = function () {
            (this.tickMethod = 'wilkinson-extended'), (this.nice = !1);
          }),
          e
        );
      })(re);
      function oe(t, e) {
        const n = Math.E;
        return e >= 0 ? Math.pow(n, Math.log(e) / t) : -1 * Math.pow(n, Math.log(-e) / t);
      }
      function ae(t, e) {
        return t === 1 ? 1 : Math.log(e) / Math.log(t);
      }
      function se(t, e, n) {
        Object(gt.t)(n) && (n = Math.max.apply(null, t));
        let r = n;
        return (
          Object(gt.f)(t, (t) => {
            t > 0 && t < r && (r = t);
          }),
          r === n && (r = n / e),
          r > 1 && (r = 1),
          r
        );
      }
      const ue = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'log'), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.invert = function (t) {
            let e;
            const n = this.base;
            const r = ae(n, this.max);
            const i = this.rangeMin();
            const o = this.rangeMax() - i;
            const a = this.positiveMin;
            if (a) {
              if (t === 0) return 0;
              const s = (1 / (r - (e = ae(n, a / n)))) * o;
              if (t < s) return (t / s) * a;
            } else e = ae(n, this.min);
            const u = ((t - i) / o) * (r - e) + e;
            return Math.pow(n, u);
          }),
          (e.prototype.initCfg = function () {
            (this.tickMethod = 'log'), (this.base = 10), (this.tickCount = 6), (this.nice = !0);
          }),
          (e.prototype.setDomain = function () {
            t.prototype.setDomain.call(this);
            const e = this.min;
            if (e < 0)
              throw new Error(
                'When you use log scale, the minimum value must be greater than zero!',
              );
            e === 0 && (this.positiveMin = se(this.values, this.base, this.max));
          }),
          (e.prototype.getScalePercent = function (t) {
            const e = this.max;
            let n = this.min;
            if (e === n) return 0;
            if (t <= 0) return 0;
            const r = this.base;
            const i = this.positiveMin;
            return (
              i && (n = (1 * i) / r),
              t < i ? t / i / (ae(r, e) - ae(r, n)) : (ae(r, t) - ae(r, n)) / (ae(r, e) - ae(r, n))
            );
          }),
          e
        );
      })(re);
      const ce = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'pow'), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.invert = function (t) {
            const e = this.getInvertPercent(t);
            const n = this.exponent;
            const r = oe(n, this.max);
            const i = oe(n, this.min);
            const o = e * (r - i) + i;
            const a = o >= 0 ? 1 : -1;
            return Math.pow(o, n) * a;
          }),
          (e.prototype.initCfg = function () {
            (this.tickMethod = 'pow'), (this.exponent = 2), (this.tickCount = 5), (this.nice = !0);
          }),
          (e.prototype.getScalePercent = function (t) {
            const e = this.max;
            const n = this.min;
            if (e === n) return 0;
            const r = this.exponent;
            return (oe(r, t) - oe(r, n)) / (oe(r, e) - oe(r, n));
          }),
          e
        );
      })(re);
      const he = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'time'), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getText = function (t, e) {
            const n = this.translate(t);
            const r = this.formatter;
            return r ? r(n, e) : Zt(n, this.mask);
          }),
          (e.prototype.scale = function (e) {
            let n = e;
            return (
              (Object(gt.y)(n) || Object(gt.p)(n)) && (n = this.translate(n)),
              t.prototype.scale.call(this, n)
            );
          }),
          (e.prototype.translate = function (t) {
            return Kt(t);
          }),
          (e.prototype.initCfg = function () {
            (this.tickMethod = 'time-pretty'),
              (this.mask = 'YYYY-MM-DD'),
              (this.tickCount = 7),
              (this.nice = !1);
          }),
          (e.prototype.setDomain = function () {
            const t = this.values;
            const e = this.getConfig('min');
            const n = this.getConfig('max');
            if (
              ((Object(gt.t)(e) && Object(gt.u)(e)) || (this.min = this.translate(this.min)),
              (Object(gt.t)(n) && Object(gt.u)(n)) || (this.max = this.translate(this.max)),
              t && t.length)
            ) {
              const r = [];
              let i = 1 / 0;
              let o = i;
              let a = 0;
              Object(gt.f)(t, (t) => {
                const e = Kt(t);
                if (isNaN(e)) throw new TypeError(`Invalid Time: ${t} in time scale!`);
                i > e ? ((o = i), (i = e)) : o > e && (o = e), a < e && (a = e), r.push(e);
              }),
                t.length > 1 && (this.minTickInterval = o - i),
                Object(gt.t)(e) && (this.min = i),
                Object(gt.t)(n) && (this.max = a);
            }
          }),
          e
        );
      })(ie);
      const le = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'quantize'), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.invert = function (t) {
            const e = this.ticks;
            const n = e.length;
            const r = this.getInvertPercent(t);
            const i = Math.floor(r * (n - 1));
            if (i >= n - 1) return Object(gt.z)(e);
            if (i < 0) return Object(gt.l)(e);
            const o = e[i];
            const a = i / (n - 1);
            return o + ((r - a) / ((i + 1) / (n - 1) - a)) * (e[i + 1] - o);
          }),
          (e.prototype.initCfg = function () {
            (this.tickMethod = 'r-pretty'), (this.tickCount = 5), (this.nice = !0);
          }),
          (e.prototype.calculateTicks = function () {
            const e = t.prototype.calculateTicks.call(this);
            return (
              this.nice ||
                (Object(gt.z)(e) !== this.max && e.push(this.max),
                Object(gt.l)(e) !== this.min && e.unshift(this.min)),
              e
            );
          }),
          (e.prototype.getScalePercent = function (t) {
            const e = this.ticks;
            if (t < Object(gt.l)(e)) return 0;
            if (t > Object(gt.z)(e)) return 1;
            let n = 0;
            return (
              Object(gt.f)(e, (e, r) => {
                if (!(t >= e)) return !1;
                n = r;
              }),
              n / (e.length - 1)
            );
          }),
          e
        );
      })(re);
      const de = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'quantile'), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.initCfg = function () {
            (this.tickMethod = 'quantile'), (this.tickCount = 5), (this.nice = !0);
          }),
          e
        );
      })(le);
      const fe = {};
      function pe(t, e) {
        if (
          (function (t) {
            return fe[t];
          })(t)
        )
          throw new Error(`type '${t}' existed.`);
        fe[t] = e;
      }
      const ge = (function (t) {
        function e() {
          const e = (t !== null && t.apply(this, arguments)) || this;
          return (e.type = 'identity'), (e.isIdentity = !0), e;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.calculateTicks = function () {
            return this.values;
          }),
          (e.prototype.scale = function (t) {
            return this.values[0] !== t && Object(gt.u)(t) ? t : this.range[0];
          }),
          (e.prototype.invert = function (t) {
            const e = this.range;
            return t < e[0] || t > e[1] ? NaN : this.values[0];
          }),
          e
        );
      })(wt);
      const ye = [1, 5, 2, 2.5, 4, 3];
      const ve = 100 * Number.EPSILON;
      function me(t, e, n, r, i, o) {
        const a = Object(gt.H)(e);
        const s = Object(gt.m)(e, t);
        let u = 0;
        const c = (function (t, e) {
          return ((t % e) + e) % e;
        })(r, o);
        return (c < ve || o - c < ve) && r <= 0 && i >= 0 && (u = 1), 1 - s / (a - 1) - n + u;
      }
      function be(t, e, n) {
        const r = Object(gt.H)(e);
        return 1 - Object(gt.m)(e, t) / (r - 1) - n + 1;
      }
      function xe(t, e, n, r, i, o) {
        const a = (t - 1) / (o - i);
        const s = (e - 1) / (Math.max(o, r) - Math.min(n, i));
        return 2 - Math.max(a / s, s / a);
      }
      function we(t, e) {
        return t >= e ? 2 - (t - 1) / (e - 1) : 1;
      }
      function Oe(t, e, n, r) {
        const i = e - t;
        return 1 - (0.5 * (Math.pow(e - r, 2) + Math.pow(t - n, 2))) / Math.pow(0.1 * i, 2);
      }
      function Me(t, e, n) {
        const r = e - t;
        if (n > r) {
          const i = (n - r) / 2;
          return 1 - Math.pow(i, 2) / Math.pow(0.1 * r, 2);
        }
        return 1;
      }
      function Se(t, e, n, r, i, o) {
        if (
          (void 0 === n && (n = 5),
          void 0 === r && (r = !0),
          void 0 === i && (i = ye),
          void 0 === o && (o = [0.25, 0.2, 0.5, 0.05]),
          Number.isNaN(t) ||
            Number.isNaN(e) ||
            typeof t !== 'number' ||
            typeof e !== 'number' ||
            !n)
        )
          return { min: 0, max: 0, ticks: [] };
        if (e - t < 1e-15 || n === 1) return { min: t, max: e, ticks: [t] };
        for (var a = { score: -2, lmin: 0, lmax: 0, lstep: 0 }, s = 1; s < 1 / 0; ) {
          for (var u = 0; u < i.length; u += 1) {
            const c = i[u];
            const h = be(c, i, s);
            if (o[0] * h + o[1] + o[2] + o[3] < a.score) {
              s = 1 / 0;
              break;
            }
            for (let l = 2; l < 1 / 0; ) {
              const d = we(l, n);
              if (o[0] * h + o[1] + o[2] * d + o[3] < a.score) break;
              for (let f = (e - t) / (l + 1) / s / c, p = Math.ceil(Math.log10(f)); p < 1 / 0; ) {
                const g = s * c * Math.pow(10, p);
                const y = Me(t, e, g * (l - 1));
                if (o[0] * h + o[1] * y + o[2] * d + o[3] < a.score) break;
                const v = Math.floor(e / g) * s - (l - 1) * s;
                const m = Math.ceil(t / g) * s;
                if (v <= m)
                  for (let b = m - v, x = 0; x <= b; x += 1) {
                    const w = (v + x) * (g / s);
                    const O = w + g * (l - 1);
                    const M = g;
                    const S = me(c, i, s, w, O, M);
                    const C = Oe(t, e, w, O);
                    const j = xe(l, n, t, e, w, O);
                    const k = o[0] * S + o[1] * C + o[2] * j + 1 * o[3];
                    k > a.score &&
                      (!r || (w <= t && O >= e)) &&
                      ((a.lmin = w), (a.lmax = O), (a.lstep = M), (a.score = k));
                  }
                p += 1;
              }
              l += 1;
            }
          }
          s += 1;
        }
        let A;
        const E = a.lmax;
        const P = a.lmin;
        const N = a.lstep;
        const T = Math.floor((E - P) / N) + 1;
        const I = new Array(T);
        for (u = 0; u < T; u++) I[u] = (A = P + u * N) < 1e-15 ? A : parseFloat(A.toFixed(15));
        return { min: Math.min(t, Object(gt.l)(I)), max: Math.max(e, Object(gt.z)(I)), ticks: I };
      }
      function Ce(t) {
        const e = t.values;
        const n = t.tickInterval;
        const r = t.tickCount;
        const i = e;
        if (Object(gt.u)(n))
          return Object(gt.g)(i, (t, e) => {
            return e % n == 0;
          });
        let o = t.min;
        let a = t.max;
        if (
          (Object(gt.t)(o) && (o = 0),
          Object(gt.t)(a) && (a = e.length - 1),
          Object(gt.u)(r) && r < a - o)
        ) {
          const s = Se(o, a, r, !1, [1, 2, 5, 3, 4, 7, 6, 8, 9]).ticks;
          return Object(gt.g)(s, (t) => {
            return t >= o && t <= a;
          }).map((t) => {
            return e[t];
          });
        }
        return e.slice(o, a + 1);
      }
      const je = Math.sqrt(50);
      const ke = Math.sqrt(10);
      const Ae = Math.sqrt(2);
      const Ee = (function () {
        function t() {
          this._domain = [0, 1];
        }
        return (
          (t.prototype.domain = function (t) {
            return t ? ((this._domain = Array.from(t, Number)), this) : this._domain.slice();
          }),
          (t.prototype.nice = function (t) {
            let e;
            let n;
            void 0 === t && (t = 5);
            let r;
            const i = this._domain.slice();
            let o = 0;
            let a = this._domain.length - 1;
            let s = this._domain[o];
            let u = this._domain[a];
            return (
              u < s && ((s = (e = [u, s])[0]), (u = e[1]), (o = (n = [a, o])[0]), (a = n[1])),
              (r = Pe(s, u, t)) > 0
                ? (r = Pe((s = Math.floor(s / r) * r), (u = Math.ceil(u / r) * r), t))
                : r < 0 && (r = Pe((s = Math.ceil(s * r) / r), (u = Math.floor(u * r) / r), t)),
              r > 0
                ? ((i[o] = Math.floor(s / r) * r), (i[a] = Math.ceil(u / r) * r), this.domain(i))
                : r < 0 &&
                  ((i[o] = Math.ceil(s * r) / r), (i[a] = Math.floor(u * r) / r), this.domain(i)),
              this
            );
          }),
          (t.prototype.ticks = function (t) {
            return (
              void 0 === t && (t = 5),
              (function (t, e, n) {
                let r;
                let i;
                let o;
                let a;
                let s = -1;
                if (((n = +n), (t = +t) === (e = +e) && n > 0)) return [t];
                (r = e < t) && ((i = t), (t = e), (e = i));
                if ((a = Pe(t, e, n)) === 0 || !isFinite(a)) return [];
                if (a > 0)
                  for (
                    t = Math.ceil(t / a),
                      e = Math.floor(e / a),
                      o = new Array((i = Math.ceil(e - t + 1)));
                    ++s < i;

                  )
                    o[s] = (t + s) * a;
                else
                  for (
                    t = Math.floor(t * a),
                      e = Math.ceil(e * a),
                      o = new Array((i = Math.ceil(t - e + 1)));
                    ++s < i;

                  )
                    o[s] = (t - s) / a;
                r && o.reverse();
                return o;
              })(this._domain[0], this._domain[this._domain.length - 1], t || 5)
            );
          }),
          t
        );
      })();
      function Pe(t, e, n) {
        const r = (e - t) / Math.max(0, n);
        const i = Math.floor(Math.log(r) / Math.LN10);
        const o = r / Math.pow(10, i);
        return i >= 0
          ? (o >= je ? 10 : o >= ke ? 5 : o >= Ae ? 2 : 1) * Math.pow(10, i)
          : -Math.pow(10, -i) / (o >= je ? 10 : o >= ke ? 5 : o >= Ae ? 2 : 1);
      }
      function Ne(t, e, n) {
        return (
          (n === 'ceil'
            ? Math.ceil(t / e)
            : n === 'floor'
            ? Math.floor(t / e)
            : Math.round(t / e)) * e
        );
      }
      function Te(t, e, n) {
        let r = Ne(t, n, 'floor');
        let i = Ne(e, n, 'ceil');
        (r = Object(gt.h)(r, n)), (i = Object(gt.h)(i, n));
        for (var o = [], a = r; a <= i; a += n) {
          const s = Object(gt.h)(a, n);
          o.push(s);
        }
        return { min: r, max: i, ticks: o };
      }
      function Ie(t, e, n) {
        let r;
        const i = t.minLimit;
        const o = t.maxLimit;
        const a = t.min;
        const s = t.max;
        const u = t.tickCount;
        const c = void 0 === u ? 5 : u;
        let h = Object(gt.t)(i) ? (Object(gt.t)(e) ? a : e) : i;
        let l = Object(gt.t)(o) ? (Object(gt.t)(n) ? s : n) : o;
        if ((h > l && ((l = (r = [h, l])[0]), (h = r[1])), c <= 2)) return [h, l];
        for (var d = (l - h) / (c - 1), f = [], p = 0; p < c; p++) f.push(h + d * p);
        return f;
      }
      function Be(t) {
        return t < 1e-15 ? t : parseFloat(t.toFixed(15));
      }
      function Le(t, e, n) {
        if ((void 0 === n && (n = 5), t === e)) return { max: e, min: t, ticks: [t] };
        const r = (e - t) / n;
        const i = Math.pow(10, Math.floor(Math.log10(r)));
        let o = i;
        2 * i - r < 1.5 * (r - o) &&
          5 * i - r < 2.75 * (r - (o = 2 * i)) &&
          10 * i - r < 1.5 * (r - (o = 5 * i)) &&
          (o = 10 * i);
        for (
          var a = Math.ceil(e / o),
            s = Math.floor(t / o),
            u = Math.max(a * o, e),
            c = Math.min(s * o, t),
            h = Math.floor((u - c) / o) + 1,
            l = new Array(h),
            d = 0;
          d < h;
          d++
        )
          l[d] = Be(c + d * o);
        return { min: c, max: u, ticks: l };
      }
      function De(t, e) {
        const n = t.length * e;
        return e === 1
          ? t[t.length - 1]
          : e === 0
          ? t[0]
          : n % 1 != 0
          ? t[Math.ceil(n) - 1]
          : t.length % 2 == 0
          ? (t[n - 1] + t[n]) / 2
          : t[n];
      }
      function _e(t) {
        return new Date(t).getFullYear();
      }
      function Ye(t) {
        return new Date(t, 0, 1).getTime();
      }
      function Re(t) {
        return new Date(t).getMonth();
      }
      function Fe(t, e) {
        return new Date(t, e, 1).getTime();
      }
      function Xe(t) {
        return (function (t) {
          return Object(gt.A)(t, (t, e) => {
            return [e === 0 ? 'M' : 'L', t[0], t[1]];
          });
        })(t);
      }
      function ze(t, e, n, r) {
        void 0 === r && (r = !0);
        const i = new ie({ values: t });
        const o = new Ot({
          values: Object(gt.A)(t, (t, e) => {
            return e;
          }),
        });
        const a = Object(gt.A)(t, (t, r) => {
          return [o.scale(r) * e, n - i.scale(t) * n];
        });
        return r
          ? (function (t) {
              if (t.length <= 2) return Xe(t);
              const e = [];
              Object(gt.f)(t, (t) => {
                Object(gt.r)(t, e.slice(e.length - 2)) || e.push(t[0], t[1]);
              });
              const n = mt.a(e, !1);
              const r = Object(gt.l)(t);
              const i = r[0];
              const o = r[1];
              return n.unshift(['M', i, o]), n;
            })(a)
          : Xe(a);
      }
      xt('cat', Ce),
        xt('time-cat', (t) => {
          const e = Ce(t);
          const n = Object(gt.z)(t.values);
          return n !== Object(gt.z)(e) && e.push(n), e;
        }),
        xt('wilkinson-extended', (t) => {
          const e = t.min;
          const n = t.max;
          const r = t.tickCount;
          const i = t.nice;
          const o = t.tickInterval;
          const a = t.minLimit;
          const s = t.maxLimit;
          const u = Se(e, n, r, i).ticks;
          return Object(gt.t)(a) && Object(gt.t)(s)
            ? o
              ? Te(e, n, o).ticks
              : u
            : Ie(t, Object(gt.l)(u), Object(gt.z)(u));
        }),
        xt('r-pretty', (t) => {
          const e = t.min;
          const n = t.max;
          const r = t.tickCount;
          const i = t.tickInterval;
          const o = t.minLimit;
          const a = t.maxLimit;
          const s = Le(e, n, r).ticks;
          return Object(gt.t)(o) && Object(gt.t)(a)
            ? i
              ? Te(e, n, i).ticks
              : s
            : Ie(t, Object(gt.l)(s), Object(gt.z)(s));
        }),
        xt('time', (t) => {
          const e = t.min;
          const n = t.max;
          const r = t.minTickInterval;
          let i = t.tickInterval;
          let o = t.tickCount;
          if (i) o = Math.ceil((n - e) / i);
          else {
            const a = (n - e) / (i = ee(e, n, o)[1]) / o;
            a > 1 && (i *= Math.ceil(a)), r && i < r && (i = r);
          }
          for (var s = [], u = e; u < n + i; u += i) s.push(u);
          return s;
        }),
        xt('time-pretty', (t) => {
          const e = t.min;
          const n = t.max;
          const r = t.minTickInterval;
          const i = t.tickCount;
          let o = t.tickInterval;
          const a = [];
          o || ((o = (n - e) / i), r && o < r && (o = r));
          const s = _e(e);
          if (o > 31536e6)
            for (var u = _e(n), c = Math.ceil(o / 31536e6), h = s; h <= u + c; h += c)
              a.push(Ye(h));
          else if (o > Jt) {
            const l = Math.ceil(o / Jt);
            const d = Re(e);
            const f = (function (t, e) {
              const n = _e(t);
              const r = _e(e);
              const i = Re(t);
              return 12 * (r - n) + ((Re(e) - i) % 12);
            })(e, n);
            for (h = 0; h <= f + l; h += l) a.push(Fe(s, h + d));
          } else if (o > $t) {
            var p = (b = new Date(e)).getFullYear();
            var g = b.getMonth();
            const y = b.getDate();
            var v = Math.ceil(o / $t);
            const m = (function (t, e) {
              return Math.ceil((e - t) / $t);
            })(e, n);
            for (h = 0; h < m + v; h += v) a.push(new Date(p, g, y + h).getTime());
          } else if (o > Qt) {
            (p = (b = new Date(e)).getFullYear()), (g = b.getMonth()), (v = b.getDate());
            var b;
            const x = b.getHours();
            const w = Math.ceil(o / Qt);
            const O = (function (t, e) {
              return Math.ceil((e - t) / Qt);
            })(e, n);
            for (h = 0; h <= O + w; h += w) a.push(new Date(p, g, v, x + h).getTime());
          } else if (o > 6e4) {
            const M = (function (t, e) {
              return Math.ceil((e - t) / 6e4);
            })(e, n);
            const S = Math.ceil(o / 6e4);
            for (h = 0; h <= M + S; h += S) a.push(e + 6e4 * h);
          } else {
            let C = o;
            C < 1e3 && (C = 1e3);
            const j = 1e3 * Math.floor(e / 1e3);
            const k = Math.ceil((n - e) / 1e3);
            const A = Math.ceil(C / 1e3);
            for (h = 0; h < k + A; h += A) a.push(j + 1e3 * h);
          }
          return (
            a.length >= 512 &&
              console.warn(
                `Notice: current ticks length(${a.length}) >= 512, may cause performance issues, even out of memory. Because of the configure "tickInterval"(in milliseconds, current is ${o}) is too small, increase the value to solve the problem!`,
              ),
            a
          );
        }),
        xt('log', (t) => {
          let e;
          const n = t.base;
          const r = t.tickCount;
          const i = t.min;
          const o = t.max;
          const a = t.values;
          const s = ae(n, o);
          if (i > 0) e = Math.floor(ae(n, i));
          else {
            const u = se(a, n, o);
            e = Math.floor(ae(n, u));
          }
          for (var c = s - e, h = Math.ceil(c / r), l = [], d = e; d < s + h; d += h)
            l.push(Math.pow(n, d));
          return i <= 0 && l.unshift(0), l;
        }),
        xt('pow', (t) => {
          const e = t.exponent;
          const n = t.tickCount;
          const r = Math.ceil(oe(e, t.max));
          return Le(Math.floor(oe(e, t.min)), r, n).ticks.map((t) => {
            const n = t >= 0 ? 1 : -1;
            return Math.pow(t, e) * n;
          });
        }),
        xt('quantile', (t) => {
          const e = t.tickCount;
          const n = t.values;
          if (!n || !n.length) return [];
          for (
            var r = n.slice().sort((t, e) => {
                return t - e;
              }),
              i = [],
              o = 0;
            o < e;
            o++
          ) {
            const a = o / (e - 1);
            i.push(De(r, a));
          }
          return i;
        }),
        xt('d3-linear', (t) => {
          const e = t.min;
          const n = t.max;
          const r = t.tickInterval;
          const i = t.minLimit;
          const o = t.maxLimit;
          const a = (function (t) {
            const e = t.min;
            const n = t.max;
            const r = t.nice;
            const i = t.tickCount;
            const o = new Ee();
            return o.domain([e, n]), r && o.nice(i), o.ticks(i);
          })(t);
          return Object(gt.t)(i) && Object(gt.t)(o)
            ? r
              ? Te(e, n, r).ticks
              : a
            : Ie(t, Object(gt.l)(a), Object(gt.z)(a));
        }),
        pe('cat', Ot),
        pe('category', Ot),
        pe('identity', ge),
        pe('linear', ie),
        pe('log', ue),
        pe('pow', ce),
        pe('time', he),
        pe('timeCat', ne),
        pe('quantize', le),
        pe('quantile', de);
      const We = { stroke: '#C5C5C5', strokeOpacity: 0.85 };
      function Ge(t) {
        const e = t.data;
        const n = void 0 === e ? [] : e;
        const r = t.width;
        const i = t.slider;
        const o = t.sliderTick;
        const a = (function (t) {
          const e = t.width;
          const n = t.height;
          const r = void 0 === n ? 4 : n;
          const i = Object.assign({}, nt, t.handlerStyle);
          const o = Object.assign({}, J, t.backgroundStyle);
          const a = Object.assign({}, tt, t.foregroundStyle);
          const s = Object.assign({}, rt, t.textStyle);
          const u = V(
            "\n    <div class='slider-bg'>\n      <div class=\"slider-inner\"></div>\n      <div class='control left-control'>\n        <div class='text'>0</div>\n      </div>\n      <div class='control right-control'>\n        <div class='text'>0</div>\n      </div>\n    </div>\n  ",
            `\n    .slider-bg {\n      width: ${e};\n      height: ${r};\n      background: ${
              o.fill
            };\n      opacity: ${o.opacity};\n      border-radius: ${
              o.radius
            };\n      z-index: 10;\n      margin-top: 30;\n    }\n    \n    .slider-inner{\n      position: absolute;\n      width: ${e};\n      height: ${r};\n      border-radius: ${
              r / 2
            };\n      background: ${a.fill};\n      background-opacity: ${
              a.opacity
            }\n      z-index: 1;\n    }\n\n    .control {\n      position: absolute;\n      top: ${
              -i.radius / 2 + r / 2
            };\n      width: ${i.radius};\n      height: ${i.radius};\n      border-radius: ${
              i.radius / 2
            };\n      background: ${i.fill};\n      border: ${i.lineWidth} solid ${
              i.stroke
            };\n      z-index: 2;\n    }\n\n    .text{\n      position: absolute;\n      left: ${
              i.radius / 2
            };\n      top: -${i.radius / 2 + s.fontSize / 2};\n      width: 0;\n      color: ${
              s.fill
            };\n      font-size: ${
              s.fontSize
            };\n      text-align: center;\n    }\n\n    text{\n      opacity: ${
              s.opacity
            };\n      white-space: nowrap;\n    }\n    \n    .left-control {\n      left: 0;\n    }\n\n    .right-control{\n      left: ${
              e - i.radius
            };\n    }\n  `,
          );
          return {
            slideContainer: u,
            leftControl: u.query('.left-control'),
            rightControl: u.query('.right-control'),
            slideInner: u.query('.slider-inner'),
          };
        })(i);
        return He({ data: n, width: r, start: i.start, end: i.end, sliderTick: o }, a);
      }
      function qe(t) {
        const e = t.data;
        const n = t.width;
        const r = t.slider;
        const i = t.sliderTick;
        const o = (function (t) {
          const e = t.slider;
          const n = void 0 === e ? {} : e;
          const r = t.trend;
          const i = void 0 === r ? {} : r;
          const o = n.width;
          const a = n.height;
          const s = void 0 === a ? 24 : a;
          const u = i.data;
          const c = void 0 === u ? [] : u;
          const h = i.lineStyle;
          const l = i.smooth;
          const d = void 0 === l || l;
          const f = Object.assign({}, et, n.handlerStyle);
          const p = Object.assign({}, $, n.backgroundStyle);
          const g = Object.assign({}, tt, n.foregroundStyle);
          const y = Object.assign({}, rt, n.textStyle);
          const v = Object.assign({}, We, h);
          const m = f.width;
          const b = 2 * m;
          const x = 2 * b + 10;
          const w = V(
            `\n    <div class='slider-bg'>\n      <shape class='trend-bg' type='path' path='[]' />\n      <div class= 'slider-inner' />\n      <div class='control left-control'>\n        <div class='handler'> \n          <div class='text'>1</div>\n          <shape class='rect' type='rect' width='${f.width}'/>\n          <shape class='circle top-circle' type='circle' r='${b}' />\n          <shape class='circle bottom-circle' type='circle' r='${b}' />\n        </div>\n      </div>\n      <div class='control right-control'>\n        <div class='handler'> \n          <div class='text'>1</div>\n          <shape class='rect' type='rect' width='${f.width}'/>\n          <shape class='circle top-circle' type='circle' r='${b}' />\n          <shape class='circle bottom-circle' type='circle' r='${b}' />\n        </div>\n      </div>\n    </div>\n  `,
            `\n    .slider-bg {\n      width: ${o};\n      height: ${s};\n      background: ${
              p.fill
            };\n      opacity: ${
              p.opacity
            };\n      z-index: 10;\n    }\n\n    .trend-bg{\n      position: absolute;\n      width: ${o};\n      height: ${s};\n      border: 1 solid ${
              v.stroke
            };\n      opacity: ${
              v.strokeOpacity
            };\n    }\n    \n    .slider-inner{\n      position: absolute;\n      width: ${o};\n      height: ${s};\n      background: ${
              g.fill
            };\n      opacity: ${
              g.opacity
            };\n    }\n\n    .control {\n      position: absolute;\n      width: ${x};\n      height: ${s};\n      font-size: 10;\n      background-opacity: 0;\n    }\n\n    .handler{\n      position: absolute;\n      height: ${
              f.height
            };\n      width: ${m};\n    }\n    \n    .rect {\n      position: absolute;\n      width: ${m};\n      height: ${
              f.height
            };\n      background: ${f.fill};\n    }\n\n    .circle {\n      background: ${
              f.fill
            };\n      position: absolute;\n      left: ${
              m / 2
            }\n    }\n\n    .top-circle{\n      top: 0\n    }\n\n    .bottom-circle{\n      bottom: 0\n    }\n\n    .right-control .handler{\n      right: 0\n    }\n\n    .control .text{\n      position: absolute;\n      top: ${
              s / 2 - 5
            };\n    }\n    \n    .text{\n      color: ${
              y.fill
            };\n      width: 40;\n      text-align: center;\n    }\n\n    .text text{\n      opacity:${
              y.opacity
            }\n    }\n\n    .left-control .text{\n      margin-left: 0;\n    }\n\n    .right-control .text{\n      \n    }\n    \n    .left-control {\n      left: 0;\n    }\n\n    .right-control{\n      left: ${
              o - x
            };\n    }\n  `,
          );
          const O = ze(c, o, s, d);
          w.query('.trend-bg').setAttribute('path', O);
          const M = w.query('.left-control');
          const S = w.query('.right-control');
          const C = M.query('.text');
          const j = S.query('.text');
          return (
            (M.onLeftChange = function (t) {
              t < C.width ? C.setStyle('marginLeft', 0) : C.setStyle('marginLeft', -C.width);
            }),
            (S.onLeftChange = function (t) {
              t > w.width - S.width - j.width
                ? j.setStyle('marginLeft', -j.width)
                : j.setStyle('marginLeft', 0);
            }),
            {
              slideContainer: w,
              leftControl: w.query('.left-control'),
              rightControl: w.query('.right-control'),
              slideInner: w.query('.slider-inner'),
            }
          );
        })({ slider: r, trend: t.trend });
        return He({ data: e, width: n, start: r.start, end: r.end, sliderTick: i }, o);
      }
      function He(t, e) {
        const n = t.data;
        const r = void 0 === n ? [] : n;
        const i = t.width;
        const o = t.start;
        const a = void 0 === o ? 0.1 : o;
        const s = t.end;
        const u = void 0 === s ? 0.9 : s;
        const c = t.sliderTick;
        const h = c.width;
        const l = (void 0 === h ? 0 : h) / r.length;
        const d = (function (t) {
          return V(
            "\n    <div id='slider'></div>\n  ",
            `\n    #slider {\n      width: ${t};\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  `,
          );
        })(i);
        const f = e.slideContainer;
        const p = e.leftControl;
        const g = e.rightControl;
        const y = e.slideInner;
        const v = (function (t, e, n) {
          const r = n.width;
          const i = void 0 === r ? 0 : r;
          const o = Object.assign({}, it, n.textStyle);
          const a = Object.assign({}, ot, n.lineStyle);
          const s = Math.floor(o.width / e);
          return V(
            `\n  <div class='tiker'>\n    ${t.reduce((t, e, n) => {
              return `${t}\n        <div class='single-tick'> \n          ${
                n % s == 0
                  ? `\n          <shape class='line' type='rect' />\n          <div class='text'>${e.date}</div>`
                  : ''
              }\n        </div> \n      `;
            }, '')}\n  </div>`,
            `\n    .tiker {\n      width: ${i};\n      background-opacity: 0;\n      display: flex;\n      flex-direction: row;\n      z-index: 1;\n      color: black;\n    }\n    .single-tick {\n      width: ${e};\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: flex-start;\n    }\n    .single-tick shape{\n      width: ${a.width};\n      height: ${a.height};\n      background: ${a.fill};\n    }\n    .single-tick .text {\n      height: ${o.fontSize};\n      text-align: center;\n      font-size: ${o.fontSize};\n      width: 0; \n      color: ${o.fill};\n    }\n    text {\n      opacity: ${o.opacity};;\n      white-space: nowrap;\n    }\n  `,
          );
        })(r, l, c);
        d.appendChild(f, v);
        const m = (function (t) {
          const e = t.delegateNode;
          const n = t.leftControl;
          const r = t.rightControl;
          const i = t.slideInner;
          const o = t.data;
          const a = t.tickWidth;
          const s = t.slideContainer;
          const u = t.speed;
          let c = 0;
          let h = 1;
          let l = 0;
          function d() {
            const t = r.width;
            const e = s.width;
            l > e - t || v((l += a));
          }
          const f = vt(d, void 0 === u ? 100 : u);
          function p() {
            return r.left - n.left + n.width;
          }
          function g(t) {
            const e = (t / s.width) * o.length;
            return o[Math.floor(e)];
          }
          function y(t, e) {
            let r;
            void 0 === e && (e = !0);
            const o = n.width;
            const a = s.width;
            t < 0 && (t = 0),
              t > a - o && (t = a - o),
              (r = n.onLeftChange) === null || void 0 === r || r.call(n, t),
              n.setStyle('left', t),
              e && i.setStyle('width', p()),
              i.setStyle('left', t < 0 ? 0 : t);
            const u = g(t);
            u && (n.setText(u.date), K('RANGE_CHANGE', { value: [(c = t / a), h] }));
          }
          function v(t, e) {
            let n;
            void 0 === e && (e = !0);
            const o = r.width;
            const a = s.width;
            t < 0 && (t = 0),
              t >= a - o && (t = a - o),
              (n = r.onLeftChange) === null || void 0 === n || n.call(r, t),
              r.setStyle('left', t),
              e && i.setStyle('width', p());
            const u = g(t + o);
            u && ((l = t), r.setText(u.date), K('RANGE_CHANGE', { value: [c, (h = (t + o) / a)] }));
          }
          const m = new Map();
          m.set(n, {
            getStart() {
              return n.left;
            },
            handler: y,
          }),
            m.set(r, {
              getStart() {
                return r.left;
              },
              handler: v,
            }),
            m.set(i, {
              getStart() {
                return i.left;
              },
              handler(t) {
                const e = r.width;
                const n = i.width;
                const o = s.width;
                t < 0 && (t = 0), t > o - n && (t = o - n), y(t, !1), v(t + n - e, !1);
              },
            });
          let b;
          let x = 0;
          let w = 0;
          return (
            e.on('panstart', (t) => {
              if (t.uiNode) {
                b = void 0;
                const e = m.get(t.uiNode);
                e && ((b = t.uiNode), (x = t.clientX), (w = e.getStart()));
              }
            }),
            e.on('panmove', (t) => {
              if (b) {
                const e = m.get(b);
                const n = t.clientX - x;
                e.handler(w + n);
              }
            }),
            {
              goLeftPercent(t) {
                t < 0 || t > 1 || y(t * s.width);
              },
              goRightPercent(t) {
                t < 0 || t > 1 || v(t * s.width);
              },
              goNext: d,
              goPrev() {
                l < 0 || v((l -= a));
              },
              player: f,
            }
          );
        })({
          data: r,
          slideContainer: f,
          leftControl: p,
          rightControl: g,
          slideInner: y,
          tickWidth: l,
          delegateNode: d,
        });
        return (
          (f.didMount = function () {
            m.goLeftPercent(a), m.goRightPercent(u);
          }),
          Q('SLIDER_PLAY', m.player.play),
          Q('SLIDER_PAUSE', m.player.stop),
          Q('SPEED_CHANGE', m.player.setSpeed),
          Q('CONTROL_NEXT', m.goNext),
          Q('CONTROL_PREV', m.goPrev),
          d
        );
      }
      function Ve(t, e, n) {
        const r = Math.max(t, e);
        const i = Math.min(t, e);
        (n.start = i),
          (n.end = r),
          Ue(n),
          n.tickBoxs.forEach((t) => {
            n.selects.includes(t) ||
              (t.getAttribute('disFromStart') >= i &&
                t.getAttribute('disFromStart') <= r &&
                (t.setStyle('backgroundColor', n.selectedFill), n.selects.push(t)));
          }),
          n.selects.length > 0 &&
            K('RANGE_CHANGE', {
              value: [
                n.selects[0].getAttribute('disFromStart') / n.width,
                n.selects[n.selects.length - 1].getAttribute('disFromStart') / n.width,
              ],
            });
      }
      function Ue(t) {
        t.selects.forEach((e) => {
          e.setStyle('backgroundColor', t.unSelectFill);
        }),
          (t.selects = []);
      }
      const Ze = function (t) {
        let e;
        let n;
        let r;
        let i;
        let o;
        const a = t.data;
        const s = t.tick;
        const u = s.start;
        const c = void 0 === u ? 0.1 : u;
        const h = s.end;
        const l = void 0 === h ? 0.9 : h;
        const d = s.width;
        const f = s.padding;
        console.log(t);
        const p = Object.assign(
          {},
          ht,
          (e = t == null ? void 0 : t.tick) === null || void 0 === e ? void 0 : e.selectedTickStyle,
        );
        const g = Object.assign(
          {},
          lt,
          (n = t == null ? void 0 : t.tick) === null || void 0 === n
            ? void 0
            : n.unSelectedTickStyle,
        );
        const y = {};
        (y.data = a),
          (y.width = d),
          (y.padding = f || '10 0'),
          (y.selectedFill = p.fill),
          (y.unSelectFill = g.fill),
          (y.gap = at),
          (y.tickBoxHeight =
            ((r = t == null ? void 0 : t.tick) === null || void 0 === r
              ? void 0
              : r.tickBoxHeight) || st),
          (y.lineStyle = Object.assign(
            {},
            ut,
            (i = t == null ? void 0 : t.tick) === null || void 0 === i ? void 0 : i.tickLineStyle,
          )),
          (y.textStyle = Object.assign(
            {},
            ct,
            (o = t == null ? void 0 : t.tick) === null || void 0 === o ? void 0 : o.tickLabelStyle,
          )),
          (y.tickWidth = d / a.length),
          (y.count = Math.floor(y.textStyle.width / y.tickWidth)),
          (y.start = c),
          (y.end = l),
          (y.selects = []);
        const v = (function (t) {
          const e = t.data;
          const n = t.tickWidth;
          const r = t.count;
          const i = t.width;
          const o = t.gap;
          const a = t.tickBoxHeight;
          const s = t.textStyle;
          const u = t.lineStyle;
          const c = t.start;
          const h = t.end;
          const l = t.unSelectFill;
          const d = `\n  <div id='slider'>\n    ${e.reduce((t, e, i) => {
            return `${t}\n        <div class='ticker'> \n          <div class='tick-box' disFromStart='${
              i * n
            }'></div>\n          ${
              i % r == 0
                ? `\n              <div class='tick-desc' > \n                <shape class='line' type='rect'/>\n                <div class='text'>${e.date}</div>\n              </div>`
                : ''
            }\n        </div>`;
          }, '')}\n  </div>\n`;
          const f = `\n  #slider {\n    width: ${i};\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: ${
            t.padding
          };\n  }\n\n  .ticker {\n    width: ${
            n - o
          };\n    display: flex;\n    background-opacity: 0;\n    align-items: center;\n  }\n\n  .tick-box {\n    width: ${
            n - o
          };\n    height: ${a};\n    background:  ${l};\n  }\n\n  .tick-desc {\n    display: flex;\n    align-items: center;\n  }\n\n  .text{\n    width: 0;\n    height: ${
            s.fontSize
          };\n    text-align:center;\n    color: ${s.fill};\n    font-size: ${
            s.fontSize
          };\n  }\n\n  .text text{\n    white-space: nowrap;\n  }\n\n  .line {\n    width: ${
            u.width
          };\n    height: ${u.height};\n    background: ${u.fill};\n    margin: 2 0;\n  }\n`;
          const p = V(d, f);
          return (
            (p.didMount = function () {
              (t.start = c * i), (t.end = h * i), Ve(t.start, t.end, t);
            }),
            p
          );
        })(y);
        return (
          (y.tickBoxs = v.queryAll('.tick-box')),
          (function (t) {
            const e = function () {
              (t.end += t.tickWidth), Ve(t.start, t.end, t);
            };
            const n = vt(e, 1e3);
            Q('CONTROL_NEXT', e),
              Q('CONTROL_PREV', () => {
                (t.end -= t.tickWidth), Ve(t.start, t.end, t);
              }),
              Q('SLIDER_PLAY', n.play),
              Q('SLIDER_PAUSE', n.stop),
              Q('SPEED_CHANGE', n.setSpeed);
          })(y),
          (function (t, e) {
            let n = 0;
            let r = !1;
            let i = 0;
            const o = Object(gt.I)(Ve, 30, { trailing: !0, leading: !0 });
            t.on('panstart', (t) => {
              (r = !1),
                t.uiNode &&
                  t.uiNode.getAttribute('class') === 'tick-box' &&
                  ((r = !0), (n = t.clientX), (i = t.uiNode.getAttribute('disFromStart')), Ue(e));
            }),
              t.on('panmove', (t) => {
                if (r) {
                  const a = t.clientX - n;
                  o(i, i + a, e);
                }
              }),
              t.on('tap', (t) => {
                t.uiNode &&
                  t.uiNode.getAttribute('class') === 'tick-box' &&
                  (function (t, e) {
                    Ue(e),
                      e.selects.push(t),
                      (e.start = e.end = t.getAttribute('disFromStart')),
                      K('RANGE_CHANGE', {
                        value: [
                          t.getAttribute('disFromStart') / e.width,
                          t.getAttribute('disFromStart') / e.width,
                        ],
                      }),
                      t.setStyle('backgroundColor', e.selectedFill);
                  })(t.uiNode, e);
              });
          })(v, y),
          v
        );
      };
      function Ke(t, e) {
        const n = t.width;
        const r = t.group;
        const i = t.control;
        const o = H(
          '<root></root>',
          `\n  root {\n    /** 盒模型 **/\n    width: ${n};\n    /** flex **/\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n  }\n`,
          r,
        );
        const a = yt(i);
        return o.appendChild(e, a), o;
      }
      const Qe = (function () {
        function t(t) {
          (this._cfgs = Object(gt.e)(this.getDefaultCfgs(), t)),
            (this._events = {}),
            (this.destroyed = !1);
        }
        return (
          (t.prototype.getDefaultCfgs = function () {
            return {};
          }),
          (t.prototype.initPlugin = function (t) {
            const e = this;
            e.set('graph', t);
            const n = e.getEvents();
            const r = {};
            Object(gt.f)(n, (n, i) => {
              const o = Object(gt.N)(e, n);
              (r[i] = o), t.on(i, o);
            }),
              (this._events = r),
              this.init();
          }),
          (t.prototype.init = function () {}),
          (t.prototype.getEvents = function () {
            return {};
          }),
          (t.prototype.get = function (t) {
            return this._cfgs[t];
          }),
          (t.prototype.set = function (t, e) {
            this._cfgs[t] = e;
          }),
          (t.prototype.destroy = function () {}),
          (t.prototype.destroyPlugin = function () {
            this.destroy();
            const t = this.get('graph');
            const e = this._events;
            Object(gt.f)(e, (e, n) => {
              t.off(n, e);
            }),
              (this._events = null),
              (this._cfgs = null),
              (this.destroyed = !0);
          }),
          t
        );
      })();
      var $e = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              className: 'f6-component-timebar',
              padding: 10,
              type: 'trend',
              data: [],
              trend: { smooth: !0 },
              controllerCfg: { speed: 1 },
              slider: { start: 0.1, end: 0.9 },
              tick: { start: 0.1, end: 0.9 },
              filterEdge: !1,
            };
          }),
          (e.prototype.init = function () {
            const t = this;
            setTimeout(() => {
              t.render(), t.initEvent();
            });
          }),
          (e.prototype.filterData = function (t) {
            let e;
            const n = t.value;
            const r = this.get('data');
            if (r && r.length !== 0) {
              const i = this.get('rangeChange');
              const o = this.get('graph');
              let a = Math.round(r.length * n[0]);
              let s = Math.round(r.length * n[1]);
              (s = s >= r.length ? r.length - 1 : s), (a = a >= r.length ? r.length - 1 : a);
              const u =
                (e = this._cfgs.tick) === null || void 0 === e ? void 0 : e.tickLabelFormatter;
              const c = u ? u(r[a]) : r[a].date;
              const h = u ? u(r[s]) : r[s].date;
              if (i) i(o, c, h);
              else {
                (!this.cacheGraphData ||
                  (this.cacheGraphData.nodes && this.cacheGraphData.nodes.length === 0)) &&
                  (this.cacheGraphData = o.get('data'));
                const l = this.cacheGraphData.nodes.filter((t) => {
                  return t.date >= r[a].date && t.date <= r[s].date;
                });
                const d = l.map((t) => {
                  return t.id;
                });
                let f = [];
                this.cacheGraphData.edges &&
                  ((f = this.cacheGraphData.edges.filter((t) => {
                    return d.includes(t.source) && d.includes(t.target);
                  })),
                  this.get('filterEdge') &&
                    (f = f.filter((t) => {
                      return t.date >= r[a].date && t.date <= r[s].date;
                    }))),
                  o.changeData({ nodes: l, edges: f });
              }
            } else console.warn('请配置 TimeBar 组件的数据');
          }),
          (e.prototype.render = function () {
            const t = this._cfgs;
            const e = t.data;
            const n = t.width;
            const r = t.padding;
            const i = t.type;
            const o = t.trend;
            const a = t.slider;
            const s = t.controllerCfg;
            const u = t.tick;
            const c = t.sliderTick;
            const l = this.get('graph');
            const d = l.get('uiGroup');
            let f = null;
            switch (i) {
              case 'trend':
                f = (function (t) {
                  const e = t.width;
                  const n = void 0 === e ? 0 : e;
                  const r = t.padding;
                  const i = void 0 === r ? 0 : r;
                  const o = t.group;
                  const a = t.data;
                  const s = void 0 === a ? [] : a;
                  const u = t.slider;
                  const c = void 0 === u ? {} : u;
                  const l = t.controllerCfg;
                  const d = void 0 === l ? {} : l;
                  const f = t.trend;
                  const p = void 0 === f ? {} : f;
                  const g = t.sliderTick;
                  const y = void 0 === g ? {} : g;
                  const v = qe({
                    data: s,
                    width: n,
                    slider: Object(h.a)({ width: c.width || n - 2 * i, paddingTop: 0 }, c || {}),
                    sliderTick: Object(h.a)({ width: n - 2 * i }, y || {}),
                    trend: Object(h.a)(
                      {
                        data:
                          s == null
                            ? void 0
                            : s.map((t) => {
                                return t.value;
                              }),
                      },
                      p || {},
                    ),
                  });
                  return Ke(
                    { width: n, group: o, control: Object(h.a)({ wrapperWidth: n }, d) },
                    v,
                  );
                })({
                  group: d,
                  width: n,
                  padding: r,
                  data: e,
                  trend: o,
                  slider: a,
                  controllerCfg: s,
                  sliderTick: c,
                });
                break;
              case 'tick':
                f = (function (t) {
                  const e = t.group;
                  const n = t.data;
                  const r = void 0 === n ? [] : n;
                  const i = t.width;
                  const o = t.padding;
                  const a = t.controllerCfg;
                  const s = void 0 === a ? {} : a;
                  const u = t.tick;
                  const c = void 0 === u ? {} : u;
                  const l = Ze({ data: r, tick: Object(h.a)({ width: i - o }, c) });
                  return Ke(
                    { width: i, group: e, control: Object(h.a)({ wrapperWidth: i }, s) },
                    l,
                  );
                })({ group: d, width: n, padding: r, tick: u, data: e, controllerCfg: s });
                break;
              case 'simple':
                f = (function (t) {
                  const e = t.width;
                  const n = void 0 === e ? 0 : e;
                  const r = t.padding;
                  const i = void 0 === r ? 0 : r;
                  const o = t.group;
                  const a = t.data;
                  const s = void 0 === a ? [] : a;
                  const u = t.slider;
                  const c = void 0 === u ? {} : u;
                  const l = t.controllerCfg;
                  const d = void 0 === l ? {} : l;
                  const f = t.sliderTick;
                  const p = void 0 === f ? {} : f;
                  const g = Ge({
                    data: s,
                    width: n,
                    slider: Object(h.a)({ width: c.width || n - 2 * i, paddingTop: 0 }, c),
                    sliderTick: Object(h.a)({ width: n - 2 * i }, p),
                  });
                  return Ke(
                    { width: n, group: o, control: Object(h.a)({ wrapperWidth: n }, d) },
                    g,
                  );
                })({
                  group: d,
                  width: n,
                  padding: r,
                  slider: a,
                  data: e,
                  controllerCfg: s,
                  sliderTick: c,
                });
            }
            const p = l.get('height');
            d.translate(0, p - f.height);
          }),
          (e.prototype.initEvent = function () {
            Q(
              'RANGE_CHANGE',
              Object(gt.I)(this.filterData.bind(this), 200, { trailing: !0, leading: !0 }),
            );
          }),
          (e.prototype.destroy = function () {
            Z = {};
          }),
          e
        );
      })(Qe);
      const Je = {
        getDefaultCfg() {
          return {};
        },
        getEvents() {
          return {};
        },
        updateCfg(t) {
          return Object.assign(this, t), !0;
        },
        shouldBegin() {
          return !0;
        },
        shouldUpdate() {
          return !0;
        },
        shouldEnd() {
          return !0;
        },
        bind(t) {
          const e = this.events;
          (this.graph = t),
            (this.type !== 'drag-canvas' &&
              this.type !== 'brush-select' &&
              this.type !== 'lasso-select') ||
              t.get('canvas').set('draggable', !0),
            Object(gt.f)(e, (e, n) => {
              t.on(n, e);
            });
        },
        unbind(t) {
          const e = this.events;
          (this.type !== 'drag-canvas' &&
            this.type !== 'brush-select' &&
            this.type !== 'lasso-select') ||
            t.get('canvas').set('draggable', !1),
            Object(gt.f)(e, (e, n) => {
              t.off(n, e);
            });
        },
        get(t) {
          return this[t];
        },
        set(t, e) {
          return (this[t] = e), this;
        },
      };
      const tn = (function () {
        function t() {}
        return (
          (t.registerBehavior = function (e, n) {
            if (!n) throw new Error(`please specify handler for this behavior: ${e}`);
            const r = Object(gt.c)(Je);
            Object.assign(r, n);
            const i = function (t) {
              const e = this;
              Object.assign(this, this.getDefaultCfg(), t);
              const n = this.getEvents();
              this.events = null;
              const r = {};
              n &&
                (Object(gt.f)(n, (t, n) => {
                  r[n] = Object(gt.N)(e, t);
                }),
                (this.events = r));
            };
            (i.prototype = r), (t.types[e] = i);
          }),
          (t.hasBehavior = function (e) {
            return !!t.types[e];
          }),
          (t.getBehavior = function (e) {
            return t.types[e];
          }),
          (t.types = {}),
          t
        );
      })();
      const en = tn;
      const nn = n(28);
      function rn(t) {
        return (rn =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      const on = {};
      function an(t) {
        return on.requestAnimationFrame
          ? on.requestAnimationFrame(t)
          : ((typeof window === 'undefined' ? 'undefined' : rn(window)) === 'object' &&
              window.requestAnimationFrame
              ? window.requestAnimationFrame
              : function (t) {
                  return setTimeout(t, 16);
                })(t);
      }
      const sn = n(4);
      const un = function (t, e) {
        const n = t.nodes;
        const r = t.edges;
        const i = [];
        const o = {};
        if (!n) throw new Error('invalid nodes data!');
        return (
          n &&
            n.forEach((t, e) => {
              o[t.id] = e;
              i.push([]);
            }),
          r &&
            r.forEach((t) => {
              const n = t.source;
              const r = t.target;
              const a = o[n];
              const s = o[r];
              (!a && a !== 0) || (!s && s !== 0) || ((i[a][s] = 1), e || (i[s][a] = 1));
            }),
          i
        );
      };
      const cn = function (t, e) {
        return t === e;
      };
      const hn = (function () {
        function t(t, e) {
          void 0 === e && (e = null), (this.value = t), (this.next = e);
        }
        return (
          (t.prototype.toString = function (t) {
            return t ? t(this.value) : `${this.value}`;
          }),
          t
        );
      })();
      const ln = (function () {
        function t(t) {
          void 0 === t && (t = cn), (this.head = null), (this.tail = null), (this.compare = t);
        }
        return (
          (t.prototype.prepend = function (t) {
            const e = new hn(t, this.head);
            return (this.head = e), this.tail || (this.tail = e), this;
          }),
          (t.prototype.append = function (t) {
            const e = new hn(t);
            return this.head
              ? ((this.tail.next = e), (this.tail = e), this)
              : ((this.head = e), (this.tail = e), this);
          }),
          (t.prototype.delete = function (t) {
            if (!this.head) return null;
            for (var e = null; this.head && this.compare(this.head.value, t); )
              (e = this.head), (this.head = this.head.next);
            let n = this.head;
            if (n !== null)
              for (; n.next; )
                this.compare(n.next.value, t)
                  ? ((e = n.next), (n.next = n.next.next))
                  : (n = n.next);
            return this.compare(this.tail.value, t) && (this.tail = n), e;
          }),
          (t.prototype.find = function (t) {
            const e = t.value;
            const n = void 0 === e ? void 0 : e;
            const r = t.callback;
            const i = void 0 === r ? void 0 : r;
            if (!this.head) return null;
            for (let o = this.head; o; ) {
              if (i && i(o.value)) return o;
              if (void 0 !== n && this.compare(o.value, n)) return o;
              o = o.next;
            }
            return null;
          }),
          (t.prototype.deleteTail = function () {
            const t = this.tail;
            if (this.head === this.tail) return (this.head = null), (this.tail = null), t;
            for (var e = this.head; e.next; ) e.next.next ? (e = e.next) : (e.next = null);
            return (this.tail = e), t;
          }),
          (t.prototype.deleteHead = function () {
            if (!this.head) return null;
            const t = this.head;
            return (
              this.head.next
                ? (this.head = this.head.next)
                : ((this.head = null), (this.tail = null)),
              t
            );
          }),
          (t.prototype.fromArray = function (t) {
            const e = this;
            return (
              t.forEach((t) => {
                return e.append(t);
              }),
              this
            );
          }),
          (t.prototype.toArray = function () {
            for (var t = [], e = this.head; e; ) t.push(e), (e = e.next);
            return t;
          }),
          (t.prototype.reverse = function () {
            for (var t = this.head, e = null, n = null; t; )
              (n = t.next), (t.next = e), (e = t), (t = n);
            (this.tail = this.head), (this.head = e);
          }),
          (t.prototype.toString = function (t) {
            return (
              void 0 === t && (t = void 0),
              this.toArray()
                .map((e) => {
                  return e.toString(t);
                })
                .toString()
            );
          }),
          t
        );
      })();
      !(function () {
        function t() {
          this.linkedList = new ln();
        }
        (t.prototype.isEmpty = function () {
          return !this.linkedList.head;
        }),
          (t.prototype.peek = function () {
            return this.linkedList.head ? this.linkedList.head.value : null;
          }),
          (t.prototype.enqueue = function (t) {
            this.linkedList.append(t);
          }),
          (t.prototype.dequeue = function () {
            const t = this.linkedList.deleteHead();
            return t ? t.value : null;
          }),
          (t.prototype.toString = function (t) {
            return this.linkedList.toString(t);
          });
      })();
      const dn = function (t) {
        const e = {};
        const n = t.nodes;
        const r = void 0 === n ? [] : n;
        const i = t.edges;
        const o = void 0 === i ? [] : i;
        return (
          r.forEach((t) => {
            e[t.id] = { degree: 0, inDegree: 0, outDegree: 0 };
          }),
          o.forEach((t) => {
            e[t.source].degree++,
              e[t.source].outDegree++,
              e[t.target].degree++,
              e[t.target].inDegree++;
          }),
          e
        );
      };
      const fn = dn;
      const pn = function (t, e) {
        for (var n = un(t, e), r = [], i = n.length, o = 0; o < i; o += 1) {
          r[o] = [];
          for (var a = 0; a < i; a += 1)
            o === a
              ? (r[o][a] = 0)
              : n[o][a] !== 0 && n[o][a]
              ? (r[o][a] = n[o][a])
              : (r[o][a] = 1 / 0);
        }
        for (let s = 0; s < i; s += 1)
          for (o = 0; o < i; o += 1)
            for (a = 0; a < i; a += 1) r[o][a] > r[o][s] + r[s][a] && (r[o][a] = r[o][s] + r[s][a]);
        return r;
      };
      const gn =
        ((function () {
          function t(t) {
            (this.count = t.length), (this.parent = {});
            for (let e = 0, n = t; e < n.length; e++) {
              const r = n[e];
              this.parent[r] = r;
            }
          }
          (t.prototype.find = function (t) {
            for (; this.parent[t] !== t; ) t = this.parent[t];
            return t;
          }),
            (t.prototype.union = function (t, e) {
              const n = this.find(t);
              const r = this.find(e);
              n !== r &&
                (n < r
                  ? (this.parent[e] !== e && this.union(this.parent[e], t),
                    (this.parent[e] = this.parent[t]))
                  : (this.parent[t] !== t && this.union(this.parent[t], e),
                    (this.parent[t] = this.parent[e])));
            }),
            (t.prototype.connected = function (t, e) {
              return this.find(t) === this.find(e);
            });
        })(),
        function (t, e) {
          return t - e;
        });
      const yn =
        ((function () {
          function t(t) {
            void 0 === t && (t = gn), (this.compareFn = t), (this.list = []);
          }
          (t.prototype.getLeft = function (t) {
            return 2 * t + 1;
          }),
            (t.prototype.getRight = function (t) {
              return 2 * t + 2;
            }),
            (t.prototype.getParent = function (t) {
              return t === 0 ? null : Math.floor((t - 1) / 2);
            }),
            (t.prototype.isEmpty = function () {
              return this.list.length <= 0;
            }),
            (t.prototype.top = function () {
              return this.isEmpty() ? void 0 : this.list[0];
            }),
            (t.prototype.delMin = function () {
              const t = this.top();
              const e = this.list.pop();
              return this.list.length > 0 && ((this.list[0] = e), this.moveDown(0)), t;
            }),
            (t.prototype.insert = function (t) {
              if (t !== null) {
                this.list.push(t);
                const e = this.list.length - 1;
                return this.moveUp(e), !0;
              }
              return !1;
            }),
            (t.prototype.moveUp = function (t) {
              for (
                let e = this.getParent(t);
                t && t > 0 && this.compareFn(this.list[e], this.list[t]) > 0;

              ) {
                const n = this.list[e];
                (this.list[e] = this.list[t]), (this.list[t] = n), (t = e), (e = this.getParent(t));
              }
            }),
            (t.prototype.moveDown = function (t) {
              let e;
              let n = t;
              const r = this.getLeft(t);
              const i = this.getRight(t);
              const o = this.list.length;
              r !== null && r < o && this.compareFn(this.list[n], this.list[r]) > 0
                ? (n = r)
                : i !== null && i < o && this.compareFn(this.list[n], this.list[i]) > 0 && (n = i),
                t !== n &&
                  ((e = [this.list[n], this.list[t]]),
                  (this.list[t] = e[0]),
                  (this.list[n] = e[1]),
                  this.moveDown(n));
            });
        })(),
        function (t, e, n, r) {
          void 0 === t && (t = -1),
            void 0 === e && (e = -1),
            void 0 === n && (n = -1),
            void 0 === r && (r = '-1'),
            (this.id = t),
            (this.from = e),
            (this.to = n),
            (this.label = r);
        });
      const vn = (function () {
        function t(t, e) {
          void 0 === t && (t = -1),
            void 0 === e && (e = '-1'),
            (this.id = t),
            (this.label = e),
            (this.edges = []),
            (this.edgeMap = {});
        }
        return (
          (t.prototype.addEdge = function (t) {
            this.edges.push(t), (this.edgeMap[t.id] = t);
          }),
          t
        );
      })();
      const mn = (function () {
        function t(t, e, n) {
          void 0 === t && (t = -1),
            void 0 === e && (e = !0),
            void 0 === n && (n = !1),
            (this.id = t),
            (this.edgeIdAutoIncrease = e),
            (this.edges = []),
            (this.nodes = []),
            (this.nodeMap = {}),
            (this.edgeMap = {}),
            (this.nodeLabelMap = {}),
            (this.edgeLabelMap = {}),
            (this.counter = 0),
            (this.directed = n);
        }
        return (
          (t.prototype.getNodeNum = function () {
            return this.nodes.length;
          }),
          (t.prototype.addNode = function (t, e) {
            if (!this.nodeMap[t]) {
              const n = new vn(t, e);
              this.nodes.push(n),
                (this.nodeMap[t] = n),
                this.nodeLabelMap[e] || (this.nodeLabelMap[e] = []),
                this.nodeLabelMap[e].push(t);
            }
          }),
          (t.prototype.addEdge = function (t, e, n, r) {
            if (
              ((this.edgeIdAutoIncrease || void 0 === t) && (t = this.counter++),
              !(this.nodeMap[e] && this.nodeMap[n] && this.nodeMap[n].edgeMap[t]))
            ) {
              const i = new yn(t, e, n, r);
              if (
                (this.edges.push(i),
                (this.edgeMap[t] = i),
                this.nodeMap[e].addEdge(i),
                this.edgeLabelMap[r] || (this.edgeLabelMap[r] = []),
                this.edgeLabelMap[r].push(i),
                !this.directed)
              ) {
                const o = new yn(t, n, e, r);
                this.nodeMap[n].addEdge(o), this.edgeLabelMap[r].push(o);
              }
            }
          }),
          t
        );
      })();
      const bn = (function () {
        function t(t, e, n, r, i) {
          (this.fromNode = t),
            (this.toNode = e),
            (this.nodeEdgeNodeLabel = {
              nodeLabel1: n || '-1',
              edgeLabel: r || '-1',
              nodeLabel2: i || '-1',
            });
        }
        return (
          (t.prototype.equalTo = function (t) {
            return (
              this.fromNode === t.formNode &&
              this.toNode === t.toNode &&
              this.nodeEdgeNodeLabel === t.nodeEdgeNodeLabel
            );
          }),
          (t.prototype.notEqualTo = function (t) {
            return !this.equalTo(t);
          }),
          t
        );
      })();
      const xn = (function () {
        function t() {
          (this.rmpath = []), (this.dfsEdgeList = []);
        }
        return (
          (t.prototype.equalTo = function (t) {
            const e = this.dfsEdgeList.length;
            if (e !== t.length) return !1;
            for (let n = 0; n < e; n++) if (this.dfsEdgeList[n] !== t[n]) return !1;
            return !0;
          }),
          (t.prototype.notEqualTo = function (t) {
            return !this.equalTo(t);
          }),
          (t.prototype.pushBack = function (t, e, n, r, i) {
            return this.dfsEdgeList.push(new bn(t, e, n, r, i)), this.dfsEdgeList;
          }),
          (t.prototype.toGraph = function (t, e) {
            void 0 === t && (t = -1), void 0 === e && (e = !1);
            const n = new mn(t, !0, e);
            return (
              this.dfsEdgeList.forEach((t) => {
                const e = t.fromNode;
                const r = t.toNode;
                const i = t.nodeEdgeNodeLabel;
                const o = i.nodeLabel1;
                const a = i.edgeLabel;
                const s = i.nodeLabel2;
                o !== '-1' && n.addNode(e, o),
                  s !== '-1' && n.addNode(r, s),
                  n.addEdge(void 0, e, r, a);
              }),
              n
            );
          }),
          (t.prototype.buildRmpath = function () {
            this.rmpath = [];
            for (let t = void 0, e = this.dfsEdgeList.length - 1; e >= 0; e--) {
              const n = this.dfsEdgeList[e];
              const r = n.fromNode;
              const i = n.toNode;
              r < i && (void 0 === t || i === t) && (this.rmpath.push(e), (t = r));
            }
            return this.rmpath;
          }),
          (t.prototype.getNodeNum = function () {
            const t = {};
            return (
              this.dfsEdgeList.forEach((e) => {
                t[e.fromNode] || (t[e.fromNode] = !0), t[e.toNode] || (t[e.toNode] = !0);
              }),
              Object.keys(t).length
            );
          }),
          t
        );
      })();
      const wn = (function () {
        function t(t) {
          if (
            ((this.his = {}), (this.nodesUsed = {}), (this.edgesUsed = {}), (this.edges = []), t)
          ) {
            for (; t; ) {
              const e = t.edge;
              this.edges.push(e),
                (this.nodesUsed[e.from] = 1),
                (this.nodesUsed[e.to] = 1),
                (this.edgesUsed[e.id] = 1),
                (t = t.preNode);
            }
            this.edges = this.edges.reverse();
          }
        }
        return (
          (t.prototype.hasNode = function (t) {
            return this.nodesUsed[t.id] === 1;
          }),
          (t.prototype.hasEdge = function (t) {
            return this.edgesUsed[t.id] === 1;
          }),
          t
        );
      })();
      !(function () {
        function t(t) {
          const e = t.graphs;
          const n = t.minSupport;
          const r = void 0 === n ? 2 : n;
          const i = t.minNodeNum;
          const o = void 0 === i ? 1 : i;
          const a = t.maxNodeNum;
          const s = void 0 === a ? 4 : a;
          const u = t.top;
          const c = void 0 === u ? 10 : u;
          const h = t.directed;
          const l = void 0 !== h && h;
          const d = t.verbose;
          const f = void 0 !== d && d;
          (this.graphs = e),
            (this.dfsCode = new xn()),
            (this.support = 0),
            (this.frequentSize1Subgraphs = []),
            (this.frequentSubgraphs = []),
            (this.minSupport = r),
            (this.top = c),
            (this.directed = l),
            (this.counter = 0),
            (this.maxNodeNum = s),
            (this.minNodeNum = o),
            (this.verbose = f),
            this.maxNodeNum < this.minNodeNum && (this.maxNodeNum = this.minNodeNum),
            (this.reportDF = []);
        }
        (t.prototype.findForwardRootEdges = function (t, e) {
          const n = this;
          const r = [];
          const i = t.nodeMap;
          return (
            e.edges.forEach((t) => {
              (n.directed || e.label <= i[t.to].label) && r.push(t);
            }),
            r
          );
        }),
          (t.prototype.findBackwardEdge = function (t, e, n, r) {
            if (!this.directed && e === n) return null;
            for (let i = t.nodeMap, o = i[n.to].edges, a = o.length, s = 0; s < a; s++) {
              const u = o[s];
              if (!r.hasEdge(u) && u.to === e.from)
                if (this.directed) {
                  if (
                    i[e.from].label < i[n.to].label ||
                    (i[e.from].label === i[n.to].label && e.label <= u.label)
                  )
                    return u;
                } else if (
                  e.label < u.label ||
                  (e.label === u.label && i[e.to].label <= i[n.to].label)
                )
                  return u;
            }
            return null;
          }),
          (t.prototype.findForwardPureEdges = function (t, e, n, r) {
            for (var i = [], o = e.to, a = t.nodeMap[o].edges, s = a.length, u = 0; u < s; u++) {
              const c = a[u];
              const h = t.nodeMap[c.to];
              n <= h.label && !r.hasNode(h) && i.push(c);
            }
            return i;
          }),
          (t.prototype.findForwardRmpathEdges = function (t, e, n, r) {
            for (
              var i = [],
                o = t.nodeMap,
                a = o[e.to].label,
                s = o[e.from].edges,
                u = s.length,
                c = 0;
              c < u;
              c++
            ) {
              const h = s[c];
              const l = o[h.to].label;
              e.to === h.to ||
                n > l ||
                r.hasNode(o[h.to]) ||
                ((e.label < h.label || (e.label === h.label && a <= l)) && i.push(h));
            }
            return i;
          }),
          (t.prototype.getSupport = function (t) {
            const e = {};
            return (
              t.forEach((t) => {
                e[t.graphId] || (e[t.graphId] = !0);
              }),
              Object.keys(e).length
            );
          }),
          (t.prototype.findMinLabel = function (t) {
            let e = void 0;
            return (
              Object.keys(t).forEach((n) => {
                const r = t[n];
                const i = r.nodeLabel1;
                const o = r.edgeLabel;
                const a = r.nodeLabel2;
                e
                  ? (i < e.nodeLabel1 ||
                      (i === e.nodeLabel1 && o < e.edgeLabel) ||
                      (i === e.nodeLabel1 && o === e.edgeLabel && a < e.nodeLabel2)) &&
                    (e = { nodeLabel1: i, edgeLabel: o, nodeLabel2: a })
                  : (e = { nodeLabel1: i, edgeLabel: o, nodeLabel2: a });
              }),
              e
            );
          }),
          (t.prototype.isMin = function () {
            const t = this;
            const e = this.dfsCode;
            if ((this.verbose && console.log('isMin checking', e), e.dfsEdgeList.length === 1))
              return !0;
            const n = this.directed;
            const r = e.toGraph(-1, n);
            const i = r.nodeMap;
            const o = new xn();
            const a = {};
            r.nodes.forEach((e) => {
              t.findForwardRootEdges(r, e).forEach((t) => {
                const n = i[t.to];
                const o = `${e.label}-${t.label}-${n.label}`;
                a[o] ||
                  (a[o] = {
                    projected: [],
                    nodeLabel1: e.label,
                    edgeLabel: t.label,
                    nodeLabel2: n.label,
                  });
                const s = { graphId: r.id, edge: t, preNode: null };
                a[o].projected.push(s);
              });
            });
            const s = this.findMinLabel(a);
            o.dfsEdgeList.push(new bn(0, 1, s.nodeLabel1, s.edgeLabel, s.nodeLabel2));
            const u = `${s.nodeLabel1}-${s.edgeLabel}-${s.nodeLabel2}`;
            return (function a(s) {
              for (
                var u = o.buildRmpath(),
                  c = o.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1,
                  h = o.dfsEdgeList[u[0]].toNode,
                  l = {},
                  d = !1,
                  f = 0,
                  p = n ? -1 : 0,
                  g = function (e) {
                    if (d) return 'break';
                    s.forEach((n) => {
                      const i = new wn(n);
                      const a = t.findBackwardEdge(r, i.edges[u[e]], i.edges[u[0]], i);
                      a &&
                        (l[a.label] || (l[a.label] = { projected: [], edgeLabel: a.label }),
                        l[a.label].projected.push({ graphId: r.id, edge: l, preNode: n }),
                        (f = o.dfsEdgeList[u[e]].fromNode),
                        (d = !0));
                    });
                  },
                  y = u.length - 1;
                y > p;
                y--
              ) {
                if (g(y) === 'break') break;
              }
              if (d) {
                const v = t.findMinLabel(l);
                o.dfsEdgeList.push(new bn(h, f, '-1', v.edgeLabel, '-1'));
                const m = o.dfsEdgeList.length - 1;
                return t.dfsCode.dfsEdgeList[m] === o.dfsEdgeList[m] && a(l[v.edgeLabel].projected);
              }
              const b = {};
              d = !1;
              let x = 0;
              s.forEach((e) => {
                const n = new wn(e);
                const o = t.findForwardPureEdges(r, n.edges[u[0]], c, n);
                o.length > 0 &&
                  ((d = !0),
                  (x = h),
                  o.forEach((t) => {
                    const n = `${t.label}-${i[t.to].label}`;
                    b[n] ||
                      (b[n] = { projected: [], edgeLabel: t.label, nodeLabel2: i[t.to].label }),
                      b[n].projected.push({ graphId: r.id, edge: t, preNode: e });
                  }));
              });
              const w = u.length;
              const O = function (e) {
                if (d) return 'break';
                const n = u[e];
                s.forEach((e) => {
                  const a = new wn(e);
                  const s = t.findForwardRmpathEdges(r, a.edges[n], c, a);
                  s.length > 0 &&
                    ((d = !0),
                    (x = o.dfsEdgeList[n].fromNode),
                    s.forEach((t) => {
                      const n = `${t.label}-${i[t.to].label}`;
                      b[n] ||
                        (b[n] = { projected: [], edgeLabel: t.label, nodeLabel2: i[t.to].label }),
                        b[n].projected.push({ graphId: r.id, edge: t, preNode: e });
                    }));
                });
              };
              for (y = 0; y < w; y++) {
                if (O(y) === 'break') break;
              }
              if (!d) return !0;
              const M = t.findMinLabel(b);
              o.dfsEdgeList.push(new bn(x, h + 1, '-1', M.edgeLabel, M.nodeLabel2));
              const S = o.dfsEdgeList.length - 1;
              return (
                e.dfsEdgeList[S] === o.dfsEdgeList[S] &&
                a(b[`${M.edgeLabel}-${M.nodeLabel2}`].projected)
              );
            })(a[u].projected);
          }),
          (t.prototype.report = function () {
            if (!(this.dfsCode.getNodeNum() < this.minNodeNum)) {
              this.counter++;
              const t = this.dfsCode.toGraph(this.counter, this.directed);
              this.frequentSubgraphs.push(Object(gt.c)(t));
            }
          }),
          (t.prototype.subGraphMining = function (t) {
            const e = this;
            if (!(this.getSupport(t) < this.minSupport) && this.isMin()) {
              this.report();
              const n = this.dfsCode.getNodeNum();
              const r = this.dfsCode.buildRmpath();
              const i = this.dfsCode.dfsEdgeList[r[0]].toNode;
              const o = this.dfsCode.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1;
              const a = {};
              const s = {};
              t.forEach((t) => {
                for (
                  var u = e.graphs[t.graphId], c = u.nodeMap, h = new wn(t), l = r.length - 1;
                  l >= 0;
                  l--
                ) {
                  const d = e.findBackwardEdge(u, h.edges[r[l]], h.edges[r[0]], h);
                  if (d) {
                    const f = `${e.dfsCode.dfsEdgeList[r[l]].fromNode}-${d.label}`;
                    s[f] ||
                      (s[f] = {
                        projected: [],
                        toNodeId: e.dfsCode.dfsEdgeList[r[l]].fromNode,
                        edgeLabel: d.label,
                      }),
                      s[f].projected.push({ graphId: t.graphId, edge: d, preNode: t });
                  }
                }
                if (!(n >= e.maxNodeNum)) {
                  e.findForwardPureEdges(u, h.edges[r[0]], o, h).forEach((e) => {
                    const n = `${i}-${e.label}-${c[e.to].label}`;
                    a[n] ||
                      (a[n] = {
                        projected: [],
                        fromNodeId: i,
                        edgeLabel: e.label,
                        nodeLabel2: c[e.to].label,
                      }),
                      a[n].projected.push({ graphId: t.graphId, edge: e, preNode: t });
                  });
                  const p = function (n) {
                    e.findForwardRmpathEdges(u, h.edges[r[n]], o, h).forEach((i) => {
                      const o = `${e.dfsCode.dfsEdgeList[r[n]].fromNode}-${i.label}-${
                        c[i.to].label
                      }`;
                      a[o] ||
                        (a[o] = {
                          projected: [],
                          fromNodeId: e.dfsCode.dfsEdgeList[r[n]].fromNode,
                          edgeLabel: i.label,
                          nodeLabel2: c[i.to].label,
                        }),
                        a[o].projected.push({ graphId: t.graphId, edge: i, preNode: t });
                    });
                  };
                  for (l = 0; l < r.length; l++) p(l);
                }
              }),
                Object.keys(s).forEach((t) => {
                  const n = s[t];
                  const r = n.toNodeId;
                  const o = n.edgeLabel;
                  e.dfsCode.dfsEdgeList.push(new bn(i, r, '-1', o, '-1')),
                    e.subGraphMining(s[t].projected),
                    e.dfsCode.dfsEdgeList.pop();
                }),
                Object.keys(a).forEach((t) => {
                  const n = a[t];
                  const r = n.fromNodeId;
                  const o = n.edgeLabel;
                  const s = n.nodeLabel2;
                  e.dfsCode.dfsEdgeList.push(new bn(r, i + 1, '-1', o, s)),
                    e.subGraphMining(a[t].projected),
                    e.dfsCode.dfsEdgeList.pop();
                });
            }
          }),
          (t.prototype.generate1EdgeFrequentSubGraphs = function () {
            const t = this.graphs;
            const e = this.directed;
            const n = this.minSupport;
            const r = this.frequentSize1Subgraphs;
            const i = {};
            const o = {};
            const a = {};
            const s = {};
            return (
              Object.keys(t).forEach((n) => {
                const r = t[n];
                const u = r.nodeMap;
                r.nodes.forEach((t, r) => {
                  const c = t.label;
                  const h = `${n}-${c}`;
                  if (!a[h]) {
                    let l = i[c] || 0;
                    l++, (i[c] = l);
                  }
                  (a[h] = { graphKey: n, label: c }),
                    t.edges.forEach((t) => {
                      let r = c;
                      let i = u[t.to].label;
                      if (!e && r > i) {
                        const a = i;
                        (i = r), (r = a);
                      }
                      const h = t.label;
                      const l = `${n}-${r}-${h}-${i}`;
                      const d = `${r}-${h}-${i}`;
                      if (!o[d]) {
                        let f = o[d] || 0;
                        f++, (o[d] = f);
                      }
                      s[l] = { graphId: n, nodeLabel1: r, edgeLabel: h, nodeLabel2: i };
                    });
                });
              }),
              Object.keys(i).forEach((t) => {
                if (!(i[t] < n)) {
                  const e = { nodes: [], edges: [] };
                  e.nodes.push({ id: '0', label: t }), r.push(e);
                }
              }),
              r
            );
          }),
          (t.prototype.run = function () {
            const t = this;
            if (
              ((this.frequentSize1Subgraphs = this.generate1EdgeFrequentSubGraphs()),
              !(this.maxNodeNum < 2))
            ) {
              const e = this.graphs;
              const n = (this.directed, {});
              Object.keys(e).forEach((r) => {
                const i = e[r];
                const o = i.nodeMap;
                i.nodes.forEach((e) => {
                  t.findForwardRootEdges(i, e).forEach((t) => {
                    const i = o[t.to];
                    const a = `${e.label}-${t.label}-${i.label}`;
                    n[a] ||
                      (n[a] = {
                        projected: [],
                        nodeLabel1: e.label,
                        edgeLabel: t.label,
                        nodeLabel2: i.label,
                      });
                    const s = { graphId: r, edge: t, preNode: null };
                    n[a].projected.push(s);
                  });
                });
              }),
                Object.keys(n).forEach((e) => {
                  const r = n[e];
                  const i = r.projected;
                  const o = r.nodeLabel1;
                  const a = r.edgeLabel;
                  const s = r.nodeLabel2;
                  t.dfsCode.dfsEdgeList.push(new bn(0, 1, o, a, s)),
                    t.subGraphMining(i),
                    t.dfsCode.dfsEdgeList.pop();
                });
            }
          });
      })();
      const On = (function () {
        function t(t) {
          void 0 === t && (t = 10), (this.linkedList = new ln()), (this.maxStep = t);
        }
        return (
          Object.defineProperty(t.prototype, 'length', {
            get() {
              return this.linkedList.toArray().length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.isEmpty = function () {
            return !this.linkedList.head;
          }),
          (t.prototype.isMaxStack = function () {
            return this.toArray().length >= this.maxStep;
          }),
          (t.prototype.peek = function () {
            return this.isEmpty() ? null : this.linkedList.head.value;
          }),
          (t.prototype.push = function (t) {
            this.linkedList.prepend(t), this.length > this.maxStep && this.linkedList.deleteTail();
          }),
          (t.prototype.pop = function () {
            const t = this.linkedList.deleteHead();
            return t ? t.value : null;
          }),
          (t.prototype.toArray = function () {
            return this.linkedList.toArray().map((t) => {
              return t.value;
            });
          }),
          (t.prototype.clear = function () {
            for (; !this.isEmpty(); ) this.pop();
          }),
          t
        );
      })();
      const Mn = sn.a.transform;
      var Sn = function (t) {
        return function (e, n) {
          return e[t] - n[t];
        };
      };
      const Cn = function (t, e, n) {
        return t >= e && t <= n;
      };
      var jn = function (t, e, n, r) {
        const i = n.x - t.x;
        const o = n.y - t.y;
        const a = e.x - t.x;
        const s = e.y - t.y;
        const u = r.x - n.x;
        const c = r.y - n.y;
        const h = a * c - s * u;
        const l = 1 / h;
        if (h * h > 1e-4 * (a * a + s * s) * (u * u + c * c)) {
          const d = (i * c - o * u) * l;
          const f = (i * s - o * a) * l;
          return Cn(d, 0, 1) && Cn(f, 0, 1) ? { x: t.x + d * a, y: t.y + d * s } : null;
        }
        return null;
      };
      var kn = function (t, e) {
        const n = t.x;
        const r = t.y;
        const i = t.width;
        const o = t.height;
        const a = [];
        const s = { x: n + i / 2, y: r + o / 2 };
        a.push({ x: n, y: r }),
          a.push({ x: n + i, y: r }),
          a.push({ x: n + i, y: r + o }),
          a.push({ x: n, y: r + o }),
          a.push({ x: n, y: r });
        for (var u = null, c = 1; c < a.length && !(u = jn(a[c - 1], a[c], s, e)); c++);
        return u;
      };
      var An = function (t, e) {
        const n = t.x;
        const r = t.y;
        const i = t.r;
        const o = e.x - n;
        const a = e.y - r;
        if (Math.sqrt(o * o + a * a) < i) return null;
        const s = Math.sign(o);
        const u = Math.sign(a);
        const c = Math.atan(a / o);
        return { x: n + Math.abs(i * Math.cos(c)) * s, y: r + Math.abs(i * Math.sin(c)) * u };
      };
      var En = function (t, e) {
        const n = t.rx;
        const r = t.ry;
        const i = t.x;
        const o = t.y;
        const a = e.x - i;
        const s = e.y - o;
        let u = Math.atan2(s / r, a / n);
        return u < 0 && (u += 2 * Math.PI), { x: i + n * Math.cos(u), y: o + r * Math.sin(u) };
      };
      var Pn = function (t, e, n) {
        void 0 === n && (n = 1);
        const r = [t.x, t.y, n];
        return (
          (e && !isNaN(e[0])) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
          sn.d.transformMat3(r, r, e),
          { x: r[0], y: r[1] }
        );
      };
      var Nn = function (t, e, n) {
        void 0 === n && (n = 1), (e && !isNaN(e[0])) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
        let r = sn.b.invert([1, 0, 0, 0, 1, 0, 0, 0, 1], e);
        r || (r = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
        const i = [t.x, t.y, n];
        return sn.d.transformMat3(i, i, r), { x: i[0], y: i[1] };
      };
      var Tn = function (t, e, n) {
        const r = t.x - e.x;
        const i = t.y - e.y;
        const o = t.x - n.x;
        const a = t.y - n.y;
        const s = (t.x * t.x - e.x * e.x - e.y * e.y + t.y * t.y) / 2;
        const u = (t.x * t.x - n.x * n.x - n.y * n.y + t.y * t.y) / 2;
        const c = i * o - r * a;
        return { x: -(a * s - i * u) / c, y: -(r * u - o * s) / c };
      };
      var In = function (t, e) {
        const n = t.x - e.x;
        const r = t.y - e.y;
        return Math.sqrt(n * n + r * r);
      };
      var Bn = function (t, e) {
        const n = [];
        return (
          t.forEach((t) => {
            const r = [];
            t.forEach((t) => {
              r.push(t * e);
            }),
              n.push(r);
          }),
          n
        );
      };
      var Ln = function (t) {
        for (var e = [], n = t.length, r = 0; r < n; r += 1) {
          e[r] = [];
          for (var i = 0; i < n; i += 1)
            r === i
              ? (e[r][i] = 0)
              : t[r][i] !== 0 && t[r][i]
              ? (e[r][i] = t[r][i])
              : (e[r][i] = 1 / 0);
        }
        for (let o = 0; o < n; o += 1)
          for (r = 0; r < n; r += 1)
            for (i = 0; i < n; i += 1) e[r][i] > e[r][o] + e[o][i] && (e[r][i] = e[r][o] + e[o][i]);
        return e;
      };
      var Dn = function (t, e) {
        const n = t.nodes;
        const r = t.edges;
        const i = [];
        const o = {};
        if (!n) throw new Error('invalid nodes data!');
        return (
          n &&
            n.forEach((t, e) => {
              o[t.id] = e;
              i.push([]);
            }),
          r &&
            r.forEach((t) => {
              const n = t.source;
              const r = t.target;
              const a = o[n];
              const s = o[r];
              (i[a][s] = 1), e || (i[s][a] = 1);
            }),
          i
        );
      };
      var _n = function (t, e) {
        t.translate(e.x, e.y);
      };
      var Yn = function (t, e) {
        let n = t.getMatrix();
        n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
        const r = t.getCanvasBBox();
        const i = e.x - r.minX;
        const o = e.y - r.minY;
        const a = Mn(n, [['t', i, o]]);
        t.setMatrix(a);
      };
      var Rn = function (t, e) {
        let n = t.getMatrix();
        n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
        let r = e;
        Object(gt.n)(e) || (r = [e, e]),
          Object(gt.n)(e) && e.length === 1 && (r = [e[0], e[0]]),
          (n = Mn(n, [['s', r[0], r[1]]])),
          t.setMatrix(n);
      };
      var Fn = function (t, e) {
        let n = t.getMatrix();
        n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]), (n = Mn(n, [['r', e]])), t.setMatrix(n);
      };
      var Xn = function (t, e, n) {
        for (var r = [], i = 0; i < t; i++) r[i] = 0;
        return (
          n.forEach((t) => {
            t.source && (r[e[t.source]] += 1), t.target && (r[e[t.target]] += 1);
          }),
          r
        );
      };
      function zn(t, e, n) {
        return (
          (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]) &&
          Math.min(t[0], e[0]) <= n[0] &&
          n[0] <= Math.max(t[0], e[0]) &&
          Math.min(t[1], e[1]) <= n[1] &&
          n[1] <= Math.max(t[1], e[1])
        );
      }
      let Wn;
      let Gn;
      let qn;
      let Hn;
      var Vn = function (t, e, n) {
        let r = !1;
        const i = t.length;
        function o(t) {
          return Math.abs(t) < 1e-6 ? 0 : t < 0 ? -1 : 1;
        }
        if (i <= 2) return !1;
        for (let a = 0; a < i; a++) {
          const s = t[a];
          const u = t[(a + 1) % i];
          if (zn(s, u, [e, n])) return !0;
          o(s[1] - n) > 0 != o(u[1] - n) > 0 &&
            o(e - ((n - s[1]) * (s[0] - u[0])) / (s[1] - u[1]) - s[0]) < 0 &&
            (r = !r);
        }
        return r;
      };
      var Un = function (t, e) {
        return !(e.minX > t.maxX || e.maxX < t.minX || e.minY > t.maxY || e.maxY < t.minY);
      };
      var Zn = function (t, e) {
        const n = function (t) {
          const e = t.map((t) => {
            return t[0];
          });
          const n = t.map((t) => {
            return t[1];
          });
          return {
            minX: Math.min.apply(null, e),
            maxX: Math.max.apply(null, e),
            minY: Math.min.apply(null, n),
            maxY: Math.max.apply(null, n),
          };
        };
        const r = function (t) {
          for (var e = [], n = t.length, r = 0; r < n - 1; r++) {
            const i = t[r];
            const o = t[r + 1];
            e.push({ from: { x: i[0], y: i[1] }, to: { x: o[0], y: o[1] } });
          }
          if (e.length > 1) {
            const a = t[0];
            const s = t[n - 1];
            e.push({ from: { x: s[0], y: s[1] }, to: { x: a[0], y: a[1] } });
          }
          return e;
        };
        if (t.length < 2 || e.length < 2) return !1;
        const i = n(t);
        const o = n(e);
        if (!Un(i, o)) return !1;
        let a = !1;
        if (
          (Object(gt.f)(e, (e) => {
            if (Vn(t, e[0], e[1])) return (a = !0), !1;
          }),
          a)
        )
          return !0;
        if (
          (Object(gt.f)(t, (t) => {
            if (Vn(e, t[0], t[1])) return (a = !0), !1;
          }),
          a)
        )
          return !0;
        const s = r(t);
        const u = r(e);
        let c = !1;
        return (
          Object(gt.f)(u, (t) => {
            if (
              (function (t, e) {
                let n = !1;
                return (
                  Object(gt.f)(t, (t) => {
                    if (jn(t.from, t.to, e.from, e.to)) return (n = !0), !1;
                  }),
                  n
                );
              })(s, t)
            )
              return (c = !0), !1;
          }),
          c
        );
      };
      var Kn = (function () {
        function t(t, e, n, r) {
          (this.x1 = t), (this.y1 = e), (this.x2 = n), (this.y2 = r);
        }
        return (
          (t.prototype.getBBox = function () {
            const t = Math.min(this.x1, this.x2);
            const e = Math.min(this.y1, this.y2);
            const n = Math.max(this.x1, this.x2);
            const r = Math.max(this.y1, this.y2);
            return { x: t, y: e, minX: t, minY: e, maxX: n, maxY: r, width: n - t, height: r - e };
          }),
          t
        );
      })();
      var Qn = function (t, e) {
        return {
          top: [t.minX, t.minY, t.maxX, t.minY],
          left: [t.minX, t.minY, t.minX, t.maxY],
          bottom: [t.minX, t.maxY, t.maxX, t.maxY],
          right: [t.maxX, t.minY, t.maxX, t.maxY],
        }[e];
      };
      const $n = function (t, e) {
        const n = (e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1);
        const r = (t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1);
        const i = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
        if (i) {
          const o = n / i;
          const a = r / i;
          if (o >= 0 && o <= 1 && a >= 0 && a <= 1) return o;
        }
        return Number.POSITIVE_INFINITY;
      };
      var Jn = function (t, e) {
        for (
          var n = ['top', 'left', 'bottom', 'right'], r = t.getBBox(), i = 0, o = [], a = 0;
          a < 4;
          a++
        ) {
          const s = Qn(r, n[a]);
          const u = s[0];
          const c = s[1];
          const h = s[2];
          const l = s[3];
          (o[a] = jn({ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }, { x: u, y: c }, { x: h, y: l })),
            o[a] && (i += 1);
        }
        return [o, i];
      };
      var tr = function (t, e) {
        for (
          var n = ['top', 'left', 'bottom', 'right'],
            r = t.getBBox(),
            i = Number.POSITIVE_INFINITY,
            o = 0,
            a = 0;
          a < 4;
          a++
        ) {
          const s = Qn(r, n[a]);
          const u = s[0];
          const c = s[1];
          const h = s[2];
          const l = s[3];
          let d = $n(e, new Kn(u, c, h, l));
          (d = Math.abs(d - 0.5)) >= 0 && d <= 1 && ((o += 1), (i = d < i ? d : i));
        }
        return o === 0 ? -1 : i;
      };
      var er = function (t) {
        let e = 0;
        let n = 0;
        if (t.length > 0) {
          for (let r = 0, i = t; r < i.length; r++) {
            const o = i[r];
            (e += o.x), (n += o.y);
          }
          (e /= t.length), (n /= t.length);
        }
        return { x: e, y: n };
      };
      var nr = function (t, e) {
        return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2);
      };
      var rr = function (t, e) {
        let n;
        const r = e.x1;
        const i = e.y1;
        const o = e.x2 - r;
        const a = e.y2 - i;
        let s = t.x - r;
        let u = t.y - i;
        let c = s * o + u * a;
        n = c <= 0 || (c = (s = o - s) * o + (u = a - u) * a) <= 0 ? 0 : (c * c) / (o * o + a * a);
        let h = s * s + u * u - n;
        return h < 0 && (h = 0), h;
      };
      var ir = function (t, e, n) {
        return (
          void 0 === n && (n = 0.001),
          Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2) < Math.pow(n, 2)
        );
      };
      var or = function (t, e) {
        const n = t.x < e.x;
        const r = t.x > e.x + e.width;
        const i = t.y > e.y + e.height;
        const o = t.y < e.y;
        if (!(n || r || i || o)) return 0;
        if (i && !n && !r) return Math.pow(e.y + e.height - t.y, 2);
        if (o && !n && !r) return Math.pow(t.y - e.y, 2);
        if (n && !i && !o) return Math.pow(e.x - t.x, 2);
        if (r && !i && !o) return Math.pow(e.x + e.width - t.x, 2);
        const a = Math.min(Math.abs(e.x - t.x), Math.abs(e.x + e.width - t.x));
        const s = Math.min(Math.abs(e.y - t.y), Math.abs(e.y + e.height - t.y));
        return a * a + s * s;
      };
      var ar = function (t, e) {
        const n = t[0];
        const r = t[1];
        const i = t[2];
        const o = t[3];
        const a = e.x;
        const s = e.y;
        const u = [i - n, o - r];
        if (sn.c.exactEquals(u, [0, 0])) return NaN;
        const c = [-u[1], u[0]];
        sn.c.normalize(c, c);
        const h = [a - n, s - r];
        return Math.abs(sn.c.dot(h, c));
      };
      const sr = 'rgb(95, 149, 255)';
      const ur = 'rgb(253, 253, 253)';
      const cr = 'rgb(247, 250, 255)';
      const hr = 'rgb(224, 224, 224)';
      const lr = 'rgb(224, 224, 224)';
      const dr = {
        version: '0.3.0',
        rootContainerClassName: 'root-container',
        nodeContainerClassName: 'node-container',
        edgeContainerClassName: 'edge-container',
        comboContainerClassName: 'combo-container',
        delegateContainerClassName: 'delegate-container',
        defaultLoopPosition: 'top',
        nodeLabel: {
          style: { fill: '#000', fontSize: 12, textAlign: 'center', textBaseline: 'middle' },
          offset: 4,
        },
        defaultNode: {
          type: 'circle',
          style: { lineWidth: 1, stroke: sr, fill: 'rgb(239, 244, 255)' },
          size: 20,
          color: sr,
          linkPoints: { size: 8, lineWidth: 1, fill: cr, stroke: sr },
        },
        nodeStateStyles: {
          active: { fill: cr, stroke: sr, lineWidth: 2, shadowColor: sr, shadowBlur: 10 },
          selected: {
            fill: 'rgb(255, 255, 255)',
            stroke: sr,
            lineWidth: 4,
            shadowColor: sr,
            shadowBlur: 10,
            'text-shape': { fontWeight: 500 },
          },
          highlight: {
            fill: 'rgb(223, 234, 255)',
            stroke: '#4572d9',
            lineWidth: 2,
            'text-shape': { fontWeight: 500 },
          },
          inactive: { fill: 'rgb(247, 250, 255)', stroke: 'rgb(191, 213, 255)', lineWidth: 1 },
          disable: { fill: 'rgb(250, 250, 250)', stroke: 'rgb(224, 224, 224)', lineWidth: 1 },
        },
        edgeLabel: {
          style: {
            fill: 'rgb(0, 0, 0)',
            textAlign: 'center',
            textBaseline: 'middle',
            fontSize: 12,
          },
        },
        defaultEdge: {
          type: 'line',
          size: 1,
          style: { stroke: hr, lineAppendWidth: 2 },
          color: hr,
        },
        edgeStateStyles: {
          active: { stroke: sr, lineWidth: 1 },
          selected: {
            stroke: sr,
            lineWidth: 2,
            shadowColor: sr,
            shadowBlur: 10,
            'text-shape': { fontWeight: 500 },
          },
          highlight: { stroke: sr, lineWidth: 2, 'text-shape': { fontWeight: 500 } },
          inactive: { stroke: 'rgb(234, 234, 234)', lineWidth: 1 },
          disable: { stroke: 'rgb(245, 245, 245)', lineWidth: 1 },
        },
        comboLabel: {
          style: { fill: 'rgb(0, 0, 0)', textBaseline: 'middle', fontSize: 12 },
          refY: 10,
          refX: 10,
        },
        defaultCombo: {
          type: 'circle',
          style: { fill: ur, lineWidth: 1, stroke: lr, r: 5, width: 20, height: 10 },
          size: [20, 5],
          color: lr,
          padding: [25, 20, 15, 20],
        },
        comboStateStyles: {
          active: { stroke: sr, lineWidth: 1, fill: 'rgb(247, 250, 255)' },
          selected: {
            stroke: sr,
            lineWidth: 2,
            fill: ur,
            shadowColor: sr,
            shadowBlur: 10,
            'text-shape': { fontWeight: 500 },
          },
          highlight: {
            stroke: '#4572d9',
            lineWidth: 2,
            fill: ur,
            'text-shape': { fontWeight: 500 },
          },
          inactive: { stroke: 'rgb(224, 224, 224)', fill: ur, lineWidth: 1 },
          disable: { stroke: 'rgb(234, 234, 234)', fill: 'rgb(250, 250, 250)', lineWidth: 1 },
        },
        delegateStyle: {
          fill: '#F3F9FF',
          fillOpacity: 0.5,
          stroke: '#1890FF',
          strokeOpacity: 0.9,
          lineDash: [5, 5],
        },
      };
      const fr = {
        ' ': 0.3329986572265625,
        a: 0.5589996337890625,
        A: 0.6569992065429687,
        b: 0.58599853515625,
        B: 0.6769989013671875,
        c: 0.5469985961914062,
        C: 0.7279998779296875,
        d: 0.58599853515625,
        D: 0.705999755859375,
        e: 0.554998779296875,
        E: 0.63699951171875,
        f: 0.37299957275390627,
        F: 0.5769989013671875,
        g: 0.5909988403320312,
        G: 0.7479995727539063,
        h: 0.555999755859375,
        H: 0.7199996948242188,
        i: 0.255999755859375,
        I: 0.23699951171875,
        j: 0.26699981689453123,
        J: 0.5169998168945312,
        k: 0.5289993286132812,
        K: 0.6899993896484375,
        l: 0.23499908447265624,
        L: 0.5879989624023437,
        m: 0.854998779296875,
        M: 0.8819992065429687,
        n: 0.5589996337890625,
        N: 0.7189987182617188,
        o: 0.58599853515625,
        O: 0.7669998168945312,
        p: 0.58599853515625,
        P: 0.6419998168945312,
        q: 0.58599853515625,
        Q: 0.7669998168945312,
        r: 0.3649993896484375,
        R: 0.6759994506835938,
        s: 0.504998779296875,
        S: 0.6319992065429687,
        t: 0.354998779296875,
        T: 0.6189987182617187,
        u: 0.5599990844726562,
        U: 0.7139999389648437,
        v: 0.48199920654296874,
        V: 0.6389999389648438,
        w: 0.754998779296875,
        W: 0.929998779296875,
        x: 0.5089996337890625,
        X: 0.63699951171875,
        y: 0.4959991455078125,
        Y: 0.66199951171875,
        z: 0.48699951171875,
        Z: 0.6239990234375,
        0: 0.6,
        1: 0.40099945068359377,
        2: 0.6,
        3: 0.6,
        4: 0.6,
        5: 0.6,
        6: 0.6,
        7: 0.5469985961914062,
        8: 0.6,
        9: 0.6,
        '[': 0.3329986572265625,
        ']': 0.3329986572265625,
        ',': 0.26399993896484375,
        '.': 0.26399993896484375,
        ';': 0.26399993896484375,
        ':': 0.26399993896484375,
        '{': 0.3329986572265625,
        '}': 0.3329986572265625,
        '\\': 0.5,
        '|': 0.19499969482421875,
        '=': 0.604998779296875,
        '+': 0.604998779296875,
        '-': 0.604998779296875,
        _: 0.5,
        '`': 0.3329986572265625,
        ' ~': 0.8329986572265625,
        '!': 0.3329986572265625,
        '@': 0.8579986572265625,
        '#': 0.6,
        $: 0.6,
        '%': 0.9699996948242188,
        '^': 0.517999267578125,
        '&': 0.7259994506835937,
        '*': 0.505999755859375,
        '(': 0.3329986572265625,
        ')': 0.3329986572265625,
        '<': 0.604998779296875,
        '>': 0.604998779296875,
        '/': 0.5,
        '?': 0.53699951171875,
      };
      const pr = Math.PI;
      const gr = Math.sin;
      const yr = Math.cos;
      const vr = gr(pr / 8);
      const mr = yr(pr / 8);
      var br = function (t, e) {
        const n = t.getBBox();
        let r = { x: n.minX, y: n.minY };
        let i = { x: n.maxX, y: n.maxY };
        if (e) {
          let o = e.getMatrix();
          o || (o = [1, 0, 0, 0, 1, 0, 0, 0, 1]), (r = Pn(r, o)), (i = Pn(i, o));
        }
        const a = r.x;
        const s = r.y;
        const u = i.x;
        const c = i.y;
        return { x: a, y: s, minX: a, minY: s, maxX: u, maxY: c, width: u - a, height: c - s };
      };
      var xr = function (t) {
        const e = t.sourceNode || t.targetNode;
        let n = e.get('group').getMatrix();
        n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
        const r = e.getKeyShape().getBBox();
        const i = t.loopCfg || {};
        const o = i.dist || 2 * Math.max(r.width, r.height);
        const a = i.position || dr.defaultLoopPosition;
        const s = [n[6], n[7]];
        let u = [t.startPoint.x, t.startPoint.y];
        let c = [t.endPoint.x, t.endPoint.y];
        let h = r.height / 2;
        let l = r.height / 2;
        let d = h * vr;
        let f = h * mr;
        let p = l * vr;
        let g = l * mr;
        if (u[0] === c[0] && u[1] === c[1]) {
          switch (a) {
            case 'top':
              (u = [s[0] - d, s[1] - f]), (c = [s[0] + p, s[1] - g]);
              break;
            case 'top-right':
              (h = r.height / 2),
                (l = r.width / 2),
                (u = [s[0] + (d = h * vr), s[1] - (f = h * mr)]),
                (c = [s[0] + (g = l * mr), s[1] - (p = l * vr)]);
              break;
            case 'right':
              (h = r.width / 2),
                (l = r.width / 2),
                (u = [s[0] + (f = h * mr), s[1] - (d = h * vr)]),
                (c = [s[0] + (g = l * mr), s[1] + (p = l * vr)]);
              break;
            case 'bottom-right':
              (h = r.width / 2),
                (l = r.height / 2),
                (u = [s[0] + (f = h * mr), s[1] + (d = h * vr)]),
                (c = [s[0] + (p = l * vr), s[1] + (g = l * mr)]);
              break;
            case 'bottom':
              (h = r.height / 2),
                (l = r.height / 2),
                (u = [s[0] + (d = h * vr), s[1] + (f = h * mr)]),
                (c = [s[0] - (p = l * vr), s[1] + (g = l * mr)]);
              break;
            case 'bottom-left':
              (h = r.height / 2),
                (l = r.width / 2),
                (u = [s[0] - (d = h * vr), s[1] + (f = h * mr)]),
                (c = [s[0] - (g = l * mr), s[1] + (p = l * vr)]);
              break;
            case 'left':
              (h = r.width / 2),
                (l = r.width / 2),
                (u = [s[0] - (f = h * mr), s[1] + (d = h * vr)]),
                (c = [s[0] - (g = l * mr), s[1] - (p = l * vr)]);
              break;
            case 'top-left':
              (h = r.width / 2),
                (l = r.height / 2),
                (u = [s[0] - (f = h * mr), s[1] - (d = h * vr)]),
                (c = [s[0] - (p = l * vr), s[1] - (g = l * mr)]);
              break;
            default:
              (h = r.width / 2),
                (l = r.width / 2),
                (u = [s[0] - (d = h * vr), s[1] - (f = h * mr)]),
                (c = [s[0] + (p = l * vr), s[1] - (g = l * mr)]);
          }
          if (!1 === i.clockwise) {
            const y = [u[0], u[1]];
            (u = [c[0], c[1]]), (c = [y[0], y[1]]);
          }
        }
        const v = [u[0] - s[0], u[1] - s[1]];
        let m = (h + o) / h;
        let b = (l + o) / l;
        !1 === i.clockwise && ((m = (l + o) / l), (b = (h + o) / h));
        const x = sn.c.scale([0, 0], v, m);
        const w = [s[0] + x[0], s[1] + x[1]];
        const O = [c[0] - s[0], c[1] - s[1]];
        const M = sn.c.scale([0, 0], O, b);
        const S = [s[0] + M[0], s[1] + M[1]];
        return (
          (t.startPoint = { x: u[0], y: u[1] }),
          (t.endPoint = { x: c[0], y: c[1] }),
          (t.controlPoints = [
            { x: w[0], y: w[1] },
            { x: S[0], y: S[1] },
          ]),
          t
        );
      };
      var wr = function (t, e, n, r, i) {
        let o = [];
        const a = t.getPoint(e);
        if (a === null) return { x: 0, y: 0, angle: 0 };
        if (e < 1e-4) o = t.getStartTangent().reverse();
        else if (e > 0.9999) o = t.getEndTangent();
        else {
          const s = t.getPoint(e + 1e-4);
          o.push([a.x, a.y]), o.push([s.x, s.y]);
        }
        let u = Math.atan2(o[1][1] - o[0][1], o[1][0] - o[0][0]);
        if ((u < 0 && (u += 2 * pr), n && ((a.x += yr(u) * n), (a.y += gr(u) * n)), r)) {
          let c = u - pr / 2;
          u > 0.5 * pr && u < 1.5 * pr && (c -= pr), (a.x += yr(c) * r), (a.y += gr(c) * r);
        }
        const l = { x: a.x, y: a.y, angle: u };
        return i ? (u > 0.5 * pr && u < 1.5 * pr && (u -= pr), Object(h.a)({ rotate: u }, l)) : l;
      };
      const Or = function t(e, n) {
        if (!1 === n(e)) return !1;
        if (e && e.children)
          for (let r = e.children.length - 1; r >= 0; r--) if (!t(e.children[r], n)) return !1;
        return !0;
      };
      var Mr = function (t, e) {
        typeof e === 'function' && Or(t, e);
      };
      var Sr = function (t, e) {
        typeof e === 'function' &&
          (function t(e, n) {
            if (e && e.children)
              for (let r = e.children.length - 1; r >= 0; r--) if (!t(e.children[r], n)) return;
            return !1 !== n(e);
          })(t, e);
      };
      var Cr = function (t, e) {
        return e * (fr[t] || 1);
      };
      var jr = function (t, e) {
        let n = 0;
        const r = new RegExp('[一-龥]+');
        return (
          t.split('').forEach((t) => {
            r.test(t) ? (n += e) : (n += Cr(t, e));
          }),
          [n, e]
        );
      };
      var kr = function (t, e) {
        const n = [];
        const r = {};
        const i = {};
        t.forEach((t) => {
          i[t.id] = t;
        }),
          t.forEach((t, e) => {
            const o = Object(gt.c)(t);
            (o.itemType = 'combo'),
              (o.children = void 0),
              o.parentId === o.id
                ? (console.warn(
                    `The parentId for combo ${o.id} can not be the same as the combo's id`,
                  ),
                  delete o.parentId)
                : o.parentId &&
                  !i[o.parentId] &&
                  (console.warn(`The parent combo for combo ${o.id} does not exist!`),
                  delete o.parentId);
            let a = r[o.id];
            if (a) {
              if (((o.children = a.children), (r[o.id] = o), !(a = o).parentId))
                return void n.push(a);
              const s = r[a.parentId];
              if (s) s.children ? s.children.push(o) : (s.children = [o]);
              else {
                const u = { id: a.parentId, children: [a] };
                (r[a.parentId] = u), (r[o.id] = o);
              }
            } else if (Object(gt.y)(t.parentId)) {
              const c = r[t.parentId];
              if (c) c.children ? c.children.push(o) : (c.children = [o]), (r[o.id] = o);
              else {
                const h = { id: t.parentId, children: [o] };
                (r[h.id] = h), (r[o.id] = o);
              }
            } else n.push(o), (r[o.id] = o);
          });
        const o = {};
        (e || []).forEach((t) => {
          o[t.id] = t;
          const e = r[t.comboId];
          if (e) {
            const n = { id: t.id, comboId: t.comboId };
            e.children ? e.children.push(n) : (e.children = [n]),
              (n.itemType = 'node'),
              (r[t.id] = n);
          }
        });
        let a = 0;
        return (
          n.forEach((t) => {
            (t.depth = a + 10),
              Or(t, (t) => {
                let e;
                const n = r[t.id].itemType;
                (e = n === 'node' ? r[t.comboId] : r[t.parentId]),
                  (t.depth = e && n === 'node' ? a + 1 : a + 10),
                  a < t.depth && (a = t.depth);
                const i = o[t.id];
                return i && (i.depth = t.depth), !0;
              });
          }),
          n
        );
      };
      var Ar = function (t, e, n) {
        let r;
        let i = t;
        const o = { root: { children: t } };
        let a = !1;
        let s = 'root';
        (t || []).forEach((t) => {
          if (!a)
            return t.id === e
              ? ((r = t),
                t.itemType === 'combo' ? (r.parentId = n) : (r.comboId = n),
                void (a = !0))
              : void Mr(t, (t) => {
                  return (
                    (o[t.id] = { children: t.children }),
                    (i = o[t.parentId || t.comboId || 'root'].children),
                    !t ||
                      (!t.removed && e !== t.id) ||
                      !i ||
                      ((s = t.parentId || t.comboId || 'root'),
                      (r = t),
                      t.itemType === 'combo' ? (r.parentId = n) : (r.comboId = n),
                      (a = !0),
                      !1)
                  );
                });
        });
        const u = (i = o[s].children) ? i.indexOf(r) : -1;
        if (
          (u > -1 && i.splice(u, 1),
          a || ((r = { id: e, itemType: 'node', comboId: n }), (o[e] = { children: void 0 })),
          e)
        ) {
          let c = !1;
          if (n) {
            let h = 0;
            (t || []).forEach((t) => {
              c ||
                Mr(t, (t) => {
                  return (
                    n !== t.id ||
                    ((c = !0),
                    t.children ? t.children.push(r) : (t.children = [r]),
                    (h = t.depth),
                    r.itemType === 'node' ? (r.depth = h + 2) : (r.depth = h + 1),
                    !1)
                  );
                });
            });
          } else (n && c) || r.itemType === 'node' || t.push(r);
          let l = r.depth;
          Mr(r, (t) => {
            return t.itemType === 'node' ? (l += 2) : (l += 1), (t.depth = l), !0;
          });
        }
        return t;
      };
      var Er = function (t, e) {
        const n = {
          minX: 1 / 0,
          minY: 1 / 0,
          maxX: -1 / 0,
          maxY: -1 / 0,
          x: void 0,
          y: void 0,
          width: void 0,
          height: void 0,
          centerX: void 0,
          centerY: void 0,
        };
        return t && t.length !== 0
          ? (t.forEach((t) => {
              const r = e.findById(t.id);
              if (r && r.isVisible()) {
                r.set('bboxCanvasCache', void 0);
                const i = r.getCanvasBBox();
                i.x && n.minX > i.minX && (n.minX = i.minX),
                  i.y && n.minY > i.minY && (n.minY = i.minY),
                  i.x && n.maxX < i.maxX && (n.maxX = i.maxX),
                  i.y && n.maxY < i.maxY && (n.maxY = i.maxY);
              }
            }),
            (n.x = (n.minX + n.maxX) / 2),
            (n.y = (n.minY + n.maxY) / 2),
            (n.width = n.maxX - n.minX),
            (n.height = n.maxY - n.minY),
            (n.centerX = (n.minX + n.maxX) / 2),
            (n.centerY = (n.minY + n.maxY) / 2),
            Object.keys(n).forEach((t) => {
              (n[t] !== 1 / 0 && n[t] !== -1 / 0) || (n[t] = void 0);
            }),
            n)
          : n;
      };
      var Pr = function (t) {
        let e = Object(gt.u)(t.x) || Object(gt.u)(t.y) || t.type || t.anchorPoints || t.size;
        return (
          t.style &&
            (e =
              e ||
              Object(gt.u)(t.style.r) ||
              Object(gt.u)(t.style.width) ||
              Object(gt.u)(t.style.height) ||
              Object(gt.u)(t.style.rx) ||
              Object(gt.u)(t.style.ry)),
          e
        );
      };
      var Nr = function (t) {
        const e = {};
        return (
          Object.keys(t).forEach((n) => {
            const r = t[n];
            if (Object(gt.w)(r)) {
              const i = {};
              Object.keys(r).forEach((t) => {
                const e = r[t];
                (t !== 'img' || Object(gt.y)(e)) && (i[t] = Object(gt.c)(e));
              }),
                (e[n] = i);
            } else e[n] = Object(gt.c)(r);
          }),
          e
        );
      };
      const Tr = function (t) {
        if (!t) return console.error('G6 Error Tips: the data must be defined'), !1;
        const e = t.nodes;
        const n = t.edges;
        const r = t.combos;
        const i = void 0 === r ? [] : r;
        if (!e && !n) {
          let o = !0;
          return (
            Mr(t, (t) => {
              return !!Object(gt.y)(t.id) || ((o = !1), !1);
            }),
            o
          );
        }
        const a = (e || []).find((t) => {
          return !Object(gt.y)(t.id);
        });
        if (a)
          return (
            console.warn(
              `G6 Warning Tips: missing 'id' property, or %c${a.id}%c is not a string.`,
              'font-size: 20px; color: red;',
              '',
            ),
            !1
          );
        const s = (e || []).map((t) => {
          return t.id;
        });
        const u = i.map((t) => {
          return t.id;
        });
        const c = Object(h.f)(Object(h.f)([], s), u);
        const l = (n || []).find((t) => {
          return !c.includes(t.source) || !c.includes(t.target);
        });
        return (
          !l ||
          (console.warn(
            `G6 Warning Tips: The source %c${l.source}%c or the target %c${l.target}%c of the edge do not exist in the nodes or combos.`,
            'font-size: 20px; color: red;',
            '',
            'font-size: 20px; color: red;',
            '',
          ),
          !1)
        );
      };
      const Ir = (function () {
        function t(t) {
          (this.graph = t),
            (this.destroyed = !1),
            (this.modes = t.get('modes') || { default: [] }),
            this.formatModes(),
            (this.mode = t.get('defaultMode') || 'default'),
            (this.currentBehaves = []),
            this.setMode(this.mode);
        }
        return (
          (t.prototype.formatModes = function () {
            const t = this.modes;
            Object(gt.f)(t, (t) => {
              Object(gt.f)(t, (e, n) => {
                Object(gt.y)(e) && (t[n] = { type: e });
              });
            });
          }),
          (t.prototype.setBehaviors = function (t) {
            let e;
            const n = this.graph;
            const r = this.modes[t];
            const i = [];
            Object(gt.f)(r || [], (t) => {
              const r = tn.getBehavior(t.type || t);
              r && (e = new r(t)) && (e.bind(n), i.push(e));
            }),
              (this.currentBehaves = i);
          }),
          (t.mergeBehaviors = function (t, e) {
            return (
              Object(gt.f)(e, (e) => {
                t.indexOf(e) < 0 && (Object(gt.y)(e) && (e = { type: e }), t.push(e));
              }),
              t
            );
          }),
          (t.filterBehaviors = function (t, e) {
            const n = [];
            return (
              t.forEach((t) => {
                let r = '';
                (r = Object(gt.y)(t) ? t : t.type), e.indexOf(r) < 0 && n.push(t);
              }),
              n
            );
          }),
          (t.prototype.setMode = function (t) {
            const e = this.modes;
            const n = this.graph;
            const r = t;
            e[r] &&
              (n.emit('beforemodechange', { mode: t }),
              Object(gt.f)(this.currentBehaves, (t) => {
                t.delegate && t.delegate.remove(), t.unbind(n);
              }),
              this.setBehaviors(r),
              n.emit('aftermodechange', { mode: t }),
              (this.mode = t));
          }),
          (t.prototype.getMode = function () {
            return this.mode;
          }),
          (t.prototype.manipulateBehaviors = function (e, n, r) {
            let i;
            const o = this;
            if (((i = Object(gt.n)(e) ? e : [e]), Object(gt.n)(n)))
              return (
                Object(gt.f)(n, (e) => {
                  o.modes[e]
                    ? (o.modes[e] = r
                        ? t.mergeBehaviors(o.modes[e] || [], i)
                        : t.filterBehaviors(o.modes[e] || [], i))
                    : r && (o.modes[e] = i);
                }),
                this
              );
            let a = n;
            return (
              n || (a = this.mode),
              this.modes[a] || (r && (this.modes[a] = i)),
              (this.modes[a] = r
                ? t.mergeBehaviors(this.modes[a] || [], i)
                : t.filterBehaviors(this.modes[a] || [], i)),
              this.setMode(this.mode),
              this
            );
          }),
          (t.prototype.updateBehavior = function (t, e, n) {
            Object(gt.y)(t) && (t = { type: t });
            let r = [];
            if (n && n !== this.mode && n !== 'default') {
              if (!(r = this.modes[n]) || !r.length)
                return (
                  console.warn(
                    'Update behavior failed! There is no behaviors in this mode on the graph.',
                  ),
                  this
                );
              const i = r.length;
              for (a = 0; a < i; a++) {
                if ((s = r[a]).type === t.type || s === t.type)
                  return s === t.type && (s = { type: s }), Object.assign(s, e), (r[a] = s), this;
                a === i - 1 &&
                  console.warn('Update behavior failed! There is no such behavior in the mode');
              }
            } else {
              if (!(r = this.currentBehaves) || !r.length)
                return (
                  console.warn(
                    'Update behavior failed! There is no behaviors in this mode on the graph.',
                  ),
                  this
                );
              for (var o = r.length, a = 0; a < o; a++) {
                var s;
                if ((s = r[a]).type === t.type) return s.updateCfg(e), this;
                a === o - 1 &&
                  console.warn('Update behavior failed! There is no such behavior in the mode');
              }
            }
            return this;
          }),
          (t.prototype.destroy = function () {
            (this.graph = null),
              (this.modes = null),
              (this.currentBehaves = null),
              (this.destroyed = !0);
          }),
          t
        );
      })();
      function Br(t) {
        Wn ||
          ((Wn = document.createElement('table')),
          (Gn = document.createElement('tr')),
          (qn = /^\s*<(\w+|!)[^>]*>/),
          (Hn = {
            tr: document.createElement('tbody'),
            tbody: Wn,
            thead: Wn,
            tfoot: Wn,
            td: Gn,
            th: Gn,
            '*': document.createElement('div'),
          }));
        let e = qn.test(t) && RegExp.$1;
        (e && e in Hn) || (e = '*');
        const n = Hn[e];
        (t = t.replace(/(^\s*)|(\s*$)/g, '')), (n.innerHTML = `${t}`);
        const r = n.childNodes[0];
        return n.removeChild(r), r;
      }
      function Lr(t, e) {
        if (t) for (const n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
        return t;
      }
      const Dr = (function (t) {
        function e(e, n) {
          const r = t.call(this, e, n) || this;
          return (
            (r.item = n.item),
            (r.canvasX = n.canvasX),
            (r.canvasY = n.canvasY),
            (r.detail = n.detail),
            r
          );
        }
        return Object(h.c)(e, t), e;
      })(X.Event);
      var _r = function (t) {
        return `${t}-${Math.random()}${Date.now()}`;
      };
      var Yr = function (t) {
        let e = 0;
        let n = 0;
        let r = 0;
        let i = 0;
        if (Object(gt.u)(t)) e = n = r = i = t;
        else if (Object(gt.y)(t)) {
          e = n = r = i = parseInt(t, 10);
        } else
          Object(gt.n)(t) &&
            ((e = t[0]),
            (r = Object(gt.t)(t[1]) ? t[0] : t[1]),
            (i = Object(gt.t)(t[2]) ? t[0] : t[2]),
            (n = Object(gt.t)(t[3]) ? r : t[3]));
        return [e, r, i, n];
      };
      var Rr = function (t) {
        const e = new Dr(t.type, t);
        return (
          (e.clientX = t.clientX),
          (e.clientY = t.clientY),
          (e.x = t.x),
          (e.y = t.y),
          (e.target = t.target),
          (e.currentTarget = t.currentTarget),
          (e.bubbles = !0),
          (e.item = t.item),
          e
        );
      };
      var Fr = function (t) {
        if (!t) return !1;
        for (let e = [1, 0, 0, 0, 1, 0, 0, 0, 1], n = 0; n < 9; n++) if (t[n] !== e[n]) return !0;
        return !1;
      };
      var Xr = function (t) {
        return Number.isNaN(Number(t));
      };
      var zr = function (t) {
        for (var e = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0, o = 0; o < t.length; o++) {
          const a = t[o].getBBox();
          const s = a.minX;
          const u = a.minY;
          const c = a.maxX;
          const h = a.maxY;
          s < e && (e = s), u < r && (r = u), c > n && (n = c), h > i && (i = h);
        }
        return {
          x: Math.floor(e),
          y: Math.floor(r),
          width: Math.ceil(n) - Math.floor(e),
          height: Math.ceil(i) - Math.floor(r),
          minX: e,
          minY: r,
          maxX: n,
          maxY: i,
        };
      };
      var Wr = function (t, e, n, r, i) {
        void 0 === e && (e = 15),
          void 0 === n && (n = 'quadratic'),
          void 0 === r && (r = void 0),
          void 0 === i && (i = void 0);
        for (
          var o = t.length,
            a = 2 * e,
            s = [
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
            ],
            u = {},
            c = [],
            h = {},
            l = 0;
          l < o;
          l++
        ) {
          const d = t[l];
          const f = d.source;
          const p = d.target;
          const g = `${f}-${p}`;
          if (!c[l]) {
            u[g] || (u[g] = []), (c[l] = !0), u[g].push(d);
            for (let y = 0; y < o; y++)
              if (l !== y) {
                const v = t[y];
                const m = v.source;
                const b = v.target;
                c[y] ||
                  (f === b && p === m
                    ? (u[g].push(v), (c[y] = !0), (h[`${m}|${b}|${u[g].length - 1}`] = !0))
                    : f === m && p === b && (u[g].push(v), (c[y] = !0)));
              }
          }
        }
        for (const x in u)
          for (let w = u[x], O = w.length, M = 0; M < O; M++) {
            const S = w[M];
            if (S.source !== S.target)
              if (O === 1 && r && S.source !== S.target) S.type = r;
              else {
                S.type = n;
                const C = (M % 2 == 0 ? 1 : -1) * (h[`${S.source}|${S.target}|${M}`] ? -1 : 1);
                S.curveOffset =
                  O % 2 == 1 ? C * Math.ceil(M / 2) * a : C * (Math.floor(M / 2) * a + e);
              }
            else
              i && (S.type = i),
                (S.loopCfg = { position: s[M % 8], dist: 20 * Math.floor(M / 8) + 50 });
          }
        return t;
      };
      const Gr = (function () {
        function t(t) {
          (this.destroyed = !1), (this.graph = t), (this.destroyed = !1);
        }
        return (
          (t.prototype.getViewCenter = function () {
            const t = this.getFormatPadding();
            const e = this.graph;
            const n = this.graph.get('width');
            const r = e.get('height');
            return { x: (n - t[1] - t[3]) / 2 + t[3], y: (r - t[0] - t[2]) / 2 + t[0] };
          }),
          (t.prototype.fitCenter = function () {
            const t = this.graph;
            const e = t.get('group');
            e.resetMatrix();
            const n = e.getCanvasBBox();
            if (n.width !== 0 && n.height !== 0) {
              const r = this.getViewCenter();
              const i = n.x + n.width / 2;
              const o = n.y + n.height / 2;
              t.translate(r.x - i, r.y - o);
            }
          }),
          (t.prototype.fitView = function () {
            const t = this.graph;
            const e = this.getFormatPadding();
            const n = t.get('width');
            const r = t.get('height');
            const i = t.get('group');
            i.resetMatrix();
            const o = i.getCanvasBBox();
            if (o.width !== 0 && o.height !== 0) {
              const a = this.getViewCenter();
              const s = o.x + o.width / 2;
              const u = o.y + o.height / 2;
              t.translate(a.x - s, a.y - u);
              const c = (n - e[1] - e[3]) / o.width;
              const h = (r - e[0] - e[2]) / o.height;
              let l = c;
              c > h && (l = h), t.zoom(l, a);
            }
          }),
          (t.prototype.getFormatPadding = function () {
            const t = this.graph.get('fitViewPadding');
            return Yr(t);
          }),
          (t.prototype.focusPoint = function (t, e, n) {
            const r = this;
            const i = this.getViewCenter();
            const o = this.getPointByCanvas(i.x, i.y);
            let a = this.graph.get('group').getMatrix();
            if ((a || (a = [1, 0, 0, 0, 1, 0, 0, 0, 1]), e)) {
              const s = (o.x - t.x) * a[0];
              const u = (o.y - t.y) * a[4];
              let c = 0;
              let l = 0;
              let d = 0;
              let f = 0;
              this.graph.get('canvas').animate((t) => {
                (d = s * t), (f = u * t), r.graph.translate(d - c, f - l), (c = d), (l = f);
              }, Object(h.a)({}, n));
            } else this.graph.translate((o.x - t.x) * a[0], (o.y - t.y) * a[4]);
          }),
          (t.prototype.getPointByCanvas = function (t, e) {
            let n = this.graph.get('group').getMatrix();
            return n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]), Nn({ x: t, y: e }, n);
          }),
          (t.prototype.getPointByClient = function (t, e) {
            const n = this.graph.get('canvas').getPointByClient(t, e);
            return this.getPointByCanvas(n.x, n.y);
          }),
          (t.prototype.getClientByPoint = function (t, e) {
            const n = this.graph.get('canvas');
            const r = this.getCanvasByPoint(t, e);
            const i = n.getClientByPoint(r.x, r.y);
            return { x: i.x, y: i.y };
          }),
          (t.prototype.getCanvasByPoint = function (t, e) {
            let n = this.graph.get('group').getMatrix();
            return n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]), Pn({ x: t, y: e }, n);
          }),
          (t.prototype.focus = function (t, e, n) {
            if ((Object(gt.y)(t) && (t = this.graph.findById(t)), t)) {
              let r = 0;
              let i = 0;
              if (t.getType && t.getType() === 'edge') {
                const o = t.getSource().get('group').getMatrix();
                const a = t.getTarget().get('group').getMatrix();
                o && a
                  ? ((r = (o[6] + a[6]) / 2), (i = (o[7] + a[7]) / 2))
                  : (o || a) && ((r = o ? o[6] : a[6]), (i = o ? o[7] : a[7]));
              } else {
                let s = t.get('group').getMatrix();
                s || (s = [1, 0, 0, 0, 1, 0, 0, 0, 1]), (r = s[6]), (i = s[7]);
              }
              this.focusPoint({ x: r, y: i }, e, n);
            }
          }),
          (t.prototype.changeSize = function (t, e) {
            const n = this.graph;
            if (!Object(gt.u)(t) || !Object(gt.u)(e))
              throw Error(
                'invalid canvas width & height, please make sure width & height type is number',
              );
            n.set({ width: t, height: e }),
              n.get('canvas').changeSize(t, e),
              n.get('plugins').forEach((r) => {
                if (r.get('gridContainer')) {
                  const i = n.get('minZoom');
                  Lr(r.get('container'), { width: `${t}px`, height: `${e}px` }),
                    Lr(r.get('gridContainer'), {
                      width: `${t / i}px`,
                      height: `${e / i}px`,
                      left: 0,
                      top: 0,
                    });
                }
              });
          }),
          (t.prototype.destroy = function () {
            (this.graph = null), (this.destroyed = !1);
          }),
          t
        );
      })();
      function qr(t) {
        return (qr =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Hr(t) {
        if (typeof t !== 'string') return t;
        const e = function (t) {
          if (typeof t !== 'string') return t;
          try {
            return JSON.parse(t.trim());
          } catch (e) {
            return t.trim();
          }
        };
        const n = e(t);
        if (typeof n !== 'string') return n;
        for (
          var r = function (t) {
              return t[t.length - 1];
            },
            i = t.trim(),
            o = [],
            a = [],
            s = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              return t.some((t) => {
                return r(a) === t;
              });
            },
            u = null,
            c = 0,
            h = '';
          c < i.length;

        ) {
          const l = i[c];
          const d = s('"', "'");
          if (d || l.trim()) {
            const f = i[c - 1] === '\\';
            const p = s('}');
            const g = s(']');
            const y = s(',');
            const v = r(o);
            if (d)
              if (r(a) !== l || f) h += l;
              else {
                a.pop();
                const m = e(h);
                v.push(m), (u = m), (h = '');
              }
            else if (g && l === ',') h && (v.push(e(h)), (h = ''));
            else if (p && l === ':') a.push(','), h && (v.push(h), (h = ''));
            else if (y && l === ',') h && (v.push(e(h)), (h = '')), a.pop();
            else if (l === '}' && (p || y)) {
              h && (v.push(e(h)), (h = '')), y && a.pop();
              for (var b = {}, x = 1; x < v.length; x += 2) b[v[x - 1]] = v[x];
              o.pop(), o.length && r(o).push(b), a.pop(), (u = b);
            } else
              l === ']' && g
                ? (h && (v.push(e(h)), (h = '')),
                  o.pop(),
                  o.length && r(o).push(v),
                  a.pop(),
                  (u = v))
                : l === '{'
                ? (o.push([]), a.push('}'))
                : l === '['
                ? (o.push([]), a.push(']'))
                : l === '"'
                ? a.push('"')
                : l === "'"
                ? a.push("'")
                : (h += l);
            c += 1;
          } else c += 1;
        }
        return u || h;
      }
      function Vr(t, e) {
        let n;
        void 0 === e && (e = { x: 0, y: 0 });
        const r = Object(h.a)({ x: 0, y: 0, width: 0, height: 0 }, e);
        if ((n = t.children) === null || void 0 === n ? void 0 : n.length) {
          const i = t.attrs;
          const o = void 0 === i ? {} : i;
          const a = o.marginTop;
          const s = Object(h.a)({}, e);
          a && (s.y += a);
          for (let u = 0; u < t.children.length; u++) {
            t.children[u].attrs.key = `${o.key || 'root'} -${u} `;
            const c = Vr(t.children[u], s);
            if (c.bbox) {
              const l = c.bbox;
              c.attrs.next === 'inline' ? (s.x += c.bbox.width) : (s.y += c.bbox.height),
                l.width + l.x > r.width && (r.width = l.width + l.x),
                l.height + l.y > r.height && (r.height = l.height + l.y);
            }
          }
        }
        return (
          (t.bbox = (function (t, e, n) {
            let r;
            let i;
            const o = t.attrs;
            const a = void 0 === o ? {} : o;
            const s = { x: e.x || 0, y: e.y || 0, width: n.width || 0, height: n.height || 0 };
            switch (t.type) {
              case 'maker':
              case 'circle':
                a.r && ((i = 2 * a.r), (r = 2 * a.r));
                break;
              case 'text':
                a.text &&
                  ((i = jr(a.text, a.fontSize || 12)[0]),
                  (r = 16),
                  (s.y += r),
                  (s.height = r),
                  (s.width = i),
                  (t.attrs = Object(h.a)({ fontSize: 12, fill: '#000' }, a)));
                break;
              default:
                a.width && (i = a.width), a.height && (r = a.height);
            }
            return (
              r >= 0 && (s.height = r),
              i >= 0 && (s.width = i),
              a.marginTop && (s.y += a.marginTop),
              a.marginLeft && (s.x += a.marginLeft),
              s
            );
          })(t, e, r)),
          (t.attrs = Object(h.a)(Object(h.a)({}, t.attrs), t.bbox)),
          t
        );
      }
      function Ur(t) {
        const e = {};
        const n = function (e) {
          const n = (function (t) {
            return function (e) {
              for (var n = t.length, r = [], i = 0, o = ''; i < n; )
                if (t[i] === '{' && t[i + 1] === '{') r.push(o), (o = ''), (i += 2);
                else if (t[i] === '}' && t[i + 1] === '}') {
                  if (r.length) {
                    const a = r.pop();
                    (o = Object(gt.i)(e, o, a.endsWith('=') ? `"{${o}}"` : o)), r.push(a + o);
                  }
                  (i += 2), (o = '');
                } else (o += t[i]), (i += 1);
              return (
                r.push(o),
                r
                  .map((t, e) => {
                    return r[e - 1] && r[e - 1].endsWith('=') ? `"{${t}}"` : t;
                  })
                  .join('')
              );
            };
          })(typeof t === 'function' ? t(e) : t)(e);
          const r = document.createElement('div');
          r.innerHTML = n;
          const i = Vr(
            (function t(e, n) {
              let r = {};
              const i = (e.getAttributeNames && e.getAttributeNames()) || [];
              const o =
                e.children &&
                Array.from(e.children).map((e) => {
                  return t(e, n);
                });
              const a = {};
              const s = e.tagName ? e.tagName.toLowerCase() : 'group';
              return (
                s === 'text' && (r.text = e.innerText),
                (a.type = s),
                s === 'img' && (a.type = 'image'),
                Array.from(i).forEach((t) => {
                  const n = t.split('-').reduce((t, e) => {
                    return t + e.charAt(0).toUpperCase() + e.slice(1);
                  });
                  const i = e.getAttribute(t);
                  try {
                    if (n === 'style' || n === 'attrs') {
                      const o = Hr(i);
                      r = Object(h.a)(Object(h.a)({}, r), o);
                    } else a[n] = Hr(i);
                  } catch (t) {
                    if (n === 'style') throw t;
                    a[n] = i;
                  }
                }),
                (a.attrs = r),
                n &&
                  n.style &&
                  a.name &&
                  qr(n.style[a.name]) === 'object' &&
                  (a.attrs = Object(h.a)(Object(h.a)({}, a.attrs), n.style[a.name])),
                n &&
                  n.style &&
                  a.keyshape &&
                  (a.attrs = Object(h.a)(Object(h.a)({}, a.attrs), n.style)),
                o.length && (a.children = o),
                a
              );
            })(r.children[0], e),
          );
          return r.remove(), i;
        };
        return {
          draw(t, r) {
            const i = n(t);
            let o = r;
            return (
              (function t(e) {
                const n = e.attrs;
                const i = void 0 === n ? {} : n;
                const a = e.bbox;
                const s = e.type;
                const u = e.children;
                const c = Object(h.e)(e, ['attrs', 'bbox', 'type', 'children']);
                if (e.type !== 'group') {
                  const l = r.addShape(
                    e.type,
                    Object(h.a)({ attrs: i, origin: { bbox: a, type: s, children: u } }, c),
                  );
                  e.keyshape && (o = l);
                }
                e.children &&
                  e.children.forEach((e) => {
                    return t(e);
                  });
              })(i),
              (e[t.id] = [i]),
              o
            );
          },
          update(t, r) {
            e[t.id] || (e[t.id] = []);
            const i = r.getContainer();
            const o = i.get('children');
            const a = n(t);
            const s = (function t(e, n) {
              let r;
              let i;
              let o;
              let a;
              const s = (e || {}).type;
              const u = ((n == null ? void 0 : n.attrs) || {}).key;
              if ((u && e && (e.attrs.key = u), !e && n))
                return { action: 'delete', val: n, type: s, key: u };
              if (e && !n) return { action: 'add', val: e, type: s };
              if (!e && !n) return { action: 'same', type: s };
              const c = [];
              if (
                ((r = e.children) === null || void 0 === r ? void 0 : r.length) > 0 ||
                ((i = n.children) === null || void 0 === i ? void 0 : i.length) > 0
              )
                for (
                  let h = Math.max(
                      (o = e.children) === null || void 0 === o ? void 0 : o.length,
                      (a = n.children) === null || void 0 === a ? void 0 : a.length,
                    ),
                    l = n.children || [],
                    d = e.children || [],
                    f = 0;
                  f < h;
                  f += 1
                )
                  c.push(t(d[f], l[f]));
              const p = Object.keys(n.attrs);
              const g = Object.keys(e.attrs);
              return n.type !== e.type
                ? { action: 'restructure', nowTarget: e, formerTarget: n, key: u, children: c }
                : p
                    .filter((t) => {
                      return t !== 'children';
                    })
                    .some((t) => {
                      return e.attrs[t] !== n.attrs[t] || !g.includes(t);
                    })
                ? { action: 'change', val: e, children: c, type: s, key: u }
                : { action: 'same', children: c, type: s, key: u };
            })(a, e[t.id].pop());
            const u = function t(e) {
              let n;
              e.type !== 'group' && i.addShape(e.type, { attrs: e.attrs }),
                ((n = e.children) === null || void 0 === n ? void 0 : n.length) &&
                  e.children.map((e) => {
                    return t(e);
                  });
            };
            const c = function t(e) {
              let n;
              const r = o.find((t) => {
                return t.attrs.key === e.attrs.key;
              });
              r && i.removeChild(r),
                ((n = e.children) === null || void 0 === n ? void 0 : n.length) &&
                  e.children.map((e) => {
                    return t(e);
                  });
            };
            !(function t(e) {
              const n = e.key;
              if (e.type !== 'group') {
                const i = o.find((t) => {
                  return t.attrs.key === n;
                });
                switch (e.action) {
                  case 'change':
                    if (i) {
                      const a = e.val.keyshape ? r.getOriginStyle() : {};
                      i.attr(Object(h.a)(Object(h.a)({}, a), e.val.attrs));
                    }
                    break;
                  case 'add':
                    u(e.val);
                    break;
                  case 'delete':
                    c(e.val);
                    break;
                  case 'restructure':
                    c(e.formerTarget), u(e.nowTarget);
                }
              }
              e.children &&
                e.children.forEach((e) => {
                  return t(e);
                });
            })(s),
              e[t.id].push(a);
          },
          getAnchorPoints() {
            return [
              [0, 0.5],
              [1, 0.5],
              [0.5, 1],
              [0.5, 0],
            ];
          },
        };
      }
      const Zr = {};
      function Kr(t) {
        return Zr[t] || (Zr[t] = Object(gt.M)(t)), Zr[t];
      }
      const Qr = {
        defaultShapeType: 'defaultType',
        className: null,
        getShape(t) {
          return this[t] || this[this.defaultShapeType] || this['simple-circle'];
        },
        draw(t, e, n) {
          const r = this.getShape(t);
          const i = r.draw(e, n);
          return r.afterDraw && r.afterDraw(e, n, i), i;
        },
        baseUpdate(t, e, n) {
          const r = this.getShape(t);
          r.update && r.update(e, n), r.afterUpdate && r.afterUpdate(e, n);
        },
        setState(t, e, n, r) {
          this.getShape(t).setState(e, n, r);
        },
        shouldUpdate(t) {
          return !!this.getShape(t).update;
        },
        getControlPoints(t, e) {
          return this.getShape(t).getControlPoints(e);
        },
        getAnchorPoints(t, e) {
          return this.getShape(t).getAnchorPoints(e);
        },
      };
      const $r = {
        options: {},
        draw(t, e) {
          return this.drawShape(t, e);
        },
        drawShape() {},
        afterDraw() {},
        afterUpdate() {},
        setState() {},
        getControlPoints(t) {
          return t.controlPoints;
        },
        getAnchorPoints(t) {
          const e = this.options.anchorPoints;
          return t.anchorPoints || e;
        },
      };
      const Jr = (function () {
        function t() {}
        return (
          (t.registerFactory = function (e, n) {
            const r = Kr(e);
            const i = Qr;
            const o = Object(h.a)(Object(h.a)({}, i), n);
            return (t[r] = o), (o.className = r), o;
          }),
          (t.getFactory = function (e) {
            return t[Kr(e)];
          }),
          (t.registerNode = function (e, n, r) {
            let i;
            const o = t.Node;
            if (typeof n === 'string' || typeof n === 'function') {
              var a = Ur(n);
              i = Object(h.a)(Object(h.a)({}, o.getShape('single-node')), a);
            } else if (n.jsx) {
              a = Ur(n.jsx);
              i = Object(h.a)(Object(h.a)(Object(h.a)({}, o.getShape('single-node')), a), n);
            } else {
              o.getShape(r);
              const s = r ? o.getShape(r) : $r;
              i = Object(h.a)(Object(h.a)({}, s), n);
            }
            return (i.type = e), (i.itemType = 'node'), (o[e] = i), i;
          }),
          (t.registerEdge = function (e, n, r) {
            const i = t.Edge;
            const o = r ? i.getShape(r) : $r;
            const a = Object(h.a)(Object(h.a)({}, o), n);
            return (a.type = e), (a.itemType = 'edge'), (i[e] = a), a;
          }),
          (t.registerCombo = function (e, n, r) {
            const i = t.Combo;
            const o = r ? i.getShape(r) : $r;
            const a = Object(h.a)(Object(h.a)({}, o), n);
            return (a.type = e), (a.itemType = 'combo'), (i[e] = a), a;
          }),
          t
        );
      })();
      const ti = Jr;
      Jr.registerFactory('node', { defaultShapeType: 'circle' }),
        Jr.registerFactory('edge', { defaultShapeType: 'line' }),
        Jr.registerFactory('combo', { defaultShapeType: 'circle' });
      const ei = (function () {
        function t(t) {
          (this._cfg = {}), (this.destroyed = !1);
          const e = {
            id: void 0,
            type: 'item',
            model: {},
            group: void 0,
            animate: !1,
            visible: !0,
            locked: !1,
            event: !0,
            keyShape: void 0,
            states: [],
          };
          this._cfg = Object.assign(e, this.getDefaultCfg(), t);
          const n = this.get('model');
          let r = n.id;
          const i = this.get('type');
          r || ((r = _r(i)), (this.get('model').id = r)), this.set('id', r);
          const o = t.group;
          o && (o.set('item', this), o.set('id', r)), this.init(), this.draw();
          const a = n.shape || n.type || (i === 'edge' ? 'line' : 'circle');
          const s = this.get('shapeFactory');
          if (s && s[a]) {
            const u = s[a].options;
            if (u && u.stateStyles) {
              let c = this.get('styles') || n.stateStyles;
              (c = Object(gt.e)({}, u.stateStyles, c)), this.set('styles', c);
            }
          }
        }
        return (
          (t.prototype.calculateBBox = function () {
            const t = this.get('keyShape');
            const e = this.get('group');
            const n = br(t, e);
            return (
              (n.x = n.minX),
              (n.y = n.minY),
              (n.width = n.maxX - n.minX),
              (n.height = n.maxY - n.minY),
              (n.centerX = (n.minX + n.maxX) / 2),
              (n.centerY = (n.minY + n.maxY) / 2),
              n
            );
          }),
          (t.prototype.calculateCanvasBBox = function () {
            const t = this.get('keyShape');
            const e = this.get('group');
            const n = br(t, e);
            return (
              (n.x = n.minX),
              (n.y = n.minY),
              (n.width = n.maxX - n.minX),
              (n.height = n.maxY - n.minY),
              (n.centerX = (n.minX + n.maxX) / 2),
              (n.centerY = (n.minY + n.maxY) / 2),
              n
            );
          }),
          (t.prototype.drawInner = function () {
            const t = this.get('shapeFactory');
            const e = this.get('group');
            const n = this.get('model');
            e.clear();
            const r = n.visible;
            if ((void 0 === r || r || this.changeVisibility(r), t)) {
              this.updatePosition(n);
              const i = this.getShapeCfg(n);
              const o = i.type;
              const a = t.draw(o, i, e);
              a && (this.set('keyShape', a), a.set('isKeyShape', !0), a.set('draggable', !0)),
                this.setOriginStyle(),
                this.set('currentShape', o),
                this.restoreStates(t, o);
            }
          }),
          (t.prototype.setOriginStyle = function () {
            const t = this.get('group').get('children');
            const e = this.getKeyShape();
            const n = this;
            const r = e.get('name');
            if (this.get('originStyle')) {
              const i = this.getOriginStyle();
              r && !i[r] && (i[r] = {});
              const o = this.getCurrentStatesStyle();
              Object(gt.f)(t, (t) => {
                const e = t.get('name');
                const a = t.attr();
                if (e && e !== r) {
                  const s = o[e];
                  i[e] || (i[e] = {}),
                    s
                      ? Object.keys(a).forEach((t) => {
                          const n = a[t];
                          n !== s[t] && (i[e][t] = n);
                        })
                      : (i[e] =
                          t.get('type') !== 'image' ? Object(gt.c)(a) : n.getShapeStyleByName(e));
                } else {
                  const u = t.attr();
                  const c = Object(h.a)(Object(h.a)({}, o), o[r]);
                  Object.keys(u).forEach((t) => {
                    const e = u[t];
                    c[t] !== e && (r ? (i[r][t] = e) : (i[t] = e));
                  });
                }
              }),
                i.path && delete i.path,
                i.matrix && delete i.matrix,
                i.x && delete i.x,
                i.y && delete i.y,
                i[r] && i[r].x && delete i[r].x,
                i[r] && i[r].y && delete i[r].y,
                n.set('originStyle', i);
            } else {
              const a = {};
              Object(gt.f)(t, (t) => {
                const e = t.get('type');
                const i = t.get('name');
                if (i && i !== r)
                  a[i] = e !== 'image' ? Object(gt.c)(t.attr()) : n.getShapeStyleByName(i);
                else {
                  const o = n.getShapeStyleByName();
                  if ((o.path && delete o.path, o.matrix && delete o.matrix, r))
                    if (i) a[r] = o;
                    else {
                      const s = _r('shape');
                      t.set('name', s),
                        (a[s] = e !== 'image' ? Object(gt.c)(t.attr()) : n.getShapeStyleByName(i));
                    }
                  else Object.assign(a, o);
                }
              }),
                n.set('originStyle', a);
            }
          }),
          (t.prototype.restoreStates = function (t, e) {
            const n = this;
            const r = n.get('states');
            Object(gt.f)(r, (r) => {
              t.setState(e, r, !0, n);
            });
          }),
          (t.prototype.init = function () {
            const t = ti.getFactory(this.get('type'));
            this.set('shapeFactory', t);
          }),
          (t.prototype.get = function (t) {
            return this._cfg[t];
          }),
          (t.prototype.set = function (t, e) {
            Object(gt.x)(t)
              ? (this._cfg = Object(h.a)(Object(h.a)({}, this._cfg), t))
              : (this._cfg[t] = e);
          }),
          (t.prototype.getDefaultCfg = function () {
            return {};
          }),
          (t.prototype.clearCache = function () {
            this.set('bboxCache', null), this.set('bboxCanvasCache', null);
          }),
          (t.prototype.beforeDraw = function () {}),
          (t.prototype.afterDraw = function () {}),
          (t.prototype.afterUpdate = function () {}),
          (t.prototype.draw = function () {
            this.beforeDraw(), this.drawInner(), this.afterDraw();
          }),
          (t.prototype.getShapeStyleByName = function (t) {
            let e;
            const n = this.get('group');
            if (
              (e = t
                ? n.find((e) => {
                    return e.get('name') === t;
                  })
                : this.getKeyShape())
            ) {
              const r = {};
              return (
                Object(gt.f)(e.attr(), (t, e) => {
                  e !== 'img' && (r[e] = t);
                }),
                r
              );
            }
            return {};
          }),
          (t.prototype.getShapeCfg = function (t) {
            const e = this.get('styles');
            if (e) {
              const n = t;
              return (n.style = Object(h.a)(Object(h.a)({}, e), t.style)), n;
            }
            return t;
          }),
          (t.prototype.getStateStyle = function (t) {
            const e = this.get('styles');
            return e && e[t];
          }),
          (t.prototype.getOriginStyle = function () {
            return this.get('originStyle');
          }),
          (t.prototype.getCurrentStatesStyle = function () {
            const t = this;
            let e = {};
            const n = t.getStates();
            return n && n.length
              ? (Object(gt.f)(t.getStates(), (n) => {
                  e = Object.assign(e, t.getStateStyle(n));
                }),
                e)
              : this.getOriginStyle();
          }),
          (t.prototype.setState = function (t, e) {
            const n = this.get('states');
            const r = this.get('shapeFactory');
            let i = t;
            let o = t;
            Object(gt.y)(e) && ((i = `${t}:${e}`), (o = `${t}:`));
            let a = n;
            if (Object(gt.o)(e)) {
              const s = n.indexOf(o);
              if (e) {
                if (s > -1) return;
                n.push(i);
              } else s > -1 && n.splice(s, 1);
            } else if (Object(gt.y)(e)) {
              const u = n.filter((t) => {
                return t.includes(o);
              });
              u.length > 0 && this.clearStates(u),
                (a = a.filter((t) => {
                  return !t.includes(o);
                })).push(i),
                this.set('states', a);
            }
            if (r) {
              const c = this.get('model').type;
              r.setState(c, t, e, this);
            }
          }),
          (t.prototype.clearStates = function (t) {
            const e = this;
            const n = e.getStates();
            const r = e.get('shapeFactory');
            const i = e.get('model').type;
            t || (t = n), Object(gt.y)(t) && (t = [t]);
            const o = n.filter((e) => {
              return t.indexOf(e) === -1;
            });
            e.set('states', o),
              t.forEach((t) => {
                r.setState(i, t, !1, e);
              });
          }),
          (t.prototype.getContainer = function () {
            return this.get('group');
          }),
          (t.prototype.getKeyShape = function () {
            return this.get('keyShape');
          }),
          (t.prototype.getModel = function () {
            return this.get('model');
          }),
          (t.prototype.getType = function () {
            return this.get('type');
          }),
          (t.prototype.getID = function () {
            return this.get('id');
          }),
          (t.prototype.isItem = function () {
            return !0;
          }),
          (t.prototype.getStates = function () {
            return this.get('states');
          }),
          (t.prototype.hasState = function (t) {
            return this.getStates().indexOf(t) >= 0;
          }),
          (t.prototype.refresh = function () {
            const t = this.get('model');
            this.updatePosition(t), this.updateShape(), this.afterUpdate(), this.clearCache();
          }),
          (t.prototype.isOnlyMove = function (t) {
            return !1;
          }),
          (t.prototype.update = function (t, e) {
            void 0 === e && (e = !1);
            const n = this.get('model');
            const r = n.visible;
            const i = t.visible;
            r !== i && void 0 !== i && this.changeVisibility(i);
            const o = n.x;
            const a = n.y;
            (t.x = isNaN(t.x) ? n.x : t.x), (t.y = isNaN(t.y) ? n.y : t.y);
            const s = this.get('styles');
            if (t.stateStyles) {
              const u = t.stateStyles;
              Object(gt.D)(s, u), delete t.stateStyles;
            }
            Object.assign(n, t),
              e
                ? this.updatePosition(t)
                : ((o === t.x && a === t.y) || this.updatePosition(t), this.updateShape()),
              this.afterUpdate(),
              this.clearCache();
          }),
          (t.prototype.updateShape = function () {
            const t = this.get('shapeFactory');
            const e = this.get('model');
            const n = e.type;
            if (t.shouldUpdate(n) && n === this.get('currentShape')) {
              const r = this.getShapeCfg(e);
              t.baseUpdate(n, r, this), this.setOriginStyle();
            } else this.draw();
            this.restoreStates(t, n);
          }),
          (t.prototype.updatePosition = function (t) {
            const e = this.get('model');
            const n = Object(gt.t)(t.x) ? e.x : t.x;
            const r = Object(gt.t)(t.y) ? e.y : t.y;
            const i = this.get('group');
            if (Object(gt.t)(n) || Object(gt.t)(r)) return !1;
            (e.x = n), (e.y = r);
            const o = i.getMatrix();
            return (
              (!o || o[6] !== n || o[7] !== r) &&
              (i.resetMatrix(), _n(i, { x: n, y: r }), this.clearCache(), !0)
            );
          }),
          (t.prototype.getBBox = function () {
            let t = this.get('bboxCache');
            return t || ((t = this.calculateBBox()), this.set('bboxCache', t)), t;
          }),
          (t.prototype.getCanvasBBox = function () {
            let t = this.get('bboxCanvasCache');
            return t || ((t = this.calculateCanvasBBox()), this.set('bboxCanvasCache', t)), t;
          }),
          (t.prototype.toFront = function () {
            this.get('group').toFront();
          }),
          (t.prototype.toBack = function () {
            this.get('group').toBack();
          }),
          (t.prototype.show = function () {
            this.changeVisibility(!0);
          }),
          (t.prototype.hide = function () {
            this.changeVisibility(!1);
          }),
          (t.prototype.changeVisibility = function (t) {
            const e = this.get('group');
            t ? e.show() : e.hide(), this.set('visible', t);
          }),
          (t.prototype.isVisible = function () {
            return this.get('visible');
          }),
          (t.prototype.enableCapture = function (t) {
            const e = this.get('group');
            e && e.set('capture', t);
          }),
          (t.prototype.destroy = function () {
            if (!this.destroyed) {
              const t = this.get('animate');
              const e = this.get('group');
              t && e.stopAnimate(),
                this.clearCache(),
                e.remove(),
                (this._cfg = null),
                (this.destroyed = !0);
            }
          }),
          t
        );
      })();
      const ni = { source: 'start', target: 'end' };
      const ri = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfg = function () {
            return {
              type: 'edge',
              sourceNode: null,
              targetNode: null,
              startPoint: null,
              endPoint: null,
              linkCenter: !1,
            };
          }),
          (e.prototype.setEnd = function (t, e) {
            const n = `${ni[t]}Point`;
            const r = `${t}Node`;
            const i = this.get(r);
            i && !i.destroyed && i.removeEdge(this),
              Object(gt.x)(e)
                ? (this.set(n, e), this.set(r, null))
                : (e.addEdge(this), this.set(r, e), this.set(n, null));
          }),
          (e.prototype.getLinkPoint = function (t, e, n) {
            const r = `${ni[t]}Point`;
            const i = `${t}Node`;
            let o = this.get(r);
            if (!o) {
              const a = this.get(i);
              const s = `${t}Anchor`;
              const u = this.getPrePoint(t, n);
              const c = e[s];
              Object(gt.t)(c) || (o = a.getLinkPointByAnchor(c)),
                (o = o || a.getLinkPoint(u)),
                Object(gt.t)(o.index) || this.set(`${t}AnchorIndex`, o.index);
            }
            return o;
          }),
          (e.prototype.getPrePoint = function (t, e) {
            if (e && e.length) return e[t === 'source' ? 0 : e.length - 1];
            const n = t === 'source' ? 'target' : 'source';
            return this.getEndPoint(n);
          }),
          (e.prototype.getEndPoint = function (t) {
            const e = `${t}Node`;
            const n = `${ni[t]}Point`;
            const r = this.get(e);
            return r ? r.get('model') : this.get(n);
          }),
          (e.prototype.getControlPointsByCenter = function (t) {
            const e = this.getEndPoint('source');
            const n = this.getEndPoint('target');
            const r = this.get('shapeFactory');
            const i = t.type;
            return r.getControlPoints(i, { startPoint: e, endPoint: n });
          }),
          (e.prototype.getEndCenter = function (t) {
            const e = `${t}Node`;
            const n = `${ni[t]}Point`;
            const r = this.get(e);
            if (r) {
              const i = r.getBBox();
              return { x: i.centerX, y: i.centerY };
            }
            return this.get(n);
          }),
          (e.prototype.init = function () {
            t.prototype.init.call(this),
              this.setSource(this.get('source')),
              this.setTarget(this.get('target'));
          }),
          (e.prototype.getShapeCfg = function (e) {
            const n = this.get('linkCenter');
            const r = t.prototype.getShapeCfg.call(this, e);
            if (n)
              (r.startPoint = this.getEndCenter('source')),
                (r.endPoint = this.getEndCenter('target'));
            else {
              const i = r.controlPoints || this.getControlPointsByCenter(r);
              (r.startPoint = this.getLinkPoint('source', e, i)),
                (r.endPoint = this.getLinkPoint('target', e, i));
            }
            return (
              (r.sourceNode = this.get('sourceNode')), (r.targetNode = this.get('targetNode')), r
            );
          }),
          (e.prototype.getModel = function () {
            const t = this.get('model');
            const e = this.get('sourceNode');
            const n = this.get('targetNode');
            return (
              e ? delete t.sourceNode : (t.source = this.get('startPoint')),
              n ? delete t.targetNode : (t.target = this.get('endPoint')),
              Object(gt.y)(t.source) || Object(gt.x)(t.source) || (t.source = t.source.getID()),
              Object(gt.y)(t.target) || Object(gt.x)(t.target) || (t.target = t.target.getID()),
              t
            );
          }),
          (e.prototype.setSource = function (t) {
            this.setEnd('source', t), this.set('source', t);
          }),
          (e.prototype.setTarget = function (t) {
            this.setEnd('target', t), this.set('target', t);
          }),
          (e.prototype.getSource = function () {
            return this.get('source');
          }),
          (e.prototype.getTarget = function () {
            return this.get('target');
          }),
          (e.prototype.updatePosition = function () {
            return !1;
          }),
          (e.prototype.update = function (t, e) {
            void 0 === e && (e = !1);
            const n = this.get('model');
            const r = n.visible;
            const i = t.visible;
            r !== i && void 0 !== i && this.changeVisibility(i);
            const o = this.get('styles');
            if (t.stateStyles) {
              const a = t.stateStyles;
              Object(gt.D)(o, a), delete t.stateStyles;
            }
            Object.assign(n, t), this.updateShape(), this.afterUpdate(), this.clearCache();
          }),
          (e.prototype.destroy = function () {
            const e = this.get('sourceNode');
            const n = this.get('targetNode');
            e && !e.destroyed && e.removeEdge(this),
              n && !n.destroyed && n.removeEdge(this),
              t.prototype.destroy.call(this);
          }),
          e
        );
      })(ei);
      const ii = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getNearestPoint = function (t, e) {
            for (var n = 0, r = t[0], i = In(t[0], e), o = 0; o < t.length; o++) {
              const a = t[o];
              const s = In(a, e);
              s < i && ((r = a), (i = s), (n = o));
            }
            return (r.anchorIndex = n), r;
          }),
          (e.prototype.getDefaultCfg = function () {
            return { type: 'node', edges: [] };
          }),
          (e.prototype.getEdges = function () {
            return this.get('edges');
          }),
          (e.prototype.getInEdges = function () {
            const t = this;
            return this.get('edges').filter((e) => {
              return e.get('target') === t;
            });
          }),
          (e.prototype.getOutEdges = function () {
            const t = this;
            return this.get('edges').filter((e) => {
              return e.get('source') === t;
            });
          }),
          (e.prototype.getNeighbors = function (t) {
            const e = this;
            const n = this.get('edges');
            if (t === 'target') {
              return n
                .filter((t) => {
                  return t.getSource() === e;
                })
                .map((t) => {
                  return t.getTarget();
                });
            }
            if (t === 'source') {
              return n
                .filter((t) => {
                  return t.getTarget() === e;
                })
                .map((t) => {
                  return t.getSource();
                });
            }
            return n.map((t) => {
              return t.getSource() === e ? t.getTarget() : t.getSource();
            });
          }),
          (e.prototype.getLinkPointByAnchor = function (t) {
            return this.getAnchorPoints()[t];
          }),
          (e.prototype.getLinkPoint = function (t) {
            let e;
            let n;
            const r = this.get('keyShape').get('type');
            const i = this.get('type');
            const o = this.getBBox();
            i === 'combo'
              ? ((e = o.centerX || (o.maxX + o.minX) / 2), (n = o.centerY || (o.maxY + o.minY) / 2))
              : ((e = o.centerX), (n = o.centerY));
            let a;
            const s = this.getAnchorPoints();
            switch (r) {
              case 'circle':
                a = An({ x: e, y: n, r: o.width / 2 }, t);
                break;
              case 'ellipse':
                a = En({ x: e, y: n, rx: o.width / 2, ry: o.height / 2 }, t);
                break;
              default:
                a = kn(o, t);
            }
            let u = a;
            return (
              s.length && (u || (u = t), (u = this.getNearestPoint(s, u))),
              u || (u = { x: e, y: n }),
              u
            );
          }),
          (e.prototype.getAnchorPoints = function () {
            let t = this.get('anchorPointsCache');
            if (!t) {
              t = [];
              const e = this.get('shapeFactory');
              const n = this.getBBox();
              const r = this.get('model');
              const i = this.getShapeCfg(r);
              const o = r.type;
              const a = e.getAnchorPoints(o, i) || [];
              Object(gt.f)(a, (e, r) => {
                const i = {
                  x: n.minX + e[0] * n.width,
                  y: n.minY + e[1] * n.height,
                  anchorIndex: r,
                };
                t.push(i);
              }),
                this.set('anchorPointsCache', t);
            }
            return t;
          }),
          (e.prototype.addEdge = function (t) {
            this.get('edges').push(t);
          }),
          (e.prototype.lock = function () {
            this.set('locked', !0);
          }),
          (e.prototype.unlock = function () {
            this.set('locked', !1);
          }),
          (e.prototype.hasLocked = function () {
            return this.get('locked');
          }),
          (e.prototype.removeEdge = function (t) {
            const e = this.getEdges();
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
          }),
          (e.prototype.clearCache = function () {
            this.set('bboxCache', null), this.set('anchorPointsCache', null);
          }),
          (e.prototype.isOnlyMove = function (t) {
            if (!t) return !1;
            const e = !Object(gt.t)(t.x);
            const n = !Object(gt.t)(t.y);
            const r = Object.keys(t);
            return (r.length === 1 && (e || n)) || (r.length === 2 && e && n);
          }),
          e
        );
      })(ei);
      const oi = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfg = function () {
            return { type: 'combo', nodes: [], edges: [], combos: [] };
          }),
          (e.prototype.getShapeCfg = function (t) {
            const e = this.get('styles');
            const n = this.get('bbox');
            if (e && n) {
              const r = t;
              const i = {
                r: Math.hypot(n.height, n.width) / 2 || dr.defaultCombo.size[0] / 2,
                width: n.width || dr.defaultCombo.size[0],
                height: n.height || dr.defaultCombo.size[1],
              };
              r.style = Object(h.a)(Object(h.a)(Object(h.a)({}, e), t.style), i);
              const o = t.padding || dr.defaultCombo.padding;
              return (
                Object(gt.u)(o)
                  ? ((i.r += o), (i.width += 2 * o), (i.height += 2 * o))
                  : ((i.r += o[0]),
                    (i.width += o[1] + o[3] || 2 * o[1]),
                    (i.height += o[0] + o[2] || 2 * o[0])),
                this.set('sizeCache', i),
                r
              );
            }
            return t;
          }),
          (e.prototype.calculateCanvasBBox = function () {
            if (!this.destroyed) {
              const t = this.get('keyShape');
              const e = this.get('group');
              const n = br(t, e);
              (n.centerX = (n.minX + n.maxX) / 2), (n.centerY = (n.minY + n.maxY) / 2);
              const r = this.get('sizeCache');
              const i = this.get('bboxCache') || {};
              const o = i.x;
              const a = i.x;
              if (r)
                (r.width = Math.max(r.width, n.width)),
                  (r.height = Math.max(r.height, n.height)),
                  t.get('type') === 'circle'
                    ? ((n.width = 2 * r.r), (n.height = 2 * r.r))
                    : ((n.width = r.width), (n.height = r.height)),
                  (n.minX = n.centerX - n.width / 2),
                  (n.minY = n.centerY - n.height / 2),
                  (n.maxX = n.centerX + n.width / 2),
                  (n.maxY = n.centerY + n.height / 2);
              else
                (n.width = n.maxX - n.minX),
                  (n.height = n.maxY - n.minY),
                  (n.centerX = (n.minX + n.maxX) / 2),
                  (n.centerY = (n.minY + n.maxY) / 2);
              return (
                (n.x = n.minX),
                (n.y = n.minY),
                (n.x === o && n.y === a) || this.set('anchorPointsCache', null),
                n
              );
            }
          }),
          (e.prototype.getChildren = function () {
            return { nodes: this.getNodes(), combos: this.getCombos() };
          }),
          (e.prototype.getNodes = function () {
            return this.get('nodes');
          }),
          (e.prototype.getCombos = function () {
            return this.get('combos');
          }),
          (e.prototype.addChild = function (t) {
            switch (t.getType()) {
              case 'node':
                this.addNode(t);
                break;
              case 'combo':
                this.addCombo(t);
                break;
              default:
                return (
                  console.warn('Only node or combo items are allowed to be added into a combo'), !1
                );
            }
            return !0;
          }),
          (e.prototype.addCombo = function (t) {
            return this.get('combos').push(t), !0;
          }),
          (e.prototype.addNode = function (t) {
            return this.get('nodes').push(t), !0;
          }),
          (e.prototype.removeChild = function (t) {
            switch (t.getType()) {
              case 'node':
                this.removeNode(t);
                break;
              case 'combo':
                this.removeCombo(t);
                break;
              default:
                return (
                  console.warn('Only node or combo items are allowed to be added into a combo'), !1
                );
            }
            return !0;
          }),
          (e.prototype.removeCombo = function (t) {
            if (t) {
              const e = this.getCombos();
              const n = e.indexOf(t);
              return n > -1 && (e.splice(n, 1), !0);
            }
          }),
          (e.prototype.removeNode = function (t) {
            if (t) {
              const e = this.getNodes();
              const n = e.indexOf(t);
              return n > -1 && (e.splice(n, 1), !0);
            }
          }),
          (e.prototype.isOnlyMove = function (t) {
            return !1;
          }),
          (e.prototype.getBBox = function () {
            return this.set('bboxCanvasCache', null), this.calculateCanvasBBox();
          }),
          (e.prototype.clearCache = function () {
            this.set('bboxCache', null),
              this.set('bboxCanvasCache', null),
              this.set('anchorPointsCache', null);
          }),
          (e.prototype.destroy = function () {
            if (!this.destroyed) {
              const t = this.get('animate');
              const e = this.get('group');
              t && e.stopAnimate(),
                this.clearCache(),
                this.set('sizeCache', null),
                this.set('bbox', null),
                e.remove(),
                (this._cfg = null),
                (this.destroyed = !0);
            }
          }),
          e
        );
      })(ii);
      const ai = (function () {
        function t(t) {
          (this.graph = t), (this.destroyed = !1);
        }
        return (
          (t.prototype.addItem = function (t, e) {
            const n = this.graph;
            const r = t === 'vedge' ? 'edge' : t;
            const i = n.get(`${r}Group`) || n.get('group');
            const o = Object(gt.M)(r);
            let a = null;
            let s = n.get(r + Object(gt.M)('stateStyles')) || {};
            const u = n.get(`default${o}`);
            e.stateStyles && (s = e.stateStyles),
              u &&
                Object(gt.f)(u, (t, n) => {
                  Object(gt.w)(t) && !Object(gt.n)(t)
                    ? (e[n] = Object(gt.e)({}, t, e[n]))
                    : Object(gt.n)(t)
                    ? (e[n] = e[n] || Object(gt.c)(u[n]))
                    : (e[n] = e[n] || u[n]);
                });
            const c = n.get(`${r}Mapper`);
            if (c) {
              const h = c(e);
              h.stateStyles && ((s = h.stateStyles), delete h.stateStyles),
                Object(gt.f)(h, (t, n) => {
                  Object(gt.w)(t) && !Object(gt.n)(t)
                    ? (e[n] = Object(gt.e)({}, e[n], t))
                    : (e[n] = h[n] || e[n]);
                });
            }
            if ((n.emit('beforeadditem', { type: t, model: e }), t === 'edge' || t === 'vedge')) {
              let l = void 0;
              let d = void 0;
              if (
                ((l = e.source),
                (d = e.target),
                l && Object(gt.y)(l) && (l = n.findById(l)),
                d && Object(gt.y)(d) && (d = n.findById(d)),
                !l || !d)
              )
                return void console.warn(
                  `The source or target node of edge ${e.id} does not exist!`,
                );
              l.getType && l.getType() === 'combo' && (e.isComboEdge = !0),
                d.getType && d.getType() === 'combo' && (e.isComboEdge = !0),
                (a = new ri({
                  model: e,
                  source: l,
                  target: d,
                  styles: s,
                  linkCenter: n.get('linkCenter'),
                  group: i.addGroup(),
                }));
            } else if (t === 'node') a = new ii({ model: e, styles: s, group: i.addGroup() });
            else if (t === 'combo') {
              const f = e.children;
              const p = Er(f, n);
              isNaN(p.x) ? isNaN(e.x) && (e.x = 100 * Math.random()) : (e.x = p.x),
                isNaN(p.y) ? isNaN(e.y) && (e.y = 100 * Math.random()) : (e.y = p.y);
              const g = i.addGroup();
              g.setZIndex(e.depth);
              const y = (a = new oi({
                model: e,
                styles: s,
                bbox: e.collapsed ? Er([], n) : p,
                group: g,
              })).getModel();
              (f || []).forEach((t) => {
                const e = n.findById(t.id);
                a.addChild(e), (t.depth = y.depth + 2);
              }),
                e.collapsed &&
                  setTimeout(() => {
                    n.collapseCombo(a);
                  }, 16);
            }
            if (a)
              return (
                n.get(`${t}s`).push(a),
                (n.get('itemMap')[a.get('id')] = a),
                n.emit('afteradditem', { item: a, model: e }),
                a
              );
          }),
          (t.prototype.updateItem = function (t, e) {
            let n;
            let r;
            const i = this.graph;
            if ((Object(gt.y)(t) && (t = i.findById(t)), t && !t.destroyed)) {
              let o = '';
              t.getType && (o = t.getType());
              const a = i.get(`${o}Mapper`);
              const s = t.getModel();
              const u = t.isOnlyMove(e);
              if (a) {
                const c = a(Object(gt.e)({}, s, e));
                const l = Object(gt.e)({}, s, c, e);
                c.stateStyles && (t.set('styles', l.stateStyles), delete l.stateStyles),
                  Object(gt.f)(l, (t, n) => {
                    e[n] = t;
                  });
              } else
                Object(gt.f)(e, (t, n) => {
                  s[n] &&
                    Object(gt.w)(t) &&
                    !Object(gt.n)(t) &&
                    (e[n] = Object(h.a)(Object(h.a)({}, s[n]), e[n]));
                });
              if ((i.emit('beforeupdateitem', { item: t, cfg: e }), o === 'edge')) {
                if (e.source) {
                  let d = e.source;
                  Object(gt.y)(d) && (d = i.findById(d)), t.setSource(d);
                }
                if (e.target) {
                  let f = e.target;
                  Object(gt.y)(f) && (f = i.findById(f)), t.setTarget(f);
                }
                t.update(e);
              }
              if (o === 'node' || o === 'combo') {
                t.update(e, u);
                const p = t.getEdges();
                const g = Pr(e);
                if (g && o === 'node')
                  Object(gt.f)(p, (t) => {
                    t.refresh();
                  });
                else if (g && o === 'combo') {
                  const y = t.get('shapeFactory');
                  const v = s.type || 'circle';
                  (
                    void 0 === s.animate || void 0 === e.animate
                      ? (r = (n = y[v]) === null || void 0 === n ? void 0 : n.options) === null ||
                        void 0 === r
                        ? void 0
                        : r.animate
                      : s.animate || e.animate
                  )
                    ? setTimeout(() => {
                        if (t && !t.destroyed) {
                          const e = t.getKeyShape();
                          e &&
                            !e.destroyed &&
                            Object(gt.f)(p, (t) => {
                              t && !t.destroyed && t.refresh();
                            });
                        }
                      }, 201)
                    : Object(gt.f)(p, (t) => {
                        t.refresh();
                      });
                }
              }
              i.emit('afterupdateitem', { item: t, cfg: e });
            }
          }),
          (t.prototype.updateCombo = function (t, e) {
            let n;
            let r;
            const i = this;
            const o = this.graph;
            if ((Object(gt.y)(t) && (t = o.findById(t)), t && !t.destroyed)) {
              const a = t.getModel();
              const s = Er(a.collapsed ? [] : e, o);
              t.set('bbox', s), t.update({ x: s.x, y: s.y });
              const u = t.get('shapeFactory');
              const c = a.type || 'circle';
              (
                void 0 === a.animate
                  ? (r = (n = u[c]) === null || void 0 === n ? void 0 : n.options) === null ||
                    void 0 === r
                    ? void 0
                    : r.animate
                  : a.animate
              )
                ? setTimeout(() => {
                    if (t && !t.destroyed) {
                      const e = t.getKeyShape();
                      e && !e.destroyed && (t.getShapeCfg(a), i.updateComboEdges(t));
                    }
                  }, 201)
                : this.updateComboEdges(t);
            }
          }),
          (t.prototype.updateComboEdges = function (t) {
            for (let e = t.getEdges() || [], n = 0; n < e.length; n++) {
              const r = e[n];
              if (r && !r.destroyed) {
                const i = r.get('shapeFactory');
                const o = r.getShapeCfg(r.getModel());
                const a = r.getContainer();
                a.clear();
                const s = i.draw(o.type, o, a);
                r.set('keyShape', s),
                  s.set('isKeyShape', !0),
                  s.set('draggable', !0),
                  r.setOriginStyle();
              }
            }
          }),
          (t.prototype.collapseCombo = function (t) {
            const e = this.graph;
            Object(gt.y)(t) && (t = e.findById(t));
            const n = t.getChildren();
            n.nodes.forEach((t) => {
              e.hideItem(t);
            }),
              n.combos.forEach((t) => {
                e.hideItem(t);
              });
          }),
          (t.prototype.expandCombo = function (t) {
            const e = this.graph;
            Object(gt.y)(t) && (t = e.findById(t));
            const n = t.getChildren();
            n.nodes.forEach((t) => {
              e.showItem(t);
            }),
              n.combos.forEach((t) => {
                t.getModel().collapsed ? t.show() : e.showItem(t);
              });
          }),
          (t.prototype.removeItem = function (t) {
            const e = this;
            const n = this.graph;
            if ((Object(gt.y)(t) && (t = n.findById(t)), t && !t.destroyed)) {
              const r = Object(gt.c)(t.getModel());
              n.emit('beforeremoveitem', { item: r });
              let i = '';
              t.getType && (i = t.getType());
              const o = n.get(`${i}s`);
              const a = o.indexOf(t);
              if ((a > -1 && o.splice(a, 1), i === 'edge')) {
                const s = n.get(`v${i}s`);
                const u = s.indexOf(t);
                u > -1 && s.splice(u, 1);
              }
              const c = t.get('id');
              delete n.get('itemMap')[c];
              const h = n.get('comboTrees');
              const l = t.get('id');
              if (i === 'node') {
                const d = t.getModel().comboId;
                if (h && d) {
                  let f = h;
                  let p = !1;
                  h.forEach((t) => {
                    p ||
                      Mr(t, (t) => {
                        if (t.id === l && f) {
                          const e = f.indexOf(t);
                          return f.splice(e, 1), (p = !0), !1;
                        }
                        return (f = t.children), !0;
                      });
                  });
                }
                for (var g = (b = t.getEdges()).length - 1; g >= 0; g--) n.removeItem(b[g], !1);
                d && n.updateCombo(d);
              } else if (i === 'combo') {
                let y;
                const v = t.getModel().parentId;
                let m = !1;
                (h || []).forEach((t) => {
                  m ||
                    Mr(t, (t) => {
                      return t.id !== l || ((y = t), (m = !0), !1);
                    });
                }),
                  (y.removed = !0),
                  y &&
                    y.children &&
                    y.children.forEach((t) => {
                      e.removeItem(t.id);
                    });
                var b;
                for (g = (b = t.getEdges()).length; g >= 0; g--) n.removeItem(b[g], !1);
                v && n.updateCombo(v);
              }
              t.destroy(), n.emit('afterremoveitem', { item: r });
            }
          }),
          (t.prototype.setItemState = function (t, e, n) {
            const r = this.graph;
            let i = e;
            Object(gt.y)(n) && (i = `${e}:${n}`),
              (t.hasState(i) === n && n) ||
                (Object(gt.y)(n) && t.hasState(i)) ||
                (r.emit('beforeitemstatechange', { item: t, state: i, enabled: n }),
                t.setState(e, n),
                r.autoPaint(),
                r.emit('afteritemstatechange', { item: t, state: i, enabled: n }));
          }),
          (t.prototype.priorityState = function (t, e) {
            const n = this.graph;
            let r = t;
            Object(gt.y)(t) && (r = n.findById(t)),
              this.setItemState(r, e, !1),
              this.setItemState(r, e, !0);
          }),
          (t.prototype.clearItemStates = function (t, e) {
            const n = this.graph;
            Object(gt.y)(t) && (t = n.findById(t)),
              n.emit('beforeitemstatesclear', { item: t, states: e }),
              t.clearStates(e),
              n.emit('afteritemstatesclear', { item: t, states: e });
          }),
          (t.prototype.refreshItem = function (t) {
            const e = this.graph;
            Object(gt.y)(t) && (t = e.findById(t)),
              e.emit('beforeitemrefresh', { item: t }),
              t.refresh(),
              e.emit('afteritemrefresh', { item: t });
          }),
          (t.prototype.addCombos = function (t, e) {
            const n = this;
            const r = this.graph;
            (t || []).forEach((t) => {
              Sr(t, (t) => {
                let r;
                return (
                  e.forEach((e) => {
                    e.id === t.id && ((e.children = t.children), (e.depth = t.depth), (r = e));
                  }),
                  r && n.addItem('combo', r),
                  !0
                );
              });
            });
            const i = r.get('comboGroup');
            i && i.sort();
          }),
          (t.prototype.changeItemVisibility = function (t, e) {
            const n = this;
            const r = this.graph;
            if ((Object(gt.y)(t) && (t = r.findById(t)), t)) {
              if (
                (r.emit('beforeitemvisibilitychange', { item: t, visible: e }),
                t.changeVisibility(e),
                t.getType && t.getType() === 'node')
              ) {
                var i = t.getEdges();
                Object(gt.f)(i, (t) => {
                  (!e || (t.get('source').isVisible() && t.get('target').isVisible())) &&
                    n.changeItemVisibility(t, e);
                });
              } else if (t.getType && t.getType() === 'combo') {
                const o = r.get('comboTrees');
                const a = t.get('id');
                let s = [];
                let u = !1;
                (o || []).forEach((t) => {
                  u ||
                    (t.children &&
                      t.children.length !== 0 &&
                      Mr(t, (t) => {
                        return t.id !== a || ((s = t.children), (u = !0), !1);
                      }));
                }),
                  s &&
                    (!e || (e && !t.getModel().collapsed)) &&
                    s.forEach((t) => {
                      const i = r.findById(t.id);
                      n.changeItemVisibility(i, e);
                    });
                i = t.getEdges();
                Object(gt.f)(i, (t) => {
                  (!e || (t.get('source').isVisible() && t.get('target').isVisible())) &&
                    n.changeItemVisibility(t, e);
                });
              }
              return r.emit('afteritemvisibilitychange', { item: t, visible: e }), t;
            }
            console.warn('The item to be shown or hidden does not exist!');
          }),
          (t.prototype.destroy = function () {
            (this.graph = null), (this.destroyed = !0);
          }),
          t
        );
      })();
      let si = null;
      const ui = (function () {
        function t(t) {
          (this.graph = t),
            (this.cachedStates = { enabled: {}, disabled: {} }),
            (this.destroyed = !1);
        }
        return (
          (t.checkCache = function (t, e, n) {
            if (n[e]) {
              const r = n[e].indexOf(t);
              r >= 0 && n[e].splice(r, 1);
            }
          }),
          (t.cacheState = function (t, e, n) {
            n[e] || (n[e] = []), n[e].push(t);
          }),
          (t.prototype.updateState = function (e, n, r) {
            const i = this;
            const o = t.checkCache;
            const a = t.cacheState;
            if (!e.destroyed) {
              const s = this.cachedStates;
              const u = s.enabled;
              const c = s.disabled;
              r ? (o(e, n, c), a(e, n, u)) : (o(e, n, u), a(e, n, c)),
                si && clearTimeout(si),
                (si = setTimeout(() => {
                  (si = null), i.updateGraphStates();
                }, 16));
            }
          }),
          (t.prototype.updateStates = function (t, e, n) {
            const r = this;
            Object(gt.y)(e)
              ? this.updateState(t, e, n)
              : e.forEach((e) => {
                  r.updateState(t, e, n);
                });
          }),
          (t.prototype.updateGraphStates = function () {
            const t = this.graph.get('states');
            const e = this.cachedStates;
            Object(gt.f)(e.disabled, (e, n) => {
              t[n] &&
                (t[n] = t[n].filter((t) => {
                  return e.indexOf(t) < 0 && !e.destroyed;
                }));
            }),
              Object(gt.f)(e.enabled, (e, n) => {
                if (t[n]) {
                  const r = {};
                  t[n].forEach((t) => {
                    t.destroyed || (r[t.get('id')] = !0);
                  }),
                    e.forEach((e) => {
                      if (!e.destroyed) {
                        const i = e.get('id');
                        r[i] || ((r[i] = !0), t[n].push(e));
                      }
                    });
                } else t[n] = e;
              }),
              this.graph.emit('graphstatechange', { states: t }),
              (this.cachedStates = { enabled: {}, disabled: {} });
          }),
          (t.prototype.destroy = function () {
            (this.graph = null),
              (this.cachedStates = null),
              si && clearTimeout(si),
              (si = null),
              (this.destroyed = !0);
          }),
          t
        );
      })();
      const ci = function (t, e) {
        return t && e
          ? t.replace(/\\?\{([^{}]+)\}/g, (t, n) => {
              if (t.charAt(0) === '\\') return t.slice(1);
              let r = e[n];
              return r === 0 && (r = '0'), r || '';
            })
          : t;
      };
      var hi = function (t) {
        const e = [];
        if (t.length < 2) throw new Error(`point length must largn than 2, now it's ${t.length}`);
        for (let n = 0, r = t; n < r.length; n++) {
          const i = r[n];
          const o = i.x;
          const a = i.y;
          e.push(o), e.push(a);
        }
        const s = Object(mt.a)(e);
        return s.unshift(['M', t[0].x, t[0].y]), s;
      };
      var li = function (t, e, n, r) {
        void 0 === n && (n = 0), void 0 === r && (r = 0);
        const i = { x: (1 - n) * t.x + n * e.x, y: (1 - n) * t.y + n * e.y };
        let o = [0, 0];
        sn.c.normalize(o, [e.x - t.x, e.y - t.y]), (o && (o[0] || o[1])) || (o = [0, 0]);
        const a = [-o[1] * r, o[0] * r];
        return (i.x += a[0]), (i.y += a[1]), i;
      };
      var di = function (t, e) {
        const n = t.length;
        if (!n) return '';
        for (var r = '', i = 0; i < n; i++) {
          const o = t[i];
          r += ci(i === 0 ? 'M{x} {y}' : 'L{x} {y}', o);
        }
        return e && (r += 'Z'), r;
      };
      var fi = function (t) {
        const e = [];
        return (
          t.forEach((t) => {
            if (t[0] !== 'A') for (let n = 1; n < t.length; n += 2) e.push([t[n], t[n + 1]]);
            else {
              const r = t.length;
              e.push([t[r - 2], t[r - 1]]);
            }
          }),
          e
        );
      };
      var pi = function (t) {
        if (t.length < 2) throw new Error(`point length must largn than 2, now it's ${t.length}`);
        const e = t[0];
        const n = t[1];
        const r = t[t.length - 1];
        const i = t[t.length - 2];
        t.unshift(r), t.unshift(i), t.push(e), t.push(n);
        for (var o = [], a = 1; a < t.length - 2; a += 1) {
          const s = t[a - 1].x;
          const u = t[a - 1].y;
          const c = t[a].x;
          const h = t[a].y;
          const l = t[a + 1].x;
          const d = t[a + 1].y;
          const f = c + (l - s) / 6;
          const p = h + (d - u) / 6;
          const g = l - ((a !== t.length - 2 ? t[a + 2].x : l) - c) / 6;
          const y = d - ((a !== t.length - 2 ? t[a + 2].y : d) - h) / 6;
          o.push(['C', f, p, g, y, l, d]);
        }
        return o.unshift(['M', r.x, r.y]), o;
      };
      const gi = function (t, e) {
        return sn.c.scale([0, 0], sn.c.normalize([0, 0], t), e);
      };
      const yi = function (t, e) {
        const n = [t[1] - e[1], e[0] - t[0]];
        const r = Math.sqrt(n[0] * n[0] + n[1] * n[1]);
        if (r === 0) throw new Error('p0 should not be equal to p1');
        return [n[0] / r, n[1] / r];
      };
      const vi = function (t, e) {
        return [e[0] - t[0], e[1] - t[1]];
      };
      function mi(t, e) {
        if (!t || t.length < 1) return '';
        if (t.length === 1)
          return (function (t) {
            const n = [t[0][0], t[0][1] - e];
            const r = [t[0][0], t[0][1] + e];
            return `M ${n} A ${e},${e},0,0,0,${r} A ${e},${e},0,0,0,${n}`;
          })(t);
        if (t.length === 2)
          return (function (t) {
            const n = sn.c.scale([0, 0], yi(t[0], t[1]), e);
            const r = sn.c.scale([0, 0], n, -1);
            const i = sn.c.add([0, 0], t[0], n);
            const o = sn.c.add([0, 0], t[1], n);
            const a = sn.c.add([0, 0], t[1], r);
            const s = sn.c.add([0, 0], t[0], r);
            return `M ${i} L ${o} A ${[e, e, '0,0,0', a].join(',')} L ${s} A ${[
              e,
              e,
              '0,0,0',
              i,
            ].join(',')}`;
          })(t);
        for (var n = new Array(t.length), r = 0; r < n.length; ++r) {
          const i = r === 0 ? t[t.length - 1] : t[r - 1];
          const o = t[r];
          const a = sn.c.scale([0, 0], yi(i, o), e);
          n[r] = [sn.c.add([0, 0], i, a), sn.c.add([0, 0], o, a)];
        }
        const s = `A ${[e, e, '0,0,0,'].join(',')}`;
        return (n = n.map((t, e) => {
          let r = '';
          return e === 0 && (r = `M ${n[n.length - 1][1]} `), (r += `${s + t[0]} L ${t[1]}`);
        })).join(' ');
      }
      function bi(t, e) {
        let n;
        let r;
        let i;
        const o = t.length;
        if (!t || o < 1) return '';
        if (o === 1)
          return (
            (r = [(n = t)[0][0], n[0][1] - e]),
            (i = [n[0][0], n[0][1] + e]),
            `M ${r} A ${[e, e, '0,0,0', i].join(',')} A ${[e, e, '0,0,0', r].join(',')}`
          );
        if (o === 2)
          return (function (t) {
            const n = vi(t[0], t[1]);
            const r = gi(n, e);
            const i = sn.c.add([0, 0], t[0], sn.c.scale([0, 0], r, -1));
            const o = sn.c.add([0, 0], t[1], r);
            const a = 1.2 * e;
            const s = gi(sn.c.normalize([0, 0], n), a);
            const u = sn.c.scale([0, 0], s, -1);
            const c = sn.c.add([0, 0], i, u);
            const h = sn.c.add([0, 0], o, u);
            const l = sn.c.add([0, 0], i, s);
            return `M ${i} C ${[c, h, o].join(',')} S ${[l, i].join(',')} Z`;
          })(t);
        for (
          var a = t.map((e, n) => {
              const r = t[(n + 1) % o];
              return { p: e, v: sn.c.normalize([0, 0], vi(e, r)) };
            }),
            s = 0;
          s < a.length;
          ++s
        ) {
          const u = s > 0 ? s - 1 : o - 1;
          const c = sn.c.normalize(
            [0, 0],
            sn.c.add([0, 0], a[u].v, sn.c.scale([0, 0], a[s].v, -1)),
          );
          a[s].p = sn.c.add([0, 0], a[s].p, sn.c.scale([0, 0], c, e));
        }
        return a.map((t) => {
          const e = t.p;
          return { x: e[0], y: e[1] };
        });
      }
      const xi = function (t, e, n) {
        return (t.y - n.y) * (e.x - n.x) - (t.x - n.x) * (e.y - n.y);
      };
      const wi = function (t) {
        const e = t.map((t) => {
          return { x: t.getModel().x, y: t.getModel().y };
        });
        if (
          (e.sort((t, e) => {
            return t.x === e.x ? t.y - e.y : t.x - e.x;
          }),
          e.length === 1)
        )
          return e;
        for (var n = [], r = 0; r < e.length; r++) {
          for (; n.length >= 2 && xi(n[n.length - 2], n[n.length - 1], e[r]) <= 0; ) n.pop();
          n.push(e[r]);
        }
        const i = [];
        for (r = e.length - 1; r >= 0; r--) {
          for (; i.length >= 2 && xi(i[i.length - 2], i[i.length - 1], e[r]) <= 0; ) i.pop();
          i.push(e[r]);
        }
        return i.pop(), n.pop(), n.concat(i);
      };
      const Oi = {
        maxRoutingIterations: 100,
        maxMarchingIterations: 100,
        pixelGroupSize: 2,
        edgeR0: 10,
        edgeR1: 10,
        nodeR0: 5,
        nodeR1: 10,
        morphBuffer: 5,
        threshold: 0.001,
        skip: 16,
        nodeInfluenceFactor: 1,
        edgeInfluenceFactor: 1,
        negativeNodeInfluenceFactor: -0.5,
      };
      function Mi(t, e, n) {
        let r = !1;
        const i = function (t, n) {
          return e.cells[t + n * e.width];
        };
        const o = function (t, e) {
          let r = 0;
          return (
            i(t - 1, e - 1) >= n && (r += 1),
            i(t, e - 1) > n && (r += 2),
            i(t - 1, e) > n && (r += 4),
            i(t, e) > n && (r += 8),
            r
          );
        };
        const a = function (n, r) {
          for (var i, a, s = n, u = r, c = 0; c < e.width * e.height; c++) {
            if (
              ((i = s),
              (a = u),
              t.findIndex((t) => {
                return t.x === s && t.y === u;
              }) > -1)
            ) {
              if (t[0].x === s && t[0].y === u) return !0;
            } else t.push({ x: s, y: u });
            const h = o(s, u);
            switch (h) {
              case -1:
                return console.warn('Marched out of bounds'), !0;
              case 0:
              case 3:
              case 2:
              case 7:
                s++;
                break;
              case 12:
              case 14:
              case 4:
                s--;
                break;
              case 6:
                i === 0 && (a === -1 ? (s -= 1) : (s += 1));
                break;
              case 1:
              case 13:
              case 5:
                u--;
                break;
              case 9:
                i === 1 && (a === 0 ? (u -= 1) : (u += 1));
                break;
              case 10:
              case 8:
              case 11:
                u++;
                break;
              default:
                return console.warn(`Marching squares invalid state: ${h}`), !0;
            }
          }
        };
        this.march = function () {
          for (let t = 0; t < e.width && !r; t += 1)
            for (let s = 0; s < e.height && !r; s += 1)
              i(t, s) > n && o(t, s) !== 15 && (r = a(t, s));
          return r;
        };
      }
      const Si = function (t, e) {
        let n = Number.POSITIVE_INFINITY;
        let r = null;
        return (
          t.forEach((t) => {
            const i = tr(t, e);
            i >= 0 && i < n && ((r = t), (n = i));
          }),
          r
        );
      };
      function Ci(t, e, n, r, i) {
        const o = (function (t, e, n) {
          let r = null;
          let i = Number.POSITIVE_INFINITY;
          return (
            e.forEach((e) => {
              const o = { x: t.getModel().x, y: t.getModel().y };
              const a = { x: e.getModel().x, y: e.getModel().y };
              const s = nr(o, a);
              const u = new Kn(o.x, o.y, a.x, a.y);
              const c = n.reduce((t, e) => {
                return tr(e, u) > 0 ? t + 1 : t;
              }, 0);
              s * Math.pow(c + 1, 2) < i && ((r = e), (i = s * Math.pow(c + 1, 2)));
            }),
            r
          );
        })(t, n, e);
        if (o === null) return [];
        return (function (t) {
          for (var n = []; t.length > 0; ) {
            const r = t.pop();
            if (t.length === 0) {
              n.push(r);
              break;
            }
            const i = t.pop();
            const o = new Kn(r.x1, r.y1, i.x2, i.y2);
            Si(e, o) ? (n.push(r), t.push(i)) : t.push(o);
          }
          return n;
        })(
          (function (t, e, n, r) {
            const i = [];
            const o = [];
            o.push(t);
            for (
              var a = !0,
                s = 0,
                u = function (t, e) {
                  let n = !1;
                  return (
                    e.forEach((e) => {
                      n ||
                        ((ir(t, { x: e.x1, y: e.y1 }) || ir(t, { x: e.x2, y: e.y2 })) && (n = !0));
                    }),
                    n
                  );
                },
                c = function (t, e) {
                  for (let n = 0, r = e; n < r.length; n++) {
                    const i = r[n].getBBox();
                    const o = [
                      [i.x, i.y],
                      [i.x + i.width, i.y],
                      [i.x, i.y + i.height],
                      [i.x + i.width, i.y + i.height],
                    ];
                    if (Vn(o, t.x, t.y)) return !0;
                  }
                  return !1;
                };
              a && s < n;

            ) {
              a = !1;
              for (
                let h = function () {
                  const t = o.pop();
                  const n = Si(e, t);
                  if (n) {
                    const h = Jn(n, t);
                    const l = h[0];
                    if (h[1] === 2) {
                      const d = function (s) {
                        for (
                          var h = r, d = Ai(n, h, l, s), f = u(d, o) || u(d, i), p = c(d, e);
                          !f && p && h >= 1;

                        )
                          (d = Ai(n, (h /= 1.5), l, s)), (f = u(d, o) || u(d, i)), (p = c(d, e));
                        !d ||
                          f ||
                          (s && p) ||
                          (o.push(new Kn(t.x1, t.y1, d.x, d.y)),
                          o.push(new Kn(d.x, d.y, t.x2, t.y2)),
                          (a = !0));
                      };
                      d(!0), a || d(!1);
                    }
                  }
                  a || i.push(t), (s += 1);
                };
                !a && o.length;

              )
                h();
            }
            for (; o.length; ) i.push(o.pop());
            return i;
          })(new Kn(t.getModel().x, t.getModel().y, o.getModel().x, o.getModel().y), e, r, i),
        );
      }
      const ji = function (t, e, n) {
        const r = Object.assign(Oi, n);
        const i = er(
          t.map((t) => {
            return { x: t.getModel().x, y: t.getModel().y };
          }),
        );
        t = t.sort((t, e) => {
          return (
            nr({ x: t.getModel().x, y: t.getModel().y }, i) -
            nr({ x: e.getModel().x, y: e.getModel().y }, i)
          );
        });
        const o = [];
        const a = [];
        t.forEach((t) => {
          Ci(t, e, o, r.maxRoutingIterations, r.morphBuffer).forEach((t) => {
            a.push(t);
          }),
            o.push(t);
        });
        for (
          var s,
            u,
            c,
            h,
            l,
            d = (function (t, e, n) {
              const r = {
                minX: Number.POSITIVE_INFINITY,
                minY: Number.POSITIVE_INFINITY,
                maxX: Number.NEGATIVE_INFINITY,
                maxY: Number.NEGATIVE_INFINITY,
                width: 0,
                height: 0,
                x: 0,
                y: 0,
              };
              const i = [];
              t.forEach((t) => {
                i.push(t.getBBox());
              }),
                e.forEach((t) => {
                  i.push(t.getBBox());
                });
              for (let o = 0, a = i; o < a.length; o++) {
                const s = a[o];
                (r.minX = (s.minX < r.minX ? s.minX : r.minX) - n),
                  (r.minY = (s.minY < r.minY ? s.minY : r.minY) - n),
                  (r.maxX = (s.maxX > r.maxX ? s.maxX : r.maxX) + n),
                  (r.maxY = (s.maxY > r.maxY ? s.maxY : r.maxY) + n);
              }
              return (
                (r.width = r.maxX - r.minX),
                (r.height = r.maxY - r.minY),
                (r.x = r.minX),
                (r.y = r.minY),
                r
              );
            })(t, a, r.nodeR0),
            f =
              ((s = d.width),
              (u = d.height),
              (c = r.pixelGroupSize),
              (h = Math.ceil(s / c)),
              (l = Math.ceil(u / c)),
              { cells: new Float32Array(Math.max(0, h * l)).fill(0), width: h, height: l }),
            p = [],
            g = [],
            y = 0;
          y < r.maxMarchingIterations;
          y++
        )
          if ((ki(t, e, a, d, f, r), (g = []), new Mi((p = []), f, r.threshold).march())) {
            const v = p.map((t) => {
              return {
                x: Math.round(t.x * r.pixelGroupSize + d.minX),
                y: Math.round(t.y * r.pixelGroupSize + d.minY),
              };
            });
            if (v) {
              let m = v.length;
              if (r.skip > 1)
                for (m = Math.floor(v.length / r.skip); m < 3 && r.skip > 1; )
                  (r.skip -= 1), (m = Math.floor(v.length / r.skip));
              for (let b = 0, x = 0; x < m; x += 1, b += r.skip) g.push({ x: v[b].x, y: v[b].y });
            }
            if (
              g &&
              (function () {
                for (let e = 0, n = t; e < n.length; e++) {
                  const r = n[e];
                  const i = g.map((t) => {
                    return [t.x, t.y];
                  });
                  if (!Vn(i, r.getBBox().centerX, r.getBBox().centerY)) return !1;
                }
                return !0;
              })()
            )
              return g;
            if (((r.threshold *= 0.9), y <= 0.5 * r.maxMarchingIterations))
              (r.memberInfluenceFactor *= 1.2), (r.edgeInfluenceFactor *= 1.2);
            else {
              if (!(r.nonMemberInfluenceFactor !== 0 && e.length > 0)) break;
              r.nonMemberInfluenceFactor *= 0.8;
            }
          }
        return g;
      };
      function ki(t, e, n, r, i, o) {
        function a(t, e) {
          const n = Math.floor((t - e) / o.pixelGroupSize);
          return n < 0 ? 0 : n;
        }
        function s(t, e) {
          return t * o.pixelGroupSize + e;
        }
        const u = (o.nodeR0 - o.nodeR1) * (o.nodeR0 - o.nodeR1);
        const c = (o.edgeR0 - o.edgeR1) * (o.edgeR0 - o.edgeR1);
        const h = function (t, e) {
          return [
            Math.min(a(t.minX, e + r.minX), i.width),
            Math.min(a(t.minY, e + r.minY), i.height),
            Math.min(a(t.maxX, -e + r.minX), i.width),
            Math.min(a(t.maxY, -e + r.minY), i.height),
          ];
        };
        const l = function (t, e) {
          for (
            let n = t.getBBox(), a = h(n, o.nodeR1), u = a[0], c = a[1], l = a[2], d = a[3], f = c;
            f < d;
            f += 1
          )
            for (let p = u; p < l; p += 1)
              if (!(e < 0 && i[p + f * i.width] <= 0)) {
                const g = s(p, r.minX);
                const y = s(f, r.minY);
                const v = or(
                  { x: g, y },
                  { x: n.minX, y: n.minY, width: n.width, height: n.height },
                );
                if (v < Math.pow(o.nodeR1, 2)) {
                  const m = Math.sqrt(v) - o.nodeR1;
                  i.cells[p + f * i.width] += e * m * m;
                }
              }
        };
        o.nodeInfluenceFactor &&
          t.forEach((t) => {
            l(t, o.nodeInfluenceFactor / u);
          }),
          o.edgeInfluenceFactor &&
            n.forEach((t) => {
              !(function (t, e) {
                for (
                  let n = t.getBBox(),
                    a = h(n, o.edgeR1),
                    u = a[0],
                    c = a[1],
                    l = a[2],
                    d = a[3],
                    f = c;
                  f < d;
                  f += 1
                )
                  for (let p = u; p < l; p += 1)
                    if (!(e < 0 && i.cells[p + f * i.width] <= 0)) {
                      const g = s(p, r.minX);
                      const y = s(f, r.minY);
                      const v = rr({ x: g, y }, t);
                      if (v < Math.pow(o.edgeR1, 2)) {
                        const m = Math.sqrt(v) - o.edgeR1;
                        i.cells[p + f * i.width] += e * m * m;
                      }
                    }
              })(t, o.edgeInfluenceFactor / c);
            }),
          o.negativeNodeInfluenceFactor &&
            e.forEach((t) => {
              l(t, o.negativeNodeInfluenceFactor / u);
            });
      }
      function Ai(t, e, n, r) {
        const i = t.getBBox();
        const o = n[0];
        const a = n[1];
        const s = n[2];
        const u = n[3];
        const c = {
          topLeft: { x: i.minX - e, y: i.minY - e },
          topRight: { x: i.maxX + e, y: i.minY - e },
          bottomLeft: { x: i.minX - e, y: i.maxY + e },
          bottomRight: { x: i.maxX + e, y: i.maxY + e },
        };
        const h = i.height * i.width;
        function l(t, e) {
          return i.width * (0.5 * (t.y - i.minY + (e.y - i.minY)));
        }
        if (a)
          return o
            ? r
              ? c.topLeft
              : c.bottomRight
            : s
            ? r
              ? c.bottomLeft
              : c.topRight
            : l(a, u) < 0.5 * h
            ? a.y > u.y
              ? r
                ? c.topLeft
                : c.bottomRight
              : r
              ? c.topRight
              : c.bottomLeft
            : a.y < u.y
            ? r
              ? c.bottomLeft
              : c.topRight
            : r
            ? c.bottomRight
            : c.topLeft;
        if (u) {
          if (o) return r ? c.topRight : c.bottomLeft;
          if (s) return r ? c.bottomRight : c.topLeft;
        }
        return l(o, s) < 0.5 * h
          ? o.x > s.x
            ? r
              ? c.topLeft
              : c.bottomRight
            : r
            ? c.bottomLeft
            : c.topRight
          : o.x < s.x
          ? r
            ? c.topRight
            : c.bottomLeft
          : r
          ? c.bottomRight
          : c.topLeft;
      }
      const Ei = (function () {
        function t(t, e) {
          (this.cfg = Object(gt.e)(this.getDefaultCfg(), e)),
            (this.graph = t),
            (this.id = this.cfg.id),
            (this.group = this.cfg.group),
            (this.members = this.cfg.members.map((e) => {
              return Object(gt.y)(e) ? t.findById(e) : e;
            })),
            (this.nonMembers = this.cfg.nonMembers.map((e) => {
              return Object(gt.y)(e) ? t.findById(e) : e;
            })),
            this.setPadding(),
            this.setType(),
            (this.path = this.calcPath(this.members, this.nonMembers)),
            this.render();
        }
        return (
          (t.prototype.getDefaultCfg = function () {
            return {
              id: 'g6-hull',
              type: 'round-convex',
              members: [],
              nonMembers: [],
              style: { fill: 'lightblue', stroke: 'blue', opacity: 0.2 },
              padding: 10,
            };
          }),
          (t.prototype.setPadding = function () {
            const t =
              this.members.length && this.members[0].getKeyShape().getCanvasBBox().width / 2;
            (this.padding = this.cfg.padding > 0 ? this.cfg.padding + t : 10 + t),
              (this.cfg.bubbleCfg = {
                nodeR0: this.padding - t,
                nodeR1: this.padding - t,
                morphBuffer: this.padding - t,
              });
          }),
          (t.prototype.setType = function () {
            (this.type = this.cfg.type),
              this.members.length < 3 && (this.type = 'round-convex'),
              this.type !== 'round-convex' &&
                this.type !== 'smooth-convex' &&
                this.type !== 'bubble' &&
                (console.warn(
                  'The hull type should be either round-convex, smooth-convex or bubble, round-convex is used by default.',
                ),
                (this.type = 'round-convex'));
          }),
          (t.prototype.calcPath = function (t, e) {
            let n;
            let r;
            let i;
            switch (this.type) {
              case 'round-convex':
                (i = mi(
                  (n = wi(t)).map((t) => {
                    return [t.x, t.y];
                  }),
                  this.padding,
                )),
                  (r = Object(mt.b)(i));
                break;
              case 'smooth-convex':
                (n = wi(t)).length === 2
                  ? ((i = mi(
                      n.map((t) => {
                        return [t.x, t.y];
                      }),
                      this.padding,
                    )),
                    (r = Object(mt.b)(i)))
                  : n.length > 2 &&
                    ((i = bi(
                      n.map((t) => {
                        return [t.x, t.y];
                      }),
                      this.padding,
                    )),
                    (r = pi(i)));
                break;
              case 'bubble':
                r = (n = ji(t, e, this.cfg.bubbleCfg)).length >= 2 && pi(n);
            }
            return r;
          }),
          (t.prototype.render = function () {
            this.group.addShape('path', {
              attrs: Object(h.a)({ path: this.path }, this.cfg.style),
              id: this.id,
              name: this.cfg.id,
            }),
              this.group.toBack();
          }),
          (t.prototype.addMember = function (t) {
            if (t) {
              Object(gt.y)(t) && (t = this.graph.findById(t)), this.members.push(t);
              const e = this.nonMembers.indexOf(t);
              return (
                e > -1 && this.nonMembers.splice(e, 1),
                this.updateData(this.members, this.nonMembers),
                !0
              );
            }
          }),
          (t.prototype.addNonMember = function (t) {
            if (t) {
              Object(gt.y)(t) && (t = this.graph.findById(t)), this.nonMembers.push(t);
              const e = this.members.indexOf(t);
              return (
                e > -1 && this.members.splice(e, 1),
                this.updateData(this.members, this.nonMembers),
                !0
              );
            }
          }),
          (t.prototype.removeMember = function (t) {
            if (t) {
              Object(gt.y)(t) && (t = this.graph.findById(t));
              const e = this.members.indexOf(t);
              return (
                e > -1 &&
                (this.members.splice(e, 1), this.updateData(this.members, this.nonMembers), !0)
              );
            }
          }),
          (t.prototype.removeNonMember = function (t) {
            if (t) {
              Object(gt.y)(t) && (t = this.graph.findById(t));
              const e = this.nonMembers.indexOf(t);
              return (
                e > -1 &&
                (this.nonMembers.splice(e, 1), this.updateData(this.members, this.nonMembers), !0)
              );
            }
          }),
          (t.prototype.updateData = function (t, e) {
            const n = this;
            this.group.findById(this.id).remove(),
              t &&
                (this.members = t.map((t) => {
                  return Object(gt.y)(t) ? n.graph.findById(t) : t;
                })),
              e &&
                (this.nonMembers = e.map((t) => {
                  return Object(gt.y)(t) ? n.graph.findById(t) : t;
                })),
              (this.path = this.calcPath(this.members, this.nonMembers)),
              this.render();
          }),
          (t.prototype.updateStyle = function (t) {
            this.group.findById(this.id).attr(Object(h.a)({}, t));
          }),
          (t.prototype.updateCfg = function (t) {
            const e = this;
            (this.cfg = Object(gt.e)(this.cfg, t)),
              (this.id = this.cfg.id),
              (this.group = this.cfg.group),
              t.members &&
                (this.members = this.cfg.members.map((t) => {
                  return Object(gt.y)(t) ? e.graph.findById(t) : t;
                })),
              t.nonMembers &&
                (this.nonMembers = this.cfg.nonMembers.map((t) => {
                  return Object(gt.y)(t) ? e.graph.findById(t) : t;
                })),
              this.setPadding(),
              this.setType(),
              (this.path = this.calcPath(this.members, this.nonMembers)),
              this.render();
          }),
          (t.prototype.contain = function (t) {
            let e;
            let n;
            const r = this;
            const i = (e = Object(gt.y)(t) ? this.graph.findById(t) : t).getKeyShape();
            if (e.get('type') === 'path') n = fi(i.attr('path'));
            else {
              const o = i.getCanvasBBox();
              n = [
                [o.minX, o.minY],
                [o.maxX, o.minY],
                [o.maxX, o.maxY],
                [o.minX, o.maxY],
              ];
            }
            return (
              (n = n.map((t) => {
                const e = r.graph.getPointByCanvas(t[0], t[1]);
                return [e.x, e.y];
              })),
              Zn(n, fi(this.path))
            );
          }),
          (t.prototype.destroy = function () {
            this.group.remove(), (this.cfg = null);
          }),
          t
        );
      })();
      const Pi = sn.a.transform;
      !(function (t) {
        function e(e) {
          const n = t.call(this) || this;
          return (
            (n.cfg = Object(gt.e)(n.getDefaultCfg(), e)),
            n.init(),
            (n.animating = !1),
            (n.destroyed = !1),
            n.cfg.enabledStack &&
              ((n.undoStack = new On(n.cfg.maxStep)), (n.redoStack = new On(n.cfg.maxStep))),
            n
          );
        }
        Object(h.c)(e, t),
          (e.prototype.init = function () {
            this.initCanvas();
            const t = new Gr(this);
            const e = new Ir(this);
            const n = new ai(this);
            const r = new ui(this);
            this.set({
              viewController: t,
              modeController: e,
              itemController: n,
              stateController: r,
            }),
              this.initLayoutController(),
              this.initEventController(),
              this.initGroups(),
              this.initPlugins(),
              an(this.onTick.bind(this));
          }),
          (e.prototype.initGroups = function () {
            const t = this.get('canvas');
            const e = this.get('canvas').get('el').id;
            const n = t.addGroup({ id: `${e}-root`, className: dr.rootContainerClassName });
            if (this.get('groupByTypes')) {
              const r = n.addGroup({ id: `${e}-edge`, className: dr.edgeContainerClassName });
              const i = n.addGroup({ id: `${e}-node`, className: dr.nodeContainerClassName });
              const o = n.addGroup({ id: `${e}-combo`, className: dr.comboContainerClassName });
              o.toBack(), this.set({ nodeGroup: i, edgeGroup: r, comboGroup: o });
            }
            const a = n.addGroup({ id: `${e}-delegate`, className: dr.delegateContainerClassName });
            this.set({ delegateGroup: a }), this.set('group', n);
          }),
          (e.prototype.getDefaultCfg = function () {
            return {
              container: void 0,
              width: void 0,
              height: void 0,
              renderer: 'canvas',
              modes: {},
              plugins: [],
              data: {},
              fitViewPadding: 10,
              minZoom: 0.2,
              maxZoom: 10,
              event: !0,
              groupByTypes: !0,
              directed: !1,
              autoPaint: !0,
              nodes: [],
              edges: [],
              combos: [],
              vedges: [],
              itemMap: {},
              linkCenter: !1,
              defaultNode: {},
              defaultEdge: {},
              nodeStateStyles: {},
              edgeStateStyles: {},
              states: {},
              animate: !1,
              animateCfg: { onFrame: void 0, duration: 500, easing: 'easeLinear' },
              callback: void 0,
              enabledStack: !1,
              maxStep: 10,
              tooltips: [],
            };
          }),
          (e.prototype.set = function (t, e) {
            return (
              Object(gt.x)(t)
                ? (this.cfg = Object(h.a)(Object(h.a)({}, this.cfg), t))
                : (this.cfg[t] = e),
              this
            );
          }),
          (e.prototype.get = function (t) {
            return this.cfg[t];
          }),
          (e.prototype.getGroup = function () {
            return this.get('group');
          }),
          (e.prototype.getContainer = function () {
            return this.get('container');
          }),
          (e.prototype.getMinZoom = function () {
            return this.get('minZoom');
          }),
          (e.prototype.setMinZoom = function (t) {
            return this.set('minZoom', t);
          }),
          (e.prototype.getMaxZoom = function () {
            return this.get('maxZoom');
          }),
          (e.prototype.setMaxZoom = function (t) {
            return this.set('maxZoom', t);
          }),
          (e.prototype.getWidth = function () {
            return this.get('width');
          }),
          (e.prototype.getHeight = function () {
            return this.get('height');
          }),
          (e.prototype.clearItemStates = function (t, e) {
            Object(gt.y)(t) && (t = this.findById(t));
            const n = this.get('itemController');
            e || (e = t.get('states')),
              n.clearItemStates(t, e),
              this.get('stateController').updateStates(t, e, !1);
          }),
          (e.prototype.node = function (t) {
            typeof t === 'function' && this.set('nodeMapper', t);
          }),
          (e.prototype.edge = function (t) {
            typeof t === 'function' && this.set('edgeMapper', t);
          }),
          (e.prototype.combo = function (t) {
            typeof t === 'function' && this.set('comboMapper', t);
          }),
          (e.prototype.findById = function (t) {
            return this.get('itemMap')[t];
          }),
          (e.prototype.find = function (t, e) {
            let n;
            const r = this.get(`${t}s`);
            return (
              Object(gt.f)(r, (t, r) => {
                if (e(t, r)) return (n = t);
              }),
              n
            );
          }),
          (e.prototype.findAll = function (t, e) {
            const n = [];
            return (
              Object(gt.f)(this.get(`${t}s`), (t, r) => {
                e(t, r) && n.push(t);
              }),
              n
            );
          }),
          (e.prototype.findAllByState = function (t, e) {
            return this.findAll(t, (t) => {
              return t.hasState(e);
            });
          }),
          (e.prototype.translate = function (t, e) {
            const n = this.get('group');
            let r = Object(gt.c)(n.getMatrix());
            r || (r = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
              (r = Pi(r, [['t', t, e]])),
              n.setMatrix(r),
              this.emit('viewportchange', { action: 'translate', matrix: n.getMatrix() }),
              this.autoPaint();
          }),
          (e.prototype.moveTo = function (t, e) {
            const n = this.get('group');
            Yn(n, { x: t, y: e }),
              this.emit('viewportchange', { action: 'move', matrix: n.getMatrix() });
          }),
          (e.prototype.fitView = function (t) {
            t && this.set('fitViewPadding', t),
              this.get('viewController').fitView(),
              this.autoPaint();
          }),
          (e.prototype.fitCenter = function () {
            this.get('viewController').fitCenter(), this.autoPaint();
          }),
          (e.prototype.addBehaviors = function (t, e) {
            return this.get('modeController').manipulateBehaviors(t, e, !0), this;
          }),
          (e.prototype.removeBehaviors = function (t, e) {
            return this.get('modeController').manipulateBehaviors(t, e, !1), this;
          }),
          (e.prototype.updateBehavior = function (t, e, n) {
            return this.get('modeController').updateBehavior(t, e, n), this;
          }),
          (e.prototype.zoom = function (t, e) {
            const n = this.get('group');
            let r = Object(gt.c)(n.getMatrix());
            const i = this.get('minZoom');
            const o = this.get('maxZoom');
            r || (r = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
              (r = Pi(
                r,
                e
                  ? [
                      ['t', -e.x, -e.y],
                      ['s', t, t],
                      ['t', e.x, e.y],
                    ]
                  : [['s', t, t]],
              )),
              (i && r[0] < i) ||
                (o && r[0] > o) ||
                (n.setMatrix(r),
                this.emit('viewportchange', { action: 'zoom', matrix: r }),
                this.autoPaint());
          }),
          (e.prototype.zoomTo = function (t, e) {
            const n = t / this.getZoom();
            this.zoom(n, e);
          }),
          (e.prototype.focusItem = function (t, e, n) {
            const r = this.get('viewController');
            let i = !1;
            e ? (i = !0) : void 0 === e && (i = this.get('animate'));
            let o = {};
            n ? (o = n) : void 0 === n && (o = this.get('animateCfg')),
              r.focus(t, i, o),
              this.autoPaint();
          }),
          (e.prototype.autoPaint = function () {
            this.get('autoPaint') && this.paint();
          }),
          (e.prototype.paint = function () {
            this.emit('beforepaint'), this.get('canvas').draw(), this.emit('afterpaint');
          }),
          (e.prototype.getPointByClient = function (t, e) {
            return this.get('viewController').getPointByClient(t, e);
          }),
          (e.prototype.getClientByPoint = function (t, e) {
            return this.get('viewController').getClientByPoint(t, e);
          }),
          (e.prototype.getPointByCanvas = function (t, e) {
            return this.get('viewController').getPointByCanvas(t, e);
          }),
          (e.prototype.getCanvasByPoint = function (t, e) {
            return this.get('viewController').getCanvasByPoint(t, e);
          }),
          (e.prototype.getGraphCenterPoint = function () {
            const t = this.get('group').getCanvasBBox();
            return { x: (t.minX + t.maxX) / 2, y: (t.minY + t.maxY) / 2 };
          }),
          (e.prototype.getViewPortCenterPoint = function () {
            return this.getPointByCanvas(this.get('width') / 2, this.get('height') / 2);
          }),
          (e.prototype.showItem = function (t, e) {
            void 0 === e && (e = !0);
            const n = this.get('itemController').changeItemVisibility(t, !0);
            if (e && this.get('enabledStack')) {
              const r = n.getID();
              const i = {};
              const o = {};
              switch (n.getType()) {
                case 'node':
                  (i.nodes = [{ id: r, visible: !1 }]), (o.nodes = [{ id: r, visible: !0 }]);
                  break;
                case 'edge':
                  (i.nodes = [{ id: r, visible: !1 }]), (o.edges = [{ id: r, visible: !0 }]);
                  break;
                case 'combo':
                  (i.nodes = [{ id: r, visible: !1 }]), (o.combos = [{ id: r, visible: !0 }]);
              }
              this.pushStack('visible', { before: i, after: o });
            }
          }),
          (e.prototype.hideItem = function (t, e) {
            void 0 === e && (e = !0);
            const n = this.get('itemController').changeItemVisibility(t, !1);
            if (e && this.get('enabledStack')) {
              const r = n.getID();
              const i = {};
              const o = {};
              switch (n.getType()) {
                case 'node':
                  (i.nodes = [{ id: r, visible: !0 }]), (o.nodes = [{ id: r, visible: !1 }]);
                  break;
                case 'edge':
                  (i.nodes = [{ id: r, visible: !0 }]), (o.edges = [{ id: r, visible: !1 }]);
                  break;
                case 'combo':
                  (i.nodes = [{ id: r, visible: !0 }]), (o.combos = [{ id: r, visible: !1 }]);
              }
              this.pushStack('visible', { before: i, after: o });
            }
          }),
          (e.prototype.refreshItem = function (t) {
            this.get('itemController').refreshItem(t);
          }),
          (e.prototype.setAutoPaint = function (t) {
            this.set('autoPaint', t), this.get('canvas').set('autoDraw', t);
          }),
          (e.prototype.remove = function (t, e) {
            void 0 === e && (e = !0), this.removeItem(t, e);
          }),
          (e.prototype.removeItem = function (t, e) {
            void 0 === e && (e = !0);
            let n = t;
            if ((Object(gt.y)(t) && (n = this.findById(t)), !n && Object(gt.y)(t)))
              console.warn('The item to be removed does not exist!');
            else if (n) {
              let r = '';
              if ((n.getType && (r = n.getType()), e && this.get('enabledStack'))) {
                const i = Object(h.a)(Object(h.a)({}, n.getModel()), { itemType: r });
                const o = {};
                switch (r) {
                  case 'node':
                    (o.nodes = [i]), (o.edges = []);
                    for (let a = n.getEdges(), s = a.length - 1; s >= 0; s--)
                      o.edges.push(
                        Object(h.a)(Object(h.a)({}, a[s].getModel()), { itemType: 'edge' }),
                      );
                    break;
                  case 'edge':
                    o.edges = [i];
                    break;
                  case 'combo':
                    o.combos = [i];
                }
                this.pushStack('delete', { before: o, after: {} });
              }
              if (r === 'node') n.getModel().comboId && this.updateComboTree(n);
              if ((this.get('itemController').removeItem(n), r === 'combo')) {
                const u = Ar(this.get('comboTrees'));
                this.set('comboTrees', u);
              }
            }
          }),
          (e.prototype.addItem = function (t, e, n, r) {
            void 0 === n && (n = !0), void 0 === r && (r = !0);
            const i = this.get('comboSorted');
            this.set('comboSorted', i && !r);
            const o = this.get('itemController');
            if (
              !(function (t, e) {
                if (t === 'node' || t === 'combo') {
                  if (e.id && !Object(gt.y)(e.id))
                    return (
                      console.warn(
                        `G6 Warning Tips: missing 'id' property, or the 'id' %c${e.id}%c is not a string.`,
                        'font-size: 20px; color: red;',
                        '',
                      ),
                      !1
                    );
                } else if (!(t !== 'edge' || (e.source && e.target)))
                  return (
                    console.warn("G6 Warning Tips: missing 'source' or 'target' for the edge."), !1
                  );
                return !0;
              })(t, e)
            )
              return !1;
            if (!e.id || !this.findById(e.id)) {
              let a;
              let s = this.get('comboTrees');
              if ((s || (s = []), t === 'combo')) {
                const u = this.get('itemMap');
                let c = !1;
                if (
                  (s.forEach((n) => {
                    c ||
                      Sr(n, (n) => {
                        if (e.parentId === n.id) {
                          c = !0;
                          const r = Object(h.a)({ id: e.id, depth: n.depth + 2 }, e);
                          n.children ? n.children.push(r) : (n.children = [r]),
                            (e.depth = r.depth),
                            (a = o.addItem(t, e));
                        }
                        const i = u[n.id];
                        return (
                          c &&
                            i &&
                            i.getType &&
                            i.getType() === 'combo' &&
                            o.updateCombo(i, n.children),
                          !0
                        );
                      });
                  }),
                  !c)
                ) {
                  const l = Object(h.a)({ id: e.id, depth: 0 }, e);
                  (e.depth = l.depth), s.push(l), (a = o.addItem(t, e));
                }
                this.set('comboTrees', s);
              } else if (t === 'node' && Object(gt.y)(e.comboId) && s) {
                var d;
                (d = this.findById(e.comboId)) &&
                  d.getType &&
                  d.getType() !== 'combo' &&
                  console.warn(
                    `'${e.comboId}' is not a id of a combo in the graph, the node will be added without combo.`,
                  ),
                  (a = o.addItem(t, e));
                const f = this.get('itemMap');
                let p = !1;
                let g = !1;
                (s || []).forEach((t) => {
                  g ||
                    p ||
                    Sr(t, (t) => {
                      if (t.id === e.id) return (g = !0), !1;
                      if (e.comboId === t.id && !g) {
                        p = !0;
                        const n = Object(gt.c)(e);
                        (n.itemType = 'node'),
                          t.children ? t.children.push(n) : (t.children = [n]),
                          (n.depth = t.depth + 1);
                      }
                      return (
                        p &&
                          f[t.id].getType &&
                          f[t.id].getType() === 'combo' &&
                          o.updateCombo(f[t.id], t.children),
                        !0
                      );
                    });
                });
              } else a = o.addItem(t, e);
              if ((t === 'node' && e.comboId) || (t === 'combo' && e.parentId))
                (d = this.findById(e.comboId || e.parentId)) &&
                  d.getType &&
                  d.getType() === 'combo' &&
                  d.addChild(a);
              const y = this.get('combos');
              if (
                (y && y.length > 0 && this.sortCombos(),
                this.autoPaint(),
                n && this.get('enabledStack'))
              ) {
                const v = Object(h.a)(Object(h.a)({}, a.getModel()), { itemType: t });
                const m = {};
                switch (t) {
                  case 'node':
                    m.nodes = [v];
                    break;
                  case 'edge':
                    m.edges = [v];
                    break;
                  case 'combo':
                    m.combos = [v];
                }
                this.pushStack('add', { before: {}, after: m });
              }
              return a;
            }
            console.warn(
              `This item exists already. Be sure the id %c${e.id}%c is unique.`,
              'font-size: 20px; color: red;',
              '',
            );
          }),
          (e.prototype.add = function (t, e, n, r) {
            return void 0 === n && (n = !0), void 0 === r && (r = !0), this.addItem(t, e, n, r);
          }),
          (e.prototype.updateItem = function (t, e, n) {
            const r = this;
            void 0 === n && (n = !0);
            let i;
            const o = this.get('itemController');
            i = Object(gt.y)(t) ? this.findById(t) : t;
            const a = Object(gt.c)(i.getModel());
            let s = '';
            i.getType && (s = i.getType());
            const u = Object(h.f)([], i.getStates());
            if (
              (s === 'combo' &&
                Object(gt.f)(u, (t) => {
                  return r.setItemState(i, t, !1);
                }),
              o.updateItem(i, e),
              s === 'combo' &&
                Object(gt.f)(u, (t) => {
                  return r.setItemState(i, t, !0);
                }),
              n && this.get('enabledStack'))
            ) {
              const c = { nodes: [], edges: [], combos: [] };
              const l = { nodes: [], edges: [], combos: [] };
              const d = Object(h.a)({ id: a.id }, e);
              switch (s) {
                case 'node':
                  c.nodes.push(a), l.nodes.push(d);
                  break;
                case 'edge':
                  c.edges.push(a), l.edges.push(d);
                  break;
                case 'combo':
                  c.combos.push(a), l.combos.push(d);
              }
              s === 'node' && c.nodes.push(a), this.pushStack('update', { before: c, after: l });
            }
          }),
          (e.prototype.update = function (t, e, n) {
            void 0 === n && (n = !0), this.updateItem(t, e, n);
          }),
          (e.prototype.setItemState = function (t, e, n) {
            Object(gt.y)(t) && (t = this.findById(t)),
              this.get('itemController').setItemState(t, e, n);
            const r = this.get('stateController');
            Object(gt.y)(n) ? r.updateState(t, `${e}:${n}`, !0) : r.updateState(t, e, n);
          }),
          (e.prototype.priorityState = function (t, e) {
            this.get('itemController').priorityState(t, e);
          }),
          (e.prototype.data = function (t) {
            Tr(t), this.set('data', t);
          }),
          (e.prototype.render = function () {
            const t = this;
            this.set('comboSorted', !1);
            const e = this.get('data');
            if ((this.get('enabledStack') && this.clearStack(), !e))
              throw new Error('data must be defined first');
            const n = e.nodes;
            const r = void 0 === n ? [] : n;
            const i = e.edges;
            const o = void 0 === i ? [] : i;
            const a = e.combos;
            const s = void 0 === a ? [] : a;
            if (
              (this.clear(!0),
              this.emit('beforerender'),
              Object(gt.f)(r, (e) => {
                t.add('node', e, !1, !1);
              }),
              s && s.length !== 0)
            ) {
              const u = kr(s, r);
              this.set('comboTrees', u), t.addCombos(s);
            }
            Object(gt.f)(o, (e) => {
              t.add('edge', e, !1, !1);
            });
            const c = t.get('animate');
            (t.get('fitView') || t.get('fitCenter')) && t.set('animate', !1);
            const h = t.get('layoutController');
            if (h) {
              if (
                (h.layout(() => {
                  t.get('fitView') ? t.fitView() : t.get('fitCenter') && t.fitCenter();
                  t.autoPaint(),
                    t.emit('afterrender'),
                    (t.get('fitView') || t.get('fitCenter')) && t.set('animate', c);
                }),
                this.refreshPositions(),
                this.destroyed)
              )
                return;
            } else
              t.get('fitView') && t.fitView(),
                t.get('fitCenter') && t.fitCenter(),
                t.emit('afterrender'),
                t.set('animate', c);
            this.get('groupByTypes') ||
              (s && s.length !== 0
                ? this.sortCombos()
                : e.nodes && e.edges && e.nodes.length < e.edges.length
                ? this.getNodes().forEach((t) => {
                    t.toFront();
                  })
                : this.getEdges().forEach((t) => {
                    t.toBack();
                  }));
            this.get('enabledStack') && this.pushStack('render');
          }),
          (e.prototype.read = function (t) {
            this.data(t), this.render();
          }),
          (e.prototype.diffItems = function (t, e, n) {
            let r;
            const i = this;
            const o = this.get('itemMap');
            Object(gt.f)(n, (n) => {
              if ((r = o[n.id])) {
                if (i.get('animate') && t === 'node') {
                  let a = r.getContainer().getMatrix();
                  a || (a = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                    r.set('originAttrs', { x: a[6], y: a[7] });
                }
                i.updateItem(r, n, !1);
              } else r = i.addItem(t, n, !1);
              r && e[`${t}s`].push(r);
            });
          }),
          (e.prototype.changeData = function (t, e) {
            void 0 === e && (e = !0);
            const n = this;
            if (!Tr(t)) return this;
            e &&
              this.get('enabledStack') &&
              this.pushStack('changedata', { before: n.save(), after: t }),
              this.set('comboSorted', !1),
              this.removeHulls(),
              this.getNodes().map((t) => {
                return n.clearItemStates(t);
              }),
              this.getEdges().map((t) => {
                return n.clearItemStates(t);
              });
            const r = this.get('canvas');
            const i = r.get('localRefresh');
            r.set('localRefresh', !1), n.get('data') || (n.data(t), n.render());
            const o = this.get('itemMap');
            const a = { nodes: [], edges: [] };
            const s = t.combos;
            if (s) {
              const u = kr(s, t.nodes);
              this.set('comboTrees', u);
            }
            this.diffItems('node', a, t.nodes),
              Object(gt.f)(o, (t, e) => {
                (o[e].getModel().depth = 0),
                  (t.getType && t.getType() === 'edge') ||
                    (t.getType && t.getType() === 'combo'
                      ? (delete o[e], t.destroy())
                      : a.nodes.indexOf(t) < 0 && (delete o[e], n.remove(t, !1)));
              });
            for (let c = this.getCombos(), h = c.length - 1; h >= 0; h--)
              c[h].destroyed && c.splice(h, 1);
            s && (n.addCombos(s), this.get('groupByTypes') || this.sortCombos()),
              this.diffItems('edge', a, t.edges),
              Object(gt.f)(o, (t, e) => {
                (!t.getType || (t.getType() !== 'node' && t.getType() !== 'combo')) &&
                  a.edges.indexOf(t) < 0 &&
                  (delete o[e], n.remove(t, !1));
              }),
              this.set({ nodes: a.nodes, edges: a.edges });
            const l = this.get('layoutController');
            return (
              l &&
                (l.changeData(),
                n.get('animate') && !l.getLayoutType() ? n.positionsAnimate() : n.autoPaint()),
              setTimeout(() => {
                r.set('localRefresh', i);
              }, 16),
              this
            );
          }),
          (e.prototype.addCombos = function (t) {
            const e = this.get('comboTrees');
            this.get('itemController').addCombos(e, t);
          }),
          (e.prototype.createCombo = function (t, e) {
            const n = this;
            this.set('comboSorted', !1);
            let r;
            let i = '';
            if (t) {
              if (Object(gt.y)(t)) (i = t), (r = { id: t });
              else {
                if (!(i = t.id))
                  return void console.warn(
                    'Create combo failed. Please assign a unique string id for the adding combo.',
                  );
                r = t;
              }
              const o = e.map((t) => {
                const e = n.findById(t);
                const r = e.getModel();
                let o = '';
                e.getType && (o = e.getType());
                const a = { id: e.getID(), itemType: o };
                return (
                  o === 'combo'
                    ? ((a.parentId = i), (r.parentId = i))
                    : o === 'node' && ((a.comboId = i), (r.comboId = i)),
                  a
                );
              });
              (r.children = o), this.addItem('combo', r, !1), this.set('comboSorted', !1);
              const a = this.get('comboTrees');
              (a || []).forEach((t) => {
                Sr(t, (t) => {
                  return t.id !== i || ((t.itemType = 'combo'), (t.children = o), !1);
                });
              }),
                a && this.sortCombos();
            }
          }),
          (e.prototype.uncombo = function (t) {
            const e = this;
            let n = t;
            if (
              (Object(gt.y)(t) && (n = this.findById(t)),
              !n || (n.getType && n.getType() !== 'combo'))
            )
              console.warn('The item is not a combo!');
            else {
              const r = n.getModel().parentId;
              let i = this.get('comboTrees');
              i || (i = []);
              let o;
              const a = this.get('itemMap');
              const s = n.get('id');
              let u = [];
              const c = this.get('combos');
              const h = this.findById(r);
              if (
                (i.forEach((i) => {
                  o ||
                    Sr(i, (i) => {
                      if (i.id === s) {
                        (o = i),
                          n.getEdges().forEach((t) => {
                            e.removeItem(t, !1);
                          });
                        var l = c.indexOf(t);
                        c.splice(l, 1), delete a[s], n.destroy();
                      }
                      return (
                        !r ||
                        !o ||
                        i.id !== r ||
                        (h.removeCombo(n),
                        (l = (u = i.children).indexOf(o)) !== -1 && u.splice(l, 1),
                        o.children.forEach((t) => {
                          const n = e.findById(t.id);
                          const i = n.getModel();
                          n.getType && n.getType() === 'combo'
                            ? ((t.parentId = r),
                              delete t.comboId,
                              (i.parentId = r),
                              delete i.comboId)
                            : n.getType &&
                              n.getType() === 'node' &&
                              ((t.comboId = r), (i.comboId = r)),
                            h.addChild(n),
                            u.push(t);
                        }),
                        !1)
                      );
                    });
                }),
                !r && o)
              ) {
                const l = i.indexOf(o);
                i.splice(l, 1),
                  o.children.forEach((t) => {
                    t.parentId = void 0;
                    const n = e.findById(t.id).getModel();
                    delete n.parentId, delete n.comboId, t.itemType !== 'node' && i.push(t);
                  });
              }
            }
          }),
          (e.prototype.updateCombos = function () {
            const t = this;
            const e = this.get('comboTrees');
            const n = this.get('itemController');
            const r = this.get('itemMap');
            (e || []).forEach((e) => {
              Sr(e, (e) => {
                if (!e) return !0;
                const i = r[e.id];
                if (i && i.getType && i.getType() === 'combo') {
                  const o = Object(h.f)([], i.getStates());
                  Object(gt.f)(o, (e) => {
                    return t.setItemState(i, e, !1);
                  }),
                    n.updateCombo(i, e.children),
                    Object(gt.f)(o, (e) => {
                      return t.setItemState(i, e, !0);
                    });
                }
                return !0;
              });
            }),
              this.sortCombos();
          }),
          (e.prototype.updateCombo = function (t) {
            let e;
            const n = this;
            let r = t;
            if (
              (Object(gt.y)(t) && (r = this.findById(t)),
              !r || (r.getType && r.getType() !== 'combo'))
            )
              console.warn('The item to be updated is not a combo!');
            else {
              e = r.get('id');
              const i = this.get('comboTrees');
              const o = this.get('itemController');
              const a = this.get('itemMap');
              (i || []).forEach((t) => {
                Sr(t, (t) => {
                  if (!t) return !0;
                  const r = a[t.id];
                  if (e === t.id && r && r.getType && r.getType() === 'combo') {
                    const i = Object(h.f)([], r.getStates());
                    Object(gt.f)(i, (t) => {
                      r.getStateStyle(t) && n.setItemState(r, t, !1);
                    }),
                      o.updateCombo(r, t.children),
                      Object(gt.f)(i, (t) => {
                        r.getStateStyle(t) && n.setItemState(r, t, !0);
                      }),
                      e && (e = t.parentId);
                  }
                  return !0;
                });
              });
            }
          }),
          (e.prototype.updateComboTree = function (t, e, n) {
            void 0 === n && (n = !0);
            let r;
            this.set('comboSorted', !1);
            let i;
            const o = (r = Object(gt.y)(t) ? this.findById(t) : t).getModel();
            const a = o.comboId || o.parentId;
            let s = '';
            if ((r.getType && (s = r.getType()), e && s === 'combo')) {
              let u;
              const c = this.get('comboTrees');
              let h = !0;
              if (
                ((c || []).forEach((t) => {
                  u ||
                    Mr(t, (t) => {
                      if (!u) return t.id === r.getID() && (u = t), !0;
                    });
                }),
                Mr(u, (t) => {
                  return t.id !== e || ((h = !1), !1);
                }),
                !h)
              )
                return void console.warn(
                  'Failed to update the combo tree! The parentId points to a descendant of the combo!',
                );
            }
            if (n && this.get('enabledStack')) {
              const l = {};
              const d = {};
              s === 'combo'
                ? ((l.combos = [{ id: o.id, parentId: o.parentId }]),
                  (d.combos = [{ id: o.id, parentId: e }]))
                : s === 'node' &&
                  ((l.nodes = [{ id: o.id, parentId: o.comboId }]),
                  (d.nodes = [{ id: o.id, parentId: e }])),
                this.pushStack('updateComboTree', { before: l, after: d });
            }
            if (o.parentId || o.comboId) {
              const f = this.findById(o.parentId || o.comboId);
              f && f.removeChild(r);
            }
            (s === 'combo' ? (o.parentId = e) : s === 'node' && (o.comboId = e), e) &&
              (i = this.findById(e)) &&
              i.addChild(r);
            a && (i = this.findById(a)) && i.removeChild(r);
            const p = Ar(this.get('comboTrees'), o.id, e);
            this.set('comboTrees', p), this.updateCombos();
          }),
          (e.prototype.save = function () {
            const t = [];
            const e = [];
            const n = [];
            return (
              Object(gt.f)(this.get('nodes'), (e) => {
                t.push(e.getModel());
              }),
              Object(gt.f)(this.get('edges'), (t) => {
                e.push(t.getModel());
              }),
              Object(gt.f)(this.get('combos'), (t) => {
                n.push(t.getModel());
              }),
              { nodes: t, edges: e, combos: n }
            );
          }),
          (e.prototype.changeSize = function (t, e) {
            return this.get('viewController').changeSize(t, e), this;
          }),
          (e.prototype.refresh = function () {
            if ((this.emit('beforegraphrefresh'), this.get('animate'))) this.positionsAnimate();
            else {
              const t = this.get('nodes');
              const e = this.get('edges');
              const n = this.get('edges');
              Object(gt.f)(t, (t) => {
                t.refresh();
              }),
                Object(gt.f)(e, (t) => {
                  t.refresh();
                }),
                Object(gt.f)(n, (t) => {
                  t.refresh();
                });
            }
            this.emit('aftergraphrefresh'), this.autoPaint();
          }),
          (e.prototype.getNodes = function () {
            return this.get('nodes');
          }),
          (e.prototype.getEdges = function () {
            return this.get('edges');
          }),
          (e.prototype.getCombos = function () {
            return this.get('combos');
          }),
          (e.prototype.getComboChildren = function (t) {
            if (
              (Object(gt.y)(t) && (t = this.findById(t)),
              t && (!t.getType || t.getType() === 'combo'))
            )
              return t.getChildren();
            console.warn('The combo does not exist!');
          }),
          (e.prototype.positionsAnimate = function () {
            const t = this;
            t.emit('beforeanimate');
            const e = t.get('animateCfg');
            const n = e.onFrame;
            const r = t.getNodes();
            const i = r.map((t) => {
              const e = t.getModel();
              return { id: e.id, x: e.x, y: e.y };
            });
            t.isAnimating() && t.stopAnimate(),
              t.get('canvas').animate(
                (e) => {
                  Object(gt.f)(i, (r) => {
                    const i = t.findById(r.id);
                    if (i && !i.destroyed) {
                      let o = i.get('originAttrs');
                      const a = i.get('model');
                      if (!o) {
                        let s = i.getContainer().getMatrix();
                        s || (s = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                          (o = { x: s[6], y: s[7] }),
                          i.set('originAttrs', o);
                      }
                      if (n) {
                        const u = n(i, e, r, o);
                        i.set('model', Object.assign(a, u));
                      } else (a.x = o.x + (r.x - o.x) * e), (a.y = o.y + (r.y - o.y) * e);
                    }
                  }),
                    t.refreshPositions();
                },
                {
                  duration: e.duration,
                  easing: e.easing,
                  callback() {
                    Object(gt.f)(r, (t) => {
                      t.set('originAttrs', null);
                    }),
                      e.callback && e.callback(),
                      t.emit('afteranimate'),
                      (t.animating = !1);
                  },
                },
              );
          }),
          (e.prototype.refreshPositions = function () {
            this.emit('beforegraphrefreshposition');
            let t;
            const e = this.get('nodes');
            const n = this.get('edges');
            const r = this.get('vedges');
            const i = this.get('combos');
            const o = {};
            Object(gt.f)(e, (e) => {
              t = e.getModel();
              const n = e.get('originAttrs');
              if (!n || t.x !== n.x || t.y !== n.y) {
                const r = e.updatePosition({ x: t.x, y: t.y });
                (o[t.id] = r), t.comboId && (o[t.comboId] = o[t.comboId] || r);
              }
            }),
              i && i.length !== 0 && this.updateCombos(),
              Object(gt.f)(n, (t) => {
                const e = t.getSource().getModel();
                const n = t.getTarget();
                if (!Object(gt.x)(n)) {
                  const r = n.getModel();
                  (o[e.id] || o[r.id] || t.getModel().isComboEdge) && t.refresh();
                }
              }),
              Object(gt.f)(r, (t) => {
                t.refresh();
              }),
              this.emit('aftergraphrefreshposition'),
              this.autoPaint();
          }),
          (e.prototype.stopAnimate = function () {
            this.get('canvas').stopAnimate();
          }),
          (e.prototype.isAnimating = function () {
            return this.animating;
          }),
          (e.prototype.getZoom = function () {
            const t = this.get('group').getMatrix();
            return t ? t[0] : 1;
          }),
          (e.prototype.getCurrentMode = function () {
            return this.get('modeController').getMode();
          }),
          (e.prototype.setMode = function (t) {
            return this.get('modeController').setMode(t), this;
          }),
          (e.prototype.clear = function (t) {
            return (
              void 0 === t && (t = !1),
              this.get('canvas').clear(),
              this.initGroups(),
              this.set({
                itemMap: {},
                nodes: [],
                edges: [],
                groups: [],
                combos: [],
                comboTrees: [],
              }),
              t || this.emit('afterrender'),
              this
            );
          }),
          (e.prototype.updateLayout = function (t) {
            const e = this.get('layoutController');
            Object(gt.y)(t) && (t = { type: t });
            const n = this.get('layout');
            const r = {};
            Object.assign(r, n, t),
              this.set('layout', r),
              e.isLayoutTypeSame(r) && r.gpuEnabled === n.gpuEnabled
                ? e.updateLayoutCfg(r)
                : e.changeLayout(r);
          }),
          (e.prototype.destroyLayout = function () {
            this.get('layoutController').destroyLayout();
          }),
          (e.prototype.layout = function () {
            const t = this.get('layoutController');
            const e = this.get('layout');
            e && t && (e.workerEnabled ? t.layout() : t.layoutMethod ? t.relayout(!0) : t.layout());
          }),
          (e.prototype.collapseCombo = function (t) {
            const e = this;
            if ((Object(gt.y)(t) && (t = this.findById(t)), t)) {
              this.emit('beforecollapseexpandcombo', { action: 'expand', item: t });
              const n = t.getModel();
              this.get('itemController').collapseCombo(t), (n.collapsed = !0);
              const r = this.getEdges().concat(this.get('vedges'));
              let i = [];
              let o = [];
              const a = this.get('comboTrees');
              let s = !1;
              (a || []).forEach((t) => {
                s ||
                  Mr(t, (t) => {
                    if (s && t.depth <= n.depth) return !1;
                    if ((n.id === t.id && (s = !0), s)) {
                      const r = e.findById(t.id);
                      r &&
                        r.getType &&
                        r.getType() === 'combo' &&
                        ((i = i.concat(r.getNodes())), (o = o.concat(r.getCombos())));
                    }
                    return !0;
                  });
              });
              const u = {};
              const c = [];
              r.forEach((t) => {
                if (!t.isVisible() || t.getModel().isVEdge) {
                  let r = t.getSource();
                  let a = t.getTarget();
                  if (
                    ((i.includes(r) || o.includes(r)) && !i.includes(a) && !o.includes(a)) ||
                    r.getModel().id === n.id
                  ) {
                    if ((d = t.getModel()).isVEdge) return void e.removeItem(t, !1);
                    for (var s = a.getModel(); !a.isVisible(); ) {
                      if (!(a = e.findById(s.parentId || s.comboId)) || (!s.parentId && !s.comboId))
                        return;
                      s = a.getModel();
                    }
                    const h = s.id;
                    if (u[`${n.id}-${h}`]) return void (u[`${n.id}-${h}`] += d.size || 1);
                    var l = e.addItem('vedge', { source: n.id, target: h, isVEdge: !0 }, !1);
                    (u[`${n.id}-${h}`] = d.size || 1), c.push(l);
                  } else if (
                    (!i.includes(r) && !o.includes(r) && (i.includes(a) || o.includes(a))) ||
                    a.getModel().id === n.id
                  ) {
                    var d;
                    if ((d = t.getModel()).isVEdge) return void e.removeItem(t, !1);
                    for (var f = r.getModel(); !r.isVisible(); ) {
                      if (!(r = e.findById(f.parentId || f.comboId)) || (!f.parentId && !f.comboId))
                        return;
                      f = r.getModel();
                    }
                    const p = f.id;
                    if (u[`${p}-${n.id}`]) return void (u[`${p}-${n.id}`] += d.size || 1);
                    l = e.addItem('vedge', { target: n.id, source: p, isVEdge: !0 }, !1);
                    (u[`${p}-${n.id}`] = d.size || 1), c.push(l);
                  }
                }
              }),
                c.forEach((t) => {
                  const n = t.getModel();
                  e.updateItem(t, { size: u[`${n.source}-${n.target}`] }, !1);
                }),
                this.emit('aftercollapseexpandcombo', { action: 'collapse', item: t });
            } else console.warn('The combo to be collapsed does not exist!');
          }),
          (e.prototype.expandCombo = function (t) {
            const e = this;
            if (
              (Object(gt.y)(t) && (t = this.findById(t)),
              !t || (t.getType && t.getType() !== 'combo'))
            )
              console.warn('The combo to be collapsed does not exist!');
            else {
              this.emit('beforecollapseexpandcombo', { action: 'expand', item: t });
              const n = t.getModel();
              this.get('itemController').expandCombo(t), (n.collapsed = !1);
              const r = this.getEdges().concat(this.get('vedges'));
              let i = [];
              let o = [];
              const a = this.get('comboTrees');
              let s = !1;
              (a || []).forEach((t) => {
                s ||
                  Mr(t, (t) => {
                    if (s && t.depth <= n.depth) return !1;
                    if ((n.id === t.id && (s = !0), s)) {
                      const r = e.findById(t.id);
                      r &&
                        r.getType &&
                        r.getType() === 'combo' &&
                        ((i = i.concat(r.getNodes())), (o = o.concat(r.getCombos())));
                    }
                    return !0;
                  });
              });
              const u = {};
              const c = {};
              r.forEach((t) => {
                if (!t.isVisible() || t.getModel().isVEdge) {
                  let r = t.getSource();
                  let a = t.getTarget();
                  let s = r.get('id');
                  let h = a.get('id');
                  if (
                    ((i.includes(r) || o.includes(r)) && !i.includes(a) && !o.includes(a)) ||
                    s === n.id
                  ) {
                    if (t.getModel().isVEdge) return void e.removeItem(t, !1);
                    for (var l = a.getModel(); !a.isVisible(); ) {
                      if (!(a = e.findById(l.comboId || l.parentId)) || (!l.parentId && !l.comboId))
                        return;
                      l = a.getModel();
                    }
                    h = l.id;
                    for (var d = r.getModel(); !r.isVisible(); ) {
                      if (!(r = e.findById(d.comboId || d.parentId)) || (!d.parentId && !d.comboId))
                        return;
                      if (d.comboId === n.id || d.parentId === n.id) break;
                      d = r.getModel();
                    }
                    if (((s = d.id), h)) {
                      if (u[(p = `${s}-${h}`)])
                        return (
                          (u[p] += t.getModel().size || 1),
                          void e.updateItem(c[p], { size: u[p] }, !1)
                        );
                      var f = e.addItem('vedge', { source: s, target: h, isVEdge: !0 }, !1);
                      (u[p] = t.getModel().size || 1), (c[p] = f);
                    }
                  } else if (
                    (!i.includes(r) && !o.includes(r) && (i.includes(a) || o.includes(a))) ||
                    h === n.id
                  ) {
                    if (t.getModel().isVEdge) return void e.removeItem(t, !1);
                    for (d = r.getModel(); !r.isVisible(); ) {
                      if (!(r = e.findById(d.comboId || d.parentId)) || (!d.parentId && !d.comboId))
                        return;
                      d = r.getModel();
                    }
                    s = d.id;
                    for (l = a.getModel(); !a.isVisible(); ) {
                      if (!(a = e.findById(l.comboId || l.parentId)) || (!l.parentId && !l.comboId))
                        return;
                      if (l.comboId === n.id || l.parentId === n.id) break;
                      l = a.getModel();
                    }
                    if (((h = l.id), s)) {
                      var p;
                      if (u[(p = `${s}-${h}`)])
                        return (
                          (u[p] += t.getModel().size || 1),
                          void e.updateItem(c[p], { size: u[p] }, !1)
                        );
                      f = e.addItem('vedge', { target: h, source: s, isVEdge: !0 }, !1);
                      (u[p] = t.getModel().size || 1), (c[p] = f);
                    }
                  } else
                    (i.includes(r) || o.includes(r)) &&
                      (i.includes(a) || o.includes(a)) &&
                      r.isVisible() &&
                      a.isVisible() &&
                      t.show();
                }
              }),
                this.emit('aftercollapseexpandcombo', { action: 'expand', item: t });
            }
          }),
          (e.prototype.collapseExpandCombo = function (t) {
            if (
              (Object(gt.y)(t) && (t = this.findById(t)),
              t && (!t.getType || t.getType() === 'combo'))
            ) {
              for (var e = t.getModel(), n = this.findById(e.parentId); n; ) {
                const r = n.getModel();
                if (r.collapsed)
                  return (
                    console.warn(
                      "Fail to expand the combo since it's ancestor combo is collapsed.",
                    ),
                    void (n = void 0)
                  );
                n = this.findById(r.parentId);
              }
              e.collapsed ? this.expandCombo(t) : this.collapseCombo(t), this.updateCombo(t);
            }
          }),
          (e.prototype.sortCombos = function () {
            const t = this;
            if (!this.get('comboSorted')) {
              this.set('comboSorted', !0);
              const e = [];
              const n = {};
              (this.get('comboTrees') || []).forEach((t) => {
                Mr(t, (t) => {
                  return (
                    e[t.depth] ? e[t.depth].push(t.id) : (e[t.depth] = [t.id]),
                    (n[t.id] = t.depth),
                    !0
                  );
                });
              }),
                (this.getEdges().concat(this.get('vedges')) || []).forEach((t) => {
                  const r = t.getModel();
                  const i = n[r.source] || 0;
                  const o = n[r.target] || 0;
                  const a = Math.max(i, o);
                  e[a] ? e[a].push(r.id) : (e[a] = [r.id]);
                }),
                e.forEach((e) => {
                  if (e && e.length)
                    for (let n = e.length - 1; n >= 0; n--) {
                      const r = t.findById(e[n]);
                      r && r.toFront();
                    }
                });
            }
          }),
          (e.prototype.getNeighbors = function (t, e) {
            let n = t;
            return Object(gt.y)(t) && (n = this.findById(t)), n.getNeighbors(e);
          }),
          (e.prototype.getNodeDegree = function (t, e, n) {
            void 0 === e && (e = void 0), void 0 === n && (n = !1);
            let r = t;
            Object(gt.y)(t) && (r = this.findById(t));
            let i = this.get('degrees');
            (i && !n) || ((i = fn(this.save())), this.set('degrees', i));
            const o = i[r.getID()];
            let a = 0;
            if (!o) return 0;
            switch (e) {
              case 'in':
                a = o.inDegree;
                break;
              case 'out':
                a = o.outDegree;
                break;
              case 'all':
                a = o;
                break;
              default:
                a = o.degree;
            }
            return a;
          }),
          (e.prototype.getUndoStack = function () {
            return this.undoStack;
          }),
          (e.prototype.getRedoStack = function () {
            return this.redoStack;
          }),
          (e.prototype.getStackData = function () {
            return this.get('enabledStack')
              ? { undoStack: this.undoStack.toArray(), redoStack: this.redoStack.toArray() }
              : null;
          }),
          (e.prototype.clearStack = function () {
            this.get('enabledStack') && (this.undoStack.clear(), this.redoStack.clear());
          }),
          (e.prototype.pushStack = function (t, e, n) {
            if (
              (void 0 === t && (t = 'update'),
              void 0 === n && (n = 'undo'),
              this.get('enabledStack'))
            ) {
              const r = e ? Object(gt.c)(e) : { before: {}, after: Object(gt.c)(this.save()) };
              n === 'redo'
                ? this.redoStack.push({ action: t, data: r })
                : this.undoStack.push({ action: t, data: r }),
                this.emit('stackchange', { undoStack: this.undoStack, redoStack: this.redoStack });
            } else
              console.warn(
                '请先启用 undo & redo 功能，在实例化 Graph 时候配置 enabledStack: true !',
              );
          }),
          (e.prototype.getAdjMatrix = function (t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = this.get('directed'));
            let n = this.get('adjMatrix');
            return (n && t) || ((n = un(this.save(), e)), this.set('adjMatrix', n)), n;
          }),
          (e.prototype.getShortestPathMatrix = function (t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = this.get('directed'));
            let n = this.get('adjMatrix');
            let r = this.get('shortestPathMatrix');
            return (
              (n && t) || ((n = un(this.save(), e)), this.set('adjMatrix', n)),
              (r && t) || ((r = pn(this.save(), e)), this.set('shortestPathMatrix', r)),
              r
            );
          }),
          (e.prototype.on = function (e, n, r) {
            return t.prototype.on.call(this, e, n, r);
          }),
          (e.prototype.destroy = function () {
            this.clear(),
              this.clearStack(),
              this.get('itemController').destroy(),
              this.get('modeController').destroy(),
              this.get('viewController').destroy(),
              this.get('stateController').destroy(),
              this.get('canvas').destroy(),
              (this.cfg = null),
              (this.destroyed = !0),
              (this.redoStack = null),
              (this.undoStack = null);
          }),
          (e.prototype.createHull = function (t) {
            if (t.members && !(t.members.length < 1)) {
              let e = this.get('hullGroup');
              let n = this.get('hullMap');
              if (
                (n || ((n = {}), this.set('hullMap', n)),
                (e && !e.get('destroyed')) ||
                  ((e = this.get('group').addGroup({ id: 'hullGroup' })).toBack(),
                  this.set('hullGroup', e)),
                n[t.id])
              )
                return console.warn('Existed hull id.'), n[t.id];
              const r = e.addGroup({ id: `${t.id}-container` });
              const i = new Ei(this, Object(h.a)(Object(h.a)({}, t), { group: r }));
              return (n[i.id] = i), i;
            }
            console.warn('Create hull failed! The members is empty.');
          }),
          (e.prototype.getHulls = function () {
            return this.get('hullMap');
          }),
          (e.prototype.getHullById = function (t) {
            return this.get('hullMap')[t];
          }),
          (e.prototype.removeHull = function (t) {
            let e;
            (e = Object(gt.y)(t) ? this.getHullById(t) : t),
              delete this.get('hullMap')[e.id],
              e.destroy();
          }),
          (e.prototype.removeHulls = function () {
            const t = this.getHulls();
            t &&
              Object.keys(t).length &&
              (Object.keys(t).forEach((e) => {
                t[e].destroy();
              }),
              this.set('hullMap', {}));
          }),
          (e.prototype.onTick = function (t) {
            this.get('layoutController').onTick(t), an(this.onTick.bind(this));
          });
      })(nn.a);
      function Ni(t) {
        return (Ni =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      const Ti = sn.a.transform;
      const Ii = ['startArrow', 'endArrow'];
      const Bi = {
        lineWidth: 1,
        stroke: void 0,
        fill: void 0,
        lineAppendWidth: 1,
        opacity: void 0,
        strokeOpacity: void 0,
        fillOpacity: void 0,
        x: 0,
        y: 0,
        r: 10,
        width: 20,
        height: 20,
        shadowColor: void 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
      };
      const Li = {
        edge: {
          lineWidth: 1,
          stroke: '#000',
          lineDash: void 0,
          startArrow: !1,
          endArrow: !1,
          opacity: void 0,
          strokeOpacity: void 0,
          fillOpacity: void 0,
          shadowColor: void 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        },
        node: Bi,
        combo: Bi,
      };
      const Di = {
        options: {},
        itemType: '',
        type: '',
        getCustomConfig(t) {
          return {};
        },
        getOptions(t) {
          return Object(gt.e)(
            {
              labelCfg: {
                style: {
                  fontFamily:
                    (typeof window !== 'undefined' &&
                      window.getComputedStyle &&
                      window
                        .getComputedStyle(document.body, null)
                        .getPropertyValue('font-family')) ||
                    'Arial, sans-serif',
                },
              },
              descriptionCfg: {
                style: {
                  fontFamily:
                    (typeof window !== 'undefined' &&
                      window.getComputedStyle &&
                      window
                        .getComputedStyle(document.body, null)
                        .getPropertyValue('font-family')) ||
                    'Arial, sans-serif',
                },
              },
            },
            this.options,
            this.getCustomConfig(t) || {},
            t,
          );
        },
        draw(t, e) {
          const n = this.drawShape(t, e);
          (n.set('className', `${this.itemType}-shape`), t.label) &&
            this.drawLabel(t, e).set('className', `${this.itemType}-label`);
          return n;
        },
        afterDraw(t, e, n) {},
        drawShape(t, e) {
          return null;
        },
        drawLabel(t, e) {
          const n = this.getOptions(t).labelCfg || {};
          const r = this.getLabelStyle(t, n, e);
          const i = r.rotate;
          delete r.rotate;
          const o = e.addShape('text', {
            attrs: r,
            draggable: !0,
            className: 'text-shape',
            name: 'text-shape',
          });
          if (i) {
            const a = o.getBBox();
            let s = o.getMatrix();
            if ((s || (s = [1, 0, 0, 0, 1, 0, 0, 0, 1]), r.rotateCenter))
              switch (r.rotateCenter) {
                case 'center':
                  s = Ti(s, [
                    ['t', -a.width / 2, -a.height / 2],
                    ['r', i],
                    ['t', a.width / 2, a.height / 2],
                  ]);
                  break;
                case 'lefttop':
                  s = Ti(s, [
                    ['t', -r.x, -r.y],
                    ['r', i],
                    ['t', r.x, r.y],
                  ]);
                  break;
                case 'leftcenter':
                  s = Ti(s, [
                    ['t', -r.x, -r.y - a.height / 2],
                    ['r', i],
                    ['t', r.x, r.y + a.height / 2],
                  ]);
                  break;
                default:
                  s = Ti(s, [
                    ['t', -a.width / 2, -a.height / 2],
                    ['r', i],
                    ['t', a.width / 2, a.height / 2],
                  ]);
              }
            else
              s = Ti(s, [
                ['t', -r.x, -r.y - a.height / 2],
                ['r', i],
                ['t', r.x, r.y + a.height / 2],
              ]);
            o.setMatrix(s);
          }
          if (r.background) {
            const u = this.drawLabelBg(t, e, o);
            const c = `${this.itemType}-label-bg`;
            u.set('classname', c), o.toFront();
          }
          return o;
        },
        drawLabelBg(t, e, n) {
          const r = this.options.labelCfg;
          const i = Object(gt.D)({}, r, t.labelCfg);
          const o = this.getLabelBgStyleByPosition(n, t, i, e);
          return e.addShape('rect', { name: 'text-bg-shape', attrs: o });
        },
        getLabelStyleByPosition(t, e, n) {
          return { text: t.label };
        },
        getLabelBgStyleByPosition(t, e, n, r) {
          return {};
        },
        getLabelStyle(t, e, n) {
          const r = this.getLabelStyleByPosition(t, e, n);
          const i = `${this.itemType}Label`;
          const o = dr[i] ? dr[i].style : null;
          return Object(h.a)(Object(h.a)(Object(h.a)({}, o), r), e.style);
        },
        getShapeStyle(t) {
          return t.style;
        },
        update(t, e) {
          this.updateShapeStyle(t, e), this.updateLabel(t, e);
        },
        updateShapeStyle(t, e) {
          const n = e.getContainer();
          const r = e.getKeyShape();
          const i = Object(gt.D)({}, r.attr(), t.style);
          const o = function (t) {
            let e;
            const o = i[t];
            if (Object(gt.x)(o)) {
              const a = n.find((e) => {
                return e.get('name') === t;
              });
              a && a.attr(o);
            } else r.attr((((e = {})[t] = o), e));
          };
          for (const a in i) o(a);
        },
        updateLabel(t, e) {
          const n = e.getContainer();
          const r = this.getOptions({}).labelCfg;
          const i = `${this.itemType}-label`;
          const o = n.find((t) => {
            return t.get('className') === i;
          });
          const a = `${this.itemType}-label-bg`;
          let s = n.find((t) => {
            return t.get('classname') === a;
          });
          if (t.label || t.label === '')
            if (o) {
              let u = {};
              e.getModel && (u = e.getModel().labelCfg);
              const c = Object(gt.e)({}, r, u, t.labelCfg);
              const l = this.getLabelStyleByPosition(t, c, n);
              const d = t.labelCfg ? t.labelCfg.style : void 0;
              const f = c.style && c.style.background;
              const p = Object(h.a)(Object(h.a)(Object(h.a)({}, o.attr()), l), d);
              const g = p.rotate;
              if ((delete p.rotate, g)) {
                let y = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                (y = Ti(y, [
                  ['t', -p.x, -p.y],
                  ['r', g],
                  ['t', p.x, p.y],
                ])),
                  o.resetMatrix(),
                  o.attr(Object(h.a)(Object(h.a)({}, p), { matrix: y }));
              } else o.resetMatrix(), o.attr(p);
              if (s)
                if (p.background) {
                  const v = this.getLabelBgStyleByPosition(o, t, c, n);
                  const m = Object(h.a)(Object(h.a)({}, v), f);
                  if ((s.resetMatrix(), g)) {
                    let b = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    (b = Ti(b, [
                      ['t', -m.x, -m.y],
                      ['r', g],
                      ['t', m.x, m.y],
                    ])),
                      (m.matrix = b);
                  }
                  s.attr(m);
                } else n.removeChild(s);
              else
                p.background && ((s = this.drawLabelBg(t, n, o)).set('classname', a), o.toFront());
            } else {
              this.drawLabel(t, n).set('className', i);
            }
        },
        afterUpdate(t, e) {},
        setState(t, e, n) {
          let r;
          let i;
          const o = n.get('keyShape');
          if (o && !o.destroyed) {
            const a = n.getType();
            const s = Object(gt.o)(e) ? t : `${t}:${e}`;
            const u = this.getStateStyle(s, n);
            const c = n.getStateStyle(s);
            if (c || u) {
              const h = Object(gt.D)({}, c || u);
              const l = n.getContainer();
              const d = { x: 1, y: 1, cx: 1, cy: 1 };
              if ((a === 'combo' && ((d.r = 1), (d.width = 1), (d.height = 1)), e)) {
                const f = function (t) {
                  let e;
                  const n = h[t];
                  if (Object(gt.x)(n) && !Ii.includes(t)) {
                    const r = l.find((e) => {
                      return e.get('name') === t;
                    });
                    r && r.attr(n);
                  } else o.attr((((e = {})[t] = n), e));
                };
                for (var p in h) f(p);
              } else {
                const g = Nr(n.getCurrentStatesStyle());
                const y = n.getModel();
                const v = Object(gt.D)({}, y.style, Nr(n.getOriginStyle()));
                const m = o.get('name');
                const b = o.attr();
                const x = {};
                Object.keys(b).forEach((t) => {
                  if (t !== 'img') {
                    const e = b[t];
                    e && Ni(e) === 'object' ? (x[t] = Object(gt.c)(e)) : (x[t] = e);
                  }
                });
                const w = {};
                const O = function (t) {
                  const e = h[t];
                  if (Object(gt.x)(e) && !Ii.includes(t)) {
                    const n = l.find((e) => {
                      return e.get('name') === t;
                    });
                    if (n) {
                      const r = Object(gt.c)(n.attr());
                      Object(gt.f)(e, (e, i) => {
                        if (t === m && x[i] && !d[i]) {
                          delete x[i];
                          const s = v[t][i] || Li[a][i];
                          o.attr(i, s);
                        } else if (r[i] || r[i] === 0) {
                          delete r[i];
                          const u = v[t][i] || Li[a][i];
                          n.attr(i, u);
                        }
                      }),
                        (w[t] = r);
                    }
                  } else if (x[t] && !d[t]) {
                    delete x[t];
                    const i = v[t] || (v[m] ? v[m][t] : void 0) || Li[a][t];
                    o.attr(t, i);
                  }
                };
                for (const M in h) O(M);
                for (var p in (m ? (w[m] = x) : Object(gt.D)(w, x), g))
                  if (!d[p]) {
                    const S = g[p];
                    (Object(gt.x)(S) && !Ii.includes(p)) ||
                      (m
                        ? (Object(gt.D)(v[m], (((i = {})[p] = S), i)), delete v[p])
                        : Object(gt.D)(v, (((r = {})[p] = S), r)),
                      delete g[p]);
                  }
                const C = {};
                Object(gt.e)(C, v, w, g);
                let j = !1;
                const k = function (t) {
                  let e;
                  let n;
                  const r = C[t];
                  if (Object(gt.x)(r) && !Ii.includes(t)) {
                    const i = l.find((e) => {
                      return e.get('name') === t;
                    });
                    i &&
                      (t === m &&
                        (a === 'combo' && (delete r.r, delete r.width, delete r.height), (j = !0)),
                      i.attr(r));
                  } else if (!j) {
                    const s = r || Li[a][t];
                    a === 'combo'
                      ? m || o.attr((((e = {})[t] = s), e))
                      : o.attr((((n = {})[t] = s), n));
                  }
                };
                for (const A in C) k(A);
              }
            }
          }
        },
        getStateStyle(t, e) {
          const n = e.getModel();
          const r = e.getType();
          const i = this.getOptions(n);
          const o = i.stateStyles;
          const a = i.style;
          const s = void 0 === a ? {} : a;
          const u = n.stateStyles ? n.stateStyles[t] : o && o[t];
          return r === 'combo' ? Object(gt.c)(u) : Object(gt.D)({}, s, u);
        },
        getControlPoints(t) {
          return t.controlPoints;
        },
        getAnchorPoints(t) {
          return this.getOptions(t).anchorPoints;
        },
      };
      const _i = {
        itemType: 'node',
        shapeType: 'single-node',
        labelPosition: 'center',
        offset: dr.nodeLabel.offset,
        getSize(t) {
          let e = t.size || this.getOptions({}).size || dr.defaultNode.size;
          return (
            Object(gt.n)(e) && e.length === 1 && (e = [e[0], e[0]]),
            Object(gt.n)(e) || (e = [e, e]),
            e
          );
        },
        getLabelStyleByPosition(t, e) {
          const n = e.position || this.labelPosition;
          if (n === 'center') return { x: 0, y: 0, text: t.label };
          let r = e.offset;
          Object(gt.t)(r) && (r = this.offset);
          let i;
          const o = this.getSize(t);
          const a = o[0];
          const s = o[1];
          switch (n) {
            case 'top':
              i = { x: 0, y: 0 - s / 2 - r, textBaseline: 'bottom' };
              break;
            case 'bottom':
              i = { x: 0, y: s / 2 + r, textBaseline: 'top' };
              break;
            case 'left':
              i = { x: 0 - a / 2 - r, y: 0, textAlign: 'right' };
              break;
            default:
              i = { x: a / 2 + r, y: 0, textAlign: 'left' };
          }
          return (i.text = t.label), i;
        },
        getLabelBgStyleByPosition(t, e, n, r) {
          if (!t) return {};
          const i = t.getBBox();
          const o = n.style && n.style.background;
          if (!o) return {};
          let a;
          const s = Yr(o.padding);
          const u = i.width + s[1] + s[3];
          const c = i.height + s[0] + s[2];
          let l = n.offset;
          return (
            Object(gt.t)(l) && (l = this.offset),
            (a = { x: i.minX - s[3], y: i.minY - s[0] }),
            (a = Object(h.a)(Object(h.a)(Object(h.a)({}, a), o), { width: u, height: c }))
          );
        },
        drawShape(t, e) {
          const n = this.shapeType;
          const r = this.getShapeStyle(t);
          return e.addShape(n, { attrs: r, draggable: !0, name: 'node-shape' });
        },
        updateLinkPoints(t, e) {
          let n;
          const r = this.getOptions(t).linkPoints;
          const i = e.find((t) => {
            return t.get('className') === 'link-point-left';
          });
          const o = e.find((t) => {
            return t.get('className') === 'link-point-right';
          });
          const a = e.find((t) => {
            return t.get('className') === 'link-point-top';
          });
          const s = e.find((t) => {
            return t.get('className') === 'link-point-bottom';
          });
          i && (n = i.attr()),
            o && !n && (n = o.attr()),
            a && !n && (n = a.attr()),
            s && !n && (n = s.attr()),
            n || (n = r);
          const u = Object(gt.D)({}, n, t.linkPoints);
          const c = u.fill;
          const l = u.stroke;
          const d = u.lineWidth;
          let f = u.size / 2;
          f || (f = u.r);
          const p = t.linkPoints
            ? t.linkPoints
            : { left: void 0, right: void 0, top: void 0, bottom: void 0 };
          const g = p.left;
          const y = p.right;
          const v = p.top;
          const m = p.bottom;
          const b = this.getSize(t);
          const x = b[0];
          const w = b[1];
          const O = { r: f, fill: c, stroke: l, lineWidth: d };
          i
            ? g || void 0 === g
              ? i.attr(Object(h.a)(Object(h.a)({}, O), { x: -x / 2, y: 0 }))
              : i.remove()
            : g &&
              e.addShape('circle', {
                attrs: Object(h.a)(Object(h.a)({}, O), { x: -x / 2, y: 0 }),
                className: 'link-point-left',
                name: 'link-point-left',
                isAnchorPoint: !0,
              }),
            o
              ? (y || void 0 === y || o.remove(),
                o.attr(Object(h.a)(Object(h.a)({}, O), { x: x / 2, y: 0 })))
              : y &&
                e.addShape('circle', {
                  attrs: Object(h.a)(Object(h.a)({}, O), { x: x / 2, y: 0 }),
                  className: 'link-point-right',
                  name: 'link-point-right',
                  isAnchorPoint: !0,
                }),
            a
              ? (v || void 0 === v || a.remove(),
                a.attr(Object(h.a)(Object(h.a)({}, O), { x: 0, y: -w / 2 })))
              : v &&
                e.addShape('circle', {
                  attrs: Object(h.a)(Object(h.a)({}, O), { x: 0, y: -w / 2 }),
                  className: 'link-point-top',
                  name: 'link-point-top',
                  isAnchorPoint: !0,
                }),
            s
              ? m || void 0 === m
                ? s.attr(Object(h.a)(Object(h.a)({}, O), { x: 0, y: w / 2 }))
                : s.remove()
              : m &&
                e.addShape('circle', {
                  attrs: Object(h.a)(Object(h.a)({}, O), { x: 0, y: w / 2 }),
                  className: 'link-point-bottom',
                  name: 'link-point-bottom',
                  isAnchorPoint: !0,
                });
        },
        updateShape(t, e, n, r) {
          e.get('keyShape').attr(Object(h.a)({}, n)),
            this.updateLabel(t, e),
            r && this.updateIcon(t, e);
        },
        updateIcon(t, e) {
          const n = this;
          const r = e.getContainer();
          const i = this.getOptions(t).icon;
          const o = (t.icon ? t.icon : { show: void 0 }).show;
          const a = r.find((t) => {
            return t.get('className') === `${n.type}-icon`;
          });
          if (a)
            if (o || void 0 === o) {
              const s = Object(gt.D)({}, a.attr(), i);
              var u = s.width;
              var c = s.height;
              a.attr(Object(h.a)(Object(h.a)({}, s), { x: -u / 2, y: -c / 2 }));
            } else a.remove();
          else if (o) {
            (u = i.width), (c = i.height);
            r.addShape('image', {
              attrs: Object(h.a)(Object(h.a)({}, i), { x: -u / 2, y: -c / 2 }),
              className: `${this.type}-icon`,
              name: `${this.type}-icon`,
            });
            const l = r.find((t) => {
              return t.get('className') === 'node-label';
            });
            l && l.toFront();
          }
        },
      };
      const Yi = Object(h.a)(Object(h.a)({}, Di), _i);
      ti.registerNode('single-node', Yi);
      const Ri = {
        itemType: 'edge',
        labelPosition: 'center',
        refX: 0,
        refY: 0,
        labelAutoRotate: !1,
        options: {
          size: dr.defaultEdge.size,
          style: {
            x: 0,
            y: 0,
            stroke: dr.defaultEdge.style.stroke,
            lineAppendWidth: dr.defaultEdge.style.lineAppendWidth,
          },
          labelCfg: {
            style: { fill: dr.edgeLabel.style.fill, fontSize: dr.edgeLabel.style.fontSize },
          },
          stateStyles: Object(h.a)({}, dr.edgeStateStyles),
        },
        getPath(t) {
          const e = [];
          return (
            Object(gt.f)(t, (t, n) => {
              n === 0 ? e.push(['M', t.x, t.y]) : e.push(['L', t.x, t.y]);
            }),
            e
          );
        },
        getShapeStyle(t) {
          const e = this.options.style;
          const n = { stroke: t.color };
          const r = Object(gt.D)({}, e, n, t.style);
          const i = t.size || dr.defaultEdge.size;
          const o = (t = this.getPathPoints(t)).startPoint;
          const a = t.endPoint;
          const s = this.getControlPoints(t);
          let u = [o];
          s && (u = u.concat(s)), u.push(a);
          const c = this.getPath(u);
          return Object(gt.D)(
            {},
            dr.defaultEdge.style,
            { stroke: dr.defaultEdge.color, lineWidth: i, path: c },
            r,
          );
        },
        updateShapeStyle(t, e) {
          const n = e.getContainer();
          const r = { stroke: t.color };
          const i =
            n.find((t) => {
              return t.get('className') === 'edge-shape';
            }) || e.getKeyShape();
          const o = t.size;
          const a = (t = this.getPathPoints(t)).startPoint;
          const s = t.endPoint;
          const u = this.getControlPoints(t);
          let c = [a];
          u && (c = c.concat(u)), c.push(s);
          const h = i.attr();
          const l = Object(gt.D)({}, r, h, t.style);
          const d = t.sourceNode;
          const f = t.targetNode;
          let p = { radius: l.radius };
          u || (p = { source: d, target: f, offset: l.offset, radius: l.radius }),
            h.endArrow && !1 === l.endArrow && (t.style.endArrow = { path: '' }),
            h.startArrow && !1 === l.startArrow && (t.style.startArrow = { path: '' });
          const g = this.getPath(c, p);
          const y = Object(gt.D)(r, i.attr(), { lineWidth: o, path: g }, t.style);
          i && i.attr(y);
        },
        getLabelStyleByPosition(t, e, n) {
          let r;
          const i = e.position || this.labelPosition;
          const o = {};
          const a =
            n &&
            n.find((t) => {
              return t.get('className') === 'edge-shape';
            });
          r = i === 'start' ? 0 : i === 'end' ? 1 : 0.5;
          let s;
          const u = e.refX || this.refX;
          const c = e.refY || this.refY;
          if (t.startPoint.x === t.endPoint.x && t.startPoint.y === t.endPoint.y)
            return (o.x = t.startPoint.x + u), (o.y = t.startPoint.y + c), (o.text = t.label), o;
          s = Object(gt.t)(e.autoRotate) ? this.labelAutoRotate : e.autoRotate;
          const h = wr(a, r, u, c, s);
          return (
            (o.x = h.x),
            (o.y = h.y),
            (o.rotate = h.rotate),
            (o.textAlign = this._getTextAlign(i, h.angle)),
            (o.text = t.label),
            o
          );
        },
        getLabelBgStyleByPosition(t, e, n, r) {
          if (!t) return {};
          const i = t.getBBox();
          const o = n.style && n.style.background;
          if (!o) return {};
          let a;
          const s = o.padding;
          const u = i.width + s[1] + s[3];
          const c = i.height + s[0] + s[2];
          const l = n.position || this.labelPosition;
          const d = Object(h.a)(Object(h.a)({}, o), {
            width: u,
            height: c,
            x: i.minX - s[2],
            y: i.minY - s[0],
            rotate: 0,
          });
          a = Object(gt.t)(n.autoRotate) ? this.labelAutoRotate : n.autoRotate;
          let f;
          const p =
            r &&
            r.find((t) => {
              return t.get('className') === 'edge-shape';
            });
          f = l === 'start' ? 0 : l === 'end' ? 1 : 0.5;
          const g = n.refX || this.refX;
          const y = n.refY || this.refY;
          if (e.startPoint.x === e.endPoint.x && e.startPoint.y === e.endPoint.y)
            return (d.x = e.startPoint.x + g - u / 2), (d.y = e.startPoint.y + y - c / 2), d;
          let v = wr(p, f, g - u / 2, y + c / 2, a);
          const m = v.angle;
          return (
            m > 0.5 * Math.PI && m < 1.5 * Math.PI && (v = wr(p, f, g + u / 2, y + c / 2, a)),
            a && ((d.x = v.x), (d.y = v.y)),
            (d.rotate = v.rotate),
            d
          );
        },
        _getTextAlign(t, e) {
          let n = 'center';
          return e
            ? ((e %= 2 * Math.PI),
              t !== 'center' &&
                (n =
                  (e >= 0 && e <= Math.PI / 2) || (e >= 1.5 * Math.PI && e < 2 * Math.PI)
                    ? t
                    : (function (t) {
                        let e = t;
                        return t === 'start' ? (e = 'end') : t === 'end' && (e = 'start'), e;
                      })(t)),
              n)
            : t;
        },
        getControlPoints(t) {
          return t.controlPoints;
        },
        getPathPoints(t) {
          return t;
        },
        drawShape(t, e) {
          const n = this.getShapeStyle(t);
          return e.addShape('path', { className: 'edge-shape', name: 'edge-shape', attrs: n });
        },
        drawLabel(t, e) {
          let n;
          const r = this.options.labelCfg;
          n =
            (typeof window !== 'undefined' &&
              void 0 !== window.getComputedStyle &&
              window.getComputedStyle(document.body, null).getPropertyValue('font-family')) ||
            'Arial, sans-serif';
          const i = Object(gt.e)({ fontFamily: n }, r, t.labelCfg);
          const o = this.getLabelStyle(t, i, e);
          const a = o.rotate;
          delete o.rotate;
          const s = e.addShape('text', { attrs: o, name: 'text-shape' });
          if ((a && s.rotateAtStart(a), o.background)) {
            const u = this.drawLabelBg(t, e, s);
            const c = `${this.itemType}-label-bg`;
            u.set('classname', c), s.toFront();
          }
          return s;
        },
        drawLabelBg(t, e, n) {
          const r = this.options.labelCfg;
          const i = Object(gt.e)({}, r, t.labelCfg);
          const o = this.getLabelStyle(t, i, e).rotate;
          const a = this.getLabelBgStyleByPosition(n, t, i, e);
          delete a.rotate;
          const s = e.addShape('rect', { name: 'text-bg-shape', attrs: a });
          return o && s.rotateAtStart(o), s;
        },
      };
      const Fi = Object(h.a)(Object(h.a)({}, Di), Ri);
      ti.registerEdge('single-edge', Fi),
        ti.registerEdge('line', { getControlPoints() {} }, 'single-edge'),
        ti.registerEdge(
          'spline',
          {
            getPath(t) {
              return hi(t);
            },
          },
          'single-edge',
        ),
        ti.registerEdge(
          'arc',
          {
            curveOffset: 20,
            clockwise: 1,
            getControlPoints(t) {
              let e;
              let n;
              const r = t.startPoint;
              const i = t.endPoint;
              const o = (r.x + i.x) / 2;
              const a = (r.y + i.y) / 2;
              if (void 0 !== t.controlPoints) {
                if (
                  ((n = t.controlPoints[0]),
                  (e = Tn(r, n, i)),
                  r.x <= i.x && r.y > i.y
                    ? (this.clockwise = e.x > n.x ? 0 : 1)
                    : r.x <= i.x && r.y < i.y
                    ? (this.clockwise = e.x > n.x ? 1 : 0)
                    : r.x > i.x && r.y <= i.y
                    ? (this.clockwise = e.y < n.y ? 0 : 1)
                    : (this.clockwise = e.y < n.y ? 1 : 0),
                  (n.x - r.x) / (n.y - r.y) == (i.x - r.x) / (i.y - r.y))
                )
                  return [];
              } else {
                void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                  Object(gt.n)(t.curveOffset) && (t.curveOffset = t.curveOffset[0]),
                  t.curveOffset < 0 ? (this.clockwise = 0) : (this.clockwise = 1);
                const s = { x: i.x - r.x, y: i.y - r.y };
                const u = Math.atan2(s.y, s.x);
                (n = {
                  x: t.curveOffset * Math.cos(-Math.PI / 2 + u) + o,
                  y: t.curveOffset * Math.sin(-Math.PI / 2 + u) + a,
                }),
                  (e = Tn(r, n, i));
              }
              const c = In(r, e);
              return [{ x: c, y: c }];
            },
            getPath(t) {
              const e = [];
              return (
                e.push(['M', t[0].x, t[0].y]),
                t.length === 2
                  ? e.push(['L', t[1].x, t[1].y])
                  : e.push(['A', t[1].x, t[1].y, 0, 0, this.clockwise, t[2].x, t[2].y]),
                e
              );
            },
          },
          'single-edge',
        ),
        ti.registerEdge(
          'quadratic',
          {
            curvePosition: 0.5,
            curveOffset: -20,
            getControlPoints(t) {
              let e = t.controlPoints;
              if (!e || !e.length) {
                const n = t.startPoint;
                const r = t.endPoint;
                void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                  void 0 === t.curvePosition && (t.curvePosition = this.curvePosition),
                  Object(gt.n)(this.curveOffset) && (t.curveOffset = t.curveOffset[0]),
                  Object(gt.n)(this.curvePosition) && (t.curvePosition = t.curveOffset[0]),
                  (e = [li(n, r, t.curvePosition, t.curveOffset)]);
              }
              return e;
            },
            getPath(t) {
              const e = [];
              return (
                e.push(['M', t[0].x, t[0].y]), e.push(['Q', t[1].x, t[1].y, t[2].x, t[2].y]), e
              );
            },
          },
          'single-edge',
        ),
        ti.registerEdge(
          'cubic',
          {
            curvePosition: [0.5, 0.5],
            curveOffset: [-20, 20],
            getControlPoints(t) {
              let e = t.controlPoints;
              if (
                (void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                void 0 === t.curvePosition && (t.curvePosition = this.curvePosition),
                Object(gt.u)(t.curveOffset) && (t.curveOffset = [t.curveOffset, -t.curveOffset]),
                Object(gt.u)(t.curvePosition) &&
                  (t.curvePosition = [t.curvePosition, 1 - t.curvePosition]),
                !e || !e.length || e.length < 2)
              ) {
                const n = t.startPoint;
                const r = t.endPoint;
                e = [
                  li(n, r, t.curvePosition[0], t.curveOffset[0]),
                  li(n, r, t.curvePosition[1], t.curveOffset[1]),
                ];
              }
              return e;
            },
            getPath(t) {
              const e = [];
              return (
                e.push(['M', t[0].x, t[0].y]),
                e.push(['C', t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]),
                e
              );
            },
          },
          'single-edge',
        ),
        ti.registerEdge(
          'cubic-vertical',
          {
            curvePosition: [0.5, 0.5],
            minCurveOffset: [0, 0],
            curveOffset: void 0,
            getControlPoints(t) {
              const e = t.startPoint;
              const n = t.endPoint;
              void 0 === t.curvePosition && (t.curvePosition = this.curvePosition),
                void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                void 0 === t.minCurveOffset && (t.minCurveOffset = this.minCurveOffset),
                Object(gt.u)(t.curveOffset) && (t.curveOffset = [t.curveOffset, -t.curveOffset]),
                Object(gt.u)(t.minCurveOffset) &&
                  (t.minCurveOffset = [t.minCurveOffset, -t.minCurveOffset]),
                Object(gt.u)(t.curvePosition) &&
                  (t.curvePosition = [t.curvePosition, 1 - t.curvePosition]);
              const r = n.y - e.y;
              let i = [0, 0];
              return (
                t.curveOffset
                  ? (i = t.curveOffset)
                  : Math.abs(r) < Math.abs(t.minCurveOffset[0]) && (i = t.minCurveOffset),
                [
                  { x: e.x, y: e.y + r * this.curvePosition[0] + i[0] },
                  { x: n.x, y: n.y - r * this.curvePosition[1] + i[1] },
                ]
              );
            },
          },
          'cubic',
        ),
        ti.registerEdge(
          'cubic-horizontal',
          {
            curvePosition: [0.5, 0.5],
            minCurveOffset: [0, 0],
            curveOffset: void 0,
            getControlPoints(t) {
              const e = t.startPoint;
              const n = t.endPoint;
              void 0 === t.curvePosition && (t.curvePosition = this.curvePosition),
                void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                void 0 === t.minCurveOffset && (t.minCurveOffset = this.minCurveOffset),
                Object(gt.u)(t.curveOffset) && (t.curveOffset = [t.curveOffset, -t.curveOffset]),
                Object(gt.u)(t.minCurveOffset) &&
                  (t.minCurveOffset = [t.minCurveOffset, -t.minCurveOffset]),
                Object(gt.u)(t.curvePosition) &&
                  (t.curvePosition = [t.curvePosition, 1 - t.curvePosition]);
              const r = n.x - e.x;
              let i = [0, 0];
              return (
                t.curveOffset
                  ? (i = t.curveOffset)
                  : Math.abs(r) < Math.abs(t.minCurveOffset[0]) && (i = t.minCurveOffset),
                [
                  { x: e.x + r * this.curvePosition[0] + i[0], y: e.y },
                  { x: n.x - r * this.curvePosition[1] + i[1], y: n.y },
                ]
              );
            },
          },
          'cubic',
        ),
        ti.registerEdge(
          'loop',
          {
            getPathPoints(t) {
              return xr(t);
            },
            getControlPoints(t) {
              return t.controlPoints;
            },
            afterDraw(t) {
              t.controlPoints = void 0;
            },
            afterUpdate(t) {
              t.controlPoints = void 0;
            },
          },
          'cubic',
        );
      const Xi = {
        itemType: 'combo',
        shapeType: 'single-combo',
        labelPosition: 'top',
        refX: dr.comboLabel.refX,
        refY: dr.comboLabel.refY,
        options: {
          style: {
            stroke: dr.defaultCombo.style.stroke,
            fill: dr.defaultCombo.style.fill,
            lineWidth: dr.defaultCombo.style.lineWidth,
          },
          labelCfg: {
            style: { fill: dr.comboLabel.style.fill, fontSize: dr.comboLabel.style.fontSize },
          },
          stateStyles: Object(h.a)({}, dr.comboStateStyles),
        },
        getSize(t) {
          let e = Object(gt.c)(t.size || this.options.size || dr.defaultCombo.size);
          return (
            Object(gt.n)(e) && e.length === 1 && (e = [e[0], e[0]]),
            Object(gt.n)(e) || (e = [e, e]),
            e
          );
        },
        getLabelStyleByPosition(t, e) {
          const n = e.position || this.labelPosition;
          const r = t.style;
          let i = t.padding || this.options.padding;
          Object(gt.n)(i) && (i = i[0]);
          let o = e.refX;
          let a = e.refY;
          Object(gt.t)(o) && (o = this.refX), Object(gt.t)(a) && (a = this.refY);
          let s;
          const u = this.getSize(t);
          const c = (Math.max(r.r, u[0] / 2) || u[0] / 2) + i;
          switch (n) {
            case 'top':
              s = { x: 0, y: -c - a, textBaseline: 'bottom', textAlign: 'center' };
              break;
            case 'bottom':
              s = { x: 0, y: c + a, textBaseline: 'bottom', textAlign: 'center' };
              break;
            case 'left':
              s = { x: -c + o, y: 0, textAlign: 'left' };
              break;
            case 'center':
              s = { x: 0, y: 0, text: t.label, textAlign: 'center' };
              break;
            default:
              s = { x: c + o, y: 0, textAlign: 'right' };
          }
          return (s.text = t.label), s;
        },
        drawShape(t, e) {
          const n = this.shapeType;
          const r = this.getShapeStyle(t);
          return e.addShape(n, { attrs: r, draggable: !0, name: 'combo-shape' });
        },
        updateShape(t, e, n) {
          const r = e.get('keyShape');
          (void 0 === t.animate ? this.options.animate : t.animate) && r.animate
            ? r.animate(n, { duration: 200, easing: 'easeLinear' })
            : r.attr(Object(h.a)({}, n)),
            this.updateLabel(t, e);
        },
      };
      const zi = Object(h.a)(Object(h.a)({}, Di), Xi);
      ti.registerCombo('single-combo', zi),
        ti.registerCombo(
          'circle',
          {
            options: {
              size: [dr.defaultCombo.size[0], dr.defaultCombo.size[0]],
              padding: dr.defaultCombo.padding[0],
              animate: !0,
              style: {
                stroke: dr.defaultCombo.style.stroke,
                fill: dr.defaultCombo.style.fill,
                lineWidth: dr.defaultCombo.style.lineWidth,
              },
              labelCfg: {
                style: { fill: dr.comboLabel.style.fill, fontSize: dr.comboLabel.style.fontSize },
                refX: 0,
                refY: 0,
              },
              stateStyles: Object(h.a)({}, dr.comboStateStyles),
            },
            shapeType: 'circle',
            labelPosition: 'top',
            drawShape(t, e) {
              const n = this.getShapeStyle(t);
              return (
                delete n.height,
                delete n.width,
                e.addShape('circle', {
                  attrs: n,
                  className: 'circle-combo',
                  name: 'circle-combo',
                  draggable: !0,
                })
              );
            },
            getShapeStyle(t) {
              const e = this.options.style;
              let n = t.padding || this.options.padding;
              Object(gt.n)(n) && (n = n[0]);
              let r;
              const i = { stroke: t.color };
              const o = Object(gt.D)({}, e, i, t.style);
              if (t.fixSize) r = Object(gt.u)(t.fixSize) ? t.fixSize : t.fixSize[0];
              else {
                const a = this.getSize(t);
                r =
                  !Object(gt.u)(o.r) || isNaN(o.r)
                    ? a[0] / 2 || dr.defaultCombo.style.r
                    : Math.max(o.r, a[0] / 2) || a[0] / 2;
              }
              o.r = r + n;
              const s = Object(h.a)({ x: 0, y: 0 }, o);
              return t.style ? (t.style.r = r) : (t.style = { r }), s;
            },
            update(t, e) {
              const n = this.getSize(t);
              let r = t.padding || this.options.padding;
              Object(gt.n)(r) && (r = r[0]);
              let i;
              const o = Object(gt.c)(t.style);
              (i = t.fixSize
                ? Object(gt.u)(t.fixSize)
                  ? t.fixSize
                  : t.fixSize[0]
                : Math.max(o.r, n[0] / 2) || n[0] / 2),
                (o.r = i + r);
              const a = e.get('sizeCache');
              a && (a.r = o.r);
              const s = { stroke: t.color };
              const u = e.get('keyShape');
              const c = Object(gt.D)({}, u.attr(), s, o);
              t.style ? (t.style.r = i) : (t.style = { r: i }), this.updateShape(t, e, c, !0);
            },
          },
          'single-combo',
        ),
        ti.registerCombo(
          'rect',
          {
            options: {
              size: [40, 5],
              padding: [25, 20, 15, 20],
              animate: !0,
              style: {
                radius: 0,
                stroke: dr.defaultCombo.style.stroke,
                fill: dr.defaultCombo.style.fill,
                lineWidth: dr.defaultCombo.style.lineWidth,
              },
              labelCfg: {
                style: { fill: dr.comboLabel.style.fill, fontSize: dr.comboLabel.style.fontSize },
              },
              anchorPoints: [
                [0, 0.5],
                [1, 0.5],
              ],
              stateStyles: Object(h.a)({}, dr.comboStateStyles),
            },
            shapeType: 'rect',
            labelPosition: 'top',
            drawShape(t, e) {
              const n = this.getShapeStyle(t);
              return e.addShape('rect', {
                attrs: n,
                className: 'rect-combo',
                name: 'rect-combo',
                draggable: !0,
              });
            },
            getLabelStyleByPosition(t, e) {
              const n = e.position || this.labelPosition;
              const r = t.style;
              let i = t.padding || this.options.padding;
              Object(gt.u)(i) && (i = [i, i, i, i]);
              let o = e.refX;
              let a = e.refY;
              Object(gt.t)(o) && (o = this.refX), Object(gt.t)(a) && (a = this.refY);
              let s;
              const u = r.width / 2 + i[3];
              const c = r.height / 2 + i[0];
              switch (n) {
                case 'top':
                  s = { x: 0 - u + o, y: 0 - c + a, textBaseline: 'top', textAlign: 'left' };
                  break;
                case 'bottom':
                  s = { x: 0, y: c + a, textBaseline: 'bottom', textAlign: 'center' };
                  break;
                case 'left':
                  s = { x: 0 - u + a, y: 0, textAlign: 'left' };
                  break;
                case 'center':
                  s = { x: 0, y: 0, text: t.label, textAlign: 'center' };
                  break;
                default:
                  s = { x: u + o, y: 0, textAlign: 'right' };
              }
              return (s.text = t.label), s;
            },
            getShapeStyle(t) {
              const e = this.options.style;
              let n = t.padding || this.options.padding;
              Object(gt.u)(n) && (n = [n, n, n, n]);
              let r;
              let i;
              const o = { stroke: t.color };
              const a = Object(gt.D)({}, e, o, t.style);
              const s = this.getSize(t);
              const u = t.collapsed && t.fixCollapseSize ? t.fixCollapseSize : t.fixSize;
              u
                ? Object(gt.u)(u)
                  ? ((r = u), (i = u))
                  : ((r = u[0]), (i = u[1]))
                : ((r =
                    !Object(gt.u)(a.width) || isNaN(a.width)
                      ? s[0] || dr.defaultCombo.style.width
                      : Math.max(a.width, s[0]) || s[0]),
                  (i =
                    !Object(gt.u)(a.height) || isNaN(a.height)
                      ? s[1] || dr.defaultCombo.style.height
                      : Math.max(a.height, s[1]) || s[1]));
              const c = -r / 2 - n[3];
              const l = -i / 2 - n[0];
              (a.width = r + n[1] + n[3]), (a.height = i + n[0] + n[2]);
              const d = Object(h.a)({ x: c, y: l }, a);
              return (
                t.style
                  ? ((t.style.width = r), (t.style.height = i))
                  : (t.style = { width: r, height: i }),
                d
              );
            },
            update(t, e) {
              const n = this.getSize(t);
              let r = t.padding || this.options.padding;
              Object(gt.u)(r) && (r = [r, r, r, r]);
              let i;
              let o;
              const a = Object(gt.c)(t.style);
              const s = t.collapsed && t.fixCollapseSize ? t.fixCollapseSize : t.fixSize;
              s
                ? Object(gt.u)(s)
                  ? ((i = s), (o = s))
                  : ((i = s[0]), (o = s[1]))
                : ((i = Math.max(a.width, n[0]) || n[0]), (o = Math.max(a.height, n[1]) || n[1])),
                (a.width = i + r[1] + r[3]),
                (a.height = o + r[0] + r[2]);
              const u = e.get('sizeCache');
              u && ((u.width = a.width), (u.height = a.height)),
                (a.x = -i / 2 - r[3]),
                (a.y = -o / 2 - r[0]);
              const c = { stroke: t.color };
              const h = e.get('keyShape');
              const l = Object(gt.D)({}, h.attr(), c, a);
              t.style
                ? ((t.style.width = i), (t.style.height = o))
                : (t.style = { width: i, height: o }),
                this.updateShape(t, e, l, !1);
            },
            updateShape(t, e, n) {
              const r = e.get('keyShape');
              (void 0 === t.animate ? this.options.animate : t.animate) && r.animate
                ? r.animate(n, { duration: 200, easing: 'easeLinear' })
                : r.attr(Object(h.a)({}, n)),
                this.updateLabel(t, e);
            },
          },
          'single-combo',
        ),
        ti.registerNode(
          'simple-circle',
          {
            options: {
              size: dr.defaultNode.size,
              style: {
                x: 0,
                y: 0,
                stroke: dr.defaultNode.style.stroke,
                fill: dr.defaultNode.style.fill,
                lineWidth: dr.defaultNode.style.lineWidth,
              },
              labelCfg: {
                style: { fill: dr.nodeLabel.style.fill, fontSize: dr.nodeLabel.style.fontSize },
              },
              stateStyles: Object(h.a)({}, dr.nodeStateStyles),
            },
            shapeType: 'simple-circle',
            labelPosition: 'center',
            drawShape(t, e) {
              const n = this.getShapeStyle(t);
              return e.addShape('circle', {
                attrs: n,
                className: `${this.type}-keyShape`,
                draggable: !0,
              });
            },
            getShapeStyle(t) {
              const e = this.getOptions(t).style;
              const n = { stroke: t.color };
              const r = Object(gt.e)({}, e, n);
              const i = this.getSize(t)[0] / 2;
              return Object(h.a)({ x: 0, y: 0, r: i }, r);
            },
            update(t, e) {
              const n = this.getSize(t);
              const r = { stroke: t.color, r: n[0] / 2 };
              const i = e.get('keyShape');
              const o = Object(gt.e)({}, i.attr(), r, t.style);
              this.updateShape(t, e, o, !0);
            },
          },
          'single-node',
        ),
        ti.registerNode(
          'simple-rect',
          {
            options: {
              size: [100, 30],
              style: {
                radius: 0,
                stroke: dr.defaultNode.style.stroke,
                fill: dr.defaultNode.style.fill,
                lineWidth: dr.defaultNode.style.lineWidth,
              },
              labelCfg: {
                style: { fill: dr.nodeLabel.style.fill, fontSize: dr.nodeLabel.style.fontSize },
              },
              anchorPoints: [
                [0, 0.5],
                [1, 0.5],
              ],
              stateStyles: Object(h.a)({}, dr.nodeStateStyles),
            },
            shapeType: 'simple-rect',
            labelPosition: 'center',
            drawShape(t, e) {
              const n = this.getShapeStyle(t);
              return e.addShape('rect', {
                attrs: n,
                className: `${this.type}-keyShape`,
                name: `${this.type}-keyShape`,
                draggable: !0,
              });
            },
            getShapeStyle(t) {
              const e = this.getOptions(t).style;
              const n = { stroke: t.color };
              const r = Object(gt.D)({}, e, n);
              const i = this.getSize(t);
              const o = r.width || i[0];
              const a = r.height || i[1];
              return Object(h.a)({ x: -o / 2, y: -a / 2, width: o, height: a }, r);
            },
            update(t, e) {
              e.getContainer();
              const n = this.getOptions({}).style;
              const r = this.getSize(t);
              const i = e.get('keyShape');
              t.size ||
                ((r[0] = i.attr('width') || n.width), (r[1] = i.attr('height') || n.height));
              const o = { stroke: t.color, x: -r[0] / 2, y: -r[1] / 2, width: r[0], height: r[1] };
              let a = Object(gt.D)({}, n, i.attr(), o);
              (a = Object(gt.D)(a, t.style)), this.updateShape(t, e, a, !1);
            },
          },
          'single-node',
        ),
        ti.registerNode(
          'image',
          {
            options: {
              img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*eD7nT6tmYgAAAAAAAAAAAABkARQnAQ',
              size: 200,
              clipCfg: {
                show: !1,
                type: 'circle',
                r: 50,
                rx: 50,
                ry: 35,
                width: 50,
                height: 35,
                points: [
                  [30, 12],
                  [12, 30],
                  [30, 48],
                  [48, 30],
                ],
                path: [
                  ['M', 25, 25],
                  ['L', 50, 25],
                  ['A', 12.5, 12.5, 0, 1, 1, 50, 50],
                  ['A', 12.5, 12.5, 0, 1, 0, 50, 50],
                  ['L', 25, 75],
                  ['Z'],
                ],
                x: 0,
                y: 0,
              },
            },
            shapeType: 'image',
            labelPosition: 'bottom',
            drawShape(t, e) {
              const n = this.shapeType;
              const r = this.getShapeStyle(t);
              delete r.fill;
              const i = e.addShape(n, {
                attrs: r,
                className: `${this.type}-keyShape`,
                name: `${this.type}-keyShape`,
                draggable: !0,
              });
              return this.drawClip(t, i), i;
            },
            drawClip(t, e) {
              const n = this.getOptions(t).clipCfg;
              if (n.show) {
                const r = n.type;
                const i = n.x;
                const o = n.y;
                const a = n.style;
                if (r === 'circle') {
                  const s = n.r;
                  e.setClip({ type: 'circle', attrs: Object(h.a)({ r: s, x: i, y: o }, a) });
                } else if (r === 'rect') {
                  const u = n.width;
                  const c = n.height;
                  const l = i - u / 2;
                  const d = o - c / 2;
                  e.setClip({
                    type: 'rect',
                    attrs: Object(h.a)({ x: l, y: d, width: u, height: c }, a),
                  });
                } else if (r === 'ellipse') {
                  const f = n.rx;
                  const p = n.ry;
                  e.setClip({
                    type: 'ellipse',
                    attrs: Object(h.a)({ x: i, y: o, rx: f, ry: p }, a),
                  });
                } else if (r === 'polygon') {
                  const g = n.points;
                  e.setClip({ type: 'polygon', attrs: Object(h.a)({ points: g }, a) });
                } else if (r === 'path') {
                  const y = n.path;
                  e.setClip({ type: 'path', attrs: Object(h.a)({ path: y }, a) });
                }
              }
            },
            getShapeStyle(t) {
              const e = this.getOptions(t).style;
              const n = this.getSize(t);
              const r = this.getOptions(t).img;
              let i = n[0];
              let o = n[1];
              return (
                e && ((i = e.width || n[0]), (o = e.height || n[1])),
                Object(h.a)({ x: -i / 2, y: -o / 2, width: i, height: o, img: r }, e)
              );
            },
            updateShapeStyle(t, e) {
              const n = e.getContainer();
              const r = `${this.itemType}-shape`;
              const i =
                n.find((t) => {
                  return t.get('className') === r;
                }) || e.getKeyShape();
              const o = this.getShapeStyle(t);
              i && i.attr(o);
            },
          },
          'single-node',
        );
      let Wi;
      const Gi = ti;
      var qi = [
        '#5F95FF',
        '#61DDAA',
        '#65789B',
        '#F6BD16',
        '#7262FD',
        '#78D3F8',
        '#9661BC',
        '#F6903D',
        '#008685',
        '#F08BB4',
      ];
      const Hi = sn.a.transform;
      const Vi = Object(h.a)(
        Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)({}, a), o), s), i), u),
        { transform: Hi, mat3: sn.b },
      );
      !(function () {
        function t(t) {
          (this.graph = t),
            (this.layoutCfg = t.get('layout') || {}),
            (this.layoutType = this.getLayoutType()),
            (this.layoutMethods = []),
            this.initLayout();
        }
        (t.prototype.initLayout = function () {}),
          (t.prototype.getLayoutType = function () {
            return this.getLayoutCfgType(this.layoutCfg);
          }),
          (t.prototype.getLayoutCfgType = function (t) {
            const e = t.type;
            if (e) return e;
            const n = t.pipes;
            return Array.isArray(n)
              ? n.map((t) => {
                  return (t == null ? void 0 : t.type) || '';
                })
              : null;
          }),
          (t.prototype.isLayoutTypeSame = function (t) {
            const e = this.getLayoutCfgType(t);
            return Array.isArray(this.layoutType)
              ? this.layoutType.every((t, n) => {
                  return t === e[n];
                })
              : (t == null ? void 0 : t.type) === this.layoutType;
          }),
          (t.prototype.refreshLayout = function () {
            const t = this.graph;
            t && (t.get('animate') ? t.positionsAnimate() : t.refreshPositions());
          }),
          (t.prototype.changeLayout = function (t) {
            (this.layoutCfg = t), this.destoryLayoutMethods(), this.layout();
          }),
          (t.prototype.changeData = function () {
            this.destoryLayoutMethods(), this.layout();
          }),
          (t.prototype.destoryLayoutMethods = function () {
            const t = this.layoutMethods;
            t == null ||
              t.forEach((t) => {
                t.destroy();
              }),
              (this.layoutMethods = []);
          }),
          (t.prototype.destroyLayout = function () {
            const t = this.graph;
            this.destoryLayoutMethods(),
              t.set('layout', void 0),
              (this.layoutCfg = void 0),
              (this.layoutType = void 0),
              (this.layoutMethods = void 0);
          }),
          (t.prototype.setDataFromGraph = function () {
            for (
              var t = [],
                e = [],
                n = [],
                r = [],
                i = [],
                o = [],
                a = this.graph.getNodes(),
                s = this.graph.getEdges(),
                u = this.graph.getCombos(),
                c = a.length,
                h = 0;
              h < c;
              h++
            ) {
              const l = a[h];
              if (l && !l.destroyed) {
                var d = l.getModel();
                l.isVisible() ? t.push(d) : e.push(d);
              }
            }
            const f = s.length;
            for (h = 0; h < f; h++) {
              const p = s[h];
              if (p && !p.destroyed) {
                d = p.getModel();
                p.isVisible() ? (d.isComboEdge ? i.push(d) : n.push(d)) : r.push(d);
              }
            }
            const g = u.length;
            for (h = 0; h < g; h++) {
              const y = u[h];
              if (!y.destroyed) {
                d = y.getModel();
                y.isVisible() ? o.push(d) : r.push(d);
              }
            }
            return {
              nodes: t,
              hiddenNodes: e,
              edges: n,
              hiddenEdges: r,
              combos: o,
              hiddenCombos: [],
              comboEdges: i,
            };
          }),
          (t.prototype.reLayoutMethod = function (t, e) {
            const n = this;
            return new Promise((r, i) => {
              const o = n.graph;
              const a = e == null ? void 0 : e.type;
              (e.onLayoutEnd = function () {
                o.emit('aftersublayout', { type: a }), r();
              }),
                t.init(n.data),
                a === 'force' && ((t.ticking = !1), t.forceSimulation.stop()),
                o.emit('beforesublayout', { type: a }),
                t.execute(),
                t.isCustomLayout && e.onLayoutEnd && e.onLayoutEnd();
            });
          }),
          (t.prototype.relayout = function (t) {
            const e = this;
            const n = this.graph;
            const r = this.layoutMethods;
            const i = this.layoutCfg;
            if (t) {
              this.data = this.setDataFromGraph();
              const o = this.data.nodes;
              if (!o) return !1;
              this.initPositions(i.center, o);
            }
            n.emit('beforelayout');
            let a = Promise.resolve();
            r == null ||
              r.forEach((t, n) => {
                const r = i[n];
                a = a.then(() => {
                  return e.reLayoutMethod(t, r);
                });
              }),
              a
                .then(() => {
                  i.onAllLayoutEnd && i.onAllLayoutEnd();
                })
                .catch((t) => {
                  console.warn('relayout failed', t);
                });
          }),
          (t.prototype.filterLayoutData = function (t, e) {
            let n;
            let r;
            const i = t.nodes;
            const o = t.edges;
            const a = Object(h.e)(t, ['nodes', 'edges']);
            if (!i) return t;
            if (
              ((n = Object(gt.s)(e == null ? void 0 : e.nodesFilter)
                ? e.nodesFilter
                : function () {
                    return !0;
                  }),
              Object(gt.s)(e == null ? void 0 : e.edgesFilter))
            )
              r = e.edgesFilter;
            else {
              const s = i.reduce((t, e) => {
                return (t[e.id] = !0), t;
              }, {});
              r = function (t) {
                return s[t.source] && s[t.target];
              };
            }
            return Object(h.a)({ nodes: i.filter(n), edges: o.filter(r) }, a);
          }),
          (t.prototype.getLayoutBBox = function (t) {
            const e = this.graph;
            const n = Object(gt.k)(e.getNodes(), (t) => {
              return t.getModel().layoutOrder;
            });
            const r = Object.values(n).map((t) => {
              const e = zr(t);
              return (e.size = [e.width, e.height]), e;
            });
            return { groupNodes: Object.values(Object(gt.k)(t, 'layoutOrder')), layoutNodes: r };
          }),
          (t.prototype.layoutAnimate = function () {}),
          (t.prototype.moveToZero = function () {
            const t = this.graph.get('data').nodes;
            if (void 0 !== t[0].x && t[0].x !== null && !Xr(t[0].x)) {
              for (var e = [0, 0], n = t.length, r = 0; r < n; r++) {
                var i = t[r];
                (e[0] += i.x), (e[1] += i.y);
              }
              (e[0] /= t.length), (e[1] /= t.length);
              for (r = 0; r < n; r++) {
                ((i = t[r]).x -= e[0]), (i.y -= e[1]);
              }
            }
          }),
          (t.prototype.initPositions = function (t, e) {
            const n = this.graph;
            if (!e) return !1;
            const r = e ? e.length : 0;
            if (r) {
              const i = 0.85 * n.get('width');
              const o = 0.85 * n.get('height');
              const a = Math.ceil(Math.sqrt(r) * (i / o));
              let s = i / (a - 1);
              let u = o / (Math.ceil(r / a) - 1);
              (isFinite(s) && s) || (s = 0), (isFinite(u) && s) || (u = 0);
              for (var c = t[0] - i / 2, h = t[1] - o / 2, l = !0, d = 0; d < r; d++) {
                const f = e[d];
                Xr(f.x) && ((l = !1), (f.x = (d % a) * s + c)),
                  Xr(f.y) && ((l = !1), (f.y = Math.floor(d / a) * u + h));
              }
              return l;
            }
          }),
          (t.prototype.destroy = function () {
            (this.graph = null), this.destoryLayoutMethods(), (this.destroyed = !0);
          }),
          (t.prototype.onTick = function (t) {
            let e;
            (e = this.layoutMethods) === null ||
              void 0 === e ||
              e.forEach((e) => {
                e == null || e.onTick(t);
              });
          });
      })();
      !(function (t) {
        (t.CLICK = 'click'),
          (t.DBLCLICK = 'dblclick'),
          (t.TAP = 'tap'),
          (t.DBLTAP = 'dbltap'),
          (t.DRAGSTART = 'dragstart'),
          (t.DRAGEND = 'dragend'),
          (t.DRAG = 'drag'),
          (t.DRAGENTER = 'dragenter'),
          (t.DRAGLEAVE = 'dragleave'),
          (t.DRAGOVER = 'dragover'),
          (t.DRAGOUT = 'dragout'),
          (t.DDROP = 'drop'),
          (t.PINCHSTART = 'pinchstart'),
          (t.PINCHMOVE = 'pinchmove'),
          (t.PANSTART = 'panstart'),
          (t.PANMOVE = 'panmove'),
          (t.PANEND = 'panend'),
          (t.PRESS = 'press'),
          (t.ACTION_END = 'actionend'),
          (t.TOUCHSTART = 'touchstart'),
          (t.TOUCHMOVE = 'touchmove'),
          (t.TOUCHEND = 'touchend'),
          (t.CANVAS_TOUCHSTART = 'canvas:touchstart'),
          (t.CANVAS_TOUCHMOVE = 'canvas:touchmove'),
          (t.CANVAS_TOUCHEND = 'canvas:touchend'),
          (t.NODE_TOUCHSTART = 'node:touchstart'),
          (t.NODE_TOUCHMOVE = 'node:touchmove'),
          (t.NODE_TOUCHEND = 'node:touchend'),
          (t.COMBO_TOUCHSTART = 'combo:touchstart'),
          (t.COMBO_TOUCHMOVE = 'combo:touchmove'),
          (t.COMBO_TOUCHEND = 'combo:touchend'),
          (t.EDGE_TOUCHSTART = 'edge:touchstart'),
          (t.EDGE_TOUCHMOVE = 'edge:touchmove'),
          (t.EDGE_TOUCHEND = 'edge:touchend'),
          (t.NODE_CLICK = 'node:click'),
          (t.NODE_DBLCLICK = 'node:dblclick'),
          (t.NODE_DROP = 'node:drop'),
          (t.NODE_DRAGOVER = 'node:dragover'),
          (t.NODE_DRAGENTER = 'node:dragenter'),
          (t.NODE_DRAGLEAVE = 'node:dragleave'),
          (t.NODE_DRAGSTART = 'node:dragstart'),
          (t.NODE_DRAG = 'node:drag'),
          (t.NODE_DRAGEND = 'node:dragend'),
          (t.NODE_TAP = 'node:tap'),
          (t.NODE_DBLTAP = 'node:dbltap'),
          (t.NODE_PANSTART = 'node:panstart'),
          (t.NODE_PANMOVE = 'node:panmove'),
          (t.NODE_PANEND = 'node:panend'),
          (t.NODE_PRESS = 'node:press'),
          (t.COMBO_CLICK = 'combo:click'),
          (t.COMBO_DBLCLICK = 'combo:dblclick'),
          (t.COMBO_DROP = 'combo:drop'),
          (t.COMBO_DRAGOVER = 'combo:dragover'),
          (t.COMBO_DRAGENTER = 'combo:dragenter'),
          (t.COMBO_DRAGLEAVE = 'combo:dragleave'),
          (t.COMBO_DRAGSTART = 'combo:dragstart'),
          (t.COMBO_DRAG = 'combo:drag'),
          (t.COMBO_DRAGEND = 'combo:dragend'),
          (t.COMBO_TAP = 'combo:tap'),
          (t.COMBO_DBLTAP = 'combo:dbltap'),
          (t.COMBO_PANSTART = 'combo:panstart'),
          (t.COMBO_PANMOVE = 'combo:panmove'),
          (t.COMBO_PANEND = 'combo:panend'),
          (t.COMBO_PRESS = 'combo:press'),
          (t.EDGE_CLICK = 'edge:click'),
          (t.EDGE_DBLCLICK = 'edge:dblclick'),
          (t.EDGE_DROP = 'edge:drop'),
          (t.EDGE_DRAGOVER = 'edge:dragover'),
          (t.EDGE_DRAGENTER = 'edge:dragenter'),
          (t.EDGE_DRAGLEAVE = 'edge:dragleave'),
          (t.EDGE_TAP = 'edge:tap'),
          (t.EDGE_DBLTAP = 'edge:dbltap'),
          (t.EDGE_PRESS = 'edge:press'),
          (t.CANVAS_CLICK = 'canvas:click'),
          (t.CANVAS_DBLCLICK = 'canvas:dblclick'),
          (t.CANVAS_DROP = 'canvas:drop'),
          (t.CANVAS_DRAGENTER = 'canvas:dragenter'),
          (t.CANVAS_DRAGLEAVE = 'canvas:dragleave'),
          (t.CANVAS_DRAGSTART = 'canvas:dragstart'),
          (t.CANVAS_DRAG = 'canvas:drag'),
          (t.CANVAS_DRAGEND = 'canvas:dragend'),
          (t.CANVAS_TAP = 'canvas:tap'),
          (t.CANVAS_DBLTAP = 'canvas:dbltap'),
          (t.CANVAS_PANSTART = 'canvas:panstart'),
          (t.CANVAS_PANMOVE = 'canvas:panmove'),
          (t.CANVAS_PANEND = 'canvas:panend'),
          (t.CANVAS_PRESS = 'canvas:press'),
          (t.BEFORERENDER = 'beforerender'),
          (t.AFTERRENDER = 'afterrender'),
          (t.BEFOREADDITEM = 'beforeadditem'),
          (t.AFTERADDITEM = 'afteradditem'),
          (t.BEFOREREMOVEITEM = 'beforeremoveitem'),
          (t.AFTERREMOVEITEM = 'afterremoveitem'),
          (t.BEFOREUPDATEITEM = 'beforeupdateitem'),
          (t.AFTERUPDATEITEM = 'afterupdateitem'),
          (t.BEFOREITEMVISIBILITYCHANGE = 'beforeitemvisibilitychange'),
          (t.AFTERITEMVISIBILITYCHANGE = 'afteritemvisibilitychange'),
          (t.BEFOREITEMSTATECHANGE = 'beforeitemstatechange'),
          (t.AFTERITEMSTATECHANGE = 'afteritemstatechange'),
          (t.BEFOREITEMREFRESH = 'beforeitemrefresh'),
          (t.AFTERITEMREFRESH = 'afteritemrefresh'),
          (t.BEFOREITEMSTATESCLEAR = 'beforeitemstatesclear'),
          (t.AFTERITEMSTATESCLEAR = 'afteritemstatesclear'),
          (t.BEFOREMODECHANGE = 'beforemodechange'),
          (t.AFTERMODECHANGE = 'aftermodechange'),
          (t.BEFORELAYOUT = 'beforelayout'),
          (t.AFTERLAYOUT = 'afterlayout'),
          (t.BEFORECREATEEDGE = 'beforecreateedge'),
          (t.AFTERCREATEEDGE = 'aftercreateedge'),
          (t.BEFOREGRAPHREFRESHPOSITION = 'beforegraphrefreshposition'),
          (t.AFTERGRAPHREFRESHPOSITION = 'aftergraphrefreshposition'),
          (t.BEFOREGRAPHREFRESH = 'beforegraphrefresh'),
          (t.AFTERGRAPHREFRESH = 'aftergraphrefresh'),
          (t.BEFOREANIMATE = 'beforeanimate'),
          (t.AFTERANIMATE = 'afteranimate'),
          (t.BEFOREPAINT = 'beforepaint'),
          (t.AFTERPAINT = 'afterpaint'),
          (t.BEFORECOLLAPSEEXPANDCOMBO = 'beforecollapseexpandcombo'),
          (t.AFTERCOLLAPSEEXPANDCOMBO = 'aftercollapseexpandcombo'),
          (t.GRAPHSTATECHANGE = 'graphstatechange'),
          (t.AFTERACTIVATERELATIONS = 'afteractivaterelations'),
          (t.NODESELECTCHANGE = 'nodeselectchange'),
          (t.TOOLTIPCHANGE = 'tooltipchange'),
          (t.WHEELZOOM = 'wheelzoom'),
          (t.VIEWPORTCHANGE = 'viewportchange'),
          (t.DRAGNODEEND = 'dragnodeend'),
          (t.STACKCHANGE = 'stackchange');
      })(Wi || (Wi = {}));
      Gi.registerNode,
        Gi.registerEdge,
        Gi.registerCombo,
        en.registerBehavior,
        Gi.registerNode,
        Gi.registerEdge,
        Gi.registerCombo,
        en.registerBehavior;
      const Ui = Vi.pointLineDistance;
      const Zi = { stroke: '#FA8C16', lineWidth: 1 };
      var Ki = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              line: Zi,
              itemAlignType: 'center',
              tolerance: 5,
              horizontalLines: {},
              verticalLines: {},
              alignLines: [],
            };
          }),
          (e.prototype.init = function () {}),
          (e.prototype.getEvents = function () {
            return {
              'node:dragstart': 'onDragStart',
              'node:drag': 'onDrag',
              'node:dragend': 'onDragEnd',
            };
          }),
          (e.prototype.onDragStart = function () {
            this.initBoxLine();
          }),
          (e.prototype.onDrag = function (t) {
            const e = t.item;
            const n = (e.get('delegateShape') || e).getBBox();
            const r = e.getModel();
            const i = r.x - n.x;
            const o = r.y - n.y;
            this.show({ x: n.minX + i, y: n.minY + o }, { width: n.width, height: n.height });
          }),
          (e.prototype.onDragEnd = function () {
            this.destory();
          }),
          (e.prototype.initBoxLine = function () {
            const t = this._cfgs;
            const e = t.horizontalLines;
            const n = t.verticalLines;
            const r = t.itemAlignType;
            this.get('graph')
              .getNodes()
              .forEach((t) => {
                const i = t.getBBox();
                const o = t.get('id');
                !0 === r || r === 'horizontal'
                  ? ((e[`${o}tltr`] = [i.minX, i.minY, i.maxX, i.minY, t]),
                    (e[`${o}lcrc`] = [i.minX, i.centerY, i.maxX, i.centerY, t]),
                    (e[`${o}blbr`] = [i.minX, i.maxY, i.maxX, i.maxY, t]))
                  : r === 'center' && (e[`${o}lcrc`] = [i.minX, i.centerY, i.maxX, i.centerY, t]),
                  !0 === r || r === 'vertical'
                    ? ((n[`${o}tlbl`] = [i.minX, i.minY, i.minX, i.maxY, t]),
                      (n[`${o}tcbc`] = [i.centerX, i.minY, i.centerX, i.maxY, t]),
                      (n[`${o}trbr`] = [i.maxX, i.minY, i.maxX, i.maxY, t]))
                    : r === 'center' && (n[`${o}tcbc`] = [i.centerX, i.minY, i.centerX, i.maxY, t]);
              });
          }),
          (e.prototype.show = function (t, e) {
            const n = Object(gt.D)({}, t);
            return this.itemAlign(t, e, n), t;
          }),
          (e.prototype.itemAlign = function (t, e, n) {
            const r = this;
            const i = this._cfgs;
            const o = i.horizontalLines;
            const a = i.verticalLines;
            const s = i.tolerance;
            const u = { x: n.x + e.width / 2, y: n.y };
            const c = { x: n.x + e.width / 2, y: n.y + e.height / 2 };
            const h = { x: n.x + e.width / 2, y: n.y + e.height };
            const l = { x: n.x, y: n.y + e.height / 2 };
            const d = { x: n.x + e.width, y: n.y + e.height / 2 };
            const f = [];
            const p = [];
            let g = null;
            if (
              (this.clearAlignLine(),
              Object(gt.f)(o, (t) => {
                t[4].isVisible &&
                  (f.push(r.getLineDisObject(t, u)),
                  f.push(r.getLineDisObject(t, c)),
                  f.push(r.getLineDisObject(t, h)));
              }),
              Object(gt.f)(a, (t) => {
                t[4].isVisible &&
                  (p.push(r.getLineDisObject(t, l)),
                  p.push(r.getLineDisObject(t, c)),
                  p.push(r.getLineDisObject(t, d)));
              }),
              f.sort((t, e) => {
                return t.dis - e.dis;
              }),
              p.sort((t, e) => {
                return t.dis - e.dis;
              }),
              f.length !== 0 && f[0].dis < s)
            ) {
              (t.y = f[0].line[1] - f[0].point.y + n.y),
                (g = { type: 'item', horizontals: [f[0]] });
              for (var y = 1; y < 3; y++) f[0].dis === f[y].dis && g.horizontals.push(f[y]);
            }
            if (p.length !== 0 && p[0].dis < s) {
              (t.x = p[0].line[0] - p[0].point.x + n.x),
                g ? (g.verticals = [p[0]]) : (g = { type: 'item', verticals: [p[0]] });
              for (y = 1; y < 3; y++) p[0].dis === p[y].dis && g.verticals.push(p[y]);
            }
            g && ((g.bbox = e), this.addAlignLine(g));
          }),
          (e.prototype.addAlignLine = function (t) {
            const e = t.bbox;
            const n = t.type;
            const r = t.horizontals;
            const i = t.verticals;
            const o = this._cfgs;
            const a = o.line;
            const s = o.alignLines;
            const u = this.get('graph').get('group');
            n === 'item' &&
              (r &&
                Object(gt.f)(r, (t) => {
                  let n;
                  let r;
                  const i = t.line;
                  const o = t.point;
                  const c = (i[0] + i[2]) / 2;
                  o.x < c
                    ? ((n = o.x - e.width / 2), (r = Math.max(i[0], i[2])))
                    : ((n = o.x + e.width / 2), (r = Math.min(i[0], i[2])));
                  const h = Object(gt.D)({ x1: n, y1: i[1], x2: r, y2: i[1] }, a);
                  const l = u.addShape('line', { attrs: h, capture: !1 });
                  s.push(l);
                }),
              i &&
                Object(gt.f)(i, (t) => {
                  let n;
                  let r;
                  const i = t.line;
                  const o = t.point;
                  const c = (i[1] + i[3]) / 2;
                  o.y < c
                    ? ((n = o.y - e.height / 2), (r = Math.max(i[1], i[3])))
                    : ((n = o.y + e.height / 2), (r = Math.min(i[1], i[3])));
                  const h = Object(gt.D)({ x1: i[0], y1: n, x2: i[0], y2: r }, a);
                  const l = u.addShape('line', { attrs: h, capture: !1 });
                  s.push(l);
                }));
          }),
          (e.prototype.getLineDisObject = function (t, e) {
            return { line: t, point: e, dis: Ui(t, e) };
          }),
          (e.prototype.getContainer = function () {
            return this.get('container');
          }),
          (e.prototype.clearAlignLine = function () {
            const t = this._cfgs.alignLines;
            Object(gt.f)(t, (t) => {
              t.remove();
            }),
              (t.length = 0);
          }),
          (e.prototype.destory = function () {
            const t = this._cfgs;
            const e = t.horizontalLines;
            const n = t.verticalLines;
            this.get('graph')
              .getNodes()
              .forEach((t) => {
                const r = t.get('id');
                delete e[`${r}tltr`],
                  delete e[`${r}lcrc`],
                  delete e[`${r}blbr`],
                  delete n[`${r}tlbl`],
                  delete n[`${r}tcbc`],
                  delete n[`${r}trbr`];
              }),
              this.clearAlignLine();
          }),
          e
        );
      })(Qe);
      var Qi = (function (t) {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              offsetX: 6,
              offsetY: 6,
              getContent(t) {
                let e;
                let n;
                return `\n          <div class="f6-tooltip-container">\n            <div class='tooltip-type'>类型：${
                  (e = t.item) === null || void 0 === e ? void 0 : e.getType()
                }</div>\n            <div class='tooltip-id'>ID：${
                  (n = t.item) === null || void 0 === n ? void 0 : n.getID()
                }</div>\n          </div>\n        `;
              },
              getCss() {
                return '\n        .f6-tooltip-container {\n          position: absolute;\n          width: 200;\n          border: 1 solid #e2e2e2;\n          border-radius: 4;\n          font-size: 12;\n          color: #545454;\n          background-color: rgba(255, 255, 255, 0.9);\n          padding: 10 8;\n        }\n    \n        .f6-tooltip-container div{\n          height: 20;\n        }\n        \n        .tooltip-type {\n          padding: 0;\n          margin: 0;\n        }\n        .tooltip-id {\n          color: #531dab;\n        }\n      ';
              },
              shouldBegin(t) {
                return !0;
              },
              itemTypes: ['node', 'edge', 'combo'],
              trigger: 'mouseenter',
              fixToNode: void 0,
            };
          }),
          (e.prototype.getEvents = function () {
            return this.get('trigger') === 'click'
              ? {
                  'node:tap': 'onClick',
                  'edge:tap': 'onClick',
                  'combo:tap': 'onClick',
                  'canvas:tap': 'onMouseLeave',
                  afterremoveitem: 'onMouseLeave',
                  contextmenu: 'onMouseLeave',
                  drag: 'onMouseLeave',
                }
              : {
                  'node:press': 'onClick',
                  'edge:press': 'onClick',
                  'combo:press': 'onClick',
                  'canvas:press': 'onMouseLeave',
                  'node:tap': 'onMouseLeave',
                  'edge:tap': 'onMouseLeave',
                  'combo:tap': 'onMouseLeave',
                  'canvas:tap': 'onMouseLeave',
                  afterremoveitem: 'onMouseLeave',
                  contextmenu: 'onMouseLeave',
                  drag: 'onMouseLeave',
                };
          }),
          (e.prototype.onClick = function (t) {
            const e = this.get('itemTypes');
            if (!t.item || !t.item.getType || e.indexOf(t.item.getType()) !== -1) {
              const n = t.item;
              const r = this.get('graph');
              this.currentTarget === n
                ? ((this.currentTarget = null),
                  this.hideTooltip(),
                  r.emit('tooltipchange', { item: t.item, action: 'hide' }))
                : ((this.currentTarget = n),
                  this.showTooltip(t),
                  r.emit('tooltipchange', { item: t.item, action: 'show' }));
            }
          }),
          (e.prototype.onMouseEnter = function (t) {
            const e = this.get('itemTypes');
            if (!t.item || !t.item.getType || e.indexOf(t.item.getType()) !== -1) {
              const n = t.item;
              const r = this.get('graph');
              (this.currentTarget = n),
                this.showTooltip(t),
                r.emit('tooltipchange', { item: t.item, action: 'show' });
            }
          }),
          (e.prototype.onMouseMove = function (t) {
            const e = this.get('itemTypes');
            (t.item && t.item.getType && e.indexOf(t.item.getType()) === -1) ||
              (this.currentTarget && t.item === this.currentTarget && this.showTooltip(t));
          }),
          (e.prototype.onMouseLeave = function () {
            this.hideTooltip(),
              this.get('graph').emit('tooltipchange', { item: this.currentTarget, action: 'hide' }),
              (this.currentTarget = null);
          }),
          (e.prototype.showTooltip = function (t) {
            let e;
            let n;
            let r;
            if (t.item) {
              const i = this.get('itemTypes');
              if (!t.item.getType || i.indexOf(t.item.getType()) !== -1) {
                let o;
                let a;
                const s = this.get('graph').get('uiGroup');
                const u = H(
                  (void 0 ===
                    (o = (e = this.get('getContent')) === null || void 0 === e ? void 0 : e(t)) &&
                    (o = ''),
                  `\n  <root> \n    ${o}\n  </root>`),
                  (void 0 ===
                    (a = (n = this.get('getCss')) === null || void 0 === n ? void 0 : n()) &&
                    (a = ''),
                  `\n    text {\n      opacity: 1\n    }\n    ${a}\n  `),
                  s,
                );
                (r = this.get('tooltip')) === null || void 0 === r || r.remove(),
                  this.set('tooltip', u),
                  this.updatePosition(t);
              }
            }
          }),
          (e.prototype.hideTooltip = function () {
            const t = this.get('tooltip');
            t && t.setStyle('display', 'none');
          }),
          (e.prototype.updatePosition = function (t) {
            const e = this.get('shouldBegin');
            const n = this.get('tooltip');
            if (e(t)) {
              const r = this.get('graph');
              const i = r.get('width');
              const o = r.get('height');
              const a = this.get('offsetX') || 0;
              const s = this.get('offsetY') || 0;
              let u = r.getPointByClient(t.clientX, t.clientY);
              const c = this.get('fixToNode');
              const h = t.item;
              if (h.getType && h.getType() === 'node' && c && Object(gt.n)(c) && c.length >= 2) {
                const l = h.getBBox();
                u = { x: l.minX + l.width * c[0], y: l.minY + l.height * c[1] };
              }
              const d = r.getCanvasByPoint(u.x, u.y);
              const f = d.x;
              const p = d.y;
              const g = { x: f + a, y: p + s };
              n.setStyle('display', 'flex'),
                f + n.width + a > i && (g.x -= n.width + a),
                p + n.height + s > o && (g.y -= n.height + s),
                n.setStyle('left', g.x),
                n.setStyle('top', g.y);
            } else this.hideTooltip();
          }),
          (e.prototype.hide = function () {
            this.onMouseLeave();
          }),
          (e.prototype.destroy = function () {
            const t = this.get('tooltip');
            t && t.remove();
          }),
          e
        );
      })(Qe);
      function $i(t, e, n) {
        let r;
        let i = t.type;
        const o = (function (t) {
          let e;
          let n;
          let r;
          t.size &&
            (Array.isArray(t.size)
              ? ((e = t.size[0]), (n = t.size[1] || t.size[0]), (r = t.size[0] / 2))
              : typeof t.size === 'number' && ((e = t.size), (n = t.size), (r = t.size / 2)));
          t.style &&
            (t.style.width && (e = t.style.width),
            t.style.height && (n = t.style.height),
            t.style.r && (r = t.style.r));
          r || (r = 5);
          e || (e = r);
          n || (n = r);
          return { width: e, height: n, r };
        })(t);
        const a = o.width;
        const s = o.height;
        const u = o.r;
        switch (t.type) {
          case 'circle':
            r = { r: u, x: 0, y: 0 };
            break;
          case 'rect':
            r = { width: a, height: s, x: -a / 2, y: -s / 2 };
            break;
          case 'ellipse':
            r = { r1: a, r2: s, x: 0, y: 0 };
            break;
          case 'line':
            (r = { x1: -a / 2, y1: 0, x2: a / 2, y2: 0 }), (i = 'line');
            break;
          case 'quadratic':
            (r = {
              path: [
                ['M', -a / 2, 0],
                ['Q', 0, a / 2, a / 2, 0],
              ],
            }),
              (i = 'path');
            break;
          case 'cubic':
            (r = {
              path: [
                ['M', -a / 2, 0],
                ['C', -a / 6, a / 2, a / 6, -a / 2, a / 2, 0],
              ],
            }),
              (i = 'path');
            break;
          default:
            r = { r: u, x: 0, y: 0 };
        }
        const c = `\n  <div class='node-container' orignStyle=${JSON.stringify(e)} legendId=${
          t.id
        }>\n    <shape type='${i}' class='${t.type}-node-keyShape' \n      ${Object.entries(
          r,
        ).reduce((t, e) => {
          return `${t} ${e[0]}=${e[1]} `;
        }, '')}\n    />\n    ${t.label && ` <div class='text'>${t.label}</div>`}\n  </div>\n`;
        const l = Object(h.a)(
          { textAlign: 'begin', fontSize: 12, fill: '#000', opacity: 1, fontWeight: 'normal' },
          t.labelStyle,
        );
        return V(
          c,
          `\n    .node-container {\n      width: ${n.width};\n      height: ${
            n.height || Math.max(s, n.fontSize)
          };\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      background-opacity: 0;\n      font-size: ${
            l.fontSize
          };\n      margin: ${n.margin}\n    }\n    shape {\n      top: ${s / 2};\n      left: ${
            a / 2
          };\n      width: ${a};\n      height: ${s};\n      background: ${
            e.fill
          };\n      border: ${e.lineWidth || '1'} solid ${
            e.stroke
          };\n      margin-right: 3;\n    }\n    .text {\n      flex: 1;\n      height: ${
            l.fontSize + 2
          };\n      color: ${
            l.fill
          };\n      background-opacity: 0;\n      pointer-events: none;\n      text-align: ${
            l.textAlign
          };\n      font-weight: ${l.fontWeight}\n    }\n    text {\n      opacity: ${
            l.opacity
          };\n      white-space: nowrap;\n    }\n`,
        );
      }
      const Ji = ['click', 'mouseenter'];
      var to = (function (t) {
        function e(e) {
          const n = t.call(this, e) || this;
          return (n.active = []), (n.inActive = []), n;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              data: {},
              position: 'top',
              padding: 0,
              margin: 0,
              offsetX: -10,
              offsetY: 0,
              layout: 'horizontal',
              containerStyle: {},
              align: void 0,
              filter: { enable: !1, trigger: 'click' },
              itemConfig: { width: 100, height: 50, fontSize: 12 },
            };
          }),
          (e.prototype.init = function () {
            const t = this;
            this.formatArray('padding'),
              this.formatArray('margin'),
              (this.get('filter') || {}).multiple && this.set('multiple', !1);
            let e = this.get('align');
            if (!e) {
              const n = this.get('position').split('-');
              n.includes('left') && (e = 'left'),
                (e = n.includes('right') ? 'right' : 'center'),
                this.set('align', e);
            }
            setTimeout(() => {
              const e = t.render();
              const n = t.getContainerPos(e);
              t.get('graph').get('uiGroup').translate(n.left, n.top), t.bindEvents();
            });
          }),
          (e.prototype.getContainerPos = function (t) {
            void 0 === t && (t = [0, 0]);
            const e = this.get('graph');
            const n = this.get('offsetX');
            const r = this.get('offsetY');
            const i = this.get('margin');
            const o = this.get('position').split('-');
            const a = { top: 0, right: 1, bottom: 2, left: 3 };
            const s = { left: (e.getWidth() - t[0]) / 2 + 0, top: (e.getHeight() - t[1]) / 2 + 0 };
            return (
              o.forEach((n) => {
                let r = i[a[n]];
                let o = n;
                switch (n) {
                  case 'top':
                  case 'left':
                    r += 0;
                    break;
                  case 'bottom':
                    (r = e.getHeight() - t[1] - r + 0), (o = 'top');
                    break;
                  default:
                    (r = e.getWidth() - t[0] - r + 0), (o = 'left');
                }
                s[o] = r;
              }),
              (s.top += r),
              (s.left += n),
              Object.keys(s).forEach((t) => {
                s[t] = `${s[t]}`;
              }),
              s
            );
          }),
          (e.prototype.bindEvents = function () {
            const t = this;
            const e = t.get('filter');
            if (e && e.enable) {
              let n = e.trigger || 'click';
              Ji.includes(n) ||
                (console.warn(
                  "Trigger for legend filterling must be 'click' or 'mouseenter', 'click' will take effect by default.",
                ),
                (n = 'click')),
                this.get('legendUI').on('tap', (e) => {
                  let n;
                  ((n = e == null ? void 0 : e.uiNode) === null || void 0 === n
                    ? void 0
                    : n.getAttribute('class')) === 'node-container'
                    ? t.filterData(e.uiNode)
                    : (t.clearFilter(), t.clearActiveLegend());
                });
            }
          }),
          (e.prototype.changeData = function (t) {
            this.set('data', t);
            const e = this.render();
            const n = this.getContainerPos(e);
            this.get('graph').get('uiGroup').translate(n.left, n.top);
          }),
          (e.prototype.goActive = function (t) {
            this.goDefault(t);
            const e = this.get('filter');
            const n = (e == null ? void 0 : e.lengedStateStyles) || {};
            const r = (n == null ? void 0 : n.active) || {
              stroke: '#000',
              lineWidth: 2,
              'text-shape': { fontWeight: 'bold', opacity: 1 },
            };
            t.query('shape').setStyle('borderColor', r.stroke),
              t.query('shape').setStyle('borderWidth', r.lineWidth),
              t.query('text').setStyle('fontWeight', r['text-shape'].fontWeight),
              t.query('text').setStyle('opacity', r['text-shape'].opacity),
              this.active.push(t),
              this.inActive.includes(t) && this.inActive.splice(this.inActive.indexOf(t), 1);
          }),
          (e.prototype.goDefault = function (t) {
            const e = t.getAttribute('orignStyle');
            t.query('shape').setStyle('borderColor', e.stroke),
              t.query('shape').setStyle('opacity', 1),
              t.query('shape').setStyle('borderWidth', e.lineWidth || 1),
              t.query('text').setStyle('fontWeight', 'normal'),
              t.query('text').setStyle('opacity', 1);
          }),
          (e.prototype.goInActive = function (t) {
            this.goDefault(t);
            const e = this.get('filter');
            const n = (e == null ? void 0 : e.lengedStateStyles) || {};
            const r = (n == null ? void 0 : n.inactive) || {
              opacity: 0.5,
              'text-shape': { opacity: 0.5 },
            };
            t.query('shape').setStyle('opacity', r.opacity),
              t.query('text').setStyle('opacity', r['text-shape'].opacity),
              this.inActive.push(t),
              this.active.includes(t) && this.active.splice(this.active.indexOf(t), 1);
          }),
          (e.prototype.activateLegend = function (t) {
            const e = this;
            const n = this.get('filter');
            if (
              ((n == null ? void 0 : n.multiple) || this.clearActiveLegend(),
              !this.active.includes(t))
            ) {
              const r = this.get('legendUI').queryAll('.node-container');
              this.goActive(t),
                r.forEach((t) => {
                  e.active.includes(t) || e.goInActive(t);
                });
            }
          }),
          (e.prototype.clearActiveLegend = function () {
            const t = this;
            this.get('legendUI')
              .queryAll('.node-container')
              .forEach((e) => {
                t.goDefault(e);
              }),
              (this.active = []),
              (this.inActive = []);
          }),
          (e.prototype.filterData = function (t) {
            const e = this;
            const n = this.get('filter');
            const r = n == null ? void 0 : n.filterFunctions;
            if (n && r) {
              const i = this.get('graph');
              const o = n.graphActiveState || 'active';
              const a = n.graphInactiveState || 'inactive';
              const s = n.multiple;
              if (
                (this.clearFilter(),
                s || this.clearActiveLegend(),
                this.active.includes(t) ? this.goInActive(t) : this.activateLegend(t),
                this.active.length === 0)
              )
                this.get('legendUI')
                  .queryAll('.node-container')
                  .forEach((t) => {
                    return e.goDefault(t);
                  });
              let u = 0;
              const c = ['getNodes', 'getEdges'];
              c.forEach((t) => {
                i[t]().forEach((t) => {
                  let n = !1;
                  e.active.forEach((e) => {
                    const i = r[e.getAttribute('legendId')];
                    n = n || i(t.getModel());
                  }),
                    n
                      ? (i.setItemState(t, a, !1), i.setItemState(t, o, !0), u++)
                      : (i.setItemState(t, o, !1), i.setItemState(t, a, !0));
                });
              }),
                u ||
                  c.forEach((t) => {
                    i[t]().forEach((t) => {
                      i.clearItemStates(t, [a]);
                    });
                  });
            }
          }),
          (e.prototype.clearFilter = function () {
            const t = this.get('graph');
            const e = this.get('filter');
            if (e) {
              const n = e.graphActiveState || 'active';
              const r = e.graphInactiveState || 'inactive';
              t.getNodes().forEach((e) => {
                t.clearItemStates(e, [n, r]);
              }),
                t.getEdges().forEach((e) => {
                  t.clearItemStates(e, [n, r]);
                });
            }
          }),
          (e.prototype.render = function () {
            let t;
            let e;
            const n = this;
            this.processData();
            const r = this.get('itemsData');
            const i = [[], []];
            ['nodes', 'edges'].forEach((t, e) => {
              r[t].forEach((r) => {
                const o = n.getStyle(t.substr(0, 4), r);
                i[e].push($i(r, o, n.get('itemConfig')));
              });
            });
            const o = this.get('title');
            const a = ` \n    <div class='g6-legend-container'>\n      ${
              o && `<div class='text-container'>${o}</div>`
            }\n      <div class='node-wrap'>\n        <div class='node-row'> </div>\n        <div class='edge-row'> </div>\n      </div>  \n    </div>`;
            const s = this.get('titleConfig') || {};
            const u = Object.assign(
              {
                fontSize: 20,
                fontFamily: 'Arial',
                fontWeight: 300,
                textBaseline: 'top',
                textAlign: 'center',
                fill: '#000',
              },
              s.style || {},
            );
            const c = this.get('containerStyle');
            const h = this.get('padding');
            const l = this.get('margin');
            const d = H(
              a,
              `\n      .g6-legend-container{\n        width: ${this.get(
                'width',
              )};\n        height: ${this.get('height')};\n        padding: ${h.join(
                ' ',
              )};\n        margin: ${l.join(' ')};\n        background: ${
                c.fill || '#f00'
              };\n        border: ${c.lineWidth || '1'} solid ${
                c.stroke || '#000'
              };\n        opacity: ${
                c.opacity || '0.5'
              }\n      }\n      .text-container {\n        font-size: ${
                u.fontSize
              };\n        font-family: ${u.fontFamily};\n        font-weight: ${
                u.fontWeight
              };\n        text-align: ${u.textAlign};\n        color: ${u.fill};\n        height: ${
                u.fontSize
              };\n        background-opacity: 0;\n        top:  ${s.offsetY};\n        left: ${
                s.offsetX
              };\n      }\n      .edge-row, .node-row {\n        display: flex;\n        flex-direction: ${
                this.get('layout') === 'vertical' ? 'column' : 'row'
              };\n        flex-wrap: nowrap;\n        justify-content: space-between;\n        background-opacity: 0;\n      }\n      .node-wrap {\n        flex: 1;\n        flex-direction: ${
                this.get('layout') === 'vertical' ? 'row' : 'column'
              };\n        justify-content: space-between;\n        background-opacity: 0;\n      }\n    `,
              this.get('graph').get('uiGroup'),
            );
            return (
              (t = d.query('.node-row')).appendChild.apply(t, i[0]),
              (e = d.query('.edge-row')).appendChild.apply(e, i[1]),
              this.set('legendUI', d),
              [d.width, d.height]
            );
          }),
          (e.prototype.processData = function () {
            const t = this.get('data');
            const e = { nodes: [], edges: [] };
            t.nodes &&
              (t.nodes.sort((t, e) => {
                return t.order - e.order;
              }),
              t.nodes.forEach((t) => {
                let n;
                let r;
                let i;
                let o;
                let a;
                const s = t.size || [
                  ((n = t.style) === null || void 0 === n ? void 0 : n.width) ||
                    ((r = t.style) === null || void 0 === r ? void 0 : r.r) ||
                    8,
                  ((i = t.style) === null || void 0 === i ? void 0 : i.height) ||
                    ((o = t.style) === null || void 0 === o ? void 0 : o.r) ||
                    8,
                ];
                const u = ((a = t.labelCfg) === null || void 0 === a ? void 0 : a.style) || {};
                e.nodes.push({
                  id: t.id || Object(gt.L)(),
                  type: t.type || 'circle',
                  style: Object(h.a)({}, t.style),
                  order: t.order,
                  label: t.label,
                  itemType: 'node',
                  size: s,
                  labelCfg: { position: 'right', style: Object(h.a)({ fontFamily: 'Arial' }, u) },
                });
              })),
              t.edges &&
                (t.edges.sort((t, e) => {
                  return t.order - e.order;
                }),
                t.edges.forEach((t) => {
                  let n;
                  let r;
                  let i = t.type || 'line';
                  t.type === 'cubic-horizontal' && (i = 'cubic');
                  const o = ((n = t.labelCfg) === null || void 0 === n ? void 0 : n.style) || {};
                  const a = t.size || [
                    ((r = t.style) === null || void 0 === r ? void 0 : r.width) || 8,
                    1,
                  ];
                  e.edges.push({
                    id: t.id || Object(gt.L)(),
                    type: i,
                    size: a,
                    style: Object(h.a)({ lineWidth: Object(gt.n)(a) ? a[1] : 1 }, t.style),
                    order: t.order,
                    label: t.label,
                    itemType: 'edge',
                    labelCfg: { position: 'right', style: Object(h.a)({ fontFamily: 'Arial' }, o) },
                  });
                })),
              this.set('itemsData', e);
          }),
          (e.prototype.formatArray = function (t) {
            const e = this.get(t);
            if (Object(gt.u)(e)) this.set(t, [e, e, e, e]);
            else if (Object(gt.n)(e))
              switch (e.length) {
                case 0:
                  this.set(t, [0, 0, 0, 0]);
                  break;
                case 1:
                  this.set(t, [e[0], e[0], e[0], e[0]]);
                  break;
                case 2:
                  this.set(t, [e[0], e[1], e[0], e[1]]);
                  break;
                case 3:
                  this.set(t, [e[0], e[1], e[2], e[1]]);
              }
            return this.get(t);
          }),
          (e.prototype.getStyle = function (t, e) {
            const n =
              t === 'node' ? { fill: '#ccc', lineWidth: 0 } : { stroke: '#000', lineWidth: 1 };
            return Object(h.a)(Object(h.a)({}, n), e.style || {});
          }),
          (e.prototype.destroy = function () {
            const t = this.get('graph').get('container');
            const e = this.get('container');
            t.removeChild(e);
          }),
          e
        );
      })(Qe);
      var eo = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            const t = this;
            return {
              minZoom: 0.5,
              maxZoom: 3,
              sliderWidthPercent: 0.3,
              dragTimestamp: +new Date(),
              getContent() {
                return '\n          <root class="f6-zoom-slider">\n            <div class="rail"></div>\n            <div class="track"></div>\n            <div class="handle">\n              <div class="text">1 times</div>\n              <div class="circle"></div>\n            </div>\n          </root>\n        ';
              },
              getCss() {
                const e = t.get('graph');
                const n = e.get('width');
                const r = e.get('height');
                const i = t.get('minZoom');
                const o = t.get('maxZoom');
                const a = t.get('sliderWidthPercent');
                const s = Math.floor(n * a);
                const u = s * ((1 - i) / (o - i));
                return `\n          .f6-zoom-slider {\n            width: ${s};\n            height: 30;\n            margin-left: ${Math.floor(
                  (n * (1 - a)) / 2,
                )};\n            padding: 13 0;\n            top: ${
                  r - 40
                };\n            position: relative;\n            opacity: 0;\n          }\n\n          .rail {\n            width: ${s};\n            height: 4;\n            background-color: #f5f5f5;\n            border-radius: 2;\n            opacity: 1;\n          }\n\n          .track {\n            width: ${
                  u + 2
                };\n            height: 4;\n            background-color: #91d5ff;\n            position: absolute;\n            top: 13;\n            border-radius: 2;\n            opacity: 1;\n          }\n\n          .handle {\n            height: 30;\n            width: 40;\n            position: absolute;\n            top: 0;\n            left: ${
                  u - 9
                };\n            padding: 9;\n            opacity: 0;\n          }\n\n          .circle {\n            height: 13;\n            width: 13;\n            border-radius: 6.5;\n            border: 2px solid #1890ff;\n            background-color: #fff;\n            opacity: 1;\n          }\n\n          .text  {\n            position: absolute;\n            top: -9;\n            margin-left: -12;\n            color: #666;\n            width: 45;\n          }\n        `;
              },
            };
          }),
          (e.prototype.getEvents = function () {
            return { dragstart: 'onDragStart', dragend: 'onDragEnd' };
          }),
          (e.prototype.init = function () {
            const t = this;
            setTimeout(() => {
              t.initSlider();
            });
          }),
          (e.prototype.initSlider = function () {
            const t = this;
            console.log('initSlider', this);
            const e = this.get('graph').get('uiGroup');
            const n = H(this.get('getContent')(), this.get('getCss')(), e);
            const r = n.query('.handle');
            let i = 0;
            r.on('panstart', (t) => {
              i = t.clientX;
            }),
              r.on('panmove', (e) => {
                const n = e.clientX - i;
                (i = e.clientX), t.set('dragTimestamp', +new Date()), t.updateHandlePosition(n);
              }),
              n.setStyle('display', 'none'),
              this.set('zoom-slider', n);
          }),
          (e.prototype.onDragStart = function () {
            const t = this.get('graph');
            const e = t.getZoom();
            const n = t.get('width');
            const r = this.get('zoom-slider');
            const i = this.get('minZoom');
            const o = this.get('maxZoom');
            const a = this.get('sliderWidthPercent');
            const s = r.query('.track');
            const u = Math.floor(n * a) * ((e - i) / (o - i)) - s.getStyle('width');
            this.updateHandlePosition(u),
              clearInterval(this.get('clearHandle')),
              r.setStyle('display', 'block');
          }),
          (e.prototype.onDragEnd = function () {
            return Object(h.b)(this, void 0, void 0, function () {
              let t;
              let e;
              const n = this;
              return Object(h.d)(this, function (r) {
                return (
                  (t = this.get('zoom-slider')),
                  clearInterval(this.get('clearHandle')),
                  (e = setInterval(() => {
                    +new Date() - n.get('dragTimestamp') > 3e3 &&
                      (clearInterval(n.get('clearHandle')), t.setStyle('display', 'none'));
                  }, 3e3)),
                  this.set('clearHandle', e),
                  [2]
                );
              });
            });
          }),
          (e.prototype.updateHandlePosition = function (t) {
            const e = this.get('graph');
            const n = this.get('zoom-slider');
            const r = this.get('sliderWidthPercent');
            const i = this.get('minZoom');
            const o = this.get('maxZoom');
            const a = n.query('.track');
            const s = n.query('.handle');
            const u = a.getStyle('width');
            const c = e.get('width') * r;
            let h = u + t;
            h < 0 && (h = 0), h > c && (h = c);
            const l = (h / c) * (o - i) + i;
            a.setStyle('width', h),
              s.setStyle('left', h - 9),
              s.setText(`${Math.round(10 * l) / 10} times`),
              this.updateScale(l);
          }),
          (e.prototype.updateScale = function (t) {
            const e = this.get('graph');
            e.zoom(t / e.getZoom());
          }),
          e
        );
      })(Qe);
      const no = Vi.distance;
      const ro = { stroke: '#000', strokeOpacity: 0.8, lineWidth: 2, fillOpacity: 1, fill: '#fff' };
      var io = (function (t) {
        function e(e) {
          const n = t.call(this, e) || this;
          return (n.isUp = !0), (n.scaleTimer = null), n;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              type: 'both',
              trigger: 'drag',
              r: 60,
              delegateStyle: Object(gt.c)(ro),
              showLabel: 'edge',
            };
          }),
          (e.prototype.getEvents = function () {
            let t;
            switch (this.get('trigger')) {
              case 'click':
                t = { tap: 'filter' };
                break;
              case 'drag':
                t = { drag: 'createDelegate' };
                break;
              default:
                t = { mousemove: 'filter' };
            }
            return t;
          }),
          (e.prototype.init = function () {
            const t = this.get('showLabel');
            const e = t === 'node' || t === 'both';
            const n = t === 'edge' || t === 'both';
            this.set('showNodeLabel', e),
              this.set('showEdgeLabel', n),
              this.get('shouldShow') ||
                this.set('shouldShow', () => {
                  return !0;
                });
          }),
          (e.prototype.createDelegate = function (t) {
            const e = this;
            let n = e.get('delegate');
            if (!n || n.destroyed) {
              const r = this.get('graph');
              const i = r.getPointByClient(t.clientX, t.clientY);
              e.filter(i),
                (n = e.get('delegate')).on('dragstart', (t) => {}),
                n.on('drag', (t) => {
                  const n = r.getPointByClient(t.clientX, t.clientY);
                  e.filter(n);
                });
            }
          }),
          (e.prototype.scaleRByWheel = function (t, e) {
            if (t) {
              t.preventDefault && t.preventDefault();
              let n;
              const r = this.get('graph');
              const i = this.get('delegate');
              (i ? { x: i.attr('x'), y: i.attr('y') } : void 0) ||
                r.getPointByClient(t.clientX, t.clientY);
              n = e ? 1 / 0.95 : 0.95;
              const o = this.get('maxR');
              const a = this.get('minR');
              let s = this.get('r');
              ((s > (o || r.get('height')) && n > 1) ||
                (s < (a || 0.05 * r.get('height')) && n < 1)) &&
                (n = 1),
                (s *= n),
                this.set('r', s),
                this.filter(t);
            }
          }),
          (e.prototype.filter = function (t) {
            const e = t.x;
            const n = t.y;
            const r = this.get('graph');
            const i = r.getNodes();
            const o = {};
            const a = this.get('r');
            const s = this.get('type');
            const u = { x: e, y: n };
            this.updateDelegate(u, a);
            const c = this.get('shouldShow');
            let h = this.get('vShapes');
            h &&
              h.forEach((t) => {
                t.remove(), t.destroy();
              }),
              (h = []),
              i.forEach((t) => {
                const e = t.getModel();
                const n = e.x;
                const r = e.y;
                no({ x: n, y: r }, u) < a && (o[e.id] = t);
              });
            const l = r.getEdges();
            const d = [];
            l.forEach((t) => {
              const e = t.getModel();
              const n = e.source;
              const r = e.target;
              c(e) &&
                (s === 'only-source' || s === 'one'
                  ? o[n] && !o[r] && d.push(t)
                  : s === 'only-target' || s === 'one'
                  ? o[r] && !o[n] && d.push(t)
                  : s === 'both' && o[n] && o[r] && d.push(t));
            });
            const f = this.get('showNodeLabel');
            const p = this.get('showEdgelabel');
            const g = r.get('group');
            d.forEach((t) => {
              t.get('group')
                .get('children')
                .forEach((t) => {
                  const e = t.get('type');
                  const n = g.addShape(e, { attrs: t.attr() });
                  h.push(n), f && e === 'text' && n.set('visible', !0);
                });
            }),
              Object.keys(o).forEach((t) => {
                const e = o[t].get('group').clone();
                if ((g.add(e), h.push(e), p))
                  for (let n = e.get('children'), r = 0; r < n.length; r++) {
                    const i = n[r];
                    i.get('type') === 'text' && i.set('visible', !0);
                  }
              }),
              this.set('vShapes', h);
          }),
          (e.prototype.updateParams = function (t) {
            const e = t.r;
            const n = t.trigger;
            const r = t.minR;
            const i = t.maxR;
            const o = t.showLabel;
            const a = t.shouldShow;
            isNaN(t.r) || this.set('r', e),
              isNaN(i) || this.set('maxR', i),
              isNaN(r) || this.set('minR', r),
              n === 'tab' && this.set('trigger', n),
              (o !== 'node' && o !== 'both') || this.set('showNodeLabel', !0),
              (o !== 'edge' && o !== 'both') || this.set('showEdgeLabel', !0),
              a && this.set('shouldShow', a);
          }),
          (e.prototype.updateDelegate = function (t, e) {
            const n = this.get('graph');
            let r = this.get('delegate');
            if (!r || r.destroyed) {
              const i = n.get('group');
              const o = this.get('delegateStyle') || ro;
              r = i.addShape('circle', {
                attrs: Object(h.a)({ r: e, x: t.x, y: t.y }, o),
                name: 'lens-shape',
                draggable: !0,
              });
            } else r.attr({ x: t.x, y: t.y, r: e });
            this.set('delegate', r);
          }),
          (e.prototype.clear = function () {
            let t = this.get('vShapes');
            t &&
              t.forEach((t) => {
                t.remove(), t.destroy();
              }),
              (t = []),
              this.set('vShapes', t);
            const e = this.get('delegate');
            e && !e.destroyed && (e.remove(), e.destroy());
          }),
          (e.prototype.destroy = function () {
            this.clear();
          }),
          e
        );
      })(Qe);
      const oo = {
        stroke: '#000',
        strokeOpacity: 0.8,
        lineWidth: 2,
        fillOpacity: 0.1,
        fill: '#ccc',
      };
      var ao = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              trigger: 'tap',
              d: 1.5,
              r: 300,
              delegateStyle: Object(gt.c)(oo),
              showLabel: !1,
              maxD: 5,
              minD: 0,
              scaleRBy: 'unset',
              scaleDBy: 'unset',
              showDPercent: !0,
            };
          }),
          (e.prototype.getEvents = function () {
            let t;
            switch (this.get('trigger')) {
              case 'tap':
                t = { tap: 'magnify' };
                break;
              case 'drag':
                t = { tap: 'createDelegate' };
                break;
              default:
                t = { tap: 'magnify' };
            }
            return t;
          }),
          (e.prototype.init = function () {
            const t = this.get('r');
            this.set('cachedMagnifiedModels', []),
              this.set('cachedOriginPositions', {}),
              this.set('r2', t * t);
            const e = this.get('d');
            this.set('molecularParam', (e + 1) * t);
          }),
          (e.prototype.createDelegate = function (t) {
            const e = this;
            const n = this;
            let r = n.get('delegate');
            (r && !r.destroyed) ||
              (n.magnify(t),
              (r = n.get('delegate')).on('dragstart', (t) => {
                n.set('delegateCenterDiff', { x: r.attr('x') - t.x, y: r.attr('y') - t.y });
              }),
              r.on('drag', (t) => {
                n.magnify(t);
              }),
              this.get('scaleDBy') === 'wheel' &&
                r.on('mousewheel', (t) => {
                  e.scaleDByWheel(t);
                }),
              this.get('scaleRBy') === 'wheel' &&
                r.on('mousewheel', (t) => {
                  n.scaleRByWheel(t);
                }));
          }),
          (e.prototype.scaleRByWheel = function (t) {
            if (t && t.originalEvent) {
              t.preventDefault && t.preventDefault();
              let e;
              const n = this.get('graph');
              const r = this.get('delegate');
              const i =
                (r ? { x: r.attr('x'), y: r.attr('y') } : void 0) ||
                n.getPointByClient(t.clientX, t.clientY);
              e = t.originalEvent.wheelDelta < 0 ? 0.95 : 1 / 0.95;
              const o = this.get('maxR');
              const a = this.get('minR');
              let s = this.get('r');
              ((s > (o || n.get('height')) && e > 1) ||
                (s < (a || 0.05 * n.get('height')) && e < 1)) &&
                (e = 1),
                (s *= e),
                this.set('r', s),
                this.set('r2', s * s);
              const u = this.get('d');
              this.set('molecularParam', (u + 1) * s),
                this.set('delegateCenterDiff', void 0),
                this.magnify(t, i);
            }
          }),
          (e.prototype.scaleRByDrag = function (t) {
            if (t) {
              let e;
              const n = this.get('dragPrePos');
              const r = this.get('graph');
              const i = r.getPointByClient(t.clientX, t.clientY);
              e = t.x - n.x < 0 ? 0.95 : 1 / 0.95;
              const o = this.get('maxR');
              const a = this.get('minR');
              let s = this.get('r');
              ((s > (o || r.get('height')) && e > 1) ||
                (s < (a || 0.05 * r.get('height')) && e < 1)) &&
                (e = 1),
                (s *= e),
                this.set('r', s),
                this.set('r2', s * s);
              const u = this.get('d');
              this.set('molecularParam', (u + 1) * s),
                this.magnify(t, i),
                this.set('dragPrePos', { x: t.x, y: t.y });
            }
          }),
          (e.prototype.scaleDByWheel = function (t) {
            if (t || t.originalEvent) {
              t.preventDefault && t.preventDefault();
              let e = 0;
              e = t.originalEvent.wheelDelta < 0 ? -0.1 : 0.1;
              const n = this.get('d') + e;
              const r = this.get('maxD');
              const i = this.get('minD');
              if (n < r && n > i) {
                this.set('d', n);
                const o = this.get('r');
                this.set('molecularParam', (n + 1) * o);
                const a = this.get('delegate');
                const s = a ? { x: a.attr('x'), y: a.attr('y') } : void 0;
                this.set('delegateCenterDiff', void 0), this.magnify(t, s);
              }
            }
          }),
          (e.prototype.scaleDByDrag = function (t) {
            const e = this.get('dragPrePos');
            const n = t.x - e.x > 0 ? 0.1 : -0.1;
            const r = this.get('d') + n;
            const i = this.get('maxD');
            const o = this.get('minD');
            if (r < i && r > o) {
              this.set('d', r);
              const a = this.get('r');
              this.set('molecularParam', (r + 1) * a), this.magnify(t);
            }
            this.set('dragPrePos', { x: t.x, y: t.y });
          }),
          (e.prototype.magnify = function (t, e) {
            this.restoreCache();
            const n = this.get('graph');
            const r = this.get('cachedMagnifiedModels');
            const i = this.get('cachedOriginPositions');
            const o = this.get('showLabel');
            const a = this.get('r');
            const s = this.get('r2');
            const u = this.get('d');
            const c = this.get('molecularParam');
            const h = n.getNodes();
            const l = h.length;
            let d = e ? { x: e.x, y: e.y } : { x: t.x, y: t.y };
            !this.get('dragging') ||
              (this.get('trigger') !== 'mousemove' && this.get('trigger') !== 'tap') ||
              ((d = this.get('cacheCenter')), (d = n.getPointByClient(d.x, d.y)));
            const f = this.get('delegateCenterDiff');
            f && ((d.x += f.x), (d.y += f.y)), this.updateDelegate(d, a);
            for (let p = 0; p < l; p++) {
              const g = h[p].getModel();
              const y = g.x;
              const v = g.y;
              if (!isNaN(y) && !isNaN(v)) {
                const m = (y - d.x) * (y - d.x) + (v - d.y) * (v - d.y);
                if (!isNaN(m) && m < s && m !== 0) {
                  const b = Math.sqrt(m);
                  const x = (c * b) / (u * b + a);
                  const w = (y - d.x) / b;
                  const O = (v - d.y) / b;
                  if (
                    ((g.x = w * x + d.x),
                    (g.y = O * x + d.y),
                    i[g.id] || (i[g.id] = { x: y, y: v, texts: [] }),
                    r.push(g),
                    o && 2 * b < a)
                  )
                    for (
                      let M = h[p].getContainer().getChildren(), S = M.length, C = 0;
                      C < S;
                      C++
                    ) {
                      const j = M[C];
                      j.get('type') === 'text' &&
                        (i[g.id].texts.push({ visible: j.get('visible'), shape: j }),
                        j.set('visible', !0));
                    }
                }
              }
            }
            n.refreshPositions();
          }),
          (e.prototype.restoreCache = function () {
            for (
              let t = this.get('cachedMagnifiedModels'),
                e = this.get('cachedOriginPositions'),
                n = t.length,
                r = 0;
              r < n;
              r++
            ) {
              const i = t[r];
              const o = e[i.id];
              (i.x = o.x), (i.y = o.y);
              for (let a = o.texts.length, s = 0; s < a; s++) {
                const u = o.texts[s];
                u.shape.set('visible', u.visible);
              }
            }
            this.set('cachedMagnifiedModels', []), this.set('cachedOriginPositions', {});
          }),
          (e.prototype.updateParams = function (t) {
            const e = t.r;
            const n = t.d;
            const r = t.trigger;
            const i = t.minD;
            const o = t.maxD;
            const a = t.minR;
            const s = t.maxR;
            const u = t.scaleDBy;
            const c = t.scaleRBy;
            isNaN(t.r) || (this.set('r', e), this.set('r2', e * e)),
              isNaN(n) || this.set('d', n),
              isNaN(o) || this.set('maxD', o),
              isNaN(i) || this.set('minD', i),
              isNaN(s) || this.set('maxR', s),
              isNaN(a) || this.set('minR', a);
            let h;
            const l = this.get('d');
            const d = this.get('r');
            (this.set('molecularParam', (l + 1) * d),
            (r !== 'mousemove' && r !== 'tap' && r !== 'drag') || this.set('trigger', r),
            u === 'drag' || u === 'wheel' || u === 'unset') &&
              (this.set('scaleDBy', u),
              this.get('delegate').remove(),
              this.get('delegate').destroy(),
              (h = this.get('dPercentText')) && (h.remove(), h.destroy()));
            (c !== 'drag' && c !== 'wheel' && c !== 'unset') ||
              (this.set('scaleRBy', c),
              this.get('delegate').remove(),
              this.get('delegate').destroy(),
              (h = this.get('dPercentText')) && (h.remove(), h.destroy()));
          }),
          (e.prototype.updateDelegate = function (t, e) {
            const n = this;
            const r = this;
            const i = r.get('graph');
            let o = r.get('delegate');
            if (!o || o.destroyed) {
              var a = i.get('group');
              const s = r.get('delegateStyle') || oo;
              (o = a.addShape('circle', {
                attrs: Object(h.a)({ r: e / 1.5, x: t.x, y: t.y }, s),
                name: 'lens-shape',
                draggable: !0,
              })),
                this.get('trigger') !== 'drag' &&
                  (this.get('scaleRBy') === 'wheel'
                    ? o.on('mousewheel', (t) => {
                        r.scaleRByWheel(t);
                      })
                    : this.get('scaleRBy') === 'drag' &&
                      (o.on('dragstart', (t) => {
                        r.set('dragging', !0),
                          r.set('cacheCenter', { x: t.x, y: t.y }),
                          r.set('dragPrePos', { x: t.x, y: t.y });
                      }),
                      o.on('drag', (t) => {
                        r.scaleRByDrag(t);
                      }),
                      o.on('dragend', (t) => {
                        r.set('dragging', !1);
                      })),
                  this.get('scaleDBy') === 'wheel'
                    ? o.on('mousewheel', (t) => {
                        n.scaleDByWheel(t);
                      })
                    : this.get('scaleDBy') === 'drag' &&
                      (o.on('dragstart', (t) => {
                        r.set('dragging', !0),
                          r.set('cacheCenter', { x: t.x, y: t.y }),
                          r.set('dragPrePos', { x: t.x, y: t.y });
                      }),
                      o.on('drag', (t) => {
                        n.scaleDByDrag(t);
                      }),
                      o.on('dragend', (t) => {
                        r.set('dragging', !1);
                      })));
            } else o.attr({ x: t.x, y: t.y, r: e / 1.5 });
            if (r.get('showDPercent')) {
              const u = Math.round(
                ((r.get('d') - r.get('minD')) / (r.get('maxD') - r.get('minD'))) * 100,
              );
              let c = r.get('dPercentText');
              const l = t.y + e / 1.5 + 16;
              if (!c || c.destroyed)
                (c = (a = i.get('group')).addShape('text', {
                  attrs: {
                    text: `${u}%`,
                    x: t.x,
                    y: l,
                    fill: '#aaa',
                    stroke: '#fff',
                    lineWidth: 1,
                    fontSize: 12,
                  },
                })),
                  r.set('dPercentText', c);
              else c.attr({ text: `${u}%`, x: t.x, y: l });
            }
            r.set('delegate', o);
          }),
          (e.prototype.clear = function () {
            const t = this.get('graph');
            this.restoreCache(), t.refreshPositions();
            const e = this.get('delegate');
            e && !e.destroyed && (e.remove(), e.destroy());
            const n = this.get('dPercentText');
            n && !n.destroyed && (n.remove(), n.destroy());
          }),
          (e.prototype.destroy = function () {
            this.clear();
          }),
          e
        );
      })(Qe);
      const so = n(42);
      const uo = n(43);
      const co = Math.max;
      const ho = sn.a.transform;
      var lo = (function (t) {
        function e(e) {
          const n = t.call(this, e) || this;
          return (
            (n.handleUpdateCanvas = Object(gt.d)(
              (t) => {
                const e = n;
                e.destroyed || e.updateCanvas();
              },
              100,
              !1,
            )),
            n
          );
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              container: null,
              className: 'f6-minimap',
              viewportClassName: 'f6-minimap-viewport',
              type: 'default',
              padding: 50,
              size: [200, 120],
              delegateStyle: { fill: '#40a9ff', stroke: '#096dd9' },
              refresh: !0,
            };
          }),
          (e.prototype.getEvents = function () {
            return {
              beforepaint: 'updateViewport',
              beforeanimate: 'disableRefresh',
              afteranimate: 'enableRefresh',
              viewportchange: 'disableOneRefresh',
            };
          }),
          (e.prototype.disableRefresh = function () {
            this.set('refresh', !1);
          }),
          (e.prototype.enableRefresh = function () {
            this.set('refresh', !0), this.updateCanvas();
          }),
          (e.prototype.disableOneRefresh = function () {
            this.set('viewportChange', !0);
          }),
          (e.prototype.initViewport = function () {
            const t = this;
            const e = this._cfgs;
            const n = e.size;
            const r = e.graph;
            if (!this.destroyed) {
              const i = this.get('canvas').get('container');
              const o = Br(
                `\n      <div\n        class=${e.viewportClassName}\n        style='position:absolute;\n          left:0;\n          top:0;\n          box-sizing:border-box;\n          outline: 2px solid #1980ff'\n        draggable=true>\n      </div>`,
              );
              const a = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
              let s = 0;
              let u = 0;
              let c = !1;
              let h = 0;
              let l = 0;
              let d = 0;
              let f = 0;
              let p = 0;
              let g = 0;
              o.addEventListener(
                'dragstart',
                (i) => {
                  let a;
                  let y;
                  if (i.dataTransfer) {
                    const v = new Image();
                    (v.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' %3E%3Cpath /%3E%3C/svg%3E"),
                      (y = (a = i.dataTransfer).setDragImage) === null ||
                        void 0 === y ||
                        y.call(a, v, 0, 0);
                    try {
                      i.dataTransfer.setData('text/html', 'view-port-minimap');
                    } catch (t) {
                      i.dataTransfer.setData('text', 'view-port-minimap');
                    }
                  }
                  if (((e.refresh = !1), i.target === o)) {
                    const m = o.style;
                    (h = parseInt(m.left, 10)),
                      (l = parseInt(m.top, 10)),
                      (d = parseInt(m.width, 10)),
                      (f = parseInt(m.height, 10)),
                      d > n[0] ||
                        f > n[1] ||
                        ((g = r.getZoom()),
                        (p = t.get('ratio')),
                        (c = !0),
                        (s = i.clientX),
                        (u = i.clientY));
                  }
                },
                !1,
              ),
                o.addEventListener(
                  a ? 'dragover' : 'drag',
                  (t) => {
                    if (c && !Object(gt.t)(t.clientX) && !Object(gt.t)(t.clientY)) {
                      let e = s - t.clientX;
                      let i = u - t.clientY;
                      (h - e < 0 || h - e + d >= n[0]) && (e = 0),
                        (l - i < 0 || l - i + f >= n[1]) && (i = 0),
                        Lr(o, { left: `${(h -= e)}px`, top: `${(l -= i)}px` }),
                        r.translate((e * g) / p, (i * g) / p),
                        (s = t.clientX),
                        (u = t.clientY);
                    }
                  },
                  !1,
                ),
                o.addEventListener(
                  'dragend',
                  () => {
                    (c = !1), (e.refresh = !0);
                  },
                  !1,
                ),
                this.set('viewport', o),
                i.appendChild(o);
            }
          }),
          (e.prototype.updateViewport = function () {
            if (!this.destroyed) {
              const t = this.get('ratio');
              const e = (this.get('dx'), this.get('dy'), this.get('totaldx'));
              const n = this.get('totaldy');
              const r = this.get('graph');
              const i = this.get('size');
              const o = r.get('width');
              const a = r.get('height');
              const s = r.getPointByCanvas(0, 0);
              const u = r.getPointByCanvas(o, a);
              const c = this.get('viewport');
              c || this.initViewport();
              let h = (u.x - s.x) * t;
              let l = (u.y - s.y) * t;
              let d = s.x * t + e;
              let f = s.y * t + n;
              const p = d + h;
              const g = f + l;
              d < 0 && ((h += d), (d = 0)),
                p > i[0] && (h -= p - i[0]),
                f < 0 && ((l += f), (f = 0)),
                g > i[1] && (l -= g - i[1]),
                this.set('ratio', t),
                Lr(c, { left: `${d}px`, top: `${f}px`, width: `${h}px`, height: `${l}px` });
            }
          }),
          (e.prototype.updateGraphShapes = function () {
            const t = this._cfgs.graph;
            const e = this.get('canvas');
            const n = t.get('group');
            if (!n.destroyed) {
              const r = n.clone();
              r.resetMatrix(),
                e.clear(),
                e.add(r),
                t.get('renderer') === 'svg' && this.updateVisible(r);
            }
          }),
          (e.prototype.updateVisible = function (t) {
            const e = this;
            if (t.isGroup() || t.get('visible')) {
              const n = t.get('children');
              if (!n || !n.length) return;
              n.forEach((t) => {
                t.get('visible') || t.hide(), e.updateVisible(t);
              });
            } else t.hide();
          }),
          (e.prototype.updateKeyShapes = function () {
            const t = this;
            const e = this._cfgs.graph;
            const n = this.get('canvas');
            const r = n.get('children')[0] || n.addGroup();
            Object(gt.f)(e.getEdges(), (e) => {
              t.updateOneEdgeKeyShape(e, r);
            }),
              Object(gt.f)(e.getNodes(), (e) => {
                t.updateOneNodeKeyShape(e, r);
              });
            const i = e.getCombos();
            if (i && i.length) {
              const o =
                r.find((t) => {
                  return t.get('name') === 'comboGroup';
                }) || r.addGroup({ name: 'comboGroup' });
              setTimeout(() => {
                t.destroyed ||
                  (Object(gt.f)(i, (e) => {
                    t.updateOneComboKeyShape(e, o);
                  }),
                  o == null || o.sort(),
                  o == null || o.toBack(),
                  t.updateCanvas());
              }, 250);
            }
            this.clearDestroyedShapes();
          }),
          (e.prototype.updateOneComboKeyShape = function (t, e) {
            if (!this.destroyed) {
              const n = this.get('itemMap') || {};
              let r = n[t.get('id')];
              const i = t.getBBox();
              const o = t.get('keyShape').clone();
              const a = o.attr();
              let s = { x: i.centerX, y: i.centerY };
              r ? (s = Object.assign(a, s)) : ((r = o), e.add(r));
              const u = r.get('type');
              (u !== 'rect' && u !== 'image') || ((s.x = i.minX), (s.y = i.minY)),
                r.attr(s),
                t.isVisible() ? r.show() : r.hide(),
                (r.exist = !0);
              const c = t.getModel().depth;
              isNaN(c) || r.set('zIndex', c), (n[t.get('id')] = r), this.set('itemMap', n);
            }
          }),
          (e.prototype.updateOneNodeKeyShape = function (t, e) {
            const n = this.get('itemMap') || {};
            let r = n[t.get('id')];
            const i = t.getBBox();
            const o = t.get('keyShape').clone();
            const a = o.attr();
            let s = { x: i.centerX, y: i.centerY };
            r ? (s = Object.assign(a, s)) : ((r = o), e.add(r));
            const u = r.get('type');
            (u !== 'rect' && u !== 'image') || ((s.x = i.minX), (s.y = i.minY)),
              r.attr(s),
              t.isVisible() ? r.show() : r.hide(),
              (r.exist = !0);
            const c = t.getModel().depth;
            isNaN(c) || r.set('zIndex', c), (n[t.get('id')] = r), this.set('itemMap', n);
          }),
          (e.prototype.updateDelegateShapes = function () {
            const t = this;
            const e = this._cfgs.graph;
            const n = this.get('canvas');
            const r = n.get('children')[0] || n.addGroup();
            Object(gt.f)(e.getEdges(), (e) => {
              t.updateOneEdgeKeyShape(e, r);
            }),
              Object(gt.f)(e.getNodes(), (e) => {
                t.updateOneNodeDelegateShape(e, r);
              });
            const i = e.getCombos();
            if (i && i.length) {
              const o =
                r.find((t) => {
                  return t.get('name') === 'comboGroup';
                }) || r.addGroup({ name: 'comboGroup' });
              setTimeout(() => {
                t.destroyed ||
                  (Object(gt.f)(i, (e) => {
                    t.updateOneComboKeyShape(e, o);
                  }),
                  o == null || o.sort(),
                  o == null || o.toBack(),
                  t.updateCanvas());
              }, 250);
            }
            this.clearDestroyedShapes();
          }),
          (e.prototype.clearDestroyedShapes = function () {
            const t = this.get('itemMap') || {};
            const e = Object.keys(t);
            if (e && e.length !== 0)
              for (let n = e.length - 1; n >= 0; n--) {
                const r = t[e[n]];
                const i = r.exist;
                (r.exist = !1), i || (r.remove(), delete t[e[n]]);
              }
          }),
          (e.prototype.updateOneEdgeKeyShape = function (t, e) {
            const n = this.get('itemMap') || {};
            let r = n[t.get('id')];
            if (r) {
              const i = t.get('keyShape').attr('path');
              r.attr('path', i);
            } else (r = t.get('keyShape').clone()), e.add(r);
            t.isVisible() ? r.show() : r.hide(),
              (r.exist = !0),
              (n[t.get('id')] = r),
              this.set('itemMap', n);
          }),
          (e.prototype.updateOneNodeDelegateShape = function (t, e) {
            const n = this.get('delegateStyle');
            const r = this.get('itemMap') || {};
            let i = r[t.get('id')];
            const o = t.getBBox();
            if (i) {
              const a = { x: o.minX, y: o.minY, width: o.width, height: o.height };
              i.attr(a);
            } else
              i = e.addShape('rect', {
                attrs: Object(h.a)({ x: o.minX, y: o.minY, width: o.width, height: o.height }, n),
                name: 'minimap-node-shape',
              });
            t.isVisible() ? i.show() : i.hide(),
              (i.exist = !0),
              (r[t.get('id')] = i),
              this.set('itemMap', r);
          }),
          (e.prototype.init = function () {
            this.initContainer(),
              this.get('graph').on('afterupdateitem', this.handleUpdateCanvas),
              this.get('graph').on('afteritemstatechange', this.handleUpdateCanvas),
              this.get('graph').on('afteradditem', this.handleUpdateCanvas),
              this.get('graph').on('afterremoveitem', this.handleUpdateCanvas),
              this.get('graph').on('afterrender', this.handleUpdateCanvas),
              this.get('graph').on('afterlayout', this.handleUpdateCanvas);
          }),
          (e.prototype.initContainer = function () {
            const t = this.get('graph');
            const e = this.get('size');
            const n = this.get('className');
            let r = this.get('container');
            const i = Br(
              `<div class='${n}' style='width: ${e[0]}px; height: ${e[1]}px; overflow: hidden'></div>`,
            );
            Object(gt.y)(r) && (r = document.getElementById(r)),
              r ? r.appendChild(i) : t.get('container').appendChild(i),
              this.set('container', i);
            let o;
            const a = Br('<div class="g6-minimap-container" style="position: relative;"></div>');
            i.appendChild(a),
              a.addEventListener('dragenter', (t) => {
                t.preventDefault();
              }),
              a.addEventListener('dragover', (t) => {
                t.preventDefault();
              }),
              (o =
                t.get('renderer') === 'svg'
                  ? new uo.Canvas({ container: a, width: e[0], height: e[1] })
                  : new so.Canvas({ container: a, width: e[0], height: e[1] })),
              this.set('canvas', o),
              this.updateCanvas();
          }),
          (e.prototype.updateCanvas = function () {
            if (!this.destroyed && this.get('refresh')) {
              const t = this.get('graph');
              if (!t.get('destroyed')) {
                this.get('viewportChange') &&
                  (this.set('viewportChange', !1), this.updateViewport());
                const e = this.get('size');
                const n = this.get('canvas');
                const r = this.get('type');
                const i = this.get('padding');
                if (!n.destroyed) {
                  switch (r) {
                    case 'default':
                      this.updateGraphShapes();
                      break;
                    case 'keyShape':
                      this.updateKeyShapes();
                      break;
                    case 'delegate':
                      this.updateDelegateShapes();
                  }
                  const o = n.get('children')[0];
                  if (o) {
                    o.resetMatrix();
                    const a = o.getCanvasBBox();
                    const s = t.get('canvas').getCanvasBBox();
                    const u = t.getZoom() || 1;
                    let c = s.width / u;
                    let h = s.height / u;
                    Number.isFinite(a.width) && ((c = co(a.width, c)), (h = co(a.height, h))),
                      (c += 2 * i),
                      (h += 2 * i);
                    const l = Math.min(e[0] / c, e[1] / h);
                    let d = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    let f = 0;
                    let p = 0;
                    Number.isFinite(a.minX) && (f = -a.minX),
                      Number.isFinite(a.minY) && (p = -a.minY);
                    const g = (e[0] - (c - 2 * i) * l) / 2;
                    const y = (e[1] - (h - 2 * i) * l) / 2;
                    (d = ho(d, [
                      ['t', f, p],
                      ['s', l, l],
                      ['t', g, y],
                    ])),
                      o.setMatrix(d),
                      this.set('ratio', l),
                      this.set('totaldx', g + f * l),
                      this.set('totaldy', y + p * l),
                      this.set('dx', g),
                      this.set('dy', y),
                      this.updateViewport();
                  }
                }
              }
            }
          }),
          (e.prototype.getCanvas = function () {
            return this.get('canvas');
          }),
          (e.prototype.getViewport = function () {
            return this.get('viewport');
          }),
          (e.prototype.getContainer = function () {
            return this.get('container');
          }),
          (e.prototype.destroy = function () {
            this.get('canvas').destroy();
            const t = this.get('container');
            t.parentNode.removeChild(t);
          }),
          e
        );
      })(Qe);
      function fo(t, e, n) {
        const r = t.x - e.x;
        const i = t.y - e.y;
        return !n || Math.abs(r) > n || Math.abs(i) > n ? Math.sqrt(r * r + i * i) : n;
      }
      function po(t, e) {
        const n = (e.source.y - e.target.y) / (e.source.x - e.target.x);
        const r = (n * n * e.source.x + n * (t.y - e.source.y) + t.x) / (n * n + 1);
        return { x: r, y: n * (r - e.source.x) + e.source.y };
      }
      var go = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              edgeBundles: [],
              edgePoints: [],
              K: 0.1,
              lambda: 0.1,
              divisions: 1,
              divRate: 2,
              cycles: 6,
              iterations: 90,
              iterRate: 0.6666667,
              bundleThreshold: 0.6,
              eps: 1e-6,
              onLayoutEnd() {},
              onTick() {},
            };
          }),
          (e.prototype.init = function () {
            const t = this.get('graph');
            const e = this.get('onTick');
            this.set('tick', () => {
              e && e(), t.refreshPositions();
            });
          }),
          (e.prototype.bundling = function (t) {
            const e = this;
            if ((e.set('data', t), !e.isTicking())) {
              const n = t.edges || [];
              const r = t.nodes || [];
              const i = {};
              let o = !1;
              if (
                (r.forEach((t) => {
                  (t.x !== null && !t.y !== null && void 0 !== t.x && void 0 !== !t.y) || (o = !0),
                    (i[t.id] = t);
                }),
                o)
              )
                throw new Error('please layout the graph or assign x and y for nodes first');
              e.set('nodeIdMap', i);
              let a = e.get('divisions');
              const s = e.get('divRate');
              let u = e.divideEdges(a);
              e.set('edgePoints', u);
              const c = e.getEdgeBundles();
              e.set('edgeBundles', c);
              for (
                var h = e.get('cycles'),
                  l = e.get('iterations'),
                  d = e.get('iterRate'),
                  f = e.get('lambda'),
                  p = 0;
                p < h;
                p++
              ) {
                for (
                  let g = function (t) {
                      const r = [];
                      n.forEach((t, n) => {
                        if (t.source !== t.target) {
                          const o = i[t.source];
                          const s = i[t.target];
                          r[n] = e.getEdgeForces({ source: o, target: s }, n, a, f);
                          for (let c = 0; c < a + 1; c++)
                            (u[n][c].x += r[n][c].x), (u[n][c].y += r[n][c].y);
                        }
                      });
                    },
                    y = 0;
                  y < l;
                  y++
                )
                  g();
                (f /= 2), (a *= s), (l *= d), (u = e.divideEdges(a)), e.set('edgePoints', u);
              }
              n.forEach((t, e) => {
                t.source !== t.target &&
                  ((t.type = 'polyline'), (t.controlPoints = u[e].slice(1, u[e].length - 1)));
              }),
                e.get('graph').refresh();
            }
          }),
          (e.prototype.updateBundling = function (t) {
            const e = this;
            const n = t.data;
            if (
              (n && e.set('data', n),
              e.get('ticking') && e.set('ticking', !1),
              Object.keys(t).forEach((n) => {
                e.set(n, t[n]);
              }),
              t.onTick)
            ) {
              const r = this.get('graph');
              e.set('tick', () => {
                t.onTick(), r.refresh();
              });
            }
            e.bundling(n);
          }),
          (e.prototype.divideEdges = function (t) {
            const e = this;
            const n = e.get('data').edges;
            const r = e.get('nodeIdMap');
            let i = e.get('edgePoints');
            return (
              (i && void 0 !== i) || (i = []),
              n.forEach((n, o) => {
                (i[o] && void 0 !== i[o]) || (i[o] = []);
                const a = r[n.source];
                const s = r[n.target];
                if (t === 1)
                  i[o].push({ x: a.x, y: a.y }),
                    i[o].push({ x: 0.5 * (a.x + s.x), y: 0.5 * (a.y + s.y) }),
                    i[o].push({ x: s.x, y: s.y });
                else {
                  const u =
                    (i[o] && i[o] !== []
                      ? e.getEdgeLength(i[o])
                      : fo({ x: a.x, y: a.y }, { x: s.x, y: s.y })) /
                    (t + 1);
                  let c = u;
                  const h = [{ x: a.x, y: a.y }];
                  i[o].forEach((t, e) => {
                    if (e !== 0) {
                      for (var n = fo(t, i[o][e - 1]); n > c; ) {
                        const r = c / n;
                        const a = { x: i[o][e - 1].x, y: i[o][e - 1].y };
                        (a.x += r * (t.x - i[o][e - 1].x)),
                          (a.y += r * (t.y - i[o][e - 1].y)),
                          h.push(a),
                          (n -= c),
                          (c = u);
                      }
                      c -= n;
                    }
                  }),
                    h.push({ x: s.x, y: s.y }),
                    (i[o] = h);
                }
              }),
              i
            );
          }),
          (e.prototype.getEdgeLength = function (t) {
            let e = 0;
            return (
              t.forEach((n, r) => {
                r !== 0 && (e += fo(n, t[r - 1]));
              }),
              e
            );
          }),
          (e.prototype.getEdgeBundles = function () {
            const t = this;
            const e = t.get('data').edges || [];
            const n = t.get('bundleThreshold');
            const r = t.get('nodeIdMap');
            let i = t.get('edgeBundles');
            return (
              i || (i = []),
              e.forEach((t, e) => {
                (i[e] && void 0 !== i[e]) || (i[e] = []);
              }),
              e.forEach((o, a) => {
                const s = r[o.source];
                const u = r[o.target];
                e.forEach((e, o) => {
                  if (!(o <= a)) {
                    const c = r[e.source];
                    const h = r[e.target];
                    t.getBundleScore({ source: s, target: u }, { source: c, target: h }) >= n &&
                      (i[a].push(o), i[o].push(a));
                  }
                });
              }),
              i
            );
          }),
          (e.prototype.getBundleScore = function (t, e) {
            return (
              (t.vx = t.target.x - t.source.x),
              (t.vy = t.target.y - t.source.y),
              (e.vx = e.target.x - e.source.x),
              (e.vy = e.target.y - e.source.y),
              (t.length = fo({ x: t.source.x, y: t.source.y }, { x: t.target.x, y: t.target.y })),
              (e.length = fo({ x: e.source.x, y: e.source.y }, { x: e.target.x, y: e.target.y })),
              this.getAngleScore(t, e) *
                this.getScaleScore(t, e) *
                this.getPositionScore(t, e) *
                this.getVisibilityScore(t, e)
            );
          }),
          (e.prototype.getAngleScore = function (t, e) {
            return (
              (function (t, e) {
                return t.x * e.x + t.y * e.y;
              })({ x: t.vx, y: t.vy }, { x: e.vx, y: e.vy }) /
              (t.length * e.length)
            );
          }),
          (e.prototype.getScaleScore = function (t, e) {
            const n = (t.length + e.length) / 2;
            return 2 / (n / Math.min(t.length, e.length) + Math.max(t.length, e.length) / n);
          }),
          (e.prototype.getPositionScore = function (t, e) {
            const n = (t.length + e.length) / 2;
            return (
              n /
              (n +
                fo(
                  { x: (t.source.x + t.target.x) / 2, y: (t.source.y + t.target.y) / 2 },
                  { x: (e.source.x + e.target.x) / 2, y: (e.source.y + e.target.y) / 2 },
                ))
            );
          }),
          (e.prototype.getVisibilityScore = function (t, e) {
            const n = this.getEdgeVisibility(t, e);
            const r = this.getEdgeVisibility(e, t);
            return n < r ? n : r;
          }),
          (e.prototype.getEdgeVisibility = function (t, e) {
            const n = po(e.source, t);
            const r = po(e.target, t);
            const i = { x: (n.x + r.x) / 2, y: (n.y + r.y) / 2 };
            const o = { x: (t.source.x + t.target.x) / 2, y: (t.source.y + t.target.y) / 2 };
            return Math.max(0, 1 - (2 * fo(i, o)) / fo(n, r));
          }),
          (e.prototype.getEdgeForces = function (t, e, n, r) {
            for (
              var i = this.get('edgePoints'),
                o = this.get('K') / (fo(t.source, t.target) * (n + 1)),
                a = [{ x: 0, y: 0 }],
                s = 1;
              s < n;
              s++
            ) {
              const u = { x: 0, y: 0 };
              const c = this.getSpringForce(
                { pre: i[e][s - 1], cur: i[e][s], next: i[e][s + 1] },
                o,
              );
              const h = this.getElectrostaticForce(s, e);
              (u.x = r * (c.x + h.x)), (u.y = r * (c.y + h.y)), a.push(u);
            }
            return a.push({ x: 0, y: 0 }), a;
          }),
          (e.prototype.getSpringForce = function (t, e) {
            let n = t.pre.x + t.next.x - 2 * t.cur.x;
            let r = t.pre.y + t.next.y - 2 * t.cur.y;
            return { x: (n *= e), y: (r *= e) };
          }),
          (e.prototype.getElectrostaticForce = function (t, e) {
            const n = this.get('eps');
            const r = this.get('edgeBundles');
            const i = this.get('edgePoints');
            const o = r[e];
            const a = { x: 0, y: 0 };
            return (
              o.forEach((r) => {
                const o = { x: i[r][t].x - i[e][t].x, y: i[r][t].y - i[e][t].y };
                if (Math.abs(o.x) > n || Math.abs(o.y) > n) {
                  const s = 1 / fo(i[r][t], i[e][t]);
                  (a.x += o.x * s), (a.y += o.y * s);
                }
              }),
              a
            );
          }),
          (e.prototype.isTicking = function () {
            return this.get('ticking');
          }),
          (e.prototype.getSimulation = function () {
            return this.get('forceSimulation');
          }),
          (e.prototype.destroy = function () {
            this.get('ticking') && this.getSimulation().stop(), t.prototype.destroy.call(this);
          }),
          e
        );
      })(Qe);
      var yo = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              offsetX: 6,
              offsetY: 6,
              handleMenuClick: void 0,
              getContent(t) {
                return "\n          <div class='f6-contextmenu-ul'>\n            <div class='f6-contextmenu-li'>菜单项1</div>\n            <div class='f6-contextmenu-li'>菜单项2</div>\n          </div>\n        ";
              },
              getCss() {
                return '\n        .f6-contextmenu-ul {\n          display: flex;\n          width: 100;\n          border: 1 solid #e2e2e2;\n          border-radius: 4;\n          font-size: 12;\n          color: #545454;\n          padding: 10 8;\n          background-color: rgba(255, 255, 255, 0.9);\n        }\n        .f6-contextmenu-li {\n            opacity: 0;\n            justify-content: center;\n            text-align: center;\n            height: 50;\n          }\n        ';
              },
              shouldBegin(t) {
                return !0;
              },
              onHide() {
                return !0;
              },
              itemTypes: ['node', 'edge', 'combo'],
            };
          }),
          (e.prototype.getEvents = function () {
            return { press: 'onMenuShow' };
          }),
          (e.prototype.init = function () {
            const t = this;
            this.get('graph').on('tap', () => {
              t.onMenuHide();
            });
          }),
          (e.prototype.onMenuShow = function (t) {
            let e;
            let n;
            t.preventDefault();
            const r = this.get('itemTypes');
            if (t.item) {
              if (t.item && t.item.getType && r.indexOf(t.item.getType()) === -1)
                return void this.onMenuHide();
            } else if (r.indexOf('canvas') === -1) return void this.onMenuHide();
            if (this.get('shouldBegin')(t)) {
              const i = this.get('className');
              const o = this.get('graph');
              const a = o.get('uiGroup');
              const s = this.get('getContent');
              const u = this.get('getCss');
              const c = `\n    root {\n      display: flex;\n      font-size: 12;\n      color: #545454;\n    }\n    text {\n      height: 12;\n      opacity: 1;\n    }\n    ${
                (e = u == null ? void 0 : u()) !== null && void 0 !== e ? e : ''
              }\n  `;
              const h = H(`<root class=${i || 'g6-component-contextmenu'}>${s(t, o)}</root>`, c, a);
              (n = this.get('menu')) === null || void 0 === n || n.remove(), this.set('menu', h);
              const l = this.get('handleMenuClick');
              if (l) {
                const d = function (e) {
                  let n;
                  e.stopPropagation(),
                    l((n = e.uiNode) === null || void 0 === n ? void 0 : n.attributes, t.item, o);
                };
                this.set('handleMenuClickWrapper', d), h.on('tap', d);
              }
              const f = o.get('width');
              const p = o.get('height');
              const g = h.width;
              const y = h.height;
              const v = (h.left, h.right, this.get('offsetX') || 0);
              const m = this.get('offsetY') || 0;
              let b = t.canvasX + v;
              let x = t.canvasY + m;
              b + g > f && (b = t.canvasX - g - v),
                x + y > p && (x = t.canvasY - y - m),
                h.setStyle('left', b),
                h.setStyle('top', x);
            }
          }),
          (e.prototype.onMenuHide = function () {
            const t = this.get('menu');
            t == null || t.remove();
          }),
          (e.prototype.destroy = function () {
            const t = this.get('menu');
            t == null || t.remove();
          }),
          e
        );
      })(Qe);
      const vo = {
        TimeBar: $e,
        SnapLine: Ki,
        Tooltip: Qi,
        Legend: to,
        ZoomSlider: eo,
        EdgeFilterLens: io,
        Fisheye: ao,
        MiniMap: lo,
        Bundling: go,
        Menu: yo,
      };
      e.default = vo;
    },
  ]).default;
});
// # sourceMappingURL=f6Plugin.js.map
