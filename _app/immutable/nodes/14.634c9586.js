import{s as B,a as p,e as _,l as R,f as $,g as h,c as v,b as D,m as q,o as M,i as g,h as S,n as T}from"../chunks/scheduler.48785eb3.js";import{S as j,i as z,c as x,a as b,m as C,t as k,b as w,d as E}from"../chunks/index.214faea7.js";import{C as y}from"../chunks/card.2bbba416.js";import{M as V,S as O,a as I}from"../chunks/social_media_badges.cbc4af85.js";function P(H){let n,f="Social Media",c,i,u,o,m,s,l;return i=new V({props:{text:"My social media is the best place to ask random questions or even just say hi!"}}),s=new O({}),{c(){n=_("h2"),n.textContent=f,c=p(),x(i.$$.fragment),u=p(),o=_("hr"),m=p(),x(s.$$.fragment)},l(e){n=v(e,"H2",{"data-svelte-h":!0}),q(n)!=="svelte-612wr1"&&(n.textContent=f),c=h(e),b(i.$$.fragment,e),u=h(e),o=v(e,"HR",{}),m=h(e),b(s.$$.fragment,e)},m(e,a){g(e,n,a),g(e,c,a),C(i,e,a),g(e,u,a),g(e,o,a),g(e,m,a),C(s,e,a),l=!0},p:T,i(e){l||(k(i.$$.fragment,e),k(s.$$.fragment,e),l=!0)},o(e){w(i.$$.fragment,e),w(s.$$.fragment,e),l=!1},d(e){e&&($(n),$(c),$(u),$(o),$(m)),E(i,e),E(s,e)}}}function A(H){let n,f="Other Contact",c,i,u,o,m,s,l,e,a,d;return i=new V({props:{text:"Here are other ways to get in touch or make business enquiries!"}}),l=new I({props:{url:"mailto:contact@technickel.dev",badge:"contact@technickel.dev-D14836",logo:"gmail",alt:"Email Badge for Technickel Contact"}}),a=new I({props:{url:"mailto:business@technickel.dev",badge:"business@technickel.dev-D14836",logo:"gmail",alt:"Email Badge for Technickel business"}}),{c(){n=_("h2"),n.textContent=f,c=p(),x(i.$$.fragment),u=p(),o=_("hr"),m=p(),s=_("div"),x(l.$$.fragment),e=p(),x(a.$$.fragment),this.h()},l(t){n=v(t,"H2",{"data-svelte-h":!0}),q(n)!=="svelte-12r1rag"&&(n.textContent=f),c=h(t),b(i.$$.fragment,t),u=h(t),o=v(t,"HR",{}),m=h(t),s=v(t,"DIV",{class:!0});var r=D(s);b(l.$$.fragment,r),e=h(r),b(a.$$.fragment,r),r.forEach($),this.h()},h(){M(s,"class","flex flex-col gap-4 items-center")},m(t,r){g(t,n,r),g(t,c,r),C(i,t,r),g(t,u,r),g(t,o,r),g(t,m,r),g(t,s,r),C(l,s,null),S(s,e),C(a,s,null),d=!0},p:T,i(t){d||(k(i.$$.fragment,t),k(l.$$.fragment,t),k(a.$$.fragment,t),d=!0)},o(t){w(i.$$.fragment,t),w(l.$$.fragment,t),w(a.$$.fragment,t),d=!1},d(t){t&&($(n),$(c),$(u),$(o),$(m),$(s)),E(i,t),E(l),E(a)}}}function F(H){let n,f,c,i="Contact",u,o,m,s,l,e;return m=new y({props:{$$slots:{default:[P]},$$scope:{ctx:H}}}),l=new y({props:{$$slots:{default:[A]},$$scope:{ctx:H}}}),{c(){n=p(),f=_("div"),c=_("h1"),c.textContent=i,u=p(),o=_("div"),x(m.$$.fragment),s=p(),x(l.$$.fragment),this.h()},l(a){R("svelte-dee3g0",document.head).forEach($),n=h(a),f=v(a,"DIV",{class:!0});var t=D(f);c=v(t,"H1",{"data-svelte-h":!0}),q(c)!=="svelte-tbczl2"&&(c.textContent=i),u=h(t),o=v(t,"DIV",{class:!0});var r=D(o);b(m.$$.fragment,r),s=h(r),b(l.$$.fragment,r),r.forEach($),t.forEach($),this.h()},h(){document.title="Contact - Technickel",M(o,"class","grid grid-cols-1 md:grid-cols-2 gap-8 text-center"),M(f,"class","flex-1 flex flex-col")},m(a,d){g(a,n,d),g(a,f,d),S(f,c),S(f,u),S(f,o),C(m,o,null),S(o,s),C(l,o,null),e=!0},p(a,[d]){const t={};d&1&&(t.$$scope={dirty:d,ctx:a}),m.$set(t);const r={};d&1&&(r.$$scope={dirty:d,ctx:a}),l.$set(r)},i(a){e||(k(m.$$.fragment,a),k(l.$$.fragment,a),e=!0)},o(a){w(m.$$.fragment,a),w(l.$$.fragment,a),e=!1},d(a){a&&($(n),$(f)),E(m),E(l)}}}class N extends j{constructor(n){super(),z(this,n,null,F,B,{})}}export{N as component};