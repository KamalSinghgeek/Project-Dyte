"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[44567],{82062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"stage-management/introduction","title":"Introduction","description":"Stage management in Dyte meetings.","source":"@site/docs/flutter-core/stage-management/introduction.mdx","sourceDirName":"stage-management","slug":"/stage-management/introduction","permalink":"/flutter-core/stage-management/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/flutter-core/stage-management/introduction.mdx","tags":[{"inline":true,"label":"flutter-core","permalink":"/flutter-core/tags/flutter-core"},{"inline":true,"label":"stage","permalink":"/flutter-core/tags/stage"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Introduction","description":"Stage management in Dyte meetings.","sidebar_position":1,"tags":["flutter-core","stage"]},"sidebar":"tutorialSidebar","previous":{"title":"Voting on a poll","permalink":"/flutter-core/polls/voting-on-a-poll"},"next":{"title":"Stage Host Controls","permalink":"/flutter-core/stage-management/host-controls"}}');var a=n(74848),i=n(28453);const r={title:"Introduction",description:"Stage management in Dyte meetings.",sidebar_position:1,tags:["flutter-core","stage"]},o=void 0,d={},c=[{value:"Accessing the Stage APIs",id:"accessing-the-stage-apis",level:3},{value:"Stage Status",id:"stage-status",level:3},{value:"Viewers",id:"viewers",level:3},{value:"Joining the Stage",id:"joining-the-stage",level:3},{value:"Leaving the Stage",id:"leaving-the-stage",level:3},{value:"List of Stage Events",id:"list-of-stage-events",level:3}];function l(e){const t={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"Below documentation is relevant for Interactive Livestream(LHLS) and Webinar(WebRTC) use cases."})}),"\n",(0,a.jsx)(t.p,{children:"Instead of a traditional publish-subscribe model, where a user can publish their media and others can choose to subscribe, Dyte\r\ncomes with an optional managed configuration. In this managed configuration, a less privileged user can be configured with a\r\ndefault behavior to not publish media. The user can then request permission to publish their media, which a privileged user can\r\nchoose to grant or deny."}),"\n",(0,a.jsx)(t.h3,{id:"accessing-the-stage-apis",children:"Accessing the Stage APIs"}),"\n",(0,a.jsxs)(t.p,{children:["Dyte's stage management APIs allow users to perform actions such as joining and leaving the stage, managing stage requests and\r\npermissions, and kicking participants from the stage. These APIs are accessible through the ",(0,a.jsx)(t.code,{children:"dyteMobileClient.stage"})," object."]}),"\n",(0,a.jsx)(t.h3,{id:"stage-status",children:"Stage Status"}),"\n",(0,a.jsxs)(t.p,{children:["In meetings where stage management is enabled, a user's stage status can change within the values represented by the ",(0,a.jsx)(t.code,{children:"DyteStageStatus"}),"\r\nenum. These status values include:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"onStage"}),": Indicates that the user is currently on the stage and is allowed to publish media."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"offStage"}),": Indicates that the user is a viewer and is not on the stage. They can see and listen to those on stage."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"requestedToJoinStage"}),": Indicates that the user has a pending request to join the stage. This status is assigned to the user\r\nuntil the host accepts or rejects their request."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"acceptedToJoinStage"}),": Indicates that the host has accepted the user's request to join the stage."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"rejectedToJoinStage"}),": Indicates that the host has rejected the user's request to join the stage. The user can request again\r\nto join from this status."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"dyteMobileClient.stage.status"})," property provides the current stage status of the local user."]}),"\n",(0,a.jsx)(t.h3,{id:"viewers",children:"Viewers"}),"\n",(0,a.jsxs)(t.p,{children:["You can retrieve a list of off-stage participants (viewers) in a stage-enabled meeting by accessing the ",(0,a.jsx)(t.code,{children:"meeting.stage.viewers"}),"\r\nproperty. This property provides a list of ",(0,a.jsx)(t.code,{children:"DyteJoinedMeetingParticipant"})," objects whose stage status is not ",(0,a.jsx)(t.code,{children:"onStage"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"joining-the-stage",children:"Joining the Stage"}),"\n",(0,a.jsxs)(t.p,{children:["To interact with peers and publish media, users can join the stage. This action is only possible if the user's preset allows them\r\nto publish media or if their request to join the stage has been accepted by a host (i.e., their stage status is ",(0,a.jsx)(t.code,{children:"acceptedToJoinStage"}),")."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"dyteClient.stage.join();\n"})}),"\n",(0,a.jsx)(t.h3,{id:"leaving-the-stage",children:"Leaving the Stage"}),"\n",(0,a.jsx)(t.p,{children:"When users want to stop interacting with peers, they can leave the stage. This action stops their media from being published,\r\nand their audio and video are no longer received by others in the room."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"dyteClient.stage.leave();\n"})}),"\n",(0,a.jsx)(t.h3,{id:"list-of-stage-events",children:"List of Stage Events"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"DyteStageEventListener"})," interface provides callback methods for various stage events. Implement these callbacks to handle\r\nstage-related events in your application:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class StageEventListener extends DyteStageEventsListener {\r\n  @override\r\n  void onAddedToStage() {\r\n    // Called when the local user successfully joins the stage.\r\n  }\r\n\r\n  @override\r\n  void onParticipantRemovedFromStage(\r\n      DyteJoinedMeetingParticipant participant) {\r\n      // Called when a participant is removed from the stage by the host.\r\n  }\r\n\r\n  @override\r\n  void onPresentRequestAdded(DyteJoinedMeetingParticipant participant) {\r\n    // Called when a participant requests to join the stage. Triggered only if the local user is a host.\r\n  }\r\n\r\n  @override\r\n  void onPresentRequestClosed(DyteJoinedMeetingParticipant participant) {\r\n    // Called when a participant with a pending stage access request leaves the meeting.\r\n    // Triggered only if the local user is a host.\r\n  }\r\n\r\n  @override\r\n  void onPresentRequestReceived() {\r\n    // Called when the local user's stage access request is accepted by the host,\r\n    // or when the local user, who is a viewer, is invited to the stage by the host.\r\n  }\r\n\r\n  @override\r\n  void onPresentRequestRejected(DyteJoinedMeetingParticipant participant) {\r\n    // Called when a participant's stage access request is denied by the host.\r\n    // Triggered only if the local user is a host.\r\n  }\r\n\r\n  @override\r\n  void onPresentRequestWithdrawn(DyteJoinedMeetingParticipant participant) {\r\n    // Called when a participant cancels their stage access request.\r\n    // Triggered only if the local user is a host.\r\n  }\r\n\r\n  @override\r\n  void onRemovedFromStage() {\r\n    // Called when the local user is removed from the stage.\r\n  }\r\n\r\n  @override\r\n  void onStageRequestsUpdated(List<DyteJoinedMeetingParticipant> accessRequests) {\r\n      // Called when the list of stage access requests is updated.\r\n  }\r\n\r\n  @override\r\n  void onStageStatusUpdated(DyteStageStatus stageStatus) {\r\n    // Called when the local user's stage status is updated.\r\n  }\r\n\r\n  @override\r\n  void onParticipantStartedPresenting(DyteJoinedMeetingParticipant participant) {\r\n    // Called when a participant joins the stage.\r\n  }\r\n\r\n  @override\r\n  void onParticipantStoppedPresenting(DyteJoinedMeetingParticipant participant) {\r\n        // Called when a participant leaves the stage.\r\n  }\r\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"You need to attach the listener to meeting client as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"dyteClient.addStageEventsListener(StageEventsListener())\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, we'll explore the Stage Management APIs for hosts, allowing them to manage stage requests, participants in Dyte meetings."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);