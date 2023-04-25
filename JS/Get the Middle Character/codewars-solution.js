function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }


// const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

/* Explicação do chat gpt dos operandos >>> e ~, &
    
    s.length - 1 >>> 1, - Passa o índice de início como s.length - 1 >>> 1, que é 
    equivalente a (s.length - 1) / 2 arredondado para baixo. 
    Isso significa que ele está pegando o índice do caractere do meio da string. 
    O operador >>> é uma operação bit a bit que desloca o número para a direita, preenchendo com zeros à esquerda.
    
    ** Retorna sempre a metade do valor arredondado pra baixo quando usado em números ***
    

    (~s.length & 1) + 1 - Passa o comprimento da substring a ser retornada como (~s.length & 1) + 1.
    Isso é equivalente a s.length % 2 === 0 ? 2 : 1, que retorna 2 se a string tiver um número par de
    caracteres ou 1 se tiver um número ímpar de caracteres.

    Por exemplo, se a string s tiver um comprimento de 5, a expressão ~s.length retornará -6 
    (que é a representação em complemento de dois do valor binário 11111010).

    Em seguida, o resultado da operação NOT bit a bit é combinado com o número 1 usando o 
    operador AND bit a bit (&). O operador AND bit a bit retorna um valor que possui um bit definido 
    somente se os bits correspondentes em ambos os operandos estiverem definidos.

    No caso do argumento (~s.length & 1), o operador AND bit a bit é usado para definir o último bit 
    como 1 se a string tiver um comprimento ímpar (ou 0 se tiver um comprimento par).

    Por exemplo, se a string s tiver um comprimento de 5, o valor de ~s.length será -6 (que é 11111010 
    em binário), e o operador AND bit a bit com 1 resultará em 0 (11111010 & 00000001 = 00000000).
    Isso indica que a string tem um comprimento ímpar e que o método substr() deve retornar um único 
    caractere do meio.

    Por outro lado, se a string s tiver um comprimento de 6, o valor de ~s.length será -7 (que é 11111001 
    em binário), e o operador AND bit a bit com 1 resultará em 1 (11111001 & 00000001 = 00000001).
    Isso indica que a string tem um comprimento par e que o método substr() deve retornar dois caracteres
    do meio.

*/

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
