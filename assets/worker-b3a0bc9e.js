(function(){"use strict";let t,s;const n=()=>{const e={type:"newTime",newTime:--t};self.postMessage(e)};self.addEventListener("message",({data:e})=>{if(e.type==="start"){const{time:r}=e;t=r,s=self.setInterval(n,1e3)}e.type==="stop"&&self.clearInterval(s)})})();
