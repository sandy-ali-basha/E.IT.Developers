$(document).ready(function () {
    $('.nav-item .nav-link').click(function () {
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
        $('.btn_hireUs').removeClass("active");
    });
});
$(document).ready(function () {
    setInterval(() => {
        $(".scrollDownIcon").addClass("animate__shakeY");
    }, 5000);
    $('.skill').hover(function () {
        $(this).addClass('animate__jello')
    }, function () {
        $(this).removeClass('animate__jello')
    })


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //>=, not <=
        if (scroll >= 200) {
            //clearHeader, not clearheader - caps H
            $(".ITBR").addClass("d-none");
        } else if (scroll < 200) $(".ITBR").removeClass("d-none");
    });
})

