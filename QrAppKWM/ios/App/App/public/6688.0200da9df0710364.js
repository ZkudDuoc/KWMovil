"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6688],{6688:(h,m,l)=>{l.r(m),l.d(m,{LoginPageModule:()=>x});var f=l(177),i=l(4341),r=l(4742),p=l(70),v=l(467),o=l(3953);function P(e,s){1&e&&(o.j41(0,"div",13),o.EFF(1," El usuario es requerido. "),o.k0s())}function b(e,s){1&e&&(o.j41(0,"div",13),o.EFF(1," La contrase\xf1a es requerida. "),o.k0s())}const C=[{path:"",component:(()=>{var e;class s{constructor(n,a,t){this.formBuilder=n,this.router=a,this.toastController=t,this.usuarios=[{username:"Agustin",password:"agustin",nombreCompleto:"Agustin Cavieres",semestre:"4 semestre",carrera:"Informatica",seccion:"008-V",jornada:"Vespertino"},{username:"Nicolas",password:"nicolas",nombreCompleto:"Nicolas Saavedra",semestre:"2 semestre",carrera:"Mecanica",seccion:"013-D",jornada:"Diurno"},{username:"Benja",password:"benja",nombreCompleto:"Benjamin Morales",semestre:"8 semestre",carrera:"Medicina",seccion:"007-V",jornada:"Vespertino"},{username:"Anais",password:"anais",nombreCompleto:"Anais Morales",semestre:"1 semestre",carrera:"Dictadora",seccion:"000-V",jornada:"ALL DAY"}],this.loginFormulario=this.formBuilder.group({username:["",i.k0.required],password:["",[i.k0.required]]})}validacionLogin(){var n=this;return(0,v.A)(function*(){if(n.loginFormulario.valid){var a,t;const d=null===(a=n.loginFormulario.get("username"))||void 0===a?void 0:a.value,F=null===(t=n.loginFormulario.get("password"))||void 0===t?void 0:t.value,u=n.usuarios.find(g=>g.username===d&&g.password===F);if(u){console.log("Inicio de sesi\xf3n exitoso"),alert("Inicio de sesi\xf3n exitoso");const g={state:{usuario:u}};yield n.router.navigate(["/home"],g),(yield n.toastController.create({message:`Buenos d\xedas, ${null==u?void 0:u.nombreCompleto}!`,duration:2e3,position:"top"})).present()}else console.log("Credenciales incorrectas"),alert("Usuario o contrase\xf1a incorrectos")}else alert("Por favor, completa todos los campos correctamente.")})()}recuperarPassword(){console.log("Recuperar contrase\xf1a"),this.router.navigate(["/recu-contra"])}}return(e=s).\u0275fac=function(n){return new(n||e)(o.rXU(i.ok),o.rXU(p.Ix),o.rXU(r.K_))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-login"]],decls:28,vars:4,consts:[[1,"header-content"],[1,"qr-text"],[1,"asistance-text"],[1,"ion-padding","login-page"],[1,"login-container"],[3,"ngSubmit","formGroup"],["position","floating"],["type","text","formControlName","username"],["class","error-message",4,"ngIf"],["type","password","formControlName","password"],["expand","full","type","submit",3,"disabled"],[1,"forgot-password"],[3,"click"],[1,"error-message"]],template:function(n,a){if(1&n&&(o.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title")(3,"div",0)(4,"span",1),o.EFF(5,"QR'"),o.k0s(),o.j41(6,"span",2),o.EFF(7,"Asistance"),o.k0s()()()()(),o.j41(8,"ion-content",3)(9,"div",4)(10,"ion-card")(11,"ion-card-content")(12,"form",5),o.bIt("ngSubmit",function(){return a.validacionLogin()}),o.j41(13,"ion-item")(14,"ion-label",6),o.EFF(15,"Usuario"),o.k0s(),o.nrm(16,"ion-input",7),o.k0s(),o.DNE(17,P,2,0,"div",8),o.j41(18,"ion-item")(19,"ion-label",6),o.EFF(20,"Contrase\xf1a"),o.k0s(),o.nrm(21,"ion-input",9),o.k0s(),o.DNE(22,b,2,0,"div",8),o.j41(23,"ion-button",10),o.EFF(24,"Ingresar"),o.k0s()(),o.j41(25,"div",11)(26,"a",12),o.bIt("click",function(){return a.recuperarPassword()}),o.EFF(27,"Cambia tu contrase\xf1a ac\xe1"),o.k0s()()()()()()),2&n){let t,d;o.R7$(12),o.Y8G("formGroup",a.loginFormulario),o.R7$(5),o.Y8G("ngIf",(null==(t=a.loginFormulario.get("username"))?null:t.invalid)&&(null==(t=a.loginFormulario.get("username"))?null:t.touched)),o.R7$(5),o.Y8G("ngIf",(null==(d=a.loginFormulario.get("password"))?null:d.invalid)&&(null==(d=a.loginFormulario.get("password"))?null:d.touched)),o.R7$(),o.Y8G("disabled",a.loginFormulario.invalid)}},dependencies:[f.bT,i.qT,i.BC,i.cb,i.j4,i.JD,r.Jm,r.b_,r.I9,r.W9,r.eU,r.$w,r.uz,r.he,r.BC,r.ai,r.Gw],styles:['@charset "UTF-8";.header-content[_ngcontent-%COMP%]{display:flex;align-items:center}.qr-text[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:4px}.asistance-text[_ngcontent-%COMP%]{font-size:1.5rem;color:purple;border:2px solid purple;border-radius:4px;padding:2px 4px;background-color:#fff}ion-footer[_ngcontent-%COMP%]{--background: purple}ion-toolbar[_ngcontent-%COMP%]{--background: purple;--color: white}ion-title[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}ion-header[_ngcontent-%COMP%]{--padding-start: 0;--padding-end: 0}ion-toolbar[_ngcontent-%COMP%]{--padding-start: 90px;--padding-end: 90px}.login-page[_ngcontent-%COMP%]{background:linear-gradient(135deg,#6a0572,#a0f);display:flex;justify-content:center;align-items:center;height:100%}.login-container[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:20px}ion-card[_ngcontent-%COMP%]{background-color:#f3f3f3ce;border-radius:15px;box-shadow:0 8px 15px #0000001a}ion-item[_ngcontent-%COMP%]{--background: #fff;--border-radius: 10px;margin-bottom:20px}ion-button[_ngcontent-%COMP%]{--background: #4a148c;--border-radius: 20px;--box-shadow: 0px 8px 15px rgba(0, 0, 0, .2)}.error-message[_ngcontent-%COMP%]{color:red;font-size:12px;margin-left:10px}.login-container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{padding:15px}ion-label[_ngcontent-%COMP%]{color:#6a0572}ion-input[_ngcontent-%COMP%]{color:#000}']}),s})()}];let M=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[p.iI.forChild(C),p.iI]}),s})(),x=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[f.MD,i.YN,i.X1,r.bv,M]}),s})()}}]);