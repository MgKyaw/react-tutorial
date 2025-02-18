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

// // Array of objects filter
// /**
//  * @param {object[]} results
//  */
// function getPassingTests(results) {
//     console.log(results);
//     return results.filter(result => result.grade >= 10);
// }

// // sample usage (do not modify)
// const data = [{
//     id: 1,
//     grade: 10
// }, {
//     id: 2,
//     grade: 4
// }, {
//     id: 3,
//     grade: 18
// }]
// console.log(getPassingTests(data))

// Import react
import React from "react";
import {createRoot} from "react-dom/client";

function getReactVersion() {
    return React.version;
}

// sample usage (do not modify)
console.log(getReactVersion());

function createCard() {
    const element = document.createElement("div");
    element.className = "card";
    return element;
}

// sample usage (do not modify)
console.log(createCard());

function createDivElement() {
    const div = React.createElement("div", {}, "Hello World!");
    return div;
}

// sample usage (do not modify)
console.log(createDivElement());

function createTitle() {
    const title = React.createElement("h1", { "className": "hero-title" }, "Welcome to our supermarket");

    return title;
}

// sample usage (do not modify)
console.log(createTitle());

// const root = document.querySelector("#react-root");
// const element = React.createElement("p", {}, "Hello World");
// createRoot(root).render(element);

// const root = document.querySelector("#react-root");
// const element = React.createElement("h1", {}, "Online Supermarket");
// createRoot(root).render(element);

// const root = document.querySelector("#react-root");
// const element = React.createElement("h1", { "className" : "title" }, "Online Supermarket");
// createRoot(root).render(element);
