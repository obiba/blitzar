import{E as b}from"./VueFinalModal.esm.30e6e2d5.js";import{_ as f,B as g,D as N,G as _,L as h,r as s,o as m,c as w,a as c,n as C,j as y,F as M}from"./app.90a06da7.js";const I=g(N),v={components:{VueFinalModal:b},setup(){const i=_([{id:"id8269187329780852",balance:93683,birthdate:"1946-07-22",firstName:"Harper",lastName:"Nolan",company:"Tortor At Risus LLC"},{id:"id44304518826349204",balance:69632,birthdate:"1945-11-27",firstName:"Whoopi",lastName:"David",company:"Ipsum Institute"},{id:"id5068577691466047",balance:75903,birthdate:"1955-10-01",firstName:"Peter",lastName:"Mendez",company:"Curabitur Dictum LLC"},{id:"id05232596295403691",balance:53509,birthdate:"1977-06-21",firstName:"Harrison",lastName:"Miller",company:"Enim Etiam Imperdiet Industries"},{id:"id23809333906635666",balance:93450,birthdate:"2017-11-27",firstName:"Wendy",lastName:"Strong",company:"Ac PC"},{id:"id7894530275645739",balance:64590,birthdate:"1975-12-10",firstName:"Kyla",lastName:"Dalton",company:"Urna Nec Luctus PC"},{id:"id9425069129254229",balance:72444,birthdate:"2001-07-31",firstName:"Aimee",lastName:"Stephens",company:"Tempus Incorporated"},{id:"id5539749518518775",balance:99856,birthdate:"1972-01-28",firstName:"Phelan",lastName:"Jennings",company:"Consectetuer Adipiscing Elit LLP"},{id:"id9413108287279646",balance:83325,birthdate:"1966-11-17",firstName:"Xena",lastName:"Emerson",company:"Mollis Foundation"},{id:"id8560871658852105",balance:50981,birthdate:"1995-07-26",firstName:"Althea",lastName:"Mcdaniel",company:"Non Foundation"},{id:"id04508174972460055",balance:97869,birthdate:"1945-10-01",firstName:"Shad",lastName:"Beard",company:"Mollis Incorporated"}]),e=h({isShowingModal:!1,editingRowData:null,remountCounter:0});function l(n){e.editingRowData=n,e.remountCounter++,e.isShowingModal=!0}function a(n){const t=n.newData,d=e.editingRowData.id,o=i.value.find(p=>p.id===d);Object.assign(o,t),e.isShowingModal=!1}function r(){const n=e.editingRowData.id,t=i.value.findIndex(d=>d.id===n);i.value.splice(t,1),e.isShowingModal=!1}return{rows:i,schemaColumnsAndGrid:[{component:"button",slot:"Edit",mode:"edit",events:{click:(n,{formData:t})=>{l(t)}}},{id:"firstName",label:"First Name",component:"input"},{id:"lastName",label:"Last Name",component:"input"},{id:"company",label:"Company",component:"input"},{id:"birthdate",label:"Birthdate",component:"input"},{id:"balance",label:"Balance",component:"input",type:"number",parseValue:(n,{mode:t})=>t==="raw"?n.toLocaleString():n,parseInput:n=>Number(n)}],editInfo:e,openEditModal:l,saveEdits:a,deleteEditingRow:r,blitzGridToggle:I}}};function B(i,e,l,a,r,u){const n=s("BlitzTable"),t=s("BlitzForm"),d=s("VueFinalModal");return m(),w(M,null,[c(n,{schemaColumns:a.schemaColumnsAndGrid,schemaGrid:a.schemaColumnsAndGrid,rows:a.rows,gridToggleField:{component:a.blitzGridToggle}},null,8,["schemaColumns","schemaGrid","rows","gridToggleField"]),c(d,{classes:"form-modal",modelValue:a.editInfo.isShowingModal,"onUpdate:modelValue":e[3]||(e[3]=o=>a.editInfo.isShowingModal=o)},{default:C(()=>[(m(),y(t,{schema:a.schemaColumnsAndGrid.slice(1),modelValue:a.editInfo.editingRowData,actionButtons:["delete","edit","cancel","save"],columnCount:2,key:a.editInfo.remountCounter,onCancel:e[0]||(e[0]=o=>a.editInfo.isShowingModal=!1),onSave:e[1]||(e[1]=o=>a.saveEdits(o)),onDelete:e[2]||(e[2]=()=>a.deleteEditingRow())},null,8,["schema","modelValue"]))]),_:1},8,["modelValue"])],64)}var F=f(v,[["render",B],["__scopeId","data-v-5056bd5c"]]);export{F as default};