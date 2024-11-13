"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[28192],{84481:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"pre-call/handling-permissions","title":"Handling Permissions","description":"Properties","source":"@site/docs/rn-core/pre-call/2-handling-permissions.mdx","sourceDirName":"pre-call","slug":"/pre-call/handling-permissions","permalink":"/rn-core/pre-call/handling-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/pre-call/2-handling-permissions.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Media Preview","permalink":"/rn-core/pre-call/media-preview"},"next":{"title":"Meeting Metadata","permalink":"/rn-core/pre-call/meeting-meta"}}');var i=r(74848),t=r(28453);const o={},d="Handling Permissions",a={},c=[{value:"Properties",id:"properties",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"handling-permissions",children:"Handling Permissions"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"self.mediaPermissions"}),": The current audio and video ",(0,i.jsx)(n.strong,{children:"app permissions"})," given by the local\r\nuser."]}),"\n",(0,i.jsxs)(n.p,{children:["Permissions start with ",(0,i.jsx)(n.code,{children:"NOT_REQUESTED"})," and can go into 4 different states"]}),"\n",(0,i.jsx)(n.mermaid,{value:"stateDiagram-v2\r\n    NOT_REQUESTED --\x3e ACCEPTED\r\n    NOT_REQUESTED --\x3e DENIED\r\n    NOT_REQUESTED --\x3e COULD_NOT_START"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ACCEPTED"})," - The user accepted app permission prompts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DENIED"})," - The user denied app permission prompts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"COULD_NOT_START"})," - Unable to start the selected device, you can retry with a different device"]}),"\n"]}),"\n",(0,i.jsx)("br",{})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);