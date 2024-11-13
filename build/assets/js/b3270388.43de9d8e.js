"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[13516],{23633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"participants/events","title":"Participant Events","description":"Dive into the details of handling participant events in your Android application using Dyte\'s comprehensive documentation.","source":"@site/docs/android-core/participants/events.mdx","sourceDirName":"participants","slug":"/participants/events","permalink":"/android-core/participants/events","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/participants/events.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"participants","permalink":"/android-core/tags/participants"},{"inline":true,"label":"self","permalink":"/android-core/tags/self"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Participant Events","description":"Dive into the details of handling participant events in your Android application using Dyte\'s comprehensive documentation.","sidebar_position":3,"tags":["android-core","participants","self"]},"sidebar":"tutorialSidebar","previous":{"title":"Participant Object","permalink":"/android-core/participants/participant-object"},"next":{"title":"Waitlisted Participants","permalink":"/android-core/participants/waitlisted-participants"}}');var a=t(74848),r=t(28453);const p={title:"Participant Events",description:"Dive into the details of handling participant events in your Android application using Dyte's comprehensive documentation.",sidebar_position:3,tags:["android-core","participants","self"]},s=void 0,c={},d=[{value:"All Participants Events",id:"all-participants-events",level:2},{value:"Participant joined",id:"participant-joined",level:3},{value:"Participant left",id:"participant-left",level:3},{value:"Participants update",id:"participants-update",level:3},{value:"Video update",id:"video-update",level:3},{value:"Audio update",id:"audio-update",level:3},{value:"Screenshare updates",id:"screenshare-updates",level:3},{value:"Active speaker",id:"active-speaker",level:3},{value:"Pinned participant",id:"pinned-participant",level:3},{value:"Active participants list change",id:"active-participants-list-change",level:3},{value:"Single Participant Events",id:"single-participant-events",level:2},{value:"Participant update",id:"participant-update",level:3},{value:"Video update",id:"video-update-1",level:3},{value:"Audio update",id:"audio-update-1",level:3},{value:"Pinned &amp; Unpinned participant",id:"pinned--unpinned-participant",level:3},{value:"Screen share started &amp; ended",id:"screen-share-started--ended",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"all-participants-events",children:"All Participants Events"}),"\n",(0,a.jsxs)(n.p,{children:["You can subscribe to events for all participants by implementing\r\n",(0,a.jsx)(n.code,{children:"DyteParticipantEventsListener"})," callback and then passing that object to\r\n",(0,a.jsx)(n.code,{children:"meeting.addParticipantEventsListener(dyteParticipantEventsListener)"})," method."]}),"\n",(0,a.jsx)(n.p,{children:"Here are the supported methods:"}),"\n",(0,a.jsx)(n.h3,{id:"participant-joined",children:"Participant joined"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when any participant joins the meeting."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onParticipantJoin(participant: DyteMeetingParticipant) {\r\n            // your code here to handle new participant\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"participant-left",children:"Participant left"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when any participant leaves the meeting."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onParticipantLeave(participant: DyteMeetingParticipant) {\r\n            // your code here to handle participant left from meeting\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"participants-update",children:"Participants update"}),"\n",(0,a.jsxs)(n.p,{children:["Triggers an event whenever there is any change in the ",(0,a.jsx)(n.code,{children:"meeting.participants"})," object. This includes any updates to participant lists or changes in individual participant within those lists."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onUpdate(participants: DyteParticipants) {\r\n            // your code here to handle participant update\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"video-update",children:"Video update"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when any participant starts / stops video."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onVideoUpdate(videoEnabled: Boolean, participant: DyteMeetingParticipant) {\r\n            // your code here to handle participant video toggle update\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"audio-update",children:"Audio update"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when any participant starts / stops audio."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onAudioUpdate(audioEnabled: Boolean, participant: DyteMeetingParticipant) {\r\n            // your code here to handle participant audio toggle update\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"screenshare-updates",children:"Screenshare updates"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when there is any change in screenshares in a meeting."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onScreenSharesUpdated() {\r\n            // your code here to handle screenshares from meeting\r\n            // you can use `meeting.participants.screenshares` to get latest screenshare participants\r\n        }\r\n\r\n        override fun onScreenShareStarted(participant: DyteJoinedMeetingParticipant) {\r\n            // participant stared presenting screen in the meeting\r\n        }\r\n\r\n        override fun onScreenShareEnded(participant: DyteJoinedMeetingParticipant) {\r\n            // participant stopped presenting screen in the meeting\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"active-speaker",children:"Active speaker"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when there is any change in active speaker in the meeting."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onActiveSpeakerChanged(participant: DyteMeetingParticipant) {\r\n            // your code here to handle active speaker\r\n        }\r\n\r\n        override fun onNoActiveSpeaker() {\r\n            // your code here to handle no active speaker\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"pinned-participant",children:"Pinned participant"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when there is any change in pinned participant in the meeting."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onParticipantPinned(participant: DyteMeetingParticipant) {\r\n            // your code here to show pinned participant\r\n        }\r\n\r\n        override fun onParticipantUnpinned(participant: DyteMeetingParticipant) {\r\n            // your code here to remove pinned participant\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"active-participants-list-change",children:"Active participants list change"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when there is any change in active participants list in the meeting."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantEventsListener = object : DyteParticipantEventsListener {\r\n        override fun onActiveParticipantsChanged(active: List<DyteMeetingParticipant>) {\r\n            // your code here to refresh active participants\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"single-participant-events",children:"Single Participant Events"}),"\n",(0,a.jsxs)(n.p,{children:["You can also subscribe to events for a single participant by implementing ",(0,a.jsx)(n.code,{children:"DyteParticipantUpdateListener"})," callback and then passing that object to ",(0,a.jsx)(n.code,{children:"participant.addParticipantUpdateListener(dyteParticipantUpdateListener)"})," method."]}),"\n",(0,a.jsx)(n.p,{children:"Here are the supported methods:"}),"\n",(0,a.jsx)(n.h3,{id:"participant-update",children:"Participant update"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event whenever there is any change in participant."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantUpdateListener = object : DyteParticipantUpdateListener {\r\n        override fun onUpdate() {\r\n            // your code here to handle participant update\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"video-update-1",children:"Video update"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when the participant starts / stops video."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantUpdateListener = object : DyteParticipantUpdateListener {\r\n        override fun onVideoUpdate(isEnabled: Boolean) {\r\n            // your code here to handle participant video toggle update\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"audio-update-1",children:"Audio update"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when the participant starts / stops audio."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantUpdateListener = object : DyteParticipantUpdateListener {\r\n        override fun onAudioUpdate(isEnabled: Boolean) {\r\n            // your code here to handle participant audio toggle update\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"pinned--unpinned-participant",children:"Pinned & Unpinned participant"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when the participant is pinned / unpinned."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantUpdateListener = object : DyteParticipantUpdateListener {\r\n        override fun onPinned() {\r\n            // your code here to show pinned participant\r\n        }\r\n\r\n        override fun onUnpinned() {\r\n            // your code here to remove pinned participant\r\n        }\r\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"screen-share-started--ended",children:"Screen share started & ended"}),"\n",(0,a.jsx)(n.p,{children:"Triggers an event when the participant starts / stops screen sharing."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"    private val participantUpdateListener = object : DyteParticipantUpdateListener {\r\n        override fun onScreenShareStarted() {\r\n            // your code here to handle screen share started\r\n        }\r\n\r\n        override fun onScreenShareEnded() {\r\n            // your code here to handle screen share ended\r\n        }\r\n    }\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>p,x:()=>s});var i=t(96540);const a={},r=i.createContext(a);function p(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:p(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);