"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[31348],{78599:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"capabilities/recording/advanced/configure-dyte-bucket-config","title":"Disable upload to Dyte\'s bucket","description":"Explore how to configure Dyte bucket settings for recording. Follow our guide for effective bucket configuration.","source":"@site/docs/guides/capabilities/recording/advanced/configure-dyte-bucket-config.mdx","sourceDirName":"capabilities/recording/advanced","slug":"/capabilities/recording/configure-dyte-bucket-config","permalink":"/guides/capabilities/recording/configure-dyte-bucket-config","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/recording/advanced/configure-dyte-bucket-config.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":8,"frontMatter":{"title":"Disable upload to Dyte\'s bucket","sidebar_position":8,"slug":"/capabilities/recording/configure-dyte-bucket-config","description":"Explore how to configure Dyte bucket settings for recording. Follow our guide for effective bucket configuration."},"sidebar":"tutorialSidebar","previous":{"title":"Manage Recording Config Precedence Order","permalink":"/guides/capabilities/recording/manage-recording-config-hierarchy"},"next":{"title":"Interactive Recordings with Timed Metadata","permalink":"/guides/capabilities/recording/interactive-recording"}}');var n=o(74848),r=o(28453);const c={title:"Disable upload to Dyte's bucket",sidebar_position:8,slug:"/capabilities/recording/configure-dyte-bucket-config",description:"Explore how to configure Dyte bucket settings for recording. Follow our guide for effective bucket configuration."},d=void 0,s={},a=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Once the recording is complete, by default, Dyte uploads all recordings to Dyte's AWS S3 bucket. Additionally, a presigned URL is generated with a 7-day expiry. The recording can be accessed using the ",(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/start_recording",children:(0,n.jsx)(t.code,{children:"downloadUrl"})})," associated with each recording."]}),"\n",(0,n.jsxs)(t.p,{children:["However, Dyte provides users with the flexibility to choose whether or not to upload their recordings to Dyte's S3 bucket. If you wish to disable uploads to Dyte's bucket, you can set the ",(0,n.jsx)(t.code,{children:"dyte_bucket_config"})," parameter to false in the ",(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/start_recording",children:"Start Recording endpoint"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\r\n  "dyte_bucket_config": {\r\n    "enabled": false\r\n  }\r\n}\n'})}),"\n",(0,n.jsxs)(t.admonition,{title:"note",type:"info",children:[(0,n.jsx)(t.p,{children:"If you haven't specified an external storage configuration and also disabled uploads to Dyte's bucket, then the recording will not be uploaded to any location. It is considered as an invalid recording."}),(0,n.jsxs)(t.p,{children:["For more information on how to set your extrenal storage configuration, see ",(0,n.jsx)(t.a,{href:"/guides/capabilities/recording/custom-cloud-storage",children:"Publish Recorded File to Your Cloud Provider"}),"."]})]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("title",{children:"Manage Dyte's Default Recording Upload Settings Guide"}),(0,n.jsx)("meta",{name:"description",content:"Explore how to configure Dyte bucket settings for recording. Follow our guide for effective bucket configuration."})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>d});var i=o(96540);const n={},r=i.createContext(n);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);