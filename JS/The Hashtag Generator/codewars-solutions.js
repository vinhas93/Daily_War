// function generateHashtag (str) {
//   if(!str || str.length < 1) return false;
  
//   var r = '#' + str.split(' ').map(function(el) {
//     return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//   }).join('');
//   return r.length > 140?false:r;
// }


function generateHashtag (str) {

  var hashtag = str.split(' ').reduce(function(tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}


// function generateHashtag(str) {
//   if (!str.trim()) return false;

//   const result =
//     '#' +
//     str
//       .split(' ')
//       .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
//       .join('');

//   return result.length > 140 ? false : result;
// }


console.log(generateHashtag(" Hello there tHanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(""));
console.log(generateHashtag(" "));
console.log(generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(generateHashtag("                                           "));