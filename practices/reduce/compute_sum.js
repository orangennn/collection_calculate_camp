'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  let result=0;
  for(let item of collection) result+=item;
  return result;
}
// var collection = [1, 2, 3, 4, 5];
// console.log(calculate_elements_sum(collection));
module.exports = calculate_elements_sum;
