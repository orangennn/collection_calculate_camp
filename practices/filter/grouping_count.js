'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var all_num_count={};
  for(var i=0;i<collection.length;i++){
    var key=collection[i].toString();
    if(all_num_count[key]) all_num_count[key]++;
    else all_num_count[key]=1;
  }
  return all_num_count;
}
// var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
// console.log(grouping_count(collection));
module.exports = grouping_count;
