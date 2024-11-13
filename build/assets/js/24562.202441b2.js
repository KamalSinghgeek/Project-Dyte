"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[24562],{24562:(e,t,s)=>{s.r(t),s.d(t,{dyte_livestream_toggle:()=>l});var r=s(72944),i=s(17073),a=s(74157),n=s(94370),o=s(26468);s(55055);const l=class{constructor(e){(0,r.r)(this,e),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.dyteAPIError=(0,r.c)(this,"dyteAPIError",7),this.livestreamStateListener=e=>{this.livestreamState=e,"LIVESTREAMING"!==e&&"IDLE"!==e||(this.stateUpdate.emit({activeMoreMenu:!1}),o.s.activeMoreMenu=!1)},this.isLoading=()=>null==this.meeting||"STARTING"===this.livestreamState||"STOPPING"===this.livestreamState,this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=i.d,this.t=(0,a.u)(),this.livestreamState="IDLE"}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.clearListeners()}meetingChanged(e){var t,s;null!=e&&(this.livestreamState=null===(t=this.meeting.livestream)||void 0===t?void 0:t.state,null===(s=this.meeting.livestream)||void 0===s||s.on("livestreamUpdate",this.livestreamStateListener))}async toggleLivestream(){var e,t;if("LIVESTREAMING"===this.livestreamState)try{await(null===(e=this.meeting.livestream)||void 0===e?void 0:e.stop())}catch(s){this.dyteAPIError.emit({trace:this.t("livestream.stop"),message:this.t("livestream.error.stop")})}else try{await(null===(t=this.meeting.livestream)||void 0===t?void 0:t.start())}catch(r){this.dyteAPIError.emit({trace:this.t("livestream.start"),message:this.t("livestream.error.start")})}}clearListeners(){var e;null===(e=this.meeting.livestream)||void 0===e||e.removeListener("livestreamUpdate",this.livestreamStateListener)}getLivestreamLabel(){switch(this.livestreamState){case"IDLE":return this.t("livestream.go_live");case"LIVESTREAMING":return this.t("livestream.end_live");case"STARTING":return this.t("livestream.starting");case"STOPPING":return this.t("livestream.stopping");default:return this.t("livestream.error")}}getLivestreamIcon(){return"IDLE"===this.livestreamState?this.iconPack.start_livestream:this.iconPack.stop_livestream}render(){if((0,n.i)(this.meeting))return(0,r.h)(r.H,null,(0,r.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,isLoading:this.isLoading(),class:{"active-livestream":"LIVESTREAMING"===this.livestreamState},onClick:()=>this.toggleLivestream(),icon:this.getLivestreamIcon(),disabled:this.isLoading(),label:this.t(this.getLivestreamLabel()),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},94370:(e,t,s)=>{s.d(t,{P:()=>n,a:()=>r,b:()=>o,c:()=>l,d:()=>E,i:()=>i,s:()=>a});const r=e=>!!a(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),i=e=>{var t;return!!a(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},a=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var n,o;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(n||(n={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(o||(o={}));const l=[o.TIME_UPDATE,o.BUFFER_UPDATE,o.TEXT_METADATA_CUE,o.PLAYER_METADATA],E=[o.REBUFFERING,o.AUDIO_BLOCKED,o.PLAYBACK_BLOCKED,o.ERROR,o.RECOVERABLE_ERROR,o.WORKER_ERROR,o.NETWORK_UNAVAILABLE,o.ANALYTICS_EVENT,o.PLAYBACK_RATE_CHANGED,o.QUALITY_CHANGED,o.INITIALIZED]},26468:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>E});var r=s(72944),i=s(55055);const a=e=>!("isConnected"in e)||e.isConnected,n=((e,t)=>{let s;return(...r)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...r)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(a))}),2e3),o=e=>"function"==typeof e?e():e,l=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:E,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=o(e);let r=new Map(Object.entries(null!=s?s:{}));const i={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;r=new Map(Object.entries(null!==(t=o(e))&&void 0!==t?t:{})),i.reset.forEach((e=>e()))},n=e=>(i.get.forEach((t=>t(e))),r.get(e)),E=(e,s)=>{const a=r.get(e);t(s,a,e)&&(r.set(e,s),i.set.forEach((t=>t(e,s,a))))},c="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>n(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,s)=>(E(t,s),!0)}),d=(e,t)=>(i[e].push(t),()=>{l(i[e],t)});return{state:c,get:n,set:E,on:d,onChange:(t,s)=>{const r=d("set",((e,r)=>{e===t&&s(r)})),i=d("reset",(()=>s(o(e)[t])));return()=>{r(),i()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=r.get(e);i.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.g)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),n(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),n(e)}}})()),s})({prefs:(0,i.g)()})},55055:(e,t,s)=>{s.d(t,{a:()=>a,b:()=>l,c:()=>c,g:()=>E,s:()=>o});const r={get:(e,t,s)=>(...r)=>{try{return Reflect.get(e,t,s).apply(e,r)}catch(i){return null}}};let i;try{i=new Proxy(localStorage,r)}catch(d){i=new Proxy({},r)}const a=i,n="dyte-prefs",o=(e,t)=>{const s=JSON.parse(a.getItem(n)||"{}");s[e]=JSON.stringify(t),a.setItem("dyte-prefs",JSON.stringify(s))},l=e=>JSON.parse(a.getItem(n)||"{}")[e],E=()=>{const e=JSON.parse(a.getItem(n)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"]}},c={}}}]);