"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[94018],{76318:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"local-user/extras","title":"Other Methods","description":"Methods to manage the local user.","source":"@site/docs/rn-core/local-user/extras.mdx","sourceDirName":"local-user","slug":"/local-user/extras","permalink":"/rn-core/local-user/extras","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/local-user/extras.mdx","tags":[{"inline":true,"label":"rn-core","permalink":"/rn-core/tags/rn-core"},{"inline":true,"label":"local-user","permalink":"/rn-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/rn-core/tags/self"},{"inline":true,"label":"methods","permalink":"/rn-core/tags/methods"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":5,"frontMatter":{"title":"Other Methods","description":"Methods to manage the local user.","sidebar_position":5,"tags":["rn-core","local-user","self","methods"]},"sidebar":"tutorialSidebar","previous":{"title":"Media Permission Errors","permalink":"/rn-core/local-user/media-permission-errors"},"next":{"title":"Room Metadata","permalink":"/rn-core/room-metadata"}}');var s=r(74848),i=r(28453);const a={title:"Other Methods",description:"Methods to manage the local user.",sidebar_position:5,tags:["rn-core","local-user","self","methods"]},o=void 0,l={},c=[{value:"Update media resolution at runtime",id:"update-media-resolution-at-runtime",level:2},{value:"Camera",id:"camera",level:3},{value:"Screenshare",id:"screenshare",level:3},{value:"Pinning &amp; unpinning",id:"pinning--unpinning",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"update-media-resolution-at-runtime",children:"Update media resolution at runtime"}),"\n",(0,s.jsx)(n.h3,{id:"camera",children:"Camera"}),"\n",(0,s.jsx)(n.p,{children:"meeting.self.updateVideoConstraints(resolution)"}),"\n",(0,s.jsx)(n.p,{children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"meeting.self.updateVideoConstraints({\r\n  width: { ideal: 1920 },\r\n  height: { ideal: 1080 },\r\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"screenshare",children:"Screenshare"}),"\n",(0,s.jsx)(n.p,{children:"meeting.self.updateScreenshareConstraints(resolution)"}),"\n",(0,s.jsx)(n.p,{children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"meeting.self.updateScreenshareConstraints({\r\n  width: { ideal: 1920 },\r\n  height: { ideal: 1080 },\r\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pinning--unpinning",children:"Pinning & unpinning"}),"\n",(0,s.jsxs)(n.p,{children:["You can pin or unpin yourself given you have the appropriate permissions. You\r\ncan check the pinned status of the local user using ",(0,s.jsx)(n.code,{children:"meeting.isPinned"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"meeting.self.pin();\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"meeting.self.unpin();\n"})}),"\n",(0,s.jsx)(r,{children:(0,s.jsx)("title",{children:"React Native Core Other Methods"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);