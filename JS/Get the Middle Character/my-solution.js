function getMiddle(str) {
  // let result = "";
  // let middle = str.length / 2;

  // if (str.length % 2 == 0) {
  //   result = str[middle - 1] + str[middle];
  // } else {
  //   result = str[Math.floor(middle)];
  // }

  // return result;
    
  return str.length % 2 == 1
    ? str[Math.floor(str.length / 2)]
    : str[str.length / 2 - 1] + str[str.length / 2];
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
