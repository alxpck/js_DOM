// querySelectorAll will return a collection of all the items
const myList = document.querySelectorAll('li');

console.log(myList);

// querySelector will return the first element of a type
const anotherList = document.querySelector('li');

console.log(anotherList);

// but querySelector will select ids, classes, or types
const myHeading = document.querySelector('#myHeading');
console.log(myHeading);

const errorList = document.querySelectorAll('.error-not-purple');
console.log(errorList);

// NOTE: querySelectorAll returns a NodeList

// I'm not sure why we need the square brackets but we do
const myTitle = document.querySelector('[title=label]');
console.log(myTitle);


// Zebra stripe the list
const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < myList.length; i++) {
  evens[i].style.backgroundColor = 'lightgray';
}
