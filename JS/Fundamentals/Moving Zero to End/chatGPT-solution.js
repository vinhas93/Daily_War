function moveZeros(array) {
  let zerosCount = 0;
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      newArray.push(array[i]);
    } else {
      zerosCount++;
    }
  }

  for (let i = 0; i < zerosCount; i++) {
    newArray.push(0);
  }

  return newArray;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));