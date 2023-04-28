/* Como começou:

function add(a, b) {
  return (Number(a) + Number(b)).toString(); // Fix me!
}

*/

function add(a, b) {
  let sumStr = ""; // Resultado da soma como string
  let ten = 0; // Se o resultado da soma tiver 2 digitos, adiciona 1 a próxima operação

  a = a.padStart(b.length, "0"); // Iguala o tamanho das strings adicionando zeros à esquerda
  b = b.padStart(a.length, "0");

  for (let i = a.length - 1; i > -1; i--) {
    // Faz as operações da direita para a esquerda
    let sumNum = Number(a[i]) + Number(b[i]) + ten; // Transforma os chars em nums e adiciona a dezena resultante da operação anterior
    sumStr = (sumNum % 10) + sumStr; // Adiciona apenas a casa da unidade da soma a esquerda na nova string
    ten = sumNum > 9 ? 1 : 0;  // verifica se precisa adicionar 1 à próxima operação
  }

  return ten ? ten + sumStr : sumStr;
}

console.log(add("1", "1")); // "2"
console.log(add("123", "456")); // "579"
console.log(add("888", "222")); // "1110"
console.log(add("1372", "69")); // "1441"
console.log(add("12", "456")); // "468"
console.log(add("101", "100")); // "201"
console.log(add("63829983432984289347293874", "90938498237058927340892374089")); // "91002328220491911630239667963"
