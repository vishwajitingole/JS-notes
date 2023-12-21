//textContent and innerHTML
var a = document.querySelector(".heading");

// a.textContent = "Hello"; //THis will replace the text content
//a.textContent += "Hello"; //THis will add the text content

//Very Important
//THis will explain the difference between
//textContent and innerHTML
// a.textContent = "<a>Hello</a>"; //O/P:-<a>Hello</a>
// a.innerHTML = "<a>Hello</a>"; //O/P:- Hello
//innerHTML will add an element inside the site

var btn = document.querySelector(".heading");
btn.style.color = "red";
