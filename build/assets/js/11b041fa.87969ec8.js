"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[45921],{85726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"build-pre-call-ui/build-your-own/initial-code-skeleton","title":"Basic structure","description":"What are we building?","source":"@site/docs/android/build-pre-call-ui/build-your-own/initial-code-skeleton.mdx","sourceDirName":"build-pre-call-ui/build-your-own","slug":"/build-pre-call-ui/build-your-own/initial-code-skeleton","permalink":"/android/build-pre-call-ui/build-your-own/initial-code-skeleton","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android/build-pre-call-ui/build-your-own/initial-code-skeleton.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Basic structure","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"DyteSetupScreen","permalink":"/android/build-pre-call-ui/default-setup-screen"},"next":{"title":"Edit user name","permalink":"/android/build-pre-call-ui/build-your-own/edit-user-name"}}');var o=n(74848),r=n(28453);const l={title:"Basic structure",sidebar_position:1},a=void 0,d={},s=[{value:"What are we building?",id:"what-are-we-building",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"what-are-we-building",children:"What are we building?"}),"\n",(0,o.jsx)(t.p,{children:"We are deconstructing the default setup screen."}),"\n",(0,o.jsx)(t.p,{children:"At the end of this group of docs, we should have the following screen built using low level components."}),"\n",(0,o.jsx)("img",{src:"/static/mobile/build-pre-call-ui/skeleton-page/meeting-precall.png",width:"252",height:"560",alt:"Meeting Precall post skeleton changes",className:"mb-10"}),"\n",(0,o.jsx)(t.p,{children:"Let's put a basic skeleton and the initial boilerplate code."}),"\n",(0,o.jsx)(t.p,{children:"Barebone xml needed to redner ui for self name and a button to join the meeting will look as follow:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\r\n<androidx.constraintlayout.widget.ConstraintLayout \r\n  ....\r\n  >\r\n\r\n  <dyte.io.uikit.view.DyteLabel\r\n    android:id="@+id/dyteLabelView"\r\n    android:layout_width="300dp"\r\n    android:layout_height="25dp"\r\n    android:text="Join in as %s"\r\n    android:textColor="#fff"\r\n    android:textSize="16sp"\r\n  />\r\n\r\n  <dyte.io.uikit.view.DyteJoinButton\r\n    android:contentDescription="Button for joining meeting"\r\n    android:id="@+id/dytejoinbutton_setup_screen"\r\n    android:layout_width="300dp"\r\n    android:layout_height="wrap_content"\r\n  />\r\n\r\n</androidx.constraintlayout.widget.ConstraintLayout>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Now inside your ",(0,o.jsx)(t.code,{children:"setup_fragment.kt"})," file you'll need to bind xml elements with kotlin objects, to do that:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:"private lateinit var joinButton: DyteJoinButton\r\nprivate lateinit var selfNameDyteLabel: DyteLabel\r\n\r\noverride fun onViewCreated(view: View, savedInstanceState: Bundle?) {\r\n  joinButton.activate(meeting)\r\n  selfNameDyteLabel.text = meeting.localUser.name\r\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"This should give you output as following"}),"\n",(0,o.jsx)("img",{src:"/static/mobile/build-pre-call-ui/skeleton-page/android-setup-custom-preview.png",width:"252",height:"560",alt:"Meeting Precall post skeleton changes",className:"mb-10"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);