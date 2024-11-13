"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[35346],{5901:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"reference/DyteStage","title":"DyteStage","description":"The DyteStage module represents a class to mange the Stage of the meeting","source":"@site/docs/web-core/reference/DyteStage.md","sourceDirName":"reference","slug":"/reference/DyteStage","permalink":"/web-core/reference/DyteStage","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/web-core/reference/DyteStage.md","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"web_core_version":"1.32.1"},"sidebar":"tutorialSidebar","previous":{"title":"DytePlugins","permalink":"/web-core/reference/DytePlugins"},"next":{"title":"DyteLivestream","permalink":"/web-core/reference/DyteLivestream"}}');var a=t(74848),c=t(28453);const r={sidebar_position:11,web_core_version:"1.32.1"},i=void 0,l={},o=[{value:"stage.getAccessRequests()",id:"stagegetaccessrequests",level:3},{value:"stage.requestAccess()",id:"stagerequestaccess",level:3},{value:"stage.cancelRequestAccess()",id:"stagecancelrequestaccess",level:3},{value:"stage.grantAccess()",id:"stagegrantaccess",level:3},{value:"stage.denyAccess()",id:"stagedenyaccess",level:3},{value:"stage.join()",id:"stagejoin",level:3},{value:"stage.leave()",id:"stageleave",level:3},{value:"stage.kick()",id:"stagekick",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{name:"module_DyteStage"}),"\n",(0,a.jsx)(s.p,{children:"The DyteStage module represents a class to mange the Stage of the meeting\r\nStage refers to a virtual area, where participants stream are visible to other participants.\r\nWhen a participant is off stage, they are not producing media\r\nbut only consuming media from participants who are on Stage"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"#module_DyteStage",children:"DyteStage"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#module_DyteStage+getAccessRequests",children:".getAccessRequests()"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#module_DyteStage+requestAccess",children:".requestAccess()"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#module_DyteStage+cancelRequestAccess",children:".cancelRequestAccess()"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#module_DyteStage+grantAccess",children:".grantAccess()"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#module_DyteStage+denyAccess",children:".denyAccess()"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#module_DyteStage+join",children:".join()"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#module_DyteStage+leave",children:".leave()"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#module_DyteStage+kick",children:".kick()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("a",{name:"module_DyteStage+getAccessRequests"}),"\n",(0,a.jsx)(s.h3,{id:"stagegetaccessrequests",children:"stage.getAccessRequests()"}),"\n",(0,a.jsx)(s.p,{children:"Method to fetch all Stage access requests from viewers"}),"\n",(0,a.jsx)("a",{name:"module_DyteStage+requestAccess"}),"\n",(0,a.jsx)(s.h3,{id:"stagerequestaccess",children:"stage.requestAccess()"}),"\n",(0,a.jsx)(s.p,{children:"Method to send a request to privileged users to join the stage"}),"\n",(0,a.jsx)("a",{name:"module_DyteStage+cancelRequestAccess"}),"\n",(0,a.jsx)(s.h3,{id:"stagecancelrequestaccess",children:"stage.cancelRequestAccess()"}),"\n",(0,a.jsx)(s.p,{children:"Method to cancel a previous Stage join request"}),"\n",(0,a.jsx)("a",{name:"module_DyteStage+grantAccess"}),"\n",(0,a.jsx)(s.h3,{id:"stagegrantaccess",children:"stage.grantAccess()"}),"\n",(0,a.jsx)(s.p,{children:"Method to grant access to Stage.\r\nThis can be in response to a Stage Join request but it can be called on other users as well"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"permissions.acceptStageRequests"})," privilege required"]}),"\n",(0,a.jsx)("a",{name:"module_DyteStage+denyAccess"}),"\n",(0,a.jsx)(s.h3,{id:"stagedenyaccess",children:"stage.denyAccess()"}),"\n",(0,a.jsx)(s.p,{children:"Method to deny access to Stage.\r\nThis should be called in response to a Stage Join request"}),"\n",(0,a.jsx)("a",{name:"module_DyteStage+join"}),"\n",(0,a.jsx)(s.h3,{id:"stagejoin",children:"stage.join()"}),"\n",(0,a.jsx)(s.p,{children:"Method to join the stage\r\nUsers either need to have the permission in the preset or must be accepted by a priveleged\r\nuser to call this method"}),"\n",(0,a.jsx)("a",{name:"module_DyteStage+leave"}),"\n",(0,a.jsx)(s.h3,{id:"stageleave",children:"stage.leave()"}),"\n",(0,a.jsx)(s.p,{children:"Method to leave the stage\r\nUsers must either be on the stage already or be accepted to join the stage\r\nto call this method"}),"\n",(0,a.jsx)("a",{name:"module_DyteStage+kick"}),"\n",(0,a.jsx)(s.h3,{id:"stagekick",children:"stage.kick()"}),"\n",(0,a.jsx)(s.p,{children:"Method to kick a user off the stage"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"permissions.acceptStageRequests"})," privilege required"]})]})}function g(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var n=t(96540);const a={},c=n.createContext(a);function r(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);