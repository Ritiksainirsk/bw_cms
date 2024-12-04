import Headers from '../Headers';
import  config from '../../config/config';
import { ProcessAPI } from '../../util/Constants';

// Table List API
export const list = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/list", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Table Setting API
export const tablesetting = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/table-setting", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Update Table Setting API
export const updateTableSetting = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/save-table-setting", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// GET Detail API
export const getDetails = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/detail/"+ body.id, new Headers("GET"));
    return ProcessAPI(res, success, failure, logout);
}

// GET Component Detail API
export const getComponentDetails = async (id, success, failure, logout) => {
    const res = await fetch(config.link + "template/component-detail/"+ id, new Headers("GET"));
    return ProcessAPI(res, success, failure, logout);
}

// Update admin API
export const addEdit = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/add-edit", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Activate API
export const activate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/activate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Deactivate API
export const inActivate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/deactivate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Draft API
export const draft = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/draft", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Permanent Delete API
export const trash = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/permanentdelete", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}

// Duplicate API
export const duplicate = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "template/duplicate", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}
