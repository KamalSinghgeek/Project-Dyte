"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[14378],{85e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"plugins/introduction","title":"Introduction","description":"Manage plugins in a meeting.","source":"@site/docs/ios-core/plugins/introduction.mdx","sourceDirName":"plugins","slug":"/plugins/introduction","permalink":"/ios-core/plugins/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/plugins/introduction.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"plugins","permalink":"/ios-core/tags/plugins"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Introduction","description":"Manage plugins in a meeting.","sidebar_position":1,"tags":["ios-core","plugins"]},"sidebar":"tutorialSidebar","previous":{"title":"Room Metadata","permalink":"/ios-core/room-metadata"},"next":{"title":"Functions to enable plugins","permalink":"/ios-core/plugins/enable-plugin"}}');var s=t(74848),o=t(28453);const r={title:"Introduction",description:"Manage plugins in a meeting.",sidebar_position:1,tags:["ios-core","plugins"]},l="Introduction",c={},d=[];function a(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsxs)(n.p,{children:["Plugins are one-click add-ons that can make your meetings more immersive and collaborative. Dyte provides a bunch of inbuilt plugins to choose from, you can also build your own plugins using the ",(0,s.jsx)(n.a,{href:"../../plugin-sdk/",children:"Plugin SDK"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The meeting plugins can be accessed from the ",(0,s.jsx)(n.code,{children:"meeting.plugins"})," object, it exposes the following."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"active"}),(0,s.jsx)(n.td,{children:"List"}),(0,s.jsx)(n.td,{children:"All plugins that are currently in use."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"all"}),(0,s.jsx)(n.td,{children:"List"}),(0,s.jsx)(n.td,{children:"All plugins the meeting has access to."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Each plugin in the list is of type ",(0,s.jsx)(n.code,{children:"DytePlugin"})," which has the following public fields and methods:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"class DytePlugin {\r\n    let id: String\r\n    let name: String\r\n    let description: String\r\n    let picture: String\r\n    let isPrivate: Bool\r\n    let staggered: Bool\r\n    let baseURL: String\r\n    let config: PluginConfig\r\n    let isActive: Bool\r\n    let enabledBy: String?\r\n\r\n    func activate()\r\n    func deactivate()\r\n    func getPluginView(): WebView\r\n    func sendData(eventName: String, data: Any?)\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"PluginConfig"})," type consists of the following fields:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'class PluginConfig {\r\n  let accessControl: String = "FULL_ACCESS"\r\n}\n'})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("title",{children:"Mobile Core Introduction"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);