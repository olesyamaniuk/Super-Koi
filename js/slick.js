$(function () {
  $(".r-q-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".r-q-gallery-list-left",
    nextArrow: ".r-q-gallery-list-right",
  });
});

$(function () {
  $(".r-q-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".r-q-reviews-list-left",
    nextArrow: ".r-q-reviews-list-right",
  });
});
