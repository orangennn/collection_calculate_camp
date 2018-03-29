'use strict';
//将集合中第偶数个元素形成新的集合
function update_collection(collection){
  let new_collection=[];
  for(let i=0;i<collection.length;i++) {
    if(i%2!=0 ) new_collection.push(collection[i]);
  }
  return new_collection;
}

var single_element = function(collection){
  let new_collection=update_collection(collection);
  let hash={};
  let result=[];
  //构建元素计数对象
  for(let item of new_collection){
    if (hash[item]) {
      hash[item]++;
    }else{
      hash[item]=1;
    }
  }
//选出不重复元素
  for(let key of new_collection){
    if(hash[key]==1) result.push(key);
  }
  return result;
};
// var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
// var collection_b = [11, 11, 22, 11, 33, 11];
// console.log(single_element(collection_a));
// console.log(single_element(collection_b));
module.exports = single_element;
