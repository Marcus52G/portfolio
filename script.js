// Toggle Menu Icon and Navbar Visibility
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x"); // Change icon when clicked
});

// Smooth Scrolling for Navbar Links
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Theme Toggle Functionality
const themeSwitch = document.getElementById("theme-switch");

// Check local storage for saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeSwitch.checked = true;
}

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Active Navbar Link on Scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY + 50; // Adjust for header height

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(`a[href="#${section.id}"]`).classList.add("active");
    }
  });
});

// Contact Form Submission Handling
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset(); // Clear the form fields
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

// Scroll Animation for Section Visibility
const revealElements = document.querySelectorAll(".container"); // Fixed typo here

window.addEventListener("scroll", () => {
  revealElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight - 150) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
});
tel





