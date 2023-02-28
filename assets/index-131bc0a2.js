(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const j={};function za(e){j.context=e}const Da=(e,t)=>e===t,K=Symbol("solid-proxy"),Zt=Symbol("solid-track"),yt={equals:Da};let Dr=Yr;const he=1,wt=2,jr={owned:null,cleanups:null,context:null,owner:null};var Y=null;let be=null,R=null,U=null,ne=null,kn=0;function ze(e,t){const n=R,r=Y,a=e.length===0,i=a?jr:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=a?e:()=>e(()=>xe(()=>Pt(i)));Y=i,R=null;try{return _e(o,!0)}finally{R=n,Y=r}}function te(e,t){t=t?Object.assign({},yt,t):yt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=a=>(typeof a=="function"&&(a=a(n.value)),Wr(n,a));return[Br.bind(n),r]}function N(e,t,n){const r=Sn(e,t,!1,he);Je(r)}function Fe(e,t,n){Dr=Wa;const r=Sn(e,t,!1,he);r.user=!0,ne?ne.push(r):Je(r)}function H(e,t,n){n=n?Object.assign({},yt,n):yt;const r=Sn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Je(r),Br.bind(r)}function ja(e){return _e(e,!1)}function xe(e){if(R===null)return e();const t=R;R=null;try{return e()}finally{R=t}}function en(e){return Y===null||(Y.cleanups===null?Y.cleanups=[e]:Y.cleanups.push(e)),e}function Fr(){return R}function Br(){const e=be;if(this.sources&&(this.state||e))if(this.state===he||e)Je(this);else{const t=U;U=null,_e(()=>kt(this),!1),U=t}if(R){const t=this.observers?this.observers.length:0;R.sources?(R.sources.push(this),R.sourceSlots.push(t)):(R.sources=[this],R.sourceSlots=[t]),this.observers?(this.observers.push(R),this.observerSlots.push(R.sources.length-1)):(this.observers=[R],this.observerSlots=[R.sources.length-1])}return this.value}function Wr(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&_e(()=>{for(let a=0;a<e.observers.length;a+=1){const i=e.observers[a],o=be&&be.running;o&&be.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?U.push(i):ne.push(i),i.observers&&Hr(i)),o||(i.state=he)}if(U.length>1e6)throw U=[],new Error},!1)),t}function Je(e){if(!e.fn)return;Pt(e);const t=Y,n=R,r=kn;R=Y=e,Fa(e,e.value,r),R=n,Y=t}function Fa(e,t,n){let r;try{r=e.fn(t)}catch(a){e.pure&&(e.state=he,e.owned&&e.owned.forEach(Pt),e.owned=null),Ur(a)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Wr(e,r):e.value=r,e.updatedAt=n)}function Sn(e,t,n,r=he,a){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Y,context:null,pure:n};return Y===null||Y!==jr&&(Y.owned?Y.owned.push(i):Y.owned=[i]),i}function xt(e){const t=be;if(e.state===0||t)return;if(e.state===wt||t)return kt(e);if(e.suspense&&xe(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<kn);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===he||t)Je(e);else if(e.state===wt||t){const a=U;U=null,_e(()=>kt(e,n[0]),!1),U=a}}function _e(e,t){if(U)return e();let n=!1;t||(U=[]),ne?n=!0:ne=[],kn++;try{const r=e();return Ba(n),r}catch(r){n||(ne=null),U=null,Ur(r)}}function Ba(e){if(U&&(Yr(U),U=null),e)return;const t=ne;ne=null,t.length&&_e(()=>Dr(t),!1)}function Yr(e){for(let t=0;t<e.length;t++)xt(e[t])}function Wa(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:xt(r)}for(j.context&&za(),t=0;t<n;t++)xt(e[t])}function kt(e,t){const n=be;e.state=0;for(let r=0;r<e.sources.length;r+=1){const a=e.sources[r];a.sources&&(a.state===he||n?a!==t&&xt(a):(a.state===wt||n)&&kt(a,t))}}function Hr(e){const t=be;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=wt,r.pure?U.push(r):ne.push(r),r.observers&&Hr(r))}}function Pt(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),a=n.observers;if(a&&a.length){const i=a.pop(),o=n.observerSlots.pop();r<a.length&&(i.sourceSlots[o]=r,a[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Pt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ya(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ur(e){throw e=Ya(e),e}const Ha=Symbol("fallback");function Xn(e){for(let t=0;t<e.length;t++)e[t]()}function Ua(e,t,n={}){let r=[],a=[],i=[],o=0,s=t.length>1?[]:null;return en(()=>Xn(i)),()=>{let l=e()||[],f,c;return l[Zt],xe(()=>{let d=l.length,g,p,v,w,y,b,x,P,O;if(d===0)o!==0&&(Xn(i),i=[],r=[],a=[],o=0,s&&(s=[])),n.fallback&&(r=[Ha],a[0]=ze(z=>(i[0]=z,n.fallback())),o=1);else if(o===0){for(a=new Array(d),c=0;c<d;c++)r[c]=l[c],a[c]=ze(u);o=d}else{for(v=new Array(d),w=new Array(d),s&&(y=new Array(d)),b=0,x=Math.min(o,d);b<x&&r[b]===l[b];b++);for(x=o-1,P=d-1;x>=b&&P>=b&&r[x]===l[P];x--,P--)v[P]=a[x],w[P]=i[x],s&&(y[P]=s[x]);for(g=new Map,p=new Array(P+1),c=P;c>=b;c--)O=l[c],f=g.get(O),p[c]=f===void 0?-1:f,g.set(O,c);for(f=b;f<=x;f++)O=r[f],c=g.get(O),c!==void 0&&c!==-1?(v[c]=a[f],w[c]=i[f],s&&(y[c]=s[f]),c=p[c],g.set(O,c)):i[f]();for(c=b;c<d;c++)c in v?(a[c]=v[c],i[c]=w[c],s&&(s[c]=y[c],s[c](c))):a[c]=ze(u);a=a.slice(0,o=d),r=l.slice(0)}return a});function u(d){if(i[c]=d,s){const[g,p]=te(c);return s[c]=p,t(l[c],g)}return t(l[c])}}}function E(e,t){return xe(()=>e(t||{}))}function rt(){return!0}const tn={get(e,t,n){return t===K?n:e.get(t)},has(e,t){return t===K?!0:e.has(t)},set:rt,deleteProperty:rt,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:rt,deleteProperty:rt}},ownKeys(e){return e.keys()}};function Yt(e){return(e=typeof e=="function"?e():e)?e:{}}function fe(...e){let t=!1;for(let r=0;r<e.length;r++){const a=e[r];t=t||!!a&&K in a,e[r]=typeof a=="function"?(t=!0,H(a)):a}if(t)return new Proxy({get(r){for(let a=e.length-1;a>=0;a--){const i=Yt(e[a])[r];if(i!==void 0)return i}},has(r){for(let a=e.length-1;a>=0;a--)if(r in Yt(e[a]))return!0;return!1},keys(){const r=[];for(let a=0;a<e.length;a++)r.push(...Object.keys(Yt(e[a])));return[...new Set(r)]}},tn);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const a=Object.getOwnPropertyDescriptors(e[r]);for(const i in a)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const s=(e[o]||{})[i];if(s!==void 0)return s}}})}return n}function Qe(e,...t){const n=new Set(t.flat());if(K in e){const a=t.map(i=>new Proxy({get(o){return i.includes(o)?e[o]:void 0},has(o){return i.includes(o)&&o in e},keys(){return i.filter(o=>o in e)}},tn));return a.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},tn)),a}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(a=>!n.has(a))),t.map(a=>{const i={};for(let o=0;o<a.length;o++){const s=a[o];s in e&&Object.defineProperty(i,s,r[s]?r[s]:{get(){return e[s]},set(){return!0},enumerable:!0})}return i})}function Ga(e){const t="fallback"in e&&{fallback:()=>e.fallback};return H(Ua(()=>e.each,e.children,t||void 0))}function Xa(e){let t=!1;const n=e.keyed,r=H(()=>e.when,void 0,{equals:(a,i)=>t?a===i:!a==!i});return H(()=>{const a=r();if(a){const i=e.children,o=typeof i=="function"&&i.length>0;return t=n||o,o?xe(()=>i(a)):i}return e.fallback},void 0,void 0)}const Va=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qa=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Va]),Ka=new Set(["innerHTML","textContent","innerText","children"]),Ja=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Vn=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Qa=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Za=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ei={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ti(e,t,n){let r=n.length,a=t.length,i=r,o=0,s=0,l=t[a-1].nextSibling,f=null;for(;o<a||s<i;){if(t[o]===n[s]){o++,s++;continue}for(;t[a-1]===n[i-1];)a--,i--;if(a===o){const c=i<r?s?n[s-1].nextSibling:n[i-s]:l;for(;s<i;)e.insertBefore(n[s++],c)}else if(i===s)for(;o<a;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[s]===t[a-1]){const c=t[--a].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[a]=n[i]}else{if(!f){f=new Map;let u=s;for(;u<i;)f.set(n[u],u++)}const c=f.get(t[o]);if(c!=null)if(s<c&&c<i){let u=o,d=1,g;for(;++u<a&&u<i&&!((g=f.get(t[u]))==null||g!==c+d);)d++;if(d>c-s){const p=t[o];for(;s<c;)e.insertBefore(n[s++],p)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const qn="_$DX_DELEGATE";function ni(e,t,n,r={}){let a;return ze(i=>{a=i,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{a(),t.textContent=""}}function M(e,t,n){const r=document.createElement("template");r.innerHTML=e;let a=r.content.firstChild;return n&&(a=a.firstChild),a}function _t(e,t=window.document){const n=t[qn]||(t[qn]=new Set);for(let r=0,a=e.length;r<a;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,fi))}}function It(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ri(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function I(e,t){t==null?e.removeAttribute("class"):e.className=t}function ai(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const a=n[0];e.addEventListener(t,n[0]=i=>a.call(e,n[1],i))}else e.addEventListener(t,n)}function ii(e,t,n={}){const r=Object.keys(t||{}),a=Object.keys(n);let i,o;for(i=0,o=a.length;i<o;i++){const s=a[i];!s||s==="undefined"||t[s]||(Jn(e,s,!1),delete n[s])}for(i=0,o=r.length;i<o;i++){const s=r[i],l=!!t[s];!s||s==="undefined"||n[s]===l||!l||(Jn(e,s,!0),n[s]=l)}return n}function oi(e,t,n){if(!t)return n?It(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let a,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)a=t[i],a!==n[i]&&(r.setProperty(i,a),n[i]=a);return n}function Tt(e,t={},n,r){const a={};return r||N(()=>a.children=Oe(e,t.children,a.children)),N(()=>t.ref&&t.ref(e)),N(()=>si(e,t,n,!0,a,!0)),a}function Kn(e,t,n){return xe(()=>e(t,n))}function k(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Oe(e,t,r,n);N(a=>Oe(e,t(),a,n),r)}function si(e,t,n,r,a={},i=!1){t||(t={});for(const o in a)if(!(o in t)){if(o==="children")continue;a[o]=Qn(e,o,null,a[o],n,i)}for(const o in t){if(o==="children"){r||Oe(e,t.children);continue}const s=t[o];a[o]=Qn(e,o,s,a[o],n,i)}}function li(e){let t,n;return!j.context||!(t=j.registry.get(n=ui()))?e.cloneNode(!0):(j.completed&&j.completed.add(t),j.registry.delete(n),t)}function ci(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Jn(e,t,n){const r=t.trim().split(/\s+/);for(let a=0,i=r.length;a<i;a++)e.classList.toggle(r[a],n)}function Qn(e,t,n,r,a,i){let o,s,l;if(t==="style")return oi(e,n,r);if(t==="classList")return ii(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),c=Qa.has(f);if(!c&&r){const u=Array.isArray(r)?r[0]:r;e.removeEventListener(f,u)}(c||n)&&(ai(e,f,n,c),c&&_t([f]))}else if((l=Ka.has(t))||!a&&(Vn[t]||(s=qa.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?I(e,n):o&&!s&&!l?e[ci(t)]=n:e[Vn[t]||t]=n;else{const f=a&&t.indexOf(":")>-1&&ei[t.split(":")[0]];f?ri(e,f,t,n):It(e,Ja[t]||t,n)}return n}function fi(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),j.registry&&!j.done&&(j.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let a=r.nextSibling;r.remove(),r=a}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const a=n[`${t}Data`];if(a!==void 0?r.call(n,a,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Oe(e,t,n,r,a){for(j.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(j.context)return n;if(i==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=ke(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(j.context)return n;n=ke(e,n,r)}else{if(i==="function")return N(()=>{let s=t();for(;typeof s=="function";)s=s();n=Oe(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],l=n&&Array.isArray(n);if(nn(s,t,n,a))return N(()=>n=Oe(e,s,n,r,!0)),()=>n;if(j.context){if(!s.length)return n;for(let f=0;f<s.length;f++)if(s[f].parentNode)return n=s}if(s.length===0){if(n=ke(e,n,r),o)return n}else l?n.length===0?Zn(e,s,r):ti(e,n,s):(n&&ke(e),Zn(e,s));n=s}else if(t instanceof Node){if(j.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=ke(e,n,r,t);ke(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function nn(e,t,n,r){let a=!1;for(let i=0,o=t.length;i<o;i++){let s=t[i],l=n&&n[i];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))a=nn(e,s,l)||a;else if(typeof s=="function")if(r){for(;typeof s=="function";)s=s();a=nn(e,Array.isArray(s)?s:[s],Array.isArray(l)?l:[l])||a}else e.push(s),a=!0;else{const f=String(s);l&&l.nodeType===3&&l.data===f?e.push(l):e.push(document.createTextNode(f))}}return a}function Zn(e,t,n=null){for(let r=0,a=t.length;r<a;r++)e.insertBefore(t[r],n)}function ke(e,t,n,r){if(n===void 0)return e.textContent="";const a=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(a!==s){const l=s.parentNode===e;!i&&!o?l?e.replaceChild(a,s):e.insertBefore(a,n):l&&s.remove()}else i=!0}}else e.insertBefore(a,n);return[a]}function ui(){const e=j.context;return`${e.id}${e.count++}`}const di="http://www.w3.org/2000/svg";function Gr(e,t=!1){return t?document.createElementNS(di,e):document.createElement(e)}function mi(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function a(){if(j.context){const[i,o]=te(!1);return queueMicrotask(()=>o(!0)),()=>i()&&e.children}else return()=>e.children}if(r instanceof HTMLHeadElement){const[i,o]=te(!1),s=()=>o(!0);ze(l=>k(r,()=>i()?l():a()(),null)),en(()=>{j.context?queueMicrotask(s):s()})}else{const i=Gr(e.isSVG?"g":"div",e.isSVG),o=t&&i.attachShadow?i.attachShadow({mode:"open"}):i;Object.defineProperty(i,"_$host",{get(){return n.parentNode},configurable:!0}),k(o,a()),r.appendChild(i),e.ref&&e.ref(i),en(()=>r.removeChild(i))}return n}function Xr(e){const[t,n]=Qe(e,["component"]),r=H(()=>t.component);return H(()=>{const a=r();switch(typeof a){case"function":return xe(()=>a(n));case"string":const i=Za.has(a),o=j.context?li():Gr(a,i);return Tt(o,n,i),o}})}function er(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?er(Object(n),!0).forEach(function(r){F(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):er(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function St(e){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St(e)}function gi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hi(e,t,n){return t&&tr(e.prototype,t),n&&tr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function An(e,t){return pi(e)||yi(e,t)||Vr(e,t)||xi()}function Ze(e){return vi(e)||bi(e)||Vr(e)||wi()}function vi(e){if(Array.isArray(e))return rn(e)}function pi(e){if(Array.isArray(e))return e}function bi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Vr(e,t){if(e){if(typeof e=="string")return rn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rn(e,t)}}function rn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nr=function(){},Cn={},qr={},Kr=null,Jr={mark:nr,measure:nr};try{typeof window<"u"&&(Cn=window),typeof document<"u"&&(qr=document),typeof MutationObserver<"u"&&(Kr=MutationObserver),typeof performance<"u"&&(Jr=performance)}catch{}var ki=Cn.navigator||{},rr=ki.userAgent,ar=rr===void 0?"":rr,ue=Cn,T=qr,ir=Kr,at=Jr;ue.document;var oe=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Qr=~ar.indexOf("MSIE")||~ar.indexOf("Trident/"),it,ot,st,lt,ct,re="___FONT_AWESOME___",an=16,Zr="fa",ea="svg-inline--fa",ye="data-fa-i2svg",on="data-fa-pseudo-element",Si="data-fa-pseudo-element-pending",$n="data-prefix",En="data-icon",or="fontawesome-i2svg",Ai="async",Ci=["HTML","HEAD","STYLE","SCRIPT"],ta=function(){try{return!0}catch{return!1}}(),_="classic",L="sharp",On=[_,L];function et(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[_]}})}var Be=et((it={},F(it,_,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),F(it,L,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),it)),We=et((ot={},F(ot,_,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F(ot,L,{solid:"fass",regular:"fasr"}),ot)),Ye=et((st={},F(st,_,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F(st,L,{fass:"fa-solid",fasr:"fa-regular"}),st)),$i=et((lt={},F(lt,_,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F(lt,L,{"fa-solid":"fass","fa-regular":"fasr"}),lt)),Ei=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,na="fa-layers-text",Oi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ni=et((ct={},F(ct,_,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F(ct,L,{900:"fass",400:"fasr"}),ct)),ra=[1,2,3,4,5,6,7,8,9,10],Pi=ra.concat([11,12,13,14,15,16,17,18,19,20]),_i=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ve={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},He=new Set;Object.keys(We[_]).map(He.add.bind(He));Object.keys(We[L]).map(He.add.bind(He));var Ii=[].concat(On,Ze(He),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ve.GROUP,ve.SWAP_OPACITY,ve.PRIMARY,ve.SECONDARY]).concat(ra.map(function(e){return"".concat(e,"x")})).concat(Pi.map(function(e){return"w-".concat(e)})),De=ue.FontAwesomeConfig||{};function Ti(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Li(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Mi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Mi.forEach(function(e){var t=An(e,2),n=t[0],r=t[1],a=Li(Ti(n));a!=null&&(De[r]=a)})}var aa={styleDefault:"solid",familyDefault:"classic",cssPrefix:Zr,replacementClass:ea,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};De.familyPrefix&&(De.cssPrefix=De.familyPrefix);var Ne=m(m({},aa),De);Ne.autoReplaceSvg||(Ne.observeMutations=!1);var h={};Object.keys(aa).forEach(function(e){Object.defineProperty(h,e,{enumerable:!0,set:function(n){Ne[e]=n,je.forEach(function(r){return r(h)})},get:function(){return Ne[e]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(t){Ne.cssPrefix=t,je.forEach(function(n){return n(h)})},get:function(){return Ne.cssPrefix}});ue.FontAwesomeConfig=h;var je=[];function Ri(e){return je.push(e),function(){je.splice(je.indexOf(e),1)}}var le=an,Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zi(e){if(!(!e||!oe)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return T.head.insertBefore(t,r),e}}var Di="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ue(){for(var e=12,t="";e-- >0;)t+=Di[Math.random()*62|0];return t}function Ie(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Nn(e){return e.classList?Ie(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ia(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ji(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ia(e[n]),'" ')},"").trim()}function Lt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Pn(e){return e.size!==Z.size||e.x!==Z.x||e.y!==Z.y||e.rotate!==Z.rotate||e.flipX||e.flipY}function Fi(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Bi(e){var t=e.transform,n=e.width,r=n===void 0?an:n,a=e.height,i=a===void 0?an:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Qr?l+="translate(".concat(t.x/le-r/2,"em, ").concat(t.y/le-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/le,"em), calc(-50% + ").concat(t.y/le,"em)) "):l+="translate(".concat(t.x/le,"em, ").concat(t.y/le,"em) "),l+="scale(".concat(t.size/le*(t.flipX?-1:1),", ").concat(t.size/le*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wi=`:root, :host {
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
}`;function oa(){var e=Zr,t=ea,n=h.cssPrefix,r=h.replacementClass,a=Wi;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var sr=!1;function Ht(){h.autoAddCss&&!sr&&(zi(oa()),sr=!0)}var Yi={mixout:function(){return{dom:{css:oa,insertCss:Ht}}},hooks:function(){return{beforeDOMElementCreation:function(){Ht()},beforeI2svg:function(){Ht()}}}},ae=ue||{};ae[re]||(ae[re]={});ae[re].styles||(ae[re].styles={});ae[re].hooks||(ae[re].hooks={});ae[re].shims||(ae[re].shims=[]);var q=ae[re],sa=[],Hi=function e(){T.removeEventListener("DOMContentLoaded",e),At=1,sa.map(function(t){return t()})},At=!1;oe&&(At=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),At||T.addEventListener("DOMContentLoaded",Hi));function Ui(e){oe&&(At?setTimeout(e,0):sa.push(e))}function tt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ia(e):"<".concat(t," ").concat(ji(r),">").concat(i.map(tt).join(""),"</").concat(t,">")}function lr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Gi=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ut=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Gi(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Xi(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function sn(e){var t=Xi(e);return t.length===1?t[0].toString(16):null}function Vi(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function cr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ln(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=cr(t);typeof q.hooks.addPack=="function"&&!a?q.hooks.addPack(e,cr(t)):q.styles[e]=m(m({},q.styles[e]||{}),i),e==="fas"&&ln("fa",t)}var ft,ut,dt,Se=q.styles,qi=q.shims,Ki=(ft={},F(ft,_,Object.values(Ye[_])),F(ft,L,Object.values(Ye[L])),ft),_n=null,la={},ca={},fa={},ua={},da={},Ji=(ut={},F(ut,_,Object.keys(Be[_])),F(ut,L,Object.keys(Be[L])),ut);function Qi(e){return~Ii.indexOf(e)}function Zi(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Qi(a)?a:null}var ma=function(){var t=function(i){return Ut(Se,function(o,s,l){return o[l]=Ut(s,i,{}),o},{})};la=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ca=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),da=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Se||h.autoFetchSvg,r=Ut(qi,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});fa=r.names,ua=r.unicodes,_n=Mt(h.styleDefault,{family:h.familyDefault})};Ri(function(e){_n=Mt(e.styleDefault,{family:h.familyDefault})});ma();function In(e,t){return(la[e]||{})[t]}function eo(e,t){return(ca[e]||{})[t]}function pe(e,t){return(da[e]||{})[t]}function ga(e){return fa[e]||{prefix:null,iconName:null}}function to(e){var t=ua[e],n=In("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function de(){return _n}var Tn=function(){return{prefix:null,iconName:null,rest:[]}};function Mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?_:n,a=Be[r][e],i=We[r][e]||We[r][a],o=e in q.styles?e:null;return i||o||null}var fr=(dt={},F(dt,_,Object.keys(Ye[_])),F(dt,L,Object.keys(Ye[L])),dt);function Rt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},F(t,_,"".concat(h.cssPrefix,"-").concat(_)),F(t,L,"".concat(h.cssPrefix,"-").concat(L)),t),o=null,s=_;(e.includes(i[_])||e.some(function(f){return fr[_].includes(f)}))&&(s=_),(e.includes(i[L])||e.some(function(f){return fr[L].includes(f)}))&&(s=L);var l=e.reduce(function(f,c){var u=Zi(h.cssPrefix,c);if(Se[c]?(c=Ki[s].includes(c)?$i[s][c]:c,o=c,f.prefix=c):Ji[s].indexOf(c)>-1?(o=c,f.prefix=Mt(c,{family:s})):u?f.iconName=u:c!==h.replacementClass&&c!==i[_]&&c!==i[L]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var d=o==="fa"?ga(f.iconName):{},g=pe(f.prefix,f.iconName);d.prefix&&(o=null),f.iconName=d.iconName||g||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!Se.far&&Se.fas&&!h.autoFetchSvg&&(f.prefix="fas")}return f},Tn());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===L&&(Se.fass||h.autoFetchSvg)&&(l.prefix="fass",l.iconName=pe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=de()||"fas"),l}var no=function(){function e(){gi(this,e),this.definitions={}}return hi(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),ln(s,o[s]);var l=Ye[_][s];l&&ln(l,o[s]),ma()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][l]=f}),n}}]),e}(),ur=[],Ae={},Ce={},ro=Object.keys(Ce);function ao(e,t){var n=t.mixoutsTo;return ur=e,Ae={},Object.keys(Ce).forEach(function(r){ro.indexOf(r)===-1&&delete Ce[r]}),ur.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),St(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ae[o]||(Ae[o]=[]),Ae[o].push(i[o])})}r.provides&&r.provides(Ce)}),n}function cn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ae[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function we(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ae[e]||[];a.forEach(function(i){i.apply(null,n)})}function ie(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ce[e]?Ce[e].apply(null,t):void 0}function fn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||de();if(t)return t=pe(n,t)||t,lr(ha.definitions,n,t)||lr(q.styles,n,t)}var ha=new no,io=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,we("noAuto")},oo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return oe?(we("beforeI2svg",t),ie("pseudoElements2svg",t),ie("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,Ui(function(){lo({autoReplaceSvgRoot:n}),we("watch",t)})}},so={icon:function(t){if(t===null)return null;if(St(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Mt(t[0]);return{prefix:r,iconName:pe(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(h.cssPrefix,"-"))>-1||t.match(Ei))){var a=Rt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||de(),iconName:pe(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=de();return{prefix:i,iconName:pe(i,t)||t}}}},V={noAuto:io,config:h,dom:oo,parse:so,library:ha,findIconDefinition:fn,toHtml:tt},lo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?T:n;(Object.keys(q.styles).length>0||h.autoFetchSvg)&&oe&&h.autoReplaceSvg&&V.dom.i2svg({node:r})};function zt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return tt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(oe){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function co(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Pn(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Lt(m(m({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function fo(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(h.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},a),{},{id:o}),children:r}]}]}function Ln(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,d=e.watchable,g=d===void 0?!1:d,p=r.found?r:n,v=p.width,w=p.height,y=a==="fak",b=[h.replacementClass,i?"".concat(h.cssPrefix,"-").concat(i):""].filter(function(se){return u.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(u.classes).join(" "),x={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:b,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(w)})},P=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(v/w*16*.0625,"em")}:{};g&&(x.attributes[ye]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||Ue())},children:[l]}),delete x.attributes.title);var O=m(m({},x),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:m(m({},P),u.styles)}),z=r.found&&n.found?ie("generateAbstractMask",O)||{children:[],attributes:{}}:ie("generateAbstractIcon",O)||{children:[],attributes:{}},S=z.children,Wt=z.attributes;return O.children=S,O.attributes=Wt,s?fo(O):co(O)}function dr(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[ye]="");var c=m({},o.styles);Pn(a)&&(c.transform=Bi({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Lt(c);u.length>0&&(f.style=u);var d=[];return d.push({tag:"span",attributes:f,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function uo(e){var t=e.content,n=e.title,r=e.extra,a=m(m(m({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Lt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gt=q.styles;function un(e){var t=e[0],n=e[1],r=e.slice(4),a=An(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(ve.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(ve.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(ve.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var mo={found:!1,width:512,height:512};function go(e,t){!ta&&!h.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function dn(e,t){var n=t;return t==="fa"&&h.styleDefault!==null&&(t=de()),new Promise(function(r,a){if(ie("missingIconAbstract"),n==="fa"){var i=ga(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Gt[t]&&Gt[t][e]){var o=Gt[t][e];return r(un(o))}go(e,t),r(m(m({},mo),{},{icon:h.showMissingIcons&&e?ie("missingIconAbstract")||{}:{}}))})}var mr=function(){},mn=h.measurePerformance&&at&&at.mark&&at.measure?at:{mark:mr,measure:mr},Me='FA "6.3.0"',ho=function(t){return mn.mark("".concat(Me," ").concat(t," begins")),function(){return va(t)}},va=function(t){mn.mark("".concat(Me," ").concat(t," ends")),mn.measure("".concat(Me," ").concat(t),"".concat(Me," ").concat(t," begins"),"".concat(Me," ").concat(t," ends"))},Mn={begin:ho,end:va},gt=function(){};function gr(e){var t=e.getAttribute?e.getAttribute(ye):null;return typeof t=="string"}function vo(e){var t=e.getAttribute?e.getAttribute($n):null,n=e.getAttribute?e.getAttribute(En):null;return t&&n}function po(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(h.replacementClass)}function bo(){if(h.autoReplaceSvg===!0)return ht.replace;var e=ht[h.autoReplaceSvg];return e||ht.replace}function yo(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function wo(e){return T.createElement(e)}function pa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?yo:wo:n;if(typeof e=="string")return T.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(pa(o,{ceFn:r}))}),a}function xo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ht={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(pa(a),n)}),n.getAttribute(ye)===null&&h.keepOriginalSource){var r=T.createComment(xo(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Nn(n).indexOf(h.replacementClass))return ht.replace(t);var a=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===h.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return tt(s)}).join(`
`);n.setAttribute(ye,""),n.innerHTML=o}};function hr(e){e()}function ba(e,t){var n=typeof t=="function"?t:gt;if(e.length===0)n();else{var r=hr;h.mutateApproach===Ai&&(r=ue.requestAnimationFrame||hr),r(function(){var a=bo(),i=Mn.begin("mutate");e.map(a),i(),n()})}}var Rn=!1;function ya(){Rn=!0}function gn(){Rn=!1}var Ct=null;function vr(e){if(ir&&h.observeMutations){var t=e.treeCallback,n=t===void 0?gt:t,r=e.nodeCallback,a=r===void 0?gt:r,i=e.pseudoElementsCallback,o=i===void 0?gt:i,s=e.observeMutationsRoot,l=s===void 0?T:s;Ct=new ir(function(f){if(!Rn){var c=de();Ie(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!gr(u.addedNodes[0])&&(h.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&h.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&gr(u.target)&&~_i.indexOf(u.attributeName))if(u.attributeName==="class"&&vo(u.target)){var d=Rt(Nn(u.target)),g=d.prefix,p=d.iconName;u.target.setAttribute($n,g||c),p&&u.target.setAttribute(En,p)}else po(u.target)&&a(u.target)})}}),oe&&Ct.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ko(){Ct&&Ct.disconnect()}function So(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ao(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Rt(Nn(e));return a.prefix||(a.prefix=de()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=eo(a.prefix,e.innerText)||In(a.prefix,sn(e.innerText))),!a.iconName&&h.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Co(e){var t=Ie(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return h.autoA11y&&(n?t["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(r||Ue()):(t["aria-hidden"]="true",t.focusable="false")),t}function $o(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ao(e),r=n.iconName,a=n.prefix,i=n.rest,o=Co(e),s=cn("parseNodeAttributes",{},e),l=t.styleParser?So(e):[];return m({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Eo=q.styles;function wa(e){var t=h.autoReplaceSvg==="nest"?pr(e,{styleParser:!1}):pr(e);return~t.extra.classes.indexOf(na)?ie("generateLayersText",e,t):ie("generateSvgReplacementMutation",e,t)}var me=new Set;On.map(function(e){me.add("fa-".concat(e))});Object.keys(Be[_]).map(me.add.bind(me));Object.keys(Be[L]).map(me.add.bind(me));me=Ze(me);function br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!oe)return Promise.resolve();var n=T.documentElement.classList,r=function(u){return n.add("".concat(or,"-").concat(u))},a=function(u){return n.remove("".concat(or,"-").concat(u))},i=h.autoFetchSvg?me:On.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Eo));i.includes("fa")||i.push("fa");var o=[".".concat(na,":not([").concat(ye,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(ye,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Mn.begin("onTree"),f=s.reduce(function(c,u){try{var d=wa(u);d&&c.push(d)}catch(g){ta||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(d){ba(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),u(d)})})}function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wa(e).then(function(n){n&&ba([n],t)})}function No(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:fn(a||{})),e(r,m(m({},n),{},{mask:a}))}}var Po=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Z:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,u=n.title,d=u===void 0?null:u,g=n.titleId,p=g===void 0?null:g,v=n.classes,w=v===void 0?[]:v,y=n.attributes,b=y===void 0?{}:y,x=n.styles,P=x===void 0?{}:x;if(t){var O=t.prefix,z=t.iconName,S=t.icon;return zt(m({type:"icon"},t),function(){return we("beforeDOMElementCreation",{iconDefinition:t,params:n}),h.autoA11y&&(d?b["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(p||Ue()):(b["aria-hidden"]="true",b.focusable="false")),Ln({icons:{main:un(S),mask:l?un(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:z,transform:m(m({},Z),a),symbol:o,title:d,maskId:c,titleId:p,extra:{attributes:b,styles:P,classes:w}})})}},_o={mixout:function(){return{icon:No(Po)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=br,n.nodeCallback=Oo,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?T:r,i=n.callback,o=i===void 0?function(){}:i;return br(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,d=r.extra;return new Promise(function(g,p){Promise.all([dn(a,s),c.iconName?dn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=An(v,2),y=w[0],b=w[1];g([n,Ln({icons:{main:y,mask:b},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:o,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Lt(s);l.length>0&&(a.style=l);var f;return Pn(o)&&(f=ie("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Io={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return zt({type:"layer"},function(){we("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(Ze(i)).join(" ")},children:o}]})}}}},To={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return zt({type:"counter",content:n},function(){return we("beforeDOMElementCreation",{content:n,params:r}),uo({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(Ze(s))}})})}}}},Lo={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Z:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return zt({type:"text",content:n},function(){return we("beforeDOMElementCreation",{content:n,params:r}),dr({content:n,transform:m(m({},Z),i),title:s,extra:{attributes:u,styles:g,classes:["".concat(h.cssPrefix,"-layers-text")].concat(Ze(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Qr){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return h.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,dr({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Mo=new RegExp('"',"ug"),yr=[1105920,1112319];function Ro(e){var t=e.replace(Mo,""),n=Vi(t,0),r=n>=yr[0]&&n<=yr[1],a=t.length===2?t[0]===t[1]:!1;return{value:sn(a?t[0]:t),isSecondary:r||a}}function wr(e,t){var n="".concat(Si).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ie(e.children),o=i.filter(function(S){return S.getAttribute(on)===t})[0],s=ue.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Oi),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?L:_,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?We[d][l[2].toLowerCase()]:Ni[d][f],p=Ro(u),v=p.value,w=p.isSecondary,y=l[0].startsWith("FontAwesome"),b=In(g,v),x=b;if(y){var P=to(v);P.iconName&&P.prefix&&(b=P.iconName,g=P.prefix)}if(b&&!w&&(!o||o.getAttribute($n)!==g||o.getAttribute(En)!==x)){e.setAttribute(n,x),o&&e.removeChild(o);var O=$o(),z=O.extra;z.attributes[on]=t,dn(b,g).then(function(S){var Wt=Ln(m(m({},O),{},{icons:{main:S,mask:Tn()},prefix:g,iconName:x,extra:z,watchable:!0})),se=T.createElement("svg");t==="::before"?e.insertBefore(se,e.firstChild):e.appendChild(se),se.outerHTML=Wt.map(function(Ra){return tt(Ra)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function zo(e){return Promise.all([wr(e,"::before"),wr(e,"::after")])}function Do(e){return e.parentNode!==document.head&&!~Ci.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(on)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xr(e){if(oe)return new Promise(function(t,n){var r=Ie(e.querySelectorAll("*")).filter(Do).map(zo),a=Mn.begin("searchPseudoElements");ya(),Promise.all(r).then(function(){a(),gn(),t()}).catch(function(){a(),gn(),n()})})}var jo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?T:r;h.searchPseudoElements&&xr(a)}}},kr=!1,Fo={mixout:function(){return{dom:{unwatch:function(){ya(),kr=!0}}}},hooks:function(){return{bootstrap:function(){vr(cn("mutationObserverCallbacks",{}))},noAuto:function(){ko()},watch:function(n){var r=n.observeMutationsRoot;kr?gn():vr(cn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Sr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Bo={mixout:function(){return{parse:{transform:function(n){return Sr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Sr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:u,path:d};return{tag:"g",attributes:m({},g.outer),children:[{tag:"g",attributes:m({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:m(m({},r.icon.attributes),g.path)}]}]}}}},Xt={x:0,y:0,width:"100%",height:"100%"};function Ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Wo(e){return e.tag==="g"?e.children:[e]}var Yo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Rt(a.split(" ").map(function(o){return o.trim()})):Tn();return i.prefix||(i.prefix=de()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,u=o.width,d=o.icon,g=Fi({transform:l,containerWidth:u,iconWidth:f}),p={tag:"rect",attributes:m(m({},Xt),{},{fill:"white"})},v=c.children?{children:c.children.map(Ar)}:{},w={tag:"g",attributes:m({},g.inner),children:[Ar(m({tag:c.tag,attributes:m(m({},c.attributes),g.path)},v))]},y={tag:"g",attributes:m({},g.outer),children:[w]},b="mask-".concat(s||Ue()),x="clip-".concat(s||Ue()),P={tag:"mask",attributes:m(m({},Xt),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Wo(d)},P]};return r.push(O,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(b,")")},Xt)}),{children:r,attributes:a}}}},Ho={provides:function(t){var n=!1;ue.matchMedia&&(n=ue.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:m(m({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:m(m({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:m(m({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Uo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Go=[Yi,_o,Io,To,Lo,jo,Fo,Bo,Yo,Ho,Uo];ao(Go,{mixoutsTo:V});V.noAuto;V.config;var Xo=V.library;V.dom;V.parse;V.findIconDefinition;V.toHtml;var Vo=V.icon;V.layer;V.text;V.counter;var qo={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Ko={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Jo={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Qo={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Zo={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},es=Zo,ts={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};const ge=(...e)=>e.filter(Boolean).join(" ");function ns(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rs(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var as=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rs(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ns(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),W="-ms-",$t="-moz-",A="-webkit-",xa="comm",zn="rule",Dn="decl",is="@import",ka="@keyframes",os=Math.abs,Dt=String.fromCharCode,ss=Object.assign;function ls(e,t){return B(e,0)^45?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}function Sa(e){return e.trim()}function cs(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function hn(e,t){return e.indexOf(t)}function B(e,t){return e.charCodeAt(t)|0}function Ge(e,t,n){return e.slice(t,n)}function J(e){return e.length}function jn(e){return e.length}function mt(e,t){return t.push(e),e}function fs(e,t){return e.map(t).join("")}var jt=1,Pe=1,Aa=0,G=0,D=0,Te="";function Ft(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:jt,column:Pe,length:o,return:""}}function Le(e,t){return ss(Ft("",null,null,"",null,null,0),e,{length:-e.length},t)}function us(){return D}function ds(){return D=G>0?B(Te,--G):0,Pe--,D===10&&(Pe=1,jt--),D}function X(){return D=G<Aa?B(Te,G++):0,Pe++,D===10&&(Pe=1,jt++),D}function ee(){return B(Te,G)}function vt(){return G}function nt(e,t){return Ge(Te,e,t)}function Xe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ca(e){return jt=Pe=1,Aa=J(Te=e),G=0,[]}function $a(e){return Te="",e}function pt(e){return Sa(nt(G-1,vn(e===91?e+2:e===40?e+1:e)))}function ms(e){for(;(D=ee())&&D<33;)X();return Xe(e)>2||Xe(D)>3?"":" "}function gs(e,t){for(;--t&&X()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return nt(e,vt()+(t<6&&ee()==32&&X()==32))}function vn(e){for(;X();)switch(D){case e:return G;case 34:case 39:e!==34&&e!==39&&vn(D);break;case 40:e===41&&vn(e);break;case 92:X();break}return G}function hs(e,t){for(;X()&&e+D!==47+10;)if(e+D===42+42&&ee()===47)break;return"/*"+nt(t,G-1)+"*"+Dt(e===47?e:X())}function vs(e){for(;!Xe(ee());)X();return nt(e,G)}function ps(e){return $a(bt("",null,null,null,[""],e=Ca(e),0,[0],e))}function bt(e,t,n,r,a,i,o,s,l){for(var f=0,c=0,u=o,d=0,g=0,p=0,v=1,w=1,y=1,b=0,x="",P=a,O=i,z=r,S=x;w;)switch(p=b,b=X()){case 40:if(p!=108&&B(S,u-1)==58){hn(S+=$(pt(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:S+=pt(b);break;case 9:case 10:case 13:case 32:S+=ms(p);break;case 92:S+=gs(vt()-1,7);continue;case 47:switch(ee()){case 42:case 47:mt(bs(hs(X(),vt()),t,n),l);break;default:S+="/"}break;case 123*v:s[f++]=J(S)*y;case 125*v:case 59:case 0:switch(b){case 0:case 125:w=0;case 59+c:g>0&&J(S)-u&&mt(g>32?$r(S+";",r,n,u-1):$r($(S," ","")+";",r,n,u-2),l);break;case 59:S+=";";default:if(mt(z=Cr(S,t,n,f,c,a,s,x,P=[],O=[],u),i),b===123)if(c===0)bt(S,t,z,z,P,i,u,s,O);else switch(d===99&&B(S,3)===110?100:d){case 100:case 109:case 115:bt(e,z,z,r&&mt(Cr(e,z,z,0,0,a,s,x,a,P=[],u),O),a,O,u,s,r?P:O);break;default:bt(S,z,z,z,[""],O,0,s,O)}}f=c=g=0,v=y=1,x=S="",u=o;break;case 58:u=1+J(S),g=p;default:if(v<1){if(b==123)--v;else if(b==125&&v++==0&&ds()==125)continue}switch(S+=Dt(b),b*v){case 38:y=c>0?1:(S+="\f",-1);break;case 44:s[f++]=(J(S)-1)*y,y=1;break;case 64:ee()===45&&(S+=pt(X())),d=ee(),c=u=J(x=S+=vs(vt())),b++;break;case 45:p===45&&J(S)==2&&(v=0)}}return i}function Cr(e,t,n,r,a,i,o,s,l,f,c){for(var u=a-1,d=a===0?i:[""],g=jn(d),p=0,v=0,w=0;p<r;++p)for(var y=0,b=Ge(e,u+1,u=os(v=o[p])),x=e;y<g;++y)(x=Sa(v>0?d[y]+" "+b:$(b,/&\f/g,d[y])))&&(l[w++]=x);return Ft(e,t,n,a===0?zn:s,l,f,c)}function bs(e,t,n){return Ft(e,t,n,xa,Dt(us()),Ge(e,2,-2),0)}function $r(e,t,n,r){return Ft(e,t,n,Dn,Ge(e,0,r),Ge(e,r+1,-1),r)}function $e(e,t){for(var n="",r=jn(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function ys(e,t,n,r){switch(e.type){case is:case Dn:return e.return=e.return||e.value;case xa:return"";case ka:return e.return=e.value+"{"+$e(e.children,r)+"}";case zn:e.value=e.props.join(",")}return J(n=$e(e.children,r))?e.return=e.value+"{"+n+"}":""}function ws(e){var t=jn(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function xs(e){return function(t){t.root||(t=t.return)&&e(t)}}function ks(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ss=function(t,n,r){for(var a=0,i=0;a=i,i=ee(),a===38&&i===12&&(n[r]=1),!Xe(i);)X();return nt(t,G)},As=function(t,n){var r=-1,a=44;do switch(Xe(a)){case 0:a===38&&ee()===12&&(n[r]=1),t[r]+=Ss(G-1,n,r);break;case 2:t[r]+=pt(a);break;case 4:if(a===44){t[++r]=ee()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Dt(a)}while(a=X());return t},Cs=function(t,n){return $a(As(Ca(t),n))},Er=new WeakMap,$s=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Er.get(r))&&!a){Er.set(t,!0);for(var i=[],o=Cs(n,i),s=r.props,l=0,f=0;l<o.length;l++)for(var c=0;c<s.length;c++,f++)t.props[f]=i[l]?o[l].replace(/&\f/g,s[c]):s[c]+" "+o[l]}}},Es=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ea(e,t){switch(ls(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+$t+e+W+e+e;case 6828:case 4268:return A+e+W+e+e;case 6165:return A+e+W+"flex-"+e+e;case 5187:return A+e+$(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return A+e+W+"flex-item-"+$(e,/flex-|-self/,"")+e;case 4675:return A+e+W+"flex-line-pack"+$(e,/align-content|flex-|-self/,"")+e;case 5548:return A+e+W+$(e,"shrink","negative")+e;case 5292:return A+e+W+$(e,"basis","preferred-size")+e;case 6060:return A+"box-"+$(e,"-grow","")+A+e+W+$(e,"grow","positive")+e;case 4554:return A+$(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(J(e)-1-t>6)switch(B(e,t+1)){case 109:if(B(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+$t+(B(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hn(e,"stretch")?Ea($(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(B(e,t+1)!==115)break;case 6444:switch(B(e,J(e)-3-(~hn(e,"!important")&&10))){case 107:return $(e,":",":"+A)+e;case 101:return $(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(B(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+W+"$2box$3")+e}break;case 5936:switch(B(e,t+11)){case 114:return A+e+W+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+W+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+W+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return A+e+W+e+e}return e}var Os=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case Dn:t.return=Ea(t.value,t.length);break;case ka:return $e([Le(t,{value:$(t.value,"@","@"+A)})],a);case zn:if(t.length)return fs(t.props,function(i){switch(cs(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return $e([Le(t,{props:[$(i,/:(read-\w+)/,":"+$t+"$1")]})],a);case"::placeholder":return $e([Le(t,{props:[$(i,/:(plac\w+)/,":"+A+"input-$1")]}),Le(t,{props:[$(i,/:(plac\w+)/,":"+$t+"$1")]}),Le(t,{props:[$(i,/:(plac\w+)/,W+"input-$1")]})],a)}return""})}},Ns=[Os],Ps=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var a=t.stylisPlugins||Ns,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),y=1;y<w.length;y++)i[w[y]]=!0;s.push(v)});var l,f=[$s,Es];{var c,u=[ys,xs(function(v){c.insert(v)})],d=ws(f.concat(a,u)),g=function(w){return $e(ps(w),d)};l=function(w,y,b,x){c=b,g(w?w+"{"+y.styles+"}":y.styles),x&&(p.inserted[y.name]=!0)}}var p={key:n,sheet:new as({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return p.sheet.hydrate(s),p};function _s(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Is={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ts=/[A-Z]|^ms/g,Ls=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Oa=function(t){return t.charCodeAt(1)===45},Or=function(t){return t!=null&&typeof t!="boolean"},Vt=ks(function(e){return Oa(e)?e:e.replace(Ts,"-$&").toLowerCase()}),Nr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ls,function(r,a,i){return Q={name:a,styles:i,next:Q},a})}return Is[t]!==1&&!Oa(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ve(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Q={name:n.name,styles:n.styles,next:Q},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Q={name:r.name,styles:r.styles,next:Q},r=r.next;var a=n.styles+";";return a}return Ms(e,t,n)}case"function":{if(e!==void 0){var i=Q,o=n(e);return Q=i,Ve(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Ms(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Ve(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Or(o)&&(r+=Vt(i)+":"+Nr(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Or(o[s])&&(r+=Vt(i)+":"+Nr(i,o[s])+";");else{var l=Ve(e,t,o);switch(i){case"animation":case"animationName":{r+=Vt(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var Pr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Q,qt=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";Q=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Ve(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Ve(r,n,t[s]),a&&(i+=o[s]);Pr.lastIndex=0;for(var l="",f;(f=Pr.exec(i))!==null;)l+="-"+f[1];var c=_s(i)+l;return{name:c,styles:i,next:Q}},Rs=!0;function Na(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var zs=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||Rs===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Ds=function(t,n,r){zs(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function _r(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function Ir(e,t,n){var r=[],a=Na(e,r,n);return r.length<2?n:a+t(r)}var js=function(t){var n=Ps(t);n.sheet.speedy=function(s){this.isSpeedy=s},n.compat=!0;var r=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered,void 0);return Ds(n,u,!1),n.key+"-"+u.name},a=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered),d="animation-"+u.name;return _r(n,{name:u.name,styles:"@keyframes "+d+"{"+u.styles+"}"}),d},i=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered);_r(n,u)},o=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];return Ir(n.registered,r,Fs(f))};return{css:r,cx:o,injectGlobal:i,keyframes:a,hydrate:function(l){l.forEach(function(f){n.inserted[f]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:Na.bind(null,n.registered),merge:Ir.bind(null,n.registered,r)}},Fs=function e(t){for(var n="",r=0;r<t.length;r++){var a=t[r];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))i=e(a);else{i="";for(var o in a)a[o]&&o&&(i&&(i+=" "),i+=o)}break}default:i=a}i&&(n&&(n+=" "),n+=i)}}return n},Bs=js({key:"css"}),C=Bs.css;const Bt=e=>n=>{const[r,a]=Qe(n,["className","m","mb","ml","mr","mt","p","pb","pl","pr","pt"]);return E(e,fe(a,{get className(){return ge(C({margin:r.m,marginBlockEnd:r.mb,marginInlineStart:r.ml,marginInlineEnd:r.mr,marginBlockStart:r.mt,padding:r.p,paddingBlockEnd:r.pb,paddingInlineStart:r.pl,paddingInlineEnd:r.pr,paddingBlockStart:r.pt}),r.className)}}))},Ws=C({width:"var(--size)",height:"var(--size)",display:"flex",justifyContent:"center","& svg":{height:"100%",color:"inherit"}}),Ys=M("<span></span>"),Hs=[Ko,Qo,ts,es,Jo,qo];Xo.add(...Hs);const Fn=e=>(()=>{const t=Ys.cloneNode(!0);return N(n=>{var o;const r=ge(Ws,e.class),a=(o=Vo({prefix:"fas",iconName:e.iconName}))==null?void 0:o.html,i=`${e.size??20}px`;return r!==n._v$&&I(t,n._v$=r),a!==n._v$2&&(t.innerHTML=n._v$2=a),i!==n._v$3&&t.style.setProperty("--size",n._v$3=i),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),Us=C({color:"#868e96",padding:3,border:"none",backgroundColor:"transparent",cursor:"pointer",width:"var(--size)",height:"var(--size)",borderRadius:2,transition:"background-color 200ms ease",":hover":{backgroundColor:"#ecedf0"},"> *":{width:"100%",height:"100%"}}),Gs=M("<button></button>"),Bn=e=>{const[t,n]=Qe(e,["onClick","size","iconName"]);return(()=>{const r=Gs.cloneNode(!0);return r.$$click=a=>{var i;return(i=t.onClick)==null?void 0:i.call(t,a)},Tt(r,fe({get class(){return Us},get style(){return{"--size":`${t.size}px`}}},n),!1,!0),k(r,E(Fn,{get iconName(){return t.iconName},get size(){return t.size}})),r})()};_t(["click"]);const Xs=M("<div></div>"),Vs=e=>(()=>{const t=Xs.cloneNode(!0);return k(t,()=>e.children),N(()=>I(t,ge(C({height:e.height,maxWidth:e.maxWidth,marginInline:"auto",paddingInline:16}),e.className))),t})(),Wn=Bt(Vs),qs=C({position:"fixed",top:0,right:0,bottom:0,left:0,width:"100%",zIndex:1,opacity:0,transition:"opacity 300ms",willChange:"opacity",backgroundColor:"#000",userSelect:"none","&.isOpen":{opacity:.7}}),Ks=C({position:"fixed",top:0,left:0,bottom:0,height:"100%",width:"100%",maxWidth:"500px",zIndex:2,overflow:"auto",transition:"transform 200ms",willChange:"transform",backgroundColor:"#fff",display:"flex",flexDirection:"column",transform:"translate3d(-103%, 0, 0)",boxShadow:"6px 0px 16px 2px #777","&.isOpen":{transform:"translate3d(0%, 0, 0)"}}),Js=C({padding:16,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #ddd"}),Qs=C({position:"relative",overflowX:"hidden",overflowY:"auto",height:"100%",flex:"1",padding:16}),Zs=M("<div></div>"),el=M('<div aria-labelledby="drawer-header" role="dialog"><header id="drawer-header"><div></div></header><div></div></div>'),pn="drawer-container-id";if(!document.getElementById(pn)){const e=document.createElement("div");e.setAttribute("id",pn),document.body.appendChild(e)}const tl=e=>{const[t,n]=te(!1);let r,a;return Fe(()=>{e.isOpen&&n(!0),!e.isOpen&&t()&&setTimeout(()=>{n(!1)},300)}),Fe(()=>{e.isOpen?setTimeout(()=>{r==null||r.classList.add("isOpen"),a==null||a.classList.add("isOpen")},0):(r==null||r.classList.remove("isOpen"),a==null||a.classList.remove("isOpen"))}),E(mi,{get mount(){return document.getElementById(pn)},get children(){return E(Xa,{get when(){return t()},get children(){return[(()=>{const i=Zs.cloneNode(!0),o=r;return typeof o=="function"?Kn(o,i):r=i,i.$$click=()=>e.onClose(),N(()=>I(i,ge(qs))),i})(),(()=>{const i=el.cloneNode(!0),o=i.firstChild,s=o.firstChild,l=o.nextSibling,f=a;return typeof f=="function"?Kn(f,i):a=i,k(s,()=>e.heading),k(o,E(Bn,{get["aria-label"](){return e.closeIconLabel??"close"},iconName:"close",get onClick(){return e.onClose},size:30}),null),k(l,()=>e.children),N(c=>{const u=Ks,d=Js,g=Qs;return u!==c._v$&&I(i,c._v$=u),d!==c._v$2&&I(o,c._v$2=d),g!==c._v$3&&I(l,c._v$3=g),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()]}})}})};_t(["click"]);const nl={light:300,normal:400,bold:700,300:300,400:400,500:500,600:600,700:700,800:800},rl={1:"2rem",2:"1.8rem",3:"1.6rem",4:"1.4rem",5:"1.2rem",6:"1rem"},al=e=>{const t=fe({level:1},e);return E(Xr,{get tabIndex(){return t.shouldAutoFocus?-1:void 0},get component(){return`h${t.level}`},get class(){return ge(t.className,C({fontFamily:"'Raleway', sans-serif",fontSize:t.size?t.size:rl[t.level],fontWeight:t.weight?nl[t.weight]:"bold"}))},get children(){return t.children}})},Yn=Bt(al),il=C({display:"flex",flexDirection:"column",gap:4,fontSize:"1rem",fontWeight:500}),ol=C({":after":{content:'" *"',color:"red",fontSize:"1.1rem"}}),sl=C({height:40,borderRadius:4,padding:8,paddingInlineStart:16,border:"1px solid lightgrey",":disabled":{cursor:"not-allowed",color:"darkgray"}});C({color:"red",fontSize:"1.1rem"});const ll=C({color:"red"}),cl=M("<div><label></label><input></div>"),fl=M("<span></span>"),ul=e=>{const[t,n]=Qe(e,["className","error","isRequired","label","onChange","value"]),r=H(()=>ge(il,t.className)),a=H(()=>ge(t.isRequired&&ol));return(()=>{const i=cl.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return k(o,()=>t.label),Tt(s,fe({get class(){return sl}},n,{get["aria-required"](){return t.isRequired},get id(){return t.label},onChange:l=>t.onChange(l),get value(){return t.value}}),!1,!1),k(i,(()=>{const l=H(()=>!!t.error);return()=>l()&&(()=>{const f=fl.cloneNode(!0);return k(f,()=>t.error),N(()=>I(f,ll)),f})()})(),null),N(l=>{const f=r(),c=a(),u=t.label;return f!==l._v$&&I(i,l._v$=f),c!==l._v$2&&I(o,l._v$2=c),u!==l._v$3&&It(o,"for",l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()},Kt=Bt(ul),dl=C({position:"relative",width:"max-content",borderRadius:4,":has(select:focus)":{outline:"2px solid black",outlineOffset:4}}),ml=C({position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,":hover":{cursor:"pointer","+ *":{color:"hsl(0deg 0% 00%)"}},":disabled":{cursor:"not-allowed","+ *":{color:"hsl(0deg 0% 30%)"}}}),gl=C({color:"hsl(0deg 0% 20%)",padding:"12px 16px",fontSize:"1rem",fontWeight:500,backgroundColor:"hsl(0deg 0% 90%)",borderRadius:4,display:"flex",gap:16,alignItems:"center",transition:"color 200ms ease"}),hl=M("<div><select></select><div></div></div>"),vl=M("<option></option>"),pl=e=>{const[t,n]=Qe(e,["onChange","value","options"]);return(()=>{const r=hl.cloneNode(!0),a=r.firstChild,i=a.nextSibling;return a.addEventListener("change",o=>t.onChange(o)),Tt(a,fe({get class(){return ml},get value(){return t.value}},n),!1,!0),k(a,E(Ga,{get each(){return t.options},children:o=>(()=>{const s=vl.cloneNode(!0);return k(s,()=>o.label,null),k(s,()=>o.value===t.value&&" ✔",null),N(()=>s.value=o.value),s})()})),k(i,()=>t.options[parseInt(t.value)].label,null),k(i,E(Fn,{iconName:"chevron-down",size:15}),null),N(o=>{const s=dl,l=gl;return s!==o._v$&&I(r,o._v$=s),l!==o._v$2&&I(i,o._v$2=l),o},{_v$:void 0,_v$2:void 0}),r})()},Et=["pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","longBreak"],[Ee,bn]=te(0),bl=()=>{Ee()===Et.length-1?bn(0):bn(Ee()+1)},yn=()=>Et[Ee()],[ce,Tr]=te("stopped"),wn=Symbol("store-raw"),qe=Symbol("store-node"),yl=Symbol("store-name");function Pa(e,t){let n=e[K];if(!n&&(Object.defineProperty(e,K,{value:n=new Proxy(e,kl)}),!Array.isArray(e))){const r=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let i=0,o=r.length;i<o;i++){const s=r[i];a[s].get&&Object.defineProperty(e,s,{enumerable:a[s].enumerable,get:a[s].get.bind(n)})}}return n}function Ot(e){let t;return e!=null&&typeof e=="object"&&(e[K]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Ke(e,t=new Set){let n,r,a,i;if(n=e!=null&&e[wn])return n;if(!Ot(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,s=e.length;o<s;o++)a=e[o],(r=Ke(a,t))!==a&&(e[o]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let l=0,f=o.length;l<f;l++)i=o[l],!s[i].get&&(a=e[i],(r=Ke(a,t))!==a&&(e[i]=r))}return e}function Hn(e){let t=e[qe];return t||Object.defineProperty(e,qe,{value:t={}}),t}function xn(e,t,n){return e[t]||(e[t]=Ia(n))}function wl(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===K||t===qe||t===yl||(delete n.value,delete n.writable,n.get=()=>e[K][t]),n}function _a(e){if(Fr()){const t=Hn(e);(t._||(t._=Ia()))()}}function xl(e){return _a(e),Reflect.ownKeys(e)}function Ia(e){const[t,n]=te(e,{equals:!1,internal:!0});return t.$=n,t}const kl={get(e,t,n){if(t===wn)return e;if(t===K)return n;if(t===Zt)return _a(e),n;const r=Hn(e),a=r.hasOwnProperty(t);let i=a?r[t]():e[t];if(t===qe||t==="__proto__")return i;if(!a){const o=Object.getOwnPropertyDescriptor(e,t);Fr()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(i=xn(r,t,i)())}return Ot(i)?Pa(i):i},has(e,t){return t===wn||t===K||t===Zt||t===qe||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:xl,getOwnPropertyDescriptor:wl};function Nt(e,t,n,r=!1){if(!r&&e[t]===n)return;const a=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let o=Hn(e),s;(s=xn(o,t,a))&&s.$(()=>n),Array.isArray(e)&&e.length!==i&&(s=xn(o,"length",i))&&s.$(e.length),(s=o._)&&s.$()}function Ta(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const a=n[r];Nt(e,a,t[a])}}function Sl(e,t){if(typeof t=="function"&&(t=t(e)),t=Ke(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const a=t[n];e[n]!==a&&Nt(e,n,a)}Nt(e,"length",r)}else Ta(e,t)}function Re(e,t,n=[]){let r,a=e;if(t.length>1){r=t.shift();const o=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let l=0;l<r.length;l++)Re(e,[r[l]].concat(t),n);return}else if(s&&o==="function"){for(let l=0;l<e.length;l++)r(e[l],l)&&Re(e,[l].concat(t),n);return}else if(s&&o==="object"){const{from:l=0,to:f=e.length-1,by:c=1}=r;for(let u=l;u<=f;u+=c)Re(e,[u].concat(t),n);return}else if(t.length>1){Re(e[r],t,[r].concat(n));return}a=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(a,n),i===a)||r===void 0&&i==null||(i=Ke(i),r===void 0||Ot(a)&&Ot(i)&&!Array.isArray(i)?Ta(a,i):Nt(e,r,i))}function Al(...[e,t]){const n=Ke(e||{}),r=Array.isArray(n),a=Pa(n);function i(...o){ja(()=>{r&&o.length===1?Sl(n,o[0]):Re(n,o)})}return[a,i]}const La="app-settings",Lr={durations:{longBreak:10,pomodoro:25,shortBreak:5}},Cl=()=>{const e=globalThis.localStorage.getItem(La);if(!e)return Lr;let t;try{t=JSON.parse(e)}catch(n){console.error(n),t=Lr}return t},[Un,Jt]=Al(Cl()),$l=()=>{Fe(()=>{globalThis.localStorage.setItem(La,JSON.stringify(Un))})},El=C({textAlign:"center",paddingBlockEnd:48,fontWeight:500,fontSize:"7rem"}),Ol=C({display:"flex",gap:20,justifyContent:"center"}),Gn={padding:"16px 32px",border:"none",cursor:"pointer",color:"#fff",borderRadius:4,fontWeight:700,fontSize:"1.4rem",transition:"background-color 200ms ease",":focus":{outline:"2px solid #339af0",outlineOffset:2},":disabled":{cursor:"not-allowed",backgroundColor:"lightgrey",color:"darkgray"}},Nl=C({...Gn,backgroundColor:"hsl(131, 51%, 29%)",":not(:disabled):hover":{backgroundColor:"hsl(131, 51%, 25%)"}}),Pl=C({...Gn,backgroundColor:"hsl(42, 95%, 37%)",":not(:disabled):hover":{backgroundColor:"hsl(42, 95%, 33%)"}}),_l=C({...Gn,backgroundColor:"hsl(0, 94%, 38%)",":not(:disabled):hover":{backgroundColor:"hsl(0, 94%, 34%)"}}),Mr=e=>e.toString().padStart(2,"0"),Il=e=>{const t=Math.floor(e/60),n=e-t*60;return`${Mr(t)}:${Mr(n)}`},Tl=e=>({stopWorkerCounter(){const t={type:"stop"};e.postMessage(t)},startWorkerCounter(t){const n={type:"start",time:t};e.postMessage(n)}}),Ll=M('<div data-testid="remainingTime"></div>'),Ml=M("<div><button>Reset</button></div>"),Rl=M("<button>Start</button>"),zl=M("<button>Pause</button>"),Ma=new Worker(new URL("/pomodoro/assets/worker-b3a0bc9e.js",self.location)),{startWorkerCounter:Dl,stopWorkerCounter:jl}=Tl(Ma),Fl=e=>{const t=()=>Un.durations[yn()]*60,[n,r]=te(t()),a=H(()=>ce()==="stopped"&&n()>0),i=H(()=>ce()==="stopped"),o=H(()=>ce()==="running"&&n()>0),s=()=>{Dl(a()?n():t()),Tr("running")},l=()=>{jl(),Tr("stopped")},f=()=>{r(t()),l()},c=()=>{Ma.onmessage=({data:d})=>{var g;r(d.newTime),d.newTime===0&&(l(),(g=e.onComplete)==null||g.call(e))}},u=()=>{r(t())};return Fe(c),Fe(u),[(()=>{const d=Ll.cloneNode(!0);return k(d,()=>Il(n())),N(()=>I(d,El)),d})(),(()=>{const d=Ml.cloneNode(!0),g=d.firstChild;return k(d,(()=>{const p=H(()=>!!i());return()=>p()&&(()=>{const v=Rl.cloneNode(!0);return v.$$click=s,N(w=>{const y=Nl,b=n()===0;return y!==w._v$4&&I(v,w._v$4=y),b!==w._v$5&&(v.disabled=w._v$5=b),w},{_v$4:void 0,_v$5:void 0}),v})()})(),g),k(d,(()=>{const p=H(()=>!!o());return()=>p()&&(()=>{const v=zl.cloneNode(!0);return v.$$click=l,N(()=>I(v,Pl)),v})()})(),g),g.$$click=f,N(p=>{const v=Ol,w=_l,y=ce()==="running";return v!==p._v$&&I(d,p._v$=v),w!==p._v$2&&I(g,p._v$2=w),y!==p._v$3&&(g.disabled=p._v$3=y),p},{_v$:void 0,_v$2:void 0,_v$3:void 0}),d})()]};_t(["click"]);const Qt={pomodoro:{text:"Pomodoro",color:"hsl(209, 75%, 38%)"},shortBreak:{text:"Short break",color:"hsl(131, 51%, 29%)"},longBreak:{text:"Long break",color:"hsl(288, 54%, 40%)"}},Bl=C({display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:8}),Rr=C({fontSize:"1.8rem",fontWeight:"bold"}),Wl=M("<div></div>"),Yl=M("<span></span>"),zr="counter-select",Hl=e=>{const[t,n]=te(!1),r=()=>n(i=>!i),a=H(()=>Et.map((i,o)=>({label:`${o+1}. ${Qt[i].text}`,value:o.toString()})));if(Ee()<0||Ee()+1>Et.length)throw new Error("Invalid currentCounterIndex value");return(()=>{const i=Wl.cloneNode(!0);return k(i,E(Xr,{get class(){return Rr},get component(){return t()?"label":"span"},get for(){return t()?zr:void 0},children:"Current timer:"}),null),k(i,(()=>{const o=H(()=>!!t());return()=>o()?E(pl,{id:zr,get disabled(){return ce()!=="stopped"},get value(){return Ee().toString()},onChange:({currentTarget:s})=>{bn(parseInt(s.value))},get options(){return a()}}):(()=>{const s=Yl.cloneNode(!0);return k(s,()=>` ${Qt[yn()].text}`),N(l=>{const f=Rr,c=Qt[yn()].color;return f!==l._v$&&I(s,l._v$=f),c!==l._v$2&&s.style.setProperty("color",l._v$2=c),l},{_v$:void 0,_v$2:void 0}),s})()})(),null),k(i,E(Bn,{get["aria-label"](){return t()?"close counter editing":"edit counter type"},get iconName(){return t()?"close":"pencil"},size:30,onClick:r}),null),N(()=>I(i,ge(e.className,Bl))),i})()},Ul=Bt(Hl),Gl="2.3.0",Xl=C({borderBlockStart:"1px solid lightgrey",paddingBlock:16}),Vl=C({display:"flex",alignItems:"center"}),ql=C({marginInlineStart:"auto"}),Kl=M("<span>App version: </span>"),Jl=M('<a target="blank" href="https://github.com/MkMan/pomodoro" title="Source code"></a>'),Ql=M("<footer></footer>"),Zl=()=>(()=>{const e=Ql.cloneNode(!0);return k(e,E(Wn,{get className(){return Vl},maxWidth:600,get children(){return[(()=>{const t=Kl.cloneNode(!0);return t.firstChild,k(t,Gl,null),t})(),(()=>{const t=Jl.cloneNode(!0);return k(t,E(Fn,{size:15,iconName:"code"})),N(()=>I(t,ql)),t})()]}})),N(()=>I(e,Xl)),e})(),ec=C({display:"flex",columnGap:10,alignItems:"center"}),tc=C({borderBottom:"1px solid lightgrey"}),nc=M("<div></div>"),rc=M("<header></header>"),ac=e=>(()=>{const t=rc.cloneNode(!0);return k(t,E(Wn,{maxWidth:600,get children(){const n=nc.cloneNode(!0);return k(n,E(Bn,{"aria-label":"settings menu",iconName:"bars",get onClick(){return e.onSettingsClick},size:30}),null),k(n,E(Yn,{size:"3rem",children:"Pomodoro"}),null),N(()=>I(n,ec)),n}})),N(()=>I(t,tc)),t})(),ic=M("<section></section>"),oc=e=>{const t=Un.durations,n={isRequired:!0,mb:16,type:"number",min:0};return(()=>{const r=ic.cloneNode(!0);return k(r,E(Yn,{level:3,mb:16,children:"Durations"}),null),k(r,E(Kt,fe(n,{get disabled(){return ce()!=="stopped"},get error(){return t.pomodoro<=0&&"Pomodoro duration must be set"},label:"Pomodoro",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Jt("durations","pomodoro",i)},get value(){return t.pomodoro===0?"":t.pomodoro}})),null),k(r,E(Kt,fe(n,{get disabled(){return ce()!=="stopped"},get error(){return t.shortBreak<=0&&"Short break duration must be set"},label:"Short break",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Jt("durations","shortBreak",i)},get value(){return t.shortBreak===0?"":t.shortBreak}})),null),k(r,E(Kt,fe(n,{get disabled(){return ce()!=="stopped"},get error(){return t.longBreak<=0&&"Long break duration must be set"},label:"Long break",onChange:a=>{const i=a.currentTarget.valueAsNumber||0;Jt("durations","longBreak",i)},get value(){return t.longBreak===0?"":t.longBreak}})),null),N(()=>It(r,"data-testid",e.dataTestId)),r})()},sc=C({display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}),lc=C({flex:"1"}),cc="/pomodoro/assets/alarm-1-42bf15fd.mp3",fc={alarm1:cc},uc=()=>new Audio(fc.alarm1),dc=M("<div><main></main></div>"),mc=()=>{$l();const e=uc(),[t,n]=te(!1);return(()=>{const r=dc.cloneNode(!0),a=r.firstChild;return k(r,E(ac,{onSettingsClick:()=>n(!0)}),a),k(a,E(Wn,{maxWidth:600,pt:16,get children(){return[E(Ul,{pb:32,pt:32}),E(Fl,{onComplete:()=>{e.play().catch(console.error),bl()}})]}})),k(r,E(tl,{closeIconLabel:"close settings menu",get heading(){return E(Yn,{level:2,shouldAutoFocus:!0,children:"Settings"})},get isOpen(){return t()},onClose:()=>n(!1),get children(){return E(oc,{dataTestId:"appSettings"})}}),null),k(r,E(Zl,{}),null),N(i=>{const o=sc,s=lc;return o!==i._v$&&I(r,i._v$=o),s!==i._v$2&&I(a,i._v$2=s),i},{_v$:void 0,_v$2:void 0}),r})()};ni(()=>E(mc,{}),document.getElementById("root"));
