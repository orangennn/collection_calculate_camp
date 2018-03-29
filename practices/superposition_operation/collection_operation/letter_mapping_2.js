'use strict';

function average_to_letter(collection) {
  let sum=0;
  for(let item of collection) sum+=item;
  return String.fromCharCode(Math.ceil(sum/collection.length)+96);
  //在这里写入代码
}
// var collection = [1,2,3,4,5,6,7,8,9,10];
// console.log(average_to_letter(collection));
module.exports = average_to_letter;
