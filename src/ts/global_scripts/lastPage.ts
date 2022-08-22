import * as $ from "jquery";

$(window).on("load", (): void => {
    const pageName = $("body").attr("data-name");
    
    if (pageName === "404") return;
    localStorage.setItem("lastPage", pageName);
});