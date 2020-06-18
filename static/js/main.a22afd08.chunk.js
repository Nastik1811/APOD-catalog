(this["webpackJsonpapod-cat"]=this["webpackJsonpapod-cat"]||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),s=(a(24),a(6)),i=function(e){var t=e.date,a=e.onChange;return c.a.createElement("div",{className:"date-picker"},c.a.createElement("label",{htmlFor:"picker"},"Let's pick a date"),c.a.createElement("input",{name:"picker",type:"date",value:t,onChange:function(e){return a(e.target.value)}}))},o=function(e){var t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var n=e.getDate();return t+"-"+a+"-"+(n=n<10?"0"+n:n)},m=(a(25),function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"animation-container"},c.a.createElement("div",{className:"animation-group"},c.a.createElement("span",{className:"loader-component"}),c.a.createElement("span",{className:"loader-component"}),c.a.createElement("span",{className:"loader-component"}),c.a.createElement("span",{className:"loader-component"}))))}),u=function(e){var t=e.imgUrl,a=e.title,n=e.description;return c.a.createElement("div",{className:"apod-container"},c.a.createElement("header",null,c.a.createElement("h2",{className:"title"},a)),c.a.createElement("div",{className:"picture-container"},c.a.createElement("img",{src:t,alt:a,className:"picture"}),c.a.createElement("div",{className:"description-container"},c.a.createElement("p",null,n))))},p=function(){var e=Object(n.useState)((function(){return window.localStorage.getItem("date")||o(new Date)})),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),p=Object(s.a)(l,2),d=p[0],f=p[1],E=Object(n.useState)(!0),h=Object(s.a)(E,2),v=h[0],g=h[1];return Object(n.useEffect)((function(){return window.localStorage.setItem("date",a)}),[a]),Object(n.useEffect)((function(){g(!0),fetch("https://api.nasa.gov/planetary/apod?api_key=".concat("nfnKxO4IpgdmkAVsGG0UvQ8SkbSXdmaFvKknIfjG","&date=").concat(a)).then((function(e){if(200===e.status)return e.json();throw Error()})).then(f).then((function(){return g(!1)})).catch((function(){return alert("Something went wrong. Try to pick another date.")}))}),[a]),c.a.createElement("section",{className:"main-section"},c.a.createElement("header",{className:"section-header"},c.a.createElement("h1",{className:"section-title"},"Astronomy Picture of the Day")),c.a.createElement(i,{date:a,onChange:r}),v?c.a.createElement(m,null):c.a.createElement(u,{imgUrl:d.url,title:d.title,description:d.explanation}))},d=a(9),f=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"APoD"),c.a.createElement("nav",{className:"navbar"},c.a.createElement(d.b,{className:"nav-link",activeClassName:"active-link",exact:!0,to:"/"},"Home"),c.a.createElement(d.b,{className:"nav-link",activeClassName:"active-link",to:"/catalog"},"Catalog")))},E=a(1),h=a(13),v=a.n(h),g=a(18),b=function(e){var t=e.imgUrl,a=e.date,n=e.title,r=e.onClick;return c.a.createElement("div",{className:"preview",onClick:r},c.a.createElement("img",{className:"preview-img",src:t,alt:n}),c.a.createElement("span",{className:"preview-title"},n),c.a.createElement("span",{className:"preview-date"},a))},k=function(e){var t=e.apods,a=e.onClick;return c.a.createElement("div",{className:"apods-list"},t.map((function(e){return c.a.createElement(b,{imgUrl:e.url,title:e.title,date:e.date,key:e.date,onClick:function(){return a(e.date)}})})))},N=function(e){var t=e.onDismiss,a=e.children;return c.a.createElement("div",{className:"window",onClick:t},a)},j=function(e){var t=e.date,a=e.onDismiss,r=Object(n.useState)(null),l=Object(s.a)(r,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?api_key=".concat("nfnKxO4IpgdmkAVsGG0UvQ8SkbSXdmaFvKknIfjG","&date=").concat(t,"&hd=true")).then((function(e){if(200===e.status)return e.json();throw Error()})).then(o).catch((function(){return alert("Something went wrong. Try to pick another date.")}))}),[t]),c.a.createElement(N,{onDismiss:a},i&&c.a.createElement("img",{src:i.hdurl,alt:i.title,className:"modal-image"}))},O=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),i=Object(s.a)(l,2),u=i[0],p=i[1],d=Object(n.useState)("2020-10-12"),f=Object(s.a)(d,2),E=f[0],h=f[1],b=Object(n.useState)(!1),N=Object(s.a)(b,2),O=N[0],w=N[1];Object(n.useEffect)((function(){var e=function(){for(var e=new Date,t=[],a=0;a<30;a++){var n=new Date;n.setDate(e.getDate()-a),t.push(n)}return console.log(t),t.map((function(e){return o(e)}))}().map(function(){var e=Object(g.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat("nfnKxO4IpgdmkAVsGG0UvQ8SkbSXdmaFvKknIfjG","&date=").concat(t));case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,a.json();case 7:if((n=e.sent).url.match(/\.(gif|jpe?g|png)$/)){e.next=10;break}return e.abrupt("return",null);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Promise.all(e).then((function(e){return r(e.filter((function(e){return!!e})))})).then((function(){return p(!1)}))}),[]);return c.a.createElement("section",{className:"main-section"},c.a.createElement("header",{className:"section-header"},c.a.createElement("h1",{className:"section-title"},"APODs from the last 30 days"),c.a.createElement("span",{className:"section-details"},"* Click to expand HD *")),u?c.a.createElement(m,null):c.a.createElement(k,{apods:a,onClick:function(e){h(e),w(!0)}}),O&&c.a.createElement(j,{date:E,onDismiss:function(){return w(!1)}}))},w=function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(f,null),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",component:p}),c.a.createElement(E.a,{exact:!0,path:"/catalog",component:O}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a22afd08.chunk.js.map