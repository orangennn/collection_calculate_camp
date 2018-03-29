'use strict';
function one_add_next_multiply_three(collection){
  let result=[];
  for(let i=0;i<collection.length-1;i++){
    result.push((collection[i]+collection[i+1])*3);
  }
  return result;
}
  // var collection_a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  // console.log(one_add_next_multiply_three(collection_a));
module.exports = one_add_next_multiply_three;
