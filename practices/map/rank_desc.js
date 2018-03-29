'use strict';
function swap(collection,index1,index2){
  let item=collection[index1];
  collection[index1]=collection[index2]
  collection[index2]=item;
  return collection;
}
var rank_desc = function(collection){
  let result=collection;
  for(let i=0;i<result.length-1;i++){
    let index=i;
    let min_num=result[i];
    for(let j=i+1;j<result.length;j++){
      if(result[j]<min_num){
        index=j;
        min_num=result[j];
      }
    }
    result=swap(result,i,index);
  }
  return result;
};
// var collection_a = [3, 2, 4, 5, 6];
// console.log(rank_desc(collection_a));
module.exports = rank_desc;
