'use strict';
var number_map_to_word = function(collection){
  let result=[];
  for(let num of collection){
    result.push(String.fromCharCode(num+96));
  }
  return result;
};
  // var collection_a = [1, 2, 3, 4, 5];
  // console.log(number_map_to_word(collection_a));
module.exports = number_map_to_word;
