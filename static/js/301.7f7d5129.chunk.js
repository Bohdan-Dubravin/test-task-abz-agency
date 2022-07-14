"use strict";(self.webpackChunktest_abz_agency=self.webpackChunktest_abz_agency||[]).push([[301],{1979:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var a=r(4165),n=r(5861),s=r(885),o=r(2791),i=r(4677),c=r(816),l=r(184),u=function(e){var t=e.name,r=e.value,a=e.selected,n=e.text,s=e.onChange;return(0,l.jsxs)("label",{className:"radioButton__radio-container",children:[(0,l.jsx)("input",{value:r,name:t,className:"radioButton__input",type:"radio",onClick:function(){return s(r)}}),(0,l.jsx)("div",{className:"radioButton__circle ".concat(r===a&&"radioButton__circle--active")}),(0,l.jsx)("div",{className:"radioButton__helper-text",children:n})]})},m=r(4569),p=r.n(m),d=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/token");case 2:return t=e.sent,e.abrupt("return",t.data.token);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return t=e.sent,e.abrupt("return",p().create({baseURL:"https://frontend-test-assignment-api.abz.agency/api/v1",headers:{Token:t}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=h,f=r(5705),x=r(1475),v=x.Ry({name:x.Z_().min(2,"Name should have more than 2 characters").required("Enter your name").max(60,"Name should have less than 60 characters"),email:x.Z_().required("Enter email").matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,"Enter valid email (example-email@gmail.com)"),phone:x.Z_().matches(/^(?:\+38)?(0\d{9})$/,"Number shoud have format +38 XXX XXX XX XX ").required("Enter phone number"),photo:x.nK().required("Download your photo").test("fileType","Photo must have jpeg/jpg formats",(function(e){return e&&"image/jpg"===e.type||e&&"image/jpeg"===e.type})).test("fileSize","Photo is too large, max size 5mb",(function(e){return e&&e.size<=5e6})).test("filePX","Photo should be at least 70x70 px ",(function(e){return e&&e.size>=500}))}),g=r(1694),j=r.n(g),N=r.p+"static/media/success-image.2a787fdc9bc501199014.png",b=r(4321),U=[{fieldName:"name",text:"Your name"},{fieldName:"email",text:"Email"},{fieldName:"phone",text:"Phone",defaultHelperText:"+38 (XXX) XXX - XX - XX"}],F=function(e){var t=e.getUsers,r=(0,o.useState)([]),m=(0,s.Z)(r,2),p=m[0],d=m[1],h=(0,o.useState)(!1),x=(0,s.Z)(h,2),g=x[0],F=x[1],y=(0,o.useState)(""),Z=(0,s.Z)(y,2),X=Z[0],w=Z[1],k=(0,o.useState)(!1),z=(0,s.Z)(k,2),S=z[0],B=z[1],E=new FormData;(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/positions");case 2:t=e.sent,d(t.data.positions);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var C=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),E.set("position_id",r.position_id.toString()),E.set("name",r.name),E.set("email",r.email),E.set("phone",r.phone),E.set("photo",r.photo),w(""),e.prev=7,e.next=10,_();case 10:return n=e.sent,e.next=13,n.post("/users",E);case 13:if(!e.sent.data.success){e.next=20;break}B(!1),F(!0),t(),e.next=21;break;case 20:throw new Error("Somthing went wrong");case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(7),B(!1),w(e.t0.response.data.message);case 27:case"end":return e.stop()}}),e,null,[[7,23]])})));return function(t){return e.apply(this,arguments)}}();return g?(0,l.jsxs)("div",{className:"successRegistaration page__container",children:[(0,l.jsx)("h1",{className:"successRegistaration__title",children:"User successfully registered"}),(0,l.jsx)("div",{className:"successRegistaration__img-container",children:(0,l.jsx)("img",{className:"successRegistaration__img",src:N,alt:"img-success-Registaration"})})]}):(0,l.jsxs)("section",{id:"sign-up",className:"createUserForm",children:[(0,l.jsx)("h1",{className:"createUserForm__title",children:"Working with POST request"}),(0,l.jsx)(f.J9,{validationSchema:v,initialValues:{name:"",email:"",phone:"",position_id:1,photo:null},validateOnBlur:!0,onSubmit:function(e){C(e)},children:function(e){var t=e.values,r=e.errors,a=e.touched,n=e.handleChange,s=e.handleBlur,o=e.isValid,i=e.handleSubmit,m=e.dirty,d=e.setFieldValue;return(0,l.jsxs)("form",{onSubmit:i,className:"createUserForm__form",children:[(0,l.jsx)("div",{className:"createUserForm__main-inputs",children:U.map((function(e){var o=e.fieldName,i=e.text,c=e.defaultHelperText;return(0,l.jsxs)("div",{className:"createUserForm__input-container",children:[(0,l.jsx)("input",{className:j()("createUserForm__input",{"createUserForm__input--error":a[o]&&r[o]}),type:"text",id:o,name:o,value:t[o],onChange:n,onBlur:s}),(0,l.jsx)("label",{className:j()("createUserForm__label",{"not-Empty":t[o],"createUserForm__label--error":a[o]&&r[o]}),htmlFor:o,children:i}),(0,l.jsx)("p",{className:j()("createUserForm__input-helper",{"createUserForm__input-helper--error":a[o]&&r[o]}),children:a[o]&&r[o]&&r[o]||c})]},o)}))}),(0,l.jsxs)("div",{role:"group",className:"createUserForm__user-position",children:[(0,l.jsx)("p",{className:"createUserForm__positions-title",children:"Select your position"}),p.length>0&&p.map((function(e){return(0,l.jsx)(u,{name:"position_id",value:e.id,selected:t.position_id,text:e.name,onChange:function(e){return d("position_id",e)}},e.id)}))]}),(0,l.jsxs)("div",{className:j()("createUserForm__file-uploader",{"createUserForm__file-uploader--error":r.photo&&a.photo}),children:[(0,l.jsx)("input",{onChange:function(e){return d("photo",e.currentTarget.files[0])},onBlur:s,type:"file",style:{display:"none"},multiple:!1,id:"fileloader"}),(0,l.jsx)("label",{htmlFor:"fileloader",className:j()("createUserForm__fileLoad-btn",{"createUserForm__fileLoad-btn--error":r.photo&&a.photo}),children:"Upload"}),(0,l.jsx)("p",{className:j()("createUserForm__fileName",{"createUserForm__fileName--empty":!t.photo}),children:t.photo&&t.photo.name||"Upload your photo"}),(0,l.jsx)("p",{className:"createUserForm__input-helper createUserForm__input-helper--error",children:a.photo&&r.photo})]}),(0,l.jsx)("h2",{className:"createUserForm__responseError",children:X}),S?(0,l.jsx)(b.Z,{}):(0,l.jsx)(c.Z,{disabled:!o||!m,classModificator:"createUserForm__button",children:"Sign up"})]})}})]})}},4321:function(e,t,r){var a=r(184);t.Z=function(){return(0,a.jsx)("div",{className:"loader"})}}}]);
//# sourceMappingURL=301.7f7d5129.chunk.js.map