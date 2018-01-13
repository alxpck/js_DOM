// document.getElementsByTagName()
const myParagraph = document.getElementsByTagName('p');
// returns a collection of elements (an array)
console.log(myParagraph.length);

// const myHeading = document.getElementsByTagName('h1');
// const myButton = document.getElementsByTagName('button');
// const myTextInput = document.getElementsByTagName('input');
//
// myButton[0].addEventListener('click', () => {
//   myHeading[0].style.color = myTextInput.value;
// });


const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementsByTagName('button')[0];
const myTextInput = document.getElementsByTagName('input')[0];

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});
