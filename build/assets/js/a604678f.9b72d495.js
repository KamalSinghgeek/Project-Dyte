"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[94765],{92496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"quickstart","title":"Quickstart","description":"This quickstart shows how to use Dyte\'s core SDKs to add live video and audio to","source":"@site/docs/android-core/quickstart.mdx","sourceDirName":".","slug":"/","permalink":"/android-core/","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/quickstart.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"quickstart","permalink":"/android-core/tags/quickstart"},{"inline":true,"label":"setup","permalink":"/android-core/tags/setup"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"tags":["android-core","quickstart","setup"],"slug":"/","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Media Preview","permalink":"/android-core/pre-call/media-preview"}}');var i=n(74848),l=n(28453),a=n(74235),o=n(15947),s=n(20633);const c={tags:["android-core","quickstart","setup"],slug:"/",sidebar_position:1},d="Quickstart",u={},h=[{value:"Objective",id:"objective",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"Step 2: Initialize the SDK",id:"step-2-initialize-the-sdk",level:2},{value:"Step 3: Configure a Dyte meeting",id:"step-3-configure-a-dyte-meeting",level:2},{value:"Step 4: Initialize the Dyte meeting",id:"step-4-initialize-the-dyte-meeting",level:2},{value:"Step 5: Go live with your Dyte meeting!",id:"step-5-go-live-with-your-dyte-meeting",level:2},{value:"Join the room",id:"join-the-room",level:3},{value:"Leave the room",id:"leave-the-room",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,i.jsx)(t.p,{children:"This quickstart shows how to use Dyte's core SDKs to add live video and audio to\r\nyour Android applications."}),"\n",(0,i.jsxs)(t.p,{children:["To get started quickly, you can use our sample code. You can clone and run a sample application from the Android Core samples,\r\navailable in both ",(0,i.jsx)(t.a,{href:"https://github.com/dyte-io/android-samples/tree/main/samples/android-core-sample-kotlin",children:"Kotlin"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/dyte-io/android-samples/tree/main/samples/android-core-sample-java",children:"Java"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"objective",children:"Objective"}),"\n",(0,i.jsx)(t.p,{children:"You'll learn how to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#step-1-install-the-sdk",children:"Install the Dyte SDK"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#step-2-initialize-the-sdk",children:"Initialize the SDK"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#step-3-configure-a-dyte-meeting",children:"Configure a Dyte meeting"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#step-4-initialize-the-dyte-meeting",children:"Initialize the Dyte meeting"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#step-5-go-live-with-your-dyte-meeting",children:"Go live with your Dyte meeting"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"before-getting-started",children:"Before Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["Make sure you've read the ",(0,i.jsx)(t.a,{href:"/getting-started",children:"Getting Started with Dyte"})," topic and completed the following steps:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a ",(0,i.jsx)(t.a,{href:"https://dev.dyte.io/",children:"Dyte Developer Account"})]}),"\n",(0,i.jsxs)(t.li,{children:["Create a ",(0,i.jsx)(t.a,{href:"/api/?v=v2#/operations/create_meeting",children:"Dyte Meeting"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/api/?v=v2#/operations/add_participant",children:"Add Participant"})," to the meeting"]}),"\n",(0,i.jsxs)(t.li,{children:["Install ",(0,i.jsx)(t.a,{href:"https://developer.android.com/studio",children:"Android Studio"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-install-the-sdk",children:"Step 1: Install the SDK"}),"\n",(0,i.jsxs)(t.p,{children:["To install the SDK, add the ",(0,i.jsx)(t.code,{children:"core-android"})," dependency to your app's ",(0,i.jsx)(t.code,{children:"build.gradle"})," file:"]}),"\n",(0,i.jsx)(s.vE,{pkg:"core-android"}),"\n",(0,i.jsxs)(t.admonition,{title:"Note",type:"tip",children:[(0,i.jsx)(t.p,{children:"If your app targets lower versions of Android (Android API <= 24), please enable core desugaring in your app's build.gradle file as follows."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'android {\r\n  // other configurations\r\n  compileOptions {\r\n    // other configurations\r\n    isCoreLibraryDesugaringEnabled = true\r\n  }\r\n}\r\n\r\ndependencies {\r\n   // other dependencies\r\n   coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.0.4")\r\n}\n'})})]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-initialize-the-sdk",children:"Step 2: Initialize the SDK"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"DyteMobileClient"})," is the main class of the SDK. It is the entry point and\r\nthe only class required to initialize Dyte SDK."]}),"\n",(0,i.jsxs)(a.A,{groupId:"android-core-quickstart",children:[(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val dyteClient = DyteMeetingBuilder.build(activity)\n"})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"DyteMobileClient dyteClient = DyteMeetingBuilder.build(activity);\n"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"step-3-configure-a-dyte-meeting",children:"Step 3: Configure a Dyte meeting"}),"\n",(0,i.jsxs)(t.p,{children:["Configure the following properties in the ",(0,i.jsx)(t.code,{children:"DyteMeetingInfoV2"})," class. You must pass a valid participant ",(0,i.jsx)(t.code,{children:"authToken"})," obtained from\r\nthe ",(0,i.jsx)(t.a,{href:"/api/?v=v2#/operations/add_participant",children:"Add Participant"})," API."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"authToken"})}),(0,i.jsxs)(t.td,{children:["After you've created the meeting, add each participant to the meeting using the ",(0,i.jsx)(t.a,{href:"/api?v=v2#/operations/add_participant",children:"Add Participant API"})," The API response contains the ",(0,i.jsx)(t.code,{children:"authToken"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enableAudio"})}),(0,i.jsxs)(t.td,{children:["Set whether to join the meeting with your Mic ON (",(0,i.jsx)(t.code,{children:"true"}),") or OFF (",(0,i.jsx)(t.code,{children:"false"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enableVideo"})}),(0,i.jsxs)(t.td,{children:["Set whether to join the meeting with your Camera ON (",(0,i.jsx)(t.code,{children:"true"}),") or OFF (",(0,i.jsx)(t.code,{children:"false"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"baseUrl"})}),(0,i.jsx)(t.td,{children:"Base URL of the dyte's environment you have created the meeting on."})]})]})]}),"\n",(0,i.jsxs)(a.A,{groupId:"android-core-quickstart",children:[(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'val meetingInfo =\r\n      DyteMeetingInfoV2(\r\n        authToken = AUTH_TOKEN,\r\n        enableAudio = true,\r\n        enableVideo = true,\r\n        baseUrl = "dyte.io"\r\n      )\n'})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'DyteMeetingInfoV2 meetingInfo = new DyteMeetingInfoV2(\r\n          MeetingConfig.AUTH_TOKEN, // auth_token\r\n          true,   // enableAudio\r\n          true,   // enableVideo\r\n          "dyte.io" // baseUrl\r\n          );\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"step-4-initialize-the-dyte-meeting",children:"Step 4: Initialize the Dyte meeting"}),"\n",(0,i.jsxs)(t.p,{children:["To initialize the meeting, call the ",(0,i.jsx)(t.code,{children:"init()"})," method on the ",(0,i.jsx)(t.code,{children:"dyteClient"})," object with the ",(0,i.jsx)(t.code,{children:"meetingInfo"})," argument. This establishes\r\na connection with the Dyte meeting server."]}),"\n",(0,i.jsxs)(a.A,{groupId:"android-core-quickstart",children:[(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"dyteClient.init(meetingInfo, {\r\n    // init complete\r\n  }, {\r\n    // init failed\r\n  }\r\n)\n"})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"dyteClient.init(meetingInfo, () -> {\r\n        // init complete\r\n        return null;\r\n      }, () -> {\r\n        // init failed\r\n        return null;\r\n      });\n"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"step-5-go-live-with-your-dyte-meeting",children:"Step 5: Go live with your Dyte meeting!"}),"\n",(0,i.jsx)(t.p,{children:"Now, you have established the connection with the Dyte meeting server successfully. Next step is to join the room."}),"\n",(0,i.jsx)(t.h3,{id:"join-the-room",children:"Join the room"}),"\n",(0,i.jsxs)(t.p,{children:["To join the meeting room, call ",(0,i.jsx)(t.code,{children:"joinRoom()"})," method on the ",(0,i.jsx)(t.code,{children:"dyteClient"})," instance as shown below."]}),"\n",(0,i.jsxs)(a.A,{groupId:"android-core-quickstart",children:[(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"dyteClient.joinRoom({\r\n    // join complete\r\n  }, {\r\n    // join failed\r\n  }\r\n)\n"})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"dyteClient.join(() -> {\r\n        // join complete\r\n        return null;\r\n      }, () -> {\r\n        // join failed\r\n        return null;\r\n      });\n"})})})]}),"\n",(0,i.jsx)(t.h3,{id:"leave-the-room",children:"Leave the room"}),"\n",(0,i.jsx)(t.p,{children:"Once the meeting is over, you can leave the meeting room."}),"\n",(0,i.jsxs)(t.p,{children:["To leave the meeting room, call ",(0,i.jsx)(t.code,{children:"leaveRoom()"})," method on the ",(0,i.jsx)(t.code,{children:"dyteClient"})," as shown below."]}),"\n",(0,i.jsxs)(a.A,{groupId:"android-core-quickstart",children:[(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"dyteClient.leaveRoom({\r\n  // leave completed\r\n}, {\r\n  // leave failed\r\n})\n"})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"dyteClient.leave(() -> {\r\n        // leave complete\r\n        return null;\r\n      }, () -> {\r\n        // leave failed\r\n        return null;\r\n      });\n"})})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("title",{children:"Android Core Quickstart"}),(0,i.jsx)("meta",{name:"description",content:"Explore Dyte's Android Core documentation, focusing on core functionalities for building rich video chat applications on Android."})]})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},15947:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(96540),i=n(18215);const l={tabItem:"tabItem_Ymn6"};function a({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",className:(0,i.A)(l.tabItem,n),hidden:t},e)}},74235:(e,t,n)=>{n.d(t,{A:()=>D});var r=n(96540),i=n(18215),l=n(52204),a=n(56347),o=n(13321),s=n(57641),c=n(73094),d=n(57237);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e){var t,n;return null!==(n=null===(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return p(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,a.W6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,s.aZ)(i),o=(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace(h(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[i,n]);return[l,o]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,l=m(e),[a,s]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,u]=g({queryString:n,groupId:i}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,i]=(0,d.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:i}),y=(()=>{const e=null!=c?c:h;return f({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{y&&s(y)}),[y]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var b=n(12075);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function O({className:e,block:t,selectedValue:n,selectValue:a,tabValues:o}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,r=s.indexOf(t),i=o[r].value;i!==n&&(c(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;var n;t=null!==(n=s[r])&&void 0!==n?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;var r;t=null!==(r=s[n])&&void 0!==r?r:s[s.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>r.createElement("li",w(x({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:u,onClick:d},l),{className:(0,i.A)("tabs__item",j.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function k({lazy:e,children:t,selectedValue:n}){const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=y(e);return r.createElement("div",{className:(0,i.A)("tabs-container",j.tabList)},r.createElement(O,x({},t,e)),r.createElement(k,x({},t,e)))}function D(e){const t=(0,b.A)();return r.createElement(E,x({key:String(t)},e),p(e.children))}},20633:(e,t,n)=>{n.d(t,{hB:()=>s,OV:()=>d,tb:()=>u,vE:()=>o,$r:()=>c});var r=n(96540),i=n(11756);const l={};async function a({pkg:e="ui-kit"}){if(void 0!==l[e])return l[e];const t=await fetch(`https://registry.npmjs.com/@dytesdk/${e}`),n=(await t.json())["dist-tags"].latest;return l[e]=n,n}const o=({pkg:e})=>{const[t,n]=(0,r.useState)("+");return(0,r.useEffect)((()=>{const t=JSON.stringify({maven:e});fetch("https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest",{method:"POST",body:t}).then((e=>e.json())).then((e=>{var t;return n(null!==(t=e.latestVersion)&&void 0!==t?t:"+")}))}),[]),r.createElement("div",null,r.createElement(i.A,{language:"groovy"},`dependencies {\n    // (other dependencies)\n    implementation 'io.dyte:${e}:${t}'\n}`))},s=({pkg:e,path:t})=>{const[n,l]=(0,r.useState)(void 0);return(0,r.useEffect)((()=>{fetch(`https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${t}/`,{method:"GET",body:null}).then((e=>e.json())).then((e=>l(e[e.length-1].name)))}),[]),r.createElement("div",null,r.createElement(i.A,{language:"ruby"},`pod '${e}' ${n?`, '${n}'`:""}`))},c=()=>{const[e,t]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await a({pkg:"web-core"});t(`-${e}`)}()}),[]),r.createElement(i.A,{language:"html"},`<script src="https://cdn.dyte.in/core/dyte${e}.js" />`)},d=()=>{const[e,t]=(0,r.useState)(""),[n,l]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await a({pkg:"web-core"});t(`-${e}`);const n=await a({pkg:"ui-kit"});l(`@${n}`)}()}),[]),r.createElement(i.A,{language:"html"},`<head>\n  <script type="module">\n      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${n}/loader/index.es2017.js';\n      defineCustomElements();\n  <\/script>\n  \x3c!-- Import Web Core via CDN too --\x3e\n  <script src="https://cdn.dyte.in/core/dyte${e}.js"><\/script>\n</head>`)},u=({modules:e=["provideDyteDesignSystem","extendConfig,"]})=>{const[t,n]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await a({pkg:"ui-kit"});n(`@${e}`)}()}),[]),r.createElement(i.A,{language:"html"},`<head>\n  <script type="module">\n    import {\n      ${e.join(", ")}\n    } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${t}/dist/esm/index.js';\n  <\/script>\n</head>`)}},74866:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(96540),i=n(20053),l=n(12075),a=n(86850),o=n(15418),s=n(90062),c=n(65354),d=n(54982);const u={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var h=n(1589),p=n(63581),m=n(33257);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function y({children:e}){return r.createElement("div",{className:(0,i.A)(u.playgroundHeader)},e)}function b(){return r.createElement("div",null,"Loading...")}function j(){return r.createElement(r.Fragment,null,r.createElement(y,null,r.createElement(o.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Preview")),r.createElement("div",{className:u.playgroundPreview},r.createElement(c.A,{fallback:r.createElement(b,null)},(()=>r.createElement(r.Fragment,null,r.createElement(a.pA,null),r.createElement(a.p1,null))))))}function v(){const e=(0,l.A)();return r.createElement(a.w,{key:String(e),className:(0,i.A)(u.playgroundEditor,"border border-secondary-800 !pb-4")})}function x(){return r.createElement("div",{className:"relative"},r.createElement("div",{className:"-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},r.createElement(o.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"LIVE EDITOR"),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},r.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),r.createElement(v,null))}const w={value:!1};function O(e){var{children:t,transformCode:n}=e,l=g(e,["children","transformCode"]);const{siteConfig:{themeConfig:o}}=(0,s.A)(),{liveCodeBlock:{playgroundPosition:c}}=o,y=(0,d.A)(),[b,v]=(0,h.useDyteClient)(),{colorMode:O}=(0,m.G)();return(0,r.useEffect)((()=>{w.value||(w.value=!0,v({roomName:"qplrfc-uuujcj",authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds",defaults:{audio:!1,video:!1}}).then((e=>{0==location.href.includes("build-pre-call-ui")&&e.join(),window.meeting=e,e.meta.meetingStartedTimestamp=new Date,e.participants.setMockParticipantCount(5,5);const t=document.getElementsByTagName("html")[0].dataset.theme;(0,p.provideDyteDesignSystem)(document.body,{theme:t}),w.value=!1})))}),[]),(0,r.useEffect)((()=>{(0,p.provideDyteDesignSystem)(document.body,{theme:O})}),[O]),r.createElement("div",{className:(0,i.A)(u.playgroundContainer,"!rounded-none !shadow-none")},r.createElement(h.DyteProvider,{value:b},r.createElement(a.Q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({code:t.replace(/\n$/,""),transformCode:null!=n?n:e=>`${e};`,theme:y},l),"top"===c?r.createElement(r.Fragment,null,r.createElement(j,null),r.createElement(x,null)):r.createElement(r.Fragment,null,r.createElement(x,null),r.createElement(j,null)))))}},72041:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(96540),i=n(63581),l=n(1589);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({React:r},r,i,l,{Row:function(e){var{children:t,style:n={}}=e,i=s(e,["children","style"]);return r.createElement("div",o({style:o({display:"flex",gap:8,flexWrap:"wrap"},n)},i),t)},Col:function(e){var{children:t,style:n={}}=e,i=s(e,["children","style"]);return r.createElement("div",o({style:o({display:"flex",flexDirection:"column",flexWrap:"wrap",gap:8},n)},i),t)},Center:function(e){var{children:t,style:n}=e,i=s(e,["children","style"]);return r.createElement("div",o({style:o({display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",gap:8},n)},i),t)},airplaneSVG:'<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',activePlugin:{}})}}]);