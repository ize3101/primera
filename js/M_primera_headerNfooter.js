$(document).ready(function(){

    // GNB 들어오고 나가기
    $('.hamberger').click(function(){
        $('.gnb').animate({
            left: 0,
        }, 500)
    });
    $('.cancle').click(function(){
        $('.gnb').animate({
            left: "-100%",
        }, 500)
    });


    // LNB의 하위메뉴 펼치기
    $('.lnb_title').click(function(){
        $('.lnb_menu').slideUp(300)
        $(this).next().next('.lnb_menu').slideDown(300);
    });

    $('.gnb_title').click(function(){
        $('.lnb_menu').slideUp(0)
    });

    
    $('.gnb_title').click(function(){
        $('.lnb_box').stop().slideUp(200)
        $(this).next('.lnb_box').stop().slideDown(200)
    })


    // 탑버튼 누르면 맨꼭대기
    $('.top_btn').click(function(){
        event.preventDefault();
        $('html').stop().animate({
            scrollTop: 0
        }, 500)
    });
})