var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("click", () => {
  p.textContent = "Text has been Changed";
  p.style.color = "white";
});
