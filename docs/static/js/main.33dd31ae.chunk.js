(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=(a(15),a(1)),o=a(9),l=a(7),m=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(o.a)(e))})),l(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){l(e.target.value)}}))};m.PropsType={setCategories:a.n(l).a.func.isRequired};var s=m,p=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__zoomInDown"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},d=a(4),f=a.n(d),g=a(8),v=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=chUpX3UQKLabWRrZAxI5V3XPIeF1v6KY"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t=e.id,a=e.title,n=e.images;return{id:t,title:a,url:null===n||void 0===n?void 0:n.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){v(e).then((function(e){c({data:e,loading:!1})})).catch(console.log)}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__zoomInDown"}," ",t," "),i&&r.a.createElement("p",{className:"animate__animated animate__rollIn"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},h=function(){var e=Object(n.useState)(["One Punch"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(s,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e,t){return r.a.createElement(E,{key:e,category:e})}))))};i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.33dd31ae.chunk.js.map