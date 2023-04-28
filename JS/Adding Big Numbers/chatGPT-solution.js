function add(num1, num2) {
  let carry = 0;
  let sum = "";
  let i = num1.length - 1;
  let j = num2.length - 1;
  
  while (i >= 0 || j >= 0) {
    let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    let currentSum = digit1 + digit2 + carry;
    
    carry = currentSum > 9 ? 1 : 0;
    sum = (currentSum % 10) + sum;
    
    i--;
    j--;
  }
  
  if (carry > 0) {
    sum = carry + sum;
  }
  
  return sum;
}


console.log(add("1", "1")+': should be 2');
console.log(add("123", "456")+': should be 579');
console.log(add("888", "222")+': should be 1110');
console.log(add("1372", "69")+': should be 1441');
console.log(add("12", "456")+': should be 468');
console.log(add("101", "100")+': should be 201'); 
console.log(add("63829983432984289347293874", "90938498237058927340892374089")+': should be 91002328220491911630239667963');