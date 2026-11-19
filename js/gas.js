const GAS = 'https://script.google.com/macros/s/AKfycbwMJC0qU3KyT3KtBtFIlkM5WZtIHGCoi0qcm8NWiXaqZ5BXBD3-Nwd4a7Il86TWzRDsug/exec';
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

async function hash(text){
  const data = new TextEncoder().encode(text);
  const hb = await crypto.subtle.digest('SHA-256',data);
  const ha = Array.from(new Uint8Array(hb));
  const hash = ha.map(b => b.toString(16).padStart(2,'0')).join('');  
  return hash;
}

export {POST0};
