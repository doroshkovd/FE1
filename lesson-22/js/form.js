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
