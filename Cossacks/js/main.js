// Cossacs -------------------------------------------

$(document).ready(function () {
  $(".header-slider").slick({
    arrows: false,
    draggable: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // режим плавної зміни слайдів
  });
});

// анімація lotti
var elem = document.getElementById("header-animation");
var animData = {
  container: elem,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../js/cossacs-1.json",
};
anim = lottie.loadAnimation(animData);
