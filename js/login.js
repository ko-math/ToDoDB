import {login} from './js/gas.js';
const $d = document;
//login
const div = $d.querySelector('#login');
const form = $d.createElement('form');
form.classList.add('login_form');
form.innerHTML = `
  <fieldset>
    <legend>ログイン</legend>
    <div>
      <label for="form_username">ユーザー名</label>
      <input id="form_username" type="text">
    </div>
    <div>
      <label for="form_password">パスワード</label>
      <input id="form_password" type="password">
    </div>
    <input id="form_submit" type="button" value="送信">
  </fieldset>
`;
div.append(form);
const b = $d.querySelector('#form_submit');
b.addEventListener('click',async ()=>{
  const u = $d.querySelector('#form_username');
  const p = $d.querySelector('#form_password');
  const r = await login(u.value,p.value);
  const res = await r.text();
  window.alert(res);
});
