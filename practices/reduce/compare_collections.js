'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if(collection_a.length != collection_b.length) return false;
  for(var i=0;i<collection_a.length;i++){
    if(collection_a[i]!=collection_b[i]) return false;
  }
  return true;
}
// var collection_a = [1,11,27,20,4,9,15];
// var collection_b = [1,11,27,20,4,9,15];
// console.log(compare_collections(collection_a,collection_b));
module.exports = compare_collections;
