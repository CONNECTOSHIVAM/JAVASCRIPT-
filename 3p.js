// Date:- 30 dec 2024     Topic :- Functions

// function addNumber() {

//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(`Addition is :- ${sum}`);
// }

// addNumber(1, 2, 3);
// addNumber(8, 9);

// parameter with the functions.

//function decelarations.
function addName(secondName) {
    const firstName = 'sanskriti';
    const fullName = firstName + secondName;
    return fullName;
}

const name = addName(' shivam');
console.log(name);
console.log(typeof (name));