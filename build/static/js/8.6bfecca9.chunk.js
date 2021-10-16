(this["webpackJsonpecommerce-frontend"]=this["webpackJsonpecommerce-frontend"]||[]).push([[8],{36:function(e,t,c){"use strict";c.d(t,"c",(function(){return s})),c.d(t,"b",(function(){return r})),c.d(t,"a",(function(){return n}));var a=c(11),s=function(e){return{type:a.a.SET_PRODUCTS,payload:e}},r=function(e){return{type:a.a.SELECTED_PRODUCTS,payload:e}},n=function(){return{type:a.a.REMOVE_SELECTED_PRODUCTS}}},74:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(43),r=c(38),n=c.n(r),i=c(39),l=c(40),d=c.n(l),o=c(37),j=c(3),b=c(35),m=c(19),u=c(2),h=function(){var e=Object(m.c)((function(e){return e.product})),t=(e._id,e.title,e.image,e.price),c=e.description;e.categories,e.createdAt,e.updatedAt;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"col-lg-5 pt-4 pt-lg-0",children:Object(u.jsxs)("div",{className:"product-details ms-auto pb-3",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[Object(u.jsx)("a",{href:"#reviews","data-scroll":!0,children:Object(u.jsx)("div",{className:"star-rating"})}),Object(u.jsx)("button",{className:"btn-wishlist me-0 me-lg-n3",type:"button","data-bs-toggle":"tooltip",title:"Add to wishlist",children:Object(u.jsx)("i",{className:"ci-heart"})})]}),Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsxs)("span",{className:"h3 fw-normal text-accent me-1",children:["\u20b9 ",t]})}),Object(u.jsxs)("div",{className:"fs-sm mb-4",children:[Object(u.jsx)("span",{className:"text-heading fw-medium me-1",children:"Color:"}),Object(u.jsx)("span",{className:"text-muted",id:"colorOption",children:"Red/Dark blue/White"})]}),Object(u.jsx)("form",{className:"mb-grid-gutter",method:"post",children:Object(u.jsxs)("div",{className:"mb-3 d-flex align-items-center",children:[Object(u.jsxs)("select",{className:"form-select me-3",style:{width:"5rem"},children:[Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"})]}),Object(u.jsxs)("button",{className:"btn btn-primary btn-shadow d-block w-100",type:"submit",children:[Object(u.jsx)("i",{className:"ci-cart fs-lg me-2"}),"Add to Cart"]})]})}),Object(u.jsx)("div",{className:"accordion mb-4",id:"productPanels",children:Object(u.jsxs)("div",{className:"accordion-item",children:[Object(u.jsx)("h3",{className:"accordion-header",children:Object(u.jsxs)("a",{className:"accordion-button",href:"#productInfo",role:"button","data-bs-toggle":"collapse","aria-expanded":"true","aria-controls":"productInfo",children:[Object(u.jsx)("i",{className:"ci-announcement text-muted fs-lg align-middle mt-n1 me-2"}),"Product info"]})}),Object(u.jsx)("div",{className:"accordion-collapse collapse show",id:"productInfo","data-bs-parent":"#productPanels",children:Object(u.jsxs)("div",{className:"accordion-body",children:[Object(u.jsx)("h6",{className:"fs-sm mb-2",children:"Description"}),c]})})]})}),Object(u.jsx)("label",{className:"form-label d-inline-block align-middle my-2 me-3",children:"Share:"}),Object(u.jsxs)("a",{target:"_blank",className:"btn-share btn-twitter me-2 my-2",href:"https://twitter.com/share?url=".concat(window.location.href),children:[Object(u.jsx)("i",{className:"ci-twitter"}),"Twitter"]}),Object(u.jsxs)("a",{target:"_blank",className:"btn-share btn-facebook my-2",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(window.location.href),children:[Object(u.jsx)("i",{className:"ci-facebook"}),"Facebook"]})]})})})},x=c(36),p=c(18),O=function(){var e,t=Object(m.c)((function(e){return e.product})),c=(t._id,t.title);t.image,t.price,t.description,t.categories,t.createdAt,t.updatedAt;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"page-title-overlap bg-dark pt-4",children:Object(u.jsxs)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:[Object(u.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsxs)("ol",{className:"breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start",children:[Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsxs)(p.b,{className:"text-nowrap",to:"/",children:[Object(u.jsx)("i",{className:"ci-home"}),"Home"]})}),Object(u.jsx)("li",{className:"breadcrumb-item text-nowrap",children:Object(u.jsx)("a",{href:"#",children:"Product"})}),Object(u.jsx)("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page",children:(null===(e=Object(b.e)(c))||void 0===e?void 0:e.slice(.25))+"..."})]})})}),Object(u.jsx)("div",{className:"order-lg-1 pe-lg-4 text-center text-lg-start",children:Object(u.jsx)("h1",{className:"h3 text-light mb-0",children:c})})]})})})},f=c(20),g=function(){var e=Object(j.g)().productID,t=Object(m.b)(),c=Object(m.c)((function(e){return e.product})),s=(c._id,c.title),r=c.image,l=(c.price,c.description,c.categories,c.createdAt,c.updatedAt,function(){var c=Object(i.a)(n.a.mark((function c(){var a,s;return n.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a=b.c+b.b.product+"/find/"+e,c.next=4,d.a.get(a);case 4:(s=c.sent).data.error?Object(b.f)(s.data.title,"error"):t(Object(x.b)(s.data.data)),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(0),Object(b.f)(b.d,"error");case 11:case"end":return c.stop()}}),c,null,[[0,8]])})));return function(){return c.apply(this,arguments)}}());return Object(a.useEffect)((function(){return e&&""!==e&&l(),function(){t(Object(x.a)())}}),[e]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(o.a,{}),0===Object.keys(c).length?Object(u.jsx)(f.a,{}):Object(u.jsx)("div",{className:"bg-light shadow-lg rounded-3 px-4 py-3 mb-5",children:Object(u.jsx)("div",{className:"px-lg-3",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-7 pe-lg-0 pt-lg-4",children:Object(u.jsxs)("div",{className:"product-gallery justify-content-center",children:[Object(u.jsx)("img",{className:"image-zoom",src:r,alt:s,style:{maxHeight:"500px",objectFit:"contain"}}),Object(u.jsx)("div",{className:"image-zoom-pane"})]})}),Object(u.jsx)(h,{})]})})})]})]})};t.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{}),Object(u.jsx)(g,{})]})}}}]);
//# sourceMappingURL=8.6bfecca9.chunk.js.map