function moverZeros(arr) {
  return arr.sort((a, b) => {
    if (a === 0 && b !== 0) return 1;
    else if (a !== 0 && b === 0) return -1;
    else return 0;
  });
}

console.log(moverZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
