"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[931],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(v,o(o({ref:n},u),{},{components:t})):r.createElement(v,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"languageoverview",title:"Language Overview",sidebar_label:"Overview"},l=void 0,c={unversionedId:"discussion/languageoverview",id:"discussion/languageoverview",title:"Language Overview",description:"Dark isn't just a language. It's a combination of the language, editor,",source:"@site/docs/discussion/languageoverview.md",sourceDirName:"discussion",slug:"/discussion/languageoverview",permalink:"/discussion/languageoverview",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/discussion/languageoverview.md",tags:[],version:"current",frontMatter:{id:"languageoverview",title:"Language Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Discussion",permalink:"/category/discussion"},next:{title:"Unique Aspects",permalink:"/discussion/unique-aspects"}},u={},p=[{value:"Functional",id:"functional",level:3},{value:"More Details",id:"more-details",level:3}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dark isn't just a language. It's a combination of the language, editor,\nframework, and infrastructure. When writing code in Dark, you can run functions,\nand wait to handle errors. Many aspects that would be not considered \"language\"\nin other environments are part of Dark."),(0,i.kt)("p",null,"Dark also includes HTTP libraries for interacting with external APIs, a package\nmanager to make that even easier, and built in functionality for datastores."),(0,i.kt)("h3",{id:"functional"},"Functional"),(0,i.kt)("p",null,"Dark is a statically-typed functional/imperative hybrid, based loosely on ML.\nDark has implicit returns, and makes heavy use of pipelines and functions like\n",(0,i.kt)("inlineCode",{parentName:"p"},"List::map")),(0,i.kt)("h3",{id:"more-details"},"More Details"),(0,i.kt)("p",null,"Dark is somewhat similar to OCaml or Elm. It has many similarities to Rust and\nHaskell, and is also influenced by Clojure, Ruby, Python, CoffeeScript, as well\nas our experience with (alphabetically) Bash, C, Clojure, CoffeeScript, C++,\nElm, Javascript, Java, Haskell, OCaml, Perl, PHP, Python, ReasonML, Ruby/Rails,\nReact, and Rust."))}f.isMDXComponent=!0}}]);