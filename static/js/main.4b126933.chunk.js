(this["webpackJsonpltd-app"]=this["webpackJsonpltd-app"]||[]).push([[0],{51:function(n,t,e){},79:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),a=e(19),o=e.n(a),i=(e(51),e(3)),s=e(20),d=e(6),p=e(14),u=e(4),b=e(5);function x(){var n=Object(u.a)(["\n   padding: 5px;\n   margin:0 auto;\n   display:flex;\n   img{\n      max-width:400px;\n      margin-right:20px;\n   }\n   div{\n      max-width:700px;\n      margin:0 auto;\n      p{\n         color: #DC3E31;\n         margin-bottom:40px;\n         font-size: 28px;\n         font-family: 'Circe Bold',sans-serif;\n      }\n      a{\n         font-weight: 700;\n         color: white;\n         text-decoration: none;\n         padding: .8em 1em calc(.8em + 3px);\n         border-radius: 3px;\n         background: rgb(64,199,129);\n         box-shadow: 0 -3px rgb(53,167,110) inset;\n         transition: 0.2s;\n         cursor:pointer;\n         } \n         a:hover { background: rgb(53, 167, 110); }\n         a:active {\n         background: rgb(33,147,90);\n         box-shadow: 0 3px rgb(33,147,90) inset;\n         }\n   }\n"]);return x=function(){return n},n}var l=b.a.div(x()),j=e.p+"static/media/Spin-1s-200px.04b0a9f6.svg",f=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:j,alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})})},h=function(){var n=Object(d.c)((function(n){return n.productsReducer})),t=n.isLoading,e=n.products,c=n.selectedProductId,a=e.filter((function(n){return n.id===c})),o=Object(s.a)(a,1)[0];return Object(r.jsx)(r.Fragment,{children:t?Object(r.jsx)(f,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.b,{to:"/",children:Object(r.jsx)("div",{className:"back",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0432\u044b\u0431\u043e\u0440\u0443"})}),Object(r.jsxs)(l,{children:[Object(r.jsx)("img",{src:o.image,alt:"product"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:o.title}),Object(r.jsx)("h4",{children:o.description}),Object(r.jsxs)("p",{children:[o.price," $"]}),Object(r.jsx)("a",{children:"\u041a\u0443\u043f\u0438\u0442\u044c \u0432 1 \u043a\u043b\u0438\u043a"})]})]})]})})};function g(){var n=Object(u.a)(["\n  margin-bottom:30px;\n  padding:0 15px;\n  display:flex;\n  \n"]);return g=function(){return n},n}var O=b.a.div(g()),v=e(8),m=e.n(v),y=e(17),w=e(21),k=e.n(w),C=function(){return Object(y.a)(m.a.mark((function n(){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.a.get("https://fakestoreapi.com/products");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))()},T=function(n){return Object(y.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://fakestoreapi.com/products".concat("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"!==n?"/category/".concat(n):""));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},R=function(n){return Object(y.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://fakestoreapi.com/products/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},D="SET_PRODUCTS",L="SET_PRODUCT_BY_ID",E="START_LOADING",S="SET_CATEGORY",z="SELECT_PRODUCT",F=function(n){return{type:S,payload:n}},_=e.p+"static/media/dropDownArrow.7ebb6912.svg";function I(){var n=Object(u.a)(["\n   position: relative;\n   display: inline-block;\n   margin-right:10px;\n   .dropbtn {      \n      background-color: inherit;\n      color: black;\n      padding: 16px;\n      font-size: 16px;\n      border: 1px solid  #3f51b5;\n      cursor: pointer;\n      border-radius:5px;\n      i{\n         background-image:url(","); \n         width:16px; \n         height:16px; \n         display:inline-block;\n         vertical-align:bottom;\n      }\n   }\n  .dropdown-content {\n      display: none;\n      position: absolute;\n      background-color: #f9f9f9;\n      min-width: 160px;\n      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n      z-index: 1;\n   }\n\n   .dropdown-content span {\n      color: black;\n      padding: 12px 16px;\n      text-decoration: none;\n      display: block;\n      cursor:pointer;\n   }\n\n   .dropdown-content span:hover {background-color: #f1f1f1}\n\n   :hover .dropdown-content {\n      display: block;\n   }\n\n   :hover .dropbtn {\n      /* background-color: #3e8e41; */\n   }\n\n"]);return I=function(){return n},n}var N=b.a.div(I(),_),P=function(){var n=Object(d.b)(),t=function(t){var e,r=t.currentTarget.innerHTML;n((e=r,function(){var n=Object(y.a)(m.a.mark((function n(t){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:E}),n.next=3,T(e);case 3:r=n.sent,t({type:D,payload:r}),t(F(e));case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()))},e=Object(d.c)((function(n){return n.productsReducer})),c=e.activeCategory,a=e.categories;return Object(r.jsxs)(N,{children:[Object(r.jsxs)("button",{className:"dropbtn",children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"===c?"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c":c," ",Object(r.jsx)("i",{})]}),Object(r.jsx)("div",{className:"dropdown-content",children:a.map((function(n){return Object(r.jsx)("span",{onClick:t,children:n},n)}))})]})},U=e.p+"static/media/search-solid.cc51b702.svg";function A(){var n=Object(u.a)(["\n   div{\n      position:relative;\n      width:200px;\n      :before{\n         position: absolute;\n         content:'';\n         z-index:2;\n         background:  url(",") 0 0 no-repeat;\n         top:15px;\n         left: 5%;\n         width:20px;\n         height:20px;\n         cursor:pointer;\n      }\n   }\n   input{\n      position: relative;\n      width: 100%;\n      padding: 16px 0 16px 42px;\n      border: 1px solid  #3f51b5;\n      border-radius: 4px;\n      font-size:16px;  \n   }\n"]);return A=function(){return n},n}var B=b.a.div(A(),U),G=function(){var n=Object(d.b)(),t=Object(c.useState)(""),e=Object(s.a)(t,2),a=e[0],o=e[1],i=Object(d.c)((function(n){return n.productsReducer})).products;return Object(r.jsxs)(B,{children:[Object(r.jsx)("div",{onClick:function(){var t=i.filter((function(n){return n.title.toUpperCase().includes(a.toUpperCase())}));n({type:D,payload:t})}}),Object(r.jsx)("input",{type:"text",onChange:function(n){o(n.currentTarget.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e..."})]})},J=function(){return Object(r.jsxs)(O,{children:[Object(r.jsx)(P,{}),Object(r.jsx)(G,{})]})},M=e(9);function Y(){var n=Object(u.a)(["\n   padding: 0 15px; \n   column-count:4;\n   column-gap: 2em; \n"]);return Y=function(){return n},n}var $=b.a.div(Y());function H(){var n=Object(u.a)(["\n  display: inline-block;\n  margin: .5em 0 1em;\n  box-shadow: 0px 0px 5px 5px #3f51b5;\n  border-radius: 20px;\n  overflow:hidden;\n  div{\n     padding:2px;\n     margin-bottom: 5px;\n   img{\n      width: 100%;\n   }\n  }  \n  a{     \n   text-decoration:none;\n   h3{\n      padding: 0px 15px 0;\n      font-size: 14px;\n      line-height: 16px;\n      text-transform: uppercase;\n      color: #454545;\n      margin:0;      \n      cursor:pointer;\n   }\n  } \n   .category{\n      margin-top:2px;\n      padding: 0px 15px 0;\n   }\n   p{\n      font-family: 'Circe Regular',sans-serif;\n      padding:5px 15px 10px;\n      color: #DC3E31;\n      margin-bottom:10px;\n      font-size: 20px;\n   }\n"]);return H=function(){return n},n}var W=b.a.div(H()),q=function(n){var t=Object(d.b)();return Object(r.jsxs)(W,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:n.image,alt:""})}),Object(r.jsx)(p.b,{to:"/product/".concat(n.id),children:Object(r.jsx)("h3",{onClick:function(){var e,r;t((e=n.id,function(){var n=Object(y.a)(m.a.mark((function n(t){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:E}),n.next=3,R(e);case 3:r=n.sent,t({type:L,payload:r});case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())),t((r=n.id,function(n){n({type:z,payload:r})}))},children:n.title})}),Object(r.jsxs)("div",{className:"category",children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f - ",n.category]}),Object(r.jsxs)("p",{children:["\u0426\u0435\u043d\u0430 - ",n.price,"$"]})]})},K=function(){var n=Object(d.c)((function(n){return n.productsReducer})),t=n.products,e=n.isLoading,a=Object(d.b)();return Object(c.useEffect)((function(){a({type:E}),a(function(){var n=Object(y.a)(m.a.mark((function n(t){var e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C();case 2:e=n.sent,t({type:D,payload:e});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}),[]),Object(r.jsx)($,{children:e?Object(r.jsx)(f,{}):t.map((function(n){return Object(r.jsx)(q,Object(M.a)(Object(M.a)({},n),{},{children:n.category}),"".concat(n,"_").concat(n.id))}))})};function Q(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(J,{}),Object(r.jsx)(K,{})]})}function V(){var n=Object(u.a)([" \n  font-size:20px;\n"]);return V=function(){return n},n}function X(){var n=Object(u.a)(["\n  min-height:64px;\n  padding: 0 24px;     \n  max-width:170px;\n  color:#fff;\n  a{\n    color:#fff;\n    text-decoration:none;\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(u.a)(["\n   color: #fff;\n   background-color: #3f51b5;\n   position: block;\n   top:0;\n   width: 100%;\n   display: flex;\n   box-sizing: border-box;\n   flex-shrink: 0;\n   flex-direction: column;  \n"]);return Z=function(){return n},n}var nn=b.a.header(Z()),tn=b.a.div(X()),en=b.a.h3(V());function rn(){return Object(r.jsx)(nn,{children:Object(r.jsx)(tn,{children:Object(r.jsx)(p.b,{to:"/",children:Object(r.jsx)(en,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})})})})}function cn(){var n=Object(u.a)(["\n  max-width: 1500px;\n  margin: 0 auto;\n  padding: 0 15px;\n  margin-top: 10px;\n  padding:10px;\n  a{\n    text-decoration:none;\n    color:black;\n    .back{\n    margin-bottom:30px;\n    border: 1px solid #3f51b5;\n    border-radius:20px;\n    padding:5px;\n    width:180px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n  }\n  }\n"]);return cn=function(){return n},n}var an=b.a.div(cn()),on=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(rn,{}),Object(r.jsx)(an,{children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/",exact:!0,component:Q}),Object(r.jsx)(i.a,{path:"/product/:productId",component:h}),Object(r.jsx)(i.a,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})},sn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,80)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),a(n),o(n)}))},dn=e(15),pn={products:[],isLoading:!0,categories:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435","men clothing","jewelery","electronics","women clothing"],activeCategory:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"},un=Object(dn.combineReducers)({productsReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(M.a)(Object(M.a)({},n),{},{products:t.payload,isLoading:!1});case E:return Object(M.a)(Object(M.a)({},n),{},{isLoading:!0});case L:var e=t.payload;return Object(M.a)(Object(M.a)({},n),{},{isLoading:!1,products:n.products.map((function(n){return n.id===e.id?e:n}))});case S:return Object(M.a)(Object(M.a)({},n),{},{activeCategory:t.payload});case z:return Object(M.a)(Object(M.a)({},n),{},{selectedProductId:t.payload});default:return n}}}),bn=e(44),xn=e(45),ln=Object(dn.createStore)(un,Object(bn.composeWithDevTools)(Object(dn.applyMiddleware)(xn.a)));o.a.render(Object(r.jsx)(p.a,{children:Object(r.jsx)(d.a,{store:ln,children:Object(r.jsx)(on,{})})}),document.getElementById("root")),sn()}},[[79,1,2]]]);
//# sourceMappingURL=main.4b126933.chunk.js.map