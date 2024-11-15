"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[2946],{63558:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"capabilities/misc/embed","title":"No code Integration","description":"You can easily integrate Dyte into your project without any SDK using an iFrame. An iFrame is a quick and easy way to embed a live video solution into your own website or application without modifying the underlying code.","source":"@site/docs/guides/capabilities/misc/embed.mdx","sourceDirName":"capabilities/misc","slug":"/capabilities/misc/embed","permalink":"/guides/capabilities/misc/embed","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/misc/embed.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":5,"frontMatter":{"title":"No code Integration","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"SIP Interconnect","permalink":"/guides/capabilities/sip"},"next":{"title":"Restream to Social Platforms","permalink":"/guides/capabilities/misc/livestreaming-other-platforms"}}');var r=t(74848),a=t(28453);const o={title:"No code Integration",sidebar_position:5},s="No Code Integration",d={},c=[{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Embed using an iFrame",id:"embed-using-an-iframe",level:2},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Events",id:"events",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"no-code-integration",children:"No Code Integration"})}),"\n",(0,r.jsx)(i.p,{children:"You can easily integrate Dyte into your project without any SDK using an iFrame. An iFrame is a quick and easy way to embed a live video solution into your own website or application without modifying the underlying code."}),"\n",(0,r.jsx)(i.p,{children:"You can use iFrame for a variety of reasons, including lack of resources, technical expertise, or simply a preference for a lighter integration method.\r\nYou simply need to add a small piece of HTML code to your website or application."}),"\n",(0,r.jsx)(i.h2,{id:"before-getting-started",children:"Before Getting Started"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Create a ",(0,r.jsx)(i.a,{href:"https://dev.dyte.io/",children:"Dyte Developer Account"})]}),"\n",(0,r.jsxs)(i.li,{children:["Create a\r\n",(0,r.jsx)(i.a,{href:"/api/?v=v2#/operations/create_meeting",children:"Dyte Meeting"})]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/api/?v=v2#/operations/add_participant",children:"Add Participant"}),"\r\nto the meeting"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"embed-using-an-iframe",children:"Embed using an iFrame"}),"\n",(0,r.jsx)(i.p,{children:"Pass your options with meeting ID auth token in the URL query. Here's an example with all the available options:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-html",children:'<iframe\r\n  src="https://app.dyte.in/v2/meeting?id=<meetingId>&authToken=<authToken>&showSetupScreen=true&disableVideoBackground=true&orgId=<orgId>"\r\n  allow="camera;microphone;fullscreen;display-capture;picture-in-picture;clipboard-write;"\r\n/>\n'})}),"\n",(0,r.jsx)(i.h3,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["| Name             | Required   | Description                                                                                                  |\r\n| :--------------- | :--------- | :----------------------------------------------------------------------------------------------------------- | --- |\r\n| ",(0,r.jsx)(i.code,{children:"authToken"}),"      | ",(0,r.jsx)(i.code,{children:"required"})," | The ",(0,r.jsx)(i.code,{children:"token"})," string you receive when you ",(0,r.jsx)(i.a,{href:"/api/#/operations/add_participant",children:"add a Participant"})," to a meeting. |\r\n| ",(0,r.jsx)(i.code,{children:"meetingID"}),"      | ",(0,r.jsx)(i.code,{children:"required"})," | The ID of the meeting you receive when you ",(0,r.jsx)(i.a,{href:"/api/?v=v2#/operations/create_meeting",children:"create a meeting"}),".        |\r\n| ",(0,r.jsx)(i.code,{children:"endRedirectURL"})," | ",(0,r.jsx)(i.code,{children:"optional"})," | The URL to which the meeting would be redirected on end of the meeting.                                      |     |"]}),"\n",(0,r.jsx)(i.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-js",children:"window.addEventListener('message', receiveMessage, false);\r\n\r\nfunction receiveMessage(evt) {\r\n  if (evt.origin === 'https://app.dyte.in') {\r\n    const data = evt.data;\r\n    if (data.type === 'meetingEnded') {\r\n      const reason = data.kicked;\r\n      // take action on meeting end\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("title",{children:"No code Integration Guide"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to embed Dyte's features into your application. Follow our guide for seamless integration and embedding of Dyte capabilities."})]})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>s});var n=t(96540);const r={},a=n.createContext(r);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);