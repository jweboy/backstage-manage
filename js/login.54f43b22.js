(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"09bc":function(e,r,s){},a55b:function(e,r,s){"use strict";s.r(r);var o=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"layout-background"},[s("div",{staticClass:"layout-form"},[s("el-form",{ref:"loginForm",attrs:{model:e.loginForm,"label-width":"70px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username",rules:e.rules.username}},[s("el-input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password",rules:e.rules.password}},[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),s("el-form-item",[s("span",[e._v("默认用户： admin 默认密码：123")])]),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("登录")])],1)],1)],1)])},a=[],t={data:function(){return{loginForm:{username:"",password:""},rules:{username:{required:!0,message:"请输入用户名",trgger:"blur"},password:{required:!0,message:"请输入密码",trgger:"blur"}},disabled:!1}},methods:{handleSubmit:function(){var e=this;this.$refs.loginForm.validate(function(r){if(!r)return!1;"admin"!==e.loginForm.username?e.$message({type:"error",message:"当前只支持默认用户admin"}):"123"!==e.loginForm.password?e.$message({type:"error",message:"admin默认密码为123"}):(e.$message({type:"success",message:"登录成功"}),setTimeout(function(){location.href="/"},1e3))})}}},n=t,l=(s("cf33"),s("2877")),i=Object(l["a"])(n,o,a,!1,null,"8e81beb4",null);i.options.__file="Login.vue";r["default"]=i.exports},cf33:function(e,r,s){"use strict";var o=s("09bc"),a=s.n(o);a.a}}]);
//# sourceMappingURL=login.54f43b22.js.map