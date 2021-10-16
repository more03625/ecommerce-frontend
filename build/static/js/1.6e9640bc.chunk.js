(this["webpackJsonpecommerce-frontend"]=this["webpackJsonpecommerce-frontend"]||[]).push([[1],{34:function(e,s,a){"use strict";a.d(s,"a",(function(){return c})),a.d(s,"c",(function(){return l})),a.d(s,"b",(function(){return n})),a.d(s,"e",(function(){return i})),a.d(s,"f",(function(){return r})),a.d(s,"d",(function(){return d}));var t=a(35),c=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,l="localhost:3000"===window.location.host?"http://localhost:6363/":"https://store-ecommerce-backend.herokuapp.com/",n={product:"api/products"},i=function(e){return e.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},r=function(e,s){"error"===s?t.b.error(e):t.b.success(e)},d="Something went wrong, Please try again!"},41:function(e,s,a){"use strict";a.d(s,"c",(function(){return c})),a.d(s,"b",(function(){return l})),a.d(s,"a",(function(){return n}));var t=a(13),c=function(e){return{type:t.a.SET_PRODUCTS,payload:e}},l=function(e){return{type:t.a.SELECTED_PRODUCTS,payload:e}},n=function(){return{type:t.a.REMOVE_SELECTED_PRODUCTS}}},50:function(e,s,a){"use strict";var t=a(0),c=a(19),l=a(36),n=a.n(l),i=a(37),r=a(20),d=a(10);function o(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=e[a];return t}function j(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],t=!0,c=!1,l=void 0;try{for(var n,i=e[Symbol.iterator]();!(t=(n=i.next()).done)&&(a.push(n.value),!s||a.length!==s);t=!0);}catch(r){c=!0,l=r}finally{try{t||null==i.return||i.return()}finally{if(c)throw l}}return a}}(e,s)||function(e,s){if(e){if("string"===typeof e)return o(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,s):void 0}}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=a(34),b=a(38),h=a.n(b),x=a(2),p=a(7),g=function(){var e=j(Object(t.useState)({}),2),s=e[0],a=e[1],c=j(Object(t.useState)({}),2),l=(c[0],c[1]),o=j(Object(t.useState)(!1),2),b=(o[0],o[1]),g=(Object(x.f)(),function(e,t){"signin"===t&&a(Object(d.a)(Object(d.a)({},s),{},Object(r.a)({},e.target.name,e.target.value)))}),O=function(){var e=Object(i.a)(n.a.mark((function e(a){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!0),a.preventDefault(),l({}),e.prev=3,!(void 0!=s.email&&""!==s.email&&s.email.match(m.a)?void 0!=s.password&&""!==s.password||(l({password:"Please enter password!"}),0):(l({email:"Please enter valid email!"}),0))){e.next=10;break}return t=m.c+m.b.signIn,e.next=8,h.a.post(t,s);case 8:c=e.sent,console.log("try ===> ",c);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),Object(m.f)(m.d,"error");case 15:b(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(s){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"modal fade",id:"signin-modal",tabIndex:"-1",role:"dialog",children:Object(p.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsxs)("div",{className:"modal-header bg-secondary",children:[Object(p.jsxs)("ul",{className:"nav nav-tabs card-header-tabs",role:"tablist",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)("a",{className:"nav-link fw-medium active",href:"#signin-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"true",children:[Object(p.jsx)("i",{className:"ci-unlocked me-2 mt-n1"}),"Sign in"]})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)("a",{className:"nav-link fw-medium",href:"#signup-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"false",children:[Object(p.jsx)("i",{className:"ci-user me-2 mt-n1"}),"Sign up"]})})]}),Object(p.jsx)("button",{className:"btn-close",type:"button","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(p.jsxs)("div",{className:"modal-body tab-content py-4",children:[Object(p.jsxs)("form",{className:"needs-validation tab-pane fade show active",autoComplete:"off",noValidate:!0,id:"signin-tab",onSubmit:O,children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"si-email",children:"Email address"}),Object(p.jsx)("input",{className:"form-control",type:"email",id:"si-email",name:"email",placeholder:"johndoe@example.com",required:!0,onChange:function(e){return g(e,"signin")}}),Object(p.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid email address."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"si-password",children:"Password"}),Object(p.jsxs)("div",{className:"password-toggle",children:[Object(p.jsx)("input",{className:"form-control",type:"password",name:"password",id:"si-password",required:!0,onChange:function(e){return g(e,"signin")}}),Object(p.jsxs)("label",{className:"password-toggle-btn","aria-label":"Show/hide password",children:[Object(p.jsx)("input",{className:"password-toggle-check",type:"checkbox"}),Object(p.jsx)("span",{className:"password-toggle-indicator"})]})]})]}),Object(p.jsxs)("div",{className:"mb-3 d-flex flex-wrap justify-content-between",children:[Object(p.jsxs)("div",{className:"form-check mb-2",children:[Object(p.jsx)("input",{className:"form-check-input",type:"checkbox",id:"si-remember"}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"si-remember",children:"Remember me"})]}),Object(p.jsx)("a",{className:"fs-sm",href:"#",children:"Forgot password?"})]}),Object(p.jsx)("button",{className:"btn btn-primary btn-shadow d-block w-100",type:"submit",children:"Sign in"})]}),Object(p.jsxs)("form",{className:"needs-validation tab-pane fade",autoComplete:"off",noValidate:!0,id:"signup-tab",children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"su-name",children:"Full name"}),Object(p.jsx)("input",{className:"form-control",type:"text",id:"su-name",placeholder:"John Doe",required:!0}),Object(p.jsx)("div",{className:"invalid-feedback",children:"Please fill in your name."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"su-email",children:"Email address"}),Object(p.jsx)("input",{className:"form-control",type:"email",id:"su-email",placeholder:"johndoe@example.com",required:!0}),Object(p.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid email address."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"su-password",children:"Password"}),Object(p.jsxs)("div",{className:"password-toggle",children:[Object(p.jsx)("input",{className:"form-control",type:"password",id:"su-password",required:!0}),Object(p.jsxs)("label",{className:"password-toggle-btn","aria-label":"Show/hide password",children:[Object(p.jsx)("input",{className:"password-toggle-check",type:"checkbox"}),Object(p.jsx)("span",{className:"password-toggle-indicator"})]})]})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"su-password-confirm",children:"Confirm password"}),Object(p.jsxs)("div",{className:"password-toggle",children:[Object(p.jsx)("input",{className:"form-control",type:"password",id:"su-password-confirm",required:!0}),Object(p.jsxs)("label",{className:"password-toggle-btn","aria-label":"Show/hide password",children:[Object(p.jsx)("input",{className:"password-toggle-check",type:"checkbox"}),Object(p.jsx)("span",{className:"password-toggle-indicator"})]})]})]}),Object(p.jsx)("button",{className:"btn btn-primary btn-shadow d-block w-100",type:"submit",children:"Sign up"})]})]})]})})})})};s.a=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("main",{className:"page-wrapper",children:[Object(p.jsxs)("header",{className:"shadow-sm",children:[Object(p.jsx)("div",{className:"topbar topbar-dark bg-dark",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"topbar-text dropdown d-md-none",children:[Object(p.jsx)("a",{className:"topbar-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:"Useful links"}),Object(p.jsxs)("ul",{className:"dropdown-menu",children:[Object(p.jsx)("li",{children:Object(p.jsxs)("a",{className:"dropdown-item",href:"tel:00331697720",children:[Object(p.jsx)("i",{className:"ci-support text-muted me-2"}),"(+91) 7039192417"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{className:"dropdown-item",href:"order-tracking.html",children:[Object(p.jsx)("i",{className:"ci-location text-muted me-2"}),"Order tracking"]})})]})]}),Object(p.jsxs)("div",{className:"topbar-text text-nowrap d-none d-md-inline-block",children:[Object(p.jsx)("i",{className:"ci-support"}),Object(p.jsx)("span",{className:"text-muted me-1",children:"Support"}),Object(p.jsx)("a",{className:"topbar-link",href:"tel:00331697720",children:"(+91) 7039192417"})]}),Object(p.jsx)("div",{className:"tns-carousel tns-controls-static d-none d-md-block",children:Object(p.jsxs)("div",{className:"tns-carousel-inner","data-carousel-options":'{"mode": "gallery", "nav": false}',children:[Object(p.jsx)("div",{className:"topbar-text",children:"Free shipping for order over $200"}),Object(p.jsx)("div",{className:"topbar-text",children:"We return money within 30 days"}),Object(p.jsx)("div",{className:"topbar-text",children:"Friendly 24/7 customer support"})]})})]})}),Object(p.jsxs)("div",{className:"navbar-sticky bg-light",children:[Object(p.jsx)("div",{className:"navbar navbar-expand-lg navbar-light",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(c.b,{className:"navbar-brand d-none d-sm-block flex-shrink-0",to:"/",children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAABECAYAAABTXorOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDA2NGEzMC0zMzgwLTRmZWYtYjYzMi03MjRhZjM1ZWFlYjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkFFODkwNzBDMTExMTFFOUJFM0VFQ0JDODIzOTFCREQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkFFODkwNkZDMTExMTFFOUJFM0VFQ0JDODIzOTFCREQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQzU2MkNGOTkwMUUxMUU5OTJGN0U4MTgwQjdDNTEwNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQzU2MkNGQTkwMUUxMUU5OTJGN0U4MTgwQjdDNTEwNyIvPiA8L3Jk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",width:"142",alt:"Cartzilla"})}),Object(p.jsx)(c.b,{className:"navbar-brand d-sm-none flex-shrink-0 me-2",to:"/",children:Object(p.jsx)("img",{src:"img/logo-icon.png",width:"74",alt:"Cartzilla"})}),Object(p.jsxs)("div",{className:"input-group d-none d-lg-flex mx-4",children:[Object(p.jsx)("input",{className:"form-control rounded-end pe-5",type:"text",placeholder:"Search for products"}),Object(p.jsx)("i",{className:"ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"})]}),Object(p.jsxs)("div",{className:"navbar-toolbar d-flex flex-shrink-0 align-items-center",children:[Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("a",{className:"navbar-tool navbar-stuck-toggler",href:"#",children:[Object(p.jsx)("span",{className:"navbar-tool-tooltip",children:"Expand menu"}),Object(p.jsx)("div",{className:"navbar-tool-icon-box",children:Object(p.jsx)("i",{className:"navbar-tool-icon ci-menu"})})]}),Object(p.jsxs)("a",{className:"navbar-tool d-none d-lg-flex",href:"account-wishlist.html",children:[Object(p.jsx)("span",{className:"navbar-tool-tooltip",children:"Wishlist"}),Object(p.jsx)("div",{className:"navbar-tool-icon-box",children:Object(p.jsx)("i",{className:"navbar-tool-icon ci-heart"})})]}),Object(p.jsxs)("a",{className:"navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2",href:"#signin-modal","data-bs-toggle":"modal",children:[Object(p.jsx)("div",{className:"navbar-tool-icon-box",children:Object(p.jsx)("i",{className:"navbar-tool-icon ci-user"})}),Object(p.jsxs)("div",{className:"navbar-tool-text ms-n3",children:[Object(p.jsx)("small",{children:"Hello, Sign in"}),"My Account"]})]}),Object(p.jsxs)("div",{className:"navbar-tool dropdown ms-3",children:[Object(p.jsxs)("a",{className:"navbar-tool-icon-box bg-secondary dropdown-toggle",href:"shop-cart.html",children:[Object(p.jsx)("span",{className:"navbar-tool-label",children:"4"}),Object(p.jsx)("i",{className:"navbar-tool-icon ci-cart"})]}),Object(p.jsxs)("a",{className:"navbar-tool-text",href:"shop-cart.html",children:[Object(p.jsx)("small",{children:"My Cart"}),"$265.00"]}),Object(p.jsx)("div",{className:"dropdown-menu dropdown-menu-end",children:Object(p.jsxs)("div",{className:"widget widget-cart px-3 pt-2 pb-3",style:{width:"20rem"},children:[Object(p.jsxs)("div",{style:{height:"15rem"},"data-simplebar":!0,"data-simplebar-auto-hide":"false",children:[Object(p.jsxs)("div",{className:"widget-cart-item pb-2 border-bottom",children:[Object(p.jsx)("button",{className:"btn-close text-danger",type:"button","aria-label":"Remove",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("a",{className:"flex-shrink-0",href:"#",children:Object(p.jsx)("img",{src:"img/shop/cart/widget/01.jpg",width:"64",alt:"Product"})}),Object(p.jsxs)("div",{className:"ps-2",children:[Object(p.jsx)("h6",{className:"widget-product-title",children:Object(p.jsx)("a",{href:"#",children:"Women Colorblock Sneakers"})}),Object(p.jsxs)("div",{className:"widget-product-meta",children:[Object(p.jsxs)("span",{className:"text-accent me-2",children:["$150.",Object(p.jsx)("small",{children:"00"})]}),Object(p.jsx)("span",{className:"text-muted",children:"x 1"})]})]})]})]}),Object(p.jsxs)("div",{className:"widget-cart-item py-2 border-bottom",children:[Object(p.jsx)("button",{className:"btn-close text-danger",type:"button","aria-label":"Remove",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("a",{className:"flex-shrink-0",href:"#",children:Object(p.jsx)("img",{src:"img/shop/cart/widget/04.jpg",width:"64",alt:"Product"})}),Object(p.jsxs)("div",{className:"ps-2",children:[Object(p.jsx)("h6",{className:"widget-product-title",children:Object(p.jsx)("a",{href:"#",children:"Cotton Polo Regular Fit"})}),Object(p.jsxs)("div",{className:"widget-product-meta",children:[Object(p.jsxs)("span",{className:"text-accent me-2",children:["$9.",Object(p.jsx)("small",{children:"00"})]}),Object(p.jsx)("span",{className:"text-muted",children:"x 1"})]})]})]})]})]}),Object(p.jsxs)("div",{className:"d-flex flex-wrap justify-content-between align-items-center py-3",children:[Object(p.jsxs)("div",{className:"fs-sm me-2 py-2",children:[Object(p.jsx)("span",{className:"text-muted",children:"Subtotal:"}),Object(p.jsxs)("span",{className:"text-accent fs-base ms-1",children:["$265.",Object(p.jsx)("small",{children:"00"})]})]}),Object(p.jsxs)("a",{className:"btn btn-outline-secondary btn-sm",href:"shop-cart.html",children:["Expand cart",Object(p.jsx)("i",{className:"ci-arrow-right ms-1 me-n1"})]})]}),Object(p.jsxs)("a",{className:"btn btn-primary btn-sm d-block w-100",href:"#",children:[Object(p.jsx)("i",{className:"ci-card me-2 fs-base align-middle"}),"Checkout"]})]})})]})]})]})}),Object(p.jsx)("div",{className:"navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[Object(p.jsxs)("div",{className:"input-group d-lg-none my-3",children:[Object(p.jsx)("i",{className:"ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"}),Object(p.jsx)("input",{className:"form-control rounded-start",type:"text",placeholder:"Search for products"})]}),Object(p.jsx)("ul",{className:"navbar-nav navbar-mega-nav pe-lg-2 me-lg-2",children:Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsxs)("a",{className:"nav-link dropdown-toggle ps-lg-0",href:"#","data-bs-toggle":"dropdown",children:[Object(p.jsx)("i",{className:"ci-view-grid me-2"}),"Departments"]}),Object(p.jsx)("div",{className:"dropdown-menu px-2 pb-4",children:Object(p.jsxs)("div",{className:"d-flex flex-wrap flex-sm-nowrap",children:[Object(p.jsx)("div",{className:"mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3",children:Object(p.jsxs)("div",{className:"widget widget-links",children:[Object(p.jsx)("a",{className:"d-block overflow-hidden rounded-3 mb-3",href:"#",children:Object(p.jsx)("img",{src:"img/shop/departments/01.jpg",alt:"Clothing"})}),Object(p.jsx)("h6",{className:"fs-base mb-2",children:"Clothing"}),Object(p.jsxs)("ul",{className:"widget-list",children:[Object(p.jsx)("li",{className:"widget-list-item mb-1",children:Object(p.jsx)("a",{className:"widget-list-link",href:"#",children:"Women's clothing"})}),Object(p.jsx)("li",{className:"widget-list-item mb-1",children:Object(p.jsx)("a",{className:"widget-list-link",href:"#",children:"Men's clothing"})}),Object(p.jsx)("li",{className:"widget-list-item mb-1",children:Object(p.jsx)("a",{className:"widget-list-link",href:"#",children:"Kid's clothing"})})]})]})}),Object(p.jsx)("div",{className:"mega-dropdown-column pt-4 px-2 px-lg-3",children:Object(p.jsxs)("div",{className:"widget widget-links",children:[Object(p.jsx)("a",{className:"d-block overflow-hidden rounded-3 mb-3",href:"#",children:Object(p.jsx)("img",{src:"img/shop/departments/02.jpg",alt:"Shoes"})}),Object(p.jsx)("h6",{className:"fs-base mb-2",children:"Shoes"}),Object(p.jsxs)("ul",{className:"widget-list",children:[Object(p.jsx)("li",{className:"widget-list-item mb-1",children:Object(p.jsx)("a",{className:"widget-list-link",href:"#",children:"Women's shoes"})}),Object(p.jsx)("li",{className:"widget-list-item mb-1",children:Object(p.jsx)("a",{className:"widget-list-link",href:"#",children:"Men's shoes"})}),Object(p.jsx)("li",{className:"widget-list-item mb-1",children:Object(p.jsx)("a",{className:"widget-list-link",href:"#",children:"Kid's shoes"})})]})]})})]})})]})}),Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsxs)("li",{className:"nav-item dropdown active",children:[Object(p.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:"Home"}),Object(p.jsx)("ul",{className:"dropdown-menu",children:Object(p.jsxs)("li",{className:"dropdown position-static mb-0",children:[Object(p.jsxs)("a",{className:"dropdown-item py-2 border-bottom",href:"home-electronics-store.html",children:[Object(p.jsx)("span",{className:"d-block text-heading",children:"Electronics Store"}),Object(p.jsx)("small",{className:"d-block text-muted",children:"Slider + Promo banners"})]}),Object(p.jsx)("div",{className:"dropdown-menu h-100 animation-none mt-0 p-3",children:Object(p.jsx)("a",{className:"d-block",href:"home-electronics-store.html",style:{width:"250px"},children:Object(p.jsx)("img",{src:"img/home/preview/th03.jpg",alt:"Electronics Store"})})})]})})]}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:"Shop"}),Object(p.jsx)("div",{className:"dropdown-menu p-0",children:Object(p.jsx)("div",{className:"d-flex flex-wrap flex-sm-nowrap px-2",children:Object(p.jsx)("div",{className:"mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3",children:Object(p.jsxs)("div",{className:"widget widget-links mb-4",children:[Object(p.jsx)("h6",{className:"fs-base mb-3",children:"Shop layouts"}),Object(p.jsx)("ul",{className:"widget-list",children:Object(p.jsx)("li",{className:"widget-list-item",children:Object(p.jsx)("a",{className:"widget-list-link",href:"shop-grid-ls.html",children:"Shop Grid - Left Sidebar"})})})]})})})})]}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown","data-bs-auto-close":"outside",children:"Account"}),Object(p.jsxs)("ul",{className:"dropdown-menu",children:[Object(p.jsxs)("li",{className:"dropdown",children:[Object(p.jsx)("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:"Shop User Account"}),Object(p.jsx)("ul",{className:"dropdown-menu",children:Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"dropdown-item",href:"account-orders.html",children:"Orders History"})})})]}),Object(p.jsx)("li",{className:"dropdown",children:Object(p.jsx)("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:"Vendor Dashboard"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"dropdown-item",href:"account-signin.html",children:"Sign In / Sign Up"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"dropdown-item",href:"account-password-recovery.html",children:"Password Recovery"})})]})]}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:"Docs / Components"}),Object(p.jsxs)("ul",{className:"dropdown-menu",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"dropdown-item",href:"docs/dev-setup.html",children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"lead text-muted pt-1",children:Object(p.jsx)("i",{className:"ci-book"})}),Object(p.jsxs)("div",{className:"ms-2",children:[Object(p.jsx)("span",{className:"d-block text-heading",children:"Documentation"}),Object(p.jsx)("small",{className:"d-block text-muted",children:"Kick-start customization"})]})]})})}),Object(p.jsx)("li",{className:"dropdown-divider"}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"dropdown-item",href:"docs/changelog.html",children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"lead text-muted pt-1",children:Object(p.jsx)("i",{className:"ci-edit"})}),Object(p.jsxs)("div",{className:"ms-2",children:[Object(p.jsxs)("span",{className:"d-block text-heading",children:["Changelog",Object(p.jsx)("span",{className:"badge bg-success ms-2",children:"v2.3.0"})]}),Object(p.jsx)("small",{className:"d-block text-muted",children:"Regular updates"})]})]})})})]})]})]})]})})})]})]}),Object(p.jsx)(g,{})]})})}}}]);
//# sourceMappingURL=1.6e9640bc.chunk.js.map