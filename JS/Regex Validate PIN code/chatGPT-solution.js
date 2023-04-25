function validatePIN(pin) {
  // Expressão regular que verifica se a string contém apenas 4 ou 6 dígitos
  const regex = /^(\d{4}|\d{6})$/;
  
  // Testa se a string passada como argumento corresponde à expressão regular
  return regex.test(pin);
}


console.log(validatePIN("1") + "   1 - should return false");
console.log(validatePIN("12") + "  12 - should return false");
console.log(validatePIN("123") + "   123 - should return false");
console.log(validatePIN("12345") + "   12345 - should return false");
console.log(validatePIN("1234567") + "   1234567 - should return false");
console.log(validatePIN("-1234") + "   -1234 - should return false");
console.log(validatePIN("1.234") + "   1.234 - should return false");
console.log(validatePIN("-1.234") + "  -1.234 - should return false");
console.log(validatePIN("00000000") + "  00000000 - should return false");

console.log(validatePIN("1234") + "   1234 - should return true");
console.log(validatePIN("0000") + "   0000 - should return true");
console.log(validatePIN("1111") + "    1111 - should return true");
console.log(validatePIN("123456") + "   123456 - should return true");
console.log(validatePIN("098765") + "   098765 - should return true");
console.log(validatePIN("000000") + "   000000 - should return true");
console.log(validatePIN("123456") + "   123456 - should return true");
console.log(validatePIN("090909") + "   090909 - should return true");
