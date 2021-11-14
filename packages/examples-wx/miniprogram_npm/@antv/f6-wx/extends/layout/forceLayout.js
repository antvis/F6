!(function (t, n) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = n())
    : typeof define === 'function' && define.amd
    ? define([], n)
    : typeof exports === 'object'
    ? (exports.f6 = n())
    : (t.f6 = n());
})(this, () => {
  return (function (t) {
    const n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      const o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && typeof t === 'object' && t && t.__esModule) return t;
        const r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & n && typeof t !== 'string')
        )
          for (const o in t)
            e.d(
              r,
              o,
              ((n) => {
                return t[n];
              }).bind(null, o),
            );
        return r;
      }),
      (e.n = function (t) {
        const n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, 'a', n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ''),
      e((e.s = 480))
    );
  })({
    10(t, n, e) {
      'use strict';
      const r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, n, e, r) {
              void 0 === r && (r = e),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get() {
                    return n[e];
                  },
                });
            }
          : function (t, n, e, r) {
              void 0 === r && (r = e), (t[r] = n[e]);
            });
      const o =
        (this && this.__exportStar) ||
        function (t, n) {
          for (const e in t)
            e === 'default' || Object.prototype.hasOwnProperty.call(n, e) || r(n, t, e);
        };
      Object.defineProperty(n, '__esModule', { value: !0 }),
        o(e(11), n),
        o(e(12), n),
        o(e(13), n),
        o(e(14), n),
        o(e(15), n),
        o(e(16), n);
    },
    11(t, n, e) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.camelize = n.isString = void 0);
      n.isString = function (t) {
        return typeof t === 'string';
      };
      let r;
      let o;
      const i = /-(\w)/g;
      n.camelize =
        ((r = function (t) {
          return t.replace(i, (t, n) => {
            return n ? n.toUpperCase() : '';
          });
        }),
        (o = Object.create(null)),
        function (t) {
          return o[t] || (o[t] = r(t));
        });
    },
    12(t, n, e) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.isArray = void 0),
        (n.isArray = Array.isArray);
    },
    13(t, n, e) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.toNumber = n.isNaN = n.isNumber = void 0);
      n.isNumber = function (t) {
        return typeof t === 'number';
      };
      n.isNaN = function (t) {
        return Number.isNaN(Number(t));
      };
      n.toNumber = function (t) {
        const e = parseFloat(t);
        return n.isNaN(e) ? t : e;
      };
    },
    14(t, n, e) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.traverseTreeUp =
          n.scaleMatrix =
          n.getAdjMatrix =
          n.floydWarshall =
          n.getDegree =
            void 0);
      n.getDegree = function (t, n, e) {
        for (var r = [], o = 0; o < t; o++) r[o] = 0;
        return e
          ? (e.forEach((t) => {
              t.source && (r[n[t.source]] += 1), t.target && (r[n[t.target]] += 1);
            }),
            r)
          : r;
      };
      n.floydWarshall = function (t) {
        for (var n = [], e = t.length, r = 0; r < e; r += 1) {
          n[r] = [];
          for (var o = 0; o < e; o += 1)
            r === o
              ? (n[r][o] = 0)
              : t[r][o] !== 0 && t[r][o]
              ? (n[r][o] = t[r][o])
              : (n[r][o] = 1 / 0);
        }
        for (let i = 0; i < e; i += 1)
          for (r = 0; r < e; r += 1)
            for (o = 0; o < e; o += 1) n[r][o] > n[r][i] + n[i][o] && (n[r][o] = n[r][i] + n[i][o]);
        return n;
      };
      n.getAdjMatrix = function (t, n) {
        const e = t.nodes;
        const r = t.edges;
        const o = [];
        const i = {};
        if (!e) throw new Error('invalid nodes data!');
        return (
          e &&
            e.forEach((t, n) => {
              i[t.id] = n;
              o.push([]);
            }),
          r &&
            r.forEach((t) => {
              const e = t.source;
              const r = t.target;
              const u = i[e];
              const c = i[r];
              (o[u][c] = 1), n || (o[c][u] = 1);
            }),
          o
        );
      };
      n.scaleMatrix = function (t, n) {
        const e = [];
        return (
          t.forEach((t) => {
            const r = [];
            t.forEach((t) => {
              r.push(t * n);
            }),
              e.push(r);
          }),
          e
        );
      };
      n.traverseTreeUp = function (t, n) {
        typeof n === 'function' &&
          (function t(n, e) {
            if (n && n.children)
              for (let r = n.children.length - 1; r >= 0; r--) if (!t(n.children[r], e)) return;
            return !!e(n);
          })(t, n);
      };
    },
    15(t, n, e) {
      'use strict';
      function r(t) {
        return (r =
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
      var o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var n, e = 1, r = arguments.length; e < r; e++)
                for (const o in (n = arguments[e]))
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.clone = n.isObject = void 0);
      n.isObject = function (t) {
        return t !== null && r(t) === 'object';
      };
      n.clone = function (t) {
        if (t === null) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof Array) {
          const e = [];
          return (
            t.forEach((t) => {
              e.push(t);
            }),
            e.map((t) => {
              return n.clone(t);
            })
          );
        }
        if (r(t) === 'object' && t !== {}) {
          const i = o({}, t);
          return (
            Object.keys(i).forEach((t) => {
              i[t] = n.clone(i[t]);
            }),
            i
          );
        }
        return t;
      };
    },
    16(t, n, e) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.isFunction = void 0);
      n.isFunction = function (t) {
        return typeof t === 'function';
      };
    },
    216(t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'forceCenter', () => {
          return r;
        }),
        e.d(n, 'forceCollide', () => {
          return v;
        }),
        e.d(n, 'forceLink', () => {
          return b;
        }),
        e.d(n, 'forceManyBody', () => {
          return V;
        }),
        e.d(n, 'forceRadial', () => {
          return Z;
        }),
        e.d(n, 'forceSimulation', () => {
          return Q;
        }),
        e.d(n, 'forceX', () => {
          return $;
        }),
        e.d(n, 'forceY', () => {
          return tt;
        });
      var r = function (t, n) {
        let e;
        let r = 1;
        function o() {
          let o;
          let i;
          const u = e.length;
          let c = 0;
          let f = 0;
          for (o = 0; o < u; ++o) (c += (i = e[o]).x), (f += i.y);
          for (c = (c / u - t) * r, f = (f / u - n) * r, o = 0; o < u; ++o)
            ((i = e[o]).x -= c), (i.y -= f);
        }
        return (
          t == null && (t = 0),
          n == null && (n = 0),
          (o.initialize = function (t) {
            e = t;
          }),
          (o.x = function (n) {
            return arguments.length ? ((t = +n), o) : t;
          }),
          (o.y = function (t) {
            return arguments.length ? ((n = +t), o) : n;
          }),
          (o.strength = function (t) {
            return arguments.length ? ((r = +t), o) : r;
          }),
          o
        );
      };
      function o(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        let o;
        let i;
        let u;
        let c;
        let f;
        let a;
        let l;
        let s;
        let h;
        let d = t._root;
        const y = { data: r };
        let p = t._x0;
        let v = t._y0;
        let g = t._x1;
        let _ = t._y1;
        if (!d) return (t._root = y), t;
        for (; d.length; )
          if (
            ((a = n >= (i = (p + g) / 2)) ? (p = i) : (g = i),
            (l = e >= (u = (v + _) / 2)) ? (v = u) : (_ = u),
            (o = d),
            !(d = d[(s = (l << 1) | a)]))
          )
            return (o[s] = y), t;
        if (((c = +t._x.call(null, d.data)), (f = +t._y.call(null, d.data)), n === c && e === f))
          return (y.next = d), o ? (o[s] = y) : (t._root = y), t;
        do {
          (o = o ? (o[s] = new Array(4)) : (t._root = new Array(4))),
            (a = n >= (i = (p + g) / 2)) ? (p = i) : (g = i),
            (l = e >= (u = (v + _) / 2)) ? (v = u) : (_ = u);
        } while ((s = (l << 1) | a) == (h = ((f >= u) << 1) | (c >= i)));
        return (o[h] = d), (o[s] = y), t;
      }
      const i = function (t, n, e, r, o) {
        (this.node = t), (this.x0 = n), (this.y0 = e), (this.x1 = r), (this.y1 = o);
      };
      function u(t) {
        return t[0];
      }
      function c(t) {
        return t[1];
      }
      function f(t, n, e) {
        const r = new a(n == null ? u : n, e == null ? c : e, NaN, NaN, NaN, NaN);
        return t == null ? r : r.addAll(t);
      }
      function a(t, n, e, r, o, i) {
        (this._x = t),
          (this._y = n),
          (this._x0 = e),
          (this._y0 = r),
          (this._x1 = o),
          (this._y1 = i),
          (this._root = void 0);
      }
      function l(t) {
        for (var n = { data: t.data }, e = n; (t = t.next); ) e = e.next = { data: t.data };
        return n;
      }
      const s = (f.prototype = a.prototype);
      (s.copy = function () {
        let t;
        let n;
        const e = new a(this._x, this._y, this._x0, this._y0, this._x1, this._y1);
        let r = this._root;
        if (!r) return e;
        if (!r.length) return (e._root = l(r)), e;
        for (t = [{ source: r, target: (e._root = new Array(4)) }]; (r = t.pop()); )
          for (let o = 0; o < 4; ++o)
            (n = r.source[o]) &&
              (n.length
                ? t.push({ source: n, target: (r.target[o] = new Array(4)) })
                : (r.target[o] = l(n)));
        return e;
      }),
        (s.add = function (t) {
          const n = +this._x.call(null, t);
          const e = +this._y.call(null, t);
          return o(this.cover(n, e), n, e, t);
        }),
        (s.addAll = function (t) {
          let n;
          let e;
          let r;
          let i;
          const u = t.length;
          const c = new Array(u);
          const f = new Array(u);
          let a = 1 / 0;
          let l = 1 / 0;
          let s = -1 / 0;
          let h = -1 / 0;
          for (e = 0; e < u; ++e)
            isNaN((r = +this._x.call(null, (n = t[e])))) ||
              isNaN((i = +this._y.call(null, n))) ||
              ((c[e] = r),
              (f[e] = i),
              r < a && (a = r),
              r > s && (s = r),
              i < l && (l = i),
              i > h && (h = i));
          if (a > s || l > h) return this;
          for (this.cover(a, l).cover(s, h), e = 0; e < u; ++e) o(this, c[e], f[e], t[e]);
          return this;
        }),
        (s.cover = function (t, n) {
          if (isNaN((t = +t)) || isNaN((n = +n))) return this;
          let e = this._x0;
          let r = this._y0;
          let o = this._x1;
          let i = this._y1;
          if (isNaN(e)) (o = (e = Math.floor(t)) + 1), (i = (r = Math.floor(n)) + 1);
          else {
            for (var u, c, f = o - e || 1, a = this._root; e > t || t >= o || r > n || n >= i; )
              switch (
                ((c = ((n < r) << 1) | (t < e)), ((u = new Array(4))[c] = a), (a = u), (f *= 2), c)
              ) {
                case 0:
                  (o = e + f), (i = r + f);
                  break;
                case 1:
                  (e = o - f), (i = r + f);
                  break;
                case 2:
                  (o = e + f), (r = i - f);
                  break;
                case 3:
                  (e = o - f), (r = i - f);
              }
            this._root && this._root.length && (this._root = a);
          }
          return (this._x0 = e), (this._y0 = r), (this._x1 = o), (this._y1 = i), this;
        }),
        (s.data = function () {
          const t = [];
          return (
            this.visit((n) => {
              if (!n.length)
                do {
                  t.push(n.data);
                } while ((n = n.next));
            }),
            t
          );
        }),
        (s.extent = function (t) {
          return arguments.length
            ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
            : isNaN(this._x0)
            ? void 0
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ];
        }),
        (s.find = function (t, n, e) {
          let r;
          let o;
          let u;
          let c;
          let f;
          let a;
          let l;
          let s = this._x0;
          let h = this._y0;
          let d = this._x1;
          let y = this._y1;
          const p = [];
          let v = this._root;
          for (
            v && p.push(new i(v, s, h, d, y)),
              e == null
                ? (e = 1 / 0)
                : ((s = t - e), (h = n - e), (d = t + e), (y = n + e), (e *= e));
            (a = p.pop());

          )
            if (
              !(
                !(v = a.node) ||
                (o = a.x0) > d ||
                (u = a.y0) > y ||
                (c = a.x1) < s ||
                (f = a.y1) < h
              )
            )
              if (v.length) {
                const g = (o + c) / 2;
                const _ = (u + f) / 2;
                p.push(
                  new i(v[3], g, _, c, f),
                  new i(v[2], o, _, g, f),
                  new i(v[1], g, u, c, _),
                  new i(v[0], o, u, g, _),
                ),
                  (l = ((n >= _) << 1) | (t >= g)) &&
                    ((a = p[p.length - 1]),
                    (p[p.length - 1] = p[p.length - 1 - l]),
                    (p[p.length - 1 - l] = a));
              } else {
                const x = t - +this._x.call(null, v.data);
                const b = n - +this._y.call(null, v.data);
                const w = x * x + b * b;
                if (w < e) {
                  const m = Math.sqrt((e = w));
                  (s = t - m), (h = n - m), (d = t + m), (y = n + m), (r = v.data);
                }
              }
          return r;
        }),
        (s.remove = function (t) {
          if (isNaN((i = +this._x.call(null, t))) || isNaN((u = +this._y.call(null, t))))
            return this;
          let n;
          let e;
          let r;
          let o;
          let i;
          let u;
          let c;
          let f;
          let a;
          let l;
          let s;
          let h;
          let d = this._root;
          let y = this._x0;
          let p = this._y0;
          let v = this._x1;
          let g = this._y1;
          if (!d) return this;
          if (d.length)
            for (;;) {
              if (
                ((a = i >= (c = (y + v) / 2)) ? (y = c) : (v = c),
                (l = u >= (f = (p + g) / 2)) ? (p = f) : (g = f),
                (n = d),
                !(d = d[(s = (l << 1) | a)]))
              )
                return this;
              if (!d.length) break;
              (n[(s + 1) & 3] || n[(s + 2) & 3] || n[(s + 3) & 3]) && ((e = n), (h = s));
            }
          for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this;
          return (
            (o = d.next) && delete d.next,
            r
              ? (o ? (r.next = o) : delete r.next, this)
              : n
              ? (o ? (n[s] = o) : delete n[s],
                (d = n[0] || n[1] || n[2] || n[3]) &&
                  d === (n[3] || n[2] || n[1] || n[0]) &&
                  !d.length &&
                  (e ? (e[h] = d) : (this._root = d)),
                this)
              : ((this._root = o), this)
          );
        }),
        (s.removeAll = function (t) {
          for (let n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
          return this;
        }),
        (s.root = function () {
          return this._root;
        }),
        (s.size = function () {
          let t = 0;
          return (
            this.visit((n) => {
              if (!n.length)
                do {
                  ++t;
                } while ((n = n.next));
            }),
            t
          );
        }),
        (s.visit = function (t) {
          let n;
          let e;
          let r;
          let o;
          let u;
          let c;
          const f = [];
          let a = this._root;
          for (a && f.push(new i(a, this._x0, this._y0, this._x1, this._y1)); (n = f.pop()); )
            if (!t((a = n.node), (r = n.x0), (o = n.y0), (u = n.x1), (c = n.y1)) && a.length) {
              const l = (r + u) / 2;
              const s = (o + c) / 2;
              (e = a[3]) && f.push(new i(e, l, s, u, c)),
                (e = a[2]) && f.push(new i(e, r, s, l, c)),
                (e = a[1]) && f.push(new i(e, l, o, u, s)),
                (e = a[0]) && f.push(new i(e, r, o, l, s));
            }
          return this;
        }),
        (s.visitAfter = function (t) {
          let n;
          const e = [];
          const r = [];
          for (
            this._root && e.push(new i(this._root, this._x0, this._y0, this._x1, this._y1));
            (n = e.pop());

          ) {
            const o = n.node;
            if (o.length) {
              var u;
              const c = n.x0;
              const f = n.y0;
              const a = n.x1;
              const l = n.y1;
              const s = (c + a) / 2;
              const h = (f + l) / 2;
              (u = o[0]) && e.push(new i(u, c, f, s, h)),
                (u = o[1]) && e.push(new i(u, s, f, a, h)),
                (u = o[2]) && e.push(new i(u, c, h, s, l)),
                (u = o[3]) && e.push(new i(u, s, h, a, l));
            }
            r.push(n);
          }
          for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
          return this;
        }),
        (s.x = function (t) {
          return arguments.length ? ((this._x = t), this) : this._x;
        }),
        (s.y = function (t) {
          return arguments.length ? ((this._y = t), this) : this._y;
        });
      const h = function (t) {
        return function () {
          return t;
        };
      };
      const d = function (t) {
        return 1e-6 * (t() - 0.5);
      };
      function y(t) {
        return t.x + t.vx;
      }
      function p(t) {
        return t.y + t.vy;
      }
      var v = function (t) {
        let n;
        let e;
        let r;
        let o = 1;
        let i = 1;
        function u() {
          for (var t, u, a, l, s, h, v, g = n.length, _ = 0; _ < i; ++_)
            for (u = f(n, y, p).visitAfter(c), t = 0; t < g; ++t)
              (a = n[t]),
                (h = e[a.index]),
                (v = h * h),
                (l = a.x + a.vx),
                (s = a.y + a.vy),
                u.visit(x);
          function x(t, n, e, i, u) {
            const c = t.data;
            let f = t.r;
            let y = h + f;
            if (!c) return n > l + y || i < l - y || e > s + y || u < s - y;
            if (c.index > a.index) {
              let p = l - c.x - c.vx;
              let g = s - c.y - c.vy;
              let _ = p * p + g * g;
              _ < y * y &&
                (p === 0 && (_ += (p = d(r)) * p),
                g === 0 && (_ += (g = d(r)) * g),
                (_ = ((y - (_ = Math.sqrt(_))) / _) * o),
                (a.vx += (p *= _) * (y = (f *= f) / (v + f))),
                (a.vy += (g *= _) * y),
                (c.vx -= p * (y = 1 - y)),
                (c.vy -= g * y));
            }
          }
        }
        function c(t) {
          if (t.data) return (t.r = e[t.data.index]);
          for (let n = (t.r = 0); n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r);
        }
        function a() {
          if (n) {
            let r;
            let o;
            const i = n.length;
            for (e = new Array(i), r = 0; r < i; ++r) (o = n[r]), (e[o.index] = +t(o, r, n));
          }
        }
        return (
          typeof t !== 'function' && (t = h(t == null ? 1 : +t)),
          (u.initialize = function (t, e) {
            (n = t), (r = e), a();
          }),
          (u.iterations = function (t) {
            return arguments.length ? ((i = +t), u) : i;
          }),
          (u.strength = function (t) {
            return arguments.length ? ((o = +t), u) : o;
          }),
          (u.radius = function (n) {
            return arguments.length ? ((t = typeof n === 'function' ? n : h(+n)), a(), u) : t;
          }),
          u
        );
      };
      function g(t) {
        return (g =
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
      function _(t) {
        return t.index;
      }
      function x(t, n) {
        const e = t.get(n);
        if (!e) throw new Error(`node not found: ${n}`);
        return e;
      }
      var b = function (t) {
        let n;
        let e;
        let r;
        let o;
        let i;
        let u;
        let c = _;
        let f = function (t) {
          return 1 / Math.min(o[t.source.index], o[t.target.index]);
        };
        let a = h(30);
        let l = 1;
        function s(r) {
          for (let o = 0, c = t.length; o < l; ++o)
            for (var f, a, s, h, y, p, v, g = 0; g < c; ++g)
              (a = (f = t[g]).source),
                (h = (s = f.target).x + s.vx - a.x - a.vx || d(u)),
                (y = s.y + s.vy - a.y - a.vy || d(u)),
                (h *= p = (((p = Math.sqrt(h * h + y * y)) - e[g]) / p) * r * n[g]),
                (y *= p),
                (s.vx -= h * (v = i[g])),
                (s.vy -= y * v),
                (a.vx += h * (v = 1 - v)),
                (a.vy += y * v);
        }
        function y() {
          if (r) {
            let u;
            let f;
            const a = r.length;
            const l = t.length;
            const s = new Map(
              r.map((t, n) => {
                return [c(t, n, r), t];
              }),
            );
            for (u = 0, o = new Array(a); u < l; ++u)
              ((f = t[u]).index = u),
                g(f.source) !== 'object' && (f.source = x(s, f.source)),
                g(f.target) !== 'object' && (f.target = x(s, f.target)),
                (o[f.source.index] = (o[f.source.index] || 0) + 1),
                (o[f.target.index] = (o[f.target.index] || 0) + 1);
            for (u = 0, i = new Array(l); u < l; ++u)
              (f = t[u]), (i[u] = o[f.source.index] / (o[f.source.index] + o[f.target.index]));
            (n = new Array(l)), p(), (e = new Array(l)), v();
          }
        }
        function p() {
          if (r) for (let e = 0, o = t.length; e < o; ++e) n[e] = +f(t[e], e, t);
        }
        function v() {
          if (r) for (let n = 0, o = t.length; n < o; ++n) e[n] = +a(t[n], n, t);
        }
        return (
          t == null && (t = []),
          (s.initialize = function (t, n) {
            (r = t), (u = n), y();
          }),
          (s.links = function (n) {
            return arguments.length ? ((t = n), y(), s) : t;
          }),
          (s.id = function (t) {
            return arguments.length ? ((c = t), s) : c;
          }),
          (s.iterations = function (t) {
            return arguments.length ? ((l = +t), s) : l;
          }),
          (s.strength = function (t) {
            return arguments.length ? ((f = typeof t === 'function' ? t : h(+t)), p(), s) : f;
          }),
          (s.distance = function (t) {
            return arguments.length ? ((a = typeof t === 'function' ? t : h(+t)), v(), s) : a;
          }),
          s
        );
      };
      const w = { value() {} };
      function m() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
          if (!(t = `${arguments[n]}`) || t in r || /[\s.]/.test(t))
            throw new Error(`illegal type: ${t}`);
          r[t] = [];
        }
        return new S(r);
      }
      function S(t) {
        this._ = t;
      }
      function N(t, n) {
        return t
          .trim()
          .split(/^|\s+/)
          .map((t) => {
            let e = '';
            const r = t.indexOf('.');
            if ((r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))), t && !n.hasOwnProperty(t)))
              throw new Error(`unknown type: ${t}`);
            return { type: t, name: e };
          });
      }
      function O(t, n) {
        for (var e, r = 0, o = t.length; r < o; ++r) if ((e = t[r]).name === n) return e.value;
      }
      function k(t, n, e) {
        for (let r = 0, o = t.length; r < o; ++r)
          if (t[r].name === n) {
            (t[r] = w), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return e != null && t.push({ name: n, value: e }), t;
      }
      S.prototype = m.prototype = {
        constructor: S,
        on(t, n) {
          let e;
          const r = this._;
          const o = N(`${t}`, r);
          let i = -1;
          const u = o.length;
          if (!(arguments.length < 2)) {
            if (n != null && typeof n !== 'function') throw new Error(`invalid callback: ${n}`);
            for (; ++i < u; )
              if ((e = (t = o[i]).type)) r[e] = k(r[e], t.name, n);
              else if (n == null) for (e in r) r[e] = k(r[e], t.name, null);
            return this;
          }
          for (; ++i < u; ) if ((e = (t = o[i]).type) && (e = O(r[e], t.name))) return e;
        },
        copy() {
          const t = {};
          const n = this._;
          for (const e in n) t[e] = n[e].slice();
          return new S(t);
        },
        call(t, n) {
          if ((e = arguments.length - 2) > 0)
            for (var e, r, o = new Array(e), i = 0; i < e; ++i) o[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(t)) throw new Error(`unknown type: ${t}`);
          for (i = 0, e = (r = this._[t]).length; i < e; ++i) r[i].value.apply(n, o);
        },
        apply(t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error(`unknown type: ${t}`);
          for (let r = this._[t], o = 0, i = r.length; o < i; ++o) r[o].value.apply(n, e);
        },
      };
      const M = m;
      function j(t) {
        return (j =
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
      let E;
      let A;
      let P = 0;
      let z = 0;
      let D = 0;
      let T = 0;
      let L = 0;
      let F = 0;
      const U =
        (typeof performance === 'undefined' ? 'undefined' : j(performance)) === 'object' &&
        performance.now
          ? performance
          : Date;
      const C =
        (typeof window === 'undefined' ? 'undefined' : j(window)) === 'object' &&
        window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17);
            };
      function q() {
        return L || (C(B), (L = U.now() + F));
      }
      function B() {
        L = 0;
      }
      function Y() {
        this._call = this._time = this._next = null;
      }
      function R(t, n, e) {
        const r = new Y();
        return r.restart(t, n, e), r;
      }
      function G() {
        (L = (T = U.now()) + F), (P = z = 0);
        try {
          !(function () {
            q(), ++P;
            for (var t, n = E; n; ) (t = L - n._time) >= 0 && n._call.call(null, t), (n = n._next);
            --P;
          })();
        } finally {
          (P = 0),
            (function () {
              let t;
              let n;
              let e = E;
              let r = 1 / 0;
              for (; e; )
                e._call
                  ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                  : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (E = n)));
              (A = t), W(r);
            })(),
            (L = 0);
        }
      }
      function I() {
        const t = U.now();
        const n = t - T;
        n > 1e3 && ((F -= n), (T = t));
      }
      function W(t) {
        P ||
          (z && (z = clearTimeout(z)),
          t - L > 24
            ? (t < 1 / 0 && (z = setTimeout(G, t - U.now() - F)), D && (D = clearInterval(D)))
            : (D || ((T = U.now()), (D = setInterval(I, 1e3))), (P = 1), C(G)));
      }
      Y.prototype = R.prototype = {
        constructor: Y,
        restart(t, n, e) {
          if (typeof t !== 'function') throw new TypeError('callback is not a function');
          (e = (e == null ? q() : +e) + (n == null ? 0 : +n)),
            this._next || A === this || (A ? (A._next = this) : (E = this), (A = this)),
            (this._call = t),
            (this._time = e),
            W();
        },
        stop() {
          this._call && ((this._call = null), (this._time = 1 / 0), W());
        },
      };
      const X = 4294967296;
      function K(t) {
        return t.x;
      }
      function H(t) {
        return t.y;
      }
      const J = Math.PI * (3 - Math.sqrt(5));
      var Q = function (t) {
        let n;
        let e;
        let r = 1;
        let o = 0.001;
        let i = 1 - Math.pow(o, 1 / 300);
        let u = 0;
        let c = 0.6;
        const f = new Map();
        const a = R(h);
        const l = M('tick', 'end');
        let s =
          ((e = 1),
          function () {
            return (e = (1664525 * e + 1013904223) % X) / X;
          });
        function h() {
          d(), l.call('tick', n), r < o && (a.stop(), l.call('end', n));
        }
        function d(e) {
          let o;
          let a;
          const l = t.length;
          void 0 === e && (e = 1);
          for (let s = 0; s < e; ++s)
            for (
              r += (u - r) * i,
                f.forEach((t) => {
                  t(r);
                }),
                o = 0;
              o < l;
              ++o
            )
              (a = t[o]).fx == null ? (a.x += a.vx *= c) : ((a.x = a.fx), (a.vx = 0)),
                a.fy == null ? (a.y += a.vy *= c) : ((a.y = a.fy), (a.vy = 0));
          return n;
        }
        function y() {
          for (var n, e = 0, r = t.length; e < r; ++e) {
            if (
              (((n = t[e]).index = e),
              n.fx != null && (n.x = n.fx),
              n.fy != null && (n.y = n.fy),
              isNaN(n.x) || isNaN(n.y))
            ) {
              const o = 10 * Math.sqrt(0.5 + e);
              const i = e * J;
              (n.x = o * Math.cos(i)), (n.y = o * Math.sin(i));
            }
            (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
          }
        }
        function p(n) {
          return n.initialize && n.initialize(t, s), n;
        }
        return (
          t == null && (t = []),
          y(),
          (n = {
            tick: d,
            restart() {
              return a.restart(h), n;
            },
            stop() {
              return a.stop(), n;
            },
            nodes(e) {
              return arguments.length ? ((t = e), y(), f.forEach(p), n) : t;
            },
            alpha(t) {
              return arguments.length ? ((r = +t), n) : r;
            },
            alphaMin(t) {
              return arguments.length ? ((o = +t), n) : o;
            },
            alphaDecay(t) {
              return arguments.length ? ((i = +t), n) : +i;
            },
            alphaTarget(t) {
              return arguments.length ? ((u = +t), n) : u;
            },
            velocityDecay(t) {
              return arguments.length ? ((c = 1 - t), n) : 1 - c;
            },
            randomSource(t) {
              return arguments.length ? ((s = t), f.forEach(p), n) : s;
            },
            force(t, e) {
              return arguments.length > 1
                ? (e == null ? f.delete(t) : f.set(t, p(e)), n)
                : f.get(t);
            },
            find(n, e, r) {
              let o;
              let i;
              let u;
              let c;
              let f;
              let a = 0;
              const l = t.length;
              for (r == null ? (r = 1 / 0) : (r *= r), a = 0; a < l; ++a)
                (u = (o = n - (c = t[a]).x) * o + (i = e - c.y) * i) < r && ((f = c), (r = u));
              return f;
            },
            on(t, e) {
              return arguments.length > 1 ? (l.on(t, e), n) : l.on(t);
            },
          })
        );
      };
      var V = function () {
        let t;
        let n;
        let e;
        let r;
        let o;
        let i = h(-30);
        let u = 1;
        let c = 1 / 0;
        let a = 0.81;
        function l(e) {
          let o;
          const i = t.length;
          const u = f(t, K, H).visitAfter(y);
          for (r = e, o = 0; o < i; ++o) (n = t[o]), u.visit(p);
        }
        function s() {
          if (t) {
            let n;
            let e;
            const r = t.length;
            for (o = new Array(r), n = 0; n < r; ++n) (e = t[n]), (o[e.index] = +i(e, n, t));
          }
        }
        function y(t) {
          let n;
          let e;
          let r;
          let i;
          let u;
          let c = 0;
          let f = 0;
          if (t.length) {
            for (r = i = u = 0; u < 4; ++u)
              (n = t[u]) &&
                (e = Math.abs(n.value)) &&
                ((c += n.value), (f += e), (r += e * n.x), (i += e * n.y));
            (t.x = r / f), (t.y = i / f);
          } else {
            ((n = t).x = n.data.x), (n.y = n.data.y);
            do {
              c += o[n.data.index];
            } while ((n = n.next));
          }
          t.value = c;
        }
        function p(t, i, f, l) {
          if (!t.value) return !0;
          let s = t.x - n.x;
          let h = t.y - n.y;
          let y = l - i;
          let p = s * s + h * h;
          if ((y * y) / a < p)
            return (
              p < c &&
                (s === 0 && (p += (s = d(e)) * s),
                h === 0 && (p += (h = d(e)) * h),
                p < u && (p = Math.sqrt(u * p)),
                (n.vx += (s * t.value * r) / p),
                (n.vy += (h * t.value * r) / p)),
              !0
            );
          if (!(t.length || p >= c)) {
            (t.data !== n || t.next) &&
              (s === 0 && (p += (s = d(e)) * s),
              h === 0 && (p += (h = d(e)) * h),
              p < u && (p = Math.sqrt(u * p)));
            do {
              t.data !== n && ((y = (o[t.data.index] * r) / p), (n.vx += s * y), (n.vy += h * y));
            } while ((t = t.next));
          }
        }
        return (
          (l.initialize = function (n, r) {
            (t = n), (e = r), s();
          }),
          (l.strength = function (t) {
            return arguments.length ? ((i = typeof t === 'function' ? t : h(+t)), s(), l) : i;
          }),
          (l.distanceMin = function (t) {
            return arguments.length ? ((u = t * t), l) : Math.sqrt(u);
          }),
          (l.distanceMax = function (t) {
            return arguments.length ? ((c = t * t), l) : Math.sqrt(c);
          }),
          (l.theta = function (t) {
            return arguments.length ? ((a = t * t), l) : Math.sqrt(a);
          }),
          l
        );
      };
      var Z = function (t, n, e) {
        let r;
        let o;
        let i;
        let u = h(0.1);
        function c(t) {
          for (let u = 0, c = r.length; u < c; ++u) {
            const f = r[u];
            const a = f.x - n || 1e-6;
            const l = f.y - e || 1e-6;
            const s = Math.sqrt(a * a + l * l);
            const h = ((i[u] - s) * o[u] * t) / s;
            (f.vx += a * h), (f.vy += l * h);
          }
        }
        function f() {
          if (r) {
            let n;
            const e = r.length;
            for (o = new Array(e), i = new Array(e), n = 0; n < e; ++n)
              (i[n] = +t(r[n], n, r)), (o[n] = isNaN(i[n]) ? 0 : +u(r[n], n, r));
          }
        }
        return (
          typeof t !== 'function' && (t = h(+t)),
          n == null && (n = 0),
          e == null && (e = 0),
          (c.initialize = function (t) {
            (r = t), f();
          }),
          (c.strength = function (t) {
            return arguments.length ? ((u = typeof t === 'function' ? t : h(+t)), f(), c) : u;
          }),
          (c.radius = function (n) {
            return arguments.length ? ((t = typeof n === 'function' ? n : h(+n)), f(), c) : t;
          }),
          (c.x = function (t) {
            return arguments.length ? ((n = +t), c) : n;
          }),
          (c.y = function (t) {
            return arguments.length ? ((e = +t), c) : e;
          }),
          c
        );
      };
      var $ = function (t) {
        let n;
        let e;
        let r;
        let o = h(0.1);
        function i(t) {
          for (var o, i = 0, u = n.length; i < u; ++i) (o = n[i]).vx += (r[i] - o.x) * e[i] * t;
        }
        function u() {
          if (n) {
            let i;
            const u = n.length;
            for (e = new Array(u), r = new Array(u), i = 0; i < u; ++i)
              e[i] = isNaN((r[i] = +t(n[i], i, n))) ? 0 : +o(n[i], i, n);
          }
        }
        return (
          typeof t !== 'function' && (t = h(t == null ? 0 : +t)),
          (i.initialize = function (t) {
            (n = t), u();
          }),
          (i.strength = function (t) {
            return arguments.length ? ((o = typeof t === 'function' ? t : h(+t)), u(), i) : o;
          }),
          (i.x = function (n) {
            return arguments.length ? ((t = typeof n === 'function' ? n : h(+n)), u(), i) : t;
          }),
          i
        );
      };
      var tt = function (t) {
        let n;
        let e;
        let r;
        let o = h(0.1);
        function i(t) {
          for (var o, i = 0, u = n.length; i < u; ++i) (o = n[i]).vy += (r[i] - o.y) * e[i] * t;
        }
        function u() {
          if (n) {
            let i;
            const u = n.length;
            for (e = new Array(u), r = new Array(u), i = 0; i < u; ++i)
              e[i] = isNaN((r[i] = +t(n[i], i, n))) ? 0 : +o(n[i], i, n);
          }
        }
        return (
          typeof t !== 'function' && (t = h(t == null ? 0 : +t)),
          (i.initialize = function (t) {
            (n = t), u();
          }),
          (i.strength = function (t) {
            return arguments.length ? ((o = typeof t === 'function' ? t : h(+t)), u(), i) : o;
          }),
          (i.y = function (n) {
            return arguments.length ? ((t = typeof n === 'function' ? n : h(+n)), u(), i) : t;
          }),
          i
        );
      };
    },
    225(t, n, e) {
      'use strict';
      const r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, n, e, r) {
              void 0 === r && (r = e),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get() {
                    return n[e];
                  },
                });
            }
          : function (t, n, e, r) {
              void 0 === r && (r = e), (t[r] = n[e]);
            });
      const o =
        (this && this.__exportStar) ||
        function (t, n) {
          for (const e in t)
            e === 'default' || Object.prototype.hasOwnProperty.call(n, e) || r(n, t, e);
        };
      Object.defineProperty(n, '__esModule', { value: !0 }), o(e(481), n);
    },
    480(t, n, e) {
      'use strict';
      e.r(n);
      const r = e(225);
      n.default = r.ForceLayout;
    },
    481(t, n, e) {
      'use strict';
      let r;
      const o =
        (this && this.__extends) ||
        ((r = function (t, n) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, n) {
                t.__proto__ = n;
              }) ||
            function (t, n) {
              for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
            })(t, n);
        }),
        function (t, n) {
          if (typeof n !== 'function' && n !== null)
            throw new TypeError(`Class extends value ${String(n)} is not a constructor or null`);
          function e() {
            this.constructor = t;
          }
          r(t, n),
            (t.prototype = n === null ? Object.create(n) : ((e.prototype = n.prototype), new e()));
        });
      const i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, n, e, r) {
              void 0 === r && (r = e),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get() {
                    return n[e];
                  },
                });
            }
          : function (t, n, e, r) {
              void 0 === r && (r = e), (t[r] = n[e]);
            });
      const u =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, n) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: n });
            }
          : function (t, n) {
              t.default = n;
            });
      const c =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          const n = {};
          if (t != null)
            for (const e in t)
              e !== 'default' && Object.prototype.hasOwnProperty.call(t, e) && i(n, t, e);
          return u(n, t), n;
        };
      const f =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.ForceLayout = void 0);
      const a = c(e(216));
      const l = f(e(482));
      const s = e(10);
      const h = e(7);
      const d = e(483);
      const y = (function (t) {
        function n(n) {
          const e = t.call(this) || this;
          return (
            (e.center = [0, 0]),
            (e.nodeStrength = null),
            (e.edgeStrength = null),
            (e.preventOverlap = !1),
            (e.clusterNodeStrength = null),
            (e.clusterEdgeStrength = null),
            (e.clusterEdgeDistance = null),
            (e.clusterNodeSize = null),
            (e.clusterFociStrength = null),
            (e.linkDistance = 50),
            (e.alphaDecay = 0.028),
            (e.alphaMin = 0.001),
            (e.alpha = 0.3),
            (e.collideStrength = 1),
            (e.workerEnabled = !1),
            (e.tick = function () {}),
            (e.onLayoutEnd = function () {}),
            (e.ticking = void 0),
            n && e.updateCfg(n),
            e
          );
        }
        return (
          o(n, t),
          (n.prototype.getDefaultCfg = function () {
            return {
              center: [0, 0],
              nodeStrength: null,
              edgeStrength: null,
              preventOverlap: !1,
              nodeSize: void 0,
              nodeSpacing: void 0,
              linkDistance: 50,
              forceSimulation: null,
              alphaDecay: 0.028,
              alphaMin: 0.001,
              alpha: 0.3,
              collideStrength: 1,
              clustering: !1,
              clusterNodeStrength: -1,
              clusterEdgeStrength: 0.1,
              clusterEdgeDistance: 100,
              clusterFociStrength: 0.8,
              clusterNodeSize: 10,
              tick() {},
              onLayoutEnd() {},
              workerEnabled: !1,
            };
          }),
          (n.prototype.init = function (t) {
            this.nodes = t.nodes || [];
            const n = t.edges || [];
            (this.edges = n.map((t) => {
              const n = {};
              const e = ['targetNode', 'sourceNode', 'startPoint', 'endPoint'];
              return (
                Object.keys(t).forEach((r) => {
                  e.indexOf(r) > -1 || (n[r] = t[r]);
                }),
                n
              );
            })),
              (this.ticking = !1);
          }),
          (n.prototype.execute = function (t) {
            const n = this;
            const e = n.nodes;
            const r = n.edges;
            if (!n.ticking) {
              let o = n.forceSimulation;
              const i = n.alphaMin;
              const u = n.alphaDecay;
              const c = n.alpha;
              if (o) {
                if (t)
                  if (
                    (n.clustering &&
                      n.clusterForce &&
                      (n.clusterForce.nodes(e), n.clusterForce.links(r)),
                    o.nodes(e),
                    r && n.edgeForce)
                  )
                    n.edgeForce.links(r);
                  else if (r && !n.edgeForce) {
                    h = a
                      .forceLink()
                      .id((t) => {
                        return t.id;
                      })
                      .links(r);
                    n.edgeStrength && h.strength(n.edgeStrength),
                      n.linkDistance && h.distance(n.linkDistance),
                      (n.edgeForce = h),
                      o.force('link', h);
                  }
                n.preventOverlap && n.overlapProcess(o), o.alpha(c).restart(), (this.ticking = !0);
              } else
                try {
                  const f = a.forceManyBody();
                  if (
                    (n.nodeStrength && f.strength(n.nodeStrength),
                    (o = a.forceSimulation().nodes(e)),
                    n.clustering)
                  ) {
                    const s = l.default();
                    s
                      .centerX(n.center[0])
                      .centerY(n.center[1])
                      .template('force')
                      .strength(n.clusterFociStrength),
                      r && s.links(r),
                      e && s.nodes(e),
                      s
                        .forceLinkDistance(n.clusterEdgeDistance)
                        .forceLinkStrength(n.clusterEdgeStrength)
                        .forceCharge(n.clusterNodeStrength)
                        .forceNodeSize(n.clusterNodeSize),
                      (n.clusterForce = s),
                      o.force('group', s);
                  }
                  if (
                    (o
                      .force('center', a.forceCenter(n.center[0], n.center[1]))
                      .force('charge', f)
                      .alpha(c)
                      .alphaDecay(u)
                      .alphaMin(i),
                    n.preventOverlap && n.overlapProcess(o),
                    r)
                  ) {
                    var h = a
                      .forceLink()
                      .id((t) => {
                        return t.id;
                      })
                      .links(r);
                    n.edgeStrength && h.strength(n.edgeStrength),
                      n.linkDistance && h.distance(n.linkDistance),
                      (n.edgeForce = h),
                      o.force('link', h);
                  }
                  if (
                    (n.workerEnabled &&
                      !p() &&
                      ((n.workerEnabled = !1),
                      console.warn(
                        'workerEnabled option is only supported when running in web worker.',
                      )),
                    n.workerEnabled)
                  ) {
                    o.stop();
                    for (
                      let y = (function (t) {
                          const n = t.alphaMin();
                          const e = t.alphaTarget();
                          const r = t.alpha();
                          const o = Math.log((n - e) / (r - e)) / Math.log(1 - t.alphaDecay());
                          return Math.ceil(o);
                        })(o),
                        v = 1;
                      v <= y;
                      v++
                    )
                      o.tick(),
                        postMessage(
                          { nodes: e, currentTick: v, totalTicks: y, type: d.LAYOUT_MESSAGE.TICK },
                          void 0,
                        );
                    n.ticking = !1;
                  } else
                    o
                      .on('tick', () => {
                        n.tick();
                      })
                      .on('end', () => {
                        (n.ticking = !1), n.onLayoutEnd && n.onLayoutEnd();
                      }),
                      (n.ticking = !0);
                  (n.forceSimulation = o), (n.ticking = !0);
                } catch (t) {
                  (n.ticking = !1), console.warn(t);
                }
            }
          }),
          (n.prototype.overlapProcess = function (t) {
            let n;
            let e;
            const r = this.nodeSize;
            const o = this.nodeSpacing;
            const i = this.collideStrength;
            if (
              ((e = s.isNumber(o)
                ? function () {
                    return o;
                  }
                : s.isFunction(o)
                ? o
                : function () {
                    return 0;
                  }),
              r)
            )
              if (s.isFunction(r))
                n = function (t) {
                  return r(t) + e(t);
                };
              else if (s.isArray(r)) {
                const u = (r[0] > r[1] ? r[0] : r[1]) / 2;
                n = function (t) {
                  return u + e(t);
                };
              } else if (s.isNumber(r)) {
                const c = r / 2;
                n = function (t) {
                  return c + e(t);
                };
              } else
                n = function () {
                  return 10;
                };
            else
              n = function (t) {
                return t.size
                  ? s.isArray(t.size)
                    ? (t.size[0] > t.size[1] ? t.size[0] : t.size[1]) / 2 + e(t)
                    : t.size / 2 + e(t)
                  : 10 + e(t);
              };
            t.force('collisionForce', a.forceCollide(n).strength(i));
          }),
          (n.prototype.updateCfg = function (t) {
            this.ticking && (this.forceSimulation.stop(), (this.ticking = !1)),
              (this.forceSimulation = null),
              Object.assign(this, t);
          }),
          (n.prototype.destroy = function () {
            this.ticking && (this.forceSimulation.stop(), (this.ticking = !1)),
              (this.nodes = null),
              (this.edges = null),
              (this.destroyed = !0);
          }),
          n
        );
      })(h.Base);
      function p() {
        return typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
      }
      n.ForceLayout = y;
    },
    482(t, n, e) {
      'use strict';
      const r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, n, e, r) {
              void 0 === r && (r = e),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get() {
                    return n[e];
                  },
                });
            }
          : function (t, n, e, r) {
              void 0 === r && (r = e), (t[r] = n[e]);
            });
      const o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, n) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: n });
            }
          : function (t, n) {
              t.default = n;
            });
      const i =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          const n = {};
          if (t != null)
            for (const e in t)
              e !== 'default' && Object.prototype.hasOwnProperty.call(t, e) && r(n, t, e);
          return o(n, t), n;
        };
      Object.defineProperty(n, '__esModule', { value: !0 });
      const u = i(e(216));
      n.default = function () {
        function t(t) {
          return function () {
            return t;
          };
        }
        let n;
        let e = function (t) {
          return t.cluster;
        };
        let r = t(1);
        let o = t(-1);
        let i = t(100);
        let c = t(0.1);
        let f = [0, 0];
        let a = [];
        let l = {};
        let s = [];
        let h = 100;
        let d = 100;
        let y = { none: { x: 0, y: 0 } };
        let p = [];
        let v = 'force';
        let g = !0;
        let _ = 0.1;
        function x(t) {
          if (!g) return x;
          n.tick(), w();
          for (let r = 0, o = a.length, i = void 0, u = t * _; r < o; ++r)
            ((i = a[r]).vx += (y[e(i)].x - i.x) * u), (i.vy += (y[e(i)].y - i.y) * u);
        }
        function b() {
          a &&
            (function () {
              if (!a || !a.length) return;
              if (void 0 === e(a[0]))
                throw Error(
                  "Couldnt find the grouping attribute for the nodes. Make sure to set it up with forceInABox.groupBy('clusterAttr') before calling .links()",
                );
              const t =
                ((y = []),
                (v = []),
                (g = {}),
                (_ = []),
                (f = (function (t) {
                  const n = {};
                  return (
                    t.forEach((t) => {
                      const r = e(t);
                      n[r] || (n[r] = { count: 0, sumforceNodeSize: 0 });
                    }),
                    t.forEach((t) => {
                      const o = e(t);
                      const i = r(t);
                      const u = n[o];
                      (u.count += 1), (u.sumforceNodeSize += Math.PI * (i * i) * 1.3), (n[o] = u);
                    }),
                    n
                  );
                })(a)),
                (_ = (function (t) {
                  const n = {};
                  const r = [];
                  return (
                    t.forEach((t) => {
                      const r = (function (t) {
                        const n = e(l[t.source]);
                        const r = e(l[t.target]);
                        return n <= r ? `${n}~${r}` : `${r}~${n}`;
                      })(t);
                      let o = 0;
                      void 0 !== n[r] && (o = n[r]), (o += 1), (n[r] = o);
                    }),
                    Object.entries(n).forEach((t) => {
                      const n = t[0];
                      const e = t[1];
                      const o = n.split('~')[0];
                      const i = n.split('~')[1];
                      void 0 !== o && void 0 !== i && r.push({ source: o, target: i, count: e });
                    }),
                    r
                  );
                })(s)),
                Object.keys(f).forEach((t, n) => {
                  const e = f[t];
                  y.push({ id: t, size: e.count, r: Math.sqrt(e.sumforceNodeSize / Math.PI) }),
                    (g[t] = n);
                }),
                _.forEach((t) => {
                  const n = g[t.source];
                  const e = g[t.target];
                  void 0 !== n && void 0 !== e && v.push({ source: n, target: e, count: t.count });
                }),
                { nodes: y, links: v });
              let f;
              let y;
              let v;
              let g;
              let _;
              (n = u
                .forceSimulation(t.nodes)
                .force('x', u.forceX(h).strength(0.1))
                .force('y', u.forceY(d).strength(0.1))
                .force(
                  'collide',
                  u
                    .forceCollide((t) => {
                      return t.r;
                    })
                    .iterations(4),
                )
                .force('charge', u.forceManyBody().strength(o))
                .force(
                  'links',
                  u
                    .forceLink(t.nodes.length ? t.links : [])
                    .distance(i)
                    .strength(c),
                )),
                (p = n.nodes()),
                w();
            })();
        }
        function w() {
          return (
            (y = { none: { x: 0, y: 0 } }),
            p.forEach((t) => {
              y[t.id] = { x: t.x - f[0], y: t.y - f[1] };
            }),
            y
          );
        }
        function m(t) {
          (l = {}),
            t.forEach((t) => {
              l[t.id] = t;
            });
        }
        return (
          (x.initialize = function (t) {
            (a = t), b();
          }),
          (x.template = function (t) {
            return arguments.length ? ((v = t), b(), x) : v;
          }),
          (x.groupBy = function (t) {
            return arguments.length
              ? typeof t === 'string'
                ? ((e = function (n) {
                    return n[t];
                  }),
                  x)
                : ((e = t), x)
              : e;
          }),
          (x.enableGrouping = function (t) {
            return arguments.length ? ((g = t), x) : g;
          }),
          (x.strength = function (t) {
            return arguments.length ? ((_ = t), x) : _;
          }),
          (x.centerX = function (t) {
            return arguments.length ? ((h = t), x) : h;
          }),
          (x.centerY = function (t) {
            return arguments.length ? ((d = t), x) : d;
          }),
          (x.nodes = function (t) {
            return arguments.length ? (m(t || []), (a = t || []), x) : a;
          }),
          (x.links = function (t) {
            return arguments.length ? ((s = t || []), b(), x) : s;
          }),
          (x.forceNodeSize = function (n) {
            return arguments.length ? ((r = typeof n === 'function' ? n : t(+n)), b(), x) : r;
          }),
          (x.nodeSize = x.forceNodeSize),
          (x.forceCharge = function (n) {
            return arguments.length ? ((o = typeof n === 'function' ? n : t(+n)), b(), x) : o;
          }),
          (x.forceLinkDistance = function (n) {
            return arguments.length ? ((i = typeof n === 'function' ? n : t(+n)), b(), x) : i;
          }),
          (x.forceLinkStrength = function (n) {
            return arguments.length ? ((c = typeof n === 'function' ? n : t(+n)), b(), x) : c;
          }),
          (x.offset = function (t) {
            return arguments.length ? ((f = t), x) : f;
          }),
          (x.getFocis = w),
          x
        );
      };
    },
    483(t, n, e) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.LAYOUT_MESSAGE = void 0),
        (n.LAYOUT_MESSAGE = {
          RUN: 'LAYOUT_RUN',
          END: 'LAYOUT_END',
          ERROR: 'LAYOUT_ERROR',
          TICK: 'LAYOUT_TICK',
          GPURUN: 'GPU_LAYOUT_RUN',
          GPUEND: 'GPU_LAYOUT_END',
        });
    },
    7(t, n, e) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.Base = void 0);
      const r = (function () {
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
      n.Base = r;
    },
  }).default;
});
// # sourceMappingURL=forceLayout.js.map
