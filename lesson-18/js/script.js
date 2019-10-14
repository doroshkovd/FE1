'use strict';
// Forms vars
let guessField = document.querySelector('#guess-field');
let guessSubmit = document.querySelector('.guess-submit');

// UI vars
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.last-result');
let lowOrHi = document.querySelector('.low-or-hi');
let resultParas = document.querySelector('.result-paras');

let rand = getRandom();
let userInput = null;
let inputsArr = [];
let isLow = null;
let turns = 0;

console.log(rand);

guessSubmit.addEventListener('click', submitHandler);

function submitHandler() {
    turns++;
    userInput = +guessField.value;
    guessField.value = '';
    compareNumbers();
}

function compareNumbers() {
    if (rand === userInput) {
        lastResult.innerHTML = 'Success!!!';
        lastResult.style.backgroundColor = '#00ff00';
        addResetBtn();
        return;
    }

    if (rand > userInput) {
        isLow = true;
        lowOrHi.innerHTML = 'Low';
    } else {
        isLow = false;
        lowOrHi.innerHTML = 'High';
    }

    inputsArr.push(userInput);
    guesses.innerHTML = inputsArr.join(' ');
    lastResult.innerHTML = 'Wrong!!!';
    lastResult.style.backgroundColor = '#ff0000';
    if (turns === 10) {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        addResetBtn();
        alert('10 turns were done!')
    }

}

function getRandom() {
    return Math.floor(Math.random()*100) + 1;
}

function addResetBtn() {
    let el = document.createElement('button');
    el.innerHTML = 'Reset game';
    resultParas.appendChild(el);
    el.addEventListener('click', function(){
        el.remove();
        resetGame();
    });
}

function resetGame() {
    // clear UI
    guesses.innerHTML = '';
    lastResult.innerHTML = '';
    lowOrHi.innerHTML = '';
    rand = getRandom();
    userInput = null;
    inputsArr = [];
    isLow = null;
    lastResult.style.backgroundColor = '#fff';
    console.log(rand);
    guessField.disabled = false;
    guessSubmit.disabled = false;
}


