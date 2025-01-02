//Date:- 1 january 2025     Topic:- Object (Build Logic)     Time:- 8:39PM - 9:33PM

// Object is key - value pair collections.
// const students = {
//     name: 'shivam',
//     company: 'sanyam',
//     role: 'Ceo & Founder',
//     allId: [121, 1213, 324, 2, 212, 33, 44, 5, 55, 99, 77]
// }
// console.log(typeof (students));

//Question 1:- Generate a random value between 1 to 100.

// let box = Math.floor(Math.random() * 100) + 1;
// console.log(box);

//Question 2:- Generate a random value between 1 to 5.
// let value = Math.floor(Math.random() * 5) + 1;
// console.log(value);

//Question 3:- Create a program that generates a random number representing a dice roll.

// let value = Math.floor(Math.random() * 6) + 1;
// console.log(value);

//Question 4:- Create an object representing a car that stores the following properties for the
// car: name, model, color.--> Print the car’s name.

// const car = {
//     name: 'BMW',
//     model: 'BMW i7',
//     color: 'Yellow'
// }
// console.log(car.name);

//Question 5:- . Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “Ranchi”.
// Add a new property country and set it to the India. 

const person = {
    name: 'shivam',
    age: 18,
    city: 'Dumka'
}
console.log(person);
//update the object(person) city.
person.city = 'Ranchi';
person.country = 'India'
console.log(`After updating the object:- `);
console.log(person);
