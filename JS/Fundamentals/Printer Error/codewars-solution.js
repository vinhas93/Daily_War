function printerError(s) {
  // your code
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count+"/"+s.length;
}



const printerError2 = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

const printerError3 = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')

function printerError4(s) {
  var m = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
      m++;
    }
  }
  return m + '/' + s.length;
}