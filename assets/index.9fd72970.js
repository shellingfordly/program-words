import{ac as P,c as z,l as L,m as w,k as E,d as C,r as v,ad as B,L as m,ae as N,U as R,N as U,b as o,S as p,af as _,w as y}from"./index.e6a22e25.js";import{u as A}from"./index.68a9e557.js";import{i as j,L as F}from"./index.1a1b9bc7.js";const H=Symbol(),I=()=>P(H,null),[K,r,M]=z("list"),V={error:Boolean,offset:L(300),loading:Boolean,finished:Boolean,errorText:String,direction:w("down"),loadingText:String,finishedText:String,immediateCheck:E};var Y=C({name:K,props:V,emits:["load","update:error","update:loading"],setup(e,{emit:c,slots:n}){const l=v(!1),f=v(),h=v(),s=I(),g=B(f),i=()=>{p(()=>{if(l.value||e.finished||e.error||(s==null?void 0:s.value)===!1)return;const{offset:t,direction:d}=e,a=_(g);if(!a.height||j(f))return;let u=!1;const x=_(h);d==="up"?u=a.top-x.top<=t:u=x.bottom-a.bottom<=t,u&&(l.value=!0,c("update:loading",!0),c("load"))})},T=()=>{if(e.finished){const t=n.finished?n.finished():e.finishedText;if(t)return o("div",{class:r("finished-text")},[t])}},S=()=>{c("update:error",!1),i()},b=()=>{if(e.error){const t=n.error?n.error():e.errorText;if(t)return o("div",{role:"button",class:r("error-text"),tabindex:0,onClick:S},[t])}},k=()=>{if(l.value&&!e.finished)return o("div",{class:r("loading")},[n.loading?n.loading():o(F,{class:r("loading-icon")},{default:()=>[e.loadingText||M("loading")]})])};return m(()=>[e.loading,e.finished,e.error],i),s&&m(s,t=>{t&&i()}),N(()=>{l.value=e.loading}),R(()=>{e.immediateCheck&&i()}),A({check:i}),U("scroll",i,{target:g,passive:!0}),()=>{var t;const d=(t=n.default)==null?void 0:t.call(n),a=o("div",{ref:h,class:r("placeholder")},null);return o("div",{ref:f,role:"feed",class:r(),"aria-busy":l.value},[e.direction==="down"?d:a,k(),T(),b(),e.direction==="up"?d:a])}}});const J=y(Y);export{J as L};
