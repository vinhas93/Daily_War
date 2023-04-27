function generateHashtag(str) {
  // Remover espaços em branco extras e dividir a string em palavras
  const words = str.trim().split(/\s+/);

  // Verificar se a string de entrada é vazia ou se não há palavras após remoção de espaços em branco
  if (words.length === 0 || str.trim().length === 0) { // DV: O segundo teste foi 
    return false;
  }

  // Capitalizar a primeira letra de cada palavra e juntar todas as palavras em uma string
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const hashtag = "#" + capitalizedWords.join("");

  // Verificar se a hashtag tem mais de 140 caracteres
  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}




console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(""));
console.log(generateHashtag(" "));
console.log(generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(generateHashtag("                                           "));

