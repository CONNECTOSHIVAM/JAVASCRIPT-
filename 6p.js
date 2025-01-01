// Date:- 1 january 2025   Topic:- Conditional statement (Logic building).

//Question 1:- print the odd number between 1 to 15.

// let n = 15;

// for (let i = 1; i <= 15; i++) {
//     if (i % 2 != 0) {
//         console.log(`odd numbers:-${i}`);
//     }
// }

// METHOD-2
// for (let i = 1; i < 15; i += 2) {
//     console.log(`odd number: ${i}`);
// }

//Question 2:- print the even number.

// for (let i = 2; i < 15; i += 2) {
//     console.log(`even number:- ${i}`);
// }

//Question 3:- print the multiplication table of 5.

// let num = 5;
// console.log(`TABLE OF ${num}:`)
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }

//Question 4:- Write a JS program to delete all occurrences of element ‘num’ in a given array.

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr)

//Question 5:- Write a JS program to find the no of digits in a number.
// Logic :
// console.log(Math.floor(28715.2)); // digit - 0
// console.log(Math.floor(2871.5)); // digit - 1
// console.log(Math.floor(2871)); // digit - 2
// console.log(Math.floor(287.1)); // digit - 3
// console.log(Math.floor(28.7)); // digit - 4
// console.log(Math.floor(2.8)); // digit - 5
// console.log(Math.floor(2))  // digit - 6

// let number = 287152;
// let count = 0;
// let copy = number;

// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy / 10);
// }
// console.log(`count is ${count}`);


//Question 6: . Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

// let number = 287152;
// let sum = 0;
// let copy = number;

// while (copy > 0) {

//     r = copy % 10;
//     sum += r;
//     copy = Math.floor(copy / 10);
// }
// console.log(sum);

//Question 7:- Find the largest number in an arrays.

// let arr1 = [12, 67, 98, 2, 89];
// let largest = 0;

// for (let i = 0; i < arr1.length; i++) {
//     if (largest < arr1[i]) {
//         largest = arr1[i];
//     }
// }
// console.log(`Largest number in this arrya List:- ${largest}`);


//Question 8:- Find the factorial of n number.

let factNum = 7;
let factorial = 1;

for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log(`Factorial is entered number:- ${factorial}`);

