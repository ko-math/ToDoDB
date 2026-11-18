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
    body: JSON.stringify(payload)
  });
  const res = await r.text();
  return JSON.parse(res);
}

login('test_user0','auth0').then(r=>{
  window.alert(r);
});
