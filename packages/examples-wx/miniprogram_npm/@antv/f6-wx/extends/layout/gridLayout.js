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
      o((o.s = 486))
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
              const s = i[o];
              const u = i[r];
              (n[s][u] = 1), t || (n[u][s] = 1);
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
    228(e, t, o) {
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
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.GridLayout = void 0);
      const i = o(10);
      const s = (function (e) {
        function t(t) {
          const o = e.call(this) || this;
          return (
            (o.begin = [0, 0]),
            (o.preventOverlap = !0),
            (o.preventOverlapPadding = 10),
            (o.condense = !1),
            (o.sortBy = 'degree'),
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
              sortBy: 'degree',
              nodeSize: 30,
            };
          }),
          (t.prototype.execute = function () {
            const e = this;
            const t = e.nodes;
            const o = t.length;
            const r = e.begin;
            if (o !== 0) {
              if (o === 1)
                return (t[0].x = r[0]), (t[0].y = r[1]), void (e.onLayoutEnd && e.onLayoutEnd());
              const n = e.edges;
              const s = [];
              t.forEach((e) => {
                s.push(e);
              });
              const u = {};
              if (
                (s.forEach((e, t) => {
                  u[e.id] = t;
                }),
                (e.sortBy === 'degree' || !i.isString(e.sortBy) || void 0 === s[0][e.sortBy]) &&
                  ((e.sortBy = 'degree'), i.isNaN(t[0].degree)))
              ) {
                const c = i.getDegree(s.length, u, n);
                s.forEach((e, t) => {
                  e.degree = c[t];
                });
              }
              s.sort((t, o) => {
                return o[e.sortBy] - t[e.sortBy];
              }),
                e.width || typeof window === 'undefined' || (e.width = window.innerWidth),
                e.height || typeof window === 'undefined' || (e.height = window.innerHeight);
              const l = e.rows;
              const a = e.cols != null ? e.cols : e.columns;
              if (
                ((e.cells = o),
                l != null && a != null
                  ? ((e.rows = l), (e.cols = a))
                  : l != null && a == null
                  ? ((e.rows = l), (e.cols = Math.ceil(e.cells / e.rows)))
                  : l == null && a != null
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
                  var f;
                  var d = e.small();
                  ((f = e.large()) + 1) * d >= e.cells ? e.large(f + 1) : e.small(d + 1);
                }
              (e.cellWidth = e.width / e.cols),
                (e.cellHeight = e.height / e.rows),
                e.condense && ((e.cellWidth = 0), (e.cellHeight = 0)),
                e.preventOverlap &&
                  s.forEach((t) => {
                    let o;
                    let r;
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
                    const n = e.preventOverlapPadding;
                    const s = o + n;
                    const u = r + n;
                    (e.cellWidth = Math.max(e.cellWidth, s)),
                      (e.cellHeight = Math.max(e.cellHeight, u));
                  }),
                (e.cellUsed = {}),
                (e.row = 0),
                (e.col = 0),
                (e.id2manPos = {});
              for (let p = 0; p < s.length; p++) {
                const h = s[p];
                let y = void 0;
                if (
                  (e.position && (y = e.position(h)), y && (void 0 !== y.row || void 0 !== y.col))
                ) {
                  const v = { row: y.row, col: y.col };
                  if (void 0 === v.col) for (v.col = 0; e.used(v.row, v.col); ) v.col++;
                  else if (void 0 === v.row) for (v.row = 0; e.used(v.row, v.col); ) v.row++;
                  (e.id2manPos[h.id] = v), e.use(v.row, v.col);
                }
                e.getPos(h);
              }
              return e.onLayoutEnd && e.onLayoutEnd(), { edges: n, nodes: s };
            }
            e.onLayoutEnd && e.onLayoutEnd();
          }),
          (t.prototype.small = function (e) {
            let t;
            const o = this.rows || 5;
            const r = this.cols || 5;
            e == null
              ? (t = Math.min(o, r))
              : Math.min(o, r) === this.rows
              ? (this.rows = e)
              : (this.cols = e);
            return t;
          }),
          (t.prototype.large = function (e) {
            let t;
            const o = this.rows || 5;
            const r = this.cols || 5;
            e == null
              ? (t = Math.max(o, r))
              : Math.max(o, r) === this.rows
              ? (this.rows = e)
              : (this.cols = e);
            return t;
          }),
          (t.prototype.used = function (e, t) {
            return this.cellUsed[`c-${e}-${t}`] || !1;
          }),
          (t.prototype.use = function (e, t) {
            this.cellUsed[`c-${e}-${t}`] = !0;
          }),
          (t.prototype.moveToNextCell = function () {
            const e = this.cols || 5;
            this.col++, this.col >= e && ((this.col = 0), this.row++);
          }),
          (t.prototype.getPos = function (e) {
            let t;
            let o;
            const r = this.begin;
            const n = this.cellWidth;
            const i = this.cellHeight;
            const s = this.id2manPos[e.id];
            if (s) (t = s.col * n + n / 2 + r[0]), (o = s.row * i + i / 2 + r[1]);
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
            return 'grid';
          }),
          t
        );
      })(o(7).Base);
      t.GridLayout = s;
    },
    486(e, t, o) {
      'use strict';
      o.r(t);
      const r = o(228);
      t.default = r.GridLayout;
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
// # sourceMappingURL=gridLayout.js.map
