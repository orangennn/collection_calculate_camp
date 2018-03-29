'use strict';

function compute_average(collection) {
  //在这里写入代码
  let result=0;
  for(let item of collection) result+=item;
  return result/collection.length;
}
  // var collection = [1, 3, 5, 98, 67, 453];
  // console.log(compute_average(collection));
module.exports = compute_average;
