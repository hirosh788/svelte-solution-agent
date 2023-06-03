import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"wrap_container"}"><div class="${"wrap_navigation"}"><div><em>매출현황</em>
            <i class="${"xi-home"}"></i>홈<i class="${"xi-angle-right-thin"}"></i>매출현황
        </div></div>
    <div class="${"wrap_contents"}"><div class="${"wrap_search margin-10px-bottom"}"><em>SEARCH <i class="${"xi-search"}"></i></em>
            <div><select class="${"select width-150px margin-5px-left custom-select"}"><option value="${"2022"}">2022</option><option value="${"2021"}">2021</option><option value="${"2020"}">2020</option></select>
                <select class="${"select width-150px margin-5px-left custom-select"}"><option value="${"01"}">01</option><option value="${"02"}">02</option><option value="${"03"}">03</option><option value="${"04"}">04</option><option value="${"05"}">05</option><option value="${"06"}">06</option><option value="${"07"}">07</option><option value="${"08"}">08</option><option value="${"09"}">09</option><option value="${"10"}">10</option><option value="${"11"}">11</option><option value="${"12"}">12</option></select>
                <div><select class="${"select width-150px margin-5px-left custom-select"}"><option value="${""}">전체</option></select></div></div>
            <button class="${"btn_search"}"><i class="${"xi-search"}"></i></button></div>
        <div class="${"box_type_01"}" style="${"height: calc(100% - 46px);"}"><div class="${"padding-10px-lr padding-10px-top"}"><div><table class="${"table_list_02"}"><colgroup><col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}"></colgroup>
                        <thead><tr><th>날짜</th>
                                <th>충전 금액</th>
                                <th>환전 금액</th>
                                <th>수익(충전-환전)</th>
                                <th>유럽스포츠</th>
                                <th>국내스포츠</th>
                                <th>실시간스포츠</th>
                                <th>E-스포츠</th>
                                <th>가상스포츠</th>
                                <th>카지노</th>
                                <th>슬롯</th>
                                <th>미니게임</th>
                                <th>당첨금액 합계</th>
                                <th>수익배당 합계</th>
                                <th>배팅배당 합계</th></tr></thead></table>
                    <div class="${"ps ps--active-y"}" style="${"max-height: calc(100vh - 310px);"}"><table class="${"table_list_02"}"><colgroup><col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}">
                                <col width="${"7.142857142857143%"}"></colgroup>
                            <tbody><tr><td class="${"text-center"}">2022.12.24</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td>
                                    <td class="${"text-right"}">0</td></tr></tbody></table></div>
                    <table class="${"table_list_02 margin-5px-top"}"><colgroup><col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}">
                            <col width="${"7.142857142857143%"}"></colgroup>
                        <thead><tr class="${"bg-medium-light-gray"}"><th class="${"text-center"}">합계</th>
                                <th class="${"text-right"}">10,000</th>
                                <th class="${"text-right"}">80,000</th>
                                <th class="${"text-right"}">-70,000</th>
                                <th class="${"text-right"}">0</th>
                                <th class="${"text-right"}">0</th>
                                <th class="${"text-right"}">0</th>
                                <th class="${"text-right"}">0</th>
                                <th class="${"text-right"}">0</th>
                                <th class="${"text-right"}">55,000</th>
                                <th class="${"text-right"}">20,000</th>
                                <th class="${"text-right"}">10,000</th>
                                <th class="${"text-right"}">80,370</th>
                                <th class="${"text-right"}">0</th>
                                <th class="${"text-right"}">710</th></tr></thead></table></div></div></div></div></div>`;
});
export {
  Page as default
};
