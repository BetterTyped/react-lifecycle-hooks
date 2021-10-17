"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},o="Intro",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Intro",description:"@better-typed/react-lifecycle-hooks",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-lifecycle-hooks/docs/intro",editUrl:"https://github.com/BetterTyped/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},p=[{value:"@better-typed/react-lifecycle-hooks",id:"better-typedreact-lifecycle-hooks",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"intro"},"Intro"),(0,l.kt)("h2",{id:"better-typedreact-lifecycle-hooks"},"@better-typed/react-lifecycle-hooks"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@better-typed/react-lifecycle-hooks"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@better-typed/react-lifecycle-hooks.svg",alt:"NPM"})),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/bundlephobia/minzip/@better-typed/react-lifecycle-hooks",alt:"npm bundle size"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://standardjs.com"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg",alt:"JavaScript Style Guide"})),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/l/@better-typed/react-lifecycle-hooks",alt:"NPM"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/dm/@better-typed/react-lifecycle-hooks",alt:"npm"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/github/stars/prc5/@better-typed/react-lifecycle-hooks?style=social",alt:"GitHub stars"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"React lifecycle turned into dev friendly hooks")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/BetterTyped"},"Better Typed"))),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\ude80 Simple, fast and light"),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfed No external dependencies"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc8e something"),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf81 something"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udd27 something"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc51 something")),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @better-typed/react-lifecycle-hooks\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @better-typed/react-lifecycle-hooks\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useDidMount, useDidRender, useDidUpdate, useWillUnmount } from "@better-typed/react-lifecycle-hooks";\n\nconst MyComponent: React.FC = () => {\n  const [isOpen, setIsOpen] = React.useState(false)\n\n  // Called first\n  useDidMount(() => {\n    // ...\n  })\n\n  // Called second, once when initial DOM changes are triggered\n  useDidRender(() => {\n    // ...\n  })\n\n  // Called when isOpen change\n  useDidUpdate(() => {\n    // ...\n  }, [isOpen])\n\n  // Called when isOpen change, also on mount\n  useDidUpdate(() => {\n    // ...\n  }, [isOpen], true)\n\n  // Called last\n  useWillUnmount(() => {\n    // ...\n  })\n\n\n  return (\n    // ...\n  )\n}\n\n')))}u.isMDXComponent=!0}}]);