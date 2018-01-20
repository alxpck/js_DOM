/*
Functions are first class citizens in JavaScript.
Functions can be treated like any other datatype: strings, int, floats, objects.

This means they can be passed as arguments into functions.
This unlocks one of JavaScript's most powerful features.
Passing a function as an argument allows us to control when the function is called.
*/

const say = something => console.log(something);

const exec = (func, arg) => func(arg);

// you can pass in a function using the function's name
exec(say, 'hello');

// you can also just pass an anonymous function directly into another fuction
exec((something) => {
  console.log(something);
}, 'Greetings everyone');

// WHY?
// Why is it useful to pass a function into another function?

// Use window.setTimeout to delay executing the function
window.setTimeout((something) => {
  alert(something);
}, 3000, 'Huzzah! Huzzah!');


// Placing parenthesis after a function when using window.setTimeout tells JavaScript to call that function immediately. 
