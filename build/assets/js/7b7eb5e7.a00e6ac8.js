"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[89543],{20156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"build-pre-call-ui/build-your-own/add-audio-video-device","title":"Audio/video - Device Selection","description":"To let the user choose between multiple available input / output devices, you can use the `` component","source":"@site/docs/rn-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-device.mdx","sourceDirName":"build-pre-call-ui/build-your-own","slug":"/build-pre-call-ui/build-your-own/add-audio-video-device","permalink":"/react-native/build-pre-call-ui/build-your-own/add-audio-video-device","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-device.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Audio/video - Device Selection","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Audio/video - Preview","permalink":"/react-native/build-pre-call-ui/build-your-own/add-audio-video-preview"},"next":{"title":"DyteMeeting","permalink":"/react-native/build-in-call-ui/default-meeting-ui"}}');var r=t(74848),o=t(28453);const a={title:"Audio/video - Device Selection",sidebar_position:4},l=void 0,s={},c=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["To let the user choose between multiple available input / output devices, you can use the ",(0,r.jsx)(n.code,{children:"<DyteSettings >"})," component"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function DeviceSettings({ open, onClose }) {\r\n  const { meeting } = useDyteMeeting();\r\n  return (\r\n    <SomeDialogComponent open={open} onClose={onClose}>\r\n      <DyteSettings meeting={meeting} />\r\n    </SomeDialogComponent>\r\n  );\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you added ",(0,r.jsx)(n.code,{children:"DyteDialogManager"})," as suggested in the ",(0,r.jsx)(n.a,{href:"/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton#file-meetingtsx",children:"Basic Structure"})," guide, you can also use ",(0,r.jsx)(n.code,{children:"<DyteSettingsToggle>"})," component to trigger the inbuilt Dialog."]}),"\n",(0,r.jsx)(n.p,{children:"Extending the last code sample with device selector."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'function CustomMeetingPreview() {\r\n  const { meeting } = useDyteMeeting();\r\n\r\n  return (\r\n    <View\r\n      className="bg-secondary-900 flex flex-col items-center justify-center"\r\n      style={{ minHeight: \'400px\' }}\r\n    >\r\n      {/* Do not re-add this, if already added in the parent component */}\r\n      <DyteDialogManager meeting={meeting} />\r\n      <View className="flex w-full items-center justify-around p-[10%]">\r\n        <View className="relative">\r\n          <DyteParticipantTile meeting={meeting} participant={meeting.self}>\r\n            <DyteAvatar participant={meeting.self} />\r\n            <DyteNameTag participant={meeting.self}>\r\n              <DyteAudioVisualizer participant={meeting.self} slot="start" />\r\n            </DyteNameTag>\r\n            <View\r\n              className="absolute flex"\r\n              style={{\r\n                top: \'8px\',\r\n                right: \'8px\',\r\n              }}\r\n            >\r\n              <DyteSettingsToggle meeting={meeting} size="sm" />\r\n            </View>\r\n            <View\r\n              className="absolute flex"\r\n              style={{\r\n                bottom: \'8px\',\r\n                right: \'8px\',\r\n              }}\r\n            >\r\n              <DyteMicToggle meeting={meeting} size="sm" />\r\n              <DyteCameraToggle meeting={meeting} size="sm" />\r\n            </View>\r\n          </DyteParticipantTile>\r\n        </View>\r\n        <View className="flex w-1/4 flex-col justify-between">\r\n          <View className="flex flex-col items-center">\r\n            <p>Joining as {meeting.self.name}</p>\r\n          </View>\r\n          <DyteButton\r\n            kind="wide"\r\n            size="lg"\r\n            onClick={async () => {\r\n              await meeting.join();\r\n            }}\r\n          >\r\n            Join\r\n          </DyteButton>\r\n        </View>\r\n      </View>\r\n    </View>\r\n  );\r\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);