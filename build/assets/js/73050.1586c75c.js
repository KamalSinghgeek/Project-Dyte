"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[73050],{73050:(t,e,s)=>{s.r(e),s.d(e,{dyte_ai_toggle:()=>a});var i=s(72944),n=s(17073),o=s(74157),r=s(26468);s(55055);const a=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.variant="button",this.states=void 0,this.meeting=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,o.u)(),this.aiActive=!1}statesChanged(t){const e=t||r.s;this.aiActive=e.activeAI}toggleAI(){const t=this.states||r.s;this.aiActive=!(null==t?void 0:t.activeAI),this.stateUpdate.emit({activeAI:this.aiActive,activeMoreMenu:!1,activeSidebar:!1}),r.s.activeAI=this.aiActive,r.s.activeMoreMenu=!1,r.s.activeSidebar=!1}render(){var t,e;const s=this.t("ai.meeting_ai");return(null===(e=null===(t=this.meeting)||void 0===t?void 0:t.self)||void 0===e?void 0:e.permissions).transcriptionEnabled?(0,i.h)(i.H,{title:s},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.aiActive},onClick:()=>this.toggleAI(),icon:this.iconPack.meeting_ai,label:s,variant:this.variant,brandIcon:!0})):null}static get watchers(){return{states:["statesChanged"]}}};a.style=":host{display:block}"},26468:(t,e,s)=>{s.d(e,{o:()=>u,s:()=>h});var i=s(72944),n=s(55055);const o=t=>!("isConnected"in t)||t.isConnected,r=((t,e)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...i)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(o))}),2e3),a=t=>"function"==typeof t?t():t,c=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:h,onChange:u}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{const s=a(t);let i=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{var e;i=new Map(Object.entries(null!==(e=a(t))&&void 0!==e?e:{})),n.reset.forEach((t=>t()))},r=t=>(n.get.forEach((e=>e(t))),i.get(t)),h=(t,s)=>{const o=i.get(t);e(s,o,t)&&(i.set(t,s),n.set.forEach((e=>e(t,s,o))))},u="undefined"==typeof Proxy?{}:new Proxy(s,{get:(t,e)=>r(e),ownKeys:t=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,s)=>(h(e,s),!0)}),d=(t,e)=>(n[t].push(e),()=>{c(n[t],e)});return{state:u,get:r,set:h,on:d,onChange:(e,s)=>{const i=d("set",((t,i)=>{t===e&&s(i)})),n=d("reset",(()=>s(a(t)[e])));return()=>{i(),n()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(d("set",e.set)),e.get&&t.push(d("get",e.get)),e.reset&&t.push(d("reset",e.reset)),e.dispose&&t.push(d("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{n.dispose.forEach((t=>t())),o()},reset:o,forceUpdate:t=>{const e=i.get(t);n.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof i.g)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,i.g)();s&&((t,e,s)=>{const i=t.get(e);i?i.includes(s)||i.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(i.f)),r(t)},reset:()=>{t.forEach((t=>t.forEach(i.f))),r(t)}}})()),s})({prefs:(0,n.g)()})},55055:(t,e,s)=>{s.d(e,{a:()=>o,b:()=>c,c:()=>u,g:()=>h,s:()=>a});const i={get:(t,e,s)=>(...i)=>{try{return Reflect.get(t,e,s).apply(t,i)}catch(n){return null}}};let n;try{n=new Proxy(localStorage,i)}catch(d){n=new Proxy({},i)}const o=n,r="dyte-prefs",a=(t,e)=>{const s=JSON.parse(o.getItem(r)||"{}");s[t]=JSON.stringify(e),o.setItem("dyte-prefs",JSON.stringify(s))},c=t=>JSON.parse(o.getItem(r)||"{}")[t],h=()=>{const t=JSON.parse(o.getItem(r)||"{}");return{mirrorVideo:!t["mirror-video"]||"true"===t["mirror-video"],muteNotificationSounds:!!t["mute-notification-sounds"]&&"true"===t["mute-notification-sounds"]}},u={}}}]);