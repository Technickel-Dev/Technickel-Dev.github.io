import{s as Te,e as g,c as w,b as x,m as J,f as r,o as y,i as I,h as p,n as ce,D as be,F as ie,a as A,t as F,l as xe,g as H,d as W,z as De,H as he,j as le,J as Pe,k as Se}from"../chunks/scheduler.48785eb3.js";import{S as Ce,i as Ie,c as de,a as pe,m as fe,t as _e,b as me,d as ge}from"../chunks/index.214faea7.js";import{p as Ne}from"../chunks/stores.2c2e170e.js";import{r as we,s as Ve}from"../chunks/utils.a5495163.js";import{C as Ae}from"../chunks/circularProgress.a8d700dc.js";function He(v){let l,t,s='<div class="cell dollar svelte-lechau">100</div> <div class="cell green svelte-lechau">5</div> <div class="cell svelte-lechau">90</div> <div class="cell svelte-lechau">25</div> <div class="cell svelte-lechau">70</div> <div class="cell svelte-lechau">45</div> <div class="cell svelte-lechau">10</div> <div class="cell svelte-lechau">65</div> <div class="cell svelte-lechau">30</div> <div class="cell svelte-lechau">85</div> <div class="cell svelte-lechau">50</div> <div class="cell svelte-lechau">95</div> <div class="cell svelte-lechau">55</div> <div class="cell svelte-lechau">75</div> <div class="cell svelte-lechau">40</div> <div class="cell svelte-lechau">20</div> <div class="cell svelte-lechau">60</div> <div class="cell svelte-lechau">35</div> <div class="cell svelte-lechau">80</div> <div class="cell green svelte-lechau">15</div>';return{c(){l=g("div"),t=g("div"),t.innerHTML=s,this.h()},l(m){l=w(m,"DIV",{class:!0});var c=x(l);t=w(c,"DIV",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-18g45xq"&&(t.innerHTML=s),c.forEach(r),this.h()},h(){y(t,"class","wheel svelte-lechau"),y(l,"class","container svelte-lechau")},m(m,c){I(m,l,c),p(l,t),v[2](t)},p:ce,i:ce,o:ce,d(m){m&&r(l),v[2](null)}}}const ye=4e3,ke=5;function Le(v,l,t){let s;be(()=>{m()});const m=()=>{let a=s.querySelectorAll("div"),i=360/a.length,u=Math.round(a[0].offsetHeight/2/Math.tan(Math.PI/a.length));a.forEach((n,f)=>{let b=i*f;n.style.transform=`rotateX(${b}deg) translateZ(${u}px)`}),t(0,s.style.transform=`translateZ(${-u}px) rotateX(0deg)`,s)},c=()=>{let a=s.querySelectorAll("div"),i=360/a.length,u=Math.round(a[0].offsetHeight/2/Math.tan(Math.PI/a.length)),n=we(0,a.length-1);return new Promise((f,b)=>{t(0,s.style.transition=`all ${ye}ms cubic-bezier(.34,-0.21,.51,1.02)`,s);let M=we(-i/2+1,i/2-1),_=ke*360+n*i+M;t(0,s.style.transform=`translateZ(${-u}px) rotateX(${-_}deg)`,s),setTimeout(()=>{t(0,s.style.transition="none",s),_=_%360,t(0,s.style.transform=`translateZ(${-u}px) rotateX(${-_}deg)`,s),f(n)},ye)})};function d(a){ie[a?"unshift":"push"](()=>{s=a,t(0,s)})}return[s,c,d]}class qe extends Ce{constructor(l){super(),Ie(this,l,Le,He,Te,{spin:1})}get spin(){return this.$$.ctx[1]}}function Ue(v){let l,t="",s,m,c,d,a,i,u,n,f,b="Top",M,_,k=(v[4]||D)+"",P,L,q=(v[5]||0)+"",B,X,C,o,E,j,T,S,U="Current",ne,R,z=(v[2]||D)+"",G,ae,O=(v[3]||0)+"",K,Q,N,oe='<p class="svelte-1swun8e">Type !wheel to spin the wheel</p> <p class="svelte-1swun8e">Type !spinagain to spin again after first</p> <p class="svelte-1swun8e">Ties top make both people go again!</p>',V,re,ue,Me={};d=new qe({props:Me}),v[7](d);let Ee={value:Re};return E=new Ae({props:Ee}),v[10](E),{c(){l=g("script"),l.innerHTML=t,m=A(),c=g("div"),de(d.$$.fragment),a=A(),i=g("div"),u=A(),n=g("div"),f=g("p"),f.textContent=b,M=A(),_=g("p"),P=F(k),L=F(" - "),B=F(q),X=A(),C=g("div"),o=g("div"),de(E.$$.fragment),j=A(),T=g("div"),S=g("p"),S.textContent=U,ne=A(),R=g("p"),G=F(z),ae=F(" - "),K=F(O),Q=A(),N=g("div"),N.innerHTML=oe,this.h()},l(e){const h=xe("svelte-1nbh741",document.head);l=w(h,"SCRIPT",{src:!0,"data-svelte-h":!0}),J(l)!=="svelte-i7ndq0"&&(l.innerHTML=t),h.forEach(r),m=H(e),c=w(e,"DIV",{class:!0,role:!0,tabindex:!0});var Y=x(c);pe(d.$$.fragment,Y),Y.forEach(r),a=H(e),i=w(e,"DIV",{class:!0}),x(i).forEach(r),u=H(e),n=w(e,"DIV",{class:!0});var Z=x(n);f=w(Z,"P",{class:!0,"data-svelte-h":!0}),J(f)!=="svelte-5heo4a"&&(f.textContent=b),M=H(Z),_=w(Z,"P",{});var $=x(_);P=W($,k),L=W($," - "),B=W($,q),$.forEach(r),Z.forEach(r),X=H(e),C=w(e,"DIV",{class:!0});var ee=x(C);o=w(ee,"DIV",{class:!0});var ve=x(o);pe(E.$$.fragment,ve),ve.forEach(r),j=H(ee),T=w(ee,"DIV",{class:!0});var te=x(T);S=w(te,"P",{class:!0,"data-svelte-h":!0}),J(S)!=="svelte-1m47tik"&&(S.textContent=U),ne=H(te),R=w(te,"P",{});var se=x(R);G=W(se,z),ae=W(se," - "),K=W(se,O),se.forEach(r),te.forEach(r),ee.forEach(r),Q=H(e),N=w(e,"DIV",{class:!0,"data-svelte-h":!0}),J(N)!=="svelte-s4x46p"&&(N.innerHTML=oe),this.h()},h(){De(l.src,s="/tarot/tmi.min.js")||y(l,"src",s),y(c,"class","container svelte-1swun8e"),y(c,"role","button"),y(c,"tabindex","0"),y(i,"class","arrow svelte-1swun8e"),y(f,"class","underline svelte-1swun8e"),y(n,"class","screen top svelte-1swun8e"),y(o,"class","progress-container svelte-1swun8e"),y(S,"class","underline svelte-1swun8e"),y(T,"class","current-text"),y(C,"class","screen current svelte-1swun8e"),y(N,"class","instructions svelte-1swun8e")},m(e,h){p(document.head,l),I(e,m,h),I(e,c,h),fe(d,c,null),I(e,a,h),I(e,i,h),I(e,u,h),I(e,n,h),p(n,f),p(n,M),p(n,_),p(_,P),p(_,L),p(_,B),I(e,X,h),I(e,C,h),p(C,o),fe(E,o,null),p(C,j),p(C,T),p(T,S),p(T,ne),p(T,R),p(R,G),p(R,ae),p(R,K),I(e,Q,h),I(e,N,h),V=!0,re||(ue=[he(c,"click",v[8]),he(c,"keypress",v[9])],re=!0)},p(e,[h]){const Y={};d.$set(Y),(!V||h&16)&&k!==(k=(e[4]||D)+"")&&le(P,k),(!V||h&32)&&q!==(q=(e[5]||0)+"")&&le(B,q);const Z={};E.$set(Z),(!V||h&4)&&z!==(z=(e[2]||D)+"")&&le(G,z),(!V||h&8)&&O!==(O=(e[3]||0)+"")&&le(K,O)},i(e){V||(_e(d.$$.fragment,e),_e(E.$$.fragment,e),V=!0)},o(e){me(d.$$.fragment,e),me(E.$$.fragment,e),V=!1},d(e){e&&(r(m),r(c),r(a),r(i),r(u),r(n),r(X),r(C),r(Q),r(N)),r(l),v[7](null),ge(d),v[10](null),ge(E),re=!1,Pe(ue)}}}const D="None";var Re=0;function Be(v,l,t){let s;Se(v,Ne,o=>t(14,s=o));const m=[100,5,90,25,70,45,10,65,30,85,50,95,55,75,40,20,60,35,80,15];let c,d,a,i=[],u=D,n=0,f=D,b=0,M=!1,_=0;be(async()=>{c=s.url.searchParams.get("username"),k()});const k=()=>{const o=new window.tmi.Client({channels:[c]});o.connect(),o.on("message",(E,j,T,S)=>{let U=j["display-name"];console.log(`${U}: ${T}`),T=="!wheel"&&(i.length==0?(i.push(U),L()):i.push(U)),T=="!spinagain"&&U==u&&(M=!0)})},P=()=>{_>0?(M=!0,_=0):(_=1,L())},L=async()=>{t(2,u=i[0]),u==null&&t(2,u=D);let o=await d.spin();t(3,n=m[o]),a.timedProgress(15e3),await Ve(15e3),M==!0&&(o=await d.spin(),t(3,n+=m[o])),n>b&&n<=100?(t(4,f=u),t(5,b=n)):n==b&&(i.unshift(u),i.unshift(f),t(4,f=D),t(5,b=0)),i.shift(),t(3,n=0),t(2,u=D),M=!1,i.length>0&&L()};function q(o){ie[o?"unshift":"push"](()=>{d=o,t(0,d)})}const B=()=>P(),X=()=>P();function C(o){ie[o?"unshift":"push"](()=>{a=o,t(1,a)})}return[d,a,u,n,f,b,P,q,B,X,C]}class ze extends Ce{constructor(l){super(),Ie(this,l,Be,Ue,Te,{})}}export{ze as component};
