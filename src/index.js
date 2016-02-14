'use strict';

exports.runningTimeOf = fun => {
  let start = new Date()
  fun()
  let end = new Date()
  return end - start;
}

exports.orderOfGrowth = (elementsCount1, runningTime1, elementsCount2, runningTime2) => {
  let logarithms = [elementsCount1, runningTime1, elementsCount2, runningTime2].map(Math.log2);
  elementsCount1 = logarithms[0];
  runningTime1 = logarithms[1];
  elementsCount2 = logarithms[2];
  runningTime2 = logarithms[3];
  return (runningTime2 - runningTime1) / (elementsCount2 - elementsCount1);
}
