"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9111],{61726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(85893),o=n(11151);const r={title:"Debugging"},s=void 0,d={id:"contributing/debugging",title:"Debugging",description:"Log statements",source:"@site/docs-classic/contributing/debugging.md",sourceDirName:"contributing",slug:"/contributing/debugging",permalink:"/contributing/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/contributing/debugging.md",tags:[],version:"current",frontMatter:{title:"Debugging"},sidebar:"Contributing",previous:{title:"Glossary",permalink:"/contributing/glossary"},next:{title:"Troubleshooting",permalink:"/contributing/troubleshooting"}},c={},l=[{value:"Log statements",id:"log-statements",level:2},{value:"Backend",id:"backend",level:3},{value:"Fuzzer",id:"fuzzer",level:2},{value:"Contributor Editor Debugging Tools",id:"contributor-editor-debugging-tools",level:2}];function a(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"log-statements",children:"Log statements"}),"\n",(0,i.jsxs)(t.p,{children:["Both the frontend and backend have simple log statements used during local\ndevelopment, which return ",(0,i.jsx)(t.code,{children:"()"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"backend",children:"Backend"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"backend"})," you may log with ",(0,i.jsx)(t.code,{children:"print"})," or ",(0,i.jsx)(t.code,{children:"printMetadata"}),". ",(0,i.jsx)(t.code,{children:"print"})," takes a\nsingle ",(0,i.jsx)(t.code,{children:"string"})," argument while ",(0,i.jsx)(t.code,{children:"printMetadata"})," allows you to pass in an\nadditional ",(0,i.jsx)(t.code,{children:"List<string * obj>"})," of metadata."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fsharp",children:'print "Starting BwdServer"\nprintMetadata "Starting BwdServer" [("timestamp", DateTimeOffset.Now)]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The logs may be found in ",(0,i.jsx)(t.code,{children:"rundir/logs"}),", in a file corresponding to the\nexecutable that is logging. For example, BwdServer will log to\n",(0,i.jsx)(t.code,{children:"rundir/logs/bwdserver.log"})]}),"\n",(0,i.jsx)(t.h2,{id:"fuzzer",children:"Fuzzer"}),"\n",(0,i.jsx)(t.h2,{id:"contributor-editor-debugging-tools",children:"Contributor Editor Debugging Tools"}),"\n",(0,i.jsx)(t.p,{children:"There are some tools built into the Editor to help with debugging. These include\na Fluid debugger and the ability to view the AST of your handlers' code. You may\nturn these on by going to the Contributing tab of the Settings menu within the\nEditor."})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var i=n(67294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);