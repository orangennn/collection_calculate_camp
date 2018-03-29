'use strict';
//将集合中第偶数个元素形成新的集合
function update_collection(collection){
  let new_collection=[];
  for(let i=0;i<collection.length;i++) {
    if(i%2==0 ) new_collection.push(collection[i]);
  }
  return new_collection;
}

var is_exist_element = function(collection,element){
  let new_collection=update_collection(collection);
  for(let item of new_collection){
    if(item==element) {
      return true;
    }
  }
  return false;
};
  // var collection_a = [1, 2, 3, 4, 5, 6];
  // console.log(is_exist_element(collection_a,3));
  // console.log(is_exist_element(collection_a,4));
module.exports = is_exist_element;
