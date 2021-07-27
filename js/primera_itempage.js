$(document).ready(function(){

    get_url_info();
    
    function get_url_info() {
        let by_cut = location.href;
        
        by_cut = by_cut.split("?")[1];
        
        let by_no = by_cut.split("by_no=")[1];
        sec_cut = by_no.split("&")[0]; // by_no 나오는 수
        
        let sec_no = by_cut.split("sec_no=")[1]; // sec_no 나오는 수
        
        
        if(sec_cut == 0) { // by_no가 0이면 유형별

            let list = '<ul class="i_cate_box">'
            list +=         '<li class="i_selec_cate">유형별 ∨</li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=0&sec_no=0">유형별</a></li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=1&sec_no=0">고민별</a></li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=2&sec_no=0">주요 라인별</a></li>'
            list +=     '</ul>'
            list +=     '<div class="product_box">'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=0">클렌징</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=1">워터/토너</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=2">세럼/에센스</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=3">에멀전</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=4">크림</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=5">아이 케어</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=6">맨</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=7">베이비</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=8">메이크업</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=9">스페셜 케어</a></div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=0&sec_no=10">기타</a></div>'
            list +=     '</div>'

            $('.i_p_nev').append(list);

            for(let i=0; i<ITEM_LIST[0].length; i++) {
                list = '<div class="cate_box" id="'+T_sec[i]+'">'
                list +=         '<div class="cate_box_L">'
                list +=             '<div class="cate_e_title">'+T_E_title_array[i]+'</div>'
                list +=             '<div class="cate_k_title">'+T_K_title_array[i]+'</div>'
                list +=             '<div class="cate_tag">'+T_title_tag[i]+'</div>'
                list +=             '<div class="cate_desc">'+T_title_desc[i]+'</div>'
                list +=         '</div>'
                list +=         '<div class="cate_box_R type1">'
                list +=             '<div class="item_container">'
                list +=             '</div>'
                list +=         '</div>'
                list +=         '</div>'
        
                $('.container').append(list);
        
                
                for(let j = 0; j < ITEM_LIST[0][i].length; j++) {               
                    list = '<div class="item_box">'
                    list +=    '<a href="primera_itemdetail.html?by_no=0&sec_no='+i+'&item_no='+ITEM_LIST[0][i][j].item_no+'">'
                    list +=         '<div class="item_img">'
                    list +=              '<img src="img/itempage/byType/'+T_sec[i]+'/'+ITEM_LIST[0][i][j].src+'" alt="">'
                    list +=          '</div>'
                    list +=          '<div class="item_title">'+ITEM_LIST[0][i][j].title+'</div>'
                    list +=     '</a>'
                    list += '</div>'

                    
                    $('.item_container').eq(i).append(list);


                }

                    $('.item_container').eq(i).css({
                        width: 320 * ITEM_LIST[0][i].length
                    })
            }

            $('html, body').animate({
                scrollTop: $('.cate_box').eq(sec_no).offset().top - 140
            }, 0)

            let tmp = navigator.userAgent.toLowerCase();
            let array = ["android", "iphone", "ipad"];
            for(let i = 0; i < array.length; i++) {
                if(tmp.match(array[i])) {
                    location.replace("http://ize3101.dothome.co.kr/M_primera_index.html?by_no=0&sec_no=0");
                }
            }
            

        }
        

        else if(sec_cut == 1) { // by_no가 1이면 고민별

            let list = '<ul class="i_cate_box">'
            list +=         '<li class="i_selec_cate">고민별 ∨</li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=0&sec_no=0">유형별</a></li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=1&sec_no=0">고민별</a></li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=2&sec_no=0">주요 라인별</a></li>'
            list +=     '</ul>'
            list +=     '<div class="product_box">'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=1&sec_no=0">수분/보습</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=1&sec_no=1">주름/탄력개선</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=1&sec_no=2">진정/민감 케어</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=1&sec_no=3">모공 케어</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=1&sec_no=4">자외선 차단</div>'
            list +=     '</div>'

            $('.i_p_nev').append(list);

            for(let i=0; i<ITEM_LIST[1].length; i++) {
                let list = '<div class="cate_box" id="'+W_sec[i]+'">'
                list +=         '<div class="cate_box_L">'
                list +=             '<div class="cate_e_title">'+W_E_title_array[i]+'</div>'
                list +=             '<div class="cate_k_title">'+W_K_title_array[i]+'</div>'
                list +=             '<div class="cate_tag">'+W_title_tag[i]+'</div>'
                list +=             '<div class="cate_desc">'+W_title_desc[i]+'</div>'
                list +=         '</div>'
                list +=         '<div class="cate_box_R type1">'
                list +=             '<div class="item_container">'
                list +=             '</div>'
                list +=         '</div>'
                list +=         '</div>'
        
                $('.container').append(list);
        
                
                for(let j = 0; j < ITEM_LIST[1][i].length; j++) {               
                    list = '<div class="item_box">'
                    list +=    '<a href="primera_itemdetail.html?by_no=1&sec_no='+i+'&item_no='+ITEM_LIST[1][i][j].item_no+'">'
                    list +=         '<div class="item_img">'
                    list +=              '<img src="img/itempage/byWorries/'+W_sec[i]+'/'+ITEM_LIST[1][i][j].src+'" alt="">'
                    list +=          '</div>'
                    list +=          '<div class="item_title">'+ITEM_LIST[1][i][j].title+'</div>'
                    list +=     '</a>'
                    list += '</div>'

                    
                    $('.item_container').eq(i).append(list);


                }

                    $('.item_container').eq(i).css({
                        width: 320 * ITEM_LIST[1][i].length
                    })
            }

            $('html, body').animate({
                scrollTop: $('.cate_box').eq(sec_no).offset().top - 140
            }, 0)


            let tmp = navigator.userAgent.toLowerCase();
            let array = ["android", "iphone", "ipad"];
            for(let i = 0; i < array.length; i++) {
                if(tmp.match(array[i])) {
                    location.replace("http://ize3101.dothome.co.kr/M_primera_index.html?by_no=1&sec_no=0");
                }
            }
        }

        else if(sec_cut == 2) { // by_no가 2이면 라인별

            let list = '<ul class="i_cate_box">'
            list +=         '<li class="i_selec_cate">주요 라인별 ∨</li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=0&sec_no=0">유형별</a></li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=1&sec_no=0">고민별</a></li>'
            list +=         '<li class="i_cate"><a href="primera_itempage.html?by_no=2&sec_no=0">주요 라인별</a></li>'
            list +=     '</ul>'
            list +=     '<div class="product_box">'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=0">알파인 베리 워터리</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=1">와일드 씨드 퍼밍</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=2">페이셜 필링</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=3">미라클</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=4">슈퍼 블랙 씨드</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=5">리페어빈 시카</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=6">오가니언스</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=7">와일드 피치 포어</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=8">스킨릴리프 선</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=9">버블 클렌징</div>'
            list +=         '<div class="p_name"><a href="primera_itempage.html?by_no=2&sec_no=10">마스크/기타</a></div>'
            list +=     '</div>'

            $('.i_p_nev').append(list);

            for(let i=0; i<ITEM_LIST[2].length; i++) {
                let list = '<div class="cate_box" id="'+L_sec[i]+'">'
                list +=         '<div class="cate_box_L">'
                list +=             '<div class="cate_e_title">'+L_E_title_array[i]+'</div>'
                list +=             '<div class="cate_k_title">'+L_K_title_array[i]+'</div>'
                list +=             '<div class="cate_tag">'+L_title_tag[i]+'</div>'
                list +=             '<div class="cate_desc">'+L_title_desc[i]+'</div>'
                list +=         '</div>'
                list +=         '<div class="cate_box_R type1">'
                list +=             '<div class="item_container">'
                list +=             '</div>'
                list +=         '</div>'
                list +=         '</div>'
        
                $('.container').append(list);
        
                
                for(let j = 0; j < ITEM_LIST[2][i].length; j++) {            
                    list = '<div class="item_box">'
                    list +=    '<a href="primera_itemdetail.html?by_no=2&sec_no='+i+'&item_no='+ITEM_LIST[2][i][j].item_no+'">'
                    list +=         '<div class="item_img">'
                    list +=              '<img src="img/itempage/byLine/'+L_sec[i]+'/'+ITEM_LIST[2][i][j].src+'" alt="">'
                    list +=          '</div>'
                    list +=          '<div class="item_title">'+ITEM_LIST[2][i][j].title+'</div>'
                    list +=     '</a>'
                    list += '</div>'

                    
                    $('.item_container').eq(i).append(list);


                }

                    $('.item_container').eq(i).css({
                        width: 320 * ITEM_LIST[2][i].length
                    })
            }
        }

        $('html, body').animate({
            scrollTop: $('.cate_box').eq(sec_no).offset().top - 140
        }, 0)

        let tmp = navigator.userAgent.toLowerCase();
        let array = ["android", "iphone", "ipad"];
        for(let i = 0; i < array.length; i++) {
            if(tmp.match(array[i])) {
                location.replace("M_primera_index.html?by_no=2&sec_no=0");
            }
        }
        
    }
    
    // let s_top = $(window).scrollTop();
    $('.p_name').click(function(){
        event.preventDefault();
        // href로 해당 섹션 o_top 이용
        let href = $(this).children('a').attr('href');
        let sec_no = href.split("sec_no=")[1];

        let o_top = $('.cate_box').eq(sec_no).offset().top;
        console.log(sec_no)

        $('html').animate({
            scrollTop: o_top - (80 + 60)
        }, 500)

    })
});