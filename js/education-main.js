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
