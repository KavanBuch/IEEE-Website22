/* Scroll to top */
$(document).ready(function() {
    // Show or hide the sticky footer button
    if ($(this).scrollTop() > 200) {
        $('.backtotop').fadeIn(100);
    } else {
        $('.backtotop').fadeOut(100);
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.backtotop').fadeIn(100);
        } else {
            $('.backtotop').fadeOut(100);
        }
    });
    
    /* // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    }) */
});
/* end of scroll to top */