Prototype Chaining
It is used to build new types of object based on existing ones.

Array Slice
It returns a new array which is selected last one will be omitted

Array Splice
It adds or removes items from an array and then return the removed item

first class function
When functions are treated as variable

first order function
function which doesn't accept another function as an argument and doesn't return a function as it's return value

higher order function
function which accepts another function as an argument or returns a function as a return value or both

Difference between let and var
var old
function scope
var will be hoisted

let new
let block scope
let will not be hoisted


Coding question


Temporal Dead Zone
Place where variables let and const are declared in a place where they could not be accessed

IIFE
Function which run right after it's declared
function(){

}();

Hoisting
mechanism where variables, function declaration and classes are moved to the top of their scope before code execution.
Remember that JS only hoists declaration not initialisation.

Closures
combination of function and lexical environment
within which that function was declared.
It is an inner function that has access to the outer or enclosing function's variables

Scope in javascript
it determines the accessibility of variables, objects, and functions from different parts of the code.

Cookie
A piece of data that is stored on your computer to be accessed by your browser
Coookies are saved as key/value pairs.




Coding Questions


1) const sum=eval('10*10+5');

2) const obj={1:'a',2:'b',3:'c'};
const set= new Set([1,2,3,4,5]);
obj.hasOwnProperty('1');
obj.hasOwnPropert(1);
set.has('1');
set.has(1);

3)String.prototype.giveLydiaPizza=()=>{
return 'Just give Lydia pizza already'
};
const name="Lydia";
console.log(name.giveLydiaPizza());

4)
const foo=()=>console.log('First');
const bar=()=>setTimeout(()=>console.log('Second'));
const baz=()=>console.log("Third");
bar();
foo();
baz();

5)
const person={name:"Lydia"};
function sayHi(age){
return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,21));
console.log(sayHi.bind(person,21));


Local storage and session storage.
Local storage is the session storage but it persists the data even when the browser is close and reopened where as in session storagedata gets cleared when the page session ends.

Promise.
is an Object which returns a response. it will be one of the possible states
fulfilled, rejected or pending.

Need of promise
used to handle asynchronous operation.
They provide alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

callback function.
It is a. function passed into another function as an argument.
This function is invoked inside the outer function to complete an action.

Hinglish
need of callback function
because js is an event driven language that means instead of waiting for a response js will keep executing while listening for other events.



Coding Questions.

console.log(typeof typeof 1);
datatype of console. :- Object (Everything in js is Object ).


(()=>{
let x,y;
try{
throw new Error();
}
catch(x){
(x=1),(y=2)
console.log(x);
}
console.log(x);
console.log(y);
})();


[
[0,1],
[2,3],
].reduce(acc,cur)=>{
return acc.concat(cur);
},[1,2]
);


Callback hell ?
anti pattern with multiple nested callbacks which makes code hard to read and debug when dealing with async logic.

promise chaining.
process of executing a sequence of asynchronous task one after another using promises is known as Promise chaining.

what is a typeof operator.
what is a undefined property.
what is a null value
what is eval.
What is isNaN. 

const numbers = new Set([1,1,2,3,4]);
console.log(numbers);

const browser=new Set("Firefox");
console.log(browser);


console.log(NaN===NaN);
//False

async function func(){
return 10;
}
console.log(fun());

function delay(){
return new Promise ((resolve)=>setTimeout(resolve,2000));
}

async function delayedLog(item){
await delay();
console.log(item);
}

async function process(array){
array.forEach(async(item)=>{
await delayedLog(item);
});
console.log('Process completed!')
}
process([1,2,3,5]);


window and document difference
Window:
-it is the root level element in any web page
-By default window object is availabel implicitly in the page
-It has methods like alert(), confirm and propertieslike document, location.
Document:
-It is the direct child of the window object.This is also known as Document Object Model(DOM)
-You can access it via window.document or document.
-It provides methods like getElementById, getElementsBytagName,createElement etc


null and undefined

Null:
-It is an assignment value which indicates that variable points to no object.
-Type of null is object
-primitive value that represents the null, empty or existence of reference.
-indicates the absence of a value for a variable
converted to zero(0) while performing primitive operations.

Undefined:
-It is not an assignment value where a variable has been declared but has not yet been assigned a value.
-type of undefined is undefined
-The undefined value is a primitive value used when a variable has not been assigned a value
-indicates absence of variable itself.
-converted to NaN while performing primitive operations.


Global variables
are those that are available through out the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable. 

What are problems with global variables
it may conflict with other variable names of the local and global scope.
As it becomes challenging for the dev to debug and test the code that relies on global variables.


Event bubbling
is a type of event propagation where the event first trigger on the innermost target element and then successively triggers on the ancestors (parent div) of the target element and then successively triggers on the ancestors(parent div's) of the target element in the same nesting hierarchy till it reached the outermost DOM element


Event capturing
is a type of event propagation where the event first captured by the outermost element, and then successively triggers on the descendants(children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.


documentload and DOMContentLoaded events
DOMContentLoaded event is fired when the initial HTML document has been loaded and parsed without waiting for assets(stylesheets,images,subframes) to finish loading.
Whereas the load event is fired when the whole page has loaded, including all dependent resources (stylesheets,images).


Attribute and property. 


Coding Questions


var set = new Set();
set.add("+0").add("-0").add("NaN").add(undefinded).add(NaN);
console.log(set);


const sym1=Symbol('one');
const sym2=Symbol('one');
const sym3=Symbol('two');
console.log(sym1===sym2,sym3===sym4);


let myNumber=100;
let myString='100';
if(!typeof myNumber ==='string'){
console.log('It is not a string');
}
else{
console.log('It is a string!');
}
if(!typeof myString === 'number'){
console.log('It is not a number!');


Same-origin policy.
policy that precents JS from making request across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policythen it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

events
things that happen to the HTML elements
Whenever a user responds to the html pages

preventDefault()
It is used to avoid reloading of the page

use of stop propagation method?
to stop the event form bubbling up the event chain

BOM
BOM allows JS to talk to the browser
It consists of objects navigator, history,screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.


JS called single threaded lang
limitation to interpret the code to run the code parallel.

ECMA SCript


Coding Questions

class Dog{
constructor(name){
this.name=name;
}
};
class Labrador extends Dog{

constructor(name,size){
this.size=size;
}
constructor(name,size){
super(name);
this.size=size;
}
constructor(size){
super(name);
this.size=size
}

constructor(name,size){
this.name=name;
this.size=size
}

};



console.log('running index.js');
import {sum} from'./sum.js';
console.log(sum(1,2));
sum.js
console.log('running index.js');
export const sum=(a,b)=>a+b;


