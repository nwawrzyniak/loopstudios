document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu_item");
    const hamburger = document.querySelector(".hamburger");
    const burgerOpen = document.querySelector(".burger_open");
    const burgerClose = document.querySelector(".burger_close");

    function toggleMenu() {
        if (menu.style.transform.includes("Y(0")) {
            menu.style.transform = "translateY(-100%)";
            burgerClose.style.display = "none";
            burgerOpen.style.display = "block";
        } else {
            menu.style.transform = "translateY(0px)";
            burgerClose.style.display = "block";
            burgerOpen.style.display = "none";
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    menuItems.forEach(
        function (menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )
});
