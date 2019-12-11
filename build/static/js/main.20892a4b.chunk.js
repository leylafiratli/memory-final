(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/memory.82a807f5.jpeg"},35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(32),l=a.n(r),i=a(8),o=a(14),c=(a(40),a(22),a(3)),m=a(4),d=a(6),u=a(5),p=a(7),h=a(1),v=a.n(h),g="https://memoryjournalapp.herokuapp.com",E=a(17),f=a.n(E),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={memories:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){null==localStorage.getItem("token")&&this.props.history.push("/login"),this.getMemories()}},{key:"getMemories",value:function(){var e=this;v.a.get(g+"/core/api/memories",{headers:{Authorization:"JWT "+localStorage.getItem("token")}}).then(function(t){console.log(t),e.setState({memories:t.data})}).catch(function(e){console.log(e)})}},{key:"deleteMemory",value:function(e){var t=this;v.a.delete(g+"/core/api/memory/"+e,{headers:{Authorization:"JWT "+localStorage.getItem("token")}}).then(function(e){console.log(e),t.getMemories()}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.memories,a=t.length?t.map(function(t){return s.a.createElement("div",{key:t.id,className:"card horizontal"},s.a.createElement("div",{className:"card-image"},s.a.createElement("img",{className:"memory-image",src:f.a})),s.a.createElement("div",{className:"card-stacked"},s.a.createElement("div",{className:"card-content"},s.a.createElement(i.b,{to:"/memory/"+t.id},s.a.createElement("span",{className:"card-title"},t.title)),t.description.length>100?s.a.createElement("p",null,t.description.substring(0,90)+"..."):s.a.createElement("p",null,t.description)),s.a.createElement("div",{className:"card-action"},s.a.createElement("i",{className:"red-text material-icons right cursor",onClick:function(){e.deleteMemory(t.id)},title:"delete memory"},"delete"),s.a.createElement(i.b,{to:"/edit-memory/"+t.id},s.a.createElement("i",{className:"material-icons right",title:"edit memory"},"edit")))))}):s.a.createElement("p",{className:"center"});return s.a.createElement("div",{className:"container home"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s6 push-s6"},s.a.createElement("h1",null,s.a.createElement(i.b,{to:"/save-memory/"},s.a.createElement("a",{id:"scale-demo",className:"btn-floating btn-small pull-right",title:"add new memory"},s.a.createElement("i",{className:"material-icons"},"add"))))),s.a.createElement("div",{className:"col s6 pull-s6"},s.a.createElement("h3",{className:"cyan-text accent-4s"},"My Memories"))),a)}}]),t}(n.Component),b=a(13),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={title:"",description:"",image:"",vtitle:!1,vtitletext:"",vdescription:!1,vdescriptiontext:""},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={title:a.state.title,description:a.state.description,image:a.state.image};a.setState({vtitle:!1,vtitletext:"",vdescription:!1,vdescriptiontext:""}),v.a.post(g+"/core/api/memories",t,{headers:{Authorization:"JWT "+localStorage.getItem("token")}}).then(function(e){console.log(e),a.props.history.push("/memories")}).catch(function(e){try{e.response.data.title&&a.setState({vtitle:!0,vtitletext:e.response.data.title[0]}),e.response.data.description&&a.setState({vdescription:!0,vdescriptiontext:e.response.data.description[0]})}catch(e){console.log(e.response)}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){null==localStorage.getItem("token")&&this.props.history.push("/login")}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,"Save Your Memory"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"title",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"title"},"Memory Title:"),s.a.createElement("span",{className:"red-text helper-text",id:"vtitle"},this.state.vtitle?this.state.vtitletext:"")),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("textarea",{id:"description",className:"materialize-textarea",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"description"},"Memory Description:"),s.a.createElement("span",{className:"red-text helper-text",id:"vdescription"},this.state.vdescription?this.state.vdescriptiontext:"")),s.a.createElement("input",{type:"file"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("button",{className:"waves-effect waves-light btn white-text blue darken-4 pull",type:"submit"},"Submit")))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={title:"",description:"",image:"",vtitle:!1,vtitletext:"",vdescription:!1,vdescriptiontext:""},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={title:a.state.title,description:a.state.description,image:a.state.image};a.setState({vtitle:!1,vtitletext:"",vdescription:!1,vdescriptiontext:""});var n=a.props.match.params.id;v.a.put(g+"/core/api/memory/"+n,t,{headers:{Authorization:"JWT "+localStorage.getItem("token")}}).then(function(e){a.setState({title:e.data.title,description:e.data.description,image:e.data.image}),a.props.history.push("/memories")}).catch(function(e){try{e.response.data.title&&a.setState({vtitle:!0,vtitletext:e.response.data.title[0]}),e.response.data.description&&a.setState({vdescription:!0,vdescriptiontext:e.response.data.description[0]})}catch(e){console.log(e.response)}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;null==localStorage.getItem("token")&&this.props.history.push("/login");var t=this.props.match.params.id;v.a.get(g+"/core/api/memory/"+t,{headers:{Authorization:"JWT "+localStorage.getItem("token")}}).then(function(t){e.setState({title:t.data.title,description:t.data.description,image:t.data.image})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,"Edit Your Memory"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("span",null,"Memory Title:"),s.a.createElement("input",{id:"title",type:"text",onChange:this.handleChange,value:this.state.title}),s.a.createElement("span",{className:"red-text helper-text",id:"vtitle"},this.state.vtitle?this.state.vtitletext:"")),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("span",null,"Memory Description:"),s.a.createElement("textarea",{id:"description",className:"materialize-textarea",onChange:this.handleChange,value:this.state.description}),s.a.createElement("span",{className:"red-text helper-text",id:"vdescription"},this.state.vdescription?this.state.vdescriptiontext:"")),s.a.createElement("input",{type:"file"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("button",{className:"waves-effect waves-light btn white-text blue darken-4 pull",type:"submit"},"Submit")))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={memory:{}},a.handleClick=function(e){a.props.deletePost(a.props.post.id),a.props.history.push("/")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;null==localStorage.getItem("token")&&this.props.history.push("/login");var t=this.props.match.params.id;v.a.get(g+"/core/api/memory/"+t,{headers:{Authorization:"JWT "+localStorage.getItem("token")}}).then(function(t){console.log(t),e.setState({memory:t.data})}).catch(function(e){console.log(e)})}},{key:"deleteMemory",value:function(e){var t=this;v.a.delete(g+"/core/api/memory/"+e,{headers:{Authorization:"JWT "+localStorage.getItem("token")}}).then(function(e){console.log(e),t.props.history.push("/memories")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.memory?s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-image"},s.a.createElement("img",{className:"single-memory-image",src:f.a}),s.a.createElement(i.b,{to:"/save-memory/"},s.a.createElement("a",{className:"btn-floating halfway-fab waves-effect waves-light blue",title:"add new memory"},s.a.createElement("i",{className:"material-icons"},"add")))),s.a.createElement("div",{className:"card-content"},s.a.createElement("span",{className:"card-title"},this.state.memory.title),s.a.createElement("p",null,this.state.memory.description)),s.a.createElement("div",{className:"card-action"},s.a.createElement("i",{className:"red-text material-icons right cursor",onClick:function(){e.deleteMemory(e.state.memory.id)},title:"delete memory"},"delete"),s.a.createElement(i.b,{to:"/edit-memory/"+this.state.memory.id},s.a.createElement("i",{className:"material-icons right",title:"edit memory"},"edit")))))):s.a.createElement("div",{className:"center mt-5"});return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12"},s.a.createElement("h3",{className:"cyan-text accent-4s"},"My Memory"))),t)}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).logout=function(){localStorage.clear(),a.props.history.push("/login")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"nav-wrapper indigo"},s.a.createElement("div",{className:"container"},s.a.createElement(i.b,{to:"/",className:"brand-logo fontWeight"},"Memory Journal"),null!=localStorage.getItem("token")?s.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-small-and-down"},s.a.createElement("li",null,s.a.createElement(i.b,{to:"/memories"},"My Memories")),s.a.createElement("li",null,s.a.createElement(i.b,{to:"/quote"},"Quote")),s.a.createElement("li",null,s.a.createElement(i.c,{to:"/login"},s.a.createElement("i",{className:"material-icons",onClick:this.logout},"power_settings_new")))):null))}}]),t}(n.Component),S=Object(o.f)(k),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",token:"",vusername:!1,vusernametext:"",vpassword:!1,vpasswordtext:"",vauthenticate:!1,vauthenticatetext:""},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password};a.setState({vusername:!1,vusernametext:"",vpassword:!1,vpasswordtext:"",vauthenticate:!1,vauthenticatetext:""}),v.a.post(g+"/token-auth/",t).then(function(e){a.setState({token:e.data.token}),localStorage.setItem("token",a.state.token),a.props.history.push("/memories")}).catch(function(e){try{e.response.data.username&&a.setState({vusername:!0,vusernametext:e.response.data.username[0]}),e.response.data.password&&a.setState({vpassword:!0,vpasswordtext:e.response.data.password[0]}),e.response.data.non_field_errors&&a.setState({vauthenticate:!0,vauthenticatetext:e.response.data.non_field_errors[0]})}catch(e){console.log(e.response)}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){null!=localStorage.getItem("token")&&this.props.history.push("/memories")}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("br",null),s.a.createElement("h3",{className:"grey-text darken-4 center"},"Welcome to the Memory Journal"),s.a.createElement("hr",null),s.a.createElement("br",null),s.a.createElement("h4",{className:"indigo-text darken-4"},"Login"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"account_circle"),s.a.createElement("input",{id:"username",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("span",{className:"red-text helper-text",id:"vusername"},this.state.vusername?this.state.vusernametext:"")),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"lock"),s.a.createElement("input",{id:"password",type:"password",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("span",{className:"red-text helper-text",id:"vpassword"},this.state.vpassword?this.state.vpasswordtext:"")),s.a.createElement("p",{className:"red-text"},this.state.vauthenticate?this.state.vauthenticatetext:""),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("button",{className:"waves-effect waves-light btn white-text blue darken-4 pull",type:"submit"},"Submit")),s.a.createElement(i.b,{to:"/signup",className:""},"create new account")))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={first_name:"",last_name:"",email:"",username:"",password:"",gender:"",vfname:!1,vfnametext:"",vlname:!1,vlnametext:"",vusername:!1,vusernametext:"",vemail:!1,vemailtext:"",vpassword:!1,vpasswordtext:""},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,username:a.state.username,password:a.state.password,gender:""};a.setState({vfname:!1,vfnametext:"",vlname:!1,vlnametext:"",vusername:!1,vusernametext:"",vemail:!1,vemailtext:"",vpassword:!1,vpasswordtext:""}),v.a.post(g+"/accounts/api/user/create",t).then(function(e){console.log(e),a.props.history.push("/login")}).catch(function(e){try{e.response.data.first_name&&a.setState({vfname:!0,vfnametext:e.response.data.first_name[0]}),e.response.data.last_name&&a.setState({vlname:!0,vlnametext:e.response.data.last_name[0]}),e.response.data.username&&a.setState({vusername:!0,vusernametext:e.response.data.username[0]}),e.response.data.email&&a.setState({vemail:!0,vemailtext:e.response.data.email[0]}),e.response.data.password&&a.setState({vpassword:!0,vpasswordtext:e.response.data.password[0]})}catch(e){console.log(e.response)}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){null!=localStorage.getItem("token")&&this.props.history.push("/memories")}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("br",null),s.a.createElement("h3",{className:"indigo-text darken-4 center-text"},"Sign Up"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s4"},s.a.createElement("input",{id:"first_name",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"first_name"},"First Name:"),s.a.createElement("span",{className:"red-text helper-text",id:"vfname"},this.state.vfname?this.state.vfnametext:"")),s.a.createElement("div",{className:"input-field col s4"},s.a.createElement("input",{id:"last_name",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"last_name"},"Last Name:"),s.a.createElement("span",{className:"red-text helper-text",id:"vfname"},this.state.vlname?this.state.vlnametext:"")),s.a.createElement("div",{className:"input-field col s2"},s.a.createElement("p",null,s.a.createElement("label",null,s.a.createElement("input",{id:"male",className:"with-gap",name:"group1",type:"radio",onChange:this.handleChange}),s.a.createElement("span",null,"Male")))),s.a.createElement("div",{className:"input-field col s2"},s.a.createElement("p",null,s.a.createElement("label",null,s.a.createElement("input",{id:"female",className:"with-gap",name:"group1",type:"radio",onChange:this.handleChange}),s.a.createElement("span",null,"Female"))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"username",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("span",{className:"red-text helper-text",id:"vusername"},this.state.vusername?this.state.vusernametext:"")),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"email",type:"email",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"email"},"Email:"),s.a.createElement("span",{className:"red-text helper-text",id:"vemail"},this.state.vemail?this.state.vemailtext:"")),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"password",type:"password",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("span",{className:"red-text helper-text",id:"vpassword"},this.state.vpassword?this.state.vpasswordtext:"")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("button",{className:"waves-effect waves-light btn white-text blue darken-4",type:"submit"},"Submit"))))))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={quote:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.verifyToken(),this.getQuote()}},{key:"verifyToken",value:function(){var e=this,t={token:localStorage.getItem("token")};null==localStorage.getItem("token")?this.props.history.push("/login"):null!=localStorage.getItem("token")&&v.a.post(g+"/auth-jwt-verify/",t).then(function(e){console.log("token verify",e)}).catch(function(t){console.log("token verify error",t),localStorage.clear(),e.props.history.push("/login")})}},{key:"getQuote",value:function(){var e=this;v.a.get("https://quotes.rest/qod",{headers:{Accept:"application/json"}}).then(function(t){console.log(t.data),e.setState({quote:t.data.contents.quotes[0]})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.quote?s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12"},s.a.createElement("div",{className:"card blue-grey darken-1"},s.a.createElement("div",{className:"card-content white-text"},s.a.createElement("h4",{className:"card-title"},this.state.quote.title),s.a.createElement("hr",null),s.a.createElement("p",{className:"flow-text quote"},this.state.quote.quote),s.a.createElement("br",null),s.a.createElement("h5",{className:"yellow-text"},"- ",this.state.quote.author))))):s.a.createElement("div",{className:"center mt-5 white-text"},"Loading quote...");return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12"},s.a.createElement("br",null),s.a.createElement("h3",{className:"black-text accent-4s"},"Quote of the Day"))),e)}}]),t}(n.Component);var M=function(){return s.a.createElement(i.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(S,null),s.a.createElement(o.c,null," ",s.a.createElement(o.a,{exact:!0,path:"/",component:j}),s.a.createElement(o.a,{path:"/login",component:j}),s.a.createElement(o.a,{path:"/signup",component:O}),s.a.createElement(o.a,{path:"/quote",component:C}),s.a.createElement(o.a,{path:"/memories",component:y}),s.a.createElement(o.a,{path:"/save-memory",component:N}),s.a.createElement(o.a,{path:"/memory/:id",component:w}),s.a.createElement(o.a,{path:"/edit-memory/:id",component:x}),s.a.createElement(o.a,{path:"/*",component:j})," ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.a.interceptors.response.use(function(e){return e},function(e){try{"Signature has expired."!==e.response.data.detail&&"Error decoding signature."!==e.response.data.detail&&"Invalid Authorization header. Credentials string should not contain spaces."!==e.response.data.detail&&"Error decoding signature."!==e.response.non_field_errors||(localStorage.clear(),window.location.reload())}catch(e){console.log(e)}return Promise.reject(e)}),l.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.20892a4b.chunk.js.map