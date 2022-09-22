const inputEl = document.querySelector('input');

const symbolsEl = document.querySelector('input[data-length="6"]');

const lengthStr = Number(symbolsEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.target.value.length;
  if (inputLength === lengthStr) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
  if (inputLength !== lengthStr) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
