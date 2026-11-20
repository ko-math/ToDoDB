const GAS = 'https://script.google.com/macros/s/AKfycbx_WYDVqskZisFwyjyEMpv8gGz1VfWlrOh2wQOCLO4N1geJgZNie7qZBx5sUml0MyOKBg/exec';
async function POST0(t,username,password){
  const u = await hash(username);
  const p = await hash(password);
  const payload = {
    type: t,
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

async function GET(t,username,password){
  const u = await hash(username);
  const p = await hash(password);
  let payload = {
    type: 'login',
    info:{
      username:u,
      password:p
    }
  }
  let r = await fetch(GAS,{
    method: 'POST',
    body: JSON.stringify(payload)
  });
  let res = await r.text();
  if(!res.ok){
    window.alert('パスワードが確認できませんでした。');
    location.href = '../index.html';
  }
  payload = {
    type: 'getData',
    info:{
      username:u
    }
  }
  r = await fetch(GAS,{
    method: 'GET',
    body: JSON.stringify(payload)
  });
  res = await r.text();
  const arr = res.split(':');
  const data = [];
  arr.forEach((e)=>{
    data.push(e.split(','));
  });
  window.alert(data);
}
  
async function hash(text){
  const data = new TextEncoder().encode(text);
  const hb = await crypto.subtle.digest('SHA-256',data);
  const ha = Array.from(new Uint8Array(hb));
  const hash = ha.map(b => b.toString(16).padStart(2,'0')).join('');  
  return hash;
}

export {POST0,GET};
