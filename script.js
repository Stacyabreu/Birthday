// =========================
// SMOOTH SCROLL
// =========================

const beginButton = document.querySelector(".button");

beginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const firstMonth = document.querySelector("#mes1");

    firstMonth.scrollIntoView({
        behavior: "smooth"
    });
});


// =========================
// SCROLL ANIMATIONS
// =========================

const months = document.querySelectorAll(".month");
const future = document.querySelector(".future");
const ending = document.querySelector(".ending");

const elementsToAnimate = [
    ...months,
    future,
    ending
];

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.2
    }
);


elementsToAnimate.forEach(function (element) {

    observer.observe(element);

});


// =========================
// FUTURE MONTHS
// =========================

const futureMonths = document.querySelectorAll(".future-months div");

futureMonths.forEach(function (month, index) {

    month.addEventListener("click", function () {

        const monthNumber = index + 7;

        alert(
            "El mes " +
            monthNumber +
            " todavía está por escribirse. ❤️"
        );

    });

});


// =========================
// MOUSE MOVEMENT EFFECT
// =========================

document.addEventListener("mousemove", function (event) {

    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;

    document.documentElement.style.setProperty(
        "--mouse-x",
        x + "%"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        y + "%"
    );

});
