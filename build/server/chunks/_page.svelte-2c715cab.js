import { c as create_ssr_component } from './index-f78c0b16.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"wrap_container"}"><div class="${"wrap_navigation"}"><div><em>매출현황</em>
            <i class="${"xi-home"}"></i>홈<i class="${"xi-angle-right-thin"}"></i>매출현황
        </div></div>
    <div class="${"wrap_contents"}"><div class="${"wrap_search margin-10px-bottom"}"><em>SEARCH <i class="${"xi-search"}"></i></em>
            <div><input type="${"text"}" placeholder="${"배팅금액"}" class="${"input width-150px margin-5px-left"}"> <select class="${"select width-150px margin-5px-left custom-select"}" placeholder="${"분류"}" id="${"__BVID__495"}"><option value="${""}">선택안함</option><option value="${"high"}">배팅금이상</option><option value="${"low"}">배팅금이하</option></select>
                <div id="${"ex-disabled-readonly__outer_"}" role="${"group"}" aria-labelledby="${"ex-disabled-readonly__value_"}" class="${"b-form-btn-label-control dropdown b-form-datepicker width-200px margin-5px-left form-control"}" lang="${"en-GB"}"><button id="${"ex-disabled-readonly"}" type="${"button"}" aria-haspopup="${"dialog"}" aria-expanded="${"false"}" class="${"btn h-auto"}"><svg viewBox="${"0 0 16 16"}" width="${"1em"}" height="${"1em"}" focusable="${"false"}" role="${"img"}" aria-label="${"calendar"}" aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi-calendar b-icon bi"}"><g><path d="${"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"}"></path></g></svg></button>
                    
                    <div id="${"ex-disabled-readonly__dialog_"}" role="${"dialog"}" tabindex="${"-1"}" aria-modal="${"false"}" aria-labelledby="${"ex-disabled-readonly__value_"}" class="${"dropdown-menu"}"></div><label id="${"ex-disabled-readonly__value_"}" for="${"ex-disabled-readonly"}" class="${"form-control text-muted"}">시작날짜</label></div>
                <div id="${"ex-disabled-readonly1__outer_"}" role="${"group"}" aria-labelledby="${"ex-disabled-readonly1__value_"}" class="${"b-form-btn-label-control dropdown b-form-datepicker width-200px margin-2px-left form-control"}" lang="${"en-GB"}"><button id="${"ex-disabled-readonly1"}" type="${"button"}" aria-haspopup="${"dialog"}" aria-expanded="${"false"}" class="${"btn h-auto"}"><svg viewBox="${"0 0 16 16"}" width="${"1em"}" height="${"1em"}" focusable="${"false"}" role="${"img"}" aria-label="${"calendar"}" aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi-calendar b-icon bi"}"><g><path d="${"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"}"></path></g></svg></button>
                    
                    <div id="${"ex-disabled-readonly1__dialog_"}" role="${"dialog"}" tabindex="${"-1"}" aria-modal="${"false"}" aria-labelledby="${"ex-disabled-readonly1__value_"}" class="${"dropdown-menu"}"></div><label id="${"ex-disabled-readonly1__value_"}" for="${"ex-disabled-readonly1"}" class="${"form-control text-muted"}">종료날짜</label></div> <select class="${"select width-150px margin-5px-left custom-select"}" placeholder="${"분류"}" id="${"__BVID__502"}"><option value="${"uid"}">유저아이디</option><option value="${"nickname"}">닉네임</option><option value="${"id"}">배팅ID</option><option value="${"match"}">경기번호</option><option value="${"competition"}">리그/팀명</option></select> <input type="${"text"}" placeholder="${"키워드 입력"}" class="${"input width-250px margin-5px-left"}"></div> <button class="${"btn_search"}"><i class="${"xi-search"}"></i></button> <button class="${"btn_1 btn_blue_light width-80px height-28px margin-5px-left"}">전체보기</button></div>
        <div class="${"box_type_02"}" style="${"height: calc(100% - 46px);"}"><div class="${"box_game_type_select margin-10px-top"}"><ul><li><ul><li><button class="${"active"}">유럽스포츠</button></li>
                            <li><button class="${""}">국내스포츠</button></li>
                            <li><button class="${""}">실시간스포츠</button></li>
                            <li><button class="${""}">E-스포츠</button></li>
                            <li><button class="${""}">가상스포츠</button></li></ul></li>
                    <li><ul><li><button class="${""}">라이브카지노</button></li>
                            <li><button class="${""}">슬롯</button></li></ul></li>
                    <li><ul><li><button class="${""}">파워볼</button></li>
                            <li><button class="${""}">파워사다리</button></li>
                            <li><button class="${""}">키노사다리</button></li>
                            <li><button class="${""}">스피드키노</button></li>
                            <li><button class="${""}">짱구홀짝</button></li>
                            <li><button class="${""}">짱구섯다</button></li>
                            <li><button class="${""}">짱구사다리</button></li>
                            <li><button class="${""}">짱구슬롯</button></li>
                            <li><button class="${""}">짱구룰렛</button></li></ul></li></ul></div>
            <div class="${"table_list_info_02"}"><div><div class="${"tab_list_line"}"><button class="${"active"}">전체</button> <button class="${""}">결과대기</button> <button class="${""}">결과완료</button> <button class="${""}">당첨내역</button> <button class="${""}">낙첨내역</button></div></div>
                <div></div></div>
            <div><ul class="${"ul_bet_history"}"><li><table class="${"table_bet_history"}"><colgroup><col width="${"4%"}">
                                <col width="${"4%"}">
                                <col width="${"10%"}">
                                <col width="${"5%"}">
                                <col width="${"5%"}">
                                <col width="${"7%"}">
                                <col width="${"10%"}">
                                <col width="${"*"}">
                                <col width="${"8%"}">
                                <col width="${"8%"}">
                                <col width="${"3%"}">
                                <col width="${"5%"}">
                                <col width="${"5%"}"></colgroup>
                            <thead><tr><th>번호</th>
                                    <th>배팅ID</th>
                                    <th>아이디(닉네임)</th>
                                    <th>경기번호</th>
                                    <th>경기상태</th>
                                    <th>경기시간</th>
                                    <th>리그명</th>
                                    <th>경기명</th>
                                    <th>경기타입</th>
                                    <th>배팅접수</th>
                                    <th>배당</th>
                                    <th>경기결과</th>
                                    <th>배팅결과</th></tr></thead></table></li></ul>
                <div class="${"ps"}" style="${"max-height: calc(100vh - 390px);"}"><ul class="${"ul_bet_history margin--1px-top"}"><li><table class="${"table_bet_history"}"><tbody><tr><td class="${"text-center padding-10px-tb"}">배팅내역이 없습니다.</td></tr></tbody></table></li></ul></div>
                <div class="${"display-flex justify-content-center margin-10px-tb"}"><ul class="${"pagination"}"><li class="${"disabled"}"><a tabindex="${"-1"}">이전</a></li>
                        <li class="${"disabled"}"><a tabindex="${"-1"}">다음</a></li></ul></div></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2c715cab.js.map
