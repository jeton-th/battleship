!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=e=>{const t=[];return{size:e,hit:e=>{t.push(e)},isSunk:()=>t.length===e,coordinates:[],damageReceived:t}}},function(e,t,n){"use strict";(function(e){var t=n(4),r=n.n(t);e.exports=e=>{const t=Array.from(Array(10),()=>Array(10).fill(0));return{isAllSunk:()=>e.map(e=>e.isSunk()).every(e=>!0===e),board:t,ships:e,placeShip:e=>{let n=1===r()(1,2)?"h":"v",o=r()(0,9),i=r()(0,9);!function c(){let a,l;"h"===n?(a=o,l=i):(a=i,l=o);const u=(a=a+e.size>9?9-e.size:a)+e.size;let s=!1;for(let e=a;e<u;e+=1)s="h"===n?1===t[l][e]||s:1===t[e][l]||s;if(s)n=1===r()(1,2)?"h":"v",o=r()(0,9-e.size),i=r()(0,9-e.size),c();else for(;a<u;a+=1)"h"===n?(t[l][a]=1,e.coordinates.push([l,a])):(t[a][l]=1,e.coordinates.push([a,l]))}()},receiveAttack:(n,r)=>1===t[n][r]?(e.forEach(e=>{itemTrue=[n,r],e.coordinates.some(e=>e.length===itemTrue.length&&e.every((e,t)=>itemTrue[t]===e))&&e.hit([n,r])}),"hit"):(t[n][r]=-1,"miss")}}}).call(this,n(5)(e))},function(e,t){e.exports=e=>{return{name:e,play:()=>{}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),c=n(2),a=n.n(c);function l(e,t){const n=document.querySelector(t);return e.forEach((e,t)=>{e.forEach((e,r)=>{const o=document.createElement("button");o.id=`${t}-${r}`,o.innerHTML=1===e?1:0,n.appendChild(o)})}),n}var u=n(4),s=n.n(u);const p=a()("human");a()("computer");let f=p.name;const d=o()(5),h=o()(4),b=o()(3),m=o()(3),y=o()(2),S=Object(i.default)([d,h,b,m,y]);S.placeShip(d),S.placeShip(h),S.placeShip(b),S.placeShip(m),S.placeShip(y),l(S.board,".my-board");const v=o()(5),g=o()(4),j=o()(3),k=o()(3),O=o()(2),x=Object(i.default)([v,g,j,k,O]);function P(e){S.isAllSunk()||x.isAllSunk()?console.log(`${p.name} wins.`):"hit"===e?(f=p.name,console.log("play again")):(!function(){const e=[];S.board.forEach((t,n)=>{t.forEach((t,r)=>{0===t&&e.push([n,r])})});const t=s()(0,e.length-1);S.receiveAttack(t[0],t[1])}(),f=p.name)}x.placeShip(v),x.placeShip(g),x.placeShip(j),x.placeShip(k),x.placeShip(O),l(x.board,".enemy-board").childNodes.forEach(e=>{e.addEventListener("click",()=>{const t=e.id.split("-"),n=x.receiveAttack(t[0],t[1]);f="computer",function(e,t){e.disabled=!0,"hit"===t?(e.innerHTML=1,e.style.background="red"):(e.innerHTML=-1,e.style.background="blue")}(e,n),P(n)})})},function(e,t){e.exports=(e,t)=>{return{number:(e,t)=>Math.floor(Math.random()*t+e)}}},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);