window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav-a");
    const join = document.getElementById("join-us-button")
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        navLinks.forEach(link => link.classList.add("scrolled"));
        join.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        navLinks.forEach(link => link.classList.remove("scrolled"));
        join.classList.add("scrolled");
    }
});

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("open");
})

document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains("open"))  {
        sidebar.classList.remove("open");
        hamburger.classList.toggle("active");
    }
});