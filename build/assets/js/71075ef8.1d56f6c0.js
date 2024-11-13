"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[24072],{60890:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"migration/opentok/concept-media-opentok","title":"Concepts: Media","description":"Explore the concept of media migration from OpenTok to Dyte. Follow our guide for effective media migration strategies.","source":"@site/docs/guides/migration/opentok/concept-media-opentok.mdx","sourceDirName":"migration/opentok","slug":"/migration/opentok/concept-media-opentok","permalink":"/guides/migration/opentok/concept-media-opentok","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/migration/opentok/concept-media-opentok.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Concepts: Media","sidebar_position":2,"description":"Explore the concept of media migration from OpenTok to Dyte. Follow our guide for effective media migration strategies."},"sidebar":"tutorialSidebar","previous":{"title":"Concepts: Basics","permalink":"/guides/migration/opentok/concepts-opentok-vs-dyte"},"next":{"title":"Migrate from OpenTok to Dyte with Shim","permalink":"/guides/migration/opentok/opentok-shim-by-dyte"}}');var i=t(74848),r=t(28453);const s={title:"Concepts: Media",sidebar_position:2,description:"Explore the concept of media migration from OpenTok to Dyte. Follow our guide for effective media migration strategies."},a="Media",d={},c=[{value:"Publishing",id:"publishing",level:2}];function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"media",children:"Media"})}),"\n",(0,i.jsx)(o.p,{children:"This topic compares how OpenTok and Dyte handle media publishing and subscription behavior."}),"\n",(0,i.jsx)(o.h2,{id:"publishing",children:"Publishing"}),"\n",(0,i.jsx)(o.p,{children:"OpenTok"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",children:"publisher = OT.initPublisher('replacementElementId');\r\nsession.publish(publisher, function (error) {\r\n  if (error) {\r\n    console.log(error);\r\n  } else {\r\n    console.log('Publishing a stream.');\r\n  }\r\n});\n"})}),"\n",(0,i.jsxs)(o.p,{children:["For more information, see ",(0,i.jsx)(o.a,{href:"https://tokbox.com/developer/guides/publish-stream/js/",children:"Publishing a stream"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Dyte"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",children:"DyteClient.init({\r\n  authToken: '$TOKEN',\r\n  defaults: {\r\n    audio: true,\r\n    video: true,\r\n  },\r\n});\n"})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("title",{children:"Concepts: Media Guide"}),(0,i.jsx)("meta",{name:"description",content:"Explore the concept of media migration from OpenTok to Dyte. Follow our guide for effective media migration strategies."})]})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var n=t(96540);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);