import { Const } from '../util/Constants';

export default function FileHeaders(method, body){
  const auth = localStorage.getItem(Const.Token);
  const session = localStorage.getItem(Const.Session);
  const user = localStorage.getItem(Const.LoggedInUser);
  this.method = method;
  this.body = body;
}