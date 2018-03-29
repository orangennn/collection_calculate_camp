'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let result=[];
  for(let item of collection){
    if(item % 2 == 0){
      result.push(item);
    }
  }
  return result;
}
  // var collection_a = [1, 2, 3, 4, 5];
  // console.log(collect_all_even(collection_a));
module.exports = collect_all_even;
