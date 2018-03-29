'use strict';
function include_num(collection,num){
  for(let item of collection){
    if(item==num) return true;
  }
  return false;
}
function double_to_one(collection) {

  //在这里写入代码
  let result=[];
  for(let item of collection){
    if(item.length){
      for(let child_item of item){
        if(!include_num(result,child_item)) result.push(child_item);
      }
    }else {
      if(!include_num(result,item)) result.push(item);
    }
  }
  return result;
}
//   var collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
// console.log(double_to_one(collection));
module.exports = double_to_one;
