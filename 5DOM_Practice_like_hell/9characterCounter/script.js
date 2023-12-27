var ta = document.querySelector("textarea");
var span = document.querySelector("span");
var count = 0;
ta.addEventListener("input", () => {
  console.log(ta.value);
  count = ta.value;
  span.textContent = count.length;
});
