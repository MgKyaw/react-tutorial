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

// // Array
// /**
//  * @param {number[]} numbers
//  */
// function getPositiveNumbers(numbers) {
//     console.log(numbers);
//     return numbers.filter(number => number > 0);
// }

// // sample usage (do not modify)
// console.log(getPositiveNumbers([10, -5, 2, -4]));

// Array of objects filter
/**
 * @param {object[]} results
 */
function getPassingTests(results) {
    console.log(results);
    return results.filter(result => result.grade >= 10);
}

// sample usage (do not modify)
const data = [{
    id: 1,
    grade: 10
}, {
    id: 2,
    grade: 4
}, {
    id: 3,
    grade: 18
}]
console.log(getPassingTests(data))
