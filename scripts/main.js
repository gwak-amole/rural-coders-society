window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav-a");
    const join = document.getElementById("join-us-button")
    const nav_logo = document.getElementById("logo")
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        navLinks.forEach(link => link.classList.add("scrolled"));
        join.classList.add("scrolled");
        nav_logo.src = "../media/rcs-Photoroom.png"
    } else {
        header.classList.remove("scrolled");
        navLinks.forEach(link => link.classList.remove("scrolled"));
        join.classList.remove("scrolled");
        nav_logo.src = "../media/rcs (1)-Photoroom.png"
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

document.querySelectorAll(".sidebar-top").forEach(top => {
    top.addEventListener("click", () => {
        const dropdown = top.nextElementSibling;
        const arrow = top.querySelector(".arrow");

        dropdown.classList.toggle("open");
        arrow.classList.toggle("rotate");
    });
});