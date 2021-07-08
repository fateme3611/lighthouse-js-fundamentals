const sumLargestNumbers = function(data) {


data.sort((a,b)=>a-b);
console.log(data);
const num = data[data.length -1] + data[data.length -2];
return num;


};
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
  
