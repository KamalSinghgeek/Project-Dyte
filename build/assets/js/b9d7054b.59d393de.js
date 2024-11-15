"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[42076],{56940:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"customizations/custom-locale","title":"Customize Meeting Locale","description":"Dyte\'s UI Kit allows you to customize all the text within the video call interface. You can personalize the text to align with your specific locale needs.","source":"@site/docs/react-ui-kit/customizations/custom-locale.mdx","sourceDirName":"customizations","slug":"/customizations/custom-locale","permalink":"/react-ui-kit/customizations/custom-locale","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-ui-kit/customizations/custom-locale.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Customize Meeting Icons","permalink":"/react-ui-kit/customizations/custom-iconpack"},"next":{"title":"Release Notes","permalink":"/react-ui-kit/release-notes"}}');var o=n(74848),a=n(28453),s=n(74235),i=n(15947),c=n(16799);const l={sidebar_position:6},d="Customize Meeting Locale",u={},m=[{value:"Step 1: Integrate Dyte&#39;s web SDK into your web application",id:"step-1-integrate-dytes-web-sdk-into-your-web-application",level:2},{value:"Step 2: Customize the default language pack",id:"step-2-customize-the-default-language-pack",level:2},...c.RM];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:n,Head:t}=r;return n||h("Details",!0),t||h("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"customize-meeting-locale",children:"Customize Meeting Locale"})}),"\n",(0,o.jsx)(r.p,{children:"Dyte's UI Kit allows you to customize all the text within the video call interface. You can personalize the text to align with your specific locale needs."}),"\n",(0,o.jsx)(r.p,{children:"Customizing the locale involve the following steps:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"Integrate Dyte's web SDK into your web application"}),"\n",(0,o.jsx)(r.li,{children:"Customize the default language pack"}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"step-1-integrate-dytes-web-sdk-into-your-web-application",children:"Step 1: Integrate Dyte's web SDK into your web application"}),"\n",(0,o.jsxs)(n,{open:!0,children:[(0,o.jsx)("summary",{children:(0,o.jsx)(r.p,{children:"To get started with customizing the icons for your meetings, you need to first integrate Dyte's Web SDK into your web application."})}),(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"Install the package using npm or Yarn."}),"\n"]}),(0,o.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,o.jsx)(i.A,{value:"npm",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"npm install @dytesdk/react-ui-kit @dytesdk/react-web-core\n"})})}),(0,o.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"yarn add @dytesdk/react-ui-kit @dytesdk/react-web-core\n"})})}),(0,o.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"pnpm add @dytesdk/react-ui-kit @dytesdk/react-web-core\n"})})})]}),(0,o.jsxs)(r.ol,{start:"2",children:["\n",(0,o.jsxs)(r.li,{children:["Initialize the Dyte client using the ",(0,o.jsx)(r.code,{children:"useDyteClient()"})," hook. It returns an array with two values, the meeting object and a function to initialize the meeting."]}),"\n",(0,o.jsxs)(r.li,{children:["Create a meeting room using the ",(0,o.jsx)(r.a,{href:"/api#/operations/create_meeting",children:"Create Meeting API"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Generate an ",(0,o.jsx)(r.code,{children:"authToken"})," using the ",(0,o.jsx)(r.a,{href:"/api#/operations/add_participant",children:"Add Participant API"}),". An ",(0,o.jsx)(r.code,{children:"authToken"})," is a unique token that is used to identify a user in the meeting."]}),"\n",(0,o.jsxs)(r.li,{children:["Initialize the meeting using the ",(0,o.jsx)(r.code,{children:"initMeeting()"})," method exposed by ",(0,o.jsx)(r.code,{children:"useDyteClient"}),"."]}),"\n",(0,o.jsx)(r.li,{children:"Pass the meeting object to the UI Kit."}),"\n"]}),(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"DyteMeeting"})," component generates the default UI experience. Read more about how to customize the UI ",(0,o.jsx)(r.a,{href:"/react-ui-kit/basics/integrate",children:"here"}),"."]}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",children:"import { useDyteClient } from '@dytesdk/react-web-core';\r\nimport { DyteMeeting } from '@dytesdk/react-ui-kit';\r\n\r\nfunction App() {\r\n  const [meeting, initMeeting] = useDyteClient();\r\n\r\n  useEffect(() => {\r\n    initMeeting({\r\n      authToken: '<auth-token>',\r\n      defaults: {\r\n        audio: false,\r\n        video: true,\r\n      },\r\n    });\r\n  }, []);\r\n\r\n  return <DyteMeeting meeting={meeting} />;\r\n}\n"})})]}),"\n",(0,o.jsx)(r.h2,{id:"step-2-customize-the-default-language-pack",children:"Step 2: Customize the default language pack"}),"\n",(0,o.jsx)(r.p,{children:"Now that you've integrated Dyte SDK into your application successfully, let's quickly understand how you can customize the language pack for your application."}),"\n",(0,o.jsx)(r.p,{children:"Dyte's default language pack can be imported like so."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",children:"import { defaultLanguage, useLanguage } from '@dytesdk/react-ui-kit';\n"})}),"\n",(0,o.jsxs)(r.p,{children:["In order to replace Dyte's default locale set with your own, you can pass your own locale to the ",(0,o.jsx)(r.code,{children:"t"})," prop exposed by the UI components."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",children:"// Customise Dyte's default locale object\r\nconst myLanguagePack = useLanguage({\r\n  ...defaultLanguage,\r\n  'mute_all': 'Mute All Users',\r\n});\r\n\r\n<DyteMeeting meeting={meeting!} t={myLanguagePack} />;\n"})}),"\n","\n",(0,o.jsx)(c.Ay,{}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("title",{children:"React UI Kit Customize Meeting Locale"}),(0,o.jsx)("meta",{name:"description",content:"Learn how to customize meeting locale in React with Dyte's features. Follow our guide for effective customization and localization."})]})]})}function g(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function h(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16799:(e,r,n)=>{n.d(r,{Ay:()=>i,RM:()=>a});var t=n(74848),o=n(28453);const a=[{value:"Dyte&#39;s Default Language Reference",id:"dytes-default-language-reference",level:2}];function s(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"dytes-default-language-reference",children:"Dyte's Default Language Reference"}),"\n",(0,t.jsx)(r.p,{children:"Here is the default language pack offered by Dyte:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n  "about_call": "About Call",\r\n  "screen": "Screen",\r\n  "camera": "Camera",\r\n  "leave": "Leave",\r\n  "dismiss": "Dismiss",\r\n  "logo": "Logo",\r\n  "page": "Page",\r\n  "more": "More",\r\n  "page.prev": "Previous Page",\r\n  "page.next": "Next Page",\r\n  "layout": "Layout",\r\n  "layout.auto": "Auto Layout",\r\n  "settings": "Settings",\r\n  "file": "File",\r\n  "image": "Image",\r\n  "connection": "Connection",\r\n  "leave_confirmation": "Are you sure you want to leave the call?",\r\n  "cancel": "Cancel",\r\n  "yes": "Yes",\r\n  "(you)": "(you)",\r\n  "you": "You",\r\n  "everyone": "Everyone",\r\n  "to": "To",\r\n  "mute": "Mute",\r\n  "kick": "Kick",\r\n  "pin": "Pin",\r\n  "pinned": "Pinned",\r\n  "accept": "Accept",\r\n  "unpin": "Unpin",\r\n  "pip_on": "Show PiP",\r\n  "pip_off": "Hide PiP",\r\n  "viewers": "Viewers",\r\n  "join": "Join",\r\n  "joined": "Joined",\r\n  "create": "Create",\r\n  "close": "Close",\r\n  "ask": "Ask",\r\n  "type": "Type",\r\n  "activate": "Activate",\r\n  "mic_off": "Mic Off",\r\n  "disable_mic": "Disable Mic",\r\n  "mic_on": "Mic On",\r\n  "enable_mic": "Enable Mic",\r\n  "audio": "Audio",\r\n  "test": "Test",\r\n  "mute_all": "Mute all",\r\n  "mute_all.description": "Everyone in the meeting will be muted.",\r\n  "mute_all.header": "Are you sure?",\r\n  "mute_all.allow_unmute": "Allow others to unmute",\r\n  "video_off": "Video Off",\r\n  "disable_video": "Disable Video",\r\n  "video_on": "Video On",\r\n  "enable_video": "Enable Video",\r\n  "video": "Video",\r\n  "offline": "You\'re offline",\r\n  "offline.description": "Please ensure that you are connected to the internet.",\r\n  "disconnected": "You haven\'t joined the meeting.",\r\n  "disconnected.description": "Please join the meeting in order to see and interact with other participants.",\r\n  "participants": "Participants",\r\n  "participants.errors.empty_results": "Couldn\'t find a participant with the specified name or ID.",\r\n  "participants.empty_list": "It looks like nobody is here.",\r\n  "participants.turn_off_video": "Turn off video",\r\n  "polls": "Polls",\r\n  "polls.by": "Poll by",\r\n  "polls.question": "Poll Question",\r\n  "polls.question.placeholder": "What is your poll for?",\r\n  "polls.answers": "Answers",\r\n  "polls.option": "Add an option.",\r\n  "polls.option.placeholder": "Enter an option",\r\n  "polls.results.anon": "Anonymous",\r\n  "polls.results.hide": "Hide results before voting",\r\n  "polls.create": "Create Poll",\r\n  "polls.cancel": "Cancel Poll Creation",\r\n  "polls.errors.question_required": "Question is required.",\r\n  "polls.errors.empty_option": "Empty options not allowed.",\r\n  "screenshare": "Screen Share",\r\n  "screenshare.min_preview": "Minimize Preview",\r\n  "screenshare.max_preview": "Expand Preview",\r\n  "screenshare.shared": "Your screen is being shared.",\r\n  "screenshare.start": "Share Screen",\r\n  "screenshare.stop": "Stop Sharing",\r\n  "screenshare.error.unknown": "An error occured while starting screenshare.",\r\n  "screenshare.error.max_count": "Maximum screen share limit reached.",\r\n  "plugins": "Plugins",\r\n  "perm_denied": "Permission denied by browser.",\r\n  "perm_denied.audio": "Mic Permission denied by browser",\r\n  "perm_denied.video": "Camera Permission denied by browser",\r\n  "perm_denied.screenshare": "Screenshare Permission denied by browser",\r\n  "perm_denied.audio.chrome.message": "Under Chrome settings, navigate to \'Privacy and Security > Site Settings > Permissions\'. Select \'Microphone\', provide permission and reload this application.",\r\n  "perm_denied.video.chrome.message": "Under Chrome settings, navigate to \'Privacy and Security > Site Settings > Permissions\'. Select \'Camera\', provide permission and reload this application.",\r\n  "perm_denied.screenshare.chrome.message": "Under Chrome settings, navigate to \'Privacy and Security > Site Settings > Permissions\'. Select \'Screenshare\', provide permission and reload this application.",\r\n  "perm_denied.audio.safari.message": "Under Safari settings, navigate to \'Websites > Microphone\', provide permission and reload this application.",\r\n  "perm_denied.video.safari.message": "Under Safari settings, navigate to \'Websites > Camera\', provide permission and reload this application.",\r\n  "perm_denied.screenshare.safari.message": "Under Safari settings, navigate to \'Websites > Screenshare\', provide permission and reload this application.",\r\n  "perm_denied.audio.edge.message": "Under Edge settings, navigate to \'Site Permissions > Microphone\', provide permission and reload this application.",\r\n  "perm_denied.video.edge.message": "Under Edge settings, navigate to \'Site Permissions > Camera\', provide permission and reload this application.",\r\n  "perm_denied.screenshare.edge.message": "Under Edge settings, navigate to \'Site Permissions > Screenshare\', provide permission and reload this application.",\r\n  "perm_denied.audio.microsoft edge.message": "Under Edge settings, navigate to \'Site Permissions > Microphone\', provide permission and reload this application.",\r\n  "perm_denied.video.microsoft edge.message": "Under Edge settings, navigate to \'Site Permissions > Camera\', provide permission and reload this application.",\r\n  "perm_denied.screenshare.microsoft edge.message": "Under Edge settings, navigate to \'Site Permissions > Screenshare\', provide permission and reload this application.",\r\n  "perm_denied.audio.firefox.message": "Under Firefox settings, navigate to \'Privacy and Security > Permissions > Microphone\', provide permission and reload this application.",\r\n  "perm_denied.video.firefox.message": "Under Firefox settings, navigate to \'Privacy and Security > Permissions > Camera\', provide permission and reload this application.",\r\n  "perm_denied.screenshare.firefox.message": "Under Firefox settings, navigate to \'Privacy and Security > Permissions > Screenshare\', provide permission and reload this application.",\r\n  "perm_denied.audio.others.message": "From your browser settings, enable \'Microphone\' permissions and reload this application.",\r\n  "perm_denied.video.others.message": "From your browser settings, enable \'Camera\' permissions and reload this application.",\r\n  "perm_denied.screenshare.others.message": "From your browser settings, enable \'Screenshare\' permissions and reload this application.",\r\n  "perm_sys_denied": "Permission denied by system",\r\n  "perm_sys_denied.audio": "Mic permission denied by system",\r\n  "perm_sys_denied.video": "Camera permission denied by system",\r\n  "perm_sys_denied.screenshare": "Screenshare permission denied by system",\r\n  "perm_sys_denied.audio.macos.message": "Open Apple Menu, Navigate to \'System Settings > Privacy & Security > Microphone\'. Allow access to your browser and reload this application.",\r\n  "perm_sys_denied.video.macos.message": "Open Apple Menu, Navigate to \'System Settings > Privacy & Security > Camera\'. Allow access to your browser and reload this application.",\r\n  "perm_sys_denied.screenshare.macos.message": "Open Apple Menu, Navigate to \'System Settings > Privacy & Security > Screenshare\'. Allow access to your browser and reload this application.",\r\n  "perm_sys_denied.audio.ios.message": "On your iPhone, navigate to \'Settings > Privacy > Microphone\', allow access to your browser and reload this application.",\r\n  "perm_sys_denied.video.ios.message": "On your iPhone, navigate to \'Settings > Privacy > Camera\', allow access to your browser and reload this application.",\r\n  "perm_sys_denied.screenshare.ios.message": "On your iPhone, navigate to \'Settings > Privacy > Screenshare\', allow access to your browser and reload this application.",\r\n  "perm_sys_denied.audio.windows.message": "Go to windows settings, select \'Settings > Privacy > Microphone\'. Allow permissions to your browser and reload this application.",\r\n  "perm_sys_denied.video.windows.message": "Go to windows settings, select \'Settings > Privacy > Camera\'. Allow permissions to your browser and reload this application.",\r\n  "perm_sys_denied.screenshare.windows.message": "Go to windows settings, select \'Settings > Privacy > Screenshare\'. Allow permissions to your browser and reload this application.",\r\n  "perm_sys_denied.audio.android.message": "On you device, navigate to \'Settings > Apps\'. Select your browser, allow Microphone permissions and reload this application.",\r\n  "perm_sys_denied.video.android.message": "On you device, navigate to \'Settings > Apps\'. Select your browser, allow Camera permissions and reload this application.",\r\n  "perm_sys_denied.screenshare.android.message": "On you device, navigate to \'Settings > Apps\'. Select your browser, allow Screenshare permissions and reload this application.",\r\n  "perm_sys_denied.audio.others.message": "Navigate to your system settings. Allow \'Microphone\' permissions for your browser and reload this application.",\r\n  "perm_sys_denied.video.others.message": "Navigate to your system settings. Allow \'Camera\' permissions for your browser and reload this application.",\r\n  "perm_sys_denied.screenshare.others.message": "Navigate to your system settings. Allow \'Screenshare\' permissions for your browser and reload this application.",\r\n  "perm_could_not_start": "Could not capture device.",\r\n  "perm_could_not_start.audio": "Unable to start your Microphone",\r\n  "perm_could_not_start.video": "Unable to start your Camera",\r\n  "perm_could_not_start.screenshare": "Unable to start your Screenshare",\r\n  "perm_could_not_start.audio.message": "Looks like the system could not capture your microphone. Please restart your device or upgrade your browser to fix this.",\r\n  "perm_could_not_start.video.message": "Looks like the system could not capture your camera. Please restart your device or upgrade your browser to fix this.",\r\n  "perm_could_not_start.screenshare.message": "Looks like the system could not capture your screenshare. Please restart your device or upgrade your browser to fix this.",\r\n  "full_screen": "Full Screen",\r\n  "full_screen.exit": "Exit Full Screen",\r\n  "waitlist.header_title": "Waiting",\r\n  "waitlist.body_text": "You are in the waiting room, the host will let you in soon.",\r\n  "waitlist.deny_request": "Deny request",\r\n  "waitlist.accept_request": "Accept request",\r\n  "waitlist.accept_all": "Accept all",\r\n  "stage_request.header_title": "Join Stage Requests",\r\n  "stage_request.deny_request": "Deny request",\r\n  "stage_request.accept_request": "Accept request",\r\n  "stage_request.accept_all": "Accept all",\r\n  "stage_request.deny_all": "Deny all",\r\n  "stage_request.approval_pending": "Pending",\r\n  "stage_request.denied": "Denied",\r\n  "stage_request.request": "Join stage",\r\n  "stage_request.requested": "Requested",\r\n  "stage_request.cancel_request": "Cancel request",\r\n  "stage_request.leave_stage": "Leave stage",\r\n  "stage_request.request_tip": "Request to join the discussion",\r\n  "stage_request.leave_tip": "Leave the stage",\r\n  "stage_request.pending_tip": "Request pending",\r\n  "stage_request.denied_tip": "Rejected request",\r\n  "stage.empty_host": "The stage is empty",\r\n  "stage.empty_host_summary": "You are off stage. You can manage stage request from the participants tab.",\r\n  "stage.empty_viewer": "There is no one on stage",\r\n  "stage.remove_from_stage": "Remove from stage",\r\n  "stage.invited_notification": "has been invited to join stage.",\r\n  "stage.add_to_stage": "Invite to stage",\r\n  "stage.join_title": "Join Stage",\r\n  "stage.join_summary": "You are about to join the stage, your video & audio as shown above will be visible to all participants.",\r\n  "stage.join_cancel": "Cancel",\r\n  "stage.join_confirm": "Join",\r\n  "setup_screen.join_in_as": "Join in as",\r\n  "setup_screen.joining_as": "Joining as",\r\n  "setup_screen.your_name": "Your name",\r\n  "stage.reconnecting": "Reconnecting...",\r\n  "recording.label": "REC",\r\n  "recording.indicator": "This meeting is being recorded.",\r\n  "recording.started": "This meeting is being recorded.",\r\n  "recording.stopped": "Recording for this meeting has been stopped.",\r\n  "recording.paused": "Recording for this meeting has been paused.",\r\n  "recording.error.start": "Error while starting recording.",\r\n  "recording.error.stop": "Error while stopping recording",\r\n  "recording.error.resume": "Error while resuming recording",\r\n  "recording.start": "Start Recording",\r\n  "recording.stop": "Stop Recording",\r\n  "recording.resume": "Resume Recording",\r\n  "recording.starting": "Starting",\r\n  "recording.stopping": "Stopping",\r\n  "recording.loading": "Loading",\r\n  "recording.idle": "Record",\r\n  "audio_playback": "Play Audio",\r\n  "audio_playback.title": "Allow Audio Playback",\r\n  "audio_playback.description": "In order to play audio properly on your device, click the button below.",\r\n  "breakout_rooms": "Breakout Rooms",\r\n  "breakout_rooms.room_config_header": "Create Breakout",\r\n  "breakout_rooms.join_breakout_header": "Join Breakout",\r\n  "breakout_rooms.empty": "Nobody here yet.",\r\n  "breakout_rooms.delete": "Delete Room",\r\n  "breakout_rooms.switch": "Switch",\r\n  "breakout_rooms.main_room": "Main Room",\r\n  "breakout_rooms.shuffle_participants": "Shuffle Participants",\r\n  "breakout_rooms.deselect": "Deselect",\r\n  "breakout_rooms.selected": "selected",\r\n  "breakout_rooms.num_of_rooms": "No. of Rooms",\r\n  "breakout_rooms.approx": "Approx.",\r\n  "breakout_rooms.participants_per_room": "participants/room",\r\n  "breakout_rooms.division_text": "when equally divided.",\r\n  "breakout_rooms.start_breakout": "Start Breakout",\r\n  "breakout_rooms.close_breakout": "Close Breakout",\r\n  "breakout_rooms.update_breakout": "Update Breakout",\r\n  "breakout_rooms.discard_changes": "Discard Changes",\r\n  "breakout_rooms.room": "Room",\r\n  "breakout_rooms.rooms": "Rooms",\r\n  "breakout_rooms.room_name": "Room Name",\r\n  "breakout_rooms.edit_room_name": "Edit Room Name",\r\n  "breakout_rooms.save_room_name": "Save Room Name",\r\n  "breakout_rooms.add_room": "Add",\r\n  "breakout_rooms.add_room_brief": "Add Room",\r\n  "breakout_rooms.select_all": "Select all",\r\n  "breakout_rooms.unassign_all": "Unassign all",\r\n  "breakout_rooms.assign": "Assign",\r\n  "breakout_rooms.assign_participants": "Assign Participants",\r\n  "breakout_rooms.none_assigned": "No participants assigned yet",\r\n  "breakout_rooms.drag_drop_participants": "Drag and drop participants",\r\n  "breakout_rooms.click_drop_participants": "Click here to assign",\r\n  "breakout_rooms.status.assign_multiple": "Assign multiple participants at once by clicking and selecting them",\r\n  "breakout_rooms.status.select_room": "Select a room to assign",\r\n  "breakout_rooms.ephemeral_status.participants_assigned": "Participants assigned",\r\n  "breakout_rooms.ephemeral_status.participants_assigned_randomly": "Participants assigned randomly",\r\n  "breakout_rooms.ephemeral_status.changes_discarded": "Changes discarded",\r\n  "breakout_rooms.confirm_modal.start_breakout.header": "Start breakout rooms?",\r\n  "breakout_rooms.confirm_modal.start_breakout.content": "Once started, all participants will be moved to their assigned rooms.",\r\n  "breakout_rooms.confirm_modal.start_breakout.cancelText": "No, go back",\r\n  "breakout_rooms.confirm_modal.start_breakout.ctaText": "Yes, start",\r\n  "breakout_rooms.confirm_modal.close_breakout.header": "Close breakout rooms?",\r\n  "breakout_rooms.confirm_modal.close_breakout.content": "All breakout rooms will be closed & participants will be moved back to the main room.",\r\n  "breakout_rooms.confirm_modal.close_breakout.ctaText": "Yes, close breakout",\r\n  "breakout_rooms.move_reason.started_msg": "Starting breakout rooms...",\r\n  "breakout_rooms.move_reason.started_desc": "You are being moved to your assigned room",\r\n  "breakout_rooms.move_reason.closed_msg": "Closing Breakout rooms...",\r\n  "breakout_rooms.move_reason.closed_desc": "You are being moved back to the main room",\r\n  "breakout_rooms.move_reason.switch_room": "Joining Breakout Room...",\r\n  "breakout_rooms.move_reason.switch_main_room": "Joining Main Room...",\r\n  "breakout_rooms.all_assigned": "All participants have been assigned",\r\n  "breakout_rooms.empty_main_room": "No more participants in the main room.",\r\n  "breakout_rooms.leave_confirmation": "Are you sure you want to leave the call? You are in a breakout room, you can join the main room too.",\r\n  "breakout_rooms.leave_confirmation.main_room_btn": "Go back to main room",\r\n  "ai": "AI",\r\n  "ai.meeting_ai": "MeetingAI",\r\n  "ai.home": "Home",\r\n  "ai.transcriptions": "Transcriptions",\r\n  "ai.personal": "Personal",\r\n  "ai.caption_view": "Caption View",\r\n  "ai.chat.tooltip": "This conversation will just be visible to you and not to others in the call.",\r\n  "ai.chat.summerise": "Hey AI, summarise this call",\r\n  "ai.chat.agenda": "Hey AI, what is today\'s agenda?",\r\n  "search": "Search",\r\n  "search.could_not_find": "Couldn\'t find a participant with the specified name or ID.",\r\n  "search.empty": "It looks like nobody is here.",\r\n  "end": "End Meeting",\r\n  "end.all": "End meeting for all",\r\n  "ended": "The meeting ended.",\r\n  "ended.rejected": "Your request to join the meeting was denied.",\r\n  "ended.left": "You left the meeting.",\r\n  "ended.kicked": "You were removed from the meeting.",\r\n  "ended.disconnected": "The call ended because the connection was lost.",\r\n  "ended.network": "Please check your internet connection and try again.",\r\n  "network": "Network",\r\n  "network.reconnecting": "Connection lost. Trying to reconnect...",\r\n  "network.delay": "Taking too long to reconnect...",\r\n  "network.delay_extended": "Taking too long to reconnect. Please check your network connection.",\r\n  "network.restored": "Connection restored",\r\n  "network.lost": "Connection lost",\r\n  "network.lost_extended": "Connection lost. Please check your network connection.",\r\n  "network.disconnected": "Could not reconnect. Please leave the meeting and try refreshing the window.",\r\n  "network.leaving": "Automatically leaving the meeting in 10 seconds.",\r\n  "livestream": "Livestream",\r\n  "livestream.indicator": "This meeting is being livestreamed.",\r\n  "livestream.skip": "Skip to Live",\r\n  "livestream.idle": "Waiting to go live.",\r\n  "livestream.starting": "Livestream is starting...",\r\n  "livestream.stopping": "Livestream is stopping...",\r\n  "livestream.error.not_supported": "Player not supported.",\r\n  "livestream.error.not_found": "Playback URL not found.",\r\n  "livestream.error.unknown": "An unknown error occured.",\r\n  "livestream.error.sync": "Could not sync livestream please try again later.",\r\n  "livestream.error.start": "Error while starting livestream.",\r\n  "livestream.error.stop": "Error while stopping livestream.",\r\n  "livestream.go_live": "Go Live",\r\n  "livestream.end_live": "End Live",\r\n  "livestream.error": "Error",\r\n  "cta.help": "Need help on how to do this?",\r\n  "cta.continue": "Continue as it is",\r\n  "cta.reload": "Reload",\r\n  "cta.confirmation": "Are you sure?",\r\n  "remote_access.empty": "There are no remote requests, yet.",\r\n  "remote_access.requests": "The following people have requested remote control to your screen share.",\r\n  "remote_access.allow": "Please select whom you want to give access to.",\r\n  "remote_access.grant": "Grant acess",\r\n  "remote_access.indicator": "Any plugin or screenshare you switch to will sync the change across the meeting",\r\n  "chat": "Chat",\r\n  "chat.new": "New",\r\n  "chat.new_channel": "Create new channel",\r\n  "chat.channel_name": "Enter channel name",\r\n  "chat.member_name": "Enter member name",\r\n  "chat.add_members": "Add members",\r\n  "chat.delete_msg": "Delete",\r\n  "chat.edit_msg": "Edit",\r\n  "chat.send_msg": "Send message",\r\n  "chat.send_attachment": "Drop files/images to send",\r\n  "chat.send_img": "Send an image",\r\n  "chat.send_file": "Send a file",\r\n  "chat.send_emoji": "Send an emoji",\r\n  "chat.update_msg": "Update message",\r\n  "chat.channel_members": "Channel Members",\r\n  "chat.img.loading": "Loading image",\r\n  "chat.error.img_not_found": "Image not found",\r\n  "chat.error.empty_results": "Couldn\'t find a member with the specified name.",\r\n  "chat.img.shared_by": "Shared by",\r\n  "chat.reply": "Reply",\r\n  "chat.message_placeholder": "Message..",\r\n  "chat.click_to_send": "Click to send as message",\r\n  "chat.search_msgs": "Search messages",\r\n  "chat.search_conversations": "Search conversations",\r\n  "chat.start_conversation": "Start a conversation..",\r\n  "chat.empty_search": "No messages found",\r\n  "chat.empty_channel": "Send a message to get started",\r\n  "chat.cancel_upload": "Cancel upload",\r\n  "chat.view_chats": "View chats",\r\n  "chat.everyone": "everyone",\r\n  "chat.pinned_msgs": "Pinned messages",\r\n  "chat.toggle_pinned_msgs": "Toggle pinned messages",\r\n  "date.today": "Today",\r\n  "date.yesteday": "Yesterday",\r\n  "date.sunday": "Sunday",\r\n  "date.monday": "Monday",\r\n  "date.tuesday": "Tuesday",\r\n  "date.wednesday": "Wednesday",\r\n  "date.thursday": "Thursday",\r\n  "date.friday": "Friday",\r\n  "date.saturday": "Saturday",\r\n  "list.empty": "No items found",\r\n  "grid.listening": "Listening",\r\n  "transcript.off": "Turn off Transcripts",\r\n  "transcript.on": "Turn on Transcripts",\r\n  "settings.notification_sound": "Notification sound",\r\n  "settings.microphone_input": "Microphone (input)",\r\n  "settings.speaker_output": "Speaker (output)",\r\n  "settings.mirror_video": "Mirror my Video",\r\n  "settings.camera_off": "Camera is off",\r\n  "dialog.close": "Close dialog",\r\n  "notifications.joined": "just joined",\r\n  "notifications.left": "left",\r\n  "notifications.requesting_to_join_meeting": "is requesting to join the meeting",\r\n  "notifications.requested_to_join_stage": "has requested to join stage",\r\n  "notifications.joined_stage": "has joined stage",\r\n  "notifications.request_to_join_accepted": "Request to join accepted",\r\n  "notifications.request_to_join_rejected": "Request to join rejected",\r\n  "notifications.accept": "Accept",\r\n  "notifications.new_poll_created_by": "New poll created by",\r\n  "notifications.connected_to": "Connected to",\r\n  "notifications.plugin_switched_to": "Plugin switched to",\r\n  "notifications.remote_control_requested": "has requested for remote control",\r\n  "notifications.remote_control_request_sent": "Sent remote control request to",\r\n  "notifications.remote_control_request_accepted": "has granted remote control",\r\n  "notifications.remote_control_granted": "Granted remote control to",\r\n  "notifications.remote_control_terminated": "Existing remote control has been terminated"\r\n}\n'})})]})}function i(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},15947:(e,r,n)=>{n.d(r,{A:()=>s});var t=n(96540),o=n(18215);const a={tabItem:"tabItem_Ymn6"};function s({children:e,hidden:r,className:n}){return t.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,n),hidden:r},e)}},74235:(e,r,n)=>{n.d(r,{A:()=>P});var t=n(96540),o=n(18215),a=n(52204),s=n(56347),i=n(13321),c=n(57641),l=n(73094),d=n(57237);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function m(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function p(e){var r,n;return null!==(n=null===(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function g(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=r?r:function(e){return p(e).map((({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t})))}(n);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h({value:e,tabValues:r}){return r.some((r=>r.value===e))}function _({queryString:e=!1,groupId:r}){const n=(0,s.W6)(),o=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),a=(0,c.aZ)(o),i=(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace(m(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}({},n.location),{search:r.toString()}))}),[o,n]);return[a,i]}function y(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,a=g(e),[s,c]=(0,t.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const t=null!==(n=r.find((e=>e.default)))&&void 0!==n?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[l,u]=_({queryString:n,groupId:o}),[m,p]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,o]=(0,d.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:o}),y=(()=>{const e=null!=l?l:m;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{y&&c(y)}),[y]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var b=n(12075);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function w(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){v(e,r,n[r])}))}return e}function k(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function j({className:e,block:r,selectedValue:n,selectValue:s,tabValues:i}){const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),o=i[t].value;o!==n&&(l(r),s(o))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;var n;r=null!==(n=c[t])&&void 0!==n?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;var t;r=null!==(t=c[n])&&void 0!==t?t:c[c.length-1];break}}null==r||r.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},e)},i.map((({value:e,label:r,attributes:a})=>t.createElement("li",k(w({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:u,onClick:d},a),{className:(0,o.A)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===e})}),null!=r?r:e))))}function S({lazy:e,children:r,selectedValue:n}){const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return t.createElement("div",{className:"margin-top--md"},a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function x(e){const r=y(e);return t.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},t.createElement(j,w({},r,e)),t.createElement(S,w({},r,e)))}function P(e){const r=(0,b.A)();return t.createElement(x,w({key:String(r)},e),p(e.children))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(96540);const o={},a=t.createContext(o);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);