'use strict';
//将集合中第偶数个元素形成新的集合
function update_collection(collection){
  let new_collection=[];
  for(let i=0;i<collection.length;i++) {
    if(i%2!=0 && collection[i] %2==0 ) new_collection.push(collection[i]);
  }
  return new_collection;
}
//求每组平均数
function average_arr(arr_sum,arr_count){
  let arr_average=[];
  for(let i=0;i<arr_sum.length;i++){
    if(arr_count[i]!=0) arr_average.push(arr_sum[i]/arr_count[i]);
  }
  if(arr_average.length==0) arr_average.push(0);
  return arr_average;
}

var even_group_calculate_average = function(collection){
  let new_collection=update_collection(collection);
  let arr_sum=[0];
  let arr_count=[0];
  //统计每组数据和
  for(let item of new_collection){
    let index=Math.floor(Math.log(item)/Math.log(10));
    if(arr_sum.length>index){
      arr_sum[index]+=item;
      arr_count[index]++;
    }else{
      for(let i=arr_sum.length;i<index;i++){
        arr_sum.push(0);
        arr_count.push(0);
      }
      arr_sum.push(item);
      arr_count.push(1);
    }
  }
  return(average_arr(arr_sum,arr_count));
};
// var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
// var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
// var collection_c = [344, 256, 55, 777, 322, 180];
// console.log(even_group_calculate_average(collection_a));
// console.log(even_group_calculate_average(collection_b));
// console.log(even_group_calculate_average(collection_c));
module.exports = even_group_calculate_average;
