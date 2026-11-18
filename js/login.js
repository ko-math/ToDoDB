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
      <input id="form_password" type="text">
    </div>
    <button id="form_submit">送信</button>
  </fieldset>
`;
div.append(form);
