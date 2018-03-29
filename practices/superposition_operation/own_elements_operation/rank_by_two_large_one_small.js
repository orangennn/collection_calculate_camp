'use strict';
function rank_by_two_large_one_small(collection){
  let new_collection=collection.sort(function(a,b){
    return a-b
  });
  for(let i=0;i<new_collection.length;i+=3){
    if(i+2<new_collection.length){
      let item=new_collection[i];
      new_collection[i]=new_collection[i+1];
      new_collection[i+1]=new_collection[i+2];
      new_collection[i+2]=item;
    }
  }
  return new_collection;
}
// var collection_a = [2, 8, 1, 9, 6, 4, 3, 10];
// console.log(rank_by_two_large_one_small(collection_a));
module.exports = rank_by_two_large_one_small;
