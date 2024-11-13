"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[98761],{35321:(t,e,a)=>{a.d(e,{C:()=>i});var s=a(72944),r=a(24613),o=a(1821);const i=({name:t,time:e,now:a})=>(0,s.h)("div",{class:"head"},(0,s.h)("div",{class:"name"},(0,o.s)((0,o.f)(t),20)),(0,s.h)("div",{class:"time",title:(0,r.f)(e)},(0,r.e)(e,a)))},24613:(t,e,a)=>{a.d(e,{d:()=>s,e:()=>r,f:()=>o});const s=(t,e)=>{const a=e.getTime()-t.getTime();return Math.round(Math.abs(a/1e3/60))},r=(t,e)=>{const a=s(t,e);if(a<2)return"just now";if(a<60)return`${a}m ago`;const r=Math.round(a/60);if(a<90)return`about ${r}h ago`;if(r<24)return`${r}h ago`;const o=Math.round(r/24);if(o<7)return`${o}d ago`;return`${Math.round(o/7)}w ago`},o=t=>t.toDateString()+" "+t.toLocaleTimeString()},98761:(t,e,a)=>{a.r(e),a.d(e,{dyte_ai_home:()=>i});var s=a(72944),r=a(35321),o=a(32599);const i=class{constructor(t){(0,s.r)(this,t),this.handleSubmit=t=>{t.preventDefault(),t.stopPropagation(),this.messages=[...this.messages,{action:"Prompt",participantName:this.meeting.self.name,createdAt:new Date,prompt:this.prompt,loading:!0}],this.prompt=""},this.handleSummarise=()=>{},this.handleAgenda=()=>{},this.handleMoM=()=>{},this.prompt="",this.messages=[],this.meeting=void 0,this.initialMessages=void 0}connectedCallback(){this.initialMessages&&(this.messages=this.initialMessages.map((t=>Object.assign(Object.assign({},t),{action:this.mapMessageAction(t.action)}))))}disconnectedCallback(){}messagesUpdated(){setTimeout((()=>{(0,o.s)(this.contentContainer,!1)}),100)}mapMessageAction(t){switch(t){case"default":return"Prompt";case"summarization":return"Summary";case"agenda generation":return"Agenda";case"action items generation":return"Action items"}}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"content scrollbar",ref:t=>this.contentContainer=t},(0,s.h)("p",{class:"public-message"},"This conversation will be visible to everyone on the call."),!this.messages.length&&(0,s.h)("div",{class:"hint-message"},(0,s.h)("p",null,"Ask ",(0,s.h)("i",null,'"Hey AI, summarise this call"'),(0,s.h)("br",null)," or ",(0,s.h)("br",null),"Type ",(0,s.h)("i",null,'"Hey AI, what is today\'s agenda?"'))),this.messages.length>0&&(0,s.h)("div",{class:""},this.messages.map((t=>(0,s.h)("div",{class:"message"},(0,s.h)(r.C,{name:t.action,time:new Date(t.createdAt),now:new Date}),(0,s.h)("p",{class:"subtitle"},"Triggered by ",t.participantName),t.prompt&&(0,s.h)("div",{class:"prompt-text"},t.prompt),t.loading?(0,s.h)("div",{class:"loader"},(0,s.h)("dyte-spinner",{size:"sm"}),"\xa0\xa0Generating..."):(0,s.h)("div",{class:"body"},t.response)))))),(0,s.h)("div",{class:"actions"},(0,s.h)("span",null,"Quick actions:"),(0,s.h)("div",null,(0,s.h)("button",{onClick:this.handleSummarise},"Summarise"),(0,s.h)("button",{onClick:this.handleAgenda},"Agenda"),(0,s.h)("button",{onClick:this.handleMoM},"MoM"))),(0,s.h)("form",{class:"prompt",onSubmit:this.handleSubmit},(0,s.h)("input",{value:this.prompt,onInput:t=>{this.prompt=t.target.value},placeholder:"Type your prompt..."})))}static get watchers(){return{messages:["messagesUpdated"]}}};i.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.head{display:flex;align-items:center}.head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}*{box-sizing:border-box;border-width:0;border-style:solid}:host{display:flex;flex-direction:column}.public-message{text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));margin-top:var(--dyte-space-8, 32px);margin-bottom:var(--dyte-space-8, 32px);margin-left:var(--dyte-space-10, 40px);margin-right:var(--dyte-space-10, 40px)}.content{box-sizing:border-box;display:flex;flex-direction:column;padding:var(--dyte-space-3, 12px);flex:1 0 0px;overflow-y:scroll;}.subtitle{margin-top:var(--dyte-space-1, 4px);font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.hint-message{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;flex:1 1 0%;font-size:14px;line-height:1.5;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}i{font-weight:500;font-style:italic;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.actions{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);display:flex;align-items:center;justify-content:space-between;font-size:12px}.actions div{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.actions button{display:inline-flex;cursor:pointer;border-radius:var(--dyte-border-radius-md, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.5);color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.prompt{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.prompt input{height:var(--dyte-space-12, 48px);width:100%;resize:none;background-color:transparent;padding:var(--dyte-space-4, 16px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px}.message .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);white-space:pre-wrap;font-size:14px}.message .loader{display:flex;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);font-size:12px}.message{margin-bottom:var(--dyte-space-3, 12px)}.message:last-child{margin-bottom:var(--dyte-space-0, 0px)}.prompt-text{margin-top:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-1, 4px);border-left-width:var(--dyte-border-width-sm, 1px);border-left-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}"},32599:(t,e,a)=>{a.d(e,{s:()=>s});const s=(t,e=!0)=>{null!=t&&t.scrollTo({top:t.scrollHeight,behavior:e?"smooth":"auto"})}},1821:(t,e,a)=>{a.d(e,{a:()=>o,f:()=>i,g:()=>d,h:()=>r,s:()=>s});const s=(t,e=20)=>null==t?"":t.length>e?`${t.substring(0,e)}...`:t,r=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),o=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,i=t=>""===(t=null==t?void 0:t.trim())?"Participant":t,n=new RegExp(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/,"g"),l=new RegExp(/\s+/);function d(t,e=2){return t.replace(n,"").trim().split(l).slice(0,e).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);