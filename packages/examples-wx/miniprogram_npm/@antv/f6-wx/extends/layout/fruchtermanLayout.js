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
      n((n.s = 484))
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
              const c = i[r];
              (o[u][c] = 1), e || (o[c][u] = 1);
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
    226(t, e, n) {
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
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.FruchtermanLayout = void 0);
      const i = n(7);
      const u = n(10);
      const c = (function (t) {
        function e(e) {
          const n = t.call(this) || this;
          return (
            (n.maxIteration = 1e3),
            (n.gravity = 10),
            (n.speed = 5),
            (n.clustering = !1),
            (n.clusterGravity = 10),
            (n.nodes = []),
            (n.edges = []),
            (n.width = 300),
            (n.height = 300),
            (n.nodeMap = {}),
            (n.nodeIdxMap = {}),
            (n.onLayoutEnd = function () {}),
            (n.tick = function () {}),
            n.updateCfg(e),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.getDefaultCfg = function () {
            return { maxIteration: 1e3, gravity: 10, speed: 1, clustering: !1, clusterGravity: 10 };
          }),
          (e.prototype.execute = function () {
            const t = this;
            const e = this.nodes;
            if (
              (void 0 !== this.timeInterval &&
                typeof window !== 'undefined' &&
                window.clearInterval(this.timeInterval),
              e && e.length !== 0)
            ) {
              this.width || typeof window === 'undefined' || (this.width = window.innerWidth),
                this.height || typeof window === 'undefined' || (this.height = window.innerHeight),
                this.center || (this.center = [this.width / 2, this.height / 2]);
              const n = this.center;
              if (e.length === 1)
                return (
                  (e[0].x = n[0]), (e[0].y = n[1]), void (this.onLayoutEnd && this.onLayoutEnd())
                );
              const r = {};
              const o = {};
              return (
                e.forEach((e, n) => {
                  u.isNumber(e.x) || (e.x = Math.random() * t.width),
                    u.isNumber(e.y) || (e.y = Math.random() * t.height),
                    (r[e.id] = e),
                    (o[e.id] = n);
                }),
                (this.nodeMap = r),
                (this.nodeIdxMap = o),
                this.run()
              );
            }
            this.onLayoutEnd && this.onLayoutEnd();
          }),
          (e.prototype.run = function () {
            const t = this;
            const e = t.nodes;
            if (e) {
              const n = t.edges;
              const r = t.maxIteration;
              const o = t.center;
              const i = t.height * t.width;
              const c = Math.sqrt(i) / 10;
              const s = i / (e.length + 1);
              const a = Math.sqrt(s);
              const f = t.gravity;
              const y = t.speed;
              const l = t.clustering;
              const d = {};
              if (l)
                for (const p in (e.forEach((t) => {
                  if (void 0 === d[t.cluster]) {
                    const e = { name: t.cluster, cx: 0, cy: 0, count: 0 };
                    d[t.cluster] = e;
                  }
                  const n = d[t.cluster];
                  u.isNumber(t.x) && (n.cx += t.x), u.isNumber(t.y) && (n.cy += t.y), n.count++;
                }),
                d))
                  (d[p].cx /= d[p].count), (d[p].cy /= d[p].count);
              if (typeof window !== 'undefined') {
                let h = 0;
                return (
                  (this.timeInterval = window.setInterval(() => {
                    if (e) {
                      const i = [];
                      if (
                        (e.forEach((t, e) => {
                          i[e] = { x: 0, y: 0 };
                        }),
                        t.applyCalculate(e, n, i, a, s),
                        l)
                      ) {
                        const p = t.clusterGravity || f;
                        for (var v in (e.forEach((t, e) => {
                          if (u.isNumber(t.x) && u.isNumber(t.y)) {
                            const n = d[t.cluster];
                            const r = Math.sqrt(
                              (t.x - n.cx) * (t.x - n.cx) + (t.y - n.cy) * (t.y - n.cy),
                            );
                            const o = a * p;
                            (i[e].x -= (o * (t.x - n.cx)) / r), (i[e].y -= (o * (t.y - n.cy)) / r);
                          }
                        }),
                        d))
                          (d[v].cx = 0), (d[v].cy = 0), (d[v].count = 0);
                        for (var v in (e.forEach((t) => {
                          const e = d[t.cluster];
                          u.isNumber(t.x) && (e.cx += t.x),
                            u.isNumber(t.y) && (e.cy += t.y),
                            e.count++;
                        }),
                        d))
                          (d[v].cx /= d[v].count), (d[v].cy /= d[v].count);
                      }
                      e.forEach((t, e) => {
                        if (u.isNumber(t.x) && u.isNumber(t.y)) {
                          const n = 0.01 * a * f;
                          (i[e].x -= n * (t.x - o[0])), (i[e].y -= n * (t.y - o[1]));
                        }
                      }),
                        e.forEach((t, e) => {
                          if (u.isNumber(t.fx) && u.isNumber(t.fy))
                            return (t.x = t.fx), void (t.y = t.fy);
                          if (u.isNumber(t.x) && u.isNumber(t.y)) {
                            const n = Math.sqrt(i[e].x * i[e].x + i[e].y * i[e].y);
                            if (n > 0) {
                              const r = Math.min(c * (y / 800), n);
                              (t.x += (i[e].x / n) * r), (t.y += (i[e].y / n) * r);
                            }
                          }
                        }),
                        t.tick && t.tick(),
                        ++h >= r &&
                          (t.onLayoutEnd && t.onLayoutEnd(), window.clearInterval(t.timeInterval));
                    }
                  }, 0)),
                  { nodes: e, edges: n }
                );
              }
            }
          }),
          (e.prototype.applyCalculate = function (t, e, n, r, o) {
            this.calRepulsive(t, n, o), e && this.calAttractive(e, n, r);
          }),
          (e.prototype.calRepulsive = function (t, e, n) {
            t.forEach((r, o) => {
              (e[o] = { x: 0, y: 0 }),
                t.forEach((t, i) => {
                  if (
                    o !== i &&
                    u.isNumber(r.x) &&
                    u.isNumber(t.x) &&
                    u.isNumber(r.y) &&
                    u.isNumber(t.y)
                  ) {
                    let c = r.x - t.x;
                    let s = r.y - t.y;
                    let a = c * c + s * s;
                    if (a === 0) {
                      a = 1;
                      const f = o > i ? 1 : -1;
                      (c = 0.01 * f), (s = 0.01 * f);
                    }
                    const y = n / a;
                    (e[o].x += c * y), (e[o].y += s * y);
                  }
                });
            });
          }),
          (e.prototype.calAttractive = function (t, e, n) {
            const r = this;
            t.forEach((t) => {
              if (t.source && t.target) {
                const o = r.nodeIdxMap[t.source];
                const i = r.nodeIdxMap[t.target];
                if (o !== i) {
                  const c = r.nodeMap[t.source];
                  const s = r.nodeMap[t.target];
                  if (u.isNumber(s.x) && u.isNumber(c.x) && u.isNumber(s.y) && u.isNumber(c.y)) {
                    const a = s.x - c.x;
                    const f = s.y - c.y;
                    const y = Math.sqrt(a * a + f * f);
                    const l = (y * y) / n;
                    (e[i].x -= (a / y) * l),
                      (e[i].y -= (f / y) * l),
                      (e[o].x += (a / y) * l),
                      (e[o].y += (f / y) * l);
                  }
                }
              }
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
            return 'fruchterman';
          }),
          e
        );
      })(i.Base);
      e.FruchtermanLayout = c;
    },
    484(t, e, n) {
      'use strict';
      n.r(e);
      const r = n(226);
      e.default = r.FruchtermanLayout;
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
// # sourceMappingURL=fruchtermanLayout.js.map
