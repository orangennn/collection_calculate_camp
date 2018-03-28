'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var new_collection=[];
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]) {
        new_collection.push(collection_a[i]);
        break;
      }
    }
  }
  return new_collection;
}
// var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
// var collection_b = ["a", "d", "e", "f"];
// console.log(choose_common_elements(collection_a,collection_b));
module.exports = choose_common_elements;
