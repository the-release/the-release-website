_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{BsWD:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("a3WO");function a(t,n){if(t){if("string"==typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},KEE8:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("wx14"),a=e("Ff2n"),o=e("q1tI"),c=e.n(o),i=e("vOnD"),u=c.a.createElement,l=i.d.img.withConfig({displayName:"imagecomponent__StyledImage",componentId:"sc-1l6zfdu-0"})(["background:#eee;width:auto;height:auto;"]),s=function(t){var n=t.src,e=t.alt,o=Object(a.a)(t,["src","alt"]);return u(l,Object(r.a)({src:n,loading:"lazy",alt:e},o))}},Kwc6:function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return a}));var r=e("zKTv"),a=!0;n.default=r.a},ODXe:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("BsWD");function a(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"X+pl":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author/[slug]",function(){return e("Kwc6")}])},a3WO:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},iNpI:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e("ODXe"),a=e("q1tI"),o=e.n(a),c=e("vOnD"),i=e("YFqc"),u=e.n(i),l=e("KEE8"),s=e("nkNA"),d=e("FUxi"),f=o.a.createElement,p=c.d.a.withConfig({displayName:"article-cardcomponent__StyledArticleCard",componentId:"sc-17xb5kw-0"})(["text-decoration:none;"]),m=Object(c.d)(l.a).withConfig({displayName:"article-cardcomponent__Thumbnail",componentId:"sc-17xb5kw-1"})(["border-radius:5px;width:100%;margin-top:5px;display:block;"]),g=Object(c.d)(d.a).withConfig({displayName:"article-cardcomponent__Description",componentId:"sc-17xb5kw-2"})((function(t){var n=t.theme;return Object(c.c)(["border-radius:5px;font-family:",";color:",";font-weight:normal;"],n.fonts.serif,n.colors.textSecondary)})),h=function(t){var n=t.title,e=t.lede,a=t.url,o=t.images,c=Object(r.a)(o,1)[0];return f("article",null,f(u.a,{href:"/article/[slug]",as:a,passHref:!0},f(p,null,f(s.a,{component:"h2",variant:"h3",gutterBottom:!0},n),f(g,{component:"p",gutterBottom:!0,variant:"h4"},e),f(m,{alt:c.alt,src:c.sizes.small.url}))))}},km4c:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e("q1tI"),a=e.n(r),o=e("vOnD"),c=a.a.createElement,i=o.d.div.withConfig({displayName:"article-listcomponent__StyledArticleList",componentId:"v5r0j6-0"})(["display:grid;grid-column-gap:30px;grid-row-gap:30px;grid-template-columns:1fr 1fr 1fr;@media only screen and (max-width:768px){grid-template-columns:1fr 1fr;}@media only screen and (max-width:550px){grid-template-columns:1fr;}"]),u=function(t){var n=t.children;return c(i,null,n)}},zKTv:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e("wx14"),a=e("q1tI"),o=e.n(a),c=e("YFqc"),i=e.n(c),u=e("pTio"),l=e("nkNA"),s=e("KEE8"),d=e("iNpI"),f=e("km4c"),p=e("Eg1W"),m=e("1wtQ"),g=o.a.createElement,h=function(t){var n=t.articles,e=t.author,a=t.previousPageIndex,c=t.nextPageIndex;return g(o.a.Fragment,null,g(p.a,{title:"".concat(e.name," – ").concat(m.f),contentType:"contributor"}),g(u.a,null,g(l.a,{component:"h1"},g(s.a,{alt:"A photo of ".concat(e.name),src:e.thumbnailUrl}),e.name),g(f.a,null,n.map((function(t,n){return g(d.a,Object(r.a)({},t,{key:n}))}))),null!==a&&g(i.a,{href:"/author/[slug]/[page]",as:"".concat(e.url,"/").concat(a)},g("a",{rel:"prev"},"Previous page")),null!==c&&g(i.a,{href:"/author/[slug]/[page]",as:"".concat(e.url,"/").concat(c)},g("a",{rel:"next"},"Next page"))))}}},[["X+pl",0,1,2,3,4]]]);