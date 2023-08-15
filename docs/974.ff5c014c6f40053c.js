"use strict";(self.webpackChunkmini_project=self.webpackChunkmini_project||[]).push([[974],{1974:(R,d,s)=>{s.r(d),s.d(d,{ClubsModule:()=>D});var a=s(9808),c=s(5425),Z=s(2340),e=s(1223),T=s(520);let p=(()=>{class n{constructor(o){this.http=o,this.url=Z.N.defaultUrl+"/club"}getAllClubs(){return this.http.get(this.url)}addClub(o){return this.http.post(this.url+"/add",o)}updateClub(o,t){return this.http.put(this.url+"/update/"+o,t)}getClubById(o){return this.http.get(this.url+"/display/"+o)}deleteClub(o){return this.http.delete(this.url+"/delete/"+o)}}return n.\u0275fac=function(o){return new(o||n)(e.LFG(T.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var g=s(2290),u=s(2382);const A=function(){return["btn","btn-outline-warning"]};let M=(()=>{class n{constructor(){this.notification=new e.vpe}ngOnInit(){}NotifyDeleteClub(){this.notification.emit(this.club)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-club"]],inputs:{club:"club"},outputs:{notification:"notification"},decls:20,vars:9,consts:[[1,"col"],[1,"card","h-100"],[1,"img-wrap"],[1,"close",3,"click"],[1,"redTextOverride"],["alt","Card image cap",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[3,"routerLink","ngClass"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e.NdJ("click",function(){return t.NotifyDeleteClub()}),e.TgZ(4,"h3",4),e._uU(5,"\xd7"),e.qZA()(),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"div",6)(8,"h3",7),e._uU(9),e.qZA(),e.TgZ(10,"h5",8),e._uU(11),e.qZA(),e.TgZ(12,"h6",8),e._uU(13),e.qZA(),e.TgZ(14,"h6",8),e._uU(15),e.qZA(),e.TgZ(16,"p",8),e._uU(17),e.qZA(),e.TgZ(18,"a",9),e._uU(19,"Edit"),e.qZA()()()()),2&o&&(e.xp6(6),e.s9C("src",t.club.logo,e.LSH),e.xp6(3),e.Oqu(t.club.nom),e.xp6(2),e.hij("Room: ",t.club.room,""),e.xp6(2),e.hij("Email: ",t.club.email,""),e.xp6(2),e.hij("Phone: ",t.club.phone,""),e.xp6(2),e.hij("Description : ",t.club.description,""),e.xp6(1),e.MGl("routerLink","update/",t.club.idClub,""),e.Q6J("ngClass",e.DdM(8,A)))},directives:[c.yS,a.mk],styles:[".img-wrap[_ngcontent-%COMP%]{position:relative}.img-wrap[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;top:2px;right:2px;z-index:100;cursor:pointer}.redTextOverride[_ngcontent-%COMP%]{color:red!important}"]}),n})();var m=s(7425),b=s(3189);function q(n,i){1&n&&(e.TgZ(0,"h3"),e._uU(1," no elements found !"),e.qZA())}function x(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"app-club",13),e.NdJ("notification",function(l){return e.CHM(o),e.oxw().deleteClub(l)}),e.qZA()}2&n&&e.Q6J("club",i.$implicit)}let J=(()=>{class n{constructor(o,t,l){this.clubService=o,this.route=t,this.toastr=l,this.page=1,this.pageSize=1,this.length=0}ngOnInit(){this.clubService.getAllClubs().subscribe(o=>{this.all=o},()=>{console.log("error")},()=>{this.length=this.all.length})}deleteClub(o){let t=this.all.indexOf(o);confirm("Are you sure to delete "+o.nom)&&this.clubService.deleteClub(o.idClub).subscribe(()=>{this.all.splice(t,1),this.toastr.success("team "+o.nom+" deleted succesfully","Success")},l=>r=>{console.log("err"+r),this.toastr.error("something went wrong !","Error")})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p),e.Y36(c.gz),e.Y36(g._W))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-club-list"]],decls:21,vars:23,consts:[[1,"container-xxl","flex-grow-1","container-p-y"],[1,"col-md-6"],["type","text","name","search","autocomplete","off","placeholder","Search",1,"form-control",3,"ngModel","ngModelChange"],[1,"pb-1","mb-4","text-muted"],["routerLink","new"],[1,"bx","bxs-plus-circle","bx-flashing","bx-rotate-180",2,"color","#17fd00"],[1,"row","row-cols-1","row-cols-md-3","g-4","mb-5"],[4,"ngIf"],[3,"club","notification",4,"ngFor","ngForOf"],[1,"row","g-0","align-items-center","pb-4"],[1,"col-sm-6"],[1,"mb-sm-0"],[3,"page","pageSize","collectionSize","pageChange"],[3,"club","notification"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"form",1)(2,"input",2),e.NdJ("ngModelChange",function(r){return t.searchText=r}),e.qZA()(),e._UZ(3,"br"),e.TgZ(4,"h6",3),e._uU(5),e.ALo(6,"filter"),e.TgZ(7,"a",4),e._UZ(8,"i",5),e.qZA()(),e.TgZ(9,"div",6),e.YNc(10,q,2,0,"h3",7),e.ALo(11,"filter"),e.YNc(12,x,1,1,"app-club",8),e.ALo(13,"filter"),e.ALo(14,"slice"),e.qZA(),e.TgZ(15,"div",9)(16,"div",10)(17,"div")(18,"p",11),e._uU(19),e.qZA()()(),e.TgZ(20,"ngb-pagination",12),e.NdJ("pageChange",function(r){return t.page=r}),e.qZA()()()),2&o&&(e.xp6(2),e.Q6J("ngModel",t.searchText),e.xp6(3),e.hij("clubs (",e.xi3(6,10,t.all,t.searchText).length,") "),e.xp6(5),e.Q6J("ngIf",0===e.xi3(11,13,t.all,t.searchText).length),e.xp6(2),e.Q6J("ngForOf",e.xi3(13,16,e.Dn7(14,19,t.all,(t.page-1)*t.pageSize,t.page*t.pageSize),t.searchText)),e.xp6(7),e.lnq("Showing ",t.page*t.pageSize-(t.pageSize-1)," to ",t.page*t.pageSize," of ",t.length,""),e.xp6(1),e.Q6J("page",t.page)("pageSize",t.pageSize)("collectionSize",t.length))},directives:[u._Y,u.JL,u.F,u.Fj,u.JJ,u.On,c.yS,a.O5,a.sg,M,m.N9],pipes:[b.Z,a.OU],styles:[".img-wrap[_ngcontent-%COMP%]{position:relative}.img-wrap[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;top:2px;right:2px;z-index:100;cursor:pointer}.redTextOverride[_ngcontent-%COMP%]{color:red!important}"]}),n})();class U{}function F(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"this field is required !"),e.qZA())}function y(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"minlength = 3 !"),e.qZA())}function w(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"symbols are not allowed !"),e.qZA())}function N(n,i){if(1&n&&(e.TgZ(0,"div",28),e.YNc(1,F,2,0,"div",29),e.YNc(2,y,2,0,"div",29),e.YNc(3,w,2,0,"div",29),e.qZA()),2&n){e.oxw();const o=e.MAs(17);e.xp6(1),e.Q6J("ngIf",o.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",o.hasError("pattern"))}}function S(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"this field is required !"),e.qZA())}function Q(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"please enter a valid email !"),e.qZA())}function Y(n,i){if(1&n&&(e.TgZ(0,"div",28),e.YNc(1,S,2,0,"div",29),e.YNc(2,Q,2,0,"div",29),e.qZA()),2&n){e.oxw();const o=e.MAs(24);e.xp6(1),e.Q6J("ngIf",o.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.hasError("email"))}}function I(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"this field is required !"),e.qZA())}function O(n,i){if(1&n&&(e.TgZ(0,"div",28),e.YNc(1,I,2,0,"div",29),e.qZA()),2&n){e.oxw();const o=e.MAs(31);e.xp6(1),e.Q6J("ngIf",o.hasError("required"))}}function L(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"this field is required !"),e.qZA())}function z(n,i){if(1&n&&(e.TgZ(0,"div",28),e.YNc(1,L,2,0,"div",29),e.qZA()),2&n){e.oxw();const o=e.MAs(38);e.xp6(1),e.Q6J("ngIf",o.hasError("required"))}}function E(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"this field is required !"),e.qZA())}function k(n,i){if(1&n&&(e.TgZ(0,"div",28),e.YNc(1,E,2,0,"div",29),e.qZA()),2&n){e.oxw();const o=e.MAs(45);e.xp6(1),e.Q6J("ngIf",o.hasError("required"))}}function j(n,i){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Please enter valid data !"),e.qZA())}let h=(()=>{class n{constructor(o,t,l,r){this.route=o,this.clubService=t,this.router=l,this.toastr=r}ngOnInit(){this.id=this.route.snapshot.params.id,this.clubService.getAllClubs().subscribe(o=>{this.list=o,null!=this.list.find(t=>t.idClub==this.id)?(this.club=this.list.find(t=>t.idClub==this.id),this.btn="update"):(this.club=new U,this.btn="save")},()=>{console.log("error")},()=>{console.log("complete")})}saveClub(){"save"==this.btn?this.clubService.addClub(this.club).subscribe(()=>{this.toastr.success("club "+this.club.nom+" added succesfully","Success"),this.router.navigate(["backoffice/clubs"])},o=>t=>{console.log("err"+t),this.toastr.error("something went wrong !","Error")}):this.clubService.updateClub(this.id,this.club).subscribe(()=>{this.toastr.success("club "+this.club.nom+" updated succesfully","Success"),this.router.navigate(["backoffice/clubs"])},o=>t=>{console.log("err"+t),this.toastr.error("something went wrong !","Error")})}Back(){this.router.navigate(["backoffice/clubs"])}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(c.gz),e.Y36(p),e.Y36(c.F0),e.Y36(g._W))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-club-form"]],decls:63,vars:14,consts:[["f","ngForm"],[1,"container-xxl","flex-grow-1","container-p-y"],[1,"fw-bold","py-3","mb-4"],[1,"text-muted","fw-light"],[1,"row"],[1,"col-md-6"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"form-group"],[1,"form-label"],["type","text","name","name","required","","pattern","[A-Za-z]{0,50}$","minlength","3","placeholder","Enactus",1,"form-control",3,"ngModel","ngModelChange"],["n","ngModel"],["class","alert alert-danger",4,"ngIf"],["type","text","name","email","required","","email","","placeholder","exemple@email.com",1,"form-control",3,"ngModel","ngModelChange"],["e","ngModel"],["type","number","name","phone","required","","placeholder","0",1,"form-control",3,"ngModel","ngModelChange"],["p","ngModel"],["type","text","name","room","required","","placeholder","G02",1,"form-control",3,"ngModel","ngModelChange"],["r","ngModel"],["type","text","name","logo","required","","placeholder","Image Url",1,"form-control",3,"ngModel","ngModelChange"],["l","ngModel"],["type","textarea","name","room",1,"form-control",3,"ngModel","ngModelChange"],["d","ngModel"],[1,"form-text"],["class","help-block",4,"ngIf"],[1,"btn","btn-sm","btn-primary",3,"disabled","click"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"help-block"]],template:function(o,t){if(1&o&&(e.TgZ(0,"form",null,0)(2,"div",1)(3,"h4",2)(4,"span",3),e._uU(5),e.qZA(),e._uU(6," Club "),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"h5",7),e._uU(11,"Club"),e.qZA(),e.TgZ(12,"div",8)(13,"div",9)(14,"label",10),e._uU(15,"Name"),e.qZA(),e.TgZ(16,"input",11,12),e.NdJ("ngModelChange",function(r){return t.club.nom=r}),e.qZA()(),e.YNc(18,N,4,3,"div",13),e._UZ(19,"br"),e.TgZ(20,"div",9)(21,"label",10),e._uU(22,"Email"),e.qZA(),e.TgZ(23,"input",14,15),e.NdJ("ngModelChange",function(r){return t.club.email=r}),e.qZA()(),e.YNc(25,Y,3,2,"div",13),e._UZ(26,"br"),e.TgZ(27,"div",9)(28,"label",10),e._uU(29,"Phone"),e.qZA(),e.TgZ(30,"input",16,17),e.NdJ("ngModelChange",function(r){return t.club.phone=r}),e.qZA()(),e.YNc(32,O,2,1,"div",13),e._UZ(33,"br"),e.TgZ(34,"div",9)(35,"label",10),e._uU(36,"Room"),e.qZA(),e.TgZ(37,"input",18,19),e.NdJ("ngModelChange",function(r){return t.club.room=r}),e.qZA()(),e.YNc(39,z,2,1,"div",13),e._UZ(40,"br"),e.TgZ(41,"div",9)(42,"label",10),e._uU(43,"Logo"),e.qZA(),e.TgZ(44,"input",20,21),e.NdJ("ngModelChange",function(r){return t.club.logo=r}),e.qZA()(),e.YNc(46,k,2,1,"div",13),e._UZ(47,"br"),e.TgZ(48,"div",9)(49,"label",10),e._uU(50,"Description"),e.qZA(),e.TgZ(51,"input",22,23),e.NdJ("ngModelChange",function(r){return t.club.description=r}),e.qZA()(),e._UZ(53,"br"),e.TgZ(54,"div",24),e._uU(55,"We'll never share your details with anyone else."),e.qZA(),e._UZ(56,"br"),e.YNc(57,j,2,0,"span",25),e.qZA()(),e.TgZ(58,"button",26),e.NdJ("click",function(){return t.saveClub()}),e._uU(59,"Submit"),e.qZA(),e._uU(60," \xa0 "),e.TgZ(61,"button",27),e.NdJ("click",function(){return t.Back()}),e._uU(62,"cancel"),e.qZA()()()()()),2&o){const l=e.MAs(1),r=e.MAs(17),_=e.MAs(24),C=e.MAs(31),f=e.MAs(38),v=e.MAs(45);e.xp6(5),e.hij("",t.btn," /"),e.xp6(11),e.Q6J("ngModel",t.club.nom),e.xp6(2),e.Q6J("ngIf",r.invalid&&r.touched),e.xp6(5),e.Q6J("ngModel",t.club.email),e.xp6(2),e.Q6J("ngIf",_.invalid&&_.touched),e.xp6(5),e.Q6J("ngModel",t.club.phone),e.xp6(2),e.Q6J("ngIf",C.invalid&&C.touched),e.xp6(5),e.Q6J("ngModel",t.club.room),e.xp6(2),e.Q6J("ngIf",f.invalid&&f.touched),e.xp6(5),e.Q6J("ngModel",t.club.logo),e.xp6(2),e.Q6J("ngIf",v.invalid&&v.touched),e.xp6(5),e.Q6J("ngModel",t.club.description),e.xp6(6),e.Q6J("ngIf",(null==l?null:l.invalid)&&(null==l?null:l.touched)),e.xp6(1),e.Q6J("disabled",null==l?null:l.invalid)}},directives:[u._Y,u.JL,u.F,u.Fj,u.Q7,u.c5,u.wO,u.JJ,u.On,a.O5,u.on,u.wV],styles:[""]}),n})();const P=[{path:"",component:J},{path:"new",component:h},{path:"update/:id",component:h}];let B=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.Bz.forChild(P)],c.Bz]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[p],imports:[[a.ez,B,m.IJ,b.h,u.u5]]}),n})()}}]);