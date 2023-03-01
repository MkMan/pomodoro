(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const j={};function ja(e){j.context=e}const Fa=(e,t)=>e===t,J=Symbol("solid-proxy"),Jt=Symbol("solid-track"),wt={equals:Fa};let jr=Ur;const me=1,xt=2,Fr={owned:null,cleanups:null,context:null,owner:null};var Y=null;let ve=null,M=null,H=null,ne=null,xn=0;function ze(e,t){const n=M,r=Y,a=e.length===0,i=a?Fr:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=a?e:()=>e(()=>ye(()=>Pt(i)));Y=i,M=null;try{return _e(o,!0)}finally{M=n,Y=r}}function q(e,t){t=t?Object.assign({},wt,t):wt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=a=>(typeof a=="function"&&(a=a(n.value)),Yr(n,a));return[Br.bind(n),r]}function N(e,t,n){const r=kn(e,t,!1,me);Je(r)}function Fe(e,t,n){jr=Ua;const r=kn(e,t,!1,me);r.user=!0,ne?ne.push(r):Je(r)}function U(e,t,n){n=n?Object.assign({},wt,n):wt;const r=kn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Je(r),Br.bind(r)}function Wa(e){return _e(e,!1)}function ye(e){if(M===null)return e();const t=M;M=null;try{return e()}finally{M=t}}function Qt(e){return Y===null||(Y.cleanups===null?Y.cleanups=[e]:Y.cleanups.push(e)),e}function Wr(){return M}function Br(){const e=ve;if(this.sources&&(this.state||e))if(this.state===me||e)Je(this);else{const t=H;H=null,_e(()=>St(this),!1),H=t}if(M){const t=this.observers?this.observers.length:0;M.sources?(M.sources.push(this),M.sourceSlots.push(t)):(M.sources=[this],M.sourceSlots=[t]),this.observers?(this.observers.push(M),this.observerSlots.push(M.sources.length-1)):(this.observers=[M],this.observerSlots=[M.sources.length-1])}return this.value}function Yr(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&_e(()=>{for(let a=0;a<e.observers.length;a+=1){const i=e.observers[a],o=ve&&ve.running;o&&ve.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?H.push(i):ne.push(i),i.observers&&Hr(i)),o||(i.state=me)}if(H.length>1e6)throw H=[],new Error},!1)),t}function Je(e){if(!e.fn)return;Pt(e);const t=Y,n=M,r=xn;M=Y=e,Ba(e,e.value,r),M=n,Y=t}function Ba(e,t,n){let r;try{r=e.fn(t)}catch(a){e.pure&&(e.state=me,e.owned&&e.owned.forEach(Pt),e.owned=null),Gr(a)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Yr(e,r):e.value=r,e.updatedAt=n)}function kn(e,t,n,r=me,a){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Y,context:null,pure:n};return Y===null||Y!==Fr&&(Y.owned?Y.owned.push(i):Y.owned=[i]),i}function kt(e){const t=ve;if(e.state===0||t)return;if(e.state===xt||t)return St(e);if(e.suspense&&ye(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<xn);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===me||t)Je(e);else if(e.state===xt||t){const a=H;H=null,_e(()=>St(e,n[0]),!1),H=a}}function _e(e,t){if(H)return e();let n=!1;t||(H=[]),ne?n=!0:ne=[],xn++;try{const r=e();return Ya(n),r}catch(r){n||(ne=null),H=null,Gr(r)}}function Ya(e){if(H&&(Ur(H),H=null),e)return;const t=ne;ne=null,t.length&&_e(()=>jr(t),!1)}function Ur(e){for(let t=0;t<e.length;t++)kt(e[t])}function Ua(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:kt(r)}for(j.context&&ja(),t=0;t<n;t++)kt(e[t])}function St(e,t){const n=ve;e.state=0;for(let r=0;r<e.sources.length;r+=1){const a=e.sources[r];a.sources&&(a.state===me||n?a!==t&&kt(a):(a.state===xt||n)&&St(a,t))}}function Hr(e){const t=ve;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=xt,r.pure?H.push(r):ne.push(r),r.observers&&Hr(r))}}function Pt(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),a=n.observers;if(a&&a.length){const i=a.pop(),o=n.observerSlots.pop();r<a.length&&(i.sourceSlots[o]=r,a[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Pt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ha(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Gr(e){throw e=Ha(e),e}const Ga=Symbol("fallback");function Gn(e){for(let t=0;t<e.length;t++)e[t]()}function Va(e,t,n={}){let r=[],a=[],i=[],o=0,s=t.length>1?[]:null;return Qt(()=>Gn(i)),()=>{let l=e()||[],f,c;return l[Jt],ye(()=>{let d=l.length,m,p,h,w,y,b,x,P,_;if(d===0)o!==0&&(Gn(i),i=[],r=[],a=[],o=0,s&&(s=[])),n.fallback&&(r=[Ga],a[0]=ze(z=>(i[0]=z,n.fallback())),o=1);else if(o===0){for(a=new Array(d),c=0;c<d;c++)r[c]=l[c],a[c]=ze(u);o=d}else{for(h=new Array(d),w=new Array(d),s&&(y=new Array(d)),b=0,x=Math.min(o,d);b<x&&r[b]===l[b];b++);for(x=o-1,P=d-1;x>=b&&P>=b&&r[x]===l[P];x--,P--)h[P]=a[x],w[P]=i[x],s&&(y[P]=s[x]);for(m=new Map,p=new Array(P+1),c=P;c>=b;c--)_=l[c],f=m.get(_),p[c]=f===void 0?-1:f,m.set(_,c);for(f=b;f<=x;f++)_=r[f],c=m.get(_),c!==void 0&&c!==-1?(h[c]=a[f],w[c]=i[f],s&&(y[c]=s[f]),c=p[c],m.set(_,c)):i[f]();for(c=b;c<d;c++)c in h?(a[c]=h[c],i[c]=w[c],s&&(s[c]=y[c],s[c](c))):a[c]=ze(u);a=a.slice(0,o=d),r=l.slice(0)}return a});function u(d){if(i[c]=d,s){const[m,p]=q(c);return s[c]=p,t(l[c],m)}return t(l[c])}}}function $(e,t){return ye(()=>e(t||{}))}function at(){return!0}const Zt={get(e,t,n){return t===J?n:e.get(t)},has(e,t){return t===J?!0:e.has(t)},set:at,deleteProperty:at,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:at,deleteProperty:at}},ownKeys(e){return e.keys()}};function Yt(e){return(e=typeof e=="function"?e():e)?e:{}}function Pe(...e){let t=!1;for(let r=0;r<e.length;r++){const a=e[r];t=t||!!a&&J in a,e[r]=typeof a=="function"?(t=!0,U(a)):a}if(t)return new Proxy({get(r){for(let a=e.length-1;a>=0;a--){const i=Yt(e[a])[r];if(i!==void 0)return i}},has(r){for(let a=e.length-1;a>=0;a--)if(r in Yt(e[a]))return!0;return!1},keys(){const r=[];for(let a=0;a<e.length;a++)r.push(...Object.keys(Yt(e[a])));return[...new Set(r)]}},Zt);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const a=Object.getOwnPropertyDescriptors(e[r]);for(const i in a)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const s=(e[o]||{})[i];if(s!==void 0)return s}}})}return n}function Qe(e,...t){const n=new Set(t.flat());if(J in e){const a=t.map(i=>new Proxy({get(o){return i.includes(o)?e[o]:void 0},has(o){return i.includes(o)&&o in e},keys(){return i.filter(o=>o in e)}},Zt));return a.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Zt)),a}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(a=>!n.has(a))),t.map(a=>{const i={};for(let o=0;o<a.length;o++){const s=a[o];s in e&&Object.defineProperty(i,s,r[s]?r[s]:{get(){return e[s]},set(){return!0},enumerable:!0})}return i})}function Vr(e){const t="fallback"in e&&{fallback:()=>e.fallback};return U(Va(()=>e.each,e.children,t||void 0))}function en(e){let t=!1;const n=e.keyed,r=U(()=>e.when,void 0,{equals:(a,i)=>t?a===i:!a==!i});return U(()=>{const a=r();if(a){const i=e.children,o=typeof i=="function"&&i.length>0;return t=n||o,o?ye(()=>i(a)):i}return e.fallback},void 0,void 0)}const Xa=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qa=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Xa]),Ka=new Set(["innerHTML","textContent","innerText","children"]),Ja=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Vn=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Qa=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Za=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ei={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ti(e,t,n){let r=n.length,a=t.length,i=r,o=0,s=0,l=t[a-1].nextSibling,f=null;for(;o<a||s<i;){if(t[o]===n[s]){o++,s++;continue}for(;t[a-1]===n[i-1];)a--,i--;if(a===o){const c=i<r?s?n[s-1].nextSibling:n[i-s]:l;for(;s<i;)e.insertBefore(n[s++],c)}else if(i===s)for(;o<a;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[s]===t[a-1]){const c=t[--a].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[a]=n[i]}else{if(!f){f=new Map;let u=s;for(;u<i;)f.set(n[u],u++)}const c=f.get(t[o]);if(c!=null)if(s<c&&c<i){let u=o,d=1,m;for(;++u<a&&u<i&&!((m=f.get(t[u]))==null||m!==c+d);)d++;if(d>c-s){const p=t[o];for(;s<c;)e.insertBefore(n[s++],p)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const Xn="_$DX_DELEGATE";function ni(e,t,n,r={}){let a;return ze(i=>{a=i,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{a(),t.textContent=""}}function L(e,t,n){const r=document.createElement("template");r.innerHTML=e;let a=r.content.firstChild;return n&&(a=a.firstChild),a}function Ze(e,t=window.document){const n=t[Xn]||(t[Xn]=new Set);for(let r=0,a=e.length;r<a;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,fi))}}function It(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ri(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function O(e,t){t==null?e.removeAttribute("class"):e.className=t}function ai(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const a=n[0];e.addEventListener(t,n[0]=i=>a.call(e,n[1],i))}else e.addEventListener(t,n)}function ii(e,t,n={}){const r=Object.keys(t||{}),a=Object.keys(n);let i,o;for(i=0,o=a.length;i<o;i++){const s=a[i];!s||s==="undefined"||t[s]||(Kn(e,s,!1),delete n[s])}for(i=0,o=r.length;i<o;i++){const s=r[i],l=!!t[s];!s||s==="undefined"||n[s]===l||!l||(Kn(e,s,!0),n[s]=l)}return n}function oi(e,t,n){if(!t)return n?It(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let a,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)a=t[i],a!==n[i]&&(r.setProperty(i,a),n[i]=a);return n}function Tt(e,t={},n,r){const a={};return r||N(()=>a.children=Ee(e,t.children,a.children)),N(()=>t.ref&&t.ref(e)),N(()=>si(e,t,n,!0,a,!0)),a}function qn(e,t,n){return ye(()=>e(t,n))}function k(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Ee(e,t,r,n);N(a=>Ee(e,t(),a,n),r)}function si(e,t,n,r,a={},i=!1){t||(t={});for(const o in a)if(!(o in t)){if(o==="children")continue;a[o]=Jn(e,o,null,a[o],n,i)}for(const o in t){if(o==="children"){r||Ee(e,t.children);continue}const s=t[o];a[o]=Jn(e,o,s,a[o],n,i)}}function li(e){let t,n;return!j.context||!(t=j.registry.get(n=ui()))?e.cloneNode(!0):(j.completed&&j.completed.add(t),j.registry.delete(n),t)}function ci(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Kn(e,t,n){const r=t.trim().split(/\s+/);for(let a=0,i=r.length;a<i;a++)e.classList.toggle(r[a],n)}function Jn(e,t,n,r,a,i){let o,s,l;if(t==="style")return oi(e,n,r);if(t==="classList")return ii(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),c=Qa.has(f);if(!c&&r){const u=Array.isArray(r)?r[0]:r;e.removeEventListener(f,u)}(c||n)&&(ai(e,f,n,c),c&&Ze([f]))}else if((l=Ka.has(t))||!a&&(Vn[t]||(s=qa.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?O(e,n):o&&!s&&!l?e[ci(t)]=n:e[Vn[t]||t]=n;else{const f=a&&t.indexOf(":")>-1&&ei[t.split(":")[0]];f?ri(e,f,t,n):It(e,Ja[t]||t,n)}return n}function fi(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),j.registry&&!j.done&&(j.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let a=r.nextSibling;r.remove(),r=a}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const a=n[`${t}Data`];if(a!==void 0?r.call(n,a,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Ee(e,t,n,r,a){for(j.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(j.context)return n;if(i==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=we(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(j.context)return n;n=we(e,n,r)}else{if(i==="function")return N(()=>{let s=t();for(;typeof s=="function";)s=s();n=Ee(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],l=n&&Array.isArray(n);if(tn(s,t,n,a))return N(()=>n=Ee(e,s,n,r,!0)),()=>n;if(j.context){if(!s.length)return n;for(let f=0;f<s.length;f++)if(s[f].parentNode)return n=s}if(s.length===0){if(n=we(e,n,r),o)return n}else l?n.length===0?Qn(e,s,r):ti(e,n,s):(n&&we(e),Qn(e,s));n=s}else if(t instanceof Node){if(j.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=we(e,n,r,t);we(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function tn(e,t,n,r){let a=!1;for(let i=0,o=t.length;i<o;i++){let s=t[i],l=n&&n[i];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))a=tn(e,s,l)||a;else if(typeof s=="function")if(r){for(;typeof s=="function";)s=s();a=tn(e,Array.isArray(s)?s:[s],Array.isArray(l)?l:[l])||a}else e.push(s),a=!0;else{const f=String(s);l&&l.nodeType===3&&l.data===f?e.push(l):e.push(document.createTextNode(f))}}return a}function Qn(e,t,n=null){for(let r=0,a=t.length;r<a;r++)e.insertBefore(t[r],n)}function we(e,t,n,r){if(n===void 0)return e.textContent="";const a=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(a!==s){const l=s.parentNode===e;!i&&!o?l?e.replaceChild(a,s):e.insertBefore(a,n):l&&s.remove()}else i=!0}}else e.insertBefore(a,n);return[a]}function ui(){const e=j.context;return`${e.id}${e.count++}`}const di="http://www.w3.org/2000/svg";function Xr(e,t=!1){return t?document.createElementNS(di,e):document.createElement(e)}function mi(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function a(){if(j.context){const[i,o]=q(!1);return queueMicrotask(()=>o(!0)),()=>i()&&e.children}else return()=>e.children}if(r instanceof HTMLHeadElement){const[i,o]=q(!1),s=()=>o(!0);ze(l=>k(r,()=>i()?l():a()(),null)),Qt(()=>{j.context?queueMicrotask(s):s()})}else{const i=Xr(e.isSVG?"g":"div",e.isSVG),o=t&&i.attachShadow?i.attachShadow({mode:"open"}):i;Object.defineProperty(i,"_$host",{get(){return n.parentNode},configurable:!0}),k(o,a()),r.appendChild(i),e.ref&&e.ref(i),Qt(()=>r.removeChild(i))}return n}function qr(e){const[t,n]=Qe(e,["component"]),r=U(()=>t.component);return U(()=>{const a=r();switch(typeof a){case"function":return ye(()=>a(n));case"string":const i=Za.has(a),o=j.context?li():Xr(a,i);return Tt(o,n,i),o}})}function Zn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zn(Object(n),!0).forEach(function(r){F(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function At(e){return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},At(e)}function gi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function er(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hi(e,t,n){return t&&er(e.prototype,t),n&&er(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sn(e,t){return pi(e)||yi(e,t)||Kr(e,t)||xi()}function et(e){return vi(e)||bi(e)||Kr(e)||wi()}function vi(e){if(Array.isArray(e))return nn(e)}function pi(e){if(Array.isArray(e))return e}function bi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Kr(e,t){if(e){if(typeof e=="string")return nn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nn(e,t)}}function nn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tr=function(){},An={},Jr={},Qr=null,Zr={mark:tr,measure:tr};try{typeof window<"u"&&(An=window),typeof document<"u"&&(Jr=document),typeof MutationObserver<"u"&&(Qr=MutationObserver),typeof performance<"u"&&(Zr=performance)}catch{}var ki=An.navigator||{},nr=ki.userAgent,rr=nr===void 0?"":nr,ce=An,T=Jr,ar=Qr,it=Zr;ce.document;var oe=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",ea=~rr.indexOf("MSIE")||~rr.indexOf("Trident/"),ot,st,lt,ct,ft,re="___FONT_AWESOME___",rn=16,ta="fa",na="svg-inline--fa",pe="data-fa-i2svg",an="data-fa-pseudo-element",Si="data-fa-pseudo-element-pending",Cn="data-prefix",$n="data-icon",ir="fontawesome-i2svg",Ai="async",Ci=["HTML","HEAD","STYLE","SCRIPT"],ra=function(){try{return!0}catch{return!1}}(),I="classic",R="sharp",En=[I,R];function tt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[I]}})}var We=tt((ot={},F(ot,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),F(ot,R,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),ot)),Be=tt((st={},F(st,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F(st,R,{solid:"fass",regular:"fasr"}),st)),Ye=tt((lt={},F(lt,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F(lt,R,{fass:"fa-solid",fasr:"fa-regular"}),lt)),$i=tt((ct={},F(ct,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F(ct,R,{"fa-solid":"fass","fa-regular":"fasr"}),ct)),Ei=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,aa="fa-layers-text",Oi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ni=tt((ft={},F(ft,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F(ft,R,{900:"fass",400:"fasr"}),ft)),ia=[1,2,3,4,5,6,7,8,9,10],_i=ia.concat([11,12,13,14,15,16,17,18,19,20]),Pi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ge={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ue=new Set;Object.keys(Be[I]).map(Ue.add.bind(Ue));Object.keys(Be[R]).map(Ue.add.bind(Ue));var Ii=[].concat(En,et(Ue),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ge.GROUP,ge.SWAP_OPACITY,ge.PRIMARY,ge.SECONDARY]).concat(ia.map(function(e){return"".concat(e,"x")})).concat(_i.map(function(e){return"w-".concat(e)})),De=ce.FontAwesomeConfig||{};function Ti(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Li(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Ri=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ri.forEach(function(e){var t=Sn(e,2),n=t[0],r=t[1],a=Li(Ti(n));a!=null&&(De[r]=a)})}var oa={styleDefault:"solid",familyDefault:"classic",cssPrefix:ta,replacementClass:na,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};De.familyPrefix&&(De.cssPrefix=De.familyPrefix);var Oe=g(g({},oa),De);Oe.autoReplaceSvg||(Oe.observeMutations=!1);var v={};Object.keys(oa).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(n){Oe[e]=n,je.forEach(function(r){return r(v)})},get:function(){return Oe[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){Oe.cssPrefix=t,je.forEach(function(n){return n(v)})},get:function(){return Oe.cssPrefix}});ce.FontAwesomeConfig=v;var je=[];function Mi(e){return je.push(e),function(){je.splice(je.indexOf(e),1)}}var le=rn,ee={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zi(e){if(!(!e||!oe)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return T.head.insertBefore(t,r),e}}var Di="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function He(){for(var e=12,t="";e-- >0;)t+=Di[Math.random()*62|0];return t}function Ie(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function On(e){return e.classList?Ie(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function sa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ji(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(sa(e[n]),'" ')},"").trim()}function Lt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Nn(e){return e.size!==ee.size||e.x!==ee.x||e.y!==ee.y||e.rotate!==ee.rotate||e.flipX||e.flipY}function Fi(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Wi(e){var t=e.transform,n=e.width,r=n===void 0?rn:n,a=e.height,i=a===void 0?rn:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ea?l+="translate(".concat(t.x/le-r/2,"em, ").concat(t.y/le-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/le,"em), calc(-50% + ").concat(t.y/le,"em)) "):l+="translate(".concat(t.x/le,"em, ").concat(t.y/le,"em) "),l+="scale(".concat(t.size/le*(t.flipX?-1:1),", ").concat(t.size/le*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Bi=`:root, :host {
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
}`;function la(){var e=ta,t=na,n=v.cssPrefix,r=v.replacementClass,a=Bi;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var or=!1;function Ut(){v.autoAddCss&&!or&&(zi(la()),or=!0)}var Yi={mixout:function(){return{dom:{css:la,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},ae=ce||{};ae[re]||(ae[re]={});ae[re].styles||(ae[re].styles={});ae[re].hooks||(ae[re].hooks={});ae[re].shims||(ae[re].shims=[]);var K=ae[re],ca=[],Ui=function e(){T.removeEventListener("DOMContentLoaded",e),Ct=1,ca.map(function(t){return t()})},Ct=!1;oe&&(Ct=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Ct||T.addEventListener("DOMContentLoaded",Ui));function Hi(e){oe&&(Ct?setTimeout(e,0):ca.push(e))}function nt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?sa(e):"<".concat(t," ").concat(ji(r),">").concat(i.map(nt).join(""),"</").concat(t,">")}function sr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Gi=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ht=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Gi(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Vi(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function on(e){var t=Vi(e);return t.length===1?t[0].toString(16):null}function Xi(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function lr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function sn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=lr(t);typeof K.hooks.addPack=="function"&&!a?K.hooks.addPack(e,lr(t)):K.styles[e]=g(g({},K.styles[e]||{}),i),e==="fas"&&sn("fa",t)}var ut,dt,mt,xe=K.styles,qi=K.shims,Ki=(ut={},F(ut,I,Object.values(Ye[I])),F(ut,R,Object.values(Ye[R])),ut),_n=null,fa={},ua={},da={},ma={},ga={},Ji=(dt={},F(dt,I,Object.keys(We[I])),F(dt,R,Object.keys(We[R])),dt);function Qi(e){return~Ii.indexOf(e)}function Zi(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Qi(a)?a:null}var ha=function(){var t=function(i){return Ht(xe,function(o,s,l){return o[l]=Ht(s,i,{}),o},{})};fa=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ua=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ga=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xe||v.autoFetchSvg,r=Ht(qi,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});da=r.names,ma=r.unicodes,_n=Rt(v.styleDefault,{family:v.familyDefault})};Mi(function(e){_n=Rt(e.styleDefault,{family:v.familyDefault})});ha();function Pn(e,t){return(fa[e]||{})[t]}function eo(e,t){return(ua[e]||{})[t]}function he(e,t){return(ga[e]||{})[t]}function va(e){return da[e]||{prefix:null,iconName:null}}function to(e){var t=ma[e],n=Pn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fe(){return _n}var In=function(){return{prefix:null,iconName:null,rest:[]}};function Rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?I:n,a=We[r][e],i=Be[r][e]||Be[r][a],o=e in K.styles?e:null;return i||o||null}var cr=(mt={},F(mt,I,Object.keys(Ye[I])),F(mt,R,Object.keys(Ye[R])),mt);function Mt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},F(t,I,"".concat(v.cssPrefix,"-").concat(I)),F(t,R,"".concat(v.cssPrefix,"-").concat(R)),t),o=null,s=I;(e.includes(i[I])||e.some(function(f){return cr[I].includes(f)}))&&(s=I),(e.includes(i[R])||e.some(function(f){return cr[R].includes(f)}))&&(s=R);var l=e.reduce(function(f,c){var u=Zi(v.cssPrefix,c);if(xe[c]?(c=Ki[s].includes(c)?$i[s][c]:c,o=c,f.prefix=c):Ji[s].indexOf(c)>-1?(o=c,f.prefix=Rt(c,{family:s})):u?f.iconName=u:c!==v.replacementClass&&c!==i[I]&&c!==i[R]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var d=o==="fa"?va(f.iconName):{},m=he(f.prefix,f.iconName);d.prefix&&(o=null),f.iconName=d.iconName||m||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!xe.far&&xe.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},In());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===R&&(xe.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=he(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=fe()||"fas"),l}var no=function(){function e(){gi(this,e),this.definitions={}}return hi(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=g(g({},n.definitions[s]||{}),o[s]),sn(s,o[s]);var l=Ye[I][s];l&&sn(l,o[s]),ha()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][l]=f}),n}}]),e}(),fr=[],ke={},Ae={},ro=Object.keys(Ae);function ao(e,t){var n=t.mixoutsTo;return fr=e,ke={},Object.keys(Ae).forEach(function(r){ro.indexOf(r)===-1&&delete Ae[r]}),fr.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),At(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ke[o]||(ke[o]=[]),ke[o].push(i[o])})}r.provides&&r.provides(Ae)}),n}function ln(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ke[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ke[e]||[];a.forEach(function(i){i.apply(null,n)})}function ie(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ae[e]?Ae[e].apply(null,t):void 0}function cn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||fe();if(t)return t=he(n,t)||t,sr(pa.definitions,n,t)||sr(K.styles,n,t)}var pa=new no,io=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,be("noAuto")},oo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return oe?(be("beforeI2svg",t),ie("pseudoElements2svg",t),ie("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Hi(function(){lo({autoReplaceSvgRoot:n}),be("watch",t)})}},so={icon:function(t){if(t===null)return null;if(At(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:he(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rt(t[0]);return{prefix:r,iconName:he(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Ei))){var a=Mt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||fe(),iconName:he(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=fe();return{prefix:i,iconName:he(i,t)||t}}}},X={noAuto:io,config:v,dom:oo,parse:so,library:pa,findIconDefinition:cn,toHtml:nt},lo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?T:n;(Object.keys(K.styles).length>0||v.autoFetchSvg)&&oe&&v.autoReplaceSvg&&X.dom.i2svg({node:r})};function zt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(oe){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function co(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Nn(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Lt(g(g({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function fo(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:o}),children:r}]}]}function Tn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,d=e.watchable,m=d===void 0?!1:d,p=r.found?r:n,h=p.width,w=p.height,y=a==="fak",b=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(se){return u.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(u.classes).join(" "),x={children:[],attributes:g(g({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:b,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(w)})},P=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/w*16*.0625,"em")}:{};m&&(x.attributes[pe]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||He())},children:[l]}),delete x.attributes.title);var _=g(g({},x),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:g(g({},P),u.styles)}),z=r.found&&n.found?ie("generateAbstractMask",_)||{children:[],attributes:{}}:ie("generateAbstractIcon",_)||{children:[],attributes:{}},A=z.children,Bt=z.attributes;return _.children=A,_.attributes=Bt,s?fo(_):co(_)}function ur(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[pe]="");var c=g({},o.styles);Nn(a)&&(c.transform=Wi({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Lt(c);u.length>0&&(f.style=u);var d=[];return d.push({tag:"span",attributes:f,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function uo(e){var t=e.content,n=e.title,r=e.extra,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Lt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gt=K.styles;function fn(e){var t=e[0],n=e[1],r=e.slice(4),a=Sn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(ge.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ge.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ge.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var mo={found:!1,width:512,height:512};function go(e,t){!ra&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function un(e,t){var n=t;return t==="fa"&&v.styleDefault!==null&&(t=fe()),new Promise(function(r,a){if(ie("missingIconAbstract"),n==="fa"){var i=va(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Gt[t]&&Gt[t][e]){var o=Gt[t][e];return r(fn(o))}go(e,t),r(g(g({},mo),{},{icon:v.showMissingIcons&&e?ie("missingIconAbstract")||{}:{}}))})}var dr=function(){},dn=v.measurePerformance&&it&&it.mark&&it.measure?it:{mark:dr,measure:dr},Re='FA "6.3.0"',ho=function(t){return dn.mark("".concat(Re," ").concat(t," begins")),function(){return ba(t)}},ba=function(t){dn.mark("".concat(Re," ").concat(t," ends")),dn.measure("".concat(Re," ").concat(t),"".concat(Re," ").concat(t," begins"),"".concat(Re," ").concat(t," ends"))},Ln={begin:ho,end:ba},ht=function(){};function mr(e){var t=e.getAttribute?e.getAttribute(pe):null;return typeof t=="string"}function vo(e){var t=e.getAttribute?e.getAttribute(Cn):null,n=e.getAttribute?e.getAttribute($n):null;return t&&n}function po(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function bo(){if(v.autoReplaceSvg===!0)return vt.replace;var e=vt[v.autoReplaceSvg];return e||vt.replace}function yo(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function wo(e){return T.createElement(e)}function ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?yo:wo:n;if(typeof e=="string")return T.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ya(o,{ceFn:r}))}),a}function xo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var vt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ya(a),n)}),n.getAttribute(pe)===null&&v.keepOriginalSource){var r=T.createComment(xo(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~On(n).indexOf(v.replacementClass))return vt.replace(t);var a=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return nt(s)}).join(`
`);n.setAttribute(pe,""),n.innerHTML=o}};function gr(e){e()}function wa(e,t){var n=typeof t=="function"?t:ht;if(e.length===0)n();else{var r=gr;v.mutateApproach===Ai&&(r=ce.requestAnimationFrame||gr),r(function(){var a=bo(),i=Ln.begin("mutate");e.map(a),i(),n()})}}var Rn=!1;function xa(){Rn=!0}function mn(){Rn=!1}var $t=null;function hr(e){if(ar&&v.observeMutations){var t=e.treeCallback,n=t===void 0?ht:t,r=e.nodeCallback,a=r===void 0?ht:r,i=e.pseudoElementsCallback,o=i===void 0?ht:i,s=e.observeMutationsRoot,l=s===void 0?T:s;$t=new ar(function(f){if(!Rn){var c=fe();Ie(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!mr(u.addedNodes[0])&&(v.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&v.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&mr(u.target)&&~Pi.indexOf(u.attributeName))if(u.attributeName==="class"&&vo(u.target)){var d=Mt(On(u.target)),m=d.prefix,p=d.iconName;u.target.setAttribute(Cn,m||c),p&&u.target.setAttribute($n,p)}else po(u.target)&&a(u.target)})}}),oe&&$t.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ko(){$t&&$t.disconnect()}function So(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ao(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mt(On(e));return a.prefix||(a.prefix=fe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=eo(a.prefix,e.innerText)||Pn(a.prefix,on(e.innerText))),!a.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Co(e){var t=Ie(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(r||He()):(t["aria-hidden"]="true",t.focusable="false")),t}function $o(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ee,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ao(e),r=n.iconName,a=n.prefix,i=n.rest,o=Co(e),s=ln("parseNodeAttributes",{},e),l=t.styleParser?So(e):[];return g({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ee,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Eo=K.styles;function ka(e){var t=v.autoReplaceSvg==="nest"?vr(e,{styleParser:!1}):vr(e);return~t.extra.classes.indexOf(aa)?ie("generateLayersText",e,t):ie("generateSvgReplacementMutation",e,t)}var ue=new Set;En.map(function(e){ue.add("fa-".concat(e))});Object.keys(We[I]).map(ue.add.bind(ue));Object.keys(We[R]).map(ue.add.bind(ue));ue=et(ue);function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!oe)return Promise.resolve();var n=T.documentElement.classList,r=function(u){return n.add("".concat(ir,"-").concat(u))},a=function(u){return n.remove("".concat(ir,"-").concat(u))},i=v.autoFetchSvg?ue:En.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Eo));i.includes("fa")||i.push("fa");var o=[".".concat(aa,":not([").concat(pe,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(pe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ln.begin("onTree"),f=s.reduce(function(c,u){try{var d=ka(u);d&&c.push(d)}catch(m){ra||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(d){wa(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),u(d)})})}function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ka(e).then(function(n){n&&wa([n],t)})}function No(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:cn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:cn(a||{})),e(r,g(g({},n),{},{mask:a}))}}var _o=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?ee:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,u=n.title,d=u===void 0?null:u,m=n.titleId,p=m===void 0?null:m,h=n.classes,w=h===void 0?[]:h,y=n.attributes,b=y===void 0?{}:y,x=n.styles,P=x===void 0?{}:x;if(t){var _=t.prefix,z=t.iconName,A=t.icon;return zt(g({type:"icon"},t),function(){return be("beforeDOMElementCreation",{iconDefinition:t,params:n}),v.autoA11y&&(d?b["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(p||He()):(b["aria-hidden"]="true",b.focusable="false")),Tn({icons:{main:fn(A),mask:l?fn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:z,transform:g(g({},ee),a),symbol:o,title:d,maskId:c,titleId:p,extra:{attributes:b,styles:P,classes:w}})})}},Po={mixout:function(){return{icon:No(_o)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=pr,n.nodeCallback=Oo,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?T:r,i=n.callback,o=i===void 0?function(){}:i;return pr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,d=r.extra;return new Promise(function(m,p){Promise.all([un(a,s),c.iconName?un(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var w=Sn(h,2),y=w[0],b=w[1];m([n,Tn({icons:{main:y,mask:b},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:o,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Lt(s);l.length>0&&(a.style=l);var f;return Nn(o)&&(f=ie("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Io={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return zt({type:"layer"},function(){be("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(et(i)).join(" ")},children:o}]})}}}},To={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return zt({type:"counter",content:n},function(){return be("beforeDOMElementCreation",{content:n,params:r}),uo({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(et(s))}})})}}}},Lo={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?ee:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return zt({type:"text",content:n},function(){return be("beforeDOMElementCreation",{content:n,params:r}),ur({content:n,transform:g(g({},ee),i),title:s,extra:{attributes:u,styles:m,classes:["".concat(v.cssPrefix,"-layers-text")].concat(et(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ea){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return v.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ur({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ro=new RegExp('"',"ug"),br=[1105920,1112319];function Mo(e){var t=e.replace(Ro,""),n=Xi(t,0),r=n>=br[0]&&n<=br[1],a=t.length===2?t[0]===t[1]:!1;return{value:on(a?t[0]:t),isSecondary:r||a}}function yr(e,t){var n="".concat(Si).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ie(e.children),o=i.filter(function(A){return A.getAttribute(an)===t})[0],s=ce.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Oi),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?R:I,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Be[d][l[2].toLowerCase()]:Ni[d][f],p=Mo(u),h=p.value,w=p.isSecondary,y=l[0].startsWith("FontAwesome"),b=Pn(m,h),x=b;if(y){var P=to(h);P.iconName&&P.prefix&&(b=P.iconName,m=P.prefix)}if(b&&!w&&(!o||o.getAttribute(Cn)!==m||o.getAttribute($n)!==x)){e.setAttribute(n,x),o&&e.removeChild(o);var _=$o(),z=_.extra;z.attributes[an]=t,un(b,m).then(function(A){var Bt=Tn(g(g({},_),{},{icons:{main:A,mask:In()},prefix:m,iconName:x,extra:z,watchable:!0})),se=T.createElement("svg");t==="::before"?e.insertBefore(se,e.firstChild):e.appendChild(se),se.outerHTML=Bt.map(function(Da){return nt(Da)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function zo(e){return Promise.all([yr(e,"::before"),yr(e,"::after")])}function Do(e){return e.parentNode!==document.head&&!~Ci.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(an)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wr(e){if(oe)return new Promise(function(t,n){var r=Ie(e.querySelectorAll("*")).filter(Do).map(zo),a=Ln.begin("searchPseudoElements");xa(),Promise.all(r).then(function(){a(),mn(),t()}).catch(function(){a(),mn(),n()})})}var jo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?T:r;v.searchPseudoElements&&wr(a)}}},xr=!1,Fo={mixout:function(){return{dom:{unwatch:function(){xa(),xr=!0}}}},hooks:function(){return{bootstrap:function(){hr(ln("mutationObserverCallbacks",{}))},noAuto:function(){ko()},watch:function(n){var r=n.observeMutationsRoot;xr?mn():hr(ln("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},kr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Wo={mixout:function(){return{parse:{transform:function(n){return kr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=kr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:u,path:d};return{tag:"g",attributes:g({},m.outer),children:[{tag:"g",attributes:g({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:g(g({},r.icon.attributes),m.path)}]}]}}}},Vt={x:0,y:0,width:"100%",height:"100%"};function Sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bo(e){return e.tag==="g"?e.children:[e]}var Yo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mt(a.split(" ").map(function(o){return o.trim()})):In();return i.prefix||(i.prefix=fe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,u=o.width,d=o.icon,m=Fi({transform:l,containerWidth:u,iconWidth:f}),p={tag:"rect",attributes:g(g({},Vt),{},{fill:"white"})},h=c.children?{children:c.children.map(Sr)}:{},w={tag:"g",attributes:g({},m.inner),children:[Sr(g({tag:c.tag,attributes:g(g({},c.attributes),m.path)},h))]},y={tag:"g",attributes:g({},m.outer),children:[w]},b="mask-".concat(s||He()),x="clip-".concat(s||He()),P={tag:"mask",attributes:g(g({},Vt),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Bo(d)},P]};return r.push(_,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(b,")")},Vt)}),{children:r,attributes:a}}}},Uo={provides:function(t){var n=!1;ce.matchMedia&&(n=ce.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:g(g({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=g(g({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:g(g({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:g(g({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:g(g({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:g(g({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:g(g({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ho={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Go=[Yi,Po,Io,To,Lo,jo,Fo,Wo,Yo,Uo,Ho];ao(Go,{mixoutsTo:X});X.noAuto;X.config;var Vo=X.library;X.dom;X.parse;X.findIconDefinition;X.toHtml;var Xo=X.icon;X.layer;X.text;X.counter;var qo={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Ko={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Jo={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Qo={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Zo={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},es=Zo,ts={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};const de=(...e)=>e.filter(Boolean).join(" ");function ns(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rs(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var as=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rs(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ns(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),B="-ms-",Et="-moz-",C="-webkit-",Sa="comm",Mn="rule",zn="decl",is="@import",Aa="@keyframes",os=Math.abs,Dt=String.fromCharCode,ss=Object.assign;function ls(e,t){return W(e,0)^45?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}function Ca(e){return e.trim()}function cs(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,n){return e.replace(t,n)}function gn(e,t){return e.indexOf(t)}function W(e,t){return e.charCodeAt(t)|0}function Ge(e,t,n){return e.slice(t,n)}function Q(e){return e.length}function Dn(e){return e.length}function gt(e,t){return t.push(e),e}function fs(e,t){return e.map(t).join("")}var jt=1,Ne=1,$a=0,G=0,D=0,Te="";function Ft(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:jt,column:Ne,length:o,return:""}}function Le(e,t){return ss(Ft("",null,null,"",null,null,0),e,{length:-e.length},t)}function us(){return D}function ds(){return D=G>0?W(Te,--G):0,Ne--,D===10&&(Ne=1,jt--),D}function V(){return D=G<$a?W(Te,G++):0,Ne++,D===10&&(Ne=1,jt++),D}function te(){return W(Te,G)}function pt(){return G}function rt(e,t){return Ge(Te,e,t)}function Ve(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ea(e){return jt=Ne=1,$a=Q(Te=e),G=0,[]}function Oa(e){return Te="",e}function bt(e){return Ca(rt(G-1,hn(e===91?e+2:e===40?e+1:e)))}function ms(e){for(;(D=te())&&D<33;)V();return Ve(e)>2||Ve(D)>3?"":" "}function gs(e,t){for(;--t&&V()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return rt(e,pt()+(t<6&&te()==32&&V()==32))}function hn(e){for(;V();)switch(D){case e:return G;case 34:case 39:e!==34&&e!==39&&hn(D);break;case 40:e===41&&hn(e);break;case 92:V();break}return G}function hs(e,t){for(;V()&&e+D!==47+10;)if(e+D===42+42&&te()===47)break;return"/*"+rt(t,G-1)+"*"+Dt(e===47?e:V())}function vs(e){for(;!Ve(te());)V();return rt(e,G)}function ps(e){return Oa(yt("",null,null,null,[""],e=Ea(e),0,[0],e))}function yt(e,t,n,r,a,i,o,s,l){for(var f=0,c=0,u=o,d=0,m=0,p=0,h=1,w=1,y=1,b=0,x="",P=a,_=i,z=r,A=x;w;)switch(p=b,b=V()){case 40:if(p!=108&&W(A,u-1)==58){gn(A+=E(bt(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:A+=bt(b);break;case 9:case 10:case 13:case 32:A+=ms(p);break;case 92:A+=gs(pt()-1,7);continue;case 47:switch(te()){case 42:case 47:gt(bs(hs(V(),pt()),t,n),l);break;default:A+="/"}break;case 123*h:s[f++]=Q(A)*y;case 125*h:case 59:case 0:switch(b){case 0:case 125:w=0;case 59+c:m>0&&Q(A)-u&&gt(m>32?Cr(A+";",r,n,u-1):Cr(E(A," ","")+";",r,n,u-2),l);break;case 59:A+=";";default:if(gt(z=Ar(A,t,n,f,c,a,s,x,P=[],_=[],u),i),b===123)if(c===0)yt(A,t,z,z,P,i,u,s,_);else switch(d===99&&W(A,3)===110?100:d){case 100:case 109:case 115:yt(e,z,z,r&&gt(Ar(e,z,z,0,0,a,s,x,a,P=[],u),_),a,_,u,s,r?P:_);break;default:yt(A,z,z,z,[""],_,0,s,_)}}f=c=m=0,h=y=1,x=A="",u=o;break;case 58:u=1+Q(A),m=p;default:if(h<1){if(b==123)--h;else if(b==125&&h++==0&&ds()==125)continue}switch(A+=Dt(b),b*h){case 38:y=c>0?1:(A+="\f",-1);break;case 44:s[f++]=(Q(A)-1)*y,y=1;break;case 64:te()===45&&(A+=bt(V())),d=te(),c=u=Q(x=A+=vs(pt())),b++;break;case 45:p===45&&Q(A)==2&&(h=0)}}return i}function Ar(e,t,n,r,a,i,o,s,l,f,c){for(var u=a-1,d=a===0?i:[""],m=Dn(d),p=0,h=0,w=0;p<r;++p)for(var y=0,b=Ge(e,u+1,u=os(h=o[p])),x=e;y<m;++y)(x=Ca(h>0?d[y]+" "+b:E(b,/&\f/g,d[y])))&&(l[w++]=x);return Ft(e,t,n,a===0?Mn:s,l,f,c)}function bs(e,t,n){return Ft(e,t,n,Sa,Dt(us()),Ge(e,2,-2),0)}function Cr(e,t,n,r){return Ft(e,t,n,zn,Ge(e,0,r),Ge(e,r+1,-1),r)}function Ce(e,t){for(var n="",r=Dn(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function ys(e,t,n,r){switch(e.type){case is:case zn:return e.return=e.return||e.value;case Sa:return"";case Aa:return e.return=e.value+"{"+Ce(e.children,r)+"}";case Mn:e.value=e.props.join(",")}return Q(n=Ce(e.children,r))?e.return=e.value+"{"+n+"}":""}function ws(e){var t=Dn(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function xs(e){return function(t){t.root||(t=t.return)&&e(t)}}function ks(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ss=function(t,n,r){for(var a=0,i=0;a=i,i=te(),a===38&&i===12&&(n[r]=1),!Ve(i);)V();return rt(t,G)},As=function(t,n){var r=-1,a=44;do switch(Ve(a)){case 0:a===38&&te()===12&&(n[r]=1),t[r]+=Ss(G-1,n,r);break;case 2:t[r]+=bt(a);break;case 4:if(a===44){t[++r]=te()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Dt(a)}while(a=V());return t},Cs=function(t,n){return Oa(As(Ea(t),n))},$r=new WeakMap,$s=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!$r.get(r))&&!a){$r.set(t,!0);for(var i=[],o=Cs(n,i),s=r.props,l=0,f=0;l<o.length;l++)for(var c=0;c<s.length;c++,f++)t.props[f]=i[l]?o[l].replace(/&\f/g,s[c]):s[c]+" "+o[l]}}},Es=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Na(e,t){switch(ls(e,t)){case 5103:return C+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return C+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return C+e+Et+e+B+e+e;case 6828:case 4268:return C+e+B+e+e;case 6165:return C+e+B+"flex-"+e+e;case 5187:return C+e+E(e,/(\w+).+(:[^]+)/,C+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return C+e+B+"flex-item-"+E(e,/flex-|-self/,"")+e;case 4675:return C+e+B+"flex-line-pack"+E(e,/align-content|flex-|-self/,"")+e;case 5548:return C+e+B+E(e,"shrink","negative")+e;case 5292:return C+e+B+E(e,"basis","preferred-size")+e;case 6060:return C+"box-"+E(e,"-grow","")+C+e+B+E(e,"grow","positive")+e;case 4554:return C+E(e,/([^-])(transform)/g,"$1"+C+"$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,C+"$1"),/(image-set)/,C+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,C+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,C+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+C+e+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,C+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Q(e)-1-t>6)switch(W(e,t+1)){case 109:if(W(e,t+4)!==45)break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1"+C+"$2-$3$1"+Et+(W(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gn(e,"stretch")?Na(E(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(W(e,t+1)!==115)break;case 6444:switch(W(e,Q(e)-3-(~gn(e,"!important")&&10))){case 107:return E(e,":",":"+C)+e;case 101:return E(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+C+(W(e,14)===45?"inline-":"")+"box$3$1"+C+"$2$3$1"+B+"$2box$3")+e}break;case 5936:switch(W(e,t+11)){case 114:return C+e+B+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return C+e+B+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return C+e+B+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return C+e+B+e+e}return e}var Os=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case zn:t.return=Na(t.value,t.length);break;case Aa:return Ce([Le(t,{value:E(t.value,"@","@"+C)})],a);case Mn:if(t.length)return fs(t.props,function(i){switch(cs(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ce([Le(t,{props:[E(i,/:(read-\w+)/,":"+Et+"$1")]})],a);case"::placeholder":return Ce([Le(t,{props:[E(i,/:(plac\w+)/,":"+C+"input-$1")]}),Le(t,{props:[E(i,/:(plac\w+)/,":"+Et+"$1")]}),Le(t,{props:[E(i,/:(plac\w+)/,B+"input-$1")]})],a)}return""})}},Ns=[Os],_s=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var w=h.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var a=t.stylisPlugins||Ns,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var w=h.getAttribute("data-emotion").split(" "),y=1;y<w.length;y++)i[w[y]]=!0;s.push(h)});var l,f=[$s,Es];{var c,u=[ys,xs(function(h){c.insert(h)})],d=ws(f.concat(a,u)),m=function(w){return Ce(ps(w),d)};l=function(w,y,b,x){c=b,m(w?w+"{"+y.styles+"}":y.styles),x&&(p.inserted[y.name]=!0)}}var p={key:n,sheet:new as({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return p.sheet.hydrate(s),p};function Ps(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Is={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ts=/[A-Z]|^ms/g,Ls=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_a=function(t){return t.charCodeAt(1)===45},Er=function(t){return t!=null&&typeof t!="boolean"},Xt=ks(function(e){return _a(e)?e:e.replace(Ts,"-$&").toLowerCase()}),Or=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ls,function(r,a,i){return Z={name:a,styles:i,next:Z},a})}return Is[t]!==1&&!_a(t)&&typeof n=="number"&&n!==0?n+"px":n};function Xe(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Z={name:n.name,styles:n.styles,next:Z},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Z={name:r.name,styles:r.styles,next:Z},r=r.next;var a=n.styles+";";return a}return Rs(e,t,n)}case"function":{if(e!==void 0){var i=Z,o=n(e);return Z=i,Xe(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Rs(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Xe(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Er(o)&&(r+=Xt(i)+":"+Or(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Er(o[s])&&(r+=Xt(i)+":"+Or(i,o[s])+";");else{var l=Xe(e,t,o);switch(i){case"animation":case"animationName":{r+=Xt(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var Nr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Z,qt=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";Z=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Xe(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Xe(r,n,t[s]),a&&(i+=o[s]);Nr.lastIndex=0;for(var l="",f;(f=Nr.exec(i))!==null;)l+="-"+f[1];var c=Ps(i)+l;return{name:c,styles:i,next:Z}},Ms=!0;function Pa(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var zs=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||Ms===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Ds=function(t,n,r){zs(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function _r(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function Pr(e,t,n){var r=[],a=Pa(e,r,n);return r.length<2?n:a+t(r)}var js=function(t){var n=_s(t);n.sheet.speedy=function(s){this.isSpeedy=s},n.compat=!0;var r=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered,void 0);return Ds(n,u,!1),n.key+"-"+u.name},a=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered),d="animation-"+u.name;return _r(n,{name:u.name,styles:"@keyframes "+d+"{"+u.styles+"}"}),d},i=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];var u=qt(f,n.registered);_r(n,u)},o=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];return Pr(n.registered,r,Fs(f))};return{css:r,cx:o,injectGlobal:i,keyframes:a,hydrate:function(l){l.forEach(function(f){n.inserted[f]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:Pa.bind(null,n.registered),merge:Pr.bind(null,n.registered,r)}},Fs=function e(t){for(var n="",r=0;r<t.length;r++){var a=t[r];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))i=e(a);else{i="";for(var o in a)a[o]&&o&&(i&&(i+=" "),i+=o)}break}default:i=a}i&&(n&&(n+=" "),n+=i)}}return n},Ws=js({key:"css"}),S=Ws.css;const Wt=e=>n=>{const[r,a]=Qe(n,["className","m","mb","ml","mr","mt","p","pb","pl","pr","pt"]);return $(e,Pe(a,{get className(){return de(S({margin:r.m,marginBlockEnd:r.mb,marginInlineStart:r.ml,marginInlineEnd:r.mr,marginBlockStart:r.mt,padding:r.p,paddingBlockEnd:r.pb,paddingInlineStart:r.pl,paddingInlineEnd:r.pr,paddingBlockStart:r.pt}),r.className)}}))},Bs=S({width:"var(--size)",height:"var(--size)",display:"flex",justifyContent:"center","& svg":{height:"100%",color:"inherit"}}),Ys=L("<span></span>"),Us=[Ko,Qo,ts,es,Jo,qo];Vo.add(...Us);const jn=e=>(()=>{const t=Ys.cloneNode(!0);return N(n=>{var o;const r=de(Bs,e.class),a=(o=Xo({prefix:"fas",iconName:e.iconName}))==null?void 0:o.html,i=`${e.size??20}px`;return r!==n._v$&&O(t,n._v$=r),a!==n._v$2&&(t.innerHTML=n._v$2=a),i!==n._v$3&&t.style.setProperty("--size",n._v$3=i),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),Hs=S({color:"#868e96",padding:3,border:"none",backgroundColor:"transparent",cursor:"pointer",width:"var(--size)",height:"var(--size)",borderRadius:2,transition:"background-color 200ms ease",":hover":{backgroundColor:"#ecedf0"},"> *":{width:"100%",height:"100%"}}),Gs=L("<button></button>"),Fn=e=>{const[t,n]=Qe(e,["onClick","size","iconName"]);return(()=>{const r=Gs.cloneNode(!0);return r.$$click=a=>{var i;return(i=t.onClick)==null?void 0:i.call(t,a)},Tt(r,Pe({get class(){return Hs},get style(){return{"--size":`${t.size}px`}}},n),!1,!0),k(r,$(jn,{get iconName(){return t.iconName},get size(){return t.size}})),r})()};Ze(["click"]);const Vs=L("<div></div>"),Xs=e=>(()=>{const t=Vs.cloneNode(!0);return k(t,()=>e.children),N(()=>O(t,de(S({height:e.height,maxWidth:e.maxWidth,marginInline:"auto",paddingInline:16}),e.className))),t})(),Wn=Wt(Xs),qs=S({position:"fixed",top:0,right:0,bottom:0,left:0,width:"100%",zIndex:1,opacity:0,transition:"opacity 300ms",willChange:"opacity",backgroundColor:"#000",userSelect:"none","&.isOpen":{opacity:.7}}),Ks=S({position:"fixed",top:0,left:0,bottom:0,height:"100%",width:"100%",maxWidth:"500px",zIndex:2,overflow:"auto",transition:"transform 200ms",willChange:"transform",backgroundColor:"#fff",display:"flex",flexDirection:"column",transform:"translate3d(-103%, 0, 0)",boxShadow:"6px 0px 16px 2px #777","&.isOpen":{transform:"translate3d(0%, 0, 0)"}}),Js=S({padding:16,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #ddd"}),Qs=S({position:"relative",overflowX:"hidden",overflowY:"auto",height:"100%",flex:"1",padding:16}),Zs=L("<div></div>"),el=L('<div aria-labelledby="drawer-header" role="dialog"><header id="drawer-header"><div></div></header><div></div></div>'),vn="drawer-container-id";if(!document.getElementById(vn)){const e=document.createElement("div");e.setAttribute("id",vn),document.body.appendChild(e)}const tl=e=>{const[t,n]=q(!1);let r,a;return Fe(()=>{e.isOpen&&n(!0),!e.isOpen&&t()&&setTimeout(()=>{n(!1)},300)}),Fe(()=>{e.isOpen?setTimeout(()=>{r==null||r.classList.add("isOpen"),a==null||a.classList.add("isOpen")},0):(r==null||r.classList.remove("isOpen"),a==null||a.classList.remove("isOpen"))}),$(mi,{get mount(){return document.getElementById(vn)},get children(){return $(en,{get when(){return t()},get children(){return[(()=>{const i=Zs.cloneNode(!0),o=r;return typeof o=="function"?qn(o,i):r=i,i.$$click=()=>e.onClose(),N(()=>O(i,de(qs))),i})(),(()=>{const i=el.cloneNode(!0),o=i.firstChild,s=o.firstChild,l=o.nextSibling,f=a;return typeof f=="function"?qn(f,i):a=i,k(s,()=>e.heading),k(o,$(Fn,{get["aria-label"](){return e.closeIconLabel??"close"},iconName:"close",get onClick(){return e.onClose},size:30}),null),k(l,()=>e.children),N(c=>{const u=Ks,d=Js,m=Qs;return u!==c._v$&&O(i,c._v$=u),d!==c._v$2&&O(o,c._v$2=d),m!==c._v$3&&O(l,c._v$3=m),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()]}})}})};Ze(["click"]);const nl={light:300,normal:400,bold:700,300:300,400:400,500:500,600:600,700:700,800:800},rl={1:"2rem",2:"1.8rem",3:"1.6rem",4:"1.4rem",5:"1.2rem",6:"1rem"},al=e=>{const t=Pe({level:1},e);return $(qr,{get tabIndex(){return t.shouldAutoFocus?-1:void 0},get component(){return`h${t.level}`},get class(){return de(t.className,S({fontFamily:"'Raleway', sans-serif",fontSize:t.size?t.size:rl[t.level],fontWeight:t.weight?nl[t.weight]:"bold"}))},get children(){return t.children}})},Bn=Wt(al),il=S({display:"flex",flexDirection:"column",gap:4,fontSize:"1rem",fontWeight:500}),ol=S({":after":{content:'" *"',color:"red",fontSize:"1.1rem"}}),sl=S({height:40,borderRadius:4,padding:8,paddingInlineStart:16,border:"1px solid lightgrey",":disabled":{cursor:"not-allowed",color:"darkgray"}});S({color:"red",fontSize:"1.1rem"});const ll=S({color:"red"}),cl=L("<div><label></label><input></div>"),fl=L("<span></span>"),ul=e=>{const[t,n]=Qe(e,["className","error","isRequired","label","onInput","value"]),r=U(()=>de(il,t.className)),a=U(()=>de(t.isRequired&&ol));return(()=>{const i=cl.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return k(o,()=>t.label),Tt(s,Pe({get class(){return sl}},n,{get["aria-required"](){return t.isRequired},get id(){return t.label},onInput:l=>t.onInput(l),get value(){return t.value}}),!1,!1),k(i,(()=>{const l=U(()=>!!t.error);return()=>l()&&(()=>{const f=fl.cloneNode(!0);return k(f,()=>t.error),N(()=>O(f,ll)),f})()})(),null),N(l=>{const f=r(),c=a(),u=t.label;return f!==l._v$&&O(i,l._v$=f),c!==l._v$2&&O(o,l._v$2=c),u!==l._v$3&&It(o,"for",l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()},dl=Wt(ul),ml=S({position:"relative",width:"max-content",borderRadius:4,":has(select:focus)":{outline:"2px solid black",outlineOffset:4}}),gl=S({position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,":hover":{cursor:"pointer","+ *":{color:"hsl(0deg 0% 00%)"}},":disabled":{cursor:"not-allowed","+ *":{color:"hsl(0deg 0% 30%)"}}}),hl=S({color:"hsl(0deg 0% 20%)",padding:"12px 16px",fontSize:"1rem",fontWeight:500,backgroundColor:"hsl(0deg 0% 90%)",borderRadius:4,display:"flex",gap:16,alignItems:"center",transition:"color 200ms ease"}),vl=L("<div><select></select><div></div></div>"),pl=L("<option></option>"),bl=e=>{const[t,n]=Qe(e,["onChange","value","options"]);return(()=>{const r=vl.cloneNode(!0),a=r.firstChild,i=a.nextSibling;return a.addEventListener("change",o=>t.onChange(o)),Tt(a,Pe({get class(){return gl}},n),!1,!0),k(a,$(Vr,{get each(){return t.options},children:o=>(()=>{const s=pl.cloneNode(!0);return k(s,()=>o.label),N(()=>s.selected=o.value===t.value),N(()=>s.value=o.value),s})()})),k(i,()=>t.options[parseInt(t.value)].label,null),k(i,$(jn,{iconName:"chevron-down",size:15}),null),N(o=>{const s=ml,l=hl;return s!==o._v$&&O(r,o._v$=s),l!==o._v$2&&O(i,o._v$2=l),o},{_v$:void 0,_v$2:void 0}),r})()},Ot=["pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","shortBreak","pomodoro","longBreak"],[$e,pn]=q(0),yl=()=>{$e()===Ot.length-1?pn(0):pn($e()+1)},bn=()=>Ot[$e()],[Se,Ir]=q("stopped"),yn=Symbol("store-raw"),qe=Symbol("store-node"),wl=Symbol("store-name");function Ia(e,t){let n=e[J];if(!n&&(Object.defineProperty(e,J,{value:n=new Proxy(e,Sl)}),!Array.isArray(e))){const r=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let i=0,o=r.length;i<o;i++){const s=r[i];a[s].get&&Object.defineProperty(e,s,{enumerable:a[s].enumerable,get:a[s].get.bind(n)})}}return n}function Nt(e){let t;return e!=null&&typeof e=="object"&&(e[J]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Ke(e,t=new Set){let n,r,a,i;if(n=e!=null&&e[yn])return n;if(!Nt(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,s=e.length;o<s;o++)a=e[o],(r=Ke(a,t))!==a&&(e[o]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let l=0,f=o.length;l<f;l++)i=o[l],!s[i].get&&(a=e[i],(r=Ke(a,t))!==a&&(e[i]=r))}return e}function Yn(e){let t=e[qe];return t||Object.defineProperty(e,qe,{value:t={}}),t}function wn(e,t,n){return e[t]||(e[t]=La(n))}function xl(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===J||t===qe||t===wl||(delete n.value,delete n.writable,n.get=()=>e[J][t]),n}function Ta(e){if(Wr()){const t=Yn(e);(t._||(t._=La()))()}}function kl(e){return Ta(e),Reflect.ownKeys(e)}function La(e){const[t,n]=q(e,{equals:!1,internal:!0});return t.$=n,t}const Sl={get(e,t,n){if(t===yn)return e;if(t===J)return n;if(t===Jt)return Ta(e),n;const r=Yn(e),a=r.hasOwnProperty(t);let i=a?r[t]():e[t];if(t===qe||t==="__proto__")return i;if(!a){const o=Object.getOwnPropertyDescriptor(e,t);Wr()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(i=wn(r,t,i)())}return Nt(i)?Ia(i):i},has(e,t){return t===yn||t===J||t===Jt||t===qe||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:kl,getOwnPropertyDescriptor:xl};function _t(e,t,n,r=!1){if(!r&&e[t]===n)return;const a=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let o=Yn(e),s;(s=wn(o,t,a))&&s.$(()=>n),Array.isArray(e)&&e.length!==i&&(s=wn(o,"length",i))&&s.$(e.length),(s=o._)&&s.$()}function Ra(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const a=n[r];_t(e,a,t[a])}}function Al(e,t){if(typeof t=="function"&&(t=t(e)),t=Ke(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const a=t[n];e[n]!==a&&_t(e,n,a)}_t(e,"length",r)}else Ra(e,t)}function Me(e,t,n=[]){let r,a=e;if(t.length>1){r=t.shift();const o=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let l=0;l<r.length;l++)Me(e,[r[l]].concat(t),n);return}else if(s&&o==="function"){for(let l=0;l<e.length;l++)r(e[l],l)&&Me(e,[l].concat(t),n);return}else if(s&&o==="object"){const{from:l=0,to:f=e.length-1,by:c=1}=r;for(let u=l;u<=f;u+=c)Me(e,[u].concat(t),n);return}else if(t.length>1){Me(e[r],t,[r].concat(n));return}a=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(a,n),i===a)||r===void 0&&i==null||(i=Ke(i),r===void 0||Nt(a)&&Nt(i)&&!Array.isArray(i)?Ra(a,i):_t(e,r,i))}function Cl(...[e,t]){const n=Ke(e||{}),r=Array.isArray(n),a=Ia(n);function i(...o){Wa(()=>{r&&o.length===1?Al(n,o[0]):Me(n,o)})}return[a,i]}const Ma="app-settings",Tr={durations:{longBreak:10,pomodoro:25,shortBreak:5}},$l=()=>{const e=globalThis.localStorage.getItem(Ma);if(!e)return Tr;let t;try{t=JSON.parse(e)}catch(n){console.error(n),t=Tr}return t},[Un,El]=Cl($l()),Ol=()=>{Fe(()=>{globalThis.localStorage.setItem(Ma,JSON.stringify(Un))})},Nl=S({textAlign:"center",paddingBlockEnd:48,fontWeight:500,fontSize:"7rem"}),_l=S({display:"flex",gap:20,justifyContent:"center"}),Hn={padding:"16px 32px",border:"none",cursor:"pointer",color:"#fff",borderRadius:4,fontWeight:700,fontSize:"1.4rem",transition:"background-color 200ms ease",":focus":{outline:"2px solid #339af0",outlineOffset:2},":disabled":{cursor:"not-allowed",backgroundColor:"lightgrey",color:"darkgray"}},Pl=S({...Hn,backgroundColor:"hsl(131, 51%, 29%)",":not(:disabled):hover":{backgroundColor:"hsl(131, 51%, 25%)"}}),Il=S({...Hn,backgroundColor:"hsl(42, 95%, 37%)",":not(:disabled):hover":{backgroundColor:"hsl(42, 95%, 33%)"}}),Tl=S({...Hn,backgroundColor:"hsl(0, 94%, 38%)",":not(:disabled):hover":{backgroundColor:"hsl(0, 94%, 34%)"}}),Lr=e=>e.toString().padStart(2,"0"),Ll=e=>{const t=Math.floor(e/60),n=e-t*60;return`${Lr(t)}:${Lr(n)}`},Rl=e=>({stopWorkerCounter(){const t={type:"stop"};e.postMessage(t)},startWorkerCounter(t){const n={type:"start",time:t};e.postMessage(n)}}),Ml=L('<div data-testid="remainingTime"></div>'),zl=L("<div><button>Reset</button></div>"),Dl=L("<button>Start</button>"),jl=L("<button>Pause</button>"),za=new Worker(new URL("/pomodoro/assets/worker-b3a0bc9e.js",self.location)),{startWorkerCounter:Fl,stopWorkerCounter:Wl}=Rl(za),Bl=e=>{const t=()=>Un.durations[bn()]*60,[n,r]=q(t()),a=U(()=>Se()==="stopped"&&n()>0),i=U(()=>Se()==="stopped"),o=U(()=>Se()==="running"&&n()>0),s=()=>{Fl(a()?n():t()),Ir("running")},l=()=>{Wl(),Ir("stopped")},f=()=>{r(t()),l()},c=()=>{za.onmessage=({data:d})=>{var m;r(d.newTime),d.newTime===0&&(l(),(m=e.onComplete)==null||m.call(e))}},u=()=>{r(t())};return Fe(c),Fe(u),[(()=>{const d=Ml.cloneNode(!0);return k(d,()=>Ll(n())),N(()=>O(d,Nl)),d})(),(()=>{const d=zl.cloneNode(!0),m=d.firstChild;return k(d,(()=>{const p=U(()=>!!i());return()=>p()&&(()=>{const h=Dl.cloneNode(!0);return h.$$click=s,N(w=>{const y=Pl,b=n()===0;return y!==w._v$4&&O(h,w._v$4=y),b!==w._v$5&&(h.disabled=w._v$5=b),w},{_v$4:void 0,_v$5:void 0}),h})()})(),m),k(d,(()=>{const p=U(()=>!!o());return()=>p()&&(()=>{const h=jl.cloneNode(!0);return h.$$click=l,N(()=>O(h,Il)),h})()})(),m),m.$$click=f,N(p=>{const h=_l,w=Tl,y=Se()==="running";return h!==p._v$&&O(d,p._v$=h),w!==p._v$2&&O(m,p._v$2=w),y!==p._v$3&&(m.disabled=p._v$3=y),p},{_v$:void 0,_v$2:void 0,_v$3:void 0}),d})()]};Ze(["click"]);const Kt={pomodoro:{text:"Pomodoro",color:"hsl(209, 75%, 38%)"},shortBreak:{text:"Short break",color:"hsl(131, 51%, 29%)"},longBreak:{text:"Long break",color:"hsl(288, 54%, 40%)"}},Yl=S({display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:8}),Rr=S({fontSize:"1.8rem",fontWeight:"bold"}),Ul=L("<div></div>"),Hl=L("<span></span>"),Mr="counter-select",Gl=e=>{const[t,n]=q(!1),r=()=>n(i=>!i),a=U(()=>Ot.map((i,o)=>({label:`${o+1}. ${Kt[i].text}`,value:o.toString()})));if($e()<0||$e()+1>Ot.length)throw new Error("Invalid currentCounterIndex value");return(()=>{const i=Ul.cloneNode(!0);return k(i,$(qr,{get class(){return Rr},get component(){return t()?"label":"span"},get for(){return t()?Mr:void 0},children:"Current timer:"}),null),k(i,(()=>{const o=U(()=>!!t());return()=>o()?$(bl,{id:Mr,get disabled(){return Se()!=="stopped"},get value(){return $e().toString()},onChange:({currentTarget:s})=>{pn(parseInt(s.value))},get options(){return a()}}):(()=>{const s=Hl.cloneNode(!0);return k(s,()=>` ${Kt[bn()].text}`),N(l=>{const f=Rr,c=Kt[bn()].color;return f!==l._v$&&O(s,l._v$=f),c!==l._v$2&&s.style.setProperty("color",l._v$2=c),l},{_v$:void 0,_v$2:void 0}),s})()})(),null),k(i,$(Fn,{get["aria-label"](){return t()?"close counter editing":"edit counter type"},get iconName(){return t()?"close":"pencil"},size:30,onClick:r}),null),N(()=>O(i,de(e.className,Yl))),i})()},Vl=Wt(Gl),Xl="2.4.1",ql=S({borderBlockStart:"1px solid lightgrey",paddingBlock:16}),Kl=S({display:"flex",alignItems:"center"}),Jl=S({marginInlineStart:"auto"}),Ql=L("<span>App version: </span>"),Zl=L('<a target="blank" href="https://github.com/MkMan/pomodoro" title="Source code"></a>'),ec=L("<footer></footer>"),tc=()=>(()=>{const e=ec.cloneNode(!0);return k(e,$(Wn,{get className(){return Kl},maxWidth:600,get children(){return[(()=>{const t=Ql.cloneNode(!0);return t.firstChild,k(t,Xl,null),t})(),(()=>{const t=Zl.cloneNode(!0);return k(t,$(jn,{size:15,iconName:"code"})),N(()=>O(t,Jl)),t})()]}})),N(()=>O(e,ql)),e})(),nc=S({display:"flex",columnGap:10,alignItems:"center"}),rc=S({borderBottom:"1px solid lightgrey"}),ac=L("<div></div>"),ic=L("<header></header>"),oc=e=>(()=>{const t=ic.cloneNode(!0);return k(t,$(Wn,{maxWidth:600,get children(){const n=ac.cloneNode(!0);return k(n,$(Fn,{"aria-label":"settings menu",iconName:"bars",get onClick(){return e.onSettingsClick},size:30}),null),k(n,$(Bn,{size:"3rem",children:"Pomodoro"}),null),N(()=>O(n,nc)),n}})),N(()=>O(t,rc)),t})(),sc="modulepreload",lc=function(e){return"/pomodoro/"+e},zr={},cc=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lc(i),i in zr)return;zr[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const u=a[c];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":sc,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,u)=>{f.addEventListener("load",c),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function fc(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisteredSW:i,onRegisterError:o}=e;let s,l,f;const c=async(d=!0)=>{await l,await(f==null?void 0:f())};async function u(){if("serviceWorker"in navigator){const{Workbox:d}=await cc(()=>import("./workbox-window.prod.es5-295a6886.js"),[]);s=new d("/pomodoro/sw.js",{scope:"/pomodoro/",type:"classic"}),f=async()=>{await(s==null?void 0:s.messageSkipWaiting())};{let m=!1;const p=()=>{m=!0,s==null||s.addEventListener("controlling",h=>{h.isUpdate&&window.location.reload()}),n==null||n()};s.addEventListener("installed",h=>{typeof h.isUpdate>"u"?typeof h.isExternal<"u"?h.isExternal?p():!m&&(r==null||r()):h.isExternal?window.location.reload():!m&&(r==null||r()):h.isUpdate||r==null||r()}),s.addEventListener("waiting",p),s.addEventListener("externalwaiting",p)}s.register({immediate:t}).then(m=>{i?i("/pomodoro/sw.js",m):a==null||a(m)}).catch(m=>{o==null||o(m)})}}return l=u(),c}function uc(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisteredSW:i,onRegisterError:o}=e,[s,l]=q(!1),[f,c]=q(!1),u=fc({immediate:t,onOfflineReady(){c(!0),r==null||r()},onNeedRefresh(){l(!0),n==null||n()},onRegistered:a,onRegisteredSW:i,onRegisterError:o});return{needRefresh:[s,l],offlineReady:[f,c],updateServiceWorker:u}}const dc=S({padding:0,margin:0,width:0,height:0}),mc=S({position:"fixed",right:0,bottom:0,margin:16,padding:16,border:"1px solid #8885",borderRadius:4,zIndex:1,textAlign:"left",boxShadow:"3px 4px 5px 0 #8885",backgroundColor:"white"}),gc=S({marginBottom:8,fontSize:"1.2rem",fontWeight:"bold"}),Dr=S({border:"1px solid #8885",outline:"none",marginRight:5,borderRadius:2,padding:"3px 10px",cursor:"pointer"}),hc=L("<button>Reload</button>"),vc=L("<div><div><span>App ready to work offline</span></div><button>Close</button></div>"),pc=L("<div></div>"),bc=()=>{const{needRefresh:[e,t],updateServiceWorker:n}=uc({onRegistered(a){console.log(`SW Registered: ${a}`)},onRegisterError(a){console.error("SW registration error",a)}}),r=()=>{t(!1)};return(()=>{const a=pc.cloneNode(!0);return k(a,$(en,{get when(){return e()},get children(){const i=vc.cloneNode(!0),o=i.firstChild,s=o.nextSibling;return k(i,$(en,{get when(){return e()},get children(){const l=hc.cloneNode(!0);return l.$$click=()=>n(!0),N(()=>O(l,Dr)),l}}),s),s.$$click=()=>r(),N(l=>{const f=mc,c=gc,u=Dr;return f!==l._v$&&O(i,l._v$=f),c!==l._v$2&&O(o,l._v$2=c),u!==l._v$3&&O(s,l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i}})),N(()=>O(a,dc)),a})()};Ze(["click"]);const yc=L("<section></section>"),wc=e=>{const t=Un.durations,n={isRequired:!0,mb:16,type:"number",min:1},r=[{label:"Pomodoro",stateName:"pomodoro"},{label:"Short break",stateName:"shortBreak"},{label:"Long break",stateName:"longBreak"}];return(()=>{const a=yc.cloneNode(!0);return k(a,$(Bn,{level:3,mb:16,children:"Durations"}),null),k(a,$(Vr,{each:r,children:({stateName:i,label:o})=>$(dl,Pe(n,{get disabled(){return Se()!=="stopped"},get error(){return t[i]<=0&&`${o} must be greater than 0`},label:o,onInput:s=>{const l=s.currentTarget.valueAsNumber||0;El("durations",i,l)},get value(){return t[i]===0?"":t[i]}}))}),null),N(()=>It(a,"data-testid",e.dataTestId)),a})()},xc=S({display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}),kc=S({flex:"1"}),Sc="/pomodoro/assets/alarm-1-42bf15fd.mp3",Ac={alarm1:Sc},Cc=()=>new Audio(Ac.alarm1),$c=L("<div><main></main></div>"),Ec=()=>{Ol();const e=Cc(),[t,n]=q(!1);return(()=>{const r=$c.cloneNode(!0),a=r.firstChild;return k(r,$(bc,{}),a),k(r,$(oc,{onSettingsClick:()=>n(!0)}),a),k(a,$(Wn,{maxWidth:600,pt:16,get children(){return[$(Vl,{pb:32,pt:32}),$(Bl,{onComplete:()=>{e.play().catch(console.error),yl()}})]}})),k(r,$(tl,{closeIconLabel:"close settings menu",get heading(){return $(Bn,{level:2,shouldAutoFocus:!0,children:"Settings"})},get isOpen(){return t()},onClose:()=>n(!1),get children(){return $(wc,{dataTestId:"appSettings"})}}),null),k(r,$(tc,{}),null),N(i=>{const o=xc,s=kc;return o!==i._v$&&O(r,i._v$=o),s!==i._v$2&&O(a,i._v$2=s),i},{_v$:void 0,_v$2:void 0}),r})()};ni(()=>$(Ec,{}),document.getElementById("root"));
