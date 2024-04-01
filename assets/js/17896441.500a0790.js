(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{1310:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});t(67294);var a=t(90512),s=t(35281),i=t(78425),r=t(48596),o=t(33692),c=t(95999),l=t(44996),d=t(85893);function u(e){return(0,d.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){var e=(0,l.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,d.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,d.jsx)(o.Z,{className:a,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:a,children:n})}function b(e){var n=e.children,t=e.active,s=e.index,i=e.addMicrodata;return(0,d.jsxs)("li",Object.assign({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(s+1)})]}))}function p(){var e=(0,i.s1)(),n=(0,r.Ns)();return e?(0,d.jsx)("nav",{className:(0,a.Z)(s.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map((function(n,t){var a=t===e.length-1,s="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(b,{active:a,index:t,addMicrodata:!!s,children:(0,d.jsx)(f,{href:s,isLast:a,children:n.label})},t)}))]})}):null}},18504:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>Pn});var a=t(67294),s=t(10833),i=t(69688),r=t(85893),o=a.createContext(null);function c(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(o.Provider,{value:t,children:n})}function l(){var e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function d(){var e,n=l(),t=n.metadata,a=n.frontMatter,i=n.assets;return(0,r.jsx)(s.d,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=t(90512),m=t(87524),h=t(4966);function v(){var e=l().metadata;return(0,r.jsx)(h.Z,{previous:e.previous,next:e.next})}var f=t(23120),b=t(44364),p=t(35281),g=t(95999),j=t(33692);const x={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function N(e){var n=e.permalink,t=e.label,a=e.count;return(0,r.jsxs)(j.Z,{href:n,className:(0,u.Z)(x.tag,a?x.tagWithCount:x.tagRegular),children:[t,a&&(0,r.jsx)("span",{children:a})]})}const C={tags:"tags_jXut",tag:"tag_QGVx"};function k(e){var n=e.tags;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(g.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,u.Z)(C.tags,"padding--none","margin-left--sm"),children:n.map((function(e){var n=e.label,t=e.permalink;return(0,r.jsx)("li",{className:C.tag,children:(0,r.jsx)(N,{label:n,permalink:t})},t)}))})]})}var y=t(63366);const L={iconEdit:"iconEdit_Z9Sw"};var Z=["className"];function _(e){var n=e.className,t=(0,y.Z)(e,Z);return(0,r.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(L.iconEdit,n),"aria-hidden":"true"},t,{children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function B(e){var n=e.editUrl;return(0,r.jsxs)(j.Z,{to:n,className:p.k.common.editThisPage,children:[(0,r.jsx)(_,{}),(0,r.jsx)(g.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var w=t(52263);function T(e){void 0===e&&(e={});var n=(0,w.Z)().i18n.currentLocale,t=function(){var e=(0,w.Z)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}function O(e){var n=e.lastUpdatedAt,t=new Date(n),a=T({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,r.jsx)(g.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function E(e){var n=e.lastUpdatedBy;return(0,r.jsx)(g.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:n})},children:" by {user}"})}function H(e){var n=e.lastUpdatedAt,t=e.lastUpdatedBy;return(0,r.jsxs)("span",{className:p.k.common.lastUpdated,children:[(0,r.jsx)(g.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,r.jsx)(O,{lastUpdatedAt:n}):"",byUser:t?(0,r.jsx)(E,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const A={lastUpdated:"lastUpdated_JAkA"};function I(e){var n=e.className,t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy;return(0,r.jsxs)("div",{className:(0,u.Z)("row",n),children:[(0,r.jsx)("div",{className:"col",children:t&&(0,r.jsx)(B,{editUrl:t})}),(0,r.jsx)("div",{className:(0,u.Z)("col",A.lastUpdated),children:(a||s)&&(0,r.jsx)(H,{lastUpdatedAt:a,lastUpdatedBy:s})})]})}function M(){var e=l().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.tags,i=s.length>0,o=!!(n||t||a);return i||o?(0,r.jsxs)("footer",{className:(0,u.Z)(p.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,r.jsx)("div",{className:(0,u.Z)("row margin-top--sm",p.k.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k,{tags:s})})}),o&&(0,r.jsx)(I,{className:(0,u.Z)("margin-top--sm",p.k.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var S=t(86043),U=t(86668),z=["parentIndex"];function V(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,s=(0,y.Z)(e,z);t>=0?n[t].children.push(s):a.push(s)})),a}function R(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=R({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function P(e){var n=e.getBoundingClientRect();return n.top===n.bottom?P(e.parentNode):n}function D(e,n){var t,a,s=n.anchorTopOffset,i=e.find((function(e){return P(e).top>=s}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(P(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function W(){var e=(0,a.useRef)(0),n=(0,U.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function F(e){var n=(0,a.useRef)(void 0),t=W();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],s=n;s<=t;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=D(o,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===l)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function q(e){var n=e.toc,t=e.className,a=e.linkClassName,s=e.isChild;return n.length?(0,r.jsx)("ul",{className:s?void 0:t,children:n.map((function(e){return(0,r.jsxs)("li",{children:[(0,r.jsx)(j.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,r.jsx)(q,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const G=a.memo(q);var J=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function $(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,i=e.linkClassName,o=void 0===i?"table-of-contents__link":i,c=e.linkActiveClassName,l=void 0===c?void 0:c,d=e.minHeadingLevel,u=e.maxHeadingLevel,m=(0,y.Z)(e,J),h=(0,U.L)(),v=null!=d?d:h.tableOfContents.minHeadingLevel,f=null!=u?u:h.tableOfContents.maxHeadingLevel,b=function(e){var n=e.toc,t=e.minHeadingLevel,s=e.maxHeadingLevel;return(0,a.useMemo)((function(){return R({toc:V(n),minHeadingLevel:t,maxHeadingLevel:s})}),[n,t,s])}({toc:n,minHeadingLevel:v,maxHeadingLevel:f});return F((0,a.useMemo)((function(){if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:v,maxHeadingLevel:f}}),[o,l,v,f])),(0,r.jsx)(G,Object.assign({toc:b,className:s,linkClassName:o},m))}const Y={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var Q=["collapsed"];function X(e){var n=e.collapsed,t=(0,y.Z)(e,Q);return(0,r.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.Z)("clean-btn",Y.tocCollapsibleButton,!n&&Y.tocCollapsibleButtonExpanded,t.className),children:(0,r.jsx)(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const K={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function ee(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,S.u)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.Z)(K.tocCollapsible,!o&&K.tocCollapsibleExpanded,t),children:[(0,r.jsx)(X,{collapsed:o,onClick:c}),(0,r.jsx)(S.z,{lazy:!0,className:K.tocCollapsibleContent,collapsed:o,children:(0,r.jsx)($,{toc:n,minHeadingLevel:a,maxHeadingLevel:s})})]})}const ne={tocMobile:"tocMobile_ITEo"};function te(){var e=l(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(ee,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(p.k.docs.docTocMobile,ne.tocMobile)})}const ae={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var se=["className"],ie="table-of-contents__link toc-highlight",re="table-of-contents__link--active";function oe(e){var n=e.className,t=(0,y.Z)(e,se);return(0,r.jsx)("div",{className:(0,u.Z)(ae.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)($,Object.assign({},t,{linkClassName:ie,linkActiveClassName:re}))})}function ce(){var e=l(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(oe,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var le=t(92503),de=t(11151),ue=t(35742),me=t(72389),he=t(92949);function ve(){var e=(0,U.L)().prism,n=(0,he.I)().colorMode,t=e.theme,a=e.darkTheme||t;return"dark"===n?a:t}var fe=t(26528),be=t(87594),pe=t.n(be),ge=(0,fe.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),je=(0,fe.Z)(/\{([\d,-]+)\}/,{range:1}),xe={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},Ne=Object.assign({},xe,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),Ce=Object.keys(xe);function ke(e,n){var t=e.map((function(e){var t=Ne[e],a=t.start,s=t.end;return"(?:"+a+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+s+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function ye(e,n){var t=e.replace(/\n$/,""),a=n.language,s=n.magicComments,i=n.metastring;if(i&&je.test(i)){var r=i.match(je).groups.range;if(0===s.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var o=s[0].className,c=pe()(r).filter((function(e){return e>0})).map((function(e){return[e-1,[o]]}));return{lineClassNames:Object.fromEntries(c),code:t}}if(void 0===a)return{lineClassNames:{},code:t};for(var l=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return ke(["js","jsBlock"],n);case"jsx":case"tsx":return ke(["js","jsBlock","jsx"],n);case"html":return ke(["js","jsBlock","html"],n);case"python":case"py":case"bash":return ke(["bash"],n);case"markdown":case"md":return ke(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return ke(["tex"],n);case"lua":case"haskell":case"sql":return ke(["lua"],n);case"wasm":return ke(["wasm"],n);case"vb":case"vba":case"visual-basic":return ke(["vb","rem"],n);case"vbnet":return ke(["vbnet","rem"],n);case"batch":return ke(["rem"],n);case"basic":return ke(["rem","f90"],n);case"fsharp":return ke(["js","ml"],n);case"ocaml":case"sml":return ke(["ml"],n);case"fortran":return ke(["f90"],n);case"cobol":return ke(["cobol"],n);default:return ke(Ce,n)}}(a,s),d=t.split("\n"),u=Object.fromEntries(s.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(s.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),h=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),v=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),f=0;f<d.length;){var b=d[f].match(l);if(b){var p=b.slice(1).find((function(e){return void 0!==e}));m[p]?u[m[p]].range+=f+",":h[p]?u[h[p]].start=f:v[p]&&(u[v[p]].range+=u[v[p]].start+"-"+(f-1)+","),d.splice(f,1)}else f+=1}t=d.join("\n");var g={};return Object.entries(u).forEach((function(e){var n=e[0],t=e[1].range;pe()(t).forEach((function(e){null!=g[e]||(g[e]=[]),g[e].push(n)}))})),{lineClassNames:g,code:t}}const Le={codeBlockContainer:"codeBlockContainer_Ckt0"};var Ze=["as"];function _e(e){var n=e.as,t=(0,y.Z)(e,Ze),a=function(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var a=e[0],s=e[1],i=n[a];i&&"string"==typeof s&&(t[i]=s)})),t}(ve());return(0,r.jsx)(n,Object.assign({},t,{style:a,className:(0,u.Z)(t.className,Le.codeBlockContainer,p.k.common.codeBlock)}))}const Be={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function we(e){var n=e.children,t=e.className;return(0,r.jsx)(_e,{as:"pre",tabIndex:0,className:(0,u.Z)(Be.codeBlockStandalone,"thin-scrollbar",t),children:(0,r.jsx)("code",{className:Be.codeBlockLines,children:n})})}var Te={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Oe(e,n){var t=(0,a.useState)(),s=t[0],r=t[1],o=(0,a.useCallback)((function(){var n;r(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((function(){o()}),[o]),function(e,n,t){void 0===t&&(t=Te);var s=(0,i.zX)(n),r=(0,i.Ql)(t);(0,a.useEffect)((function(){var n=new MutationObserver(s);return e&&n.observe(e,r),function(){return n.disconnect()}}),[e,s,r])}(s,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Ee=t(42573);const He={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function Ae(e){var n=e.line,t=e.classNames,a=e.showLineNumbers,s=e.getLineProps,i=e.getTokenProps;1===n.length&&"\n"===n[0].content&&(n[0].content="");var o=s({line:n,className:(0,u.Z)(t,a&&He.codeLine)}),c=n.map((function(e,n){return(0,r.jsx)("span",Object.assign({},i({token:e,key:n})),n)}));return(0,r.jsxs)("span",Object.assign({},o,{children:[a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:He.codeLineNumber}),(0,r.jsx)("span",{className:He.codeLineContent,children:c})]}):c,(0,r.jsx)("br",{})]}))}function Ie(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function Me(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const Se={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Ue(e){var n=e.code,t=e.className,s=(0,a.useState)(!1),i=s[0],o=s[1],c=(0,a.useRef)(void 0),l=(0,a.useCallback)((function(){!function(e,n){var t=(void 0===n?{}:n).target,a=void 0===t?document.body:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var s=document.createElement("textarea"),i=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";var r=document.getSelection(),o=r.rangeCount>0&&r.getRangeAt(0);a.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}s.remove(),o&&(r.removeAllRanges(),r.addRange(o)),i&&i.focus()}(n),o(!0),c.current=window.setTimeout((function(){o(!1)}),1e3)}),[n]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),(0,r.jsx)("button",{type:"button","aria-label":i?(0,g.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,g.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,g.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",t,Se.copyButton,i&&Se.copyButtonCopied),onClick:l,children:(0,r.jsxs)("span",{className:Se.copyButtonIcons,"aria-hidden":"true",children:[(0,r.jsx)(Ie,{className:Se.copyButtonIcon}),(0,r.jsx)(Me,{className:Se.copyButtonSuccessIcon})]})})}function ze(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const Ve={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Re(e){var n=e.className,t=e.onClick,a=e.isEnabled,s=(0,g.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,r.jsx)("button",{type:"button",onClick:t,className:(0,u.Z)("clean-btn",n,a&&Ve.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,r.jsx)(ze,{className:Ve.wordWrapButtonIcon,"aria-hidden":"true"})})}function Pe(e){var n,t,s,i,o,c,l,d,m,h,v,f=e.children,b=e.className,p=void 0===b?"":b,g=e.metastring,j=e.title,x=e.showLineNumbers,N=e.language,C=(0,U.L)().prism,k=C.defaultLanguage,y=C.magicComments,L=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=N?N:null==(t=p.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:t.replace(/language-/,""))?n:k),Z=ve(),_=(s=(0,a.useState)(!1),i=s[0],o=s[1],c=(0,a.useState)(!1),l=c[0],d=c[1],m=(0,a.useRef)(null),h=(0,a.useCallback)((function(){var e=m.current.querySelector("code");i?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),o((function(e){return!e}))}),[m,i]),v=(0,a.useCallback)((function(){var e=m.current,n=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");d(n)}),[m]),Oe(m,v),(0,a.useEffect)((function(){v()}),[i,v]),(0,a.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:m,isEnabled:i,isCodeScrollable:l,toggle:h}),B=function(e){var n,t;return null!=(n=null==e||null==(t=e.match(ge))?void 0:t.groups.title)?n:""}(g)||j,w=ye(f,{metastring:g,language:L,magicComments:y}),T=w.lineClassNames,O=w.code,E=null!=x?x:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(g);return(0,r.jsxs)(_e,{as:"div",className:(0,u.Z)(p,L&&!p.includes("language-"+L)&&"language-"+L),children:[B&&(0,r.jsx)("div",{className:Be.codeBlockTitle,children:B}),(0,r.jsxs)("div",{className:Be.codeBlockContent,children:[(0,r.jsx)(Ee.y$,{theme:Z,code:O,language:null!=L?L:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,s=e.getLineProps,i=e.getTokenProps;return(0,r.jsx)("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,u.Z)(n,Be.codeBlock,"thin-scrollbar"),style:t,children:(0,r.jsx)("code",{className:(0,u.Z)(Be.codeBlockLines,E&&Be.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,r.jsx)(Ae,{line:e,getLineProps:s,getTokenProps:i,classNames:T[n],showLineNumbers:E},n)}))})})}}),(0,r.jsxs)("div",{className:Be.buttonGroup,children:[(_.isEnabled||_.isCodeScrollable)&&(0,r.jsx)(Re,{className:Be.codeButton,onClick:function(){return _.toggle()},isEnabled:_.isEnabled}),(0,r.jsx)(Ue,{className:Be.codeButton,code:O})]})]})]})}var De=["children"];function We(e){var n=e.children,t=(0,y.Z)(e,De),s=(0,me.Z)(),i=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),o="string"==typeof i?Pe:we;return(0,r.jsx)(o,Object.assign({},t,{children:i}),String(s))}function Fe(e){return(0,r.jsx)("code",Object.assign({},e))}var qe=t(28138);const Ge={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var Je=["summary","children"];function $e(e){return!!e&&("SUMMARY"===e.tagName||$e(e.parentElement))}function Ye(e,n){return!!e&&(e===n||Ye(e.parentElement,n))}function Qe(e){var n=e.summary,t=e.children,s=(0,y.Z)(e,Je);(0,qe.Z)().collectAnchor(s.id);var i=(0,me.Z)(),o=(0,a.useRef)(null),c=(0,S.u)({initialState:!s.open}),l=c.collapsed,d=c.setCollapsed,m=(0,a.useState)(s.open),h=m[0],v=m[1],f=a.isValidElement(n)?n:(0,r.jsx)("summary",{children:null!=n?n:"Details"});return(0,r.jsxs)("details",Object.assign({},s,{ref:o,open:h,"data-collapsed":l,className:(0,u.Z)(Ge.details,i&&Ge.isBrowser,s.className),onMouseDown:function(e){$e(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;$e(n)&&Ye(n,o.current)&&(e.preventDefault(),l?(d(!1),v(!0)):d(!0))},children:[f,(0,r.jsx)(S.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){d(e),v(!e)},children:(0,r.jsx)("div",{className:Ge.collapsibleContent,children:t})})]}))}const Xe={details:"details_b_Ee"};var Ke="alert alert--info";function en(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,r.jsx)(Qe,Object.assign({},n,{className:(0,u.Z)(Ke,Xe.details,n.className)}))}function nn(e){var n=a.Children.toArray(e.children),t=n.find((function(e){return a.isValidElement(e)&&"summary"===e.type})),s=(0,r.jsx)(r.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,r.jsx)(en,Object.assign({},e,{summary:t,children:s}))}function tn(e){return(0,r.jsx)(le.Z,Object.assign({},e))}const an={containsTaskList:"containsTaskList_mC6p"};function sn(e){if(void 0!==e)return(0,u.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&an.containsTaskList)}const rn={img:"img_ev3q"};function on(e){var n,t=function(e){var n=a.Children.toArray(e),t=n.find((function(e){return a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),s=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:s.length>0?(0,r.jsx)(r.Fragment,{children:s}):null}}(e.children),s=t.mdxAdmonitionTitle,i=t.rest,o=null!=(n=e.title)?n:s;return Object.assign({},e,o&&{title:o},{children:i})}const cn={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function ln(e){var n=e.type,t=e.className,a=e.children;return(0,r.jsx)("div",{className:(0,u.Z)(p.k.common.admonition,p.k.common.admonitionType(n),cn.admonition,t),children:a})}function dn(e){var n=e.icon,t=e.title;return(0,r.jsxs)("div",{className:cn.admonitionHeading,children:[(0,r.jsx)("span",{className:cn.admonitionIcon,children:n}),t]})}function un(e){var n=e.children;return n?(0,r.jsx)("div",{className:cn.admonitionContent,children:n}):null}function mn(e){var n=e.type,t=e.icon,a=e.title,s=e.children,i=e.className;return(0,r.jsxs)(ln,{type:n,className:i,children:[(0,r.jsx)(dn,{title:a,icon:t}),(0,r.jsx)(un,{children:s})]})}function hn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var vn={icon:(0,r.jsx)(hn,{}),title:(0,r.jsx)(g.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function fn(e){return(0,r.jsx)(mn,Object.assign({},vn,e,{className:(0,u.Z)("alert alert--secondary",e.className),children:e.children}))}function bn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var pn={icon:(0,r.jsx)(bn,{}),title:(0,r.jsx)(g.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function gn(e){return(0,r.jsx)(mn,Object.assign({},pn,e,{className:(0,u.Z)("alert alert--success",e.className),children:e.children}))}function jn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var xn={icon:(0,r.jsx)(jn,{}),title:(0,r.jsx)(g.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function Nn(e){return(0,r.jsx)(mn,Object.assign({},xn,e,{className:(0,u.Z)("alert alert--info",e.className),children:e.children}))}function Cn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var kn={icon:(0,r.jsx)(Cn,{}),title:(0,r.jsx)(g.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function yn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var Ln={icon:(0,r.jsx)(yn,{}),title:(0,r.jsx)(g.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var Zn={icon:(0,r.jsx)(Cn,{}),title:(0,r.jsx)(g.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var _n={note:fn,tip:gn,info:Nn,warning:function(e){return(0,r.jsx)(mn,Object.assign({},kn,e,{className:(0,u.Z)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,r.jsx)(mn,Object.assign({},Ln,e,{className:(0,u.Z)("alert alert--danger",e.className),children:e.children}))}},Bn={secondary:function(e){return(0,r.jsx)(fn,Object.assign({title:"secondary"},e))},important:function(e){return(0,r.jsx)(Nn,Object.assign({title:"important"},e))},success:function(e){return(0,r.jsx)(gn,Object.assign({title:"success"},e))},caution:function(e){return(0,r.jsx)(mn,Object.assign({},Zn,e,{className:(0,u.Z)("alert alert--warning",e.className),children:e.children}))}};const wn=Object.assign({},_n,Bn);function Tn(e){var n,t=on(e),a=(n=t.type,wn[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),wn.info));return(0,r.jsx)(a,Object.assign({},t))}const On={Head:ue.Z,details:nn,Details:nn,code:function(e){return function(e){return void 0!==e.children&&a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))}(e)?(0,r.jsx)(Fe,Object.assign({},e)):(0,r.jsx)(We,Object.assign({},e))},a:function(e){return(0,r.jsx)(j.Z,Object.assign({},e))},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",Object.assign({},e,{className:sn(e.className)}))},li:function(e){return(0,qe.Z)().collectAnchor(e.id),(0,r.jsx)("li",Object.assign({},e))},img:function(e){return(0,r.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},e,{className:(n=e.className,(0,u.Z)(n,rn.img))}));var n},h1:function(e){return(0,r.jsx)(tn,Object.assign({as:"h1"},e))},h2:function(e){return(0,r.jsx)(tn,Object.assign({as:"h2"},e))},h3:function(e){return(0,r.jsx)(tn,Object.assign({as:"h3"},e))},h4:function(e){return(0,r.jsx)(tn,Object.assign({as:"h4"},e))},h5:function(e){return(0,r.jsx)(tn,Object.assign({as:"h5"},e))},h6:function(e){return(0,r.jsx)(tn,Object.assign({as:"h6"},e))},admonition:Tn,mermaid:function(){return null}};function En(e){var n=e.children;return(0,r.jsx)(de.Z,{components:On,children:n})}function Hn(e){var n,t,a,s,i=e.children,o=(n=l(),t=n.metadata,a=n.frontMatter,s=n.contentTitle,a.hide_title||void 0!==s?null:t.title);return(0,r.jsxs)("div",{className:(0,u.Z)(p.k.docs.docMarkdown,"markdown"),children:[o&&(0,r.jsx)("header",{children:(0,r.jsx)(le.Z,{as:"h1",children:o})}),(0,r.jsx)(En,{children:i})]})}var An=t(1310);function In(){return(0,r.jsx)(g.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Mn(){return(0,r.jsx)(g.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Sn(){return(0,r.jsx)(ue.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Un(e){var n=e.className;return(0,r.jsx)(Tn,{type:"caution",title:(0,r.jsx)(In,{}),className:(0,u.Z)(n,p.k.common.unlistedBanner),children:(0,r.jsx)(Mn,{})})}function zn(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Sn,{}),(0,r.jsx)(Un,Object.assign({},e))]})}const Vn={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Rn(e){var n,t,a,s,i,o,c=e.children,d=(n=l(),t=n.frontMatter,a=n.toc,s=(0,m.i)(),i=t.hide_table_of_contents,o=!i&&a.length>0,{hidden:i,mobile:o?(0,r.jsx)(te,{}):void 0,desktop:!o||"desktop"!==s&&"ssr"!==s?void 0:(0,r.jsx)(ce,{})}),h=l().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.Z)("col",!d.hidden&&Vn.docItemCol),children:[h&&(0,r.jsx)(zn,{}),(0,r.jsx)(f.Z,{}),(0,r.jsxs)("div",{className:Vn.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(An.Z,{}),(0,r.jsx)(b.Z,{}),d.mobile,(0,r.jsx)(Hn,{children:c}),(0,r.jsx)(M,{})]}),(0,r.jsx)(v,{})]})]}),d.desktop&&(0,r.jsx)("div",{className:"col col--3",children:d.desktop})]})}function Pn(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,r.jsx)(c,{content:e.content,children:(0,r.jsxs)(s.FG,{className:n,children:[(0,r.jsx)(d,{}),(0,r.jsx)(Rn,{children:(0,r.jsx)(t,{})})]})})}},4966:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});t(67294);var a=t(95999),s=t(90512),i=t(33692),r=t(85893);function o(e){var n=e.permalink,t=e.title,a=e.subLabel,o=e.isNext;return(0,r.jsxs)(i.Z,{className:(0,s.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:t})]})}function c(e){var n=e.previous,t=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,r.jsx)(o,Object.assign({},n,{subLabel:(0,r.jsx)(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,r.jsx)(o,Object.assign({},t,{subLabel:(0,r.jsx)(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},44364:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});t(67294);var a=t(90512),s=t(95999),i=t(35281),r=t(74477),o=t(85893);function c(e){var n=e.className,t=(0,r.E)();return t.badge?(0,o.jsx)("span",{className:(0,a.Z)(n,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},23120:(e,n,t)=>{"use strict";t.d(n,{Z:()=>b});t(67294);var a=t(90512),s=t(52263),i=t(33692),r=t(95999),o=t(80143),c=t(35281),l=t(60373),d=t(74477),u=t(85893);var m={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){var n=m[e.versionMetadata.banner];return(0,u.jsx)(n,Object.assign({},e))}function v(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:t,onClick:a,children:(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){var n,t=e.className,i=e.versionMetadata,r=(0,s.Z)().siteConfig.title,d=(0,o.gA)({failfast:!0}).pluginId,m=(0,l.J)(d).savePreferredVersionName,f=(0,o.Jo)(d),b=f.latestDocSuggestion,p=f.latestVersionSuggestion,g=null!=b?b:(n=p).docs.find((function(e){return e.id===n.mainDocId}));return(0,u.jsxs)("div",{className:(0,a.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:i})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:p.label,to:g.path,onClick:function(){return m(p.name)}})})]})}function b(e){var n=e.className,t=(0,d.E)();return t.banner?(0,u.jsx)(f,{className:n,versionMetadata:t}):null}},87594:(e,n)=>{function t(e){let n,t=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))t.push(parseInt(a,10));else if(n=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,s,i]=n;if(a&&i){a=parseInt(a),i=parseInt(i);const e=a<i?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(i+=e);for(let n=a;n!==i;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},11151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);