"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[2038],{82038:(e,t,s)=>{s.r(t),s.d(t,{dyte_screen_share_toggle:()=>o});var r=s(72944),i=s(17073),a=s(74157),n=s(41960),h=s(26468);s(55055);const c=()=>"undefined"!=typeof navigator&&void 0!==navigator.mediaDevices&&"getDisplayMedia"in navigator.mediaDevices,o=class{constructor(e){(0,r.r)(this,e),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.dyteAPIError=(0,r.c)(this,"dyteAPIError",7),this.screenShareListener=()=>{const e=this.meeting.participants.active.toArray().filter((e=>e.screenShareEnabled)).length,t=this.meeting.self.screenShareEnabled?1:0;this.screenShareCount=e+t,this.screenShareEnabled=this.meeting.self.screenShareEnabled,this.getState(),this.meeting.__internals__.logger.info("dyteScreenShare::screenShareUpdate",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount}}})},this.participantLeftListener=({screenShareEnabled:e})=>{e&&(this.screenShareCount=Math.max(this.screenShareCount-1,0),this.getState(),this.meeting.__internals__.logger.info("dyteScreenShare::screenShareUpdate",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount}}}))},this.stageStatusListener=()=>{this.canScreenShare="ALLOWED"===this.meeting.self.permissions.canProduceScreenshare},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{if("screenshare"===e&&(this.shareScreenPermission=t,this.getState(),"COULD_NOT_START"===t&&this.dyteAPIError.emit({trace:this.t("screenshare.permissions"),message:this.t("screenshare.error.unknown")}),this.hasPermissionError())){const e={enabled:!0,kind:"screenshare"};this.stateUpdate.emit({activePermissionsMessage:e}),h.s.activePermissionsMessage=e}},this.reachedMaxScreenShares=()=>this.maxScreenShareCount>0&&this.screenShareCount>=this.maxScreenShareCount,this.toggleScreenShare=async()=>{var e;if(this.screenShareState.disable)return;if(this.hasPermissionError()){const e={enabled:!0,kind:"screenshare"};return this.stateUpdate.emit({activePermissionsMessage:e}),h.s.activePermissionsMessage=e,!1}const t=null===(e=this.meeting)||void 0===e?void 0:e.self;this.screenShareEnabled?t.disableScreenShare():null==t||!this.canScreenShare||this.reachedMaxScreenShares()||this.hasPermissionError()||(this.screenShareState=Object.assign(Object.assign({},this.screenShareState),{disable:!0}),await t.enableScreenShare(),this.screenShareState=Object.assign(Object.assign({},this.screenShareState),{disable:!1}),this.stateUpdate.emit({activeMoreMenu:!1}),h.s.activeMoreMenu=!1)},this.states=void 0,this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=i.d,this.t=(0,a.u)(),this.maxScreenShareCount=-1,this.screenShareCount=0,this.screenShareEnabled=!1,this.canScreenShare=!1,this.shareScreenPermission="NOT_REQUESTED",this.screenShareState={tooltipLabel:this.t("screenshare.start"),label:this.t("screenshare.start"),icon:this.iconPack.share_screen_start,classList:{},showWarning:!1,disable:!1}}connectedCallback(){c()?this.meetingChanged(this.meeting):n.l.error("[dyte-screenshare-toggle] Device does not support screensharing.")}disconnectedCallback(){var e,t,s,r,i,a;null===(e=this.meeting)||void 0===e||e.participants.joined.removeListener("screenShareUpdate",this.screenShareListener),null===(t=this.meeting)||void 0===t||t.participants.joined.removeListener("participantLeft",this.participantLeftListener),null===(s=this.meeting)||void 0===s||s.self.removeListener("screenShareUpdate",this.screenShareListener),null===(r=this.meeting)||void 0===r||r.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null===(a=null===(i=this.meeting)||void 0===i?void 0:i.stage)||void 0===a||a.removeListener("stageStatusUpdate",this.stageStatusListener)}meetingChanged(e){if(null!=e){const{self:t,stage:s}=e;this.canScreenShare="ALLOWED"===this.meeting.self.permissions.canProduceScreenshare,this.maxScreenShareCount=t.config.maxScreenShareCount,this.screenShareEnabled=t.screenShareEnabled;let r=0;for(const i of e.participants.joined.toArray())i.screenShareEnabled&&r++;this.screenShareCount=r,this.getState(),e.__internals__.logger.info("dyteScreenShare::initialise",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount,maxAllowedCount:this.maxScreenShareCount}}}),e.participants.joined.addListener("screenShareUpdate",this.screenShareListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),t.addListener("screenShareUpdate",this.screenShareListener),t.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null==s||s.addListener("stageStatusUpdate",this.stageStatusListener)}}hasPermissionError(){return"SYSTEM_DENIED"===this.shareScreenPermission||"DENIED"===this.shareScreenPermission}getState(){let e="",t="",s="",r={};const i=this.hasPermissionError()&&!this.screenShareEnabled,a=this.reachedMaxScreenShares()&&!this.screenShareEnabled,n="COULD_NOT_START"===this.shareScreenPermission;this.screenShareEnabled&&!i?(t=this.t("screenshare.stop"),s=this.iconPack.share_screen_stop,r["red-icon"]=!0):(t=this.t("screenshare.start"),s=this.iconPack.share_screen_start),"SYSTEM_DENIED"===this.shareScreenPermission?(e=this.t("perm_sys_denied.screenshare"),r["red-icon"]=!0):"DENIED"===this.shareScreenPermission?(e=this.t("perm_denied.screenshare"),r["red-icon"]=!0):e=t,a&&(e=this.t("screenshare.error.max_count")),n&&(e=this.t("screenshare.error.unknown")),this.screenShareState={tooltipLabel:e,label:t,icon:s,classList:r,disable:i||a,showWarning:i||a||n}}render(){return c()&&this.canScreenShare?(0,r.h)(r.H,{title:this.screenShareState.label},(0,r.h)("dyte-tooltip",{placement:"top",kind:"block",label:this.screenShareState.tooltipLabel,delay:600,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,r.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,variant:this.variant,label:this.screenShareState.label,icon:this.screenShareState.icon,class:this.screenShareState.classList,onClick:this.toggleScreenShare,disabled:this.screenShareState.disable,showWarning:this.screenShareState.showWarning}))):null}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},41960:(e,t,s)=>{s.d(t,{l:()=>r});const r=console}}]);