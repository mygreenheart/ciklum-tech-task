(()=>{"use strict";var e={379:(e,t,n)=>{var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},a=[],r=0;r<e.length;r++){var d=e[r],l=t.base?d[0]+t.base:d[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var u=i(s),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(o[u].references++,o[u].updater(m)):o.push({identifier:s,updater:v(m,t),references:1}),a.push(s)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,s=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,n){var a=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,f=0;function v(e,t){var n,a,r;if(t.singleton){var o=f++;n=p||(p=l(t)),a=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=l(t),a=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=i(n[a]);o[r].references--}for(var l=d(e,t),c=0;c<n.length;c++){var s=i(n[c]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}n=l}}}}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={};n.r(e);var t=["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],a=["Mon","Tue","Wed","Thu","Fri"],r=["Alina","Mark","Sumail","Kate"];function o(e,t,n,a,r){var o=document.createElement("div"),i=document.createElement("span"),d=document.createElement(n);o.className="input-group",i.textContent=t,i.className="input-group-text","input"===n&&(d.className="form-control",d.type="text"),"select"===n&&(d.className="form-select",r&&d.setAttribute("multiple",!0),function(e,t){t.map((function(t){var n=document.createElement("option");return n.textContent=t,e.appendChild(n),n}))}(d,a)),e.appendChild(o),o.appendChild(i),o.appendChild(d)}var i=document.createElement("div");i.className="container",document.body.appendChild(i),function(e){var t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("div"),r=document.createElement("select"),o=document.createElement("button");t.className="row header",n.className="col",n.textContent="Calendar",a.className="col d-flex justify-content-between",r.className="member-select",o.className="btn btn-primary",o.type="button",o.setAttribute("data-target","#eventModal"),o.setAttribute("data-toggle","modal"),o.textContent="New Event +",e.appendChild(t),t.appendChild(n),t.appendChild(a),a.appendChild(r),a.appendChild(o)}(i),function(e){var n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div");n.className="modal fade",n.id="eventModal",i.className="modal-dialog modal-dialog-centered",i.setAttribute("role","document"),l.className="modal-content",d.className="modal-body",e.appendChild(n),n.appendChild(i),i.appendChild(l),function(e){var t=document.createElement("div"),n=document.createElement("h5"),a=document.createElement("button"),r=document.createElement("span");t.className="modal-header",n.textContent="Create event",a.type="button",a.className="close",a.setAttribute("data-dismiss","modal"),a.setAttribute("aria-label","Close"),r.setAttribute("aria-hidden",!0),r.textContent="X",e.appendChild(t),t.appendChild(n),t.appendChild(a),a.appendChild(r)}(l),l.appendChild(d),function(e){o(e,"Name of the event:","input"),o(e,"Participants:","select",r,!0),o(e,"Day:","select",a),o(e,"Time:","select",t)}(d),function(e){var t=document.createElement("div"),n=document.createElement("button"),a=document.createElement("button");t.className="modal-footer",n.type="button",n.className="btn btn-secondary",n.setAttribute("data-dismiss","modal"),n.textContent="Close",a.type="submit",a.className="btn btn-primary",a.setAttribute("data-dismiss","modal"),a.textContent="Create",e.appendChild(t),t.appendChild(n),t.appendChild(a)}(l)}(i);var d=n(379);n.n(d)()(e.default,{insert:"head",singleton:!1}),e.default.locals})()})();