module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([0],{100:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},101:function(e,t,n){"use strict";var r=n(22),a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,m=new s.default;function y(r){a=e((0,f.default)(m)),b.canUseDOM?t.call(r,a):n&&(a=n(a))}var b=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentWillMount",value:function(){m.add(this),y(this)}},{key:"componentDidUpdate",value:function(){y(this)}},{key:"componentWillUnmount",value:function(){m.delete(this),y(this)}},{key:"render",value:function(){return p.default.createElement(r,null,this.props.children)}}],[{key:"peek",value:function(){return a}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=a;return a=void 0,m.clear(),e}}]),t}(p.Component);return Object.defineProperty(b,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"SideEffect(".concat((0,d.getDisplayName)(r),")")}),Object.defineProperty(b,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:r.contextTypes}),Object.defineProperty(b,"canUseDOM",{configurable:!0,enumerable:!0,writable:!0,value:"undefined"!=typeof window}),b}};var o=a(n(19)),i=a(n(10)),l=a(n(11)),c=a(n(20)),u=a(n(21)),f=a(n(45)),s=a(n(31)),p=r(n(0)),d=n(28)},102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(33);t.default=function(){return a.a.createElement(o.g,null,a.a.createElement(o.g.Group,{align:o.a.LEFT},a.a.createElement(o.g.Heading,null,"Timeline"),a.a.createElement(o.g.Divider,null),a.a.createElement(o.b,{className:"bp3-minimal",icon:"home",text:"Home"}),a.a.createElement(o.b,{className:"bp3-minimal",icon:"document",text:"Files"})))}},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(33),i=this;t.default=function(){return a.a.createElement(o.c,null,a.a.createElement(o.f,null,a.a.createElement(o.f.Item,{icon:"new-text-box",onClick:i.handleClick,text:"New text box"}),a.a.createElement(o.f.Item,{icon:"new-object",onClick:i.handleClick,text:"New object"}),a.a.createElement(o.f.Item,{icon:"new-link",onClick:i.handleClick,text:"New link"}),a.a.createElement(o.f.Divider,null),a.a.createElement(o.f.Item,{text:"Settings...",icon:"cog"},a.a.createElement(o.f.Item,{icon:"tick",text:"Save on edit"}),a.a.createElement(o.f.Item,{icon:"blank",text:"Compile on edit"}))))}},256:function(e,t,n){e.exports=n(257)},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(258),i=n.n(o),l=n(102),c=(n(103),n(83));t.default=function(){return a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement("title",null,"Timeline"),a.a.createElement("link",{href:"https://unpkg.com/normalize.css",rel:"stylesheet"}),a.a.createElement("link",{href:"https://unpkg.com/@blueprintjs/core/lib/css/blueprint.css",rel:"stylesheet"}),a.a.createElement("link",{href:"https://unpkg.com/@blueprintjs/icons/lib/css/blueprint-icons.css",rel:"stylesheet"})),a.a.createElement("body",{style:{margin:"0 auto",maxWidth:"1080px"}},a.a.createElement(l.default,null),a.a.createElement(c.default,null)))}},258:function(e,t,n){e.exports=n(93)},45:function(e,t,n){var r=n(94),a=n(95),o=n(100);e.exports=function(e){return r(e)||a(e)||o()}},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(33);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return a.a.createElement(o.j,{animate:!0,vertical:!0,key:"vertical"},a.a.createElement(o.i,{id:"1",title:a.a.createElement(o.b,{minimal:!0},"test1"),panel:a.a.createElement("p",null,"Welcome next!!")}),a.a.createElement(o.i,{id:"2",title:"test2",panel:a.a.createElement(o.h,{intent:o.e.PRIMARY})}),a.a.createElement(o.i,{id:"3",title:"test3",panel:a.a.createElement(o.b,{icon:"refresh",intent:"success",text:"button content"})}),a.a.createElement(o.i,{id:"4",title:"test4"}))}}])&&l(n.prototype,i),u&&l(n,u),t}();t.default=u},93:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=y,t.default=void 0;var a=r(n(31)),o=r(n(45)),i=r(n(19)),l=r(n(10)),c=r(n(11)),u=r(n(20)),f=r(n(21)),s=r(n(0)),p=r(n(32)),d=r(n(101)),m=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return null}}]),t}(s.default.Component);function y(){return[s.default.createElement("meta",{charSet:"utf-8",className:"next-head"})]}Object.defineProperty(m,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{headManager:p.default.object}});var b=["name","httpEquiv","charSet","itemProp","property"],h=["article:tag"];var v=(0,d.default)(function(e){var t,n,r,i,l;return(t=e.map(function(e){return e.props.children}).map(function(e){return s.default.Children.toArray(e)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return s.default.Fragment&&t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse()).concat.apply(t,(0,o.default)(y())).filter(function(e){return!!e}).filter((n=new a.default,r=new a.default,i=new a.default,l={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(n.has(e.key))return!1;n.add(e.key)}switch(e.type){case"title":case"base":if(r.has(e.type))return!1;r.add(e.type);break;case"meta":for(var t=0,o=b.length;t<o;t++){var c=b[t];if(e.props.hasOwnProperty(c))if("charSet"===c){if(i.has(c))return!1;i.add(c)}else{var u=e.props[c],f=l[c]||new a.default;if(f.has(u)&&-1===h.indexOf(u))return!1;f.add(u),l[c]=f}}}return!0})).reverse().map(function(e){var t=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";return s.default.cloneElement(e,{className:t})})},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(m);t.default=v},94:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},95:function(e,t,n){var r=n(96),a=n(97);e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},96:function(e,t,n){e.exports=n(92)},97:function(e,t,n){e.exports=n(98)},98:function(e,t,n){n(30),n(27),e.exports=n(99)},99:function(e,t,n){var r=n(41),a=n(6)("iterator"),o=n(26);e.exports=n(4).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}}},[256]).default}});