const removeButton = document.querySelector('button.removeItem');

removeButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
