"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[21132],{27756:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"release-notes","title":"Release Notes","description":"React Native UI Kit Release Notes","source":"@site/docs/rn-ui-kit/release-notes.mdx","sourceDirName":".","slug":"/release-notes","permalink":"/react-native/release-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-ui-kit/release-notes.mdx","tags":[{"inline":true,"label":"releasenotes","permalink":"/react-native/tags/releasenotes"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":101,"frontMatter":{"title":"Release Notes","sidebar_position":101,"sidebar_class_name":"releaseSidebarHeading","tags":["releasenotes"]},"sidebar":"tutorialSidebar","previous":{"title":"Customize Meeting Locale","permalink":"/react-native/customizations/custom-locale"},"next":{"title":"Reference","permalink":"/react-native/reference/"}}');var s=a(74848),r=a(28453),o=a(60621);const l={title:"Release Notes",sidebar_position:101,sidebar_class_name:"releaseSidebarHeading",tags:["releasenotes"]},i=void 0,c={},d=[];function m(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{noteKey:"react-native-ui-kit"}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("title",{children:"React Native UI Kit Release Notes"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},60621:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),s=a(61917),r=a(43379);const o=[{name:"breaking-changes",color:"#e01d5a",label:"Breaking Changes",className:"deprecated"},{name:"new_api",color:"#1264a3",label:"New API",className:"newAPI"},{name:"features",color:"#00e0a5",label:"Features"},{name:"fixes",color:"#e0ac12",label:"Fixed Issues"},{name:"dep_api",color:"#e01d5a",label:"Deprecated API",className:"deprecated"},{name:"perf",color:"#5555aa",label:"Performance"}];function l({noteKey:e,tagType:t}){const[a,l]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(`/release-notes/${e}.json`).then((e=>e.json())).then((e=>l(e)))}),[e]),n.createElement("div",{className:"notesContainer"},a.map((e=>n.createElement(n.Fragment,null,e.version&&n.createElement(s.A,{as:"h2",id:e.version},"v",e.version),n.createElement("p",{className:"text-sm"},"Released on"," ",n.createElement("time",null,new Date(1e3*e.createdAt).toLocaleDateString("en-US",{day:"numeric",year:"numeric",month:"long"}))),n.createElement("table",{className:"releaseNotes"},o.map((a=>{var s,o,l;return(null===(s=e[a.name])||void 0===s?void 0:s.length)>0?n.createElement("tr",{className:null!==(l=a.className)&&void 0!==l?l:""},n.createElement("td",{className:"type",style:{borderColor:a.color}},a.label),n.createElement("td",{className:"sublist"},null===(o=e[a.name])||void 0===o?void 0:o.map((e=>{return n.createElement("tr",null,n.createElement("td",null,("react"===t?(a=e,a.replace(/<\s*\/?\s*([a-z][a-z0-9-]*)(\s[^>]*?)?\s*\/?>/g,((e,t,a,n,s)=>{let r=t.split("-").map(((e,t)=>0===t?e:e.charAt(0).toUpperCase()+e.slice(1))).join("");r=r.charAt(0).toUpperCase()+r.slice(1);const o=e.trim().endsWith("/>");return`<${"/"===e.charAt(1)?"/":""}${r}${a||""}${o?" /":""}>`}))):e).split("\n").map(((e,t)=>n.createElement(r.$,{className:"changeline",key:t},e)))));var a})))):null})))))))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var n=a(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);