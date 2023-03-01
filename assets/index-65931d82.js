(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const j={};function Fa(e){j.context=e}const Wa=(e,t)=>e===t,J=Symbol("solid-proxy"),Zt=Symbol("solid-track"),wt={equals:Wa};let Wr=Gr;const he=1,kt=2,Br={owned:null,cleanups:null,context:null,owner:null};var Y=null;let be=null,M=null,H=null,ne=null,Sn=0;function ze(e,t){const n=M,r=Y,a=e.length===0,i=a?Br:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=a?e:()=>e(()=>ke(()=>_t(i)));Y=i,M=null;try{return _e(o,!0)}finally{M=n,Y=r}}function q(e,t){t=t?Object.assign({},wt,t):wt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=a=>(typeof a=="function"&&(a=a(n.value)),Hr(n,a));return[Ur.bind(n),r]}function N(e,t,n){const r=An(e,t,!1,he);Je(r)}function Fe(e,t,n){Wr=Ha;const r=An(e,t,!1,he);r.user=!0,ne?ne.push(r):Je(r)}function U(e,t,n){n=n?Object.assign({},wt,n):wt;const r=An(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Je(r),Ur.bind(r)}function Ba(e){return _e(e,!1)}function ke(e){if(M===null)return e();const t=M;M=null;try{return e()}finally{M=t}}function en(e){return Y===null||(Y.cleanups===null?Y.cleanups=[e]:Y.cleanups.push(e)),e}function Yr(){return M}function Ur(){const e=be;if(this.sources&&(this.state||e))if(this.state===he||e)Je(this);else{const t=H;H=null,_e(()=>St(this),!1),H=t}if(M){const t=this.observers?this.observers.length:0;M.sources?(M.sources.push(this),M.sourceSlots.push(t)):(M.sources=[this],M.sourceSlots=[t]),this.observers?(this.observers.push(M),this.observerSlots.push(M.sources.length-1)):(this.observers=[M],this.observerSlots=[M.sources.length-1])}return this.value}function Hr(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&_e(()=>{for(let a=0;a<e.observers.length;a+=1){const i=e.observers[a],o=be&&be.running;o&&be.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?H.push(i):ne.push(i),i.observers&&Vr(i)),o||(i.state=he)}if(H.length>1e6)throw H=[],new Error},!1)),t}function Je(e){if(!e.fn)return;_t(e);const t=Y,n=M,r=Sn;M=Y=e,Ya(e,e.value,r),M=n,Y=t}function Ya(e,t,n){let r;try{r=e.fn(t)}catch(a){e.pure&&(e.state=he,e.owned&&e.owned.forEach(_t),e.owned=null),Xr(a)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Hr(e,r):e.value=r,e.updatedAt=n)}function An(e,t,n,r=he,a){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Y,context:null,pure:n};return Y===null||Y!==Br&&(Y.owned?Y.owned.push(i):Y.owned=[i]),i}function xt(e){const t=be;if(e.state===0||t)return;if(e.state===kt||t)return St(e);if(e.suspense&&ke(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Sn);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===he||t)Je(e);else if(e.state===kt||t){const a=H;H=null,_e(()=>St(e,n[0]),!1),H=a}}function _e(e,t){if(H)return e();let n=!1;t||(H=[]),ne?n=!0:ne=[],Sn++;try{const r=e();return Ua(n),r}catch(r){n||(ne=null),H=null,Xr(r)}}function Ua(e){if(H&&(Gr(H),H=null),e)return;const t=ne;ne=null,t.length&&_e(()=>Wr(t),!1)}function Gr(e){for(let t=0;t<e.length;t++)xt(e[t])}function Ha(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:xt(r)}for(j.context&&Fa(),t=0;t<n;t++)xt(e[t])}function St(e,t){const n=be;e.state=0;for(let r=0;r<e.sources.length;r+=1){const a=e.sources[r];a.sources&&(a.state===he||n?a!==t&&xt(a):(a.state===kt||n)&&St(a,t))}}function Vr(e){const t=be;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=kt,r.pure?H.push(r):ne.push(r),r.observers&&Vr(r))}}function _t(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),a=n.observers;if(a&&a.length){const i=a.pop(),o=n.observerSlots.pop();r<a.length&&(i.sourceSlots[o]=r,a[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)_t(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ga(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Xr(e){throw e=Ga(e),e}const Va=Symbol("fallback");function Xn(e){for(let t=0;t<e.length;t++)e[t]()}function Xa(e,t,n={}){let r=[],a=[],i=[],o=0,s=t.length>1?[]:null;return en(()=>Xn(i)),()=>{let l=e()||[],f,c;return l[Zt],ke(()=>{let d=l.length,m,p,h,w,y,b,x,_,P;if(d===0)o!==0&&(Xn(i),i=[],r=[],a=[],o=0,s&&(s=[])),n.fallback&&(r=[Va],a[0]=ze(z=>(i[0]=z,n.fallback())),o=1);else if(o===0){for(a=new Array(d),c=0;c<d;c++)r[c]=l[c],a[c]=ze(u);o=d}else{for(h=new Array(d),w=new Array(d),s&&(y=new Array(d)),b=0,x=Math.min(o,d);b<x&&r[b]===l[b];b++);for(x=o-1,_=d-1;x>=b&&_>=b&&r[x]===l[_];x--,_--)h[_]=a[x],w[_]=i[x],s&&(y[_]=s[x]);for(m=new Map,p=new Array(_+1),c=_;c>=b;c--)P=l[c],f=m.get(P),p[c]=f===void 0?-1:f,m.set(P,c);for(f=b;f<=x;f++)P=r[f],c=m.get(P),c!==void 0&&c!==-1?(h[c]=a[f],w[c]=i[f],s&&(y[c]=s[f]),c=p[c],m.set(P,c)):i[f]();for(c=b;c<d;c++)c in h?(a[c]=h[c],i[c]=w[c],s&&(s[c]=y[c],s[c](c))):a[c]=ze(u);a=a.slice(0,o=d),r=l.slice(0)}return a});function u(d){if(i[c]=d,s){const[m,p]=q(c);return s[c]=p,t(l[c],m)}return t(l[c])}}}function A(e,t){return ke(()=>e(t||{}))}function at(){return!0}const tn={get(e,t,n){return t===J?n:e.get(t)},has(e,t){return t===J?!0:e.has(t)},set:at,deleteProperty:at,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:at,deleteProperty:at}},ownKeys(e){return e.keys()}};function Yt(e){return(e=typeof e=="function"?e():e)?e:{}}function fe(...e){let t=!1;for(let r=0;r<e.length;r++){const a=e[r];t=t||!!a&&J in a,e[r]=typeof a=="function"?(t=!0,U(a)):a}if(t)return new Proxy({get(r){for(let a=e.length-1;a>=0;a--){const i=Yt(e[a])[r];if(i!==void 0)return i}},has(r){for(let a=e.length-1;a>=0;a--)if(r in Yt(e[a]))return!0;return!1},keys(){const r=[];for(let a=0;a<e.length;a++)r.push(...Object.keys(Yt(e[a])));return[...new Set(r)]}},tn);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const a=Object.getOwnPropertyDescriptors(e[r]);for(const i in a)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const s=(e[o]||{})[i];if(s!==void 0)return s}}})}return n}function Qe(e,...t){const n=new Set(t.flat());if(J in e){const a=t.map(i=>new Proxy({get(o){return i.includes(o)?e[o]:void 0},has(o){return i.includes(o)&&o in e},keys(){return i.filter(o=>o in e)}},tn));return a.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},tn)),a}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(a=>!n.has(a))),t.map(a=>{const i={};for(let o=0;o<a.length;o++){const s=a[o];s in e&&Object.defineProperty(i,s,r[s]?r[s]:{get(){return e[s]},set(){return!0},enumerable:!0})}return i})}function qa(e){const t="fallback"in e&&{fallback:()=>e.fallback};return U(Xa(()=>e.each,e.children,t||void 0))}function nn(e){let t=!1;const n=e.keyed,r=U(()=>e.when,void 0,{equals:(a,i)=>t?a===i:!a==!i});return U(()=>{const a=r();if(a){const i=e.children,o=typeof i=="function"&&i.length>0;return t=n||o,o?ke(()=>i(a)):i}return e.fallback},void 0,void 0)}const Ka=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ja=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ka]),Qa=new Set(["innerHTML","textContent","innerText","children"]),Za=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),qn=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),ei=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ti=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ni={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ri(e,t,n){let r=n.length,a=t.length,i=r,o=0,s=0,l=t[a-1].nextSibling,f=null;for(;o<a||s<i;){if(t[o]===n[s]){o++,s++;continue}for(;t[a-1]===n[i-1];)a--,i--;if(a===o){const c=i<r?s?n[s-1].nextSibling:n[i-s]:l;for(;s<i;)e.insertBefore(n[s++],c)}else if(i===s)for(;o<a;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[s]===t[a-1]){const c=t[--a].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[a]=n[i]}else{if(!f){f=new Map;let u=s;for(;u<i;)f.set(n[u],u++)}const c=f.get(t[o]);if(c!=null)if(s<c&&c<i){let u=o,d=1,m;for(;++u<a&&u<i&&!((m=f.get(t[u]))==null||m!==c+d);)d++;if(d>c-s){const p=t[o];for(;s<c;)e.insertBefore(n[s++],p)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const Kn="_$DX_DELEGATE";function ai(e,t,n,r={}){let a;return ze(i=>{a=i,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{a(),t.textContent=""}}function L(e,t,n){const r=document.createElement("template");r.innerHTML=e;let a=r.content.firstChild;return n&&(a=a.firstChild),a}function Ze(e,t=window.document){const n=t[Kn]||(t[Kn]=new Set);for(let r=0,a=e.length;r<a;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,di))}}function It(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ii(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function O(e,t){t==null?e.removeAttribute("class"):e.className=t}function oi(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const a=n[0];e.addEventListener(t,n[0]=i=>a.call(e,n[1],i))}else e.addEventListener(t,n)}function si(e,t,n={}){const r=Object.keys(t||{}),a=Object.keys(n);let i,o;for(i=0,o=a.length;i<o;i++){const s=a[i];!s||s==="undefined"||t[s]||(Qn(e,s,!1),delete n[s])}for(i=0,o=r.length;i<o;i++){const s=r[i],l=!!t[s];!s||s==="undefined"||n[s]===l||!l||(Qn(e,s,!0),n[s]=l)}return n}function li(e,t,n){if(!t)return n?It(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let a,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)a=t[i],a!==n[i]&&(r.setProperty(i,a),n[i]=a);return n}function Tt(e,t={},n,r){const a={};return r||N(()=>a.children=Oe(e,t.children,a.children)),N(()=>t.ref&&t.ref(e)),N(()=>ci(e,t,n,!0,a,!0)),a}function Jn(e,t,n){return ke(()=>e(t,n))}function k(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Oe(e,t,r,n);N(a=>Oe(e,t(),a,n),r)}function ci(e,t,n,r,a={},i=!1){t||(t={});for(const o in a)if(!(o in t)){if(o==="children")continue;a[o]=Zn(e,o,null,a[o],n,i)}for(const o in t){if(o==="children"){r||Oe(e,t.children);continue}const s=t[o];a[o]=Zn(e,o,s,a[o],n,i)}}function fi(e){let t,n;return!j.context||!(t=j.registry.get(n=mi()))?e.cloneNode(!0):(j.completed&&j.completed.add(t),j.registry.delete(n),t)}function ui(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Qn(e,t,n){const r=t.trim().split(/\s+/);for(let a=0,i=r.length;a<i;a++)e.classList.toggle(r[a],n)}function Zn(e,t,n,r,a,i){let o,s,l;if(t==="style")return li(e,n,r);if(t==="classList")return si(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),c=ei.has(f);if(!c&&r){const u=Array.isArray(r)?r[0]:r;e.removeEventListener(f,u)}(c||n)&&(oi(e,f,n,c),c&&Ze([f]))}else if((l=Qa.has(t))||!a&&(qn[t]||(s=Ja.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?O(e,n):o&&!s&&!l?e[ui(t)]=n:e[qn[t]||t]=n;else{const f=a&&t.indexOf(":")>-1&&ni[t.split(":")[0]];f?ii(e,f,t,n):It(e,Za[t]||t,n)}return n}function di(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),j.registry&&!j.done&&(j.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let a=r.nextSibling;r.remove(),r=a}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const a=n[`${t}Data`];if(a!==void 0?r.call(n,a,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Oe(e,t,n,r,a){for(j.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(j.context)return n;if(i==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=xe(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(j.context)return n;n=xe(e,n,r)}else{if(i==="function")return N(()=>{let s=t();for(;typeof s=="function";)s=s();n=Oe(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],l=n&&Array.isArray(n);if(rn(s,t,n,a))return N(()=>n=Oe(e,s,n,r,!0)),()=>n;if(j.context){if(!s.length)return n;for(let f=0;f<s.length;f++)if(s[f].parentNode)return n=s}if(s.length===0){if(n=xe(e,n,r),o)return n}else l?n.length===0?er(e,s,r):ri(e,n,s):(n&&xe(e),er(e,s));n=s}else if(t instanceof Node){if(j.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=xe(e,n,r,t);xe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function rn(e,t,n,r){let a=!1;for(let i=0,o=t.length;i<o;i++){let s=t[i],l=n&&n[i];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))a=rn(e,s,l)||a;else if(typeof s=="function")if(r){for(;typeof s=="function";)s=s();a=rn(e,Array.isArray(s)?s:[s],Array.isArray(l)?l:[l])||a}else e.push(s),a=!0;else{const f=String(s);l&&l.nodeType===3&&l.data===f?e.push(l):e.push(document.createTextNode(f))}}return a}function er(e,t,n=null){for(let r=0,a=t.length;r<a;r++)e.insertBefore(t[r],n)}function xe(e,t,n,r){if(n===void 0)return e.textContent="";const a=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(a!==s){const l=s.parentNode===e;!i&&!o?l?e.replaceChild(a,s):e.insertBefore(a,n):l&&s.remove()}else i=!0}}else e.insertBefore(a,n);return[a]}function mi(){const e=j.context;return`${e.id}${e.count++}`}const gi="http://www.w3.org/2000/svg";function qr(e,t=!1){return t?document.createElementNS(gi,e):document.createElement(e)}function hi(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function a(){if(j.context){const[i,o]=q(!1);return queueMicrotask(()=>o(!0)),()=>i()&&e.children}else return()=>e.children}if(r instanceof HTMLHeadElement){const[i,o]=q(!1),s=()=>o(!0);ze(l=>k(r,()=>i()?l():a()(),null)),en(()=>{j.context?queueMicrotask(s):s()})}else{const i=qr(e.isSVG?"g":"div",e.isSVG),o=t&&i.attachShadow?i.attachShadow({mode:"open"}):i;Object.defineProperty(i,"_$host",{get(){return n.parentNode},configurable:!0}),k(o,a()),r.appendChild(i),e.ref&&e.ref(i),en(()=>r.removeChild(i))}return n}function Kr(e){const[t,n]=Qe(e,["component"]),r=U(()=>t.component);return U(()=>{const a=r();switch(typeof a){case"function":return ke(()=>a(n));case"string":const i=ti.has(a),o=j.context?fi():qr(a,i);return Tt(o,n,i),o}})}function tr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tr(Object(n),!0).forEach(function(r){F(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function At(e){return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},At(e)}function vi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pi(e,t,n){return t&&nr(e.prototype,t),n&&nr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cn(e,t){return yi(e)||ki(e,t)||Jr(e,t)||Si()}function et(e){return bi(e)||wi(e)||Jr(e)||xi()}function bi(e){if(Array.isArray(e))return an(e)}function yi(e){if(Array.isArray(e))return e}function wi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ki(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Jr(e,t){if(e){if(typeof e=="string")return an(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return an(e,t)}}function an(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Si(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rr=function(){},$n={},Qr={},Zr=null,ea={mark:rr,measure:rr};try{typeof window<"u"&&($n=window),typeof document<"u"&&(Qr=document),typeof MutationObserver<"u"&&(Zr=MutationObserver),typeof performance<"u"&&(ea=performance)}catch{}var Ai=$n.navigator||{},ar=Ai.userAgent,ir=ar===void 0?"":ar,ue=$n,T=Qr,or=Zr,it=ea;ue.document;var oe=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",ta=~ir.indexOf("MSIE")||~ir.indexOf("Trident/"),ot,st,lt,ct,ft,re="___FONT_AWESOME___",on=16,na="fa",ra="svg-inline--fa",ye="data-fa-i2svg",sn="data-fa-pseudo-element",Ci="data-fa-pseudo-element-pending",En="data-prefix",On="data-icon",sr="fontawesome-i2svg",$i="async",Ei=["HTML","HEAD","STYLE","SCRIPT"],aa=function(){try{return!0}catch{return!1}}(),I="classic",R="sharp",Nn=[I,R];function tt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[I]}})}var We=tt((ot={},F(ot,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),F(ot,R,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),ot)),Be=tt((st={},F(st,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F(st,R,{solid:"fass",regular:"fasr"}),st)),Ye=tt((lt={},F(lt,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F(lt,R,{fass:"fa-solid",fasr:"fa-regular"}),lt)),Oi=tt((ct={},F(ct,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F(ct,R,{"fa-solid":"fass","fa-regular":"fasr"}),ct)),Ni=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,ia="fa-layers-text",Pi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_i=tt((ft={},F(ft,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F(ft,R,{900:"fass",400:"fasr"}),ft)),oa=[1,2,3,4,5,6,7,8,9,10],Ii=oa.concat([11,12,13,14,15,16,17,18,19,20]),Ti=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ve={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ue=new Set;Object.keys(Be[I]).map(Ue.add.bind(Ue));Object.keys(Be[R]).map(Ue.add.bind(Ue));var Li=[].concat(Nn,et(Ue),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ve.GROUP,ve.SWAP_OPACITY,ve.PRIMARY,ve.SECONDARY]).concat(oa.map(function(e){return"".concat(e,"x")})).concat(Ii.map(function(e){return"w-".concat(e)})),De=ue.FontAwesomeConfig||{};function Ri(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Mi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var zi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zi.forEach(function(e){var t=Cn(e,2),n=t[0],r=t[1],a=Mi(Ri(n));a!=null&&(De[r]=a)})}var sa={styleDefault:"solid",familyDefault:"classic",cssPrefix:na,replacementClass:ra,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};De.familyPrefix&&(De.cssPrefix=De.familyPrefix);var Ne=g(g({},sa),De);Ne.autoReplaceSvg||(Ne.observeMutations=!1);var v={};Object.keys(sa).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(n){Ne[e]=n,je.forEach(function(r){return r(v)})},get:function(){return Ne[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){Ne.cssPrefix=t,je.forEach(function(n){return n(v)})},get:function(){return Ne.cssPrefix}});ue.FontAwesomeConfig=v;var je=[];function Di(e){return je.push(e),function(){je.splice(je.indexOf(e),1)}}var le=on,ee={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ji(e){if(!(!e||!oe)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return T.head.insertBefore(t,r),e}}var Fi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function He(){for(var e=12,t="";e-- >0;)t+=Fi[Math.random()*62|0];return t}function Ie(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Pn(e){return e.classList?Ie(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function la(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(la(e[n]),'" ')},"").trim()}function Lt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function _n(e){return e.size!==ee.size||e.x!==ee.x||e.y!==ee.y||e.rotate!==ee.rotate||e.flipX||e.flipY}function Bi(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Yi(e){var t=e.transform,n=e.width,r=n===void 0?on:n,a=e.height,i=a===void 0?on:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ta?l+="translate(".concat(t.x/le-r/2,"em, ").concat(t.y/le-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/le,"em), calc(-50% + ").concat(t.y/le,"em)) "):l+="translate(".concat(t.x/le,"em, ").concat(t.y/le,"em) "),l+="scale(".concat(t.size/le*(t.flipX?-1:1),", ").concat(t.size/le*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ui=`:root, :host {
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
}`;function ca(){var e=na,t=ra,n=v.cssPrefix,r=v.replacementClass,a=Ui;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var lr=!1;function Ut(){v.autoAddCss&&!lr&&(ji(ca()),lr=!0)}var Hi={mixout:function(){return{dom:{css:ca,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},ae=ue||{};ae[re]||(ae[re]={});ae[re].styles||(ae[re].styles={});ae[re].hooks||(ae[re].hooks={});ae[re].shims||(ae[re].shims=[]);var K=ae[re],fa=[],Gi=function e(){T.removeEventListener("DOMContentLoaded",e),Ct=1,fa.map(function(t){return t()})},Ct=!1;oe&&(Ct=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Ct||T.addEventListener("DOMContentLoaded",Gi));function Vi(e){oe&&(Ct?setTimeout(e,0):fa.push(e))}function nt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?la(e):"<".concat(t," ").concat(Wi(r),">").concat(i.map(nt).join(""),"</").concat(t,">")}function cr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Xi=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ht=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Xi(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function qi(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ln(e){var t=qi(e);return t.length===1?t[0].toString(16):null}function Ki(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function cn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fr(t);typeof K.hooks.addPack=="function"&&!a?K.hooks.addPack(e,fr(t)):K.styles[e]=g(g({},K.styles[e]||{}),i),e==="fas"&&cn("fa",t)}var ut,dt,mt,Se=K.styles,Ji=K.shims,Qi=(ut={},F(ut,I,Object.values(Ye[I])),F(ut,R,Object.values(Ye[R])),ut),In=null,ua={},da={},ma={},ga={},ha={},Zi=(dt={},F(dt,I,Object.keys(We[I])),F(dt,R,Object.keys(We[R])),dt);function eo(e){return~Li.indexOf(e)}function to(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!eo(a)?a:null}var va=function(){var t=function(i){return Ht(Se,function(o,s,l){return o[l]=Ht(s,i,{}),o},{})};ua=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),da=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ha=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Se||v.autoFetchSvg,r=Ht(Ji,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ma=r.names,ga=r.unicodes,In=Rt(v.styleDefault,{family:v.familyDefault})};Di(function(e){In=Rt(e.styleDefault,{family:v.familyDefault})});va();function Tn(e,t){return(ua[e]||{})[t]}function no(e,t){return(da[e]||{})[t]}function pe(e,t){return(ha[e]||{})[t]}function pa(e){return ma[e]||{prefix:null,iconName:null}}function ro(e){var t=ga[e],n=Tn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function de(){return In}var Ln=function(){return{prefix:null,iconName:null,rest:[]}};function Rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?I:n,a=We[r][e],i=Be[r][e]||Be[r][a],o=e in K.styles?e:null;return i||o||null}var ur=(mt={},F(mt,I,Object.keys(Ye[I])),F(mt,R,Object.keys(Ye[R])),mt);function Mt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},F(t,I,"".concat(v.cssPrefix,"-").concat(I)),F(t,R,"".concat(v.cssPrefix,"-").concat(R)),t),o=null,s=I;(e.includes(i[I])||e.some(function(f){return ur[I].includes(f)}))&&(s=I),(e.includes(i[R])||e.some(function(f){return ur[R].includes(f)}))&&(s=R);var l=e.reduce(function(f,c){var u=to(v.cssPrefix,c);if(Se[c]?(c=Qi[s].includes(c)?Oi[s][c]:c,o=c,f.prefix=c):Zi[s].indexOf(c)>-1?(o=c,f.prefix=Rt(c,{family:s})):u?f.iconName=u:c!==v.replacementClass&&c!==i[I]&&c!==i[R]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var d=o==="fa"?pa(f.iconName):{},m=pe(f.prefix,f.iconName);d.prefix&&(o=null),f.iconName=d.iconName||m||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!Se.far&&Se.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},Ln());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===R&&(Se.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=pe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=de()||"fas"),l}var ao=function(){function e(){vi(this,e),this.definitions={}}return pi(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=g(g({},n.definitions[s]||{}),o[s]),cn(s,o[s]);var l=Ye[I][s];l&&cn(l,o[s]),va()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][l]=f}),n}}]),e}(),dr=[],Ae={},Ce={},io=Object.keys(Ce);function oo(e,t){var n=t.mixoutsTo;return dr=e,Ae={},Object.keys(Ce).forEach(function(r){io.indexOf(r)===-1&&delete Ce[r]}),dr.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),At(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ae[o]||(Ae[o]=[]),Ae[o].push(i[o])})}r.provides&&r.provides(Ce)}),n}function fn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ae[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function we(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ae[e]||[];a.forEach(function(i){i.apply(null,n)})}function ie(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ce[e]?Ce[e].apply(null,t):void 0}function un(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||de();if(t)return t=pe(n,t)||t,cr(ba.definitions,n,t)||cr(K.styles,n,t)}var ba=new ao,so=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,we("noAuto")},lo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return oe?(we("beforeI2svg",t),ie("pseudoElements2svg",t),ie("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Vi(function(){fo({autoReplaceSvgRoot:n}),we("watch",t)})}},co={icon:function(t){if(t===null)return null;if(At(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rt(t[0]);return{prefix:r,iconName:pe(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Ni))){var a=Mt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||de(),iconName:pe(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=de();return{prefix:i,iconName:pe(i,t)||t}}}},X={noAuto:so,config:v,dom:lo,parse:co,library:ba,findIconDefinition:un,toHtml:nt},fo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?T:n;(Object.keys(K.styles).length>0||v.autoFetchSvg)&&oe&&v.autoReplaceSvg&&X.dom.i2svg({node:r})};function zt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(oe){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function uo(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(_n(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Lt(g(g({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function mo(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:o}),children:r}]}]}function Rn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,d=e.watchable,m=d===void 0?!1:d,p=r.found?r:n,h=p.width,w=p.height,y=a==="fak",b=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(se){return u.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(u.classes).join(" "),x={children:[],attributes:g(g({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:b,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(w)})},_=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/w*16*.0625,"em")}:{};m&&(x.attributes[ye]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||He())},children:[l]}),delete x.attributes.title);var P=g(g({},x),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:g(g({},_),u.styles)}),z=r.found&&n.found?ie("generateAbstractMask",P)||{children:[],attributes:{}}:ie("generateAbstractIcon",P)||{children:[],attributes:{}},C=z.children,Bt=z.attributes;return P.children=C,P.attributes=Bt,s?mo(P):uo(P)}function mr(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[ye]="");var c=g({},o.styles);_n(a)&&(c.transform=Yi({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Lt(c);u.length>0&&(f.style=u);var d=[];return d.push({tag:"span",attributes:f,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function go(e){var t=e.content,n=e.title,r=e.extra,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Lt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gt=K.styles;function dn(e){var t=e[0],n=e[1],r=e.slice(4),a=Cn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(ve.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ve.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ve.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ho={found:!1,width:512,height:512};function vo(e,t){!aa&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function mn(e,t){var n=t;return t==="fa"&&v.styleDefault!==null&&(t=de()),new Promise(function(r,a){if(ie("missingIconAbstract"),n==="fa"){var i=pa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Gt[t]&&Gt[t][e]){var o=Gt[t][e];return r(dn(o))}vo(e,t),r(g(g({},ho),{},{icon:v.showMissingIcons&&e?ie("missingIconAbstract")||{}:{}}))})}var gr=function(){},gn=v.measurePerformance&&it&&it.mark&&it.measure?it:{mark:gr,measure:gr},Re='FA "6.3.0"',po=function(t){return gn.mark("".concat(Re," ").concat(t," begins")),function(){return ya(t)}},ya=function(t){gn.mark("".concat(Re," ").concat(t," ends")),gn.measure("".concat(Re," ").concat(t),"".concat(Re," ").concat(t," begins"),"".concat(Re," ").concat(t," ends"))},Mn={begin:po,end:ya},ht=function(){};function hr(e){var t=e.getAttribute?e.getAttribute(ye):null;return typeof t=="string"}function bo(e){var t=e.getAttribute?e.getAttribute(En):null,n=e.getAttribute?e.getAttribute(On):null;return t&&n}function yo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function wo(){if(v.autoReplaceSvg===!0)return vt.replace;var e=vt[v.autoReplaceSvg];return e||vt.replace}function ko(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function xo(e){return T.createElement(e)}function wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ko:xo:n;if(typeof e=="string")return T.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(wa(o,{ceFn:r}))}),a}function So(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var vt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(wa(a),n)}),n.getAttribute(ye)===null&&v.keepOriginalSource){var r=T.createComment(So(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Pn(n).indexOf(v.replacementClass))return vt.replace(t);var a=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return nt(s)}).join(`
`);n.setAttribute(ye,""),n.innerHTML=o}};function vr(e){e()}function ka(e,t){var n=typeof t=="function"?t:ht;if(e.length===0)n();else{var r=vr;v.mutateApproach===$i&&(r=ue.requestAnimationFrame||vr),r(function(){var a=wo(),i=Mn.begin("mutate");e.map(a),i(),n()})}}var zn=!1;function xa(){zn=!0}function hn(){zn=!1}var $t=null;function pr(e){if(or&&v.observeMutations){var t=e.treeCallback,n=t===void 0?ht:t,r=e.nodeCallback,a=r===void 0?ht:r,i=e.pseudoElementsCallback,o=i===void 0?ht:i,s=e.observeMutationsRoot,l=s===void 0?T:s;$t=new or(function(f){if(!zn){var c=de();Ie(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!hr(u.addedNodes[0])&&(v.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&v.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&hr(u.target)&&~Ti.indexOf(u.attributeName))if(u.attributeName==="class"&&bo(u.target)){var d=Mt(Pn(u.target)),m=d.prefix,p=d.iconName;u.target.setAttribute(En,m||c),p&&u.target.setAttribute(On,p)}else yo(u.target)&&a(u.target)})}}),oe&&$t.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ao(){$t&&$t.disconnect()}function Co(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function $o(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mt(Pn(e));return a.prefix||(a.prefix=de()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=no(a.prefix,e.innerText)||Tn(a.prefix,ln(e.innerText))),!a.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Eo(e){var t=Ie(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(r||He()):(t["aria-hidden"]="true",t.focusable="false")),t}function Oo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ee,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$o(e),r=n.iconName,a=n.prefix,i=n.rest,o=Eo(e),s=fn("parseNodeAttributes",{},e),l=t.styleParser?Co(e):[];return g({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ee,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var No=K.styles;function Sa(e){var t=v.autoReplaceSvg==="nest"?br(e,{styleParser:!1}):br(e);return~t.extra.classes.indexOf(ia)?ie("generateLayersText",e,t):ie("generateSvgReplacementMutation",e,t)}var me=new Set;Nn.map(function(e){me.add("fa-".concat(e))});Object.keys(We[I]).map(me.add.bind(me));Object.keys(We[R]).map(me.add.bind(me));me=et(me);function yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!oe)return Promise.resolve();var n=T.documentElement.classList,r=function(u){return n.add("".concat(sr,"-").concat(u))},a=function(u){return n.remove("".concat(sr,"-").concat(u))},i=v.autoFetchSvg?me:Nn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(No));i.includes("fa")||i.push("fa");var o=[".".concat(ia,":not([").concat(ye,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(ye,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Mn.begin("onTree"),f=s.reduce(function(c,u){try{var d=Sa(u);d&&c.push(d)}catch(m){aa||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(d){ka(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),u(d)})})}function Po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sa(e).then(function(n){n&&ka([n],t)})}function _o(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:un(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:un(a||{})),e(r,g(g({},n),{},{mask:a}))}}var Io=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?ee:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,u=n.title,d=u===void 0?null:u,m=n.titleId,p=m===void 0?null:m,h=n.classes,w=h===void 0?[]:h,y=n.attributes,b=y===void 0?{}:y,x=n.styles,_=x===void 0?{}:x;if(t){var P=t.prefix,z=t.iconName,C=t.icon;return zt(g({type:"icon"},t),function(){return we("beforeDOMElementCreation",{iconDefinition:t,params:n}),v.autoA11y&&(d?b["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(p||He()):(b["aria-hidden"]="true",b.focusable="false")),Rn({icons:{main:dn(C),mask:l?dn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:z,transform:g(g({},ee),a),symbol:o,title:d,maskId:c,titleId:p,extra:{attributes:b,styles:_,classes:w}})})}},To={mixout:function(){return{icon:_o(Io)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yr,n.nodeCallback=Po,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?T:r,i=n.callback,o=i===void 0?function(){}:i;return yr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,d=r.extra;return new Promise(function(m,p){Promise.all([mn(a,s),c.iconName?mn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var w=Cn(h,2),y=w[0],b=w[1];m([n,Rn({icons:{main:y,mask:b},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:o,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Lt(s);l.length>0&&(a.style=l);var f;return _n(o)&&(f=ie("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Lo={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return zt({type:"layer"},function(){we("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(et(i)).join(" ")},children:o}]})}}}},Ro={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return zt({type:"counter",content:n},function(){return we("beforeDOMElementCreation",{content:n,params:r}),go({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(et(s))}})})}}}},Mo={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?ee:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return zt({type:"text",content:n},function(){return we("beforeDOMElementCreation",{content:n,params:r}),mr({content:n,transform:g(g({},ee),i),title:s,extra:{attributes:u,styles:m,classes:["".concat(v.cssPrefix,"-layers-text")].concat(et(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ta){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return v.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mr({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},zo=new RegExp('"',"ug"),wr=[1105920,1112319];function Do(e){var t=e.replace(zo,""),n=Ki(t,0),r=n>=wr[0]&&n<=wr[1],a=t.length===2?t[0]===t[1]:!1;return{value:ln(a?t[0]:t),isSecondary:r||a}}function kr(e,t){var n="".concat(Ci).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ie(e.children),o=i.filter(function(C){return C.getAttribute(sn)===t})[0],s=ue.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Pi),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?R:I,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Be[d][l[2].toLowerCase()]:_i[d][f],p=Do(u),h=p.value,w=p.isSecondary,y=l[0].startsWith("FontAwesome"),b=Tn(m,h),x=b;if(y){var _=ro(h);_.iconName&&_.prefix&&(b=_.iconName,m=_.prefix)}if(b&&!w&&(!o||o.getAttribute(En)!==m||o.getAttribute(On)!==x)){e.setAttribute(n,x),o&&e.removeChild(o);var P=Oo(),z=P.extra;z.attributes[sn]=t,mn(b,m).then(function(C){var Bt=Rn(g(g({},P),{},{icons:{main:C,mask:Ln()},prefix:m,iconName:x,extra:z,watchable:!0})),se=T.createElement("svg");t==="::before"?e.insertBefore(se,e.firstChild):e.appendChild(se),se.outerHTML=Bt.map(function(ja){return nt(ja)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function jo(e){return Promise.all([kr(e,"::before"),kr(e,"::after")])}function Fo(e){return e.parentNode!==document.head&&!~Ei.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(sn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xr(e){if(oe)return new Promise(function(t,n){var r=Ie(e.querySelectorAll("*")).filter(Fo).map(jo),a=Mn.begin("searchPseudoElements");xa(),Promise.all(r).then(function(){a(),hn(),t()}).catch(function(){a(),hn(),n()})})}var Wo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?T:r;v.searchPseudoElements&&xr(a)}}},Sr=!1,Bo={mixout:function(){return{dom:{unwatch:function(){xa(),Sr=!0}}}},hooks:function(){return{bootstrap:function(){pr(fn("mutationObserverCallbacks",{}))},noAuto:function(){Ao()},watch:function(n){var r=n.observeMutationsRoot;Sr?hn():pr(fn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ar=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Yo={mixout:function(){return{parse:{transform:function(n){return Ar(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ar(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:u,path:d};return{tag:"g",attributes:g({},m.outer),children:[{tag:"g",attributes:g({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:g(g({},r.icon.attributes),m.path)}]}]}}}},Vt={x:0,y:0,width:"100%",height:"100%"};function Cr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Uo(e){return e.tag==="g"?e.children:[e]}var Ho={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mt(a.split(" ").map(function(o){return o.trim()})):Ln();return i.prefix||(i.prefix=de()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,u=o.width,d=o.icon,m=Bi({transform:l,containerWidth:u,iconWidth:f}),p={tag:"rect",attributes:g(g({},Vt),{},{fill:"white"})},h=c.children?{children:c.children.map(Cr)}:{},w={tag:"g",attributes:g({},m.inner),children:[Cr(g({tag:c.tag,attributes:g(g({},c.attributes),m.path)},h))]},y={tag:"g",attributes:g({},m.outer),children:[w]},b="mask-".concat(s||He()),x="clip-".concat(s||He()),_={tag:"mask",attributes:g(g({},Vt),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Uo(d)},_]};return r.push(P,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(b,")")},Vt)}),{children:r,attributes:a}}}},Go={provides:function(t){var n=!1;ue.matchMedia&&(n=ue.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:g(g({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=g(g({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:g(g({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:g(g({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:g(g({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:g(g({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:g(g({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Xo=[Hi,To,Lo,Ro,Mo,Wo,Bo,Yo,Ho,Go,Vo];oo(Xo,{mixoutsTo:X});X.noAuto;X.config;var qo=X.library;X.dom;X.parse;X.findIconDefinition;X.toHtml;var Ko=X.icon;X.layer;X.text;X.counter;var Jo={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Qo={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Zo={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},es={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},ts={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},ns=ts,rs={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};const ge=(...e)=>e.filter(Boolean).join(" ");function as(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function is(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var os=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(is(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=as(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),B="-ms-",Et="-moz-",$="-webkit-",Aa="comm",Dn="rule",jn="decl",ss="@import",Ca="@keyframes",ls=Math.abs,Dt=String.fromCharCode,cs=Object.assign;function fs(e,t){return W(e,0)^45?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}function $a(e){return e.trim()}function us(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,n){return e.replace(t,n)}function vn(e,t){return e.indexOf(t)}function W(e,t){return e.charCodeAt(t)|0}function Ge(e,t,n){return e.slice(t,n)}function Q(e){return e.length}function Fn(e){return e.length}function gt(e,t){return t.push(e),e}function ds(e,t){return e.map(t).join("")}var jt=1,Pe=1,Ea=0,G=0,D=0,Te="";function Ft(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:jt,column:Pe,length:o,return:""}}function Le(e,t){return cs(Ft("",null,null,"",null,null,0),e,{length:-e.length},t)}function ms(){return D}function gs(){return D=G>0?W(Te,--G):0,Pe--,D===10&&(Pe=1,jt--),D}function V(){return D=G<Ea?W(Te,G++):0,Pe++,D===10&&(Pe=1,jt++),D}function te(){return W(Te,G)}function pt(){return G}function rt(e,t){return Ge(Te,e,t)}function Ve(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oa(e){return jt=Pe=1,Ea=Q(Te=e),G=0,[]}function Na(e){return Te="",e}function bt(e){return $a(rt(G-1,pn(e===91?e+2:e===40?e+1:e)))}function hs(e){for(;(D=te())&&D<33;)V();return Ve(e)>2||Ve(D)>3?"":" "}function vs(e,t){for(;--t&&V()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return rt(e,pt()+(t<6&&te()==32&&V()==32))}function pn(e){for(;V();)switch(D){case e:return G;case 34:case 39:e!==34&&e!==39&&pn(D);break;case 40:e===41&&pn(e);break;case 92:V();break}return G}function ps(e,t){for(;V()&&e+D!==47+10;)if(e+D===42+42&&te()===47)break;return"/*"+rt(t,G-1)+"*"+Dt(e===47?e:V())}function bs(e){for(;!Ve(te());)V();return rt(e,G)}function ys(e){return Na(yt("",null,null,null,[""],e=Oa(e),0,[0],e))}function yt(e,t,n,r,a,i,o,s,l){for(var f=0,c=0,u=o,d=0,m=0,p=0,h=1,w=1,y=1,b=0,x="",_=a,P=i,z=r,C=x;w;)switch(p=b,b=V()){case 40:if(p!=108&&W(C,u-1)==58){vn(C+=E(bt(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:C+=bt(b);break;case 9:case 10:case 13:case 32:C+=hs(p);break;case 92:C+=vs(pt()-1,7);continue;case 47:switch(te()){case 42:case 47:gt(ws(ps(V(),pt()),t,n),l);break;default:C+="/"}break;case 123*h:s[f++]=Q(C)*y;case 125*h:case 59:case 0:switch(b){case 0:case 125:w=0;case 59+c:m>0&&Q(C)-u&&gt(m>32?Er(C+";",r,n,u-1):Er(E(C," ","")+";",r,n,u-2),l);break;case 59:C+=";";default:if(gt(z=$r(C,t,n,f,c,a,s,x,_=[],P=[],u),i),b===123)if(c===0)yt(C,t,z,z,_,i,u,s,P);else switch(d===99&&W(C,3)===110?100:d){case 100:case 109:case 115:yt(e,z,z,r&&gt($r(e,z,z,0,0,a,s,x,a,_=[],u),P),a,P,u,s,r?_:P);break;default:yt(C,z,z,z,[""],P,0,s,P)}}f=c=m=0,h=y=1,x=C="",u=o;break;case 58:u=1+Q(C),m=p;default:if(h<1){if(b==123)--h;else if(b==125&&h++==0&&gs()==125)continue}switch(C+=Dt(b),b*h){case 38:y=c>0?1:(C+="\f",-1);break;case 44:s[f++]=(Q(C)-1)*y,y=1;break;case 64:te()===45&&(C+=bt(V())),d=te(),c=u=Q(x=C+=bs(pt())),b++;break;case 45:p===45&&Q(C)==2&&(h=0)}}return i}function $r(e,t,n,r,a,i,o,s,l,f,c){for(var u=a-1,d=a===0?i:[""],m=Fn(d),p=0,h=0,w=0;p<r;++p)for(var y=0,b=Ge(e,u+1,u=ls(h=o[p])),x=e;y<m;++y)(x=$a(h>0?d[y]+" "+b:E(b,/&\f/g,d[y])))&&(l[w++]=x);return Ft(e,t,n,a===0?Dn:s,l,f,c)}function ws(e,t,n){return Ft(e,t,n,Aa,Dt(ms()),Ge(e,2,-2),0)}function Er(e,t,n,r){return Ft(e,t,n,jn,Ge(e,0,r),Ge(e,r+1,-1),r)}function $e(e,t){for(var n="",r=Fn(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function ks(e,t,n,r){switch(e.type){case ss:case jn:return e.return=e.return||e.value;case Aa:return"";case Ca:return e.return=e.value+"{"+$e(e.children,r)+"}";case Dn:e.value=e.props.join(",")}return Q(n=$e(e.children,r))?e.return=e.value+"{"+n+"}":""}function xs(e){var t=Fn(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function Ss(e){return function(t){t.root||(t=t.return)&&e(t)}}function As(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Cs=function(t,n,r){for(var a=0,i=0;a=i,i=te(),a===38&&i===12&&(n[r]=1),!Ve(i);)V();return rt(t,G)},$s=function(t,n){var r=-1,a=44;do switch(Ve(a)){case 0:a===38&&te()===12&&(n[r]=1),t[r]+=Cs(G-1,n,r);break;case 2:t[r]+=bt(a);break;case 4:if(a===44){t[++r]=te()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Dt(a)}while(a=V());return t},Es=function(t,n){return Na($s(Oa(t),n))},Or=new WeakMap,Os=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Or.get(r))&&!a){Or.set(t,!0);for(var i=[],o=Es(n,i),s=r.props,l=0,f=0;l<o.length;l++)for(var c=0;c<s.length;c++,f++)t.props[f]=i[l]?o[l].replace(/&\f/g,s[c]):s[c]+" "+o[l]}}},Ns=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Pa(e,t){switch(fs(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Et+e+B+e+e;case 6828:case 4268:return $+e+B+e+e;case 6165:return $+e+B+"flex-"+e+e;case 5187:return $+e+E(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return $+e+B+"flex-item-"+E(e,/flex-|-self/,"")+e;case 4675:return $+e+B+"flex-line-pack"+E(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+B+E(e,"shrink","negative")+e;case 5292:return $+e+B+E(e,"basis","preferred-size")+e;case 6060:return $+"box-"+E(e,"-grow","")+$+e+B+E(e,"grow","positive")+e;case 4554:return $+E(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Q(e)-1-t>6)switch(W(e,t+1)){case 109:if(W(e,t+4)!==45)break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Et+(W(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vn(e,"stretch")?Pa(E(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(W(e,t+1)!==115)break;case 6444:switch(W(e,Q(e)-3-(~vn(e,"!important")&&10))){case 107:return E(e,":",":"+$)+e;case 101:return E(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(W(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+B+"$2box$3")+e}break;case 5936:switch(W(e,t+11)){case 114:return $+e+B+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+B+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+B+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+B+e+e}return e}var Ps=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case jn:t.return=Pa(t.value,t.length);break;case Ca:return $e([Le(t,{value:E(t.value,"@","@"+$)})],a);case Dn:if(t.length)return ds(t.props,function(i){switch(us(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return $e([Le(t,{props:[E(i,/:(read-\w+)/,":"+Et+"$1")]})],a);case"::placeholder":return $e([Le(t,{props:[E(i,/:(plac\w+)/,":"+$+"input-$1")]}),Le(t,{props:[E(i,/:(plac\w+)/,":"+Et+"$1")]}),Le(t,{props:[E(i,/:(plac\w+)/,B+"input-$1")]})],a)}return""})}},_s=[Ps],Is=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var w=h.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var a=t.stylisPlugins||_s,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var w=h.getAttribute("data-emotion").split(" "),y=1;y<w.length;y++)i[w[y]]=!0;s.push(h)});var l,f=[Os,Ns];{var c,u=[ks,Ss(function(h){c.insert(h)})],d=xs(f.concat(a,u)),m=function(w){return $e(ys(w),d)};l=function(w,y,b,x){c=b,m(w?w+"{"+y.styles+"}":y.styles),x&&(p.inserted[y.name]=!0)}}var p={key:n,sheet:new os({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return p.sheet.hydrate(s),p};function Ts(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Ls={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rs=/[A-Z]|^ms/g,Ms=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_a=function(t){return t.charCodeAt(1)===45},Nr=function(t){return t!=null&&typeof t!="boolean"},Xt=As(function(e){return _a(e)?e:e.replace(Rs,"-$&").toLowerCase()}),Pr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ms,function(r,a,i){return Z={name:a,styles:i,next:Z},a})}return Ls[t]!==1&&!_a(t)&&typeof n=="number"&&n!==0?n+"px":n};function Xe(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Z={name:n.name,styles:n.styles,next:Z},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Z={name:r.name,styles:r.styles,next:Z},r=r.next;var a=n.styles+";";return a}return zs(e,t,n)}case"function":{if(e!==void 0){var i=Z,o=n(e);return Z=i,Xe(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function zs(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Xe(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Nr(o)&&(r+=Xt(i)+":"+Pr(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Nr(o[s])&&(r+=Xt(i)+":"+Pr(i,o[s])+";");else{var l=Xe(e,t,o);switch(i){case"animation":case"animationName":{r+=Xt(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var _r=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Z,qt=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";Z=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Xe(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Xe(r,n,t[s]),a&&(i+=o[s]);_r.lastIndex=0;for(var l="",f;(f=_r.exec(i))!==null;)l+="-"+f[1];var c=Ts(i)+l;return{name:c,styles:i,next:Z}},Ds=!0;function Ia(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var js=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||Ds===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Fs=function(t,n,r){js(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Ir(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function Tr(e,t,n){var r=[],a=Ia(e,r,n);return r.length<2?n:a+t(r)}var Ws=function(t){var n=Is(t);n.sheet.speedy=function(s){this.isSpeedy=s},n.compat=!0;var r=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered,void 0);return Fs(n,u,!1),n.key+"-"+u.name},a=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered),d="animation-"+u.name;return Ir(n,{name:u.name,styles:"@keyframes "+d+"{"+u.styles+"}"}),d},i=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered);Ir(n,u)},o=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];return Tr(n.registered,r,Bs(f))};return{css:r,cx:o,injectGlobal:i,keyframes:a,hydrate:function(l){l.forEach(function(f){n.inserted[f]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:Ia.bind(null,n.registered),merge:Tr.bind(null,n.registered,r)}},Bs=function e(t){for(var n="",r=0;r<t.length;r++){var a=t[r];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))i=e(a);else{i="";for(var o in a)a[o]&&o&&(i&&(i+=" "),i+=o)}break}default:i=a}i&&(n&&(n+=" "),n+=i)}}return n},Ys=Ws({key:"css"}),S=Ys.css;const Wt=e=>n=>{const[r,a]=Qe(n,["className","m","mb","ml","mr","mt","p","pb","pl","pr","pt"]);return A(e,fe(a,{get className(){return ge(S({margin:r.m,marginBlockEnd:r.mb,marginInlineStart:r.ml,marginInlineEnd:r.mr,marginBlockStart:r.mt,padding:r.p,paddingBlockEnd:r.pb,paddingInlineStart:r.pl,paddingInlineEnd:r.pr,paddingBlockStart:r.pt}),r.className)}}))},Us=S({width:"var(--size)",height:"var(--size)",display:"flex",justifyContent:"center","& svg":{height:"100%",color:"inherit"}}),Hs=L("<span></span>"),Gs=[Qo,es,rs,ns,Zo,Jo];qo.add(...Gs);const Wn=e=>(()=>{const t=Hs.cloneNode(!0);return N(n=>{var o;const r=ge(Us,e.class),a=(o=Ko({prefix:"fas",iconName:e.iconName}))==null?void 0:o.html,i=`${e.size??20}px`;return r!==n._v$&&O(t,n._v$=r),a!==n._v$2&&(t.innerHTML=n._v$2=a),i!==n._v$3&&t.style.setProperty("--size",n._v$3=i),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),Vs=S({color:"#868e96",padding:3,border:"none",backgroundColor:"transparent",cursor:"pointer",width:"var(--size)",height:"var(--size)",borderRadius:2,transition:"background-color 200ms ease",":hover":{backgroundColor:"#ecedf0"},"> *":{width:"100%",height:"100%"}}),Xs=L("<button></button>"),Bn=e=>{const[t,n]=Qe(e,["onClick","size","iconName"]);return(()=>{const r=Xs.cloneNode(!0);return r.$$click=a=>{var i;return(i=t.onClick)==null?void 0:i.call(t,a)},Tt(r,fe({get class(){return Vs},get style(){return{"--size":`${t.size}px`}}},n),!1,!0),k(r,A(Wn,{get iconName(){return t.iconName},get size(){return t.size}})),r})()};Ze(["click"]);const qs=L("<div></div>"),Ks=e=>(()=>{const t=qs.cloneNode(!0);return k(t,()=>e.children),N(()=>O(t,ge(S({height:e.height,maxWidth:e.maxWidth,marginInline:"auto",paddingInline:16}),e.className))),t})(),Yn=Wt(Ks),Js=S({position:"fixed",top:0,right:0,bottom:0,left:0,width:"100%",zIndex:1,opacity:0,transition:"opacity 300ms",willChange:"opacity",backgroundColor:"#000",userSelect:"none","&.isOpen":{opacity:.7}}),Qs=S({position:"fixed",top:0,left:0,bottom:0,height:"100%",width:"100%",maxWidth:"500px",zIndex:2,overflow:"auto",transition:"transform 200ms",willChange:"transform",backgroundColor:"#fff",display:"flex",flexDirection:"column",transform:"translate3d(-103%, 0, 0)",boxShadow:"6px 0px 16px 2px #777","&.isOpen":{transform:"translate3d(0%, 0, 0)"}}),Zs=S({padding:16,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #ddd"}),el=S({position:"relative",overflowX:"hidden",overflowY:"auto",height:"100%",flex:"1",padding:16}),tl=L("<div></div>"),nl=L('<div aria-labelledby="drawer-header" role="dialog"><header id="drawer-header"><div></div></header><div></div></div>'),bn="drawer-container-id";if(!document.getElementById(bn)){const e=document.createElement("div");e.setAttribute("id",bn),document.body.appendChild(e)}const rl=e=>{const[t,n]=q(!1);let r,a;return Fe(()=>{e.isOpen&&n(!0),!e.isOpen&&t()&&setTimeout(()=>{n(!1)},300)}),Fe(()=>{e.isOpen?setTimeout(()=>{r==null||r.classList.add("isOpen"),a==null||a.classList.add("isOpen")},0):(r==null||r.classList.remove("isOpen"),a==null||a.classList.remove("isOpen"))}),A(hi,{get mount(){return document.getElementById(bn)},get children(){return A(nn,{get when(){return t()},get children(){return[(()=>{const i=tl.cloneNode(!0),o=r;return typeof o=="function"?Jn(o,i):r=i,i.$$click=()=>e.onClose(),N(()=>O(i,ge(Js))),i})(),(()=>{const i=nl.cloneNode(!0),o=i.firstChild,s=o.firstChild,l=o.nextSibling,f=a;return typeof f=="function"?Jn(f,i):a=i,k(s,()=>e.heading),k(o,A(Bn,{get["aria-label"](){return e.closeIconLabel??"close"},iconName:"close",get onClick(){return e.onClose},size:30}),null),k(l,()=>e.children),N(c=>{const u=Qs,d=Zs,m=el;return u!==c._v$&&O(i,c._v$=u),d!==c._v$2&&O(o,c._v$2=d),m!==c._v$3&&O(l,c._v$3=m),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()]}})}})};Ze(["click"]);const al={light:300,normal:400,bold:700,300:300,400:400,500:500,600:600,700:700,800:800},il={1:"2rem",2:"1.8rem",3:"1.6rem",4:"1.4rem",5:"1.2rem",6:"1rem"},ol=e=>{const t=fe({level:1},e);return A(Kr,{get tabIndex(){return t.shouldAutoFocus?-1:void 0},get component(){return`h${t.level}`},get class(){return ge(t.className,S({fontFamily:"'Raleway', sans-serif",fontSize:t.size?t.size:il[t.level],fontWeight:t.weight?al[t.weight]:"bold"}))},get children(){return t.children}})},Un=Wt(ol),sl=S({display:"flex",flexDirection:"column",gap:4,fontSize:"1rem",fontWeight:500}),ll=S({":after":{content:'" *"',color:"red",fontSize:"1.1rem"}}),cl=S({height:40,borderRadius:4,padding:8,paddingInlineStart:16,border:"1px solid lightgrey",":disabled":{cursor:"not-allowed",color:"darkgray"}});S({color:"red",fontSize:"1.1rem"});const fl=S({color:"red"}),ul=L("<div><label></label><input></div>"),dl=L("<span></span>"),ml=e=>{const[t,n]=Qe(e,["className","error","isRequired","label","onChange","value"]),r=U(()=>ge(sl,t.className)),a=U(()=>ge(t.isRequired&&ll));return(()=>{const i=ul.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return k(o,()=>t.label),Tt(s,fe({get class(){return cl}},n,{get["aria-required"](){return t.isRequired},get id(){return t.label},onChange:l=>t.onChange(l),get value(){return t.value}}),!1,!1),k(i,(()=>{const l=U(()=>!!t.error);return()=>l()&&(()=>{const f=dl.cloneNode(!0);return k(f,()=>t.error),N(()=>O(f,fl)),f})()})(),null),N(l=>{const f=r(),c=a(),u=t.label;return f!==l._v$&&O(i,l._v$=f),c!==l._v$2&&O(o,l._v$2=c),u!==l._v$3&&It(o,"for",l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()},Kt=Wt(ml),gl=S({position:"relative",width:"max-content",borderRadius:4,":has(select:focus)":{outline:"2px solid black",outlineOffset:4}}),hl=S({position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,":hover":{cursor:"pointer","+ *":{color:"hsl(0deg 0% 00%)"}},":disabled":{cursor:"not-allowed","+ *":{color:"hsl(0deg 0% 30%)"}}}),vl=S({color:"hsl(0deg 0% 20%)",padding:"12px 16px",fontSize:"1rem",fontWeight:500,backgroundColor:"hsl(0deg 0% 90%)",borderRadius:4,display:"flex",gap:16,alignItems:"center",transition:"color 200ms ease"}),pl=L("<div><select></select><div></div></div>"),bl=L("<option></option>"),yl=e=>{const[t,n]=Qe(e,["onChange","value","options"]);return(()=>{const r=pl.cloneNode(!0),a=r.firstChild,i=a.nextSibling;return a.addEventListener("change",o=>t.onChange(o)),Tt(a,fe({get class(){return hl},get value(){return t.value}},n),!1,!0),k(a,A(qa,{get each(){return t.options},children:o=>(()=>{const s=bl.cloneNode(!0);return k(s,()=>o.label,null),k(s,()=>o.value===t.value&&" ✔",null),N(()=>s.value=o.value),s})()})),k(i,()=>t.options[parseInt(t.value)].label,null),k(i,A(Wn,{iconName:"chevron-down",size:15}),null),N(o=>{const s=gl,l=vl;return s!==o._v$&&O(r,o._v$=s),l!==o._v$2&&O(i,o._v$2=l),o},{_v$:void 0,_v$2:void 0}),r})()},Ot=["pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","longBreak"],[Ee,yn]=q(0),wl=()=>{Ee()===Ot.length-1?yn(0):yn(Ee()+1)},wn=()=>Ot[Ee()],[ce,Lr]=q("stopped"),kn=Symbol("store-raw"),qe=Symbol("store-node"),kl=Symbol("store-name");function Ta(e,t){let n=e[J];if(!n&&(Object.defineProperty(e,J,{value:n=new Proxy(e,Al)}),!Array.isArray(e))){const r=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let i=0,o=r.length;i<o;i++){const s=r[i];a[s].get&&Object.defineProperty(e,s,{enumerable:a[s].enumerable,get:a[s].get.bind(n)})}}return n}function Nt(e){let t;return e!=null&&typeof e=="object"&&(e[J]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Ke(e,t=new Set){let n,r,a,i;if(n=e!=null&&e[kn])return n;if(!Nt(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,s=e.length;o<s;o++)a=e[o],(r=Ke(a,t))!==a&&(e[o]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let l=0,f=o.length;l<f;l++)i=o[l],!s[i].get&&(a=e[i],(r=Ke(a,t))!==a&&(e[i]=r))}return e}function Hn(e){let t=e[qe];return t||Object.defineProperty(e,qe,{value:t={}}),t}function xn(e,t,n){return e[t]||(e[t]=Ra(n))}function xl(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===J||t===qe||t===kl||(delete n.value,delete n.writable,n.get=()=>e[J][t]),n}function La(e){if(Yr()){const t=Hn(e);(t._||(t._=Ra()))()}}function Sl(e){return La(e),Reflect.ownKeys(e)}function Ra(e){const[t,n]=q(e,{equals:!1,internal:!0});return t.$=n,t}const Al={get(e,t,n){if(t===kn)return e;if(t===J)return n;if(t===Zt)return La(e),n;const r=Hn(e),a=r.hasOwnProperty(t);let i=a?r[t]():e[t];if(t===qe||t==="__proto__")return i;if(!a){const o=Object.getOwnPropertyDescriptor(e,t);Yr()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(i=xn(r,t,i)())}return Nt(i)?Ta(i):i},has(e,t){return t===kn||t===J||t===Zt||t===qe||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Sl,getOwnPropertyDescriptor:xl};function Pt(e,t,n,r=!1){if(!r&&e[t]===n)return;const a=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let o=Hn(e),s;(s=xn(o,t,a))&&s.$(()=>n),Array.isArray(e)&&e.length!==i&&(s=xn(o,"length",i))&&s.$(e.length),(s=o._)&&s.$()}function Ma(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const a=n[r];Pt(e,a,t[a])}}function Cl(e,t){if(typeof t=="function"&&(t=t(e)),t=Ke(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const a=t[n];e[n]!==a&&Pt(e,n,a)}Pt(e,"length",r)}else Ma(e,t)}function Me(e,t,n=[]){let r,a=e;if(t.length>1){r=t.shift();const o=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let l=0;l<r.length;l++)Me(e,[r[l]].concat(t),n);return}else if(s&&o==="function"){for(let l=0;l<e.length;l++)r(e[l],l)&&Me(e,[l].concat(t),n);return}else if(s&&o==="object"){const{from:l=0,to:f=e.length-1,by:c=1}=r;for(let u=l;u<=f;u+=c)Me(e,[u].concat(t),n);return}else if(t.length>1){Me(e[r],t,[r].concat(n));return}a=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(a,n),i===a)||r===void 0&&i==null||(i=Ke(i),r===void 0||Nt(a)&&Nt(i)&&!Array.isArray(i)?Ma(a,i):Pt(e,r,i))}function $l(...[e,t]){const n=Ke(e||{}),r=Array.isArray(n),a=Ta(n);function i(...o){Ba(()=>{r&&o.length===1?Cl(n,o[0]):Me(n,o)})}return[a,i]}const za="app-settings",Rr={durations:{longBreak:10,pomodoro:25,shortBreak:5}},El=()=>{const e=globalThis.localStorage.getItem(za);if(!e)return Rr;let t;try{t=JSON.parse(e)}catch(n){console.error(n),t=Rr}return t},[Gn,Jt]=$l(El()),Ol=()=>{Fe(()=>{globalThis.localStorage.setItem(za,JSON.stringify(Gn))})},Nl=S({textAlign:"center",paddingBlockEnd:48,fontWeight:500,fontSize:"7rem"}),Pl=S({display:"flex",gap:20,justifyContent:"center"}),Vn={padding:"16px 32px",border:"none",cursor:"pointer",color:"#fff",borderRadius:4,fontWeight:700,fontSize:"1.4rem",transition:"background-color 200ms ease",":focus":{outline:"2px solid #339af0",outlineOffset:2},":disabled":{cursor:"not-allowed",backgroundColor:"lightgrey",color:"darkgray"}},_l=S({...Vn,backgroundColor:"hsl(131, 51%, 29%)",":not(:disabled):hover":{backgroundColor:"hsl(131, 51%, 25%)"}}),Il=S({...Vn,backgroundColor:"hsl(42, 95%, 37%)",":not(:disabled):hover":{backgroundColor:"hsl(42, 95%, 33%)"}}),Tl=S({...Vn,backgroundColor:"hsl(0, 94%, 38%)",":not(:disabled):hover":{backgroundColor:"hsl(0, 94%, 34%)"}}),Mr=e=>e.toString().padStart(2,"0"),Ll=e=>{const t=Math.floor(e/60),n=e-t*60;return`${Mr(t)}:${Mr(n)}`},Rl=e=>({stopWorkerCounter(){const t={type:"stop"};e.postMessage(t)},startWorkerCounter(t){const n={type:"start",time:t};e.postMessage(n)}}),Ml=L('<div data-testid="remainingTime"></div>'),zl=L("<div><button>Reset</button></div>"),Dl=L("<button>Start</button>"),jl=L("<button>Pause</button>"),Da=new Worker(new URL("/pomodoro/assets/worker-b3a0bc9e.js",self.location)),{startWorkerCounter:Fl,stopWorkerCounter:Wl}=Rl(Da),Bl=e=>{const t=()=>Gn.durations[wn()]*60,[n,r]=q(t()),a=U(()=>ce()==="stopped"&&n()>0),i=U(()=>ce()==="stopped"),o=U(()=>ce()==="running"&&n()>0),s=()=>{Fl(a()?n():t()),Lr("running")},l=()=>{Wl(),Lr("stopped")},f=()=>{r(t()),l()},c=()=>{Da.onmessage=({data:d})=>{var m;r(d.newTime),d.newTime===0&&(l(),(m=e.onComplete)==null||m.call(e))}},u=()=>{r(t())};return Fe(c),Fe(u),[(()=>{const d=Ml.cloneNode(!0);return k(d,()=>Ll(n())),N(()=>O(d,Nl)),d})(),(()=>{const d=zl.cloneNode(!0),m=d.firstChild;return k(d,(()=>{const p=U(()=>!!i());return()=>p()&&(()=>{const h=Dl.cloneNode(!0);return h.$$click=s,N(w=>{const y=_l,b=n()===0;return y!==w._v$4&&O(h,w._v$4=y),b!==w._v$5&&(h.disabled=w._v$5=b),w},{_v$4:void 0,_v$5:void 0}),h})()})(),m),k(d,(()=>{const p=U(()=>!!o());return()=>p()&&(()=>{const h=jl.cloneNode(!0);return h.$$click=l,N(()=>O(h,Il)),h})()})(),m),m.$$click=f,N(p=>{const h=Pl,w=Tl,y=ce()==="running";return h!==p._v$&&O(d,p._v$=h),w!==p._v$2&&O(m,p._v$2=w),y!==p._v$3&&(m.disabled=p._v$3=y),p},{_v$:void 0,_v$2:void 0,_v$3:void 0}),d})()]};Ze(["click"]);const Qt={pomodoro:{text:"Pomodoro",color:"hsl(209, 75%, 38%)"},shortBreak:{text:"Short break",color:"hsl(131, 51%, 29%)"},longBreak:{text:"Long break",color:"hsl(288, 54%, 40%)"}},Yl=S({display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:8}),zr=S({fontSize:"1.8rem",fontWeight:"bold"}),Ul=L("<div></div>"),Hl=L("<span></span>"),Dr="counter-select",Gl=e=>{const[t,n]=q(!1),r=()=>n(i=>!i),a=U(()=>Ot.map((i,o)=>({label:`${o+1}. ${Qt[i].text}`,value:o.toString()})));if(Ee()<0||Ee()+1>Ot.length)throw new Error("Invalid currentCounterIndex value");return(()=>{const i=Ul.cloneNode(!0);return k(i,A(Kr,{get class(){return zr},get component(){return t()?"label":"span"},get for(){return t()?Dr:void 0},children:"Current timer:"}),null),k(i,(()=>{const o=U(()=>!!t());return()=>o()?A(yl,{id:Dr,get disabled(){return ce()!=="stopped"},get value(){return Ee().toString()},onChange:({currentTarget:s})=>{yn(parseInt(s.value))},get options(){return a()}}):(()=>{const s=Hl.cloneNode(!0);return k(s,()=>` ${Qt[wn()].text}`),N(l=>{const f=zr,c=Qt[wn()].color;return f!==l._v$&&O(s,l._v$=f),c!==l._v$2&&s.style.setProperty("color",l._v$2=c),l},{_v$:void 0,_v$2:void 0}),s})()})(),null),k(i,A(Bn,{get["aria-label"](){return t()?"close counter editing":"edit counter type"},get iconName(){return t()?"close":"pencil"},size:30,onClick:r}),null),N(()=>O(i,ge(e.className,Yl))),i})()},Vl=Wt(Gl),Xl="2.4.0",ql=S({borderBlockStart:"1px solid lightgrey",paddingBlock:16}),Kl=S({display:"flex",alignItems:"center"}),Jl=S({marginInlineStart:"auto"}),Ql=L("<span>App version: </span>"),Zl=L('<a target="blank" href="https://github.com/MkMan/pomodoro" title="Source code"></a>'),ec=L("<footer></footer>"),tc=()=>(()=>{const e=ec.cloneNode(!0);return k(e,A(Yn,{get className(){return Kl},maxWidth:600,get children(){return[(()=>{const t=Ql.cloneNode(!0);return t.firstChild,k(t,Xl,null),t})(),(()=>{const t=Zl.cloneNode(!0);return k(t,A(Wn,{size:15,iconName:"code"})),N(()=>O(t,Jl)),t})()]}})),N(()=>O(e,ql)),e})(),nc=S({display:"flex",columnGap:10,alignItems:"center"}),rc=S({borderBottom:"1px solid lightgrey"}),ac=L("<div></div>"),ic=L("<header></header>"),oc=e=>(()=>{const t=ic.cloneNode(!0);return k(t,A(Yn,{maxWidth:600,get children(){const n=ac.cloneNode(!0);return k(n,A(Bn,{"aria-label":"settings menu",iconName:"bars",get onClick(){return e.onSettingsClick},size:30}),null),k(n,A(Un,{size:"3rem",children:"Pomodoro"}),null),N(()=>O(n,nc)),n}})),N(()=>O(t,rc)),t})(),sc="modulepreload",lc=function(e){return"/pomodoro/"+e},jr={},cc=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lc(i),i in jr)return;jr[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const u=a[c];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":sc,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,u)=>{f.addEventListener("load",c),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function fc(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisteredSW:i,onRegisterError:o}=e;let s,l,f;const c=async(d=!0)=>{await l,await(f==null?void 0:f())};async function u(){if("serviceWorker"in navigator){const{Workbox:d}=await cc(()=>import("./workbox-window.prod.es5-295a6886.js"),[]);s=new d("/pomodoro/sw.js",{scope:"/pomodoro/",type:"classic"}),f=async()=>{await(s==null?void 0:s.messageSkipWaiting())};{let m=!1;const p=()=>{m=!0,s==null||s.addEventListener("controlling",h=>{h.isUpdate&&window.location.reload()}),n==null||n()};s.addEventListener("installed",h=>{typeof h.isUpdate>"u"?typeof h.isExternal<"u"?h.isExternal?p():!m&&(r==null||r()):h.isExternal?window.location.reload():!m&&(r==null||r()):h.isUpdate||r==null||r()}),s.addEventListener("waiting",p),s.addEventListener("externalwaiting",p)}s.register({immediate:t}).then(m=>{i?i("/pomodoro/sw.js",m):a==null||a(m)}).catch(m=>{o==null||o(m)})}}return l=u(),c}function uc(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisteredSW:i,onRegisterError:o}=e,[s,l]=q(!1),[f,c]=q(!1),u=fc({immediate:t,onOfflineReady(){c(!0),r==null||r()},onNeedRefresh(){l(!0),n==null||n()},onRegistered:a,onRegisteredSW:i,onRegisterError:o});return{needRefresh:[s,l],offlineReady:[f,c],updateServiceWorker:u}}const dc=S({padding:0,margin:0,width:0,height:0}),mc=S({position:"fixed",right:0,bottom:0,margin:16,padding:16,border:"1px solid #8885",borderRadius:4,zIndex:1,textAlign:"left",boxShadow:"3px 4px 5px 0 #8885",backgroundColor:"white"}),gc=S({marginBottom:8,fontSize:"1.2rem",fontWeight:"bold"}),Fr=S({border:"1px solid #8885",outline:"none",marginRight:5,borderRadius:2,padding:"3px 10px",cursor:"pointer"}),hc=L("<button>Reload</button>"),vc=L("<div><div><span>App ready to work offline</span></div><button>Close</button></div>"),pc=L("<div></div>"),bc=()=>{const{needRefresh:[e,t],updateServiceWorker:n}=uc({onRegistered(a){console.log(`SW Registered: ${a}`)},onRegisterError(a){console.error("SW registration error",a)}}),r=()=>{t(!1)};return(()=>{const a=pc.cloneNode(!0);return k(a,A(nn,{get when(){return e()},get children(){const i=vc.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return k(i,A(nn,{get when(){return e()},get children(){const l=hc.cloneNode(!0);return l.$$click=()=>n(!0),N(()=>O(l,Fr)),l}}),s),s.$$click=()=>r(),N(l=>{const f=mc,c=gc,u=Fr;return f!==l._v$&&O(i,l._v$=f),c!==l._v$2&&O(o,l._v$2=c),u!==l._v$3&&O(s,l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i}})),N(()=>O(a,dc)),a})()};Ze(["click"]);const yc=L("<section></section>"),wc=e=>{const t=Gn.durations,n={isRequired:!0,mb:16,type:"number",min:0};return(()=>{const r=yc.cloneNode(!0);return k(r,A(Un,{level:3,mb:16,children:"Durations"}),null),k(r,A(Kt,fe(n,{get disabled(){return ce()!=="stopped"},get error(){return t.pomodoro<=0&&"Pomodoro duration must be set"},label:"Pomodoro",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Jt("durations","pomodoro",i)},get value(){return t.pomodoro===0?"":t.pomodoro}})),null),k(r,A(Kt,fe(n,{get disabled(){return ce()!=="stopped"},get error(){return t.shortBreak<=0&&"Short break duration must be set"},label:"Short break",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Jt("durations","shortBreak",i)},get value(){return t.shortBreak===0?"":t.shortBreak}})),null),k(r,A(Kt,fe(n,{get disabled(){return ce()!=="stopped"},get error(){return t.longBreak<=0&&"Long break duration must be set"},label:"Long break",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Jt("durations","longBreak",i)},get value(){return t.longBreak===0?"":t.longBreak}})),null),N(()=>It(r,"data-testid",e.dataTestId)),r})()},kc=S({display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}),xc=S({flex:"1"}),Sc="/pomodoro/assets/alarm-1-42bf15fd.mp3",Ac={alarm1:Sc},Cc=()=>new Audio(Ac.alarm1),$c=L("<div><main></main></div>"),Ec=()=>{Ol();const e=Cc(),[t,n]=q(!1);return(()=>{const r=$c.cloneNode(!0),a=r.firstChild;return k(r,A(bc,{}),a),k(r,A(oc,{onSettingsClick:()=>n(!0)}),a),k(a,A(Yn,{maxWidth:600,pt:16,get children(){return[A(Vl,{pb:32,pt:32}),A(Bl,{onComplete:()=>{e.play().catch(console.error),wl()}})]}})),k(r,A(rl,{closeIconLabel:"close settings menu",get heading(){return A(Un,{level:2,shouldAutoFocus:!0,children:"Settings"})},get isOpen(){return t()},onClose:()=>n(!1),get children(){return A(wc,{dataTestId:"appSettings"})}}),null),k(r,A(tc,{}),null),N(i=>{const o=kc,s=xc;return o!==i._v$&&O(r,i._v$=o),s!==i._v$2&&O(a,i._v$2=s),i},{_v$:void 0,_v$2:void 0}),r})()};ai(()=>A(Ec,{}),document.getElementById("root"));
