const GAS = 'https://script.google.com/macros/s/AKfycbwM7mtFpKT95Em7OlsmhF1bJ_dPJfAjgh6Ph5hGJB2IWUXmJOua-5xhk2OpVAdEOhdpVw/exec';
async function POST(t,username,password){
  const u = await hash(username);
  const p = await hash(password);
  const payload = {
    type: t,
    info:{
      u:username,
      username:u,
      password:p
    }
  }
  const r = await fetch(GAS,{
    method: 'POST',
    body: JSON.stringify(payload)
  });
  return JSON.parse(r);
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
  if(!r.ok){
    window.alert('パスワードが確認できませんでした。');
    location.href = '../index.html';
  }
  r = await fetch(GAS,{
    method: 'POST',
    body: JSON.stringify(payload)
  });
  const arr = r.split(':');
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

export {POST,GET};
