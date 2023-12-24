var num = document.querySelector("h1");
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");

var c;
start.addEventListener("click", () => {
  var count = 0;
  c = setInterval(function () {
    num.textContent = count;
    count++;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(c);
});
