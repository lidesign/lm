!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){},r={},i=[],l=[];function a(e,t){var n,a,s,u,c=l;for(u=arguments.length;u-- >2;)i.push(arguments[u]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((a=i.pop())&&void 0!==a.pop)for(u=a.length;u--;)i.push(a[u]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&n?c[c.length-1]+=a:c===l?c=[a]:c.push(a),n=s;var p=new o;return p.nodeName=e,p.children=c,p.attributes=null==t?void 0:t,p.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(p),p}function s(e,t){for(var n in t)e[n]=t[n];return e}function u(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==f.push(e)&&(r.debounceRendering||c)(m)}function m(){for(var e;e=f.pop();)e._dirty&&M(e)}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=s({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)u(n,null),u(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===p.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function y(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var g=[],k=0,N=!1,x=!1;function C(){for(var e;e=g.shift();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){k++||(N=null!=r&&void 0!==r.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var l=S(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--k||(x=!1,i||C()),l}function S(e,t,n,o,r){var i=e,l=N;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0))),i.__preactattr_=!0,i;var a,s,u=t.nodeName;if("function"==typeof u)return function(e,t,n,o){var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,u=_(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(B(r,u,3,n,o),e=r.base):(i&&!a&&(L(i),e=l=null),r=U(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,l=null),B(r,u,1,n,o),e=r.base,l&&e!==l&&(l._component=null,P(l,!1)));return e}(e,t,n,o);if(N="svg"===u||"foreignObject"!==u&&N,u=String(u),(!e||!v(e,u))&&(a=u,(s=N?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=s,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0)}var c=i.firstChild,p=i.__preactattr_,f=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,m=d.length;m--;)p[d[m].name]=d[m].value}return!x&&f&&1===f.length&&"string"==typeof f[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=f[0]&&(c.nodeValue=f[0]):(f&&f.length||null!=c)&&function(e,t,n,o,r){var i,l,a,s,u,c=e.childNodes,p=[],f={},d=0,m=0,_=c.length,h=0,y=t?t.length:0;if(0!==_)for(var g=0;g<_;g++){var k=c[g],N=k.__preactattr_,x=y&&N?k._component?k._component.__key:N.key:null;null!=x?(d++,f[x]=k):(N||(void 0!==k.splitText?!r||k.nodeValue.trim():r))&&(p[h++]=k)}if(0!==y)for(var g=0;g<y;g++){s=t[g],u=null;var x=s.key;if(null!=x)d&&void 0!==f[x]&&(u=f[x],f[x]=void 0,d--);else if(m<h)for(i=m;i<h;i++)if(void 0!==p[i]&&(C=l=p[i],O=r,"string"==typeof(w=s)||"number"==typeof w?void 0!==C.splitText:"string"==typeof w.nodeName?!C._componentConstructor&&v(C,w.nodeName):O||C._componentConstructor===w.nodeName)){u=l,p[i]=void 0,i===h-1&&h--,i===m&&m++;break}u=S(u,s,n,o),a=c[g],u&&u!==e&&u!==a&&(null==a?e.appendChild(u):u===a.nextSibling?b(a):e.insertBefore(u,a))}var C,w,O;if(d)for(var g in f)void 0!==f[g]&&P(f[g],!1);for(;m<=h;)void 0!==(u=p[h--])&&P(u,!1)}(i,f,n,o,x||null!=p.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,N);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],N)}(i,t.attributes,p),N=l,i}function P(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&u(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||b(e),O(e))}function O(e){for(e=e.lastChild;e;){var t=e.previousSibling;P(e,!0),e=t}}var j=[];function U(e,t,n){var o,r=j.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),E.call(o,t,n)):((o=new E(t,n)).constructor=e,o.render=T);r--;)if(j[r].constructor===e)return o.nextBase=j[r].nextBase,j.splice(r,1),o;return o}function T(e,t,n){return this.constructor(e,n)}function B(e,t,n,o,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?d(e):M(e,1,i)),u(e.__ref,e))}function M(e,t,n,o){if(!e._disable){var i,l,a,u=e.props,c=e.state,p=e.context,f=e.prevProps||u,d=e.prevState||c,m=e.prevContext||p,v=e.base,b=e.nextBase,h=v||b,y=e._component,N=!1,x=m;if(e.constructor.getDerivedStateFromProps&&(c=s(s({},c),e.constructor.getDerivedStateFromProps(u,c)),e.state=c),v&&(e.props=f,e.state=d,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,p)?N=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,p),e.props=u,e.state=c,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!N){i=e.render(u,c,p),e.getChildContext&&(p=s(s({},p),e.getChildContext())),v&&e.getSnapshotBeforeUpdate&&(x=e.getSnapshotBeforeUpdate(f,d));var S,O,j=i&&i.nodeName;if("function"==typeof j){var T=_(i);(l=y)&&l.constructor===j&&T.key==l.__key?B(l,T,1,p,!1):(S=l,e._component=l=U(j,T,p),l.nextBase=l.nextBase||b,l._parentComponent=e,B(l,T,0,p,!1),M(l,1,n,!0)),O=l.base}else a=h,(S=y)&&(a=e._component=null),(h||1===t)&&(a&&(a._component=null),O=w(a,i,p,n||!v,h&&h.parentNode,!0));if(h&&O!==h&&l!==y){var E=h.parentNode;E&&O!==E&&(E.replaceChild(O,h),S||(h._component=null,P(h,!1)))}if(S&&L(S),e.base=O,O&&!o){for(var W=e,D=e;D=D._parentComponent;)(W=D).base=O;O._component=W,O._componentConstructor=W.constructor}}for(!v||n?g.push(e):N||(e.componentDidUpdate&&e.componentDidUpdate(f,d,x),r.afterUpdate&&r.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);k||o||C()}}function L(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?L(n):t&&(null!=t.__preactattr_&&u(t.__preactattr_.ref,null),e.nextBase=t,b(t),j.push(e),O(t)),u(e.__ref,null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function W(e,t,n){return w(n,e,{},!1,t,!1)}s(E.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=s(s({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),M(this,2)},render:function(){}});function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,H(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,E),n=t,(o=[{key:"render",value:function(){return a("div",{className:"bookmark-menu",ref:function(e){return window.bookmark=e}},a("header",{className:"bookmark-menu__header"},a("span",null,"Bookmarks"),a("button",{className:"button is-ghost"},a("span",{className:"ion ion-trash-b"}))),a("section",{className:"bookmark-menu__content"},a("ul",{className:"bookmark-menu__list"},a("li",{className:"bookmark-menu__list-item"},a("div",{className:"bookmark-menu__list-content"},a("h6",null,"bookmark.title"),a("p",null,"bookmark.excerpt")),a("a",{className:"bookmark-menu__list-delete"},a("span",{className:"ion ion-close-circled"})))),a("ul",{className:"bookmark-menu__list","v-else":!0},a("li",{className:"bookmark-menu__list-item is-null"},"No post have been saved."))),a("footer",{className:"bookmark-menu__footer"},a("a",{className:"button is-block is-ghost",href:"#bookmarks"},"View All")))}}])&&V(n.prototype,o),r&&V(n,r),t}();W(a(z,null),document.getElementById("js-bookmark"))}]);