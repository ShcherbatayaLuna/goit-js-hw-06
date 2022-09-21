// Напиши скрипт, який змінює кольори фону
// елемента < body > через інлайн - стиль по
// кліку на button.change - color і виводить значення
// кольору в span.color.

// Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.

const bodyEl = document.querySelector('.widget');
const nameColor = document.querySelector('.color');

bodyEl.addEventListener('click', event => {
  nameColor.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = nameColor.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
