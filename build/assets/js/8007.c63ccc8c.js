"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[8007],{8007:(t,e,i)=>{i.r(e),i.d(e,{dyte_spotlight_indicator:()=>n});var s=i(72944),a=i(74157),o=i(17073);const n=class{constructor(t){(0,s.r)(this,t),this.meeting=void 0,this.iconPack=o.d,this.t=(0,a.u)(),this.size=void 0,this.canSpotlight=void 0,this.isSpotlighted=void 0}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(t){var e,i;null!=t&&(this.canSpotlight=t.self.permissions.canSpotlight,this.isSpotlighted=null!==(i=null===(e=t.meta)||void 0===e?void 0:e.broadcastTabChanges)&&void 0!==i&&i)}updateSpotlightState(t){var e;try{null===(e=this.meeting.meta)||void 0===e||e.setBroadcastTabChanges(t),this.isSpotlighted=t}catch(i){console.error(i)}}render(){if(this.canSpotlight)return(0,s.h)(s.H,null,(0,s.h)("dyte-tooltip",{size:"md",iconPack:this.iconPack,t:this.t,label:this.t("remote_access.indicator")},(0,s.h)("div",{id:"sync-button",class:{tab:!0,active:this.isSpotlighted},onClick:()=>this.updateSpotlightState(!this.isSpotlighted)},(0,s.h)("span",{class:"name"},"Sync"),(0,s.h)("dyte-icon",{id:"icon",iconPack:this.iconPack,t:this.t,icon:this.isSpotlighted?this.iconPack.checkmark:this.iconPack.warning,tabIndex:-1,"aria-hidden":!0}))))}static get watchers(){return{meeting:["meetingChanged"]}}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{font-size:12px}#sync-button{flex-direction:row;border-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-1, 4px);display:flex;align-items:center;justify-content:center;margin-bottom:var(--dyte-space-1, 4px);font-size:12px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) dyte-tooltip,:host([size='md']) dyte-tooltip{width:100%}:host([size='sm'])>#sync-button{height:var(--dyte-space-8, 32px);width:var(--dyte-space-16, 64px);padding-left:var(--dyte-space-0, 0px)}:host([size='md'])>#sync-button{height:var(--dyte-space-8, 32px);width:var(--dyte-space-16, 64px)}:host([size='lg'])>#sync-button{flex-direction:row;height:var(--dyte-space-8, 32px);width:var(--dyte-space-16, 64px)}@media (orientation: portrait){:host([size='lg']) #sync-button{flex-direction:column-reverse;height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px)}:host([size='md']) #sync-button{height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px)}:host([size='sm']) #sync-button{height:var(--dyte-space-10, 40px);width:var(--dyte-space-16, 64px);flex-direction:row}}#sync-button>dyte-icon{max-height:14px}#sync-button dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}:host([size='sm']) #sync-button>dyte-icon{width:auto}#sync-button.active dyte-icon{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}div{align-content:center;line-height:2rem}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-8, 32px)}#sync-button.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-bg-opacity))}"}}]);