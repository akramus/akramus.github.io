webpackJsonp([0x8a675b55feca],{116:function(e,t){"use strict";function r(e,t,i){if("string"!=typeof t){if(d){var s=f(t);s&&s!==d&&r(e,s,i)}var p=c(t);o&&(p=p.concat(o(t)));for(var m=0;m<p.length;++m){var y=p[m];if(!(a[y]||n[y]||i&&i[y])){var g=u(t,y);try{l(e,y,g)}catch(e){}}}return e}return e}var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,c=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,d=f&&f(Object);e.exports=r},243:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=r(2),l=a(n),c=r(25),o=a(c);r(382),t.default=function(e){var t=e.data;return l.default.createElement("section",null,l.default.createElement("div",{className:"container"},l.default.createElement("header",{className:"major"},l.default.createElement("h2",null,"Blog")),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return l.default.createElement("section",{key:t.id,className:"blog-preview"},l.default.createElement("article",null,l.default.createElement(o.default,{to:t.frontmatter.path},l.default.createElement("h3",null,t.frontmatter.title)),l.default.createElement("h4",null,t.frontmatter.date),l.default.createElement("p",null,t.excerpt)))})))};t.query="** extracted graphql fragment **"},382:function(e,t){}});
//# sourceMappingURL=component---src-pages-blog-index-js-4a21e6d001ca859f7316.js.map