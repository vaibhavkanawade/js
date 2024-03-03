// #fullstackdeveloper
//  #DSA  ⚡️DSA🚀

//  #projectbaseLearn #Connect #LearnInPublic

// #fullstackdeveloper
// #javascript ⚡️javascript🚀
// I am Learn In JavaScript Mean concept Hoisting &How Hoisting work?
// @MozDevNet
// #projectbaseLearn #Connect #LearnInPublic











//roadMap of fullStack developer
/*
Foundation
Foundation Javascript, async nature of JS
Node.js and its runtime=
Databases (NoSQL/SQL)
Mongo and Postgres deep dive
Typescript beginner to advance
Backend
Backend communication protocols
Express basic to advance
ORMs
Middlewares, routes, status codes, global catches
Zod
MonoRepos, turborepo
Serverless Backends
OpenAPI Spec
Autogenerated clients
Authentication using external libraries
Scaling Node.js, performance benchmarks
Deploying npm packages


Frontend

Reconcilers and Frontend frameworks
React beginner to advance
Internals of state, Context API
State management using recoil
CSS you need to know of, Flexbox, basic styling
Frontend UI frameworks, Deep dive into Tailwind
Containerization, Docker
Next.js
Custom hooks
In house auth using next auth







*/




//what is javascipt
//javascipt is high level interpreted programming language
//Prilimary use for fronted development

//what is high level
//high level means easy to understands and deals with loop and function

//what is interpreted
//interpreted means not comiple before it can run


//what are the data types in javascript?
//primitive datatype
//1)string 2)symbol 3)null 4)number 5)undefined 6)boolean
//non-primitive
//object

// let str = "Hello javascript";
// console.log(typeof str);
// //op:string

// let num = 5;
// console.log(typeof num);

// let a = 2;
// let b = 3;
// console.log(typeof (a == b)); // returns false
// let x; // value of x is undefined
// let y = undefined; // we can also set the value of a variable as undefined
// console.log(typeof (x, y));
// let z = null;
// console.log(typeof z);
// let symbol1 = Symbol('symbol');
// console.log(typeof symbol1);
// let obj1 = {
//     x: 43,
//     y: "Hello world!",
//     z: function () {
//         return this.x;
//     }
// }
// console.log(typeof obj1);



// var word ="hello";
// let letter="A";
// const num = 12;

//what is diffence between let var and const?
//1)let and const are block scoped while var is function scope
//2)hoisting not possible in let and const but in var hoisting is possible
//3)ES6 introduced let and const and var is before ES6 introduced
//4)let and const redecalration not allowed but var redecalation is allowed






//what is Hoisting in javascipt?
//Hoisting is javascipt behavior where the variable and function declartion are moved to the top of their  containing scope during the compilation phase.

//what is closure in javascipt?
//closure are the function that have to access the variable from function from the another function scope is called as closure

// function outerFunction() {
//     let variable1 = "outer function ";
//     function inner() {
//         console.log(variable1);

//     }
//     return inner;
// }

// let closure = outerFunction();
// closure();


//what is callback
//callback are the function passed as an argument to the another function is called as callback function

// function hello() {
//     console.log("hello world");
// }
// setTimeout(hello, 2000);


// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sum) {
//     sum(a, b);
// }

// calculator(1, 2, sum);


//what is callback Hell
//nested callback is called callback hell
//Que : print 1 2 3 after 2 sec
// function hell(data, nextData) {
//     setTimeout(() => {
//         console.log("data", data);
//         if (nextData) {
//             nextData();
//         }
//     }, 2000);

// }
// hell(1, () => {
//     hell(2, () => {
//         hell(3);
//     });
// });



//what is this keyword in javascipt?
//this refer to the object on which method is being invoked or the object that is currently executing the function


//what is diffence between == and === in javascipt?
//== is also equality oprator but does not check datatypes only check values or equality
//=== it is strict equality oprator but check datatypes as well as values

//what is event delegation in javascipt?
//event delegation is technique where a single event listener is attached to a comman anestor rather than the individual element. It utilized event bubbleing to manage events efficiently

//what is promises in javascipt?
//A promises is an object reprsenting the eventual compilation or failure of an asychronous opration
//it allows handling asychronous oprations more effectively than using callback

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("I am Promise to You");
//         resolve("sucess");
//         // reject("error");
//     }, 2000);
// })
// promise.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })

//what is Arrow function in javascipt?
//Arrow function are concious way to write a function in javascript
//Arrow function is ES6 introduced
//Arrow function syntax is easy
//does not bind their own this value

//what is higher order function?
//Higher order function are the function passed as an argument to another function and return function

//what is event loop in javasript?
//It continously checks the message queue new events to process

//what is Anonymous function ?
//Anonymous function is that type of function that has no name or we can say which is without any name

// let x = function () {
//     console.log("It is anonymous function ");
// };
// x();


//what is JSON.stringify()?
//JSON.stringify() static method converts a javascipt value to JSON string value


//what is BOM?
//BOM stand for Browser object model.
//It allows to intract with the browser.
//A Browser initial object is window As a result you may call all of the windows functions directly or by refering the window.
//the document history screen navigator location and other attribute are available in the window object



//slice = create a new array in javascipt
//splice = method does not create a new array

//Object.values Return only value in object into the array

//javascript is single threaded language
//javascipt is a single threaded language because while running code on a single thread it can be really easy to implement as we don't have to deal with the complicated scenarios that arise in the multi threaded environment like a deadlock since javascipt is single threaded language it is sychronous in nature .


//what is variable in javascipt
//A variable in javascript is a named storage for data they are like containers that hold information Variables can store numbers,string,object and other

//Variables are conatainers for storing information


//what is function in javascipt
//A function in javascript is a block of code designed to perform a particular task.
//A javascipt function is executed when something invoked it

//A set of statements that perform a task or calcualates a value.

//what is difference between parameter and arguments in javscipt
//A paramenter is one of the Variables in function And when a method is called the arguments are the data you pass into the method paramters


//why do we need DOM in javascript
//we can access and manipulate tags,IDs,classes ,Attributes or Elements of html using commands or methods provied by the document object



//what is use of dom in javascript
//The Documents Object Model is Programming interface for web documents . it reprsents the page so that programs can change the document structure ,style,and content


//async-await
//async function always returns promise 
//async function myFunction(){
//}
//await pauses the execution of its surrounding async function until the promise is settled

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is comming...");
            resolve(200);
        });
    });
}

(async function getData() {
    await api();
})();


//IIFE : Immediately Invoked function Expression IIFE is a function that is called Immediately as soon as it is as it is defined


