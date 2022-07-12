import * as $ from "jquery";
import "originSCSS/cursor/cursor.scss";
import "originSCSS/cursor/adap/adap-cursor.scss";

interface cursor {
    x: number;
    y: number;
};

const page: JQuery<Window & typeof globalThis> = $(window),
    cursorInner: JQuery<Element> = $(".cursor"),
    cursor: JQuery<Element> = $("#cursor"),
    cursorInnerAndCursor: JQuery<Element> = $("#cursor, .cursor"),
    cursorCircle: JQuery<Element> = $(".progress-wrap"),

    mouse: cursor = { x: checkLastMousePosition()[0], y: checkLastMousePosition()[1] },
    pos: cursor = { x: checkLastMousePosition()[0], y: checkLastMousePosition()[1] },
    speed: number = 0.11;

// Get mouse position

page.on("mousemove", function (e: number | any): void {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Mouse style effect

const getSqueeze = (diffX: number, diffY: number): number => {
    const distance: number = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)),
        maxSqueeze: number = 20.15,
        accelerator: number = 1500;

    return Math.min(distance / accelerator, maxSqueeze);
};


const updateCursor = (): void => {
    const diffX: number = Math.round(mouse.x - pos.x),
        diffY: number = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const squeeze: number = getSqueeze(diffX, diffY);

    // const scale: string = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
    const translate: string = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
    cursorInner.css("transform", translate);
    cursor.css("transform", translate);
    // cursorCircle.css("transform", scale);
};

// Show mouse

const loop = (): void => {
    updateCursor();
    requestAnimationFrame(loop);
    saveMousePosition();
};
requestAnimationFrame(loop);

// Active elements hover

export const mouveHover = (): void => {
    
    $(".mouse-active").on("mousemove", function (): void {
        if ($(this).hasClass("activeArchitecture")) {
            cursorInner.removeClass("activeCursor");
            return;
        }

        cursorInner.addClass("activeCursor");
    });

    page.on("mouseover", (e): void => {
        if ($(e.target).hasClass("mouse-active")) return;
        else {
            cursorInner.removeClass("activeCursor");
        }
    });
};

export const mouveHover2 = (): void => {
    const mouseActive2 = $(".mouse-active2");

    mouseActive2.on("mouseenter", function (): void {
        if ($(this).hasClass("mouse-active2")) cursorInnerAndCursor.addClass("activeCursore2");
    });
    
    mouseActive2.on("mouseleave", (): void => {
        cursorInnerAndCursor.removeClass("activeCursore2");
    });
};

page.on("load", (): void => {
    mouveHover();
    mouveHover2();
});

page.on("resize", (): void => mouveHover2());

// Mouse down/up

$("*").on("mousedown", (): JQuery<Element> => cursorCircle.addClass("mousedown"));
$("*").on("mouseup", (): JQuery<Element> => cursorCircle.removeClass("mousedown"));

// Cursor progress bar 

page.on("load", (): void => {
    const progressPath: JQuery<Element> | any = $(".progress-wrap__path"),
        pathLength: number = progressPath[0].getTotalLength();

    progressPath.css({
        transition: "stroke-dashoffset 10ms linear",
        WebkitTransition: "stroke-dashoffset 10ms linear",
        strokeDasharray: pathLength + " " + pathLength,
        strokeDashoffset: pathLength
    });

    const updateProgress = (): void => {
        const scroll: number = page.scrollTop(),
            height: number = $(document).height() - page.height(),
            progress: number = pathLength - (scroll * pathLength / height);

        progressPath.css("strokeDashoffset", progress);
    };
    
    page.on("scroll", (updateProgress));
});

// Save and give mouse position

const saveMousePosition = (): void => {
    const left: string = String(cursorInner.position().left + cursorInner.width() / 2),
        top: string = String(cursorInner.position().top + cursorInner.height() / 2);

    localStorage.setItem("lastMousePositionLeft", left);
    localStorage.setItem("lastMousePositionTop", top);
};  

function checkLastMousePosition (): number[] {
    const left: number = Number(localStorage.getItem("lastMousePositionLeft")),
        top: number = Number(localStorage.getItem("lastMousePositionTop"));

    const cursorPosition: number[] = [left, top];

    return cursorPosition;
};

// Show saved active/leave cursor

page.on("load", (): void => {
    const checkActiveCursor: boolean = JSON.parse(localStorage.getItem("activeCursor")),
        mouseLeave: boolean = JSON.parse(localStorage.getItem("mouseLeave"));

    if (mouseLeave || checkLastMousePosition()[0] === 0 && checkLastMousePosition()[1] === 0) return;

    if (checkActiveCursor) {
        cursorInner.addClass("activeCursor");

        setTimeout((): void => {
            cursorInnerAndCursor.css("opacity", "1");
            pageHover();         
        }, 200);
        
    }
    else {
        setTimeout((): void => {
            cursorInnerAndCursor.css("opacity", "1");
            pageHover();
        }, 300);
    }

    localStorage.setItem("activeCursor", "false");
});

const pageHover = (): void => {
    page.on("mousemove", (): void => {
        cursorInnerAndCursor.css("opacity", "1");
    });
    
    page.on("mouseleave", (): void => {
        cursorInnerAndCursor.css("opacity", "0");
    });

    cursor.css("transition", "transform 0.05s linear, opacity 0.2s");
    cursorCircle.css("transition", "transform 0.2s, opacity 0.2s");
};

page.on("mouseleave", (): void => {
    localStorage.setItem("mouseLeave", "true");
    cursorInnerAndCursor.css("opacity", "0").addClass("hideCursor");
});

page.on("mousemove", (): void => {
    localStorage.setItem("mouseLeave", "false");

    cursorInnerAndCursor.css("opacity", "1").removeClass("hideCursor");
    
    setTimeout((): void => {
        cursor.css("transition", "transform 0.05s linear, opacity 0.2s");
        cursorCircle.css("transition", "transform 0.2s, opacity 0.2s");
    }, 500);
});

// Cursor adaptation

page.on("mousemove", (): void => checkClientDevice());
page.on("load", (): void => checkClientDevice());

const checkClientDevice = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        cursorInnerAndCursor.css("display", "none");
    }
    else {
        cursorInnerAndCursor.fadeIn();
    } 
};