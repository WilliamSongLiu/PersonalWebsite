(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var mc={exports:{}},wo={},gc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function O_(){if(_p)return ft;_p=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(N,ne,Ie){this.props=N,this.context=ne,this.refs=A,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(N,ne,Ie){this.props=N,this.context=ne,this.refs=A,this.updater=Ie||S}var b=D.prototype=new g;b.constructor=D,T(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,H=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function V(N,ne,Ie){var Q,de={},Se=null,ve=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)H.call(ne,Q)&&!I.hasOwnProperty(Q)&&(de[Q]=ne[Q]);var Te=arguments.length-2;if(Te===1)de.children=Ie;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];de.children=Ue}if(N&&N.defaultProps)for(Q in Te=N.defaultProps,Te)de[Q]===void 0&&(de[Q]=Te[Q]);return{$$typeof:o,type:N,key:Se,ref:ve,props:de,_owner:F.current}}function P(N,ne){return{$$typeof:o,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function k(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ie){return ne[Ie]})}var se=/\/+/g;function te(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):ne.toString(36)}function ce(N,ne,Ie,Q,de){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case o:case e:ve=!0}}if(ve)return ve=N,de=de(ve),N=Q===""?"."+te(ve,0):Q,C(de)?(Ie="",N!=null&&(Ie=N.replace(se,"$&/")+"/"),ce(de,ne,Ie,"",function(Ze){return Ze})):de!=null&&(R(de)&&(de=P(de,Ie+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(se,"$&/")+"/")+N)),ne.push(de)),1;if(ve=0,Q=Q===""?".":Q+":",C(N))for(var Te=0;Te<N.length;Te++){Se=N[Te];var Ue=Q+te(Se,Te);ve+=ce(Se,ne,Ie,Ue,de)}else if(Ue=v(N),typeof Ue=="function")for(N=Ue.call(N),Te=0;!(Se=N.next()).done;)Se=Se.value,Ue=Q+te(Se,Te++),ve+=ce(Se,ne,Ie,Ue,de);else if(Se==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(N,ne,Ie){if(N==null)return N;var Q=[],de=0;return ce(N,Q,"","",function(Se){return ne.call(Ie,Se,de++)}),Q}function oe(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ie)},function(Ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ie)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},z={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(N,ne,Ie){he(N,function(){ne.apply(this,arguments)},Ie)},count:function(N){var ne=0;return he(N,function(){ne++}),ne},toArray:function(N){return he(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=D,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ft.act=re,ft.cloneElement=function(N,ne,Ie){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=T({},N.props),de=N.key,Se=N.ref,ve=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=F.current),ne.key!==void 0&&(de=""+ne.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(Ue in ne)H.call(ne,Ue)&&!I.hasOwnProperty(Ue)&&(Q[Ue]=ne[Ue]===void 0&&Te!==void 0?Te[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Q.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];Q.children=Te}return{$$typeof:o,type:N.type,key:de,ref:Se,props:Q,_owner:ve}},ft.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},ft.createElement=V,ft.createFactory=function(N){var ne=V.bind(null,N);return ne.type=N,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:d,render:N}},ft.isValidElement=R,ft.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:oe}},ft.memo=function(N,ne){return{$$typeof:m,type:N,compare:ne===void 0?null:ne}},ft.startTransition=function(N){var ne=z.transition;z.transition={};try{N()}finally{z.transition=ne}},ft.unstable_act=re,ft.useCallback=function(N,ne){return le.current.useCallback(N,ne)},ft.useContext=function(N){return le.current.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N){return le.current.useDeferredValue(N)},ft.useEffect=function(N,ne){return le.current.useEffect(N,ne)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(N,ne,Ie){return le.current.useImperativeHandle(N,ne,Ie)},ft.useInsertionEffect=function(N,ne){return le.current.useInsertionEffect(N,ne)},ft.useLayoutEffect=function(N,ne){return le.current.useLayoutEffect(N,ne)},ft.useMemo=function(N,ne){return le.current.useMemo(N,ne)},ft.useReducer=function(N,ne,Ie){return le.current.useReducer(N,ne,Ie)},ft.useRef=function(N){return le.current.useRef(N)},ft.useState=function(N){return le.current.useState(N)},ft.useSyncExternalStore=function(N,ne,Ie){return le.current.useSyncExternalStore(N,ne,Ie)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var vp;function kf(){return vp||(vp=1,gc.exports=O_()),gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function B_(){if(xp)return wo;xp=1;var o=kf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,x={},v=null,S=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(x[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:d,key:v,ref:S,props:x,_owner:a.current}}return wo.Fragment=n,wo.jsx=f,wo.jsxs=f,wo}var yp;function k_(){return yp||(yp=1,mc.exports=B_()),mc.exports}var ot=k_(),Rl=kf(),ja={},_c={exports:{}},Cn={},vc={exports:{}},xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function z_(){return Sp||(Sp=1,function(o){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=z[N];if(0<a(ne,ae))z[N]=ae,z[re]=ne,re=N;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var N=0,ne=z.length,Ie=ne>>>1;N<Ie;){var Q=2*(N+1)-1,de=z[Q],Se=Q+1,ve=z[Se];if(0>a(de,re))Se<ne&&0>a(ve,de)?(z[N]=ve,z[Se]=re,N=Se):(z[N]=de,z[Q]=re,N=Q);else if(Se<ne&&0>a(ve,re))z[N]=ve,z[Se]=re,N=Se;else break e}}return ae}function a(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,x=null,v=3,S=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=z)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(z){if(A=!1,b(z),!T)if(n(p)!==null)T=!0,oe(H);else{var ae=n(m);ae!==null&&le(C,ae.startTime-z)}}function H(z,ae){T=!1,A&&(A=!1,g(V),V=-1),S=!0;var re=v;try{for(b(ae),x=n(p);x!==null&&(!(x.expirationTime>ae)||z&&!k());){var N=x.callback;if(typeof N=="function"){x.callback=null,v=x.priorityLevel;var ne=N(x.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(p)&&r(p),b(ae)}else r(p);x=n(p)}if(x!==null)var Ie=!0;else{var Q=n(m);Q!==null&&le(C,Q.startTime-ae),Ie=!1}return Ie}finally{x=null,v=re,S=!1}}var F=!1,I=null,V=-1,P=5,R=-1;function k(){return!(o.unstable_now()-R<P)}function se(){if(I!==null){var z=o.unstable_now();R=z;var ae=!0;try{ae=I(!0,z)}finally{ae?te():(F=!1,I=null)}}else F=!1}var te;if(typeof D=="function")te=function(){D(se)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=se,te=function(){he.postMessage(null)}}else te=function(){y(se,0)};function oe(z){I=z,F||(F=!0,te())}function le(z,ae){V=y(function(){z(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){T||S||(T=!0,oe(H))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var re=v;v=ae;try{return z()}finally{v=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=v;v=z;try{return ae()}finally{v=re}},o.unstable_scheduleCallback=function(z,ae,re){var N=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,z={id:_++,callback:ae,priorityLevel:z,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(z.sortIndex=re,e(m,z),n(p)===null&&z===n(m)&&(A?(g(V),V=-1):A=!0,le(C,re-N))):(z.sortIndex=ne,e(p,z),T||S||(T=!0,oe(H))),z},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(z){var ae=v;return function(){var re=v;v=ae;try{return z.apply(this,arguments)}finally{v=re}}}}(xc)),xc}var Mp;function H_(){return Mp||(Mp=1,vc.exports=z_()),vc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function V_(){if(Ep)return Cn;Ep=1;var o=kf(),e=H_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,s,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,c,l)&&(s=null),l||c===null?v(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,N;function ne(t){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Ie=!1;function Q(t,i){if(!t||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var c=ee.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,U=h.length-1;1<=M&&0<=U&&c[M]!==h[U];)U--;for(;1<=M&&0<=U;M--,U--)if(c[M]!==h[U]){if(M!==1||U!==1)do if(M--,U--,0>U||c[M]!==h[U]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=U);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ne(t):""}function de(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case F:return"Portal";case P:return"Profiler";case V:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function gn(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Te(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function ut(t,i){dt(t,i);var s=Te(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,s):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function je(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function wt(t,i,s){(i!=="number"||bt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ge=Array.isArray;function L(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ge(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Te(s)}}function pe(t,i){var s=Te(i.value),l=Te(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function qe(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=qe(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,fe=null;function be(t){if(t=uo(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=aa(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?fe?fe.push(t):fe=[t]:ie=t}function it(){if(ie){var t=ie,i=fe;if(fe=ie=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Dt(t,i){return t(i)}function Yt(){}var vt=!1;function Mn(t,i,s){if(vt)return t(i,s);vt=!0;try{return Dt(t,i,s)}finally{vt=!1,(ie!==null||fe!==null)&&(Yt(),it())}}function _n(t,i){var s=t.stateNode;if(s===null)return null;var l=aa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var qr=!1;if(d)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{qr=!1}function _i(t,i,s,l,c,h,M,U,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(s,ee)}catch(_e){this.onError(_e)}}var vi=!1,yr=null,Sr=!1,Vi=null,ko={onError:function(t){vi=!0,yr=t}};function $r(t,i,s,l,c,h,M,U,O){vi=!1,yr=null,_i.apply(ko,arguments)}function zo(t,i,s,l,c,h,M,U,O){if($r.apply(this,arguments),vi){if(vi){var ee=yr;vi=!1,yr=null}else throw Error(n(198));Sr||(Sr=!0,Vi=ee)}}function ai(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Ho(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Vo(t){if(ai(t)!==t)throw Error(n(188))}function Bl(t){var i=t.alternate;if(!i){if(i=ai(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Vo(c),t;if(h===l)return Vo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,U=c.child;U;){if(U===s){M=!0,s=c,l=h;break}if(U===l){M=!0,l=c,s=h;break}U=U.sibling}if(!M){for(U=h.child;U;){if(U===s){M=!0,s=h,l=c;break}if(U===l){M=!0,l=h,s=c;break}U=U.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Go(t){return t=Bl(t),t!==null?Wo(t):null}function Wo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Wo(t);if(i!==null)return i;t=t.sibling}return null}var Xo=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,X=e.unstable_shouldYield,J=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,ye=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ke=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function mt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:_t,kt=Math.log,Nt=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(kt(t)/Nt|0)|0}var Ye=64,zt=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ln(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var U=M&~c;U!==0?l=pt(U):(h&=M,h!==0&&(l=pt(h)))}else M=s&~c,M!==0?l=pt(M):h!==0&&(l=pt(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-rt(i),c=1<<s,l|=t[s],i&=~c;return l}function Gi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-rt(h),U=1<<M,O=c[M];O===-1?(!(U&s)||U&l)&&(c[M]=Gi(U,i)):O<=i&&(t.expiredLanes|=U),h&=~U}}function xi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pt(){var t=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),t}function un(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Qt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-rt(i),t[i]=s}function sn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-rt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Jt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-rt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var xt=0;function li(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kf,kl,Zf,Qf,Jf,zl=!1,jo=[],Wi=null,Xi=null,ji=null,Ys=new Map,qs=new Map,Yi=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ed(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function $s(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=uo(i),i!==null&&kl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function ag(t,i,s,l,c){switch(i){case"focusin":return Wi=$s(Wi,t,i,s,l,c),!0;case"dragenter":return Xi=$s(Xi,t,i,s,l,c),!0;case"mouseover":return ji=$s(ji,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Ys.set(h,$s(Ys.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,qs.set(h,$s(qs.get(h)||null,t,i,s,l,c)),!0}return!1}function td(t){var i=Mr(t.target);if(i!==null){var s=ai(i);if(s!==null){if(i=s.tag,i===13){if(i=Ho(s),i!==null){t.blockedOn=i,Jf(t.priority,function(){Zf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Vl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Et=l,s.target.dispatchEvent(l),Et=null}else return i=uo(s),i!==null&&kl(i),t.blockedOn=s,!1;i.shift()}return!0}function nd(t,i,s){Yo(t)&&s.delete(i)}function lg(){zl=!1,Wi!==null&&Yo(Wi)&&(Wi=null),Xi!==null&&Yo(Xi)&&(Xi=null),ji!==null&&Yo(ji)&&(ji=null),Ys.forEach(nd),qs.forEach(nd)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,zl||(zl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lg)))}function Zs(t){function i(c){return Ks(c,t)}if(0<jo.length){Ks(jo[0],t);for(var s=1;s<jo.length;s++){var l=jo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&Ks(Wi,t),Xi!==null&&Ks(Xi,t),ji!==null&&Ks(ji,t),Ys.forEach(i),qs.forEach(i),s=0;s<Yi.length;s++)l=Yi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(s=Yi[0],s.blockedOn===null);)td(s),s.blockedOn===null&&Yi.shift()}var Kr=C.ReactCurrentBatchConfig,qo=!0;function ug(t,i,s,l){var c=xt,h=Kr.transition;Kr.transition=null;try{xt=1,Hl(t,i,s,l)}finally{xt=c,Kr.transition=h}}function cg(t,i,s,l){var c=xt,h=Kr.transition;Kr.transition=null;try{xt=4,Hl(t,i,s,l)}finally{xt=c,Kr.transition=h}}function Hl(t,i,s,l){if(qo){var c=Vl(t,i,s,l);if(c===null)su(t,i,l,$o,s),ed(t,l);else if(ag(c,t,i,s,l))l.stopPropagation();else if(ed(t,l),i&4&&-1<og.indexOf(t)){for(;c!==null;){var h=uo(c);if(h!==null&&Kf(h),h=Vl(t,i,s,l),h===null&&su(t,i,l,$o,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else su(t,i,l,null,s)}}var $o=null;function Vl(t,i,s,l){if($o=null,t=W(l),t=Mr(t),t!==null)if(i=ai(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Ho(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function id(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case ye:return 1;case Re:return 4;case Le:case ke:return 16;case et:return 536870912;default:return 16}default:return 16}}var qi=null,Gl=null,Ko=null;function rd(){if(Ko)return Ko;var t,i=Gl,s=i.length,l,c="value"in qi?qi.value:qi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return Ko=c.slice(t,1<l?1-l:void 0)}function Zo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function sd(){return!1}function Un(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(s=t[U],this[U]=s?s(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qo:sd,this.isPropagationStopped=sd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=Un(Zr),Qs=re({},Zr,{view:0,detail:0}),fg=Un(Qs),Xl,jl,Js,Jo=re({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Xl=t.screenX-Js.screenX,jl=t.screenY-Js.screenY):jl=Xl=0,Js=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),od=Un(Jo),dg=re({},Jo,{dataTransfer:0}),hg=Un(dg),pg=re({},Qs,{relatedTarget:0}),Yl=Un(pg),mg=re({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=Un(mg),_g=re({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vg=Un(_g),xg=re({},Zr,{data:0}),ad=Un(xg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Mg[t])?!!i[t]:!1}function ql(){return Eg}var Tg=re({},Qs,{key:function(t){if(t.key){var i=yg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wg=Un(Tg),Ag=re({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=Un(Ag),Rg=re({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),Cg=Un(Rg),Pg=re({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=Un(Pg),Lg=re({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=Un(Lg),Ug=[9,13,27,32],$l=d&&"CompositionEvent"in window,eo=null;d&&"documentMode"in document&&(eo=document.documentMode);var Ig=d&&"TextEvent"in window&&!eo,ud=d&&(!$l||eo&&8<eo&&11>=eo),cd=" ",fd=!1;function dd(t,i){switch(t){case"keyup":return Ug.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function Ng(t,i){switch(t){case"compositionend":return hd(i);case"keypress":return i.which!==32?null:(fd=!0,cd);case"textInput":return t=i.data,t===cd&&fd?null:t;default:return null}}function Fg(t,i){if(Qr)return t==="compositionend"||!$l&&dd(t,i)?(t=rd(),Ko=Gl=qi=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ud&&i.locale!=="ko"?null:i.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Og[t.type]:i==="textarea"}function md(t,i,s,l){Pe(l),i=ra(i,"onChange"),0<i.length&&(s=new Wl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var to=null,no=null;function Bg(t){Ud(t,0)}function ea(t){var i=is(t);if(ht(i))return t}function kg(t,i){if(t==="change")return i}var gd=!1;if(d){var Kl;if(d){var Zl="oninput"in document;if(!Zl){var _d=document.createElement("div");_d.setAttribute("oninput","return;"),Zl=typeof _d.oninput=="function"}Kl=Zl}else Kl=!1;gd=Kl&&(!document.documentMode||9<document.documentMode)}function vd(){to&&(to.detachEvent("onpropertychange",xd),no=to=null)}function xd(t){if(t.propertyName==="value"&&ea(no)){var i=[];md(i,no,t,W(t)),Mn(Bg,i)}}function zg(t,i,s){t==="focusin"?(vd(),to=i,no=s,to.attachEvent("onpropertychange",xd)):t==="focusout"&&vd()}function Hg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ea(no)}function Vg(t,i){if(t==="click")return ea(i)}function Gg(t,i){if(t==="input"||t==="change")return ea(i)}function Wg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:Wg;function io(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!$n(t[c],i[c]))return!1}return!0}function yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sd(t,i){var s=yd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=yd(s)}}function Md(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Md(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ed(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=bt(t.document)}return i}function Ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Xg(t){var i=Ed(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Md(s.ownerDocument.documentElement,s)){if(l!==null&&Ql(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Sd(s,h);var M=Sd(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jg=d&&"documentMode"in document&&11>=document.documentMode,Jr=null,Jl=null,ro=null,eu=!1;function Td(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;eu||Jr==null||Jr!==bt(l)||(l=Jr,"selectionStart"in l&&Ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=ra(Jl,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Jr)))}function ta(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},tu={},wd={};d&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function na(t){if(tu[t])return tu[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in wd)return tu[t]=i[s];return t}var Ad=na("animationend"),Rd=na("animationiteration"),Cd=na("animationstart"),Pd=na("transitionend"),bd=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){bd.set(t,i),u(i,[t])}for(var nu=0;nu<Ld.length;nu++){var iu=Ld[nu],Yg=iu.toLowerCase(),qg=iu[0].toUpperCase()+iu.slice(1);$i(Yg,"on"+qg)}$i(Ad,"onAnimationEnd"),$i(Rd,"onAnimationIteration"),$i(Cd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Pd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Dd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,zo(l,i,void 0,t),t.currentTarget=null}function Ud(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],O=U.instance,ee=U.currentTarget;if(U=U.listener,O!==h&&c.isPropagationStopped())break e;Dd(c,U,ee),h=O}else for(M=0;M<l.length;M++){if(U=l[M],O=U.instance,ee=U.currentTarget,U=U.listener,O!==h&&c.isPropagationStopped())break e;Dd(c,U,ee),h=O}}}if(Sr)throw t=Vi,Sr=!1,Vi=null,t}function Ut(t,i){var s=i[fu];s===void 0&&(s=i[fu]=new Set);var l=t+"__bubble";s.has(l)||(Id(i,t,2,!1),s.add(l))}function ru(t,i,s){var l=0;i&&(l|=4),Id(s,t,l,i)}var ia="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ia]){t[ia]=!0,r.forEach(function(s){s!=="selectionchange"&&($g.has(s)||ru(s,!1,t),ru(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ia]||(i[ia]=!0,ru("selectionchange",!1,i))}}function Id(t,i,s,l){switch(id(i)){case 1:var c=ug;break;case 4:c=cg;break;default:c=Hl}s=c.bind(null,i,s,t),c=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function su(t,i,s,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===c||U.nodeType===8&&U.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;U!==null;){if(M=Mr(U),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}U=U.parentNode}}l=l.return}Mn(function(){var ee=h,_e=W(s),xe=[];e:{var me=bd.get(t);if(me!==void 0){var De=Wl,ze=t;switch(t){case"keypress":if(Zo(s)===0)break e;case"keydown":case"keyup":De=wg;break;case"focusin":ze="focus",De=Yl;break;case"focusout":ze="blur",De=Yl;break;case"beforeblur":case"afterblur":De=Yl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Cg;break;case Ad:case Rd:case Cd:De=gg;break;case Pd:De=bg;break;case"scroll":De=fg;break;case"wheel":De=Dg;break;case"copy":case"cut":case"paste":De=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=ld}var Ve=(i&4)!==0,Vt=!Ve&&t==="scroll",Y=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var G=ee,$;G!==null;){$=G;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,Y!==null&&(Ee=_n(G,Y),Ee!=null&&Ve.push(ao(G,Ee,$)))),Vt)break;G=G.return}0<Ve.length&&(me=new De(me,ze,null,s,_e),xe.push({event:me,listeners:Ve}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&s!==Et&&(ze=s.relatedTarget||s.fromElement)&&(Mr(ze)||ze[yi]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(ze=s.relatedTarget||s.toElement,De=ee,ze=ze?Mr(ze):null,ze!==null&&(Vt=ai(ze),ze!==Vt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=ee),De!==ze)){if(Ve=od,Ee="onMouseLeave",Y="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=ld,Ee="onPointerLeave",Y="onPointerEnter",G="pointer"),Vt=De==null?me:is(De),$=ze==null?me:is(ze),me=new Ve(Ee,G+"leave",De,s,_e),me.target=Vt,me.relatedTarget=$,Ee=null,Mr(_e)===ee&&(Ve=new Ve(Y,G+"enter",ze,s,_e),Ve.target=$,Ve.relatedTarget=Vt,Ee=Ve),Vt=Ee,De&&ze)t:{for(Ve=De,Y=ze,G=0,$=Ve;$;$=ts($))G++;for($=0,Ee=Y;Ee;Ee=ts(Ee))$++;for(;0<G-$;)Ve=ts(Ve),G--;for(;0<$-G;)Y=ts(Y),$--;for(;G--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=ts(Ve),Y=ts(Y)}Ve=null}else Ve=null;De!==null&&Nd(xe,me,De,Ve,!1),ze!==null&&Vt!==null&&Nd(xe,Vt,ze,Ve,!0)}}e:{if(me=ee?is(ee):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Xe=kg;else if(pd(me))if(gd)Xe=Gg;else{Xe=Hg;var $e=zg}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Vg);if(Xe&&(Xe=Xe(t,ee))){md(xe,Xe,s,_e);break e}$e&&$e(t,me,ee),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch($e=ee?is(ee):window,t){case"focusin":(pd($e)||$e.contentEditable==="true")&&(Jr=$e,Jl=ee,ro=null);break;case"focusout":ro=Jl=Jr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Td(xe,s,_e);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":Td(xe,s,_e)}var Ke;if($l)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Qr?dd(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(ud&&s.locale!=="ko"&&(Qr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Qr&&(Ke=rd()):(qi=_e,Gl="value"in qi?qi.value:qi.textContent,Qr=!0)),$e=ra(ee,tt),0<$e.length&&(tt=new ad(tt,t,null,s,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=hd(s),Ke!==null&&(tt.data=Ke)))),(Ke=Ig?Ng(t,s):Fg(t,s))&&(ee=ra(ee,"onBeforeInput"),0<ee.length&&(_e=new ad("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:ee}),_e.data=Ke))}Ud(xe,i)})}function ao(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ra(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=_n(t,s),h!=null&&l.unshift(ao(t,h,c)),h=_n(t,i),h!=null&&l.push(ao(t,h,c))),t=t.return}return l}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var U=s,O=U.alternate,ee=U.stateNode;if(O!==null&&O===l)break;U.tag===5&&ee!==null&&(U=ee,c?(O=_n(s,h),O!=null&&M.unshift(ao(s,O,U))):c||(O=_n(s,h),O!=null&&M.push(ao(s,O,U)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Kg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function Fd(t){return(typeof t=="string"?t:""+t).replace(Kg,`
`).replace(Zg,"")}function sa(t,i,s){if(i=Fd(i),Fd(t)!==i&&s)throw Error(n(425))}function oa(){}var ou=null,au=null;function lu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(t){return Od.resolve(null).then(t).catch(e_)}:uu;function e_(t){setTimeout(function(){throw t})}function cu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),Zs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);Zs(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Bd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),ui="__reactFiber$"+ns,lo="__reactProps$"+ns,yi="__reactContainer$"+ns,fu="__reactEvents$"+ns,t_="__reactListeners$"+ns,n_="__reactHandles$"+ns;function Mr(t){var i=t[ui];if(i)return i;for(var s=t.parentNode;s;){if(i=s[yi]||s[ui]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Bd(t);t!==null;){if(s=t[ui])return s;t=Bd(t)}return i}t=s,s=t.parentNode}return null}function uo(t){return t=t[ui]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function aa(t){return t[lo]||null}var du=[],rs=-1;function Zi(t){return{current:t}}function It(t){0>rs||(t.current=du[rs],du[rs]=null,rs--)}function Lt(t,i){rs++,du[rs]=t.current,t.current=i}var Qi={},cn=Zi(Qi),En=Zi(!1),Er=Qi;function ss(t,i){var s=t.type.contextTypes;if(!s)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Tn(t){return t=t.childContextTypes,t!=null}function la(){It(En),It(cn)}function kd(t,i,s){if(cn.current!==Qi)throw Error(n(168));Lt(cn,i),Lt(En,s)}function zd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},s,l)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Er=cn.current,Lt(cn,t),Lt(En,En.current),!0}function Hd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=zd(t,i,Er),l.__reactInternalMemoizedMergedChildContext=t,It(En),It(cn),Lt(cn,t)):It(En),Lt(En,s)}var Si=null,ca=!1,hu=!1;function Vd(t){Si===null?Si=[t]:Si.push(t)}function i_(t){ca=!0,Vd(t)}function Ji(){if(!hu&&Si!==null){hu=!0;var t=0,i=xt;try{var s=Si;for(xt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Si=null,ca=!1}catch(c){throw Si!==null&&(Si=Si.slice(t+1)),Xo(ye,Ji),c}finally{xt=i,hu=!1}}return null}var os=[],as=0,fa=null,da=0,zn=[],Hn=0,Tr=null,Mi=1,Ei="";function wr(t,i){os[as++]=da,os[as++]=fa,fa=t,da=i}function Gd(t,i,s){zn[Hn++]=Mi,zn[Hn++]=Ei,zn[Hn++]=Tr,Tr=t;var l=Mi;t=Ei;var c=32-rt(l)-1;l&=~(1<<c),s+=1;var h=32-rt(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Mi=1<<32-rt(i)+c|s<<c|l,Ei=h+t}else Mi=1<<h|s<<c|l,Ei=t}function pu(t){t.return!==null&&(wr(t,1),Gd(t,1,0))}function mu(t){for(;t===fa;)fa=os[--as],os[as]=null,da=os[--as],os[as]=null;for(;t===Tr;)Tr=zn[--Hn],zn[Hn]=null,Ei=zn[--Hn],zn[Hn]=null,Mi=zn[--Hn],zn[Hn]=null}var In=null,Nn=null,Ft=!1,Kn=null;function Wd(t,i){var s=Xn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Xd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Nn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Tr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Xn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,In=t,Nn=null,!0):!1;default:return!1}}function gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _u(t){if(Ft){var i=Nn;if(i){var s=i;if(!Xd(t,i)){if(gu(t))throw Error(n(418));i=Ki(s.nextSibling);var l=In;i&&Xd(t,i)?Wd(l,s):(t.flags=t.flags&-4097|2,Ft=!1,In=t)}}else{if(gu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,In=t}}}function jd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function ha(t){if(t!==In)return!1;if(!Ft)return jd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!lu(t.type,t.memoizedProps)),i&&(i=Nn)){if(gu(t))throw Yd(),Error(n(418));for(;i;)Wd(t,i),i=Ki(i.nextSibling)}if(jd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Nn=Ki(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=In?Ki(t.stateNode.nextSibling):null;return!0}function Yd(){for(var t=Nn;t;)t=Ki(t.nextSibling)}function ls(){Nn=In=null,Ft=!1}function vu(t){Kn===null?Kn=[t]:Kn.push(t)}var r_=C.ReactCurrentBatchConfig;function co(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var U=c.refs;M===null?delete U[h]:U[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function qd(t){var i=t._init;return i(t._payload)}function $d(t){function i(Y,G){if(t){var $=Y.deletions;$===null?(Y.deletions=[G],Y.flags|=16):$.push(G)}}function s(Y,G){if(!t)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function l(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function c(Y,G){return Y=ar(Y,G),Y.index=0,Y.sibling=null,Y}function h(Y,G,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<G?(Y.flags|=2,G):$):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,G,$,Ee){return G===null||G.tag!==6?(G=uc($,Y.mode,Ee),G.return=Y,G):(G=c(G,$),G.return=Y,G)}function O(Y,G,$,Ee){var Xe=$.type;return Xe===I?_e(Y,G,$.props.children,Ee,$.key):G!==null&&(G.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&qd(Xe)===G.type)?(Ee=c(G,$.props),Ee.ref=co(Y,G,$),Ee.return=Y,Ee):(Ee=Ba($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=co(Y,G,$),Ee.return=Y,Ee)}function ee(Y,G,$,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=cc($,Y.mode,Ee),G.return=Y,G):(G=c(G,$.children||[]),G.return=Y,G)}function _e(Y,G,$,Ee,Xe){return G===null||G.tag!==7?(G=Ur($,Y.mode,Ee,Xe),G.return=Y,G):(G=c(G,$),G.return=Y,G)}function xe(Y,G,$){if(typeof G=="string"&&G!==""||typeof G=="number")return G=uc(""+G,Y.mode,$),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case H:return $=Ba(G.type,G.key,G.props,null,Y.mode,$),$.ref=co(Y,null,G),$.return=Y,$;case F:return G=cc(G,Y.mode,$),G.return=Y,G;case oe:var Ee=G._init;return xe(Y,Ee(G._payload),$)}if(Ge(G)||ae(G))return G=Ur(G,Y.mode,$,null),G.return=Y,G;pa(Y,G)}return null}function me(Y,G,$,Ee){var Xe=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:U(Y,G,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case H:return $.key===Xe?O(Y,G,$,Ee):null;case F:return $.key===Xe?ee(Y,G,$,Ee):null;case oe:return Xe=$._init,me(Y,G,Xe($._payload),Ee)}if(Ge($)||ae($))return Xe!==null?null:_e(Y,G,$,Ee,null);pa(Y,$)}return null}function De(Y,G,$,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get($)||null,U(G,Y,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case H:return Y=Y.get(Ee.key===null?$:Ee.key)||null,O(G,Y,Ee,Xe);case F:return Y=Y.get(Ee.key===null?$:Ee.key)||null,ee(G,Y,Ee,Xe);case oe:var $e=Ee._init;return De(Y,G,$,$e(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return Y=Y.get($)||null,_e(G,Y,Ee,Xe,null);pa(G,Ee)}return null}function ze(Y,G,$,Ee){for(var Xe=null,$e=null,Ke=G,tt=G=0,nn=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var St=me(Y,Ke,$[tt],Ee);if(St===null){Ke===null&&(Ke=nn);break}t&&Ke&&St.alternate===null&&i(Y,Ke),G=h(St,G,tt),$e===null?Xe=St:$e.sibling=St,$e=St,Ke=nn}if(tt===$.length)return s(Y,Ke),Ft&&wr(Y,tt),Xe;if(Ke===null){for(;tt<$.length;tt++)Ke=xe(Y,$[tt],Ee),Ke!==null&&(G=h(Ke,G,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Ft&&wr(Y,tt),Xe}for(Ke=l(Y,Ke);tt<$.length;tt++)nn=De(Ke,Y,tt,$[tt],Ee),nn!==null&&(t&&nn.alternate!==null&&Ke.delete(nn.key===null?tt:nn.key),G=h(nn,G,tt),$e===null?Xe=nn:$e.sibling=nn,$e=nn);return t&&Ke.forEach(function(lr){return i(Y,lr)}),Ft&&wr(Y,tt),Xe}function Ve(Y,G,$,Ee){var Xe=ae($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var $e=Xe=null,Ke=G,tt=G=0,nn=null,St=$.next();Ke!==null&&!St.done;tt++,St=$.next()){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var lr=me(Y,Ke,St.value,Ee);if(lr===null){Ke===null&&(Ke=nn);break}t&&Ke&&lr.alternate===null&&i(Y,Ke),G=h(lr,G,tt),$e===null?Xe=lr:$e.sibling=lr,$e=lr,Ke=nn}if(St.done)return s(Y,Ke),Ft&&wr(Y,tt),Xe;if(Ke===null){for(;!St.done;tt++,St=$.next())St=xe(Y,St.value,Ee),St!==null&&(G=h(St,G,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return Ft&&wr(Y,tt),Xe}for(Ke=l(Y,Ke);!St.done;tt++,St=$.next())St=De(Ke,Y,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?tt:St.key),G=h(St,G,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return t&&Ke.forEach(function(F_){return i(Y,F_)}),Ft&&wr(Y,tt),Xe}function Vt(Y,G,$,Ee){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case H:e:{for(var Xe=$.key,$e=G;$e!==null;){if($e.key===Xe){if(Xe=$.type,Xe===I){if($e.tag===7){s(Y,$e.sibling),G=c($e,$.props.children),G.return=Y,Y=G;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&qd(Xe)===$e.type){s(Y,$e.sibling),G=c($e,$.props),G.ref=co(Y,$e,$),G.return=Y,Y=G;break e}s(Y,$e);break}else i(Y,$e);$e=$e.sibling}$.type===I?(G=Ur($.props.children,Y.mode,Ee,$.key),G.return=Y,Y=G):(Ee=Ba($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=co(Y,G,$),Ee.return=Y,Y=Ee)}return M(Y);case F:e:{for($e=$.key;G!==null;){if(G.key===$e)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){s(Y,G.sibling),G=c(G,$.children||[]),G.return=Y,Y=G;break e}else{s(Y,G);break}else i(Y,G);G=G.sibling}G=cc($,Y.mode,Ee),G.return=Y,Y=G}return M(Y);case oe:return $e=$._init,Vt(Y,G,$e($._payload),Ee)}if(Ge($))return ze(Y,G,$,Ee);if(ae($))return Ve(Y,G,$,Ee);pa(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,G!==null&&G.tag===6?(s(Y,G.sibling),G=c(G,$),G.return=Y,Y=G):(s(Y,G),G=uc($,Y.mode,Ee),G.return=Y,Y=G),M(Y)):s(Y,G)}return Vt}var us=$d(!0),Kd=$d(!1),ma=Zi(null),ga=null,cs=null,xu=null;function yu(){xu=cs=ga=null}function Su(t){var i=ma.current;It(ma),t._currentValue=i}function Mu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function fs(t,i){ga=t,xu=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(wn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(xu!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(ga===null)throw Error(n(308));cs=t,ga.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var Ar=null;function Eu(t){Ar===null?Ar=[t]:Ar.push(t)}function Zd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,Eu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ti(t,l)}function Ti(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var er=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,yt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ti(t,s)}return c=l.interleaved,c===null?(i.next=i,Eu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ti(t,s)}function _a(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jt(t,s)}}function Jd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function va(t,i,s,l){var c=t.updateQueue;er=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,U=c.shared.pending;if(U!==null){c.shared.pending=null;var O=U,ee=O.next;O.next=null,M===null?h=ee:M.next=ee,M=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==M&&(U===null?_e.firstBaseUpdate=ee:U.next=ee,_e.lastBaseUpdate=O))}if(h!==null){var xe=c.baseState;M=0,_e=ee=O=null,U=h;do{var me=U.lane,De=U.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var ze=t,Ve=U;switch(me=i,De=s,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(De,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(De,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:er=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[U]:me.push(U))}else De={eventTime:De,lane:me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ee=_e=De,O=xe):_e=_e.next=De,M|=me;if(U=U.next,U===null){if(U=c.shared.pending,U===null)break;me=U,U=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(O=xe),c.baseState=O,c.firstBaseUpdate=ee,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=xe}}function eh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var fo={},ci=Zi(fo),ho=Zi(fo),po=Zi(fo);function Rr(t){if(t===fo)throw Error(n(174));return t}function wu(t,i){switch(Lt(po,i),Lt(ho,t),Lt(ci,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}It(ci),Lt(ci,i)}function ds(){It(ci),It(ho),It(po)}function th(t){Rr(po.current);var i=Rr(ci.current),s=We(i,t.type);i!==s&&(Lt(ho,t),Lt(ci,s))}function Au(t){ho.current===t&&(It(ci),It(ho))}var Ot=Zi(0);function xa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ru=[];function Cu(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var ya=C.ReactCurrentDispatcher,Pu=C.ReactCurrentBatchConfig,Cr=0,Bt=null,qt=null,en=null,Sa=!1,mo=!1,go=0,s_=0;function fn(){throw Error(n(321))}function bu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!$n(t[s],i[s]))return!1;return!0}function Lu(t,i,s,l,c,h){if(Cr=h,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ya.current=t===null||t.memoizedState===null?u_:c_,t=s(l,c),mo){h=0;do{if(mo=!1,go=0,25<=h)throw Error(n(301));h+=1,en=qt=null,i.updateQueue=null,ya.current=f_,t=s(l,c)}while(mo)}if(ya.current=Ta,i=qt!==null&&qt.next!==null,Cr=0,en=qt=Bt=null,Sa=!1,i)throw Error(n(300));return t}function Du(){var t=go!==0;return go=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Bt.memoizedState=en=t:en=en.next=t,en}function Gn(){if(qt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=en===null?Bt.memoizedState:en.next;if(i!==null)en=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},en===null?Bt.memoizedState=en=t:en=en.next=t}return en}function _o(t,i){return typeof i=="function"?i(t):i}function Uu(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=qt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var U=M=null,O=null,ee=h;do{var _e=ee.lane;if((Cr&_e)===_e)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(U=O=xe,M=l):O=O.next=xe,Bt.lanes|=_e,Pr|=_e}ee=ee.next}while(ee!==null&&ee!==h);O===null?M=l:O.next=U,$n(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Bt.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Iu(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);$n(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function nh(){}function ih(t,i){var s=Bt,l=Gn(),c=i(),h=!$n(l.memoizedState,c);if(h&&(l.memoizedState=c,wn=!0),l=l.queue,Nu(oh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,vo(9,sh.bind(null,s,l,c,i),void 0,null),tn===null)throw Error(n(349));Cr&30||rh(s,i,c)}return c}function rh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function sh(t,i,s,l){i.value=s,i.getSnapshot=l,ah(i)&&lh(t)}function oh(t,i,s){return s(function(){ah(i)&&lh(t)})}function ah(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!$n(t,s)}catch{return!0}}function lh(t){var i=Ti(t,1);i!==null&&ei(i,t,1,-1)}function uh(t){var i=fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},i.queue=t,t=t.dispatch=l_.bind(null,Bt,t),[i.memoizedState,t]}function vo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function ch(){return Gn().memoizedState}function Ma(t,i,s,l){var c=fi();Bt.flags|=t,c.memoizedState=vo(1|i,s,void 0,l===void 0?null:l)}function Ea(t,i,s,l){var c=Gn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var M=qt.memoizedState;if(h=M.destroy,l!==null&&bu(l,M.deps)){c.memoizedState=vo(i,s,h,l);return}}Bt.flags|=t,c.memoizedState=vo(1|i,s,h,l)}function fh(t,i){return Ma(8390656,8,t,i)}function Nu(t,i){return Ea(2048,8,t,i)}function dh(t,i){return Ea(4,2,t,i)}function hh(t,i){return Ea(4,4,t,i)}function ph(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function mh(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4,4,ph.bind(null,i,t),s)}function Fu(){}function gh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&bu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function _h(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&bu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function vh(t,i,s){return Cr&21?($n(s,i)||(s=Pt(),Bt.lanes|=s,Pr|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=s)}function o_(t,i){var s=xt;xt=s!==0&&4>s?s:4,t(!0);var l=Pu.transition;Pu.transition={};try{t(!1),i()}finally{xt=s,Pu.transition=l}}function xh(){return Gn().memoizedState}function a_(t,i,s){var l=sr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},yh(t))Sh(i,s);else if(s=Zd(t,i,s,l),s!==null){var c=yn();ei(s,t,l,c),Mh(s,i,l)}}function l_(t,i,s){var l=sr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(yh(t))Sh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,U=h(M,s);if(c.hasEagerState=!0,c.eagerState=U,$n(U,M)){var O=i.interleaved;O===null?(c.next=c,Eu(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}s=Zd(t,i,c,l),s!==null&&(c=yn(),ei(s,t,l,c),Mh(s,i,l))}}function yh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function Sh(t,i){mo=Sa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Mh(t,i,s){if(s&4194240){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jt(t,s)}}var Ta={readContext:Vn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},u_={readContext:Vn,useCallback:function(t,i){return fi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:fh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ma(4194308,4,ph.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ma(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ma(4,2,t,i)},useMemo:function(t,i){var s=fi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=fi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=a_.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=fi();return t={current:t},i.memoizedState=t},useState:uh,useDebugValue:Fu,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=uh(!1),i=t[0];return t=o_.bind(null,t[1]),fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Bt,c=fi();if(Ft){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),tn===null)throw Error(n(349));Cr&30||rh(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,fh(oh.bind(null,l,h,t),[t]),l.flags|=2048,vo(9,sh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=fi(),i=tn.identifierPrefix;if(Ft){var s=Ei,l=Mi;s=(l&~(1<<32-rt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=go++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=s_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},c_={readContext:Vn,useCallback:gh,useContext:Vn,useEffect:Nu,useImperativeHandle:mh,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:_h,useReducer:Uu,useRef:ch,useState:function(){return Uu(_o)},useDebugValue:Fu,useDeferredValue:function(t){var i=Gn();return vh(i,qt.memoizedState,t)},useTransition:function(){var t=Uu(_o)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:nh,useSyncExternalStore:ih,useId:xh,unstable_isNewReconciler:!1},f_={readContext:Vn,useCallback:gh,useContext:Vn,useEffect:Nu,useImperativeHandle:mh,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:_h,useReducer:Iu,useRef:ch,useState:function(){return Iu(_o)},useDebugValue:Fu,useDeferredValue:function(t){var i=Gn();return qt===null?i.memoizedState=t:vh(i,qt.memoizedState,t)},useTransition:function(){var t=Iu(_o)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:nh,useSyncExternalStore:ih,useId:xh,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Ou(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:re({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wa={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=yn(),c=sr(t),h=wi(l,c);h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(ei(i,t,c,l),_a(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=yn(),c=sr(t),h=wi(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(ei(i,t,c,l),_a(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yn(),l=sr(t),c=wi(s,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(ei(i,t,l,s),_a(i,t,l))}};function Eh(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!io(s,l)||!io(c,h):!0}function Th(t,i,s){var l=!1,c=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(c=Tn(i)?Er:cn.current,l=i.contextTypes,h=(l=l!=null)?ss(t,c):Qi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function wh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&wa.enqueueReplaceState(i,i.state,null)}function Bu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Tu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Vn(h):(h=Tn(i)?Er:cn.current,c.context=ss(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ou(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&wa.enqueueReplaceState(c,c.state,null),va(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,i){try{var s="",l=i;do s+=de(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function ku(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function zu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var d_=typeof WeakMap=="function"?WeakMap:Map;function Ah(t,i,s){s=wi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Da||(Da=!0,tc=l),zu(t,i)},s}function Rh(t,i,s){s=wi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){zu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){zu(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Ch(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new d_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=A_.bind(null,t,i,s),i.then(t,t))}function Ph(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function bh(t,i,s,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=wi(-1,1),i.tag=2,tr(s,i,1))),s.lanes|=1),t)}var h_=C.ReactCurrentOwner,wn=!1;function xn(t,i,s,l){i.child=t===null?Kd(i,null,s,l):us(i,t.child,s,l)}function Lh(t,i,s,l,c){s=s.render;var h=i.ref;return fs(i,c),l=Lu(t,i,s,l,h,c),s=Du(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(Ft&&s&&pu(i),i.flags|=1,xn(t,i,l,c),i.child)}function Dh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!lc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Uh(t,i,h,l,c)):(t=Ba(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:io,s(M,l)&&t.ref===i.ref)return Ai(t,i,c)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Uh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(io(h,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(wn=!0);else return i.lanes=t.lanes,Ai(t,i,c)}return Hu(t,i,s,l,c)}function Ih(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(ms,Fn),Fn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(ms,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Lt(ms,Fn),Fn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Lt(ms,Fn),Fn|=l;return xn(t,i,c,s),i.child}function Nh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Hu(t,i,s,l,c){var h=Tn(s)?Er:cn.current;return h=ss(i,h),fs(i,c),s=Lu(t,i,s,l,h,c),l=Du(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(Ft&&l&&pu(i),i.flags|=1,xn(t,i,s,c),i.child)}function Fh(t,i,s,l,c){if(Tn(s)){var h=!0;ua(i)}else h=!1;if(fs(i,c),i.stateNode===null)Ra(t,i),Th(i,s,l),Bu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var O=M.context,ee=s.contextType;typeof ee=="object"&&ee!==null?ee=Vn(ee):(ee=Tn(s)?Er:cn.current,ee=ss(i,ee));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==l||O!==ee)&&wh(i,M,l,ee),er=!1;var me=i.memoizedState;M.state=me,va(i,l,M,c),O=i.memoizedState,U!==l||me!==O||En.current||er?(typeof _e=="function"&&(Ou(i,s,_e,l),O=i.memoizedState),(U=er||Eh(i,s,U,l,me,O,ee))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=ee,l=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Qd(t,i),U=i.memoizedProps,ee=i.type===i.elementType?U:Zn(i.type,U),M.props=ee,xe=i.pendingProps,me=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Vn(O):(O=Tn(s)?Er:cn.current,O=ss(i,O));var De=s.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==xe||me!==O)&&wh(i,M,l,O),er=!1,me=i.memoizedState,M.state=me,va(i,l,M,c);var ze=i.memoizedState;U!==xe||me!==ze||En.current||er?(typeof De=="function"&&(Ou(i,s,De,l),ze=i.memoizedState),(ee=er||Eh(i,s,ee,l,me,ze,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=O,l=ee):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Vu(t,i,s,l,h,c)}function Vu(t,i,s,l,c,h){Nh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Hd(i,s,!1),Ai(t,i,h);l=i.stateNode,h_.current=i;var U=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=us(i,t.child,null,h),i.child=us(i,null,U,h)):xn(t,i,U,h),i.memoizedState=l.state,c&&Hd(i,s,!0),i.child}function Oh(t){var i=t.stateNode;i.pendingContext?kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kd(t,i.context,!1),wu(t,i.containerInfo)}function Bh(t,i,s,l,c){return ls(),vu(c),i.flags|=256,xn(t,i,s,l),i.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,s){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=t!==null&&t.memoizedState===null?!1:(c&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ot,c&1),t===null)return _u(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=Ur(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Wu(s),i.memoizedState=Gu,t):Xu(i,M));if(c=t.memoizedState,c!==null&&(U=c.dehydrated,U!==null))return p_(t,i,M,l,U,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,U=c.sibling;var O={mode:"hidden",children:l.children};return!(M&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=ar(c,O),l.subtreeFlags=c.subtreeFlags&14680064),U!==null?h=ar(U,h):(h=Ur(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Wu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Gu,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Xu(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Aa(t,i,s,l){return l!==null&&vu(l),us(i,t.child,null,s),t=Xu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function p_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=ku(Error(n(422))),Aa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=Ur(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&us(i,t.child,null,M),i.child.memoizedState=Wu(M),i.memoizedState=Gu,h);if(!(i.mode&1))return Aa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=ku(h,l,void 0),Aa(t,i,M,l)}if(U=(M&t.childLanes)!==0,wn||U){if(l=tn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|M)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ti(t,c),ei(l,t,c,-1))}return ac(),l=ku(Error(n(421))),Aa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=R_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=Ki(c.nextSibling),In=i,Ft=!0,Kn=null,t!==null&&(zn[Hn++]=Mi,zn[Hn++]=Ei,zn[Hn++]=Tr,Mi=t.id,Ei=t.overflow,Tr=i),i=Xu(i,l.children),i.flags|=4096,i)}function zh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mu(t.return,i,s)}function ju(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Hh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(xn(t,i,l.children,s),l=Ot.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,s,i);else if(t.tag===19)zh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&xa(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),ju(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&xa(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}ju(i,!0,s,null,h);break;case"together":ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ra(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=ar(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ar(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function m_(t,i,s){switch(i.tag){case 3:Oh(i),ls();break;case 5:th(i);break;case 1:Tn(i.type)&&ua(i);break;case 4:wu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(ma,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):s&i.child.childLanes?kh(t,i,s):(Lt(Ot,Ot.current&1),t=Ai(t,i,s),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(s&i.childLanes)!==0,t.flags&128){if(l)return Hh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Ih(t,i,s)}return Ai(t,i,s)}var Vh,Yu,Gh,Wh;Vh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Yu=function(){},Gh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(ci.current);var h=null;switch(s){case"input":c=B(t,c),l=B(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=oa)}ct(s,l);var M;s=null;for(ee in c)if(!l.hasOwnProperty(ee)&&c.hasOwnProperty(ee)&&c[ee]!=null)if(ee==="style"){var U=c[ee];for(M in U)U.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var O=l[ee];if(U=c!=null?c[ee]:void 0,l.hasOwnProperty(ee)&&O!==U&&(O!=null||U!=null))if(ee==="style")if(U){for(M in U)!U.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&U[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(h||(h=[]),h.push(ee,s)),s=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(h=h||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&Ut("scroll",t),h||U===O||(h=[])):(h=h||[]).push(ee,O))}s&&(h=h||[]).push("style",s);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},Wh=function(t,i,s,l){s!==l&&(i.flags|=4)};function xo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function g_(t,i,s){var l=i.pendingProps;switch(mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Tn(i.type)&&la(),dn(i),null;case 3:return l=i.stateNode,ds(),It(En),It(cn),Cu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ha(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Kn!==null&&(rc(Kn),Kn=null))),Yu(t,i),dn(i),null;case 5:Au(i);var c=Rr(po.current);if(s=i.type,t!==null&&i.stateNode!=null)Gh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Rr(ci.current),ha(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ui]=i,l[lo]=h,t=(i.mode&1)!==0,s){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)Ut(so[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":gn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Z(l,h),Ut("invalid",l)}ct(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var U=h[M];M==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,U,t),c=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,U,t),c=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Ut("scroll",l)}switch(s){case"input":Rt(l),je(l,h,!0);break;case"textarea":Rt(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=oa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[ui]=i,t[lo]=l,Vh(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(s,l),s){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)Ut(so[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":gn(t,l),c=B(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Z(t,l),c=E(t,l),Ut("invalid",t);break;default:c=l}ct(s,c),U=c;for(h in U)if(U.hasOwnProperty(h)){var O=U[h];h==="style"?Je(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ne(t,O)):h==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&lt(t,O):typeof O=="number"&&lt(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ut("scroll",t):O!=null&&b(t,h,O,M))}switch(s){case"input":Rt(t),je(t,l,!1);break;case"textarea":Rt(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=oa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)Wh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Rr(po.current),Rr(ci.current),ha(i)){if(l=i.stateNode,s=i.memoizedProps,l[ui]=i,(h=l.nodeValue!==s)&&(t=In,t!==null))switch(t.tag){case 3:sa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ui]=i,i.stateNode=l}return dn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Nn!==null&&i.mode&1&&!(i.flags&128))Yd(),ls(),i.flags|=98560,h=!1;else if(h=ha(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ui]=i}else ls(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else Kn!==null&&(rc(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Ot.current&1?$t===0&&($t=3):ac())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ds(),Yu(t,i),t===null&&oo(i.stateNode.containerInfo),dn(i),null;case 10:return Su(i.type._context),dn(i),null;case 17:return Tn(i.type)&&la(),dn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)xo(h,!1);else{if($t!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=xa(t),M!==null){for(i.flags|=128,xo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&q()>gs&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304)}else{if(!l)if(t=xa(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return dn(i),null}else 2*q()-h.renderingStartTime>gs&&s!==1073741824&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=q(),i.sibling=null,s=Ot.current,Lt(Ot,l?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return oc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Fn&1073741824&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function __(t,i){switch(mu(i),i.tag){case 1:return Tn(i.type)&&la(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),It(En),It(cn),Cu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Au(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return ds(),null;case 10:return Su(i.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var Ca=!1,hn=!1,v_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ps(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ht(t,i,l)}else s.current=null}function qu(t,i,s){try{s()}catch(l){Ht(t,i,l)}}var Xh=!1;function x_(t,i){if(ou=qo,t=Ed(),Ql(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,U=-1,O=-1,ee=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==s||c!==0&&xe.nodeType!==3||(U=M+c),xe!==h||l!==0&&xe.nodeType!==3||(O=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===s&&++ee===c&&(U=M),me===h&&++_e===l&&(O=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}s=U===-1||O===-1?null:{start:U,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(au={focusedElem:t,selectionRange:s},qo=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Vt=ze.memoizedState,Y=i.stateNode,G=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Zn(i.type,Ve),Vt);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Ht(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=Xh,Xh=!1,ze}function yo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&qu(i,s,h)}c=c.next}while(c!==l)}}function Pa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function $u(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function jh(t){var i=t.alternate;i!==null&&(t.alternate=null,jh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ui],delete i[lo],delete i[fu],delete i[t_],delete i[n_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yh(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(t=t.child,t!==null))for(Ku(t,i,s),t=t.sibling;t!==null;)Ku(t,i,s),t=t.sibling}function Zu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Zu(t,i,s),t=t.sibling;t!==null;)Zu(t,i,s),t=t.sibling}var on=null,Qn=!1;function nr(t,i,s){for(s=s.child;s!==null;)$h(t,i,s),s=s.sibling}function $h(t,i,s){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,s)}catch{}switch(s.tag){case 5:hn||ps(s,i);case 6:var l=on,c=Qn;on=null,nr(t,i,s),on=l,Qn=c,on!==null&&(Qn?(t=on,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):on.removeChild(s.stateNode));break;case 18:on!==null&&(Qn?(t=on,s=s.stateNode,t.nodeType===8?cu(t.parentNode,s):t.nodeType===1&&cu(t,s),Zs(t)):cu(on,s.stateNode));break;case 4:l=on,c=Qn,on=s.stateNode.containerInfo,Qn=!0,nr(t,i,s),on=l,Qn=c;break;case 0:case 11:case 14:case 15:if(!hn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&(h&2||h&4)&&qu(s,i,M),c=c.next}while(c!==l)}nr(t,i,s);break;case 1:if(!hn&&(ps(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(U){Ht(s,i,U)}nr(t,i,s);break;case 21:nr(t,i,s);break;case 22:s.mode&1?(hn=(l=hn)||s.memoizedState!==null,nr(t,i,s),hn=l):nr(t,i,s);break;default:nr(t,i,s)}}function Kh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new v_),i.forEach(function(l){var c=C_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:on=U.stateNode,Qn=!1;break e;case 3:on=U.stateNode.containerInfo,Qn=!0;break e;case 4:on=U.stateNode.containerInfo,Qn=!0;break e}U=U.return}if(on===null)throw Error(n(160));$h(h,M,c),on=null,Qn=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(ee){Ht(c,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zh(i,t),i=i.sibling}function Zh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),di(t),l&4){try{yo(3,t,t.return),Pa(3,t)}catch(Ve){Ht(t,t.return,Ve)}try{yo(5,t,t.return)}catch(Ve){Ht(t,t.return,Ve)}}break;case 1:Jn(i,t),di(t),l&512&&s!==null&&ps(s,s.return);break;case 5:if(Jn(i,t),di(t),l&512&&s!==null&&ps(s,s.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(Ve){Ht(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,U=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&dt(c,h),nt(U,M);var ee=nt(U,h);for(M=0;M<O.length;M+=2){var _e=O[M],xe=O[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?lt(c,xe):b(c,_e,xe,ee)}switch(U){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?L(c,!!h.multiple,De,!1):me!==!!h.multiple&&(h.defaultValue!=null?L(c,!!h.multiple,h.defaultValue,!0):L(c,!!h.multiple,h.multiple?[]:"",!1))}c[lo]=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 6:if(Jn(i,t),di(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 3:if(Jn(i,t),di(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(Ve){Ht(t,t.return,Ve)}break;case 4:Jn(i,t),di(t);break;case 13:Jn(i,t),di(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ec=q())),l&4&&Kh(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(ee=hn)||_e,Jn(i,t),hn=ee):Jn(i,t),di(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!_e&&t.mode&1)for(Fe=t,_e=t.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:yo(4,me,me.return);break;case 1:ps(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Ht(l,s,Ve)}}break;case 5:ps(me,me.return);break;case 22:if(me.memoizedState!==null){ep(xe);continue}}De!==null?(De.return=me,Fe=De):ep(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,ee?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=xe.stateNode,O=xe.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=qe("display",M))}catch(Ve){Ht(t,t.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ve){Ht(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Jn(i,t),di(t),l&4&&Kh(t);break;case 21:break;default:Jn(i,t),di(t)}}function di(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Yh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=qh(t);Zu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,U=qh(t);Ku(t,U,M);break;default:throw Error(n(161))}}catch(O){Ht(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function y_(t,i,s){Fe=t,Qh(t)}function Qh(t,i,s){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ca;if(!M){var U=c.alternate,O=U!==null&&U.memoizedState!==null||hn;U=Ca;var ee=hn;if(Ca=M,(hn=O)&&!ee)for(Fe=c;Fe!==null;)M=Fe,O=M.child,M.tag===22&&M.memoizedState!==null?tp(c):O!==null?(O.return=M,Fe=O):tp(c);for(;h!==null;)Fe=h,Qh(h),h=h.sibling;Fe=c,Ca=U,hn=ee}Jh(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Fe=h):Jh(t)}}function Jh(t){for(;Fe!==null;){var i=Fe;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:hn||Pa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Zn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&eh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}eh(i,M,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Zs(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&$u(i)}catch(me){Ht(i,i.return,me)}}if(i===t){Fe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function ep(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function tp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Pa(4,i)}catch(O){Ht(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){Ht(i,c,O)}}var h=i.return;try{$u(i)}catch(O){Ht(i,h,O)}break;case 5:var M=i.return;try{$u(i)}catch(O){Ht(i,M,O)}}}catch(O){Ht(i,i.return,O)}if(i===t){Fe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Fe=U;break}Fe=i.return}}var S_=Math.ceil,ba=C.ReactCurrentDispatcher,Qu=C.ReactCurrentOwner,Wn=C.ReactCurrentBatchConfig,yt=0,tn=null,Xt=null,an=0,Fn=0,ms=Zi(0),$t=0,So=null,Pr=0,La=0,Ju=0,Mo=null,An=null,ec=0,gs=1/0,Ri=null,Da=!1,tc=null,ir=null,Ua=!1,rr=null,Ia=0,Eo=0,nc=null,Na=-1,Fa=0;function yn(){return yt&6?q():Na!==-1?Na:Na=q()}function sr(t){return t.mode&1?yt&2&&an!==0?an&-an:r_.transition!==null?(Fa===0&&(Fa=Pt()),Fa):(t=xt,t!==0||(t=window.event,t=t===void 0?16:id(t.type)),t):1}function ei(t,i,s,l){if(50<Eo)throw Eo=0,nc=null,Error(n(185));Qt(t,s,l),(!(yt&2)||t!==tn)&&(t===tn&&(!(yt&2)&&(La|=s),$t===4&&or(t,an)),Rn(t,l),s===1&&yt===0&&!(i.mode&1)&&(gs=q()+500,ca&&Ji()))}function Rn(t,i){var s=t.callbackNode;vn(t,i);var l=ln(t,t===tn?an:0);if(l===0)s!==null&&w(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&w(s),i===1)t.tag===0?i_(ip.bind(null,t)):Vd(ip.bind(null,t)),Jg(function(){!(yt&6)&&Ji()}),s=null;else{switch(li(l)){case 1:s=ye;break;case 4:s=Re;break;case 16:s=Le;break;case 536870912:s=et;break;default:s=Le}s=fp(s,np.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function np(t,i){if(Na=-1,Fa=0,yt&6)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=ln(t,t===tn?an:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Oa(t,l);else{i=l;var c=yt;yt|=2;var h=sp();(tn!==t||an!==i)&&(Ri=null,gs=q()+500,Lr(t,i));do try{T_();break}catch(U){rp(t,U)}while(!0);yu(),ba.current=h,yt=c,Xt!==null?i=0:(tn=null,an=0,i=$t)}if(i!==0){if(i===2&&(c=xi(t),c!==0&&(l=c,i=ic(t,c))),i===1)throw s=So,Lr(t,0),or(t,l),Rn(t,q()),s;if(i===6)or(t,l);else{if(c=t.current.alternate,!(l&30)&&!M_(c)&&(i=Oa(t,l),i===2&&(h=xi(t),h!==0&&(l=h,i=ic(t,h))),i===1))throw s=So,Lr(t,0),or(t,l),Rn(t,q()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Dr(t,An,Ri);break;case 3:if(or(t,l),(l&130023424)===l&&(i=ec+500-q(),10<i)){if(ln(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=uu(Dr.bind(null,t,An,Ri),i);break}Dr(t,An,Ri);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-rt(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*S_(l/1960))-l,10<l){t.timeoutHandle=uu(Dr.bind(null,t,An,Ri),l);break}Dr(t,An,Ri);break;case 5:Dr(t,An,Ri);break;default:throw Error(n(329))}}}return Rn(t,q()),t.callbackNode===s?np.bind(null,t):null}function ic(t,i){var s=Mo;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=Oa(t,i),t!==2&&(i=An,An=s,i!==null&&rc(i)),t}function rc(t){An===null?An=t:An.push.apply(An,t)}function M_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!$n(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Ju,i&=~La,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-rt(i),l=1<<s;t[s]=-1,i&=~l}}function ip(t){if(yt&6)throw Error(n(327));_s();var i=ln(t,0);if(!(i&1))return Rn(t,q()),null;var s=Oa(t,i);if(t.tag!==0&&s===2){var l=xi(t);l!==0&&(i=l,s=ic(t,l))}if(s===1)throw s=So,Lr(t,0),or(t,i),Rn(t,q()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Dr(t,An,Ri),Rn(t,q()),null}function sc(t,i){var s=yt;yt|=1;try{return t(i)}finally{yt=s,yt===0&&(gs=q()+500,ca&&Ji())}}function br(t){rr!==null&&rr.tag===0&&!(yt&6)&&_s();var i=yt;yt|=1;var s=Wn.transition,l=xt;try{if(Wn.transition=null,xt=1,t)return t()}finally{xt=l,Wn.transition=s,yt=i,!(yt&6)&&Ji()}}function oc(){Fn=ms.current,It(ms)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Qg(s)),Xt!==null)for(s=Xt.return;s!==null;){var l=s;switch(mu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&la();break;case 3:ds(),It(En),It(cn),Cu();break;case 5:Au(l);break;case 4:ds();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Su(l.type._context);break;case 22:case 23:oc()}s=s.return}if(tn=t,Xt=t=ar(t.current,null),an=Fn=i,$t=0,So=null,Ju=La=Pr=0,An=Mo=null,Ar!==null){for(i=0;i<Ar.length;i++)if(s=Ar[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Ar=null}return t}function rp(t,i){do{var s=Xt;try{if(yu(),ya.current=Ta,Sa){for(var l=Bt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Sa=!1}if(Cr=0,en=qt=Bt=null,mo=!1,go=0,Qu.current=null,s===null||s.return===null){$t=1,So=i,Xt=null;break}e:{var h=t,M=s.return,U=s,O=i;if(i=an,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,_e=U,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=Ph(M);if(De!==null){De.flags&=-257,bh(De,M,U,h,i),De.mode&1&&Ch(h,ee,i),i=De,O=ee;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else ze.add(O);break e}else{if(!(i&1)){Ch(h,ee,i),ac();break e}O=Error(n(426))}}else if(Ft&&U.mode&1){var Vt=Ph(M);if(Vt!==null){!(Vt.flags&65536)&&(Vt.flags|=256),bh(Vt,M,U,h,i),vu(hs(O,U));break e}}h=O=hs(O,U),$t!==4&&($t=2),Mo===null?Mo=[h]:Mo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Ah(h,O,i);Jd(h,Y);break e;case 1:U=O;var G=h.type,$=h.stateNode;if(!(h.flags&128)&&(typeof G.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ir===null||!ir.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Rh(h,U,i);Jd(h,Ee);break e}}h=h.return}while(h!==null)}ap(s)}catch(Xe){i=Xe,Xt===s&&s!==null&&(Xt=s=s.return);continue}break}while(!0)}function sp(){var t=ba.current;return ba.current=Ta,t===null?Ta:t}function ac(){($t===0||$t===3||$t===2)&&($t=4),tn===null||!(Pr&268435455)&&!(La&268435455)||or(tn,an)}function Oa(t,i){var s=yt;yt|=2;var l=sp();(tn!==t||an!==i)&&(Ri=null,Lr(t,i));do try{E_();break}catch(c){rp(t,c)}while(!0);if(yu(),yt=s,ba.current=l,Xt!==null)throw Error(n(261));return tn=null,an=0,$t}function E_(){for(;Xt!==null;)op(Xt)}function T_(){for(;Xt!==null&&!X();)op(Xt)}function op(t){var i=cp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?ap(t):Xt=i,Qu.current=null}function ap(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=__(s,i),s!==null){s.flags&=32767,Xt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Xt=null;return}}else if(s=g_(s,i,Fn),s!==null){Xt=s;return}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);$t===0&&($t=5)}function Dr(t,i,s){var l=xt,c=Wn.transition;try{Wn.transition=null,xt=1,w_(t,i,s,l)}finally{Wn.transition=c,xt=l}return null}function w_(t,i,s,l){do _s();while(rr!==null);if(yt&6)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(sn(t,h),t===tn&&(Xt=tn=null,an=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Ua||(Ua=!0,fp(Le,function(){return _s(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Wn.transition,Wn.transition=null;var M=xt;xt=1;var U=yt;yt|=4,Qu.current=null,x_(t,s),Zh(s,t),Xg(au),qo=!!ou,au=ou=null,t.current=s,y_(s),J(),yt=U,xt=M,Wn.transition=h}else t.current=s;if(Ua&&(Ua=!1,rr=t,Ia=c),h=t.pendingLanes,h===0&&(ir=null),mt(s.stateNode),Rn(t,q()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Da)throw Da=!1,t=tc,tc=null,t;return Ia&1&&t.tag!==0&&_s(),h=t.pendingLanes,h&1?t===nc?Eo++:(Eo=0,nc=t):Eo=0,Ji(),null}function _s(){if(rr!==null){var t=li(Ia),i=Wn.transition,s=xt;try{if(Wn.transition=null,xt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Ia=0,yt&6)throw Error(n(331));var c=yt;for(yt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if(Fe.flags&16){var U=h.deletions;if(U!==null){for(var O=0;O<U.length;O++){var ee=U[O];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:yo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,De=_e.return;if(jh(_e),_e===ee){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var ze=h.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Vt=Ve.sibling;Ve.sibling=null,Ve=Vt}while(Ve!==null)}}Fe=h}}if(h.subtreeFlags&2064&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Fe=Y;break e}Fe=h.return}}var G=t.current;for(Fe=G;Fe!==null;){M=Fe;var $=M.child;if(M.subtreeFlags&2064&&$!==null)$.return=M,Fe=$;else e:for(M=G;Fe!==null;){if(U=Fe,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:Pa(9,U)}}catch(Xe){Ht(U,U.return,Xe)}if(U===M){Fe=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,Fe=Ee;break e}Fe=U.return}}if(yt=c,Ji(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{xt=s,Wn.transition=i}}return!1}function lp(t,i,s){i=hs(s,i),i=Ah(t,i,1),t=tr(t,i,1),i=yn(),t!==null&&(Qt(t,1,i),Rn(t,i))}function Ht(t,i,s){if(t.tag===3)lp(t,t,s);else for(;i!==null;){if(i.tag===3){lp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=hs(s,t),t=Rh(i,t,1),i=tr(i,t,1),t=yn(),i!==null&&(Qt(i,1,t),Rn(i,t));break}}i=i.return}}function A_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&s,tn===t&&(an&s)===s&&($t===4||$t===3&&(an&130023424)===an&&500>q()-ec?Lr(t,0):Ju|=s),Rn(t,i)}function up(t,i){i===0&&(t.mode&1?(i=zt,zt<<=1,!(zt&130023424)&&(zt=4194304)):i=1);var s=yn();t=Ti(t,i),t!==null&&(Qt(t,i,s),Rn(t,s))}function R_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),up(t,s)}function C_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),up(t,s)}var cp;cp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)wn=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return wn=!1,m_(t,i,s);wn=!!(t.flags&131072)}else wn=!1,Ft&&i.flags&1048576&&Gd(i,da,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ra(t,i),t=i.pendingProps;var c=ss(i,cn.current);fs(i,s),c=Lu(null,i,l,t,c,s);var h=Du();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(h=!0,ua(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Tu(i),c.updater=wa,i.stateNode=c,c._reactInternals=i,Bu(i,l,t,s),i=Vu(null,i,l,!0,h,s)):(i.tag=0,Ft&&h&&pu(i),xn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ra(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=b_(l),t=Zn(l,t),c){case 0:i=Hu(null,i,l,t,s);break e;case 1:i=Fh(null,i,l,t,s);break e;case 11:i=Lh(null,i,l,t,s);break e;case 14:i=Dh(null,i,l,Zn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Hu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Fh(t,i,l,c,s);case 3:e:{if(Oh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Qd(t,i),va(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=hs(Error(n(423)),i),i=Bh(t,i,l,s,c);break e}else if(l!==c){c=hs(Error(n(424)),i),i=Bh(t,i,l,s,c);break e}else for(Nn=Ki(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,Kn=null,s=Kd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ls(),l===c){i=Ai(t,i,s);break e}xn(t,i,l,s)}i=i.child}return i;case 5:return th(i),t===null&&_u(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,lu(l,c)?M=null:h!==null&&lu(l,h)&&(i.flags|=32),Nh(t,i),xn(t,i,M,s),i.child;case 6:return t===null&&_u(i),null;case 13:return kh(t,i,s);case 4:return wu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,s):xn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Lh(t,i,l,c,s);case 7:return xn(t,i,i.pendingProps,s),i.child;case 8:return xn(t,i,i.pendingProps.children,s),i.child;case 12:return xn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(ma,l._currentValue),l._currentValue=M,h!==null)if($n(h.value,M)){if(h.children===c.children&&!En.current){i=Ai(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){M=h.child;for(var O=U.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=wi(-1,s&-s),O.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),ee.pending=O}}h.lanes|=s,O=h.alternate,O!==null&&(O.lanes|=s),Mu(h.return,s,i),U.lanes|=s;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,U=M.alternate,U!==null&&(U.lanes|=s),Mu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}xn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,fs(i,s),c=Vn(c),l=l(c),i.flags|=1,xn(t,i,l,s),i.child;case 14:return l=i.type,c=Zn(l,i.pendingProps),c=Zn(l.type,c),Dh(t,i,l,c,s);case 15:return Uh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Ra(t,i),i.tag=1,Tn(l)?(t=!0,ua(i)):t=!1,fs(i,s),Th(i,l,c),Bu(i,l,c,s),Vu(null,i,l,!0,t,s);case 19:return Hh(t,i,s);case 22:return Ih(t,i,s)}throw Error(n(156,i.tag))};function fp(t,i){return Xo(t,i)}function P_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,s,l){return new P_(t,i,s,l)}function lc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b_(t){if(typeof t=="function")return lc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===he)return 14}return 2}function ar(t,i){var s=t.alternate;return s===null?(s=Xn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ba(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")lc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Ur(s.children,c,h,i);case V:M=8,c|=8;break;case P:return t=Xn(12,s,i,c|2),t.elementType=P,t.lanes=h,t;case te:return t=Xn(13,s,i,c),t.elementType=te,t.lanes=h,t;case ce:return t=Xn(19,s,i,c),t.elementType=ce,t.lanes=h,t;case le:return ka(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case k:M=9;break e;case se:M=11;break e;case he:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,s,l){return t=Xn(7,t,l,i),t.lanes=s,t}function ka(t,i,s,l){return t=Xn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function uc(t,i,s){return t=Xn(6,t,null,i),t.lanes=s,t}function cc(t,i,s){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function L_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function fc(t,i,s,l,c,h,M,U,O){return t=new L_(t,i,s,U,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(h),t}function D_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function dp(t){if(!t)return Qi;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Tn(s))return zd(t,s,i)}return i}function hp(t,i,s,l,c,h,M,U,O){return t=fc(s,l,!0,t,c,h,M,U,O),t.context=dp(null),s=t.current,l=yn(),c=sr(s),h=wi(l,c),h.callback=i??null,tr(s,h,c),t.current.lanes=c,Qt(t,c,l),Rn(t,l),t}function za(t,i,s,l){var c=i.current,h=yn(),M=sr(c);return s=dp(s),i.context===null?i.context=s:i.pendingContext=s,i=wi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,M),t!==null&&(ei(t,c,M,h),_a(t,c,M)),M}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function dc(t,i){pp(t,i),(t=t.alternate)&&pp(t,i)}var mp=typeof reportError=="function"?reportError:function(t){console.error(t)};function hc(t){this._internalRoot=t}Va.prototype.render=hc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));za(t,i,null,null)},Va.prototype.unmount=hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){za(null,t,null,null)}),i[yi]=null}};function Va(t){this._internalRoot=t}Va.prototype.unstable_scheduleHydration=function(t){if(t){var i=Qf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Yi.length&&i!==0&&i<Yi[s].priority;s++);Yi.splice(s,0,t),s===0&&td(t)}};function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function U_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ee=Ha(M);h.call(ee)}}var M=hp(i,l,t,0,null,!1,!1,"",gp);return t._reactRootContainer=M,t[yi]=M.current,oo(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var U=l;l=function(){var ee=Ha(O);U.call(ee)}}var O=fc(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=O,t[yi]=O.current,oo(t.nodeType===8?t.parentNode:t),br(function(){za(i,O,s,l)}),O}function Wa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var U=c;c=function(){var O=Ha(M);U.call(O)}}za(i,M,t,c)}else M=U_(s,i,t,c,l);return Ha(M)}Kf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=pt(i.pendingLanes);s!==0&&(Jt(i,s|1),Rn(i,q()),!(yt&6)&&(gs=q()+500,Ji()))}break;case 13:br(function(){var l=Ti(t,1);if(l!==null){var c=yn();ei(l,t,1,c)}}),dc(t,1)}},kl=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var s=yn();ei(i,t,134217728,s)}dc(t,134217728)}},Zf=function(t){if(t.tag===13){var i=sr(t),s=Ti(t,i);if(s!==null){var l=yn();ei(s,t,i,l)}dc(t,i)}},Qf=function(){return xt},Jf=function(t,i){var s=xt;try{return xt=t,i()}finally{xt=s}},Ae=function(t,i,s){switch(i){case"input":if(ut(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=aa(l);if(!c)throw Error(n(90));ht(l),ut(l,c)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&L(t,!!s.multiple,i,!1)}},Dt=sc,Yt=br;var I_={usingClientEntryPoint:!1,Events:[uo,is,aa,Pe,it,sc]},To={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N_={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Go(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Qe=Xa.inject(N_),He=Xa}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I_,Cn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(i))throw Error(n(200));return D_(t,i,null,s)},Cn.createRoot=function(t,i){if(!pc(t))throw Error(n(299));var s=!1,l="",c=mp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=fc(t,1,!1,null,null,s,!1,l,c),t[yi]=i.current,oo(t.nodeType===8?t.parentNode:t),new hc(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Go(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return br(t)},Cn.hydrate=function(t,i,s){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!0,s)},Cn.hydrateRoot=function(t,i,s){if(!pc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=mp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=hp(i,null,t,1,s??null,c,!1,h,M),t[yi]=i.current,oo(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Va(i)},Cn.render=function(t,i,s){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!1,s)},Cn.unmountComponentAtNode=function(t){if(!Ga(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Wa(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},Cn.unstable_batchedUpdates=sc,Cn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Ga(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wa(t,i,s,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Tp;function G_(){if(Tp)return _c.exports;Tp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),_c.exports=V_(),_c.exports}var wp;function W_(){if(wp)return ja;wp=1;var o=G_();return ja.createRoot=o.createRoot,ja.hydrateRoot=o.hydrateRoot,ja}var X_=W_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="172",j_=0,Ap=1,Y_=2,wm=1,q_=2,Ui=3,vr=0,bn=1,Ii=2,gr=0,Is=1,Rp=2,Cp=3,Pp=4,$_=5,Vr=100,K_=101,Z_=102,Q_=103,J_=104,ev=200,tv=201,nv=202,iv=203,Zc=204,Qc=205,rv=206,sv=207,ov=208,av=209,lv=210,uv=211,cv=212,fv=213,dv=214,Jc=0,ef=1,tf=2,Os=3,nf=4,rf=5,sf=6,of=7,Am=0,hv=1,pv=2,_r=0,mv=1,gv=2,_v=3,vv=4,xv=5,yv=6,Sv=7,Rm=300,Bs=301,ks=302,af=303,lf=304,Ul=306,uf=1e3,Wr=1001,cf=1002,oi=1003,Mv=1004,Ya=1005,pi=1006,yc=1007,Xr=1008,ki=1009,Cm=1010,Pm=1011,Uo=1012,Hf=1013,jr=1014,Ni=1015,Io=1016,Vf=1017,Gf=1018,zs=1020,bm=35902,Lm=1021,Dm=1022,si=1023,Um=1024,Im=1025,Ns=1026,Hs=1027,Nm=1028,Wf=1029,Fm=1030,Xf=1031,jf=1033,yl=33776,Sl=33777,Ml=33778,El=33779,ff=35840,df=35841,hf=35842,pf=35843,mf=36196,gf=37492,_f=37496,vf=37808,xf=37809,yf=37810,Sf=37811,Mf=37812,Ef=37813,Tf=37814,wf=37815,Af=37816,Rf=37817,Cf=37818,Pf=37819,bf=37820,Lf=37821,Tl=36492,Df=36494,Uf=36495,Om=36283,If=36284,Nf=36285,Ff=36286,Ev=3200,Tv=3201,wv=0,Av=1,mr="",Yn="srgb",Vs="srgb-linear",Cl="linear",Ct="srgb",vs=7680,bp=519,Rv=512,Cv=513,Pv=514,Bm=515,bv=516,Lv=517,Dv=518,Uv=519,Lp=35044,Dp="300 es",Fi=2e3,Pl=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wl=Math.PI/180,Of=180/Math.PI;function No(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function Iv(o,e){return(o%e+e)%e}function Sc(o,e,n){return(1-n)*o+n*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],v=r[2],S=r[5],T=r[8],A=a[0],y=a[3],g=a[6],D=a[1],b=a[4],C=a[7],H=a[2],F=a[5],I=a[8];return u[0]=f*A+d*D+p*H,u[3]=f*y+d*b+p*F,u[6]=f*g+d*C+p*I,u[1]=m*A+_*D+x*H,u[4]=m*y+_*b+x*F,u[7]=m*g+_*C+x*I,u[2]=v*A+S*D+T*H,u[5]=v*y+S*b+T*F,u[8]=v*g+S*C+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=_*f-d*m,v=d*p-_*u,S=m*u-f*p,T=n*x+r*v+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(a*m-_*r)*A,e[2]=(d*r-a*f)*A,e[3]=v*A,e[4]=(_*n-a*p)*A,e[5]=(a*u-d*n)*A,e[6]=S*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new st;function km(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Nv(){const o=bl("canvas");return o.style.display="block",o}const Up={};function Ds(o){o in Up||(Up[o]=!0,console.warn(o))}function Fv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Ov(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ip=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kv(){const o={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ct&&(a.r=Bi(a.r),a.g=Bi(a.g),a.b=Bi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ct&&(a.r=Fs(a.r),a.g=Fs(a.g),a.b=Fs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?Cl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Vs]:{primaries:e,whitePoint:r,transfer:Cl,toXYZ:Ip,fromXYZ:Np,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:Ct,toXYZ:Ip,fromXYZ:Np,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),o}const Mt=kv();function Bi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xs;class zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=bl("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Bi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bi(n[r]/255)*255):n[r]=Bi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hv=0;class zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Ec(a[f].image)):u.push(Ec(a[f]))}else u=Ec(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ec(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vv=0;class Ln extends Ws{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Wr,a=Wr,u=pi,f=Xr,d=si,p=ki,m=Ln.DEFAULT_ANISOTROPY,_=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=No(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Rm;Ln.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],x=p[8],v=p[1],S=p[5],T=p[9],A=p[2],y=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,C=(S+1)/2,H=(g+1)/2,F=(_+v)/4,I=(x+A)/4,V=(T+y)/4;return b>C&&b>H?b<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(b),a=F/r,u=I/r):C>H?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=F/a,u=V/a):H<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(H),r=I/u,a=V/u),this.set(r,a,u,n),this}let D=Math.sqrt((y-T)*(y-T)+(x-A)*(x-A)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(x-A)/D,this.z=(v-_)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gv extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new zm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends Gv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Hm extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wv extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const v=u[f+0],S=u[f+1],T=u[f+2],A=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=v,e[n+1]=S,e[n+2]=T,e[n+3]=A;return}if(x!==A||p!==v||m!==S||_!==T){let y=1-d;const g=p*v+m*S+_*T+x*A,D=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const H=Math.sqrt(b),F=Math.atan2(H,g*D);y=Math.sin(y*F)/H,d=Math.sin(d*F)/H}const C=d*D;if(p=p*y+v*C,m=m*y+S*C,_=_*y+T*C,x=x*y+A*C,y===1-d){const H=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=H,m*=H,_*=H,x*=H}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=u[f],v=u[f+1],S=u[f+2],T=u[f+3];return e[n]=d*T+_*x+p*S-m*v,e[n+1]=p*T+_*v+m*x-d*S,e[n+2]=m*T+_*S+d*v-p*x,e[n+3]=_*T-d*x-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),x=d(u/2),v=p(r/2),S=p(a/2),T=p(u/2);switch(f){case"XYZ":this._x=v*_*x+m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x-v*S*T;break;case"YXZ":this._x=v*_*x+m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x+v*S*T;break;case"ZXY":this._x=v*_*x-m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x-v*S*T;break;case"ZYX":this._x=v*_*x-m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x+v*S*T;break;case"YZX":this._x=v*_*x+m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x-v*S*T;break;case"XZY":this._x=v*_*x-m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],x=n[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,v=Math.sin(n*_)/m;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=a*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+p*m+f*x-d*_,this.y=r+p*_+d*m-u*x,this.z=a+p*x+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new K,Fp=new Fo;class Oo{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ti):ti.fromBufferAttribute(u,f),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qa.copy(r.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),$a.subVectors(this.max,Ro),ys.subVectors(e.a,Ro),Ss.subVectors(e.b,Ro),Ms.subVectors(e.c,Ro),ur.subVectors(Ss,ys),cr.subVectors(Ms,Ss),Ir.subVectors(ys,Ms);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ir.z,Ir.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ir.z,0,-Ir.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ir.y,Ir.x,0];return!wc(n,ys,Ss,Ms,$a)||(n=[1,0,0,0,1,0,0,0,1],!wc(n,ys,Ss,Ms,$a))?!1:(Ka.crossVectors(ur,cr),n=[Ka.x,Ka.y,Ka.z],wc(n,ys,Ss,Ms,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new K,new K,new K,new K,new K,new K,new K,new K],ti=new K,qa=new Oo,ys=new K,Ss=new K,Ms=new K,ur=new K,cr=new K,Ir=new K,Ro=new K,$a=new K,Ka=new K,Nr=new K;function wc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Nr.fromArray(o,u);const d=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),p=e.dot(Nr),m=n.dot(Nr),_=r.dot(Nr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Xv=new Oo,Co=new K,Ac=new K;class Il{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Xv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Co,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Ac)),this.expandByPoint(Co.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new K,Rc=new K,Za=new K,fr=new K,Cc=new K,Qa=new K,Pc=new K;class Vm{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Rc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Rc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Za),d=fr.dot(this.direction),p=-fr.dot(Za),m=fr.lengthSq(),_=Math.abs(1-f*f);let x,v,S,T;if(_>0)if(x=f*p-d,v=f*d-p,T=u*_,x>=0)if(v>=-T)if(v<=T){const A=1/_;x*=A,v*=A,S=x*(x+f*v+2*d)+v*(f*x+v+2*p)+m}else v=u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;else v<=-T?(x=Math.max(0,-(-f*u+d)),v=x>0?-u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m):v<=T?(x=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+m):(x=Math.max(0,-(f*u+d)),v=x>0?u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m);else v=f>0?-u:u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Rc).addScaledVector(Za,v),S}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const r=Pi.dot(this.direction),a=Pi.dot(Pi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(u=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,r,a,u){Cc.subVectors(n,e),Qa.subVectors(r,e),Pc.crossVectors(Cc,Qa);let f=this.direction.dot(Pc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const p=d*this.direction.dot(Qa.crossVectors(fr,Qa));if(p<0)return null;const m=d*this.direction.dot(Cc.cross(fr));if(m<0||p+m>f)return null;const _=-d*fr.dot(Pc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,r,a,u,f,d,p,m,_,x,v,S,T,A,y){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,x,v,S,T,A,y)}set(e,n,r,a,u,f,d,p,m,_,x,v,S,T,A,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=T,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Es.setFromMatrixColumn(e,0).length(),u=1/Es.setFromMatrixColumn(e,1).length(),f=1/Es.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=f*_,S=f*x,T=d*_,A=d*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=S+T*m,n[5]=v-A*m,n[9]=-d*p,n[2]=A-v*m,n[6]=T+S*m,n[10]=f*p}else if(e.order==="YXZ"){const v=p*_,S=p*x,T=m*_,A=m*x;n[0]=v+A*d,n[4]=T*d-S,n[8]=f*m,n[1]=f*x,n[5]=f*_,n[9]=-d,n[2]=S*d-T,n[6]=A+v*d,n[10]=f*p}else if(e.order==="ZXY"){const v=p*_,S=p*x,T=m*_,A=m*x;n[0]=v-A*d,n[4]=-f*x,n[8]=T+S*d,n[1]=S+T*d,n[5]=f*_,n[9]=A-v*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const v=f*_,S=f*x,T=d*_,A=d*x;n[0]=p*_,n[4]=T*m-S,n[8]=v*m+A,n[1]=p*x,n[5]=A*m+v,n[9]=S*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const v=f*p,S=f*m,T=d*p,A=d*m;n[0]=p*_,n[4]=A-v*x,n[8]=T*x+S,n[1]=x,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*x+T,n[10]=v-A*x}else if(e.order==="XZY"){const v=f*p,S=f*m,T=d*p,A=d*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=v*x+A,n[5]=f*_,n[9]=S*x-T,n[2]=T*x-S,n[6]=d*_,n[10]=A*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Yv)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),dr.crossVectors(r,On),dr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),dr.crossVectors(r,On)),dr.normalize(),Ja.crossVectors(On,dr),a[0]=dr.x,a[4]=Ja.x,a[8]=On.x,a[1]=dr.y,a[5]=Ja.y,a[9]=On.y,a[2]=dr.z,a[6]=Ja.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],v=r[9],S=r[13],T=r[2],A=r[6],y=r[10],g=r[14],D=r[3],b=r[7],C=r[11],H=r[15],F=a[0],I=a[4],V=a[8],P=a[12],R=a[1],k=a[5],se=a[9],te=a[13],ce=a[2],he=a[6],oe=a[10],le=a[14],z=a[3],ae=a[7],re=a[11],N=a[15];return u[0]=f*F+d*R+p*ce+m*z,u[4]=f*I+d*k+p*he+m*ae,u[8]=f*V+d*se+p*oe+m*re,u[12]=f*P+d*te+p*le+m*N,u[1]=_*F+x*R+v*ce+S*z,u[5]=_*I+x*k+v*he+S*ae,u[9]=_*V+x*se+v*oe+S*re,u[13]=_*P+x*te+v*le+S*N,u[2]=T*F+A*R+y*ce+g*z,u[6]=T*I+A*k+y*he+g*ae,u[10]=T*V+A*se+y*oe+g*re,u[14]=T*P+A*te+y*le+g*N,u[3]=D*F+b*R+C*ce+H*z,u[7]=D*I+b*k+C*he+H*ae,u[11]=D*V+b*se+C*oe+H*re,u[15]=D*P+b*te+C*le+H*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],x=e[6],v=e[10],S=e[14],T=e[3],A=e[7],y=e[11],g=e[15];return T*(+u*p*x-a*m*x-u*d*v+r*m*v+a*d*S-r*p*S)+A*(+n*p*S-n*m*v+u*f*v-a*f*S+a*m*_-u*p*_)+y*(+n*m*x-n*d*S-u*f*x+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*p*x+n*d*v+a*f*x-r*f*v+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=e[9],v=e[10],S=e[11],T=e[12],A=e[13],y=e[14],g=e[15],D=x*y*m-A*v*m+A*p*S-d*y*S-x*p*g+d*v*g,b=T*v*m-_*y*m-T*p*S+f*y*S+_*p*g-f*v*g,C=_*A*m-T*x*m+T*d*S-f*A*S-_*d*g+f*x*g,H=T*x*p-_*A*p-T*d*v+f*A*v+_*d*y-f*x*y,F=n*D+r*b+a*C+u*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=D*I,e[1]=(A*v*u-x*y*u-A*a*S+r*y*S+x*a*g-r*v*g)*I,e[2]=(d*y*u-A*p*u+A*a*m-r*y*m-d*a*g+r*p*g)*I,e[3]=(x*p*u-d*v*u-x*a*m+r*v*m+d*a*S-r*p*S)*I,e[4]=b*I,e[5]=(_*y*u-T*v*u+T*a*S-n*y*S-_*a*g+n*v*g)*I,e[6]=(T*p*u-f*y*u-T*a*m+n*y*m+f*a*g-n*p*g)*I,e[7]=(f*v*u-_*p*u+_*a*m-n*v*m-f*a*S+n*p*S)*I,e[8]=C*I,e[9]=(T*x*u-_*A*u-T*r*S+n*A*S+_*r*g-n*x*g)*I,e[10]=(f*A*u-T*d*u+T*r*m-n*A*m-f*r*g+n*d*g)*I,e[11]=(_*d*u-f*x*u-_*r*m+n*x*m+f*r*S-n*d*S)*I,e[12]=H*I,e[13]=(_*A*a-T*x*a+T*r*v-n*A*v-_*r*y+n*x*y)*I,e[14]=(T*d*a-f*A*a-T*r*p+n*A*p+f*r*y-n*d*y)*I,e[15]=(f*x*a-_*d*a+_*r*p-n*x*p-f*r*v+n*d*v)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,x=d+d,v=u*m,S=u*_,T=u*x,A=f*_,y=f*x,g=d*x,D=p*m,b=p*_,C=p*x,H=r.x,F=r.y,I=r.z;return a[0]=(1-(A+g))*H,a[1]=(S+C)*H,a[2]=(T-b)*H,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(v+g))*F,a[6]=(y+D)*F,a[7]=0,a[8]=(T+b)*I,a[9]=(y-D)*I,a[10]=(1-(v+A))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Es.set(a[0],a[1],a[2]).length();const f=Es.set(a[4],a[5],a[6]).length(),d=Es.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/u,_=1/f,x=1/d;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=_,ni.elements[5]*=_,ni.elements[6]*=_,ni.elements[8]*=x,ni.elements[9]*=x,ni.elements[10]*=x,n.setFromRotationMatrix(ni),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Fi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),x=(n+e)/(n-e),v=(r+a)/(r-a);let S,T;if(d===Fi)S=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Pl)S=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Fi){const p=this.elements,m=1/(n-e),_=1/(r-a),x=1/(f-u),v=(n+e)*m,S=(r+a)*_;let T,A;if(d===Fi)T=(f+u)*x,A=-2*x;else if(d===Pl)T=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Es=new K,ni=new Wt,jv=new K(0,0,0),Yv=new K(1,1,1),dr=new K,Ja=new K,On=new K,Op=new Wt,Bp=new Fo;class zi{constructor(e=0,n=0,r=0,a=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-gt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qv=0;const kp=new K,Ts=new Fo,bi=new Wt,el=new K,Po=new K,$v=new K,Kv=new Fo,zp=new K(1,0,0),Hp=new K(0,1,0),Vp=new K(0,0,1),Gp={type:"added"},Zv={type:"removed"},ws={type:"childadded",child:null},bc={type:"childremoved",child:null};class Dn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new K,n=new zi,r=new Fo,a=new K(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new st}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?el.copy(e):el.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Po,el,this.up):bi.lookAt(el,Po,this.up),this.quaternion.setFromRotationMatrix(bi),a&&(bi.extractRotation(a.matrixWorld),Ts.setFromRotationMatrix(bi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Zv),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,Kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),x=f(e.shapes),v=f(e.skeletons),S=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Dn.DEFAULT_UP=new K(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new K,Li=new K,Lc=new K,Di=new K,As=new K,Rs=new K,Wp=new K,Dc=new K,Uc=new K,Ic=new K,Nc=new Gt,Fc=new Gt,Oc=new Gt;class qn{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ii.subVectors(a,n),Li.subVectors(r,n),Lc.subVectors(e,n);const f=ii.dot(ii),d=ii.dot(Li),p=ii.dot(Lc),m=Li.dot(Li),_=Li.dot(Lc),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,S=(m*p-d*_)*v,T=(f*_-d*p)*v;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Di)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Di.x),p.addScaledVector(f,Di.y),p.addScaledVector(d,Di.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Nc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Nc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,r),Oc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Nc,u.x),f.addScaledVector(Fc,u.y),f.addScaledVector(Oc,u.z),f}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),Li.subVectors(e,n),ii.cross(Li).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return qn.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;As.subVectors(a,r),Rs.subVectors(u,r),Dc.subVectors(e,r);const p=As.dot(Dc),m=Rs.dot(Dc);if(p<=0&&m<=0)return n.copy(r);Uc.subVectors(e,a);const _=As.dot(Uc),x=Rs.dot(Uc);if(_>=0&&x<=_)return n.copy(a);const v=p*x-_*m;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(As,f);Ic.subVectors(e,u);const S=As.dot(Ic),T=Rs.dot(Ic);if(T>=0&&S<=T)return n.copy(u);const A=S*m-p*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Rs,d);const y=_*T-S*x;if(y<=0&&x-_>=0&&S-T>=0)return Wp.subVectors(u,a),d=(x-_)/(x-_+(S-T)),n.copy(a).addScaledVector(Wp,d);const g=1/(y+A+v);return f=A*g,d=v*g,n.copy(r).addScaledVector(As,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Bc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class At{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Iv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Bc(f,u,e+1/3),this.g=Bc(f,u,e),this.b=Bc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=Yn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const r=Wm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Mt.fromWorkingColorSpace(mn.copy(this),e),Math.round(gt(mn.r*255,0,255))*65536+Math.round(gt(mn.g*255,0,255))*256+Math.round(gt(mn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,u=mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=_<=.5?x/(f+d):x/(2-f-d),f){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Yn){Mt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(tl);const r=Sc(hr.h,tl.h,n),a=Sc(hr.s,tl.s,n),u=Sc(hr.l,tl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new At;At.NAMES=Wm;let Qv=0;class Bo extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Is,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Qc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zc&&(r.blendSrc=this.blendSrc),this.blendDst!==Qc&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xm extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new K,nl=new Tt;class mi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Lp,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),u=Pn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lp&&(e.usage=this.usage),e}}class jm extends mi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ym extends mi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class kn extends mi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Jv=0;const jn=new Wt,kc=new Dn,Cs=new K,Bn=new Oo,bo=new Oo,rn=new K;class gi extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?Ym:jm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new kn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Bn.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(Bn.min,bo.min),Bn.expandByPoint(rn),rn.addVectors(Bn.max,bo.max),Bn.expandByPoint(rn)):(Bn.expandByPoint(bo.min),Bn.expandByPoint(bo.max))}Bn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)rn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)rn.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),rn.add(Cs)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new K,p[V]=new K;const m=new K,_=new K,x=new K,v=new Tt,S=new Tt,T=new Tt,A=new K,y=new K;function g(V,P,R){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,R),v.fromBufferAttribute(u,V),S.fromBufferAttribute(u,P),T.fromBufferAttribute(u,R),_.sub(m),x.sub(m),S.sub(v),T.sub(v);const k=1/(S.x*T.y-T.x*S.y);isFinite(k)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(k),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(k),d[V].add(A),d[P].add(A),d[R].add(A),p[V].add(y),p[P].add(y),p[R].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,P=D.length;V<P;++V){const R=D[V],k=R.start,se=R.count;for(let te=k,ce=k+se;te<ce;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const b=new K,C=new K,H=new K,F=new K;function I(V){H.fromBufferAttribute(a,V),F.copy(H);const P=d[V];b.copy(P),b.sub(H.multiplyScalar(H.dot(P))).normalize(),C.crossVectors(F,P);const k=C.dot(p[V])<0?-1:1;f.setXYZW(V,b.x,b.y,b.z,k)}for(let V=0,P=D.length;V<P;++V){const R=D[V],k=R.start,se=R.count;for(let te=k,ce=k+se;te<ce;te+=3)I(e.getX(te+0)),I(e.getX(te+1)),I(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new K,u=new K,f=new K,d=new K,p=new K,m=new K,_=new K,x=new K;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,y),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)a.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,x=d.normalized,v=new m.constructor(p.length*_);let S=0,T=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*_;for(let g=0;g<_;g++)v[T++]=m[S++]}return new mi(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const v=m[_],S=e(v,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new Wt,Fr=new Vm,il=new Il,jp=new K,rl=new K,sl=new K,ol=new K,zc=new K,al=new K,Yp=new K,ll=new K;class Oi extends Dn{constructor(e=new gi,n=new Xm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){al.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],x=u[p];_!==0&&(zc.fromBufferAttribute(x,e),f?al.addScaledVector(zc,_):al.addScaledVector(zc.sub(n),_))}n.add(al)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),il.copy(r.boundingSphere),il.applyMatrix4(u),Fr.copy(e.ray).recast(e.near),!(il.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(il,jp)===null||Fr.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Xp.copy(u).invert(),Fr.copy(e.ray).applyMatrix4(Xp),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,A=v.length;T<A;T++){const y=v[T],g=f[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,H=b;C<H;C+=3){const F=d.getX(C),I=d.getX(C+1),V=d.getX(C+2);a=ul(this,g,e,r,m,_,x,F,I,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=T,g=A;y<g;y+=3){const D=d.getX(y),b=d.getX(y+1),C=d.getX(y+2);a=ul(this,f,e,r,m,_,x,D,b,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,A=v.length;T<A;T++){const y=v[T],g=f[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,H=b;C<H;C+=3){const F=C,I=C+1,V=C+2;a=ul(this,g,e,r,m,_,x,F,I,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=T,g=A;y<g;y+=3){const D=y,b=y+1,C=y+2;a=ul(this,f,e,r,m,_,x,D,b,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function e0(o,e,n,r,a,u,f,d){let p;if(e.side===bn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===vr,d),p===null)return null;ll.copy(d),ll.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(ll);return m<n.near||m>n.far?null:{distance:m,point:ll.clone(),object:o}}function ul(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,rl),o.getVertexPosition(p,sl),o.getVertexPosition(m,ol);const _=e0(o,e,n,r,rl,sl,ol,Yp);if(_){const x=new K;qn.getBarycoord(Yp,rl,sl,ol,x),a&&(_.uv=qn.getInterpolatedAttribute(a,d,p,m,x,new Tt)),u&&(_.uv1=qn.getInterpolatedAttribute(u,d,p,m,x,new Tt)),f&&(_.normal=qn.getInterpolatedAttribute(f,d,p,m,x,new K),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new K,materialIndex:0};qn.getNormal(rl,sl,ol,v.normal),_.face=v,_.barycoord=x}return _}class Xs extends gi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],x=[];let v=0,S=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new kn(m,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(x,2));function T(A,y,g,D,b,C,H,F,I,V,P){const R=C/I,k=H/V,se=C/2,te=H/2,ce=F/2,he=I+1,oe=V+1;let le=0,z=0;const ae=new K;for(let re=0;re<oe;re++){const N=re*k-te;for(let ne=0;ne<he;ne++){const Ie=ne*R-se;ae[A]=Ie*D,ae[y]=N*b,ae[g]=ce,m.push(ae.x,ae.y,ae.z),ae[A]=0,ae[y]=0,ae[g]=F>0?1:-1,_.push(ae.x,ae.y,ae.z),x.push(ne/I),x.push(1-re/V),le+=1}}for(let re=0;re<V;re++)for(let N=0;N<I;N++){const ne=v+N+he*re,Ie=v+N+he*(re+1),Q=v+(N+1)+he*(re+1),de=v+(N+1)+he*re;p.push(ne,Ie,de),p.push(Ie,Q,de),z+=6}d.addGroup(S,z,P),S+=z,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Sn(o){const e={};for(let n=0;n<o.length;n++){const r=Gs(o[n]);for(const a in r)e[a]=r[a]}return e}function t0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function qm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const n0={clone:Gs,merge:Sn};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class $m extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new K,qp=new Tt,$p=new Tt;class ri extends $m{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,qp,$p),n.subVectors($p,qp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,bs=1;class s0 extends Dn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(Ps,bs,e,n);a.layers=this.layers,this.add(a);const u=new ri(Ps,bs,e,n);u.layers=this.layers,this.add(u);const f=new ri(Ps,bs,e,n);f.layers=this.layers,this.add(f);const d=new ri(Ps,bs,e,n);d.layers=this.layers,this.add(d);const p=new ri(Ps,bs,e,n);p.layers=this.layers,this.add(p);const m=new ri(Ps,bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,v,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Km extends Ln{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o0 extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Km(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Xs(5,5,5),u=new xr({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:gr});u.uniforms.tEquirect.value=n;const f=new Oi(a,u),d=n.minFilter;return n.minFilter===Xr&&(n.minFilter=pi),new s0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class a0 extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hc=new K,l0=new K,u0=new st;class zr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Hc.subVectors(r,n).cross(l0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Hc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||u0.getNormalMatrix(e),a=this.coplanarPoint(Hc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Il,cl=new K;class Zm{constructor(e=new zr,n=new zr,r=new zr,a=new zr,u=new zr,f=new zr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],x=a[6],v=a[7],S=a[8],T=a[9],A=a[10],y=a[11],g=a[12],D=a[13],b=a[14],C=a[15];if(r[0].setComponents(p-u,v-m,y-S,C-g).normalize(),r[1].setComponents(p+u,v+m,y+S,C+g).normalize(),r[2].setComponents(p+f,v+_,y+T,C+D).normalize(),r[3].setComponents(p-f,v-_,y-T,C-D).normalize(),r[4].setComponents(p-d,v-x,y-A,C-b).normalize(),n===Fi)r[5].setComponents(p+d,v+x,y+A,C+b).normalize();else if(n===Pl)r[5].setComponents(d,x,A,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qm extends Bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ll=new K,Dl=new K,Kp=new Wt,Lo=new Vm,fl=new Il,Vc=new K,Zp=new K;class c0 extends Dn{constructor(e=new gi,n=new Qm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Ll.fromBufferAttribute(n,a-1),Dl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Ll.distanceTo(Dl);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(a),fl.radius+=u,e.ray.intersectsSphere(fl)===!1)return;Kp.copy(a).invert(),Lo.copy(e.ray).applyMatrix4(Kp);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let A=S,y=T-1;A<y;A+=m){const g=_.getX(A),D=_.getX(A+1),b=dl(this,e,Lo,p,g,D);b&&n.push(b)}if(this.isLineLoop){const A=_.getX(T-1),y=_.getX(S),g=dl(this,e,Lo,p,A,y);g&&n.push(g)}}else{const S=Math.max(0,f.start),T=Math.min(v.count,f.start+f.count);for(let A=S,y=T-1;A<y;A+=m){const g=dl(this,e,Lo,p,A,A+1);g&&n.push(g)}if(this.isLineLoop){const A=dl(this,e,Lo,p,T-1,S);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function dl(o,e,n,r,a,u){const f=o.geometry.attributes.position;if(Ll.fromBufferAttribute(f,a),Dl.fromBufferAttribute(f,u),n.distanceSqToSegment(Ll,Dl,Vc,Zp)>r)return;Vc.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Vc);if(!(p<e.near||p>e.far))return{distance:p,point:Zp.clone().applyMatrix4(o.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:o}}const Qp=new K,Jp=new K;class f0 extends c0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Qp.fromBufferAttribute(n,a),Jp.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Qp.distanceTo(Jp);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hl extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Jm extends Ln{constructor(e,n,r,a,u,f,d,p,m,_=Ns){if(_!==Ns&&_!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Ns&&(r=jr),r===void 0&&_===Hs&&(r=zs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:oi,this.minFilter=p!==void 0?p:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Nl extends gi{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const u=[],f=[];d(a),m(r),_(),this.setAttribute("position",new kn(u,3)),this.setAttribute("normal",new kn(u.slice(),3)),this.setAttribute("uv",new kn(f,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const b=new K,C=new K,H=new K;for(let F=0;F<n.length;F+=3)S(n[F+0],b),S(n[F+1],C),S(n[F+2],H),p(b,C,H,D)}function p(D,b,C,H){const F=H+1,I=[];for(let V=0;V<=F;V++){I[V]=[];const P=D.clone().lerp(C,V/F),R=b.clone().lerp(C,V/F),k=F-V;for(let se=0;se<=k;se++)se===0&&V===F?I[V][se]=P:I[V][se]=P.clone().lerp(R,se/k)}for(let V=0;V<F;V++)for(let P=0;P<2*(F-V)-1;P++){const R=Math.floor(P/2);P%2===0?(v(I[V][R+1]),v(I[V+1][R]),v(I[V][R])):(v(I[V][R+1]),v(I[V+1][R+1]),v(I[V+1][R]))}}function m(D){const b=new K;for(let C=0;C<u.length;C+=3)b.x=u[C+0],b.y=u[C+1],b.z=u[C+2],b.normalize().multiplyScalar(D),u[C+0]=b.x,u[C+1]=b.y,u[C+2]=b.z}function _(){const D=new K;for(let b=0;b<u.length;b+=3){D.x=u[b+0],D.y=u[b+1],D.z=u[b+2];const C=y(D)/2/Math.PI+.5,H=g(D)/Math.PI+.5;f.push(C,1-H)}T(),x()}function x(){for(let D=0;D<f.length;D+=6){const b=f[D+0],C=f[D+2],H=f[D+4],F=Math.max(b,C,H),I=Math.min(b,C,H);F>.9&&I<.1&&(b<.2&&(f[D+0]+=1),C<.2&&(f[D+2]+=1),H<.2&&(f[D+4]+=1))}}function v(D){u.push(D.x,D.y,D.z)}function S(D,b){const C=D*3;b.x=e[C+0],b.y=e[C+1],b.z=e[C+2]}function T(){const D=new K,b=new K,C=new K,H=new K,F=new Tt,I=new Tt,V=new Tt;for(let P=0,R=0;P<u.length;P+=9,R+=6){D.set(u[P+0],u[P+1],u[P+2]),b.set(u[P+3],u[P+4],u[P+5]),C.set(u[P+6],u[P+7],u[P+8]),F.set(f[R+0],f[R+1]),I.set(f[R+2],f[R+3]),V.set(f[R+4],f[R+5]),H.copy(D).add(b).add(C).divideScalar(3);const k=y(H);A(F,R+0,D,k),A(I,R+2,b,k),A(V,R+4,C,k)}}function A(D,b,C,H){H<0&&D.x===1&&(f[b]=D.x-1),C.x===0&&C.z===0&&(f[b]=H/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.vertices,e.indices,e.radius,e.details)}}const pl=new K,ml=new K,Gc=new K,gl=new qn;class d0 extends gi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const a=Math.pow(10,4),u=Math.cos(wl*n),f=e.getIndex(),d=e.getAttribute("position"),p=f?f.count:d.count,m=[0,0,0],_=["a","b","c"],x=new Array(3),v={},S=[];for(let T=0;T<p;T+=3){f?(m[0]=f.getX(T),m[1]=f.getX(T+1),m[2]=f.getX(T+2)):(m[0]=T,m[1]=T+1,m[2]=T+2);const{a:A,b:y,c:g}=gl;if(A.fromBufferAttribute(d,m[0]),y.fromBufferAttribute(d,m[1]),g.fromBufferAttribute(d,m[2]),gl.getNormal(Gc),x[0]=`${Math.round(A.x*a)},${Math.round(A.y*a)},${Math.round(A.z*a)}`,x[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,x[2]=`${Math.round(g.x*a)},${Math.round(g.y*a)},${Math.round(g.z*a)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let D=0;D<3;D++){const b=(D+1)%3,C=x[D],H=x[b],F=gl[_[D]],I=gl[_[b]],V=`${C}_${H}`,P=`${H}_${C}`;P in v&&v[P]?(Gc.dot(v[P].normal)<=u&&(S.push(F.x,F.y,F.z),S.push(I.x,I.y,I.z)),v[P]=null):V in v||(v[V]={index0:m[D],index1:m[b],normal:Gc.clone()})}}for(const T in v)if(v[T]){const{index0:A,index1:y}=v[T];pl.fromBufferAttribute(d,A),ml.fromBufferAttribute(d,y),S.push(pl.x,pl.y,pl.z),S.push(ml.x,ml.y,ml.z)}this.setAttribute("position",new kn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yf extends Nl{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Yf(e.radius,e.detail)}}class Fl extends gi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,x=e/d,v=n/p,S=[],T=[],A=[],y=[];for(let g=0;g<_;g++){const D=g*v-f;for(let b=0;b<m;b++){const C=b*x-u;T.push(C,-D,0),A.push(0,0,1),y.push(b/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const b=D+m*g,C=D+m*(g+1),H=D+1+m*(g+1),F=D+1+m*g;S.push(b,C,F),S.push(C,H,F)}this.setIndex(S),this.setAttribute("position",new kn(T,3)),this.setAttribute("normal",new kn(A,3)),this.setAttribute("uv",new kn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.widthSegments,e.heightSegments)}}class qf extends Nl{constructor(e=1,n=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new qf(e.radius,e.detail)}}class h0 extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p0 extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class eg extends $m{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class m0 extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function em(o,e,n,r){const a=g0(r);switch(n){case Lm:return o*e;case Um:return o*e;case Im:return o*e*2;case Nm:return o*e/a.components*a.byteLength;case Wf:return o*e/a.components*a.byteLength;case Fm:return o*e*2/a.components*a.byteLength;case Xf:return o*e*2/a.components*a.byteLength;case Dm:return o*e*3/a.components*a.byteLength;case si:return o*e*4/a.components*a.byteLength;case jf:return o*e*4/a.components*a.byteLength;case yl:case Sl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:case pf:return Math.max(o,16)*Math.max(e,8)/4;case ff:case hf:return Math.max(o,8)*Math.max(e,8)/2;case mf:case gf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _f:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case wf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Df:case Uf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Om:case If:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Nf:case Ff:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function g0(o){switch(o){case ki:case Cm:return{byteLength:1,components:1};case Uo:case Pm:case Io:return{byteLength:2,components:1};case Vf:case Gf:return{byteLength:2,components:4};case jr:case Hf:case Ni:return{byteLength:4,components:1};case bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tg(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function _0(o){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,x=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(o.bindBuffer(m,d),x.length===0)o.bufferSubData(m,0,_);else{x.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<x.length;S++){const T=x[v],A=x[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++v,x[v]=A)}x.length=v+1;for(let S=0,T=x.length;S<T;S++){const A=x[S];o.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,H0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_x=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ay=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,By=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ky=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:v0,alphahash_pars_fragment:x0,alphamap_fragment:y0,alphamap_pars_fragment:S0,alphatest_fragment:M0,alphatest_pars_fragment:E0,aomap_fragment:T0,aomap_pars_fragment:w0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:b0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:B0,color_pars_vertex:k0,color_vertex:z0,common:H0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:G0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:j0,emissivemap_pars_fragment:Y0,colorspace_fragment:q0,colorspace_pars_fragment:$0,envmap_fragment:K0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:Q0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:cx,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:rx,gradientmap_pars_fragment:sx,lightmap_pars_fragment:ox,lights_lambert_fragment:ax,lights_lambert_pars_fragment:lx,lights_pars_begin:ux,lights_toon_fragment:fx,lights_toon_pars_fragment:dx,lights_phong_fragment:hx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:_x,lights_fragment_maps:vx,lights_fragment_end:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:wx,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Px,morphinstance_vertex:bx,morphcolor_vertex:Lx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Ix,normal_fragment_begin:Nx,normal_fragment_maps:Fx,normal_pars_fragment:Ox,normal_pars_vertex:Bx,normal_vertex:kx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:jx,premultiplied_alpha_fragment:Yx,project_vertex:qx,dithering_fragment:$x,dithering_pars_fragment:Kx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:ey,shadowmap_vertex:ty,shadowmask_pars_fragment:ny,skinbase_vertex:iy,skinning_pars_vertex:ry,skinning_vertex:sy,skinnormal_vertex:oy,specularmap_fragment:ay,specularmap_pars_fragment:ly,tonemapping_fragment:uy,tonemapping_pars_fragment:cy,transmission_fragment:fy,transmission_pars_fragment:dy,uv_pars_fragment:hy,uv_pars_vertex:py,uv_vertex:my,worldpos_vertex:gy,background_vert:_y,background_frag:vy,backgroundCube_vert:xy,backgroundCube_frag:yy,cube_vert:Sy,cube_frag:My,depth_vert:Ey,depth_frag:Ty,distanceRGBA_vert:wy,distanceRGBA_frag:Ay,equirect_vert:Ry,equirect_frag:Cy,linedashed_vert:Py,linedashed_frag:by,meshbasic_vert:Ly,meshbasic_frag:Dy,meshlambert_vert:Uy,meshlambert_frag:Iy,meshmatcap_vert:Ny,meshmatcap_frag:Fy,meshnormal_vert:Oy,meshnormal_frag:By,meshphong_vert:ky,meshphong_frag:zy,meshphysical_vert:Hy,meshphysical_frag:Vy,meshtoon_vert:Gy,meshtoon_frag:Wy,points_vert:Xy,points_frag:jy,shadow_vert:Yy,shadow_frag:qy,sprite_vert:$y,sprite_frag:Ky},Ce={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},hi={basic:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Sn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Sn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Sn([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Sn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Sn([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Sn([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Sn([Ce.common,Ce.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Sn([Ce.lights,Ce.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};hi.physical={uniforms:Sn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const _l={r:0,b:0,g:0},Br=new zi,Zy=new Wt;function Qy(o,e,n,r,a,u,f){const d=new At(0);let p=u===!0?0:1,m,_,x=null,v=0,S=null;function T(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?n:e).get(C)),C}function A(b){let C=!1;const H=T(b);H===null?g(d,p):H&&H.isColor&&(g(H,1),C=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(b,C){const H=T(C);H&&(H.isCubeTexture||H.mapping===Ul)?(_===void 0&&(_=new Oi(new Xs(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:Gs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Br.copy(C.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(Br)),_.material.toneMapped=Mt.getTransfer(H.colorSpace)!==Ct,(x!==H||v!==H.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,x=H,v=H.version,S=o.toneMapping),_.layers.enableAll(),b.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Oi(new Fl(2,2),new xr({name:"BackgroundMaterial",uniforms:Gs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(H.colorSpace)!==Ct,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||v!==H.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,x=H,v=H.version,S=o.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function g(b,C){b.getRGB(_l,qm(o)),r.buffers.color.setClear(_l.r,_l.g,_l.b,C,f)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(b,C=1){d.set(b),p=C,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(b){p=b,g(d,p)},render:A,addToRenderList:y,dispose:D}}function Jy(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=v(null);let u=a,f=!1;function d(R,k,se,te,ce){let he=!1;const oe=x(te,se,k);u!==oe&&(u=oe,m(u.object)),he=S(R,te,se,ce),he&&T(R,te,se,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(R,k,se,te),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function x(R,k,se){const te=se.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let he=ce[k.id];he===void 0&&(he={},ce[k.id]=he);let oe=he[te];return oe===void 0&&(oe=v(p()),he[te]=oe),oe}function v(R){const k=[],se=[],te=[];for(let ce=0;ce<n;ce++)k[ce]=0,se[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:te,object:R,attributes:{},index:null}}function S(R,k,se,te){const ce=u.attributes,he=k.attributes;let oe=0;const le=se.getAttributes();for(const z in le)if(le[z].location>=0){const re=ce[z];let N=he[z];if(N===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;oe++}return u.attributesNum!==oe||u.index!==te}function T(R,k,se,te){const ce={},he=k.attributes;let oe=0;const le=se.getAttributes();for(const z in le)if(le[z].location>=0){let re=he[z];re===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),ce[z]=N,oe++}u.attributes=ce,u.attributesNum=oe,u.index=te}function A(){const R=u.newAttributes;for(let k=0,se=R.length;k<se;k++)R[k]=0}function y(R){g(R,0)}function g(R,k){const se=u.newAttributes,te=u.enabledAttributes,ce=u.attributeDivisors;se[R]=1,te[R]===0&&(o.enableVertexAttribArray(R),te[R]=1),ce[R]!==k&&(o.vertexAttribDivisor(R,k),ce[R]=k)}function D(){const R=u.newAttributes,k=u.enabledAttributes;for(let se=0,te=k.length;se<te;se++)k[se]!==R[se]&&(o.disableVertexAttribArray(se),k[se]=0)}function b(R,k,se,te,ce,he,oe){oe===!0?o.vertexAttribIPointer(R,k,se,ce,he):o.vertexAttribPointer(R,k,se,te,ce,he)}function C(R,k,se,te){A();const ce=te.attributes,he=se.getAttributes(),oe=k.defaultAttributeValues;for(const le in he){const z=he[le];if(z.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Q=ne.type,de=ne.bytesPerElement,Se=Q===o.INT||Q===o.UNSIGNED_INT||ae.gpuType===Hf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<z.locationSize;Ze++)g(z.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)y(z.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<z.locationSize;Ze++)b(z.location+Ze,N/z.locationSize,Q,re,Te*de,(Ue+N/z.locationSize*Ze)*de,Se)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)g(z.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<z.locationSize;ve++)y(z.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ve=0;ve<z.locationSize;ve++)b(z.location+ve,N/z.locationSize,Q,re,N*de,N/z.locationSize*ve*de,Se)}}else if(oe!==void 0){const re=oe[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(z.location,re);break;case 3:o.vertexAttrib3fv(z.location,re);break;case 4:o.vertexAttrib4fv(z.location,re);break;default:o.vertexAttrib1fv(z.location,re)}}}}D()}function H(){V();for(const R in r){const k=r[R];for(const se in k){const te=k[se];for(const ce in te)_(te[ce].object),delete te[ce];delete k[se]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const se in k){const te=k[se];for(const ce in te)_(te[ce].object),delete te[ce];delete k[se]}delete r[R.id]}function I(R){for(const k in r){const se=r[k];if(se[R.id]===void 0)continue;const te=se[R.id];for(const ce in te)_(te[ce].object),delete te[ce];delete se[R.id]}}function V(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:y,disableUnusedAttributes:D}}function eS(o,e,n){let r;function a(m){r=m}function u(m,_){o.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,x){x!==0&&(o.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let T=0;T<x;T++)S+=_[T];n.update(S,r,1)}function p(m,_,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)f(m[T],_[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,x);let T=0;for(let A=0;A<x;A++)T+=_[A]*v[A];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function tS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(I){return!(I!==si&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const V=I===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ki&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ni&&!V)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:H,maxSamples:F}}function nS(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new zr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||a;return a=v,r=x.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){n=_(x,v,0)},this.setState=function(x,v,S){const T=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,g=o.get(x);if(!a||T===null||T.length===0||u&&!y)u?_(null):m();else{const D=u?0:r,b=D*4;let C=g.clippingState||null;p.value=C,C=_(T,v,b,S);for(let H=0;H!==b;++H)C[H]=n[H];g.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,v,S,T){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=p.value,T!==!0||y===null){const g=S+A*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,C=S;b!==A;++b,C+=4)f.copy(x[b]).applyMatrix4(D,d),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function iS(o){let e=new WeakMap;function n(f,d){return d===af?f.mapping=Bs:d===lf&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===af||d===lf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new o0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Us=4,tm=[.125,.215,.35,.446,.526,.582],Gr=20,Wc=new eg,nm=new At;let Xc=null,jc=0,Yc=0,qc=!1;const Hr=(1+Math.sqrt(5))/2,Ls=1/Hr,im=[new K(-Hr,Ls,0),new K(Hr,Ls,0),new K(-Ls,0,Hr),new K(Ls,0,Hr),new K(0,Hr,-Ls),new K(0,Hr,Ls),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Xc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,jc,Yc),this._renderer.xr.enabled=qc,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Io,format:si,colorSpace:Vs,depthBuffer:!1},a=sm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rS(u)),this._blurMaterial=sS(u,e,n)}return a}_compileMaterial(e){const n=new Oi(this._lodPlanes[0],e);this._renderer.compile(n,Wc)}_sceneToCubeUV(e,n,r,a){const d=new ri(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(nm),_.toneMapping=_r,_.autoClear=!1;const S=new Xm({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),T=new Oi(new Xs,S);let A=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,A=!0):(S.color.copy(nm),A=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const b=this._cubeSize;vl(a,D*b,g>2?b:0,b,b),_.setRenderTarget(a),A&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Bs||e.mapping===ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Oi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;vl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Wc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=im[(a-u-1)%im.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Oi(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),A=u/T,y=isFinite(u)?1+Math.floor(_*A):Gr;y>Gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gr}`);const g=[];let D=0;for(let I=0;I<Gr;++I){const V=I/A,P=Math.exp(-V*V/2);g.push(P),I===0?D+=P:I<y&&(D+=2*P)}for(let I=0;I<g.length;I++)g[I]=g[I]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:b}=this;v.dTheta.value=T,v.mipInt.value=b-r;const C=this._sizeLods[a],H=3*C*(a>b-Us?a-b+Us:0),F=4*(this._cubeSize-C);vl(n,H,F,3*C,2*C),p.setRenderTarget(n),p.render(x,Wc)}}function rS(o){const e=[],n=[],r=[];let a=o;const u=o-Us+1+tm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Us?p=tm[f-o+Us-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,T=6,A=3,y=2,g=1,D=new Float32Array(A*T*S),b=new Float32Array(y*T*S),C=new Float32Array(g*T*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,V=F>2?0:-1,P=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];D.set(P,A*T*F),b.set(v,y*T*F);const R=[F,F,F,F,F,F];C.set(R,g*T*F)}const H=new gi;H.setAttribute("position",new mi(D,A)),H.setAttribute("uv",new mi(b,y)),H.setAttribute("faceIndex",new mi(C,g)),e.push(H),a>Us&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function sm(o,e,n){const r=new Yr(o,e,n);return r.texture.mapping=Ul,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function sS(o,e,n){const r=new Float32Array(Gr),a=new K(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function om(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function am(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function $f(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oS(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===af||p===lf,_=p===Bs||p===ks;if(m||_){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new rm(o)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new rm(o)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function aS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ds("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function lS(o,e,n,r){const a={},u=new WeakMap;function f(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",f),delete a[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(x,v){return a[v.id]===!0||(v.addEventListener("dispose",f),a[v.id]=!0,n.memory.geometries++),v}function p(x){const v=x.attributes;for(const S in v)e.update(v[S],o.ARRAY_BUFFER)}function m(x){const v=[],S=x.index,T=x.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let b=0,C=D.length;b<C;b+=3){const H=D[b+0],F=D[b+1],I=D[b+2];v.push(H,F,F,I,I,H)}}else if(T!==void 0){const D=T.array;A=T.version;for(let b=0,C=D.length/3-1;b<C;b+=3){const H=b+0,F=b+1,I=b+2;v.push(H,F,F,I,I,H)}}else return;const y=new(km(v)?Ym:jm)(v,1);y.version=A;const g=u.get(x);g&&e.remove(g),u.set(x,y)}function _(x){const v=u.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function uS(o,e,n){let r;function a(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function p(v,S){o.drawElements(r,S,u,v*f),n.update(S,r,1)}function m(v,S,T){T!==0&&(o.drawElementsInstanced(r,S,u,v*f,T),n.update(S,r,T))}function _(v,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,T);let y=0;for(let g=0;g<T;g++)y+=S[g];n.update(y,r,1)}function x(v,S,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)m(v[g]/f,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,A,0,T);let g=0;for(let D=0;D<T;D++)g+=S[D]*A[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function cS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function fS(o,e,n){const r=new WeakMap,a=new Gt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let R=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),A===!0&&(C=2),y===!0&&(C=3);let H=d.attributes.position.count*C,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const I=new Float32Array(H*F*4*x),V=new Hm(I,H,F,x);V.type=Ni,V.needsUpdate=!0;const P=C*4;for(let k=0;k<x;k++){const se=g[k],te=D[k],ce=b[k],he=H*F*4*k;for(let oe=0;oe<se.count;oe++){const le=oe*P;T===!0&&(a.fromBufferAttribute(se,oe),I[he+le+0]=a.x,I[he+le+1]=a.y,I[he+le+2]=a.z,I[he+le+3]=0),A===!0&&(a.fromBufferAttribute(te,oe),I[he+le+4]=a.x,I[he+le+5]=a.y,I[he+le+6]=a.z,I[he+le+7]=0),y===!0&&(a.fromBufferAttribute(ce,oe),I[he+le+8]=a.x,I[he+le+9]=a.y,I[he+le+10]=a.z,I[he+le+11]=ce.itemSize===4?a.w:1)}}v={count:x,texture:V,size:new Tt(H,F)},r.set(d,v),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function dS(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const ng=new Ln,lm=new Jm(1,1),ig=new Hm,rg=new Wv,sg=new Km,um=[],cm=[],fm=new Float32Array(16),dm=new Float32Array(9),hm=new Float32Array(4);function js(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=um[a];if(u===void 0&&(u=new Float32Array(a),um[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Kt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Zt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Ol(o,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function hS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function pS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2fv(this.addr,e),Zt(n,e)}}function mS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;o.uniform3fv(this.addr,e),Zt(n,e)}}function gS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4fv(this.addr,e),Zt(n,e)}}function _S(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;hm.set(r),o.uniformMatrix2fv(this.addr,!1,hm),Zt(n,r)}}function vS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;dm.set(r),o.uniformMatrix3fv(this.addr,!1,dm),Zt(n,r)}}function xS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;fm.set(r),o.uniformMatrix4fv(this.addr,!1,fm),Zt(n,r)}}function yS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function SS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2iv(this.addr,e),Zt(n,e)}}function MS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3iv(this.addr,e),Zt(n,e)}}function ES(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4iv(this.addr,e),Zt(n,e)}}function TS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function wS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2uiv(this.addr,e),Zt(n,e)}}function AS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3uiv(this.addr,e),Zt(n,e)}}function RS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4uiv(this.addr,e),Zt(n,e)}}function CS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(lm.compareFunction=Bm,u=lm):u=ng,n.setTexture2D(e||u,a)}function PS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||rg,a)}function bS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||sg,a)}function LS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ig,a)}function DS(o){switch(o){case 5126:return hS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return vS;case 35676:return xS;case 5124:case 35670:return yS;case 35667:case 35671:return SS;case 35668:case 35672:return MS;case 35669:case 35673:return ES;case 5125:return TS;case 36294:return wS;case 36295:return AS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return LS}}function US(o,e){o.uniform1fv(this.addr,e)}function IS(o,e){const n=js(e,this.size,2);o.uniform2fv(this.addr,n)}function NS(o,e){const n=js(e,this.size,3);o.uniform3fv(this.addr,n)}function FS(o,e){const n=js(e,this.size,4);o.uniform4fv(this.addr,n)}function OS(o,e){const n=js(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function BS(o,e){const n=js(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function kS(o,e){const n=js(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function zS(o,e){o.uniform1iv(this.addr,e)}function HS(o,e){o.uniform2iv(this.addr,e)}function VS(o,e){o.uniform3iv(this.addr,e)}function GS(o,e){o.uniform4iv(this.addr,e)}function WS(o,e){o.uniform1uiv(this.addr,e)}function XS(o,e){o.uniform2uiv(this.addr,e)}function jS(o,e){o.uniform3uiv(this.addr,e)}function YS(o,e){o.uniform4uiv(this.addr,e)}function qS(o,e,n){const r=this.cache,a=e.length,u=Ol(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||ng,u[f])}function $S(o,e,n){const r=this.cache,a=e.length,u=Ol(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||rg,u[f])}function KS(o,e,n){const r=this.cache,a=e.length,u=Ol(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||sg,u[f])}function ZS(o,e,n){const r=this.cache,a=e.length,u=Ol(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||ig,u[f])}function QS(o){switch(o){case 5126:return US;case 35664:return IS;case 35665:return NS;case 35666:return FS;case 35674:return OS;case 35675:return BS;case 35676:return kS;case 5124:case 35670:return zS;case 35667:case 35671:return HS;case 35668:case 35672:return VS;case 35669:case 35673:return GS;case 5125:return WS;case 36294:return XS;case 36295:return jS;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return qS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return ZS}}class JS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=DS(n.type)}}class eM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=QS(n.type)}}class tM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function pm(o,e){o.seq.push(e),o.map[e.id]=e}function nM(o,e,n){const r=o.name,a=r.length;for($c.lastIndex=0;;){const u=$c.exec(r),f=$c.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){pm(n,m===void 0?new JS(d,o,e):new eM(d,o,e));break}else{let x=n.map[d];x===void 0&&(x=new tM(d),pm(n,x)),n=x}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);nM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function mm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const iM=37297;let rM=0;function sM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const gm=new st;function oM(o){Mt._getMatrix(gm,Mt.workingColorSpace,o);const e=`mat3( ${gm.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(o)){case Cl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _m(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+sM(o.getShaderSource(e),f)}else return a}function aM(o,e){const n=oM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function lM(o,e){let n;switch(e){case mv:n="Linear";break;case gv:n="Reinhard";break;case _v:n="Cineon";break;case vv:n="ACESFilmic";break;case yv:n="AgX";break;case Sv:n="Neutral";break;case xv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new K;function uM(){Mt.getLuminanceCoefficients(xl);const o=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function fM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function dM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Do(o){return o!==""}function vm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(o){return o.replace(hM,mM)}const pM=new Map;function mM(o,e){let n=at[e];if(n===void 0){const r=pM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bf(n)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(o){return o.replace(gM,_M)}function _M(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Sm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===wm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function xM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Bs:case ks:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function SM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Am:e="ENVMAP_BLENDING_MULTIPLY";break;case hv:e="ENVMAP_BLENDING_MIX";break;case pv:e="ENVMAP_BLENDING_ADD";break}return e}function MM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function EM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=vM(n),m=xM(n),_=yM(n),x=SM(n),v=MM(n),S=cM(n),T=fM(u),A=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Do).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(y=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?at.tonemapping_pars_fragment:"",n.toneMapping!==_r?lM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,aM("linearToOutputTexel",n.outputColorSpace),uM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),f=Bf(f),f=vm(f,n),f=xm(f,n),d=Bf(d),d=vm(d,n),d=xm(d,n),f=ym(f),d=ym(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=D+y+f,C=D+g+d,H=mm(a,a.VERTEX_SHADER,b),F=mm(a,a.FRAGMENT_SHADER,C);a.attachShader(A,H),a.attachShader(A,F),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function I(k){if(o.debug.checkShaderErrors){const se=a.getProgramInfoLog(A).trim(),te=a.getShaderInfoLog(H).trim(),ce=a.getShaderInfoLog(F).trim();let he=!0,oe=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,A,H,F);else{const le=_m(a,H,"vertex"),z=_m(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+se+`
`+le+`
`+z)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(te===""||ce==="")&&(oe=!1);oe&&(k.diagnostics={runnable:he,programLog:se,vertexShader:{log:te,prefix:y},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(H),a.deleteShader(F),V=new Al(a,A),P=dM(a,A)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,iM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=F,this}let TM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new AM(e),n.set(e,r)),r}}class AM{constructor(e){this.id=TM++,this.code=e,this.usedTimes=0}}function RM(o,e,n,r,a,u,f){const d=new Gm,p=new wM,m=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,R,k,se,te){const ce=se.fog,he=te.geometry,oe=P.isMeshStandardMaterial?se.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),z=le&&le.mapping===Ul?le.image.height:null,ae=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ie,Q,de,Se;if(ae){const vt=hi[ae];Ie=vt.vertexShader,Q=vt.fragmentShader}else Ie=P.vertexShader,Q=P.fragmentShader,p.update(P),de=p.getVertexShaderID(P),Se=p.getFragmentShaderID(P);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,Rt=!!P.map,ht=!!P.matcap,bt=!!le,B=!!P.aoMap,gn=!!P.lightMap,dt=!!P.bumpMap,ut=!!P.normalMap,je=!!P.displacementMap,wt=!!P.emissiveMap,Ge=!!P.metalnessMap,L=!!P.roughnessMap,E=P.anisotropy>0,Z=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ue=P.sheen>0,We=P.transmission>0,we=E&&!!P.anisotropyMap,Ne=Z&&!!P.clearcoatMap,lt=Z&&!!P.clearcoatNormalMap,Me=Z&&!!P.clearcoatRoughnessMap,Oe=ge&&!!P.iridescenceMap,qe=ge&&!!P.iridescenceThicknessMap,Je=ue&&!!P.sheenColorMap,Be=ue&&!!P.sheenRoughnessMap,ct=!!P.specularMap,nt=!!P.specularColorMap,Et=!!P.specularIntensityMap,W=We&&!!P.transmissionMap,Ae=We&&!!P.thicknessMap,ie=!!P.gradientMap,fe=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,it=!!P.extensions;let Dt=_r;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=o.toneMapping);const Yt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:Q,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Vs,alphaToCoverage:!!P.alphaToCoverage,map:Rt,matcap:ht,envMap:bt,envMapMode:bt&&le.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:gn,bumpMap:dt,normalMap:ut,displacementMap:v&&je,emissiveMap:wt,normalMapObjectSpace:ut&&P.normalMapType===Av,normalMapTangentSpace:ut&&P.normalMapType===wv,metalnessMap:Ge,roughnessMap:L,anisotropy:E,anisotropyMap:we,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ct,specularColorMap:nt,specularIntensityMap:Et,transmission:We,transmissionMap:W,thicknessMap:Ae,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Is&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:Rt&&A(P.map.channel),aoMapUv:B&&A(P.aoMap.channel),lightMapUv:gn&&A(P.lightMap.channel),bumpMapUv:dt&&A(P.bumpMap.channel),normalMapUv:ut&&A(P.normalMap.channel),displacementMapUv:je&&A(P.displacementMap.channel),emissiveMapUv:wt&&A(P.emissiveMap.channel),metalnessMapUv:Ge&&A(P.metalnessMap.channel),roughnessMapUv:L&&A(P.roughnessMap.channel),anisotropyMapUv:we&&A(P.anisotropyMap.channel),clearcoatMapUv:Ne&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(P.sheenRoughnessMap.channel),specularMapUv:ct&&A(P.specularMap.channel),specularColorMapUv:nt&&A(P.specularColorMap.channel),specularIntensityMapUv:Et&&A(P.specularIntensityMap.channel),transmissionMapUv:W&&A(P.transmissionMap.channel),thicknessMapUv:Ae&&A(P.thicknessMap.channel),alphaMapUv:fe&&A(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Rt||fe),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Rt&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ii,flipSided:P.side===bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)R.push(k),R.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(D(R,P),b(R,P),R.push(o.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function b(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=T[P.type];let k;if(R){const se=hi[R];k=n0.clone(se.uniforms)}else k=P.uniforms;return k}function H(P,R){let k;for(let se=0,te=_.length;se<te;se++){const ce=_[se];if(ce.cacheKey===R){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new EM(o,R,P,u),_.push(k)),k}function F(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function I(P){p.remove(P)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:H,releaseProgram:F,releaseShaderCache:I,programs:_,dispose:V}}function CM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function PM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Mm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Em(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,v,S,T,A,y){let g=o[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:T,renderOrder:x.renderOrder,z:A,group:y},o[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=T,g.renderOrder=x.renderOrder,g.z=A,g.group=y),e++,g}function d(x,v,S,T,A,y){const g=f(x,v,S,T,A,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(x,v,S,T,A,y){const g=f(x,v,S,T,A,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,v){n.length>1&&n.sort(x||PM),r.length>1&&r.sort(v||Mm),a.length>1&&a.sort(v||Mm)}function _(){for(let x=e,v=o.length;x<v;x++){const S=o[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function bM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new Em,o.set(r,[f])):a>=u.length?(f=new Em,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function LM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new At};break;case"SpotLight":n={position:new K,direction:new K,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=n,n}}}function DM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let UM=0;function IM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function NM(o){const e=new LM,n=DM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const a=new K,u=new Wt,f=new Wt;function d(m){let _=0,x=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,A=0,y=0,g=0,D=0,b=0,C=0,H=0,F=0,I=0;m.sort(IM);for(let P=0,R=m.length;P<R;P++){const k=m[P],se=k.color,te=k.intensity,ce=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=se.r*te,x+=se.g*te,v+=se.b*te;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(k.sh.coefficients[oe],te);I++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,z=n.get(k);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=k.shadow.matrix,D++}r.directional[S]=oe,S++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(se).multiplyScalar(te),oe.distance=ce,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,r.spot[A]=oe;const le=k.shadow;if(k.map&&(r.spotLightMap[H]=k.map,H++,le.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[A]=le.matrix,k.castShadow){const z=n.get(k);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,r.spotShadow[A]=z,r.spotShadowMap[A]=he,C++}A++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(se).multiplyScalar(te),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=oe,y++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const le=k.shadow,z=n.get(k);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=k.shadow.matrix,b++}r.point[T]=oe,T++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(te),oe.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[g]=oe,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==A||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==D||V.numPointShadows!==b||V.numSpotShadows!==C||V.numSpotMaps!==H||V.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,V.directionalLength=S,V.pointLength=T,V.spotLength=A,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=D,V.numPointShadows=b,V.numSpotShadows=C,V.numSpotMaps=H,V.numLightProbes=I,r.version=UM++)}function p(m,_){let x=0,v=0,S=0,T=0,A=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const b=m[g];if(b.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),x++}else if(b.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(b.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(b.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),v++}else if(b.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:p,state:r}}function Tm(o){const e=new NM(o),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function FM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Tm(o),e.set(a,[d])):u>=f.length?(d=new Tm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kM(o,e,n){let r=new Zm;const a=new Tt,u=new Tt,f=new Gt,d=new h0({depthPacking:Tv}),p=new p0,m={},_=n.maxTextureSize,x={[vr]:bn,[bn]:vr,[Ii]:Ii},v=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:OM,fragmentShader:BM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new gi;T.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Oi(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wm;let g=this.type;this.render=function(F,I,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=o.getRenderTarget(),R=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),se=o.state;se.setBlending(gr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const te=g!==Ui&&this.type===Ui,ce=g===Ui&&this.type!==Ui;for(let he=0,oe=F.length;he<oe;he++){const le=F[he],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ae=z.getFrameExtents();if(a.multiply(ae),u.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,z.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,z.mapSize.y=u.y)),z.map===null||te===!0||ce===!0){const N=this.type!==Ui?{minFilter:oi,magFilter:oi}:{};z.map!==null&&z.map.dispose(),z.map=new Yr(a.x,a.y,N),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const re=z.getViewportCount();for(let N=0;N<re;N++){const ne=z.getViewport(N);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),se.viewport(f),z.updateMatrices(le,N),r=z.getFrustum(),C(I,V,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===Ui&&D(z,V),z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(P,R,k)};function D(F,I){const V=e.update(A);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Yr(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(I,null,V,v,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(I,null,V,S,A,null)}function b(F,I,V,P){let R=null;const k=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)R=k;else if(R=V.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const se=R.uuid,te=I.uuid;let ce=m[se];ce===void 0&&(ce={},m[se]=ce);let he=ce[te];he===void 0&&(he=R.clone(),ce[te]=he,I.addEventListener("dispose",H)),R=he}if(R.visible=I.visible,R.wireframe=I.wireframe,P===Ui?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:x[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=o.properties.get(R);se.light=V}return R}function C(F,I,V,P,R){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Ui)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const te=e.update(F),ce=F.material;if(Array.isArray(ce)){const he=te.groups;for(let oe=0,le=he.length;oe<le;oe++){const z=he[oe],ae=ce[z.materialIndex];if(ae&&ae.visible){const re=b(F,ae,P,R);F.onBeforeShadow(o,F,I,V,te,re,z),o.renderBufferDirect(V,null,te,re,F,z),F.onAfterShadow(o,F,I,V,te,re,z)}}}else if(ce.visible){const he=b(F,ce,P,R);F.onBeforeShadow(o,F,I,V,te,he,null),o.renderBufferDirect(V,null,te,he,F,null),F.onAfterShadow(o,F,I,V,te,he,null)}}const se=F.children;for(let te=0,ce=se.length;te<ce;te++)C(se[te],I,V,P,R)}function H(F){F.target.removeEventListener("dispose",H);for(const V in m){const P=m[V],R=F.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const zM={[Jc]:ef,[tf]:sf,[nf]:of,[Os]:rf,[ef]:Jc,[sf]:tf,[of]:nf,[rf]:Os};function HM(o,e){function n(){let W=!1;const Ae=new Gt;let ie=null;const fe=new Gt(0,0,0,0);return{setMask:function(be){ie!==be&&!W&&(o.colorMask(be,be,be,be),ie=be)},setLocked:function(be){W=be},setClear:function(be,Pe,it,Dt,Yt){Yt===!0&&(be*=Dt,Pe*=Dt,it*=Dt),Ae.set(be,Pe,it,Dt),fe.equals(Ae)===!1&&(o.clearColor(be,Pe,it,Dt),fe.copy(Ae))},reset:function(){W=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,ie=null,fe=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!W&&(o.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=zM[Pe]),fe!==Pe){switch(Pe){case Jc:o.depthFunc(o.NEVER);break;case ef:o.depthFunc(o.ALWAYS);break;case tf:o.depthFunc(o.LESS);break;case Os:o.depthFunc(o.LEQUAL);break;case nf:o.depthFunc(o.EQUAL);break;case rf:o.depthFunc(o.GEQUAL);break;case sf:o.depthFunc(o.GREATER);break;case of:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){W=!1,ie=null,fe=null,be=null,Ae=!1}}}function a(){let W=!1,Ae=null,ie=null,fe=null,be=null,Pe=null,it=null,Dt=null,Yt=null;return{setTest:function(vt){W||(vt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!W&&(o.stencilMask(vt),Ae=vt)},setFunc:function(vt,Mn,_n){(ie!==vt||fe!==Mn||be!==_n)&&(o.stencilFunc(vt,Mn,_n),ie=vt,fe=Mn,be=_n)},setOp:function(vt,Mn,_n){(Pe!==vt||it!==Mn||Dt!==_n)&&(o.stencilOp(vt,Mn,_n),Pe=vt,it=Mn,Dt=_n)},setLocked:function(vt){W=vt},setClear:function(vt){Yt!==vt&&(o.clearStencil(vt),Yt=vt)},reset:function(){W=!1,Ae=null,ie=null,fe=null,be=null,Pe=null,it=null,Dt=null,Yt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},x={},v=new WeakMap,S=[],T=null,A=!1,y=null,g=null,D=null,b=null,C=null,H=null,F=null,I=new At(0,0,0),V=0,P=!1,R=null,k=null,se=null,te=null,ce=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),oe=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),oe=le>=2);let ae=null,re={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ie=new Gt().fromArray(N),Q=new Gt().fromArray(ne);function de(W,Ae,ie,fe){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(W,Pe),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ie;it++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const Se={};Se[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),f.setFunc(Os),dt(!1),ut(Ap),ve(o.CULL_FACE),B(gr);function ve(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Te(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function Ue(W,Ae){return x[W]!==Ae?(o.bindFramebuffer(W,Ae),x[W]=Ae,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ae),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(W,Ae){let ie=S,fe=!1;if(W){ie=v.get(Ae),ie===void 0&&(ie=[],v.set(Ae,ie));const be=W.textures;if(ie.length!==be.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ie[Pe]=o.COLOR_ATTACHMENT0+Pe;ie.length=be.length,fe=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ie)}function Rt(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const ht={[Vr]:o.FUNC_ADD,[K_]:o.FUNC_SUBTRACT,[Z_]:o.FUNC_REVERSE_SUBTRACT};ht[Q_]=o.MIN,ht[J_]=o.MAX;const bt={[ev]:o.ZERO,[tv]:o.ONE,[nv]:o.SRC_COLOR,[Zc]:o.SRC_ALPHA,[lv]:o.SRC_ALPHA_SATURATE,[ov]:o.DST_COLOR,[rv]:o.DST_ALPHA,[iv]:o.ONE_MINUS_SRC_COLOR,[Qc]:o.ONE_MINUS_SRC_ALPHA,[av]:o.ONE_MINUS_DST_COLOR,[sv]:o.ONE_MINUS_DST_ALPHA,[uv]:o.CONSTANT_COLOR,[cv]:o.ONE_MINUS_CONSTANT_COLOR,[fv]:o.CONSTANT_ALPHA,[dv]:o.ONE_MINUS_CONSTANT_ALPHA};function B(W,Ae,ie,fe,be,Pe,it,Dt,Yt,vt){if(W===gr){A===!0&&(Te(o.BLEND),A=!1);return}if(A===!1&&(ve(o.BLEND),A=!0),W!==$_){if(W!==y||vt!==P){if((g!==Vr||C!==Vr)&&(o.blendEquation(o.FUNC_ADD),g=Vr,C=Vr),vt)switch(W){case Is:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rp:o.blendFunc(o.ONE,o.ONE);break;case Cp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Is:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Cp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,b=null,H=null,F=null,I.set(0,0,0),V=0,y=W,P=vt}return}be=be||Ae,Pe=Pe||ie,it=it||fe,(Ae!==g||be!==C)&&(o.blendEquationSeparate(ht[Ae],ht[be]),g=Ae,C=be),(ie!==D||fe!==b||Pe!==H||it!==F)&&(o.blendFuncSeparate(bt[ie],bt[fe],bt[Pe],bt[it]),D=ie,b=fe,H=Pe,F=it),(Dt.equals(I)===!1||Yt!==V)&&(o.blendColor(Dt.r,Dt.g,Dt.b,Yt),I.copy(Dt),V=Yt),y=W,P=!1}function gn(W,Ae){W.side===Ii?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=W.side===bn;Ae&&(ie=!ie),dt(ie),W.blending===Is&&W.transparent===!1?B(gr):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const fe=W.stencilWrite;d.setTest(fe),fe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(W){R!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),R=W)}function ut(W){W!==j_?(ve(o.CULL_FACE),W!==k&&(W===Ap?o.cullFace(o.BACK):W===Y_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),k=W}function je(W){W!==se&&(oe&&o.lineWidth(W),se=W)}function wt(W,Ae,ie){W?(ve(o.POLYGON_OFFSET_FILL),(te!==Ae||ce!==ie)&&(o.polygonOffset(Ae,ie),te=Ae,ce=ie)):Te(o.POLYGON_OFFSET_FILL)}function Ge(W){W?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function L(W){W===void 0&&(W=o.TEXTURE0+he-1),ae!==W&&(o.activeTexture(W),ae=W)}function E(W,Ae,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==W||fe.texture!==Ae)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(W,Ae||Se[W]),fe.type=W,fe.texture=Ae)}function Z(){const W=re[ae];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(W){Ie.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Ie.copy(W))}function Be(W){Q.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function ct(W,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let fe=ie.get(W);fe===void 0&&(fe=o.getUniformBlockIndex(Ae,W.name),ie.set(W,fe))}function nt(W,Ae){const fe=m.get(Ae).get(W);p.get(Ae)!==fe&&(o.uniformBlockBinding(Ae,fe,W.__bindingPointIndex),p.set(Ae,fe))}function Et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ae=null,re={},x={},v=new WeakMap,S=[],T=null,A=!1,y=null,g=null,D=null,b=null,C=null,H=null,F=null,I=new At(0,0,0),V=0,P=!1,R=null,k=null,se=null,te=null,ce=null,Ie.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Rt,setBlending:B,setMaterial:gn,setFlipSided:dt,setCullFace:ut,setLineWidth:je,setPolygonOffset:wt,setScissorTest:Ge,activeTexture:L,bindTexture:E,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:lt,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:Be,reset:Et}}function VM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,_=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,E){return S?new OffscreenCanvas(L,E):bl("canvas")}function A(L,E,Z){let pe=1;const ge=Ge(L);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);x===void 0&&(x=T(ue,We));const we=E?T(ue,We):x;return we.width=ue,we.height=We,we.getContext("2d").drawImage(L,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+We+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(L,E,Z,pe,ge=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=E;if(E===o.RED&&(Z===o.FLOAT&&(ue=o.R32F),Z===o.HALF_FLOAT&&(ue=o.R16F),Z===o.UNSIGNED_BYTE&&(ue=o.R8)),E===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.R8UI),Z===o.UNSIGNED_SHORT&&(ue=o.R16UI),Z===o.UNSIGNED_INT&&(ue=o.R32UI),Z===o.BYTE&&(ue=o.R8I),Z===o.SHORT&&(ue=o.R16I),Z===o.INT&&(ue=o.R32I)),E===o.RG&&(Z===o.FLOAT&&(ue=o.RG32F),Z===o.HALF_FLOAT&&(ue=o.RG16F),Z===o.UNSIGNED_BYTE&&(ue=o.RG8)),E===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RG16UI),Z===o.UNSIGNED_INT&&(ue=o.RG32UI),Z===o.BYTE&&(ue=o.RG8I),Z===o.SHORT&&(ue=o.RG16I),Z===o.INT&&(ue=o.RG32I)),E===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),Z===o.UNSIGNED_INT&&(ue=o.RGB32UI),Z===o.BYTE&&(ue=o.RGB8I),Z===o.SHORT&&(ue=o.RGB16I),Z===o.INT&&(ue=o.RGB32I)),E===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ue=o.RGBA32UI),Z===o.BYTE&&(ue=o.RGBA8I),Z===o.SHORT&&(ue=o.RGBA16I),Z===o.INT&&(ue=o.RGBA32I)),E===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),E===o.RGBA){const We=ge?Cl:Mt.getTransfer(pe);Z===o.FLOAT&&(ue=o.RGBA32F),Z===o.HALF_FLOAT&&(ue=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ue=We===Ct?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(L,E){let Z;return L?E===null||E===jr||E===zs?Z=o.DEPTH24_STENCIL8:E===Ni?Z=o.DEPTH32F_STENCIL8:E===Uo&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===jr||E===zs?Z=o.DEPTH_COMPONENT24:E===Ni?Z=o.DEPTH_COMPONENT32F:E===Uo&&(Z=o.DEPTH_COMPONENT16),Z}function H(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==oi&&L.minFilter!==pi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),V(E),E.isVideoTexture&&_.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),R(E)}function V(L){const E=r.get(L);if(E.__webglInit===void 0)return;const Z=L.source,pe=v.get(Z);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(L),Object.keys(pe).length===0&&v.delete(Z)}r.remove(L)}function P(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const Z=L.source,pe=v.get(Z);delete pe[E.__cacheKey],f.memory.textures--}function R(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=L.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const ue=r.get(Z[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(Z[pe])}r.remove(L)}let k=0;function se(){k=0}function te(){const L=k;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),k+=1,L}function ce(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function he(L,E){const Z=r.get(L);if(L.isVideoTexture&&je(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,L,E);return}}n.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+E)}function oe(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+E)}function le(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,E);return}n.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+E)}function z(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){de(Z,L,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+E)}const ae={[uf]:o.REPEAT,[Wr]:o.CLAMP_TO_EDGE,[cf]:o.MIRRORED_REPEAT},re={[oi]:o.NEAREST,[Mv]:o.NEAREST_MIPMAP_NEAREST,[Ya]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[yc]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},N={[Rv]:o.NEVER,[Uv]:o.ALWAYS,[Cv]:o.LESS,[Bm]:o.LEQUAL,[Pv]:o.EQUAL,[Dv]:o.GEQUAL,[bv]:o.GREATER,[Lv]:o.NOTEQUAL};function ne(L,E){if(E.type===Ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pi||E.magFilter===yc||E.magFilter===Ya||E.magFilter===Xr||E.minFilter===pi||E.minFilter===yc||E.minFilter===Ya||E.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ae[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ae[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ae[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,re[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==Ya&&E.minFilter!==Xr||E.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const pe=E.source;let ge=v.get(pe);ge===void 0&&(ge={},v.set(pe,ge));const ue=ce(E);if(ue!==L.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ge[ue].usedTimes++;const We=ge[L.__cacheKey];We!==void 0&&(ge[L.__cacheKey].usedTimes--,We.usedTimes===0&&P(E)),L.__cacheKey=ue,L.__webglTexture=ge[ue].texture}return Z}function Q(L,E,Z){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ie(L,E),ue=E.source;n.bindTexture(pe,L.__webglTexture,o.TEXTURE0+Z);const We=r.get(ue);if(ue.version!==We.__version||ge===!0){n.activeTexture(o.TEXTURE0+Z);const we=Mt.getPrimaries(Mt.workingColorSpace),Ne=E.colorSpace===mr?null:Mt.getPrimaries(E.colorSpace),lt=E.colorSpace===mr||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Me=A(E.image,!1,a.maxTextureSize);Me=wt(E,Me);const Oe=u.convert(E.format,E.colorSpace),qe=u.convert(E.type);let Je=b(E.internalFormat,Oe,qe,E.colorSpace,E.isVideoTexture);ne(pe,E);let Be;const ct=E.mipmaps,nt=E.isVideoTexture!==!0,Et=We.__version===void 0||ge===!0,W=ue.dataReady,Ae=H(E,Me);if(E.isDepthTexture)Je=C(E.format===Hs,E.type),Et&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,null));else if(E.isDataTexture)if(ct.length>0){nt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let ie=0,fe=ct.length;ie<fe;ie++)Be=ct[ie],nt?W&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,qe,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Oe,qe,Be.data);E.generateMipmaps=!1}else nt?(Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height),W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,qe,Me.data)):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,ct[0].width,ct[0].height,Me.depth);for(let ie=0,fe=ct.length;ie<fe;ie++)if(Be=ct[ie],E.format!==si)if(Oe!==null)if(nt){if(W)if(E.layerUpdates.size>0){const be=em(Be.width,Be.height,E.format,E.type);for(const Pe of E.layerUpdates){const it=Be.data.subarray(Pe*be/Be.data.BYTES_PER_ELEMENT,(Pe+1)*be/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Pe,Be.width,Be.height,1,Oe,it)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,Oe,Be.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,Oe,qe,Be.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,Be.width,Be.height,Me.depth,0,Oe,qe,Be.data)}else{nt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let ie=0,fe=ct.length;ie<fe;ie++)Be=ct[ie],E.format!==si?Oe!==null?nt?W&&n.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,qe,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Oe,qe,Be.data)}else if(E.isDataArrayTexture)if(nt){if(Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),W)if(E.layerUpdates.size>0){const ie=em(Me.width,Me.height,E.format,E.type);for(const fe of E.layerUpdates){const be=Me.data.subarray(fe*ie/Me.data.BYTES_PER_ELEMENT,(fe+1)*ie/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,qe,be)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(E.isData3DTexture)nt?(Et&&n.texStorage3D(o.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),W&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)):n.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(E.isFramebufferTexture){if(Et)if(nt)n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let ie=Me.width,fe=Me.height;for(let be=0;be<Ae;be++)n.texImage2D(o.TEXTURE_2D,be,Je,ie,fe,0,Oe,qe,null),ie>>=1,fe>>=1}}else if(ct.length>0){if(nt&&Et){const ie=Ge(ct[0]);n.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}for(let ie=0,fe=ct.length;ie<fe;ie++)Be=ct[ie],nt?W&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe,qe,Be):n.texImage2D(o.TEXTURE_2D,ie,Je,Oe,qe,Be);E.generateMipmaps=!1}else if(nt){if(Et){const ie=Ge(Me);n.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,qe,Me)}else n.texImage2D(o.TEXTURE_2D,0,Je,Oe,qe,Me);y(E)&&g(pe),We.__version=ue.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function de(L,E,Z){if(E.image.length!==6)return;const pe=Ie(L,E),ge=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Z);const ue=r.get(ge);if(ge.version!==ue.__version||pe===!0){n.activeTexture(o.TEXTURE0+Z);const We=Mt.getPrimaries(Mt.workingColorSpace),we=E.colorSpace===mr?null:Mt.getPrimaries(E.colorSpace),Ne=E.colorSpace===mr||We===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!lt&&!Me?Oe[fe]=A(E.image[fe],!0,a.maxCubemapSize):Oe[fe]=Me?E.image[fe].image:E.image[fe],Oe[fe]=wt(E,Oe[fe]);const qe=Oe[0],Je=u.convert(E.format,E.colorSpace),Be=u.convert(E.type),ct=b(E.internalFormat,Je,Be,E.colorSpace),nt=E.isVideoTexture!==!0,Et=ue.__version===void 0||pe===!0,W=ge.dataReady;let Ae=H(E,qe);ne(o.TEXTURE_CUBE_MAP,E);let ie;if(lt){nt&&Et&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,qe.width,qe.height);for(let fe=0;fe<6;fe++){ie=Oe[fe].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];E.format!==si?Je!==null?nt?W&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,Je,Be,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,ct,Pe.width,Pe.height,0,Je,Be,Pe.data)}}}else{if(ie=E.mipmaps,nt&&Et){ie.length>0&&Ae++;const fe=Ge(Oe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,Je,Be,Oe[fe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Oe[fe].width,Oe[fe].height,0,Je,Be,Oe[fe].data);for(let be=0;be<ie.length;be++){const it=ie[be].image[fe].image;nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,it.width,it.height,Je,Be,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,ct,it.width,it.height,0,Je,Be,it.data)}}else{nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,Be,Oe[fe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Je,Be,Oe[fe]);for(let be=0;be<ie.length;be++){const Pe=ie[be];nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,Je,Be,Pe.image[fe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,ct,Je,Be,Pe.image[fe])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Se(L,E,Z,pe,ge,ue){const We=u.convert(Z.format,Z.colorSpace),we=u.convert(Z.type),Ne=b(Z.internalFormat,We,we,Z.colorSpace),lt=r.get(E),Me=r.get(Z);if(Me.__renderTarget=E,!lt.__hasExternalTextures){const Oe=Math.max(1,E.width>>ue),qe=Math.max(1,E.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,Ne,Oe,qe,E.depth,0,We,we,null):n.texImage2D(ge,ue,Ne,Oe,qe,0,We,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,L),ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,dt(E)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,ue),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(L,E,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=C(E.stencilBuffer,ge),We=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=dt(E);ut(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ue,E.width,E.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ue,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ue,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,L)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],We=u.convert(ue.format,ue.colorSpace),we=u.convert(ue.type),Ne=b(ue.internalFormat,We,we,ue.colorSpace),lt=dt(E);Z&&ut(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,Ne,E.width,E.height):ut(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,lt,Ne,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ge=pe.__webglTexture,ue=dt(E);if(E.depthTexture.format===Ns)ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Hs)ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(L){const E=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,L)}else if(Z){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],L,!1);else{const ge=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ve(E.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(L,E,Z){const pe=r.get(L);E!==void 0&&Se(pe.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Ue(L)}function Rt(L){const E=L.texture,Z=r.get(L),pe=r.get(E);L.addEventListener("dispose",I);const ge=L.textures,ue=L.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,f.memory.textures++),ue){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Z.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else Z.__webglFramebuffer[we]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)Z.__webglFramebuffer[we]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(We)for(let we=0,Ne=ge.length;we<Ne;we++){const lt=r.get(ge[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture(),f.memory.textures++)}if(L.samples>0&&ut(L)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];Z.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);const lt=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Oe=b(Ne.internalFormat,lt,Me,Ne.colorSpace,L.isXRRenderTarget===!0),qe=dt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Oe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Se(Z.__webglFramebuffer[we][Ne],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Se(Z.__webglFramebuffer[we],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(E)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let we=0,Ne=ge.length;we<Ne;we++){const lt=ge[we],Me=r.get(lt);n.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ne(o.TEXTURE_2D,lt),Se(Z.__webglFramebuffer,L,lt,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),y(lt)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),ne(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Se(Z.__webglFramebuffer[Ne],L,E,o.COLOR_ATTACHMENT0,we,Ne);else Se(Z.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,we,0);y(E)&&g(we),n.unbindTexture()}L.depthBuffer&&Ue(L)}function ht(L){const E=L.textures;for(let Z=0,pe=E.length;Z<pe;Z++){const ge=E[Z];if(y(ge)){const ue=D(L),We=r.get(ge).__webglTexture;n.bindTexture(ue,We),g(ue),n.unbindTexture()}}}const bt=[],B=[];function gn(L){if(L.samples>0){if(ut(L)===!1){const E=L.textures,Z=L.width,pe=L.height;let ge=o.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=r.get(L),we=E.length>1;if(we)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const lt=r.get(E[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,lt,0)}o.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,o.NEAREST),p===!0&&(bt.length=0,B.length=0,bt.push(o.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(bt.push(ue),B.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const lt=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,lt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function dt(L){return Math.min(a.maxSamples,L.samples)}function ut(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function wt(L,E){const Z=L.colorSpace,pe=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Vs&&Z!==mr&&(Mt.getTransfer(Z)===Ct?(pe!==si||ge!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ut}function GM(o,e){function n(r,a=mr){let u;const f=Mt.getTransfer(a);if(r===ki)return o.UNSIGNED_BYTE;if(r===Vf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Gf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===bm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Cm)return o.BYTE;if(r===Pm)return o.SHORT;if(r===Uo)return o.UNSIGNED_SHORT;if(r===Hf)return o.INT;if(r===jr)return o.UNSIGNED_INT;if(r===Ni)return o.FLOAT;if(r===Io)return o.HALF_FLOAT;if(r===Lm)return o.ALPHA;if(r===Dm)return o.RGB;if(r===si)return o.RGBA;if(r===Um)return o.LUMINANCE;if(r===Im)return o.LUMINANCE_ALPHA;if(r===Ns)return o.DEPTH_COMPONENT;if(r===Hs)return o.DEPTH_STENCIL;if(r===Nm)return o.RED;if(r===Wf)return o.RED_INTEGER;if(r===Fm)return o.RG;if(r===Xf)return o.RG_INTEGER;if(r===jf)return o.RGBA_INTEGER;if(r===yl||r===Sl||r===Ml||r===El)if(f===Ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ff||r===df||r===hf||r===pf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===ff)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===df)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mf||r===gf||r===_f)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===mf||r===gf)return f===Ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===_f)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===vf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ef)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Af)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Df||r===Uf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Tl)return f===Ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Df)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Om||r===If||r===Nf||r===Ff)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ff)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const WM={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),g=this._getHandJoint(m,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,T=.005;m.inputState.pinching&&v>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const XM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new xr({vertexShader:XM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oi(new Fl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qM extends Ws{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,x=null,v=null,S=null,T=null;const A=new YM,y=n.getContextAttributes();let g=null,D=null;const b=[],C=[],H=new Tt;let F=null;const I=new ri;I.viewport=new Gt;const V=new ri;V.viewport=new Gt;const P=[I,V],R=new m0;let k=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=b[Q];return de===void 0&&(de=new Kc,b[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=b[Q];return de===void 0&&(de=new Kc,b[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=b[Q];return de===void 0&&(de=new Kc,b[Q]=de),de.getHandSpace()};function te(Q){const de=C.indexOf(Q.inputSource);if(de===-1)return;const Se=b[de];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,m||f),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",he);for(let Q=0;Q<b.length;Q++){const de=C[Q];de!==null&&(C[Q]=null,b[Q].disconnect(de))}k=null,se=null,A.reset(),e.setRenderTarget(g),S=null,v=null,x=null,a=null,D=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(H),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;y.depth&&(Te=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=y.stencil?Hs:Ns,ve=y.stencil?zs:jr);const Ue={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};x=new XRWebGLBinding(a,n),v=x.createProjectionLayer(Ue),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Yr(v.textureWidth,v.textureHeight,{format:si,type:ki,depthTexture:new Jm(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Yr(S.framebufferWidth,S.framebufferHeight,{format:si,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(Q){for(let de=0;de<Q.removed.length;de++){const Se=Q.removed[de],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,b[ve].disconnect(Se))}for(let de=0;de<Q.added.length;de++){const Se=Q.added[de];let ve=C.indexOf(Se);if(ve===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=C.length){C.push(Se),ve=Ue;break}else if(C[Ue]===null){C[Ue]=Se,ve=Ue;break}if(ve===-1)break}const Te=b[ve];Te&&Te.connect(Se)}}const oe=new K,le=new K;function z(Q,de,Se){oe.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const ve=oe.distanceTo(le),Te=de.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),ht=(Te[9]+1)/Te[5],bt=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],gn=(Ue[8]+1)/Ue[0],dt=Ze*B,ut=Ze*gn,je=ve/(-B+gn),wt=je*-B;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=Ze+je,L=Rt+je,E=dt-wt,Z=ut+(ve-wt),pe=ht*Rt/L*Ge,ge=bt*Rt/L*Ge;Q.projectionMatrix.makePerspective(E,Z,pe,ge,Ge,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let de=Q.near,Se=Q.far;A.texture!==null&&(A.depthNear>0&&(de=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),R.near=V.near=I.near=de,R.far=V.far=I.far=Se,(k!==R.near||se!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,se=R.far),I.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|V.layers.mask;const ve=Q.parent,Te=R.cameras;ae(R,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?z(R,I,V):R.projectionMatrix.copy(I.projectionMatrix),re(Q,R,ve)};function re(Q,de,Se){Se===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Of*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(Q){p=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let N=null;function ne(Q,de){if(_=de.getViewerPose(m||f),T=de,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<Se.length;Ue++){const Ze=Se[Ue];let Rt=null;if(S!==null)Rt=S.getViewport(Ze);else{const bt=x.getViewSubImage(v,Ze);Rt=bt.viewport,Ue===0&&(e.setRenderTargetTextures(D,bt.colorTexture,v.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(D))}let ht=P[Ue];ht===void 0&&(ht=new ri,ht.layers.enable(Ue),ht.viewport=new Gt,P[Ue]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ue===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(ht)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=x.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&A.init(e,Ue,a.renderState)}}for(let Se=0;Se<b.length;Se++){const ve=C[Se],Te=b[Se];ve!==null&&Te!==void 0&&Te.update(ve,de,m||f)}N&&N(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ie=new tg;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const kr=new zi,$M=new Wt;function KM(o,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,qm(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,b,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),x(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),A(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,D,b):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===bn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===bn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),b=D.envMap,C=D.envMapRotation;b&&(y.envMap.value=b,kr.copy(C),kr.x*=-1,kr.y*=-1,kr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),y.envMapRotation.value.setFromMatrix4($M.makeRotationFromEuler(kr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,D,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=b*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function ZM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,b){const C=b.program;r.uniformBlockBinding(D,C)}function m(D,b){let C=a[D.id];C===void 0&&(T(D),C=_(D),a[D.id]=C,D.addEventListener("dispose",y));const H=b.program;r.updateUBOMapping(D,H);const F=e.render.frame;u[D.id]!==F&&(v(D),u[D.id]=F)}function _(D){const b=x();D.__bindingPointIndex=b;const C=o.createBuffer(),H=D.__size,F=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,C),C}function x(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const b=a[D.id],C=D.uniforms,H=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let F=0,I=C.length;F<I;F++){const V=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,R=V.length;P<R;P++){const k=V[P];if(S(k,F,P,H)===!0){const se=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let he=0;he<te.length;he++){const oe=te[he],le=A(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,o.bufferSubData(o.UNIFORM_BUFFER,se+ce,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):(oe.toArray(k.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(D,b,C,H){const F=D.value,I=b+"_"+C;if(H[I]===void 0)return typeof F=="number"||typeof F=="boolean"?H[I]=F:H[I]=F.clone(),!0;{const V=H[I];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return H[I]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function T(D){const b=D.uniforms;let C=0;const H=16;for(let I=0,V=b.length;I<V;I++){const P=Array.isArray(b[I])?b[I]:[b[I]];for(let R=0,k=P.length;R<k;R++){const se=P[R],te=Array.isArray(se.value)?se.value:[se.value];for(let ce=0,he=te.length;ce<he;ce++){const oe=te[ce],le=A(oe),z=C%H,ae=z%le.boundary,re=z+ae;C+=ae,re!==0&&H-re<le.storage&&(C+=H-re),se.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=C,C+=le.storage}}}const F=C%H;return F>0&&(C+=H-F),D.__size=C,D.__cache={},this}function A(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const C=f.indexOf(b.__bindingPointIndex);f.splice(C,1),o.deleteBuffer(a[b.id]),delete a[b.id],delete u[b.id]}function g(){for(const D in a)o.deleteBuffer(a[D]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class QM{constructor(e={}){const{canvas:n=Nv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const T=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const D=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=_r,this.toneMappingExposure=1;const C=this;let H=!1,F=0,I=0,V=null,P=-1,R=null;const k=new Gt,se=new Gt;let te=null;const ce=new At(0);let he=0,oe=n.width,le=n.height,z=1,ae=null,re=null;const N=new Gt(0,0,oe,le),ne=new Gt(0,0,oe,le);let Ie=!1;const Q=new Zm;let de=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new Wt,Te=new Wt,Ue=new K,Ze=new Gt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function bt(){return V===null?z:1}let B=r;function gn(w,X){return n.getContext(w,X)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),B===null){const X="webgl2";if(B=gn(X,w),B===null)throw gn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let dt,ut,je,wt,Ge,L,E,Z,pe,ge,ue,We,we,Ne,lt,Me,Oe,qe,Je,Be,ct,nt,Et,W;function Ae(){dt=new aS(B),dt.init(),nt=new GM(B,dt),ut=new tS(B,dt,e,nt),je=new HM(B,dt),ut.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),wt=new cS(B),Ge=new CM,L=new VM(B,dt,je,Ge,ut,nt,wt),E=new iS(C),Z=new oS(C),pe=new _0(B),Et=new Jy(B,pe),ge=new lS(B,pe,wt,Et),ue=new dS(B,ge,pe,wt),Je=new fS(B,ut,L),Me=new nS(Ge),We=new RM(C,E,Z,dt,ut,Et,Me),we=new KM(C,Ge),Ne=new bM,lt=new FM(dt),qe=new Qy(C,E,Z,je,ue,S,p),Oe=new kM(C,ue,ut),W=new ZM(B,wt,ut,je),Be=new eS(B,dt,wt),ct=new uS(B,dt,wt),wt.programs=We.programs,C.capabilities=ut,C.extensions=dt,C.properties=Ge,C.renderLists=Ne,C.shadowMap=Oe,C.state=je,C.info=wt}Ae();const ie=new qM(C,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(oe,le,!1))},this.getSize=function(w){return w.set(oe,le)},this.setSize=function(w,X,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,le=X,n.width=Math.floor(w*z),n.height=Math.floor(X*z),J===!0&&(n.style.width=w+"px",n.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(oe*z,le*z).floor()},this.setDrawingBufferSize=function(w,X,J){oe=w,le=X,z=J,n.width=Math.floor(w*J),n.height=Math.floor(X*J),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,X,J,q){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,X,J,q),je.viewport(k.copy(N).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,X,J,q){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,X,J,q),je.scissor(se.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){je.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,X=!0,J=!0){let q=0;if(w){let j=!1;if(V!==null){const ye=V.texture.format;j=ye===jf||ye===Xf||ye===Wf}if(j){const ye=V.texture.type,Re=ye===ki||ye===jr||ye===Uo||ye===zs||ye===Vf||ye===Gf,Le=qe.getClearColor(),ke=qe.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(T[0]=et,T[1]=Qe,T[2]=He,T[3]=ke,B.clearBufferuiv(B.COLOR,0,T)):(A[0]=et,A[1]=Qe,A[2]=He,A[3]=ke,B.clearBufferiv(B.COLOR,0,A))}else q|=B.COLOR_BUFFER_BIT}X&&(q|=B.DEPTH_BUFFER_BIT),J&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Ne.dispose(),lt.dispose(),Ge.dispose(),E.dispose(),Z.dispose(),ue.dispose(),Et.dispose(),W.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",qr),ie.removeEventListener("sessionend",Hi),_i.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const w=wt.autoReset,X=Oe.enabled,J=Oe.autoUpdate,q=Oe.needsUpdate,j=Oe.type;Ae(),wt.autoReset=w,Oe.enabled=X,Oe.autoUpdate=J,Oe.needsUpdate=q,Oe.type=j}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){const X=w.target;X.removeEventListener("dispose",it),Dt(X)}function Dt(w){Yt(w),Ge.remove(w)}function Yt(w){const X=Ge.get(w).programs;X!==void 0&&(X.forEach(function(J){We.releaseProgram(J)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,J,q,j,ye){X===null&&(X=Rt);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Le=Ho(w,X,J,q,j);je.setMaterial(q,Re);let ke=J.index,et=1;if(q.wireframe===!0){if(ke=ge.getWireframeAttribute(J),ke===void 0)return;et=2}const Qe=J.drawRange,He=J.attributes.position;let mt=Qe.start*et,rt=(Qe.start+Qe.count)*et;ye!==null&&(mt=Math.max(mt,ye.start*et),rt=Math.min(rt,(ye.start+ye.count)*et)),ke!==null?(mt=Math.max(mt,0),rt=Math.min(rt,ke.count)):He!=null&&(mt=Math.max(mt,0),rt=Math.min(rt,He.count));const kt=rt-mt;if(kt<0||kt===1/0)return;Et.setup(j,q,Le,J,ke);let Nt,_t=Be;if(ke!==null&&(Nt=pe.get(ke),_t=ct,_t.setIndex(Nt)),j.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*bt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(j.isLine){let Ye=q.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*bt()),j.isLineSegments?_t.setMode(B.LINES):j.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else j.isPoints?_t.setMode(B.POINTS):j.isSprite&&_t.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)_t.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))_t.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,zt=j._multiDrawCounts,pt=j._multiDrawCount,ln=ke?pe.get(ke).bytesPerElement:1,Gi=Ge.get(q).currentProgram.getUniforms();for(let vn=0;vn<pt;vn++)Gi.setValue(B,"_gl_DrawID",vn),_t.render(Ye[vn]/ln,zt[vn])}else if(j.isInstancedMesh)_t.renderInstances(mt,kt,j.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,zt=Math.min(J.instanceCount,Ye);_t.renderInstances(mt,kt,zt)}else _t.render(mt,kt)};function vt(w,X,J){w.transparent===!0&&w.side===Ii&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,$r(w,X,J),w.side=vr,w.needsUpdate=!0,$r(w,X,J),w.side=Ii):$r(w,X,J)}this.compile=function(w,X,J=null){J===null&&(J=w),g=lt.get(J),g.init(X),b.push(g),J.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),w!==J&&w.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const q=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Le=ye[Re];vt(Le,J,j),q.add(Le)}else vt(ye,J,j),q.add(ye)}),b.pop(),g=null,q},this.compileAsync=function(w,X,J=null){const q=this.compile(w,X,J);return new Promise(j=>{function ye(){if(q.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){j(w);return}setTimeout(ye,10)}dt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Mn=null;function _n(w){Mn&&Mn(w)}function qr(){_i.stop()}function Hi(){_i.start()}const _i=new tg;_i.setAnimationLoop(_n),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){Mn=w,ie.setAnimationLoop(w),w===null?_i.stop():_i.start()},ie.addEventListener("sessionstart",qr),ie.addEventListener("sessionend",Hi),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,X,V),g=lt.get(w,b.length),g.init(X),b.push(g),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Se),y=Ne.get(w,D.length),y.init(),D.push(y),ie.enabled===!0&&ie.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&vi(ye,X,-1/0,C.sortObjects)}vi(w,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,re),ht=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ht&&qe.addToRenderList(y,w),this.info.render.frame++,de===!0&&Me.beginShadows();const J=g.state.shadowsArray;Oe.render(J,w,X),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,j=y.transmissive;if(g.setupLights(),X.isArrayCamera){const ye=X.cameras;if(j.length>0)for(let Re=0,Le=ye.length;Re<Le;Re++){const ke=ye[Re];Sr(q,j,w,ke)}ht&&qe.render(w);for(let Re=0,Le=ye.length;Re<Le;Re++){const ke=ye[Re];yr(y,w,ke,ke.viewport)}}else j.length>0&&Sr(q,j,w,X),ht&&qe.render(w),yr(y,w,X);V!==null&&I===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),w.isScene===!0&&w.onAfterRender(C,w,X),Et.resetDefaultState(),P=-1,R=null,b.pop(),b.length>0?(g=b[b.length-1],de===!0&&Me.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function vi(w,X,J,q){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){q&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Re=ue.update(w),Le=w.material;Le.visible&&y.push(w,Re,Le,J,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Re=ue.update(w),Le=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const ke=Re.groups;for(let et=0,Qe=ke.length;et<Qe;et++){const He=ke[et],mt=Le[He.materialIndex];mt&&mt.visible&&y.push(w,Re,mt,J,Ze.z,He)}}else Le.visible&&y.push(w,Re,Le,J,Ze.z,null)}}const ye=w.children;for(let Re=0,Le=ye.length;Re<Le;Re++)vi(ye[Re],X,J,q)}function yr(w,X,J,q){const j=w.opaque,ye=w.transmissive,Re=w.transparent;g.setupLightsView(J),de===!0&&Me.setGlobalState(C.clippingPlanes,J),q&&je.viewport(k.copy(q)),j.length>0&&Vi(j,X,J),ye.length>0&&Vi(ye,X,J),Re.length>0&&Vi(Re,X,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Sr(w,X,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Yr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Io:ki,minFilter:Xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const ye=g.state.transmissionRenderTarget[q.id],Re=q.viewport||k;ye.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Le=C.getRenderTarget();C.setRenderTarget(ye),C.getClearColor(ce),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),ht&&qe.render(J);const ke=C.toneMapping;C.toneMapping=_r;const et=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),de===!0&&Me.setGlobalState(C.clippingPlanes,q),Vi(w,J,q),L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,mt=X.length;He<mt;He++){const rt=X[He],kt=rt.object,Nt=rt.geometry,_t=rt.material,Ye=rt.group;if(_t.side===Ii&&kt.layers.test(q.layers)){const zt=_t.side;_t.side=bn,_t.needsUpdate=!0,ko(kt,J,q,Nt,_t,Ye),_t.side=zt,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye))}C.setRenderTarget(Le),C.setClearColor(ce,he),et!==void 0&&(q.viewport=et),C.toneMapping=ke}function Vi(w,X,J){const q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,ye=w.length;j<ye;j++){const Re=w[j],Le=Re.object,ke=Re.geometry,et=q===null?Re.material:q,Qe=Re.group;Le.layers.test(J.layers)&&ko(Le,X,J,ke,et,Qe)}}function ko(w,X,J,q,j,ye){w.onBeforeRender(C,X,J,q,j,ye),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(C,X,J,q,w,ye),j.transparent===!0&&j.side===Ii&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,C.renderBufferDirect(J,X,q,j,w,ye),j.side=vr,j.needsUpdate=!0,C.renderBufferDirect(J,X,q,j,w,ye),j.side=Ii):C.renderBufferDirect(J,X,q,j,w,ye),w.onAfterRender(C,X,J,q,j,ye)}function $r(w,X,J){X.isScene!==!0&&(X=Rt);const q=Ge.get(w),j=g.state.lights,ye=g.state.shadowsArray,Re=j.state.version,Le=We.getParameters(w,j.state,ye,X,J),ke=We.getProgramCacheKey(Le);let et=q.programs;q.environment=w.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(w.isMeshStandardMaterial?Z:E).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",it),et=new Map,q.programs=et);let Qe=et.get(ke);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Re)return ai(w,Le),Qe}else Le.uniforms=We.getUniforms(w),w.onBeforeCompile(Le,C),Qe=We.acquireProgram(Le,ke),et.set(ke,Qe),q.uniforms=Le.uniforms;const He=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Me.uniform),ai(w,Le),q.needsLights=Bl(w),q.lightsStateVersion=Re,q.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function zo(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Al.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function ai(w,X){const J=Ge.get(w);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Ho(w,X,J,q,j){X.isScene!==!0&&(X=Rt),L.resetTextureUnits();const ye=X.fog,Re=q.isMeshStandardMaterial?X.environment:null,Le=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Vs,ke=(q.isMeshStandardMaterial?Z:E).get(q.envMap||Re),et=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!J.morphAttributes.position,mt=!!J.morphAttributes.normal,rt=!!J.morphAttributes.color;let kt=_r;q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(kt=C.toneMapping);const Nt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=Nt!==void 0?Nt.length:0,Ye=Ge.get(q),zt=g.state.lights;if(de===!0&&(Se===!0||w!==R)){const sn=w===R&&q.id===P;Me.setState(q,w,sn)}let pt=!1;q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==zt.state.version||Ye.outputColorSpace!==Le||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==ke||q.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Qe||Ye.morphTargets!==He||Ye.morphNormals!==mt||Ye.morphColors!==rt||Ye.toneMapping!==kt||Ye.morphTargetsCount!==_t)&&(pt=!0):(pt=!0,Ye.__version=q.version);let ln=Ye.currentProgram;pt===!0&&(ln=$r(q,X,j));let Gi=!1,vn=!1,xi=!1;const Pt=ln.getUniforms(),un=Ye.uniforms;if(je.useProgram(ln.program)&&(Gi=!0,vn=!0,xi=!0),q.id!==P&&(P=q.id,vn=!0),Gi||R!==w){je.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),Ov(ve),Bv(ve),Pt.setValue(B,"projectionMatrix",ve)):Pt.setValue(B,"projectionMatrix",w.projectionMatrix),Pt.setValue(B,"viewMatrix",w.matrixWorldInverse);const Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(B,Ue.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,vn=!0,xi=!0)}if(j.isSkinnedMesh){Pt.setOptional(B,j,"bindMatrix"),Pt.setOptional(B,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Pt.setValue(B,"boneTexture",sn.boneTexture,L))}j.isBatchedMesh&&(Pt.setOptional(B,j,"batchingTexture"),Pt.setValue(B,"batchingTexture",j._matricesTexture,L),Pt.setOptional(B,j,"batchingIdTexture"),Pt.setValue(B,"batchingIdTexture",j._indirectTexture,L),Pt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(B,"batchingColorTexture",j._colorsTexture,L));const Qt=J.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Je.update(j,J,ln),(vn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,Pt.setValue(B,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(un.envMap.value=ke,un.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),vn&&(Pt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Vo(un,xi),ye&&q.fog===!0&&we.refreshFogUniforms(un,ye),we.refreshMaterialUniforms(un,q,z,le,g.state.transmissionRenderTarget[w.id]),Al.upload(B,zo(Ye),un,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Al.upload(B,zo(Ye),un,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pt.setValue(B,"center",j.center),Pt.setValue(B,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(B,"normalMatrix",j.normalMatrix),Pt.setValue(B,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const sn=q.uniformsGroups;for(let Jt=0,xt=sn.length;Jt<xt;Jt++){const li=sn[Jt];W.update(li,ln),W.bind(li,ln)}}return ln}function Vo(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Bl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,X,J){Ge.get(w.texture).__webglTexture=X,Ge.get(w.depthTexture).__webglTexture=J;const q=Ge.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=J===void 0,q.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){const J=Ge.get(w);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const Go=B.createFramebuffer();this.setRenderTarget=function(w,X=0,J=0){V=w,F=X,I=J;let q=!0,j=null,ye=!1,Re=!1;if(w){const ke=Ge.get(w);if(ke.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(B.FRAMEBUFFER,null),q=!1;else if(ke.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(ke.__hasExternalTextures)L.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?j=Qe[X][J]:j=Qe[X],ye=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?j=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[J]:j=Qe,k.copy(w.viewport),se.copy(w.scissor),te=w.scissorTest}else k.copy(N).multiplyScalar(z).floor(),se.copy(ne).multiplyScalar(z).floor(),te=Ie;if(J!==0&&(j=Go),je.bindFramebuffer(B.FRAMEBUFFER,j)&&q&&je.drawBuffers(w,j),je.viewport(k),je.scissor(se),je.setScissorTest(te),ye){const ke=Ge.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,J)}else if(Re){const ke=Ge.get(w.texture),et=X;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,J,et)}else if(w!==null&&J!==0){const ke=Ge.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,J)}P=-1},this.readRenderTargetPixels=function(w,X,J,q,j,ye,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(B.FRAMEBUFFER,Le);try{const ke=w.texture,et=ke.format,Qe=ke.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-q&&J>=0&&J<=w.height-j&&B.readPixels(X,J,q,j,nt.convert(et),nt.convert(Qe),ye)}finally{const ke=V!==null?Ge.get(V).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,X,J,q,j,ye,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const ke=w.texture,et=ke.format,Qe=ke.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=w.width-q&&J>=0&&J<=w.height-j){je.bindFramebuffer(B.FRAMEBUFFER,Le);const He=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(X,J,q,j,nt.convert(et),nt.convert(Qe),0);const mt=V!==null?Ge.get(V).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,mt);const rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Fv(B,rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(He),B.deleteSync(rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,X=null,J=0){w.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-J),j=Math.floor(w.image.width*q),ye=Math.floor(w.image.height*q),Re=X!==null?X.x:0,Le=X!==null?X.y:0;L.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Re,Le,j,ye),je.unbindTexture()};const Wo=B.createFramebuffer(),Xo=B.createFramebuffer();this.copyTextureToTexture=function(w,X,J=null,q=null,j=0,ye=null){w.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],X=arguments[2],ye=arguments[3]||0,J=null),ye===null&&(j!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=j,j=0):ye=0);let Re,Le,ke,et,Qe,He,mt,rt,kt;const Nt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(J!==null)Re=J.max.x-J.min.x,Le=J.max.y-J.min.y,ke=J.isBox3?J.max.z-J.min.z:1,et=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{const Qt=Math.pow(2,-j);Re=Math.floor(Nt.width*Qt),Le=Math.floor(Nt.height*Qt),w.isDataArrayTexture?ke=Nt.depth:w.isData3DTexture?ke=Math.floor(Nt.depth*Qt):ke=1,et=0,Qe=0,He=0}q!==null?(mt=q.x,rt=q.y,kt=q.z):(mt=0,rt=0,kt=0);const _t=nt.convert(X.format),Ye=nt.convert(X.type);let zt;X.isData3DTexture?(L.setTexture3D(X,0),zt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),zt=B.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),zt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=B.getParameter(B.UNPACK_ROW_LENGTH),ln=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Gi=B.getParameter(B.UNPACK_SKIP_PIXELS),vn=B.getParameter(B.UNPACK_SKIP_ROWS),xi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,He);const Pt=w.isDataArrayTexture||w.isData3DTexture,un=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const Qt=Ge.get(w),sn=Ge.get(X),Jt=Ge.get(Qt.__renderTarget),xt=Ge.get(sn.__renderTarget);je.bindFramebuffer(B.READ_FRAMEBUFFER,Jt.__webglFramebuffer),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let li=0;li<ke;li++)Pt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,j,He+li),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,ye,kt+li)),B.blitFramebuffer(et,Qe,Re,Le,mt,rt,Re,Le,B.DEPTH_BUFFER_BIT,B.NEAREST);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||Ge.has(w)){const Qt=Ge.get(w),sn=Ge.get(X);je.bindFramebuffer(B.READ_FRAMEBUFFER,Wo),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,Xo);for(let Jt=0;Jt<ke;Jt++)Pt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qt.__webglTexture,j,He+Jt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qt.__webglTexture,j),un?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,ye,kt+Jt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,ye),j!==0?B.blitFramebuffer(et,Qe,Re,Le,mt,rt,Re,Le,B.COLOR_BUFFER_BIT,B.NEAREST):un?B.copyTexSubImage3D(zt,ye,mt,rt,kt+Jt,et,Qe,Re,Le):B.copyTexSubImage2D(zt,ye,mt,rt,et,Qe,Re,Le);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else un?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(zt,ye,mt,rt,kt,Re,Le,ke,_t,Ye,Nt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(zt,ye,mt,rt,kt,Re,Le,ke,_t,Nt.data):B.texSubImage3D(zt,ye,mt,rt,kt,Re,Le,ke,_t,Ye,Nt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,mt,rt,Re,Le,_t,Ye,Nt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,mt,rt,Nt.width,Nt.height,_t,Nt.data):B.texSubImage2D(B.TEXTURE_2D,ye,mt,rt,Re,Le,_t,Ye,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,pt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ln),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Gi),B.pixelStorei(B.UNPACK_SKIP_ROWS,vn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,xi),ye===0&&X.generateMipmaps&&B.generateMipmap(zt),je.unbindTexture()},this.copyTextureToTexture3D=function(w,X,J=null,q=null,j=0){return w.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,q=arguments[1]||null,w=arguments[2],X=arguments[3],j=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,J,q,j)},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){F=0,I=0,V=null,je.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const JM=()=>{const o=Rl.useRef(null);return Rl.useEffect(()=>{if(!o.current)return;const e=new a0,n=window.innerWidth/window.innerHeight,r=5,a=new eg(-r*n,r*n,r,-r,1,1e3);a.position.set(r,r,r),a.lookAt(e.position);const u=new QM({antialias:!0,alpha:!0});u.setSize(window.innerWidth,window.innerHeight),o.current.appendChild(u.domElement);const f=new Xs(2,2,2),d=new qf(1.2),p=new Yf(1.6),m=b=>new Qm({color:b,linewidth:1}),_=[m(16242580),m(16739201),m(7649791)],x=(b,C)=>{const H=new d0(b);return new f0(H,C)},v=x(f,_[0]),S=x(d,_[1]),T=x(p,_[2]);v.position.set(-3,.3,-1),S.position.set(1,-.2,1),T.position.set(2.5,.1,-2),[v,S,T].forEach(b=>{b.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2)}),e.add(v),e.add(S),e.add(T);const A={x:0,y:0},y=b=>{A.x=b.clientX/window.innerWidth*2-1,A.y=-(b.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",y);const g=()=>{requestAnimationFrame(g);const b=Date.now()*.001,C=.15;v.position.y=.3+Math.sin(b)*C,S.position.y=-.2+Math.sin(b+2*Math.PI/3)*C,T.position.y=.1+Math.sin(b+4*Math.PI/3)*C;const H=.5;[v,S,T].forEach(F=>{F.rotation.x+=(-A.y*H-F.rotation.x)*.05,F.rotation.y+=(A.x*H-F.rotation.y)*.05}),u.render(e,a)};g();const D=()=>{const b=window.innerWidth/window.innerHeight;a.left=-r*b,a.right=r*b,a.top=r,a.bottom=-r,a.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",D),()=>{var b;window.removeEventListener("mousemove",y),window.removeEventListener("resize",D),(b=o.current)==null||b.removeChild(u.domElement)}},[]),ot.jsxs("section",{className:"hero",children:[ot.jsx("div",{className:"hero-3d",ref:o}),ot.jsx("div",{className:"hero-content",children:ot.jsxs("div",{className:"hero-text",children:[ot.jsx("h1",{children:"Hi, I'm William"}),ot.jsx("p",{children:"As a Stanford MS & BS student in Computer Science with a specialization in Artificial Intelligence graduating in spring 2025, my passion lies in AI agents and innovative games. My skills span artificial intelligence, full-stack web development, game development, VR/AR, and blockchain."})]})})]})},eE=[{title:"u/haikusbot",description:"Developed the #1 most popular Reddit bot of all time, with over 4.7 million karma and counting.",image:"images/haikusbot.png",tags:["Bot","Python"],links:[{text:"View on Reddit",url:"https://www.reddit.com/user/haikusbot/?sort=top"}]},{title:"StarCraft 2 Bot",description:"Developed a reinforcement learning bot that discovers macro strategies in StarCraft 2 using SARSA. It improved its win rate by 6% after only 1 day of training against the in-game Hard AI.",image:"images/sc2.png",tags:["AI","Bot","Python"],links:[{text:"GitHub",url:"https://github.com/WilliamSongLiu/CS238-SC2"},{text:"Video",url:"https://youtu.be/yBSRBRXVGvo"}]},{title:"League of Legends Bot",description:"Developed an CV bot that dodges skillshots in League of Legends using Segment Anything Model (SAM). Heuristic-based image segmentation allows the bot to run at 20 FPS and dodge skillshots in real time, surpassing traditional object detection techniques like YOLO.",image:"images/lol.png",tags:["AI","Bot","Python"],links:[{text:"Video",url:"https://youtu.be/zyk_REagx-4"}]},{title:"LLM Jailbreaking Competitions",description:"Developed an automated LLM prompt optimization factory to discover jailbreaks in GPT-4o and Claude 3.5 Sonnet-based AI agents, winning over $20,000 in prizes.",image:"images/openai.png",tags:["AI","LLM","Prompt Engineering"],links:[]},{title:"Visual Novel Generator",description:"Developed a visual novel that generates its story on-the-fly based on player choices, offering a first-of-its-kind experience with infinitely branching narratives. Everything from dialogue, choices, characters, imagery, and voiceovers are generated dynamically using AI.",image:"images/vn.png",tags:["AI","LLM","Unity","C#"],links:[]},{title:"Cloudy Paws",description:"Developed a puzzle game about a dog trying to find his way back to his owner.",image:"images/cloudy.png",tags:["Game Dev","Unity","C#"],links:[{text:"Play",url:"https://wliu.itch.io/cloudy-paws"}]},{title:"Witch Simulator",description:"Developed a VR game where the player is a witch, brewing potions to fulfill her customer's orders.",image:"images/witch.png",tags:["Game Dev","VR","Unity","C#"],links:[{text:"Video",url:"https://youtu.be/_FScZjSh7xo"}]},{title:"DATALPHA",description:"Developed a data aggregator and analysis platform for NFT traders, beloved by thousands of users.",image:"images/datalpha.png",tags:["Web3","React.js","Express.js"],links:[{text:"Open Website",url:"https://datalpha.xyz/"}]},{title:"Discord Bots",description:"Developed Discord bots as a freelancer in high school, providing moderation tools and games to over 50 Discord communities.",image:"images/discord.png",tags:["Bot","Node.js"],links:[]},{title:"Penetration Testing",description:"Discovered and reported 2 critical vulnerabilities in browser-based MMO Torn, earning $1,000 in bug bounties in high school.",image:"images/torn.png",tags:["Penetration Testing","PHP"],links:[]}],tE=()=>ot.jsxs("section",{className:"projects",children:[ot.jsx("h2",{children:"Projects"}),ot.jsx("div",{className:"projects-container",children:eE.map((o,e)=>ot.jsxs("div",{className:`project-item ${e%2===0?"image-right":"image-left"}`,children:[ot.jsxs("div",{className:"project-content",children:[ot.jsx("div",{className:"project-tags",children:o.tags.map((n,r)=>ot.jsx("span",{className:"project-tag",children:n},r))}),ot.jsx("h3",{children:o.title}),ot.jsx("p",{children:o.description}),ot.jsx("div",{className:"project-links",children:o.links.map((n,r)=>ot.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:n.text},r))})]}),ot.jsx("div",{className:"project-image-container",children:ot.jsx("img",{src:o.image,alt:o.title})})]},e))})]}),nE=()=>{const[o,e]=Rl.useState(!1);return ot.jsxs("section",{className:"contact",children:[ot.jsx("h2",{children:"Contact Me"}),o?ot.jsx("div",{className:"success-message",children:ot.jsx("p",{children:"Thank you for your message! I'll get back to you soon."})}):ot.jsxs("form",{action:"https://formspree.io/f/xdkkpekr",method:"POST",onSubmit:()=>e(!0),children:[ot.jsxs("div",{className:"form-group",children:[ot.jsx("label",{htmlFor:"name",children:"Name"}),ot.jsx("input",{type:"text",id:"name",name:"name",required:!0,placeholder:"Your name"})]}),ot.jsxs("div",{className:"form-group",children:[ot.jsx("label",{htmlFor:"email",children:"Email"}),ot.jsx("input",{type:"email",id:"email",name:"email",required:!0,placeholder:"your.email@example.com"})]}),ot.jsxs("div",{className:"form-group",children:[ot.jsx("label",{htmlFor:"message",children:"Message"}),ot.jsx("textarea",{id:"message",name:"message",required:!0,placeholder:"Your message here...",rows:5})]}),ot.jsx("button",{type:"submit",children:"Send Message"})]})]})},iE=()=>ot.jsx("div",{className:"app",children:ot.jsxs("main",{children:[ot.jsx(JM,{}),ot.jsx(tE,{}),ot.jsx(nE,{})]})});X_.createRoot(document.getElementById("root")).render(ot.jsx(Rl.StrictMode,{children:ot.jsx(iE,{})}));
