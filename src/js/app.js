import 'slick-carousel';
import PerfectScrollbar from 'perfect-scrollbar';
$(document).ready(function(){
    var winWidth = $(window).width();
    $('.notifications-item__head').click(function() {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
        $(this).next().toggleClass('active');
    });

    $('.nav-toggle').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('.header-nav').toggleClass('active');
    });

    $('.footer-links__header').click(function(){
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });
    scrollBarSwitcher();
    slickSwitcher();
});
$(window).on('resize', function() {
    scrollBarSwitcher();
    slickSwitcher();
});

function slickSwitcher() {
    if($(window).width() <= 640) {
        $('.bloglist').slick({
            dots: true,
            arrows: false,
            infinite: false,
        });
        ps.destroy;
    }
}

function scrollBarSwitcher() {
    if($(window).width() > 640) {
        var ps = new PerfectScrollbar('.bloglist');
    }
}