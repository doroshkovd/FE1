let arr = ['BMW', 'Audi', 'VW'];

// console.log(arr.shift());
// console.log(arr);

arr.unshift('Lada', 'Geely');
arr.splice(2, 0, 'Dodge');
console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let arr3 = arr1.concat(arr2);
// for (let value of arr1) {
//   arr3.push(value);
// }
//
// for (let value of arr2) {
//   arr3.push(value);
// }

// console.log(arr3);

arr1.push(1, 2, 3);
console.log(arr2);

let arr2Copy = [];

let getArrCopy = (arr, isRevers = false) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return isRevers ? newArr.reverse() : newArr;
};

// arr2 = arr2Copy;
console.log(arr2);

console.log(getArrCopy(arr2));

console.log(arr2.toString());
let str = arr2.join(' tralalaa ');
console.log(str);
console.log(str[0]);

let dog = {
  nick: 'Jerry',
  run: () => 'I\'m running'
  ,
  bark: function () {
    return 'Gau gau'
  },
};

console.log(dog.bark());


let dog2 = Object.assign({}, dog);

let dogs = [dog, dog2];









