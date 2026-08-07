let currentMonth = 0;

const months = document.querySelectorAll(".month");


/* =========================
   SHOW MONTH
========================= */

function showMonth(index) {

    if (index < 0 || index >= months.length) {
        return;
    }

    months.forEach(function(month) {
        month.classList.remove("active");
    });

    months[index].classList.add("active");

    currentMonth = index;

    months[index].scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   START EXPERIENCE
========================= */

function startExperience(event) {

    if (event) {
        event.preventDefault();
    }

    showMonth(0);

}


/* =========================
   NEXT MONTH
========================= */

function nextMonth() {

    if (currentMonth < months.length - 1) {

        showMonth(currentMonth + 1);

    } else {

        document.querySelector(".goodbye").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* =========================
   PREVIOUS MONTH
========================= */

function previousMonth() {

    if (currentMonth > 0) {

        showMonth(currentMonth - 1);

    }

}


/* =========================
   START WITH MONTH 1
========================= */

showMonth(0);
