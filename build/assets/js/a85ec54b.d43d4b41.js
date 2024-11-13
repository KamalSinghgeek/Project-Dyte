"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[63928],{14640:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"participants/participant-object","title":"Participant object","description":"The object corresponding to a particular participant.","source":"@site/docs/react-web-core/participants/participant-object.mdx","sourceDirName":"participants","slug":"/participants/participant-object","permalink":"/react-web-core/participants/participant-object","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/participants/participant-object.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/react-web-core/tags/web-core"},{"inline":true,"label":"participants","permalink":"/react-web-core/tags/participants"},{"inline":true,"label":"participant","permalink":"/react-web-core/tags/participant"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Participant object","description":"The object corresponding to a particular participant.","sidebar_position":2,"tags":["web-core","participants","participant"]},"sidebar":"tutorialSidebar","previous":{"title":"Participant Maps","permalink":"/react-web-core/participants/"},"next":{"title":"Events","permalink":"/react-web-core/participants/events"}}');var a=i(74848),r=i(28453);const c={title:"Participant object",description:"The object corresponding to a particular participant.",sidebar_position:2,tags:["web-core","participants","participant"]},s="Participant object",o={},p=[{value:"Host controls methods",id:"host-controls-methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"participant-object",children:"Participant object"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"participant"})," object consists of all the information related to a particular\r\nparticipant. For instance, it contains a participants video/audio/screenshare\r\nstream, and the participant's name. It also contains state variables that\r\nindicate whether a participant's camera is on or off, and whether they are muted\r\nor unmuted. Head over to ",(0,a.jsx)(t.a,{href:"/react-web-core/reference/DyteParticipant",children:"DyteParticipant"})," for\r\na detailed reference."]}),"\n",(0,a.jsx)(t.p,{children:"The participant object has the following properties."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Media"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"videoEnabled"}),": Set to true if the participant's camera is on."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"audioEnabled"}),": Set to true if the participant is unmuted."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"screenShareEnabled"}),": Set to true if the participant is sharing their screen."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"videoTrack"}),": The video track of the participant."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"audioTrack"}),": The audio track of the participant."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"screenShareTracks"}),": The video and audio (if any) track of the participant's\r\nscreen share stream."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Metadata"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"id"}),": The ",(0,a.jsx)(t.code,{children:"participantId"})," of the participant (aka ",(0,a.jsx)(t.code,{children:"peerId"}),")."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"userId"}),": The ",(0,a.jsx)(t.code,{children:"userId"})," of the participant."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"name"}),": The participant's name."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"picture"}),": The participant's picture (if any)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"customParticipantId"}),": An arbitrary ID that can be set to identify the\r\nparticipant."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"isPinned"}),": Set to true if the participant is pinned."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"presetName"}),": Name of the preset associated with the participant."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The participant object is an event emitter, so you can set listeners on this\r\nobject for events such as video and audio updates. For instance, to fire a\r\ncallback when a participant toggles their mic, you can subscribe to the\r\nfollowing events."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"meeting.participants.joined\r\n  .get(participantId)\r\n  .on('audioUpdate', ({ audioEnabled, audioTrack }) => {\r\n    // This will only be fired on mic toggles for the participant with ID `participantId`\r\n    console.log(\r\n      'The participant with id',\r\n      participantId,\r\n      'has toggled their mic to',\r\n      audioEnabled\r\n    );\r\n  });\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The events emitted by all participant objects are also re-emitted by all the\r\nmaps in ",(0,a.jsx)(t.code,{children:"meeting.participants"}),". Therefore, you can add a listener to\r\n",(0,a.jsx)(t.code,{children:"meeting.participants.joined"})," for the ",(0,a.jsx)(t.code,{children:"audioUpdate"})," event. For instance, the\r\nsame code above can be re-implemented as follows."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"meeting.participants.joined.on(\r\n  'audioUpdate',\r\n  (participant, { audioEnabled, audioTrack }) => {\r\n    // This will be fired on mic toggles for all participants in the meeting\r\n    console.log(\r\n      'The participant with id',\r\n      participant.id,\r\n      'has toggled their mic to',\r\n      audioEnabled\r\n    );\r\n  }\r\n);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Read more about the participant events in the\r\n",(0,a.jsx)(t.a,{href:"/web-core/participants/events",children:"events"})," section in the API reference."]}),"\n",(0,a.jsx)(t.h2,{id:"host-controls-methods",children:"Host controls methods"}),"\n",(0,a.jsx)(t.p,{children:"If you (the local user) have the relevant permissions in the meeting, you can\r\ndisable a participant's video/audio streams, or even remove them from the\r\nmeeting."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const participant = meeting.participants.joined.get(participantId);\r\n\r\n// To disable a participant's video stream\r\nparticipant.disableVideo();\r\n\r\n// To disable a participant's audio stream\r\nparticipant.disableAudio();\r\n\r\n// To kick a participant from the meeting\r\nparticipant.kick();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can also ",(0,a.jsx)(t.code,{children:"pin"})," or ",(0,a.jsx)(t.code,{children:"unpin"}),' a participant in the meeting. All "pinned"\r\nparticipants are added to the ',(0,a.jsx)(t.code,{children:"meeting.participants.pinned"})," map."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const participant = meeting.participants.joined.get(participantId);\r\n\r\n// Pin a participant to the meeting.\r\nawait participant.pin();\r\n\r\n// Unpin a participant in the meeting.\r\nawait participant.unpin();\n"})}),"\n",(0,a.jsx)(i,{children:(0,a.jsx)("title",{children:"React Web Core The participant object"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>s});var n=i(96540);const a={},r=n.createContext(a);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);