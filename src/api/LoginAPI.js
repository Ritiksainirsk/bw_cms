import Headers from './Headers';
import  config from '../config/config';
import { ProcessAPI } from '../util/Constants';

// Associate Login API
export const AssociateloginApi = async (username, password, success, failure, logout) => {
    const body = { username, password };
    const res = await fetch(config.link + "login/associate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Super Admin Login API
export const SuperadminLoginApi = async (username, password, success, failure, logout) => {
    const body = { username, password };
    const res = await fetch(config.link + "login/super-admin", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Organization Login API
export const OrganizationLoginApi = async (username, password, success, failure, logout) => {
    const body = { username, password };
    const res = await fetch(config.link + "login/organization", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Admin Login API
export const AdminLoginApi = async (username, password, success, failure, logout) => {
    const body = { username, password };
    const res = await fetch(config.link + "login/admin", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// export const login = (body, success, failure) => {
//   fetch(Config.server + '/login', new Header('POST', body))
//     .then(res => ProcessAPI(res, success, failure))
//     .catch(er => failure(er));
// };

// export const auth = (body, success, failure) => {
//   fetch(Config.server + '/auth', new Header('POST', body))
//   .then(res => ProcessAPI(res, success, failure))
//   .catch(er => failure(er));
// }

// export const logout = (success, failure) => {
//   fetch(Config.server + '/logout', new Header('POST', body))
//   .then(res => ProcessAPI(res, success, failure))
//   .catch(er => failure(er));
// }