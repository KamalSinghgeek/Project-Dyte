"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[80980],{42865:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"local-user/introduction","title":"Introduction","description":"Learn about the local user concept in Flutter with Dyte\'s documentation. Follow our guide for a smooth introduction and integration.","source":"@site/docs/flutter-core/local-user/introduction.mdx","sourceDirName":"local-user","slug":"/local-user/introduction","permalink":"/flutter-core/local-user/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/flutter-core/local-user/introduction.mdx","tags":[{"inline":true,"label":"flutter-core","permalink":"/flutter-core/tags/flutter-core"},{"inline":true,"label":"local-user","permalink":"/flutter-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/flutter-core/tags/self"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Introduction","description":"Learn about the local user concept in Flutter with Dyte\'s documentation. Follow our guide for a smooth introduction and integration.","sidebar_position":1,"tags":["flutter-core","local-user","self"]},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/flutter-core/introduction"},"next":{"title":"Events","permalink":"/flutter-core/local-user/events"}}');var t=i(74848),l=i(28453);const o={title:"Introduction",description:"Learn about the local user concept in Flutter with Dyte's documentation. Follow our guide for a smooth introduction and integration.",sidebar_position:1,tags:["flutter-core","local-user","self"]},a="Introduction - Local User",s={},d=[{value:"Properties",id:"properties",level:2},{value:"Change default audio / video settings",id:"change-default-audio--video-settings",level:2},{value:"Turn on audio/video tracks after initializing the client",id:"turn-on-audiovideo-tracks-after-initializing-the-client",level:2},{value:"Change the name of the local user",id:"change-the-name-of-the-local-user",level:2},{value:"Mute/Unmute microphone",id:"muteunmute-microphone",level:2},{value:"Enable/Disable camera",id:"enabledisable-camera",level:2},{value:"Switch camera between sources",id:"switch-camera-between-sources",level:2},{value:"Enable / Disable Screen share",id:"enable--disable-screen-share",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction---local-user",children:"Introduction - Local User"})}),"\n",(0,t.jsxs)(n.p,{children:["The local user in the ",(0,t.jsx)(n.code,{children:"dyteMobileClient"})," object has a set of methods and properties related to media controls. These can be accessed using the identifier localUser."]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.p,{children:"Here is a list of properties that local user provides:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"}),": ID of the participant pertaining to local user. (aka ",(0,t.jsx)(n.code,{children:"peerId"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"userId"}),": The ",(0,t.jsx)(n.code,{children:"userId"})," of the participant."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),": Contains Name of the local user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"picture"}),": Link to the url of the participant"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"clientSpecificId"}),": Identifier provided by the developer while adding the\r\nparticipant."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"flags"}),": Type ",(0,t.jsx)(n.code,{children:"ParticipantFlags"})," and it contains two boolean values","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"recorder"}),": if the participant is recorder"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hidden"}),": if the participant is hidden"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"audioEnabled"}),": Boolean value indicating if the audio currently enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"videoEnabled"}),": Boolean value indicating if the video currently enabled."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Local user properties can be fetched via ",(0,t.jsx)(n.code,{children:"localUser"})," getter on the ",(0,t.jsx)(n.code,{children:"dyteClient"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"final selfUser = dyteClient.localUser;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"change-default-audio--video-settings",children:"Change default audio / video settings"}),"\n",(0,t.jsxs)(n.p,{children:["By default as soon as you join the meeting, Dyte SDK will produce your video and\r\naudio streams. To change this behaviour, use the ",(0,t.jsx)(n.code,{children:"audioEnabled"})," & ",(0,t.jsx)(n.code,{children:"videoEnabled"}),"\r\nparameter"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",metastring:"{4,5}",children:"final meetingInfo = DyteMeetingInfoV2(\r\n  roomName = MEETING_ROOM_NAME,\r\n  authToken = AUTH_TOKEN,\r\n  audioEnabled = false,\r\n  videoEnabled = true\r\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"turn-on-audiovideo-tracks-after-initializing-the-client",children:"Turn on audio/video tracks after initializing the client"}),"\n",(0,t.jsxs)(n.p,{children:["If audio and video tracks are disabled during the ",(0,t.jsx)(n.code,{children:"DyteMobileClient"}),"\r\ninitialization process. You can setup the audio and video tracks by simply\r\ncalling ",(0,t.jsx)(n.code,{children:"enableAudio()"})," and ",(0,t.jsx)(n.code,{children:"enableVideo()"})," like below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"dyteClient.localUser.enableAudio();\r\ndyteClient.localUser.enableVideo();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"change-the-name-of-the-local-user",children:"Change the name of the local user"}),"\n",(0,t.jsxs)(n.p,{children:["Change the user's name by calling ",(0,t.jsx)(n.code,{children:"setDisplayName"})," method. The changed name will\r\nreflect across all participants ONLY if the change happens before joining the\r\nmeeting. This is only possible when the user has the permission to change the name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:'if(dyteClient.permissions.miscellaneous.canEditDisplayName)\r\n{\r\n  dyteClient.localUser.setDisplayName("New Name");\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"muteunmute-microphone",children:"Mute/Unmute microphone"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"// Mute Audio\r\ndyteClient.localUser.disableAudio();\r\n\r\n// Unmute Audio\r\ndyteClient.localUser.enableAudio();\r\n\r\n// Get current status\r\nfinal isAudioEnabled = dyteClient.localUser.audioEnabled;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"enabledisable-camera",children:"Enable/Disable camera"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"// Disable Video\r\ndyteClient.localUser.disableVideo();\r\n\r\n// Enable Video\r\ndyteClient.localUser.enableVideo();\r\n\r\n// Get current status\r\nfinal isVideoEnabled = dyteClient.localUser.videoEnabled;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"switch-camera-between-sources",children:"Switch camera between sources"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"// switch camera\r\ndyteClient.localUser.switchCamera();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"enable--disable-screen-share",children:"Enable / Disable Screen share"}),"\n",(0,t.jsxs)(n.admonition,{title:"Note",type:"tip",children:[(0,t.jsx)(n.h3,{id:"android",children:"Android"}),(0,t.jsx)(n.p,{children:"To use screenshare on Android devices running Android API 14 and above, you will need to declare the following permission in your app's AndroidManifest.xml."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<uses-permission android:name="android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION" />'})}),(0,t.jsxs)(n.p,{children:["Adding above permission will require you to do extra steps on Google Play Console while submitting the app. For more information please refer ",(0,t.jsx)(n.a,{href:"https://support.google.com/googleplay/android-developer/answer/13392821?hl=en#declare",children:"this"}),"."]}),(0,t.jsx)(n.h3,{id:"ios",children:"iOS"}),(0,t.jsxs)(n.p,{children:["Refer to screenshare setup for iOS ",(0,t.jsx)(n.a,{href:"/flutter-core/local-user/screen-share-iOS-guide",children:"here"})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"// Enable Screenshare\r\ndyteClient.localUser.enableScreenshare();\r\n\r\n// Disable Screenshare\r\ndyteClient.localUser.disableScreenshare();\n"})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("title",{children:"Flutter Core Introduction"}),(0,t.jsx)("meta",{name:"description",content:"Learn about the local user concept in Flutter with Dyte's documentation. Follow our guide for a smooth introduction and integration."})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(96540);const t={},l=r.createContext(t);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);