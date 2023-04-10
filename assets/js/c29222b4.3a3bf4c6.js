"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[155],{3905:(t,e,n)=>{n.d(e,{kt:()=>g});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),g=p(n),d=i,m=g["".concat(u,".").concat(d)]||g[d]||l[d]||o;return n?r.createElement(m,a(a({ref:e},s),{},{components:n})):r.createElement(m,a({ref:e},s))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38349:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Setting up the Darklang repo"},u=void 0,p={unversionedId:"contributing/setting-up-the-repo",id:"contributing/setting-up-the-repo",title:"Setting up the Darklang repo",description:"You can access the Darklang repo at",source:"@site/docs/contributing/setting-up-the-repo.md",sourceDirName:"contributing",slug:"/contributing/setting-up-the-repo",permalink:"/contributing/setting-up-the-repo",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/setting-up-the-repo.md",tags:[],version:"current",frontMatter:{title:"Setting up the Darklang repo"},sidebar:"Contributing",previous:{title:"Getting started",permalink:"/contributing/getting-started"},next:{title:"Adding your first test",permalink:"/contributing/adding-your-first-test"}},l={},s=[],g={toc:s};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can access the Darklang repo at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark"},"https://github.com/darklang/dark"),". This is a\nmonorepo containing the main F# backend, as well as some auxiliary services used\nto run the Darklang infrastructure."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run through the installation instructions in the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/blob/main/README.md"},"README")),(0,o.kt)("li",{parentName:"ul"},"You should now be running ",(0,o.kt)("inlineCode",{parentName:"li"},"./scripts/builder --compile --test --watch")," and\nseeing a completed build.")))}d.isMDXComponent=!0}}]);