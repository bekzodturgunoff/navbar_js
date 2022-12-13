// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");
function isToggleOn() {
  links.classList.toggle("show-links");
}
