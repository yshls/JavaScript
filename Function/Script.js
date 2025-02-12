// 함수 테스트트
// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => a + b;

// add(4, 5);
// console.log(add(4, 5));

// 함수 연습문제(1)
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet('세현'));

// 함수 연습문제(2)
// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(4, 5));

// 함수 연습문제(3)
// function checkEvenOdd(num) {
//   if (num % 2 == 0) {
//     return 'Even';
//   } else return 'Odd';
// }

// console.log(checkEvenOdd(4));
// console.log(checkEvenOdd(7));

// 함수 연습문제(4-A)
// function doubleArray(numArray) {
//   let emptyArray = [];
//   for (let i = 0; i < numArray.length; i++) {
//     emptyArray.push(numArray[i] * 2);
//   }
//   return emptyArray;
// }

// 함수 연습문제(4-B)
// console.log(doubleArray([1, 2, 3]));

// function doubleArray(numArray) {
//   return numArray.map((num) => num * 2);
// }

// console.log(doubleArray([1, 2, 3]));

// 5.연습문제
// function reverseString(upsideDownString) {
//   return upsideDownString.split('').reverse().join('');
// }

// console.log(reverseString('hello'));

// function reverseString(upsideDownString) {
//   let result = '';
//   for (let i = upsideDownString.length - 1; i >= 0; i--) {
//     result += upsideDownString[i];
//   }

//   return result;
// }

// console.log(reverseString('hello'));

function filterGreaterThanTen(biggerTen) {
  return biggerTen.filter((num) => num > 10);
}

console.log(filterGreaterThanTen([1, 15, 8, 12]));
