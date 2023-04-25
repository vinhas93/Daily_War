function solution(number) {
  let result = 0;

  if (number < 1) {
    return result;
  }

  for (let i = 1; i < number; i++) {
    i % 3 == 0 || i % 5 == 0 ? (result += i) : i;
  }
  return result;
}

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(15));
console.log(solution(16));
console.log(solution(1000));
console.log(solution(1001));
console.log(solution(0));
console.log(solution(-2));
