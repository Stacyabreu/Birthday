// ===============================
// COMENZAR
// ===============================

const beginButton = document.querySelector(".button");

if (beginButton) {

    beginButton.addEventListener("click", function(event) {

        event.preventDefault();

        const firstMonth = document.querySelector("#mes1");

        firstMonth.scrollIntoView({
            behavior: "smooth"
        });

    });

}


// ===============================
// ABRIR CAPÍTULOS
// ===============================

const chapterButtons =
    document.querySelectorAll(".chapter-button");

chapterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const chapter = button.nextElementSibling;

        chapter.classList.toggle("open");

        if (chapter.classList.contains("open")) {

            button.textContent = "Cerrar capítulo";

        } else {

            button.textContent = "Abrir capítulo";

        }

    });

});


// ===============================
// CUMPLEAÑOS
// ===============================

const birthdayButton =
    document.querySelector("#birthdayButton");

const birthdayMessage =
    document.querySelector("#birthdayMessage");


if (birthdayButton && birthdayMessage) {

    birthdayButton.addEventListener("click", function() {

        birthdayMessage.classList.toggle("open");

        if (birthdayMessage.classList.contains("open")) {

            birthdayButton.textContent = "❤️";

        } else {

            birthdayButton.textContent =
                "🎁 Abrir mi regalo";

        }

    });

}
