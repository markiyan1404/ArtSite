import * as $ from "jquery";

const page: JQuery<Window> = $(window),
    timeChangeHead: number = 3000;
let isFocus: boolean = true;

// Check focus

const changeIcon = (typeIcon: string): any => {
    let activeColor: string = localStorage.getItem("color");

    activeColor !== null ? activeColor = activeColor.substring(1) : activeColor = "ffc700";

    $("link[rel*='icon']").attr("href", "./../img/head/" + activeColor + `-${typeIcon}.webp`);
};

page.on("blur", (): void => {

    isFocus = false;

    setTimeout((): void => {

        if (isFocus === true) return;

        const appLang: string = localStorage.getItem("lang");

        if (appLang === "ua") document.title="Верніться 😭";
        if (appLang === "en") document.title="Come back 😭";
        if (appLang === "es") document.title="Regresar 😭";

        changeIcon("noActiveIcon");
    }, timeChangeHead);
});

page.on("focus", (): void => {
    isFocus = true;
    document.title = localStorage.getItem("title");
    changeIcon("activeIcon");
});

page.on("load", (): void => changeIcon("activeIcon"));