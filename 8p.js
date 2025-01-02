//Date:- 2 jan 2024      Topic:- Functions (Build Logic through the questions.) 

//Question 1:- Create a functions to roll a dice & always display the value of dice(1to6).

// function rollDice() {
//     let value = Math.floor(Math.random() * 6) + 1;
//     console.log(value);
// }
// rollDice();

//Question 2:- Create a funtion return the sum 1 to n.

// function sum(n) {
//     let sumBox = 0;
//     for (let i = 1; i <= n; i++) {
//         sumBox += i;
//     }
//     return sumBox;
// }
// //Call the functions.
// console.log(sum(7));

//Question 3:- Create a function that returns the concatentions of all string in an arrays.

// let arr = ['Hi', ' ,', ' I', ' want', ' to', ' connect', ' with', ' ConnectoShivam'];


// function conCat() {
//     let newArr = '';
//     for (let i = 0; i < arr.length; i++) {
//         newArr += arr[i];
//     }
//     return newArr;
// }
// //call the functions
// console.log(conCat());`

//Question 4:-  Write a JavaScript function that returns array elements larger than a number.

// let arr = [12, 34, 54, 54, , 75, 98, 77];
// let num = 43;

// function largerArrayNumb() {
//     for (let i = 1; i <= arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }
// largerArrayNumb(arr, num);

//Question 5:- Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”.

// let inputStr = 'Ilovepoetryyyyyy';

// function extractChar() {
//     let newStr = '';
//     for (let i = 0; i < inputStr.length; i++) {
//         let currChar = inputStr[i];
//         if (newStr.indexOf(currChar) == -1) {
//             newStr += currChar;
//         }
//     }
//     console.log(newStr);
// }
// extractChar();

//Question 6:- Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

// let country = ["Australia", "Germany", "United States of America", "India"];

// function longestCont(country) {
//     let charCount = 0;
//     let largestC = '';
//     for (let i = 0; i < country.length; i++) {
//         if (country[i].length > charCount) {
//             charCount = country[i].length;
//             largestC = country[i];
//         }
//     }
//     console.log(largestC);
// }

// longestCont(country);

//Question 7:- Write a JavaScript function to count the number of vowels in a String 
// argument.

// let inputStr = 'I really enjoy my work';

// function vowelCount(inputStr) {
//     let vCount = 0;
//     for (let i = 0; i < inputStr.length; i++) {
//         if (inputStr[i] == 'a' || inputStr[i] == 'e' || inputStr[i] == 'i' || inputStr[i] == 'o' || inputStr[i] == 'u') {
//             vCount++;
//         }
//     }
//     console.log(`Number of vowel inside the String:- ${vCount}`);
// }
// //call the functions
// vowelCount(inputStr);

//Question 8:- Write a JavaScript function to generate a random number within a range 
// (start, end). 

let stratValue = 10;
let endValue = 20;

function randomValue(stratValue, endValue) {
    let y = endValue - stratValue;
    let value = Math.floor(Math.random() * y) + stratValue;
    console.log(value);
}
//call the function
randomValue(stratValue, endValue);