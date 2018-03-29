function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result=collection_a;
  for(let item of result){
    for(let compare_item of object_b.value){
      if(item.key==compare_item){
        item.count--;
        break;
      }
    }
  }
  return result;
}
// var collection_a = [
//   {key: "a", count: 2},
//   {key: "e", count: 2},
//   {key: "h", count: 2},
//   {key: "t", count: 2},
//   {key: "f", count: 2},
//   {key: "c", count: 2},
//   {key: "g", count: 2},
//   {key: "b", count: 2},
//   {key: "d", count: 2}
// ];
//   var object_b = {value: ["a", "d", "e", "f"]};
// console.log(create_updated_collection(collection_a,object_b));
module.exports = create_updated_collection;
