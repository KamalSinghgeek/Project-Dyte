"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[28548],{30995:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"participants/participant-object","title":"Participant Object","description":"The object corresponding to a particular participant.","source":"@site/docs/ios-core/participants/participant-object.mdx","sourceDirName":"participants","slug":"/participants/participant-object","permalink":"/ios-core/participants/participant-object","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/participants/participant-object.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"participants","permalink":"/ios-core/tags/participants"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Participant Object","description":"The object corresponding to a particular participant.","sidebar_position":2,"slug":"/participants/participant-object","tags":["ios-core","participants"]},"sidebar":"tutorialSidebar","previous":{"title":"Participant Types","permalink":"/ios-core/participants/"},"next":{"title":"Participant Events","permalink":"/ios-core/participants/events"}}');var a=t(74848),r=t(28453);const s={title:"Participant Object",description:"The object corresponding to a particular participant.",sidebar_position:2,slug:"/participants/participant-object",tags:["ios-core","participants"]},c="The participant object",o={},p=[{value:"To get video view of a given participant",id:"to-get-video-view-of-a-given-participant",level:2},{value:"Host Controls",id:"host-controls",level:2},{value:"Waiting Room",id:"waiting-room",level:2},{value:"pin/unpin",id:"pinunpin",level:2},{value:"Move between pages in paginated mode",id:"move-between-pages-in-paginated-mode",level:2},{value:"Broadcast message to all participants",id:"broadcast-message-to-all-participants",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"the-participant-object",children:"The participant object"})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"participant"})," object consists of all the information related to a particular participant. For instance, it contains a participants video/audio/screenshare stream, and the participant's name. It also contains state variables that indicate whether a participant's camera is on or off, and whether they are muted or unmuted."]}),"\n",(0,a.jsx)(i.p,{children:"The participant object has the following properties."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"id"}),": The ",(0,a.jsx)(i.code,{children:"participantId"})," of the participant (aka ",(0,a.jsx)(i.code,{children:"peerId"}),")."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"userId"}),": The ",(0,a.jsx)(i.code,{children:"userId"})," of the participant."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"name"}),": The participant's name."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"picture"}),": The participant's picture (if any)."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"clientSpecificId"}),": An arbitrary ID that can be set to identify the\r\nparticipant."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"videoTrack"}),": The video track of the participant."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"screenShareTrack"}),": The video and audio (if any) track of the participant's\r\nscreen share stream."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"videoEnabled"}),": Set to true if the participant's camera is on."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"audioEnabled"}),": Set to true if the participant is unmuted."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"isPinned"}),": True if current user is pinned in the meeting room."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"presetName"}),": Name of the preset associated with the participant."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"stageStatus"}),": Status of stage for the participant"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"to-get-video-view-of-a-given-participant",children:"To get video view of a given participant"}),"\n",(0,a.jsxs)(i.p,{children:["You can call ",(0,a.jsx)(i.code,{children:"participant.getVideoView()"})," which will return a View which further\r\ncan used to add in any view."]}),"\n",(0,a.jsxs)(i.p,{children:["Similarly one can use ",(0,a.jsx)(i.code,{children:"participant.getScreenShareView()"})," which will return a\r\nView which further can used to add in any view."]}),"\n",(0,a.jsx)(i.h2,{id:"host-controls",children:"Host Controls"}),"\n",(0,a.jsxs)(i.p,{children:["If you are the host of the room, you can use the ",(0,a.jsx)(i.strong,{children:"host controls"}),". The host controls allow you to manage the participants in the room."]}),"\n",(0,a.jsx)(i.p,{children:"The host controls include the following options:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Mute/Unmute"}),": Mute or unmute a participant."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Kick"}),": Kick a participant from the room."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Pin"}),": Pin a participant's video."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Turn off video"}),": Turn off a participant's video."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"You can also use these methods from our participant object to\r\nperform these actions programmatically."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-swift",children:"if let participant = meeting.participants.joined.first(where: { $0.id == participantId }) {\r\n    // To disable a participant's video stream\r\n    participant.disableVideo()\r\n\r\n    // To disable a participant's audio stream\r\n    participant.disableAudio()\r\n\r\n    // To kick a participant from the meeting\r\n    participant.kick()\r\n}\n"})}),"\n",(0,a.jsx)(i.h2,{id:"waiting-room",children:"Waiting Room"}),"\n",(0,a.jsx)(i.p,{children:"Host can use these waiting room methods from our participant object to\r\nperform these actions programmatically."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-swift",children:"// Accept the request and let the participant in the meeting\r\nparticipant.acceptWaitListedRequest()\r\n\r\n// Reject the request, do not permit the participant to join the meeting\r\nparticipant.rejectWaitListedRequest()\n"})}),"\n",(0,a.jsx)(i.h2,{id:"pinunpin",children:"pin/unpin"}),"\n",(0,a.jsxs)(i.p,{children:["You can also ",(0,a.jsx)(i.code,{children:"pin"})," or ",(0,a.jsx)(i.code,{children:"unpin"}),' a participant in the meeting. All "pinned"\r\nparticipants are added to the ',(0,a.jsx)(i.code,{children:"meeting.participants.pinned"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-swift",children:"if let participant = meeting.participants.joined.first(where: { $0.id == participantId }) {\r\n    // To pin a participant\r\n    participant.pin()\r\n\r\n    // To unpin a participant\r\n    participant.unpin()\r\n}\n"})}),"\n",(0,a.jsx)(i.h2,{id:"move-between-pages-in-paginated-mode",children:"Move between pages in paginated mode"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"setPage(pageNumber: Int)"})," method allows you to switch between pages of\r\nparticipants present in the meeting."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-swift",children:"// switch to 1st page\r\nmeeting.participants.setPage(1)\n"})}),"\n",(0,a.jsx)(i.h2,{id:"broadcast-message-to-all-participants",children:"Broadcast message to all participants"}),"\n",(0,a.jsxs)(i.p,{children:["Send a broadcast message to all ",(0,a.jsx)(i.code,{children:"joined"})," participants"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.em,{children:"Parameters"}),":"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"type"}),': A client-specific type to differentiate between custom messages like "emoji" or "greetings"']}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"payload"}),": A dictionary containing the message payload, where keys are strings and values are of any type."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-swift",children:"// broadcast message\r\nmeeting.participants.broadcastMessage(type, payload)\n"})}),"\n",(0,a.jsx)(i.h1,{id:"receiving-broadcast-messages",children:"Receiving Broadcast messages"}),"\n",(0,a.jsxs)(i.p,{children:["To be able to receive broadcast messages you need to implement a method\r\n",(0,a.jsx)(i.code,{children:"onRoomMessage"})," method from callback ",(0,a.jsx)(i.code,{children:"DyteSelfEventsListener"}),". You can\r\nsubscribe to this events by calling\r\n",(0,a.jsx)(i.code,{children:"meeting.addChatEventsListener(dyteSelfEventsListener)"})]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"/ios-core/local-user/events#listen-to-broadcast-message-within-the-room",children:"check this dyteSelfEventsListener broadcastMessage documentation"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("title",{children:"iOS Core The participant object"}),(0,a.jsx)("meta",{name:"description",content:"Explore the iOS Core Participant Object and its functionalities for effective integration in your application."})]})]})}function l(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>c});var n=t(96540);const a={},r=n.createContext(a);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);