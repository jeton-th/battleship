!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=e=>{const n=[];return{size:e,hit:e=>{n.push(e)},isSunk:()=>n.length===e,coordinates:[],damageReceived:n}}},function(e,n,t){const r=t(3);e.exports=e=>{const n=Array.from(Array(10),()=>Array(10).fill(0));return{isAllSunk:()=>e.map(e=>e.isSunk()).every(e=>!0===e),board:n,ships:e,placeShip:e=>{let t=1===r.randomNumber(1,2)?"h":"v",o=r.randomNumber(0,9),i=r.randomNumber(0,9);!function c(){let a,u;"h"===t?(a=o,u=i):(a=i,u=o);const l=(a=a+e.size>9?9-e.size:a)+e.size;let s=!1;for(let e=a;e<l;e+=1)s="h"===t?1===n[u][e]||s:1===n[e][u]||s;if(s)t=1===r.randomNumber(1,2)?"h":"v",o=r.randomNumber(0,9-e.size),i=r.randomNumber(0,9-e.size),c();else for(;a<l;a+=1)"h"===t?(n[u][a]=1,e.coordinates.push([u,a])):(n[a][u]=1,e.coordinates.push([a,u]))}()},receiveAttack:(t,r)=>1===n[t][r]?(e.forEach(e=>{const o=[t,r];e.coordinates.some(e=>e.length===o.length&&e.every((e,n)=>o[n]===e))&&(console.log(e),n[t][r]=2,e.hit([t,r]))}),"hit"):(n[t][r]=-1,"miss")}}},function(e,n){e.exports=e=>{return{name:e,play:()=>{}}}},function(e,n){n.randomNumber=(e,n)=>Math.floor(Math.random()*n+e)},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(1),c=t.n(i),a=t(2),u=t.n(a);function l(e,n){const t=document.querySelector(`.${n}`);return e.forEach((e,r)=>{e.forEach((e,o)=>{const i=document.createElement("button");i.id=`${n}-${r}-${o}`,i.innerHTML=1===e?1:0,t.appendChild(i)})}),t}function s(e,n){e.disabled=!0,"hit"===n?(e.innerHTML=2,e.style.background="red"):(e.innerHTML=-1,e.style.background="blue")}const d=t(3),p=u()("human");let f=p.name;const m=o()(5),h=o()(4),b=o()(3),y=o()(3),S=o()(2),v=c()([m,h,b,y,S]);v.placeShip(m),v.placeShip(h),v.placeShip(b),v.placeShip(y),v.placeShip(S),l(v.board,"my-board");const g=o()(5),k=o()(4),A=o()(3),E=o()(3),M=o()(2),N=c()([g,k,A,E,M]);function x(){const e=[];v.board.forEach((n,t)=>{n.forEach((n,r)=>{0!==n&&1!==n||e.push([t,r])})});const n=d.randomNumber(0,e.length-1),t=e[n][0],r=e[n][1],o=document.getElementById(`my-board-${t}-${r}`),i=v.receiveAttack(t,r);s(o,i),j(i)}function j(e){v.isAllSunk()||N.isAllSunk()?console.log(`${f} wins.`):f===p.name&&"miss"===e?(f="ai",x()):"ai"===f&&"hit"===e?x():"ai"===f&&"miss"===e&&(f=p.name)}N.placeShip(g),N.placeShip(k),N.placeShip(A),N.placeShip(E),N.placeShip(M),l(N.board,"enemy-board").childNodes.forEach(e=>{e.addEventListener("click",()=>{const n=e.id.split("-"),t=N.receiveAttack(n[2],n[3]);s(e,t),j(t)})})}]);