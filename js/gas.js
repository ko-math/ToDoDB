const GAS = 'https://script.google.com/macros/s/AKfycbx-logAKDFsk3oDlCe6B8VAqj1Bu-ZQxA3-DLEJBlSL--P8RSLfeb9chup8xHa_ICtM5w/exec';
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

export {login,register};
