'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  let result=collection[0];
  for(let item of collection){
    if(item>result) result=item;
  }
  return result;
}
// var collection = [1, 2, 3, 4, 5];
// console.log(collect_max_number(collection));
module.exports = collect_max_number;
