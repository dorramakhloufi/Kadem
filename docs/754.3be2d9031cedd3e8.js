"use strict";(self.webpackChunkmini_project=self.webpackChunkmini_project||[]).push([[754],{5754:(Y,v,l)=>{l.r(v),l.d(v,{UniversiteModule:()=>N});var d=l(9808),u=l(5425);class g{}var c=l(1208),e=l(1223),r=l(2382);function h(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," this field is required "),e.qZA())}function b(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," minlength = 3 ! "),e.qZA())}function U(t,o){if(1&t&&(e.TgZ(0,"div",44),e.YNc(1,h,2,0,"div",45),e.YNc(2,b,2,0,"div",45),e.qZA()),2&t){e.oxw();const i=e.MAs(20);e.xp6(1),e.Q6J("ngIf",i.hasError("required")),e.xp6(1),e.Q6J("ngIf",i.hasError("minlength"))}}function T(t,o){1&t&&(e.TgZ(0,"div",44),e._uU(1," this field is required "),e.qZA())}function A(t,o){1&t&&(e.TgZ(0,"div",44),e._uU(1," this field is required "),e.qZA())}function q(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"this field is required !"),e.qZA())}function C(t,o){if(1&t&&(e.TgZ(0,"div",44),e.YNc(1,q,2,0,"div",45),e.qZA()),2&t){e.oxw();const i=e.MAs(56);e.xp6(1),e.Q6J("ngIf",i.hasError("required"))}}let m=(()=>{class t{constructor(i,n,a){this.router=i,this.univServ=n,this.currentRoute=a}ngOnInit(){this.universite=new g;let i=this.currentRoute.snapshot.params.id;null!=i?(this.action="update",this.univServ.getUniversiteById(i).subscribe(n=>this.universite=n)):(this.action="Add",this.universite=new g)}Back(){this.router.navigate(["backoffice/universite"])}save(){"Add"==this.action?this.univServ.addUniversite(this.universite).subscribe(()=>{this.router.navigate(["backoffice/universite"])}):this.univServ.updateuniversite(this.universite).subscribe(()=>{this.router.navigate(["backoffice/universite"])})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u.F0),e.Y36(c.Y),e.Y36(u.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-formuniversite"]],decls:72,vars:12,consts:[[1,"p-3","text-center","text-white"],[1,"container"],[1,"row","row-cols-1","row-cols-md-3","g-4","mb-5"],[1,"container-xxl","flex-grow-1","container-p-y"],[1,"row"],[1,"col-xl"],[1,"card","mb-4"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"card-body"],["f","ngForm"],[1,"form-group","mb-3"],["for"," nomUniv",1,"form-label"],[1,"input-group","input-group-merge"],["id","basic-icon-default-company2",1,"input-group-text"],[1,"bx","bx-buildings"],["name","nomUniv","type","text","required","","minlength","3","id","nomUniv","placeholder","Enter University name","aria-describedby","basic-icon-default-company2",1,"form-control",3,"ngModel","ngModelChange"],["n","ngModel"],["class","alert alert-danger",4,"ngIf"],["for","inputState",1,"form-label"],["required","","name","option","id","exampleFormControlSelect1","aria-label","Default select example",1,"form-select",3,"ngModel","ngModelChange"],["p","ngModel"],["selected",""],["value","charguia"],["value","ghazela"],["value","yes"],["value","no"],["for","date-input",1,"col-md-2","col-form-label"],[1,"col-md-10"],["required","","name","date_fondation","type","date","value","","id","html5-date-input",1,"form-control",3,"ngModel","ngModelChange"],["d","ngModel"],[1,"form-group"],[1,"form-label"],["type","text","name","image","required","","placeholder","Image Url",1,"form-control",3,"ngModel","ngModelChange"],["i","ngModel"],[1,"mb-3"],["for","basic-icon-default-message",1,"form-label"],["id","basic-icon-default-message2",1,"input-group-text"],[1,"bx","bx-comment"],["type","text","name","description","required","",1,"form-control",3,"ngModel","ngModelChange"],["c","ngModel"],["id","basic-icon-default-message","placeholder"," University Description","aria-describedby","basic-icon-default-message2",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled","click"],[1,"btn","btn-danger",3,"click"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h5",8),e._uU(9,"Form"),e.qZA()(),e.TgZ(10,"div",9)(11,"form",null,10)(13,"div",11)(14,"label",12),e._uU(15,"University Name"),e.qZA(),e.TgZ(16,"div",13)(17,"span",14),e._UZ(18,"i",15),e.qZA(),e.TgZ(19,"input",16,17),e.NdJ("ngModelChange",function(s){return n.universite.nomUniv=s}),e.qZA(),e.YNc(21,U,3,2,"div",18),e.qZA()(),e.TgZ(22,"div",11)(23,"label",19),e._uU(24,"Emplacement"),e.qZA(),e.TgZ(25,"select",20,21),e.NdJ("ngModelChange",function(s){return n.universite.emplacement=s}),e.TgZ(27,"option",22),e._uU(28,"Open to select option"),e.qZA(),e.TgZ(29,"option",23),e._uU(30,"charguia"),e.qZA(),e.TgZ(31,"option",24),e._uU(32,"ghazela"),e.qZA()(),e.YNc(33,T,2,0,"div",18),e.qZA(),e.TgZ(34,"div",11)(35,"label",19),e._uU(36,"Aggregation"),e.qZA(),e.TgZ(37,"select",20,21),e.NdJ("ngModelChange",function(s){return n.universite.accrediation=s}),e.TgZ(39,"option",22),e._uU(40,"Open to select option"),e.qZA(),e.TgZ(41,"option",25),e._uU(42,"yes"),e.qZA(),e.TgZ(43,"option",26),e._uU(44,"no"),e.qZA()()(),e.TgZ(45,"div",11)(46,"label",27),e._uU(47,"Date_fondation"),e.qZA(),e.TgZ(48,"div",28)(49,"input",29,30),e.NdJ("ngModelChange",function(s){return n.universite.date_fondation=s}),e.qZA(),e.YNc(51,A,2,0,"div",18),e.qZA(),e.TgZ(52,"div",31)(53,"label",32),e._uU(54,"Image"),e.qZA(),e.TgZ(55,"input",33,34),e.NdJ("ngModelChange",function(s){return n.universite.img=s}),e.qZA()(),e.YNc(57,C,2,1,"div",18),e.qZA(),e.TgZ(58,"div",35)(59,"label",36),e._uU(60,"Description"),e.qZA(),e.TgZ(61,"div",13)(62,"span",37),e._UZ(63,"i",38),e.qZA(),e.TgZ(64,"input",39,40),e.NdJ("ngModelChange",function(s){return n.universite.description=s}),e.qZA(),e._UZ(66,"textarea",41),e.qZA()(),e.TgZ(67,"button",42),e.NdJ("click",function(){return n.save()}),e._uU(68),e.qZA(),e._uU(69," \xa0 "),e.TgZ(70,"button",43),e.NdJ("click",function(){return n.Back()}),e._uU(71,"cancel"),e.qZA()()()()()()()()()()),2&i){const a=e.MAs(12),s=e.MAs(20),p=e.MAs(26),_=e.MAs(50),Z=e.MAs(56);e.xp6(19),e.Q6J("ngModel",n.universite.nomUniv),e.xp6(2),e.Q6J("ngIf",s.invalid&&s.touched),e.xp6(4),e.Q6J("ngModel",n.universite.emplacement),e.xp6(8),e.Q6J("ngIf",p.invalid&&p.touched),e.xp6(4),e.Q6J("ngModel",n.universite.accrediation),e.xp6(12),e.Q6J("ngModel",n.universite.date_fondation),e.xp6(2),e.Q6J("ngIf",_.invalid&&_.touched),e.xp6(4),e.Q6J("ngModel",n.universite.img),e.xp6(2),e.Q6J("ngIf",Z.invalid&&Z.touched),e.xp6(7),e.Q6J("ngModel",n.universite.description),e.xp6(3),e.Q6J("disabled",a.invalid),e.xp6(1),e.Oqu(n.action)}},directives:[r._Y,r.JL,r.F,r.Fj,r.Q7,r.wO,r.JJ,r.On,d.O5,r.EJ,r.YN,r.Kr],styles:[""]}),t})();var f=l(3189);function x(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"tr",29)(1,"td"),e._UZ(2,"i",30),e.TgZ(3,"strong"),e._uU(4),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"ul",31)(9,"li",32),e._UZ(10,"img",33),e.qZA()()(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"span",34),e._uU(15),e.qZA()(),e.TgZ(16,"td")(17,"button",35),e._uU(18,"Edit"),e.qZA(),e._uU(19," \xa0 "),e.TgZ(20,"button",36),e.NdJ("click",function(){const s=e.CHM(i).$implicit;return e.oxw().deleteUniversite(s)}),e._uU(21,"Delete"),e.qZA()(),e._UZ(22,"td"),e.qZA()}if(2&t){const i=o.$implicit;e.xp6(4),e.Oqu(i.nomUniv),e.xp6(2),e.Oqu(i.emplacement),e.xp6(3),e.s9C("title",i.nomUniv),e.xp6(1),e.s9C("src",i.img,e.LSH),e.xp6(2),e.Oqu(i.date_fondation),e.xp6(3),e.Oqu(i.accrediation),e.xp6(2),e.MGl("routerLink","update/",i.idUniv,"")}}const M=function(){return{"font-size.px":20}};let y=(()=>{class t{constructor(i,n,a){this.univServ=i,this.router=n,this.currentRoute=a,this.page=1,this.pagesize=15}ngOnInit(){this.univServ.getAlluniversities().subscribe(i=>{this.listUniv=i},()=>{},()=>{this.length=this.listUniv.length})}deleteUniversite(i){confirm("Are you sure to delete"+i.nomUniv)&&(this.univServ.deleteUniversite(i.idUniv).subscribe(),location.reload())}Back(){this.router.navigate(["backoffice/conventions"])}new(){let i=this.currentRoute.snapshot.params.id;null!=i&&this.univServ.getCnveByUnv(i).subscribe(n=>this.conventions=n)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(c.Y),e.Y36(u.F0),e.Y36(u.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listuniversite"]],decls:53,vars:14,consts:[[1,"p-3","text-center","text-white"],[1,"container"],[1,"row"],[1,"navbar","navbar-example","navbar-expand-lg","blue"],[1,"container-fluid"],["routerLink","universities","href","javascript:void(0)",1,"navbar-brand",3,"ngStyle"],["type","button","data-bs-toggle","collapse","data-bs-target","",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbar-ex-4",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],["aria-disabled","true","href","javascript:void(0)",1,"nav-item","nav-link","active",3,"click"],["routerLink","form","href","javascript:void(0)",1,"nav-item","nav-link"],[1,"d-flex"],[1,"input-group"],[1,"input-group-text"],[1,"tf-icons","bx","bx-search"],["type","text","name","search","autocomplete","off","placeholder","Search by name",1,"form-control",3,"ngModel","ngModelChange"],[1,"container-xxl","flex-grow-1","container-p-y"],[1,"fw-bold","py-3","mb-4"],[1,"text-muted","fw-light"],[1,"card"],[1,"table-responsive","text-nowrap"],[1,"table","table-dark"],[1,"table-border-bottom-0"],["class","table-dark",4,"ngFor","ngForOf"],[1,"justify-content-center","d-flex"],[1,"row","g-0","align-items-center","pb-4"],[1,"col-sm"],[1,"mb-sm"],[1,"table-dark"],[1,"fab","fa-sketch","fa-lg","text-warning","me-3"],[1,"list-unstyled","users-list","m-0","avatar-group","d-flex","align-items-center"],["data-bs-toggle","tooltip","data-popup","tooltip-custom","data-bs-placement","top",1,"avatar","avatar-m","pull-up",3,"title"],["alt","Avatar",1,"rounded-circle",3,"src"],[1,"badge","bg-label-primary","me-1"],["type","button",1,"btn","btn-outline-success",3,"routerLink"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(i,n){1&i&&(e._UZ(0,"br"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"nav",3)(5,"div",4)(6,"a",5),e._uU(7,"Universities"),e.qZA(),e.TgZ(8,"button",6),e._UZ(9,"span",7),e.qZA(),e.TgZ(10,"div",8)(11,"div",9)(12,"a",10),e.NdJ("click",function(){return n.Back()}),e._uU(13,"conventions"),e.qZA(),e.TgZ(14,"a",11),e._uU(15,"Add University"),e.qZA()(),e.TgZ(16,"form",12)(17,"div",13)(18,"span",14),e._UZ(19,"i",15),e.qZA(),e.TgZ(20,"input",16),e.NdJ("ngModelChange",function(s){return n.searchText=s}),e.qZA()()()()()(),e.TgZ(21,"div",17)(22,"h4",18),e._UZ(23,"span",19),e._uU(24," List of Universities"),e.qZA(),e.TgZ(25,"div",20)(26,"div",21)(27,"table",22)(28,"thead")(29,"tr")(30,"th"),e._uU(31,"University Name"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Emplacement"),e.qZA(),e.TgZ(34,"th"),e._uU(35,"Image "),e.qZA(),e.TgZ(36,"th"),e._uU(37,"Date_fondation"),e.qZA(),e.TgZ(38,"th"),e._uU(39,"Aggregation"),e.qZA(),e.TgZ(40,"th"),e._uU(41,"Description"),e.qZA(),e._UZ(42,"th"),e.qZA()(),e.TgZ(43,"tbody",23),e.YNc(44,x,23,7,"tr",24),e.ALo(45,"filter"),e.ALo(46,"slice"),e.qZA()()()()(),e.TgZ(47,"div",25)(48,"div",26)(49,"div",27)(50,"div")(51,"p",28),e._uU(52),e.qZA()()()()()()()()),2&i&&(e.xp6(6),e.Q6J("ngStyle",e.DdM(13,M)),e.xp6(14),e.Q6J("ngModel",n.searchText),e.xp6(24),e.Q6J("ngForOf",e.xi3(45,6,e.Dn7(46,9,n.listUniv,(n.page-1)*n.pagesize,n.page*n.pagesize),n.searchText)),e.xp6(8),e.lnq("Showing ",n.page*n.pagesize-(n.pagesize-1)," to ",n.page*n.pagesize," of ",n.length,""))},directives:[u.yS,d.PC,r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,d.sg,u.rH],pipes:[f.Z,d.OU],styles:[""]}),t})(),F=(()=>{class t{constructor(){this.notification=new e.vpe}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-parent"]],inputs:{universite:"universite"},outputs:{notification:"notification"},decls:10,vars:3,consts:[[1,"card","h-100"],["alt","Card image cap",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"card-footer"],[1,"text-muted"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"h5",3),e._uU(4),e.qZA(),e.TgZ(5,"p",4),e._uU(6),e.qZA()(),e.TgZ(7,"div",5)(8,"small",6),e._uU(9,"Last updated 3 mins ago"),e.qZA()()()),2&i&&(e.xp6(1),e.s9C("src",n.universite.img,e.LSH),e.xp6(3),e.Oqu(n.universite.nomUniv),e.xp6(2),e.hij(" ",n.universite.description," "))},styles:[""]}),t})();function J(t,o){1&t&&e._UZ(0,"app-parent",4),2&t&&e.Q6J("universite",o.$implicit)}const w=[{path:"",component:y},{path:"form",component:m},{path:"universities",component:(()=>{class t{constructor(i){this.univServ=i}ngOnInit(){this.univServ.getAlluniversities().subscribe(i=>{this.listUniv=i},()=>{},()=>{this.length=this.listUniv.length})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(c.Y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-universities"]],decls:6,vars:1,consts:[[1,"p-3","text-center","text-white"],[1,"container"],[1,"row","row-cols-1","row-cols-md-3","g-4","mb-5"],[3,"universite",4,"ngFor","ngForOf"],[3,"universite"]],template:function(i,n){1&i&&(e._UZ(0,"br"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2),e._UZ(4,"br"),e.YNc(5,J,1,1,"app-parent",3),e.qZA()()()),2&i&&(e.xp6(5),e.Q6J("ngForOf",n.listUniv))},directives:[d.sg,F],styles:[""]}),t})()},{path:"update/:id",component:m}];let k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(w)],u.Bz]}),t})(),N=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,r.u5,k,f.h]]}),t})()}}]);