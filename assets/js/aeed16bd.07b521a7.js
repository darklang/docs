"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1007],{3905:(e,t,n)=>{n.d(t,{kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,g=h["".concat(r,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],l={title:"Walk-through: Send and receive messages",sidebar_label:"Slack: send and receive messages"},r=void 0,p={unversionedId:"walk-throughs/slack-app",id:"walk-throughs/slack-app",title:"Walk-through: Send and receive messages",description:"Watch a",source:"@site/docs/walk-throughs/slack-app.md",sourceDirName:"walk-throughs",slug:"/walk-throughs/slack-app",permalink:"/walk-throughs/slack-app",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/walk-throughs/slack-app.md",tags:[],version:"current",frontMatter:{title:"Walk-through: Send and receive messages",sidebar_label:"Slack: send and receive messages"},sidebar:"docs",previous:{title:"React: Build a backend",permalink:"/walk-throughs/react-app"},next:{title:"Using an External DB",permalink:"/walk-throughs/external-db"}},c={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Creating a Slack App",id:"creating-a-slack-app",level:2},{value:"Step One: Setting up OAuth (Relatively Painless!)",id:"step-one-setting-up-oauth-relatively-painless",level:3},{value:"Step Two: Building Application Functionality &amp; Working with Slack\u2019s Payload",id:"step-two-building-application-functionality--working-with-slacks-payload",level:3},{value:"Supporting Slack Commands",id:"supporting-slack-commands",level:2},{value:"Supporting Bots &amp; Event Subscriptions",id:"supporting-bots--event-subscriptions",level:2},{value:"Handling Incoming Data",id:"handling-incoming-data",level:2}],h={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Watch a\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cLFwsRwL5Ww"},"demo video of building a Slack app"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"This guide will walk you through how to set up a Slack application, trigger\nevents from it, and write the corresponding backend logic. Our app is for\nsharing photos of office dogs."),(0,o.kt)("h2",{id:"creating-a-slack-app"},"Creating a Slack App"),(0,o.kt)("p",null,"Create a new Slack App from ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/"},"https://api.slack.com/")),(0,o.kt)("p",null,"In order to install the app to your workspace, you\u2019ll need to have the proper\npermissions. If you can\u2019t, you can\n",(0,o.kt)("a",{parentName:"p",href:"https://slack.com/create"},"set up your own workspace")," for testing instead.\nPlease don\u2019t use the Darklang community Slack, as it\u2019s a free community and we\ncan\u2019t support them all."),(0,o.kt)("p",null,"In order to install your app to your workspace, or distribute it elsewhere, your\napp will need to support at least one feature or functionality."),(0,o.kt)("p",null,"Add a /test slash command to start, and point the request URL at\nUSERNAME-CANVASNAME.builtwithdark.com/test:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/mage17.png",src:n(90507).Z,width:"1124",height:"818"})),(0,o.kt)("p",null,"(If you\u2019d like, you can add other features & functionality here, like a bot, but\nthis is enough to build the base of the application and get started)."),(0,o.kt)("h3",{id:"step-one-setting-up-oauth-relatively-painless"},"Step One: Setting up OAuth (Relatively Painless!)"),(0,o.kt)("p",null,"In order to allow your app to be distributed, let\u2019s quickly set up OAuth\n(",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/docs/oauth"},"Slack\u2019s OAuth Documentation"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manage Distribution.")," From your Slack App\u2019s Manage Distribution page, add a\nredirect URL."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image11.png",src:n(82979).Z,width:"1388",height:"806"})),(0,o.kt)("p",null,"The URL you provide will need to be in the following format:\n","[https://USERNAME-CANVASNAME.builtwithdark.com/OAUTH-REDIRECT]"),(0,o.kt)("p",null,"Make sure you click on the option to Save URLs, then navigate to ",(0,o.kt)("strong",{parentName:"p"},"Settings >\nManage Distribution")," and copy the Shareable URL to your browser\u2019s address bar."),(0,o.kt)("p",null,"--"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Before continuing, please visit the Shareable URL to install the\napplication."))," By visiting this URL, you\u2019re making sure you have a real trace\nto work from in Darklang. If you\u2019re new to Darklang,\n",(0,o.kt)("a",{parentName:"p",href:"/discussion/trace-driven-development"},"Trace driven development")," is a good\noverview of why."),(0,o.kt)("p",null,"--"),(0,o.kt)("p",null,"Once you click on ",(0,o.kt)("strong",{parentName:"p"},"Allow"),", and then you\u2019ll see a 404 error, since we haven\u2019t\nwritten the backend logic."),(0,o.kt)("p",null,"Go back to your Darklang canvas; we\u2019ll use this 404 to start building."),(0,o.kt)("p",null,"In Darklang, you work with production traces to build your backend. ",(0,o.kt)("strong",{parentName:"p"},"Click on\nthe \u201c+\u201d")," next to your 404 to create an HTTP handler that will respond to OAuth\nrequests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image19.png",src:n(5620).Z,width:"1142",height:"856"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image10.png",src:n(85318).Z,width:"1510",height:"1444"})),(0,o.kt)("p",null,"After creating the route, you\u2019ll see the trace showing the full request that\nSlack made to your Darklang app. This includes the code you\u2019ll need to send back\nto Slack."),(0,o.kt)("p",null,"Before we send it, you\u2019ll need your ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"client_secret"),", which you\ncan get from Slack\u2019s ",(0,o.kt)("strong",{parentName:"p"},"Basic Information")," page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image18.png",src:n(20045).Z,width:"1292",height:"826"})),(0,o.kt)("p",null,"Type the code below into your handler in Darklang. As you enter it, you\u2019ll see\nthat the trace is used to show you the results of your code, as well as helping\nthe autocomplete. When copy/pasting your ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"secret_id"),", you\u2019ll\nneed to open the string literal first (",(0,o.kt)("inlineCode",{parentName:"p"},'"'),") and then paste (otherwise it looks\nlike a float and is truncated)."),(0,o.kt)("p",null,"This is the end result, but you\u2019ll see your ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"client_secret"),"\ninstead of placeholders:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image9.png",src:n(78664).Z,width:"754",height:"366"})),(0,o.kt)("p",null,"This calls part of Slack\u2019s API\n(",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/oauth.access"},(0,o.kt)("inlineCode",{parentName:"a"},"oauth.access")),"), which will give\nyou access to the Slack app that requested it."),(0,o.kt)("p",null,"When you\u2019ve done this correctly and hit \u201cplay\u201d to make the call\n(",(0,o.kt)("a",{parentName:"p",href:"/discussion/trace-driven-development#live-values--play-buttons"},"more on play buttons)"),",\nyou\u2019ll get a response that has the right fields. This will include ",(0,o.kt)("inlineCode",{parentName:"p"},"team_id")," and\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token"),". (This may also have a ",(0,o.kt)("inlineCode",{parentName:"p"},"bot_access_token")," if you add a bot to\nyour Slack functionality)."),(0,o.kt)("p",null,"If you get an error in a response, you won\u2019t be able to keep going. If the code\nexpired, you\u2019ll need to re-open the shareable link from Slack in the browser to\nre-authenticate."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image12.png",src:n(3952).Z,width:"528",height:"522"})),(0,o.kt)("p",null,"You can save the response to a variable by inserting a let (",(0,o.kt)("inlineCode",{parentName:"p"},"Cmd/Ctrl-\\")," ->\n",(0,o.kt)("inlineCode",{parentName:"p"},"wrap-in-let"),"). You can also just hit return at the end of the function and it\nwill do the same thing:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image4.gif",src:n(9251).Z,width:"586",height:"302"})),(0,o.kt)("p",null,"Now save the tokens you receive to a Datastore."),(0,o.kt)("p",null,"Create a new datastore from the omnibox, and set up a schema that matches the\nfields you want to save (in our example for Lou the Dog, ",(0,o.kt)("inlineCode",{parentName:"p"},"team_id")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," - depending on your feature set you might not have a\n",(0,o.kt)("inlineCode",{parentName:"p"},"bot_token"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image5.png",src:n(42044).Z,width:"784",height:"222"})),(0,o.kt)("p",null,"Then, write the following logic to put values in the datastore (this requires a\nsuccessful exchange of code for token)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image20.png",src:n(39801).Z,width:"1072",height:"628"})),(0,o.kt)("p",null,"Our sample canvas showing this OAuth for Slack can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-slackoauth"},"here"),"."),(0,o.kt)("h3",{id:"step-two-building-application-functionality--working-with-slacks-payload"},"Step Two: Building Application Functionality & Working with Slack\u2019s Payload"),(0,o.kt)("p",null,"Now that you\u2019ve installed the app to your workspace, you can build app\nfunctionality. We\u2019re not going to go through everything you can do, but rather\ngive you an overview."),(0,o.kt)("h2",{id:"supporting-slack-commands"},"Supporting Slack Commands"),(0,o.kt)("p",null,"Slack\u2019s ",(0,o.kt)("strong",{parentName:"p"},"Basic Information")," page lets you create slash commands, event\nsubscriptions, and interactive components. All three of these options require a\nRequest URL, which is just a URL pointing to your Darklang app, in the same\nformat as before:"),(0,o.kt)("p",null,"[https://USERNAME-CANVASNAME.builtwithdark.com/ROUTE]"),(0,o.kt)("p",null,"Trigger one of these routes, and then use the 404 and trace to build out the\nfunctionality, in the same way you did with OAuth."),(0,o.kt)("p",null,"For instance, if you used the sample slash command, /test, you\u2019d get this result\nafter triggering it in Slack (and it would appear in your 404 section in\nDarklang)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image13.png",src:n(52442).Z,width:"1016",height:"424"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image14.png",src:n(99050).Z,width:"752",height:"240"})),(0,o.kt)("p",null,"When you create the endpoint from the 404 section, you\u2019ll be able to work with\nthe trace:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image16.png",src:n(60561).Z,width:"1470",height:"600"})),(0,o.kt)("h2",{id:"supporting-bots--event-subscriptions"},"Supporting Bots & Event Subscriptions"),(0,o.kt)("p",null,"You can set up a bot that listens for its name by adding\n",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/events/app_mention"},(0,o.kt)("inlineCode",{parentName:"a"},"app_mention"))," under Subscribe to bot\nevents in ",(0,o.kt)("strong",{parentName:"p"},"Features > Event Subscriptions"),"."),(0,o.kt)("p",null,"The command will be sent to the URL you specify and, like OAuth, the route will\nshow up in your 404s. Event subscriptions require that you respond with a\nchallenge parameter to validate the URL that handles that interactivity. This\nchallenge is only sent once, but you can wrap the challenge response in an\nif/else in the event that you need to validate this URL again:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image21.png",src:n(32343).Z,width:"888",height:"376"})),(0,o.kt)("h2",{id:"handling-incoming-data"},"Handling Incoming Data"),(0,o.kt)("p",null,"Once you\u2019ve set up your request URL or event subscription, you\u2019ll be able to\nreceive and work with incoming requests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image2.png",src:n(90585).Z,width:"1444",height:"1010"})),(0,o.kt)("p",null,"As before, use the trace to extract the values you\u2019ll need to post your\nresponse."),(0,o.kt)("p",null,"So far, we\u2019ve typically posted a message to Slack directly from an HTTP handler.\nHowever, it\u2019s better practice to do this using background workers when posting\nto external API endpoints. Workers respond to events asynchronously, and queue\nevents if they fail. You can use ",(0,o.kt)("strong",{parentName:"p"},"emit")," to trigger a worker, and when you hit\nplay, you\u2019ll see the worker appear in your 404s. Here is the full events\nhandler:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image1.png",src:n(61250).Z,width:"1238",height:"532"})),(0,o.kt)("p",null,"We\u2019ll use Slack\u2019s\n",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.postMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"postMessage"))," method to\nrespond to a direct mention with a message in Slack, and write the code to post\nthe response in our worker:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image3.png",src:n(5501).Z,width:"1426",height:"492"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image6.png",src:n(86997).Z,width:"1256",height:"698"})),(0,o.kt)("p",null,"If you want to support interactivity that involves working with buttons, menus,\nor fields within a modal, this may change the shape of Slack\u2019s payload into a\nstring with nested lists. There are several functions you can use that will help\nwith data wrangling in those cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JSON::parse")," - Parses a JSON string and returns its value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Lambda")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"\\"),") - for creating anonymous functions that are most helpful\nwhen iterating through lists"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"|>")," (or shift+enter) - to pipe into another expression"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"List::getAt")," - For when you know the index of the nested list that contains\nyour value.")),(0,o.kt)("p",null,"Here is an example of where most of these functions are used to extract the\nright values and to help draft a reply:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ck/image8.png",src:n(70934).Z,width:"920",height:"580"})))}d.isMDXComponent=!0},61250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fulleventshandler-ffced0924668635e5128518178048b09.png"},85318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image10-b56cc6e84b5ea417c3fb8ab12fdd1f33.png"},82979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image11-8e678e41c446762064db391994940b29.png"},3952:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image12-e7f693b4d99d9abb5099b06aef32ddf3.png"},52442:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image13-5e10b497161e7baa43b9bfb6b2732242.png"},99050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image14-5f05c90ac95e742a8c15352aec70825e.png"},60561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image16-2dfc9ff35bf0d0303e744035cb8cf4f5.png"},90507:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image17-91fe92b1d530fc31b4b6784bd131b749.png"},20045:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image18-003fff9b3031b9244340a5273ece601b.png"},5620:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image19-3d58682b6441d5ea63e573c964160050.png"},90585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image2-8070b1e5559c0ca9e72a1ae2c5f28dcf.png"},32343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image21-4dec8375d6b9b13231e14c05e5fdf7f3.png"},5501:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image3-0744fee30fd7873646e021dee017c643.png"},9251:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image4-8bca56102d91192c4b5dc2b14f1334cb.gif"},86997:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image6-0eac43a1e8e8a30e71dfb56e45a4ee99.png"},70934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image8-ee12dbc8ebe03c9d5870fbdcaf252290.png"},39801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oauth-redirect-607997aad0a3ee0ed78488b774379c70.png"},78664:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oauthv2-0b5c500cb25873ce77b4c2bd61234be3.png"},42044:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tokensdb-6eab3b4419699f34ee4ad2e6786f1f5a.png"}}]);