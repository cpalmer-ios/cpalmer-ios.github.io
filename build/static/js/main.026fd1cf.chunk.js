(this.webpackJsonpfolio=this.webpackJsonpfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var i=n(10),c=n(3),a=n(1),s=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),i=Object(c.a)(n,2),r=i[0],o=i[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://cpalmer-ios.github.io",j="Built in React JS",h="./profile-pic.png",m="Chris Palmer",b="Full-Stack Software Engineer",u="I love making websites, games and apps. With over 6 years of experience, I've enjoyed the opportunity to work for some great teams in many great companies. I also love running, reading, pizza and music.",d="./ChrisPalmerResume.pdf",p={linkedin:"https://linkedin.com/in/mrcpalmer",github:"https://github.com/cpalmer-ios"},x=[{name:"Project 1",description:"A remake of Reddit built with Apollo, Graph QL, Node, React and Redis.",stack:["React","Node","GraphQL"],sourceCode:"https://github.com/cpalmer-ios/lireddit-web",livePreview:"https://github.com"},{name:"Project 2",description:"A mobile game built using Expo and the React Native Game Engine module.",stack:["React Native","Expo"],sourceCode:"https://github.com/cpalmer-ios/rn-zombie-hunter",livePreview:"https://github.com"},{name:"Project 3",description:"A retro pixel animation game built purely in JavaScript !",stack:["JavaScript"],sourceCode:"https://github.com/cpalmer-ios/sprite-javascript",livePreview:"https://github.com"}],O=["HTML","CSS","JavaScript","TypeScript","Node","React","Next","React Native","Redux","Express","Apollo","Redis","Mongo DB","SQL","C","C ++","Graph QL","WordPress","pHp","AWS","TerraForm","Docker","Bash","Ruby on Rails","Java","Varnish","Unity","SASS","Material UI","Git","CI/CD","Jest","Enzyme","Cypress","Snyk","SonarCloud"],f=[{name:"sky",img:"./img/sky.png",description:"Delivering a successful launch of the Sky Glass TV sales channel on the main sky.com site. The work also involved working with a team to improve the site performance, security and monitoring.",stack:["React","Node","GraphQL"],livePreview:"https://sky.com"},{name:"nttdata",img:"./img/NTTDATA.png",description:"Building internal applications and working as a Software Engineer / Consultant for other clients which include BT, Vodafone & Microsoft.",stack:["React","Node","Mongo DB"],livePreview:"https://nttdata.com"},{name:"prh",img:"./img/prh.png",description:"Building internal staff applications with the Twitter API and PRHs entire biblio database. All integrated on a secure internal network with key token login and multiple users online functoinality.",stack:["JavaScript","Node","Java"],livePreview:"https://github.com"}],g="write.to.chris.palmer@gmail.com",v=n(17),k=n.n(v),N=n(15),_=n.n(N),w=n(19),y=n.n(w),S=n(18),C=n.n(S),R=(n(28),function(){var e=Object(a.useContext)(l),t=Object(c.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,r=Object(a.useState)(!1),o=Object(c.a)(r,2),j=o[0],h=o[1],m=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[x.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#experience",onClick:m,className:"link link--nav",children:"Experience"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,g?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(_.a,{}):Object(s.jsx)(k.a,{})}),Object(s.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(C.a,{}):Object(s.jsx)(y.a,{})})]})}),P=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(R,{})]})}),E=n(8),T=n.n(E),A=n(20),I=n.n(A),J=(n(33),function(){var e=h,t=m,n=b,i=u,c=d,a=p;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsx)("img",{className:"about__img",src:e,alt:"profile"}),t&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[t,"."]})]}),n&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",n,"."]}),Object(s.jsx)("p",{className:"about__desc",children:i&&i}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(I.a,{})})]})]})]})}),G=n(4),L=n.n(G),B=(n(35),n(36),n(14)),D=n.n(B),M=(n(37),function(e){var t=e.experience;return Object(s.jsxs)("div",{className:"experience",children:[t.img&&Object(s.jsx)("img",{src:t.img,alt:"NTT DATA - Global Innovators",className:"link link--icon ".concat(t.name)}),Object(s.jsx)("p",{className:"experience__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"experience__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"experience__stack-item",children:e},L()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(D.a,{})})]})}),z=(n(38),function(){return f.length?Object(s.jsxs)("section",{id:"experience",className:"section exp",children:[Object(s.jsx)("h2",{className:"section__title",children:"Experience"}),Object(s.jsx)("div",{className:"experience__grid",children:f.map((function(e){return Object(s.jsx)(M,{experience:e},L()())}))})]}):null}),H=(n(39),function(){return O.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),Q=n(21),V=n.n(Q),F=(n(40),function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(V.a,{fontSize:"large"})})}):null}),W=(n(41),function(){return g?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(g),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(42),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/cpalmer-ios",className:"link footer__link",children:"View full GitHub here"})})}),Y=(n(43),function(){var e=Object(a.useContext)(l),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(P,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(J,{}),Object(s.jsx)(z,{}),Object(s.jsx)(H,{}),Object(s.jsx)(W,{})]}),Object(s.jsx)(F,{}),Object(s.jsx)(U,{})]})});n(44);Object(i.render)(Object(s.jsx)(r,{children:Object(s.jsx)(Y,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.026fd1cf.chunk.js.map