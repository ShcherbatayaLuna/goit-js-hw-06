const bodyEl = document.querySelector('body');
const nameColor = document.querySelector('.color');

bodyEl.addEventListener('click', event => {
  nameColor.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = nameColor.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
