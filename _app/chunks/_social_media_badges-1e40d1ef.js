import{S as B,i as T,s as y,e as S,t as F,c as E,a as j,g as G,d as u,b as c,f as A,E as I,h as L,G as d,K as x,v as h,w as m,x as _,p as b,n as w,A as C,j as q,l as v}from"./vendor-8f9f9ec3.js";function D(o){let e,l;return{c(){e=S("p"),l=F(o[0]),this.h()},l(a){e=E(a,"P",{class:!0});var t=j(e);l=G(t,o[0]),t.forEach(u),this.h()},h(){c(e,"class","text-sm text-neutral-400")},m(a,t){A(a,e,t),I(e,l)},p(a,[t]){t&1&&L(l,a[0])},i:d,o:d,d(a){a&&u(e)}}}function H(o,e,l){let{text:a="Text Here"}=e;return o.$$set=t=>{"text"in t&&l(0,a=t.text)},[a]}class O extends B{constructor(e){super();T(this,e,H,D,y,{text:0})}}function K(o){let e,l;return{c(){e=S("img"),this.h()},l(a){e=E(a,"IMG",{src:!0,alt:!0}),this.h()},h(){x(e.src,l="https://img.shields.io/badge/"+o[0]+"?style="+o[1]+"&logo="+o[2]+"&logoColor="+o[3])||c(e,"src",l),c(e,"alt",o[4])},m(a,t){A(a,e,t)},p(a,[t]){t&15&&!x(e.src,l="https://img.shields.io/badge/"+a[0]+"?style="+a[1]+"&logo="+a[2]+"&logoColor="+a[3])&&c(e,"src",l),t&16&&c(e,"alt",a[4])},i:d,o:d,d(a){a&&u(e)}}}function P(o,e,l){let{badge:a}=e,{style:t="for-the-badge"}=e,{logo:r}=e,{logoColor:i="white"}=e,{alt:f="Badge"}=e;return o.$$set=n=>{"badge"in n&&l(0,a=n.badge),"style"in n&&l(1,t=n.style),"logo"in n&&l(2,r=n.logo),"logoColor"in n&&l(3,i=n.logoColor),"alt"in n&&l(4,f=n.alt)},[a,t,r,i,f]}class R extends B{constructor(e){super();T(this,e,P,K,y,{badge:0,style:1,logo:2,logoColor:3,alt:4})}}function V(o){let e,l,a;return l=new R({props:{badge:o[1],logo:o[2],alt:o[3],logoColor:o[4]}}),{c(){e=S("a"),h(l.$$.fragment),this.h()},l(t){e=E(t,"A",{href:!0});var r=j(e);m(l.$$.fragment,r),r.forEach(u),this.h()},h(){c(e,"href",o[0])},m(t,r){A(t,e,r),_(l,e,null),a=!0},p(t,[r]){const i={};r&2&&(i.badge=t[1]),r&4&&(i.logo=t[2]),r&8&&(i.alt=t[3]),r&16&&(i.logoColor=t[4]),l.$set(i),(!a||r&1)&&c(e,"href",t[0])},i(t){a||(b(l.$$.fragment,t),a=!0)},o(t){w(l.$$.fragment,t),a=!1},d(t){t&&u(e),C(l)}}}function z(o,e,l){let{url:a}=e,{badge:t}=e,{logo:r}=e,{alt:i}=e,{logoColor:f="white"}=e;return o.$$set=n=>{"url"in n&&l(0,a=n.url),"badge"in n&&l(1,t=n.badge),"logo"in n&&l(2,r=n.logo),"alt"in n&&l(3,i=n.alt),"logoColor"in n&&l(4,f=n.logoColor)},[a,t,r,i,f]}class M extends B{constructor(e){super();T(this,e,z,V,y,{url:0,badge:1,logo:2,alt:3,logoColor:4})}}function J(o){let e,l,a,t,r,i,f,n,k;return l=new M({props:{url:"https://twitter.com/Technickel3",badge:"-@Technickel3-1ca0f1",logo:"twitter",alt:"Twitter Badge for Technickel"}}),t=new M({props:{url:"https://www.linkedin.com/in/bleona/",badge:"-Bradley-blue",logo:"Linkedin",alt:"Linkedin Badge for Bradley"}}),i=new M({props:{url:"https://www.instagram.com/tech_nickel/",badge:"-@tech__nickel-833AB4",logo:"instagram",alt:"Instagram Badge for Technickel"}}),n=new M({props:{url:"https://www.reddit.com/user/tech-nickel/",badge:"u/tech--nickel-FF4500",logo:"reddit",alt:"Reddit Badge for Technickel"}}),{c(){e=S("div"),h(l.$$.fragment),a=q(),h(t.$$.fragment),r=q(),h(i.$$.fragment),f=q(),h(n.$$.fragment),this.h()},l(s){e=E(s,"DIV",{class:!0});var g=j(e);m(l.$$.fragment,g),a=v(g),m(t.$$.fragment,g),r=v(g),m(i.$$.fragment,g),f=v(g),m(n.$$.fragment,g),g.forEach(u),this.h()},h(){c(e,"class","flex flex-col gap-4 items-center")},m(s,g){A(s,e,g),_(l,e,null),I(e,a),_(t,e,null),I(e,r),_(i,e,null),I(e,f),_(n,e,null),k=!0},p:d,i(s){k||(b(l.$$.fragment,s),b(t.$$.fragment,s),b(i.$$.fragment,s),b(n.$$.fragment,s),k=!0)},o(s){w(l.$$.fragment,s),w(t.$$.fragment,s),w(i.$$.fragment,s),w(n.$$.fragment,s),k=!1},d(s){s&&u(e),C(l),C(t),C(i),C(n)}}}class Q extends B{constructor(e){super();T(this,e,null,J,y,{})}}export{O as M,Q as S,M as a};