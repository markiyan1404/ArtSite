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
        else if (userLang === "es") userLanguage = "es";
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
        pageDateMenu: string = $("body").attr("data-menu");
    let pageType: string = $("body").attr("data-type");

    const isTemplate = location.href.indexOf("#") !== -1;

    if (isTemplate) {
        if (pageType.indexOf("_") !== -1) pageType = pageType.split("_")[1];
        import(`origin/content/${pageDateMenu}/${pageType}/${pageName}.json`).then(content => importContent(content["default"], language));
    } 
    else {
        import(`origin/content/${pageName}/${pageName}.json`)
            .then(content => importContent(content["default"], language))
            .catch(err => import(`origin/content/${pageName}/content_files/${pageName}.json`).then(content => importContent(content["default"], language)));
    }
};

$(".choice__language").on("click", function (): void {
    if ($(this).hasClass("ua")) contentUpdate("ua");
    if ($(this).hasClass("en")) contentUpdate("en");
    if ($(this).hasClass("es")) contentUpdate("es");
});

function importContent (obj: Object, language: string): void {
    const content: number = obj[language],
        contentNum = Object.entries(content).length;

    for (let l: number = 0; l < contentNum + repeatItem(); l++) {
        const getSelectorExport: langApp = $(".language")[l];
        if (getSelectorExport === undefined) continue;

        const getAttrExport: string = getSelectorExport.getAttribute("data-key");
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