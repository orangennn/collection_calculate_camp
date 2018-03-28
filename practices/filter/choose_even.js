'use strict';

function choose_even(collection) {

  //在这里写入代码
  var new_collection=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0) new_collection.push(collection[i]);
  }
  return new_collection;
}
// var collection = [0, 1, 2, 3, 4, 6];
// console.log(choose_even(collection));
module.exports = choose_even;
