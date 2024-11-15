"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29997],{80384:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>r});var i=n(74848),o=n(28453);n(25629),n(92469);const r=[{value:"Create a meeting",id:"create-a-meeting",level:3},{value:"Add Participants",id:"add-participants",level:3},{value:"What&#39;s Next?",id:"whats-next",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components},{Card:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:(0,i.jsxs)(t.p,{children:["Now that you have your Dyte API Key, you can move on to integrating Dyte's\r\nREST APIs with your server code. This diagram walks you through the flow\r\nrequest of starting a ",e.product," call via Dyte."]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram explaining how Dyte works",src:n(18760).A+"",width:"1920",height:"1115"})}),"\n",(0,i.jsxs)(t.p,{children:["It all starts with creating a meeting which is needed to start a live video call. After a meeting has been created on Dyte's server, you can now add participants to the meeting. Each participant is given an ",(0,i.jsx)(t.code,{children:"authToken"})," which is necessary for your client side to further interact with the meeting."]}),"\n",(0,i.jsx)(t.p,{children:"Let's dive into further details."}),"\n",(0,i.jsx)(t.h3,{id:"create-a-meeting",children:"Create a meeting"}),"\n",(0,i.jsxs)(t.p,{children:["Create a Dyte meeting using the ",(0,i.jsx)(t.a,{href:"/api#/operations/create_meeting",children:"Create Meeting API"}),". The API returns a unique identifier for your meeting which you will be using later."]}),"\n",(0,i.jsx)(t.p,{children:"Dyte meetings do not have a specific date or time associated to them, so you can either create\r\nthem in advance or right when users need to join the meeting."}),"\n",(0,i.jsx)(t.h3,{id:"add-participants",children:"Add Participants"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you have a meeting, it's time to add participants to the meeting. Call the ",(0,i.jsx)(t.a,{href:"/api#/operations/add_participant",children:"Add Participant API"})," with the unique identifier of your meeting. To specify the preset that your participant should use, remember to pass the ",(0,i.jsx)(t.code,{children:"preset_name"})," parameter as well."]}),"\n",(0,i.jsxs)(t.p,{children:["On successfully creating a participant, you will receive an authorization token (",(0,i.jsx)(t.code,{children:"token"}),") for each participant. Your server has complete control over when to distribute this token to the participants. Your client side needs the ",(0,i.jsx)(t.code,{children:"token"})," to connect and interact with the meeting."]}),"\n",(0,i.jsx)("span",{children:e.savePresetInfo}),"\n",(0,i.jsx)(t.h3,{id:"whats-next",children:"What's Next?"}),"\n",(0,i.jsxs)(t.p,{children:["Now, you can move now to integrating dyte on your client side or you can learn more about the different ",(0,i.jsx)(t.a,{href:"/api/",children:"REST APIs"})," that Dyte provides and how you can utilise them."]}),"\n",(0,i.jsx)(r,{title:"Client Setup",to:"/guides/"+e.productSlug+"/client-setup"})]})}function s(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},38292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"voice-conf/build-voice-app","title":"Server Integration","description":"<IntegrateDyte","source":"@site/docs/guides/voice-conf/build-voice-app.mdx","sourceDirName":"voice-conf","slug":"/voice-conf/build-voice-app","permalink":"/guides/voice-conf/build-voice-app","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/voice-conf/build-voice-app.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Server Integration","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Concepts","permalink":"/guides/voice-conf/concepts"},"next":{"title":"Client Setup","permalink":"/guides/voice-conf/client-setup/"}}');var o=n(74848),r=n(28453),a=n(80384);const s={title:"Server Integration",sidebar_position:4},c=void 0,d={},p=[...a.RM];function l(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Ay,{product:"Voice Conferencing",productSlug:"voice-conf",preset:"Group Call",presetType:"group-call"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("title",{children:"Server Integration Guide"}),(0,o.jsx)("meta",{name:"description",content:"Learn how to build a voice conferencing app with Dyte's capabilities. Follow our guide for effective app development and integration."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},18760:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/how-dyte-works-v2-9f36c8cda047aabc8da766b57fc6e678.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);