import qe, { Fragment as Fr } from "react";
import Yr from "react-dom";
function Wr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var We = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Lr() {
  if (tr)
    return me;
  tr = 1;
  var i = qe, k = Symbol.for("react.element"), C = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, x = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(l, b, S) {
    var f, m = {}, $ = null, F = null;
    S !== void 0 && ($ = "" + S), b.key !== void 0 && ($ = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (f in b)
      p.call(b, f) && !c.hasOwnProperty(f) && (m[f] = b[f]);
    if (l && l.defaultProps)
      for (f in b = l.defaultProps, b)
        m[f] === void 0 && (m[f] = b[f]);
    return { $$typeof: k, type: l, key: $, ref: F, props: m, _owner: x.current };
  }
  return me.Fragment = C, me.jsx = w, me.jsxs = w, me;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function qr() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var i = qe, k = Symbol.for("react.element"), C = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), l = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          o[s - 1] = arguments[s];
        N("error", e, o);
      }
    }
    function N(e, r, o) {
      {
        var s = U.ReactDebugCurrentFrame, j = s.getStackAddendum();
        j !== "" && (r += "%s", o = o.concat([j]));
        var D = o.map(function(O) {
          return String(O);
        });
        D.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, D);
      }
    }
    var L = !1, a = !1, re = !1, pe = !1, ye = !1, ue;
    ue = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === c || ye || e === x || e === S || e === f || pe || e === F || L || a || re || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === m || e.$$typeof === w || e.$$typeof === l || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function se(e, r, o) {
      var s = e.displayName;
      if (s)
        return s;
      var j = r.displayName || r.name || "";
      return j !== "" ? o + "(" + j + ")" : o;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case C:
          return "Portal";
        case c:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return fe(r) + ".Consumer";
          case w:
            var o = e;
            return fe(o._context) + ".Provider";
          case b:
            return se(e, e.render, "ForwardRef");
          case m:
            var s = e.displayName || null;
            return s !== null ? s : K(e.type) || "Memo";
          case $: {
            var j = e, D = j._payload, O = j._init;
            try {
              return K(O(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, te = 0, H, ee, ne, ce, t, u, E;
    function h() {
    }
    h.__reactDisabledLog = !0;
    function d() {
      {
        if (te === 0) {
          H = console.log, ee = console.info, ne = console.warn, ce = console.error, t = console.group, u = console.groupCollapsed, E = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        te++;
      }
    }
    function T() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: H
            }),
            info: G({}, e, {
              value: ee
            }),
            warn: G({}, e, {
              value: ne
            }),
            error: G({}, e, {
              value: ce
            }),
            group: G({}, e, {
              value: t
            }),
            groupCollapsed: G({}, e, {
              value: u
            }),
            groupEnd: G({}, e, {
              value: E
            })
          });
        }
        te < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var v = U.ReactCurrentDispatcher, y;
    function g(e, r, o) {
      {
        if (y === void 0)
          try {
            throw Error();
          } catch (j) {
            var s = j.stack.trim().match(/\n( *(at )?)/);
            y = s && s[1] || "";
          }
        return `
` + y + e;
      }
    }
    var P = !1, _;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      _ = new B();
    }
    function n(e, r) {
      if (!e || P)
        return "";
      {
        var o = _.get(e);
        if (o !== void 0)
          return o;
      }
      var s;
      P = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = v.current, v.current = null, d();
      try {
        if (r) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (X) {
              s = X;
            }
            Reflect.construct(e, [], O);
          } else {
            try {
              O.call();
            } catch (X) {
              s = X;
            }
            e.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            s = X;
          }
          e();
        }
      } catch (X) {
        if (X && s && typeof X.stack == "string") {
          for (var R = X.stack.split(`
`), J = s.stack.split(`
`), W = R.length - 1, q = J.length - 1; W >= 1 && q >= 0 && R[W] !== J[q]; )
            q--;
          for (; W >= 1 && q >= 0; W--, q--)
            if (R[W] !== J[q]) {
              if (W !== 1 || q !== 1)
                do
                  if (W--, q--, q < 0 || R[W] !== J[q]) {
                    var Q = `
` + R[W].replace(" at new ", " at ");
                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && _.set(e, Q), Q;
                  }
                while (W >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        P = !1, v.current = D, T(), Error.prepareStackTrace = j;
      }
      var ve = e ? e.displayName || e.name : "", ae = ve ? g(ve) : "";
      return typeof e == "function" && _.set(e, ae), ae;
    }
    function Z(e, r, o) {
      return n(e, !1);
    }
    function le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function oe(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, le(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case S:
          return g("Suspense");
        case f:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Z(e.render);
          case m:
            return oe(e.type, r, o);
          case $: {
            var s = e, j = s._payload, D = s._init;
            try {
              return oe(D(j), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Ne = {}, Ve = U.ReactDebugCurrentFrame;
    function Te(e) {
      if (e) {
        var r = e._owner, o = oe(e.type, e._source, r ? r.type : null);
        Ve.setExtraStackFrame(o);
      } else
        Ve.setExtraStackFrame(null);
    }
    function yr(e, r, o, s, j) {
      {
        var D = Function.call.bind(he);
        for (var O in e)
          if (D(e, O)) {
            var R = void 0;
            try {
              if (typeof e[O] != "function") {
                var J = Error((s || "React class") + ": " + o + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              R = e[O](r, O, s, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              R = W;
            }
            R && !(R instanceof Error) && (Te(j), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", o, O, typeof R), Te(null)), R instanceof Error && !(R.message in Ne) && (Ne[R.message] = !0, Te(j), Y("Failed %s type: %s", o, R.message), Te(null));
          }
      }
    }
    var br = Array.isArray;
    function Pe(e) {
      return br(e);
    }
    function hr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Er(e) {
      try {
        return ze(e), !1;
      } catch {
        return !0;
      }
    }
    function ze(e) {
      return "" + e;
    }
    function Be(e) {
      if (Er(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(e)), ze(e);
    }
    var Ee = U.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Je, Ke, Ce;
    Ce = {};
    function gr(e) {
      if (he.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function _r(e) {
      if (he.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Rr(e, r) {
      if (typeof e.ref == "string" && Ee.current && r && Ee.current.stateNode !== r) {
        var o = K(Ee.current.type);
        Ce[o] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Ee.current.type), e.ref), Ce[o] = !0);
      }
    }
    function Tr(e, r) {
      {
        var o = function() {
          Je || (Je = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Or(e, r) {
      {
        var o = function() {
          Ke || (Ke = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Sr = function(e, r, o, s, j, D, O) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: k,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: O,
        // Record the component responsible for creating this element.
        _owner: D
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Pr(e, r, o, s, j) {
      {
        var D, O = {}, R = null, J = null;
        o !== void 0 && (Be(o), R = "" + o), _r(r) && (Be(r.key), R = "" + r.key), gr(r) && (J = r.ref, Rr(r, j));
        for (D in r)
          he.call(r, D) && !mr.hasOwnProperty(D) && (O[D] = r[D]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (D in W)
            O[D] === void 0 && (O[D] = W[D]);
        }
        if (R || J) {
          var q = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          R && Tr(O, q), J && Or(O, q);
        }
        return Sr(e, R, J, j, s, Ee.current, O);
      }
    }
    var we = U.ReactCurrentOwner, Ge = U.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var r = e._owner, o = oe(e.type, e._source, r ? r.type : null);
        Ge.setExtraStackFrame(o);
      } else
        Ge.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function je(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    function Xe() {
      {
        if (we.current) {
          var e = K(we.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Cr(e) {
      return "";
    }
    var He = {};
    function wr(e) {
      {
        var r = Xe();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Ze(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = wr(r);
        if (He[o])
          return;
        He[o] = !0;
        var s = "";
        e && e._owner && e._owner !== we.current && (s = " It was passed a child from " + K(e._owner.type) + "."), de(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, s), de(null);
      }
    }
    function Qe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Pe(e))
          for (var o = 0; o < e.length; o++) {
            var s = e[o];
            je(s) && Ze(s, r);
          }
        else if (je(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = V(e);
          if (typeof j == "function" && j !== e.entries)
            for (var D = j.call(e), O; !(O = D.next()).done; )
              je(O.value) && Ze(O.value, r);
        }
      }
    }
    function xr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          o = r.propTypes;
        else
          return;
        if (o) {
          var s = K(r);
          yr(o, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !xe) {
          xe = !0;
          var j = K(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var s = r[o];
          if (s !== "children" && s !== "key") {
            de(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), de(null);
            break;
          }
        }
        e.ref !== null && (de(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    var er = {};
    function rr(e, r, o, s, j, D) {
      {
        var O = be(e);
        if (!O) {
          var R = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Cr();
          J ? R += J : R += Xe();
          var W;
          e === null ? W = "null" : Pe(e) ? W = "array" : e !== void 0 && e.$$typeof === k ? (W = "<" + (K(e.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, R);
        }
        var q = Pr(e, r, o, j, D);
        if (q == null)
          return q;
        if (O) {
          var Q = r.children;
          if (Q !== void 0)
            if (s)
              if (Pe(Q)) {
                for (var ve = 0; ve < Q.length; ve++)
                  Qe(Q[ve], e);
                Object.freeze && Object.freeze(Q);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(Q, e);
        }
        if (he.call(r, "key")) {
          var ae = K(e), X = Object.keys(r).filter(function(Mr) {
            return Mr !== "key";
          }), Ae = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[ae + Ae]) {
            var Dr = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ae, ae, Dr, ae), er[ae + Ae] = !0;
          }
        }
        return e === p ? jr(q) : xr(q), q;
      }
    }
    function Ar(e, r, o) {
      return rr(e, r, o, !0);
    }
    function Ir(e, r, o) {
      return rr(e, r, o, !1);
    }
    var kr = Ir, $r = Ar;
    ge.Fragment = p, ge.jsx = kr, ge.jsxs = $r;
  }()), ge;
}
process.env.NODE_ENV === "production" ? We.exports = Lr() : We.exports = qr();
var ie = We.exports, Re = {}, _e = Yr;
if (process.env.NODE_ENV === "production")
  Re.createRoot = _e.createRoot, Re.hydrateRoot = _e.hydrateRoot;
else {
  var Oe = _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Re.createRoot = function(i, k) {
    Oe.usingClientEntryPoint = !0;
    try {
      return _e.createRoot(i, k);
    } finally {
      Oe.usingClientEntryPoint = !1;
    }
  }, Re.hydrateRoot = function(i, k, C) {
    Oe.usingClientEntryPoint = !0;
    try {
      return _e.hydrateRoot(i, k, C);
    } finally {
      Oe.usingClientEntryPoint = !1;
    }
  };
}
var Le = { exports: {} }, Se = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Ur() {
  if (or)
    return A;
  or = 1;
  var i = typeof Symbol == "function" && Symbol.for, k = i ? Symbol.for("react.element") : 60103, C = i ? Symbol.for("react.portal") : 60106, p = i ? Symbol.for("react.fragment") : 60107, x = i ? Symbol.for("react.strict_mode") : 60108, c = i ? Symbol.for("react.profiler") : 60114, w = i ? Symbol.for("react.provider") : 60109, l = i ? Symbol.for("react.context") : 60110, b = i ? Symbol.for("react.async_mode") : 60111, S = i ? Symbol.for("react.concurrent_mode") : 60111, f = i ? Symbol.for("react.forward_ref") : 60112, m = i ? Symbol.for("react.suspense") : 60113, $ = i ? Symbol.for("react.suspense_list") : 60120, F = i ? Symbol.for("react.memo") : 60115, z = i ? Symbol.for("react.lazy") : 60116, M = i ? Symbol.for("react.block") : 60121, V = i ? Symbol.for("react.fundamental") : 60117, U = i ? Symbol.for("react.responder") : 60118, Y = i ? Symbol.for("react.scope") : 60119;
  function N(a) {
    if (typeof a == "object" && a !== null) {
      var re = a.$$typeof;
      switch (re) {
        case k:
          switch (a = a.type, a) {
            case b:
            case S:
            case p:
            case c:
            case x:
            case m:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case l:
                case f:
                case z:
                case F:
                case w:
                  return a;
                default:
                  return re;
              }
          }
        case C:
          return re;
      }
    }
  }
  function L(a) {
    return N(a) === S;
  }
  return A.AsyncMode = b, A.ConcurrentMode = S, A.ContextConsumer = l, A.ContextProvider = w, A.Element = k, A.ForwardRef = f, A.Fragment = p, A.Lazy = z, A.Memo = F, A.Portal = C, A.Profiler = c, A.StrictMode = x, A.Suspense = m, A.isAsyncMode = function(a) {
    return L(a) || N(a) === b;
  }, A.isConcurrentMode = L, A.isContextConsumer = function(a) {
    return N(a) === l;
  }, A.isContextProvider = function(a) {
    return N(a) === w;
  }, A.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === k;
  }, A.isForwardRef = function(a) {
    return N(a) === f;
  }, A.isFragment = function(a) {
    return N(a) === p;
  }, A.isLazy = function(a) {
    return N(a) === z;
  }, A.isMemo = function(a) {
    return N(a) === F;
  }, A.isPortal = function(a) {
    return N(a) === C;
  }, A.isProfiler = function(a) {
    return N(a) === c;
  }, A.isStrictMode = function(a) {
    return N(a) === x;
  }, A.isSuspense = function(a) {
    return N(a) === m;
  }, A.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === p || a === S || a === c || a === x || a === m || a === $ || typeof a == "object" && a !== null && (a.$$typeof === z || a.$$typeof === F || a.$$typeof === w || a.$$typeof === l || a.$$typeof === f || a.$$typeof === V || a.$$typeof === U || a.$$typeof === Y || a.$$typeof === M);
  }, A.typeOf = N, A;
}
var I = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function Nr() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, k = i ? Symbol.for("react.element") : 60103, C = i ? Symbol.for("react.portal") : 60106, p = i ? Symbol.for("react.fragment") : 60107, x = i ? Symbol.for("react.strict_mode") : 60108, c = i ? Symbol.for("react.profiler") : 60114, w = i ? Symbol.for("react.provider") : 60109, l = i ? Symbol.for("react.context") : 60110, b = i ? Symbol.for("react.async_mode") : 60111, S = i ? Symbol.for("react.concurrent_mode") : 60111, f = i ? Symbol.for("react.forward_ref") : 60112, m = i ? Symbol.for("react.suspense") : 60113, $ = i ? Symbol.for("react.suspense_list") : 60120, F = i ? Symbol.for("react.memo") : 60115, z = i ? Symbol.for("react.lazy") : 60116, M = i ? Symbol.for("react.block") : 60121, V = i ? Symbol.for("react.fundamental") : 60117, U = i ? Symbol.for("react.responder") : 60118, Y = i ? Symbol.for("react.scope") : 60119;
    function N(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === p || n === S || n === c || n === x || n === m || n === $ || typeof n == "object" && n !== null && (n.$$typeof === z || n.$$typeof === F || n.$$typeof === w || n.$$typeof === l || n.$$typeof === f || n.$$typeof === V || n.$$typeof === U || n.$$typeof === Y || n.$$typeof === M);
    }
    function L(n) {
      if (typeof n == "object" && n !== null) {
        var Z = n.$$typeof;
        switch (Z) {
          case k:
            var le = n.type;
            switch (le) {
              case b:
              case S:
              case p:
              case c:
              case x:
              case m:
                return le;
              default:
                var oe = le && le.$$typeof;
                switch (oe) {
                  case l:
                  case f:
                  case z:
                  case F:
                  case w:
                    return oe;
                  default:
                    return Z;
                }
            }
          case C:
            return Z;
        }
      }
    }
    var a = b, re = S, pe = l, ye = w, ue = k, be = f, se = p, fe = z, K = F, G = C, te = c, H = x, ee = m, ne = !1;
    function ce(n) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(n) || L(n) === b;
    }
    function t(n) {
      return L(n) === S;
    }
    function u(n) {
      return L(n) === l;
    }
    function E(n) {
      return L(n) === w;
    }
    function h(n) {
      return typeof n == "object" && n !== null && n.$$typeof === k;
    }
    function d(n) {
      return L(n) === f;
    }
    function T(n) {
      return L(n) === p;
    }
    function v(n) {
      return L(n) === z;
    }
    function y(n) {
      return L(n) === F;
    }
    function g(n) {
      return L(n) === C;
    }
    function P(n) {
      return L(n) === c;
    }
    function _(n) {
      return L(n) === x;
    }
    function B(n) {
      return L(n) === m;
    }
    I.AsyncMode = a, I.ConcurrentMode = re, I.ContextConsumer = pe, I.ContextProvider = ye, I.Element = ue, I.ForwardRef = be, I.Fragment = se, I.Lazy = fe, I.Memo = K, I.Portal = G, I.Profiler = te, I.StrictMode = H, I.Suspense = ee, I.isAsyncMode = ce, I.isConcurrentMode = t, I.isContextConsumer = u, I.isContextProvider = E, I.isElement = h, I.isForwardRef = d, I.isFragment = T, I.isLazy = v, I.isMemo = y, I.isPortal = g, I.isProfiler = P, I.isStrictMode = _, I.isSuspense = B, I.isValidElementType = N, I.typeOf = L;
  }()), I;
}
var ir;
function vr() {
  return ir || (ir = 1, process.env.NODE_ENV === "production" ? Se.exports = Ur() : Se.exports = Nr()), Se.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, ur;
function Vr() {
  if (ur)
    return Ie;
  ur = 1;
  var i = Object.getOwnPropertySymbols, k = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
  function p(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function x() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var w = {}, l = 0; l < 10; l++)
        w["_" + String.fromCharCode(l)] = l;
      var b = Object.getOwnPropertyNames(w).map(function(f) {
        return w[f];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        S[f] = f;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = x() ? Object.assign : function(c, w) {
    for (var l, b = p(c), S, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var m in l)
        k.call(l, m) && (b[m] = l[m]);
      if (i) {
        S = i(l);
        for (var $ = 0; $ < S.length; $++)
          C.call(l, S[$]) && (b[S[$]] = l[S[$]]);
      }
    }
    return b;
  }, Ie;
}
var ke, sr;
function Ue() {
  if (sr)
    return ke;
  sr = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = i, ke;
}
var $e, fr;
function pr() {
  return fr || (fr = 1, $e = Function.call.bind(Object.prototype.hasOwnProperty)), $e;
}
var De, cr;
function zr() {
  if (cr)
    return De;
  cr = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var k = Ue(), C = {}, p = pr();
    i = function(c) {
      var w = "Warning: " + c;
      typeof console < "u" && console.error(w);
      try {
        throw new Error(w);
      } catch {
      }
    };
  }
  function x(c, w, l, b, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in c)
        if (p(c, f)) {
          var m;
          try {
            if (typeof c[f] != "function") {
              var $ = Error(
                (b || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw $.name = "Invariant Violation", $;
            }
            m = c[f](w, f, b, l, null, k);
          } catch (z) {
            m = z;
          }
          if (m && !(m instanceof Error) && i(
            (b || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in C)) {
            C[m.message] = !0;
            var F = S ? S() : "";
            i(
              "Failed " + l + " type: " + m.message + (F ?? "")
            );
          }
        }
    }
  }
  return x.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (C = {});
  }, De = x, De;
}
var Me, lr;
function Br() {
  if (lr)
    return Me;
  lr = 1;
  var i = vr(), k = Vr(), C = Ue(), p = pr(), x = zr(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(l) {
    var b = "Warning: " + l;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function w() {
    return null;
  }
  return Me = function(l, b) {
    var S = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(t) {
      var u = t && (S && t[S] || t[f]);
      if (typeof u == "function")
        return u;
    }
    var $ = "<<anonymous>>", F = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: N,
      element: L(),
      elementType: a(),
      instanceOf: re,
      node: be(),
      objectOf: ye,
      oneOf: pe,
      oneOfType: ue,
      shape: fe,
      exact: K
    };
    function z(t, u) {
      return t === u ? t !== 0 || 1 / t === 1 / u : t !== t && u !== u;
    }
    function M(t, u) {
      this.message = t, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function V(t) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, E = 0;
      function h(T, v, y, g, P, _, B) {
        if (g = g || $, _ = _ || y, B !== C) {
          if (b) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = g + ":" + y;
            !u[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + _ + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[Z] = !0, E++);
          }
        }
        return v[y] == null ? T ? v[y] === null ? new M("The " + P + " `" + _ + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new M("The " + P + " `" + _ + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(v, y, g, P, _);
      }
      var d = h.bind(null, !1);
      return d.isRequired = h.bind(null, !0), d;
    }
    function U(t) {
      function u(E, h, d, T, v, y) {
        var g = E[h], P = H(g);
        if (P !== t) {
          var _ = ee(g);
          return new M(
            "Invalid " + T + " `" + v + "` of type " + ("`" + _ + "` supplied to `" + d + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return V(u);
    }
    function Y() {
      return V(w);
    }
    function N(t) {
      function u(E, h, d, T, v) {
        if (typeof t != "function")
          return new M("Property `" + v + "` of component `" + d + "` has invalid PropType notation inside arrayOf.");
        var y = E[h];
        if (!Array.isArray(y)) {
          var g = H(y);
          return new M("Invalid " + T + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an array."));
        }
        for (var P = 0; P < y.length; P++) {
          var _ = t(y, P, d, T, v + "[" + P + "]", C);
          if (_ instanceof Error)
            return _;
        }
        return null;
      }
      return V(u);
    }
    function L() {
      function t(u, E, h, d, T) {
        var v = u[E];
        if (!l(v)) {
          var y = H(v);
          return new M("Invalid " + d + " `" + T + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(t);
    }
    function a() {
      function t(u, E, h, d, T) {
        var v = u[E];
        if (!i.isValidElementType(v)) {
          var y = H(v);
          return new M("Invalid " + d + " `" + T + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(t);
    }
    function re(t) {
      function u(E, h, d, T, v) {
        if (!(E[h] instanceof t)) {
          var y = t.name || $, g = ce(E[h]);
          return new M("Invalid " + T + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return V(u);
    }
    function pe(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), w;
      function u(E, h, d, T, v) {
        for (var y = E[h], g = 0; g < t.length; g++)
          if (z(y, t[g]))
            return null;
        var P = JSON.stringify(t, function(B, n) {
          var Z = ee(n);
          return Z === "symbol" ? String(n) : n;
        });
        return new M("Invalid " + T + " `" + v + "` of value `" + String(y) + "` " + ("supplied to `" + d + "`, expected one of " + P + "."));
      }
      return V(u);
    }
    function ye(t) {
      function u(E, h, d, T, v) {
        if (typeof t != "function")
          return new M("Property `" + v + "` of component `" + d + "` has invalid PropType notation inside objectOf.");
        var y = E[h], g = H(y);
        if (g !== "object")
          return new M("Invalid " + T + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an object."));
        for (var P in y)
          if (p(y, P)) {
            var _ = t(y, P, d, T, v + "." + P, C);
            if (_ instanceof Error)
              return _;
          }
        return null;
      }
      return V(u);
    }
    function ue(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), w;
      for (var u = 0; u < t.length; u++) {
        var E = t[u];
        if (typeof E != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(E) + " at index " + u + "."
          ), w;
      }
      function h(d, T, v, y, g) {
        for (var P = [], _ = 0; _ < t.length; _++) {
          var B = t[_], n = B(d, T, v, y, g, C);
          if (n == null)
            return null;
          n.data && p(n.data, "expectedType") && P.push(n.data.expectedType);
        }
        var Z = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new M("Invalid " + y + " `" + g + "` supplied to " + ("`" + v + "`" + Z + "."));
      }
      return V(h);
    }
    function be() {
      function t(u, E, h, d, T) {
        return G(u[E]) ? null : new M("Invalid " + d + " `" + T + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return V(t);
    }
    function se(t, u, E, h, d) {
      return new M(
        (t || "React class") + ": " + u + " type `" + E + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + d + "`."
      );
    }
    function fe(t) {
      function u(E, h, d, T, v) {
        var y = E[h], g = H(y);
        if (g !== "object")
          return new M("Invalid " + T + " `" + v + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."));
        for (var P in t) {
          var _ = t[P];
          if (typeof _ != "function")
            return se(d, T, v, P, ee(_));
          var B = _(y, P, d, T, v + "." + P, C);
          if (B)
            return B;
        }
        return null;
      }
      return V(u);
    }
    function K(t) {
      function u(E, h, d, T, v) {
        var y = E[h], g = H(y);
        if (g !== "object")
          return new M("Invalid " + T + " `" + v + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."));
        var P = k({}, E[h], t);
        for (var _ in P) {
          var B = t[_];
          if (p(t, _) && typeof B != "function")
            return se(d, T, v, _, ee(B));
          if (!B)
            return new M(
              "Invalid " + T + " `" + v + "` key `" + _ + "` supplied to `" + d + "`.\nBad object: " + JSON.stringify(E[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var n = B(y, _, d, T, v + "." + _, C);
          if (n)
            return n;
        }
        return null;
      }
      return V(u);
    }
    function G(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(G);
          if (t === null || l(t))
            return !0;
          var u = m(t);
          if (u) {
            var E = u.call(t), h;
            if (u !== t.entries) {
              for (; !(h = E.next()).done; )
                if (!G(h.value))
                  return !1;
            } else
              for (; !(h = E.next()).done; ) {
                var d = h.value;
                if (d && !G(d[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(t, u) {
      return t === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function H(t) {
      var u = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : te(u, t) ? "symbol" : u;
    }
    function ee(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var u = H(t);
      if (u === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function ne(t) {
      var u = ee(t);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function ce(t) {
      return !t.constructor || !t.constructor.name ? $ : t.constructor.name;
    }
    return F.checkPropTypes = x, F.resetWarningCache = x.resetWarningCache, F.PropTypes = F, F;
  }, Me;
}
var Fe, dr;
function Jr() {
  if (dr)
    return Fe;
  dr = 1;
  var i = Ue();
  function k() {
  }
  function C() {
  }
  return C.resetWarningCache = k, Fe = function() {
    function p(w, l, b, S, f, m) {
      if (m !== i) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    p.isRequired = p;
    function x() {
      return p;
    }
    var c = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: x,
      element: p,
      elementType: p,
      instanceOf: x,
      node: p,
      objectOf: x,
      oneOf: x,
      oneOfType: x,
      shape: x,
      exact: x,
      checkPropTypes: C,
      resetWarningCache: k
    };
    return c.PropTypes = c, c;
  }, Fe;
}
if (process.env.NODE_ENV !== "production") {
  var Kr = vr(), Gr = !0;
  Le.exports = Br()(Kr.isElement, Gr);
} else
  Le.exports = Jr()();
var Xr = Le.exports;
const Ye = /* @__PURE__ */ Wr(Xr);
Ye.string, Ye.func, Ye.string;
function Hr({ color: i, hidden: k, ...C }) {
  return k ? null : /* @__PURE__ */ ie.jsx("h1", { style: { color: i }, ...C });
}
function Zr() {
  return /* @__PURE__ */ ie.jsxs(Fr, { children: [
    /* @__PURE__ */ ie.jsx(Hr, { color: "green", id: "monid", className: "demo", "data-demo": "demo", children: "Mon Composant" }),
    /* @__PURE__ */ ie.jsx("p", { children: /* @__PURE__ */ ie.jsx("strong", { children: "bonjour les gens" }) })
  ] });
}
const rt = Re.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ ie.jsx(qe.StrictMode, { children: /* @__PURE__ */ ie.jsx(Zr, {}) })
);
export {
  rt as default
};
