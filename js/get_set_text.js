// textContent and innerHTML

let myHeading = document.querySelector('h1');

// textContent will return the content of the element
console.log(myHeading.textContent);

// This writes the new text content to the webpage
myHeading.textContent = 'my new heading';

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

// use textContent
// button.addEventListener('click', () => {
//   p.textContent = `${input.value}:`;
// });

// innerHTML
button.addEventListener('click', () => {
  p.innerHTML = `${input.value}:`;
});

let ul = document.querySelector('ul');

console.log(ul.innerHTML);

ul.innerHTML = `
  <ul>Red Cabbage</ul>
`;
