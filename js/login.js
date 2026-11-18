const $d = document;
//login
const div = $d.querySelector('#login');
const form = $d.createElement('form');
form.classList.add('login_form');
form.innerHTML = `
  <fieldset>
    <label for="username">ユーザー名</label>
    <input for="username" id="form_username" type="text">

    <label for="password">パスワード</label>
    <input for="password" id="form_password" type="text">
  </fieldset>
`;
div.append(form);
