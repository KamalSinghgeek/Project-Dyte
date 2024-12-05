"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[6153],{8327:(e,t,n)=>{n.d(t,{M:()=>b,T:()=>h,d:()=>s,e:()=>m,f:()=>o,g:()=>a,h:()=>r,i:()=>c,j:()=>i,k:()=>v,p:()=>C,r:()=>l,s:()=>y});n(55055);const i=e=>{let t=null;try{const n=JSON.parse(e.message),{target:i,message:s}=n;t=void 0===i||void 0===s?e:Object.assign(Object.assign({},e),{targetUserIds:i,message:s})}catch(n){t=e}return t};function s(e,t){return e.localeCompare(t)}function a(e){return e.sort(((e,t)=>e.localeCompare(t))).join("_")}function r(e,t){if(null==e)return!0;for(const n of e)if("file"===n.kind){const e=n.getAsFile();n.type.startsWith("image/")?t("image",e):t("file",e)}}const h="dm__";function c(e){return e.isDirectMessage}function o(e){return[...new Set(e)].sort(s).join("<>")}function l(e){return e.split("").reverse().join("")}const d=/^\*([^*\s]+)\*/,p=/^_([^_\s]+)_/,g=/^~([^~\s]+)~/,u=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.,~#?&//=]*)/,v=/<blockquote>[.\s\S]*<\/blockquote>\n\n/m;function m(e,t=!1){if(!v.test(e))return"";let n=0,i=13;return t&&(n=12,i=0),e.substring(e.indexOf("<blockquote>")+n,e.indexOf("</blockquote>")+i)}function y(e){return e.replace(v,"")}const b=2e3,f=["<a>","<b>","<i>","<q>","<s>"];function C(e){e=(e=e.split(" ").map((e=>{if(u.test(e)){const t=u.exec(e);e=e.replace(t[0],`<a>${t[0]}</a>`)}else{if(d.test(e)){const t=d.exec(e);e=e.replace(t[0],`<b>${t[1]}</b>`)}if(p.test(e)){const t=p.exec(e);e=e.replace(t[0],`<i>${t[1]}</i>`)}if(g.test(e)){const t=g.exec(e);e=e.replace(t[0],`<s>${t[1]}</s>`)}}return e})).join(" ")).split(" ").map(((e,t)=>">"!==e||0!==t&&">"!==e[t-1]?e:"<q></q>")).join(" ");const[t]=P(e);return t}function P(e,t=""){const n=[];if(0===e.length)return[n,0];let i=0;for(;i<e.length;){if(t.length&&t===e.substring(i,i+t.length))return[n,i+t.length];if(f.includes(e.substring(i,i+3))){const[t,s]=P(e.substring(i+3),`</${e[i+1]}>`);n.push({type:e[i+1],content:1===t.length&&"plain_text"===t[0].type?t[0].content:t}),i+=s+3}else{let t=n[n.length-1];t&&"plain_text"===t.type||(n.push({type:"plain_text",content:""}),t=n[n.length-1]),t.content+=e[i],i++}}return[n,i]}},56153:(e,t,n)=>{n.r(t),n.d(t,{dyte_chat:()=>d});var i=n(72944),s=n(17073),a=n(74157),r=n(8327),h=n(55055),c=n(64383),o=n(26468),l=(n(60064),n(93514));n(94370),n(70694);const d=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.chatUpdateListener=({message:e})=>{e.channelId||(this.addToChatGroup(e),this.chatGroups=Object.assign({},this.chatGroups))},this.chatPermissionUpdateListener=()=>{this.canSend=this.meeting.self.permissions.chatPublic.canSend,this.canSendTextMessage=this.meeting.self.permissions.chatPublic.text,this.canSendFiles=this.meeting.self.permissions.chatPublic.files},this.channelMap=new Map,this.onDragOver=e=>{e.preventDefault(),this.dropzoneActivated=!0},this.onDragLeave=()=>{this.dropzoneActivated=!1},this.onDrop=e=>{e.preventDefault(),this.dropzoneActivated=!1,(0,r.h)(e.dataTransfer.items,((e,t)=>{var n,i,s,a;switch(e){case"image":this.isFileMessagingAllowed()&&(null===(i=null===(n=this.meeting)||void 0===n?void 0:n.chat)||void 0===i||i.sendImageMessage(t,this.getRecipientPeerIds()));break;case"file":this.isFileMessagingAllowed()&&(null===(a=null===(s=this.meeting)||void 0===s?void 0:s.chat)||void 0===a||a.sendFileMessage(t,this.getRecipientPeerIds()))}}))},this.disconnectMeeting=e=>{var t,n,i,s,a,r;this.isPrivateChatSupported()&&(null==e||e.participants.joined.removeListener("participantJoined",this.onParticipantUpdate),null==e||e.participants.joined.removeListener("participantLeft",this.onParticipantUpdate)),null===(t=null==e?void 0:e.chat)||void 0===t||t.removeListener("chatUpdate",this.chatUpdateListener),null===(n=null==e?void 0:e.chat)||void 0===n||n.removeListener("channelCreate",this.onChannelCreateOrUpdate),null===(i=null==e?void 0:e.chat)||void 0===i||i.removeListener("channelUpdate",this.onChannelCreateOrUpdate),null===(s=null==e?void 0:e.chat)||void 0===s||s.removeListener("channelMessageUpdate",this.onChannelCreateOrUpdate),null===(r=null===(a=null==e?void 0:e.participants)||void 0===a?void 0:a.all)||void 0===r||r.removeListener("participantsUpdate",this.onChannelCreateOrUpdate),e.self.permissions.removeListener("*",this.chatPermissionUpdateListener)},this.onParticipantUpdate=()=>{this.participants=this.meeting.participants.joined.toArray().filter((e=>0===this.privatePresetFilter.length||this.privatePresetFilter.includes(e.presetName))),this.selectedParticipant&&!this.participants.includes(this.selectedParticipant)&&(this.selectedParticipant=null,this.chatRecipientId=this.selectedGroup="everyone")},this.usePaginatedChat=()=>(0,c.u)(this.meeting),this.updateUnreadCountGroups=e=>{this.unreadCountGroups=Object.assign(Object.assign({},this.unreadCountGroups),e)},this.isPrivateChatSupported=()=>{var e,t,n;return!(0,c.u)(this.meeting)&&this.canPrivateMessage&&!this.disablePrivateChat&&"socket-service"===(null===(n=null===(t=null===(e=this.meeting)||void 0===e?void 0:e.__internals__)||void 0===t?void 0:t.features)||void 0===n?void 0:n.getFeatureValue("chat_socket_server"))},this.updateRecipients=e=>{const{id:t}=e.detail;if(this.chatRecipientId=t,this.selectedParticipant=this.participants.find((e=>e.userId===t)),"everyone"!==this.chatRecipientId){const e=[this.chatRecipientId,this.meeting.self.userId],t=(0,r.g)(e);this.selectedGroup=t}else this.selectedGroup="everyone";this.updateUnreadCountGroups({[this.selectedGroup]:0})},this.isTextMessagingAllowed=()=>"everyone"===this.chatRecipientId?this.canSend&&this.canSendTextMessage:this.canPrivateMessage&&this.canSendPrivateTexts,this.isFileMessagingAllowed=()=>"everyone"===this.chatRecipientId?this.canSend&&this.canSendFiles:this.canPrivateMessage&&this.canSendPrivateFiles,this.onChannelChanged=e=>{const t=e.detail;t.id.includes(r.T)?this.createDMChannel(t.id.replace(r.T,"")):this.selectedChannelId=t.id,this.cleanup(),"desktop"!==this.selectorState&&(this.selectorState="hide")},this.createDMChannel=async e=>{this.creatingChannel=!0;const t=await this.meeting.chat.createChannel("Direct Message",[e],{visibility:"private",isDirectMessage:!0});this.creatingChannel=!1,this.selectedChannelId=t.id},this.cleanup=()=>{this.editingMessage=null,this.replyMessage=null,this.searchQuery=""},this.onQuotedMessageDismiss=()=>{this.replyMessage=null},this.onChannelCreateOrUpdate=e=>{e?this.channelMap.set(e.id,e):this.meeting.chat.channels.forEach((e=>this.channelMap.set(e.id,e)));const t=Array.from(this.channelMap.values()),n=t.filter((e=>!(0,r.i)(e))).sort(((e,t)=>(0,r.d)(e.displayName,t.displayName))),i=t.filter(r.i).map((e=>Object.assign(Object.assign({},e),{displayName:this.getMemberDisplayName(e)}))),s=this.meeting.participants.all.toArray().filter((e=>{if(e.userId===this.meeting.self.userId)return!1;const t=(0,r.f)([this.meeting.self.userId,e.userId]);return i.every((e=>(0,r.f)(e.memberIds)!==t))})).map((e=>({id:`${r.T}${e.userId}`,displayName:e.name,displayPictureUrl:e.picture,isDirectMessage:!0,unreadCount:0}))),a=[...i,...s].sort(((e,t)=>(0,r.d)(e.displayName,t.displayName)));this.channels=[...n,...a];const h=[...n,...i];this.selectedChannelId||0===h.length||(this.selectedChannelId=h[0].id)},this.getMemberDisplayName=e=>{var t;let n;n=1===e.memberIds.length?e.memberIds[0]:e.memberIds[0]===this.meeting.self.userId?e.memberIds[1]:e.memberIds[0];const i=this.meeting.participants.all.toArray().find((e=>e.userId===n));return null!==(t=null==i?void 0:i.name)&&void 0!==t?t:n},this.onNewMessageHandler=async e=>{const t=e.detail;this.isChatViewType?(await this.meeting.chat.sendMessageToChannel(t,this.selectedChannelId,this.replyMessage?{replyTo:this.replyMessage}:{}),this.replyMessage=null):this.meeting.chat.sendMessage(t,this.getRecipientPeerIds())},this.onEditMessageHandler=async e=>{var t,n;await(null===(n=null===(t=this.meeting)||void 0===t?void 0:t.chat)||void 0===n?void 0:n.editTextMessage(this.editingMessage.id,e.detail,this.editingMessage.channelId)),this.editingMessage=null},this.onEditCancel=()=>{this.editingMessage=null},this.onSearchHandler=async e=>{this.searchQuery=e.detail},this.onSearchDismissed=()=>{this.searchQuery=""},this.onChannelCreateClicked=()=>{this.stateUpdate.emit({activeChannelCreator:!0}),o.s.activeChannelCreator=!0},this.onPinMessage=e=>{const t=e.detail;t.pinned?this.meeting.chat.unpin(t.id):this.meeting.chat.pin(t.id)},this.getChannelItems=()=>this.channels.map((e=>{const t={id:e.id,name:e.displayName,avatarUrl:e.displayPictureUrl};return e.latestMessage&&(t.latestMessage="text"===e.latestMessage.type?(0,r.s)(e.latestMessage.message):"",t.latestMessageTime=e.latestMessage.time),t})),this.getPrivateChatRecipients=()=>{const e=this.participants.map((e=>{const t=(0,r.g)([e.userId,this.meeting.self.userId]);return{id:e.userId,name:e.name,avatarUrl:e.picture,unreadCount:this.unreadCountGroups[t]}}));return[{id:"everyone",name:this.t("chat.everyone"),icon:"participants",unreadCount:this.unreadCountGroups.everyone},...e]},this.onTogglePinnedMessages=()=>{this.showPinnedMessages=!this.showPinnedMessages},this.renderPinnedMessagesHeader=()=>this.isChatViewType||0===this.meeting.chat.pinned.length?null:(0,i.h)("dyte-tooltip",{label:this.t("chat.toggle_pinned_msgs"),iconPack:this.iconPack,t:this.t},(0,i.h)("div",{class:{"pinned-messages-header":!0,active:this.showPinnedMessages},onClick:this.onTogglePinnedMessages},(0,i.h)("dyte-icon",{icon:this.iconPack.pin,iconPack:this.iconPack,t:this.t}),this.t("chat.pinned_msgs"),` (${this.meeting.chat.pinned.length})`)),this.meeting=void 0,this.config=l.d,this.size=void 0,this.iconPack=s.d,this.t=(0,a.u)(),this.disablePrivateChat=!1,this.canPinMessages=!1,this.privatePresetFilter=[],this.unreadCountGroups={},this.chatGroups={everyone:[]},this.selectedGroup="everyone",this.now=new Date,this.dropzoneActivated=!1,this.showLatestMessageButton=!1,this.canSend=!1,this.canSendTextMessage=!1,this.canSendFiles=!1,this.canPrivateMessage=!1,this.canSendPrivateTexts=!1,this.canSendPrivateFiles=!1,this.emojiPickerEnabled=!1,this.chatRecipientId="everyone",this.participants=[],this.selectedParticipant=void 0,this.channels=[],this.selectedChannelId=void 0,this.editingMessage=null,this.replyMessage=null,this.searchQuery="",this.selectorState="hide",this.creatingChannel=!1,this.showPinnedMessages=!1}connectedCallback(){this.meeting&&(this.meetingChanged(this.meeting),this.meeting&&!this.meeting.chat||this.isFileMessagingAllowed()&&(this.host.addEventListener("dragover",this.onDragOver),this.host.addEventListener("dragleave",this.onDragLeave),this.host.addEventListener("drop",this.onDrop)))}onEditMessageInit(e){e.detail.flags.isReply?this.replyMessage=e.detail.payload:e.detail.flags.isEdit&&(this.editingMessage=e.detail.payload)}disconnectedCallback(){var e;null===(e=this.resizeObserver)||void 0===e||e.disconnect(),this.disconnectMeeting(this.meeting),this.host.removeEventListener("dragover",this.onDragOver),this.host.removeEventListener("dragleave",this.onDragLeave),this.host.removeEventListener("drop",this.onDrop)}meetingChanged(e,t){var n,i,s,a,h;if(null!=t&&this.disconnectMeeting(t),(!e||e.chat)&&null!=e){if(this.canSend=e.self.permissions.chatPublic.canSend,this.canSendTextMessage=e.self.permissions.chatPublic.text,this.canSendFiles=e.self.permissions.chatPublic.files,this.canPrivateMessage=!(!(null===(n=e.self.permissions.chatPrivate)||void 0===n?void 0:n.canSend)&&!(null===(i=e.self.permissions.chatPrivate)||void 0===i?void 0:i.canReceive)),this.canSendPrivateTexts=!!(null===(s=e.self.permissions.chatPrivate)||void 0===s?void 0:s.text),this.canSendPrivateFiles=!!(null===(a=e.self.permissions.chatPrivate)||void 0===a?void 0:a.files),this.canPinMessages=e.self.permissions.pinParticipant,this.isChatViewType="CHAT"===e.meta.viewType,this.isChatViewType){this.onChannelCreateOrUpdate();this.channels.filter((e=>!e.id.includes(r.T))).length&&(this.selectedChannelId=this.channels[0].id),this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=new ResizeObserver((e=>{for(const t of e)t.contentBoxSize[0].inlineSize<758?this.selectorState="hide":this.selectorState="desktop"})),this.isChatViewType&&this.resizeObserver.observe(this.host)}this.initializeChatGroups(),this.chatGroups=Object.assign({},this.chatGroups),e.self.permissions.on("*",this.chatPermissionUpdateListener),this.onParticipantUpdate(),this.usePaginatedChat()||null===(h=e.chat)||void 0===h||h.addListener("chatUpdate",this.chatUpdateListener),this.isPrivateChatSupported()&&(e.participants.joined.addListener("participantJoined",this.onParticipantUpdate),e.participants.joined.addListener("participantLeft",this.onParticipantUpdate)),this.isChatViewType&&(e.chat.addListener("channelCreate",this.onChannelCreateOrUpdate),e.chat.addListener("channelUpdate",this.onChannelCreateOrUpdate),e.chat.addListener("channelMessageUpdate",this.onChannelCreateOrUpdate),e.participants.all.addListener("participantsUpdate",this.onChannelCreateOrUpdate))}}chatGroupsChanged(e){var t,n;if(!this.isPrivateChatSupported())return;const i={};for(const s in e){const a=null!==(t=h.c[s])&&void 0!==t?t:0;i[s]=e[s].filter((e=>"chat"==e.type&&e.message.time>a&&e.message.userId!==this.meeting.self.userId)).length,(s===(0,r.g)([this.meeting.self.userId,null===(n=this.selectedParticipant)||void 0===n?void 0:n.userId])||"everyone"===s&&null===this.selectedParticipant)&&(i[s]=0,h.c[s]=new Date)}this.updateUnreadCountGroups(i)}initializeChatGroups(){var e;null===(e=this.meeting.chat)||void 0===e||e.messages.forEach((e=>{this.addToChatGroup(e)}))}addToChatGroup(e){var t;const n=(0,r.j)(e);let i="everyone";if((null===(t=n.targetUserIds)||void 0===t?void 0:t.length)>0){const e=new Set([n.userId,...n.targetUserIds]);i=(0,r.g)(Array.from(e))}void 0===this.chatGroups[i]&&(this.chatGroups[i]=[]);let s=!1,a=[];this.chatGroups[i].forEach((t=>{"chat"===t.type&&t.message.id===e.id?(s=!0,a.push({type:"chat",message:n})):a.push(t)})),s||a.push({type:"chat",message:n}),this.chatGroups[i]=a}getRecipientPeerIds(){let e=[];return"everyone"!==this.chatRecipientId&&(e=[this.selectedParticipant.id]),e}channelSwitchListener(e){this.onChannelChanged(e)}renderHeadlessComponents(){return(0,i.h)(i.F,null,(0,i.h)("dyte-dialog-manager",{meeting:this.meeting}),(0,i.h)("dyte-notifications",{meeting:this.meeting}))}renderComposerUI(){var e,t,n;if(this.isChatViewType&&0===this.channels.length)return null;if(this.isChatViewType&&""!==this.searchQuery)return null;if(this.isChatViewType&&!this.selectedChannelId)return null;if("everyone"===this.chatRecipientId){if(!this.canSendTextMessage&&!this.canSendFiles)return null}else if(!this.canSendPrivateTexts&&!this.canSendPrivateFiles)return null;const s={iconPack:this.iconPack,t:this.t,size:this.size},a=this.editingMessage?this.editingMessage.message:"",r=this.replyMessage?this.replyMessage.message:"";return(0,i.h)("dyte-chat-composer-view",Object.assign({message:a,storageKey:null!==(e=this.selectedChannelId)&&void 0!==e?e:`draft-${this.selectedChannelId}`,quotedMessage:r,isEditing:!!this.editingMessage,canSendTextMessage:this.isTextMessagingAllowed(),canSendFiles:this.isFileMessagingAllowed(),disableEmojiPicker:!!(null===(n=null===(t=this.meeting)||void 0===t?void 0:t.__internals__)||void 0===n?void 0:n.features.hasFeature(c.F.DISABLE_EMOJI_PICKER)),inputTextPlaceholder:this.t("chat.message_placeholder"),onNewMessage:this.onNewMessageHandler,onEditMessage:this.onEditMessageHandler,onEditCancel:this.onEditCancel,onQuotedMessageDismiss:this.onQuotedMessageDismiss},s),(0,i.h)("slot",{name:"chat-addon",slot:"chat-addon"}))}renderFullChat(){if(this.creatingChannel)return(0,i.h)("div",{class:"banner"},(0,i.h)("dyte-spinner",{size:"lg"}));if(0===this.channels.length||!this.selectedChannelId)return(0,i.h)("div",{class:"banner"},(0,i.h)("dyte-icon",{icon:this.iconPack.create_channel_illustration,iconPack:this.iconPack,t:this.t,slot:"start",class:"create-channel-illustration"}),(0,i.h)("dyte-button",{iconPack:this.iconPack,t:this.t,kind:"wide",variant:"primary",size:"md",onClick:this.onChannelCreateClicked,class:"welcome-new-channel"},(0,i.h)("dyte-icon",{icon:this.iconPack.add,iconPack:this.iconPack,t:this.t,slot:"start"}),(0,i.h)("span",null,this.t("chat.new_channel"))),("mobile"===this.selectorState||"hide"===this.selectorState)&&(0,i.h)("dyte-button",{kind:"button",variant:"secondary",size:"md",class:"view-chats-btn",onClick:()=>{this.selectorState="mobile"}},(0,i.h)("dyte-icon",{icon:this.iconPack.chat,slot:"start"}),(0,i.h)("span",null,this.t("chat.view_chats"))));const e=this.channels.find((e=>e.id===this.selectedChannelId));return(0,i.h)("div",{class:"chat"},(0,i.h)("dyte-channel-header",{slot:"header",meeting:this.meeting,channel:e,onSearch:this.onSearchHandler,onSearchDismissed:this.onSearchDismissed,showBackButton:"mobile"===this.selectorState||"hide"===this.selectorState,onBack:()=>{this.selectorState="mobile"}}),""!==this.searchQuery&&(0,i.h)("dyte-chat-search-results",{meeting:this.meeting,query:this.searchQuery,channelId:this.selectedChannelId}),""===this.searchQuery&&(0,i.h)("dyte-chat-messages-ui-paginated",{meeting:this.meeting,size:this.size,iconPack:this.iconPack,t:this.t,selectedChannelId:this.selectedChannelId,selectedChannel:e}))}render(){var e,t;if(!this.meeting)return null;const n={iconPack:this.iconPack,t:this.t,size:this.size},s=null===(e=this.meeting)||void 0===e?void 0:e.self.userId;let a=this.chatGroups[this.selectedGroup]||[];return this.showPinnedMessages&&0!==this.meeting.chat.pinned.length&&(a=a.filter((e=>"chat"===e.type&&e.message.pinned))),(0,i.h)(i.H,null,this.isChatViewType&&this.renderHeadlessComponents(),(0,i.h)("div",{class:"chat-container"},this.isChatViewType&&(0,i.h)("div",{class:{"selector-container":!0,[this.selectorState]:!0}},(0,i.h)("dyte-channel-selector-view",{channels:this.getChannelItems(),selectedChannelId:this.selectedChannelId,onChannelChange:this.onChannelChanged,t:this.t},(0,i.h)("div",{class:"channel-selector-header",slot:"header"},(0,i.h)("dyte-logo",{meeting:this.meeting,config:this.config,t:this.t}),(0,i.h)("dyte-tooltip",{label:this.t("chat.new_channel"),iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-button",{iconPack:this.iconPack,t:this.t,kind:"button",variant:"ghost",size:"md",onClick:this.onChannelCreateClicked,class:"channel-create-btn"},(0,i.h)("dyte-icon",{icon:this.iconPack.add,iconPack:this.iconPack,t:this.t}))))),(0,i.h)("dyte-button",{kind:"icon",variant:"ghost",class:"mobile-close-btn",onClick:()=>this.selectorState="hide"},(0,i.h)("dyte-icon",{icon:this.iconPack.dismiss}))),(0,i.h)("div",{class:"chat"},this.isFileMessagingAllowed()&&(0,i.h)("div",{id:"dropzone",class:{active:this.dropzoneActivated},part:"dropzone"},(0,i.h)("dyte-icon",{icon:this.iconPack.attach,iconPack:this.iconPack,t:this.t}),(0,i.h)("p",null,this.t("chat.send_attachment"))),this.renderPinnedMessagesHeader(),this.isPrivateChatSupported()&&(0,i.h)("dyte-channel-selector-view",{channels:this.getPrivateChatRecipients(),selectedChannelId:(null===(t=this.selectedParticipant)||void 0===t?void 0:t.userId)||"everyone",onChannelChange:this.updateRecipients,t:this.t,viewAs:"dropdown"}),this.isChatViewType?this.renderFullChat():this.usePaginatedChat()?(0,i.h)("dyte-chat-messages-ui-paginated",{meeting:this.meeting,size:this.size,iconPack:this.iconPack,t:this.t}):(0,i.h)("dyte-chat-messages-ui",Object.assign({messages:a,selfUserId:s,selectedGroup:this.selectedGroup,onPinMessage:this.onPinMessage,canPinMessages:this.canPinMessages},n)),this.renderComposerUI())))}get host(){return(0,i.a)(this)}static get watchers(){return{meeting:["meetingChanged"],chatGroups:["chatGroupsChanged"]}}};d.style=":host {\n  line-height: initial;\n  font-family: var(--dyte-font-family, sans-serif);\n\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\n\np {\n  margin: var(--dyte-space-0, 0px);\n  padding: var(--dyte-space-0, 0px);\n}\n\n.scrollbar {\n  /* For Firefox */\n  scrollbar-width: thin;\n  scrollbar-color: var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent);\n}\n\n/* For WebKit */\n.scrollbar::-webkit-scrollbar {\n  height: var(--dyte-space-1\\.5, 6px);\n  width: var(--dyte-space-1\\.5, 6px);\n  border-radius: 9999px;\n  background-color: var(--dyte-scrollbar-background, transparent);\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 9999px;\n  background-color: var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)));\n}\n\n\n:host {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  font-size: 14px;\n  position: relative;\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n}\n\nh3 {\n  margin: var(--dyte-space-0, 0px);\n  display: flex;\n  height: var(--dyte-space-12, 48px);\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 400;\n  color: rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));\n  text-align: center;\n}\n\n#dropzone {\n  position: absolute;\n  top: var(--dyte-space-0, 0px);\n  right: var(--dyte-space-0, 0px);\n  bottom: var(--dyte-space-0, 0px);\n  left: var(--dyte-space-0, 0px);\n  z-index: 10;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));\n  color: rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));\n}\n\n#dropzone.active {\n  display: flex;\n  animation: 0.2s slide-up ease-in;\n}\n\ndyte-chat-messages-ui,\ndyte-chat-messages-ui-paginated {\n  flex: 1 0 0;\n}\n\ndyte-chat-composer-view {\n  margin: var(--dyte-space-2, 8px);\n}\n\n.chat-container {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: row;\n  container-type: size;\n  container-name: chatcontainer;\n}\n\n@container chatcontainer (height < 360px) {\n  dyte-channel-selector-view {\n    height: var(--dyte-space-8, 32px);\n    min-height: 24px;\n  }\n}\n\n.chat {\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n}\n\n.banner {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.banner .welcome-new-channel {\n  width: var(--dyte-space-48, 192px);\n}\n\n.banner .create-channel-illustration {\n  height: var(--dyte-space-40, 160px);\n  width: var(--dyte-space-40, 160px);\n}\n\n.channel-selector-header {\n  box-sizing: border-box;\n  height: var(--dyte-space-16, 64px);\n  padding: var(--dyte-space-4, 16px);\n  display: flex;\n  justify-content: space-between;\n  border-bottom: var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-700, 44 44 44));\n}\n\n.channel-selector-header .channel-create-btn {\n  width: var(--dyte-space-8, 32px);\n  justify-content: center;\n}\n\n.channel-selector-header .channel-create-btn:hover {\n  --tw-text-opacity: 1;\n  color: rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));\n}\n\n.view-chats-btn {\n  margin-top: var(--dyte-space-4, 16px);\n}\n\n.selector-container {\n  z-index: 50;\n  width: 100%;\n  max-width: var(--dyte-space-80, 320px);\n  border-right: var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));\n}\n\n.selector-container.hide {\n  display: none;\n}\n\n.mobile-close-btn {\n  display: none;\n}\n\n.selector-container.mobile {\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: var(--dyte-space-0, 0px);\n  right: var(--dyte-space-0, 0px);\n  bottom: var(--dyte-space-0, 0px);\n  left: var(--dyte-space-0, 0px);\n  background-color: rgba(var(--dyte-colors-background-1000, 8 8 8) / 0.6);\n  display: flex;\n}\n\n.selector-container.mobile dyte-channel-selector-view {\n  max-width: var(--dyte-space-96, 384px);\n    animation: 0.3s swipe-in;\n}\n\n.selector-container.mobile .mobile-close-btn {\n  margin-top: var(--dyte-space-4, 16px);\n  margin-bottom: var(--dyte-space-4, 16px);\n  margin-left: var(--dyte-space-6, 24px);\n  margin-right: var(--dyte-space-6, 24px);\n  display: block;\n}\n\n.pinned-messages-header {\n  display: flex;\n  align-items: center;\n  gap: var(--dyte-space-2, 8px);\n  padding: var(--dyte-space-2, 8px);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.pinned-messages-header dyte-icon {\n  height: var(--dyte-space-3, 12px);\n  width: var(--dyte-space-3, 12px);\n}\n\n.pinned-messages-header:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n}\n\n.pinned-messages-header.active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n}\n\n@keyframes swipe-in {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n"}}]);