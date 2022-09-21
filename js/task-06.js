// Напиши скрипт, який під час втрати фокусу
// на інпуті(подія blur), перевіряє його вміст
// щодо правильної кількості введених символів.

// - Яка кількість смиволів повинна бути в інпуті,
// зазначається в його атрибуті data - length.

// - Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна
// кількість - червоним.

// - Для додавання стилів використовуй CSS-класи
// valid і invalid, які ми вже додали у вихідні файли
// завдання.

//  <style>
//       #validation-input {
//         border: 2px solid #bdbdbd;
//       }

//       #validation-input.valid {
//         border-color: #4caf50;
//       }

//       #validation-input.invalid {
//         border-color: #f44336;
//       }
//     </style>

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>; */
}

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
