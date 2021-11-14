!(function (t, e) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define([], e)
    : typeof exports === 'object'
    ? (exports.f6 = e())
    : (t.f6 = e());
})(this, () => {
  return (function (t) {
    const e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      const o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
          for (const o in t)
            n.d(
              r,
              o,
              ((e) => {
                return t[e];
              }).bind(null, o),
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
      n((n.s = 485))
    );
  })({
    10(t, e, n) {
      'use strict';
      const r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get() {
                    return e[n];
                  },
                });
            }
          : function (t, e, n, r) {
              void 0 === r && (r = n), (t[r] = e[n]);
            });
      const o =
        (this && this.__exportStar) ||
        function (t, e) {
          for (const n in t)
            n === 'default' || Object.prototype.hasOwnProperty.call(e, n) || r(e, t, n);
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        o(n(11), e),
        o(n(12), e),
        o(n(13), e),
        o(n(14), e),
        o(n(15), e),
        o(n(16), e);
    },
    11(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.camelize = e.isString = void 0);
      e.isString = function (t) {
        return typeof t === 'string';
      };
      let r;
      let o;
      const i = /-(\w)/g;
      e.camelize =
        ((r = function (t) {
          return t.replace(i, (t, e) => {
            return e ? e.toUpperCase() : '';
          });
        }),
        (o = Object.create(null)),
        function (t) {
          return o[t] || (o[t] = r(t));
        });
    },
    12(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isArray = void 0),
        (e.isArray = Array.isArray);
    },
    13(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.toNumber = e.isNaN = e.isNumber = void 0);
      e.isNumber = function (t) {
        return typeof t === 'number';
      };
      e.isNaN = function (t) {
        return Number.isNaN(Number(t));
      };
      e.toNumber = function (t) {
        const n = parseFloat(t);
        return e.isNaN(n) ? t : n;
      };
    },
    14(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.traverseTreeUp =
          e.scaleMatrix =
          e.getAdjMatrix =
          e.floydWarshall =
          e.getDegree =
            void 0);
      e.getDegree = function (t, e, n) {
        for (var r = [], o = 0; o < t; o++) r[o] = 0;
        return n
          ? (n.forEach((t) => {
              t.source && (r[e[t.source]] += 1), t.target && (r[e[t.target]] += 1);
            }),
            r)
          : r;
      };
      e.floydWarshall = function (t) {
        for (var e = [], n = t.length, r = 0; r < n; r += 1) {
          e[r] = [];
          for (var o = 0; o < n; o += 1)
            r === o
              ? (e[r][o] = 0)
              : t[r][o] !== 0 && t[r][o]
              ? (e[r][o] = t[r][o])
              : (e[r][o] = 1 / 0);
        }
        for (let i = 0; i < n; i += 1)
          for (r = 0; r < n; r += 1)
            for (o = 0; o < n; o += 1) e[r][o] > e[r][i] + e[i][o] && (e[r][o] = e[r][i] + e[i][o]);
        return e;
      };
      e.getAdjMatrix = function (t, e) {
        const n = t.nodes;
        const r = t.edges;
        const o = [];
        const i = {};
        if (!n) throw new Error('invalid nodes data!');
        return (
          n &&
            n.forEach((t, e) => {
              i[t.id] = e;
              o.push([]);
            }),
          r &&
            r.forEach((t) => {
              const n = t.source;
              const r = t.target;
              const u = i[n];
              const a = i[r];
              (o[u][a] = 1), e || (o[a][u] = 1);
            }),
          o
        );
      };
      e.scaleMatrix = function (t, e) {
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
      e.traverseTreeUp = function (t, e) {
        typeof e === 'function' &&
          (function t(e, n) {
            if (e && e.children)
              for (let r = e.children.length - 1; r >= 0; r--) if (!t(e.children[r], n)) return;
            return !!n(e);
          })(t, e);
      };
    },
    15(t, e, n) {
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
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (const o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.clone = e.isObject = void 0);
      e.isObject = function (t) {
        return t !== null && r(t) === 'object';
      };
      e.clone = function (t) {
        if (t === null) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof Array) {
          const n = [];
          return (
            t.forEach((t) => {
              n.push(t);
            }),
            n.map((t) => {
              return e.clone(t);
            })
          );
        }
        if (r(t) === 'object' && t !== {}) {
          const i = o({}, t);
          return (
            Object.keys(i).forEach((t) => {
              i[t] = e.clone(i[t]);
            }),
            i
          );
        }
        return t;
      };
    },
    16(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.isFunction = void 0);
      e.isFunction = function (t) {
        return typeof t === 'function';
      };
    },
    227(t, e, n) {
      'use strict';
      let r;
      const o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if (typeof e !== 'function' && e !== null)
            throw new TypeError(`Class extends value ${String(e)} is not a constructor or null`);
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype = e === null ? Object.create(e) : ((n.prototype = e.prototype), new n()));
        });
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.GForceLayout = void 0);
      const i = n(7);
      const u = n(10);
      const a = function (t, e) {
        return t
          ? u.isNumber(t)
            ? function (e) {
                return t;
              }
            : t
          : function (t) {
              return e || 1;
            };
      };
      const c = (function (t) {
        function e(e) {
          const n = t.call(this) || this;
          return (
            (n.maxIteration = 1e3),
            (n.edgeStrength = 200),
            (n.nodeStrength = 1e3),
            (n.coulombDisScale = 0.005),
            (n.damping = 0.9),
            (n.maxSpeed = 1e3),
            (n.minMovement = 0.5),
            (n.interval = 0.02),
            (n.factor = 1),
            (n.linkDistance = 1),
            (n.gravity = 10),
            (n.preventOverlap = !0),
            (n.tick = function () {}),
            (n.nodes = []),
            (n.edges = []),
            (n.width = 300),
            (n.height = 300),
            (n.nodeMap = {}),
            (n.nodeIdxMap = {}),
            n.updateCfg(e),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.getDefaultCfg = function () {
            return { maxIteration: 500, gravity: 10, enableTick: !0 };
          }),
          (e.prototype.execute = function () {
            const t = this;
            const e = t.nodes;
            if (
              (void 0 !== t.timeInterval &&
                typeof window !== 'undefined' &&
                window.clearInterval(t.timeInterval),
              e && e.length !== 0)
            ) {
              t.width || typeof window === 'undefined' || (t.width = window.innerWidth),
                t.height || typeof window === 'undefined' || (t.height = window.innerHeight),
                t.center || (t.center = [t.width / 2, t.height / 2]);
              const n = t.center;
              if (e.length === 1)
                return (e[0].x = n[0]), (e[0].y = n[1]), void (t.onLayoutEnd && t.onLayoutEnd());
              const r = {};
              const o = {};
              e.forEach((e, n) => {
                u.isNumber(e.x) || (e.x = Math.random() * t.width),
                  u.isNumber(e.y) || (e.y = Math.random() * t.height),
                  (r[e.id] = e),
                  (o[e.id] = n);
              }),
                (t.nodeMap = r),
                (t.nodeIdxMap = o),
                (t.linkDistance = a(t.linkDistance, 1)),
                (t.nodeStrength = a(t.nodeStrength, 1)),
                (t.edgeStrength = a(t.edgeStrength, 1));
              let i;
              const c = t.nodeSize;
              if (t.preventOverlap) {
                let s;
                const f = t.nodeSpacing;
                (s = u.isNumber(f)
                  ? function () {
                      return f;
                    }
                  : u.isFunction(f)
                  ? f
                  : function () {
                      return 0;
                    }),
                  (i = c
                    ? u.isArray(c)
                      ? function (t) {
                          return (c[0] > c[1] ? c[0] : c[1]) + s(t);
                        }
                      : function (t) {
                          return c + s(t);
                        }
                    : function (t) {
                        return t.size
                          ? u.isArray(t.size)
                            ? (t.size[0] > t.size[1] ? t.size[0] : t.size[1]) + s(t)
                            : t.size + s(t)
                          : 10 + s(t);
                      });
              }
              t.nodeSize = i;
              const d = t.edges;
              (t.degrees = u.getDegree(e.length, t.nodeIdxMap, d)),
                t.getMass ||
                  (t.getMass = function (e) {
                    return t.degrees[t.nodeIdxMap[e.id]] || 1;
                  }),
                t.run();
            } else t.onLayoutEnd && t.onLayoutEnd();
          }),
          (e.prototype.run = function () {
            const t = this;
            const e = t.nodes;
            const n = t.edges;
            const r = t.maxIteration;
            if (typeof window !== 'undefined') {
              let o = 0;
              this.timeInterval = window.setInterval(() => {
                const i = [];
                const u = [];
                if (e) {
                  e.forEach((t, e) => {
                    (i[2 * e] = 0), (i[2 * e + 1] = 0), (u[2 * e] = 0), (u[2 * e + 1] = 0);
                  }),
                    t.calRepulsive(i, e),
                    n && t.calAttractive(i, n),
                    t.calGravity(i, e);
                  const a = Math.max(0.02, t.interval - 0.002 * o);
                  t.updateVelocity(i, u, a, e);
                  const c = [];
                  e.forEach((t) => {
                    c.push({ x: t.x, y: t.y });
                  }),
                    t.updatePosition(u, a, e),
                    t.tick && t.tick();
                  let s = 0;
                  e.forEach((t, e) => {
                    const n = t.x - c[e].x;
                    const r = t.y - c[e].y;
                    s += Math.sqrt(n * n + r * r);
                  }),
                    (s /= e.length) < t.minMovement &&
                      (window.clearInterval(t.timeInterval), t.onLayoutEnd && t.onLayoutEnd()),
                    ++o >= r &&
                      (t.onLayoutEnd && t.onLayoutEnd(), window.clearInterval(t.timeInterval));
                }
              }, 0);
            }
          }),
          (e.prototype.calRepulsive = function (t, e) {
            const n = this.getMass;
            const r = this.nodeStrength;
            const o = this.factor;
            const i = this.coulombDisScale;
            const u = this.preventOverlap;
            const a = this.nodeSize;
            e.forEach((c, s) => {
              const f = n ? n(c) : 1;
              e.forEach((e, d) => {
                if (!(s >= d)) {
                  const l = c.x - e.x;
                  const p = c.y - e.y;
                  const y = Math.sqrt(l * l + p * p) + 0.01;
                  const h = (y + 0.1) * i;
                  const v = l / y;
                  const g = p / y;
                  const b = (((r(c) + r(e)) / 2) * o) / (h * h);
                  const m = n ? n(e) : 1;
                  if (
                    ((t[2 * s] += v * b),
                    (t[2 * s + 1] += g * b),
                    (t[2 * d] -= v * b),
                    (t[2 * d + 1] -= g * b),
                    u && y < (a(c) + a(e)) / 2)
                  ) {
                    const x = (r(c) + r(e)) / 2 / (y * y);
                    (t[2 * s] += (v * x) / f),
                      (t[2 * s + 1] += (g * x) / f),
                      (t[2 * d] -= (v * x) / m),
                      (t[2 * d + 1] -= (g * x) / m);
                  }
                }
              });
            });
          }),
          (e.prototype.calAttractive = function (t, e) {
            const n = this.nodeMap;
            const r = this.nodeIdxMap;
            const o = this.linkDistance;
            const i = this.edgeStrength;
            const u = this.getMass;
            e.forEach((e, a) => {
              const c = n[e.source];
              const s = n[e.target];
              const f = s.x - c.x;
              const d = s.y - c.y;
              const l = Math.sqrt(f * f + d * d) + 0.01;
              const p = f / l;
              const y = d / l;
              const h = ((o(e) || 1) - l) * i(e);
              const v = r[e.source];
              const g = r[e.target];
              const b = u ? u(c) : 1;
              const m = u ? u(s) : 1;
              (t[2 * v] -= (p * h) / b),
                (t[2 * v + 1] -= (y * h) / b),
                (t[2 * g] += (p * h) / m),
                (t[2 * g + 1] += (y * h) / m);
            });
          }),
          (e.prototype.calGravity = function (t, e) {
            for (
              let n = this.center, r = this.gravity, o = this.degrees, i = e.length, a = 0;
              a < i;
              a++
            ) {
              const c = e[a];
              let s = c.x - n[0];
              let f = c.y - n[1];
              let d = r;
              if (this.getCenter) {
                const l = this.getCenter(c, o[a]);
                l &&
                  u.isNumber(l[0]) &&
                  u.isNumber(l[1]) &&
                  u.isNumber(l[2]) &&
                  ((s = c.x - l[0]), (f = c.y - l[1]), (d = l[2]));
              }
              d && ((t[2 * a] -= d * s), (t[2 * a + 1] -= d * f));
            }
          }),
          (e.prototype.updateVelocity = function (t, e, n, r) {
            const o = this;
            const i = n * o.damping;
            r.forEach((n, r) => {
              let u = t[2 * r] * i || 0.01;
              let a = t[2 * r + 1] * i || 0.01;
              const c = Math.sqrt(u * u + a * a);
              if (c > o.maxSpeed) {
                const s = o.maxSpeed / c;
                (u *= s), (a *= s);
              }
              (e[2 * r] = u), (e[2 * r + 1] = a);
            });
          }),
          (e.prototype.updatePosition = function (t, e, n) {
            n.forEach((n, r) => {
              if (u.isNumber(n.fx) && u.isNumber(n.fy)) return (n.x = n.fx), void (n.y = n.fy);
              const o = t[2 * r] * e;
              const i = t[2 * r + 1] * e;
              (n.x += o), (n.y += i);
            });
          }),
          (e.prototype.stop = function () {
            this.timeInterval &&
              typeof window !== 'undefined' &&
              window.clearInterval(this.timeInterval);
          }),
          (e.prototype.destroy = function () {
            this.stop(),
              (this.tick = null),
              (this.nodes = null),
              (this.edges = null),
              (this.destroyed = !0);
          }),
          (e.prototype.getType = function () {
            return 'gForce';
          }),
          e
        );
      })(i.Base);
      e.GForceLayout = c;
    },
    485(t, e, n) {
      'use strict';
      n.r(e);
      const r = n(227);
      e.default = r.GForceLayout;
    },
    7(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Base = void 0);
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
      e.Base = r;
    },
  }).default;
});
// # sourceMappingURL=gForceLayout.js.map
