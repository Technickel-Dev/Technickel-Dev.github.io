import{s as z,a as I,f as _,l as C,c as A,g as w,h as k,m as D,d as b,j as v,H as P,i as T,x as p,n as j,y as V,I as R,G as Y,C as Z,J as x}from"../chunks/scheduler.d74d8f57.js";import{S as J,i as K,a as M,c as $,t as E,b as O,d as U,m as Q,e as X,g as ee}from"../chunks/index.dc12db3f.js";import{C as te}from"../chunks/card.58c88ddd.js";function W(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function F(i){let e,n;return{c(){e=_("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","w-full"),R(e.src,n=i[3])||v(e,"src",n),v(e,"alt",i[4])},m(t,o){T(t,e,o)},p(t,o){o&8&&!R(e.src,n=t[3])&&v(e,"src",n),o&16&&v(e,"alt",t[4])},d(t){t&&b(e)}}}function L(i){let e,n=i[7][i[6]%i[7].length]+"",t,o,d,h;return{c(){e=_("a"),t=C(n),o=I(),d=C(i[0]),h=C(" here!"),this.h()},l(c){e=w(c,"A",{class:!0,href:!0});var r=k(e);t=D(r,n),o=A(r),d=D(r,i[0]),h=D(r," here!"),r.forEach(b),this.h()},h(){v(e,"class","btn"),v(e,"href",i[5])},m(c,r){T(c,e,r),p(e,t),p(e,o),p(e,d),p(e,h)},p(c,r){r&64&&n!==(n=c[7][c[6]%c[7].length]+"")&&j(t,n),r&1&&j(d,c[0]),r&32&&v(e,"href",c[5])},d(c){c&&b(e)}}}function ne(i){let e,n,t,o,d,h,c,r,s,y,l,m,a=i[3]&&F(i),f=i[5]&&L(i);return{c(){a&&a.c(),e=I(),n=_("div"),t=_("div"),o=_("div"),d=C(i[0]),h=I(),c=_("div"),r=C(i[1]),s=I(),y=_("p"),l=C(i[2]),m=I(),f&&f.c(),this.h()},l(u){a&&a.l(u),e=A(u),n=w(u,"DIV",{class:!0});var g=k(n);t=w(g,"DIV",{class:!0});var S=k(t);o=w(S,"DIV",{class:!0});var B=k(o);d=D(B,i[0]),B.forEach(b),h=A(S),c=w(S,"DIV",{class:!0});var G=k(c);r=D(G,i[1]),G.forEach(b),s=A(S),y=w(S,"P",{class:!0});var N=k(y);l=D(N,i[2]),N.forEach(b),S.forEach(b),m=A(g),f&&f.l(g),g.forEach(b),this.h()},h(){v(o,"class","font-bold text-xl mb-1"),v(c,"class","mb-2 text-sm text-neutral-300"),v(y,"class","text-base text-center"),P(y,"mb-4",i[5]),v(t,"class","flex flex-col justify-center"),v(n,"class","h-full flex flex-col justify-between"),P(n,"mt-4",i[3])},m(u,g){a&&a.m(u,g),T(u,e,g),T(u,n,g),p(n,t),p(t,o),p(o,d),p(t,h),p(t,c),p(c,r),p(t,s),p(t,y),p(y,l),p(n,m),f&&f.m(n,null)},p(u,[g]){u[3]?a?a.p(u,g):(a=F(u),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),g&1&&j(d,u[0]),g&2&&j(r,u[1]),g&4&&j(l,u[2]),g&32&&P(y,"mb-4",u[5]),u[5]?f?f.p(u,g):(f=L(u),f.c(),f.m(n,null)):f&&(f.d(1),f=null),g&8&&P(n,"mt-4",u[3])},i:V,o:V,d(u){u&&(b(e),b(n)),a&&a.d(u),f&&f.d()}}}function ie(i,e,n){let{title:t=void 0}=e,{subTitle:o=void 0}=e,{text:d="Lorem ipsum here"}=e,{imageSrc:h=void 0}=e,{alt:c="Card image"}=e,{url:r=void 0}=e,{index:s=void 0}=e,y=["Check out","Take a look at","See","Take a peek at","Explore","Learn more about"];return i.$$set=l=>{"title"in l&&n(0,t=l.title),"subTitle"in l&&n(1,o=l.subTitle),"text"in l&&n(2,d=l.text),"imageSrc"in l&&n(3,h=l.imageSrc),"alt"in l&&n(4,c=l.alt),"url"in l&&n(5,r=l.url),"index"in l&&n(6,s=l.index)},[t,o,d,h,c,r,s,y]}class le extends J{constructor(e){super(),K(this,e,ie,ne,z,{title:0,subTitle:1,text:2,imageSrc:3,alt:4,url:5,index:6})}}function q(i,e,n){const t=i.slice();return t[1]=e[n].name,t[2]=e[n].type,t[3]=e[n].description,t[4]=e[n].imageSrc,t[5]=e[n].url,t[7]=n,t}function ae(i){let e,n,t;return e=new le({props:{imageSrc:i[4],title:i[1],subTitle:i[2],text:i[3],url:i[5],index:i[7]}}),{c(){O(e.$$.fragment),n=I()},l(o){U(e.$$.fragment,o),n=A(o)},m(o,d){Q(e,o,d),T(o,n,d),t=!0},p:V,i(o){t||(M(e.$$.fragment,o),t=!0)},o(o){E(e.$$.fragment,o),t=!1},d(o){o&&b(n),X(e,o)}}}function H(i){let e,n;return e=new te({props:{$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){O(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,o){Q(e,t,o),n=!0},p(t,o){const d={};o&256&&(d.$$scope={dirty:o,ctx:t}),e.$set(d)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function oe(i){let e,n,t,o="Projects",d,h,c,r=W(i[0]),s=[];for(let l=0;l<r.length;l+=1)s[l]=H(q(i,r,l));const y=l=>E(s[l],1,1,()=>{s[l]=null});return{c(){e=I(),n=_("div"),t=_("h1"),t.textContent=o,d=I(),h=_("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){Y("svelte-v1rt5c",document.head).forEach(b),e=A(l),n=w(l,"DIV",{class:!0});var a=k(n);t=w(a,"H1",{"data-svelte-h":!0}),Z(t)!=="svelte-136d6se"&&(t.textContent=o),d=A(a),h=w(a,"DIV",{class:!0});var f=k(h);for(let u=0;u<s.length;u+=1)s[u].l(f);f.forEach(b),a.forEach(b),this.h()},h(){document.title="Projects - Technickel",v(h,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr grid-flow-row-dense"),v(n,"class","flex flex-col")},m(l,m){T(l,e,m),T(l,n,m),p(n,t),p(n,d),p(n,h);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(h,null);c=!0},p(l,[m]){if(m&1){r=W(l[0]);let a;for(a=0;a<r.length;a+=1){const f=q(l,r,a);s[a]?(s[a].p(f,m),M(s[a],1)):(s[a]=H(f),s[a].c(),M(s[a],1),s[a].m(h,null))}for(ee(),a=r.length;a<s.length;a+=1)y(a);$()}},i(l){if(!c){for(let m=0;m<r.length;m+=1)M(s[m]);c=!0}},o(l){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)E(s[m]);c=!1},d(l){l&&(b(e),b(n)),x(s,l)}}}function se(i){return[[{name:"Technickel.dev",type:"Web",description:"This is the website you are on right now! Its purpose is to provide information about me and my projects. It includes what I do, how we can get in contact and how you can support me!",url:"https://technickel.dev/"},{name:"Battlesnakes: Danger Noodle",type:"Application",description:"Application built to play the game snake competitively against other developers around the world.",url:"https://play.battlesnake.com/u/technickel/"},{name:"Drone Roof Inspections",type:"Application",description:"Startup that I co-founded with the goal of providing automatic roof inspections using drones and machine learning."},{name:"Augmented Municipality",type:"Mobile",description:"An AR app designed to communicate urban design to over 240,000 citizens by letting them see what current and future municipal developments look like in real life."},{name:"Low Poly",type:"Web",description:"This is a React based website that takes advantage of WASM to generate digital art inspired by low poly art styles.",url:"https://lowpoly.tripleresolution.com/"},{name:"Triangulation",type:"Web",description:"Triangulation is a SvelteKit based website that automates the workflow I would use to generate digital art inspired by low poly / triangle / geometric art styles.",url:"https://triangulation.tripleresolution.com/"},{name:"Plannit",type:"Mobile",description:"A space themed Android app that helps you and your friends plan schedules and find free time."},{name:"NPC Bot",type:"Application",description:"A project I worked on with a buddy during a local hackathon. It's a conversational bot that plays NPCs for your DnD campaigns."},{name:"FreebieMapp",type:"Mobile",description:"FreebieMapp was a startup I co-founded with two other peers. The premise of the project was the value of new customers to small businesses. By having someone new try your business you gain a value greater than the value lost by giving away something for free. FreebieMapp provided this link, allowing new customers to find freebies and become potential reoccurring customers."},{name:"Cookie Cover",type:"Application",description:"A script designed to write my cover letters for me when I was applying to jobs in co-op.",url:"https://github.com/Technickel-Dev/cookie-cover"},{name:"Pablo the Manipulator",type:"Robotics",description:"Pablo is a Bluetooth electromyography (EMG) controlled, servo actuated robotic arm.",url:"https://github.com/Technickel-Dev/pablo-the-manipulator"},{name:"Shuttle",type:"Open Source Contributions",description:"Merged contributions to open source app Shuttle Music Player, a local Android music player.",url:"https://shuttlemusicplayer.com/"},{name:"Dogfight",type:"Game",description:"Dogfight is a game I'm making in Unity. The core of the game is based on old dogfight arcade games. All art assets are being hand made in pixel art style and the game is currently in its early stages."}]]}class de extends J{constructor(e){super(),K(this,e,se,oe,z,{})}}export{de as component};
