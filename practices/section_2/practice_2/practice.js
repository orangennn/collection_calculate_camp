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
    let new_item=item.split('-');
    if(include_key(result,new_item[0])){
      if(new_item.length>1){
        result[include_key(result,new_item[0])-1]+parseInt(new_item[1]);
      }else result[include_key(result,new_item[0])-1].count++;
    }
    else{
      var num_count={};
      num_count.key=new_item[0];
      if(new_item.length>1)     num_count.count=parseInt(new_item[1]);
      else num_count.count=1;
      result.push(num_count);
    }
  }
  return result;
}
//   var collection = [
//     "a", "a", "a",
//     "e", "e", "e", "e", "e", "e", "e",
//     "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
//     "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
//     "f", "f", "f", "f", "f", "f", "f", "f", "f",
//     "c", "c", "c", "c", "c", "c", "c", "c",
//     "g", "g", "g", "g", "g", "g", "g",
//     "b", "b", "b", "b", "b", "b",
//     "d-5"
//   ];
// console.log(count_same_elements(collection));
module.exports = count_same_elements;
