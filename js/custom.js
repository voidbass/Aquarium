$(document).ready(function(){
    new WOW().init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:6
            }
        }
    });

    $('.nav-item a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100
        }, 1000);
        event.preventDefault();
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.navbar').addClass('my-header');
        } else {
            $('.navbar').removeClass('my-header');
        }
    });

    $("#btn-chat-onl").click(function() {
        $("#chat-onl").toggleClass("open");
    });

});