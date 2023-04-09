"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8211],{3905:(e,t,n)=>{n.d(t,{kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Repository directory structure"},s=void 0,c={unversionedId:"contributing/repo-layout",id:"contributing/repo-layout",title:"Repository directory structure",description:"The Dark repo contains multiple services and compilation targets",source:"@site/docs/contributing/repo-layout.md",sourceDirName:"contributing",slug:"/contributing/repo-layout",permalink:"/contributing/repo-layout",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/repo-layout.md",tags:[],version:"current",frontMatter:{title:"Repository directory structure"},sidebar:"Contributing",previous:{title:"A tour of the Backend",permalink:"/contributing/tour-of-backend"},next:{title:"Glossary",permalink:"/contributing/glossary"}},u={},p=[{value:"Directory listing",id:"directory-listing",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Dark repo contains multiple services and compilation targets"),(0,a.kt)("h2",{id:"directory-listing"},"Directory listing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".circleci")," - CI config file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".ionide")," - config for F# VSCode plugin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".vscode")," - VSCode config"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config")," - a set of env vars for each environment. You'll be interested in the\n",(0,a.kt)("inlineCode",{parentName:"li"},"dev")," environment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs")," - sporadic documentation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs/production")," - documentation about how we run the Dark service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"backend"),' - The backend written in F# and .NET. including the language\ndefinition and execution engine, the "framework" (HTTP, DB, queues, etc), the\neditor\'s HTTP API, and the execution engine which runs in the client.',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".paket")," - Used by the Paket/NuGet package manager"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Build")," - where the compiler puts compiled code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"paket-files")," - Used by the Paket/NuGet package manager"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/BackendOnlyStdLib")," - implementation of functions which need to be run\non the backend, due to their connection to the DB, queues, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/BwdServer")," - webserver that is grand-user facing (at builtwithdark.com)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/ClientTypes")," - type definitions of types that are used in client-server\ncommunication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/ClientTypes2BackendTypes")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"src/ClientTypes2ExecutionTypes")," -\nmappings between 'internal' types and our client-facing types"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/CronChecker")," - trigger events for scheduled work"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/ExecHost")," - allow executing admin tasks (such as migrations) in\nproduction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/HttpMiddleware")," - where we define our middlewares used in Dark HTTP\nhandlers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/LibBackend")," - the framework functionality (HTTP, DB, queues, traces,\nsecrets, serialization), including standard library functions which only run\non the backend (and not in the client)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/LibBinarySerialization")," - types that we use to store Dark programs to\nour Postgres database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/LibExecution")," - the Dark language, including types, the runtime, and of\ncourse the execution engine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/LibExecutionStdLib")," - most of the standard library functions (anything\nthat doesn't ",(0,a.kt)("em",{parentName:"li"},"need")," to be run on the backend)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/LibRealExecution")," - Small wrapper around LibExecution for running in\nproduction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/LibService")," - library with some common functionality for F# services\n(currently just the backend, soon queues and cron)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/Prelude")," - utilities, libraries, common types; used everywhere"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/Parser")," - parser for Darklang language"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/QueueWorker")," - pulls user events from the queue and runs them"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tests/TestUtils")," - utilities used in Tests and FuzzTests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tests/Tests")," - mostly unit tests for backend and libexecution functionality"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testfiles/data")," - text and binary files used during various backend tests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testfiles/execution")," - unit test definitions for language and standard\nlibrary"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testfiles/httphandler")," - tests for the Dark HTTP server and middleware"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testfiles/httpclient")," - tests for the HTTP Library functions"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rundir")," - anything that runs and stores something stores it here",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logs")," - logs from running services, especially ",(0,a.kt)("inlineCode",{parentName:"li"},"bwdserver.log")," (backend)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scripts")," - bash scripts to do common (and sometimes uncommon and therefore\nforgettable) actions on the repo. Using scripts is very very common. Anytime\nthere's something interesting, we add a script to do it. Scripts are\noccasionally out of date.")))}m.isMDXComponent=!0}}]);