function mirror(obj) {
  const result = {};
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result[prop] = prop.split("").reverse().join("");
    }
  }
  return result;
}


const obj = {
  abc: "-",
  arara: "-",
  xyz: "-",
};

console.log(mirror(obj));
