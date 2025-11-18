const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("type", "button");

    const menuIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        const open = navLinks.classList.toggle("show");

        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars", !open);
            menuIcon.classList.toggle("fa-times", open);
        }

        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
}

// active link
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    const current = window.location.pathname.split('/').pop();

    links.forEach(a => {
        if (a.getAttribute('href') === current) {
            a.classList.add('active');
        }
    });
});