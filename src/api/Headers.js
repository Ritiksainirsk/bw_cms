import { Const } from '../util/Constants';

export default function Headers(method, body) {
    const auth = localStorage.getItem(Const.Token);
    const session = localStorage.getItem(Const.Session);
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (auth) headers['authtoken'] = auth;
    if (session) headers['session'] = session;

    const config = {
        method: method,
        headers: headers,
        credentials: 'include'
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    return config;
}