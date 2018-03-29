'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for(let i=collection.length;i>=0;i--){
    if(collection[i] % 2 ==0) return collection[i];
  }
  return '该集合中没有偶数';
}
// var collection = [1,11,27,20,4,9,15];
// console.log(find_last_even(collection));
module.exports = find_last_even;
