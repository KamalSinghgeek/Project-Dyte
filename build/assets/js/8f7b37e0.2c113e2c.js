"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[98763],{6104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"capabilities/plugins/docshare","title":"Plugin: Document Sharing","description":"DocShare allows you to share, view documents and annotate the documents collaboratively.","source":"@site/docs/guides/capabilities/plugins/docshare.mdx","sourceDirName":"capabilities/plugins","slug":"/capabilities/plugins/docshare","permalink":"/guides/capabilities/plugins/docshare","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/plugins/docshare.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{"title":"Plugin: Document Sharing"},"sidebar":"tutorialSidebar","previous":{"title":"Rendering","permalink":"/guides/capabilities/plugins/rendering"},"next":{"title":"Plugin: Streamer","permalink":"/guides/capabilities/plugins/streamer"}}');var o=t(74848),r=t(28453);const s={title:"Plugin: Document Sharing"},a="Document Sharing",l={},c=[{value:"Loading a document",id:"loading-a-document",level:2},{value:"File format support",id:"file-format-support",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"document-sharing",children:"Document Sharing"})}),"\n",(0,o.jsx)(n.p,{children:"DocShare allows you to share, view documents and annotate the documents collaboratively.\r\nThe plugin exposes a few APIs to control the document viewer"}),"\n",(0,o.jsx)(n.h2,{id:"loading-a-document",children:"Loading a document"}),"\n",(0,o.jsx)(n.p,{children:"You can specify the following parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"followId"}),": It syncs the zoom and scroll values of the userId specified to other users (including the recording)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"document"})," : You can also specify the document that you wish to open beforehand."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const id = '317b4f59-40f0-46af-90d6-1ed6035bb477';\r\nconst docsharePlugin = meeting.plugins.all.get(id);\r\ndocsharePlugin.on('ready', () => {\r\n  // Ensure the isHost check is only there for one participant\r\n  // since the recording can't follow multiple people\r\n  const isHost = meeting.self.presetName === '<presetnameofhost>';\r\n  if (!isHost) return;\r\n  docsharePlugin.sendData({\r\n    eventName: 'config',\r\n    data: {\r\n      eventName: 'config',\r\n      document: '<document-url>',\r\n      followId: meeting.self.userId,\r\n    },\r\n  });\r\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now whenever the plugin is loaded it will use the specified parameters.\r\nTo open the plugin you can call"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"docsharePlugin.activate();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"file-format-support",children:"File format support"}),"\n",(0,o.jsx)(n.p,{children:"Supports PPTX, PPT, DOC, PDF"}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)("title",{children:"Plugin: Document Sharing Guide"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);