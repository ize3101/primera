$(document).ready(function(){
    let tmp = navigator.userAgent.toLowerCase();
    let array = ["android", "iphone", "ipad"];
    for(let i = 0; i < array.length; i++) {
        if(tmp.match(array[i])) {
            location.replace("http://ize3101.dothome.co.kr/M_index.html");
        }
    }


    // MAIN BANNER
    let b_index_no = 1;
    let b_length = $('.banner').length;
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

        
        // MAIN BANNER 텍스트
        $('.banner_title').css({
            transform: 'translateY(-100%)',
            transition: 'all 0s',
            opacity: 0,

        })
        setTimeout(function(){
            $('.banner_title').css({
                transform: 'translateY(0)',
                transition: 'all 0.3s',
                opacity: 1,
            })
        }, 400)

        $('.banner_desc').css({
            transform: 'translateY(100%)',
            transition: 'all 0s',
            opacity: 0,
        })
        setTimeout(function(){
            $('.banner_desc').css({
                transform: 'translateY(0)',
                transition: 'all 0.3s',
                opacity: 1,
            })
        }, 800)

    }, 5000)

   
    $(window).scroll(function(){
        let w_s_top = $(window).scrollTop();
        let i_b_length = $('.item_box').length;
        let i_b_no = 0;
        let sp_no = 0;
        let sp_length = $('.s_p_item_box').length;

        // console.log(w_s_top)

         // BEST SELLERS 타이틀
        if(w_s_top >= 500) {
            $('.b_title_txt').css({
                marginTop: '100px',
                transition: 'all 0.5s',
                opacity: 1
            })
        }

        // SPECIAL PRODUCT 타이틀
        if(w_s_top >= 1200) {
            $('.s_p_title_txt').css({
                marginTop: '100px',
                transition: 'all 0.5s',
                opacity: 1
            })
        }
        
        // MAGAZINE 타이틀
        if(w_s_top >= 2100) {
            $('.m_title_txt').css({
                marginTop: '100px',
                transition: 'all 0.5s',
                opacity: 1
            })
        }

        setInterval(function(){
            if(w_s_top >= 600) {
                // console.log(i_b_length)
                $('.item_box').eq(i_b_no % i_b_length).css({
                    marginTop: 0,
                    transition: 'all 0.5s',
                    opacity: 1
                })
    
            }
            i_b_no++;
            
        }, 100)



        // 스크롤 하면 중간 로고 움직이기
        let w_top = $(document).height();
        let s_value = (3000 * w_s_top) / w_top
        // console.log(s_value)
        
        $('.logo_scroll').css({
            left: -1 * s_value
        })

        setInterval(function(){
            if(w_s_top >= 1350) {
                $('.s_p_item_box').eq(sp_no % sp_length).css({
                    marginTop: '0',
                    transition: 'all 0.5s',
                    opacity: 1
                })
            }
            sp_no++;
            
        }, 100)
        
        
        
    });

    // 호버 하면 best item 텍스트 올라오기
    $('.item_box').hover(function(){
        $(this).find('.i_txt_box').css({
            transition: 'all 0.5s',
            bottom: 0
        })
    }, function(){
        $(this).find('.i_txt_box').css({
            transition: 'all 0.5s',
            bottom: '-120px'
        })
    });

    // 호버 하면 special product 올라오기
    $('.s_p_item_box').hover(function(){
        $(this).css({
            transition: 'all 0.5s',
            transform: 'translateY(-50px)'
        })
    }, function(){
        $(this).css({
            transition: 'all 0.5s',
            transform: 'translateY(0)'
        })
    });

    // setInterval(function(){
    //     $('.scroll').css({
    //         transform: 'translateY(-50%)'
    //     })
    // }, 500)

    // $('.m_small_thum').click(function(){
    //     let sm_thum_no = $(this).index();
        
    //     $(sm_thum_no).eq()
        // console.log(sm_thum_no)
    // })
    
    // 매거진 큰 썸네일 바꿔 주기
    $('.m_small_thum').mouseenter(function(){
        let chg_img = $(this).children('img').attr('src')
        console.log(chg_img);

        $('.m_big_thum > img').attr('src', chg_img);
    })
    
});