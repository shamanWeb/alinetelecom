jQuery(document).ready(function ($) {
//Menu
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('open');
    });
    $('a.nav-link').each(function () {
        if ('http://' + location.host + '/' + $(this).attr('href') == window.location.href)
        {
            $(this).addClass('active');
        }
    });
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= 20) {
            $('#mainNav').addClass('mrgn');
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').removeClass('open');
        } else {
            $('#mainNav').removeClass('mrgn');
        }
        if (window.pageYOffset >= 50) {
            $('#mainNav').addClass('bg-color');
        } else {
            $('#mainNav').removeClass('bg-color');
        }
    });
    $('#mainNav').hover(function () {
        //$(this).removeClass('mrgn');
    });

//Slider 
    $('.slider').slick({
        arrows: false,
        autoplay: true,

        slidesToShow: 5,
        responsive: [{
                breakpoint: 992,
                settings: {
                    mobileFirst: true,
                    slidesToShow: 3

                }
            },
            {
                breakpoint: 768,
                settings: {
                    mobileFirst: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 374,
                settings: {
                    mobileFirst: true,
                    slidesToShow: 1
                }
            }]
    });
    //Map   
    $('.office').click(function () {
        $('.map-holder').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.1746336331857!2d39.225219715776866!3d51.69324927966616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413b2f6c22ce75ff%3A0x7b4325d8290dbc90!2z0YPQuy4g0JPQtdGA0L7QtdCyINCg0LXQstC-0LvRjtGG0LjQuCwgMTM20JEsINCS0L7RgNC-0L3QtdC2LCDQktC-0YDQvtC90LXQttGB0LrQsNGPINC-0LHQuy4sIDM5NDA0Mw!5e0!3m2!1sru!2sru!4v1535641490982" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
    });
    $('.prod').click(function () {
        $('.map-holder').html('<iframe src="https://yandex.ru/map-widget/v1/-/CBBIqIX00A" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>');
    });
///
});