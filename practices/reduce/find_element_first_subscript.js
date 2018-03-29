'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for(let i=0;i<collection.length;i++){
    if(collection[i]==element) return i;
  }
  return '无此元素';
}
var collection = [1,11,27,20,4,9,15,4,1,11];
// var element = 4;
// console.log(calculate_elements_sum(collection,element));
module.exports = calculate_elements_sum;
