// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість
// категорій в ul#categories, тобто елементів li.item.

// 2. Для кожного элемента li.item у спиcку
// ul#categories, знайде і виведе в консоль
// текст заголовку елемента (тегу <h2>) і кількість
// елементів в категорії (усіх <li>, вкладених в нього).

const listEl = document.querySelector('#categories');

const listItems = listEl.children;

const mainListItemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', mainListItemsEl.length);

for (let i = 0; i < mainListItemsEl.length; i += 1) {
  const listTitleEl = listItems[i].firstElementChild;
  console.log('Category:', listTitleEl.textContent);

  const subListEl = listItems[i].lastElementChild;

  const subListItemsEl = subListEl.children;
  console.log('Elements:', subListItemsEl.length);
}
