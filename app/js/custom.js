"use strict";

/**************************************
***** 1. Always Active but When Another Item hover then current active remove
**************************************/
$(".btn--cart").hover(function () {
  $(".btn--cart").removeClass("btn--cart--active");
  $(this).addClass("btn--cart--active");
});

/**************************************
***** 2. Bootstrap Tooltip
****************************/
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip({
    offset: [0, 5],
  });
});

/**************************************
***** 3. Preloader
**************************************/
$(window).on("load", function () {
  let preloader = $("#preloader");
  preloader &&
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
});

/**************************************
***** 4. Menu Active Class Current Page
**************************************/
function menuActiveClass() {
  let currentPage = location.pathname.split("/"),
    current = currentPage[1];
  $(".mainMenu__nav ul li a").each(function () {
    let $this = $(this);
    if ($this.attr("href") === current) {
      $this.addClass("mainMenu__active");
      $this.parents(".mainMenu__child").addClass("mainMenu__active");
    }
  });
}
menuActiveClass();

/**************************************
***** 5. RadiusTheme Swiper Slider Activation
**************************************/
$(".rt-slider-style-1").each(function (i) {
  let rtSliderStyle = $(this).get(0);
  let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
  let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);

  new Swiper(rtSliderStyle, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    slideToClickedSlide: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3.9,
      },
      1024: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 7,
      },
    },
  });
});

/**************************************
***** 6. Data Background Image Attribute
**************************************/
function imageFunction() {
  $("[data-bg-image]").each(function () {
    let img = $(this).data("bg-image");
    $(this).css({
      backgroundImage: "url(" + img + ")",
    });
  });
}
imageFunction();

/**************************************
***** 7. Wow For Animation
**************************************/
let wow = new WOW({
  boxClass: "wow",
  animateClass: "animate__animated ",
  offset: 0,
  mobile: false,
  live: true,
  scrollContainer: null,
});
wow.init();

/**************************************
***** 8. Header Sticky
**************************************/
$(window).on("scroll", function () {
  if ($("header").hasClass("sticky-on")) {
    var stickyPlaceHolder = $("#sticky-placeholder"),
      menu = $("#navbar-wrap"),
      menuH = menu.outerHeight(),
      topbarH = $("#topbar-wrap").outerHeight() || 0,
      targrtScroll = topbarH,
      header = $("header");
    if ($(window).scrollTop() > targrtScroll) {
      header.addClass("sticky");
      stickyPlaceHolder.height(menuH);
    } else {
      header.removeClass("sticky");
      stickyPlaceHolder.height(0);
    }
  }
});

/**************************************
***** 8. Nice Select For Selection
**************************************/
$("select").niceSelect();