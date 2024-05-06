"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[331],{32843:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var l=s(85893),r=s(11151);const i={},t="Darklang Release 6",a={id:"changelog/release-6",title:"Darklang Release 6",description:"October 1, 2022",source:"@site/docs-classic/changelog/release-6.md",sourceDirName:"changelog",slug:"/changelog/release-6",permalink:"/changelog/release-6",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/changelog/release-6.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Release 7 - Oct, 2022",permalink:"/changelog/release-7"},next:{title:"Release 5 - Aug, 2022",permalink:"/changelog/release-5"}},h={},d=[{value:"Major features",id:"major-features",level:2},{value:"Support for negative ints and floats",id:"support-for-negative-ints-and-floats",level:3},{value:"Show function deprecation info",id:"show-function-deprecation-info",level:3},{value:"Expression backspacing/conversion",id:"expression-backspacingconversion",level:3},{value:"Editor improvements",id:"editor-improvements",level:2},{value:"Tuples",id:"tuples",level:3},{value:"Strings",id:"strings",level:3},{value:"Live values",id:"live-values",level:3},{value:"Autocomplete",id:"autocomplete",level:3},{value:"Misc Small fixes",id:"misc-small-fixes",level:3},{value:"Standard library changes",id:"standard-library-changes",level:2},{value:"Internal improvements",id:"internal-improvements",level:2}];function c(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"darklang-release-6",children:"Darklang Release 6"}),"\n",(0,l.jsx)(e.p,{children:"October 1, 2022"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.em,{children:["See the ",(0,l.jsx)(e.a,{href:"https://blog.darklang.com/darklang-release-6/",children:"blog post"})," for further\ndiscussion."]})}),"\n",(0,l.jsx)(e.h2,{id:"major-features",children:"Major features"}),"\n",(0,l.jsx)(e.h3,{id:"support-for-negative-ints-and-floats",children:"Support for negative ints and floats"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Turn existing ints and floats negative by typing ",(0,l.jsx)(e.code,{children:"-"})," in front\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4498",children:"#4498"}),")"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://user-images.githubusercontent.com/181762/192357264-7ae39197-3ec8-4516-9f43-930817b80b99.gif",alt:""})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Type negative ints and floats from scratch\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4497",children:"#4497"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Edit partials and turn them into ints and floats (including negatives)\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4497",children:"#4497"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://user-images.githubusercontent.com/181762/192331575-d4affbb3-127c-46c0-8e88-7a74c2e877db.gif",alt:""})}),"\n",(0,l.jsx)(e.h3,{id:"show-function-deprecation-info",children:"Show function deprecation info"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Display why functions are deprecated\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://user-images.githubusercontent.com/181762/191844123-3c57f9a7-5240-4b84-8691-c91e7b8aee13.png",alt:""})}),"\n",(0,l.jsx)(e.h3,{id:"expression-backspacingconversion",children:"Expression backspacing/conversion"}),"\n",(0,l.jsxs)(e.p,{children:["When you delete an ",(0,l.jsx)(e.code,{children:"if"}),", ",(0,l.jsx)(e.code,{children:"match"}),", or lambda (",(0,l.jsx)(e.code,{children:"\\"}),") with one expression, replace\nit with that expression (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4457",children:"#4457"}),")"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://user-images.githubusercontent.com/181762/188941656-b0a584be-d115-41cc-a956-28b79646fa89.gif",alt:""})}),"\n",(0,l.jsx)(e.h2,{id:"editor-improvements",children:"Editor improvements"}),"\n",(0,l.jsx)(e.h3,{id:"tuples",children:"Tuples"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.em,{children:["Tuples are in preview - enable them in ",(0,l.jsx)(e.strong,{children:"Settings/Contributor Settings"})]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Show Tuple2 and Tuple3 functions in the autocomplete\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4482",children:"#4482"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Add tuple pattern autocomplete completion\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4465",children:"#4465"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://user-images.githubusercontent.com/906686/189388902-82bf765f-a9f4-4629-9fda-8f99918d259c.gif",alt:""})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Allow copy/pasting tuple patterns\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4469",children:"#4469"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Allow you to press ",(0,l.jsx)(e.code,{children:")"})," to go over a tuple's closing parenthesis\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4454",children:"#4454"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Put cursor at ",(0,l.jsx)(e.em,{children:"start"})," of blank tuple pattern when removing elements\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4455",children:"#4455"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Don't allow tuple pattern parts to be overwritten by literals\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4453",children:"#4453"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"strings",children:"Strings"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["indent one more space to line up multiline strings\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4477",children:"#4477"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["show slight background in strings to help see how they line up (it's subtle!)\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4479",children:"#4479"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4477",children:"#4477"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://user-images.githubusercontent.com/181762/190904975-276ea41d-5880-460f-b68f-fedc70b1a0e1.png",alt:""})}),"\n",(0,l.jsx)(e.h3,{id:"live-values",children:"Live values"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Show live values for lambdas properly (actually trace them and then display\nthem)) (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4456",children:"#4456"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Display a lambda's runtime value as a live value\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4456",children:"#4456"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://user-images.githubusercontent.com/181762/188888447-62103469-5f6b-4eec-a4d3-fcc8f0fd9764.png",alt:""})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Show live values for literals instead of a spinner\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Correctly show analysis for partials (the old value)\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Show the correct live value for let definitions and record field names\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Show pipe live value for current pipe entry\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Don't spin when there's a pipe in a blank\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"autocomplete",children:"Autocomplete"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fix some standard library function descriptions - typos and punctuation\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Better UI when a function has no description (affects functions in the package\nmanager) (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fix fluid pattern autocomplete flashing\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4462",children:"#4462"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fix bug when going further than 3 places down in the autocomplete for patterns\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4462",children:"#4462"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Don't confuse secrets and datastores\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"misc-small-fixes",children:"Misc Small fixes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Fix a few places secrets weren't hidden\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4456",children:"#4456"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Allow users to use deprecated functions they already use in more cases\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4482",children:"#4482"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Error messages use less ugly representation of dicts and lists\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4456",children:"#4456"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Hide irrelevent GC error in analysis\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4505",children:"#4505"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4483",children:"#4483"}),",\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4449",children:"#4449"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:['When a handler\'s route changes, update "open-in-new-window" to use the new\nroute (',(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4502",children:"#4502"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["don't insert ",(0,l.jsx)(e.code,{children:"0"})," when copy/pasting from the start of ints in patterns\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4492",children:"#4492"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Don't create empty patterns when creating match\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4469",children:"#4469"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["put the cursor in right place after a string edit\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4497",children:"#4497"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["convert partials to ints and floats\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4497",children:"#4497"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["fix broken floats automatically\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4497",children:"#4497"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"standard-library-changes",children:"Standard library changes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Add ",(0,l.jsx)(e.code,{children:"Uuid::parse_v0"})," and deprecate ",(0,l.jsx)(e.code,{children:"String::toUUID"}),"\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4480",children:"#4480"}),")"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"internal-improvements",children:"Internal improvements"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["The dark repo is now\n",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/tags",children:"tagged for each release"})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Add IDs to debugger AST view\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4491",children:"#4491"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["A number of fixes related to lambdas\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4456",children:"#4456"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Rebrand 'pattern' as 'match pattern' throughout client codebase\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4487",children:"#4487"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Refactor function representation\n(",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4485",children:"#4485"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Use IDs more (",(0,l.jsx)(e.a,{href:"https://github.com/darklang/dark/pull/4480",children:"#4480"}),")"]}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>t});var l=s(67294);const r={},i=l.createContext(r);function t(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);