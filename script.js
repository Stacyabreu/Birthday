// ===============================
// COMENZAR
// ===============================

const beginButton = document.querySelector(".button");

if (beginButton) {
    beginButton.addEventListener("click", function (event) {
        event.preventDefault();

        const firstMonth = document.querySelector("#mes1");

        if (firstMonth) {
            firstMonth.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}


// ===============================
// ABRIR CADA CAPÍTULO
// ===============================

const chapterButtons = document.querySelectorAll(".chapter-button");

chapterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const chapter = button.nextElementSibling;

        if (chapter.classList.contains("open")) {

            chapter.classList.remove("open");
            button.textContent = "Abrir capítulo";

        } else {

            chapter.classList.add("open");
            button.textContent = "Cerrar capítulo";

        }

    });

});


// ===============================
// CUMPLEAÑOS
// ===============================

const birthdayButton = document.querySelector("#birthdayButton");
const birthdayMessage = document.querySelector("#birthdayMessage");

if (birthdayButton && birthdayMessage) {

    birthdayButton.addEventListener("click", function () {

        birthdayMessage.classList.toggle("open");

        if (birthdayMessage.classList.contains("open")) {
            birthdayButton.textContent = "❤️";
        } else {
            birthdayButton.textContent = "🎁 Abrir mi regalo";
        }

    });

}
