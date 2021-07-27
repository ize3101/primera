const ITEM_LIST = [
    // 유형별
    [
        // 클렌징
        [
            {item_no: 1, src: '1.png', title: '바하 버블 필링 클렌저', e_title: 'BHA Bubble Peeling Cleanser', b_desc: '여드름성 피부 완화 기능성 화장품', sm_desc: '바하 버블이 데일리 필링과 트러블 진정을 도와주는 솝프리 약산성 클렌징폼', i_tag: '#약산성폼클렌징 #데일리필링 #트러블진정 #여드름피부'},
            {item_no: 2, src: '2.png', title: '페이셜 마일드 필링 150ml', e_title: 'Facial Mild Peeling', b_desc: '', sm_desc: '부드러운 각질 관리로 피부결을 개선해주는 필링', i_tag: '#각질제거_순하게 #예민보스_문제없어 #매끈피부 #6-Free'},
            {item_no: 3, src: '3.png', title: '페이셜 인텐시브 필링 150ml', e_title: 'Facial Intensive Peeling', b_desc: '', sm_desc: '인텐시브한 각질 관리로 매끈한 피부로 가꿔주는 개운한 필링', i_tag: '#각질제거_확실하게 #매끈피부 #6-Free'},
            {item_no: 4, src: '4.png', title: '내추럴 리치 클렌징 폼 150ml', e_title: 'Natural Rich Cleansing Foam', b_desc: '', sm_desc: '자연 유래 세정 성분으로 피부 노폐물을 깨끗하게 지워주는 부드러운 클렌징 폼', i_tag: '#피부정화'},
            {item_no: 5, src: '5.png', title: '리치 포밍 클렌저 200ml', e_title: 'Rich Foaming Cleanser', b_desc: '', sm_desc: '풍성한 거품으로 빠르고 산뜻하게 노폐물을 제거해주는 버블 클렌저', i_tag: '#피부정화 #4-Free'},
            {item_no: 6, src: '6.png', title: '퓨어 브라이트닝 클렌징 폼 150ml', e_title: 'Pure Brightening Cleansing Foam', b_desc: '', sm_desc: '녹차 추출물과 연꽃 추출물을 함유한 부드럽고 밀도 있는 거품이 유해환경으로 지친 피부를 산뜻하게 세정하여 깨끗하고 환한 피부를 선사하는 브라이트닝 클렌징폼', i_tag: '#피부정화'},
            {item_no: 7, src: '7.png', title: '씨드 에너지 클렌징 오일 250ml', e_title: 'Seed Energy Cleansing Oil', b_desc: '', sm_desc: '자연에서 얻은 7가지 씨드 오일로 피부에 부담 없이 건강하게 메이크업을 제거하는 클렌징 오일', i_tag: '#피부정화 #보습 #5-Free'},
            {item_no: 8, src: '8.png', title: '미셀라 5.5 클렌징 워터 300ml', e_title: 'Micellar 5.5 Cleansing Water', b_desc: '', sm_desc: '부드럽게 잘 지워내는 저자극 약산성 미셀라 클렌징 워터', i_tag: '#피부정화 #피부진정 #수분공급 #10-Free'},
            {item_no: 9, src: '9.png', title: '모이스처 클렌징 티슈 60매(300g)', e_title: 'Moisture Cleansing Tissues', b_desc: '', sm_desc: '간편하게 메이크업을 제거해주는 클렌징 티슈', i_tag: '#피부정화 #메이크업_제거'},
            {item_no: 10, src: '10.png', title: '스무스 클렌징 크림 250ml', e_title: 'Smooth Cleansing Cream', b_desc: '', sm_desc: '메이크업 및 모공 속 노폐물을 깨끗이 녹여내는 클렌징 크림', i_tag: '#피부정화 #메이크업 _제거# 4-Free'}
        ]
        ,
        // 워터/토너
        [
            {item_no: 1, src: '1.png', title: '알파인 베리 워터리 컴포팅 스킨 미스트 120ml', e_title: 'Alpine Berry Watery Comforting Skin Mist', b_desc: '', sm_desc: '촉촉한 보습막이 피부를 진정, 보호해 주는 스킨 미스트', i_tag: '#진정보습막스킨미스트 #건조가려움안녕 #촉촉촉미스트'},
            {item_no: 2, src: '2.png', title: '오가니언스 워터 180ml', e_title: 'Organience Wate', b_desc: '', sm_desc: '맑고 촉촉한 피부를 위한 데일리 토너', i_tag: '#피부진정_닦토 #촉촉매끈피부결 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 3, src: '3.png', title: '와일드 씨드 퍼밍 워터', e_title: 'Wild Seed Firming Water', b_desc: '주름개선 기능성', sm_desc: '쫀득하고 영양감 있는 꿀 제형이 피부결을 촘촘하고 촉촉하게 채워주는 탄력 스킨', i_tag: '#생활중력노화 #꿀토너 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'},
            {item_no: 4, src: '4.png', title: '와일드 피치 포어 워터', e_title: 'Wild Peach Pore Water', b_desc: '', sm_desc: '피부를 진정하고 각질을 잠재워 매끄러운 피부결로 가꿔주는 리프레싱 토너', i_tag: '#모공워터 #트러블워터 #돌복숭아워터'}
        ]
        ,
        // 세럼/에센스
        [
            {item_no: 1, src: '1.png', title: 'ALL NEW 미라클 씨드 에센스', e_title: 'Miracle Seed Essence', b_desc: '미백 / 주름개선 기능성 화장품', sm_desc: '피부 항산화력 작용으로 본연의 힘을 강화하고 강력한 수분 진정 효과로 피부 속부터 케어하여 건강하고 맑은 안색으로 가꿔주는 기능성 워터 에센스', i_tag: '#속보습관리 #저자극 #약산성 #무향 #10-Free #맑고산뜻함'},
            {item_no: 2, src: '2.png', title: '프라임 리커버리 더블 캡슐 세럼', e_title: 'Prime Recovery Double Capsule Serum', b_desc: '', sm_desc: '근본부터 탄탄하게 채워 생기 있게 빛나는 피부', i_tag: '#흑미항산화 #초기노화케어 #10FREE #클린포뮬라 #그린사이클'},
            {item_no: 3, src: '3.png', title: '슈퍼 블랙 씨드 콜드-드랍TM 세럼 50ml', e_title: 'Super Black Seed Cold-DropTM Serum', b_desc: '', sm_desc: '블랙씨드의 항산화 성분으로 초기 노화를 케어하고 유해환경으로부터 피부를 지키는 저자극 얼리-안티에이징 세럼', i_tag: '생활중력노화 #꿀토너 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'},
            {item_no: 4, src: '4.png', title: '리페어빈 시카 에센스 50ml', e_title: 'Repair Bean Cica Essence', b_desc: '주름개선 기능성', sm_desc: '건조로 인해 손상된 피부를 진정시켜 주는 수분 진정 에센스', i_tag: '#수분진정 #피부진정시카 #민감피부에센스 #10-Free'},
            {item_no: 5, src: '5.png', title: '와일드 씨드 퍼밍 세럼', e_title: 'Wild Seed Firming Serum', b_desc: '주름개선 기능성', sm_desc: '힘없는 피부의 탄력을 집중 개선해주는 퍼밍-리프팅-타이트닝 3중 탄력 케어 세럼', i_tag: '#생활중력노화 #피부밀도 #쫀쫀낫토세럼 #리프팅 #모공탄력'},
            {item_no: 6, src: '6.png', title: '오가니언스 세럼 50ml', e_title: 'Organience Serum', b_desc: '', sm_desc: '피부에 활력을 부여해 촉촉하고 매끄러운 피부로 가꿔주는 세럼', i_tag: '#피부활력 #피부저항력강화 #5-free #친환경재배원료 #지속가능패키지'}
        ],
        // 에멀전
        [
            {item_no: 1, src: '1.png', title: '오가니언스 에멀젼 150ml', e_title: 'Organience Emulsion', b_desc: '', sm_desc: '수분과 영양감을 채우고 피부 밸런스를 유지해주는 에멀젼', i_tag: '#영양공급 #유수분밸런스 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 2, src: '2.png', title: '와일드 씨드 퍼밍 에멀전', e_title: 'Wild Seed Firming Emulsion', b_desc: '주름개선 기능성', sm_desc: '피부 기초 탄력 트레이너 윤기 영양 에멀전', i_tag: '#생활중력노화 #탄력개선# 쫀쫀탄탄 #마스크자국 #영양로션'},
            {item_no: 3, src: '3.png', title: '와일드 피치 포어 에멀전', e_title: 'Wild Peach Pore Emulsion', b_desc: '', sm_desc: '과분비된 피지를 케어하고 수분을 공급하여 피부의 유수분 밸런스를 맞춰주는 에멀전', i_tag: '#모공에멀전 #트러블에멀전 #돌복숭아에멀전'}
        ]
        ,
        // 크림
        [
            {item_no: 1, src: '1.png', title: '알파인 베리 워터리 크림 업사이클링 에디션', e_title: 'Alpine Berry Watery Cream Upcycling Edition', b_desc: '', sm_desc: '[프리메라X누깍] 업사이클링 경험을 담은 세상에 하나뿐인 워터리 크림 대용량 리미티드 에디션', i_tag: '#뒤집어진 #피부엔_데일리페어 #업사이클링으로_지구리페어 #100시간보습'},
            {item_no: 2, src: '2.png', title: '알파인 베리 워터리 수딩 젤 크림 업사이클링 에디션', e_title: 'Alpine Berry Watery Soothing Gel Cream Upcycling Edition', b_desc: '', sm_desc: '[프리메라X누깍] 업사이클링 경험을 담은 세상에 하나뿐인 워터리 수딩 젤 크림 대용량 리미티드 에디션', i_tag: '#뒤집어진피부엔_데일리페어 #업사이클링으로_지구리페어 #쿨링효과'},
            {item_no: 3, src: '3.png', title: '슈퍼 블랙 씨드 콜드-드랍TM 크림 50ml', e_title: 'Super Black Seed Cold-DropTM Cream', b_desc: '', sm_desc: '블랙씨드의 항산화 성분을 고스란히 추출하여 초기 노화를 케어하고 피부 장벽을 강화하는 얼리-안티에이징 크림', i_tag: '#흑미항산화 #장벽강화 #씨드세라마이드 #10FREE #클린_포뮬라'},
            {item_no: 4, src: '4.png', title: '알파인 베리 워터리 크림 50ml', e_title: 'Alpine Berry Watery Cream', b_desc: '', sm_desc: '건강한 생기를 부여하는 진정∙회복 크림', i_tag: '#연약한피부에_피부피로회복제 #뒤집어진피부에_데일리페어'},
            {item_no: 5, src: '5.png', title: '알파인 베리 워터리 수딩 젤크림 50ml', e_title: 'Alpine Berry Watery Soothing Gel Cream', b_desc: '', sm_desc: '산뜻한 쿨링 효과를 선사하는 진정∙회 젤 크림', i_tag: '#지친피부에_쿨링효과 #뒤집어진피부에_데일리페어'},
            {item_no: 6, src: '6.png', title: '와일드 씨드 퍼밍 크림', e_title: 'Wild Seed Firming Cream', b_desc: '주름개선 기능성', sm_desc: '시들지 않는 야생콩의 성장 에너지를 응축한 와일드-퍼밍TM이 주름과 탄력을 동시에 개선하여 탄탄하고 윤기있는 피부로 가꿔주는 크림', i_tag: '#생활중력노화 #탄력개선 #쫀쫀탄탄 #마스크자국 #탄력크림'},
            {item_no: 7, src: '7.png', title: '리페어빈 시카 크림 40ml', e_title: 'Repair Bean Cica Cream', b_desc: '주름개선 기능성', sm_desc: '건조로 인해 손상된 피부를 진정시켜 주는 피부 장벽 강화 크림', i_tag: '#피부보호 #10-Free'},
            {item_no: 8, src: '8.png', title: '오가니언스 크림 50ml', e_title: 'Organience Cream', b_desc: '', sm_desc: '피부 보습막을 형성하여 촉촉하고 촘촘한 피부 결로 가꿔주는 크림', i_tag: '#영양공급 #보습막형성 #5-free #친환경재배원료 #지속가능패키지'}
        ]
        ,
        // 아이케어
        [
            {item_no: 1, src: '1.png', title: '와일드 씨드 퍼밍 아이 크림', e_title: 'Wild Seed Firming Eye Cream', b_desc: '주름개선 기능성', sm_desc: '납작콩의 효능을 담아, 탄탄하고 촉촉한 눈가 피부를 선사하는 퍼밍 아이 크림', i_tag: '#생활중력노화 #눈가주름완화 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'},
            {item_no: 2, src: '2.png', title: '오가니언스 아이크림 30ml', e_title: 'Organience Eye Cream', b_desc: '', sm_desc: '눈가 피부에 풍부한 보습과 활력을 부여하는 아이크림', i_tag: '#눈가보습 #피부활력 #5-free #친환경재배원료 #지속가능패키지'}
        ]
        ,
        // 맨
        [
            {item_no: 1, src: '1.png', title: '맨 워터리 플루이드 100ml', e_title: 'Men Watery Fluid', b_desc: '미백 기능성', sm_desc: '건조로 인해 손상된 남성 피부를 진정시켜주고, 피부에 필요한 수분을 공급하는 가볍고 산뜻한 남성 수분 플루이드', i_tag: '#미백 #산뜻 #남성로션 #5-Free'},
            {item_no: 2, src: '2.png', title: '맨 워터리 크림 50ml', e_title: 'Men Watery Cream', b_desc: '미백 기능성', sm_desc: '건조한 남성 피부에 강한 수분과 생기를 동시에 케어해주는 수분 크림', i_tag: '#5-Free #미백 #산뜻 #남성크림'},
            {item_no: 3, src: '3.png', title: '맨 오가니언스 세범 컷 플루이드 100ml', e_title: 'Men Organience Sebum Cut Fluid', b_desc: '', sm_desc: '과다 분비된 피지 조절과 여드름성 피부에 사용 가능한 수분 플루이드', i_tag: '#피부진정 #보습 #과다분비된피지조절 #4-Free'},
            {item_no: 4, src: '4.png', title: '맨 오가니언스 퓨리파잉 클렌저 150ml', e_title: 'Men Organience Purifying Cleanse', b_desc: '', sm_desc: '건과잉 피지와 노폐물을 제거해주는 팩-폼 겸용 클렌저', i_tag: '#피부정화 #피부진정 #4-Free'},
            {item_no: 5, src: '5.png', title: '맨 오가니언스 트리트먼트 워터 180ml', e_title: 'Men Organience Treatment Water', b_desc: '', sm_desc: '풍부한 수분을 공급하고 영양감을 동시에 줄 수 있는 스킨', i_tag: '#보습 #피부진정 #5-Free'},
            {item_no: 6, src: '6.png', title: '맨 오가니언스 모이스처라이징 에멀전 150ml', e_title: 'Men Organience Moisturizing Emulsion', b_desc: '', sm_desc: '풍부한 수분을 공급하고 피부에 활력을 불어넣어 주는 에멀전', i_tag: '#피부진정 보습 4-Free'}
        ],
        // 베이비
        [
            {item_no: 1, src: '1.png', title: '베이비 페이셜 & 바디 워시 250ml', e_title: 'Baby Facial & Body Wash', b_desc: '', sm_desc: '유아 피부를 깨끗하고 건강하게 지켜주는 전신 세정제', i_tag: '#탑투토워시 #10-Free'},
            {item_no: 2, src: '2.png', title: '베이비 선 쿠션 SPF32 PA++ 15g', e_title: 'Baby Sun Cushion SPF32 PA++', b_desc: '자외선 차단 기능성', sm_desc: '유아 피부를 지켜주는 사용이 간편한 쿠션 타입의 선 크림', i_tag: '#자외선차단 #7-Free'}
        ],
        // 메이크업
        [
            {item_no: 1, src: '1.png', title: '내추럴 스킨 프라이머 베이스 SPF41 PA++ 30ml', e_title: 'Natural Skin Primer Base SPF41 PA++', b_desc: '자외선 차단 기능성', sm_desc: '한 번에 피부결과 톤을 보정하여 매끄럽고 화사한 피부 바탕을 선사하는 올인원 수분 메이크업 베이스', i_tag: '#미백 #산뜻 #뷰티어워드 #비건메이크업 #저자극 #7-Free'},
            {item_no: 2, src: '2.png', title: '내추럴 스킨 파운데이션 SPF15 PA+ 30ml', e_title: 'Natural Skin Foundation SPF15 PA+', b_desc: '자외선 차단 기능성', sm_desc: '숨 쉬는 스킨 핏 파우더™가 피부는 편안하게, 결점은 섬세하게 커버하는 산뜻한 롱래스팅 파운데이션', i_tag: '#뷰티어워드 #비건메이크업 #저자극 #7-Free'},
            {item_no: 3, src: '3.png', title: '내추럴 스킨 미네랄 팩트 9g', e_title: 'Natural Skin Mineral Pact', b_desc: '', sm_desc: '과자연 유래 성분의 고운 입자가 피부를 보송하고 화사하게 유지시켜주는 피니싱 파우더', i_tag: '#비건메이크업 #린넨파우더 #저자극 #7-Free'}
        ]
        ,
        // 스페셜케어
        [
            {item_no: 1, src: '1.png', title: '스킨릴리프 UV 프로텍터 EX', e_title: 'Skin Relief UV Protector EX', b_desc: '자외선 차단 기능성', sm_desc: '자외선을 차단하고 외부 유해 환경으로부터 피부를 보호하며,  블루라이트까지 차단해주는 수분베이스 dual-light defender', i_tag: '#자외선차단 #블루라이트차단 #9-FREE #수분선크림 #이지워셔블'},
            {item_no: 2, src: '2.png', title: '씨드 앤 스프라우트 에너지 마스크 로터스 20ml*5매', e_title: 'Seed and Sprout Energy Mask Lotus', b_desc: '', sm_desc: '수분 막을 코팅한 듯 촉촉함을 지속시키고 피부 진정과 활력에 도움을 주는 순면 시트 마스크', i_tag: '#보습 #피부진정'},
            {item_no: 3, src: '3.png', title: '미라클 씨드 컨센트레이트 오일 30ml', e_title: 'Miracle Seed Concentrate Oil', b_desc: '', sm_desc: '피부를 촉촉하고 윤기나게 가꿔주는 기적의 씨앗 오일', i_tag: '#보습 #탄력보강 #3-Free'},
            {item_no: 4, src: '4.png', title: '오가니언스 하이드로겔 마스크 25g*5매', e_title: 'Organience Hydro Gel Mask', b_desc: '', sm_desc: '피부를 촉촉하게 유지시키는 보습 마스크', i_tag: '#보습 #피부진정'},
            {item_no: 5, src: '5.png', title: '알파인 베리 워터리 하이드로겔 마스크 25g*5매', e_title: 'Alpine Berry Watery Hydro Gel Mask', b_desc: '', sm_desc: '피부에 생기를 부여하는 수분 마스크', i_tag: '#보습 #생기부여'},
            {item_no: 6, src: '6.png', title: '씨드 앤 스프라우트 에너지 마스크 슈가애플 20ml*5매', e_title: 'Seed and Sprout Energy Mask Sugar Apple', b_desc: '', sm_desc: '피부를 탄력 있게 가꿔주고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#탄력보강 #피부진정'},
            {item_no: 7, src: '7.png', title: '씨드 앤 스프라우트 에너지 마스크 린씨드 20ml*5매', e_title: 'Seed and Sprout Energy Mask Linseed', b_desc: '', sm_desc: '피부의 유수분 밸런스를 케어하고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#피부정화 #피부진정'},
            {item_no: 8, src: '8.png', title: '씨드 앤 스프라우트 에너지 마스크 밀크시슬 20ml*5매', e_title: 'Seed and Sprout Energy Mask Milk Thistle', b_desc: '', sm_desc: '수분 공급을 통하여 맑고 환한 피부로 가꿔주고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#브라이트닝 #피부진정'},
            {item_no: 9, src: '9.png', title: '10 씨드 - 뉴트리 모델링 마스크 50g(1제+2제)*2개', e_title: '10 Seeds - Nutri Modeling Mask', b_desc: '', sm_desc: '피부를 건강하고 윤기 나게 가꿔주는 멀티 기능의 스페셜 케어 모델링 마스크', i_tag: '#영양공급 #피부진정 #수분공급 #보습'},
            {item_no: 10, src: '10.png', title: '스킨 릴리프 UV 프로텍터 SPF50+ PA+++ 50ml', e_title: 'Skin Relief UV Protector SPF50+ PA+++', b_desc: '자외선 차단 기능성', sm_desc: '자외선과 외부 유해 환경으로부터 피부를 지키는 가볍고 산뜻한 수분 선크림', i_tag: '#데일리선케어 #수분선크림 #4-Free'},
            {item_no: 11, src: '11.png', title: '스킨 릴리프 워터프루프 선블록 SPF50+ PA+++ 70ml', e_title: 'Skin Relief Waterproof Sun Block SPF50+ PA+++', b_desc: '자외선 차단 기능성', sm_desc: '강력한 자외선 차단 효과의 물과 땀에 강한 아웃도어용 자외선 차단제', i_tag: '#자외선차단 #워터프루프 #페이스/바디겸용 #4-Free'},
            {item_no: 12, src: '12.png', title: '내추럴 베리 립 마스크 17g', e_title: 'Natural Berry Lip Mask', b_desc: '자외선 차단 기능성', sm_desc: '씨베리 열매가 영양을 공급하고 무루무루 버터를 포함한 풍부한 식물유래 보습성분이 건조하고 갈라진 입술을 집중 케어하는 립 마스크', i_tag: '#입술집중보습 #10-Free'},
            {item_no: 13, src: '13.png', title: '내추럴 베리 립밤 4g', e_title: 'Natural Berry Lip Balm', b_desc: '', sm_desc: '씨베리 열매가 영양을 공급하고, 무루무루 버터가 여린 입술을 촉촉하고 생기있게 케어하는 립밤', i_tag: '#착한립밤 촉촉 4-Fre'}
        ]
        ,
        // 기타
        [
            {item_no: 1, src: '1.png', title: '미라클 씨드 페이셜 코튼 100매', e_title: 'Miracle Seed Facial Cotton 100EA', b_desc: '', sm_desc: '무표백, 무형광, 순면 100% 원단을 워터젯* 공법으로 얇게 압착하여 3겹으로 만든 프리미엄 화장솜', i_tag: '#부드러운촉감 #먼지&보풀방지 #3겹 #순면100%  #무표백 #무형광'}
        ]
    ],
    // 고민별
    [
        // 수분/보습
        [
            {item_no: 1, src: '1.png', title: '알파인 베리 워터리 크림 업사이클링 에디션', e_title: 'Alpine Berry Watery Cream Upcycling Edition', b_desc: '', sm_desc: '[프리메라X누깍] 업사이클링 경험을 담은 세상에 하나뿐인 워터리 크림 대용량 리미티드 에디션', i_tag: '#뒤집어진 #피부엔_데일리페어 #업사이클링으로_지구리페어 #100시간보습'},
            {item_no: 2, src: '2.png', title: '알파인 베리 워터리 수딩 젤 크림 업사이클링 에디션', e_title: 'Alpine Berry Watery Soothing Gel Cream Upcycling Edition', b_desc: '', sm_desc: '[프리메라X누깍] 업사이클링 경험을 담은 세상에 하나뿐인 워터리 수딩 젤 크림 대용량 리미티드 에디션', i_tag: '#뒤집어진피부엔_데일리페어 #업사이클링으로_지구리페어 #쿨링효과'},
            {item_no: 3, src: '3.png', title: '알파인 베리 워터리 컴포팅 스킨 미스트 120ml', e_title: 'Alpine Berry Watery Comforting Skin Mist', b_desc: '', sm_desc: '촉촉한 보습막이 피부를 진정, 보호해 주는 스킨 미스트', i_tag: '#진정보습막스킨미스트 #건조가려움안녕 #촉촉촉미스트'},
            {item_no: 4, src: '4.png', title: 'ALL NEW 미라클 씨드 에센스', e_title: 'Miracle Seed Essence', b_desc: '미백 / 주름개선 기능성 화장품', sm_desc: '피부 항산화력 작용으로 본연의 힘을 강화하고 강력한 수분 진정 효과로 피부 속부터 케어하여 건강하고 맑은 안색으로 가꿔주는 기능성 워터 에센스', i_tag: '#속보습관리 #저자극 #약산성 #무향 #10-Free #맑고산뜻함'},
            {item_no: 5, src: '5.png', title: '오가니언스 워터 180ml', e_title: 'Organience Wate', b_desc: '', sm_desc: '맑고 촉촉한 피부를 위한 데일리 토너', i_tag: '#피부진정_닦토 #촉촉매끈피부결 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 6, src: '6.png', title: '오가니언스 에멀젼 150ml', e_title: 'Organience Emulsion', b_desc: '', sm_desc: '수분과 영양감을 채우고 피부 밸런스를 유지해주는 에멀젼', i_tag: '#영양공급 #유수분밸런스 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 7, src: '7.png', title: '씨드 앤 스프라우트 에너지 마스크 로터스 20ml*5매', e_title: 'Seed and Sprout Energy Mask Lotus', b_desc: '', sm_desc: '수분 막을 코팅한 듯 촉촉함을 지속시키고 피부 진정과 활력에 도움을 주는 순면 시트 마스크', i_tag: '#보습 #피부진정'},
            {item_no: 8, src: '8.png', title: '알파인 베리 워터리 크림 50ml', e_title: 'Alpine Berry Watery Cream', b_desc: '', sm_desc: '건강한 생기를 부여하는 진정∙회복 크림', i_tag: '#연약한피부에_피부피로회복제 #뒤집어진피부에_데일리페어'},
            {item_no: 9, src: '9.png', title: '알파인 베리 워터리 수딩 젤크림 50ml', e_title: 'Alpine Berry Watery Soothing Gel Cream', b_desc: '', sm_desc: '산뜻한 쿨링 효과를 선사하는 진정∙회 젤 크림', i_tag: '#지친피부에_쿨링효과 #뒤집어진피부에_데일리페어'},
            {item_no: 10, src: '10.png', title: '미라클 씨드 컨센트레이트 오일 30ml', e_title: 'Miracle Seed Concentrate Oil', b_desc: '', sm_desc: '피부를 촉촉하고 윤기나게 가꿔주는 기적의 씨앗 오일', i_tag: '#보습 #탄력보강 #3-Free'},
            {item_no: 11, src: '11.png', title: '오가니언스 세럼 50ml', e_title: 'Organience Serum', b_desc: '', sm_desc: '피부에 활력을 부여해 촉촉하고 매끄러운 피부로 가꿔주는 세럼', i_tag: '#피부활력 #피부저항력강화 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 12, src: '12.png', title: '오가니언스 아이크림 30ml', e_title: 'Organience Eye Cream', b_desc: '', sm_desc: '눈가 피부에 풍부한 보습과 활력을 부여하는 아이크림', i_tag: '#눈가보습 #피부활력 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 13, src: '13.png', title: '오가니언스 크림 50ml', e_title: 'Organience Cream', b_desc: '', sm_desc: '피부 보습막을 형성하여 촉촉하고 촘촘한 피부 결로 가꿔주는 크림', i_tag: '#영양공급 #보습막형성 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 14, src: '14.png', title: '오가니언스 하이드로겔 마스크 25g*5매', e_title: 'Organience Hydro Gel Mask', b_desc: '', sm_desc: '피부를 촉촉하게 유지시키는 보습 마스크', i_tag: '#보습 #피부진정'},
            {item_no: 15, src: '15.png', title: '알파인 베리 워터리 하이드로겔 마스크 25g*5매', e_title: 'Alpine Berry Watery Hydro Gel Mask', b_desc: '', sm_desc: '피부에 생기를 부여하는 수분 마스크', i_tag: '#보습 #생기부여'},
            {item_no: 16, src: '16.png', title: '씨드 앤 스프라우트 에너지 마스크 슈가애플 20ml*5매', e_title: 'Seed and Sprout Energy Mask Sugar Apple', b_desc: '', sm_desc: '피부를 탄력 있게 가꿔주고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#탄력보강 #피부진정'},
            {item_no: 17, src: '17.png', title: '씨드 앤 스프라우트 에너지 마스크 린씨드 20ml*5매', e_title: 'Seed and Sprout Energy Mask Linseed', b_desc: '', sm_desc: '피부의 유수분 밸런스를 케어하고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#피부정화 #피부진정'},
            {item_no: 18, src: '18.png', title: '씨드 앤 스프라우트 에너지 마스크 밀크시슬 20ml*5매', e_title: 'Seed and Sprout Energy Mask Milk Thistle', b_desc: '', sm_desc: '수분 공급을 통하여 맑고 환한 피부로 가꿔주고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#브라이트닝 #피부진정'},
            {item_no: 19, src: '19.png', title: '10 씨드 - 뉴트리 모델링 마스크 50g(1제+2제)*2개', e_title: '10 Seeds - Nutri Modeling Mask', b_desc: '', sm_desc: '피부를 건강하고 윤기 나게 가꿔주는 멀티 기능의 스페셜 케어 모델링 마스크', i_tag: '#영양공급 #피부진정 #수분공급 #보습'},
            {item_no: 20, src: '20.png', title: '맨 워터리 플루이드 100ml', e_title: 'Men Watery Fluid', b_desc: '미백 기능성', sm_desc: '건조로 인해 손상된 남성 피부를 진정시켜주고, 피부에 필요한 수분을 공급하는 가볍고 산뜻한 남성 수분 플루이드', i_tag: '#미백 #산뜻 #남성로션 #5-Free'},
            {item_no: 21, src: '21.png', title: '맨 워터리 크림 50ml', e_title: 'Men Watery Cream', b_desc: '미백 기능성', sm_desc: '건조한 남성 피부에 강한 수분과 생기를 동시에 케어해주는 수분 크림', i_tag: '#5-Free #미백 #산뜻 #남성크림'},
            {item_no: 22, src: '22.png', title: '맨 오가니언스 세범 컷 플루이드 100ml', e_title: 'Men Organience Sebum Cut Fluid', b_desc: '', sm_desc: '과다 분비된 피지 조절과 여드름성 피부에 사용 가능한 수분 플루이드', i_tag: '#피부진정 #보습 #과다분비된피지조절 #4-Free'},
            {item_no: 23, src: '23.png', title: '맨 오가니언스 트리트먼트 워터 180ml', e_title: 'Men Organience Treatment Water', b_desc: '', sm_desc: '풍부한 수분을 공급하고 영양감을 동시에 줄 수 있는 스킨', i_tag: '#보습 #피부진정 #5-Free'},
            {item_no: 24, src: '24.png', title: '맨 오가니언스 모이스처라이징 에멀전 150ml', e_title: 'Men Organience Moisturizing Emulsion', b_desc: '', sm_desc: '풍부한 수분을 공급하고 피부에 활력을 불어넣어 주는 에멀전', i_tag: '#피부진정 보습 4-Free'},
            {item_no: 25, src: '25.png', title: '베이비 아토트리트 크림 150ml', e_title: 'Baby Atotreat Cream', b_desc: '', sm_desc: '피부 건조로 인한 가려움과 자극을 완화하여 건강한 피부로 가꿔주는 유아용 고보습 크림', i_tag: '#보습 #7-Free'},
            {item_no: 12, src: '12.png', title: '내추럴 베리 립 마스크 17g', e_title: 'Natural Berry Lip Mask', b_desc: '자외선 차단 기능성', sm_desc: '씨베리 열매가 영양을 공급하고 무루무루 버터를 포함한 풍부한 식물유래 보습성분이 건조하고 갈라진 입술을 집중 케어하는 립 마스크', i_tag: '#입술집중보습 #10-Free'},
            {item_no: 27, src: '27.png', title: '내추럴 베리 립밤 4g', e_title: 'Natural Berry Lip Balm', b_desc: '', sm_desc: '씨베리 열매가 영양을 공급하고, 무루무루 버터가 여린 입술을 촉촉하고 생기있게 케어하는 립밤', i_tag: '#착한립밤 촉촉 4-Fre'}
        ]
        ,
        // 주름/탄력 개선
        [
            {item_no: 1, src: '1.png', title: '프라임 리커버리 더블 캡슐 세럼', e_title: 'Prime Recovery Double Capsule Serum', b_desc: '', sm_desc: '근본부터 탄탄하게 채워 생기 있게 빛나는 피부', i_tag: '#흑미항산화 #초기노화케어 #10FREE #클린포뮬라 #그린사이클'},
            {item_no: 2, src: '2.png', title: '슈퍼 블랙 씨드 콜드-드랍TM 크림 50ml', e_title: 'Super Black Seed Cold-DropTM Cream', b_desc: '', sm_desc: '블랙씨드의 항산화 성분을 고스란히 추출하여 초기 노화를 케어하고 피부 장벽을 강화하는 얼리-안티에이징 크림', i_tag: '#흑미항산화 #장벽강화 #씨드세라마이드 #10FREE #클린_포뮬라'},
            {item_no: 3, src: '3.png', title: '슈퍼 블랙 씨드 콜드-드랍TM 세럼 50ml', e_title: 'Super Black Seed Cold-DropTM Serum', b_desc: '', sm_desc: '블랙씨드의 항산화 성분으로 초기 노화를 케어하고 유해환경으로부터 피부를 지키는 저자극 얼리-안티에이징 세럼', i_tag: '생활중력노화 #꿀토너 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'},
            {item_no: 4, src: '4.png', title: '와일드 씨드 퍼밍 세럼', e_title: 'Wild Seed Firming Serum', b_desc: '주름개선 기능성', sm_desc: '힘없는 피부의 탄력을 집중 개선해주는 퍼밍-리프팅-타이트닝 3중 탄력 케어 세럼', i_tag: '#생활중력노화 #피부밀도 #쫀쫀낫토세럼 #리프팅 #모공탄력'},
            {item_no: 5, src: '5.png', title: '와일드 씨드 퍼밍 워터', e_title: 'Wild Seed Firming Water', b_desc: '주름개선 기능성', sm_desc: '쫀득하고 영양감 있는 꿀 제형이 피부결을 촘촘하고 촉촉하게 채워주는 탄력 스킨', i_tag: '#생활중력노화 #꿀토너 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'},
            {item_no: 6, src: '6.png', title: '와일드 씨드 퍼밍 에멀전', e_title: 'Wild Seed Firming Emulsion', b_desc: '주름개선 기능성', sm_desc: '피부 기초 탄력 트레이너 윤기 영양 에멀전', i_tag: '#생활중력노화 #탄력개선# 쫀쫀탄탄 #마스크자국 #영양로션'},
            {item_no: 7, src: '7.png', title: '와일드 씨드 퍼밍 아이 크림', e_title: 'Wild Seed Firming Eye Cream', b_desc: '주름개선 기능성', sm_desc: '납작콩의 효능을 담아, 탄탄하고 촉촉한 눈가 피부를 선사하는 퍼밍 아이 크림', i_tag: '#생활중력노화 #눈가주름완화 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'},
            {item_no: 8, src: '8.png', title: '와일드 씨드 퍼밍 크림', e_title: 'Wild Seed Firming Cream', b_desc: '주름개선 기능성', sm_desc: '시들지 않는 야생콩의 성장 에너지를 응축한 와일드-퍼밍TM이 주름과 탄력을 동시에 개선하여 탄탄하고 윤기있는 피부로 가꿔주는 크림', i_tag: '#생활중력노화 #탄력개선 #쫀쫀탄탄 #마스크자국 #탄력크림'}
        ]
        ,
        // 진정/민감 케어
        [
            {item_no: 1, src: '1.png', title: '리페어빈 시카 에센스 50ml', e_title: 'Repair Bean Cica Essence', b_desc: '주름개선 기능성', sm_desc: '건조로 인해 손상된 피부를 진정시켜 주는 수분 진정 에센스', i_tag: '#수분진정 #피부진정시카 #민감피부에센스 #10-Free'},
            {item_no: 2, src: '2.png', title: '리페어빈 시카 크림 40ml', e_title: 'Repair Bean Cica Cream', b_desc: '주름개선 기능성', sm_desc: '건조로 인해 손상된 피부를 진정시켜 주는 피부 장벽 강화 크림', i_tag: '#피부보호 #10-Free'}
        ]
        ,
        // 모공 케어
        [
            {item_no: 1, src: '1.png', title: '와일드 피치 포어 워터', e_title: 'Wild Peach Pore Water', b_desc: '', sm_desc: '피부를 진정하고 각질을 잠재워 매끄러운 피부결로 가꿔주는 리프레싱 토너', i_tag: '#모공워터 #트러블워터 #돌복숭아워터'},
            {item_no: 2, src: '2.png', title: '와일드 피치 포어 에멀전', e_title: 'Wild Peach Pore Emulsion', b_desc: '', sm_desc: '과분비된 피지를 케어하고 수분을 공급하여 피부의 유수분 밸런스를 맞춰주는 에멀전', i_tag: '#모공에멀전 #트러블에멀전 #돌복숭아에멀전'}
        ]
        ,
        // 자외선 차단
        [
            {item_no: 1, src: '1.png', title: '스킨릴리프 UV 프로텍터 EX', e_title: 'Skin Relief UV Protector EX', b_desc: '자외선 차단 기능성', sm_desc: '자외선을 차단하고 외부 유해 환경으로부터 피부를 보호하며,  블루라이트까지 차단해주는 수분베이스 dual-light defender', i_tag: '#자외선차단 #블루라이트차단 #9-FREE #수분선크림 #이지워셔블'},
            {item_no: 2, src: '2.png', title: '스킨 릴리프 UV 프로텍터 SPF50+ PA+++ 50ml', e_title: 'Skin Relief UV Protector SPF50+ PA+++', b_desc: '자외선 차단 기능성', sm_desc: '자외선과 외부 유해 환경으로부터 피부를 지키는 가볍고 산뜻한 수분 선크림', i_tag: '데일리선케어 #수분선크림 #4-Free'},
            {item_no: 3, src: '3.png', title: '스킨 릴리프 워터프루프 선블록 SPF50+ PA+++ 70ml', e_title: 'Skin Relief Waterproof Sun Block SPF50+ PA+++', b_desc: '자외선 차단 기능성', sm_desc: '강력한 자외선 차단 효과의 물과 땀에 강한 아웃도어용 자외선 차단제', i_tag: '#자외선차단 #워터프루프 #페이스/#바디겸용 #4-Free'},
            {item_no: 4, src: '4.png', title: '베이비 선 쿠션 SPF32 PA++ 15g', e_title: 'Baby Sun Cushion SPF32 PA++', b_desc: '자외선 차단 기능성', sm_desc: '유아 피부를 지켜주는 사용이 간편한 쿠션 타입의 선 크림', i_tag: '#자외선차단 #7-Free'}
        ]
    ],
    // 라인별
    [
        // 알파인 베리 워터리
        [
            {item_no: 1, src: '1.png', title: '알파인 베리 워터리 크림 업사이클링 에디션', e_title: 'Alpine Berry Watery Cream Upcycling Edition', b_desc: '', sm_desc: '[프리메라X누깍] 업사이클링 경험을 담은 세상에 하나뿐인 워터리 크림 대용량 리미티드 에디션', i_tag: '#뒤집어진 #피부엔_데일리페어 #업사이클링으로_지구리페어 #100시간보습'},
            {item_no: 2, src: '2.png', title: '알파인 베리 워터리 수딩 젤 크림 업사이클링 에디션', e_title: 'Alpine Berry Watery Soothing Gel Cream Upcycling Edition', b_desc: '', sm_desc: '[프리메라X누깍] 업사이클링 경험을 담은 세상에 하나뿐인 워터리 수딩 젤 크림 대용량 리미티드 에디션', i_tag: '#뒤집어진피부엔_데일리페어 #업사이클링으로_지구리페어 #쿨링효과'},
            {item_no: 3, src: '3.png', title: '알파인 베리 워터리 컴포팅 스킨 미스트 120ml', e_title: 'Alpine Berry Watery Comforting Skin Mist', b_desc: '', sm_desc: '촉촉한 보습막이 피부를 진정, 보호해 주는 스킨 미스트', i_tag: '#진정보습막스킨미스트 #건조가려움안녕 #촉촉촉미스트'},
            {item_no: 4, src: '4.png', title: '알파인 베리 워터리 크림 50ml', e_title: 'Alpine Berry Watery Cream', b_desc: '', sm_desc: '건강한 생기를 부여하는 진정∙회복 크림', i_tag: '#연약한피부에_피부피로회복제 #뒤집어진피부에_데일리페어'},
            {item_no: 5, src: '5.png', title: '알파인 베리 워터리 수딩 젤크림 50ml', e_title: 'Alpine Berry Watery Soothing Gel Cream', b_desc: '', sm_desc: '산뜻한 쿨링 효과를 선사하는 진정∙회 젤 크림', i_tag: '#지친피부에_쿨링효과 #뒤집어진피부에_데일리페어'}
        ]
        ,
        // 와일드 씨드 퍼밍
        [
            {item_no: 1, src: '1.png', title: '와일드 씨드 퍼밍 세럼', e_title: 'Wild Seed Firming Serum', b_desc: '주름개선 기능성', sm_desc: '힘없는 피부의 탄력을 집중 개선해주는 퍼밍-리프팅-타이트닝 3중 탄력 케어 세럼', i_tag: '#생활중력노화 #피부밀도 #쫀쫀낫토세럼 #리프팅 #모공탄력'},
            {item_no: 2, src: '2.png', title: '와일드 씨드 퍼밍 워터', e_title: 'Wild Seed Firming Water', b_desc: '주름개선 기능성', sm_desc: '쫀득하고 영양감 있는 꿀 제형이 피부결을 촘촘하고 촉촉하게 채워주는 탄력 스킨', i_tag: '#생활중력노화 #꿀토너 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'},
            {item_no: 3, src: '3.png', title: '와일드 씨드 퍼밍 에멀전', e_title: 'Wild Seed Firming Emulsion', b_desc: '주름개선 기능성', sm_desc: '피부 기초 탄력 트레이너 윤기 영양 에멀전', i_tag: '#생활중력노화 #탄력개선# 쫀쫀탄탄 #마스크자국 #영양로션'},
            {item_no: 4, src: '4.png', title: '와일드 씨드 퍼밍 아이 크림', e_title: 'Wild Seed Firming Eye Cream', b_desc: '주름개선 기능성', sm_desc: '납작콩의 효능을 담아, 탄탄하고 촉촉한 눈가 피부를 선사하는 퍼밍 아이 크림', i_tag: '#생활중력노화 #눈가주름완화 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'},
            {item_no: 5, src: '5.png', title: '와일드 씨드 퍼밍 크림', e_title: 'Wild Seed Firming Cream', b_desc: '주름개선 기능성', sm_desc: '시들지 않는 야생콩의 성장 에너지를 응축한 와일드-퍼밍TM이 주름과 탄력을 동시에 개선하여 탄탄하고 윤기있는 피부로 가꿔주는 크림', i_tag: '#생활중력노화 #탄력개선 #쫀쫀탄탄 #마스크자국 #탄력크림'}
        ]
        ,
        // 페이셜 필링
        [
            {item_no: 1, src: '1.png', title: '페이셜 마일드 필링 150ml', e_title: 'Facial Mild Peeling', b_desc: '', sm_desc: '부드러운 각질 관리로 피부결을 개선해주는 필링', i_tag: '#각질제거_순하게 #예민보스_문제없어 #매끈피부 #6-Free'},
            {item_no: 2, src: '2.png', title: '페이셜 인텐시브 필링 150ml', e_title: 'Facial Intensive Peeling', b_desc: '', sm_desc: '인텐시브한 각질 관리로 매끈한 피부로 가꿔주는 개운한 필링', i_tag: '#각질제거_확실하게 #매끈피부 #6-Free'}
        ]
        ,
        // 미라클
        [
            {item_no: 1, src: '1.png', title: 'ALL NEW 미라클 씨드 에센스', e_title: 'Miracle Seed Essence', b_desc: '미백 / 주름개선 기능성 화장품', sm_desc: '피부 항산화력 작용으로 본연의 힘을 강화하고 강력한 수분 진정 효과로 피부 속부터 케어하여 건강하고 맑은 안색으로 가꿔주는 기능성 워터 에센스', i_tag: '#속보습관리 #저자극 #약산성 #무향 #10-Free #맑고산뜻함'},
            {item_no: 2, src: '2.png', title: '미라클 씨드 컨센트레이트 오일 30ml', e_title: 'Miracle Seed Concentrate Oil', b_desc: '', sm_desc: '피부를 촉촉하고 윤기나게 가꿔주는 기적의 씨앗 오일', i_tag: '#보습 #탄력보강 #3-Free'}
        ]
        ,
        // 슈퍼 블랙 씨드
        [
            {item_no: 1, src: '1.png', title: '슈퍼 블랙 씨드 콜드-드랍TM 크림 50ml', e_title: 'Super Black Seed Cold-DropTM Cream', b_desc: '', sm_desc: '블랙씨드의 항산화 성분을 고스란히 추출하여 초기 노화를 케어하고 피부 장벽을 강화하는 얼리-안티에이징 크림', i_tag: '#흑미항산화 #장벽강화 #씨드세라마이드 #10FREE #클린_포뮬라'},
            {item_no: 2, src: '2.png', title: '슈퍼 블랙 씨드 콜드-드랍TM 세럼 50ml', e_title: 'Super Black Seed Cold-DropTM Serum', b_desc: '', sm_desc: '블랙씨드의 항산화 성분으로 초기 노화를 케어하고 유해환경으로부터 피부를 지키는 저자극 얼리-안티에이징 세럼', i_tag: '생활중력노화 #꿀토너 #쫀쫀탄탄 #마스크자국 #탄력안티에이징'}
        ]
        ,
        // 리페어빈 시카
        [
            {item_no: 1, src: '1.png', title: '리페어빈 시카 에센스 50ml', e_title: 'Repair Bean Cica Essence', b_desc: '주름개선 기능성', sm_desc: '건조로 인해 손상된 피부를 진정시켜 주는 수분 진정 에센스', i_tag: '#수분진정 #피부진정시카 #민감피부에센스 #10-Free'},
            {item_no: 2, src: '2.png', title: '리페어빈 시카 크림 40ml', e_title: 'Repair Bean Cica Cream', b_desc: '주름개선 기능성', sm_desc: '건조로 인해 손상된 피부를 진정시켜 주는 피부 장벽 강화 크림', i_tag: '#피부보호 #10-Free'}
        ]
        ,
        // 오가니언스
        [
            {item_no: 1, src: '1.png', title: '오가니언스 워터 180ml', e_title: 'Organience Wate', b_desc: '', sm_desc: '맑고 촉촉한 피부를 위한 데일리 토너', i_tag: '#피부진정_닦토 #촉촉매끈피부결 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 2, src: '2.png', title: '오가니언스 에멀젼 150ml', e_title: 'Organience Emulsion', b_desc: '', sm_desc: '수분과 영양감을 채우고 피부 밸런스를 유지해주는 에멀젼', i_tag: '#영양공급 #유수분밸런스 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 3, src: '3.png', title: '오가니언스 세럼 50ml', e_title: 'Organience Serum', b_desc: '', sm_desc: '피부에 활력을 부여해 촉촉하고 매끄러운 피부로 가꿔주는 세럼', i_tag: '#피부활력 #피부저항력강화 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 4, src: '4.png', title: '오가니언스 아이크림 30ml', e_title: 'Organience Eye Cream', b_desc: '', sm_desc: '눈가 피부에 풍부한 보습과 활력을 부여하는 아이크림', i_tag: '#눈가보습 #피부활력 #5-free #친환경재배원료 #지속가능패키지'},
            {item_no: 5, src: '5.png', title: '오가니언스 크림 50ml', e_title: 'Organience Cream', b_desc: '', sm_desc: '피부 보습막을 형성하여 촉촉하고 촘촘한 피부 결로 가꿔주는 크림', i_tag: '#영양공급 #보습막형성 #5-free #친환경재배원료 #지속가능패키지'}
        ]
        ,
        // 와일드 피치 포어
        [
            {item_no: 1, src: '1.png', title: '와일드 피치 포어 워터', e_title: 'Wild Peach Pore Water', b_desc: '', sm_desc: '피부를 진정하고 각질을 잠재워 매끄러운 피부결로 가꿔주는 리프레싱 토너', i_tag: '#모공워터 #트러블워터 #돌복숭아워터'},
            {item_no: 2, src: '2.png', title: '와일드 피치 포어 에멀전', e_title: 'Wild Peach Pore Emulsion', b_desc: '', sm_desc: '과분비된 피지를 케어하고 수분을 공급하여 피부의 유수분 밸런스를 맞춰주는 에멀전', i_tag: '#모공에멀전 #트러블에멀전 #돌복숭아에멀전'}
        ]
        ,
        // 스킨릴리프 선
        [
            {item_no: 1, src: '1.png', title: '스킨릴리프 UV 프로텍터 EX', e_title: 'Skin Relief UV Protector EX', b_desc: '자외선 차단 기능성', sm_desc: '자외선을 차단하고 외부 유해 환경으로부터 피부를 보호하며,  블루라이트까지 차단해주는 수분베이스 dual-light defender', i_tag: '#자외선차단 #블루라이트차단 #9-FREE #수분선크림 #이지워셔블'},
            {item_no: 2, src: '2.png', title: '스킨 릴리프 UV 프로텍터 SPF50+ PA+++ 50ml', e_title: 'Skin Relief UV Protector SPF50+ PA+++', b_desc: '자외선 차단 기능성', sm_desc: '자외선과 외부 유해 환경으로부터 피부를 지키는 가볍고 산뜻한 수분 선크림', i_tag: '#데일리선케어 #수분선크림 #4-Free'},
            {item_no: 3, src: '3.png', title: '스킨 릴리프 워터프루프 선블록 SPF50+ PA+++ 70ml', e_title: 'Skin Relief Waterproof Sun Block SPF50+ PA+++', b_desc: '자외선 차단 기능성', sm_desc: '강력한 자외선 차단 효과의 물과 땀에 강한 아웃도어용 자외선 차단제', i_tag: '#자외선차단 #워터프루프 #페이스/바디겸용 #4-Free'}
        ]
        ,
        // 버블 클렌징
        [
            {item_no: 1, src: '1.png', title: '바하 버블 필링 클렌저', e_title: 'BHA Bubble Peeling Cleanser', b_desc: '여드름성 피부 완화 기능성 화장품', sm_desc: '바하 버블이 데일리 필링과 트러블 진정을 도와주는 솝프리 약산성 클렌징폼', i_tag: '#약산성폼클렌징 #데일리필링 #트러블진정 #여드름피부'},
            {item_no: 2, src: '2.png', title: '내추럴 리치 클렌징 폼 150ml', e_title: 'Natural Rich Cleansing Foam', b_desc: '', sm_desc: '자연 유래 세정 성분으로 피부 노폐물을 깨끗하게 지워주는 부드러운 클렌징 폼', i_tag: '#피부정화'},
            {item_no: 3, src: '3.png', title: '리치 포밍 클렌저 200ml', e_title: 'Rich Foaming Cleanser', b_desc: '', sm_desc: '풍성한 거품으로 빠르고 산뜻하게 노폐물을 제거해주는 버블 클렌저', i_tag: '#피부정화 #4-Free'}
        ]
        ,
        // 마스크/기타
        [
            {item_no: 1, src: '1.png', title: '씨드 앤 스프라우트 에너지 마스크 로터스 20ml*5매', e_title: 'Seed and Sprout Energy Mask Lotus', b_desc: '', sm_desc: '수분 막을 코팅한 듯 촉촉함을 지속시키고 피부 진정과 활력에 도움을 주는 순면 시트 마스크', i_tag: '#보습 #피부진정'},
            {item_no: 2, src: '2.png', title: '오가니언스 하이드로겔 마스크 25g*5매', e_title: 'Organience Hydro Gel Mask', b_desc: '', sm_desc: '피부를 촉촉하게 유지시키는 보습 마스크', i_tag: '#보습 #피부진정'},
            {item_no: 3, src: '3.png', title: '알파인 베리 워터리 하이드로겔 마스크 25g*5매', e_title: 'Alpine Berry Watery Hydro Gel Mask', b_desc: '', sm_desc: '피부에 생기를 부여하는 수분 마스크', i_tag: '#보습 #생기부여'},
            {item_no: 4, src: '4.png', title: '씨드 앤 스프라우트 에너지 마스크 슈가애플 20ml*5매', e_title: 'Seed and Sprout Energy Mask Sugar Apple', b_desc: '', sm_desc: '피부를 탄력 있게 가꿔주고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#탄력보강 #피부진정'},
            {item_no: 5, src: '5.png', title: '씨드 앤 스프라우트 에너지 마스크 린씨드 20ml*5매', e_title: 'Seed and Sprout Energy Mask Linseed', b_desc: '', sm_desc: '피부의 유수분 밸런스를 케어하고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#피부정화 #피부진정'},
            {item_no: 6, src: '6.png', title: '씨드 앤 스프라우트 에너지 마스크 밀크시슬 20ml*5매', e_title: 'Seed and Sprout Energy Mask Milk Thistle', b_desc: '', sm_desc: '수분 공급을 통하여 맑고 환한 피부로 가꿔주고 피부 진정 및 활력에 도움을 주는 순면 시트 마스크', i_tag: '#브라이트닝 #피부진정'},
            {item_no: 7, src: '7.png', title: '10 씨드 - 뉴트리 모델링 마스크 50g(1제+2제)*2개', e_title: '10 Seeds - Nutri Modeling Mask', b_desc: '', sm_desc: '피부를 건강하고 윤기 나게 가꿔주는 멀티 기능의 스페셜 케어 모델링 마스크', i_tag: '#영양공급 #피부진정 #수분공급 #보습'}
        ]
    ]

]


//////////////////////////////////////////////////////////////////////////////////////////

// 폴더 경로
const by = ['byType', 'byWorries', 'byLine']
const T_sec = ['Cleansing', 'WaterToner', 'SerumEssence', 'Emulsion', 'Cream', 'EyeCare', 'Men', 'Baby', 'Make-Up', 'SpecialcareMask', 'ECT']
const W_sec = ['Moisturizing', 'Antiaging', 'SensitiveSkinCare', 'EnlargedPoreCare', 'SunCare']
const L_sec = ['AlpineBerryWatery', 'WildSeedFirming', 'FacialPeeling', 'Miracle', 'SuperBlackSeed', 'RepairBeanCica', 'Organience', 'WildPeachPore', 'SkinReliefSun', 'FoamCleansing', 'MaskSpecial']

//////////////////////////////////////////////////////////////////////////////////////////



// 타입별
const T_E_title_array = ['Cleansing', 'Water/Toner', 'Serum/Essence', 'Emulsion', 'Cream', 'Eye Care', 'Men', 'Baby', 'Make-Up', 'Special care/Mask', 'ETC']
const T_K_title_array = ['클렌징', '워터/토너', '세럼/에센스', '에멀전', '크림', '아이 케어', '맨', '베이비', '메이크업', '스페셜 케어', '기타']
const T_title_tag = ['#입소문가득 #깨끗한피부', '#촉촉 #생기', '#고민별맞춤', '#생기 #건강', '#생기 #건강', '#눈가케어', '#남성맞춤 #스킨케어', '#부담없이편안한', '#숨쉬는피부', '#생기 #건강', '#함께쓰면좋은']
const T_title_desc = ['깨끗하고 맑은 피부로 가꾸어주는 클렌징 제품', '세안 다음 단계에서 촉촉한 피부로 가꾸어주는 워터/토너 제품', '워터/토너 다음 단계에서 고민별 피부 케어를 책임지는 세럼/에센스 제품', '세럼/에센스 다음단계에서 촉촉한 피부로 케어해주는 에멀전', '스킨케어 마무리 단계에서 피부를 케어해주는 크림', '눈 주변 피부를 케어해주는 전용 스킨케어 제품', '남성피부 특성을 고려한 맞춤 스킨케어 제품', '소중한 아기를 위한 베이비 전용 라인', '피부가 편안한 메이크업 제품', '생기있고 건강한 피부로 가꾸어주는 마스크/스페셜 케어 제품', '함께쓰면 더 좋은 피부 케어의 디테일을 챙겨주는 기타 제품']

const TOTAL_TYPE_TITLE = [T_K_title_array, T_E_title_array, T_title_tag,T_title_desc];

///////////////////////////////////////////////////////////////////////////////////////////


// 고민별
const W_K_title_array = ['수분/보습', '주름/탄력개선', '진정/민감 케어', '모공 케어', '자외선 차단']
const W_E_title_array = ['Moisturizing', 'Antiaging', 'Serum/Essence', 'Sensitive Skin Care', 'Enlarged Pore Care']
const W_title_tag = ['#피부보습 #생기부여', '#탄력있는피부', '#마일드케어', '#매끈한피부', '#자외선으로부터 #피부보호']
const W_title_desc = ['탄력이 부족한 피부에 영양을 공급', '탄력이 부족한 피부에 영양을 공급', '민감한 피부를 부드럽게 케어', '모공을 케어해 매끈한 피부를 가꾸는 데 도움을 주는 제품', '자외선으로부터 피부를 보호']

const TOTAL_WORRY_TITLE = [W_K_title_array, W_E_title_array, W_title_tag,W_title_desc];

//////////////////////////////////////////////////////////////////////////////////////////


// 라인별
const L_K_title_array = ['알파인 베리 워터리', '와일드 씨드 퍼밍', '페이셜 필링', '미라클', '슈퍼 블랙 씨드', '리페어빈 시카', '오가니언스', '와일드 피치 포어', '스킨릴리프 선', '버블 클렌징', '마스크/기타']
const L_E_title_array = ['Alpine Berry Watery', 'Wild Seed Firming', 'Facial Peeling', 'Miracle Seed', 'Super Black Seed', 'Repair Bean Cicae', 'Organience', 'Wild Peach Pore', 'Skin Relief Sun', 'Foam Cleansing', 'Mask/Special']
const L_title_tag = ['#진정 #리페어 #수분 #생기', '#3중탄력 #안티에이징', '#각질 제거 #피부정화', '#결케어', '#슈퍼블랙씨드', '#손상케어', '#보습 #영양', '#모공케어', '#자외선차단', '#메이크업 클렌징', '#스페셜케어']
const L_title_desc = ['피토스테롤이 피부 진정, 컨디션 회복 효과를 선사하고 알파인 베리 콤플렉스가 수분과 생기를 전하는 진정∙리페어 라인', '시들지 않는 야생콩의 힘으로 탄탄한 피부를 완성하는 탄력 안티에이징 라인', '피부와 모공의 노폐물을 깨끗하게 제거하여 맑고 청정한 피부 결로 개선해 주는 필링 라인', '건강하고 빛나는 피부로 가꿔주는 미라클 라인', '슈퍼 씨드, 흑미의 강력한 항산화력으로 초기 노화를 케어하는 저자극 얼리-안티에이징 라인', '리페어빈이 건조로 인해 손상된 피부를 집중 개선해주고, 피부 자신감을 회복시켜주는 데일리 손상 케어', '자연의 생명력을 담아 친환경적으로 재배된 발아 새싹 성분 Natural Cureplex™ 함유로 약화된 피부에 생기를 주고 풍부한 영양을 선사', '돌복숭아 새싹 추출물이 함유되어 피부를 매끈하고 보송보송하게 가꾸어 주는 모공 라인', '강력한 자외선 차단과 외부 유해 환경으로부터 피부를 보호하는 선케어 라인', '피부 및 모공의 노폐물을 깨끗이 제거해주며, 피부를 맑고 청결하게 하여 청정함을 유지해주는 클렌징 라인', '촉촉하고 생기 있는 피부를 위한 스페셜 케어']

const TOTAL_LINE_TITLE = [L_K_title_array, L_E_title_array, L_title_tag,L_title_desc];



// const TOTAL_TITLE =[TOTAL_TYPE_TITLE, TOTAL_WORRY_TITLE, TOTAL_LINK_TITLE]

