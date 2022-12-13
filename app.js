// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// My solution
// const navToggle = document.querySelector(".nav-toggle");
// let links = document.querySelector(".links");
// function isToggleOn() {
//   links.classList.toggle("show-links");
// }

function isToggleOn() {
  console.log("Cliked");
}

// Youtuber's soliton
const navToggle = document.querySelector(".nav-toggle");

const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
