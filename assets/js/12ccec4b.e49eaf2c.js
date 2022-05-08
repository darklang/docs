"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8211],{3905:(e,t,n)=>{n.d(t,{kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return n?i.createElement(k,l(l({ref:t},m),{},{components:n})):i.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Repository directory structure"},s=void 0,d={unversionedId:"contributing/repo-layout",id:"contributing/repo-layout",title:"Repository directory structure",description:"The Dark repo contains multiple services and compilation targets. For OCaml,",source:"@site/docs/contributing/repo-layout.md",sourceDirName:"contributing",slug:"/contributing/repo-layout",permalink:"/contributing/repo-layout",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/repo-layout.md",tags:[],version:"current",frontMatter:{title:"Repository directory structure"},sidebar:"Contributing",previous:{title:"A tour of the Backend",permalink:"/contributing/tour-of-backend"},next:{title:"Glossary",permalink:"/contributing/glossary"}},p={},m=[{value:"Directory listing",id:"directory-listing",level:2}],c={toc:m};function u(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Dark repo contains multiple services and compilation targets. For OCaml,\nhere's how the various directories intersect, and what language they use:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Compilation targets and their respective directories",src:n(96804).Z,width:"812",height:"800"})),(0,r.kt)("h2",{id:"directory-listing"},"Directory listing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".circleci")," - CI config file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ionide")," - config for F# VsCode plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".vscode")," - VsCode config"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth0-branding")," - has some assets for our login provider"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_build")," - build dir for OCaml (empty, this is a docker volume)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_esy")," build dir for OCaml (empty, this is a docker volume)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"backend"),' - this is the old backend, written in OCaml (the new backend is in\nfsharp-backend), including the language definition and execution engine, the\n"framework" (HTTP, DB, queues, etc), the editor\'s HTTP API, and the execution\nengine which runs in the client (compiled to JS from OCaml)',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bin"),' - "main" files for executables'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsanalysis"),' - "main" file for client-side analysis/execution-engine'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libbackend")," - the main HTTP server, and framework functionality (HTTP, DB,\nqueues)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libcommon")," - some utilities shared between JS- and OCaml-compiled versions\nof backend"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libexecution")," - the Dark language, including types, the runtime, most of\nthe standard library, and of course the execution engine"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"liblegacy")," - libraries to help the F# backend reuse OCaml code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libserialization")," - binary serialization for Dark types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libservice")," - library with some common functionality for OCaml services\n(backend, queues, cron)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libtarget")," - library to support certain functions in native and JS modes.\nInterface only."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libtarget.js")," - JS implementation of ",(0,r.kt)("inlineCode",{parentName:"li"},"libtarget")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libtarget.ocaml")," - OCaml implementation of ",(0,r.kt)("inlineCode",{parentName:"li"},"libtarget")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libunshared")," - platform specific (native) version of ",(0,r.kt)("inlineCode",{parentName:"li"},"libunshared"),", which\nis used to provide types to ",(0,r.kt)("inlineCode",{parentName:"li"},"libshared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"migrations")," - SQL for migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," - installation dir for Esy (package manager-ish thing for\nOCaml)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serialization")," - definition of a binary serialization format we use to\nstore Dark programs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static")," - static HTTP assets (icons, fonts, etc)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swagger")," - deprecated old functionality"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"templates")," - where the single editor HTML template is stored"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test")," - all backend unit tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test_appdata")," - serialized mocked data for integration tests"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client")," - the editor, and the entire frontend application that is found under\n",(0,r.kt)("a",{parentName:"li",href:"http://darklang.com/a/yourcanvas"},"darklang.com/a/yourcanvas")," (note, not\ndarklang.com or the docs). Written in Bucklescript/ReasonML. All frontend\nfunctionality, except the server-side APIs used for it, are here",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/analysis")," - handles code related to live values - requesting from the\nserver, storing, sending to the client-side execution engine"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/api")," - most requests to the HTTP API live here"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/app")," - important scaffolding for the application (settings, exception\ntracking, ",(0,r.kt)("inlineCode",{parentName:"li"},"Main.ml"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/canvas")," - misc files pertaining to layout"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/components")," - a number of parts of Dark have been componentized. They\nlive here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/core")," - all the frontend types are defined here, also JSON encoders and\ndecoders for them"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/fluid"),' - fluid is the "editing" portion of the editor, the thing you\ntype code in. All editing of Dark code happens in here'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/forms"),' - the "forms" editor, used for editing any form-like boxes (HTTP\nhandler headings, DB fields, etc). Still recovering from when it was also\nhow we wrote Dark code'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/package")," -the Dark package manager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/prelude")," - builtin functions that are available in most other files\n(which start with ",(0,r.kt)("inlineCode",{parentName:"li"},"open Prelude"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/toplevels"),' - HTTP handler, workers, REPLs, DBs, functions, etc, are all\n"toplevels"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/util")," - generic utility code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static")," - some assets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"styles")," - CSS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test")," - unit tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"workers")," - web workers used for analysis and fetching data from the server\nin the background"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," - a set of env vars for each environment. You'll be interested in the\n",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," environment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docs")," - sporadic documentation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docs/production")," - documentation about how we run the Dark service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fsharp-backend"),' - The new backend written in F# and .NET. including the\nlanguage definition and execution engine, the "framework" (HTTP, DB, queues,\netc), the editor\'s HTTP API, and the execution engine which runs in the\nclient.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".paket")," - Used by the paket/nuget package manager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Build")," - where the compiler puts compiled code. This is inside the"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paket-files")," - Used by the paket/nuget package manager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/ApiServer")," - webserver serving the editor and the API used by the\neditor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/BackendOnlyStdLib")," - impl. of functions which need to be run on the\nbackend, due to their connection to the DB, queues, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/Benchmark")," - a benchmark executable to measure the performance of Dark\ncode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/BwdServer")," - webserver that is grand-user facing (at builtwithdark.com)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/CronChecker")," - trigger events for scheduled work"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/LibBackend")," - the framework functionality (HTTP, DB, queues, traces,\nsecrets, serialization), including standard library functions which only run\non the backend (and not in the client)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/LibExecution")," - the Dark language, including types, the runtime, and of\ncourse the execution engine"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/LibExecutionStdLib")," - most of the standard library functions (anything\nthat doesn't ",(0,r.kt)("em",{parentName:"li"},"need")," to be run on the backend)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/LibService")," - library with some common functionality for F# services\n(currently just the backend, soon queues and cron)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/Prelude")," - utilities, libraries, common types; used everywhere"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/QueueWorker")," - pulls user events from the queue and runs them"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/Scripts")," - some simple command-line programs that use F# libraries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/Tablecloth")," - a standard library which matches the one we use in OCaml\nand bucklescript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/Wasm"),' - "main" file for client-side analysis/execution-engine'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tests/FuzzTests")," - code to fuzztest different parts of Dark"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tests/TestUtils")," - utilities used in Tests and FuzzTests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tests/Tests")," - mostly unit tests for backend and libexecution functionality"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tests/testfiles")," - unit test definitions for language and standard library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tests/httptestfiles")," - tests for the Dark HTTP server and middleware"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tests/httpclienttestfiles")," - tests for the HTTP Library functions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"integration-tests")," - integration tests, written in JS using TestCafe. Flaky\nand brittle. Help welcome!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lib")," - build directory used by Bucklescript"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libshared")," - a small set of types that are shared between the old backend and\nclient. This will be merged into the client once the old backend is removed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," - installation dir for ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postgres-honeytail")," - a backend service used to send Postgres logs to\nHoneycomb (our observability vendor). The only Go in our repo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queue-scheduler")," - a Rust backend service that runs our queues."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rundir")," - anything that runs and stores something stores it here",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"integration_test_logs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logs")," - logs from running services, especially ",(0,r.kt)("inlineCode",{parentName:"li"},"fsharp-bwdserver.log")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"fsharp-apiserver.log")," (backend)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screenshots")," - for integration tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"videos")," - for integration tests"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scripts")," - bash scripts to do common (and sometimes uncommon and therefore\nforgettable) actions on the repo. Using scripts is very very common. Anytime\nthere's something interesting, we add a script to do it. Scripts are\noccasionally out of date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stroller")," - a Rust backend service that sits next to our OCaml backend. It\nwill be phased out along with the OCaml backend. When the OCaml backend sends\ndata to Pusher (websockets vendor) or Rollbar (exception tracking), it sends\nit to Stroller to send to the vendor instead. This allows execution to\ncontinue running immediately (our backend does not have efficient concurrency,\nso this is a hack to allow it)")))}u.isMDXComponent=!0},96804:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/compilation-targets-ba178cf9f6d68148063e5049f33d52d9.png"}}]);