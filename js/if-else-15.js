function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
  return message;
}
console.log(checkAge(12));
console.log(checkAge(21));
