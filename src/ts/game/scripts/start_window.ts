import * as $ from "jquery";
import { startGame } from "./game";

$(".first_window__button").on("click", (): void => {
    $(".content__first_window").addClass("content__first_window-hide");
    setTimeout((): void => {
        $(".content__first_window").css("display", "none");
        startGame();
    }, 300);
});