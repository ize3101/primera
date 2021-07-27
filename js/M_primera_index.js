$(document).ready(function(){
    let b_index_no = 1;
    let b_length = $('.banner').length;

    // 메인배너 나오기
    setInterval(function(){
        $('.banner').eq(b_index_no % b_length).animate({
            opacity: 1,
            pointerEvents: 'auto'
        }, 300)
        $('.banner').eq((b_index_no - 1) % b_length).animate({
            opacity: 0,
            pointerEvents: 'none'
        }, 300)

        b_index_no++;
    }, 5000);


    // SPECIAL PRODUCT 슬라이드
    // let sp_banner_no = 1;
    let sp_banner_length = $('.sp_i_img').length;

    // function btn_init(){
    //     $('.arrow').css({ pointerEvents: 'none'});
    
    //     setTimeout(function(){
    //         $('.arrow').css({ pointerEvents: 'auto'});
    //     }, 4000)
    // }

    // setInterval(function(){
    //     $('.sp_item_box').eq(sp_banner_no % sp_banner_length).css({
    //         left: '100%'
    //     }).animate({
    //         left: 0
    //     }, 2000);
    //     $('.sp_item_box').eq((sp_banner_no - 1) % sp_banner_length).animate({
    //         left:'-100%'
    //     }, 2000);

    //     sp_banner_no++;
    // }, 4000)

    // 버튼 누르면 슬라이드 움직이기
    function btn_init() {
        $('.arrow').css('pointerEvents' , 'none');
        setTimeout(function(){
            $('.arrow').css('pointerEvents' , 'auto');
        }, 1000)
    }

    let index_no = 1;
    $('#a_R').click(function(){
        btn_init();

        $('.sp_item_box').eq( index_no % sp_banner_length ).css({left: '100%'}).animate({
            left: 0
        }, 1000);
    
        // 나갈판 
        $('.sp_item_box').eq( (index_no - 1) % sp_banner_length ).animate({
            left: '-100%'
        }, 1000);

        index_no+=1; 
    });

    $('#a_L').click(function(){
        btn_init();

        index_no-=1;

        $('.sp_item_box').eq((index_no - 1) % sp_banner_length ).css({left: '-100%'}).animate({
            left: 0
        }, 1000);
    
        // 나갈판 
        $('.sp_item_box').eq(index_no % 3 % sp_banner_length ).animate({
            left: '100%'
        }, 1000);
    });

    

    // $('#a_R').click(function(){
    //     btn_init();
    
    //     $('.sp_item_box').eq(sp_banner_no % sp_banner_length).css({
    //         left: '100%'
    //     }).animate({
    //         left: 0
    //     }, 2000);
    //     slide(index % b_count, '100%', (index - 1) % b_count, '-100%');
        
    
    //     sp_banner_no+=1;
    // })
    
    // $('#a_L').click(function(){
    //     btn_init();
    //     sp_banner_no-=1; 
    
    //     slide((index - 1) % b_count, '-100%', index % b_count, '100%')
    // })


    let ps_item_w = $('.ps_item').width();
    $('.ps_item_cover').css({
        width: 250 * $('.ps_item').length
    });

});