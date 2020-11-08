(function(t){function e(e){for(var a,d,r=e[0],s=e[1],l=e[2],u=0,p=[];u<r.length;u++)d=r[u],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&p.push(i[d][0]),i[d]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,r=1;r<o.length;r++){var s=o[r];0!==i[s]&&(a=!1)}a&&(n.splice(e--,1),t=d(d.s=o[0]))}return t}var a={},i={app:0},n=[];function d(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=t,d.c=a,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)d.d(o,a,function(e){return t[e]}.bind(null,a));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/todo-list-frontend/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=s;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("TodosPage")},n=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("Header"),o("AddBar"),o("v-main",[o("v-container",{attrs:{fluid:""}},[o("TodosContent")],1)],1),o("v-footer",{attrs:{app:""}})],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",{attrs:{justify:"start"}},[o("v-col",{attrs:{col:"4",xs:"12"}},[o("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v(" Today "),t._l(t.todosToday,(function(e){return o("v-col",{key:e.id,attrs:{cols:"12"}},[o("v-card",{attrs:{color:e.tag,dark:""}},[o("div",[o("v-btn",{attrs:{color:"secondary",fab:"","x-small":"",absolute:"",top:"",right:""},on:{click:function(o){return t.delTodo(e.id)}}},[o("v-icon",[t._v("mdi-close")])],1)],1),o("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[o("div",[o("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),o("v-card-subtitle",{domProps:{textContent:t._s(e.date+" / "+e.time)}}),o("v-row",{attrs:{justify:"end"}},[o("v-col",{attrs:{col:"12",md:"12"}},[o("v-card-actions",[o("v-btn",{staticClass:"ml-2 mt-5 mb-4",attrs:{outlined:"",rounded:"",small:"",absolute:"",right:""},on:{click:function(o){return o.stopPropagation(),t.editDialog(e.id)}}},[o("v-icon",[t._v("mdi-lead-pencil")])],1)],1)],1)],1)],1)])])],1)}))],2)],1),o("v-col",{attrs:{col:"4",xs:"12"}},[o("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v(" Tomorow "),t._l(t.todosTomorow,(function(e){return o("v-col",{key:e.id,attrs:{cols:"12"}},[o("v-card",{attrs:{color:e.tag,dark:""}},[o("div",[o("v-btn",{attrs:{color:"secondary",fab:"","x-small":"",absolute:"",top:"",right:""},on:{click:function(o){return t.delTodo(e.id)}}},[o("v-icon",[t._v("mdi-close")])],1)],1),o("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[o("div",[o("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),o("v-card-subtitle",{domProps:{textContent:t._s(e.date+" / "+e.time)}}),o("v-row",{attrs:{justify:"end"}},[o("v-col",{attrs:{col:"12",md:"12"}},[o("v-card-actions",[o("v-btn",{staticClass:"ml-2 mt-5 mb-4",attrs:{outlined:"",rounded:"",small:"",absolute:"",right:""},on:{click:function(o){return o.stopPropagation(),t.editDialog(e.id)}}},[o("v-icon",[t._v("mdi-lead-pencil")])],1)],1)],1)],1)],1)])])],1)}))],2)],1),o("v-col",{attrs:{col:"4",xs:"12"}},[o("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v(" Others day "),t._l(t.todosOthers,(function(e){return o("v-col",{key:e.id,attrs:{cols:"12"}},[o("v-card",{attrs:{color:e.tag,dark:""}},[o("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[o("v-btn",{attrs:{color:"secondary",fab:"","x-small":"",absolute:"",top:"",right:""},on:{click:function(o){return t.delTodo(e.id)}}},[o("v-icon",[t._v("mdi-close")])],1),o("div",[o("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),o("v-card-subtitle",{domProps:{textContent:t._s(e.date+" / "+e.time)}}),o("v-row",{attrs:{justify:"end"}},[o("v-col",{attrs:{col:"12",md:"12"}},[o("v-card-actions",[o("v-btn",{staticClass:"ml-2 mt-5 mb-4",attrs:{outlined:"",rounded:"",small:"",absolute:"",right:""},on:{click:function(o){return o.stopPropagation(),t.editDialog(e.id)}}},[o("v-icon",[t._v("mdi-lead-pencil")])],1)],1)],1)],1)],1)],1)])],1)}))],2)],1)],1),o("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("form",{staticClass:"pa-3"},[o("div",{staticClass:"pt-3"},[o("v-text-field",{attrs:{label:"Title","hide-details":"auto",required:""},model:{value:t.todoTitleEdit,callback:function(e){t.todoTitleEdit=e},expression:"todoTitleEdit"}})],1),o("div",{staticClass:"pt-3"},[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Date",readonly:""},model:{value:t.todoDateEdit,callback:function(e){t.todoDateEdit=e},expression:"todoDateEdit"}},"v-text-field",i,!1),a))]}}]),model:{value:t.dateInput,callback:function(e){t.dateInput=e},expression:"dateInput"}},[o("v-date-picker",{on:{input:function(e){t.dateInput=!1}},model:{value:t.todoDateEdit,callback:function(e){t.todoDateEdit=e},expression:"todoDateEdit"}})],1)],1),o("div",{staticClass:"pt-3"},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{required:"",label:"Time",readonly:""},model:{value:t.todoTimeEdit,callback:function(e){t.todoTimeEdit=e},expression:"todoTimeEdit"}},"v-text-field",i,!1),a))]}}]),model:{value:t.timeInput,callback:function(e){t.timeInput=e},expression:"timeInput"}},[t.timeInput?o("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{"click:minute":function(e){return t.$refs.menu.save(t.todoTimeEdit)}},model:{value:t.todoTimeEdit,callback:function(e){t.todoTimeEdit=e},expression:"todoTimeEdit"}}):t._e()],1)],1),o("div",{staticClass:"pt-3"},[o("v-select",{attrs:{items:t.colors,"append-outer-icon":"mdi-checkbox-blank-circle","menu-props":"auto",label:"Tag","single-line":"",required:"",color:t.todoTagEdit,"background-color":t.todoTagEdit},model:{value:t.todoTagEdit,callback:function(e){t.todoTagEdit=e},expression:"todoTagEdit"}})],1),o("div",{staticClass:"pt-3"},[o("v-btn",{attrs:{width:"100%",depressed:"",color:"primary"},on:{click:t.updateTodo}},[t._v(" Add New Todo List ")])],1)])])],1)],1)},l=[],c=(o("4de4"),{data:function(){return{justify:["start","center","end","space-around","space-between"],colors:["green","blue","brown"],dialog:!1,dateInput:!1,timeInput:!1,todoTitleEdit:"",todoDateEdit:"",todoTimeEdit:"",todoTagEdit:"",id:""}},computed:{todosToday:function(){var t=this.$store.state.todos;return t=t.filter((function(t){return t.date==(new Date).toISOString().substr(0,10)})),t},todosTomorow:function(){var t=this.$store.state.todos,e=new Date;e.setDate((new Date).getDate()+1);var o=e.toISOString().substr(0,10);return t=t.filter((function(t){return t.date==o})),t},todosOthers:function(){var t=this.$store.state.todos,e=new Date;e.setDate((new Date).getDate()+1);var o=e.toISOString().substr(0,10);return t=t.filter((function(t){return t.date>o})),t}},methods:{delTodo:function(t){this.$store.dispatch("delTodo",t)},editDialog:function(t){var e=this.$store.state.todos.filter((function(e){return e.id==t}));console.log(e),this.todoTitleEdit=e[0].title,this.todoDateEdit=e[0].date,this.todoTimeEdit=e[0].time,this.todoTagEdit=e[0].tag,this.id=t,this.dialog=!0},updateTodo:function(){var t={id:this.id,title:this.todoTitleEdit,tag:this.todoTagEdit,time:this.todoTimeEdit,date:this.todoDateEdit,status:!1};this.$store.dispatch("updateTodo",t),this.dialog=!1}}}),u=c,p=o("2877"),v=o("6544"),f=o.n(v),m=o("8336"),b=o("b0af"),g=o("99d9"),T=o("62ad"),h=o("2e4b"),x=o("169a"),k=o("132d"),w=o("e449"),y=o("0fd9"),_=o("b974"),C=o("8654"),D=o("c964"),E=Object(p["a"])(u,s,l,!1,null,null,null),V=E.exports;f()(E,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardSubtitle:g["b"],VCardTitle:g["c"],VCol:T["a"],VDatePicker:h["a"],VDialog:x["a"],VIcon:k["a"],VMenu:w["a"],VRow:y["a"],VSelect:_["a"],VTextField:C["a"],VTimePicker:D["a"]});var I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-center"}),o("v-spacer"),o("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}})],1)},j=[],O={},S=O,P=o("40dc"),$=o("2fa4"),A=Object(p["a"])(S,I,j,!1,null,null,null),L=A.exports;f()(A,{VAppBar:P["a"],VBtn:m["a"],VSpacer:$["a"]});var q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-navigation-drawer",{attrs:{permanent:"",fixed:"",app:""}},[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"title"},[t._v(" Simple Todo List ")])],1)],1),o("v-divider"),o("form",{staticClass:"pa-3"},[o("div",{staticClass:"pt-3"},[o("v-text-field",{attrs:{label:"Title","hide-details":"auto",required:""},model:{value:t.todoTitle,callback:function(e){t.todoTitle=e},expression:"todoTitle"}})],1),o("div",{staticClass:"pt-3"},[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Date",readonly:""},model:{value:t.todoDate,callback:function(e){t.todoDate=e},expression:"todoDate"}},"v-text-field",i,!1),a))]}}]),model:{value:t.dateInput,callback:function(e){t.dateInput=e},expression:"dateInput"}},[o("v-date-picker",{on:{input:function(e){t.dateInput=!1}},model:{value:t.todoDate,callback:function(e){t.todoDate=e},expression:"todoDate"}})],1)],1),o("div",{staticClass:"pt-3"},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{required:"",label:"Time",readonly:""},model:{value:t.todoTime,callback:function(e){t.todoTime=e},expression:"todoTime"}},"v-text-field",i,!1),a))]}}]),model:{value:t.timeInput,callback:function(e){t.timeInput=e},expression:"timeInput"}},[t.timeInput?o("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{"click:minute":function(e){return t.$refs.menu.save(t.todoTime)}},model:{value:t.todoTime,callback:function(e){t.todoTime=e},expression:"todoTime"}}):t._e()],1)],1),o("div",{staticClass:"pt-3"},[o("v-select",{attrs:{items:t.colors,"append-outer-icon":"mdi-checkbox-blank-circle","menu-props":"auto",label:"Tag","single-line":"",required:"","background-color":t.todoTag},model:{value:t.todoTag,callback:function(e){t.todoTag=e},expression:"todoTag"}})],1),o("div",{staticClass:"pt-3"},[o("v-btn",{attrs:{width:"100%",depressed:"",color:"primary"},on:{click:t.addTodoList}},[t._v(" Add New Todo List ")])],1)])],1)},M=[],B={data:function(){return{colors:["green","blue","brown"],rules:[function(t){return!!t||"Required."}],dateInput:!1,timeInput:!1,todoTitle:null,todoDate:(new Date).toISOString().substr(0,10),todoTime:null,todoTag:null}},methods:{addTodoList:function(){var t={title:this.todoTitle,tag:this.todoTag,time:this.todoTime,date:this.todoDate,status:!1};this.$store.dispatch("addTodo",t),this.todoTitle=null,this.todoTag=null,this.todoTime=null,this.todoDate=(new Date).toISOString().substr(0,10)}}},F=B,H=o("ce7e"),N=o("da13"),J=o("5d23"),R=o("f774"),z=Object(p["a"])(F,q,M,!1,null,null,null),G=z.exports;f()(z,{VBtn:m["a"],VDatePicker:h["a"],VDivider:H["a"],VListItem:N["a"],VListItemContent:J["a"],VListItemTitle:J["b"],VMenu:w["a"],VNavigationDrawer:R["a"],VSelect:_["a"],VTextField:C["a"],VTimePicker:D["a"]});var K={components:{TodosContent:V,Header:L,AddBar:G},data:function(){return{}}},Q=K,U=o("7496"),W=o("a523"),X=o("553a"),Y=o("f6c4"),Z=Object(p["a"])(Q,d,r,!1,null,null,null),tt=Z.exports;f()(Z,{VApp:U["a"],VContainer:W["a"],VFooter:X["a"],VMain:Y["a"]});var et={name:"App",components:{TodosPage:tt},data:function(){return{}}},ot=et,at=Object(p["a"])(ot,i,n,!1,null,null,null),it=at.exports,nt=o("8c4f");a["a"].use(nt["a"]);var dt=[{path:"/",name:"Home"},{path:"/about",name:"About"}],rt=new nt["a"]({mode:"history",base:"/todo-list-frontend/",routes:dt}),st=rt,lt=o("f309");a["a"].use(lt["a"]);var ct=new lt["a"]({}),ut=(o("99af"),o("2909")),pt=o("2f62"),vt=[{id:1,title:"belanja bulanan",tag:"blue",time:"09:00",date:"2020-11-08",status:!1},{id:2,title:"meeting dengan client",tag:"green",time:"13:00",date:"2020-10-09",status:!0},{id:3,title:"nongki",tag:"green",time:"20:00",date:"2020-11-10",status:!1},{id:4,title:"survey kos-kosan",tag:"blue",time:"18:00",date:"2020-10-14",status:!1},{id:5,title:"update sosmed jualan",tag:"blue",time:"09:00",date:"2020-10-14",status:!1},{id:6,title:"masak sarden",tag:"blue",time:"13:00",date:"2020-11-10",status:!0},{id:7,title:"setor uang ke bank",tag:"brown",time:"15:00",date:"2020-10-14",status:!1},{id:8,title:"ketemu client tambang",tag:"green",time:"10:00",date:"2020-10-12",status:!0},{id:9,title:"undangan nikah",tag:"green",time:"18:00",date:"2020-11-09",status:!1},{id:10,title:"jemput teman di bandara",tag:"brown",time:"09:00",date:"2020-11-12",status:!1}];a["a"].use(pt["a"]);var ft=new pt["a"].Store({state:{todos:vt},mutations:{addTodo:function(t,e){t.todos.push(e)},delTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e}))},updateTodo:function(t,e){console.log(t.todos),t.todos=t.todos.filter((function(t){return t.id!==e.id})),console.log(t.todos),t.todos=[].concat(Object(ut["a"])(t.todos),[e]),console.log(t.todos)}},actions:{addTodo:function(t,e){var o=t.commit;o("addTodo",e)},delTodo:function(t,e){var o=t.commit;o("delTodo",e)},updateTodo:function(t,e){var o=t.commit;o("updateTodo",e)}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:st,vuetify:ct,store:ft,render:function(t){return t(it)}}).$mount("#app")}});
//# sourceMappingURL=app.452264a4.js.map