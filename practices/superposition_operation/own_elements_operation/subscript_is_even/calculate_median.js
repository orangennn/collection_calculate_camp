'use strict';
//将集合中第偶数个元素形成新的集合
function update_collection(collection){
  let new_collection=[];
  for(let i=0;i<collection.length;i++) {
    if(i%2!=0) new_collection.push(collection[i]);
  }
  return new_collection;
}
var calculate_median = function(collection){
  let new_collection=update_collection(collection);
  let lowMiddle_index=Math.floor((new_collection.length-1)/2);
  let highMiddle_index=Math.ceil((new_collection.length-1)/2);
  return (new_collection[lowMiddle_index]+new_collection[highMiddle_index])/2;
};
// var collection_a = [1, 2, 3, 4, 5, 6];
// var collection_b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(calculate_median(collection_a));
// console.log(calculate_median(collection_b));
module.exports = calculate_median;
