"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={},s="HTTP Framework",l={unversionedId:"reference/framework/http-framework",id:"reference/framework/http-framework",title:"HTTP Framework",description:"The result of HTTP handlers are automatically converted into HTTP responses. By",source:"@site/docs/reference/framework/http-framework.md",sourceDirName:"reference/framework",slug:"/reference/framework/http-framework",permalink:"/reference/framework/http-framework",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/reference/framework/http-framework.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"HTTP Client",permalink:"/reference/httpclient"},next:{title:"Datastores",permalink:"/reference/framework/datastores"}},p={},f=[],u={toc:f};function d(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-framework"},"HTTP Framework"),(0,o.kt)("p",null,"The result of HTTP handlers are automatically converted into HTTP responses. By\ndefault, they are converted to JSON, and returned with a content-type based on\ntheir type: records, dictionaries and lists are given the content-type\n",(0,o.kt)("inlineCode",{parentName:"p"},'"application/json; charset=utf-8"'),", all other types are given the content-type\n",(0,o.kt)("inlineCode",{parentName:"p"},'"text/plain; charset=utf-8"'),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We recogize this is a poor choice, and future versions of the HTTP stack will\nhave better default behaviour.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP::")," module provides functions to create responses to external HTTP\ncalls. Each response function, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Http::response"),", creates a response\nvalue; a response value returned by the handler will be sent as a response to\nthe client."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"HTTPResponseWith",src:r(39741).Z,width:"836",height:"292"})),(0,o.kt)("p",null,"The live value beneath the handler will show the return value."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"HTTPForbidden",src:r(94759).Z,width:"792",height:"342"})),(0,o.kt)("p",null,"To set cookies, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP::setCookie")," to create a suitable HTTP header.\n",(0,o.kt)("img",{alt:"HTTPRespondWithHeaderSetCookie",src:r(14669).Z,width:"1158",height:"302"})))}d.isMDXComponent=!0},39741:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/respondwith-bbcacc55e8fb6c9da4444164b96c980a.png"},94759:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/response-81c92fe6d3389bbcbcf3cc7f4076c380.png"},14669:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/setcookie-a2d9f016d4b1a0ff5a1fbb303a0ef6e9.png"}}]);