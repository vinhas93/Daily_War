function solution(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(solution("Hello World!")); //Output: '!dlroW olleH'
console.log(solution("This is a test")); //Output: 'tset a si sihT'
console.log(solution("")); //Output: ''
console.log(solution("a")); //Output:'a'
