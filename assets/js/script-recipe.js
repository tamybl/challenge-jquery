$(document).ready( function () {
  $('.js-menu').hide();
  $('.js-show-make').click( function () {
    $('body').find('.page').addClass("make");
    $(this).addClass("active");
    $('.js-show-recipe').removeClass("active");

  })

  $('.js-show-recipe').click( function () {
    $('body').find('.page').removeClass("make");
    $(this).addClass("active");
    $('.js-show-make').removeClass("active");

  })

})