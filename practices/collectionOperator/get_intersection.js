'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var collection_c=[];
  for(var i=0;i<collection_b.length;i++){
    for(var j=0;j<collection_a.length;j++){
      if(collection_b[i]==collection_a[j]) collection_c.push(collection_b[i]);
    }
  }
  return collection_c;
}
// var collection_a = [10, 27, 28, 19, 5];
// var collection_b = [5, 78, 28, 19, 23];
// console.log(get_intersection(collection_a,collection_b));
module.exports = get_intersection;
