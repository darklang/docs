"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4694],{85898:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(74848),a=s(28453);const i={id:"languagedetails",title:"Language Details",sidebar_label:"Language Details"},r=void 0,l={id:"reference/languagedetails",title:"Language Details",description:"This doc describes the Darklang language. Darklang is really a system - a",source:"@site/docs-classic/reference/languagedetails.md",sourceDirName:"reference",slug:"/reference/languagedetails",permalink:"/reference/languagedetails",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/reference/languagedetails.md",tags:[],version:"current",frontMatter:{id:"languagedetails",title:"Language Details",sidebar_label:"Language Details"},sidebar:"docs",previous:{title:"Sample Canvases",permalink:"/reference/sample-canvases"},next:{title:"Keyboard Mapping",permalink:"/reference/keyboard-mapping"}},o={},d=[{value:"Type system",id:"type-system",level:3},{value:"Built-in types",id:"built-in-types",level:2},{value:"Integers",id:"integers",level:3},{value:"Floats",id:"floats",level:3},{value:"Booleans",id:"booleans",level:3},{value:"Strings",id:"strings",level:3},{value:"Characters",id:"characters",level:3},{value:"Lists/Arrays",id:"listsarrays",level:3},{value:"Tuples (In-Progress)",id:"tuples-in-progress",level:3},{value:"Binary",id:"binary",level:3},{value:"Options",id:"options",level:3},{value:"Results",id:"results",level:3},{value:"Dicts",id:"dicts",level:3},{value:"UUID",id:"uuid",level:3},{value:"Null",id:"null",level:3},{value:"User defined types",id:"user-defined-types",level:2},{value:"Records",id:"records",level:3},{value:"Enums",id:"enums",level:3},{value:"Types unique to Darklang",id:"types-unique-to-darklang",level:2},{value:"Incompletes",id:"incompletes",level:3},{value:"Error rail",id:"error-rail",level:3},{value:"Sensitive Types",id:"sensitive-types",level:3},{value:"Expressions",id:"expressions",level:2},{value:"Let",id:"let",level:3},{value:"Variable Scope",id:"variable-scope",level:4},{value:"If",id:"if",level:3},{value:"Match",id:"match",level:3},{value:"Functions",id:"functions",level:3},{value:"Lambda",id:"lambda",level:3},{value:"Pipelining",id:"pipelining",level:3},{value:"Feature Flags",id:"feature-flags",level:3},{value:"Planned language features",id:"planned-language-features",level:2},{value:"Sets",id:"sets",level:3},{value:"Unit",id:"unit",level:3},{value:"Imperative programming (Statements and refs)",id:"imperative-programming-statements-and-refs",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This doc describes the Darklang language. Darklang is really a system - a\ncombination of the language, editor, framework and infrastructure. In this doc,\nwe'll focus on discussing the language itself, ignoring where possible the\neditor and infrastructure."}),"\n",(0,t.jsxs)(n.p,{children:["This discusses both the language and the ",(0,t.jsx)(n.strong,{children:"intended"})," language. We have taken\nmany shortcuts to be able to ship Darklang, and so many parts of the language\nare not currently at their end state. Here we discuss both what the language is,\nand what we intend it to be."]}),"\n",(0,t.jsx)(n.p,{children:"Darklang is a statically-typed functional/imperative hybrid, based loosely on\nML. It is a high-level language, with immutable values, garbage collection, and\nsupport for generics/polymorphic types."}),"\n",(0,t.jsx)(n.p,{children:"Darklang is somewhat similar to OCaml or Elm. It has many similarities to Rust\nand Haskell, and is also influenced by Clojure, Ruby, Python, CoffeeScript, as\nwell as our experience with (alphabetically) Bash, C, Clojure, CoffeeScript,\nC++, Elm, Javascript, Java, Haskell, OCaml, Perl, PHP, Python, ReasonML,\nRuby/Rails, React, and Rust."}),"\n",(0,t.jsx)(n.h3,{id:"type-system",children:"Type system"}),"\n",(0,t.jsx)(n.p,{children:"Dark\u2019s type system is most similar to Elm, Haskell, ReasonML, OCaml or Rust:\nbased on records, enums, list, and built-in generics/polymorphism. All values in\nDarklang are immutable, except refs."}),"\n",(0,t.jsxs)(n.p,{children:["Darklang has some standard basic types: ",(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"boolean"}),", ",(0,t.jsx)(n.code,{children:"float"}),",\n",(0,t.jsx)(n.code,{children:"list"}),", and ",(0,t.jsx)(n.code,{children:"dicts"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We support typical functional types: ",(0,t.jsx)(n.code,{children:"Option"})," and ",(0,t.jsx)(n.code,{children:"Result"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, Darklang has a ",(0,t.jsx)(n.code,{children:"null"})," type to support JSON values directly. In the\nfuture, we intend to deprecate ",(0,t.jsx)(n.code,{children:"null"})," and replace it with ",(0,t.jsx)(n.code,{children:"Options"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"built-in-types",children:"Built-in types"}),"\n",(0,t.jsx)(n.h3,{id:"integers",children:"Integers"}),"\n",(0,t.jsx)(n.p,{children:"Integers are signed 63-bit integer."}),"\n",(0,t.jsx)(n.p,{children:"In the future, Darklang will use infinite-precision integers. We also intend to\nadd unsigned 8-bit integers and bit-manipulation functions."}),"\n",(0,t.jsx)(n.h3,{id:"floats",children:"Floats"}),"\n",(0,t.jsx)(n.p,{children:"Floats are double-precision 64-bit floating-point values (IEEE 754)."}),"\n",(0,t.jsxs)(n.p,{children:["We intend for numeric operations to return Results, to handle situations which\nare undefined on the datatype. For example, integer division would return\n",(0,t.jsx)(n.code,{children:"Result Error Int"}),". Similarly, floating point values would never be ",(0,t.jsx)(n.code,{children:"NaN"}),", and\ninstead would return ",(0,t.jsx)(n.code,{children:"Result Error Float"}),". See\n",(0,t.jsx)(n.a,{href:"https://docs.darklang.com/discussion/error-handling",children:"Error Handling in Darklang"}),"\nfor more."]}),"\n",(0,t.jsx)(n.h3,{id:"booleans",children:"Booleans"}),"\n",(0,t.jsx)(n.p,{children:"Booleans are true or false."}),"\n",(0,t.jsx)(n.h3,{id:"strings",children:"Strings"}),"\n",(0,t.jsx)(n.p,{children:"Strings are unicode, and character are unicode \u201ccharacters\u201d (if it appears as\none character on the screen, that\u2019s a \u201ccharacter\u201d in Darklang)."}),"\n",(0,t.jsx)(n.p,{children:"Specifically, string are immutable UTF-8 encoded sequences of Unicode code\npoints. Chars are \u201cExtended Grapheme Clusters\u201d. (A codepoint is some bytes that\nimplement unicode characters, a grapheme is some codepoints forming a unicode\nentity, such as an emoji; an EGC is some graphemes, used to handle things like\nemojis which combine to form a single emoji)."}),"\n",(0,t.jsx)(n.p,{children:"Darklang doesn't currently support string interpolation, but we plan to in the\nfuture."}),"\n",(0,t.jsx)(n.h3,{id:"characters",children:"Characters"}),"\n",(0,t.jsxs)(n.p,{children:["A character in Darklang represents a character that you see on your screen, such\nas ",(0,t.jsx)(n.code,{children:"'a'"}),", ",(0,t.jsx)(n.code,{children:"'1'"}),", ",(0,t.jsx)(n.code,{children:"'\u017b'"}),", ",(0,t.jsx)(n.code,{children:"'\ud83c\uddf5\ud83c\uddf7'"}),", ",(0,t.jsx)(n.code,{children:"'\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66'"}),". This is in contrast to most languages,\nwhere a character represents one byte, or perhaps a Unicode codepoint. We chose\nthis"]}),"\n",(0,t.jsxs)(n.p,{children:["The technical name for a Darklang character is an ",(0,t.jsx)(n.em,{children:"Extended Grapheme Cluster"}),",\nand can best be thought of as supporting the entire character you see in front\nof you - in the case of emoji, this includes such things as combining characters\nand skin tones. See [Strings](### Strings) above for additional context."]}),"\n",(0,t.jsxs)(n.p,{children:["While the Darklang language has support for Characters, the Editor experience\nwith Characters is quite limited. For example, we do not yet support Character\nliterals using single quotes, such as ",(0,t.jsx)(n.code,{children:"'a'"}),". Until proper support exists, you\ncan define a Char in Darklang rather indirectly:\n",(0,t.jsx)(n.code,{children:'let charExample = "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66" |> String::toList |> List.head'}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"listsarrays",children:"Lists/Arrays"}),"\n",(0,t.jsx)(n.p,{children:"Lists and Arrays use the same datatype, called Lists. The Darklang compiler will\nin the future optimize their implementation to support good algorithmic\ncomplexity and performance for whatever you use them for."}),"\n",(0,t.jsx)(n.p,{children:"Lists should be used for all \u201cI want a sequence of things\u201d situations, including\niterating across them, random access, push/pop, etc."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"let x = [8]\nlet y = List::append x [6]\ny\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"[8, 6]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"List Example",src:s(19815).A+"",width:"994",height:"200"})}),"\n",(0,t.jsx)(n.h3,{id:"tuples-in-progress",children:"Tuples (In-Progress)"}),"\n",(0,t.jsx)(n.p,{children:"Darklang supports tuples: lists of defined length supporting heterogeneous\ntypes."}),"\n",(0,t.jsxs)(n.p,{children:["Tuple support is currently a\n",(0,t.jsx)(n.a,{href:"https://github.com/darklang/dark/issues/4265",children:"work-in-progress"}),", and only\navailable in the editor after opting in via the Settings dialog. Feedback is\nwelcome!"]}),"\n",(0,t.jsxs)(n.p,{children:["See Release 5 in the ",(0,t.jsx)(n.a,{href:"https://docs.darklang.com/changelog",children:"changelog"}),"\nfor a demo of opting in."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fsharp",children:'let x = (1, "string", { name: "Sam" })\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Tuples can be created in the editor by entering ",(0,t.jsx)(n.code,{children:"("})," in a blank."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Inserting additional separators (",(0,t.jsx)(n.code,{children:","}),") extends the size of the tuple; removing\nseparators/elements reduces the size, generally removing the element to the\nleft of the separator"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Darklang's Standard Library includes ",(0,t.jsx)(n.code,{children:"Tuple2"})," and ",(0,t.jsx)(n.code,{children:"Tuple3"})," modules, which\nprovide functions used to work with tuples of size 2 and 3."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Pattern matching with ",(0,t.jsx)(n.code,{children:"match"})," supports tuples:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fsharp",children:'let headers = Dict::toList request.headers\nlet contentTypePlain =\n  List::findFirst headers \\header ->\n    let (key, value) = Tuple2::mapFirst (\\key -> String::toLower key) header\n    match (key, value)\n      ("content-type", "application/json") -> Just "json"\n      ("content-type", "text/html") -> Just "html"\n      _ -> Nothing\n'})}),"\n",(0,t.jsx)(n.p,{children:"Tuple match patterns can be created and extended the same way as tuple\nexpressions."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following constructs are planned but not yet implemented:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Tuples can be deconstructed into their parts via a ",(0,t.jsx)(n.code,{children:"let"})," expression:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fsharp",children:"let philadelphia = (39.9526, 75.1652)\nlet (lat, long) = philadelphia\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"User functions may accept and return Tuples (TODO: I'm not sure how to phrase\nthis)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"binary",children:"Binary"}),"\n",(0,t.jsxs)(n.p,{children:["Non-unicode sequences of bytes are supported as the ",(0,t.jsx)(n.code,{children:"Binary"})," type."]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.p,{children:"Instead of allowing all values to potentially be null, as in most imperative\nlanguages, Darklang uses an Option type:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"Option a = Just a | Nothing\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Option Example",src:s(18276).A+"",width:"1374",height:"402"})}),"\n",(0,t.jsx)(n.p,{children:"This is intended to convert effortlessly to null in JSON, but we don't quite\nhave enough of the type system to remove null, so they both exist right now."}),"\n",(0,t.jsxs)(n.p,{children:["Functions which return ",(0,t.jsx)(n.code,{children:"Option"})," trigger the\n",(0,t.jsx)(n.a,{href:"https://docs.darklang.com/discussion/error-handling",children:"Error Rail"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"results",children:"Results"}),"\n",(0,t.jsx)(n.p,{children:"Any functions which can have an error should use Results. We use results for Int\ndivision, Float operations, HTTP operations, etc."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"Result a = Ok a | Err Error\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Darklang has no exceptions - all errors go through Results. See\n",(0,t.jsx)(n.a,{href:"https://docs.darklang.com/discussion/error-handling",children:"error handling"})," for more\ndetails."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Result Example",src:s(36580).A+"",width:"1376",height:"414"})}),"\n",(0,t.jsx)(n.h3,{id:"dicts",children:"Dicts"}),"\n",(0,t.jsx)(n.p,{children:"Dicts are maps from a certain key type to a certain value type. The key must\ncurrently be a string. The value can be any type but all elements of the Dict\nare the same type (not currently enforced)."}),"\n",(0,t.jsx)(n.p,{children:"Dicts are different than records: dicts can have arbitrary keys."}),"\n",(0,t.jsx)(n.h3,{id:"uuid",children:"UUID"}),"\n",(0,t.jsx)(n.p,{children:"Darklang supports UUIDs directly."}),"\n",(0,t.jsx)(n.h3,{id:"null",children:"Null"}),"\n",(0,t.jsxs)(n.p,{children:["As a temporary hack, Darklang also supports ",(0,t.jsx)(n.code,{children:"null"}),". This allows us handle JSON\nwhile we build out enough type-system support to allow them to be replaced by\n",(0,t.jsx)(n.code,{children:"Option"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Null"})," is mostly useful for comparing against incoming JSON and results of\n",(0,t.jsx)(n.code,{children:"HttpClient"})," calls. When returning JSON or making ",(0,t.jsx)(n.code,{children:"HttpClient"})," calls, you can\nuse ",(0,t.jsx)(n.code,{children:"Option"}),"s instead and they will be converted properly to ",(0,t.jsx)(n.code,{children:"null"})," in the JSON\noutput."]}),"\n",(0,t.jsx)(n.h2,{id:"user-defined-types",children:"User defined types"}),"\n",(0,t.jsx)(n.p,{children:"Darklang currently has limited support for user-defined types. Currently, we\nsupport inline definition of records, but do not support defining record types\nexplicitly."}),"\n",(0,t.jsx)(n.p,{children:"Record types are actually implemented under the hood, and we intend to use them\nto support typed Datastores, API contracts, and static types."}),"\n",(0,t.jsx)(n.p,{children:"Darklang does not currently support user-defined enums."}),"\n",(0,t.jsx)(n.p,{children:"User-defined types will be either records or enums, or combinations of other\ntype expressions."}),"\n",(0,t.jsx)(n.p,{children:"Types in Darklang are out-of-line, meaning that they are not defined \u201con the\ncanvas\u201d, in a similar way to functions."}),"\n",(0,t.jsx)(n.p,{children:"All types in Darklang will be versioned."}),"\n",(0,t.jsx)(n.p,{children:"In the future, we intend to support typeclasses or traits to allow ad-hoc\npolymorphism."}),"\n",(0,t.jsx)(n.h3,{id:"records",children:"Records"}),"\n",(0,t.jsx)(n.p,{children:"Records are most akin to Classes in an imperative language."}),"\n",(0,t.jsx)(n.p,{children:"Records are a set of keys and values. Each key name and type are defined, and\nthe types do not have to be the same."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:'let x = { name: "Robin"\n          age: 32\n          gender: "Other"\n        }\n'})}),"\n",(0,t.jsx)(n.p,{children:"Records can not be accessed dynamically; they are not Maps/Hashtables/Dicts."}),"\n",(0,t.jsx)(n.p,{children:"Records are structurally typed, and are equivalent to records of the same shape\nbut a different name."}),"\n",(0,t.jsx)(n.p,{children:"Note that at the moment, Dicts and Records share the same implementation and can\nbe accessed and modified in the same way. We intend to break these apart in the\nfuture."}),"\n",(0,t.jsx)(n.h3,{id:"enums",children:"Enums"}),"\n",(0,t.jsx)(n.p,{children:"Enums are a set of \u201cconstructors\u201d, each of which has a set of typed arguments."}),"\n",(0,t.jsxs)(n.p,{children:["Currently, Darklang only supports ",(0,t.jsx)(n.code,{children:"Option"})," and ",(0,t.jsx)(n.code,{children:"Result"})," built-in enums. In the\nfuture, we will support user-defined enums."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"type Person = Human {age: Int, name: String, itin: String }\n            | Corporation {age: Int, name: String, ein: String }\n            | Puppers Int String\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enums can be made by building on existing types, especially records and other\nenums."}),"\n",(0,t.jsx)(n.p,{children:"Enums are nominally typed. (Two enums with the same field names and types are\nnot equivalent)."}),"\n",(0,t.jsx)(n.h2,{id:"types-unique-to-darklang",children:"Types unique to Darklang"}),"\n",(0,t.jsx)(n.h3,{id:"incompletes",children:"Incompletes"}),"\n",(0,t.jsx)(n.p,{children:"Programs in Darklang start as a single empty expression. As they get built up in\nour structured editor, they can never become syntactically invalid. However, a\nprogram may be incomplete if any its expressions are empty."}),"\n",(0,t.jsx)(n.p,{children:"An empty expression is incomplete. A developer may write programs where some\nparts are incomplete as they build out the code. As such, incomplete values\nappear dynamically when the code is executed. Structures containing incompletes\nare themselves incomplete. For example functions with incomplete arguments do\nnot execute, and return incomplete; and records with an incomplete field are\nalso incomplete."}),"\n",(0,t.jsx)(n.p,{children:"Incompletes are never returned to end users, and cannot be stored in a\ndatastore. Returning an incomplete via a HTTP handler causes a 500 error."}),"\n",(0,t.jsx)(n.h3,{id:"error-rail",children:"Error rail"}),"\n",(0,t.jsxs)(n.p,{children:["You might occasionally see a value marked ",(0,t.jsx)(n.code,{children:"<ErrorRail>"}),", this is used to\nindicate that a value is on the Error Rail. See\n",(0,t.jsx)(n.a,{href:"https://blog.darklang.com/real-problems-with-functional-languages/",children:"Railway Oriented Programming"}),"\nfor more details."]}),"\n",(0,t.jsx)(n.h3,{id:"sensitive-types",children:"Sensitive Types"}),"\n",(0,t.jsx)(n.p,{children:"Some values are sensitive, for example, passwords or credit card numbers."}),"\n",(0,t.jsxs)(n.p,{children:["Currently Darklang supports the ",(0,t.jsx)(n.code,{children:"Password"})," type, which is never saved directly\nor sent to the editor."]}),"\n",(0,t.jsx)(n.p,{children:"In the future, Darklang will allow you to specify types of sensitive values,\npreventing them from being stored in logs, and allowing a team to limit who has\naccess to these values in the Darklang editor."}),"\n",(0,t.jsx)(n.h2,{id:"expressions",children:"Expressions"}),"\n",(0,t.jsx)(n.p,{children:"All Darklang language constructs are expressions. That means that they evaluate\nto a value, rather than being used to set state."}),"\n",(0,t.jsx)(n.h3,{id:"let",children:"Let"}),"\n",(0,t.jsx)(n.p,{children:"Lets creates a name with an immutable value, and a scope in which that is\ndefined."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:'let name = "Stella"\nname\n'})}),"\n",(0,t.jsx)(n.p,{children:"We often refer to these names as variables, for simplicity. However, they never\nvary: once they are defined, they never have any other value."}),"\n",(0,t.jsx)(n.h4,{id:"variable-scope",children:"Variable Scope"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"if age > 18\nthen\n  let height = 170\n  height + 12\nelse\n  let weight = 105\n  weight / 2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the example above, the scope of ",(0,t.jsx)(n.code,{children:"height"})," and ",(0,t.jsx)(n.code,{children:"weight"})," only extends to within\nthe ",(0,t.jsx)(n.code,{children:"then"})," block and ",(0,t.jsx)(n.code,{children:"else"})," block respectively. You cannot use either variable\nbelow the ",(0,t.jsx)(n.code,{children:"if"})," expression."]}),"\n",(0,t.jsx)(n.h3,{id:"if",children:"If"}),"\n",(0,t.jsxs)(n.p,{children:["Darklang supports if/else statement. The argument to an ",(0,t.jsx)(n.code,{children:"if"})," is a boolean. We\ncurrently support ",(0,t.jsx)(n.code,{children:"truthy"})," types but intend to remove that ability."]}),"\n",(0,t.jsxs)(n.p,{children:["We support ",(0,t.jsx)(n.code,{children:"&&"})," and ",(0,t.jsx)(n.code,{children:"||"}),", which short-circuit (only evaluate the second\nexpression if needed). However, we used to support versions of ",(0,t.jsx)(n.code,{children:"&&"})," and ",(0,t.jsx)(n.code,{children:"||"}),"\nthat did not short-circuit; those are deprecated (the editor will show\ndocumentation about how to move to the new versions)."]}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.code,{children:"if"})," is not currently allowed without a corresponding ",(0,t.jsx)(n.code,{children:"else"})," - we will relax\nthis after we introduce statements."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"If Example",src:s(19722).A+"",width:"1384",height:"394"})}),"\n",(0,t.jsx)(n.h3,{id:"match",children:"Match"}),"\n",(0,t.jsxs)(n.p,{children:["Darklang supports pattern matching, in particular, matching on ",(0,t.jsx)(n.code,{children:"Enum"}),"s."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fsharp",children:'let introduction =\n  match name with\n  | Nothing -> "Hi!"\n  | Just name -> "Dear " ++ name\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We expect to allow guards in the future. We also hope to add an ",(0,t.jsx)(n.code,{children:"if-let"}),"\nconstruct to support ",(0,t.jsx)(n.code,{children:"if"})," statements that destructure from Enums."]}),"\n",(0,t.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.p,{children:"Functions must have type declarations for inputs. We intend to support types on\nreturn values soon."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"fetch url name =\n  { url: url\n  , name: name\n  }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Functions in Darklang are simple, and do not currently support functional\nlanguage concepts, such as partial application, functions as first-class values,\nand defining functions in using points-free style."}),"\n",(0,t.jsx)(n.p,{children:"Functions do not live in the \u201cCanvas\u201d, but rather are a little bit ethereal."}),"\n",(0,t.jsxs)(n.p,{children:["Built-in functions are all versioned: we frequently deprecate old functions and\nadd updates. When we deprecate old versions, your code does ",(0,t.jsx)(n.em,{children:"not"})," change, and\nyou keep using the old ones. We intend to support automated refactoring and\nupdating in the future."]}),"\n",(0,t.jsx)(n.p,{children:"In the future, we intend to support partial application/currying, and\ndefault/optional parameters."}),"\n",(0,t.jsx)(n.h3,{id:"lambda",children:"Lambda"}),"\n",(0,t.jsxs)(n.p,{children:["Lambdas are anonymous functions. They are used to pass to functions which take\n",(0,t.jsx)(n.code,{children:"Block"}),"s, typically used for iteration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"List::map [5, 10, 11] \\var -> var + 2\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"[7, 12, 13]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the future, we intend to support a syntax for shorthands for creating lambdas\nto access fields: ",(0,t.jsx)(n.code,{children:".fieldname"}),". This can be included in a pipe or used as a\nfirst class function."]}),"\n",(0,t.jsx)(n.p,{children:"We also intend to support passing functions where blocks are expected."}),"\n",(0,t.jsxs)(n.p,{children:["There is a syntax for shorthands for creating lambda\u2019s to call constructors:\n",(0,t.jsx)(n.code,{children:"ConstructorName"}),". This can be included in a pipe or used as a first class\nfunction."]}),"\n",(0,t.jsx)(n.h3,{id:"pipelining",children:"Pipelining"}),"\n",(0,t.jsx)(n.p,{children:"Darklang programs are intended to be written, as much as possible, as pipelines\nof data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:'user\n|> getFriends\n|> List.map (\\f -> (f, getFriends f))\n|> List.filter (\\f -> f.name == "Kevin Bacon")\n|> (=) []\n'})}),"\n",(0,t.jsx)(n.h3,{id:"feature-flags",children:"Feature Flags"}),"\n",(0,t.jsxs)(n.p,{children:["Feature flags are similar to ",(0,t.jsx)(n.code,{children:"if"}),"s:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"flag myCondition\nthen 5\nelse 6\n"})}),"\n",(0,t.jsxs)(n.p,{children:["However, flags differ slightly from ifs in that any condition that is not ",(0,t.jsx)(n.code,{children:"true"}),"\nwill cause the ",(0,t.jsx)(n.code,{children:"then"})," block to activate. This is especially important around\n",(0,t.jsx)(n.code,{children:"incomplete"}),"s, allowing you to take working code and edit the feature flag\nwithout disturbing existing users. In an ",(0,t.jsx)(n.code,{children:"if"})," statement, neither branch would\nexecute."]}),"\n",(0,t.jsx)(n.h2,{id:"planned-language-features",children:"Planned language features"}),"\n",(0,t.jsx)(n.h3,{id:"sets",children:"Sets"}),"\n",(0,t.jsx)(n.p,{children:"We intend for Darklang to support Sets: unordered collections of a single type."}),"\n",(0,t.jsx)(n.h3,{id:"unit",children:"Unit"}),"\n",(0,t.jsx)(n.p,{children:"We intend to support the unit type, which indicates something that have no type,\nsuch as an imperative function that doesn't return anything."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-elm",children:"x = ()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"imperative-programming-statements-and-refs",children:"Imperative programming (Statements and refs)"}),"\n",(0,t.jsx)(n.p,{children:"It is intended that you write the program as you think it, not to shoehorn your\nprogram into a functional style. As such, Darklang is planning to add a number\nof imperative concepts to allow you to easily write imperative algorithms,\nincluding statements, refs, and mutable data structures."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},19722:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/if_example-7fd9df71f9247946ff93674b1e87c783.png"},19815:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/list_example-721d3f85f7dc382b2d081d0c29f4196e.png"},18276:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/option_example-292ccfa26e65d8f6efa608bcbbc2b296.png"},36580:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/result_example-359f708d3638e84b636b27756288e886.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);