
import * as $ from "jquery";

let numOfClick: number = 0;

$(".window-1__title-1, .window-1__title-2").on("click", (): void => {
    numOfClick += 1;

    if (numOfClick >= 3) {
        $(".anim-show1").addClass("showGame");
        setTimeout((): JQuery<Element> => $(".anim-show2").addClass("showGame"), 700);
    
        setTimeout((): void => {
            location.href = "game.html";
        }, 1500);
    }
});