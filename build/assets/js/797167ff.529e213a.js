"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29914],{44830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"livestream/dyte-livestream-listener","title":"Livestream Event Listeners","description":"Explore the functionalities and implementation of the Android Livestream Listener in Dyte documentation.","source":"@site/docs/android-core/livestream/dyte-livestream-listener.mdx","sourceDirName":"livestream","slug":"/livestream/dyte-livestream-listener","permalink":"/android-core/livestream/dyte-livestream-listener","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/livestream/dyte-livestream-listener.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"livestream","permalink":"/android-core/tags/livestream"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Livestream Event Listeners","description":"Explore the functionalities and implementation of the Android Livestream Listener in Dyte documentation.","sidebar_position":3,"tags":["android-core","livestream"]},"sidebar":"tutorialSidebar","previous":{"title":"Livestream Objects and Methods","permalink":"/android-core/livestream/dyte-livestream-object"},"next":{"title":"Introduction","permalink":"/android-core/polls/introduction"}}');var i=n(74848),s=n(28453);const d={title:"Livestream Event Listeners",description:"Explore the functionalities and implementation of the Android Livestream Listener in Dyte documentation.",sidebar_position:3,tags:["android-core","livestream"]},a=void 0,o={},l=[{value:"Livestream events",id:"livestream-events",level:2},{value:"onLiveStreamStarting",id:"onlivestreamstarting",level:3},{value:"onLiveStreamStarted",id:"onlivestreamstarted",level:3},{value:"onLiveStreamStateUpdate",id:"onlivestreamstateupdate",level:3},{value:"onViewerCountUpdated",id:"onviewercountupdated",level:3},{value:"onLiveStreamEnding",id:"onlivestreamending",level:3},{value:"onLiveStreamEnded",id:"onlivestreamended",level:3},{value:"onLiveStreamErrored",id:"onlivestreamerrored",level:3},{value:"onStageCountUpdated",id:"onstagecountupdated",level:3},{value:"onStageRequestsUpdated",id:"onstagerequestsupdated",level:3},{value:"onJoinRequestAccepted",id:"onjoinrequestaccepted",level:3},{value:"onJoinRequestRejected",id:"onjoinrequestrejected",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["You can listen to livestream events by attaching a listener by calling ",(0,i.jsx)(t.code,{children:"addLivestreamEventsListener"})," on ",(0,i.jsx)(t.code,{children:"dyteMobileClient"})," object where ",(0,i.jsx)(t.code,{children:"dyteMobileClient"})," is an instance of ",(0,i.jsx)(t.code,{children:"DyteMobileClient()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val dyteLiveStreamEventsListener = object : DyteLiveStreamEventsListener {\r\n  override fun onLiveStreamStarting() {\r\n    // when livestream is starting\r\n  }\r\n\r\n  override fun onLiveStreamStarted() {\r\n    // when livestream is started\r\n  }\r\n\r\n  override fun onLiveStreamEnding() {\r\n    // when livestream is ending\r\n  }\r\n\r\n  override fun onLiveStreamEnded() {\r\n    // when livestream is ended\r\n  }\r\n\r\n  override fun onLiveStreamErrored() {\r\n    // errored livestream\r\n  }\r\n\r\n  override fun onViewerCountUpdated(count: Int) {\r\n    // when viewer count updates in livestream\r\n  }\r\n\r\n  override fun onStageCountUpdated(count: Int) {\r\n    // when stage count updates in livestream\r\n  }\r\n\r\n  override fun onStageRequestsUpdated(requests: List<LiveStreamStageRequestPeer>) {\r\n    // when there are updates in stage requests\r\n  }\r\n\r\n  override fun onJoinRequestAccepted(peer: LiveStreamStagePeer) {\r\n    // when localUser's join request is accepted by host\r\n  }\r\n\r\n  override fun onJoinRequestRejected(peer: LiveStreamStagePeer) {\r\n    // when localUser's join request is rejected by host\r\n  }\r\n\r\n  override fun onLiveStreamStateUpdate(data: DyteLivestreamData) {\r\n    // when there is an update in state of the livestream\r\n  }\r\n}\r\nmeeting.addLiveStreamEventsListener(dyteLiveStreamEventsListener)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"livestream-events",children:"Livestream events"}),"\n",(0,i.jsx)(t.h3,{id:"onlivestreamstarting",children:"onLiveStreamStarting"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered when the livestream is about to start."}),"\n",(0,i.jsx)(t.h3,{id:"onlivestreamstarted",children:"onLiveStreamStarted"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered when the livestream has started."}),"\n",(0,i.jsx)(t.h3,{id:"onlivestreamstateupdate",children:"onLiveStreamStateUpdate"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered when the livestream state is updated."}),"\n",(0,i.jsx)(t.h3,{id:"onviewercountupdated",children:"onViewerCountUpdated"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered when the viewer count is updated."}),"\n",(0,i.jsx)(t.h3,{id:"onlivestreamending",children:"onLiveStreamEnding"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered when the livestream is about to end."}),"\n",(0,i.jsx)(t.h3,{id:"onlivestreamended",children:"onLiveStreamEnded"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered when the livestream has ended."}),"\n",(0,i.jsx)(t.h3,{id:"onlivestreamerrored",children:"onLiveStreamErrored"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered when their is an error while starting/stopping the livestream."}),"\n",(0,i.jsx)(t.h3,{id:"onstagecountupdated",children:"onStageCountUpdated"}),"\n",(0,i.jsxs)(t.p,{children:["This event is triggered when the number of users on stage is updated. The ",(0,i.jsx)(t.code,{children:"count"})," object contains the updated stage count."]}),"\n",(0,i.jsx)(t.h3,{id:"onstagerequestsupdated",children:"onStageRequestsUpdated"}),"\n",(0,i.jsxs)(t.p,{children:["This event is triggered when the stage requests are updated. The ",(0,i.jsx)(t.code,{children:"requests"})," object contains the updated list of stage requests."]}),"\n",(0,i.jsx)(t.h3,{id:"onjoinrequestaccepted",children:"onJoinRequestAccepted"}),"\n",(0,i.jsxs)(t.p,{children:["This event is triggered when a stage request is accepted. The ",(0,i.jsx)(t.code,{children:"peer"})," object contains the peer whose request is accepted."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"  void onJoinRequestAccepted(DyteLiveStreamStagePeer peer) {}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"onjoinrequestrejected",children:"onJoinRequestRejected"}),"\n",(0,i.jsxs)(t.p,{children:["This event is triggered when a stage request is rejected. The ",(0,i.jsx)(t.code,{children:"peer"})," object contains the peer whose request is rejected."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"  void onJoinRequestRejected(DyteLiveStreamStagePeer peer) {}\n"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("title",{children:"Android Core Livestream Event Listeners"}),(0,i.jsx)("meta",{name:"description",content:"Explore the functionalities and implementation of the Android Livestream Listener in Dyte documentation."})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);