"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[45566],{41513:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"reference/DyteParticipants","title":"DyteParticipants","description":"This module represents all the participants in the meeting (except the local user).","source":"@site/docs/rn-core/reference/DyteParticipants.md","sourceDirName":"reference","slug":"/reference/DyteParticipants","permalink":"/rn-core/reference/DyteParticipants","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/reference/DyteParticipants.md","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"web_core_version":"1.32.1"},"sidebar":"tutorialSidebar","previous":{"title":"DyteSelf","permalink":"/rn-core/reference/DyteSelf"},"next":{"title":"DyteParticipantMap","permalink":"/rn-core/reference/DyteParticipantMap"}}');var n=t(74848),s=t(28453);const r={sidebar_position:3,web_core_version:"1.32.1"},l=void 0,c={},d=[{value:"participants.waitlisted",id:"participantswaitlisted",level:3},{value:"participants.joined",id:"participantsjoined",level:3},{value:"participants.active",id:"participantsactive",level:3},{value:"participants.pinned",id:"participantspinned",level:3},{value:"participants.all",id:"participantsall",level:3},{value:"participants.pip",id:"participantspip",level:3},{value:"participants.roomJoined",id:"participantsroomjoined",level:3},{value:"participants.viewMode",id:"participantsviewmode",level:3},{value:"participants.currentPage",id:"participantscurrentpage",level:3},{value:"participants.lastActiveSpeaker",id:"participantslastactivespeaker",level:3},{value:"participants.selectedPeers",id:"participantsselectedpeers",level:3},{value:"participants.count",id:"participantscount",level:3},{value:"participants.maxActiveParticipantsCount",id:"participantsmaxactiveparticipantscount",level:3},{value:"participants.pageCount",id:"participantspagecount",level:3},{value:"participants.setMaxActiveParticipantsCount(limit:)",id:"participantssetmaxactiveparticipantscountlimit",level:3},{value:"participants.acceptWaitingRoomRequest(id)",id:"participantsacceptwaitingroomrequestid",level:3},{value:"participants.acceptAllWaitingRoomRequest()",id:"participantsacceptallwaitingroomrequest",level:3},{value:"participants.rejectWaitingRoomRequest(id)",id:"participantsrejectwaitingroomrequestid",level:3},{value:"participants.setViewMode(viewMode)",id:"participantssetviewmodeviewmode",level:3},{value:"participants.setPage(page)",id:"participantssetpagepage",level:3},{value:"participants.disableAllAudio(allowUnmute)",id:"participantsdisableallaudioallowunmute",level:3},{value:"participants.disableAllVideo()",id:"participantsdisableallvideo",level:3},{value:"participants.<del>disableAudio(participantId)</del>",id:"participantsdisableaudioparticipantid",level:3},{value:"participants.<del>disableVideo(participantId)</del>",id:"participantsdisablevideoparticipantid",level:3},{value:"participants.<del>kick(participantId)</del>",id:"participantskickparticipantid",level:3},{value:"participants.kickAll()",id:"participantskickall",level:3},{value:"participants.broadcastMessage(target)",id:"participantsbroadcastmessagetarget",level:3},{value:"participants.<del>acceptAllRequestToJoinStageRequests()</del>",id:"participantsacceptallrequesttojoinstagerequests",level:3},{value:"participants.getAllJoinedPeers()",id:"participantsgetalljoinedpeers",level:3},{value:"participants.getParticipantsInMeetingPreJoin()",id:"participantsgetparticipantsinmeetingprejoin",level:3}];function p(e){const i={a:"a",code:"code",del:"del",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{name:"module_DyteParticipants"}),"\n",(0,n.jsx)(i.p,{children:"This module represents all the participants in the meeting (except the local user).\r\nIt consists of 4 maps:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"joined"}),": A map of all participants that have joined the meeting."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"waitlisted"}),": A map of all participants that have been added to the waitlist."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"active"}),": A map of active participants who should be displayed in the meeting grid."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"pinned"}),": A map of pinned participants."]}),"\n"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#module_DyteParticipants",children:"DyteParticipants"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+waitlisted",children:".waitlisted"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+joined",children:".joined"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+active",children:".active"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+pinned",children:".pinned"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+all",children:".all"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+pip",children:".pip"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+roomJoined",children:".roomJoined"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+viewMode",children:".viewMode"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+currentPage",children:".currentPage"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+lastActiveSpeaker",children:".lastActiveSpeaker"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+selectedPeers",children:".selectedPeers"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+count",children:".count"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+maxActiveParticipantsCount",children:".maxActiveParticipantsCount"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+pageCount",children:".pageCount"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+setMaxActiveParticipantsCount",children:".setMaxActiveParticipantsCount(limit:)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+acceptWaitingRoomRequest",children:".acceptWaitingRoomRequest(id)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+acceptAllWaitingRoomRequest",children:".acceptAllWaitingRoomRequest()"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+rejectWaitingRoomRequest",children:".rejectWaitingRoomRequest(id)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+setViewMode",children:".setViewMode(viewMode)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+setPage",children:".setPage(page)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+disableAllAudio",children:".disableAllAudio(allowUnmute)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+disableAllVideo",children:".disableAllVideo()"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+kickAll",children:".kickAll()"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+broadcastMessage",children:".broadcastMessage(target)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+getAllJoinedPeers",children:".getAllJoinedPeers()"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#module_DyteParticipants--module.exports+getParticipantsInMeetingPreJoin",children:".getParticipantsInMeetingPreJoin()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+waitlisted"}),"\n",(0,n.jsx)(i.h3,{id:"participantswaitlisted",children:"participants.waitlisted"}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of participants waiting to join the meeting."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+joined"}),"\n",(0,n.jsx)(i.h3,{id:"participantsjoined",children:"participants.joined"}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of all participants in the meeting."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+active"}),"\n",(0,n.jsx)(i.h3,{id:"participantsactive",children:"participants.active"}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of participants whose streams are currently consumed."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+pinned"}),"\n",(0,n.jsx)(i.h3,{id:"participantspinned",children:"participants.pinned"}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of participants who have been pinned."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+all"}),"\n",(0,n.jsx)(i.h3,{id:"participantsall",children:"participants.all"}),"\n",(0,n.jsx)(i.p,{children:"Returns all added participants irrespective of whether they are currently\r\nin the meeting or not"}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+pip"}),"\n",(0,n.jsx)(i.h3,{id:"participantspip",children:"participants.pip"}),"\n",(0,n.jsx)(i.p,{children:"Return the controls for Picture-in-Picture"}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+roomJoined"}),"\n",(0,n.jsx)(i.h3,{id:"participantsroomjoined",children:"participants.roomJoined"}),"\n",(0,n.jsx)(i.p,{children:"Returns true if the local participant has joined the meeting."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+viewMode"}),"\n",(0,n.jsx)(i.h3,{id:"participantsviewmode",children:"participants.viewMode"}),"\n",(0,n.jsx)(i.p,{children:"Indicates whether the meeting is in 'ACTIVE_GRID' mode or 'PAGINATED' mode."}),"\n",(0,n.jsx)(i.p,{children:"In 'ACTIVE_GRID' mode, participants are populated in the participants.active map\r\ndynamically. The participants present in the map will keep changing when other\r\nparticipants unmute their audio or turn on their videos."}),"\n",(0,n.jsx)(i.p,{children:"In 'PAGINATED' mode, participants are populated in the participants.active map\r\njust once, and the participants in the map will only change if the page number is\r\nchanged by the user using setPage(page)."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+currentPage"}),"\n",(0,n.jsx)(i.h3,{id:"participantscurrentpage",children:"participants.currentPage"}),"\n",(0,n.jsx)(i.p,{children:"This indicates the current page that has been set by the user in PAGINATED mode.\r\nIf the meeting is in ACTIVE_GRID mode, this value will be 0."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+lastActiveSpeaker"}),"\n",(0,n.jsx)(i.h3,{id:"participantslastactivespeaker",children:"participants.lastActiveSpeaker"}),"\n",(0,n.jsxs)(i.p,{children:["This stores the ",(0,n.jsx)(i.code,{children:"participantId"})," of the last participant who spoke in the meeting."]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+selectedPeers"}),"\n",(0,n.jsx)(i.h3,{id:"participantsselectedpeers",children:"participants.selectedPeers"}),"\n",(0,n.jsx)(i.p,{children:"Keeps a list of all participants who have been present in the selected peers list."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+count"}),"\n",(0,n.jsx)(i.h3,{id:"participantscount",children:"participants.count"}),"\n",(0,n.jsx)(i.p,{children:"Returns the number of participants who are joined in the meeting."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+maxActiveParticipantsCount"}),"\n",(0,n.jsx)(i.h3,{id:"participantsmaxactiveparticipantscount",children:"participants.maxActiveParticipantsCount"}),"\n",(0,n.jsx)(i.p,{children:"Returns the maximum number of participants that can be present in\r\nthe active map."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+pageCount"}),"\n",(0,n.jsx)(i.h3,{id:"participantspagecount",children:"participants.pageCount"}),"\n",(0,n.jsx)(i.p,{children:"Returns the number of pages that are available in the meeting in PAGINATED mode.\r\nIf the meeting is in ACTIVE_GRID mode, this value will be 0."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+setMaxActiveParticipantsCount"}),"\n",(0,n.jsx)(i.h3,{id:"participantssetmaxactiveparticipantscountlimit",children:"participants.setMaxActiveParticipantsCount(limit:)"}),"\n",(0,n.jsx)(i.p,{children:"Updates the maximum number of participants that are populated in\r\nthe active map."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"limit:"}),(0,n.jsx)(i.td,{children:"Updated max limit"})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+acceptWaitingRoomRequest"}),"\n",(0,n.jsx)(i.h3,{id:"participantsacceptwaitingroomrequestid",children:"participants.acceptWaitingRoomRequest(id)"}),"\n",(0,n.jsx)(i.p,{children:"Accepts requests from waitlisted participants if user\r\nhas appropriate permissions."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"id"}),(0,n.jsx)(i.td,{children:"peerId or userId of the waitlisted participant."})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+acceptAllWaitingRoomRequest"}),"\n",(0,n.jsx)(i.h3,{id:"participantsacceptallwaitingroomrequest",children:"participants.acceptAllWaitingRoomRequest()"}),"\n",(0,n.jsx)(i.p,{children:"We need a new event for socket service events\r\nsince if we send them all together, sequence of events\r\ncan be unreliable"}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+rejectWaitingRoomRequest"}),"\n",(0,n.jsx)(i.h3,{id:"participantsrejectwaitingroomrequestid",children:"participants.rejectWaitingRoomRequest(id)"}),"\n",(0,n.jsx)(i.p,{children:"Rejects requests from waitlisted participants if user\r\nhas appropriate permissions."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"id"}),(0,n.jsx)(i.td,{children:"participantId of the waitlisted participant."})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+setViewMode"}),"\n",(0,n.jsx)(i.h3,{id:"participantssetviewmodeviewmode",children:"participants.setViewMode(viewMode)"}),"\n",(0,n.jsx)(i.p,{children:"Sets the view mode of the meeting to either ACTIVE_GRID or PAGINATED."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"viewMode"}),(0,n.jsx)(i.td,{children:"The mode in which the active map should be populated"})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+setPage"}),"\n",(0,n.jsx)(i.h3,{id:"participantssetpagepage",children:"participants.setPage(page)"}),"\n",(0,n.jsxs)(i.p,{children:["Populates the active map with participants present in the page number\r\nindicated by the parameter ",(0,n.jsx)(i.code,{children:"page"})," in PAGINATED mode.\r\nDoes not do anything in ACTIVE_GRID mode."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"page"}),(0,n.jsx)(i.td,{children:"The page number to be set."})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+disableAllAudio"}),"\n",(0,n.jsx)(i.h3,{id:"participantsdisableallaudioallowunmute",children:"participants.disableAllAudio(allowUnmute)"}),"\n",(0,n.jsx)(i.p,{children:"Disables audio for all participants in the meeting."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"allowUnmute"}),(0,n.jsx)(i.td,{children:"Allow participants to unmute after they are muted."})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+disableAllVideo"}),"\n",(0,n.jsx)(i.h3,{id:"participantsdisableallvideo",children:"participants.disableAllVideo()"}),"\n",(0,n.jsx)(i.p,{children:"Disables video for all participants in the meeting."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+disableAudio"}),"\n",(0,n.jsxs)(i.h3,{id:"participantsdisableaudioparticipantid",children:["participants.",(0,n.jsx)(i.del,{children:"disableAudio(participantId)"})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"Deprecated"})})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"participantId"}),(0,n.jsx)(i.td,{children:"ID of participant to be muted."})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+disableVideo"}),"\n",(0,n.jsxs)(i.h3,{id:"participantsdisablevideoparticipantid",children:["participants.",(0,n.jsx)(i.del,{children:"disableVideo(participantId)"})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"Deprecated"})})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"participantId"}),(0,n.jsx)(i.td,{children:"ID of participant to be muted."})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+kick"}),"\n",(0,n.jsxs)(i.h3,{id:"participantskickparticipantid",children:["participants.",(0,n.jsx)(i.del,{children:"kick(participantId)"})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"Deprecated"})})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"participantId"}),(0,n.jsx)(i.td,{children:"ID of participant to be kicked."})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+kickAll"}),"\n",(0,n.jsx)(i.h3,{id:"participantskickall",children:"participants.kickAll()"}),"\n",(0,n.jsx)(i.p,{children:"Kicks all participants from the meeting."}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+broadcastMessage"}),"\n",(0,n.jsx)(i.h3,{id:"participantsbroadcastmessagetarget",children:"participants.broadcastMessage(target)"}),"\n",(0,n.jsx)(i.p,{children:"Broadcasts the message to participants"}),"\n",(0,n.jsxs)(i.p,{children:["If no ",(0,n.jsx)(i.code,{children:"target"})," is specified it is sent to all participants including ",(0,n.jsx)(i.code,{children:"self"}),"."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Param"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"target"}),(0,n.jsxs)(i.td,{children:["object containing a list of ",(0,n.jsx)(i.code,{children:"participantIds"})," or object containing ",(0,n.jsx)(i.code,{children:"presetName"})," - every user with that preset will be sent the message"]})]})})]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+acceptAllRequestToJoinStageRequests"}),"\n",(0,n.jsxs)(i.h3,{id:"participantsacceptallrequesttojoinstagerequests",children:["participants.",(0,n.jsx)(i.del,{children:"acceptAllRequestToJoinStageRequests()"})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"Deprecated"})})}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+getAllJoinedPeers"}),"\n",(0,n.jsx)(i.h3,{id:"participantsgetalljoinedpeers",children:"participants.getAllJoinedPeers()"}),"\n",(0,n.jsxs)(i.p,{children:["Returns all peers currently present in the room\r\nIf you are in a group call, use ",(0,n.jsx)(i.code,{children:"meeting.participants.joined"}),"\r\ninstead"]}),"\n",(0,n.jsx)("a",{name:"module_DyteParticipants--module.exports+getParticipantsInMeetingPreJoin"}),"\n",(0,n.jsx)(i.h3,{id:"participantsgetparticipantsinmeetingprejoin",children:"participants.getParticipantsInMeetingPreJoin()"}),"\n",(0,n.jsxs)(i.p,{children:["Returns all peers currently in the room, is a non paginated call\r\nand should only be used if you are in a non room joined state,\r\nif in a joined group call, use ",(0,n.jsx)(i.code,{children:"meeting.participants.joined"})]})]})}function o(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var a=t(96540);const n={},s=a.createContext(n);function r(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);