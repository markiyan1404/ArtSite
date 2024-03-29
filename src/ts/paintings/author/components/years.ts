import * as $ from "jquery";

const page: JQuery<Window & typeof globalThis> = $(window),
    body: JQuery<HTMLElement> = $("body"),
    windowWidth: number = $(window).width(),
    widthHeight: number = $(window).height();

// Creation years

const creationYears = (): void => {
    const floatNumberYears: number = 6,
        activeNumberYears: number = 5,
        yearsBlock: JQuery<Element> = $(".content__year");
    
    for (let leftLinesNum: number = 1; leftLinesNum <= floatNumberYears; leftLinesNum++) {
        yearsBlock.append(`<div class="year-line year-line-${leftLinesNum}"></div>`);
    }
    
    for (let activeLinesNum: number = 1; activeLinesNum <= activeNumberYears; activeLinesNum++) {
        yearsBlock.append(`<div class="year-line-active year-line-active-${activeLinesNum}"></div>`);
    };

    for (let leftLinesNum: number = 6; leftLinesNum > 0; leftLinesNum--) {
        yearsBlock.append(`<div class="year-line year-line-${leftLinesNum}"></div>`);
    }

    $( "<p class='language year__text1' data-key='birthday_year'></p>").insertAfter( ".year-line-active-1");
    $( "<p class='language year__text2' data-key='dead_year'></p>").insertAfter( ".year-line-active-5");
};

creationYears();

// Years position 

const chengeYearsPosition = (): void => {
    const year1Position: DOMRect = $(".year-line-active-1")[0].getBoundingClientRect(),
        year2Position: DOMRect = $(".year-line-active-5")[0].getBoundingClientRect();

    $(".year__text1").css("top", year1Position.bottom);
    $(".year__text2").css("top", year2Position.bottom);

    $(".year__text1").css("left", year1Position.left);
    $(".year__text2").css("left", year2Position.left);
};

page.on("load", (): void => chengeYearsPosition());
page.on("resize", (): void => chengeYearsPosition());

// Animate years

page.on("load", () => {
    if (body.hasClass("paintingToAuthor")) allLinesAnim();
});

export function allLinesAnim (): void {
    const speedAnim: number = 80;

    let yearLineNum: number = 1;
    const addClassToLines = setInterval((): void => {
        $(".year-line-" + yearLineNum).addClass("year-line-show");
        yearLineNum++;
    }, speedAnim); 
 
    const animationTime: number = $(".year-line").length * speedAnim;
 
    setTimeout((): void => clearInterval(addClassToLines), animationTime);
    setTimeout((): void => activeLineAnim(speedAnim), animationTime / 2);
};

function activeLineAnim (speed: number): void {
    const test: string[] = [],
        NumActiveLine: JQuery<Element> = $(".year-line-active");
    
    for (let i: number = 1; i <= NumActiveLine.length; i++) { 
        test.push(`year-line-active-${i}`);
    }
    
    const addClassToActiveLines = setInterval((): void => {
        if (test.length >= 1 ) {
            $("." + test[0]).addClass("year-line-show"); 
            $("." + test[test.length - 1]).addClass("year-line-show");
        
            test.pop();
            test.shift();
        };
    }, speed);

    const animationTime: number = NumActiveLine.length * speed;

    setTimeout((): void => {
        clearInterval(addClassToActiveLines);
        chengeYearsPosition();
    }, animationTime);

    const lineReading: number = (($(".year-line").length * speed) + animationTime) - (($(".year-line").length * speed) / 2);
    $(".content__year p").css("animation-delay", lineReading + "ms");
};

// Adaptation 

const mobileYearsPosition = (): void => {
    if (windowWidth < 1000 || 
        windowWidth > 900 && windowWidth < 1400 && widthHeight > 900 && widthHeight < 1600) {

        const image: JQuery<Element> = $(".content__information img"),
            yearsPosition: number = image[0].getBoundingClientRect().top + image.height() - $(".navigation").outerHeight();
    
        $(".content__year").css("top", yearsPosition);
    }
    else {
        $(".content__year").css("top", "0");
    }
};

page.on("load", (): void => mobileYearsPosition());
page.on("resize", (): void => mobileYearsPosition()); 