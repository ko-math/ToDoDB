const $d = document;
//login
const div = $d.querySelector('#login');
const form = $d.createElement('form');
form.classList.add('login_form');
form.innerHTML = `
  <fieldset>
    <label for="form_username">ユーザー名</label>
    <input id="form_username" type="text">

    <label for="form_password">パスワード</label>
    <input id="form_password" type="text">
  </fieldset>
`;
div.append(form);
