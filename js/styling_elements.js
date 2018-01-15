const toggleList = document.querySelector('button#toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

// console.log(p.style);

/*
the style property of an HTML element only applies to the inline styles of the element, not to any css rules that might be applied by a stylesheet.

For this reason, the style property is usually used as a "setter" and not a "getter" because it won't be able to access the styles applied by a css stylesheet.
*/

p.style.color = 'darkblue';
p.style.backgroundColor = 'lightblue';

// A common use of the style property is to display and hide an HTML element from the page.
//
// toggleList.addEventListener('click', () => {
//   if (listDiv.style.opacity == 0) {
//     listDiv.style.opacity = 1;
//   } else {
//     listDiv.style.opacity = 0;
//   }
// });

// My problem above is that I was assigning (single =) in my if statement not evaluating equivalence (double == or triple ===)

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'block'
    toggleList.innerHTML = 'Hide List';
  } else {
    listDiv.style.display = 'none';
    toggleList.innerHTML = 'Show List';
  }
});

button.addEventListener('click', () => {
  p.innerHTML = `${input.value}:`;
});
