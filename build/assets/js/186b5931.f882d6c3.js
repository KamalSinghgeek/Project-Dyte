"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[62774],{76283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"room-metadata","title":"Room Metadata","description":"All metadata pertaining to a meeting.","source":"@site/docs/android-core/room-metadata.mdx","sourceDirName":".","slug":"/room-metadata","permalink":"/android-core/room-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/room-metadata.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"room-metadata","permalink":"/android-core/tags/room-metadata"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":11,"frontMatter":{"title":"Room Metadata","description":"All metadata pertaining to a meeting.","sidebar_position":11,"tags":["android-core","room-metadata"]},"sidebar":"tutorialSidebar","previous":{"title":"Voting on a poll","permalink":"/android-core/polls/voting-on-a-poll"},"next":{"title":"System Error Codes","permalink":"/android-core/error-codes"}}');var i=n(74848),a=n(28453);const r={title:"Room Metadata",description:"All metadata pertaining to a meeting.",sidebar_position:11,tags:["android-core","room-metadata"]},d="Room Metadata",s={},l=[];function c(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"room-metadata",children:"Room Metadata"})}),"\n",(0,i.jsxs)(t.p,{children:["All metadata pertaining to a meeting is stored in ",(0,i.jsx)(t.code,{children:"meeting.meta"}),". This includes:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"meetingId"}),": The unique identifier of the meeting."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"meetingType"}),": Indicates the meeting is a group-call or a webinar."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"meetingTitle"}),": The title of the meeting."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"meetingStartedTimestamp"}),": The timestamp when the meeting started."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"meetingState"}),": The state of the meeting of type ",(0,i.jsx)(t.code,{children:"DyteMeetingState"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"authToken"}),": User's authentication token for the meeting."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"meetingConfig"}),": The configuration of the meeting of type ",(0,i.jsx)(t.code,{children:"MeetingConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"enum class DyteMeetingState {\r\n  NotInitialised,\r\n  InitStarted,\r\n  InitCompleted,\r\n  InitFailed\r\n}\r\n\r\ndata class MeetingConfig(\r\n  val enableAudio: Boolean,\r\n  val enableVideo: Boolean\r\n)\n"})}),"\n",(0,i.jsx)(t.p,{children:"For example, if you want to get the title of the meeting the current participant is\r\nconnected to, you can do so by doing:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val meetingTitle = meeting.meta.meetingTitle\n"})}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"Android Core Room Metadata"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var o=n(96540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);