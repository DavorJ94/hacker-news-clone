(this["webpackJsonphacker-news-clone"]=this["webpackJsonphacker-news-clone"]||[]).push([[0],{26:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(20),r=c.n(a),i=(c(26),c(8)),j=c(0);function l(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("table",{className:"header-table",children:Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{className:"header-row",children:[Object(j.jsx)("td",{className:"imgContainer",children:Object(j.jsx)(i.b,{to:"/",className:"header-link",children:Object(j.jsx)("img",{src:"data:image/gif;base64,R0lGODlhEgASAKIAAP/jyvihV/aKLfmxc/////9mAAAAAAAAACH5BAAAAAAALAAAAAASABIAAAMpWLrc/jDKOQkRy8pBhuKeRAAKQFBBxwVUYY5twXVxodV3nLd77f9ASQIAOw==",alt:"logo",className:"imgLogo"})})}),Object(j.jsx)("td",{className:"linksContainer",children:Object(j.jsxs)("span",{className:"pagetop",children:[Object(j.jsx)(i.b,{to:"news",className:"hnname header-link",children:"Hacker News"}),Object(j.jsx)(i.b,{to:"/news",href:"#",className:"header-link",children:"top"})," ","|",Object(j.jsx)(i.b,{to:"/newest",className:"header-link",children:"new"})," ","|",Object(j.jsx)(i.b,{to:"/ask",className:"header-link",children:"ask"})," ","|",Object(j.jsx)(i.b,{to:"/show",className:"header-link",children:"show"})," ","|",Object(j.jsx)(i.b,{to:"/favorites",className:"header-link",children:"favorites"})]})})]})})})})})}var o=c(11),d=c.n(o),h=c(10),b=c(15),O=c(7);c(37);function m(e){var t=e.story,c=e.order,n=e.isFavorited,a=e.updateRenderFavorite,r=t.id,i=t.title,l=t.points,o=t.time_ago,d=t.url,h=t.domain,b=t.user,m=t.type,x=t.comments_count,u=Object(s.useState)(n),p=Object(O.a)(u,2),f=p[0],v=p[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("tr",{className:"athing",id:r,children:[Object(j.jsx)("td",{className:"title",children:c?Object(j.jsxs)("span",{className:"rank",children:[c,"."]}):null}),Object(j.jsx)("td",{className:"votelinks",children:Object(j.jsx)("center",{children:Object(j.jsx)("a",{id:"up_".concat(r),href:"/#",children:Object(j.jsx)("div",{className:"votearrow",title:"upvote"})})})}),Object(j.jsxs)("td",{className:"title",children:[Object(j.jsx)("a",{href:d,className:"storylink",rel:"nofollow",children:i})," ","ask"!==m&&Object(j.jsxs)("span",{className:"sitebit comhead",children:["(",Object(j.jsx)("a",{href:"/#",children:Object(j.jsx)("span",{className:"sitestr",children:h})}),")"]})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{colSpan:"2"}),Object(j.jsxs)("td",{className:"subtext",children:[Object(j.jsxs)("span",{className:"score",id:"score_".concat(r),children:[l," points"]})," ","by"," ",Object(j.jsx)("a",{href:"/#",className:"hnuser",children:b}),Object(j.jsxs)("span",{className:"age",children:[" ",Object(j.jsx)("a",{href:"/#",children:o})]})," ",Object(j.jsx)("span",{id:"unv_".concat(r)})," | ",Object(j.jsx)("a",{href:"/#",children:"hide"})," |"," ",Object(j.jsx)("span",{className:"hnpast",children:"past"})," |"," ",Object(j.jsxs)("a",{href:"item?id=".concat(r),children:[x,"\xa0comments"]})," |"," ",Object(j.jsxs)("span",{className:"add-favorite",onClick:function(){f?(localStorage.removeItem(r),v((function(e){return!e})),a&&a()):(localStorage.setItem(r,JSON.stringify(t)),v((function(e){return!e})),a&&a())},children:[f?Object(j.jsx)("span",{children:"\u2665"}):Object(j.jsx)("span",{children:"\u2661"}),f?" remove favorite":" add favorite"]})]})]})]})}c(38);var x="https://node-hnapi.herokuapp.com";function u(e){var t=e.split("/")[1];"newest"===t&&(t="new"),"news"===t&&(t="top"),document.querySelectorAll(".header-link").forEach((function(e){e.textContent===t?e.style.color="white":e.style.color="black"}))}function p(e){var t=Object(h.a)(Object.keys(localStorage)),c=e.id.toString();return t.includes(c)}function f(e){var t=e.path,c=Object(s.useState)([]),n=Object(O.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){!function(){var e=Object(b.a)(d.a.mark((function e(){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(x).concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,r((function(){return Object(h.a)(s)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Something went wrong while fetching data.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()(),u(t)}),[t]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("table",{className:"stories-container",children:Object(j.jsx)("tbody",{children:a.length?a.map((function(e,t){return Object(j.jsx)(m,{story:e,order:t+1,isFavorited:p(e)},e.id)})):Object(j.jsx)("tr",{children:Object(j.jsx)("td",{style:{fontStyle:"italic"},children:"There are no stories at the moment."})})})})})}c(39);function v(e){var t=e.comment,c=t.user,s=t.time_ago,n=t.content,a=t.level,r=t.id;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("tr",{className:"athing-comment comtr",id:r,children:Object(j.jsx)("td",{className:"td-comment",children:Object(j.jsx)("table",{className:"table-comment",children:Object(j.jsx)("tbody",{className:"tbody-comment",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"ind",style:{minWidth:"".concat(3*a,"vw")}}),Object(j.jsx)("td",{className:"votelinks-comment",children:Object(j.jsx)("center",{children:Object(j.jsx)("span",{id:"up_".concat(r),children:Object(j.jsx)("div",{className:"votearrow-comment",title:"upvote"})})})}),Object(j.jsxs)("td",{className:"default",children:[Object(j.jsx)("div",{className:"comment-user-row",children:Object(j.jsxs)("span",{className:"comhead-comment",children:[Object(j.jsxs)("span",{className:"hnuser",children:[c," "]}),Object(j.jsx)("span",{className:"age",children:Object(j.jsx)("span",{children:s})})," ",Object(j.jsx)("span",{id:"unv_".concat(r)}),Object(j.jsx)("span",{className:"par"}),Object(j.jsx)("span",{className:"togg",children:"[\u2013]"}),Object(j.jsx)("span",{className:"storyon"})]})}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"comment",children:[Object(j.jsx)("span",{className:"commtext",dangerouslySetInnerHTML:{__html:n}}),Object(j.jsx)("div",{className:"reply",children:Object(j.jsx)("p",{children:Object(j.jsx)("font",{children:Object(j.jsx)("u",{children:"reply"})})})})]})]})]})})})})})})}function N(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(O.a)(a,2),i=r[0],l=r[1],o=window.location.href.split("=")[1];function h(e){return e.comments.length>0?[Object(j.jsx)(v,{comment:e},e.id),e.comments.map((function(e){return h(e)}))]:Object(j.jsx)(v,{comment:e},e.id)}return Object(s.useEffect)((function(){!function(){var e=Object(b.a)(d.a.mark((function e(){var t,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.location.href.split("=")[1],e.next=4,fetch("".concat(x,"/item/").concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,n((function(){return s.comments})),l((function(){return s})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Something went wrong while fetching the data.");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("table",{style:{borderBottom:"1px solid #828282",paddingBottom:"10px"},className:"stories-container",children:Object(j.jsx)("tbody",{children:Object(j.jsx)(m,{story:i,order:!1,isFavorited:p({id:o})})})}),Object(j.jsx)("table",{className:"stories-container",style:{paddingTop:"20px"},children:Object(j.jsx)("tbody",{children:c.length?c.map((function(e){return h(e)})):Object(j.jsx)("tr",{children:Object(j.jsx)("td",{style:{fontStyle:"italic"},children:"There are no comments at the moment."})})})})]})}function w(e){var t=e.path,c=Object(s.useState)([]),n=Object(O.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(1),l=Object(O.a)(i,2),o=l[0],d=l[1];Object(s.useEffect)((function(){var e=Object.values(localStorage);r(Object(h.a)(e)),u(t)}),[t,o]);var b=function(){d((function(e){return e+1}))};return Object(j.jsx)("table",{className:"stories-container",children:Object(j.jsx)("tbody",{children:a.length?a.map((function(e,t){return Object(j.jsx)(m,{story:JSON.parse(e),order:t+1,isFavorited:p(JSON.parse(e)),updateRenderFavorite:b},JSON.parse(e).id)})):Object(j.jsx)("tr",{children:Object(j.jsx)("td",{style:{fontStyle:"italic"},children:"There are no favorite stories at the moment."})})})})}c(40);var g=c(2);var y=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{exact:!0,path:"/",children:Object(j.jsx)(f,{path:"/news"})}),Object(j.jsx)(g.a,{path:"/news",children:Object(j.jsx)(f,{path:"/news"})}),Object(j.jsx)(g.a,{path:"/newest",children:Object(j.jsx)(f,{path:"/newest"})}),Object(j.jsx)(g.a,{path:"/ask",children:Object(j.jsx)(f,{path:"/ask"})}),Object(j.jsx)(g.a,{path:"/show",children:Object(j.jsx)(f,{path:"/show"})}),Object(j.jsx)(g.a,{path:"/favorites",children:Object(j.jsx)(w,{path:"/favorites"})}),Object(j.jsx)(g.a,{path:"/item",children:Object(j.jsx)(N,{})})]})]})})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.4a342005.chunk.js.map