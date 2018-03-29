//判断集合中是否有key元素
function include_key(collection,key){
  for(let i=0;i<collection.length;i++){
    if(collection[i].key==key) return i+1;
  }
  return false;
}
//统计集合中相同元素的个数
function count_same_elements(collection) {
  let result=[];
  for(let item of collection){
    if(include_key(result,item)) result[include_key(result,item)-1].count++;
    else{
      var num_count={};
      num_count.key=item;
      num_count.count=1;
      result.push(num_count);
    }
  }
  return result;
}

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result=count_same_elements(collection_a);
  for(let item of result){
    for(let compare_item of object_b.value){
      if(item.key==compare_item){
        item.count-=Math.floor(item.count/3);
        break;
      }
    }
  }
  return result;
}
// var collection_a = [
//   "a", "a", "a",
//   "e", "e", "e", "e", "e", "e", "e",
//   "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
//   "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
//   "f", "f", "f", "f", "f", "f", "f", "f", "f",
//   "c", "c", "c", "c", "c", "c", "c", "c",
//   "g", "g", "g", "g", "g", "g", "g",
//   "b", "b", "b", "b", "b", "b",
//   "d", "d", "d", "d", "d"
// ];
//
//
// var object_b = {value: ["a", "d", "e", "f"]};
// console.log(create_updated_collection(collection_a,object_b));
// module.exports = create_updated_collection;
