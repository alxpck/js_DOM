const listDiv = document.querySelector('.list');

const capitalize = string => string[0].toUpperCase() + string.slice(1);

listDiv.addEventListener('mouseover', (event) => {
  // how to figure out which child element?
  // Event Object @ MDN: https://developer.mozilla.org/en-US/docs/Web/API/Event
  let target = event.target;
  if (target.tagName.toLowerCase() == 'li') {
    target.innerHTML = capitalize(target.innerHTML);
  }
});

listDiv.addEventListener('mouseout', (event) => {
  let target = event.target;
  if (target.tagName.toLowerCase() == 'li') {
    target.innerHTML = target.innerHTML.toLowerCase();
  }
});


// Add an event on the entire document that tracks any and all clicks on the page and logs the item that was clicked to the console.
document.addEventListener('click', (event) => {
  console.log(event.target);
}); // SUPER COOL!
