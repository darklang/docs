"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3171],{39160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"how-to/feature-flags","title":"How to use Feature Flags","description":"In Darklang, all changes are made in production, on your real infrastructure. If","source":"@site/docs-classic/how-to/feature-flags.md","sourceDirName":"how-to","slug":"/how-to/feature-flags","permalink":"/how-to/feature-flags","draft":false,"unlisted":false,"editUrl":"https://github.com/darklang/docs/edit/main/docs-classic/how-to/feature-flags.md","tags":[],"version":"current","frontMatter":{"id":"feature-flags","title":"How to use Feature Flags","sidebar_label":"How to use Feature Flags"},"sidebar":"docs","previous":{"title":"How to collaborate with other developers","permalink":"/how-to/collaborate"},"next":{"title":"How to write tests","permalink":"/how-to/write-tests"}}');var a=n(74848),s=n(28453);const o={id:"feature-flags",title:"How to use Feature Flags",sidebar_label:"How to use Feature Flags"},r=void 0,d={},c=[{value:"Build a first version",id:"build-a-first-version",level:2},{value:"Add a Feature Flag",id:"add-a-feature-flag",level:2},{value:"Choose a &quot;When&quot; Condition",id:"choose-a-when-condition",level:2},{value:"Write New Code",id:"write-new-code",level:2},{value:"Edit Condition &amp; Code",id:"edit-condition--code",level:2},{value:"Commit or Discard",id:"commit-or-discard",level:2},{value:"Limitations",id:"limitations",level:2}];function l(e){const t={code:"code",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In Darklang, all changes are made in production, on your real infrastructure. If\nyou'd like to develop for testing, without things immediately going to users,\nmake the changes within a feature flag."}),"\n",(0,a.jsx)(t.h2,{id:"build-a-first-version",children:"Build a first version"}),"\n",(0,a.jsx)(t.p,{children:"Before you have users, you can just write code within handlers."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(54265).A+"",width:"848",height:"198"})}),"\n",(0,a.jsx)(t.h2,{id:"add-a-feature-flag",children:"Add a Feature Flag"}),"\n",(0,a.jsxs)(t.p,{children:["Open the command palette while selecting the code you want to modify (",(0,a.jsx)(t.code,{children:"ctrl-\\"}),"\nor ",(0,a.jsx)(t.code,{children:"alt-x"}),'). In this case, "hello world."']}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(66177).A+"",width:"1146",height:"510"})}),"\n",(0,a.jsx)(t.h2,{id:"choose-a-when-condition",children:'Choose a "When" Condition'}),"\n",(0,a.jsx)(t.p,{children:'By default, the code you write within the flag will not be run. All traffic will\nstill see the result of "Hello World." To have your new code run, specify a\ncondition.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(97942).A+"",width:"1314",height:"300"})}),"\n",(0,a.jsxs)(t.p,{children:["In this case, the new code will run if the traffic specifies a ",(0,a.jsx)(t.code,{children:"queryParam"}),"\n",(0,a.jsx)(t.code,{children:"name=Ellen"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(88092).A+"",width:"1518",height:"326"})}),"\n",(0,a.jsxs)(t.p,{children:["Since the new execution code has not been written, if you run the code with\n",(0,a.jsx)(t.code,{children:"name=Ellen"})," an error results."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(49218).A+"",width:"2276",height:"176"})}),"\n",(0,a.jsx)(t.h2,{id:"write-new-code",children:"Write New Code"}),"\n",(0,a.jsx)(t.p,{children:"Write new code for the section you're looking to change, and try it out."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(17029).A+"",width:"1546",height:"346"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(3418).A+"",width:"1034",height:"208"})}),"\n",(0,a.jsx)(t.p,{children:"For any case other than the specific condition, the old code will continue to\nrun."}),"\n",(0,a.jsxs)(t.p,{children:["For instance, if another name is chosen in the query param:\n",(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(97793).A+"",width:"1034",height:"150"})]}),"\n",(0,a.jsxs)(t.p,{children:["Or if there is not a name: ",(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(93362).A+"",width:"848",height:"172"})]}),"\n",(0,a.jsx)(t.h2,{id:"edit-condition--code",children:"Edit Condition & Code"}),"\n",(0,a.jsx)(t.p,{children:"Adjust the condition to test any additional cases, or write more code."}),"\n",(0,a.jsxs)(t.p,{children:["Running the new code for any name: ",(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(26920).A+"",width:"1480",height:"274"})]}),"\n",(0,a.jsxs)(t.p,{children:["Making the new code take into account if a name exists or not:\n",(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(45211).A+"",width:"1536",height:"448"})]}),"\n",(0,a.jsx)(t.p,{children:"Live values and traces work for analysis within feature flags, but still appear\nto the left of the original code."}),"\n",(0,a.jsx)(t.h2,{id:"commit-or-discard",children:"Commit or Discard"}),"\n",(0,a.jsxs)(t.p,{children:["Once you're done, re-open the command palette (",(0,a.jsx)(t.code,{children:"ctrl-\\"})," or ",(0,a.jsx)(t.code,{children:"alt-x"})," and commit or\ndiscard the code)."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(91517).A+"",width:"1544",height:"516"})}),"\n",(0,a.jsx)(t.p,{children:"When you commit, the feature flag code now runs for all cases. When you discard,\nyou return to the previous version of the code."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Feature Flag",src:n(25226).A+"",width:"804",height:"334"})}),"\n",(0,a.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsxs)(t.p,{children:["Currently, you can only have one feature flag per component. There is not yet a\nway to see the past history of flags (instead they are just part of the undo\nstack, ",(0,a.jsx)(t.code,{children:"cmd-z"})," or ",(0,a.jsx)(t.code,{children:"ctrl-z"}),".)"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},66177:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-2ba735a1711528ee5a5304429488627a.png"},45211:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/additionallogic-207f7a0b23587032918df5ddc8672da8.png"},91517:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/commit-55fbc67ad8ba44bd04cab189593f4732.png"},25226:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/committed-4cc17968e4e59b0b31626a26b6a4b511.png"},49218:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/error-90ce14cc7a0445457a2c24da4f92ae0f.png"},17029:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/newcode-d9dec31cc3ea389e42128c269601ab90.png"},3418:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/newexecution-27519d180eb454b929b369d974fef048.png"},26920:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/notnull-5b5f65b1fdb0b79409cbfb4179ed6038.png"},97942:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/when-556de172592329564583aca0559d0421.png"},93362:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/whenblank-5d671c92c32077798de79627acc32fa9.png"},88092:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/whenellen-ee2620f9f422e101c9863adabe670b0e.png"},97793:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/whensam-017138ad00c435ee27a1e57a82eba1b2.png"},54265:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/write-85d1fb28d62fb39bf21420a6d2f702b0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);