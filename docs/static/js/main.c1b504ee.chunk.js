(this.webpackJsonpprueba=this.webpackJsonpprueba||[]).push([[0],{41:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(24),s=a.n(c),i=(a(41),a(13)),o=a.n(i),l=a(16),d=a(29),j=a(59),u=a(64),x=a(65),p=a(66),b=a(68),h=a(62),m=a(67),f=a(60),O=a(61),g=a(63),k=function(){return{root:{background:"#0d739a",color:"#f0f0f0",textAlign:"center",boxShadow:"5px 5px 10px #323232","&:hover":{boxShadow:"10px 10px 40px #323232"}},img:{margin:"10px",borderRadius:"50%",border:"solid 5px #72f522",height:"auto",maxWidth:"200px"},text:{margin:"2px",fontSize:"1.4rem",borderRadius:"5px"}}},v=a(3),w=Object(j.a)(k),N=function(e){var t=e.data;console.log(t);var a=w();return console.log(t),Object(v.jsxs)(f.a,{className:a.root,children:[Object(v.jsx)(O.a,{children:Object(v.jsx)("img",{className:a.img,src:t.image,alt:t.name})}),Object(v.jsx)(h.a,{variant:"h3",children:t.name}),Object(v.jsxs)(g.a,{className:a.details,children:[Object(v.jsxs)(h.a,{className:a.text,children:["Estado: ",t.status]}),Object(v.jsxs)(h.a,{className:a.text,children:["G\xe9nero: ",t.gender]}),Object(v.jsxs)(h.a,{className:a.text,children:["Localizacion: ",t.location.name]})]})]})},y=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.results,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){return{appBar:{background:"#f0f0f0",color:"#323232"},toolBar:{display:"flex",justifyContent:"space-between"},logo:{height:"50px"},link:{fontSize:"1.8rem"}}},B=Object(j.a)(S);var M=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=B(),s=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{className:c.appBar,children:Object(v.jsxs)(x.a,{className:c.toolBar,children:[Object(v.jsx)("img",{className:c.logo,src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg",alt:"Rick and Morty logo"}),Object(v.jsx)("a",{className:c.link,href:"https://rickandmortyapi.com/documentation/",children:"DOC"})]})}),Object(v.jsxs)(p.a,{component:b.a,pt:8,children:[Object(v.jsx)(b.a,{m:1,children:Object(v.jsx)(h.a,{variant:"h1",align:"center",children:"Rick and Morty Characters"})}),Object(v.jsx)(m.a,{container:!0,spacing:4,children:a.map((function(e){return Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(v.jsx)(N,{data:e})},e.id)}))}),Object(v.jsx)("h1",{children:"HOLA MUNDO!"})]})]})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c1b504ee.chunk.js.map