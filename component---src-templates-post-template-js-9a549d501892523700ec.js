(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(157),c=a(32),i=(a(25),a(169),a(211)),s=a(191),u=a(212),l=a.n(u),d=function(e){var t=e.data.site.siteMetadata.author;return o.a.createElement("div",{className:l.a.author},o.a.createElement("p",{className:l.a.author__bio},t.bio,o.a.createElement("a",{className:l.a["author__bio-twitter"],href:Object(s.a)("twitter",t.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},o.a.createElement("strong",null,t.name)," on Twitter")))},m=function(e){return o.a.createElement(c.StaticQuery,{query:"2015307863",render:function(t){return o.a.createElement(d,Object.assign({},e,{data:t}))},data:i})},b=a(213),p=a(214),f=a.n(p),h=function(e){var t=e.data,a=e.postTitle,n=e.postSlug,r=t.site.siteMetadata,c=r.siteUrl,i=r.disqusShortname;return i?o.a.createElement(f.a,{shortname:i,identifier:a,title:a,url:c+n}):null},g=function(e){return o.a.createElement(c.StaticQuery,{query:"1989642023",render:function(t){return o.a.createElement(h,Object.assign({},e,{data:t}))},data:b})},_=a(216),w=a.n(_),v=function(e){var t=e.body,a=e.title;return o.a.createElement("div",{className:w.a.content},o.a.createElement("h1",{className:w.a.content__title},a),o.a.createElement("div",{className:w.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},y=a(168),E=a.n(y),M=a(218),k=a.n(M),T=function(e){var t=e.date;return o.a.createElement("div",{className:k.a.meta},o.a.createElement("p",{className:k.a.meta__date},"Published ",E()(t).format("D MMM YYYY")))},x=a(219),N=a.n(x),P=function(e){var t=e.tags,a=e.tagSlugs;return o.a.createElement("div",{className:N.a.tags},o.a.createElement("ul",{className:N.a.tags__list},a.map(function(e,a){return o.a.createElement("li",{className:N.a["tags__list-item"],key:t[a]},o.a.createElement(c.Link,{to:e,className:N.a["tags__list-item-link"]},t[a]))})))},O=a(6),S=a.n(O),C=(o.a.Component,a(220)),j=a.n(C),q=function(e){var t=e.post,a=t.frontmatter,n=a.tags,r=a.title,i=a.date,s=t.html,u=t.fields.tagSlugs;return o.a.createElement("div",{className:j.a.post},o.a.createElement(c.Link,{className:j.a["post__home-button"],to:"/"},"All Articles"),o.a.createElement("div",{className:j.a.post__content},o.a.createElement(v,{body:s,title:r})),o.a.createElement("div",{className:j.a.post__footer},o.a.createElement(T,{date:i}),o.a.createElement(P,{tags:n,tagSlugs:u}),o.a.createElement(m,null)),o.a.createElement("div",{className:j.a.post__comments},o.a.createElement(g,{postSlug:t.fields.slug,postTitle:t.frontmatter.title})))};a.d(t,"query",function(){return A});var A="2204190620";t.default=function(e){var t=e.data,a=t.site.siteMetadata,n=a.title,c=a.subtitle,i=t.markdownRemark.frontmatter,s=i.title,u=i.description,l=null!==u?u:c;return o.a.createElement(r.a,{title:s+" - "+n,description:l},o.a.createElement(q,{post:t.markdownRemark}))}},157:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(192),c=a.n(r),i=a(170),s=a.n(i),u=function(e){var t=e.children,a=e.title,n=e.description;return o.a.createElement("div",{className:s.a.layout},o.a.createElement(c.a,null,o.a.createElement("title",null,a),o.a.createElement("meta",{name:"description",content:n})),t)};a.d(t,"a",function(){return u})},161:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},o={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},170:function(e,t,a){e.exports={carbonads:"Layout-module--carbonads--ZJLWB","carbon-wrap":"Layout-module--carbon-wrap--3TC32","carbon-img":"Layout-module--carbon-img--wzozF","carbon-text":"Layout-module--carbon-text--3PX0l","carbon-poweredby":"Layout-module--carbon-poweredby--efjbI",layout:"Layout-module--layout--3Pyz6"}},191:function(e,t,a){"use strict";var n=a(161),o=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"telegram":t=n.a.TELEGRAM;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;default:t={}}return t},r=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"telegram":a="telegram:"+t;break;case"email":a="mailto:"+t;break;default:a=t}return a};a.d(t,"b",function(){return o}),a.d(t,"a",function(){return r})},211:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"Tigran Hakobyan",bio:"Long-form thoughts on building software, programming and developer tools",contacts:{twitter:"@tiggreen"}}}}}}},212:function(e,t,a){e.exports={carbonads:"Author-module--carbonads--3b1Yk","carbon-wrap":"Author-module--carbon-wrap--3tww7","carbon-img":"Author-module--carbon-img--XFBjY","carbon-text":"Author-module--carbon-text--xunRw","carbon-poweredby":"Author-module--carbon-poweredby--1vEuk",author:"Author-module--author--2Yefr","author__bio-twitter":"Author-module--author__bio-twitter--n-O9n"}},213:function(e){e.exports={data:{site:{siteMetadata:{disqusShortname:"",url:"https://tik.dev"}}}}},214:function(e,t,a){"use strict";e.exports=a(215)},215:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=i(a(0)),c=i(a(1));function i(e){return e&&e.__esModule?e:{default:e}}var s=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function l(e,t){var a=t.onNewComment,n=t.language,o=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var r in o)e.page[r]=o[r];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,a){return s.some(function(e){return e===a})?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))},{});return r.default.createElement("div",t,r.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};s.forEach(function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){l(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){l(this,t)},this.addDisqusScript())}}]),t}();d.displayName="DisqusThread",d.propTypes={id:c.default.string,shortname:c.default.string.isRequired,identifier:c.default.string,title:c.default.string,url:c.default.string,category_id:c.default.string,onNewComment:c.default.func,language:c.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d},216:function(e,t,a){e.exports={carbonads:"Content-module--carbonads--2PQKI","carbon-wrap":"Content-module--carbon-wrap--3hsOv","carbon-img":"Content-module--carbon-img--2mgAM","carbon-text":"Content-module--carbon-text--2B9dS","carbon-poweredby":"Content-module--carbon-poweredby--3EZcb",content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-","gatsby-highlight":"Content-module--gatsby-highlight--2GXS_"}},218:function(e,t,a){e.exports={carbonads:"Meta-module--carbonads--2MvqY","carbon-wrap":"Meta-module--carbon-wrap--1yg3l","carbon-img":"Meta-module--carbon-img--3na4i","carbon-text":"Meta-module--carbon-text--1Afin","carbon-poweredby":"Meta-module--carbon-poweredby--3vUTQ",meta__date:"Meta-module--meta__date--29eD7"}},219:function(e,t,a){e.exports={carbonads:"Tags-module--carbonads--jw9jN","carbon-wrap":"Tags-module--carbon-wrap--oriwv","carbon-img":"Tags-module--carbon-img--1u7hn","carbon-text":"Tags-module--carbon-text--1sPPJ","carbon-poweredby":"Tags-module--carbon-poweredby--14VWw",tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},220:function(e,t,a){e.exports={carbonads:"Post-module--carbonads--1Jvr2","carbon-wrap":"Post-module--carbon-wrap--2C9H5","carbon-img":"Post-module--carbon-img--22Rhl","carbon-text":"Post-module--carbon-text--3XIZ5","carbon-poweredby":"Post-module--carbon-poweredby--3uZc9",post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-9a549d501892523700ec.js.map