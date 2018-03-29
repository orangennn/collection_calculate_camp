function include_key(collection,key){
  for(let i=0;i<collection.length;i++){
    if(collection[i].key==key) return i+1;
  }
  return false;
}
function count_same_elements(collection) {
  //在这里写入代码
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
// var collection = [
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
// console.log(count_same_elements(collection));
module.exports = count_same_elements;
