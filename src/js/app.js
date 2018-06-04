import hello from './hello';
$(document).ready(function(){
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
});
