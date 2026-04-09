$(document).ready(function(){
    // 1. Global Page Transitions
    $('body').hide().fadeIn(800);

    // 2. Navbar Scroll Effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background-color', '#E6FFFA');
        } else {
            $('.navbar').css('background-color', '#ffffff');
        }
    });

    // 3. Account Page: Display Logged-in User
    if($('#displayEmail').length) {
        const savedEmail = sessionStorage.getItem("userEmail") || "Guest User";
        $('#displayEmail').text(savedEmail);
    }
});

// 4. Update Account Simulation
function fakeUpdate() {
    $('#updateMessage').fadeIn().delay(2000).fadeOut();
}
