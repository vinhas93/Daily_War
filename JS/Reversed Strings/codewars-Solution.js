const solution = (s) => [...s].reverse().join("");

console.log(solution("Hello World!")); //Output: '!dlroW olleH'
console.log(solution("This is a test")); //Output: 'tset a si sihT'
console.log(solution("")); //Output: ''
console.log(solution("a")); //Output:'a'

/*
` EXPLICAÇÃO
  A solução usa uma arrow function com um parâmetro s que representa a string de entrada. 
  A função usa a sintaxe de spread ... para criar uma matriz de caracteres a partir da string de entrada s. 
  Em seguida, o método reverse() é chamado na matriz de caracteres para inverter a ordem dos elementos. 
  Finalmente, o método join('') é chamado na matriz invertida para criar uma string a partir dos elementos da matriz, 
  onde cada elemento é separado por uma string vazia ''.

  A expressão [...s] cria uma matriz com cada caractere da string s. 
  Por exemplo, se s for a string "hello", a expressão [...s] retornará a matriz ['h', 'e', 'l', 'l', 'o'].
`*/