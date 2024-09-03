"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5640],{60421:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var r=n(74848),t=n(28453);const s={title:"Bool",sidebar_label:"Bool",sidebar_position:1,keywords:["boolean","logic"],draft:!1},i=void 0,d={id:"reference/language-reference/built-in-types/bool",title:"Bool",description:"Booleans are either true or false.",source:"@site/docs/reference/language-reference/built-in-types/bool.md",sourceDirName:"reference/language-reference/built-in-types",slug:"/reference/language-reference/built-in-types/bool",permalink:"/next/reference/language-reference/built-in-types/bool",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Bool",sidebar_label:"Bool",sidebar_position:1,keywords:["boolean","logic"],draft:!1},sidebar:"myAutogeneratedSidebar",previous:{title:"Built-In Types",permalink:"/next/reference/language-reference/built-in-types/"},next:{title:"Int",permalink:"/next/reference/language-reference/built-in-types/int"}},a={},h=[{value:"Functions",id:"functions",level:2},{value:"And",id:"and",level:3},{value:"Truth Table",id:"truth-table",level:4},{value:"Definition",id:"definition",level:4},{value:"Examples",id:"examples",level:4},{value:"Shorthand: &amp;&amp;",id:"shorthand-",level:4},{value:"Example",id:"example",level:4},{value:"OR",id:"or",level:3},{value:"Truth Table",id:"truth-table-1",level:4},{value:"Definition",id:"definition-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Shorthand: ||",id:"shorthand--1",level:4},{value:"Example",id:"example-1",level:4},{value:"NOT",id:"not",level:3},{value:"Truth Table",id:"truth-table-2",level:4},{value:"Definition",id:"definition-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"XOR",id:"xor",level:3},{value:"Truth Table",id:"truth-table-3",level:4},{value:"Definition",id:"definition-3",level:4},{value:"Examples",id:"examples-3",level:4},{value:"ToString",id:"tostring",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Examples",id:"examples-4",level:4}];function o(e){const l={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.p,{children:["Booleans are either ",(0,r.jsx)(l.code,{children:"true"})," or ",(0,r.jsx)(l.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let succeeded = true\n"})}),"\n",(0,r.jsx)(l.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(l.h3,{id:"and",children:"And"}),"\n",(0,r.jsx)(l.p,{children:"The logical AND of two boolean values. Returns a bool."}),"\n",(0,r.jsx)(l.h4,{id:"truth-table",children:"Truth Table"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"X"}),(0,r.jsx)(l.th,{children:"Y"}),(0,r.jsx)(l.th,{children:"AND(X,Y)"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"false"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"false"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"false"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"true"})]})]})]}),"\n",(0,r.jsx)(l.h4,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(l.p,{children:"Bool.and(Bool, Bool) -> Bool"}),"\n",(0,r.jsx)(l.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = true\nlet y = false\nBool.and x y\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns: false"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = [false,false,true,true]\nlet y = [false,true,false,true]\nList.map2 x y \\a, b -> Bool.and a b\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns:\n[\nfalse, false, false, true\n]"}),"\n",(0,r.jsx)(l.h4,{id:"shorthand-",children:"Shorthand: &&"}),"\n",(0,r.jsx)(l.p,{children:"A double ampersand provides an inline shortcut for Bool.and(). Note that this operator is lazy (the right hand term is only evaluated if the left hand term does not determine the result)"}),"\n",(0,r.jsx)(l.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = true\nlet y = false\nx && y\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns: false"}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"or",children:"OR"}),"\n",(0,r.jsx)(l.p,{children:"The logical OR of two boolean values. Returns a bool."}),"\n",(0,r.jsx)(l.h4,{id:"truth-table-1",children:"Truth Table"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"X"}),(0,r.jsx)(l.th,{children:"Y"}),(0,r.jsx)(l.th,{children:"OR(X,Y)"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"false"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"true"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"true"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"true"})]})]})]}),"\n",(0,r.jsx)(l.h4,{id:"definition-1",children:"Definition"}),"\n",(0,r.jsx)(l.p,{children:"Bool.or(Bool, Bool) -> Bool"}),"\n",(0,r.jsx)(l.h4,{id:"examples-1",children:"Examples"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = true\nlet y = false\nBool.or x y\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns: true"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = [false,false,true,true]\nlet y = [false,true,false,true]\nList.map2 x y \\a, b -> Bool.or a b\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns:\n[\nfalse, true, true, true\n]"}),"\n",(0,r.jsx)(l.h4,{id:"shorthand--1",children:"Shorthand: ||"}),"\n",(0,r.jsx)(l.p,{children:"A double vertical pipe provides an inline shortcut for Bool.or(). Note that this operator is lazy (the right hand term is only evaluated if the left hand term does not determine the result)"}),"\n",(0,r.jsx)(l.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = true\nlet y = false\nx || y\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns: true"}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"not",children:"NOT"}),"\n",(0,r.jsx)(l.p,{children:"The logical NOT of a boolean value. Returns a bool."}),"\n",(0,r.jsx)(l.h4,{id:"truth-table-2",children:"Truth Table"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"X"}),(0,r.jsx)(l.th,{children:"NOT(X)"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"true"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(l.h4,{id:"definition-2",children:"Definition"}),"\n",(0,r.jsx)(l.p,{children:"Bool.not(Bool, Bool) -> Bool"}),"\n",(0,r.jsx)(l.h4,{id:"examples-2",children:"Examples"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = true\nBool.not x\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns: false"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = [false,true]\nList.map x \\a -> Bool.not a\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns:\n[\ntrue, false\n]"}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"xor",children:"XOR"}),"\n",(0,r.jsx)(l.p,{children:"The logical exclusive OR of two boolean values. Returns a bool."}),"\n",(0,r.jsx)(l.h4,{id:"truth-table-3",children:"Truth Table"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"X"}),(0,r.jsx)(l.th,{children:"Y"}),(0,r.jsx)(l.th,{children:"XOR(X,Y)"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"false"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"true"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"false"}),(0,r.jsx)(l.td,{children:"true"})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"true"}),(0,r.jsx)(l.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(l.h4,{id:"definition-3",children:"Definition"}),"\n",(0,r.jsx)(l.p,{children:"Bool.xor(Bool, Bool) -> Bool"}),"\n",(0,r.jsx)(l.h4,{id:"examples-3",children:"Examples"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = true\nlet y = false\nBool.xor x y\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns: true"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = [false,false,true,true]\nlet y = [false,true,false,true]\nList.map2 x y \\a, b -> Bool.xor a b\n"})}),"\n",(0,r.jsx)(l.p,{children:"This trace returns:\n[\nfalse, true, true, false\n]"}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"tostring",children:"ToString"}),"\n",(0,r.jsx)(l.p,{children:"Returns the value of the variable as a string."}),"\n",(0,r.jsx)(l.h4,{id:"definition-4",children:"Definition"}),"\n",(0,r.jsx)(l.p,{children:"Bool.toString(Bool) -> String"}),"\n",(0,r.jsx)(l.h4,{id:"examples-4",children:"Examples"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"let x = true\nBool.toString x\n"})}),"\n",(0,r.jsx)(l.p,{children:'This trace returns: "true"'}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-darklang",children:"Bool.toString false\n"})}),"\n",(0,r.jsx)(l.p,{children:'This trace returns: "false"'})]})}function c(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>d});var r=n(96540);const t={},s=r.createContext(t);function i(e){const l=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:l},e.children)}}}]);