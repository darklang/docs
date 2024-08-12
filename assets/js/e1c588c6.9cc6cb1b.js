"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9230],{17504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=t(85893),a=t(11151);const i={},c="Javascript cheat sheet",r={id:"reference/cheatsheets/javascript-cheatsheet",title:"Javascript cheat sheet",description:"This guide will help you learn Darklang if you're familiar with Javascript.",source:"@site/docs-classic/reference/cheatsheets/javascript-cheatsheet.md",sourceDirName:"reference/cheatsheets",slug:"/reference/cheatsheets/javascript-cheatsheet",permalink:"/reference/cheatsheets/javascript-cheatsheet",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/reference/cheatsheets/javascript-cheatsheet.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Python Cheat Sheet",permalink:"/reference/cheatsheets/python-cheatsheet"},next:{title:"Built-in Function reference",permalink:"/reference/function-reference"}},h={},o=[{value:"Comments",id:"comments",level:2},{value:"Strings",id:"strings",level:2},{value:"Functions",id:"functions",level:2},{value:"Standard Library/Built-in Functions",id:"standard-librarybuilt-in-functions",level:2},{value:"If/Else statements",id:"ifelse-statements",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"javascript-cheat-sheet",children:"Javascript cheat sheet"})}),"\n",(0,s.jsx)(n.p,{children:"This guide will help you learn Darklang if you're familiar with Javascript."}),"\n",(0,s.jsxs)(n.p,{children:["Have a tip to add to the guide?\n",(0,s.jsx)(n.a,{href:"https://github.com/darklang/docs/pulls",children:"Submit a PR"}),"!"]}),"\n",(0,s.jsx)(n.h2,{id:"comments",children:"Comments"}),"\n",(0,s.jsxs)(n.p,{children:["In Javascript, you use a ",(0,s.jsx)(n.code,{children:"//"})," to start a single line comment, or ",(0,s.jsx)(n.code,{children:"/*"})," and ",(0,s.jsx)(n.code,{children:"*/"}),"\nto wrap a multiline comment.:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:"// This is a comment\n\n/* This is\nalso a\ncomment */\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In Darklang, you use a ",(0,s.jsx)(n.code,{children:"let _ ="})," to start a comment, and you write the comment as a\nString:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"from-python/comment.png",src:t(39718).Z+"",width:"742",height:"152"})}),"\n",(0,s.jsx)(n.h2,{id:"strings",children:"Strings"}),"\n",(0,s.jsx)(n.p,{children:"In Javascript, you can write a String in multiple ways:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:"\"This is a string\"\n'This is also a string'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In Darklang, you always use double quotes:\n",(0,s.jsx)(n.img,{alt:"from-python/string.png",src:t(5198).Z+"",width:"742",height:"124"})]}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.p,{children:["In Javascript, you use the ",(0,s.jsx)(n.code,{children:"function"})," keyword to define a function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:'function helloWorld(){\n    return "Hello World";\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"and you call a function with the function name, followed by parentheses:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:"helloWorld();\n"})}),"\n",(0,s.jsx)(n.p,{children:"In Darklang, you create a function from the sidebar:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"from-python/functionside.png",src:t(28322).Z+"",width:"624",height:"250"})}),"\n",(0,s.jsx)(n.p,{children:"This will open a new function in the function space, where you can define the\nname of the function and its contents:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"from-python/function.png",src:t(64475).Z+"",width:"1046",height:"342"})}),"\n",(0,s.jsx)(n.h2,{id:"standard-librarybuilt-in-functions",children:"Standard Library/Built-in Functions"}),"\n",(0,s.jsx)(n.p,{children:"Javascript defines a set of built in functions that are called like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:"// This returns 2 to the power of 2.\nMath.pow(2,2)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Darklang has a set of built in functions as well, which can be accessed via the\nautocomplete:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"from-python/power.gif",src:t(70980).Z+"",width:"930",height:"548"})}),"\n",(0,s.jsx)(n.h2,{id:"ifelse-statements",children:"If/Else statements"}),"\n",(0,s.jsxs)(n.p,{children:["In Javascript, you would write an ",(0,s.jsx)(n.code,{children:"if"})," statement like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:'var a = 5\nvar b = 10\n\nif (b > a) {\n   return "b is greater than a";\n}\nelse if (a == b) {\n   return "a and b are equal";\n}\nelse\n    return "a is greater than b";\n'})}),"\n",(0,s.jsx)(n.p,{children:"In Darklang, the same statement would look this this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"from-python/ifs.png",src:t(41298).Z+"",width:"798",height:"482"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that we highlight the path your code takes - so if we were to change the\nvalues, a different piece of the ",(0,s.jsx)(n.code,{children:"If"})," statement would be highlighted:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"from-python/ifs2.png",src:t(50563).Z+"",width:"796",height:"508"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},39718:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/comment-31d6d49158d5fb9df9f157bf7aac703b.png"},64475:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/function-2a3cb08413c103bd95ff89e7cf1c1ed9.png"},28322:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/functionside-ae5554dbc3021497c1b1710b65443cc1.png"},41298:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ifs-d21faa266d0f403b717b2278706494b6.png"},50563:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ifs2-4559f37c703f4406dea70e90aab24161.png"},70980:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/power-a4ade5fff8ecfd57c39b737dc301fa5f.gif"},5198:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/string-170049731f56bfe52d41ac15ccc0fe50.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var s=t(67294);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);