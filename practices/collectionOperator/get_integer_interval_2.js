'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let result=[];
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
      if(i % 2==0) result.push(i);
    }
  }else{
    for(let i=number_a;i>=number_b;i--){
      if(i % 2==0) result.push(i);
    }
  }
  return result;
}
// console.log(get_integer_interval_2(5,5));
module.exports = get_integer_interval_2;
