(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10,11],{117:function(e,a,t){"use strict";var r=t(3),l=t(7),n=t(0),s=t.n(n),c=t(109),i=t(110),m=t(108),o=t(113),u=t(56),f=t.n(u),d=t(114);function g(e){var a=e.to,t=e.href,n=e.label,c=e.prependBaseUrlToHref,m=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(o.a)(a),f=Object(o.a)(t,{forcePrependBaseUrl:!0});return s.a.createElement(i.a,Object(r.a)({className:"footer__link-item"},t?{href:c?f:t}:{to:u},m),n)}var E=function(e){var a=e.sources,t=e.alt;return s.a.createElement(d.a,{className:"footer__logo",alt:t,sources:a})};a.a=function(){var e=Object(m.useThemeConfig)().footer,a=e||{},t=a.copyright,r=a.links,l=void 0===r?[]:r,n=a.logo,u=void 0===n?{}:n,d={light:Object(o.a)(u.src),dark:Object(o.a)(u.srcDark||u.src)};return e?s.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},s.a.createElement("div",{className:"container"},l&&l.length>0&&s.a.createElement("div",{className:"row footer__links"},l.map((function(e,a){return s.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?s.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?s.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?s.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):s.a.createElement("li",{key:e.href||e.to,className:"footer__item"},s.a.createElement(g,e))}))):null)}))),(u||t)&&s.a.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&s.a.createElement("div",{className:"margin-bottom--sm"},u.href?s.a.createElement(i.a,{href:u.href,className:f.a.footerLogoLink},s.a.createElement(E,{alt:u.alt,sources:d})):s.a.createElement(E,{alt:u.alt,sources:d})),t?s.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},121:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r=t(0),l=t.n(r),n=t(109),s=t(110),c=t(61),i=t.n(c);function m(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(n.a)(i.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},l.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},71:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(115),s=t(110),c=t(121),i=t(111),m=t(108);a.default=function(e){var a=e.tags,t=e.sidebar,r={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);r[a]=r[a]||[],r[a].push(e)}));var o=Object.entries(r).sort((function(e,a){var t=e[0],r=a[0];return t===r?0:t>r?1:-1})).map((function(e){var t=e[0],r=e[1];return l.a.createElement("div",{key:t},l.a.createElement("h3",null,t),r.map((function(e){return l.a.createElement(s.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),l.a.createElement("hr",null))})).filter((function(e){return null!=e}));return l.a.createElement(n.a,{title:"Tags",description:"Blog Tags",wrapperClassName:m.ThemeClassNames.wrapper.blogPages,pageClassName:m.ThemeClassNames.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(c.a,{sidebar:t})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(i.a,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),l.a.createElement("div",{className:"margin-vert--lg"},o)))))}}}]);