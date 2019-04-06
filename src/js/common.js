window.onload = function () {

  const cardEl = document.querySelector('.card');
  const jokeEl = document.querySelector('#joke');
  const btnEl = document.querySelector('.card .btn');

  btnEl.addEventListener('click', function () {
    const newJokePromise = getRendomJoke();
    cardEl.classList.toggle('hide');

    setTimeout(() => {
      newJokePromise
        .then(joke => jokeEl.textContent = joke)
        .catch(() => jokeEl.textContent = 'Chuck is sleeping, try next time...');

      cardEl.classList.toggle('hide');

    }, 600);
  });
}

function getRendomJoke() {
  const jokePromise = new Promise(function (resolve, reject) {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => resolve(data.value))
      .catch(reject);
  });

  return jokePromise;
}