String.prototype.toJadenCase = function () {
  const wordList = this.split(/\s+/); //Transforma a string numa lista de palavras
  const jadenCaseList = [];

  wordList.forEach((word) => {
    word = word.toLowerCase();
    let chars = word.split(""); //Transforma cada palavra em uma lista de letras

    chars[0] = chars[0].toUpperCase(); //Transforma a primeira letra em maiúscula

    word = chars.join(""); //Reconstrói a palavra com a letra maiúscula

    jadenCaseList.push(word); //Adiciona a palavra ao final de uma nova lista
  });

  const jadenCaseString = jadenCaseList.join(" "); // Reconstrói a string tratada

  return jadenCaseString;
};

const test = "eu estou aqUi   Para ser TESTADO!"

console.log(test.toJadenCase());
