$(function () {
    // Слайдер блока "Services"

    $('.services-slider').hubSlider({
        selector: $('.services-slider__slide'),
        button: {
            next: $('.services-slider__next'),
            prev: $('.services-slider__prev'),
        },
        auto: true,
        opacityStep: 0.45,
    });
    //-----------------------------------------------------------------------------------
    // Слайдер блока "Recall"

    $('.recall-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        adaptiveHeight: true,
        variableWidth: true,
        nextArrow: $('.recall-slider__next'),
        prevArrow: $('.recall-slider__prev'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    variableWidth: false,
                    centerPadding: '18px',
                },
            },
            {
                breakpoint: 600,
                settings: {
                    variableWidth: false,
                    centerPadding: '0px',
                },
            },
        ],
    });
});
