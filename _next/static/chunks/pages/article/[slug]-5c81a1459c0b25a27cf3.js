_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"4O7A":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return a("E99q")}])},E99q:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return F}));var n=a("q1tI"),o=a.n(n),r=a("Ff2n"),i=a("vOnD"),c=a("ovZr"),l=o.a.createElement,d=Object(i.d)(c.a).withConfig({displayName:"article-markdowncomponent__StyledArticleMarkdown",componentId:"sc-1mhdma6-0"})((function(e){var t=e.theme;return Object(i.c)(["h1 + p{margin-top:0;line-height:1.3em;margin-bottom:1.8em;strong{display:block;font-family:",";}}h1:first-child + p + figure{margin-left:-40px;margin-right:-40px;@media only screen and (max-width:848px){margin-left:calc(calc(calc(100vw - 688px) / 2) * -1);margin-right:calc(calc(calc(100vw - 688px) / 2) * -1);}@media only screen and (max-width:768px){margin-left:-40px;margin-right:-40px;}@media only screen and (max-width:560px){margin-left:-30px;margin-right:-30px;}@media only screen and (max-width:320px){margin-left:-20px;margin-right:-20px;}figcaption{padding:0 40px;@media only screen and (max-width:848px){padding:0 calc(calc(100vw - 688px) / 2);}@media only screen and (max-width:768px){padding:0 40px;}@media only screen and (max-width:560px){padding:0 30px;}@media only screen and (max-width:320px){padding:0 20px;}}}"],t.fonts.sans)})),p=function(e){var t=e.children,a=Object(r.a)(e,["children"]);return l(d,a,t)},m=a("YFqc"),s=a.n(m),h=a("KEE8"),g=a("nkNA"),u=a("FUxi"),f=o.a.createElement,y=i.d.div.withConfig({displayName:"article-metadatacomponent__StyledContainer",componentId:"sc-1ie2bs3-0"})(["margin-bottom:30px;display:flex;align-items:center;font-size:16px;justify-content:space-between;@media only screen and (max-width:560px){margin-bottom:20px;}& > div{display:flex;align-items:center;margin-right:20px;}"]),x=i.d.a.withConfig({displayName:"article-metadatacomponent__AuthorThumbnailLink",componentId:"sc-1ie2bs3-1"})(["margin-right:15px;"]),b=Object(i.d)(h.a).withConfig({displayName:"article-metadatacomponent__AuthorThumbnail",componentId:"sc-1ie2bs3-2"})(["border-radius:40px;display:block;"]),w=Object(i.d)(g.a).withConfig({displayName:"article-metadatacomponent__AuthorName",componentId:"sc-1ie2bs3-3"})(["a{text-decoration:none;&:hover{text-decoration:underline;}}"]),v=Object(i.d)(u.a).withConfig({displayName:"article-metadatacomponent__Metadata",componentId:"sc-1ie2bs3-4"})((function(e){var t=e.theme;return Object(i.c)(["font-weight:normal;color:",";"],t.colors.textTertiary)})),_=i.d.a.withConfig({displayName:"article-metadatacomponent__CategoryLabel",componentId:"sc-1ie2bs3-5"})((function(e){var t=e.theme;return Object(i.c)(["display:block;padding:3px 5px;text-decoration:none;border-radius:2px;",";color:",";border:solid "," 1px;white-space:nowrap;&:focus,&:hover{background:",";border-color:",";color:#fff;}"],t.typography.h6,t.colors.textTertiary,t.colors.textTertiary,t.colors.primary,t.colors.primary)})),k=function(e){var t=e.publishedAt,a=e.category,n=e.author,o=e.readingTime;return f(y,null,f("div",null,f(s.a,{href:"/author/[slug]",as:n.url,passHref:!0},f(x,{rel:"author"},f(b,{alt:n.image.alt,src:n.image.sizes[100].url,dominantColor:n.image.dominantColor,width:40,height:40}))),f("div",null,f(w,{component:"h3",variant:"h6"},f(s.a,{href:"/author/[slug]",as:n.url},f("a",{rel:"author"},n.name))),f(v,{component:"p",variant:"h6"},t," • ",o))),f(s.a,{href:"/category/[slug]",as:a.url,passHref:!0},f(_,null,a.name)))},O=a("Eg1W"),N=a("1wtQ"),C=a("wx14"),E=a("iNpI"),j=a("km4c"),I=o.a.createElement,A=i.d.div.withConfig({displayName:"article-suggestionscomponent__Container",componentId:"qsiexl-0"})(["box-shadow:rgba(0,0,0,0.08) 0 -1px 0;padding:30px 0;margin-top:30px;"]),T=function(e){var t=e.category,a=e.nextArticles;return I(o.a.Fragment,null,!!a.length&&I(A,null,I(g.a,{component:"h3",variant:"h3",gutterBottom:!0},"More news about"," ",I(s.a,{href:"/category/[slug]",as:t.url},I("a",null,t.name))),I(j.a,null,a.map((function(e,t){return I(E.a,Object(C.a)({},e,{key:t}))})))))},L=o.a.createElement,q=i.d.article.withConfig({displayName:"page-articlecomponent__ArticleContainer",componentId:"sc-1piujbm-0"})(["max-width:688px;margin:0 auto;"]),F=!0;t.default=function(e){var t=e.article,a=t.title,n=t.lede,r=t.coverImage,i=t.publishedAt,c=t.category,l=t.author,d=t.htmlContent,m=t.readingTime,s=t.absoluteUrl,h=t.keywords,g=e.nextArticles;return L(o.a.Fragment,null,L(O.a,{title:"".concat(a," – ").concat(N.f),description:n,author:l.name,image:r.sizes[1600].absoluteUrl,imageAlt:r.alt,url:s,contentType:"article",ogType:"article",keywords:h}),L(q,null,L(k,{publishedAt:i,category:c,author:l,readingTime:m}),L(p,null,d)),L(T,{category:c,nextArticles:g}))}},ovZr:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=a.n(r),c=a("vOnD"),l=a("nT29"),d=i.a.createElement,p=c.d.div.withConfig({displayName:"markdowncomponent__MarkdownContainer",componentId:"sc-18u6t9x-0"})((function(e){var t=e.theme;return Object(c.c)(["word-break:break-word;h1,h2,h3,h4,h5,h6,ul,ol,p,pre,figure{margin:1.8rem 0;ul,ol{margin:0;}}&& > *:last-child{margin-bottom:0;}h1{",";}h2{",";}h3{",";}h4{",";}h5{",";}h6{",";}p{",";}h1:first-child{margin-top:0;margin-bottom:0.3em;",";}figure{div{display:block;position:relative;overflow:hidden;background:#eee;-webkit-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);img{position:absolute;top:0;object-fit:cover;width:100%;height:100%;&.fadeInOnLoad{transition:opacity 0.25s ",";&:not(.hasLoaded){opacity:0;}}}}figcaption{margin-top:10px;",";}}ul,ol{padding:0 20px;}strong{color:",";}a{&:focus,&:hover{color:",";}}blockquote{padding-left:20px;border-left:solid #ccc 3px;p{",";}}code{",";}pre code{",";display:block;padding:20px;}"],t.typography.h1,t.typography.h2,t.typography.h3,t.typography.h4,t.typography.h6,t.typography.h6,t.typography.body,t.typography.h1,l.a,t.typography.caption,t.colors.textPrimary,t.colors.primary,t.typography.quote,t.typography.code,t.typography.code)})),m=function(e){var t=e.children,a=Object(o.a)(e,["children"]),i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=i.current.querySelectorAll("img.fadeInOnLoad");return e.forEach((function(e){if(e.complete)return setTimeout((function(){return e.classList.add("hasLoaded")}),1);e.onload=function(){e.classList.add("hasLoaded")}})),function(){e.forEach((function(e){e.onload=null}))}}),[]),d(p,Object(n.a)({ref:i},a,{dangerouslySetInnerHTML:{__html:t}}))}}},[["4O7A",0,1,2,3,4]]]);