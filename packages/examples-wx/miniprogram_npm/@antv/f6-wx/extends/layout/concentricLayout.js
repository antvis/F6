!(function (e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
    ? define([], t)
    : typeof exports === 'object'
    ? (exports.f6 = t())
    : (e.f6 = t());
})(this, () => {
  return (function (e) {
    const t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      const o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
        const r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && typeof e !== 'string')
        )
          for (const o in e)
            n.d(
              r,
              o,
              ((t) => {
                return e[t];
              }).bind(null, o),
            );
        return r;
      }),
      (n.n = function (e) {
        const t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 296))
    );
  })({
    10(e, t, n) {
      'use strict';
      const r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get() {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            });
      const o =
        (this && this.__exportStar) ||
        function (e, t) {
          for (const n in e)
            n === 'default' || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
        };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        o(n(11), t),
        o(n(12), t),
        o(n(13), t),
        o(n(14), t),
        o(n(15), t),
        o(n(16), t);
    },
    11(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.camelize = t.isString = void 0);
      t.isString = function (e) {
        return typeof e === 'string';
      };
      let r;
      let o;
      const i = /-(\w)/g;
      t.camelize =
        ((r = function (e) {
          return e.replace(i, (e, t) => {
            return t ? t.toUpperCase() : '';
          });
        }),
        (o = Object.create(null)),
        function (e) {
          return o[e] || (o[e] = r(e));
        });
    },
    12(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isArray = void 0),
        (t.isArray = Array.isArray);
    },
    13(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.toNumber = t.isNaN = t.isNumber = void 0);
      t.isNumber = function (e) {
        return typeof e === 'number';
      };
      t.isNaN = function (e) {
        return Number.isNaN(Number(e));
      };
      t.toNumber = function (e) {
        const n = parseFloat(e);
        return t.isNaN(n) ? e : n;
      };
    },
    14(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.traverseTreeUp =
          t.scaleMatrix =
          t.getAdjMatrix =
          t.floydWarshall =
          t.getDegree =
            void 0);
      t.getDegree = function (e, t, n) {
        for (var r = [], o = 0; o < e; o++) r[o] = 0;
        return n
          ? (n.forEach((e) => {
              e.source && (r[t[e.source]] += 1), e.target && (r[t[e.target]] += 1);
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
              : e[r][o] !== 0 && e[r][o]
              ? (t[r][o] = e[r][o])
              : (t[r][o] = 1 / 0);
        }
        for (let i = 0; i < n; i += 1)
          for (r = 0; r < n; r += 1)
            for (o = 0; o < n; o += 1) t[r][o] > t[r][i] + t[i][o] && (t[r][o] = t[r][i] + t[i][o]);
        return t;
      };
      t.getAdjMatrix = function (e, t) {
        const n = e.nodes;
        const r = e.edges;
        const o = [];
        const i = {};
        if (!n) throw new Error('invalid nodes data!');
        return (
          n &&
            n.forEach((e, t) => {
              i[e.id] = t;
              o.push([]);
            }),
          r &&
            r.forEach((e) => {
              const n = e.source;
              const r = e.target;
              const u = i[n];
              const c = i[r];
              (o[u][c] = 1), t || (o[c][u] = 1);
            }),
          o
        );
      };
      t.scaleMatrix = function (e, t) {
        const n = [];
        return (
          e.forEach((e) => {
            const r = [];
            e.forEach((e) => {
              r.push(e * t);
            }),
              n.push(r);
          }),
          n
        );
      };
      t.traverseTreeUp = function (e, t) {
        typeof t === 'function' &&
          (function e(t, n) {
            if (t && t.children)
              for (let r = t.children.length - 1; r >= 0; r--) if (!e(t.children[r], n)) return;
            return !!n(t);
          })(e, t);
      };
    },
    15(e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol === 'function' &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
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
                for (const o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.clone = t.isObject = void 0);
      t.isObject = function (e) {
        return e !== null && r(e) === 'object';
      };
      t.clone = function (e) {
        if (e === null) return e;
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof Array) {
          const n = [];
          return (
            e.forEach((e) => {
              n.push(e);
            }),
            n.map((e) => {
              return t.clone(e);
            })
          );
        }
        if (r(e) === 'object' && e !== {}) {
          const i = o({}, e);
          return (
            Object.keys(i).forEach((e) => {
              i[e] = t.clone(i[e]);
            }),
            i
          );
        }
        return e;
      };
    },
    16(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.isFunction = void 0);
      t.isFunction = function (e) {
        return typeof e === 'function';
      };
    },
    222(e, t, n) {
      'use strict';
      let r;
      const o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if (typeof t !== 'function' && t !== null)
            throw new TypeError(`Class extends value ${String(t)} is not a constructor or null`);
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n()));
        });
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.ConcentricLayout = void 0);
      const i = n(10);
      const u = (function (e) {
        function t(t) {
          const n = e.call(this) || this;
          return (
            (n.nodeSize = 30),
            (n.minNodeSpacing = 10),
            (n.preventOverlap = !1),
            (n.equidistant = !1),
            (n.startAngle = 1.5 * Math.PI),
            (n.clockwise = !0),
            (n.sortBy = 'degree'),
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
              sortBy: 'degree',
            };
          }),
          (t.prototype.execute = function () {
            const e = this;
            const t = e.nodes;
            const n = e.edges;
            const r = t.length;
            if (r !== 0) {
              e.width || typeof window === 'undefined' || (e.width = window.innerWidth),
                e.height || typeof window === 'undefined' || (e.height = window.innerHeight),
                e.center || (e.center = [e.width / 2, e.height / 2]);
              const o = e.center;
              if (r === 1)
                return (t[0].x = o[0]), (t[0].y = o[1]), void (e.onLayoutEnd && e.onLayoutEnd());
              let u;
              const c = [];
              (u = i.isArray(e.nodeSize) ? Math.max(e.nodeSize[0], e.nodeSize[1]) : e.nodeSize),
                t.forEach((e) => {
                  c.push(e);
                  let t = u;
                  i.isArray(e.size)
                    ? (t = Math.max(e.size[0], e.size[1]))
                    : i.isNumber(e.size) && (t = e.size),
                    (u = Math.max(u, t));
                }),
                (e.clockwise = void 0 !== e.counterclockwise ? !e.counterclockwise : e.clockwise);
              const a = {};
              const s = {};
              if (
                (c.forEach((e, t) => {
                  (a[e.id] = e), (s[e.id] = t);
                }),
                !(
                  (e.sortBy !== 'degree' && i.isString(e.sortBy) && void 0 !== c[0][e.sortBy]) ||
                  ((e.sortBy = 'degree'), i.isNumber(t[0].degree))
                ))
              ) {
                const f = i.getDegree(t.length, s, n);
                c.forEach((e, t) => {
                  e.degree = f[t];
                });
              }
              c.sort((t, n) => {
                return n[e.sortBy] - t[e.sortBy];
              }),
                (e.maxValueNode = c[0]),
                (e.maxLevelDiff = e.maxLevelDiff || e.maxValueNode[e.sortBy] / 4);
              const d = [[]];
              let l = d[0];
              c.forEach((t) => {
                if (l.length > 0) {
                  const n = Math.abs(l[0][e.sortBy] - t[e.sortBy]);
                  e.maxLevelDiff && n >= e.maxLevelDiff && ((l = []), d.push(l));
                }
                l.push(t);
              });
              let p = u + e.minNodeSpacing;
              if (!e.preventOverlap) {
                const h = d.length > 0 && d[0].length > 1;
                const y = (Math.min(e.width, e.height) / 2 - p) / (d.length + (h ? 1 : 0));
                p = Math.min(p, y);
              }
              let v = 0;
              if (
                (d.forEach((t) => {
                  let n = e.sweep;
                  void 0 === n && (n = 2 * Math.PI - (2 * Math.PI) / t.length);
                  const r = (t.dTheta = n / Math.max(1, t.length - 1));
                  if (t.length > 1 && e.preventOverlap) {
                    const o = Math.cos(r) - Math.cos(0);
                    const i = Math.sin(r) - Math.sin(0);
                    const u = Math.sqrt((p * p) / (o * o + i * i));
                    v = Math.max(u, v);
                  }
                  (t.r = v), (v += p);
                }),
                e.equidistant)
              ) {
                for (var g = 0, b = 0, m = 0; m < d.length; m++) {
                  const _ = d[m].r - b;
                  g = Math.max(g, _);
                }
                (b = 0),
                  d.forEach((e, t) => {
                    t === 0 && (b = e.r), (e.r = b), (b += g);
                  });
              }
              return (
                d.forEach((t) => {
                  const n = t.dTheta;
                  const { r } = t;
                  t.forEach((t, i) => {
                    const u = e.startAngle + (e.clockwise ? 1 : -1) * n * i;
                    (t.x = o[0] + r * Math.cos(u)), (t.y = o[1] + r * Math.sin(u));
                  });
                }),
                e.onLayoutEnd && e.onLayoutEnd(),
                { nodes: t, edges: n }
              );
            }
            e.onLayoutEnd && e.onLayoutEnd();
          }),
          (t.prototype.getType = function () {
            return 'concentric';
          }),
          t
        );
      })(n(7).Base);
      t.ConcentricLayout = u;
    },
    296(e, t, n) {
      'use strict';
      n.r(t);
      const r = n(222);
      t.default = r.ConcentricLayout;
    },
    7(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Base = void 0);
      const r = (function () {
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
            return 'base';
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
// # sourceMappingURL=concentricLayout.js.map
