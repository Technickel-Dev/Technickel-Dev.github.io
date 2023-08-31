import{s as S,e as y,t as z,c as F,b as j,d as D,f as h,o as f,i as E,h as B,j as G,n as C,z as v,a as q,g as A}from"./scheduler.48785eb3.js";import{S as I,i as M,c as u,a as d,m,t as _,b,d as w}from"./index.214faea7.js";function H(o){let e,l;return{c(){e=y("p"),l=z(o[0]),this.h()},l(a){e=F(a,"P",{class:!0});var t=j(e);l=D(t,o[0]),t.forEach(h),this.h()},h(){f(e,"class","text-sm text-neutral-400")},m(a,t){E(a,e,t),B(e,l)},p(a,[t]){t&1&&G(l,a[0])},i:C,o:C,d(a){a&&h(e)}}}function P(o,e,l){let{text:a="Text Here"}=e;return o.$$set=t=>{"text"in t&&l(0,a=t.text)},[a]}class U extends I{constructor(e){super(),M(this,e,P,H,S,{text:0})}}function R(o){let e,l;return{c(){e=y("img"),this.h()},l(a){e=F(a,"IMG",{src:!0,alt:!0}),this.h()},h(){v(e.src,l="https://img.shields.io/badge/"+o[0]+"?style="+o[1]+"&logo="+o[2]+"&logoColor="+o[3])||f(e,"src",l),f(e,"alt",o[4])},m(a,t){E(a,e,t)},p(a,[t]){t&15&&!v(e.src,l="https://img.shields.io/badge/"+a[0]+"?style="+a[1]+"&logo="+a[2]+"&logoColor="+a[3])&&f(e,"src",l),t&16&&f(e,"alt",a[4])},i:C,o:C,d(a){a&&h(e)}}}function V(o,e,l){let{badge:a}=e,{style:t="for-the-badge"}=e,{logo:r}=e,{logoColor:i="white"}=e,{alt:c="Badge"}=e;return o.$$set=n=>{"badge"in n&&l(0,a=n.badge),"style"in n&&l(1,t=n.style),"logo"in n&&l(2,r=n.logo),"logoColor"in n&&l(3,i=n.logoColor),"alt"in n&&l(4,c=n.alt)},[a,t,r,i,c]}class J extends I{constructor(e){super(),M(this,e,V,R,S,{badge:0,style:1,logo:2,logoColor:3,alt:4})}}function K(o){let e,l,a;return l=new J({props:{badge:o[1],logo:o[2],alt:o[3],logoColor:o[4]}}),{c(){e=y("a"),u(l.$$.fragment),this.h()},l(t){e=F(t,"A",{href:!0});var r=j(e);d(l.$$.fragment,r),r.forEach(h),this.h()},h(){f(e,"href",o[0])},m(t,r){E(t,e,r),m(l,e,null),a=!0},p(t,[r]){const i={};r&2&&(i.badge=t[1]),r&4&&(i.logo=t[2]),r&8&&(i.alt=t[3]),r&16&&(i.logoColor=t[4]),l.$set(i),(!a||r&1)&&f(e,"href",t[0])},i(t){a||(_(l.$$.fragment,t),a=!0)},o(t){b(l.$$.fragment,t),a=!1},d(t){t&&h(e),w(l)}}}function L(o,e,l){let{url:a}=e,{badge:t}=e,{logo:r}=e,{alt:i}=e,{logoColor:c="white"}=e;return o.$$set=n=>{"url"in n&&l(0,a=n.url),"badge"in n&&l(1,t=n.badge),"logo"in n&&l(2,r=n.logo),"alt"in n&&l(3,i=n.alt),"logoColor"in n&&l(4,c=n.logoColor)},[a,t,r,i,c]}class T extends I{constructor(e){super(),M(this,e,L,K,S,{url:0,badge:1,logo:2,alt:3,logoColor:4})}}function N(o){let e,l,a,t,r,i,c,n,k;return l=new T({props:{url:"https://twitter.com/Technickel3",badge:"-@Technickel3-1ca0f1",logo:"twitter",alt:"Twitter Badge for Technickel"}}),t=new T({props:{url:"https://www.instagram.com/tech_nickel/",badge:"-@tech__nickel-833AB4",logo:"instagram",alt:"Instagram Badge for Technickel"}}),i=new T({props:{url:"https://www.reddit.com/user/tech-nickel/",badge:"u/tech--nickel-FF4500",logo:"reddit",alt:"Reddit Badge for Technickel"}}),n=new T({props:{url:"https://www.twitch.tv/technickel/",badge:"Technickel-9146FF",logo:"twitch",alt:"Twitch Badge for Technickel"}}),{c(){e=y("div"),u(l.$$.fragment),a=q(),u(t.$$.fragment),r=q(),u(i.$$.fragment),c=q(),u(n.$$.fragment),this.h()},l(s){e=F(s,"DIV",{class:!0});var g=j(e);d(l.$$.fragment,g),a=A(g),d(t.$$.fragment,g),r=A(g),d(i.$$.fragment,g),c=A(g),d(n.$$.fragment,g),g.forEach(h),this.h()},h(){f(e,"class","grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center")},m(s,g){E(s,e,g),m(l,e,null),B(e,a),m(t,e,null),B(e,r),m(i,e,null),B(e,c),m(n,e,null),k=!0},p:C,i(s){k||(_(l.$$.fragment,s),_(t.$$.fragment,s),_(i.$$.fragment,s),_(n.$$.fragment,s),k=!0)},o(s){b(l.$$.fragment,s),b(t.$$.fragment,s),b(i.$$.fragment,s),b(n.$$.fragment,s),k=!1},d(s){s&&h(e),w(l),w(t),w(i),w(n)}}}class W extends I{constructor(e){super(),M(this,e,null,N,S,{})}}export{U as M,W as S,T as a};