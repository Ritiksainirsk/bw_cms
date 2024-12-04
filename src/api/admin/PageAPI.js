import Headers from '../Headers';
import  config from '../../config/config';
import { ProcessAPI } from '../../util/Constants';

// Table List API
export const list = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/list", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Table Setting API
export const tablesetting = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/table-setting", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Update Table Setting API
export const updateTableSetting = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/save-table-setting", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// GET Detail API
export const getDetails = async (id, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/detail/"+ id, new Headers("GET"));
    return ProcessAPI(res, success, failure, logout);
}

// Update admin API
export const addEditPage = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/add-edit", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Activate API
export const activate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/activate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Deactivate API
export const inActivate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/deactivate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Draft API
export const draft = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/draft", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Permanent Delete API
export const trash = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/permanentdelete", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Duplicate API
export const duplicate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "pagemanagement/duplicate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}
