"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2691],{3905:(t,e,a)=>{a.d(e,{kt:()=>d});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(g,i(i({ref:e},c),{},{components:a})):r.createElement(g,i({ref:e},c))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},48937:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Tutorial: Your first Darklang application",sidebar_label:"Your first Darklang application",id:"first-dark-application"},p=void 0,s={unversionedId:"tutorials/first-dark-application",id:"tutorials/first-dark-application",title:"Tutorial: Your first Darklang application",description:"We're going to take you through a tutorial to build an entire application that",source:"@site/docs/tutorials/01-first-dark-application.md",sourceDirName:"tutorials",slug:"/tutorials/first-dark-application",permalink:"/tutorials/first-dark-application",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/tutorials/01-first-dark-application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Tutorial: Your first Darklang application",sidebar_label:"Your first Darklang application",id:"first-dark-application"},sidebar:"docs",previous:{title:"Tutorial",permalink:"/category/tutorial"},next:{title:"Create a HTTP handler",permalink:"/tutorials/create-http-handler"}},u={},c=[{value:"Open the Editor",id:"open-the-editor",level:2}],d={toc:c};function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're going to take you through a tutorial to build an entire application that\nuses Darklang's basic functionality. This should take between 10m and 45m,\ndepending on how thorough you are. If you're having problems, come talk to us in\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://darklang.com/discord-invite"},"Darklang Community Discord"),"."),(0,o.kt)("p",null,"The application will accept requests and aggregate those requests into a report\ndaily. It will optionally store the daily report in Airtable. You will create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a HTTP handler to make requests to"),(0,o.kt)("li",{parentName:"ul"},"a REPL to make requests to the handler"),(0,o.kt)("li",{parentName:"ul"},"a Datastore storing those requests"),(0,o.kt)("li",{parentName:"ul"},"a Cron aggregating those requests daily into a report"),(0,o.kt)("li",{parentName:"ul"},"another Datastore storing the reports"),(0,o.kt)("li",{parentName:"ul"},"(optional) a ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpClient")," call to Airtable")),(0,o.kt)("p",null,"You can see a completed version of this tutorial at\n",(0,o.kt)("em",{parentName:"p"},"darklang.com/a/USERNAME-gettingstarted"),". If you'd like to start from scratch,\nnavigate to a fresh canvas (",(0,o.kt)("em",{parentName:"p"},"darklang.com/a/USERNAME-gettingstarted2"),", for\nexample.)"),(0,o.kt)("p",null,"A completed version of this tutorial, is also available at\n",(0,o.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-gettingstarted"},"https://darklang.com/a/sample-gettingstarted"),".\nNote that you should ",(0,o.kt)("strong",{parentName:"p"},"not")," copy/paste this ","\u2013"," we want to teach you to use\nthe Darklang editor."),(0,o.kt)("h2",{id:"open-the-editor"},"Open the Editor"),(0,o.kt)("p",null,"To start, open the Darklang editor by going to ",(0,o.kt)("em",{parentName:"p"},"darklang.com/a/USERNAME"),". If you\nhaven't signed up yet, you'll need to\n",(0,o.kt)("a",{parentName:"p",href:"https://darklang.com/signup"},"sign up for an account")," (it's free to signup)."))}m.isMDXComponent=!0}}]);