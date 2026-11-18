async function(u,p){
  const payload = {
    info:{
      username:u,
      password:p
    }
  }
  const r = await fetch('',JSON.parse(payload)); 
}
