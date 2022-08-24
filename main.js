const li = document.querySelectorAll(".nav-item");
const sec = document.querySelectorAll(".content-list-item");

function activeMenu() {
    let cur = document.documentElement.scrollTop;
    let len = sec.length;
    while (len-- && cur + 140 < sec[len].offsetTop) {}
    li.forEach((list) => list.classList.remove("active"));
    if (len >= 0) li[len].classList.add("active");
}

function scrollHeader(section) {
    if (screen.width <= 768) {
        document.documentElement.scrollTop = document.getElementById(section).offsetTop - 100;
    } else {
        document.getElementById(section).scrollIntoView();
    }
}

function detectTopButton() {
    if (document.documentElement.scrollTop > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

activeMenu();
window.addEventListener("scroll", activeMenu);
window.addEventListener("scroll", detectTopButton);
