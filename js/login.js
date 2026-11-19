import {POST0} from './gas.js';
const $d = document;
let type = 'login';
//login
const div = $d.querySelector('#login');
(()=>{
  const form = $d.createElement('form');
  form.id = 'login_register';
  form.innerHTML = `
      <input name="type_login" type="radio" value="login" checked>
      <input name="type_login" type="radio" value="register">
  `;
  div.append(form);
})();

(()=>{
  const form = $d.createElement('form');
  form.id = 'login_form';
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
})();
const b = $d.querySelector('#form_submit');
b.addEventListener('click',async ()=>{
  const u = $d.querySelector('#form_username');
  const p = $d.querySelector('#form_password');
  const r = await POST0(type,u.value,p.value);
  const res = r;
  console.log(res);
});

const c = $d.querySelector('input[name="type_login"]').forEach((r)=>{
  r.addEventListener('change',(e)=>{
    type = e.target.value;
  });
});
