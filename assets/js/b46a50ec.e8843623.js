"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7293],{53483:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"walk-throughs/slack-channel-check","title":"Walk-through: Check for New Slack Channels","description":"It can be hard to keep up with all of the changes in your Slack workspace! This","source":"@site/docs-classic/walk-throughs/slack-channel-check.md","sourceDirName":"walk-throughs","slug":"/walk-throughs/slack-channel-check","permalink":"/walk-throughs/slack-channel-check","draft":false,"unlisted":false,"editUrl":"https://github.com/darklang/docs/edit/main/docs-classic/walk-throughs/slack-channel-check.md","tags":[],"version":"current","frontMatter":{"title":"Walk-through: Check for New Slack Channels","sidebar_label":"Slack: check for new channels"},"sidebar":"docs","previous":{"title":"Using an External DB","permalink":"/walk-throughs/external-db"},"next":{"title":"Asana: create tasks and projects from Slack","permalink":"/walk-throughs/slack-asana"}}');var t=s(74848),l=s(28453);const c={title:"Walk-through: Check for New Slack Channels",sidebar_label:"Slack: check for new channels"},o=void 0,i={},r=[{value:"Slack Configuration",id:"slack-configuration",level:2},{value:"Building in Darklang",id:"building-in-darklang",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"It can be hard to keep up with all of the changes in your Slack workspace! This\ntutorial will walk you through how to build a simple tool in Darklang that posts\nall new, public Slack channels created in your Slack workspace in the past 24\nhours."}),"\n",(0,t.jsxs)(n.p,{children:["A full sample canvas for this tutorial is available\n",(0,t.jsx)(n.a,{href:"https://darklang.com/a/sample-slackchannelcheck",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"slack-configuration",children:"Slack Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://api.slack.com/apps",children:"Create a new app in Slack"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Features -> OAuth& Permissions"}),", scroll down to scopes and add\nthe following bot token scopes: ",(0,t.jsx)(n.code,{children:"channels:manage"}),", ",(0,t.jsx)(n.code,{children:"channels:read"}),",\n",(0,t.jsx)(n.code,{children:"chat:write"}),", and ",(0,t.jsx)(n.code,{children:"chat:write.public"}),". This will allow our app to interact\nwith our the channels (also known as conversations) and post messages about\nthem."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/bottokenscopes.png",src:s(13566).A+"",width:"1318",height:"1078"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Install your app to the workspace (either via ",(0,t.jsx)(n.strong,{children:"Settings -> Basic\nInformation"})," or ",(0,t.jsx)(n.strong,{children:"Settings -> Install App"}),"). Since this app is being built\nfor your workspace specifically, we will not need to set up full OAuth, like\nwe would if we wanted to distribute this more publicly."]}),"\n",(0,t.jsxs)(n.li,{children:["Copy your bot user access token, which will now be available under ",(0,t.jsx)(n.strong,{children:"Settings\n-> Install"})," app and save it as a function in your Darklang canvas. Use this\nfunction wherever you see ",(0,t.jsx)(n.code,{children:"token"})," in the code examples."]}),"\n",(0,t.jsx)(n.li,{children:"If no new channels have been created in your Slack recently, create a new\npublic channel so we have some data to work with."}),"\n",(0,t.jsxs)(n.li,{children:["You will need to choose a Slack channel to post your messages to. You can\nfind your Slack channel's id by navigating to the channel and looking for the\n11 character string that begins with a capital C - it will look something\nlike ",(0,t.jsx)(n.code,{children:"C1234567891"}),". Add that to its own Darklang function as well, and use it\nwherever you see ",(0,t.jsx)(n.code,{children:"channel"})," in the code examples."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"building-in-darklang",children:"Building in Darklang"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new daily Cron named ",(0,t.jsx)(n.code,{children:"checkForNewChannels"})," by clicking the + in the\nsidebar next to Cron, and call the\n",(0,t.jsxs)(n.a,{href:"/reference/packages#getnewconversations",children:[(0,t.jsx)(n.code,{children:"getNewConversations"})," Slack function"]}),"\n(it's a little confusing, but channels are referred to as conversations in\nthe Slack API). The ",(0,t.jsx)(n.code,{children:"getNewConversations"})," function is built into Darklang's\n",(0,t.jsx)(n.a,{href:"/reference/packages",children:"package manager"}),", and it takes your token as well as an\namount of time to check in Epoch seconds. Here, we're asking it to check in\nthe past 24 hours, which is equivalent to 86400 seconds."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/checkfornewchannels.png",src:s(76766).A+"",width:"1114",height:"156"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Click the play button on the\n",(0,t.jsxs)(n.a,{href:"/reference/packages#getnewconversations",children:[(0,t.jsx)(n.code,{children:"getNewConversations"})," function"]})," and\nthen place your carat in ",(0,t.jsx)(n.code,{children:"newChannels"}),". You will see a list of information\nabout any new channels that have been created."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/checkfornewchannelslive.png",src:s(10964).A+"",width:"1950",height:"510"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Create a function called ",(0,t.jsx)(n.code,{children:"formatChannelList"})," with a ",(0,t.jsx)(n.code,{children:"channelList"})," parameter.\nThis is where we're going to build the format of the messages Slack will\nprint about your new channels, but for now, just return ",(0,t.jsx)(n.code,{children:"channelList"}),". You'll\nnotice that an error is shown - this is because ",(0,t.jsx)(n.code,{children:"channelList"})," has not yet\nbeen set."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/firstformatchannel.png",src:s(69359).A+"",width:"746",height:"340"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Return to your ",(0,t.jsx)(n.code,{children:"checkForNewChannels"})," Cron, and add a line to format the\n",(0,t.jsx)(n.code,{children:"newChannels"})," list you previously generated. Press the play button."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/checkfornewchannelslist.png",src:s(26902).A+"",width:"1120",height:"188"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Return to your ",(0,t.jsx)(n.code,{children:"formatChannelList"})," function and place your carat over the top\ndot (trace) on the left. You will see your ",(0,t.jsx)(n.code,{children:"channelList"})," trace - now you can\nwork with that data in order to format your list."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/formatchannellist.png",src:s(34313).A+"",width:"1204",height:"276"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["For our purposes, we're going to do a very simple amount of formatting -\nwe're going to add the markdown Slack needs to make channel names links, and\nadd information about the channel's purpose. However, lots of information\nabout Slack channels is available. Type ",(0,t.jsx)(n.code,{children:"val."})," and scroll through the\nautocomplete to see all of your options."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/formatchanellistlong.png",src:s(86731).A+"",width:"1024",height:"632"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In your ",(0,t.jsx)(n.code,{children:"checkForNewChannels"})," Cron, rerun ",(0,t.jsx)(n.code,{children:"formatChannelList"})," to update the\nvalue of ",(0,t.jsx)(n.code,{children:"formattedList"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a check for the length of the list - we're going to print out something\ndifferent if there have been no new channels."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/listlength.png",src:s(86559).A+"",width:"1110",height:"216"})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsxs)(n.li,{children:["The full code is going to look like this - if there are entries in the list,\nwe'll post an announcement message and then the list of new channels. You'll\nnotice that we also use the\n",(0,t.jsxs)(n.a,{href:"/reference/packages#postmarkdownmessage",children:[(0,t.jsx)(n.code,{children:"postMarkDownMessage"})," Slack function"]}),"\nto simplify the posting of the message."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/fullcheckfornewchannels.png",src:s(84879).A+"",width:"1866",height:"444"})}),"\n",(0,t.jsxs)(n.ol,{start:"10",children:["\n",(0,t.jsx)(n.li,{children:"To make our code a little bit cleaner, we've pulled the logic of posting the\nlist of new channels out into a function. This function iterates through the\nlist it is given and posts a markdown message to Slack for each entry."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/postlist.png",src:s(22049).A+"",width:"1152",height:"424"})}),"\n",(0,t.jsxs)(n.ol,{start:"11",children:["\n",(0,t.jsx)(n.li,{children:"Once you've completed all of your code, run the Cron again. A message will\nappear in the channel you selected."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"slack-apps/tutorials/channelcheck/newchannelpost.png",src:s(43146).A+"",width:"1926",height:"196"})}),"\n",(0,t.jsx)(n.p,{children:"Congratulations - you now have a Slack app that will post every 24 hours with\nany new channels created since it last posted."})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},13566:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/bottokenscopes-820944f97bebf411312b68773873a3ef.png"},76766:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/checkfornewchannels-9b7c4680fc415baeb1ced35d23835f19.png"},26902:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/checkfornewchannelslist-b13aa08e69cac3f0a7f6e24eda142415.png"},10964:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/checkfornewchannelslive-38b563faeb4b96ae7a39d62d15f4b265.png"},69359:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/firstformatchannel-40989a65e71ac0fb01f8cf5ea3149be1.png"},34313:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/formatchannellist-722aac833e2f8fa532d47cdaa38e175b.png"},86731:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/formatchannellistlong-4c39c2a5963f93c916aa5c35bcac9511.png"},84879:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/fullcheckfornewchannels-9ed508c7641a6276213e638b927f584c.png"},86559:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/listlength-f414fe87dbf3e6be972434e4a6d772fe.png"},43146:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/newchannelpost-fa43d6265fbb5344be5d6ccb58a49926.png"},22049:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/postlist-536b7664f9adb1eae65605e80142a73a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var a=s(96540);const t={},l=a.createContext(t);function c(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);