(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["_myorders"],{af948:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main-layout",{attrs:{"settings-breadcrumbs":e.settingsBreadcrumbs,total:e.orders.total},scopedSlots:e._u([{key:"content",fn:function(){return[a("section",{staticClass:"my-orders"},[e.loading?a("loading-overlay"):e._e(),a("order-filter",{on:{updateSearch:e.onUpdateSearch}}),e.orders.total||e.loading?e._e():a("div",{staticClass:"no-results"},[a("img",{staticClass:"no-results__img",attrs:{src:r("c307"),alt:"No Data"}}),a("h1",{staticClass:"no-results__title no-results__title_question"},[e._v(" "+e._s(e.getEmptyTitleDescription().title)+" ")]),a("p",{staticClass:"no-results__description"},[e._v(" "+e._s(e.getEmptyTitleDescription().description)+" ")])]),a("div",{staticClass:"orders__list"},e._l(e.orders.data,(function(t,r){return a("div",{key:r,staticClass:"wrapper"},[a("orders-card",{attrs:{order:t,index:r,offset:e.offset,page:e.page,mode:"list"}})],1)})),0)],1),a("cashback")]},proxy:!0}])})},s=[],n=(r("a9e3"),r("d3b7"),r("5530")),i=(r("96cf"),r("1da1")),c=r("8cd1"),o=r("713b"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("aside",{staticClass:"discount"},[e._m(0),r("div",{staticClass:"discount-redirect"},[e._m(1),r("router-link",{staticClass:"discount-redirect__link",attrs:{to:{name:"friends",params:{page:1}}}},[e._v(" Get it ")])],1)])])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"discount-desc"},[r("ul",{staticClass:"discount-dots"},[r("li",{staticClass:"discount-dots__item"}),r("li",{staticClass:"discount-dots__item"}),r("li",{staticClass:"discount-dots__item"}),r("li",{staticClass:"discount-dots__item"})]),r("h2",{staticClass:"discount-desc__val"},[e._v(" 10% ")]),r("h5",{staticClass:"discount-desc__about"},[e._v(" On every order placed by your friend ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"discount-dots"},[r("li",{staticClass:"discount-dots__item"}),r("li",{staticClass:"discount-dots__item"}),r("li",{staticClass:"discount-dots__item"}),r("li",{staticClass:"discount-dots__item"})])}],d=r("2877"),h={},p=Object(d["a"])(h,u,l,!1,null,null,null),f=p.exports,b=r("83af"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-filter"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"filter-container"},[r("div",{staticClass:"filter-container__item"},[r("form-select",{attrs:{items:e.searchStatusOptions,field:e.searchReturnObject.status,label:"Order Status",name:"Order Status"},on:{"update:field":function(t){return e.$set(e.searchReturnObject,"status",t)}},model:{value:e.searchReturnObject.status,callback:function(t){e.$set(e.searchReturnObject,"status",t)},expression:"searchReturnObject.status"}})],1),r("div",{staticClass:"filter-container__item"},[r("form-input",{attrs:{field:e.searchReturnObject.query,legend:"Search query",placeholder:"Search for",name:"Search",type:"text"},on:{"update:field":function(t){return e.$set(e.searchReturnObject,"query",t)}},model:{value:e.searchReturnObject.query,callback:function(t){e.$set(e.searchReturnObject,"query",t)},expression:"searchReturnObject.query"}}),e.focusState||e.mobileState?r("form-select",{attrs:{label:"Search for",name:"Search for",items:e.searchFieldOptions,field:e.searchReturnObject.search_by},on:{"update:field":function(t){return e.$set(e.searchReturnObject,"search_by",t)}},model:{value:e.searchReturnObject.search_by,callback:function(t){e.$set(e.searchReturnObject,"search_by",t)},expression:"searchReturnObject.search_by"}}):e._e()],1),r("div",{staticClass:"filter-container__item"},[r("form-select",{attrs:{items:e.rowsPerPageList,field:e.searchReturnObject.per_page,label:"Per page",name:"per page"},on:{"update:field":function(t){return e.$set(e.searchReturnObject,"per_page",t)}},model:{value:e.searchReturnObject.per_page,callback:function(t){e.$set(e.searchReturnObject,"per_page",t)},expression:"searchReturnObject.per_page"}})],1)])])])},m=[],y=r("2ef0"),g=void 0,v={data:function(){return{rowsPerPageList:[{value:5,text:"5"},{value:10,text:"10"},{value:25,text:"25"},{value:50,text:"50"},{value:100,text:"100"}],focusState:"open",mobileState:!1,page:null,query:"",search_by:"title",searchFieldOptions:[{value:"title",text:"Title"},{value:"orderid",text:"Order ID"}],searchStatusOptions:[{value:"any",text:"All"},{value:"PAID",text:"Paid (not assigned to writer)"},{value:"UNPAID",text:"Unpaid"},{value:"PENDING",text:"In Progress (assigned to writer)"},{value:"COMPLETE",text:"Completed"},{value:"REVISION",text:"In Revision"}],searchReturnObject:{status:"any",search_by:"title",query:"",per_page:"10"}}},watch:{searchReturnObject:{immediate:!1,handler:function(e){this.$emit("updateSearch",e)},deep:!0}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initQueryParams();case 2:e.initMobileState(),e.query=e.searchReturnObject.query,window.addEventListener("resize",e.initMobileState);case 5:case"end":return t.stop()}}),t)})))()},methods:{initQueryParams:function(){var e=this;return new Promise((function(t){e.$route.query.length>0&&(e.searchReturnObject.status=e.$route.query.status.length>0?e.$route.query.status:"any",e.searchReturnObject.search_by=e.$route.query.search_by.length>0?e.$route.query.search_by:"title",e.searchReturnObject.query=e.$route.query.query.length>0?e.$route.query.query:"",e.$forceUpdate(),t())}))},debounceSearchInput:Object(y["debounce"])((function(e){g.searchReturnObject.query=e}),1e3),searchFocus:function(e){this.focusState="open"===e},initMobileState:function(){this.mobileState=window.innerWidth<996}}},O=v,j=Object(d["a"])(O,_,m,!1,null,null,null),C=j.exports,R=r("533f"),x=r("41bd"),q=r("5ff3"),w={components:{Cashback:f,MainLayout:o["a"],OrdersCard:b["a"],LoadingOverlay:R["a"],OrderFilter:C},mixins:[q["a"]],data:function(){return{orders:{},page:1,loading:!0,searchObject:{}}},computed:{settingsBreadcrumbs:function(){return{title:"My Orders",steps:[{title:"Home",url:"/"},{title:"Account",url:"/cp/account"},{title:"My Orders",url:"/cp/orders"}],excerpt:'You can unfold the details by clicking the arrow, then go to the order details screen by clicking "more info". There, you have a range of tools to control your order.',additionalClass:"bc-horizontal bc-tickets"}},offset:function(){return this.orders.per_page*(this.page-1)}},mounted:function(){var e=this;x["a"].$on("DeletedOrder",(function(){e.getData()})),this.getData()},methods:{getEmptyTitleDescription:function(){var e={};switch("any"!==this.searchObject.status&&this.searchObject.status||(e.title="You need to place your first order"),this.searchObject.status){case"PENDING":e.title="No data",e.description="You have no orders that are currently in progress";break;case"COMPLETE":e.title="No data",e.description="You have no orders that are currently in progress";break;case"any":e.title="No orders",e.description="Start off by placing an order";break;default:e.title="No data",e.description="You have no orders in ".concat(this.searchObject.status," status")}return e},getData:function(){var e=this;c["a"].post("/api/cp/order/list-orders",this.searchObject).then((function(t){e.orders=t.data})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1}))},initQueryParams:function(){var e=this;return new Promise((function(t){var r=e.$route.query;r.page&&(e.searchObject.page=r.page?r.page:1,e.page=Number(r.page)),e.searchObject.status=r.status?r.status:"any",e.searchObject.search_by=r.search_by?r.search_by:"title",e.searchObject.query=r.query?r.query:"",e.searchObject.per_page=r.per_page?r.per_page:10,t()}))},onUpdateSearch:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.page=1,t.$router.push({name:"orders",query:Object(n["a"])({},e)}),t.initQueryParams(),t.getData();case 4:case"end":return r.stop()}}),r)})))()}}},S=w,$=Object(d["a"])(S,a,s,!1,null,null,null);t["default"]=$.exports},c307:function(e,t,r){e.exports=r.p+"img/acc_nodata.7798a384.svg"}}]);
//# sourceMappingURL=_myorders.a531352f.js.map