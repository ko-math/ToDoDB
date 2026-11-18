async function(u,p){
  const payload = {
    type:login,
    info:{
      username:u,
      password:p
    }
  }
  const r = await fetch('',{
    method: 'POST',
    body: JSON.stringify(payload);
  }
}
