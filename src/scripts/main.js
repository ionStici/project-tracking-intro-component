const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav__icon-btn");
const navBox = document.querySelector(".nav__ul");
const navitems = document.querySelector(".nav__li");

navBtn.addEventListener("click", function (e) {
    if (navBtn.dataset.nav === "close") {
        navBtn.dataset.nav = "open";

        nav.classList.add("open-1");
        setTimeout(() => nav.classList.add("open-2"), 50);
        setTimeout(() => nav.classList.add("open-3"), 350);

        return;
    }

    if (navBtn.dataset.nav === "open") {
        navBtn.dataset.nav = "close";

        nav.classList.remove("open-3");
        nav.classList.remove("open-2");
        setTimeout(() => nav.classList.remove("open-1"), 400);

        return;
    }
});
