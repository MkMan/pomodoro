if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),d={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-87f47378.css",revision:null},{url:"assets/index-f6d53f81.js",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"assets/worker-b3a0bc9e.js",revision:null},{url:"index.html",revision:"c7d6f8d7ce4ee1aebde41755724048b5"},{url:"manifest.webmanifest",revision:"afd26b2460fded761f62e7e0244e5706"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));