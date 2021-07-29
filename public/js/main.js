$(document).ready(function () {
  $("#carousel0").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    items: 3,
    nav: true,
    loop: true,
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      960: {
        items: 2,
        dots: true,
      },
      1200: {
        items: 3,
        dots: false,
      },
    },
  });
});
