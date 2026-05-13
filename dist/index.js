"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var p=o(function(w,f){
function l(a,r,e,i,n){var s,u,t,c;for(s=e.data,u=e.accessors[1],t=n,c=0;c<a;c++)u(s,t,r+c),t+=i;return e}f.exports=l
});var v=o(function(z,q){
var b=require('@stdlib/array-base-arraylike2object/dist'),j=p();function k(a,r,e,i,n){var s,u,t;if(a<=0)return e;if(u=b(e),u.accessorProtocol)return j(a,r,u,i,n),e;for(s=n,t=0;t<a;t++)e[s]=r+t,s+=i;return e}q.exports=k
});var d=o(function(A,y){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=v();function O(a,r,e,i){return x(a,r,e,i,m(a,i))}y.exports=O
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=d(),R=v();P(g,"ndarray",R);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
