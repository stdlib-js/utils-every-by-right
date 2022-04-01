// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).everyByRight=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=Math.floor;var t=function(r){return e(r)===r},n=t;var i=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&n(r.length)&&r.length>=0&&r.length<=9007199254740991},a=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=function(){try{return o({},"x",{}),!0}catch(r){return!1}},c=Object.defineProperty,f=Object.prototype,s=f.toString,l=f.__defineGetter__,p=f.__defineSetter__,v=f.__lookupGetter__,g=f.__lookupSetter__;var d=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===s.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===s.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(v.call(r,e)||g.call(r,e)?(n=r.__proto__,r.__proto__=f,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&l&&l.call(r,e,t.get),o&&p&&p.call(r,e,t.set),r},h=c,m=d,b=u()?h:m;var w=function(r,e,t){b(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},y=w;var E=function(r){return"boolean"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var P=function(){return j&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,T=_;var O=function(r){return T.call(r)},x=Object.prototype.hasOwnProperty;var V=function(r,e){return null!=r&&x.call(r,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",k=V,I=S,A=_;var R=O,F=function(r){var e,t,n;if(null==r)return A.call(r);t=r[I],e=k(r,I);try{r[I]=void 0}catch(e){return A.call(r)}return n=A.call(r),e?r[I]=t:delete r[I],n},$=P()?F:R,M=Boolean.prototype.toString;var C=$,N=function(r){try{return M.call(r),!0}catch(r){return!1}},B=P();var G=function(r){return"object"==typeof r&&(r instanceof Boolean||(B?N(r):"[object Boolean]"===C(r)))},L=E,Z=G;var W=y,X=function(r){return L(r)||Z(r)},z=G;W(X,"isPrimitive",E),W(X,"isObject",z);var U=X;var Y=function(){return new Function("return this;")()},D="object"==typeof self?self:null,q="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=U.isPrimitive,Q=Y,rr=D,er=q,tr=r(Object.freeze({__proto__:null}));var nr=function(r){if(arguments.length){if(!K(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Q()}if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")},ir=nr(),ar=ir.document&&ir.document.childNodes,or=Int8Array,ur=a,cr=ar,fr=or;var sr=function(){return"function"==typeof ur||"object"==typeof fr||"function"==typeof cr};var lr=function(){return/^\s*function\s*([^(]*)/i},pr=lr;y(pr,"REGEXP",lr());var vr=pr,gr=$;var dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===gr(r)};var hr=function(r){return null!==r&&"object"==typeof r};y(hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr));var mr=hr;var br=$,wr=vr.REGEXP,yr=function(r){return mr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Er=function(r){var e,t,n;if(("Object"===(t=br(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=wr.exec(n.toString()))return e[1]}return yr(r)?"Buffer":t},jr=Er;var Pr=Er;var _r=function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e},Tr=function(r){return Pr(r).toLowerCase()},Or=sr()?Tr:_r;var xr=function(r){return"function"===Or(r)};var Vr=function(r){return"string"==typeof r},Sr=String.prototype.valueOf;var kr=$,Ir=function(r){try{return Sr.call(r),!0}catch(r){return!1}},Ar=P();var Rr=function(r){return"object"==typeof r&&(r instanceof String||(Ar?Ir(r):"[object String]"===kr(r)))},Fr=Vr,$r=Rr;var Mr=y,Cr=function(r){return Fr(r)||$r(r)},Nr=Rr;Mr(Cr,"isPrimitive",Vr),Mr(Cr,"isObject",Nr);var Br=Cr;var Gr=function(r){return"number"==typeof r},Lr=Number,Zr=Lr.prototype.toString;var Wr=$,Xr=Lr,zr=function(r){try{return Zr.call(r),!0}catch(r){return!1}},Ur=P();var Yr=function(r){return"object"==typeof r&&(r instanceof Xr||(Ur?zr(r):"[object Number]"===Wr(r)))},Dr=Gr,qr=Yr;var Hr=y,Jr=function(r){return Dr(r)||qr(r)},Kr=Yr;Hr(Jr,"isPrimitive",Gr),Hr(Jr,"isObject",Kr);var Qr=Jr,re=Number.POSITIVE_INFINITY,ee=Lr.NEGATIVE_INFINITY,te=re,ne=ee,ie=t;var ae=function(r){return r<te&&r>ne&&ie(r)},oe=Qr.isPrimitive,ue=ae;var ce=function(r){return oe(r)&&ue(r)},fe=Qr.isObject,se=ae;var le=function(r){return fe(r)&&se(r.valueOf())},pe=ce,ve=le;var ge=y,de=function(r){return pe(r)||ve(r)},he=le;ge(de,"isPrimitive",ce),ge(de,"isObject",he);var me=de;var be=function(r){return r!=r},we=Qr.isPrimitive,ye=be;var Ee=function(r){return we(r)&&ye(r)},je=Qr.isObject,Pe=be;var _e=function(r){return je(r)&&Pe(r.valueOf())},Te=Ee,Oe=_e;var xe=y,Ve=function(r){return Te(r)||Oe(r)},Se=_e;xe(Ve,"isPrimitive",Ee),xe(Ve,"isObject",Se);var ke=i,Ie=me.isPrimitive,Ae=Br.isPrimitive,Re=Ve.isPrimitive;var Fe=function(r,e,t){var n,i,a;if(!ke(r)&&!Ae(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ie(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ae(r)){if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Re(e)){for(a=i;a<n;a++)if(Re(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},$e=Fe,Me=Br.isPrimitive;var Ce=function(r){if(!Me(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ne=Br.isPrimitive;var Be=function(r){if(!Ne(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ge=Ce,Le=Be,Ze=Br.isPrimitive;var We=function(r){return Ze(r)&&r===Le(r)&&r!==Ge(r)},Xe=re,ze=ee;var Ue=function(r){return r==r&&r>ze&&r<Xe},Ye=me.isPrimitive;var De=function(r){return Ye(r)&&r>=0},qe=me.isObject;var He=function(r){return qe(r)&&r.valueOf()>=0},Je=De,Ke=He;var Qe=y,rt=function(r){return Je(r)||Ke(r)},et=He;Qe(rt,"isPrimitive",De),Qe(rt,"isObject",et);var tt=rt.isPrimitive,nt=Br.isPrimitive;var it=function(r,e){var t,n;if(!nt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!tt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},at=me.isPrimitive,ot=Br.isPrimitive;var ut=function(r,e,t){var n,i;if(!ot(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ot(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!at(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},ct=it,ft=ut;var st=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ft(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ct("0",i):ct("0",i)+r,n&&(r="-"+r)),r},lt=We,pt=Be,vt=Ce,gt=Ue,dt=Qr.isPrimitive,ht=st;var mt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!gt(n)){if(!dt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ht(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ht(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=lt(r.specifier)?pt(t):vt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},bt=Br.isPrimitive,wt=/[-\/\\^$*+?.()|[\]{}]/g;var yt=function(r){var e,t;if(!bt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(wt,"\\$&"):(e=(e=r.substring(1,t)).replace(wt,"\\$&"),r=r[0]+e+r.substring(t))},Et=RegExp.prototype.exec;var jt=$,Pt=function(r){try{return Et.call(r),!0}catch(r){return!1}},_t=P();var Tt=yt,Ot=xr,xt=Br.isPrimitive,Vt=function(r){return"object"==typeof r&&(r instanceof RegExp||(_t?Pt(r):"[object RegExp]"===jt(r)))};var St=We,kt=Be,It=Ce,At=function(r,e,t){if(!xt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(xt(e))e=Tt(e),e=new RegExp(e,"g");else if(!Vt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!xt(t)&&!Ot(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Rt=Ue,Ft=Qr.isPrimitive,$t=function(r){return Math.abs(r)},Mt=/e\+(\d)$/,Ct=/e-(\d)$/,Nt=/^(\d+)$/,Bt=/^(\d+)e/,Gt=/\.0$/,Lt=/\.0*e/,Zt=/(\..*[^0])0*e/;var Wt=function(r){var e,t,n=parseFloat(r.arg);if(!Rt(n)){if(!Ft(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":$t(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=At(t,Zt,"$1e"),t=At(t,Lt,"e"),t=At(t,Gt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=At(t,Mt,"e+0$1"),t=At(t,Ct,"e-0$1"),r.alternate&&(t=At(t,Nt,"$1."),t=At(t,Bt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=St(r.specifier)?kt(t):It(t)},Xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var zt=it;var Ut=Br.isPrimitive,Yt=$e,Dt=be,qt=mt,Ht=Wt,Jt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Xt.exec(r);a;)(t=r.slice(e,Xt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Xt.lastIndex,a=Xt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Kt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+zt(" ",n):zt(" ",n)+r},Qt=st,rn=String.fromCharCode;var en=function(r){var e,t,n,i,a,o,u,c,f;if(!Ut(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Jt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Ut(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Yt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Dt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Dt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=qt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Dt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Dt(a)?String(n.arg):rn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Ht(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Qt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Kt(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},tn=i,nn=xr,an=en;return function(r,e,t){var n,i;if(!tn(r))throw new TypeError(an("invalid argument. First argument must be a collection. Value: `%s`.",r));if(!nn(e))throw new TypeError(an("invalid argument. Second argument must be a function. Value: `%s`.",e));for(i=(n=r.length)-1;i>=0;i--){if(!e.call(t,r[i],i,r))return!1;n!==r.length&&(i+=r.length-n,n=r.length)}return!0}}));
//# sourceMappingURL=bundle.js.map
