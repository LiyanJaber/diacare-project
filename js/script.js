$(document).ready(function(){
    // Page load animation
    $('body').hide().fadeIn(800);

    // Navbar color change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background-color', '#E6FFFA');
        } else {
            $('.navbar').css('background-color', '#ffffff');
        }
    });

    // Account data logic
    if($('#displayEmail').length) {
        const savedEmail = sessionStorage.getItem("userEmail") || "Guest User";
        $('#displayEmail').text(savedEmail);
    }
});

// Update message function
function fakeUpdate() {
    $('#updateMessage').fadeIn().delay(2000).fadeOut();
}
