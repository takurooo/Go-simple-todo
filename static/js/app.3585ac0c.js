(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"304f5361"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}s[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0289":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:!0,persistent:"","max-width":"280"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(" Delete task? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" No ")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.$store.dispatch("todo/deleteTask",t.task.id)}}},[t._v(" Yes ")])],1)],1)],1)},s=[],r={props:["task"]},i=r,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("b0af"),f=a("99d9"),k=a("169a"),v=a("2fa4"),p=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=p.exports;l()(p,{VBtn:d["a"],VCard:u["a"],VCardActions:f["a"],VCardTitle:f["b"],VDialog:k["a"],VSpacer:v["a"]})},"0c1b":function(t,e,a){"use strict";a("1124")},"0cae":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",{staticClass:"mt-10 ",attrs:{justify:"center"}},[a("div",{staticClass:"font-weight-black text-h5 green--text "},[t._v(" "+t._s(t.items[t.itemIndex].message)+" ")])]),a("v-row",{staticClass:"mt-1",attrs:{justify:"center"}},[a("v-img",{attrs:{src:t.items[t.itemIndex].src,"max-height":"400","max-width":"400"}})],1)],1)],1)},s=[],r={data:function(){return{itemIndex:null,items:[{src:"notask1.jpg",message:"No Tasks Well Done"},{src:"notask2.jpg",message:"No Tasks Good For You"}]}},created:function(){var t=0,e=this.items.length;this.itemIndex=Math.floor(Math.random()*(e-t)+t)}},i=r,o=(a("e332"),a("2877")),c=a("6544"),l=a.n(c),d=a("a523"),u=a("adda"),f=a("0fd9"),k=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=k.exports;l()(k,{VContainer:d["a"],VImg:u["a"],VRow:f["a"]})},1124:function(t,e,a){},"2f20":function(t,e,a){"use strict";a("3570")},"329f":function(t,e,a){},3570:function(t,e,a){},"436b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{staticClass:"pt-0",attrs:{flat:""}},[a("draggable",{attrs:{handle:".handle"},on:{start:t.startDrag,end:t.endDrag},model:{value:t.tasks,callback:function(e){t.tasks=e},expression:"tasks"}},t._l(t.tasks,(function(t){return a("task",{key:t.id,attrs:{task:t}})})),1)],1)},s=[],r=a("b76a"),i=a.n(r),o={props:{today:{type:Boolean,default:!1},week:{type:Boolean,default:!1}},computed:{tasks:{get:function(){return this.today?this.$store.getters["todo/taskFilteredToday"]:this.week?this.$store.getters["todo/taskFilteredWeek"]:this.$store.getters["todo/taskFiltered"]},set:function(t){for(var e=0;e<t.length;++e)t[e].displayOrder=e;this.$store.dispatch("todo/setTasks",t)}}},methods:{startDrag:function(){this.$store.commit("toggleSorting")},endDrag:function(){this.$store.commit("toggleSorting")}},components:{task:a("58a7").default,draggable:i.a}},c=o,l=a("2877"),d=a("6544"),u=a.n(d),f=a("8860"),k=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=k.exports;u()(k,{VList:f["a"]})},"45ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"expanding-search mt-1",class:{closed:!t.hasFocus&&!t.$store.state.searchWord},attrs:{value:t.$store.state.searchWord,disabled:t.$store.state.sorting,"solo-inverted":t.searchFieldActive,color:"green",placeholder:"Search","prepend-inner-icon":"mdi-magnify",dense:"",clearable:t.searchFieldActive,"hide-details":"",flat:""},on:{input:function(e){return t.$store.commit("setSearchWord",e)},focus:function(e){t.hasFocus=!0},blur:function(e){t.hasFocus=!1}}})},s=[],r={data:function(){return{hasFocus:!1}},computed:{searchFieldActive:function(){return!(!this.hasFocus&&!this.$store.state.searchWord)}}},i=r,o=(a("2f20"),a("2877")),c=a("6544"),l=a.n(c),d=a("8654"),u=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=u.exports;l()(u,{VTextField:d["a"]})},"4cb2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"black"}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.items,(function(e,n){return a("v-list-item",{key:n,on:{click:function(e){return t.handleClick(n)}}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),t.dialogs.edit?a("dialog-edit-task",{attrs:{task:t.task},on:{close:function(e){t.dialogs.edit=!1}}}):t._e(),t.dialogs.delete?a("dialog-delete-task",{attrs:{task:t.task},on:{close:function(e){t.dialogs.delete=!1}}}):t._e()],1)},s=[],r={props:["task"],data:function(){return{dialogs:{edit:!1,dueDate:!1,delete:!1},items:[{title:"Edit",icon:"mdi-pencil-outline",click:function(){this.dialogs.edit=!0}},{title:"Delete",icon:"mdi-trash-can-outline",click:function(){this.dialogs.delete=!0}}]}},methods:{handleClick:function(t){this.items[t].click.call(this)}},components:{"dialog-edit-task":a("97e3").default,"dialog-delete-task":a("0289").default}},i=r,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("132d"),f=a("8860"),k=a("da13"),v=a("34c3"),p=a("5d23"),h=a("e449"),m=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=m.exports;l()(m,{VBtn:d["a"],VIcon:u["a"],VList:f["a"],VListItem:k["a"],VListItemIcon:v["a"],VListItemTitle:p["c"],VMenu:h["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:!0,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item-group",{attrs:{color:"black"}},t._l(t.drawerItems,(function(e){return a("v-list-item",{key:e.text,attrs:{link:"",to:e.to}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1),a("v-list-item-action",[a("v-chip",{staticClass:"font-weight-black subtitle-2",attrs:{small:"",dark:"",color:"green"}},["All"===e.text?a("div",[t._v(" "+t._s(t.$store.getters["todo/numOfUnfinishedTask"])+" ")]):"Today"===e.text?a("div",[t._v(" "+t._s(t.$store.getters["todo/numOfUnfinishedTaskToday"])+" ")]):"Week"===e.text?a("div",[t._v(" "+t._s(t.$store.getters["todo/numOfUnfinishedTaskWeek"])+" ")]):t._e()])],1)],1)})),1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":t.$vuetify.breakpoint.lgAndUp,color:"green darken-3",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 mr-3 pl-4"},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.$store.state.appTitle)+" ")])]),a("v-spacer"),a("search"),a("bar-menu"),a("v-btn",{attrs:{icon:""},on:{click:t.greeting}},[a("v-icon",[t._v("mdi-human-greeting")])],1)],1),a("v-main",[a("router-view"),a("snackbar"),a("div",{staticClass:"mt-15"}),a("button-add-task")],1)],1)},r=[],i={data:function(){return{dialogs:{delete:!1},drawer:null,drawerItems:[{icon:"mdi-check-bold",text:"All",to:"/"},{icon:"mdi-calendar-today",text:"Today",to:"/today"},{icon:"mdi-calendar-week",text:"Week",to:"/week"}]}},mounted:function(){this.$store.dispatch("todo/getTasks")},methods:{greeting:function(){this.$store.commit("showSnackbar","Hey!! You can do it!!")}},components:{snackbar:a("9169").default,search:a("45ab").default,"bar-menu":a("5b52").default,"button-add-task":a("edc1").default}},o=i,c=a("2877"),l=a("6544"),d=a.n(l),u=a("7496"),f=a("40dc"),k=a("5bc1"),v=a("8336"),p=a("cc20"),h=a("132d"),m=a("8860"),g=a("da13"),b=a("1800"),T=a("5d23"),_=a("1baa"),x=a("f6c4"),D=a("f774"),w=a("2fa4"),y=a("2a7f"),V=Object(c["a"])(o,s,r,!1,null,null,null),C=V.exports;d()(V,{VApp:u["a"],VAppBar:f["a"],VAppBarNavIcon:k["a"],VBtn:v["a"],VChip:p["a"],VIcon:h["a"],VList:m["a"],VListItem:g["a"],VListItemAction:b["a"],VListItemContent:T["a"],VListItemGroup:_["a"],VListItemTitle:T["c"],VMain:x["a"],VNavigationDrawer:D["a"],VSpacer:w["a"],VToolbarTitle:y["a"]});a("99af"),a("b0c0"),a("d3b7");var O=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-chip",{staticClass:"ma-2",attrs:{color:"pink",label:"","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-label ")]),t._v(" "+t._s(t.$route.name)+" ")],1),a("v-divider"),t.$store.state.loading?a("loading",[t._v("loading")]):t.$store.getters["todo/numOfTask"]?a("list-tasks"):a("no-tasks")],1)},j=[],I={name:"Todos",components:{"list-tasks":a("436b").default,"no-tasks":a("0cae").default,loading:a("7b36").default}},S=I,L=a("ce7e"),P=Object(c["a"])(S,$,j,!1,null,null,null),E=P.exports;d()(P,{VChip:p["a"],VDivider:L["a"],VIcon:h["a"]});var W=a("3384"),M=a.n(W);n["a"].use(O["a"]);var R=[{path:"/",name:"All",component:E},{path:"/today",name:"Today",component:function(){return a.e("about").then(a.bind(null,"df35"))}},{path:"/week",name:"Week",component:function(){return a.e("about").then(a.bind(null,"d968"))}}],A=new O["a"]({routes:R});A.beforeEach((function(t,e,a){document.title="".concat("TODOLIST"," - ").concat(t.name),a()})),A.afterEach((function(){M()(0,{duration:0})}));var F=A,B=a("2f62"),U=a("af0d"),N=(a("4de4"),a("caad"),a("2532"),a("96cf"),a("1da1")),Y=a("bc3a"),z=a.n(Y),G=a("b166"),J=a("613a"),q=a("e3ee"),H={namespaced:!0,state:{tasks:[]},getters:{taskDone:function(t){var e=t.tasks.filter((function(t){return t.done}));return e},taskToday:function(t){var e=Object(G["a"])(new Date,"yyyy-MM-dd"),a=t.tasks.filter((function(t){return t.dueDate===e}));return a},taskWeek:function(t){var e=new Date;e.setDate(e.getDate()-e.getDay()),e=Object(G["a"])(e,"yyyy-MM-dd");var a=new Date;a.setDate(a.getDate()+(6-a.getDay())),a=Object(G["a"])(a,"yyyy-MM-dd");var n=t.tasks.filter((function(t){var n=Object(J["a"])(Object(q["a"])(t.dueDate),{start:Object(q["a"])(e),end:Object(q["a"])(a)});return n}));return n},numOfTask:function(t){return t.tasks.length},numOfTaskToday:function(t,e){return e.taskToday.length},numOfTaskWeek:function(t,e){return e.taskWeek.length},numOfUnfinishedTask:function(t){var e=t.tasks.filter((function(t){return!t.done}));return e.length},numOfUnfinishedTaskToday:function(t,e){var a=e.taskToday,n=a.filter((function(t){return!t.done}));return n.length},numOfUnfinishedTaskWeek:function(t,e){var a=e.taskWeek,n=a.filter((function(t){return!t.done}));return n.length},taskFiltered:function(t,e,a){return a.searchWord?t.tasks.filter((function(t){return t.title.toLowerCase().includes(a.searchWord.toLowerCase())})):t.tasks},taskFilteredToday:function(t,e,a){var n=e.taskToday;return a.searchWord?n.filter((function(t){return t.title.toLowerCase().includes(a.searchWord.toLowerCase())})):n},taskFilteredWeek:function(t,e,a){var n=e.taskWeek;return a.searchWord?n.filter((function(t){return t.title.toLowerCase().includes(a.searchWord.toLowerCase())})):n}},mutations:{addTask:function(t,e){t.tasks.push(e)},doneTask:function(t,e){var a=t.tasks.filter((function(t){return t.id===e}))[0];a.done=!a.done},deleteTask:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e}))},updateTask:function(t,e){var a=t.tasks.filter((function(t){return t.id===e.id}))[0];a.title=e.title,a.dueDate=e.dueDate},updateTaskTitle:function(t,e){var a=t.tasks.filter((function(t){return t.id===e.id}))[0];a.title=e.title},updateTaskDueDate:function(t,e){var a=t.tasks.filter((function(t){return t.id===e.id}))[0];a.dueDate=e.dueDate},setTasks:function(t,e){t.tasks=e}},actions:{addTask:function(t,e){return Object(N["a"])(regeneratorRuntime.mark((function a(){var n,s,r,i,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.state,s=t.commit,r=0,n.tasks.length&&(i=n.tasks[n.tasks.length-1],r=i.displayOrder+1),o={id:String(Date.now()),title:e.title,done:!1,dueDate:e.dueDate,displayOrder:r},a.prev=4,a.next=7,z.a.post("/tasks",o);case 7:c=a.sent,console.log("addTask",c),c.data&&(s("addTask",c.data),s("showSnackbar","Task added!!",{root:!0})),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](4),alert(a.t0);case 15:case"end":return a.stop()}}),a,null,[[4,12]])})))()},doneTask:function(t,e){return Object(N["a"])(regeneratorRuntime.mark((function a(){var n,s,r,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.state,s=t.commit,r=n.tasks.filter((function(t){return t.id===e}))[0],i={id:r.id,done:!r.done},a.prev=3,a.next=6,z.a.put("/tasks/"+e,i);case 6:o=a.sent,o.data.id&&s("doneTask",o.data.id),console.log("doneTask",o),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](3),alert(a.t0);case 14:case"end":return a.stop()}}),a,null,[[3,11]])})))()},deleteTask:function(t,e){return Object(N["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.prev=1,a.next=4,z.a.delete("/tasks/"+e);case 4:s=a.sent,s.data.id&&(n("deleteTask",s.data.id),n("showSnackbar","Task deleted",{root:!0})),console.log("deleteTask",s),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),alert(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},updateTask:function(t,e){return Object(N["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.prev=1,a.next=4,z.a.put("/tasks/"+e.id,e);case 4:s=a.sent,s.data&&(n("updateTask",s.data),n("showSnackbar","Task updated",{root:!0})),console.log("updateTask",s),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),alert(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},updateTaskTitle:function(t,e){return Object(N["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.prev=1,a.next=4,z.a.put("/tasks/"+e.id,e);case 4:s=a.sent,s.data&&(n("updateTaskTitle",s.data),n("showSnackbar","Task title updated",{root:!0})),console.log("updateTaskTitle",s),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),alert(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},updateTaskDueDate:function(t,e){return Object(N["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.prev=1,a.next=4,z.a.put("/tasks/"+e.id,e);case 4:s=a.sent,s.data&&(n("updateTaskDueDate",s.data),n("showSnackbar","Due Date updated",{root:!0})),console.log("updateTaskDueDate",s),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),alert(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},setTasks:function(t,e){return Object(N["a"])(regeneratorRuntime.mark((function a(){var n,s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,n("setTasks",e),s={tasks:e},a.prev=3,a.next=6,z.a.put("/tasks",s);case 6:r=a.sent,console.log("setTasks",r),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](3),alert(a.t0);case 13:case"end":return a.stop()}}),a,null,[[3,10]])})))()},getTasks:function(t){return Object(N["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,a("toggleLoading",null,{root:!0}),a("setTasks",[]),e.prev=3,e.next=6,z.a.get("/tasks");case 6:n=e.sent,n.data.tasks&&(s=n.data.tasks,s.sort((function(t,e){return t.displayOrder<e.displayOrder?-1:t.displayOrder>e.displayOrder?1:void 0})),a("setTasks",s)),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),alert(e.t0);case 13:a("toggleLoading",null,{root:!0});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))()}}},K=new U["a"]("db");K.config.debug=!1,n["a"].use(B["a"]);var Q=new B["a"].Store({state:{appTitle:"TODOLIST",searchWord:null,searching:!1,sorting:!1,loading:!1,snackbar:{show:!1,text:""}},mutations:{setSearchWord:function(t,e){t.searchWord=e,t.searchWord?t.searching=!0:t.searching=!1},toggleSorting:function(t){t.sorting=!t.sorting},toggleLoading:function(t){t.loading=!t.loading},showSnackbar:function(t,e){var a=0;t.snackbar.show&&(t.snackbar.show=!1,a=300),setTimeout((function(){t.snackbar.show=!0,t.snackbar.text=e}),a)},hideSnackbar:function(t){t.snackbar.show=!1,t.snackbar.text=""}},modules:{todo:H}}),X=a("f309");n["a"].use(X["a"]);var Z=new X["a"]({});z.a.defaults.baseURL="http://localhost:8000/api/v1",n["a"].config.productionTip=!1,new n["a"]({router:F,store:Q,vuetify:Z,render:function(t){return t(C)}}).$mount("#app")},"58a7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",{staticClass:"white",class:{"green lighten-5":t.task.done},attrs:{ripple:!1},on:{click:function(e){return t.$store.dispatch("todo/doneTask",t.task.id)}},scopedSlots:t._u([{key:"default",fn:function(){return[a("v-list-item-action",[a("v-checkbox",{attrs:{"input-value":t.task.done,color:"green"}})],1),a("v-list-item-content",[a("v-list-item-title",{class:{"text-decoration-line-through":t.task.done}},[t._v(" "+t._s(t.task.title)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t._f("toDsplayableDate")(t.task.dueDate))+" ")])],1),a("v-list-item-action",[a("task-menu",{attrs:{task:t.task}})],1),"/"===t.$route.path?a("v-list-item-action",[a("v-btn",{staticClass:"handle",attrs:{color:"black",disabled:t.$store.state.searching,icon:""},on:{click:function(e){return e.stopPropagation(),t.dummyClick(e)}}},[a("v-icon",[t._v("mdi-drag-horizontal-variant")])],1)],1):t._e()]},proxy:!0}])}),a("v-divider")],1)},s=[],r=a("df6c"),i={props:["task"],mixins:[r["a"]],methods:{dummyClick:function(){}},components:{"task-menu":a("4cb2").default}},o=i,c=(a("0c1b"),a("2877")),l=a("6544"),d=a.n(l),u=a("8336"),f=a("ac7c"),k=a("ce7e"),v=a("132d"),p=a("da13"),h=a("1800"),m=a("5d23"),g=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=g.exports;d()(g,{VBtn:u["a"],VCheckbox:f["a"],VDivider:k["a"],VIcon:v["a"],VListItem:p["a"],VListItemAction:h["a"],VListItemContent:m["a"],VListItemSubtitle:m["b"],VListItemTitle:m["c"]})},"5b52":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-menu",{attrs:{"offset-y":"",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",dark:""}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}])},[a("v-list",t._l(t.items,(function(e,n){return a("v-list-item",{key:n,on:{click:function(e){return t.handleClick(n)}}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),t.dialogs.delete?a("dialog-delete-all-done-task",{on:{close:function(e){t.dialogs.delete=!1}}}):t._e()],1)},s=[],r={data:function(){return{dialogs:{delete:!1},items:[{title:"Delete all completed task",icon:"mdi-trash-can-outline",click:function(){this.dialogs.delete=!0}}]}},methods:{handleClick:function(t){this.items[t].click.call(this)}},components:{"dialog-delete-all-done-task":a("e653").default}},i=r,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("132d"),f=a("8860"),k=a("da13"),v=a("34c3"),p=a("5d23"),h=a("e449"),m=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=m.exports;l()(m,{VBtn:d["a"],VIcon:u["a"],VList:f["a"],VListItem:k["a"],VListItemIcon:v["a"],VListItemTitle:p["c"],VMenu:h["a"]})},"5f9d":function(t,e,a){},"6fd1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{attrs:{value:!0,width:"400px",persistent:""}},[a("v-card",[a("v-card-title",{staticClass:"white--text green lighten-1"},[t._v(" New task ")]),a("v-container",[a("v-row",{staticClass:"mx-2"},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{autofocus:"",placeholder:"Task title",color:"green","hide-details":"",clearable:""},model:{value:t.taskTitle,callback:function(e){t.taskTitle=e},expression:"taskTitle"}})],1)],1),a("v-row",{staticClass:"mx-2"},[a("v-col",{attrs:{cols:"12"}},[a("v-icon",{attrs:{color:"green"},on:{click:function(e){t.dialogs.datePicker=!0}}},[t._v(" mdi-calendar ")])],1)],1),a("v-row",{staticClass:"mx-2"},[a("v-col",{attrs:{cols:"12"}},[t.dueDate?a("v-chip",{attrs:{close:"",outlined:""},on:{"click:close":function(e){t.dueDate=""}}},[t._v(" "+t._s(t._f("toDsplayableDate")(t.dueDate))+" ")]):t._e()],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",disabled:t.taskTitleInvalid},on:{click:t.addTask}},[t._v(" Save ")])],1)],1)],1),t.dialogs.datePicker?a("dialog-date-picker",{attrs:{initDate:t.dueDate},on:{close:t.closeDialogDatePicker}}):t._e()],1)},s=[],r=a("b166"),i=a("df6c"),o={mixins:[i["a"]],data:function(){return{dialogs:{datePicker:!1},taskTitle:"",dueDate:""}},filters:{niceDate:function(t){return t?Object(r["a"])(new Date(t),"yyyy/MM/dd E"):""}},computed:{taskTitleInvalid:function(){return!this.taskTitle}},methods:{addTask:function(){this.taskTitleInvalid||(this.$store.dispatch("todo/addTask",{title:this.taskTitle,dueDate:this.dueDate}),this.taskTitle="",this.dueDate="",this.$emit("close"))},closeDialogDatePicker:function(t){t&&(this.dueDate=t),this.dialogs.datePicker=!1}},components:{"dialog-date-picker":a("ad45").default}},c=o,l=a("2877"),d=a("6544"),u=a.n(d),f=a("8336"),k=a("b0af"),v=a("99d9"),p=a("cc20"),h=a("62ad"),m=a("a523"),g=a("169a"),b=a("132d"),T=a("0fd9"),_=a("2fa4"),x=a("8654"),D=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=D.exports;u()(D,{VBtn:f["a"],VCard:k["a"],VCardActions:v["a"],VCardTitle:v["b"],VChip:p["a"],VCol:h["a"],VContainer:m["a"],VDialog:g["a"],VIcon:b["a"],VRow:T["a"],VSpacer:_["a"],VTextField:x["a"]})},"7b36":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading"},[a("v-progress-circular",{attrs:{size:70,width:7,color:"primary",indeterminate:""}})],1)},s=[],r=(a("b3a2"),a("2877")),i=a("6544"),o=a.n(i),c=a("490a"),l={},d=Object(r["a"])(l,n,s,!1,null,null,null);e["default"]=d.exports;o()(d,{VProgressCircular:c["a"]})},9169:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{color:"green",elevation:"24"},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{text:""},on:{click:function(e){return t.$store.commit("hideSnackbar")}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.$store.state.snackbar.show,callback:function(e){t.$set(t.$store.state.snackbar,"show",e)},expression:"$store.state.snackbar.show"}},[a("div",{staticClass:"text-subtitle-2"},[t._v(" "+t._s(t.$store.state.snackbar.text)+" ")])])},s=[],r={},i=r,o=(a("d9b1"),a("2877")),c=a("6544"),l=a.n(c),d=a("8336"),u=a("2db4"),f=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=f.exports;l()(f,{VBtn:d["a"],VSnackbar:u["a"]})},"96ba":function(t,e,a){},"97e3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{attrs:{value:!0,width:"400px",persistent:""}},[a("v-card",[a("v-card-title",{staticClass:"white--text green lighten-1"},[t._v(" Edit task ")]),a("v-container",[a("v-row",{staticClass:"mx-2"},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{autofocus:"",placeholder:"Task title",color:"green","hide-details":"",clearable:""},model:{value:t.taskTitle,callback:function(e){t.taskTitle=e},expression:"taskTitle"}})],1)],1),a("v-row",{staticClass:"mx-2"},[a("v-col",{attrs:{cols:"12"}},[a("v-icon",{attrs:{color:"green"},on:{click:function(e){t.dialogs.datePicker=!0}}},[t._v(" mdi-calendar ")])],1)],1),a("v-row",{staticClass:"mx-2"},[a("v-col",{attrs:{cols:"12"}},[t.dueDate?a("v-chip",{attrs:{close:"",outlined:""},on:{"click:close":function(e){t.dueDate=""}}},[t._v(" "+t._s(t._f("toDsplayableDate")(t.dueDate))+" ")]):t._e()],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.cancel}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",disabled:t.taskTitleInvalid||t.notEdited},on:{click:t.addTask}},[t._v(" Save ")])],1)],1)],1),t.dialogs.datePicker?a("dialog-date-picker",{attrs:{initDate:t.dueDate},on:{close:t.closeDialogDatePicker}}):t._e()],1)},s=[],r=a("b166"),i=a("df6c"),o={props:["task"],mixins:[i["a"]],data:function(){return{dialogs:{datePicker:!1},taskTitle:"",dueDate:""}},filters:{niceDate:function(t){return t?Object(r["a"])(new Date(t),"yyyy/MM/dd E"):""}},mounted:function(){this.taskTitle=this.task.title,this.dueDate=this.task.dueDate},computed:{taskTitleInvalid:function(){return!this.taskTitle},notEdited:function(){return this.taskTitle===this.task.title&&this.dueDate===this.task.dueDate}},methods:{addTask:function(){this.taskTitleInvalid||this.notEdited||(this.task.title=this.taskTitle,this.task.dueDate=this.dueDate,this.$store.dispatch("todo/updateTask",this.task),this.taskTitle="",this.dueDate="",this.$emit("close"))},closeDialogDatePicker:function(t){t&&(this.dueDate=t),this.dialogs.datePicker=!1},cancel:function(){console.log("cancel"),this.$emit("close")}},components:{"dialog-date-picker":a("ad45").default}},c=o,l=a("2877"),d=a("6544"),u=a.n(d),f=a("8336"),k=a("b0af"),v=a("99d9"),p=a("cc20"),h=a("62ad"),m=a("a523"),g=a("169a"),b=a("132d"),T=a("0fd9"),_=a("2fa4"),x=a("8654"),D=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=D.exports;u()(D,{VBtn:f["a"],VCard:k["a"],VCardActions:v["a"],VCardTitle:v["b"],VChip:p["a"],VCol:h["a"],VContainer:m["a"],VDialog:g["a"],VIcon:b["a"],VRow:T["a"],VSpacer:_["a"],VTextField:x["a"]})},ad45:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{ref:"dialog",attrs:{value:!0,persistent:"",width:"290px"}},[a("v-date-picker",{attrs:{color:"green",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.cancelDueDateDialog}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:""},on:{click:t.saveDueDateDialog}},[t._v(" OK ")])],1)],1)},s=[],r={props:{initDate:{type:String,default:""}},data:function(){return{date:""}},methods:{cancelDueDateDialog:function(){this.date="",this.$emit("close","")},saveDueDateDialog:function(){this.$emit("close",this.date)}},mounted:function(){this.initDate&&(this.date=this.initDate)}},i=r,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("2e4b"),f=a("169a"),k=a("2fa4"),v=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=v.exports;l()(v,{VBtn:d["a"],VDatePicker:u["a"],VDialog:f["a"],VSpacer:k["a"]})},b3a2:function(t,e,a){"use strict";a("96ba")},d9b1:function(t,e,a){"use strict";a("329f")},df6c:function(t,e,a){"use strict";var n=a("b166");e["a"]={filters:{toDsplayableDate:function(t){return t?Object(n["a"])(new Date(t),"yyyy/MM/dd E"):""}}}},e332:function(t,e,a){"use strict";a("5f9d")},e653:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:!0,persistent:"","max-width":"280"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(" Delete all completed task? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" No ")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.deleteAllDoneTask(e)}}},[t._v(" Yes ")])],1)],1)],1)},s=[],r=a("b85c"),i={methods:{deleteAllDoneTask:function(){var t,e=this.$store.getters["todo/taskDone"],a=Object(r["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.$store.dispatch("todo/deleteTask",n.id)}}catch(s){a.e(s)}finally{a.f()}this.$emit("close")}}},o=i,c=a("2877"),l=a("6544"),d=a.n(l),u=a("8336"),f=a("b0af"),k=a("99d9"),v=a("169a"),p=a("2fa4"),h=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=h.exports;d()(h,{VBtn:u["a"],VCard:f["a"],VCardActions:k["a"],VCardTitle:k["b"],VDialog:v["a"],VSpacer:p["a"]})},edc1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""},on:{click:function(e){t.dialogs.addTask=!0}}},[a("v-icon",[t._v("mdi-plus")])],1),t.dialogs.addTask?a("dialog-add-task",{on:{close:function(e){t.dialogs.addTask=!1}}}):t._e()],1)},s=[],r={data:function(){return{dialogs:{addTask:!1}}},components:{"dialog-add-task":a("6fd1").default}},i=r,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("132d"),f=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=f.exports;l()(f,{VBtn:d["a"],VIcon:u["a"]})}});
//# sourceMappingURL=app.3585ac0c.js.map