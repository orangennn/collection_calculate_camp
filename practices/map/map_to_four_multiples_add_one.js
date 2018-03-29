'use strict';
var map_to_four_multiples_add_one = function(collection){
  let result=[];
  for(let num of collection) result.push(num*4+1);
  return result;
};
  // var collection_a = [1, 2, 3, 4, 5];
  // console.log(map_to_four_multiples_add_one(collection_a));
module.exports = map_to_four_multiples_add_one;
