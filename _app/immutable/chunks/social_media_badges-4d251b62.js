import{S as C,i as k,s as T,e as S,t as j,c as y,a as I,h as z,d as f,b as c,g as B,F,j as D,n as h,K as M,x as u,y as d,z as m,r as _,p as b,C as w,k as q,m as A}from"./index-217133be.js";function G(o){let e,l;return{c(){e=S("p"),l=j(o[0]),this.h()},l(a){e=y(a,"P",{class:!0});var t=I(e);l=z(t,o[0]),t.forEach(f),this.h()},h(){c(e,"class","text-sm text-neutral-400")},m(a,t){B(a,e,t),F(e,l)},p(a,[t]){t&1&&D(l,a[0])},i:h,o:h,d(a){a&&f(e)}}}function H(o,e,l){let{text:a="Text Here"}=e;return o.$$set=t=>{"text"in t&&l(0,a=t.text)},[a]}class L extends C{constructor(e){super(),k(this,e,H,G,T,{text:0})}}function K(o){let e,l;return{c(){e=S("img"),this.h()},l(a){e=y(a,"IMG",{src:!0,alt:!0}),this.h()},h(){M(e.src,l="https://img.shields.io/badge/"+o[0]+"?style="+o[1]+"&logo="+o[2]+"&logoColor="+o[3])||c(e,"src",l),c(e,"alt",o[4])},m(a,t){B(a,e,t)},p(a,[t]){t&15&&!M(e.src,l="https://img.shields.io/badge/"+a[0]+"?style="+a[1]+"&logo="+a[2]+"&logoColor="+a[3])&&c(e,"src",l),t&16&&c(e,"alt",a[4])},i:h,o:h,d(a){a&&f(e)}}}function P(o,e,l){let{badge:a}=e,{style:t="for-the-badge"}=e,{logo:r}=e,{logoColor:i="white"}=e,{alt:s="Badge"}=e;return o.$$set=n=>{"badge"in n&&l(0,a=n.badge),"style"in n&&l(1,t=n.style),"logo"in n&&l(2,r=n.logo),"logoColor"in n&&l(3,i=n.logoColor),"alt"in n&&l(4,s=n.alt)},[a,t,r,i,s]}class R extends C{constructor(e){super(),k(this,e,P,K,T,{badge:0,style:1,logo:2,logoColor:3,alt:4})}}function V(o){let e,l,a;return l=new R({props:{badge:o[1],logo:o[2],alt:o[3],logoColor:o[4]}}),{c(){e=S("a"),u(l.$$.fragment),this.h()},l(t){e=y(t,"A",{href:!0});var r=I(e);d(l.$$.fragment,r),r.forEach(f),this.h()},h(){c(e,"href",o[0])},m(t,r){B(t,e,r),m(l,e,null),a=!0},p(t,[r]){const i={};r&2&&(i.badge=t[1]),r&4&&(i.logo=t[2]),r&8&&(i.alt=t[3]),r&16&&(i.logoColor=t[4]),l.$set(i),(!a||r&1)&&c(e,"href",t[0])},i(t){a||(_(l.$$.fragment,t),a=!0)},o(t){b(l.$$.fragment,t),a=!1},d(t){t&&f(e),w(l)}}}function v(o,e,l){let{url:a}=e,{badge:t}=e,{logo:r}=e,{alt:i}=e,{logoColor:s="white"}=e;return o.$$set=n=>{"url"in n&&l(0,a=n.url),"badge"in n&&l(1,t=n.badge),"logo"in n&&l(2,r=n.logo),"alt"in n&&l(3,i=n.alt),"logoColor"in n&&l(4,s=n.logoColor)},[a,t,r,i,s]}class E extends C{constructor(e){super(),k(this,e,v,V,T,{url:0,badge:1,logo:2,alt:3,logoColor:4})}}function x(o){let e,l,a,t,r,i,s;return l=new E({props:{url:"https://twitter.com/Technickel3",badge:"-@Technickel3-1ca0f1",logo:"twitter",alt:"Twitter Badge for Technickel"}}),t=new E({props:{url:"https://www.instagram.com/tech_nickel/",badge:"-@tech__nickel-833AB4",logo:"instagram",alt:"Instagram Badge for Technickel"}}),i=new E({props:{url:"https://www.reddit.com/user/tech-nickel/",badge:"u/tech--nickel-FF4500",logo:"reddit",alt:"Reddit Badge for Technickel"}}),{c(){e=S("div"),u(l.$$.fragment),a=q(),u(t.$$.fragment),r=q(),u(i.$$.fragment),this.h()},l(n){e=y(n,"DIV",{class:!0});var g=I(e);d(l.$$.fragment,g),a=A(g),d(t.$$.fragment,g),r=A(g),d(i.$$.fragment,g),g.forEach(f),this.h()},h(){c(e,"class","grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center")},m(n,g){B(n,e,g),m(l,e,null),F(e,a),m(t,e,null),F(e,r),m(i,e,null),s=!0},p:h,i(n){s||(_(l.$$.fragment,n),_(t.$$.fragment,n),_(i.$$.fragment,n),s=!0)},o(n){b(l.$$.fragment,n),b(t.$$.fragment,n),b(i.$$.fragment,n),s=!1},d(n){n&&f(e),w(l),w(t),w(i)}}}class N extends C{constructor(e){super(),k(this,e,null,x,T,{})}}export{L as M,N as S,E as a};
