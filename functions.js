function menuToggle() {
    var toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("toggle");

    if (document.querySelector(".menu").classList.contains("toggle")) {
        document.querySelector(".line:nth-child(1)").style.transform = "rotate(45deg)";

        document.querySelector(".line:nth-child(2)").style.transform = "rotate(315deg)";
        document.querySelector(".line:nth-child(2)").style.margin = "-9px 0";

        document.querySelector(".line:nth-child(3)").style.display = "none";

        document.querySelector(".hamburger_menu").style.top = "30px";
        
        document.querySelector(".menu_list").style.display = "list-item";
    } else {
        document.querySelector(".line:nth-child(1)").style.transform = "initial";

        document.querySelector(".line:nth-child(2)").style.transform = "initial";
        document.querySelector(".line:nth-child(2)").style.margin = "initial";

        document.querySelector(".line:nth-child(3)").style.display = "initial";

        document.querySelector(".hamburger_menu").style.top = "20px";

        document.querySelector(".menu_list").style.display = "none";
    }
}