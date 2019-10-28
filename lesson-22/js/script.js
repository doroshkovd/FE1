document.addEventListener('DOMContentLoaded', () => {
  const elements = document.getElementsByTagName('li');
  const DEFAULT_TITLE = 'Default image title';

  let collection = Array.from(document.body.children);

// for (let item of collection) {
//   console.log(item);
// }

// console.log(collection);
  let element = collection[3];
// console.log(element);
// console.log(element.nextElementSibling);
// console.log(element.previousElementSibling);
// console.log(element.parentElement);

  let second = document.getElementById('second');
// console.dir(second);

  let icons = document.querySelector('i');
// console.log(icons);

  let iconFont = document.querySelector('.icon-font');

  let row = document.querySelectorAll('#second .container .row')[1];
  let pElements = row.querySelectorAll('p');
// console.log(pElements);
// console.log(pElements[0]);
//
// console.log(second.innerText);
// console.log(second.innerHTML);




  let secondTitle = second.querySelector('h2');


  setTimeout(() => {
    for(let pElement of pElements) {
      pElement.innerHTML += '..';
    }

  }, 3000);

  setInterval(() => {
    secondTitle.style.background  = secondTitle.style.background === 'red' ? '#fff' : 'red';
  }, 1000);

  let logo = document.querySelector('.logo img');

  if (!logo.hasAttribute('title')) {
    logo.setAttribute('title', DEFAULT_TITLE);
  }

  logo.setAttribute('alt', `Sitename.com - ${logo.getAttribute('alt')}`);

  setTimeout(() => {
    logo.removeAttribute('alt');
  }, 5555);

  let mainHeader = document.querySelector('header h1');

  console.log(mainHeader.dataset.header);

  mainHeader.dataset.header = '';
//
// console.log(mainHeader.dataset.header);
//
// let newElement = document.createElement('span');
//
// newElement.innerHTML = 'New span element created bu JS';
// newElement.style.color = '#ff0000';
//
// mainHeader.append(newElement);
//
// setTimeout(() => {
//   newElement.remove();
// }, 6000);

  console.log(mainHeader.parentElement.className);

  let parentClassList = mainHeader.parentElement.classList;

  console.log(parentClassList.contains('nav-pad'));
  console.log(parentClassList.contains('nav-pad1'));
  parentClassList.add('test');
  parentClassList.remove('nav-pad');
  parentClassList.toggle('test3');
});



