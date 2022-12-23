(function(){"use strict";var e={503:function(e,t,o){var n=o(9242),i=o(3396),l=o(7139);const d={id:"app"},a=(0,i._)("h1",null,"To-Do List",-1),s={"aria-labelledby":"list-summary",class:"stack-large"};function r(e,t,o,n,r,u){const c=(0,i.up)("to-do-form"),b=(0,i.up)("to-do-item");return(0,i.wg)(),(0,i.iD)("div",d,[a,(0,i.Wm)(c,{onTodoAdded:u.addToDo},null,8,["onTodoAdded"]),(0,i._)("h2",{id:"list-summary",ref:"listSummary",tabindex:"-1"},(0,l.zw)(u.listSummary),513),(0,i._)("ul",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.ToDoItems,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id},[(0,i.Wm)(b,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:t=>u.updateDoneStatus(e.id),onItemDeleted:t=>u.deleteToDo(e.id),onItemEdited:t=>u.editToDo(e.id,t)},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])])))),128))])])}o(7658);const u={key:0,class:"stack-small"},c={class:"custom-checkbox"},b=["id","checked"],m=["for"],f={class:"btn-group"},p={class:"visually-hidden"},h={class:"visually-hidden"};function v(e,t,o,n,d,a){const s=(0,i.up)("to-do-item-edit-form");return d.isEditing?((0,i.wg)(),(0,i.j4)(s,{key:1,id:o.id,label:o.label,onItemEdited:a.itemEdited,onEditCancelled:a.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",c,[(0,i._)("input",{type:"checkbox",id:o.id,checked:a.isDone,class:"checkbox",onChange:t[0]||(t[0]=t=>e.$emit("checkbox-changed"))},null,40,b),(0,i._)("label",{for:o.id,class:"checkbox-label"},(0,l.zw)(o.label),9,m)]),(0,i._)("div",f,[(0,i._)("button",{type:"button",class:"btn",ref:"editButton",onClick:t[1]||(t[1]=(...e)=>a.toggleToItemEditForm&&a.toggleToItemEditForm(...e))},[(0,i.Uk)(" Edit "),(0,i._)("span",p,(0,l.zw)(o.label),1)],512),(0,i._)("button",{type:"button",class:"btn btn__danger",onClick:t[2]||(t[2]=(...e)=>a.deleteToDo&&a.deleteToDo(...e))},[(0,i.Uk)(" Delete "),(0,i._)("span",h,(0,l.zw)(o.label),1)])])]))}const g={class:"edit-label"},_=["id"],y={class:"btn-group"},w={class:"visually-hidden"},D={class:"visually-hidden"};function T(e,t,o,d,a,s){return(0,i.wg)(),(0,i.iD)("form",{class:"stack-small",onSubmit:t[3]||(t[3]=(0,n.iM)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[(0,i._)("div",null,[(0,i._)("label",g,'Edit Name for "'+(0,l.zw)(o.label)+'"',1),(0,i.wy)((0,i._)("input",{id:o.id,ref:"labelInput",type:"text",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>a.newLabel=e)},null,8,_),[[n.nr,a.newLabel,void 0,{lazy:!0,trim:!0}]])]),(0,i._)("div",y,[(0,i._)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>s.onCancel&&s.onCancel(...e))},[(0,i.Uk)(" Cancel "),(0,i._)("span",w,"editing "+(0,l.zw)(o.label),1)]),(0,i._)("button",{type:"submit",class:"btn btn__primary",onClick:t[2]||(t[2]=(...e)=>s.onSubmit&&s.onSubmit(...e))},[(0,i.Uk)(" Save "),(0,i._)("span",D,"edit for "+(0,l.zw)(o.label),1)])])],32)}var k={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel(){this.$emit("edit-cancelled")}},mounted(){const e=this.$refs.labelInput;e.focus()}},I=o(89);const E=(0,I.Z)(k,[["render",T],["__scopeId","data-v-6b881b50"]]);var C=E,S={components:{ToDoItemEditForm:C},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data(){return{isEditing:!1}},computed:{isDone(){return this.done}},methods:{deleteToDo(){this.$emit("item-deleted")},toggleToItemEditForm(){console.log(this.$refs.editButton),this.isEditing=!0},itemEdited(e){this.$emit("item-edited",e),this.isEditing=!1,this.focusOnEditButton()},editCancelled(){this.isEditing=!1,this.focusOnEditButton()},focusOnEditButton(){this.$nextTick((()=>{const e=this.$refs.editButton;e.focus()}))}}};const x=(0,I.Z)(S,[["render",v],["__scopeId","data-v-3ced9e05"]]);var O=x;const $=(0,i._)("h2",{class:"label-wrapper"},[(0,i._)("label",{for:"new-todo-input",class:"label_lg"}," What needs to be done? ")],-1),z=(0,i._)("button",{type:"submit",class:"btn btn__primary btn__lg"},"Add",-1);function L(e,t,o,l,d,a){return(0,i.wg)(),(0,i.iD)("form",{onSubmit:t[1]||(t[1]=(0,n.iM)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[$,(0,i.wy)((0,i._)("input",{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>d.label=e),class:"input__lg"},null,512),[[n.nr,d.label,void 0,{lazy:!0,trim:!0}]]),z],32)}var j={methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data(){return{label:""}}};const B=(0,I.Z)(j,[["render",L]]);var F=B,U=o(2e3),q=o.n(U),A={name:"App",components:{ToDoItem:O,ToDoForm:F},data(){return{ToDoItems:[{id:q()("todo-"),label:"Learn Vue",done:!1},{id:q()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:q()("todo-"),label:"Have fun",done:!0},{id:q()("todo-"),label:"Create a to-do list",done:!1}]}},methods:{addToDo(e){this.ToDoItems.push({id:q()("todo-"),label:e,done:!1})},updateDoneStatus(e){const t=this.ToDoItems.find((t=>t.id===e));t.done=!t.done},deleteToDo(e){const t=this.ToDoItems.findIndex((t=>t.id===e));this.ToDoItems.splice(t,1),this.$refs.listSummary.focus()},editToDo(e,t){const o=this.ToDoItems.find((t=>t.id===e));o.label=t}},computed:{listSummary(){const e=this.ToDoItems.filter((e=>e.done)).length;return`${e} out of ${this.ToDoItems.length} items completed`}}};const V=(0,I.Z)(A,[["render",r]]);var Z=V;(0,n.ri)(Z).mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,l){if(!n){var d=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],l=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&l||d>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(a=!1,l<d&&(d=l));if(a){e.splice(u--,1);var r=i();void 0!==r&&(t=r)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,i,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,d=n[0],a=n[1],s=n[2],r=0;if(d.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var u=s(o)}for(t&&t(n);r<d.length;r++)l=d[r],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(503)}));n=o.O(n)})();
//# sourceMappingURL=app.0adec8be.js.map