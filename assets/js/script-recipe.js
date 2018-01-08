$(document).ready( function () {
  $('.js-menu').hide();
  $('.js-show-recipe').click( function () {
    $(this).addClass("make");
  })
  $('.js-show-make').click( function () {
    $('.js-show-recipe').removeClass("make");
  })

})