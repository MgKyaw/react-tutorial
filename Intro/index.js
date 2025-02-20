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

// // Import react
// import React from "react";
// import {createRoot} from "react-dom/client";

// function getReactVersion() {
//     return React.version;
// }

// // sample usage (do not modify)
// console.log(getReactVersion());

// function createCard() {
//     const element = document.createElement("div");
//     element.className = "card";
//     return element;
// }

// // sample usage (do not modify)
// console.log(createCard());

// function createDivElement() {
//     const div = React.createElement("div", {}, "Hello World!");
//     return div;
// }

// // sample usage (do not modify)
// console.log(createDivElement());

// function createTitle() {
//     const title = React.createElement("h1", { "className": "hero-title" }, "Welcome to our supermarket");

//     return title;
// }

// // sample usage (do not modify)
// console.log(createTitle());

// const root = document.querySelector("#react-root");
// const element = React.createElement("p", {}, "Hello World");
// createRoot(root).render(element);

// const root = document.querySelector("#react-root");
// const element = React.createElement("h1", {}, "Online Supermarket");
// createRoot(root).render(element);

// const root = document.querySelector("#react-root");
// const element = React.createElement("h1", { "className" : "title" }, "Online Supermarket");
// createRoot(root).render(element);

// const root = document.querySelector("#root");
// createRoot(root).render(<h1>Hello World</h1>);

// const root = document.querySelector("#react-root");
// createRoot(root).render(<p>My first JSX</p>);

// import {createRoot} from "react-dom/client";

// const root = document.querySelector("#react-root");
// createRoot(root).render(<p id="promo" className="selected">Hello World</p>);

// function getTagline() {
//     return <h2 className="subtitle">Grocery shopping simplified.</h2>;
// }

// // sample usage (do not modify)
// console.log(getTagline());

// /**
//  * @param {boolean} is_loggedin
//  */
// function getLoginStatus(is_loggedin) {
//     if(is_loggedin)
//         return <p>You are logged in</p>;
//     else
//         return <a href="/login">Login</a>;
// }

// // sample usage (do not modify)
// console.log(getLoginStatus(true));
// console.log(getLoginStatus(false));

// function getNavbar(user) {
//     return <div>Logged in as {user.name}. Log out</div>;
// }

// // sample usage (do not modify)
// const element = getNavbar({
//     name: "Sam",
//     age: 34
// });
// console.log(element);

// function getNotifications(notifications) {
//     return <p>You have {notifications.length} new notifications</p>;
// }

// // sample usage (do not modify)
// const notifications = [{
//     id: 1,
//     text: "Your order has been delivered"
// }, {
//     id: 2,
//     text: "Your coupon code has expired"
// }];
// const element = getNotifications(notifications);
// console.log(element);

// function getNavbar(user) {
//     return <div>Logged in as {user.firstName} {user.lastName}. Log out</div>;
// }

// // sample usage (do not modify)
// const element = getNavbar({
//     firstName: "Sam",
//     lastName: "Dung",
//     age: 27
// });
// console.log(element);

// function getPaymentButton(user) {    
//     const className = user.is_loggedin ? "clickable": "disabled";
//     return <button className={className}>Pay</button>;
// }

// // sample usage (do not modify)
// const user = {
//     id: 1,
//     is_loggedin: true
// }
// console.log(getPaymentButton(user));

function getPaymentMethod(name) {

}

// sample usage (do not modify)
console.log(getPaymentMethod("Card"));
console.log(getPaymentMethod("Paypal"));
