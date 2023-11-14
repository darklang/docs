"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2320],{75195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(85893),a=n(11151);const r={title:"Tutorial: Create a tool in a REPL",sidebar_label:"Create a tool in a REPL",id:"create-tool-repl"},i=void 0,o={id:"tutorials/create-tool-repl",title:"Tutorial: Create a tool in a REPL",description:"REPLs in Darklang are general-purpose coding blocks. They're typically to create",source:"@site/docs-classic/tutorials/03-create-tool-repl.md",sourceDirName:"tutorials",slug:"/tutorials/create-tool-repl",permalink:"/tutorials/create-tool-repl",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/tutorials/03-create-tool-repl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tutorial: Create a tool in a REPL",sidebar_label:"Create a tool in a REPL",id:"create-tool-repl"},sidebar:"docs",previous:{title:"Create a HTTP handler",permalink:"/tutorials/create-http-handler"},next:{title:"Save data to a Datastore",permalink:"/tutorials/save-data-to-datastore"}},l={},c=[];function d(e){const t={code:"code",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"REPLs in Darklang are general-purpose coding blocks. They're typically to create\nreusable tools, experiments, one-off commands, or admin dashboards, in a similar\nway that you might use scripts or REPLs in other languages."}),"\n",(0,s.jsxs)(t.p,{children:["We'll run you through creating a REPL, experimenting with the ",(0,s.jsx)(t.code,{children:"HttpClient"}),"\nlibrary to make API calls."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open the omnibox by pressing (",(0,s.jsx)(t.code,{children:"Ctrl-K"}),"/",(0,s.jsx)(t.code,{children:"Cmd-K"}),"), and create a new REPL."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Type "httpclient" in the REPL (lowercase, no spaces)'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.20.25_AM.png",src:n(46231).Z+"",width:"1340",height:"456"})}),"\n",(0,s.jsxs)(t.p,{children:["This will show you all the standard library functions for ",(0,s.jsx)(t.code,{children:"HttpClient"}),", their\nsignatures, and their docstrings."]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:'Continue typing, until you have "httpclientpost". Darklang autocompletes on\nsubstrings so getting the exact text isn\'t important:'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.21.21_AM.png",src:n(37344).Z+"",width:"1318",height:"530"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Hit enter to add the function into the handler."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.22.01_AM.png",src:n(71774).Z+"",width:"1642",height:"282"})}),"\n",(0,s.jsxs)(t.p,{children:["Darklang automatically creates spaces for the four arguments that\n",(0,s.jsx)(t.code,{children:"HttpClient::post"})," requires. We display a gray play button beside the function\n\u2013 it will turn green when all the arguments are complete, allowing you to\nrun the function from within the editor."]}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Let's call a new ",(0,s.jsx)(t.code,{children:"/test"})," endpoint for the application we're developing. As we\nsaw from the GET, our endpoints live at\nUSERNAME-gettingstarted.builtwithdark.com, so enter a string like\n",(0,s.jsx)(t.code,{children:'"https://USERNAME-gettingstarted.builtwithdark.com/test"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.24.08_AM.png",src:n(18009).Z+"",width:"906",height:"374"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Next let's add the arguments. The structured editor simplifies creation of\nthe arguments we want:"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["For the body, we want to pass the value ",(0,s.jsx)(t.code,{children:'{ test : "test1" }'}),". To do so, type\n",(0,s.jsx)(t.code,{children:"{"})," to start a record, then hit enter and add the key and the value."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["For the query, we want an empty dictionary. Type ",(0,s.jsx)(t.code,{children:"{"})," to create one."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'For the header, we want the JSON content-type, so type "json" and the\nautocomplete will offer you a function to use.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gettingstarted/Screen_Shot_2020-02-11_at_10.41.50_AM.png",src:n(50645).Z+"",width:"1088",height:"572"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsx)(t.li,{children:"Once we've filled in all the arguments, the play button (\u25b6\ufe0f) next to the\nfunction turns green, which means we can execute this code from within the\neditor."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gettingstarted/Screen_Shot_2020-02-11_at_10.42.45_AM.png",src:n(36937).Z+"",width:"872",height:"454"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsxs)(t.li,{children:["Hitting play we receive a 404 response. This is because there's no ",(0,s.jsx)(t.code,{children:"/test"}),"\nendpoint on our canvas (yet!)"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gettingstarted/Screen_Shot_2020-02-11_at_10.43.39_AM.png",src:n(15803).Z+"",width:"780",height:"876"})}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsx)(t.li,{children:"404s in Darklang appear in the 404 section of the sidebar. We'll discuss that\nmore later."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gettingstarted/Screen_Shot_2020-02-11_at_10.44.10_AM.png",src:n(3142).Z+"",width:"1660",height:"834"})}),"\n",(0,s.jsx)(t.p,{children:"Congratulations! You've built a Darklang REPL and which calls the Darklang HTTP\nClient function."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50645:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.41.50_AM-c53535ca6fe664a0cc441634905d13e2.png"},36937:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.42.45_AM-bd40cdd248f6628e8ed3d331cf8085db.png"},15803:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.43.39_AM-96aec4bbac8b226b6faadb9a21dead27.png"},3142:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_10.44.10_AM-a5fd8015f73a5c0dc67b66bacf0fd063.png"},46231:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.20.25_AM-88792565054973a931d547c7a551ef38.png"},37344:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.21.21_AM-735568ac9b609feda9f0069874de01d0.png"},71774:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.22.01_AM-ea29a4960850bc174d84c6fbebb46d72.png"},18009:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.24.08_AM-6c45a177945d900751efc0d010b0c044.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);