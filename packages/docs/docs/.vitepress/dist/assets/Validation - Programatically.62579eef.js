import{_ as c,A as d,r as s,o as l,c as f,d as n,j as p,a as D}from"./app.90a06da7.js";import{s as h}from"./toasts.d20ad0d7.js";const F=[{id:"name",label:"Name",component:"input",required:!0},{id:"age",label:"Age",component:"input",type:"number",parseInput:e=>Number(e),dynamicProps:["error"],error:e=>Number(e)>=18?null:"You have to be over 18!"},{id:"consent",label:"Do you agree with our terms?",component:"input",type:"checkbox",defaultValue:!1,dynamicProps:["error"],error:e=>e===!0?null:"You must accept our terms"}],g={data(){return{schema:F,formData:{name:void 0,age:void 0,consent:void 0},resetFormCounter:0}},methods:{validateProgrammatically(){const e=d(this.formData,this.schema),a=Object.values(e).every(m=>m===null);h(a?"All good!":"Errors remain",e)},setFormData(){this.formData.name="Luca Ban",this.formData.age=18,this.formData.consent=!0,this.resetFormCounter++},clearFormData(){this.formData.name=void 0,this.formData.age=void 0,this.formData.consent=void 0,this.resetFormCounter++}}},v={style:{"margin-bottom":"1rem"}};function y(e,a,m,b,r,o){const u=s("BlitzForm"),i=s("CodeBlock");return l(),f("div",null,[n("div",v,[n("button",{onClick:a[0]||(a[0]=(...t)=>o.validateProgrammatically&&o.validateProgrammatically(...t))},"validate Programmatically"),n("button",{onClick:a[1]||(a[1]=(...t)=>o.setFormData&&o.setFormData(...t))},"Set Form Data"),n("button",{onClick:a[2]||(a[2]=(...t)=>o.clearFormData&&o.clearFormData(...t))},"Clear Form Data")]),(l(),p(u,{showErrorsOn:"never",schema:r.schema,modelValue:r.formData,"onUpdate:modelValue":a[3]||(a[3]=t=>r.formData=t),columnCount:3,key:r.resetFormCounter},null,8,["schema","modelValue"])),D(i,{content:`// formData
${JSON.stringify(r.formData,void 0,2)}`},null,8,["content"])])}var _=c(g,[["render",y]]);export{_ as default};