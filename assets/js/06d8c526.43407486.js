"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3681],{12490:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>t,toc:()=>h});var l=r(85893),s=r(11151);const a={},i="Darklang Release 3",t={id:"changelog/release-3",title:"Darklang Release 3",description:"July 1, 2022",source:"@site/docs-classic/changelog/release-3.md",sourceDirName:"changelog",slug:"/changelog/release-3",permalink:"/changelog/release-3",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/changelog/release-3.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Release 4 - July, 2022",permalink:"/changelog/release-4"},next:{title:"Release 2 - June 6, 2022",permalink:"/changelog/release-2"}},d={},h=[{value:"Language improvements",id:"language-improvements",level:2},{value:"Stdlib improvements",id:"stdlib-improvements",level:2},{value:"Editor improvements",id:"editor-improvements",level:2},{value:"HTTP Framework improvements",id:"http-framework-improvements",level:2},{value:"Internal improvements",id:"internal-improvements",level:2}];function c(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"darklang-release-3",children:"Darklang Release 3"})}),"\n",(0,l.jsx)(e.p,{children:"July 1, 2022"}),"\n",(0,l.jsx)(e.p,{children:"Darklang Release 3 is focused primarily on taking advantage of the recent\nchanges, including new StdLib functions, small languages changes, and sunsetting\nold features."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.em,{children:["See the ",(0,l.jsx)(e.a,{href:"https://blog.darklang.com/darklang-release-3/",children:"blog post"})," for further\ndiscussion."]})}),"\n",(0,l.jsx)(e.h2,{id:"language-improvements",children:"Language improvements"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["When a function is called with a runtime error as an argument, return the\nruntime error instead of a new error\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4095",children:"#4095"}),"). This was a significant\nsource of annoyance for devs trying to figure out why their code wasn't\nworking."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["64-bit ints now work end-to-end (previously we had two separate issues with\nnumbers above ",(0,l.jsx)(e.code,{children:"2^53"})," and numbers above ",(0,l.jsx)(e.code,{children:"2^63"}),")\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4209",children:"#4209"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"stdlib-improvements",children:"Stdlib improvements"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Allow ",(0,l.jsx)(e.code,{children:"HttpClient::basicAuth_v0"})," and ",(0,l.jsx)(e.code,{children:"HttpClient::basicAuth_v1"})," to run in the\neditor (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4147",children:"#4147"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Allow ",(0,l.jsx)(e.code,{children:"Crypto::sha256_v0"}),", ",(0,l.jsx)(e.code,{children:"Crypto::sha384_v0"})," to run in the editor\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4146",children:"#4146"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["rename ",(0,l.jsx)(e.code,{children:"String::toInt"})," to ",(0,l.jsx)(e.code,{children:"Int::parse_v0"}),", making it work for 64 bit ints\n(previous version only supported 63-bit ints)\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4191",children:"#4191"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["add ",(0,l.jsx)(e.code,{children:"List::all"})," (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4150",children:"#4150"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Mark ",(0,l.jsx)(e.code,{children:"Date::today"})," as impure\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4149",children:"#4149"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Add new versions of Date functions ",(0,l.jsx)(e.code,{children:"Date::hour_v1"}),", ",(0,l.jsx)(e.code,{children:"Date::minute_v1"}),", and\n",(0,l.jsx)(e.code,{children:"Date::second_v1"}),", which unlike the previous versions do not return negative\nresults for dates before 1970!\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4133",children:"#4133"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Rename the ",(0,l.jsx)(e.code,{children:"f"})," parameter of functions using first-class functions to ",(0,l.jsx)(e.code,{children:"fn"}),"\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4156",children:"#4156"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4150",children:"#4150"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Use camelCase in all standard library parameters\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4201",children:"#4201"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fix typos and poor wording in a lot of error messages and functions\ndescriptions (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4096",children:"#4096"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4200",children:"#4200"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"editor-improvements",children:"Editor improvements"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fix using secrets when run in the editor\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4128",children:"#4128"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/issues/4129",children:"#4129"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fix occasional crash in editor analysis\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4117",children:"#4117"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4089",children:"#4098"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4070",children:"#4070"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Remove the old (OCaml-based) analysis, reducing the size of the editor\ndownload and speeding up startup\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4158",children:"#4148"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Remove the canvas minimap which was causing a long hang when switching to edit\nfunctions (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4106",children:"#4106"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"http-framework-improvements",children:"HTTP Framework improvements"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Load programs faster by removing 3-4 fewer DB requests during load\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4051",children:"#4051"}),")"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"internal-improvements",children:"Internal improvements"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Make the Dark repo build on Mac with M1/M2 (arm) chips\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4237",children:"#4237"}),")."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Remove a lot of old OCaml code\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4140",children:"#4140"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4138",children:"#4138"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4195",children:"#4195"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4158",children:"#4158"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4074",children:"#4074"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4225",children:"#4225"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Remove all Rust from the codebase\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4057",children:"#4057"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Remove all Go from the codebase\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4039",children:"#4039"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Refactor the client (Rescript) codebase\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4199",children:"#4199"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4203",children:"#4203"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4206",children:"#4206"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4218",children:"#4218"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4220",children:"#4220"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Many steps to speed up the CI/CD pipeline\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4090",children:"#4090"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4088",children:"#4088"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4087",children:"#4087"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4083",children:"#4083"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4068",children:"#4068"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Allow multiple deploys more safely in our CI/CD pipeline\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4082",children:"#4082"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4076",children:"#4076"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4073",children:"#4073"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4072",children:"#4072"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4067",children:"#4067"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Refactor integration tests away from being one big file\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4167",children:"#4167"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fail deploy if assets don't upload\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4186",children:"#4186"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fix flaky tests (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4205",children:"#4205"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4207",children:"#4207"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4222",children:"#4222"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Remove unused DarkInternal functions\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4056",children:"#4056"}),")"]}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>t,a:()=>i});var l=r(67294);const s={},a=l.createContext(s);function i(n){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);