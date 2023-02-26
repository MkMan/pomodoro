(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const R={};function La(e){R.context=e}const Ma=(e,t)=>e===t,K=Symbol("solid-proxy"),Bn=Symbol("solid-track"),pt={equals:Ma};let _r=Dr;const ge=1,yt=2,Ir={owned:null,cleanups:null,context:null,owner:null};var Y=null;let be=null,L=null,H=null,ne=null,wn=0;function Tr(e,t){const n=L,r=Y,a=e.length===0,i=a?Ir:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=a?e:()=>e(()=>Ne(()=>Nt(i)));Y=i,L=null;try{return _e(o,!0)}finally{L=n,Y=r}}function te(e,t){t=t?Object.assign({},pt,t):pt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=a=>(typeof a=="function"&&(a=a(n.value)),Rr(n,a));return[Mr.bind(n),r]}function O(e,t,n){const r=kn(e,t,!1,ge);Je(r)}function Ae(e,t,n){_r=Fa;const r=kn(e,t,!1,ge);r.user=!0,ne?ne.push(r):Je(r)}function U(e,t,n){n=n?Object.assign({},pt,n):pt;const r=kn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Je(r),Mr.bind(r)}function Ra(e){return _e(e,!1)}function Ne(e){if(L===null)return e();const t=L;L=null;try{return e()}finally{L=t}}function Yn(e){return Y===null||(Y.cleanups===null?Y.cleanups=[e]:Y.cleanups.push(e)),e}function Lr(){return L}function Mr(){const e=be;if(this.sources&&(this.state||e))if(this.state===ge||e)Je(this);else{const t=H;H=null,_e(()=>kt(this),!1),H=t}if(L){const t=this.observers?this.observers.length:0;L.sources?(L.sources.push(this),L.sourceSlots.push(t)):(L.sources=[this],L.sourceSlots=[t]),this.observers?(this.observers.push(L),this.observerSlots.push(L.sources.length-1)):(this.observers=[L],this.observerSlots=[L.sources.length-1])}return this.value}function Rr(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&_e(()=>{for(let a=0;a<e.observers.length;a+=1){const i=e.observers[a],o=be&&be.running;o&&be.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?H.push(i):ne.push(i),i.observers&&zr(i)),o||(i.state=ge)}if(H.length>1e6)throw H=[],new Error},!1)),t}function Je(e){if(!e.fn)return;Nt(e);const t=Y,n=L,r=wn;L=Y=e,Da(e,e.value,r),L=n,Y=t}function Da(e,t,n){let r;try{r=e.fn(t)}catch(a){e.pure&&(e.state=ge,e.owned&&e.owned.forEach(Nt),e.owned=null),Fr(a)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Rr(e,r):e.value=r,e.updatedAt=n)}function kn(e,t,n,r=ge,a){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Y,context:null,pure:n};return Y===null||Y!==Ir&&(Y.owned?Y.owned.push(i):Y.owned=[i]),i}function wt(e){const t=be;if(e.state===0||t)return;if(e.state===yt||t)return kt(e);if(e.suspense&&Ne(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<wn);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===ge||t)Je(e);else if(e.state===yt||t){const a=H;H=null,_e(()=>kt(e,n[0]),!1),H=a}}function _e(e,t){if(H)return e();let n=!1;t||(H=[]),ne?n=!0:ne=[],wn++;try{const r=e();return za(n),r}catch(r){n||(ne=null),H=null,Fr(r)}}function za(e){if(H&&(Dr(H),H=null),e)return;const t=ne;ne=null,t.length&&_e(()=>_r(t),!1)}function Dr(e){for(let t=0;t<e.length;t++)wt(e[t])}function Fa(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:wt(r)}for(R.context&&La(),t=0;t<n;t++)wt(e[t])}function kt(e,t){const n=be;e.state=0;for(let r=0;r<e.sources.length;r+=1){const a=e.sources[r];a.sources&&(a.state===ge||n?a!==t&&wt(a):(a.state===yt||n)&&kt(a,t))}}function zr(e){const t=be;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=yt,r.pure?H.push(r):ne.push(r),r.observers&&zr(r))}}function Nt(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),a=n.observers;if(a&&a.length){const i=a.pop(),o=n.observerSlots.pop();r<a.length&&(i.sourceSlots[o]=r,a[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Nt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ja(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Fr(e){throw e=ja(e),e}function A(e,t){return Ne(()=>e(t||{}))}function nt(){return!0}const Zt={get(e,t,n){return t===K?n:e.get(t)},has(e,t){return t===K?!0:e.has(t)},set:nt,deleteProperty:nt,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:nt,deleteProperty:nt}},ownKeys(e){return e.keys()}};function Ht(e){return(e=typeof e=="function"?e():e)?e:{}}function re(...e){let t=!1;for(let r=0;r<e.length;r++){const a=e[r];t=t||!!a&&K in a,e[r]=typeof a=="function"?(t=!0,U(a)):a}if(t)return new Proxy({get(r){for(let a=e.length-1;a>=0;a--){const i=Ht(e[a])[r];if(i!==void 0)return i}},has(r){for(let a=e.length-1;a>=0;a--)if(r in Ht(e[a]))return!0;return!1},keys(){const r=[];for(let a=0;a<e.length;a++)r.push(...Object.keys(Ht(e[a])));return[...new Set(r)]}},Zt);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const a=Object.getOwnPropertyDescriptors(e[r]);for(const i in a)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const s=(e[o]||{})[i];if(s!==void 0)return s}}})}return n}function _t(e,...t){const n=new Set(t.flat());if(K in e){const a=t.map(i=>new Proxy({get(o){return i.includes(o)?e[o]:void 0},has(o){return i.includes(o)&&o in e},keys(){return i.filter(o=>o in e)}},Zt));return a.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Zt)),a}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(a=>!n.has(a))),t.map(a=>{const i={};for(let o=0;o<a.length;o++){const s=a[o];s in e&&Object.defineProperty(i,s,r[s]?r[s]:{get(){return e[s]},set(){return!0},enumerable:!0})}return i})}function jr(e){let t=!1;const n=e.keyed,r=U(()=>e.when,void 0,{equals:(a,i)=>t?a===i:!a==!i});return U(()=>{const a=r();if(a){const i=e.children,o=typeof i=="function"&&i.length>0;return t=n||o,o?Ne(()=>i(a)):i}return e.fallback},void 0,void 0)}const Wa=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ba=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Wa]),Ya=new Set(["innerHTML","textContent","innerText","children"]),Ha=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Hn=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Ua=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ga=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Xa={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Va(e,t,n){let r=n.length,a=t.length,i=r,o=0,s=0,l=t[a-1].nextSibling,f=null;for(;o<a||s<i;){if(t[o]===n[s]){o++,s++;continue}for(;t[a-1]===n[i-1];)a--,i--;if(a===o){const c=i<r?s?n[s-1].nextSibling:n[i-s]:l;for(;s<i;)e.insertBefore(n[s++],c)}else if(i===s)for(;o<a;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[s]===t[a-1]){const c=t[--a].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[a]=n[i]}else{if(!f){f=new Map;let u=s;for(;u<i;)f.set(n[u],u++)}const c=f.get(t[o]);if(c!=null)if(s<c&&c<i){let u=o,g=1,v;for(;++u<a&&u<i&&!((v=f.get(t[u]))==null||v!==c+g);)g++;if(g>c-s){const h=t[o];for(;s<c;)e.insertBefore(n[s++],h)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const Un="_$DX_DELEGATE";function qa(e,t,n,r={}){let a;return Tr(i=>{a=i,t===document?e():E(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{a(),t.textContent=""}}function z(e,t,n){const r=document.createElement("template");r.innerHTML=e;let a=r.content.firstChild;return n&&(a=a.firstChild),a}function It(e,t=window.document){const n=t[Un]||(t[Un]=new Set);for(let r=0,a=e.length;r<a;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,ri))}}function Ie(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ka(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function I(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ja(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const a=n[0];e.addEventListener(t,n[0]=i=>a.call(e,n[1],i))}else e.addEventListener(t,n)}function Qa(e,t,n={}){const r=Object.keys(t||{}),a=Object.keys(n);let i,o;for(i=0,o=a.length;i<o;i++){const s=a[i];!s||s==="undefined"||t[s]||(Gn(e,s,!1),delete n[s])}for(i=0,o=r.length;i<o;i++){const s=r[i],l=!!t[s];!s||s==="undefined"||n[s]===l||!l||(Gn(e,s,!0),n[s]=l)}return n}function Za(e,t,n){if(!t)return n?Ie(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let a,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)a=t[i],a!==n[i]&&(r.setProperty(i,a),n[i]=a);return n}function xn(e,t={},n,r){const a={};return r||O(()=>a.children=Ee(e,t.children,a.children)),O(()=>t.ref&&t.ref(e)),O(()=>ei(e,t,n,!0,a,!0)),a}function xt(e,t,n){return Ne(()=>e(t,n))}function E(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Ee(e,t,r,n);O(a=>Ee(e,t(),a,n),r)}function ei(e,t,n,r,a={},i=!1){t||(t={});for(const o in a)if(!(o in t)){if(o==="children")continue;a[o]=Xn(e,o,null,a[o],n,i)}for(const o in t){if(o==="children"){r||Ee(e,t.children);continue}const s=t[o];a[o]=Xn(e,o,s,a[o],n,i)}}function ti(e){let t,n;return!R.context||!(t=R.registry.get(n=ai()))?e.cloneNode(!0):(R.completed&&R.completed.add(t),R.registry.delete(n),t)}function ni(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Gn(e,t,n){const r=t.trim().split(/\s+/);for(let a=0,i=r.length;a<i;a++)e.classList.toggle(r[a],n)}function Xn(e,t,n,r,a,i){let o,s,l;if(t==="style")return Za(e,n,r);if(t==="classList")return Qa(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),c=Ua.has(f);if(!c&&r){const u=Array.isArray(r)?r[0]:r;e.removeEventListener(f,u)}(c||n)&&(Ja(e,f,n,c),c&&It([f]))}else if((l=Ya.has(t))||!a&&(Hn[t]||(s=Ba.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?I(e,n):o&&!s&&!l?e[ni(t)]=n:e[Hn[t]||t]=n;else{const f=a&&t.indexOf(":")>-1&&Xa[t.split(":")[0]];f?Ka(e,f,t,n):Ie(e,Ha[t]||t,n)}return n}function ri(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),R.registry&&!R.done&&(R.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let a=r.nextSibling;r.remove(),r=a}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const a=n[`${t}Data`];if(a!==void 0?r.call(n,a,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Ee(e,t,n,r,a){for(R.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(R.context)return n;if(i==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=we(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(R.context)return n;n=we(e,n,r)}else{if(i==="function")return O(()=>{let s=t();for(;typeof s=="function";)s=s();n=Ee(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],l=n&&Array.isArray(n);if(en(s,t,n,a))return O(()=>n=Ee(e,s,n,r,!0)),()=>n;if(R.context){if(!s.length)return n;for(let f=0;f<s.length;f++)if(s[f].parentNode)return n=s}if(s.length===0){if(n=we(e,n,r),o)return n}else l?n.length===0?Vn(e,s,r):Va(e,n,s):(n&&we(e),Vn(e,s));n=s}else if(t instanceof Node){if(R.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=we(e,n,r,t);we(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function en(e,t,n,r){let a=!1;for(let i=0,o=t.length;i<o;i++){let s=t[i],l=n&&n[i];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))a=en(e,s,l)||a;else if(typeof s=="function")if(r){for(;typeof s=="function";)s=s();a=en(e,Array.isArray(s)?s:[s],Array.isArray(l)?l:[l])||a}else e.push(s),a=!0;else{const f=String(s);l&&l.nodeType===3&&l.data===f?e.push(l):e.push(document.createTextNode(f))}}return a}function Vn(e,t,n=null){for(let r=0,a=t.length;r<a;r++)e.insertBefore(t[r],n)}function we(e,t,n,r){if(n===void 0)return e.textContent="";const a=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(a!==s){const l=s.parentNode===e;!i&&!o?l?e.replaceChild(a,s):e.insertBefore(a,n):l&&s.remove()}else i=!0}}else e.insertBefore(a,n);return[a]}function ai(){const e=R.context;return`${e.id}${e.count++}`}const ii="http://www.w3.org/2000/svg";function Wr(e,t=!1){return t?document.createElementNS(ii,e):document.createElement(e)}function oi(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function a(){if(R.context){const[i,o]=te(!1);return queueMicrotask(()=>o(!0)),()=>i()&&e.children}else return()=>e.children}if(r instanceof HTMLHeadElement){const[i,o]=te(!1),s=()=>o(!0);Tr(l=>E(r,()=>i()?l():a()(),null)),Yn(()=>{R.context?queueMicrotask(s):s()})}else{const i=Wr(e.isSVG?"g":"div",e.isSVG),o=t&&i.attachShadow?i.attachShadow({mode:"open"}):i;Object.defineProperty(i,"_$host",{get(){return n.parentNode},configurable:!0}),E(o,a()),r.appendChild(i),e.ref&&e.ref(i),Yn(()=>r.removeChild(i))}return n}function si(e){const[t,n]=_t(e,["component"]),r=U(()=>t.component);return U(()=>{const a=r();switch(typeof a){case"function":return Ne(()=>a(n));case"string":const i=Ga.has(a),o=R.context?ti():Wr(a,i);return xn(o,n,i),o}})}function qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qn(Object(n),!0).forEach(function(r){D(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function St(e){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St(e)}function li(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ci(e,t,n){return t&&Kn(e.prototype,t),n&&Kn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sn(e,t){return ui(e)||mi(e,t)||Br(e,t)||hi()}function Qe(e){return fi(e)||di(e)||Br(e)||gi()}function fi(e){if(Array.isArray(e))return tn(e)}function ui(e){if(Array.isArray(e))return e}function di(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Br(e,t){if(e){if(typeof e=="string")return tn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tn(e,t)}}function tn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Jn=function(){},Cn={},Yr={},Hr=null,Ur={mark:Jn,measure:Jn};try{typeof window<"u"&&(Cn=window),typeof document<"u"&&(Yr=document),typeof MutationObserver<"u"&&(Hr=MutationObserver),typeof performance<"u"&&(Ur=performance)}catch{}var vi=Cn.navigator||{},Qn=vi.userAgent,Zn=Qn===void 0?"":Qn,fe=Cn,N=Yr,er=Hr,rt=Ur;fe.document;var se=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",Gr=~Zn.indexOf("MSIE")||~Zn.indexOf("Trident/"),at,it,ot,st,lt,ae="___FONT_AWESOME___",nn=16,Xr="fa",Vr="svg-inline--fa",pe="data-fa-i2svg",rn="data-fa-pseudo-element",bi="data-fa-pseudo-element-pending",An="data-prefix",En="data-icon",tr="fontawesome-i2svg",pi="async",yi=["HTML","HEAD","STYLE","SCRIPT"],qr=function(){try{return!0}catch{return!1}}(),P="classic",_="sharp",On=[P,_];function Ze(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[P]}})}var je=Ze((at={},D(at,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),D(at,_,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),at)),We=Ze((it={},D(it,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),D(it,_,{solid:"fass",regular:"fasr"}),it)),Be=Ze((ot={},D(ot,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),D(ot,_,{fass:"fa-solid",fasr:"fa-regular"}),ot)),wi=Ze((st={},D(st,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),D(st,_,{"fa-solid":"fass","fa-regular":"fasr"}),st)),ki=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Kr="fa-layers-text",xi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Si=Ze((lt={},D(lt,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),D(lt,_,{900:"fass",400:"fasr"}),lt)),Jr=[1,2,3,4,5,6,7,8,9,10],Ci=Jr.concat([11,12,13,14,15,16,17,18,19,20]),Ai=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],he={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ye=new Set;Object.keys(We[P]).map(Ye.add.bind(Ye));Object.keys(We[_]).map(Ye.add.bind(Ye));var Ei=[].concat(On,Qe(Ye),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",he.GROUP,he.SWAP_OPACITY,he.PRIMARY,he.SECONDARY]).concat(Jr.map(function(e){return"".concat(e,"x")})).concat(Ci.map(function(e){return"w-".concat(e)})),ze=fe.FontAwesomeConfig||{};function Oi(e){var t=N.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $i(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(N&&typeof N.querySelector=="function"){var Pi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pi.forEach(function(e){var t=Sn(e,2),n=t[0],r=t[1],a=$i(Oi(n));a!=null&&(ze[r]=a)})}var Qr={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xr,replacementClass:Vr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ze.familyPrefix&&(ze.cssPrefix=ze.familyPrefix);var Oe=d(d({},Qr),ze);Oe.autoReplaceSvg||(Oe.observeMutations=!1);var m={};Object.keys(Qr).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(n){Oe[e]=n,Fe.forEach(function(r){return r(m)})},get:function(){return Oe[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){Oe.cssPrefix=t,Fe.forEach(function(n){return n(m)})},get:function(){return Oe.cssPrefix}});fe.FontAwesomeConfig=m;var Fe=[];function Ni(e){return Fe.push(e),function(){Fe.splice(Fe.indexOf(e),1)}}var ce=nn,Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _i(e){if(!(!e||!se)){var t=N.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=N.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return N.head.insertBefore(t,r),e}}var Ii="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function He(){for(var e=12,t="";e-- >0;)t+=Ii[Math.random()*62|0];return t}function Te(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function $n(e){return e.classList?Te(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Zr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ti(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Zr(e[n]),'" ')},"").trim()}function Tt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Pn(e){return e.size!==Z.size||e.x!==Z.x||e.y!==Z.y||e.rotate!==Z.rotate||e.flipX||e.flipY}function Li(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Mi(e){var t=e.transform,n=e.width,r=n===void 0?nn:n,a=e.height,i=a===void 0?nn:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Gr?l+="translate(".concat(t.x/ce-r/2,"em, ").concat(t.y/ce-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ce,"em), calc(-50% + ").concat(t.y/ce,"em)) "):l+="translate(".concat(t.x/ce,"em, ").concat(t.y/ce,"em) "),l+="scale(".concat(t.size/ce*(t.flipX?-1:1),", ").concat(t.size/ce*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ri=`:root, :host {
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
}`;function ea(){var e=Xr,t=Vr,n=m.cssPrefix,r=m.replacementClass,a=Ri;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var nr=!1;function Ut(){m.autoAddCss&&!nr&&(_i(ea()),nr=!0)}var Di={mixout:function(){return{dom:{css:ea,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},ie=fe||{};ie[ae]||(ie[ae]={});ie[ae].styles||(ie[ae].styles={});ie[ae].hooks||(ie[ae].hooks={});ie[ae].shims||(ie[ae].shims=[]);var q=ie[ae],ta=[],zi=function e(){N.removeEventListener("DOMContentLoaded",e),Ct=1,ta.map(function(t){return t()})},Ct=!1;se&&(Ct=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Ct||N.addEventListener("DOMContentLoaded",zi));function Fi(e){se&&(Ct?setTimeout(e,0):ta.push(e))}function et(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Zr(e):"<".concat(t," ").concat(Ti(r),">").concat(i.map(et).join(""),"</").concat(t,">")}function rr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ji=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Gt=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ji(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Wi(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function an(e){var t=Wi(e);return t.length===1?t[0].toString(16):null}function Bi(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ar(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function on(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ar(t);typeof q.hooks.addPack=="function"&&!a?q.hooks.addPack(e,ar(t)):q.styles[e]=d(d({},q.styles[e]||{}),i),e==="fas"&&on("fa",t)}var ct,ft,ut,ke=q.styles,Yi=q.shims,Hi=(ct={},D(ct,P,Object.values(Be[P])),D(ct,_,Object.values(Be[_])),ct),Nn=null,na={},ra={},aa={},ia={},oa={},Ui=(ft={},D(ft,P,Object.keys(je[P])),D(ft,_,Object.keys(je[_])),ft);function Gi(e){return~Ei.indexOf(e)}function Xi(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Gi(a)?a:null}var sa=function(){var t=function(i){return Gt(ke,function(o,s,l){return o[l]=Gt(s,i,{}),o},{})};na=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ra=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),oa=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ke||m.autoFetchSvg,r=Gt(Yi,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});aa=r.names,ia=r.unicodes,Nn=Lt(m.styleDefault,{family:m.familyDefault})};Ni(function(e){Nn=Lt(e.styleDefault,{family:m.familyDefault})});sa();function _n(e,t){return(na[e]||{})[t]}function Vi(e,t){return(ra[e]||{})[t]}function ve(e,t){return(oa[e]||{})[t]}function la(e){return aa[e]||{prefix:null,iconName:null}}function qi(e){var t=ia[e],n=_n("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ue(){return Nn}var In=function(){return{prefix:null,iconName:null,rest:[]}};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?P:n,a=je[r][e],i=We[r][e]||We[r][a],o=e in q.styles?e:null;return i||o||null}var ir=(ut={},D(ut,P,Object.keys(Be[P])),D(ut,_,Object.keys(Be[_])),ut);function Mt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},D(t,P,"".concat(m.cssPrefix,"-").concat(P)),D(t,_,"".concat(m.cssPrefix,"-").concat(_)),t),o=null,s=P;(e.includes(i[P])||e.some(function(f){return ir[P].includes(f)}))&&(s=P),(e.includes(i[_])||e.some(function(f){return ir[_].includes(f)}))&&(s=_);var l=e.reduce(function(f,c){var u=Xi(m.cssPrefix,c);if(ke[c]?(c=Hi[s].includes(c)?wi[s][c]:c,o=c,f.prefix=c):Ui[s].indexOf(c)>-1?(o=c,f.prefix=Lt(c,{family:s})):u?f.iconName=u:c!==m.replacementClass&&c!==i[P]&&c!==i[_]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var g=o==="fa"?la(f.iconName):{},v=ve(f.prefix,f.iconName);g.prefix&&(o=null),f.iconName=g.iconName||v||f.iconName,f.prefix=g.prefix||f.prefix,f.prefix==="far"&&!ke.far&&ke.fas&&!m.autoFetchSvg&&(f.prefix="fas")}return f},In());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===_&&(ke.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=ve(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ue()||"fas"),l}var Ki=function(){function e(){li(this,e),this.definitions={}}return ci(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),on(s,o[s]);var l=Be[P][s];l&&on(l,o[s]),sa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][l]=f}),n}}]),e}(),or=[],xe={},Se={},Ji=Object.keys(Se);function Qi(e,t){var n=t.mixoutsTo;return or=e,xe={},Object.keys(Se).forEach(function(r){Ji.indexOf(r)===-1&&delete Se[r]}),or.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),St(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xe[o]||(xe[o]=[]),xe[o].push(i[o])})}r.provides&&r.provides(Se)}),n}function sn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ye(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xe[e]||[];a.forEach(function(i){i.apply(null,n)})}function oe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Se[e]?Se[e].apply(null,t):void 0}function ln(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ue();if(t)return t=ve(n,t)||t,rr(ca.definitions,n,t)||rr(q.styles,n,t)}var ca=new Ki,Zi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,ye("noAuto")},eo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return se?(ye("beforeI2svg",t),oe("pseudoElements2svg",t),oe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Fi(function(){no({autoReplaceSvgRoot:n}),ye("watch",t)})}},to={icon:function(t){if(t===null)return null;if(St(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ve(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Lt(t[0]);return{prefix:r,iconName:ve(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(ki))){var a=Mt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ue(),iconName:ve(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ue();return{prefix:i,iconName:ve(i,t)||t}}}},V={noAuto:Zi,config:m,dom:eo,parse:to,library:ca,findIconDefinition:ln,toHtml:et},no=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?N:n;(Object.keys(q.styles).length>0||m.autoFetchSvg)&&se&&m.autoReplaceSvg&&V.dom.i2svg({node:r})};function Rt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return et(r)})}}),Object.defineProperty(e,"node",{get:function(){if(se){var r=N.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ro(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Pn(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Tt(d(d({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ao(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:o}),children:r}]}]}function Tn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,g=e.watchable,v=g===void 0?!1:g,h=r.found?r:n,b=h.width,w=h.height,p=a==="fak",y=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(le){return u.classes.indexOf(le)===-1}).filter(function(le){return le!==""||!!le}).concat(u.classes).join(" "),k={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(w)})},F=p&&!~u.classes.indexOf("fa-fw")?{width:"".concat(b/w*16*.0625,"em")}:{};v&&(k.attributes[pe]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||He())},children:[l]}),delete k.attributes.title);var T=d(d({},k),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:d(d({},F),u.styles)}),j=r.found&&n.found?oe("generateAbstractMask",T)||{children:[],attributes:{}}:oe("generateAbstractIcon",T)||{children:[],attributes:{}},x=j.children,Yt=j.attributes;return T.children=x,T.attributes=Yt,s?ao(T):ro(T)}function sr(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[pe]="");var c=d({},o.styles);Pn(a)&&(c.transform=Mi({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Tt(c);u.length>0&&(f.style=u);var g=[];return g.push({tag:"span",attributes:f,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function io(e){var t=e.content,n=e.title,r=e.extra,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xt=q.styles;function cn(e){var t=e[0],n=e[1],r=e.slice(4),a=Sn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(he.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(he.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(he.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var oo={found:!1,width:512,height:512};function so(e,t){!qr&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function fn(e,t){var n=t;return t==="fa"&&m.styleDefault!==null&&(t=ue()),new Promise(function(r,a){if(oe("missingIconAbstract"),n==="fa"){var i=la(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Xt[t]&&Xt[t][e]){var o=Xt[t][e];return r(cn(o))}so(e,t),r(d(d({},oo),{},{icon:m.showMissingIcons&&e?oe("missingIconAbstract")||{}:{}}))})}var lr=function(){},un=m.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:lr,measure:lr},Re='FA "6.3.0"',lo=function(t){return un.mark("".concat(Re," ").concat(t," begins")),function(){return fa(t)}},fa=function(t){un.mark("".concat(Re," ").concat(t," ends")),un.measure("".concat(Re," ").concat(t),"".concat(Re," ").concat(t," begins"),"".concat(Re," ").concat(t," ends"))},Ln={begin:lo,end:fa},mt=function(){};function cr(e){var t=e.getAttribute?e.getAttribute(pe):null;return typeof t=="string"}function co(e){var t=e.getAttribute?e.getAttribute(An):null,n=e.getAttribute?e.getAttribute(En):null;return t&&n}function fo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function uo(){if(m.autoReplaceSvg===!0)return gt.replace;var e=gt[m.autoReplaceSvg];return e||gt.replace}function mo(e){return N.createElementNS("http://www.w3.org/2000/svg",e)}function go(e){return N.createElement(e)}function ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?mo:go:n;if(typeof e=="string")return N.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ua(o,{ceFn:r}))}),a}function ho(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var gt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ua(a),n)}),n.getAttribute(pe)===null&&m.keepOriginalSource){var r=N.createComment(ho(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~$n(n).indexOf(m.replacementClass))return gt.replace(t);var a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return et(s)}).join(`
`);n.setAttribute(pe,""),n.innerHTML=o}};function fr(e){e()}function da(e,t){var n=typeof t=="function"?t:mt;if(e.length===0)n();else{var r=fr;m.mutateApproach===pi&&(r=fe.requestAnimationFrame||fr),r(function(){var a=uo(),i=Ln.begin("mutate");e.map(a),i(),n()})}}var Mn=!1;function ma(){Mn=!0}function dn(){Mn=!1}var At=null;function ur(e){if(er&&m.observeMutations){var t=e.treeCallback,n=t===void 0?mt:t,r=e.nodeCallback,a=r===void 0?mt:r,i=e.pseudoElementsCallback,o=i===void 0?mt:i,s=e.observeMutationsRoot,l=s===void 0?N:s;At=new er(function(f){if(!Mn){var c=ue();Te(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!cr(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&cr(u.target)&&~Ai.indexOf(u.attributeName))if(u.attributeName==="class"&&co(u.target)){var g=Mt($n(u.target)),v=g.prefix,h=g.iconName;u.target.setAttribute(An,v||c),h&&u.target.setAttribute(En,h)}else fo(u.target)&&a(u.target)})}}),se&&At.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vo(){At&&At.disconnect()}function bo(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function po(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mt($n(e));return a.prefix||(a.prefix=ue()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Vi(a.prefix,e.innerText)||_n(a.prefix,an(e.innerText))),!a.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function yo(e){var t=Te(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||He()):(t["aria-hidden"]="true",t.focusable="false")),t}function wo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=po(e),r=n.iconName,a=n.prefix,i=n.rest,o=yo(e),s=sn("parseNodeAttributes",{},e),l=t.styleParser?bo(e):[];return d({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ko=q.styles;function ga(e){var t=m.autoReplaceSvg==="nest"?dr(e,{styleParser:!1}):dr(e);return~t.extra.classes.indexOf(Kr)?oe("generateLayersText",e,t):oe("generateSvgReplacementMutation",e,t)}var de=new Set;On.map(function(e){de.add("fa-".concat(e))});Object.keys(je[P]).map(de.add.bind(de));Object.keys(je[_]).map(de.add.bind(de));de=Qe(de);function mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!se)return Promise.resolve();var n=N.documentElement.classList,r=function(u){return n.add("".concat(tr,"-").concat(u))},a=function(u){return n.remove("".concat(tr,"-").concat(u))},i=m.autoFetchSvg?de:On.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ko));i.includes("fa")||i.push("fa");var o=[".".concat(Kr,":not([").concat(pe,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(pe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Te(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ln.begin("onTree"),f=s.reduce(function(c,u){try{var g=ga(u);g&&c.push(g)}catch(v){qr||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(g){da(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(g){l(),u(g)})})}function xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ga(e).then(function(n){n&&da([n],t)})}function So(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ln(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ln(a||{})),e(r,d(d({},n),{},{mask:a}))}}var Co=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Z:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,u=n.title,g=u===void 0?null:u,v=n.titleId,h=v===void 0?null:v,b=n.classes,w=b===void 0?[]:b,p=n.attributes,y=p===void 0?{}:p,k=n.styles,F=k===void 0?{}:k;if(t){var T=t.prefix,j=t.iconName,x=t.icon;return Rt(d({type:"icon"},t),function(){return ye("beforeDOMElementCreation",{iconDefinition:t,params:n}),m.autoA11y&&(g?y["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(h||He()):(y["aria-hidden"]="true",y.focusable="false")),Tn({icons:{main:cn(x),mask:l?cn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:j,transform:d(d({},Z),a),symbol:o,title:g,maskId:c,titleId:h,extra:{attributes:y,styles:F,classes:w}})})}},Ao={mixout:function(){return{icon:So(Co)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mr,n.nodeCallback=xo,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?N:r,i=n.callback,o=i===void 0?function(){}:i;return mr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,g=r.extra;return new Promise(function(v,h){Promise.all([fn(a,s),c.iconName?fn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var w=Sn(b,2),p=w[0],y=w[1];v([n,Tn({icons:{main:p,mask:y},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:o,extra:g,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Tt(s);l.length>0&&(a.style=l);var f;return Pn(o)&&(f=oe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Eo={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Rt({type:"layer"},function(){ye("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(Qe(i)).join(" ")},children:o}]})}}}},Oo={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return Rt({type:"counter",content:n},function(){return ye("beforeDOMElementCreation",{content:n,params:r}),io({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(Qe(s))}})})}}}},$o={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Z:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,g=r.styles,v=g===void 0?{}:g;return Rt({type:"text",content:n},function(){return ye("beforeDOMElementCreation",{content:n,params:r}),sr({content:n,transform:d(d({},Z),i),title:s,extra:{attributes:u,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(Qe(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Gr){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,sr({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Po=new RegExp('"',"ug"),gr=[1105920,1112319];function No(e){var t=e.replace(Po,""),n=Bi(t,0),r=n>=gr[0]&&n<=gr[1],a=t.length===2?t[0]===t[1]:!1;return{value:an(a?t[0]:t),isSecondary:r||a}}function hr(e,t){var n="".concat(bi).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Te(e.children),o=i.filter(function(x){return x.getAttribute(rn)===t})[0],s=fe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(xi),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?_:P,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?We[g][l[2].toLowerCase()]:Si[g][f],h=No(u),b=h.value,w=h.isSecondary,p=l[0].startsWith("FontAwesome"),y=_n(v,b),k=y;if(p){var F=qi(b);F.iconName&&F.prefix&&(y=F.iconName,v=F.prefix)}if(y&&!w&&(!o||o.getAttribute(An)!==v||o.getAttribute(En)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var T=wo(),j=T.extra;j.attributes[rn]=t,fn(y,v).then(function(x){var Yt=Tn(d(d({},T),{},{icons:{main:x,mask:In()},prefix:v,iconName:k,extra:j,watchable:!0})),le=N.createElement("svg");t==="::before"?e.insertBefore(le,e.firstChild):e.appendChild(le),le.outerHTML=Yt.map(function(Ta){return et(Ta)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function _o(e){return Promise.all([hr(e,"::before"),hr(e,"::after")])}function Io(e){return e.parentNode!==document.head&&!~yi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(rn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function vr(e){if(se)return new Promise(function(t,n){var r=Te(e.querySelectorAll("*")).filter(Io).map(_o),a=Ln.begin("searchPseudoElements");ma(),Promise.all(r).then(function(){a(),dn(),t()}).catch(function(){a(),dn(),n()})})}var To={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=vr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?N:r;m.searchPseudoElements&&vr(a)}}},br=!1,Lo={mixout:function(){return{dom:{unwatch:function(){ma(),br=!0}}}},hooks:function(){return{bootstrap:function(){ur(sn("mutationObserverCallbacks",{}))},noAuto:function(){vo()},watch:function(n){var r=n.observeMutationsRoot;br?dn():ur(sn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},pr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Mo={mixout:function(){return{parse:{transform:function(n){return pr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=pr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},g={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:u,path:g};return{tag:"g",attributes:d({},v.outer),children:[{tag:"g",attributes:d({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:d(d({},r.icon.attributes),v.path)}]}]}}}},Vt={x:0,y:0,width:"100%",height:"100%"};function yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ro(e){return e.tag==="g"?e.children:[e]}var Do={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mt(a.split(" ").map(function(o){return o.trim()})):In();return i.prefix||(i.prefix=ue()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,u=o.width,g=o.icon,v=Li({transform:l,containerWidth:u,iconWidth:f}),h={tag:"rect",attributes:d(d({},Vt),{},{fill:"white"})},b=c.children?{children:c.children.map(yr)}:{},w={tag:"g",attributes:d({},v.inner),children:[yr(d({tag:c.tag,attributes:d(d({},c.attributes),v.path)},b))]},p={tag:"g",attributes:d({},v.outer),children:[w]},y="mask-".concat(s||He()),k="clip-".concat(s||He()),F={tag:"mask",attributes:d(d({},Vt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,p]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Ro(g)},F]};return r.push(T,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(y,")")},Vt)}),{children:r,attributes:a}}}},zo={provides:function(t){var n=!1;fe.matchMedia&&(n=fe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:d(d({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:d(d({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:d(d({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Fo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},jo=[Di,Ao,Eo,Oo,$o,To,Lo,Mo,Do,zo,Fo];Qi(jo,{mixoutsTo:V});V.noAuto;V.config;var Wo=V.library;V.dom;V.parse;V.findIconDefinition;V.toHtml;var Bo=V.icon;V.layer;V.text;V.counter;var Yo={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Ho={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Uo={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},Go=Uo,Xo={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};const me=(...e)=>e.filter(Boolean).join(" ");function Vo(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function qo(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ko=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(qo(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Vo(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),B="-ms-",Et="-moz-",S="-webkit-",ha="comm",Rn="rule",Dn="decl",Jo="@import",va="@keyframes",Qo=Math.abs,Dt=String.fromCharCode,Zo=Object.assign;function es(e,t){return W(e,0)^45?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}function ba(e){return e.trim()}function ts(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,n){return e.replace(t,n)}function mn(e,t){return e.indexOf(t)}function W(e,t){return e.charCodeAt(t)|0}function Ue(e,t,n){return e.slice(t,n)}function J(e){return e.length}function zn(e){return e.length}function dt(e,t){return t.push(e),e}function ns(e,t){return e.map(t).join("")}var zt=1,$e=1,pa=0,G=0,M=0,Le="";function Ft(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:zt,column:$e,length:o,return:""}}function Me(e,t){return Zo(Ft("",null,null,"",null,null,0),e,{length:-e.length},t)}function rs(){return M}function as(){return M=G>0?W(Le,--G):0,$e--,M===10&&($e=1,zt--),M}function X(){return M=G<pa?W(Le,G++):0,$e++,M===10&&($e=1,zt++),M}function ee(){return W(Le,G)}function ht(){return G}function tt(e,t){return Ue(Le,e,t)}function Ge(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ya(e){return zt=$e=1,pa=J(Le=e),G=0,[]}function wa(e){return Le="",e}function vt(e){return ba(tt(G-1,gn(e===91?e+2:e===40?e+1:e)))}function is(e){for(;(M=ee())&&M<33;)X();return Ge(e)>2||Ge(M)>3?"":" "}function os(e,t){for(;--t&&X()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return tt(e,ht()+(t<6&&ee()==32&&X()==32))}function gn(e){for(;X();)switch(M){case e:return G;case 34:case 39:e!==34&&e!==39&&gn(M);break;case 40:e===41&&gn(e);break;case 92:X();break}return G}function ss(e,t){for(;X()&&e+M!==47+10;)if(e+M===42+42&&ee()===47)break;return"/*"+tt(t,G-1)+"*"+Dt(e===47?e:X())}function ls(e){for(;!Ge(ee());)X();return tt(e,G)}function cs(e){return wa(bt("",null,null,null,[""],e=ya(e),0,[0],e))}function bt(e,t,n,r,a,i,o,s,l){for(var f=0,c=0,u=o,g=0,v=0,h=0,b=1,w=1,p=1,y=0,k="",F=a,T=i,j=r,x=k;w;)switch(h=y,y=X()){case 40:if(h!=108&&W(x,u-1)==58){mn(x+=C(vt(y),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:x+=vt(y);break;case 9:case 10:case 13:case 32:x+=is(h);break;case 92:x+=os(ht()-1,7);continue;case 47:switch(ee()){case 42:case 47:dt(fs(ss(X(),ht()),t,n),l);break;default:x+="/"}break;case 123*b:s[f++]=J(x)*p;case 125*b:case 59:case 0:switch(y){case 0:case 125:w=0;case 59+c:v>0&&J(x)-u&&dt(v>32?kr(x+";",r,n,u-1):kr(C(x," ","")+";",r,n,u-2),l);break;case 59:x+=";";default:if(dt(j=wr(x,t,n,f,c,a,s,k,F=[],T=[],u),i),y===123)if(c===0)bt(x,t,j,j,F,i,u,s,T);else switch(g===99&&W(x,3)===110?100:g){case 100:case 109:case 115:bt(e,j,j,r&&dt(wr(e,j,j,0,0,a,s,k,a,F=[],u),T),a,T,u,s,r?F:T);break;default:bt(x,j,j,j,[""],T,0,s,T)}}f=c=v=0,b=p=1,k=x="",u=o;break;case 58:u=1+J(x),v=h;default:if(b<1){if(y==123)--b;else if(y==125&&b++==0&&as()==125)continue}switch(x+=Dt(y),y*b){case 38:p=c>0?1:(x+="\f",-1);break;case 44:s[f++]=(J(x)-1)*p,p=1;break;case 64:ee()===45&&(x+=vt(X())),g=ee(),c=u=J(k=x+=ls(ht())),y++;break;case 45:h===45&&J(x)==2&&(b=0)}}return i}function wr(e,t,n,r,a,i,o,s,l,f,c){for(var u=a-1,g=a===0?i:[""],v=zn(g),h=0,b=0,w=0;h<r;++h)for(var p=0,y=Ue(e,u+1,u=Qo(b=o[h])),k=e;p<v;++p)(k=ba(b>0?g[p]+" "+y:C(y,/&\f/g,g[p])))&&(l[w++]=k);return Ft(e,t,n,a===0?Rn:s,l,f,c)}function fs(e,t,n){return Ft(e,t,n,ha,Dt(rs()),Ue(e,2,-2),0)}function kr(e,t,n,r){return Ft(e,t,n,Dn,Ue(e,0,r),Ue(e,r+1,-1),r)}function Ce(e,t){for(var n="",r=zn(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function us(e,t,n,r){switch(e.type){case Jo:case Dn:return e.return=e.return||e.value;case ha:return"";case va:return e.return=e.value+"{"+Ce(e.children,r)+"}";case Rn:e.value=e.props.join(",")}return J(n=Ce(e.children,r))?e.return=e.value+"{"+n+"}":""}function ds(e){var t=zn(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function ms(e){return function(t){t.root||(t=t.return)&&e(t)}}function gs(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var hs=function(t,n,r){for(var a=0,i=0;a=i,i=ee(),a===38&&i===12&&(n[r]=1),!Ge(i);)X();return tt(t,G)},vs=function(t,n){var r=-1,a=44;do switch(Ge(a)){case 0:a===38&&ee()===12&&(n[r]=1),t[r]+=hs(G-1,n,r);break;case 2:t[r]+=vt(a);break;case 4:if(a===44){t[++r]=ee()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Dt(a)}while(a=X());return t},bs=function(t,n){return wa(vs(ya(t),n))},xr=new WeakMap,ps=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!xr.get(r))&&!a){xr.set(t,!0);for(var i=[],o=bs(n,i),s=r.props,l=0,f=0;l<o.length;l++)for(var c=0;c<s.length;c++,f++)t.props[f]=i[l]?o[l].replace(/&\f/g,s[c]):s[c]+" "+o[l]}}},ys=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ka(e,t){switch(es(e,t)){case 5103:return S+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return S+e+Et+e+B+e+e;case 6828:case 4268:return S+e+B+e+e;case 6165:return S+e+B+"flex-"+e+e;case 5187:return S+e+C(e,/(\w+).+(:[^]+)/,S+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return S+e+B+"flex-item-"+C(e,/flex-|-self/,"")+e;case 4675:return S+e+B+"flex-line-pack"+C(e,/align-content|flex-|-self/,"")+e;case 5548:return S+e+B+C(e,"shrink","negative")+e;case 5292:return S+e+B+C(e,"basis","preferred-size")+e;case 6060:return S+"box-"+C(e,"-grow","")+S+e+B+C(e,"grow","positive")+e;case 4554:return S+C(e,/([^-])(transform)/g,"$1"+S+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+e+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,S+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(J(e)-1-t>6)switch(W(e,t+1)){case 109:if(W(e,t+4)!==45)break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+Et+(W(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~mn(e,"stretch")?ka(C(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(W(e,t+1)!==115)break;case 6444:switch(W(e,J(e)-3-(~mn(e,"!important")&&10))){case 107:return C(e,":",":"+S)+e;case 101:return C(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(W(e,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+B+"$2box$3")+e}break;case 5936:switch(W(e,t+11)){case 114:return S+e+B+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return S+e+B+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return S+e+B+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return S+e+B+e+e}return e}var ws=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case Dn:t.return=ka(t.value,t.length);break;case va:return Ce([Me(t,{value:C(t.value,"@","@"+S)})],a);case Rn:if(t.length)return ns(t.props,function(i){switch(ts(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ce([Me(t,{props:[C(i,/:(read-\w+)/,":"+Et+"$1")]})],a);case"::placeholder":return Ce([Me(t,{props:[C(i,/:(plac\w+)/,":"+S+"input-$1")]}),Me(t,{props:[C(i,/:(plac\w+)/,":"+Et+"$1")]}),Me(t,{props:[C(i,/:(plac\w+)/,B+"input-$1")]})],a)}return""})}},ks=[ws],xs=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(b){var w=b.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var a=t.stylisPlugins||ks,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var w=b.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)i[w[p]]=!0;s.push(b)});var l,f=[ps,ys];{var c,u=[us,ms(function(b){c.insert(b)})],g=ds(f.concat(a,u)),v=function(w){return Ce(cs(w),g)};l=function(w,p,y,k){c=y,v(w?w+"{"+p.styles+"}":p.styles),k&&(h.inserted[p.name]=!0)}}var h={key:n,sheet:new Ko({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return h.sheet.hydrate(s),h};function Ss(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Cs={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},As=/[A-Z]|^ms/g,Es=/_EMO_([^_]+?)_([^]*?)_EMO_/g,xa=function(t){return t.charCodeAt(1)===45},Sr=function(t){return t!=null&&typeof t!="boolean"},qt=gs(function(e){return xa(e)?e:e.replace(As,"-$&").toLowerCase()}),Cr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Es,function(r,a,i){return Q={name:a,styles:i,next:Q},a})}return Cs[t]!==1&&!xa(t)&&typeof n=="number"&&n!==0?n+"px":n};function Xe(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Q={name:n.name,styles:n.styles,next:Q},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Q={name:r.name,styles:r.styles,next:Q},r=r.next;var a=n.styles+";";return a}return Os(e,t,n)}case"function":{if(e!==void 0){var i=Q,o=n(e);return Q=i,Xe(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Os(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Xe(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Sr(o)&&(r+=qt(i)+":"+Cr(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Sr(o[s])&&(r+=qt(i)+":"+Cr(i,o[s])+";");else{var l=Xe(e,t,o);switch(i){case"animation":case"animationName":{r+=qt(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var Ar=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Q,Kt=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";Q=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Xe(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Xe(r,n,t[s]),a&&(i+=o[s]);Ar.lastIndex=0;for(var l="",f;(f=Ar.exec(i))!==null;)l+="-"+f[1];var c=Ss(i)+l;return{name:c,styles:i,next:Q}},$s=!0;function Sa(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var Ps=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||$s===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Ns=function(t,n,r){Ps(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Er(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function Or(e,t,n){var r=[],a=Sa(e,r,n);return r.length<2?n:a+t(r)}var _s=function(t){var n=xs(t);n.sheet.speedy=function(s){this.isSpeedy=s},n.compat=!0;var r=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=Kt(f,n.registered,void 0);return Ns(n,u,!1),n.key+"-"+u.name},a=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=Kt(f,n.registered),g="animation-"+u.name;return Er(n,{name:u.name,styles:"@keyframes "+g+"{"+u.styles+"}"}),g},i=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=Kt(f,n.registered);Er(n,u)},o=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];return Or(n.registered,r,Is(f))};return{css:r,cx:o,injectGlobal:i,keyframes:a,hydrate:function(l){l.forEach(function(f){n.inserted[f]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:Sa.bind(null,n.registered),merge:Or.bind(null,n.registered,r)}},Is=function e(t){for(var n="",r=0;r<t.length;r++){var a=t[r];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))i=e(a);else{i="";for(var o in a)a[o]&&o&&(i&&(i+=" "),i+=o)}break}default:i=a}i&&(n&&(n+=" "),n+=i)}}return n},Ts=_s({key:"css"}),$=Ts.css;const jt=e=>n=>{const[r,a]=_t(n,["className","m","mb","ml","mr","mt","p","pb","pl","pr","pt"]);return A(e,re(a,{get className(){return me($({margin:r.m,marginBlockEnd:r.mb,marginInlineStart:r.ml,marginInlineEnd:r.mr,marginBlockStart:r.mt,padding:r.p,paddingBlockEnd:r.pb,paddingInlineStart:r.pl,paddingInlineEnd:r.pr,paddingBlockStart:r.pt}),r.className)}}))},Ls=$({width:"var(--size)",height:"var(--size)",display:"flex",justifyContent:"center","& svg":{height:"100%",color:"inherit"}}),Ms=z("<span></span>"),Rs=[Yo,Ho,Go,Xo];Wo.add(...Rs);const Ca=e=>(()=>{const t=Ms.cloneNode(!0);return O(n=>{var o;const r=me(Ls,e.class),a=(o=Bo({prefix:"fas",iconName:e.iconName}))==null?void 0:o.html,i=`${e.size??20}px`;return r!==n._v$&&I(t,n._v$=r),a!==n._v$2&&(t.innerHTML=n._v$2=a),i!==n._v$3&&t.style.setProperty("--size",n._v$3=i),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),Ds=$({color:"#868e96",padding:3,border:"none",backgroundColor:"transparent",cursor:"pointer",width:"var(--size)",height:"var(--size)",borderRadius:2,transition:"background-color 200ms ease",":hover":{backgroundColor:"#ecedf0"},"> *":{width:"100%",height:"100%"}}),zs=z("<button></button>"),Wt=e=>{const[t,n]=_t(e,["onClick","size","iconName"]);return(()=>{const r=zs.cloneNode(!0);return r.$$click=a=>{var i;return(i=t.onClick)==null?void 0:i.call(t,a)},xn(r,re({get class(){return Ds},get style(){return{"--size":`${t.size}px`}}},n),!1,!0),E(r,A(Ca,{get iconName(){return t.iconName},get size(){return t.size}})),r})()};It(["click"]);const Fs=z("<div></div>"),js=e=>(()=>{const t=Fs.cloneNode(!0);return E(t,()=>e.children),O(()=>I(t,me($({height:e.height,maxWidth:e.maxWidth,marginInline:"auto",paddingInline:16}),e.className))),t})(),Aa=jt(js),Ws=$({position:"fixed",top:0,right:0,bottom:0,left:0,width:"100%",zIndex:1,opacity:0,transition:"opacity 300ms",willChange:"opacity",backgroundColor:"#000",userSelect:"none","&.isOpen":{opacity:.7}}),Bs=$({position:"fixed",top:0,left:0,bottom:0,height:"100%",width:"100%",maxWidth:"500px",zIndex:2,overflow:"auto",transition:"transform 200ms",willChange:"transform",backgroundColor:"#fff",display:"flex",flexDirection:"column",transform:"translate3d(-103%, 0, 0)",boxShadow:"6px 0px 16px 2px #777","&.isOpen":{transform:"translate3d(0%, 0, 0)"}}),Ys=$({padding:16,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #ddd"}),Hs=$({position:"relative",overflowX:"hidden",overflowY:"auto",height:"100%",flex:"1",padding:16}),Us=z("<div></div>"),Gs=z('<div aria-labelledby="drawer-header" role="dialog"><header id="drawer-header"><div></div></header><div></div></div>'),hn="drawer-container-id";if(!document.getElementById(hn)){const e=document.createElement("div");e.setAttribute("id",hn),document.body.appendChild(e)}const Xs=e=>{const[t,n]=te(!1);let r,a;return Ae(()=>{e.isOpen&&n(!0),!e.isOpen&&t()&&setTimeout(()=>{n(!1)},300)}),Ae(()=>{e.isOpen?setTimeout(()=>{r==null||r.classList.add("isOpen"),a==null||a.classList.add("isOpen")},0):(r==null||r.classList.remove("isOpen"),a==null||a.classList.remove("isOpen"))}),A(oi,{get mount(){return document.getElementById(hn)},get children(){return A(jr,{get when(){return t()},get children(){return[(()=>{const i=Us.cloneNode(!0),o=r;return typeof o=="function"?xt(o,i):r=i,i.$$click=()=>e.onClose(),O(()=>I(i,me(Ws))),i})(),(()=>{const i=Gs.cloneNode(!0),o=i.firstChild,s=o.firstChild,l=o.nextSibling,f=a;return typeof f=="function"?xt(f,i):a=i,E(s,()=>e.heading),E(o,A(Wt,{get["aria-label"](){return e.closeIconLabel??"close"},iconName:"close",get onClick(){return e.onClose},size:30}),null),E(l,()=>e.children),O(c=>{const u=Bs,g=Ys,v=Hs;return u!==c._v$&&I(i,c._v$=u),g!==c._v$2&&I(o,c._v$2=g),v!==c._v$3&&I(l,c._v$3=v),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()]}})}})};It(["click"]);const Vs={light:300,normal:400,bold:700,300:300,400:400,500:500,600:600,700:700,800:800},qs={1:"2rem",2:"1.8rem",3:"1.6rem",4:"1.4rem",5:"1.2rem",6:"1rem"},Ks=e=>{const t=re({level:1},e);return A(si,{get tabIndex(){return t.shouldAutoFocus?-1:void 0},get component(){return`h${t.level}`},get class(){return me(t.className,$({fontFamily:"'Raleway', sans-serif",fontSize:t.size?t.size:qs[t.level],fontWeight:t.weight?Vs[t.weight]:"bold"}))},get children(){return t.children}})},Bt=jt(Ks),Js=$({display:"flex",flexDirection:"column",gap:4,fontSize:"1rem",fontWeight:500}),Qs=$({":after":{content:'" *"',color:"red",fontSize:"1.1rem"}}),Zs=$({height:40,borderRadius:4,padding:8,paddingInlineStart:16,border:"1px solid lightgrey",":disabled":{cursor:"not-allowed",color:"darkgray"}});$({color:"red",fontSize:"1.1rem"});const el=$({color:"red"}),tl=z("<div><label></label><input></div>"),nl=z("<span></span>"),rl=e=>{const[t,n]=_t(e,["className","error","isRequired","label","onChange","value"]),r=U(()=>me(Js,t.className)),a=U(()=>me(t.isRequired&&Qs));return(()=>{const i=tl.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return E(o,()=>t.label),xn(s,re({get class(){return Zs}},n,{get["aria-required"](){return t.isRequired},get id(){return t.label},onChange:l=>t.onChange(l),get value(){return t.value}}),!1,!1),E(i,(()=>{const l=U(()=>!!t.error);return()=>l()&&(()=>{const f=nl.cloneNode(!0);return E(f,()=>t.error),O(()=>I(f,el)),f})()})(),null),O(l=>{const f=r(),c=a(),u=t.label;return f!==l._v$&&I(i,l._v$=f),c!==l._v$2&&I(o,l._v$2=c),u!==l._v$3&&Ie(o,"for",l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()},Jt=jt(rl),Ve=["pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","longBreak"],[Pe,vn]=te(0),al=()=>{Pe()===Ve.length-1?vn(0):vn(Pe()+1)},bn=()=>Ve[Pe()],pn=Symbol("store-raw"),qe=Symbol("store-node"),il=Symbol("store-name");function Ea(e,t){let n=e[K];if(!n&&(Object.defineProperty(e,K,{value:n=new Proxy(e,ll)}),!Array.isArray(e))){const r=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let i=0,o=r.length;i<o;i++){const s=r[i];a[s].get&&Object.defineProperty(e,s,{enumerable:a[s].enumerable,get:a[s].get.bind(n)})}}return n}function Ot(e){let t;return e!=null&&typeof e=="object"&&(e[K]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Ke(e,t=new Set){let n,r,a,i;if(n=e!=null&&e[pn])return n;if(!Ot(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,s=e.length;o<s;o++)a=e[o],(r=Ke(a,t))!==a&&(e[o]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let l=0,f=o.length;l<f;l++)i=o[l],!s[i].get&&(a=e[i],(r=Ke(a,t))!==a&&(e[i]=r))}return e}function Fn(e){let t=e[qe];return t||Object.defineProperty(e,qe,{value:t={}}),t}function yn(e,t,n){return e[t]||(e[t]=$a(n))}function ol(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===K||t===qe||t===il||(delete n.value,delete n.writable,n.get=()=>e[K][t]),n}function Oa(e){if(Lr()){const t=Fn(e);(t._||(t._=$a()))()}}function sl(e){return Oa(e),Reflect.ownKeys(e)}function $a(e){const[t,n]=te(e,{equals:!1,internal:!0});return t.$=n,t}const ll={get(e,t,n){if(t===pn)return e;if(t===K)return n;if(t===Bn)return Oa(e),n;const r=Fn(e),a=r.hasOwnProperty(t);let i=a?r[t]():e[t];if(t===qe||t==="__proto__")return i;if(!a){const o=Object.getOwnPropertyDescriptor(e,t);Lr()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(i=yn(r,t,i)())}return Ot(i)?Ea(i):i},has(e,t){return t===pn||t===K||t===Bn||t===qe||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:sl,getOwnPropertyDescriptor:ol};function $t(e,t,n,r=!1){if(!r&&e[t]===n)return;const a=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let o=Fn(e),s;(s=yn(o,t,a))&&s.$(()=>n),Array.isArray(e)&&e.length!==i&&(s=yn(o,"length",i))&&s.$(e.length),(s=o._)&&s.$()}function Pa(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const a=n[r];$t(e,a,t[a])}}function cl(e,t){if(typeof t=="function"&&(t=t(e)),t=Ke(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const a=t[n];e[n]!==a&&$t(e,n,a)}$t(e,"length",r)}else Pa(e,t)}function De(e,t,n=[]){let r,a=e;if(t.length>1){r=t.shift();const o=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let l=0;l<r.length;l++)De(e,[r[l]].concat(t),n);return}else if(s&&o==="function"){for(let l=0;l<e.length;l++)r(e[l],l)&&De(e,[l].concat(t),n);return}else if(s&&o==="object"){const{from:l=0,to:f=e.length-1,by:c=1}=r;for(let u=l;u<=f;u+=c)De(e,[u].concat(t),n);return}else if(t.length>1){De(e[r],t,[r].concat(n));return}a=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(a,n),i===a)||r===void 0&&i==null||(i=Ke(i),r===void 0||Ot(a)&&Ot(i)&&!Array.isArray(i)?Pa(a,i):$t(e,r,i))}function fl(...[e,t]){const n=Ke(e||{}),r=Array.isArray(n),a=Ea(n);function i(...o){Ra(()=>{r&&o.length===1?cl(n,o[0]):De(n,o)})}return[a,i]}const Na="app-settings",$r={durations:{longBreak:10,pomodoro:25,shortBreak:5}},ul=()=>{const e=globalThis.localStorage.getItem(Na);if(!e)return $r;let t;try{t=JSON.parse(e)}catch(n){console.error(n),t=$r}return t},[jn,Qt]=fl(ul()),dl=()=>{Ae(()=>{globalThis.localStorage.setItem(Na,JSON.stringify(jn))})},ml="/pomodoro/assets/alarm-1-42bf15fd.mp3",gl={alarm1:ml},hl=$({textAlign:"center",paddingBlockEnd:48,fontWeight:500,fontSize:"7rem",fontFamily:"sans-serif"}),vl=$({display:"flex",gap:20,justifyContent:"center"}),Wn={padding:"16px 32px",border:"none",cursor:"pointer",color:"#fff",borderRadius:4,fontWeight:700,fontSize:"1.4rem",transition:"background-color 200ms ease",":focus":{outline:"2px solid #339af0",outlineOffset:2},":disabled":{cursor:"not-allowed",backgroundColor:"lightgrey",color:"darkgray"}},bl=$({...Wn,backgroundColor:"hsl(131, 51%, 29%)",":not(:disabled):hover":{backgroundColor:"hsl(131, 51%, 25%)"}}),pl=$({...Wn,backgroundColor:"hsl(42, 95%, 37%)",":not(:disabled):hover":{backgroundColor:"hsl(42, 95%, 33%)"}}),yl=$({...Wn,backgroundColor:"hsl(0, 94%, 38%)",":not(:disabled):hover":{backgroundColor:"hsl(0, 94%, 34%)"}}),Pr=e=>e.toString().padStart(2,"0"),wl=e=>{const t=Math.floor(e/60),n=e-t*60;return`${Pr(t)}:${Pr(n)}`},kl=e=>({stopWorkerCounter(){const t={type:"stop"};e.postMessage(t)},startWorkerCounter(t){const n={type:"start",time:t};e.postMessage(n)}}),xl=z('<div data-testid="remainingTime"></div>'),Sl=z("<div><button>Reset</button></div>"),Cl=z("<button>Start</button>"),Al=z("<button>Pause</button>"),_a=new Worker(new URL("/pomodoro/assets/worker-b3a0bc9e.js",self.location)),{startWorkerCounter:El,stopWorkerCounter:Ol}=kl(_a),$l=e=>{const t=()=>jn.durations[bn()]*60,[n,r]=te(t()),[a,i]=te("stopped"),o=U(()=>a()==="stopped"&&n()>0),s=U(()=>a()==="stopped"),l=U(()=>a()==="running"&&n()>0),f=()=>{var h;El(o()?n():t()),i("running"),(h=e.onStart)==null||h.call(e)},c=()=>{var h;Ol(),i("stopped"),(h=e.onStop)==null||h.call(e)},u=()=>{r(t()),c()},g=()=>{_a.onmessage=({data:h})=>{var b;r(h.newTime),h.newTime===0&&(c(),(b=e.onComplete)==null||b.call(e))}},v=()=>{r(t())};return Ae(g),Ae(v),[(()=>{const h=xl.cloneNode(!0);return E(h,()=>wl(n())),O(()=>I(h,hl)),h})(),(()=>{const h=Sl.cloneNode(!0),b=h.firstChild;return E(h,(()=>{const w=U(()=>!!s());return()=>w()&&(()=>{const p=Cl.cloneNode(!0);return p.$$click=f,O(y=>{const k=bl,F=n()===0;return k!==y._v$4&&I(p,y._v$4=k),F!==y._v$5&&(p.disabled=y._v$5=F),y},{_v$4:void 0,_v$5:void 0}),p})()})(),b),E(h,(()=>{const w=U(()=>!!l());return()=>w()&&(()=>{const p=Al.cloneNode(!0);return p.$$click=c,O(()=>I(p,pl)),p})()})(),b),b.$$click=u,O(w=>{const p=vl,y=yl,k=a()==="running";return p!==w._v$&&I(h,w._v$=p),y!==w._v$2&&I(b,w._v$2=y),k!==w._v$3&&(b.disabled=w._v$3=k),w},{_v$:void 0,_v$2:void 0,_v$3:void 0}),h})()]};It(["click"]);const Pl=$({alignItems:"center",border:"1px solid darkgrey",borderRadius:32,color:"black",cursor:"pointer",display:"flex",flexShrink:0,fontWeight:500,paddingBlock:4,paddingInline:24,fontSize:".9rem",":has(input:checked)":{borderColor:"var(--color)"},":has(input:disabled)":{backgroundColor:"lightgray",color:"gray",cursor:"not-allowed",borderColor:"currentcolor"}}),Nl=$({appearance:"none",":checked:before":{content:'"✔"',marginInlineEnd:8,color:"var(--color)"},":disabled:checked:before":{color:"gray"}}),_l=$({display:"flex",alignItems:"center",overflowX:"auto",border:"none",position:"relative",gap:16,minWidth:0,padding:"0 16px 16px 16px",maxWidth:"100%",scrollbarWidth:"thin",scrollbarColor:"gray blue","&::-webkit-scrollbar":{borderRadius:8,height:8,backgroundColor:"#F5F5F5",boxShadow:"inset 0 0 6px rgba(0,0,0,0.3)"},"&::-webkit-scrollbar-thumb":{borderRadius:8,backgroundColor:"#555",height:8,boxShadow:"inset 0 0 6px rgba(0,0,0,.3)"},"&::-webkit-scrollbar-button":{display:"none"}}),Il=z('<label><input type="radio"></label>'),Tl=z('<fieldset data-testid="counters-group"></fieldset>'),Ll=e=>{const t=re({isEnabled:!0},e);let n;return Ae(()=>{t.isChecked&&(n==null||n.scrollIntoView({behavior:"smooth"}))}),(()=>{const r=Il.cloneNode(!0),a=r.firstChild,i=n;return typeof i=="function"?xt(i,r):n=r,a.addEventListener("change",({currentTarget:{value:o}})=>{t.onChange(parseInt(o))}),E(r,()=>t.children,null),O(o=>{const s=Pl,l=t.colour,f=Nl,c=!t.isEnabled,u=t.name;return s!==o._v$&&I(r,o._v$=s),l!==o._v$2&&r.style.setProperty("--color",o._v$2=l),f!==o._v$3&&I(a,o._v$3=f),c!==o._v$4&&(a.disabled=o._v$4=c),u!==o._v$5&&Ie(a,"name",o._v$5=u),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),O(()=>a.checked=t.isChecked),O(()=>a.value=t.value),r})()},Ml=e=>(()=>{const t=Tl.cloneNode(!0);return E(t,()=>e.children({name:"counter-selector",onChange:e.onChange})),O(()=>I(t,_l)),t})(),Pt={pomodoro:{text:"Pomodoro",color:"hsl(209, 75%, 38%)"},shortBreak:{text:"Short break",color:"hsl(131, 51%, 29%)"},longBreak:{text:"Long break",color:"hsl(288, 54%, 40%)"}},Rl=$({display:"flex",flexDirection:"column",alignItems:"center",gap:8}),Dl=$({display:"flex",justifyContent:"center",alignItems:"center"}),zl=$({minWidth:15}),Fl=z("<span></span>"),Ia=z("<div></div>"),jl=e=>A(Ml,{onChange:vn,children:t=>Ve.map((n,r)=>[A(Ll,re({get colour(){return Pt[n].color},get isChecked(){return r===Pe()},get isEnabled(){return!e.isDisabled},value:r},t,{get children(){return Pt[n].text}})),U((()=>{const a=U(()=>r<Ve.length-1);return()=>a()&&A(Ca,{get class(){return zl},iconName:"chevron-right",size:15})})())])}),Wl=e=>(()=>{const t=Ia.cloneNode(!0);return E(t,A(Bt,{level:2,mr:8,get children(){return["Current timer:",(()=>{const n=Fl.cloneNode(!0);return E(n,()=>` ${Pt[bn()].text}`),O(()=>n.style.setProperty("color",Pt[bn()].color)),n})()]}}),null),E(t,A(Wt,{"aria-label":"edit counter type",iconName:"pencil",get onClick(){return e.onEditClick},size:30}),null),O(()=>I(t,Dl)),t})(),Bl=e=>{const[t,n]=te(!1);if(Pe()<0||Pe()+1>Ve.length)throw new Error("Invalid currentCounterIndex value");return(()=>{const r=Ia.cloneNode(!0);return E(r,A(jr,{get when(){return t()},get fallback(){return A(Wl,{onEditClick:()=>n(!0)})},get children(){return[A(jl,{get isDisabled(){return e.isDisabled}}),A(Wt,{iconName:"close",onClick:()=>{n(!1)},size:30})]}})),O(()=>I(r,me(e.className,Rl))),r})()},Yl=jt(Bl),Hl=$({display:"flex",columnGap:10,alignItems:"center"}),Ul=e=>$({height:e,borderBottom:"1px solid lightgrey"}),Gl=z("<div></div>"),Xl=z("<header></header>"),Nr=80,Vl=e=>(()=>{const t=Xl.cloneNode(!0);return E(t,A(Aa,{height:Nr,maxWidth:600,get children(){const n=Gl.cloneNode(!0);return E(n,A(Wt,{"aria-label":"settings menu",iconName:"bars",get onClick(){return e.onSettingsClick},size:30}),null),E(n,A(Bt,{size:"3rem",children:"Pomodoro"}),null),O(()=>I(n,Hl)),n}})),O(()=>I(t,Ul(Nr))),t})(),ql=z("<section></section>"),Kl=e=>{const t=jn.durations,n={isRequired:!0,mb:16,type:"number",min:0};return(()=>{const r=ql.cloneNode(!0);return E(r,A(Bt,{level:3,mb:16,children:"Durations"}),null),E(r,A(Jt,re(n,{get disabled(){return e.isDurationEditingDisabled},get error(){return t.pomodoro<=0&&"Pomodoro duration must be set"},label:"Pomodoro",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Qt("durations","pomodoro",i)},get value(){return t.pomodoro===0?"":t.pomodoro}})),null),E(r,A(Jt,re(n,{get disabled(){return e.isDurationEditingDisabled},get error(){return t.shortBreak<=0&&"Short break duration must be set"},label:"Short break",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Qt("durations","shortBreak",i)},get value(){return t.shortBreak===0?"":t.shortBreak}})),null),E(r,A(Jt,re(n,{get disabled(){return e.isDurationEditingDisabled},get error(){return t.longBreak<=0&&"Long break duration must be set"},label:"Long break",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Qt("durations","longBreak",i)},get value(){return t.longBreak===0?"":t.longBreak}})),null),O(()=>Ie(r,"data-testid",e.dataTestId)),r})()},Jl=z("<div><audio></audio><main></main></div>"),Ql=()=>{dl();const[e,t]=te(!1),[n,r]=te(!1);let a;return(()=>{const i=Jl.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return xt(l=>a=l,o),E(i,A(Vl,{onSettingsClick:()=>r(!0)}),s),E(s,A(Aa,{maxWidth:600,pt:16,get children(){return[A(Yl,{get isDisabled(){return e()},pb:32,pt:32}),A($l,{onComplete:()=>{a.play(),al()},onStart:()=>t(!0),onStop:()=>t(!1)})]}})),E(i,A(Xs,{closeIconLabel:"close settings menu",get heading(){return A(Bt,{level:2,shouldAutoFocus:!0,children:"Settings"})},get isOpen(){return n()},onClose:()=>r(!1),get children(){return A(Kl,{dataTestId:"appSettings",get isDurationEditingDisabled(){return e()}})}}),null),O(()=>Ie(o,"src",gl.alarm1)),i})()};qa(()=>A(Ql,{}),document.getElementById("root"));
