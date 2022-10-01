let menu__link = document.getElementsByClassName("menu__link");
for (let item of menu__link) {
    item.onclick = function () {
        if (item.closest(".menu__item").querySelector(".menu_sub.menu_active")) {
            item.closest(".menu__item").querySelector(".menu_sub.menu_active").className = "menu menu_sub";
            return false;
        } else if (item.closest(".menu__item").querySelector(".menu_sub")) {
            Array.from(document.querySelectorAll(".menu_sub.menu_active")).map((item) => item.className = "menu menu_sub")
            item.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active"
            return false;
        }
    }
}