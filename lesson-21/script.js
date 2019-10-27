// let option = prompt('One option', 'none');
//
// let car = {
//   type: 'BMW',
//   model: '320D',
//   engine: 'Diesel',
//   bodyColor: 'grey',
//   [option]: true,
// };
//
// car[option] = false;

function getUser(name, surname, age, gender) {
  return {
    fullName: `${name} ${surname}`,
    age,
    gender,

  }
}
let user = getUser('Vasia', 'Pupkin', 23, 'M');
console.log(user);

if (!('salary' in user)) {
  user.salary = 1000;
}

console.log(user);

for (let key in user) {
  console.log(`${key} => ${user[key]}`);
}

let user2 = user;

user2.fullName = 'Petia';
user2.age = 43;

console.log(user2);
console.log(user);

console.log(user2 === user);

const car1 = {model: 'BMW'};
const car2 = {model: 'BMW'};
const car3 = {model: 'Audi'};

let compareObj = (obj1, obj2) => {
  let isEqual = true;

  for (let key in obj1) {
    isEqual = (key in obj2) && obj1[key] === obj2[key];
    if (!isEqual) {
      return false;
    }
  }
  return isEqual;
};

console.log(compareObj(car1, car2));
console.log(compareObj(car1, car3));

const obj1 = {
  a: 1,
  b: 2,
  c: 5,
};

const obj2 = {
  c: 3,
  d: 4
};

const obj3 = Object.assign({}, obj2);

console.log(obj3);

console.log(obj3 === obj2);











