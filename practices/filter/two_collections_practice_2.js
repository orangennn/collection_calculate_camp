'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var new_collection=[];
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]) break;
    }
    if(j==collection_b.length) new_collection.push(collection_a[i]);
  }
  for(var i=0;i<collection_b.length;i++){
    for(var j=0;j<collection_a.length;j++){
      if(collection_b[i]==collection_a[j]) break;
    }
    if(j==collection_a.length) new_collection.push(collection_b[i]);
  }
  return new_collection;
}

// 
// var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
// var collection_b = ["a", "d", "e", "f"];
// console.log(choose_no_common_elements(collection_a,collection_b));

module.exports = choose_no_common_elements;
