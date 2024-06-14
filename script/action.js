setInterval(function(){
    $('.slide ul').animate({left:'-100%'}, function(){
        $('.slide li').eq(0).appendTo('.slide ul');
        $('.slide ul').css({left:0});
    });
}, 2000)



$('.board h2').eq(1).click(function(){
    $('.board h2').removeClass()
    $('.board h2').eq(1).addClass('on')

    $('.gallery').show()
    $('.notice').hide()
})

$('.board h2').eq(0).click(function(){
    $('.board h2').removeClass()
    $('.board h2').eq(0).addClass('on')

    $('.gallery').hide()
    $('.notice').show()
})


/* 팝업 */
$('.notice li').eq(0).click(function(){
    $('.popup').show();
})

$('.popup a').click(function(){
    $('.popup').hide();
})