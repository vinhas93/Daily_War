function toJadenCase(str) {
  // Separa a string em um array de palavras
  const words = str.split(" ");
  
  // Capitaliza a primeira letra de cada palavra
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  // Junta as palavras em uma única string, separadas por um espaço
  const jadenCasedString = capitalizedWords.join(" ");
  
  // Retorna a string formatada em Jaden case
  return jadenCasedString;
}

const quote = "How can mirrors be real if our eyes aren't real";
const jadenCasedQuote = toJadenCase(quote);
console.log(jadenCasedQuote);