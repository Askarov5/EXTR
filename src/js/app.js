import 'slick-carousel';
import PerfectScrollbar from 'perfect-scrollbar';

var ps;

$(document).ready(function(){
    //Click Hangles
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

    //Call Functions
    if($(document).width() <= 640) {
        slickSwitcher();
    } else {
        scrollBarSwitcher();
    }

});

//Handle Window Resize
$(window).on('resize', function() {
    //Call Functions
    if($(document).width() <= 640) {
        slickSwitcher();
    } else {
        scrollBarSwitcher();
    }
});

//Additional Functions
function scrollBarSwitcher() {
    ps = new PerfectScrollbar('.bloglist');
}

function slickSwitcher() {
        //Destroy Scroll
        ps = null;
        $('bloglist').removeClass('ps');
        $('.ps__rail-x', '.ps__rail-y').remove();

        //Init Slick
        $('.bloglist').slick({
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                  breakpoint: 4000,
                  settings: 'unslick'
                },
                {
                    breakpoint: 640,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                    }
                },
            ]
        });  
}

