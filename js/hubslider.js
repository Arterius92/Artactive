jQuery.fn.hubSlider = function (config) {
  let settings = jQuery.extend(
    {
      selector: null,
      button: {
        next: null,
        prev: null,
      },
      opacity: 1,
      opacityStep: 0.2,
      startOffset: 26,
      offset: 0,
      scale: 1,
      scaleStep: '0.05',
      transition: '0.6s',
      auto: false,
      time: 3,
    },
    config
  );

    let they = this,
        zindex = they.find(settings.selector).length,
        array = [];

    if (settings.selector === null || settings.selector == '') {
      console.error('Error, specify selector!');
    }

    they.find(settings.selector).map(function (k) {
      they.find(settings.selector).eq(k).css({
          'z-index': zindex,
          'top': -settings.offset,
          'transform': 'scale(' + settings.scale + ')',
          '-webkit-transform': 'scale(' + settings.scale + ')',
          '-moz-transform': 'scale(' + settings.scale + ')',
          '-ms-transform': 'scale(' + settings.scale + ')',
          '-o-transform': 'scale(' + settings.scale + ')',
        }).attr('data-key', k);

      settings.scale -= settings.scaleStep;
      
      if (k === 0) {
        zindex -= k + 1;
        settings.selector.eq(k).css('box-shadow', '0 23px 32px rgba(81, 8, 86, 0.23)');
      } else {
        zindex -= k;
        settings.selector.eq(k).css('box-shadow', '');
      }

      if($(window).width() <= 600) {
        settings.startOffset = 13;
      } else if($(window).width() > 600) {
        settings.startOffset = 26;
      }

      settings.offset += settings.startOffset

      if (k + 1 <= they.find(settings.selector).length) {
        they.find(settings.selector).eq(k).css({'opacity': settings.opacity});
        settings.opacity -= settings.opacityStep;
      }

    });

    let movement = (e) => {
      they.find(settings.selector).map(function(key) {

        let num = $(this).attr('data-key'),
            desc = $('.services-slider__text'),
            attr = null;
            
        if (e == 'next') {

          attr = they.find(settings.selector).eq(key - 1).attr('style');

          if (num != '0') {
            $(this).attr('data-key', parseFloat(num) - 1);
          } else {
            $(this).attr('data-key',parseFloat(they.find(settings.selector).length) - 1);
          }
          if($(this).attr('data-key') == '0') {
            $(this).children().addClass('active');
          } else {
            $(this).children().removeClass('active')
          }

        } else if (e == 'prev') {

          if (key >= parseFloat(they.find(settings.selector).length) - 1) {
            key = -1;
          }

          attr = they.find(settings.selector).eq(key + 1).attr('style');

          if (num < parseFloat(they.find(settings.selector).length) - 1) {
            $(this).attr('data-key', parseFloat(num) + 1);
          } else {
            $(this).attr('data-key', 0);
          }
          if($(this).attr('data-key') == '0') {
            $(this).children().addClass('active');
          } else {
            $(this).children().removeClass('active')
          }
          
        }

        if($(this).children().hasClass('active')) {
          desc.text($(this).children('.active')[0].alt);
        }

        array.push(attr);

      });

      they.find(settings.selector).map(function (numeric) {
        $(this).attr('style', array[numeric]).css({
          'transition': settings.transition,
          '-webkit-transition': settings.transition,
          'transform-style': 'flat',
          '-webkit-transform-style': 'flat',
        });
      });
      array.length = 0;
    }

    if (settings.button.next === null || (settings.button.next == '' && settings.button.prev === null) || settings.button.prev == '') {
      console.error('Error, button specify selector!')
    }

    settings.button.next.click(() => {movement('next')})

    settings.button.prev.click(() => {movement('prev')})

    if (settings.auto === true) {
      if (settings.time === null || settings.time == '') {
        console.error('Error, time specify selector!')
      }
      they.interval = setInterval(function() {movement('next')}, settings.time * 1000);
      they.hover(
        () => {
          clearInterval(they.interval);
          they.interval = null;
        },
        () => {
          they.interval = setInterval(function() {
            movement('next')
          }, settings.time * 1000)}
      )
    }
};
