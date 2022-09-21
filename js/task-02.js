// Напиши скрипт, який для кожного елемента
// масиву ingredients:

// 1. Створить окремий елемент <li>.
// Обов'язково використовуй метод document.createElement().

// 2. Додасть назву інгредієнта як його текстовий вміст.

// 3.Після чого, вставить усі <li> за одну операцію
// у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;

  return itemEl;
});
// console.log(items);

listEl.append(...items);
console.log(listEl);
