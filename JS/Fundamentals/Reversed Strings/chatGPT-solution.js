function solution(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}

console.log(solution("world")); // Output: "dlrow"
console.log(solution("word")); // Output: "drow"