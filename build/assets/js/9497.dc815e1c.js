"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[9497],{19497:(e,t,r)=>{r.r(t),r.d(t,{dyte_participants:()=>l});var s=r(72944),a=r(17073),o=r(74157),i=r(17213),n=r(26468),c=(r(60064),r(93514));r(94370),r(55055),r(70694),r(64383);const l=class{constructor(e){(0,s.r)(this,e),this.onSearchInput=e=>{this.search=e.target.value},this.meeting=void 0,this.states=void 0,this.config=c.d,this.size=void 0,this.iconPack=a.d,this.t=(0,o.u)(),this.search=""}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.meeting}meetingChanged(e){}render(){const e={meeting:this.meeting,states:this.states||n.s,config:this.config,size:this.size,iconPack:this.iconPack,t:this.t};return(0,s.h)(s.H,null,(0,s.h)("div",{class:"search",part:"search"},(0,s.h)("dyte-icon",{icon:this.iconPack.search,part:"search-icon",iconPack:this.iconPack,t:this.t}),(0,s.h)("input",{type:"search",autocomplete:"off",placeholder:"Search",onInput:this.onSearchInput,part:"search-input"})),(0,s.h)("slot",{name:"start"}),(0,s.h)("div",{class:"ctr scrollbar",part:"container"},(0,s.h)(i.R,{element:"dyte-participants-waiting-list",defaults:e}),(0,s.h)(i.R,{element:"dyte-participants-stage-queue",defaults:e}),(0,s.h)(i.R,{element:"dyte-participants-stage-list",defaults:e,props:{search:this.search}}),(0,s.h)(i.R,{element:"dyte-participants-viewer-list",defaults:e,props:{search:this.search}})),(0,s.h)("slot",{name:"end"}))}static get watchers(){return{meeting:["meetingChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px}*{box-sizing:border-box}.ctr{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);box-sizing:border-box;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);padding-bottom:var(--dyte-space-0, 0px);overflow-y:auto;flex-grow:1;flex-basis:0}.search{position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px)}.search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}:host([size='md']) .search{margin-top:var(--dyte-space-4, 16px) !important;margin-bottom:var(--dyte-space-4, 16px) !important}:host([size='sm']) .search{margin-top:var(--dyte-space-4, 16px) !important;margin-bottom:var(--dyte-space-4, 16px) !important}"},17213:(e,t,r)=>{r.d(t,{R:()=>c,l:()=>n});var s=r(72944);const a=({element:e,size:t,states:r={},config:s={}})=>{let a=[];const o=null==s?void 0:s.root[e],i=e=>{a.push(e),"string"==typeof t&&a.push(`${e}.${t}`)};if(i(e),"object"==typeof o&&!Array.isArray(o)&&null!==o){const{state:t,states:s}=o;let a=e,n=[];if(Array.isArray(s)){n=s.filter((e=>r[e])),n.sort();for(const e of n)i(`${a}.${e}`);if(n.length>1){i([a,...n].join("."))}}if("string"==typeof t){const s=`${e}[${t}=${r[t]}]`;i(s);for(const e of n)i(`${s}.${e}`);if(n.length>1){i([s,...n].join("."))}}}return a},o=({selectors:e,root:t})=>{if(!t||!Array.isArray(e))return[];let r=[];for(const s of e){const e=t[s];if(Array.isArray(e))r=[...e];else if(e){if(e.children&&(r=[...e.children]),Array.isArray(e.remove))for(const t of e.remove)r=r.filter((e=>"string"==typeof e?e!==t:!Array.isArray(e)||e[0]!==t));if(e.addBefore)for(const[t,s]of Object.entries(e.addBefore)){const e=r.findIndex((e=>"string"==typeof e?e===t:!!Array.isArray(e)&&e[0]===t));e>=0&&r.splice(e,0,...s)}Array.isArray(e.add)&&(r=r.concat(e.add)),Array.isArray(e.prepend)&&(r=e.prepend.concat(r))}}return r},i=({elements:e,defaults:t,props:r={},deepProps:a=!1,elementProps:o={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,s.h)(c,{element:e,defaults:t,props:r,childProps:a&&r,elementProps:o}))):null,n=({element:e,defaults:t,props:r={},elementProps:s={}})=>{var i;const{config:n,size:c,states:l}=t;let p,d={},h=[];Array.isArray(e)?[p,d,...h]=e:p=e;const g=null===(i=null==n?void 0:n.root)||void 0===i?void 0:i[p];null!=g&&"props"in g&&(r=Object.assign(Object.assign({},g.props),r)),r=Object.assign(Object.assign({},r),d),p in s&&(r=Object.assign(Object.assign({},r),s[p]));const y=a({element:p,size:c,states:l,config:n});return o({selectors:y,root:n.root}).length},c=({element:e,defaults:t,childProps:r={},props:n={},onlyChildren:c=!1,asHost:l=!1,deepProps:p=!1,elementProps:d={}},h)=>{var g;const{config:y,size:b,states:u}=t;let f,m={},v=[];Array.isArray(e)?[f,m,...v]=e:f=e;const x=null===(g=null==y?void 0:y.root)||void 0===g?void 0:g[f];null!=x&&"props"in x&&(n=Object.assign(Object.assign({},x.props),n)),n=Object.assign(Object.assign({},n),m),f in d&&(n=Object.assign(Object.assign({},n),d[f]));const A=a({element:f,size:b,states:u,config:y}),k=o({selectors:A,root:y.root});if(c)return(0,s.h)(i,{elements:k,defaults:t,props:r,deepProps:p,elementProps:d});const j=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const r={};for(const s of e){const e=t[s];null!=e&&Object.assign(r,e)}return r})({selectors:A,styles:y.styles});if(l)return(0,s.h)(s.H,Object.assign({},t,{style:j},n),(0,s.h)(i,{elements:k,defaults:t,props:r,deepProps:p,elementProps:d}),h,v.map((e=>{if(Array.isArray(e)){const[r,a]=e;return(0,s.h)(r,Object.assign({},t,a))}return e})));if(["dyte-header","dyte-controlbar"].includes(f)&&(n.disableRender=!0),f.startsWith("dyte-"))return(0,s.h)(f,Object.assign({},t,{style:j},n),(0,s.h)(i,{elements:k,defaults:t,props:r,deepProps:p,elementProps:d}),h,v.map((e=>{if(Array.isArray(e)){const[r,a]=e;return(0,s.h)(r,Object.assign({},t,a))}return e})));{const[e,a]=f.split("#");return(0,s.h)(e,Object.assign({id:a,style:j},n),(0,s.h)(i,{elements:k,defaults:t,props:r,deepProps:p,elementProps:d}),h,v.map((e=>{if(Array.isArray(e)){const[r,a]=e;return(0,s.h)(r,Object.assign({},t,a))}return e})))}}}}]);