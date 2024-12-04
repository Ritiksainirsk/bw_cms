import FileHeaders from '../FileHeaders';
import  config from '../../config/config';
import { ProcessAPI } from '../../util/Constants';

// single image upload API
export const singleFileUpload = async (body, success, failure, logout) => {
    const res = await fetch(config.link + "file/siu", {method:"POST", body: body});
    return ProcessAPI(res, success, failure, logout);
}