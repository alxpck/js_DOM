/*
MDN page for addEventListener()
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/

const capitalize = string => string[0].toUpperCase() + string.slice(1);
const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++) {
  let li = listItems[i];
  li.addEventListener('mouseover', () => {
    li.innerHTML = capitalize(li.textContent);
  });
  li.addEventListener('mouseout', () => {
    li.innerHTML = li.textContent.toLowerCase();
  });
}
