"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9465],{68939:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=r(85893),i=r(11151);const s={title:"Language Reference",sidebar_label:"Language Reference",sidebar_position:1,keywords:["types","control","control-flow"],draft:!1},d=void 0,l={id:"reference/language-reference",title:"Language Reference",description:"Type System",source:"@site/docs/reference/language-reference.md",sourceDirName:"reference",slug:"/reference/language-reference",permalink:"/next/reference/language-reference",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Language Reference",sidebar_label:"Language Reference",sidebar_position:1,keywords:["types","control","control-flow"],draft:!1},sidebar:"myAutogeneratedSidebar",previous:{title:"Reference",permalink:"/next/category/reference"},next:{title:"Discussion",permalink:"/next/category/discussion"}},c={},a=[{value:"Type System",id:"type-system",level:2},{value:"Bool",id:"bool",level:3},{value:"Int",id:"int",level:3},{value:"Float",id:"float",level:3},{value:"Character",id:"character",level:3},{value:"String",id:"string",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"type-system",children:"Type System"}),"\n",(0,t.jsx)(n.p,{children:"The darklang type system is based on functional languages such as F#."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The type system is being developed. The documentation presented here reflects\nthe goal and may differ from current system behavior. Contributions are welcome\nto speed delivery."})}),"\n",(0,t.jsx)(n.h3,{id:"bool",children:"Bool"}),"\n",(0,t.jsxs)(n.p,{children:["Booleans are either ",(0,t.jsx)(n.code,{children:"true"})," or ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-darklang",children:"let succeeded = true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"int",children:"Int"}),"\n",(0,t.jsx)(n.p,{children:"Integers are, by default, 64 bit signed integers."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-darklang",children:"let x = 42\n"})}),"\n",(0,t.jsx)(n.p,{children:"Other integer sizes supported are described below. To declare a variable with a\nspecific integer size, append the size suffix to the value."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"F# Equivalent"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Suffix"}),(0,t.jsx)(n.th,{children:"Examples"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int8"}),(0,t.jsx)(n.td,{children:"signed 8 bit number"}),(0,t.jsx)(n.td,{children:"y"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let fizz = 42y"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uint8"}),(0,t.jsx)(n.td,{children:"unsigned 8 bit number"}),(0,t.jsx)(n.td,{children:"uy"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let buzz = 42uy"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int16"}),(0,t.jsx)(n.td,{children:"signed 16 bit number"}),(0,t.jsx)(n.td,{children:"s"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let fizz = 42s"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uint16"}),(0,t.jsx)(n.td,{children:"unsigned 16 bit number"}),(0,t.jsx)(n.td,{children:"us"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let buzz = 42us"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"signed 32 bit number"}),(0,t.jsx)(n.td,{children:"l"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let fizz = 42l"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"unsigned 32 bit number"}),(0,t.jsx)(n.td,{children:"ul"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let buzz = 42ul"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"signed 64 bit number (default)"}),(0,t.jsx)(n.td,{children:"L"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let fizz = 42"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"unsigned 64 bit number"}),(0,t.jsx)(n.td,{children:"uL"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let buzz = 42uL"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int128"}),(0,t.jsx)(n.td,{children:"signed 128 bit number"}),(0,t.jsx)(n.td,{children:"Q"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let fizz = 42Q"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uint128"}),(0,t.jsx)(n.td,{children:"unsigned 128 bit number"}),(0,t.jsx)(n.td,{children:"Z"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"let buzz = 42Z"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"float",children:"Float"}),"\n",(0,t.jsx)(n.p,{children:"Floats are double-precision 64-bit floating-point values (IEEE 754)."}),"\n",(0,t.jsx)(n.p,{children:"Any variable with a decimal is a Float. In the following code, each of the\nvariables is Float typed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-darklang",children:"let x = 3.14\nlet y = 3.0\nlet z = 3.\nlet w = -123.456E-789\n"})}),"\n",(0,t.jsx)(n.h3,{id:"character",children:"Character"}),"\n",(0,t.jsxs)(n.p,{children:["A character in Darklang represents a character that you see on your screen, such\nas ",(0,t.jsx)(n.code,{children:"a"}),", ",(0,t.jsx)(n.code,{children:"1"}),", ",(0,t.jsx)(n.code,{children:"\u017b"}),", ",(0,t.jsx)(n.code,{children:"\ud83c\uddf5\ud83c\uddf7"}),", ",(0,t.jsx)(n.code,{children:"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"}),". This is in contrast to most languages, where a\ncharacter represents one byte, or perhaps a Unicode codepoint."]}),"\n",(0,t.jsx)(n.p,{children:"The technical name for a Darklang character is an Extended Grapheme Cluster and\ncan best be thought of as supporting the entire character you see in front of\nyou. In the case of an emoji, this includes combining characters and skin tones.\nSee [String](### String) for additional context."}),"\n",(0,t.jsx)(n.p,{children:"Simple Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-darklang",children:"let char = 'a'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Escaped Character Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-darklang",children:"let quote = '\\''\nlet backslash = '\\\\'\nlet newline = '\\n'\nlet return = '\\r'\nlet tab = '\\t'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Unicode Byte Value Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-darklang",children:"let Z = \\x005A\nlet O_with_Diaeresis = \\x00D6 # \xd6\n"})}),"\n",(0,t.jsx)(n.p,{children:"Multi-byte Character Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-darklang",children:"let happy_face = \\x1F600  # \ud83d\ude00\n"})}),"\n",(0,t.jsx)(n.h3,{id:"string",children:"String"}),"\n",(0,t.jsx)(n.p,{children:"A String is unicode text. Specifically, strings are immutable sequences of UTF-8\ncode points. This differs from a character which is a single unicode code point\n(single visual character)."}),"\n",(0,t.jsx)(n.p,{children:"Strings are enclosed in double quotes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-darklang",children:'let name = "Darklang"\n'})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>d});var t=r(67294);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);