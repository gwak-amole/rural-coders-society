window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav-a");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        navLinks.forEach(link => link.classList.add("scrolled"));
    } else {
        header.classList.remove("scrolled");
        navLinks.forEach(link => link.classList.remove("scrolled"));
    }
});