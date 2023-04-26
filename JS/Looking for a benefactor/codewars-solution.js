function newAvg(arr, newavg) {
  let out = 0;
  if ( arr.length !== 0 ){
    let temp = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
    out = Math.ceil(temp)
  } else {
    out = newavg
  }
  return out <= 0 ? error : out;
}


// function newAvg(arr, newavg) {
//   const result = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0); 
//   if (result <= 0) throw "Expected New Average is too low"; 
//   return Math.ceil(result);
// }


console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 30));
console.log("---------------------------------");
console.log(newAvg([14, 30, 5, 100, 9, 11, 15], 30));
console.log("---------------------------------");
console.log(newAvg([14, 30, 5, 2, 9, 11, 15], 30));
console.log("---------------------------------");
console.log(newAvg([], 30));
console.log("---------------------------------");
console.log(newAvg([14, 14, 14, 14, 14, 14, 14], 1));
console.log("---------------------------------");