"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[48788],{91007:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"plugins/enable-disable-plugin","title":"Functions to enable plugins","description":"Methods on a plugin in a meeting.","source":"@site/docs/android-core/plugins/enable-disable-plugin.mdx","sourceDirName":"plugins","slug":"/plugins/enable-disable-plugin","permalink":"/android-core/plugins/enable-disable-plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/plugins/enable-disable-plugin.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"plugins","permalink":"/android-core/tags/plugins"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Functions to enable plugins","description":"Methods on a plugin in a meeting.","sidebar_position":2,"tags":["android-core","plugins"]},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/android-core/plugins/introduction"},"next":{"title":"Other methods","permalink":"/android-core/plugins/extra"}}');var l=i(74848),a=i(28453);const s={title:"Functions to enable plugins",description:"Methods on a plugin in a meeting.",sidebar_position:2,tags:["android-core","plugins"]},o=void 0,r={},c=[{value:"Enable Plugins",id:"enable-plugins",level:2},{value:"Activate Plugins",id:"activate-plugins",level:3},{value:"Get Plugin View",id:"get-plugin-view",level:3},{value:"Disable Plugins",id:"disable-plugins",level:2},{value:"Deactivate Plugin",id:"deactivate-plugin",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"enable-plugins",children:"Enable Plugins"}),"\n",(0,l.jsxs)(n.p,{children:["Each plugin in ",(0,l.jsx)(n.code,{children:"meeting.plugins"})," object is of type\r\n",(0,l.jsx)(n.a,{href:"./introduction",children:(0,l.jsx)(n.code,{children:"DytePlugin"})})," and exposes the following functions to enable\r\nplugins."]}),"\n",(0,l.jsx)(n.h3,{id:"activate-plugins",children:"Activate Plugins"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"activate()"})," method activates a plugin for all users in the meeting. When\r\nyou activate a plugin, it moves into the active plugins list and can be accessed\r\nfrom ",(0,l.jsx)(n.code,{children:"meeting.plugins.active"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"The snippet below retrieves the first plugin from the list and activates it."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val plugin: DytePlugin = meeting.plugins.all[0]\r\n\r\nplugin.activate()\n"})}),"\n",(0,l.jsx)(n.p,{children:"This directly activates the plugin without any user interaction."}),"\n",(0,l.jsx)(n.p,{children:"For e.g. you can also show a list of all plugins and activate a plugin on click programmatically."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val plugins: List<DytePlugin> = meeting.plugins.all\r\n\r\nplugins.forEach { plugin ->\r\n  val button = Button(context)\r\n\r\n  button.text = "Activate ${plugin.name}"\r\n  button.setOnClickListener {\r\n    plugin.activate()\r\n  }\r\n\r\n  // Add the button to your view\r\n  view.addView(button)\r\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"get-plugin-view",children:"Get Plugin View"}),"\n",(0,l.jsxs)(n.p,{children:["When a plugin is enabled, the core SDK adds a communication layer between the plugin inside the WebView and\r\nitself (meeting object). The ",(0,l.jsx)(n.code,{children:"getPluginView()"})," method returns a configured WebView of an active plugin, that can be added to a\r\nViewGroup."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val plugin = meeting.plugins.active[0]\r\n\r\nplugin.getPluginView() // This will return a WebView\n"})}),"\n",(0,l.jsx)(n.h2,{id:"disable-plugins",children:"Disable Plugins"}),"\n",(0,l.jsxs)(n.p,{children:["Each plugin in ",(0,l.jsx)(n.code,{children:"meeting.plugins"})," object is of type\r\n",(0,l.jsx)(n.a,{href:"./introduction",children:(0,l.jsx)(n.code,{children:"DytePlugin"})})," and exposes the following functions to disable\r\nplugins."]}),"\n",(0,l.jsx)(n.h3,{id:"deactivate-plugin",children:"Deactivate Plugin"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"deactivate()"})," method deactivates the plugin for all users in the meeting. When you deactivate a plugin, it moves out of the active plugins list and can only be accessed from ",(0,l.jsx)(n.code,{children:"meeting.plugins.all"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val plugin = meeting.plugins.active[0]\r\n\r\nplugin.deactivate()\n"})}),"\n",(0,l.jsx)(i,{children:(0,l.jsx)("title",{children:"Android Core Enable-Disable Plugins"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);