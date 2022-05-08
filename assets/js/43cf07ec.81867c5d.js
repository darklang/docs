"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"unique-aspects",title:"Unique Aspects",sidebar_label:"Unique Aspects"},l=void 0,u={unversionedId:"discussion/unique-aspects",id:"discussion/unique-aspects",title:"Unique Aspects",description:"Dark being connected to the editor and infrastructure allows for unique language",source:"@site/docs/discussion/unique-aspects.md",sourceDirName:"discussion",slug:"/discussion/unique-aspects",permalink:"/discussion/unique-aspects",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/discussion/unique-aspects.md",tags:[],version:"current",frontMatter:{id:"unique-aspects",title:"Unique Aspects",sidebar_label:"Unique Aspects"},sidebar:"docs",previous:{title:"Overview",permalink:"/discussion/languageoverview"},next:{title:"Functional Aspects",permalink:"/discussion/functional-aspects"}},c={},p=[{value:"Play &amp; Replay Buttons",id:"play--replay-buttons",level:2},{value:"Function Versioning",id:"function-versioning",level:2}],d={toc:p};function f(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dark being connected to the editor and infrastructure allows for unique language\nfunctionality."),(0,i.kt)("h2",{id:"play--replay-buttons"},"Play & Replay Buttons"),(0,i.kt)("p",null,"The language being connected to the editor and infrastructure allows interactive\nfunctions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functions that do not have side effects (like ",(0,i.kt)("inlineCode",{parentName:"li"},"Int::add"),") run automatically."),(0,i.kt)("li",{parentName:"ul"},"Functions with side effects have play buttons. Press the play button to\nexecute the function for the selected trace.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/playbutton.png",src:n(91129).Z,width:"1604",height:"396"})),(0,i.kt)("p",null,"The replay icon indicates the function has been executed already. Pressing it\nexecutes the code for the trace again."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/replaybutton.png",src:n(49003).Z,width:"1600",height:"386"})),(0,i.kt)("p",null,"Replay an entire handler for the selected trace (including all functions within\nthe handler) in the upper right. This would replay ",(0,i.kt)("inlineCode",{parentName:"p"},"DB::generateKey")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"DB::set"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/replayhandler.png",src:n(43818).Z,width:"850",height:"382"})),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nhShq-HCFxs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"function-versioning"},"Function Versioning"),(0,i.kt)("p",null,"You can see that many standard library items are labeled \u201c",(0,i.kt)("inlineCode",{parentName:"p"},"v3"),"\u201d or \u201c",(0,i.kt)("inlineCode",{parentName:"p"},"v1"),"\u201d in the\neditor. These refer to the version of the function. When you start a new canvas,\nyou will always have the latest versions. If we upgrade, you\u2019ll have the choice\nto do so, but can continue to use the old ones."))}f.isMDXComponent=!0},91129:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/playbutton-e89dde4f3e24b4bbf7d6db0df914d43a.png"},49003:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/replaybutton-b39dfceafe87e077a58b11bbf90221d4.png"},43818:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/replayhandler-024389441b5b3b408b11e47fa638c927.png"}}]);