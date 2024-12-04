import Headers from '../Headers';
import  config from '../../config/config';
import { ProcessAPI } from '../../util/Constants';

// Table List API
export const list = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/list", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Export List API
export const exportList = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/export", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Export List API
export const getRoleList = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/getrolelist", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// GET Detail API
export const getDetails = async (id, success, failure, logout) => {
    const res = await fetch(config.link + "role/detail/"+ id, new Headers("GET"));
    return ProcessAPI(res, success, failure, logout);
}

// Update Associate API
export const addEditRole = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/add-edit", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Activate API
export const activate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/activate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Deactivate API
export const inActivate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/deactivate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Draft API
export const draft = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/draft", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Permanent Delete API
export const trash = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/permanentdelete", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Duplicate API
export const duplicate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "role/duplicate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}