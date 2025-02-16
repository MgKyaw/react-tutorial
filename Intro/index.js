// /**
//  * 
//  * @param {*} text 
//  * @returns 
//  */
// function sayLouder(text) {
//     return text.toUpperCase();
// }

// // sample usage (do not modify)
// console.log(sayLouder("It works"))
// console.log(sayLouder("how are you?"));


// Array
/**
 * @param {number[]} numbers
 */
function getPositiveNumbers(numbers) {
    console.log(numbers);
    return numbers.filter(number => number > 0);
}

// sample usage (do not modify)
console.log(getPositiveNumbers([10, -5, 2, -4]));