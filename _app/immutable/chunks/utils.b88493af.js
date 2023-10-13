const o=(t,n)=>Math.floor(Math.random()*(n-t+1)+t),s=t=>new Promise(n=>setTimeout(n,t)),e=()=>{const t=document.getAnimations().map(n=>n.finished);return Promise.all(t)};export{o as r,s,e as w};
