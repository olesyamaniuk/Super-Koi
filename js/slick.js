$(function () {
  $(".r-w-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".r-w-gallery-list-left",
    nextArrow: ".r-w-gallery-list-right",
  });
});

$(function () {
  $(".r-w-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".r-w-reviews-list-left",
    nextArrow: ".r-w-reviews-list-right",
  });
});
$(function () {
  $(".r-w-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    prevArrow: ".r-w-why-list-left",
    nextArrow: ".r-w-why-list-right",
  });
});
