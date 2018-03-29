'use strict';

function hybrid_operation(collection) {
  let result=0;
  for(let item of collection){
    result+=item*3+2;
  }
  return result;
  //在这里写入代码
}
  // var collection = [1,5,7,11,35,67];
  // console.log(hybrid_operation(collection));
module.exports = hybrid_operation;
