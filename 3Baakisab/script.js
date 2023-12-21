//Constructor function
// function makeHuman(name, age) {
//   this.name = name;
//   this.age = age;
// }
//aisa koi bhi function jismein aap this kaa use kar rhe ho
//aur new kaa use kar rhe ho toh waha ek blank object create hoga
// const human = new makeHuman("Vishwajit", 23);
// console.log(human.name);
// console.log(human.age);

//Blank object return karega
// function abcd() {}
// let a = new abcd();
// console.log(a);

//Here the this keyword will refer to that current empty object
//After referencing to current empty  the . operator will add username
// function xyz() {
//   this.username = "invishwn";
//   var cal = 12 * 3; //Here as we haven't used this keyword
// } //cal won't be added to that new object
// let b = new xyz();
// console.log(b);

// function human(a, b) {
//   this.name = a;
//   this.age = b;
//   this.print = function print() {
//     console.log(this.name);
//     console.log(this.age);
//   };
// }
// human1 = new human("Vishwajit", 23);
// human.prototype.chacha = 12; //This will create
// human1.print();
// console.log(human1.print());
//running human in console
// human {name: 'Vishwajit', age: 23, print: ƒ}
// age: 23
// name: "Vishwajit"
// print: ƒ print()
// [[Prototype]]: Object
// constructor: ƒ human(a, b)
// [[Prototype]]: Object

//Closures
//Ek function jo return karre ek aur function aur use karre koi parent kaa var
// function counter() {
//   var count = 0;
//   return function a() {
//     count++;
//     console.log(count);
//   };
// }
// const fun = counter(); //fun will stored that returned function
// fun();
// fun();
//We write this program to understand the timer function
// function timer() {
//   var a = 0;
//   return setTimeout(function () {
//     console.log(a);
//   }, 4000);
// }
// timer();

//Event deligation:- jab aap event listener se kai saare different elements ke events ko handle karte hai
//We will apply listener by  selecting tag className or id

// var btn = document.querySelector(".container");
// btn.addEventListener("click", () => {
//   console.log("aa");
// });
//Here we have added event listener to a div container
//so if we didn't have an event listener to button it will look out for the parent div
//It will use the event listener for the parent div
//This is known as Event bubbling

var btn = document.querySelector(".container");
btn.addEventListener("click", () => {});
