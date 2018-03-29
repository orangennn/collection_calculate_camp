'use strict';

function get_letter(num){
  let fir_num=num/26;
  let sec_num=num% 26;
  if(sec_num==0){
    fir_num--;
    sec_num=26;
  }
  if(fir_num>=1){
    return String.fromCharCode(fir_num+96)+String.fromCharCode(sec_num+96);
  }else{
    return String.fromCharCode(sec_num+96);
  }
}
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result=[];
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
      result.push(get_letter(i));
    }
  }else{
    for(let i=number_a;i>=number_b;i--){
      result.push(get_letter(i));
    }
  }
  return result;
}
// console.log(get_letter_interval_2(28,28));
module.exports = get_letter_interval_2;
