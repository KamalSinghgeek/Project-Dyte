"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[3563],{4358:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"plugins/introduction","title":"Introduction","description":"Manage plugins in a meeting.","source":"@site/docs/web-core/plugins/introduction.mdx","sourceDirName":"plugins","slug":"/plugins/introduction","permalink":"/web-core/plugins/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/web-core/plugins/introduction.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/web-core/tags/web-core"},{"inline":true,"label":"plugins","permalink":"/web-core/tags/plugins"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Introduction","description":"Manage plugins in a meeting.","sidebar_position":1,"tags":["web-core","plugins"]},"sidebar":"tutorialSidebar","previous":{"title":"Other chat functions","permalink":"/web-core/chat/other-chat-functions"},"next":{"title":"Functions to enable plugins","permalink":"/web-core/plugins/enable-plugin"}}');var i=t(74848),s=t(28453);const o={title:"Introduction",description:"Manage plugins in a meeting.",sidebar_position:1,tags:["web-core","plugins"]},c="Introduction",l={},d=[];function a(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components},{Head:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(e.p,{children:"Plugins are one-click add-ons that can make your meetings more immersive and\r\ncollaborative. Dyte provides a bunch of inbuilt plugins to choose from, you can\r\nalso build your own plugins using the Plugin SDK."}),"\n",(0,i.jsxs)(e.p,{children:["The meeting plugins can be accessed from the ",(0,i.jsx)(e.code,{children:"meeting.plugins"})," object, it\r\nexposes the following."]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Property"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"active"}),(0,i.jsx)(e.td,{children:"Map"}),(0,i.jsx)(e.td,{children:"All plugins that are currently in use."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"all"}),(0,i.jsx)(e.td,{children:"Map"}),(0,i.jsx)(e.td,{children:"All plugins the meeting has access to."})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["Each plugin in the map is of type ",(0,i.jsx)(e.code,{children:"DytePlugin"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"interface DytePlugin {\r\n  baseURL: string;\r\n  createdAt: string;\r\n  description: string;\r\n  id: string;\r\n  name: string;\r\n  config: PluginConfig | undefined;\r\n  organizationId: string;\r\n  picture: string;\r\n  private: boolean;\r\n  published: boolean;\r\n  staggered: boolean;\r\n  tags: string[];\r\n  type: string;\r\n  updatedAt: string;\r\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Once a plugin is activated, ",(0,i.jsx)(e.code,{children:"plugin.config"})," get's populated. It is of type\r\n",(0,i.jsx)(e.code,{children:"PluginConfig"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"interface PluginConfig {\r\n  name: string;\r\n  pluginId: string;\r\n  version: string;\r\n  description: string;\r\n  author?: string;\r\n  repository?: string;\r\n  tags?: string[];\r\n  picture?: string;\r\n  url?: string;\r\n  files: {\r\n    include: string[];\r\n    exclude?: string[];\r\n  };\r\n  views?: {\r\n    [viewId: string]: {\r\n      url: string;\r\n      suggestedPosition: string;\r\n    };\r\n  };\r\n  contentScript?: string;\r\n  permissions?: {\r\n    [key: string]: {\r\n      default: boolean;\r\n      description: string;\r\n    };\r\n  };\r\n  config?: {\r\n    [key: string]: string;\r\n  };\r\n}\n"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"Web Core Introduction"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);