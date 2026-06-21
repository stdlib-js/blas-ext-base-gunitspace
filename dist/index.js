"use strict";var o=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var p=o(function(w,f){
function l(a,e,r,i,n){var s,u,t,c;for(s=r.data,u=r.accessors[1],t=n,c=0;c<a;c++)u(s,t,e+c),t+=i;return r}f.exports=l
});var v=o(function(z,q){
var b=require('@stdlib/array-base-arraylike2object/dist'),j=p();function k(a,e,r,i,n){var s,u,t;if(a<=0)return r;if(u=b(r),u.accessorProtocol)return j(a,e,u,i,n),r;for(s=n,t=0;t<a;t++)r[s]=e+t,s+=i;return r}q.exports=k
});var d=o(function(A,y){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=v();function O(a,e,r,i){return x(a,e,r,i,m(a,i))}y.exports=O
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=d(),R=v();P(g,"ndarray",R);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
