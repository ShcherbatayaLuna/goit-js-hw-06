const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const containerEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const array = [];

  for (let i = 0; i < amount; i += 1) {
    const boxNew = document.createElement('div');
    boxNew.style.width = 30 + 10 * i + 'px';
    boxNew.style.height = 30 + 10 * i + 'px';
    boxNew.style.backgroundColor = getRandomHexColor();

    array.push(boxNew);
  }
  return array;
}

createBtn.addEventListener('click', () => {
  containerEl.append(...createBoxes(inputEl.value));
});

destroyBtn.addEventListener('click', () => {
  containerEl.innerHTML = '';
});
