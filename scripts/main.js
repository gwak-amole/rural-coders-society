window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav-a");
    const join = document.getElementById("join-us-button")
    const nav_logo = document.getElementById("logo")
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        navLinks.forEach(link => link.classList.add("scrolled"));
        join.classList.add("scrolled");
        nav_logo.src = "../media/{rural coders society.} (3)-Photoroom.png"
    } else {
        header.classList.remove("scrolled");
        navLinks.forEach(link => link.classList.remove("scrolled"));
        join.classList.remove("scrolled");
        nav_logo.src = "../media/{rural coders society.} (2)-Photoroom.png"
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

if (track) {
    const cards = [...track.children];
    cards.forEach(card => track.appendChild(card.cloneNode(true)));
    cards.forEach(card => track.appendChild(card.cloneNode(true)));

    let originalWidth = 0;
    cards.forEach(card => {
        originalWidth += card.offsetWidth;
        originalWidth += 48;
    });

    let x = 0;
    const speed = 1;

    function animate() {
        x += speed;
        if (x >= originalWidth) x = 0;
        track.style.transform = `translateX(${x * -1}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const impactSection = document.querySelector(".impact");
    let impactStarted = false;

    if (!impactSection || counters.length === 0) return; // safety check

    function startCountUp() {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            let count = 0;
            const increment = target / 80;

            function update() {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            }
            update();
        });
    }

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !impactStarted) {
            impactStarted = true;
            startCountUp();
        }
    }, { threshold: 0.4 });

    observer.observe(impactSection);
});
