(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["common"],{"013f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container1"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 text-center"},[s("card",{staticClass:"border-0 mb-0",attrs:{type:"secondary","header-classes":"bg-white pb-5","body-classes":"px-lg-5 py-lg-5"}},[[s("div",{staticClass:"text-muted text-center mb-3"},[s("small",[t._v("If you are not registered and are a part of IITK Community...")])]),s("div",{staticClass:"btn-wrapper text-center"},[s("base-button",{attrs:{type:"info"}},[t._v("\n                            Register\n                        ")])],1)],[s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[t._v("Or sign in with credentials")])]),s("form",{attrs:{role:"form"}},[s("base-input",{staticClass:"mb-3",attrs:{alternative:"",placeholder:"Registered Email",autocomplete:"username","addon-left-icon":"ni ni-email-83"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("base-input",{attrs:{alternative:"",type:"password",placeholder:"Password",autocomplete:"current-password","addon-left-icon":"ni ni-lock-circle-open"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("base-checkbox",{model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n                            Remember me\n                        ")]),s("div",{staticClass:"text-center"},[s("base-button",{staticClass:"my-4",attrs:{type:"primary"},on:{click:t.signIn}},[t._v("Sign In")])],1)],1)]],2)],1)])])])},r=[],i=(s("a481"),s("8aa5")),l=s.n(i),n={data:function(){return{remember:!0,year:(new Date).getFullYear(),email:"",password:""}},methods:{signIn:function(){this.remember||l.a.auth().setPersistence(l.a.auth.Auth.Persistence.SESSION).then((function(){console.log("Remember me not selected")})).catch((function(t){console.log("Failed to set persistence: "+t.message)}));var t=this;l.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){t.$router.replace("dashboard")}),(function(e){t.$notify({type:"danger",horizontalAlign:"center",message:"Invalid Username or Password!"})}))}}},c=n,o=s("2877"),d=Object(o["a"])(c,a,r,!1,null,null,null);e["default"]=d.exports},"2ff9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("user-card")],1)])},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!==this.$store.state.sel_user?s("card",{staticClass:"fade-in",attrs:{type:"user"}},[s("p",{staticClass:"card-text"}),s("div",{staticClass:"author"},[s("div",{staticClass:"block block-one"}),s("div",{staticClass:"block block-two"}),s("div",{staticClass:"block block-three"}),s("div",{staticClass:"block block-four"}),s("img",{staticClass:"avatar",attrs:{src:t.userhandle.img?t.userhandle.img:"img/def_user.jpg",alt:"..."}}),s("h3",{staticClass:"title",staticStyle:{"margin-bottom":"5px"}},[t._v(t._s(t.userhandle.name))]),s("h6",{staticClass:"description"},[t._v("\n        "+t._s(t.userhandle.degree)),s("br"),t._v("\n\t\tClass of "+t._s(t.userhandle.year)),s("br"),t._v("\n\t\tCurrently in "),s("code",[t._v(t._s(t.userhandle.place))]),s("br"),s("code",[t._v(t._s(t.userhandle.email))])])]),s("p"),s("p",{staticClass:"card-description"}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-md-12",staticStyle:{"border-style":"ridge"}},[s("center",[s("u",[s("h2",[s("br"),t._v("Expertise")])])]),s("card",[s("p",[s("ul",t._l(t.userhandle.expertise,(function(e){return s("li",[t._v(t._s(e))])})),0)])])],1),s("div",{staticClass:"col-lg-9 col-md-12",staticStyle:{"border-style":"ridge"}},[s("center",[s("u",[s("h2",[s("br"),t._v("Education")])])]),s("card",t._l(t.userhandle.education,(function(e){return s("div",{staticClass:"row",staticStyle:{"margin-bottom":"10px"}},[s("div",{staticClass:"col-md-2"},[s("img",{attrs:{width:"100%",src:"img/edu.jpg"}})]),s("div",{staticClass:"col-md-10"},[s("h3",{staticStyle:{"margin-bottom":"0px"}},[t._v(t._s(e.name))]),s("p",[t._v(t._s(e.field))]),s("code",[t._v(t._s(e.startyear)+"-"+t._s(e.endyear))])])])})),0)],1),s("div",{staticClass:"col-lg-12 col-md-12",staticStyle:{"border-style":"ridge"}},[s("center",[s("u",[s("h2",[s("br"),t._v("Work Experience")])])]),s("card",[s("p",{staticStyle:{float:"left"}},[t._v(t._s(this.$store.state.sel_user))])])],1)]),s("p"),s("div",{staticClass:"button-container",attrs:{slot:"footer"},slot:"footer"},[s("a",{attrs:{href:t.user.linkedin,target:"blank"}},[s("base-button",{staticClass:"btn-linkedin",attrs:{icon:"",round:""}},[s("i",{staticClass:"fab fa-linkedin"})])],1)])]):s("card",{attrs:{type:"user"}},[s("h3",[t._v("No User Selected")])])},l=[],n={props:{user:{type:Object,default:function(){return{}}}},computed:{userhandle:function(){var t=this.$store.state.sel_user,e=this.$store.state.users;return e[t-1]}}},c=n,o=s("2877"),d=Object(o["a"])(c,i,l,!1,null,null,null),u=d.exports,m={components:{UserCard:u}},p=m,b=Object(o["a"])(p,a,r,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=common.79184b61.js.map