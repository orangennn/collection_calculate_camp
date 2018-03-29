'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var ary = collection.split('->').sort(function(a,b){
    return a-b;
  });
  // console.log(ary);
  var lowMiddle = Math.floor((ary.length - 1) / 2);
  var highMiddle = Math.ceil((ary.length - 1) / 2);
  return (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;
}
  // var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
  // console.log(compute_chain_median(chain));
module.exports = compute_chain_median;
