"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4532],{3905:(e,t,n)=>{n.d(t,{kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||s;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=c;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(87462),i=n(63366),s=(n(67294),n(3905)),l=["components"],r={id:"structured-editing",title:"Structured Editing"},o=void 0,p={unversionedId:"discussion/structured-editing",id:"discussion/structured-editing",title:"Structured Editing",description:"_Note: for now, Dark is only supported for Chrome with browser extensions",source:"@site/docs/discussion/structured-editing.md",sourceDirName:"discussion",slug:"/discussion/structured-editing",permalink:"/discussion/structured-editing",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/discussion/structured-editing.md",tags:[],version:"current",frontMatter:{id:"structured-editing",title:"Structured Editing"},sidebar:"docs",previous:{title:"Trace Driven Development",permalink:"/discussion/trace-driven-development"},next:{title:"Error Handling",permalink:"/discussion/error-handling"}},d={},c=[{value:"Blanks",id:"blanks",level:2},{value:"Types of Expressions",id:"types-of-expressions",level:2},{value:"Nesting Expressions",id:"nesting-expressions",level:2},{value:"Let Expressions",id:"let-expressions",level:3},{value:"Conditional Expressions",id:"conditional-expressions",level:3},{value:"Match Expressions",id:"match-expressions",level:3},{value:"Pipelines",id:"pipelines",level:3},{value:"Partials (Partially Completed Expressions)",id:"partials-partially-completed-expressions",level:2},{value:"Comments",id:"comments",level:2},{value:"Refactoring and editing code",id:"refactoring-and-editing-code",level:2},{value:"Undo/redo",id:"undoredo",level:3},{value:"Copy/paste",id:"copypaste",level:3},{value:"Command Palette",id:"command-palette",level:3}],u={toc:c};function h(e){var t=e.components,r=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note: for now, Dark is only supported for Chrome with browser extensions\ndisabled.")),(0,s.kt)("p",null,"At heart, Dark is an expression-oriented programming language. This aspect of\nDark enables powerful features like live values and trace-driven development.\nThis section introduces a simple way to think about the structure of Dark\nprograms within the editor."),(0,s.kt)("p",null,"When writing code in Dark, you are building up expressions, relying heavily on\nautocomplete."),(0,s.kt)("h2",{id:"blanks"},"Blanks"),(0,s.kt)("p",null,"A blank expression acts as a placeholder where you can type to create a\ndifferent expression. The value of a blank expression is ",(0,s.kt)("inlineCode",{parentName:"p"},"Incomplete"),", because\nit needs to be completed in order to be useful."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Blank Example",src:n(63705).Z,width:"1018",height:"236"})),(0,s.kt)("p",null,"Once a blank is filled in, it won't be a blank anymore:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Filled Blank Example",src:n(59298).Z,width:"860",height:"206"})),(0,s.kt)("p",null,"2 is an integer expression with the value 2."),(0,s.kt)("h2",{id:"types-of-expressions"},"Types of Expressions"),(0,s.kt)("p",null,"In addition to blanks, there are also many other types of expressions."),(0,s.kt)("p",null,"Atomic Expressions include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Integers (whole numbers like ",(0,s.kt)("inlineCode",{parentName:"li"},"42"),")"),(0,s.kt)("li",{parentName:"ul"},"Floats (numbers like ",(0,s.kt)("inlineCode",{parentName:"li"},"1.5"),")"),(0,s.kt)("li",{parentName:"ul"},"Strings (text in double quotes)"),(0,s.kt)("li",{parentName:"ul"},"Bools (true and false)"),(0,s.kt)("li",{parentName:"ul"},"null")),(0,s.kt)("p",null,"There are also more complex expressions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Lists"),(0,s.kt)("li",{parentName:"ul"},"Dicts"),(0,s.kt)("li",{parentName:"ul"},"Records"),(0,s.kt)("li",{parentName:"ul"},"Functions"),(0,s.kt)("li",{parentName:"ul"},"Conditionals"),(0,s.kt)("li",{parentName:"ul"},"Matches")),(0,s.kt)("p",null,"For more on the language features of each type of expression, visit the\n",(0,s.kt)("a",{parentName:"p",href:"languageoverview"},"Language Overview"),". Examples of how these expressions are\nused in the editor are below."),(0,s.kt)("h2",{id:"nesting-expressions"},"Nesting Expressions"),(0,s.kt)("p",null,"Expressions in Dark are nested. For example, a multiplication expression is a\ncompound expression with two sub-expressions as operands:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Multiplication Diagram",src:n(17705).Z,width:"1629",height:"119"})),(0,s.kt)("p",null,"Filling a blank with an expression with sub-parts introduces a new blank for\neach of them."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Multiplication Diagram",src:n(31021).Z,width:"848",height:"204"})),(0,s.kt)("p",null,"In the expression 2 ","*"," 3, these sub-expressions are filled with the expressions\n2 and 3:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Multiplication Expression",src:n(45177).Z,width:"261",height:"119"})),(0,s.kt)("p",null,"The value of the expression ",(0,s.kt)("inlineCode",{parentName:"p"},"2 * 3")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"6"),". This is equivalent to saying ",(0,s.kt)("inlineCode",{parentName:"p"},"2 * 3"),"\nevaluates to ",(0,s.kt)("inlineCode",{parentName:"p"},"6"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Multiplication Result",src:n(87915).Z,width:"806",height:"194"})),(0,s.kt)("p",null,"Since ",(0,s.kt)("inlineCode",{parentName:"p"},"2 * 3")," is an expression, it can itself be a subexpression of a compound\nexpression. Consider the expression ",(0,s.kt)("inlineCode",{parentName:"p"},"1 + 2 * 3"),", which has the value ",(0,s.kt)("inlineCode",{parentName:"p"},"7"),". It is\na compound expression with a binary operator ",(0,s.kt)("inlineCode",{parentName:"p"},"+")," and two subexpressions as\noperands: ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"2 * 3"),"."),(0,s.kt)("h3",{id:"let-expressions"},"Let Expressions"),(0,s.kt)("p",null,"This nesting of expressions applies to all parts of the language, not just to\nmathematical expressions. When defining a variable in Dark, you use a let\nexpression, which has 3 parts: a variable name, a value (an expression!) bound\nto that variable, and a body (another expression!) within which you can use the\nname as an expression to stand in for the value:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Let Diagram",src:n(16647).Z,width:"1357",height:"267"})),(0,s.kt)("p",null,"Here's a let with 3 blanks in Dark:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Blanks in Let",src:n(8e3).Z,width:"1026",height:"266"})),(0,s.kt)("h3",{id:"conditional-expressions"},"Conditional Expressions"),(0,s.kt)("p",null,"If expressions have 3 parts: a boolean conditional expression and two branches,\na then and else expression. The value of the conditional expression determines\nwhether the then or else expression is evaluated. The value of the evaluated\nbranch becomes the value of the if expression as a whole."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"If Diagram",src:n(88808).Z,width:"1261",height:"646"})),(0,s.kt)("p",null,"Here's a conditional in Dark:\n",(0,s.kt)("img",{alt:"If Example",src:n(67634).Z,width:"1384",height:"394"})),(0,s.kt)("h3",{id:"match-expressions"},"Match Expressions"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"match")," expressions provide conditional evaluation of one or more expression\nbranches. They may also introduce new variable bindings. Every match has a\nsingle value expression that is evaluated once and matched against one or more\npatterns. The first pattern that matches the evaluated value indicates the\nexpression to evaluate. The value of the evaluated expression becomes the value\nof the match as a whole."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Match Diagram",src:n(35948).Z,width:"1174",height:"535"})),(0,s.kt)("h3",{id:"pipelines"},"Pipelines"),(0,s.kt)("p",null,"Pipelines are a key part of the Dark language. They allow you to create a chain\nof expressions, where each chain is an input to the next expression in the\nsequence."),(0,s.kt)("p",null,"To start one, select the code that has the result that you want to pipe, and hit\n",(0,s.kt)("inlineCode",{parentName:"p"},"shift-enter")," or type ",(0,s.kt)("inlineCode",{parentName:"p"},"|>"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img/refactoring/Screen_Recording_2020-01-07_at_01.56_PM.gif",src:n(16391).Z,width:"920",height:"394"})),(0,s.kt)("h2",{id:"partials-partially-completed-expressions"},"Partials (Partially Completed Expressions)"),(0,s.kt)("p",null,"While you are typing or deleting, you'll often see partially completed\nexpressions like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Partial",src:n(7101).Z,width:"1336",height:"424"})),(0,s.kt)("p",null,"The text in red is the partial, and the gray text behind it indicates what was\nthere before. Note that partials evaluate to whatever was there before:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Partial",src:n(21885).Z,width:"1296",height:"250"})),(0,s.kt)("p",null,"...until you complete them from the autocomplete:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Partial",src:n(36058).Z,width:"912",height:"292"})),(0,s.kt)("h2",{id:"comments"},"Comments"),(0,s.kt)("p",null,"To add comments to your Dark code, start a line with ",(0,s.kt)("inlineCode",{parentName:"p"},"let _ =")," and add a string\ncontaining the comment you'd like to include."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Option Example",src:n(6464).Z,width:"824",height:"184"})),(0,s.kt)("h2",{id:"refactoring-and-editing-code"},"Refactoring and editing code"),(0,s.kt)("h3",{id:"undoredo"},"Undo/redo"),(0,s.kt)("p",null,"Dark supports unlimited undo/redo in a single element. Undo with\n",(0,s.kt)("inlineCode",{parentName:"p"},"Ctrl-Z"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"Cmd-Z")," and redo with ",(0,s.kt)("inlineCode",{parentName:"p"},"Ctrl-Shift-Z"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"Cmd-Shift-Z"),"."),(0,s.kt)("h3",{id:"copypaste"},"Copy/paste"),(0,s.kt)("p",null,"You can copy/paste selections, which is often used for refactoring."),(0,s.kt)("p",null,"It may be helpful to note that copy/paste only works in Dark between handlers at\nthis time. Copying JSON from an external source will paste into your handlers in\nDark, but if you write code in the Dark language in your text editor of choice,\nthat code will not paste. We hope to improve this experience in the future."),(0,s.kt)("h3",{id:"command-palette"},"Command Palette"),(0,s.kt)("p",null,"If you\u2019re looking to do something that is not immediately available, chances are\nit\u2019s in the command palette (accessed by hitting ",(0,s.kt)("inlineCode",{parentName:"p"},"ctrl-\\"),")."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img/refactoring/Screen_Shot_2020-01-07_at_1.40.42_PM.png",src:n(90686).Z,width:"822",height:"596"})),(0,s.kt)("p",null,"This includes the common refactoring tools:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Extract a function or variable for re-use"),(0,s.kt)("li",{parentName:"ul"},"Create a type"),(0,s.kt)("li",{parentName:"ul"},"Wrap the current expression in a let (insert let here)"),(0,s.kt)("li",{parentName:"ul"},"Insert a let-expression above this one"),(0,s.kt)("li",{parentName:"ul"},"Wrap an expression in an if, if-then, or if-else")),(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/A39iZCaqX-w",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}h.isMDXComponent=!0},6464:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/comment-e0b66e9bdb22600469ecdf9146417945.png"},90686:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-01-07_at_1.40.42_PM-ea077b64e0010616dad54b6d0b1a0f59.png"},63705:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blank_example-f5bc88f25f4048730993eab5c2fe1df3.png"},8e3:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blanks_in_let_example-5461770187ee37ec3fe2ed4dbf5ffc15.png"},59298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filled_blank_example-67b00ba99ccaf8a3e2f4a94ccae28fe2.png"},88808:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/if_diagram-d7011fef8575a8f7010cfdf208188d28.png"},67634:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/if_example-7fd9df71f9247946ff93674b1e87c783.png"},16647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/let_diagram-4d5fa6896f733a54bc67694d9805b466.png"},35948:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/match_diagram-50ea4822f8f2053fa3a22101b8c5cffc.png"},17705:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mul_diagram-829036b2b1ecce739def395b8850f0d5.png"},45177:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},87915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mul_result-6e197c548f91d0d0e5071fc108183a42.png"},31021:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multiplication-0cc3f3878fc0c97e1c79a0b0ba8a837c.png"},21885:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/partial_almost_filled-4b762452f9bb256886378c0f5607ed2a.png"},36058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/partial_completed_example-c38ede5668459128fd92ddac7054e655.png"},7101:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/partial_example-780a8525a6ae741813cd3ec025b173fc.png"},16391:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipeline_example-2666efd85b8185b116c40ff07b002685.png"}}]);