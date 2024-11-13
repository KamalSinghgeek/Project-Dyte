"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[33027],{33027:(e,t,i)=>{i.r(t),i.d(t,{dyte_audio_visualizer:()=>o,dyte_switch:()=>h});var a=i(72944),s=i(14401),n=i(17073),r=i(74157);const c=(e,t)=>{if(null==e)return;const i=Math.round(1.5),a=[...Array(3)].map(((e,a)=>{let s=a;return s>i-1&&(s=3-s-1),Math.round((s+1)/(i+1)*t)})),{width:s,height:n}=e,r=e.getContext("2d");let c=2;const o=1*s/a.length,h=o-4;r.clearRect(0,0,s,n),r.fillStyle="rgb(0,0,0,0.0)",r.fillRect(0,0,s,n);const l=getComputedStyle(e).getPropertyValue("color");r.fillStyle=l,r.strokeStyle=l,r.lineCap="round",r.lineWidth=4,r.beginPath();for(const d of a){const e=Math.min(-Math.abs(1.2*d/10*n)+n/2,n/2-2.5),t=Math.max(2*(n/2-e),5);r.moveTo(c+h/2,e),r.lineTo(c+h/2,e+t),c+=o}r.stroke()},o=class{constructor(e){(0,a.r)(this,e),this.variant="bars",this.participant=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,r.u)(),this.isScreenShare=!1,this.audioEnabled=void 0,this.volume=0}connectedCallback(){this.participantChanged(this.participant)}componentDidLoad(){c(this.visualizer,0)}disconnectedCallback(){var e,t,i;null===(e=this.hark)||void 0===e||e.stop(),this.audioUpdateListener&&(null===(t=this.participant)||void 0===t||t.removeListener("audioUpdate",this.audioUpdateListener)),this.screenShareUpdateListener&&(null===(i=this.participant)||void 0===i||i.removeListener("screenShareUpdate",this.screenShareUpdateListener))}participantChanged(e){null!=e&&(this.audioUpdateListener=({audioEnabled:e,audioTrack:t})=>{var i;if(null===(i=this.hark)||void 0===i||i.stop(),e&&null!=t){this.audioEnabled=!0;const e=new MediaStream;e.addTrack(t),this.calcVolume(e),c(this.visualizer,0)}else this.volume=0,this.audioEnabled=!1},this.isScreenShare?(this.screenShareUpdateListener=({screenShareEnabled:e,screenShareTracks:t})=>{this.audioUpdateListener({audioEnabled:e&&null!=t.audio,audioTrack:t.audio})},this.screenShareUpdateListener({screenShareEnabled:e.screenShareEnabled,screenShareTracks:{audio:e.screenShareTracks.audio,video:e.screenShareTracks.video}}),e.addListener("screenShareUpdate",this.screenShareUpdateListener)):(this.audioUpdateListener(e),e.addListener("audioUpdate",this.audioUpdateListener)))}calcVolume(e){this.hark=(0,s.h)(e,{play:!1,interval:100}),this.hark.on("volume_change",(e=>{const t=this.volume;let i=Math.round(10**(e/115)*10);i<3&&(i=0);let a=Math.round((2*t+i)/3);t!==a&&(this.volume=a,c(this.visualizer,this.volume))}))}render(){return(0,a.h)(a.H,null,(0,a.h)("canvas",{width:"24",height:"24",class:{bars:!0,visible:this.audioEnabled},ref:e=>this.visualizer=e,part:"canvas"}),!this.isScreenShare&&!this.audioEnabled&&(0,a.h)("dyte-icon",{icon:this.iconPack.mic_off,part:"mic-off-icon",iconPack:this.iconPack,t:this.t}))}static get watchers(){return{participant:["participantChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;height:var(--dyte-space-6, 24px);width:-moz-fit-content;width:fit-content}canvas,dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']){transform:scale(0.9)}canvas{display:none}canvas.visible{display:block}canvas.bars{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}";const h=class{constructor(e){(0,a.r)(this,e),this.dyteChange=(0,a.c)(this,"dyteChange",4),this.onClick=()=>{this.readonly||this.disabled||(this.checked=!this.checked)},this.onKeyPress=e=>{if(!this.readonly)switch(e.key){case"Enter":case" ":this.checked=!this.checked}},this.checked=!1,this.readonly=!1,this.disabled=!1,this.iconPack=n.d,this.t=(0,r.u)()}connectedCallback(){this.checkedChange(this.checked)}checkedChange(e){this.checked=e,this.dyteChange.emit(e)}render(){return(0,a.h)(a.H,{role:"switch",tabIndex:this.disabled&&0,"aria-readonly":this.readonly,"aria-checked":this.checked,"aria-disabled":this.disabled,class:{checked:this.checked},onClick:this.onClick,onKeyPress:this.onKeyPress},(0,a.h)("div",{class:"switch",part:"switch"}))}static get watchers(){return{checked:["checkedChange"]}}};h.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-6, 24px);width:var(--dyte-space-10, 40px);align-items:center;padding:var(--dyte-space-1, 4px);border-radius:9999px;background-color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));cursor:pointer}.switch{box-sizing:border-box;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);background-color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:9999px;transition-property:var(--dyte-transition-property, all);transition-duration:200ms}:host(.checked){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}:host(.checked) .switch{transform:translateX(100%)}:host([readonly]),:host([disabled]){cursor:not-allowed;opacity:0.6}"},14401:(e,t,i)=>{i.d(t,{h:()=>c});var a,s=n;function n(){}n.mixin=function(e){var t=e.prototype||e;t.isWildEmitter=!0,t.on=function(e,t,i){this.callbacks=this.callbacks||{};var a=3===arguments.length,s=a?arguments[1]:void 0,n=a?arguments[2]:arguments[1];return n._groupName=s,(this.callbacks[e]=this.callbacks[e]||[]).push(n),this},t.once=function(e,t,i){var a=this,s=3===arguments.length,n=s?arguments[1]:void 0,r=s?arguments[2]:arguments[1];return this.on(e,n,(function t(){a.off(e,t),r.apply(this,arguments)})),this},t.releaseGroup=function(e){var t,i,a,s;for(t in this.callbacks=this.callbacks||{},this.callbacks)for(i=0,a=(s=this.callbacks[t]).length;i<a;i++)s[i]._groupName===e&&(s.splice(i,1),i--,a--);return this},t.off=function(e,t){this.callbacks=this.callbacks||{};var i,a=this.callbacks[e];return a?1===arguments.length?(delete this.callbacks[e],this):(-1!==(i=a.indexOf(t))&&(a.splice(i,1),0===a.length&&delete this.callbacks[e]),this):this},t.emit=function(e){this.callbacks=this.callbacks||{};var t,i,a,s=[].slice.call(arguments,1),n=this.callbacks[e],r=this.getWildcardCallbacks(e);if(n)for(t=0,i=(a=n.slice()).length;t<i&&a[t];++t)a[t].apply(this,s);if(r)for(i=r.length,t=0,i=(a=r.slice()).length;t<i&&a[t];++t)a[t].apply(this,[e].concat(s));return this},t.getWildcardCallbacks=function(e){this.callbacks=this.callbacks||{};var t,i,a=[];for(t in this.callbacks)i=t.split("*"),("*"===t||2===i.length&&e.slice(0,i[0].length)===i[0])&&(a=a.concat(this.callbacks[t]));return a}},n.mixin(n),"undefined"!=typeof window&&(a=window.AudioContext||window.webkitAudioContext);var r=null,c=function(e,t){var i=new s;if(!a)return i;var n,c,o,h=(t=t||{}).smoothing||.1,l=t.interval||50,d=t.threshold,p=t.play,u=t.history||10,k=!0;r=t.audioContext||r||new a,(o=r.createAnalyser()).fftSize=512,o.smoothingTimeConstant=h,c=new Float32Array(o.frequencyBinCount),e.jquery&&(e=e[0]),e instanceof HTMLAudioElement||e instanceof HTMLVideoElement?(n=r.createMediaElementSource(e),void 0===p&&(p=!0),d=d||-50):(n=r.createMediaStreamSource(e),d=d||-50),n.connect(o),p&&o.connect(r.destination),i.speaking=!1,i.suspend=function(){return r.suspend()},i.resume=function(){return r.resume()},Object.defineProperty(i,"state",{get:function(){return r.state}}),r.onstatechange=function(){i.emit("state_change",r.state)},i.setThreshold=function(e){d=e},i.setInterval=function(e){l=e},i.stop=function(){k=!1,i.emit("volume_change",-100,d),i.speaking&&(i.speaking=!1,i.emit("stopped_speaking")),o.disconnect(),n.disconnect()},i.speakingHistory=[];for(var g=0;g<u;g++)i.speakingHistory.push(0);var v=function(){setTimeout((function(){if(k){var e=function(e,t){var i=-1/0;e.getFloatFrequencyData(t);for(var a=4,s=t.length;a<s;a++)t[a]>i&&t[a]<0&&(i=t[a]);return i}(o,c);i.emit("volume_change",e,d);var t=0;if(e>d&&!i.speaking){for(var a=i.speakingHistory.length-3;a<i.speakingHistory.length;a++)t+=i.speakingHistory[a];t>=2&&(i.speaking=!0,i.emit("speaking"))}else if(e<d&&i.speaking){for(a=0;a<i.speakingHistory.length;a++)t+=i.speakingHistory[a];0==t&&(i.speaking=!1,i.emit("stopped_speaking"))}i.speakingHistory.shift(),i.speakingHistory.push(0+(e>d)),v()}}),l)};return v(),i}}}]);