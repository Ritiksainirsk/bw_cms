import { Const } from '../util/Constants';

export default function Headers(method, body){
  const auth = localStorage.getItem(Const.Token);
  const session = localStorage.getItem(Const.Session);
    this.method = method;
    this.headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'authtoken': auth,
      'session': session
  };
  if (body) {
    this.body = JSON.stringify(body);
  }
}