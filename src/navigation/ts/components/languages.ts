import * as $ from "jquery";
import menulangJSON from "./../../content/navigation";

interface langApp {
    [key: string]: string | any;
}
const page = $(window);

page.on("resize", (): void => {
    languagesPosition();
    activeLanguageBackground();
});

// Change language

const changeLang = (langVal: string): void => {
    contentUpdate(langVal);
    localStorage.setItem("lang", langVal);
};

// Change content navigation

const contentUpdate = (cl: string): void => {
    const currLangExport: langApp = Object.entries(menulangJSON)[Object.keys(menulangJSON).indexOf(cl)][1],
          langContExport: number = Object.entries(currLangExport).length;

    for (let i: number = 0; i < langContExport; i++) {
        const getSelectorExport: langApp = $(".language-export")[i],
        getAttrExport: string = getSelectorExport.getAttribute("data-key");
        getSelectorExport.innerHTML = currLangExport[getAttrExport];
    }
};


// Get language form Local Storage

const checkUserLangue = () => {
    const appLang: string = localStorage.getItem("lang");

    if (appLang === null) {
        let userLanguage: string;
        const userLang: string = navigator.language;
    
        if (userLang === "en" || userLang === "en-US") userLanguage = "en";
        else if (userLang === "uk") userLanguage = "ua";
        else if (userLang === "ru") userLanguage = "ru";
        else userLanguage = "en";
    
        contentUpdate(userLanguage);
    
        $("." + userLanguage).addClass("languages-active");
    
        localStorage.setItem("lang", userLanguage);
    }
    else contentUpdate(appLang);
    
    $("." + appLang).addClass("languages-active");
};

checkUserLangue();

// Chouse language

$(".choice__language").on("click", function (): void {
    if (this.classList.value.indexOf("ua") !== -1) changeLang("ua");
    if (this.classList.value.indexOf("en") !== -1) changeLang("en");
    if (this.classList.value.indexOf("ru") !== -1) changeLang("ru");

    $(".choice__language").removeClass("languages-active");
    $(this).addClass("languages-active");
});

// Languages modal window position

const languagesPosition = (): void => {
    const languagesHeight: number = $(".languages__choice").height(),
          bodyHeight: number = page.height(),
          languagesPosition: string = ((bodyHeight - languagesHeight) / 2) + "px";

    $(".languages__choice").css("top", languagesPosition);
};

// Show/hide languages modal window

$(".languages__language").on("click", function (): void {
    if ($(this).hasClass("languages-active")) {

        $(".languages__choice").fadeOut(300);
        $(this).removeClass("languages-active");

    } else {
        $(this).addClass("languages-active");
        $(".languages__choice").fadeIn(300);
        $(".languages__choice").css("display", "flex");

        if (localStorage.getItem("activeLanguagePosition") === null) {
            const activeLangNav = $(".choice-active");
            activeLangNav.css("transition", "none");

            activeLanguageBackground();

            setTimeout(() => activeLangNav.css("transition", "all 0.3s ease-in-out"), 300);
        }

        activeLanguage();
    }

    languagesPosition();
});

$("body").on("click", (e) => {
    let clickLeng: number | string, clickLeng2: number | string;

    if (e.target.localName === "path" || e.target.localName === "svg") {
        $(".languages__choice").fadeOut(300);
        $(".languages__language").removeClass("languages-active");
    } else {
        clickLeng = e.target.className.indexOf("choice__language");
        clickLeng2 = e.target.className.indexOf("languages");
        
        if (clickLeng === 0 || clickLeng2 === 0) return;
        else {
            $(".languages__choice").fadeOut(300);
            $(".languages__language").removeClass("languages-active");
        }
    }
});

// Language active background

const languagesActiveBackground: JQuery<Element> = $(".choice-active");

const activeLanguage = (): void => {
    const languageHeight: number = $(".choice__language").innerHeight();
    languagesActiveBackground.height(languageHeight);
};

$(".choice__language").on("click", (): void => activeLanguageBackground());

const activeLanguageBackground = () => {
    const language: JQuery<Element> = $(".languages-active"),
          languageHeight: number = language.innerHeight(),
          topOffset: string = "translateY(" + language.position().top + "px)";

    languagesActiveBackground.height(languageHeight);
    languagesActiveBackground.css("transform", topOffset);
};

// Language active background reload position

const checkActiveLanguage = () => {
    const activeLanguagePosition: string = localStorage.getItem("lang");
    
    if (activeLanguagePosition === null) return;
    else {
        $("." + activeLanguagePosition).addClass("languages-active");
        activeLanguageBackground();
    }
};

checkActiveLanguage();