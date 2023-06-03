import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"wrap_container no-padding-left"}" style="${"margin-top:0"}"><div class="${"wrap_intro"}"><div><div class="${"box_login"}"><b><i class="${"xi-unlock-o"}"></i></b> <em><strong>Asti</strong> Sign in</em> <span>Agent System</span>
                <div class="${"login_form"}"><label>Login</label> <input type="${"text"}" placeholder="${"아이디 입력"}"> <label class="${"margin-5px-top"}">Password</label>
                    <div class="${"position-relative"}"><i class="${"xi-eye i_password"}"></i> <input type="${"password"}" placeholder="${"비밀번호 입력"}"></div> <button class="${"btn_login margin-20px-top"}">로그인</button></div></div></div>
        <div><div><em>Asti 에이전트 시스템입니다.<br>
                    로그인 후 이용해 주세요.
                </em></div></div></div></div>`;
});
export {
  Page as default
};
