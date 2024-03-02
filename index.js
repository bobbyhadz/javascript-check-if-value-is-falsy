// EXAMPLE 1 - Check if a Value is Falsy in JavaScript

const myVar = 0;

if (!myVar) {
  console.log('✅ myVar is falsy');
} else {
  console.log('⛔️ myVar is truthy');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Empty arrays and empty objects are truthy values

// if (![]) {
//   console.log("⛔️ This doesn't run");
// } else {
//   console.log('✅ This runs');
// }

// if (!{}) {
//   console.log("⛔️ This doesn't run");
// } else {
//   console.log('✅ This runs');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if multiple values are falsy

// const value1 = false;
// const value2 = undefined;
// const value3 = null;

// const allFalsy = [value1, value2, value3].every(
//   element => !element,
// );

// console.log(allFalsy); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking if an array or an object contains elements or key-value pairs

// if (['a'].length > 0) {
//   // 👉️ array is not empty
// }

// if (Object.keys({a: 'b'}).length > 0) {
//   // 👉️ object is not empty
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if Falsy except Zero using JavaScript

// const value = 0;

// if (value || value === 0) {
//   // 👇️ this runs
//   console.log('✅ value is truthy or 0');
// } else {
//   console.log('⛔️ value is falsy except 0');
// }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if a Value is Truthy in JavaScript

// const myVar = 'test';

// if (myVar) {
//   console.log('✅ the value is truthy');
// } else {
//   console.log('⛔️ the value is falsy');
// }

// ------------------------------------------------------------------

// // EXAMPLE 7 - Examples of truthy values

// if ([]) {
//   console.log('✅ This runs');
// }

// if ({}) {
//   console.log('✅ This runs');
// }

// if (true) {
//   console.log('✅ This runs');
// }

// if ('test') {
//   console.log('✅ This runs');
// }

// ------------------------------------------------------------------

// // EXAMPLE 8 - Checking if an array or an object contains elements

// if ([1, 2, 3].length > 0) {
//   // 👇️ this runs
//   console.log('The array is not empty');
// }

// if (Object.keys({name: 'alice'}).length > 0) {
//   // 👇️ this runs
//   console.log('The object is not empty');
// }
