"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[262],{70262:(t,a,i)=>{i.r(a),i.d(a,{dyte_audio_tile:()=>o});var e=i(72944),s=(i(26468),i(60064),i(94370),i(17073)),r=i(74157),n=(i(55055),i(14401));i(70694),i(64383);const o=class{constructor(t){(0,e.r)(this,t),this.onAudioUpdate=({audioEnabled:t,audioTrack:a})=>{if(this.participant)if(t&&a){const t=new MediaStream;t.addTrack(a),this.calcVolume(t),this.audioEnabled=!0}else this.volume=0,this.audioEnabled=!1},this.meeting=void 0,this.config=void 0,this.size=void 0,this.states=void 0,this.iconPack=s.d,this.t=(0,r.u)(),this.participant=void 0,this.audioEnabled=!1,this.volume=0}connectedCallback(){this.participantChanged(this.participant)}disconnectedCallback(){var t,a;null===(t=this.hark)||void 0===t||t.stop(),null===(a=this.participant)||void 0===a||a.removeListener("audioUpdate",this.onAudioUpdate)}participantChanged(t){t&&(this.audioEnabled=t.audioEnabled,t.addListener("audioUpdate",this.onAudioUpdate))}calcVolume(t){this.hark=(0,n.h)(t,{play:!1,interval:100}),this.hark.on("volume_change",(t=>{const a=this.volume;let i=Math.round(10**(t/115)*10);i<3&&(i=0);let e=Math.round((2*a+i)/3);a!==e&&(this.volume=e)}))}render(){const t={meeting:this.meeting,size:this.size,config:this.config,states:this.states,iconPack:this.iconPack,t:this.t};let a="bar-0";return a=this.volume>5?"bar-5":this.volume<0?"bar-0":"bar-"+this.volume,(0,e.h)(e.H,null,(0,e.h)("div",{class:{"avatar-ctr":!0,speaking:this.audioEnabled,[a]:!0}},(0,e.h)("dyte-avatar",{participant:this.participant,size:this.size},!this.audioEnabled&&(0,e.h)("div",{class:"mic-icon"},(0,e.h)("dyte-icon",{icon:s.d.mic_off})))),(0,e.h)("dyte-name-tag",Object.assign({variant:"text",participant:this.participant},t)),(0,e.h)("slot",null))}static get watchers(){return{participant:["participantChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:flex;flex-direction:column}.avatar-ctr{box-sizing:border-box;width:100%;flex:1 1 0%;padding:var(--dyte-space-1\\.5, 6px);border:2px solid transparent;border-radius:calc(var(--dyte-border-radius-xl, 40px) + var(--dyte-space-1\\.5, 6px))}.avatar-ctr.speaking{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity));transition-property:box-shadow;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.bar-0{box-shadow:none}.bar-1{box-shadow:0 0 4px rgb(var(--dyte-colors-brand-500, 33 96 253))}.bar-2{box-shadow:0 0 8px rgb(var(--dyte-colors-brand-500, 33 96 253))}.bar-3{box-shadow:0 0 16px 1px rgb(var(--dyte-colors-brand-500, 33 96 253))}.bar-4{box-shadow:0 0 20px 3px rgb(var(--dyte-colors-brand-500, 33 96 253))}.bar-5{box-shadow:0 0 24px 6px rgb(var(--dyte-colors-brand-500, 33 96 253))}dyte-avatar{aspect-ratio:1 / 1;height:100%;width:100%;position:relative;border-radius:var(--dyte-border-radius-xl, 40px)}dyte-name-tag{display:block;height:var(--dyte-space-10, 40px);width:100%;text-align:center;line-height:2.5rem}:host([size='sm']) .avatar-ctr{border-radius:calc(var(--dyte-border-radius-lg, 12px) + var(--dyte-space-1\\.5, 6px))}:host([size='sm']) dyte-name-tag{height:var(--dyte-space-7, 28px);line-height:1.75rem}:host([size='sm']) dyte-avatar{border-radius:var(--dyte-border-radius-lg, 12px)}.mic-icon{position:absolute;bottom:calc(var(--dyte-space-1, 4px) * -1);right:calc(var(--dyte-space-1, 4px) * -1);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-1000, 255 255 255));--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.mic-icon dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}:host([size='sm']) .mic-icon dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([size='md']) .mic-icon dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}"},14401:(t,a,i)=>{i.d(a,{h:()=>o});var e,s=r;function r(){}r.mixin=function(t){var a=t.prototype||t;a.isWildEmitter=!0,a.on=function(t,a,i){this.callbacks=this.callbacks||{};var e=3===arguments.length,s=e?arguments[1]:void 0,r=e?arguments[2]:arguments[1];return r._groupName=s,(this.callbacks[t]=this.callbacks[t]||[]).push(r),this},a.once=function(t,a,i){var e=this,s=3===arguments.length,r=s?arguments[1]:void 0,n=s?arguments[2]:arguments[1];return this.on(t,r,(function a(){e.off(t,a),n.apply(this,arguments)})),this},a.releaseGroup=function(t){var a,i,e,s;for(a in this.callbacks=this.callbacks||{},this.callbacks)for(i=0,e=(s=this.callbacks[a]).length;i<e;i++)s[i]._groupName===t&&(s.splice(i,1),i--,e--);return this},a.off=function(t,a){this.callbacks=this.callbacks||{};var i,e=this.callbacks[t];return e?1===arguments.length?(delete this.callbacks[t],this):(-1!==(i=e.indexOf(a))&&(e.splice(i,1),0===e.length&&delete this.callbacks[t]),this):this},a.emit=function(t){this.callbacks=this.callbacks||{};var a,i,e,s=[].slice.call(arguments,1),r=this.callbacks[t],n=this.getWildcardCallbacks(t);if(r)for(a=0,i=(e=r.slice()).length;a<i&&e[a];++a)e[a].apply(this,s);if(n)for(i=n.length,a=0,i=(e=n.slice()).length;a<i&&e[a];++a)e[a].apply(this,[t].concat(s));return this},a.getWildcardCallbacks=function(t){this.callbacks=this.callbacks||{};var a,i,e=[];for(a in this.callbacks)i=a.split("*"),("*"===a||2===i.length&&t.slice(0,i[0].length)===i[0])&&(e=e.concat(this.callbacks[a]));return e}},r.mixin(r),"undefined"!=typeof window&&(e=window.AudioContext||window.webkitAudioContext);var n=null,o=function(t,a){var i=new s;if(!e)return i;var r,o,c,d=(a=a||{}).smoothing||.1,l=a.interval||50,h=a.threshold,p=a.play,u=a.history||10,g=!0;n=a.audioContext||n||new e,(c=n.createAnalyser()).fftSize=512,c.smoothingTimeConstant=d,o=new Float32Array(c.frequencyBinCount),t.jquery&&(t=t[0]),t instanceof HTMLAudioElement||t instanceof HTMLVideoElement?(r=n.createMediaElementSource(t),void 0===p&&(p=!0),h=h||-50):(r=n.createMediaStreamSource(t),h=h||-50),r.connect(c),p&&c.connect(n.destination),i.speaking=!1,i.suspend=function(){return n.suspend()},i.resume=function(){return n.resume()},Object.defineProperty(i,"state",{get:function(){return n.state}}),n.onstatechange=function(){i.emit("state_change",n.state)},i.setThreshold=function(t){h=t},i.setInterval=function(t){l=t},i.stop=function(){g=!1,i.emit("volume_change",-100,h),i.speaking&&(i.speaking=!1,i.emit("stopped_speaking")),c.disconnect(),r.disconnect()},i.speakingHistory=[];for(var b=0;b<u;b++)i.speakingHistory.push(0);var v=function(){setTimeout((function(){if(g){var t=function(t,a){var i=-1/0;t.getFloatFrequencyData(a);for(var e=4,s=a.length;e<s;e++)a[e]>i&&a[e]<0&&(i=a[e]);return i}(c,o);i.emit("volume_change",t,h);var a=0;if(t>h&&!i.speaking){for(var e=i.speakingHistory.length-3;e<i.speakingHistory.length;e++)a+=i.speakingHistory[e];a>=2&&(i.speaking=!0,i.emit("speaking"))}else if(t<h&&i.speaking){for(e=0;e<i.speakingHistory.length;e++)a+=i.speakingHistory[e];0==a&&(i.speaking=!1,i.emit("stopped_speaking"))}i.speakingHistory.shift(),i.speakingHistory.push(0+(t>h)),v()}}),l)};return v(),i}}}]);