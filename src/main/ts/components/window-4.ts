import * as $ from "jquery";

// Architecture images 

const architectureImages = $(".images-block__image-architecture");
 
architectureImages.on("click", function (e): void {
  const activeArchitecture: string = "." + $(this)[0].classList[1],
        activeArchitectureText: JQuery<Element> = $(activeArchitecture + " .image-architecture__text"),
        activeArchitectureClose: JQuery<Element> = $(activeArchitecture + " .image-architecture__close-architecture");
  
  if ($(e.target).hasClass("close-architecture")) return;

  $(".activeArchitecture").addClass("noActiveArchitecture");
  architectureImages.removeClass("activeArchitecture").addClass("mouse-active");
  $(activeArchitecture).addClass("activeArchitecture").removeClass("noActiveArchitecture mouse-active");
  $(".noActiveArchitecture .image-architecture__close-architecture").fadeOut();

  activeArchitectureClose.css("display", "flex");
  activeArchitectureText.fadeIn();    

  $(".cursor").removeClass("activeCursore");

  $(".close-architecture").on("click", (): void => {
    $(".images-block__image-architecture").removeClass("activeArchitecture noActiveArchitecture");
    $(activeArchitecture).addClass("noActiveArchitecture");
    activeArchitectureClose.fadeOut();
    activeArchitectureText.fadeOut();
  });   
});



