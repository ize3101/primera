$(document).ready(function(){

    get_url_info();
    
    function get_url_info() {
        let by_cut = location.href;
        
        by_cut = by_cut.split("?")[1];
        
        let by_no = by_cut.split("by_no=")[1];
        sec_cut = by_no.split("&")[0]; // by_no 나오는 수
        console.log(sec_cut)
        
        let sec_no = by_cut.split("sec_no=")[1];
        console.log(sec_no)

        let sec_R_no = sec_no.split("&")[0]; // sec_no 나오는 수
        console.log(sec_R_no)

        let item_no = by_cut.split("item_no=")[1]; // item_no 나오는 수
        console.log(item_no)
        
        if(sec_cut == 0) { // by_no가 0이면 유형별

            let list =  '<div class="item_big_img">'
            list +=         '<img src="img/itempage/'+by[sec_cut]+'/'+T_sec[sec_R_no]+'/'+ITEM_LIST[0][sec_R_no][item_no-1].src+'" alt="아이템이미지">'
            list +=     '</div>'
            list +=     '<div class="item_infoNorder">'
            list +=         '<span class="d_star">★★★★☆</span>'
            list +=         '<span class="go_review">리뷰 보기</span>'
            list +=         '<div class="item_title">'+ITEM_LIST[0][sec_R_no][item_no-1].title+'</div>'
            list +=         '<div class="i_tag">'+ITEM_LIST[0][sec_R_no][item_no-1].i_tag+'</div>'
            list +=         '<div class="i_sm_desc">'+ITEM_LIST[0][sec_R_no][item_no-1].sm_desc+'</div>'
            list +=         '<div class="go_buy">구매하러 가기</div>'
            list +=     '</div>'

            $('.come_info').append(list)
        }

        else if(sec_cut == 1) { // by_no가 1이면 고민별

            let list =  '<div class="item_big_img">'
            list +=         '<img src="img/itempage/'+by[sec_cut]+'/'+W_sec[sec_R_no]+'/'+ITEM_LIST[1][sec_R_no][item_no-1].src+'" alt="아이템이미지">'
            list +=     '</div>'
            list +=     '<div class="item_infoNorder">'
            list +=         '<span class="d_star">★★★★☆</span>'
            list +=         '<span class="go_review">리뷰 보기</span>'
            list +=         '<div class="item_title">'+ITEM_LIST[1][sec_R_no][item_no-1].title+'</div>'
            list +=         '<div class="i_tag">'+ITEM_LIST[1][sec_R_no][item_no-1].i_tag+'</div>'
            list +=         '<div class="i_sm_desc">'+ITEM_LIST[1][sec_R_no][item_no-1].sm_desc+'</div>'
            list +=         '<div class="go_buy">구매하러 가기</div>'
            list +=     '</div>'

            $('.come_info').append(list)
        }

        else if(sec_cut == 2) { // by_no가 2이면 라인별

            let list =  '<div class="item_big_img">'
            list +=         '<img src="img/itempage/'+by[sec_cut]+'/'+L_sec[sec_R_no]+'/'+ITEM_LIST[2][sec_R_no][item_no-1].src+'" alt="아이템이미지">'
            list +=     '</div>'
            list +=     '<div class="item_infoNorder">'
            list +=         '<span class="d_star">★★★★☆</span>'
            list +=         '<span class="go_review">리뷰 보기</span>'
            list +=         '<div class="item_title">'+ITEM_LIST[2][sec_R_no][item_no-1].title+'</div>'
            list +=         '<div class="i_tag">'+ITEM_LIST[2][sec_R_no][item_no-1].i_tag+'</div>'
            list +=         '<div class="i_sm_desc">'+ITEM_LIST[2][sec_R_no][item_no-1].sm_desc+'</div>'
            list +=         '<div class="go_buy">구매하러 가기</div>'
            list +=     '</div>'

            $('.come_info').append(list)
        }

    }


    // 섹션 접어두기
    $('.detail_info').slideUp(0)

    // $(window).scroll(function(){
    //     let s_w_top = $(window).scrollTop();
    //     console.log(s_w_top)
    // })
    
    // 각 섹션 누르면 펼쳐지기
    $('.s_click_box').click(function(){
        $('.detail_info').stop().slideUp(300);
        $(this).next('.detail_info').stop().slideDown(500);

console.log($(this).parent().index());
        let o_top;
        if($(this).parent().index() != 0) {
            o_top = $(this).parent().prev().offset().top + $(this).height();
            // console.log(o_top)
        }
        else if($(this).parent().index() == 0) {
            o_top = $(this).parent().offset().top
        }

        $('html').animate({
            scrollTop: o_top
        }, 500)
    });


});