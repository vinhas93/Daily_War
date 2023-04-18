var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};

/*Essa solução usa o método filter() em duas chamadas para criar dois novos arrays:
 um contendo todos os elementos não zero do array de entrada e outro contendo apenas os elementos zero.*/


 var moveZeros2 = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}


var moveZeros3 = function (arr) {
  let result = arr.filter(c => c !== 0)
  let count = arr.length - result.length
  
  return result.concat(Array(count).fill(0))
}