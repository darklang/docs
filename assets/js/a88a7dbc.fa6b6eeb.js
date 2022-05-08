"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"ReScript and F# for Dark developers"},o=void 0,p={unversionedId:"contributing/rescript-and-fsharp-for-dark-developers",id:"contributing/rescript-and-fsharp-for-dark-developers",title:"ReScript and F# for Dark developers",description:"This guide aims to introduce you to enough F#/ReScript to contribute to Dark,",source:"@site/docs/contributing/rescript-and-fsharp-for-dark-developers.md",sourceDirName:"contributing",slug:"/contributing/rescript-and-fsharp-for-dark-developers",permalink:"/contributing/rescript-and-fsharp-for-dark-developers",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/rescript-and-fsharp-for-dark-developers.md",tags:[],version:"current",frontMatter:{title:"ReScript and F# for Dark developers"},sidebar:"Contributing",previous:{title:"Adding a refactoring",permalink:"/contributing/adding-a-refactoring"},next:{title:"General concepts",permalink:"/contributing/general-concepts"}},u={},d=[{value:"Some simple F#/ReScript code",id:"some-simple-frescript-code",level:2},{value:"Dark vs F# vs ReScript",id:"dark-vs-f-vs-rescript",level:2},{value:"Types",id:"types",level:3},{value:"Functions",id:"functions",level:3},{value:"Standard library",id:"standard-library",level:3},{value:"Int",id:"int",level:3},{value:"Float",id:"float",level:3},{value:"Bool",id:"bool",level:3},{value:"String",id:"string",level:3},{value:"String Interpolation",id:"string-interpolation",level:3},{value:"List",id:"list",level:3},{value:"Records",id:"records",level:3},{value:"Let",id:"let",level:3},{value:"If",id:"if",level:3},{value:"Operators",id:"operators",level:3},{value:"Match",id:"match",level:3},{value:"Variants",id:"variants",level:3},{value:"Lambdas",id:"lambdas",level:3},{value:"Pipes",id:"pipes",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"Unit",id:"unit",level:3},{value:"Error handling",id:"error-handling",level:3},{value:"Exceptions",id:"exceptions",level:4},{value:"Imperative programming",id:"imperative-programming",level:3},{value:"Advanced functions",id:"advanced-functions",level:3},{value:"Named parameters",id:"named-parameters",level:4},{value:"Optional parameters",id:"optional-parameters",level:4},{value:"the <code>rec</code> and <code>and</code> keywords",id:"the-rec-and-and-keywords",level:4},{value:"Partial application / currying",id:"partial-application--currying",level:4},{value:"Modules",id:"modules",level:3},{value:"Classes and Objects",id:"classes-and-objects",level:3},{value:"ReScript vs Bucklescript/ReasonML?",id:"rescript-vs-bucklescriptreasonml",level:2},{value:"Dark&#39;s codebase history",id:"darks-codebase-history",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide aims to introduce you to enough F#/ReScript to contribute to Dark,\nassuming you already know Dark. F# and ReScript are very similar languages, both\nderived from OCaml. We currently use ReScript for the client. We use F# for the\nbackend, which is very similar to Dark as well."),(0,r.kt)("h2",{id:"some-simple-frescript-code"},"Some simple F","#","/ReScript code"),(0,r.kt)("p",null,"Dark and F# and ReScript are very similar. Here's an example function in F#:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let someFunction (intArgument : int) : string =\n  let aString = "myString"\n  let anInt = 65 + intArgument\n  let aFloat = 6.72\n  anotherFunction aString anInt aFloat\n')),(0,r.kt)("p",null,"This is a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"someFunction"),", which takes one argument, an ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"\ncalled ",(0,r.kt)("inlineCode",{parentName:"p"},"intArgument"),", and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". Three variables are defined in the\nbody, first a string, then an int, then a float, and finally we call the\n",(0,r.kt)("inlineCode",{parentName:"p"},"anotherFunction")," function with all three parameters as arguments."),(0,r.kt)("p",null,"In Dark this would be written:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'someFunction\n  intArgument : Int\n  \u21aa String\n\nlet aString = "myString"\nlet anInt = 65 + intArgument\nlet aFloat = 6.72\nanotherFunction aString anInt aFloat\n')),(0,r.kt)("p",null,"In ReScript this would be written:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},'let someFunction = (intArgument: int) : string =>\n  let aString = "myString"\n  let anInt = 65 + intArgument\n  let aFloat = 6.72\n  anotherFunction(aString, anInt, aFloat)\n')),(0,r.kt)("p",null,"As you can see, the syntaxes are very similar."),(0,r.kt)("h2",{id:"dark-vs-f-vs-rescript"},"Dark vs F","#"," vs ReScript"),(0,r.kt)("p",null,"Dark, ReScript, and F# are all influenced by OCaml. Though Dark is currently a\nsubset of these languages, Dark will continue to grow some more of their\nfeatures. We'll discuss the similarities and differences as we go through\nlanguage features."),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,"ReScript/F# are strongly typed-languages. Dark aspires to be, but it doesn't\nhave a type-checker yet. This shows the biggest difference in between working in\nthese languages, that the compiler will refuse to compile if the types are\nwrong."),(0,r.kt)("p",null,"ReScript/F# have type-inference, which means that the compiler will try and\nfigure out what the types are. This is frequently the source of bad compiler\nmessages, often it will tell you something which seems wrong because it guessed\nwrong about certain types."),(0,r.kt)("p",null,"Usually type errors actually contain useful information, but they need to be\nread very carefully to find it."),(0,r.kt)("p",null,"We've found the best way to debug incorrect types is to add type annotations to\neverything. We add them to all functions (we didn't always do this, but we do\nnow, but we are now), including all parameters and return types (see\n",(0,r.kt)("a",{parentName:"p",href:"#functions"},"example")," below)."),(0,r.kt)("p",null,"In F#, you can actually add types in many places where they aren't required,\nsuch as variable definitions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let y = 6.7\nlet (x : int) = 6\nx + 5\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x")," here, despite being a normal variable definition, has a type signature. F#\nand ReScript allow this in many places, and it's useful for tracking down these\nerrors."),(0,r.kt)("p",null,"We'll discuss declaring types below."),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Functions in ReScript and F# are defined in the outer scope. Type signatures are\noptional but we always use them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let myFunction (arg1 : int) (arg2 : string) : string =\n  if arg1 < (String.toInt arg2)\n  then "just return a string"\n  else arg2\n')),(0,r.kt)("p",null,"Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"myFunction")," has two arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"arg1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"arg2"),", which are an ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"string")," respectively. It returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("p",null,"Like in Dark, the body of a function is just an expression, and it automatically\nreturns the result of that expression."),(0,r.kt)("p",null,"(see ",(0,r.kt)("a",{parentName:"p",href:"#advanced-functions"},"below")," for more details on functions in OCaml)"),(0,r.kt)("h3",{id:"standard-library"},"Standard library"),(0,r.kt)("p",null,"Most of the code in Dark uses\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/tablecloth"},"Tablecloth"),", which has the same\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/tablecloth/blob/main/rescript/src/Tablecloth.ml"},"interface"),"\nfor ReScript and F#."),(0,r.kt)("p",null,"Note: for implementing the standard libraries, we do not use Tablecloth as it is\nstill pretty new and may be in flux. Instead, we try to make sure that we use\nlibraries from ",(0,r.kt)("inlineCode",{parentName:"p"},".NET"),", FSharp.Core, or if necessary, the FSharpPlus library."),(0,r.kt)("h3",{id:"int"},"Int"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," is the same in Dark and F#, same syntax, same meaning. Note that ints\nare 31 bits in ReScript, 32 bits in F#, and 64bit in Dark."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let x = 5\nx + 6\n")),(0,r.kt)("h3",{id:"float"},"Float"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," is the same in Dark, ReScript, and F#, both of them are 64-bit\nfloating point numbers."),(0,r.kt)("p",null,"Like in Dark, there are special operators to work on floats in ReScript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let x = 0.1\nx +. 0.3\n")),(0,r.kt)("p",null,"To convert from floats to ints use ",(0,r.kt)("inlineCode",{parentName:"p"},"Float.toInt"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Float.round"),"."),(0,r.kt)("p",null,"In F#, standard operators work on floats too."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let x = 0.1 in\nx +. 0.3\n")),(0,r.kt)("h3",{id:"bool"},"Bool"),(0,r.kt)("p",null,"Like in Dark, ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"s in F# and ReScript are either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,"Strings are Unicode in Dark, ReScript and F#. While you're unlikely to hit\ndifferences in practice, they do actually use a different in-memory\nrepresentation, with Dark using UTF-8, ReScript using the browser's built-in\nUCS-2, and F# using .NET's UTF-16 (which is very similar but not quite the same\nas UCS-2)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let myString = "some string, escaping is allowed\\nwhich dark doesn\'t support yet" in\nmyString\n')),(0,r.kt)("h3",{id:"string-interpolation"},"String Interpolation"),(0,r.kt)("p",null,"Both ReScript and F# support string interpolation. In F#:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let x = 6\nlet y = 7.8\nlet myString = $"some string with x: {x} and also {y}"\n')),(0,r.kt)("p",null,"In ReScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"let x = 6\nlet y = 7.8\nlet myString = {j|some string with x: $x and also $y|j}\n")),(0,r.kt)("p",null,"Dark does not currently support String interpolation."),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"Lists in Dark, F# and ReScript are almost the same. In F#, lists use ",(0,r.kt)("inlineCode",{parentName:"p"},";")," as\nseparators, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"[1; 2; 3; 4]\n")),(0,r.kt)("p",null,"If ReScript, the syntax is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"list{1, 2, 3, 4}\n")),(0,r.kt)("p",null,"(However, F# allows separators to be omitted which the list elements are lined\nup vertically, as it uses indentation as the separator)."),(0,r.kt)("p",null,"While Dark technically allows you to create lists that have different types in\nthem (which you should not do), ReScript and F# emphatically do not."),(0,r.kt)("p",null,"To type check a list in ReScript, you specify its type like so: ",(0,r.kt)("inlineCode",{parentName:"p"},"int list"),",\nwhich is a list of ints. In F#, you use ",(0,r.kt)("inlineCode",{parentName:"p"},"List<int>")," (though ",(0,r.kt)("inlineCode",{parentName:"p"},"int list")," is still\nallowed)."),(0,r.kt)("h3",{id:"records"},"Records"),(0,r.kt)("p",null,"Records are mostly used as objects are in most languages. Like Dark, they only\nhave fields, not methods, and you use functions to manipulate them."),(0,r.kt)("p",null,"A record in ReScript will look quite familiar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},'{ field1: 56,\n  field2: true,\n  field3: "asd"\n\n')),(0,r.kt)("p",null,"F# uses a similar syntax, but with ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},":"),", though it allows you to\nuse indentation instead of separators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'{\n  field1 = 56\n  field2 = true\n  field3 = "asd"\n}\n')),(0,r.kt)("p",null,"Note that they use ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," to connect a field and a value, and ",(0,r.kt)("inlineCode",{parentName:"p"},";")," as row separator.\nThe types of the fields do not have to be declared."),(0,r.kt)("p",null,"Records are immutable, like almost everything in ReScript/F#, and are updated\nusing unusual syntaxes:"),(0,r.kt)("p",null,"In ReScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"let x = { field1 = 56; field2 = true } in\nlet updatedX = {...x, field1: 57 } in\ndoSomethingWith(updatedX)\n")),(0,r.kt)("p",null,"In F#:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let x = { field1 = 56; field2 = true }\nlet updatedX = { x with field1 = 57 }\ndoSomethingWith updatedX\n")),(0,r.kt)("p",null,"Note that records in Dark are really dictionaries, which is why you update them\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"Dict::set"),". We're trying to figure out how to split records and\ndictionaries apart better in Dark, after which they will be more like\nReScript/F# (though hopefully with better syntax)."),(0,r.kt)("p",null,"Type definitions for records look like this in F#:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"type Person =\n  {\n    name : string\n  ; age : int\n  }\n")),(0,r.kt)("p",null,"and like this in ReScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"type person = {\n  name: string,\n  age: int\n}\n")),(0,r.kt)("h3",{id:"let"},"Let"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"let"),"s in ReScript and F# are the same as in Dark:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let x = 45\nx + 23\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"let")," also allow destructing in ReScript/F#, although we don't currently use\nthat very often."),(0,r.kt)("h3",{id:"if"},"If"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"if")," statements in F#/OCaml are extremely similar to Dark, including that they\nonly allow ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"s as the condition, and in their syntax."),(0,r.kt)("p",null,"In F#:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'if hasAccess user\nthen "Welcome!"\nelse "Access denied"\n')),(0,r.kt)("p",null,"In ReScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},'if hasAccess(user) {\n  "Welcome!"\n} else {\n  "Access denied"\n}\n')),(0,r.kt)("h3",{id:"operators"},"Operators"),(0,r.kt)("p",null,"F# has some unusual operators. Most importantly, the equality operator is ",(0,r.kt)("inlineCode",{parentName:"p"},"="),"\n(that's just one equals sign), whereas in most languages it's ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," (including\nDark and ReScript). ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," is very strict equality, equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"===")," in\nlanguages that have that, such as JS."),(0,r.kt)("p",null,"F# also has a ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," operator, but you should never use it."),(0,r.kt)("p",null,"F# use ",(0,r.kt)("inlineCode",{parentName:"p"},"<>")," for inequality (",(0,r.kt)("inlineCode",{parentName:"p"},"!=")," in Dark and ReScript). In ReScript, most of the\ncomparison operators (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<="),", etc) only operate on integers, and\nnot on floats. In F#, they work on both ints and floats."),(0,r.kt)("h3",{id:"match"},"Match"),(0,r.kt)("p",null,"Dark has a ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," statement that is very similar to F#/ReScript, with slightly\ndifferent syntax. In Dark you write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"match myValue\n  Some x -> 5\n  _ -> 6\n")),(0,r.kt)("p",null,"while in F# you write"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"match myValue with\n| Some x -> 5\n| _ -> 6\n")),(0,r.kt)("p",null,"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"with")," keyword, and starting the patterns with ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"."),(0,r.kt)("p",null,"In ReScript you write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"switch myValue {\n| Some(x) -> 5\n| _ -> 6\n}\n")),(0,r.kt)("p",null,"F#/ReScript also support more powerful ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),"es, for example multiple patterns\ncan match a single branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},'match myValue with\n| 4 | 5 | 6 -> "between 4 and 6"\n| _ -> "not between 4 and 6"\n')),(0,r.kt)("p",null,"F# also supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'match myValue with\n| Some myInt when myInt >= 4 && myInt <= 6 -> "between 4 and 6"\n| _ -> "not between 4 and 6"\n')),(0,r.kt)("p",null,"This is called an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," in ReScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},'switch myValue {\n| Some(myInt) if myInt >= 4 && myInt <= 6 -> "between 4 and 6"\n| _ -> "not between 4 and 6"\n}\n')),(0,r.kt)("p",null,"Be careful of very subtle bugs when combining multiple patterns with ",(0,r.kt)("inlineCode",{parentName:"p"},"when"),"\nclauses: the entire pattern will fail if the pattern matches when the clause\ndoes not:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},'let myValue = Some 5\nmatch myValue with\n| Some 4 | Some myInt when myValue <> Some 4 -> "this will never succeed"\n| _ -> "this will succeed as a fallback"\n')),(0,r.kt)("h3",{id:"variants"},"Variants"),(0,r.kt)("p",null,"Dark has a handful of enums for ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," types: ",(0,r.kt)("inlineCode",{parentName:"p"},"Just"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Error"),". In the future we will expand this to allow user-defined types\nas well."),(0,r.kt)("p",null,"ReScript/F# support the ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," types and we use them a lot.\nHowever, the constructors for Option are named differently; both languages use:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Some")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Just")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),"."),(0,r.kt)("p",null,'These enums are typically called "variants". We use them frequently, especially\nto represent expressions. For example in ',(0,r.kt)("inlineCode",{parentName:"p"},"FluidExpression.fs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"type t =\n  | EInteger of id * string\n  | EBool of id * bool\n  | EString of id * string\n  | EFloat of id * string * string\n  | ENull of id\n  | EBlank of id\n  | ELet of id * string * t * t\n  | EIf of id * t * t * t\n  | EBinOp of id * string * t * t * sendToRail\n  | ELambda of id * (analysisID * string) list * t\n  | EFieldAccess of id * t * string\n  | EVariable of id * string\n  | EFnCall of id * string * t list * sendToRail\n  | EPartial of id * string * t\n  | ERightPartial of id * string * t\n  | ELeftPartial of Shared.id * string * t\n  | EList of id * t list\n  | ERecord of id * (string * t) list\n  | EPipe of id * t list\n  | EConstructor of id * string * t list\n  | EMatch of id * t * (FluidPattern.t * t) list\n  | EPipeTarget of id\n  | EFeatureFlag of id * string * t * t * t\n")),(0,r.kt)("p",null,"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," (it's a common convention to name the main type of a module ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),") must\nbe one of ",(0,r.kt)("inlineCode",{parentName:"p"},"EInteger"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EBool"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EString"),", etc. ",(0,r.kt)("inlineCode",{parentName:"p"},"EInteger")," takes two parameters,\nan ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," (we use a string to represent integers as Bucklescript\ndoesn't have a big enough integer type)."),(0,r.kt)("p",null,"To create a ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),", you'd do something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let expr = EInteger (id, "test")\n')),(0,r.kt)("p",null,"To get values from them, you pattern match:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'match expr with\n| EInteger (_, str) -> str\n| _ -> "not an int"\n')),(0,r.kt)("h3",{id:"lambdas"},"Lambdas"),(0,r.kt)("p",null,"ReScript and F# support lambdas and we use them frequently. They have a\ndifferent syntax to Dark, F# uses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"list\n|> List.map (fun elem -> elem + 2)\n")),(0,r.kt)("p",null,"and ReScript uses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"list->List.map((elem) => elem + 2)\n")),(0,r.kt)("p",null,"It's very common to use functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"List.map")," which have a parameter called\n",(0,r.kt)("inlineCode",{parentName:"p"},"f")," which take a lambda. In F#, above, that parameter is passed like any other.\nIn ReScript, those parameters are passed as labelled variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"list->List.map:(~f=((elem) => elem + 2))\n")),(0,r.kt)("h3",{id:"pipes"},"Pipes"),(0,r.kt)("p",null,'Both languages have pipes which are the same as in Dark. In Dark, the passed\nargument goes into the first position. That is also true in ReScript, but not in\nF#, where it goes into the last position. As a result, we tend to put the\n"subject" of the function in the pipeable position (first in Dark and ReScript,\nlast in F#). ',(0,r.kt)("strong",{parentName:"p"},"Note that ReScript uses to have to pipe into the last position\nbut now does first by default; much of our code was designed to work pipe-last,\ninstead of pipe-first, and we'll need to migrate to pipe-first.")),(0,r.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,r.kt)("p",null,"Dictionaries (hash-maps, etc) are typically called ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," in F#/ReScript. In\nReScript, they are slightly challenging to use, which is one reason you won't\nsee them used as much as they really should be."),(0,r.kt)("h3",{id:"unit"},"Unit"),(0,r.kt)("p",null,"F#/ReScript have a ",(0,r.kt)("inlineCode",{parentName:"p"},"unit")," type, whose only member is ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),". That's an actual\nvalue, for example, all this is valid code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let falseVar = () != () in\n")),(0,r.kt)("p",null,"It's typically used to pass to a function which is impure but doesn't have any\nmeaningful arguments, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"gid ()")," (which generates IDs)."),(0,r.kt)("h3",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"Typically we use ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Option"),"s for error handling. You'll very commonly\nsee something like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let isRailable (m : model) (name : string) =\n  m.functions\n  |> Functions.find name\n  |> Option.map (fun fn ->\n         fn.fnReturnTipe = TOption || fn.fnReturnTipe = TResult)\n  |> Option.withDefault false\n")),(0,r.kt)("p",null,"To find out if a function goes on the error rail, we search for a function,\nwhich returns an Option. We then use a ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," to operate on the option, and\nfinally choose a default in case the Option returned ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,r.kt)("h4",{id:"exceptions"},"Exceptions"),(0,r.kt)("p",null,"F# and ReScript also have exceptions - we hardly use them in the client, but\nunfortunately use them a little bit on the backend, which we'd like to do less\nof."),(0,r.kt)("p",null,"Unfortunately, it's hard to tell when an exception could be thrown."),(0,r.kt)("h3",{id:"imperative-programming"},"Imperative programming"),(0,r.kt)("p",null,"F# and ReScript support imperative programming which Dark does not support yet."),(0,r.kt)("p",null,"In ReScript there are mutable values called refs, that can be updated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},'let myString = ref("old value")\nmyString := "new value"; // update contents of myString\nprint_endline(myString.contents)\n')),(0,r.kt)("p",null,"F# has mutable values that it prefers to refs (it has refs, but they're\ndeprecated). Mutable values are used like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let mutable myString = "old value"\nmyString <- "new value"\nprint(myString)\n')),(0,r.kt)("h3",{id:"advanced-functions"},"Advanced functions"),(0,r.kt)("h4",{id:"named-parameters"},"Named parameters"),(0,r.kt)("p",null,"ReScript Functions support named parameters, which you might see called like\nthis (note the ",(0,r.kt)("inlineCode",{parentName:"p"},"~"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"Option.withDefault(~default=5, Some(5)))\n")),(0,r.kt)("p",null,"These are useful as a named parameter can be placed in any order (this is also\nuseful for piping)."),(0,r.kt)("p",null,"You declare functions with named parameters like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"let myFunction = (regularParamter : int, ~namedParam : string) : int =>\n  ...body of function...\n")),(0,r.kt)("p",null,"These are not in F# or Dark."),(0,r.kt)("h4",{id:"optional-parameters"},"Optional parameters"),(0,r.kt)("p",null,"ReScript also supports optional parameters, which F# and OCaml do not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"let myFunction = (?optionalParam=3, regularParamter : int) : int =\n  ...body of function...\n")),(0,r.kt)("h4",{id:"the-rec-and-and-keywords"},"the ",(0,r.kt)("inlineCode",{parentName:"h4"},"rec")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"and")," keywords"),(0,r.kt)("p",null,"By default, F#/ReScript functions are not recursive: they cannot call\nthemselves. To allow a function to call itself, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"rec")," keyword:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let rec myFunction (var : int) : int =\n  if var > 6 then 6\n  else myFunction (var + 2)\n")),(0,r.kt)("p",null,"Similarly, if two functions need to call each other, they need to be aware of\neach other (F#/ReScript programs require all functions to be defined before they\nare used). The ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," keyword allows this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let firstFunction (var : int) =\n  (secondFunction var) + 2\n\nand secondFunction (var : int) =\n  if var > 6\n  then firstFunction 0\n  else firstFunction (var + 1)\n")),(0,r.kt)("h4",{id:"partial-application--currying"},"Partial application / currying"),(0,r.kt)("p",null,"Occasionally you'll see a function called with fewer arguments than it has\nparameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let myFunction (param1: int) (param2 : string) =\n  ...body...\n\nlet myOtherFunction = myFunction 6\n")),(0,r.kt)("p",null,'This is called "partial application", in that the function is only partially\ncalled (this is often called ',(0,r.kt)("em",{parentName:"p"},"Currying")," in the functional language community).\nThis just means that some parameters are filled in, and you now have a function\nwhich can be called with the remaining parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let () =\n  myOtherfunction "final argument"\n')),(0,r.kt)("p",null,"This is the same as if it were defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let myOtherFunction (param : string) =\n  myFunction 6 param\n")),(0,r.kt)("h3",{id:"modules"},"Modules"),(0,r.kt)("p",null,"ReScript has a complex module system, which takes some time to grasp. Modules\ncan have parameters, have inheritance, and each other these features uses a\ncomplicated, difficult to grasp syntax."),(0,r.kt)("p",null,"We only barely use modules in the Dark codebase, so here's what you need to\nknow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"all files are automatically modules. Note that in the backend, modules need to\nhave their directory names included, but not in the client.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"using a module is simple:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"open MyModule1 (* all function and types are available *)\nmodule M = MyModule2 (* access members as if the module was called M *)\n\nlet x = MyModule3.myFunction 6\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the syntax of creating a module is also straightforward:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rescript"},"module MyModule = struct\n  type t = int\n  let myfunction x = x + 2\nend\n")),(0,r.kt)("p",null,"We typically ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"Prelude")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Types")," modules at the top of all files\n(which in turn open other modules, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Tablecloth")," on the client)."),(0,r.kt)("p",null,"F# does have modules, but it does not support any of the complex stuff that\nReScript does."),(0,r.kt)("h3",{id:"classes-and-objects"},"Classes and Objects"),(0,r.kt)("p",null,"ReScript supports traditional object oriented programming, though it's not used\nvery much and very discouraged. The only place we really use it for interacting\nwith JS (the ReScript JS interop code compiles it to direct OO in JS)."),(0,r.kt)("p",null,"F# has OO that is used to interact with .NET types, and call C# libraries. We do\nnot use it very much but we do use it some. Defining a method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'type Pos =\n  { x : int\n  ; y : int\n  }\n  member this.JustXPlease() = this.x\n  override member this.ToString() = #"{this.x\nend\n')),(0,r.kt)("h2",{id:"rescript-vs-bucklescriptreasonml"},"ReScript vs Bucklescript/ReasonML?"),(0,r.kt)("p",null,'ReScript is the new name (as of 2020) for what was sometimes called Bucklescript\nand sometimes called ReasonML. You may see references to Bucklescript in our\ncodebase (including the prefix "bs").'),(0,r.kt)("h2",{id:"darks-codebase-history"},"Dark's codebase history"),(0,r.kt)("p",null,"Dark's backend was originally written in OCaml, and then ported to F# in 2021. A\nlot of code is written the way it is because that made sense in OCaml,\nespecially code with the comment ",(0,r.kt)("inlineCode",{parentName:"p"},"// CLEANUP")," in it."),(0,r.kt)("p",null,"Dark's frontend was originally written in Elm, before being ported. It was\nported to what is now ReScript in 2018, but ReScript itself went through a bit\nof an identity crisis. ReScript at the time was sometimes called BuckleScript\nand sometimes called ReasonML. In 2021, it officially renamed itself to\nReScript, and changed its official syntax (.res)."),(0,r.kt)("p",null,"Our frontend used an alternate syntax (.ml, as ReScript is based on OCaml and we\nused OCaml on our backend too). We switched over to .res in 2021 - however, a\nlot of remnants remain including old comments, and in particular that we\nprimarily used pipe-last instead of pipe-first."))}m.isMDXComponent=!0}}]);