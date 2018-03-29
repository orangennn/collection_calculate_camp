'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result=[];
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++) result.push(String.fromCharCode(96+i));
  }else{
    for(let i=number_a;i>=number_b;i--) result.push(String.fromCharCode(96+i));
  }
  return result;
}
// console.log(get_letter_interval(5,1));
module.exports = get_letter_interval;
