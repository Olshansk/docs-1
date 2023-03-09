"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(7294),l=n(6010),r=n(2389),i=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:r,values:c,groupId:d,className:g}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===r?r:r??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[v,w]=(0,o.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==v&&k.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==v&&(I(t),w(a),null!=d&&N(d,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:T},r,{className:(0,l.Z)("tabs__item",m,r?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),l=n(5488),r=n(5162);const i={sidebar_position:3,sidebar_label:"GM world tutorial",description:"Build a sovereign rollup with Ignite CLI, Celestia and Rollkit."},s="GM world rollup",u={unversionedId:"tutorials/gm-world",id:"tutorials/gm-world",title:"GM world rollup",description:"Build a sovereign rollup with Ignite CLI, Celestia and Rollkit.",source:"@site/docs/tutorials/gm-world.md",sourceDirName:"tutorials",slug:"/tutorials/gm-world",permalink:"/pr-preview/pr-139/docs/tutorials/gm-world",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/gm-world.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"GM world tutorial",description:"Build a sovereign rollup with Ignite CLI, Celestia and Rollkit."},sidebar:"docs",previous:{title:"Hello world",permalink:"/pr-preview/pr-139/docs/tutorials/hello-world"},next:{title:"Recipe book tutorial",permalink:"/pr-preview/pr-139/docs/tutorials/recipe-book"}},p={},m=[{value:"\u2600\ufe0f Introduction",id:"\ufe0f-introduction",level:2},{value:"\ud83e\udd14 What is GM?",id:"-what-is-gm",level:3},{value:"\ud83d\udee0\ufe0f Setup",id:"\ufe0f-setup",level:2},{value:"\ud83c\udfc3\xa0Install Golang on Linux",id:"install-golang-on-linux",level:3},{value:"\ud83d\udd25\xa0Install Ignite CLI on Linux",id:"install-ignite-cli-on-linux",level:3},{value:"\ud83c\udfc3\xa0Install Golang on macOS",id:"install-golang-on-macos",level:3},{value:"\ud83d\udd25\xa0Install Ignite CLI on macOS",id:"install-ignite-cli-on-macos",level:3},{value:"\ud83c\udf7a\xa0Install Homebrew on macOS",id:"install-homebrew-on-macos",level:3},{value:"\ud83c\udfc3\xa0Install wget and jq on macOS",id:"install-wget-and-jq-on-macos",level:3},{value:"\ud83e\udeb6\xa0Run a Celestia light node",id:"run-a-celestia-light-node",level:2},{value:"\ud83d\uddde\xa0Building a sovereign rollup",id:"building-a-sovereign-rollup",level:2},{value:"\ud83d\udc8e\xa0Installing Rollkit",id:"installing-rollkit",level:3},{value:"\ud83d\udcac\xa0Say gm world",id:"say-gm-world",level:2},{value:"\u270b\xa0Create your first query",id:"create-your-first-query",level:3},{value:"\ud83d\udce8\xa0Query request and response types",id:"query-request-and-response-types",level:3},{value:"\ud83d\udc4b\xa0Gm keeper function",id:"gm-keeper-function",level:3},{value:"\ud83d\udfe2\xa0Start your sovereign rollup",id:"start-your-sovereign-rollup",level:3}],c={toc:m};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gm-world-rollup"},"GM world rollup"),(0,o.kt)("admonition",{title:"difficulty",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Beginner")),(0,o.kt)("h2",{id:"\ufe0f-introduction"},"\u2600\ufe0f Introduction"),(0,o.kt)("p",null,"In this tutorial, we will build a sovereign ",(0,o.kt)("inlineCode",{parentName:"p"},"gm world")," rollup using Rollkit\nand Celestia\u2019s data availability and consensus layer to submit Rollkit blocks."),(0,o.kt)("p",null,"This tutorial will cover setting up a Celestia Light Node, Ignite CLI, and\nbuilding a Cosmos-SDK application-specific rollup blockchain on top of\nCelestia."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK")," is a framework for\nbuilding blockchain applications. The Cosmos Ecosystem uses\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"},"Inter-Blockchain Communication (IBC)"),"\nto allow blockchains to communicate with one another."),(0,o.kt)("admonition",{title:"note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial will explore developing with Rollkit,\nwhich is still in Alpha stage. If you run into bugs, please write a Github\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/issues/new"},"Issue ticket"),"\nor let us know in our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/638338779505229824/1065974175237414972"},"Discord"),".")),(0,o.kt)("admonition",{title:"caution",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The script for this tutorial is built for Celestia's\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/mocha-testnet"},"Mocha testnet"),".\nIf you choose to use Arabica Devnet,\nyou will need to modify the script manually.")),(0,o.kt)("h3",{id:"-what-is-gm"},"\ud83e\udd14 What is GM?"),(0,o.kt)("p",null,'GM means good morning. It\'s GM o\'clock somewhere, so there\'s never a bad time\nto say GM, Gm, or gm. You can think of "GM" as the new version of\n"hello world".'),(0,o.kt)("h2",{id:"\ufe0f-setup"},"\ud83d\udee0\ufe0f Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Recommended GNU/Linux or macOS"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev"},"Golang")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ignite/cli"},"Ignite CLI v0.25.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brew.sh"},"Homebrew")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/wget"},"wget")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq"},"jq")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/light-node"},"A Celestia Light Node"))),(0,o.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("h3",{id:"install-golang-on-linux"},"\ud83c\udfc3\xa0Install Golang on Linux"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"Celestia-App"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node"},"Celestia-Node"),",\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos-SDK")," are\nwritten in the Golang programming language. You will need\nGolang to build and run them."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to use the same testnet installation instructions through this\nentire tutorial")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/environment#install-golang"},"install Golang here"),"."),(0,o.kt)("h3",{id:"install-ignite-cli-on-linux"},"\ud83d\udd25\xa0Install Ignite CLI on Linux"),(0,o.kt)("p",null,"First, you will need to create ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," if you have not already:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 775 /usr/local/bin\n")),(0,o.kt)("p",null,"Run this command in your terminal to install Ignite CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.ignite.com/cli! | bash\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u270b On some machines, you may run into permissions errors like the one below.\nYou can resolve this error by following the guidance\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/install#write-permission"},"here")," or below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Error\njcs @ ~ % curl https://get.ignite.com/cli! | bash\n\n\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  16847      0 --:--:-- --:--:-- --:--:-- 17475\nInstalling ignite v0.25.1.....\n######################################################################## 100.0%\nmv: rename ./ignite to /usr/local/bin/ignite: Permission denied\n============\nError: mv failed\n")),(0,o.kt)("p",null,"The following command will resolve the permissions error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl https://get.ignite.com/cli! | sudo bash\n")),(0,o.kt)("p",null,"A successful installation will return something similar the response below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  15586      0 --:--:-- --:--:-- --:--:-- 15931\nInstalling ignite v0.25.1.....\n######################################################################## 100.0%\nInstalled at /usr/local/bin/ignite\n")),(0,o.kt)("p",null,"Verify you\u2019ve installed Ignite CLI by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ignite version\n")),(0,o.kt)("p",null,"The response that you receive should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~ % ignite version\nIgnite CLI version: v0.25.1\nIgnite CLI build date: 2022-10-20T15:52:00Z\nIgnite CLI source hash: cc393a9b59a8792b256432fafb472e5ac0738f7c\nCosmos SDK version: v0.46.3\nYour OS: darwin\nYour arch: arm64\nYour Node.js version: v18.10.0\nYour go version: go version go1.19.2 darwin/arm64\nYour uname -a: Darwin Joshs-MacBook-Air.local 21.6.0 Darwin Kernel Version 21.6.0: Mon Aug 22 20:20:07 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T8110 arm64\nYour cwd: /Users/joshstein\nIs on Gitpod: false\n"))),(0,o.kt)(r.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,o.kt)("h3",{id:"install-golang-on-macos"},"\ud83c\udfc3\xa0Install Golang on macOS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"Celestia-App"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node"},"Celestia-Node"),",\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos-SDK")," are\nwritten in the Golang programming language. You will need\nGolang to build and run them."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to use the same testnet installation instructions through this\nentire tutorial")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/environment#install-golang"},"install Golang here"),"."),(0,o.kt)("h3",{id:"install-ignite-cli-on-macos"},"\ud83d\udd25\xa0Install Ignite CLI on macOS"),(0,o.kt)("p",null,"First, you will need to create ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," if you have not already:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 775 /usr/local/bin\n")),(0,o.kt)("p",null,"Run this command in your terminal to install Ignite CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.ignite.com/cli! | bash\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u270b On some machines, you may run into permissions errors like the one below.\nYou can resolve this error by following the guidance\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/install#write-permission"},"here")," or below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Error\njcs @ ~ % curl https://get.ignite.com/cli! | bash\n\n\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  16847      0 --:--:-- --:--:-- --:--:-- 17475\nInstalling ignite v0.25.1.....\n######################################################################## 100.0%\nmv: rename ./ignite to /usr/local/bin/ignite: Permission denied\n============\nError: mv failed\n")),(0,o.kt)("p",null,"The following command will resolve the permissions error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl https://get.ignite.com/cli! | sudo bash\n")),(0,o.kt)("p",null,"A successful installation will return something similar the response below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  15586      0 --:--:-- --:--:-- --:--:-- 15931\nInstalling ignite v0.25.1.....\n######################################################################## 100.0%\nInstalled at /usr/local/bin/ignite\n")),(0,o.kt)("p",null,"Verify you\u2019ve installed Ignite CLI by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ignite version\n")),(0,o.kt)("p",null,"The response that you receive should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~ % ignite version\nIgnite CLI version: v0.25.1\nIgnite CLI build date: 2022-10-20T15:52:00Z\nIgnite CLI source hash: cc393a9b59a8792b256432fafb472e5ac0738f7c\nCosmos SDK version: v0.46.3\nYour OS: darwin\nYour arch: arm64\nYour Node.js version: v18.10.0\nYour go version: go version go1.19.2 darwin/arm64\nYour uname -a: Darwin Joshs-MacBook-Air.local 21.6.0 Darwin Kernel Version 21.6.0: Mon Aug 22 20:20:07 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T8110 arm64\nYour cwd: /Users/joshstein\nIs on Gitpod: false\n")),(0,o.kt)("h3",{id:"install-homebrew-on-macos"},"\ud83c\udf7a\xa0Install Homebrew on macOS"),(0,o.kt)("p",null,"Homebrew will allow us to install dependencies for our Mac:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,o.kt)("p",null,"Be sure to run the commands similar to the output below from the successful installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,o.kt)("h3",{id:"install-wget-and-jq-on-macos"},"\ud83c\udfc3\xa0Install wget and jq on macOS"),(0,o.kt)("p",null,"wget is an Internet file retriever and jq is a lightweight and flexible\ncommand-line JSON processor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget && brew install jq\n")))),(0,o.kt)("h2",{id:"run-a-celestia-light-node"},"\ud83e\udeb6\xa0Run a Celestia light node"),(0,o.kt)("p",null,"Follow instructions to install and start your Celestia Data Availalbility\nlayer Light Node selecting the network that you had previously used. You can\nfind instructions to install and run the node ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/light-node"},"here"),"."),(0,o.kt)("p",null,"After you have Go and Ignite CLI installed, and your Celestia Light\nNode running on your machine, you're ready to build, test, and launch your own\nsovereign rollup."),(0,o.kt)("h2",{id:"building-a-sovereign-rollup"},"\ud83d\uddde\xa0Building a sovereign rollup"),(0,o.kt)("p",null,"The Ignite CLI comes with scaffolding commands to make development of\nblockchains quicker by creating everything that is needed to start a new\nCosmos SDK blockchain."),(0,o.kt)("p",null,"Open a new tab or window in your terminal and run this command to scaffold your rollup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold chain gm\n")),(0,o.kt)("p",null,"The response will look similar to below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~ % ignite scaffold chain gm\n\n\u2b50\ufe0f Successfully created a new blockchain 'gm'.\n\ud83d\udc49 Get started with the following commands:\n\n % cd gm\n % ignite chain serve\n\nDocumentation: https://docs.ignite.com\n")),(0,o.kt)("p",null,"This command has created a Cosmos SDK blockchain in the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory contains a fully functional blockchain. The following standard\nCosmos SDK ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/modules"},"modules")," have been\nimported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"staking")," - for delegated Proof-of-Stake (PoS) consensus mechanism"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bank")," - for fungible token transfers between accounts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gov")," - for on-chain governance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mint")," - for minting new units of staking token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nft")," - for creating, transferring, and updating NFTs"),(0,o.kt)("li",{parentName:"ul"},"and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/architecture/adr-043-nft-module.html"},"more"))),(0,o.kt)("p",null,"Change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd gm\n")),(0,o.kt)("p",null,"You can learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory\u2019s file structure ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/hello#blockchain-directory-structure"},"here"),".\nMost of our work in this tutorial will happen in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," directory."),(0,o.kt)("h3",{id:"installing-rollkit"},"\ud83d\udc8e\xa0Installing Rollkit"),(0,o.kt)("p",null,"To swap out Tendermint for Rollkit, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/rollkit/cosmos-sdk@v0.46.7-rollkit-v0.6.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/celestiaorg/tendermint@v0.34.22-0.20221202214355-3605c597500d\ngo mod tidy\ngo mod download\n")),(0,o.kt)("h2",{id:"say-gm-world"},"\ud83d\udcac\xa0Say gm world"),(0,o.kt)("p",null,"Now, we're going to get our blockchain to say ",(0,o.kt)("inlineCode",{parentName:"p"},"gm world!")," - in order to do so\nyou need to make the following changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify a protocol buffer file"),(0,o.kt)("li",{parentName:"ul"},"Create a keeper query function that returns data")),(0,o.kt)("p",null,"Protocol buffer files contain proto RPC calls that define Cosmos SDK queries\nand message handlers, and proto messages that define Cosmos SDK types. The RPC\ncalls are also responsible for exposing an HTTP API."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Keeper")," is required for each Cosmos SDK module and is an abstraction for\nmodifying the state of the blockchain. Keeper functions allow us to query or\nwrite to the state."),(0,o.kt)("h3",{id:"create-your-first-query"},"\u270b\xa0Create your first query"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Open a new terminal instance that is not the\nsame that you started the chain in.")),(0,o.kt)("p",null,"In your new terminal, ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory and run this command\nto create the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold query gm --response text\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"modify proto/gm/gm/query.proto\nmodify x/gm/client/cli/query.go\ncreate x/gm/client/cli/query_gm.go\ncreate x/gm/keeper/query_gm.go\n\n\ud83c\udf89 Created a query `gm`.\n")),(0,o.kt)("p",null,"What just happened? ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," accepts the name of the query (",(0,o.kt)("inlineCode",{parentName:"p"},"gm"),"), an optional\nlist of request parameters (empty in this tutorial), and an optional\ncomma-separated list of response field with a ",(0,o.kt)("inlineCode",{parentName:"p"},"--response")," flag (",(0,o.kt)("inlineCode",{parentName:"p"},"text")," in this\ntutorial)."),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm/proto/gm/gm/query.proto")," file, you\u2019ll see that ",(0,o.kt)("inlineCode",{parentName:"p"},"Gm")," RPC has\nbeen added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="gm/proto/gm/gm/query.proto"',title:'"gm/proto/gm/gm/query.proto"'},'service Query {\n  rpc Params(QueryParamsRequest) returns (QueryParamsResponse) {\n    option (google.api.http).get = "/gm/gm/params";\n  }\n    rpc Gm(QueryGmRequest) returns (QueryGmResponse) {\n        option (google.api.http).get = "/gm/gm/gm";\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Gm")," RPC for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"is responsible for returning a ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," string"),(0,o.kt)("li",{parentName:"ul"},"Accepts request parameters (",(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmRequest"),")"),(0,o.kt)("li",{parentName:"ul"},"Returns response of type ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmResponse")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"option")," defines the endpoint that is used by gRPC to generate an HTTP API")),(0,o.kt)("h3",{id:"query-request-and-response-types"},"\ud83d\udce8\xa0Query request and response types"),(0,o.kt)("p",null,"In the same file, we will find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmRequest")," is empty because it does not require parameters"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmResponse")," contains ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," that is returned from the chain")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="gm/proto/gm/gm/query.proto"',title:'"gm/proto/gm/gm/query.proto"'},"message QueryGmRequest {\n}\n\nmessage QueryGmResponse {\n  string text = 1;\n}\n")),(0,o.kt)("h3",{id:"gm-keeper-function"},"\ud83d\udc4b\xa0Gm keeper function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gm/x/gm/keeper/query_gm.go")," file contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gm")," keeper function that\nhandles the query and returns data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="gm/x/gm/keeper/query_gm.go"',title:'"gm/x/gm/keeper/query_gm.go"'},'func (k Keeper) Gm(goCtx context.Context, req *types.QueryGmRequest) (*types.QueryGmResponse, error) {\n    if req == nil {\n        return nil, status.Error(codes.InvalidArgument, "invalid request")\n    }\n    ctx := sdk.UnwrapSDKContext(goCtx)\n    _ = ctx\n    return &types.QueryGmResponse{}, nil\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Gm")," function performs the following actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Makes a basic check on the request and throws an error if it\u2019s ",(0,o.kt)("inlineCode",{parentName:"li"},"nil")),(0,o.kt)("li",{parentName:"ul"},"Stores context in a ",(0,o.kt)("inlineCode",{parentName:"li"},"ctx")," variable that contains information about the\nenvironment of the request"),(0,o.kt)("li",{parentName:"ul"},"Returns a response of type ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmResponse"))),(0,o.kt)("p",null,"Currently, the response is empty and you'll need to update the keeper function."),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"query.proto")," file defines that the response accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),". Use your text\neditor to modify the keeper function in ",(0,o.kt)("inlineCode",{parentName:"p"},"gm/x/gm/keeper/query_gm.go")," ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="gm/x/gm/keeper/query_gm.go"',title:'"gm/x/gm/keeper/query_gm.go"'},'func (k Keeper) Gm(goCtx context.Context, req *types.QueryGmRequest) (*types.QueryGmResponse, error) {\n    if req == nil {\n        return nil, status.Error(codes.InvalidArgument, "invalid request")\n    }\n    ctx := sdk.UnwrapSDKContext(goCtx)\n    _ = ctx\n    return &types.QueryGmResponse{Text: "gm world!"}, nil\n}\n')),(0,o.kt)("h3",{id:"start-your-sovereign-rollup"},"\ud83d\udfe2\xa0Start your sovereign rollup"),(0,o.kt)("admonition",{title:"caution",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Before starting our rollup, we'll need to find and change\n",(0,o.kt)("inlineCode",{parentName:"p"},"FlagIAVLFastNode")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"FlagDisableIAVLFastNode"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="gm/cmd/gmd/cmd/root.go"',title:'"gm/cmd/gmd/cmd/root.go"'},"baseapp.SetIAVLDisableFastNode(cast.ToBool(appOpts.Get(server.FlagDisableIAVLFastNode))),\n")),(0,o.kt)("p",{parentName:"admonition"},"Also, if you are on macOS, you will need to install md5sha1sum:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install md5sha1sum\n"))),(0,o.kt)("p",null,"We have a handy ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," found in this repo\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/tree/main/docs/scripts/gm"},"here"),"."),(0,o.kt)("p",null,"We can copy it over to our directory with the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# From inside the `gm` directory\nwget https://raw.githubusercontent.com/rollkit/docs/main/docs/scripts/gm/init.sh\n")),(0,o.kt)("p",null,"This copies over our ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," script to initialize our\ngm rollup."),(0,o.kt)("p",null,"You can view the contents of the script to see how we\ninitialize the gm rollup."),(0,o.kt)("p",null,"You can initialize the script with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash init.sh\n")),(0,o.kt)("p",null,"With that, we have kickstarted our ",(0,o.kt)("inlineCode",{parentName:"p"},"gmd")," network!"),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"\xa0command has also scaffolded\n",(0,o.kt)("inlineCode",{parentName:"p"},"x/gm/client/cli/query_gm.go"),"\xa0that\nimplements a CLI equivalent of the gm query and mounted this command in\n",(0,o.kt)("inlineCode",{parentName:"p"},"x/gm/client/cli/query.go"),"."),(0,o.kt)("p",null,"In a separate window, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gmd q gm gm\n")),(0,o.kt)("p",null,"We will get the following JSON response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"text: gm world!\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"4.png",src:n(7388).Z,width:"1064",height:"862"})),(0,o.kt)("p",null,"Congratulations \ud83c\udf89 you've successfully built your first rollup and queried it!"))}d.isMDXComponent=!0},7388:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-856eac0d6cc770f822920d687f38f9e7.png"}}]);