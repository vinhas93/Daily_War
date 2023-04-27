function generateHashtag(str) {
  if (str.length < 1 || str.match(/^\s+$/)) {
    return false;
  }
  const wordList = str.replace(/\s{2,}/g, " ").split(" ");

  for (let i = 0; i < wordList.length; i++) {
    wordList[i] = wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1);
  }

  return wordList.join("").length > 139 ? false : "#" + wordList.join("");
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(""));
console.log(generateHashtag(" "));
console.log(generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(generateHashtag("                                           "));
