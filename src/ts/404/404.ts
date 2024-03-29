import "originSCSS/404/404.scss";
import "originSCSS/404/adap/adap-404.scss";

import * as $ from "jquery";
import { showMenu } from "originTS/navigation/components/menu_icon";

$(".content__close").on("click", (): void => {
    const lasPageLS = localStorage.getItem("lastPage");

    $(".anim-show1").addClass("menu-click");
    setTimeout((): JQuery<Element> => $(".anim-show2").addClass("menu-click"), 700);
    
    setTimeout((): void => {
        if (lasPageLS === "") location.href = "/";
        if (lasPageLS) location.href = lasPageLS;
        else showMenu();
    }, 1600);
});