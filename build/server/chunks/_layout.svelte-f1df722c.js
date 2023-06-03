import { c as create_ssr_component, v as validate_component } from './index-f78c0b16.js';

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"wrap_header"}"><div class="${"header"}"><div><h1><a href="${"/./"}" class="${"nuxt-link-exact-active nuxt-link-active"}" aria-current="${"page"}"><strong class="${"red"}">Goodfriends</strong> AgentManager</a></h1></div>
        <div><div class="${"top_menu"}"><a href="${"/https://good-friends.com/"}" target="${"_blank"}" rel="${"noopener noreferrer"}">사이트홈</a> <button class="${"logout"}">로그아웃</button></div>
            <div class="${"top_alram"}">로그인 정보: 대본사
            </div></div></div>
    <div class="${"menu"}"><ul><li class="${""}"><a href="${"/./"}" class="${"job active"}" aria-current="${"page"}">매출현황</a></li>
            <li class="${""}"><a href="${"/#"}" class="${"job"}">입출금 조회</a>
                <ul><li><a href="${"/deposit"}">입금목록 조회</a></li>
                    <li><a href="${"/withdraw"}">출금목록 조회</a></li></ul></li>
            <li class="${""}"><a href="${"/member-bet"}" class="${"job"}">회원배팅</a></li>
            <li class="${""}"><a href="${"/#"}" class="${"job"}">회원 조회</a>
                <ul><li><a href="${"/member-list"}">전체 회원 목록</a></li>
                    <li><a href="${"/current-member"}">현재 접속 회원</a></li></ul></li>
            <li class="${""}"><a href="${"/agent-list"}" class="${"job"}">에이전트관리</a></li>
            <li class="${""}"><a href="${"/#"}" class="${"job"}">이벤트포인트</a>
                <ul><li><a href="${"/event-point-list"}">이벤트포인트 관리(회원)</a></li>
                    <li><a href="${"/event-point-list-agent"}">이벤트포인트 관리(에이전트)</a></li></ul></li>
            <li class="${""}"><a href="${"/#"}" class="${"job"}">마일리지 정산</a>
                <ul><li><a href="${"/mile-profit"}">마일리지 출금신청</a></li>
                    <li><a href="${"/mile-change"}">마일리지 변동내역</a></li></ul></li></ul></div></div>
<div class="${"wrap_quick"}"><div class="${"box_quick left_menu"}"><em>회원통계</em>
        <div class="${"ps"}" style="${"height: calc(100% - 40px);"}"><ul><li><span><i class="${"xi-play"}"></i>회원수</span> <span class="${"text-right"}">7 명</span></li>
                <li><span><i class="${"xi-play"}"></i>회원 총 보유금</span> <span class="${"text-right"}">1,836,941 원</span></li>
                <li><span><i class="${"xi-play"}"></i>배팅 진행중</span> <span class="${"text-right"}">0 원</span></li>
                <li><span><i class="${"xi-play"}"></i>보유 마일리지</span> <span class="${"text-right"}">9,806,629 원</span></li>
                <li><b>최근 1주일간 통계</b></li>
                <li><span><i class="${"xi-play"}"></i>가입자 수</span> <span class="${"text-right"}">0 명</span></li></ul></div></div>
</div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-f1df722c.js.map
