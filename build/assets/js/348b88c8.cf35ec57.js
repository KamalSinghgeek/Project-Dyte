"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[49813],{40896:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"plugins/enable-plugin","title":"Functions to enable plugins","description":"Methods on a plugin in a meeting.","source":"@site/docs/web-core/plugins/enable-plugin.mdx","sourceDirName":"plugins","slug":"/plugins/enable-plugin","permalink":"/web-core/plugins/enable-plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/web-core/plugins/enable-plugin.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/web-core/tags/web-core"},{"inline":true,"label":"plugins","permalink":"/web-core/tags/plugins"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Functions to enable plugins","description":"Methods on a plugin in a meeting.","sidebar_position":2,"tags":["web-core","plugins"]},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/web-core/plugins/introduction"},"next":{"title":"Functions to disable plugins","permalink":"/web-core/plugins/disable-plugin"}}');var l=i(74848),s=i(28453);const a={title:"Functions to enable plugins",description:"Methods on a plugin in a meeting.",sidebar_position:2,tags:["web-core","plugins"]},o="Functions to enable plugins",r={},c=[{value:"Add Plugin View",id:"add-plugin-view",level:3},{value:"Activate Plugins",id:"activate-plugins",level:3},{value:"<del>Enable Plugins</del>",id:"enable-plugins",level:3}];function u(e){const n={a:"a",code:"code",del:"del",em:"em",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"functions-to-enable-plugins",children:"Functions to enable plugins"})}),"\n",(0,l.jsxs)(n.p,{children:["Each plugin in ",(0,l.jsx)(n.code,{children:"meeting.plugins"})," object is of type\r\n",(0,l.jsx)(n.a,{href:"./introduction",children:(0,l.jsx)(n.code,{children:"DytePlugin"})})," and exposes the following functions to enable\r\nplugins."]}),"\n",(0,l.jsx)(n.h3,{id:"add-plugin-view",children:"Add Plugin View"}),"\n",(0,l.jsx)(n.p,{children:"This method adds the communication layer between the plugin inside the iframe and\r\nthe core application (meeting object) in the main window."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const plugins = meeting.plugins.all.toArray();\r\n\r\nplugins.forEach(async (plugin: DytePlugin) => {\r\n  const iframe = document.createElement('iframe');\r\n  await plugin.addPluginView(iframe);\r\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"activate-plugins",children:"Activate Plugins"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"activate()"})," method activates a plugin for all users in the meeting. When\r\nyou activate a plugin, it moves into the active plugins map and can be accessed\r\nfrom ",(0,l.jsx)(n.code,{children:"meeting.plugins.active"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"The snippet below displays all plugins and activates a plugin on click."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const plugins = meeting.plugins.all.toArray();\r\n\r\nplugins.forEach((plugin: DytePlugin) => {\r\n  const button = document.createElement('button');\r\n  button.innerText = plugin.name;\r\n  button.onclick = async () => {\r\n    await plugin.activate();\r\n  };\r\n  document.body.appendChild(button);\r\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"Here is another way you can activate a plugin."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const plugins = meeting.plugins.all.toArray();\r\nconst plugin = plugins.find((p) => p.name === 'YouTube');\r\n\r\nawait plugin?.activate();\n"})}),"\n",(0,l.jsx)(n.h3,{id:"enable-plugins",children:(0,l.jsx)(n.del,{children:"Enable Plugins"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.em,{children:"Deprecated"})})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"enable()"})," method enables a plugin for the current user. This does not\r\naffect other users in the meeting."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const plugins = meeting.plugins.all.toArray();\r\nconst plugin = plugins.find((p) => p.name === 'YouTube');\r\n\r\nawait plugin?.enable();\n"})}),"\n",(0,l.jsx)(i,{children:(0,l.jsx)("title",{children:"Web Core Functions to enable plugins"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const l={},s=t.createContext(l);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);