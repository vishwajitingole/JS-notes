//this keyword
// this ki value baar baar badal sakti hai alag alag conditions mein

//Values of this keyword in
//global                           -window
// function                        -window
//method                           -object
//function inside method (es5)     -window
//function inside method (es6)     -object
//constructor function             -new blank object
//event listener                   -element ki value jispar element lga ho

//global scope
// console.log(this);
// O/P:- window

//Function scope
// function abcd() {
//     console.log(this);
// }
// abcd();

// Method Scope :-when a function is defined inside an object
// var obj = {
//     name: function() {
//         console.log(this) //THis will return the entire object back
//         console.log(this.age); //As we are targeting a specified value in the object
//     },
//     age: 23,
//     verified: true
// }
// obj.name();

//function inside method (es5)     -window
// var obj = {
//     name: function() {
//         function fun() { //This will again return a window
//             console.log(this); //As this is referrring to whole window not
//  to any object the age won't be accessible here
//         }
//         fun();
//     },
//     age: 23,
//     verified: true
// }
// obj.name();

//function inside method (es6)     -object
// var obj = {
//     name: function abcd() {
//         const a = () => {
//             console.log(this);
//         }
//         a();
//     },
//     age: 23
// }
// obj.name();

//constructor function             -new blank object
// function add() {
//     console.log(this);
// }
// const ans = new add();

//event listener                   -element ki value jispar element lga ho
// document.querySelector("button").addEventListener("click", function abcd() {
//     console.log(this);
// });
//Click on the button Ctrl + Shift + I

//var let const

//var is functional var
//let and const is block scope variable

// var a=10;
// var a=12;
//We can redecalare var

//let a=10;
//let a=23;
//We cannot redeclare let

// const a=10;
// const a=20;
// We cannot redeclare const

// We reassign let var
// but not const

// let a = 99;
// const b = 90;
// {
//   let a = 20;
//   const b = 200;
//   var c = 30;
//   console.log(a); //20
//   console.log(b); //200
// }
// console.log(a); //99
// console.log(b); //90
// console.log(c); //30

//global scope
//Anything which isn't inside the block

//function scope
//anything is inside the function

//block scope
//anything is inside the block

// Lexical Scope
function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    // Accessing outerVariable from the lexical scope
    console.log(outerVariable);
  }

  innerFunction();
}

outerFunction();

// Closure
function createClosure() {
  const closureVariable = "I am from the closure";

  function innerFunction() {
    // Accessing closureVariable from the closure
    console.log(closureVariable);
  }

  return innerFunction; // Returns a closure
}

const myClosure = createClosure();
myClosure();
