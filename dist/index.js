"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var v=f(function(y,s){
var g=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,a){var n,u,t;if(!g(r))throw new TypeError(i('1TdAh',r));if(!m(e))throw new TypeError(i('1Td2H',e));for(u=r.length,t=u-1;t>=0;t--){if(n=e.call(a,r[t],t,r),!n)return!1;u!==r.length&&(t+=r.length-u,u=r.length)}return!0}s.exports=h
});var q=v();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
