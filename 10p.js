//Date : 4 jan 2025   Topic :- All function.

//1.Traditional functions

// function helloS(name) {
//     console.log(`Good morning ${name}:)`);
// }
// //call the functions
// helloS('ConnectoShivam');

//2. Anonmyous functions

// const greet = function (name) {
// return `Hello, ${name}!`;
// };
// console.log(greet("Bob")); // Output: Hello, Bob!


//3. Arrow functions

// const result = (name) => {
//     return `Hello ${name}`;
// }
// console.log(result('Shivam'))

//4. IIFE(Immediately invoked functions expressions)

// (function () {
//     console.log('This is run immediately.')
// })();

//5.Constructor functions.

// function Person(name, place) {
//     this.name = name;
//     this.place = place;
// }
// const person1 = new Person('shivam', 'India');
// const person2 = new Person('sanskriti', 'India');

// console.log(person1);
// console.log(person2);

//6.Generator functions.

//example 1:
// function* count() {
//     yield 2;
//     yield 4;
//     yield 6;
//     yield 8;
//     yield 10;
// }

// const even = count();

// for (const v of even) {
//     console.log(v);
// }

//example 2:- 
// function* generatorFunction() {
//     yield 'first';
//     yield 'second';
//     yield 'Third';
// }

// const gen = generatorFunction();
// console.log(gen.next().value);
// console.log(gen.next().value);

//7. async functions 

//----> we disscuss the letter.

//8. High order functions (HOF)
//Definations:- A higher-order function takes another function as an argument or returns a function.

function highOrderFunctions(callback) {
    //Do some work here
    console.log(`Hi shivam:)`);
    //call the callback function
    callback();
}

//callback functions
function callbackFunction() {
    console.log(`call the callback function.`)
}

// call the main functions(highOrderFunctions)
highOrderFunctions(callbackFunction);