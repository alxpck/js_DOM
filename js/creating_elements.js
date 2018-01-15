const addInput = document.querySelector('input.addItem');
const addButton = document.querySelector('button.addItem');

addButton.addEventListener('click', () => {
  // document.createElement(`${addInput.value}`);
  let li = document.createElement('li');
  li.innerHTML = `${addInput.value}`;
});
