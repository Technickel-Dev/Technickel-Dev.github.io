import{s as K,e as b,c as k,b as A,f as _,p as m,K as U,i as M,h as p,t as N,d as S,j as B,O as W,o as z,a as $,m as se,g as j,L as ne,B as Y,N as le,k as ae,F as re,I as oe}from"../chunks/scheduler.e858d4f6.js";import{S as J,i as Q,g as ie,b as F,e as ce,t as O,f as X,h as Z,c as ue,a as de,m as _e,d as fe}from"../chunks/index.cd7c875d.js";import{p as he}from"../chunks/stores.b85f90c5.js";import{s as q,r as pe}from"../chunks/utils.a5495163.js";import{f as L}from"../chunks/index.53b96f8c.js";function me(o){let t,a,l,n,s;return{c(){t=b("div"),a=N(o[0]),this.h()},l(e){t=k(e,"DIV",{class:!0});var i=A(t);a=S(i,o[0]),i.forEach(_),this.h()},h(){m(t,"class","answer svelte-re8fx2")},m(e,i){M(e,t,i),p(t,a),s=!0},p(e,i){o=e,(!s||i&1)&&B(a,o[0])},i(e){s||(e&&W(()=>{s&&(n&&n.end(1),l=X(t,L,{delay:ee,duration:D}),l.start())}),s=!0)},o(e){l&&l.invalidate(),e&&(n=Z(t,L,{duration:D})),s=!1},d(e){e&&_(t),e&&n&&n.end()}}}function ve(o){let t,a="8",l,n,s;return{c(){t=b("div"),t.textContent=a,this.h()},l(e){t=k(e,"DIV",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-180rca2"&&(t.textContent=a),this.h()},h(){m(t,"class","eight svelte-re8fx2")},m(e,i){M(e,t,i),s=!0},p(e,i){},i(e){s||(e&&W(()=>{s&&(n&&n.end(1),l=X(t,L,{delay:ee,duration:D}),l.start())}),s=!0)},o(e){l&&l.invalidate(),e&&(n=Z(t,L,{duration:D})),s=!1},d(e){e&&_(t),e&&n&&n.end()}}}function ge(o){let t,a,l,n;const s=[ve,me],e=[];function i(r,u){return r[0]==null?0:1}return l=i(o),n=e[l]=s[l](o),{c(){t=b("div"),a=b("div"),n.c(),this.h()},l(r){t=k(r,"DIV",{class:!0});var u=A(t);a=k(u,"DIV",{class:!0});var c=A(a);n.l(c),c.forEach(_),u.forEach(_),this.h()},h(){m(a,"class","inner-circle svelte-re8fx2"),m(t,"class","outer-circle svelte-re8fx2"),U(t,"shake",o[1])},m(r,u){M(r,t,u),p(t,a),e[l].m(a,null)},p(r,[u]){let c=l;l=i(r),l===c?e[l].p(r,u):(ie(),F(e[c],1,1,()=>{e[c]=null}),ce(),n=e[l],n?n.p(r,u):(n=e[l]=s[l](r),n.c()),O(n,1),n.m(a,null)),u&2&&U(t,"shake",r[1])},i(r){O(n)},o(r){F(n)},d(r){r&&_(t),e[l].d()}}}const D=3e3,ee=3e3,x=3e3;function ye(o,t,a){const l=["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];let n,s=!1;const e=async()=>{a(1,s=!0),await q(x),a(1,s=!1)};return[n,s,async()=>new Promise(async(r,u)=>{e();let c=pe(0,l.length-1);a(0,n=l[c]),await q(x+D),e(),a(0,n=void 0),await q(x+D),r()})]}class be extends J{constructor(t){super(),Q(this,t,ye,ge,K,{roll:2})}get roll(){return this.$$.ctx[2]}}function ke(o){let t,a="",l,n,s,e,i="Type '!8ball <<yes or no question here>>' to have the eight ball predict the future",r,u,c,T,v,C,f,E=o[2].replace(G,"")+"",w,h,R,I,te={};return c=new be({props:te}),o[3](c),{c(){t=b("script"),t.innerHTML=a,n=$(),s=b("div"),e=b("div"),r=N(i),u=$(),ue(c.$$.fragment),T=$(),v=b("div"),C=N(o[1]),f=N(" - "),w=N(E),this.h()},l(d){const g=se("svelte-1nbh741",document.head);t=k(g,"SCRIPT",{src:!0,"data-svelte-h":!0}),z(t)!=="svelte-i7ndq0"&&(t.innerHTML=a),g.forEach(_),n=j(d),s=k(d,"DIV",{role:!0,tabindex:!0,class:!0});var y=A(s);e=k(y,"DIV",{class:!0});var P=A(e);r=S(P,i),P.forEach(_),u=j(y),de(c.$$.fragment,y),T=j(y),v=k(y,"DIV",{class:!0});var V=A(v);C=S(V,o[1]),f=S(V," - "),w=S(V,E),V.forEach(_),y.forEach(_),this.h()},h(){ne(t.src,l="/tarot/tmi.min.js")||m(t,"src",l),m(e,"class","instructions svelte-ev09j7"),m(v,"class","description svelte-ev09j7"),m(s,"role","button"),m(s,"tabindex","0"),m(s,"class","container svelte-ev09j7")},m(d,g){p(document.head,t),M(d,n,g),M(d,s,g),p(s,e),p(e,r),p(s,u),_e(c,s,null),p(s,T),p(s,v),p(v,C),p(v,f),p(v,w),h=!0,R||(I=[Y(s,"click",o[4]),Y(s,"keydown",o[5])],R=!0)},p(d,[g]){const y={};c.$set(y),(!h||g&2)&&B(C,d[1]),(!h||g&4)&&E!==(E=d[2].replace(G,"")+"")&&B(w,E)},i(d){h||(O(c.$$.fragment,d),h=!0)},o(d){F(c.$$.fragment,d),h=!1},d(d){d&&(_(n),_(s)),_(t),o[3](null),fe(c),R=!1,le(I)}}}const H="None",Ee="None",G="!8ball ";function we(o,t,a){let l;ae(o,he,f=>a(7,l=f));let n,s=[],e,i=H,r=Ee;re(async()=>{n=l.url.searchParams.get("username"),u()});const u=()=>{const f=new window.tmi.Client({channels:[n]});f.connect(),f.on("message",(E,w,h,R)=>{let I=w["display-name"];console.log(`${I}: ${h}`),h.includes(G)&&(s.length==0?(s.push({name:I,message:h}),c()):s.push({name:I,message:h}))})},c=async()=>{a(1,i=s[0].name),a(2,r=s[0].message),i==null&&a(1,i=H),await e.roll(),s.shift(),s.length>0&&e.roll()};function T(f){oe[f?"unshift":"push"](()=>{e=f,a(0,e)})}return[e,i,r,T,()=>e.roll(),()=>e.roll()]}class Ne extends J{constructor(t){super(),Q(this,t,we,ke,K,{})}}export{Ne as component};