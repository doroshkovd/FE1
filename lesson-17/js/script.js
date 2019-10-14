'use strict';

// define center coord
const gameConfig = {};

let x = 10, y = 20, z = 20;
let $var1 = 'test';
let _var1 = 'test';
let Var1 = 'test';
let var1 = 'test';

const DEFAULT_COLOR = '#fff';
const COMMON_ERROR_MSG = 'Ahtung!!!';
let isError = false;

// var1 = true;

console.log(var1.length);


if (true) {
    var x1 = 20;
    console.log(x1);
}

console.log(DEFAULT_COLOR);

function test1() {
    if (true) {
        var c3 = 'test';
    }
}

isError = true;

console.log(x1);


console.log(`${x}  ${y}`);

// ToDo: Move x in config object
let xCoordinate = 25;

for (let i=1; i < 10; i++) {
    // console.log(i);
}

let age;
console.log(typeof age);
if (isError) {
    console.log(`Error happened: ${COMMON_ERROR_MSG} Please check!!!`);
}

let x5 = {
    y: 5,
    test: 5,
};

x = x5;
console.log(x, x5);

x.y = 7;
console.log(x, x5);




