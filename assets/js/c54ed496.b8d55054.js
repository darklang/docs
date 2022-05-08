"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9097],{3905:(e,t,a)=>{a.d(t,{kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,k=u["".concat(l,".").concat(p)]||u[p]||c[p]||i;return a?r.createElement(k,s(s({ref:t},h),{},{components:a})):r.createElement(k,s({ref:t},h))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=["components"],o={title:"Walk-through: Fetch and update tickets on Freshdesk",sidebar_label:"Freshdesk: Fetch and update tickets"},l=void 0,d={unversionedId:"walk-throughs/freshdesk",id:"walk-throughs/freshdesk",title:"Walk-through: Fetch and update tickets on Freshdesk",description:"This guide will walk you through how you can use Freshdesk\u2019s API to access",source:"@site/docs/walk-throughs/freshdesk.md",sourceDirName:"walk-throughs",slug:"/walk-throughs/freshdesk",permalink:"/walk-throughs/freshdesk",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/walk-throughs/freshdesk.md",tags:[],version:"current",frontMatter:{title:"Walk-through: Fetch and update tickets on Freshdesk",sidebar_label:"Freshdesk: Fetch and update tickets"},sidebar:"docs",previous:{title:"Airtable: fetch and update",permalink:"/walk-throughs/airtable"},next:{title:"How-to Guides",permalink:"/category/how-to"}},c={},h=[{value:"What You Need",id:"what-you-need",level:2},{value:"Authenticating with Freshdesk",id:"authenticating-with-freshdesk",level:2},{value:"Getting All of Your Tickets",id:"getting-all-of-your-tickets",level:2},{value:"Filtering Your Tickets",id:"filtering-your-tickets",level:2},{value:"Adding Ticket Information to a Datastore in Dark",id:"adding-ticket-information-to-a-datastore-in-dark",level:2},{value:"Updating Ticket Information With Dark",id:"updating-ticket-information-with-dark",level:2}],u={toc:h};function p(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will walk you through how you can use Freshdesk\u2019s API to access\nticket information in Dark. You can find a sample canvas\n",(0,i.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-freshdesk"},"here"),"."),(0,i.kt)("h2",{id:"what-you-need"},"What You Need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Freshdesk account"),(0,i.kt)("li",{parentName:"ul"},"Access to the ",(0,i.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/"},"Freshdesk API documentation")),(0,i.kt)("li",{parentName:"ul"},"Access to your Freshdesk API key or username and password.")),(0,i.kt)("h2",{id:"authenticating-with-freshdesk"},"Authenticating with Freshdesk"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image2.png",src:a(14140).Z,width:"938",height:"230"})),(0,i.kt)("p",null,"Freshdesk uses basic authentication - in this example, we\u2019ve chosen to use our\nAPI key and insert random text for the password, but you can replace those with\nyour username and password when using ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient::basicAuth"),"."),(0,i.kt)("h2",{id:"getting-all-of-your-tickets"},"Getting All of Your Tickets"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image4.png",src:a(63931).Z,width:"936",height:"308"})),(0,i.kt)("p",null,"Freshdesk makes it pretty easy to return a simple list of all of your tickets.\nHowever, you may find that the information in this list is not quite what you\nare looking for - if you want details about a set of tickets, check the Adding\nTicket Information to a Datastore section."),(0,i.kt)("h2",{id:"filtering-your-tickets"},"Filtering Your Tickets"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image5.png",src:a(65081).Z,width:"936",height:"374"})),(0,i.kt)("p",null,"Freshdesk also makes it pretty easy to get a filtered list of your tickets -\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.freshdesk.com/api/#filter_tickets"},"check their documentation"),"\nfor the query options. In this example, we are returning a list of all tickets\nwith a status of 3, which means Pending."),(0,i.kt)("h2",{id:"adding-ticket-information-to-a-datastore-in-dark"},"Adding Ticket Information to a Datastore in Dark"),(0,i.kt)("p",null,"In the following example, we are going to add a set of information from all of\nour tickets into a Dark datastore."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image3.png",src:a(42612).Z,width:"770",height:"300"})),(0,i.kt)("p",null,"Create a datastore to keep track of all of your ids. Because our primary use for\nthis datastore is to append the ids to our request URL, it\u2019s helpful to store\n",(0,i.kt)("inlineCode",{parentName:"p"},"ticket_id")," as a string - you can also cast them to strings later if you\u2019d\nprefer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image8.png",src:a(7912).Z,width:"994",height:"566"})),(0,i.kt)("p",null,"Create a worker to populate that table with all of your ticket ids."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image6.png",src:a(35868).Z,width:"758",height:"488"})),(0,i.kt)("p",null,"Create a datastore that contains all of the fields you want to save from your\ntickets--you can see all of your options in\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.freshdesk.com/api/#view_a_ticket"},"Freshdesk\u2019s API documentation"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image9.png",src:a(97367).Z,width:"1214",height:"892"})),(0,i.kt)("p",null,"Create a function to add the information about your tickets to your new\ndatastore. Note that, because we want information about the requester, we need\nto add the include parameter to our URL. For more information about this URL\nparameter, refer to the\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.freshdesk.com/api/#view_a_ticket"},"View a Ticket")," section of\nthe Freshdesk API."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/mage1.png",src:a(60849).Z,width:"820",height:"278"})),(0,i.kt)("p",null,"Create a worker that performs a ",(0,i.kt)("inlineCode",{parentName:"p"},"List::map")," on your list of ticket ids, and uses\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"addTicketstoDB")," function to populate your datastore."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image7.png",src:a(34849).Z,width:"1356",height:"710"})),(0,i.kt)("p",null,"Once your run your worker, your datastore will be updated!"),(0,i.kt)("h2",{id:"updating-ticket-information-with-dark"},"Updating Ticket Information With Dark"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"freshdesk/image10.png",src:a(13372).Z,width:"940",height:"600"})),(0,i.kt)("p",null,"Updating ticket information using Dark can be fairly straightforward - the above\nexample shows us updating the priority of the ticket with id 1 to 4, which means\nUrgent Priority. For a full list of what can and can\u2019t be updated, refer to the\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.freshdesk.com/api/#update_ticket"},"Freshdesk API Documentation"),"."))}p.isMDXComponent=!0},60849:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image1-90fa5949030dad053a11256ee958eeb3.png"},13372:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image10-45277614d0049ee82cc83e1a554a604f.png"},14140:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image2-ddc3d5eaf77d17017f6cd23cd8ec80be.png"},42612:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image3-53af8956b5704ec443974d335b5bd187.png"},63931:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image4-9367c0f4430f65c7e73751be90095658.png"},65081:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image5-9a9155380fbdf841350fcccd2642eb47.png"},35868:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image6-7d616b314e006efe73272708a04715fc.png"},34849:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image7-792a5663ad4fe9a257433f63caf38ca1.png"},7912:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image8-76fa4ecae5608143ffcf01525fb6ede8.png"},97367:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image9-ae131f47c27bd314b02940b309de01c7.png"}}]);