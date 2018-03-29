'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for(let item of collection) {
    if(item % 2==0) return item;
  }
  return '该集合中没有偶数';
}
  // var collection = [1,11,27];
  // console.log(find_first_even(collection));
module.exports = find_first_even;
