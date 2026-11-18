async function(u,p){
  const payload = {
    info:{
      username:u,
      password:p
    }
  }
  const r = await fetch('',{
    "method": "POST",
    "type": "login",
    "body": JSON.parse(payload)
  }
}
