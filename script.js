let currentMonth = 0;

const months = document.querySelectorAll(".month");

function showMonth(index) {
    months.forEach(function(month) {
        month.classList.remove("active");
    });

    months[index].classList.add("active");

    currentMonth = index;
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

showMonth(0);
