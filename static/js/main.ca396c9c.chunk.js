(this["webpackJsonpvisual-test"]=this["webpackJsonpvisual-test"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},22:function(t,e,a){"use strict";a.r(e);var r=a(4),n=a.n(r),c=a(7),i=a.n(c),s=(a(12),a(2)),o=(a(13),a(3)),l=a.n(o),d=a(0),h=function(t){var e={backgroundColor:t.bgColor,color:t.color,borderRadius:t.radius,padding:"0.5rem",cursor:t.cursor};return Object(d.jsx)("button",{style:e,onClick:t.onClickFunction,disabled:t.disabled,children:t.text})},u=a(1),p=a.n(u),x=a(5);var b=function(t){return new Promise((function(e){return setTimeout(e,t)}))};function f(){return(f=Object(x.a)(p.a.mark((function t(e){var a,r,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=0,r=e.array.length-1;case 2:if(!(a<=r)){t.next=20;break}return n=Math.floor((r+a)/2),e.setDisplayArray(e.array.map((function(t,c){return c===r||c===a||c===n?Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.height,"px"),backgroundColor:"red"},id:c,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},c):Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.height,"px")},id:c,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},c)}))),t.next=7,b(1e3);case 7:if(!(e.searchValue>e.array[n])){t.next=11;break}a=n+1,t.next=18;break;case 11:if(!(e.searchValue<e.array[n])){t.next=15;break}r=n-1,t.next=18;break;case 15:return e.setDisplayArray(e.array.map((function(t,a){return a===n?Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.height,"px"),backgroundColor:"#00B6D3"},id:a,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},a):Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.height,"px")},id:a,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},a)}))),console.log("found ".concat(e.searchValue)),t.abrupt("break",20);case 18:t.next=2;break;case 20:console.log("done"),e.setDisplayState(!e.displayStateRef.current),e.setSearchState(!1);case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(t){return f.apply(this,arguments)},j=function(t,e,a){var r=t[e];t[e]=t[a],t[a]=r};function g(){return(g=Object(x.a)(p.a.mark((function t(e){var a,r,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=1;case 1:if(!(a<e.array.length)){t.next=12;break}r=p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setDisplayArray(e.array.map((function(t,r){return r===a||r===a-1?Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.width,"px"),backgroundColor:"red"},id:r,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},r):Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.width,"px")},id:r,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},r)}))),j(e.array,a-1,a),e.setArray(e.array),t.next=5,b(e.delay);case 5:case"end":return t.stop()}}),t)})),n=a;case 4:if(!(n>=0&&e.array[n-1]>e.array[n])){t.next=9;break}return t.delegateYield(r(n),"t0",6);case 6:n--,t.next=4;break;case 9:a++,t.next=1;break;case 12:e.setArray(e.array),e.setDisplayArray(e.array.map((function(t,a){return Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.width,"px")},id:a,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},a)}))),e.setDisplayState(!e.displayStateRef.current);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(t){return g.apply(this,arguments)},m=function(t,e){for(var a=t;a<e.length-1;a++)if(e[a]>e[a+1])return a;return a};function w(){return(w=Object(x.a)(p.a.mark((function t(e,a,r){var n,c,i,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.array[r],c=a-1,i=p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.array[a]<n)){t.next=7;break}return c++,e.setDisplayArray(e.array.map((function(t,r){return r===a||r===c?Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.width,"px"),backgroundColor:"red"},id:r,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},r):Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.width,"px")},id:r,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},r)}))),j(e.array,c,a),e.setArray(e.array),t.next=7,b(e.delay);case 7:case"end":return t.stop()}}),t)})),s=a;case 4:if(!(s<=r-1)){t.next=9;break}return t.delegateYield(i(s),"t0",6);case 6:s++,t.next=4;break;case 9:return e.setDisplayArray(e.array.map((function(t,a){return a===c+1||a===r?Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.width,"px"),backgroundColor:"red"},id:a,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},a):Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.width,"px")},id:a,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},a)}))),j(e.array,c+1,r),e.setArray(e.array),t.next=14,b(e.delay);case 14:return t.abrupt("return",c+1);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O=function(t,e,a){console.log(t.font);var r=0;!function t(e,a,n){if(a<n){(function(t,e,a){return w.apply(this,arguments)})(e,a,n).then((function(r){t(e,a,r-1),t(e,r+1,n)}))}else(r=m(r,e.array))===e.array.length-1&&(e.setArray(e.array),e.setDisplayArray(e.array.map((function(t,a){return Object(d.jsx)("div",{className:"bar",style:{height:"".concat(t*e.heightMultiplier,"px"),width:"".concat(e.width,"px")},id:a,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(e.font,"px")},children:t})},a)}))),e.setDisplayState(!1))}(t,e,a)},k=function(){var t=Math.floor(.14901*window.outerWidth-20-(.14901*window.outerWidth-20)%5);return t>200||t<10?t>200?200:10:t},N=Math.floor(k()/2),S=200/Math.floor(N)*10,M=window.innerWidth,C=.7*M/N,D=function(t,e,a){for(var r=[],n=0;n<a;n++){var c=Math.floor(Math.random()*e)+t;r.push(c)}return r};function A(){return C/3>=7&&C/3<=10?C/3:C/3<7?0:10}var z=function(){var t=l()(N),e=Object(s.a)(t,2),a=e[0],n=e[1],c=l()(D(10,250,a)),i=Object(s.a)(c,3),o=i[0],u=i[1],p=i[2],x=A(),b=l()(o.map((function(t,e){return Object(d.jsx)("div",{className:"bar",style:{height:"".concat(1*t,"px"),width:"".concat(C,"px")},id:e,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(x,"px")},children:t})},e)}))),f=Object(s.a)(b,3),j=f[0],g=f[1],m=(f[2],l()(!1)),w=Object(s.a)(m,3),z=w[0],F=w[1],R=w[2],V=l()(!1),W=Object(s.a)(V,2),E=W[0],L=W[1],B=l()(0),P=Object(s.a)(B,3),T=P[0],H=P[1],I=P[2],J=l()(!1),Y=Object(s.a)(J,3),q=Y[0],G=Y[1],K=(Y[2],function(t){var e=l()([window.innerHeight,window.innerWidth]),a=Object(s.a)(e,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){if(!t.displayState){var e=function(){c([window.innerHeight,window.innerWidth]),M=window.innerWidth,C=.7*M/t.arrayRef.current.length,t.font=C/3>=7&&C/3<=10?C/3:C/3<7?0:10,t.setDisplayArray(t.arrayRef.current.map((function(e,a){return Object(d.jsx)("div",{className:"bar",style:{height:"".concat(1*e,"px"),width:"".concat(C,"px")},id:a,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(t.font,"px")},children:e})},a)})))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[]),n}({array:o,arrayRef:p,setDisplayArray:g,font:x,displayState:z})),Q=Object(s.a)(K,2),U=(Q[0],Q[1],{font:x,array:o,setArray:u,arrayDisplay:j,setDisplayArray:g,setDisplayState:F,displayStateRef:R,delay:S,width:C,heightMultiplier:1}),X={font:x,setSearchState:L,searchValue:T,searchValueRefCurrent:I.current,array:o,setArray:u,arrayDisplay:j,setDisplayArray:g,setDisplayState:F,displayStateRef:R};return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)("span",{children:[z&&!E&&"Sorting ".concat(o.length," elements")," ",!z&&!E&&"".concat(a," elements"),"  "]}),!z&&Object(d.jsx)("input",{type:"range",min:"10",max:k(),value:a,onChange:function(t){n(t.target.value)}}),!z&&Object(d.jsx)(h,{onClickFunction:function(){S=200/a*10,C=.7*M/a,u(D(10,250,a)),L(!1),G(!1),g(p.current.map((function(t,e){return Object(d.jsx)("div",{className:"bar",style:{height:"".concat(1*t,"px"),width:"".concat(C,"px")},id:e,children:Object(d.jsx)("div",{className:"bar-text",style:{fontSize:"".concat(A(),"px")},children:t})},e)})))},bgColor:"white",color:"black",radius:"5px",text:"generate array",cursor:"pointer"}),!z&&Object(d.jsx)(h,{onClickFunction:function(){L(!1),F(!R.current),v(U),G(!0)},bgColor:"white",color:"black",radius:"5px",text:"insertion sort",disabled:q,cursor:"pointer"}),!z&&Object(d.jsx)(h,{onClickFunction:function(){console.log(x),L(!1),F(!R.current),O(U,0,o.length-1),G(!0)},bgColor:"white",color:"black",radius:"5px",text:"quicksort",disabled:q,cursor:"pointer"}),!z&&Object(d.jsx)(h,{onClickFunction:function(){F(!R.current),L(!0);var t=Math.floor(6*Math.random());H(t<4?o[Math.floor(Math.random()*(o.length-1))]:Math.floor(250*Math.random()+10)),X.searchValue=I.current,y(X)},bgColor:"white",color:"black",radius:"5px",text:"binary search",disabled:!q,cursor:"pointer"})]}),E&&Object(d.jsxs)("div",{className:"search-status",children:["searching for: ",T]}),Object(d.jsx)("div",{className:"array-display",children:j})]})},F=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),r(t),n(t),c(t),i(t)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),F()}},[[22,1,2]]]);
//# sourceMappingURL=main.ca396c9c.chunk.js.map