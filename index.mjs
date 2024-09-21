// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,n,i){var o,d;if(!t(s))throw new TypeError(e("1TdAh",s));if(!r(n))throw new TypeError(e("1Td2H",n));for(d=(o=s.length)-1;d>=0;d--){if(!n.call(i,s[d],d,s))return!1;o!==s.length&&(d+=s.length-o,o=s.length)}return!0}export{s as default};
//# sourceMappingURL=index.mjs.map
