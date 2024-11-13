"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[37649],{53186:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"reference/DyteChat","title":"DyteChat","description":"This is the chat module, which can be used to send and receive messages from the meeting.","source":"@site/docs/rn-core/reference/DyteChat.md","sourceDirName":"reference","slug":"/reference/DyteChat","permalink":"/rn-core/reference/DyteChat","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/reference/DyteChat.md","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"web_core_version":"1.32.1"},"sidebar":"tutorialSidebar","previous":{"title":"DyteMeta","permalink":"/rn-core/reference/DyteMeta"},"next":{"title":"DytePolls","permalink":"/rn-core/reference/DytePolls"}}');var t=n(74848),h=n(28453);const d={sidebar_position:8,web_core_version:"1.32.1"},i=void 0,r={},l=[{value:"chat.messages",id:"chatmessages",level:3},{value:"chat.channels",id:"chatchannels",level:3},{value:"chat.roomJoined",id:"chatroomjoined",level:3},{value:"chat.pinned",id:"chatpinned",level:3},{value:"chat.sendTextMessage(message)",id:"chatsendtextmessagemessage",level:3},{value:"chat.sendImageMessage(image)",id:"chatsendimagemessageimage",level:3},{value:"chat.sendFileMessage(file)",id:"chatsendfilemessagefile",level:3},{value:"chat.sendMessage(message, participantIds)",id:"chatsendmessagemessage-participantids",level:3},{value:"chat.getMessagesByUser(userId)",id:"chatgetmessagesbyuseruserid",level:3},{value:"chat.getMessagesByType(type)",id:"chatgetmessagesbytypetype",level:3},{value:"chat.pin(id)",id:"chatpinid",level:3},{value:"chat.unpin(id)",id:"chatunpinid",level:3},{value:"chat.getMessages()",id:"chatgetmessages",level:3},{value:"chat.createChannel()",id:"chatcreatechannel",level:3},{value:"chat.updateChannel()",id:"chatupdatechannel",level:3},{value:"chat.sendMessageToChannel(message, channelId)",id:"chatsendmessagetochannelmessage-channelid",level:3},{value:"chat.getChannelMembers()",id:"chatgetchannelmembers",level:3},{value:"chat.searchMessages()",id:"chatsearchmessages",level:3},{value:"chat.markLastReadMessage()",id:"chatmarklastreadmessage",level:3}];function c(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{name:"module_DyteChat"}),"\n",(0,t.jsx)(s.p,{children:"This is the chat module, which can be used to send and receive messages from the meeting."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#module_DyteChat",children:"DyteChat"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+messages",children:".messages"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+channels",children:".channels"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+roomJoined",children:".roomJoined"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+pinned",children:".pinned"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+sendTextMessage",children:".sendTextMessage(message)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+sendImageMessage",children:".sendImageMessage(image)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+sendFileMessage",children:".sendFileMessage(file)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+sendMessage",children:".sendMessage(message, participantIds)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+getMessagesByUser",children:".getMessagesByUser(userId)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+getMessagesByType",children:".getMessagesByType(type)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+pin",children:".pin(id)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+unpin",children:".unpin(id)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+getMessages",children:".getMessages()"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+createChannel",children:".createChannel()"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+updateChannel",children:".updateChannel()"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+sendMessageToChannel",children:".sendMessageToChannel(message, channelId)"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+getChannelMembers",children:".getChannelMembers()"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+searchMessages",children:".searchMessages()"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#module_DyteChat+markLastReadMessage",children:".markLastReadMessage()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+messages"}),"\n",(0,t.jsx)(s.h3,{id:"chatmessages",children:"chat.messages"}),"\n",(0,t.jsx)(s.p,{children:"An array of chat messages."}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+channels"}),"\n",(0,t.jsx)(s.h3,{id:"chatchannels",children:"chat.channels"}),"\n",(0,t.jsx)(s.p,{children:"An Array of all available channels."}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+roomJoined"}),"\n",(0,t.jsx)(s.h3,{id:"chatroomjoined",children:"chat.roomJoined"}),"\n",(0,t.jsx)(s.p,{children:"Returns true if the local participant has joined the meeting."}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+pinned"}),"\n",(0,t.jsx)(s.h3,{id:"chatpinned",children:"chat.pinned"}),"\n",(0,t.jsx)(s.p,{children:"Returns an array of pinned messages."}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+sendTextMessage"}),"\n",(0,t.jsx)(s.h3,{id:"chatsendtextmessagemessage",children:"chat.sendTextMessage(message)"}),"\n",(0,t.jsx)(s.p,{children:"Sends a chat text message to the room."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"message"}),(0,t.jsx)(s.td,{children:"The message that must be sent to the room."})]})})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+sendImageMessage"}),"\n",(0,t.jsx)(s.h3,{id:"chatsendimagemessageimage",children:"chat.sendImageMessage(image)"}),"\n",(0,t.jsx)(s.p,{children:"Sends an image message to the meeting."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"image"}),(0,t.jsx)(s.td,{children:"The image that is to be sent."})]})})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+sendFileMessage"}),"\n",(0,t.jsx)(s.h3,{id:"chatsendfilemessagefile",children:"chat.sendFileMessage(file)"}),"\n",(0,t.jsx)(s.p,{children:"Sends a file to the meeting."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"file"}),(0,t.jsx)(s.td,{children:"A File object."})]})})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+sendMessage"}),"\n",(0,t.jsx)(s.h3,{id:"chatsendmessagemessage-participantids",children:"chat.sendMessage(message, participantIds)"}),"\n",(0,t.jsxs)(s.p,{children:["Sends a message to the meeting. This method can be used to send text, image,\r\nor file messages. The message type is determined by the key 'type' in ",(0,t.jsx)(s.code,{children:"message"}),"\r\nobject."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"message"}),(0,t.jsx)(s.td,{children:"An object including the type and content of the message."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"participantIds"}),(0,t.jsx)(s.td,{children:"An array including the userIds of the participants."})]})]})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+getMessagesByUser"}),"\n",(0,t.jsx)(s.h3,{id:"chatgetmessagesbyuseruserid",children:"chat.getMessagesByUser(userId)"}),"\n",(0,t.jsx)(s.p,{children:"Returns an array of messages sent by a specific userId."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user id of the user that sent the message."})]})})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+getMessagesByType"}),"\n",(0,t.jsx)(s.h3,{id:"chatgetmessagesbytypetype",children:"chat.getMessagesByType(type)"}),"\n",(0,t.jsx)(s.p,{children:"Returns an array of 'text', 'image' or 'file' messages."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:"'text', 'image', or 'file'."})]})})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+pin"}),"\n",(0,t.jsx)(s.h3,{id:"chatpinid",children:"chat.pin(id)"}),"\n",(0,t.jsx)(s.p,{children:"Pins a chat message"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"ID of the message to be pinned"})]})})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+unpin"}),"\n",(0,t.jsx)(s.h3,{id:"chatunpinid",children:"chat.unpin(id)"}),"\n",(0,t.jsx)(s.p,{children:"Unpins a chat message"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"ID of the message to be unpinned"})]})})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+getMessages"}),"\n",(0,t.jsx)(s.h3,{id:"chatgetmessages",children:"chat.getMessages()"}),"\n",(0,t.jsx)(s.p,{children:"Gets chat messages in a paginated manner"}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+createChannel"}),"\n",(0,t.jsx)(s.h3,{id:"chatcreatechannel",children:"chat.createChannel()"}),"\n",(0,t.jsx)(s.p,{children:"Creates a channel with specified name and userIds as members"}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+updateChannel"}),"\n",(0,t.jsx)(s.h3,{id:"chatupdatechannel",children:"chat.updateChannel()"}),"\n",(0,t.jsx)(s.p,{children:"Updates the channel"}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+sendMessageToChannel"}),"\n",(0,t.jsx)(s.h3,{id:"chatsendmessagetochannelmessage-channelid",children:"chat.sendMessageToChannel(message, channelId)"}),"\n",(0,t.jsxs)(s.p,{children:["Sends a message to a channel. This method can be used to send text, image,\r\nor file messages. The message type is determined by the key 'type' in ",(0,t.jsx)(s.code,{children:"message"}),"\r\nobject."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"message"}),(0,t.jsx)(s.td,{children:"An object including the type and content of the message."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"channelId"}),(0,t.jsx)(s.td,{children:"Id of the channel where you want to send the message."})]})]})]}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+getChannelMembers"}),"\n",(0,t.jsx)(s.h3,{id:"chatgetchannelmembers",children:"chat.getChannelMembers()"}),"\n",(0,t.jsx)(s.p,{children:"returns a list of members added to the channel"}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+searchMessages"}),"\n",(0,t.jsx)(s.h3,{id:"chatsearchmessages",children:"chat.searchMessages()"}),"\n",(0,t.jsx)(s.p,{children:"search messages"}),"\n",(0,t.jsx)("a",{name:"module_DyteChat+markLastReadMessage"}),"\n",(0,t.jsx)(s.h3,{id:"chatmarklastreadmessage",children:"chat.markLastReadMessage()"}),"\n",(0,t.jsx)(s.p,{children:"marks last read message in a channel"})]})}function m(e={}){const{wrapper:s}={...(0,h.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>i});var a=n(96540);const t={},h=a.createContext(t);function d(e){const s=a.useContext(h);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(h.Provider,{value:s},e.children)}}}]);