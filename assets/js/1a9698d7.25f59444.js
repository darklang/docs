"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[410],{41921:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=r(85893),i=r(11151);const t={},a="Darklang Release 2",o={id:"changelog/release-2",title:"Darklang Release 2",description:"June 6th, 2022",source:"@site/docs-classic/changelog/release-2.md",sourceDirName:"changelog",slug:"/changelog/release-2",permalink:"/changelog/release-2",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/changelog/release-2.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Release 3 - June, 2022",permalink:"/changelog/release-3"},next:{title:"Release 1",permalink:"/changelog/release-1"}},l={},d=[{value:"Major changes",id:"major-changes",level:2},{value:"Error messages",id:"error-messages",level:3},{value:"<code>Result.Error</code>s",id:"resulterrors",level:4},{value:"Runtime errors",id:"runtime-errors",level:4},{value:"Minor improvements and fixes",id:"minor-improvements-and-fixes",level:2},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"String casing",id:"string-casing",level:3},{value:"String ordering",id:"string-ordering",level:3},{value:"HTTP Clients",id:"http-clients",level:3},{value:"Generating JSON",id:"generating-json",level:3},{value:"Parsing JSON",id:"parsing-json",level:3},{value:"HTTP stack",id:"http-stack",level:3},{value:"Testing changes",id:"testing-changes",level:2},{value:"Operational changes",id:"operational-changes",level:2},{value:"Documentation changes",id:"documentation-changes",level:2},{value:"Contributing changes",id:"contributing-changes",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"darklang-release-2",children:"Darklang Release 2"}),"\n",(0,s.jsx)(n.p,{children:"June 6th, 2022"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["See the ",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/darklang-release-3/",children:"blog post"})," for further\ndiscussion."]})}),"\n",(0,s.jsxs)(n.p,{children:["Darklang Release 2 is the culmination of 20 months work of rewriting the backend\nfrom OCaml to F#. This was done to give us more productivity by allowing us use\nmore 3rd party SDKs, to solve operational issues, and to make it easier to\ncontribute. Our reasons for making the change were discussed at the time:\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/new-backend-fsharp/",children:"1"}),",\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/why-dark-didnt-choose-rust/",children:"2"}),",\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/leaving-ocaml/",children:"3"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The editor backend was fully migrated by April 2nd."}),"\n",(0,s.jsx)(n.li,{children:"HTTP backends (for builtwithdark.com) were finished converting on May 3rd."}),"\n",(0,s.jsx)(n.li,{children:"The migration to the new queues was fully converted on May 27th."}),"\n",(0,s.jsx)(n.li,{children:"The execution engine in the editor was switched over on June 5th."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The change was documented in a series of blog posts:\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/hows-the-dark-rewrite-going/",children:"1"}),",\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/changes-the-the-dark-rewrite/",children:"2"}),",\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/optimizing-tasks-in-fsharp/",children:"3"}),",\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/benchmarking-fsharp6-tasks/",children:"4"}),",\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/darklang-year-in-review-2021/",children:"5"}),",\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/try-out-the-new-darklang-backend/",children:"6"}),", and\n",(0,s.jsx)(n.a,{href:"https://blog.darklang.com/backend-rewrite-complete/",children:"7"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Thanks to everyone who contributed, including\n",(0,s.jsx)(n.a,{href:"https://github.com/Athinanarof",children:"Araceli S\xe1nchez"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/levlaz",children:"Lev Lazinskiy"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/mariajdab",children:"Mar\xeda Jos\xe9 D\xe1vila"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/mjeffryes",children:"Matthew Jeffryes"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/jwalter",children:"jwalter"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/danicampagna",children:"Daniela Campagna"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/sxmanton",children:"Sean Manton"}),", and especially\n",(0,s.jsx)(n.a,{href:"https://github.com/stachudotnet",children:"Stachu Korick"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"major-changes",children:"Major changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Darklang's implementation is now asynchronous, meaning that your programs will\nno longer be stuck behind other users' programs making HTTP or DB calls. This\nwas a major source of slow Dark programs experienced by most users."}),"\n",(0,s.jsx)(n.p,{children:"As well as massively reducing latency for programs written in Dark, the editor\nnow loads much faster."}),"\n",(0,s.jsx)(n.p,{children:"We have also switched from dozens of tiny machines to a smaller number of much\nmore powerful machines. This makes your programs run faster on average, even\nwhen accounting for the switch to an asynchronous implementation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can now put a lambda in a variable and pipe into it."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Most error messages are improved, especially for bad input."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The queues have been rewritten and should not longer suffer from the old\nsources of occasional downtime and slow-down."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"During a deploy of the Dark service, cron jobs no longer run the risk of\nrunning twice."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["There is now a ",(0,s.jsx)(n.a,{href:"https://status.darklang.com",children:"Status page"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dark's internal firewalls have been significantly improved"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Several bottlenecks to outbound HTTP requests have been identified and removed"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"String::length"})," is now ",(0,s.jsx)(n.code,{children:"O(1)"})," instead of ",(0,s.jsx)(n.code,{children:"O(N)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON output is now significantly faster"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When reading strings from a user, the string is only passed over once."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Traces are now stored in the background, after a request has completed,\ngreatly reducing response time on HTTP requests to Dark programs."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dark has moved to more powerful cloud machines, going from Google' Cloud's\ndeprecated N1 machines to extremely powerful T2D machines (2.3x faster)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The rewrite also addressed some underlying issues that will come out in new\nfeatures soon, including a better type system, support for characters and\ntuples, fixes for poor behavior in Date and String functions, and more. These\nissues are tracked in our new\n",(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark/projects/1#column-15173588",children:"project tracker"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"error-messages",children:"Error messages"}),"\n",(0,s.jsx)(n.p,{children:"All error messages have been renovated, attempting to make them more consistent\nand to reuse error message machinery. As a result, a majority of Dark error\nmessages have changed. If you were relying on the explicit format of a Dark\nlanguage or StdLib error message, expect that it will be different."}),"\n",(0,s.jsx)(n.p,{children:"If you do any error handling which relies specifically on the text of an error\nmessage coming from Dark, we recommend you no longer do that, and just use the\npresence of the error instead of the text."}),"\n",(0,s.jsx)(n.p,{children:"There are two places in Dark which use string error messages:"}),"\n",(0,s.jsxs)(n.h4,{id:"resulterrors",children:[(0,s.jsx)(n.code,{children:"Result.Error"}),"s"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Error"})," enum (referred to as ",(0,s.jsx)(n.code,{children:"Result.Error"})," below for clarity), will contain\na string error in most cases, which you might be using directly or indirectly."]}),"\n",(0,s.jsxs)(n.p,{children:["You might be accessing ",(0,s.jsx)(n.code,{children:"Result.Error"}),"s and their text contents directly using\nthe ",(0,s.jsx)(n.code,{children:"match"})," statement."]}),"\n",(0,s.jsxs)(n.p,{children:["You might also be accessing their text contents indirectly, using ",(0,s.jsx)(n.code,{children:"toString"}),", or\nother stringifying functions, such as ",(0,s.jsx)(n.code,{children:"toString"}),", ",(0,s.jsx)(n.code,{children:"JSON::"})," functions and\n",(0,s.jsx)(n.code,{children:"HTTPClient::"})," functions. This is only true if you taken the function returning\nthe ",(0,s.jsx)(n.code,{children:"Result.Error"})," off the error rail. This text may also make it to your\nweb/mobile clients or API consumers."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Result.Error"}),"s returned via a HTTP handler are not presented to the user, so\ntext cannot leak that way."]}),"\n",(0,s.jsx)(n.h4,{id:"runtime-errors",children:"Runtime errors"}),"\n",(0,s.jsx)(n.p,{children:"Runtime errors (including type errors) are not accessible via Dark programs, and\nwill always terminate the Dark program when they are accessed. As a result, the\ntext of any runtime error should not be accessible to your programs or your\nusers."}),"\n",(0,s.jsx)(n.h2,{id:"minor-improvements-and-fixes",children:"Minor improvements and fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dark used to return the ",(0,s.jsx)(n.code,{children:"Access-Control-Allow-Origin"})," header in lower-case, it\nis now returned in mixed case."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When making a web request to your Dark application, if you did not specific a\n",(0,s.jsx)(n.code,{children:"user-agent"})," header, Dark used to add a ",(0,s.jsx)(n.code,{children:"user-agent"})," header of\n",(0,s.jsx)(n.code,{children:"ocaml-cohttp/1.2.0"}),". We no longer add this header."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When making a web request to your Dark application with a ",(0,s.jsx)(n.code,{children:"content-type"}),"\nheader of ",(0,s.jsx)(n.code,{children:"text/ping"}),", Dark used to ignore the code and immediately return a\nresponse of status code 418. It now processes the request instead."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HttpClient::*"})," functions called with usernames and passwords in the URL can\nnow support arbitrary UTF-8 (in the past, Unicode was not supported.)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X509::pemCertificatePublicKeys"})," used to only work for RSA keys. It now also\nsupports DSA and ECDSA keys. The old version would read ECDSA keys and return\nan incorrect answer - it now returns a correct answer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"String::split"})," would fail if the 2nd argument was ",(0,s.jsx)(n.code,{children:'""'})," and the first argument\nwas a complex Unicode character, such as ",(0,s.jsx)(n.code,{children:'String::split "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f\u200d\ufe0f\ud83c\uddf5\ud83c\uddf7" ""'}),". This\nis now split correctly."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"String.trim"}),", ",(0,s.jsx)(n.code,{children:"String::trimEnd"})," and ",(0,s.jsx)(n.code,{children:"String::trimStart"})," worked incorrectly in\nsome Unicode situations, they now work correctly."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,s.jsx)(n.p,{children:"These breaking changes were documented and announced many months in advance of\nswitching over to the new version of Darklang. We also very careful deployed the\nnew code, watching for suspicious changes in any Dark programs that were\nrunning. In the rare case where something went awry, we contacted the users and\nworked with them to ensure a seamless transition."}),"\n",(0,s.jsx)(n.h3,{id:"string-casing",children:"String casing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"String::toLowercase_v0"})," and ",(0,s.jsx)(n.code,{children:"String::toUppercase_v0"})," worked correctly in the\nold version of Dark, for all unicode. In the new version, the library we are\nusing does not correctly handle some case changes, instead keeping the\noriginal character. This happens when the replacement is a different length\nthan the character being replaced (for example, ",(0,s.jsx)(n.code,{children:'"\u0587"'})," should be ",(0,s.jsx)(n.code,{children:'"\u0535\u0552"'})," when\nconverted to upper case, which the old version did correctly and the new\nversion does not). We plan to fix this at a later point."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"string-ordering",children:"String ordering"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Functions whose output relies on the internal ordering of a ",(0,s.jsx)(n.code,{children:"Dict"})," may have\ndifferent outputs, specifically, the output Lists may be in a different order.\nExamples include ",(0,s.jsx)(n.code,{children:"Dict::keys"}),", ",(0,s.jsx)(n.code,{children:"Dict::values"}),", and ",(0,s.jsx)(n.code,{children:"Dict::toList"})," which return\n",(0,s.jsx)(n.code,{children:"List"}),"s of values which are ordered based on the internal ordering in the\noriginal ",(0,s.jsx)(n.code,{children:"Dict"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When calling ",(0,s.jsx)(n.code,{children:"List::uniqueBy"}),", and there is a duplicate, the new version of\nDark may pick a different value for the duplicate. For example:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dark",children:"List.uniqueBy_v0 [1;2;3;4] (fun x -> Int.divide_v0 x 2) = [ 1, 3, 4 ] // old Dark\nList.uniqueBy_v0 [1;2;3;4] (fun x -> Int.divide_v0 x 2) = [ 1, 2, 4 ] // new Dark\n"})}),"\n",(0,s.jsx)(n.h3,{id:"http-clients",children:"HTTP Clients"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HttpClient::*"})," functions no longer support making requests with arbitrary\n",(0,s.jsx)(n.code,{children:"Content-Type"}),"s. They must now be\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type",children:"valid"}),",\nfor example ",(0,s.jsx)(n.code,{children:'"application/json"'})," or ",(0,s.jsx)(n.code,{children:'"application/json; charset=utf-8"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"generating-json",children:"Generating JSON"}),"\n",(0,s.jsx)(n.p,{children:"We have changed how JSON is generated in many cases. All the JSON generated by\nDark is now standards compliant, and uses a different formatting style."}),"\n",(0,s.jsxs)(n.p,{children:["In the old version of Dark, we would generate invalid JSON for the Float values\n",(0,s.jsx)(n.code,{children:"NaN"}),", ",(0,s.jsx)(n.code,{children:"Infinity"})," and ",(0,s.jsx)(n.code,{children:"-Infinity"}),". The old version of Dark generates them as\nbare identifiers, while the new version puts them in a string (e.g. ",(0,s.jsx)(n.code,{children:"NaN"})," vs\n",(0,s.jsx)(n.code,{children:'"NaN"'}),")."]}),"\n",(0,s.jsx)(n.p,{children:"This may occur in any of the places in which we generate JSON, which are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"when responding to a HTTP request in the HTTP framework"}),"\n",(0,s.jsxs)(n.li,{children:["when making a request with ",(0,s.jsx)(n.code,{children:"HttpClient"})," (any version)"]}),"\n",(0,s.jsxs)(n.li,{children:["when calling any of:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Dict::toJson_v0"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Object::toJson_v1"})," (",(0,s.jsx)(n.em,{children:"deprecated"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Object::toJson_v0"})," (",(0,s.jsx)(n.em,{children:"deprecated"}),")"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Twilio::sendText_v1"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Twilio::sendText_v0"})," (",(0,s.jsx)(n.em,{children:"deprecated"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the following ",(0,s.jsx)(n.code,{children:"JWT"})," functions do not use this new behavior, and should\nhave the exact same behavior as before, including:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JWT::signAndEncode_v0"})," (",(0,s.jsx)(n.em,{children:"deprecated"}),")"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"JWT::signAndEncode_v1"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JWT::signAndEncodeWithHeaders_v0"})," (",(0,s.jsx)(n.em,{children:"deprecated"}),")"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"JWT::signAndEncodeWithHeaders_v1"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"parsing-json",children:"Parsing JSON"}),"\n",(0,s.jsx)(n.p,{children:"When parsing JSON, we no longer accept the following invalid JSON:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["bare field names, such as in ",(0,s.jsx)(n.code,{children:"{ id : 5 }"}),". You need to quote field names:\n",(0,s.jsx)(n.code,{children:'{ "id": 5 }'})]}),"\n",(0,s.jsx)(n.li,{children:"newlines and invalid bytes in JSON strings"}),"\n",(0,s.jsxs)(n.li,{children:["the bare identifiers ",(0,s.jsx)(n.code,{children:"NaN"}),", ",(0,s.jsx)(n.code,{children:"Infinity"})," and ",(0,s.jsx)(n.code,{children:"-Infinity"})," are no longer parsed\ninto valid floats (note that the old version of Dark might have generated JSON\nwith these values in it)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dark now also allows parsing 64-bit integers (as opposed to 63-bit integers\nbefore)."}),"\n",(0,s.jsx)(n.p,{children:"Dark parses JSON:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"when receiving a HTTP request in the HTTP framework"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["when receiving a response to a request made with ",(0,s.jsx)(n.code,{children:"HttpClient"})," (any version)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"when calling any of:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"JSON::parse_v1"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JSON::parse_v0"})," (",(0,s.jsx)(n.em,{children:"deprecated"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JSON::read_v0"})," (",(0,s.jsx)(n.em,{children:"deprecated"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JSON::read_v0"})," (",(0,s.jsx)(n.em,{children:"deprecated"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"JWT::verifyAndExtract_v0"})," and ",(0,s.jsx)(n.code,{children:"JWT::verifyAndExtract_v1"})," are not\naffected by this change, as they have been kept deliberately compatible with the\nold versions."]}),"\n",(0,s.jsx)(n.h3,{id:"http-stack",children:"HTTP stack"}),"\n",(0,s.jsxs)(n.p,{children:["Dark has switched to using Kestrel, a high-performance HTTP server from .NET,\nfor its HTTP server. There are some differences between the new Kestrel-based\nserver and the previous OCaml ",(0,s.jsx)(n.code,{children:"cohttp"}),"-based server:"]}),"\n",(0,s.jsx)(n.p,{children:"Large differences:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dark programs can no longer set the HTTP ",(0,s.jsx)(n.code,{children:"Content-Length"})," header and it will\nbe set automatically. A ",(0,s.jsx)(n.code,{children:"Content-Length"})," header will be ignored if provided\nvia ",(0,s.jsx)(n.code,{children:"Http::response"})," or similar functions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dark is now less lenient to receiving incorrect ",(0,s.jsx)(n.code,{children:"Content-Length"})," headers. If\nthe data sent does not match the expected ",(0,s.jsx)(n.code,{children:"Content-Length"}),", the HTTP server\nwill return a 400 Bad Request error. Omitting the ",(0,s.jsx)(n.code,{children:"Content-Length"})," header is\nstill OK."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON returned from HTTP requests is now formatted differently, as discussed\nabove."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Minor differences:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When making HTTP requests to Dark:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Clients must send at least 256 bytes every 5 seconds or be timed-out"}),"\n",(0,s.jsx)(n.li,{children:"All headers must be sent in first 10 seconds"}),"\n",(0,s.jsx)(n.li,{children:"There must be fewer than 100 headers and they must fit in 32KB"}),"\n",(0,s.jsx)(n.li,{children:"The maximum size of HTTP requests to Dark is 10MB"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["HTTP responses sent by Dark","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Headers will be returned in a different order"}),"\n",(0,s.jsx)(n.li,{children:"Headers are not always lowercase anymore"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Date"})," header is now always present"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Server"})," header is now ",(0,s.jsx)(n.code,{children:"darklang"})," and always present"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"testing-changes",children:"Testing changes"}),"\n",(0,s.jsx)(n.p,{children:"We have gone from about 250 backend tests to over 5,000. We now have custom test\nframeworks for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark/tree/main/backend/testfiles/execution",children:"language and standard library testing"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark/tree/main/backend/testfiles/httphandler",children:"HTTP server testing"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark/tree/main/backend/testfiles/httpclient",children:"Testing HTTP clients"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/darklang/stable-dark/tree/main/backend/tests/FuzzTests",children:"Fuzz testing"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/darklang/stable-dark/tree/main/integration-tests",children:"Integration tests"}),"\nwere ported to ",(0,s.jsx)(n.a,{href:"https://playwright.dev/",children:"Playwright"}),", from TestCafe. They now\nrun much faster and are somewhat easier to write."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"operational-changes",children:"Operational changes"}),"\n",(0,s.jsx)(n.p,{children:"Behind the scenes, Dark has greatly improved its operations."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Switched to massively more powerful servers (requests now get 2 CPUs of a\n",(0,s.jsx)(n.a,{href:"https://cloud.google.com/blog/products/compute/compute-engine-tau-t2d-vms-now-available-for-scale-out-workloads",children:"Google Cloud T2D"}),",\nvs 0.1 CPUs of a n1d -- T2Ds are about 2.3x more powerful than N1Ds)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Separated the servers used by the Darklang editor from the ones running\nproduction applications."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Massively increased use of ",(0,s.jsx)(n.a,{href:"https://honeycomb.io",children:"observability"})," and error\ntracking to catch errors and customer issues"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Moved queues from running in the database (often taking over 50% of the CPU,\nto relying on our cloud vendor (Google PubSub). Also greatly increased\nreliability of the queues."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Nodes are now autoscaled, leading to significant cost savings."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Updated to latest version of Kubernetes, ",(0,s.jsx)(n.code,{children:"cert-manager"})," (which powers our\n",(0,s.jsx)(n.a,{href:"https://docs.darklang.com/how-to/custom-domains",children:"custom domains"})," feature),\nnginx, and other tools that we use."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added internal ",(0,s.jsx)(n.a,{href:"https://launchdarkly.com",children:"feature flagging"})," to give us more\ncontrol over how our infrastructure runs in production"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Significantly increased use of Kubernetes' security features, in particular\ninternal firewalls."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Standardized our production deployment process using a tool we wrote called\n",(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark/blob/8082df91676de2f26a0661bf20827a60976bb3c0/scripts/deployment/shipit",children:"shipit"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Removed nginx from our builtwithdark.com backends"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Move migrations out from startup code"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"All certs except darksa.com and darkstaticassets.com are now managed\nautomatically"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"documentation-changes",children:"Documentation changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"moved docs to docs.darklang.com"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/darklang/docs/pull/220",children:"refactored docs"})," to use the Divio\ndocumentation system, categorizing all docs into Tutorials, Reference,\nHow-tos, Walk-throughs and Discussion."]}),"\n",(0,s.jsx)(n.li,{children:"fixed all links"}),"\n",(0,s.jsxs)(n.li,{children:["redo the\n",(0,s.jsx)(n.a,{href:"https://docs.darklang.com/discussion/error-handling",children:"Error Rail discussion"})]}),"\n",(0,s.jsxs)(n.li,{children:["add a discussion of\n",(0,s.jsx)(n.a,{href:"https://docs.darklang.com/discussion/queues",children:"how the Queues work"})]}),"\n",(0,s.jsxs)(n.li,{children:["improved and expanded\n",(0,s.jsx)(n.a,{href:"https://docs.darklang.com/reference/keyboard-mapping",children:"keyboard shortcuts docs"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"contributing-changes",children:"Contributing changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added\n",(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark/blob/main/CODING-GUIDE.md",children:"coding guidelines"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added significant documentation, especially READMEs and design decisions,\nthroughout the ",(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark",children:"darklang repo"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Moved 99% of project collaboration to our\n",(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark",children:"public GitHub"})," and\n",(0,s.jsx)(n.a,{href:"https://darklang.com/discord-invite",children:"public community chat"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["ported our\n",(0,s.jsx)(n.a,{href:"https://docs.darklang.com/contributing/rescript-and-fsharp-for-dark-developers",children:"contributor guides"}),"\nto F#"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var s=r(67294);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);