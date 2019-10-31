const form = document.getElementById('feedback-form');
const userInput = {};
form.addEventListener('submit', (event) => {
  userInput.firstName = form[0].value;
  userInput.lastName = form[1].value;
  userInput.email = form[2].value;
  userInput.phone = form[3].value;
  userInput.message = form[4].value;
  userInput.isSubscribe = form[5].checked;
  console.log(userInput);
  form.reset();
  addSuccessMsg();
  event.preventDefault();
});

function addSuccessMsg() {
  let el = document.createElement('div');
  el.innerHTML = 'Data was saved. Thank you!';
  el.className = 'alert alert-success';
  form.after(el);
  removeElement(el, 5000);
}

function removeElement(el, timeout = 3000) {
  setTimeout(() => {
    el.remove();
  }, timeout)
}

const toastMessage = document.getElementById('toast-message');

for (let item of document.querySelectorAll('.form-control')) {

  item.addEventListener('focus', ()=> {
    toastMessage.innerHTML = item.dataset.rule;
    toastMessage.style.opacity = '1';
  });

  item.addEventListener('focusout', ()=> {
    toastMessage.style.opacity = '0';
  });
}

const buttonUp = document.getElementById('button-up');
let intervalId;


window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    buttonUp.style.opacity = '0.8';
  } else {
    buttonUp.style.opacity = '0';
  }
});

buttonUp.addEventListener('click', () => {
  let topScroll = window.scrollY;
  let iteration = Math.round(topScroll / 60);
  intervalId = setInterval(() => {
      window.scrollTo(0, topScroll);
      topScroll -= iteration;
      if (topScroll < iteration) {
        window.scrollTo(0, 0);
        clearInterval(intervalId);
      }
  }, 1000 / 60)
});


