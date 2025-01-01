// Date:- 1 january 2025   Topic:- String & Array prectice question.

//Question 1:- Write a JavaScript program to get the first n elements of an array.
//  [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

// let arr1 = [1, 4, 3, 6, 4, 2, 5];
// let n = 3;

// let result = arr1.slice(0, n)
// console.log(result)

//Question 2:- Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number]

// let arr2 = [1, 4, 5, 6, 7];
// let n = 4;

// let result = arr2.slice(arr2.length - n);
// console.log(result);

//Question 3:- Write a JavaScript program to check whether a string is blank or not.

// let word = prompt('Enter the string word: ')
// let word = "";

// if (word.length === 0) {
//     console.log(`String is empty!`);
// }
// else {
//     console.log(`You entered the right string word!`)
// }

//Question 4:- Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

let inputStr = 'ConnectoShivam';
let i = '0';

if (inputStr[i] == inputStr[i].toLowerCase()) {
    console.log(`Enter index ${i} characteer in lower case.`);
}
else {
    console.log(`Enter index ${i} characteer are not in lower case.`);
}

// ..............................

//Question 5:-  Write a JavaScript program to strip leading and trailing spaces from a string.

// let input = "   shivam    ";
// //trim the blank spaces.
// console.log(input.trim());

//Question 6:-  Write a JavaScript program to check if an element exists in an array or not.

// let arr3 = ['shivam', 21, 'sanskriti', 7];
// let item = 7;

// if (arr3.indexOf(item) != -1) {
//     console.log(`Entered ${item} exist inside the array List.`);
// }
// else {
//     console.log(`Entered ${item} are not exist inside the array List.`);
// }

