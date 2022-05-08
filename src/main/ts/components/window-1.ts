import * as $ from "jquery";

const page = $(window);

// Window 1 scroll button

page.on("load", (): void => {
    $(".window-1__button").on("click", (): void => {
        const windowWidth: number = page.width();
        let window2Top: number = $(".window-2").offset().top;

        if (windowWidth <= 1000) {
            const windowHeight: number = page.height() * 0.06;
            window2Top = $(".window-2").offset().top - windowHeight;
        }
      
        $("html").animate({scrollTop: window2Top}, 700);
    });
});