"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[27827],{27827:(e,t,i)=>{i.r(t),i.d(t,{dyte_livestream_indicator:()=>o,dyte_livestream_player:()=>l,dyte_viewer_count:()=>d});var a=i(72944),s=(i(26468),i(60064),i(94370)),r=i(17073),n=i(74157);i(55055),i(70694),i(64383);const o=class{constructor(e){(0,a.r)(this,e),this.setIsLivestreaming=e=>{this.isLivestreaming="LIVESTREAMING"===e},this.meeting=void 0,this.size=void 0,this.t=(0,n.u)(),this.isLivestreaming=void 0,this.iconPack=r.d}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var e,t;null===(t=null===(e=this.meeting)||void 0===e?void 0:e.livestream)||void 0===t||t.removeListener("livestreamUpdate",this.setIsLivestreaming)}meetingChanged(e){var t,i;null!=e&&(this.setIsLivestreaming(null===(t=this.meeting.livestream)||void 0===t?void 0:t.state),null===(i=this.meeting.livestream)||void 0===i||i.on("livestreamUpdate",this.setIsLivestreaming))}render(){if((0,s.s)(this.meeting)&&this.isLivestreaming)return(0,a.h)(a.H,null,(0,a.h)("div",{class:"indicator","aria-label":this.t("livestream.indicator"),part:"indicator"},(0,a.h)("dyte-icon",{icon:this.iconPack.start_livestream,size:this.size}),(0,a.h)("span",null,this.t("LIVE"))))}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:flex}:host[size='sm']{margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px)}.indicator{display:flex;flex-direction:row;align-items:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);animation:blink 4s linear infinite}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([size='sm']) .indicator span{display:none}@keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}";const l=class{constructor(e){(0,a.r)(this,e),this.dyteAPIError=(0,a.c)(this,"dyteAPIError",7),this.showLatencyIndicator=!1,this.LoadPlayer=(e=this.ivsPlayer)=>{this.player&&e&&(e.attachHTMLVideoElement(this.player),e.setAutoplay(!0),e.setVolume(1))},this.livestreamUpdateListener=e=>{var t,i,a,s;this.livestreamState=e,"LIVESTREAMING"===e?(this.LoadPlayer(),this.getPlaybackUrl(),(null===(i=null===(t=this.meeting.__internals__)||void 0===t?void 0:t.browserSpecs)||void 0===i?void 0:i.isIOSMobile())||(this.fetchLatency(),this.updateLatency=setInterval(this.fetchLatency,2e3)),null===(a=this.meeting.participants.pip)||void 0===a||a.enableSource("livestream-player")):(this.showLatencyIndicator=!1,this.updateLatency&&clearInterval(this.updateLatency),null===(s=this.meeting.participants.pip)||void 0===s||s.disableSource("livestream-player"))},this.getLoadingState=()=>{let e="",t=!1,i=!1;switch(this.livestreamState){case"IDLE":e=this.t("livestream.idle"),t=!0,i=!1;break;case"STARTING":e=this.t("livestream.starting"),t=!0,i=!0;break;case"STOPPING":e=this.t("livestream.stopping"),t=!0,i=!0;break;case"LIVESTREAMING":this.playerState!==s.P.PLAYING&&(e=this.t("livestream.starting"),i=!0,t=!0);break;default:t=!1,e=this.t(""),i=!0}return{isLoading:t,loadingMessage:e,showIcon:i}},this.getErrorState=()=>{var e,t;let i=!1,a="";return"LIVESTREAMING"!==this.livestreamState?(i=!1,a=this.t(""),{isError:i,errorMessage:a}):(this.isSupported||(i=!0,a=this.t("livestream.error.not_supported")),this.playbackUrl||(i=!0,a=this.t("livestream.error.not_found")),this.playerError&&(i=!0,a=this.t(null!==(t=null===(e=this.playerError)||void 0===e?void 0:e.message)&&void 0!==t?t:"livestream.error.unknown")),{isError:i,errorMessage:a})},this.fetchLatency=()=>{this.ivsPlayer&&(this.latency=this.ivsPlayer.getLiveLatency(),this.meeting.__internals__.logger.info("IVS.Player.LivestreamLatency",{livestream:{latency:this.latency}}))},this.meeting=void 0,this.size=void 0,this.t=(0,n.u)(),this.iconPack=r.d,this.playbackUrl=void 0,this.isSupported=!0,this.playerState=s.P.IDLE,this.livestreamState="IDLE",this.playerError=void 0,this.latency=0,this.audioPlaybackError=!1}AddPlayerListeners(e=this.ivsPlayer){Object.values(Object.assign(Object.assign({},s.b),s.P)).forEach((t=>{s.c.includes(t)||null==e||e.addEventListener(t,(i=>{var a,r,n;t!==s.P.IDLE&&t!==s.P.PLAYING&&t!==s.b.ERROR&&t!==s.P.READY||(this.playerState=t),t===s.b.ERROR&&(this.playerError=i),t===s.P.IDLE&&e.isPaused()&&e.play(),t===s.b.AUDIO_BLOCKED&&(this.audioPlaybackError=!0),this.playerState!==s.P.PLAYING||(null===(r=null===(a=this.meeting.__internals__)||void 0===a?void 0:a.browserSpecs)||void 0===r?void 0:r.isIOSMobile())?this.showLatencyIndicator=!1:this.showLatencyIndicator=!0,this.meeting.__internals__.logger.info(`IVS.Player.${t}`,i),s.d.includes(t)&&(null===(n=this.meeting.__internals__.callStats)||void 0===n||n.ivsPlayerEvent(t,i))}))}))}getPlaybackUrl(e=this.ivsPlayer){this.playbackUrl=this.meeting.livestream.playbackUrl,this.playbackUrl&&e&&(e.load(this.playbackUrl),e.play())}onPlayerRef(e){var t,i;this.player=e,null===(t=this.meeting.participants.pip)||void 0===t||t.addSource("livestream-player",this.player,!!this.playbackUrl),this.playbackUrl&&(null===(i=this.meeting.participants.pip)||void 0===i||i.enableSource("livestream-player"))}connectedCallback(){this.meetingChanged(this.meeting),window.onDyteLivestreamPlayer=e=>{e?(this.isSupported=!0,this.ivsPlayer=e,this.AddPlayerListeners(e),this.LoadPlayer(e),this.getPlaybackUrl(e)):this.isSupported=!1},this.sendLatencyToCallStats=setInterval((()=>{var e;this.fetchLatency(),null===(e=this.meeting.__internals__.callStats)||void 0===e||e.livestreamLatency(this.latency)}),1e4)}disconnectedCallback(){window.onDyteLivestreamPlayer=void 0,this.meeting.livestream.removeListener("livestreamUpdate",this.livestreamUpdateListener),clearInterval(this.sendLatencyToCallStats),this.ivsPlayer.load(""),this.ivsPlayer=void 0,this.player=void 0}async componentDidLoad(){const e=document.createElement("script");e.type="module",e.innerHTML="\n    import IVSPlayer from 'https://cdn.jsdelivr.net/npm/amazon-ivs-player@1.16.0/+esm'\n    let player = undefined;\n    if (IVSPlayer.isPlayerSupported) {\n      player = IVSPlayer.create({\n        wasmBinary:\n          'https://unpkg.com/amazon-ivs-player@1.11.0/dist/assets/amazon-ivs-wasmworker.min.wasm',\n        wasmWorker:\n          'https://unpkg.com/amazon-ivs-player@1.11.0/dist/assets/amazon-ivs-wasmworker.min.js',\n      });\n    }\n    window.onDyteLivestreamPlayer && window.onDyteLivestreamPlayer(player);\n    ",document.body.appendChild(e)}meetingChanged(e){var t;null!=e&&(this.livestreamState=this.meeting.livestream.state,"LIVESTREAMING"===this.livestreamState&&(this.LoadPlayer(),this.getPlaybackUrl(),null===(t=this.meeting.participants.pip)||void 0===t||t.enableSource("livestream-player")),this.meeting.livestream.on("livestreamUpdate",this.livestreamUpdateListener))}render(){if(!(0,s.s)(this.meeting))return;const{isError:e,errorMessage:t}=this.getErrorState(),{isLoading:i,loadingMessage:r,showIcon:n}=this.getLoadingState();return(0,a.h)(a.H,null,(0,a.h)("div",{class:"player-container"},(0,a.h)("video",{ref:e=>this.onPlayerRef(e),playsInline:!0}),this.audioPlaybackError&&(0,a.h)("div",{class:"unmute-popup"},(0,a.h)("h3",null,this.t("audio_playback.title")),(0,a.h)("p",null,this.t("audio_playback.description")),(0,a.h)("dyte-button",{kind:"wide",onClick:()=>{this.player.muted=!1,this.audioPlaybackError=!1},title:this.t("audio_playback"),iconPack:this.iconPack,t:this.t},this.t("audio_playback"))),"LIVESTREAMING"===this.livestreamState&&this.showLatencyIndicator&&(0,a.h)("div",{class:"latency-controls"}),e&&(0,a.h)("div",{class:"loader"},(0,a.h)("dyte-icon",{icon:this.iconPack.warning,t:this.t}),(0,a.h)("p",null,t)),!e&&i&&(0,a.h)("div",{class:"loader"},n&&(0,a.h)("dyte-spinner",{id:"icon",part:"spinner",iconPack:this.iconPack,t:this.t,size:"md"}),(0,a.h)("p",null,r))))}static get watchers(){return{meeting:["meetingChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.player-container{position:relative;margin:var(--dyte-space-4, 16px);display:flex;flex-grow:1;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px)}video{z-index:0;height:100%;width:100%;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.loader{position:absolute;z-index:10;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column;align-items:center;justify-content:center}p{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.latency-controls{position:absolute;bottom:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);z-index:20;display:flex;flex-direction:row;align-items:center}.sync-live-stream{cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);font-size:12px}.unmute-popup{position:absolute;z-index:30 !important;display:flex;width:var(--dyte-space-72, 288px);flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);text-align:center;max-width:70%}.unmute-popup h3{margin:var(--dyte-space-0, 0px);font-size:16px;font-weight:500}.unmute-popup p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);font-size:14px}";const d=class{constructor(e){(0,a.r)(this,e),this.disconnectMeeting=e=>{var t;null!=e&&null!=this.countListener&&(null===(t=e.livestream)||void 0===t||t.removeListener("viewerCountUpdate",this.countListener))},this.meeting=void 0,this.variant="primary",this.iconPack=r.d,this.t=(0,n.u)(),this.viewerCount=0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.disconnectMeeting(this.meeting)}meetingChanged(e,t){var i;this.disconnectMeeting(t),null!=e&&(this.countListener=()=>{var t;this.viewerCount=null===(t=e.livestream)||void 0===t?void 0:t.viewerCount},this.countListener(),null===(i=e.livestream)||void 0===i||i.addListener("viewerCountUpdate",this.countListener))}render(){return(0,s.s)(this.meeting)?(0,a.h)(a.H,{tabIndex:0,role:"log","aria-label":`${this.viewerCount} ${this.t("viewers")}`},(0,a.h)("dyte-icon",{icon:this.iconPack.viewers,tabIndex:-1,"aria-hidden":!0,part:"icon",iconPack:this.iconPack,t:this.t}),this.viewerCount," ",this.t("viewers")):null}static get watchers(){return{meeting:["meetingChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;height:var(--dyte-space-10, 40px);-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;font-size:14px}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([variant='embedded']){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));opacity:0.5;margin-top:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);border-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:12px}:host([variant='embedded']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}"}}]);