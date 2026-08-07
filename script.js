let currentMonth = 0;

const months = document.querySelectorAll(".month");

function showMonth(index) {

    if (index < 0 || index >= months.length) {
        return;
    }

    months.forEach(month => {
        month.classList.remove("active");
    });

    months[index].classList.add("active");

    currentMonth = index;

    updateButtons();

    months[index].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function nextMonth() {

    if (currentMonth < months.length - 1) {
        showMonth(currentMonth + 1);
    } else {
        document.querySelector(".goodbye").scrollIntoView({
            behavior: "smooth"
        });
    }
}


function previousMonth() {

    if (currentMonth > 0) {
        showMonth(currentMonth - 1);
    }
}


function updateButtons() {

    const allButtons = document.querySelectorAll(".month-buttons");

    allButtons.forEach(buttonContainer => {

        const previousButton =
            buttonContainer.querySelector(".nav-button:first-child");

        const nextButton =
            buttonContainer.querySelector(".nav-button:last-child");

        previousButton.disabled = currentMonth === 0;

        if (currentMonth === months.length - 1) {
            nextButton.textContent = "Final →";
        } else {
            nextButton.textContent = "Siguiente →";
        }
    });
}


showMonth(0);
