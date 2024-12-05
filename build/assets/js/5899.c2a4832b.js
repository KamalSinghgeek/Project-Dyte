"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5899],{85899:(t,e,s)=>{s.r(e),s.d(e,{dyte_sidebar:()=>c});var i=s(72944),n=s(17073),a=s(74157),r=s(93514),o=s(26468),l=s(37545),d=s(17213);s(55055),s(94370),s(64383);const c=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.getTabs=()=>this.meeting.self.config?this.enabledSections.filter((t=>this.meeting.self.config.controlBar.elements[t.id])):this.enabledSections,this.close=()=>{this.stateUpdate.emit({activeSidebar:!1,sidebar:this.defaultSection}),o.s.sidebar=this.currentTab,o.s.activeSidebar=!1},this.toggleFloating=()=>{this.isFloating=!this.isFloating,o.s.sidebarFloating=this.isFloating},this.enabledSections=[],this.defaultSection="chat",this.meeting=void 0,this.states=void 0,this.config=r.d,this.iconPack=n.d,this.t=(0,a.u)(),this.size=void 0,this.view="sidebar",this.currentTab=this.defaultSection,this.isFloating=!1,this.enablePinning=!0}connectedCallback(){this.viewChanged(this.view),this.statesChanged(this.states),this.meetingChanged(this.meeting),this.isFloating=(null===o.s||void 0===o.s?void 0:o.s.sidebarFloating)||!1}disconnectedCallback(){var t,e;document.removeEventListener("keydown",this.keydownListener),null===(e=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===e||e.removeListener("stageStatusUpdate",this.onStageStatusUpdate),this.onStageStatusUpdate=null}meetingChanged(t){var e,s;this.updateEnabledSections(t),this.onStageStatusUpdate=t=>{this.updateEnabledSections(this.meeting)},null===(s=null===(e=this.meeting)||void 0===e?void 0:e.stage)||void 0===s||s.on("stageStatusUpdate",this.onStageStatusUpdate)}statesChanged(t){const e=t||o.s;(null==e?void 0:e.sidebar)&&(this.currentTab=e.sidebar)}viewChanged(t){"full-screen"===t?(this.enablePinning=!1,this.keydownListener=t=>{"Escape"===t.key&&this.close()},document.addEventListener("keydown",this.keydownListener)):this.enablePinning=!0}viewSection(t){this.currentTab=t,this.stateUpdate.emit({activeSidebar:!0,sidebar:this.currentTab}),o.s.activeSidebar=!0,o.s.sidebar=this.currentTab}updateEnabledSections(t=this.meeting){const e=[];(0,l.c)(t)&&e.push({id:"chat",name:this.t("chat")}),(0,l.d)(t)&&e.push({id:"polls",name:this.t("polls")}),(0,l.a)(t)&&e.push({id:"participants",name:this.t("participants")}),(0,l.b)(t)&&e.push({id:"plugins",name:this.t("plugins")}),this.enabledSections=e}render(){var t;const e={meeting:this.meeting,config:this.config,states:this.states||o.s,size:this.size,t:this.t,iconPack:this.iconPack};return!1!==(null===(t=e.states)||void 0===t?void 0:t.activeSidebar)&&this.currentTab?(0,i.h)(i.H,{class:this.enablePinning?this.isFloating?"floating":"":"floating"},(0,i.h)("dyte-sidebar-ui",{tabs:this.getTabs(),currentTab:this.currentTab,view:this.view,onTabChange:t=>{this.viewSection(t.detail)},onSidebarClose:this.close},this.enablePinning&&(0,i.h)("div",{class:"pinned-state",slot:"pinned-state"},(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",onClick:this.toggleFloating,"aria-label":this.isFloating?this.t("pin"):this.t("unpin")},(0,i.h)("dyte-icon",{icon:this.isFloating?this.iconPack.pin:this.iconPack.pin_off}))),"chat"===e.states.sidebar&&(0,i.h)(d.R,{element:"dyte-chat",defaults:e,props:{slot:"chat"}}),"polls"===e.states.sidebar&&(0,i.h)(d.R,{element:"dyte-polls",defaults:e,props:{slot:"polls"}}),"participants"===e.states.sidebar&&(0,i.h)(d.R,{element:"dyte-participants",defaults:e,props:{slot:"participants"}}),"plugins"===e.states.sidebar&&(0,i.h)(d.R,{element:"dyte-plugins",defaults:e,props:{slot:"plugins"}}))):null}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"],view:["viewChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;max-width:var(--dyte-space-80, 320px);box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-border-opacity))}:host([view='sidebar']){right:var(--dyte-space-2, 8px);overflow:clip;border-radius:var(--dyte-border-radius-lg, 12px);--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-900, 26 26 26));--tw-shadow:var(--tw-shadow-colored)}:host([view='full-screen']){top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);max-width:100%}:host(.floating){position:absolute !important;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);left:auto;z-index:50}.pinned-state{position:absolute;right:var(--dyte-space-1, 4px);display:inline-flex;width:var(--dyte-space-2, 8px);justify-content:flex-end}"},17213:(t,e,s)=>{s.d(e,{R:()=>l,l:()=>o});var i=s(72944);const n=({element:t,size:e,states:s={},config:i={}})=>{let n=[];const a=null==i?void 0:i.root[t],r=t=>{n.push(t),"string"==typeof e&&n.push(`${t}.${e}`)};if(r(t),"object"==typeof a&&!Array.isArray(a)&&null!==a){const{state:e,states:i}=a;let n=t,o=[];if(Array.isArray(i)){o=i.filter((t=>s[t])),o.sort();for(const t of o)r(`${n}.${t}`);if(o.length>1){r([n,...o].join("."))}}if("string"==typeof e){const i=`${t}[${e}=${s[e]}]`;r(i);for(const t of o)r(`${i}.${t}`);if(o.length>1){r([i,...o].join("."))}}}return n},a=({selectors:t,root:e})=>{if(!e||!Array.isArray(t))return[];let s=[];for(const i of t){const t=e[i];if(Array.isArray(t))s=[...t];else if(t){if(t.children&&(s=[...t.children]),Array.isArray(t.remove))for(const e of t.remove)s=s.filter((t=>"string"==typeof t?t!==e:!Array.isArray(t)||t[0]!==e));if(t.addBefore)for(const[e,i]of Object.entries(t.addBefore)){const t=s.findIndex((t=>"string"==typeof t?t===e:!!Array.isArray(t)&&t[0]===e));t>=0&&s.splice(t,0,...i)}Array.isArray(t.add)&&(s=s.concat(t.add)),Array.isArray(t.prepend)&&(s=t.prepend.concat(s))}}return s},r=({elements:t,defaults:e,props:s={},deepProps:n=!1,elementProps:a={}})=>Array.isArray(t)&&0!==t.length?t.map((t=>(0,i.h)(l,{element:t,defaults:e,props:s,childProps:n&&s,elementProps:a}))):null,o=({element:t,defaults:e,props:s={},elementProps:i={}})=>{var r;const{config:o,size:l,states:d}=e;let c,p={},h=[];Array.isArray(t)?[c,p,...h]=t:c=t;const u=null===(r=null==o?void 0:o.root)||void 0===r?void 0:r[c];null!=u&&"props"in u&&(s=Object.assign(Object.assign({},u.props),s)),s=Object.assign(Object.assign({},s),p),c in i&&(s=Object.assign(Object.assign({},s),i[c]));const g=n({element:c,size:l,states:d,config:o});return a({selectors:g,root:o.root}).length},l=({element:t,defaults:e,childProps:s={},props:o={},onlyChildren:l=!1,asHost:d=!1,deepProps:c=!1,elementProps:p={}},h)=>{var u;const{config:g,size:f,states:b}=e;let v,y={},m=[];Array.isArray(t)?[v,y,...m]=t:v=t;const w=null===(u=null==g?void 0:g.root)||void 0===u?void 0:u[v];null!=w&&"props"in w&&(o=Object.assign(Object.assign({},w.props),o)),o=Object.assign(Object.assign({},o),y),v in p&&(o=Object.assign(Object.assign({},o),p[v]));const A=n({element:v,size:f,states:b,config:g}),S=a({selectors:A,root:g.root});if(l)return(0,i.h)(r,{elements:S,defaults:e,props:s,deepProps:c,elementProps:p});const x=(({selectors:t,styles:e})=>{if(!Array.isArray(t)||null==e)return{};const s={};for(const i of t){const t=e[i];null!=t&&Object.assign(s,t)}return s})({selectors:A,styles:g.styles});if(d)return(0,i.h)(i.H,Object.assign({},e,{style:x},o),(0,i.h)(r,{elements:S,defaults:e,props:s,deepProps:c,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,n]=t;return(0,i.h)(s,Object.assign({},e,n))}return t})));if(["dyte-header","dyte-controlbar"].includes(v)&&(o.disableRender=!0),v.startsWith("dyte-"))return(0,i.h)(v,Object.assign({},e,{style:x},o),(0,i.h)(r,{elements:S,defaults:e,props:s,deepProps:c,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,n]=t;return(0,i.h)(s,Object.assign({},e,n))}return t})));{const[t,n]=v.split("#");return(0,i.h)(t,Object.assign({id:n,style:x},o),(0,i.h)(r,{elements:S,defaults:e,props:s,deepProps:c,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,n]=t;return(0,i.h)(s,Object.assign({},e,n))}return t})))}}},37545:(t,e,s)=>{s.d(e,{a:()=>o,b:()=>l,c:()=>a,d:()=>r});var i=s(94370),n=s(64383);const a=t=>{if(t&&!t.chat)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.chat)return!1;const{chatPublic:s,chatPrivate:i}=t.self.permissions;return s.canSend||s.text||s.files||i.canSend||i.canReceive||i.files||i.text},r=t=>{if(t&&!t.polls)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.polls)return!1;const{polls:s}=t.self.permissions;return s.canCreate||s.canView||s.canVote},o=t=>{var e,s,a,r;if((null===(e=null==t?void 0:t.__internals__)||void 0===e?void 0:e.features.hasFeature(n.F.FEAT_PARTICIPANT_LIST))&&!(null===(s=t.self.permissions)||void 0===s?void 0:s.showParticipantList))return!1;if((0,i.s)(t)&&!(null===(a=t.self.permissions)||void 0===a?void 0:a.acceptStageRequests))return!1;if(t&&!t.participants)return!1;if("LIVESTREAM"===t.meta.viewType)return t.self.permissions.acceptStageRequests||"ON_STAGE"===(null===(r=null==t?void 0:t.stage)||void 0===r?void 0:r.status);const o=null==t?void 0:t.self.config;return!(o&&!o.controlBar.elements.participants)},l=t=>{if((0,i.a)(t))return!1;if(t&&!t.plugins)return!1;if("LIVESTREAM"===t.meta.viewType)return"ON_STAGE"===t.stage.status;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.plugins)return!1;const{plugins:s}=t.self.permissions;return s.canClose||s.canStart}}}]);