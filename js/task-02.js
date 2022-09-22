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
