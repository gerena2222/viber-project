var $owl = $("#carousel1");
$owl.children().each(function (index) {
  $(this).attr("data-position", index);
});
$(document).ready(function () {
  $("#carousel1").owlCarousel({
    loop: false,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
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
        dots: true,
      },
    },
  });
  $(document).on("click", ".owl-item>div", function () {
    var $speed = 1000;
    $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
  });
});
