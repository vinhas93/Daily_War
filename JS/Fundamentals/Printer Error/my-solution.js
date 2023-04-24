function printerError(string) {
  let charList = string.split("");
  let cont = 0;
  charList.forEach((letter) => {
    if (letter.match(/[n-z]/gi)) {
      cont++;
    }
  });

  return `${cont}/${string.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
