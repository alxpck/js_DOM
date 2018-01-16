addInput = document.querySelector('input.addItem');
addButton = document.querySelector('button.addItem');

addButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = addInput.value;
  ul.appendChild(li);
  addInput.value = '';
});
