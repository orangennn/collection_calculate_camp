'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let result=[];
  for(let item of collection){
    if(item %2 !=0) result.push(item*3+2);
  }
  return result;
}
  // var collection = [1,5,7,12,11,35,54,67,70];
  // console.log(hybrid_operation_to_uneven(collection));
module.exports = hybrid_operation_to_uneven;
