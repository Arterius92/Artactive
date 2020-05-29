$(function () {
  $('.mini-menu').click(function () {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      $('.menu').css('right', '0');
      $('body').addClass('body-scroll-stop');
      $('.wrapper__mask').fadeIn();
    } else {
      $('.menu').css('right', '');
      $('body').removeClass('body-scroll-stop');
      $('.wrapper__mask').fadeOut();
    }
  });

  $(window).scroll(function (e) {
    if ($(this).scrollTop() > 80) {
      $('.header-container').css({
        'background-color': '#883eca',
        'padding-top': '20px',
        'padding-bottom': '20px',
      });
    } else {
      $('.header-container').css({
        'background-color': '',
        'padding-top': '',
        'padding-bottom': '',
      });
    }
  });
});
