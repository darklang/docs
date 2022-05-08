"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7374],{3905:(e,n,t)=>{t.d(n,{kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},32430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"Porting the Dark backend"},s=void 0,p={unversionedId:"contributing/porting-the-dark-backend",id:"contributing/porting-the-dark-backend",title:"Porting the Dark backend",description:"The big project at the moment is the replatform, moving the Dark backend from",source:"@site/docs/contributing/porting-the-dark-backend.md",sourceDirName:"contributing",slug:"/contributing/porting-the-dark-backend",permalink:"/contributing/porting-the-dark-backend",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/porting-the-dark-backend.md",tags:[],version:"current",frontMatter:{title:"Porting the Dark backend"},sidebar:"Contributing",previous:{title:"If you don't know our stack (F# and ReScript)",permalink:"/contributing/if-you-dont-know-our-stack"},next:{title:"Adding a built-in function",permalink:"/contributing/adding-a-function"}},d={},c=[{value:"Porting standard library functions",id:"porting-standard-library-functions",level:2},{value:"Ply",id:"ply",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Callbacks to the Interpreter",id:"callbacks-to-the-interpreter",level:3},{value:"New types",id:"new-types",level:3},{value:"Concerns when porting",id:"concerns-when-porting",level:2},{value:"Tests",id:"tests",level:2},{value:"Porting APIs",id:"porting-apis",level:2},{value:"Other work to be done",id:"other-work-to-be-done",level:2}],u={toc:c};function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The big project at the moment is the replatform, moving the Dark backend from\nOCaml to F#. The motivation for this is to give us access to a richer ecosystem\nof libraries to build Dark on, especially cloud libraries. This is described\nmore in a set of blog posts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.darklang.com/leaving-ocaml/"},"https://blog.darklang.com/leaving-ocaml/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.darklang.com/new-backend-fsharp/"},"https://blog.darklang.com/new-backend-fsharp/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.darklang.com/why-dark-didnt-choose-rust/"},"https://blog.darklang.com/why-dark-didnt-choose-rust/"))),(0,i.kt)("h2",{id:"porting-standard-library-functions"},"Porting standard library functions"),(0,i.kt)("p",null,"Dark's standard library functions need to be ported from OCaml to F#. At last\ncount there were 267 functions that needed porting, in addition to the 207\nalready ported."),(0,i.kt)("p",null,"You can get a list of the standard library functions that need porting by\nrunning:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'cat fsharp-backend/src/*/StdLib/*.fs | grep "//" | perl -n -e \'foreach ($_ =~ /name = fn "([A-Za-z0-9]+)" "([A-Za-z0-9]+)" (\\d)/ ) { print "$1::$2_v$3\\n" } \' | sort | uniq')),(0,i.kt)("p",null,"When porting a function, start by finding the commented out version of it (in\n",(0,i.kt)("inlineCode",{parentName:"p"},"fsharp-backend/src/LibExecution/StdLib")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"fsharp-backend/src/LibBackend/StdLib"),"). The original OCaml code has been\npreprocessed in bulk to closely match the intended F# code, so once you\nuncomment it, there should only be a small amount of work to port it over."),(0,i.kt)("h3",{id:"ply"},"Ply"),(0,i.kt)("p",null,"The functions in OCaml were written to not function concurrently, while the F#\nversion is designed to run concurrently. The major difference here is that the\nOCaml backend returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dval")," (a Dark value), while the F# version returns a\n",(0,i.kt)("inlineCode",{parentName:"p"},"Ply<Dval>"),"."),(0,i.kt)("p",null,"For most simple functions that do no IO, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Ply")," just wraps a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dval"),". For\nexample, compare the original OCaml version of ",(0,i.kt)("inlineCode",{parentName:"p"},"Int::add_v0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'  ; { prefix_names = ["Int::add"]\n    ; infix_names = ["+"]\n    ; parameters = [par "a" TInt; par "b" TInt]\n    ; return_type = TInt\n    ; description = "Adds two integers together"\n    ; func =\n        InProcess\n          (function\n          | _, [DInt a; DInt b] ->\n              DInt (Dint.( + ) a b)\n          | args ->\n              fail args)\n    ; preview_safety = Safe\n    ; deprecated = false }\n')),(0,i.kt)("p",null,"to the F# version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-fsharp"},'    { name = fn "Int" "add" 0\n      parameters = [ Param.make "a" TInt ""; Param.make "b" TInt "" ]\n      returnType = TInt\n      description = "Adds two integers together"\n      fn =\n        (function\n        | _, [ DInt a; DInt b ] -> Value(DInt(a + b))\n        | _ -> incorrectArgs ())\n      sqlSpec = SqlBinOp "+"\n      previewable = Pure\n      deprecated = NotDeprecated }\n')),(0,i.kt)("p",null,"As you can see, the major change that was needed for the return value was to\nwrap the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dval")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Value"),"."),(0,i.kt)("h3",{id:"tasks"},"Tasks"),(0,i.kt)("p",null,"For functions that perform IO, you'll need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ply"),' "computation\nexpression". A "computation expression" is a special F# language feature for\nwriting abstractions with a nice syntax. The ',(0,i.kt)("inlineCode",{parentName:"p"},"ply")," CE allows using a specialized\nasyncronous structure called Ply (which is extremely similar to a .Net Task)\neasily, and can best be illustrated with an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-fsharp"},"  (function\n  | state, [ DObj value; DStr key; DDB dbname ] ->\n      uply {\n        let db = state.dbs.[dbname]\n        let! _id = UserDB.set state true db key value\n        return DObj value\n      }\n  | _ -> incorrectArgs ())\n")),(0,i.kt)("p",null,"Let's break this down line by line:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uply {"),": this creates the CE, whose return value will be a ",(0,i.kt)("inlineCode",{parentName:"li"},"Ply<'any>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"let db = state.dbs.[dbname]")," - this is just regular F# code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"let! _id = UserDB.set state true db key value")," - the special thing here is\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"let!")," - this line calls ",(0,i.kt)("inlineCode",{parentName:"li"},"UserDB.set"),", a function which returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"Ply"),",\nand unwraps the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ply"),". This means that ",(0,i.kt)("inlineCode",{parentName:"li"},"_id")," can be treated as a normal value\nfor the rest of this ",(0,i.kt)("inlineCode",{parentName:"li"},"taskv"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"return DObj value")," - return takes an ordinary value and turns it into a\n",(0,i.kt)("inlineCode",{parentName:"li"},"TaskOrValue"),", in this case a ",(0,i.kt)("inlineCode",{parentName:"li"},"TaskOrValue<Dval>"),".")),(0,i.kt)("p",null,"Why do we go through all this trouble? Because this is an async runtime, and\n",(0,i.kt)("inlineCode",{parentName:"p"},"let!")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," are the enablers of the asyncronicity. A ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskOrValue")," is a\npromise, and ",(0,i.kt)("inlineCode",{parentName:"p"},"let!")," waits for the promise and then continues (running other code\nwhile the IO is still pending). This is the exact same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," keyword in\nJS, Rust, C# or Python."),(0,i.kt)("h3",{id:"callbacks-to-the-interpreter"},"Callbacks to the Interpreter"),(0,i.kt)("p",null,"You'll also need this for first-class functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"List::map_v0"),", as they may\nbe used to call functions which return Tasks. Here is an example of this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-fsharp"},'    { name = fn "List" "map" 0\n      parameters =\n        [ Param.make "list" (TList varA) "The list to be operated on"\n          Param.make\n            "fn"\n            (TFn([ varA ], varB))\n            "Function to be called on each member" ]\n      description =\n        "Returns a list created by the elements of `list` with `fn` called on each of them in order"\n      returnType = TList varB\n      fn =\n        (function\n        | state, [ DList l; DFnVal b ] ->\n            taskv {\n              let! result =\n                map_s\n                  (fun dv ->\n                    LibExecution.Interpreter.applyFnVal\n                      state\n                      (id 0)\n                      b\n                      [ dv ]\n                      NotInPipe\n                      NoRail)\n                  l\n\n              return Dval.list result\n            }\n        | _ -> incorrectArgs ())\n      sqlSpec = NotYetImplementedTODO\n      previewable = Pure\n      deprecated = NotDeprecated }\n')),(0,i.kt)("p",null,"This runs ",(0,i.kt)("inlineCode",{parentName:"p"},"map_s"),", which applies the function to the list of arguments (",(0,i.kt)("inlineCode",{parentName:"p"},"map_s"),"\nis short for map sequentially, which completes each previous task before\nstarting the next one). ",(0,i.kt)("inlineCode",{parentName:"p"},"applyFnVal")," calls the interpreter to run the passed in\nfunction, which might return a Task."),(0,i.kt)("h3",{id:"new-types"},"New types"),(0,i.kt)("p",null,"The F# port also creates the ability to add type checking to Dark. Rather than\nusing a non-nested type like ",(0,i.kt)("inlineCode",{parentName:"p"},"TResult"),", we use ",(0,i.kt)("inlineCode",{parentName:"p"},"TResult(DType, DType)")," to\nindicate the types used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," constructors used by Result. The\ndefinition of a type has switched from this in OCaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"module RuntimeT = struct\n  type tipe = Serialization_format.tipe =\n    | TAny\n    | TInt\n    | TFloat\n    | TBool\n    | TNull\n    | TDeprecated1\n    | TStr\n    | TList\n    | TObj\n    | TIncomplete\n    | TError\n    | TBlock\n    | TResp\n    | TDB\n    | TDate\n    | TDbList of tipe\n    | TPassword\n    | TUuid\n    | TOption\n    | TErrorRail\n    | TCharacter\n    | TResult\n    | TUserType of string * int\n    | TBytes\n")),(0,i.kt)("p",null,"to this in F#:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-fsharp"},"and DType =\n  | TAny\n  | TInt\n  | TFloat\n  | TBool\n  | TNull\n  | TStr\n  | TList of DType\n  | TDict of DType\n  | TIncomplete\n  | TError\n  | TLambda\n  | THttpResponse of DType\n  | TDB of DType\n  | TDate\n  | TChar\n  | TPassword\n  | TUuid\n  | TOption of DType\n  | TErrorRail\n  | TUserType of string * int\n  | TBytes\n  | TResult of DType * DType\n  | TVariable of string\n  | TFn of List<DType> * DType\n  | TRecord of List<string * DType>\n")),(0,i.kt)("p",null,"All of the polymorphic types like ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Option"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," now take type\narguments."),(0,i.kt)("p",null,"Note in particular that it is possible to accurately provide types for\nfirst-class functions, as opposed to ",(0,i.kt)("inlineCode",{parentName:"p"},"TLambda")," which we used before. For\nexample, ",(0,i.kt)("inlineCode",{parentName:"p"},'(TFn([ TVariable "a" ], TVariable "b"))'),' means "this parameter takes a\nfunction with one argument, which can be any type (we\'ll call it "a") and\nreturns any type (we\'ll call it "b"). Any name in a ',(0,i.kt)("inlineCode",{parentName:"p"},"TVariable")," can then be\nreused in the return type, such as ",(0,i.kt)("inlineCode",{parentName:"p"},'TList (TVariable "b")'),", above."),(0,i.kt)("h2",{id:"concerns-when-porting"},"Concerns when porting"),(0,i.kt)("p",null,"The most important thing when porting code over is to keep the exact same\nbehaviour between the old code and the new code. For example, that's why we're\nporting deprecated functions, including those with known bugs or bad behaviour."),(0,i.kt)("p",null,"In particular, we often have multiple copies of a function because the old one\nhandled ",(0,i.kt)("inlineCode",{parentName:"p"},"DIncomplete")," incorrectly and the new one handles it properly. If you\nsee something like ",(0,i.kt)("inlineCode",{parentName:"p"},"Dval.of_list"),", pay special care to replace it with the new\nequivalent (in this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"Dval.list"),"), so as to handle these edge cases\nproperly."),(0,i.kt)("h2",{id:"tests"},"Tests"),(0,i.kt)("p",null,"Many of the tests have been ported over already, and are commented out waiting\nfor their function to be implemented. You can find commented out tests for\nfunctions using:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cat fsharp-backend/tests/testfiles/*.tests | grep -v '^\\[' | grep \"^\\/\\/\" | perl -n -e 'foreach ($_ =~ /([A-Za-z0-9]+)\\.([A-Za-z0-9]+_v\\d)/ ) { print \"$1::$2\\n\" } ' | grep -v Test | sort | uniq")),(0,i.kt)("p",null,"That said, functions can never have enough tests, so if you think the existing\ntests aren't adequate, feel free to add more. If you aren't sure of the expected\nbehaviour, run it on your canvas on ",(0,i.kt)("inlineCode",{parentName:"p"},"darklang.com"),"."),(0,i.kt)("h2",{id:"porting-apis"},"Porting APIs"),(0,i.kt)("p",null,"There are many APIs that need to be ported - these are used by the editor. The\nAPIs that need to still be implemented are commented out at the bottom of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/ApiServer/Api.fs#L478"},(0,i.kt)("inlineCode",{parentName:"a"},"ApiServer/Api.fs")),"."),(0,i.kt)("p",null,"These are implemented in two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"adding types to Api.fs which have the expected shape (you can find the shape\nin\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/blob/main/backend/libbackend/analysis.ml"},(0,i.kt)("inlineCode",{parentName:"a"},"Analysis.ml")),")"),(0,i.kt)("li",{parentName:"ul"},"directly porting the OCaml code that back those functions")),(0,i.kt)("p",null,"Look at existing examples for how to do this, especially for how to port SQL\ncalls from OCaml to Dark."),(0,i.kt)("h2",{id:"other-work-to-be-done"},"Other work to be done"),(0,i.kt)("p",null,"The remainder of the work is bring tracked in the issue tracker under the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues?q=is%3Aopen+is%3Aissue+label%3Af%23"},"F# label"),"."))}h.isMDXComponent=!0}}]);