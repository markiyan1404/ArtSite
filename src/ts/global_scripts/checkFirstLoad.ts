import * as $ from "jquery";

$(window).on("load", (): void => {
    localStorage.setItem("firstLoad", "false");
}); 