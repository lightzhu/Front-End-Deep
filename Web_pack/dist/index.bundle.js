!function(e){function n(n){for(var o,c,i=n[0],l=n[1],a=n[2],s=0,p=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(f&&f(n);p.length;)p.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(o=!1)}o&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={0:0},u=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var a=0;a<i.length;a++)n(i[a]);var f=l;u.push([104,1,2]),t()}({104:function(e,n,t){"use strict";t(105),t(106);var o,r=t(107),u=(o=r)&&o.__esModule?o:{default:o};t(108),t(110),t(111),t(116),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(126),t(127),t(128),t(129),t(130),t(132),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(142),t(143),t(147),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161),t(162),t(163),t(164),t(165),t(166),t(167),t(168),t(169),t(170),t(171),t(172),t(174),t(175),t(176),t(177),t(178),t(179),t(180),t(181),t(182),t(62),t(183),t(184),t(185),t(186),t(187),t(188),t(189),t(190),t(191),t(192),t(193),t(194),t(195),t(196),t(197),t(199),t(200),t(201),t(202),t(203),t(204),t(205),t(206),t(207),t(208),t(209),t(210),t(211),t(212),t(213),t(214),t(215),t(216),t(217),t(218),t(220),console.log(u.default);var c,i;console.log("webpack项目启动"),document.querySelector(".box").appendChild((c=document.createElement("div"),(i=new Image).src=u.default,c.innerHTML=["Hello","webpack"].join("--"),c.appendChild(i),c));var l=document.querySelector("#add"),a=document.querySelector("#ul");l.addEventListener("click",(function(){var e=document.createElement("li");e.innerHTML="lilili",a.appendChild(e)}))},105:function(e,n,t){"use strict";t.r(n);var o=t(101),r=t.n(o),u=t(72),c={insert:"head",singleton:!1};r()(u.a,c);n.default=u.a.locals||{}},106:function(e,n,t){"use strict";t.r(n)},107:function(e,n,t){"use strict";t.r(n),n.default=t.p+"images/src/img/pick.png"},218:function(e,n,t){"use strict";var o,r=t(219),u=(o=r)&&o.__esModule?o:{default:o};u.default.get("/api/getInfo").then((function(e){console.log(e)}));var c=document.querySelector("#ul");u.default.get("/api/list").then((function(e){var n=e.data.data.map((function(e){return"<li>"+e+"ss2</li>"}));console.log(n),c.innerHTML=n.join("")})),new Promise((function(e,n){setTimeout((function(){e(100)}),3e3)})).then((function(e){console.log(e)}))},219:function(e,n){e.exports=axios},220:function(e,n,t){"use strict";var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=i(t(99)),u=i(t(222)),c=t(226);function i(e){return e&&e.__esModule?e:{default:e}}console.log(_);var l=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},console.log(_.difference([3,2,1],[4,2])),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"componentDidMount",value:function(){(0,c.add)()}},{key:"render",value:function(){return r.default.createElement("h2",null,"我是大标题")}}]),n}(r.default.Component);u.default.render(r.default.createElement(l,null),document.querySelector("#app"))},226:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.add=function(){console.log(3)},n.minusZhuguoliang=function(){console.log("5-1=4")}},72:function(e,n,t){"use strict";var o=t(102),r=t.n(o),u=t(103),c=t.n(u)()(r.a);c.push([e.i,".red{\n  color:red;\n}","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,SAAS;AACX",sourcesContent:[".red{\n  color:red;\n}"],sourceRoot:""}]),n.a=c}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4Lmxlc3M/YWEyMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3BpY2sucG5nIiwid2VicGFjazovLy8uL3NyYy9qcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIjAiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJwaWNrIiwiZWxlbWVudCIsImltZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsIkltYWdlIiwic3JjIiwiaW5uZXJIVE1MIiwiam9pbiIsImJ0biIsInVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpIiwib3B0aW9ucyIsImxvY2FscyIsImF4aW9zIiwidGhlbiIsInJlcyIsInN0ciIsIm1hcCIsIml0ZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJfIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRpZmZlcmVuY2UiLCJhZGQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RG9tIiwicmVuZGVyIiwibWludXNaaHVndW9saWFuZyIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIl0sIm1hcHBpbmdzIjoiYUFDRSxTQUFTQSxFQUFxQkMsR0FRN0IsSUFQQSxJQU1JQyxFQUFVQyxFQU5WQyxFQUFXSCxFQUFLLEdBQ2hCSSxFQUFjSixFQUFLLEdBQ25CSyxFQUFpQkwsRUFBSyxHQUlITSxFQUFJLEVBQUdDLEVBQVcsR0FDcENELEVBQUlILEVBQVNLLE9BQVFGLElBQ3pCSixFQUFVQyxFQUFTRyxHQUNoQkcsT0FBT0MsVUFBVUMsZUFBZUMsS0FBS0MsRUFBaUJYLElBQVlXLEVBQWdCWCxJQUNwRkssRUFBU08sS0FBS0QsRUFBZ0JYLEdBQVMsSUFFeENXLEVBQWdCWCxHQUFXLEVBRTVCLElBQUlELEtBQVlHLEVBQ1pLLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtSLEVBQWFILEtBQ3BEYyxFQUFRZCxHQUFZRyxFQUFZSCxJQUtsQyxJQUZHZSxHQUFxQkEsRUFBb0JoQixHQUV0Q08sRUFBU0MsUUFDZEQsRUFBU1UsT0FBVFYsR0FPRCxPQUhB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TkMsRSxZQUNKLFdBQVlDLEksNEZBQU8sZSxpS0FBQSx3REFDWEEsSUFEVyxPQUVqQixFQUFLQyxNQUFRLEdBQ2JoQyxRQUFRQyxJQUFJNEIsRUFBRUksV0FBVyxDQUFDLEVBQUcsRUFBRyxHQUFJLENBQUMsRUFBRyxLQUh2QixFLHNYQU1qQixJQUFBQyxTLCtCQUdBLE9BQU8sK0MsR0FWT0MsVUFBTUMsV0FheEJDLFVBQVNDLE9BQU8sd0JBQUNSLEVBQUQsTUFBU3pCLFNBQVNDLGNBQWMsVSxvRkNmaEM0QixJQUFULFdBQ0xsQyxRQUFRQyxJQUFJLEksRUFFRXNDLGlCQUFULFdBQ0x2QyxRQUFRQyxJQUFJLFcsZ0NDUGQsK0JBR0l1QyxFQUhKLE1BRzhCLEdBQTRCLEtBRTFEQSxFQUF3QnhGLEtBQUssQ0FBQ2tCLEVBQU8xQixFQUFJLHlCQUEwQixHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyw2QkFBNkIsTUFBUSxHQUFHLFNBQVcsc0JBQXNCLGVBQWlCLENBQUMsMEJBQTBCLFdBQWEsTUFFak4iLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsxMDQsMSwyXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgJy4vY3NzL2luZGV4Lmxlc3MnXG5pbXBvcnQgcGljayBmcm9tICcuL2ltZy9waWNrLnBuZydcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnIC8vIOeUqOS6jkVTNueahOivreazlVxuaW1wb3J0ICcuL2pzL3JlcXVlc3QnXG5pbXBvcnQgJy4vYXBwLmpzeCdcbmNvbnNvbGUubG9nKHBpY2spXG5jb25zdCBhID0gJ3NzYWRhZCdcbmNvbnNvbGUubG9nKCd3ZWJwYWNr6aG555uu5ZCv5YqoJylcbmxldCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveFwiKVxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBsZXNzLnBpbmspXG4gIGxldCBpbWcgPSBuZXcgSW1hZ2UoKVxuICBpbWcuc3JjID0gcGlja1xuICBlbGVtZW50LmlubmVySFRNTCA9IFsnSGVsbG8nLCAnd2VicGFjayddLmpvaW4oJy0tJyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKVxuICByZXR1cm4gZWxlbWVudDtcbn1cbmJveC5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5sZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRcIilcbmxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdWxcIilcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICBsaS5pbm5lckhUTUwgPSAnbGlsaWxpJ1xuICB1bC5hcHBlbmRDaGlsZChsaSlcbn0pXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvc3JjL2ltZy9waWNrLnBuZ1wiOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmF4aW9zLmdldCgnL2FwaS9nZXRJbmZvJylcbiAgLnRoZW4ocmVzID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXMpXG4gIH0pXG5sZXQgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VsXCIpXG5heGlvcy5nZXQoJy9hcGkvbGlzdCcpXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgbGV0IGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgbGV0IHN0ciA9IGxpc3QubWFwKGl0ZW0gPT4gYDxsaT4ke2l0ZW19c3MyPC9saT5gKVxuICAgIGNvbnNvbGUubG9nKHN0cilcbiAgICB1bC5pbm5lckhUTUwgPSBzdHIuam9pbignJylcbiAgfSlcblxubGV0IGFzeW5jRm4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJlc29sdmUoMTAwKVxuICB9LCAzMDAwKTtcbn0pXG5hc3luY0ZuLnRoZW4ocmVzID0+IHtcbiAgY29uc29sZS5sb2cocmVzKVxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0gYXhpb3M7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSdcbi8vIGNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi91dGlsJ1xuY29uc29sZS5sb2coXylcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHt9XG4gICAgY29uc29sZS5sb2coXy5kaWZmZXJlbmNlKFszLCAyLCAxXSwgWzQsIDJdKSlcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBhZGQoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgyPuaIkeaYr+Wkp+agh+mimDwvaDI+XG4gIH1cbn1cblJlYWN0RG9tLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpXG4iLCIvLyBtb2R1bGUuZXhwb3J0cz17XG5cbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBhZGQoKSB7XG4gIGNvbnNvbGUubG9nKDEgKyAyKVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1pbnVzWmh1Z3VvbGlhbmcoKSB7XG4gIGNvbnNvbGUubG9nKCc1LTE9JyArICg1IC0gMSkpXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmVke1xcbiAgY29sb3I6cmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yZWR7XFxuICBjb2xvcjpyZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9