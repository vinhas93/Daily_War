function isValidWalk(walk) {
  if (walk.length !== 10) { // Se o array não tiver exatamente 10 elementos, retorna false
    return false;
  }
  
  let x = 0; // Coordenada x
  let y = 0; // Coordenada y
  
  for (let i = 0; i < walk.length; i++) {
    switch(walk[i]) {
      case 'n': y++; break;
      case 's': y--; break;
      case 'e': x++; break;
      case 'w': x--; break;
      default: return false; // Se a direção não for 'n', 's', 'e' ou 'w', retorna false
    }
  }
  
  return (x === 0 && y === 0); // Retorna true se as coordenadas x e y forem ambas zero
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