$(document).ready( function () {
  $('.js-menu').hide();
  $('.js-show-make').click( function () {
    $('body').find('.page').addClass("make");
  })
  $('.js-show-recipe').click( function () {
    $('body').find('.page').removeClass("make");
  })

})