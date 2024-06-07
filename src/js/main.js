import AOS from "aos";
import "aos/dist/aos.css";

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

// back to top
// Define the select function
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
