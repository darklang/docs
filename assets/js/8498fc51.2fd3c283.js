"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2095],{65636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(85893),a=n(11151);const i={title:"Tutorial: Save data to a Datastore",sidebar_label:"Save data to a Datastore",id:"save-data-to-datastore"},r=void 0,o={id:"tutorials/save-data-to-datastore",title:"Tutorial: Save data to a Datastore",description:"In the last section, we made a HTTP request that created a 404. We'll use _the",source:"@site/docs-classic/tutorials/04-save-data-to-datastore.md",sourceDirName:"tutorials",slug:"/tutorials/save-data-to-datastore",permalink:"/tutorials/save-data-to-datastore",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/tutorials/04-save-data-to-datastore.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Tutorial: Save data to a Datastore",sidebar_label:"Save data to a Datastore",id:"save-data-to-datastore"},sidebar:"docs",previous:{title:"Create a tool in a REPL",permalink:"/tutorials/create-tool-repl"},next:{title:"Create a daily job with a Cron handler",permalink:"/tutorials/create-daily-job-cron-handler"}},d={},c=[];function h(e){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["In the last section, we made a HTTP request that created a 404. We'll use ",(0,s.jsx)(t.em,{children:"the\ntrace"})," of that HTTP request to build an endpoint, a technique we call ",(0,s.jsx)(t.strong,{children:"Trace\nDriven Development"}),"."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Go to the 404 section of the sidebar and you should see the HTTP request that\nyou just made with your REPL."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Hit the plus (+) button next to the 404. This creates a HTTP endpoint with\nthe HTTP method (",(0,s.jsx)(t.code,{children:"POST"}),") and path (",(0,s.jsx)(t.code,{children:"/test"}),") set from the request that creates\nthe 404."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_10.44.54_AM.png",src:n(42034).Z+"",width:"1890",height:"782"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Hover over the white dot on the left hand side. Here, you can see the full\nbody of the incoming trace from when you posted to the endpoint from the\nREPL, including the body."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_10.45.57_AM.png",src:n(19204).Z+"",width:"1494",height:"1204"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Let's save the ",(0,s.jsx)(t.code,{children:"request"})," body to a variable by typing\n",(0,s.jsx)(t.code,{children:"let data = request.body"}),". The autocomplete knows the field names of\n",(0,s.jsx)(t.code,{children:"request"})," from the trace, and will complete them for you."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_10.47.10_AM.png",src:n(64234).Z+"",width:"1040",height:"240"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:'Let\'s put this in a datastore. Type "DB" to bring up a list of Darklang\ndatastore functions.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_10.48.24_AM.png",src:n(91266).Z+"",width:"1414",height:"530"})}),"\n",(0,s.jsxs)(t.p,{children:["In this case, we want ",(0,s.jsx)(t.code,{children:"DB::set"}),", which takes three arguments."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_10.48.51_AM.png",src:n(58342).Z+"",width:"1060",height:"256"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Now let's make our datastore. Press ",(0,s.jsx)(t.code,{children:"Ctrl-k"}),"/",(0,s.jsx)(t.code,{children:"Cmd-k"}),' to bring up the omnibox,\nand create a new datastore called "Requests", with fields ',(0,s.jsx)(t.code,{children:"data"})," and ",(0,s.jsx)(t.code,{children:"time"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/datastore.png",src:n(16582).Z+"",width:"774",height:"278"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Now that we have a datastore, let's finish our post endpoint."}),"\n",(0,s.jsxs)(t.p,{children:["The first argument is the record we're inserting. This needs to match the\nschema, and so it needs to include both ",(0,s.jsx)(t.code,{children:"date"})," and ",(0,s.jsx)(t.code,{children:"time"})," (you cannot insert\nrecords that are missing fields). Insert our data from above (seeing the live\nvalue to the left) and use the ",(0,s.jsx)(t.code,{children:"Date::now"})," function to get the ",(0,s.jsx)(t.code,{children:"time"})," field."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_10.57.58_AM.png",src:n(55593).Z+"",width:"1058",height:"438"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsxs)(t.li,{children:["We need a unique key for each record that we store. The ",(0,s.jsx)(t.code,{children:"DB::generateKey"}),"\nfunction generates random keys \u2013 this is useful when your record has no\nobvious unique identifier."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_10.59.24_AM.png",src:n(71059).Z+"",width:"842",height:"484"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsxs)(t.li,{children:["The final argument is the Datastore: ",(0,s.jsx)(t.code,{children:"Requests"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_11.00.04_AM.png",src:n(95903).Z+"",width:"1096",height:"710"})}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsxs)(t.li,{children:["To call the ",(0,s.jsx)(t.code,{children:"DB::set"})," function, we first need to run the two functions with\nside effects (",(0,s.jsx)(t.code,{children:"DB::generateKey"})," and ",(0,s.jsx)(t.code,{children:"Date::now"}),") by hitting the play button.\nAfter hitting those two play buttons, the ",(0,s.jsx)(t.code,{children:"DB::set"})," play button will be\nenabled:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_11.00.55_AM.png",src:n(17138).Z+"",width:"834",height:"434"})}),"\n",(0,s.jsxs)(t.ol,{start:"10",children:["\n",(0,s.jsxs)(t.li,{children:["Finally, hitting the play button for ",(0,s.jsx)(t.code,{children:"DB::set"})," inserts the record into the\ndatastore. This locks the datastore, preventing us from changing the schema,\nwhich we see indicated by the red lock (\ud83d\udd12) icon."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_11.01.32_AM.png",src:n(97186).Z+"",width:"936",height:"730"})}),"\n",(0,s.jsx)(t.p,{children:"Congratulations! You've created a Darklang Datastore and stored data inside it."})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},42034:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.44.54_AM-c35473b6dfa9e5e984e6c497c4948e03.png"},19204:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.45.57_AM-8b17b971fe9747128d7c1727dd0c2b35.png"},64234:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.47.10_AM-e5c3345e0e4829d3bc00434b91af58eb.png"},91266:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.48.24_AM-8d398f548be064fee18156e499c7c30f.png"},58342:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.48.51_AM-d65c3a3c6bbf857e9f0253221e0c2252.png"},55593:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.57.58_AM-f9ccb9d544162a11defc7e20bcc5ea43.png"},71059:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.59.24_AM-5c778802071561f8d56509c54f32fb70.png"},95903:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_11.00.04_AM-f3d0b9106b682171db316604ac028bf0.png"},17138:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_11.00.55_AM-2f4c3e09ce0ebdfeb8d9c7b7329e6ade.png"},97186:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_11.01.32_AM-2a8cc63ff21c7e9cefa65a72268eb83d.png"},16582:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/datastore-4ddeab6316dd6d42a9f40131e5aab4d8.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);