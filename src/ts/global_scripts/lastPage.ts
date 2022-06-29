import * as $ from "jquery";

$(window).on("load", (): void => {
    const getFullString: string[] = location.href.split("/"),
        pageName: string = getFullString[getFullString.length - 1];
    
    if (pageName === "404.html") return;
    localStorage.setItem("lastPage", pageName);
});