"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6439],{83650:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"walk-throughs/slack-asana","title":"Walk-through: Create Asana tasks and projects from Slack","description":"Connecting your Asana account with your Slack account can make for a powerful","source":"@site/docs-classic/walk-throughs/slack-asana.md","sourceDirName":"walk-throughs","slug":"/walk-throughs/slack-asana","permalink":"/walk-throughs/slack-asana","draft":false,"unlisted":false,"editUrl":"https://github.com/darklang/docs/edit/main/docs-classic/walk-throughs/slack-asana.md","tags":[],"version":"current","frontMatter":{"title":"Walk-through: Create Asana tasks and projects from Slack","sidebar_label":"Asana: create tasks and projects from Slack"},"sidebar":"docs","previous":{"title":"Slack: check for new channels","permalink":"/walk-throughs/slack-channel-check"},"next":{"title":"Trello: Create a new card from Slack","permalink":"/walk-throughs/slack-trello"}}');var t=s(74848),i=s(28453);const r={title:"Walk-through: Create Asana tasks and projects from Slack",sidebar_label:"Asana: create tasks and projects from Slack"},o=void 0,c={},l=[{value:"Asana Configuration",id:"asana-configuration",level:2},{value:"Slack Configuration",id:"slack-configuration",level:2},{value:"Building In Darklang",id:"building-in-darklang",level:2},{value:"Looking Up Project &amp; Workspace IDs",id:"looking-up-project--workspace-ids",level:3},{value:"Making input easier with modals",id:"making-input-easier-with-modals",level:3}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Connecting your Asana account with your Slack account can make for a powerful\ntool - no more switching tabs and hunting for the right Asana project when you\nwant to capture the excellent idea that just came up. In this tutorial, we'll\nshow you a few ways to enable your team to create new Asana tasks directly from\nSlack."}),"\n",(0,t.jsx)(a.h2,{id:"asana-configuration",children:"Asana Configuration"}),"\n",(0,t.jsx)(a.p,{children:"For this tutorial, you'll want to grab a couple different things from Asana and\nstore each of them as separate functions in Darklang:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Your ",(0,t.jsx)(a.a,{href:"https://app.asana.com/0/developer-console",children:"personal access token"})]}),"\n",(0,t.jsx)(a.li,{children:"The id of one of your workspaces. The easiest way to access this is via the\nadmin panel - it will be the long number in the URL."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"slack-configuration",children:"Slack Configuration"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://api.slack.com/apps",children:"Create a new app in Slack."})}),"\n",(0,t.jsxs)(a.li,{children:["Set a Slash command (the option should appear under ",(0,t.jsx)(a.strong,{children:"Add features &\nfunctionality"})," on your app's main page). Your Request URL should look\nsomething like\n",(0,t.jsx)(a.code,{children:"https://yourusername-yourcanvasname.builtwithdark.com/new-project"}),". This is\nthe URL that Slack will call when you use your slash command - don't add\nanything to your Darklang canvas just yet."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/slashcommand.png",src:s(93583).A+"",width:"1124",height:"836"})}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsxs)(a.li,{children:["Go to ",(0,t.jsx)(a.strong,{children:"Features -> OAuth & Permissions"})," and add the following scopes to\nyour app: ",(0,t.jsx)(a.code,{children:"chat:write"}),", ",(0,t.jsx)(a.code,{children:"chat:write.public"}),", ",(0,t.jsx)(a.code,{children:"commands."})]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/permissions.png",src:s(15197).A+"",width:"1346",height:"790"})}),"\n",(0,t.jsxs)(a.ol,{start:"4",children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Install your app to the workspace (either via\xa0",(0,t.jsx)(a.strong,{children:"Settings -> Basic\nInformation"}),"\xa0or\xa0",(0,t.jsx)(a.strong,{children:"Settings -> Install App"}),"). Since this app is being built\nfor your workspace specifically, we will not need to set up full OAuth, like\nwe would if we wanted to distribute this more publicly."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Copy your bot user access token, which will now be available under\xa0",(0,t.jsx)(a.strong,{children:"Settings\n-> Install"}),"\xa0app and save it as a function in your Darklang canvas. Use this\nfunction wherever you see\xa0",(0,t.jsx)(a.code,{children:"slackToken"}),"\xa0in the code examples."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"building-in-darklang",children:"Building In Darklang"}),"\n",(0,t.jsx)(a.p,{children:"First, we're going to learn how to create new Asana projects using slash\ncommands."}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Go to Slack and try to use your new slash command. Make sure to include some\ntext after entering your command. You will see an error message appear."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/newprojecterror.png",src:s(72036).A+"",width:"906",height:"146"})}),"\n",(0,t.jsxs)(a.ol,{start:"2",children:["\n",(0,t.jsxs)(a.li,{children:["Navigate to your Darklang canvas and check the 404s section in the sidebar -\nyou should see an HTTP POST created called ",(0,t.jsx)(a.code,{children:"/new-project"})," (or whatever you\nused when setting up your slash command). Click the plus sign to add it to\nyour canvas."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/newproject404.png",src:s(56818).A+"",width:"628",height:"124"})}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsx)(a.li,{children:"Once your handler is on your canvas, you can click on the trace (the white\ndot to the left) to see the incoming data Slack attempted to send."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/trace.png",src:s(24566).A+"",width:"768",height:"136"})}),"\n",(0,t.jsxs)(a.ol,{start:"4",children:["\n",(0,t.jsxs)(a.li,{children:["You will see a text field in the body of the trace data. Use\n",(0,t.jsx)(a.code,{children:"request.body.text"})," to set your project name."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/projectname.png",src:s(3547).A+"",width:"1694",height:"134"})}),"\n",(0,t.jsxs)(a.ol,{start:"5",children:["\n",(0,t.jsxs)(a.li,{children:["Using the\n",(0,t.jsx)(a.a,{href:"/reference/packages#createproject",children:(0,t.jsx)(a.code,{children:"Asana::createProject function"})})," and\nthe data we grabbed from the trace, we can now create a new project. You will\nneed to use the workspace id and personal access token you saved in the\nset-up process."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/createProject.png",src:s(12206).A+"",width:"1690",height:"166"})}),"\n",(0,t.jsxs)(a.ol,{start:"6",children:["\n",(0,t.jsx)(a.li,{children:"Try your Slash command again and then check Asana - your new project will be\nthere!"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/asanaproject.png",src:s(18836).A+"",width:"1096",height:"152"})}),"\n",(0,t.jsxs)(a.ol,{start:"7",children:["\n",(0,t.jsxs)(a.li,{children:["Now, let's try sending over a slash command with different data. Return to\nSlack and use your slash command again, but this time, write a project name,\n",(0,t.jsx)(a.code,{children:"\\"})," sign and a description and send it over (something like\n",(0,t.jsx)(a.code,{children:"\\asana-new-project Another New Project/Notes on the project"}),"). Return to\nDarklang and check the traces - you should see a text field formatted like\nthis:"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/textexample.png",src:s(84436).A+"",width:"640",height:"72"})}),"\n",(0,t.jsxs)(a.ol,{start:"8",children:["\n",(0,t.jsxs)(a.li,{children:["Now, we can use the ",(0,t.jsx)(a.code,{children:"String::split"})," function to separate out our two pieces\nof information, and add them separately to the\n",(0,t.jsx)(a.a,{href:"/reference/packages#createProject",children:(0,t.jsx)(a.code,{children:"Asana::createProject function"})}),"\nfunction."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/notes.png",src:s(36462).A+"",width:"1344",height:"248"})}),"\n",(0,t.jsx)(a.h3,{id:"looking-up-project--workspace-ids",children:"Looking Up Project & Workspace IDs"}),"\n",(0,t.jsxs)(a.p,{children:["You're not always going to want to pre-define your workspace or projects via\nDarklang functions. This section will show you how to take a project name as a\n",(0,t.jsx)(a.code,{children:"String"})," and get the corresponding id. We'll be using projects for this example,\nbut it works the same way for workspaces."]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Create a Projects datastore."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/projectsdatastore.png",src:s(92504).A+"",width:"768",height:"284"})}),"\n",(0,t.jsxs)(a.ol,{start:"2",children:["\n",(0,t.jsxs)(a.li,{children:["Create a new REPL. First, use the\n",(0,t.jsx)(a.a,{href:"/reference/packages#getAllProjects",children:(0,t.jsx)(a.code,{children:"Asana::getAllProjects"})})," function to\ngrab information about all projects you have access to. Then, use a\n",(0,t.jsx)(a.code,{children:"List::map"})," to add their names and gids to the DB."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/populatedb.png",src:s(92093).A+"",width:"986",height:"400"})}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"To see this in action, create a fresh slash command and call it, using the\ntask name/project name formatting. To make it easier on yourself, make sure\nto use a project name that already exists."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Split out the information as you did before."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/taskandproject.png",src:s(97780).A+"",width:"864",height:"246"})}),"\n",(0,t.jsxs)(a.ol,{start:"5",children:["\n",(0,t.jsxs)(a.li,{children:["Create a new function called ",(0,t.jsx)(a.code,{children:"lookUpProjectID"})," and then use ",(0,t.jsx)(a.code,{children:"DB::queryOne"})," to\ngrab the id based on the ",(0,t.jsx)(a.code,{children:"projectName"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/lookupprojectid.png",src:s(93759).A+"",width:"1436",height:"360"})}),"\n",(0,t.jsxs)(a.ol,{start:"6",children:["\n",(0,t.jsx)(a.li,{children:"Use a match statement to handle both the success and failure (couldn't find\nthe project name in the db) case."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/match.png",src:s(74186).A+"",width:"1356",height:"418"})}),"\n",(0,t.jsxs)(a.ol,{start:"7",children:["\n",(0,t.jsx)(a.li,{children:"Use your new function your HTTP POST handler."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/lookupid.png",src:s(95944).A+"",width:"860",height:"288"})}),"\n",(0,t.jsxs)(a.ol,{start:"8",children:["\n",(0,t.jsx)(a.li,{children:"Call the slash command again and check Asana - a new task should be there."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/newesttask.png",src:s(74568).A+"",width:"1154",height:"402"})}),"\n",(0,t.jsx)(a.h3,{id:"making-input-easier-with-modals",children:"Making input easier with modals"}),"\n",(0,t.jsx)(a.p,{children:"Okay, this is all great, but still has some problems. What if someone forgets to\nadd the right special character? Let's make it a little easier, by creating a\nmodal to handle their input."}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Create a new slash command."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/newmodal.png",src:s(49148).A+"",width:"1160",height:"840"})}),"\n",(0,t.jsxs)(a.ol,{start:"2",children:["\n",(0,t.jsxs)(a.li,{children:["Turn Interactivity on via ",(0,t.jsx)(a.strong,{children:"Features -> Interactivity and Shortcuts"})," and\nspecify a URL for the interaction to be sent to:"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/interactivity.png",src:s(13684).A+"",width:"1344",height:"568"})}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Slack uses ",(0,t.jsx)(a.code,{children:"JSON"})," to generate modals via a framework called Block Kit, even\nproviding a\n",(0,t.jsx)(a.a,{href:"https://api.slack.com/tools/block-kit-builder",children:"handy Block Kit builder"}),". At\nthis point, it may make sense to pause and create your modal - we'll need the\n",(0,t.jsx)(a.code,{children:"JSON"})," soon. The modal we're going to use has 3 fields: a single line for the\ntask name, a multiline for the task description and a select for a list of\nprojects."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Call your new slash command and grab the 404, as you did in previous steps."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Start by setting your ",(0,t.jsx)(a.code,{children:"triggerId"})," using ",(0,t.jsx)(a.code,{children:"request.body.trigger_id"}),":"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/triggerid.png",src:s(11294).A+"",width:"748",height:"154"})}),"\n",(0,t.jsxs)(a.ol,{start:"6",children:["\n",(0,t.jsx)(a.li,{children:"Format your header - you will need the Slack token you grabbed earlier in the\nset-up process."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/header.png",src:s(46706).A+"",width:"1468",height:"200"})}),"\n",(0,t.jsxs)(a.ol,{start:"7",children:["\n",(0,t.jsxs)(a.li,{children:["Create an ",(0,t.jsx)(a.code,{children:"HttpClient::post"})," request and add your ",(0,t.jsx)(a.code,{children:"triggerID"})," and ",(0,t.jsx)(a.code,{children:"JSON"}),".\nThese are truncated screenshots with a lot of the JSON cut out:"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/json1.png",src:s(68094).A+"",width:"1726",height:"1062"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/json2.png",src:s(53845).A+"",width:"1730",height:"524"})}),"\n",(0,t.jsxs)(a.ol,{start:"8",children:["\n",(0,t.jsx)(a.li,{children:"Try your new Slash command. A modal should appear. Fill in the modal and hit\nsubmit to get a new error message:"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/asanaerror.png",src:s(63785).A+"",width:"1010",height:"1088"})}),"\n",(0,t.jsxs)(a.ol,{start:"8",children:["\n",(0,t.jsxs)(a.li,{children:["Check your 404s and add your new handler. This is the handler where the\nbehind-the-scenes logic will happen. Start by formatting the payload into\n",(0,t.jsx)(a.code,{children:"JSON"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/payload.png",src:s(72771).A+"",width:"876",height:"158"})}),"\n",(0,t.jsxs)(a.ol,{start:"9",children:["\n",(0,t.jsx)(a.li,{children:"Now grab all of your important values from your modal fields:"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/payloaddata.png",src:s(39451).A+"",width:"1678",height:"198"})}),"\n",(0,t.jsxs)(a.ol,{start:"10",children:["\n",(0,t.jsxs)(a.li,{children:["Use the ",(0,t.jsx)(a.a,{href:"/reference/packages#createTask",children:(0,t.jsx)(a.code,{children:"Asana::createTask"})})," and the\n",(0,t.jsx)(a.code,{children:"lookUpProjectID"})," functions to create your new task."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/createtask.png",src:s(43978).A+"",width:"1672",height:"228"})}),"\n",(0,t.jsxs)(a.ol,{start:"11",children:["\n",(0,t.jsxs)(a.li,{children:["Respond with a ",(0,t.jsx)(a.code,{children:"200"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/200.png",src:s(14675).A+"",width:"1684",height:"394"})}),"\n",(0,t.jsxs)(a.ol,{start:"12",children:["\n",(0,t.jsx)(a.li,{children:"Check Asana - your new task should be visible in the project your specified\nproject."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"slack-apps/tutorials/asana-tutorial/mytask.png",src:s(25424).A+"",width:"1124",height:"398"})}),"\n",(0,t.jsx)(a.p,{children:"Congratulations, you now have a Slack app that can create Asana projects and\ntasks in multiple ways!"})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},14675:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/200-c2e21851ec04e192c60b35e080fb355d.png"},63785:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/asanaerror-d2e5ba6ffa35907b4288b415c725da01.png"},18836:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/asanaproject-3d8880808761c9f3efa7ae02935b0a5c.png"},12206:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/createProject-ed7a0f10184bb9b39db9c6ada0a904c2.png"},43978:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/createtask-db0996b173954b3b87a4fb6feab7dc22.png"},46706:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/header-6ec1f3aef556e6e1997f158af7331975.png"},13684:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/interactivity-d4683a157498e2c98da915987ace63db.png"},68094:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/json1-c8bf5be987ea2c16038b48801ef870b0.png"},53845:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/json2-f22891d6d774d38877f3922ef1cfe4c8.png"},95944:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/lookupid-2e4b4fa07ead0a74755c07d268f39bd9.png"},93759:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/lookupprojectid-5dbc9bb458e81907e63ffb098dfba058.png"},74186:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/match-71f91127a161c7389cc8d6e8afd78b04.png"},25424:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/mytask-5352023a9f5811c843a812bb67830273.png"},74568:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/newesttask-c1f3188f719dc1071af5634842df2628.png"},49148:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/newmodal-336ee086bb89d306f94d2b87ac162c7c.png"},56818:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/newproject404-0654fe92ff262295b06f965b02859f2e.png"},72036:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/newprojecterror-8bc0b6086f68020dc22ca086faefefe0.png"},36462:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/notes-1ee65c91c6d65f3ed58b8440cad482bd.png"},72771:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/payload-58a0bd684bc1ee1f5912000d9ed3d815.png"},39451:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/payloaddata-eb6e41c26e0f8c131102be1399117df2.png"},15197:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/permissions-a2cf90c9411ff1a6f9e33e31c22e1985.png"},92093:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/populatedb-4c32fc0d6789847571a5f82b69b330e0.png"},3547:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/projectname-d887561e1e2527c3ad2181af97d8b2ac.png"},92504:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/projectsdatastore-d38adf697b223b5469f8ec4a550b2168.png"},93583:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/slashcommand-73a882da5959ddcf178423028b81abff.png"},97780:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/taskandproject-b2210ba9a279b40c19160f511cfea7ab.png"},84436:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/textexample-5dc93cf10c278036f06ce6968993638a.png"},24566:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/trace-7ae182da0cb1a28c00f13e7b5685ca0c.png"},11294:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/triggerid-0d8e94dd955cbb88b4aaa3aa3245b1ff.png"},28453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>o});var n=s(96540);const t={},i=n.createContext(t);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);