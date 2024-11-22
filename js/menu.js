$(function () {

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.header .gnb>ul>li ul').removeAttr('style')
    })
})

