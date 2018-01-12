// alert pop-up
// alert(`I made the browser message me`);

// log the current url
console.log(location.href);

/* Where did alert and location come from?

These variables are part of JavaScript's global environment. They are actually properties of a single global object, that in browsers is called "window."

*/

// log the window object
console.log(window);

/* These are all the properties in window and all of the controls that the browser gives me to work with. */

const heading = document.getElementById('myHeading');

heading.style.color = 'purple';
heading.style.color = 'red';
heading.style.backgroundColor = 'yellow';
