"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[94076],{87455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"reference/DyteParticipantMap","title":"DyteParticipantMap","description":"The following objects are DyteParticipantMap objects","source":"@site/docs/rn-core/reference/DyteParticipantMap.md","sourceDirName":"reference","slug":"/reference/DyteParticipantMap","permalink":"/rn-core/reference/DyteParticipantMap","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/reference/DyteParticipantMap.md","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"web_core_version":"1.32.1"},"sidebar":"tutorialSidebar","previous":{"title":"DyteParticipants","permalink":"/rn-core/reference/DyteParticipants"},"next":{"title":"DyteParticipant","permalink":"/rn-core/reference/DyteParticipant"}}');var r=n(74848),a=n(28453);const s={sidebar_position:4,web_core_version:"1.32.1"},c=void 0,o={},d=[];function p(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{name:"module_DyteParticipantMap"}),"\n",(0,r.jsxs)(t.p,{children:["The following objects are ",(0,r.jsx)(t.code,{children:"DyteParticipantMap"})," objects\r\nIt consists of 4 maps:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"joined"}),": A map of all participants that have joined the meeting."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"waitlisted"}),": A map of all participants that have been added to the waitlist."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"active"}),": A map of active participants who should be displayed in the meeting grid."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"pinned"}),": A map of pinned participants."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["These are all the map of participants, indexed by ",(0,r.jsx)(t.code,{children:"participant.id"})," (a participant's peer ID)."]}),"\n",(0,r.jsx)(t.p,{children:"This map emits events"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"participantJoined"})," when a participant is added to the map"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"participantLeft"})," when a participant is deleted to the map"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This map also re-emits events emitted to a participant. For eg. if User A is in ",(0,r.jsx)(t.code,{children:"joined"})," map, and User A's object emits an event ",(0,r.jsx)(t.code,{children:"videoUpdate"}),", the map re-emits that event."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);