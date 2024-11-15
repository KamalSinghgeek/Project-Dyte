"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[92555],{51367:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"release-notes","title":"Release Notes","description":"The release notes lists all new features, resolved issues, and known issues of iOS Core in chronological order.","source":"@site/docs/ios-core/release-notes.mdx","sourceDirName":".","slug":"/release-notes","permalink":"/ios-core/release-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/release-notes.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"releasenotes","permalink":"/ios-core/tags/releasenotes"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":101,"frontMatter":{"title":"Release Notes","sidebar_position":101,"sidebar_class_name":"releaseSidebarHeading","tags":["ios-core","releasenotes"]},"sidebar":"tutorialSidebar","previous":{"title":"System Error Codes","permalink":"/ios-core/error-codes"}}');var n=s(74848),r=s(28453),o=s(60621);const l={title:"Release Notes",sidebar_position:101,sidebar_class_name:"releaseSidebarHeading",tags:["ios-core","releasenotes"]},i=void 0,c={},d=[];function m(e){const t={p:"p",...(0,r.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The release notes lists all new features, resolved issues, and known issues of iOS Core in chronological order."}),"\n",(0,n.jsx)(o.A,{noteKey:"ios-core"}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)("title",{children:"iOS Core Release Notes"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},60621:(e,t,s)=>{s.d(t,{A:()=>l});var a=s(96540),n=s(61917),r=s(43379);const o=[{name:"breaking-changes",color:"#e01d5a",label:"Breaking Changes",className:"deprecated"},{name:"new_api",color:"#1264a3",label:"New API",className:"newAPI"},{name:"features",color:"#00e0a5",label:"Features"},{name:"fixes",color:"#e0ac12",label:"Fixed Issues"},{name:"dep_api",color:"#e01d5a",label:"Deprecated API",className:"deprecated"},{name:"perf",color:"#5555aa",label:"Performance"}];function l({noteKey:e,tagType:t}){const[s,l]=(0,a.useState)([]);return(0,a.useEffect)((()=>{fetch(`/release-notes/${e}.json`).then((e=>e.json())).then((e=>l(e)))}),[e]),a.createElement("div",{className:"notesContainer"},s.map((e=>a.createElement(a.Fragment,null,e.version&&a.createElement(n.A,{as:"h2",id:e.version},"v",e.version),a.createElement("p",{className:"text-sm"},"Released on"," ",a.createElement("time",null,new Date(1e3*e.createdAt).toLocaleDateString("en-US",{day:"numeric",year:"numeric",month:"long"}))),a.createElement("table",{className:"releaseNotes"},o.map((s=>{var n,o,l;return(null===(n=e[s.name])||void 0===n?void 0:n.length)>0?a.createElement("tr",{className:null!==(l=s.className)&&void 0!==l?l:""},a.createElement("td",{className:"type",style:{borderColor:s.color}},s.label),a.createElement("td",{className:"sublist"},null===(o=e[s.name])||void 0===o?void 0:o.map((e=>{return a.createElement("tr",null,a.createElement("td",null,("react"===t?(s=e,s.replace(/<\s*\/?\s*([a-z][a-z0-9-]*)(\s[^>]*?)?\s*\/?>/g,((e,t,s,a,n)=>{let r=t.split("-").map(((e,t)=>0===t?e:e.charAt(0).toUpperCase()+e.slice(1))).join("");r=r.charAt(0).toUpperCase()+r.slice(1);const o=e.trim().endsWith("/>");return`<${"/"===e.charAt(1)?"/":""}${r}${s||""}${o?" /":""}>`}))):e).split("\n").map(((e,t)=>a.createElement(r.$,{className:"changeline",key:t},e)))));var s})))):null})))))))}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var a=s(96540);const n={},r=a.createContext(n);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);