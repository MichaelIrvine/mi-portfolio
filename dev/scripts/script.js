jQuery(document).ready(function ($) {

    console.log($);

    $('.menu-box-btn').click(function () {
        $('.menu-box').toggleClass('is-active')
    })

    $('.menu-box-btn_mobile').click(function () {
        $('.menu-box_mobile').toggleClass('mobile-active')
    })

    // logo color change on menu slide in
    if ($('.menu-box').hasClass('is-active')){
        $('.logo-primary').css({'background-color' : 'white'});
    }

});