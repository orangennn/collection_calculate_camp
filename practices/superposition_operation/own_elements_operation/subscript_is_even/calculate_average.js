'use strict';
var calculate_average = function(collection){
  let evenIndex_sum=0;
  let count=Math.floor(collection.length/2);
  for(let i=0;i<collection.length;i++){
    if(i %2 !=0) evenIndex_sum+=collection[i];
  }
  return evenIndex_sum/count;
};
  // var collection_a = [1, 2, 3, 4, 5, 6];
  // console.log(calculate_average(collection_a));
module.exports = calculate_average;
