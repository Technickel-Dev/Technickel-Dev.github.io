function v(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function D(){return Object.create(null)}function g(t){t.forEach(L)}function O(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function at(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(I(e,n))}function _t(t,e,n,r){if(t){const i=P(t,e,n,r);return t[0](i)}}function P(t,e,n,r){return t[1]&&r?R(n.ctx.slice(),t[1](r(e))):n.ctx}function dt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],c=Math.max(e.dirty.length,i.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function ht(t,e,n,r,i,l){if(i){const c=P(e,n,r,l);t.p(c,i)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let u=0;u<e.length;u++){const s=e[u].claim_order,f=(i>0&&e[n[i]].claim_order<=s?i+1:Q(1,i,x=>e[n[x]].claim_order,s))-1;r[u]=n[f]+1;const a=f+1;n[a]=u,i=Math.max(a,i)}const l=[],c=[];let o=e.length-1;for(let u=n[i]+1;u!=0;u=r[u-1]){for(l.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<l.length&&c[u].claim_order>=l[s].claim_order;)s++;const f=s<l.length?l[s]:null;t.insertBefore(c[u],f)}}function U(t,e){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){E&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function xt(){return S("")}function bt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,r,i=!1){tt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,i||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,i?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function B(t,e,n,r){return q(t,i=>i.nodeName===e,i=>{const l=[];for(let c=0;c<i.attributes.length;c++){const o=i.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>i.removeAttribute(c))},()=>r(e))}function vt(t,e,n){return B(t,e,n,X)}function Et(t,e,n){return B(t,e,n,Y)}function et(t,e){return q(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>S(e),!0)}function wt(t){return et(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function St(t,e,n){t.classList[n?"add":"remove"](e)}function nt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function Ct(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const l=i.textContent.trim();l===`HEAD_${t}_END`?(r-=1,n.push(i)):l===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function jt(t,e){return new t(e)}let y;function p(t){y=t}function C(){if(!y)throw new Error("Function called outside component initialization");return y}function kt(t){C().$$.on_mount.push(t)}function Dt(t){C().$$.after_update.push(t)}function Mt(){const t=C();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=nt(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const h=[],M=[];let m=[];const T=[],H=Promise.resolve();let N=!1;function z(){N||(N=!0,H.then(F))}function Tt(){return z(),H}function A(t){m.push(t)}const w=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),rt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;M.length;)M.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];w.has(n)||(w.add(n),n())}m.length=0}while(h.length);for(;T.length;)T.pop()();N=!1,w.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function it(t){const e=[],n=[];m.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),m=e}const $=new Set;let _;function Lt(){_={r:0,c:[],p:_}}function Ot(){_.r||g(_.c),_=_.p}function ct(t,e){t&&t.i&&($.delete(t),t.i(e))}function Pt(t,e,n,r){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function qt(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function ut(t,e,n,r){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),r||A(()=>{const c=t.$$.on_mount.map(L).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),l.forEach(A)}function st(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,r,i,l,c,o=[-1]){const u=y;p(t);const s=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:i,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:D(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,x,...j)=>{const k=j.length?j[0]:x;return s.ctx&&i(s.ctx[a],s.ctx[a]=k)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](k),f&&lt(t,a)),x}):[],s.update(),f=!0,g(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){J();const a=Z(e.target);s.fragment&&s.fragment.l(a),a.forEach(V)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),K(),F()}p(u)}class zt{$destroy(){st(this,1),this.$destroy=v}$on(e,n){if(!O(n))return v;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,st as B,U as C,bt as D,v as E,Mt as F,Y as G,Et as H,at as I,g as J,_t as K,ht as L,mt as M,dt as N,ft as O,Ct as P,St as Q,yt as R,zt as S,gt as a,pt as b,wt as c,Pt as d,xt as e,Ot as f,ct as g,V as h,Ht as i,Dt as j,X as k,vt as l,Z as m,$t as n,kt as o,At as p,S as q,et as r,ot as s,Tt as t,Nt as u,Lt as v,M as w,jt as x,qt as y,Bt as z};
