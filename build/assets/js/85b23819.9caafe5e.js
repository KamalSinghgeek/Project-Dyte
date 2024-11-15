"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[2233],{80384:(e,t,i)=>{i.d(t,{Ay:()=>o,RM:()=>a});var n=i(74848),r=i(28453);i(25629),i(92469);const a=[{value:"Create a meeting",id:"create-a-meeting",level:3},{value:"Add Participants",id:"add-participants",level:3},{value:"What&#39;s Next?",id:"whats-next",level:3}];function s(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",...(0,r.R)(),...e.components},{Card:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:(0,n.jsxs)(t.p,{children:["Now that you have your Dyte API Key, you can move on to integrating Dyte's\r\nREST APIs with your server code. This diagram walks you through the flow\r\nrequest of starting a ",e.product," call via Dyte."]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Diagram explaining how Dyte works",src:i(18760).A+"",width:"1920",height:"1115"})}),"\n",(0,n.jsxs)(t.p,{children:["It all starts with creating a meeting which is needed to start a live video call. After a meeting has been created on Dyte's server, you can now add participants to the meeting. Each participant is given an ",(0,n.jsx)(t.code,{children:"authToken"})," which is necessary for your client side to further interact with the meeting."]}),"\n",(0,n.jsx)(t.p,{children:"Let's dive into further details."}),"\n",(0,n.jsx)(t.h3,{id:"create-a-meeting",children:"Create a meeting"}),"\n",(0,n.jsxs)(t.p,{children:["Create a Dyte meeting using the ",(0,n.jsx)(t.a,{href:"/api#/operations/create_meeting",children:"Create Meeting API"}),". The API returns a unique identifier for your meeting which you will be using later."]}),"\n",(0,n.jsx)(t.p,{children:"Dyte meetings do not have a specific date or time associated to them, so you can either create\r\nthem in advance or right when users need to join the meeting."}),"\n",(0,n.jsx)(t.h3,{id:"add-participants",children:"Add Participants"}),"\n",(0,n.jsxs)(t.p,{children:["Now that you have a meeting, it's time to add participants to the meeting. Call the ",(0,n.jsx)(t.a,{href:"/api#/operations/add_participant",children:"Add Participant API"})," with the unique identifier of your meeting. To specify the preset that your participant should use, remember to pass the ",(0,n.jsx)(t.code,{children:"preset_name"})," parameter as well."]}),"\n",(0,n.jsxs)(t.p,{children:["On successfully creating a participant, you will receive an authorization token (",(0,n.jsx)(t.code,{children:"token"}),") for each participant. Your server has complete control over when to distribute this token to the participants. Your client side needs the ",(0,n.jsx)(t.code,{children:"token"})," to connect and interact with the meeting."]}),"\n",(0,n.jsx)("span",{children:e.savePresetInfo}),"\n",(0,n.jsx)(t.h3,{id:"whats-next",children:"What's Next?"}),"\n",(0,n.jsxs)(t.p,{children:["Now, you can move now to integrating dyte on your client side or you can learn more about the different ",(0,n.jsx)(t.a,{href:"/api/",children:"REST APIs"})," that Dyte provides and how you can utilise them."]}),"\n",(0,n.jsx)(a,{title:"Client Setup",to:"/guides/"+e.productSlug+"/client-setup"})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},92288:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"livestream/build-livestream-app","title":"Server Integration","description":"Explore how to build a livestreaming app with Dyte\'s capabilities. Follow our guide for effective app development and integration.","source":"@site/docs/guides/livestream/build-livestream-app.mdx","sourceDirName":"livestream","slug":"/livestream/build-livestream-app","permalink":"/guides/livestream/build-livestream-app","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/livestream/build-livestream-app.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Server Integration","sidebar_position":4,"description":"Explore how to build a livestreaming app with Dyte\'s capabilities. Follow our guide for effective app development and integration."},"sidebar":"tutorialSidebar","previous":{"title":"Setup","permalink":"/guides/livestream/get-started"},"next":{"title":"Client Setup","permalink":"/guides/livestream/client-setup/"}}');var r=i(74848),a=i(28453),s=i(80384),o=i(39608);const d={title:"Server Integration",sidebar_position:4,description:"Explore how to build a livestreaming app with Dyte's capabilities. Follow our guide for effective app development and integration."},c=void 0,l={},p=[...s.RM];function h(e){const t={b:"b",p:"p",...(0,a.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ay,{product:"Interactive Livestream",productSlug:"livestream",preset:"Livestream",presetType:"livestream",savePresetInfo:(0,r.jsxs)(o.A,{type:"info",children:[(0,r.jsxs)(t.p,{children:["It is important to understand that you need to create participants with two kinds of presets for livestreaming. One preset is used for the livestreaming ",(0,r.jsx)(t.b,{children:"host"})," and the other preset is used for the livestreaming ",(0,r.jsx)(t.b,{children:"viewer"}),"."]}),(0,r.jsx)(t.p,{children:"The host requires certain host controls such as the ability to Kick Participants, Mute Audio, Mute Video, and Pin Participant, as well as media permissions like Start Livestream and Admit or remove participants from the livestream. Ensure that you've selected those permissions for the host."})]})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("title",{children:"Server Integration Guide"}),(0,r.jsx)("meta",{name:"description",content:"Explore how to build a livestreaming app with Dyte's capabilities. Follow our guide for effective app development and integration."})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},18760:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/how-dyte-works-v2-9f36c8cda047aabc8da766b57fc6e678.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);