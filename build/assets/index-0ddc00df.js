function Rk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function a0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l0={exports:{}},Gu={},u0={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),Ak=Symbol.for("react.portal"),Dk=Symbol.for("react.fragment"),Pk=Symbol.for("react.strict_mode"),Ok=Symbol.for("react.profiler"),bk=Symbol.for("react.provider"),$k=Symbol.for("react.context"),Lk=Symbol.for("react.forward_ref"),jk=Symbol.for("react.suspense"),Mk=Symbol.for("react.memo"),Uk=Symbol.for("react.lazy"),fg=Symbol.iterator;function Fk(t){return t===null||typeof t!="object"?null:(t=fg&&t[fg]||t["@@iterator"],typeof t=="function"?t:null)}var c0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h0=Object.assign,d0={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||c0}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function f0(){}f0.prototype=Ns.prototype;function Lf(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||c0}var jf=Lf.prototype=new f0;jf.constructor=Lf;h0(jf,Ns.prototype);jf.isPureReactComponent=!0;var pg=Array.isArray,p0=Object.prototype.hasOwnProperty,Mf={current:null},m0={key:!0,ref:!0,__self:!0,__source:!0};function g0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)p0.call(e,r)&&!m0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ya,type:t,key:s,ref:o,props:i,_owner:Mf.current}}function zk(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function Bk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mg=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bk(""+t.key):e.toString(36)}function Rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case Ak:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zc(o,0):r,pg(i)?(n="",t!=null&&(n=t.replace(mg,"$&/")+"/"),Rl(i,e,n,"",function(u){return u})):i!=null&&(Uf(i)&&(i=zk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",pg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Zc(s,a);o+=Rl(s,e,n,l,i)}else if(l=Fk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Zc(s,a++),o+=Rl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return Rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Vk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Al={transition:null},Hk={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Al,ReactCurrentOwner:Mf};Q.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=Ns;Q.Fragment=Dk;Q.Profiler=Ok;Q.PureComponent=Lf;Q.StrictMode=Pk;Q.Suspense=jk;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)p0.call(e,l)&&!m0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ya,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:$k,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bk,_context:t},t.Consumer=t};Q.createElement=g0;Q.createFactory=function(t){var e=g0.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:Lk,render:t}};Q.isValidElement=Uf;Q.lazy=function(t){return{$$typeof:Uk,_payload:{_status:-1,_result:t},_init:Vk}};Q.memo=function(t,e){return{$$typeof:Mk,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return ht.current.useCallback(t,e)};Q.useContext=function(t){return ht.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ht.current.useEffect(t,e)};Q.useId=function(){return ht.current.useId()};Q.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ht.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Q.useRef=function(t){return ht.current.useRef(t)};Q.useState=function(t){return ht.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ht.current.useTransition()};Q.version="18.2.0";u0.exports=Q;var E=u0.exports;const Vt=a0(E),Wk=Rk({__proto__:null,default:Vt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qk=E,Kk=Symbol.for("react.element"),Gk=Symbol.for("react.fragment"),Qk=Object.prototype.hasOwnProperty,Yk=qk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xk={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qk.call(e,r)&&!Xk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kk,type:t,key:s,ref:o,props:i,_owner:Yk.current}}Gu.Fragment=Gk;Gu.jsx=y0;Gu.jsxs=y0;l0.exports=Gu;var h=l0.exports,Jh={},v0={exports:{}},At={},_0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,F){var V=D.length;D.push(F);e:for(;0<V;){var he=V-1>>>1,Ee=D[he];if(0<i(Ee,F))D[he]=F,D[V]=Ee,V=he;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var F=D[0],V=D.pop();if(V!==F){D[0]=V;e:for(var he=0,Ee=D.length,Jn=Ee>>>1;he<Jn;){var en=2*(he+1)-1,Hs=D[en],tn=en+1,Oi=D[tn];if(0>i(Hs,V))tn<Ee&&0>i(Oi,Hs)?(D[he]=Oi,D[tn]=V,he=tn):(D[he]=Hs,D[en]=V,he=en);else if(tn<Ee&&0>i(Oi,V))D[he]=Oi,D[tn]=V,he=tn;else break e}}return F}function i(D,F){var V=D.sortIndex-F.sortIndex;return V!==0?V:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,v=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=D)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function w(D){if(_=!1,y(D),!v)if(n(l)!==null)v=!0,Pi(x);else{var F=n(u);F!==null&&Vs(w,F.startTime-D)}}function x(D,F){v=!1,_&&(_=!1,g(A),A=-1),m=!0;var V=f;try{for(y(F),d=n(l);d!==null&&(!(d.expirationTime>F)||D&&!st());){var he=d.callback;if(typeof he=="function"){d.callback=null,f=d.priorityLevel;var Ee=he(d.expirationTime<=F);F=t.unstable_now(),typeof Ee=="function"?d.callback=Ee:d===n(l)&&r(l),y(F)}else r(l);d=n(l)}if(d!==null)var Jn=!0;else{var en=n(u);en!==null&&Vs(w,en.startTime-F),Jn=!1}return Jn}finally{d=null,f=V,m=!1}}var C=!1,N=null,A=-1,ee=5,H=-1;function st(){return!(t.unstable_now()-H<ee)}function Yn(){if(N!==null){var D=t.unstable_now();H=D;var F=!0;try{F=N(!0,D)}finally{F?Br():(C=!1,N=null)}}else C=!1}var Br;if(typeof p=="function")Br=function(){p(Yn)};else if(typeof MessageChannel<"u"){var Bs=new MessageChannel,Xn=Bs.port2;Bs.port1.onmessage=Yn,Br=function(){Xn.postMessage(null)}}else Br=function(){T(Yn,0)};function Pi(D){N=D,C||(C=!0,Br())}function Vs(D,F){A=T(function(){D(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Pi(x))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var V=f;f=F;try{return D()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=f;f=D;try{return F()}finally{f=V}},t.unstable_scheduleCallback=function(D,F,V){var he=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?he+V:he):V=he,D){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=V+Ee,D={id:c++,callback:F,priorityLevel:D,startTime:V,expirationTime:Ee,sortIndex:-1},V>he?(D.sortIndex=V,e(u,D),n(l)===null&&D===n(u)&&(_?(g(A),A=-1):_=!0,Vs(w,V-he))):(D.sortIndex=Ee,e(l,D),v||m||(v=!0,Pi(x))),D},t.unstable_shouldYield=st,t.unstable_wrapCallback=function(D){var F=f;return function(){var V=f;f=F;try{return D.apply(this,arguments)}finally{f=V}}}})(w0);_0.exports=w0;var Jk=_0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=E,Nt=Jk;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T0=new Set,bo={};function wi(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(bo[t]=e,t=0;t<e.length;t++)T0.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zh=Object.prototype.hasOwnProperty,Zk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gg={},yg={};function eS(t){return Zh.call(yg,t)?!0:Zh.call(gg,t)?!1:Zk.test(t)?yg[t]=!0:(gg[t]=!0,!1)}function tS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nS(t,e,n,r){if(e===null||typeof e>"u"||tS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ff,zf);qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ff,zf);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ff,zf);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bf(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nS(e,n,i,r)&&(n=null),r||i===null?eS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),Vf=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.suspense_list"),Wf=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),vg=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,eh;function so(t){if(eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eh=e&&e[1]||""}return`
`+eh+t}var th=!1;function nh(t,e){if(!t||th)return"";th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function rS(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=nh(t.type,!1),t;case 11:return t=nh(t.type.render,!1),t;case 1:return t=nh(t.type,!0),t;default:return""}}function rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case Ui:return"Portal";case ed:return"Profiler";case Vf:return"StrictMode";case td:return"Suspense";case nd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S0:return(t.displayName||"Context")+".Consumer";case k0:return(t._context.displayName||"Context")+".Provider";case Hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wf:return e=t.displayName||null,e!==null?e:rd(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return rd(t(e))}catch{}}return null}function iS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rd(e);case 8:return e===Vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sS(t){var e=x0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=sS(t))}function C0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=x0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function id(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _g(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N0(t,e){e=e.checked,e!=null&&Bf(t,"checked",e,!1)}function sd(t,e){N0(t,e);var n=Rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?od(t,e.type,n):e.hasOwnProperty("defaultValue")&&od(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function od(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(oo(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function R0(t,e){var n=Rr(e.value),r=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,D0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oS=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){oS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function P0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function O0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=P0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aS=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ud(t,e){if(e){if(aS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dd=null,es=null,ts=null;function kg(t){if(t=wa(t)){if(typeof dd!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Zu(e),dd(t.stateNode,t.type,e))}}function b0(t){es?ts?ts.push(t):ts=[t]:es=t}function $0(){if(es){var t=es,e=ts;if(ts=es=null,kg(t),e)for(t=0;t<e.length;t++)kg(e[t])}}function L0(t,e){return t(e)}function j0(){}var rh=!1;function M0(t,e,n){if(rh)return t(e,n);rh=!0;try{return L0(t,e,n)}finally{rh=!1,(es!==null||ts!==null)&&(j0(),$0())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var fd=!1;if(Mn)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){fd=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{fd=!1}function lS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var vo=!1,Zl=null,eu=!1,pd=null,uS={onError:function(t){vo=!0,Zl=t}};function cS(t,e,n,r,i,s,o,a,l){vo=!1,Zl=null,lS.apply(uS,arguments)}function hS(t,e,n,r,i,s,o,a,l){if(cS.apply(this,arguments),vo){if(vo){var u=Zl;vo=!1,Zl=null}else throw Error(S(198));eu||(eu=!0,pd=u)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sg(t){if(Ei(t)!==t)throw Error(S(188))}function dS(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sg(i),t;if(s===r)return Sg(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function F0(t){return t=dS(t),t!==null?z0(t):null}function z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z0(t);if(e!==null)return e;t=t.sibling}return null}var B0=Nt.unstable_scheduleCallback,Ig=Nt.unstable_cancelCallback,fS=Nt.unstable_shouldYield,pS=Nt.unstable_requestPaint,Te=Nt.unstable_now,mS=Nt.unstable_getCurrentPriorityLevel,Kf=Nt.unstable_ImmediatePriority,V0=Nt.unstable_UserBlockingPriority,tu=Nt.unstable_NormalPriority,gS=Nt.unstable_LowPriority,H0=Nt.unstable_IdlePriority,Qu=null,mn=null;function yS(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(Qu,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:wS,vS=Math.log,_S=Math.LN2;function wS(t){return t>>>=0,t===0?32:31-(vS(t)/_S|0)|0}var el=64,tl=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ao(a):(s&=o,s!==0&&(r=ao(s)))}else o=n&~i,o!==0?r=ao(o):s!==0&&(r=ao(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function ES(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=ES(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function md(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function W0(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function ih(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function kS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function q0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K0,Qf,G0,Q0,Y0,gd=!1,nl=[],gr=null,yr=null,vr=null,jo=new Map,Mo=new Map,ir=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wa(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function IS(t,e,n,r,i){switch(e){case"focusin":return gr=Qs(gr,t,e,n,r,i),!0;case"dragenter":return yr=Qs(yr,t,e,n,r,i),!0;case"mouseover":return vr=Qs(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return jo.set(s,Qs(jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,Qs(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function X0(t){var e=Qr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=U0(n),e!==null){t.blockedOn=e,Y0(t.priority,function(){G0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hd=r,n.target.dispatchEvent(r),hd=null}else return e=wa(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function Cg(t,e,n){Dl(t)&&n.delete(e)}function xS(){gd=!1,gr!==null&&Dl(gr)&&(gr=null),yr!==null&&Dl(yr)&&(yr=null),vr!==null&&Dl(vr)&&(vr=null),jo.forEach(Cg),Mo.forEach(Cg)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,gd||(gd=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,xS)))}function Uo(t){function e(i){return Ys(i,t)}if(0<nl.length){Ys(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&Ys(gr,t),yr!==null&&Ys(yr,t),vr!==null&&Ys(vr,t),jo.forEach(e),Mo.forEach(e),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&ir.shift()}var ns=Gn.ReactCurrentBatchConfig,ru=!0;function CS(t,e,n,r){var i=ne,s=ns.transition;ns.transition=null;try{ne=1,Yf(t,e,n,r)}finally{ne=i,ns.transition=s}}function NS(t,e,n,r){var i=ne,s=ns.transition;ns.transition=null;try{ne=4,Yf(t,e,n,r)}finally{ne=i,ns.transition=s}}function Yf(t,e,n,r){if(ru){var i=yd(t,e,n,r);if(i===null)ph(t,e,r,iu,n),xg(t,r);else if(IS(i,t,e,n,r))r.stopPropagation();else if(xg(t,r),e&4&&-1<SS.indexOf(t)){for(;i!==null;){var s=wa(i);if(s!==null&&K0(s),s=yd(t,e,n,r),s===null&&ph(t,e,r,iu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ph(t,e,r,null,n)}}var iu=null;function yd(t,e,n,r){if(iu=null,t=qf(r),t=Qr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return iu=t,null}function J0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mS()){case Kf:return 1;case V0:return 4;case tu:case gS:return 16;case H0:return 536870912;default:return 16}default:return 16}}var dr=null,Xf=null,Pl=null;function Z0(){if(Pl)return Pl;var t,e=Xf,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pl=i.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function Ng(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:Ng,this.isPropagationStopped=Ng,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jf=Dt(Rs),_a=me({},Rs,{view:0,detail:0}),RS=Dt(_a),sh,oh,Xs,Yu=me({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(sh=t.screenX-Xs.screenX,oh=t.screenY-Xs.screenY):oh=sh=0,Xs=t),sh)},movementY:function(t){return"movementY"in t?t.movementY:oh}}),Rg=Dt(Yu),AS=me({},Yu,{dataTransfer:0}),DS=Dt(AS),PS=me({},_a,{relatedTarget:0}),ah=Dt(PS),OS=me({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),bS=Dt(OS),$S=me({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LS=Dt($S),jS=me({},Rs,{data:0}),Ag=Dt(jS),MS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},US={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FS[t])?!!e[t]:!1}function Zf(){return zS}var BS=me({},_a,{key:function(t){if(t.key){var e=MS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?US[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VS=Dt(BS),HS=me({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=Dt(HS),WS=me({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),qS=Dt(WS),KS=me({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),GS=Dt(KS),QS=me({},Yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YS=Dt(QS),XS=[9,13,27,32],ep=Mn&&"CompositionEvent"in window,_o=null;Mn&&"documentMode"in document&&(_o=document.documentMode);var JS=Mn&&"TextEvent"in window&&!_o,e_=Mn&&(!ep||_o&&8<_o&&11>=_o),Pg=String.fromCharCode(32),Og=!1;function t_(t,e){switch(t){case"keyup":return XS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function ZS(t,e){switch(t){case"compositionend":return n_(e);case"keypress":return e.which!==32?null:(Og=!0,Pg);case"textInput":return t=e.data,t===Pg&&Og?null:t;default:return null}}function eI(t,e){if(zi)return t==="compositionend"||!ep&&t_(t,e)?(t=Z0(),Pl=Xf=dr=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e_&&e.locale!=="ko"?null:e.data;default:return null}}var tI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tI[t.type]:e==="textarea"}function r_(t,e,n,r){b0(r),e=su(e,"onChange"),0<e.length&&(n=new Jf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,Fo=null;function nI(t){p_(t,0)}function Xu(t){var e=Hi(t);if(C0(e))return t}function rI(t,e){if(t==="change")return e}var i_=!1;if(Mn){var lh;if(Mn){var uh="oninput"in document;if(!uh){var $g=document.createElement("div");$g.setAttribute("oninput","return;"),uh=typeof $g.oninput=="function"}lh=uh}else lh=!1;i_=lh&&(!document.documentMode||9<document.documentMode)}function Lg(){wo&&(wo.detachEvent("onpropertychange",s_),Fo=wo=null)}function s_(t){if(t.propertyName==="value"&&Xu(Fo)){var e=[];r_(e,Fo,t,qf(t)),M0(nI,e)}}function iI(t,e,n){t==="focusin"?(Lg(),wo=e,Fo=n,wo.attachEvent("onpropertychange",s_)):t==="focusout"&&Lg()}function sI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(Fo)}function oI(t,e){if(t==="click")return Xu(e)}function aI(t,e){if(t==="input"||t==="change")return Xu(e)}function lI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:lI;function zo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zh.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mg(t,e){var n=jg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jg(n)}}function o_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a_(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uI(t){var e=a_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o_(n.ownerDocument.documentElement,n)){if(r!==null&&tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Mg(n,s);var o=Mg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cI=Mn&&"documentMode"in document&&11>=document.documentMode,Bi=null,vd=null,Eo=null,_d=!1;function Ug(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_d||Bi==null||Bi!==Jl(r)||(r=Bi,"selectionStart"in r&&tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&zo(Eo,r)||(Eo=r,r=su(vd,"onSelect"),0<r.length&&(e=new Jf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bi)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},ch={},l_={};Mn&&(l_=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function Ju(t){if(ch[t])return ch[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l_)return ch[t]=e[n];return t}var u_=Ju("animationend"),c_=Ju("animationiteration"),h_=Ju("animationstart"),d_=Ju("transitionend"),f_=new Map,Fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){f_.set(t,e),wi(e,[t])}for(var hh=0;hh<Fg.length;hh++){var dh=Fg[hh],hI=dh.toLowerCase(),dI=dh[0].toUpperCase()+dh.slice(1);$r(hI,"on"+dI)}$r(u_,"onAnimationEnd");$r(c_,"onAnimationIteration");$r(h_,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(d_,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fI=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function zg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hS(r,e,void 0,t),t.currentTarget=null}function p_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;zg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;zg(i,a,u),s=l}}}if(eu)throw t=pd,eu=!1,pd=null,t}function oe(t,e){var n=e[Sd];n===void 0&&(n=e[Sd]=new Set);var r=t+"__bubble";n.has(r)||(m_(e,t,2,!1),n.add(r))}function fh(t,e,n){var r=0;e&&(r|=4),m_(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[sl]){t[sl]=!0,T0.forEach(function(n){n!=="selectionchange"&&(fI.has(n)||fh(n,!1,t),fh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,fh("selectionchange",!1,e))}}function m_(t,e,n,r){switch(J0(e)){case 1:var i=CS;break;case 4:i=NS;break;default:i=Yf}n=i.bind(null,e,n,t),i=void 0,!fd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ph(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Qr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}M0(function(){var u=s,c=qf(n),d=[];e:{var f=f_.get(t);if(f!==void 0){var m=Jf,v=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":m=VS;break;case"focusin":v="focus",m=ah;break;case"focusout":v="blur",m=ah;break;case"beforeblur":case"afterblur":m=ah;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=DS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=qS;break;case u_:case c_:case h_:m=bS;break;case d_:m=GS;break;case"scroll":m=RS;break;case"wheel":m=YS;break;case"copy":case"cut":case"paste":m=LS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Dg}var _=(e&4)!==0,T=!_&&t==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,g!==null&&(w=Lo(p,g),w!=null&&_.push(Vo(p,w,y)))),T)break;p=p.return}0<_.length&&(f=new m(f,v,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==hd&&(v=n.relatedTarget||n.fromElement)&&(Qr(v)||v[Un]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Qr(v):null,v!==null&&(T=Ei(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=Rg,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Dg,w="onPointerLeave",g="onPointerEnter",p="pointer"),T=m==null?f:Hi(m),y=v==null?f:Hi(v),f=new _(w,p+"leave",m,n,c),f.target=T,f.relatedTarget=y,w=null,Qr(c)===u&&(_=new _(g,p+"enter",v,n,c),_.target=y,_.relatedTarget=T,w=_),T=w,m&&v)t:{for(_=m,g=v,p=0,y=_;y;y=bi(y))p++;for(y=0,w=g;w;w=bi(w))y++;for(;0<p-y;)_=bi(_),p--;for(;0<y-p;)g=bi(g),y--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=bi(_),g=bi(g)}_=null}else _=null;m!==null&&Bg(d,f,m,_,!1),v!==null&&T!==null&&Bg(d,T,v,_,!0)}}e:{if(f=u?Hi(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var x=rI;else if(bg(f))if(i_)x=aI;else{x=sI;var C=iI}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=oI);if(x&&(x=x(t,u))){r_(d,x,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&od(f,"number",f.value)}switch(C=u?Hi(u):window,t){case"focusin":(bg(C)||C.contentEditable==="true")&&(Bi=C,vd=u,Eo=null);break;case"focusout":Eo=vd=Bi=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,Ug(d,n,c);break;case"selectionchange":if(cI)break;case"keydown":case"keyup":Ug(d,n,c)}var N;if(ep)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else zi?t_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(e_&&n.locale!=="ko"&&(zi||A!=="onCompositionStart"?A==="onCompositionEnd"&&zi&&(N=Z0()):(dr=c,Xf="value"in dr?dr.value:dr.textContent,zi=!0)),C=su(u,A),0<C.length&&(A=new Ag(A,t,null,n,c),d.push({event:A,listeners:C}),N?A.data=N:(N=n_(n),N!==null&&(A.data=N)))),(N=JS?ZS(t,n):eI(t,n))&&(u=su(u,"onBeforeInput"),0<u.length&&(c=new Ag("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}p_(d,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift(Vo(t,s,i)),s=Lo(t,e),s!=null&&r.push(Vo(t,s,i))),t=t.return}return r}function bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Lo(n,s),l!=null&&o.unshift(Vo(n,l,a))):i||(l=Lo(n,s),l!=null&&o.push(Vo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pI=/\r\n?/g,mI=/\u0000|\uFFFD/g;function Vg(t){return(typeof t=="string"?t:""+t).replace(pI,`
`).replace(mI,"")}function ol(t,e,n){if(e=Vg(e),Vg(t)!==e&&n)throw Error(S(425))}function ou(){}var wd=null,Ed=null;function Td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,gI=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,yI=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(t){return Hg.resolve(null).then(t).catch(vI)}:kd;function vI(t){setTimeout(function(){throw t})}function mh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),un="__reactFiber$"+As,Ho="__reactProps$"+As,Un="__reactContainer$"+As,Sd="__reactEvents$"+As,_I="__reactListeners$"+As,wI="__reactHandles$"+As;function Qr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wg(t);t!==null;){if(n=t[un])return n;t=Wg(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[un]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Zu(t){return t[Ho]||null}var Id=[],Wi=-1;function Lr(t){return{current:t}}function ue(t){0>Wi||(t.current=Id[Wi],Id[Wi]=null,Wi--)}function se(t,e){Wi++,Id[Wi]=t.current,t.current=e}var Ar={},nt=Lr(Ar),yt=Lr(!1),ai=Ar;function ds(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function au(){ue(yt),ue(nt)}function qg(t,e,n){if(nt.current!==Ar)throw Error(S(168));se(nt,e),se(yt,n)}function g_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,iS(t)||"Unknown",i));return me({},n,r)}function lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,ai=nt.current,se(nt,t),se(yt,yt.current),!0}function Kg(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=g_(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,ue(yt),ue(nt),se(nt,t)):ue(yt),se(yt,n)}var An=null,ec=!1,gh=!1;function y_(t){An===null?An=[t]:An.push(t)}function EI(t){ec=!0,y_(t)}function jr(){if(!gh&&An!==null){gh=!0;var t=0,e=ne;try{var n=An;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,ec=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),B0(Kf,jr),i}finally{ne=e,gh=!1}}return null}var qi=[],Ki=0,uu=null,cu=0,Ot=[],bt=0,li=null,Dn=1,Pn="";function qr(t,e){qi[Ki++]=cu,qi[Ki++]=uu,uu=t,cu=e}function v_(t,e,n){Ot[bt++]=Dn,Ot[bt++]=Pn,Ot[bt++]=li,li=t;var r=Dn;t=Pn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-Kt(e)+i|n<<i|r,Pn=s+t}else Dn=1<<s|n<<i|r,Pn=t}function np(t){t.return!==null&&(qr(t,1),v_(t,1,0))}function rp(t){for(;t===uu;)uu=qi[--Ki],qi[Ki]=null,cu=qi[--Ki],qi[Ki]=null;for(;t===li;)li=Ot[--bt],Ot[bt]=null,Pn=Ot[--bt],Ot[bt]=null,Dn=Ot[--bt],Ot[bt]=null}var xt=null,St=null,de=!1,qt=null;function __(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,St=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:Dn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,St=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cd(t){if(de){var e=St;if(e){var n=e;if(!Gg(t,e)){if(xd(t))throw Error(S(418));e=_r(n.nextSibling);var r=xt;e&&Gg(t,e)?__(r,n):(t.flags=t.flags&-4097|2,de=!1,xt=t)}}else{if(xd(t))throw Error(S(418));t.flags=t.flags&-4097|2,de=!1,xt=t}}}function Qg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function al(t){if(t!==xt)return!1;if(!de)return Qg(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Td(t.type,t.memoizedProps)),e&&(e=St)){if(xd(t))throw w_(),Error(S(418));for(;e;)__(t,e),e=_r(e.nextSibling)}if(Qg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=xt?_r(t.stateNode.nextSibling):null;return!0}function w_(){for(var t=St;t;)t=_r(t.nextSibling)}function fs(){St=xt=null,de=!1}function ip(t){qt===null?qt=[t]:qt.push(t)}var TI=Gn.ReactCurrentBatchConfig;function Ht(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var hu=Lr(null),du=null,Gi=null,sp=null;function op(){sp=Gi=du=null}function ap(t){var e=hu.current;ue(hu),t._currentValue=e}function Nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){du=t,sp=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(sp!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(du===null)throw Error(S(308));Gi=t,du.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var Yr=null;function lp(t){Yr===null?Yr=[t]:Yr.push(t)}function E_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,lp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gf(t,n)}}function Yg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,r){var i=t.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=me({},d,f);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ci|=o,t.lanes=o,t.memoizedState=d}}function Xg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var k_=new E0.Component().refs;function Rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=Tr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(Gt(e,t,i,r),bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=Tr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(Gt(e,t,i,r),bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=Tr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(Gt(e,t,r,n),bl(e,t,r))}};function Jg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(i,s):!0}function S_(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=vt(e)?ai:nt.current,r=e.contextTypes,s=(r=r!=null)?ds(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function Ad(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=k_,up(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=vt(e)?ai:nt.current,i.context=ds(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tc.enqueueReplaceState(i,i.state,null),fu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===k_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ey(t){var e=t._init;return e(t._payload)}function I_(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=kr(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,w){return p===null||p.tag!==6?(p=kh(y,g.mode,w),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,w){var x=y.type;return x===Fi?c(g,p,y.props.children,w,y.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===nr&&ey(x)===p.type)?(w=i(p,y.props),w.ref=Js(g,p,y),w.return=g,w):(w=Fl(y.type,y.key,y.props,null,g.mode,w),w.ref=Js(g,p,y),w.return=g,w)}function u(g,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Sh(y,g.mode,w),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function c(g,p,y,w,x){return p===null||p.tag!==7?(p=ri(y,g.mode,w,x),p.return=g,p):(p=i(p,y),p.return=g,p)}function d(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=kh(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xa:return y=Fl(p.type,p.key,p.props,null,g.mode,y),y.ref=Js(g,null,p),y.return=g,y;case Ui:return p=Sh(p,g.mode,y),p.return=g,p;case nr:var w=p._init;return d(g,w(p._payload),y)}if(oo(p)||Ks(p))return p=ri(p,g.mode,y,null),p.return=g,p;ll(g,p)}return null}function f(g,p,y,w){var x=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(g,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xa:return y.key===x?l(g,p,y,w):null;case Ui:return y.key===x?u(g,p,y,w):null;case nr:return x=y._init,f(g,p,x(y._payload),w)}if(oo(y)||Ks(y))return x!==null?null:c(g,p,y,w,null);ll(g,y)}return null}function m(g,p,y,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(y)||null,a(p,g,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xa:return g=g.get(w.key===null?y:w.key)||null,l(p,g,w,x);case Ui:return g=g.get(w.key===null?y:w.key)||null,u(p,g,w,x);case nr:var C=w._init;return m(g,p,y,C(w._payload),x)}if(oo(w)||Ks(w))return g=g.get(y)||null,c(p,g,w,x,null);ll(p,w)}return null}function v(g,p,y,w){for(var x=null,C=null,N=p,A=p=0,ee=null;N!==null&&A<y.length;A++){N.index>A?(ee=N,N=null):ee=N.sibling;var H=f(g,N,y[A],w);if(H===null){N===null&&(N=ee);break}t&&N&&H.alternate===null&&e(g,N),p=s(H,p,A),C===null?x=H:C.sibling=H,C=H,N=ee}if(A===y.length)return n(g,N),de&&qr(g,A),x;if(N===null){for(;A<y.length;A++)N=d(g,y[A],w),N!==null&&(p=s(N,p,A),C===null?x=N:C.sibling=N,C=N);return de&&qr(g,A),x}for(N=r(g,N);A<y.length;A++)ee=m(N,g,A,y[A],w),ee!==null&&(t&&ee.alternate!==null&&N.delete(ee.key===null?A:ee.key),p=s(ee,p,A),C===null?x=ee:C.sibling=ee,C=ee);return t&&N.forEach(function(st){return e(g,st)}),de&&qr(g,A),x}function _(g,p,y,w){var x=Ks(y);if(typeof x!="function")throw Error(S(150));if(y=x.call(y),y==null)throw Error(S(151));for(var C=x=null,N=p,A=p=0,ee=null,H=y.next();N!==null&&!H.done;A++,H=y.next()){N.index>A?(ee=N,N=null):ee=N.sibling;var st=f(g,N,H.value,w);if(st===null){N===null&&(N=ee);break}t&&N&&st.alternate===null&&e(g,N),p=s(st,p,A),C===null?x=st:C.sibling=st,C=st,N=ee}if(H.done)return n(g,N),de&&qr(g,A),x;if(N===null){for(;!H.done;A++,H=y.next())H=d(g,H.value,w),H!==null&&(p=s(H,p,A),C===null?x=H:C.sibling=H,C=H);return de&&qr(g,A),x}for(N=r(g,N);!H.done;A++,H=y.next())H=m(N,g,A,H.value,w),H!==null&&(t&&H.alternate!==null&&N.delete(H.key===null?A:H.key),p=s(H,p,A),C===null?x=H:C.sibling=H,C=H);return t&&N.forEach(function(Yn){return e(g,Yn)}),de&&qr(g,A),x}function T(g,p,y,w){if(typeof y=="object"&&y!==null&&y.type===Fi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Xa:e:{for(var x=y.key,C=p;C!==null;){if(C.key===x){if(x=y.type,x===Fi){if(C.tag===7){n(g,C.sibling),p=i(C,y.props.children),p.return=g,g=p;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===nr&&ey(x)===C.type){n(g,C.sibling),p=i(C,y.props),p.ref=Js(g,C,y),p.return=g,g=p;break e}n(g,C);break}else e(g,C);C=C.sibling}y.type===Fi?(p=ri(y.props.children,g.mode,w,y.key),p.return=g,g=p):(w=Fl(y.type,y.key,y.props,null,g.mode,w),w.ref=Js(g,p,y),w.return=g,g=w)}return o(g);case Ui:e:{for(C=y.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Sh(y,g.mode,w),p.return=g,g=p}return o(g);case nr:return C=y._init,T(g,p,C(y._payload),w)}if(oo(y))return v(g,p,y,w);if(Ks(y))return _(g,p,y,w);ll(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=kh(y,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return T}var ps=I_(!0),x_=I_(!1),Ea={},gn=Lr(Ea),Wo=Lr(Ea),qo=Lr(Ea);function Xr(t){if(t===Ea)throw Error(S(174));return t}function cp(t,e){switch(se(qo,e),se(Wo,t),se(gn,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ld(e,t)}ue(gn),se(gn,e)}function ms(){ue(gn),ue(Wo),ue(qo)}function C_(t){Xr(qo.current);var e=Xr(gn.current),n=ld(e,t.type);e!==n&&(se(Wo,t),se(gn,n))}function hp(t){Wo.current===t&&(ue(gn),ue(Wo))}var fe=Lr(0);function pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yh=[];function dp(){for(var t=0;t<yh.length;t++)yh[t]._workInProgressVersionPrimary=null;yh.length=0}var $l=Gn.ReactCurrentDispatcher,vh=Gn.ReactCurrentBatchConfig,ui=0,pe=null,Re=null,be=null,mu=!1,To=!1,Ko=0,kI=0;function Ke(){throw Error(S(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function pp(t,e,n,r,i,s){if(ui=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?CI:NI,t=n(r,i),To){s=0;do{if(To=!1,Ko=0,25<=s)throw Error(S(301));s+=1,be=Re=null,e.updateQueue=null,$l.current=RI,t=n(r,i)}while(To)}if($l.current=gu,e=Re!==null&&Re.next!==null,ui=0,be=Re=pe=null,mu=!1,e)throw Error(S(300));return t}function mp(){var t=Ko!==0;return Ko=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?pe.memoizedState=be=t:be=be.next=t,be}function Ft(){if(Re===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=be===null?pe.memoizedState:be.next;if(e!==null)be=e,Re=t;else{if(t===null)throw Error(S(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},be===null?pe.memoizedState=be=t:be=be.next=t}return be}function Go(t,e){return typeof e=="function"?e(t):e}function _h(t){var e=Ft(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ui&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,pe.lanes|=c,ci|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Qt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wh(t){var e=Ft(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N_(){}function R_(t,e){var n=pe,r=Ft(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,gp(P_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Qo(9,D_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(S(349));ui&30||A_(n,e,i)}return i}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D_(t,e,n,r){e.value=n,e.getSnapshot=r,O_(e)&&b_(t)}function P_(t,e,n){return n(function(){O_(e)&&b_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function b_(t){var e=Fn(t,1);e!==null&&Gt(e,t,1,-1)}function ty(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=xI.bind(null,pe,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $_(){return Ft().memoizedState}function Ll(t,e,n,r){var i=ln();pe.flags|=t,i.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function nc(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&fp(r,o.deps)){i.memoizedState=Qo(e,n,s,r);return}}pe.flags|=t,i.memoizedState=Qo(1|e,n,s,r)}function ny(t,e){return Ll(8390656,8,t,e)}function gp(t,e){return nc(2048,8,t,e)}function L_(t,e){return nc(4,2,t,e)}function j_(t,e){return nc(4,4,t,e)}function M_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U_(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,M_.bind(null,e,t),n)}function yp(){}function F_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function z_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function B_(t,e,n){return ui&21?(Qt(n,e)||(n=W0(),pe.lanes|=n,ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function SI(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=vh.transition;vh.transition={};try{t(!1),e()}finally{ne=n,vh.transition=r}}function V_(){return Ft().memoizedState}function II(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},H_(t))W_(e,n);else if(n=E_(t,e,n,r),n!==null){var i=ut();Gt(n,t,r,i),q_(n,e,r)}}function xI(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(H_(t))W_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qt(a,o)){var l=e.interleaved;l===null?(i.next=i,lp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=E_(t,e,i,r),n!==null&&(i=ut(),Gt(n,t,r,i),q_(n,e,r))}}function H_(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function W_(t,e){To=mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gf(t,n)}}var gu={readContext:Ut,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},CI={readContext:Ut,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:ny,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,M_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=II.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:ty,useDebugValue:yp,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=ty(!1),e=t[0];return t=SI.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=ln();if(de){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Le===null)throw Error(S(349));ui&30||A_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ny(P_.bind(null,r,s,t),[t]),r.flags|=2048,Qo(9,D_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=Le.identifierPrefix;if(de){var n=Pn,r=Dn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NI={readContext:Ut,useCallback:F_,useContext:Ut,useEffect:gp,useImperativeHandle:U_,useInsertionEffect:L_,useLayoutEffect:j_,useMemo:z_,useReducer:_h,useRef:$_,useState:function(){return _h(Go)},useDebugValue:yp,useDeferredValue:function(t){var e=Ft();return B_(e,Re.memoizedState,t)},useTransition:function(){var t=_h(Go)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:R_,useId:V_,unstable_isNewReconciler:!1},RI={readContext:Ut,useCallback:F_,useContext:Ut,useEffect:gp,useImperativeHandle:U_,useInsertionEffect:L_,useLayoutEffect:j_,useMemo:z_,useReducer:wh,useRef:$_,useState:function(){return wh(Go)},useDebugValue:yp,useDeferredValue:function(t){var e=Ft();return Re===null?e.memoizedState=t:B_(e,Re.memoizedState,t)},useTransition:function(){var t=wh(Go)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:R_,useId:V_,unstable_isNewReconciler:!1};function gs(t,e){try{var n="",r=e;do n+=rS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AI=typeof WeakMap=="function"?WeakMap:Map;function K_(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vu||(vu=!0,zd=r),Dd(t,e)},n}function G_(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dd(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ry(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HI.bind(null,t,e,n),e.then(t,t))}function iy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var DI=Gn.ReactCurrentOwner,gt=!1;function at(t,e,n,r){e.child=t===null?x_(e,null,n,r):ps(e,t.child,n,r)}function oy(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=pp(t,e,n,r,s,i),n=mp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(de&&n&&np(e),e.flags|=1,at(t,e,r,i),e.child)}function ay(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ip(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Q_(t,e,s,r,i)):(t=Fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Q_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zo(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,zn(t,e,i)}return Pd(t,e,n,r,i)}function Y_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Yi,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(Yi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(Yi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(Yi,kt),kt|=r;return at(t,e,i,n),e.child}function X_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,r,i){var s=vt(n)?ai:nt.current;return s=ds(e,s),rs(e,i),n=pp(t,e,n,r,s,i),r=mp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(de&&r&&np(e),e.flags|=1,at(t,e,n,i),e.child)}function ly(t,e,n,r,i){if(vt(n)){var s=!0;lu(e)}else s=!1;if(rs(e,i),e.stateNode===null)jl(t,e),S_(e,n,r),Ad(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=vt(n)?ai:nt.current,u=ds(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zg(e,o,r,u),rr=!1;var f=e.memoizedState;o.state=f,fu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||yt.current||rr?(typeof c=="function"&&(Rd(e,n,c,r),l=e.memoizedState),(a=rr||Jg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,T_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ht(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ut(l):(l=vt(n)?ai:nt.current,l=ds(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Zg(e,o,r,l),rr=!1,f=e.memoizedState,o.state=f,fu(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||yt.current||rr?(typeof m=="function"&&(Rd(e,n,m,r),v=e.memoizedState),(u=rr||Jg(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Od(t,e,n,r,s,i)}function Od(t,e,n,r,i,s){X_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kg(e,n,!1),zn(t,e,s);r=e.stateNode,DI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,a,s)):at(t,e,a,s),e.memoizedState=r.state,i&&Kg(e,n,!0),e.child}function J_(t){var e=t.stateNode;e.pendingContext?qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qg(t,e.context,!1),cp(t,e.containerInfo)}function uy(t,e,n,r,i){return fs(),ip(i),e.flags|=256,at(t,e,n,r),e.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function $d(t){return{baseLanes:t,cachePool:null,transitions:null}}function Z_(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(fe,i&1),t===null)return Cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sc(o,r,0,null),t=ri(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$d(n),e.memoizedState=bd,t):vp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return PI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=kr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=ri(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bd,r}return s=t.child,t=s.sibling,r=kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vp(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&ip(r),ps(e,t.child,null,n),t=vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Eh(Error(S(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sc({mode:"visible",children:r.children},i,0,null),s=ri(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=$d(o),e.memoizedState=bd,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Eh(s,r,void 0),ul(t,e,o,r)}if(a=(o&t.childLanes)!==0,gt||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),Gt(r,t,i,-1))}return Sp(),r=Eh(Error(S(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=_r(i.nextSibling),xt=e,de=!0,qt=null,t!==null&&(Ot[bt++]=Dn,Ot[bt++]=Pn,Ot[bt++]=li,Dn=t.id,Pn=t.overflow,li=e),e=vp(e,r.children),e.flags|=4096,e)}function cy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nd(t.return,e,n)}function Th(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ew(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cy(t,n,e);else if(t.tag===19)cy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Th(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Th(e,!0,n,null,s);break;case"together":Th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OI(t,e,n){switch(e.tag){case 3:J_(e),fs();break;case 5:C_(e);break;case 1:vt(e.type)&&lu(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?Z_(t,e,n):(se(fe,fe.current&1),t=zn(t,e,n),t!==null?t.sibling:null);se(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ew(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,Y_(t,e,n)}return zn(t,e,n)}var tw,Ld,nw,rw;tw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ld=function(){};nw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xr(gn.current);var s=null;switch(n){case"input":i=id(t,i),r=id(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=ad(t,i),r=ad(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ou)}ud(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zs(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bI(t,e,n){var r=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return vt(e.type)&&au(),Ge(e),null;case 3:return r=e.stateNode,ms(),ue(yt),ue(nt),dp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Hd(qt),qt=null))),Ld(t,e),Ge(e),null;case 5:hp(e);var i=Xr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)nw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ge(e),null}if(t=Xr(gn.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<lo.length;i++)oe(lo[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":_g(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":Eg(r,s),oe("invalid",r)}ud(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",""+a]):bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":Ja(r),wg(r,s,!0);break;case"textarea":Ja(r),Tg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ou)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Ho]=r,tw(t,e,!1,!1),e.stateNode=t;e:{switch(o=cd(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<lo.length;i++)oe(lo[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":_g(t,r),i=id(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),oe("invalid",t);break;case"textarea":Eg(t,r),i=ad(t,r),oe("invalid",t);break;default:i=r}ud(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?O0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(t,l):typeof l=="number"&&$o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&oe("scroll",t):l!=null&&Bf(t,s,l,o))}switch(n){case"input":Ja(t),wg(t,r,!1);break;case"textarea":Ja(t),Tg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ou)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)rw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Xr(qo.current),Xr(gn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return Ge(e),null;case 13:if(ue(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&St!==null&&e.mode&1&&!(e.flags&128))w_(),fs(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[un]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else qt!==null&&(Hd(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?Ae===0&&(Ae=3):Sp())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return ms(),Ld(t,e),t===null&&Bo(e.stateNode.containerInfo),Ge(e),null;case 10:return ap(e.type._context),Ge(e),null;case 17:return vt(e.type)&&au(),Ge(e),null;case 19:if(ue(fe),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zs(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pu(t),o!==null){for(e.flags|=128,Zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>ys&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=pu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Ge(e),null}else 2*Te()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=fe.current,se(fe,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return kp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function $I(t,e){switch(rp(e),e.tag){case 1:return vt(e.type)&&au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),ue(yt),ue(nt),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(ue(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(fe),null;case 4:return ms(),null;case 10:return ap(e.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var cl=!1,Xe=!1,LI=typeof WeakSet=="function"?WeakSet:Set,O=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function jd(t,e,n){try{n()}catch(r){ge(t,e,r)}}var hy=!1;function jI(t,e){if(wd=ru,t=a_(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ed={focusedElem:t,selectionRange:n},ru=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,T=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ht(e.type,_),T);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ge(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=hy,hy=!1,v}function ko(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jd(e,n,s)}i=i.next}while(i!==r)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iw(t){var e=t.alternate;e!==null&&(t.alternate=null,iw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Ho],delete e[Sd],delete e[_I],delete e[wI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sw(t){return t.tag===5||t.tag===3||t.tag===4}function dy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ou));else if(r!==4&&(t=t.child,t!==null))for(Ud(t,e,n),t=t.sibling;t!==null;)Ud(t,e,n),t=t.sibling}function Fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var Be=null,Wt=!1;function er(t,e,n){for(n=n.child;n!==null;)ow(t,e,n),n=n.sibling}function ow(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(Qu,n)}catch{}switch(n.tag){case 5:Xe||Qi(n,e);case 6:var r=Be,i=Wt;Be=null,er(t,e,n),Be=r,Wt=i,Be!==null&&(Wt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Wt?(t=Be,n=n.stateNode,t.nodeType===8?mh(t.parentNode,n):t.nodeType===1&&mh(t,n),Uo(t)):mh(Be,n.stateNode));break;case 4:r=Be,i=Wt,Be=n.stateNode.containerInfo,Wt=!0,er(t,e,n),Be=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jd(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!Xe&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,er(t,e,n),Xe=r):er(t,e,n);break;default:er(t,e,n)}}function fy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LI),e.forEach(function(r){var i=qI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Be=a.stateNode,Wt=!1;break e;case 3:Be=a.stateNode.containerInfo,Wt=!0;break e;case 4:Be=a.stateNode.containerInfo,Wt=!0;break e}a=a.return}if(Be===null)throw Error(S(160));ow(s,o,i),Be=null,Wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aw(e,t),e=e.sibling}function aw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),rn(t),r&4){try{ko(3,t,t.return),rc(3,t)}catch(_){ge(t,t.return,_)}try{ko(5,t,t.return)}catch(_){ge(t,t.return,_)}}break;case 1:Bt(e,t),rn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(Bt(e,t),rn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{$o(i,"")}catch(_){ge(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N0(i,s),cd(a,o);var u=cd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?O0(i,d):c==="dangerouslySetInnerHTML"?D0(i,d):c==="children"?$o(i,d):Bf(i,c,d,u)}switch(a){case"input":sd(i,s);break;case"textarea":R0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Zi(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ho]=s}catch(_){ge(t,t.return,_)}}break;case 6:if(Bt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ge(t,t.return,_)}}break;case 3:if(Bt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(_){ge(t,t.return,_)}break;case 4:Bt(e,t),rn(t);break;case 13:Bt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ep=Te())),r&4&&fy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(u=Xe)||c,Bt(e,t),Xe=u):Bt(e,t),rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(f=O,m=f.child,f.tag){case 0:case 11:case 14:case 15:ko(4,f,f.return);break;case 1:Qi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ge(r,n,_)}}break;case 5:Qi(f,f.return);break;case 22:if(f.memoizedState!==null){my(d);continue}}m!==null?(m.return=f,O=m):my(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=P0("display",o))}catch(_){ge(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){ge(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bt(e,t),rn(t),r&4&&fy(t);break;case 21:break;default:Bt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sw(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($o(i,""),r.flags&=-33);var s=dy(t);Fd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=dy(t);Ud(t,a,o);break;default:throw Error(S(161))}}catch(l){ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MI(t,e,n){O=t,lw(t)}function lw(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Xe;a=cl;var u=Xe;if(cl=o,(Xe=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?gy(i):l!==null?(l.return=o,O=l):gy(i);for(;s!==null;)O=s,lw(s),s=s.sibling;O=i,cl=a,Xe=u}py(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):py(t)}}function py(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||rc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Uo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Xe||e.flags&512&&Md(e)}catch(f){ge(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function my(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function gy(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(l){ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ge(e,i,l)}}var s=e.return;try{Md(e)}catch(l){ge(e,s,l)}break;case 5:var o=e.return;try{Md(e)}catch(l){ge(e,o,l)}}}catch(l){ge(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var UI=Math.ceil,yu=Gn.ReactCurrentDispatcher,_p=Gn.ReactCurrentOwner,jt=Gn.ReactCurrentBatchConfig,X=0,Le=null,xe=null,He=0,kt=0,Yi=Lr(0),Ae=0,Yo=null,ci=0,ic=0,wp=0,So=null,pt=null,Ep=0,ys=1/0,Rn=null,vu=!1,zd=null,Er=null,hl=!1,fr=null,_u=0,Io=0,Bd=null,Ml=-1,Ul=0;function ut(){return X&6?Te():Ml!==-1?Ml:Ml=Te()}function Tr(t){return t.mode&1?X&2&&He!==0?He&-He:TI.transition!==null?(Ul===0&&(Ul=W0()),Ul):(t=ne,t!==0||(t=window.event,t=t===void 0?16:J0(t.type)),t):1}function Gt(t,e,n,r){if(50<Io)throw Io=0,Bd=null,Error(S(185));va(t,n,r),(!(X&2)||t!==Le)&&(t===Le&&(!(X&2)&&(ic|=n),Ae===4&&sr(t,He)),_t(t,r),n===1&&X===0&&!(e.mode&1)&&(ys=Te()+500,ec&&jr()))}function _t(t,e){var n=t.callbackNode;TS(t,e);var r=nu(t,t===Le?He:0);if(r===0)n!==null&&Ig(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ig(n),e===1)t.tag===0?EI(yy.bind(null,t)):y_(yy.bind(null,t)),yI(function(){!(X&6)&&jr()}),n=null;else{switch(q0(r)){case 1:n=Kf;break;case 4:n=V0;break;case 16:n=tu;break;case 536870912:n=H0;break;default:n=tu}n=gw(n,uw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uw(t,e){if(Ml=-1,Ul=0,X&6)throw Error(S(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=nu(t,t===Le?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wu(t,r);else{e=r;var i=X;X|=2;var s=hw();(Le!==t||He!==e)&&(Rn=null,ys=Te()+500,ni(t,e));do try{BI();break}catch(a){cw(t,a)}while(1);op(),yu.current=s,X=i,xe!==null?e=0:(Le=null,He=0,e=Ae)}if(e!==0){if(e===2&&(i=md(t),i!==0&&(r=i,e=Vd(t,i))),e===1)throw n=Yo,ni(t,0),sr(t,r),_t(t,Te()),n;if(e===6)sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!FI(i)&&(e=wu(t,r),e===2&&(s=md(t),s!==0&&(r=s,e=Vd(t,s))),e===1))throw n=Yo,ni(t,0),sr(t,r),_t(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Kr(t,pt,Rn);break;case 3:if(sr(t,r),(r&130023424)===r&&(e=Ep+500-Te(),10<e)){if(nu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kd(Kr.bind(null,t,pt,Rn),e);break}Kr(t,pt,Rn);break;case 4:if(sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UI(r/1960))-r,10<r){t.timeoutHandle=kd(Kr.bind(null,t,pt,Rn),r);break}Kr(t,pt,Rn);break;case 5:Kr(t,pt,Rn);break;default:throw Error(S(329))}}}return _t(t,Te()),t.callbackNode===n?uw.bind(null,t):null}function Vd(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(ni(t,e).flags|=256),t=wu(t,e),t!==2&&(e=pt,pt=n,e!==null&&Hd(e)),t}function Hd(t){pt===null?pt=t:pt.push.apply(pt,t)}function FI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~wp,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function yy(t){if(X&6)throw Error(S(327));is();var e=nu(t,0);if(!(e&1))return _t(t,Te()),null;var n=wu(t,e);if(t.tag!==0&&n===2){var r=md(t);r!==0&&(e=r,n=Vd(t,r))}if(n===1)throw n=Yo,ni(t,0),sr(t,e),_t(t,Te()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,pt,Rn),_t(t,Te()),null}function Tp(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(ys=Te()+500,ec&&jr())}}function hi(t){fr!==null&&fr.tag===0&&!(X&6)&&is();var e=X;X|=1;var n=jt.transition,r=ne;try{if(jt.transition=null,ne=1,t)return t()}finally{ne=r,jt.transition=n,X=e,!(X&6)&&jr()}}function kp(){kt=Yi.current,ue(Yi)}function ni(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gI(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&au();break;case 3:ms(),ue(yt),ue(nt),dp();break;case 5:hp(r);break;case 4:ms();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:ap(r.type._context);break;case 22:case 23:kp()}n=n.return}if(Le=t,xe=t=kr(t.current,null),He=kt=e,Ae=0,Yo=null,wp=ic=ci=0,pt=So=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yr=null}return t}function cw(t,e){do{var n=xe;try{if(op(),$l.current=gu,mu){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mu=!1}if(ui=0,be=Re=pe=null,To=!1,Ko=0,_p.current=null,n===null||n.return===null){Ae=1,Yo=e,xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=He,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=iy(o);if(m!==null){m.flags&=-257,sy(m,o,a,s,e),m.mode&1&&ry(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){ry(s,u,e),Sp();break e}l=Error(S(426))}}else if(de&&a.mode&1){var T=iy(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),sy(T,o,a,s,e),ip(gs(l,a));break e}}s=l=gs(l,a),Ae!==4&&(Ae=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=K_(s,l,e);Yg(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Er===null||!Er.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=G_(s,a,e);Yg(s,w);break e}}s=s.return}while(s!==null)}fw(n)}catch(x){e=x,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function hw(){var t=yu.current;return yu.current=gu,t===null?gu:t}function Sp(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Le===null||!(ci&268435455)&&!(ic&268435455)||sr(Le,He)}function wu(t,e){var n=X;X|=2;var r=hw();(Le!==t||He!==e)&&(Rn=null,ni(t,e));do try{zI();break}catch(i){cw(t,i)}while(1);if(op(),X=n,yu.current=r,xe!==null)throw Error(S(261));return Le=null,He=0,Ae}function zI(){for(;xe!==null;)dw(xe)}function BI(){for(;xe!==null&&!fS();)dw(xe)}function dw(t){var e=mw(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?fw(t):xe=e,_p.current=null}function fw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$I(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,xe=null;return}}else if(n=bI(n,e,kt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Ae===0&&(Ae=5)}function Kr(t,e,n){var r=ne,i=jt.transition;try{jt.transition=null,ne=1,VI(t,e,n,r)}finally{jt.transition=i,ne=r}return null}function VI(t,e,n,r){do is();while(fr!==null);if(X&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kS(t,s),t===Le&&(xe=Le=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,gw(tu,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=ne;ne=1;var a=X;X|=4,_p.current=null,jI(t,n),aw(n,t),uI(Ed),ru=!!wd,Ed=wd=null,t.current=n,MI(n),pS(),X=a,ne=o,jt.transition=s}else t.current=n;if(hl&&(hl=!1,fr=t,_u=i),s=t.pendingLanes,s===0&&(Er=null),yS(n.stateNode),_t(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vu)throw vu=!1,t=zd,zd=null,t;return _u&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===Bd?Io++:(Io=0,Bd=t):Io=0,jr(),null}function is(){if(fr!==null){var t=q0(_u),e=jt.transition,n=ne;try{if(jt.transition=null,ne=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,_u=0,X&6)throw Error(S(331));var i=X;for(X|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:ko(8,c,s)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var f=c.sibling,m=c.return;if(iw(c),c===u){O=null;break}if(f!==null){f.return=m,O=f;break}O=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,O=y;else e:for(o=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rc(9,a)}}catch(x){ge(a,a.return,x)}if(a===o){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(X=i,jr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(Qu,t)}catch{}r=!0}return r}finally{ne=n,jt.transition=e}}return!1}function vy(t,e,n){e=gs(n,e),e=K_(t,e,1),t=wr(t,e,1),e=ut(),t!==null&&(va(t,1,e),_t(t,e))}function ge(t,e,n){if(t.tag===3)vy(t,t,n);else for(;e!==null;){if(e.tag===3){vy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=gs(n,t),t=G_(e,t,1),e=wr(e,t,1),t=ut(),e!==null&&(va(e,1,t),_t(e,t));break}}e=e.return}}function HI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(He&n)===n&&(Ae===4||Ae===3&&(He&130023424)===He&&500>Te()-Ep?ni(t,0):wp|=n),_t(t,e)}function pw(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=ut();t=Fn(t,e),t!==null&&(va(t,e,n),_t(t,n))}function WI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pw(t,n)}function qI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),pw(t,n)}var mw;mw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,OI(t,e,n);gt=!!(t.flags&131072)}else gt=!1,de&&e.flags&1048576&&v_(e,cu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var i=ds(e,nt.current);rs(e,n),i=pp(null,e,r,t,i,n);var s=mp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,lu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(e),i.updater=tc,e.stateNode=i,i._reactInternals=e,Ad(e,r,t,n),e=Od(null,e,r,!0,s,n)):(e.tag=0,de&&s&&np(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GI(r),t=Ht(r,t),i){case 0:e=Pd(null,e,r,t,n);break e;case 1:e=ly(null,e,r,t,n);break e;case 11:e=oy(null,e,r,t,n);break e;case 14:e=ay(null,e,r,Ht(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),ly(t,e,r,i,n);case 3:e:{if(J_(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,T_(t,e),fu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=gs(Error(S(423)),e),e=uy(t,e,r,n,i);break e}else if(r!==i){i=gs(Error(S(424)),e),e=uy(t,e,r,n,i);break e}else for(St=_r(e.stateNode.containerInfo.firstChild),xt=e,de=!0,qt=null,n=x_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),r===i){e=zn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return C_(e),t===null&&Cd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Td(r,i)?o=null:s!==null&&Td(r,s)&&(e.flags|=32),X_(t,e),at(t,e,o,n),e.child;case 6:return t===null&&Cd(e),null;case 13:return Z_(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ps(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),oy(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(hu,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!yt.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ln(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=Ut(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),ay(t,e,r,i,n);case 15:return Q_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),jl(t,e),e.tag=1,vt(r)?(t=!0,lu(e)):t=!1,rs(e,n),S_(e,r,i),Ad(e,r,i,n),Od(null,e,r,!0,t,n);case 19:return ew(t,e,n);case 22:return Y_(t,e,n)}throw Error(S(156,e.tag))};function gw(t,e){return B0(t,e)}function KI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new KI(t,e,n,r)}function Ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GI(t){if(typeof t=="function")return Ip(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hf)return 11;if(t===Wf)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ip(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ri(n.children,i,s,e);case Vf:o=8,i|=8;break;case ed:return t=Lt(12,n,e,i|2),t.elementType=ed,t.lanes=s,t;case td:return t=Lt(13,n,e,i),t.elementType=td,t.lanes=s,t;case nd:return t=Lt(19,n,e,i),t.elementType=nd,t.lanes=s,t;case I0:return sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k0:o=10;break e;case S0:o=9;break e;case Hf:o=11;break e;case Wf:o=14;break e;case nr:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ri(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function sc(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=I0,t.lanes=n,t.stateNode={isHidden:!1},t}function kh(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Sh(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ih(0),this.expirationTimes=ih(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ih(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xp(t,e,n,r,i,s,o,a,l){return t=new QI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(s),t}function YI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yw(t){if(!t)return Ar;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(vt(n))return g_(t,n,e)}return e}function vw(t,e,n,r,i,s,o,a,l){return t=xp(n,r,!0,t,i,s,o,a,l),t.context=yw(null),n=t.current,r=ut(),i=Tr(n),s=Ln(r,i),s.callback=e??null,wr(n,s,i),t.current.lanes=i,va(t,i,r),_t(t,r),t}function oc(t,e,n,r){var i=e.current,s=ut(),o=Tr(i);return n=yw(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,o),t!==null&&(Gt(t,i,o,s),bl(t,i,o)),o}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _y(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cp(t,e){_y(t,e),(t=t.alternate)&&_y(t,e)}function XI(){return null}var _w=typeof reportError=="function"?reportError:function(t){console.error(t)};function Np(t){this._internalRoot=t}ac.prototype.render=Np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));oc(t,e,null,null)};ac.prototype.unmount=Np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){oc(null,t,null,null)}),e[Un]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&X0(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wy(){}function JI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Eu(o);s.call(u)}}var o=vw(e,r,t,0,null,!1,!1,"",wy);return t._reactRootContainer=o,t[Un]=o.current,Bo(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Eu(l);a.call(u)}}var l=xp(t,0,!1,null,null,!1,!1,"",wy);return t._reactRootContainer=l,t[Un]=l.current,Bo(t.nodeType===8?t.parentNode:t),hi(function(){oc(e,l,n,r)}),l}function uc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Eu(o);a.call(l)}}oc(e,o,t,i)}else o=JI(n,e,t,i,r);return Eu(o)}K0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(Gf(e,n|1),_t(e,Te()),!(X&6)&&(ys=Te()+500,jr()))}break;case 13:hi(function(){var r=Fn(t,1);if(r!==null){var i=ut();Gt(r,t,1,i)}}),Cp(t,1)}};Qf=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=ut();Gt(e,t,134217728,n)}Cp(t,134217728)}};G0=function(t){if(t.tag===13){var e=Tr(t),n=Fn(t,e);if(n!==null){var r=ut();Gt(n,t,e,r)}Cp(t,e)}};Q0=function(){return ne};Y0=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};dd=function(t,e,n){switch(e){case"input":if(sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zu(r);if(!i)throw Error(S(90));C0(r),sd(r,i)}}}break;case"textarea":R0(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};L0=Tp;j0=hi;var ZI={usingClientEntryPoint:!1,Events:[wa,Hi,Zu,b0,$0,Tp]},eo={findFiberByHostInstance:Qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ex={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=F0(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||XI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Qu=dl.inject(ex),mn=dl}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZI;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(S(200));return YI(t,e,null,n)};At.createRoot=function(t,e){if(!Rp(t))throw Error(S(299));var n=!1,r="",i=_w;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xp(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Np(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=F0(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return hi(t)};At.hydrate=function(t,e,n){if(!lc(e))throw Error(S(200));return uc(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_w;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vw(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ac(e)};At.render=function(t,e,n){if(!lc(e))throw Error(S(200));return uc(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!lc(t))throw Error(S(40));return t._reactRootContainer?(hi(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};At.unstable_batchedUpdates=Tp;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lc(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return uc(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function ww(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ww)}catch(t){console.error(t)}}ww(),v0.exports=At;var Ew=v0.exports;const tx=a0(Ew);var Ey=Ew;Jh.createRoot=Ey.createRoot,Jh.hydrateRoot=Ey.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xo.apply(this,arguments)}var pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pr||(pr={}));const Ty="popstate";function nx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Wd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Tu(i)}return ix(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ap(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rx(){return Math.random().toString(36).substr(2,8)}function ky(t,e){return{usr:t.state,key:t.key,idx:e}}function Wd(t,e,n,r){return n===void 0&&(n=null),Xo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ds(e):e,{state:n,key:e&&e.key||r||rx()})}function Tu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ix(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=pr.Pop;let T=c(),g=T==null?null:T-u;u=T,l&&l({action:a,location:_.location,delta:g})}function f(T,g){a=pr.Push;let p=Wd(_.location,T,g);n&&n(p,T),u=c()+1;let y=ky(p,u),w=_.createHref(p);try{o.pushState(y,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function m(T,g){a=pr.Replace;let p=Wd(_.location,T,g);n&&n(p,T),u=c();let y=ky(p,u),w=_.createHref(p);o.replaceState(y,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(T){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof T=="string"?T:Tu(T);return ke(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let _={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ty,d),l=T,()=>{i.removeEventListener(Ty,d),l=null}},createHref(T){return e(i,T)},createURL:v,encodeLocation(T){let g=v(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(T){return o.go(T)}};return _}var Sy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sy||(Sy={}));function sx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ds(e):e,i=Dp(r.pathname||"/",n);if(i==null)return null;let s=Tw(t);ox(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=mx(s[a],vx(i));return o}function Tw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ke(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Sr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:fx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of kw(s.path))i(s,o,l)}),e}function kw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=kw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ox(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:px(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ax=/^:\w+$/,lx=3,ux=2,cx=1,hx=10,dx=-2,Iy=t=>t==="*";function fx(t,e){let n=t.split("/"),r=n.length;return n.some(Iy)&&(r+=dx),e&&(r+=ux),n.filter(i=>!Iy(i)).reduce((i,s)=>i+(ax.test(s)?lx:s===""?cx:hx),r)}function px(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=gx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Sr([i,c.pathname]),pathnameBase:Tx(Sr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Sr([i,c.pathnameBase]))}return s}function gx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=_x(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function yx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ap(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vx(t){try{return decodeURI(t)}catch(e){return Ap(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _x(t,e){try{return decodeURIComponent(t)}catch(n){return Ap(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Dp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ds(t):t;return{pathname:n?n.startsWith("/")?n:Ex(n,e):e,search:kx(r),hash:Sx(i)}}function Ex(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ih(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Op(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ds(t):(i=Xo({},t),ke(!i.pathname||!i.pathname.includes("?"),Ih("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Ih("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Ih("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=wx(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Sr=t=>t.join("/").replace(/\/\/+/g,"/"),Tx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Sx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ix(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Sw=["post","put","patch","delete"];new Set(Sw);const xx=["get",...Sw];new Set(xx);/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ku(){return ku=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ku.apply(this,arguments)}const Cx="startTransition";var xy=Wk[Cx];const bp=E.createContext(null),Nx=E.createContext(null),Ps=E.createContext(null),cc=E.createContext(null),kn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Iw=E.createContext(null);function Rx(t,e){let{relative:n}=e===void 0?{}:e;Os()||ke(!1);let{basename:r,navigator:i}=E.useContext(Ps),{hash:s,pathname:o,search:a}=Cw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Sr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Os(){return E.useContext(cc)!=null}function Ti(){return Os()||ke(!1),E.useContext(cc).location}function xw(t){E.useContext(Ps).static||E.useLayoutEffect(t)}function Qn(){let{isDataRoute:t}=E.useContext(kn);return t?Wx():Ax()}function Ax(){Os()||ke(!1);let t=E.useContext(bp),{basename:e,navigator:n}=E.useContext(Ps),{matches:r}=E.useContext(kn),{pathname:i}=Ti(),s=JSON.stringify(Pp(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return xw(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Op(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Sr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Dx=E.createContext(null);function Px(t){let e=E.useContext(kn).outlet;return e&&E.createElement(Dx.Provider,{value:t},e)}function Ox(){let{matches:t}=E.useContext(kn),e=t[t.length-1];return e?e.params:{}}function Cw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(kn),{pathname:i}=Ti(),s=JSON.stringify(Pp(r).map(o=>o.pathnameBase));return E.useMemo(()=>Op(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function bx(t,e){return $x(t,e)}function $x(t,e,n){Os()||ke(!1);let{navigator:r}=E.useContext(Ps),{matches:i}=E.useContext(kn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ti(),u;if(e){var c;let _=typeof e=="string"?Ds(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ke(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=sx(t,{pathname:f}),v=Fx(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Sr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Sr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?E.createElement(cc.Provider,{value:{location:ku({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:pr.Pop}},v):v}function Lx(){let t=Hx(),e=Ix(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const jx=E.createElement(Lx,null);class Mx extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(kn.Provider,{value:this.props.routeContext},E.createElement(Iw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ux(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(bp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(kn.Provider,{value:e},r)}function Fx(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ke(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||jx);let f=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=d:l.route.Component?v=E.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,E.createElement(Ux,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(Mx,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var qd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(qd||(qd={}));var Jo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Jo||(Jo={}));function zx(t){let e=E.useContext(bp);return e||ke(!1),e}function Bx(t){let e=E.useContext(Nx);return e||ke(!1),e}function Vx(t){let e=E.useContext(kn);return e||ke(!1),e}function Nw(t){let e=Vx(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function Hx(){var t;let e=E.useContext(Iw),n=Bx(Jo.UseRouteError),r=Nw(Jo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Wx(){let{router:t}=zx(qd.UseNavigateStable),e=Nw(Jo.UseNavigateStable),n=E.useRef(!1);return xw(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ku({fromRouteId:e},s)))},[t,e])}function Rw(t){let{to:e,replace:n,state:r,relative:i}=t;Os()||ke(!1);let{matches:s}=E.useContext(kn),{pathname:o}=Ti(),a=Qn(),l=Op(e,Pp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return E.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function $p(t){return Px(t.context)}function ze(t){ke(!1)}function qx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pr.Pop,navigator:s,static:o=!1}=t;Os()&&ke(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ds(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,v=E.useMemo(()=>{let _=Dp(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return v==null?null:E.createElement(Ps.Provider,{value:l},E.createElement(cc.Provider,{children:n,value:v}))}function Aw(t){let{children:e,location:n}=t;return bx(Kd(e),n)}var Cy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Cy||(Cy={}));new Promise(()=>{});function Kd(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Kd(r.props.children,s));return}r.type!==ze&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Kd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gd(){return Gd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gd.apply(this,arguments)}function Kx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Gx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Qx(t,e){return t.button===0&&(!e||e==="_self")&&!Gx(t)}const Yx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Xx(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=nx({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(d=>{u&&xy?xy(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(qx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Jx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$e=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=Kx(e,Yx),{basename:f}=E.useContext(Ps),m,v=!1;if(typeof u=="string"&&Zx.test(u)&&(m=u,Jx))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=Dp(y.pathname,f);y.origin===p.origin&&w!=null?u=w+y.search+y.hash:v=!0}catch{}let _=Rx(u,{relative:i}),T=eC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(p){r&&r(p),p.defaultPrevented||T(p)}return E.createElement("a",Gd({},d,{href:m||_,onClick:v||s?r:g,ref:n,target:l}))});var Ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Ny||(Ny={}));var Ry;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ry||(Ry={}));function eC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Qn(),l=Ti(),u=Cw(t,{relative:o});return E.useCallback(c=>{if(Qx(c,n)){c.preventDefault();let d=r!==void 0?r:Tu(l)===Tu(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new nC;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rC=function(t){const e=Dw(t);return Pw.encodeByteArray(e,!0)},Su=function(t){return rC(t).replace(/\./g,"")},Ow=function(t){try{return Pw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=()=>iC().__FIREBASE_DEFAULTS__,oC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ow(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return sC()||oC()||aC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bw=t=>{var e,n;return(n=(e=hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$w=t=>{const e=bw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lw=()=>{var t;return(t=hc())===null||t===void 0?void 0:t.config},jw=t=>{var e;return(e=hc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Su(JSON.stringify(n)),Su(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function cC(){var t;const e=(t=hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fC(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pC(){try{return typeof indexedDB=="object"}catch{return!1}}function mC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gC,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,r)}}function yC(t,e){return t.replace(vC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vC=/\{\$([^}]+)}/g;function _C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Iu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ay(s)&&Ay(o)){if(!Iu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ay(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wC(t,e){const n=new EC(t,e);return n.subscribe.bind(n)}class EC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xh),i.error===void 0&&(i.error=xh),i.complete===void 0&&(i.complete=xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IC(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SC(t){return t===Gr?void 0:t}function IC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const CC={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},NC=J.INFO,RC={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},AC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lp{constructor(e){this.name=e,this._logLevel=NC,this._logHandler=AC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const DC=(t,e)=>e.some(n=>t instanceof n);let Dy,Py;function PC(){return Dy||(Dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OC(){return Py||(Py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uw=new WeakMap,Qd=new WeakMap,Fw=new WeakMap,Ch=new WeakMap,jp=new WeakMap;function bC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uw.set(n,t)}).catch(()=>{}),jp.set(e,t),e}function $C(t){if(Qd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qd.set(t,e)}let Yd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LC(t){Yd=t(Yd)}function jC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nh(this),e,...n);return Fw.set(r,e.sort?e.sort():[e]),Ir(r)}:OC().includes(t)?function(...e){return t.apply(Nh(this),e),Ir(Uw.get(this))}:function(...e){return Ir(t.apply(Nh(this),e))}}function MC(t){return typeof t=="function"?jC(t):(t instanceof IDBTransaction&&$C(t),DC(t,PC())?new Proxy(t,Yd):t)}function Ir(t){if(t instanceof IDBRequest)return bC(t);if(Ch.has(t))return Ch.get(t);const e=MC(t);return e!==t&&(Ch.set(t,e),jp.set(e,t)),e}const Nh=t=>jp.get(t);function UC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FC=["get","getKey","getAll","getAllKeys","count"],zC=["put","add","delete","clear"],Rh=new Map;function Oy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rh.get(e))return Rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rh.set(e,s),s}LC(t=>({...t,get:(e,n,r)=>Oy(e,n)||t.get(e,n,r),has:(e,n)=>!!Oy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xd="@firebase/app",by="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Lp("@firebase/app"),HC="@firebase/app-compat",WC="@firebase/analytics-compat",qC="@firebase/analytics",KC="@firebase/app-check-compat",GC="@firebase/app-check",QC="@firebase/auth",YC="@firebase/auth-compat",XC="@firebase/database",JC="@firebase/database-compat",ZC="@firebase/functions",eN="@firebase/functions-compat",tN="@firebase/installations",nN="@firebase/installations-compat",rN="@firebase/messaging",iN="@firebase/messaging-compat",sN="@firebase/performance",oN="@firebase/performance-compat",aN="@firebase/remote-config",lN="@firebase/remote-config-compat",uN="@firebase/storage",cN="@firebase/storage-compat",hN="@firebase/firestore",dN="@firebase/firestore-compat",fN="firebase",pN="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="[DEFAULT]",mN={[Xd]:"fire-core",[HC]:"fire-core-compat",[qC]:"fire-analytics",[WC]:"fire-analytics-compat",[GC]:"fire-app-check",[KC]:"fire-app-check-compat",[QC]:"fire-auth",[YC]:"fire-auth-compat",[XC]:"fire-rtdb",[JC]:"fire-rtdb-compat",[ZC]:"fire-fn",[eN]:"fire-fn-compat",[tN]:"fire-iid",[nN]:"fire-iid-compat",[rN]:"fire-fcm",[iN]:"fire-fcm-compat",[sN]:"fire-perf",[oN]:"fire-perf-compat",[aN]:"fire-rc",[lN]:"fire-rc-compat",[uN]:"fire-gcs",[cN]:"fire-gcs-compat",[hN]:"fire-fst",[dN]:"fire-fst-compat","fire-js":"fire-js",[fN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Map,Zd=new Map;function gN(t,e){try{t.container.addComponent(e)}catch(n){di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Zd.has(e))return di.debug(`There were multiple attempts to register component ${e}.`),!1;Zd.set(e,t);for(const n of xu.values())gN(n,t);return!0}function dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xr=new Ta("app","Firebase",yN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=pN;function zw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=Lw()),!n)throw xr.create("no-options");const s=xu.get(i);if(s){if(Iu(n,s.options)&&Iu(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new xC(i);for(const l of Zd.values())o.addComponent(l);const a=new vN(n,r,o);return xu.set(i,a),a}function Mp(t=Jd){const e=xu.get(t);if(!e&&t===Jd&&Lw())return zw();if(!e)throw xr.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=mN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),di.warn(a.join(" "));return}fi(new Dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="firebase-heartbeat-database",wN=1,Zo="firebase-heartbeat-store";let Ah=null;function Bw(){return Ah||(Ah=UC(_N,wN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zo)}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Ah}async function EN(t){try{return await(await Bw()).transaction(Zo).objectStore(Zo).get(Vw(t))}catch(e){if(e instanceof Sn)di.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});di.warn(n.message)}}}async function $y(t,e){try{const r=(await Bw()).transaction(Zo,"readwrite");await r.objectStore(Zo).put(e,Vw(t)),await r.done}catch(n){if(n instanceof Sn)di.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});di.warn(r.message)}}}function Vw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=1024,kN=30*24*60*60*1e3;class SN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ly();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=kN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ly(),{heartbeatsToSend:n,unsentEntries:r}=IN(this._heartbeatsCache.heartbeats),i=Su(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ly(){return new Date().toISOString().substring(0,10)}function IN(t,e=TN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pC()?mC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await EN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jy(t){return Su(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){fi(new Dr("platform-logger",e=>new BC(e),"PRIVATE")),fi(new Dr("heartbeat",e=>new SN(e),"PRIVATE")),yn(Xd,by,t),yn(Xd,by,"esm2017"),yn("fire-js","")}CN("");var NN="firebase",RN="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(NN,RN,"app");var AN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Up=Up||{},U=AN||self;function fc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Sa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DN(t){return Object.prototype.hasOwnProperty.call(t,Dh)&&t[Dh]||(t[Dh]=++PN)}var Dh="closure_uid_"+(1e9*Math.random()>>>0),PN=0;function ON(t,e,n){return t.call.apply(t.bind,arguments)}function bN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=ON:et=bN,et.apply(null,arguments)}function fl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Mr(){this.s=this.s,this.o=this.o}var $N=0;Mr.prototype.s=!1;Mr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),$N!=0)&&DN(this)};Mr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function My(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var LN=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",()=>{},e),U.removeEventListener("test",()=>{},e)}catch{}return t}();function ea(t){return/^[\s\xa0]*$/.test(t)}function pc(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function cn(t){return pc().indexOf(t)!=-1}function zp(t){return zp[" "](t),t}zp[" "]=function(){};function jN(t,e){var n=RR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var MN=cn("Opera"),vs=cn("Trident")||cn("MSIE"),Ww=cn("Edge"),ef=Ww||vs,qw=cn("Gecko")&&!(pc().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge"))&&!(cn("Trident")||cn("MSIE"))&&!cn("Edge"),UN=pc().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge");function Kw(){var t=U.document;return t?t.documentMode:void 0}var tf;e:{var Ph="",Oh=function(){var t=pc();if(qw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ww)return/Edge\/([\d\.]+)/.exec(t);if(vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(UN)return/WebKit\/(\S+)/.exec(t);if(MN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Oh&&(Ph=Oh?Oh[1]:""),vs){var bh=Kw();if(bh!=null&&bh>parseFloat(Ph)){tf=String(bh);break e}}tf=Ph}var nf;if(U.document&&vs){var Uy=Kw();nf=Uy||parseInt(tf,10)||void 0}else nf=void 0;var FN=nf;function ta(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qw){e:{try{zp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ta.$.h.call(this)}}Me(ta,tt);var zN={2:"touch",3:"pen",4:"mouse"};ta.prototype.h=function(){ta.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ia="closure_listenable_"+(1e6*Math.random()|0),BN=0;function VN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++BN,this.fa=this.ia=!1}function mc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function HN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Gw(t){const e={};for(const n in t)e[n]=t[n];return e}const Fy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Fy.length;s++)n=Fy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gc(t){this.src=t,this.g={},this.h=0}gc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new VN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function rf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Hw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Vp="closure_lm_"+(1e6*Math.random()|0),$h={};function Yw(t,e,n,r,i){if(r&&r.once)return Jw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yw(t,e[s],n,r,i);return null}return n=qp(n),t&&t[Ia]?t.O(e,n,Sa(r)?!!r.capture:!!r,i):Xw(t,e,n,!1,r,i)}function Xw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Sa(i)?!!i.capture:!!i,a=Wp(t);if(a||(t[Vp]=a=new gc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=WN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)LN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(e1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WN(){function t(n){return e.call(t.src,t.listener,n)}const e=qN;return t}function Jw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jw(t,e[s],n,r,i);return null}return n=qp(n),t&&t[Ia]?t.P(e,n,Sa(r)?!!r.capture:!!r,i):Xw(t,e,n,!0,r,i)}function Zw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zw(t,e[s],n,r,i);else r=Sa(r)?!!r.capture:!!r,n=qp(n),t&&t[Ia]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sf(s,n,r,i),-1<n&&(mc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sf(e,n,r,i)),(n=-1<t?e[t]:null)&&Hp(n))}function Hp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ia])rf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(e1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wp(e))?(rf(n,t),n.h==0&&(n.src=null,e[Vp]=null)):mc(t)}}}function e1(t){return t in $h?$h[t]:$h[t]="on"+t}function qN(t,e){if(t.fa)t=!0;else{e=new ta(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Hp(t),t=n.call(r,e)}return t}function Wp(t){return t=t[Vp],t instanceof gc?t:null}var Lh="__closure_events_fn_"+(1e9*Math.random()>>>0);function qp(t){return typeof t=="function"?t:(t[Lh]||(t[Lh]=function(e){return t.handleEvent(e)}),t[Lh])}function je(){Mr.call(this),this.i=new gc(this),this.S=this,this.J=null}Me(je,Mr);je.prototype[Ia]=!0;je.prototype.removeEventListener=function(t,e,n,r){Zw(this,t,e,n,r)};function We(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var i=e;e=new tt(r,t),Qw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pl(o,r,!0,e)&&i}if(o=e.g=t,i=pl(o,r,!0,e)&&i,i=pl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pl(o,r,!1,e)&&i}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mc(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function pl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&rf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kp=U.JSON.stringify;class KN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function GN(){var t=Gp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QN{constructor(){this.h=this.g=null}add(e,n){const r=t1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var t1=new KN(()=>new YN,t=>t.reset());class YN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function JN(t){U.setTimeout(()=>{throw t},0)}let na,ra=!1,Gp=new QN,n1=()=>{const t=U.Promise.resolve(void 0);na=()=>{t.then(ZN)}};var ZN=()=>{for(var t;t=GN();){try{t.h.call(t.g)}catch(n){JN(n)}var e=t1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ra=!1};function yc(t,e){je.call(this),this.h=t||1,this.g=e||U,this.j=et(this.qb,this),this.l=Date.now()}Me(yc,je);R=yc.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(Qp(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){yc.$.N.call(this),Qp(this),delete this.g};function Yp(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function r1(t){t.g=Yp(()=>{t.g=null,t.i&&(t.i=!1,r1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eR extends Mr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:r1(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ia(t){Mr.call(this),this.h=t,this.g={}}Me(ia,Mr);var zy=[];function i1(t,e,n,r){Array.isArray(n)||(n&&(zy[0]=n.toString()),n=zy);for(var i=0;i<n.length;i++){var s=Yw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function s1(t){Bp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hp(e)},t),t.g={}}ia.prototype.N=function(){ia.$.N.call(this),s1(this)};ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vc(){this.g=!0}vc.prototype.Ea=function(){this.g=!1};function tR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function nR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Xi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+iR(t,n)+(r?" "+r:"")})}function rR(t,e){t.info(function(){return"TIMEOUT: "+e})}vc.prototype.info=function(){};function iR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kp(n)}catch{return e}}var Si={},By=null;function _c(){return By=By||new je}Si.Ta="serverreachability";function o1(t){tt.call(this,Si.Ta,t)}Me(o1,tt);function sa(t){const e=_c();We(e,new o1(e))}Si.STAT_EVENT="statevent";function a1(t,e){tt.call(this,Si.STAT_EVENT,t),this.stat=e}Me(a1,tt);function lt(t){const e=_c();We(e,new a1(e,t))}Si.Ua="timingevent";function l1(t,e){tt.call(this,Si.Ua,t),this.size=e}Me(l1,tt);function xa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var wc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},u1={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xp(){}Xp.prototype.h=null;function Vy(t){return t.h||(t.h=t.i())}function c1(){}var Ca={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jp(){tt.call(this,"d")}Me(Jp,tt);function Zp(){tt.call(this,"c")}Me(Zp,tt);var of;function Ec(){}Me(Ec,Xp);Ec.prototype.g=function(){return new XMLHttpRequest};Ec.prototype.i=function(){return{}};of=new Ec;function Na(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ia(this),this.P=sR,t=ef?125:void 0,this.V=new yc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new h1}function h1(){this.i=null,this.g="",this.h=!1}var sR=45e3,af={},Cu={};R=Na.prototype;R.setTimeout=function(t){this.P=t};function lf(t,e,n){t.L=1,t.v=kc(Bn(e)),t.s=n,t.S=!0,d1(t,null)}function d1(t,e){t.G=Date.now(),Ra(t),t.A=Bn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),w1(n.i,"t",r),t.C=0,n=t.l.J,t.h=new h1,t.g=z1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new eR(et(t.Pa,t,t.g),t.O)),i1(t.U,t.g,"readystatechange",t.nb),e=t.I?Gw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),sa(),tR(t.j,t.u,t.A,t.m,t.W,t.s)}R.nb=function(t){t=t.target;const e=this.M;e&&hn(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const c=hn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||ef||this.g&&(this.h.h||this.g.ja()||Ky(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?sa(3):sa(2)),Tc(this);var n=this.g.da();this.ca=n;t:if(f1(this)){var r=Ky(this.g);t="";var i=r.length,s=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),xo(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nR(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ea(a)){var u=a;break t}}u=null}if(n=u)Xi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uf(this,n);else{this.i=!1,this.o=3,lt(12),Jr(this),xo(this);break e}}this.S?(p1(this,c,o),ef&&this.i&&c==3&&(i1(this.U,this.V,"tick",this.mb),this.V.start())):(Xi(this.j,this.m,o,null),uf(this,o)),c==4&&Jr(this),this.i&&!this.J&&(c==4?j1(this.l,this):(this.i=!1,Ra(this)))}else xR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Jr(this),xo(this)}}}catch{}finally{}};function f1(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function p1(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=oR(t,n),i==Cu){e==4&&(t.o=4,lt(14),r=!1),Xi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==af){t.o=4,lt(15),Xi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xi(t.j,t.m,i,null),uf(t,i);f1(t)&&i!=Cu&&i!=af&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sm(e),e.M=!0,lt(11))):(Xi(t.j,t.m,n,"[Invalid Chunked Response]"),Jr(t),xo(t))}R.mb=function(){if(this.g){var t=hn(this.g),e=this.g.ja();this.C<e.length&&(Tc(this),p1(this,t,e),this.i&&t!=4&&Ra(this))}};function oR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Cu:(n=Number(e.substring(n,r)),isNaN(n)?af:(r+=1,r+n>e.length?Cu:(e=e.slice(r,r+n),t.C=r+n,e)))}R.cancel=function(){this.J=!0,Jr(this)};function Ra(t){t.Y=Date.now()+t.P,m1(t,t.P)}function m1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xa(et(t.lb,t),e)}function Tc(t){t.B&&(U.clearTimeout(t.B),t.B=null)}R.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(rR(this.j,this.A),this.L!=2&&(sa(),lt(17)),Jr(this),this.o=2,xo(this)):m1(this,this.Y-t)};function xo(t){t.l.H==0||t.J||j1(t.l,t)}function Jr(t){Tc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qp(t.V),s1(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function uf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cf(n.i,t))){if(!t.K&&cf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Au(n),xc(n);else break e;im(n),lt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=xa(et(n.ib,n),6e3));if(1>=k1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zr(n,11)}else if((t.K||n.g==t)&&Au(n),!ea(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(em(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ae(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=F1(r,r.J?r.pa:null,r.Y),o.K){S1(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Tc(a),Ra(a)),r.g=o}else $1(r);0<n.j.length&&Cc(n)}else u[0]!="stop"&&u[0]!="close"||Zr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Zr(n,7):rm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}sa(4)}catch{}}function aR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function lR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function g1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lR(t),r=aR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var y1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ii(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ii){this.h=t.h,Nu(this,t.j),this.s=t.s,this.g=t.g,Ru(this,t.m),this.l=t.l;var e=t.i,n=new oa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hy(this,n),this.o=t.o}else t&&(e=String(t).match(y1))?(this.h=!1,Nu(this,e[1]||"",!0),this.s=ho(e[2]||""),this.g=ho(e[3]||"",!0),Ru(this,e[4]),this.l=ho(e[5]||"",!0),Hy(this,e[6]||"",!0),this.o=ho(e[7]||"")):(this.h=!1,this.i=new oa(null,this.h))}ii.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fo(e,Wy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fo(e,Wy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fo(n,n.charAt(0)=="/"?dR:hR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fo(n,pR)),t.join("")};function Bn(t){return new ii(t)}function Nu(t,e,n){t.j=n?ho(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ru(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hy(t,e,n){e instanceof oa?(t.i=e,mR(t.i,t.h)):(n||(e=fo(e,fR)),t.i=new oa(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function kc(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ho(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wy=/[#\/\?@]/g,hR=/[#\?:]/g,dR=/[#\?]/g,fR=/[#\?@]/g,pR=/#/g;function oa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ur(t){t.g||(t.g=new Map,t.h=0,t.i&&uR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=oa.prototype;R.add=function(t,e){Ur(this),this.i=null,t=bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function v1(t,e){Ur(t),e=bs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _1(t,e){return Ur(t),e=bs(t,e),t.g.has(e)}R.forEach=function(t,e){Ur(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.ta=function(){Ur(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.Z=function(t){Ur(this);let e=[];if(typeof t=="string")_1(this,t)&&(e=e.concat(this.g.get(bs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Ur(this),this.i=null,t=bs(this,t),_1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function w1(t,e,n){v1(t,e),0<n.length&&(t.i=null,t.g.set(bs(t,e),Fp(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mR(t,e){e&&!t.j&&(Ur(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(v1(this,r),w1(this,i,n))},t)),t.j=e}var gR=class{constructor(t,e){this.g=t,this.map=e}};function E1(t){this.l=t||yR,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yR=10;function T1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function k1(t){return t.h?1:t.g?t.g.size:0}function cf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function em(t,e){t.g?t.g.add(e):t.h=e}function S1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}E1.prototype.cancel=function(){if(this.i=I1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function I1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Fp(t.i)}var vR=class{stringify(t){return U.JSON.stringify(t,void 0)}parse(t){return U.JSON.parse(t,void 0)}};function _R(){this.g=new vR}function wR(t,e,n){const r=n||"";try{g1(t,function(i,s){let o=i;Sa(i)&&(o=Kp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ER(t,e){const n=new vc;if(U.Image){const r=new Image;r.onload=fl(ml,n,r,"TestLoadImage: loaded",!0,e),r.onerror=fl(ml,n,r,"TestLoadImage: error",!1,e),r.onabort=fl(ml,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=fl(ml,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ml(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Aa(t){this.l=t.fc||null,this.j=t.ob||!1}Me(Aa,Xp);Aa.prototype.g=function(){return new Sc(this.l,this.j)};Aa.prototype.i=function(t){return function(){return t}}({});function Sc(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Sc,je);var tm=0;R=Sc.prototype;R.open=function(t,e){if(this.readyState!=tm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,aa(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Da(this)),this.readyState=tm};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,aa(this)),this.g&&(this.readyState=3,aa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;x1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function x1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Da(this):aa(this),this.readyState==3&&x1(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,Da(this))};R.Ya=function(t){this.g&&(this.response=t,Da(this))};R.ka=function(){this.g&&Da(this)};function Da(t){t.readyState=4,t.l=null,t.j=null,t.A=null,aa(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function aa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var TR=U.JSON.parse;function ve(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=C1,this.L=this.M=!1}Me(ve,je);var C1="",kR=/^https?$/i,SR=["POST","PUT"];R=ve.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():of.g(),this.C=this.u?Vy(this.u):Vy(of),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){qy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=Hw(SR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{A1(this),0<this.B&&((this.L=IR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Yp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){qy(this,s)}};function IR(t){return vs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof Up<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function qy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,N1(t),Ic(t)}function N1(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Ic(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ic(this,!0)),ve.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?R1(this):this.kb())};R.kb=function(){R1(this)};function R1(t){if(t.h&&typeof Up<"u"&&(!t.C[1]||hn(t)!=4||t.da()!=2)){if(t.v&&hn(t)==4)Yp(t.La,0,t);else if(We(t,"readystatechange"),hn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(y1)[1]||null;!i&&U.self&&U.self.location&&(i=U.self.location.protocol.slice(0,-1)),r=!kR.test(i?i.toLowerCase():"")}n=r}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var s=2<hn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",N1(t)}}finally{Ic(t)}}}}function Ic(t,e){if(t.g){A1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=r}catch{}}}function A1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function hn(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),TR(e)}};function Ky(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case C1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function xR(t){const e={};t=(t.g&&2<=hn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ea(t[r]))continue;var n=XN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}HN(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function D1(t){let e="";return Bp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function nm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=D1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function to(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function P1(t){this.Ga=0,this.j=[],this.l=new vc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=to("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=to("baseRetryDelayMs",5e3,t),this.hb=to("retryDelaySeedMs",1e4,t),this.eb=to("forwardChannelMaxRetries",2,t),this.xa=to("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new E1(t&&t.concurrentRequestLimit),this.Ja=new _R,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=P1.prototype;R.ra=8;R.H=1;function rm(t){if(O1(t),t.H==3){var e=t.W++,n=Bn(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Pa(t,n),e=new Na(t,t.l,e),e.L=2,e.v=kc(Bn(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=z1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ra(e)}U1(t)}function xc(t){t.g&&(sm(t),t.g.cancel(),t.g=null)}function O1(t){xc(t),t.u&&(U.clearTimeout(t.u),t.u=null),Au(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function Cc(t){if(!T1(t.i)&&!t.m){t.m=!0;var e=t.Na;na||n1(),ra||(na(),ra=!0),Gp.add(e,t),t.C=0}}function CR(t,e){return k1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=xa(et(t.Na,t,e),M1(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Na(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Gw(s),Qw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=b1(this,i,e),n=Bn(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Pa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(D1(s)))+"&"+e:this.o&&nm(n,this.o,s)),em(this.i,i),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),i.aa=!0,lf(i,n,null)):lf(i,n,e),this.H=2}}else this.H==3&&(t?Gy(this,t):this.j.length==0||T1(this.i)||Gy(this))};function Gy(t,e){var n;e?n=e.m:n=t.W++;const r=Bn(t.I);ae(r,"SID",t.K),ae(r,"RID",n),ae(r,"AID",t.V),Pa(t,r),t.o&&t.s&&nm(r,t.o,t.s),n=new Na(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=b1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),em(t.i,n),lf(n,r,e)}function Pa(t,e){t.na&&Bp(t.na,function(n,r){ae(e,r,n)}),t.h&&g1({},function(n,r){ae(e,r,n)})}function b1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?et(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{wR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;na||n1(),ra||(na(),ra=!0),Gp.add(e,t),t.A=0}}function im(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=xa(et(t.Ma,t),M1(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,L1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=xa(et(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),xc(this),L1(this))};function sm(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function L1(t){t.g=new Na(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Bn(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Pa(t,e),t.o&&t.s&&nm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=kc(Bn(e)),n.s=null,n.S=!0,d1(n,t)}R.ib=function(){this.v!=null&&(this.v=null,xc(this),im(this),lt(19))};function Au(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function j1(t,e){var n=null;if(t.g==e){Au(t),sm(t),t.g=null;var r=2}else if(cf(t.i,e))n=e.F,S1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=_c(),We(r,new l1(r,n)),Cc(t)}else $1(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&CR(t,e)||r==2&&im(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Zr(t,5);break;case 4:Zr(t,10);break;case 3:Zr(t,6);break;default:Zr(t,2)}}}function M1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=et(t.pb,t);n||(n=new ii("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||Nu(n,"https"),kc(n)),ER(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),U1(t),O1(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function U1(t){if(t.H=0,t.ma=[],t.h){const e=I1(t.i);(e.length!=0||t.j.length!=0)&&(My(t.ma,e),My(t.ma,t.j),t.i.i.length=0,Fp(t.j),t.j.length=0),t.h.ya()}}function F1(t,e,n){var r=n instanceof ii?Bn(n):new ii(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ru(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ii(null);r&&Nu(s,r),e&&(s.g=e),i&&Ru(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ae(r,n,e),ae(r,"VER",t.ra),Pa(t,r),r}function z1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ve(new Aa({ob:!0})):new ve(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function B1(){}R=B1.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Du(){if(vs&&!(10<=Number(FN)))throw Error("Environmental error: no available transport.")}Du.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){je.call(this),this.g=new P1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ea(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ea(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $s(this)}Me(Rt,je);Rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=F1(t,null,t.Y),Cc(t)};Rt.prototype.close=function(){rm(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kp(t),t=n);e.j.push(new gR(e.fb++,t)),e.H==3&&Cc(e)};Rt.prototype.N=function(){this.g.h=null,delete this.j,rm(this.g),delete this.g,Rt.$.N.call(this)};function V1(t){Jp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(V1,Jp);function H1(){Zp.call(this),this.status=1}Me(H1,Zp);function $s(t){this.g=t}Me($s,B1);$s.prototype.Ba=function(){We(this.g,"a")};$s.prototype.Aa=function(t){We(this.g,new V1(t))};$s.prototype.za=function(t){We(this.g,new H1)};$s.prototype.ya=function(){We(this.g,"b")};function NR(){this.blockSize=-1}function Yt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Me(Yt,NR);Yt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Yt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)jh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){jh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){jh(this,r),i=0;break}}this.h=i,this.i+=e};Yt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var RR={};function om(t){return-128<=t&&128>t?jN(t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function dn(t){if(isNaN(t)||!isFinite(t))return ss;if(0>t)return Ve(dn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=hf;return new re(e,0)}function W1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ve(W1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dn(Math.pow(e,8)),r=ss,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=dn(Math.pow(e,s)),r=r.R(s).add(dn(o))):(r=r.R(n),r=r.add(dn(o)))}return r}var hf=4294967296,ss=om(0),df=om(1),Qy=om(16777216);R=re.prototype;R.ea=function(){if($t(this))return-Ve(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:hf+r)*e,e*=hf}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(On(this))return"0";if($t(this))return"-"+Ve(this).toString(t);for(var e=dn(Math.pow(t,6)),n=this,r="";;){var i=Ou(n,e).g;n=Pu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,On(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function On(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function $t(t){return t.h==-1}R.X=function(t){return t=Pu(this,t),$t(t)?-1:On(t)?0:1};function Ve(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(df)}R.abs=function(){return $t(this)?Ve(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new re(n,n[n.length-1]&-2147483648?-1:0)};function Pu(t,e){return t.add(Ve(e))}R.R=function(t){if(On(this)||On(t))return ss;if($t(this))return $t(t)?Ve(this).R(Ve(t)):Ve(Ve(this).R(t));if($t(t))return Ve(this.R(Ve(t)));if(0>this.X(Qy)&&0>t.X(Qy))return dn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,gl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,gl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,gl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,gl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function gl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function no(t,e){this.g=t,this.h=e}function Ou(t,e){if(On(e))throw Error("division by zero");if(On(t))return new no(ss,ss);if($t(t))return e=Ou(Ve(t),e),new no(Ve(e.g),Ve(e.h));if($t(e))return e=Ou(t,Ve(e)),new no(Ve(e.g),e.h);if(30<t.g.length){if($t(t)||$t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=df,r=e;0>=r.X(t);)n=Yy(n),r=Yy(r);var i=$i(n,1),s=$i(r,1);for(r=$i(r,2),n=$i(n,2);!On(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=$i(r,1),n=$i(n,1)}return e=Pu(t,i.R(e)),new no(i,e)}for(i=ss;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=dn(n),o=s.R(e);$t(o)||0<o.X(t);)n-=r,s=dn(n),o=s.R(e);On(s)&&(s=df),i=i.add(s),t=Pu(t,o)}return new no(i,t)}R.gb=function(t){return Ou(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function Yy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function $i(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new re(i,t.h)}Du.prototype.createWebChannel=Du.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;wc.NO_ERROR=0;wc.TIMEOUT=8;wc.HTTP_ERROR=6;u1.COMPLETE="complete";c1.EventType=Ca;Ca.OPEN="a";Ca.CLOSE="b";Ca.ERROR="c";Ca.MESSAGE="d";je.prototype.listen=je.prototype.O;ve.prototype.listenOnce=ve.prototype.P;ve.prototype.getLastError=ve.prototype.Sa;ve.prototype.getLastErrorCode=ve.prototype.Ia;ve.prototype.getStatus=ve.prototype.da;ve.prototype.getResponseJson=ve.prototype.Wa;ve.prototype.getResponseText=ve.prototype.ja;ve.prototype.send=ve.prototype.ha;ve.prototype.setWithCredentials=ve.prototype.Oa;Yt.prototype.digest=Yt.prototype.l;Yt.prototype.reset=Yt.prototype.reset;Yt.prototype.update=Yt.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=dn;re.fromString=W1;var AR=function(){return new Du},DR=function(){return _c()},Mh=wc,PR=u1,OR=Si,Xy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bR=Aa,yl=c1,$R=ve,LR=Yt,os=re;const Jy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Lp("@firebase/firestore");function Zy(){return pi.logLevel}function b(t,...e){if(pi.logLevel<=J.DEBUG){const n=e.map(am);pi.debug(`Firestore (${Ls}): ${t}`,...n)}}function Vn(t,...e){if(pi.logLevel<=J.ERROR){const n=e.map(am);pi.error(`Firestore (${Ls}): ${t}`,...n)}}function _s(t,...e){if(pi.logLevel<=J.WARN){const n=e.map(am);pi.warn(`Firestore (${Ls}): ${t}`,...n)}}function am(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function ce(t,e){t||M()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let P=class extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q1=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},jR=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}},MR=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}};class UR{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new q1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ye(e)}}let FR=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};class zR{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new FR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let BR=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},VR=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.T=n.token,new BR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=HR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new De(0,0))}static max(){return new z(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return la.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof la?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends la{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const WR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends la{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return WR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}function qR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Pr(i,$.empty(),e)}function KR(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(z.min(),$.empty(),-1)}static max(){return new Pr(z.max(),$.empty(),-1)}}function GR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==QR)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ba(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}lm.ct=-1;function Nc(t){return t==null}function bu(t){return t===0&&1/t==-1/0}function XR(t){return typeof t=="number"&&Number.isInteger(t)&&!bu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function G1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne=class ff{constructor(e,n){this.comparator=e,this.root=n||Cr.EMPTY}insert(e,n){return new ff(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Cr.BLACK,null,null))}remove(e){return new ff(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Cr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vl(this.root,e,this.comparator,!0)}},vl=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Cr=class Nn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Nn.RED,this.left=i??Nn.EMPTY,this.right=s??Nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Nn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Nn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};Cr.EMPTY=null,Cr.RED=!0,Cr.BLACK=!1;Cr.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Cr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ct=class pf{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tv(this.data.getIterator())}getIteratorFrom(e){return new tv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pf)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pf(this.comparator);return n.data=e,n}},tv=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn=class mf{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new mf([])}unionWith(e){let n=new Ct(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mf(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Q1("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const JR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(ce(!!t),typeof t=="string"){let e=0;const n=JR.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cm(t){const e=t.mapValue.fields.__previous_value__;return um(e)?cm(e):e}function ua(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ca{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ca&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?um(t)?4:eA(t)?9007199254740991:10:M()}function En(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ua(t).isEqual(ua(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Or(r.timestampValue),o=Or(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return mi(r.bytesValue).isEqual(mi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ie(r.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(r.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ie(r.integerValue)===Ie(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ie(r.doubleValue),o=Ie(i.doubleValue);return s===o?bu(s)===bu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(ev(s)!==ev(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!En(s[a],o[a])))return!1;return!0}(t,e);default:return M()}}function ha(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=gi(t),r=gi(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ie(i.integerValue||i.doubleValue),a=Ie(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nv(t.timestampValue,e.timestampValue);case 4:return nv(ua(t),ua(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=mi(i),a=mi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Z(o[l],a[l]);if(u!==0)return u}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(Ie(i.latitude),Ie(s.latitude));return o!==0?o:Z(Ie(i.longitude),Ie(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Es(o[l],a[l]);if(u)return u}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===_l.mapValue&&s===_l.mapValue)return 0;if(i===_l.mapValue)return 1;if(s===_l.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Z(a[c],u[c]);if(d!==0)return d;const f=Es(o[a[c]],l[u[c]]);if(f!==0)return f}return Z(a.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function nv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Or(t),r=Or(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Ts(t){return gf(t)}function gf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Or(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?mi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=gf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${gf(r.fields[a])}`;return s+"}"}(t.mapValue):M();var e,n}function rv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yf(t){return!!t&&"integerValue"in t}function hm(t){return!!t&&"arrayValue"in t}function iv(t){return!!t&&"nullValue"in t}function sv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zl(t){return!!t&&"mapValue"in t}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Co(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(Co(this.value))}}function Y1(t){const e=[];return Ii(t.fields,(n,r)=>{const i=new Ze([n]);if(zl(r)){const s=Y1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,z.min(),z.min(),z.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Je(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new Je(e,2,n,z.min(),z.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,z.min(),z.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.position=e,this.inclusive=n}}function ov(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function av(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n="asc"){this.field=e,this.dir=n}}function tA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{}class Ce extends X1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rA(e,n,r):n==="array-contains"?new oA(e,r):n==="in"?new aA(e,r):n==="not-in"?new lA(e,r):n==="array-contains-any"?new uA(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iA(e,r):new sA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xt extends X1{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Xt(e,n)}matches(e){return J1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function J1(t){return t.op==="and"}function Z1(t){return nA(t)&&J1(t)}function nA(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function vf(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Ts(t.value);if(Z1(t))return t.filters.map(e=>vf(e)).join(",");{const e=t.filters.map(n=>vf(n)).join(",");return`${t.op}(${e})`}}function eE(t,e){return t instanceof Ce?function(n,r){return r instanceof Ce&&n.op===r.op&&n.field.isEqual(r.field)&&En(n.value,r.value)}(t,e):t instanceof Xt?function(n,r){return r instanceof Xt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&eE(s,r.filters[o]),!0):!1}(t,e):void M()}function tE(t){return t instanceof Ce?function(e){return`${e.field.canonicalString()} ${e.op} ${Ts(e.value)}`}(t):t instanceof Xt?function(e){return e.op.toString()+" {"+e.getFilters().map(tE).join(" ,")+"}"}(t):"Filter"}class rA extends Ce{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class iA extends Ce{constructor(e,n){super(e,"in",n),this.keys=nE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sA extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=nE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class oA extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hm(n)&&ha(n.arrayValue,this.value)}}class aA extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ha(this.value.arrayValue,n)}}class lA extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ha(this.value.arrayValue,n)}}class uA extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ha(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function lv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new cA(t,e,n,r,i,s,o)}function dm(t){const e=B(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ts(r)).join(",")),e.dt=n}return e.dt}function fm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!av(t.startAt,e.startAt)&&av(t.endAt,e.endAt)}function _f(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function hA(t,e,n,r,i,s,o,a){return new $a(t,e,n,r,i,s,o,a)}function pm(t){return new $a(t)}function uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mm(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function iE(t){return t.collectionGroup!==null}function as(t){const e=B(t);if(e.wt===null){e.wt=[];const n=mm(e),r=rE(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new No(n)),e.wt.push(new No(Ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new No(Ze.keyField(),s))}}}return e.wt}function Hn(t){const e=B(t);if(!e._t)if(e.limitType==="F")e._t=lv(e.path,e.collectionGroup,as(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of as(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new No(s.field,o))}const r=e.endAt?new $u(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new $u(e.startAt.position,e.startAt.inclusive):null;e._t=lv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function wf(t,e){e.getFirstInequalityField(),mm(t);const n=t.filters.concat([e]);return new $a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ef(t,e,n){return new $a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rc(t,e){return fm(Hn(t),Hn(e))&&t.limitType===e.limitType}function sE(t){return`${dm(Hn(t))}|lt:${t.limitType}`}function Tf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>tE(r)).join(", ")}]`),Nc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ts(r)).join(",")),`Target(${n})`}(Hn(t))}; limitType=${t.limitType})`}function Ac(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of as(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ov(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,as(n),r)||n.endAt&&!function(i,s,o){const a=ov(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,as(n),r))}(t,e)}function dA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oE(t){return(e,n)=>{let r=!1;for(const i of as(t)){const s=fA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fA(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Es(a,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return G1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new Ne($.comparator);function Wn(){return pA}const aE=new Ne($.comparator);function po(...t){let e=aE;for(const n of t)e=e.insert(n.key,n);return e}function lE(t){let e=aE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return Ro()}function uE(){return Ro()}function Ro(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const mA=new Ne($.comparator),gA=new Ct($.comparator);function G(...t){let e=gA;for(const n of t)e=e.add(n);return e}const yA=new Ct(Z);function vA(){return yA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bu(e)?"-0":e}}function hE(t){return{integerValue:""+t}}function _A(t,e){return XR(e)?hE(e):cE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this._=void 0}}function wA(t,e,n){return t instanceof Lu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&um(i)&&(i=cm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof da?fE(t,e):t instanceof fa?pE(t,e):function(r,i){const s=dE(r,i),o=cv(s)+cv(r.gt);return yf(s)&&yf(r.gt)?hE(o):cE(r.serializer,o)}(t,e)}function EA(t,e,n){return t instanceof da?fE(t,e):t instanceof fa?pE(t,e):n}function dE(t,e){return t instanceof ju?yf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Lu extends Dc{}class da extends Dc{constructor(e){super(),this.elements=e}}function fE(t,e){const n=mE(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class fa extends Dc{constructor(e){super(),this.elements=e}}function pE(t,e){let n=mE(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class ju extends Dc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function cv(t){return Ie(t.integerValue||t.doubleValue)}function mE(t){return hm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof da&&r instanceof da||n instanceof fa&&r instanceof fa?ws(n.elements,r.elements,En):n instanceof ju&&r instanceof ju?En(n.gt,r.gt):n instanceof Lu&&r instanceof Lu}(t.transform,e.transform)}class kA{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pc{}function gE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gm(t.key,Mt.none()):new La(t.key,t.data,Mt.none());{const n=t.data,r=mt.empty();let i=new Ct(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fr(t.key,r,new fn(i.toArray()),Mt.none())}}function SA(t,e,n){t instanceof La?function(r,i,s){const o=r.value.clone(),a=dv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(r,i,s){if(!Bl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=dv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(yE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof La?function(i,s,o,a){if(!Bl(i.precondition,s))return o;const l=i.value.clone(),u=fv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(i,s,o,a){if(!Bl(i.precondition,s))return o;const l=fv(i.fieldTransforms,a,s),u=s.data;return u.setAll(yE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Bl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function IA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dE(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function hv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ws(n,r,(i,s)=>TA(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends Pc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fr extends Pc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dv(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,EA(o,a,n[i]))}return r}function fv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wA(s,o,e))}return r}class gm extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xA extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=gE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>hv(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>hv(n,r))}}class ym{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=mA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ym(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,Y;function AA(t){switch(t){default:return M();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function vE(t){if(t===void 0)return Vn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Se.OK:return k.OK;case Se.CANCELLED:return k.CANCELLED;case Se.UNKNOWN:return k.UNKNOWN;case Se.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Se.INTERNAL:return k.INTERNAL;case Se.UNAVAILABLE:return k.UNAVAILABLE;case Se.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Se.NOT_FOUND:return k.NOT_FOUND;case Se.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Se.ABORTED:return k.ABORTED;case Se.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Se.DATA_LOSS:return k.DATA_LOSS;default:return M()}}(Y=Se||(Se={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wl}static getOrCreateInstance(){return wl===null&&(wl=new vm),wl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let wl=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new os([4294967295,4294967295],0);function pv(t){const e=DA().encode(t),n=new LR;return n.update(e),new Uint8Array(n.digest())}function mv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new os([n,r],0),new os([i,s],0)]}class _m{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mo(`Invalid padding: ${n}`);if(r<0)throw new mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mo(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=os.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(os.fromNumber(r)));return i.compare(PA)===1&&(i=new os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=pv(e),[r,i]=mv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _m(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=pv(e),[r,i]=mv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oc(z.min(),i,new Ne(Z),Wn(),G())}}class ja{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ja(r,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class _E{constructor(e,n){this.targetId=e,this.Vt=n}}class wE{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gv{constructor(){this.St=0,this.Dt=vv(),this.Ct=it.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=G(),n=G(),r=G();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new ja(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=vv()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class OA{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Wn(),this.zt=yv(),this.Wt=new Ne(Z)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(_f(o))if(i===0){const a=new $(o.path);this.Yt(r,a,Je.newNoDocument(a,z.min()))}else ce(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=vm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var f,m,v,_,T,g;const p={localCacheCount:c,existenceFilterCount:d.count},y=d.unchangedNames;return y&&(p.bloomFilter={applied:u===0,hashCount:(f=y==null?void 0:y.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(_=(v=(m=y==null?void 0:y.bits)===null||m===void 0?void 0:m.bitmap)===null||v===void 0?void 0:v.length)!==null&&_!==void 0?_:0,padding:(g=(T=y==null?void 0:y.bits)===null||T===void 0?void 0:T.padding)!==null&&g!==void 0?g:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=mi(s).toUint8Array()}catch(c){if(c instanceof Q1)return _s("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new _m(l,o,a)}catch(c){return _s(c instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&_f(a.target)){const l=new $(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Je.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=G();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Oc(e,n,this.Wt,this.jt,r);return this.jt=Wn(),this.zt=yv(),this.Wt=new Ne(Z),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new gv,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ct(Z),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new gv),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function yv(){return new Ne($.comparator)}function vv(){return new Ne($.comparator)}const bA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$A=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LA=(()=>({and:"AND",or:"OR"}))();class jA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kf(t,e){return t.useProto3Json||Nc(e)?e:{value:e}}function Mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MA(t,e){return Mu(t,e.toTimestamp())}function vn(t){return ce(!!t),z.fromTimestamp(function(e){const n=Or(e);return new De(n.seconds,n.nanos)}(t))}function wm(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function TE(t){const e=le.fromString(t);return ce(xE(e)),e}function Sf(t,e){return wm(t.databaseId,e.path)}function Uh(t,e){const n=TE(e);if(n.get(1)!==t.databaseId.projectId)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(kE(n))}function If(t,e){return wm(t.databaseId,e)}function UA(t){const e=TE(t);return e.length===4?le.emptyPath():kE(e)}function xf(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kE(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _v(t,e,n){return{name:Sf(t,e),fields:n.value.mapValue.fields}}function FA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ce(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(ce(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:vE(l.code);return new P(u,l.message||"")}(o);n=new wE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uh(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):z.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=Je.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Vl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uh(t,r.document),s=r.readTime?vn(r.readTime):z.min(),o=Je.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uh(t,r.document),s=r.removedTargetIds||[];n=new Vl([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new RA(i,s),a=r.targetId;n=new _E(a,o)}}return n}function zA(t,e){let n;if(e instanceof La)n={update:_v(t,e.key,e.value)};else if(e instanceof gm)n={delete:Sf(t,e.key)};else if(e instanceof Fr)n={update:_v(t,e.key,e.data),updateMask:YA(e.fieldMask)};else{if(!(e instanceof xA))return M();n={verify:Sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Lu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof da)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ju)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:MA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function BA(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?vn(r.updateTime):vn(i);return s.isEqual(z.min())&&(s=vn(i)),new kA(s,r.transformResults||[])}(n,e))):[]}function VA(t,e){return{documents:[If(t,e.path)]}}function HA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=If(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=If(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return IE(Xt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ji(c.field),direction:KA(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=kf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function WA(t){let e=UA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=SE(c);return d instanceof Xt&&Z1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new No(Mi(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Nc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,f=c.values||[];return new $u(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,f=c.values||[];return new $u(f,d)}(n.endAt)),hA(e,i,o,s,a,"F",l,u)}function qA(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Mi(e.unaryFilter.field);return Ce.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Mi(e.unaryFilter.field);return Ce.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mi(e.unaryFilter.field);return Ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Mi(e.unaryFilter.field);return Ce.create(s,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(e){return Ce.create(Mi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Xt.create(e.compositeFilter.filters.map(n=>SE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(t):M()}function KA(t){return bA[t]}function GA(t){return $A[t]}function QA(t){return LA[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Mi(t){return Ze.fromServerFormat(t.fieldPath)}function IE(t){return t instanceof Ce?function(e){if(e.op==="=="){if(sv(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NAN"}};if(iv(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(sv(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NAN"}};if(iv(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(e.field),op:GA(e.op),value:e.value}}}(t):t instanceof Xt?function(e){const n=e.getFilters().map(r=>IE(r));return n.length===1?n[0]:{compositeFilter:{op:QA(e.op),filters:n}}}(t):M()}function YA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,i,s=z.min(),o=z.min(),a=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.fe=e}}function JA(t){const e=WA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ef(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.rn=new e2}addToCollectionParentIndex(e,n){return this.rn.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Pr.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class e2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ct(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ct(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ks(0)}static Mn(){return new ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ao(r.mutation,i,fn.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,n,r=G()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=po();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,G()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Wn();const o=Ro(),a=Ro();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Fr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ao(c.mutation,u,c.mutation.getFieldMask(),De.now())):o.set(u.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new n2(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ro();let i=new Ne((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||fn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=uE();c.forEach(f=>{if(!s.has(f)){const m=gE(n.get(f),r.get(f));m!==null&&d.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(ei());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,G())).next(c=>({batchId:a,changes:lE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=po();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=po();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new $a(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Je.newInvalidDocument(u)))});let o=po();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ao(u.mutation,l,fn.empty(),De.now()),Ac(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return I.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:vn(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:JA(r.bundledQuery),readTime:vn(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.overlays=new Ne($.comparator),this.ls=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=ei(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ei(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ei(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NA(n,r));let s=this.ls.get(n);s===void 0&&(s=G(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.fs=new Ct(Oe.ds),this.ws=new Ct(Oe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Oe(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new $(new le([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new le([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=G();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||Z(e.As,n.As)}static _s(e,n){return Z(e.As,n.As)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ct(Oe.ds)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Oe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(Z);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),I.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new $(s),0);let a=new Ct(Z);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),I.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return I.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Oe(n,0),i=this.Rs.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.Ds=e,this.docs=new Ne($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wn();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||GR(KR(c),r)<=0||(i.has(c.key)||Ac(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}Cs(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new l2(this)}getSize(e){return I.resolve(this.size)}}class l2 extends t2{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.persistence=e,this.xs=new js(n=>dm(n),fm),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Em,this.targetCount=0,this.Ms=ks.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),I.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Fn(n),I.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n){this.$s={},this.overlays={},this.Os=new lm(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new u2(this),this.indexManager=new ZA,this.remoteDocumentCache=function(r){return new a2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new XA(n),this.qs=new i2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new s2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new o2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new h2(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return I.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class h2 extends YR{constructor(e){super(),this.currentSequenceNumber=e}}class Tm{constructor(e){this.persistence=e,this.Qs=new Em,this.js=null}static zs(e){return new Tm(e)}get Ws(){if(this.js)return this.js;throw M()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),I.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ws,r=>{const i=$.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return I.or([()=>I.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new km(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(uv(n))return I.resolve(null);let r=Hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ef(n,null,"F"),r=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=G(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Ef(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return uv(n)||i.isEqual(z.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Zy()<=J.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tf(n)),this.Wi(e,o,n,qR(i,-1)))})}ji(e,n){let r=new Ct(oE(e));return n.forEach((i,s)=>{Ac(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Zy()<=J.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Tf(n)),this.Ui.getDocumentsMatchingQuery(e,n,Pr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ne(Z),this.Yi=new js(s=>dm(s),fm),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r2(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function p2(t,e,n,r){return new f2(t,e,n,r)}async function CE(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function m2(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let f=I.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(a,m)).next(v=>{const _=l.docVersions.get(m);ce(_!==null),v.version.compareTo(_)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=G();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function NE(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function g2(t,e){const n=B(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,d)));let m=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(it.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(d,m),function(v,_,T){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,m,c)&&a.push(n.Bs.updateTargetData(s,m))});let l=Wn(),u=G();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(y2(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(z.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(d=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function y2(t,e,n){let r=G(),i=G();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function v2(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _2(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Cf(t,e,n){const r=B(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ba(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function wv(t,e,n){const r=B(t);let i=z.min(),s=G();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=B(a),d=c.Yi.get(u);return d!==void 0?I.resolve(c.Ji.get(d)):c.Bs.getTargetData(l,u)}(r,o,Hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:G())).next(a=>(w2(r,dA(e),a),{documents:a,ir:s})))}function w2(t,e,n){let r=t.Xi.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class Ev{constructor(){this.activeTargetIds=vA()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.Hr=new Ev,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ev,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El=null;function Fh(){return El===null?El=268435456+Math.round(2147483648*Math.random()):El++,"0x"+El.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class I2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Fh(),a=this.To(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(b("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw _s("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ls,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=k2[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Fh();return new Promise((o,a)=>{const l=new $R;l.setWithCredentials(!0),l.listenOnce(PR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Mh.NO_ERROR:const c=l.getResponseJson();b(Qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Mh.TIMEOUT:b(Qe,`RPC '${e}' ${s} timed out`),a(new P(k.DEADLINE_EXCEEDED,"Request time out"));break;case Mh.HTTP_ERROR:const d=l.getStatus();if(b(Qe,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const v=function(_){const T=_.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(T)>=0?T:k.UNKNOWN}(m.status);a(new P(v,m.message))}else a(new P(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(k.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{b(Qe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(Qe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Fh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AR(),a=DR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new bR({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");b(Qe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,m=!1;const v=new S2({ro:T=>{m?b(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(f||(b(Qe,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),b(Qe,`RPC '${e}' stream ${i} sending:`,T),d.send(T))},oo:()=>d.close()}),_=(T,g,p)=>{T.listen(g,y=>{try{p(y)}catch(w){setTimeout(()=>{throw w},0)}})};return _(d,yl.EventType.OPEN,()=>{m||b(Qe,`RPC '${e}' stream ${i} transport opened.`)}),_(d,yl.EventType.CLOSE,()=>{m||(m=!0,b(Qe,`RPC '${e}' stream ${i} transport closed`),v.wo())}),_(d,yl.EventType.ERROR,T=>{m||(m=!0,_s(Qe,`RPC '${e}' stream ${i} transport errored:`,T),v.wo(new P(k.UNAVAILABLE,"The operation could not be completed")))}),_(d,yl.EventType.MESSAGE,T=>{var g;if(!m){const p=T.data[0];ce(!!p);const y=p,w=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(w){b(Qe,`RPC '${e}' stream ${i} received error:`,w);const x=w.status;let C=function(A){const ee=Se[A];if(ee!==void 0)return vE(ee)}(x),N=w.message;C===void 0&&(C=k.INTERNAL,N="Unknown error status: "+x+" with message "+w.message),m=!0,v.wo(new P(C,N)),d.close()}else b(Qe,`RPC '${e}' stream ${i} received:`,p),v._o(p)}}),_(a,OR.STAT_EVENT,T=>{T.stat===Xy.PROXY?b(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Xy.NOPROXY&&b(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t){return new jA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new RE(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new P(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x2 extends AE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=FA(this.serializer,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?vn(s.readTime):z.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=xf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=_f(a)?{documents:VA(i,a)}:{query:HA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=EE(i,s.resumeToken);const l=kf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(z.min())>0){o.readTime=Mu(i,s.snapshotVersion.toTimestamp());const l=kf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=qA(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=xf(this.serializer),n.removeTarget=e,this.Wo(n)}}class C2 extends AE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=BA(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.cu(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=xf(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zA(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(k.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(k.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class R2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Vn(n),this.mu=!1):b("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{xi(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=B(a);l.vu.add(4),await Ma(l),l.bu.set("Unknown"),l.vu.delete(4),await $c(l)}(this))})}),this.bu=new R2(r,i)}}async function $c(t){if(xi(t))for(const e of t.Ru)await e(!0)}async function Ma(t){for(const e of t.Ru)await e(!1)}function DE(t,e){const n=B(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),xm(n)?Im(n):Ms(n).Ko()&&Sm(n,e))}function PE(t,e){const n=B(t),r=Ms(n);n.Au.delete(e),r.Ko()&&OE(n,e),n.Au.size===0&&(r.Ko()?r.jo():xi(n)&&n.bu.set("Unknown"))}function Sm(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).su(e)}function OE(t,e){t.Vu.qt(e),Ms(t).iu(e)}function Im(t){t.Vu=new OA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.bu.gu()}function xm(t){return xi(t)&&!Ms(t).Uo()&&t.Au.size>0}function xi(t){return B(t).vu.size===0}function bE(t){t.Vu=void 0}async function D2(t){t.Au.forEach((e,n)=>{Sm(t,e)})}async function P2(t,e){bE(t),xm(t)?(t.bu.Iu(e),Im(t)):t.bu.set("Unknown")}async function O2(t,e,n){if(t.bu.set("Online"),e instanceof wE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uu(t,r)}else if(e instanceof Vl?t.Vu.Ht(e):e instanceof _E?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(z.min()))try{const r=await NE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(it.EMPTY_BYTE_STRING,u.snapshotVersion)),OE(i,a);const c=new mr(u.target,a,l,u.sequenceNumber);Sm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await Uu(t,r)}}async function Uu(t,e,n){if(!ba(e))throw e;t.vu.add(1),await Ma(t),t.bu.set("Offline"),n||(n=()=>NE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await $c(t)})}function $E(t,e){return e().catch(n=>Uu(t,n,e))}async function Lc(t){const e=B(t),n=br(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;b2(e);)try{const i=await v2(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,$2(e,i)}catch(i){await Uu(e,i)}LE(e)&&jE(e)}function b2(t){return xi(t)&&t.Eu.length<10}function $2(t,e){t.Eu.push(e);const n=br(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function LE(t){return xi(t)&&!br(t).Uo()&&t.Eu.length>0}function jE(t){br(t).start()}async function L2(t){br(t).hu()}async function j2(t){const e=br(t);for(const n of t.Eu)e.uu(n.mutations)}async function M2(t,e,n){const r=t.Eu.shift(),i=ym.from(r,e,n);await $E(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lc(t)}async function U2(t,e){e&&br(t).ou&&await async function(n,r){if(i=r.code,AA(i)&&i!==k.ABORTED){const s=n.Eu.shift();br(n).Qo(),await $E(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Lc(n)}var i}(t,e),LE(t)&&jE(t)}async function kv(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=xi(n);n.vu.add(3),await Ma(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await $c(n)}async function F2(t,e){const n=B(t);e?(n.vu.delete(2),await $c(n)):e||(n.vu.add(2),await Ma(n),n.bu.set("Unknown"))}function Ms(t){return t.Su||(t.Su=function(e,n,r){const i=B(e);return i.fu(),new x2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:D2.bind(null,t),ao:P2.bind(null,t),nu:O2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),xm(t)?Im(t):t.bu.set("Unknown")):(await t.Su.stop(),bE(t))})),t.Su}function br(t){return t.Du||(t.Du=function(e,n,r){const i=B(e);return i.fu(),new C2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:L2.bind(null,t),ao:U2.bind(null,t),au:j2.bind(null,t),cu:M2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Lc(t)):(await t.Du.stop(),t.Eu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Cm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nm(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),ba(t))return new P(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=po(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.Cu=new Ne($.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):M():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ss(e,n,ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.Nu=void 0,this.listeners=[]}}class B2{constructor(){this.queries=new js(e=>sE(e),Rc),this.onlineState="Unknown",this.ku=new Set}}async function ME(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new z2),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Nm(o,`Initialization of query '${Tf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Rm(n)}async function UE(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function V2(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Rm(n)}function H2(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Rm(t){t.ku.forEach(e=>{e.next()})}class FE{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class W2{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=G(),this.mutatedKeys=G(),this.tc=oE(e),this.ec=new ls(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Sv,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),m=Ac(this.query,d)?d:null,v=!!f&&this.mutatedKeys.has(f.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;f&&m?f.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),T=!0):this.rc(f,m)||(r.track({type:2,doc:m}),T=!0,(l&&this.tc(m,l)>0||u&&this.tc(m,u)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),T=!0):f&&!m&&(r.track({type:1,doc:f}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(d,f){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return m(d)-m(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Ss(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Sv,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=G(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new BE(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new zE(r))}),n}hc(e){this.Yu=e.ir,this.Zu=G();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ss.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class q2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class K2{constructor(e){this.key=e,this.fc=!1}}class G2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new js(a=>sE(a),Rc),this._c=new Map,this.mc=new Set,this.gc=new Ne($.comparator),this.yc=new Map,this.Ic=new Em,this.Tc={},this.Ec=new Map,this.Ac=ks.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Q2(t,e){const n=sD(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await _2(n.localStore,Hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Y2(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&DE(n.remoteStore,o)}return i}async function Y2(t,e,n,r,i){t.Rc=(d,f,m)=>async function(v,_,T,g){let p=_.view.sc(T);p.zi&&(p=await wv(v.localStore,_.query,!1).then(({documents:x})=>_.view.sc(x,p)));const y=g&&g.targetChanges.get(_.targetId),w=_.view.applyChanges(p,v.isPrimaryClient,y);return xv(v,_.targetId,w.cc),w.snapshot}(t,d,f,m);const s=await wv(t.localStore,e,!0),o=new W2(e,s.ir),a=o.sc(s.documents),l=ja.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);xv(t,n,u.cc);const c=new q2(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function X2(t,e){const n=B(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Rc(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),PE(n.remoteStore,r.targetId),Nf(n,r.targetId)}).catch(Oa)):(Nf(n,r.targetId),await Cf(n.localStore,r.targetId,!0))}async function J2(t,e,n){const r=oD(t);try{const i=await function(s,o){const a=B(s),l=De.now(),u=o.reduce((f,m)=>f.add(m.key),G());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Wn(),v=G();return a.Zi.getEntries(f,u).next(_=>{m=_,m.forEach((T,g)=>{g.isValidDocument()||(v=v.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(_=>{c=_;const T=[];for(const g of o){const p=IA(g,c.get(g.key).overlayedDocument);p!=null&&T.push(new Fr(g.key,p,Y1(p.value.mapValue),Mt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,T,o)}).next(_=>{d=_;const T=_.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(f,_.batchId,T)})}).then(()=>({batchId:d.batchId,changes:lE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Ne(Z)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ua(r,i.changes),await Lc(r.remoteStore)}catch(i){const s=Nm(i,"Failed to persist write");n.reject(s)}}async function VE(t,e){const n=B(t);try{const r=await g2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ce(o.fc):i.removedDocuments.size>0&&(ce(o.fc),o.fc=!1))}),await Ua(n,r,e)}catch(r){await Oa(r)}}function Iv(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=B(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Mu(o)&&(l=!0)}),l&&Rm(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Z2(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Ne($.comparator);o=o.insert(s,Je.newNoDocument(s,z.min()));const a=G().add(s),l=new Oc(z.min(),new Map,new Ne(Z),o,a);await VE(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Am(r)}else await Cf(r.localStore,e,!1).then(()=>Nf(r,e,n)).catch(Oa)}async function eD(t,e){const n=B(t),r=e.batch.batchId;try{const i=await m2(n.localStore,e);WE(n,r,null),HE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ua(n,i)}catch(i){await Oa(i)}}async function tD(t,e,n){const r=B(t);try{const i=await function(s,o){const a=B(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ce(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);WE(r,e,n),HE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ua(r,i)}catch(i){await Oa(i)}}function HE(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function WE(t,e,n){const r=B(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||qE(t,r)})}function qE(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(PE(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Am(t))}function xv(t,e,n){for(const r of n)r instanceof zE?(t.Ic.addReference(r.key,e),nD(t,r)):r instanceof BE?(b("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||qE(t,r.key)):M()}function nD(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.mc.add(r),Am(t))}function Am(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(le.fromString(e)),r=t.Ac.next();t.yc.set(r,new K2(n)),t.gc=t.gc.insert(n,r),DE(t.remoteStore,new mr(Hn(pm(n.path)),r,"TargetPurposeLimboResolution",lm.ct))}}async function Ua(t,e,n){const r=B(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=km.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=B(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,d=>I.forEach(d.Fi,f=>u.persistence.referenceDelegate.addReference(c,d.targetId,f)).next(()=>I.forEach(d.Bi,f=>u.persistence.referenceDelegate.removeReference(c,d.targetId,f)))))}catch(c){if(!ba(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,v)}}}(r.localStore,s))}async function rD(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await CE(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new P(k.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ua(n,r.er)}}function iD(t,e){const n=B(t),r=n.yc.get(e);if(r&&r.fc)return G().add(r.key);{let i=G();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function sD(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=VE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z2.bind(null,e),e.dc.nu=V2.bind(null,e.eventManager),e.dc.Pc=H2.bind(null,e.eventManager),e}function oD(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tD.bind(null,e),e}class Cv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return p2(this.persistence,new d2,e.initialUser,this.serializer)}createPersistence(e){return new c2(Tm.zs,this.serializer)}createSharedClientState(e){return new E2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Iv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rD.bind(null,this.syncEngine),await F2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new B2}createDatastore(e){const n=bc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new I2(i));var i;return function(s,o,a,l){return new N2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Iv(this.syncEngine,a,0),o=Tv.D()?new Tv:new T2,new A2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new G2(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);b("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ma(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=K1.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bh(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await CE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cD(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>kv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>kv(e.remoteStore,s)),t._onlineComponents=e}function uD(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function cD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uD(n))throw n;_s("Error using user provided cache. Falling back to memory cache: "+n),await Bh(t,new Cv)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Bh(t,new Cv);return t._offlineComponents}async function GE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Nv(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Nv(t,new aD))),t._onlineComponents}function hD(t){return GE(t).then(e=>e.syncEngine)}async function QE(t){const e=await GE(t),n=e.eventManager;return n.onListen=Q2.bind(null,e.syncEngine),n.onUnlisten=X2.bind(null,e.syncEngine),n}function dD(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new KE({next:d=>{s.enqueueAndForget(()=>UE(i,c));const f=d.docs.has(o);!f&&d.fromCache?l.reject(new P(k.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&a&&a.source==="server"?l.reject(new P(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new FE(pm(o.path),u,{includeMetadataChanges:!0,Ku:!0});return ME(i,c)}(await QE(t),t.asyncQueue,e,n,r)),r.promise}function fD(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new KE({next:d=>{s.enqueueAndForget(()=>UE(i,c)),d.fromCache&&a.source==="server"?l.reject(new P(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new FE(o,u,{includeMetadataChanges:!0,Ku:!0});return ME(i,c)}(await QE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e,n){if(!n)throw new P(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pD(t,e,n,r){if(e===!0&&r===!0)throw new P(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Av(t){if(!$.isDocumentKey(t))throw new P(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dv(t){if($.isDocumentKey(t))throw new P(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jc(t);throw new P(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new P(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new P(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new P(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Mc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new jR;switch(n.type){case"firstParty":return new zR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rv.get(e);n&&(b("ComponentProvider","Removing Datastore"),Rv.delete(e),n.terminate())}(this),Promise.resolve()}}function mD(t,e,n,r={}){var i;const s=(t=Jt(t,Mc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ye.MOCK_USER;else{a=Mw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new P(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ye(u)}t._authCredentials=new MR(new q1(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class Us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Us(this.firestore,e,this._query)}}class Nr extends Us{constructor(e,n,r){super(e,n,pm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new $(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function Fa(t,e,...n){if(t=ye(t),XE("collection","path",e),t instanceof Mc){const r=le.fromString(e,...n);return Dv(r),new Nr(t,null,r)}{if(!(t instanceof ct||t instanceof Nr))throw new P(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Dv(r),new Nr(t.firestore,null,r)}}function Fs(t,e,...n){if(t=ye(t),arguments.length===1&&(e=K1.A()),XE("doc","path",e),t instanceof Mc){const r=le.fromString(e,...n);return Av(r),new ct(t,null,new $(r))}{if(!(t instanceof ct||t instanceof Nr))throw new P(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Av(r),new ct(t.firestore,t instanceof Nr?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new RE(this,"async_queue_retry"),this.Xc=()=>{const n=zh();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new jn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ba(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Cm.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&M()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Ci extends Mc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new gD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||JE(this),this._firestoreClient.terminate()}}function yD(t,e){const n=typeof t=="object"?t:Mp(),r=typeof t=="string"?t:e||"(default)",i=dc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$w("firestore");s&&mD(i,...s)}return i}function Dm(t){return t._firestoreClient||JE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function JE(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new ZR(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,YE(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new lD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Is(it.fromBase64String(e))}catch(n){throw new P(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Is(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=/^__.*__$/;class _D{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}class ZE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class bm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new bm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Fu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(eT(this.ca)&&vD.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class wD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bc(e)}ya(e,n,r,i=!1){return new bm({ca:e,methodName:n,ga:r,path:Ze.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fc(t){const e=t._freezeSettings(),n=bc(t._databaseId);return new wD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tT(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);$m("Data must be an object, but it was:",o,r);const a=nT(r,o);let l,u;if(s.merge)l=new fn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=Rf(e,d,n);if(!o.contains(f))throw new P(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);iT(c,f)||c.push(f)}l=new fn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new _D(new mt(a),l,u)}class zc extends Pm{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}function ED(t,e,n,r){const i=t.ya(1,e,n);$m("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();Ii(r,(l,u)=>{const c=Lm(e,l,n);u=ye(u);const d=i.da(c);if(u instanceof zc)s.push(c);else{const f=za(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new fn(s);return new ZE(o,a,i.fieldTransforms)}function TD(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Rf(e,r,n)],l=[i];if(s.length%2!=0)throw new P(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Rf(e,s[f])),l.push(s[f+1]);const u=[],c=mt.empty();for(let f=a.length-1;f>=0;--f)if(!iT(u,a[f])){const m=a[f];let v=l[f];v=ye(v);const _=o.da(m);if(v instanceof zc)u.push(m);else{const T=za(v,_);T!=null&&(u.push(m),c.set(m,T))}}const d=new fn(u);return new ZE(c,d,o.fieldTransforms)}function kD(t,e,n,r=!1){return za(n,t.ya(r?4:3,e))}function za(t,e){if(rT(t=ye(t)))return $m("Unsupported field value:",e,t),nT(t,e);if(t instanceof Pm)return function(n,r){if(!eT(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=za(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _A(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:Mu(r.serializer,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mu(r.serializer,i)}}if(n instanceof Om)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Is)return{bytesValue:EE(r.serializer,n._byteString)};if(n instanceof ct){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${jc(n)}`)}(t,e)}function nT(t,e){const n={};return G1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ii(t,(r,i)=>{const s=za(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Om||t instanceof Is||t instanceof ct||t instanceof Pm)}function $m(t,e,n){if(!rT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=jc(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Rf(t,e,n){if((e=ye(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return Lm(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const SD=new RegExp("[~\\*/\\[\\]]");function Lm(t,e,n){if(e.search(SD)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uc(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(k.INVALID_ARGUMENT,a+t+l)}function iT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ID(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ID extends sT{data(){return super.data()}}function jm(t,e){return typeof e=="string"?Lm(t,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mm{}class CD extends Mm{}function oT(t,e,...n){let r=[];e instanceof Mm&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Um).length,o=i.filter(a=>a instanceof Bc).length;if(s>1||s>0&&o>0)throw new P(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bc extends CD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bc(e,n,r)}_apply(e){const n=this._parse(e);return lT(e._query,n),new Us(e.firestore,e.converter,wf(e._query,n))}_parse(e){const n=Fc(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new P(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){bv(c,u);const f=[];for(const m of c)f.push(Ov(a,i,m));d={arrayValue:{values:f}}}else d=Ov(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||bv(c,u),d=kD(o,s,c,u==="in"||u==="not-in");return Ce.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function aT(t,e,n){const r=e,i=jm("where",t);return Bc._create(i,r,n)}class Um extends Mm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Um(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)lT(s,a),s=wf(s,a)}(e._query,n),new Us(e.firestore,e.converter,wf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ov(t,e,n){if(typeof(n=ye(n))=="string"){if(n==="")throw new P(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iE(e)&&n.indexOf("/")!==-1)throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!$.isDocumentKey(r))throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rv(t,new $(r))}if(n instanceof ct)return rv(t,n._key);throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jc(n)}.`)}function bv(t,e){if(!Array.isArray(t)||t.length===0)throw new P(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lT(t,e){if(e.isInequality()){const r=mm(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new P(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=rE(t);s!==null&&ND(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ND(t,e,n){if(!n.isEqual(e))throw new P(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class RD{convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Om(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ua(e));default:return null}}convertTimestamp(e){const n=Or(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);ce(xE(r));const i=new ca(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cT extends sT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hl extends cT{data(e={}){return super.data(e)}}class AD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new go(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hl(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Hl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new go(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Hl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new go(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:DD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){t=Jt(t,ct);const e=Jt(t.firestore,Ci);return dD(Dm(e),t._key).then(n=>$D(e,t,n))}class hT extends RD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function Vc(t){t=Jt(t,Us);const e=Jt(t.firestore,Ci),n=Dm(e),r=new hT(e);return xD(t._query),fD(n,t._query).then(i=>new AD(e,r,t,i))}function PD(t,e,n){t=Jt(t,ct);const r=Jt(t.firestore,Ci),i=uT(t.converter,e,n);return Hc(r,[tT(Fc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Mt.none())])}function dT(t,e,n,...r){t=Jt(t,ct);const i=Jt(t.firestore,Ci),s=Fc(i);let o;return o=typeof(e=ye(e))=="string"||e instanceof Uc?TD(s,"updateDoc",t._key,e,n,r):ED(s,"updateDoc",t._key,e),Hc(i,[o.toMutation(t._key,Mt.exists(!0))])}function OD(t){return Hc(Jt(t.firestore,Ci),[new gm(t._key,Mt.none())])}function bD(t,e){const n=Jt(t.firestore,Ci),r=Fs(t),i=uT(t.converter,e);return Hc(n,[tT(Fc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function Hc(t,e){return function(n,r){const i=new jn;return n.asyncQueue.enqueueAndForget(async()=>J2(await hD(n),r,i)),i.promise}(Dm(t),e)}function $D(t,e,n){const r=n.docs.get(e._key),i=new hT(t);return new cT(t,i,e._key,r,new go(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ls=n})(ki),fi(new Dr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ci(new UR(n.getProvider("auth-internal")),new VR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),yn(Jy,"3.12.2",t),yn(Jy,"3.12.2","esm2017")})();function zm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LD=fT,pT=new Ta("auth","Firebase",fT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Lp("@firebase/auth");function jD(t,...e){zu.logLevel<=J.WARN&&zu.warn(`Auth (${ki}): ${t}`,...e)}function Wl(t,...e){zu.logLevel<=J.ERROR&&zu.error(`Auth (${ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw Bm(t,...e)}function _n(t,...e){return Bm(t,...e)}function MD(t,e,n){const r=Object.assign(Object.assign({},LD()),{[e]:n});return new Ta("auth","Firebase",r).create(e,{appName:t.name})}function Bm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pT.create(t,...e)}function j(t,e,...n){if(!t)throw Bm(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wl(e),new Error(e)}function qn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UD(){return $v()==="http:"||$v()==="https:"}function $v(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UD()||hC()||"connection"in navigator)?navigator.onLine:!0}function zD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=uC()||dC()}get(){return FD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new Ba(3e4,6e4);function Ni(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ri(t,e,n,r,i={}){return gT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ka(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mT.fetch()(yT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function gT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BD),e);try{const i=new HD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Tl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw MD(t,c,u);Zt(t,c)}}catch(i){if(i instanceof Sn)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function Va(t,e,n,r,i={}){const s=await Ri(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vm(t.config,i):`${t.config.apiScheme}://${i}`}class HD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),VD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function qD(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KD(t,e=!1){const n=ye(t),r=await n.getIdToken(e),i=Hm(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Do(Vh(i.auth_time)),issuedAtTime:Do(Vh(i.iat)),expirationTime:Do(Vh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vh(t){return Number(t)*1e3}function Hm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ow(n);return i?JSON.parse(i):(Wl("Failed to decode base64 JWT payload"),null)}catch(i){return Wl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function GD(t){const e=Hm(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&QD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Do(this.lastLoginAt),this.creationTime=Do(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pa(t,qD(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZD(s.providerUserInfo):[],a=JD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function XD(t){const e=ye(t);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZD(t){return t.map(e=>{var{providerId:n}=e,r=zm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){const n=await gT(t,{},async()=>{const r=ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ma;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ma,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class si{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pa(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KD(this,e)}reload(){return XD(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new si(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pa(this,WD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:x,providerData:C,stsTokenManager:N}=n;j(y&&N,e,"internal-error");const A=ma.fromJSON(this.name,N);j(typeof y=="string",e,"internal-error"),tr(d,e.name),tr(f,e.name),j(typeof w=="boolean",e,"internal-error"),j(typeof x=="boolean",e,"internal-error"),tr(m,e.name),tr(v,e.name),tr(_,e.name),tr(T,e.name),tr(g,e.name),tr(p,e.name);const ee=new si({uid:y,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:x,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:A,createdAt:g,lastLoginAt:p});return C&&Array.isArray(C)&&(ee.providerData=C.map(H=>Object.assign({},H))),T&&(ee._redirectEventId=T),ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new ma;i.updateFromServerResponse(n);const s=new si({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new Map;function $n(t){qn(t instanceof Function,"Expected a class definition");let e=Lv.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_T.type="NONE";const jv=_T;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us($n(jv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$n(jv);const o=ql(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=si._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new us(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new us(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ST(e))return"Blackberry";if(IT(e))return"Webos";if(Wm(e))return"Safari";if((e.includes("chrome/")||ET(e))&&!e.includes("edge/"))return"Chrome";if(kT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wT(t=rt()){return/firefox\//i.test(t)}function Wm(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ET(t=rt()){return/crios\//i.test(t)}function TT(t=rt()){return/iemobile/i.test(t)}function kT(t=rt()){return/android/i.test(t)}function ST(t=rt()){return/blackberry/i.test(t)}function IT(t=rt()){return/webos/i.test(t)}function Wc(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tP(t=rt()){var e;return Wc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nP(){return fC()&&document.documentMode===10}function xT(t=rt()){return Wc(t)||kT(t)||IT(t)||ST(t)||/windows phone/i.test(t)||TT(t)}function rP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t,e=[]){let n;switch(t){case"Browser":n=Mv(rt());break;case"Worker":n=`${Mv(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}async function NT(t,e){return Ri(t,"GET","/v2/recaptchaConfig",Ni(t,e))}function Uv(t){return t!==void 0&&t.enterprise!==void 0}class RT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function AT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iP().appendChild(r)})}function sP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const oP="https://www.google.com/recaptcha/enterprise.js?render=",aP="recaptcha-enterprise",lP="NO_RECAPTCHA";class DT{constructor(e){this.type=aP,this.auth=Ai(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{NT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new RT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Uv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(lP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Uv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}AT(oP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xs(t,e,n,r=!1){const i=new DT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fv(this),this.idTokenSubscription=new Fv(this),this.beforeStateQueue=new uP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ye(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}async initializeRecaptchaConfig(){const e=await NT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new RT(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new DT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ai(t){return ye(t)}class Fv{constructor(e){this.auth=e,this.observer=null,this.addObserver=wC(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t,e){const n=dc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Iu(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function dP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fP(t,e,n){const r=Ai(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=PT(e),{host:o,port:a}=pP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mP()}function PT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pP(t){const e=PT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zv(o)}}}function zv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function gP(t,e){return Ri(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e){return Va(t,"POST","/v1/accounts:signInWithPassword",Ni(t,e))}async function yP(t,e){return Ri(t,"POST","/v1/accounts:sendOobCode",Ni(t,e))}async function Wh(t,e){return yP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",Ni(t,e))}async function _P(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",Ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends qm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await xs(e,r,"signInWithPassword");return Hh(e,i)}else return Hh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await xs(e,r,"signInWithPassword");return Hh(e,s)}else return Promise.reject(i)});case"emailLink":return vP(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return gP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _P(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e){return Va(t,"POST","/v1/accounts:signInWithIdp",Ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="http://localhost";class yi extends qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:wP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ka(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TP(t){const e=uo(co(t)).link,n=e?uo(co(e)).deep_link_id:null,r=uo(co(t)).deep_link_id;return(r?uo(co(r)).link:null)||r||n||e||t}class Km{constructor(e){var n,r,i,s,o,a;const l=uo(co(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=EP((i=l.mode)!==null&&i!==void 0?i:null);j(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TP(e);try{return new Km(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Km.parseLink(n);return j(r,"argument-error"),ga._fromEmailAndCode(e,r.code,r.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends OT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ha{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ha{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ha{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(t,e){return Va(t,"POST","/v1/accounts:signUp",Ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await si._fromIdTokenResponse(e,r,i),o=Bv(r);return new vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bv(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends Sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vu(e,n,r,i)}}function bT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(t,s,e,r):s})}async function kP(t,e,n=!1){const r=await pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await pa(t,bT(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=Hm(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t,e,n=!1){const r="signIn",i=await bT(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function IP(t,e){return $T(Ai(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e,n){var r;j(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e,n){var r;const i=Ai(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await xs(i,s,"getOobCode",!0);n&&Kh(i,o,n),await Wh(i,o)}else n&&Kh(i,s,n),await Wh(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await xs(i,s,"getOobCode",!0);n&&Kh(i,a,n),await Wh(i,a)}else return Promise.reject(o)})}async function CP(t,e,n){var r;const i=Ai(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await xs(i,s,"signUpPassword");o=qh(i,u)}else o=qh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await xs(i,s,"signUpPassword");return qh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await vi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function NP(t,e,n){return IP(ye(t),zs.credential(e,n))}function RP(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function AP(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function DP(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}function PP(t){return ye(t).signOut()}const Hu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(){const t=rt();return Wm(t)||Wc(t)}const bP=1e3,$P=10;class jT extends LT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OP()&&rP(),this.fallbackToPolling=xT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$P):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jT.type="LOCAL";const LP=jT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends LT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MT.type="SESSION";const UT=MT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await jP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Gm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function UP(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function FP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BP(){return FT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="firebaseLocalStorageDb",VP=1,Wu="firebaseLocalStorage",BT="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kc(t,e){return t.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function HP(){const t=indexedDB.deleteDatabase(zT);return new Wa(t).toPromise()}function Df(){const t=indexedDB.open(zT,VP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wu,{keyPath:BT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wu)?e(r):(r.close(),await HP(),e(await Df()))})})}async function Vv(t,e,n){const r=Kc(t,!0).put({[BT]:e,value:n});return new Wa(r).toPromise()}async function WP(t,e){const n=Kc(t,!1).get(e),r=await new Wa(n).toPromise();return r===void 0?null:r.value}function Hv(t,e){const n=Kc(t,!0).delete(e);return new Wa(n).toPromise()}const qP=800,KP=3;class VT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(BP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FP(),!this.activeServiceWorker)return;this.sender=new MP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Df();return await Vv(e,Hu,"1"),await Hv(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kc(i,!1).getAll();return new Wa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VT.type="LOCAL";const GP=VT;new Ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t,e){return e?$n(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YP(t){return $T(t.auth,new Qm(t),t.bypassAuthState)}function XP(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),SP(n,new Qm(t),t.bypassAuthState)}async function JP(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),kP(n,new Qm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YP;case"linkViaPopup":case"linkViaRedirect":return JP;case"reauthViaPopup":case"reauthViaRedirect":return XP;default:Zt(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=new Ba(2e3,1e4);class Ji extends HT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZP.get())};e()}}Ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="pendingRedirect",Kl=new Map;class tO extends HT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kl.get(this.auth._key());if(!e){try{const r=await nO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kl.set(this.auth._key(),e)}return this.bypassAuthState||Kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nO(t,e){const n=sO(e),r=iO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rO(t,e){Kl.set(t._key(),e)}function iO(t){return $n(t._redirectPersistence)}function sO(t){return ql(eO,t.config.apiKey,t.name)}async function oO(t,e,n=!1){const r=Ai(t),i=QP(r,e),o=await new tO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=10*60*1e3;class lO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wv(e))}saveEventToCache(e){this.cachedEventUids.add(Wv(e)),this.lastProcessedEventTime=Date.now()}}function Wv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dO=/^https?/;async function fO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cO(t);for(const n of e)try{if(pO(n))return}catch{}Zt(t,"unauthorized-domain")}function pO(t){const e=Af(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dO.test(n))return!1;if(hO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=new Ba(3e4,6e4);function qv(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gO(t){return new Promise((e,n)=>{var r,i,s;function o(){qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qv(),n(_n(t,"network-request-failed"))},timeout:mO.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const a=sP("iframefcb");return wn()[a]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},AT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gl=null,e})}let Gl=null;function yO(t){return Gl=Gl||gO(t),Gl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new Ba(5e3,15e3),_O="__/auth/iframe",wO="emulator/auth/iframe",EO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kO(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vm(e,wO):`https://${t.config.authDomain}/${_O}`,r={apiKey:e.apiKey,appName:t.name,v:ki},i=TO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ka(r).slice(1)}`}async function SO(t){const e=await yO(t),n=wn().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:kO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),a=wn().setTimeout(()=>{s(o)},vO.get());function l(){wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xO=500,CO=600,NO="_blank",RO="http://localhost";class Kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AO(t,e,n,r=xO,i=CO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},IO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(a=ET(u)?NO:n),wT(u)&&(e=e||RO,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(tP(u)&&a!=="_self")return DO(e||"",a),new Kv(null);const d=window.open(e||"",a,c);j(d,t,"popup-blocked");try{d.focus()}catch{}return new Kv(d)}function DO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="__/auth/handler",OO="emulator/auth/handler",bO=encodeURIComponent("fac");async function Gv(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:i};if(e instanceof OT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_C(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ha){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${bO}=${encodeURIComponent(l)}`:"";return`${$O(t)}?${ka(a).slice(1)}${u}`}function $O({config:t}){return t.emulator?Vm(t,OO):`https://${t.authDomain}/${PO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="webStorageSupport";class LO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UT,this._completeRedirectFn=oO,this._overrideRedirectResult=rO}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gv(e,n,r,Af(),i);return AO(e,o,Gm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gv(e,n,r,Af(),i);return UP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SO(e),r=new lO(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gh,{type:Gh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gh];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xT()||Wm()||Wc()}}const jO=LO;var Qv="@firebase/auth",Yv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FO(t){fi(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CT(t)},u=new cP(r,i,s,l);return dP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new Dr("auth-internal",e=>{const n=Ai(e.getProvider("auth").getImmediate());return(r=>new MO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Qv,Yv,UO(t)),yn(Qv,Yv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=5*60,BO=jw("authIdTokenMaxAge")||zO;let Xv=null;const VO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BO)return;const i=n==null?void 0:n.token;Xv!==i&&(Xv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ym(t=Mp()){const e=dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hP(t,{popupRedirectResolver:jO,persistence:[GP,LP,UT]}),r=jw("authTokenSyncURL");if(r){const s=VO(r);AP(n,s,()=>s(n.currentUser)),RP(n,o=>s(o))}const i=bw("auth");return i&&fP(n,`http://${i}`),n}FO("Browser");const HO={apiKey:"AIzaSyDLnSGDReY1lEhgSrHIR940Sq4C5JgW07A",authDomain:"promises-land.firebaseapp.com",projectId:"promises-land",storageBucket:"promises-land.appspot.com",messagingSenderId:"753970973339",appId:"1:753970973339:web:3f27bfd975ceff3ee7943e"},qT=zw(HO),Tn=yD(qT),ti=Ym(qT),KT=Vt.createContext(),zt=()=>E.useContext(KT),WO=({children:t})=>{const[e,n]=E.useState();function r(a,l){return CP(ti,a,l)}function i(a,l){return NP(ti,a,l)}function s(){return PP(ti)}E.useEffect(()=>DP(ti,l=>{n(l)}));const o={currentUser:e,register:r,login:i,logout:s};return h.jsx(KT.Provider,{value:o,children:t})},qO=()=>{const t=Ti(),{currentUser:e}=zt();return h.jsx(h.Fragment,{children:e?h.jsx($p,{}):h.jsx(Rw,{to:"/login",state:{from:t},replace:!0})})},KO="_layout_1vjnw_1",GO="_navbar_1vjnw_25",QO="_page_content_1vjnw_39",YO="_footer_1vjnw_47",XO="_titleBox_1vjnw_69",kl={layout:KO,navbar:GO,page_content:QO,footer:YO,titleBox:XO};let JO={data:""},ZO=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||JO,eb=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,tb=/\/\*[^]*?\*\/|  +/g,Jv=/\n+/g,cr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?cr(o,s):s+"{"+cr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=cr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=cr.p?cr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},xn={},GT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+GT(t[n]);return e}return t},nb=(t,e,n,r,i)=>{let s=GT(t),o=xn[s]||(xn[s]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(s));if(!xn[o]){let l=s!==t?t:(u=>{let c,d,f=[{}];for(;c=eb.exec(u.replace(tb,""));)c[4]?f.shift():c[3]?(d=c[3].replace(Jv," ").trim(),f.unshift(f[0][d]=f[0][d]||{})):f[0][c[1]]=c[2].replace(Jv," ").trim();return f[0]})(t);xn[o]=cr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&xn.g?xn.g:null;return n&&(xn.g=xn[o]),((l,u,c,d)=>{d?u.data=u.data.replace(d,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(xn[o],e,r,a),o},rb=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":cr(a,""):a===!1?"":a}return r+i+(o??"")},"");function Gc(t){let e=this||{},n=t.call?t(e.p):t;return nb(n.unshift?n.raw?rb(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,ZO(e.target),e.g,e.o,e.k)}let QT,Pf,Of;Gc.bind({g:1});let Kn=Gc.bind({k:1});function ib(t,e,n,r){cr.p=e,QT=t,Pf=n,Of=r}function zr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:Pf&&Pf()},a),n.o=/ *go\d+/.test(l),a.className=Gc.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),Of&&u[0]&&Of(a),QT(u,a)}return e?e(i):i}}var sb=t=>typeof t=="function",qu=(t,e)=>sb(t)?t(e):t,ob=(()=>{let t=0;return()=>(++t).toString()})(),YT=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),ab=20,Ql=new Map,lb=1e3,Zv=t=>{if(Ql.has(t))return;let e=setTimeout(()=>{Ql.delete(t),Di({type:4,toastId:t})},lb);Ql.set(t,e)},ub=t=>{let e=Ql.get(t);e&&clearTimeout(e)},bf=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,ab)};case 1:return e.toast.id&&ub(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?bf(t,{type:1,toast:n}):bf(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Zv(r):t.toasts.forEach(s=>{Zv(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Yl=[],Xl={toasts:[],pausedAt:void 0},Di=t=>{Xl=bf(Xl,t),Yl.forEach(e=>{e(Xl)})},cb={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},hb=(t={})=>{let[e,n]=E.useState(Xl);E.useEffect(()=>(Yl.push(n),()=>{let i=Yl.indexOf(n);i>-1&&Yl.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||cb[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},db=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||ob()}),qa=t=>(e,n)=>{let r=db(e,t,n);return Di({type:2,toast:r}),r.id},W=(t,e)=>qa("blank")(t,e);W.error=qa("error");W.success=qa("success");W.loading=qa("loading");W.custom=qa("custom");W.dismiss=t=>{Di({type:3,toastId:t})};W.remove=t=>Di({type:4,toastId:t});W.promise=(t,e,n)=>{let r=W.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(W.success(qu(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{W.error(qu(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var fb=(t,e)=>{Di({type:1,toast:{id:t,height:e}})},pb=()=>{Di({type:5,time:Date.now()})},mb=t=>{let{toasts:e,pausedAt:n}=hb(t);E.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&W.dismiss(a.id);return}return setTimeout(()=>W.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=E.useCallback(()=>{n&&Di({type:6,time:Date.now()})},[n]),i=E.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},c=e.filter(m=>(m.position||u)===(s.position||u)&&m.height),d=c.findIndex(m=>m.id===s.id),f=c.filter((m,v)=>v<d&&m.visible).length;return c.filter(m=>m.visible).slice(...a?[f+1]:[0,f]).reduce((m,v)=>m+(v.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:fb,startPause:pb,endPause:r,calculateOffset:i}}},gb=Kn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,yb=Kn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,vb=Kn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_b=zr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${yb} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${vb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,wb=Kn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Eb=zr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${wb} 1s linear infinite;
`,Tb=Kn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,kb=Kn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Sb=zr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Tb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${kb} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ib=zr("div")`
  position: absolute;
`,xb=zr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Cb=Kn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Nb=zr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Cb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Rb=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(Nb,null,e):e:n==="blank"?null:E.createElement(xb,null,E.createElement(Eb,{...r}),n!=="loading"&&E.createElement(Ib,null,n==="error"?E.createElement(_b,{...r}):E.createElement(Sb,{...r})))},Ab=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Db=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Pb="0%{opacity:0;} 100%{opacity:1;}",Ob="0%{opacity:1;} 100%{opacity:0;}",bb=zr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,$b=zr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Lb=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=YT()?[Pb,Ob]:[Ab(n),Db(n)];return{animation:e?`${Kn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Kn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},jb=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?Lb(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(Rb,{toast:t}),o=E.createElement($b,{...t.ariaProps},qu(t.message,t));return E.createElement(bb,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});ib(E.createElement);var Mb=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},Ub=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:YT()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},Fb=Gc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Sl=16,Qc=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=mb(n);return E.createElement("div",{style:{position:"fixed",zIndex:9999,top:Sl,left:Sl,right:Sl,bottom:Sl,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let c=u.position||e,d=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),f=Ub(c,d);return E.createElement(Mb,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?Fb:"",style:f},u.type==="custom"?qu(u.message,u):i?i(u):E.createElement(jb,{toast:u,position:c}))}))};const zb=()=>{const{currentUser:t}=zt();return h.jsxs("div",{className:kl.layout,children:[t?h.jsx("div",{className:kl.navbar,children:h.jsx(qb,{})}):null,h.jsxs("div",{className:kl.page_content,children:[h.jsx(Qc,{}),h.jsx($p,{})]}),t?h.jsx("div",{className:kl.footer,children:h.jsx(Xb,{})}):null]})},Bb="_navbar_o2irj_1",Vb="_navLogo_o2irj_21",Hb="_name_o2irj_41",Wb="_logoutBtn_o2irj_51",Il={navbar:Bb,navLogo:Vb,name:Hb,logoutBtn:Wb},qb=()=>{const{logout:t}=zt();return h.jsxs("div",{className:Il.navbar,children:[h.jsxs("div",{className:Il.navLogo,children:[h.jsx("img",{src:"/assets/logo_transparent.png",alt:"Logo CoTravel"}),h.jsx("h1",{className:Il.name,children:"CoTravel"})]}),h.jsx("button",{className:Il.logoutBtn,onClick:t,type:"button",children:"Wyloguj się"})]})},Kb="_footer_1hocy_1",Gb="_link_1hocy_27",Qb="_active_1hocy_43",Yb="_icon_1hocy_75",Tt={footer:Kb,link:Gb,active:Qb,icon:Yb},Xb=()=>{const{pathname:t}=Ti();return h.jsxs("div",{className:Tt.footer,children:[h.jsx($e,{className:t==="/"?Tt.active:"",to:"/",children:h.jsxs("div",{className:Tt.link,children:[h.jsx("img",{className:Tt.icon,src:t==="/"?"/assets/icons/home-circle-light.svg":"/assets/icons/home-circle-dark.svg",alt:"Ikona skrótu do Home"}),h.jsx("span",{children:"Home"})]})}),h.jsx($e,{className:t==="/alltrips"?Tt.active:"",to:"/alltrips",children:h.jsxs("div",{className:Tt.link,children:[h.jsx("img",{className:Tt.icon,src:t==="/alltrips"?"/assets/icons/airplane-light.svg":"/assets/icons/airplane-dark.svg",alt:"Ikona skrótu do Podróżuj"}),h.jsx("span",{children:"Podróżuj"})]})}),h.jsx($e,{className:t==="/mytrips/ownedtrips"||t==="/mytrips/joinedtrips"?Tt.active:"",to:"/mytrips/ownedtrips",children:h.jsxs("div",{className:Tt.link,children:[h.jsx("img",{className:Tt.icon,src:t==="/mytrips/ownedtrips"||t==="/mytrips/joinedtrips"?"/assets/icons/auto-mode-light.svg":"/assets/icons/auto-mode-dark.svg",alt:"Ikona skrótu do Moje Podróże"}),h.jsx("span",{children:"Moje podróże"})]})}),h.jsx($e,{className:t==="/userprofile"?Tt.active:null,to:"/userprofile",children:h.jsxs("div",{className:Tt.link,children:[h.jsx("img",{className:Tt.icon,src:t==="/userprofile"?"/assets/icons/account-circle-light.svg":"/assets/icons/account-circle-dark.svg",alt:"Ikona skrótu do Profil"}),h.jsx("span",{children:"Profil"})]})})]})},Jb="_container_u4zaa_1",Zb="_greetingBox_u4zaa_25",e$="_greeting_u4zaa_25",t$="_hexagon_u4zaa_55",n$="_hexagontent_u4zaa_123",r$="_ibwsfix_u4zaa_155",i$="_honeycomb_u4zaa_161",s$="_linkshx_u4zaa_179",Fe={container:Jb,greetingBox:Zb,greeting:e$,hexagon:t$,hexagontent:n$,ibwsfix:r$,honeycomb:i$,linkshx:s$},XT=async(t,e)=>{const n=await Fs(Tn,"Users",t);try{const r=await Fm(n);if(r.exists()){const i=r.data();e(i)}}catch(r){console.log(r),W.error("Błąd serwera")}},e0=()=>{const{currentUser:t}=zt(),[e,n]=E.useState();return E.useEffect(()=>{t&&XT(t.uid,n)},[t]),h.jsx(h.Fragment,{children:e?h.jsxs("div",{className:Fe.container,children:[h.jsx("div",{className:Fe.greetingBox,children:h.jsxs("h2",{className:Fe.greeting,children:[h.jsx("span",{children:"Witaj,"}),h.jsx("br",{}),e.firstName," ",e.lastName,"!"]})}),h.jsx("div",{className:Fe.honeycomb,children:h.jsxs("div",{className:Fe.ibwsfix,children:[h.jsx("div",{className:Fe.hexagon,children:h.jsx("div",{className:Fe.hexagontent,children:h.jsxs($e,{to:"/userprofile",className:Fe.linkshx,children:["Mój ",h.jsx("br",{})," profil",h.jsx("img",{src:"./assets/icons/account-circle-dark.svg"})]})})}),h.jsx("div",{className:Fe.hexagon,children:h.jsx("div",{className:Fe.hexagontent,children:h.jsxs($e,{to:"/mytrips/joinedtrips",className:Fe.linkshx,children:["Dołączone podróże",h.jsx("img",{src:"./assets/icons/auto-mode-dark.svg"})]})})}),h.jsx("div",{className:Fe.hexagon,children:h.jsx("div",{className:Fe.hexagontent,children:h.jsxs($e,{to:"/addtrip",className:Fe.linkshx,children:["Stwórz ",h.jsx("br",{})," podróż",h.jsx("img",{src:"./assets/icons/airplane-dark.svg"})]})})}),h.jsx("div",{className:Fe.hexagon,children:h.jsx("div",{className:Fe.hexagontent,children:h.jsxs($e,{to:"/alltrips",className:Fe.linkshx,children:["Szukaj ",h.jsx("br",{})," podróży",h.jsx("img",{src:"./assets/icons/search-airplane.svg"})]})})})]})})]}):null})},o$="_container_mz50e_1",a$="_titleBox_mz50e_7",l$={container:o$,titleBox:a$},u$="_titleBox_19oho_1",c$="_buttonBox_19oho_15",Qh={titleBox:u$,buttonBox:c$},Ka=({sectionTitle:t})=>{const e=Qn();return h.jsxs("div",{className:Qh.titleBox,children:[h.jsx("button",{className:Qh.buttonBox,onClick:()=>e(-1),children:h.jsx("img",{className:Qh.buttonImg,src:"/assets/icons/chevron-left-solid.svg",alt:"Go back"})}),h.jsx("h3",{children:t})]})},h$=()=>h.jsxs("div",{className:l$.container,children:[h.jsx(Ka,{sectionTitle:"Moje podróże"}),h.jsx($p,{})]}),d$="_container_j0a0y_1",f$="_form_j0a0y_23",p$="_label_j0a0y_51",m$="_input_j0a0y_67",g$="_logo_j0a0y_87",y$="_hints_j0a0y_99",v$="_button_j0a0y_127",sn={container:d$,form:f$,label:p$,input:m$,logo:g$,hints:y$,button:v$},Cs={"auth/user-not-found":"Podany użytkownik nie istnieje","auth/wrong-password":"Błędne hasło","auth/too-many-requests":"Zbyt wiele prób błędnego logowania","auth/invalid-email":"Nieprawidłowy email","auth/weak-password":"Hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak specjalny, 1 dużą literę i 1 małą literę","auth/email-already-in-use":"Istnieje już konto zarejestrowane dla tego adresu e-mail"},_$="_GrayButton_1yj2n_1",w$={GrayButton:_$},Xm=({btnText:t,type:e})=>h.jsx("button",{type:e,className:w$.GrayButton,children:t}),E$=()=>{const{login:t,currentUser:e}=zt(),n=async r=>{var o,a;r.preventDefault();const i=(o=r.target)==null?void 0:o.email.value,s=(a=r.target)==null?void 0:a.password.value;try{await t(i,s)}catch(l){W.error("Wystąpił błąd: "+Cs[l.code])}};return h.jsxs(h.Fragment,{children:[h.jsx(Qc,{}),e?h.jsx(Rw,{to:"/"}):h.jsxs("div",{className:sn.container,children:[h.jsx("div",{className:sn.logo,children:h.jsx("img",{src:"/assets/logo_transparent.png",alt:"Logo CoTravel"})}),h.jsxs("form",{onSubmit:n,className:sn.form,children:[h.jsx("h1",{children:"Zaloguj się"}),h.jsx("label",{htmlFor:"",className:sn.label,children:"E-mail"}),h.jsx("input",{type:"text",name:"email",className:sn.input,required:!0}),h.jsx("label",{htmlFor:"",className:sn.label,children:"Hasło"}),h.jsx("input",{type:"password",name:"password",className:sn.input,id:"password",pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?!.*[&%$]).{8,}$",title:"Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę",required:!0}),h.jsxs("p",{className:sn.hints,children:["Twoje hasło musi zawierać 8 znaków, co",h.jsx("br",{})," najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę"]}),h.jsxs("p",{children:["Nie pamiętasz hasła? ",h.jsx($e,{to:"/passwordreminder",children:"Przypomnij"})]}),h.jsx("div",{className:sn.button,children:h.jsx(Xm,{type:"submit",btnText:"Zaloguj się"})}),h.jsxs("p",{className:sn.hints,children:["Nie masz jeszcze konta? ",h.jsx($e,{to:"/register",children:"Utwórz"})]})]})]})]})},T$="_container_cfhpw_1",k$="_header_cfhpw_23",S$="_arrow_cfhpw_43",I$="_form_cfhpw_53",x$="_relative_cfhpw_75",C$="_data_cfhpw_85",N$="_info_cfhpw_111",R$="_label_cfhpw_121",A$="_input_cfhpw_137",D$="_gender_cfhpw_187",P$="_checkBox_cfhpw_221",O$="_button_cfhpw_237",ie={container:T$,header:k$,arrow:S$,form:I$,relative:x$,data:C$,info:N$,label:R$,input:A$,gender:D$,checkBox:P$,button:O$},b$=()=>{const t=Qn(),{register:e}=zt(),n=async i=>{try{if(ti.currentUser){const s=Fs(Tn,"Users",ti.currentUser.uid);await PD(s,i),W.success("Witaj w aplikacji!"),t("/")}}catch(s){s.code?W.error("Wystąpił błąd: "+Cs[s.code]):W.error("Wystąpił błąd: "+s.message)}},r=async i=>{var s,o,a,l,u,c,d;i.preventDefault();try{const f=(s=i.target)==null?void 0:s.email.value,m=(o=i.target)==null?void 0:o.password.value,v=(a=i.target)==null?void 0:a.password_confirm.value,_=(l=i.target)==null?void 0:l.firstName.value,T=(u=i.target)==null?void 0:u.lastName.value,g=(c=i.target)!=null&&c.sexF.checked?"F":"M",p=new Date((d=i.target)==null?void 0:d.birthDate.value);if(_==="")throw new Error("Imię nie może być puste");if(T==="")throw new Error("Nazwisko nie może być puste");if(f==="")throw new Error("Email nie może być pusty");if(m==="")throw new Error("Hasło nie może być puste");if(m!==v)throw new Error("Hasła muszą być takie same");await e(f,m),n({email:f,firstName:_,lastName:T,sex:g,birthDate:p}),i.target.reset()}catch(f){f.code?W.error("Wystąpił błąd: "+Cs[f.code]):W.error("Wystąpił błąd: "+f.message)}};return h.jsxs(h.Fragment,{children:[h.jsx(Qc,{}),h.jsxs("div",{className:ie.container,children:[h.jsxs("header",{className:ie.header,children:[h.jsx($e,{to:"/login",children:h.jsx("img",{className:ie.arrow,src:"/assets/arrow.svg",alt:"Arrow pointing left"})}),h.jsx("h2",{children:"Rejestracja"})]}),h.jsxs("form",{onSubmit:r,className:ie.form,children:[h.jsxs("div",{className:ie.relative,children:[h.jsx("div",{className:ie.data,children:h.jsx("h2",{children:"Dane podstawowe"})}),h.jsxs("div",{className:ie.info,children:[h.jsx("label",{htmlFor:"text",className:ie.label,children:"Imię"}),h.jsx("input",{type:"text",name:"firstName",id:"firstName",className:ie.input}),h.jsx("label",{htmlFor:"text",className:ie.label,children:"Nazwisko"}),h.jsx("input",{type:"text",name:"lastName",id:"lastName",className:ie.input}),h.jsx("label",{htmlFor:"birthDate",className:ie.label,children:"Data urodzenia"}),h.jsx("input",{type:"date",name:"birthDate",id:"birthDate",title:"Data musi zawierać format DD/MM/RRRR",className:ie.input}),h.jsx("p",{children:"Data musi zawierać format DD/MM/RRRR"}),h.jsxs("div",{className:ie.checkBox,children:[h.jsx("input",{type:"radio",name:"sex",id:"sexF",defaultChecked:!0,className:ie.input}),h.jsx("label",{htmlFor:"sexF",className:ie.gender,children:"Kobieta"}),h.jsx("input",{type:"radio",name:"sex",id:"sexM",className:ie.input}),h.jsx("label",{htmlFor:"sexM",className:ie.gender,children:"Mężczyzna"})]})]})]}),h.jsxs("div",{className:ie.relative,children:[h.jsx("div",{className:ie.data,children:h.jsx("h2",{children:"Dane logowania"})}),h.jsxs("div",{className:ie.info,children:[h.jsx("label",{htmlFor:"email",className:ie.label,children:"Adres e-mail"}),h.jsx("input",{type:"email",name:"email",id:"email",className:ie.input}),h.jsx("label",{htmlFor:"password",className:ie.label,children:"Hasło"}),h.jsx("input",{type:"password",name:"password",id:"password",pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?!.*[&%$]).{8,}$",title:"Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę",className:ie.input}),h.jsx("p",{children:"Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę"}),h.jsx("label",{htmlFor:"password_confirm",className:ie.label,children:"Powtórz hasło"}),h.jsx("input",{type:"password",name:"password_confirm",id:"password_confirm",className:ie.input}),h.jsx("p",{children:"Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę"})]})]}),h.jsx("div",{className:ie.button,children:h.jsx(Xm,{btnText:"Zarejestruj się"})})]})]})]})},$$="_container_mg1xi_1",L$="_user_photo_mg1xi_9",j$="_user_profile_container_mg1xi_21",M$="_user_profile_content_mg1xi_39",U$="_icon_edit_profile_mg1xi_57",F$="_icon_edit_photo_mg1xi_65",z$="_user_city_content_mg1xi_79",B$="_icon_city_mg1xi_91",V$="_link_edit_mg1xi_99",Pt={container:$$,user_photo:L$,user_profile_container:j$,user_profile_content:M$,icon_edit_profile:U$,icon_edit_photo:F$,user_city_content:z$,icon_city:B$,link_edit:V$};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="firebasestorage.googleapis.com",ZT="storageBucket",H$=2*60*1e3,W$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends Sn{constructor(e,n,r=0){super(Yh(e),`Firebase Storage: ${n} (${Yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function Yh(t){return"storage/"+t}function Jm(){const t="An unknown error occurred, please check the error payload for server response.";return new we(_e.UNKNOWN,t)}function q$(t){return new we(_e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function K$(t){return new we(_e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function G$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new we(_e.UNAUTHENTICATED,t)}function Q$(){return new we(_e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Y$(t){return new we(_e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function X$(){return new we(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function J$(){return new we(_e.CANCELED,"User canceled the upload/download.")}function Z$(t){return new we(_e.INVALID_URL,"Invalid URL '"+t+"'.")}function eL(t){return new we(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tL(){return new we(_e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ZT+"' property when initializing the app?")}function nL(){return new we(_e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rL(){return new we(_e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iL(t){return new we(_e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $f(t){return new we(_e.INVALID_ARGUMENT,t)}function ek(){return new we(_e.APP_DELETED,"The Firebase app was deleted.")}function sL(t){return new we(_e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Po(t,e){return new we(_e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ro(t){throw new we(_e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=It.makeFromUrl(e,n)}catch{return new It(e,"")}if(r.path==="")return r;throw eL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},_=n===JT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${T}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:m,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<y.length;w++){const x=y[w],C=x.regex.exec(e);if(C){const N=C[x.indices.bucket];let A=C[x.indices.path];A||(A=""),r=new It(N,A),x.postModify(r);break}}if(r==null)throw Z$(e);return r}}class oL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function d(T){i=setTimeout(()=>{i=null,t(m,l())},T)}function f(){s&&clearTimeout(s)}function m(T,...g){if(u){f();return}if(T){f(),c.call(null,T,...g);return}if(l()||o){f(),c.call(null,T,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let v=!1;function _(T){v||(v=!0,f(),!u&&(i!==null?(T||(a=2),clearTimeout(i),d(0)):T||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function lL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t){return t!==void 0}function cL(t){return typeof t=="object"&&!Array.isArray(t)}function Zm(t){return typeof t=="string"||t instanceof String}function t0(t){return eg()&&t instanceof Blob}function eg(){return typeof Blob<"u"&&!cC()}function n0(t,e,n,r){if(r<e)throw $f(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $f(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function tk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oi||(oi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new xl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===oi.NO_ERROR,l=s.getStatus();if(!a||hL(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===oi.ABORT;r(!1,new xl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new xl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Jm();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ek():J$();o(l)}else{const l=X$();o(l)}};this.canceled_?n(!1,new xl(!1,null,!0)):this.backoffId_=aL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yL(t,e,n,r,i,s,o=!0){const a=tk(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return mL(u,e),fL(u,n),pL(u,s),gL(u,r),new dL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _L(...t){const e=vL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(eg())return new Blob(t);throw new we(_e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t){if(typeof atob>"u")throw iL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xh{constructor(e,n){this.data=e,this.contentType=n||null}}function TL(t,e){switch(t){case pn.RAW:return new Xh(nk(e));case pn.BASE64:case pn.BASE64URL:return new Xh(rk(t,e));case pn.DATA_URL:return new Xh(SL(e),IL(e))}throw Jm()}function nk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function kL(t){let e;try{e=decodeURIComponent(t)}catch{throw Po(pn.DATA_URL,"Malformed data URL.")}return nk(e)}function rk(t,e){switch(t){case pn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Po(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case pn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Po(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EL(e)}catch(i){throw i.message.includes("polyfill")?i:Po(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ik{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Po(pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function SL(t){const e=new ik(t);return e.base64?rk(pn.BASE64,e.rest):kL(e.rest)}function IL(t){return new ik(t).contentType}function xL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){let r=0,i="";t0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(t0(this.data_)){const r=this.data_,i=wL(r,e,n);return i===null?null:new hr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new hr(r,!0)}}static getBlob(...e){if(eg()){const n=e.map(r=>r instanceof hr?r.data_:r);return new hr(_L.apply(null,n))}else{const n=e.map(o=>Zm(o)?TL(pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new hr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){let e;try{e=JSON.parse(t)}catch{return null}return cL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ok(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t,e){return e}class ot{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||RL}}let Cl=null;function AL(t){return!Zm(t)||t.length<2?t:ok(t)}function ak(){if(Cl)return Cl;const t=[];t.push(new ot("bucket")),t.push(new ot("generation")),t.push(new ot("metageneration")),t.push(new ot("name","fullPath",!0));function e(s,o){return AL(o)}const n=new ot("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ot("size");return i.xform=r,t.push(i),t.push(new ot("timeCreated")),t.push(new ot("updated")),t.push(new ot("md5Hash",null,!0)),t.push(new ot("cacheControl",null,!0)),t.push(new ot("contentDisposition",null,!0)),t.push(new ot("contentEncoding",null,!0)),t.push(new ot("contentLanguage",null,!0)),t.push(new ot("contentType",null,!0)),t.push(new ot("metadata","customMetadata",!0)),Cl=t,Cl}function DL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new It(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function PL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return DL(r,t),r}function lk(t,e,n){const r=sk(e);return r===null?null:PL(t,r,n)}function OL(t,e,n,r){const i=sk(e);if(i===null||!Zm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),m=tg(f,n,r),v=tk({alt:"media",token:u});return m+v})[0]}function bL(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class uk{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t){if(!t)throw Jm()}function $L(t,e){function n(r,i){const s=lk(t,i,e);return ck(s!==null),s}return n}function LL(t,e){function n(r,i){const s=lk(t,i,e);return ck(s!==null),OL(s,i,t.host,t._protocol)}return n}function hk(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Q$():i=G$():n.getStatus()===402?i=K$(t.bucket):n.getStatus()===403?i=Y$(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function jL(t){const e=hk(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=q$(t.path)),s.serverResponse=i.serverResponse,s}return n}function ML(t,e,n){const r=e.fullServerUrl(),i=tg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new uk(i,s,LL(t,n),o);return a.errorHandler=jL(e),a}function UL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function FL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UL(null,e)),r}function zL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let w=0;w<2;w++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=FL(e,r,i),c=bL(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=hr.getBlob(d,r,f);if(m===null)throw nL();const v={name:u.fullPath},_=tg(s,t.host,t._protocol),T="POST",g=t.maxUploadRetryTime,p=new uk(_,T,$L(t,n),g);return p.urlParams=v,p.headers=o,p.body=m.uploadData(),p.errorHandler=hk(e),p}class BL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ro("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ro("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ro("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ro("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ro("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VL extends BL{initXhr(){this.xhr_.responseType="text"}}function dk(){return new VL}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this._service=e,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _i(e,n)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ok(this._location.path)}get storage(){return this._service}get parent(){const e=CL(this._location.path);if(e===null)return null;const n=new It(this._location.bucket,e);return new _i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sL(e)}}function HL(t,e,n){t._throwIfRoot("uploadBytes");const r=zL(t.storage,t._location,ak(),new hr(e,!0),n);return t.storage.makeRequestWithTokens(r,dk).then(i=>({metadata:i,ref:t}))}function WL(t){t._throwIfRoot("getDownloadURL");const e=ML(t.storage,t._location,ak());return t.storage.makeRequestWithTokens(e,dk).then(n=>{if(n===null)throw rL();return n})}function qL(t,e){const n=NL(t._location.path,e),r=new It(t._location.bucket,n);return new _i(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(t){return/^[A-Za-z]+:\/\//.test(t)}function GL(t,e){return new _i(t,e)}function fk(t,e){if(t instanceof ng){const n=t;if(n._bucket==null)throw tL();const r=new _i(n,n._bucket);return e!=null?fk(r,e):r}else return e!==void 0?qL(t,e):t}function QL(t,e){if(e&&KL(e)){if(t instanceof ng)return GL(t,e);throw $f("To use ref(service, url), the first argument must be a Storage instance.")}else return fk(t,e)}function r0(t,e){const n=e==null?void 0:e[ZT];return n==null?null:It.makeFromBucketSpec(n,t)}function YL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Mw(i,t.app.options.projectId))}class ng{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=JT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=H$,this._maxUploadRetryTime=W$,this._requests=new Set,i!=null?this._bucket=It.makeFromBucketSpec(i,this._host):this._bucket=r0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=r0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){n0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){n0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _i(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new oL(ek());{const o=yL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const i0="@firebase/storage",s0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="storage";function XL(t,e,n){return t=ye(t),HL(t,e,n)}function JL(t){return t=ye(t),WL(t)}function o0(t,e){return t=ye(t),QL(t,e)}function ZL(t=Mp(),e){t=ye(t);const r=dc(t,pk).getImmediate({identifier:e}),i=$w("storage");return i&&ej(r,...i),r}function ej(t,e,n,r={}){YL(t,e,n,r)}function tj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ng(n,r,i,e,ki)}function nj(){fi(new Dr(pk,tj,"PUBLIC").setMultipleInstances(!0)),yn(i0,s0,""),yn(i0,s0,"esm2017")}nj();const rj=()=>{const{currentUser:t}=zt(),[e,n]=E.useState(),[r,i]=E.useState(),s=ZL(),[o,a]=E.useState(),l=async()=>{const c=await Fs(Tn,"Users",t.uid);await Fm(c).then(d=>{n({id:t.uid,...d.data()});const f=o0(s,`usersProfilePhoto/${t.uid}.jpg`);JL(f).then(T=>{a(T)}).catch(T=>{T.code!=="storage/object-not-found"&&W.error("Wystąpił błąd: "+T.message)});const m=new Date,v=d.data().birthDate.toDate(),_=m.getFullYear()-v.getFullYear();i(_)})},u=c=>{const d=c.target.files[0];if(d)try{const f=o0(s,`usersProfilePhoto/${t.uid}.jpg`);XL(f,d).then(()=>{l(),W.success("Zdjęcie profilowe zostało zmienione")})}catch(f){W.error("Wystąpił błąd: "+f.message)}};return E.useEffect(()=>{t&&l()},[t]),h.jsx(h.Fragment,{children:e?h.jsxs("div",{className:Pt.container,children:[h.jsx(Ka,{sectionTitle:"Profil użytkownika"}),h.jsx("div",{className:Pt.user_profile_container,children:h.jsxs("div",{className:Pt.user_profile_content,children:[h.jsx($e,{to:"/editprofile",className:Pt.link_edit,children:h.jsx("img",{src:"/assets/icons/pen.png",className:Pt.icon_edit_profile})}),o?h.jsx("img",{src:o,alt:"user profile",id:"userProfilePhoto",className:Pt.user_photo}):h.jsx("img",{src:"/assets/icons/empty-avatar.png",alt:"empty user profile",id:"emptyUserProfilePhoto",className:Pt.user_photo}),h.jsx("div",{children:h.jsxs("label",{onChange:u,htmlFor:"editAvatarInput",children:[h.jsx("input",{type:"file",id:"editAvatarInput",className:Pt.edit_avatar_input,accept:".jpg",multiple:!1,hidden:!0}),h.jsx("img",{src:"/assets/icons/plus.png",className:Pt.icon_edit_photo})]})}),h.jsxs("div",{className:Pt.user_data_container,children:[e.firstName," ",e.lastName,", ",r]}),e.city?h.jsxs("div",{className:Pt.user_city_content,children:[h.jsx("img",{src:"/assets/icons/location-dot-solid.svg",className:Pt.icon_city}),e.city]}):null]})})]}):null})},ij="_container_jcoe5_1",sj="_form_container_jcoe5_9",oj="_form_jcoe5_9",aj="_title_jcoe5_35",lj="_label_jcoe5_43",uj="_input_jcoe5_55",cj="_checkBox_jcoe5_75",hj="_textarea_jcoe5_89",dj="_btn_container_jcoe5_111",fj="_cancel_btn_jcoe5_125",pj="_save_btn_jcoe5_127",mj="_overlay_jcoe5_171",gj="_modal_jcoe5_195",yj="_close_sign_jcoe5_223",vj="_modal_header_jcoe5_249",_j="_modal_additional_info_jcoe5_259",wj="_actions_jcoe5_267",Ej="_actions_btn_jcoe5_277",Tj="_actions_btn_confirm_jcoe5_301",kj="_actions_btn_cancel_jcoe5_315",q={container:ij,form_container:sj,form:oj,title:aj,label:lj,input:uj,checkBox:cj,textarea:hj,btn_container:dj,cancel_btn:fj,save_btn:pj,overlay:mj,modal:gj,close_sign:yj,modal_header:vj,modal_additional_info:_j,actions:wj,actions_btn:Ej,actions_btn_confirm:Tj,actions_btn_cancel:kj};function Oo(){return Oo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oo.apply(this,arguments)}var Sj=function(e,n){n===void 0&&(n=!0),E.useEffect(function(){if(n){var r=function(s){s.key==="Escape"&&e(s)};return document.addEventListener("keyup",r),function(){n&&document.removeEventListener("keyup",r)}}},[e,n])},Ij=function(e,n){n===void 0&&(n=!0),E.useEffect(function(){if(n){var r=function(){e()};return window.addEventListener("resize",r),function(){n&&window.removeEventListener("resize",r)}}},[e,n])},xj=function(e,n,r){r===void 0&&(r=!0),E.useEffect(function(){if(r){var i=function(o){var a=Array.isArray(e)?e:[e],l=!1;a.forEach(function(u){if(!u.current||u.current.contains(o.target)){l=!0;return}}),o.stopPropagation(),l||n(o)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i),function(){r&&(document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i))}}},[e,n,r])},Cj=function(e,n){n===void 0&&(n=!0),E.useEffect(function(){if(n){var r=function(s){if(s.keyCode===9){var o,a=e==null||(o=e.current)===null||o===void 0?void 0:o.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),l=Array.prototype.slice.call(a);if(l.length===1){s.preventDefault();return}var u=l[0],c=l[l.length-1];s.shiftKey&&document.activeElement===u?(s.preventDefault(),c.focus()):document.activeElement===c&&(s.preventDefault(),u.focus())}};return document.addEventListener("keydown",r),function(){n&&document.removeEventListener("keydown",r)}}},[e,n])},Nj=typeof window<"u"?E.useLayoutEffect:E.useEffect,io={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},Rj=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],Aj=function(e,n,r,i,s){var o=s.offsetX,a=s.offsetY,l=i?8:0,u=r.split(" "),c=e.top+e.height/2,d=e.left+e.width/2,f=n.height,m=n.width,v=c-f/2,_=d-m/2,T="",g="0%",p="0%";switch(u[0]){case"top":v-=f/2+e.height/2+l,T="rotate(180deg)  translateX(50%)",g="100%",p="50%";break;case"bottom":v+=f/2+e.height/2+l,T="rotate(0deg) translateY(-100%) translateX(-50%)",p="50%";break;case"left":_-=m/2+e.width/2+l,T=" rotate(90deg)  translateY(50%) translateX(-25%)",p="100%",g="50%";break;case"right":_+=m/2+e.width/2+l,T="rotate(-90deg)  translateY(-150%) translateX(25%)",g="50%";break}switch(u[1]){case"top":v=e.top,g=e.height/2+"px";break;case"bottom":v=e.top-f+e.height,g=f-e.height/2+"px";break;case"left":_=e.left,p=e.width/2+"px";break;case"right":_=e.left-m+e.width,p=m-e.width/2+"px";break}return v=u[0]==="top"?v-a:v+a,_=u[0]==="left"?_-o:_+o,{top:v,left:_,transform:T,arrowLeft:p,arrowTop:g}},Dj=function(e){var n={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if(typeof e=="string"){var r=document.querySelector(e);r!==null&&(n=r.getBoundingClientRect())}return n},Pj=function(e,n,r,i,s,o){var a=s.offsetX,l=s.offsetY,u={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},c=0,d=Dj(o),f=Array.isArray(r)?r:[r];for((o||Array.isArray(r))&&(f=[].concat(f,Rj));c<f.length;){u=Aj(e,n,f[c],i,{offsetX:a,offsetY:l});var m={top:u.top,left:u.left,width:n.width,height:n.height};if(m.top<=d.top||m.left<=d.left||m.top+m.height>=d.top+d.height||m.left+m.width>=d.left+d.width)c++;else break}return u},Oj=0,bj=function(){var e=document.getElementById("popup-root");return e===null&&(e=document.createElement("div"),e.setAttribute("id","popup-root"),document.body.appendChild(e)),e},Ku=E.forwardRef(function(t,e){var n=t.trigger,r=n===void 0?null:n,i=t.onOpen,s=i===void 0?function(){}:i,o=t.onClose,a=o===void 0?function(){}:o,l=t.defaultOpen,u=l===void 0?!1:l,c=t.open,d=c===void 0?void 0:c,f=t.disabled,m=f===void 0?!1:f,v=t.nested,_=v===void 0?!1:v,T=t.closeOnDocumentClick,g=T===void 0?!0:T,p=t.repositionOnResize,y=p===void 0?!0:p,w=t.closeOnEscape,x=w===void 0?!0:w,C=t.on,N=C===void 0?["click"]:C,A=t.contentStyle,ee=A===void 0?{}:A,H=t.arrowStyle,st=H===void 0?{}:H,Yn=t.overlayStyle,Br=Yn===void 0?{}:Yn,Bs=t.className,Xn=Bs===void 0?"":Bs,Pi=t.position,Vs=Pi===void 0?"bottom center":Pi,D=t.modal,F=D===void 0?!1:D,V=t.lockScroll,he=V===void 0?!1:V,Ee=t.arrow,Jn=Ee===void 0?!0:Ee,en=t.offsetX,Hs=en===void 0?0:en,tn=t.offsetY,Oi=tn===void 0?0:tn,ig=t.mouseEnterDelay,yk=ig===void 0?100:ig,sg=t.mouseLeaveDelay,vk=sg===void 0?100:sg,og=t.keepTooltipInside,_k=og===void 0?!1:og,Ga=t.children,ag=E.useState(d||u),nn=ag[0],lg=ag[1],In=E.useRef(null),wt=E.useRef(null),Vr=E.useRef(null),ug=E.useRef(null),cg=E.useRef("popup-"+ ++Oj),Et=F?!0:!r,Ws=E.useRef(0);Nj(function(){return nn?(ug.current=document.activeElement,hg(),kk(),Ek()):Tk(),function(){clearTimeout(Ws.current)}},[nn]),E.useEffect(function(){typeof d=="boolean"&&(d?Qa():Zn())},[d,m]);var Qa=function(K){nn||m||(lg(!0),setTimeout(function(){return s(K)},0))},Zn=function(K){var ft;!nn||m||(lg(!1),Et&&((ft=ug.current)===null||ft===void 0||ft.focus()),setTimeout(function(){return a(K)},0))},Yc=function(K){K==null||K.stopPropagation(),nn?Zn(K):Qa(K)},Xc=function(K){clearTimeout(Ws.current),Ws.current=setTimeout(function(){return Qa(K)},yk)},wk=function(K){K==null||K.preventDefault(),Yc()},Jc=function(K){clearTimeout(Ws.current),Ws.current=setTimeout(function(){return Zn(K)},vk)},Ek=function(){Et&&he&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},Tk=function(){Et&&he&&(document.getElementsByTagName("body")[0].style.overflow="auto")},kk=function(){var K,ft=wt==null||(K=wt.current)===null||K===void 0?void 0:K.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),Pe=Array.prototype.slice.call(ft)[0];Pe==null||Pe.focus()};E.useImperativeHandle(e,function(){return{open:function(){Qa()},close:function(){Zn()},toggle:function(){Yc()}}});var hg=function(){if(!(Et||!nn)&&!(!(In!=null&&In.current)||!(In!=null&&In.current)||!(wt!=null&&wt.current))){var K=In.current.getBoundingClientRect(),ft=wt.current.getBoundingClientRect(),Pe=Pj(K,ft,Vs,Jn,{offsetX:Hs,offsetY:Oi},_k);if(wt.current.style.top=Pe.top+window.scrollY+"px",wt.current.style.left=Pe.left+window.scrollX+"px",Jn&&Vr.current){var Hr,qs;Vr.current.style.transform=Pe.transform,Vr.current.style.setProperty("-ms-transform",Pe.transform),Vr.current.style.setProperty("-webkit-transform",Pe.transform),Vr.current.style.top=((Hr=st.top)===null||Hr===void 0?void 0:Hr.toString())||Pe.arrowTop,Vr.current.style.left=((qs=st.left)===null||qs===void 0?void 0:qs.toString())||Pe.arrowLeft}}};Sj(Zn,x),Cj(wt,nn&&Et),Ij(hg,y),xj(r?[wt,In]:[wt],Zn,g&&!_);var Sk=function(){for(var K={key:"T",ref:In,"aria-describedby":cg.current},ft=Array.isArray(N)?N:[N],Pe=0,Hr=ft.length;Pe<Hr;Pe++)switch(ft[Pe]){case"click":K.onClick=Yc;break;case"right-click":K.onContextMenu=wk;break;case"hover":K.onMouseEnter=Xc,K.onMouseLeave=Jc;break;case"focus":K.onFocus=Xc,K.onBlur=Jc;break}if(typeof r=="function"){var qs=r(nn);return!!r&&Vt.cloneElement(qs,K)}return!!r&&Vt.cloneElement(r,K)},Ik=function(){var K=Et?io.popupContent.modal:io.popupContent.tooltip,ft={className:"popup-content "+(Xn!==""?Xn.split(" ").map(function(Pe){return Pe+"-content"}).join(" "):""),style:Oo({},K,ee,{pointerEvents:"auto"}),ref:wt,onClick:function(Hr){Hr.stopPropagation()}};return!F&&N.indexOf("hover")>=0&&(ft.onMouseEnter=Xc,ft.onMouseLeave=Jc),ft},dg=function(){return Vt.createElement("div",Object.assign({},Ik(),{key:"C",role:Et?"dialog":"tooltip",id:cg.current}),Jn&&!Et&&Vt.createElement("div",{ref:Vr,style:io.popupArrow},Vt.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(Xn!==""?Xn.split(" ").map(function(K){return K+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:Oo({position:"absolute"},st)},Vt.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),Ga&&typeof Ga=="function"?Ga(Zn,nn):Ga)},xk=!(N.indexOf("hover")>=0),Ck=Et?io.overlay.modal:io.overlay.tooltip,Nk=[xk&&Vt.createElement("div",{key:"O","data-testid":"overlay","data-popup":Et?"modal":"tooltip",className:"popup-overlay "+(Xn!==""?Xn.split(" ").map(function(Ue){return Ue+"-overlay"}).join(" "):""),style:Oo({},Ck,Br,{pointerEvents:g&&_||Et?"auto":"none"}),onClick:g&&_?Zn:void 0,tabIndex:-1},Et&&dg()),!Et&&dg()];return Vt.createElement(Vt.Fragment,null,Sk(),nn&&tx.createPortal(Nk,bj()))});const $j=()=>{const{currentUser:t}=zt(),[e,n]=E.useState(),r=Qn();E.useEffect(()=>{XT(t.uid,n)},[]);const i=a=>{const{firstName:l,lastName:u,birthDate:c,city:d,aboutMe:f}=a.currentTarget.elements;return{firstName:l.value,lastName:u.value,birthDate:new Date(c.value),sex:a.currentTarget.sexF.checked?"F":"M",city:d==null?void 0:d.value,aboutMe:f==null?void 0:f.value}},s=async a=>{a.preventDefault();try{const l=Fs(Tn,"Users",t.uid);await dT(l,i(a)),W.success("Twoje dane zostały poprawnie zapisane"),r("/userprofile")}catch{W.error("Błąd serwera")}},o=a=>{let l=a.toDate().getDate(),u=a.toDate().getMonth()+1;const c=a.toDate().getFullYear();return l<10&&(l="0"+l),u<10&&(u="0"+u),`${c}-${u}-${l}`};return h.jsx(h.Fragment,{children:e?h.jsxs("div",{className:q.container,children:[h.jsx(Ka,{sectionTitle:"Edycja profilu użytkownika"}),h.jsx("div",{className:q.form_container,children:h.jsxs("form",{onSubmit:a=>s(a),className:q.form,children:[h.jsx("h3",{className:q.title,children:"Dane podstawowe"}),h.jsx("label",{htmlFor:"firstName",className:q.label,children:"Imię"}),h.jsx("input",{type:"text",name:"firstName",id:"firstName",className:q.input,defaultValue:e.firstName,required:!0}),h.jsx("label",{htmlFor:"lastName",className:q.label,children:"Nazwisko"}),h.jsx("input",{type:"text",name:"lastName",id:"lastName",className:q.input,defaultValue:e.lastName,required:!0}),h.jsx("label",{htmlFor:"city",className:q.label,children:"Miasto"}),h.jsx("input",{type:"text",name:"city",id:"city",className:q.input,defaultValue:e.city}),h.jsx("label",{htmlFor:"birthDate",className:q.label,children:"Data urodzenia"}),h.jsx("input",{type:"date",name:"birthDate",id:"birthDate",className:q.input,defaultValue:o(e.birthDate),required:!0}),h.jsx("p",{className:q.label,children:"Płeć"}),e.sex==="F"?h.jsxs("div",{className:q.checkBox,children:[h.jsx("input",{type:"radio",name:"sex",id:"sexF",className:q.input,defaultChecked:!0}),h.jsx("label",{htmlFor:"sexF",className:q.gender,children:"Kobieta"}),h.jsx("input",{type:"radio",name:"sex",id:"sexM",className:q.input}),h.jsx("label",{htmlFor:"sexM",className:q.gender,children:"Mężczyzna"})]}):h.jsxs("div",{className:q.checkBox,children:[h.jsx("input",{type:"radio",name:"sex",id:"sexF",className:q.input}),h.jsx("label",{htmlFor:"sexF",className:q.gender,children:"Kobieta"}),h.jsx("input",{type:"radio",name:"sex",id:"sexM",className:q.input,defaultChecked:!0}),h.jsx("label",{htmlFor:"sexM",className:q.gender,children:"Mężczyzna"})]}),h.jsx("h3",{className:q.title,children:"O mnie"}),h.jsx("textarea",{className:q.textarea,type:"text",name:"aboutMe",id:"aboutMe",placeholder:"Napisz coś o sobie...",defaultValue:e.aboutMe}),h.jsxs("div",{className:q.btn_container,children:[h.jsx(Ku,{trigger:h.jsx("button",{type:"button",className:q.cancel_btn,children:"Anuluj"}),modal:!0,nested:!0,children:a=>h.jsx("div",{className:q.overlay,children:h.jsxs("div",{className:q.modal,children:[h.jsx("button",{className:q.close_sign,onClick:a,children:"×"}),h.jsx("div",{className:q.modal_header,children:"Czy na pewno chcesz anulować edycję?"}),h.jsx("p",{className:q.modal_additional_info,children:"Spowoduje to usunięcie wszystkich wprowadzonych danych."}),h.jsxs("div",{className:q.actions,children:[h.jsx("button",{className:`${q.actions_btn} + ${q.actions_btn_cancel}`,onClick:()=>a(),children:"Powrót"}),h.jsx("button",{className:`${q.actions_btn} + ${q.actions_btn_confirm}`,onClick:()=>{r("/userprofile"),W.error("Twoje zmiany nie zostały zapisane"),a()},children:"Potwierdź"})]})]})})}),h.jsx("button",{type:"submit",className:q.save_btn,children:"Zapisz"})]})]})})]}):null})},Lj="_container_n7r09_1",jj="_form_n7r09_19",Mj="_textarea_add_trip_n7r09_33",Uj="_input_add_trip_n7r09_63",Fj="_input_add_title_n7r09_81",zj="_small_notes_n7r09_101",Bj="_buttons_form_n7r09_111",Vj="_dates_n7r09_125",Hj="_places_n7r09_139",Wj="_labels_n7r09_153",qj="_labels_tag_n7r09_163",Kj="_add_trip_header_n7r09_175",Gj="_modal_container_n7r09_185",Qj="_modal_n7r09_185",Yj="_modal_header_n7r09_215",Xj="_modal_content_n7r09_229",Jj="_close_sign_n7r09_241",Zj="_actions_container_n7r09_269",eM="_button_actions_n7r09_281",tM="_button_cancel_n7r09_317",nM="_button_add_n7r09_319",rM="_dates_container_n7r09_363",iM="_places_container_n7r09_365",sM="_participants_container_n7r09_367",oM="_budget_container_n7r09_369",aM="_tags_container_n7r09_371",lM="_describtion_container_n7r09_373",uM="_title_container_n7r09_375",L={container:Lj,form:jj,textarea_add_trip:Mj,input_add_trip:Uj,input_add_title:Fj,small_notes:zj,buttons_form:Bj,dates:Vj,places:Hj,labels:Wj,labels_tag:qj,add_trip_header:Kj,modal_container:Gj,modal:Qj,modal_header:Yj,modal_content:Xj,close_sign:Jj,actions_container:Zj,button_actions:eM,button_cancel:tM,button_add:nM,dates_container:rM,places_container:iM,participants_container:sM,budget_container:oM,tags_container:aM,describtion_container:lM,title_container:uM},mk=["Architektura","Fotografia","Wspinaczka","Nurkowanie","Żeglarstwo","Jazda konna","Muzea","Motoryzacja","Bieganie","Hiking","Surfowanie","Plażowanie","Jedzenie","SPA"],cM="_tags_container_4anj5_1",hM="_tag_4anj5_1",dM="_tag_selected_4anj5_45",Nl={tags_container:cM,tag:hM,tag_selected:dM},gk=({tags:t,selectedTags:e,setSelectedTags:n})=>{const r=E.useRef(),i=s=>{const o=s.target.innerText;e.includes(o)?n(e.filter(a=>a!==o)):n([...e,o])};return E.useEffect(()=>{const s=r.current.children;Array.from(s).forEach(o=>{e.includes(o.innerText)?o.classList.add(Nl.tag_selected):o.classList.remove(Nl.tag_selected)})},[e]),h.jsx("div",{className:Nl.tags_container,ref:r,children:t.map(s=>h.jsx("button",{type:"button",onClick:i,className:Nl.tag,children:s},s))})},fM=()=>{const t=Fa(Tn,"Trips"),[e,n]=E.useState([]),{currentUser:r}=zt(),i=Qn(),s=async a=>{a.preventDefault();try{const l=a.target.title.value,u=a.target.info.value,c=new Date(a.target.startDate.value),d=new Date(a.target.endDate.value),f=a.target.startPlace.value,m=a.target.endPlace.value,v=Number(a.target.maxParticipantsCount.value),_=[r.uid],T=Number(a.target.budget.value),g=e,p=r.uid;if(c>d)throw new Error("Data powrotu nie może być wcześniejsza niż data wylotu");if(c<new Date)throw new Error("Data wylotu nie może być w przeszłości");if(v<1)throw new Error("Podaj poprawną liczbę uczestników");if(T<1)throw new Error("Budżet nie może być mniejszy niż 1 zł");await bD(t,{title:l,info:u,startDate:c,endDate:d,startPlace:f,endPlace:m,maxParticipantsCount:v,participants:_,budget:T,tags:g,owner:p}),W.success("Pomyślnie dodano nową podróż"),i("/mytrips/ownedtrips")}catch(l){W.error("Wystąpił błąd: "+l.message)}},o=a=>{a.preventDefault(),i("/")};return h.jsxs(h.Fragment,{children:[h.jsx("h4",{className:L.add_trip_header,children:"Dane podróży"}),h.jsx(Ku,{trigger:h.jsx("button",{type:"button",className:L.button_back,children:h.jsx("img",{src:"/src/assets/arrow.svg",alt:"arrow"})}),modal:!0,nested:!0,children:a=>h.jsx("div",{className:L.modal_container,children:h.jsxs("div",{className:L.modal,children:[h.jsx("button",{className:L.close_sign,onClick:a,children:"×"}),h.jsxs("div",{className:L.modal_header,children:["Czy na pewno chcesz anulować tworzenie podróży? ",h.jsx("br",{})]}),h.jsx("div",{className:L.modal_content,children:"Spowoduje to usunięcie wszystkich wprowadzonych danych."}),h.jsxs("div",{className:L.actions_container,children:[h.jsx("button",{className:L.button_actions,onClick:()=>{a()},children:"Powrót"}),h.jsx("button",{className:L.button_actions,type:"button",onClick:o,children:"Potwierdź"})]})]})})}),h.jsx("div",{className:L.container,children:h.jsxs("form",{className:L.form,onSubmit:s,children:[h.jsxs("div",{className:L.title_container,children:[h.jsx("label",{htmlFor:"title",className:L.labels,children:"Tytuł*"}),h.jsx("span",{className:L.small_notes,children:" (max. 200 znaków)"}),h.jsx("input",{className:L.input_add_title,type:"text",name:"title",id:"title",placeholder:"np. Wakacje 2023",maxLength:"200",required:!0})]}),h.jsxs("div",{className:L.describtion_container,children:[h.jsx("label",{className:L.labels,children:"Opis podróży*"}),h.jsx("span",{className:L.small_notes,children:" (max. 1500 znaków)"}),h.jsx("textarea",{className:L.textarea_add_trip,type:"text",name:"info",id:"info",placeholder:"Możesz tutaj wpisać plan na swoją wycieczkę...",maxLength:"1500",required:!0})]}),h.jsxs("div",{className:L.places_container,children:[h.jsx("legend",{className:L.labels,children:"Miejsce docelowe*"}),h.jsxs("div",{className:L.places,children:[h.jsx("input",{className:L.input_add_trip,type:"text",name:"startPlace",id:"startPlace",placeholder:"Z",required:!0}),h.jsx("input",{className:L.input_add_trip,type:"text",name:"endPlace",id:"endPlace",placeholder:"Do",required:!0})]})]}),h.jsxs("div",{className:L.dates_container,children:[h.jsx("legend",{className:L.labels,children:"Data"}),h.jsxs("div",{className:L.dates,children:[h.jsx("label",{htmlFor:"startDate",className:L.small_notes,children:"Początek"}),h.jsx("input",{className:L.input_add_trip,type:"date",name:"startDate",id:"startDate",required:!0}),h.jsx("label",{htmlFor:"endDate",className:L.small_notes,children:"Powrót"}),h.jsx("input",{className:L.input_add_trip,type:"date",name:"endDate",id:"endDate",required:!0})]})]}),h.jsxs("div",{className:L.participants_container,children:[h.jsx("label",{htmlFor:"maxParticipantsCount",className:L.labels,children:"Podaj ilość uczestników"}),h.jsx("input",{className:L.input_add_trip,type:"number",name:"maxParticipantsCount",id:"maxParticipantsCount",placeholder:"Podaj liczbę",onWheel:a=>a.target.blur(),required:!0})]}),h.jsxs("div",{className:L.budget_container,children:[h.jsx("legend",{className:L.labels,children:"Budżet"}),h.jsx("label",{htmlFor:"budget",className:L.small_notes,children:"Podaj szacowany koszt podróży per uczestnik"}),h.jsx("input",{className:L.input_add_trip,type:"number",name:"budget",id:"budget",placeholder:"Podaj koszt",onWheel:a=>a.target.blur(),required:!0})]}),h.jsxs("div",{className:L.tags_container,children:[h.jsx("legend",{className:L.labels_tag,children:"Tagi"}),h.jsx("label",{htmlFor:"tags",className:L.small_notes,children:"Dodaj tagi określające charakter i styl Twojej podróży"}),h.jsx(gk,{tags:mk,selectedTags:e,setSelectedTags:n})]}),h.jsxs("div",{className:L.buttons_form,children:[h.jsx(Ku,{trigger:h.jsxs("button",{type:"button",className:L.button_cancel,children:[" ","Anuluj"," "]}),modal:!0,nested:!0,children:a=>h.jsx("div",{className:L.modal_container,children:h.jsxs("div",{className:L.modal,children:[h.jsx("button",{className:L.close_sign,onClick:a,children:"×"}),h.jsxs("div",{className:L.modal_header,children:["Czy na pewno chcesz anulować tworzenie podróży? ",h.jsx("br",{})]}),h.jsx("div",{className:L.modal_content,children:"Spowoduje to usunięcie wszystkich wprowadzonych danych."}),h.jsxs("div",{className:L.actions_container,children:[h.jsx("button",{className:L.button_actions,onClick:()=>{a()},children:"Powrót"}),h.jsx("button",{className:L.button_actions,type:"button",onClick:o,children:"Potwierdź"})]})]})})}),h.jsx("button",{className:L.button_add,children:"Zapisz"})]})]})})]})},pM="_pageContent_ympng_1",mM="_container_ympng_11",gM="_tripsList_ympng_35",yM="_filtersBox_ympng_43",vM="_searchbarBox_ympng_57",_M="_searchbarInput_ympng_75",wM="_searchbarInputIcon_ympng_101",EM="_filtersBtn_ympng_103",Cn={pageContent:pM,container:mM,tripsList:gM,filtersBox:yM,searchbarBox:vM,searchbarInput:_M,searchbarInputIcon:wM,filtersBtn:EM},TM="_tripBox_zz9wh_1",kM="_tripLink_zz9wh_25",SM="_tripLinkOwned_zz9wh_37",IM="_title_zz9wh_49",xM="_oneLine_zz9wh_57",CM="_icon_zz9wh_69",on={tripBox:TM,tripLink:kM,tripLinkOwned:SM,title:IM,oneLine:xM,icon:CM},rg=({id:t,title:e,startDate:n,endDate:r,endPlace:i,owner:s,maxParticipantsCount:o,participants:a,filterOwnership:l})=>{const[u,c]=E.useState(""),{currentUser:d}=zt(),f=()=>{let m="";const v=n.toDate().getDate(),_=n.toDate().getMonth()+1,T=r.toDate().getFullYear(),g=r.toDate().getDate(),p=r.toDate().getMonth()+1,y=r.toDate().getFullYear();T===y&&_===p?m=v+"-"+g+"."+p+"."+y:T===y?m=v+"."+_+"-"+g+"."+p+"."+y:m=v+"."+_+"."+T+"-"+g+"."+p+"."+y,c(m)};return E.useEffect(()=>{f()},[]),h.jsx(h.Fragment,{children:h.jsx("li",{className:on.tripBox,children:h.jsxs($e,{to:`/trip/${t}`,className:l===!0&&s===d.uid?on.tripLinkOwned:on.tripLink,children:[h.jsx("h4",{className:on.title,children:e}),h.jsxs("div",{className:on.oneLine,children:[h.jsx("img",{className:on.icon,src:l===!0&&s===d.uid?"/assets/icons/location-dot-grey.svg":"/assets/icons/location-dot-solid.svg",alt:""}),h.jsx("p",{children:i})]}),h.jsxs("div",{className:on.oneLine,children:[h.jsx("img",{className:on.icon,src:l===!0&&s===d.uid?"/assets/icons/calendar-days-grey.svg":"/assets/icons/calendar-days-regular.svg",alt:""}),h.jsx("p",{children:u})]}),h.jsxs("div",{className:on.oneLine,children:[h.jsx("img",{className:on.icon,src:l===!0&&s===d.uid?"/assets/icons/people-group-grey.svg":"/assets/icons/people-group-solid.svg",alt:""}),h.jsxs("p",{children:["max. ",o||"0"," osób"]})]})]})})})},NM=()=>{zt();const[t,e]=E.useState([]),[n,r]=E.useState([]),[i,s]=E.useState([]),[o,a]=E.useState(""),l=async()=>{try{const m=(await Vc(Fa(Tn,"Trips"))).docs.map(v=>({id:v.id,...v.data()}));e(m),r(m)}catch{W.error("Ta podróż już nie istnieje")}},u=f=>i.every(m=>f.tags.includes(m)),c=(f,m)=>m?f&&f.title.toLowerCase().includes(m.toLowerCase()):!0,d=f=>{a(f);const m=t.filter(u).filter(v=>c(v,f));r(m)};return E.useEffect(()=>{l(),s([])},[]),E.useEffect(()=>{d(o)},[i]),h.jsxs("div",{className:Cn.pageContent,children:[h.jsx(Ka,{sectionTitle:"Podróżuj"}),h.jsxs("div",{className:Cn.container,children:[h.jsxs("div",{className:Cn.filtersBox,children:[h.jsxs("div",{className:Cn.searchbarBox,children:[h.jsx("input",{className:Cn.searchbarInput,onChange:f=>{d(f.target.value)},type:"text",name:"searchbar",placeholder:"Wpisz, czego szukasz"}),h.jsx("div",{className:Cn.searchbarInputIcon,children:h.jsx("img",{src:"/assets/icons/magnifying-glass.svg",alt:"Przycisk szukaj"})})]}),h.jsx("button",{className:Cn.filtersBtn,type:"button",children:h.jsx("img",{src:"/assets/icons/filters.svg",alt:"Filtruj"})}),h.jsx("div",{className:Cn.tagsBox,children:h.jsx(gk,{tags:mk,selectedTags:i,setSelectedTags:s})})]}),h.jsx("ul",{className:Cn.tripsList,children:n?n.map(f=>h.jsx(rg,{...f,filterOwnership:!0},f.id)):h.jsx("p",{children:"Trwa ładowanie."})})]})]})},RM="_container_e0joa_1",AM="_create_container_e0joa_15",DM="_create_details_container_e0joa_27",PM="_create_details_e0joa_27",OM="_create_btn_e0joa_57",bM="_trip_e0joa_81",$M="_buttonBox_e0joa_89",LM="_myTripsLink_e0joa_101",jM="_myTripsLinkActive_e0joa_117",an={container:RM,create_container:AM,create_details_container:DM,create_details:PM,create_btn:OM,trip:bM,buttonBox:$M,myTripsLink:LM,myTripsLinkActive:jM},MM=()=>{const{currentUser:t}=Ym(),[e,n]=E.useState([]),r=oT(Fa(Tn,"Trips"),aT("owner","==",t.uid)),i=async()=>{try{const l=(await Vc(r)).docs.map(u=>({id:u.id,...u.data()}));n(l)}catch(a){W.error("Wystąpił błąd: "+Cs[a.code])}};E.useEffect(()=>{i()},[]);const s=Qn(),o=()=>{s("/addtrip")};return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:an.buttonBox,children:[h.jsx($e,{to:"/mytrips/ownedtrips",className:`${an.myTripsLink} ${an.myTripsLinkActive}`,children:"Moje"}),h.jsx($e,{to:"/mytrips/joinedtrips",className:an.myTripsLink,children:"Dołączone"})]}),h.jsxs("div",{className:an.container,children:[h.jsxs("div",{className:an.create_container,children:[h.jsx("h3",{children:"Stwórz nową podróż"}),h.jsxs("div",{className:an.create_details_container,children:[h.jsxs("p",{className:an.create_details,children:["Dokąd chcesz się wybrać? :) ",h.jsx("br",{}),"Tapnij + aby dodać nową podróż."]}),h.jsx("button",{onClick:o,className:an.create_btn,children:"+"})]})]}),h.jsx("ul",{className:an.trip,children:e?e.map(a=>h.jsx(rg,{...a,filterOwnership:!1},a.id)):null})]})]})},UM="_container_lym9z_1",FM="_trip_lym9z_15",zM="_buttonBox_lym9z_23",BM="_myTripsLink_lym9z_35",VM="_myTripsLinkActive_lym9z_51",Li={container:UM,trip:FM,buttonBox:zM,myTripsLink:BM,myTripsLinkActive:VM},HM=()=>{const{currentUser:t}=Ym(),[e,n]=E.useState([]),r=oT(Fa(Tn,"Trips"),aT("participants","array-contains",t.uid)),i=async()=>{try{const a=(await Vc(r)).docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.owner!==t.uid);n(a)}catch(s){W.error("Wystąpił błąd: "+Cs[s.code])}};return E.useEffect(()=>{i()},[]),h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:Li.buttonBox,children:[h.jsx($e,{to:"/mytrips/ownedtrips",className:Li.myTripsLink,children:"Moje"}),h.jsx($e,{to:"/mytrips/joinedtrips",className:`${Li.myTripsLink} ${Li.myTripsLinkActive}`,children:"Dołączone"})]}),h.jsx("div",{className:Li.container,children:h.jsx("ul",{className:Li.trip,children:e?e.map(s=>h.jsx(rg,{...s,filterOwnership:!1},s.id)):null})})]})},WM="_container_mc2cl_1",qM="_titleBox_mc2cl_11",KM="_tripCard_mc2cl_25",GM="_title_mc2cl_11",QM="_sectionTitle_mc2cl_37",YM="_oneLine_mc2cl_63",XM="_icon_mc2cl_75",JM="_box_mc2cl_83",ZM="_tagsBox_mc2cl_97",e4="_tag_mc2cl_97",t4="_addToTripBtn_mc2cl_115",n4="_owner_mc2cl_137",r4="_addToTripBtnDisabled_mc2cl_147",i4="_deleteTripBtn_mc2cl_149",s4="_overlay_mc2cl_219",o4="_modal_mc2cl_241",a4="_close_sign_mc2cl_269",l4="_modal_header_mc2cl_295",u4="_modal_additional_info_mc2cl_305",c4="_actions_mc2cl_313",h4="_actions_btn_mc2cl_323",d4="_actions_btn_confirm_mc2cl_347",f4="_actions_btn_cancel_mc2cl_361",te={container:WM,titleBox:qM,tripCard:KM,title:GM,sectionTitle:QM,oneLine:YM,icon:XM,box:JM,tagsBox:ZM,tag:e4,addToTripBtn:t4,owner:n4,addToTripBtnDisabled:r4,deleteTripBtn:i4,overlay:s4,modal:o4,close_sign:a4,modal_header:l4,modal_additional_info:u4,actions:c4,actions_btn:h4,actions_btn_confirm:d4,actions_btn_cancel:f4},p4=()=>{const{tripID:t}=Ox(),{currentUser:e}=zt(),[n,r]=E.useState(),[i,s]=E.useState(),[o,a]=E.useState(""),[l,u]=E.useState(),c=Fs(Tn,"Trips",t),d=Qn(),f=async()=>{const p=Fa(Tn,"Users");try{const w=(await Vc(p)).docs.map(x=>({id:x.id,...x.data()}));s(w),m()}catch(y){console.error(y),W.error("Błąd serwera")}},m=async()=>{try{const p=await Fm(c);if(p.exists()){const y=p.data();r(y)}else W.error("Ta wycieczka została usunięta")}catch(p){console.error(p),W.error("Błąd serwera")}},v=()=>{const p=i.filter(y=>n==null?void 0:n.participants.some(w=>y.id.includes(w)));u(p)},_=()=>{let p="";const y=n.startDate.toDate().getDate(),w=n.startDate.toDate().getMonth()+1,x=n.endDate.toDate().getFullYear(),C=n.endDate.toDate().getDate(),N=n.endDate.toDate().getMonth()+1,A=n.endDate.toDate().getFullYear();x===A&&w===N?p=y+"-"+C+"."+N+"."+A:x===A?p=y+"."+w+"-"+C+"."+N+"."+A:p=y+"."+w+"."+x+"-"+C+"."+N+"."+A,a(p)},T=async()=>{try{const p=[...n.participants];p.push(e.uid),await dT(c,{participants:p}),W.success("Dodano do podróży"),d("/mytrips/joinedtrips")}catch{W.error("Błąd serwera")}},g=async()=>{try{await OD(c),W.success("Pomyślnie usunięto wycieczkę"),d("/mytrips/ownedtrips")}catch{W.error("Błąd serwera")}};return E.useEffect(()=>{f()},[]),E.useEffect(()=>{i&&n&&(v(),_())},[i,n]),h.jsx(h.Fragment,{children:l?h.jsxs("div",{className:te.container,children:[h.jsx(Ka,{sectionTitle:"Podróże"}),n.owner===e.uid?h.jsx(Ku,{trigger:h.jsx("button",{className:te.deleteTripBtn,children:" Usuń podróż "}),modal:!0,nested:!0,children:p=>h.jsx("div",{className:te.overlay,children:h.jsxs("div",{className:te.modal,children:[h.jsx("button",{className:te.close_sign,onClick:p,children:"×"}),h.jsx("div",{className:te.modal_header,children:"Czy na pewno chcesz usunąć tę podróż?"}),h.jsx("p",{className:te.modal_additional_info,children:"Spowoduje to trwałe usunięcie podróży."}),h.jsxs("div",{className:te.actions,children:[h.jsx("button",{className:`${te.actions_btn} + ${te.actions_btn_cancel}`,onClick:()=>p(),children:"Powrót"}),h.jsx("button",{className:`${te.actions_btn} + ${te.actions_btn_confirm}`,onClick:()=>{g(),p()},children:"Potwierdź"})]})]})})}):l.some(p=>p.id===e.uid)?null:l&&l.length<n.maxParticipantsCount?h.jsx("button",{className:te.addToTripBtn,onClick:T,children:"Dołącz do podróży"}):h.jsx("button",{className:te.addToTripBtnDisabled,disabled:!0,children:"Dołącz do podróży"}),h.jsxs("div",{className:te.tripCard,children:[h.jsx("h4",{className:te.title,children:n.title}),h.jsxs("div",{className:te.oneLine,children:[h.jsx("img",{className:te.icon,src:"/assets/icons/location-dot-solid.svg",alt:""}),h.jsx("p",{children:n.endPlace})]}),h.jsxs("div",{className:te.oneLine,children:[h.jsx("img",{className:te.icon,src:"/assets/icons/calendar-days-regular.svg",alt:""}),h.jsx("p",{children:o})]}),h.jsx("div",{className:te.tagsBox,children:n.tags.map(p=>h.jsx("span",{className:te.tag,children:p},p))}),h.jsxs("div",{className:te.box,children:[h.jsxs("h4",{className:te.sectionTitle,children:[h.jsx("span",{children:"Uczestnicy"}),h.jsxs("span",{children:["max. ",n.maxParticipantsCount]})]}),l?l.map(p=>p.id===n.owner?h.jsxs("p",{className:te.owner,children:[p.firstName," ",p.lastName," - Organizator"]},p.id):h.jsxs("p",{className:te.participant,children:[p.firstName," ",p.lastName]},p.id)):null]}),h.jsxs("div",{className:te.box,children:[h.jsx("h4",{className:te.sectionTitle,children:"Opis podróży"}),h.jsx("p",{children:n.info})]}),h.jsxs("div",{className:te.box,children:[h.jsx("h4",{className:te.sectionTitle,children:"Budżet"}),h.jsxs("p",{children:[n.budget,",00 zł"]})]})]})]}):h.jsx("p",{children:"Trwa ładowanie"})})},m4="_container_1n40w_1",g4="_header_1n40w_23",y4="_arrow_1n40w_45",v4="_form_1n40w_55",_4="_label_1n40w_79",w4="_input_1n40w_97",E4="_button_1n40w_117",Wr={container:m4,header:g4,arrow:y4,form:v4,label:_4,input:w4,button:E4},T4=()=>{const t=Qn(),e=async n=>{n.preventDefault();try{await xP(ti,n.target.email.value).then(()=>{W.success("Wysłano e-mail z linkiem do resetu hasła",{duration:1e3}),new Promise(r=>setTimeout(r,1500)).then(()=>t("/login"))})}catch(r){W.error("Wystąpił błąd: "+Cs[r.code])}};return h.jsxs("div",{className:Wr.container,children:[h.jsx(Qc,{}),h.jsxs("header",{className:Wr.header,children:[h.jsx($e,{to:"/login",children:h.jsx("img",{className:Wr.arrow,src:"/assets/arrow.svg",alt:"Arrow pointing left"})}),h.jsx("h2",{children:"Przypomnij hasło"})]}),h.jsxs("form",{onSubmit:e,className:Wr.form,children:[h.jsx("label",{htmlFor:"email",className:Wr.label,children:"Podaj adres e-mail"}),h.jsx("input",{type:"email",name:"email",id:"email",className:Wr.input,required:!0}),h.jsx("div",{className:Wr.button,children:h.jsx(Xm,{type:"submit",btnText:"Wyślij"})})]})]})},k4=()=>h.jsxs(Aw,{children:[h.jsx(ze,{path:"/login",element:h.jsx(E$,{})}),h.jsx(ze,{path:"/register",element:h.jsx(b$,{})}),h.jsx(ze,{path:"/passwordreminder",element:h.jsx(T4,{})}),h.jsx(ze,{path:"/",element:h.jsx(zb,{}),children:h.jsxs(ze,{element:h.jsx(qO,{}),children:[h.jsx(ze,{path:"/",element:h.jsx(e0,{})}),h.jsx(ze,{path:"/userprofile",element:h.jsx(rj,{})}),h.jsx(ze,{path:"/editprofile",element:h.jsx($j,{})}),h.jsxs(ze,{path:"/mytrips",element:h.jsx(h$,{}),children:[h.jsx(ze,{path:"/mytrips/ownedtrips",element:h.jsx(MM,{})}),h.jsx(ze,{path:"/mytrips/joinedtrips",element:h.jsx(HM,{})})]}),h.jsx(ze,{path:"/addtrip",element:h.jsx(fM,{})}),h.jsx(ze,{path:"/alltrips",element:h.jsx(NM,{})}),h.jsx(ze,{path:"/trip/:tripID",element:h.jsx(p4,{})}),h.jsx(ze,{path:"*",element:h.jsx(e0,{})})]})})]});Jh.createRoot(document.getElementById("root")).render(h.jsx(Xx,{children:h.jsx(WO,{children:h.jsx(Aw,{children:h.jsx(ze,{path:"/*",element:h.jsx(k4,{})})})})}));
