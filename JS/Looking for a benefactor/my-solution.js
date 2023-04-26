function newAvg(arr, newAvg) {
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) arrSum += arr[i]; // Soma os elementos do array

  let newDonation = newAvg * (arr.length + 1) - arrSum; // Calcula a diferença entre a nova média múltiplicada pela soma do array

  if (newDonation < 1) throw new Error("Expected New Average is too low");

  return Math.ceil(newDonation);
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
