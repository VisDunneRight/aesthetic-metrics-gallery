import{m as a,b as _,o as d,q as p,a as m,c as l,v as g,w as h}from"./C0tkKv0H.js";function v(e,n,t){if(e==null)return n(void 0),a;const s=_(()=>e.subscribe(n,t));return s.unsubscribe?()=>s.unsubscribe():s}const r=[];function k(e,n=a){let t=null;const s=new Set;function o(c){if(d(e,c)&&(e=c,t)){const f=!r.length;for(const u of s)u[1](),r.push(u,e);if(f){for(let u=0;u<r.length;u+=2)r[u][0](r[u+1]);r.length=0}}}function i(c){o(c(e))}function b(c,f=a){const u=[c,f];return s.add(u),s.size===1&&(t=n(o,i)||a),c(e),()=>{s.delete(u),s.size===0&&t&&(t(),t=null)}}return{set:o,update:i,subscribe:b}}function y(e){let n;return v(e,t=>n=t)(),n}function z(e){l===null&&p(),h&&l.l!==null?w(l).m.push(e):m(()=>{const n=_(e);if(typeof n=="function")return n})}function q(e,n,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:s})}function E(){const e=l;return e===null&&p(),(n,t,s)=>{var i;const o=(i=e.s.$$events)==null?void 0:i[n];if(o){const b=g(o)?o.slice():[o],c=q(n,t,s);for(const f of b)f.call(e.x,c);return!c.defaultPrevented}return!0}}function w(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{E as c,y as g,z as o,v as s,k as w};
