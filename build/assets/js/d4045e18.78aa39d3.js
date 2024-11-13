"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29286],{17599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"build-pre-call-ui/build-your-own/edit-user-name","title":"Edit user name","description":"A common use case of pre-call UI is to give the user a option to set / edit their name.","source":"@site/docs/android/build-pre-call-ui/build-your-own/edit-user-name.mdx","sourceDirName":"build-pre-call-ui/build-your-own","slug":"/build-pre-call-ui/build-your-own/edit-user-name","permalink":"/android/build-pre-call-ui/build-your-own/edit-user-name","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android/build-pre-call-ui/build-your-own/edit-user-name.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Edit user name","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Basic structure","permalink":"/android/build-pre-call-ui/build-your-own/initial-code-skeleton"},"next":{"title":"Audio/video - Preview","permalink":"/android/build-pre-call-ui/build-your-own/add-audio-video-preview"}}');var r=t(74848),o=t(28453);const d={title:"Edit user name",sidebar_position:2},s=void 0,a={},l=[{value:"Permissions",id:"permissions",level:3},{value:"File: CustomMeetingPreview.tsx",id:"file-custommeetingpreviewtsx",level:3}];function u(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A common use case of pre-call UI is to give the user a option to set / edit their name."}),"\n",(0,r.jsx)(n.h3,{id:"permissions",children:"Permissions"}),"\n",(0,r.jsxs)(n.p,{children:["Requires ",(0,r.jsx)(n.code,{children:"meeting.localUser.permissions.miscellaneous.canEditDisplayName"})," to be ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.p,{children:["In the preset editor, ensure ",(0,r.jsx)(n.code,{children:"Miscellaneous > Edit Name"})," is toggled enabled."]}),"\n",(0,r.jsx)("img",{src:"/static/react/preset-edit-name.png"}),"\n",(0,r.jsx)(n.h3,{id:"file-custommeetingpreviewtsx",children:"File: CustomMeetingPreview.tsx"}),"\n",(0,r.jsxs)(n.p,{children:["We add a ",(0,r.jsx)(n.code,{children:"<DyteInputField>"})," element for entering the participant name. We should not show this input if the user doese not have permission to edit name (",(0,r.jsx)(n.code,{children:"meeting.localUser.permissions.miscellaneous.canEditDisplayName"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:"{15, 21}",children:'<?xml version="1.0" encoding="utf-8"?>\r\n<androidx.constraintlayout.widget.ConstraintLayout \r\n  ....\r\n  >\r\n\r\n  <dyte.io.uikit.view.DyteLabel\r\n    android:id="@+id/dyteLabelView"\r\n    android:layout_width="300dp"\r\n    android:layout_height="25dp"\r\n    android:text="Join in as %s"\r\n    android:textColor="#fff"\r\n    android:textSize="16sp"\r\n  />\r\n\r\n  <dyte.io.uikit.view.DyteInputField\r\n    android:contentDescription="Textbox for display name"\r\n    android:id="@+id/textInputEditText"\r\n    android:layout_width="300dp"\r\n    android:layout_height="48dp"\r\n    android:hint="Your name"\r\n  />\r\n\r\n  <dyte.io.uikit.view.DyteJoinButton\r\n    android:contentDescription="Button for joining meeting"\r\n    android:id="@+id/dytejoinbutton_setup_screen"\r\n    android:layout_width="300dp"\r\n    android:layout_height="wrap_content"\r\n  />\r\n\r\n</androidx.constraintlayout.widget.ConstraintLayout>\n'})}),"\n",(0,r.jsx)(n.p,{children:"And on the kolin side we bind the newly added element like follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"nameAtom.addTextChangedListener(\r\n  object : TextWatcher {\r\n    override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {\r\n      // no-op\r\n    }\r\n\r\n    override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {\r\n      // no-op\r\n    }\r\n\r\n    override fun afterTextChanged(s: Editable?) {\r\n      meeting.self.setDisplayName(s?.toString()) \r\n    }\r\n  }\r\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"meeting.self.setDisplayName(participantName)"})," sets the new name for the participant."]}),"\n",(0,r.jsxs)(n.p,{children:["At the end, we let user join the meeting using ",(0,r.jsx)(n.code,{children:"meeting.join();"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);