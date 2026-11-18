const GAS = 'https://script.google.com/macros/s/AKfycbyc30YTAkKXKEyItfWNIB9YH8df2I3GPU5CKSii4h6Wu_nNf8YkQNyQyXL4wrCwSIBG4g/exec';
const username = 'test0';
const password = 'test0';
register(username,password).then(r=>{
  window.alert(JSON.stringify(r));
});

login(username,password).then(r=>{
  window.alert(JSON.stringify(r));
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
async function register(u,p){
  const pass = await hash(p);
  const payload = {
    type: 'register',
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
