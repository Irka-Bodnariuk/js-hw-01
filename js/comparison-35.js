function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}
console.log(checkForName('Egor Kolbasov', 'Egor'));
console.log(checkForName('Egor Kolbasov', 'egor'));
