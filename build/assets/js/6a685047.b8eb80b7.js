"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[19706],{19052:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"error-codes/error-code","title":"Debug System Error Codes","description":"This information is intended for developers debugging or troubleshooting Dyte\'s web core system errors.","source":"@site/docs/rn-core/error-codes/error-code.mdx","sourceDirName":"error-codes","slug":"/error-codes/error-code","permalink":"/rn-core/error-codes/error-code","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/error-codes/error-code.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Debug System Error Codes","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Livestreaming","permalink":"/rn-core/livestreaming"},"next":{"title":"System Error Codes (0-16)","permalink":"/rn-core/error-codes/error-code-zero-ten"}}');var o=t(74848),d=t(28453);const n={title:"Debug System Error Codes",sidebar_position:1},i=void 0,c={},l=[{value:"Error codes and format",id:"error-codes-and-format",level:2},{value:"Error codes prefixes",id:"error-codes-prefixes",level:2}];function x(e){const r={admonition:"admonition",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{Head:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.admonition,{title:"Note",type:"info",children:(0,o.jsx)(r.p,{children:"This information is intended for developers debugging or troubleshooting Dyte's web core system errors."})}),"\n",(0,o.jsx)(r.p,{children:"Error codes are a standardized method for developers to convey application errors and issues to users or other developers in a structured manner. Error codes typically consist of a numerical or alphanumeric code and a description that provides more information about the error."}),"\n",(0,o.jsx)(r.p,{children:"This document lists Dyte's web core error codes that you may encounter in various scenarios. System error codes can arise in different parts of the system, and their descriptions may not always provide exact details. To address these codes effectively, you must first understand the programmatic and runtime contexts in which these errors occurred."}),"\n",(0,o.jsx)(r.h2,{id:"error-codes-and-format",children:"Error codes and format"}),"\n",(0,o.jsx)(r.p,{children:"Error codes consist of four-digit numbers that are categorized by the type of error. The first two digits denote the module in which the error occurred, and the remaining digits specify the type of error."}),"\n",(0,o.jsx)(r.h2,{id:"error-codes-prefixes",children:"Error codes prefixes"}),"\n",(0,o.jsx)(r.p,{children:"Here is a list of error code prefixes corresponding to each Dyte modules:"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:(0,o.jsx)(r.strong,{children:"Module"})}),(0,o.jsx)(r.th,{children:(0,o.jsx)(r.strong,{children:"Error Code Prefix"})})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"DyteClient"}),(0,o.jsx)(r.td,{children:"00xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Controller"}),(0,o.jsx)(r.td,{children:"01xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"RoomNodeClient"}),(0,o.jsx)(r.td,{children:"02xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"HiveNodeClient"}),(0,o.jsx)(r.td,{children:"03xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"SocketService"}),(0,o.jsx)(r.td,{children:"04xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Chat"}),(0,o.jsx)(r.td,{children:"05xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Plugins"}),(0,o.jsx)(r.td,{children:"06xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Polls"}),(0,o.jsx)(r.td,{children:"07xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Meta"}),(0,o.jsx)(r.td,{children:"08xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Permissions/Presets"}),(0,o.jsx)(r.td,{children:"09xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Recording"}),(0,o.jsx)(r.td,{children:"10xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Self (or local media handling)"}),(0,o.jsx)(r.td,{children:"11xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Participant"}),(0,o.jsx)(r.td,{children:"12xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Spotlight"}),(0,o.jsx)(r.td,{children:"13xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Remote Request"}),(0,o.jsx)(r.td,{children:"14xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Webinar"}),(0,o.jsx)(r.td,{children:"15xx"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Device"}),(0,o.jsx)(r.td,{children:"16xx"})]})]})]}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)("title",{children:"React Native Core Debug System Error Codes"})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>i});var s=t(96540);const o={},d=s.createContext(o);function n(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);