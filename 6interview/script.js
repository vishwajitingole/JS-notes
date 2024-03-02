// Prototype Chaining
// It is used to build new types of object based on existing ones.
// Ek prototype object define kiya gaya hai
const prototypeObject = {
  greet: function() {
    console.log("Hello!");
  }
};
// Naya object create kiya gaya hai prototypeObject ke basis par
const newObj = Object.create(prototypeObject);
// Ab newObj prototypeObject se properties aur methods inherit karega
newObj.greet(); // Yeh "Hello!" print karega kyunki usne greet method inherit kiya hai


// Array Slice
// It returns a new array which is selected last one will be omitted
// Array Slice
// Yeh ek naya array return karta hai, jismein se last element exclude hota hai
// Original array banaya gaya hai
const originalArray = [1, 2, 3, 4, 5];
// Slice function ka istemal kiya gaya hai
// Yahaan 2nd index se lekar end tak ka portion select kiya gaya hai
const slicedArray = originalArray.slice(2);
// slicedArray mein originalArray ka slice shamil hai, lekin last element exclude kiya gaya hai
console.log(slicedArray); // Output: [3, 4, 5]


// Array Splice
// It adds or removes items from an array and then return the removed item
// Array Splice
// Yeh ek array mein items ko add ya remove karke phir unhe return karta hai

// Original array banaya gaya hai
const originalArray1 = [1, 2, 3, 4, 5];
// Splice function ka istemal kiya gaya hai
// Yahaan 2nd index se lekar 2 elements remove kiye gaye hain
const removedItems = originalArray1.splice(2, 2);
// originalArray mein se elements remove hokar updated array bana gaya hai
console.log(originalArray1); // Output: [1, 2, 5]
// Removed items ko print kiya gaya hai
console.log(removedItems); // Output: [3, 4]


// first class function
// When functions are treated as variable
// First Class Function
// Jab functions ko variable ki tarah treat kiya jaata hai
// Ek function define kiya gaya hai
function greet(name) {
  return "Hello, " + name + "!";
}
// Function ko ek variable mein store kiya gaya hai
const greetFunction = greet;
// Variable ke through function ko call kiya gaya hai
const greetingMessage = greetFunction("John");
// greetingMessage ko print kiya gaya hai
console.log(greetingMessage); // Output: Hello, John!


// first order function
// function which doesn't accept another function as an argument and doesn't return a function as it's return value
// First Order Function
// Function jo ki doosre function ko argument ke roop mein nahi leti aur khud ek function ko return nahi karti
// Ek first order function define ki gayi hai
function addNumbers(a, b) {
  return a + b;
}
// Is function ko call kiya gaya hai aur result print kiya gaya hai
const result1 = addNumbers(3, 5);
console.log(result1); // Output: 8


// higher order function
// function which accepts another function as an argument or returns a function as a return value or both
// Higher Order Function
// Function jo ki doosre function ko argument ke roop mein leti hai ya ek function ko return karti hai, ya fir dono kuch karti hai

// Ek higher order function define ki gayi hai, jo ek function ko argument ke roop mein leti hai
function operateOnNumbers(a, b, operationFunction) {
  return operationFunction(a, b);
}
// Ek function define kiya gaya hai jo do numbers ko multiply karta hai
function multiply(a, b) {
  return a * b;
}
// operateOnNumbers function ko call kiya gaya hai, aur usmein multiply function ko argument ke roop mein pass kiya gaya hai
const result2 = operateOnNumbers(4, 3, multiply);
// Result ko print kiya gaya hai
console.log(result2); // Output: 12


// Difference between let and var
// var purana hai
// function scope
// var hoisted hoga
// Using var
function exampleVar() {
  // 'x' variable ko var ke sath declare kiya gaya hai
  var x = 10;
  if (true) {
    // 'y' variable bhi var ke sath declare kiya gaya hai
    var y = 20;
    console.log(x); // Output: 10
  }
  console.log(y); // Output: 20, kyunki 'y' function scope ke bahar bhi accessible hai
}
exampleVar();
// Using let
function exampleLet() {
  // 'a' variable ko let ke sath declare kiya gaya hai
  let a = 30;
  if (true) {
    // 'b' variable bhi let ke sath declare kiya gaya hai
    let b = 40;
    console.log(a); // Output: 30
  }
  // 'b' yahaan nahi accessible hoga, kyunki let block scope follow karta hai
  //console.log(b); // Uncomment karke run karo toh error ayega
}
exampleLet();


// let New
// let block scope
// let hoisted nahi hoga
// Using let
function exampleLet() {
  // 'a' variable ko let ke sath declare kiya gaya hai
  let a= 30;
  if (true) {
    // 'b' variable bhi let ke sath declare kiya gaya hai
    let b = 40;
    console.log(a); // Output: 30
  }
  // 'b' yahaan nahi accessible hoga, kyunki let block scope follow karta hai
  //console.log(b); // Uncomment karke run karo toh error ayega
}
exampleLet();
// Attempting to access 'a' before its declaration will result in an error
//console.log(c); // Uncomment karke run karo toh error ayega
let c = 50;
console.log(c); // Output: 50




// Temporal Dead Zone
// Jagah jahan let aur const variables declare kiye gaye hain, lekin unhe access nahi kiya ja sakta
// Trying to access 'x' before its declaration will result in a ReferenceError
//console.log(x); // Uncomment karke run karo toh error ayega
let x = 10;
// 'y' ko let ke sath declare kiya gaya hai
// Lekin yeh console.log ke pahle access nahi ho sakta
//console.log(y); // Uncomment karke run karo toh error ayega
let y = 20;
// Is example mein, maine Temporal Dead Zone ko dikhaya hai. 
// Yeh ek aisa state hai jismein let aur const variables declare ho gaye hote hain, 
// lekin unhe access nahi kiya ja sakta, aur agar tu unhe access karne ki koshish karega 
// toh error milega. Jaise ki maine dikhaya hai, agar tu x ya y variable ko uske declaration 
// se pehle access karna chahega toh error milega. Ye situation Temporal Dead Zone kehte hain.

// IIFE
// Function which run right after it's declared
(function f() {
    console.log("hello");
})();
//without function name
(function() {
    console.log("hello");
})();


// Hoisting
// Mechanism jismein variables, function declaration aur classes ko code execution se pehle unke scope ke top par move kiya jata hai.
// Yaad rakho ki JavaScript sirf declaration ko hoist karta hai, initialization nahi.
// Example with variable hoisting
console.log(a); // Output: undefined
var a = 5;
// Example with function declaration hoisting
greet(); // Output: Hello!
function greet() {
  console.log("Hello!");
}
// Example with class hoisting
const obj1 = new MyClass(); // Output: Creating an instance of MyClass
class MyClass {
  constructor() {
    console.log("Creating an instance of MyClass");
  }
}


// Closures
// Ek function aur uske lexical environment ka combination hota hai, jismein woh function declare hua tha.
// Yeh ek inner function hoti hai jo bahar ya enclosing function ke variables ko access kar sakti hai.
function outerFunction(x) {
  // Inner function ko return kiya gaya hai
  function innerFunction(y) {
    return x + y; // Inner function access kar rahi hai outer function ke variable ko
  }
  return innerFunction; // Inner function ko bahar return kiya gaya hai
}
// Outer function ko call kiya gaya hai, aur uska result ek inner function hai
const closureFunction = outerFunction(5);
// Closure function ko call kiya gaya hai, aur usmein argument diya gaya hai
const result3 = closureFunction(3);
console.log(result3); // Output: 8, kyunki closure function access kar rahi hai outer function ke variable 'x' ko

// Scope in JavaScript
// Yeh determine karta hai ki variables, objects, aur functions ka accessibility kahaan se hai code ke alag-alag hisson mein.
// Global Scope Example
// Yahaan 'globalVariable' global scope mein define kiya gaya hai
let globalVariable = 10;
function globalFunction() {
  // Yahaan 'localVariable' local scope mein define kiya gaya hai
  let localVariable = 20;
  console.log(globalVariable); // Global variable ko access kiya ja sakta hai yahaan
  console.log(localVariable);  // Local variable ko access kiya ja sakta hai yahaan
}
globalFunction();

// Attempting to access 'localVariable' outside its scope will result in an error
//console.log(localVariable); // Uncomment karke run karo toh error ayega
// Note: Uncommenting the above line and running it will result in an error because 'localVariable' is defined in the local scope of the 'globalFunction'. Trying to access it outside that function's scope will lead to a ReferenceError.

// Cookie
// Ek data ka tukda jo tere computer par store hota hai aur teri browser dwara access kiya ja sakta hai.
// Cookies key/value pairs ke roop mein save hote hain.
// Setting a cookie
document.cookie = "username=John Doe; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";
// Retrieving and using a cookie
const userCookie = document.cookie; // Get all cookies as a string
console.log(userCookie); // Output: "username=John Doe; otherCookie=value; ..."
// Cookies are often parsed to extract specific values
const parsedCookies = Object.fromEntries(userCookie.split("; ").map(cookie => cookie.split("=")));
console.log(parsedCookies); // Output: { username: "John Doe", otherCookie: "value", ... }





// Coding Questions


// 1)
 const sum=eval('10*10+5');

// 2)
 const obj={1:'a',2:'b',3:'c'};
const set1= new Set([1,2,3,4,5]);
obj.hasOwnProperty('1');
obj.hasOwnPropert(1);
set1.has('1');
set1.has(1);

// 3)
String.prototype.giveLydiaPizza=()=>{
return 'Just give Lydia pizza already'
};
const name="Lydia";
console.log(name.giveLydiaPizza());

// 4)
const foo=()=>console.log('First');
const bar=()=>setTimeout(()=>console.log('Second'));
const baz=()=>console.log("Third");
bar();
foo();
baz();

// 5)
const person={name:"Lydia"};
function sayHi(age){
return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,21));
console.log(sayHi.bind(person,21));


// Local Storage and Session Storage
// Local Storage ek session storage hai lekin yeh data ko persist karta hai jab bhi browser bandh kiya jaye aur dobara kholne par bhi, jabki Session Storage page session khatam hone par data ko clear kar deta hai.
// Local Storage Example
// Data ko set kiya gaya hai local storage mein
localStorage.setItem("username", "John Doe");
// Data ko local storage se retrieve kiya gaya hai
const storedUsername = localStorage.getItem("username");
console.log(storedUsername); // Output: "John Doe"
// Session Storage Example
// Data ko set kiya gaya hai session storage mein
sessionStorage.setItem("theme", "dark");
// Data ko session storage se retrieve kiya gaya hai
const storedTheme = sessionStorage.getItem("theme");
console.log(storedTheme); // Output: "dark"

// Promise
// Ek Object hai jo ek response return karta hai. Ismein teen possible states hote hain - fulfilled, rejected, ya pending.
// Example of a Promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., fetching data from an API)
  setTimeout(() => {
    const success = true; // Assume the operation is successful
    if (success) {
      resolve("Data successfully fetched!"); // Promise is fulfilled
    } else {
      reject("Error fetching data!"); // Promise is rejected
    }
  }, 2000); // Simulating a 2-second delay
});
// Handling the Promise
myPromise
  .then((result) => {
    console.log(result); // Output: "Data successfully fetched!"
  })
  .catch((error) => {
    console.error(error); // Output: "Error fetching data!"
  });


// Need of Promise
// Promise ka istemal asynchronous operations ko handle karne ke liye hota hai.
// Ye callbacks ke liye ek alternative approach provide karte hain, callback hell ko kam karke aur cleaner code likhne mein madad karte hain.
// Example without Promise (Callback Hell)
function fetchData(callback) {
  setTimeout(() => {
    const data1 = "First data";
    callback(data1, (data2) => {
      // Nested callback
      setTimeout(() => {
        const data3 = "Third data";
        callback(data3);
      }, 1000);
    });
  }, 1000);
}
// Usage without Promise
fetchData((result1, callback2) => {
  console.log(result1);
  callback2((result3) => {
    console.log(result3);
  });
});
// Example with Promise
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data1 = "First data";
      resolve(data1);
    }, 1000);
  });
}
// Usage with Promise
fetchDataWithPromise()
  .then((result1) => {
    console.log(result1);
    return "Second data";
  })
  .then((result2) => {
    console.log(result2);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data3 = "Third data";
        resolve(data3);
      }, 1000);
    });
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.error(error);
  });

// Callback Function
// Ye ek function hoti hai jo kisi aur function mein argument ke roop mein pass ki jaati hai.
// Ye function outer function ke andar invoke hoti hai ek specific action complete karne ke liye.
// Example of Callback Function
function fetchData(callback) {
  // Simulating an asynchronous operation (e.g., fetching data from an API)
  setTimeout(() => {
    const data = "Data fetched successfully!";
    callback(data); // Callback function is invoked here
  }, 2000);
}
// Callback function to handle the fetched data
function handleData(result) {
  console.log(result);
}
// Using the callback function
fetchData(handleData);

// Hinglish
// need of callback function
// because js is an event driven language that means instead of waiting for a response js will keep executing while listening for other events.
// Bilkul bhai, callback functions ka istemal tab hota hai jab hum JavaScript mein events ke sath kaam karte hain. JavaScript ek event-driven language hai, iska matlab hai ki jab koi event hota hai (jaise ki button click, file load, ya koi aur action), toh JavaScript turant us event ka jawab nahi dete huye aage badh jata hai.
// Callback functions is event-driven nature ko handle karne mein madad karte hain. Jab hum kisi event ke liye code likhte hain, hum ek callback function ko specify karte hain. Jab woh specific event occur hota hai, tab yeh callback function invoke hoti hai.
// Isse hamara code efficient hota hai, kyunki hume kisi event ka response wait nahi karna padta. Callbacks allow JavaScript to keep executing and listening for other events while carrying on with its tasks. Is tareeke se, callback functions help in managing the flow of code in an asynchronous and non-blocking manner.


// Coding Questions.

console.log(typeof typeof 1);
// datatype of console. :- Object (Everything in js is Object ).


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


// Yeh hai tera initial array
const result = [
  [0, 1],
  [2, 3],
].reduce((acc, cur) => {
  // Concatenate kar rahe hain current array ko accumulator ke saath
  return acc.concat(cur);
}, [1, 2]); // Initial accumulator value [1, 2]
console.log(result); // Output ko print karte hain




// Callback hell ?
// anti pattern with multiple nested callbacks which makes code hard to read and debug when dealing with async logic.
// Callback Hell ka Example (Pyramid of Doom)
// Kadam 1: Data ko asynchronous taur par fetch karna
fetchData((data1) => {
  // Kadam 2: Pehle set ke data ko process karna
  processFirstData(data1, (data2) => {
    // Kadam 3: Dusre set ke data ko process karna
    processSecondData(data2, (data3) => {
      // Kadam 4: Teesre set ke data ko process karna
      processThirdData(data3, (result) => {
        // Kadam 5: Final result
        console.log(result);
      });
    });
  });
});
// Comments:
// - Har kadam ek callback function hai jo pehle ke andar nested hai.
// - Indentation badh jati hai, jisse code padhna mushkil ho jata hai.
// - Code ka execution flow kramashah hai, lekin code structure nested aur complex hai.
// - Aise code ko debug karna aur maintain karna challenging ho jata hai.


// Promise Chaining
// Promise chaining ek tarika hai jismein ek sequence of asynchronous tasks ko ek ke baad ek execute karna hota hai, aur yeh promises ka istemal karta hai.
// Example of Promise Chaining
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = "Data fetched successfully!";
      const success = true;

      if (success) {
        resolve(data); // Resolve the promise if operation is successful
      } else {
        reject("Error fetching data!"); // Reject the promise in case of an error
      }
    }, 2000);
  });
}
// Chaining promises
fetchData()
  .then((result1) => {
    console.log(result1);
    return "Second data"; // Returning a value to be used in the next .then()
  })
  .then((result2) => {
    console.log(result2);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data3 = "Third data";
        resolve(data3);
      }, 1000);
    });
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.error(error);
  });


// typeof Operator
// typeof operator JavaScript mein data type check karne ke liye istemal hota hai.
let exampleVariable = 42;
console.log(typeof exampleVariable); // Output: "number"

// Undefined Property
// Agar koi property object mein define nahi hoti hai, toh uski value undefined hoti hai.
let person1 = { name: "John" };
console.log(person1.age); // Output: undefined

// Null Value
// Null ek primitive data type hai jo ek variable ko explicitly empty ya null value assign karne ke liye istemal hota hai.
let nullValue = null;
console.log(nullValue); // Output: null

// eval Function
// eval function JavaScript mein ek string ko code mein convert karne ke liye istemal hoti hai.
let expression = "2 + 2";
console.log(eval(expression)); // Output: 4

// isNaN Function
// isNaN function numeric value ko check karne ke liye istemal hoti hai, aur dekhti hai ki kya value ek valid number hai ya nahi.
console.log(isNaN("Hello")); // Output: true
console.log(isNaN(42));      // Output: false


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


// Window and Document Difference
// Window:
// - Ye kisi bhi web page ka root level element hota hai.
// - By default, window object page mein implicitly available hota hai.
// - Ismein kuch methods jaise ki alert(), confirm hote hain, aur kuch properties jaise ki document, location hote hain.

// Document:
// - Ye window object ka direct child hota hai, aur isko Document Object Model (DOM) bhi kehte hain.
// - Aap isko window.document ya directly document ke through access kar sakte hain.
// - Ismein kuch methods jaise ki getElementById, getElementsByTagName, createElement hote hain.

// Example
// Window Object
console.log(window.alert); // Output: [Function: alert]
console.log(window.document); // Output: Reference to the Document object

// Document Object
console.log(document.getElementById); // Output: [Function: getElementById]
console.log(document.createElement); // Output: [Function: createElement]

// Null and Undefined

// Null:
// - Ye ek assignment value hai jo batata hai ki variable kisi object ko point nahi karta.
// - Null ka type object hota hai.
// - Ye ek primitive value hai jo null, empty ya reference ke existence ko represent karta hai.
// - Ye batata hai ki variable ke liye koi value available nahi hai.
// - Primitive operations ke doran null ko zero (0) mein convert kiya jata hai.

// Undefined:
// - Ye ek assignment value nahi hai, jab koi variable declare kiya gaya hai lekin usme koi value assign nahi ki gayi hai.
// - Undefined ka type undefined hota hai.
// - Undefined value ek primitive value hai jo tab istemal hoti hai jab koi variable ko koi value assign nahi ki gayi hai.
// - Ye batata hai ki variable khud hi available nahi hai.
// - Primitive operations ke doran undefined ko NaN mein convert kiya jata hai.
// Example
let nullVariable = null;
console.log(nullVariable); // Output: null
console.log(typeof nullVariable); // Output: object
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined
console.log(typeof undefinedVariable); // Output: undefined



// Global Variables
// Ye woh variables hote hain jo code ke poore length mein kisi bhi scope ke bina available hote hain. Var keyword ka istemal local variable declare karne ke liye hota hai, lekin agar aap ise omit kar dete hain toh woh global variable ban jata hai.
// Problems with Global Variables
// - Global variables local aur global scope ke dusre variable names ke saath conflict kar sakte hain.
// - Ye developers ke liye debugging aur testing ko challenging bana sakta hai, especially large codebases mein.
// Example
var globalVar = "I am a global variable"; // Declare a global variable
function exampleFunction() {
  localVar = "I am a global variable too"; // Omitting var keyword makes it a global variable
  console.log(globalVar); // Accessing the global variable
}
exampleFunction();
console.log(localVar); // Output: "I am a global variable too"
console.log(globalVar); // Output: "I am a global variable"

// Event Bubbling
// Ye ek event propagation type hai jismein event pehle innermost target element par trigger hota hai, phir uske ancestors (parent div) par successively trigger hota hai, aur phir wahi hierarchy follow hokar outermost DOM element tak pahunchta hai.
// Example of Event Bubbling
document.getElementById("innermostElement").addEventListener("click", function(event) {
  console.log("Innermost Element Clicked!");
  // Event.stopPropagation(); // Uncomment this line to stop event bubbling
});
document.getElementById("parentElement").addEventListener("click", function(event) {
  console.log("Parent Element Clicked!");
});
document.getElementById("outermostElement").addEventListener("click", function(event) {
  console.log("Outermost Element Clicked!");
});
// HTML Structure
/*
<div id="outermostElement">
  <div id="parentElement">
    <div id="innermostElement">
      Click me!
    </div>
  </div>
</div>
*/
// Explanation:
// - Jab innermostElement par click hota hai, toh pehle "Innermost Element Clicked!" log hota hai, phir "Parent Element Clicked!" aur fir "Outermost Element Clicked!".
// - Agar aap Event.stopPropagation() ko uncomment karte hain innermostElement ke callback function mein, toh event bubbling ruk jayega aur sirf innermostElement ke callback function hi trigger hoga.


// Event Capturing
// Ye ek event propagation type hai jismein event pehle outermost element dwara capture hota hai, aur phir successively trigger hota hai target element ke descendants (children) par hierarchy follow karte hue, jab tak woh innermost DOM element tak pahunchta hai.
// Example of Event Capturing
document.getElementById("outermostElement").addEventListener("click", function(event) {
  console.log("Outermost Element Capturing Phase!");
}, true); // The 'true' parameter indicates capturing phase
document.getElementById("parentElement").addEventListener("click", function(event) {
  console.log("Parent Element Capturing Phase!");
}, true);
document.getElementById("innermostElement").addEventListener("click", function(event) {
  console.log("Innermost Element Capturing Phase!");
}, true);
// HTML Structure
/*
<div id="outermostElement">
  <div id="parentElement">
    <div id="innermostElement">
      Click me!
    </div>
  </div>
</div>
*/
// Explanation:
// - Jab innermostElement par click hota hai, toh pehle "Outermost Element Capturing Phase!" log hota hai, phir "Parent Element Capturing Phase!" aur fir "Innermost Element Capturing Phase!".
// - Capturing phase mein hierarchy ke opposite direction mein traverse hota hai, outermost se innermost tak.


// documentLoad and DOMContentLoaded Events
// DOMContentLoaded event tab fire hota hai jab initial HTML document load ho gaya hai aur parse ho gaya hai, bina assets (stylesheets, images, subframes) ke wait kiye.
// Jabki load event tab fire hota hai jab poora page load ho gaya hai, including all dependent resources (stylesheets, images).
// Example
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM Content Loaded!");
});
window.addEventListener("load", function() {
  console.log("Page Fully Loaded!");
});
// Explanation:
// - DOMContentLoaded event ka use tab kiya jata hai jab aapko sirf HTML parse hone ke baad ka code execute karna hai, bina images aur stylesheets ke wait kiye.
// - load event ka use tab kiya jata hai jab aapko poora page load hone ke baad ka code execute karna hai, including all dependent resources.
// Note: Load event ko capture karne ke liye window object ka istemal kiya jata hai.


// Attribute and Property

// Attribute:
// - Attributes are defined in the HTML markup and provide additional information about an element.
// - They are always represented as strings.
// - Attributes are static and don't change during runtime.
// - Example: <input type="text" id="myInput" disabled>

// Property:
// - Properties are part of the DOM (Document Object Model) and represent the current state of an element.
// - They can be both read and modified.
// - Properties are dynamic and can change during runtime.
// - Example: document.getElementById("myInput").value; // Represents the current value property of the input element.
// Example
const myElement = document.getElementById("myInput");
// Accessing attribute
const attributeValue = myElement.getAttribute("disabled");
console.log(attributeValue); // Output: "disabled"
// Accessing property
const propertyValue = myElement.disabled;
console.log(propertyValue); // Output: true
// Modifying property
myElement.disabled = false;
// Note:
// - Directly modifying an attribute doesn't always reflect changes in the property and vice versa.
// - In some cases, properties and attributes may have the same name (e.g., "id"), but they are distinct entities.


// Coding Questions


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


// Same-Origin Policy
// Same-Origin Policy ek security policy hai jo JavaScript ko domain boundaries ke across requests se rokta hai. Ek origin ko define kiya jata hai URI scheme, hostname, aur port number ke combination ke roop mein. Agar aap ye policy enable karte hain, toh yeh ek malicious script ko rokta hai ki wo ek page se dusre web page par Document Object Model (DOM) ka istemal karke sensitive data tak pahunch sake.
// Example (Using Fetch API)
// Assume the following:
// - Your website is hosted at: https://www.example.com
// - You are making a request to an API at: https://api.example.com/data
// This would violate the Same-Origin Policy.
fetch('https://api.example.com/data')
  .then(response => {
    // Code here will not execute if Same-Origin Policy is violated
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
// Note:
// - Same-Origin Policy restricts cross-origin requests to protect user data.
// - It helps prevent Cross-Site Request Forgery (CSRF) attacks and data theft.
// - If you need to make cross-origin requests, you can use techniques like Cross-Origin Resource Sharing (CORS) or JSONP.

// Events
// Events hote hain woh chizen jo HTML elements ke saath hoti hain. Yeh tab hoti hain jab user HTML pages ka response deta hai.
// Example of Event
const myButton = document.getElementById("myButton");
// Adding a click event listener to the button
myButton.addEventListener("click", function(event) {
  // Code to be executed when the button is clicked
  console.log("Button Clicked!");
});
// Common HTML Events:
// - click: When an element is clicked.
// - mouseover: When the mouse pointer is moved over an element.
// - mouseout: When the mouse pointer moves out of an element.
// - keydown: When a key on the keyboard is pressed.
// - keyup: When a key on the keyboard is released.
// - submit: When a form is submitted.
// - change: When the value of an input element changes.
// - load: When a page or an image is finished loading.
// Note:
// - Events allow you to respond to user interactions and create dynamic and interactive web pages.
// - Event listeners are functions that wait for a specific event to occur and then execute code in response to that event.


// preventDefault()
// Ye method event object ke andar hota hai aur iska istemal page ko reload hone se bachane ke liye kiya jata hai.
// Example
const myLink = document.getElementById("myLink");
// Adding a click event listener to the link
myLink.addEventListener("click", function(event) {
  // Preventing the default behavior (page reload) of the link
  event.preventDefault();
  console.log("Link Clicked, Page Not Reloaded!");
});
// Note:
// - By default, when you click on a link, the browser navigates to the URL specified in the link's href attribute, causing a page reload.
// - Using preventDefault() prevents this default behavior, allowing you to handle the click event without triggering a page reload.


// stopPropagation()
// Ye method event object ke andar hota hai aur iska istemal event chain mein upar ki taraf bubbling ko rokne ke liye kiya jata hai.
// Example
const parentElement = document.getElementById("parentElement");
const childElement = document.getElementById("childElement");
// Adding click event listeners to both parent and child elements
parentElement.addEventListener("click", function(event) {
  console.log("Parent Element Clicked!");
});
childElement.addEventListener("click", function(event) {
  // Preventing the click event from bubbling up to the parent element
  event.stopPropagation();
  console.log("Child Element Clicked! Bubbling Stopped!");
});
// Note:
// - By default, when you click on the child element, the click event bubbles up to its parent elements.
// - Using stopPropagation() prevents this event from continuing to bubble up, and only the click event on the child element is logged.


// BOM (Browser Object Model)
// BOM JavaScript ko browser ke saath interact karne ki anumati deta hai. BOM navigator, history, screen, location, aur document jaise objects se milkar banta hai, jo window ke children hote hain. Browser Object Model standard nahi hota hai aur alag-alag browsers ke basis par badal sakta hai.
// Example
console.log(window.navigator); // Object representing the browser's navigator
console.log(window.history);   // Object representing the browser's history
console.log(window.screen);    // Object representing the browser's screen
console.log(window.location);  // Object representing the browser's location (URL)
console.log(window.document);  // Object representing the DOM (Document Object Model)
// Note:
// - BOM allows JavaScript to interact with browser-specific features and functionalities.
// - Objects like navigator provide information about the user's browser and system.
// - history allows manipulation of the browser's session history.
// - screen provides information about the user's screen properties.
// - location provides information about the current URL and allows navigation.
// - document represents the DOM and allows manipulation of the document content.
// Warning:
// - BOM is not standardized, and its features may vary across different browsers.


// JS called single threaded lang
// limitation to interpret the code to run the code parallel.

// JavaScript as a Single-Threaded Language
// JavaScript is often referred to as a single-threaded language, meaning it has only one execution thread. This has both advantages and limitations.
// Limitation: Inability to Run Code in Parallel
// Due to being single-threaded, JavaScript has a limitation in terms of running code in parallel. The single-threaded nature means that only one task can be executed at a time in the main thread of the browser.
// Example (Synchronous Execution)
function synchronousTask1() {
  console.log("Task 1 started");
  // Some time-consuming operation
  console.log("Task 1 completed");
}
function synchronousTask2() {
  console.log("Task 2 started");
  // Some time-consuming operation
  console.log("Task 2 completed");
}
// Performing synchronous tasks
synchronousTask1();
synchronousTask2();
// Note:
// - In the example, Task 1 is completed before Task 2 starts because of synchronous execution.
// - If a task takes a long time to complete, it can block the execution of subsequent tasks, leading to potential performance issues.
// Workaround: Asynchronous Execution
// JavaScript uses asynchronous operations and callbacks to overcome the limitation of synchronous execution, allowing non-blocking code execution.
// Example (Asynchronous Execution)
function asynchronousTask1() {
  console.log("Async Task 1 started");
  // Some asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    console.log("Async Task 1 completed");
  }, 2000);
}
function asynchronousTask2() {
  console.log("Async Task 2 started");
  // Some asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    console.log("Async Task 2 completed");
  }, 1000);
}
// Performing asynchronous tasks
asynchronousTask1();
asynchronousTask2();
// Note:
// - In the asynchronous example, both tasks are initiated, and their completion messages may appear out of order due to the asynchronous nature.
// - Asynchronous execution allows overlapping of tasks without blocking the main thread.


// ECMAScript (ES)
// ECMAScript is a scripting language specification that serves as the basis for several programming languages, with JavaScript being the most well-known implementation. It defines the core features and functionalities that a scripting language should provide.
// Key Points about ECMAScript:
// 1. **Standardization**: ECMAScript is standardized by Ecma International, a standards organization.
// 2. **Versions**: It is released in versions, and each version introduces new features, enhancements, and improvements.
// 3. **JavaScript**: JavaScript is the most popular implementation of ECMAScript. Other implementations include JScript and ActionScript.
// 4. **Core Features**: It defines the core features such as syntax, types, control structures, objects, and functions.
// 5. **Compatibility**: Browsers and other environments implement ECMAScript specifications to ensure compatibility with the language.
// Example (ECMAScript in JavaScript):
// ECMAScript provides the foundation for JavaScript syntax and features.
// ES5 (ECMAScript 5) Example
var message = "Hello, ECMAScript 5!";
console.log(message);
// ES6 (ECMAScript 2015) Example
const greeting = "Hello, ECMAScript 2015!";
console.log(greeting);
// Note:
// - ECMAScript versions are often referred to by their year of release. For example, ES5 (ECMAScript 5) and ES6 (ECMAScript 2015).
// - Subsequent versions like ES2016, ES2017, and so on, were named based on the year of their release.
// - ECMAScript specifications are continuously evolving to bring new features and improvements to the language.



// Coding Questions

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
