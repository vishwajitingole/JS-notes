var input = document.querySelector("input");
var ul = document.querySelector("ul");
var li;
var add = document.querySelector(".add");
var remove = document.querySelector(".remove");

add.addEventListener("click", () => {
  var text = input.value.trim();
  if (text === "") {
    console.log("Empty");
  } else {
    var li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});

remove.addEventListener("click", () => {
  var liToRemove = ul.lastElementChild;
  if (liToRemove) {
    ul.removeChild(liToRemove);
  }
});
