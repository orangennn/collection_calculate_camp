'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result=[];
  for(let item_a of collection_a){
    for(let item_b of collection_b){
      if(item_a % item_b==0){
        result.push(item_a);
        break;
      }
    }
  }
  return result;
}
// var collection_a = [4,7,9,25,16,21,64,32,35,49];
// var collection_b = [2,3,5];
// console.log(choose_divisible_integer(collection_a,collection_b));
module.exports = choose_divisible_integer;
