"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29011],{9816:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"pre-call/handling-permissions","title":"Handling Browser Permissions","description":"Properties","source":"@site/docs/web-core/pre-call/2-handling-permissions.mdx","sourceDirName":"pre-call","slug":"/pre-call/handling-permissions","permalink":"/web-core/pre-call/handling-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/web-core/pre-call/2-handling-permissions.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Media Preview","permalink":"/web-core/pre-call/media-preview"},"next":{"title":"Virtual BG and Noise Cancellation","permalink":"/web-core/pre-call/virtual-bg"}}');var i=r(74848),t=r(28453);const o={},a="Handling Browser Permissions",d={},c=[{value:"Properties",id:"properties",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"handling-browser-permissions",children:"Handling Browser Permissions"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"self.mediaPermissions"}),": The current audio and video ",(0,i.jsx)(n.strong,{children:"browser permissions"})," given by the local\r\nuser."]}),"\n",(0,i.jsxs)(n.p,{children:["Permissions start with ",(0,i.jsx)(n.code,{children:"NOT_REQUESTED"})," and can go into 4 different states"]}),"\n",(0,i.jsx)(n.mermaid,{value:"stateDiagram-v2\r\n    NOT_REQUESTED --\x3e ACCEPTED\r\n    NOT_REQUESTED --\x3e DENIED\r\n    NOT_REQUESTED --\x3e SYSTEM_DENIED\r\n    NOT_REQUESTED --\x3e COULD_NOT_START"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ACCEPTED"})," - The user accepted browser permission prompts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DENIED"})," - The user denied browser permission prompts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SYSTEM_DENIED"})," - The user's browser does not have the required permission, in this case usually the OS hasn't granted permission the browser application"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"COULD_NOT_START"})," - Unable to start the selected device, you can retry with a different device"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"One other thing to note down here is user might revoke permission later, or might unplug devices etc so these states can change at runtime"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"mediaPermissionUpdate"})," event on ",(0,i.jsx)(n.code,{children:"self"})," to listen for these changes"]}),"\n",(0,i.jsx)(n.mermaid,{value:"stateDiagram-v2\r\n    NOT_REQUESTED --\x3e ACCEPTED\r\n    NOT_REQUESTED --\x3e DENIED\r\n    NOT_REQUESTED --\x3e SYSTEM_DENIED\r\n    NOT_REQUESTED --\x3e COULD_NOT_START\r\n    ACCEPTED --\x3e DENIED\r\n    ACCEPTED --\x3e COULD_NOT_START\r\n    DENIED --\x3e ACCEPTED\r\n    COULD_NOT_START --\x3e ACCEPTED "})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);