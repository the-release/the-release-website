_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"+CCa":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return n("n8/n")}])},BsWD:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}n.d(e,"a",(function(){return a}))},DSFK:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return r}))},KEE8:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("wx14"),a=n("Ff2n"),i=n("q1tI"),o=n.n(i),c=n("vOnD"),l=n("nT29"),d=o.a.createElement,u=c.d.figure.withConfig({displayName:"imagecomponent__ImageContainer",componentId:"sc-1l6zfdu-0"})((function(t){var e=t.imageRatio,n=t.width,r=t.height,a=t.dominantColor;return Object(c.c)(["background:",";display:inline-block;position:relative;width:","px;height:",'px;overflow:hidden;-webkit-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);&:before{content:"";display:block;padding-top:',"%;}"],a||"#eee",n,r,e)})),s=c.d.img.withConfig({displayName:"imagecomponent__StyledImage",componentId:"sc-1l6zfdu-1"})((function(t){var e=t.hasLoaded;return Object(c.c)(["position:absolute;top:0;object-fit:cover;width:100%;height:100%;transition:opacity 0.25s ",";",""],l.a,!e&&Object(c.c)(["opacity:0;"]))})),m=function(t){var e=t.alt,n=t.src,o=t.width,c=t.height,l=t.dominantColor,m=t.srcSet,p=t.className,f=Object(a.a)(t,["alt","src","width","height","dominantColor","srcSet","className"]),g=Object(i.useRef)(null),h=Object(i.useState)(!1),w=h[0],y=h[1],b=null==m?void 0:m.map((function(t){var e=t.src,n=t.width;return"".concat(e," ").concat(n,"w")})).join(", "),x=c/o*100,v=l?(.5,l.replace("rgb","rgba").replace(")",", ".concat(.5,")"))):void 0;return Object(i.useEffect)((function(){g.current.complete&&setTimeout((function(){return y(!0)}),1)}),[]),d(u,{className:p,imageRatio:x,width:o,height:c,dominantColor:v},d(s,Object(r.a)({},f,{ref:g,src:n,loading:"lazy",alt:e,onLoad:function(){return y(!0)},hasLoaded:w,srcSet:b,className:"fadeInOnLoad"})))}},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("DSFK"),a=n("BsWD"),i=n("PYwp");function o(t,e){return Object(r.a)(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(t,e)||Object(a.a)(t,e)||Object(i.a)()}},PYwp:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return r}))},iNpI:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("ODXe"),a=n("q1tI"),i=n.n(a),o=n("vOnD"),c=n("YFqc"),l=n.n(c),d=n("KEE8"),u=n("nkNA"),s=n("FUxi"),m=i.a.createElement,p=o.d.a.withConfig({displayName:"article-cardcomponent__StyledArticleLink",componentId:"sc-17xb5kw-0"})(["text-decoration:none;display:block;height:100%;@media only screen and (max-width:768px){display:grid;grid-column-gap:30px;grid-row-gap:30px;grid-template-columns:1fr 2fr;}"]),f=Object(o.d)(d.a).withConfig({displayName:"article-cardcomponent__Thumbnail",componentId:"sc-17xb5kw-1"})(["width:100%;height:auto;display:block;@media only screen and (max-width:768px){&:before{padding-top:100%;}}"]),g=o.d.div.withConfig({displayName:"article-cardcomponent__ArticleInformation",componentId:"sc-17xb5kw-2"})(["padding:30px 0;@media only screen and (max-width:768px){padding:0;display:flex;flex-direction:column;justify-content:center;}"]),h=Object(o.d)(u.a).withConfig({displayName:"article-cardcomponent__Title",componentId:"sc-17xb5kw-3"})(["font-size:24px;@media only screen and (max-width:1400px){font-size:21px;}@media only screen and (max-width:560px){font-size:18px;}"]),w=Object(o.d)(s.a).withConfig({displayName:"article-cardcomponent__Lede",componentId:"sc-17xb5kw-4"})((function(t){var e=t.theme;return Object(o.c)(["border-radius:5px;font-family:",";color:",";font-weight:normal;"],e.fonts.serif,e.colors.textSecondary)})),y=function(t){var e=t.title,n=t.lede,a=t.url,i=t.images,o=Object(r.a)(i,1)[0];return m("article",null,m(l.a,{href:"/article/[slug]",as:a,passHref:!0},m(p,null,m(f,{alt:o.alt,src:o.sizes.medium.url,srcSet:[{src:o.sizes.small.url,width:o.sizes.small.width},{src:o.sizes.medium.url,width:o.sizes.medium.width},{src:o.sizes.large.url,width:o.sizes.large.width}],dominantColor:o.dominantColor,width:16,height:9}),m(g,null,m(u.a,{component:"h3",variant:"h5",gutterBottom:!0},"Silicon Valley"),m(h,{component:"h2",gutterBottom:!0},e),m(w,{component:"p",variant:"h3"},n)))))}},km4c:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=a.a.createElement,c=i.d.div.withConfig({displayName:"article-listcomponent__StyledArticleList",componentId:"v5r0j6-0"})(["display:grid;grid-column-gap:30px;grid-row-gap:30px;grid-template-columns:1fr 1fr 1fr;max-width:1200px;margin:0 auto;@media only screen and (max-width:1080px){grid-template-columns:1fr 1fr;}@media only screen and (max-width:768px){grid-template-columns:1fr;}"]),l=function(t){var e=t.children;return o(c,null,e)}},"n8/n":function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return a}));var r=n("xiip"),a=!0;e.default=r.a},nT29:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r="cubic-bezier(0.77, 0, 0.175, 1)"},xiip:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("wx14"),a=n("q1tI"),i=n.n(a),o=n("YFqc"),c=n.n(o),l=n("pTio"),d=n("nkNA"),u=n("iNpI"),s=n("km4c"),m=n("Eg1W"),p=n("1wtQ"),f=i.a.createElement,g=function(t){var e=t.articles,n=t.category,a=t.previousPageIndex,o=t.nextPageIndex;return f(i.a.Fragment,null,f(m.a,{title:"News About ".concat(n.name,": ").concat(n.keywords," – ").concat(p.f),keywords:n.keywords,url:n.absoluteUrl,contentType:"category"}),f(l.a,null,f(d.a,{component:"h1",gutterBottom:!0},n.name),f(s.a,null,e.map((function(t,e){return f(u.a,Object(r.a)({},t,{key:e}))}))),null!==a&&f(c.a,{href:"/category/[slug]/[page]",as:"".concat(n.url,"/").concat(a)},f("a",{rel:"prev"},"Previous page")),null!==o&&f(c.a,{href:"/category/[slug]/[page]",as:"".concat(n.url,"/").concat(o)},f("a",{rel:"next"},"Next page"))))}}},[["+CCa",0,1,2,3,4]]]);