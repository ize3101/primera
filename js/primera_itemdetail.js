$(document).ready(function(){
    

    // 2 페이지에서 해당 아이템 누르면 주소 정보 구별해서 가져오는 것 해야 함
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

        let item_no = by_cut.split("item_no=")[1]; // sec_no 나오는 수
        console.log(item_no)
        
        if(sec_cut == 0) { // by_no가 0이면 유형별

            let list1 = '<div class="item_big_img">'
                list1 +=         '<img src="img/itempage/'+by[sec_cut]+'/'+T_sec[sec_R_no]+'/'+ITEM_LIST[0][sec_R_no][item_no-1].src+'" alt="아이템">'
                list1 +=         '<div class="magnifier"></div>'
                list1 +=     '</div>'


                $('.tmp').append(list1)

            let list2 = '<div class="item_infoNorder">'
                list2 += '<div class="item_k_title">'+ITEM_LIST[0][sec_R_no][item_no-1].title+'</div>'
                list2 += '<div class="item_e_title">'+ITEM_LIST[0][sec_R_no][item_no-1].e_title+'</div>'
                list2 += '<div class="i_b_desc">'+ITEM_LIST[0][sec_R_no][item_no-1].b_desc+'</div>'
                list2 += '<div class="d_line"></div>'
                list2 += '<div class="i_sm_desc">'+ITEM_LIST[0][sec_R_no][item_no-1].sm_desc+'</div>'
                list2 += '<div class="i_tag">'+ITEM_LIST[0][sec_R_no][item_no-1].i_tag+'</div>'
                list2 += '<span class="d_star">★★★★☆</span>'
                list2 += '<span class="go_review">리뷰 보기</span>'
                list2 += '<div class="go_buy">구매하러 가기</div>'
                list2 += '</div>'

                $('.item_img_box').append(list2)

                $('.magnifier').css({
                    background: '#eff1ee url(img/itempage/'+by[sec_cut]+'/'+T_sec[sec_R_no]+'/'+ITEM_LIST[0][sec_R_no][item_no-1].src+') no-repeat'
                })

                let tmp = navigator.userAgent.toLowerCase();
                let array = ["android", "iphone", "ipad"];
                for(let i = 0; i < array.length; i++) {
                    if(tmp.match(array[i])) {
                        location.replace('http://ize3101.dothome.co.kr/M_index.html?by_no=0&sec_no='+sec_R_no+'&item_no='+item_no+'');
                    }
                }
        }

        else if(sec_cut == 1) { // by_no가 1이면 고민별

            let list1 = '<div class="item_big_img">'
                list1 +=         '<img src="img/itempage/'+by[sec_cut]+'/'+W_sec[sec_R_no]+'/'+ITEM_LIST[1][sec_R_no][item_no-1].src+'" alt="아이템">'
                list1 +=         '<div class="magnifier"></div>'
                list1 +=     '</div>'


                $('.tmp').append(list1)

            let list2 = '<div class="item_infoNorder">'
                list2 += '<div class="item_k_title">'+ITEM_LIST[1][sec_R_no][item_no-1].title+'</div>'
                list2 += '<div class="item_e_title">'+ITEM_LIST[1][sec_R_no][item_no-1].e_title+'</div>'
                list2 += '<div class="i_b_desc">'+ITEM_LIST[1][sec_R_no][item_no-1].b_desc+'</div>'
                list2 += '<div class="d_line"></div>'
                list2 += '<div class="i_sm_desc">'+ITEM_LIST[1][sec_R_no][item_no-1].sm_desc+'</div>'
                list2 += '<div class="i_tag">'+ITEM_LIST[1][sec_R_no][item_no-1].i_tag+'</div>'
                list2 += '<span class="d_star">★★★★☆</span>'
                list2 += '<span class="go_review">리뷰 보기</span>'
                list2 += '<div class="go_buy">구매하러 가기</div>'
                list2 += '</div>'

                $('.item_img_box').append(list2)

                $('.magnifier').css({
                    background: '#eff1ee url(img/itempage/'+by[sec_cut]+'/'+W_sec[sec_R_no]+'/'+ITEM_LIST[1][sec_R_no][item_no-1].src+') no-repeat'
                })

                let tmp = navigator.userAgent.toLowerCase();
                let array = ["android", "iphone", "ipad"];
                for(let i = 0; i < array.length; i++) {
                    if(tmp.match(array[i])) {
                        location.replace('http://ize3101.dothome.co.kr/M_index.html?by_no=1&sec_no='+sec_R_no+'&item_no='+item_no+'');
                    }
                }
        }

        else if(sec_cut == 2) { // by_no가 2이면 라인별

            let list1 = '<div class="item_big_img">'
                list1 +=         '<img src="img/itempage/'+by[sec_cut]+'/'+L_sec[sec_R_no]+'/'+ITEM_LIST[2][sec_R_no][item_no-1].src+'" alt="아이템">'
                list1 +=         '<div class="magnifier"></div>'
                list1 +=     '</div>'


                $('.tmp').append(list1)

            let list2 = '<div class="item_infoNorder">'
                list2 += '<div class="item_k_title">'+ITEM_LIST[2][sec_R_no][item_no-1].title+'</div>'
                list2 += '<div class="item_e_title">'+ITEM_LIST[2][sec_R_no][item_no-1].e_title+'</div>'
                list2 += '<div class="i_b_desc">'+ITEM_LIST[2][sec_R_no][item_no-1].b_desc+'</div>'
                list2 += '<div class="d_line"></div>'
                list2 += '<div class="i_sm_desc">'+ITEM_LIST[2][sec_R_no][item_no-1].sm_desc+'</div>'
                list2 += '<div class="i_tag">'+ITEM_LIST[2][sec_R_no][item_no-1].i_tag+'</div>'
                list2 += '<span class="d_star">★★★★☆</span>'
                list2 += '<span class="go_review">리뷰 보기</span>'
                list2 += '<div class="go_buy">구매하러 가기</div>'
                list2 += '</div>'

                $('.item_img_box').append(list2)

                $('.magnifier').css({
                    background: '#eff1ee url(img/itempage/'+by[sec_cut]+'/'+L_sec[sec_R_no]+'/'+ITEM_LIST[2][sec_R_no][item_no-1].src+') no-repeat'
                })

                let tmp = navigator.userAgent.toLowerCase();
                let array = ["android", "iphone", "ipad"];
                for(let i = 0; i < array.length; i++) {
                    if(tmp.match(array[i])) {
                        location.replace('http://ize3101.dothome.co.kr/M_index.html?by_no=2&sec_no='+sec_R_no+'&item_no='+item_no+'');
                    }
                }

        }
        

    }

        $('.list_tag').click(function(){
            event.preventDefault();
            let href = $(this).children('a').attr('href');

            console.log(href);
            let o_top = $(href).offset().top;
            
            $('html').animate({
                scrollTop: o_top - (80)
            }, 500)

        });

        $('.list_tag').hover(function(){
            $(this).css({
                transform: 'translateY(-10px)',
                transition: 'all 0.3s',
                color: '#b3ca97',
            })
        }, function(){
            $(this).css({
                transform: 'translateY(0)',
                transition: 'all 0.3s',
                color: '#617943',
            })
        })



        
        // 돋보기
        let img_area = $('.item_big_img');
        let mag = $('.magnifier');
        let target = $('.item_big_img');
        let target_w = target.width();
        let target_h = target.height();
 

        img_area.mousemove(function(){
            target_h = target.height();
            let mouse_x = event.pageX - target.offset().left;
            let mouse_y = event.pageY - target.offset().top

            // 마우스가 돋보기 가운데 위치하게 하기
            let pos_x = mouse_x - (mag.outerWidth () / 2);
            let pos_y = mouse_y - (mag.outerHeight() / 2);

            // 배경 이미지 위치 변경(배경이미지가 원의 가운데 오게 하기)
            let rx = -1 * pos_x;
            let ry = -1 * pos_y;
 
            mag.css({
                left: pos_x,
                top: pos_y,
                backgroundPosition: rx+"px " + ry+"px",
                backgroundSize: target_w+"px " + target_h+"px",
                transform: 'scale(1.3)'
            })
        });


        $(img_area).hover(function(){
            mag.css({
                // opacity: 1,
                // transition: 'opacity 0.3s'

                // display: 'block'
            })
            mag.stop().fadeIn(100);

        }, function(){
            mag.css({
                // opacity: 0,
                // transition: 'opacity 0.3s'

                // display: 'none'
            })
            
            mag.stop().fadeOut(100);
        })


})