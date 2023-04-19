function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  } else {
    let path = {};

    walk.forEach((step) => {
      if (path[step]) {
        path[step]++;
      } else {
        path[step] = 1;
      }
    });
  
    if (path.n != path.s || path.w != path.e) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]) +
    "- should return true"
);
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]) +
    "- should return false"
);
console.log(isValidWalk(["w"]) + "- should return false");
console.log(
  isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]) +
    "- should return false"
);
