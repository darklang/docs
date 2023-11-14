"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8255],{7936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const r={title:"Queues",sidebar_label:"Queues"},a=void 0,o={id:"discussion/queues",title:"Queues",description:"Darklang's built-in queues allow programs to be run in the background.",source:"@site/docs-classic/discussion/queues.md",sourceDirName:"discussion",slug:"/discussion/queues",permalink:"/discussion/queues",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/discussion/queues.md",tags:[],version:"current",frontMatter:{title:"Queues",sidebar_label:"Queues"},sidebar:"docs",previous:{title:"When to use Darklang",permalink:"/discussion/when-dark"},next:{title:"Components",permalink:"/discussion/dark-backend-components"}},l={},c=[{value:"Running an event",id:"running-an-event",level:2},{value:"Success criteria",id:"success-criteria",level:3},{value:"Concurrency",id:"concurrency",level:3},{value:"Pausing",id:"pausing",level:2},{value:"Blocking",id:"blocking",level:3},{value:"Retries",id:"retries",level:2},{value:"Technical details",id:"technical-details",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Darklang's built-in queues allow programs to be run in the background.\nDevelopers call ",(0,s.jsx)(n.code,{children:"emit"})," to add events into a named queue, which will be executed\nasynchronously by a handler of the same name."]}),"\n",(0,s.jsx)(n.p,{children:"Events are stored in a system-wide queue and run on separate worker machines,\nwhose capacity is shared with other users. We automatically scale these workers\nup, and you should expect your events to be run promptly."}),"\n",(0,s.jsx)(n.p,{children:"Cron jobs are also run using the same infrastructure."}),"\n",(0,s.jsx)(n.h2,{id:"running-an-event",children:"Running an event"}),"\n",(0,s.jsxs)(n.p,{children:["When a Worker handler runs, the event that was ",(0,s.jsx)(n.code,{children:"emit"}),"ed will be available as an\n",(0,s.jsx)(n.code,{children:"event"})," parameter available in the Worker."]}),"\n",(0,s.jsx)(n.p,{children:"When viewing a handler, you can see the number of items in the queue. When an\nevent is completed, a trace will be stored where you can view the execution."}),"\n",(0,s.jsx)(n.h3,{id:"success-criteria",children:"Success criteria"}),"\n",(0,s.jsxs)(n.p,{children:["Events are considered successful if they run to completion, and will not be\nretried based on the result of the worker's expression, even if that value is a\nType error, ",(0,s.jsx)(n.code,{children:"incomplete"}),", ",(0,s.jsx)(n.code,{children:"false"}),', or any other "negative value".']}),"\n",(0,s.jsxs)(n.p,{children:["If you wish to retry when there is an error of some sort, you should handle this\nexplicitly in your code, perhaps ",(0,s.jsx)(n.code,{children:"emit"}),"ing a new event."]}),"\n",(0,s.jsx)(n.h3,{id:"concurrency",children:"Concurrency"}),"\n",(0,s.jsx)(n.p,{children:"Events are run as quickly as we can, you cannot be assured that an event will\nwait for a previous event to complete before running - in fact, it probably will\nnot."}),"\n",(0,s.jsxs)(n.p,{children:["Events are also not guaranteed to process in the order they are ",(0,s.jsx)(n.code,{children:"emit"}),"ed."]}),"\n",(0,s.jsx)(n.h2,{id:"pausing",children:"Pausing"}),"\n",(0,s.jsxs)(n.p,{children:["Handlers can be paused. When handlers are paused, they will continue to allow\nevents to be ",(0,s.jsx)(n.code,{children:"emit"}),"ed, but they will not run the event. When handlers are\nunpaused, all the events will start to run as soon as possible."]}),"\n",(0,s.jsx)(n.h3,{id:"blocking",children:"Blocking"}),"\n",(0,s.jsxs)(n.p,{children:["Darklang admins may ",(0,s.jsx)(n.code,{children:"block"})," handlers that are causing operational issues. Queues\nthat are causing a operation issue (perhaps even just setting off an internal\nalarm) may be blocked while we investigate. When (and if) we rectify the issue,\nwe may unblock the problematic queue, which acts just like unpausing."]}),"\n",(0,s.jsx)(n.h2,{id:"retries",children:"Retries"}),"\n",(0,s.jsx)(n.p,{children:"Events in the queue will be retried if something goes wrong in the\ninfrastructure. We will attempt to run an event until it succeeds, trying at\nmost 5 times for each event. This only happens with infrastructure issues, which\nyou do not have visibility into, so you cannot predict how many retries a event\nwill get."}),"\n",(0,s.jsx)(n.p,{children:"The most common situation is if an event runs longer than 25 seconds, and runs\nwhile the Darklang infrastructure is being redeployed. In this case, some of the\ncode may be executed more than once - however much got completed on the first\ntry, and then however much got completed in the retry. While unlikely, events\nlike this could be retried more than once. The best way to avoid this is to have\nyour events complete more quickly."}),"\n",(0,s.jsx)(n.p,{children:"Events which have no handler or where the canvas has been deleted will not be\nretried."}),"\n",(0,s.jsx)(n.h2,{id:"technical-details",children:"Technical details"}),"\n",(0,s.jsxs)(n.p,{children:["You can read the\n",(0,s.jsx)(n.a,{href:"https://github.com/darklang/dark/blob/main/docs/eventsV2.md",children:"technical detail and implementation of our queues"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);