//Date:- 31Dec 2024   

// Topic 1:- Functions chaining 
//--> Functions chaining allow you to perform a serise of actions on an object having call 
// each functions saparately. insted of calling each function one by one , you can connect them 
// together in one line.

// Example:- take one string and remove extra space and covert to uppercase.

// let box = " ConnectoShivam  ";
// console.log(`real input:- ${box}`);
// //use the funtions chaining --> yani all function in one line :)
// let result = box.trim().toUpperCase();
// //print the result
// console.log(result);

// Topic 2:- replace methood

// let msg = 'Iloveshivam';
// let heart = msg.replace('love', 'like');
// console.log(heart);

//Question 1:- For the given start date of an array, change it to final from using methods.
// Start ----> ['january','july','march','august'] 
// Final ----> ['july','june','march','august']

// let months = ['january', 'july', 'march', 'august'];
// //remove the january months form the arryas list.
// months.shift();
// console.log(months);
// // remove the july months form the arryas list.
// months.shift();
// console.log(months);
// //add the july & june months in the array list.
// months.unshift('june');
// months.unshift('july');
// console.log('Final output:- ');
// console.log(months);

//Question 1.1:- Solve the question using splice methods.

// let months = ['january', 'july', 'march', 'august'];
// //using the splice methods.
// months.splice(0, 2, 'july', 'june');
// console.log(months);

//Question 2:- 

let arr = [['x', null, 0], [null, 'x', null], [0, null, 'x']];

console.log(arr)