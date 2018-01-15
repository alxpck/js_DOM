const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

console.log(input.type);
console.log(input.className);
console.log(input.id);

// you can also change the type of an HTML Element
// input.type = 'checkbox';

p.title = 'List description';

button.addEventListener('click', () => {
  p.innerHTML = `${input.value}:`;
  p.title = `${input.value}`;
});
