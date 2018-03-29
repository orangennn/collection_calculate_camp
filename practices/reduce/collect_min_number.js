'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let result=collection[0];
  for(let item of collection){
    if(item<result) result=item;
  }
  return result;
}

module.exports = collect_min_number;
