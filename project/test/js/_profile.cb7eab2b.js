(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["_profile"],{"290d":function(e,t,a){},"3b42":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main-layout",{attrs:{"settings-breadcrumbs":e.settingsBreadcrumbs},scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"profile-header-block"},[a("header",{staticClass:"profile-header-block__header"},[a("h2",[e._v("Your Information")])]),a("div",{staticClass:"profile-header-block__body"},[a("div",{staticClass:"profile-header-block__col50"},[a("div",{staticClass:"profile-header-block__inner-row"},[a("p",{staticClass:"profile-header-block--label"},[e._v(" Withdrawal method: ")]),a("p",{staticClass:"profile-header-block--value"},[a("b",[e._v(e._s(e.aff_paymethod)),"paypal"==e.aff_paymethod?a("span",{staticClass:"phonetic"},[e._v(",")]):e._e()])]),"paypal"==e.aff_paymethod?a("p",{staticClass:"profile-header-block--value ellipse"},[e._v(" "+e._s(e.aff_paypal_email)+" ")]):e._e(),a("custom-button",{attrs:{small:"",hover:"",width:"50px",height:"28px"},on:{"on-btn-click":function(t){return e.$router.push({name:"profile_payment-method"})}}},[a("pencil")],1)],1),a("div",{staticClass:"profile-header-block__inner-row"},[a("p",{staticClass:"profile-header-block--label"},[e._v(" Preferred writers: ")]),a("p",{staticClass:"profile-header-block--value"},[a("span",[e._v(e._s(e.preferred_writers.length)+" preferred ")]),a("span",[e._v(" "+e._s(e.blocked_writers.length)+" blocked")])]),a("custom-button",{attrs:{small:"",hover:"",width:"50px",height:"28px"},on:{"on-btn-click":function(t){return e.$router.push({name:"profile_writers"})}}},[a("pencil")],1)],1),a("div",{staticClass:"v-diver"}),a("div",{staticClass:"profile-header-block__inner-row account-settings_checkboxes"},[a("p",{staticClass:"profile-header-block--value"},[a("form-checkbox",{attrs:{color:"orange darken-2",label:"Allow phone calls from Support Team"},on:{input:e.submit},model:{value:e.chk_calls,callback:function(t){e.chk_calls=t},expression:"chk_calls"}}),a("form-checkbox",{attrs:{color:"orange darken-2",label:"Allow e-mail notifications (transactional e-mails)"},on:{input:e.submit},model:{value:e.chk_email_notifications,callback:function(t){e.chk_email_notifications=t},expression:"chk_email_notifications"}}),a("form-checkbox",{attrs:{color:"orange darken-2",label:"Agree to receive e-mails (newsletter, discount codes, promotional materials related to our services etc.)"},on:{input:e.submit},model:{value:e.chk_email_marketing,callback:function(t){e.chk_email_marketing=t},expression:"chk_email_marketing"}})],1)])]),a("div",{staticClass:"profile-header-block__col50"},[a("div",{staticClass:"profile-header-block__inner-row"},[a("p",{staticClass:"profile-header-block--label"},[e._v(" Account name: ")]),a("p",{staticClass:"profile-header-block--value profile-header-block--value_username"},[e._v(" "+e._s(e.firstname)+" "+e._s(e.lastname)+" ")])]),a("div",{staticClass:"profile-header-block__inner-row"},[a("p",{staticClass:"profile-header-block--label"},[e._v(" Email: ")]),a("p",{staticClass:"profile-header-block--value"},[e._v(" "+e._s(e.email)+" ")]),a("custom-button",{attrs:{small:"",hover:"",width:"50px",height:"28px"},on:{"on-btn-click":function(t){return e.$router.push({name:"profile_email"})}}},[a("pencil")],1)],1),a("div",{staticClass:"profile-header-block__inner-row"},[a("p",{staticClass:"profile-header-block--label"},[e._v(" Password: ")]),a("p",{staticClass:"profile-header-block--value"},[e._v(" ********** ")]),a("custom-button",{attrs:{small:"",hover:"",width:"50px",height:"28px"},on:{"on-btn-click":function(t){return e.$router.push({name:"profile_password"})}}},[a("pencil")],1)],1),a("div",{staticClass:"profile-header-block__inner-row"},[a("p",{staticClass:"profile-header-block--label"},[e._v(" Address: ")]),a("p",{staticClass:"profile-header-block--value"},[e.address&&e.city&&e.zip&&e.country?a("span",[e._v(" "+e._s(e.address)+", "+e._s(e.city)+", "+e._s(e.zip)+", "+e._s(e.country)+" ")]):a("span",[e._v(" Not provided ")])]),a("custom-button",{attrs:{small:"",hover:"",width:"50px",height:"28px"},on:{"on-btn-click":function(t){return e.$router.push({name:"profile_address"})}}},[a("pencil")],1)],1),a("div",{staticClass:"profile-header-block__inner-row"},[a("p",{staticClass:"profile-header-block--label"},[e._v(" Phone: ")]),a("p",{staticClass:"profile-header-block--value"},[e.phone_code&&e.phone?a("span",[e._v(" +"+e._s(e.phone_code)+" "+e._s(e.phone)+" ")]):a("span",[e._v(" Not provided ")])]),a("custom-button",{attrs:{small:"",hover:"",width:"50px",height:"28px"},on:{"on-btn-click":function(t){return e.$router.push({name:"profile_phone"})}}},[a("pencil")],1)],1)])])])])]},proxy:!0}])})},r=[],n=(a("96cf"),a("1da1")),o=a("5530"),s=a("41bd"),l=a("713b"),c=a("bf6e"),p={name:"mdi-pencil",props:{width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},size:{type:[Number,String],default:24},viewBox:{type:[String],default:"0 0 24 24"},xmlns:{type:String,default:"http://www.w3.org/2000/svg"},ariaLabel:{type:String,default:"Pencil icon"},role:{type:String,default:"img"},title:{type:String,required:!1},spin:{type:Boolean,default:!1}}};const d=p;var _=function(e,t){var a=t._c;return a("span",{class:[t.data.staticClass,"mdi","mdi-pencil",t.props.spin?"mdi-spin":void 0],attrs:{role:t.props.role,"aria-label":t.props.ariaLabel}},[a("svg",{attrs:{fill:"currentColor",width:t.props.width||t.props.size,height:t.props.height||t.props.size,viewBox:t.props.viewBox,xmlns:t.props.xmlns}},[t.title?a("title",[t._v(t._s(t.title))]):t._e(),t._v(" "),a("path",{attrs:{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}})])])},u=[];_._withStripped=!0;const h=function(e){e&&e("data-v-0e3fb7f1_0",{source:".mdi > svg {\n  vertical-align: middle;\n}\n.mdi.mdi-spin > svg {\n  -webkit-animation: mdi-spin 2s infinite linear;\n     -moz-animation: mdi-spin 2s infinite linear;\n          animation: mdi-spin 2s infinite linear;\n}\n@-webkit-keyframes mdi-spin {\n0% {\n      -webkit-transform: rotate(0deg);\n         -moz-transform: rotate(0deg);\n              transform: rotate(0deg);\n}\n100% {\n      -webkit-transform: rotate(360deg);\n         -moz-transform: rotate(360deg);\n              transform: rotate(360deg);\n}\n}\n@keyframes mdi-spin {\n0% {\n      -webkit-transform: rotate(0deg);\n         -moz-transform: rotate(0deg);\n              transform: rotate(0deg);\n}\n100% {\n      -webkit-transform: rotate(360deg);\n         -moz-transform: rotate(360deg);\n              transform: rotate(360deg);\n}\n}",map:void 0,media:void 0})},m=void 0,f=void 0,b=!0,k=Object(c["b"])({render:_,staticRenderFns:u},h,d,m,b,f,!1,c["a"],void 0,void 0);var v=k,g=a("2f62"),w=a("3adc"),C=a("c581"),y=Object(g["a"])("client"),x=y.mapActions,S={components:{MainLayout:l["a"],Pencil:v},data:function(){return{settingsBreadcrumbs:{title:"Account Settings",steps:[{url:"/",title:"Home"},{url:"/cp/account",title:"Account"},{url:"cp/profile",title:"Profile"}],additionalClass:"bc-wrapper bc-wrapper_user-account bc-wrapper--setting bc-right-bottom bc-horizontal"}}},computed:Object(o["a"])({},Object(C["b"])(["client_data.firstname","client_data.lastname","client_data.email","client_data.password","client_data.address","client_data.city","client_data.zip","client_data.country","client_data.region","client_data.phone_code","client_data.phone","client_data.phone_verified","client_data.preferred_writers","client_data.blocked_writers","client_data.statistics","client_data.chk_sms_notifications","client_data.chk_email_notifications","client_data.chk_email_marketing","client_data.chk_calls","client_data.aff_paymethod","client_data.aff_paypal_email"])),methods:Object(o["a"])(Object(o["a"])({},x({askForPassword:w["a"],updateSettings:w["o"],updateClient:w["v"]})),{},{submit:function(){try{var e=this.updateSettings({chk_sms_notifications:!0===this.chk_sms_notifications?1:0,chk_email_notifications:!0===this.chk_email_notifications?1:0,chk_email_marketing:!0===this.chk_email_marketing?1:0,chk_calls:!0===this.chk_calls?1:0});e&&s["a"].$emit("showSnackBar","Your settings have been saved","success")}catch(t){s["a"].$emit("showSnackBar","Failed to update settings","error")}}}),beforeRouteEnter:function(e,t,a){a(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.updateClient();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},z=S,L=(a("3b43"),a("2877")),$=Object(L["a"])(z,i,r,!1,null,null,null);t["default"]=$.exports},"3b43":function(e,t,a){"use strict";a("290d")}}]);
//# sourceMappingURL=_profile.cb7eab2b.js.map