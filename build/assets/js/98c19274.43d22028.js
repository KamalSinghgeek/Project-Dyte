"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[42340],{73908:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"components/dyte-participant-tile","title":"DyteParticipantTile","description":"Learn how to use and customize the DyteParticipantTile component in Dyte\'s React Native UI Kit with our detailed documentation.","source":"@site/docs/rn-ui-kit/components/dyte-participant-tile.mdx","sourceDirName":"components","slug":"/components/dyte-participant-tile","permalink":"/react-native/components/dyte-participant-tile","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-ui-kit/components/dyte-participant-tile.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{"image":"/static/ui-kit/1.x.x/components/dyte-participant-tile.svg","description":"Learn how to use and customize the DyteParticipantTile component in Dyte\'s React Native UI Kit with our detailed documentation."},"sidebar":"tutorialSidebar","previous":{"title":"DyteParticipantCount","permalink":"/react-native/components/dyte-participant-count"},"next":{"title":"DyteParticipant","permalink":"/react-native/components/dyte-participant"}}');var a=n(74848),r=n(28453);const o={image:"/static/ui-kit/1.x.x/components/dyte-participant-tile.svg",description:"Learn how to use and customize the DyteParticipantTile component in Dyte's React Native UI Kit with our detailed documentation."},c="DyteParticipantTile",s={},p=[{value:"Props",id:"props",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...t.components},{Head:n,PropsTable:i}=e;return n||m("Head",!0),i||m("PropsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"dyteparticipanttile",children:"DyteParticipantTile"})}),"\n",(0,a.jsxs)(e.p,{children:["A component which plays a participants video and allows for placement of\r\ncomponents like ",(0,a.jsx)(e.code,{children:"dyte-name-tag"}),", ",(0,a.jsx)(e.code,{children:"dyte-audio-visualizer"})," or any other component."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<DyteParticipantTile participant={meeting.self}>\r\n  <DyteNameTag participant={meeting.self}>\r\n    <DyteAudioVisualizer slot="start" />\r\n  </DyteNameTag>\r\n</DyteParticipantTile>\n'})}),"\n",(0,a.jsxs)(e.p,{children:["You can change the ",(0,a.jsx)(e.code,{children:"name-tag-position"})," to any of the supported values and change\r\nthe placement of audio-visualizer in name-tag as well."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<DyteParticipantTile participant={meeting.self} nameTagPosition="bottom-center">\r\n  <DyteNameTag participant={meeting.self}>\r\n    <DyteAudioVisualizer slot="end" />\r\n  </DyteNameTag>\r\n</DyteParticipantTile>\n'})}),"\n",(0,a.jsx)(e.p,{children:"It also has a few variants."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<DyteParticipantTile\r\n  participant={meeting.self}\r\n  nameTagPosition="bottom-center"\r\n  variant="gradient"\r\n>\r\n  <DyteNameTag participant={meeting.self}>\r\n    <DyteAudioVisualizer slot="start" />\r\n  </DyteNameTag>\r\n</DyteParticipantTile>\n'})}),"\n",(0,a.jsx)(e.h2,{id:"props",children:"Props"}),"\n",(0,a.jsx)(i,{of:"dyte-participant-tile"}),"\n",(0,a.jsx)(n,{children:(0,a.jsx)("title",{children:"React Native UI Kit DyteParticipantTile"})})]})}function d(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}function m(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var i=n(96540);const a={},r=i.createContext(a);function o(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);