// function disemvowel(str) {
//   return (str = str.replaceAll(/[aioue]/gi, ''));
// }

// console.log(disemvowel('This website is for losers LOL!'));
// console.log(
//   disemvowel("No offense but,\nYour writing is among the worst I've ever read")
// );

// console.log(disemvowel('What are you, a communist?'));

// ______________________________________________

// function squareDigits(num) {
//   const str = String(num);
//   let element = '';
//   for (let i = 0; i < str.length; i++) {
//     element += Math.pow(Number(str[i]), 2);
//   }
//   return Number(element);
// }
// console.log(squareDigits(9119));

// ________________________________________________

// var uniqueInOrder = function (iterable) {
//   //your code here - remember iterable can be a string or an array
//   const newArr = [];
//   for (let i = 1; i <= iterable.length; i++) {
//     if (iterable[i - 1] === iterable[i]) {
//       continue;
//     }
//     newArr.push(iterable[i - 1]);
//   }
//   return newArr;
//   //
// };
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// ______________________________________________

// function longest(s1, s2) {
//   return [...s1, ...s2]
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .sort()
//     .join('');
// }

// console.log(longest('aretheyhere', 'yestheyarehere'));

// ____________________________________________________

function findShort(s) {
  const arr = s.split(' ');
  let element = arr[0].length;
  for (const i of arr) {
    if (element < i.length) {
      continue;
    }
    element = i.length;
  }
  return element;
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
