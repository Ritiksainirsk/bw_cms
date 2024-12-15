import Headers from '../Headers';
import config from '../../config/config';
import { ProcessAPI } from '../../util/Constants';

// Table List API
export const list = async (body, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/list", new Headers("POST", body));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}

// Table Setting API
export const tablesetting = async (body, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/table-setting", new Headers("POST", body));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}

// Update Table Setting API
export const updateTableSetting = async (body, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/save-table-setting", new Headers("POST", body));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}

// GET Detail API
export const getDetails = async (id, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/detail/"+ id, new Headers("GET"));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}

// Add/Edit page API
export const addEditPage = async (body, success, failure, logout) => {
    try {
        const formattedBody = {
            fields: Object.keys(body),
            values: Object.values(body),
            admin_id: localStorage.getItem('admin_id') || '1'
        };
        
        console.log('Sending request to:', config.api + "pagemanagement/add-edit");
        console.log('Request body:', formattedBody);
        
        const res = await fetch(config.api + "pagemanagement/add-edit", new Headers("POST", formattedBody));
        console.log('Response:', res);
        
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Failed to save page');
        }
        
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        console.error('Error in addEditPage:', error);
        if (failure) failure(error);
        throw error;
    }
}

// Activate API
export const activate = async (body, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/activate", new Headers("POST", body));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}

// Deactivate API
export const inActivate = async (body, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/deactivate", new Headers("POST", body));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}

// Draft API
export const draft = async (body, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/draft", new Headers("POST", body));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}

// Permanent Delete API
export const trash = async (body, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/permanentdelete", new Headers("POST", body));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}

// Duplicate API
export const duplicate = async (body, success, failure, logout) => {
    try {
        const res = await fetch(config.api + "pagemanagement/duplicate", new Headers("POST", body));
        return ProcessAPI(res, success, failure, logout);
    } catch (error) {
        if (failure) failure(error);
        throw error;
    }
}
