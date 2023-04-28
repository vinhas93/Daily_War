// function add (a, b) {
//   var res = '', c = 0
//   a = a.split('')
//   b = b.split('')
//   while (a.length || b.length || c) {
//     c += ~~a.pop() + ~~b.pop()
//     res = c % 10 + res
//     c = c > 9
//   }
//   return res
// }


function add(a, b) {
  console.log(a, b);
  a = a.split("").reverse();
  b = b.split("").reverse();
  
  var sum = [];
  var remainder = 0;
  for (var i = 0; i < Math.max(a.length, b.length); i++) {
    var x = parseInt(a[i]) ? parseInt(a[i]) : 0;
    var y = parseInt(b[i]) ? parseInt(b[i]) : 0;
    var digit = (x + y + remainder) % 10;
    remainder = Math.floor((x + y + remainder) / 10);
    sum.unshift(digit);
  }
  if (remainder) {sum.unshift(remainder)}
  
  return sum.join("");
}



console.log(add("1", "1")+': should be 2'); // "2"
console.log(add("123", "456")+': should be 579'); // "579"
console.log(add("888", "222"+': should be 1110')); // "1110"
console.log(add("1372", "69")+': should be 1441'); // "1441"
console.log(add("12", "456")+': should be 468'); // "468"
console.log(add("101", "100")+': should be 201'); // "201"
console.log(add("63829983432984289347293874", "90938498237058927340892374089")+': should be 91002328220491911630239667963');