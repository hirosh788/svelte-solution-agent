import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"wrap_container"}"><div class="${"wrap_navigation"}"><div><em>매출현황</em>
            <i class="${"xi-home"}"></i>홈<i class="${"xi-angle-right-thin"}"></i>매출현황
        </div></div>

    <div class="${"wrap_contents"}"><div class="${"wrap_search margin-10px-bottom"}"><em>SEARCH <i class="${"xi-search"}"></i></em>
            <div><div id="${"ex-disabled-readonly__outer_"}" role="${"group"}" aria-labelledby="${"ex-disabled-readonly__value_"}" class="${"b-form-btn-label-control dropdown b-form-datepicker width-200px margin-5px-left form-control"}" lang="${"en-GB"}"><button id="${"ex-disabled-readonly"}" type="${"button"}" aria-haspopup="${"dialog"}" aria-expanded="${"false"}" class="${"btn h-auto"}"><svg viewBox="${"0 0 16 16"}" width="${"1em"}" height="${"1em"}" focusable="${"false"}" role="${"img"}" aria-label="${"calendar"}" aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi-calendar b-icon bi"}"><g><path d="${"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"}"></path></g></svg></button>
                    
                    <div id="${"ex-disabled-readonly__dialog_"}" role="${"dialog"}" tabindex="${"-1"}" aria-modal="${"false"}" aria-labelledby="${"ex-disabled-readonly__value_"}" class="${"dropdown-menu"}">
                    </div><label id="${"ex-disabled-readonly__value_"}" for="${"ex-disabled-readonly"}" class="${"form-control text-muted"}">시작날짜</label></div>
                <div id="${"ex-disabled-readonly1__outer_"}" role="${"group"}" aria-labelledby="${"ex-disabled-readonly1__value_"}" class="${"b-form-btn-label-control dropdown b-form-datepicker width-200px margin-2px-left form-control"}" lang="${"en-GB"}"><button id="${"ex-disabled-readonly1"}" type="${"button"}" aria-haspopup="${"dialog"}" aria-expanded="${"false"}" class="${"btn h-auto"}"><svg viewBox="${"0 0 16 16"}" width="${"1em"}" height="${"1em"}" focusable="${"false"}" role="${"img"}" aria-label="${"calendar"}" aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi-calendar b-icon bi"}"><g><path d="${"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"}"></path></g></svg></button>
                    
                    <div id="${"ex-disabled-readonly1__dialog_"}" role="${"dialog"}" tabindex="${"-1"}" aria-modal="${"false"}" aria-labelledby="${"ex-disabled-readonly1__value_"}" class="${"dropdown-menu"}">
                    </div><label id="${"ex-disabled-readonly1__value_"}" for="${"ex-disabled-readonly1"}" class="${"form-control text-muted"}">종료날짜</label></div></div> <button class="${"btn_search"}"><i class="${"xi-search"}"></i></button> <button class="${"btn_1 btn_blue_light width-80px height-28px margin-5px-left"}">전체보기</button></div>
        <div class="${"box_type_01"}" style="${"height: calc(100% - 46px);"}"><div class="${"padding-10px-lr padding-10px-top"}"><div><table class="${"table_list_02"}"><col width="${"120"}">
                        <col width="${"100"}">
                        <col width="${"150"}">
                        <col width="${"18%"}">
                        <col width="${"150"}">
                        <col width="${"150"}">
                        <col width="${"*"}">
                        <thead><tr><th>번호</th>
                                <th>구분</th>
                                <th>일시</th>
                                <th>내용</th>
                                <th>금액</th>
                                <th>보유 마일리지</th>
                                <th></th></tr></thead></table>
                    <div class="${"ps"}" style="${"max-height: calc(100vh - 310px);"}"><table class="${"table_list_02"}"><col width="${"120"}">
                            <col width="${"100"}">
                            <col width="${"150"}">
                            <col width="${"18%"}">
                            <col width="${"150"}">
                            <col width="${"150"}">
                            <col width="${"*"}">
                            <tbody><tr><td class="${"text-center"}">9</td>
                                    <td class="${"text-center"}">입금</td>
                                    <td class="${"text-center"}">2022.12.20 13:06:30</td>
                                    <td class="${"text-center"}">CASINO AGENCY 정산 [배팅건수 : 48건]</td>
                                    <td class="${"text-right"}">460</td>
                                    <td class="${"text-right"}">10,256,629</td>
                                    <td></td></tr></tbody></table></div></div></div>
            <div class="${"display-flex justify-content-center margin-10px-tb"}"><ul class="${"pagination"}"><li class="${"disabled"}"><a tabindex="${"-1"}">이전</a></li>
                    <li class="${"page-item active"}"><a tabindex="${"0"}">1</a></li>
                    <li class="${"disabled"}"><a tabindex="${"-1"}">다음</a></li></ul></div></div></div></div>`;
});
export {
  Page as default
};
