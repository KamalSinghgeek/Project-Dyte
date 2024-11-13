"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[33346],{65222:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"stage-management/viewer-participants","title":"Stage Access for Viewers","description":"Stage APIs for Viewers in Dyte meetings.","source":"@site/docs/android-core/stage-management/3-viewer-participants.mdx","sourceDirName":"stage-management","slug":"/stage-management/viewer-participants","permalink":"/android-core/stage-management/viewer-participants","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/stage-management/3-viewer-participants.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"stage","permalink":"/android-core/tags/stage"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Stage Access for Viewers","description":"Stage APIs for Viewers in Dyte meetings.","sidebar_position":3,"tags":["android-core","stage"]},"sidebar":"tutorialSidebar","previous":{"title":"Stage Host Controls","permalink":"/android-core/stage-management/host-controls"},"next":{"title":"Introduction","permalink":"/android-core/livestream/introduction"}}');var r=s(74848),a=s(28453);const c={title:"Stage Access for Viewers",description:"Stage APIs for Viewers in Dyte meetings.",sidebar_position:3,tags:["android-core","stage"]},i=void 0,o={},d=[{value:"Request Access",id:"request-access",level:3},{value:"Cancel Access Request",id:"cancel-access-request",level:3}];function l(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Viewer participants in a stage-enabled meeting are users whose preset permission for media production is set as ",(0,r.jsx)(t.code,{children:"CAN_REQUEST"}),".\r\nThe ",(0,r.jsx)(t.code,{children:"meeting.stage"})," object provides APIs for viewer participants to request stage access and withdraw their join stage request."]}),"\n",(0,r.jsx)(t.h3,{id:"request-access",children:"Request Access"}),"\n",(0,r.jsxs)(t.p,{children:["To request access to the stage, you can call the ",(0,r.jsx)(t.code,{children:"requestAccess()"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"meeting.stage.requestAccess()\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When a host accepts the user's stage access request or allows the user directly to the stage, the SDK triggers the\r\n",(0,r.jsx)(t.code,{children:"onPresentRequestReceived"})," callback in ",(0,r.jsx)(t.code,{children:"DyteStageEventListener"}),". You can listen to this event:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"meeting.addStageEventsListener(object : DyteStageEventListener {\r\n    override fun onPresentRequestReceived() {\r\n        // Host accepted the join stage request or invited user directly to stage\r\n    }\r\n})\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can then call the ",(0,r.jsx)(t.code,{children:"join()"})," method to finally join the stage."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": If the host has directly allowed the user to join the stage and they want to decline, you should use the ",(0,r.jsx)(t.code,{children:"leave()"})," method."]}),"\n",(0,r.jsx)(t.h3,{id:"cancel-access-request",children:"Cancel Access Request"}),"\n",(0,r.jsxs)(t.p,{children:["To cancel or withdraw a pending stage access request, you can call the ",(0,r.jsx)(t.code,{children:"cancelRequestAccess()"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"meeting.stage.cancelRequestAccess()\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>i});var n=s(96540);const r={},a=n.createContext(r);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);