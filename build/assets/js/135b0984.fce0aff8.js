"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[38927],{46436:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"stage","title":"Stage Management","description":"Below documentation relevant for Interactive Livestream(LHLS) and Webinar(WebRTC) use cases","source":"@site/docs/rn-core/stage.mdx","sourceDirName":".","slug":"/stage","permalink":"/rn-core/stage","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/stage.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":10,"frontMatter":{"title":"Stage Management","sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Recording","permalink":"/rn-core/recording"},"next":{"title":"Livestreaming","permalink":"/rn-core/livestreaming"}}');var i=t(74848),r=t(28453);const a={title:"Stage Management",sidebar_position:10},c=void 0,d={},l=[{value:"Access the stage APIs",id:"access-the-stage-apis",level:2},{value:"Properties",id:"properties",level:2},{value:"Status",id:"status",level:3},{value:"Host controls",id:"host-controls",level:2},{value:"Join stage",id:"join-stage",level:3},{value:"Leave stage",id:"leave-stage",level:3},{value:"Grant access",id:"grant-access",level:3},{value:"Deny access",id:"deny-access",level:3},{value:"Kick users",id:"kick-users",level:3},{value:"Participant controls",id:"participant-controls",level:2},{value:"Request access",id:"request-access",level:3},{value:"Cancel access request",id:"cancel-access-request",level:3},{value:"Events",id:"events",level:2}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Below documentation relevant for Interactive Livestream(LHLS) and Webinar(WebRTC) use cases"})}),"\n",(0,i.jsx)(s.p,{children:"Instead of a traditional publish-subscribe model, where a user can publish their media and others can choose to subscribe, Dyte comes with an optional managed configuration.\r\nIn this managed configuration, a less privileged can be configured with a default behavior to not publish media and the user can then request for permission to be allowed to publish their media, where then a privileged user can choose to grant or deny access."}),"\n",(0,i.jsx)(s.p,{children:"Using Dyte's stage management APIs a user can do actions such as leave and join stage, manage stage requests and permissions, kick participants and so on."}),"\n",(0,i.jsx)(s.h2,{id:"access-the-stage-apis",children:"Access the stage APIs"}),"\n",(0,i.jsxs)(s.p,{children:["The stage module can be accessed under ",(0,i.jsx)(s.a,{href:"/react-web-core/reference/DyteStage",children:(0,i.jsx)(s.code,{children:"meeting.stage"})})," namespace."]}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"status",children:"Status"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"meeting.stage.status"})," returns the current stage status of the local user"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"ON_STAGE"}),": This value indicates that the user is currently on the stage and participating in the live stream."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"OFF_STAGE"}),": This value means that the user is viewing the live stream but is not on the stage."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"REQUESTED_TO_JOIN_STAGE"}),": The user has a pending request to join livestream. If the user has made a request to join the stage, this value will be assigned to their status until the host accepts or rejects their request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"ACCEPTED_TO_JOIN_STAGE"}),": The host has accepted user's request to join livestream. If the host accepts the user's request to join the stage, this value will be assigned to the user's status."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["A user with permission to join stage directly can only assume ",(0,i.jsx)(s.code,{children:"ON_STAGE"})," and ",(0,i.jsx)(s.code,{children:"ACCEPTED_TO_JOIN_STAGE"})," status values."]}),"\n",(0,i.jsx)(s.h2,{id:"host-controls",children:"Host controls"}),"\n",(0,i.jsx)(s.p,{children:"Dyte's stage management APIs allow hosts to receive and manage stage requests as well as leave and join the stage."}),"\n",(0,i.jsx)(s.h3,{id:"join-stage",children:"Join stage"}),"\n",(0,i.jsx)(s.p,{children:"This method connects the user to the media room, enabling them to interact with other peers in the meeting."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"await meeting.stage.join();"})}),"\n",(0,i.jsx)(s.h3,{id:"leave-stage",children:"Leave stage"}),"\n",(0,i.jsx)(s.p,{children:"By employing this method, the user will be disconnected from the media room and subsequently unable to communicate with their peers. Additionally, their audio and video will no longer be visible to others in the room."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"await meeting.stage.leave();"})}),"\n",(0,i.jsx)(s.h3,{id:"grant-access",children:"Grant access"}),"\n",(0,i.jsxs)(s.p,{children:["A privileged user can grant access to stage for a set of users with ",(0,i.jsx)(s.code,{children:"grantAccess"})," method."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Parameters"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Type"})})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"userIds"}),(0,i.jsx)(s.td,{children:"string[]"})]})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"await meeting.stage.grantAccess(userIds);"})}),"\n",(0,i.jsx)(s.h3,{id:"deny-access",children:"Deny access"}),"\n",(0,i.jsxs)(s.p,{children:["A privileged user can deny access to stage for a set of users with ",(0,i.jsx)(s.code,{children:"denyAccess"})," method."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Parameters"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Type"})})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"userIds"}),(0,i.jsx)(s.td,{children:"string[]"})]})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"await meeting.stage.denyAccess(userIds);"})}),"\n",(0,i.jsx)(s.h3,{id:"kick-users",children:"Kick users"}),"\n",(0,i.jsxs)(s.p,{children:["A privileged user can remove a set of users from stage using the ",(0,i.jsx)(s.code,{children:"kick"})," method"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Parameters"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Type"})})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"userIds"}),(0,i.jsx)(s.td,{children:"string[]"})]})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"await meeting.stage.kick(userIds);"})}),"\n",(0,i.jsx)(s.h2,{id:"participant-controls",children:"Participant controls"}),"\n",(0,i.jsx)(s.p,{children:"Dyte's stage management APIs allow participants to receive and manage stage requests as well as leave and join the stage."}),"\n",(0,i.jsx)(s.h3,{id:"request-access",children:"Request access"}),"\n",(0,i.jsx)(s.p,{children:"This method is used to create a new stage request which can be approved by the host. Each user (viewer or host) must call this method in order to join the stage."}),"\n",(0,i.jsxs)(s.p,{children:["When the host calls this method, their status will be updated to ",(0,i.jsx)(s.code,{children:"ACCEPTED_TO_JOIN_STAGE"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"await meeting.stage.requestAccess();"})}),"\n",(0,i.jsx)(s.h3,{id:"cancel-access-request",children:"Cancel access request"}),"\n",(0,i.jsx)(s.p,{children:"You can call this method in order to cancel your stage request."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"await meeting.stage.cancelRequestAccess();"})}),"\n",(0,i.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(s.p,{children:["Here is a list of events that the ",(0,i.jsx)(s.code,{children:"meeting.stage"})," module emits:"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Event"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Description"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stageAccessRequestUpdate"})}),(0,i.jsxs)(s.td,{children:["Emitted to the users with the permission ",(0,i.jsx)(s.code,{children:"acceptPresentRequests"})," set to true. When a new request is made or a request is cancelled, this event is triggered. It contains the updated list of stage requests in its payload."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stageStatusUpdate"})}),(0,i.jsx)(s.td,{children:"Emitted when the user's stage status changes. It contains the updated stage status in the payload."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newStageRequest"})}),(0,i.jsxs)(s.td,{children:["Emitted to the users with the permission ",(0,i.jsx)(s.code,{children:"acceptPresentRequests"})," set to true. This event is triggered when there are new stage requests. It contains the number of stage requests in its payload. For example, to show notifications."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stageRequestApproved"})}),(0,i.jsx)(s.td,{children:"Emitted when a user's request to join stage has been approved."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stageRequestRejected"})}),(0,i.jsx)(s.td,{children:"Emitted when a user's request to join stage has been rejected."})]})]})]}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"React Native Core Stage Management"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>c});var n=t(96540);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);