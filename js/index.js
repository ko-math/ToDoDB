const GAS = 'https://script.google.com/macros/s/AKfycbzA8YzHoaKsuZiNi7Jjk-8rTqspbJM14WTWfLciN0zn9E2oWRIHWe5zP8_g4q42Xdqr4w/exec';
async function login(u,p){
  const payload = {
    type: 'login',
    info:{
      username:u,
      password:p
    }
  }
  const r = await fetch(GAS,{
    method: 'POST',
    body: JSON.stringify(payload);
  }
  return await r.text();
}
alert(login('test_user0','auth'));
