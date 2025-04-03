var Yn=Array.isArray,Xt=Array.prototype.indexOf,Hn=Array.from,jn=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptors,Bn=Object.prototype,Un=Array.prototype,nn=Object.getPrototypeOf;function Vn(t){return typeof t=="function"}const Gn=()=>{};function Kn(t){return t()}function At(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,xt=4,W=8,_t=16,I=32,F=64,V=128,E=256,G=512,v=1024,S=2048,N=4096,P=8192,X=16384,rn=32768,It=65536,en=1<<17,an=1<<19,Rt=1<<20,wt=Symbol("$state"),Zn=Symbol("legacy props"),$n=Symbol("");function St(t){return t===this.v}function ln(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function kt(t){return!ln(t,this.v)}function sn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Qn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Xn(){tt=!0}const tr=1,nr=2,rr=4,er=8,ar=16,lr=1,sr=2,ur=4,or=8,fr=16,ir=4,_r=1,cr=2,vn="[",pn="[!",hn="]",Dt={},vr=Symbol(),pr="http://www.w3.org/2000/svg";function Ot(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function hr(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function dn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function yt(t){o=t}function dr(t){return Ct().get(t)}function Er(t,n){return Ct().set(t,n),n}function wr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(o.l={s:null,u:null,r1:[],r2:ct(!1)})}function yr(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];z(a.effect),$(a.reaction),Ht(a.fn)}}finally{z(r),$(e)}}o=n.p,n.m=!0}return{}}function nt(){return!tt||o!==null&&o.l===null}function Ct(t){return o===null&&dn(),o.c??(o.c=new Map(En(o)||void 0))}function En(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function ct(t,n){var r={f:0,v:t,reactions:null,equals:St,rv:0,wv:0};return r}function gr(t){return Nt(ct(t))}function wn(t,n=!1){var e;const r=ct(t);return n||(r.equals=kt),tt&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function mr(t,n=!1){return Nt(wn(t,n))}function Nt(t){return u!==null&&!y&&(u.f&w)!==0&&(A===null?kn([t]):A.push(t)),t}function Tr(t,n){return vt(t,st(()=>lt(t))),n}function vt(t,n){return u!==null&&!y&&nt()&&(u.f&(w|_t))!==0&&(A===null||!A.includes(t))&&cn(),ut(t,n)}function ut(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=zt(),bt(t,S),nt()&&f!==null&&(f.f&v)!==0&&(f.f&(I|F))===0&&(x===null?Dn([t]):x.push(t))),n}function Ar(t,n=1){var r=lt(t),e=n===1?r++:r--;return vt(t,r),e}function bt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&S)===0&&(!e&&s===f||(m(s,n),(i&(v|E))!==0&&((i&w)!==0?bt(s,N):at(s))))}}let O=!1;function xr(t){O=t}let g;function Y(t){if(t===null)throw Ot(),Dt;return g=t}function Ir(){return Y(b(g))}function Rr(t){if(O){if(b(g)!==null)throw Ot(),Dt;g=t}}function Sr(t=1){if(O){for(var n=t,r=g;n--;)r=b(r);g=r}}function kr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var gt,yn,Pt,Ft;function Dr(){if(gt===void 0){gt=window,yn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Pt=Et(n,"firstChild").get,Ft=Et(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ot(t=""){return document.createTextNode(t)}function ft(t){return Pt.call(t)}function b(t){return Ft.call(t)}function Or(t,n){if(!O)return ft(t);var r=ft(g);if(r===null)r=g.appendChild(ot());else if(n&&r.nodeType!==3){var e=ot();return r==null||r.before(e),Y(e),e}return Y(r),r}function Cr(t,n){if(!O){var r=ft(t);return r instanceof Comment&&r.data===""?b(r):r}return g}function Nr(t,n=1,r=!1){let e=O?g:t;for(var l;n--;)l=e,e=b(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=ot();return e===null?l==null||l.after(s):e.before(s),Y(s),s}return Y(e),e}function br(t){t.textContent=""}function Lt(t){var n=w|S,r=u!==null&&(u.f&w)!==0?u:null;return f===null||r!==null&&(r.f&E)!==0?n|=E:f.f|=Rt,{ctx:o,deps:null,effects:null,equals:St,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Pr(t){const n=Lt(t);return n.equals=kt,n}function Mt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)C(n[r])}}function gn(t){for(var n=t.parent;n!==null;){if((n.f&w)===0)return n;n=n.parent}return null}function mn(t){var n,r=f;z(gn(t));try{Mt(t),n=Qt(t)}finally{z(r)}return n}function qt(t){var n=mn(t),r=(R||(t.f&E)!==0)&&t.deps!==null?N:v;m(t,r),t.equals(n)||(t.v=n,t.wv=zt())}function Yt(t){f===null&&u===null&&on(),u!==null&&(u.f&E)!==0&&f===null&&un(),ht&&sn()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=f,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{et(a),a.f|=rn}catch(_){throw C(a),_}else n!==null&&at(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Rt|V))===0;if(!s&&e&&(l!==null&&Tn(a,l),u!==null&&(u.f&w)!==0)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function Fr(t){const n=L(W,null,!1);return m(n,v),n.teardown=t,n}function Lr(t){Yt();var n=f!==null&&(f.f&I)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Ht(t);return e}}function Mr(t){return Yt(),pt(t)}function qr(t){const n=L(F,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{C(n),e(void 0)}):(C(n),e(void 0))})}function Ht(t){return L(xt,t,!1)}function Yr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=pt(()=>{t(),!e.ran&&(e.ran=!0,vt(r.l.r2,!0),st(n))})}function Hr(){var t=o;pt(()=>{if(lt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&v)!==0&&m(r,N),M(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function pt(t){return L(W,t,!0)}function jr(t,n=[],r=Lt){const e=n.map(r);return An(()=>t(...e.map(lt)))}function An(t,n=0){return L(W|_t|n,t,!0)}function Br(t,n=!0){return L(W|I,t,!0,n)}function jt(t){var n=t.teardown;if(n!==null){const r=ht,e=u;Tt(!0),$(null);try{n.call(null)}finally{Tt(r),$(e)}}}function Bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&F)!==0?r.parent=null:C(r,n),r=e}}function xn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&I)===0&&C(n),n=r}}function C(t,n=!0){var r=!1;if((n||(t.f&an)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:b(e);e.remove(),e=a}r=!0}Bt(t,n&&!r),Q(t,0),m(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();jt(t);var i=t.parent;i!==null&&i.first!==null&&Ut(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ut(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];Vt(t,r,!0),Rn(r,()=>{C(t),n&&n()})}function Rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Vt(t,n,r){if((t.f&P)===0){if(t.f^=P,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&It)!==0||(e.f&I)!==0;Vt(e,n,a?r:!1),e=l}}}function Ur(t){Gt(t,!0)}function Gt(t,n){if((t.f&P)!==0){t.f^=P,(t.f&v)===0&&(t.f^=v),M(t)&&(m(t,S),at(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&It)!==0||(r.f&I)!==0;Gt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const Sn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let H=[],j=[];function Kt(){var t=H;H=[],At(t)}function Zt(){var t=j;j=[],At(t)}function Vr(t){H.length===0&&queueMicrotask(Kt),H.push(t)}function Gr(t){j.length===0&&Sn(Zt),j.push(t)}function mt(){H.length>0&&Kt(),j.length>0&&Zt()}let U=!1,K=!1,Z=null,D=!1,ht=!1;function Tt(t){ht=t}let q=[];let u=null,y=!1;function $(t){u=t}let f=null;function z(t){f=t}let A=null;function kn(t){A=t}let c=null,d=0,x=null;function Dn(t){x=t}let $t=1,J=0,R=!1,k=null;function zt(){return++$t}function M(t){var p;var n=t.f;if((n&S)!==0)return!0;if((n&N)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&G)!==0,i=e&&f!==null&&!R,_=r.length;if(s||i){var T=t,B=T.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(T)))&&(a.reactions??(a.reactions=[])).push(T);s&&(T.f^=G),i&&B!==null&&(B.f&E)===0&&(T.f^=E)}for(l=0;l<_;l++)if(a=r[l],M(a)&&qt(a),a.wv>t.wv)return!0}(!e||f!==null&&!R)&&m(t,v)}return!1}function On(t,n){for(var r=n;r!==null;){if((r.f&V)!==0)try{r.fn(t);return}catch{r.f^=V}r=r.parent}throw U=!1,t}function Cn(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&V)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),Cn(n))throw t;return}r!==null&&(U=!0);{On(t,n);return}}function Jt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&w)!==0?Jt(a,n,!1):n===a&&(r?m(a,S):(a.f&v)!==0&&m(a,N),at(a))}}function Qt(t){var dt;var n=c,r=d,e=x,l=u,a=R,s=A,i=o,_=y,T=t.f;c=null,d=0,x=null,R=(T&E)!==0&&(y||!D||u===null),u=(T&(I|F))===0?t:null,A=null,yt(t.ctx),y=!1,J++;try{var B=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(Q(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!R)for(h=d;h<p.length;h++)((dt=p[h]).reactions??(dt.reactions=[])).push(t)}else p!==null&&d<p.length&&(Q(t,d),p.length=d);if(nt()&&x!==null&&!y&&p!==null&&(t.f&(w|N|S))===0)for(h=0;h<x.length;h++)Jt(x[h],t);return l!==null&&J++,B}finally{c=n,d=r,x=e,u=l,R=a,A=s,yt(i),y=_}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=Xt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&w)!==0&&(c===null||!c.includes(n))&&(m(n,N),(n.f&(E|G))===0&&(n.f^=G),Mt(n),Q(n,0))}function Q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function et(t){var n=t.f;if((n&X)===0){m(t,v);var r=f,e=o,l=D;f=t,D=!0;try{(n&_t)!==0?xn(t):Bt(t),jt(t);var a=Qt(t);t.teardown=typeof a=="function"?a:null,t.wv=$t;var s=t.deps,i}catch(_){rt(_,t,r,e||t.ctx)}finally{D=l,f=r}}}function bn(){try{fn()}catch(t){if(Z!==null)rt(t,Z,null);else throw t}}function Wt(){var t=D;try{var n=0;for(D=!0;q.length>0;){n++>1e3&&bn();var r=q,e=r.length;q=[];for(var l=0;l<e;l++){var a=Fn(r[l]);Pn(a)}}}finally{K=!1,D=t,Z=null}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|P))===0)try{M(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ut(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function at(t){K||(K=!0,queueMicrotask(Wt));for(var n=Z=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(F|I))!==0){if((r&v)===0)return;n.f^=v}}q.push(n)}function Fn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(I|F))!==0,a=l&&(e&v)!==0;if(!a&&(e&P)===0){if((e&xt)!==0)n.push(r);else if(l)r.f^=v;else{var s=u;try{u=r,M(r)&&et(r)}catch(T){rt(T,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Ln(t){var n;for(mt();q.length>0;)K=!0,Wt(),mt();return n}async function Kr(){await Promise.resolve(),Ln()}function lt(t){var n=t.f,r=(n&w)!==0;if(k!==null&&k.add(t),u!==null&&!y){A!==null&&A.includes(t)&&_n();var e=u.deps;t.rv<J&&(t.rv=J,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&E)===0&&(l.f^=E)}return r&&(l=t,M(l)&&qt(l)),t.v}function Mn(t){var n=k;k=new Set;var r=k,e;try{if(st(t),n!==null)for(e of k)n.add(e)}finally{k=n}return r}function Zr(t){var n=Mn(()=>st(t));for(var r of n)if((r.f&en)!==0)for(const e of r.deps||[])(e.f&w)===0&&ut(e,e.v);else ut(r,r.v)}function st(t){var n=y;try{return y=!0,t()}finally{y=n}}const qn=-7169;function m(t,n){t.f=t.f&qn|n}function $r(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(wt in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&wt in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=nn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tn(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{Ht as $,Lt as A,Xn as B,ot as C,ft as D,It as E,yn as F,f as G,cr as H,Ir as I,Y as J,Bn as K,Un as L,ct as M,Wn as N,vt as O,Et as P,Qn as Q,nn as R,wt as S,_r as T,vr as U,vn as V,pn as W,kr as X,xr as Y,Ur as Z,In as _,yr as a,pt as a0,Vr as a1,Fr as a2,jn as a3,wn as a4,Jn as a5,en as a6,Pr as a7,ur as a8,kt as a9,Vt as aA,Rn as aB,tr as aC,ar as aD,rr as aE,er as aF,nt as aG,hr as aH,dr as aI,Yr as aJ,Hr as aK,mr as aL,pr as aM,Tr as aN,Er as aO,Zr as aP,Gr as aQ,$n as aR,tn as aS,_t as aT,rn as aU,ir as aV,Ar as aa,or as ab,Zn as ac,sr as ad,lr as ae,Vn as af,fr as ag,k as ah,$ as ai,z as aj,u as ak,Dr as al,b as am,Dt as an,hn as ao,Ot as ap,zn as aq,br as ar,Hn as as,qr as at,Ln as au,gr as av,Kr as aw,P as ax,ut as ay,nr as az,Gn as b,Or as c,ln as d,Lr as e,Cr as f,o as g,tt as h,Yn as i,An as j,Br as k,dn as l,C as m,Sr as n,O as o,wr as p,g as q,Rr as r,Nr as s,jr as t,st as u,Mr as v,At as w,Kn as x,lt as y,$r as z};
