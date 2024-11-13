"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[66672],{26227:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"local-user/media-permission-errors","title":"Media Permission Errors","description":"Local user media guide to local media permission errors.","source":"@site/docs/react-web-core/local-user/media-permission-errors.mdx","sourceDirName":"local-user","slug":"/local-user/media-permission-errors","permalink":"/react-web-core/local-user/media-permission-errors","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/local-user/media-permission-errors.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/react-web-core/tags/web-core"},{"inline":true,"label":"local-user","permalink":"/react-web-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/react-web-core/tags/self"},{"inline":true,"label":"self events","permalink":"/react-web-core/tags/self-events"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Media Permission Errors","description":"Local user media guide to local media permission errors.","sidebar_position":4,"tags":["web-core","local-user","self","self events"]},"sidebar":"tutorialSidebar","previous":{"title":"Manage Media Devices","permalink":"/react-web-core/local-user/manage-media-devices"},"next":{"title":"Other Methods","permalink":"/react-web-core/local-user/extras"}}');var i=s(74848),n=s(28453);const t={title:"Media Permission Errors",description:"Local user media guide to local media permission errors.",sidebar_position:4,tags:["web-core","local-user","self","self events"]},a="Media Permission Errors",c={},l=[];function d(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components},{Head:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"media-permission-errors",children:"Media Permission Errors"})}),"\n",(0,i.jsx)(r.p,{children:"This event is triggered when Dyte fails to acquire the user's local media\r\n(camera and/or microphone) or user revokes the permission for media devices."}),"\n",(0,i.jsx)(r.p,{children:"Your application can catch these errors like below:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"meeting.self.on('mediaPermissionError', ({\r\n    message,\r\n    kind\r\n}) => {\r\n    console.log(`Failed to capture ${kind}:  ${message}`);\r\n});\n"})}),"\n",(0,i.jsx)(r.p,{children:"This event shares information that can be used to show appropriate message for\r\nthe user."}),"\n",(0,i.jsxs)(r.p,{children:["Possible values for ",(0,i.jsx)(r.strong,{children:"message"})," are"]}),"\n",(0,i.jsx)(r.p,{children:"DENIED  - Permission was denied by the user"}),"\n",(0,i.jsx)(r.p,{children:"SYSTEM_DENIED   - Permission was denied by the system"}),"\n",(0,i.jsx)(r.p,{children:"COULD_NOT_START - Failed to capture media stream from the hardware"}),"\n",(0,i.jsxs)(r.p,{children:["Possible values for ",(0,i.jsx)(r.strong,{children:"kind"})," - ",(0,i.jsx)(r.code,{children:"audio"}),", ",(0,i.jsx)(r.code,{children:"video"}),", ",(0,i.jsx)(r.code,{children:"screenshare"})]}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("title",{children:"React Web Core Media Permission Errors"})})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>a});var o=s(96540);const i={},n=o.createContext(i);function t(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);