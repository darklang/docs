"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5229],{69955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"tutorials/call-external-api","title":"Tutorial: Call an external API","description":"Darklang has built-in standard libraries for working with external HTTP Calls","source":"@site/docs-classic/tutorials/08-call-external-api.md","sourceDirName":"tutorials","slug":"/tutorials/call-external-api","permalink":"/tutorials/call-external-api","draft":false,"unlisted":false,"editUrl":"https://github.com/darklang/docs/edit/main/docs-classic/tutorials/08-call-external-api.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Tutorial: Call an external API","sidebar_label":"Call an external API","id":"call-external-api"},"sidebar":"docs","previous":{"title":"Extract code into a Function","permalink":"/tutorials/extract-function"},"next":{"title":"Complete your first application","permalink":"/tutorials/complete-first-application"}}');var i=n(74848),a=n(28453);const r={title:"Tutorial: Call an external API",sidebar_label:"Call an external API",id:"call-external-api"},l=void 0,c={},o=[];function d(e){const t={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Darklang has built-in standard libraries for working with external HTTP Calls\n(",(0,i.jsx)(t.code,{children:"HTTP"})," and ",(0,i.jsx)(t.code,{children:"HttpClient"}),"). This allows you to work with any external REST APIs."]}),"\n",(0,i.jsx)(t.p,{children:"In this Tutorial, we'll send the Daily Report we created to Airtable, so other\nteam members can see it."}),"\n",(0,i.jsxs)(t.p,{children:["If you don't feel like setting up an Airtable account, this step can be safely\nskipped, and you can continue to the ",(0,i.jsx)(t.a,{href:"./complete-first-application",children:"final step"}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Set up Airtable (~10 minutes)."}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://airtable.com",children:"Airtable"})," and create a new base."]}),"\n",(0,i.jsxs)(t.li,{children:["In the base, create two columns, one for date (field type is date) and one for\nrequests (field type is number). You can see our sample\n",(0,i.jsx)(t.a,{href:"https://airtable.com/invite/l?inviteId=invOadxgcpBKaCQiv&inviteToken=e7492a049bf7e4cd1c475b43efac35d296578f66198bff549ca99af6ee5821b4",children:"here"}),".\n",(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(28423).A+"",width:"872",height:"508"})]}),"\n",(0,i.jsxs)(t.li,{children:["Generate an API key on the ",(0,i.jsx)(t.a,{href:"https://airtable.com/account",children:"Account page"}),". Put\nthe API key in a function in your Darklang canvas.\n",(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(70203).A+"",width:"1388",height:"414"})]}),"\n",(0,i.jsxs)(t.li,{children:["Airtable's full API documentation for your base will be available on the\n",(0,i.jsx)(t.a,{href:"https://airtable.com/api",children:"API page"}),". Within this page, go to Create Records\nin the left hand navigation to copy the URI from the right hand side.\n",(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(40501).A+"",width:"1150",height:"616"})]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Add the HTTP POST call to the ",(0,i.jsx)(t.code,{children:"storeReport"})," worker so it will run\nasynchronously. Hit ",(0,i.jsx)(t.code,{children:"return"})," after the ",(0,i.jsx)(t.code,{children:"Db::set"})," function. ",(0,i.jsx)(t.code,{children:"DB::set"})," will\nstill run as a side effect, and we can add the new function."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(10772).A+"",width:"960",height:"938"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"HttpClient::post"})," function takes four arguments. Paste the URI from\nAirtable from the base into the first argument."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(28151).A+"",width:"1006",height:"1064"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["Above ",(0,i.jsx)(t.code,{children:"HttpClient::post"})," declare a new variable, ",(0,i.jsx)(t.code,{children:"airtable_header"}),". Use the\n",(0,i.jsx)(t.code,{children:"HttpClient::bearerToken"})," and pass your API key function as the argument.\nThen, pipe ",(0,i.jsx)(t.code,{children:"|>"})," into ",(0,i.jsx)(t.code,{children:"Dict::merge"})," and merge with\n",(0,i.jsx)(t.code,{children:"HttpClient::jsonContentType"}),". The ",(0,i.jsx)(t.code,{children:"airtable_header"})," will now be a nicely\nformatted header for the Airtable API."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(72455).A+"",width:"1714",height:"360"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The query can be empty for this particular request, but we do need to provide\nan argument, such as ",(0,i.jsx)(t.code,{children:"{}"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the information from the report to the body (the date and number of\nrequests). Airtable expects the following format:\n",(0,i.jsx)(t.code,{children:"records : [{fields : {Date : date, Requests : count}}]"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(65448).A+"",width:"1116",height:"470"})}),"\n",(0,i.jsxs)(t.ol,{start:"7",children:["\n",(0,i.jsxs)(t.li,{children:["Run the API request in the editor by hitting the play button next to\n",(0,i.jsx)(t.code,{children:"HttpClient::post"}),". If the request is successful, a success will be returned\nand you'll see the record in your Airtable base."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(69495).A+"",width:"1698",height:"518"})}),"\n",(0,i.jsxs)(t.p,{children:["If the request is not successful, the error message will be displayed in line,\nand you'll see the ",(0,i.jsx)(t.code,{children:"Error"})," on the error rail. In this case, the format of the\ndate passed did not expect what Airtable expected."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gettingstarted/newworker.png",src:n(79428).A+"",width:"1690",height:"470"})}),"\n",(0,i.jsxs)(t.ol,{start:"8",children:["\n",(0,i.jsx)(t.li,{children:"Each time your cron runs (daily, or when triggered) a record will be added to\nyour Airtable base."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28423:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/airtable_base-522019e75989057f53800784a8e40418.png"},70203:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/airtable_key-d88e1cd7d36e23e4aec19190d9198c7c.png"},40501:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/airtable_url-26369ed16786fa952cec9d4d6a7ac78a.png"},65448:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/api_body-8d49c381476818e09814d8f7b2258780.png"},79428:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/api_error-932e1cd6d9c7cec4c0960f7cce14ebf1.png"},72455:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/api_header-6220c617bd04d7153c678401a801f72e.png"},28151:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/api_httpclientpost-71172c71b0cee15af314c7d4c033e0f3.png"},69495:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/api_success-319ae39f168e2ea49440be94c02c77ab.png"},10772:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/apiworker_newline-1200cb0ac3fc517b5d5ecb0dd3544d8e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);