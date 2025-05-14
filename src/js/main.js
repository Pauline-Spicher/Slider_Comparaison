var hand = document.querySelector(".hand");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");

hand.addEventListener("click", function () {
  box1.classList.add("is-active");
  box2.classList.add("is-active");
  box3.classList.add("is-active");
  box4.classList.add("is-active");
  hand.classList.add("is-active");
});
