import { reactLocalStorage } from 'reactjs-localstorage';
import { Token } from './Constants';

export default getToken = () => {
  return reactLocalStorage.getObject(Token)
}