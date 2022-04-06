const burgerNav = () => {
    const menu = document.querySelector(".nav"),
            mobileMenu = document.querySelector(".mobile-nav"),
            openNavBtn = document.querySelector(".open-menu-icon"),
            closeNavBtn = document.querySelector(".close-menu-icon");
    function toggleMenu() {
        if (menu.style.display !== "none") {
            menu.style.display = "none"
            mobileMenu.style.display = "grid"

        } else {
            mobileMenu.style.display = "none"
            menu.style.display = "grid"
        }
    }

    openNavBtn.addEventListener("click", toggleMenu);
    closeNavBtn.addEventListener("click", toggleMenu);

}
export default burgerNav;