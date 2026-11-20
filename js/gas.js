const GAS = 'https://script.google.com/macros/s/AKfycbwyAIulJPxIW6E_uys5QLop3wIca9pXjAwXJyRvE17y4ibwuL03BSjLKlQAbf8zWgwqHg/exec';

export async function POST(t, username, password) {
  const u = await hash(username);
  const p = await hash(password);
  const payload = {
    type: t,
    info: {
      u: username,
      username: u,
      password: p
    }
  };
  const r = await fetch(GAS, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  // ResponseオブジェクトからJSONを取り出す
  return await r.json();
}

export async function GET(t, username, password) {
  const u = await hash(username);
  const p = await hash(password);
  
  // 1. ログイン確認
  let payload = {
    type: 'login',
    info: {
      u: username,
      username: u,
      password: p
    }
  };
  let r = await fetch(GAS, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  const loginRes = await r.json();

  if (!loginRes.ok) {
    window.alert('パスワードが確認できませんでした。');
    location.href = '../index.html';
    return null;
  }

  // 2. データ取得（typeを 'getData' に変更）
  payload = {
    type: 'getData',
    info: {
      u: username,
      username: u
    }
  };
  r = await fetch(GAS, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  const dataRes = await r.json();
  
  // GAS側から返ってきた data 配列を返す
  return dataRes.info?.data;
}

async function hash(text) {
  const data = new TextEncoder().encode(text);
  const hb = await crypto.subtle.digest('SHA-256', data);
  const ha = Array.from(new Uint8Array(hb));
  return ha.map(b => b.toString(16).padStart(2, '0')).join('');
}
