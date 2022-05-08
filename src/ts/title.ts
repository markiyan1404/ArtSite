import * as $ from "jquery";
import { changeLang, contentUpdate } from "../navigation/ts/components/check_page_language";

const page = $(window),
    timeChangeHead = 3000;

// Check focus

const changeIcon = (typeIcon: string): any => {
    let activeColor: string = localStorage.getItem("color");

    activeColor !== null ? activeColor = activeColor.substring(1) : activeColor = "FFC700";

    $("link[rel*='icon']").attr("href", "img/head/" + activeColor + `-${typeIcon}.webp`);
};

page.on("blur", (): void => { 
    setTimeout((): void => {
        const appLang: string = localStorage.getItem("lang");

        if (appLang === "ua") document.title="Верніться 😭";
        if (appLang === "en") document.title="Come back 😭";
        if (appLang === "ru") document.title="Вернитесь 😭";

        changeIcon("noActiveIcon");
    }, timeChangeHead);
});

page.on("focus", (): void => {
    const appLang: string = localStorage.getItem("lang");

    contentUpdate(appLang);
    changeIcon("activeIcon");
});

page.on("load", (): void => {
    const appLang: string = localStorage.getItem("lang");

    contentUpdate(appLang);
    changeIcon("activeIcon");
});