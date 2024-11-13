"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[26057],{36050:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"participants/remote-participants","title":"Participant Maps","description":"Events, methods and data pertaining to meeting participants.","source":"@site/docs/react-web-core/participants/remote-participants.mdx","sourceDirName":"participants","slug":"/participants/","permalink":"/react-web-core/participants/","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/participants/remote-participants.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/react-web-core/tags/web-core"},{"inline":true,"label":"participants","permalink":"/react-web-core/tags/participants"},{"inline":true,"label":"participant","permalink":"/react-web-core/tags/participant"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Participant Maps","description":"Events, methods and data pertaining to meeting participants.","sidebar_position":1,"slug":"/participants/","tags":["web-core","participants","participant"]},"sidebar":"tutorialSidebar","previous":{"title":"Other Methods","permalink":"/react-web-core/local-user/extras"},"next":{"title":"Participant object","permalink":"/react-web-core/participants/participant-object"}}');var a=i(74848),r=i(28453);const s={title:"Participant Maps",description:"Events, methods and data pertaining to meeting participants.",sidebar_position:1,slug:"/participants/",tags:["web-core","participants","participant"]},c="Participant Maps",o={},p=[{value:"Set participant view mode",id:"set-participant-view-mode",level:2},{value:"Set page number in paginated mode",id:"set-page-number-in-paginated-mode",level:3},{value:"Waiting room methods",id:"waiting-room-methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"participant-maps",children:"Participant Maps"})}),"\n",(0,a.jsxs)(t.p,{children:["The data regarding all meeting participants is stored under\r\n",(0,a.jsx)(t.code,{children:"meeting.participants"}),". These ",(0,a.jsx)(t.strong,{children:"does not"})," include the local user. Use the\r\nmethods and events to consume the participants data. For example, to get all the\r\nparticipants who joined the meeting:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// get all joined participants\r\nconst joinedParticipants = useDyteSelector(meeting.participants.joined);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"meeting.participants"})," object has the following ",(0,a.jsx)(t.strong,{children:"maps"})," of participants"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"joined"}),": A map that contains all the participants who are currently in the meeting\r\nexcept the local user"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"waitlisted"}),": A map that contains all the participants waiting to join the\r\nmeeting."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"active"}),": A map that contains all the participants except the local user whose media is subscribed to i.e\r\nparticipants are supposed to be on the screen at the moment except the local user"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"pinned"}),": A map that contains all the pinned participants of the meeting."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Therefore if you were to make a video / audio grid of participants, you'd use the ",(0,a.jsx)(t.code,{children:"active"}),"\r\nmap, but to display the list of all participants in the meeting you'd use the ",(0,a.jsx)(t.code,{children:"joined"})," map."]}),"\n",(0,a.jsxs)(t.p,{children:["Each participant in each of the ",(0,a.jsx)(t.code,{children:"joined"}),", ",(0,a.jsx)(t.code,{children:"waitlisted"}),", ",(0,a.jsx)(t.code,{children:"active"}),", and ",(0,a.jsx)(t.code,{children:"pinned"}),"\r\nmaps is of type ",(0,a.jsx)(t.a,{href:"/react-web-core/reference/DyteParticipant",children:(0,a.jsx)(t.code,{children:"DyteParticipant"})}),". Read more\r\nabout each individual ",(0,a.jsx)(t.code,{children:"participant"})," object\r\n",(0,a.jsx)(t.a,{href:"/react-web-core/participants/participant-object",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Each of these maps are of type\r\n",(0,a.jsx)(t.a,{href:"/react-web-core/reference/DyteParticipantMap",children:(0,a.jsx)(t.code,{children:"DyteParticipantMap"})}),", and therefore emit a\r\n",(0,a.jsx)(t.code,{children:"participantJoined"})," event when a participant is added to the map, and a\r\n",(0,a.jsx)(t.code,{children:"participantLeft"})," event when a participant leaves the map. For instance, to\r\nlisten for when a participant gets pinned in the meeting, you can use the\r\nfollowing snippet:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"meeting.participants.pinned.on('participantJoined', (participant) => {\r\n  console.log(`Participant ${participant.name} got pinned`);\r\n});\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:"and these other properties"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"count"}),": The number of participants who are joined in the meeting."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"pageCount"}),": Number of pages available in paginated mode."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"maxActiveParticipantsCount"}),": The maximum number of participants that can be\r\npresent in the active state."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"lastActiveSpeaker "}),": This stores the ",(0,a.jsx)(t.code,{children:"participantId"})," of the last participant\r\nwho spoke in the meeting."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"set-participant-view-mode",children:"Set participant view mode"}),"\n",(0,a.jsxs)(t.p,{children:["The view mode indicates whether the participants are populated in ",(0,a.jsx)(t.code,{children:"ACTIVE_GRID"}),"\r\nmode or ",(0,a.jsx)(t.code,{children:"PAGINATED"})," mode. In ",(0,a.jsx)(t.code,{children:"ACTIVE_GRID"})," mode, the participants are\r\nautomatically replaced in ",(0,a.jsx)(t.code,{children:"meeting.participants.active"}),", based on who is\r\nspeaking or who has their video turned on."]}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.code,{children:"PAGINATED"})," mode, the participants in ",(0,a.jsx)(t.code,{children:"meeting.participants.active"})," will be\r\nfixed. Only when you call the ",(0,a.jsx)(t.code,{children:"meeting.participants.setPage(pageNumber)"})," method,\r\nit will replace the ",(0,a.jsx)(t.code,{children:"active"})," participants with a different set of participants."]}),"\n",(0,a.jsxs)(t.p,{children:["You can change the participant view between ",(0,a.jsx)(t.code,{children:"ACTIVE_GRID"})," and ",(0,a.jsx)(t.code,{children:"PAGINATED"})," mode\r\nusing the following method. This will trigger ",(0,a.jsx)(t.code,{children:"viewModeChanged"})," event as a side\r\naffect."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// set the view mode to paginated\r\nawait meeting.participants.setViewMode('PAGINATED');\r\n\r\n// set the view mode to active grid\r\nawait meeting.participants.setViewMode('ACTIVE_GRID');\n"})}),"\n",(0,a.jsx)(t.h3,{id:"set-page-number-in-paginated-mode",children:"Set page number in paginated mode"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"setPage()"})," method allows you to switch between pages of participants\r\npresent in the meeting."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// switch to second page\r\nawait meeting.participants.setPage(2);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"waiting-room-methods",children:"Waiting room methods"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"acceptWaitingRoomRequest()"})," method accepts requests from waitlisted\r\nparticipants if user has appropriate permissions."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"await meeting.participants.acceptWaitingRoomRequest(participantId);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"rejectWaitingRoomRequest()"})," method requests from waitlisted participants if\r\nuser has appropriate permissions."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"await meeting.participants.rejectWaitingRoomRequest(participantId);\n"})}),"\n",(0,a.jsx)(i,{children:(0,a.jsx)("title",{children:"React Web Core Participants"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(96540);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);