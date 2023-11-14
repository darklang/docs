"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[373],{43171:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=o(85893),n=o(11151);const a={},t="Workers",i={id:"reference/framework/workers",title:"Workers",description:"Darklang supports doing work asynchronously outside the context of an HTTP handler",source:"@site/docs-classic/reference/framework/workers.md",sourceDirName:"reference/framework",slug:"/reference/framework/workers",permalink:"/reference/framework/workers",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/reference/framework/workers.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Datastores",permalink:"/reference/framework/datastores"},next:{title:"Cron",permalink:"/reference/framework/cron"}},c={},l=[{value:"Worker Basics",id:"worker-basics",level:2},{value:"Creating a Worker",id:"creating-a-worker",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I access the data from <code>emit</code> in the worker?",id:"how-do-i-access-the-data-from-emit-in-the-worker",level:3},{value:"Do workers execute in parallel?",id:"do-workers-execute-in-parallel",level:3},{value:"Can I control the concurrency of my worker?",id:"can-i-control-the-concurrency-of-my-worker",level:3},{value:"Can I un-enqueue a message?",id:"can-i-un-enqueue-a-message",level:3},{value:"Do workers guarantee exactly-once delivery?",id:"do-workers-guarantee-exactly-once-delivery",level:3},{value:"How do I wait for a worker to finish?",id:"how-do-i-wait-for-a-worker-to-finish",level:3},{value:"Can I call <code>emit</code> from a Worker?",id:"can-i-call-emit-from-a-worker",level:3},{value:"How can I tell how long a message was enqueued?",id:"how-can-i-tell-how-long-a-message-was-enqueued",level:3},{value:"Why does my worker show pending messages that aren\u2019t being processed?",id:"why-does-my-worker-show-pending-messages-that-arent-being-processed",level:3},{value:"What happens when a message fails?",id:"what-happens-when-a-message-fails",level:3},{value:"How long will it take my worker to execute?",id:"how-long-will-it-take-my-worker-to-execute",level:3},{value:"Future Improvements",id:"future-improvements",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"workers",children:"Workers"}),"\n",(0,s.jsxs)(r.p,{children:["Darklang supports doing work asynchronously outside the context of an HTTP handler\nusing a ",(0,s.jsx)(r.strong,{children:"Worker"}),". Each worker has a queue of messages, which are processed\nloosely in-order, executing the code within the Worker once for each message.\nMessages are created by calling ",(0,s.jsx)(r.code,{children:"emit"})," from any other code, and can contain\narbitrary event data."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"REPL with emit to worker",src:o(87504).Z+"",width:"772",height:"323"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"basic worker",src:o(94706).Z+"",width:"1202",height:"335"})}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JpfZIdde_5I",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,s.jsx)(r.h2,{id:"worker-basics",children:"Worker Basics"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Workers will automatically process each message. The ",(0,s.jsx)(r.code,{children:"event"})," data passed to\n",(0,s.jsx)(r.code,{children:"emit"})," is available in the Worker as a special variable ",(0,s.jsx)(r.code,{children:"event"}),". This can be\nof any type, but it is often convenient to use a Dict holding many other\nvalues."]}),"\n",(0,s.jsx)(r.li,{children:"Workers process messages roughly in the order that they were received.\nGenerally, older messages are processed first, but strict ordering is not\nguaranteed."}),"\n",(0,s.jsx)(r.li,{children:"A message should be processed within a minute of being emitted. Typically,\nprocessing begins within a few seconds."}),"\n",(0,s.jsx)(r.li,{children:"If there are multiple items in the queue, a live count of queue items will\nappear at the top left."}),"\n",(0,s.jsx)(r.li,{children:'You can pause the queue by hitting the "pause" button in case of operational\nissues or if you\'d like to stop and debug.'}),"\n",(0,s.jsx)(r.li,{children:"The last 10 processed events will show as traces that you can use for\ndebugging purposes."}),"\n",(0,s.jsx)(r.li,{children:"Workers will not alert you of failures unless you write logic to do so."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"creating-a-worker",children:"Creating a Worker"}),"\n",(0,s.jsx)(r.p,{children:"Workers can be created from the omnibox or sidebar."}),"\n",(0,s.jsxs)(r.p,{children:["Similar to HTTP handlers, calling ",(0,s.jsx)(r.code,{children:"emit"})," with a nonexistent Worker name will\npopulate that worker in the 404 sidebar section, allowing it to be created."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"404 worker",src:o(4275).Z+"",width:"519",height:"110"})}),"\n",(0,s.jsxs)(r.p,{children:["Creating a Worker from a 404 may result in a delay when executing the first\nmessage. When a new worker is created, it immediately processed the first\nmessage in the queue, but returns ",(0,s.jsx)(r.code,{children:"Incomplete"})," because no code has been written\nyet. This causes the message to get automatically retried in 5 minutes, but\nuntil then it may look like no messages are being processed."]}),"\n",(0,s.jsx)(r.p,{children:"This is all quite confusing, so for now we recommend creating the Worker and\ncompleting its code first, before emitting events to it."}),"\n",(0,s.jsx)(r.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(r.h3,{id:"how-do-i-access-the-data-from-emit-in-the-worker",children:["How do I access the data from ",(0,s.jsx)(r.code,{children:"emit"})," in the worker?"]}),"\n",(0,s.jsxs)(r.p,{children:["The data from the ",(0,s.jsx)(r.code,{children:"emit"})," is available in a variable called ",(0,s.jsx)(r.code,{children:"event"})," from within\nthe worker. Its type will be whatever was passed to ",(0,s.jsx)(r.code,{children:"emit"})," (e.g.,\n",(0,s.jsx)(r.code,{children:"emit [1, 2] \u201cmy-worker\u201d"})," will have ",(0,s.jsx)(r.code,{children:"event"})," = ",(0,s.jsx)(r.code,{children:"[1, 2]"})]}),"\n",(0,s.jsx)(r.h3,{id:"do-workers-execute-in-parallel",children:"Do workers execute in parallel?"}),"\n",(0,s.jsx)(r.p,{children:"Yes. Workers across a canvas execute in parallel, and multiple messages for a\nworker may be processed in parallel."}),"\n",(0,s.jsx)(r.h3,{id:"can-i-control-the-concurrency-of-my-worker",children:"Can I control the concurrency of my worker?"}),"\n",(0,s.jsx)(r.p,{children:"No. If multiple messages are enqueued for a worker, the Darklang platform may\nexecute them concurrently. We intend to eventually add controls for managing\nconcurrency."}),"\n",(0,s.jsx)(r.h3,{id:"can-i-un-enqueue-a-message",children:"Can I un-enqueue a message?"}),"\n",(0,s.jsx)(r.p,{children:"No, this is not currently possible. An alternative would be to give each message\na unique UUID, then create a datastore of message IDs to ignore, checking it\nwithin your worker."}),"\n",(0,s.jsx)(r.h3,{id:"do-workers-guarantee-exactly-once-delivery",children:"Do workers guarantee exactly-once delivery?"}),"\n",(0,s.jsx)(r.p,{children:"No. Messages have at-least-once delivery semantics. Adding a unique UUID to\nevery message can be useful in keeping track of which messages have been seen by\nyour worker already."}),"\n",(0,s.jsx)(r.h3,{id:"how-do-i-wait-for-a-worker-to-finish",children:"How do I wait for a worker to finish?"}),"\n",(0,s.jsxs)(r.p,{children:["The code that calls ",(0,s.jsx)(r.code,{children:"emit"})," has no way to know when a worker has completed. If\nyou need a synchronous call, consider a function instead."]}),"\n",(0,s.jsxs)(r.h3,{id:"can-i-call-emit-from-a-worker",children:["Can I call ",(0,s.jsx)(r.code,{children:"emit"})," from a Worker?"]}),"\n",(0,s.jsx)(r.p,{children:"Yes. This can be useful to do fan-out of work or batch processing of data."}),"\n",(0,s.jsxs)(r.p,{children:["In fact, you can ",(0,s.jsx)(r.code,{children:"emit"})," to the same Worker that's processing the message. Just\nbe careful that you don't cause a infinite loop or positive feedback loop. (We\nare likely to disable your Worker if this happens, as it can cause instability\nof the entire worker infrastructure right now.)"]}),"\n",(0,s.jsx)(r.h3,{id:"how-can-i-tell-how-long-a-message-was-enqueued",children:"How can I tell how long a message was enqueued?"}),"\n",(0,s.jsxs)(r.p,{children:["We currently don\u2019t have a way to get this information directly. You can\ncalculate this yourself by adding a timestamp to each message when you call\n",(0,s.jsx)(r.code,{children:"emit"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"why-does-my-worker-show-pending-messages-that-arent-being-processed",children:"Why does my worker show pending messages that aren\u2019t being processed?"}),"\n",(0,s.jsx)(r.p,{children:"Your worker is paused and will not process messages while paused. Click the play\nbutton at the top left of the worker to resume processing."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"paused worker with pending messages",src:o(6975).Z+"",width:"270",height:"84"})}),"\n",(0,s.jsxs)(r.p,{children:["Alternatively, you emitted messages to a non-existent Worker and then created it\nfrom the 404 section (see the warning above in ",(0,s.jsx)(r.strong,{children:"Creating a Worker"}),"). Complete\nthe code in the handler and wait up to 5 minutes for the message to be\nre-processed."]}),"\n",(0,s.jsx)(r.h3,{id:"what-happens-when-a-message-fails",children:"What happens when a message fails?"}),"\n",(0,s.jsx)(r.p,{children:"Nothing special. A message that causes a worker to throw a runtime error (for\nexample by returning Incomplete or having a function call go to the Error Rail)\nwill be silently ignored and the worker will process the next message. We plan\nto eventually add more error handling capabilities such as automatic retries and\ndead-letter-queues."}),"\n",(0,s.jsx)(r.h3,{id:"how-long-will-it-take-my-worker-to-execute",children:"How long will it take my worker to execute?"}),"\n",(0,s.jsx)(r.p,{children:"Your Worker executes code the same as any other Darklang component. For example,\nmaking external HTTP calls will cause execution to take longer."}),"\n",(0,s.jsx)(r.h2,{id:"future-improvements",children:"Future Improvements"}),"\n",(0,s.jsxs)(r.p,{children:["This is a list of improvements we'd like to make to Workers. If you have\nopinions on how these might work, or are interested in contributing any\nfunctionality, please reach out via\n",(0,s.jsx)(r.a,{href:"https://darklang.com/discord-invite",children:"Discord"}),"."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Error handling: automatic retry, dead-letter queue"}),"\n",(0,s.jsx)(r.li,{children:"Concurrency control, allowing for tuning how many messages a Worker will\nprocess in parallel"}),"\n",(0,s.jsx)(r.li,{children:"Queue introspection to see more about the messages in the queue"}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4275:(e,r,o)=>{o.d(r,{Z:()=>s});const s="data:image/png;base64,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"},87504:(e,r,o)=>{o.d(r,{Z:()=>s});const s=o.p+"assets/images/emit-fb51694b9704f9f6c480f55f499ba2bc.png"},6975:(e,r,o)=>{o.d(r,{Z:()=>s});const s="data:image/png;base64,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"},94706:(e,r,o)=>{o.d(r,{Z:()=>s});const s=o.p+"assets/images/worker-e3ddac9e1d84ed436426731fe1aab6e2.png"},11151:(e,r,o)=>{o.d(r,{Z:()=>i,a:()=>t});var s=o(67294);const n={},a=s.createContext(n);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);