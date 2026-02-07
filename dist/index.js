"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=f(function(y,i){
var g=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,v){var a,u,t;if(!g(r))throw new TypeError(n('1TdAh',r));if(!m(e))throw new TypeError(n('1Td2H',e));for(u=r.length,t=u-1;t>=0;t--){if(a=e.call(v,r[t],t,r),!a)return!1;u!==r.length&&(t+=r.length-u,u=r.length)}return!0}i.exports=h
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
