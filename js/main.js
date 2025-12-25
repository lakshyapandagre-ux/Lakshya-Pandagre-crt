document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".card");
    cards.forEach(function (card, index) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(function () {
            card.style.transition = "all 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 100);
    });

    const themeToggle = document.querySelector("[data-toggle-theme]");
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
        root.setAttribute("data-theme", "light");
        if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    }
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const isLight = root.getAttribute("data-theme") === "light";
            const next = isLight ? "dark" : "light";
            if (next === "light") {
                root.setAttribute("data-theme", "light");
                themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
            } else {
                root.removeAttribute("data-theme");
                themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
            }
            localStorage.setItem("theme", next);
        });
    }
});
