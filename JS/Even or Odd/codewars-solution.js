function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}


const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';