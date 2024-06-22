// @observablehq/runtime v4.10.0 Copyright 2021 Observable, Inc.
function e(e, t, n) {
  n = n || {};
  var r = e.ownerDocument,
    i = r.defaultView.CustomEvent;
  "function" == typeof i
    ? (i = new i(t, { detail: n }))
    : ((i = r.createEvent("Event")).initEvent(t, !1, !1), (i.detail = n)),
    e.dispatchEvent(i);
}
function t(e) {
  return (
    Array.isArray(e) ||
    e instanceof Int8Array ||
    e instanceof Int16Array ||
    e instanceof Int32Array ||
    e instanceof Uint8Array ||
    e instanceof Uint8ClampedArray ||
    e instanceof Uint16Array ||
    e instanceof Uint32Array ||
    e instanceof Float32Array ||
    e instanceof Float64Array
  );
}
function n(e) {
  return e === (0 | e) + "";
}
function r(e) {
  const t = document.createElement("span");
  return (
    (t.className = "observablehq--cellname"), (t.textContent = `${e} = `), t
  );
}
const i = Symbol.prototype.toString;
function o(e) {
  return i.call(e);
}
const {
    getOwnPropertySymbols: a,
    prototype: { hasOwnProperty: s },
  } = Object,
  { toStringTag: u } = Symbol,
  l = {},
  c = a;
function d(e, t) {
  return s.call(e, t);
}
function f(e) {
  return e[u] || (e.constructor && e.constructor.name) || "Object";
}
function p(e, t) {
  try {
    const n = e[t];
    return n && n.constructor, n;
  } catch (e) {
    return l;
  }
}
const h = [
  { symbol: "@@__IMMUTABLE_INDEXED__@@", name: "Indexed", modifier: !0 },
  { symbol: "@@__IMMUTABLE_KEYED__@@", name: "Keyed", modifier: !0 },
  { symbol: "@@__IMMUTABLE_LIST__@@", name: "List", arrayish: !0 },
  { symbol: "@@__IMMUTABLE_MAP__@@", name: "Map" },
  {
    symbol: "@@__IMMUTABLE_ORDERED__@@",
    name: "Ordered",
    modifier: !0,
    prefix: !0,
  },
  { symbol: "@@__IMMUTABLE_RECORD__@@", name: "Record" },
  { symbol: "@@__IMMUTABLE_SET__@@", name: "Set", arrayish: !0, setish: !0 },
  { symbol: "@@__IMMUTABLE_STACK__@@", name: "Stack", arrayish: !0 },
];
function m(e) {
  try {
    let t = h.filter(({ symbol: t }) => !0 === e[t]);
    if (!t.length) return;
    const n = t.find((e) => !e.modifier),
      r = "Map" === n.name && t.find((e) => e.modifier && e.prefix),
      i = t.some((e) => e.arrayish),
      o = t.some((e) => e.setish);
    return {
      name: `${r ? r.name : ""}${n.name}`,
      symbols: t,
      arrayish: i && !o,
      setish: o,
    };
  } catch (e) {
    return null;
  }
}
const { getPrototypeOf: v, getOwnPropertyDescriptors: b } = Object,
  _ = v({});
function w(n, i, o, a) {
  let s,
    u,
    l,
    c,
    d = t(n);
  n instanceof Map
    ? n instanceof n.constructor
      ? ((s = `Map(${n.size})`), (u = g))
      : ((s = "Map()"), (u = j))
    : n instanceof Set
    ? n instanceof n.constructor
      ? ((s = `Set(${n.size})`), (u = y))
      : ((s = "Set()"), (u = j))
    : d
    ? ((s = `${n.constructor.name}(${n.length})`), (u = x))
    : (c = m(n))
    ? ((s = `Immutable.${c.name}${"Record" === c.name ? "" : `(${n.size})`}`),
      (d = c.arrayish),
      (u = c.arrayish ? C : c.setish ? E : P))
    : a
    ? ((s = f(n)), (u = N))
    : ((s = f(n)), (u = j));
  const p = document.createElement("span");
  (p.className = "observablehq--expanded"), o && p.appendChild(r(o));
  const h = p.appendChild(document.createElement("a"));
  (h.innerHTML =
    "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M4 7L0 1h8z' fill='currentColor' />\n  </svg>"),
    h.appendChild(document.createTextNode(`${s}${d ? " [" : " {"}`)),
    h.addEventListener("mouseup", function (e) {
      e.stopPropagation(), ae(p, k(n, null, o, a));
    }),
    (u = u(n));
  for (let e = 0; !(l = u.next()).done && e < 20; ++e) p.appendChild(l.value);
  if (!l.done) {
    const t = p.appendChild(document.createElement("a"));
    (t.className = "observablehq--field"),
      (t.style.display = "block"),
      t.appendChild(document.createTextNode("  … more")),
      t.addEventListener("mouseup", function (t) {
        t.stopPropagation(),
          p.insertBefore(l.value, p.lastChild.previousSibling);
        for (let e = 0; !(l = u.next()).done && e < 19; ++e)
          p.insertBefore(l.value, p.lastChild.previousSibling);
        l.done && p.removeChild(p.lastChild.previousSibling), e(p, "load");
      });
  }
  return p.appendChild(document.createTextNode(d ? "]" : "}")), p;
}
function* g(e) {
  for (const [t, n] of e) yield M(t, n);
  yield* j(e);
}
function* y(e) {
  for (const t of e) yield L(t);
  yield* j(e);
}
function* E(e) {
  for (const t of e) yield L(t);
}
function* x(e) {
  for (let t = 0, n = e.length; t < n; ++t)
    t in e && (yield q(t, p(e, t), "observablehq--index"));
  for (const t in e)
    !n(t) && d(e, t) && (yield q(t, p(e, t), "observablehq--key"));
  for (const t of c(e)) yield q(o(t), p(e, t), "observablehq--symbol");
}
function* C(e) {
  let t = 0;
  for (const n = e.size; t < n; ++t) yield q(t, e.get(t), !0);
}
function* N(e) {
  for (const t in b(e)) yield q(t, p(e, t), "observablehq--key");
  for (const t of c(e)) yield q(o(t), p(e, t), "observablehq--symbol");
  const t = v(e);
  t && t !== _ && (yield S(t));
}
function* j(e) {
  for (const t in e) d(e, t) && (yield q(t, p(e, t), "observablehq--key"));
  for (const t of c(e)) yield q(o(t), p(e, t), "observablehq--symbol");
  const t = v(e);
  t && t !== _ && (yield S(t));
}
function* P(e) {
  for (const [t, n] of e) yield q(t, n, "observablehq--key");
}
function S(e) {
  const t = document.createElement("div"),
    n = t.appendChild(document.createElement("span"));
  return (
    (t.className = "observablehq--field"),
    (n.className = "observablehq--prototype-key"),
    (n.textContent = "  <prototype>"),
    t.appendChild(document.createTextNode(": ")),
    t.appendChild(oe(e, void 0, void 0, void 0, !0)),
    t
  );
}
function q(e, t, n) {
  const r = document.createElement("div"),
    i = r.appendChild(document.createElement("span"));
  return (
    (r.className = "observablehq--field"),
    (i.className = n),
    (i.textContent = `  ${e}`),
    r.appendChild(document.createTextNode(": ")),
    r.appendChild(oe(t)),
    r
  );
}
function M(e, t) {
  const n = document.createElement("div");
  return (
    (n.className = "observablehq--field"),
    n.appendChild(document.createTextNode("  ")),
    n.appendChild(oe(e)),
    n.appendChild(document.createTextNode(" => ")),
    n.appendChild(oe(t)),
    n
  );
}
function L(e) {
  const t = document.createElement("div");
  return (
    (t.className = "observablehq--field"),
    t.appendChild(document.createTextNode("  ")),
    t.appendChild(oe(e)),
    t
  );
}
function $(e) {
  const t = window.getSelection();
  return (
    "Range" === t.type &&
    (t.containsNode(e, !0) ||
      t.anchorNode.isSelfOrDescendant(e) ||
      t.focusNode.isSelfOrDescendant(e))
  );
}
function k(e, n, i, o) {
  let a,
    s,
    u,
    l,
    c = t(e);
  if (
    (e instanceof Map
      ? e instanceof e.constructor
        ? ((a = `Map(${e.size})`), (s = O))
        : ((a = "Map()"), (s = D))
      : e instanceof Set
      ? e instanceof e.constructor
        ? ((a = `Set(${e.size})`), (s = T))
        : ((a = "Set()"), (s = D))
      : c
      ? ((a = `${e.constructor.name}(${e.length})`), (s = R))
      : (l = m(e))
      ? ((a = `Immutable.${l.name}${"Record" === l.name ? "" : `(${e.size})`}`),
        (c = l.arrayish),
        (s = l.arrayish ? U : l.setish ? A : I))
      : ((a = f(e)), (s = D)),
    n)
  ) {
    const t = document.createElement("span");
    return (
      (t.className = "observablehq--shallow"),
      i && t.appendChild(r(i)),
      t.appendChild(document.createTextNode(a)),
      t.addEventListener("mouseup", function (n) {
        $(t) || (n.stopPropagation(), ae(t, k(e)));
      }),
      t
    );
  }
  const d = document.createElement("span");
  (d.className = "observablehq--collapsed"), i && d.appendChild(r(i));
  const p = d.appendChild(document.createElement("a"));
  (p.innerHTML =
    "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M7 4L1 8V0z' fill='currentColor' />\n  </svg>"),
    p.appendChild(document.createTextNode(`${a}${c ? " [" : " {"}`)),
    d.addEventListener(
      "mouseup",
      function (t) {
        $(d) || (t.stopPropagation(), ae(d, w(e, 0, i, o)));
      },
      !0,
    ),
    (s = s(e));
  for (let e = 0; !(u = s.next()).done && e < 20; ++e)
    e > 0 && d.appendChild(document.createTextNode(", ")),
      d.appendChild(u.value);
  return (
    u.done || d.appendChild(document.createTextNode(", …")),
    d.appendChild(document.createTextNode(c ? "]" : "}")),
    d
  );
}
function* O(e) {
  for (const [t, n] of e) yield B(t, n);
  yield* D(e);
}
function* T(e) {
  for (const t of e) yield oe(t, !0);
  yield* D(e);
}
function* A(e) {
  for (const t of e) yield oe(t, !0);
}
function* U(e) {
  let t = -1,
    n = 0;
  for (const r = e.size; n < r; ++n)
    n > t + 1 && (yield F(n - t - 1)), yield oe(e.get(n), !0), (t = n);
  n > t + 1 && (yield F(n - t - 1));
}
function* R(e) {
  let t = -1,
    r = 0;
  for (const n = e.length; r < n; ++r)
    r in e &&
      (r > t + 1 && (yield F(r - t - 1)), yield oe(p(e, r), !0), (t = r));
  r > t + 1 && (yield F(r - t - 1));
  for (const t in e)
    !n(t) && d(e, t) && (yield z(t, p(e, t), "observablehq--key"));
  for (const t of c(e)) yield z(o(t), p(e, t), "observablehq--symbol");
}
function* D(e) {
  for (const t in e) d(e, t) && (yield z(t, p(e, t), "observablehq--key"));
  for (const t of c(e)) yield z(o(t), p(e, t), "observablehq--symbol");
}
function* I(e) {
  for (const [t, n] of e) yield z(t, n, "observablehq--key");
}
function F(e) {
  const t = document.createElement("span");
  return (
    (t.className = "observablehq--empty"),
    (t.textContent = 1 === e ? "empty" : `empty × ${e}`),
    t
  );
}
function z(e, t, n) {
  const r = document.createDocumentFragment(),
    i = r.appendChild(document.createElement("span"));
  return (
    (i.className = n),
    (i.textContent = e),
    r.appendChild(document.createTextNode(": ")),
    r.appendChild(oe(t, !0)),
    r
  );
}
function B(e, t) {
  const n = document.createDocumentFragment();
  return (
    n.appendChild(oe(e, !0)),
    n.appendChild(document.createTextNode(" => ")),
    n.appendChild(oe(t, !0)),
    n
  );
}
function H(e, t) {
  var n = e + "",
    r = n.length;
  return r < t ? new Array(t - r + 1).join(0) + n : n;
}
function W(e) {
  return e < 0 ? "-" + H(-e, 6) : e > 9999 ? "+" + H(e, 6) : H(e, 4);
}
var V = Error.prototype.toString;
var G = RegExp.prototype.toString;
function K(e) {
  return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, Y);
}
function Y(e) {
  var t = e.charCodeAt(0);
  switch (t) {
    case 8:
      return "\\b";
    case 9:
      return "\\t";
    case 11:
      return "\\v";
    case 12:
      return "\\f";
    case 13:
      return "\\r";
  }
  return t < 16
    ? "\\x0" + t.toString(16)
    : t < 32
    ? "\\x" + t.toString(16)
    : "\\" + e;
}
function J(e, t) {
  for (var n = 0; t.exec(e); ) ++n;
  return n;
}
var X = Function.prototype.toString,
  Q = { prefix: "async ƒ" },
  Z = { prefix: "async ƒ*" },
  ee = { prefix: "class" },
  te = { prefix: "ƒ" },
  ne = { prefix: "ƒ*" };
function re(e, t, n) {
  var i = document.createElement("span");
  (i.className = "observablehq--function"), n && i.appendChild(r(n));
  var o = i.appendChild(document.createElement("span"));
  return (
    (o.className = "observablehq--keyword"),
    (o.textContent = e.prefix),
    i.appendChild(document.createTextNode(t)),
    i
  );
}
const {
  prototype: { toString: ie },
} = Object;
function oe(e, t, n, i, a) {
  let s = typeof e;
  switch (s) {
    case "boolean":
    case "undefined":
      e += "";
      break;
    case "number":
      e = 0 === e && 1 / e < 0 ? "-0" : e + "";
      break;
    case "bigint":
      e += "n";
      break;
    case "symbol":
      e = o(e);
      break;
    case "function":
      return (function (e, t) {
        var n,
          r,
          i = X.call(e);
        switch (e.constructor && e.constructor.name) {
          case "AsyncFunction":
            n = Q;
            break;
          case "AsyncGeneratorFunction":
            n = Z;
            break;
          case "GeneratorFunction":
            n = ne;
            break;
          default:
            n = /^class\b/.test(i) ? ee : te;
        }
        return n === ee
          ? re(n, "", t)
          : (r = /^(?:async\s*)?(\w+)\s*=>/.exec(i))
          ? re(n, "(" + r[1] + ")", t)
          : (r = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i)) ||
            (r =
              /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(
                i,
              ))
          ? re(n, r[1] ? "(" + r[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t)
          : re(n, "(…)", t);
      })(e, i);
    case "string":
      return (function (e, t, n, i) {
        if (!1 === t) {
          if (J(e, /["\n]/g) <= J(e, /`|\${/g)) {
            const t = document.createElement("span");
            i && t.appendChild(r(i));
            const n = t.appendChild(document.createElement("span"));
            return (
              (n.className = "observablehq--string"),
              (n.textContent = JSON.stringify(e)),
              t
            );
          }
          const o = e.split("\n");
          if (o.length > 20 && !n) {
            const n = document.createElement("div");
            i && n.appendChild(r(i));
            const a = n.appendChild(document.createElement("span"));
            (a.className = "observablehq--string"),
              (a.textContent = "`" + K(o.slice(0, 20).join("\n")));
            const s = n.appendChild(document.createElement("span")),
              u = o.length - 20;
            return (
              (s.textContent = `Show ${u} truncated line${u > 1 ? "s" : ""}`),
              (s.className = "observablehq--string-expand"),
              s.addEventListener("mouseup", function (r) {
                r.stopPropagation(), ae(n, oe(e, t, !0, i));
              }),
              n
            );
          }
          const a = document.createElement("span");
          i && a.appendChild(r(i));
          const s = a.appendChild(document.createElement("span"));
          return (
            (s.className =
              "observablehq--string" + (n ? " observablehq--expanded" : "")),
            (s.textContent = "`" + K(e) + "`"),
            a
          );
        }
        const o = document.createElement("span");
        i && o.appendChild(r(i));
        const a = o.appendChild(document.createElement("span"));
        return (
          (a.className = "observablehq--string"),
          (a.textContent = JSON.stringify(
            e.length > 100 ? `${e.slice(0, 50)}…${e.slice(-49)}` : e,
          )),
          o
        );
      })(e, t, n, i);
    default:
      if (null === e) {
        (s = null), (e = "null");
        break;
      }
      if (e instanceof Date) {
        (s = "date"),
          (u = e),
          (e = isNaN(u)
            ? "Invalid Date"
            : (function (e) {
                return (
                  0 === e.getUTCMilliseconds() &&
                  0 === e.getUTCSeconds() &&
                  0 === e.getUTCMinutes() &&
                  0 === e.getUTCHours()
                );
              })(u)
            ? W(u.getUTCFullYear()) +
              "-" +
              H(u.getUTCMonth() + 1, 2) +
              "-" +
              H(u.getUTCDate(), 2)
            : W(u.getFullYear()) +
              "-" +
              H(u.getMonth() + 1, 2) +
              "-" +
              H(u.getDate(), 2) +
              "T" +
              H(u.getHours(), 2) +
              ":" +
              H(u.getMinutes(), 2) +
              (u.getMilliseconds()
                ? ":" + H(u.getSeconds(), 2) + "." + H(u.getMilliseconds(), 3)
                : u.getSeconds()
                ? ":" + H(u.getSeconds(), 2)
                : ""));
        break;
      }
      if (e === l) {
        (s = "forbidden"), (e = "[forbidden]");
        break;
      }
      switch (ie.call(e)) {
        case "[object RegExp]":
          (s = "regexp"),
            (e = (function (e) {
              return G.call(e);
            })(e));
          break;
        case "[object Error]":
        case "[object DOMException]":
          (s = "error"),
            (e = (function (e) {
              return e.stack || V.call(e);
            })(e));
          break;
        default:
          return (n ? w : k)(e, t, i, a);
      }
  }
  var u;
  const c = document.createElement("span");
  i && c.appendChild(r(i));
  const d = c.appendChild(document.createElement("span"));
  return (d.className = `observablehq--${s}`), (d.textContent = e), c;
}
function ae(t, n) {
  t.classList.contains("observablehq--inspect") &&
    n.classList.add("observablehq--inspect"),
    t.parentNode.replaceChild(n, t),
    e(n, "load");
}
const se = /\s+\(\d+:\d+\)$/m;
class ue {
  constructor(e) {
    if (!e) throw new Error("invalid node");
    (this._node = e), e.classList.add("observablehq");
  }
  pending() {
    const { _node: e } = this;
    e.classList.remove("observablehq--error"),
      e.classList.add("observablehq--running");
  }
  fulfilled(t, n) {
    const { _node: r } = this;
    if (
      ((!(t instanceof Element || t instanceof Text) ||
        (t.parentNode && t.parentNode !== r)) &&
        (t = oe(
          t,
          !1,
          r.firstChild &&
            r.firstChild.classList &&
            r.firstChild.classList.contains("observablehq--expanded"),
          n,
        )).classList.add("observablehq--inspect"),
      r.classList.remove("observablehq--running", "observablehq--error"),
      r.firstChild !== t)
    )
      if (r.firstChild) {
        for (; r.lastChild !== r.firstChild; ) r.removeChild(r.lastChild);
        r.replaceChild(t, r.firstChild);
      } else r.appendChild(t);
    e(r, "update");
  }
  rejected(t, n) {
    const { _node: i } = this;
    for (
      i.classList.remove("observablehq--running"),
        i.classList.add("observablehq--error");
      i.lastChild;

    )
      i.removeChild(i.lastChild);
    var o = document.createElement("div");
    (o.className = "observablehq--inspect"),
      n && o.appendChild(r(n)),
      o.appendChild(document.createTextNode((t + "").replace(se, ""))),
      i.appendChild(o),
      e(i, "error", { error: t });
  }
}
ue.into = function (e) {
  if ("string" == typeof e && null == (e = document.querySelector(e)))
    throw new Error("container not found");
  return function () {
    return new ue(e.appendChild(document.createElement("div")));
  };
};
const le = new Map(),
  ce = [],
  de = ce.map,
  fe = ce.some,
  pe = ce.hasOwnProperty,
  he = "https://cdn.jsdelivr.net/npm/",
  me = /^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/,
  ve = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/,
  be = /\.[^/]*$/,
  _e = ["unpkg", "jsdelivr", "browser", "main"];
class RequireError extends Error {
  constructor(e) {
    super(e);
  }
}
function we(e) {
  const t = me.exec(e);
  return t && { name: t[1], version: t[2], path: t[3] };
}
function ge(e) {
  const t = `${he}${e.name}${e.version ? `@${e.version}` : ""}/package.json`;
  let n = le.get(t);
  return (
    n ||
      le.set(
        t,
        (n = fetch(t).then((e) => {
          if (!e.ok) throw new RequireError("unable to load package.json");
          return e.redirected && !le.has(e.url) && le.set(e.url, n), e.json();
        })),
      ),
    n
  );
}
RequireError.prototype.name = RequireError.name;
var ye = Ee(async function (e, t) {
  if (
    (e.startsWith(he) && (e = e.substring(he.length)), /^(\w+:)|\/\//i.test(e))
  )
    return e;
  if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
  if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e))
    throw new RequireError("illegal name");
  const n = we(e);
  if (!n) return `${he}${e}`;
  if (!n.version && null != t && t.startsWith(he)) {
    const e = await ge(we(t.substring(he.length)));
    n.version =
      (e.dependencies && e.dependencies[n.name]) ||
      (e.peerDependencies && e.peerDependencies[n.name]);
  }
  if (
    (n.path && !be.test(n.path) && (n.path += ".js"),
    n.path && n.version && ve.test(n.version))
  )
    return `${he}${n.name}@${n.version}/${n.path}`;
  const r = await ge(n);
  return `${he}${r.name}@${r.version}/${
    n.path ||
    (function (e) {
      for (const t of _e) {
        const n = e[t];
        if ("string" == typeof n) return be.test(n) ? n : `${n}.js`;
      }
    })(r) ||
    "index.js"
  }`;
});
function Ee(e) {
  const t = new Map(),
    n = i(null);
  function r(e) {
    if ("string" != typeof e) return e;
    let n = t.get(e);
    return (
      n ||
        t.set(
          e,
          (n = new Promise((t, n) => {
            const r = document.createElement("script");
            (r.onload = () => {
              try {
                t(ce.pop()(i(e)));
              } catch (e) {
                n(new RequireError("invalid module"));
              }
              r.remove();
            }),
              (r.onerror = () => {
                n(new RequireError("unable to load module")), r.remove();
              }),
              (r.async = !0),
              (r.src = e),
              (window.define = je),
              document.head.appendChild(r);
          })),
        ),
      n
    );
  }
  function i(t) {
    return (n) => Promise.resolve(e(n, t)).then(r);
  }
  function o(e) {
    return arguments.length > 1
      ? Promise.all(de.call(arguments, n)).then(xe)
      : n(e);
  }
  return (
    (o.alias = function (t) {
      return Ee((n, r) =>
        n in t && ((r = null), "string" != typeof (n = t[n])) ? n : e(n, r),
      );
    }),
    (o.resolve = e),
    o
  );
}
function xe(e) {
  const t = {};
  for (const n of e)
    for (const e in n)
      pe.call(n, e) &&
        (null == n[e]
          ? Object.defineProperty(t, e, { get: Ce(n, e) })
          : (t[e] = n[e]));
  return t;
}
function Ce(e, t) {
  return () => e[t];
}
function Ne(e) {
  return "exports" === (e += "") || "module" === e;
}
function je(e, t, n) {
  const r = arguments.length;
  r < 2
    ? ((n = e), (t = []))
    : r < 3 && ((n = t), (t = "string" == typeof e ? [] : e)),
    ce.push(
      fe.call(t, Ne)
        ? (e) => {
            const r = {},
              i = { exports: r };
            return Promise.all(
              de.call(t, (t) =>
                "exports" === (t += "") ? r : "module" === t ? i : e(t),
              ),
            ).then((e) => (n.apply(null, e), i.exports));
          }
        : (e) =>
            Promise.all(de.call(t, e)).then((e) =>
              "function" == typeof n ? n.apply(null, e) : n,
            ),
    );
}
async function Pe(e) {
  const t = await fetch(await e.url());
  if (!t.ok) throw new Error(`Unable to load file: ${e.name}`);
  return t;
}
async function Se(e, t, { array: n = !1, typed: r = !1 } = {}) {
  const [i, o] = await Promise.all([
    e.text(),
    ye("d3-dsv@2.0.0/dist/d3-dsv.min.js"),
  ]);
  return (
    "\t" === t
      ? n
        ? o.tsvParseRows
        : o.tsvParse
      : n
      ? o.csvParseRows
      : o.csvParse
  )(i, r && o.autoType);
}
je.amd = {};
class FileAttachment {
  constructor(e, t) {
    Object.defineProperties(this, {
      _url: { value: e },
      name: { value: t, enumerable: !0 },
    });
  }
  async url() {
    return (await this._url) + "";
  }
  async blob() {
    return (await Pe(this)).blob();
  }
  async arrayBuffer() {
    return (await Pe(this)).arrayBuffer();
  }
  async text() {
    return (await Pe(this)).text();
  }
  async json() {
    return (await Pe(this)).json();
  }
  async stream() {
    return (await Pe(this)).body;
  }
  async csv(e) {
    return Se(this, ",", e);
  }
  async tsv(e) {
    return Se(this, "\t", e);
  }
  async image() {
    const e = await this.url();
    return new Promise((t, n) => {
      const r = new Image();
      new URL(e, document.baseURI).origin !== new URL(location).origin &&
        (r.crossOrigin = "anonymous"),
        (r.onload = () => t(r)),
        (r.onerror = () => n(new Error(`Unable to load file: ${this.name}`))),
        (r.src = e);
    });
  }
}
function qe(e) {
  throw new Error(`File not found: ${e}`);
}
var Me = {
  math: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
var Le = 0;
function $e(e) {
  (this.id = e), (this.href = new URL(`#${e}`, location) + "");
}
$e.prototype.toString = function () {
  return "url(" + this.href + ")";
};
var ke = {
  canvas: function (e, t) {
    var n = document.createElement("canvas");
    return (n.width = e), (n.height = t), n;
  },
  context2d: function (e, t, n) {
    null == n && (n = devicePixelRatio);
    var r = document.createElement("canvas");
    (r.width = e * n), (r.height = t * n), (r.style.width = e + "px");
    var i = r.getContext("2d");
    return i.scale(n, n), i;
  },
  download: function (e, t = "untitled", n = "Save") {
    const r = document.createElement("a"),
      i = r.appendChild(document.createElement("button"));
    async function o() {
      await new Promise(requestAnimationFrame),
        URL.revokeObjectURL(r.href),
        r.removeAttribute("href"),
        (i.textContent = n),
        (i.disabled = !1);
    }
    return (
      (i.textContent = n),
      (r.download = t),
      (r.onclick = async (t) => {
        if (((i.disabled = !0), r.href)) return o();
        i.textContent = "Saving…";
        try {
          const t = await ("function" == typeof e ? e() : e);
          (i.textContent = "Download"), (r.href = URL.createObjectURL(t));
        } catch (e) {
          i.textContent = n;
        }
        if (t.eventPhase) return o();
        i.disabled = !1;
      }),
      r
    );
  },
  element: function (e, t) {
    var n,
      r = (e += ""),
      i = r.indexOf(":");
    i >= 0 && "xmlns" !== (r = e.slice(0, i)) && (e = e.slice(i + 1));
    var o = Me.hasOwnProperty(r)
      ? document.createElementNS(Me[r], e)
      : document.createElement(e);
    if (t)
      for (var a in t)
        (i = (r = a).indexOf(":")),
          (n = t[a]),
          i >= 0 && "xmlns" !== (r = a.slice(0, i)) && (a = a.slice(i + 1)),
          Me.hasOwnProperty(r)
            ? o.setAttributeNS(Me[r], a, n)
            : o.setAttribute(a, n);
    return o;
  },
  input: function (e) {
    var t = document.createElement("input");
    return null != e && (t.type = e), t;
  },
  range: function (e, t, n) {
    1 === arguments.length && ((t = e), (e = null));
    var r = document.createElement("input");
    return (
      (r.min = e = null == e ? 0 : +e),
      (r.max = t = null == t ? 1 : +t),
      (r.step = null == n ? "any" : (n = +n)),
      (r.type = "range"),
      r
    );
  },
  select: function (e) {
    var t = document.createElement("select");
    return (
      Array.prototype.forEach.call(e, function (e) {
        var n = document.createElement("option");
        (n.value = n.textContent = e), t.appendChild(n);
      }),
      t
    );
  },
  svg: function (e, t) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return (
      n.setAttribute("viewBox", [0, 0, e, t]),
      n.setAttribute("width", e),
      n.setAttribute("height", t),
      n
    );
  },
  text: function (e) {
    return document.createTextNode(e);
  },
  uid: function (e) {
    return new $e("O-" + (null == e ? "" : e + "-") + ++Le);
  },
};
var Oe = {
  buffer: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();
      (r.onload = function () {
        t(r.result);
      }),
        (r.onerror = n),
        r.readAsArrayBuffer(e);
    });
  },
  text: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();
      (r.onload = function () {
        t(r.result);
      }),
        (r.onerror = n),
        r.readAsText(e);
    });
  },
  url: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();
      (r.onload = function () {
        t(r.result);
      }),
        (r.onerror = n),
        r.readAsDataURL(e);
    });
  },
};
function Te() {
  return this;
}
function Ae(e, t) {
  let n = !1;
  if ("function" != typeof t) throw new Error("dispose is not a function");
  return {
    [Symbol.iterator]: Te,
    next: () => (n ? { done: !0 } : ((n = !0), { done: !1, value: e })),
    return: () => ((n = !0), t(e), { done: !0 }),
    throw: () => ({ done: (n = !0) }),
  };
}
function Ue(e) {
  let t,
    n,
    r = !1;
  const i = e(function (e) {
    n ? (n(e), (n = null)) : (r = !0);
    return (t = e);
  });
  if (null != i && "function" != typeof i)
    throw new Error(
      "function" == typeof i.then
        ? "async initializers are not supported"
        : "initializer returned something, but not a dispose function",
    );
  return {
    [Symbol.iterator]: Te,
    throw: () => ({ done: !0 }),
    return: () => (null != i && i(), { done: !0 }),
    next: function () {
      return {
        done: !1,
        value: r ? ((r = !1), Promise.resolve(t)) : new Promise((e) => (n = e)),
      };
    },
  };
}
function Re(e) {
  switch (e.type) {
    case "range":
    case "number":
      return e.valueAsNumber;
    case "date":
      return e.valueAsDate;
    case "checkbox":
      return e.checked;
    case "file":
      return e.multiple ? e.files : e.files[0];
    case "select-multiple":
      return Array.from(e.selectedOptions, (e) => e.value);
    default:
      return e.value;
  }
}
var De = {
  disposable: Ae,
  filter: function* (e, t) {
    for (var n, r = -1; !(n = e.next()).done; )
      t(n.value, ++r) && (yield n.value);
  },
  input: function (e) {
    return Ue(function (t) {
      var n = (function (e) {
          switch (e.type) {
            case "button":
            case "submit":
            case "checkbox":
              return "click";
            case "file":
              return "change";
            default:
              return "input";
          }
        })(e),
        r = Re(e);
      function i() {
        t(Re(e));
      }
      return (
        e.addEventListener(n, i),
        void 0 !== r && t(r),
        function () {
          e.removeEventListener(n, i);
        }
      );
    });
  },
  map: function* (e, t) {
    for (var n, r = -1; !(n = e.next()).done; ) yield t(n.value, ++r);
  },
  observe: Ue,
  queue: function (e) {
    let t;
    const n = [],
      r = e(function (e) {
        n.push(e), t && (t(n.shift()), (t = null));
        return e;
      });
    if (null != r && "function" != typeof r)
      throw new Error(
        "function" == typeof r.then
          ? "async initializers are not supported"
          : "initializer returned something, but not a dispose function",
      );
    return {
      [Symbol.iterator]: Te,
      throw: () => ({ done: !0 }),
      return: () => (null != r && r(), { done: !0 }),
      next: function () {
        return {
          done: !1,
          value: n.length
            ? Promise.resolve(n.shift())
            : new Promise((e) => (t = e)),
        };
      },
    };
  },
  range: function* (e, t, n) {
    (e = +e),
      (t = +t),
      (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n);
    for (var r = -1, i = 0 | Math.max(0, Math.ceil((t - e) / n)); ++r < i; )
      yield e + r * n;
  },
  valueAt: function (e, t) {
    if (!(!isFinite((t = +t)) || t < 0 || (t != t) | 0))
      for (var n, r = -1; !(n = e.next()).done; ) if (++r === t) return n.value;
  },
  worker: function (e) {
    const t = URL.createObjectURL(new Blob([e], { type: "text/javascript" })),
      n = new Worker(t);
    return Ae(n, () => {
      n.terminate(), URL.revokeObjectURL(t);
    });
  },
};
function Ie(e, t) {
  return function (n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      d = n[0],
      f = [],
      p = null,
      h = -1;
    for (s = 1, u = arguments.length; s < u; ++s) {
      if ((r = arguments[s]) instanceof Node)
        (f[++h] = r), (d += "\x3c!--o:" + h + "--\x3e");
      else if (Array.isArray(r)) {
        for (l = 0, c = r.length; l < c; ++l)
          (i = r[l]) instanceof Node
            ? (null === p &&
                ((f[++h] = p = document.createDocumentFragment()),
                (d += "\x3c!--o:" + h + "--\x3e")),
              p.appendChild(i))
            : ((p = null), (d += i));
        p = null;
      } else d += r;
      d += n[s];
    }
    if (((p = e(d)), ++h > 0)) {
      for (
        o = new Array(h),
          a = document.createTreeWalker(p, NodeFilter.SHOW_COMMENT, null, !1);
        a.nextNode();

      )
        (i = a.currentNode),
          /^o:/.test(i.nodeValue) && (o[+i.nodeValue.slice(2)] = i);
      for (s = 0; s < h; ++s) (i = o[s]) && i.parentNode.replaceChild(f[s], i);
    }
    return 1 === p.childNodes.length
      ? p.removeChild(p.firstChild)
      : 11 === p.nodeType
      ? ((i = t()).appendChild(p), i)
      : p;
  };
}
var Fe = Ie(
  function (e) {
    var t = document.createElement("template");
    return (t.innerHTML = e.trim()), document.importNode(t.content, !0);
  },
  function () {
    return document.createElement("span");
  },
);
const ze = "https://cdn.jsdelivr.net/npm/@observablehq/highlight.js@2.0.0/";
function Be(e) {
  return function () {
    return e("marked@0.3.12/marked.min.js").then(function (t) {
      return Ie(
        function (n) {
          var r = document.createElement("div");
          r.innerHTML = t(n, { langPrefix: "" }).trim();
          var i = r.querySelectorAll("pre code[class]");
          return (
            i.length > 0 &&
              e(ze + "highlight.min.js").then(function (t) {
                i.forEach(function (n) {
                  function r() {
                    t.highlightBlock(n),
                      n.parentNode.classList.add("observablehq--md-pre");
                  }
                  t.getLanguage(n.className)
                    ? r()
                    : e(ze + "async-languages/index.js")
                        .then((r) => {
                          if (r.has(n.className))
                            return e(
                              ze + "async-languages/" + r.get(n.className),
                            ).then((e) => {
                              t.registerLanguage(n.className, e);
                            });
                        })
                        .then(r, r);
                });
              }),
            r
          );
        },
        function () {
          return document.createElement("div");
        },
      );
    });
  };
}
function He(e) {
  let t;
  Object.defineProperties(this, {
    generator: {
      value: Ue((e) => {
        t = e;
      }),
    },
    value: { get: () => e, set: (n) => t((e = n)) },
  }),
    void 0 !== e && t(e);
}
function* We() {
  for (;;) yield Date.now();
}
var Ve = new Map();
function Ge(e, t) {
  var n;
  return (n = Ve.get((e = +e)))
    ? n.then(() => t)
    : (n = Date.now()) >= e
    ? Promise.resolve(t)
    : (function (e, t) {
        var n = new Promise(function (n) {
          Ve.delete(t);
          var r = t - e;
          if (!(r > 0)) throw new Error("invalid time");
          if (r > 2147483647) throw new Error("too long to wait");
          setTimeout(n, r);
        });
        return Ve.set(t, n), n;
      })(n, e).then(() => t);
}
var Ke = {
  delay: function (e, t) {
    return new Promise(function (n) {
      setTimeout(function () {
        n(t);
      }, e);
    });
  },
  tick: function (e, t) {
    return Ge(Math.ceil((Date.now() + 1) / e) * e, t);
  },
  when: Ge,
};
function Ye(e, t) {
  if (/^(\w+:)|\/\//i.test(e)) return e;
  if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
  if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e))
    throw new Error("illegal name");
  return "https://unpkg.com/" + e;
}
function Je(e) {
  return null == e ? ye : Ee(e);
}
var Xe = Ie(
    function (e) {
      var t = document.createElementNS("http://www.w3.org/2000/svg", "g");
      return (t.innerHTML = e.trim()), t;
    },
    function () {
      return document.createElementNS("http://www.w3.org/2000/svg", "g");
    },
  ),
  Qe = String.raw;
function Ze(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("link");
    (r.rel = "stylesheet"),
      (r.href = e),
      (r.onerror = n),
      (r.onload = t),
      document.head.appendChild(r);
  });
}
function et(e) {
  return function () {
    return Promise.all([
      e("@observablehq/katex@0.11.1/dist/katex.min.js"),
      e.resolve("@observablehq/katex@0.11.1/dist/katex.min.css").then(Ze),
    ]).then(function (e) {
      var t = e[0],
        n = r();
      function r(e) {
        return function () {
          var n = document.createElement("div");
          return (
            t.render(Qe.apply(String, arguments), n, e),
            n.removeChild(n.firstChild)
          );
        };
      }
      return (n.options = r), (n.block = r({ displayMode: !0 })), n;
    });
  };
}
function tt(e) {
  return async () => {
    const [t, n, r] = await Promise.all(
      [
        "vega@5.20.2/build/vega.min.js",
        "vega-lite@5.1.0/build/vega-lite.min.js",
        "vega-lite-api@5.0.0/build/vega-lite-api.min.js",
      ].map((t) => e(t)),
    );
    return r.register(t, n);
  };
}
function nt() {
  return Ue(function (e) {
    var t = e(document.body.clientWidth);
    function n() {
      var n = document.body.clientWidth;
      n !== t && e((t = n));
    }
    return (
      window.addEventListener("resize", n),
      function () {
        window.removeEventListener("resize", n);
      }
    );
  });
}
var rt = Object.assign(
  function (e) {
    const t = Je(e);
    var n;
    Object.defineProperties(
      this,
      ((n = {
        DOM: () => ke,
        FileAttachment: () => qe,
        Files: () => Oe,
        Generators: () => De,
        Inputs: () => t("@observablehq/inputs@0.8.0/dist/inputs.umd.min.js"),
        Mutable: () => He,
        Plot: () => t("@observablehq/plot@0.1.0/dist/plot.umd.min.js"),
        Promises: () => Ke,
        _: () => t("lodash@4.17.21/lodash.min.js"),
        d3: () => t("d3@6.7.0/dist/d3.min.js"),
        dot: () => t("@observablehq/graphviz@0.2.1/dist/graphviz.min.js"),
        htl: () => t("htl@0.2.5/dist/htl.min.js"),
        html: () => Fe,
        md: Be(t),
        now: We,
        require: () => t,
        resolve: () => Ye,
        svg: () => Xe,
        tex: et(t),
        vl: tt(t),
        width: nt,
      }),
      Object.fromEntries(Object.entries(n).map(it))),
    );
  },
  { resolve: ye.resolve },
);
function it([e, t]) {
  return [e, { value: t, writable: !0, enumerable: !0 }];
}
function ot(e, t) {
  (this.message = e + ""), (this.input = t);
}
(ot.prototype = Object.create(Error.prototype)),
  (ot.prototype.name = "RuntimeError"),
  (ot.prototype.constructor = ot);
var at = Array.prototype,
  st = at.map,
  ut = at.forEach;
function lt(e) {
  return function () {
    return e;
  };
}
function ct(e) {
  return e;
}
function dt() {}
var ft = {};
function pt(e, t, n) {
  var r;
  n || (n = ft),
    Object.defineProperties(this, {
      _observer: { value: n, writable: !0 },
      _definition: { value: vt, writable: !0 },
      _duplicate: { value: void 0, writable: !0 },
      _duplicates: { value: void 0, writable: !0 },
      _indegree: { value: NaN, writable: !0 },
      _inputs: { value: [], writable: !0 },
      _invalidate: { value: dt, writable: !0 },
      _module: { value: t },
      _name: { value: null, writable: !0 },
      _outputs: { value: new Set(), writable: !0 },
      _promise: { value: Promise.resolve(void 0), writable: !0 },
      _reachable: { value: n !== ft, writable: !0 },
      _rejector: {
        value:
          ((r = this),
          function (e) {
            if (e === vt) throw new ot(r._name + " is not defined", r._name);
            if (e instanceof Error && e.message)
              throw new ot(e.message, r._name);
            throw new ot(r._name + " could not be resolved", r._name);
          }),
      },
      _type: { value: e },
      _value: { value: void 0, writable: !0 },
      _version: { value: 0, writable: !0 },
    });
}
function ht(e) {
  e._module._runtime._dirty.add(e), e._outputs.add(this);
}
function mt(e) {
  e._module._runtime._dirty.add(e), e._outputs.delete(this);
}
function vt() {
  throw vt;
}
function bt(e) {
  return function () {
    throw new ot(e + " is defined more than once");
  };
}
function _t(e, t, n) {
  var r = this._module._scope,
    i = this._module._runtime;
  if (
    (this._inputs.forEach(mt, this),
    t.forEach(ht, this),
    (this._inputs = t),
    (this._definition = n),
    (this._value = void 0),
    n === dt ? i._variables.delete(this) : i._variables.add(this),
    e !== this._name || r.get(e) !== this)
  ) {
    var o, a;
    if (this._name)
      if (this._outputs.size)
        r.delete(this._name),
          ((a = this._module._resolve(this._name))._outputs = this._outputs),
          (this._outputs = new Set()),
          a._outputs.forEach(function (e) {
            e._inputs[e._inputs.indexOf(this)] = a;
          }, this),
          a._outputs.forEach(i._updates.add, i._updates),
          i._dirty.add(a).add(this),
          r.set(this._name, a);
      else if ((a = r.get(this._name)) === this) r.delete(this._name);
      else {
        if (3 !== a._type) throw new Error();
        a._duplicates.delete(this),
          (this._duplicate = void 0),
          1 === a._duplicates.size &&
            ((a = a._duplicates.keys().next().value),
            (o = r.get(this._name)),
            (a._outputs = o._outputs),
            (o._outputs = new Set()),
            a._outputs.forEach(function (e) {
              e._inputs[e._inputs.indexOf(o)] = a;
            }),
            (a._definition = a._duplicate),
            (a._duplicate = void 0),
            i._dirty.add(o).add(a),
            i._updates.add(a),
            r.set(this._name, a));
      }
    if (this._outputs.size) throw new Error();
    e &&
      ((a = r.get(e))
        ? 3 === a._type
          ? ((this._definition = bt(e)),
            (this._duplicate = n),
            a._duplicates.add(this))
          : 2 === a._type
          ? ((this._outputs = a._outputs),
            (a._outputs = new Set()),
            this._outputs.forEach(function (e) {
              e._inputs[e._inputs.indexOf(a)] = this;
            }, this),
            i._dirty.add(a).add(this),
            r.set(e, this))
          : ((a._duplicate = a._definition),
            (this._duplicate = n),
            ((o = new pt(3, this._module))._name = e),
            (o._definition = this._definition = a._definition = bt(e)),
            (o._outputs = a._outputs),
            (a._outputs = new Set()),
            o._outputs.forEach(function (e) {
              e._inputs[e._inputs.indexOf(a)] = o;
            }),
            (o._duplicates = new Set([this, a])),
            i._dirty.add(a).add(o),
            i._updates.add(a).add(o),
            r.set(e, o))
        : r.set(e, this)),
      (this._name = e);
  }
  return i._updates.add(this), i._compute(), this;
}
function wt(e, t = []) {
  Object.defineProperties(this, {
    _runtime: { value: e },
    _scope: { value: new Map() },
    _builtins: {
      value: new Map([["invalidation", Et], ["visibility", xt], ...t]),
    },
    _source: { value: null, writable: !0 },
  });
}
function gt(e) {
  return e._name;
}
Object.defineProperties(pt.prototype, {
  _pending: {
    value: function () {
      this._observer.pending && this._observer.pending();
    },
    writable: !0,
    configurable: !0,
  },
  _fulfilled: {
    value: function (e) {
      this._observer.fulfilled && this._observer.fulfilled(e, this._name);
    },
    writable: !0,
    configurable: !0,
  },
  _rejected: {
    value: function (e) {
      this._observer.rejected && this._observer.rejected(e, this._name);
    },
    writable: !0,
    configurable: !0,
  },
  define: {
    value: function (e, t, n) {
      switch (arguments.length) {
        case 1:
          (n = e), (e = t = null);
          break;
        case 2:
          (n = t), "string" == typeof e ? (t = null) : ((t = e), (e = null));
      }
      return _t.call(
        this,
        null == e ? null : e + "",
        null == t ? [] : st.call(t, this._module._resolve, this._module),
        "function" == typeof n ? n : lt(n),
      );
    },
    writable: !0,
    configurable: !0,
  },
  delete: {
    value: function () {
      return _t.call(this, null, [], dt);
    },
    writable: !0,
    configurable: !0,
  },
  import: {
    value: function (e, t, n) {
      arguments.length < 3 && ((n = t), (t = e));
      return _t.call(this, t + "", [n._resolve(e + "")], ct);
    },
    writable: !0,
    configurable: !0,
  },
}),
  Object.defineProperties(wt.prototype, {
    _copy: {
      value: function (e, t) {
        (e._source = this), t.set(this, e);
        for (const [o, a] of this._scope) {
          var n = e._scope.get(o);
          if (!n || 1 !== n._type)
            if (a._definition === ct) {
              var r = a._inputs[0],
                i = r._module;
              e.import(
                r._name,
                o,
                t.get(i) ||
                  (i._source ? i._copy(new wt(e._runtime, e._builtins), t) : i),
              );
            } else e.define(o, a._inputs.map(gt), a._definition);
        }
        return e;
      },
      writable: !0,
      configurable: !0,
    },
    _resolve: {
      value: function (e) {
        var t,
          n = this._scope.get(e);
        if (!n)
          if (((n = new pt(2, this)), this._builtins.has(e)))
            n.define(e, lt(this._builtins.get(e)));
          else if (this._runtime._builtin._scope.has(e))
            n.import(e, this._runtime._builtin);
          else {
            try {
              t = this._runtime._global(e);
            } catch (t) {
              return n.define(
                e,
                ((r = t),
                function () {
                  throw r;
                }),
              );
            }
            void 0 === t
              ? this._scope.set((n._name = e), n)
              : n.define(e, lt(t));
          }
        var r;
        return n;
      },
      writable: !0,
      configurable: !0,
    },
    redefine: {
      value: function (e) {
        var t = this._scope.get(e);
        if (!t) throw new ot(e + " is not defined");
        if (3 === t._type) throw new ot(e + " is defined more than once");
        return t.define.apply(t, arguments);
      },
      writable: !0,
      configurable: !0,
    },
    define: {
      value: function () {
        var e = new pt(1, this);
        return e.define.apply(e, arguments);
      },
      writable: !0,
      configurable: !0,
    },
    derive: {
      value: function (e, t) {
        var n = new wt(this._runtime, this._builtins);
        return (
          (n._source = this),
          ut.call(e, function (e) {
            "object" != typeof e && (e = { name: e + "" }),
              null == e.alias && (e.alias = e.name),
              n.import(e.name, e.alias, t);
          }),
          Promise.resolve().then(() => {
            const e = new Set([this]);
            for (const t of e)
              for (const n of t._scope.values())
                if (n._definition === ct) {
                  const t = n._inputs[0]._module,
                    r = t._source || t;
                  if (r === this)
                    return void console.warn(
                      "circular module definition; ignoring",
                    );
                  e.add(r);
                }
            this._copy(n, new Map());
          }),
          n
        );
      },
      writable: !0,
      configurable: !0,
    },
    import: {
      value: function () {
        var e = new pt(1, this);
        return e.import.apply(e, arguments);
      },
      writable: !0,
      configurable: !0,
    },
    value: {
      value: async function (e) {
        var t = this._scope.get(e);
        if (!t) throw new ot(e + " is not defined");
        t._observer === ft && ((t._observer = !0), this._runtime._dirty.add(t));
        return await this._runtime._compute(), t._promise;
      },
      writable: !0,
      configurable: !0,
    },
    variable: {
      value: function (e) {
        return new pt(1, this, e);
      },
      writable: !0,
      configurable: !0,
    },
    builtin: {
      value: function (e, t) {
        this._builtins.set(e, t);
      },
      writable: !0,
      configurable: !0,
    },
  });
const yt =
  "function" == typeof requestAnimationFrame
    ? requestAnimationFrame
    : setImmediate;
var Et = {},
  xt = {};
function Ct(e = new rt(), t = Ot) {
  var n = this.module();
  if (
    (Object.defineProperties(this, {
      _dirty: { value: new Set() },
      _updates: { value: new Set() },
      _computing: { value: null, writable: !0 },
      _init: { value: null, writable: !0 },
      _modules: { value: new Map() },
      _variables: { value: new Set() },
      _disposed: { value: !1, writable: !0 },
      _builtin: { value: n },
      _global: { value: t },
    }),
    e)
  )
    for (var r in e) new pt(2, n).define(r, [], e[r]);
}
function Nt(e) {
  const t = new Set(e._inputs);
  for (const n of t) {
    if (n === e) return !0;
    n._inputs.forEach(t.add, t);
  }
  return !1;
}
function jt(e) {
  ++e._indegree;
}
function Pt(e) {
  --e._indegree;
}
function St(e) {
  return e._promise.catch(e._rejector);
}
function qt(e) {
  return new Promise(function (t) {
    e._invalidate = t;
  });
}
function Mt(e, t) {
  let n,
    r,
    i =
      "function" == typeof IntersectionObserver &&
      t._observer &&
      t._observer._node,
    o = !i,
    a = dt,
    s = dt;
  return (
    i &&
      ((r = new IntersectionObserver(
        ([e]) => (o = e.isIntersecting) && ((n = null), a()),
      )),
      r.observe(i),
      e.then(() => (r.disconnect(), (r = null), s()))),
    function (e) {
      return o
        ? Promise.resolve(e)
        : r
        ? (n || (n = new Promise((e, t) => ((a = e), (s = t)))),
          n.then(() => e))
        : Promise.reject();
    }
  );
}
function Lt(e) {
  e._invalidate(), (e._invalidate = dt), e._pending();
  var t = e._value,
    n = ++e._version,
    r = null,
    i = (e._promise = Promise.all(e._inputs.map(St))
      .then(function (i) {
        if (e._version === n) {
          for (var o = 0, a = i.length; o < a; ++o)
            switch (i[o]) {
              case Et:
                i[o] = r = qt(e);
                break;
              case xt:
                r || (r = qt(e)), (i[o] = Mt(r, e));
            }
          return e._definition.apply(t, i);
        }
      })
      .then(function (t) {
        return (function (e) {
          return (
            e && "function" == typeof e.next && "function" == typeof e.return
          );
        })(t)
          ? e._version !== n
            ? void t.return()
            : ((r || qt(e)).then(
                ((o = t),
                function () {
                  o.return();
                }),
              ),
              (function (e, t, n, r) {
                function i() {
                  var n = new Promise(function (e) {
                    e(r.next());
                  }).then(function (r) {
                    return r.done
                      ? void 0
                      : Promise.resolve(r.value).then(function (r) {
                          if (e._version === t)
                            return $t(e, r, n).then(i), e._fulfilled(r), r;
                        });
                  });
                  n.catch(function (r) {
                    e._version === t && ($t(e, void 0, n), e._rejected(r));
                  });
                }
                return new Promise(function (e) {
                  e(r.next());
                }).then(function (e) {
                  if (!e.done) return n.then(i), e.value;
                });
              })(e, n, i, t))
          : t;
        var o;
      }));
  i.then(
    function (t) {
      e._version === n && ((e._value = t), e._fulfilled(t));
    },
    function (t) {
      e._version === n && ((e._value = void 0), e._rejected(t));
    },
  );
}
function $t(e, t, n) {
  var r = e._module._runtime;
  return (
    (e._value = t),
    (e._promise = n),
    e._outputs.forEach(r._updates.add, r._updates),
    r._compute()
  );
}
function kt(e, t) {
  e._invalidate(),
    (e._invalidate = dt),
    e._pending(),
    ++e._version,
    (e._indegree = NaN),
    (e._promise = Promise.reject(t)).catch(dt),
    (e._value = void 0),
    e._rejected(t);
}
function Ot(e) {
  return window[e];
}
Object.defineProperties(Ct, {
  load: {
    value: function (e, t, n) {
      if (
        ("function" == typeof t && ((n = t), (t = null)),
        "function" != typeof n)
      )
        throw new Error("invalid observer");
      null == t && (t = new rt());
      const { modules: r, id: i } = e,
        o = new Map(),
        a = new Ct(t),
        s = u(i);
      function u(e) {
        let t = o.get(e);
        return t || o.set(e, (t = a.module())), t;
      }
      for (const e of r) {
        const t = u(e.id);
        let r = 0;
        for (const i of e.variables)
          i.from
            ? t.import(i.remote, i.name, u(i.from))
            : t === s
            ? t.variable(n(i, r, e.variables)).define(i.name, i.inputs, i.value)
            : t.define(i.name, i.inputs, i.value),
            ++r;
      }
      return a;
    },
    writable: !0,
    configurable: !0,
  },
}),
  Object.defineProperties(Ct.prototype, {
    _compute: {
      value: function () {
        return this._computing || (this._computing = this._computeSoon());
      },
      writable: !0,
      configurable: !0,
    },
    _computeSoon: {
      value: function () {
        var e = this;
        return new Promise(function (t) {
          yt(function () {
            t(), e._disposed || e._computeNow();
          });
        });
      },
      writable: !0,
      configurable: !0,
    },
    _computeNow: {
      value: function () {
        var e,
          t,
          n = [];
        (e = new Set(this._dirty)).forEach(function (t) {
          t._inputs.forEach(e.add, e);
          const n = (function (e) {
            if (e._observer !== ft) return !0;
            var t = new Set(e._outputs);
            for (const e of t) {
              if (e._observer !== ft) return !0;
              e._outputs.forEach(t.add, t);
            }
            return !1;
          })(t);
          n > t._reachable
            ? this._updates.add(t)
            : n < t._reachable && t._invalidate(),
            (t._reachable = n);
        }, this),
          (e = new Set(this._updates)).forEach(function (t) {
            t._reachable
              ? ((t._indegree = 0), t._outputs.forEach(e.add, e))
              : ((t._indegree = NaN), e.delete(t));
          }),
          (this._computing = null),
          this._updates.clear(),
          this._dirty.clear(),
          e.forEach(function (e) {
            e._outputs.forEach(jt);
          });
        do {
          for (
            e.forEach(function (e) {
              0 === e._indegree && n.push(e);
            });
            (t = n.pop());

          )
            Lt(t), t._outputs.forEach(r), e.delete(t);
          e.forEach(function (t) {
            Nt(t) &&
              (kt(t, new ot("circular definition")),
              t._outputs.forEach(Pt),
              e.delete(t));
          });
        } while (e.size);
        function r(e) {
          0 == --e._indegree && n.push(e);
        }
      },
      writable: !0,
      configurable: !0,
    },
    dispose: {
      value: function () {
        (this._computing = Promise.resolve()),
          (this._disposed = !0),
          this._variables.forEach((e) => {
            e._invalidate(), (e._version = NaN);
          });
      },
      writable: !0,
      configurable: !0,
    },
    module: {
      value: function (e, t = dt) {
        let n;
        if (void 0 === e)
          return (n = this._init) ? ((this._init = null), n) : new wt(this);
        if (((n = this._modules.get(e)), n)) return n;
        (this._init = n = new wt(this)), this._modules.set(e, n);
        try {
          e(this, t);
        } finally {
          this._init = null;
        }
        return n;
      },
      writable: !0,
      configurable: !0,
    },
    fileAttachments: {
      value: function (e) {
        return Object.assign(
          (t) => {
            const n = e((t += ""));
            if (null == n) throw new Error(`File not found: ${t}`);
            return new FileAttachment(n, t);
          },
          { prototype: FileAttachment.prototype },
        );
      },
      writable: !0,
      configurable: !0,
    },
  });
export { ue as Inspector, rt as Library, Ct as Runtime, ot as RuntimeError };
