'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var collection=collection_a;
  for(var i=0;i<collection_b.length;i++){
    for(var j=0;j<collection_a.length;j++){
      if(collection_b[i]==collection_a[j]) break;
    }
    if(j==collection_a.length) collection.push(collection_b[i]);
  }
  return collection;
}
// var collection_a = [10, 27, 28, 19, 5];
// var collection_b = [5, 78, 28, 19, 23];
// var collection_c=get_union(collection_a,collection_b);
// console.log(collection_c);
module.exports = get_union;
