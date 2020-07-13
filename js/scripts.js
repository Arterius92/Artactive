$(function () {
    // Функция изменения img в background

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
    //-----------------------------------------------------------------------------------
    // Гамбургер меню

    $('.mini-menu').click(function () {
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $('.menu').css('right', '0');
            $('body').addClass('body-scroll-stop');
            $('.mask').fadeIn();
        } else {
            $('.menu').css('right', '');
            $('body').removeClass('body-scroll-stop');
            $('.mask').fadeOut();
        }
    });
    //-----------------------------------------------------------------------------------
    // Открытие модального окна "Обратный звонок" и маски по клику на кнопки

    $('.callback__btn, .home__order-btn, .services-first__btn, .services-second__btn').click(function () {
        if ($('.mini-menu').hasClass('open')) {
            $('.mask').css('z-index', '999');
            $('.mask, .modal').fadeIn();
        } else {
            $('.mask').css('z-index', '');
            $('.mask, .modal').fadeIn();
        }
    });

    $('.mask, .modal__close').click(function () {
        if ($('.mini-menu').hasClass('open')) {
            $('.modal').fadeOut();
            $('.mask').css('z-index', '');
        } else {
            $('.mask, .modal').fadeOut();
        }
    });

    //-----------------------------------------------------------------------------------
    // Появление фиксированной шапки при скролле окна

    menuHead();
    $(window).scroll(function () {
        menuHead();
    });
    function menuHead() {
        if ($(window).scrollTop() > 80) {
            $('.container--header').css({
                background: 'rgba(136, 62, 202, 0.9)',
                'padding-top': '20px',
                'padding-bottom': '20px',
            });
        } else {
            $('.container--header').css({
                background: '',
                'padding-top': '',
                'padding-bottom': '',
            });
        }
    }
    //-----------------------------------------------------------------------------------

    dotNav();
    $(window).scroll(function (e) {
        dotNav();
    });
    $('.circle__home').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
    $('.circle__about').click(function () {
        $('html, body').animate({ scrollTop: $('#about').offset().top }, 500);
        return false;
    });
    $('.circle__services').click(function () {
        $('html, body').animate(
            { scrollTop: $('#services').offset().top },
            500
        );
        return false;
    });
    $('.minus__services-first').click(function () {
        $('html, body').animate(
            { scrollTop: $('#services-first').offset().top },
            500
        );
        return false;
    });
    $('.minus__services-second').click(function () {
        $('html, body').animate(
            { scrollTop: $('#services-second').offset().top },
            500
        );
        return false;
    });
    $('.minus__services-third').click(function () {
        $('html, body').animate(
            { scrollTop: $('#services-third').offset().top },
            500
        );
        return false;
    });
    $('.circle__recall').click(function () {
        $('html, body').animate({ scrollTop: $('#recall').offset().top }, 500);
        return false;
    });
    $('.circle__faq').click(function () {
        $('html, body').animate({ scrollTop: $('#faq').offset().top }, 500);
        return false;
    });
    $('.circle__contact').click(function () {
        $('html, body').animate(
            { scrollTop: $('#contact').offset().top },
            500
        );
        return false;
    });
});

function dotNav() {
    let section1Top = 0,
        section2Top =
            $('.about').offset().top -
            ($('.services').offset().top - $('.about').offset().top) / 2,
        section3Top =
            $('.services__first').offset().top -
            ($('.services__second').offset().top -
                $('.services__first').offset().top) /
                2,
        section4Top =
            $('.services__second').offset().top -
            ($('.services__third').offset().top -
                $('.services__second').offset().top) /
                2,
        section5Top =
            $('.services__third').offset().top -
            ($('.recall').offset().top - $('.services__third').offset().top) /
                2,
        section6Top =
            $('.recall').offset().top -
            ($('.faq').offset().top - $('.recall').offset().top) / 2,
        section7Top =
            $('.faq').offset().top -
            ($('.contact').offset().top - $('.faq').offset().top) / 2,
        section8Top =
            $('.contact').offset().top -
            ($(document).height() - $('.contact').offset().top) / 2;

    $('.circle').removeClass('circle--active');
    $('.minus').removeClass('minus--active');
    if (
        $(document).scrollTop() >= section1Top &&
        $(document).scrollTop() < section2Top
    ) {
        $('.circle__home').addClass('circle--active');
    } else if (
        $(document).scrollTop() >= section2Top &&
        $(document).scrollTop() < section3Top
    ) {
        $('.circle__about').addClass('circle--active');
    } else if (
        $(document).scrollTop() >= section3Top &&
        $(document).scrollTop() < section4Top
    ) {
        $('.circle__services').addClass('circle--active');
        $('.minus__services-first').addClass('minus--active');
    } else if (
        $(document).scrollTop() >= section4Top &&
        $(document).scrollTop() < section5Top
    ) {
        $('.circle__services').addClass('circle--active');
        $('.minus__services-second').addClass('minus--active');
    } else if (
        $(document).scrollTop() >= section5Top &&
        $(document).scrollTop() < section6Top
    ) {
        $('.circle__services').addClass('circle--active');
        $('.minus__services-third').addClass('minus--active');
    } else if (
        $(document).scrollTop() >= section6Top &&
        $(document).scrollTop() < section7Top
    ) {
        $('.circle__recall').addClass('circle--active');
    } else if (
        $(document).scrollTop() >= section7Top &&
        $(document).scrollTop() < section8Top
    ) {
        $('.circle__faq').addClass('circle--active');
    } else if ($(document).scrollTop() >= section8Top) {
        $('.circle__contact').addClass('circle--active');
    }
}
