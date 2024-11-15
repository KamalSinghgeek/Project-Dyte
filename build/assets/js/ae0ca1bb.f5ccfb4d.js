"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[51592],{22833:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"migration/twilio/concepts-twilio-vs-dyte","title":"\ud83d\udca1 Concepts","description":"Explore the concepts of Twilio versus Dyte for effective migration. Follow our guide for a comprehensive comparison and migration strategy.","source":"@site/docs/guides/migration/twilio/concepts-twilio-vs-dyte.mdx","sourceDirName":"migration/twilio","slug":"/migration/twilio/concepts-twilio-vs-dyte","permalink":"/guides/migration/twilio/concepts-twilio-vs-dyte","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/migration/twilio/concepts-twilio-vs-dyte.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"\ud83d\udca1 Concepts","sidebar_position":1,"slug":"concepts-twilio-vs-dyte","description":"Explore the concepts of Twilio versus Dyte for effective migration. Follow our guide for a comprehensive comparison and migration strategy."},"sidebar":"tutorialSidebar","previous":{"title":"Migrate to v2 REST API","permalink":"/guides/v2-migration-guide"},"next":{"title":"\ud83d\udd24 Basics","permalink":"/guides/migration/twilio/basics"}}');var n=i(74848),s=i(28453);const r={title:"\ud83d\udca1 Concepts",sidebar_position:1,slug:"concepts-twilio-vs-dyte",description:"Explore the concepts of Twilio versus Dyte for effective migration. Follow our guide for a comprehensive comparison and migration strategy."},c=void 0,a={},d=[{value:"Overview",id:"overview",level:2},{value:"Credentials",id:"credentials",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:i,TabItem:o,Tabs:r}=t;return i||p("Head",!0),o||p("TabItem",!0),r||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)("div",{class:"banner_txt_wrapper",children:[(0,n.jsx)(t.p,{children:"Affected by the Twilio Sunset? Migrate to Dyte and get more than just feature\r\nparity with interactive plugins, UI Kit, advanced analytics and much more for\r\nyour use-case. Twilio Video are eligible to receive credits upto $30,000."}),(0,n.jsx)("div",{class:"cta_wrapper",children:(0,n.jsxs)("a",{href:"https://dyte.io/twilio-video-competitor#expert",class:"cta_button",children:[" ",(0,n.jsxs)(t.p,{children:["Claim credits upto $30,000"," "]})]})})]})}),"\n",(0,n.jsxs)(t.p,{children:["This topic guides you through the standard practices utilized in ",(0,n.jsx)(t.a,{href:"https://www.twilio.com/docs/video",children:"Twilio Video API"})," and illustrates how they correspond with Dyte's API. The main purpose of this tutorial is to support you in migrating an existing application from Twilio to Dyte's video and audio APIs."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Here's a brief overview of the architecture used by Twilio and Dyte."}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)(o,{value:"Twilio",label:"Twilio Basic Flow",children:(0,n.jsx)("img",{src:"/static/guides/twilio-arch.png",class:"arch-mig-guide"})}),(0,n.jsx)(o,{value:"Dyte",label:"Dyte Basic Flow",children:(0,n.jsx)("img",{src:"/static/guides/dyte-arch.png",class:"arch-mig-guide"})})]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on how to get started with Dyte, see ",(0,n.jsx)(t.a,{href:"/getting-started#integrate-dyte",children:"Integrate Dyte"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"credentials",children:"Credentials"}),"\n",(0,n.jsxs)(t.p,{children:["To access Twilio's API, you need an Account SID and Auth Token which can be obtained from ",(0,n.jsx)(t.code,{children:"console.twilio.com"}),". Dyte uses Organization ID and API Key that you can get from the ",(0,n.jsx)(t.a,{href:"https://dev.dyte.io",children:"Developer Portal"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"It's important to note that the credentials for both Twilio and Dyte are intended to be used only on the server-side."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Twilio"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Dyte"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Account SID"}),(0,n.jsx)(t.td,{children:"Organization ID"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"API Secret"}),(0,n.jsx)(t.td,{children:"API Key"})]})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("title",{children:"\ud83d\udca1 Concepts Guide"}),(0,n.jsx)("meta",{name:"description",content:"Explore the concepts of Twilio versus Dyte for effective migration. Follow our guide for a comprehensive comparison and migration strategy."})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var o=i(96540);const n={},s=o.createContext(n);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);