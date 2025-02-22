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

// function getPaymentMethod(name) {
//     const firstClass = "payment-method";
//     const secondClass = `option-${name.toLowerCase()}`;

//     return <li className={`${firstClass} ${secondClass}`}>{name}</li>;
// }

// // sample usage (do not modify)
// console.log(getPaymentMethod("Card"));
// console.log(getPaymentMethod("Paypal"));

// function getPaymentMethods() {
//     return <select className="payment-methods">
//         <option className="payment-method">Card</option>
//         <option className="payment-method">Paypal</option>
//         <option className="payment-method">Cash on delivery</option>
//     </select>;
// }

// // sample usage (do not modify)
// console.log(getPaymentMethods());

// function getDropdownMenu() {
//     return <ul id="dropdown-menu" className="dropdown">
//         <li>Profile</li>
//         <li>Orders</li>
//         <li className="separator"></li>
//         <li>Logout</li>
//     </ul>;
// }

// // sample usage (do not modify)
// console.log(getDropdownMenu());

// function getUserAvatar(path) {
//     return <img src={path} />;
// }

// // sample usage (do not modify)
// const url = "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
// console.log(getUserAvatar(url));

// function getFooter() {
//     return <>
//         <h3>Your online supermarket</h3>
//         <ul>
//             <li>Contact</li>
//             <li>Press</li>
//             <li>About</li>
//         </ul>
//         <p>All rights reserved @copy;</p>
//     </>;
// }

// // sample usage (do not modify)
// console.log(getFooter());

// import {createRoot} from "react-dom/client";

// function Hero() {
//     return (
//         <>
//             <h1>Welcome to our supermarket</h1>
//             <p>Start shopping.</p>
//         </>
//     );
// }

// // do not modify
// createRoot(document.querySelector("#react-root")).render(<Hero></Hero>);

// import React from "react";
// import {createRoot} from "react-dom/client";

// // do not modify this function
// function Navbar() {
//     return (
//         <>
//             <h3>Supermarket</h3>
//             <p>Start shopping</p>
//         </>
//     );
// }

// const root = document.querySelector("#react-root");

// // TODO:
// createRoot(root).render(React.createElement(Navbar, {}));

// import {createRoot} from "react-dom/client";
// import Hero from "./Hero.js";

// const root = document.querySelector("#react-root");
// createRoot(root).render(<Hero></Hero>);

// import {createRoot} from "react-dom/client";
// import Button from "./Button.js";
// import Link from "./Link.js";

// function App() {
//     return (
//         <>
//             <Button></Button>
//             <Button></Button>
//             <Link></Link>
//         </>
//     );
// }

// // Sample usage (do not modify)
// createRoot(document.querySelector("#react-root")).render(<App />);

// import {createRoot} from "react-dom/client";

// function ShoppingCart(props) {
//     return <div>{props.count} items in your cart</div>;
// }

// const root = document.querySelector("#react-root");
// createRoot(root).render(<ShoppingCart count="5" />);

// import {createRoot} from "react-dom/client";

// function Navbar(props) {
//     return (
//         <>
//             <div>Welcome {props.user.first_name} {props.user.last_name}</div>
//             <p>You've got {props.notifications.length} notifications</p>
//         </>
//     );
// }

// let notifications = [{
//     id: 1,
//     text: "Order delivered"
// }, {
//     id: 2,
//     text: "Order received"
// }];

// const user = {
//     first_name: "Sam",
//     last_name: "Wolf"
// };

// const root = document.querySelector("#react-root");
// createRoot(root).render(<Navbar notifications={notifications} user={user} />);

import {createRoot} from "react-dom/client";

function Button() {
    return <button>Text here</button>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<Button size="small" />);

