(this["webpackJsonpecommerce-frontend"]=this["webpackJsonpecommerce-frontend"]||[]).push([[2],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={SET_PRODUCTS:"SET_PRODUCTS",SELECTED_PRODUCTS:"SELECTED_PRODUCTS",REMOVE_SELECTED_PRODUCTS:"REMOVE_SELECTED_PRODUCTS"}},21:function(e,t,n){"use strict";n(0);var c=n(2);t.a=function(e){var t=e.size;return Object(c.jsx)(c.Fragment,{children:t?Object(c.jsx)("div",{className:"spinner-border ".concat(t),role:"status"}):Object(c.jsx)("div",{className:"screen-loader",children:Object(c.jsx)("div",{className:"spinner-border",role:"status"})})})}},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),s=n(18),i=n(3),l=n(21),u=n(2),d=function(){var e=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,83))})),t=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,61))})),a=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10),n.e(8)]).then(n.bind(null,85))})),r=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,88))})),o=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,86))})),d=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,87))})),j=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,84))}));return Object(u.jsx)(s.a,{children:Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)(l.a,{}),children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:e}),Object(u.jsx)(i.a,{exact:!0,path:"/product",component:t}),Object(u.jsx)(i.a,{exact:!0,path:"/product/:slug/:productID",component:a}),Object(u.jsx)(i.a,{exact:!0,path:"/admin/dashboard",component:o}),Object(u.jsx)(i.a,{exact:!0,path:"/admin/products",component:j}),Object(u.jsx)(i.a,{exact:!0,path:"/admin/add-product",component:d}),Object(u.jsx)(i.a,{exact:!0,path:"/admin/edit-product/:productID",component:d}),Object(u.jsx)(i.a,{path:"*",component:r})]})})})},j=n(20),O=n(14),b=n(9),p=n(11),E={products:[]},h=Object(O.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return n===p.a.SET_PRODUCTS?Object(b.a)(Object(b.a)({},e),{},{products:c}):e},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case p.a.SELECTED_PRODUCTS:return Object(b.a)(Object(b.a)({},e),c);case p.a.REMOVE_SELECTED_PRODUCTS:return{};default:return e}}}),m=h,x=Object(O.b)(m,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j.a,{store:x,children:Object(u.jsx)(d,{})})}),document.getElementById("root"))}},[[33,3,4]]]);
//# sourceMappingURL=main.902d4a1b.chunk.js.map