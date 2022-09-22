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
