(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["_friends-register"],{3410:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main-layout",{attrs:{"settings-breadcrumbs":e.settingsBreadcrumbs},scopedSlots:e._u([{key:"content",fn:function(){return[i("profile-form-layout",{attrs:{friends:!0,"show-modal":e.showModal},on:{validate:e.validate},scopedSlots:e._u([{key:"headerIcon",fn:function(){return[i("email-outline")]},proxy:!0},{key:"form",fn:function(){return[i("div",{staticClass:"profile-info__form mt-7"},[i("div",{staticClass:"invite-friends_body-attention"},[e._v(" To invite your friend, enter your friend's e-mail here. We will send an e-mail invitation and once your friend registers on our site, you will see the status update to REGISTERED in the table on the previous screen. It is all automatic! ")]),i("div",{staticClass:"profile-info__form-group"},[i("div",{staticClass:"profile-info__form-row"},[i("div",{staticClass:"profile-info__col50"},[i("form-input",{attrs:{legend:"Email address","prepend-icon":"EmailOutlineIcon",type:"text",name:"email",field:e.emailValue,errors:e.validationMessage(e.$v.email),"is-valid":e.$v.email.$dirty&&!e.$v.email.$anyError},on:{"update:field":function(t){e.emailValue=t}},nativeOn:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.emailValue,callback:function(t){e.emailValue=t},expression:"emailValue"}})],1),i("div",{staticClass:"profile-info__col50"},[i("form-input",{attrs:{legend:"Email address","prepend-icon":"EmailOutlineIcon",type:"text",name:"email",field:e.email2,errors:e.validationMessage(e.$v.email2),"is-valid":e.$v.email2.$dirty&&!e.$v.email2.$anyError},on:{"update:field":function(t){e.email2=t}},nativeOn:{input:function(t){return e.$v.email2.$touch()},blur:function(t){return e.$v.email2.$touch()}},model:{value:e.$v.email2.$model,callback:function(t){e.$set(e.$v.email2,"$model",t)},expression:"$v.email2.$model"}})],1)])])])]},proxy:!0}])})]},proxy:!0}])})},a=[],r=(i("96cf"),i("1da1")),o=i("5530"),s=i("713b"),l=i("5c2f"),u=i("ded4"),d=i("6785"),m=i("41bd"),c=i("2ef0"),f=i("1dce"),p=i("6cf0"),v=i("376d"),b={required:function(){return"Required"},email:function(){return"Must be a valid e-mail"},emailExists:function(){return"E-mail already exists"},sameAs:function(){return"Emails are not equal"}},g=(i("d3b7"),i("b5ae")),h={email:{required:g["required"],email:g["email"],emailExists:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.$v.email.required&&t.$v.email.email){i.next=2;break}return i.abrupt("return",!0);case 2:return i.abrupt("return",new Promise((function(i){var n=t;t.checkEmail({email:e}).then((function(){i(!0)})).catch((function(){n.$v.email.$params.emailExists=!1,i(!1)}))})));case 3:case"end":return i.stop()}}),i)})))()}},email2:{required:g["required"],email:g["email"],sameAs:Object(g["sameAs"])("email")}},w=i("2f62"),y=i("3adc"),$=Object(w["a"])("client"),x=$.mapActions,k={components:{MainLayout:s["a"],ProfileFormLayout:l["a"],EmailOutline:u["a"],FormInput:d["a"]},mixins:[f["validationMixin"],p["a"]],validations:Object(o["a"])({},h),data:function(){return{emailValue:"",email:"",email2:"",showModal:!1}},computed:{settingsBreadcrumbs:function(){return{title:"Add A Friend",steps:[{title:"Home",url:"/"},{title:"Account",url:"/cp/account"},{title:"My Friends",url:"/cp/friends"},{title:"Add",url:"/cp/friends-new"}],additionalClass:"bc-wrapper bc-wrapper_user-account bc-wrapper--setting bc-right-bottom bc-horizontal"}}},watch:{emailValue:Object(c["debounce"])((function(e){this.email=e}),300)},mounted:function(){var e=this;m["a"].$on("saveSettings",(function(){e.validate()}))},beforeDestroy:function(){m["a"].$off("saveSettings")},methods:Object(o["a"])(Object(o["a"])({},x([y["b"],y["d"]])),{},{checkEmail:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t[y["b"]](e);case 2:case"end":return i.stop()}}),i)})))()},addFriend:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t[y["d"]](e);case 2:case"end":return i.stop()}}),i)})))()},submit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e,i.loadingSubmit=!0,t.prev=2,t.next=5,e.addFriend({email:i.email});case 5:e.$router.push({name:"friends"}),m["a"].$emit("showSnackBar","A friends has been added.","success"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),m["a"].$emit("showSnackBar",t.t0.response.data.message,"error");case 12:return t.prev=12,i.loadingSubmit=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()},validationMessage:Object(v["validationMessage"])(b)})},_=k,E=i("2877"),O=Object(E["a"])(_,n,a,!1,null,null,null);t["default"]=O.exports},ded4:function(e,t,i){"use strict";var n=i("bf6e"),a={name:"mdi-email-outline",props:{width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},size:{type:[Number,String],default:24},viewBox:{type:[String],default:"0 0 24 24"},xmlns:{type:String,default:"http://www.w3.org/2000/svg"},ariaLabel:{type:String,default:"EmailOutline icon"},role:{type:String,default:"img"},title:{type:String,required:!1},spin:{type:Boolean,default:!1}}};const r=a;var o=function(e,t){var i=t._c;return i("span",{class:[t.data.staticClass,"mdi","mdi-email-outline",t.props.spin?"mdi-spin":void 0],attrs:{role:t.props.role,"aria-label":t.props.ariaLabel}},[i("svg",{attrs:{fill:"currentColor",width:t.props.width||t.props.size,height:t.props.height||t.props.size,viewBox:t.props.viewBox,xmlns:t.props.xmlns}},[t.title?i("title",[t._v(t._s(t.title))]):t._e(),t._v(" "),i("path",{attrs:{d:"M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"}})])])},s=[];o._withStripped=!0;const l=function(e){e&&e("data-v-a6fb989e_0",{source:".mdi > svg {\n  vertical-align: middle;\n}\n.mdi.mdi-spin > svg {\n  -webkit-animation: mdi-spin 2s infinite linear;\n     -moz-animation: mdi-spin 2s infinite linear;\n          animation: mdi-spin 2s infinite linear;\n}\n@-webkit-keyframes mdi-spin {\n0% {\n      -webkit-transform: rotate(0deg);\n         -moz-transform: rotate(0deg);\n              transform: rotate(0deg);\n}\n100% {\n      -webkit-transform: rotate(360deg);\n         -moz-transform: rotate(360deg);\n              transform: rotate(360deg);\n}\n}\n@keyframes mdi-spin {\n0% {\n      -webkit-transform: rotate(0deg);\n         -moz-transform: rotate(0deg);\n              transform: rotate(0deg);\n}\n100% {\n      -webkit-transform: rotate(360deg);\n         -moz-transform: rotate(360deg);\n              transform: rotate(360deg);\n}\n}",map:void 0,media:void 0})},u=void 0,d=void 0,m=!0,c=Object(n["b"])({render:o,staticRenderFns:s},l,r,u,m,d,!1,n["a"],void 0,void 0);t["a"]=c}}]);
//# sourceMappingURL=_friends-register.4d6f0fb3.js.map