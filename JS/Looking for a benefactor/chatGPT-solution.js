function newAvg(arr, navg) {
  const n = arr.length;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const expectedSum = navg * (n + 1) - sum;
  const expectedDonation = expectedSum > 0 ? Math.ceil(expectedSum) : -1;
  if (expectedDonation === -1) {
    throw new Error("ValueError");
  }
  return expectedDonation;
}


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
