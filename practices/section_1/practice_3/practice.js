function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result=[];
  for(let item_a of collection_a){
    for(let item_b of object_b.value){
      if(item_a==item_b){
        result.push(item_a);
        break;
      }
    }
  }
  return result;
}
// var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
// var collection_b = {value: ["a", "d", "e", "f"]};
// console.log(collect_same_elements(collection_a,collection_b));
module.exports = collect_same_elements;
