import * as $ from "jquery";

interface langApp {
    [key: string]: string | any;
}

// Get language form Local Storage

$(window).on("load", (): void => {
    const appLang: string = localStorage.getItem("lang");

    if (appLang === null) {
        let userLanguage: string;
        const userLang: string = navigator.language;

        if (userLang === "en" || userLang === "en-US") userLanguage = "en";
        else if (userLang === "uk") userLanguage = "ua";
        else if (userLang === "ru") userLanguage = "ru";
        else userLanguage = "en";

        contentUpdate(userLanguage);
    }
    else contentUpdate(appLang);
});

// Change language

export const changeLang = (langVal: string): void => contentUpdate(langVal);

// Change content

export const contentUpdate = (language: string): void => {
    const pageName: string = $("body").attr("data-name"),
        pageType: string = $("body").attr("data-type");

    if (pageName === "main") import("../../../main/content/main.json").then(content => importContent(content["default"], language));
    if (pageName === "paintings") import("../../../paintings/content/contentPaintings.json").then(content => importContent(content["default"], language));
    if (pageType === "painting") import(`../../../paintings/painting/content/${pageName}.json`).then(content => importContent(content["default"], language));
    if (pageType === "author") import(`../../../paintings/painting/author/content/${pageName}.json`).then(content => importContent(content["default"], language));
    if (pageName === "sculptures") import("../../../sculptures/content/sculptures.json").then(content => importContent(content["default"], language));
};

$(".choice__language").on("click", function (): void {
    if (this.classList.value.indexOf("ua") !== -1) contentUpdate("ua");
    if (this.classList.value.indexOf("en") !== -1) contentUpdate("en");
    if (this.classList.value.indexOf("ru") !== -1) contentUpdate("ru");
});

function importContent (obj: Object, language: string): void {
    const content: number = obj[language],
        contentNum = Object.entries(content).length;

    for (let l: number = 0; l < contentNum + repeatItem(); l++) {
        const getSelectorExport: langApp = $(".language")[l],
            getAttrExport: string = getSelectorExport.getAttribute("data-key");
        getSelectorExport.innerHTML = content[getAttrExport];
    }
};

const repeatItem = (): number => {
    const allContentChangeBlocks: string[] = []; 

    for (let i: number = 0; i < $(".language").length; i++) {
        allContentChangeBlocks.push($(".language")[i].attributes["data-key"].textContent);
    }

    const toFindDuplicates = (array: string[]): string[] => array.filter((item, index) => array.indexOf(item) !== index);

    return toFindDuplicates(allContentChangeBlocks).length;
};