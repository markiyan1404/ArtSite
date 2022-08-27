import * as $ from "jquery";
import { allLinesAnim } from "./years";

$(".content__close").on("click", (): void => {
    $(".year-line-show").removeClass("year-line-show");
    allLinesAnim();
});