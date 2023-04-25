function printerError(s) {
  const goodLetters = "abcdefghijklm";
  let errors = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (!goodLetters.includes(s[i])) {
      errors++;
    }
  }
  
  return `${errors}/${s.length}`;
}