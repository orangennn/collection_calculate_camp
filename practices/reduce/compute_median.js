'use strict';

function compute_median(collection) {
  //在这里写入代码
  let new_cocollection=collection.sort(function(a,b){
    return a-b;
  })
  let lowMiddle=Math.floor((new_cocollection.length - 1) / 2);
  let highMiddle = Math.ceil((new_cocollection.length - 1) / 2);
  return (Number(new_cocollection[lowMiddle]) + Number(new_cocollection[highMiddle])) / 2;
}
// var collection_a = [1, 1, 1, 2, 3];
// var collection_b = [1, 1, 2, 3];
// var collection_c = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30];
// console.log(compute_median(collection_a));
// console.log(compute_median(collection_b));
// console.log(compute_median(collection_c));
module.exports = compute_median;
