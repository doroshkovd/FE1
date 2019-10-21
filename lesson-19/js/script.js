// let param = prompt('how old are you');
// some code
const ALCOHOL_AGE = 18;

// let isMore = param > ALCOHOL_AGE ? true : false;

// if ( param > 100) {
//   alert(`100!!! Buhai uge ne strashno!!!`);
// } else if (isMore) {
//   alert(`More then ${ALCOHOL_AGE}`);
// } else {
//   alert(`Less then ${ALCOHOL_AGE}`);
// }

// let alertReturn = 5 ? Math.sqrt(4) : alert(`Less then ${ALCOHOL_AGE}`);
//
// if (isMore) {
//   alertReturn = Math.sqrt(4);
// } else {
//   alertReturn = alert(`Less then ${ALCOHOL_AGE}`);
// }

// let x = 110, y = 15;
//
// let result = x > y ? 'X more then Y' : 'Y more then X';
// console.log(result);
//
// let num = +prompt('Input number');
//
// if (num % 2 === 0) {
//   alert(`Number ${num} even`);
// } else {
//   alert(`Number ${num} odd`);
// }

const RADIUS = 10;

// let x = +prompt('Input x');
// let y = +prompt('Input y');
//
// Math.sqrt(x*x + y*y) <= RADIUS ? console.log('IN the circle') : console.log('OUT the circle');
//
//
// let a = 5, b = 6, c = 12;
// if ((a + b > c) && (b + c > a) && (c + a > b)) {
//   console.log('Exist')
// } else {
//   console.log('Dont exist')
// }
// let gender = 'F';
// let age = 34;
// let amount = 10000;
//
// if (((age > 20) && (age < 34)) || (amount > 2000)) {
//   console.log('OK');
// }

// console.log(param);
// let userAge = param || 34;


console.log(null || 2 || undefined);
// console.log(alert(1) || 2 || alert(2));
console.log(1 && null && 2);
// console.log(alert(1) && 2 && alert(2));
console.log(null || (2 && 3) || 4);
//
// age = 91;
//
// if (age > 14 && age <= 90) {
//   console.log('In')
// } else {
//   console.log('out');
// }
// let psw;
// let login = prompt('Your login:');
//
// if (!login) {
//   console.log('Aborted');
// } else if (login === 'Admin' || login === 'admin') {
//   psw = prompt('Your psw:');
// } else {
//   console.log(`I don't know you`);
// }

let x = 1;

 // while (x < 10) {
  // console.log(x++);
// }

// let y = 1;
//
// do {
//   console.log(y++);
// } while (y < 10);

// for (let i = 0; i <= 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i)
// }
let input;

// do {
//   input = +prompt('Enter number more then 100');
// } while (input <= 100);
// input = +prompt('Enter number more then 100');

// while (input <= 100) {
//   input = +prompt('Enter number more then 100');
// }

// for (let i = 0;input <= 100; i*=100) {
//   input = +prompt('Enter number more then 100');
// }
input = +prompt('Enter number');

let isComplex = false;

for (let i = 1; i !== input; i++) {
  if (i !== 1 && i !== input && input % i ===0) {
    isComplex = true;
    console.log(i)
    break;
  }
}

isComplex ? alert('Complex') : alert('Simple');

let sum = 0;

for (let i = 1; i <= 5; i++){
  sum += i;
}

console.log(sum);







