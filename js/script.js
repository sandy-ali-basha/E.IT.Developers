$(document).ready(function () {
    setInterval(() => {
        $(".scrollDownIcon").addClass("animate__shakeY");
    }, 5000);


    $('.skill').hover(function () {
        $(this).addClass('animate__jello')
    }, function () {
        $(this).removeClass('animate__jello')
    })
})