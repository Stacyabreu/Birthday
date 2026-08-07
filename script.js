// =========================
// Smooth Scroll
// =========================

const beginButton = document.querySelector(".button");

beginButton.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#mes1").scrollIntoView({
        behavior: "smooth"
    });
});

// =========================
// Fade In Sections
// =========================

const sections = document.querySelectorAll(".month, .goodbye");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

// =========================
// Button Hover Animation
// =========================

beginButton.addEventListener("mouseenter", () => {
    beginButton.style.transform = "scale(1.08)";
});

beginButton.addEventListener("mouseleave", () => {
    beginButton.style.transform = "scale(1)";
});

// =========================
// Page Loaded
// =========================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
})