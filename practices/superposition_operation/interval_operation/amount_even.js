'use strict';

function amount_even(collection) {

  //在这里写入代码
  let result=0;
  for(let item of collection){
    if(item %2==0) result+=item;
  }
  return result;
}
  // var collection = [1,2,3,4,5,6,7,8,9,10];
  // console.log(amount_even(collection));
module.exports = amount_even;
