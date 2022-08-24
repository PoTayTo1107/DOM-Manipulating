const li = document.querySelectorAll(".nav-item");
const sec = document.querySelectorAll(".content-list-item");

function activeMenu() {
    let cur = document.documentElement.scrollTop;
    let len = sec.length;
    while (len-- && cur + 140 < sec[len].offsetTop) {}
    li.forEach((list) => list.classList.remove("active"));
    if (len >= 0) li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);
