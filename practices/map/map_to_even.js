'use strict';
function map_to_even(collection){
  let result=[];
  for(let num of collection) result.push(num*2);
  return result;
}
  // var collection_a = [1, 2, 3, 4, 5];
  // console.log(map_to_even(collection_a));
module.exports = map_to_even;
