document.addEventListener("DOMContentLoaded", function () {
  var home = document.querySelector(".home");
  var profile = document.querySelector(".profile");
  var cart = document.querySelector(".cart");

  var ht = document.querySelector(".hometext");
  var pt = document.querySelector(".profiletext");
  var ct = document.querySelector(".carttext");

  home.addEventListener("click", () => {
    console.log("Home Clicked");
    clear();
    ht.style.display = "block";
  });

  profile.addEventListener("click", () => {
    console.log("Profile Clicked");
    clear();
    pt.style.display = "block";
  });

  cart.addEventListener("click", () => {
    console.log("Cart Clicked");
    clear();
    ct.style.display = "block";
  });
  function clear() {
    ht.style.display = "none";
    pt.style.display = "none";
    ct.style.display = "none";
  }
});
