'use strict';
//将数字转换成对应字符串
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

function median_to_letter(collection) {

  //在这里写入代码
  let lowMiddle_index=Math.floor((collection.length-1)/2);
  let highMiddle_index=Math.ceil((collection.length-1)/2);
  return get_letter(Math.ceil((collection[lowMiddle_index]+collection[highMiddle_index])/2));

}
// var collection = [20,21,22,23,24,25,26,27,28,29,
//                   30,31,32,33,34,35,36,37,38,39,
//                   40,41,42,43,44,45,46,47,48,49,
//                   50,51,52,53];
// console.log(median_to_letter(collection));
module.exports = median_to_letter;
