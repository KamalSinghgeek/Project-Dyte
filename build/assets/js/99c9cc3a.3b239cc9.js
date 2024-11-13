"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[89051],{17935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"room-metadata","title":"Room Metadata","description":"All metadata pertaining to a meeting.","source":"@site/docs/rn-core/room-metadata.mdx","sourceDirName":".","slug":"/room-metadata","permalink":"/rn-core/room-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/room-metadata.mdx","tags":[{"inline":true,"label":"rn-core","permalink":"/rn-core/tags/rn-core"},{"inline":true,"label":"room-metadata","permalink":"/rn-core/tags/room-metadata"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Room Metadata","description":"All metadata pertaining to a meeting.","sidebar_position":4,"tags":["rn-core","room-metadata"]},"sidebar":"tutorialSidebar","previous":{"title":"Other Methods","permalink":"/rn-core/local-user/extras"},"next":{"title":"Participant Maps","permalink":"/rn-core/participants/"}}');var r=n(74848),i=n(28453);const a={title:"Room Metadata",description:"All metadata pertaining to a meeting.",sidebar_position:4,tags:["rn-core","room-metadata"]},c="Room Metadata",s={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"room-metadata",children:"Room Metadata"})}),"\n",(0,r.jsxs)(t.p,{children:["All metadata pertaining to a meeting is stored in ",(0,r.jsx)(t.code,{children:"meeting.meta"}),". This includes:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"viewType"}),": Indicates the type of the meeting, possible values are ",(0,r.jsx)(t.code,{children:"WEBINAR"}),",\r\n",(0,r.jsx)(t.code,{children:"GROUP_CALL"}),", ",(0,r.jsx)(t.code,{children:"LIVESTREAM"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"roomType"}),": Indicates the meeting is a group-call or a webinar."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"meetingTitle"}),": The title of the meeting."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"meetingStartedTimestamp"}),": The timestamp when the meeting started."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"socketConnected"}),": Boolean flag to show when the socket is connected."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For example, if you want to get the title of the meeting the current participant\r\nis connected to, you can do so by doing:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Destructuring the metadata to get meetingTitle and joined\r\nconst { meetingTitle } = meeting.meta;\r\n\r\nif (meeting.self.roomJoined) {\r\n  console.log(\r\n    `The local user has joined a meeting with title ${meetingTitle}.`\r\n  );\r\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"meta"})," object also emits events for indicating the change in the connection\r\nstate of the room. For example, you can listen for the ",(0,r.jsx)(t.code,{children:"connected"})," event to know\r\nwhen the local user has successfully joined the room, and for the ",(0,r.jsx)(t.code,{children:"disconnected"}),"\r\nevent to find out if the local user's connection has dropped."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"meeting.meta.on('connected', () => {\r\n  console.log(\r\n    `The local user has successfully joined the meeting ${meeting.meta.meetingTitle}`\r\n  );\r\n});\r\n\r\nmeeting.meta.on('disconnected', () => {\r\n  console.log(\r\n    `The local user got disconnected from the meeting ${meeting.meta.meetingTitle}`\r\n  );\r\n});\r\n\r\nmeeting.meta.on('poorConnection', () => {\r\n  console.log(`The local user has poor network connection.`);\r\n});\r\n\r\nmeeting.meta.on('connectionError', ({ reason }) => {\r\n  console.log(`Could not connect to the room.`);\r\n});\n"})}),"\n",(0,r.jsx)(n,{children:(0,r.jsx)("title",{children:"React Native Core Room Metadata"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);