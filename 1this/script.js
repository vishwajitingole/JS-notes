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