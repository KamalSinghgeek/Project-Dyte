"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[6939],{13997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"plugins/extra","title":"Other methods","description":"Methods on a plugin in a meeting.","source":"@site/docs/react-web-core/plugins/extra.mdx","sourceDirName":"plugins","slug":"/plugins/extra","permalink":"/react-web-core/plugins/extra","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/plugins/extra.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/react-web-core/tags/web-core"},{"inline":true,"label":"plugins","permalink":"/react-web-core/tags/plugins"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Other methods","description":"Methods on a plugin in a meeting.","sidebar_position":4,"tags":["web-core","plugins"]},"sidebar":"tutorialSidebar","previous":{"title":"Functions to disable plugins","permalink":"/react-web-core/plugins/disable-plugin"},"next":{"title":"Recording","permalink":"/react-web-core/recording"}}');var s=t(74848),o=t(28453);const r={title:"Other methods",description:"Methods on a plugin in a meeting.",sidebar_position:4,tags:["web-core","plugins"]},l=void 0,d={},a=[{value:"Subscribe to events from a plugin",id:"subscribe-to-events-from-a-plugin",level:2},{value:"Send data to the plugin",id:"send-data-to-the-plugin",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"subscribe-to-events-from-a-plugin",children:"Subscribe to events from a plugin"}),"\n",(0,s.jsx)(n.p,{children:"A plugin emits the following events:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enabled"})," - Emitted when a plugin is enabled."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"closed"})," - Emitted when a plugin is closed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dyteStateUpdate"})," - Emitted when the state of the plugin has changed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ready"})," - Emitted when the plugin is ready to exchange data with client SDK."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toggleViewMode"})," - Emitted when the control is toggled for users with\r\nview-only permissions for a plugin."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pluginId = '...';\r\nconst plugin = meeting.plugins.active.get(pluginId);\r\nplugin.on('enabled', () => {\r\n  console.log('The plugin has been enabled');\r\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"send-data-to-the-plugin",children:"Send data to the plugin"}),"\n",(0,s.jsxs)(n.p,{children:["You can send data (type ",(0,s.jsx)(n.code,{children:"any"}),") to a plugin using the ",(0,s.jsx)(n.code,{children:"sendData()"})," method. This\r\nmethod comes in handy when building your own plugin."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pluginId = '...';\r\nconst plugin = meeting.plugins.active.get(pluginId);\r\nplugin.on('ready', () => {\r\n  plugin.sendData({\r\n    eventName: 'my-custom-event',\r\n    data: 'Hello world',\r\n  });\r\n});\n"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("title",{children:"React Web Core Other methods"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);