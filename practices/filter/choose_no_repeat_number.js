'use strict';

function include_collection(collection,num){
  for(var i=0;i<collection.length;i++){
    if(num==collection[i]) return true;
  }
  return false;
}

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var new_collection=[];
  for(var i=0;i<collection.length;i++){
    if(!include_collection(new_collection,collection[i])) new_collection.push(collection[i]);
  }
  return new_collection;
}
  // var collection = [1, 1, 1, 2, 2, 3, 4];
  // console.log(choose_no_repeat_number(collection));
module.exports = choose_no_repeat_number;
