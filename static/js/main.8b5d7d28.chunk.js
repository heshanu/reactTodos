(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(52)},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(27),r=n.n(c),o=(n(42),n(32)),u=n(16),i=(n(44),n(21)),m=n.n(i),f=n(28),E=n.n(f),s=(n(46),function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,l.a.createElement(E.a,null),"TodoList"))}),d=n(20),p=n(30),v=n(70),b=n(31),h=n.n(b),g=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(),i=Object(u.a)(o,2),m=i[0],f=(i[1],function(e){var t=e.target,n=t.name,a=t.value;e.preventDefault(),r(function(e){return Object(p.a)({},e,Object(d.a)({},n,a))})});return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},l.a.createElement("input",{name:"title",value:c.title,placeholder:"Title",onChange:f}),l.a.createElement("textarea",{name:"content",rows:"3",value:c.content,placeholder:"Take a note...",onChange:f}),l.a.createElement(v.a,{onClick:function(t){e.onAdd(c),r({title:"",content:""}),t.preventDefault()}},l.a.createElement(h.a,null)),l.a.createElement("p",null,m)))},j=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"CopyRight @ 2023"))};var C=function(){var e=l.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=function(e){a(function(t){return t.filter(function(t,n){return n!==e})})};return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(g,{onAdd:function(e){" "!=n.title&&" "!=n.content&&a(function(t){return[].concat(Object(o.a)(t),[e])})}}),n.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:c},l.a.createElement(m.a,null)),l.a.createElement("hr",null))}),l.a.createElement(j,null))},O=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,69)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null))),O()}},[[34,3,2]]]);
//# sourceMappingURL=main.8b5d7d28.chunk.js.map