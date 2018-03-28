'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var new_collection=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%3==0) new_collection.push(collection[i]);
  }
  return new_collection;
}
  // var collection = [0, 1, 2, 3, 4, 5, 6, 9, 11];
  // console.log(choose_multiples_of_three(collection));
module.exports = choose_multiples_of_three;
