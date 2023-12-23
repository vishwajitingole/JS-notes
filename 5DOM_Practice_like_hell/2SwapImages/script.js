var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

var akki = document.querySelector(".swap");

var btn = document.querySelector("button");
btn.addEventListener("click", () => {
  temp = img1.src;
  img1.src = img2.src;
  img2.src = temp;
  akki.style.display = "block";
});
