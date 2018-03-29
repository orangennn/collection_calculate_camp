'use strict';

function even_to_letter(collection) {
  let result=[];
  for(let item of collection){
    if(item %2==0)
       result.push(String.fromCharCode(96+item));
  }
  return result;
  //在这里写入代码
}
// var collection = [1,2,3,4,5,6,7,8,9,10];
// console.log(even_to_letter(collection));
module.exports = even_to_letter;
