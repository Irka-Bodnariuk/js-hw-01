function checkStorage(available, ordered) {
  let message;
  if (ordered > available) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  return message;
}

console.log(checkStorage(50, 100));
console.log(checkStorage(100, 50));
