'use strict';

function split_to_zero(number, interval) {
  //在这里写入代码
  let result=[];
  for(var num=number;num>0;num=eval((num-interval).toFixed(1))) result.push(num);
  result.push(num);
  return result;
}
// var result = split_to_zero(0.8, 0.2);
// console.log(result);
// var result = split_to_zero(0.7, 0.3);
// console.log(result);
module.exports = split_to_zero;
