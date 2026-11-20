import * as gasLib from './gas.js';
const $d = document;
let type = 'login';
export let LOGIN_RESPONSE = 'INIT';
//login
const div = $d.querySelector('#login');
(()=>{
  const form = $d.createElement('form');
  form.id = 'login_register';
  form.innerHTML = `
      <label><input name="type_login" type="radio" value="login" checked>login</label>
      <label><input name="type_login" type="radio" value="register">register</label>
  `;
  div.append(form);
})();

(()=>{
  const form = $d.createElement('form');
  form.id = 'login_form';
  form.innerHTML = `
    <fieldset>
      <legend>login</legend>
      <div>
        <label for="form_username">Username</label>
        <input id="form_username" type="text">
      </div>
      <div>
        <label for="form_password">Password</label>
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
  LOGIN_RESPONCE = await gasLib.POST0(type,u.value,p.value);
});

const c = $d.querySelectorAll('input[name="type_login"]').forEach((r)=>{
  r.addEventListener('change',(e)=>{
    type = e.target.value;
    $d.querySelector('#login_form fieldset legend').textContent = type;
  });
});
