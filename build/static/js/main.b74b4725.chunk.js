(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){e.exports=t(41)},41:function(e,n,t){"use strict";t.r(n);var r=t(18),a=t(17),o=t(2),l=t(0),s=t.n(l),u=function(e){var n=e.persons;return""!==e.newKey&&(n=e.persons.filter((function(n){return function(e,n){var t=e.toLowerCase(),r=n.toLowerCase();return t.includes(r)}(n.name,e.newKey)}))),s.a.createElement("div",null,n.map((function(n){return s.a.createElement(e.EachDeet,{setErr:e.setErr,persons:e.persons,setPersons:e.setPersons,key:n.id,id:n.id,person:n.name,number:n.number})})))},c=(t(7),function(e){return console.log("confirm ho raha bro"),null==e.message?null:(setTimeout((function(){e.setMessage(null)}),1e3),s.a.createElement("div",{className:"confirm"},s.a.createElement("p",null,e.message)))}),i=function(e){return console.log("error ho raha bro"),null==e.err?null:(setTimeout((function(){e.setErr(null)}),1e3),s.a.createElement("div",{className:"error"},s.a.createElement("p",null,e.err)))},m=function(e){var n=Object(l.useState)(""),t=Object(o.a)(n,2),r=t[0],a=t[1];return s.a.createElement("div",null,s.a.createElement("h2",null,"Phonebook"),s.a.createElement("form",null,s.a.createElement("div",null,"filter: ",s.a.createElement("input",{value:r,onChange:function(e){a(e.target.value)}}))),s.a.createElement(c,{setMessage:e.setMessage,message:e.message}),s.a.createElement(i,{setErr:e.setMessage,err:e.err}),s.a.createElement("h2",null," Add new "),s.a.createElement("form",{onSubmit:e.addDeet},s.a.createElement("div",null,"name: ",s.a.createElement("input",{value:e.newName,onChange:e.handleName})),s.a.createElement("div",null,"number: ",s.a.createElement("input",{value:e.newNum,onChange:e.handleNum})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit"},"add"))),s.a.createElement("h2",null,"Numbers"),s.a.createElement(u,{setErr:e.setErr,setPersons:e.setPersons,newKey:r,persons:e.persons,EachDeet:e.EachDeet}))},f=t(4),d=t.n(f),E="/api/persons",b=function(){return d.a.get(E)},g=function(e){return d.a.post(E,e)},p=function(e){return d.a.delete("".concat(E,"/").concat(e))},h=function(e,n){return d.a.put("".concat(E,"/").concat(e),n)},v=function(e,n,t,r,a){if(window.confirm("Confirm deletion?")){console.log("initial key is",e),n.preventDefault();var o="";t(r.filter((function(n){if(n.id!==e)return n;o=n.name}))),p(e).then((function(n){return console.log("deleted key",e)})).catch((function(e){a("".concat(o," is already deleted."))}))}},j=function(e){return console.log(),s.a.createElement("form",{onSubmit:function(n){return v(e.id,n,e.setPersons,e.persons,e.setErr)}},s.a.createElement("p",null,e.person," ",e.number),s.a.createElement("button",{type:"submit",style:{float:"right"}},"delete"))};var O=function(){var e=Object(l.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(l.useState)(0),i=Object(o.a)(c,2),f=i[0],d=i[1];Object(l.useEffect)((function(){console.log("effect for fetch"),b().then((function(e){console.log("promise fulfilled"),u(e.data),console.log(e.data);var n;n=e.data.reduce((function(e,n){return e<n.id?n.id:e}),0),d(n>0?n+1:1),console.log("id set is",n)}))}),[]);var E=Object(l.useState)(""),p=Object(o.a)(E,2),v=p[0],O=p[1],w=Object(l.useState)(""),y=Object(o.a)(w,2),N=y[0],S=y[1],k=Object(l.useState)(null),D=Object(o.a)(k,2),P=D[0],C=D[1],M=Object(l.useState)(null),K=Object(o.a)(M,2),J=K[0];K[1];return s.a.createElement(m,{setMessage:C,message:P,setErr:C,err:J,addDeet:function(e){e.preventDefault();var n=Object(a.a)(t);if(console.log(n),0==n.length||function(e,n){for(var t=0;t<n.length;t++)if(n[t].name==e)return!1;return!0}(v,n)){var o={name:v,number:N,id:f};d(f+1),n.push(o),u(n),g(o).then((function(e){return console.log("added a dude with",f)}))}else{var l=t.find((function(e){if(e.name===v)return e.id})),s={};n=t.map((function(e){return e.name===v?(s=Object(r.a)({},e,{number:N}),console.log(s,"is edit person"),s):e})),console.log(n),u(n),h(l.id,s).then((function(e){return console.log("edited",v)}))}C("Edit successful"),O(""),S("")},setPersons:u,newName:v,newNum:N,handleName:function(e){O(e.target.value),console.log(v)},handleNum:function(e){S(e.target.value),console.log(N)},persons:t,EachDeet:j})},w=t(16);t.n(w).a.render(s.a.createElement(O,null),document.getElementById("root"))},7:function(e,n,t){}},[[19,1,2]]]);
//# sourceMappingURL=main.b74b4725.chunk.js.map