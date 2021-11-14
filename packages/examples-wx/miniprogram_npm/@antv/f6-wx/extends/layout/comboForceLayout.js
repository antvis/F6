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
    function o(r) {
      if (t[r]) return t[r].exports;
      const n = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
    }
    return (
      (o.m = e),
      (o.c = t),
      (o.d = function (e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (o.r = function (e) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (o.t = function (e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e;
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
        const r = Object.create(null);
        if (
          (o.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && typeof e !== 'string')
        )
          for (const n in e)
            o.d(
              r,
              n,
              ((t) => {
                return e[t];
              }).bind(null, n),
            );
        return r;
      }),
      (o.n = function (e) {
        const t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return o.d(t, 'a', t), t;
      }),
      (o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (o.p = ''),
      o((o.s = 295))
    );
  })({
    10(e, t, o) {
      'use strict';
      const r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, o, r) {
              void 0 === r && (r = o),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get() {
                    return t[o];
                  },
                });
            }
          : function (e, t, o, r) {
              void 0 === r && (r = o), (e[r] = t[o]);
            });
      const n =
        (this && this.__exportStar) ||
        function (e, t) {
          for (const o in e)
            o === 'default' || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
        };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n(o(11), t),
        n(o(12), t),
        n(o(13), t),
        n(o(14), t),
        n(o(15), t),
        n(o(16), t);
    },
    11(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.camelize = t.isString = void 0);
      t.isString = function (e) {
        return typeof e === 'string';
      };
      let r;
      let n;
      const i = /-(\w)/g;
      t.camelize =
        ((r = function (e) {
          return e.replace(i, (e, t) => {
            return t ? t.toUpperCase() : '';
          });
        }),
        (n = Object.create(null)),
        function (e) {
          return n[e] || (n[e] = r(e));
        });
    },
    12(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isArray = void 0),
        (t.isArray = Array.isArray);
    },
    13(e, t, o) {
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
        const o = parseFloat(e);
        return t.isNaN(o) ? e : o;
      };
    },
    14(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.traverseTreeUp =
          t.scaleMatrix =
          t.getAdjMatrix =
          t.floydWarshall =
          t.getDegree =
            void 0);
      t.getDegree = function (e, t, o) {
        for (var r = [], n = 0; n < e; n++) r[n] = 0;
        return o
          ? (o.forEach((e) => {
              e.source && (r[t[e.source]] += 1), e.target && (r[t[e.target]] += 1);
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
              : e[r][n] !== 0 && e[r][n]
              ? (t[r][n] = e[r][n])
              : (t[r][n] = 1 / 0);
        }
        for (let i = 0; i < o; i += 1)
          for (r = 0; r < o; r += 1)
            for (n = 0; n < o; n += 1) t[r][n] > t[r][i] + t[i][n] && (t[r][n] = t[r][i] + t[i][n]);
        return t;
      };
      t.getAdjMatrix = function (e, t) {
        const o = e.nodes;
        const r = e.edges;
        const n = [];
        const i = {};
        if (!o) throw new Error('invalid nodes data!');
        return (
          o &&
            o.forEach((e, t) => {
              i[e.id] = t;
              n.push([]);
            }),
          r &&
            r.forEach((e) => {
              const o = e.source;
              const r = e.target;
              const c = i[o];
              const a = i[r];
              (n[c][a] = 1), t || (n[a][c] = 1);
            }),
          n
        );
      };
      t.scaleMatrix = function (e, t) {
        const o = [];
        return (
          e.forEach((e) => {
            const r = [];
            e.forEach((e) => {
              r.push(e * t);
            }),
              o.push(r);
          }),
          o
        );
      };
      t.traverseTreeUp = function (e, t) {
        typeof t === 'function' &&
          (function e(t, o) {
            if (t && t.children)
              for (let r = t.children.length - 1; r >= 0; r--) if (!e(t.children[r], o)) return;
            return !!o(t);
          })(e, t);
      };
    },
    15(e, t, o) {
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
      var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, o = 1, r = arguments.length; o < r; o++)
                for (const n in (t = arguments[o]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
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
          const o = [];
          return (
            e.forEach((e) => {
              o.push(e);
            }),
            o.map((e) => {
              return t.clone(e);
            })
          );
        }
        if (r(e) === 'object' && e !== {}) {
          const i = n({}, e);
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
    16(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.isFunction = void 0);
      t.isFunction = function (e) {
        return typeof e === 'function';
      };
    },
    221(e, t, o) {
      'use strict';
      let r;
      const n =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (const o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            })(e, t);
        }),
        function (e, t) {
          if (typeof t !== 'function' && t !== null)
            throw new TypeError(`Class extends value ${String(t)} is not a constructor or null`);
          function o() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype = t === null ? Object.create(t) : ((o.prototype = t.prototype), new o()));
        });
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.ComboForceLayout = void 0);
      const i = o(7);
      const c = o(10);
      const a = (function (e) {
        function t(t) {
          const o = e.call(this) || this;
          return (
            (o.center = [0, 0]),
            (o.maxIteration = 100),
            (o.gravity = 10),
            (o.comboGravity = 10),
            (o.linkDistance = 10),
            (o.alpha = 1),
            (o.alphaMin = 0.001),
            (o.alphaDecay = 1 - Math.pow(o.alphaMin, 1 / 300)),
            (o.alphaTarget = 0),
            (o.velocityDecay = 0.6),
            (o.edgeStrength = 0.6),
            (o.nodeStrength = 30),
            (o.preventOverlap = !1),
            (o.preventNodeOverlap = !1),
            (o.preventComboOverlap = !1),
            (o.collideStrength = void 0),
            (o.nodeCollideStrength = 0.5),
            (o.comboCollideStrength = 0.5),
            (o.comboSpacing = 20),
            (o.comboPadding = 10),
            (o.optimizeRangeFactor = 1),
            (o.onTick = function () {}),
            (o.onLayoutEnd = function () {}),
            (o.depthAttractiveForceScale = 1),
            (o.depthRepulsiveForceScale = 2),
            (o.nodes = []),
            (o.edges = []),
            (o.combos = []),
            (o.comboTrees = []),
            (o.width = 300),
            (o.height = 300),
            (o.bias = []),
            (o.nodeMap = {}),
            (o.oriComboMap = {}),
            (o.indexMap = {}),
            (o.comboMap = {}),
            (o.previousLayouted = !1),
            o.updateCfg(t),
            o
          );
        }
        return (
          n(t, e),
          (t.prototype.getDefaultCfg = function () {
            return {
              maxIteration: 100,
              center: [0, 0],
              gravity: 10,
              speed: 1,
              comboGravity: 30,
              preventOverlap: !1,
              preventComboOverlap: !0,
              preventNodeOverlap: !0,
              nodeSpacing: void 0,
              collideStrength: void 0,
              nodeCollideStrength: 0.5,
              comboCollideStrength: 0.5,
              comboSpacing: 20,
              comboPadding: 10,
              edgeStrength: 0.6,
              nodeStrength: 30,
              linkDistance: 10,
            };
          }),
          (t.prototype.execute = function () {
            const e = this.nodes;
            const t = this.center;
            if (
              ((this.comboTree = { id: 'comboTreeRoot', depth: -1, children: this.comboTrees }),
              e && e.length !== 0)
            ) {
              if (e.length === 1)
                return (
                  (e[0].x = t[0]), (e[0].y = t[1]), void (this.onLayoutEnd && this.onLayoutEnd())
                );
              this.initVals(), this.run(), this.onLayoutEnd && this.onLayoutEnd();
            } else this.onLayoutEnd && this.onLayoutEnd();
          }),
          (t.prototype.run = function () {
            const e = this;
            const t = e.nodes;
            const o = e.previousLayouted ? e.maxIteration / 5 : e.maxIteration;
            e.width || typeof window === 'undefined' || (e.width = window.innerWidth),
              e.height || typeof window === 'undefined' || (e.height = window.innerHeight);
            const r = e.center;
            const n = e.velocityDecay;
            const i = e.comboMap;
            e.previousLayouted || e.initPos(i);
            for (
              let a = function (o) {
                  const r = [];
                  t.forEach((e, t) => {
                    r[t] = { x: 0, y: 0 };
                  }),
                    e.applyCalculate(r),
                    e.applyComboCenterForce(r),
                    t.forEach((e, t) => {
                      c.isNumber(e.x) &&
                        c.isNumber(e.y) &&
                        ((e.x += r[t].x * n), (e.y += r[t].y * n));
                    }),
                    (e.alpha += (e.alphaTarget - e.alpha) * e.alphaDecay),
                    e.onTick();
                },
                u = 0;
              u < o;
              u++
            )
              a();
            const s = [0, 0];
            t.forEach((e) => {
              c.isNumber(e.x) && c.isNumber(e.y) && ((s[0] += e.x), (s[1] += e.y));
            }),
              (s[0] /= t.length),
              (s[1] /= t.length);
            const f = [r[0] - s[0], r[1] - s[1]];
            t.forEach((e, t) => {
              c.isNumber(e.x) && c.isNumber(e.y) && ((e.x += f[0]), (e.y += f[1]));
            }),
              e.combos.forEach((e) => {
                const t = i[e.id];
                t && t.empty && ((e.x = t.cx || e.x), (e.y = t.cy || e.y));
              }),
              (e.previousLayouted = !0);
          }),
          (t.prototype.initVals = function () {
            const e = this.edges;
            const t = this.nodes;
            const o = this.combos;
            const r = {};
            const n = {};
            const i = {};
            t.forEach((e, t) => {
              (n[e.id] = e), (i[e.id] = t);
            }),
              (this.nodeMap = n),
              (this.indexMap = i);
            const a = {};
            o.forEach((e) => {
              a[e.id] = e;
            }),
              (this.oriComboMap = a),
              (this.comboMap = this.getComboMap());
            const u = this.preventOverlap;
            (this.preventComboOverlap = this.preventComboOverlap || u),
              (this.preventNodeOverlap = this.preventNodeOverlap || u);
            const s = this.collideStrength;
            s && ((this.comboCollideStrength = s), (this.nodeCollideStrength = s)),
              (this.comboCollideStrength = this.comboCollideStrength
                ? this.comboCollideStrength
                : 0),
              (this.nodeCollideStrength = this.nodeCollideStrength ? this.nodeCollideStrength : 0);
            for (var f = 0; f < e.length; ++f)
              r[e[f].source] ? r[e[f].source]++ : (r[e[f].source] = 1),
                r[e[f].target] ? r[e[f].target]++ : (r[e[f].target] = 1);
            const d = [];
            for (f = 0; f < e.length; ++f)
              d[f] = r[e[f].source] / (r[e[f].source] + r[e[f].target]);
            this.bias = d;
            let p;
            let h;
            const l = this.nodeSize;
            const y = this.nodeSpacing;
            if (
              ((h = c.isNumber(y)
                ? function () {
                    return y;
                  }
                : c.isFunction(y)
                ? y
                : function () {
                    return 0;
                  }),
              (this.nodeSpacing = h),
              l)
            )
              if (c.isFunction(l))
                p = function (e) {
                  return l(e);
                };
              else if (c.isArray(l)) {
                const v = (l[0] > l[1] ? l[0] : l[1]) / 2;
                p = function (e) {
                  return v;
                };
              } else {
                const m = l / 2;
                p = function (e) {
                  return m;
                };
              }
            else
              p = function (e) {
                return e.size
                  ? c.isArray(e.size)
                    ? (e.size[0] > e.size[1] ? e.size[0] : e.size[1]) / 2
                    : e.size / 2
                  : 10;
              };
            this.nodeSize = p;
            let b;
            const g = this.comboSpacing;
            (b = c.isNumber(g)
              ? function () {
                  return g;
                }
              : c.isFunction(g)
              ? g
              : function () {
                  return 0;
                }),
              (this.comboSpacing = b);
            let x;
            const S = this.comboPadding;
            (x = c.isNumber(S)
              ? function () {
                  return S;
                }
              : c.isArray(S)
              ? function () {
                  return Math.max.apply(null, S);
                }
              : c.isFunction(S)
              ? S
              : function () {
                  return 0;
                }),
              (this.comboPadding = x);
            let M;
            let O = this.linkDistance;
            O || (O = 10),
              (M = c.isNumber(O)
                ? function (e) {
                    return O;
                  }
                : O),
              (this.linkDistance = M);
            let N;
            let C = this.edgeStrength;
            C || (C = 1),
              (N = c.isNumber(C)
                ? function (e) {
                    return C;
                  }
                : C),
              (this.edgeStrength = N);
            let E;
            let _ = this.nodeStrength;
            _ || (_ = 30),
              (E = c.isNumber(_)
                ? function (e) {
                    return _;
                  }
                : _),
              (this.nodeStrength = E);
          }),
          (t.prototype.initPos = function (e) {
            this.nodes.forEach((t, o) => {
              const r = t.comboId;
              const n = e[r];
              r && n
                ? ((t.x = n.cx + 100 / (o + 1)), (t.y = n.cy + 100 / (o + 1)))
                : ((t.x = 100 / (o + 1)), (t.y = 100 / (o + 1)));
            });
          }),
          (t.prototype.getComboMap = function () {
            const e = this;
            const t = e.nodeMap;
            const o = e.indexMap;
            const r = e.comboTrees;
            const n = e.oriComboMap;
            const i = {};
            return (
              (r || []).forEach((r) => {
                const a = [];
                c.traverseTreeUp(r, (r) => {
                  if (r.itemType === 'node') return !0;
                  if (!n[r.id]) return !0;
                  if (void 0 === i[r.id]) {
                    const u = {
                      id: r.id,
                      name: r.id,
                      cx: 0,
                      cy: 0,
                      count: 0,
                      depth: e.oriComboMap[r.id].depth,
                      children: [],
                    };
                    i[r.id] = u;
                  }
                  const s = r.children;
                  s &&
                    s.forEach((e) => {
                      if (!i[e.id] && !t[e.id]) return !0;
                      a.push(e);
                    });
                  const f = i[r.id];
                  if (((f.cx = 0), (f.cy = 0), a.length === 0)) {
                    f.empty = !0;
                    const d = n[r.id];
                    const p = Object.keys(t).length;
                    const h = `${r.id}-visual-child-${p}`;
                    const l = { id: h, x: d.x, y: d.y, depth: f.depth + 1, itemType: 'node' };
                    e.nodes.push(l), (t[h] = l), (o[h] = p), (f.cx = d.x), (f.cy = d.y), a.push(l);
                  }
                  return (
                    a.forEach((e) => {
                      if ((f.count++, e.itemType !== 'node')) {
                        const o = i[e.id];
                        return (
                          c.isNumber(o.cx) && (f.cx += o.cx),
                          void (c.isNumber(o.cy) && (f.cy += o.cy))
                        );
                      }
                      const r = t[e.id];
                      r && (c.isNumber(r.x) && (f.cx += r.x), c.isNumber(r.y) && (f.cy += r.y));
                    }),
                    (f.cx /= f.count),
                    (f.cy /= f.count),
                    (f.children = a),
                    !0
                  );
                });
              }),
              i
            );
          }),
          (t.prototype.applyComboCenterForce = function (e) {
            const t = this.gravity;
            const o = this.comboGravity || t;
            const r = this.alpha;
            const n = this.comboTrees;
            const i = this.indexMap;
            const a = this.nodeMap;
            const u = this.comboMap;
            (n || []).forEach((t) => {
              c.traverseTreeUp(t, (t) => {
                if (t.itemType === 'node') return !0;
                if (!u[t.id]) return !0;
                const n = u[t.id];
                const s = ((n.depth + 1) / 10) * 0.5;
                const f = n.cx;
                const d = n.cy;
                return (
                  (n.cx = 0),
                  (n.cy = 0),
                  n.children.forEach((t) => {
                    if (t.itemType !== 'node') {
                      const p = u[t.id];
                      return (
                        p && c.isNumber(p.cx) && (n.cx += p.cx),
                        void (p && c.isNumber(p.cy) && (n.cy += p.cy))
                      );
                    }
                    const h = a[t.id];
                    const l = h.x - f || 0.005;
                    const y = h.y - d || 0.005;
                    const v = Math.sqrt(l * l + y * y);
                    const m = i[h.id];
                    const b = ((o * r) / v) * s;
                    (e[m].x -= l * b),
                      (e[m].y -= y * b),
                      c.isNumber(h.x) && (n.cx += h.x),
                      c.isNumber(h.y) && (n.cy += h.y);
                  }),
                  (n.cx /= n.count),
                  (n.cy /= n.count),
                  !0
                );
              });
            });
          }),
          (t.prototype.applyCalculate = function (e) {
            const t = this.comboMap;
            const o = this.nodes;
            const r = {};
            o.forEach((e, t) => {
              o.forEach((o, n) => {
                if (!(t < n)) {
                  const i = e.x - o.x || 0.005;
                  const c = e.y - o.y || 0.005;
                  let a = i * i + c * c;
                  const u = Math.sqrt(a);
                  a < 1 && (a = u),
                    (r[`${e.id}-${o.id}`] = { vx: i, vy: c, vl2: a, vl: u }),
                    (r[`${o.id}-${e.id}`] = { vl2: a, vl: u, vx: -i, vy: -c });
                }
              });
            }),
              this.updateComboSizes(t),
              this.calRepulsive(e, r),
              this.calAttractive(e, r),
              this.preventComboOverlap && this.comboNonOverlapping(e, t);
          }),
          (t.prototype.updateComboSizes = function (e) {
            const t = this;
            const o = t.comboTrees;
            const r = t.nodeMap;
            const n = t.nodeSize;
            const i = t.comboSpacing;
            const a = t.comboPadding;
            (o || []).forEach((o) => {
              const u = [];
              c.traverseTreeUp(o, (o) => {
                if (o.itemType === 'node') return !0;
                const s = e[o.id];
                if (!s) return !1;
                const f = o.children;
                f &&
                  f.forEach((t) => {
                    (e[t.id] || r[t.id]) && u.push(t);
                  }),
                  (s.minX = 1 / 0),
                  (s.minY = 1 / 0),
                  (s.maxX = -1 / 0),
                  (s.maxY = -1 / 0),
                  u.forEach((e) => {
                    if (e.itemType !== 'node') return !0;
                    const t = r[e.id];
                    if (!t) return !0;
                    const o = n(t);
                    const i = t.x - o;
                    const c = t.y - o;
                    const a = t.x + o;
                    const u = t.y + o;
                    s.minX > i && (s.minX = i),
                      s.minY > c && (s.minY = c),
                      s.maxX < a && (s.maxX = a),
                      s.maxY < u && (s.maxY = u);
                  });
                let d = t.oriComboMap[o.id].size || 10;
                c.isArray(d) && (d = d[0]);
                const p = Math.max(s.maxX - s.minX, s.maxY - s.minY, d);
                return (s.r = p / 2 + i(s) / 2 + a(s)), !0;
              });
            });
          }),
          (t.prototype.comboNonOverlapping = function (e, t) {
            const o = this.comboTree;
            const r = this.comboCollideStrength;
            const n = this.indexMap;
            const i = this.nodeMap;
            c.traverseTreeUp(o, (o) => {
              if (!t[o.id] && !i[o.id] && o.id !== 'comboTreeRoot') return !1;
              const c = o.children;
              return (
                c &&
                  c.length > 1 &&
                  c.forEach((o, a) => {
                    if (o.itemType === 'node') return !1;
                    const u = t[o.id];
                    u &&
                      c.forEach((c, s) => {
                        if (a <= s) return !1;
                        if (c.itemType === 'node') return !1;
                        const f = t[c.id];
                        if (!f) return !1;
                        const d = u.cx - f.cx || 0.005;
                        const p = u.cy - f.cy || 0.005;
                        const h = d * d + p * p;
                        const l = u.r;
                        const y = f.r;
                        const v = l + y;
                        const m = y * y;
                        const b = l * l;
                        if (h < v * v) {
                          const g = o.children;
                          if (!g || g.length === 0) return !1;
                          const x = c.children;
                          if (!x || x.length === 0) return !1;
                          const S = Math.sqrt(h);
                          const M = ((v - S) / S) * r;
                          const O = d * M;
                          const N = p * M;
                          const C = m / (b + m);
                          const E = 1 - C;
                          g.forEach((t) => {
                            if (t.itemType !== 'node') return !1;
                            if (i[t.id]) {
                              const o = n[t.id];
                              x.forEach((t) => {
                                if (t.itemType !== 'node') return !1;
                                if (!i[t.id]) return !1;
                                const r = n[t.id];
                                (e[o].x += O * C),
                                  (e[o].y += N * C),
                                  (e[r].x -= O * E),
                                  (e[r].y -= N * E);
                              });
                            }
                          });
                        }
                      });
                  }),
                !0
              );
            });
          }),
          (t.prototype.calRepulsive = function (e, t) {
            const o = this;
            const r = o.nodes;
            const n = o.width * o.optimizeRangeFactor;
            const i = o.nodeStrength;
            const c = o.alpha;
            const a = o.nodeCollideStrength;
            const u = o.preventNodeOverlap;
            const s = o.nodeSize;
            const f = o.nodeSpacing;
            const d = o.depthRepulsiveForceScale;
            const p = o.center;
            r.forEach((h, l) => {
              if (h.x && h.y) {
                if (p) {
                  const y = o.gravity;
                  const v = h.x - p[0] || 0.005;
                  const m = h.y - p[1] || 0.005;
                  const b = Math.sqrt(v * v + m * m);
                  (e[l].x -= (v * y * c) / b), (e[l].y -= (m * y * c) / b);
                }
                r.forEach((o, r) => {
                  if (l !== r && o.x && o.y) {
                    const p = t[`${h.id}-${o.id}`];
                    const y = p.vl2;
                    const v = p.vl;
                    if (!(v > n)) {
                      const m = t[`${h.id}-${o.id}`];
                      const b = m.vx;
                      const g = m.vy;
                      let x = Math.log(Math.abs(o.depth - h.depth) / 10) + 1 || 1;
                      (x = x < 1 ? 1 : x), o.comboId !== h.comboId && (x += 1);
                      const S = x ? Math.pow(d, x) : 1;
                      const M = ((i(o) * c) / y) * S;
                      if (((e[l].x += b * M), (e[l].y += g * M), l < r && u)) {
                        const O = s(h) + f(h);
                        const N = s(o) + f(o);
                        const C = O + N;
                        if (y < C * C) {
                          const E = ((C - v) / v) * a;
                          const _ = N * N;
                          let j = _ / (O * O + _);
                          const T = b * E;
                          const w = g * E;
                          (e[l].x += T * j),
                            (e[l].y += w * j),
                            (j = 1 - j),
                            (e[r].x -= T * j),
                            (e[r].y -= w * j);
                        }
                      }
                    }
                  }
                });
              }
            });
          }),
          (t.prototype.calAttractive = function (e, t) {
            const o = this;
            const r = o.edges;
            const n = o.linkDistance;
            const i = o.alpha;
            const a = o.edgeStrength;
            const u = o.bias;
            const s = o.depthAttractiveForceScale;
            r.forEach((r, f) => {
              if (r.source && r.target && r.source !== r.target) {
                const d = o.indexMap[r.source];
                const p = o.indexMap[r.target];
                const h = o.nodeMap[r.source];
                const l = o.nodeMap[r.target];
                if (h && l) {
                  let y = Math.log(Math.abs(h.depth - l.depth) / 10);
                  h.comboId === l.comboId && (y /= 2);
                  let v = y ? Math.pow(s, y) : 1;
                  if (
                    (h.comboId !== l.comboId && v === 1
                      ? (v = s / 2)
                      : h.comboId === l.comboId && (v = 2),
                    c.isNumber(l.x) && c.isNumber(h.x) && c.isNumber(l.y) && c.isNumber(h.y))
                  ) {
                    const m = t[`${r.target}-${r.source}`];
                    const b = m.vl;
                    const g = m.vx;
                    const x = m.vy;
                    const S = ((b - n(r)) / b) * i * a(r) * v;
                    const M = g * S;
                    const O = x * S;
                    const N = u[f];
                    (e[p].x -= M * N),
                      (e[p].y -= O * N),
                      (e[d].x += M * (1 - N)),
                      (e[d].y += O * (1 - N));
                  }
                }
              }
            });
          }),
          (t.prototype.getType = function () {
            return 'comboForce';
          }),
          t
        );
      })(i.Base);
      t.ComboForceLayout = a;
    },
    295(e, t, o) {
      'use strict';
      o.r(t);
      const r = o(221);
      t.default = r.ComboForceLayout;
    },
    7(e, t, o) {
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
// # sourceMappingURL=comboForceLayout.js.map
