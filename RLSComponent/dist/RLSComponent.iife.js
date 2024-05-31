var RLSComponent=function(Te,yr){"use strict";function br(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ce={exports:{}},pe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function hr(){if(Ne)return pe;Ne=1;var i=Te,k=Symbol.for("react.element"),C=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,A=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function w(l,b,O){var c,m={},D=null,F=null;O!==void 0&&(D=""+O),b.key!==void 0&&(D=""+b.key),b.ref!==void 0&&(F=b.ref);for(c in b)p.call(b,c)&&!f.hasOwnProperty(c)&&(m[c]=b[c]);if(l&&l.defaultProps)for(c in b=l.defaultProps,b)m[c]===void 0&&(m[c]=b[c]);return{$$typeof:k,type:l,key:D,ref:F,props:m,_owner:A.current}}return pe.Fragment=C,pe.jsx=w,pe.jsxs=w,pe}var ye={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve;function Er(){return Ve||(Ve=1,process.env.NODE_ENV!=="production"&&function(){var i=Te,k=Symbol.for("react.element"),C=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),l=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),z=Symbol.iterator,M="@@iterator";function V(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[M];return typeof r=="function"?r:null}var U=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Y(e){{for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];N("error",e,o)}}function N(e,r,o){{var s=U.ReactDebugCurrentFrame,I=s.getStackAddendum();I!==""&&(r+="%s",o=o.concat([I]));var $=o.map(function(S){return String(S)});$.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,$)}}var L=!1,a=!1,re=!1,Ee=!1,me=!1,ue;ue=Symbol.for("react.module.reference");function ge(e){return!!(typeof e=="string"||typeof e=="function"||e===p||e===f||me||e===A||e===O||e===c||Ee||e===F||L||a||re||typeof e=="object"&&e!==null&&(e.$$typeof===D||e.$$typeof===m||e.$$typeof===w||e.$$typeof===l||e.$$typeof===b||e.$$typeof===ue||e.getModuleId!==void 0))}function se(e,r,o){var s=e.displayName;if(s)return s;var I=r.displayName||r.name||"";return I!==""?o+"("+I+")":o}function ce(e){return e.displayName||"Context"}function K(e){if(e==null)return null;if(typeof e.tag=="number"&&Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case C:return"Portal";case f:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var r=e;return ce(r)+".Consumer";case w:var o=e;return ce(o._context)+".Provider";case b:return se(e,e.render,"ForwardRef");case m:var s=e.displayName||null;return s!==null?s:K(e.type)||"Memo";case D:{var I=e,$=I._payload,S=I._init;try{return K(S($))}catch{return null}}}return null}var G=Object.assign,te=0,H,ee,oe,fe,t,u,E;function h(){}h.__reactDisabledLog=!0;function d(){{if(te===0){H=console.log,ee=console.info,oe=console.warn,fe=console.error,t=console.group,u=console.groupCollapsed,E=console.groupEnd;var e={configurable:!0,enumerable:!0,value:h,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}te++}}function T(){{if(te--,te===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:G({},e,{value:H}),info:G({},e,{value:ee}),warn:G({},e,{value:oe}),error:G({},e,{value:fe}),group:G({},e,{value:t}),groupCollapsed:G({},e,{value:u}),groupEnd:G({},e,{value:E})})}te<0&&Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var v=U.ReactCurrentDispatcher,y;function g(e,r,o){{if(y===void 0)try{throw Error()}catch(I){var s=I.stack.trim().match(/\n( *(at )?)/);y=s&&s[1]||""}return`
`+y+e}}var P=!1,_;{var B=typeof WeakMap=="function"?WeakMap:Map;_=new B}function n(e,r){if(!e||P)return"";{var o=_.get(e);if(o!==void 0)return o}var s;P=!0;var I=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var $;$=v.current,v.current=null,d();try{if(r){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(X){s=X}Reflect.construct(e,[],S)}else{try{S.call()}catch(X){s=X}e.call(S.prototype)}}else{try{throw Error()}catch(X){s=X}e()}}catch(X){if(X&&s&&typeof X.stack=="string"){for(var R=X.stack.split(`
`),J=s.stack.split(`
`),W=R.length-1,q=J.length-1;W>=1&&q>=0&&R[W]!==J[q];)q--;for(;W>=1&&q>=0;W--,q--)if(R[W]!==J[q]){if(W!==1||q!==1)do if(W--,q--,q<0||R[W]!==J[q]){var Q=`
`+R[W].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),typeof e=="function"&&_.set(e,Q),Q}while(W>=1&&q>=0);break}}}finally{P=!1,v.current=$,T(),Error.prepareStackTrace=I}var ve=e?e.displayName||e.name:"",ie=ve?g(ve):"";return typeof e=="function"&&_.set(e,ie),ie}function Z(e,r,o){return n(e,!1)}function le(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ae(e,r,o){if(e==null)return"";if(typeof e=="function")return n(e,le(e));if(typeof e=="string")return g(e);switch(e){case O:return g("Suspense");case c:return g("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return Z(e.render);case m:return ae(e.type,r,o);case D:{var s=e,I=s._payload,$=s._init;try{return ae($(I),r,o)}catch{}}}return""}var _e=Object.prototype.hasOwnProperty,tr={},nr=U.ReactDebugCurrentFrame;function Pe(e){if(e){var r=e._owner,o=ae(e.type,e._source,r?r.type:null);nr.setExtraStackFrame(o)}else nr.setExtraStackFrame(null)}function jr(e,r,o,s,I){{var $=Function.call.bind(_e);for(var S in e)if($(e,S)){var R=void 0;try{if(typeof e[S]!="function"){var J=Error((s||"React class")+": "+o+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw J.name="Invariant Violation",J}R=e[S](r,S,s,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(W){R=W}R&&!(R instanceof Error)&&(Pe(I),Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",o,S,typeof R),Pe(null)),R instanceof Error&&!(R.message in tr)&&(tr[R.message]=!0,Pe(I),Y("Failed %s type: %s",o,R.message),Pe(null))}}}var Ar=Array.isArray;function Fe(e){return Ar(e)}function Ir(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,o=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function kr(e){try{return or(e),!1}catch{return!0}}function or(e){return""+e}function ar(e){if(kr(e))return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ir(e)),or(e)}var Re=U.ReactCurrentOwner,Dr={key:!0,ref:!0,__self:!0,__source:!0},ir,ur,Ye;Ye={};function $r(e){if(_e.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Mr(e){if(_e.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Fr(e,r){if(typeof e.ref=="string"&&Re.current&&r&&Re.current.stateNode!==r){var o=K(Re.current.type);Ye[o]||(Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',K(Re.current.type),e.ref),Ye[o]=!0)}}function Yr(e,r){{var o=function(){ir||(ir=!0,Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function Wr(e,r){{var o=function(){ur||(ur=!0,Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var Lr=function(e,r,o,s,I,$,S){var R={$$typeof:k,type:e,key:r,ref:o,props:S,_owner:$};return R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(R,"_self",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.defineProperty(R,"_source",{configurable:!1,enumerable:!1,writable:!1,value:I}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R};function qr(e,r,o,s,I){{var $,S={},R=null,J=null;o!==void 0&&(ar(o),R=""+o),Mr(r)&&(ar(r.key),R=""+r.key),$r(r)&&(J=r.ref,Fr(r,I));for($ in r)_e.call(r,$)&&!Dr.hasOwnProperty($)&&(S[$]=r[$]);if(e&&e.defaultProps){var W=e.defaultProps;for($ in W)S[$]===void 0&&(S[$]=W[$])}if(R||J){var q=typeof e=="function"?e.displayName||e.name||"Unknown":e;R&&Yr(S,q),J&&Wr(S,q)}return Lr(e,R,J,I,s,Re.current,S)}}var We=U.ReactCurrentOwner,sr=U.ReactDebugCurrentFrame;function de(e){if(e){var r=e._owner,o=ae(e.type,e._source,r?r.type:null);sr.setExtraStackFrame(o)}else sr.setExtraStackFrame(null)}var Le;Le=!1;function qe(e){return typeof e=="object"&&e!==null&&e.$$typeof===k}function cr(){{if(We.current){var e=K(We.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Ur(e){return""}var fr={};function Nr(e){{var r=cr();if(!r){var o=typeof e=="string"?e:e.displayName||e.name;o&&(r=`

Check the top-level render call using <`+o+">.")}return r}}function lr(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=Nr(r);if(fr[o])return;fr[o]=!0;var s="";e&&e._owner&&e._owner!==We.current&&(s=" It was passed a child from "+K(e._owner.type)+"."),de(e),Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,s),de(null)}}function dr(e,r){{if(typeof e!="object")return;if(Fe(e))for(var o=0;o<e.length;o++){var s=e[o];qe(s)&&lr(s,r)}else if(qe(e))e._store&&(e._store.validated=!0);else if(e){var I=V(e);if(typeof I=="function"&&I!==e.entries)for(var $=I.call(e),S;!(S=$.next()).done;)qe(S.value)&&lr(S.value,r)}}}function Vr(e){{var r=e.type;if(r==null||typeof r=="string")return;var o;if(typeof r=="function")o=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===b||r.$$typeof===m))o=r.propTypes;else return;if(o){var s=K(r);jr(o,e.props,"prop",s,e)}else if(r.PropTypes!==void 0&&!Le){Le=!0;var I=K(r);Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",I||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function zr(e){{for(var r=Object.keys(e.props),o=0;o<r.length;o++){var s=r[o];if(s!=="children"&&s!=="key"){de(e),Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",s),de(null);break}}e.ref!==null&&(de(e),Y("Invalid attribute `ref` supplied to `React.Fragment`."),de(null))}}var vr={};function pr(e,r,o,s,I,$){{var S=ge(e);if(!S){var R="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var J=Ur();J?R+=J:R+=cr();var W;e===null?W="null":Fe(e)?W="array":e!==void 0&&e.$$typeof===k?(W="<"+(K(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):W=typeof e,Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",W,R)}var q=qr(e,r,o,I,$);if(q==null)return q;if(S){var Q=r.children;if(Q!==void 0)if(s)if(Fe(Q)){for(var ve=0;ve<Q.length;ve++)dr(Q[ve],e);Object.freeze&&Object.freeze(Q)}else Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else dr(Q,e)}if(_e.call(r,"key")){var ie=K(e),X=Object.keys(r).filter(function(Hr){return Hr!=="key"}),Ue=X.length>0?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}";if(!vr[ie+Ue]){var Xr=X.length>0?"{"+X.join(": ..., ")+": ...}":"{}";Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ue,ie,Xr,ie),vr[ie+Ue]=!0}}return e===p?zr(q):Vr(q),q}}function Br(e,r,o){return pr(e,r,o,!0)}function Jr(e,r,o){return pr(e,r,o,!1)}var Kr=Jr,Gr=Br;ye.Fragment=p,ye.jsx=Kr,ye.jsxs=Gr}()),ye}process.env.NODE_ENV==="production"?Ce.exports=hr():Ce.exports=Er();var ne=Ce.exports,be={},he=yr;if(process.env.NODE_ENV==="production")be.createRoot=he.createRoot,be.hydrateRoot=he.hydrateRoot;else{var Se=he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;be.createRoot=function(i,k){Se.usingClientEntryPoint=!0;try{return he.createRoot(i,k)}finally{Se.usingClientEntryPoint=!1}},be.hydrateRoot=function(i,k,C){Se.usingClientEntryPoint=!0;try{return he.hydrateRoot(i,k,C)}finally{Se.usingClientEntryPoint=!1}}}var we={exports:{}},Oe={exports:{}},x={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function mr(){if(ze)return x;ze=1;var i=typeof Symbol=="function"&&Symbol.for,k=i?Symbol.for("react.element"):60103,C=i?Symbol.for("react.portal"):60106,p=i?Symbol.for("react.fragment"):60107,A=i?Symbol.for("react.strict_mode"):60108,f=i?Symbol.for("react.profiler"):60114,w=i?Symbol.for("react.provider"):60109,l=i?Symbol.for("react.context"):60110,b=i?Symbol.for("react.async_mode"):60111,O=i?Symbol.for("react.concurrent_mode"):60111,c=i?Symbol.for("react.forward_ref"):60112,m=i?Symbol.for("react.suspense"):60113,D=i?Symbol.for("react.suspense_list"):60120,F=i?Symbol.for("react.memo"):60115,z=i?Symbol.for("react.lazy"):60116,M=i?Symbol.for("react.block"):60121,V=i?Symbol.for("react.fundamental"):60117,U=i?Symbol.for("react.responder"):60118,Y=i?Symbol.for("react.scope"):60119;function N(a){if(typeof a=="object"&&a!==null){var re=a.$$typeof;switch(re){case k:switch(a=a.type,a){case b:case O:case p:case f:case A:case m:return a;default:switch(a=a&&a.$$typeof,a){case l:case c:case z:case F:case w:return a;default:return re}}case C:return re}}}function L(a){return N(a)===O}return x.AsyncMode=b,x.ConcurrentMode=O,x.ContextConsumer=l,x.ContextProvider=w,x.Element=k,x.ForwardRef=c,x.Fragment=p,x.Lazy=z,x.Memo=F,x.Portal=C,x.Profiler=f,x.StrictMode=A,x.Suspense=m,x.isAsyncMode=function(a){return L(a)||N(a)===b},x.isConcurrentMode=L,x.isContextConsumer=function(a){return N(a)===l},x.isContextProvider=function(a){return N(a)===w},x.isElement=function(a){return typeof a=="object"&&a!==null&&a.$$typeof===k},x.isForwardRef=function(a){return N(a)===c},x.isFragment=function(a){return N(a)===p},x.isLazy=function(a){return N(a)===z},x.isMemo=function(a){return N(a)===F},x.isPortal=function(a){return N(a)===C},x.isProfiler=function(a){return N(a)===f},x.isStrictMode=function(a){return N(a)===A},x.isSuspense=function(a){return N(a)===m},x.isValidElementType=function(a){return typeof a=="string"||typeof a=="function"||a===p||a===O||a===f||a===A||a===m||a===D||typeof a=="object"&&a!==null&&(a.$$typeof===z||a.$$typeof===F||a.$$typeof===w||a.$$typeof===l||a.$$typeof===c||a.$$typeof===V||a.$$typeof===U||a.$$typeof===Y||a.$$typeof===M)},x.typeOf=N,x}var j={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be;function gr(){return Be||(Be=1,process.env.NODE_ENV!=="production"&&function(){var i=typeof Symbol=="function"&&Symbol.for,k=i?Symbol.for("react.element"):60103,C=i?Symbol.for("react.portal"):60106,p=i?Symbol.for("react.fragment"):60107,A=i?Symbol.for("react.strict_mode"):60108,f=i?Symbol.for("react.profiler"):60114,w=i?Symbol.for("react.provider"):60109,l=i?Symbol.for("react.context"):60110,b=i?Symbol.for("react.async_mode"):60111,O=i?Symbol.for("react.concurrent_mode"):60111,c=i?Symbol.for("react.forward_ref"):60112,m=i?Symbol.for("react.suspense"):60113,D=i?Symbol.for("react.suspense_list"):60120,F=i?Symbol.for("react.memo"):60115,z=i?Symbol.for("react.lazy"):60116,M=i?Symbol.for("react.block"):60121,V=i?Symbol.for("react.fundamental"):60117,U=i?Symbol.for("react.responder"):60118,Y=i?Symbol.for("react.scope"):60119;function N(n){return typeof n=="string"||typeof n=="function"||n===p||n===O||n===f||n===A||n===m||n===D||typeof n=="object"&&n!==null&&(n.$$typeof===z||n.$$typeof===F||n.$$typeof===w||n.$$typeof===l||n.$$typeof===c||n.$$typeof===V||n.$$typeof===U||n.$$typeof===Y||n.$$typeof===M)}function L(n){if(typeof n=="object"&&n!==null){var Z=n.$$typeof;switch(Z){case k:var le=n.type;switch(le){case b:case O:case p:case f:case A:case m:return le;default:var ae=le&&le.$$typeof;switch(ae){case l:case c:case z:case F:case w:return ae;default:return Z}}case C:return Z}}}var a=b,re=O,Ee=l,me=w,ue=k,ge=c,se=p,ce=z,K=F,G=C,te=f,H=A,ee=m,oe=!1;function fe(n){return oe||(oe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),t(n)||L(n)===b}function t(n){return L(n)===O}function u(n){return L(n)===l}function E(n){return L(n)===w}function h(n){return typeof n=="object"&&n!==null&&n.$$typeof===k}function d(n){return L(n)===c}function T(n){return L(n)===p}function v(n){return L(n)===z}function y(n){return L(n)===F}function g(n){return L(n)===C}function P(n){return L(n)===f}function _(n){return L(n)===A}function B(n){return L(n)===m}j.AsyncMode=a,j.ConcurrentMode=re,j.ContextConsumer=Ee,j.ContextProvider=me,j.Element=ue,j.ForwardRef=ge,j.Fragment=se,j.Lazy=ce,j.Memo=K,j.Portal=G,j.Profiler=te,j.StrictMode=H,j.Suspense=ee,j.isAsyncMode=fe,j.isConcurrentMode=t,j.isContextConsumer=u,j.isContextProvider=E,j.isElement=h,j.isForwardRef=d,j.isFragment=T,j.isLazy=v,j.isMemo=y,j.isPortal=g,j.isProfiler=P,j.isStrictMode=_,j.isSuspense=B,j.isValidElementType=N,j.typeOf=L}()),j}var Je;function Ke(){return Je||(Je=1,process.env.NODE_ENV==="production"?Oe.exports=mr():Oe.exports=gr()),Oe.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var xe,Ge;function _r(){if(Ge)return xe;Ge=1;var i=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;function p(f){if(f==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(f)}function A(){try{if(!Object.assign)return!1;var f=new String("abc");if(f[5]="de",Object.getOwnPropertyNames(f)[0]==="5")return!1;for(var w={},l=0;l<10;l++)w["_"+String.fromCharCode(l)]=l;var b=Object.getOwnPropertyNames(w).map(function(c){return w[c]});if(b.join("")!=="0123456789")return!1;var O={};return"abcdefghijklmnopqrst".split("").forEach(function(c){O[c]=c}),Object.keys(Object.assign({},O)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return xe=A()?Object.assign:function(f,w){for(var l,b=p(f),O,c=1;c<arguments.length;c++){l=Object(arguments[c]);for(var m in l)k.call(l,m)&&(b[m]=l[m]);if(i){O=i(l);for(var D=0;D<O.length;D++)C.call(l,O[D])&&(b[O[D]]=l[O[D]])}}return b},xe}var je,Xe;function Ae(){if(Xe)return je;Xe=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return je=i,je}var Ie,He;function Ze(){return He||(He=1,Ie=Function.call.bind(Object.prototype.hasOwnProperty)),Ie}var ke,Qe;function Rr(){if(Qe)return ke;Qe=1;var i=function(){};if(process.env.NODE_ENV!=="production"){var k=Ae(),C={},p=Ze();i=function(f){var w="Warning: "+f;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function A(f,w,l,b,O){if(process.env.NODE_ENV!=="production"){for(var c in f)if(p(f,c)){var m;try{if(typeof f[c]!="function"){var D=Error((b||"React class")+": "+l+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof f[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw D.name="Invariant Violation",D}m=f[c](w,c,b,l,null,k)}catch(z){m=z}if(m&&!(m instanceof Error)&&i((b||"React class")+": type specification of "+l+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof m+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),m instanceof Error&&!(m.message in C)){C[m.message]=!0;var F=O?O():"";i("Failed "+l+" type: "+m.message+(F??""))}}}}return A.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(C={})},ke=A,ke}var De,er;function Tr(){if(er)return De;er=1;var i=Ke(),k=_r(),C=Ae(),p=Ze(),A=Rr(),f=function(){};process.env.NODE_ENV!=="production"&&(f=function(l){var b="Warning: "+l;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}});function w(){return null}return De=function(l,b){var O=typeof Symbol=="function"&&Symbol.iterator,c="@@iterator";function m(t){var u=t&&(O&&t[O]||t[c]);if(typeof u=="function")return u}var D="<<anonymous>>",F={array:U("array"),bigint:U("bigint"),bool:U("boolean"),func:U("function"),number:U("number"),object:U("object"),string:U("string"),symbol:U("symbol"),any:Y(),arrayOf:N,element:L(),elementType:a(),instanceOf:re,node:ge(),objectOf:me,oneOf:Ee,oneOfType:ue,shape:ce,exact:K};function z(t,u){return t===u?t!==0||1/t===1/u:t!==t&&u!==u}function M(t,u){this.message=t,this.data=u&&typeof u=="object"?u:{},this.stack=""}M.prototype=Error.prototype;function V(t){if(process.env.NODE_ENV!=="production")var u={},E=0;function h(T,v,y,g,P,_,B){if(g=g||D,_=_||y,B!==C){if(b){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var Z=g+":"+y;!u[Z]&&E<3&&(f("You are manually calling a React.PropTypes validation function for the `"+_+"` prop on `"+g+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),u[Z]=!0,E++)}}return v[y]==null?T?v[y]===null?new M("The "+P+" `"+_+"` is marked as required "+("in `"+g+"`, but its value is `null`.")):new M("The "+P+" `"+_+"` is marked as required in "+("`"+g+"`, but its value is `undefined`.")):null:t(v,y,g,P,_)}var d=h.bind(null,!1);return d.isRequired=h.bind(null,!0),d}function U(t){function u(E,h,d,T,v,y){var g=E[h],P=H(g);if(P!==t){var _=ee(g);return new M("Invalid "+T+" `"+v+"` of type "+("`"+_+"` supplied to `"+d+"`, expected ")+("`"+t+"`."),{expectedType:t})}return null}return V(u)}function Y(){return V(w)}function N(t){function u(E,h,d,T,v){if(typeof t!="function")return new M("Property `"+v+"` of component `"+d+"` has invalid PropType notation inside arrayOf.");var y=E[h];if(!Array.isArray(y)){var g=H(y);return new M("Invalid "+T+" `"+v+"` of type "+("`"+g+"` supplied to `"+d+"`, expected an array."))}for(var P=0;P<y.length;P++){var _=t(y,P,d,T,v+"["+P+"]",C);if(_ instanceof Error)return _}return null}return V(u)}function L(){function t(u,E,h,d,T){var v=u[E];if(!l(v)){var y=H(v);return new M("Invalid "+d+" `"+T+"` of type "+("`"+y+"` supplied to `"+h+"`, expected a single ReactElement."))}return null}return V(t)}function a(){function t(u,E,h,d,T){var v=u[E];if(!i.isValidElementType(v)){var y=H(v);return new M("Invalid "+d+" `"+T+"` of type "+("`"+y+"` supplied to `"+h+"`, expected a single ReactElement type."))}return null}return V(t)}function re(t){function u(E,h,d,T,v){if(!(E[h]instanceof t)){var y=t.name||D,g=fe(E[h]);return new M("Invalid "+T+" `"+v+"` of type "+("`"+g+"` supplied to `"+d+"`, expected ")+("instance of `"+y+"`."))}return null}return V(u)}function Ee(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&(arguments.length>1?f("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):f("Invalid argument supplied to oneOf, expected an array.")),w;function u(E,h,d,T,v){for(var y=E[h],g=0;g<t.length;g++)if(z(y,t[g]))return null;var P=JSON.stringify(t,function(B,n){var Z=ee(n);return Z==="symbol"?String(n):n});return new M("Invalid "+T+" `"+v+"` of value `"+String(y)+"` "+("supplied to `"+d+"`, expected one of "+P+"."))}return V(u)}function me(t){function u(E,h,d,T,v){if(typeof t!="function")return new M("Property `"+v+"` of component `"+d+"` has invalid PropType notation inside objectOf.");var y=E[h],g=H(y);if(g!=="object")return new M("Invalid "+T+" `"+v+"` of type "+("`"+g+"` supplied to `"+d+"`, expected an object."));for(var P in y)if(p(y,P)){var _=t(y,P,d,T,v+"."+P,C);if(_ instanceof Error)return _}return null}return V(u)}function ue(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&f("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var u=0;u<t.length;u++){var E=t[u];if(typeof E!="function")return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+oe(E)+" at index "+u+"."),w}function h(d,T,v,y,g){for(var P=[],_=0;_<t.length;_++){var B=t[_],n=B(d,T,v,y,g,C);if(n==null)return null;n.data&&p(n.data,"expectedType")&&P.push(n.data.expectedType)}var Z=P.length>0?", expected one of type ["+P.join(", ")+"]":"";return new M("Invalid "+y+" `"+g+"` supplied to "+("`"+v+"`"+Z+"."))}return V(h)}function ge(){function t(u,E,h,d,T){return G(u[E])?null:new M("Invalid "+d+" `"+T+"` supplied to "+("`"+h+"`, expected a ReactNode."))}return V(t)}function se(t,u,E,h,d){return new M((t||"React class")+": "+u+" type `"+E+"."+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+d+"`.")}function ce(t){function u(E,h,d,T,v){var y=E[h],g=H(y);if(g!=="object")return new M("Invalid "+T+" `"+v+"` of type `"+g+"` "+("supplied to `"+d+"`, expected `object`."));for(var P in t){var _=t[P];if(typeof _!="function")return se(d,T,v,P,ee(_));var B=_(y,P,d,T,v+"."+P,C);if(B)return B}return null}return V(u)}function K(t){function u(E,h,d,T,v){var y=E[h],g=H(y);if(g!=="object")return new M("Invalid "+T+" `"+v+"` of type `"+g+"` "+("supplied to `"+d+"`, expected `object`."));var P=k({},E[h],t);for(var _ in P){var B=t[_];if(p(t,_)&&typeof B!="function")return se(d,T,v,_,ee(B));if(!B)return new M("Invalid "+T+" `"+v+"` key `"+_+"` supplied to `"+d+"`.\nBad object: "+JSON.stringify(E[h],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(t),null,"  "));var n=B(y,_,d,T,v+"."+_,C);if(n)return n}return null}return V(u)}function G(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(G);if(t===null||l(t))return!0;var u=m(t);if(u){var E=u.call(t),h;if(u!==t.entries){for(;!(h=E.next()).done;)if(!G(h.value))return!1}else for(;!(h=E.next()).done;){var d=h.value;if(d&&!G(d[1]))return!1}}else return!1;return!0;default:return!1}}function te(t,u){return t==="symbol"?!0:u?u["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&u instanceof Symbol:!1}function H(t){var u=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":te(u,t)?"symbol":u}function ee(t){if(typeof t>"u"||t===null)return""+t;var u=H(t);if(u==="object"){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return u}function oe(t){var u=ee(t);switch(u){case"array":case"object":return"an "+u;case"boolean":case"date":case"regexp":return"a "+u;default:return u}}function fe(t){return!t.constructor||!t.constructor.name?D:t.constructor.name}return F.checkPropTypes=A,F.resetWarningCache=A.resetWarningCache,F.PropTypes=F,F},De}var $e,rr;function Sr(){if(rr)return $e;rr=1;var i=Ae();function k(){}function C(){}return C.resetWarningCache=k,$e=function(){function p(w,l,b,O,c,m){if(m!==i){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}}p.isRequired=p;function A(){return p}var f={array:p,bigint:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:A,element:p,elementType:p,instanceOf:A,node:p,objectOf:A,oneOf:A,oneOfType:A,shape:A,exact:A,checkPropTypes:C,resetWarningCache:k};return f.PropTypes=f,f},$e}if(process.env.NODE_ENV!=="production"){var Or=Ke(),Pr=!0;we.exports=Tr()(Or.isElement,Pr)}else we.exports=Sr()();var Cr=we.exports;const Me=br(Cr);Me.string,Me.func,Me.string;function wr({color:i,hidden:k,...C}){return k?null:ne.jsx("h1",{style:{color:i},...C})}function xr(){return ne.jsxs(Te.Fragment,{children:[ne.jsx(wr,{color:"green",id:"monid",className:"demo","data-demo":"demo",children:"Mon Composant"}),ne.jsx("p",{children:ne.jsx("strong",{children:"bonjour les gens"})})]})}return be.createRoot(document.getElementById("root")).render(ne.jsx(Te.StrictMode,{children:ne.jsx(xr,{})}))}(React,require$$0$1);
//# sourceMappingURL=RLSComponent.iife.js.map
