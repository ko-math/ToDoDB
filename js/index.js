import * as gasLib from './gas.js';
import {p,LOGIN_RESPONSE} from './login.js';
function readData(){
  const r = await gasLib.GET('getData',LOGIN_RESPONSE.info.username,p);
}
