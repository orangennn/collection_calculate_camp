function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result=collection_a;
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
//   {key: "a", count: 3},
//   {key: "e", count: 7},
//   {key: "h", count: 11},
//   {key: "t", count: 20},
//   {key: "f", count: 9},
//   {key: "c", count: 8},
//   {key: "g", count: 7},
//   {key: "b", count: 6},
//   {key: "d", count: 5}
// ];
//
// var object_b = {value: ["a", "d", "e", "f"]};
// console.log(create_updated_collection(collection_a,object_b));
module.exports = create_updated_collection;
