!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=e=>{const t=[];return{size:e,hit:e=>{t.push(e)},isSunk:()=>t.length===e,coordinates:[],damageReceived:t}};var o=(e,t)=>Math.floor(Math.random()*t+e);var i=e=>{const t=Array.from(Array(10),()=>Array(10).fill(0));return{isAllSunk:()=>e.map(e=>e.isSunk()).every(e=>!0===e),board:t,ships:e,placeShip:e=>{let n=1===o(1,2)?"h":"v",r=o(0,9),i=o(0,9);!function c(){let a,l;"h"===n?(a=r,l=i):(a=i,l=r);const u=(a=a+e.size>9?9-e.size:a)+e.size;let s=!1;for(let e=a;e<u;e+=1)s="h"===n?1===t[l][e]||s:1===t[e][l]||s;if(s)n=1===o(1,2)?"h":"v",r=o(0,9-e.size),i=o(0,9-e.size),c();else for(;a<u;a+=1)"h"===n?(t[l][a]=1,e.coordinates.push([l,a])):(t[a][l]=1,e.coordinates.push([a,l]))}()},receiveAttack:(n,r)=>1===t[n][r]?(e.forEach(e=>{const o=[n,r];e.coordinates.some(e=>e.length===o.length&&e.every((e,t)=>o[t]===e))&&(t[n][r]=2,e.hit([n,r]))}),"hit"):(t[n][r]=-1,"miss")}};function c(e,t){const n=document.querySelector(`.${t}`);return e.forEach((e,r)=>{e.forEach((e,o)=>{const i=document.createElement("button");i.id=`${t}-${r}-${o}`,i.innerHTML=1===e?1:0,n.appendChild(i)})}),n}function a(e,t){e.disabled=!0,"hit"===t?(e.innerHTML=2,e.style.background="red"):(e.innerHTML=-1,e.style.background="blue")}const l=(e=>e)("human");let u=l;const s=r(5),p=r(4),d=r(3),f=r(3),h=r(2),b=i([s,p,d,f,h]);b.placeShip(s),b.placeShip(p),b.placeShip(d),b.placeShip(f),b.placeShip(h),c(b.board,"my-board");const y=r(5),m=r(4),S=r(3),v=r(3),g=r(2),k=i([y,m,S,v,g]);function M(){const e=[];b.board.forEach((t,n)=>{t.forEach((t,r)=>{0!==t&&1!==t||e.push([n,r])})});const t=o(0,e.length-1),n=e[t][0],r=e[t][1],i=document.getElementById(`my-board-${n}-${r}`),c=b.receiveAttack(n,r);a(i,c),A(c)}function A(e){b.isAllSunk()||k.isAllSunk()?document.querySelector(".winner").innerHTML=`${u} wins.`:u===l&&"miss"===e?(u="ai",M()):"ai"===u&&"hit"===e?M():"ai"===u&&"miss"===e&&(u=l)}k.placeShip(y),k.placeShip(m),k.placeShip(S),k.placeShip(v),k.placeShip(g),c(k.board,"enemy-board").childNodes.forEach(e=>{e.addEventListener("click",()=>{const t=e.id.split("-"),n=parseInt(t[2],10),r=parseInt(t[3],10),o=k.receiveAttack(n,r);a(e,o),A(o)})})}]);