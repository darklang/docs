"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3237],{47877:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(85893),o=t(11151);const r={title:"Adding a built-in function"},s=void 0,c={id:"contributing/adding-a-function",title:"Adding a built-in function",description:'Adding a built-in or "Standard Library Function" is usually straight-forward',source:"@site/docs-classic/contributing/adding-a-function.md",sourceDirName:"contributing",slug:"/contributing/adding-a-function",permalink:"/contributing/adding-a-function",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/contributing/adding-a-function.md",tags:[],version:"current",frontMatter:{title:"Adding a built-in function"},sidebar:"Contributing",previous:{title:"If you don't know our stack (F#)",permalink:"/contributing/if-you-dont-know-our-stack"},next:{title:"Adding a language feature",permalink:"/contributing/adding-a-language-feature"}},d={},l=[{value:"Define the function",id:"define-the-function",level:2},{value:"Add tests covering the function",id:"add-tests-covering-the-function",level:2},{value:"Test the function in the editor",id:"test-the-function-in-the-editor",level:2}];function a(n){const e={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:'Adding a built-in or "Standard Library Function" is usually straight-forward\ninvolving implementation and testing only in the backend.'}),"\n",(0,i.jsx)(e.p,{children:"(This document is in-progress and needs work)"}),"\n",(0,i.jsx)(e.h2,{id:"define-the-function",children:"Define the function"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Determine where the function should live","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["If the function is required to be run in the backend (e.g. to connect to a\ndatabase), then ",(0,i.jsx)(e.code,{children:"BackendOnlyStdLib"})," is appropriate"]}),"\n",(0,i.jsxs)(e.li,{children:["Otherwise the function may live within ",(0,i.jsx)(e.code,{children:"LibExecutionStdLib"}),". This is where\nmost pure functions live, such as ",(0,i.jsx)(e.code,{children:"Int::absoluteValue"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Implement the function generally speaking, you should be able to copy/paste an\nexisting function and adjust from there intuitively","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"name"}),"\n",(0,i.jsx)(e.li,{children:"params and return type"}),"\n",(0,i.jsx)(e.li,{children:"description/docs"}),"\n",(0,i.jsx)(e.li,{children:"function implementation"}),"\n",(0,i.jsxs)(e.li,{children:["sqlSpec. (usually ok to ",(0,i.jsx)(e.code,{children:"NotImplementedTodo"}),")"]}),"\n",(0,i.jsx)(e.li,{children:"previewable - Pure, Impure, or ImpurePreviewable?"}),"\n",(0,i.jsx)(e.li,{children:"deprecated - NotDeprecated"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Should some other function be deprecated in favor of this? If you're creating\na new version of an existing function, probably yes."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"add-tests-covering-the-function",children:"Add tests covering the function"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Most pure functions are testable solely with execution test files they don't\nrequire recompilation consider test file. Refer to\n",(0,i.jsx)(e.code,{children:"backend/testfiles/execution"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Other functions may require more nuanced testing in ",(0,i.jsx)(e.code,{children:"backend/tests/Tests"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"test-the-function-in-the-editor",children:"Test the function in the editor"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"try it out! Does it generally work as expected?"}),"\n",(0,i.jsx)(e.li,{children:"if it's a Pure (or ImpurePreviewable?) function, check to see if Analysis\nbehaves appropriately (e.g. does evaluating the function require a you\nclicking the 'Play' button in the Editor?)"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);