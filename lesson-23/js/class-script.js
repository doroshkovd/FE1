const spinner = document.getElementById('spinner');
const results = document.querySelector('#results');
const search = document.querySelector('#search');
let timeoutId;

search.addEventListener('input', () => {

  if (timeoutId) {
      clearTimeout(timeoutId);
    }
  search.value = search.value.trim();
  if(search.value !== '') {
    timeoutId = setTimeout(() => {
      console.log(search.value);
      sendXHR(search.value);
      timeoutId = null;
    }, 1000);
  }


});

function sendXHR(query) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.github.com/search/users?q=${query}`);
  xhr.responseType = 'json';

  xhr.onloadstart = () => {
    spinner.hidden = false;
    results.innerHTML = '';
  };

  xhr.onload = () => {
    spinner.hidden = true;
    if (xhr.status === 200) {
      renderResponse(xhr.response.items);
    } else {
      renderAlert(xhr.response.message, 'danger');
    }
  };

  xhr.send();
}

function renderResponse(res) {
  if (res.length === 0) {
    renderAlert('No results');
  }
  for (let item of res) {
    let template = `
    <div class="col-sm-3">
      <div class="card">
        <img src="${item.avatar_url}" class="card-img-top" alt="${item.login}">
        <div class="card-body">
          <h5 class="card-title">${item.login}</h5>
          <a href="${item.html_url}" target="_blank" class="btn btn-primary">Go to GitHub</a>
        </div>
      </div>
    </div>`;

    results.insertAdjacentHTML('beforeend', template);
  }
}

function renderAlert(message, level = 'warning') {
  results.innerHTML = `
      <div class="col-sm-12 alert alert-${level}">
        ${message}
      </div>
    `;
}


