'use strict';
var even_asc_odd_desc = function(collection){
  let left_collection=[];
  let right_collection=[];
  for(let item of collection){
    if(item %2 ==0) left_collection.push(item);
    else right_collection.push(item);
  }
  left_collection.sort(function(a,b){
    return a-b;
  });
  right_collection.sort(function(a,b){
    return b-a;
  });
  for(let item of right_collection){
    left_collection.push(item);
  }
  return left_collection;
};
// var collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
// console.log(even_asc_odd_desc(collection_a));
module.exports = even_asc_odd_desc;
