"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[71654],{42685:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"local-user/events","title":"Events","description":"Understand and manage local user events in your Android application with Dyte\'s documentation on Local User Events.","source":"@site/docs/android-core/local-user/events.mdx","sourceDirName":"local-user","slug":"/local-user/events","permalink":"/android-core/local-user/events","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/local-user/events.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"local-user","permalink":"/android-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/android-core/tags/self"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Events","description":"Understand and manage local user events in your Android application with Dyte\'s documentation on Local User Events.","sidebar_position":2,"tags":["android-core","local-user","self"]},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/android-core/local-user/introduction"},"next":{"title":"Manage Media Devices","permalink":"/android-core/local-user/manage-media-devices"}}');var s=i(74848),t=i(28453);const a={title:"Events",description:"Understand and manage local user events in your Android application with Dyte's documentation on Local User Events.",sidebar_position:2,tags:["android-core","local-user","self"]},o=void 0,l={},d=[{value:"Local User - Events",id:"local-user---events",level:2},{value:"Video update",id:"video-update",level:3},{value:"Audio update",id:"audio-update",level:3},{value:"Proximity changed",id:"proximity-changed",level:3},{value:"Waitlist status",id:"waitlist-status",level:3},{value:"Process message within a room",id:"process-message-within-a-room",level:3},{value:"Screenshare callbacks for local user",id:"screenshare-callbacks-for-local-user",level:3},{value:"Device permission callbacks once local user is joined in the meeting",id:"device-permission-callbacks-once-local-user-is-joined-in-the-meeting",level:3},{value:"When local user is kicked out from the meeting by a remote user",id:"when-local-user-is-kicked-out-from-the-meeting-by-a-remote-user",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"local-user---events",children:"Local User - Events"}),"\n",(0,s.jsxs)(n.p,{children:["You can subscribe to various events on the local user by implementing ",(0,s.jsx)(n.code,{children:"DyteSelfEventsListener"})," and passing the object to ",(0,s.jsx)(n.code,{children:"meeting.addSelfEventsListener(dyteSelfEventsListener)"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"video-update",children:"Video update"}),"\n",(0,s.jsxs)(n.p,{children:["Triggered when the user starts/stops the video using ",(0,s.jsx)(n.code,{children:"enableVideo()"})," or\r\n",(0,s.jsx)(n.code,{children:"disableVideo()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onVideoUpdate(videoEnabled: Boolean) {\r\n      if (videoEnabled) {\r\n        // video is enabled, and other participants in room can see local user\r\n      } else {\r\n        // video is disabled, and other participants in room can not see local user.\r\n      }\r\n    }\r\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"audio-update",children:"Audio update"}),"\n",(0,s.jsxs)(n.p,{children:["Triggered when the user starts/stops the audio using ",(0,s.jsx)(n.code,{children:"enableAudio()"})," or\r\n",(0,s.jsx)(n.code,{children:"disableAudio()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onAudioUpdate(audioEnabled: Boolean) {\r\n      if (audioEnabled) {\r\n        // audio is enabled, and other participants in room can hear local user\r\n      } else {\r\n        // audio is disabled, and other participants in room can not hear local user.\r\n      }\r\n    }\r\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"proximity-changed",children:"Proximity changed"}),"\n",(0,s.jsx)(n.p,{children:"Triggered whenever there is a change in proximity, indicating if the device is near an earpiece, which subsequently causes the display to turn on or off."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onProximityChanged(isNear: Boolean) {\r\n      // if `isNear` is true, display should be turned off, as user might be speaking through earpiece\r\n      // if false, display should be turned on, as user might be looking at display and listening through speaker/earphones.\r\n    }\r\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"waitlist-status",children:"Waitlist status"}),"\n",(0,s.jsx)(n.p,{children:"For meetings whose waiting room is enabled:"}),"\n",(0,s.jsx)(n.p,{children:"To get status of localUser in waiting room we can use"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val waitListStatus = meeting.localUser.waitListStatus\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can listen to those changes in ",(0,s.jsx)(n.code,{children:"onWaitListStatusUpdate()"})," callbacks"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onWaitListStatusUpdate(waitListStatus: WaitListStatus) {\r\n      // handle waitlist status here\r\n    }\r\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"process-message-within-a-room",children:"Process message within a room"}),"\n",(0,s.jsx)(n.p,{children:"Manage messages among participants within a room."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onRoomMessage(type: String, payload: Map<String, *>) {\r\n      // handle the message here\r\n    }\r\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"screenshare-callbacks-for-local-user",children:"Screenshare callbacks for local user"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onScreenShareStartFailed(reason: String) {\r\n      // screenshare failed to start\r\n    }\r\n\r\n    override fun onScreenShareStarted() {\r\n      // screenshare started presenting in the meeting\r\n    }\r\n\r\n    override fun onScreenShareStopped() {\r\n      // screenshared stopped by the local user\r\n    }\r\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"device-permission-callbacks-once-local-user-is-joined-in-the-meeting",children:"Device permission callbacks once local user is joined in the meeting"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onMeetingRoomJoinedWithoutCameraPermission() {\r\n      // local user joined without camera permission \r\n    }\r\n\r\n    override fun onMeetingRoomJoinedWithoutMicPermission() {\r\n      // local user joined without microphone permission \r\n    }\r\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"when-local-user-is-kicked-out-from-the-meeting-by-a-remote-user",children:"When local user is kicked out from the meeting by a remote user"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onRemovedFromMeeting() {\r\n        // removed from meeting\r\n      }\r\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);