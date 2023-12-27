Event deligation in js
Event delegation ek JavaScript technique hai jisme ek parent element ke through hi event handling hoti hai, child elements par individually nahi. Isse code efficient hota hai aur new elements add karne mein bhi asaan ho jata hai.
Basic idea yeh hai ki parent element par event listener lagaya jata hai, aur phir event bubble up hota hai jab koi specific child element par event hota hai. Parent element event ko capture karke uska handling karta hai.
// HTML structure
// <ul id="parentList">
// <li>Item 1</li>
// <li>Item 2</li>
// <li>Item 3</li>
// </ul>
// JavaScript code using event delegation
const parentList = document.getElementById('parentList');
parentList.addEventListener('click', function(e) {
if (e.target.tagName === 'LI') {
console.log('Clicked on:', e.target.textContent);
}
});

NULL and UNDEFINED
JavaScript mein null aur undefined do alag-alag concepts hain:

Type Difference:

null aur undefined dono hi primitive data types hain.
null ka type object hai (typeof null return karega "object").
undefined ka type undefined hai (typeof undefined return karega "undefined").
Value:

null: Ek variable ya object property jab specifically kuch value represent nahi karta hai to use null assign kiya jata hai. For example, koi object property jiska value nahi hai ya function jo koi value return nahi kar raha ho.
undefined: Ek variable jab declare kiya jata hai lekin usse koi value assign nahi ki gayi ho, tab uska default value undefined hota hai.
Example:
// undefined variable
var a;
console.log(a); // Output: undefined
console.log(typeof a); // Output: undefined

// null value
var b = null;
console.log(b); // Output: null
console.log(typeof b); // Output: object
Yahan, a variable declare kiya gaya hai lekin usse koi value assign nahi ki gayi, isliye uska value undefined hai. b variable ko specifically null assign kiya gaya hai.

CLOSURE

Closure ek advanced concept hai JavaScript mein, jo tab hota hai jab ek function dusre function ke andar define hota hai aur inner function bahar ke function ke variables aur parameters ko access karta hai. Closure ka use mainly data encapsulation aur private variables banane ke liye hota hai.

function outerFunction(outerVariable) {
// Inner function, closure banata hai
function innerFunction(innerVariable) {
console.log(outerVariable + innerVariable);
}

    // Inner function ko return kiya jata hai
    return innerFunction;

}

// Outer function ko call kiya
var closureExample = outerFunction(10);

// Inner function ko call kiya, closure ke through outerVariable ka access milta hai
closureExample(5); // Output: 15

Yahan, innerFunction ko outerFunction ke andar define kiya gaya hai, aur innerFunction outer function ke variables (outerVariable) ko access kar sakta hai, jise hum closure kehte hain. closureExample variable ko outer function se return ki gayi inner function ko assign kiya gaya hai, aur jab hum closureExample(5) ko call karte hain, toh outerVariable ke value (10) aur innerVariable ke value (5) ka sum 15 output hota hai.

THIS VALUE IN JS

this JavaScript mein ek keyword hai jo function ke context ke basis par value receive karta hai. Yeh dynamic taur par runtime mein decide hota hai. Kuch scenarios hain:

Global Context:

Global context mein this global object ko refer karta hai. Browser mein, yeh aam taur par window hota hai.

console.log(this); // Global object ko point karega (e.g., window in a browser)
Function Context:

Ek regular function ke andar, this global object ko refer karta hai. Strict mode mein ("use strict";), this undefined hota hai.

function exampleFunction() {
console.log(this);
}

exampleFunction(); // Global object ya undefined (strict mode mein)
Object Method:

Object ke method ke andar, this object ko refer karta hai jispar method call hua hai.

var obj = {
exampleMethod: function() {
console.log(this);
}
};

obj.exampleMethod(); // Object obj ko point karega
Constructor Function:

Constructor function ke andar (new ke sath use kiya gaya), this naye instance ko point karega.

function ExampleConstructor() {
this.property = "Value";
}

var exampleInstance = new ExampleConstructor();
console.log(exampleInstance.property); // Output: "Value"
Event Handlers:

Event handler function mein, this aam taur par event ko trigger karne wale DOM element ko point karega.

document.getElementById("myButton").addEventListener("click", function() {
console.log(this); // Button element ko point karega
});
Arrow Functions:

Arrow functions apna khud ka this context nahi rakhti hain, instead, woh enclosing scope se this inherit karte hain.

var arrowFunction = () => {
console.log(this);
};

arrowFunction(); // Surrounding context se this inherit karega
this ki value samajhna JavaScript mein zaroori hai kyunki yeh function ke execution context ke basis par change hota hai.

JavaScript mein, prototype inheritance ek important concept hai. Har object ek prototype se inherit karta hai, jise uska prototype chain kehte hain. Yeh chain object ko properties aur methods provide karta hai, jo uske prototypes ke through aate hain.

Example:

// Ek constructor function
function Animal(name) {
this.name = name;
}

// Ek method prototype mein add kiya gaya
Animal.prototype.sayName = function() {
console.log("My name is " + this.name);
};

// Ek instance create kiya
var cat = new Animal("Whiskers");

// Instance ne prototype chain ke through method ko inherit kiya
cat.sayName(); // Output: "My name is Whiskers"
Yahan, Animal ek constructor function hai jiska prototype mein sayName method add kiya gaya hai. Jab hum new Animal("Whiskers") se ek instance create karte hain, toh yeh instance sayName method ko apne prototype chain ke through inherit karta hai.

Is tarah se, prototype inheritance JavaScript mein objects ke efficient reuse aur code organization mein madad karta hai. Each object prototype chain ke upar apne parent objects ke properties aur methods ko access kar sakta hai.

"Synchronous" aur "asynchronous" programming JavaScript mein execution flow ke taur par ek difference represent karte hain.

Synchronous (Sync):

Sync programming mein ek task complete hone ke baad hi agla task shuru hota hai.
Execution line by line hoti hai, ek step ke baad dusra step execute hota hai.
Blocking nature hota hai, jiski wajah se ek task ke completion tak dusre tasks ka wait karna padta hai.
Example (Sync):

javascript
Copy code
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
Asynchronous (Async):

Async programming mein ek task shuru hokar bhi dusra task shuru ho sakta hai bina pehle wale task ka wait kiye.
Non-blocking nature hota hai, jiski wajah se multiple tasks parallel taur par execute ho sakte hain.
Example (Async using Callbacks):

javascript
Copy code
console.log("Step 1");

setTimeout(function() {
console.log("Step 2");
}, 1000);

console.log("Step 3");
Example (Async using Promises):

javascript
Copy code
console.log("Step 1");

new Promise(function(resolve, reject) {
setTimeout(function() {
console.log("Step 2");
resolve();
}, 1000);
}).then(function() {
console.log("Step 3");
});
Example (Async using async/await):

javascript
Copy code
async function example() {
console.log("Step 1");

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Step 2");

}

example();
Yahan, async aur await ka use Promise ke sath kiya gaya hai. await keyword asynchronous code ko lagbhag synchronous taur par likhne mein madad karta hai, jisse readability improve hoti hai.

Isse, asynchronous programming mein task ka wait karne ke liye explicitly callbacks ya promises ki zarurat nahi hoti, aur code aksar zyada readable aur maintainable ho jata hai.

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is actually executed. This means that you can use variables or call functions before they are declared in your code.

However, it's important to note that hoisting works differently for variables declared with var compared to let and const.

var Hoisting:

Variables declared with var are hoisted to the top of their scope and initialized with undefined.
You can access the variable before its declaration, but the value will be undefined.
Example:

javascript
Copy code
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
let and const Hoisting:

Variables declared with let and const are also hoisted to the top of their scope, but they are not initialized.
If you try to access the variable before its declaration, you will get a ReferenceError.
Example:

javascript
Copy code
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10
In both cases, it's generally a good practice to declare your variables at the beginning of the scope to avoid confusion and potential bugs related to hoisting. Also, using let and const is recommended over var to have block-scoped variables and to avoid some unexpected behaviors associated with var.

WAYS TO CREATE OBJECT

JavaScript mein objects create karne ke kuch tareeqe hain:

Object Literal:

Sabse simple tareeqa hai object literal ka istemal karna.
javascript
Copy code
var person = {
name: "John",
age: 30,
gender: "male"
};
Constructor Function:

Objects banane ke liye constructor function ka istemal hota hai.
javascript
Copy code
function Person(name, age, gender) {
this.name = name;
this.age = age;
this.gender = gender;
}

var person = new Person("John", 30, "male");
Object.create:

Object.create method ke istemal se aap prototype specify karke new object create kar sakte hain.
javascript
Copy code
var personProto = {
greet: function() {
console.log("Hello!");
}
};

var person = Object.create(personProto);
Class (ES6+):

ES6 ke saath aaye class syntax se bhi objects create kiye ja sakte hain.
javascript
Copy code
class Person {
constructor(name, age, gender) {
this.name = name;
this.age = age;
this.gender = gender;
}
}

var person = new Person("John", 30, "male");
Factory Function:

Factory functions ka istemal karke bhi objects banaye ja sakte hain.
javascript
Copy code
function createPerson(name, age, gender) {
return {
name: name,
age: age,
gender: gender
};
}

var person = createPerson("John", 30, "male");
Singleton Pattern:

Singleton pattern se ensure kiya jata hai ki ek class ka sirf ek instance ho.
javascript
Copy code
var singletonPerson = (function() {
var instance;

    function createInstance() {
        return {
            name: "Singleton John",
            age: 30,
            gender: "male"
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };

})();

var person = singletonPerson.getInstance();
In tareeqon mein se koi bhi choose kiya ja sakta hai, jo aapke use case aur coding style ke anusaar sahi lagta hai. ES6 ke aane se class syntax aur object-oriented programming mein sudhar hua hai, jo modern aur pasandeeda tareeqa hai objects banane ka.

Promises and Callbacks in JS

Callback in JS:
Callback ek function hai jo dusre function mein parameter ke roop mein pass kiya jaata hai, taki woh function asynchronously execute ho sake.

Example:

javascript
Copy code
function fetchData(callback) {
// Some asynchronous operation, like fetching data
setTimeout(function() {
var data = "Fetched data!";
callback(data);
}, 1000);
}

function processData(data) {
console.log("Processing data:", data);
}

fetchData(processData);
Yahan fetchData ek asynchronous operation ko simulate karta hai aur processData ek callback function hai jo data ko process karta hai.

Promises in JS:
Promise ek built-in object hai jo asynchronous operations ko handle karne ke liye hota hai. Ye do states mein hota hai - resolved (success) ya rejected (failure).

Example:

javascript
Copy code
function fetchData() {
return new Promise(function(resolve, reject) {
// Some asynchronous operation, like fetching data
setTimeout(function() {
var success = true;

            if (success) {
                var data = "Fetched data!";
                resolve(data);
            } else {
                reject("Failed to fetch data!");
            }
        }, 1000);
    });

}

// Using the promise
fetchData()
.then(function(data) {
console.log("Data received:", data);
})
.catch(function(error) {
console.error("Error:", error);
});
Yahan fetchData ek promise return karta hai. then method success case ko handle karta hai aur catch method failure case ko handle karta hai. Promises provide better readability and error handling compared to callbacks.

EVENT LOOPING and HOW IT Helps in JS

Event Loop in JS:
Event loop ek mechanism hai JavaScript mein jo asynchronous operations ko handle karta hai. Jab aap kisi asynchronous operation ko shuru karte hain (jaise ki setTimeout, network requests), toh woh operation background mein chalti hai aur execution flow aage badhti hai bina wait kiye.

Example:

javascript
Copy code
console.log("Start");

setTimeout(function() {
console.log("Inside setTimeout");
}, 1000);

console.log("End");
Yahan setTimeout ek asynchronous operation hai, lekin console.log("End") turant execute hota hai bina setTimeout ka wait kiye. Yeh event loop ki wajah se hota hai.

How it Helps in Async:
Event loop ke wajah se JavaScript non-blocking hota hai, jiski wajah se multiple tasks ek saath execute ho sakte hain. Agar aapne kisi function ko background mein chalaya hai (jaise ki network request), toh aap dusre kaam kar sakte hain jab tak woh background mein chal raha hai.

Example:

javascript
Copy code
console.log("Start");

// Simulating a network request
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => {
console.log("Received data:", data);
});

console.log("End");
Yahan fetch ek network request simulate karta hai. console.log("End") turant execute hota hai, aur jab network request complete hota hai, tab uska data print hota hai. Event loop ki wajah se, console.log("End") aur network request asynchronously execute ho rahe hote hain.

Strategies to Improve JS Performance:

Minification aur Compression:

Apne JavaScript code ko minify karo taki unnecessary characters ko hata sake, aur file sizes ko kam karne ke liye compression ka istemal karo.
Bundle aur Concatenate:

Multiple JavaScript files ko ek bundle mein combine karo taki HTTP requests kam ho aur loading time tez ho.
Images Ko Optimize Karo:

Apne images ko optimize aur compress karo taki file sizes kam ho. Isse web pages ki overall performance improve hogi.
Lazy Loading:

Images aur scripts ke liye lazy loading implement karo taki unhe sirf tab load kiya jaye jab zarurat ho, aur initial page load time tez ho.
Caching:

Caching strategies ka istemal karo taki data ko server se dubara fetch karne ki zarurat na ho, aur page load time kam ho.
WET aur DRY Code Ka Antar:

WET (Write Everything Twice):

WET code mein repetition hoti hai, matlab ek hi cheez ko bar-bar likhna. Ye "Don't Repeat Yourself" (DRY) principle ko violate karta hai.
javascript
Copy code
function calculateArea(length, width) {
return length \* width;
}

function calculatePerimeter(length, width) {
return 2 \* (length + width);
}
DRY (Don't Repeat Yourself):

DRY code mein repetition kam hoti hai, aur code ko reusable banane ka pryas hota hai.
javascript
Copy code
function calculateRectangleProperties(length, width, operation) {
if (operation === 'area') {
return length _ width;
} else if (operation === 'perimeter') {
return 2 _ (length + width);
}
DRY code ko aksar behtar mana jata hai kyunki isse bugs kam hote hain, code ko maintain karna asaan hota hai, aur readability improve hoti hai. WET code, jisme repetition hoti hai, woh inconsistencies aur code maintainance mein zyada effort ka kaaran ban sakti hai.

let, const, aur var ka Antar:

var:

var ko variable declare karne ke liye istemal kiya jata hai. Yeh function-scoped hota hai aur hoisting ke karan variable declaration ko top par le jata hai.
javascript
Copy code
var x = 10;
if (true) {
var x = 20;
console.log(x); // Output: 20
}
console.log(x); // Output: 20
let:

let ko block-scoped variable declare karne ke liye istemal kiya jata hai. Hoisting hota hai lekin let ko initialize nahi karte, isliye let ko use karke "temporal dead zone" se bacha ja sakta hai.
javascript
Copy code
let y = 10;
if (true) {
let y = 20;
console.log(y); // Output: 20
}
console.log(y); // Output: 10
const:

const bhi block-scoped hota hai, lekin iska value change nahi kiya ja sakta ek baar assign hone ke baad.
javascript
Copy code
const z = 30;
// z = 40; // Error: Assignment to constant variable
Antar:

var function-scoped hai, jabki let aur const block-scoped hain.
var hoisting ke wajah se declare aur initialize dono ko top par le jata hai, jabki let aur const sirf declare ko top par le jate hain.
let ko reassign kiya ja sakta hai, lekin const ek baar assign hone ke baad change nahi hota.
let aur const ka istemal karte waqt "temporal dead zone" ka dhyan rakha ja sakta hai, jise var mein nahi hota.

== aur === ka Antar:

==:

== equality operator hai jo sirf value ko compare karta hai. Type ko ignore karta hai agar values same hain toh true return karta hai.
javascript
Copy code
5 == "5"; // true, kyunki values same hain
===:

=== strict equality operator hai jo value aur type dono ko compare karta hai. Agar value aur type dono same hain toh hi true return karta hai.
javascript
Copy code
5 === "5"; // false, kyunki values to same hain lekin types alag hain
Antar:

== type coercion karta hai, matlab types ko ignore karke values ko compare karta hai.
=== strict comparison karta hai, dono value aur type ka dhyan rakhta hai.
Best practice hai ki === ka istemal karein taki unexpected type coercion se bacha ja sake.
javascript
Copy code
1 == true; // true, kyunki type coercion hota hai
1 === true; // false, kyunki type bhi check hota hai

Error Handling in JS:

Try-Catch Block:

try aur catch ka istemal error handling ke liye hota hai. Code jo potentially error create kar sakta hai, use try block mein likha jata hai aur agar error aata hai toh catch block use handle karta hai.
javascript
Copy code
try {
// Code jo error create kar sakta hai
throw new Error("This is a custom error");
} catch (error) {
// Error handling
console.error(error.message);
}
Throw Statement:

throw statement se custom errors create kiye ja sakte hain.
javascript
Copy code
function divide(a, b) {
if (b === 0) {
throw new Error("Cannot divide by zero");
}
return a / b;
}

try {
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Throws an error
} catch (error) {
console.error(error.message);
}
Finally Block:

finally block, chahe error ho ya na ho, hamesha execute hota hai.
javascript
Copy code
try {
// Code jo error create kar sakta hai
} catch (error) {
// Error handling
} finally {
// Yeh hamesha execute hoga
}
Error Object:

Error object se error details milte hain, jaise message aur stack.
javascript
Copy code
try {
throw new Error("Custom Error");
} catch (error) {
console.error(error.message); // Output: Custom Error
console.error(error.stack); // Stack trace
}
Promise Error Handling:

Promise chain mein catch method ka istemal promise rejection ko handle karne ke liye hota hai.
javascript
Copy code
somePromiseFunction()
.then(result => {
// Handle successful result
})
.catch(error => {
// Handle error
console.error(error.message);
});

call, apply, aur bind ka Antar:

call:

call method ka istemal kisi function ko call karne ke liye hota hai. Isme function ke arguments ko direct pass kiya jata hai.
javascript
Copy code
function greet(name) {
console.log("Hello, " + name);
}

greet.call(null, "John");
apply:

apply method bhi function ko call karne ke liye hota hai, lekin isme arguments ko array ke roop mein pass kiya jata hai.
javascript
Copy code
function greet(name, age) {
console.log("Hello, " + name + "! You are " + age + " years old.");
}

greet.apply(null, ["John", 25]);
bind:

bind method ek naya function create karta hai jisme original function ka context fix hota hai. Isme arguments ko bind ke sath pass nahi kiya jata hai, lekin jab yeh naya function call hota hai toh usme arguments diye ja sakte hain.
javascript
Copy code
function greet(name) {
console.log("Hello, " + name);
}

var greetJohn = greet.bind(null, "John");
greetJohn(); // Output: Hello, John
Antar:

call aur apply direct function ko call karte hain, jabki bind ek naya function create karta hai.
call mein arguments ko direct pass kiya jata hai, apply mein array ke roop mein pass hota hai, aur bind mein naya function create hota hai jisme arguments fixed hote hain.
bind ka istemal hota hai jab aap function ko later use karna chahte hain aur uska context fix karna chahte hain.

Higher Order Functions in JS:

Higher Order Functions (HOF) hote hain woh functions jo doosre functions ko accept karte hain ya fir functions ko return karte hain.

Map:

map ek array ke har element par ek function apply karta hai aur ek naya array banata hai jo modified elements ko contain karta hai.
javascript
Copy code
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map(function(num) {
return num \* 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8]
Filter:

filter ek array ke elements mein se woh elements select karta hai jo di gayi condition ko satisfy karte hain aur unhe ek naye array mein daalta hai.
javascript
Copy code
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter(function(num) {
return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
Reduce:

reduce ek array ke saare elements ko ek single value mein combine karta hai. Isme ek accumulator hota hai jo har iteration ke baad update hota hai.
javascript
Copy code
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function(accumulator, num) {
return accumulator + num;
}, 0);

console.log(sum); // Output: 10
Event Delegation:

Event delegation ek technique hai jisme ek parent element par event listener lagaya jata hai aur jab event occur hota hai toh child elements ke liye bhi handle hota hai.
html
Copy code

<ul id="parentList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    document.getElementById("parentList").addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            console.log("Clicked on:", event.target.textContent);
        }
    });
</script>

Yahan ul element par ek event listener laga hai aur jab bhi koi li element par click hota hai, toh wo parent element ke through handle hota hai.

Higher Order Functions aur event delegation ka istemal karke code ko concise banaya ja sakta hai aur maintenance ko bhi asaan banaya ja sakta hai.

JavaScript asynchronous execution ko event-driven, single-threaded model ke saath handle karta hai, jisme event loop ka istemal hota hai. Yahaan ek simplified explanation hai is process ka:

Event Loop:

JavaScript runtime ek event loop ka istemal karta hai jo asynchronous operations ko manage karta hai.
Event loop continuously message queue ko check karta hai kuch pending messages (events) ke liye.
Callback Queue (Message Queue):

Jab koi asynchronous operation complete hota hai ya koi event hota hai, toh ek message (callback) callback queue mein add hota hai.
Call Stack:

Call stack ek mechanism hai jo function calls ke execution ko track karta hai.
Jab ek function call hota hai, woh stack ke top par add hota hai. Jab function complete hota hai, woh stack se remove ho jata hai.
Concurrency Model:

JavaScript single-threaded hai, matlab ki ek hi call stack hai. Lekin asynchronous, non-blocking nature ke through concurrency achieve hota hai.
Asynchronous tasks (jaise ki I/O operations, timers, aur events) ko browser ya Node.js runtime handle karte hain, jisse main thread dusre code ko execute kar sake.
Web APIs (Node APIs in Node.js):

Browsers aur Node.js asynchronous operations ko handle karne ke liye Web APIs (ya Node APIs) provide karte hain.
Examples include setTimeout, fetch, XMLHttpRequest, aur kuch aur.
Jab ye APIs call hote hain, toh woh asynchronous operations ko initiate karte hain aur jab operation complete hota hai, uske callbacks ko callback queue mein schedule karte hain.
Callback Execution:

Jab call stack khali hota hai, event loop callback queue se pehla callback uthata hai aur use call stack mein push karke execute karta hai.
Yahan ek simplified example hai:

javascript
Copy code
console.log("Start");

setTimeout(function() {
console.log("Timeout callback");
}, 1000);

console.log("End");
Output:

sql
Copy code
Start
End
Timeout callback
Is example mein setTimeout asynchronous hai, isliye callback ko 1000 milliseconds ke baad execute karne ke liye schedule kiya jata hai. Jab timeout ka wait chal raha hota hai, program agla line (console.log("End")) execute karta hai. Jab timeout complete hota hai, callback callback queue mein add hota hai aur event loop eventually use execute karta hai. Ye asynchronous behavior JavaScript ko main thread ko block kiye bina multiple tasks ko concurrently handle karne mein madad karta hai.
