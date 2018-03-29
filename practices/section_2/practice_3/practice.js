//判断是否已经在集合中
function include_key(collection,key){
  for(let i=0;i<collection.length;i++){
    if(collection[i].name==key) return i;
  }
  return -1;
}
//处理成标准的字符和数量
function normal_str(str){
  let new_str=str.split('-');
  if(new_str.length==1){
    new_str=new_str[0].split(':');
    if(new_str.length==1){
      new_str=new_str[0].split('[');
      if(new_str.length>1) new_str[1]=new_str[1].split(']')[0];
    }
  }
  return new_str;
}

function count_same_elements(collection) {
  //在这里写入代码
  let result=[];
  for(let item of collection){
    let new_item=normal_str(item);
    console.log(parseInt(new_item[1]));
    let index=include_key(result,new_item[0]);
    if(index!=-1){
      if(new_item.length>1){
        result[index].summary+=parseInt(new_item[1]);
        console.log(result[index].summary);
      }else result[index].summary++;
    }
    else{
      var num_count={};
      num_count.name=new_item[0];
      if(new_item.length>1)     num_count.summary=parseInt(new_item[1]);
      else num_count.summary=1;
      result.push(num_count);
    }
  }
  return result;
}
// var collection = [
//
//   "h[3]", "h", "h",
//  "t", "t[10]",
//
// ];
// console.log(count_same_elements(collection));
module.exports = count_same_elements;
