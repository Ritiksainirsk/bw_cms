// create a api folder in src & file as : 
// pagemanagementAPI.js

import Headers from '../Headers';
import  config from '../../config/config';
import { ProcessAPI } from '../../util/Constants';

// Get SET Info API
export const getPageInfo = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "api/page-info", new Headers("POST", body));
    return ProcessAPI(res, success, failure, logout);
}