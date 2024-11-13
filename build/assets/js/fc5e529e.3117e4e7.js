"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[59867],{14899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"reference/DyteConnectedMeetings","title":"DyteConnectedMeetings","description":"This consists of the methods to faciliate connected meetings","source":"@site/docs/rn-core/reference/DyteConnectedMeetings.md","sourceDirName":"reference","slug":"/reference/DyteConnectedMeetings","permalink":"/rn-core/reference/DyteConnectedMeetings","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/reference/DyteConnectedMeetings.md","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":17,"frontMatter":{"sidebar_position":17,"web_core_version":"1.32.1"},"sidebar":"tutorialSidebar","previous":{"title":"DyteRemote","permalink":"/rn-core/reference/DyteRemote"},"next":{"title":"DyteRecording","permalink":"/rn-core/reference/DyteRecording"}}');var s=n(74848),c=n(28453);const d={sidebar_position:17,web_core_version:"1.32.1"},r=void 0,o={},a=[{value:"connectedMeetings.getConnectedMeetings()",id:"connectedmeetingsgetconnectedmeetings",level:3},{value:"connectedMeetings.createMeetings()",id:"connectedmeetingscreatemeetings",level:3},{value:"connectedMeetings.updateMeetings()",id:"connectedmeetingsupdatemeetings",level:3},{value:"connectedMeetings.deleteMeetings()",id:"connectedmeetingsdeletemeetings",level:3},{value:"connectedMeetings.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds)",id:"connectedmeetingsmoveparticipantssourcemeetingid-destinationmeetingid-participantids",level:3},{value:"connectedMeetings.moveParticipantsWithCustomPreset()",id:"connectedmeetingsmoveparticipantswithcustompreset",level:3}];function l(e){const t={a:"a",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{name:"module_DyteConnectedMeetings"}),"\n",(0,s.jsx)(t.p,{children:"This consists of the methods to faciliate connected meetings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#module_DyteConnectedMeetings",children:"DyteConnectedMeetings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#module_DyteConnectedMeetings+getConnectedMeetings",children:".getConnectedMeetings()"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#module_DyteConnectedMeetings+createMeetings",children:".createMeetings()"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#module_DyteConnectedMeetings+updateMeetings",children:".updateMeetings()"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#module_DyteConnectedMeetings+deleteMeetings",children:".deleteMeetings()"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#module_DyteConnectedMeetings+moveParticipants",children:".moveParticipants(sourceMeetingId, destinationMeetingId, participantIds)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#module_DyteConnectedMeetings+moveParticipantsWithCustomPreset",children:".moveParticipantsWithCustomPreset()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"module_DyteConnectedMeetings+getConnectedMeetings"}),"\n",(0,s.jsx)(t.h3,{id:"connectedmeetingsgetconnectedmeetings",children:"connectedMeetings.getConnectedMeetings()"}),"\n",(0,s.jsx)(t.p,{children:"get connected meeting state"}),"\n",(0,s.jsx)("a",{name:"module_DyteConnectedMeetings+createMeetings"}),"\n",(0,s.jsx)(t.h3,{id:"connectedmeetingscreatemeetings",children:"connectedMeetings.createMeetings()"}),"\n",(0,s.jsx)(t.p,{children:"create connected meetings"}),"\n",(0,s.jsx)("a",{name:"module_DyteConnectedMeetings+updateMeetings"}),"\n",(0,s.jsx)(t.h3,{id:"connectedmeetingsupdatemeetings",children:"connectedMeetings.updateMeetings()"}),"\n",(0,s.jsx)(t.p,{children:"update meeting title"}),"\n",(0,s.jsx)("a",{name:"module_DyteConnectedMeetings+deleteMeetings"}),"\n",(0,s.jsx)(t.h3,{id:"connectedmeetingsdeletemeetings",children:"connectedMeetings.deleteMeetings()"}),"\n",(0,s.jsx)(t.p,{children:"delete connected meetings"}),"\n",(0,s.jsx)("a",{name:"module_DyteConnectedMeetings+moveParticipants"}),"\n",(0,s.jsx)(t.h3,{id:"connectedmeetingsmoveparticipantssourcemeetingid-destinationmeetingid-participantids",children:"connectedMeetings.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds)"}),"\n",(0,s.jsx)(t.p,{children:"Trigger event to move participants"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sourceMeetingId"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(t.td,{children:"id of source meeting"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"destinationMeetingId"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(t.td,{children:"id of destination meeting"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"participantIds"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"Array.<string>"})}),(0,s.jsx)(t.td,{children:"list of id of the participants"})]})]})]}),"\n",(0,s.jsx)("a",{name:"module_DyteConnectedMeetings+moveParticipantsWithCustomPreset"}),"\n",(0,s.jsx)(t.h3,{id:"connectedmeetingsmoveparticipantswithcustompreset",children:"connectedMeetings.moveParticipantsWithCustomPreset()"}),"\n",(0,s.jsx)(t.p,{children:"Trigger event to move participants with custom preset"})]})}function g(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var i=n(96540);const s={},c=i.createContext(s);function d(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);