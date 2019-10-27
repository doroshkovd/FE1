// let input = prompt('Send message');

// switch (input) {
//   case 0:
//     console.log('Your input is zero');
//     break;
//   case 1:
//     console.log('Your input is one');
//     break;
//   case 2:
//   case 3:
//     console.log('Your input is two or three');
// }

let count = 1;

function showMessage(message = 'You have to add msg ||') {
  let isReady = true;
  console.log(count);
  console.log(message);
  count++;
  return count;
}

// showMessage('Your input is:');
// showMessage('Another logging');
// showMessage();

function add(x, y) {
  let sum = x + y;
  return sum;
}

function callAdd() {
  let result = add(1, 4);
  showMessage(result);
  return result;
}

function checkAge(age) {
  return age > 18 ? true : confirm('If 18?');
}

// showMessage(checkAge(18));
// showMessage(checkAge(22));

function min(a, b) {
  return a > b ? b : a;
}

// console.log(min(1, 5));
// console.log(min(67, 45));
// console.log(min(4, 4));

function pow(value, grad) {
  let currentValue = value;
  while (grad > 1) {
    currentValue *= value;
    grad--;
  }
  return currentValue;
}

// console.log(pow(10, 2));
// console.log(pow(10, 5));
// console.log(pow(10, 7));
// console.log(pow(2, 1));
// console.log(pow(2, 3));
// console.log(pow(2, 5));

// function getFizzBuzzOutput(n, fizzNumber = 3, buzzNumber = 5) {
//   let output = '';
//
//   for (let i = 1; i <= n; i++) {
//     output += `${getFizzBuzz(i, fizzNumber, buzzNumber)} `;
//   }
//
//   return output;
// }
//
// function getFizzBuzz(n, fizzNumber, buzzNumber) {
//   if (n % fizzNumber === 0 && n % buzzNumber === 0) {
//     return 'fizzbuzz';
//   } else if (n % fizzNumber === 0) {
//     return 'fizz';
//   } else if (n % buzzNumber === 0) {
//     return 'buzz';
//   }
//
//  return n;
// }

// let result = getFizzBuzzOutput(15);
// let result57 = getFizzBuzzOutput(35, 5, 7);
//
// console.log(result);
// console.log(result57);

// function ask(question, yes, no) {
//   let isYes = confirm(question);
//   isYes ? yes() : no();
// }

// ask('Do you want anything?',
//     function() {alert('Yes')},
//     function (){alert('No')});


function getFizzBuzzOutput2(n, fizzNumber = 3, buzzNumber = 5, callback) {
  let output = '';

  for (let i = 1; i <= n; i++) {
    output += `${callback(i, fizzNumber, buzzNumber)} `;
  }

  return output;
}

let getFizzBuzz2 = function(n, fizzNumber, buzzNumber) {
  if (n % fizzNumber === 0 && n % buzzNumber === 0) {
    return 'fizzbuzz';
  } else if (n % fizzNumber === 0) {
    return 'fizz';
  } else if (n % buzzNumber === 0) {
    return 'buzz';
  }

  return n;
};

let result57 = getFizzBuzzOutput2(35, 5, 7, getFizzBuzz2);

console.log(result57);

console.dir(window.document);

let arrowFunc = (x, y) => x + y;

console.log(arrowFunc(4, 55));
//
// test(5, 'string', () => {
//
// });

setTimeout(() => {
  console.log('3000 ms past')
}, 3000);















