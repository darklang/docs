"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9542],{3905:(e,t,o)=>{o.d(t,{kt:()=>p});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(o),u=i,m=p["".concat(s,".").concat(u)]||p[u]||c[u]||a;return o?n.createElement(m,r(r({ref:t},h),{},{components:o})):n.createElement(m,r({ref:t},h))}));function p(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},83626:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=o(87462),i=o(63366),a=(o(67294),o(3905)),r=["components"],l={id:"cors",title:"How to work with CORS in Darklang",sidebar_label:"How to work with CORS"},s=void 0,d={unversionedId:"how-to/cors",id:"how-to/cors",title:"How to work with CORS in Darklang",description:"By default, browsers don't allow Javascript to make certain kinds of API calls",source:"@site/docs/how-to/cors.md",sourceDirName:"how-to",slug:"/how-to/cors",permalink:"/how-to/cors",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/how-to/cors.md",tags:[],version:"current",frontMatter:{id:"cors",title:"How to work with CORS in Darklang",sidebar_label:"How to work with CORS"},sidebar:"docs",previous:{title:"How to set up a custom domain",permalink:"/how-to/custom-domains"},next:{title:"How to collaborate with other developers",permalink:"/how-to/collaborate"}},c={},h=[{value:"Out of the Box CORS Settings in Darklang",id:"out-of-the-box-cors-settings-in-darklang",level:2},{value:"Simple Requests without Preflighting",id:"simple-requests-without-preflighting",level:2},{value:"Adding Preflighting via OPTIONS Handlers",id:"adding-preflighting-via-options-handlers",level:2},{value:"Options Method",id:"options-method",level:3},{value:"CORS with Custom Domains (Allow-Origin)",id:"cors-with-custom-domains-allow-origin",level:3},{value:"CORS with Authentication (Allow-Credentials)",id:"cors-with-authentication-allow-credentials",level:3},{value:"CORS with Custom Headers &amp; Methods (Allow-Headers, Allow-Methods)",id:"cors-with-custom-headers--methods-allow-headers-allow-methods",level:3},{value:"Application Wide CORS",id:"application-wide-cors",level:2},{value:"Common Errors",id:"common-errors",level:2}],p={toc:h};function u(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, browsers don't allow Javascript to make certain kinds of API calls\nto a different domain than the JS was loaded from. This is called the\n\"same-origin policy\", and it's used to protect users from having their\ncredentials stolen by malicious web pages. The browser will check with the\nserver to see if it's allowed make the request, based on the origin of where the\nJS application loaded."),(0,a.kt)("p",null,'To support intentional uses of APIs from different domains, browsers have all\nimplemented CORS: "cross origin resource sharing". More general information on\nCORS is available in\n',(0,a.kt)("a",{parentName:"p",href:"https://fetch.spec.whatwg.org/#http-cors-protocol"},"the Fetch standard"),", and in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"MDN documentation"),"."),(0,a.kt)("p",null,"This document addresses the common needs developers run into with respect to\nCORS when writing an application in Darklang. The three primary pieces of CORS\nthis document addresses are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin")," \u2014 what domains requests are coming from."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Credentials")," \u2014 using tokens (",(0,a.kt)("inlineCode",{parentName:"li"},'"BearerAuth"'),") or cookies\nwithin your application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Headers")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods")," \u2014 specific\nmethods & headers used within the application.")),(0,a.kt)("h2",{id:"out-of-the-box-cors-settings-in-darklang"},"Out of the Box CORS Settings in Darklang"),(0,a.kt)("p",null,"Darklang automatically uses permissive canvas-wide CORS settings with localhost\nto make it easy to get started when developing your backend with Darklang."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Today, Darklang sets accepts requests from localhost:3000, localhost:5000, and\nlocalhost:8000, as long as you do ",(0,a.kt)("strong",{parentName:"li"},"not")," have special headers or\nauthentication. More on the default supported headers is in\n",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"MDN"),"."),(0,a.kt)("li",{parentName:"ul"},"In the future for any version of localhost, we will also return all headers\nfrom the preflight request, all common methods, and accept credentials. This\nwork will also set max-age to something short to avoid caching issues. If this\nis blocking you, please let us know to help elevate the priority of this\nproject.")),(0,a.kt)("p",null,"Today, if you need authentication (including cookies) or special headers you\nwill need to include CORS settings."),(0,a.kt)("h2",{id:"simple-requests-without-preflighting"},"Simple Requests without Preflighting"),(0,a.kt)("p",null,"Some simple requests do not require CORS preflighting. This may be the case if\nyour request meets both of these requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method: GET, HEAD, POST"),(0,a.kt)("li",{parentName:"ul"},"Content Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"multipart/form-data"),", and\n",(0,a.kt)("inlineCode",{parentName:"li"},"text/plain"),"."),(0,a.kt)("li",{parentName:"ul"},"There are a couple other details, which you can check here:\n",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests"},"detailed explanation"),".")),(0,a.kt)("p",null,"For simple requests, the CORS settings should be returned within the endpoint.\nHere is an example of setting the headers for simple request that requires an\nallowed list of origins:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cors/cors_simple.png",src:o(14290).Z,width:"1252",height:"606"})),(0,a.kt)("h2",{id:"adding-preflighting-via-options-handlers"},"Adding Preflighting via OPTIONS Handlers"),(0,a.kt)("p",null,"If you require another method, header, or credentials, the CORS preflight must\nbe handled via an Options header. The browser will call the options header to\nget information, and then make its request accordingly."),(0,a.kt)("h3",{id:"options-method"},"Options Method"),(0,a.kt)("p",null,"Options is not a default method on HTTP handlers, but can be entered."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cors/cors_option.png",src:o(33846).Z,width:"858",height:"402"})),(0,a.kt)("h3",{id:"cors-with-custom-domains-allow-origin"},"CORS with Custom Domains (Allow-Origin)"),(0,a.kt)("p",null,"As in the simple request above, allowing multiple origins (domains) can be done\nin an Options header. You can choose to accept all origins (",(0,a.kt)("inlineCode",{parentName:"p"},"*"),") but this will\nnot allow cookies or auth headers (passing of credentials)."),(0,a.kt)("p",null,"The origin should be passed in the format that it arrives in from the client, in\nmost cases ",(0,a.kt)("inlineCode",{parentName:"p"},"https://url.com"),"or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost")," with it's port if you aren't\nusing 3000, 8000, or 5000, ex ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."),(0,a.kt)("p",null,"You can set a specific domain directly in the header where we have ",(0,a.kt)("inlineCode",{parentName:"p"},"corsHeader"),"\nor if you'd like to check for multiple, you can use a list format as below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cors/cors_customdomain.png",src:o(93096).Z,width:"1274",height:"534"})),(0,a.kt)("h3",{id:"cors-with-authentication-allow-credentials"},"CORS with Authentication (Allow-Credentials)"),(0,a.kt)("p",null,"To allow credentials, add the ",(0,a.kt)("inlineCode",{parentName:"p"},'{Access-Control-Allow-Credentials: "true"}'),"\nheader to your response. This will not be allowed if the list of allowed origins\nis set to ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cors/cors_auth.png",src:o(11313).Z,width:"2320",height:"924"})),(0,a.kt)("h3",{id:"cors-with-custom-headers--methods-allow-headers-allow-methods"},"CORS with Custom Headers & Methods (Allow-Headers, Allow-Methods)"),(0,a.kt)("p",null,"To allow a custom header, add the:\n",(0,a.kt)("inlineCode",{parentName:"p"},'{Access-Control-Allow-Headers: "headerName"}')," header to your response."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cors/cors_customheader.png",src:o(36431).Z,width:"1438",height:"478"})),(0,a.kt)("p",null,"To allow a specific method, add the ",(0,a.kt)("inlineCode",{parentName:"p"},'{Access-Control-Allow-Methods: "method"}'),"\nheader to your response."),(0,a.kt)("h2",{id:"application-wide-cors"},"Application Wide CORS"),(0,a.kt)("p",null,"Darklang does not yet have middleware, and preflighting must be added per\nendpoint. We recommend creating a function of the logic and then calling it from\neach ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIONS")," handler."),(0,a.kt)("p",null,"(Create a function from your Options handler by selecting the code and hitting\n",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd/Ctrl-\\")," to extract a function)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cors/cors_canvaswide.png",src:o(79628).Z,width:"1976",height:"1026"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cors/cors_callingcanvaswide.png",src:o(89385).Z,width:"850",height:"378"})),(0,a.kt)("p",null,"If you are using the same CORS settings for the entire canvas, you could make\none ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIONS")," handler for ",(0,a.kt)("inlineCode",{parentName:"p"},"/:url"),"."),(0,a.kt)("h2",{id:"common-errors"},"Common Errors"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Access to XMLHttpRequest at ',(0,a.kt)("inlineCode",{parentName:"p"},"https://mydomain.builtwithdark.com/myAPI")," from\norigin ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1022")," has been blocked by CORS policy: The value of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," header in the response must not be the\nwildcard '","*","' when the request's credentials mode is 'include'. The\ncredentials mode of requests initiated by the XMLHttpRequest is controlled by\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"withCredentials"),' attribute."')),(0,a.kt)("p",null,"This error means that you're trying to make a request from an origin that isn't\nexplicitly allowed, which means you may not send along cookies. Use\n","[http://localhost:3000]",", ","[http://localhost:5000]",", or ","[http://localhost:8000]","\nwhen testing your frontend locally. If this is a URL from the internet, use the\ndocumentation for ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," above."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Access to XMLHttpRequest at ',(0,a.kt)("inlineCode",{parentName:"p"},"https://mydomain.builtwithdark.com/myAPI")," from\norigin ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1022")," has been blocked by CORS policy: The value of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Credentials")," header in the response is '' which must\nbe 'true' when the request's credentials mode is 'include'.")),(0,a.kt)("p",null,"This error means that your response needs to include the header\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Credentials: true"),"."))}u.isMDXComponent=!0},11313:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cors_auth-4fd5539d5a7770f569009cb741150737.png"},89385:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cors_callingcanvaswide-48a1b4c25facefa35501959c718fe637.png"},79628:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cors_canvaswide-f6536f6d3a35ccd7bfb326dec52d6db2.png"},93096:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cors_customdomain-0c980d00a28894c976dc8b782e39f552.png"},36431:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cors_customheader-675d5907bbfec0e3702904880e9c06c3.png"},33846:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cors_option-bbbdc73164b776041dd7cd7d7539a071.png"},14290:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cors_simple-402ed5d4a4bb73a4112ca7f9046e6829.png"}}]);