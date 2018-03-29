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
var number_map_to_word_over_26 = function(collection){
  let result=[];
  for(let num of collection) result.push(get_letter(num));
  return result;
};
  // var collection_a = [1, 13, 27, 30, 25, 27];
  // console.log(number_map_to_word_over_26(collection_a));
module.exports = number_map_to_word_over_26;
