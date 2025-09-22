/* Your JS here. */
// console.log('Hello World!')

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("#navbar a");
let navbar = document.getElementById("navbar");

window.onscroll = function() {
  let current = "";
  let top = window.scrollY;

  sections.forEach(function(sec) {
    let offset = sec.offsetTop - 70;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = sec.id;
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // Navbar resize
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
};

// Carousel
let slideIndex = 0;
let slides = document.querySelector(".slides");
let totalSlides = document.querySelectorAll(".slide").length;

document.querySelector(".prev").onclick = function() {
  slideIndex--;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  slides.style.transform = "translateX(-" + (slideIndex * 100) + "%)";
};

document.querySelector(".next").onclick = function() {
  slideIndex++;
  if (slideIndex >= totalSlides) slideIndex = 0;
  slides.style.transform = "translateX(-" + (slideIndex * 100) + "%)";
};

// Modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links"); 

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});