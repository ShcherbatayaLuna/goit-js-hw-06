const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', event => {
  console.log(Number(event.target.value));
  const textWidth = Number(event.target.value);
  textEl.style.fontSize = textWidth + 'px';
});
