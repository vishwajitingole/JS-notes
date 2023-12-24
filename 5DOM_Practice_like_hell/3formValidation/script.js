//This method is inefficient reason being as we had to  select every DOM element specifically

//var form=document.querySelector("form");
// var inp1 = document.querySelector(".inp1");
// var inp2 = document.querySelector(".inp2");
// var h4 = document.querySelector(".error");

// form.addEventListener("submit", (details) => {
//   details.preventDefault();
//   //This function helps to avoid reload on our page and as a result we will be able run our js script here
//   //   console.log(inp1.value, inp2.value);
//   //Just to debug what will be the which will be stored in it
//   if (inp1.value == "" || inp2.value == "") {
//     h4.textContent = "Please complete the whole form";
//     h4.style.color = " #ff0000";
//   }
// });

var form = document.querySelector("form");
var inps = document.querySelectorAll("input"); //Inps will store a nodelist
var inps1 = document.querySelectorAll('input[type="text"]');

console.log(inps.length);
//If we want to specifically select input text

var h4 = document.querySelector(".error");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  for (var i = 0; i < inps.length; i++) {
    if (inps[i].value.trim == "") {
      h4.textContent = "Please fill up all fields of the  form";
      h4.style.color = "red";
    }
  }
});
