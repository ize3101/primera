$(document).ready(function(){

    // gnb에 호버하면 판 펼쳐지게
    $('.gnb_menu, .lnb_pan').mouseenter(function(){
        $('.lnb_pan').addClass('pan_active');

        if(!$(this).hasClass('lnb_pan')) {
            $('.lnb_menu').removeClass('pan_item_active');
            $('.lnb_menu').eq($(this).index()).addClass('pan_item_active');
        }
    });

    $('.gnb_menu, .lnb_pan').mouseleave(function(){
        $('.lnb_pan').removeClass('pan_active')
    });

    // lnb 각 카테고리에 호버하면 하위 메뉴 보이기
    $('.lnb_title').mouseenter(function(){
        // $(this).nextAll('.lnb_box').addClass('lnb_box_active');
        // $(this).nextAll('.lnb_box').slideDown(300);
        $('.lnb_box').stop().slideUp(300)
        $(this).next().next('.lnb_box').stop().slideDown(300);
    });

    $('.gnb_menu').mouseenter(function(){
        $('.lnb_box').stop().slideUp(0)
    })


    // top, bot 버튼 이동
setTimeout(function(){
    let d_height = $(document).height();
    let w_height = $(window).height();
    let bot_move = d_height - w_height;
// $(document).on('click','.top',function(){
//     d_height = $(document).height();
//     w_height = $(window).height();
//     bot_move = d_height - w_height;
//     $('html').animate({
//         scrollTop: 0
//     }, 500)
// })
// $(document).on('click','.bot',function(){
//     d_height = $(document).height();
//     w_height = $(window).height();
//     bot_move = d_height - w_height;

//     $('html').animate({
//         scrollTop: bot_move
//     }, 500)
// })
    $('.top').click(function(){
        event.preventDefault();
        $('html').stop().animate({
            scrollTop: 0
        }, 500)
    });
    $('.bot').click(function(){
        $('html').stop().animate({
            scrollTop: bot_move 
        }, 500)
        console.log(d_height)
        console.log(w_height)
    });

}, 100)
})