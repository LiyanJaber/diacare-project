$(document).ready(function(){
    // Smooth fade in
    $('body').hide().fadeIn(800);

    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background-color', '#E6FFFA');
        } else {
            $('.navbar').css('background-color', '#ffffff');
        }
    });

    // Account page logic (Checks if the email display exists first)
    if($('#displayEmail').length > 0) {
        const savedEmail = sessionStorage.getItem("userEmail") || "Guest User";
        $('#displayEmail').text(savedEmail);
    }
});

function fakeUpdate() {
    $('#updateMessage').fadeIn().delay(2000).fadeOut();
}
