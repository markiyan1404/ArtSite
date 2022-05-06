import * as $ from "jquery";
import TweenLite from "gsap";

// Slowed scroll

interface scroll {
    target: JQuery<Element>;
    ease: number;
    endY: number;
    y: number;
    resizeRequest: number;
    scrollRequest: number;
  };
  
const scroller: scroll = {
  target: $("#scroll-container"),
  ease: 0.045, // scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

let requestId: number | null = null;

TweenLite.set(scroller.target, {
  rotation: 0,
  force3D: true
});
  
export const updateScroller = (): void => {
  
    const html: JQuery<Element> = $("html"),
    body: JQuery<Element> = $("body"),

    resized: boolean = scroller.resizeRequest > 0;
    
  if (resized) {    
    const height: number = scroller.target.innerHeight();
    body.css("height", height);
    scroller.resizeRequest = 0;
  }
      
  const scrollY: number = $(window).scrollTop() || html.scrollTop() || body.scrollTop() || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
};
  
export const onScroll = (): void => {
  scroller.scrollRequest++;

  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
};
  
export const onResize = (): void => {
    setTimeout((): void => {
      scroller.resizeRequest++;
      requestId = requestAnimationFrame(updateScroller);
    }, 270);
  };
  
$(window).on("load", (): void => {
  const chengsWindowHeightBlocks: JQuery<Element> = $(".choice__language, .point__child, .next-slide__arrow, .image-paint__button");

  chengsWindowHeightBlocks.on("click", (): void => {
    updateScroller();  
    window.focus();
    onResize();
  });
});