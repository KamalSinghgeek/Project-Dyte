"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[7806],{17806:(t,i,e)=>{e.r(i),e.d(i,{dyte_caption_toggle:()=>r});var a=e(72944),s=e(26468),n=(e(60064),e(93514)),o=(e(94370),e(17073)),c=e(74157);e(55055),e(70694),e(64383);const r=class{constructor(t){(0,a.r)(this,t),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.variant="button",this.meeting=void 0,this.states=void 0,this.config=n.d,this.iconPack=o.d,this.size=void 0,this.t=(0,c.u)(),this.captionEnabled=!1}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(t){var i;null!==t&&(this.captionEnabled=null!==(i=this.meeting.self.permissions.transcriptionEnabled)&&void 0!==i&&i)}toggleCaptions(){this.stateUpdate.emit({activeCaptions:!s.s.activeCaptions}),s.s.activeCaptions=!s.s.activeCaptions,this.stateUpdate.emit({activeMoreMenu:!1}),s.s.activeMoreMenu=!1}render(){if(!this.captionEnabled)return null;const t=this.states.activeCaptions;return(0,a.h)(a.H,{tabIndex:0,role:"log","aria-label":"Picture-in-Picture mode"},(0,a.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:()=>this.toggleCaptions(),icon:t?this.iconPack.captionsOff:this.iconPack.captionsOn,label:t?this.t("transcript.off"):this.t("transcript.on"),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);