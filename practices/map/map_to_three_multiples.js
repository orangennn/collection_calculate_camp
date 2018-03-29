'use strict';
var map_to_three_multiples = function(collections){
  let result=[];
  for(let num of collection) result.push(num*3);
  return result;
};

module.exports = map_to_three_multiples;
