// select the element
const myHeading = document.getElementById('myHeading');

// listen for an event
myHeading.addEventListener('click', () => {
  // when the event happens manipulate the element
  myHeading.style.color = 'red';
});
