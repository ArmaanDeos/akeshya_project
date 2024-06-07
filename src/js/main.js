import AOS from "aos";
import "aos/dist/aos.css";

// AOS animation
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

// Back to top
const select = (selector) => document.querySelector(selector);

// Select the back-to-top element
let backtotop = select(".back-to-top");

if (backtotop) {
  // Define the toggle function
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };

  // Add event listeners
  window.addEventListener("load", toggleBacktotop);
  window.addEventListener("scroll", toggleBacktotop);
}

// Mobile nav toggle
// Define the select function
const selectToggle = (selector) => document.querySelector(selector);

// Event listener for click events
const on = (event, selector, handler) => {
  document.addEventListener(event, function (e) {
    if (e.target.closest(selector)) {
      handler.call(e.target, e);
    }
  });
};

// Add click event listener to the mobile nav toggle
on("click", ".mobile-nav-toggle", function (e) {
  const navbar = selectToggle("#navbar");
  if (navbar) {
    navbar.classList.toggle("navbar-mobile");
  }
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});
