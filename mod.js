// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Math.floor;var r=9007199254740991;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(n=t.length,e(n)===n)&&t.length>=0&&t.length<=r;var n}var n=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function a(e){return"number"==typeof e}function c(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+c(i):c(i)+e,n&&(e="-"+e)),e}var s=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function f(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,_=/\.0*e/,j=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,j,"$1e"),t=h.call(t,_,"e"),t=h.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,y,"e+0$1"),t=h.call(t,b,"e-0$1"),e.alternate&&(t=h.call(t,w,"$1."),t=h.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var x=String.fromCharCode,k=isNaN,T=Array.isArray;function A(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,i,o,a,c,s,u,p,g,d,h;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,s=0;s<e.length;s++)if(n=e[s],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,k(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+S(h):S(h)+p)),a+=n.arg||"",c+=1}return a}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(C(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var $,P=Object.prototype,R=P.toString,B=P.__defineGetter__,L=P.__defineSetter__,G=P.__lookupGetter__,Z=P.__lookupSetter__;$=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var M=$;function U(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"boolean"==typeof e}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return N&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=X()?function(e){var r,t,n,i,o;if(null==e)return z.call(e);t=e[D],o=D,r=null!=(i=e)&&H.call(i,o);try{e[D]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[D]=t:delete e[D],n}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var Y=X();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return W(e)||ee(e)}U(re,"isPrimitive",W),U(re,"isObject",ee);var te="object"==typeof self?self:null,ne="object"==typeof window?window:null,ie="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},oe="object"==typeof ie?ie:null,ae="object"==typeof globalThis?globalThis:null;var ce=function(e){if(arguments.length){if(!W(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ae)return ae;if(te)return te;if(ne)return ne;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),le=ce.document&&ce.document.childNodes,se=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;U(ue,"REGEXP",fe);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function ge(e){return null!==e&&"object"==typeof e}function de(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return ge(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var he="function"==typeof n||"object"==typeof se||"function"==typeof le?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?de(e).toLowerCase():r};function ye(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function be(e,r,n){var i,o;if(!t(e))throw new TypeError(ye("1TdAh",e));if("function"!==he(r))throw new TypeError(ye("1Td2H",r));for(o=(i=e.length)-1;o>=0;o--){if(!r.call(n,e[o],o,e))return!1;i!==e.length&&(o+=e.length-i,i=e.length)}return!0}export{be as default};
//# sourceMappingURL=mod.js.map
