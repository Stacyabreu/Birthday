// ===============================
// SMOOTH SCROLL
// ===============================

const beginButton = document.querySelector(".button");

beginButton.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector("#mes1").scrollIntoView({
        behavior: "smooth"
    });
});


// ===============================
// OPEN MONTH CHAPTERS
// ===============================

const chapterButtons = document.querySelectorAll(".chapter-button");

chapterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const chapter = button.parentElement.querySelector(".chapter-text");

        chapter.classList.toggle("open");

        if (chapter.classList.contains("open")) {
            button.textContent = "Cerrar capítulo";
        } else {
            button.textContent = "Abrir capítulo";
        }

    });

});


// ===============================
// BIRTHDAY GIFT
// ===============================

const birthdayButton = document.querySelector("#birthdayButton");

const birthdayMessage = document.querySelector("#birthdayMessage");

birthdayButton.addEventListener("click", function () {

    birthdayMessage.classList.toggle("open");

    if (birthdayMessage.classList.contains("open")) {

        birthdayButton.textContent = "❤️";

    } else {

        birthdayButton.textContent = "Abrir mi regalo";

    }

});


// ===============================
// SCROLL REVEAL
// ===============================

const sections = document.querySelectorAll(
    ".month, .birthday, .future, .ending"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});
