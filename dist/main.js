!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=e=>{const t=[];return{size:e,hit:e=>{t.push(e)},isSunk:()=>t.length===e,coordinates:[],damageReceived:t}};var o=(e,t)=>Math.floor(Math.random()*t+e);var i=e=>{const t=Array.from(Array(10),()=>Array(10).fill(0));return{isAllSunk:()=>e.map(e=>e.isSunk()).every(e=>!0===e),board:t,ships:e,placeShip:e=>{let n=1===o(1,2)?"h":"v",r=o(0,9),i=o(0,9);!function c(){let a,l;"h"===n?(a=r,l=i):(a=i,l=r);const s=(a=a+e.size>9?9-e.size:a)+e.size;let u=!1;for(let e=a;e<s;e+=1)u="h"===n?1===t[l][e]||u:1===t[e][l]||u;if(u)n=1===o(1,2)?"h":"v",r=o(0,9-e.size),i=o(0,9-e.size),c();else for(;a<s;a+=1)"h"===n?(t[l][a]=1,e.coordinates.push([l,a])):(t[a][l]=1,e.coordinates.push([a,l]))}()},receiveAttack:(n,r)=>1===t[n][r]?(e.forEach(e=>{const o=[n,r];e.coordinates.some(e=>e.length===o.length&&e.every((e,t)=>o[t]===e))&&(t[n][r]=2,e.hit([n,r]))}),"hit"):(t[n][r]=-1,"miss")}};var c=e=>e;function a(e,t){const n=document.querySelector(`.${t}`),r=[" ","A","B","C","D","E","F","G","H","I","J"];for(let e=0;e<11;e+=1){if(0===e)for(let e=0;e<11;e+=1){const t=document.createElement("span");t.classList.add("box"),t.innerHTML=r[e],n.appendChild(t)}for(let r=0;r<11;r+=1)if(10!==e)if(0===r){const t=document.createElement("span");t.classList.add("box"),t.innerHTML=e+1,n.appendChild(t)}else{const o=document.createElement("button");o.classList.add("box"),o.id=`${t}-${e}-${r-1}`,n.appendChild(o)}}return n}function l(e,t){e.disabled=!0,e.style.background="hit"===t?"crimson":"lightblue"}const s=c("Human"),u=c("Computer");let d=s;const p=r(5),f=r(4),h=r(3),m=r(3),b=r(2),y=i([p,f,h,m,b]);y.placeShip(p),y.placeShip(f),y.placeShip(h),y.placeShip(m),y.placeShip(b),a(y.board,"my-board");const S=r(5),v=r(4),g=r(3),k=r(3),A=r(2),E=i([S,v,g,k,A]);function M(){const e=[];y.board.forEach((t,n)=>{t.forEach((t,r)=>{0!==t&&1!==t||e.push([n,r])})});const t=o(0,e.length-1),n=e[t][0],r=e[t][1],i=document.getElementById(`my-board-${n}-${r}`),c=y.receiveAttack(n,r);l(i,c),x(c)}function x(e){y.isAllSunk()||E.isAllSunk()?document.querySelector(".winner").innerHTML=`${d} wins.`:d===s&&"miss"===e?(d=u,M()):d===u&&"hit"===e?M():d===u&&"miss"===e&&(d=s)}E.placeShip(S),E.placeShip(v),E.placeShip(g),E.placeShip(k),E.placeShip(A),a(E.board,"enemy-board").childNodes.forEach(e=>{"BUTTON"===e.nodeName&&e.addEventListener("click",()=>{const t=e.id.split("-"),n=parseInt(t[2],10),r=parseInt(t[3],10),o=E.receiveAttack(n,r);l(e,o),x(o)})})}]);