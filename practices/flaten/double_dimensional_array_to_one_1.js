'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result=[];
  for(let item of collection){
    if(item.length){
      for(let child_item of item) result.push(child_item);
    }else result.push(item);
  }
  return result;
}
// var collection = [1, [2], [3, 4]];
// console.log(double_to_one(collection));
module.exports = double_to_one;
