var p = document.querySelector(".progress");
var btn = document.querySelector("button");
var count = 0;
var intervalId;

btn.addEventListener("click", () => {
  // Clear the previous interval if it exists
  clearInterval(intervalId);

  // Start a new interval
  intervalId = setInterval(() => {
    if (count <= 100) {
      console.log(count);
      p.style.width = count + "%";
      count++;
    } else {
      // Stop the interval when the progress reaches 100%
      clearInterval(intervalId);
    }
  }, 1000);
});
