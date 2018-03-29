'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let odd_sum=0;
  let count=0;
  for(let item of collection){
    if(item % 2 !=0){
      odd_sum+=item;
      count++;
    }
  }
  return odd_sum/count;
}
  // var collection = [1,2,3,4,5,6,7,8,9,10];
  // console.log(average_uneven(collection));
module.exports = average_uneven;
