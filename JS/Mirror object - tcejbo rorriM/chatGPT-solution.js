function mirror(obj) {
  return Object.entries(obj).reduce((acc, [key, _]) => {
    acc[key] = key.split("").reverse().join("");
    return acc;
  }, {});
}

const obj = {
  abc: "-",
  arara: "-",
  xyz: "-",
};

console.log(mirror(obj));
