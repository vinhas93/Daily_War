function getMiddle(word) {
  let length = word.length;
  let middleIndex = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    return word.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return word.charAt(middleIndex);
  }
}


console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));