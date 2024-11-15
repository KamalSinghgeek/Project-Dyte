"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[68814],{37742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"room-metadata","title":"Meeting Metadata","description":"All metadata pertaining to a meeting.","source":"@site/docs/react-web-core/room-metadata.mdx","sourceDirName":".","slug":"/room-metadata","permalink":"/react-web-core/room-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/room-metadata.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/react-web-core/tags/web-core"},{"inline":true,"label":"room-metadata","permalink":"/react-web-core/tags/room-metadata"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":11,"frontMatter":{"title":"Meeting Metadata","description":"All metadata pertaining to a meeting.","sidebar_position":11,"tags":["web-core","room-metadata"]},"sidebar":"tutorialSidebar","previous":{"title":"Livestreaming","permalink":"/react-web-core/livestreaming"},"next":{"title":"Debug System Error Codes","permalink":"/react-web-core/error-codes/error-code"}}');var o=n(74848),a=n(28453);const r={title:"Meeting Metadata",description:"All metadata pertaining to a meeting.",sidebar_position:11,tags:["web-core","room-metadata"]},s="Meeting Metadata",c={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"meeting-metadata",children:"Meeting Metadata"})}),"\n",(0,o.jsxs)(t.p,{children:["All metadata pertaining to a meeting is stored in ",(0,o.jsx)(t.code,{children:"meeting.meta"}),". This includes:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"viewType"}),": Indicates the type of the meeting, possible values are ",(0,o.jsx)(t.code,{children:"WEBINAR"}),",\r\n",(0,o.jsx)(t.code,{children:"GROUP_CALL"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"roomType"}),": Indicates the meeting is a group-call or a webinar."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"meetingTitle"}),": The title of the meeting."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"meetingStartedTimestamp"}),": The timestamp when the meeting started."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"mediaState"}),": Media Connection state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"socketState"}),": Socket Connection state"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For example, if you want to get the title of the meeting the current participant\r\nis connected to, you can do so by doing:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// Destructuring the metadata to get meetingTitle and joined\r\nconst { meetingTitle } = meeting.meta;\r\n\r\nif (meeting.self.roomJoined) {\r\n  console.log(\r\n    `The local user has joined a meeting with title ${meetingTitle}.`\r\n  );\r\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Events"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"meta"})," object also emits events for indicating the change in the connection\r\nstate of the room."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Media Connection"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Updates to Media connection (WebRTC connection used for the transfer of actual media) will be sent on ",(0,o.jsx)(t.code,{children:"mediaConnectionUpdate"})," event with the payload"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"meeting.meta.on('mediaConnectionUpdate', ({ transport, state }) => {\r\n  // transport - 'consuming' | 'producing'\r\n  // state - 'new' | 'connecting' | 'connected' | 'disconnected' | 'reconnecting' | 'failed'\r\n});\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Socket Connection"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Updates to Websocket connection (used for chat, polls and other basic signaling) will be sent on ",(0,o.jsx)(t.code,{children:"socketConnectionUpdate"})," event"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"meeting.meta.on('socketConnectionUpdate', ({ state, reconnectionAttempt, reconnected }) => {\r\n  // state - 'connected' | 'disconnected' | 'reconnecting' | 'failed'\r\n});\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);