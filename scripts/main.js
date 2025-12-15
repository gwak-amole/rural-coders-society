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

const track = document.getElementById("track");

// Step 1: Clone ALL cards TWICE for smooth looping
const cards = [...track.children];
cards.forEach(card => track.appendChild(card.cloneNode(true)));
cards.forEach(card => track.appendChild(card.cloneNode(true)));

// Step 2: Measure total width of originals (including gap)
let originalWidth = 0;
cards.forEach(card => {
    originalWidth += card.offsetWidth;
    originalWidth += 48; // gap (3rem)
});

// Step 3: Animate
let x = 0;
const speed = 1;

function animate() {
    x += speed;

    // Reset when we've shifted EXACTLY one original set
    if (x >= originalWidth) {
        x = 0;
    }

    track.style.transform = `translateX(${x * -1}px)`; 
    requestAnimationFrame(animate);
}

animate();
