(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{3999:function(e,t,c){Promise.resolve().then(c.bind(c,7989))},7989:function(e,t,c){"use strict";c.r(t),c.d(t,{default:function(){return CategoryPage}});var l=c(7437),n=c(7547),r=c(8926),s=c(3478),a=c(1919),d=c(7077),i=c(8591),o=c(4874),u=c(8910),x=c(1396),m=c.n(x),h=c(7042),g=c(690);function CategoryPage(e){let{params:{slug:t}}=e,{theme:c}=(0,g.C)(e=>e.theme),{data:x,isLoading:j}=(0,o.a)(["get by category"],()=>i.M.getByCategorySlug(t.toString()),{select:e=>{let{data:t}=e;return t}});return(0,l.jsxs)("div",{className:(0,h.Z)({"bg-white":"white"===c,"bg-block":"black"===c}),children:[(0,l.jsxs)("div",{className:"ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20",children:[(0,l.jsx)(a.Z,{}),(0,l.jsx)(n.Z,{}),(0,l.jsxs)("div",{className:"mt-28 grid gap-7 tel:flex tel:flex-col",children:[(0,l.jsx)("div",{children:(0,l.jsx)(m(),{href:"/",children:(0,l.jsxs)("div",{className:"text-blue text-lg flex items-center mb-10",children:[(0,l.jsx)("span",{className:"text-blue mr-3",children:(0,l.jsx)(u.U1p,{})}),(0,l.jsx)("button",{children:"Вернуться назад"})]})})}),(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)(d.Z,{name:"Категория: ".concat(t.toString())})}),(0,l.jsx)("div",{className:"grid gap-7 mt-20 grid-cols-4 s9:grid-cols-1 px:grid-cols-2",children:j?(0,l.jsx)("div",{className:"text-lg text-center",children:"Идет загрузка"}):(null==x?void 0:x.length)?x.map(e=>(0,l.jsx)(r.Z,{card:e},e.id)):(0,l.jsx)("div",{className:(0,h.Z)("text-2xl text-center",{"text-white":"black"===c,"text-block":"white"===c}),children:"Товаров такой категории нет :("})})]})]}),(0,l.jsx)(s.Z,{})]})}},8591:function(e,t,c){"use strict";c.d(t,{M:function(){return r}});var l=c(5957);let n="products",r={async getAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{data:t}=await (0,l.v)({url:n,method:"GET",params:e});return t},getById:async e=>(0,l.v)({url:"".concat(n,"/by-id/").concat(e),method:"GET"}),deleteProduct:async e=>(0,l.Z)({url:"".concat(n,"/").concat(e),method:"DELETE"}),createProduct:async()=>(0,l.Z)({url:"".concat(n,"/add"),method:"POST"}),updateProduct:async(e,t)=>(0,l.Z)({url:"".concat(n,"/").concat(e),method:"PUT",data:t}),getByCategorySlug:async e=>(0,l.v)({url:"".concat(n,"/slug/").concat(e),method:"GET"})}}},function(e){e.O(0,[582,306,447,420,712,400,83,691,529,164,484,524,971,864,744],function(){return e(e.s=3999)}),_N_E=e.O()}]);