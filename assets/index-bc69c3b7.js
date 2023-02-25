(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const R={};function Ta(e){R.context=e}const Ma=(e,t)=>e===t,K=Symbol("solid-proxy"),Wn=Symbol("solid-track"),pt={equals:Ma};let _r=Dr;const me=1,yt=2,Ir={owned:null,cleanups:null,context:null,owner:null};var Y=null;let ve=null,M=null,U=null,te=null,yn=0;function Tr(e,t){const n=M,r=Y,a=e.length===0,i=a?Ir:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=a?e:()=>e(()=>qe(()=>Pt(i)));Y=i,M=null;try{return Ne(o,!0)}finally{M=n,Y=r}}function re(e,t){t=t?Object.assign({},pt,t):pt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=a=>(typeof a=="function"&&(a=a(n.value)),Rr(n,a));return[Lr.bind(n),r]}function $(e,t,n){const r=wn(e,t,!1,me);Ke(r)}function Jt(e,t,n){_r=za;const r=wn(e,t,!1,me);r.user=!0,te?te.push(r):Ke(r)}function H(e,t,n){n=n?Object.assign({},pt,n):pt;const r=wn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Ke(r),Lr.bind(r)}function La(e){return Ne(e,!1)}function qe(e){if(M===null)return e();const t=M;M=null;try{return e()}finally{M=t}}function Bn(e){return Y===null||(Y.cleanups===null?Y.cleanups=[e]:Y.cleanups.push(e)),e}function Mr(){return M}function Lr(){const e=ve;if(this.sources&&(this.state||e))if(this.state===me||e)Ke(this);else{const t=U;U=null,Ne(()=>kt(this),!1),U=t}if(M){const t=this.observers?this.observers.length:0;M.sources?(M.sources.push(this),M.sourceSlots.push(t)):(M.sources=[this],M.sourceSlots=[t]),this.observers?(this.observers.push(M),this.observerSlots.push(M.sources.length-1)):(this.observers=[M],this.observerSlots=[M.sources.length-1])}return this.value}function Rr(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&Ne(()=>{for(let a=0;a<e.observers.length;a+=1){const i=e.observers[a],o=ve&&ve.running;o&&ve.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?U.push(i):te.push(i),i.observers&&zr(i)),o||(i.state=me)}if(U.length>1e6)throw U=[],new Error},!1)),t}function Ke(e){if(!e.fn)return;Pt(e);const t=Y,n=M,r=yn;M=Y=e,Ra(e,e.value,r),M=n,Y=t}function Ra(e,t,n){let r;try{r=e.fn(t)}catch(a){e.pure&&(e.state=me,e.owned&&e.owned.forEach(Pt),e.owned=null),jr(a)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Rr(e,r):e.value=r,e.updatedAt=n)}function wn(e,t,n,r=me,a){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Y,context:null,pure:n};return Y===null||Y!==Ir&&(Y.owned?Y.owned.push(i):Y.owned=[i]),i}function wt(e){const t=ve;if(e.state===0||t)return;if(e.state===yt||t)return kt(e);if(e.suspense&&qe(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<yn);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===me||t)Ke(e);else if(e.state===yt||t){const a=U;U=null,Ne(()=>kt(e,n[0]),!1),U=a}}function Ne(e,t){if(U)return e();let n=!1;t||(U=[]),te?n=!0:te=[],yn++;try{const r=e();return Da(n),r}catch(r){n||(te=null),U=null,jr(r)}}function Da(e){if(U&&(Dr(U),U=null),e)return;const t=te;te=null,t.length&&Ne(()=>_r(t),!1)}function Dr(e){for(let t=0;t<e.length;t++)wt(e[t])}function za(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:wt(r)}for(R.context&&Ta(),t=0;t<n;t++)wt(e[t])}function kt(e,t){const n=ve;e.state=0;for(let r=0;r<e.sources.length;r+=1){const a=e.sources[r];a.sources&&(a.state===me||n?a!==t&&wt(a):(a.state===yt||n)&&kt(a,t))}}function zr(e){const t=ve;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=yt,r.pure?U.push(r):te.push(r),r.observers&&zr(r))}}function Pt(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),a=n.observers;if(a&&a.length){const i=a.pop(),o=n.observerSlots.pop();r<a.length&&(i.sourceSlots[o]=r,a[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Pt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ja(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function jr(e){throw e=ja(e),e}function E(e,t){return qe(()=>e(t||{}))}function tt(){return!0}const Qt={get(e,t,n){return t===K?n:e.get(t)},has(e,t){return t===K?!0:e.has(t)},set:tt,deleteProperty:tt,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:tt,deleteProperty:tt}},ownKeys(e){return e.keys()}};function Bt(e){return(e=typeof e=="function"?e():e)?e:{}}function ne(...e){let t=!1;for(let r=0;r<e.length;r++){const a=e[r];t=t||!!a&&K in a,e[r]=typeof a=="function"?(t=!0,H(a)):a}if(t)return new Proxy({get(r){for(let a=e.length-1;a>=0;a--){const i=Bt(e[a])[r];if(i!==void 0)return i}},has(r){for(let a=e.length-1;a>=0;a--)if(r in Bt(e[a]))return!0;return!1},keys(){const r=[];for(let a=0;a<e.length;a++)r.push(...Object.keys(Bt(e[a])));return[...new Set(r)]}},Qt);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const a=Object.getOwnPropertyDescriptors(e[r]);for(const i in a)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const s=(e[o]||{})[i];if(s!==void 0)return s}}})}return n}function Nt(e,...t){const n=new Set(t.flat());if(K in e){const a=t.map(i=>new Proxy({get(o){return i.includes(o)?e[o]:void 0},has(o){return i.includes(o)&&o in e},keys(){return i.filter(o=>o in e)}},Qt));return a.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Qt)),a}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(a=>!n.has(a))),t.map(a=>{const i={};for(let o=0;o<a.length;o++){const s=a[o];s in e&&Object.defineProperty(i,s,r[s]?r[s]:{get(){return e[s]},set(){return!0},enumerable:!0})}return i})}const Fa=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Wa=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Fa]),Ba=new Set(["innerHTML","textContent","innerText","children"]),Ya=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Yn=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Ha=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ua=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ga={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Xa(e,t,n){let r=n.length,a=t.length,i=r,o=0,s=0,l=t[a-1].nextSibling,c=null;for(;o<a||s<i;){if(t[o]===n[s]){o++,s++;continue}for(;t[a-1]===n[i-1];)a--,i--;if(a===o){const f=i<r?s?n[s-1].nextSibling:n[i-s]:l;for(;s<i;)e.insertBefore(n[s++],f)}else if(i===s)for(;o<a;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[s]===t[a-1]){const f=t[--a].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--i],f),t[a]=n[i]}else{if(!c){c=new Map;let u=s;for(;u<i;)c.set(n[u],u++)}const f=c.get(t[o]);if(f!=null)if(s<f&&f<i){let u=o,g=1,b;for(;++u<a&&u<i&&!((b=c.get(t[u]))==null||b!==f+g);)g++;if(g>f-s){const h=t[o];for(;s<f;)e.insertBefore(n[s++],h)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const Hn="_$DX_DELEGATE";function Va(e,t,n,r={}){let a;return Tr(i=>{a=i,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{a(),t.textContent=""}}function z(e,t,n){const r=document.createElement("template");r.innerHTML=e;let a=r.content.firstChild;return n&&(a=a.firstChild),a}function _t(e,t=window.document){const n=t[Hn]||(t[Hn]=new Set);for(let r=0,a=e.length;r<a;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,ni))}}function _e(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function qa(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function I(e,t){t==null?e.removeAttribute("class"):e.className=t}function Fr(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const a=n[0];e.addEventListener(t,n[0]=i=>a.call(e,n[1],i))}else e.addEventListener(t,n)}function Ka(e,t,n={}){const r=Object.keys(t||{}),a=Object.keys(n);let i,o;for(i=0,o=a.length;i<o;i++){const s=a[i];!s||s==="undefined"||t[s]||(Un(e,s,!1),delete n[s])}for(i=0,o=r.length;i<o;i++){const s=r[i],l=!!t[s];!s||s==="undefined"||n[s]===l||!l||(Un(e,s,!0),n[s]=l)}return n}function Ja(e,t,n){if(!t)return n?_e(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let a,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)a=t[i],a!==n[i]&&(r.setProperty(i,a),n[i]=a);return n}function kn(e,t={},n,r){const a={};return r||$(()=>a.children=Ee(e,t.children,a.children)),$(()=>t.ref&&t.ref(e)),$(()=>Za(e,t,n,!0,a,!0)),a}function Qa(e,t,n){return qe(()=>e(t,n))}function C(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Ee(e,t,r,n);$(a=>Ee(e,t(),a,n),r)}function Za(e,t,n,r,a={},i=!1){t||(t={});for(const o in a)if(!(o in t)){if(o==="children")continue;a[o]=Gn(e,o,null,a[o],n,i)}for(const o in t){if(o==="children"){r||Ee(e,t.children);continue}const s=t[o];a[o]=Gn(e,o,s,a[o],n,i)}}function ei(e){let t,n;return!R.context||!(t=R.registry.get(n=ri()))?e.cloneNode(!0):(R.completed&&R.completed.add(t),R.registry.delete(n),t)}function ti(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Un(e,t,n){const r=t.trim().split(/\s+/);for(let a=0,i=r.length;a<i;a++)e.classList.toggle(r[a],n)}function Gn(e,t,n,r,a,i){let o,s,l;if(t==="style")return Ja(e,n,r);if(t==="classList")return Ka(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),f=Ha.has(c);if(!f&&r){const u=Array.isArray(r)?r[0]:r;e.removeEventListener(c,u)}(f||n)&&(Fr(e,c,n,f),f&&_t([c]))}else if((l=Ba.has(t))||!a&&(Yn[t]||(s=Wa.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?I(e,n):o&&!s&&!l?e[ti(t)]=n:e[Yn[t]||t]=n;else{const c=a&&t.indexOf(":")>-1&&Ga[t.split(":")[0]];c?qa(e,c,t,n):_e(e,Ya[t]||t,n)}return n}function ni(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),R.registry&&!R.done&&(R.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let a=r.nextSibling;r.remove(),r=a}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const a=n[`${t}Data`];if(a!==void 0?r.call(n,a,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Ee(e,t,n,r,a){for(R.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(R.context)return n;if(i==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=ye(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(R.context)return n;n=ye(e,n,r)}else{if(i==="function")return $(()=>{let s=t();for(;typeof s=="function";)s=s();n=Ee(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],l=n&&Array.isArray(n);if(Zt(s,t,n,a))return $(()=>n=Ee(e,s,n,r,!0)),()=>n;if(R.context){if(!s.length)return n;for(let c=0;c<s.length;c++)if(s[c].parentNode)return n=s}if(s.length===0){if(n=ye(e,n,r),o)return n}else l?n.length===0?Xn(e,s,r):Xa(e,n,s):(n&&ye(e),Xn(e,s));n=s}else if(t instanceof Node){if(R.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=ye(e,n,r,t);ye(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Zt(e,t,n,r){let a=!1;for(let i=0,o=t.length;i<o;i++){let s=t[i],l=n&&n[i];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))a=Zt(e,s,l)||a;else if(typeof s=="function")if(r){for(;typeof s=="function";)s=s();a=Zt(e,Array.isArray(s)?s:[s],Array.isArray(l)?l:[l])||a}else e.push(s),a=!0;else{const c=String(s);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return a}function Xn(e,t,n=null){for(let r=0,a=t.length;r<a;r++)e.insertBefore(t[r],n)}function ye(e,t,n,r){if(n===void 0)return e.textContent="";const a=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(a!==s){const l=s.parentNode===e;!i&&!o?l?e.replaceChild(a,s):e.insertBefore(a,n):l&&s.remove()}else i=!0}}else e.insertBefore(a,n);return[a]}function ri(){const e=R.context;return`${e.id}${e.count++}`}const ai="http://www.w3.org/2000/svg";function Wr(e,t=!1){return t?document.createElementNS(ai,e):document.createElement(e)}function ii(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function a(){if(R.context){const[i,o]=re(!1);return queueMicrotask(()=>o(!0)),()=>i()&&e.children}else return()=>e.children}if(r instanceof HTMLHeadElement){const[i,o]=re(!1),s=()=>o(!0);Tr(l=>C(r,()=>i()?l():a()(),null)),Bn(()=>{R.context?queueMicrotask(s):s()})}else{const i=Wr(e.isSVG?"g":"div",e.isSVG),o=t&&i.attachShadow?i.attachShadow({mode:"open"}):i;Object.defineProperty(i,"_$host",{get(){return n.parentNode},configurable:!0}),C(o,a()),r.appendChild(i),e.ref&&e.ref(i),Bn(()=>r.removeChild(i))}return n}function oi(e){const[t,n]=Nt(e,["component"]),r=H(()=>t.component);return H(()=>{const a=r();switch(typeof a){case"function":return qe(()=>a(n));case"string":const i=Ua.has(a),o=R.context?ei():Wr(a,i);return kn(o,n,i),o}})}function si(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function li(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ci=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(li(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=si(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),B="-ms-",xt="-moz-",S="-webkit-",Br="comm",xn="rule",Sn="decl",fi="@import",Yr="@keyframes",ui=Math.abs,It=String.fromCharCode,di=Object.assign;function mi(e,t){return W(e,0)^45?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}function Hr(e){return e.trim()}function gi(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function en(e,t){return e.indexOf(t)}function W(e,t){return e.charCodeAt(t)|0}function je(e,t,n){return e.slice(t,n)}function J(e){return e.length}function An(e){return e.length}function nt(e,t){return t.push(e),e}function hi(e,t){return e.map(t).join("")}var Tt=1,$e=1,Ur=0,G=0,L=0,Ie="";function Mt(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Tt,column:$e,length:o,return:""}}function Me(e,t){return di(Mt("",null,null,"",null,null,0),e,{length:-e.length},t)}function vi(){return L}function bi(){return L=G>0?W(Ie,--G):0,$e--,L===10&&($e=1,Tt--),L}function X(){return L=G<Ur?W(Ie,G++):0,$e++,L===10&&($e=1,Tt++),L}function ee(){return W(Ie,G)}function mt(){return G}function Je(e,t){return je(Ie,e,t)}function Fe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gr(e){return Tt=$e=1,Ur=J(Ie=e),G=0,[]}function Xr(e){return Ie="",e}function gt(e){return Hr(Je(G-1,tn(e===91?e+2:e===40?e+1:e)))}function pi(e){for(;(L=ee())&&L<33;)X();return Fe(e)>2||Fe(L)>3?"":" "}function yi(e,t){for(;--t&&X()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Je(e,mt()+(t<6&&ee()==32&&X()==32))}function tn(e){for(;X();)switch(L){case e:return G;case 34:case 39:e!==34&&e!==39&&tn(L);break;case 40:e===41&&tn(e);break;case 92:X();break}return G}function wi(e,t){for(;X()&&e+L!==47+10;)if(e+L===42+42&&ee()===47)break;return"/*"+Je(t,G-1)+"*"+It(e===47?e:X())}function ki(e){for(;!Fe(ee());)X();return Je(e,G)}function xi(e){return Xr(ht("",null,null,null,[""],e=Gr(e),0,[0],e))}function ht(e,t,n,r,a,i,o,s,l){for(var c=0,f=0,u=o,g=0,b=0,h=0,v=1,w=1,p=1,y=0,k="",j=a,T=i,F=r,x=k;w;)switch(h=y,y=X()){case 40:if(h!=108&&W(x,u-1)==58){en(x+=A(gt(y),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:x+=gt(y);break;case 9:case 10:case 13:case 32:x+=pi(h);break;case 92:x+=yi(mt()-1,7);continue;case 47:switch(ee()){case 42:case 47:nt(Si(wi(X(),mt()),t,n),l);break;default:x+="/"}break;case 123*v:s[c++]=J(x)*p;case 125*v:case 59:case 0:switch(y){case 0:case 125:w=0;case 59+f:b>0&&J(x)-u&&nt(b>32?qn(x+";",r,n,u-1):qn(A(x," ","")+";",r,n,u-2),l);break;case 59:x+=";";default:if(nt(F=Vn(x,t,n,c,f,a,s,k,j=[],T=[],u),i),y===123)if(f===0)ht(x,t,F,F,j,i,u,s,T);else switch(g===99&&W(x,3)===110?100:g){case 100:case 109:case 115:ht(e,F,F,r&&nt(Vn(e,F,F,0,0,a,s,k,a,j=[],u),T),a,T,u,s,r?j:T);break;default:ht(x,F,F,F,[""],T,0,s,T)}}c=f=b=0,v=p=1,k=x="",u=o;break;case 58:u=1+J(x),b=h;default:if(v<1){if(y==123)--v;else if(y==125&&v++==0&&bi()==125)continue}switch(x+=It(y),y*v){case 38:p=f>0?1:(x+="\f",-1);break;case 44:s[c++]=(J(x)-1)*p,p=1;break;case 64:ee()===45&&(x+=gt(X())),g=ee(),f=u=J(k=x+=ki(mt())),y++;break;case 45:h===45&&J(x)==2&&(v=0)}}return i}function Vn(e,t,n,r,a,i,o,s,l,c,f){for(var u=a-1,g=a===0?i:[""],b=An(g),h=0,v=0,w=0;h<r;++h)for(var p=0,y=je(e,u+1,u=ui(v=o[h])),k=e;p<b;++p)(k=Hr(v>0?g[p]+" "+y:A(y,/&\f/g,g[p])))&&(l[w++]=k);return Mt(e,t,n,a===0?xn:s,l,c,f)}function Si(e,t,n){return Mt(e,t,n,Br,It(vi()),je(e,2,-2),0)}function qn(e,t,n,r){return Mt(e,t,n,Sn,je(e,0,r),je(e,r+1,-1),r)}function Se(e,t){for(var n="",r=An(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Ai(e,t,n,r){switch(e.type){case fi:case Sn:return e.return=e.return||e.value;case Br:return"";case Yr:return e.return=e.value+"{"+Se(e.children,r)+"}";case xn:e.value=e.props.join(",")}return J(n=Se(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ci(e){var t=An(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function Ei(e){return function(t){t.root||(t=t.return)&&e(t)}}function $i(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Oi=function(t,n,r){for(var a=0,i=0;a=i,i=ee(),a===38&&i===12&&(n[r]=1),!Fe(i);)X();return Je(t,G)},Pi=function(t,n){var r=-1,a=44;do switch(Fe(a)){case 0:a===38&&ee()===12&&(n[r]=1),t[r]+=Oi(G-1,n,r);break;case 2:t[r]+=gt(a);break;case 4:if(a===44){t[++r]=ee()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=It(a)}while(a=X());return t},Ni=function(t,n){return Xr(Pi(Gr(t),n))},Kn=new WeakMap,_i=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Kn.get(r))&&!a){Kn.set(t,!0);for(var i=[],o=Ni(n,i),s=r.props,l=0,c=0;l<o.length;l++)for(var f=0;f<s.length;f++,c++)t.props[c]=i[l]?o[l].replace(/&\f/g,s[f]):s[f]+" "+o[l]}}},Ii=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Vr(e,t){switch(mi(e,t)){case 5103:return S+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return S+e+xt+e+B+e+e;case 6828:case 4268:return S+e+B+e+e;case 6165:return S+e+B+"flex-"+e+e;case 5187:return S+e+A(e,/(\w+).+(:[^]+)/,S+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return S+e+B+"flex-item-"+A(e,/flex-|-self/,"")+e;case 4675:return S+e+B+"flex-line-pack"+A(e,/align-content|flex-|-self/,"")+e;case 5548:return S+e+B+A(e,"shrink","negative")+e;case 5292:return S+e+B+A(e,"basis","preferred-size")+e;case 6060:return S+"box-"+A(e,"-grow","")+S+e+B+A(e,"grow","positive")+e;case 4554:return S+A(e,/([^-])(transform)/g,"$1"+S+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,S+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(J(e)-1-t>6)switch(W(e,t+1)){case 109:if(W(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+xt+(W(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~en(e,"stretch")?Vr(A(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(W(e,t+1)!==115)break;case 6444:switch(W(e,J(e)-3-(~en(e,"!important")&&10))){case 107:return A(e,":",":"+S)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(W(e,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+B+"$2box$3")+e}break;case 5936:switch(W(e,t+11)){case 114:return S+e+B+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return S+e+B+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return S+e+B+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return S+e+B+e+e}return e}var Ti=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case Sn:t.return=Vr(t.value,t.length);break;case Yr:return Se([Me(t,{value:A(t.value,"@","@"+S)})],a);case xn:if(t.length)return hi(t.props,function(i){switch(gi(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Se([Me(t,{props:[A(i,/:(read-\w+)/,":"+xt+"$1")]})],a);case"::placeholder":return Se([Me(t,{props:[A(i,/:(plac\w+)/,":"+S+"input-$1")]}),Me(t,{props:[A(i,/:(plac\w+)/,":"+xt+"$1")]}),Me(t,{props:[A(i,/:(plac\w+)/,B+"input-$1")]})],a)}return""})}},Mi=[Ti],Li=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var a=t.stylisPlugins||Mi,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)i[w[p]]=!0;s.push(v)});var l,c=[_i,Ii];{var f,u=[Ai,Ei(function(v){f.insert(v)})],g=Ci(c.concat(a,u)),b=function(w){return Se(xi(w),g)};l=function(w,p,y,k){f=y,b(w?w+"{"+p.styles+"}":p.styles),k&&(h.inserted[p.name]=!0)}}var h={key:n,sheet:new ci({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return h.sheet.hydrate(s),h};function Ri(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Di={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zi=/[A-Z]|^ms/g,ji=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qr=function(t){return t.charCodeAt(1)===45},Jn=function(t){return t!=null&&typeof t!="boolean"},Yt=$i(function(e){return qr(e)?e:e.replace(zi,"-$&").toLowerCase()}),Qn=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ji,function(r,a,i){return Q={name:a,styles:i,next:Q},a})}return Di[t]!==1&&!qr(t)&&typeof n=="number"&&n!==0?n+"px":n};function We(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Q={name:n.name,styles:n.styles,next:Q},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Q={name:r.name,styles:r.styles,next:Q},r=r.next;var a=n.styles+";";return a}return Fi(e,t,n)}case"function":{if(e!==void 0){var i=Q,o=n(e);return Q=i,We(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Fi(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=We(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Jn(o)&&(r+=Yt(i)+":"+Qn(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Jn(o[s])&&(r+=Yt(i)+":"+Qn(i,o[s])+";");else{var l=We(e,t,o);switch(i){case"animation":case"animationName":{r+=Yt(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var Zn=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Q,Ht=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";Q=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=We(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=We(r,n,t[s]),a&&(i+=o[s]);Zn.lastIndex=0;for(var l="",c;(c=Zn.exec(i))!==null;)l+="-"+c[1];var f=Ri(i)+l;return{name:f,styles:i,next:Q}},Wi=!0;function Kr(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var Bi=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||Wi===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Yi=function(t,n,r){Bi(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function er(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function tr(e,t,n){var r=[],a=Kr(e,r,n);return r.length<2?n:a+t(r)}var Hi=function(t){var n=Li(t);n.sheet.speedy=function(s){this.isSpeedy=s},n.compat=!0;var r=function(){for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];var u=Ht(c,n.registered,void 0);return Yi(n,u,!1),n.key+"-"+u.name},a=function(){for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];var u=Ht(c,n.registered),g="animation-"+u.name;return er(n,{name:u.name,styles:"@keyframes "+g+"{"+u.styles+"}"}),g},i=function(){for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];var u=Ht(c,n.registered);er(n,u)},o=function(){for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];return tr(n.registered,r,Ui(c))};return{css:r,cx:o,injectGlobal:i,keyframes:a,hydrate:function(l){l.forEach(function(c){n.inserted[c]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:Kr.bind(null,n.registered),merge:tr.bind(null,n.registered,r)}},Ui=function e(t){for(var n="",r=0;r<t.length;r++){var a=t[r];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))i=e(a);else{i="";for(var o in a)a[o]&&o&&(i&&(i+=" "),i+=o)}break}default:i=a}i&&(n&&(n+=" "),n+=i)}}return n},Gi=Hi({key:"css"}),N=Gi.css;const Oe=(...e)=>e.filter(Boolean).join(" "),Lt=e=>n=>{const[r,a]=Nt(n,["className","m","mb","ml","mr","mt","p","pb","pl","pr","pt"]);return E(e,ne(a,{get className(){return Oe(N({margin:r.m,marginBlockEnd:r.mb,marginInlineStart:r.ml,marginInlineEnd:r.mr,marginBlockStart:r.mt,padding:r.p,paddingBlockEnd:r.pb,paddingInlineStart:r.pl,paddingInlineEnd:r.pr,paddingBlockStart:r.pt}),r.className)}}))},Xi=z("<div></div>"),Vi=e=>(()=>{const t=Xi.cloneNode(!0);return C(t,()=>e.children),$(()=>I(t,Oe(N({height:e.height,maxWidth:e.maxWidth,marginInline:"auto",paddingInline:16}),e.className))),t})(),Jr=Lt(Vi),we=["pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","longBreak"],[Ae,nn]=re(0),qi=()=>{Ae()===we.length-1?nn(0):nn(Ae()+1)},rn=()=>we[Ae()],an=Symbol("store-raw"),Be=Symbol("store-node"),Ki=Symbol("store-name");function Qr(e,t){let n=e[K];if(!n&&(Object.defineProperty(e,K,{value:n=new Proxy(e,Zi)}),!Array.isArray(e))){const r=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let i=0,o=r.length;i<o;i++){const s=r[i];a[s].get&&Object.defineProperty(e,s,{enumerable:a[s].enumerable,get:a[s].get.bind(n)})}}return n}function St(e){let t;return e!=null&&typeof e=="object"&&(e[K]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Ye(e,t=new Set){let n,r,a,i;if(n=e!=null&&e[an])return n;if(!St(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,s=e.length;o<s;o++)a=e[o],(r=Ye(a,t))!==a&&(e[o]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let l=0,c=o.length;l<c;l++)i=o[l],!s[i].get&&(a=e[i],(r=Ye(a,t))!==a&&(e[i]=r))}return e}function Cn(e){let t=e[Be];return t||Object.defineProperty(e,Be,{value:t={}}),t}function on(e,t,n){return e[t]||(e[t]=ea(n))}function Ji(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===K||t===Be||t===Ki||(delete n.value,delete n.writable,n.get=()=>e[K][t]),n}function Zr(e){if(Mr()){const t=Cn(e);(t._||(t._=ea()))()}}function Qi(e){return Zr(e),Reflect.ownKeys(e)}function ea(e){const[t,n]=re(e,{equals:!1,internal:!0});return t.$=n,t}const Zi={get(e,t,n){if(t===an)return e;if(t===K)return n;if(t===Wn)return Zr(e),n;const r=Cn(e),a=r.hasOwnProperty(t);let i=a?r[t]():e[t];if(t===Be||t==="__proto__")return i;if(!a){const o=Object.getOwnPropertyDescriptor(e,t);Mr()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(i=on(r,t,i)())}return St(i)?Qr(i):i},has(e,t){return t===an||t===K||t===Wn||t===Be||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Qi,getOwnPropertyDescriptor:Ji};function At(e,t,n,r=!1){if(!r&&e[t]===n)return;const a=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let o=Cn(e),s;(s=on(o,t,a))&&s.$(()=>n),Array.isArray(e)&&e.length!==i&&(s=on(o,"length",i))&&s.$(e.length),(s=o._)&&s.$()}function ta(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const a=n[r];At(e,a,t[a])}}function eo(e,t){if(typeof t=="function"&&(t=t(e)),t=Ye(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const a=t[n];e[n]!==a&&At(e,n,a)}At(e,"length",r)}else ta(e,t)}function Le(e,t,n=[]){let r,a=e;if(t.length>1){r=t.shift();const o=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let l=0;l<r.length;l++)Le(e,[r[l]].concat(t),n);return}else if(s&&o==="function"){for(let l=0;l<e.length;l++)r(e[l],l)&&Le(e,[l].concat(t),n);return}else if(s&&o==="object"){const{from:l=0,to:c=e.length-1,by:f=1}=r;for(let u=l;u<=c;u+=f)Le(e,[u].concat(t),n);return}else if(t.length>1){Le(e[r],t,[r].concat(n));return}a=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(a,n),i===a)||r===void 0&&i==null||(i=Ye(i),r===void 0||St(a)&&St(i)&&!Array.isArray(i)?ta(a,i):At(e,r,i))}function to(...[e,t]){const n=Ye(e||{}),r=Array.isArray(n),a=Qr(n);function i(...o){La(()=>{r&&o.length===1?eo(n,o[0]):Le(n,o)})}return[a,i]}const na="app-settings",nr={durations:{longBreak:10,pomodoro:25,shortBreak:5}},no=()=>{const e=globalThis.localStorage.getItem(na);if(!e)return nr;let t;try{t=JSON.parse(e)}catch(n){console.error(n),t=nr}return t},[En,Ut]=to(no()),ro=()=>{Jt(()=>{globalThis.localStorage.setItem(na,JSON.stringify(En))})},ao=N({textAlign:"center",paddingBlockEnd:48,fontWeight:500,fontSize:"7rem",fontFamily:"sans-serif"}),io=N({display:"flex",gap:20,justifyContent:"center"}),$n={padding:"16px 32px",border:"none",cursor:"pointer",color:"#fff",borderRadius:4,fontWeight:700,fontSize:"1.4rem",transition:"background-color 200ms ease",":focus":{outline:"2px solid #339af0",outlineOffset:2},":disabled":{cursor:"not-allowed",backgroundColor:"lightgrey",color:"darkgray"}},oo=N({...$n,backgroundColor:"hsl(131, 51%, 29%)",":not(:disabled):hover":{backgroundColor:"hsl(131, 51%, 25%)"}}),so=N({...$n,backgroundColor:"hsl(42, 95%, 37%)",":not(:disabled):hover":{backgroundColor:"hsl(42, 95%, 33%)"}}),lo=N({...$n,backgroundColor:"hsl(0, 94%, 38%)",":not(:disabled):hover":{backgroundColor:"hsl(0, 94%, 34%)"}}),rr=e=>e.toString().padStart(2,"0"),co=e=>{const t=Math.floor(e/60),n=e-t*60;return`${rr(t)}:${rr(n)}`},fo=e=>({stopWorkerCounter(){const t={type:"stop"};e.postMessage(t)},startWorkerCounter(t){const n={type:"start",time:t};e.postMessage(n)}}),uo=z('<div data-testid="remainingTime"></div>'),mo=z("<div><button>Reset</button></div>"),go=z("<button>Start</button>"),ho=z("<button>Pause</button>"),ra=new Worker(new URL("/pomodoro/assets/worker-b3a0bc9e.js",self.location)),{startWorkerCounter:vo,stopWorkerCounter:bo}=fo(ra),po=e=>{const t=()=>En.durations[rn()]*60,[n,r]=re(t()),[a,i]=re("stopped"),o=H(()=>a()==="stopped"&&n()>0),s=H(()=>a()==="stopped"),l=H(()=>a()==="running"&&n()>0),c=()=>{var h;vo(o()?n():t()),i("running"),(h=e.onStart)==null||h.call(e)},f=()=>{var h;bo(),i("stopped"),(h=e.onStop)==null||h.call(e)},u=()=>{r(t()),f()},g=()=>{ra.onmessage=({data:h})=>{var v;r(h.newTime),h.newTime===0&&(f(),(v=e.onComplete)==null||v.call(e))}},b=()=>{r(t())};return Jt(g),Jt(b),[(()=>{const h=uo.cloneNode(!0);return C(h,()=>co(n())),$(()=>I(h,ao)),h})(),(()=>{const h=mo.cloneNode(!0),v=h.firstChild;return C(h,(()=>{const w=H(()=>!!s());return()=>w()&&(()=>{const p=go.cloneNode(!0);return p.$$click=c,$(y=>{const k=oo,j=n()===0;return k!==y._v$4&&I(p,y._v$4=k),j!==y._v$5&&(p.disabled=y._v$5=j),y},{_v$4:void 0,_v$5:void 0}),p})()})(),v),C(h,(()=>{const w=H(()=>!!l());return()=>w()&&(()=>{const p=ho.cloneNode(!0);return p.$$click=f,$(()=>I(p,so)),p})()})(),v),v.$$click=u,$(w=>{const p=io,y=lo,k=a()==="running";return p!==w._v$&&I(h,w._v$=p),y!==w._v$2&&I(v,w._v$2=y),k!==w._v$3&&(v.disabled=w._v$3=k),w},{_v$:void 0,_v$2:void 0,_v$3:void 0}),h})()]};_t(["click"]);function ar(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ar(Object(n),!0).forEach(function(r){D(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ar(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(e)}function yo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ir(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wo(e,t,n){return t&&ir(e.prototype,t),n&&ir(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function On(e,t){return xo(e)||Ao(e,t)||aa(e,t)||Eo()}function Qe(e){return ko(e)||So(e)||aa(e)||Co()}function ko(e){if(Array.isArray(e))return sn(e)}function xo(e){if(Array.isArray(e))return e}function So(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ao(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function aa(e,t){if(e){if(typeof e=="string")return sn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sn(e,t)}}function sn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Co(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Eo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var or=function(){},Pn={},ia={},oa=null,sa={mark:or,measure:or};try{typeof window<"u"&&(Pn=window),typeof document<"u"&&(ia=document),typeof MutationObserver<"u"&&(oa=MutationObserver),typeof performance<"u"&&(sa=performance)}catch{}var $o=Pn.navigator||{},sr=$o.userAgent,lr=sr===void 0?"":sr,fe=Pn,P=ia,cr=oa,rt=sa;fe.document;var se=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",la=~lr.indexOf("MSIE")||~lr.indexOf("Trident/"),at,it,ot,st,lt,ae="___FONT_AWESOME___",ln=16,ca="fa",fa="svg-inline--fa",be="data-fa-i2svg",cn="data-fa-pseudo-element",Oo="data-fa-pseudo-element-pending",Nn="data-prefix",_n="data-icon",fr="fontawesome-i2svg",Po="async",No=["HTML","HEAD","STYLE","SCRIPT"],ua=function(){try{return!0}catch{return!1}}(),O="classic",_="sharp",In=[O,_];function Ze(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[O]}})}var He=Ze((at={},D(at,O,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),D(at,_,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),at)),Ue=Ze((it={},D(it,O,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),D(it,_,{solid:"fass",regular:"fasr"}),it)),Ge=Ze((ot={},D(ot,O,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),D(ot,_,{fass:"fa-solid",fasr:"fa-regular"}),ot)),_o=Ze((st={},D(st,O,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),D(st,_,{"fa-solid":"fass","fa-regular":"fasr"}),st)),Io=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,da="fa-layers-text",To=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Mo=Ze((lt={},D(lt,O,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),D(lt,_,{900:"fass",400:"fasr"}),lt)),ma=[1,2,3,4,5,6,7,8,9,10],Lo=ma.concat([11,12,13,14,15,16,17,18,19,20]),Ro=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ge={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xe=new Set;Object.keys(Ue[O]).map(Xe.add.bind(Xe));Object.keys(Ue[_]).map(Xe.add.bind(Xe));var Do=[].concat(In,Qe(Xe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ge.GROUP,ge.SWAP_OPACITY,ge.PRIMARY,ge.SECONDARY]).concat(ma.map(function(e){return"".concat(e,"x")})).concat(Lo.map(function(e){return"w-".concat(e)})),De=fe.FontAwesomeConfig||{};function zo(e){var t=P.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function jo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(P&&typeof P.querySelector=="function"){var Fo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fo.forEach(function(e){var t=On(e,2),n=t[0],r=t[1],a=jo(zo(n));a!=null&&(De[r]=a)})}var ga={styleDefault:"solid",familyDefault:"classic",cssPrefix:ca,replacementClass:fa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};De.familyPrefix&&(De.cssPrefix=De.familyPrefix);var Pe=d(d({},ga),De);Pe.autoReplaceSvg||(Pe.observeMutations=!1);var m={};Object.keys(ga).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(n){Pe[e]=n,ze.forEach(function(r){return r(m)})},get:function(){return Pe[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){Pe.cssPrefix=t,ze.forEach(function(n){return n(m)})},get:function(){return Pe.cssPrefix}});fe.FontAwesomeConfig=m;var ze=[];function Wo(e){return ze.push(e),function(){ze.splice(ze.indexOf(e),1)}}var ce=ln,Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bo(e){if(!(!e||!se)){var t=P.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=P.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return P.head.insertBefore(t,r),e}}var Yo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ve(){for(var e=12,t="";e-- >0;)t+=Yo[Math.random()*62|0];return t}function Te(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Tn(e){return e.classList?Te(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ha(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ho(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ha(e[n]),'" ')},"").trim()}function Rt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Mn(e){return e.size!==Z.size||e.x!==Z.x||e.y!==Z.y||e.rotate!==Z.rotate||e.flipX||e.flipY}function Uo(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Go(e){var t=e.transform,n=e.width,r=n===void 0?ln:n,a=e.height,i=a===void 0?ln:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&la?l+="translate(".concat(t.x/ce-r/2,"em, ").concat(t.y/ce-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ce,"em), calc(-50% + ").concat(t.y/ce,"em)) "):l+="translate(".concat(t.x/ce,"em, ").concat(t.y/ce,"em) "),l+="scale(".concat(t.size/ce*(t.flipX?-1:1),", ").concat(t.size/ce*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function va(){var e=ca,t=fa,n=m.cssPrefix,r=m.replacementClass,a=Xo;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ur=!1;function Gt(){m.autoAddCss&&!ur&&(Bo(va()),ur=!0)}var Vo={mixout:function(){return{dom:{css:va,insertCss:Gt}}},hooks:function(){return{beforeDOMElementCreation:function(){Gt()},beforeI2svg:function(){Gt()}}}},ie=fe||{};ie[ae]||(ie[ae]={});ie[ae].styles||(ie[ae].styles={});ie[ae].hooks||(ie[ae].hooks={});ie[ae].shims||(ie[ae].shims=[]);var q=ie[ae],ba=[],qo=function e(){P.removeEventListener("DOMContentLoaded",e),Et=1,ba.map(function(t){return t()})},Et=!1;se&&(Et=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Et||P.addEventListener("DOMContentLoaded",qo));function Ko(e){se&&(Et?setTimeout(e,0):ba.push(e))}function et(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ha(e):"<".concat(t," ").concat(Ho(r),">").concat(i.map(et).join(""),"</").concat(t,">")}function dr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Jo=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Xt=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Jo(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Qo(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function fn(e){var t=Qo(e);return t.length===1?t[0].toString(16):null}function Zo(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function mr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function un(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=mr(t);typeof q.hooks.addPack=="function"&&!a?q.hooks.addPack(e,mr(t)):q.styles[e]=d(d({},q.styles[e]||{}),i),e==="fas"&&un("fa",t)}var ct,ft,ut,ke=q.styles,es=q.shims,ts=(ct={},D(ct,O,Object.values(Ge[O])),D(ct,_,Object.values(Ge[_])),ct),Ln=null,pa={},ya={},wa={},ka={},xa={},ns=(ft={},D(ft,O,Object.keys(He[O])),D(ft,_,Object.keys(He[_])),ft);function rs(e){return~Do.indexOf(e)}function as(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!rs(a)?a:null}var Sa=function(){var t=function(i){return Xt(ke,function(o,s,l){return o[l]=Xt(s,i,{}),o},{})};pa=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ya=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),xa=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ke||m.autoFetchSvg,r=Xt(es,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});wa=r.names,ka=r.unicodes,Ln=Dt(m.styleDefault,{family:m.familyDefault})};Wo(function(e){Ln=Dt(e.styleDefault,{family:m.familyDefault})});Sa();function Rn(e,t){return(pa[e]||{})[t]}function is(e,t){return(ya[e]||{})[t]}function he(e,t){return(xa[e]||{})[t]}function Aa(e){return wa[e]||{prefix:null,iconName:null}}function os(e){var t=ka[e],n=Rn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ue(){return Ln}var Dn=function(){return{prefix:null,iconName:null,rest:[]}};function Dt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?O:n,a=He[r][e],i=Ue[r][e]||Ue[r][a],o=e in q.styles?e:null;return i||o||null}var gr=(ut={},D(ut,O,Object.keys(Ge[O])),D(ut,_,Object.keys(Ge[_])),ut);function zt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},D(t,O,"".concat(m.cssPrefix,"-").concat(O)),D(t,_,"".concat(m.cssPrefix,"-").concat(_)),t),o=null,s=O;(e.includes(i[O])||e.some(function(c){return gr[O].includes(c)}))&&(s=O),(e.includes(i[_])||e.some(function(c){return gr[_].includes(c)}))&&(s=_);var l=e.reduce(function(c,f){var u=as(m.cssPrefix,f);if(ke[f]?(f=ts[s].includes(f)?_o[s][f]:f,o=f,c.prefix=f):ns[s].indexOf(f)>-1?(o=f,c.prefix=Dt(f,{family:s})):u?c.iconName=u:f!==m.replacementClass&&f!==i[O]&&f!==i[_]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var g=o==="fa"?Aa(c.iconName):{},b=he(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!ke.far&&ke.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},Dn());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===_&&(ke.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=he(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ue()||"fas"),l}var ss=function(){function e(){yo(this,e),this.definitions={}}return wo(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),un(s,o[s]);var l=Ge[O][s];l&&un(l,o[s]),Sa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),e}(),hr=[],xe={},Ce={},ls=Object.keys(Ce);function cs(e,t){var n=t.mixoutsTo;return hr=e,xe={},Object.keys(Ce).forEach(function(r){ls.indexOf(r)===-1&&delete Ce[r]}),hr.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ct(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xe[o]||(xe[o]=[]),xe[o].push(i[o])})}r.provides&&r.provides(Ce)}),n}function dn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xe[e]||[];a.forEach(function(i){i.apply(null,n)})}function oe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ce[e]?Ce[e].apply(null,t):void 0}function mn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ue();if(t)return t=he(n,t)||t,dr(Ca.definitions,n,t)||dr(q.styles,n,t)}var Ca=new ss,fs=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,pe("noAuto")},us={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return se?(pe("beforeI2svg",t),oe("pseudoElements2svg",t),oe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ko(function(){ms({autoReplaceSvgRoot:n}),pe("watch",t)})}},ds={icon:function(t){if(t===null)return null;if(Ct(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:he(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Dt(t[0]);return{prefix:r,iconName:he(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Io))){var a=zt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ue(),iconName:he(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ue();return{prefix:i,iconName:he(i,t)||t}}}},V={noAuto:fs,config:m,dom:us,parse:ds,library:Ca,findIconDefinition:mn,toHtml:et},ms=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?P:n;(Object.keys(q.styles).length>0||m.autoFetchSvg)&&se&&m.autoReplaceSvg&&V.dom.i2svg({node:r})};function jt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return et(r)})}}),Object.defineProperty(e,"node",{get:function(){if(se){var r=P.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gs(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Mn(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Rt(d(d({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function hs(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:o}),children:r}]}]}function zn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,u=e.extra,g=e.watchable,b=g===void 0?!1:g,h=r.found?r:n,v=h.width,w=h.height,p=a==="fak",y=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(le){return u.classes.indexOf(le)===-1}).filter(function(le){return le!==""||!!le}).concat(u.classes).join(" "),k={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(w)})},j=p&&!~u.classes.indexOf("fa-fw")?{width:"".concat(v/w*16*.0625,"em")}:{};b&&(k.attributes[be]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(f||Ve())},children:[l]}),delete k.attributes.title);var T=d(d({},k),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:d(d({},j),u.styles)}),F=r.found&&n.found?oe("generateAbstractMask",T)||{children:[],attributes:{}}:oe("generateAbstractIcon",T)||{children:[],attributes:{}},x=F.children,Wt=F.attributes;return T.children=x,T.attributes=Wt,s?hs(T):gs(T)}function vr(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[be]="");var f=d({},o.styles);Mn(a)&&(f.transform=Go({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var u=Rt(f);u.length>0&&(c.style=u);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function vs(e){var t=e.content,n=e.title,r=e.extra,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vt=q.styles;function gn(e){var t=e[0],n=e[1],r=e.slice(4),a=On(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ge.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ge.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ge.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var bs={found:!1,width:512,height:512};function ps(e,t){!ua&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function hn(e,t){var n=t;return t==="fa"&&m.styleDefault!==null&&(t=ue()),new Promise(function(r,a){if(oe("missingIconAbstract"),n==="fa"){var i=Aa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Vt[t]&&Vt[t][e]){var o=Vt[t][e];return r(gn(o))}ps(e,t),r(d(d({},bs),{},{icon:m.showMissingIcons&&e?oe("missingIconAbstract")||{}:{}}))})}var br=function(){},vn=m.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:br,measure:br},Re='FA "6.3.0"',ys=function(t){return vn.mark("".concat(Re," ").concat(t," begins")),function(){return Ea(t)}},Ea=function(t){vn.mark("".concat(Re," ").concat(t," ends")),vn.measure("".concat(Re," ").concat(t),"".concat(Re," ").concat(t," begins"),"".concat(Re," ").concat(t," ends"))},jn={begin:ys,end:Ea},vt=function(){};function pr(e){var t=e.getAttribute?e.getAttribute(be):null;return typeof t=="string"}function ws(e){var t=e.getAttribute?e.getAttribute(Nn):null,n=e.getAttribute?e.getAttribute(_n):null;return t&&n}function ks(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function xs(){if(m.autoReplaceSvg===!0)return bt.replace;var e=bt[m.autoReplaceSvg];return e||bt.replace}function Ss(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function As(e){return P.createElement(e)}function $a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ss:As:n;if(typeof e=="string")return P.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild($a(o,{ceFn:r}))}),a}function Cs(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var bt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore($a(a),n)}),n.getAttribute(be)===null&&m.keepOriginalSource){var r=P.createComment(Cs(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Tn(n).indexOf(m.replacementClass))return bt.replace(t);var a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return et(s)}).join(`
`);n.setAttribute(be,""),n.innerHTML=o}};function yr(e){e()}function Oa(e,t){var n=typeof t=="function"?t:vt;if(e.length===0)n();else{var r=yr;m.mutateApproach===Po&&(r=fe.requestAnimationFrame||yr),r(function(){var a=xs(),i=jn.begin("mutate");e.map(a),i(),n()})}}var Fn=!1;function Pa(){Fn=!0}function bn(){Fn=!1}var $t=null;function wr(e){if(cr&&m.observeMutations){var t=e.treeCallback,n=t===void 0?vt:t,r=e.nodeCallback,a=r===void 0?vt:r,i=e.pseudoElementsCallback,o=i===void 0?vt:i,s=e.observeMutationsRoot,l=s===void 0?P:s;$t=new cr(function(c){if(!Fn){var f=ue();Te(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!pr(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&pr(u.target)&&~Ro.indexOf(u.attributeName))if(u.attributeName==="class"&&ws(u.target)){var g=zt(Tn(u.target)),b=g.prefix,h=g.iconName;u.target.setAttribute(Nn,b||f),h&&u.target.setAttribute(_n,h)}else ks(u.target)&&a(u.target)})}}),se&&$t.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Es(){$t&&$t.disconnect()}function $s(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Os(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=zt(Tn(e));return a.prefix||(a.prefix=ue()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=is(a.prefix,e.innerText)||Rn(a.prefix,fn(e.innerText))),!a.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ps(e){var t=Te(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||Ve()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ns(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Os(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ps(e),s=dn("parseNodeAttributes",{},e),l=t.styleParser?$s(e):[];return d({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var _s=q.styles;function Na(e){var t=m.autoReplaceSvg==="nest"?kr(e,{styleParser:!1}):kr(e);return~t.extra.classes.indexOf(da)?oe("generateLayersText",e,t):oe("generateSvgReplacementMutation",e,t)}var de=new Set;In.map(function(e){de.add("fa-".concat(e))});Object.keys(He[O]).map(de.add.bind(de));Object.keys(He[_]).map(de.add.bind(de));de=Qe(de);function xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!se)return Promise.resolve();var n=P.documentElement.classList,r=function(u){return n.add("".concat(fr,"-").concat(u))},a=function(u){return n.remove("".concat(fr,"-").concat(u))},i=m.autoFetchSvg?de:In.map(function(f){return"fa-".concat(f)}).concat(Object.keys(_s));i.includes("fa")||i.push("fa");var o=[".".concat(da,":not([").concat(be,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(be,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Te(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=jn.begin("onTree"),c=s.reduce(function(f,u){try{var g=Na(u);g&&f.push(g)}catch(b){ua||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(g){Oa(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(g){l(),u(g)})})}function Is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Na(e).then(function(n){n&&Oa([n],t)})}function Ts(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:mn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:mn(a||{})),e(r,d(d({},n),{},{mask:a}))}}var Ms=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Z:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,g=u===void 0?null:u,b=n.titleId,h=b===void 0?null:b,v=n.classes,w=v===void 0?[]:v,p=n.attributes,y=p===void 0?{}:p,k=n.styles,j=k===void 0?{}:k;if(t){var T=t.prefix,F=t.iconName,x=t.icon;return jt(d({type:"icon"},t),function(){return pe("beforeDOMElementCreation",{iconDefinition:t,params:n}),m.autoA11y&&(g?y["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(h||Ve()):(y["aria-hidden"]="true",y.focusable="false")),zn({icons:{main:gn(x),mask:l?gn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:F,transform:d(d({},Z),a),symbol:o,title:g,maskId:f,titleId:h,extra:{attributes:y,styles:j,classes:w}})})}},Ls={mixout:function(){return{icon:Ts(Ms)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xr,n.nodeCallback=Is,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?P:r,i=n.callback,o=i===void 0?function(){}:i;return xr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,u=r.maskId,g=r.extra;return new Promise(function(b,h){Promise.all([hn(a,s),f.iconName?hn(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=On(v,2),p=w[0],y=w[1];b([n,zn({icons:{main:p,mask:y},prefix:s,iconName:a,transform:l,symbol:c,maskId:u,title:i,titleId:o,extra:g,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Rt(s);l.length>0&&(a.style=l);var c;return Mn(o)&&(c=oe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Rs={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return jt({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(Qe(i)).join(" ")},children:o}]})}}}},Ds={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return jt({type:"counter",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),vs({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(Qe(s))}})})}}}},zs={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Z:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,g=r.styles,b=g===void 0?{}:g;return jt({type:"text",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),vr({content:n,transform:d(d({},Z),i),title:s,extra:{attributes:u,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(Qe(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(la){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vr({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},js=new RegExp('"',"ug"),Sr=[1105920,1112319];function Fs(e){var t=e.replace(js,""),n=Zo(t,0),r=n>=Sr[0]&&n<=Sr[1],a=t.length===2?t[0]===t[1]:!1;return{value:fn(a?t[0]:t),isSecondary:r||a}}function Ar(e,t){var n="".concat(Oo).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Te(e.children),o=i.filter(function(x){return x.getAttribute(cn)===t})[0],s=fe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(To),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?_:O,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ue[g][l[2].toLowerCase()]:Mo[g][c],h=Fs(u),v=h.value,w=h.isSecondary,p=l[0].startsWith("FontAwesome"),y=Rn(b,v),k=y;if(p){var j=os(v);j.iconName&&j.prefix&&(y=j.iconName,b=j.prefix)}if(y&&!w&&(!o||o.getAttribute(Nn)!==b||o.getAttribute(_n)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var T=Ns(),F=T.extra;F.attributes[cn]=t,hn(y,b).then(function(x){var Wt=zn(d(d({},T),{},{icons:{main:x,mask:Dn()},prefix:b,iconName:k,extra:F,watchable:!0})),le=P.createElement("svg");t==="::before"?e.insertBefore(le,e.firstChild):e.appendChild(le),le.outerHTML=Wt.map(function(Ia){return et(Ia)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ws(e){return Promise.all([Ar(e,"::before"),Ar(e,"::after")])}function Bs(e){return e.parentNode!==document.head&&!~No.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(cn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Cr(e){if(se)return new Promise(function(t,n){var r=Te(e.querySelectorAll("*")).filter(Bs).map(Ws),a=jn.begin("searchPseudoElements");Pa(),Promise.all(r).then(function(){a(),bn(),t()}).catch(function(){a(),bn(),n()})})}var Ys={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Cr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?P:r;m.searchPseudoElements&&Cr(a)}}},Er=!1,Hs={mixout:function(){return{dom:{unwatch:function(){Pa(),Er=!0}}}},hooks:function(){return{bootstrap:function(){wr(dn("mutationObserverCallbacks",{}))},noAuto:function(){Es()},watch:function(n){var r=n.observeMutationsRoot;Er?bn():wr(dn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$r=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Us={mixout:function(){return{parse:{transform:function(n){return $r(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=$r(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:u,path:g};return{tag:"g",attributes:d({},b.outer),children:[{tag:"g",attributes:d({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:d(d({},r.icon.attributes),b.path)}]}]}}}},qt={x:0,y:0,width:"100%",height:"100%"};function Or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gs(e){return e.tag==="g"?e.children:[e]}var Xs={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?zt(a.split(" ").map(function(o){return o.trim()})):Dn();return i.prefix||(i.prefix=ue()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,u=o.width,g=o.icon,b=Uo({transform:l,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:d(d({},qt),{},{fill:"white"})},v=f.children?{children:f.children.map(Or)}:{},w={tag:"g",attributes:d({},b.inner),children:[Or(d({tag:f.tag,attributes:d(d({},f.attributes),b.path)},v))]},p={tag:"g",attributes:d({},b.outer),children:[w]},y="mask-".concat(s||Ve()),k="clip-".concat(s||Ve()),j={tag:"mask",attributes:d(d({},qt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,p]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Gs(g)},j]};return r.push(T,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(y,")")},qt)}),{children:r,attributes:a}}}},Vs={provides:function(t){var n=!1;fe.matchMedia&&(n=fe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:d(d({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:d(d({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:d(d({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qs={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ks=[Vo,Ls,Rs,Ds,zs,Ys,Hs,Us,Xs,Vs,qs];cs(Ks,{mixoutsTo:V});V.noAuto;V.config;var Js=V.library;V.dom;V.parse;V.findIconDefinition;V.toHtml;var Qs=V.icon;V.layer;V.text;V.counter;var Zs={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},el={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},tl={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},nl=tl,rl={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};const al=N({width:"var(--size)",height:"var(--size)",display:"flex",justifyContent:"center","& svg":{height:"100%",color:"inherit"}}),il=z("<span></span>"),ol=[Zs,el,nl,rl];Js.add(...ol);const _a=e=>(()=>{const t=il.cloneNode(!0);return $(n=>{var o;const r=al,a=(o=Qs({prefix:"fas",iconName:e.iconName}))==null?void 0:o.html,i=`${e.size??20}px`;return r!==n._v$&&I(t,n._v$=r),a!==n._v$2&&(t.innerHTML=n._v$2=a),i!==n._v$3&&t.style.setProperty("--size",n._v$3=i),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),sl=N({color:"#868e96",padding:3,border:"none",backgroundColor:"transparent",cursor:"pointer",width:"var(--size)",height:"var(--size)",borderRadius:2,transition:"background-color 200ms ease",":hover":{backgroundColor:"#ecedf0"},"> *":{width:"100%",height:"100%"}}),ll=z("<button></button>"),Ot=e=>{const[t,n]=Nt(e,["onClick","size","iconName"]);return(()=>{const r=ll.cloneNode(!0);return r.$$click=a=>{var i;return(i=t.onClick)==null?void 0:i.call(t,a)},kn(r,ne({get class(){return sl},get style(){return{"--size":`${t.size}px`}}},n),!1,!0),C(r,E(_a,{get iconName(){return t.iconName},get size(){return t.size}})),r})()};_t(["click"]);const cl={light:300,normal:400,bold:700,300:300,400:400,500:500,600:600,700:700,800:800},fl={1:"2rem",2:"1.8rem",3:"1.6rem",4:"1.4rem",5:"1.2rem",6:"1rem"},ul=e=>{const t=ne({level:1},e);return E(oi,{get tabIndex(){return t.shouldAutoFocus?-1:void 0},get component(){return`h${t.level}`},get class(){return Oe(t.className,N({fontFamily:"'Raleway', sans-serif",fontSize:t.size?t.size:fl[t.level],fontWeight:t.weight?cl[t.weight]:"bold"}))},get children(){return t.children}})},Ft=Lt(ul),dl=N({alignItems:"center",border:"1px solid darkgrey",borderRadius:32,color:"black",cursor:"pointer",display:"flex",flexShrink:0,fontWeight:500,paddingBlock:4,paddingInline:24,fontSize:".9rem",":has(input:checked)":{fontSize:"1rem",borderColor:"var(--color)"},":has(input:disabled)":{backgroundColor:"lightgray",color:"gray",cursor:"not-allowed",borderColor:"currentcolor"}}),ml=N({appearance:"none",":checked:before":{content:'"✔"',fontSize:20,marginInlineEnd:8,color:"var(--color)"}}),gl=N({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",border:"none",gap:8}),hl=z('<label><input type="radio"></label>'),vl=z('<fieldset data-testid="counters-group"></fieldset>'),bl=e=>{const t=ne({isEnabled:!0},e);return(()=>{const n=hl.cloneNode(!0),r=n.firstChild;return r.addEventListener("change",({currentTarget:{value:a}})=>{t.onChange(parseInt(a))}),C(n,()=>t.children,null),$(a=>{const i=dl,o=t.colour,s=ml,l=!t.isEnabled,c=t.name;return i!==a._v$&&I(n,a._v$=i),o!==a._v$2&&n.style.setProperty("--color",a._v$2=o),s!==a._v$3&&I(r,a._v$3=s),l!==a._v$4&&(r.disabled=a._v$4=l),c!==a._v$5&&_e(r,"name",a._v$5=c),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),$(()=>r.checked=t.isChecked),$(()=>r.value=t.value),n})()},pl=e=>(()=>{const t=vl.cloneNode(!0);return C(t,()=>e.children({name:"counter-selector",onChange:e.onChange})),$(()=>I(t,gl)),t})(),dt={pomodoro:{text:"Pomodoro",color:"hsl(209, 75%, 38%)"},shortBreak:{text:"Short break",color:"hsl(131, 51%, 29%)"},longBreak:{text:"Long break",color:"hsl(288, 54%, 40%)"}},yl=N({display:"flex",justifyContent:"center",alignItems:"center"}),wl=z("<span></span>"),Pr=z("<div></div>"),kl=e=>{const[t,n]=re(!1);if(Ae()<0||Ae()+1>we.length)throw new Error("Invalid currentCounterIndex value");const r=(()=>{const i=Pr.cloneNode(!0);return I(i,yl),C(i,E(Ft,{level:2,mr:8,get children(){return["Current timer:",(()=>{const o=wl.cloneNode(!0);return C(o,()=>` ${dt[rn()].text}`),$(()=>o.style.setProperty("color",dt[rn()].color)),o})()]}}),null),C(i,E(Ot,{"aria-label":"edit counter type",iconName:"pencil",onClick:()=>{n(!0)},size:30}),null),i})(),a=E(pl,{onChange:nn,children:i=>we.map((o,s)=>[E(bl,ne({get colour(){return dt[o].color},get isChecked(){return s===Ae()},get isEnabled(){return!e.isDisabled},value:s},i,{get children(){return dt[o].text}})),H((()=>{const l=H(()=>s<we.length-1);return()=>l()&&E(_a,{iconName:"chevron-right",size:15})})()),H((()=>{const l=H(()=>s===we.length-1);return()=>l()&&E(Ot,{iconName:"close",onClick:()=>{n(!1)},size:30})})())])});return(()=>{const i=Pr.cloneNode(!0);return C(i,()=>t()?a:r),$(()=>I(i,e.className)),i})()},xl=Lt(kl),Sl=N({position:"fixed",top:0,right:0,bottom:0,left:0,width:"100%",zIndex:1,opacity:0,transition:"opacity 0.3s",willChange:"opacity",backgroundColor:"#000",userSelect:"none","&.isOpen":{opacity:.7}}),Al=N({position:"fixed",top:0,left:0,bottom:0,height:"100%",width:"100%",maxWidth:"500px",zIndex:2,overflow:"auto",transition:"transform 0.3s",willChange:"transform",backgroundColor:"#fff",display:"flex",flexDirection:"column",transform:"translate3d(0%, 0, 0)",boxShadow:"6px 0px 6px 1px #777"}),Cl=N({padding:16,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #ddd"}),El=N({position:"relative",overflowX:"hidden",overflowY:"auto",height:"100%",flex:"1",padding:16}),$l=z("<div></div>"),Ol=z('<div aria-labelledby="drawer-header" role="dialog"><header id="drawer-header"><div></div></header><div></div></div>'),pn="drawer-container-id";if(!document.getElementById(pn)){const e=document.createElement("div");e.setAttribute("id",pn),document.body.appendChild(e)}const Pl=e=>E(ii,{get mount(){return document.getElementById(pn)},get children(){return H(()=>!!e.isOpen)()&&[(()=>{const t=$l.cloneNode(!0);return Fr(t,"click",e.onClose,!0),$(()=>I(t,Oe(Sl,"isOpen"))),t})(),(()=>{const t=Ol.cloneNode(!0),n=t.firstChild,r=n.firstChild,a=n.nextSibling;return C(r,()=>e.heading),C(n,E(Ot,{get["aria-label"](){return e.closeIconLabel??"close"},iconName:"close",get onClick(){return e.onClose},size:30}),null),C(a,()=>e.children),$(i=>{const o=Al,s=Cl,l=El;return o!==i._v$&&I(t,i._v$=o),s!==i._v$2&&I(n,i._v$2=s),l!==i._v$3&&I(a,i._v$3=l),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()]}});_t(["click"]);const Nl=N({display:"flex",columnGap:10,alignItems:"center"}),_l=e=>N({height:e,borderBottom:"1px solid lightgrey"}),Il=z("<div></div>"),Tl=z("<header></header>"),Nr=80,Ml=e=>(()=>{const t=Tl.cloneNode(!0);return C(t,E(Jr,{height:Nr,maxWidth:600,get children(){const n=Il.cloneNode(!0);return C(n,E(Ot,{"aria-label":"settings menu",iconName:"bars",get onClick(){return e.onSettingsClick},size:30}),null),C(n,E(Ft,{size:"3rem",children:"Pomodoro"}),null),$(()=>I(n,Nl)),n}})),$(()=>I(t,_l(Nr))),t})(),Ll=N({display:"flex",flexDirection:"column",gap:4,fontSize:"0.8rem",fontWeight:500}),Rl=N({":after":{content:'" *"',color:"red",fontSize:"1.1rem"}}),Dl=N({height:40,borderRadius:4,padding:8,paddingInlineStart:16,border:"1px solid lightgrey",":disabled":{cursor:"not-allowed"}});N({color:"red",fontSize:"1.1rem"});const zl=N({color:"red"}),jl=z("<div><label></label><input></div>"),Fl=z("<span></span>"),Wl=e=>{const[t,n]=Nt(e,["className","error","isRequired","label","onChange","value"]),r=H(()=>Oe(Ll,t.className)),a=H(()=>Oe(t.isRequired&&Rl));return(()=>{const i=jl.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return C(o,()=>t.label),kn(s,ne({get class(){return Dl}},n,{get["aria-required"](){return t.isRequired},get id(){return t.label},onChange:l=>t.onChange(l),get value(){return t.value}}),!1,!1),C(i,(()=>{const l=H(()=>!!t.error);return()=>l()&&(()=>{const c=Fl.cloneNode(!0);return C(c,()=>t.error),$(()=>I(c,zl)),c})()})(),null),$(l=>{const c=r(),f=a(),u=t.label;return c!==l._v$&&I(i,l._v$=c),f!==l._v$2&&I(o,l._v$2=f),u!==l._v$3&&_e(o,"for",l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()},Kt=Lt(Wl),Bl=z("<section></section>"),Yl=e=>{const t=En.durations,n={isRequired:!0,mb:16,type:"number",min:0};return(()=>{const r=Bl.cloneNode(!0);return C(r,E(Ft,{level:3,mb:16,children:"Durations"}),null),C(r,E(Kt,ne(n,{get disabled(){return e.isDurationEditingDisabled},get error(){return t.pomodoro<=0&&"Pomodoro duration must be set"},label:"Pomodoro",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Ut("durations","pomodoro",i)},get value(){return t.pomodoro===0?"":t.pomodoro}})),null),C(r,E(Kt,ne(n,{get disabled(){return e.isDurationEditingDisabled},get error(){return t.shortBreak<=0&&"Short break duration must be set"},label:"Short break",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Ut("durations","shortBreak",i)},get value(){return t.shortBreak===0?"":t.shortBreak}})),null),C(r,E(Kt,ne(n,{get disabled(){return e.isDurationEditingDisabled},get error(){return t.longBreak<=0&&"Long break duration must be set"},label:"Long break",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Ut("durations","longBreak",i)},get value(){return t.longBreak===0?"":t.longBreak}})),null),$(()=>_e(r,"data-testid",e.dataTestId)),r})()},Hl="/pomodoro/assets/alarm-1-42bf15fd.mp3",Ul={alarm1:Hl},Gl=z("<div><audio></audio><main></main></div>"),Xl=()=>{ro();const[e,t]=re(!1),[n,r]=re(!1);let a;return(()=>{const i=Gl.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return Qa(l=>a=l,o),C(i,E(Ml,{onSettingsClick:()=>r(!0)}),s),C(s,E(Jr,{maxWidth:600,pt:16,get children(){return[E(xl,{get isDisabled(){return e()},pb:32,pt:32}),E(po,{onComplete:()=>{a.play(),qi()},onStart:()=>t(!0),onStop:()=>t(!1)})]}})),C(i,E(Pl,{closeIconLabel:"close settings menu",get heading(){return E(Ft,{level:2,shouldAutoFocus:!0,children:"Settings"})},get isOpen(){return n()},onClose:()=>r(!1),get children(){return E(Yl,{dataTestId:"appSettings",get isDurationEditingDisabled(){return e()}})}}),null),$(()=>_e(o,"src",Ul.alarm1)),i})()};Va(()=>E(Xl,{}),document.getElementById("root"));
