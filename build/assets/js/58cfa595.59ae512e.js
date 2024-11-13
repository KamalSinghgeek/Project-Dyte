"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[44795],{83428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"polls/prebuilt-polls-screen","title":"Prebuilt Polls Screen","description":"Introduction to Polls in Dyte Meetings","source":"@site/docs/android/polls/prebuilt-polls-screen.mdx","sourceDirName":"polls","slug":"/polls/prebuilt-polls-screen","permalink":"/android/polls/prebuilt-polls-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android/polls/prebuilt-polls-screen.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Prebuilt Polls Screen"},"sidebar":"tutorialSidebar","previous":{"title":"Prebuilt","permalink":"/android/plugins/prebuilt"},"next":{"title":"Prebuilt Create Poll Screen","permalink":"/android/polls/prebuilt-create-poll"}}');var i=n(74848),s=n(28453);const o={sidebar_position:1,title:"Prebuilt Polls Screen"},r=void 0,a={},c=[{value:"Introduction to Polls in Dyte Meetings",id:"introduction-to-polls-in-dyte-meetings",level:2},{value:"Dyte&#39;s Prebuilt Polls Screen",id:"dytes-prebuilt-polls-screen",level:2},{value:"Usage Options",id:"usage-options",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction-to-polls-in-dyte-meetings",children:"Introduction to Polls in Dyte Meetings"}),"\n",(0,i.jsxs)(t.p,{children:["In Dyte meetings, participants can engage in polls to gather opinions or make decisions collectively.\r\nPolls enhance the interactive nature of meetings, allowing participants to actively express their views.\r\nThe ability to create, or interact with polls is determined by the ",(0,i.jsx)(t.a,{href:"/guides/livestream/advanced/configuring-permissions#polls",children:"polls permissions"}),"\r\nset in the participant's preset."]}),"\n",(0,i.jsx)(t.h2,{id:"dytes-prebuilt-polls-screen",children:"Dyte's Prebuilt Polls Screen"}),"\n",(0,i.jsx)(t.p,{children:"Dyte's Android UI Kit provides a prebuilt Polls screen with the following features:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Displays all created polls if the participant has permission to view them"}),"\n",(0,i.jsx)(t.li,{children:"Allows participants to vote by selecting a checkbox for their chosen option"}),"\n",(0,i.jsx)(t.li,{children:"Shows the number of votes each poll option has received"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"usage-options",children:"Usage Options"}),"\n",(0,i.jsx)(t.p,{children:"The prebuilt Polls screen is available in two variants:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/android/components/dyte-polls",children:(0,i.jsx)(t.strong,{children:"DytePollsBottomSheet"})}),": Displays the Polls list as a full-screen bottom sheet that can be dismissed by swiping down."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"import dyte.io.uikit.screens.polls.DytePollsBottomSheet\r\n\r\nval dytePollsBottomSheet = DytePollsBottomSheet()\r\ndytePollsBottomSheet.show(childFragmentManager, TAG)\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DytePollsFragment"}),": Shows the list of ongoing polls inside an Android fragment, providing flexibility\r\nto show the Polls UI fullscreen or in a part of the screen along with other UI elements."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'\x3c!-- res/layout/meeting_activity.xml --\x3e\r\n<androidx.fragment.app.FragmentContainerView\r\n    android:id="@+id/fragment_container_view"\r\n    android:layout_width="match_parent"\r\n    android:layout_height="match_parent" />\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"import dyte.io.uikit.screens.polls.DytePollsFragment\r\n\r\nval dytePollsFragment = DytePollsFragment()\r\nsupportFragmentManager.beginTransaction()\r\n                .replace(R.id.fragment_container_view, dytePollsFragment, TAG)\r\n                .commit()\n"})}),"\n",(0,i.jsx)("img",{src:"/static/android-ui-kit/polls/prebuilt-polls-screen.png",width:"252",height:"560",alt:"Prebuilt Polls Screen",className:"mb-10"}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:'In the next guide, we will explore the "Prebuilt Create Poll screen" which allows participants to create polls\r\nif they have permission in their preset.'})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var l=n(96540);const i={},s=l.createContext(i);function o(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);