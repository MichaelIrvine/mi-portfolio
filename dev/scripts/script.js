jQuery(document).ready(function ($) {
    // For the desktop menu button
    $('.menu-box-btn').click(function () {
        $('.menu-box').toggleClass('is-active')
    })

    // For the mobile menu
    $('.menu-box-btn_mobile').click(function () {
        $('.menu-box_mobile').toggleClass('mobile-active')
    })
    
    
});