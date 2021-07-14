(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{183:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(11),i=(t(0),t(242)),o={title:"Porting the Dark backend"},l={id:"contributing/porting-the-dark-backend",isDocsHomePage:!1,title:"Porting the Dark backend",description:"The big project at the moment is the replatform, moving the Dark backend from",source:"@site/docs/contributing/porting-the-dark-backend.md",permalink:"/contributing/porting-the-dark-backend",sidebar:"Contributing",previous:{title:"If you don't know F# or ReScript",permalink:"/contributing/if-you-dont-know-ocaml"},next:{title:"Adding a built-in function",permalink:"/contributing/adding-a-function"}},s=[{value:"TaskOrValue",id:"taskorvalue",children:[{value:"Tasks",id:"tasks",children:[]},{value:"Callbacks to the Interpreter",id:"callbacks-to-the-interpreter",children:[]},{value:"New types",id:"new-types",children:[]}]},{value:"Concerns when porting",id:"concerns-when-porting",children:[]},{value:"Tests",id:"tests",children:[]}],c={rightToc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The big project at the moment is the replatform, moving the Dark backend from\nOCaml to F#. The motivation for this is to give us access to a richer ecosystem\nof libraries to build Dark on, especially cloud libraries. This is described\nmore in a set of blog posts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.darklang.com/leaving-ocaml/"}),"https://blog.darklang.com/leaving-ocaml/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.darklang.com/new-backend-fsharp/"}),"https://blog.darklang.com/new-backend-fsharp/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.darklang.com/why-dark-didnt-choose-rust/"}),"https://blog.darklang.com/why-dark-didnt-choose-rust/"))),Object(i.b)("h1",{id:"porting-standard-library-functions"},"Porting standard library functions"),Object(i.b)("p",null,"Dark's standard library functions need to be ported from OCaml to F#. At last\ncount there were 267 functions that needed porting, in addition to the 207\nalready ported."),Object(i.b)("p",null,"You can get a list of the standard library functions that need porting by\nrunning:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'cat fsharp-backend/src/*/StdLib/*.fs | grep "//" | perl -n -e \'foreach ($_ =~ /name = fn "([A-Za-z0-9]+)" "([A-Za-z0-9]+)" (\\d)/ ) { print "$1::$2_v$3\\n" } \' | sort | uniq')),Object(i.b)("p",null,"When porting a function, start by finding the commented out version of it (in\n",Object(i.b)("inlineCode",{parentName:"p"},"fsharp-backend/src/LibExecution/StdLib")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"fsharp-backend/src/LibBackend/StdLib"),"). The original OCaml code has been\npreprocessed in bulk to closely match the intended F# code, so once you\nuncomment it, there should only be a small amount of work to port it over."),Object(i.b)("h2",{id:"taskorvalue"},"TaskOrValue"),Object(i.b)("p",null,"The functions in OCaml were written to not function concurrently, while the F#\nversion is designed to run concurrently. The major difference here is that the\nOCaml backend returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Dval")," (a Dark value), while the F# version returns a\n",Object(i.b)("inlineCode",{parentName:"p"},"TaskOrValue<Dval>"),"."),Object(i.b)("p",null,"For most simple functions that do no IO, a ",Object(i.b)("inlineCode",{parentName:"p"},"TaskOrValue")," just wraps a ",Object(i.b)("inlineCode",{parentName:"p"},"Dval"),".\nFor example, compare the original OCaml version of ",Object(i.b)("inlineCode",{parentName:"p"},"Int::add_v0"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'  ; { prefix_names = ["Int::add"]\n    ; infix_names = ["+"]\n    ; parameters = [par "a" TInt; par "b" TInt]\n    ; return_type = TInt\n    ; description = "Adds two integers together"\n    ; func =\n        InProcess\n          (function\n          | _, [DInt a; DInt b] ->\n              DInt (Dint.( + ) a b)\n          | args ->\n              fail args)\n    ; preview_safety = Safe\n    ; deprecated = false }\n')),Object(i.b)("p",null,"to the F# version"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'    { name = fn "Int" "add" 0\n      parameters = [ Param.make "a" TInt ""; Param.make "b" TInt "" ]\n      returnType = TInt\n      description = "Adds two integers together"\n      fn =\n        (function\n        | _, [ DInt a; DInt b ] -> Value(DInt(a + b))\n        | _ -> incorrectArgs ())\n      sqlSpec = SqlBinOp "+"\n      previewable = Pure\n      deprecated = NotDeprecated }\n')),Object(i.b)("p",null,"As you can see, the major change that was needed for the return value was to\nwrap the ",Object(i.b)("inlineCode",{parentName:"p"},"Dval")," in a ",Object(i.b)("inlineCode",{parentName:"p"},"Value"),"."),Object(i.b)("h3",{id:"tasks"},"Tasks"),Object(i.b)("p",null,"For functions that perform IO, you'll need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"taskv"),' "computation\nexpression". A "computation expression" is a special F# language feature for\nwriting abstractions with a nice syntax. The ',Object(i.b)("inlineCode",{parentName:"p"},"taskv")," CE allows using\nTaskOrValues easily, and can best be illustrated with an example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"  (function\n  | state, [ DObj value; DStr key; DDB dbname ] ->\n      taskv {\n        let db = state.dbs.[dbname]\n        let! _id = UserDB.set state true db key value\n        return DObj value\n      }\n  | _ -> incorrectArgs ())\n")),Object(i.b)("p",null,"Let's break this down line by line:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"taskv {"),": this creates the CE, whose return value will be a\n",Object(i.b)("inlineCode",{parentName:"li"},"TaskOrValue<'any>"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"let db = state.dbs.[dbname]")," - this is just regular F# code"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"let! _id = UserDB.set state true db key value")," - the special thing here is\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"let!")," - this line calls ",Object(i.b)("inlineCode",{parentName:"li"},"UserDB.set"),", a function which returns a\n",Object(i.b)("inlineCode",{parentName:"li"},"TaskOrValue"),", and unwraps the ",Object(i.b)("inlineCode",{parentName:"li"},"TaskOrValue"),". This means that ",Object(i.b)("inlineCode",{parentName:"li"},"_id")," can be\ntreated as a normal value for the rest of this ",Object(i.b)("inlineCode",{parentName:"li"},"taskv"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"return DObj value")," - return takes an ordinary value and turns it into a\n",Object(i.b)("inlineCode",{parentName:"li"},"TaskOrValue"),", in this case a ",Object(i.b)("inlineCode",{parentName:"li"},"TaskOrValue<Dval>"),".")),Object(i.b)("p",null,"Why do we go through all this trouble? Because this is an async runtime, and\n",Object(i.b)("inlineCode",{parentName:"p"},"let!")," and ",Object(i.b)("inlineCode",{parentName:"p"},"return")," are the enablers of the asyncronicity. A ",Object(i.b)("inlineCode",{parentName:"p"},"TaskOrValue")," is a\npromise, and ",Object(i.b)("inlineCode",{parentName:"p"},"let!")," waits for the promise and then continues (running other code\nwhile the IO is still pending). This is the exact same as the ",Object(i.b)("inlineCode",{parentName:"p"},"async")," keyword in\nJS, Rust, C# or Python."),Object(i.b)("h3",{id:"callbacks-to-the-interpreter"},"Callbacks to the Interpreter"),Object(i.b)("p",null,"You'll also need this for first-class functions like ",Object(i.b)("inlineCode",{parentName:"p"},"List::map_v0"),", as they may\nbe used to call functions which return Tasks. Here is an example of this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'    { name = fn "List" "map" 0\n      parameters =\n        [ Param.make "list" (TList varA) "The list to be operated on"\n          Param.make\n            "fn"\n            (TFn([ varA ], varB))\n            "Function to be called on each member" ]\n      description =\n        "Returns a list created by the elements of `list` with `fn` called on each of them in order"\n      returnType = TList varB\n      fn =\n        (function\n        | state, [ DList l; DFnVal b ] ->\n            taskv {\n              let! result =\n                map_s\n                  (fun dv ->\n                    LibExecution.Interpreter.applyFnVal\n                      state\n                      (id 0)\n                      b\n                      [ dv ]\n                      NotInPipe\n                      NoRail)\n                  l\n\n              return Dval.list result\n            }\n        | _ -> incorrectArgs ())\n      sqlSpec = NotYetImplementedTODO\n      previewable = Pure\n      deprecated = NotDeprecated }\n')),Object(i.b)("p",null,"This runs ",Object(i.b)("inlineCode",{parentName:"p"},"map_s"),", which applies the function to the list of arguments (",Object(i.b)("inlineCode",{parentName:"p"},"map_s"),"\nis short for map sequentially, which completes each previous task before\nstarting the next one). ",Object(i.b)("inlineCode",{parentName:"p"},"applyFnVal")," calls the interpreter to run the passed in\nfunction, which might return a Task."),Object(i.b)("h3",{id:"new-types"},"New types"),Object(i.b)("p",null,"The F# port also creates the ability to add type checking to Dark. Rather than\nusing a non-nested type like ",Object(i.b)("inlineCode",{parentName:"p"},"TResult"),", we use ",Object(i.b)("inlineCode",{parentName:"p"},"TResult(DType, DType)")," to\nindicate the types used in the ",Object(i.b)("inlineCode",{parentName:"p"},"Ok")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," constructors used by Result. The\ndefinition of a type has switched from this in OCaml:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"module RuntimeT = struct\n  type tipe = Serialization_format.tipe =\n    | TAny\n    | TInt\n    | TFloat\n    | TBool\n    | TNull\n    | TDeprecated1\n    | TStr\n    | TList\n    | TObj\n    | TIncomplete\n    | TError\n    | TBlock\n    | TResp\n    | TDB\n    | TDate\n    | TDbList of tipe\n    | TPassword\n    | TUuid\n    | TOption\n    | TErrorRail\n    | TCharacter\n    | TResult\n    | TUserType of string * int\n    | TBytes\n")),Object(i.b)("p",null,"to this in F#:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"and DType =\n  | TAny\n  | TInt\n  | TFloat\n  | TBool\n  | TNull\n  | TStr\n  | TList of DType\n  | TDict of DType\n  | TIncomplete\n  | TError\n  | TLambda\n  | THttpResponse of DType\n  | TDB of DType\n  | TDate\n  | TChar\n  | TPassword\n  | TUuid\n  | TOption of DType\n  | TErrorRail\n  | TUserType of string * int\n  | TBytes\n  | TResult of DType * DType\n  | TVariable of string\n  | TFn of List<DType> * DType\n  | TRecord of List<string * DType>\n")),Object(i.b)("p",null,"All of the polymorphic types like ",Object(i.b)("inlineCode",{parentName:"p"},"List"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Option"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"Result")," now take type\narguments."),Object(i.b)("p",null,"Note in particular that it is possible to accurately provide types for\nfirst-class functions, as opposed to ",Object(i.b)("inlineCode",{parentName:"p"},"TLambda")," which we used before. For\nexample, ",Object(i.b)("inlineCode",{parentName:"p"},'(TFn([ TVariable "a" ], TVariable "b"))'),' means "this parameter takes a\nfunction with one argument, which can be any type (we\'ll call it "a") and\nreturns any type (we\'ll call it "b"). Any name in a ',Object(i.b)("inlineCode",{parentName:"p"},"TVariable")," can then be\nreused in the return type, such as ",Object(i.b)("inlineCode",{parentName:"p"},'TList (TVariable "b")'),", above."),Object(i.b)("h2",{id:"concerns-when-porting"},"Concerns when porting"),Object(i.b)("p",null,"The most important thing when porting code over is to keep the exact same\nbehaviour between the old code and the new code. For example, that's why we're\nporting deprecated functions, including those with known bugs or bad behaviour."),Object(i.b)("p",null,"In particular, we often have multiple copies of a function because the old one\nhandled ",Object(i.b)("inlineCode",{parentName:"p"},"DIncomplete")," incorrectly and the new one handles it properly. If you\nsee something like ",Object(i.b)("inlineCode",{parentName:"p"},"Dval.of_list"),", pay special care to replace it with the new\nequivalent (in this case, ",Object(i.b)("inlineCode",{parentName:"p"},"Dval.list"),"), so as to handle these edge cases\nproperly."),Object(i.b)("h2",{id:"tests"},"Tests"),Object(i.b)("p",null,"Many of the tests have been ported over already, and are commented out waiting\nfor their function to be implemented. You can find commented out tests for\nfunctions using:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cat fsharp-backend/tests/testfiles/*.tests | grep -v '^\\[' | grep \"^\\/\\/\" | perl -n -e 'foreach ($_ =~ /([A-Za-z0-9]+)\\.([A-Za-z0-9]+_v\\d)/ ) { print \"$1::$2\\n\" } ' | grep -v Test | sort | uniq")),Object(i.b)("p",null,"That said, functions can never have enough tests, so if you think the existing\ntests aren't adequate, feel free to add more. If you aren't sure of the expected\nbehaviour, run it on your canvas on ",Object(i.b)("inlineCode",{parentName:"p"},"darklang.com"),"."),Object(i.b)("h1",{id:"porting-apis"},"Porting APIs"),Object(i.b)("p",null,"There are many APIs that need to be ported - these are used by the editor. The\nAPIs that need to still be implemented are commented out at the bottom of\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/ApiServer/Api.fs#L478"}),Object(i.b)("inlineCode",{parentName:"a"},"ApiServer/Api.fs")),"."),Object(i.b)("p",null,"These are implemented in two parts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"adding types to Api.fs which have the expected shape (you can find the shape\nin\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/darklang/dark/blob/main/backend/libbackend/analysis.ml"}),Object(i.b)("inlineCode",{parentName:"a"},"Analysis.ml")),")"),Object(i.b)("li",{parentName:"ul"},"directly porting the OCaml code that back those functions")),Object(i.b)("p",null,"Look at existing examples for how to do this, especially for how to port SQL\ncalls from OCaml to Dark."),Object(i.b)("h1",{id:"other-work-to-be-done"},"Other work to be done"),Object(i.b)("p",null,"The remainder of the work is bring tracked in the issue tracker under the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/darklang/dark/issues?q=is%3Aopen+is%3Aissue+label%3Af%23"}),"F# label"),"."))}b.isMDXComponent=!0},242:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return t?r.a.createElement(h,l(l({ref:n},c),{},{components:t})):r.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);