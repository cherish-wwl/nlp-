webpackJsonp([1],{g6oT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("tQBc"),i=n("ChBI"),r={data:function(){return{fullscreenLoading:!1,columnCount:"4",serviceClassRowsCount:"5",applicantionInfo:{name:"",type:"",platformArray:[],desrc:"",serviceArray:[]},rules:{name:[{required:!0,message:"请输入应用名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择应用类型",trigger:"change"}],platformArray:[{required:!0,message:"请选择应用平台",trigger:"change"}]},aTypeList:[],aPlatformList:[],serviceList:[]}},components:{titleTool:a.a},methods:{init:function(){var e=this;Object(i.g)().then(function(t){e.serviceList=t.data,e.serviceClassRowsCount=Math.round(e.serviceList.length/4)}),Object(i.f)().then(function(t){e.aTypeList=t.data}),Object(i.e)().then(function(t){e.aPlatformList=t.data}),"consoleMyApplicantionEdit"==this.$route.name&&this.$route.query.id&&Object(i.c)({appId:this.$route.query.id}).then(function(t){e.applicantionInfo.desrc=t.data.appDesc,e.applicantionInfo.name=t.data.appName,e.applicantionInfo.type=t.data.appType;var n=[];t.data.platformArray.forEach(function(e){n.push(e.platformId)}),e.applicantionInfo.platformArray=n;var a=[];t.data.serviceList.forEach(function(e){a.push(e.serviceId)}),e.applicantionInfo.serviceArray=a})},submitForm:function(){var e=this;this.$refs.applicantionForm.validate(function(t){if(t){e.fullscreenLoading=!0;var n={platformArray:e.applicantionInfo.platformArray.join(","),serviceArray:e.applicantionInfo.serviceArray.join(","),name:e.applicantionInfo.name,type:e.applicantionInfo.type,desrc:e.applicantionInfo.desrc};console.log(n),"consoleMyApplicantionAdd"==e.$route.name?Object(i.a)(n).then(function(t){e.fullscreenLoading=!1,e.$message({message:"创建成功！",type:"success"}),e.returnPage()}).catch(function(){e.fullscreenLoading=!1}):"consoleMyApplicantionEdit"==e.$route.name?(n.id=e.$route.query.id,Object(i.b)(n).then(function(t){e.fullscreenLoading=!1,e.$message({message:"保存成功！",type:"success"}),e.returnPage()}).catch(function(){e.fullscreenLoading=!1})):e.returnPage()}else e.$message("请您完整填写数据！")})},returnPage:function(){this.$router.push({name:"consoleMyApplicantion"})}},mounted:function(){this.init()}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"myApplicantipnEditAdd"},[n("title-tool"),e._v(" "),n("br"),e._v(" "),n("el-row",[n("el-form",{ref:"applicantionForm",attrs:{model:e.applicantionInfo,"label-width":"120px",rules:e.rules}},[n("el-form-item",{attrs:{label:"应用名称：",prop:"name"}},[n("el-input",{staticClass:"customwidth1",attrs:{placeholder:"请填写应用名称"},model:{value:e.applicantionInfo.name,callback:function(t){e.$set(e.applicantionInfo,"name",t)},expression:"applicantionInfo.name"}})],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"应用类型：",prop:"type"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.applicantionInfo.type,callback:function(t){e.$set(e.applicantionInfo,"type",t)},expression:"applicantionInfo.type"}},e._l(e.aTypeList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"应用平台：",prop:"platformArray"}},[n("el-select",{attrs:{multiple:"",filterable:"","default-first-option":"",placeholder:"请选择"},model:{value:e.applicantionInfo.platformArray,callback:function(t){e.$set(e.applicantionInfo,"platformArray",t)},expression:"applicantionInfo.platformArray"}},e._l(e.aPlatformList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"服务选择："}},[n("el-checkbox-group",{staticClass:"font16 serviceBox",model:{value:e.applicantionInfo.serviceArray,callback:function(t){e.$set(e.applicantionInfo,"serviceArray",t)},expression:"applicantionInfo.serviceArray"}},e._l(4,function(t,a){return n("el-col",{key:t,attrs:{span:6}},e._l(e.serviceList,function(t,i){return i>=0+a*e.serviceClassRowsCount&&i<parseInt(e.serviceClassRowsCount)+parseInt(a*e.serviceClassRowsCount)?n("ul",{key:t.id},[n("li",[n("label",{attrs:{title:t.name}},[e._v(" "+e._s(t.name))])]),e._v(" "),e._l(t.children,function(t){return n("li",{key:t.id},[n("el-checkbox",{attrs:{label:t.id,name:"serviceIds"}},[e._v(e._s(t.name))])],1)})],2):e._e()}))}))],1),e._v(" "),n("el-form-item",{attrs:{label:"描述："}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.applicantionInfo.desrc,callback:function(t){e.$set(e.applicantionInfo,"desrc",t)},expression:"applicantionInfo.desrc"}})],1)],1)],1),e._v(" "),n("el-row",{staticClass:"text_center"},[n("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("\n      保存\n    ")]),e._v(" "),n("el-button",{on:{click:e.returnPage}},[e._v("\n      返回\n    ")])],1)],1)},staticRenderFns:[]},l=n("/Xao")(r,o,!1,null,null,null);t.default=l.exports}});