"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[2845],{92845:(t,e,a)=>{a.r(e),a.d(e,{dyte_breakout_rooms_manager:()=>d});var i=a(72944),o=a(74157),s=a(17073),r=a(26468),n=a(70694),c=a(60064);a(55055),a(64383),a(94370);const d=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.updateLocalState=t=>{this.stateManager.updateCurrentState(t),this.draftState=this.stateManager.currentState,this.meeting.connectedMeetings.isActive&&(this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{mode:"edit"})),"create"!==this.roomConfig.mode||this.meeting.connectedMeetings.isActive||(0,n.r)(),["edit","view"].includes(this.roomConfig.mode)&&(this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{rooms:t.meetings.length,step:"participants-config"}),this.selectedParticipants=[])},this.onAddNewRoom=()=>{this.stateManager.addNewMeeting(),this.draftState=this.stateManager.currentState,this.selectorRef.scrollTo({top:this.selectorRef.scrollHeight,behavior:"smooth"})},this.onRoomUpdate=t=>{const{detail:e}=t;this.stateManager.updateMeetingTitle(e.id,e.title),this.draftState=this.stateManager.currentState},this.onRoomDelete=t=>{this.stateManager.allConnectedMeetings.find((e=>e.id===t))&&(this.stateManager.deleteMeeting(t),this.draftState=this.stateManager.currentState)},this.unassignParticipant=t=>{this.stateManager.unassignParticipants([t]),this.draftState=this.stateManager.currentState},this.onUnassignAll=()=>{this.stateManager.unassignAllParticipants(),this.draftState=this.stateManager.currentState},this.assignParticipantsToRoom=t=>{0!==this.selectedParticipants.length&&0!=this.assigningParticipants&&(this.stateManager.assignParticipantsToMeeting(this.selectedParticipants,t),this.draftState=this.stateManager.currentState,this.selectedParticipants=[],this.assigningParticipants=!1,this.setEphemeralStatus(this.t("breakout_rooms.ephemeral_status.participants_assigned")))},this.handleClose=(t,e)=>{t.emit({activeBreakoutRoomsManager:{active:!0}}),e.activeBreakoutRoomsManager={active:!0}},this.enableConfirmationModal=(t="start-breakout")=>{let e={active:!0,header:"breakout_rooms.confirm_modal.start_breakout.header",content:"breakout_rooms.confirm_modal.start_breakout.content",variant:"primary",cancelText:"breakout_rooms.confirm_modal.start_breakout.cancelText",ctaText:"breakout_rooms.confirm_modal.start_breakout.ctaText",onClick:()=>this.applyChanges(),onClose:this.handleClose};"close-breakout"===t&&(e={active:!0,header:"breakout_rooms.confirm_modal.close_breakout.header",content:"breakout_rooms.confirm_modal.close_breakout.content",variant:"danger",cancelText:"cancel",ctaText:"breakout_rooms.confirm_modal.close_breakout.ctaText",onClick:()=>this.closeBreakout(),onClose:this.handleClose}),this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!1},activeConfirmationModal:e}),r.s.activeBreakoutRoomsManager={active:!1},r.s.activeConfirmationModal=e},this.close=()=>{var t;this.stateManager.discardChanges(),null===(t=this.stateUpdate)||void 0===t||t.emit({activeBreakoutRoomsManager:{active:!1}}),r.s.activeBreakoutRoomsManager={active:!1}},this.applyChanges=async()=>{this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{applyingChanges:!0}),await this.stateManager.applyChanges(this.meeting),this.close(),this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{applyingChanges:!1})},this.loading=!1,this.roomConfig={rooms:2,step:"room-config",mode:"create",applyingChanges:!1},this.draftState=void 0,this.assigningParticipants=!1,this.selectedParticipants=[],this.ephemeralStatusText="",this.isDragMode=!1,this.meeting=void 0,this.states=void 0,this.iconPack=s.d,this.t=(0,o.u)()}onSelectedParticipantsChanged(t){t.length>0?this.assigningParticipants=!0:this.assigningParticipants=!1}connectedCallback(){this.permissions=this.meeting.self.permissions.connectedMeetings,this.meeting.connectedMeetings.on("stateUpdate",this.updateLocalState),this.meeting.connectedMeetings.on("changingMeeting",this.close),this.stateManager=new c.B,this.fetchRoomState()}disconnectedCallback(){this.meeting.connectedMeetings.off("stateUpdate",this.updateLocalState),this.meeting.connectedMeetings.off("changingMeeting",this.close)}async fetchRoomState(){this.loading=!0,await this.meeting.connectedMeetings.getConnectedMeetings(),this.loading=!1}setEphemeralStatus(t){this.ephemeralStatusText=t,setTimeout((()=>{this.ephemeralStatusText=""}),3e3)}onCreateRooms(){this.selectedParticipants=[],this.stateManager.addNewMeetings(this.roomConfig.rooms),this.draftState=this.stateManager.currentState,this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{step:"participants-config"})}onParticipantDelete(t){const{detail:e}=t,a=(0,n.p)(e);null!=a&&this.unassignParticipant(a)}toggleDragMode(t){this.isDragMode=t.detail}assignParticipantsRandomly(){0!==this.stateManager.unassignedParticipants.length&&(this.stateManager.assignParticipantsRandomly(),this.draftState=this.stateManager.currentState,this.setEphemeralStatus(this.t("breakout_rooms.ephemeral_status.participants_assigned_randomly")))}async joinRoom(t){const e=(0,n.p)(this.meeting.self);this.stateManager.assignParticipantsToMeeting([e],t),await this.applyChanges()}async closeBreakout(){this.stateManager.allConnectedMeetings.forEach((t=>this.stateManager.deleteMeeting(t.id))),await this.applyChanges()}updateSelectedParticipants(t){this.selectedParticipants=t.detail}updateAllParticipants(t){this.selectedParticipants=t.detail}getStatusText(){if(""!==this.ephemeralStatusText)return this.ephemeralStatusText;let t="";return"create"===this.roomConfig.mode&&(t=this.t("breakout_rooms.status.assign_multiple"),0!==this.selectedParticipants.length&&(t=this.t("breakout_rooms.status.select_room"))),t}getApproxDistribution(){const t=this.stateManager.unassignedParticipants.length/(this.roomConfig.rooms||1);return Math.max(1,Math.round(t))}deselectAll(){this.selectedParticipants=[]}async discardChanges(){this.stateManager.discardChanges(),await this.fetchRoomState(),this.setEphemeralStatus(this.t("breakout_rooms.ephemeral_status.changes_discarded"))}shouldShowOnlyRoomSwitcher(){return!1===this.permissions.canAlterConnectedMeetings}getPermittedRooms(){return this.permissions.canAlterConnectedMeetings||this.permissions.canSwitchConnectedMeetings?this.stateManager.allConnectedMeetings:this.stateManager.allConnectedMeetings.filter((t=>t.id===this.meeting.meta.roomName))}renderMainRoomMaybe(){return this.meeting.connectedMeetings.isActive&&this.permissions.canSwitchToParentMeeting?(0,i.h)("dyte-breakout-room-manager",{key:this.stateManager.currentState.parentMeeting.id,assigningParticipants:this.assigningParticipants,isDragMode:this.isDragMode,meeting:this.meeting,mode:this.roomConfig.mode,onParticipantsAdd:()=>this.assignParticipantsToRoom(this.stateManager.currentState.parentMeeting.id),onRoomJoin:()=>this.joinRoom(this.stateManager.currentState.parentMeeting.id),onUpdate:this.onRoomUpdate,states:this.states,room:Object.assign({},this.stateManager.currentState.parentMeeting),iconPack:this.iconPack,t:this.t}):null}renderRoomSwitcher(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:"room-switcher-container"},(0,i.h)("header",null,(0,i.h)("dyte-icon",{icon:this.iconPack.breakout_rooms}),(0,i.h)("span",null,this.t("breakout_rooms.join_breakout_header"))),(0,i.h)("div",{class:"rooms",ref:t=>this.selectorRef=t},this.renderMainRoomMaybe(),this.getPermittedRooms().map(((t,e)=>(0,i.h)("dyte-breakout-room-manager",{key:t.id,assigningParticipants:this.assigningParticipants,isDragMode:this.isDragMode,defaultExpanded:0===e,meeting:this.meeting,mode:this.roomConfig.mode,onDelete:()=>this.onRoomDelete(t.id),onParticipantsAdd:()=>this.assignParticipantsToRoom(t.id),onRoomJoin:()=>this.joinRoom(t.id),states:this.states,room:Object.assign({},t),iconPack:this.iconPack,t:this.t,allowDelete:!1}))))))}renderLoading(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:"loading-content"},(0,i.h)("dyte-spinner",{size:"xl"})))}renderRoomConfig(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:"room-config"},(0,i.h)("header",null,(0,i.h)("dyte-icon",{icon:this.iconPack.breakout_rooms}),(0,i.h)("span",null,this.t("breakout_rooms.room_config_header"))),(0,i.h)("div",{class:"create-room"},(0,i.h)("p",null,this.t("breakout_rooms.num_of_rooms")),(0,i.h)("dyte-counter",{value:this.roomConfig.rooms,minValue:1,iconPack:this.iconPack,t:this.t,onValueChange:t=>{this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{rooms:Math.max(+t.detail,1)})}})),(0,i.h)("span",{class:"distribution-hint"},`${this.t("breakout_rooms.approx")} `," ",(0,i.h)("em",null,this.getApproxDistribution()," ",this.t("breakout_rooms.participants_per_room"))," ",this.t("breakout_rooms.division_text")),(0,i.h)("footer",null,(0,i.h)("dyte-button",{kind:"button",iconPack:this.iconPack,t:this.t,size:"lg",title:this.t("create"),disabled:0===this.roomConfig.rooms,onClick:()=>this.onCreateRooms()},this.t("create")))))}render(){return this.loading?this.renderLoading():this.shouldShowOnlyRoomSwitcher()?this.renderRoomSwitcher():"room-config"===this.roomConfig.step?this.renderRoomConfig():(0,i.h)(i.H,null,(0,i.h)("div",{class:"participant-config-wrapper"},(0,i.h)("div",{class:"participant-config"},(0,i.h)("aside",{part:"menu"},(0,i.h)("header",null,this.t("breakout_rooms.assign_participants")),(0,i.h)("dyte-breakout-room-participants",{meeting:this.meeting,iconPack:this.iconPack,t:this.t,participantIds:this.stateManager.unassignedParticipants.map(n.p),selectedParticipantIds:this.selectedParticipants},(0,i.h)("dyte-tooltip",{label:this.t("breakout_rooms.shuffle_participants"),iconPack:this.iconPack,t:this.t,slot:"shuffle-button"},(0,i.h)("dyte-button",{disabled:"edit"===this.roomConfig.mode||0===this.stateManager.unassignedParticipants.length,iconPack:this.iconPack,t:this.t,kind:"button",variant:"secondary",size:"md",onClick:()=>this.assignParticipantsRandomly(),class:"shuffle-button br-primary-btn"},(0,i.h)("dyte-icon",{icon:this.iconPack.shuffle,iconPack:this.iconPack,t:this.t})))),0!==this.selectedParticipants.length&&(0,i.h)("div",{class:"participants-assign-actions"},(0,i.h)("span",null,`${this.selectedParticipants.length} ${this.t("breakout_rooms.selected")}`),(0,i.h)("dyte-button",{disabled:"edit"===this.roomConfig.mode,iconPack:this.iconPack,t:this.t,kind:"button",variant:"ghost",size:"md",onClick:()=>this.deselectAll(),class:"deselect-button color-danger"},this.t("breakout_rooms.deselect")))),(0,i.h)("div",{class:"assign-rooms"},(0,i.h)("div",{class:"row"},(0,i.h)("p",{class:"row-header"},this.t("breakout_rooms.rooms")," (",this.stateManager.allConnectedMeetings.length,")"),!this.assigningParticipants&&(0,i.h)("div",{class:"cta-buttons"},(0,i.h)("dyte-button",{kind:"button",variant:"secondary",iconPack:this.iconPack,t:this.t,class:"br-primary-btn"},(0,i.h)("div",{onClick:this.onAddNewRoom},(0,i.h)("dyte-icon",{icon:this.iconPack.add,iconPack:this.iconPack,t:this.t}),this.t("breakout_rooms.add_room"))),0!==this.stateManager.allConnectedMeetings.flatMap((t=>t.participants)).length&&(0,i.h)("dyte-button",{kind:"button",variant:"ghost",onClick:this.onUnassignAll,iconPack:this.iconPack,t:this.t},this.t("breakout_rooms.unassign_all")))),(0,i.h)("div",{class:"rooms",ref:t=>this.selectorRef=t},this.renderMainRoomMaybe(),this.getPermittedRooms().map(((t,e)=>(0,i.h)("dyte-breakout-room-manager",{key:t.id,assigningParticipants:this.assigningParticipants,isDragMode:this.isDragMode,defaultExpanded:0===e,meeting:this.meeting,mode:this.roomConfig.mode,onDelete:()=>this.onRoomDelete(t.id),onParticipantsAdd:()=>this.assignParticipantsToRoom(t.id),onRoomJoin:()=>this.joinRoom(t.id),onUpdate:this.onRoomUpdate,states:this.states,room:Object.assign({},t),iconPack:this.iconPack,t:this.t,allowDelete:this.stateManager.allConnectedMeetings.length>1}))),(0,i.h)("dyte-button",{kind:"button",variant:"secondary",iconPack:this.iconPack,t:this.t,onClick:this.onAddNewRoom,class:"add-room-jumbo-btn br-secondary-btn"},(0,i.h)("div",null,(0,i.h)("dyte-icon",{icon:this.iconPack.add,iconPack:this.iconPack,t:this.t}),(0,i.h)("span",null,this.t("breakout_rooms.add_room_brief"))))))),(0,i.h)("div",{class:"participant-config-actions"},(0,i.h)("div",{class:{"status-bar":!0,"ephemeral-status":""!==this.ephemeralStatusText}},""!==this.ephemeralStatusText&&(0,i.h)("dyte-icon",{icon:this.iconPack.checkmark,iconPack:this.iconPack,t:this.t}),this.getStatusText()),(0,i.h)("div",{class:"breakout-actions"},"create"===this.roomConfig.mode&&this.permissions.canAlterConnectedMeetings&&(0,i.h)("dyte-button",{size:"md",iconPack:this.iconPack,t:this.t,class:"start-breakout-button",onClick:()=>this.enableConfirmationModal("start-breakout")},this.t("breakout_rooms.start_breakout")),"edit"===this.roomConfig.mode&&this.stateManager.hasLocalChanges&&this.permissions.canAlterConnectedMeetings&&(0,i.h)("dyte-button",{size:"md",iconPack:this.iconPack,t:this.t,class:"color-danger",variant:"ghost",onClick:()=>this.discardChanges()},this.t("breakout_rooms.discard_changes")),"edit"===this.roomConfig.mode&&this.stateManager.hasLocalChanges&&this.permissions.canAlterConnectedMeetings&&(0,i.h)("dyte-button",{size:"md",iconPack:this.iconPack,t:this.t,class:"update-breakout-button",onClick:this.applyChanges},this.t("breakout_rooms.update_breakout")),"edit"===this.roomConfig.mode&&!this.stateManager.hasLocalChanges&&this.permissions.canAlterConnectedMeetings&&(0,i.h)("dyte-button",{size:"md",iconPack:this.iconPack,t:this.t,class:"close-breakout-button",onClick:()=>this.enableConfirmationModal("close-breakout")},this.t("breakout_rooms.close_breakout"))))))}static get watchers(){return{selectedParticipants:["onSelectedParticipantsChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.color-brand{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.color-danger{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.loading-content{height:var(--dyte-space-60, 240px);width:var(--dyte-space-96, 384px);padding:var(--dyte-space-9, 36px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;align-items:center;justify-content:center}.room-config{overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-96, 384px);padding-left:var(--dyte-space-9, 36px);padding-right:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-10, 40px);padding-bottom:var(--dyte-space-10, 40px)}header{margin-bottom:var(--dyte-space-8, 32px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);font-size:24px;font-weight:600}header dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}.create-room{margin-bottom:var(--dyte-space-4, 16px);display:flex;align-items:center;gap:var(--dyte-space-3, 12px);width:100%}.create-room p{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px}.distribution-hint{margin-bottom:var(--dyte-space-8, 32px);font-size:14px;font-weight:400;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.distribution-hint em{font-style:normal;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}footer{display:flex;flex-direction:row;vertical-align:middle;justify-content:center}footer dyte-button{width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}label{margin-bottom:var(--dyte-space-3, 12px);font-weight:400;color:rgb(var(--dyte-colors-text-1000, 255 255 255));opacity:0.4}.participant-config-wrapper{width:850px;height:595px;max-width:100%;max-height:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column}.participant-config-actions{display:flex;justify-content:space-between;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-5, 20px);padding-bottom:var(--dyte-space-5, 20px);border-bottom-right-radius:var(--dyte-border-radius-md, 8px);border-bottom-left-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.participant-config{display:flex;flex-grow:1;flex-direction:row;overflow:hidden}aside{box-sizing:border-box;display:flex;width:var(--dyte-space-96, 384px);flex-grow:1;flex-direction:column;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-4, 16px);border-right-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-right-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity))}aside header{margin-bottom:var(--dyte-space-4, 16px);width:100%;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);padding-top:var(--dyte-space-8, 32px);font-size:20px;font-weight:500;line-height:2rem}.shuffle-button{display:flex;flex-direction:row;align-items:center}.shuffle-button dyte-icon{height:var(--dyte-space-8, 32px)}.participants-assign-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:14px;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-2, 8px);margin-left:calc(var(--dyte-space-8, 32px) * -1);margin-right:calc(var(--dyte-space-4, 16px) * -1);padding-top:var(--dyte-space-0\\.5, 2px);padding-bottom:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.participants-assign-actions .deselect-button{height:var(--dyte-space-6, 24px)}.participants-assign-actions .deselect-button:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.assign-rooms{padding:var(--dyte-space-8, 32px);display:flex;width:100%;flex-direction:column}.assign-rooms .disabled{opacity:0.2}.assign-rooms .back{display:flex;cursor:pointer;flex-direction:row;align-items:center;justify-content:flex-start;padding:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-0, 0px);font-size:14px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.assign-rooms .back dyte-icon{height:var(--dyte-space-5, 20px)}.assign-rooms .row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}.assign-rooms .row-header{margin:var(--dyte-space-0, 0px);font-size:16px;line-height:2rem}.assign-rooms .cta-buttons{display:flex;align-items:center;justify-content:flex-start;gap:var(--dyte-space-2, 8px)}.assign-rooms .cta-buttons dyte-button div{display:flex;flex-direction:row;align-items:center}.assign-rooms .cta-buttons dyte-button div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.rooms{margin-bottom:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-1, 4px);display:flex;flex-grow:1;flex-direction:column;gap:var(--dyte-space-2, 8px);overflow-y:auto;max-height:500px}.rooms::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px)}.rooms::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.rooms::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.breakout-actions{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}.breakout-actions .start-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.breakout-actions .close-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}.breakout-actions .update-breakout-button{background-color:transparent;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity));border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}.status-bar{display:flex;align-items:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));width:var(--dyte-space-80, 320px)}.ephemeral-status{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.ephemeral-status dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.room-switcher-container{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));width:468px;padding:var(--dyte-space-8, 32px)}.add-room-jumbo-btn div{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.add-room-jumbo-btn div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.br-primary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-primary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}"}}]);