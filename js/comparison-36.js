function checkForSpam(message) {
  let result;
  // Change code below this line
  // if (condition) {

  // } else {

  // }
  result =
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale');
  // Change code above this line
  return result;
}
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
