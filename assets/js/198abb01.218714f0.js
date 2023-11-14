"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5009],{26707:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=s(85893),t=s(11151);const a={id:"structured-editing",title:"Structured Editing"},r=void 0,l={id:"discussion/structured-editing",title:"Structured Editing",description:"_Note: for now, Darklang is only supported for Chrome with browser extensions",source:"@site/docs-classic/discussion/structured-editing.md",sourceDirName:"discussion",slug:"/discussion/structured-editing",permalink:"/discussion/structured-editing",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/discussion/structured-editing.md",tags:[],version:"current",frontMatter:{id:"structured-editing",title:"Structured Editing"},sidebar:"docs",previous:{title:"Trace Driven Development",permalink:"/discussion/trace-driven-development"},next:{title:"Error Handling",permalink:"/discussion/error-handling"}},o={},d=[{value:"Blanks",id:"blanks",level:2},{value:"Types of Expressions",id:"types-of-expressions",level:2},{value:"Nesting Expressions",id:"nesting-expressions",level:2},{value:"Let Expressions",id:"let-expressions",level:3},{value:"Conditional Expressions",id:"conditional-expressions",level:3},{value:"Match Expressions",id:"match-expressions",level:3},{value:"Pipelines",id:"pipelines",level:3},{value:"Partials (Partially Completed Expressions)",id:"partials-partially-completed-expressions",level:2},{value:"Comments",id:"comments",level:2},{value:"Refactoring and editing code",id:"refactoring-and-editing-code",level:2},{value:"Undo/redo",id:"undoredo",level:3},{value:"Copy/paste",id:"copypaste",level:3},{value:"Command Palette",id:"command-palette",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: for now, Darklang is only supported for Chrome with browser extensions\ndisabled."})}),"\n",(0,i.jsx)(n.p,{children:"At heart, Darklang is an expression-oriented programming language. This aspect\nof Darklang enables powerful features like live values and trace-driven\ndevelopment. This section introduces a simple way to think about the structure\nof Darklang programs within the editor."}),"\n",(0,i.jsx)(n.p,{children:"When writing code in Darklang, you are building up expressions, relying heavily\non autocomplete."}),"\n",(0,i.jsx)(n.h2,{id:"blanks",children:"Blanks"}),"\n",(0,i.jsxs)(n.p,{children:["A blank expression acts as a placeholder where you can type to create a\ndifferent expression. The value of a blank expression is ",(0,i.jsx)(n.code,{children:"Incomplete"}),", because\nit needs to be completed in order to be useful."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Blank Example",src:s(63705).Z+"",width:"1018",height:"236"})}),"\n",(0,i.jsx)(n.p,{children:"Once a blank is filled in, it won't be a blank anymore:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Filled Blank Example",src:s(59298).Z+"",width:"860",height:"206"})}),"\n",(0,i.jsx)(n.p,{children:"2 is an integer expression with the value 2."}),"\n",(0,i.jsx)(n.h2,{id:"types-of-expressions",children:"Types of Expressions"}),"\n",(0,i.jsx)(n.p,{children:"In addition to blanks, there are also many other types of expressions."}),"\n",(0,i.jsx)(n.p,{children:"Atomic Expressions include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Integers (whole numbers like ",(0,i.jsx)(n.code,{children:"42"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Floats (numbers like ",(0,i.jsx)(n.code,{children:"1.5"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Strings (text in double quotes)"}),"\n",(0,i.jsx)(n.li,{children:"Bools (true and false)"}),"\n",(0,i.jsx)(n.li,{children:"null"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There are also more complex expressions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lists"}),"\n",(0,i.jsx)(n.li,{children:"Dicts"}),"\n",(0,i.jsx)(n.li,{children:"Records"}),"\n",(0,i.jsx)(n.li,{children:"Functions"}),"\n",(0,i.jsx)(n.li,{children:"Conditionals"}),"\n",(0,i.jsx)(n.li,{children:"Matches"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more on the language features of each type of expression, visit the\n",(0,i.jsx)(n.a,{href:"languageoverview",children:"Language Overview"}),". Examples of how these expressions are\nused in the editor are below."]}),"\n",(0,i.jsx)(n.h2,{id:"nesting-expressions",children:"Nesting Expressions"}),"\n",(0,i.jsx)(n.p,{children:"Expressions in Darklang are nested. For example, a multiplication expression is\na compound expression with two sub-expressions as operands:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Multiplication Diagram",src:s(17705).Z+"",width:"1629",height:"119"})}),"\n",(0,i.jsx)(n.p,{children:"Filling a blank with an expression with sub-parts introduces a new blank for\neach of them."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Multiplication Diagram",src:s(31021).Z+"",width:"848",height:"204"})}),"\n",(0,i.jsx)(n.p,{children:"In the expression 2 * 3, these sub-expressions are filled with the expressions\n2 and 3:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Multiplication Expression",src:s(45177).Z+"",width:"261",height:"119"})}),"\n",(0,i.jsxs)(n.p,{children:["The value of the expression ",(0,i.jsx)(n.code,{children:"2 * 3"})," is ",(0,i.jsx)(n.code,{children:"6"}),". This is equivalent to saying ",(0,i.jsx)(n.code,{children:"2 * 3"}),"\nevaluates to ",(0,i.jsx)(n.code,{children:"6"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Multiplication Result",src:s(87915).Z+"",width:"806",height:"194"})}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"2 * 3"})," is an expression, it can itself be a subexpression of a compound\nexpression. Consider the expression ",(0,i.jsx)(n.code,{children:"1 + 2 * 3"}),", which has the value ",(0,i.jsx)(n.code,{children:"7"}),". It is\na compound expression with a binary operator ",(0,i.jsx)(n.code,{children:"+"})," and two subexpressions as\noperands: ",(0,i.jsx)(n.code,{children:"1"})," and ",(0,i.jsx)(n.code,{children:"2 * 3"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"let-expressions",children:"Let Expressions"}),"\n",(0,i.jsx)(n.p,{children:"This nesting of expressions applies to all parts of the language, not just to\nmathematical expressions. When defining a variable in Darklang, you use a let\nexpression, which has 3 parts: a variable name, a value (an expression!) bound\nto that variable, and a body (another expression!) within which you can use the\nname as an expression to stand in for the value:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Let Diagram",src:s(16647).Z+"",width:"1357",height:"267"})}),"\n",(0,i.jsx)(n.p,{children:"Here's a let with 3 blanks in Darklang:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Blanks in Let",src:s(8e3).Z+"",width:"1026",height:"266"})}),"\n",(0,i.jsx)(n.h3,{id:"conditional-expressions",children:"Conditional Expressions"}),"\n",(0,i.jsx)(n.p,{children:"If expressions have 3 parts: a boolean conditional expression and two branches,\na then and else expression. The value of the conditional expression determines\nwhether the then or else expression is evaluated. The value of the evaluated\nbranch becomes the value of the if expression as a whole."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"If Diagram",src:s(88808).Z+"",width:"1261",height:"646"})}),"\n",(0,i.jsxs)(n.p,{children:["Here's a conditional in Darklang:\n",(0,i.jsx)(n.img,{alt:"If Example",src:s(67634).Z+"",width:"1384",height:"394"})]}),"\n",(0,i.jsx)(n.h3,{id:"match-expressions",children:"Match Expressions"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"match"})," expressions provide conditional evaluation of one or more expression\nbranches. They may also introduce new variable bindings. Every match has a\nsingle value expression that is evaluated once and matched against one or more\npatterns. The first pattern that matches the evaluated value indicates the\nexpression to evaluate. The value of the evaluated expression becomes the value\nof the match as a whole."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Match Diagram",src:s(35948).Z+"",width:"1174",height:"535"})}),"\n",(0,i.jsx)(n.h3,{id:"pipelines",children:"Pipelines"}),"\n",(0,i.jsx)(n.p,{children:"Pipelines are a key part of the Darklang language. They allow you to create a\nchain of expressions, where each chain is an input to the next expression in the\nsequence."}),"\n",(0,i.jsxs)(n.p,{children:["To start one, select the code that has the result that you want to pipe, and hit\n",(0,i.jsx)(n.code,{children:"shift-enter"})," or type ",(0,i.jsx)(n.code,{children:"|>"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img/refactoring/Screen_Recording_2020-01-07_at_01.56_PM.gif",src:s(16391).Z+"",width:"920",height:"394"})}),"\n",(0,i.jsx)(n.h2,{id:"partials-partially-completed-expressions",children:"Partials (Partially Completed Expressions)"}),"\n",(0,i.jsx)(n.p,{children:"While you are typing or deleting, you'll often see partially completed\nexpressions like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Partial",src:s(7101).Z+"",width:"1336",height:"424"})}),"\n",(0,i.jsx)(n.p,{children:"The text in red is the partial, and the gray text behind it indicates what was\nthere before. Note that partials evaluate to whatever was there before:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Partial",src:s(21885).Z+"",width:"1296",height:"250"})}),"\n",(0,i.jsx)(n.p,{children:"...until you complete them from the autocomplete:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Partial",src:s(36058).Z+"",width:"912",height:"292"})}),"\n",(0,i.jsx)(n.h2,{id:"comments",children:"Comments"}),"\n",(0,i.jsxs)(n.p,{children:["To add comments to your Darklang code, start a line with ",(0,i.jsx)(n.code,{children:"let _ ="})," and add a\nstring containing the comment you'd like to include."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Option Example",src:s(6464).Z+"",width:"824",height:"184"})}),"\n",(0,i.jsx)(n.h2,{id:"refactoring-and-editing-code",children:"Refactoring and editing code"}),"\n",(0,i.jsx)(n.h3,{id:"undoredo",children:"Undo/redo"}),"\n",(0,i.jsxs)(n.p,{children:["Darklang supports unlimited undo/redo in a single element. Undo with\n",(0,i.jsx)(n.code,{children:"Ctrl-Z"}),"/",(0,i.jsx)(n.code,{children:"Cmd-Z"})," and redo with ",(0,i.jsx)(n.code,{children:"Ctrl-Shift-Z"}),"/",(0,i.jsx)(n.code,{children:"Cmd-Shift-Z"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"copypaste",children:"Copy/paste"}),"\n",(0,i.jsx)(n.p,{children:"You can copy/paste selections, which is often used for refactoring."}),"\n",(0,i.jsx)(n.p,{children:"It may be helpful to note that copy/paste only works in Darklang between\nhandlers at this time. Copying JSON from an external source will paste into your\nhandlers in Darklang, but if you write code in the Darklang language in your\ntext editor of choice, that code will not paste. We hope to improve this\nexperience in the future."}),"\n",(0,i.jsx)(n.h3,{id:"command-palette",children:"Command Palette"}),"\n",(0,i.jsxs)(n.p,{children:["If you\u2019re looking to do something that is not immediately available, chances are\nit\u2019s in the command palette (accessed by hitting ",(0,i.jsx)(n.code,{children:"alt-x"})," on a US keyboard or\n",(0,i.jsx)(n.code,{children:"ctrl-\\"})," or ",(0,i.jsx)(n.code,{children:"ctrl-s"})," on other keyboards)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img/refactoring/Screen_Shot_2020-01-07_at_1.40.42_PM.png",src:s(90686).Z+"",width:"822",height:"596"})}),"\n",(0,i.jsx)(n.p,{children:"This includes the common refactoring tools:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Extract a function or variable for re-use"}),"\n",(0,i.jsx)(n.li,{children:"Create a type"}),"\n",(0,i.jsx)(n.li,{children:"Wrap the current expression in a let (insert let here)"}),"\n",(0,i.jsx)(n.li,{children:"Insert a let-expression above this one"}),"\n",(0,i.jsx)(n.li,{children:"Wrap an expression in an if, if-then, or if-else"}),"\n"]}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/A39iZCaqX-w",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6464:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/comment-e0b66e9bdb22600469ecdf9146417945.png"},90686:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Screen_Shot_2020-01-07_at_1.40.42_PM-ea077b64e0010616dad54b6d0b1a0f59.png"},63705:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/blank_example-f5bc88f25f4048730993eab5c2fe1df3.png"},8e3:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/blanks_in_let_example-5461770187ee37ec3fe2ed4dbf5ffc15.png"},59298:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/filled_blank_example-67b00ba99ccaf8a3e2f4a94ccae28fe2.png"},88808:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/if_diagram-d7011fef8575a8f7010cfdf208188d28.png"},67634:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/if_example-7fd9df71f9247946ff93674b1e87c783.png"},16647:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/let_diagram-4d5fa6896f733a54bc67694d9805b466.png"},35948:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/match_diagram-50ea4822f8f2053fa3a22101b8c5cffc.png"},17705:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/mul_diagram-829036b2b1ecce739def395b8850f0d5.png"},45177:(e,n,s)=>{s.d(n,{Z:()=>i});const i="data:image/png;base64,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"},87915:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/mul_result-6e197c548f91d0d0e5071fc108183a42.png"},31021:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/multiplication-0cc3f3878fc0c97e1c79a0b0ba8a837c.png"},21885:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/partial_almost_filled-4b762452f9bb256886378c0f5607ed2a.png"},36058:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/partial_completed_example-c38ede5668459128fd92ddac7054e655.png"},7101:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/partial_example-780a8525a6ae741813cd3ec025b173fc.png"},16391:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/pipeline_example-2666efd85b8185b116c40ff07b002685.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(67294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);