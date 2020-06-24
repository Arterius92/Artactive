$(function () {
  function ibg() {
    $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
        $(this).css(
          'background-image',
          'url("' + $(this).find('img').attr('src') + '")'
        );
      }
    });
  }
  ibg();

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

  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $('.header-container').css({
        background: 'rgba(136, 62, 202, 0.9)',
        'padding-top': '20px',
        'padding-bottom': '20px',
      });
    } else {
      $('.header-container').css({
        background: '',
        'padding-top': '',
        'padding-bottom': '',
      });
    }
  });

  $('.services-slider').hubSlider({
    selector: $('.services-slider__slide'),
    button: {
      next: $('.services-slider__next'),
      prev: $('.services-slider__prev'),
    },
    auto: false,
  });

  $('.recall-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    nextArrow: $('.recall-slider__next'),
    prevArrow: $('.recall-slider__prev')
  });
});
