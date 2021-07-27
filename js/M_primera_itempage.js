$(document).ready(function(){

    get_url_info();
    function get_url_info(key) {
        let by_cut = location.href;
        
        by_cut = by_cut.split("?")[1];
        
        let by_no = by_cut.split("by_no=")[1];
        sec_cut = by_no.split("&")[0]; // by_no 나오는 수
        
        let sec_no = by_cut.split("sec_no=")[1]; // sec_no 나오는 수
        
        if(sec_cut==0) { // 0이면 유형별
            
            let list = '<ul class="i_cate_box">'
            list +=         '<li class="i_selec_cate">유형별 ∨</li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempagehtml?by_no=0&sec_no=0">유형별</a></li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempage.html?by_no=1&sec_no=0">고민별</a></li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempage.html?by_no=2&sec_no=0">주요 라인별</a></li>'
            list +=     '</ul>'

            list +=     '<div class="product_box">'
            list +=         '<div class="pb_container">'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=0">클렌징</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=1">워터/토너</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=2">세럼/에센스</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=3">에멀전</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=4">크림</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=5">아이 케어</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=6">맨</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=7">베이비</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=8">메이크업</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=9">스페셜 케어</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=0&sec_no=10">기타</a></div>'
            list +=         '</div>'
            list +=      '</div>'

            $('.i_p_nav').append(list);

            for(let i=0; i<ITEM_LIST[0].length; i++) { // 유형별 안에 있는 것만큼 돌아야함
                let list = '<div class="item_sec" id="'+T_sec[i]+'">'
                list +=         '<div class="item_s_txt">'
                list +=             '<span class="sec_title">'+T_K_title_array[i]+'</span>'
                list +=             '<span class="sec_no">'+T_E_title_array[i]+'</span>'
                list +=             '<div class="sec_tag">'+T_title_tag[i]+'</div>'
                list +=         '</div>'
                list +=         '<div class="sec_item_box">'
                list +=             '<div class="item_container">'
                list +=             '</div>'
                list +=         '</div>'
                list +=     '</div>'

                
                $('.container').append(list);

                for(let j = 0; j < ITEM_LIST[0][i].length; j++) { // 타입별 안에 있는 것만큼 돌아야함
                    let list =  '<div class="item_box">'
                    list +=         '<a href="M_primera_itemdetail.html?by_no=0&sec_no='+i+'&item_no='+ITEM_LIST[0][i][j].item_no+'">'
                    list +=             '<div class="item_img">'
                    list +=                 '<img src="img/itempage/byType/'+T_sec[i]+'/'+ITEM_LIST[0][i][j].src+'" alt="아이템이미지">'
                    list +=             '</div>'
                    list +=             '<div class="item_title">'+ITEM_LIST[0][i][j].title+'</div>'
                    list +=         '</a>'
                    list +=     '</div>'
                    
                    $('.item_container').eq(i).append(list);
                }


                $('.item_container').eq(i).css({
                    width: 350 * ITEM_LIST[0][i].length
                })
            }

            let t_width=0;
            for (let i=0; i< $('.p_name').length; i++) {
                console.log(t_width)
                t_width += Number($('.p_name').eq(i).width()+20.5);
            }

            $('.pb_container').css({
                width: t_width
            })

            // $('html, body').animate({
            //     scrollTop: $('.item_sec').eq(sec_no).offset().top - 90
            // }, 1000)
        }

        else if(sec_cut==1) {
            let list = '<ul class="i_cate_box">'
            list +=         '<li class="i_selec_cate">고민별 ∨</li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempage.html?by_no=0&sec_no=0">유형별</a></li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempage.html?by_no=1&sec_no=0">고민별</a></li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempage.html?by_no=2&sec_no=0">주요 라인별</a></li>'
            list +=     '</ul>'

            list +=     '<div class="product_box">'
            list +=         '<div class="pb_container">'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=1&sec_no=0">수분/보습</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=1&sec_no=1">주름/탄력개선</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=1&sec_no=2">진정/민감 케어</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=1&sec_no=3">모공 케어</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=1&sec_no=4">자외선 차단</a></div>'
            list +=         '</div>'
            list +=      '</div>'

            $('.i_p_nav').append(list);

            for(let i=0; i<ITEM_LIST[1].length; i++) { // 유형별 안에 있는 것만큼 돌아야함
                let list = '<div class="item_sec" id="'+W_sec[i]+'">'
                list +=         '<div class="item_s_txt">'
                list +=             '<span class="sec_title">'+W_K_title_array[i]+'</span>'
                list +=             '<span class="sec_no">'+W_E_title_array[i]+'</span>'
                list +=             '<div class="sec_tag">'+W_title_tag[i]+'</div>'
                list +=         '</div>'
                list +=         '<div class="sec_item_box">'
                list +=             '<div class="item_container">'
                list +=             '</div>'
                list +=         '</div>'
                list +=     '</div>'

                
                $('.container').append(list);

                for(let j = 0; j < ITEM_LIST[1][i].length; j++) { // 타입별 안에 있는 것만큼 돌아야함
                    let list =  '<div class="item_box">'
                    list +=         '<a href="M_primera_itemdetail.html?by_no=1&sec_no='+i+'&item_no='+ITEM_LIST[1][i][j].item_no+'">'
                    list +=             '<div class="item_img">'
                    list +=                 '<img src="img/itempage/byWorries/'+W_sec[i]+'/'+ITEM_LIST[1][i][j].src+'" alt="아이템이미지">'
                    list +=             '</div>'
                    list +=             '<div class="item_title">'+ITEM_LIST[1][i][j].title+'</div>'
                    list +=         '</a>'
                    list +=     '</div>'
                    
                    $('.item_container').eq(i).append(list);
                }



                $('.item_container').eq(i).css({
                    width: 350 * ITEM_LIST[1][i].length
                })
            }

            let t_width=0;
            for (let i=0; i< $('.p_name').length; i++) {
                console.log(t_width)
                t_width += Number($('.p_name').eq(i).width()+20.5);
            }

            $('.pb_container').css({
                width: t_width
            })
            // $('html, body').animate({
            //     scrollTop: $('.item_sec').eq(sec_no).offset().top - 90
            // }, 500)
        }

        else if(sec_cut==2) {
            let list = '<ul class="i_cate_box">'
            list +=         '<li class="i_selec_cate">주요 라인별 ∨</li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempage.html?by_no=0&sec_no=0">유형별</a></li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempage.html?by_no=1&sec_no=0">고민별</a></li>'
            list +=         '<li class="i_cate"><a href="M_primera_itempage.html?by_no=2&sec_no=0">주요 라인별</a></li>'
            list +=     '</ul>'

            list +=     '<div class="product_box">'
            list +=         '<div class="pb_container">'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=0">알파인 베리 워터리</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=1">와일드 씨드 퍼밍</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=2">페이셜 필링</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=3">미라클</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=4">슈퍼 블랙 씨드</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=5">리페어빈 시카</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=6">오가니언스</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=7">와일드 피치 포어</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=8">스킨릴리프 선</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=9">버블 클렌징</a></div>'
            list +=         '<div class="p_name"><a href="M_primera_itempage.html?by_no=2&sec_no=10">마스크/기타</a></div>'
            list +=         '</div>'
            list +=      '</div>'

            $('.i_p_nav').append(list);

            for(let i=0; i<ITEM_LIST[2].length; i++) { // 유형별 안에 있는 것만큼 돌아야함
                let list = '<div class="item_sec" id="'+L_sec[i]+'">'
                list +=         '<div class="item_s_txt">'
                list +=             '<span class="sec_title">'+L_K_title_array[i]+'</span>'
                list +=             '<span class="sec_no">'+L_E_title_array[i]+'</span>'
                list +=             '<div class="sec_tag">'+L_title_tag[i]+'</div>'
                list +=         '</div>'
                list +=         '<div class="sec_item_box">'
                list +=             '<div class="item_container">'
                list +=             '</div>'
                list +=         '</div>'
                list +=     '</div>'

                
                $('.container').append(list);

                for(let j = 0; j < ITEM_LIST[2][i].length; j++) { // 타입별 안에 있는 것만큼 돌아야함
                    let list =  '<div class="item_box">'
                    list +=         '<a href="M_primera_itemdetail.html?by_no=2&sec_no='+i+'&item_no='+ITEM_LIST[2][i][j].item_no+'">'
                    list +=             '<div class="item_img">'
                    list +=                 '<img src="img/itempage/byLine/'+L_sec[i]+'/'+ITEM_LIST[2][i][j].src+'" alt="아이템이미지">'
                    list +=             '</div>'
                    list +=             '<div class="item_title">'+ITEM_LIST[2][i][j].title+'</div>'
                    list +=         '</a>'
                    list +=     '</div>'
                    
                    $('.item_container').eq(i).append(list);
                }

                
                $('.item_container').eq(i).css({
                    width: 350 * ITEM_LIST[2][i].length
                })
            }
            
            let t_width=0;
            for (let i=0; i< $('.p_name').length; i++) {
                console.log(t_width)
                t_width += Number($('.p_name').eq(i).width()+20.5);
            }

            $('.pb_container').css({
                width: t_width
            })
            console.log(t_width)
            
            // $('html, body').animate({
            //     scrollTop: $('.item_sec').eq(sec_no).offset().top - 90
            // }, 500)
        }

    }



    // 타입별 메뉴 누르기
    let chk = false;
    $('.i_selec_cate').click(function(){
        if(chk==false) {
            $('.i_cate').addClass('i_cate_active')
            chk=true
        }
        else if (chk==true) {
            $('.i_cate').removeClass('i_cate_active')
            chk=false
        }
    });


    $('.p_name').click(function(){
        event.preventDefault();
        // href로 해당 섹션 o_top 이용
        let href = $(this).children('a').attr('href');
        let sec_no = href.split("sec_no=")[1];

        let o_top = $('.item_sec').eq(sec_no).offset().top;
        
        $('html').animate({
            scrollTop: o_top -45
        }, 500)

    })

    $(window).scroll(function(){
        let s_w_top = $(window).scrollTop();

        if(s_w_top >= 95) {
            $('.product_box').css({
                position: 'fixed',
                left: 0,
                top: 0,
                marginTop: 0,
                zIndex: 999999999,
                borderTop: 'none'
            });
            $('.wrap').css({
                paddingTop: 45
            })
        }
        else if (s_w_top < 95) {
            $('.product_box').css({
                position: 'static',
                // marginTop: 45,
                zIndex: 0,
                borderTop: '1px solid #eceadc7a'
            });
            
            $('.wrap').css({
                paddingTop: 0
            })
        }
    })

    
    
})