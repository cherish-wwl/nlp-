webpackJsonp([3],{"0xDb":function(t,e,a){"use strict";e.a=function(t,e){var a=new Date(t);Date.now();return e?function(t,e){if(0===arguments.length)return null;var a=e||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===t?"undefined":r()(t))?n=t:(10===(""+t).length&&(t=1e3*parseInt(t)),n=new Date(t));var s={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var a=s[e];return"a"===e?["一","二","三","四","五","六","日"][a-1]:(t.length>0&&a<10&&(a="0"+a),a||0)})}(t,e):a.getFullYear()+"年"+a.getMonth()+"1月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"},e.b=function(t){"string"!=typeof t&&(t=s()(t,void 0,2));return(t=t.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(t){var e="number";return/^"/.test(t)?e=/:$/.test(t)?"key":"string":/true|false/.test(t)?e="boolean":/null/.test(t)&&(e="null"),'<span class="'+e+'">'+t+"</span>"})};var n=a("3cXf"),s=a.n(n),l=a("hRKE"),r=a.n(l)},"3cXf":function(t,e,a){t.exports={default:a("RJ+u"),__esModule:!0}},"40sb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("hRKE"),s=a.n(n),l=a("BN1A"),r=a("0xDb"),o=a("rVsN"),i=a.n(o),c=a("2sCs"),d=a.n(c),u=a("FDFR"),v=d.a.create({timeout:6e4});v.interceptors.request.use(function(t){return t},function(t){console.log(t),i.a.reject(t)}),v.interceptors.response.use(function(t){return t.data},function(t){return console.log("err"+t),Object(u.Message)({message:t.message,type:"error",duration:5e3}),i.a.reject(t)});var p=v;var b={components:{titleTool:a("tQBc").a},data:function(){return{data:"",title:"我是技术文档页面",tableData1:null,tableData2:null,backexample:{},bodyexample:{},classtype:"001",techDocmentGlobalDesrc:""}},methods:{init:function(){var t=this;this.$route.query.id&&(Object(l.g)({serviceId:this.$route.query.id}).then(function(e){if(null!=e.data){t.data=e.data,t.tableData1=e.data.requestPara,t.tableData2=e.data.responsePara;var a=e.data.backexample,n=e.data.bodyexample;n&&""!=n&&(t.bodyexample=t.disposeData(n)),a&&""!=a&&(t.backexample=t.disposeData(a))}}),this.$route.query.cId&&(this.classtype=this.$route.query.cId.slice(0,3)))},disposeData:function(t){if("string"==typeof t)try{var e=JSON.parse(t.trim('"').toString());return"object"==(void 0===e?"undefined":s()(e))&&e?Object(r.b)(e):'"'+t+'"'}catch(e){return console.log("error："+t+"!!!"+e),'"'+t+'"'}}},mounted:function(){var t=this;this.init(),p({url:"static/common.json?"+Math.random().toString(36).substr(2),method:"get"}).then(function(e){"object"==(void 0===e?"undefined":s()(e))?t.techDocmentGlobalDesrc=e.techDocmentGlobalDesrc:console.log("未加载到数据")})}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-tool"),t._v(" "),a("div",{staticClass:"detail"},[a("el-row",[a("div",{staticClass:"brief"},[a("el-row",{staticClass:"font20"},[a("h3",[t._v("简介：")])]),t._v(" "),a("el-row",{staticClass:"font16"},[a("article",{domProps:{innerHTML:t._s(t.techDocmentGlobalDesrc)}})]),t._v(" "),a("br")],1),t._v(" "),a("div",[a("el-row",{staticClass:"font20"},[a("h3",[t._v(t._s("001"==t.classtype?"基础":"应用")+"服务接口：")])]),t._v(" "),a("el-row",{staticClass:"font16"},[t._v("\n          "+t._s(t.data.serviceName)+" ")]),t._v(" "),a("el-row",{staticClass:"font20"},[a("h3",[t._v("接口描述：")]),t._v(" "),a("span",{staticClass:"font16"},[t._v("\n                   "+t._s(t.data.interfacetext)+"\n          ")])])],1),t._v(" "),a("div",[a("el-row",{staticClass:"font20"},[a("h3",[t._v("请求说明：")]),t._v(" "),a("h4",[t._v("请求示例：")])]),t._v(" "),a("el-row",[a("span",{staticClass:"font16"},[t._v("HTTP方法：       ")]),a("span",{staticClass:"Method"},[t._v(t._s(t.data.httpmethod))]),a("br"),a("br"),t._v(" "),a("span",{staticClass:"font16"},[t._v("HTTP方法路径:  ")]),a("span",{staticClass:"Method"},[t._v(t._s(t.data.globalurl))]),a("br")]),t._v(" "),a("div",[a("el-row",[a("h3",[a("span",[t._v("Body请求示例:")])]),t._v(" "),a("pre",{staticClass:"JSONhtmlStyle",domProps:{innerHTML:t._s(t.bodyexample)}},[t._v(" ")])])],1),t._v(" "),a("div",[a("el-row",[a("h3",[t._v("请求参数：")]),t._v(" "),a("el-col",[a("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"paraname",label:"参数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"needorno",label:"是否必填"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"explain_",label:"说明"}})],1)],1)],1)],1),t._v(" "),a("div",[a("el-row",[a("h3",[t._v("返回参数：")]),t._v(" "),a("el-col",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2,border:""}},[a("el-table-column",{attrs:{prop:"paraname",label:"参数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"explain_",label:"说明"}})],1)],1)],1)],1),t._v(" "),a("div",[a("h3",[t._v("返回示例：")]),t._v(" "),a("el-col",[a("pre",{staticClass:"JSONhtmlStyle",domProps:{innerHTML:t._s(t.backexample)}}),t._v(" "),a("br"),a("br"),a("br")])],1)],1)]),t._v(" "),a("div",{staticClass:"doc_contact"},[a("el-row",{staticClass:"font16"},[t._v("\n          如果您对文档内容有任何疑问，可以通过以下几种方式联系我们：\n        ")]),t._v(" "),a("el-row",{staticClass:"font16"},[t._v("\n          联系电话：010-57973555（9:00-18:00）\n        ")]),t._v(" "),a("el-row",{staticClass:"font16"},[t._v("\n          邮箱：China-NLP@ultrapower.com.cn\n        ")])],1)],1)],1)},staticRenderFns:[]};var _=a("/Xao")(b,f,!1,function(t){a("pwle")},"data-v-f2aa9a2e",null);e.default=_.exports},F8CP:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.detail[data-v-f2aa9a2e] {\n  padding: 0 10% 40px;\n}\n.Method[data-v-f2aa9a2e] {\n  border: solid 1px;\n  border-color: #EAEAEA;\n  padding: 5px 10px;\n  background-color: #f5f5f5;\n}\n.doc_contact[data-v-f2aa9a2e] {\n  text-align: center;\n  color: #a5a4a4;\n}\n.brief[data-v-f2aa9a2e] {\n  line-height: 26px;\n}\n.JSONhtmlStyle[data-v-f2aa9a2e] {\n  font-size: medium;\n  line-height: normal;\n}\n.table[data-v-f2aa9a2e] {\n  color: #333;\n}\n",""])},"RJ+u":function(t,e,a){var n=a("AKd3"),s=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},pwle:function(t,e,a){var n=a("F8CP");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("0228cb29",n,!0)}});