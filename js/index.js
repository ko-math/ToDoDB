const GAS = 'https://script.google.com/macros/s/AKfycbzA8YzHoaKsuZiNi7Jjk-8rTqspbJM14WTWfLciN0zn9E2oWRIHWe5zP8_g4q42Xdqr4w/exec';
const username = 'ko';
const password = '0';
login(username,password).then(r=>{
  window.alert(r);
});
async function login(u,p){
  const pass = await hash(p);
  const payload = {
    type: 'login',
    info:{
      username:u,
      password:pass
    }
  }
  const r = await fetch(GAS,{
    method: 'POST',
    body: JSON.stringify(payload)
  });
  const res = await r.text();
  return JSON.parse(res);
}
async function hash(text){
  const data = new TextEncoder().encode(text);
  const hb = await crypto.subtle.digest('SHA-256',data);
  const ha = Array.from(new Uint8Array(hb));
  const hash = ha.map(b => b.toString(16).padStart(2,'0')).join('');  
  return hash;
}
