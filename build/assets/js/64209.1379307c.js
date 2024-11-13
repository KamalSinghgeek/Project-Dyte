"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[64209],{64209:(e,t,i)=>{i.r(t),i.d(t,{dyte_mic_toggle:()=>r});var s=i(72944),o=i(17073),n=i(74157),a=i(26468);i(55055);const r=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.audioUpdateListener=({audioEnabled:e})=>{this.audioEnabled=e},this.stageStatusListener=()=>{this.canProduceAudio="ALLOWED"===this.meeting.self.permissions.canProduceAudio},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{"audio"===e&&(this.micPermission=t)},this.toggleMic=()=>{var e,t,i,s,o,n,r,d,c,l,u,h;if(null===(e=this.meeting)||void 0===e||e.__internals__.logger.info("dyteMicToggle::toggleMic",{media:{audio:{enabled:Boolean(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.self)||void 0===i?void 0:i.audioEnabled),permission:this.micPermission,canProduce:null===(n=null===(o=null===(s=this.meeting)||void 0===s?void 0:s.self)||void 0===o?void 0:o.permissions)||void 0===n?void 0:n.canProduceAudio}},webinar:{stageStatus:null===(d=null===(r=this.meeting)||void 0===r?void 0:r.stage)||void 0===d?void 0:d.status},livestream:{stageStatus:null===(l=null===(c=this.meeting)||void 0===c?void 0:c.stage)||void 0===l?void 0:l.status},moduleExists:{self:Boolean(null===(u=this.meeting)||void 0===u?void 0:u.self)}}),this.hasPermissionError()){const e={enabled:!0,kind:"audio"};return this.stateUpdate.emit({activePermissionsMessage:e}),a.s.activePermissionsMessage=e,!1}const m=null===(h=this.meeting)||void 0===h?void 0:h.self;null!=m&&this.canProduceAudio&&(m.audioEnabled?m.disableAudio():m.enableAudio())},this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=o.d,this.t=(0,n.u)(),this.audioEnabled=!1,this.canProduceAudio=!1,this.micPermission="NOT_REQUESTED"}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var e,t,i,s,o;null===(e=this.meeting)||void 0===e||e.self.removeListener("audioUpdate",this.audioUpdateListener),null===(t=this.meeting)||void 0===t||t.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null===(s=null===(i=this.meeting)||void 0===i?void 0:i.stage)||void 0===s||s.removeListener("stageStatusUpdate",this.stageStatusListener),null===(o=this.meeting)||void 0===o||o.self.permissions.removeListener("micPermissionUpdate",this.micPermissionUpdateListener)}meetingChanged(e){if(null!=e){const{self:t,stage:i}=e;this.canProduceAudio="ALLOWED"===this.meeting.self.permissions.canProduceAudio,this.micPermission=e.self.mediaPermissions.audio||"NOT_REQUESTED",this.audioEnabled=t.audioEnabled,this.micPermissionUpdateListener=()=>{this.canProduceAudio="ALLOWED"===this.meeting.self.permissions.canProduceAudio,this.canProduceAudio||e.self.disableAudio()},e.self.permissions.on("micPermissionUpdate",this.micPermissionUpdateListener),t.addListener("audioUpdate",this.audioUpdateListener),t.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null==i||i.addListener("stageStatusUpdate",this.stageStatusListener)}}hasPermissionError(){return"DENIED"===this.micPermission||"SYSTEM_DENIED"===this.micPermission}getState(){let e="",t="",i="",s={},o=this.hasPermissionError(),n="COULD_NOT_START"===this.micPermission;return this.audioEnabled&&!o?(t=this.t("mic_on"),i=this.iconPack.mic_on):(t=this.t("mic_off"),i=this.iconPack.mic_off,s["red-icon"]=!0),e=n?this.t("perm_could_not_start.audio"):"SYSTEM_DENIED"===this.micPermission?this.t("perm_sys_denied.audio"):"DENIED"===this.micPermission?this.t("perm_denied.audio"):this.audioEnabled?this.t("disable_mic"):this.t("enable_mic"),{tooltipLabel:e,label:t,icon:i,classList:s,showWarning:o||n,disable:o}}render(){if(!this.canProduceAudio)return null;const{tooltipLabel:e,label:t,icon:i,classList:o,showWarning:n,disable:a}=this.getState();return(0,s.h)(s.H,{title:t},(0,s.h)("dyte-tooltip",{kind:"block",label:e,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",icon:i,label:t,size:this.size,iconPack:this.iconPack,t:this.t,variant:this.variant,class:o,onClick:this.toggleMic,showWarning:n,disabled:a})))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}:host(.audioDisabled) :slotted(dyte-icon){--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}"},26468:(e,t,i)=>{i.d(t,{o:()=>l,s:()=>c});var s=i(72944),o=i(55055);const n=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),r=e=>"function"==typeof e?e():e,d=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:c,onChange:l}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=r(e);let s=new Map(Object.entries(null!=i?i:{}));const o={dispose:[],get:[],set:[],reset:[]},n=()=>{var t;s=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},a=e=>(o.get.forEach((t=>t(e))),s.get(e)),c=(e,i)=>{const n=s.get(e);t(i,n,e)&&(s.set(e,i),o.set.forEach((t=>t(e,i,n))))},l="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>a(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,i)=>(c(t,i),!0)}),u=(e,t)=>(o[e].push(t),()=>{d(o[e],t)});return{state:l,get:a,set:c,on:u,onChange:(t,i)=>{const s=u("set",((e,s)=>{e===t&&i(s)})),o=u("reset",(()=>i(r(e)[t])));return()=>{s(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(u("set",t.set)),t.get&&e.push(u("get",t.get)),t.reset&&e.push(u("reset",t.reset)),t.dispose&&e.push(u("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=s.get(e);o.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof s.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,s.g)();i&&((e,t,i)=>{const s=e.get(t);s?s.includes(i)||s.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(s.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),a(e)}}})()),i})({prefs:(0,o.g)()})},55055:(e,t,i)=>{i.d(t,{a:()=>n,b:()=>d,c:()=>l,g:()=>c,s:()=>r});const s={get:(e,t,i)=>(...s)=>{try{return Reflect.get(e,t,i).apply(e,s)}catch(o){return null}}};let o;try{o=new Proxy(localStorage,s)}catch(u){o=new Proxy({},s)}const n=o,a="dyte-prefs",r=(e,t)=>{const i=JSON.parse(n.getItem(a)||"{}");i[e]=JSON.stringify(t),n.setItem("dyte-prefs",JSON.stringify(i))},d=e=>JSON.parse(n.getItem(a)||"{}")[e],c=()=>{const e=JSON.parse(n.getItem(a)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"]}},l={}}}]);