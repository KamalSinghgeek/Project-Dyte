"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[80423],{35219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"migration/opentok/concepts-opentok-vs-dyte","title":"Concepts: Basics","description":"Understand the concepts of OpenTok versus Dyte for effective migration. Follow our guide for a comprehensive comparison and migration strategy.","source":"@site/docs/guides/migration/opentok/concepts-opentok-vs-dyte.mdx","sourceDirName":"migration/opentok","slug":"/migration/opentok/concepts-opentok-vs-dyte","permalink":"/guides/migration/opentok/concepts-opentok-vs-dyte","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/migration/opentok/concepts-opentok-vs-dyte.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Concepts: Basics","sidebar_position":1,"description":"Understand the concepts of OpenTok versus Dyte for effective migration. Follow our guide for a comprehensive comparison and migration strategy."},"sidebar":"tutorialSidebar","previous":{"title":"Supported Features","permalink":"/guides/migration/twilio/compatibility-shim-twilio"},"next":{"title":"Concepts: Media","permalink":"/guides/migration/opentok/concept-media-opentok"}}');var i=n(74848),s=n(28453);const r={title:"Concepts: Basics",sidebar_position:1,description:"Understand the concepts of OpenTok versus Dyte for effective migration. Follow our guide for a comprehensive comparison and migration strategy."},a=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Credentials",id:"credentials",level:2},{value:"Session / Meeting",id:"session--meeting",level:2},{value:"Participant Authentication",id:"participant-authentication",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:n,TabItem:o,Tabs:r}=t;return n||h("Head",!0),o||h("TabItem",!0),r||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This topic guides you through the standard practices utilized in OpenTok Video API and illustrates how they correspond with Dyte's API. The main purpose of this tutorial is to support you in migrating an existing application from OpenTok to Dyte's video and audio APIs."}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Here's a brief overview of the architecture used by OpenTok and Dyte."}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(o,{value:"OpenTok",label:"OpenTok Basic Flow",children:(0,i.jsx)("img",{src:"/static/guides/opentok-arch.png",class:"arch-mig-guide"})}),(0,i.jsx)(o,{value:"Dyte",label:"Dyte Basic Flow",children:(0,i.jsx)("img",{src:"/static/guides/dyte-arch.png",class:"arch-mig-guide"})})]}),"\n",(0,i.jsxs)(t.p,{children:["For more information on how to get started with Dyte, see ",(0,i.jsx)(t.a,{href:"/getting-started#integrate-dyte",children:"Integrate Dyte"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"credentials",children:"Credentials"}),"\n",(0,i.jsxs)(t.p,{children:["To access OpenTok's API, you need an session ID and auth Token. You generate a token for each user connecting to an OpenTok session. For more information, ",(0,i.jsx)(t.a,{href:"https://tokbox.com/developer/guides/create-token/",children:"Token Creation Overview"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Dyte uses Organization ID and API Key that you can get from the ",(0,i.jsx)(t.a,{href:"https://dev.dyte.io",children:"Developer Portal"}),"."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"OpenTok"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Dyte"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Session ID"}),(0,i.jsx)(t.td,{children:"Organization ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Auth token"}),(0,i.jsx)(t.td,{children:"API Key"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"session--meeting",children:"Session / Meeting"}),"\n",(0,i.jsxs)(t.p,{children:["OpenTok utilizes Sessions to establish connections between participants, whereas Dyte uses ",(0,i.jsx)(t.a,{href:"/api#/operations/create_meeting",children:"Meetings"})," for the same purpose."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"OpenTok"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Dyte"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Session"}),(0,i.jsx)(t.td,{children:"Meeting"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Session ID"}),(0,i.jsx)(t.td,{children:"Meeting ID"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"participant-authentication",children:"Participant Authentication"}),"\n",(0,i.jsx)(t.p,{children:"In OpenTok, hashing function and secret are used to generate a participant access token. Foe example, for Java:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import com.opentok.OpenTok;\r\nimport com.opentok.exception.OpenTokException;\r\n\r\nclass Test {\r\n    public static void main(String argv[]) throws OpenTokException {\r\n        // Set the following constants to your OpenTok API key and API secret.\r\n        // See https://tokbox.com/account/.\r\n        OpenTok opentok = new OpenTok(API_KEY, API_SECRET);\r\n\r\n        //Generate a basic session. Or you could use an existing session ID.\r\n        String sessionId = opentok.createSession().getSessionId();\r\n\r\n        String token = opentok.generateToken(sessionId);\r\n        System.out.println(token);\r\n    }\r\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In Dyte, you make a REST API call to ",(0,i.jsx)(t.a,{href:"/api/#/operations/add_participant",children:"Add Participant API"})," which returns ",(0,i.jsx)(t.code,{children:"authToken"}),"."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"OpenTok"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Dyte"})})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Access Token"}),(0,i.jsx)(t.td,{children:"Authtoken"})]})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("title",{children:"Concepts: Basics Guide"}),(0,i.jsx)("meta",{name:"description",content:"Understand the concepts of OpenTok versus Dyte for effective migration. Follow our guide for a comprehensive comparison and migration strategy."})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);