"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9061],{3905:(t,e,r)=>{r.d(e,{kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,a(a({ref:e},p),{},{components:r})):n.createElement(f,a({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=p;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64844:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={title:"Making your first Pull Request"},l=void 0,s={unversionedId:"contributing/making-your-first-pull-request",id:"contributing/making-your-first-pull-request",title:"Making your first Pull Request",description:"Right now you've got uncommitted code, let's get that into a Pull Request on",source:"@site/docs/contributing/making-your-first-pull-request.md",sourceDirName:"contributing",slug:"/contributing/making-your-first-pull-request",permalink:"/contributing/making-your-first-pull-request",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/making-your-first-pull-request.md",tags:[],version:"current",frontMatter:{title:"Making your first Pull Request"},sidebar:"Contributing",previous:{title:"Adding your first test",permalink:"/contributing/adding-your-first-test"},next:{title:"Your next contribution",permalink:"/contributing/next-contribution"}},c={},p=[{value:"Formatting the code",id:"formatting-the-code",level:2},{value:"Set up your fork",id:"set-up-your-fork",level:2},{value:"Push",id:"push",level:2},{value:"Make the Pull Request",id:"make-the-pull-request",level:2}],m={toc:p};function d(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Right now you've got uncommitted code, let's get that into a Pull Request on\nGitHub."),(0,i.kt)("h2",{id:"formatting-the-code"},"Formatting the code"),(0,i.kt)("p",null,"We use a code formatter on all our files, and this is tested during CI on all\nPRs. To format, call ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/format format backend"),". There is also a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/56a800909195829ef757e9a4444409af14c171ac/scripts/formatting/pre-commit-hook.sh"},"git hook you can use"),"."),(0,i.kt)("h2",{id:"set-up-your-fork"},"Set up your fork"),(0,i.kt)("p",null,"Dark uses a fork model for contributions, like many GitHub projects. Go to the\n",(0,i.kt)("a",{parentName:"p",href:"https://darklang.com/darklang/dark"},"Dark repo")," in your browser and click ",(0,i.kt)("inlineCode",{parentName:"p"},"fork"),"\nto add a fork."),(0,i.kt)("p",null,"Then change your local repo to use the fork:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git remote rm origin\ngit remote add origin https://github.com/myGitHubUsername/dark.git\n")),(0,i.kt)("h2",{id:"push"},"Push"),(0,i.kt)("p",null,"Finally commit and push"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add backend\ngit commit -m "Add test for List::member"\ngit push --set-upstream origin first-contribution\n')),(0,i.kt)("h2",{id:"make-the-pull-request"},"Make the Pull Request"),(0,i.kt)("p",null,"Go back to GitHub and make a pull request. Here's a good message for your pull\nrequest:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"Hi - this is my first pull request. I noticed that List::member didn\'t have\nany tests so I added one."')),(0,i.kt)("p",null,"While this doesn't follow our\n",(0,i.kt)("a",{parentName:"p",href:"/contributing/making-a-pull-request#writing-a-successful-pull-request-message"},"Pull Request guidelines"),",\nit's fine for a first contribution (and you can ignore the PR template too for\nnow)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"And that's your first PR - congratulations!")),(0,i.kt)("p",null,"(Note that if you haven't signed the CLA, a bot will prompt you to do so now.)"))}d.isMDXComponent=!0}}]);