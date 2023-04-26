// const mirror = obj => {
//   return Object.keys(obj).reduce((m, k) => {
//     m[k] = k.split('').reverse().join('');
//     return m;
//   }, {});
// };

const reverseString = (s) => [...s].reverse().join("");

const mirror = (obj) => {
  Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = reverseString(curr);
    return acc;
  }, {});
};

const obj = {
  abc: "-",
  arara: "-",
  xyz: "-",
};

console.log(mirror(obj));
