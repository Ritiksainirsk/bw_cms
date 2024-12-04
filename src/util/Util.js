import parse from 'html-react-parser';

export const htmlParse = (data) => {
    if(data!=null){return parse(data)}
    return "";
};

export const dateFormate = (date) => {
    const dateObj = new Date(date);
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    return formattedDate;
}

export const checkPermission = (value, viewIndex) => {
    if (value && typeof value == 'number' && value > 0) {
        const permissions = Number(value).toString(2).split('').reverse().map(item => item === '1');
        Object.keys(viewIndex).forEach(function(key, value){
            if (permissions.length > value) {
                viewIndex[key] = permissions[value];
            }else{
                viewIndex[key] = false;
            }
        })
        return viewIndex
    }else{
        return false;
    }
}

export const binaryToNumber = (value) => {
    if (value) {
        const binaryToNumber = parseInt(value, 2);
        return binaryToNumber
    }else{
        return 0;
    }
}

export const permissionCount = (value) => {
    if (value && typeof value == 'number' && value > 0) {
        const permissions = Number(value).toString(2).split('')
        const total = permissions.length;
        const count = permissions.filter(item => item === '1').length;
        return {count,total};
    }
    return {count:0,total:0};
}