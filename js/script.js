$(document).ready(function () {
    $('.ViewMore').click(function () {
        $('.portfolioCard').removeClass("d-none");
        $(this).addClass('d-none')
    });
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




$('.filters a').click(function () {
    $('.filters a').removeClass('PSectionActive');
    $(this).addClass('PSectionActive');

    var data = $(this).attr('data-filter');
    $grid.isotope({
        filter: data
    })
});

var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
        columnWidth: ".all"
    }
})
$(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();
    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
});